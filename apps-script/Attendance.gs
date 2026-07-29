function listAttendance_(eventId) {
  const items = getRows_('attendance')
    .filter((row) => String(row['ID evento']) === eventId)
    .map((row) => ({
      eventId,
      playerId: String(row['ID persona']),
      status: String(row.Asistencia),
      minutes: row.Minutos === '' ? null : Number(row.Minutos),
      delayMinutes: row['Retraso (min)'] === '' ? null : Number(row['Retraso (min)']),
      incidentType: String(row.Incidencia || ''),
    }));
  return { items, count: items.length };
}

function saveAttendance_() {
  throw apiError_('NOT_IMPLEMENTED', 'La escritura de asistencia se habilitará en fase 2.');
}
