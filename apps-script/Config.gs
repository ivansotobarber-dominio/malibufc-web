const API_VERSION = 'v1';
const HEADER_ROW = 3;

const SHEETS = Object.freeze({
  players: 'Plantilla',
  events: 'Eventos',
  availability: 'Disponibilidad',
  callups: 'Convocatorias',
  attendance: 'Asistencia',
  recruitment: 'Altas y pruebas',
});

function getSpreadsheet_() {
  const spreadsheetId = PropertiesService.getScriptProperties().getProperty('SPREADSHEET_ID');
  if (!spreadsheetId) {
    throw apiError_('CONFIGURATION_ERROR', 'Falta la propiedad de script SPREADSHEET_ID.');
  }
  return SpreadsheetApp.openById(spreadsheetId);
}

function getSheet_(key) {
  const name = SHEETS[key];
  const sheet = getSpreadsheet_().getSheetByName(name);
  if (!sheet) {
    throw apiError_('SHEET_NOT_FOUND', `No existe la hoja configurada: ${name}.`);
  }
  return sheet;
}

function getRows_(key) {
  const sheet = getSheet_(key);
  const lastColumn = sheet.getLastColumn();
  const lastRow = sheet.getLastRow();
  if (lastRow <= HEADER_ROW || lastColumn === 0) return [];

  const headers = sheet.getRange(HEADER_ROW, 1, 1, lastColumn).getDisplayValues()[0];
  return sheet
    .getRange(HEADER_ROW + 1, 1, lastRow - HEADER_ROW, lastColumn)
    .getValues()
    .filter((row) => row[0] !== '' && row[0] !== null)
    .map((row) => headers.reduce((record, header, index) => {
      record[header] = row[index];
      return record;
    }, {}));
}

function queryValue_(params, name, fallback) {
  const value = params && params[name];
  return value === undefined || value === null || value === '' ? fallback : String(value);
}

function apiError_(code, message, details) {
  const error = new Error(message);
  error.apiCode = code;
  error.details = details || [];
  return error;
}

function success_(data, extraMeta) {
  return {
    ok: true,
    data,
    meta: Object.assign({
      apiVersion: API_VERSION,
      timestamp: new Date().toISOString(),
    }, extraMeta || {}),
  };
}

function failure_(error) {
  return {
    ok: false,
    error: {
      code: error.apiCode || 'INTERNAL_ERROR',
      message: error.apiCode ? error.message : 'No se pudo completar la operación.',
      details: error.details || [],
    },
    meta: {
      apiVersion: API_VERSION,
      timestamp: new Date().toISOString(),
    },
  };
}
