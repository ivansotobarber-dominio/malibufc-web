function listPlayers_(params) {
  const team = normalizeTeamFilter_(queryValue_(params, 'team', 'all'));
  const records = getRows_('players')
    .filter((row) => String(row.Tipo) === 'Jugador')
    .filter((row) => playerMatchesTeam_(row, team))
    .map((row) => ({
      playerId: String(row.ID),
      displayName: String(row.Nombre),
      personType: String(row.Tipo),
      position: String(row.Posición),
      renewalStatus: String(row['Estado renovación']),
      teamId: teamIdFromSheet_(String(row['Asignación base'])),
      callupActive: row['Activo convocatorias'] === 'Sí',
    }));

  return { items: records, count: records.length };
}

function normalizeTeamFilter_(team) {
  const value = String(team || 'all').toLowerCase();
  if (value === 'first' || value === '1ª') return '1ª';
  if (value === 'second' || value === '2ª') return '2ª';
  if (value === 'both' || value === 'ambos' || value === 'mixto') return 'Ambos';
  return 'all';
}

function teamIdFromSheet_(team) {
  if (team === '1ª') return 'first';
  if (team === '2ª') return 'second';
  if (team === 'Mixto' || team === 'Ambos') return 'both';
  return '';
}

function playerMatchesTeam_(row, team) {
  if (team === 'all') return true;
  const base = String(row['Asignación base'] || '');
  if (team === '1ª') return base === '1ª' || base === 'Mixto';
  if (team === '2ª') return base === '2ª' || base === 'Mixto';
  return base === 'Mixto';
}
