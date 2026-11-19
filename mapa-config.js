/* ======================================================================
   MAPA BASE · configuración
   El mapa de fondo (relieve, curvas de nivel, caminos, lagos) viene de internet.
   · Con la clave vacía usa el mapa topográfico de Esri, que no pide clave.
   · Con una clave de MapTiler (gratis en maptiler.com) usa su mapa «Outdoor», que se ve mejor.
   Pegá la clave entre las comillas: const MAPA_CLAVE_MAPTILER = 'tuClave';
   ====================================================================== */
const MAPA_CLAVE_MAPTILER = '9VrSSmo4DgqNj2sUid3u';

/* ======================================================================
   PLANILLA DE DATOS · textos que se completan a mano
   Descripciones, agua, vadeos, datos de refugios y accesos, y datos de travesías se escriben
   en la planilla de Google «Mapu Mapa - datos para completar» y la página los lee sola.
   Acá va el id de esa planilla (lo que está entre /d/ y /edit en su dirección).
   La planilla tiene que estar compartida como «Cualquier persona con el enlace: Lector».
   Vacío = no se usa la planilla.
   ====================================================================== */
const HOJA_GOOGLE_ID = '1IsC1HT_NAGuznr4g_08ZQWfj6l52b6QbXMLeR6BEDno';
