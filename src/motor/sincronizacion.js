/* ========= Sincronización con Firebase (proyecto pulpito-pos, colección «colibri») =========
   Cada familia guarda un documento colibri/{uid} con sus niños y su avance.
   Al unir dispositivos nunca se pierde avance: se conserva lo mejor de cada lección. */
const FBCFG={apiKey:"AIzaSyC4DpdS49DUpKBT2agRdLaS-na9vBh0DGY",authDomain:"pulpito-pos.firebaseapp.com",projectId:"pulpito-pos",storageBucket:"pulpito-pos.firebasestorage.app",messagingSenderId:"65372699949",appId:"1:65372699949:web:a33f42c1e31032c62a27a4"};
const FBV="https://www.gstatic.com/firebasejs/10.12.2/";
const SYNC={state:"off",user:null,ref:null,unsub:null,timer:null,err:"",last:0,busy:false};
const isDefaultProfile=p=>p&&p.name==="Explorador"&&!Object.keys(p.prog||{}).length&&!p.reto;
function mergeProfiles(L,R,del){const dels=new Set(del||[]),map={};
 const clone=o=>JSON.parse(JSON.stringify(o));
 [...(R||[]),...(L||[])].forEach(p=>{if(!p||!p.id||dels.has(p.id))return;const m=map[p.id];if(!m){map[p.id]=clone(p);map[p.id].prog=map[p.id].prog||{};return}
  if((p.upd||0)>(m.upd||0)){m.name=p.name;m.ci=p.ci;m.grade=p.grade;m.upd=p.upd}
  m.rst=Math.max(m.rst||0,p.rst||0);m.reto=Math.max(m.reto||0,p.reto||0);
  for(const[k,v]of Object.entries(p.prog||{})){const w=m.prog[k];m.prog[k]=w?{done:!!(w.done||v.done),stars:Math.max(w.stars||0,v.stars||0),last:Math.max(w.last||0,v.last||0),n:Math.max(w.n||0,v.n||0)}:clone(v)}});
 Object.values(map).forEach(m=>{if(m.rst)for(const[k,v]of Object.entries(m.prog))if((v.last||0)<=m.rst)delete m.prog[k]});
 return Object.values(map)}
function syncApply(remote){const R=(remote&&remote.profiles)||[],del=[...new Set([...(S.del||[]),...((remote&&remote.del)||[])])];
 let L=S.profiles;if(R.length&&L.length===1&&isDefaultProfile(L[0]))L=[];
 const before=JSON.stringify(S.profiles);let M=mergeProfiles(L,R,del);if(!M.length){const p=newProfile("Explorador",0);M=[p]}
 S.profiles=M;S.del=del;if(!M.some(p=>p.id===S.cur))S.cur=M[0].id;
 const changed=before!==JSON.stringify(S.profiles);try{localStorage.setItem(KEY,JSON.stringify(S))}catch(e){}return changed}
function syncPush(now){if(SYNC.state!=="on"||!SYNC.ref)return;clearTimeout(SYNC.timer);const go=()=>{SYNC.ref.set({v:1,profiles:JSON.parse(JSON.stringify(S.profiles)),del:S.del||[],upd:Date.now(),email:SYNC.user&&SYNC.user.email||""}).then(()=>{SYNC.last=Date.now();SYNC.err=""}).catch(e=>{SYNC.err=syncMsg(e)})};if(now)go();else SYNC.timer=setTimeout(go,1500)}
function syncMsg(e){const c=(e&&e.code)||"",m=(e&&e.message)||"";
 if(/referer|referrer/i.test(m))return"La clave de Firebase no permite esta página. En Google Cloud → Credenciales, agrega pardaillan4-alt.github.io a los sitios permitidos de la clave.";
 return({"auth/invalid-credential":"Correo o contraseña incorrectos.","auth/wrong-password":"Correo o contraseña incorrectos.","auth/user-not-found":"Ese correo no tiene cuenta en Firebase.","auth/invalid-email":"Revisa el correo.","auth/too-many-requests":"Demasiados intentos. Espera unos minutos.","auth/network-request-failed":"Sin internet en este momento. Se sincronizará al volver la conexión.","auth/operation-not-allowed":"Activa «Correo/Contraseña» en Firebase → Authentication.","auth/unauthorized-domain":"Agrega pardaillan4-alt.github.io en Firebase → Authentication → Settings → Authorized domains.","permission-denied":"Firebase no deja guardar todavía: falta agregar la regla de la Escuelita en Firestore → Reglas.","unavailable":"Sin internet en este momento. Se sincronizará al volver la conexión."})[c]||("No se pudo sincronizar ("+(c||m)+").")}
