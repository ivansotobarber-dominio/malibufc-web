(function () {
  'use strict';

  const api = window.createMalibuControlApi({ mode: 'mock' });
  const state = {
    teamId: 'all',
    eventId: '',
    players: [],
    events: [],
    availability: {},
    callups: [],
    dashboard: null,
  };

  const elements = {
    teamFilter: document.querySelector('#team-filter'),
    eventFilter: document.querySelector('#event-filter'),
    metricGrid: document.querySelector('#metric-grid'),
    dashboardEvents: document.querySelector('#dashboard-events'),
    eventCount: document.querySelector('#event-count'),
    dashboardContext: document.querySelector('#dashboard-context'),
    responseBreakdown: document.querySelector('#response-breakdown'),
    sourceNotice: document.querySelector('#source-notice'),
    renewalChart: document.querySelector('#renewal-chart'),
    assignmentChart: document.querySelector('#assignment-chart'),
    readinessChart: document.querySelector('#readiness-chart'),
    recruitmentChart: document.querySelector('#recruitment-chart'),
    eventsList: document.querySelector('#events-list'),
    availabilityList: document.querySelector('#availability-list'),
    callupList: document.querySelector('#callup-list'),
    callupSelected: document.querySelector('#callup-selected'),
    callupTarget: document.querySelector('#callup-target'),
    callupNotice: document.querySelector('#callup-notice'),
    saveCallup: document.querySelector('#save-callup-button'),
    dialog: document.querySelector('#event-dialog'),
    eventForm: document.querySelector('#event-form'),
    toast: document.querySelector('#toast'),
  };

  const labels = {
    first: 'Primer equipo',
    second: 'Segundo equipo',
    both: 'Ambos equipos',
    available: 'Disponible',
    doubt: 'Duda',
    unavailable: 'No disponible',
    no_response: 'Sin respuesta',
    draft: 'Borrador',
    availability_open: 'Disponibilidad abierta',
  };

  function eligiblePlayers() {
    const event = selectedEvent();
    if (!event) return [];
    return state.players.filter((player) => event.teamId === 'both' || player.teamId === event.teamId);
  }

  function selectedEvent() {
    return state.events.find((event) => event.eventId === state.eventId);
  }

  function formatDate(value) {
    return new Intl.DateTimeFormat('es-ES', {
      weekday: 'short',
      day: '2-digit',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'Atlantic/Canary',
    }).format(new Date(value));
  }

  function escapeHtml(value) {
    const node = document.createElement('span');
    node.textContent = String(value);
    return node.innerHTML;
  }

  function showToast(message) {
    elements.toast.textContent = message;
    elements.toast.classList.add('is-visible');
    window.setTimeout(() => elements.toast.classList.remove('is-visible'), 2400);
  }

  async function load() {
    [state.players, state.events, state.dashboard] = await Promise.all([
      api.getPlayers('all'),
      api.getEvents(state.teamId),
      api.getDashboard(state.teamId),
    ]);
    if (!state.events.some((event) => event.eventId === state.eventId)) {
      state.eventId = state.events[0] ? state.events[0].eventId : '';
    }
    await loadEventData();
    render();
  }

  async function loadEventData() {
    if (!state.eventId) {
      state.availability = {};
      state.callups = [];
      return;
    }
    [state.availability, state.callups] = await Promise.all([
      api.getAvailability(state.eventId),
      api.getCallups(state.eventId),
    ]);
  }

  function render() {
    renderEventFilter();
    renderDashboard();
    renderEvents();
    renderAvailability();
    renderCallups();
  }

  function renderEventFilter() {
    elements.eventFilter.innerHTML = state.events.length
      ? state.events.map((event) => `<option value="${event.eventId}">${escapeHtml(event.title)}</option>`).join('')
      : '<option value="">Sin eventos</option>';
    elements.eventFilter.value = state.eventId;
  }

  function percent(value, total) {
    return total > 0 ? Math.round(value / total * 100) : 0;
  }

  function renderBarChart(container, breakdown, labelMap) {
    container.replaceChildren();
    const entries = Object.entries(breakdown || {});
    const total = entries.reduce((sum, entry) => sum + Number(entry[1] || 0), 0);
    if (!entries.length || total === 0) {
      container.textContent = 'Sin datos para este filtro.';
      container.classList.add('is-empty');
      return;
    }
    container.classList.remove('is-empty');
    entries.sort((a, b) => Number(b[1]) - Number(a[1])).forEach(([key, rawValue]) => {
      const value = Number(rawValue || 0);
      const row = document.createElement('div');
      row.className = 'bar-row';
      const header = document.createElement('div');
      const label = document.createElement('span');
      label.textContent = labelMap && labelMap[key] ? labelMap[key] : key;
      const amount = document.createElement('strong');
      amount.textContent = String(value);
      header.append(label, amount);
      const track = document.createElement('div');
      track.className = 'bar-track';
      const fill = document.createElement('span');
      fill.style.width = percent(value, total) + '%';
      track.appendChild(fill);
      row.append(header, track);
      container.appendChild(row);
    });
  }

  function renderReadiness(readiness, total) {
    elements.readinessChart.replaceChildren();
    const items = [
      ['Activos para convocatorias', Number(readiness.activeCallups || 0)],
      ['Asignación definida', Number(readiness.assigned || 0)],
      ['Posición definida', Number(readiness.positionDefined || 0)],
    ];
    items.forEach(([labelText, value]) => {
      const row = document.createElement('div');
      row.className = 'readiness-row';
      const copy = document.createElement('div');
      const label = document.createElement('span');
      label.textContent = labelText;
      const amount = document.createElement('strong');
      amount.textContent = value + ' de ' + total;
      copy.append(label, amount);
      const progress = document.createElement('div');
      progress.className = 'readiness-track';
      const fill = document.createElement('span');
      fill.style.width = percent(value, total) + '%';
      progress.appendChild(fill);
      row.append(copy, progress);
      elements.readinessChart.appendChild(row);
    });
  }

  function renderDashboard() {
    const players = state.players.filter((player) => state.teamId === 'all' || player.teamId === state.teamId);
    const eventPlayers = eligiblePlayers();
    const statuses = eventPlayers.map((player) => state.availability[player.playerId] || 'no_response');
    const available = statuses.filter((status) => status === 'available').length;
    const responded = statuses.filter((status) => status !== 'no_response').length;
    const target = selectedEvent() ? selectedEvent().callupTarget : 0;
    const dashboard = state.dashboard || { metrics: {}, breakdowns: {}, readiness: {}, source: {} };
    const summary = dashboard.metrics || {};
    const totalPlayers = Number(summary.players || players.length || 0);
    const assigned = Number(summary.assigned || 0);
    const positionDefined = Number(summary.positionDefined || 0);
    const metrics = [
      ['Jugadores gestionables', summary.manageable ?? players.length, totalPlayers + ' jugadores registrados'],
      ['Renovaciones pendientes', summary.renewalPending ?? '—', 'Requieren decisión'],
      ['Asignación definida', totalPlayers ? percent(assigned, totalPlayers) + '%' : '—', assigned + ' de ' + totalPlayers],
      ['Posición definida', totalPlayers ? percent(positionDefined, totalPlayers) + '%' : '—', positionDefined + ' de ' + totalPlayers],
      ['Altas y pruebas', summary.recruitment ?? '—', 'Seguimiento activo'],
      ['Eventos registrados', summary.events ?? state.events.length, labels[state.teamId] || 'Ambos equipos'],
      ['Respuesta del evento', eventPlayers.length ? percent(responded, eventPlayers.length) + '%' : '—', responded + ' de ' + eventPlayers.length],
      ['Convocatoria', state.callups.length, target ? 'Objetivo ' + target + ' · déficit ' + Math.max(0, target - state.callups.length) : 'Sin objetivo'],
    ];
    elements.metricGrid.innerHTML = metrics.map(([label, value, detail]) => `
      <article class="metric">
        <span>${escapeHtml(label)}</span>
        <strong>${escapeHtml(value)}</strong>
        <small>${escapeHtml(detail)}</small>
      </article>
    `).join('');

    const source = dashboard.source || {};
    elements.sourceNotice.className = 'source-notice ' + (source.mode === 'remote' ? 'is-live' : 'is-demo');
    elements.sourceNotice.textContent = source.mode === 'remote'
      ? 'Datos agregados de Google Sheets. Actualización: ' + (source.updatedAt || 'actual') + '.'
      : 'Demostración con datos sintéticos. La hoja real solo se conectará mediante la API autorizada.';
    document.querySelector('#mode-badge').textContent = source.mode === 'remote' ? 'Google Sheets' : 'Datos simulados';

    renderBarChart(elements.renewalChart, dashboard.breakdowns && dashboard.breakdowns.renewals);
    renderBarChart(elements.assignmentChart, dashboard.breakdowns && dashboard.breakdowns.assignments, { first: 'Primer equipo', second: 'Segundo equipo', both: 'Ambos equipos' });
    renderBarChart(elements.recruitmentChart, dashboard.breakdowns && dashboard.breakdowns.recruitment);
    renderReadiness(dashboard.readiness || {}, totalPlayers);

    elements.dashboardContext.textContent = selectedEvent() ? selectedEvent().title : 'Sin evento seleccionado';
    elements.eventCount.textContent = state.events.length + ' eventos';
    elements.dashboardEvents.innerHTML = state.events.slice(0, 3).map(eventCard).join('') || emptyState('No hay eventos para este filtro.');

    const counts = ['available', 'doubt', 'unavailable', 'no_response'].map((status) => ({
      status,
      count: statuses.filter((value) => value === status).length,
    }));
    elements.responseBreakdown.innerHTML = counts.map(({ status, count }) => `
      <div class="breakdown-row">
        <span><i class="dot ${status}"></i>${labels[status]}</span>
        <strong>${count}</strong>
      </div>
    `).join('');
  }

  function eventCard(event) {
    return `
      <button class="event-card ${event.eventId === state.eventId ? 'is-selected' : ''}" type="button" data-event-id="${event.eventId}">
        <span class="event-date">${formatDate(event.startAt)}</span>
        <strong>${escapeHtml(event.title)}</strong>
        <span>${labels[event.teamId]} · ${escapeHtml(event.location)}</span>
        <small>${labels[event.status] || event.status}</small>
      </button>
    `;
  }

  function renderEvents() {
    elements.eventsList.innerHTML = state.events.map(eventCard).join('') || emptyState('No hay eventos para este filtro.');
  }

  function renderAvailability() {
    const players = eligiblePlayers();
    elements.availabilityList.innerHTML = players.map((player) => {
      const current = state.availability[player.playerId] || 'no_response';
      return `
        <article class="player-row">
          <div class="player-info">
            <span class="avatar">${player.displayName.slice(-2)}</span>
            <div><strong>${player.displayName}</strong><small>${player.position}</small></div>
          </div>
          <div class="segmented" aria-label="Disponibilidad de ${player.displayName}">
            ${['available', 'doubt', 'unavailable'].map((status) => `
              <button type="button" class="${current === status ? 'is-active' : ''}" data-player-id="${player.playerId}" data-status="${status}">
                ${status === 'available' ? 'Sí' : status === 'doubt' ? 'Duda' : 'No'}
              </button>
            `).join('')}
          </div>
        </article>
      `;
    }).join('') || emptyState('Selecciona un evento para registrar disponibilidad.');
  }

  function renderCallups() {
    const event = selectedEvent();
    const players = eligiblePlayers().sort((a, b) => {
      const rank = { available: 0, doubt: 1, no_response: 2, unavailable: 3 };
      return rank[state.availability[a.playerId] || 'no_response'] - rank[state.availability[b.playerId] || 'no_response'];
    });
    elements.callupTarget.textContent = event ? event.callupTarget : 0;
    elements.callupSelected.textContent = state.callups.length;
    const deficit = event ? event.callupTarget - state.callups.length : 0;
    elements.callupNotice.className = `notice ${deficit > 0 ? 'is-warning' : 'is-complete'}`;
    elements.callupNotice.textContent = !event
      ? 'Selecciona un evento.'
      : deficit > 0
        ? `Faltan ${deficit} selecciones para el objetivo.`
        : deficit === 0
          ? 'Objetivo de convocatoria cubierto.'
          : `Hay ${Math.abs(deficit)} selecciones por encima del objetivo.`;
    elements.callupList.innerHTML = players.map((player) => {
      const status = state.availability[player.playerId] || 'no_response';
      const selected = state.callups.includes(player.playerId);
      return `
        <label class="player-row selectable ${selected ? 'is-selected' : ''}">
          <div class="player-info">
            <span class="avatar">${player.displayName.slice(-2)}</span>
            <div>
              <strong>${player.displayName}</strong>
              <small><i class="dot ${status}"></i>${labels[status]} · ${player.position}</small>
            </div>
          </div>
          <input type="checkbox" value="${player.playerId}" ${selected ? 'checked' : ''}>
        </label>
      `;
    }).join('') || emptyState('No hay jugadores elegibles para el evento.');
  }

  function emptyState(message) {
    return `<p class="empty-state">${message}</p>`;
  }

  async function selectEvent(eventId) {
    state.eventId = eventId;
    await loadEventData();
    render();
  }

  document.querySelector('.tabs').addEventListener('click', (event) => {
    const button = event.target.closest('[data-view]');
    if (!button) return;
    document.querySelectorAll('.tab').forEach((tab) => tab.classList.toggle('is-active', tab === button));
    document.querySelectorAll('[data-view-panel]').forEach((panel) => {
      const active = panel.dataset.viewPanel === button.dataset.view;
      panel.hidden = !active;
      panel.classList.toggle('is-active', active);
    });
  });

  elements.teamFilter.addEventListener('change', async () => {
    state.teamId = elements.teamFilter.value;
    await load();
  });
  elements.eventFilter.addEventListener('change', () => selectEvent(elements.eventFilter.value));
  document.querySelector('.app-main').addEventListener('click', (event) => {
    const eventCardButton = event.target.closest('[data-event-id]');
    if (eventCardButton) selectEvent(eventCardButton.dataset.eventId);
  });
  elements.availabilityList.addEventListener('click', async (event) => {
    const button = event.target.closest('[data-player-id][data-status]');
    if (!button) return;
    await api.saveAvailability(state.eventId, button.dataset.playerId, button.dataset.status);
    state.availability[button.dataset.playerId] = button.dataset.status;
    render();
    showToast('Disponibilidad simulada actualizada.');
  });
  elements.callupList.addEventListener('change', (event) => {
    if (event.target.type !== 'checkbox') return;
    state.callups = [...elements.callupList.querySelectorAll('input:checked')].map((input) => input.value);
    renderCallups();
  });
  elements.saveCallup.addEventListener('click', async () => {
    await api.saveCallups(state.eventId, state.callups);
    showToast('Borrador simulado guardado en memoria.');
  });
  document.querySelector('#new-event-button').addEventListener('click', () => elements.dialog.showModal());
  elements.eventForm.addEventListener('submit', async (event) => {
    const submitter = event.submitter;
    if (!submitter || submitter.value === 'cancel') return;
    event.preventDefault();
    const data = Object.fromEntries(new FormData(elements.eventForm));
    const created = await api.createEvent(data);
    elements.dialog.close();
    elements.eventForm.reset();
    state.teamId = 'all';
    elements.teamFilter.value = 'all';
    await load();
    await selectEvent(created.eventId);
    showToast('Evento simulado creado.');
  });

  load().catch((error) => {
    console.error(error);
    showToast('No se pudo cargar la demostración.');
  });
}());
