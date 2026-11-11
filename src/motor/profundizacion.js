/* ========= Profundización de lecciones y bancos ampliados =========
   Los archivos banco-<materia>.js (generados desde banco/<materia>.txt con herr/mkbanco.py) llaman a ENR({...}).
   Cada lección puede recibir:
     z, e  → pizarrón con ideas completas y ejemplos
     s     → ejemplo resuelto paso a paso [pregunta, [pasos], resultado]
     i     → infografía {l: diseño, x: [[icono, título, detalle]]}
     q     → preguntas nuevas para cada nivel [[nivel 1], [nivel 2], [nivel 3]]
     k, p  → tablas de práctica (clasificar / parejas): de cada tabla salen muchas preguntas distintas */
const QK={},QP={};let ENRIDX=null;
function enrLesson(id){if(!ENRIDX){ENRIDX={};SUBJ.forEach(s=>s.units.forEach(u=>u.ls.forEach(l=>{ENRIDX[l.id]=l})))}return ENRIDX[id]}
function ENR(D){for(const id in D){const l=enrLesson(id),d=D[id];if(!l)continue;const pgs=l.learn||[];
 const find=t=>{for(const pg of pgs){const v=pg.v;if(!v)continue;if(v.t===t)return v;if(v.t==="combo"){const x=(v.x||[]).find(y=>y&&y.t===t);if(x)return x}}return null};
 try{
  if(d.z||d.e){const z=find("piz");if(z){if(d.z)z.r=d.z;if(d.e)z.e=d.e}}
  if(d.s){const ps=find("paso");if(ps){ps.q=d.s[0];ps.s=d.s[1];ps.r=d.s[2]}}
  if(d.i){const v=find("info");if(v){v.items=d.i.x;v.lay=d.i.l||"grid"}}
  if(d.q){const B=QB[id]=QB[id]||[[],[],[]];d.q.forEach((t,k)=>{B[k]=B[k]||[];(t||[]).forEach(q=>B[k].push(q))})}
  if(d.k)QK[id]=(QK[id]||[]).concat(d.k);
  if(d.p)QP[id]=(QP[id]||[]).concat(d.p);
 }catch(e){console.error("ENR",id,e)}}}
/* «{x}» se sustituye por el elemento; si el enunciado no lo trae, se agrega al final entre comillas */
function tabFill(stem,x){const s=stem.includes("{x}")?stem.replace(/\{x\}/g,x):stem+" «"+x+"»";return s.replace(/^([¿¡(]*)([a-záéíóúñ])/,(m,a,b)=>a+b.toUpperCase())}
/* Preguntas que salen de las tablas de una lección. tier: 0, 1, 2 o "*" (todas).
   Clasificar: una pregunta por elemento (se reparten entre nivel 1 y 2) y ejercicios de «toca su grupo» (nivel 3).
   Parejas: una pregunta por pareja (nivel 1 y 2) y, si hay pregunta inversa, otra por pareja (nivel 3). */
function tabPool(l,tier){const id=l.id,out=[],all=tier==null||tier==="*",T=+tier,K=QK[id],P=QP[id];if(!K&&!P)return out;
 const put=(t,fam,mk)=>{if(all||t===T){try{const e=mk();if(e){e.__f=fam;out.push(e)}}catch(x){}}};
 (K||[]).forEach((tb,ti)=>{const[stem,title,groups]=tb,names=groups.map(g=>g[0]),fam=id+"k"+ti;let n=0;
  groups.forEach((g,gi)=>g[1].forEach(x=>{put(n++%2,fam,()=>C(tabFill(stem,x),[names[gi],...shuf(names.filter((_,j)=>j!==gi)).slice(0,3)]))}));
  if(names.length<=3&&names.every(s=>s.length<=22))for(let v=0;v<3;v++)put(2,fam+"s",()=>{const items=[];groups.forEach((g,gi)=>shuf(g[1].slice()).slice(0,names.length===2?3:2).forEach(x=>items.push([x,gi])));return S2(title||"Toca el grupo de cada uno",names,shuf(items))});
  else groups.forEach((g,gi)=>g[1].forEach(x=>{if(n++%3===0)put(2,fam,()=>C(tabFill(stem,x),[names[gi],...shuf(names.filter((_,j)=>j!==gi)).slice(0,3)]))}))});
 (P||[]).forEach((tb,ti)=>{const[stem,rev,pairs]=tb,fam=id+"p"+ti,bs=[...new Set(pairs.map(p=>p[1]))],as=pairs.map(p=>p[0]);
  pairs.forEach(([a,b],i)=>{put(rev?i%2:i%3,fam,()=>{const ds=shuf(bs.filter(v=>v!==b)).slice(0,2);return ds.length<2?null:C(tabFill(stem,a),[b,...ds])});
   if(rev)put(2,fam+"r",()=>{const ds=shuf(as.filter(v=>v!==a)).slice(0,2);return ds.length<2?null:C(tabFill(rev,b),[a,...ds])})})});
 return out}