function loadScript(src){return new Promise((ok,no)=>{const s=document.createElement("script");s.src=src;s.onload=ok;s.onerror=()=>no({code:"sdk"});document.head.appendChild(s)})}
async function fbLoad(){if(window.firebase&&firebase.firestore&&firebase.auth)return;if(!/^https?:$/.test(location.protocol))throw{code:"sdk"};for(const f of["firebase-app-compat.js","firebase-auth-compat.js","firebase-firestore-compat.js"])await loadScript(FBV+f);if(!firebase.apps.length)firebase.initializeApp(FBCFG)}
function syncRefresh(){if(MODE==="parents")parents();else drawTop()}
async function syncConnect(user){SYNC.user=user;const db=firebase.firestore();try{await db.enablePersistence({synchronizeTabs:true})}catch(e){}
 SYNC.ref=db.collection("colibri").doc(user.uid);SYNC.state="on";SYNC.err="";
 try{const snap=await SYNC.ref.get();syncApply(snap.exists?snap.data():null);syncPush(true)}catch(e){SYNC.err=syncMsg(e)}
 if(SYNC.unsub)SYNC.unsub();SYNC.unsub=SYNC.ref.onSnapshot(s=>{if(s.metadata.hasPendingWrites||!s.exists)return;SYNC.last=Date.now();if(syncApply(s.data())){syncPush()}syncRefresh()},e=>{SYNC.err=syncMsg(e);syncRefresh()});
 syncRefresh()}
async function syncBoot(){if(!S.sync)return;SYNC.state="wait";try{await fbLoad();const u=await new Promise(r=>{const un=firebase.auth().onAuthStateChanged(x=>{un();r(x)})});if(u)await syncConnect(u);else{SYNC.state="off";S.sync=false;save()}}catch(e){SYNC.state="off";SYNC.err=e.code==="sdk"?"":syncMsg(e)}syncRefresh()}
async function syncLogin(email,pw){SYNC.email=email;SYNC.busy=true;SYNC.err="";syncRefresh();try{await fbLoad();const c=await firebase.auth().signInWithEmailAndPassword(email,pw);S.sync=true;save();await syncConnect(c.user)}catch(e){SYNC.err=e.code==="sdk"?"La sincronización solo funciona en la versión publicada en GitHub Pages o en la app instalada.":syncMsg(e)}SYNC.busy=false;syncRefresh()}
async function syncLogout(){try{if(SYNC.unsub)SYNC.unsub();await firebase.auth().signOut()}catch(e){}Object.assign(SYNC,{state:"off",user:null,ref:null,unsub:null,err:""});S.sync=false;save();syncRefresh()}
function syncPanel(){const web=/^https?:$/.test(location.protocol);let h=`<section class="panel" id="syncp"><h2>Guardar el avance en la nube</h2>`;
 if(SYNC.state==="on")h+=`<p class="syncok">${art("cloud",28)}<span>Conectado como <b>${esc(SYNC.user.email||"")}</b>. El avance de ${S.profiles.length===1?"tu niño":"tus "+S.profiles.length+" niños"} se guarda solo y aparece en todos los dispositivos donde entres con este correo.${SYNC.last?` Última sincronización: ${new Date(SYNC.last).toLocaleTimeString("es-MX",{hour:"2-digit",minute:"2-digit",hour12:false})}.`:""}</span></p><div class="row"><button class="btn ghost" data-act="syncnow" style="--sc:var(--mat)">Sincronizar ahora</button><button class="btn ghost" data-act="synclogout" style="--sc:var(--bad)">Desconectar este dispositivo</button></div>`;
 else if(SYNC.state==="wait")h+=`<p>Conectando…</p>`;
 else h+=`<p>Entra con el correo y la contraseña de tu cuenta de Firebase (la misma del punto de venta, o una nueva creada en Firebase → Authentication). Haz lo mismo en cada celular o tableta y todos verán a los mismos niños con el mismo avance.</p><form id="syncf" class="addp"><label for="semail">Correo</label><input id="semail" type="email" autocomplete="username" required value="${esc(SYNC.email||"")}"><label for="spw">Contraseña</label><input id="spw" type="password" autocomplete="current-password" required><div class="row"><button class="btn" type="submit" style="--sc:var(--mat)"${SYNC.busy?" disabled":""}>${SYNC.busy?"Conectando…":"Conectar"}</button></div></form>${web?"":`<p class="note">Desde aquí no se puede sincronizar: abre la app publicada en GitHub Pages o la app instalada.</p>`}`;
 if(SYNC.err)h+=`<p class="gate-msg" role="alert">${esc(SYNC.err)}</p>`;
 return h+`<p class="note">Los avances que ya tengas en este dispositivo se suman a los de la nube; ninguna estrella se pierde.</p></section>`}
Object.assign(ACT,{syncnow:()=>{syncPush(true);setTimeout(syncRefresh,800)},synclogout:()=>syncLogout()});
if(typeof document!=="undefined")document.addEventListener("submit",e=>{if(e.target.id==="syncf"){e.preventDefault();syncLogin($("#semail").value.trim(),$("#spw").value)}});
