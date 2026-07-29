function doGet(event) {
  return handleRequest_('GET', event);
}

function doPost(event) {
  const body = parseBody_(event);
  const method = String(body._method || 'POST').toUpperCase();
  return handleRequest_(method, event, body);
}

function handleRequest_(method, event, suppliedBody) {
  try {
    const params = event && event.parameter ? event.parameter : {};
    const body = suppliedBody || {};
    const path = normalizePath_(queryValue_(params, 'path', ''));
    const data = route_(method, path, params, body);
    return jsonOutput_(success_(data));
  } catch (error) {
    console.error(error);
    return jsonOutput_(failure_(error));
  }
}

function route_(method, path, params, body) {
  if (path === '/v1/health' && method === 'GET') {
    return { status: 'ready', storage: 'google-sheets' };
  }
  if (path === '/v1/dashboard' && method === 'GET') return getDashboard_(params);
  if (path === '/v1/players' && method === 'GET') return listPlayers_(params);
  if (path === '/v1/events' && method === 'GET') return listEvents_(params);
  if (path === '/v1/events' && method === 'POST') return createEvent_(body);

  const match = path.match(/^\/v1\/events\/([^/]+)(?:\/(availability|callups|attendance))?$/);
  if (!match) throw apiError_('NOT_FOUND', 'Ruta no encontrada.');

  const eventId = decodeURIComponent(match[1]);
  const resource = match[2];
  if (!resource && method === 'PUT') return updateEvent_(eventId, body);
  if (resource === 'availability' && method === 'GET') return listAvailability_(eventId, params);
  if (resource === 'availability' && method === 'POST') return saveAvailability_(eventId, body);
  if (resource === 'callups' && method === 'GET') return listCallups_(eventId, params);
  if (resource === 'callups' && method === 'POST') return saveCallups_(eventId, body);
  if (resource === 'attendance' && method === 'GET') return listAttendance_(eventId, params);
  if (resource === 'attendance' && method === 'POST') return saveAttendance_(eventId, body);

  throw apiError_('METHOD_NOT_ALLOWED', 'Método no permitido para esta ruta.');
}

function normalizePath_(path) {
  const clean = String(path || '').trim().replace(/\/+/g, '/');
  if (!clean) return '/v1/health';
  return clean.startsWith('/') ? clean : `/${clean}`;
}

function parseBody_(event) {
  const contents = event && event.postData ? event.postData.contents : '';
  if (!contents) return {};
  try {
    return JSON.parse(contents);
  } catch (error) {
    throw apiError_('INVALID_JSON', 'El cuerpo de la petición no contiene JSON válido.');
  }
}

function jsonOutput_(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}
