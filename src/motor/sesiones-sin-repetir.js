/* ========= Sesiones de práctica sin preguntas repetidas =========
   - Ninguna pregunta aparece dos veces en la misma sesión (práctica, niveles, exámenes, reto, repaso).
   - La app recuerda las últimas preguntas que vio cada niño en cada lección y prefiere las que no ha visto.
   - Si el banco de una lección es chico, la sesión se completa con preguntas de otros niveles de la misma
     lección (las menos vistas) y, si aun así no alcanza, queda más corta en lugar de repetir. */
const SEENKEY="colibri-vistas-v1",LVWANT=[8,8,7],LVMIN=5,LISTMAX=10;
let SEEN=null;
function seenAll(){if(SEEN)return SEEN;try{SEEN=JSON.parse(localStorage.getItem(SEENKEY)||"{}")||{}}catch(e){SEEN={}}return SEEN}
function seenOf(lid){const A=seenAll(),pid=(me()||{}).id||"x",P=A[pid]=A[pid]||{};return P[lid]=P[lid]||[]}
function seenSave(){try{localStorage.setItem(SEENKEY,JSON.stringify(SEEN))}catch(e){}}
function h32(s){let h=2166136261;for(let i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,16777619)}return(h>>>0).toString(36)}
const _nk=s=>strip(String(s==null?"":s)).replace(/\s+/g," ").trim().toLowerCase();
function exKey(e){if(!e)return"";let a="";switch(e.k){case"c":a=_nk((e.o||[])[0]);break;case"tf":case"n":a=String(e.a);break;case"ord":a=(e.items||[]).map(_nk).join(">");break;case"b":a=(e.a||[]).join("");break;case"s":a=(e.items||[]).map(x=>_nk(x[0])).sort().join(",");break;case"m":a=(e.pairs||[]).map(x=>_nk(x[0])).sort().join(",");break}
 let v="";if(e.v){try{v=JSON.stringify(e.v)}catch(x){}}return _nk(e.q)+"|"+v+"|"+a}
function seenMark(lid,e){if(!lid||!e)return;const a=seenOf(lid),h=h32(exKey(e)),i=a.indexOf(h);if(i>=0)a.splice(i,1);a.push(h);while(a.length>80)a.shift();seenSave()}
/* qué tan «fresca» es una pregunta: -1 nunca vista; si no, posición en la memoria (0 = la más antigua) */
function seenRank(lid,e){return seenOf(lid).indexOf(h32(exKey(e)))}
/* Todas las preguntas fijas de una lección (ejercicios, retos y banco), como objetos nuevos */
function staticPool(l,tier){const out=[];if(tier==null||tier==="*"){(l.ex||[]).forEach(e=>out.push(e));(l.rx||[]).forEach(e=>out.push(e))}
 const B=typeof QB!=="undefined"&&QB[l.id];if(B){(tier==null||tier==="*"?B.flat():(B[+tier]||[])).forEach(q=>{try{out.push(qbEx(q))}catch(e){}})}
 if(typeof tabPool==="function")try{out.push(...tabPool(l,tier))}catch(e){}return out}
/* Las preguntas que salen de una misma tabla forman una «familia»: máximo FAMCAP por sesión, para que no sea monótona */
const FAMCAP=3;
function famOk(keys,e){const f=e&&e.__f;if(!f)return true;const fc=keys.fc=keys.fc||{};const cap=/s$/.test(f)?1:FAMCAP;if((fc[f]||0)>=cap)return false;fc[f]=(fc[f]||0)+1;return true}
/* Elige hasta n preguntas de cands que no estén ya en la sesión, prefiriendo las menos vistas */
function pickFresh(cands,keys,lid,n){const pool=[];const local=new Set();for(const e of cands){const k=exKey(e);if(keys.has(k)||local.has(k))continue;local.add(k);pool.push([seenRank(lid,e),Math.random(),e,k])}
 pool.sort((a,b)=>a[0]-b[0]||a[1]-b[1]);const out=[];for(const[, ,e,k]of pool){if(out.length>=n)break;if(!famOk(keys,e))continue;keys.add(k);out.push(e)}return out}
/* Pide una pregunta nueva a un generador; reintenta hasta encontrar una que no esté en la sesión */
function genFresh(name,arg,keys,lid){if(!G[name])return null;let best=null,bestR=1e9;for(let t=0;t<14;t++){let e;try{e=G[name](arg)}catch(x){continue}if(!e)continue;const k=exKey(e);if(keys.has(k))continue;if(e.__f){const fc=keys.fc||{};if((fc[e.__f]||0)>=(/s$/.test(e.__f)?1:FAMCAP))continue}const r=seenRank(lid,e);if(r<0){famOk(keys,e);keys.add(k);return e}if(r<bestR){bestR=r;best=e}}
 if(best){famOk(keys,best);keys.add(exKey(best))}return best}
