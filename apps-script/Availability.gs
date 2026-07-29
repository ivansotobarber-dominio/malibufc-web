function listAvailability_(eventId) {
  const items = getRows_('availability')
    .filter((row) => String(row['ID evento']) === eventId)
    .map((row) => ({
      eventId,
      playerId: String(row['ID persona']),
      status: String(row.Disponibilidad),
      timeConstraint: String(row['Limitación / franja'] || ''),
      respondedAt: row['Fecha respuesta'] || null,
    }));
  return { items, count: items.length };
}

function saveAvailability_() {
  throw apiError_('NOT_IMPLEMENTED', 'La escritura de disponibilidad se habilitará en fase 2.');
}
