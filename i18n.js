/* Idioma de la página (español / inglés). Se carga primero en todas las páginas.
   · tt('texto en español','text in English') devuelve el que corresponde al idioma de ahora.
   · En el HTML: data-en="..." cambia el texto del elemento; data-en-placeholder / data-en-aria-label / data-en-title, los atributos.
   · alCambiarIdioma(función) registra lo que hay que repintar cuando alguien cambia de idioma.
   El idioma queda guardado en el navegador (pt.lang) y, en el mapa, en la dirección (#lang=en). */
(function(){
  let l=null;
  try{l=new URLSearchParams(location.hash.slice(1)).get('lang')}catch(e){}
  if(l!=='en'&&l!=='es'){try{l=localStorage.getItem('pt.lang')}catch(e){l=null}}
  window.LANG=l==='en'?'en':'es';
  window.tt=(es,en)=>window.LANG==='en'&&en!=null?en:es;
  const subs=[];
  window.alCambiarIdioma=f=>subs.push(f);
  const ATTR=['placeholder','aria-label','title'];
  window.aplicarIdioma=function(){
    document.documentElement.lang=window.LANG==='en'?'en':'es-AR';
    document.querySelectorAll('[data-en]').forEach(e=>{
      if(e.dataset.es==null)e.dataset.es=e.textContent;
      e.textContent=window.LANG==='en'?e.dataset.en:e.dataset.es});
    ATTR.forEach(a=>document.querySelectorAll('[data-en-'+a+']').forEach(e=>{
      if(!e.hasAttribute('data-es-'+a))e.setAttribute('data-es-'+a,e.getAttribute(a)||'');
      e.setAttribute(a,window.LANG==='en'?e.getAttribute('data-en-'+a):e.getAttribute('data-es-'+a))}));
  };
  window.setLang=function(nuevo){
    if(nuevo===window.LANG)return;
    window.LANG=nuevo;
    try{localStorage.setItem('pt.lang',nuevo)}catch(e){}
    window.aplicarIdioma();
    subs.forEach(f=>f());
  };
  document.addEventListener('DOMContentLoaded',window.aplicarIdioma);
})();