function fromSources(l,src,keys,want){const out=[],onlyQB=(src||[]).every(x=>x[0]==="qb");for(const[name,cnt,arg]of src||[]){if(out.length>=want)break;
  /* en lecciones solo de banco, el nivel toma todo lo que haya en su grupo (hasta el tamaño de la sesión) */
  const n=name==="qb"&&onlyQB?want-out.length:Math.min(cnt||1,want-out.length);
  if(name==="qb"){const[id,t]=String(arg).split(":");const L=id===l.id?l:(LIDX[id]&&LIDX[id].l)||l;out.push(...pickFresh(staticPool(L,t==null?"*":t),keys,l.id,n))}
  else for(let i=0;i<n;i++){const e=genFresh(name,arg,keys,l.id);if(e)out.push(e);else break}}return out}
function topUp(l,list,keys,want){if(list.length>=want)return list;list.push(...pickFresh(staticPool(l),keys,l.id,want-list.length));
 if(list.length<want){const gens=[...(l.g||[]),...((l.lv||[]).flat())].filter(x=>x[0]!=="qb");for(const[name,,arg]of shuf(gens)){while(list.length<want){const e=genFresh(name,arg,keys,l.id);if(!e)break;list.push(e)}if(list.length>=want)break}}return list}
/* Sesión de un nivel (lecciones con tres niveles) */
buildLevel=function(l,n){const keys=new Set(),want=LVWANT[n-1]||8;let list=[];
 const own=n===1?(l.ex||[]):n===3?(l.rx||[]):[];
 const src=(l.lv&&l.lv[n-1])||[];const hasGen=src.some(x=>x[0]!=="qb");
 /* primero lo propio del nivel; si hay generadores, se deja espacio para ellos */
 list.push(...pickFresh(own,keys,l.id,hasGen?Math.max(2,Math.ceil(want/2)):want));
 list.push(...fromSources(l,src,keys,Math.max(0,(hasGen?LISTMAX:want)-list.length)));
 if(list.length<want)list.push(...pickFresh(own,keys,l.id,want-list.length));
 if(list.length<LVMIN)topUp(l,list,keys,LVMIN);
 if(!list.length)list=buildList(l);return shuf(list).slice(0,LISTMAX)};
/* Sesión de una lección sin niveles */
buildList=function(l){const keys=new Set();let list=pickFresh(l.ex||[],keys,l.id,12);list.push(...fromSources(l,l.g,keys,Math.max(0,12-list.length)));if(list.length<LVMIN)topUp(l,list,keys,LVMIN);return shuf(list)};
/* Banco para exámenes: preguntas distintas de una lección */
qpool=function(l,k){const keys=new Set();const list=pickFresh(staticPool(l),keys,l.id,40);const gens=[...(l.g||[]),...((l.lv||[]).flat())].filter(x=>x[0]!=="qb");for(const[name,cnt,arg]of gens){for(let i=0;i<Math.min(cnt||1,k);i++){const e=genFresh(name,arg,keys,l.id);if(e)list.push(e);else break}}return list};
/* En retos de unidad y exámenes, las lecciones con tablas de práctica también aportan preguntas de sus tablas */
{const _qb=G.qb;G.qb=a=>{try{const id=String(a).split(":")[0];if(typeof QK!=="undefined"&&(QK[id]||QP[id])&&Math.random()<.3){const L=enrLesson(id);if(L){const p=tabPool(L,"*");if(p.length)return pick(p)}}}catch(e){}return _qb(a)}}
/* Quita repetidas de cualquier lista ya armada (exámenes, repaso) */
function dedupeList(list){const keys=new Set();return list.filter(e=>{const k=exKey(e);if(keys.has(k))return false;keys.add(k);return true})}
/* Reto de cálculo mental sin operaciones repetidas */
reto=function(){const g=Math.min(6,curG()||1),mix=((typeof RETOMIX!=="undefined"&&(RETOMIX[g]||RETOMIX[3]))||["add10","sub10"]).filter(n=>G[n]);const keys=new Set(),list=[];let guard=0;
 while(list.length<10&&guard++<80){const e=genFresh(pick(mix),undefined,keys,"reto");if(e)list.push(e)}
 LS={reto:true,s:findC("mat",g),l:{t:"Reto de cálculo mental"},list,i:0,first:0,t0:Date.now()};newEx()};
/* Cada pregunta mostrada se anota en la memoria del niño; exámenes y repasos se depuran al empezar */
{const _ne=newEx;newEx=function(){try{if(LS&&LS.list&&LS.i===0&&!LS._dd){LS._dd=1;if(LS.exam||LS.review)LS.list=dedupeList(LS.list)}const ex=LS.list[LS.i];if(ex&&!LS.reto){const lid=ex.__lid||(LS.l&&LS.l.id);if(lid)seenMark(lid,ex)}}catch(e){}return _ne.apply(this,arguments)}}
