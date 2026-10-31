/* ===== Generador de cuadernos imprimibles (se ejecuta en el navegador después de all.js) ===== */
(function(){
let seedV=1;function srand(n){seedV=n>>>0||1}
function rnd01(){seedV|=0;seedV=seedV+0x6D2B79F5|0;let t=Math.imul(seedV^seedV>>>15,1|seedV);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}
Math.random=rnd01;
const strip2=s=>String(s==null?"":s).replace(/<br\s*\/?>/gi," / ").replace(/<[^>]+>/g,"").replace(/\s+/g," ").trim();
const L3=["a","b","c","d"];
const SUBJ_NAME=c=>({mat:"Matemáticas",esp:"Español",cie:"Ciencias Naturales",his:"Historia y Geografía",civ:"Cívica y Valores",rel:"Religión Católica",com:"Primera Comunión"}[c]);
function hash(s){let h=2166136261;for(const ch of s){h^=ch.charCodeAt(0);h=Math.imul(h,16777619)}return h>>>0}
function vis(v){if(!v)return"";return`<div class="wvis">${V(v).replace(/<td>\?<\/td>/g,'<td class="wbox"></td>')}</div>`}
function lines(n){return`<div class="wlines">${"<i></i>".repeat(n)}</div>`}
function exHTML(ex){let h="",a="";
 switch(ex.k){
 case"c":{const o=shuf(ex.o.map((t,i)=>({t,ok:i===0})));const k=o.findIndex(x=>x.ok);a=`${L3[k]}) ${strip2(o[k].t)}`;
  h=`<p class="wq">${ex.q}</p>${vis(ex.v)}<p class="win">Encierra la respuesta correcta.</p><div class="wopts${o.every(x=>strip2(x.t).length<6)?" short":""}">${o.map((x,i)=>`<span class="wopt"><b>${L3[i]}</b>${esc(x.t)}</span>`).join("")}</div>`;break}
 case"tf":a=ex.a?"V":"F";h=`<p class="wq">${ex.q}</p>${vis(ex.v)}<p class="win">Encierra <b>V</b> si es verdadero o <b>F</b> si es falso.</p><div class="wvf"><span>V</span><span>F</span></div>`;break;
 case"n":a=String(ex.a);h=`<p class="wq">${ex.q}</p>${vis(ex.v)}<p class="wans">Respuesta: <span class="wblank"></span></p>`;break;
 case"ord":{const sh=shuf(ex.items.map((t,i)=>({t,n:i+1})));a=sh.map(x=>x.n).join(", ")+"  ("+ex.items.map(strip2).join(" → ")+")";
  h=`<p class="wq">${ex.q}</p>${vis(ex.v)}<p class="win">Escribe en cada cuadro el número del orden correcto: 1, 2, 3...</p><div class="word2">${sh.map(x=>`<span class="wit"><i class="wsq"></i>${esc(x.t)}</span>`).join("")}</div>`;break}
 case"b":{const t=shuf([...ex.a,...ex.x]);a=ex.a.join("");h=`<p class="wq">${ex.q}</p>${vis(ex.v)}<p class="win">Escoge las sílabas correctas y escribe la palabra.</p><div class="wtiles">${t.map(x=>`<span>${esc(x)}</span>`).join("")}</div><p class="wans">Palabra: <span class="wblank long"></span></p>`;break}
 case"s":{const it=shuf(ex.items);a=it.map(([t,g])=>`${strip2(t)}: ${ex.g[g]}`).join("; ");
  h=`<p class="wq">${ex.q}</p><p class="win">Marca con una ✗ la columna correcta.</p><table class="wsort"><thead><tr><th></th>${ex.g.map(g=>`<th>${g}</th>`).join("")}</tr></thead><tbody>${it.map(([t])=>`<tr><td>${t}</td>${ex.g.map(()=>`<td><i class="wsq"></i></td>`).join("")}</tr>`).join("")}</tbody></table>`;break}}
 return{h,a}}
function calWords(l){const w=new Set();l.ex.forEach(e=>{if(e.k==="b")w.add(e.a.join(""))});l.learn.forEach(p=>{if(!p.v)return;if(p.v.t==="syl")p.v.x.forEach(x=>{if(x.length<=16&&!/[=→↔+×−]/.test(x))w.add(x)});if(p.v.t==="word")w.add(p.v.x.replace(/-/g,""));if(p.v.t==="cards")p.v.x.forEach(([_,b])=>{const t=strip2(b).split(/[ (:=→↔]/)[0].replace(/-/g,"");if(t.length>1&&t.length<=12)w.add(t)})});return[...w].slice(0,4)}
function calHTML(words){return`<section class="wsec cal"><h3>Caligrafía: copia con tu mejor letra</h3>${words.map(w=>`<div class="calrow"><span class="calm">${esc(w)}</span><span class="calm ghost">${esc(w)}</span><span class="calfree"></span></div><div class="calrow"></div>`).join("")}</section>`}
window.buildLesson=function(s,l,idx,total){srand(hash(l.id));const c=s.c||s.id,info=l.learn.find(p=>p.info),fe=l.learn.find(p=>p.fe),first=l.learn.find(p=>!p.info&&!p.fe);
 let list=l.ex.slice();(l.g||[]).forEach(([n,cnt,arg])=>{for(let i=0;i<Math.min(cnt,6);i++){try{list.push(G[n](arg))}catch(e){}}});
 if(list.length>12){const st=l.ex.slice(0,8),gen=list.slice(l.ex.length);list=st.concat(gen.slice(0,Math.max(4,12-st.length)))}
 const exs=list.map(exHTML),answers=exs.map(x=>x.a);
 let h=`<article class="wl" style="${sv(s)}"><span class="mark">§${l.id}§</span>
 <header class="wh"><div class="whl"><p class="wk">${gName(s.g||1)} de primaria · ${SUBJ_NAME(c)} · Lección ${idx} de ${total}</p><h2>${esc(l.t)}</h2></div><span class="whi">${SICON[c]||""}</span></header>
 <div class="wname"><span>Nombre: <i></i></span><span>Fecha: <i></i></span></div>`;
 if(info)h+=`<section class="wsec winfo"><h3>Repasa</h3>${V(info.v)}</section>`;
 else if(first)h+=`<section class="wsec"><h3>Repasa: ${first.h}</h3><p class="wtext">${first.p||""}</p>${vis(first.v)}</section>`;
 h+=`<section class="wsec"><h3>Ejercicios</h3><ol class="wex">${exs.map(x=>`<li>${x.h}</li>`).join("")}</ol></section>`;
 if(c==="esp")h+=calHTML(calWords(l));
 if(c==="mat"&&(l.g||[]).length){srand(hash(l.id+"x"));const ops=[];(l.g||[]).forEach(([n,cnt,arg])=>{for(let i=0;i<4;i++){try{const e=G[n](arg);if(e.k==="n"&&/^[\d\s+−×÷=?]+$/.test(strip2(e.q)))ops.push(e)}catch(e){}}});
  if(ops.length){const o=ops.slice(0,8);answers.push("Cuaderno: "+o.map(e=>strip2(e.q).replace("= ?","= "+e.a)).join(" · "));h+=`<section class="wsec"><h3>En tu cuaderno de cuadrícula</h3><p class="win">Copia cada operación en tu cuaderno, resuélvela y escribe aquí el resultado.</p><div class="wops">${o.map(e=>`<span>${strip2(e.q).replace("= ?","=")} <i class="wblank sm"></i></span>`).join("")}</div></section>`}}
 if(c==="cie"||c==="his")h+=`<section class="wsec wavoid"><h3>Dibuja y colorea</h3><p class="win">Haz un dibujo sobre «${info?info.v.ti:esc(l.t)}» y escribe una frase que lo explique.</p><div class="wdraw"></div>${lines(2)}</section>`;
 if(c==="civ")h+=`<section class="wsec wavoid"><h3>Para mi vida</h3><p class="win">¿Cómo puedes vivir lo que aprendiste hoy en tu casa o con tus amigos? Escribe dos ideas.</p>${lines(3)}</section>`;
 if(fe)h+=`<section class="wsec wfe"><h3>${CROSS} Con los ojos de la fe: ${fe.h}</h3><p class="wtext">${fe.p||""}</p><p class="win">¿Qué te enseña esto sobre Dios? Escríbelo o haz un dibujo.</p>${lines(3)}</section>`;
 else if(c==="rel"||c==="com")h+=`<section class="wsec wfe"><h3>${CROSS} Mi oración</h3><p class="win">Escribe una oración a Dios sobre lo que aprendiste en esta lección.</p>${lines(4)}</section>`;
 h+=`</article>`;return{h,answers}};
window.buildGrade=function(g){const subs=gSubj(g);let html="",key=[],toc=[];subs.forEach(s=>{const ls=allLessons(s),c=s.c||s.id;html+=`<section class="wsub" style="${sv(s)}"><span class="mark">§S-${s.id}§</span><div class="wsubin">${SICON[c]?`<span class="whi big">${SICON[c]}</span>`:""}<p class="wk">${gName(g)} de primaria</p><h1>${s.n}</h1><p>${s.d}</p><ol class="wsl">${ls.map(l=>`<li>${esc(l.t)}</li>`).join("")}</ol></div></section>`;
 const kk={s:s.n,c,ls:[]};toc.push({id:"S-"+s.id,n:s.n,c,ls:[]});ls.forEach((l,i)=>{const r=buildLesson(s,l,i+1,ls.length);html+=r.h;kk.ls.push({id:l.id,t:l.t,n:i+1,a:r.answers});toc[toc.length-1].ls.push({id:l.id,t:l.t,n:i+1})});key.push(kk)});
 return{html,key,toc}};
})();
