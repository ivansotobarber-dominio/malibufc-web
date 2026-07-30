(function () {
  'use strict';

  const players = [
    { playerId: 'MOCK-P001', displayName: 'Jugador 01', teamId: 'first', position: 'Portero', renewalStatus: 'IN', active: true },
    { playerId: 'MOCK-P002', displayName: 'Jugador 02', teamId: 'first', position: 'Defensa', renewalStatus: 'Pendiente', active: true },
    { playerId: 'MOCK-P003', displayName: 'Jugador 03', teamId: 'first', position: 'Defensa', renewalStatus: 'Pendiente', active: true },
    { playerId: 'MOCK-P004', displayName: 'Jugador 04', teamId: 'first', position: 'Centrocampista', renewalStatus: 'Pendiente', active: true },
    { playerId: 'MOCK-P005', displayName: 'Jugador 05', teamId: 'first', position: 'Delantero', renewalStatus: 'Condicionado', active: true },
    { playerId: 'MOCK-P006', displayName: 'Jugador 06', teamId: 'first', position: 'Polivalente', renewalStatus: 'IN', active: true },
    { playerId: 'MOCK-P007', displayName: 'Jugador 07', teamId: 'second', position: 'Portero', renewalStatus: 'IN', active: true },
    { playerId: 'MOCK-P008', displayName: 'Jugador 08', teamId: 'second', position: 'Defensa', renewalStatus: 'Pendiente', active: true },
    { playerId: 'MOCK-P009', displayName: 'Jugador 09', teamId: 'second', position: 'Centrocampista', renewalStatus: 'Pendiente', active: true },
    { playerId: 'MOCK-P010', displayName: 'Jugador 10', teamId: 'second', position: 'Delantero', renewalStatus: 'Condicionado', active: true },
    { playerId: 'MOCK-P011', displayName: 'Jugador 11', teamId: 'second', position: 'Polivalente', renewalStatus: 'IN', active: true },
    { playerId: 'MOCK-P012', displayName: 'Jugador 12', teamId: 'second', position: 'Defensa', renewalStatus: 'Pendiente', active: true },
  ];

  const events = [
    {
      eventId: 'MOCK-E001',
      title: 'Partido de preparación',
      type: 'friendly',
      teamId: 'first',
      startAt: '2026-08-02T18:30:00+01:00',
      location: 'Instalación por confirmar',
      responseDeadline: '2026-08-01T18:00:00+01:00',
      status: 'availability_open',
      callupTarget: 5,
    },
    {
      eventId: 'MOCK-E002',
      title: 'Entrenamiento conjunto',
      type: 'training',
      teamId: 'both',
      startAt: '2026-08-05T20:00:00+01:00',
      location: 'Instalación por confirmar',
      responseDeadline: '2026-08-04T18:00:00+01:00',
      status: 'availability_open',
      callupTarget: 10,
    },
    {
      eventId: 'MOCK-E003',
      title: 'Sesión táctica',
      type: 'training',
      teamId: 'second',
      startAt: '2026-08-07T19:30:00+01:00',
      location: 'Instalación por confirmar',
      responseDeadline: '2026-08-06T18:00:00+01:00',
      status: 'draft',
      callupTarget: 6,
    },
  ];

  const availability = {
    'MOCK-E001': {
      'MOCK-P001': 'available',
      'MOCK-P002': 'available',
      'MOCK-P003': 'doubt',
      'MOCK-P004': 'unavailable',
    },
    'MOCK-E002': {
      'MOCK-P001': 'available',
      'MOCK-P002': 'available',
      'MOCK-P007': 'available',
      'MOCK-P008': 'doubt',
      'MOCK-P009': 'unavailable',
    },
  };

  const callups = {
    'MOCK-E001': ['MOCK-P001', 'MOCK-P002'],
    'MOCK-E002': ['MOCK-P001', 'MOCK-P007'],
  };

  const recruitment = [
    { status: 'Pendiente', category: 'Fichaje' },
    { status: 'Pendiente', category: 'Fichaje' },
    { status: 'IN', category: 'Fichaje' },
    { status: 'OUT', category: 'Recámara' },
  ];

  const countBy = (items, field) => items.reduce((result, item) => {
    const key = item[field] || 'Sin definir';
    result[key] = (result[key] || 0) + 1;
    return result;
  }, {});

  function buildMockDashboard(teamId) {
    const scopedPlayers = players.filter((player) => teamMatches(player.teamId, teamId));
    const scopedEvents = events.filter((event) => teamMatches(event.teamId, teamId));
    return {
      source: {
        label: 'Datos simulados',
        mode: 'mock',
        updatedAt: null,
        operationalHistory: true,
      },
      metrics: {
        players: scopedPlayers.length,
        manageable: scopedPlayers.filter((player) => player.active).length,
        renewalPending: scopedPlayers.filter((player) => player.renewalStatus === 'Pendiente').length,
        assigned: scopedPlayers.filter((player) => player.teamId).length,
        positionDefined: scopedPlayers.filter((player) => player.position && player.position !== 'Sin definir').length,
        recruitment: recruitment.length,
        events: scopedEvents.length,
      },
      breakdowns: {
        renewals: countBy(scopedPlayers, 'renewalStatus'),
        assignments: countBy(scopedPlayers, 'teamId'),
        recruitment: countBy(recruitment, 'status'),
      },
      readiness: {
        activeCallups: scopedPlayers.filter((player) => player.active).length,
        assigned: scopedPlayers.filter((player) => player.teamId).length,
        positionDefined: scopedPlayers.filter((player) => player.position && player.position !== 'Sin definir').length,
      },
    };
  }

  const delay = (value) => Promise.resolve(JSON.parse(JSON.stringify(value)));
  const teamMatches = (itemTeam, selected) => selected === 'all' || itemTeam === selected || itemTeam === 'both';

  function createMockApi() {
    return {
      mode: 'mock',
      async getPlayers(teamId) {
        return delay(players.filter((player) => teamMatches(player.teamId, teamId)));
      },
      async getEvents(teamId) {
        return delay(events.filter((event) => teamMatches(event.teamId, teamId)));
      },
      async getDashboard(teamId) {
        return delay(buildMockDashboard(teamId));
      },
      async createEvent(input) {
        const event = {
          eventId: `MOCK-E${String(events.length + 1).padStart(3, '0')}`,
          title: input.title,
          type: 'other',
          teamId: input.team,
          startAt: `${input.startAt}:00+01:00`,
          location: 'Pendiente',
          responseDeadline: input.startAt,
          status: 'draft',
          callupTarget: Number(input.callupTarget),
        };
        events.push(event);
        return delay(event);
      },
      async getAvailability(eventId) {
        return delay(availability[eventId] || {});
      },
      async saveAvailability(eventId, playerId, status) {
        availability[eventId] = availability[eventId] || {};
        availability[eventId][playerId] = status;
        return delay({ eventId, playerId, status });
      },
      async getCallups(eventId) {
        return delay(callups[eventId] || []);
      },
      async saveCallups(eventId, playerIds) {
        callups[eventId] = [...playerIds];
        return delay({ eventId, playerIds });
      },
    };
  }

  function createRemoteApi(baseUrl) {
    const request = async (path, params, options) => {
      const url = new URL(baseUrl);
      url.searchParams.set('path', path);
      Object.entries(params || {}).forEach(([key, value]) => url.searchParams.set(key, value));
      const response = await fetch(url, options);
      const payload = await response.json();
      if (!payload.ok) throw new Error(payload.error && payload.error.message || 'Error de API');
      return payload.data;
    };
    return {
      mode: 'remote',
      getPlayers: async (teamId) => (await request('/v1/players', { team: teamId })).items,
      getEvents: async (teamId) => (await request('/v1/events', { team: teamId })).items,
      getDashboard: (teamId) => request('/v1/dashboard', { team: teamId }),
      createEvent: (input) => request('/v1/events', {}, { method: 'POST', body: JSON.stringify(input) }),
      getAvailability: async (eventId) => {
        const items = (await request(`/v1/events/${eventId}/availability`)).items;
        return Object.fromEntries(items.map((item) => [item.playerId, item.status]));
      },
      saveAvailability: (eventId, playerId, status) => request(`/v1/events/${eventId}/availability`, {}, {
        method: 'POST',
        body: JSON.stringify({ playerId, status }),
      }),
      getCallups: async (eventId) => {
        const items = (await request(`/v1/events/${eventId}/callups`)).items;
        return items.map((item) => item.playerId);
      },
      saveCallups: (eventId, playerIds) => request(`/v1/events/${eventId}/callups`, {}, {
        method: 'POST',
        body: JSON.stringify({ playerIds }),
      }),
    };
  }

  window.createMalibuControlApi = function (config) {
    const settings = config || {};
    if (settings.mode === 'remote' && settings.baseUrl) return createRemoteApi(settings.baseUrl);
    return createMockApi();
  };
}());
