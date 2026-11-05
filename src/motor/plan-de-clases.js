/* ========= Plan de clases, calendario escolar y exámenes por unidad =========
   S.plan = {start, end, days:[1..5], hol, off:[fechas], upd}
   Cada materia tiene días fijos en la semana; sus lecciones (y un examen al final de cada unidad)
   se reparten en esas sesiones entre el inicio y el fin del ciclo.
   Cada lección ocupa varias sesiones: lección nueva → hoja del cuaderno → práctica y repaso. */
const WEEKSUB={1:["mat","esp","cie","rel"],2:["mat","esp","his","com"],3:["mat","esp","cie","civ"],4:["mat","esp","his","rel"],5:["mat","esp","civ","com"],6:["mat","esp","cie","his"],0:["rel","com"]};
const DIAS=["domingo","lunes","martes","miércoles","jueves","viernes","sábado"];
const ds=d=>{const x=new Date(d);return x.getFullYear()+"-"+String(x.getMonth()+1).padStart(2,"0")+"-"+String(x.getDate()).padStart(2,"0")};
const pd=s=>{const[y,m,d]=s.split("-").map(Number);return new Date(y,m-1,d,12)};
const addD=(d,n)=>{const x=new Date(d);x.setDate(x.getDate()+n);return x};
function easter(y){const a=y%19,b=Math.floor(y/100),c=y%100,d=Math.floor(b/4),e=b%4,f=Math.floor((b+8)/25),g=Math.floor((b-f+1)/3),h=(19*a+b-d-g+15)%30,i=Math.floor(c/4),k=c%4,l=(32+2*e+2*i-h-k)%7,m=Math.floor((a+11*h+22*l)/451),mo=Math.floor((h+l-7*m+114)/31),da=((h+l-7*m+114)%31)+1;return new Date(y,mo-1,da,12)}
function nthMon(y,m,n){const d=new Date(y,m,1,12);while(d.getDay()!==1)d.setDate(d.getDate()+1);d.setDate(d.getDate()+7*(n-1));return d}
function holidays(y){const H=[];const add=(d,t)=>H.push([ds(d),t]);const rng=(a,b,t)=>{for(let d=new Date(a);d<=b;d=addD(d,1))add(d,t)};
 add(new Date(y,8,16,12),"Día de la Independencia");add(new Date(y,10,2,12),"Fieles Difuntos");add(nthMon(y,10,3),"Día de la Revolución");add(new Date(y,11,12,12),"Nuestra Señora de Guadalupe");
 rng(new Date(y,11,21,12),new Date(y+1,0,6,12),"Vacaciones de Navidad");add(nthMon(y+1,1,1),"Día de la Constitución");add(nthMon(y+1,2,3),"Natalicio de Benito Juárez");
 const E=easter(y+1);rng(addD(E,-6),addD(E,7),"Vacaciones de Semana Santa y Pascua");add(new Date(y+1,4,1,12),"Día del Trabajo");add(new Date(y+1,4,5,12),"Batalla de Puebla");add(new Date(y+1,4,15,12),"Día del Maestro");
 return H}
function planCfg(){if(!S.plan){const t=new Date(),y=cicloOf(t);S.plan={start:ds(t),end:ds(new Date(y+1,6,15,12)),days:[1,2,3,4,5],hol:true,off:[],upd:Date.now()};save()}return S.plan}
let PCACHE={};
function schoolDays(){const c=planCfg(),key=JSON.stringify(c);if(PCACHE.k===key)return PCACHE;const off=new Map();
 if(c.hol){const y0=cicloOf(pd(c.start));for(const y of[y0-1,y0,y0+1])holidays(y).forEach(([d,t])=>off.set(d,t))}(c.off||[]).forEach(d=>off.set(d,"Día libre"));
 const days=[];for(let d=pd(c.start),e=pd(c.end);d<=e;d=addD(d,1)){if(c.days.includes(d.getDay())&&!off.has(ds(d)))days.push(ds(d))}
 PCACHE={k:key,days,off,plans:{}};return PCACHE}
