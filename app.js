const W=D.W,H=D.H;
const G={g0:{l:'Sin dato',s:'Sin dato'},g1:{l:'Fácil',s:'Fácil'},g2:{l:'Moderada',s:'Moderada'},g3:{l:'Difícil',s:'Difícil'}};

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

/* tipo de cada campo: t texto, n número, b sí/no, l lista, o una lista de valores permitidos */
const CAMPOS={
  tramo:{id:'t',desde:'t',hasta:'t',nombre:'t',via:'t',ida_y_vuelta:'b',
    dificultad:Object.keys(DIF),nota_dificultad:'t',sendas_apn:'l',sendas_apn_total:'n',
    fuera_de_apn:'b',administra:'t',registro:REGISTRO,huella_andina:'b',zona:'t',duracion_dias:'n',nombres_en_registro:'l',
    descripcion:'t',descripcion_verificada:'b',agua:'t',vadeos:'t',sombra:'t',tiempo_medido:'t'},
  punto:{id:'t',nombre:'t',nombre_en_tramos:'t',detalle:'t',tipo:Object.keys(TIPO),descripcion:'t',
    etiqueta_x:'n',etiqueta_y:'n',etiqueta_lado:Object.keys(LADO),solo_con_zoom:'b'},
  refugio:{capacidad:'t',reserva:'t',que_se_compra:'t',agua:'t',acampe:'t',si_esta_lleno:'t'},
  acceso:{colectivo:'t',parada:'t',frecuencia:'t',ultimo_regreso:'t',estacionamiento:'t'},
  travesia:{id:'t',nombre:'t',resumen:'t',senda_apn:'t',etapas:'e',donde_dormir:'t',salidas_de_escape:'t',como_volver:'t'}
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
  for(const k in r) if(!(k in campos)) aviso(donde,`Campo desconocido «${k}». ¿Está mal escrito?`);
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
  T.push({id:r.id,a:r.desde,b:r.hasta,nm:r.nombre,via:r.via,rt:r.ida_y_vuelta,g:DIF[r.dificultad],
    nota:r.nota_dificultad,sen:r.sendas_apn,nsen:Math.max(r.sendas_apn_total,r.sendas_apn.length),ed:r.fuera_de_apn,muni:r.administra,
    reg:r.registro,ha:r.huella_andina,zona:r.zona||'Sin zona',dias:r.duracion_dias,reg_nombres:r.nombres_en_registro,desc:r.descripcion,db:r});
});
/* Estado según el registro del Parque (datos/estado.js, generado por herramientas/actualizar-estado.mjs).
   Un tramo toma el mejor estado entre los senderos del registro que lo recorren: habilitado o cerrado.
   Si ninguno aparece en el registro, queda «No verificado». */
