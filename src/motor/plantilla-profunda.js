/* ========= Plantilla de lección «profunda»: pizarrón, ejemplo paso a paso, 3 niveles, retos y evaluación trimestral ========= */
/* --- Pizarrón --- */
VX.piz=v=>`<div class="piz" role="note"><div class="piz-in">${v.r.map(r=>`<p class="piz-r">${r}</p>`).join("")}${v.e&&v.e.length?`<div class="piz-e">${v.e.map(e=>`<span>${e}</span>`).join("")}</div>`:""}</div><div class="piz-tiza" aria-hidden="true"><i></i><i></i><i></i></div></div>`;
/* --- Ejemplo resuelto paso a paso --- */
VX.paso=v=>`<div class="paso" data-k="0"><div class="paso-q"><b>Problema:</b> ${v.q}</div>${v.v?`<div class="vis">${V(v.v)}</div>`:""}<ol class="paso-l">${v.s.map((s,i)=>`<li class="paso-s" hidden><span class="paso-n">${i+1}</span><span>${s}</span></li>`).join("")}</ol><div class="paso-r" hidden>✅ <b>Resultado:</b> ${v.r}</div><div class="row center"><button class="btn" data-act="pasonext" style="--sc:var(--mat)">👣 Ver el paso 1</button></div></div>`;
ACT.pasonext=(x,b)=>{const w=b.closest(".paso"),st=w.querySelectorAll(".paso-s"),r=w.querySelector(".paso-r"),k=+w.dataset.k;
 if(k<0){st.forEach(s=>s.hidden=true);r.hidden=true;w.dataset.k=0;b.textContent="👣 Ver el paso 1";return}
 if(k<st.length){st[k].hidden=false;say(st[k].textContent.replace(/^\d+/,""),true);w.dataset.k=k+1;b.textContent=k+1<st.length?`👣 Ver el paso ${k+2}`:"✅ Ver el resultado";return}
 r.hidden=false;say(r.textContent,true);w.dataset.k=-1;b.textContent="🔁 Ver otra vez"};
{const _vt=visText;visText=function(v){if(v&&v.t==="piz")return" "+v.r.join(". ").replace(/<[^>]+>/g,"")+(v.e&&v.e.length?". Ejemplos: "+v.e.join(". ").replace(/<[^>]+>/g,""):"");if(v&&v.t==="paso")return" Problema: "+v.q.replace(/<[^>]+>/g,"")+". Toca el botón para ver cada paso.";return _vt(v)}}