function subjItems(s){const it=[];s.units.forEach((u,ui)=>{u.ls.forEach(l=>it.push({l}));it.push({exam:ui,u})});return it}
function gradePlan(g){const P=schoolDays();if(P.plans[g])return P.plans[g];const out={};
 gSubj(g).forEach(s=>{const c=s.c||s.id,sess=P.days.map((d,i)=>[d,i]).filter(([d])=>(WEEKSUB[pd(d).getDay()]||[]).includes(c)),items=subjItems(s),N=items.length,M=sess.length,map={};
  if(!M){out[c]={s,map,first:{}};return}
  const first={};
  if(M>=N){let prev=-1,j=0;sess.forEach(([d],i)=>{const k=Math.floor(i*N/M);j=k===prev?j+1:0;prev=k;const it=items[k];map[d]=[{...it,kind:it.exam!=null?(j?"repexam":"exam"):j===0?"new":j===1?"cuad":"prac"}];if(j===0&&it.l)first[it.l.id]=d})}
  else sess.forEach(([d],i)=>{const a=Math.floor(i*N/M),b=Math.floor((i+1)*N/M);map[d]=items.slice(a,Math.max(b,a+1)).map(it=>({...it,kind:it.exam!=null?"exam":"new"}));map[d].forEach(it=>{if(it.l)first[it.l.id]=d})});
  out[c]={s,map,first}});
 P.plans[g]=out;return out}
function todayStr(){return ds(new Date())}
function planDay(g,d){const gp=gradePlan(g),r=[];for(const c of Object.keys(gp)){const x=gp[c].map[d];if(x)x.forEach(it=>r.push({s:gp[c].s,...it}))}return r}
function nextSchoolDay(d){const D=schoolDays().days;return D.find(x=>x>=d)||null}
function behind(p,g){const gp=gradePlan(g),t=todayStr(),res=[];for(const c of Object.keys(gp)){const{ s,first}=gp[c];const exp=Object.entries(first).filter(([,d])=>d<t).map(([id])=>id),miss=exp.filter(id=>!(p.prog[id]&&p.prog[id].done));res.push({s,exp:exp.length,miss:miss.length,next:miss[0]})}return res}
const KIND={new:"Lección nueva",cuad:"Hoja del cuaderno",prac:"Practicar otra vez",exam:"Examen de la unidad",repexam:"Repasar para el examen"};
function itemDone(p,it,d){if(it.exam!=null){const e=(p.exam||{})[examKey(it.s,it.exam)];return!!e}const pr=p.prog[it.l.id];if(it.kind==="new")return!!(pr&&pr.done);if(it.kind==="cuad")return!!((p.ck||{})[d+":"+it.l.id]);if(it.kind==="prac")return!!(pr&&pr.last&&ds(pr.last)===d);return false}
function itemBtn(it,d){if(it.exam!=null)return`<button class="btn" data-act="exam" data-v="${it.s.id}:${it.exam}">Hacer el examen</button>`;
 if(it.kind==="cuad"){const pg=CUADP[it.l.id];return`<a class="btn ghost" href="${CUAD}Cuaderno-${it.s.g||1}o-primaria.pdf#page=${pg}" target="_blank" rel="noopener">Cuaderno, pág. ${pg}</a><button class="btn" data-act="ckc" data-v="${d}:${it.l.id}">Ya la hice</button>`}
 if(it.kind==="prac")return`<button class="btn" data-act="openp" data-v="${it.l.id}">Practicar</button>`;
 return`<button class="btn" data-act="open" data-v="${it.l.id}">Empezar</button>`}
