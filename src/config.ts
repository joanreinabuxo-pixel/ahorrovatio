// Configuración general de la web. Cambia aquí y se actualiza en todas las páginas.
export const SITE = {
  nombre: 'AhorroVatio',
  url: 'https://ahorrovatio.com',
  lema: 'Guía independiente de autoconsumo, aerotermia y ahorro eléctrico en España',
  correo: 'contacto@ahorrovatio.com',
  // Autor real que firma los artículos (pendiente de los datos de JOAN).
  autor: {
    nombre: 'Joan Reina i Buxó',
    bio: 'Maestro de Primaria en Cataluña y editor de AhorroVatio. No soy instalador ni asesor fiscal: cada guía se apoya en fuentes oficiales (BOE, Agencia Tributaria, IDAE, PVGIS), que enlazo siempre al final para que puedas comprobarlas.',
    url: '/sobre-mi/',
  },
};

// AdSense: se rellena cuando Google apruebe la web (Fase 5).
// Mientras client esté vacío no se carga ningún script ni se ven huecos de anuncio.
export const ADSENSE = {
  client: '', // ej.: 'ca-pub-1234567890123456'
  slots: {
    articuloFinal: '',
    multiplex: '',
    lateral: '',
  },
};

export const CATEGORIAS = [
  { slug: 'placas-solares', nombre: 'Placas solares' },
  { slug: 'aerotermia', nombre: 'Aerotermia' },
  { slug: 'tarifas-luz', nombre: 'Tarifas y batería' },
  { slug: 'subvenciones', nombre: 'Subvenciones' },
  { slug: 'ahorro-hogar', nombre: 'Ahorro y domótica' },
] as const;
