const W=D.W,H=D.H;
const G={get g0(){return {l:tt('Sin dato','No data')}},get g1(){return {l:tt('Fácil','Easy')}},get g2(){return {l:tt('Moderada','Moderate')}},get g3(){return {l:tt('Difícil','Hard')}}};

/* ================= BASE DE DATOS: LECTURA Y CONTROL =================
   Lee datos/*.js, revisa cada registro y lo traduce a la forma interna.
   Todo problema se junta en AVISOS y se muestra arriba del panel.        */
const DIF={facil:'g1',moderada:'g2',dificil:'g3',sin_dato:'g0'};
const TIPO={acceso:'acc',refugio:'ref',paso:'pto',laguna:'lag',cumbre:'cum'};
const LADO={derecha:'start',izquierda:'end',centro:'middle'};
const REGISTRO=['obligatorio','a_confirmar','dificultad_baja','no_requiere'];
const AVISOS=[...(window.__errores||[])];
const aviso=(donde,msg)=>AVISOS.push([donde,msg]);
const DB_T=typeof TRAMOS!=='undefined'?TRAMOS:(aviso('datos/tramos.js','No se pudo leer el archivo. No se muestra ningún tramo.'),[]);
const DB_P=typeof PUNTOS!=='undefined'?PUNTOS:(aviso('datos/puntos.js','No se pudo leer el archivo. No se muestra ningún punto ni tramo.'),[]);
const DB_V=typeof TRAVESIAS!=='undefined'?TRAVESIAS:(aviso('datos/travesias.js','No se pudo leer el archivo. No se muestran travesías.'),[]);
const DB_S=typeof SENDAS!=='undefined'?SENDAS:(aviso('datos/sendas.js','No se pudo leer el archivo. No se muestra la información de las sendas oficiales.'),[]);

/* tipo de cada campo: t texto, n número, b sí/no, l lista, o una lista de valores permitidos */
const CAMPOS={
  tramo:{id:'t',desde:'t',hasta:'t',nombre:'t',via:'t',ida_y_vuelta:'b',solo_travesia:'b',
    dificultad:['',...Object.keys(DIF)],nota_dificultad:'t',sendas_apn:'l',sendas_apn_total:'n',
    fuera_de_apn:'b',administra:'t',registro:REGISTRO,huella_andina:'b',zona:'t',duracion_dias:'n',nombres_en_registro:'l',
    descripcion:'t',descripcion_verificada:'b',agua:'t',vadeos:'t',sombra:'t'},
  punto:{id:'t',nombre:'t',nombre_en_tramos:'t',detalle:'t',tipo:Object.keys(TIPO),descripcion:'t',
    etiqueta_x:'n',etiqueta_y:'n',etiqueta_lado:Object.keys(LADO),solo_con_zoom:'b'},
  refugio:{capacidad:'t',reserva:'t',que_se_compra:'t',agua:'t',acampe:'t',si_esta_lleno:'t'},
  acceso:{colectivo:'t',parada:'t',frecuencia:'t',ultimo_regreso:'t',estacionamiento:'t'},
  travesia:{id:'t',nombre:'t',nombre_en:'t',resumen:'t',resumen_en:'t',senda_apn:'t',etapas:'e',donde_dormir:'t',salidas_de_escape:'t',como_volver:'t'},
  senda:{id:'t',nombre:'t',tramos:'l',fuente:'t',dificultad:['','Baja','Media','Alta','Muy Alta','Extrema'],
    temporada:'t',temporada_en:'t',dificultad_otra:['','Baja','Media','Alta','Muy Alta','Extrema'],temporada_otra:'t',temporada_otra_en:'t',
    registro:['','obligatorio','no_requiere'],precauciones:'l',precauciones_en:'l',servicios:'t',servicios_en:'t',descripcion:'t',descripcion_en:'t'}
};
const VACIO={t:'',n:0,b:false,l:[],e:[]};
function revisar(r,campos,donde){
  if(!r||typeof r!=='object'){aviso(donde,'El registro no está entre llaves { }.');return false}
  for(const k in campos){
    const tp=campos[k];
    if(!(k in r)){aviso(donde,`Falta el campo «${k}».`);r[k]=Array.isArray(tp)?tp[0]:VACIO[tp];continue}
    const v=r[k];
    if(Array.isArray(tp)){ if(!tp.includes(v)){aviso(donde,`«${k}» vale '${v}', y solo puede ser: ${tp.map(x=>`'${x}'`).join(', ')}.`);r[k]=tp[0]} }
    else if(tp==='t'&&typeof v!=='string'){aviso(donde,`«${k}» tiene que ser un texto entre comillas.`);r[k]=String(v??'')}
    else if(tp==='n'&&typeof v!=='number'){aviso(donde,`«${k}» tiene que ser un número, sin comillas.`);r[k]=Number(v)||0}
    else if(tp==='b'&&typeof v!=='boolean'){aviso(donde,`«${k}» tiene que ser true o false, sin comillas.`);r[k]=!!v}
    else if(tp==='l'&&!Array.isArray(v)){aviso(donde,`«${k}» tiene que ser una lista entre corchetes [ ].`);r[k]=[]}
    else if(tp==='e'&&!(Array.isArray(v)&&v.length&&v.every(d=>Array.isArray(d)&&d.length&&d.every(x=>typeof x==='string')))){aviso(donde,`«${k}» tiene que ser una lista de días, y cada día una lista de ids de tramos: [ ['a','b'], ['c'] ].`);r[k]=[]}
  }
  for(const k in r) if(!(k in campos)&&!(k.endsWith('_en')&&campos[k.slice(0,-3)]==='t')) aviso(donde,`Campo desconocido «${k}». ¿Está mal escrito?`);   // «campo_en» (inglés) es opcional
  return true;
}
const dup=new Set();
function idUnico(id,donde){if(dup.has(donde+id)){aviso(donde,`El id '${id}' está repetido. Se usa solo el primero.`);return false}dup.add(donde+id);return true}

const NM={};
DB_P.forEach((r,i)=>{
  const donde=`Punto ${r&&r.id?`'${r.id}'`:'nº '+(i+1)}`;
  const tp=r&&r.tipo; const extra=tp==='refugio'?CAMPOS.refugio:tp==='acceso'?CAMPOS.acceso:{};
  if(!revisar(r,{...CAMPOS.punto,...extra},donde)||!idUnico(r.id,'P'))return;
  if(!D.N[r.id]){aviso(donde,'No tiene posición en el mapa (geo/geometria.js). No se muestra.');return}
  NM[r.id]={n:r.nombre,k:r.nombre_en_tramos||'',s:r.detalle,t:TIPO[r.tipo],lx:r.etiqueta_x,ly:r.etiqueta_y,an:LADO[r.etiqueta_lado],min:r.solo_con_zoom?2:0,db:r};
});
const T=[];
DB_T.forEach((r,i)=>{
  const donde=`Tramo ${r&&r.id?`'${r.id}'`:'nº '+(i+1)}`;
  if(!revisar(r,CAMPOS.tramo,donde)||!idUnico(r.id,'T'))return;
  if(!D.T[r.id]){aviso(donde,'No tiene traza dibujada en geo/geometria.js. No se muestra.');return}
  for(const k of ['desde','hasta']) if(!NM[r[k]]){aviso(donde,`«${k}» es '${r[k]}', que no es un punto de datos/puntos.js. No se muestra.`);return}
  T.push({id:r.id,a:r.desde,b:r.hasta,nm:r.nombre,via:r.via,rt:r.ida_y_vuelta,g:DIF[r.dificultad]||'g0',
    nota:r.nota_dificultad,sen:r.sendas_apn,nsen:Math.max(r.sendas_apn_total,r.sendas_apn.length),ed:r.fuera_de_apn,muni:r.administra,st:r.solo_travesia,
    reg:r.registro,ha:r.huella_andina,zona:r.zona||'Sin zona',dias:r.duracion_dias,reg_nombres:r.nombres_en_registro,db:r});
});
/* Estado según el registro del Parque (datos/estado.js, generado por herramientas/actualizar-estado.mjs).
   Un tramo toma el mejor estado entre los senderos del registro que lo recorren: habilitado o cerrado.
   Si ninguno aparece en el registro, queda «No verificado». */