function todayCard(){const p=me(),g=p.grade||1,t=todayStr(),P=schoolDays(),isSchool=P.days.includes(t),d=isSchool?t:nextSchoolDay(t);
 const fecha=x=>{const y=pd(x);return DIAS[y.getDay()]+" "+y.getDate()+" de "+y.toLocaleDateString("es-MX",{month:"long"})};
 if(!d)return`<h2 class="sec">Plan de hoy</h2><p class="lead">El ciclo escolar del calendario ya terminó. Ajusta las fechas en la Zona de papás → Plan de clases.</p>`;
 const items=planDay(g,d),idx=P.days.indexOf(d)+1,B=behind(p,g).filter(x=>x.miss>0),off=P.off.get(t);
 let h=`<div class="gradebar"><h2 class="sec">${isSchool?"Hoy te toca":"Próxima clase: "+fecha(d)}</h2><span class="pmeta">Día ${idx} de ${P.days.length} del ciclo</span></div>`;
 if(!isSchool)h+=`<p class="lead">${off?`Hoy es <b>${off}</b>: no hay clases.`:"Hoy no hay clases."} ¡Descansa, juega y reza en familia! Si quieres adelantar, aquí está lo de la próxima clase.</p>`;
 h+=`<div class="plan">${items.map(it=>{const s=it.s,done=itemDone(p,it,d);return`<div class="pcard${done?" pdone":""}" style="${sv(s)}"><div class="pc-h">${sicon(s)}<span>${s.n}</span>${done?`<span class="okmark" aria-label="Terminado">✓</span>`:""}</div><p class="pk">${KIND[it.kind]}</p><p class="pc-l">${it.exam!=null?esc(it.u.t):esc(it.l.t)}</p><div class="row">${itemBtn(it,d)}</div></div>`}).join("")}</div>`;
 if(B.length)h+=`<p class="note behind">Lecciones atrasadas según el plan: ${B.map(x=>`<b>${x.s.n}</b> ${x.miss}`).join(" · ")}. <button class="mini-btn" data-act="open" data-v="${B[0].next}">Ponerme al día</button></p>`;
 return h}
