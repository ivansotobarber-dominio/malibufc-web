function listPlayers_(params) {
  const team = queryValue_(params, 'team', '');
  const records = getRows_('players')
    .filter((row) => !team || row['Asignación base'] === team)
    .map((row) => ({
      playerId: String(row.ID),
      displayName: String(row.Nombre),
      personType: String(row.Tipo),
      position: String(row.Posición),
      baseTeam: String(row['Asignación base']),
      callupActive: row['Activo convocatorias'] === 'Sí',
    }));

  return { items: records, count: records.length };
}
