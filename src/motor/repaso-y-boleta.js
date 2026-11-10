/* ========= Repaso inteligente, temas para reforzar y boleta =========
   Por cada niño se guarda:
   p.tp[leccion][mes] = {t: respondidas, f: correctas a la primera, u: última vez}
   p.err[clave] = {ex, lid, b: caja 0-3, due: cuándo repasar, n: veces fallada, last, m: dominada}
   El repaso usa cajas: si acierta, la pregunta vuelve en 1, 3 y 7 días; a la cuarta queda dominada. */
const DAY=864e5,BOXD=[1,3,7],REV_MAX=10;
const dayStart=t=>{const d=new Date(t);d.setHours(0,0,0,0);return d.getTime()};
const monthKey=t=>{const d=new Date(t);return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")};
function errKey(lid,q){return lid+"|"+strip(q).slice(0,90)}
function logStat(p,lid,ok){if(!lid)return;p.tp=p.tp||{};const m=monthKey(Date.now()),L=p.tp[lid]=p.tp[lid]||{},x=L[m]=L[m]||{t:0,f:0,u:0};x.t++;if(ok)x.f++;x.u=Date.now()}
function logFirst(ok){if(!LS||LS.reto)return;const p=me(),ex=X.ex,now=Date.now();
 if(LS.review){const k=ex.__k,e=p.err&&p.err[k];logStat(p,ex.__lid,ok);if(!e)return;e.last=now;
  if(ok){if(e.b>=BOXD.length){e.m=true;e.due=0}else{e.due=dayStart(now)+BOXD[e.b]*DAY;e.b++}}else{e.b=0;e.n++;e.due=dayStart(now)+DAY}return}
 const lid=ex.__lid||(LS.l&&LS.l.id);logStat(p,lid,ok);if(ok)return;
 p.err=p.err||{};const k=errKey(lid,ex.q),e=p.err[k];const clean=JSON.parse(JSON.stringify(ex));delete clean.__k;delete clean.__lid;
 if(e&&!e.m){e.n++;e.b=0;e.due=dayStart(now)+DAY;e.last=now}else p.err[k]={ex:clean,lid,b:0,due:dayStart(now)+DAY,n:(e?e.n:0)+1,last:now};
 pruneErr(p)}
function pruneErr(p){const E=Object.entries(p.err||{});if(E.length<=220)return;E.filter(([,e])=>e.m).sort((a,b)=>a[1].last-b[1].last).slice(0,E.length-200).forEach(([k])=>delete p.err[k])}
function dueList(p){const now=Date.now();return Object.entries(p.err||{}).filter(([,e])=>!e.m&&e.due<=now&&LIDX[e.lid]&&(LIDX[e.lid].s.all||(LIDX[e.lid].s.g||1)===(p.grade||1))).sort((a,b)=>a[1].due-b[1].due||b[1].n-a[1].n)}
function pendingCount(p){return Object.values(p.err||{}).filter(e=>!e.m&&LIDX[e.lid]&&(LIDX[e.lid].s.all||(LIDX[e.lid].s.g||1)===(p.grade||1))).length}
function startReview(){const p=me(),D=dueList(p).slice(0,REV_MAX);if(!D.length)return home();
 LS={review:true,s:LIDX[D[0][1].lid].s,l:{t:"Repaso del día"},list:shuf(D.map(([k,e])=>Object.assign(JSON.parse(JSON.stringify(e.ex)),{__k:k,__lid:e.lid}))),i:0,first:0,mast0:Object.values(p.err).filter(e=>e.m).length};newEx()}
function reviewFinish(){const p=me(),tot=LS.list.length,f=LS.first,mast=Object.values(p.err||{}).filter(e=>e.m).length-LS.mast0,left=dueList(p).length;save();SND.win();
 begin();app(`<section class="result" style="--sc:var(--mat);--ss:var(--mat-s)">${bird("big")}<h1>¡Repaso terminado!</h1><p class="lead">Acertaste a la primera <b>${f} de ${tot}</b>.${mast>0?` ¡Ya dominas <b>${mast}</b> ${mast===1?"pregunta":"preguntas"} que antes te costaban!`:""} ${f<tot?"Las que fallaste volverán mañana para que las practiques otra vez.":"Las que acertaste volverán en unos días para que no se te olviden."}</p><p class="lead">«Todo lo puedo en Cristo que me fortalece» (Flp 4, 13).</p><div class="row center"><button class="btn ghost" data-act="home">Inicio</button>${left?`<button class="btn" data-act="review">Repasar ${left} más</button>`:""}</div></section>`);scrollTo(0,0);confetti();auto("¡Repaso terminado!")}
function reviewCard(){const p=me(),n=dueList(p).length,pend=pendingCount(p);
 if(n)return`<section class="reto rev"><span class="sic sun" aria-hidden="true">${icon("star",30)}</span><div><h3>Repaso del día</h3><p>Tienes <b>${n}</b> ${n===1?"pregunta":"preguntas"} para repasar de las que te costaron trabajo. ¡Unos minutos y quedan dominadas!</p></div><button class="btn sun" data-act="review">Repasar ahora</button></section>`;
 if(pend)return`<section class="reto rev done"><span class="sic sun" aria-hidden="true">${icon("star",30)}</span><div><h3>Repaso del día</h3><p>¡Al corriente! Tienes ${pend} ${pend===1?"pregunta guardada":"preguntas guardadas"} que volverán en los próximos días.</p></div></section>`;
 return""}
/* ---- Estadísticas ---- */
function cicloOf(t){const d=new Date(t),y=d.getMonth()>=7?d.getFullYear():d.getFullYear()-1;return y}
function periods(y){return[["t1",`1.er trimestre (sep–nov ${y})`,[y,8],[y,10]],["t2",`2.º trimestre (dic ${y}–mar ${y+1})`,[y,11],[y+1,2]],["t3",`3.er trimestre (abr–jul ${y+1})`,[y+1,3],[y+1,6]],["all",`Ciclo escolar ${y}–${y+1}`,[y,7],[y+1,6]]]}
function inPeriod(mk,a,b){const[yy,mm]=mk.split("-").map(Number),v=yy*12+(mm-1);return v>=a[0]*12+a[1]&&v<=b[0]*12+b[1]}
function sumTP(p,lid,a,b){let t=0,f=0;const L=(p.tp||{})[lid]||{};for(const[mk,x]of Object.entries(L))if(!a||inPeriod(mk,a,b)){t+=x.t;f+=x.f}return{t,f}}
function grade5(acc){return Math.max(5,Math.min(10,Math.round((5+5*acc)*10)/10))}
function subjReport(p,s,a,b){let t=0,f=0,done=0,tot=0;allLessons(s).forEach(l=>{tot++;const r=sumTP(p,l.id,a,b);t+=r.t;f+=r.f;if(r.t&&p.prog[l.id]&&p.prog[l.id].done)done++});return{t,f,done,tot,acc:t?f/t:null,cal:t?grade5(f/t):null}}
function weakTopics(p){const out=[];gSubj(p.grade||1).forEach(s=>allLessons(s).forEach(l=>{const r=sumTP(p,l.id);if(r.t>=4&&r.f/r.t<.7)out.push({s,l,acc:r.f/r.t,t:r.t})}));return out.sort((x,y)=>x.acc-y.acc).slice(0,6)}
function topErrors(p){return Object.values(p.err||{}).filter(e=>!e.m&&LIDX[e.lid]).sort((a,b)=>b.n-a.n||b.last-a.last).slice(0,5)}
function strongTopics(p){const out=[];gSubj(p.grade||1).forEach(s=>allLessons(s).forEach(l=>{const r=sumTP(p,l.id);if(r.t>=5&&r.f/r.t>=.9)out.push({s,l,acc:r.f/r.t})}));return out.sort((x,y)=>y.acc-x.acc).slice(0,3)}
function followPanel(){const p=me(),W=weakTopics(p),E=topErrors(p),pend=pendingCount(p),mast=Object.values(p.err||{}).filter(e=>e.m).length,due=dueList(p).length;
 return`<section class="panel"><h2>Seguimiento de ${esc(p.name)}</h2><div class="kpis"><div><b>${due}</b><span>para repasar hoy</span></div><div><b>${pend}</b><span>preguntas guardadas</span></div><div><b>${mast}</b><span>dominadas en el repaso</span></div></div>
 <h3>Temas para reforzar</h3>${W.length?`<ul class="weak">${W.map(w=>`<li style="${sv(w.s)}"><span class="wdot"></span><div><b>${esc(w.l.t)}</b><small>${w.s.n} · ${Math.round(w.acc*100)}% de aciertos a la primera en ${w.t} preguntas</small></div><button class="mini-btn" data-act="open" data-v="${w.l.id}">Practicar</button></li>`).join("")}</ul>`:`<p class="note">Todavía no hay temas débiles. Aparecen cuando un tema tiene menos de 70% de aciertos a la primera (con al menos 4 preguntas respondidas).</p>`}
 ${E.length?`<h3>Preguntas que más falla</h3><ul class="tips">${E.map(e=>`<li>${esc(strip(e.ex.q))} <small class="note">(${LIDX[e.lid].s.n}, ${e.n} ${e.n===1?"vez":"veces"})</small></li>`).join("")}</ul>`:""}
 <div class="row"><button class="btn" data-act="boleta" style="--sc:var(--mat)">Ver boleta</button><button class="btn ghost" data-act="plan" style="--sc:var(--mat)">Plan de clases</button></div></section>`}
function boleta(per){LS=null;begin();MODE="boleta";const p=me(),g=p.grade||1,y=cicloOf(Date.now()),P=periods(y),cur=P.find(x=>x[0]===(per||"all"))||P[3],[,lab,a,b]=cur;
 const R=gSubj(g).map(s=>{const r={s,...subjReport(p,s,a,b)};r.ex=examAvg(p,s,a,b);if(r.ex!=null)r.cal=r.cal==null?r.ex:Math.round((r.cal*.6+r.ex*.4)*10)/10;return r}),cal=R.filter(r=>r.cal!=null),prom=cal.length?Math.round(cal.reduce((x,r)=>x+r.cal,0)/cal.length*10)/10:null;
 const W=weakTopics(p).slice(0,3),St=strongTopics(p),fecha=new Date().toLocaleDateString("es-MX",{day:"numeric",month:"long",year:"numeric"});
 const web=/^https?:$/.test(location.protocol);
 app(`<button class="back noprint" data-act="parents">${ui("back")} Zona de papás</button><div class="row noprint bper">${P.map(([k,t])=>`<button class="gbtn${k===cur[0]?" on":""}" data-act="boleta" data-v="${k}">${t}</button>`).join("")}</div>
 <article id="boleta" class="boleta"><header><div>${bird()}<div><p class="eyebrow">Escuelita Colibrí · Educación en casa</p><h1>Boleta de evaluación</h1></div></div><dl><div><dt>Alumno</dt><dd>${esc(p.name)}</dd></div><div><dt>Grado</dt><dd>${gName(g)} de primaria</dd></div><div><dt>Periodo</dt><dd>${lab}</dd></div><div><dt>Fecha</dt><dd>${fecha}</dd></div></dl></header>
 <div class="tscroll"><table class="bt"><thead><tr><th>Materia</th><th>Lecciones</th><th>Aciertos</th><th>Exámenes</th><th>Calif.</th></tr></thead><tbody>${R.map(r=>`<tr style="${sv(r.s)}"><td><span class="sw" style="background:var(--${r.s.c||r.s.id})"></span>${r.s.n}</td><td class="nm">${r.done} de ${r.tot}</td><td class="nm">${r.acc==null?"—":Math.round(r.acc*100)+"%"}</td><td class="nm">${r.ex==null?"—":r.ex.toFixed(1)}</td><td class="nm cal${r.cal!=null&&r.cal<6?" low":""}">${r.cal==null?"—":r.cal.toFixed(1)}</td></tr>`).join("")}</tbody><tfoot><tr><td colspan="4">Promedio general</td><td class="nm cal">${prom==null?"—":prom.toFixed(1)}</td></tr></tfoot></table></div>
 <div class="bobs"><div><h3>Fortalezas</h3>${St.length?`<ul>${St.map(x=>`<li>${esc(x.l.t)} (${x.s.n})</li>`).join("")}</ul>`:"<p>Se mostrarán cuando haya más lecciones practicadas.</p>"}</div><div><h3>Para reforzar</h3>${W.length?`<ul>${W.map(x=>`<li>${esc(x.l.t)} (${x.s.n})</li>`).join("")}</ul>`:"<p>Sin temas pendientes por ahora.</p>"}</div></div>
 <p class="bnote"><b>Lecciones</b>: terminadas en el periodo. <b>Aciertos</b>: respuestas correctas a la primera. <b>Exámenes</b>: promedio de los exámenes de unidad. La calificación va de 5 a 10, como en la SEP: 60% por los aciertos en las prácticas y 40% por los exámenes (si no hay exámenes, solo cuentan los aciertos). «—» indica que no hubo prácticas de esa materia en el periodo. Se incluyen las prácticas en la app y los repasos.</p>
 <div class="bfirm"><div><span></span>Firma del padre, madre o tutor</div><div><span></span>Observaciones</div></div>
 <p class="bbless">${CROSS} «Todo lo que hagan, háganlo de corazón, como para el Señor» (Col 3, 23).</p></article>
 <div class="row noprint">${web?`<button class="btn" data-act="printb" style="--sc:var(--mat)">Imprimir o guardar en PDF</button>`:`<p class="note">Para imprimir la boleta, ábrela en la app publicada en GitHub Pages o en la app instalada.</p>`}</div>`);scrollTo(0,0)}
Object.assign(ACT,{review:()=>startReview(),boleta:v=>boleta(v),printb:()=>{try{window.print()}catch(e){}}});