const EST={get habilitado(){return tt('Habilitado','Open')},get cerrado(){return tt('Cerrado','Closed')},get no_verificado(){return tt('No verificado','Not verified')}};
const EST_ORDEN=['habilitado','cerrado'];
const fechaLoc=(d,o)=>new Date(d).toLocaleString(tt('es-AR','en-GB'),{...o,hour12:false});
const ZONA_EN={'Travesía López–Cretón':'López–Cretón traverse','Tronador y Pampa Linda':'Tronador and Pampa Linda','Llao Llao y Bariloche':'Llao Llao and Bariloche','Villarino y Espejo':'Villarino and Espejo','Lago Traful':'Lake Traful','Cerro Centinela y Colorado':'Cerro Centinela and Colorado','Isla Victoria y Anchorena':'Isla Victoria and Anchorena','Lago Mascardi y Los Césares':'Lake Mascardi and Los Césares','Lago Steffen':'Lake Steffen','Sin zona':'No zone'};
const zN=z=>tt(z,ZONA_EN[z]||z);
const MOTIVO_EN={'CERRADO POR INCLEMENCIA CLIMÁTICA':'closed due to bad weather','SENDERO CERRADO':'trail closed','SENDERO DE MUY ALTA DIFICULTAD, SÓLO CON GUÍA DE TREKKING HABILITADO':'very high difficulty, only with a licensed trekking guide','Toda la categoría está cerrada':'the whole category is closed'};
const motivoN=m=>tt(m,MOTIVO_EN[m]||m);
const REG=typeof ESTADO!=='undefined'?ESTADO:(aviso('datos/estado.js','No se pudo leer el archivo. Todos los tramos quedan «No verificado».'),{entradas:{},actualizado:''});
const regKey=s=>String(s).normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/\s+/g,' ').trim().toLowerCase();
const REGIDX=new Map(Object.entries(REG.entradas).map(([k,v])=>[regKey(k),[k,v]]));
T.forEach(t=>{
  const hall=t.reg_nombres.map(n=>REGIDX.get(regKey(n))).filter(Boolean);
  t.regHall=hall.map(([k,v])=>({n:k,e:v.estado,m:v.motivo}));
  t.hab=hall.length?EST_ORDEN.find(e=>hall.some(([,v])=>v.estado===e)):'no_verificado';
});
const tIds=new Set(T.map(t=>t.id));
const TV=[];
DB_V.forEach((r,i)=>{
  if(typeof TRAMOS==='undefined')return;
  const donde=`Travesía ${r&&r.id?`'${r.id}'`:'nº '+(i+1)}`;
  if(!revisar(r,CAMPOS.travesia,donde)||!idUnico(r.id,'V'))return;
  const flat=r.etapas.flat();
  const falta=flat.filter(x=>!tIds.has(x));
  if(falta.length){aviso(donde,`Usa tramos que no existen o no se muestran: ${falta.join(', ')}. No se muestra.`);return}
  if(!flat.length){aviso(donde,'No tiene tramos. No se muestra.');return}
  TV.push({id:r.id,n:r.nombre,ne:r.nombre_en,s:r.resumen,se:r.resumen_en,sen:r.senda_apn,t:flat,et:r.etapas,db:r});
});
/* Sendas oficiales (datos/sendas.js): cada una se muestra en la ficha de los tramos que la componen */
const SD=new Map();   // id de tramo -> sendas que lo incluyen
const SDR=new Map();  // id de senda -> su registro (la planilla completa sus textos)
DB_S.forEach((r,i)=>{
  const donde=`Senda ${r&&r.id?`'${r.id}'`:'nº '+(i+1)}`;
  if(!revisar(r,CAMPOS.senda,donde)||!idUnico(r.id,'S'))return;
  if(r.precauciones.length!==r.precauciones_en.length)aviso(donde,'«precauciones» y «precauciones_en» tienen distinta cantidad de líneas.');
  r.tramos=r.tramos.filter(id=>tIds.has(id)||(aviso(donde,`Usa el tramo '${id}', que no existe o no se muestra. Se ignora.`),false));
  r.tramos.forEach(id=>{if(!SD.has(id))SD.set(id,[]);SD.get(id).push(r)});
  SDR.set(r.id,r);
});
const esc=s=>String(s??'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
function avisos(){
  const box=document.getElementById('avisos'); if(!AVISOS.length){box.hidden=true;return}
  box.hidden=false;
  box.innerHTML=`<details${AVISOS.length<=3?' open':''}><summary>${AVISOS.length===1?'Hay 1 problema':`Hay ${AVISOS.length} problemas`} en la base de datos</summary><ul>${AVISOS.map(([d,m])=>`<li><b>${esc(d)}</b>: ${esc(m)}</li>`).join('')}</ul></details>`;
}

/* ================= ESTADO ================= */
let sel=null, rev=false, listo=false;
const $=s=>document.querySelector(s);
const svg=$('#map'), pinHome=$('#pin'), dr=$('#dr'), drBody=$('#drbody'), mapwrap=$('#mapwrap');
let pin=pinHome;   // dónde se escribe la ficha: abajo (inicio) o en el panel sobre el mapa (lo elegido)
const NS='http://www.w3.org/2000/svg';
const el=(t,a={},p)=>{const e=document.createElementNS(NS,t);for(const k in a)e.setAttribute(k,a[k]);if(p)p.appendChild(e);return e};
T.forEach(t=>Object.assign(t,D.T[t.id]||{}));
const N={}; for(const k in NM){ if(D.N[k]) N[k]={...NM[k],...D.N[k]}; }
const tById=Object.fromEntries(T.map(t=>[t.id,t]));
const worst=a=>a.reduce((m,g)=>g>m?g:m,'g0');
const tvG=tv=>worst(tv.t.map(id=>tById[id].g));
const kn=n=>n.k||n.n;
/* valor de un campo en el idioma de ahora: si hay versión en inglés (campo_en) y se pide inglés, esa; si no, el español */
const fv=(o,k)=>(LANG==='en'&&o[k+'_en'])||o[k]||'';
const tvN=v=>tt(v.n,v.ne||v.n), tvS=v=>tt(v.s,v.se||v.s);
const tipoN=t=>({acc:tt('Acceso','Trailhead'),ref:tt('Refugio','Hut'),pto:tt('Punto de paso','Waypoint'),lag:tt('Laguna','Lake'),cum:tt('Cumbre','Summit')})[t];
const Tn=T.filter(t=>!t.st);   // tramos que se pueden empezar por separado (los demás solo se ven dentro de una travesía)
const tName=t=>t.nm||`${kn(N[t.a])} ${tt('a','to')} ${kn(N[t.b])}`;
const f1=x=>String(x.toFixed(1)).replace('.',tt(',','.'));
const num=x=>String(Math.round(x));
function orient(v){const ts=v.t.map(i=>tById[i]);const out=[];let cur=null;
  ts.forEach((t,i)=>{if(cur===null){const nx=ts[i+1];cur=(nx&&(t.a===nx.a||t.a===nx.b))?t.b:t.a}
    const to=t.a===cur?t.b:t.a;out.push([t,cur,to]);cur=to});return out}
/* Cada travesía se divide en días: cada día suma la información de sus tramos de 1 día. */
TV.forEach(v=>{
  const O=orient(v);let i=0;
  v.dd=v.et.map(e=>{const part=O.slice(i,i+e.length);i+=e.length;
    let km=0,up=0,dn=0;part.forEach(([t,a])=>{if(t.src==='none')return;const f=t.a===a;km+=t.km;up+=f?t.up:t.dn;dn+=f?t.dn:t.up});
    return {O:part,km,up,dn,from:part[0][1],to:part[part.length-1][2]}});
  v.nd=v.et.length;
  v.zonas=new Set(v.t.map(id=>tById[id].zona));
  const hs=v.t.map(id=>tById[id].hab);
  v.hab=hs.includes('cerrado')?'cerrado':hs.includes('no_verificado')?'no_verificado':'habilitado';
});
function swatch(g,w=30){const dash={g0:'',g1:'',g2:'9 5',g3:'2 6'}[g];
  return `<svg class="sw" width="${w}" height="10" viewBox="0 0 ${w} 10" aria-hidden="true"><line x1="3" y1="5" x2="${w-3}" y2="5" stroke="var(--${g})" stroke-width="4.2" stroke-linecap="round" ${dash?`stroke-dasharray="${dash}"`:''}/></svg>`}

/* ================= MAPA ================= */
const LBL=[];   // etiquetas del mapa, para ordenarlas (ver ordenarEtiquetas)
function lab(parent,cls,x,y){return el('g',{class:cls,style:`transform:translate(${x}px,${y}px) scale(var(--u))`},parent)}
function build(){
  const root=el('g',{},svg);
  const E=el('g',{id:'edges'},root), LB=el('g',{},root), ND=el('g',{id:'nodes'},root);
  T.forEach(tr=>{
    const g=el('g',{class:'e','data-id':tr.id,tabindex:0,role:'button','aria-label':tt('Tramo ','Trail ')+tName(tr)},E);
    el('path',{d:tr.d,class:'ecase'},g);el('path',{d:tr.d,class:'eline'},g);el('path',{d:tr.d,class:'ehit'},g);
    g.addEventListener('click',ev=>{if(moved)return;ev.stopPropagation();go('t',tr.id)});
    g.addEventListener('keydown',ev=>{if(ev.key==='Enter'||ev.key===' '){ev.preventDefault();go('t',tr.id)}});
  });
  for(const id in N){
    const n=N[id]; const g=el('g',{class:'n '+n.t+(n.min?' m2':''),'data-id':id,tabindex:0,role:'button','aria-label':n.n,style:`transform:translate(${n.x}px,${n.y}px) scale(var(--u))`},ND);
    el('circle',{class:'halo',cx:0,cy:0,r:13},g);
    if(n.t==='ref') el('rect',{class:'gl',x:-6,y:-6,width:12,height:12},g);
    else if(n.t==='acc') el('circle',{class:'gl',cx:0,cy:0,r:5.6},g);
    else if(n.t==='lag') el('circle',{class:'gl',cx:0,cy:0,r:5},g);
    else if(n.t==='cum') el('path',{class:'gl',d:'M0,-7.5 L7.5,5.5 L-7.5,5.5 Z'},g);
    else el('circle',{class:'gl',cx:0,cy:0,r:3.8},g);
    const tx=el('text',{x:n.lx,y:n.ly,'text-anchor':n.an||'start'},g);tx.textContent=n.n;
    {const w=n.n.length*7.8,sw=n.s?n.s.length*6.2:0,an=n.an||'start',x0=an==='start'?n.lx:an==='end'?n.lx-w:n.lx-w/2,x1=an==='start'?n.lx+w:an==='end'?n.lx:n.lx+w/2;
     const sx0=an==='start'?n.lx:an==='end'?n.lx-sw:n.lx-sw/2,sx1=an==='start'?n.lx+sw:an==='end'?n.lx:n.lx+sw/2;
     LBL.push({g,id,x:n.x,y:n.y,node:true,pri:/^(acceso|empalme|inicio)$/i.test(n.n.trim())?20:({ref:100,acc:85,cum:60,lag:55,pto:40}[n.t]||40)-(n.min?10:0),min:n.min,t:n.t,
       b:[x0,n.ly-13,x1,n.ly+4],bs:n.s?[Math.min(x0,sx0),n.ly-13,Math.max(x1,sx1),n.ly+17]:null,sym:[-8,-8,8,8]})}
    if(n.s){const sx=el('text',{class:'sub',x:n.lx,y:n.ly+13,'text-anchor':n.an||'start'},g);sx.textContent=n.s}
    g.addEventListener('click',ev=>{if(moved)return;ev.stopPropagation();go('n',id)});
    g.addEventListener('keydown',ev=>{if(ev.key==='Enter'||ev.key===' '){ev.preventDefault();go('n',id)}});
  }
}
function paint(){
  let hi=null;
  if(sel&&sel[0]==='t')hi=new Set([sel[1]]);
  if(sel&&sel[0]==='v')hi=new Set(TV.find(v=>v.id===sel[1]).t);
  if(sel&&sel[0]==='n')hi=new Set(T.filter(t=>t.a===sel[1]||t.b===sel[1]).map(t=>t.id));
  const hn=new Set(); if(hi)T.forEach(t=>{if(hi.has(t.id)){hn.add(t.a);hn.add(t.b)}});
  svg.querySelectorAll('.e').forEach(g=>{
    const t=tById[g.dataset.id], gg=t.g;
    g.setAttribute('class','e '+gg+(t.src==='none'?' none':'')+(t.st&&!modoTv()&&!(hi&&hi.has(t.id))?' oculto':'')+((hi?!hi.has(t.id):!pasa(t))?' dim':'')+(hi&&hi.has(t.id)&&sel[0]!=='n'?' sel':''));
  });
  svg.querySelectorAll('.n').forEach(g=>{const id=g.dataset.id;
    g.classList.toggle('dim',!!hi&&!hn.has(id)&&!(sel[0]==='n'&&sel[1]===id));
    g.classList.toggle('sel',!!sel&&sel[0]==='n'&&sel[1]===id)});
  paintFiltros();
  vacioAviso();
  ordenarEtiquetas();
}

/* ================= ORDEN DE LAS ETIQUETAS =================
   Para que los nombres no se pisen: se ordenan por importancia (refugios, accesos, lugares grandes
   primero) y cada uno se muestra solo si no tapa a otro ya puesto. Al acercar el mapa hay más
   lugar y aparecen más nombres. Los símbolos de los puntos nunca se esconden. */
const nombres='todos';
const PRINCIPAL=65;
let ordenPend=0;
function ordenarEtiquetas(){if(ordenPend)return;ordenPend=requestAnimationFrame(()=>{ordenPend=0;ordenar()})}
function ordenar(){
  const u=vb.w/svg.getBoundingClientRect().width||1, z=+svg.dataset.z||1;
  const sx=sel&&sel[0]==='n'?sel[1]:null;
  const ocupado=[];
  const choca=(b,dueño)=>ocupado.some(o=>o[4]!==dueño&&b[0]<o[2]&&b[2]>o[0]&&b[1]<o[3]&&b[3]>o[1]);
  const M=4;   // margen de aire entre nombres, en píxeles
  const caja=(it,b)=>[it.x+(b[0]-M)*u,it.y+(b[1]-M)*u,it.x+(b[2]+M)*u,it.y+(b[3]+M)*u];
  LBL.forEach(it=>{if(it.node)ocupado.push([...caja(it,it.sym),it])});   // los símbolos de los puntos siempre ocupan lugar
  const orden=LBL.map(it=>[it,(it.id&&it.id===sx)?1000:it.pri]).sort((p,q)=>q[1]-p[1]||p[0].x-q[0].x);
  for(const [it,pri] of orden){
    let ver=pri>=1000||(nombres==='todos'?true:nombres==='principales'?pri>=PRINCIPAL:false);
    if(ver&&pri<1000){   // reglas por zoom
      if(it.node)ver=z>=2||!(it.min||it.t==='pto'||it.t==='lag');
      else ver=it.lv===1||(it.lv===2&&z>=2)||(it.lv===3&&z>=3);
    }
    if(it.node){
      let b=null,sub=false;
      if(ver){b=caja(it,(z>=2&&it.bs)?it.bs:it.b);sub=z>=2&&!!it.bs;if(choca(b,it)&&pri<1000){sub=false;b=caja(it,it.b)}
        ver=pri>=1000||!choca(b,it)}
      it.g.classList.toggle('nolab',!ver);
      it.g.classList.toggle('nosub',!(ver&&sub&&nombres==='todos'));
      if(ver)ocupado.push([...b,it]);
    }else{
      let b=null; if(ver){b=caja(it,it.b);ver=!choca(b,it)}
      it.g.classList.toggle('nolab',!ver);
      if(ver)ocupado.push([...b,it]);
    }
  }
}

/* ================= FILTROS =================
   Cada filtro es una lista de opciones; un tramo se muestra si cumple los cinco.
   Por defecto todo está tildado, salvo «Duración» (solo 1 día) y «Habilitado» (habilitados y no verificados).
   Los tramos que no cumplen quedan atenuados en el mapa. */
const RANGOS={
  km:[[()=>tt('Hasta 3 km','Up to 3 km'),0,3],[()=>tt('3 a 8 km','3 to 8 km'),3,8],[()=>tt('8 a 15 km','8 to 15 km'),8,15],[()=>tt('Más de 15 km','Over 15 km'),15,Infinity]],
  des:[[()=>tt('Hasta 200 m','Up to 200 m'),0,200],[()=>tt('200 a 500 m','200 to 500 m'),200,500],[()=>tt('500 a 1000 m','500 to 1000 m'),500,1000],[()=>tt('Más de 1000 m','Over 1000 m'),1000,Infinity]]
};
/* desnivel = el mayor entre subida y bajada */
const desnivel=t=>t.up==null?null:Math.max(t.up,t.dn);
const ZONAS=[...new Set(T.map(t=>t.zona))].sort((a,b)=>a.localeCompare(b,'es'));
const FILT=[
  {id:'dif',get nom(){return tt('Dificultad','Difficulty')},get op(){return [['g1',G.g1.l],['g2',G.g2.l],['g3',G.g3.l],['g0',G.g0.l]]},val:t=>t.g,sw:true},
  {id:'km',get nom(){return tt('Distancia','Distance')},get op(){return RANGOS.km.map((r,i)=>[i,r[0]()])},val:t=>t.km==null?null:RANGOS.km.findIndex(r=>t.km>=r[1]&&t.km<r[2])},
  {id:'des',get nom(){return tt('Desnivel','Elevation')},get op(){return RANGOS.des.map((r,i)=>[i,r[0]()])},val:t=>{const d=desnivel(t);return d==null?null:RANGOS.des.findIndex(r=>d>=r[1]&&d<r[2])}},
  {id:'dur',get nom(){return tt('Duración','Duration')},uno:true,get op(){return [[1,tt('1 día','1 day')],[2,tt('2 días','2 days')],[3,tt('3 días','3 days')],[4,tt('4 días','4 days')],[5,tt('Más de 4 días','More than 4 days')]]},val:t=>t.dias>0?Math.min(5,Math.round(t.dias)):null},
  {id:'zona',get nom(){return tt('Zona','Area')},get op(){return ZONAS.map(z=>[z,zN(z)])},val:t=>t.zona},
  {id:'hab',get nom(){return tt('Habilitado','Status')},get op(){return Object.keys(EST).map(k=>[k,EST[k]])},val:t=>t.hab}
];
/* valores tildados al empezar: Duración, solo 1 día; Habilitado, habilitados y no verificados; el resto, todo */
const DEF={dur:[1],hab:['habilitado','no_verificado']};
const SEL={}; FILT.forEach(f=>SEL[f.id]=new Set(DEF[f.id]||f.op.map(o=>o[0])));
let abierto=null;
/* un valor desconocido (por ejemplo, tramo sin traza) pasa solo si el filtro está completo */
const pasaF=(f,t)=>{const v=f.val(t);return v==null?SEL[f.id].size===f.op.length:SEL[f.id].has(v)};
/* Con 1 día se ven los tramos. Con 2 o más, las travesías de esa duración: sus tramos quedan normales y el resto, atenuado. */
const modoTv=()=>[...SEL.dur][0]>=2;
const rango=(r,x)=>r.findIndex(q=>x>=q[1]&&x<q[2]);
function tvPasa(v){
  if(!SEL.dur.has(Math.min(5,v.nd))||!SEL.dif.has(tvG(v))||!SEL.hab.has(v.hab))return false;
  if(![...v.zonas].some(z=>SEL.zona.has(z)))return false;
  const km=Math.max(...v.dd.map(d=>d.km)),des=Math.max(...v.dd.map(d=>Math.max(d.up,d.dn)));   // el día más largo y el más exigente
  return SEL.km.has(rango(RANGOS.km,km))&&SEL.des.has(rango(RANGOS.des,des));
}
const pasa=t=>modoTv()?TV.some(v=>tvPasa(v)&&v.t.includes(t.id)):(!t.st&&FILT.every(f=>pasaF(f,t)));
const filtroActivo=f=>{const d=new Set(DEF[f.id]||f.op.map(o=>o[0])),s=SEL[f.id];return s.size!==d.size||[...s].some(v=>!d.has(v))};
function resumen(f){const s=SEL[f.id],n=f.op.length;
  if(f.id==='hab'&&!filtroActivo(f))return '';   // Habilitado: sin texto mientras está en su valor inicial
  if(s.size===n)return tt(f.id==='hab'?'todos':f.id==='dur'?'todas':f.id==='des'?'todos':'todas','all');
  if(s.size===0)return tt(f.id==='hab'?'ninguno':f.id==='des'?'ninguno':'ninguna','none');
  if(s.size===1)return String(f.op.find(o=>s.has(o[0]))[1]);
  return `${s.size} ${tt('de','of')} ${n}`}
function paintFiltros(){
  const bar=$('#filtros');
  bar.innerHTML=FILT.map(f=>{
    const cnt=new Map(f.op.map(o=>[o[0],0]));Tn.forEach(t=>{const v=f.val(t);if(cnt.has(v))cnt.set(v,cnt.get(v)+1)});
    if(f.id==='dur'){cnt.set(1,cnt.get(1)||0);for(let d=2;d<=5;d++)cnt.set(d,0);TV.forEach(v=>{const d=Math.min(5,v.nd);if(d>=2)cnt.set(d,cnt.get(d)+1)})}   // 1 día cuenta tramos; 2 o más, travesías
    const op=f.op.filter(o=>f.id==='hab'||f.id==='dur'||cnt.get(o[0])||SEL[f.id].has(o[0]));
    return `<div class="flt${abierto===f.id?' open':''}${filtroActivo(f)?' on':''}">
      <button class="fbtn" data-f="${f.id}" aria-expanded="${abierto===f.id}" aria-controls="fp-${f.id}"><span class="fn">${f.nom}</span>${resumen(f)?`<span class="fv">${esc(resumen(f))}</span>`:''}<svg width="10" height="6" viewBox="0 0 10 6" aria-hidden="true"><path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.6"/></svg></button>
      <div class="fpanel" id="fp-${f.id}" ${abierto===f.id?'':'hidden'}>
        ${f.uno?`<div class="fall"><span>${tt('Elegí una opción','Choose one option')}</span></div>`:`<div class="fall"><button data-all="${f.id}">${tt('Todas','All')}</button><button data-none="${f.id}">${tt('Ninguna','None')}</button></div>`}
        ${op.map(o=>`<label><input type="${f.uno?'radio':'checkbox'}" name="r-${f.id}" data-f="${f.id}" data-v="${esc(o[0])}" ${SEL[f.id].has(o[0])?'checked':''}>${f.sw?swatch(o[0],26):''}<span>${esc(o[1])}</span><b title="${f.id==='dur'?(o[0]===1?tt('tramos','trails'):tt('travesías','multi-day routes')):''}">${cnt.get(o[0])}</b></label>`).join('')}
      </div></div>`}).join('')+`<span class="fcount" aria-live="polite">${modoTv()?TV.filter(tvPasa).length+' '+tt('de','of')+' '+TV.length+' '+tt('travesías','multi-day routes'):T.filter(pasa).length+' '+tt('de','of')+' '+Tn.length+' '+tt('tramos','trails')}${REG.actualizado?` · ${tt('Registro de Parques Nacionales leído el','National Parks registry read on')} ${fechaLoc(REG.actualizado,{day:'numeric',month:'numeric',hour:'2-digit',minute:'2-digit'})}`:''}</span>`;
  paintTravesias();
  bar.querySelectorAll('.fbtn').forEach(b=>b.onclick=ev=>{ev.stopPropagation();abierto=abierto===b.dataset.f?null:b.dataset.f;paintFiltros();if(abierto){const fp=$('#fp-'+abierto);fp.querySelector('input')?.focus()}});
  bar.querySelectorAll('.fpanel').forEach(p=>p.onclick=ev=>ev.stopPropagation());
  bar.querySelectorAll('input[type=checkbox],input[type=radio]').forEach(c=>c.onchange=()=>{
    const f=FILT.find(x=>x.id===c.dataset.f),v=f.op.find(o=>String(o[0])===c.dataset.v)[0];
    if(f.uno){SEL[f.id]=new Set([v]);abierto=null;if(sel&&sel[0]==='v'&&!modoTv())go(null);paint();ajustarAFiltros();guardarUrl();$(`.fbtn[data-f="${f.id}"]`).focus();return}
    c.checked?SEL[f.id].add(v):SEL[f.id].delete(v);refresh(f.id);ajustarAFiltros();guardarUrl()});
  bar.querySelectorAll('[data-all]').forEach(b=>b.onclick=()=>{const f=FILT.find(x=>x.id===b.dataset.all);f.op.forEach(o=>SEL[f.id].add(o[0]));refresh(f.id);ajustarAFiltros();guardarUrl()});
  bar.querySelectorAll('[data-none]').forEach(b=>b.onclick=()=>{SEL[b.dataset.none].clear();refresh(b.dataset.none);guardarUrl()});
}
function paintTravesias(){
  const tl=$('#tvlist'); if(!tl)return;
  if(!modoTv()){tl.hidden=true;tl.innerHTML='';return}
  const d=[...SEL.dur][0],l=TV.filter(tvPasa);
  tl.hidden=false;
  tl.innerHTML=`<span class="tvh">${tt('Travesías de','Multi-day routes of')} ${d>=5?tt('más de 4 días','more than 4 days'):d+' '+tt('días','days')}</span>`+(l.length
    ?l.map(v=>`<button type="button" class="tvb${sel&&sel[0]==='v'&&sel[1]===v.id?' on':''}" data-v="${v.id}"><span>${esc(tvN(v))}</span>${swatch(tvG(v),22)}<small>${v.nd} ${tt('días','days')}</small></button>`).join('')
    :`<span class="tvh soft">${tt('Ninguna con estos filtros.','None with these filters.')}</span>`);
  tl.querySelectorAll('button').forEach(b=>b.onclick=()=>go('v',b.dataset.v));
}
/* repinta el mapa sin cerrar la ventanilla ni perder el foco */
function refresh(id){const k=document.activeElement&&(document.activeElement.dataset.v||document.activeElement.dataset.all||document.activeElement.dataset.none);
  const sel0=document.activeElement&&['v','all','none'].find(x=>document.activeElement.dataset[x]!=null);
  paint(); if(sel0&&k!=null){const q=sel0==='v'?`#fp-${id} input[data-v="${CSS.escape(k)}"]`:`#fp-${id} [data-${sel0}]`;$(q)?.focus()}}
document.addEventListener('click',()=>{if(abierto){abierto=null;paintFiltros()}});
document.addEventListener('keydown',ev=>{if(ev.key==='Escape'&&abierto){const b=$(`.fbtn[data-f="${abierto}"]`);abierto=null;paintFiltros();$(`.fbtn[data-f="${b.dataset.f}"]`).focus()}});

/* ================= PANEL ================= */
function difBox(g,note){
  return `<div class="guia"><div class="gseason on">${swatch(g)}<span class="lab">${G[g].l}</span></div>${note?`<div class="gnote">${note}</div>`:''}</div>`}
const INFO=()=>`<p class="fine" style="margin-top:14px">${tt('Normas para cuidar el lugar y teléfonos de emergencia:','Rules for looking after the place and emergency numbers:')} <a href="info-utiles.html">${tt('Info útiles','Useful info')}</a>.</p>`;
function estBox(t){
  const cuando=REG.actualizado?` ${tt('Leído el','Read on')} ${fechaLoc(REG.actualizado,{day:'numeric',month:'long',hour:'2-digit',minute:'2-digit'})}.`:'';
  if(t.hab==='no_verificado')return `<div class="row"><span class="k">${tt('Estado','Status')}</span><span class="v soft">${EST.no_verificado}</span></div><p class="fine">${tt('Este tramo no figura en el formulario de registro del Parque, o todavía no está asociado a un sendero del formulario.','This trail is not in the Park registration form, or is not yet linked to a trail in the form.')}</p>`;
  const det=t.regHall.map(h=>`<li>${esc(h.n)}: ${EST[h.e]}${h.m?' ('+esc(motivoN(h.m).toLowerCase())+')':''}</li>`).join('');
  return `<div class="row"><span class="k">${tt('Estado','Status')}</span><span class="v">${EST[t.hab]}</span></div><ul class="plain fine">${det}</ul><p class="fine">${tt('Según el formulario de registro de trekking del Parque.','According to the Park trekking registration form.')}${cuando}</p>`;
}
/* ================= REGISTRO DE TREKKING YA COMPLETADO =================
   El registro oficial es un formulario de Google. Acá la persona carga sus datos una vez; quedan guardados SOLO
   en su navegador (localStorage, «pt.perfil»), no se envían a ningún servidor de esta página. Al tocar
   «Abrir el registro» se abre el formulario oficial con esos datos ya puestos (van en el enlace a Google Forms).
   La estructura del formulario (códigos de campos, opciones) la lee herramientas/actualizar-estado.mjs y queda en datos/estado.js.
   No se completan solas las preguntas de autoevaluación ni las de pernocte y reserva: las responde la persona. */
const FORMREG=typeof FORMULARIO!=='undefined'&&FORMULARIO&&FORMULARIO.senderos?FORMULARIO:null;
const perfilVacio=()=>({email:'',nombre:'',dni:'',residencia:'',telefono:'',contacto:'',vehiculo:'',acomp:[]});
function perfilLeer(){try{const p=JSON.parse(localStorage.getItem('pt.perfil')||'{}');return {...perfilVacio(),...p,acomp:Array.isArray(p.acomp)?p.acomp.filter(a=>a&&typeof a==='object'):[]}}catch(e){return perfilVacio()}}
function perfilGuardar(p){try{localStorage.setItem('pt.perfil',JSON.stringify(p));return true}catch(e){return false}}
let REGCTX=null;   // lo que se registra: nombre de la ficha y nombres del formulario del Parque que le corresponden
function regCandidatos(nombres,tipo){
  const vistos=new Set(),r=nombres.filter(n=>!vistos.has(n)&&vistos.add(n)).map(n=>{const e=REG.entradas[n]||{};return {n,e:e.estado||'',m:e.motivo||'',p:FORMREG&&FORMREG.senderos[n]}}).filter(c=>c.p);
  const t=tipo?r.filter(c=>c.p.tipo===tipo):[];
  return (t.length?t:r).sort((a,b)=>(a.e==='habilitado'?0:1)-(b.e==='habilitado'?0:1))}
const fechaP=s=>{const m=String(s).match(/(\d+)\/(\d+)\/(\d+)/);return m?new Date(+m[3],+m[2]-1,+m[1]):null};
function fechasValidas(ops){const hoy=new Date();hoy.setHours(0,0,0,0);const v=ops.filter(x=>{const d=fechaP(x);return d&&d>=hoy});return v.length?v:ops}
function regUrl(c,perfil,sal){
  const F=FORMREG.campos,SN=FORMREG.sino,O=FORMREG.opciones,P=new URLSearchParams({usp:'pp_url'});
  const put=(k,v)=>{if(k!=null&&v!=null&&String(v).trim()!=='')P.append('entry.'+k,String(v).trim())};
  if(perfil.email.trim())P.append('emailAddress',perfil.email.trim());
  put(F.nombre,perfil.nombre);put(F.dni,perfil.dni);put(F.residencia,perfil.residencia);put(F.telefono,perfil.telefono);
  Object.entries(c.p.prefill).forEach(([k,v])=>put(k,v));
  put(F.fechaInicio,sal.inicio);put(F.fechaRegreso,sal.regreso);
  if(perfil.contacto.trim()){put(F.alguienSabe,SN.alguienSabe.si);put(F.contacto,perfil.contacto)}
  const ac=sal.acomp;
  put(F.vasAcompanado,ac.length?SN.vasAcompanado.si:SN.vasAcompanado.no);
  if(ac.length){
    const may=ac.filter(a=>!a.menor).length,men=ac.length-may;
    const cant=(campo,n,exacta)=>{if(n>=10){put(campo,O.mayores[O.mayores.length-1]);put(exacta,n)}else put(campo,String(n))};
    cant(F.mayores,may,F.masDe10[0]);cant(F.menores,men,F.masDe10[1]);
    put(F.acompanantes,ac.map(a=>`${String(a.nombre).trim()}${a.dni?` (DNI ${String(a.dni).trim()})`:''}${a.menor?' – menor':''}`).join(', '));
  }
  put(F.hayObservaciones,sal.obs?SN.hayObservaciones.si:SN.hayObservaciones.no);put(F.observaciones,sal.obs);
  const veh=sal.vehiculo&&perfil.vehiculo.trim();
  put(F.vehiculoSi,veh?SN.vehiculoSi.si:SN.vehiculoSi.no);if(veh)put(F.vehiculo,perfil.vehiculo);
  return FORMREG.viewUrl+'?'+P.toString()}
function abrirRegistro(){
  const ctx=REGCTX; if(!ctx||!FORMREG||!ctx.cand.length)return;
  const perfil=perfilLeer(), sel=new Set(perfil.acomp.map((a,i)=>i));
  document.getElementById('regdlg')?.remove();
  const dlg=document.createElement('dialog'); dlg.id='regdlg'; dlg.className='regdlg';
  const iO=fechasValidas(FORMREG.opciones.fechaInicio), rO=fechasValidas(FORMREG.opciones.fechaRegreso);
  const ESTN={habilitado:tt('habilitado','open'),cerrado:tt('cerrado','closed')};
  const opt=(v,t)=>{const o=document.createElement('option');o.value=v;o.textContent=t??v;return o};
  dlg.innerHTML=`<form method="dialog" class="rg">
    <h2>${tt('Hacer el registro de trekking','Trekking registration')}</h2>
    <p class="fine">${tt('Es el formulario oficial del Parque Nacional Nahuel Huapi. Acá cargás tus datos una vez y se abre el formulario ya completado.','This is the official Nahuel Huapi National Park form. You enter your details once here and the form opens already filled in.')}</p>
    <div id="rgal"></div>
    <fieldset><legend>${tt('Tu salida','Your trip')}</legend>
      <p class="rgnm"><b></b></p>
      <label id="rgcl">${tt('Cómo figura en el formulario del Parque','How it appears in the Park form')}<select name="cand"></select></label>
      <div class="rg2"><label>${tt('Fecha de inicio','Start date')}<select name="inicio"></select></label><label>${tt('Fecha de regreso','Return date')}<select name="regreso"></select></label></div>
      <div id="rgpick"></div>
      <label class="rgsw"><input type="checkbox" name="veh"> <span id="rgvl"></span></label>
      <label>${tt('Observaciones (opcional)','Notes (optional)')}<textarea name="obs" rows="2" placeholder="${tt('Ej.: pernocte en el refugio con reserva confirmada','E.g. overnight at the hut with a confirmed booking')}"></textarea></label>
    </fieldset>
    <fieldset><legend>${tt('Tus datos','Your details')}</legend>
      <p class="fine">${tt('Se guardan solo en este navegador. No se envían a este sitio ni a ningún servidor nuestro: viajan únicamente en el enlace al formulario de Google que vos abrís.','They are saved only in this browser. They are not sent to this site or to any server of ours: they only travel in the link to the Google form that you open.')}</p>
      <label>${tt('Email','Email')}<input name="email" type="email" autocomplete="email"></label>
      <label>${tt('Nombre y apellido del responsable del grupo','Full name of the group leader')}<input name="nombre" autocomplete="name"></label>
      <div class="rg2"><label>${tt('DNI o pasaporte','ID or passport number')}<input name="dni" autocomplete="off"></label><label>${tt('Teléfono','Phone')}<input name="telefono" type="tel" autocomplete="tel"></label></div>
      <label>${tt('Lugar de residencia','Place of residence')}<input name="residencia" autocomplete="address-level2"></label>
      <label>${tt('Contacto de alguien que no hace la salida (nombre y teléfono)','Contact of someone who is not on the trip (name and phone)')}<input name="contacto" autocomplete="off"></label>
      <label>${tt('Vehículo (opcional: marca, modelo y patente)','Vehicle (optional: make, model and plate)')}<input name="vehiculo" autocomplete="off"></label>
      <div class="rgh">${tt('Acompañantes que suelen ir con vos','People who usually go with you')}</div>
      <ul id="rgac" class="rgac"></ul>
      <button type="button" id="rgadd" class="rgsec">+ ${tt('Agregar acompañante','Add companion')}</button>
    </fieldset>
    <p class="fine">${tt('El registro es una declaración jurada: revisá cada dato en el formulario antes de enviarlo. Las preguntas sobre tu preparación, la pernocte y las reservas las respondés vos ahí.','The registration is a sworn statement: check every item on the form before submitting. Questions about your preparation, overnight stays and bookings are answered by you there.')}</p>
    <div class="rgb"><button type="button" id="rgx" class="rgsec">${tt('Cerrar','Close')}</button><button type="button" id="rgdel" class="rgsec">${tt('Borrar mis datos','Delete my details')}</button><button type="button" id="rgcp" class="rgsec">${tt('Copiar enlace','Copy link')}</button><button type="button" id="rggo" class="rgpri">${tt('Abrir el registro','Open the registration')}</button></div>
  </form>`;
  document.body.appendChild(dlg);
  const f=dlg.querySelector('form'), E=n=>f.elements[n];
  dlg.querySelector('.rgnm b').textContent=ctx.nombre;
  ctx.cand.forEach((c,i)=>E('cand').appendChild(opt(i,`${c.n} (${c.p.zona}, ${ESTN[c.e]||tt('sin estado','no status')})`)));
  if(ctx.cand.length<2)dlg.querySelector('#rgcl').hidden=true;
  iO.forEach(x=>E('inicio').appendChild(opt(x))); rO.forEach(x=>E('regreso').appendChild(opt(x)));
  const sincFechas=()=>{const a=fechaP(E('inicio').value),b=fechaP(E('regreso').value);if(a&&b&&b<a)E('regreso').value=E('inicio').value};
  E('inicio').onchange=sincFechas; sincFechas();
  ['email','nombre','dni','telefono','residencia','contacto','vehiculo'].forEach(k=>{E(k).value=perfil[k]||'';E(k).addEventListener('input',()=>{perfil[k]=E(k).value;perfilGuardar(perfil);alertas();veh()})});
  function veh(){const t=perfil.vehiculo.trim();E('veh').disabled=!t;if(!t)E('veh').checked=false;dlg.querySelector('#rgvl').textContent=t?`${tt('Llego en vehículo propio','I arrive in my own vehicle')} (${t})`:tt('Llego en vehículo propio (cargá el vehículo en «Tus datos»)','I arrive in my own vehicle (enter it in "Your details")')}
  function pick(){
    const box=dlg.querySelector('#rgpick'); box.innerHTML='';
    const con=perfil.acomp.map((a,i)=>[a,i]).filter(([a])=>String(a.nombre||'').trim());
    if(!con.length){box.innerHTML=`<p class="fine">${tt('Si vas con acompañantes, cargalos en «Tus datos» para elegirlos acá.','If you go with companions, add them in "Your details" to choose them here.')}</p>`;return}
    const g=document.createElement('div');g.className='rgcks';g.innerHTML=`<div class="rgh">${tt('Quiénes van en esta salida','Who is on this trip')}</div>`;
    con.forEach(([a,i])=>{const l=document.createElement('label');l.className='rgsw';const c=document.createElement('input');c.type='checkbox';c.checked=sel.has(i);
      c.onchange=()=>{c.checked?sel.add(i):sel.delete(i)};l.append(c,' ',document.createTextNode(a.nombre+(a.menor?` (${tt('menor','minor')})`:'')));g.appendChild(l)});
    box.appendChild(g)}
  function filas(){
    const ul=dlg.querySelector('#rgac');ul.innerHTML='';
    perfil.acomp.forEach((a,i)=>{
      const li=document.createElement('li');
      li.innerHTML=`<input data-k="nombre" placeholder="${tt('Nombre y apellido','Full name')}" aria-label="${tt('Nombre y apellido del acompañante','Companion full name')}"><input data-k="dni" placeholder="${tt('DNI (opcional)','ID (optional)')}" aria-label="${tt('DNI del acompañante','Companion ID')}"><label class="rgsw"><input type="checkbox" data-k="menor"> ${tt('menor','minor')}</label><button type="button" class="rgsec" aria-label="${tt('Quitar','Remove')}">✕</button>`;
      li.querySelectorAll('[data-k]').forEach(inp=>{const k=inp.dataset.k;if(k==='menor')inp.checked=!!a.menor;else inp.value=a[k]||'';
        inp.addEventListener(k==='menor'?'change':'input',()=>{a[k]=k==='menor'?inp.checked:inp.value;perfilGuardar(perfil);if(k!=='dni')pick()})});
      li.querySelector('button').onclick=()=>{perfil.acomp.splice(i,1);sel.clear();perfil.acomp.forEach((x,j)=>sel.add(j));perfilGuardar(perfil);filas();pick()};
      ul.appendChild(li)});
  }
  dlg.querySelector('#rgadd').onclick=()=>{perfil.acomp.push({nombre:'',dni:'',menor:false});sel.add(perfil.acomp.length-1);perfilGuardar(perfil);filas();pick();dlg.querySelector('#rgac li:last-child input')?.focus()};
  function salida(){return {inicio:E('inicio').value,regreso:E('regreso').value,obs:E('obs').value.trim(),vehiculo:E('veh').checked,
    acomp:perfil.acomp.filter((a,i)=>sel.has(i)&&String(a.nombre||'').trim())}}
  const url=()=>regUrl(ctx.cand[+E('cand').value||0],perfil,salida());
  function alertas(){
    const c=ctx.cand[+E('cand').value||0],m=[];
    if(c.e==='cerrado')m.push(['err',tt('Este sendero figura CERRADO en el registro del Parque: el registro no tendría validez.','This trail is listed as CLOSED in the Park registry: a registration would not be valid.')]);
    else if(/solo con guia/.test(regKey(c.m)))m.push(['warn',tt('Sendero solo con guía habilitado: el registro lo completa tu guía.','Licensed guide only: your guide fills in the registration.')]);
    const falta=[['email',tt('email','email')],['nombre',tt('nombre','name')],['dni',tt('DNI','ID')],['telefono',tt('teléfono','phone')],['residencia',tt('residencia','residence')]].filter(([k])=>!String(perfil[k]||'').trim()).map(x=>x[1]);
    if(falta.length)m.push(['warn',tt('Faltan datos del responsable: ','Missing details of the group leader: ')+falta.join(', ')+tt('. Podés completarlos en el formulario.','. You can fill them in on the form.')]);
    dlg.querySelector('#rgal').innerHTML=m.map(([k,t])=>`<div class="rga ${k}">${esc(t)}</div>`).join('')}
  E('cand').onchange=alertas;
  dlg.querySelector('#rggo').onclick=()=>{window.open(url(),'_blank','noopener');dlg.close()};
  dlg.querySelector('#rgcp').onclick=async e=>{const b=e.currentTarget;try{await navigator.clipboard.writeText(url());b.textContent=tt('Copiado','Copied')}catch(x){prompt(tt('Copiá el enlace:','Copy the link:'),url())}};
  dlg.querySelector('#rgx').onclick=()=>dlg.close();
  dlg.querySelector('#rgdel').onclick=()=>{if(!confirm(tt('¿Borrar tus datos guardados en este navegador?','Delete your details saved in this browser?')))return;
    try{localStorage.removeItem('pt.perfil')}catch(x){}
    Object.assign(perfil,perfilVacio());['email','nombre','dni','telefono','residencia','contacto','vehiculo'].forEach(k=>E(k).value='');sel.clear();filas();pick();veh();alertas()};
  dlg.addEventListener('close',()=>dlg.remove());
  filas();pick();veh();alertas();
  dlg.showModal();
}
function regBlock(reg='obligatorio',conBoton){
  if(reg==='no_requiere') return `<div class="row"><span class="k">${tt('Registro de trekking','Trekking registration')}</span><span class="v">${tt('No hace falta','Not required')}</span></div>`;
  if(reg==='a_confirmar'||reg==='dificultad_baja') return `<div class="row"><span class="k">${tt('Registro de trekking','Trekking registration')}</span><span class="v soft">${tt('a confirmar','to be confirmed')} <b class="mk pe">○</b></span></div>${reg==='dificultad_baja'?`<p class="pend" style="font-size:15px;margin-top:4px">${tt('Los senderos de dificultad baja están exceptuados; falta el anexo de clasificación para confirmarlo.','Low-difficulty trails are exempt; the classification annex is still missing to confirm it.')}</p>`:''}`;
  return `<div class="row"><span class="k">${tt('Registro de trekking','Trekking registration')}</span><span class="v">${tt('Obligatorio','Required')} <b class="mk of">■</b></span></div>${conBoton&&FORMREG&&REGCTX&&REGCTX.cand.length?`<p class="reg" style="margin-top:6px"><button type="button" class="regbtn" data-reg>${tt('Hacer el registro','Do the registration')}</button></p><p class="fine" style="margin-top:4px">${tt('Se abre el formulario oficial con tus datos ya puestos, guardados solo en tu navegador.','Opens the official form with your details already filled in, saved only in your browser.')} <a href="https://www.nahuelhuapi.gov.ar/trekking-y-actividades-de-montana/" target="_blank" rel="noopener">${tt('O registrate en la web del parque','Or register on the park website')}</a></p>`:`<p class="reg" style="margin-top:4px"><a href="https://www.nahuelhuapi.gov.ar/trekking-y-actividades-de-montana/" target="_blank" rel="noopener">${tt('Hacer el registro en la web del parque','Register on the park website')}</a></p>`}`}
/* ---- perfil de altura interactivo ----
   Al tocar o pasar el mouse por el perfil se ve el kilómetro, la altura y la pendiente de ese punto,
   y el punto se marca en el mapa (mismo dibujo SVG que las trazas). Con el teclado: flechas, Inicio y Fin. */
const PFD=new Map(); let pfN=0, PM=null;
const pfQuitar=()=>{if(PM)PM.style.display='none'};
const fk=x=>new Intl.NumberFormat(tt('es-AR','en-GB'),{maximumFractionDigits:2}).format(x);
const pfTrazas=new Map();
function pfTraza(t,inv){   // puntos [x,y] del dibujo y su distancia acumulada, en el sentido de la marcha
  const k=t.id+(inv?'r':'f'); if(pfTrazas.has(k))return pfTrazas.get(k);
  const nm=t.d.match(/-?\d+(?:\.\d+)?/g).map(Number),P=[],A=[0];
  for(let i=0;i+1<nm.length;i+=2)P.push([nm[i],nm[i+1]]);
  if(inv)P.reverse();
  for(let i=1;i<P.length;i++)A.push(A[i-1]+Math.hypot(P[i][0]-P[i-1][0],P[i][1]-P[i-1][1]));
  const r={P,A,tot:A[A.length-1]||1};pfTrazas.set(k,r);return r}
function pfPos(segs,f){   // [x,y] del dibujo a la fracción f (0 a 1) del recorrido
  const tot=segs.reduce((m,[t])=>m+t.km,0)||1;let d=f*tot;
  for(let j=0;j<segs.length;j++){const [t,inv]=segs[j];
    if(d<=t.km||j===segs.length-1){
      const z=pfTraza(t,inv),g=Math.max(0,Math.min(1,d/(t.km||1)))*z.tot;let i=1;
      while(i<z.A.length-1&&z.A[i]<g)i++;
      const u=Math.max(0,Math.min(1,(g-z.A[i-1])/((z.A[i]-z.A[i-1])||1)));
      return [z.P[i-1][0]+(z.P[i][0]-z.P[i-1][0])*u,z.P[i-1][1]+(z.P[i][1]-z.P[i-1][1])*u]}
    d-=t.km}
  return null}
function pfTicks(max,n){const raw=max/n,mag=Math.pow(10,Math.floor(Math.log10(raw))),st=[1,2,5,10].map(m=>m*mag).find(x=>x>=raw)||raw,o=[];for(let v=0;v<=max+1e-9;v+=st)o.push(+v.toFixed(4));return o}
function profSvg(z,km,label,segs){
  let lo=Math.min(...z),hi=Math.max(...z);if(hi-lo<20){const m=(hi+lo)/2;lo=m-10;hi=m+10}
  const w=560,h=182,x0=66,x1=546,y0=30,y1=140,id='pf'+(++pfN);
  PFD.set(id,{z,km,segs:(segs||[]).filter(([t])=>t.d),x0,x1,y0,y1,lo,hi});
  const X=i=>x0+(x1-x0)*i/(z.length-1),Y=v=>y1-(y1-y0)*(v-lo)/(hi-lo);
  const pts=z.map((v,i)=>`${X(i).toFixed(1)},${Y(v).toFixed(1)}`).join(' ');
  const F='font-family="Barlow Condensed,Arial Narrow,sans-serif" font-size="20" fill="#5C6E77"';
  const ys=[lo,(lo+hi)/2,hi];
  const xt=pfTicks(km,5).filter(v=>v<=km+1e-9);
  return `<svg class="prof" viewBox="0 0 ${w} ${h}" role="img" tabindex="0" data-pf="${id}" aria-label="${label}. ${tt('Con las flechas del teclado se recorre.','Use the arrow keys to move along it.')}">
    ${ys.map((v,i)=>`<line x1="${x0}" y1="${Y(v).toFixed(1)}" x2="${x1}" y2="${Y(v).toFixed(1)}" stroke="var(--hair)"${i===0?'':' stroke-dasharray="2 4"'}/><text x="${x0-7}" y="${(Y(v)+5).toFixed(1)}" text-anchor="end" ${F}>${num(v)} m</text>`).join('')}
    ${xt.map(v=>{const x=x0+(x1-x0)*v/km;return `<line x1="${x.toFixed(1)}" y1="${y1}" x2="${x.toFixed(1)}" y2="${y1+5}" stroke="#9aa6a3"/><text x="${x.toFixed(1)}" y="${y1+23}" text-anchor="${v===0?'start':(km-v<km/12?'end':'middle')}" ${F}>${fk(v)}${v===xt[xt.length-1]?' km':''}</text>`}).join('')}
    <polygon points="${x0},${y1} ${pts} ${x1},${y1}" fill="var(--g0)" opacity=".14"/><polyline points="${pts}" fill="none" stroke="var(--g0)" stroke-width="2.6" stroke-linejoin="round"/>
    <g class="pf-cur" style="display:none;pointer-events:none"><line y1="${y0-4}" y2="${y1}" stroke="var(--ink)" stroke-width="1.5"/><circle r="5.5" fill="var(--ink)" stroke="#fff" stroke-width="2"/>
      <g class="tip"><rect height="28" fill="var(--ink)" rx="2"/><text x="8" y="20" font-family="Barlow Condensed,Arial Narrow,sans-serif" font-size="21" fill="#fff"></text></g></g></svg>
    <p class="fine pf-hint">${tt('Tocá o pasá el mouse por el perfil para ver la altura y la pendiente de cada punto, que se marca en el mapa.','Touch or hover over the profile to see the elevation and slope at each point, which is marked on the map.')}</p>`}
function pfInit(root){
  root.querySelectorAll('svg.prof[data-pf]').forEach(sv=>{
    const d=PFD.get(sv.dataset.pf); if(!d)return;
    const {z,km,segs,x0,x1,y0,y1,lo,hi}=d, cur=sv.querySelector('.pf-cur'), ln=cur.querySelector('line'), dot=cur.querySelector('circle'),
          tip=cur.querySelector('.tip'), bg=tip.querySelector('rect'), tx=tip.querySelector('text');
    let fAct=0;
    function poner(f){
      fAct=f=Math.max(0,Math.min(1,f));
      const i=f*(z.length-1),a=Math.floor(i),b=Math.min(z.length-1,a+1),alt=z[a]+(z[b]-z[a])*(i-a);
      const k=Math.max(1,Math.round(z.length*.05)),i0=Math.max(0,Math.round(i)-k),i1=Math.min(z.length-1,Math.round(i)+k);
      const dist=(i1-i0)*km*1000/(z.length-1),pend=dist>0?(z[i1]-z[i0])/dist*100:0;
      const x=x0+(x1-x0)*f,y=y1-(y1-y0)*(alt-lo)/(hi-lo);
      cur.style.display='';ln.setAttribute('x1',x);ln.setAttribute('x2',x);dot.setAttribute('cx',x);dot.setAttribute('cy',y);
      tx.textContent=`${fk(km*f)} km · ${num(alt)} m · ${pend<0?'−':'+'}${Math.abs(pend).toFixed(0)} %`;
      const wd=tx.getBBox().width+16;bg.setAttribute('width',wd);
      tip.setAttribute('transform',`translate(${Math.max(x0,Math.min(x1-wd,x-wd/2))},0)`);
      if(svg&&segs.length){const q=pfPos(segs,f);
        if(q){if(!PM){PM=el('g',{class:'pm'},svg.firstChild);el('circle',{r:13,class:'pm-h'},PM);el('circle',{r:6.5,class:'pm-d'},PM)}
          PM.style.display='';PM.style.transform=`translate(${q[0]}px,${q[1]}px) scale(var(--u))`}}}
    const frac=e=>{const r=sv.getBoundingClientRect();return ((e.clientX-r.left)/r.width*560-x0)/(x1-x0)};
    sv.addEventListener('pointerdown',e=>{poner(frac(e))});
    sv.addEventListener('pointermove',e=>{if(e.pointerType!=='mouse'&&!e.buttons&&e.pressure===0)return;poner(frac(e))});
    sv.addEventListener('pointerleave',e=>{if(e.pointerType==='mouse'){cur.style.display='none';pfQuitar()}});
    sv.addEventListener('keydown',e=>{
      const st={ArrowLeft:-.02,ArrowRight:.02,ArrowDown:-.02,ArrowUp:.02,PageDown:-.1,PageUp:.1}[e.key];
      if(st!==undefined){e.preventDefault();poner(fAct+st)}
      else if(e.key==='Home'){e.preventDefault();poner(0)} else if(e.key==='End'){e.preventDefault();poner(1)}
      else if(e.key==='Escape'){cur.style.display='none';pfQuitar()}});
    sv.addEventListener('blur',()=>{cur.style.display='none';pfQuitar()});
  })}
function bigNums(km,up,dn){return `<div class="big"><div><b>${f1(km)} km</b><span>${tt('distancia','distance')}</span></div><div><b>${Math.round(up)>0?'+':''}${num(up)} m</b><span>${tt('subida','ascent')}</span></div><div><b>${Math.round(dn)>0?'−':''}${num(dn)} m</b><span>${tt('bajada','descent')}</span></div></div>`}
function rows(pares,vacio){return pares.map(([k,v])=>`<div class="row${v&&v.length>46?' long':''}"><span class="k">${k}</span>${v?`<span class="v">${esc(v)}</span>`:`<span class="v soft">${vacio} <b class="mk pe">○</b></span>`}</div>`).join('')}
function subt(t){return [t.via?tt('por ','via ')+esc(t.via):'',t.rt?tt('ida y vuelta','round trip'):''].filter(Boolean).join(', ')}
function home(){
  pin.innerHTML=`
  <p class="kind">${tt('Para empezar','Getting started')}</p>
  <h1 class="t">${tt('Tocá un tramo o un refugio','Tap a trail or a hut')}</h1>
  <p style="margin:10px 0 0">${tt('Cada línea de color es un tramo entre dos puntos, dibujado sobre su traza. El color dice la dificultad del tramo. Con los filtros de arriba podés mostrar solo los tramos que te sirven: los demás quedan atenuados.','Each colored line is a trail between two points, drawn on its track. The color shows the difficulty. With the filters above you can show only the trails that suit you: the others are dimmed.')}</p>
  <div class="blk"><h2>${tt('Cómo leer el mapa','How to read the map')}</h2>
    <div class="leg">
      ${swatch('g1',34)}<span>${G.g1.l}</span>
      ${swatch('g2',34)}<span>${G.g2.l}</span>
      ${swatch('g3',34)}<span>${G.g3.l}</span>
      <svg width="34" height="10" viewBox="0 0 34 10"><line x1="3" y1="5" x2="31" y2="5" stroke="#6B4A2B" stroke-width="1.6" stroke-dasharray="1.5 4" stroke-linecap="round"/></svg><span>${tt('Otros senderos, todavía sin ficha','Other trails, no detail page yet')}</span>
    </div>
    <div class="leg sym">
      <svg width="34" height="16" viewBox="-17 -8 34 16"><path d="M0,-7 L7,6 L-7,6 Z" fill="#4A3A28" stroke="#fff" stroke-width="1.5"/></svg><span>${tt('Cumbre','Summit')}</span>
      <svg width="34" height="16" viewBox="-17 -8 34 16"><rect x="-6" y="-6" width="12" height="12" fill="var(--ink)" stroke="#fff" stroke-width="1.5"/></svg><span>${tt('Refugio','Hut')}</span>
      <svg width="34" height="16" viewBox="-17 -8 34 16"><circle r="5.6" fill="#fff" stroke="var(--ink)" stroke-width="2.2"/></svg><span>${tt('Acceso o punto de paso','Trailhead or waypoint')}</span>
      <svg width="34" height="16" viewBox="-17 -8 34 16"><circle r="5" fill="#BFD5DD" stroke="var(--waterink)" stroke-width="2"/></svg><span>${tt('Laguna','Lake')}</span>
    </div>
    <p class="fine" style="margin-top:8px">${tt('Al acercar el mapa aparecen más nombres.','More names appear as you zoom in.')}</p>
  </div>
  <div class="blk"><h2>${tt('Qué tiene y qué no tiene esta versión','What this version has and lacks')}</h2>
    <p>${tt(`Tiene ${Tn.length} tramos sobre un mapa real. Distancia, desnivel y perfil salen de la traza de OpenStreetMap y del modelo de alturas.`,`It has ${Tn.length} trails on a real map. Distance, elevation and profile come from the OpenStreetMap track and the elevation model.`)}</p>
    <p>${tt('La dificultad viene del Anexo I de la Disposición 150/19 del parque, temporada de noviembre a abril. Cada tramo toma la dificultad más baja de las sendas oficiales que lo recorren.','Difficulty comes from Annex I of the park Disposición 150/19, for the November to April season. Each trail takes the lowest difficulty of the official trails that run along it.')}</p>
    <p>${tt('Ninguna traza está verificada en el terreno todavía. Agua, vadeos y sombra siguen pendientes.','No track has been verified on the ground yet. Water, river crossings and shade are still pending.')}</p>
    <p>${tt('Quedaron afuera las sendas oficiales que no tienen traza en OpenStreetMap, como las bajadas por el arroyo Fresco al lago Mascardi, el refugio Velco, el lago Fonck y la mayor parte de isla Victoria. La travesía glaciaria entre Meiling y Refugio Viejo figura como línea recta.','Official trails with no track in OpenStreetMap are left out, such as the descents along arroyo Fresco to Lake Mascardi, Velco hut, Lake Fonck and most of Isla Victoria. The glacier route between Meiling and Refugio Viejo appears as a straight line.')}</p>
  </div>`;
  pin.querySelectorAll('[data-v]').forEach(b=>b.onclick=()=>go('v',b.dataset.v));
}
/* ---- información de las sendas oficiales (datos/sendas.js) ---- */
const DIFL={'Baja':['Baja','Low'],'Media':['Media','Medium'],'Alta':['Alta','High'],'Muy Alta':['Muy alta','Very high'],'Extrema':['Extrema','Extreme']};
const difN=d=>{const x=DIFL[d];return x?tt(x[0],x[1]):d};
const sendaEt=s=>/^\d/.test(s.id)?tt('Senda ','Trail ')+esc(s.id):tt('Sendero municipal','Municipal trail');
function sendaBox(s,conDesc,abierta){
  const dif=s.dificultad?difN(s.dificultad)+(fv(s,'temporada')?` (${esc(fv(s,'temporada'))})`:'')
    +(s.dificultad_otra?` · ${difN(s.dificultad_otra)}${fv(s,'temporada_otra')?` (${esc(fv(s,'temporada_otra'))})`:''}`:''):'';
  const prec=LANG==='en'&&s.precauciones_en.length?s.precauciones_en:s.precauciones, serv=fv(s,'servicios'), desc=fv(s,'descripcion');
  const ok=/^https:\/\//.test(s.fuente);
  return `<details class="sd"${abierta?' open':''}><summary><b>${sendaEt(s)}</b>${s.nombre?' · '+esc(s.nombre):''}</summary><div class="sdb">
    ${dif?`<div class="row"><span class="k">${tt('Dificultad','Difficulty')}</span><span class="v">${dif}</span></div>`:''}
    ${s.registro?`<div class="row"><span class="k">${tt('Registro de trekking','Trekking registration')}</span><span class="v">${s.registro==='obligatorio'?tt('Obligatorio y gratuito','Mandatory and free'):tt('No hace falta','Not required')}</span></div>`:''}
    ${serv?`<h3>${tt('Servicios','Services')}</h3><p>${esc(serv)}</p>`:''}
    ${prec.length?`<h3>${tt('Precauciones','Precautions')}</h3><ul class="prec">${prec.map(x=>`<li>${esc(x)}</li>`).join('')}</ul>`:''}
    ${conDesc&&desc?`<h3>${tt('Cómo es','What it is like')}</h3><p>${esc(desc)}</p>`:''}
    <p class="fine">${tt('Fuente: ','Source: ')}${ok?`<a href="${esc(s.fuente)}" target="_blank" rel="noopener">Bariloche Trekking</a>`:'Bariloche Trekking'} ${tt('(Club Andino Bariloche y Parques Nacionales). Texto reescrito.','(Club Andino Bariloche and National Parks). Text reworded.')}</p>
  </div></details>`}
function tramo(id){
  const t=tById[id], db=t.db;
  REGCTX=FORMREG?{nombre:tName(t),cand:regCandidatos(t.regHall.map(h=>h.n))}:null;
  const sds=SD.get(id)||[], own=fv(db,'descripcion'), prest=!own&&sds.length===1&&sds[0].tramos.length===1?fv(sds[0],'descripcion'):'', dsc=own||prest;
  const A=rev?t.b:t.a,B=rev?t.a:t.b;
  const sen=t.sen.length?`<div class="sendas">${t.sen.map(s=>`<span>${s}</span>`).join('')}${t.nsen>t.sen.length?`<em>${tt('y','and')} ${t.nsen-t.sen.length} ${tt('más','more')}</em>`:''}</div>`:'';
  const tvs=TV.filter(v=>v.t.includes(id));
  let geo='';
  if(t.src==='none'){
    geo=`<div class="blk"><h2>${tt('Recorrido','Route')}</h2><span class="stamp no">${tt('Sin traza','No track')}</span><p style="margin-top:7px">${tt('Es una ruta sobre glaciar que no tiene sendero marcado. La línea recta del mapa solo muestra que los dos refugios se conectan.','This is a glacier route with no marked trail. The straight line on the map only shows that the two huts are connected.')}</p></div>`;
  }else{
    const up=rev&&!t.rt?t.dn:t.up, dn=rev&&!t.rt?t.up:t.dn, z=rev&&!t.rt?[...t.prof].reverse():t.prof;
    geo=`<div class="blk"><h2><span>${t.rt?tt('Ida y vuelta','Round trip'):`${tt('De','From')} ${kn(N[A])} ${tt('a','to')} ${kn(N[B])}`}</span>${t.rt?'':`<button id="rv">${tt('Ver al revés','Reverse direction')}</button>`}</h2>
      ${bigNums(t.km,up,dn)}
      <div style="margin-top:10px">${profSvg(z,t.km,tt('Perfil de altura del tramo','Elevation profile of the trail'),[[t,rev&&!t.rt]])}</div>
      <button type="button" class="gpx" id="gpx">${tt('Descargar GPX','Download GPX')}</button>
      <div class="row" style="margin-top:6px"><span class="k">${tt('Altura mínima y máxima','Lowest and highest point')}</span><span class="v">${num(t.zmin)} ${tt('a','to')} ${num(t.zmax)} m</span></div>
      ${db.agua||db.vadeos||db.sombra?rows([[tt('Agua','Water'),fv(db,'agua')],[tt('Vadeos','River crossings'),fv(db,'vadeos')],[tt('Sombra','Shade'),fv(db,'sombra')]],tt('a relevar','to be surveyed'))
        :`<div class="row"><span class="k">${tt('Agua, vadeos y sombra','Water, river crossings and shade')}</span><span class="v soft">${tt('a relevar','to be surveyed')} <b class="mk pe">○</b></span></div>`}
    </div>
    <div class="blk"><h2>${tt('Origen de la traza','Source of the track')}</h2>${t.src==='gpx'
      ?`<span class="stamp">${tt('Track de terceros, Wikiloc','Third-party track, Wikiloc')}</span><p style="margin-top:7px">${tt('Distancia y desnivel medidos sobre el track. Todavía no cuenta como sendero verificado.','Distance and elevation measured on the track. It does not count as a verified trail yet.')}</p>`
      :`<span class="stamp">${tt('OpenStreetMap, sin verificar','OpenStreetMap, not verified')}</span><p style="margin-top:7px">${tt('La traza la cargaron voluntarios y puede tener errores o estar desactualizada. Se reemplaza cuando haya un track propio.','The track was entered by volunteers and may contain errors or be out of date. It is replaced when we have our own track.')}</p>`}</div>`;
  }
  pin.innerHTML=`
  <p class="kind">${tt('Tramo','Trail')}${t.ha?tt(', parte de la Huella Andina',', part of the Huella Andina'):''}</p>
  <h1 class="t">${esc(tName(t))}</h1>
  ${subt(t)?`<p class="subt">${subt(t)}</p>`:''}
  ${t.st?`<p class="fine" style="margin-top:6px"><b>${tt('Este tramo solo se recorre como parte de una travesía.','This trail is only walked as part of a multi-day route.')}</b></p>`:''}
  <div class="blk"><h2>${tt('Estado en el registro del Parque','Status in the Park registry')}</h2>${estBox(t)}</div>
  <div class="blk"><h2>${tt('Dificultad','Difficulty')}</h2>${difBox(t.g, esc(LANG==='en'&&t.db.nota_dificultad_en?t.db.nota_dificultad_en:t.nota)|| (t.ed?(t.muni?tt('Es ','It is ')+esc(t.muni)+tt(', no figura en el listado de la APN.',', not in the APN list.'):tt('No figura en el listado de la APN.','Not in the APN list.')):''))}
    <div style="margin-top:9px">${regBlock(t.reg,true)}</div>
  </div>
  ${geo}
  <div class="blk"><h2>${tt('Cómo es','What it is like')}</h2>${dsc?`<p>${esc(dsc)}</p>${LANG==='en'&&!db.descripcion_en&&!prest?'<p class="fine">(Description in Spanish only.)</p>':''}${db.descripcion_verificada?'':`<p class="pend" style="font-size:15px">${tt('Descripción provisoria, sin verificar en el terreno.','Provisional description, not verified on the ground.')}</p>`}`:`<p class="pend">${tt('Pendiente de escribir.','Still to be written.')}</p>`}</div>
  ${sds.length?`<div class="blk"><h2>${sds.length===1?tt('Información de la senda oficial','Official trail information'):tt('Información de las sendas oficiales','Official trails information')}</h2>${sds.map(x=>sendaBox(x,!prest||sds.length>1,sds.length===1)).join('')}</div>`:''}
  ${t.ed||!sen?'':`<div class="blk"><h2>${tt('Sendas oficiales que lo incluyen','Official trails that include it')}</h2>${sen}</div>`}
  ${tvs.length?`<div class="blk"><h2>${tt('Travesías que pasan por acá','Multi-day routes through here')}</h2><ul class="list">${tvs.map(v=>`<li><button data-v="${v.id}"><span><span class="nm">${tvN(v)}</span><span class="ds">${tvS(v)}</span></span><span class="sws">${swatch(tvG(v))}</span></button></li>`).join('')}</ul></div>`:''}
  ${INFO()}`;
  wire(); const r=$('#rv'); if(r)r.onclick=()=>{rev=!rev;tramo(id);guardarUrl()};
  const g=$('#gpx'); if(g)g.onclick=()=>gpxTramo(t,rev);
}
function nodo(id){
  const n=N[id], db=n.db; const ts=T.filter(t=>(t.a===id||t.b===id)&&!t.st);
  const kind=tipoN(n.t);
  pin.innerHTML=`
  <p class="kind">${kind}</p>
  <h1 class="t">${esc(n.n)}</h1>
  <p class="subt">${n.s&&!/\d/.test(n.s)?esc(n.s)+', ':''}${num(n.ele)} m</p>
  ${db.descripcion?`<div class="blk"><p>${esc(fv(db,'descripcion'))}</p></div>`:''}
  ${n.t==='ref'?`<div class="blk"><h2>${tt('El refugio','The hut')}</h2>${[db.capacidad,db.reserva,db.que_se_compra,db.agua,db.acampe,db.si_esta_lleno].some(Boolean)
    ?rows([[tt('Capacidad','Capacity'),fv(db,'capacidad')],[tt('Reserva','Booking'),fv(db,'reserva')],[tt('Qué se puede comprar','What you can buy'),fv(db,'que_se_compra')],[tt('Agua','Water'),fv(db,'agua')],[tt('Dónde se acampa','Where to camp'),fv(db,'acampe')],[tt('Si llegás y está lleno','If you arrive and it is full'),fv(db,'si_esta_lleno')]],tt('a relevar','to be surveyed'))
    :`<p class="pend">${tt('Pendiente: capacidad, si hay que reservar, qué se puede comprar, agua, dónde se acampa y qué pasa si llegás y está lleno.','Pending: capacity, whether you must book, what you can buy, water, where to camp and what happens if you arrive and it is full.')}</p>`}</div>`:''}
  ${n.t==='acc'?`<div class="blk"><h2>${tt('Cómo llegar','How to get there')}</h2>${[db.colectivo,db.parada,db.frecuencia,db.ultimo_regreso,db.estacionamiento].some(Boolean)
    ?rows([[tt('Colectivo','Bus'),fv(db,'colectivo')],[tt('Parada','Bus stop'),fv(db,'parada')],[tt('Frecuencia','Frequency'),fv(db,'frecuencia')],[tt('Último horario de vuelta','Last bus back'),fv(db,'ultimo_regreso')],[tt('Dónde dejar el auto','Where to park'),fv(db,'estacionamiento')]],tt('a relevar','to be surveyed'))
    :`<p class="pend">${tt('Pendiente: colectivo, parada, frecuencia, último horario de vuelta y dónde dejar el auto.','Pending: bus, bus stop, frequency, last bus back and where to park.')}</p>`}</div>`:''}
  <div class="blk"><h2>${tt('Tramos que salen de acá','Trails starting here')}</h2>
    <ul class="list">${ts.map(t=>{const o=t.a===id?t.b:t.a;const up=t.a===id?t.up:t.dn;return `<li><button data-t="${t.id}" data-rev="${t.a===id?0:1}"><span><span class="nm">${tt('a','to')} ${kn(N[o])}</span><span class="ds">${t.src==='none'?tt('ruta glaciaria, sin traza','glacier route, no track'):`${f1(t.km)} km, +${num(up)} m${t.via?tt(', por ',', via ')+esc(t.via):''}`}</span></span><span class="sws">${swatch(t.g)}</span></button></li>`}).join('')}</ul>
  </div>
  ${INFO()}`;
  wire();
}
function travesia(id){
  const v=TV.find(x=>x.id===id); const g=tvG(v); const O=orient(v);
  REGCTX=FORMREG?{nombre:tvN(v),cand:regCandidatos(v.t.flatMap(i=>tById[i].regHall.map(h=>h.n)),'Travesía')}:null;
  let km=0,up=0,dn=0,z=[];
  O.forEach(([t,a])=>{if(t.src==='none')return;const f=t.a===a;km+=t.km;up+=f?t.up:t.dn;dn+=f?t.dn:t.up;const p=f?t.prof:[...t.prof].reverse();const k=Math.max(4,Math.round(t.km*4));for(let i=0;i<k;i++)z.push(p[Math.round(i*(p.length-1)/(k-1))])});
  const crit=v.t.map(i=>tById[i]).filter(t=>t.g===g);
  const note=crit.length===v.t.length?tt('Todos los tramos tienen esta dificultad.','All trails have this difficulty.'):`${tt('La define el tramo más exigente:','Set by the hardest trail:')} ${crit.map(t=>esc(tName(t))).join(tt(' y ',' and '))}.`;
  pin.innerHTML=`
  <p class="kind">${tt('Travesía','Multi-day route')}${v.sen?tt(', senda oficial ',', official trail ')+v.sen+' <b class="mk of">■</b>':''}</p>
  <h1 class="t">${esc(tvN(v))}</h1>
  <p class="subt">${esc(tvS(v))}</p>
  <div class="blk"><h2>${tt('Dificultad','Difficulty')}</h2>${difBox(g,note)}<div style="margin-top:9px">${regBlock('obligatorio',true)}</div></div>
  <div class="blk"><h2>${tt('El recorrido completo','The whole route')}</h2>${bigNums(km,up,dn)}<div style="margin-top:10px">${profSvg(z,km,tt('Perfil de altura de la travesía','Elevation profile of the route'),O.filter(([t])=>t.src!=='none'&&t.d).map(([t,a])=>[t,t.a!==a]))}</div>
    <button type="button" class="gpx" id="gpxv">${tt('Descargar GPX de la travesía','Download route GPX')}</button></div>
  ${v.dd.map((d,n)=>`<div class="blk"><h2>${tt('Día','Day')} ${n+1}</h2>
    <p class="subt" style="margin:0 0 8px">${esc(kn(N[d.from]))} ${tt('a','to')} ${esc(kn(N[d.to]))}</p>
    ${bigNums(d.km,d.up,d.dn)}
    <ul class="list" style="margin-top:8px">${d.O.map(([t,a,b])=>{const f=t.a===a;return `<li><button data-t="${t.id}" data-rev="${f?0:1}"><span><span class="nm">${kn(N[a])} ${tt('a','to')} ${kn(N[b])}</span><span class="ds">${t.src==='none'?tt('ruta glaciaria, sin traza','glacier route, no track'):`${f1(t.km)} km, +${num(f?t.up:t.dn)} m, −${num(f?t.dn:t.up)} m`} · ${EST[t.hab]}</span></span><span class="sws">${swatch(t.g)}</span></button></li>`}).join('')}</ul>
    ${d.O.map(([t])=>fv(t.db,'descripcion')?`<p class="fine">${esc(fv(t.db,'descripcion'))}</p>`:'').join('')}
  </div>`).join('')}
  <div class="blk"><h2>${tt('Lo propio de la travesía','About the route')}</h2>
    ${rows([[tt('Días','Days'),v.nd+' '+(v.nd===1?tt('día','day'):tt('días','days'))]],'')}
    ${rows([[tt('Dónde se duerme','Where to sleep'),fv(v.db,'donde_dormir')]],tt('a definir','to be defined'))}
    ${rows([[tt('Salidas de escape','Escape routes'),fv(v.db,'salidas_de_escape')],[tt('Cómo volver','Getting back'),fv(v.db,'como_volver')]],tt('a relevar','to be surveyed'))}
  </div>
  ${INFO()}`;
  wire(); $('#gpxv').onclick=()=>gpxTv(v);
}
function wire(){
  pfInit(pin);
  pin.querySelectorAll('[data-reg]').forEach(b=>b.onclick=abrirRegistro);
  const b=$('#bk'); if(b)b.onclick=()=>go(null);
  pin.querySelectorAll('[data-t]').forEach(b=>b.onclick=()=>{rev=b.dataset.rev==='1';go('t',b.dataset.t,true)});
  pin.querySelectorAll('[data-v]').forEach(b=>b.onclick=()=>go('v',b.dataset.v));
}
function go(k,id,keepRev,desde){
  pfQuitar();
  if(!keepRev)rev=false;
  sel=k?[k,id]:null;
  if(!k){pin=pinHome;home();dr.hidden=true;mapwrap.classList.remove('dr-open')}
  else{pin=drBody;(k==='t'?tramo:k==='n'?nodo:travesia)(id);dr.hidden=false;mapwrap.classList.add('dr-open');dr.scrollTop=0;if(desde!=='mapa')mostrarSel(k!=='n')}
  paint(); guardarUrl();
}
$('#drx').onclick=()=>go(null);
$('#drlink').onclick=()=>{const u=urlActual();
  (navigator.clipboard?navigator.clipboard.writeText(u):Promise.reject()).then(()=>hint(tt('Enlace copiado','Link copied'),1200),()=>{try{prompt(tt('Copiá el enlace:','Copy the link:'),u)}catch(e){}})};

/* ================= PAN / ZOOM ================= */
/* Mapa real (Leaflet) debajo; el dibujo de trazas, símbolos y nombres sigue siendo este SVG,
   que se acomoda a lo que muestra el mapa (cada punto del dibujo tiene su latitud y longitud). */
const S_PX=2388;   // píxeles del dibujo por grado
const mercDeg=l=>Math.log(Math.tan(Math.PI/4+l*Math.PI/360))*180/Math.PI;
const latDeMerc=m=>(2*Math.atan(Math.exp(m*Math.PI/180))-Math.PI/2)*180/Math.PI;
const LON_C=-71.601, MERC_C=(mercDeg(-40.412)+mercDeg(-41.607))/2;
const imgLat=(x,y)=>[latDeMerc(MERC_C-(y-H/2)/S_PX),LON_C+(x-W/2)/S_PX];   // [latitud, longitud] de un punto del dibujo
const imgLL=(x,y)=>L.latLng(...imgLat(x,y));
const llImg=(lat,lon)=>({x:W/2+(lon-LON_C)*S_PX,y:H/2-(mercDeg(lat)-MERC_C)*S_PX});
/* límites: al oeste, la frontera con Chile; al este, 50 km después del último sendero (la vista inicial deja 5 km) */
const nx=Object.values(N).map(n=>n.x), ny=Object.values(N).map(n=>n.y);
const KM5=5000/D.mpp;
const VISTA=[Math.min(...nx)-50,Math.min(...ny)-60,Math.max(...nx)+KM5,Math.max(...ny)+60];
const LIMITES=typeof L!=='undefined'?L.latLngBounds(L.latLng(-41.72,-72.05),imgLL(Math.max(...nx)+50000/D.mpp,VISTA[1]-120)):null;
const CLAVE=typeof MAPA_CLAVE_MAPTILER==='string'?MAPA_CLAVE_MAPTILER.trim():'';
/* ---- enlace compartible: los filtros, la ficha elegida, la capa y la vista quedan en la dirección (#...) ---- */
const HASH=(()=>{try{return new URLSearchParams(location.hash.slice(1))}catch(e){return new URLSearchParams()}})();
FILT.forEach(f=>{const v=HASH.get(f.id);if(v==null||(f.id==='zona'&&ZONAS.length<2))return;   // las zonas llegan con la planilla: se aplica entonces
 
  const ok=v==='-'?[]:v.split('~').map(x=>f.op.find(o=>String(o[0])===x)).filter(Boolean).map(o=>o[0]);
  if(f.uno){if(ok.length)SEL[f.id]=new Set([ok[0]])}else SEL[f.id]=new Set(ok)});
let urlT=0;
function urlActual(){
  const p=[],add=(k,v)=>p.push(k+'='+encodeURIComponent(v));
  FILT.forEach(f=>{const s=SEL[f.id],d=new Set(DEF[f.id]||f.op.map(o=>o[0]));if(s.size!==d.size||[...s].some(x=>!d.has(x)))add(f.id,[...s].join('~')||'-')});
  if(sel){add('s',sel[0]+'.'+sel[1]);if(rev)add('rev','1')}
  if(capaAct!=='topo')add('c',capaAct);
  if(LANG==='en')add('lang','en');
  if(map){const c=map.getCenter();add('v',c.lat.toFixed(4)+','+c.lng.toFixed(4)+','+map.getZoom().toFixed(1))}
  return location.href.split('#')[0]+(p.length?'#'+p.join('&'):'')}
function guardarUrl(){clearTimeout(urlT);urlT=setTimeout(()=>{try{history.replaceState(null,'',urlActual())}catch(e){}},300)}
/* ---- capas del mapa ---- */
const CAPAS={
  topo:{k:'https://api.maptiler.com/maps/outdoor-v2/256/{z}/{x}/{y}.png?key=',f:'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}',ck:'© MapTiler © OpenStreetMap',cf:'Esri, USGS, NPS, © colaboradores de OpenStreetMap',cfe:'Esri, USGS, NPS, © OpenStreetMap contributors'},
  sat:{k:'https://api.maptiler.com/maps/hybrid/256/{z}/{x}/{y}.jpg?key=',f:'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',ck:'© MapTiler © Maxar © OpenStreetMap',cf:'imágenes © Esri, Maxar, Earthstar Geographics',cfe:'imagery © Esri, Maxar, Earthstar Geographics'}
};
let capaAct=CAPAS[HASH.get('c')]?HASH.get('c'):(()=>{try{const c=localStorage.getItem('pt.capa');return CAPAS[c]?c:'topo'}catch(e){return 'topo'}})(), capaLyr=null;
/* Capa de baldosas que no pide las que caen enteras del lado chileno (frontera en geo/frontera.js): ahorra datos. */
const CapaSinChile=LIMITES?L.TileLayer.extend({_isValidTile(c){
  if(!L.TileLayer.prototype._isValidTile.call(this,c))return false;
  if(typeof FRONTERA==='undefined')return true;
  const b=this._tileCoordsToBounds(c),F=FRONTERA,L0=F.lon.length-1;
  const i0=Math.max(0,Math.floor((b.getSouth()-F.lat0)/F.paso)-1),i1=Math.min(L0,Math.floor((b.getNorth()-F.lat0)/F.paso)+1);
  let w=0;for(let i=i0;i<=i1;i++)w=Math.min(w,F.lon[i]);
  return b.getEast()>w-0.01}}):null;
let map=null;
if(LIMITES){
  map=L.map('basemap',{zoomControl:false,attributionControl:false,dragging:false,touchZoom:false,scrollWheelZoom:false,doubleClickZoom:false,boxZoom:false,keyboard:false,
    zoomSnap:0,zoomAnimation:false,fadeAnimation:false,markerZoomAnimation:false,inertia:false,maxBoundsViscosity:1,maxZoom:17,center:[-41.1,-71.5],zoom:9});
  map.setMaxBounds(LIMITES); map.setMinZoom(map.getBoundsZoom(LIMITES));
  map.on('move zoom resize',()=>apply());
  map.on('moveend',guardarUrl);
}else{$('.attr').textContent=tt('No se pudo cargar el mapa base. Senderos: © colaboradores de OpenStreetMap (noviembre de 2026).','The base map could not be loaded. Trails: © OpenStreetMap contributors (November 2026).');$('#capas').hidden=true;$('#zloc').hidden=true}
function credito(){const d=CAPAS[capaAct];$('.attr').innerHTML=tt('Mapa base: ','Base map: ')+(CLAVE?d.ck:tt(d.cf,d.cfe||d.cf))+tt('. Senderos: © colaboradores de OpenStreetMap (noviembre de 2026).','. Trails: © OpenStreetMap contributors (November 2026).')}
function ponerCapa(c){
  if(!map)return; capaAct=c; const d=CAPAS[c];
  if(capaLyr)map.removeLayer(capaLyr);
  capaLyr=new CapaSinChile(CLAVE?d.k+encodeURIComponent(CLAVE):d.f,{maxZoom:17,maxNativeZoom:17}).addTo(map);
  credito();
  document.querySelectorAll('#capas button').forEach(b=>{const on=b.dataset.c===c;b.classList.toggle('on',on);b.setAttribute('aria-pressed',on)});
  try{localStorage.setItem('pt.capa',c)}catch(e){}
  guardarUrl()}
document.querySelectorAll('#capas button').forEach(b=>b.onclick=()=>ponerCapa(b.dataset.c));
ponerCapa(capaAct);
let vb={x:0,y:0,w:W,h:H}, moved=false, fitW=W;
function fit(){
  if(map){map.fitBounds(L.latLngBounds(imgLL(VISTA[0],VISTA[3]),imgLL(VISTA[2],VISTA[1])),{animate:false,padding:[8,8]});apply();fitW=vb.w}
  apply()}
function apply(){
  const r=svg.getBoundingClientRect(); if(!r.width)return;
  if(map){
    const z=map.getZoom(),p0=map.project(imgLL(0,0),z),p1=map.project(imgLL(W,H),z),k=(p1.x-p0.x)/W,pb=map.getPixelBounds();
    vb={x:(pb.min.x-p0.x)/k,y:(pb.min.y-p0.y)/k,w:(pb.max.x-pb.min.x)/k,h:(pb.max.y-pb.min.y)/k};
  }else{const a=r.width/r.height,w=Math.max(W,H*a);vb={x:(W-w)/2,y:(H-w/a)/2,w,h:w/a};fitW=w}
  svg.setAttribute('viewBox',`${vb.x} ${vb.y} ${vb.w} ${vb.h}`);
  const u=vb.w/r.width; svg.style.setProperty('--u',u);
  const zf=fitW/vb.w; svg.dataset.z=zf<1.6?1:zf<3?2:3;
  const mpp=D.mpp*u; const opts=[.1,.2,.5,1,2,5,10]; let km=opts[0]; for(const o of opts){if(o*1000/mpp<=130)km=o}
  ordenarEtiquetas();
  const sc=$('#scale'); sc.querySelector('span').textContent=(km<1?km*1000+' m':km+' km'); sc.querySelector('i').style.width=(km*1000/mpp)+'px';
}
function pt(ev){const r=svg.getBoundingClientRect();const s=vb.w/r.width;return {x:vb.x+(ev.clientX-r.left)*s,y:vb.y+(ev.clientY-r.top)*s,s}}
function zoom(f,cx,cy){
  if(!map)return; const r=svg.getBoundingClientRect();
  cx=cx??vb.x+vb.w/2;cy=cy??vb.y+vb.h/2;
  map.setZoomAround(L.point((cx-vb.x)/vb.w*r.width,(cy-vb.y)/vb.h*r.height),map.getZoom()-Math.log2(f),{animate:false})}
/* Zoom solo con Ctrl + rueda (o pellizco en el trackpad). Sin Ctrl la rueda sigue bajando la página. */
const hintEl=el0('div','maphint');$('#mapwrap').appendChild(hintEl);
let hintT=0;
function hint(txt,ms=1500){hintEl.textContent=txt;hintEl.classList.add('on');clearTimeout(hintT);hintT=setTimeout(()=>hintEl.classList.remove('on'),ms)}
function el0(t,c){const e=document.createElement(t);e.className=c;e.setAttribute('role','status');return e}
svg.addEventListener('wheel',ev=>{
  if(!(ev.ctrlKey||ev.metaKey)){hint(tt('Usá Ctrl + rueda del mouse para hacer zoom en el mapa','Use Ctrl + mouse wheel to zoom the map'));return}
  ev.preventDefault();const p=pt(ev);zoom(ev.deltaY>0?1.2:1/1.2,p.x,p.y)},{passive:false});
/* Celular: un dedo baja la página, dos dedos mueven y acercan el mapa. */
svg.addEventListener('touchmove',ev=>{if(ev.touches.length>=2)ev.preventDefault();else hint(tt('Usá dos dedos para mover el mapa','Use two fingers to move the map'))},{passive:false});
const ptrs=new Map(); let last=null, pinch=0, mid=null;
svg.addEventListener('pointerdown',ev=>{ptrs.set(ev.pointerId,ev);last={x:ev.clientX,y:ev.clientY};moved=false;
  if(ptrs.size===2){const [a,b]=[...ptrs.values()];pinch=Math.hypot(a.clientX-b.clientX,a.clientY-b.clientY)}});
svg.addEventListener('pointermove',ev=>{
  if(!ptrs.has(ev.pointerId))return; ptrs.set(ev.pointerId,ev);
  if(ptrs.size===1&&last&&ev.pointerType!=='touch'){const dx=ev.clientX-last.x,dy=ev.clientY-last.y;
    if(Math.abs(dx)+Math.abs(dy)>4||moved){ if(!moved){moved=true;svg.classList.add('drag');try{svg.setPointerCapture(ev.pointerId)}catch(e){}}
      if(map)map.panBy([-dx,-dy],{animate:false}); last={x:ev.clientX,y:ev.clientY}; }}
  else if(ptrs.size===2){const [a,b]=[...ptrs.values()];const d=Math.hypot(a.clientX-b.clientX,a.clientY-b.clientY);
    const mx=(a.clientX+b.clientX)/2,my=(a.clientY+b.clientY)/2;
    if(pinch){if(mid&&map)map.panBy([-(mx-mid.x),-(my-mid.y)],{animate:false});
      const m=pt({clientX:mx,clientY:my});zoom(pinch/d,m.x,m.y);moved=true}pinch=d;mid={x:mx,y:my}}
});
const up=ev=>{ptrs.delete(ev.pointerId);svg.classList.remove('drag');if(ptrs.size<2){pinch=0;mid=null}setTimeout(()=>{moved=false},0)};
svg.addEventListener('pointerup',up);svg.addEventListener('pointercancel',up);
svg.addEventListener('click',()=>{if(!moved&&sel)go(null)});
$('#zin').onclick=()=>zoom(1/1.5);$('#zout').onclick=()=>zoom(1.5);$('#zre').onclick=fit;
document.addEventListener('keydown',ev=>{if(ev.key==='Escape'&&sel)go(null)});
window.addEventListener('resize',()=>{if(map)map.invalidateSize({animate:false});apply()});

/* ================= ENCUADRE: elegir algo, o cambiar filtros ================= */
function bbT(t){
  if(t._bb)return t._bb;
  let x0=1e9,y0=1e9,x1=-1e9,y1=-1e9;
  const nm=typeof t.d==='string'?t.d.match(/-?\d+(?:\.\d+)?/g):null;
  if(nm){for(let i=0;i+1<nm.length;i+=2){const x=+nm[i],y=+nm[i+1];x0=Math.min(x0,x);x1=Math.max(x1,x);y0=Math.min(y0,y);y1=Math.max(y1,y)}}
  else[N[t.a],N[t.b]].forEach(n=>{x0=Math.min(x0,n.x);x1=Math.max(x1,n.x);y0=Math.min(y0,n.y);y1=Math.max(y1,n.y)});
  return t._bb=[x0,y0,x1,y1]}
const unir=bs=>bs.reduce((a,b)=>[Math.min(a[0],b[0]),Math.min(a[1],b[1]),Math.max(a[2],b[2]),Math.max(a[3],b[3])],[1e9,1e9,-1e9,-1e9]);
/* cuánto del mapa tapa la ficha: a la derecha en pantalla ancha, abajo en el celular */
function ocupa(){
  if(dr.hidden)return {r:0,b:0};
  const m=svg.getBoundingClientRect(),d=dr.getBoundingClientRect();
  return getComputedStyle(dr).position==='absolute'?{r:Math.max(0,m.right-d.left),b:0}:{r:0,b:Math.max(0,m.bottom-d.top)}}
function enfocar(bb,maxZoom,libre){
  if(!map)return; const o=libre?ocupa():{r:0,b:0};
  map.fitBounds(L.latLngBounds(imgLL(bb[0],bb[3]),imgLL(bb[2],bb[1])),{animate:false,paddingTopLeft:[30,30],paddingBottomRight:[30+o.r,30+o.b],maxZoom})}
/* al elegir algo: si no se ve entero (o queda bajo la ficha), el mapa se acomoda para mostrarlo */
function mostrarSel(forzar){
  if(!map||!sel)return;
  const bb=sel[0]==='t'?bbT(tById[sel[1]]):sel[0]==='n'?[N[sel[1]].x,N[sel[1]].y,N[sel[1]].x,N[sel[1]].y]:unir(TV.find(v=>v.id===sel[1]).t.map(i=>bbT(tById[i])));
  const r=svg.getBoundingClientRect(),o=ocupa(),k=r.width/vb.w;
  const dentro=(bb[0]-vb.x)*k>=20&&(bb[1]-vb.y)*k>=20&&(bb[2]-vb.x)*k<=r.width-o.r-20&&(bb[3]-vb.y)*k<=r.height-o.b-20;
  if(forzar||!dentro)enfocar(bb,sel[0]==='n'?13:14,true)}
/* tramos que se ven con los filtros de ahora */
const visibles=()=>modoTv()?[...new Set(TV.filter(tvPasa).flatMap(v=>v.t))].map(i=>tById[i]):T.filter(pasa);
/* al cambiar un filtro: el mapa se acerca a lo que quedó visible (si no hay una ficha abierta) */
function ajustarAFiltros(){
  if(sel||!map)return; const l=visibles(); if(!l.length)return;
  enfocar(unir(l.map(bbT)),13,false)}
function vacioAviso(){
  const n=visibles().length,v=$('#vacio');
  v.hidden=n>0;
  if(!n)v.querySelector('span').textContent=(modoTv()?tt('Ninguna travesía cumple estos filtros.','No multi-day route matches these filters.'):tt('Ningún tramo cumple estos filtros.','No trail matches these filters.'))+(SEL.hab.has('cerrado')?'':tt(' Probá tildar «Cerrado» en Habilitado.',' Try ticking «Closed» under Status.'))}
$('#vreset').onclick=()=>{FILT.forEach(f=>SEL[f.id]=new Set(DEF[f.id]||f.op.map(o=>o[0])));paint();ajustarAFiltros()};
/* cualquier cambio de filtro llama a ajustarAFiltros (ver paintFiltros) */

/* ================= BÚSQUEDA ================= */
const sinAcento=s=>String(s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
const IDX=()=>[
  ...Object.entries(N).map(([id,n])=>({k:'n',id,txt:sinAcento(n.n+' '+(n.s||'')),n:n.n,s:[tipoN(n.t),n.s&&!/\d/.test(n.s)?n.s:''].filter(Boolean).join(' · '),o:n.t==='ref'?0:1})),
  ...TV.map(v=>({k:'v',id:v.id,txt:sinAcento(v.n+' '+v.s+' '+(v.ne||'')+' '+(v.se||'')),n:tvN(v),s:tt('Travesía de ','Multi-day route, ')+v.nd+tt(' días',' days')+' · '+tvS(v),o:2})),
  ...Tn.map(t=>({k:'t',id:t.id,txt:sinAcento(tName(t)+' '+(t.via||'')),n:tName(t),s:tt('Tramo','Trail')+(t.via?tt(' · por ',' · via ')+t.via:''),o:3}))];
const q=$('#q'),qres=$('#qres'); let qsel=-1,qlist=[];
function buscar(){
  const t=sinAcento(q.value.trim()); qsel=-1;
  if(t.length<2){qlist=[];}else{
    qlist=IDX().map(it=>{const i=it.txt.indexOf(t);return i<0?null:[it,(i===0||it.txt[i-1]===" "?0:1)*10+it.o]}).filter(Boolean)
      .sort((a,b)=>a[1]-b[1]||a[0].n.localeCompare(b[0].n,'es')).slice(0,8).map(x=>x[0])}
  qres.innerHTML=qlist.length?qlist.map((it,i)=>`<li role="option" id="qo${i}" data-i="${i}"><b>${esc(it.n)}</b><span>${esc(it.s)}</span></li>`).join(''):(t.length>=2?`<li class="vacio-q">${tt('Sin resultados','No results')}</li>`:'');
  qres.hidden=!qres.innerHTML; q.setAttribute('aria-expanded',!qres.hidden)}
function elegirRes(it){
  qres.hidden=true;q.setAttribute('aria-expanded','false');q.value='';
  if(it.k==='v'){const v=TV.find(x=>x.id===it.id);SEL.dur=new Set([Math.min(5,v.nd)])}
  go(it.k,it.id)}
q.addEventListener('input',buscar);
q.addEventListener('focus',buscar);
q.addEventListener('keydown',ev=>{
  if(ev.key==='ArrowDown'||ev.key==='ArrowUp'){ev.preventDefault();if(!qlist.length)return;qsel=(qsel+(ev.key==='ArrowDown'?1:-1)+qlist.length)%qlist.length;
    qres.querySelectorAll('li').forEach((li,i)=>li.setAttribute('aria-selected',i===qsel));q.setAttribute('aria-activedescendant','qo'+qsel)}
  else if(ev.key==='Enter'){const it=qlist[qsel<0?0:qsel];if(it){ev.preventDefault();elegirRes(it)}}
  else if(ev.key==='Escape'){qres.hidden=true;q.setAttribute('aria-expanded','false')}});
qres.addEventListener('mousedown',ev=>{const li=ev.target.closest('li[data-i]');if(li){ev.preventDefault();elegirRes(qlist[+li.dataset.i])}});
document.addEventListener('click',ev=>{if(!ev.target.closest('.buscar')){qres.hidden=true;q.setAttribute('aria-expanded','false')}});

/* ================= MI UBICACIÓN ================= */
let YO=null;
$('#zloc').onclick=()=>{
  if(!navigator.geolocation||!map){hint(tt('Este navegador no puede darte tu ubicación','This browser cannot get your location'),2500);return}
  navigator.geolocation.getCurrentPosition(p=>{
    const ll=L.latLng(p.coords.latitude,p.coords.longitude);
    if(!LIMITES.contains(ll)){hint(tt('Estás fuera del área del mapa','You are outside the map area'),2500);return}
    const c=llImg(ll.lat,ll.lng);
    if(!YO){YO=el('g',{class:'yo'},svg.firstChild);el('circle',{r:16,class:'yo-h'},YO);el('circle',{r:6.5,class:'yo-d'},YO)}
    YO.style.transform=`translate(${c.x}px,${c.y}px) scale(var(--u))`;
    map.setView(ll,Math.max(map.getZoom(),12),{animate:false})},
  e=>hint(e.code===1?tt('No diste permiso para usar tu ubicación','Location permission was denied'):tt('No se pudo obtener tu ubicación','Could not get your location'),2500),
  {enableHighAccuracy:true,timeout:15000})};

/* ================= DESCARGAR GPX ================= */
const xml=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
/* puntos [lat, lon, altura] de la traza de un tramo; la altura sale del perfil, repartida a lo largo de la traza */
function ptsGpx(t,inv){
  const nm=t.d.match(/-?\d+(?:\.\d+)?/g).map(Number),P=[];
  for(let i=0;i+1<nm.length;i+=2)P.push([nm[i],nm[i+1]]);
  const A=[0];for(let i=1;i<P.length;i++)A.push(A[i-1]+Math.hypot(P[i][0]-P[i-1][0],P[i][1]-P[i-1][1]));
  const tot=A[A.length-1]||1,pr=t.prof;
  const out=P.map((p,i)=>{const f=A[i]/tot*(pr.length-1),a=Math.floor(f),b=Math.min(pr.length-1,a+1);return [...imgLat(p[0],p[1]),pr[a]+(pr[b]-pr[a])*(f-a)]});
  return inv?out.reverse():out}
function gpxTexto(nombre,trks,wpts){
  return `<?xml version="1.0" encoding="UTF-8"?>\n<gpx version="1.1" creator="Mapu Mapa" xmlns="http://www.topografix.com/GPX/1/1">\n<metadata><name>${xml(nombre)}</name><desc>${tt('Traza de OpenStreetMap, sin verificar en el terreno. No la uses como única guía para navegar.','Track from OpenStreetMap, not verified on the ground. Do not use it as your only navigation aid.')}</desc></metadata>\n`
   +wpts.map(n=>{const [la,lo]=imgLat(n.x,n.y);return `<wpt lat="${la.toFixed(6)}" lon="${lo.toFixed(6)}"><ele>${Math.round(n.ele)}</ele><name>${xml(n.n)}</name></wpt>`}).join('\n')+'\n'
   +trks.map(k=>`<trk><name>${xml(k.n)}</name>${k.segs.map(s=>`<trkseg>${s.map(p=>`<trkpt lat="${p[0].toFixed(6)}" lon="${p[1].toFixed(6)}"><ele>${Math.round(p[2])}</ele></trkpt>`).join('')}</trkseg>`).join('')}</trk>`).join('\n')+'\n</gpx>\n'}
function bajarGpx(nombre,texto){
  const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([texto],{type:'application/gpx+xml'}));
  a.download=sinAcento(nombre).replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')+'.gpx';
  document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(a.href),2000)}