/* --- Tres niveles de práctica --- */
const NIV=[["🌱","Nivel 1 · Practica","Ejercicios para empezar"],["🌳","Nivel 2 · Ejercita","Un poco más difíciles"],["🏆","Nivel 3 · Reto","Problemas para pensar"]];
function lvOf(l){const r=me().prog[l.id];return(r&&r.lv)||{}}
function lvChooser(){const{s,l}=LS,lv=lvOf(l);begin();app(`<button class="back" data-act="relearn">${ui("back")} ${esc(l.t)}</button><section class="lvch" style="${sv(s)}"><h1>¿Qué nivel quieres practicar?</h1><p class="lead">Empieza por el nivel 1. Cuando lo domines, sube al siguiente.</p><div class="lvgrid">${NIV.map(([e,t,d],i)=>{const st=lv[i+1]||0,lock=i>0&&!(lv[i]>=1)&&!(i===1&&(me().prog[l.id]||{}).done);return`<button class="lvbtn${st?" done":""}" data-act="lvgo" data-v="${i+1}"><span class="lve">${e}</span><span class="lvt"><b>${t}</b><em>${d}${lock?" · te recomendamos terminar el anterior":""}</em></span><span class="lvs">${[0,1,2].map(k=>icon(k<st?"star":"starO",22)).join("")}</span></button>`}).join("")}</div></section>`);scrollTo(0,0);auto("¿Qué nivel quieres practicar? Empieza por el nivel uno.")}
function buildLevel(l,n){let list=n===1?l.ex.slice():n===3?(l.rx||[]).slice():[];(l.lv[n-1]||[]).forEach(([name,cnt,arg])=>{for(let i=0;i<cnt;i++){try{list.push(G[name](arg))}catch(e){}}});if(!list.length)list=buildList(l);return shuf(list)}
ACT.lvgo=v=>{LS.level=+v;LS.list=buildLevel(LS.l,+v);LS.i=0;LS.first=0;newEx()};
{const _pr=ACT.practice,_rt=ACT.retry;ACT.practice=()=>{if(LS&&LS.l&&LS.l.lv&&!LS.reto&&!LS.exam)return lvChooser();_pr()};ACT.retry=()=>{if(LS&&LS.l&&LS.l.lv&&LS.level)return ACT.lvgo(String(LS.level));_rt()};ACT.lvch=()=>lvChooser()}
{const _fin=finish;finish=function(){const lvl=LS&&LS.level&&LS.l&&LS.l.lv&&!LS.review&&!LS.exam&&!LS.reto?LS.level:0;const lid=lvl?LS.l.id:null;const tot=LS.list?LS.list.length:0,f=LS.first||0;const r=_fin.apply(this,arguments);
 if(lvl){try{const p=me(),st=f/tot>=.9?3:f/tot>=.6?2:1,pr=p.prog[lid]||{};pr.lv=pr.lv||{};pr.lv[lvl]=Math.max(pr.lv[lvl]||0,st);p.prog[lid]=pr;save();
  const res=document.querySelector(".result .row");if(res){res.insertAdjacentHTML("afterbegin",`<button class="btn ghost" data-act="lvch">Elegir nivel</button>${lvl<3?`<button class="btn" data-act="lvgo" data-v="${lvl+1}">${NIV[lvl][0]} Subir al nivel ${lvl+1}</button>`:""}`)};const h=document.querySelector(".result h1");if(h)h.insertAdjacentHTML("beforebegin",`<p class="eyebrow">${NIV[lvl-1][0]} ${NIV[lvl-1][1]}</p>`)}catch(e){}}return r}}
/* conservar los niveles al sincronizar */
if(typeof mergeProfiles==="function"){const _mp=mergeProfiles;mergeProfiles=function(L,R,del){const out=_mp(L,R,del);try{const all=[...(R||[]),...(L||[])];out.forEach(m=>{all.filter(p=>p&&p.id===m.id).forEach(p=>{for(const[k,v]of Object.entries(p.prog||{})){if(v&&v.lv&&m.prog[k]){m.prog[k].lv=m.prog[k].lv||{};for(const[n,s]of Object.entries(v.lv))m.prog[k].lv[n]=Math.max(m.prog[k].lv[n]||0,s)}}})})}catch(e){}return out}}

/* --- Evaluaciones trimestrales (para materias con lecciones por niveles) --- */
function trimUnits(s){const n=s.units.length,a=Math.ceil(n/3),b=Math.ceil((n-a)/2);return[[0,a],[a,a+b],[a+b,n]].map(([x,y])=>s.units.slice(x,y))}
function startTrim(v){const[sid,t]=v.split(":"),s=SUBJ.find(x=>x.id===sid);if(!s)return home();const us=trimUnits(s)[+t-1],ls=us.flatMap(u=>u.ls).filter(l=>!l.isReto);let list=[];
 ls.forEach(l=>{const pool=l.ex.slice();[...(l.g||[]),...((l.lv||[])[1]||[])].forEach(([n,c,arg])=>{for(let i=0;i<Math.min(c,2);i++){try{pool.push(G[n](arg))}catch(e){}}});shuf(pool).slice(0,2).forEach(e=>list.push(Object.assign(JSON.parse(JSON.stringify(e)),{__lid:l.id})))});
 list=shuf(list).slice(0,20);LS={exam:true,s,l:{t:"Evaluación trimestral "+t},ekey:s.id+"-t"+t,ui:0,trim:t,list,i:0,first:0};newEx()}
ACT.trim=v=>startTrim(v);
/* (Las evaluaciones trimestrales ahora se muestran en examenes-periodo.js para todas las materias, junto con el examen final.) */
{const _ef=examFinish;examFinish=function(){const t=LS.trim,sid=LS.s&&LS.s.id;const r=_ef.apply(this,arguments);if(t)try{const b=document.querySelector('.result [data-act="exam"]');if(b){b.dataset.act="trim";b.dataset.v=sid+":"+t}}catch(e){}return r}}
