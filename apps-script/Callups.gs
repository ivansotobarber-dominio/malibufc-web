function listCallups_(eventId) {
  const items = getRows_('callups')
    .filter((row) => String(row['ID evento']) === eventId)
    .map((row) => ({
      eventId,
      playerId: String(row['ID persona']),
      decision: String(row.Decisión),
      role: String(row.Rol || ''),
      confirmation: String(row.Confirmación || ''),
      meetingAt: row['Hora citación'] || null,
    }));
  return { items, count: items.length };
}

function saveCallups_() {
  throw apiError_('NOT_IMPLEMENTED', 'La escritura de convocatorias se habilitará en fase 2.');
}
