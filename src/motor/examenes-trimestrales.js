/* ========= Exámenes trimestrales y examen final de grado =========
   Trimestre: preguntas de las lecciones que el plan reparte en ese trimestre (o, sin plan, de la tercera parte de las unidades).
   Final: preguntas de todo el grado. Se guardan en p.exam[sid-t1|t2|t3|fin] y entran al promedio de exámenes de la boleta. */
WEEKSUB[1].push("geo");WEEKSUB[3].push("geo");WEEKSUB[2].push("hig");WEEKSUB[5].push("hig");
{const _gp=gradePlan;const fixCuad=out=>{for(const k in out)for(const d in out[k].map)out[k].map[d].forEach(it=>{if(it.kind==="cuad"&&!(typeof CUADP!=="undefined"&&CUADP[it.l.id]))it.kind="prac"});return out};
 gradePlan=function(g){const P=schoolDays();if(P.plans[g])return P.plans[g];
 /* Geografía (5.º y 6.º) comparte color con Historia: se agenda con su propia clave para que no se pisen */
 const ss=gSubj(g),geo=ss.filter(s=>/geo$/.test(s.id));if(!geo.length)return fixCuad(_gp(g));
 geo.forEach(s=>{s._c=s.c;s.c="geo"});try{return fixCuad(_gp(g))}finally{geo.forEach(s=>{s.c=s._c;delete s._c})}}}
const TRI=[["t1","1.er trimestre"],["t2","2.º trimestre"],["t3","3.er trimestre"],["fin","Examen final de grado"]];
function periodLessons(s,tk){const ls=s.units.flatMap(u=>u.ls).filter(l=>!/R\d*$/.test(l.id)&&qpool(l,1).length);if(tk==="fin")return ls;
 const g=s.g||me().grade||1,y=cicloOf(Date.now()),P=periods(y),per=P.find(x=>x[0]===tk);
 try{const gp=gradePlan(g),x=Object.values(gp).find(v=>v.s===s);if(x&&per){const sel=ls.filter(l=>{const d=x.first[l.id];return d&&inPeriod(d.slice(0,7),per[2],per[3])});if(sel.length)return sel}}catch(e){}
 const i=["t1","t2","t3"].indexOf(tk),n=s.units.length,a=Math.floor(i*n/3),b=Math.max(a+1,Math.floor((i+1)*n/3));return s.units.slice(a,b).flatMap(u=>u.ls).filter(l=>ls.includes(l))}
/* Banco de preguntas de una lección: ejercicios fijos + generadores (g) + niveles (lv, incluye el banco QB) */
function qpool(l,k){const pool=(l.ex||[]).slice(),gens=[...(l.g||[]),...((l.lv||[]).flat())];for(const[n,cnt,arg]of gens){if(!G[n])continue;for(let i=0;i<Math.min(cnt||1,k);i++){try{const e=G[n](arg);if(e)pool.push(e)}catch(e){}}}
 const seen=new Set();return pool.filter(e=>{const q=strip(e.q||"")+"|"+JSON.stringify(e.opts||e.a||"");if(seen.has(q))return false;seen.add(q);return true})}
function startExamP(sid,tk){const s=SUBJ.find(x=>x.id===sid);if(!s)return home();const ls=periodLessons(s,tk),N=tk==="fin"?20:15;if(!ls.length)return subj(sid);
 const per=Math.max(1,Math.ceil(N/ls.length));let list=[];
 ls.forEach(l=>{const pool=qpool(l,2);shuf(pool).slice(0,per).forEach(e=>list.push(Object.assign(JSON.parse(JSON.stringify(e)),{__lid:l.id})))});
 list=shuf(list).slice(0,N);const lab=TRI.find(x=>x[0]===tk)[1];
 LS={exam:true,s,l:{t:(tk==="fin"?"":"Examen del ")+lab+" · "+s.n},ekey:s.id+"-"+tk,ui:tk,list,i:0,first:0};newEx()}
