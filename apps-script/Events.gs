function listEvents_(params) {
  const team = queryValue_(params, 'team', '');
  const records = getRows_('events')
    .filter((row) => !team || row.Equipo === team || row.Equipo === 'Ambos')
    .map(mapEvent_);
  return { items: records, count: records.length };
}

function mapEvent_(row) {
  return {
    eventId: String(row['ID evento']),
    season: String(row.Temporada),
    weekOrRound: String(row['Semana / jornada']),
    eventType: String(row.Tipo),
    teamScope: String(row.Equipo),
    date: row.Fecha,
    time: row.Hora,
    opponentOrDescription: String(row['Rival / descripción']),
    location: String(row.Lugar),
    responseDeadline: row['Límite respuesta'],
    callupTarget: Number(row['Objetivo convocatoria'] || 0),
    status: String(row.Estado),
  };
}

function createEvent_() {
  throw apiError_('NOT_IMPLEMENTED', 'La escritura de eventos se habilitará en fase 2.');
}

function updateEvent_() {
  throw apiError_('NOT_IMPLEMENTED', 'La escritura de eventos se habilitará en fase 2.');
}

function getDashboard_(params) {
  const events = listEvents_(params).items;
  const players = listPlayers_(params).items;
  return {
    playersActive: players.filter((player) => player.callupActive).length,
    events: events.length,
    message: 'Las métricas operativas completas se implementarán después de aprobar el modelo.',
  };
}