const gpxTramo=(t,inv)=>{const A=inv?t.b:t.a,B=inv?t.a:t.b;bajarGpx(tName(t),gpxTexto(tName(t),[{n:tName(t),segs:[ptsGpx(t,inv&&!t.rt)]}],[N[A],N[B]]))};
const gpxTv=v=>{const O=orient(v);
  const trks=v.dd.map((d,i)=>({n:`${tt('Día','Day')} ${i+1}: ${kn(N[d.from])} ${tt('a','to')} ${kn(N[d.to])}`,segs:d.O.filter(([t])=>t.d).map(([t,a])=>ptsGpx(t,t.a!==a))}));
  const ids=[];const w=[];O.forEach(([t,a,b])=>{[a,b].forEach(i=>{if(!ids.includes(i)){ids.push(i);w.push(N[i])}})});
  bajarGpx(tvN(v),gpxTexto(tvN(v),trks,w))};

/* ================= HOJA DE DATOS (Google Sheets) =================
   Los textos que se completan a mano (descripciones, agua, vadeos, datos de refugios y accesos, travesías)
   se escriben en una planilla de Google. La página la lee cada vez que se abre y pone esos textos en las fichas.
   · Una celda vacía deja lo que ya hay en datos/ (o «pendiente»).
   · Si no se puede leer la planilla (sin internet, o no está compartida), se usa la última copia guardada o datos/.
   El id de la planilla va en mapa-config.js (HOJA_GOOGLE_ID). */
