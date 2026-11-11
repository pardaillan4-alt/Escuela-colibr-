// Uso: node herr/digest.js <materia> [desde] [hasta]   → resumen compacto de cada lección (para escribir su enriquecimiento)
const fs=require('fs'),vm=require('vm'),path=require('path');const dir=path.join(__dirname,'..');
function fuentes(){const loc=path.join(__dirname,'..','build-order.txt');
 if(fs.existsSync(loc)){const d=path.join(__dirname,'..');return fs.readFileSync(loc,'utf8').trim().split(/\s+/).filter(f=>!/^banco-/.test(f)).map(f=>path.join(d,f))}
 const R=path.join(__dirname,'..','..'),m=/JS=\(([\s\S]*?)\)/.exec(fs.readFileSync(path.join(R,'build.sh'),'utf8'));
 return m[1].trim().split(/\s+/).filter(f=>!/^src\/banco\//.test(f)).map(f=>path.join(R,f))}
const files=fuentes();
const c={console,document:{querySelector:()=>null,addEventListener(){},getElementById:()=>null,createElement:()=>({style:{}})},localStorage:{getItem:()=>null,setItem(){}},navigator:{},location:{protocol:"file:",hostname:""},setTimeout(){},setInterval(){},matchMedia:()=>({matches:false,addEventListener(){}})};
c.window=c;c.globalThis=c;vm.createContext(c);vm.runInContext(files.map(f=>fs.readFileSync(f,'utf8')).join('\n')+";this.SUBJ=SUBJ;this.QB=QB;",c);
const strip=s=>String(s==null?"":s).replace(/<[^>]+>/g,"").replace(/\s+/g," ").trim();
const [sid,a,b]=process.argv.slice(2);const s=c.SUBJ.find(x=>x.id===sid);if(!s){console.log('materias:',c.SUBJ.map(x=>x.id).join(' '));process.exit(1)}
let ls=[];s.units.forEach(u=>u.ls.forEach(l=>ls.push([u.t,l])));ls=ls.slice(+a||0,b?+b:undefined);
const qtxt=q=>q.length===2&&typeof q[1]==="boolean"?`${strip(q[0])} (${q[1]?"V":"F"})`:Array.isArray(q[1])?`${strip(q[0])} [${q[1].join(" > ")}]`:`${strip(q[0])} → ${strip(q[1])}`;
const etxt=e=>e.k==="c"?`${strip(e.q)} → ${strip(e.o[0])}`:e.k==="tf"?`${strip(e.q)} (${e.a?"V":"F"})`:e.k==="n"?`${strip(e.q)} → ${e.a}`:`${strip(e.q)} [${e.k}]`;
let ut="";for(const[u,l]of ls){if(u!==ut){console.log(`\n== ${u}`);ut=u}
 if(l.isReto)continue;
 const B=c.QB[l.id]||[];const gens=[...(l.g||[]),...((l.lv||[]).flat())].filter(x=>x[0]!=="qb"&&x[0]!=="qbu").map(x=>x[0]);
 console.log(`\n#${l.id} ${strip(l.t)}${l.isReto?" [RETO]":""}${gens.length?" [gen: "+[...new Set(gens)].join(",")+"]":""}`);
 for(const pg of l.learn||[]){const v=pg.v||{};const walk=v.t==="combo"?(v.x||[]):[v];
  if(v.t==="piz"){if(process.env.Z)console.log(` Z: ${v.r.map(strip).join(" | ")}${v.e&&v.e.length?"  E: "+v.e.map(strip).join(" | "):""}`);continue}
  if(v.t==="paso"){console.log(` S: ${strip(v.q)} | ${v.s.map(strip).join(" | ")} | =${strip(v.r)}`);continue}
  if(v.t==="vida"){console.log(` vida: ${strip(v.h)} ${strip(v.q)} → ${strip((v.o.find(o=>o[1])||[])[0])}`);continue}
  if(v.t==="info")continue;
  let extra="";for(const w of walk){if(!w)continue;if(w.t==="cards")extra+=` {cards: ${w.x.map(x=>x.map(strip).join(" ")).join("; ")}}`;else if(w.t==="steps")extra+=` {steps: ${w.x.map(strip).join(" > ")}}`;else if(w.t==="emo")extra+=` {${strip(w.x)}}`;else if(w.t&&w.t!=="photo"&&w.t!=="lam")extra+=` {${w.t}}`}
  console.log(` ${pg.fe?"FE ":""}${strip(pg.h)}: ${strip(pg.p)}${extra}`)}
 [0,1,2].forEach(t=>{if((B[t]||[]).length)console.log(` Q${t}: ${B[t].map(qtxt).join(" ¦ ")}`)});
 if((l.ex||[]).length)console.log(` EX: ${l.ex.map(etxt).join(" ¦ ")}`);if((l.rx||[]).length)console.log(` RX: ${l.rx.map(etxt).join(" ¦ ")}`)}
