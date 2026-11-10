/* ========= Sincronización: refrescar la pantalla abierta cuando llega avance de otro equipo, y unir todos los datos del niño ========= */
const VIEW={fn:null,args:[]};
["home","subj","planView","porta","boleta","albumView","litCal","gospelView"].forEach(n=>{const f=globalThis[n];if(typeof f!=="function")return;globalThis[n]=function(...a){VIEW.fn=n;VIEW.args=a;return f.apply(this,a)}});
{const _old=syncRefresh;syncRefresh=function(){try{if(MODE==="parents")return parents();drawTop();
 /* Si el niño está a la mitad de una lección, examen o dibujo, no se interrumpe: se verá al terminar */
 if(LS||["trazo","ora","mis","prac"].includes(MODE)||!VIEW.fn)return;const y=scrollY;globalThis[VIEW.fn](...VIEW.args);scrollTo(0,y)}catch(e){try{_old()}catch(x){}}}}
{const _mp=mergeProfiles;mergeProfiles=function(L,R,del){const out=_mp(L,R,del);try{const all=[...(R||[]),...(L||[])];out.forEach(m=>{all.filter(p=>p&&p.id===m.id).forEach(p=>{
 if(p.act){m.act=m.act||{};for(const[d,v]of Object.entries(p.act))m.act[d]=Math.max(m.act[d]||0,v)}
 if(p.retoD)m.retoD=[...new Set([...(m.retoD||[]),...p.retoD])].sort().slice(-60);
 if(p.retoT)m.retoT=m.retoT?Math.min(m.retoT,p.retoT):p.retoT;
 if(p.mis){m.mis=m.mis||{};for(const[k,v]of Object.entries(p.mis)){const w=m.mis[k];m.mis[k]=w==null?JSON.parse(JSON.stringify(v)):(typeof v==="number"&&typeof w==="number"?Math.max(v,w):(typeof v==="object"&&typeof w==="object"&&v&&w?Object.assign({},v,w,{done:!!(v.done||w.done)}):w||v))}}})})}catch(e){}return out}}
