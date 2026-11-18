/* ---------- NIP de papás ----------
   La zona de papás se protege con un NIP de 4 números que crean los papás (antes era una multiplicación que un niño
   que sabe las tablas podía resolver). Mientras no haya NIP se pide una multiplicación más difícil.
   Se guarda solo una huella del NIP (nunca el número) en S.nip = {h, t}; viaja con la sincronización de la nube.
   «Olvidé mi NIP»: una multiplicación de dos cifras por dos cifras borra el NIP para crear uno nuevo. */
const NIPLOCK={n:0,until:0};
function nipHash(v){return h32("colibri-nip:"+v)}
function nipOn(){return !!(S.nip&&S.nip.h)}
function nipWeak(v){return /^(\d)\1{3}$/.test(v)||"0123456789".includes(v)||"9876543210".includes(v)}
gate=function(){GATE=nipOn()?{mode:"nip",v:"",msg:""}:{mode:"mul",v:"",msg:"",a:rnd(12,19),b:rnd(6,9)};drawGate()};
drawGate=function(){const G=GATE,dots=G.mode!=="mul"&&G.mode!=="rec";
 const head={nip:`<h2>Zona de papás</h2><p>Escribe el NIP de papás.</p>`,
  mul:`<h2>Zona de papás</h2><p>Para entrar, resuelve: <b>${G.a} × ${G.b}</b></p><p class="note">Al entrar podrán crear un NIP de papás para que solo ustedes abran esta zona.</p>`,
  rec:`<h2>¿Olvidaste el NIP?</h2><p>Resuelve: <b>${G.a} × ${G.b}</b></p><p class="note">Si aciertas, se borra el NIP y podrás crear uno nuevo.</p>`,
  "new":`<h2>Nuevo NIP de papás</h2><p>Escribe 4 números que tus hijos no sepan.</p>`,
  new2:`<h2>Nuevo NIP de papás</h2><p>Escríbelo otra vez para confirmar.</p>`}[G.mode];
 const box=dots?`<div class="numbox nipbox" aria-label="${G.v.length} de 4 números">${"●".repeat(G.v.length)}${"○".repeat(4-G.v.length)}</div>`:`<div class="numbox">${G.v||"&nbsp;"}</div>`;
 sheet(`${head}${box}<p class="gate-msg" role="status">${G.msg||""}</p><div class="keypad">${[1,2,3,4,5,6,7,8,9].map(k=>`<button class="key" data-act="gk" data-v="${k}">${k}</button>`).join("")}<button class="key alt" data-act="gk" data-v="del">Borrar</button><button class="key" data-act="gk" data-v="0">0</button><button class="key go" data-act="gk" data-v="ok" aria-label="Aceptar">✓</button></div>${G.mode==="nip"?`<button class="btn ghost" data-act="nipolv" style="--sc:var(--mat)">Olvidé el NIP</button>`:""}<button class="btn ghost" data-act="close" style="--sc:var(--mat)">Cancelar</button>`)};
function nipEnter(msg){closeSheet();PCONF=null;parents();scrollTo(0,0);if(msg)setTimeout(()=>{const n=document.querySelector("#nippanel .gate-msg");if(n)n.textContent=msg},30)}
function nipSave(h){S.nip={h:h,t:Date.now()};save();try{syncPush(true)}catch(e){}}
function nipCheck(){const G=GATE,v=G.v;
 if(G.mode==="mul"||G.mode==="rec"){if(+v===G.a*G.b){if(G.mode==="rec")nipSave(null);nipEnter(G.mode==="rec"?"Se borró el NIP. Crea uno nuevo aquí abajo.":"");return}G.v="";G.msg="Esa no es. Inténtalo otra vez.";return drawGate()}
 if(v.length<4){G.msg="El NIP tiene 4 números.";return drawGate()}
 if(G.mode==="nip"){if(Date.now()<NIPLOCK.until){G.v="";G.msg=`Demasiados intentos. Espera ${Math.ceil((NIPLOCK.until-Date.now())/1000)} segundos.`;return drawGate()}
  if(nipHash(v)===S.nip.h){NIPLOCK.n=0;nipEnter("");return}
  NIPLOCK.n++;if(NIPLOCK.n>=5){NIPLOCK.n=0;NIPLOCK.until=Date.now()+60000}G.v="";G.msg="NIP incorrecto.";return drawGate()}
 if(G.mode==="new"){if(nipWeak(v)){G.v="";G.msg="Es muy fácil de adivinar. Elige otro.";return drawGate()}G.first=v;G.v="";G.msg="";G.mode="new2";return drawGate()}
 if(G.mode==="new2"){if(v===G.first){nipSave(nipHash(v));nipEnter("Listo: desde ahora se pedirá el NIP para entrar.");return}G.mode="new";G.v="";G.msg="No coinciden. Empieza otra vez.";return drawGate()}}
Object.assign(ACT,{
 gk:v=>{const G=GATE;if(v==="del")G.v=G.v.slice(0,-1);else if(v==="ok")return nipCheck();else{const max=G.mode==="mul"||G.mode==="rec"?4:4;if(G.v.length<max)G.v+=v;if(G.mode!=="mul"&&G.mode!=="rec"&&G.v.length===4)return nipCheck()}drawGate()},
 nipolv:()=>{GATE={mode:"rec",v:"",msg:"",a:rnd(23,89),b:rnd(13,49)};drawGate()},
 nipset:()=>{GATE={mode:"new",v:"",msg:""};drawGate()},
 nipdel:()=>{PCONF="nipdel";parents()},
 nipdelok:()=>{nipSave(null);PCONF=null;parents()}});
/* Panel en la zona de papás */
{const _par=parents;parents=function(){_par.apply(this,arguments);try{const lead=document.querySelector("p.lead");if(!lead)return;
 const on=nipOn();lead.insertAdjacentHTML("afterend",`<section class="panel" id="nippanel"><h2>NIP de papás</h2>${on?`<p>Activo: para entrar a esta zona se pide el NIP de 4 números.</p><div class="row"><button class="btn" data-act="nipset" style="--sc:var(--mat)">Cambiar NIP</button>${PCONF==="nipdel"?`<button class="btn warn" data-act="nipdelok">Sí, quitar el NIP</button><button class="btn ghost" data-act="nodel" style="--sc:var(--mat)">No</button>`:`<button class="btn ghost" data-act="nipdel" style="--sc:var(--mat)">Quitar NIP</button>`}</div>`:`<p>Protege esta zona con un NIP de 4 números para que los niños no cambien el plan, el progreso ni los ajustes.</p><div class="row"><button class="btn" data-act="nipset" style="--sc:var(--mat)">Crear NIP</button></div>`}<p class="gate-msg" role="status"></p><p class="note">Si tienen la nube conectada, el NIP se usa en todos sus dispositivos.</p></section>`)}catch(e){}}}
/* El NIP viaja con la sincronización: gana el cambio más reciente (crear, cambiar o quitar) */
{const _cp=cloudPayload;cloudPayload=function(){const p=_cp.apply(this,arguments);if(S.nip&&S.nip.t)p.nip={h:S.nip.h||null,t:S.nip.t};return p};
 const _sa=syncApply;syncApply=function(r){if(r&&r.nip&&r.nip.t&&(r.nip.t>((S.nip&&S.nip.t)||0)))S.nip={h:r.nip.h||null,t:r.nip.t};return _sa.apply(this,arguments)}}
