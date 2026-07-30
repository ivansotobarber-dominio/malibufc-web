function listEvents_(params) {
  const team = normalizeTeamFilter_(queryValue_(params, 'team', 'all'));
  const records = getRows_('events')
    .filter((row) => eventMatchesTeam_(row, team))
    .map(mapEvent_);
  return { items: records, count: records.length };
}

function eventMatchesTeam_(row, team) {
  if (team === 'all') return true;
  const eventTeam = String(row.Equipo || '');
  if (team === '1ª') return eventTeam === '1ª' || eventTeam === 'Ambos';
  if (team === '2ª') return eventTeam === '2ª' || eventTeam === 'Ambos';
  return eventTeam === 'Ambos';
}

function combineEventDateTime_(dateValue, timeValue) {
  if (!(dateValue instanceof Date)) return dateValue || null;
  const combined = new Date(dateValue.getTime());
  if (timeValue instanceof Date) {
    combined.setHours(timeValue.getHours(), timeValue.getMinutes(), 0, 0);
  }
  return combined.toISOString();
}

function mapEventStatus_(status) {
  const values = {
    Planificado: 'draft',
    Abierto: 'availability_open',
    Cerrado: 'completed',
    Cancelado: 'cancelled',
  };
  return values[String(status)] || String(status || 'draft');
}

function mapEvent_(row) {
  const description = String(row['Rival / descripción'] || row.Tipo || 'Evento');
  return {
    eventId: String(row['ID evento']),
    title: description,
    season: String(row.Temporada),
    weekOrRound: String(row['Semana / jornada']),
    type: String(row.Tipo),
    teamId: teamIdFromSheet_(String(row.Equipo)),
    startAt: combineEventDateTime_(row.Fecha, row.Hora),
    location: String(row.Lugar || 'Lugar por confirmar'),
    responseDeadline: row['Límite respuesta'] || null,
    callupTarget: Number(row['Objetivo convocatoria'] || 0),
    status: mapEventStatus_(row.Estado),
  };
}

function createEvent_() {
  throw apiError_('NOT_IMPLEMENTED', 'La escritura de eventos se habilitará en fase 2.');
}

function updateEvent_() {
  throw apiError_('NOT_IMPLEMENTED', 'La escritura de eventos se habilitará en fase 2.');
}

function countValues_(rows, field) {
  return rows.reduce((result, row) => {
    const key = String(row[field] || 'Sin definir');
    result[key] = (result[key] || 0) + 1;
    return result;
  }, {});
}

function playerEligibleForEvent_(player, eventRow) {
  const eventTeam = String(eventRow.Equipo || '');
  if (eventTeam === '1ª') return player['Elegible 1ª'] === 'Sí';
  if (eventTeam === '2ª') return player['Elegible 2ª'] === 'Sí';
  return player['Elegible 1ª'] === 'Sí' || player['Elegible 2ª'] === 'Sí';
}

function getDashboard_(params) {
  const team = normalizeTeamFilter_(queryValue_(params, 'team', 'all'));
  const allPlayers = getRows_('players').filter((row) => String(row.Tipo) === 'Jugador');
  const players = allPlayers.filter((row) => playerMatchesTeam_(row, team));
  const eventRows = getRows_('events').filter((row) => eventMatchesTeam_(row, team));
  const eventIds = new Set(eventRows.map((row) => String(row['ID evento'])));
  const availability = getRows_('availability').filter((row) => eventIds.has(String(row['ID evento'])));
  const callups = getRows_('callups').filter((row) => eventIds.has(String(row['ID evento'])));
  const attendance = getRows_('attendance').filter((row) => eventIds.has(String(row['ID evento'])));
  const recruitment = getRows_('recruitment');

  const expectedResponses = eventRows.reduce((sum, eventRow) => {
    return sum + allPlayers.filter((player) => playerEligibleForEvent_(player, eventRow)).length;
  }, 0);
  const calledUp = callups.filter((row) => String(row.Decisión) === 'Convocado');
  const confirmed = calledUp.filter((row) => String(row.Confirmación) === 'Sí');
  const attended = attendance.filter((row) => ['Sí', 'Tarde'].includes(String(row.Asistencia)));
  const deficits = eventRows.reduce((sum, row) => sum + Number(row['Déficit convocatoria'] || 0), 0);

  return {
    source: {
      label: 'Google Sheets',
      mode: 'remote',
      updatedAt: Utilities.formatDate(new Date(), Session.getScriptTimeZone(), 'yyyy-MM-dd HH:mm'),
      timeZone: Session.getScriptTimeZone(),
      operationalHistory: eventRows.length > 0,
    },
    metrics: {
      players: players.length,
      manageable: players.filter((row) => row['Activo convocatorias'] === 'Sí').length,
      renewalPending: players.filter((row) => String(row['Estado renovación']) === 'Pendiente').length,
      assigned: players.filter((row) => String(row['Asignación base']) !== 'Sin asignar').length,
      positionDefined: players.filter((row) => String(row.Posición) !== 'Sin definir').length,
      recruitment: recruitment.length,
      events: eventRows.length,
      responseRate: expectedResponses ? Math.round(availability.length / expectedResponses * 100) : null,
      availabilityRate: availability.length ? Math.round(availability.filter((row) => String(row.Disponibilidad) === 'Sí').length / availability.length * 100) : null,
      confirmationRate: calledUp.length ? Math.round(confirmed.length / calledUp.length * 100) : null,
      attendanceRate: calledUp.length ? Math.round(attended.length / calledUp.length * 100) : null,
      delays: attendance.filter((row) => String(row.Asistencia) === 'Tarde').length,
      absences: attendance.filter((row) => String(row.Asistencia) === 'No').length,
      callupDeficit: deficits,
    },
    breakdowns: {
      renewals: countValues_(players, 'Estado renovación'),
      assignments: countValues_(players, 'Asignación base'),
      recruitment: countValues_(recruitment, 'Estado'),
    },
    readiness: {
      activeCallups: players.filter((row) => row['Activo convocatorias'] === 'Sí').length,
      assigned: players.filter((row) => String(row['Asignación base']) !== 'Sin asignar').length,
      positionDefined: players.filter((row) => String(row.Posición) !== 'Sin definir').length,
    },
  };
}
