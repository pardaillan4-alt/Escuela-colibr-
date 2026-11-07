/* ========= Motor para materias de contenido: banco de preguntas por lección con 3 niveles ========= */
/* Formato: ["pregunta","correcta","incorrecta","incorrecta"] → opción múltiple
            ["afirmación",true|false] → verdadero/falso
            ["instrucción",["paso1","paso2",…]] → ordenar                                              */
const QB={},QBD={};
function qbEx(q){if(q.length===2&&typeof q[1]==="boolean")return TF(q[0],q[1]);if(Array.isArray(q[1]))return O(q[0],q[1]);return C(q[0],q.slice(1))}
G.qb=a=>{const[id,t]=String(a).split(":"),B=QB[id];if(!B)return TF("La fe es un regalo de Dios.",true);const pool=t==="*"?B.flat():(B[+t]||B.flat());const k=a;let d=QBD[k];if(!d||!d.length){d=QBD[k]=shuf(pool.slice())}return qbEx(d.pop())};
G.qbu=a=>G.qb(pick(String(a).split(","))+":*");
/* Lección de contenido: páginas, fe/oración, vida diaria, pizarrón, ejemplo, banco [fácil, medio, reto] */
function FL(id,t,pages,fe,vd,pz,ps,bank,frase,ex){QB[id]=bank;const n=bank.flat().length;return DL(id,t,pages,fe,vd,pz,ps,[[["qb",Math.min(8,bank[0].length+2),id+":0"]],[["qb",Math.min(10,bank[1].length+3),id+":1"]],[["qb",Math.min(6,bank[2].length+1),id+":2"],["qb",4,id+":*"]]],ex||[],frase)}
function FRETO(id,t,ids,ps,frase){const l=DL(id,"🏆 "+t,[["¿Qué es un reto?","Repasa todo lo de la unidad. Lee con calma y, si dudas, vuelve a la lección.",{t:"steps",x:["Leo con calma","Recuerdo lo aprendido","Respondo","Reviso"]}]],["Todo lo puedo en Cristo","«Todo lo puedo en Cristo, que me fortalece» (Flp 4, 13).",{t:"emo",x:"💪 ✝️"}],null,[["Repasa la unidad completa."],["Lee","Recuerda","Responde","Revisa"]],ps,[[["qbu",10,ids.join(",")]],[["qbu",12,ids.join(",")]],[["qbu",14,ids.join(",")]]],[],frase||"Todo lo puedo en Cristo.");l.isReto=true;return l}
/* Juego: ordena la secuencia (partes de la Misa, pasos de la confesión, etc.) */
VX.ordenar=v=>mtBox("eord",`<p class="note">${esc(v.p||"Toca las tarjetas en el orden correcto.")}</p><div class="essc-g eord-g" data-x="${esc(JSON.stringify(v.x))}"></div><div class="essc-o"></div><p class="mt-r" aria-live="polite"></p><div class="row center">${mtBtn("eordnew","","🔄 Otra vez",1)}</div>`);
function eordNew(w){const g=w.querySelector(".eord-g");w._s=JSON.parse(g.dataset.x);w._p=shuf(w._s.map((_,i)=>i));w._k=0;w.querySelector(".mt-r").textContent="";eordDraw(w)}
function eordDraw(w){w.querySelector(".eord-g").innerHTML=w._p.map(i=>`<button class="essc-c${i<w._k?" done":""}" data-act="eordt" data-v="${i}"${i<w._k?" disabled":""}><span>${w._s[i][1]}</span>${esc(w._s[i][0])}</button>`).join("");w.querySelector(".essc-o").innerHTML=w._s.slice(0,w._k).map((x,i)=>`<span>${i+1}. ${esc(x[0])}</span>`).join("")}
ACT.eordt=(v,b)=>{const w=b.closest(".mt");if(+v===w._k){w._k++;say(w._s[+v][0],true);eordDraw(w);if(w._k===w._s.length){w.querySelector(".mt-r").innerHTML="¡Muy bien! Lo ordenaste completo. ⭐";mtOk()}}else{w.querySelector(".mt-r").textContent="Mmm… ¿eso va antes? Piensa otra vez.";b.classList.add("shake");setTimeout(()=>b.classList.remove("shake"),400)}};
ACT.eordnew=(v,b)=>eordNew(b.closest(".mt"));
{const _ln=learn;learn=function(){const r=_ln.apply(this,arguments);try{document.querySelectorAll(".eord").forEach(w=>{if(!w._s)eordNew(w)})}catch(e){console.error(e)}return r}}
{const _vt=visText;visText=function(v){if(v&&v.t==="ordenar")return"";return _vt.apply(this,arguments)}}
/* inserta lecciones nuevas en una materia y reordena las unidades */
function rebuildSubj(sid,NEW,T,U,d){const s=SUBJ.find(x=>x.id===sid);if(!s)return;const by={};s.units.forEach(u=>u.ls.forEach(l=>by[l.id]=l));Object.assign(by,NEW);
 for(const[id,[rr,ee,ps,bank]]of Object.entries(T||{})){const l=by[id];if(!l)continue;const k0=l.learn.findIndex(p=>p.fe||p.info||(p.v&&p.v.t==="vida"));const k=k0<0?l.learn.length:k0;l.learn.splice(k,0,P("Pizarrón: lo más importante","",{t:"piz",r:rr,e:ee}),P("Ejemplo resuelto, paso a paso","",{t:"paso",q:ps[0],s:ps[1],r:ps[2]}));QB[id]=bank;l.lv=[[["qb",8,id+":0"]],[["qb",10,id+":1"]],[["qb",6,id+":2"],["qb",4,id+":*"]]];(l.ex||[]).forEach(()=>{})}
 const seen=new Set();s.units=U.map(([t,ids])=>({t,ls:ids.map(i=>{seen.add(i);return by[i]}).filter(Boolean)}));const rest=Object.keys(by).filter(i=>!seen.has(i));if(rest.length)s.units[s.units.length-1].ls.push(...rest.map(i=>by[i]));if(d)s.d=d}