/* ---- Vista del plan (papás) ---- */
let PWEEK=0;
function weekStart(off){const d=new Date();d.setHours(12,0,0,0);const dow=(d.getDay()+6)%7;d.setDate(d.getDate()-dow+7*off);return d}
function planView(){LS=null;begin();MODE="plan";const c=planCfg(),p=me(),g=p.grade||1,P=schoolDays(),ws=weekStart(PWEEK),wd=[...Array(7)].map((_,i)=>ds(addD(ws,i))).filter(d=>c.days.includes(pd(d).getDay())),B=behind(p,g);
 const offList=(c.hol?[...P.off.entries()].filter(([d,t])=>t!=="Día libre"&&d>=c.start&&d<=c.end):[]).reduce((a,[d,t])=>{const l=a[a.length-1];if(l&&l.t===t&&ds(addD(pd(l.b),1))===d)l.b=d;else a.push({a:d,b:d,t});return a},[]);
 const fmt=x=>pd(x).toLocaleDateString("es-MX",{day:"numeric",month:"short"});
 app(`<button class="back" data-act="parents">${ui("back")} Zona de papás</button><h1>Plan de clases</h1><p class="lead">Las lecciones de ${gName(g)} grado repartidas en el ciclo escolar. Matemáticas y Español van diario; las demás materias, dos días por semana.</p>
 <section class="panel"><h2>Cómo va ${esc(p.name)}</h2><div class="tscroll"><table class="prog plst"><thead><tr><th>Materia</th><th>Lecciones a la fecha</th><th>Estado</th></tr></thead><tbody>${B.map(x=>`<tr><td><span class="sw" style="background:var(--${x.s.c||x.s.id})"></span>${x.s.n}</td><td class="nm">${x.exp}</td><td>${x.miss?`<span class="chip bad">${x.miss} atrasada${x.miss>1?"s":""}</span>`:`<span class="chip ok">Al día</span>`}</td></tr>`).join("")}</tbody></table></div></section>
 <section class="panel"><div class="wknav"><button class="mini-btn" data-act="pweek" data-v="-1" aria-label="Semana anterior">‹ Anterior</button><h2>Semana del ${ws.getDate()} de ${ws.toLocaleDateString("es-MX",{month:"long"})}</h2><button class="mini-btn" data-act="pweek" data-v="1" aria-label="Semana siguiente">Siguiente ›</button></div>
 <div class="wkgrid">${wd.map(d=>{const its=P.days.includes(d)?planDay(g,d):[],off=P.off.get(d);return`<div class="wkday${d===todayStr()?" today":""}"><h3>${DIAS[pd(d).getDay()]} ${pd(d).getDate()}</h3>${off?`<p class="note">${off}</p>`:its.length?`<ul>${its.map(it=>`<li style="${sv(it.s)}"><span class="wdot"></span><span><b>${it.s.n}</b> · ${KIND[it.kind]}<br><small>${it.exam!=null?esc(it.u.t):esc(it.l.t)}${it.kind==="cuad"?` (pág. ${CUADP[it.l.id]})`:""}</small></span>${itemDone(p,it,d)?'<span class="okmark">✓</span>':""}</li>`).join("")}</ul>`:`<p class="note">Fuera del ciclo</p>`}</div>`}).join("")}</div></section>
 <section class="panel"><h2>Calendario escolar</h2><form id="planf" class="addp"><div class="row"><label for="pstart">Inicio <input id="pstart" type="date" value="${c.start}"></label><label for="pend">Fin <input id="pend" type="date" value="${c.end}"></label></div>
 <fieldset class="thm"><legend>Días de clase</legend><div class="row">${[1,2,3,4,5,6].map(n=>`<label class="chk"><input type="checkbox" name="pday" value="${n}"${c.days.includes(n)?" checked":""}> ${DIAS[n]}</label>`).join("")}</div></fieldset>
 <label class="chk"><input type="checkbox" id="phol"${c.hol?" checked":""}> Descansar en días festivos y vacaciones de la SEP (Navidad y Semana Santa)</label>
 <div class="row"><button class="btn" type="submit" style="--sc:var(--mat)">Guardar calendario</button></div></form>
 <p><b>${P.days.length} días de clase</b> entre el ${fmt(c.start)} y el ${fmt(c.end)}.</p>
 ${offList.length?`<details><summary>Ver días festivos y vacaciones</summary><ul class="tips">${offList.map(x=>`<li>${fmt(x.a)}${x.a!==x.b?" al "+fmt(x.b):""}: ${x.t}</li>`).join("")}</ul></details>`:""}
 <h3>Días libres de la familia</h3><p class="note">Agrega días sin clase (un viaje, una fiesta patronal, un día de enfermedad). El plan se recorre solo.</p><form id="offf" class="row"><input id="poff" type="date" aria-label="Día libre"><button class="btn ghost" type="submit" style="--sc:var(--mat)">Agregar día libre</button></form>
 ${(c.off||[]).length?`<ul class="tips">${c.off.slice().sort().map(d=>`<li>${fmt(d)} <button class="mini-btn dang" data-act="unoff" data-v="${d}">Quitar</button></li>`).join("")}</ul>`:""}
 <p class="note">Los días festivos siguen el calendario oficial de descanso y las vacaciones de la SEP de forma aproximada; ajústalos con tus días libres.</p></section>`);scrollTo(0,0)}
/* ---- Exámenes por unidad ---- */
const examKey=(s,ui)=>s.id+"-u"+ui;
function startExam(v){const[sid,ui]=v.split(":"),s=SUBJ.find(x=>x.id===sid),u=s&&s.units[+ui];if(!u)return home();const per=Math.max(2,Math.ceil(10/u.ls.length));let list=[];
 u.ls.forEach(l=>{const pool=l.ex.slice();(l.g||[]).forEach(([n,cnt,arg])=>{for(let i=0;i<Math.min(cnt,3);i++){try{pool.push(G[n](arg))}catch(e){}}});shuf(pool).slice(0,per).forEach(e=>list.push(Object.assign(JSON.parse(JSON.stringify(e)),{__lid:l.id})))});
 list=shuf(list).slice(0,10);LS={exam:true,s,l:{t:"Examen: "+u.t},ekey:examKey(s,+ui),ui:+ui,list,i:0,first:0};newEx()}