const EST={habilitado:'Habilitado',cerrado:'Cerrado',no_verificado:'No verificado'};
const EST_ORDEN=['habilitado','cerrado'];
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
  TV.push({id:r.id,n:r.nombre,s:r.resumen,sen:r.senda_apn,t:flat,et:r.etapas,db:r});
});
const esc=s=>String(s??'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
function avisos(){
  const box=document.getElementById('avisos'); if(!AVISOS.length){box.hidden=true;return}
  box.hidden=false;
  box.innerHTML=`<details${AVISOS.length<=3?' open':''}><summary>${AVISOS.length===1?'Hay 1 problema':`Hay ${AVISOS.length} problemas`} en la base de datos</summary><ul>${AVISOS.map(([d,m])=>`<li><b>${esc(d)}</b>: ${esc(m)}</li>`).join('')}</ul></details>`;
}

/* ================= ESTADO ================= */
let sel=null, rev=false;
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
const tName=t=>t.nm||`${kn(N[t.a])} a ${kn(N[t.b])}`;
const f1=x=>String(x.toFixed(1)).replace('.',',');
const num=x=>String(Math.round(x));
function hours(km,up,dn){const h=km/4,v=up/400+dn/800;return Math.max(h,v)+Math.min(h,v)/2}
function hTxt(t){const r=x=>Math.max(.5,Math.round(x*2)/2);const a=r(t*.85),b=r(t*1.15);const f=x=>String(x).replace('.5',' y media').replace(/^0 y media/,'media');return a===b?`${f(a)} h`:`${f(a)} a ${f(b)} h`}
function orient(v){const ts=v.t.map(i=>tById[i]);const out=[];let cur=null;
  ts.forEach((t,i)=>{if(cur===null){const nx=ts[i+1];cur=(nx&&(t.a===nx.a||t.a===nx.b))?t.b:t.a}
    const to=t.a===cur?t.b:t.a;out.push([t,cur,to]);cur=to});return out}
/* Cada travesía se divide en días: cada día suma la información de sus tramos de 1 día. */
TV.forEach(v=>{
  const O=orient(v);let i=0;
  v.dd=v.et.map(e=>{const part=O.slice(i,i+e.length);i+=e.length;
    let km=0,up=0,dn=0;part.forEach(([t,a])=>{if(t.src==='none')return;const f=t.a===a;km+=t.km;up+=f?t.up:t.dn;dn+=f?t.dn:t.up});
    return {O:part,km,up,dn,h:hours(km,up,dn),from:part[0][1],to:part[part.length-1][2]}});
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
    const g=el('g',{class:'e','data-id':tr.id,tabindex:0,role:'button','aria-label':'Tramo '+tName(tr)},E);
    el('path',{d:tr.d,class:'ecase'},g);el('path',{d:tr.d,class:'eline'},g);el('path',{d:tr.d,class:'ehit'},g);
    g.addEventListener('click',ev=>{if(moved)return;ev.stopPropagation();go('t',tr.id,false,'mapa')});
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
    g.addEventListener('click',ev=>{if(moved)return;ev.stopPropagation();go('n',id,false,'mapa')});
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
    g.setAttribute('class','e '+gg+(t.src==='none'?' none':'')+((hi?!hi.has(t.id):!pasa(t))?' dim':'')+(hi&&hi.has(t.id)&&sel[0]!=='n'?' sel':''));
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
  km:[['Hasta 3 km',0,3],['3 a 8 km',3,8],['8 a 15 km',8,15],['Más de 15 km',15,Infinity]],
  des:[['Hasta 200 m',0,200],['200 a 500 m',200,500],['500 a 1000 m',500,1000],['Más de 1000 m',1000,Infinity]]
};
/* desnivel = el mayor entre subida y bajada */
const desnivel=t=>t.up==null?null:Math.max(t.up,t.dn);
const ZONAS=[...new Set(T.map(t=>t.zona))].sort((a,b)=>a.localeCompare(b,'es'));
const FILT=[
  {id:'dif',nom:'Dificultad',op:[['g1','Fácil'],['g2','Moderada'],['g3','Difícil'],['g0','Sin dato']],val:t=>t.g,sw:true},
  {id:'km',nom:'Distancia',op:RANGOS.km.map((r,i)=>[i,r[0]]),val:t=>t.km==null?null:RANGOS.km.findIndex(r=>t.km>=r[1]&&t.km<r[2])},
  {id:'des',nom:'Desnivel',op:RANGOS.des.map((r,i)=>[i,r[0]]),val:t=>{const d=desnivel(t);return d==null?null:RANGOS.des.findIndex(r=>d>=r[1]&&d<r[2])}},
  {id:'dur',nom:'Duración',uno:true,op:[[1,'1 día'],[2,'2 días'],[3,'3 días'],[4,'4 días'],[5,'Más de 4 días']],val:t=>t.dias>0?Math.min(5,Math.round(t.dias)):null},
  {id:'zona',nom:'Zona',op:ZONAS.map(z=>[z,z]),val:t=>t.zona},
  {id:'hab',nom:'Habilitado',op:Object.entries(EST),val:t=>t.hab}
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
const pasa=t=>modoTv()?TV.some(v=>tvPasa(v)&&v.t.includes(t.id)):FILT.every(f=>pasaF(f,t));
const filtroActivo=f=>{const d=new Set(DEF[f.id]||f.op.map(o=>o[0])),s=SEL[f.id];return s.size!==d.size||[...s].some(v=>!d.has(v))};
function resumen(f){const s=SEL[f.id],n=f.op.length;
  if(f.id==='hab'&&!filtroActivo(f))return '';   // Habilitado: sin texto mientras está en su valor inicial
  if(s.size===n)return f.id==='hab'?'todos':f.id==='dur'?'todas':f.id==='des'?'todos':'todas';
  if(s.size===0)return f.id==='hab'?'ninguno':f.id==='des'?'ninguno':'ninguna';
  if(s.size===1)return String(f.op.find(o=>s.has(o[0]))[1]);
  return `${s.size} de ${n}`}
function paintFiltros(){
  const bar=$('#filtros');
  bar.innerHTML=FILT.map(f=>{
    const cnt=new Map(f.op.map(o=>[o[0],0]));T.forEach(t=>{const v=f.val(t);if(cnt.has(v))cnt.set(v,cnt.get(v)+1)});
    if(f.id==='dur'){cnt.set(1,cnt.get(1)||0);for(let d=2;d<=5;d++)cnt.set(d,0);TV.forEach(v=>{const d=Math.min(5,v.nd);if(d>=2)cnt.set(d,cnt.get(d)+1)})}   // 1 día cuenta tramos; 2 o más, travesías
    const op=f.op.filter(o=>f.id==='hab'||f.id==='dur'||cnt.get(o[0])||SEL[f.id].has(o[0]));
    return `<div class="flt${abierto===f.id?' open':''}${filtroActivo(f)?' on':''}">
      <button class="fbtn" data-f="${f.id}" aria-expanded="${abierto===f.id}" aria-controls="fp-${f.id}"><span class="fn">${f.nom}</span>${resumen(f)?`<span class="fv">${esc(resumen(f))}</span>`:''}<svg width="10" height="6" viewBox="0 0 10 6" aria-hidden="true"><path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.6"/></svg></button>
      <div class="fpanel" id="fp-${f.id}" ${abierto===f.id?'':'hidden'}>
        ${f.uno?'<div class="fall"><span>Elegí una opción</span></div>':`<div class="fall"><button data-all="${f.id}">Todas</button><button data-none="${f.id}">Ninguna</button></div>`}
        ${op.map(o=>`<label><input type="${f.uno?'radio':'checkbox'}" name="r-${f.id}" data-f="${f.id}" data-v="${esc(o[0])}" ${SEL[f.id].has(o[0])?'checked':''}>${f.sw?swatch(o[0],26):''}<span>${esc(o[1])}</span><b title="${f.id==='dur'?(o[0]===1?'tramos':'travesías'):''}">${cnt.get(o[0])}</b></label>`).join('')}
      </div></div>`}).join('')+`<span class="fcount" aria-live="polite">${modoTv()?TV.filter(tvPasa).length+' de '+TV.length+' travesías':T.filter(pasa).length+' de '+T.length+' tramos'}${REG.actualizado?` · Registro de Parques Nacionales leído el ${new Date(REG.actualizado).toLocaleString('es-AR',{day:'numeric',month:'numeric',hour:'2-digit',minute:'2-digit',hour12:false})}`:''}</span>`;
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
  tl.innerHTML=`<span class="tvh">Travesías de ${d>=5?'más de 4 días':d+' días'}</span>`+(l.length
    ?l.map(v=>`<button type="button" class="tvb${sel&&sel[0]==='v'&&sel[1]===v.id?' on':''}" data-v="${v.id}"><span>${esc(v.n)}</span>${swatch(tvG(v),22)}<small>${v.nd} días</small></button>`).join('')
    :'<span class="tvh soft">Ninguna con estos filtros.</span>');
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
const INFO='<p class="fine" style="margin-top:14px">Normas para cuidar el lugar y teléfonos de emergencia: <a href="info-utiles.html">Info útiles</a>.</p>';
function estBox(t){
  const cuando=REG.actualizado?` Leído el ${new Date(REG.actualizado).toLocaleString('es-AR',{day:'numeric',month:'long',hour:'2-digit',minute:'2-digit',hour12:false})}.`:'';
  if(t.hab==='no_verificado')return `<div class="row"><span class="k">Estado</span><span class="v soft">No verificado</span></div><p class="fine">Este tramo no figura en el formulario de registro del Parque, o todavía no está asociado a un sendero del formulario.</p>`;
  const det=t.regHall.map(h=>`<li>${esc(h.n)}: ${EST[h.e]}${h.m?' ('+esc(h.m.toLowerCase())+')':''}</li>`).join('');
  return `<div class="row"><span class="k">Estado</span><span class="v">${EST[t.hab]}</span></div><ul class="plain fine">${det}</ul><p class="fine">Según el formulario de registro de trekking del Parque.${cuando}</p>`;
}
function regBlock(reg='obligatorio'){
  if(reg==='no_requiere') return `<div class="row"><span class="k">Registro de trekking</span><span class="v">No hace falta</span></div>`;
  if(reg==='a_confirmar'||reg==='dificultad_baja') return `<div class="row"><span class="k">Registro de trekking</span><span class="v soft">a confirmar <b class="mk pe">○</b></span></div>${reg==='dificultad_baja'?'<p class="pend" style="font-size:15px;margin-top:4px">Los senderos de dificultad baja están exceptuados; falta el anexo de clasificación para confirmarlo.</p>':''}`;
  return `<div class="row"><span class="k">Registro de trekking</span><span class="v">Obligatorio <b class="mk of">■</b></span></div><p class="reg" style="margin-top:4px"><a href="https://www.nahuelhuapi.gov.ar/trekking-y-actividades-de-montana/" target="_blank" rel="noopener">Hacer el registro en la web del parque</a></p>`}
function profSvg(z,km,label){
  const lo=Math.min(...z),hi=Math.max(...z),w=560,h=120,x0=14,x1=546,y0=24,y1=100;
  const pts=z.map((v,i)=>`${(x0+(x1-x0)*i/(z.length-1)).toFixed(1)},${(y1-(y1-y0)*(v-lo)/Math.max(1,hi-lo)).toFixed(1)}`).join(' ');
  return `<svg class="prof" viewBox="0 0 ${w} ${h}" role="img" aria-label="${label}">
    <line x1="${x0}" y1="${y1}" x2="${x1}" y2="${y1}" stroke="var(--hair)"/><line x1="${x0}" y1="${y0}" x2="${x1}" y2="${y0}" stroke="var(--hair)" stroke-dasharray="2 4"/>
    <polygon points="${x0},${y1} ${pts} ${x1},${y1}" fill="var(--g0)" opacity=".14"/><polyline points="${pts}" fill="none" stroke="var(--g0)" stroke-width="2.6" stroke-linejoin="round"/>
    <text x="${x0}" y="17" font-family="Barlow Condensed,Arial Narrow,sans-serif" font-size="19" fill="#5C6E77">${num(hi)} m</text>
    <text x="${x0}" y="${h-4}" font-family="Barlow Condensed,Arial Narrow,sans-serif" font-size="19" fill="#5C6E77">${num(lo)} m</text>
    <text x="${x1}" y="${h-4}" text-anchor="end" font-family="Barlow Condensed,Arial Narrow,sans-serif" font-size="19" fill="#5C6E77">${f1(km)} km</text></svg>`}
function bigNums(km,up,dn,t,med,medOtro){return `<div class="big"><div><b>${f1(km)} km</b><span>distancia</span></div><div><b>+${num(up)} m</b><span>subida</span></div><div><b>−${num(dn)} m</b><span>bajada</span></div></div>
  ${med?`<div class="row" style="margin-top:7px"><span class="k">Tiempo de marcha</span><span class="v">${esc(med)}</span></div>
  <p class="fine">Tiempo medido, sin paradas.</p>`
  :`<div class="row" style="margin-top:7px"><span class="k">Tiempo de marcha</span><span class="v">${hTxt(t)} <b class="mk pe">○</b></span></div>
  <p class="fine">Estimado por fórmula según distancia y desnivel, sin paradas.${medOtro?` En el otro sentido hay un tiempo medido: ${esc(medOtro)}.`:' No reemplaza un tiempo medido.'}</p>`}`}
function rows(pares,vacio){return pares.map(([k,v])=>`<div class="row"><span class="k">${k}</span>${v?`<span class="v">${esc(v)}</span>`:`<span class="v soft">${vacio} <b class="mk pe">○</b></span>`}</div>`).join('')}
function subt(t){return [t.via?'por '+esc(t.via):'',t.rt?'ida y vuelta':''].filter(Boolean).join(', ')}
function home(){
  const pend=T.filter(t=>t.src==='none').length;
  pin.innerHTML=`
  <p class="kind">Para empezar</p>
  <h1 class="t">Tocá un tramo o un refugio</h1>
  <p style="margin:10px 0 0">Cada línea de color es un tramo entre dos puntos, dibujado sobre su traza. El color dice la dificultad del tramo. Con los filtros de arriba podés mostrar solo los tramos que te sirven: los demás quedan atenuados.</p>
  <div class="blk"><h2>Cómo leer el mapa</h2>
    <div class="leg">
      ${swatch('g1',34)}<span>Fácil</span>
      ${swatch('g2',34)}<span>Moderada</span>
      ${swatch('g3',34)}<span>Difícil</span>
      <svg width="34" height="10" viewBox="0 0 34 10"><line x1="3" y1="5" x2="31" y2="5" stroke="#6B4A2B" stroke-width="1.6" stroke-dasharray="1.5 4" stroke-linecap="round"/></svg><span>Otros senderos, todavía sin ficha</span>
    </div>
    <div class="leg sym">
      <svg width="34" height="16" viewBox="-17 -8 34 16"><path d="M0,-7 L7,6 L-7,6 Z" fill="#4A3A28" stroke="#fff" stroke-width="1.5"/></svg><span>Cumbre</span>
      <svg width="34" height="16" viewBox="-17 -8 34 16"><rect x="-6" y="-6" width="12" height="12" fill="var(--ink)" stroke="#fff" stroke-width="1.5"/></svg><span>Refugio</span>
      <svg width="34" height="16" viewBox="-17 -8 34 16"><circle r="5.6" fill="#fff" stroke="var(--ink)" stroke-width="2.2"/></svg><span>Acceso o punto de paso</span>
      <svg width="34" height="16" viewBox="-17 -8 34 16"><circle r="5" fill="#BFD5DD" stroke="var(--waterink)" stroke-width="2"/></svg><span>Laguna</span>
    </div>
    <p class="fine" style="margin-top:8px">Al acercar el mapa aparecen más nombres.</p>
  </div>
  <div class="blk"><h2>Qué tiene y qué no tiene esta versión</h2>
    <p>Tiene ${T.length} tramos sobre un mapa real. Distancia, desnivel y perfil salen de la traza de OpenStreetMap y del modelo de alturas.</p>
    <p>La dificultad viene del Anexo I de la Disposición 150/19 del parque, temporada de noviembre a abril. Cada tramo toma la dificultad más baja de las sendas oficiales que lo recorren.</p>
    <p>Ninguna traza está verificada en el terreno todavía. Agua, vadeos, sombra y tiempos medidos siguen pendientes.</p>
    <p>Quedaron afuera las sendas oficiales que no tienen traza en OpenStreetMap, como las bajadas por el arroyo Fresco al lago Mascardi, el refugio Velco, el lago Fonck y la mayor parte de isla Victoria. La travesía glaciaria entre Meiling y Refugio Viejo figura como línea recta.</p>
  </div>`;
  pin.querySelectorAll('[data-v]').forEach(b=>b.onclick=()=>go('v',b.dataset.v));
}
function tramo(id){
  const t=tById[id], db=t.db;
  const A=rev?t.b:t.a,B=rev?t.a:t.b;
  const sen=t.sen.length?`<div class="sendas">${t.sen.map(s=>`<span>${s}</span>`).join('')}${t.nsen>t.sen.length?`<em>y ${t.nsen-t.sen.length} más</em>`:''}</div>`:'';
  const tvs=TV.filter(v=>v.t.includes(id));
  let geo='';
  if(t.src==='none'){
    geo=`<div class="blk"><h2>Recorrido</h2><span class="stamp no">Sin traza</span><p style="margin-top:7px">Es una ruta sobre glaciar que no tiene sendero marcado. La línea recta del mapa solo muestra que los dos refugios se conectan.</p></div>`;
  }else{
    const up=rev&&!t.rt?t.dn:t.up, dn=rev&&!t.rt?t.up:t.dn, z=rev&&!t.rt?[...t.prof].reverse():t.prof;
    geo=`<div class="blk"><h2><span>${t.rt?'Ida y vuelta':`De ${kn(N[A])} a ${kn(N[B])}`}</span>${t.rt?'':'<button id="rv">Ver al revés</button>'}</h2>
      ${bigNums(t.km,up,dn,hours(t.km,up,dn),(!rev||t.rt)?db.tiempo_medido:'',(rev&&!t.rt)?db.tiempo_medido:'')}
      <div style="margin-top:10px">${profSvg(z,t.km,'Perfil de altura del tramo')}</div>
      <button type="button" class="gpx" id="gpx">Descargar GPX</button>
      <div class="row" style="margin-top:6px"><span class="k">Altura mínima y máxima</span><span class="v">${num(t.zmin)} a ${num(t.zmax)} m</span></div>
      ${db.agua||db.vadeos||db.sombra?rows([['Agua',db.agua],['Vadeos',db.vadeos],['Sombra',db.sombra]],'a relevar')
        :`<div class="row"><span class="k">Agua, vadeos y sombra</span><span class="v soft">a relevar <b class="mk pe">○</b></span></div>`}
    </div>
    <div class="blk"><h2>Origen de la traza</h2>${t.src==='gpx'
      ?'<span class="stamp">Track de terceros, Wikiloc</span><p style="margin-top:7px">Distancia y desnivel medidos sobre el track. Todavía no cuenta como sendero verificado.</p>'
      :'<span class="stamp">OpenStreetMap, sin verificar</span><p style="margin-top:7px">La traza la cargaron voluntarios y puede tener errores o estar desactualizada. Se reemplaza cuando haya un track propio.</p>'}</div>`;
  }
  pin.innerHTML=`
  <p class="kind">Tramo${t.ha?', parte de la Huella Andina':''}</p>
  <h1 class="t">${esc(tName(t))}</h1>
  ${subt(t)?`<p class="subt">${subt(t)}</p>`:''}
  <div class="blk"><h2>Estado en el registro del Parque</h2>${estBox(t)}</div>
  <div class="blk"><h2>Dificultad</h2>${difBox(t.g, esc(t.nota)|| (t.ed?(t.muni?'Es '+esc(t.muni)+', no figura en el listado de la APN.':'No figura en el listado de la APN.'):''))}
    <div style="margin-top:9px">${regBlock(t.reg)}</div>
  </div>
  ${geo}
  <div class="blk"><h2>Cómo es</h2>${t.desc?`<p>${esc(t.desc)}</p>${db.descripcion_verificada?'':'<p class="pend" style="font-size:15px">Descripción provisoria, sin verificar en el terreno.</p>'}`:`<p class="pend">Pendiente de escribir.</p>`}</div>
  ${t.ed||!sen?'':`<div class="blk"><h2>Sendas oficiales que lo incluyen</h2>${sen}</div>`}
  ${tvs.length?`<div class="blk"><h2>Travesías que pasan por acá</h2><ul class="list">${tvs.map(v=>`<li><button data-v="${v.id}"><span><span class="nm">${v.n}</span><span class="ds">${v.s}</span></span><span class="sws">${swatch(tvG(v))}</span></button></li>`).join('')}</ul></div>`:''}
  ${INFO}`;
  wire(); const r=$('#rv'); if(r)r.onclick=()=>{rev=!rev;tramo(id);guardarUrl()};
  const g=$('#gpx'); if(g)g.onclick=()=>gpxTramo(t,rev);
}
function nodo(id){
  const n=N[id], db=n.db; const ts=T.filter(t=>t.a===id||t.b===id);
  const kind={acc:'Acceso',ref:'Refugio',pto:'Punto de paso',lag:'Laguna',cum:'Cumbre'}[n.t];
  pin.innerHTML=`
  <p class="kind">${kind}</p>
  <h1 class="t">${esc(n.n)}</h1>
  <p class="subt">${n.s&&!/\d/.test(n.s)?esc(n.s)+', ':''}${num(n.ele)} m</p>
  ${db.descripcion?`<div class="blk"><p>${esc(db.descripcion)}</p></div>`:''}
  ${n.t==='ref'?`<div class="blk"><h2>El refugio</h2>${[db.capacidad,db.reserva,db.que_se_compra,db.agua,db.acampe,db.si_esta_lleno].some(Boolean)
    ?rows([['Capacidad',db.capacidad],['Reserva',db.reserva],['Qué se puede comprar',db.que_se_compra],['Agua',db.agua],['Dónde se acampa',db.acampe],['Si llegás y está lleno',db.si_esta_lleno]],'a relevar')
    :'<p class="pend">Pendiente: capacidad, si hay que reservar, qué se puede comprar, agua, dónde se acampa y qué pasa si llegás y está lleno.</p>'}</div>`:''}
  ${n.t==='acc'?`<div class="blk"><h2>Cómo llegar</h2>${[db.colectivo,db.parada,db.frecuencia,db.ultimo_regreso,db.estacionamiento].some(Boolean)
    ?rows([['Colectivo',db.colectivo],['Parada',db.parada],['Frecuencia',db.frecuencia],['Último horario de vuelta',db.ultimo_regreso],['Dónde dejar el auto',db.estacionamiento]],'a relevar')
    :'<p class="pend">Pendiente: colectivo, parada, frecuencia, último horario de vuelta y dónde dejar el auto.</p>'}</div>`:''}
  <div class="blk"><h2>Tramos que salen de acá</h2>
    <ul class="list">${ts.map(t=>{const o=t.a===id?t.b:t.a;const up=t.a===id?t.up:t.dn;return `<li><button data-t="${t.id}" data-rev="${t.a===id?0:1}"><span><span class="nm">a ${kn(N[o])}</span><span class="ds">${t.src==='none'?'ruta glaciaria, sin traza':`${f1(t.km)} km, +${num(up)} m${t.via?', por '+esc(t.via):''}`}</span></span><span class="sws">${swatch(t.g)}</span></button></li>`}).join('')}</ul>
  </div>
  ${INFO}`;
  wire();
}
function travesia(id){
  const v=TV.find(x=>x.id===id); const g=tvG(v); const O=orient(v);
  let km=0,up=0,dn=0,z=[];
  O.forEach(([t,a])=>{if(t.src==='none')return;const f=t.a===a;km+=t.km;up+=f?t.up:t.dn;dn+=f?t.dn:t.up;const p=f?t.prof:[...t.prof].reverse();const k=Math.max(4,Math.round(t.km*4));for(let i=0;i<k;i++)z.push(p[Math.round(i*(p.length-1)/(k-1))])});
  const crit=v.t.map(i=>tById[i]).filter(t=>t.g===g);
  const note=crit.length===v.t.length?'Todos los tramos tienen esta dificultad.':`La define el tramo más exigente: ${crit.map(t=>esc(tName(t))).join(' y ')}.`;
  pin.innerHTML=`
  <p class="kind">Travesía${v.sen?', senda oficial '+v.sen+' <b class="mk of">■</b>':''}</p>
  <h1 class="t">${v.n}</h1>
  <p class="subt">${v.s}</p>
  <div class="blk"><h2>Dificultad</h2>${difBox(g,note)}<div style="margin-top:9px">${regBlock()}</div></div>
  <div class="blk"><h2>El recorrido completo</h2>${bigNums(km,up,dn,hours(km,up,dn))}<div style="margin-top:10px">${profSvg(z,km,'Perfil de altura de la travesía')}</div>
    <button type="button" class="gpx" id="gpxv">Descargar GPX de la travesía</button></div>
  ${v.dd.map((d,n)=>`<div class="blk"><h2>Día ${n+1}</h2>
    <p class="subt" style="margin:0 0 8px">${esc(kn(N[d.from]))} a ${esc(kn(N[d.to]))}</p>
    ${bigNums(d.km,d.up,d.dn,d.h)}
    <ul class="list" style="margin-top:8px">${d.O.map(([t,a,b])=>{const f=t.a===a;return `<li><button data-t="${t.id}" data-rev="${f?0:1}"><span><span class="nm">${kn(N[a])} a ${kn(N[b])}</span><span class="ds">${t.src==='none'?'ruta glaciaria, sin traza':`${f1(t.km)} km, +${num(f?t.up:t.dn)} m, −${num(f?t.dn:t.up)} m`} · ${EST[t.hab]}</span></span><span class="sws">${swatch(t.g)}</span></button></li>`}).join('')}</ul>
    ${d.O.map(([t])=>t.desc?`<p class="fine">${esc(t.desc)}</p>`:'').join('')}
  </div>`).join('')}
  <div class="blk"><h2>Lo propio de la travesía</h2>
    ${rows([['Días',v.nd+(v.nd===1?' día':' días')]],'')}
    ${rows([['Dónde se duerme',v.db.donde_dormir]],'a definir')}
    ${rows([['Salidas de escape',v.db.salidas_de_escape],['Cómo volver',v.db.como_volver]],'a relevar')}
  </div>
  ${INFO}`;
  wire(); $('#gpxv').onclick=()=>gpxTv(v);
}
function wire(){
  const b=$('#bk'); if(b)b.onclick=()=>go(null);
  pin.querySelectorAll('[data-t]').forEach(b=>b.onclick=()=>{rev=b.dataset.rev==='1';go('t',b.dataset.t,true)});
  pin.querySelectorAll('[data-v]').forEach(b=>b.onclick=()=>go('v',b.dataset.v));
}
function go(k,id,keepRev,desde){
  if(!keepRev)rev=false;
  sel=k?[k,id]:null;
  if(!k){pin=pinHome;home();dr.hidden=true;mapwrap.classList.remove('dr-open')}
  else{pin=drBody;(k==='t'?tramo:k==='n'?nodo:travesia)(id);dr.hidden=false;mapwrap.classList.add('dr-open');dr.scrollTop=0;if(desde!=='mapa')mostrarSel(true)}
  paint(); guardarUrl();
}
$('#drx').onclick=()=>go(null);
$('#drlink').onclick=()=>{const u=urlActual();
  (navigator.clipboard?navigator.clipboard.writeText(u):Promise.reject()).then(()=>hint('Enlace copiado',1200),()=>{try{prompt('Copiá el enlace:',u)}catch(e){}})};

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
FILT.forEach(f=>{const v=HASH.get(f.id);if(v==null)return;
  const ok=v==='-'?[]:v.split('~').map(x=>f.op.find(o=>String(o[0])===x)).filter(Boolean).map(o=>o[0]);
  if(f.uno){if(ok.length)SEL[f.id]=new Set([ok[0]])}else SEL[f.id]=new Set(ok)});
let urlT=0;
function urlActual(){
  const p=[],add=(k,v)=>p.push(k+'='+encodeURIComponent(v));
  FILT.forEach(f=>{const s=SEL[f.id],d=new Set(DEF[f.id]||f.op.map(o=>o[0]));if(s.size!==d.size||[...s].some(x=>!d.has(x)))add(f.id,[...s].join('~')||'-')});
  if(sel){add('s',sel[0]+'.'+sel[1]);if(rev)add('rev','1')}
  if(capaAct!=='topo')add('c',capaAct);
  if(map){const c=map.getCenter();add('v',c.lat.toFixed(4)+','+c.lng.toFixed(4)+','+map.getZoom().toFixed(1))}
  return location.href.split('#')[0]+(p.length?'#'+p.join('&'):'')}
function guardarUrl(){clearTimeout(urlT);urlT=setTimeout(()=>{try{history.replaceState(null,'',urlActual())}catch(e){}},300)}
/* ---- capas del mapa ---- */
const CAPAS={
  topo:{k:'https://api.maptiler.com/maps/outdoor-v2/256/{z}/{x}/{y}.png?key=',f:'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}',ck:'© MapTiler © colaboradores de OpenStreetMap',cf:'Esri, USGS, NPS, © colaboradores de OpenStreetMap'},
  sat:{k:'https://api.maptiler.com/maps/hybrid/256/{z}/{x}/{y}.jpg?key=',f:'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',ck:'© MapTiler © Maxar y colaboradores de OpenStreetMap',cf:'imágenes © Esri, Maxar, Earthstar Geographics'},
  calles:{k:'https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}.png?key=',f:'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}',ck:'© MapTiler © colaboradores de OpenStreetMap',cf:'Esri, HERE, Garmin, © colaboradores de OpenStreetMap'}
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
}else{$('.attr').textContent='No se pudo cargar el mapa base. Senderos: © colaboradores de OpenStreetMap (noviembre de 2026).';$('#capas').hidden=true;$('#zloc').hidden=true}
function ponerCapa(c){
  if(!map)return; capaAct=c; const d=CAPAS[c];
  if(capaLyr)map.removeLayer(capaLyr);
  capaLyr=new CapaSinChile(CLAVE?d.k+encodeURIComponent(CLAVE):d.f,{maxZoom:17,maxNativeZoom:17}).addTo(map);
  $('.attr').innerHTML='Mapa base: '+(CLAVE?d.ck:d.cf)+'. Senderos: © colaboradores de OpenStreetMap (noviembre de 2026).';
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
  if(!(ev.ctrlKey||ev.metaKey)){hint('Usá Ctrl + rueda del mouse para hacer zoom en el mapa');return}
  ev.preventDefault();const p=pt(ev);zoom(ev.deltaY>0?1.2:1/1.2,p.x,p.y)},{passive:false});
/* Celular: un dedo baja la página, dos dedos mueven y acercan el mapa. */
svg.addEventListener('touchmove',ev=>{if(ev.touches.length>=2)ev.preventDefault();else hint('Usá dos dedos para mover el mapa')},{passive:false});
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
  if(!n)v.querySelector('span').textContent=(modoTv()?'Ninguna travesía cumple estos filtros.':'Ningún tramo cumple estos filtros.')+(SEL.hab.has('cerrado')?'':' Probá tildar «Cerrado» en Habilitado.')}
$('#vreset').onclick=()=>{FILT.forEach(f=>SEL[f.id]=new Set(DEF[f.id]||f.op.map(o=>o[0])));paint();ajustarAFiltros()};
/* cualquier cambio de filtro llama a ajustarAFiltros (ver paintFiltros) */

/* ================= BÚSQUEDA ================= */
const sinAcento=s=>String(s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
const TIPO_N={ref:'Refugio',acc:'Acceso',pto:'Punto de paso',lag:'Laguna',cum:'Cumbre'};
const IDX=[
  ...Object.entries(N).map(([id,n])=>({k:'n',id,txt:sinAcento(n.n+' '+(n.s||'')),n:n.n,s:[TIPO_N[n.t],n.s&&!/\d/.test(n.s)?n.s:''].filter(Boolean).join(' · '),o:n.t==='ref'?0:1})),
  ...TV.map(v=>({k:'v',id:v.id,txt:sinAcento(v.n+' '+v.s),n:v.n,s:'Travesía de '+v.nd+' días · '+v.s,o:2})),
  ...T.map(t=>({k:'t',id:t.id,txt:sinAcento(tName(t)+' '+(t.via||'')),n:tName(t),s:'Tramo'+(t.via?' · por '+t.via:''),o:3}))];
const q=$('#q'),qres=$('#qres'); let qsel=-1,qlist=[];
function buscar(){
  const t=sinAcento(q.value.trim()); qsel=-1;
  if(t.length<2){qlist=[];}else{
    qlist=IDX.map(it=>{const i=it.txt.indexOf(t);return i<0?null:[it,(i===0||it.txt[i-1]===" "?0:1)*10+it.o]}).filter(Boolean)
      .sort((a,b)=>a[1]-b[1]||a[0].n.localeCompare(b[0].n,'es')).slice(0,8).map(x=>x[0])}
  qres.innerHTML=qlist.length?qlist.map((it,i)=>`<li role="option" id="qo${i}" data-i="${i}"><b>${esc(it.n)}</b><span>${esc(it.s)}</span></li>`).join(''):(t.length>=2?'<li class="vacio-q">Sin resultados</li>':'');
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
  if(!navigator.geolocation||!map){hint('Este navegador no puede darte tu ubicación',2500);return}
  navigator.geolocation.getCurrentPosition(p=>{
    const ll=L.latLng(p.coords.latitude,p.coords.longitude);
    if(!LIMITES.contains(ll)){hint('Estás fuera del área del mapa',2500);return}
    const c=llImg(ll.lat,ll.lng);
    if(!YO){YO=el('g',{class:'yo'},svg.firstChild);el('circle',{r:16,class:'yo-h'},YO);el('circle',{r:6.5,class:'yo-d'},YO)}
    YO.style.transform=`translate(${c.x}px,${c.y}px) scale(var(--u))`;
    map.setView(ll,Math.max(map.getZoom(),12),{animate:false})},
  e=>hint(e.code===1?'No diste permiso para usar tu ubicación':'No se pudo obtener tu ubicación',2500),
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
  return `<?xml version="1.0" encoding="UTF-8"?>\n<gpx version="1.1" creator="Mapu Mapa" xmlns="http://www.topografix.com/GPX/1/1">\n<metadata><name>${xml(nombre)}</name><desc>Traza de OpenStreetMap, sin verificar en el terreno. No la uses como única guía para navegar.</desc></metadata>\n`
   +wpts.map(n=>{const [la,lo]=imgLat(n.x,n.y);return `<wpt lat="${la.toFixed(6)}" lon="${lo.toFixed(6)}"><ele>${Math.round(n.ele)}</ele><name>${xml(n.n)}</name></wpt>`}).join('\n')+'\n'
   +trks.map(k=>`<trk><name>${xml(k.n)}</name>${k.segs.map(s=>`<trkseg>${s.map(p=>`<trkpt lat="${p[0].toFixed(6)}" lon="${p[1].toFixed(6)}"><ele>${Math.round(p[2])}</ele></trkpt>`).join('')}</trkseg>`).join('')}</trk>`).join('\n')+'\n</gpx>\n'}
function bajarGpx(nombre,texto){
  const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([texto],{type:'application/gpx+xml'}));
  a.download=sinAcento(nombre).replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')+'.gpx';
  document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(a.href),2000)}
const gpxTramo=(t,inv)=>{const A=inv?t.b:t.a,B=inv?t.a:t.b;bajarGpx(tName(t),gpxTexto(tName(t),[{n:tName(t),segs:[ptsGpx(t,inv&&!t.rt)]}],[N[A],N[B]]))};
const gpxTv=v=>{const O=orient(v);
  const trks=v.dd.map((d,i)=>({n:`Día ${i+1}: ${kn(N[d.from])} a ${kn(N[d.to])}`,segs:d.O.filter(([t])=>t.d).map(([t,a])=>ptsGpx(t,t.a!==a))}));
  const ids=[];const w=[];O.forEach(([t,a,b])=>{[a,b].forEach(i=>{if(!ids.includes(i)){ids.push(i);w.push(N[i])}})});
  bajarGpx(v.n,gpxTexto(v.n,trks,w))};

/* ================= ARRANQUE ================= */
build(); avisos(); home(); paint(); fit();
{ const V=(HASH.get('v')||'').split(',').map(Number);   // vista guardada en el enlace
  if(map&&V.length===3&&V.every(Number.isFinite)){map.setView([V[0],V[1]],V[2],{animate:false});apply()}
  const S=(HASH.get('s')||'').split('.'),sid=S.slice(1).join('.');
  if((S[0]==='t'&&tById[sid])||(S[0]==='n'&&N[sid])||(S[0]==='v'&&TV.find(v=>v.id===sid))){rev=HASH.get('rev')==='1';go(S[0],sid,true,'mapa')}}
