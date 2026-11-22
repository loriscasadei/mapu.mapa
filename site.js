/* Encabezado, usuario y pie compartidos por todas las páginas. Se editan acá una sola vez.
   Cada página tiene <body data-page="mapa|info|proyecto"> y los contenedores
   <header id="site-header"></header> y <footer id="site-footer"></footer>.
   Necesita auth.js cargado antes. */
(function(){
  if(typeof tt==='undefined'){window.tt=es=>es;window.alCambiarIdioma=()=>{}}
  /* Los dos idiomas se escriben en el mismo lugar y uno queda invisible: el ancho es siempre el del texto más largo y el encabezado no se mueve al cambiar de idioma. */
  const bi=(es,en)=>'<span class="bi"><span class="es">'+es+'</span><span class="en">'+en+'</span></span>';
  const PAGINAS=[
    ['mapa',()=>bi('MAPA','MAP'),'index.html'],
    ['info',()=>bi('INFO UTILES','USEFUL INFO'),'info-utiles.html'],
    ['proyecto',()=>bi('SOBRE EL PROYECTO','ABOUT THE PROJECT'),'sobre-el-proyecto.html']
  ];
  const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
  const actual=document.body.dataset.page;
  const navHtml=()=>PAGINAS.map(([id,nombre,href])=>
    '<a href="'+href+'"'+(id===actual?' aria-current="page"':'')+'>'+nombre()+'</a>').join('');
  const BAND={
    es:'<svg viewBox="0 0 24 16" width="24" height="16" aria-hidden="true"><rect width="24" height="16" fill="#74ACDF"/><rect y="5.3" width="24" height="5.4" fill="#fff"/><circle cx="12" cy="8" r="2.1" fill="#F6B40E"/></svg>',
    en:'<svg viewBox="0 0 60 30" width="24" height="16" preserveAspectRatio="none" aria-hidden="true"><clipPath id="fgs"><path d="M0,0 v30 h60 v-30 z"/></clipPath><clipPath id="fgt"><path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/></clipPath><g clip-path="url(#fgs)"><path d="M0,0 v30 h60 v-30 z" fill="#012169"/><path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" stroke-width="6"/><path d="M0,0 L60,30 M60,0 L0,30" clip-path="url(#fgt)" stroke="#C8102E" stroke-width="4"/><path d="M30,0 v30 M0,15 h60" stroke="#fff" stroke-width="10"/><path d="M30,0 v30 M0,15 h60" stroke="#C8102E" stroke-width="6"/></g></svg>'};
  const langHtml=()=>'<div class="langsw" role="group" aria-label="'+tt('Idioma','Language')+'">'+
    [['es','Español'],['en','English']].map(([c,n])=>'<button type="button" data-l="'+c+'" lang="'+c+'" title="'+n+'" aria-label="'+n+'" aria-pressed="'+(LANG===c)+'" class="'+(LANG===c?'on':'')+'">'+BAND[c]+'</button>').join('')+'</div>';

  /* ---------- encabezado ---------- */
  const h=document.getElementById('site-header');
  if(h){
    h.innerHTML='<a class="brand" href="index.html"><b>Mapu Mapa</b><span>'+bi('El mapa de las tierras patagónicas','The map of the Patagonian lands')+'</span></a>'+
      '<button class="burger" id="burger" type="button" aria-expanded="false" aria-controls="site-menu"><span></span><span></span><span></span></button>'+
      '<div class="menu" id="site-menu"><nav class="mainnav"></nav><div class="langbox" id="langbox"></div><div class="userbox" id="userbox"></div></div>';
  }
  /* textos del encabezado y del pie, que cambian con el idioma */
  function pintarTextos(){
    if(h){
      h.querySelector('.brand').setAttribute('aria-label',tt('Mapu Mapa, ir al mapa','Mapu Mapa, go to the map'));
      h.querySelector('.burger').setAttribute('aria-label',tt('Menú','Menu'));
      h.querySelector('.mainnav').setAttribute('aria-label',tt('Principal','Main'));
      h.querySelector('.mainnav').innerHTML=navHtml();
      const lb=document.getElementById('langbox');lb.innerHTML=langHtml();
      lb.querySelectorAll('button').forEach(b=>b.onclick=()=>setLang(b.dataset.l));
    }
    const f=document.getElementById('site-footer');
    if(f)f.innerHTML='<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. '+tt('Texto de relleno para completar más adelante.','Placeholder text to be completed later.')+'</p>'+
      '<p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>';
    const t=document.querySelector('title');
    if(t&&actual!=='mapa'){const n={info:tt('Info útiles','Useful info'),proyecto:tt('Sobre el proyecto','About the project')}[actual];if(n)t.textContent=n+' — Mapu Mapa'}
  }
  pintarTextos();
  const burger=document.getElementById('burger'), menu=document.getElementById('site-menu');
  function abrirMenu(si){if(!h)return;h.classList.toggle('open',si);burger.setAttribute('aria-expanded',si)}
  if(h){
    burger.onclick=ev=>{ev.stopPropagation();abrirMenu(!h.classList.contains('open'))};
    menu.addEventListener('click',ev=>{if(ev.target.closest('.mainnav a'))abrirMenu(false)});
    document.addEventListener('click',ev=>{if(h.classList.contains('open')&&!h.contains(ev.target))abrirMenu(false)});
    document.addEventListener('keydown',ev=>{if(ev.key==='Escape'&&h.classList.contains('open')){abrirMenu(false);burger.focus()}});
    /* Menú hamburguesa automático: si el contenido no entra en una línea, se compacta. */
    function ajustar(){
      h.classList.remove('compact');
      if(h.scrollWidth>h.clientWidth+1){h.classList.add('compact')}
      else abrirMenu(false);
    }
    new ResizeObserver(()=>{ajustar()}).observe(document.body);
    addEventListener('resize',ajustar);
    if(document.fonts&&document.fonts.ready)document.fonts.ready.then(ajustar);
    ajustar();
  }

  /* ---------- usuario ---------- */
  const box=document.getElementById('userbox');
  let modo='ingresar';
  const dlg=document.createElement('dialog');dlg.className='userdlg';dlg.setAttribute('aria-labelledby','udt');
  document.body.appendChild(dlg);
  function pintarUsuario(){
    if(!box)return;
    /* Cuentas de usuario: por ahora no hay. Los botones quedan grises, como Montañismo.
       Para activarlas, volver a poner abrirDialogo('ingresar') / abrirDialogo('registrar') en estos botones. */
    const soon=(id,t,pri)=>'<span class="soon-wrap ubtn-wrap"><button type="button" class="ubtn'+(pri?' pri':'')+'" id="'+id+'" aria-disabled="true" aria-describedby="'+id+'-tip">'+t+'</button><span class="soon" id="'+id+'-tip" role="tooltip">Coming soon</span></span>';
    box.innerHTML=soon('uentrar',bi('Ingresar','Sign in'),false)+soon('ureg',bi('Registrarse','Sign up'),true);
  }
  function abrirDialogo(m){
    modo=m;abrirMenu(false);pintarDialogo();
    if(!dlg.open)dlg.showModal();
    dlg.querySelector('input').focus();
  }
  function pintarDialogo(msg){
    const reg=modo==='registrar';
    dlg.innerHTML='<form method="dialog" novalidate id="uform">'+
      '<div class="utabs" role="tablist"><button type="button" role="tab" aria-selected="'+!reg+'" data-m="ingresar">'+tt('Ingresar','Sign in')+'</button><button type="button" role="tab" aria-selected="'+reg+'" data-m="registrar">'+tt('Registrarse','Sign up')+'</button></div>'+
      '<h2 id="udt">'+(reg?tt('Crear una cuenta','Create an account'):tt('Ingresar a tu cuenta','Sign in to your account'))+'</h2>'+
      '<label>Email<input name="email" type="email" autocomplete="email" required></label>'+
      '<label>'+tt('Contraseña','Password')+'<input name="pass" type="password" autocomplete="'+(reg?'new-password':'current-password')+'" required'+(reg?' minlength="8"':'')+'></label>'+
      (reg?'<label>'+tt('Repetir contraseña','Repeat password')+'<input name="pass2" type="password" autocomplete="new-password" required></label><p class="uhint">'+tt('Al menos 8 caracteres.','At least 8 characters.')+'</p>':'')+
      '<p class="uerr" id="uerr" role="alert">'+(msg?esc(msg):'')+'</p>'+
      '<div class="uact"><button type="button" class="ubtn" id="ucancel">'+tt('Cancelar','Cancel')+'</button><button type="submit" class="ubtn pri" id="uok">'+(reg?tt('Crear cuenta','Create account'):tt('Ingresar','Sign in'))+'</button></div>'+
      '<p class="unote">'+tt('Versión de prueba: las cuentas se guardan solo en este navegador.','Test version: accounts are stored only in this browser.')+'</p></form>';
    dlg.querySelectorAll('[data-m]').forEach(b=>b.onclick=()=>{modo=b.dataset.m;pintarDialogo();dlg.querySelector('input').focus()});
    dlg.querySelector('#ucancel').onclick=()=>dlg.close();
    dlg.querySelector('#uform').onsubmit=async ev=>{
      ev.preventDefault();
      const f=ev.target,err=dlg.querySelector('#uerr'),ok=dlg.querySelector('#uok');
      const email=f.email.value,pass=f.pass.value;
      if(!Auth.emailOk(email.trim())){err.textContent=tt('Escribí un email válido.','Enter a valid email.');f.email.focus();return}
      if(!pass){err.textContent=tt('Escribí la contraseña.','Enter the password.');f.pass.focus();return}
      if(modo==='registrar'&&pass!==f.pass2.value){err.textContent=tt('Las contraseñas no coinciden.','The passwords do not match.');f.pass2.focus();return}
      ok.disabled=true;err.textContent='';
      try{modo==='registrar'?await Auth.registrar(email,pass):await Auth.ingresar(email,pass);dlg.close();pintarUsuario()}
      catch(e){err.textContent=e.message;ok.disabled=false}
    };
  }
  dlg.addEventListener('click',ev=>{if(ev.target===dlg)dlg.close()});
  dlg.addEventListener('close',()=>{dlg.innerHTML=''});
  pintarUsuario();
  /* un cambio de cuenta en otra pestaña se refleja acá */
  addEventListener('storage',pintarUsuario);

  /* ---------- cambio de idioma ---------- */
  alCambiarIdioma(()=>{pintarTextos();pintarUsuario();if(dlg.open)pintarDialogo();if(h)ajustar&&ajustar()});
})();