const HOJA_ID=typeof HOJA_GOOGLE_ID==='string'?HOJA_GOOGLE_ID.trim():'';
const HOJAS=[['tramos','Tramos'],['refugios','Refugios'],['accesos','Accesos'],['puntos','Otros puntos'],['travesias','Travesías'],['sendas','Sendas']];
function csvFilas(t){
  const r=[];let f='',row=[],q=false;
  for(let i=0;i<t.length;i++){const c=t[i];
    if(q){if(c==='"'){if(t[i+1]==='"'){f+='"';i++}else q=false}else f+=c}
    else if(c==='"')q=true;
    else if(c===','){row.push(f);f=''}
    else if(c==='\n'||c==='\r'){if(c==='\r'&&t[i+1]==='\n')i++;row.push(f);r.push(row);row=[];f=''}
    else f+=c}
  if(f!==''||row.length){row.push(f);r.push(row)}
  if(!r.length)return [];
  const h=r[0].map(x=>x.trim());
  if(!h.includes('id'))throw new Error('sin columna id');
  return r.slice(1).filter(x=>x.some(c=>c.trim())).map(x=>Object.fromEntries(h.map((k,i)=>[k,(x[i]??'').trim()])))}
const ORIG=new WeakMap();
/* pone los valores de la hoja en un registro; una celda vacía devuelve el valor original */
function pisar(db,claves,fila){
  if(!ORIG.has(db))ORIG.set(db,{...db});
  const o=ORIG.get(db);
  claves.forEach(k=>[k,k+'_en'].forEach(kk=>{db[kk]=fila[kk]||o[kk]||''}))}
