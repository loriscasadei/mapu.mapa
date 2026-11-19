/* Cuentas de usuario: SOLO PARA PRUEBAS. Todo queda en este navegador (localStorage).
   La app es estática y todavía no tiene servidor, así que estas cuentas no existen
   fuera de este navegador y no sirven para proteger nada.
   La contraseña no se guarda: se guarda un hash PBKDF2 con sal.
   Para pasar a cuentas reales, reemplazar el cuerpo de estas cuatro funciones
   por llamadas al servidor. El resto de la app solo usa window.Auth. */
(function(){
  const USUARIOS='pt.usuarios', SESION='pt.sesion', ITER=150000;
  const leer=(k,def)=>{try{return JSON.parse(localStorage.getItem(k))??def}catch(e){return def}};
  const guardar=(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v));return true}catch(e){return false}};
  const hex=b=>[...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,'0')).join('');
  const deHex=h=>new Uint8Array(h.match(/../g).map(x=>parseInt(x,16)));
  async function hash(pass,sal){
    if(!(window.crypto&&crypto.subtle))throw new Error('Este navegador no permite guardar contraseñas de forma segura en esta página.');
    const k=await crypto.subtle.importKey('raw',new TextEncoder().encode(pass),'PBKDF2',false,['deriveBits']);
    return hex(await crypto.subtle.deriveBits({name:'PBKDF2',salt:sal,iterations:ITER,hash:'SHA-256'},k,256));
  }
  const normEmail=e=>String(e||'').trim().toLowerCase();
  const emailOk=e=>/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(e);
  window.Auth={
    emailOk,
    usuario(){const e=leer(SESION,null);return e&&leer(USUARIOS,{})[e]?{email:e}:null},
    async registrar(email,pass){
      email=normEmail(email);
      if(!emailOk(email))throw new Error('Escribí un email válido.');
      if(String(pass).length<8)throw new Error('La contraseña tiene que tener al menos 8 caracteres.');
      const us=leer(USUARIOS,{});
      if(us[email])throw new Error('Ya hay una cuenta con ese email. Probá ingresar.');
      const sal=crypto.getRandomValues(new Uint8Array(16));
      us[email]={sal:hex(sal),hash:await hash(pass,sal)};
      if(!guardar(USUARIOS,us)||!guardar(SESION,email))throw new Error('No se pudo guardar la cuenta: el navegador bloquea el almacenamiento.');
      return {email};
    },
    async ingresar(email,pass){
      email=normEmail(email);
      const u=leer(USUARIOS,{})[email];
      if(!u||(await hash(pass,deHex(u.sal)))!==u.hash)throw new Error('Email o contraseña incorrectos.');
      guardar(SESION,email);return {email};
    },
    salir(){try{localStorage.removeItem(SESION)}catch(e){}}
  };
})();
