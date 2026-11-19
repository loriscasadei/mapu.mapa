/* Encabezado, usuario y pie compartidos por todas las páginas. Se editan acá una sola vez.
   Cada página tiene <body data-page="mapa|info|proyecto"> y los contenedores
   <header id="site-header"></header> y <footer id="site-footer"></footer>.
   Necesita auth.js cargado antes. */
(function(){
  const PAGINAS=[
    ['mapa','MAPA','index.html'],
    ['info','INFO UTILES','info-utiles.html'],
    ['proyecto','SOBRE EL PROYECTO','sobre-el-proyecto.html']
  ];
  const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
  const actual=document.body.dataset.page;
  const nav=PAGINAS.map(([id,nombre,href])=>
    '<a href="'+href+'"'+(id===actual?' aria-current="page"':'')+'>'+nombre+'</a>').join('');

  /* ---------- encabezado ---------- */
  const h=document.getElementById('site-header');
  if(h){
    h.innerHTML='<div class="brand"><b>Mapu Mapa</b><span>El mapa de las tierras patagónicas</span></div>'+
      '<button class="burger" id="burger" type="button" aria-label="Menú" aria-expanded="false" aria-controls="site-menu"><span></span><span></span><span></span></button>'+
      '<div class="menu" id="site-menu"><nav class="mainnav" aria-label="Principal">'+nav+'</nav><div class="userbox" id="userbox"></div></div>';
  }
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
    const u=window.Auth&&Auth.usuario();
    box.innerHTML=u
      ?'<span class="uemail" title="'+esc(u.email)+'">'+esc(u.email)+'</span><button type="button" class="ubtn" id="usalir">Salir</button>'
      :'<button type="button" class="ubtn" id="uentrar">Ingresar</button><button type="button" class="ubtn pri" id="ureg">Registrarse</button>';
    const q=id=>document.getElementById(id);
    if(u)q('usalir').onclick=()=>{Auth.salir();pintarUsuario();abrirMenu(false)};
    else{q('uentrar').onclick=()=>abrirDialogo('ingresar');q('ureg').onclick=()=>abrirDialogo('registrar')}
  }
  function abrirDialogo(m){
    modo=m;abrirMenu(false);pintarDialogo();
    if(!dlg.open)dlg.showModal();
    dlg.querySelector('input').focus();
  }
  function pintarDialogo(msg){
    const reg=modo==='registrar';
    dlg.innerHTML='<form method="dialog" novalidate id="uform">'+
      '<div class="utabs" role="tablist"><button type="button" role="tab" aria-selected="'+!reg+'" data-m="ingresar">Ingresar</button><button type="button" role="tab" aria-selected="'+reg+'" data-m="registrar">Registrarse</button></div>'+
      '<h2 id="udt">'+(reg?'Crear una cuenta':'Ingresar a tu cuenta')+'</h2>'+
      '<label>Email<input name="email" type="email" autocomplete="email" required></label>'+
      '<label>Contraseña<input name="pass" type="password" autocomplete="'+(reg?'new-password':'current-password')+'" required'+(reg?' minlength="8"':'')+'></label>'+
      (reg?'<label>Repetir contraseña<input name="pass2" type="password" autocomplete="new-password" required></label><p class="uhint">Al menos 8 caracteres.</p>':'')+
      '<p class="uerr" id="uerr" role="alert">'+(msg?esc(msg):'')+'</p>'+
      '<div class="uact"><button type="button" class="ubtn" id="ucancel">Cancelar</button><button type="submit" class="ubtn pri" id="uok">'+(reg?'Crear cuenta':'Ingresar')+'</button></div>'+
      '<p class="unote">Versión de prueba: las cuentas se guardan solo en este navegador.</p></form>';
    dlg.querySelectorAll('[data-m]').forEach(b=>b.onclick=()=>{modo=b.dataset.m;pintarDialogo();dlg.querySelector('input').focus()});
    dlg.querySelector('#ucancel').onclick=()=>dlg.close();
    dlg.querySelector('#uform').onsubmit=async ev=>{
      ev.preventDefault();
      const f=ev.target,err=dlg.querySelector('#uerr'),ok=dlg.querySelector('#uok');
      const email=f.email.value,pass=f.pass.value;
      if(!Auth.emailOk(email.trim())){err.textContent='Escribí un email válido.';f.email.focus();return}
      if(!pass){err.textContent='Escribí la contraseña.';f.pass.focus();return}
      if(modo==='registrar'&&pass!==f.pass2.value){err.textContent='Las contraseñas no coinciden.';f.pass2.focus();return}
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

  /* ---------- pie ---------- */
  const f=document.getElementById('site-footer');
  if(f)f.innerHTML='<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Texto de relleno para completar más adelante.</p>'+
    '<p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>';
})();