/* De la planilla salen también el color (dificultad), la zona, la duración y el nombre de cada tramo, y los nombres de las travesías:
   al llegar hay que volver a calcular todo lo que depende de eso (zonas del filtro, colores, filtros). */
function derivarTramo(t){
  const d=t.db;
  t.g=DIF[String(d.dificultad||'').trim()]||'g0';
  t.zona=String(d.zona||'').trim()||'Sin zona';
  t.dias=Number(String(d.duracion_dias??'').replace(',','.'))||0;
  t.nm=d.nombre; t.via=d.via; t.nota=d.nota_dificultad}
function recalcularEstructura(){
  const antes=ZONAS.join('|');
  ZONAS.length=0; ZONAS.push(...[...new Set(T.map(t=>t.zona))].sort((a,b)=>a.localeCompare(b,'es')));
  TV.forEach(v=>{v.zonas=new Set(v.t.map(id=>tById[id].zona))});
  if(ZONAS.join('|')!==antes){   // cambiaron las zonas: el filtro vuelve a empezar con todas (o con lo que pide el enlace)
    const f=FILT.find(x=>x.id==='zona'),h=typeof HASH!=='undefined'?HASH.get('zona'):null;
    SEL.zona=new Set(h==null?ZONAS:(h==='-'?[]:h.split('~').filter(z=>ZONAS.includes(z))))}}