function examFinish(){const p=me(),tot=LS.list.length,f=LS.first,cal=Math.max(5,Math.round(f/tot*100)/10),k=LS.ekey,old=(p.exam||{})[k];p.exam=p.exam||{};p.exam[k]={cal,best:Math.max(cal,old?old.best||old.cal:0),at:Date.now(),n:(old?old.n||1:0)+1};save();SND.win();
 begin();const s=LS.s,msg=cal>=9?"¡Excelente examen!":cal>=8?"¡Muy buen examen!":cal>=6?"¡Aprobaste! Repasa lo que fallaste.":"Necesitas repasar esta unidad. ¡Tú puedes!";
 app(`<section class="result" style="${sv(s)}">${bird("big")}<p class="eyebrow">${esc(LS.l.t)}</p><h1>${msg}</h1><div class="bigcal${cal<6?" low":""}">${cal.toFixed(1)}</div><p class="lead">Acertaste a la primera <b>${f} de ${tot}</b>. Las preguntas que fallaste se agregaron a tu Repaso del día.</p><div class="row center"><button class="btn ghost" data-act="subj" data-v="${s.id}">Ver la materia</button><button class="btn" data-act="exam" data-v="${s.id}:${LS.ui}">Hacer otra vez</button></div></section>`);scrollTo(0,0);if(cal>=8)confetti();auto(msg)}
function examRow(s,ui){const e=(me().exam||{})[examKey(s,ui)];return`<li><button class="lrow exrow${e?" done":""}" data-act="exam" data-v="${s.id}:${ui}"><span class="num">✎</span><span class="lt">Examen de la unidad ${ui+1}${e?`<em>Calificación: ${e.cal.toFixed(1)}${e.best>e.cal?` · mejor: ${e.best.toFixed(1)}`:""}</em>`:"<em>10 preguntas de toda la unidad</em>"}</span></button></li>`}
function examAvg(p,s,a,b){const L=s.units.map((_,ui)=>(p.exam||{})[examKey(s,ui)]).filter(e=>e&&(!a||inPeriod(monthKey(e.at),a,b)));return L.length?Math.round(L.reduce((x,e)=>x+e.cal,0)/L.length*10)/10:null}
Object.assign(ACT,{exam:v=>startExam(v),openp:v=>{openLesson(v);practice()},ckc:v=>{const p=me();p.ck=p.ck||{};p.ck[v]=Date.now();save();home()},plan:()=>{PWEEK=0;planView()},pweek:v=>{PWEEK+=+v;planView()},unoff:v=>{const c=planCfg();c.off=(c.off||[]).filter(d=>d!==v);c.upd=Date.now();save();planView()}});
if(typeof document!=="undefined")document.addEventListener("submit",e=>{if(e.target.id==="planf"){e.preventDefault();const c=planCfg(),a=$("#pstart").value,b=$("#pend").value,days=[...document.querySelectorAll('input[name="pday"]:checked')].map(x=>+x.value);if(!a||!b||a>b){alertMsg("Revisa las fechas: el inicio debe ir antes del fin.");return}if(!days.length){alertMsg("Elige al menos un día de clase.");return}Object.assign(c,{start:a,end:b,days,hol:$("#phol").checked,upd:Date.now()});save();planView()}
 if(e.target.id==="offf"){e.preventDefault();const v=$("#poff").value;if(!v)return;const c=planCfg();c.off=[...new Set([...(c.off||[]),v])];c.upd=Date.now();save();planView()}});
function alertMsg(m){const f=$("#planf");if(!f)return;let n=f.querySelector(".gate-msg");if(!n){n=document.createElement("p");n.className="gate-msg";n.setAttribute("role","alert");f.appendChild(n)}n.textContent=m}