startExam=function(v){const[sid,ui]=String(v).split(":");if(/^(t[123]|fin)$/.test(ui))return startExamP(sid,ui);const s=SUBJ.find(x=>x.id===sid),u=s&&s.units[+ui];if(!u)return home();
 const ls=u.ls.filter(l=>qpool(l,1).length),per=Math.max(2,Math.ceil(10/Math.max(1,ls.length)));let list=[];
 ls.forEach(l=>shuf(qpool(l,3)).slice(0,per).forEach(e=>list.push(Object.assign(JSON.parse(JSON.stringify(e)),{__lid:l.id}))));
 list=shuf(list).slice(0,10);if(!list.length)return subj(sid);LS={exam:true,s,l:{t:"Examen: "+u.t},ekey:examKey(s,+ui),ui:+ui,list,i:0,first:0};newEx()}
{const _ea=examAvg;examAvg=function(p,s,a,b){const L=s.units.map((_,ui)=>(p.exam||{})[examKey(s,ui)]).concat(TRI.map(([k])=>(p.exam||{})[s.id+"-"+k])).filter(e=>e&&(!a||inPeriod(monthKey(e.at),a,b)));return L.length?Math.round(L.reduce((x,e)=>x+e.cal,0)/L.length*10)/10:null}}
function triRow(s,tk,lab,sub){const e=(me().exam||{})[s.id+"-"+tk];return`<li><button class="lrow exrow${e?" done":""}" data-act="exam" data-v="${s.id}:${tk}"><span class="num">${tk==="fin"?"🎓":"✎"}</span><span class="lt">${lab}${e?`<em>Calificación: ${e.cal.toFixed(1)}${e.best>e.cal?` · mejor: ${e.best.toFixed(1)}`:""}</em>`:`<em>${sub}</em>`}</span></button></li>`}
{const _sj=subj;subj=function(id){_sj(id);const s=SUBJ.find(x=>x.id===id);if(!s||s.all||s.lvl||s.noExam)return;const a=$("#app");if(!a)return;
 a.insertAdjacentHTML("beforeend",`<section style="${sv(s)};margin-top:18px"><h2 class="sec">Exámenes del ciclo escolar</h2><p class="note">Cada examen trimestral toma preguntas de las lecciones de ese trimestre. El final repasa todo el grado.</p><ol class="lessons">${TRI.slice(0,3).map(([k,l])=>triRow(s,k,"Examen del "+l,"15 preguntas del trimestre")).join("")}${triRow(s,"fin","Examen final de grado","20 preguntas de todo el grado")}</ol></section>`)}}
/* En la boleta: tabla de exámenes trimestrales y final */
{const _bo=boleta;boleta=function(per){_bo(per);const p=me(),g=p.grade||1,b=$("#boleta");if(!b)return;const rows=gSubj(g).filter(s=>!s.all&&!s.lvl&&!s.noExam);
 const c=k=>s=>{const e=(p.exam||{})[s.id+"-"+k];return`<td class="nm${e&&e.cal<6?" low":""}">${e?e.cal.toFixed(1):"—"}</td>`};
 const t=b.querySelector(".tscroll");if(!t)return;t.insertAdjacentHTML("afterend",`<h3 style="margin:14px 0 6px">Exámenes trimestrales y final</h3><div class="tscroll"><table class="bt"><thead><tr><th>Materia</th><th>1.er trim.</th><th>2.º trim.</th><th>3.er trim.</th><th>Final</th></tr></thead><tbody>${rows.map(s=>`<tr style="${sv(s)}"><td><span class="sw" style="background:var(--${s.c||s.id})"></span>${s.n}</td>${["t1","t2","t3","fin"].map(k=>c(k)(s)).join("")}</tr>`).join("")}</tbody></table></div>`)}}
ACT.trim=v=>{const[sid,t]=String(v).split(":");startExamP(sid,"t"+t)};