const listaDeTexto=t=>String(t||'').split(/\r?\n/).map(x=>x.trim()).filter(Boolean);
function aplicarHojas(H){
  (H.tramos||[]).forEach(f=>{const t=tById[f.id];if(!t)return;
    pisar(t.db,['descripcion','agua','vadeos','sombra','dificultad','nota_dificultad','duracion_dias','via','zona'],f);
    t.db.nombre=f.nombre_propio||ORIG.get(t.db).nombre||'';
    derivarTramo(t);
    if(f.verificada)t.db.descripcion_verificada=/^(s[ií]|x|true|1|yes|ok)$/i.test(f.verificada)||ORIG.get(t.db).descripcion_verificada;
    else t.db.descripcion_verificada=ORIG.get(t.db).descripcion_verificada});
  const puntos=(rows,claves)=>(rows||[]).forEach(f=>{const n=N[f.id];if(n&&n.db)pisar(n.db,claves,f)});
  puntos(H.refugios,['descripcion','capacidad','reserva','que_se_compra','agua','acampe','si_esta_lleno']);
  puntos(H.accesos,['descripcion','colectivo','parada','frecuencia','ultimo_regreso','estacionamiento']);
  puntos(H.puntos,['descripcion']);
  (H.travesias||[]).forEach(f=>{const v=TV.find(x=>x.id===f.id);if(!v)return;
    pisar(v.db,['donde_dormir','salidas_de_escape','como_volver','nombre','resumen'],f);
    v.n=v.db.nombre;v.ne=v.db.nombre_en;v.s=v.db.resumen;v.se=v.db.resumen_en});
  (H.sendas||[]).forEach(f=>{const r=SDR.get(f.id);if(!r)return;
    pisar(r,['nombre','dificultad','temporada','dificultad_otra','temporada_otra','registro','servicios','descripcion'],f);
    ['','_en'].forEach(sf=>{const k='precauciones'+sf;if(!ORIG.get(r)['__'+k])ORIG.get(r)['__'+k]=r[k];const l=listaDeTexto(f[k]);r[k]=l.length?l:ORIG.get(r)['__'+k]})});
  recalcularEstructura()}
function repintarFicha(){if(sel)go(sel[0],sel[1],true,'mapa');else home()}
/* Al arrancar: lo más nuevo entre la copia que guardó el robot (datos/planilla.js) y la que guardó este navegador.
   Después cargarHojas() lee la planilla en vivo. */
try{
  let c=null;try{c=JSON.parse(localStorage.getItem('pt.hojas')||'null')}catch(e){}
  const copia=typeof PLANILLA!=='undefined'&&PLANILLA&&PLANILLA.hojas?PLANILLA:null;
  if(copia&&(Date.parse(copia.actualizado)||0)>((c&&c.d&&c.t)||0))aplicarHojas(copia.hojas);
  else if(c&&c.d)aplicarHojas(c.d);
}catch(e){}
async function cargarHojas(){
  if(!HOJA_ID)return;
  try{
    const filas=await Promise.all(HOJAS.map(([k,n])=>
      fetch(`https://docs.google.com/spreadsheets/d/${HOJA_ID}/gviz/tq?tqx=out:csv&headers=1&sheet=${encodeURIComponent(n)}`)
        .then(r=>{if(!r.ok)throw new Error(r.status);return r.text()}).then(csvFilas)
        .catch(e=>{if(k==='sendas')return [];throw e})));   // la hoja Sendas es opcional
    const H=Object.fromEntries(HOJAS.map(([k],i)=>[k,filas[i]]));
    if(!H.tramos.length)return;   // respuesta rara: se queda con lo que había
    const nuevo=JSON.stringify(H);
    let viejo='';try{viejo=JSON.stringify((JSON.parse(localStorage.getItem('pt.hojas')||'null')||{}).d||'')}catch(e){}
    aplicarHojas(H);
    try{localStorage.setItem('pt.hojas',JSON.stringify({t:Date.now(),d:H}))}catch(e){}
    if(nuevo!==viejo){if(listo)paint();repintarFicha()}
  }catch(e){/* sin hoja: se usan los datos de datos/ */}}

/* ================= CAMBIO DE IDIOMA ================= */
alCambiarIdioma(()=>{
  if(map)credito();
  if(sel)go(sel[0],sel[1],true,'mapa'); else {home();paint()}
  if(qres&&!qres.hidden)buscar();
  document.querySelector('.maphint')?.classList.remove('on');
  guardarUrl();
});

/* ================= ARRANQUE ================= */
build(); avisos(); home(); paint(); fit(); listo=true;
{ const V=(HASH.get('v')||'').split(',').map(Number);   // vista guardada en el enlace
  if(map&&V.length===3&&V.every(Number.isFinite)){map.setView([V[0],V[1]],V[2],{animate:false});apply()}
  const S=(HASH.get('s')||'').split('.'),sid=S.slice(1).join('.');
  if((S[0]==='t'&&tById[sid])||(S[0]==='n'&&N[sid])||(S[0]==='v'&&TV.find(v=>v.id===sid))){rev=HASH.get('rev')==='1';go(S[0],sid,true,'mapa')}}
cargarHojas();
