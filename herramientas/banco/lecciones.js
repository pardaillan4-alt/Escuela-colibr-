// Uso: node herr/lecciones.js  →  herr/lecciones.json
// Carga la app SIN los bancos ampliados (banco-*.js) y anota, por lección, lo que ya tiene:
// materia, título, si tiene pizarrón / ejemplo / infografía, tamaño del banco por nivel y las preguntas existentes.
const fs=require('fs'),vm=require('vm'),path=require('path');
const dir=path.join(__dirname,'..');
function fuentes(){const loc=path.join(__dirname,'..','build-order.txt');
 if(fs.existsSync(loc)){const d=path.join(__dirname,'..');return fs.readFileSync(loc,'utf8').trim().split(/\s+/).filter(f=>!/^banco-/.test(f)).map(f=>path.join(d,f))}
 const R=path.join(__dirname,'..','..'),m=/JS=\(([\s\S]*?)\)/.exec(fs.readFileSync(path.join(R,'build.sh'),'utf8'));
 return m[1].trim().split(/\s+/).filter(f=>!/^src\/banco\//.test(f)).map(f=>path.join(R,f))}
const files=fuentes();
const c={console,document:{querySelector:()=>null,addEventListener(){},getElementById:()=>null,createElement:()=>({style:{}})},localStorage:{getItem:()=>null,setItem(){}},navigator:{},location:{protocol:"file:",hostname:""},setTimeout(){},setInterval(){},matchMedia:()=>({matches:false,addEventListener(){}})};
c.window=c;c.globalThis=c;vm.createContext(c);
vm.runInContext(files.map(f=>fs.readFileSync(f,'utf8')).join('\n')+";this.SUBJ=SUBJ;this.QB=QB;",c);
const strip=s=>String(s==null?"":s).replace(/<[^>]+>/g,"").replace(/\s+/g," ").trim();
const out={};
for(const s of c.SUBJ)for(const u of s.units)for(const l of u.ls){
 const has=t=>(l.learn||[]).some(pg=>pg.v&&(pg.v.t===t||(pg.v.t==="combo"&&(pg.v.x||[]).some(x=>x&&x.t===t))));
 const B=c.QB[l.id]||[];
 const gens=[...(l.g||[]),...((l.lv||[]).flat())].filter(x=>x[0]!=="qb"&&x[0]!=="qbu");
 /* clave de cada pregunta existente: igual que exKey de la app (pregunta + respuesta correcta) */
 const N=x=>strip(x).toLowerCase();const qs=[];
 B.forEach(t=>(t||[]).forEach(q=>qs.push(q.length===2&&typeof q[1]==="boolean"?N(q[0]):Array.isArray(q[1])?N(q[0])+">"+q[1].map(N).join(">"):N(q[0])+"|"+N(q[1]))));
 (l.ex||[]).concat(l.rx||[]).forEach(e=>qs.push(e.k==="c"?N(e.q)+"|"+N((e.o||[])[0]):e.k==="ord"?N(e.q)+">"+(e.items||[]).map(N).join(">"):N(e.q)));
 out[l.id]={s:s.id,g:s.g||0,t:strip(l.t),piz:has("piz"),paso:has("paso"),info:has("info"),qb:[0,1,2].map(i=>(B[i]||[]).length),ex:(l.ex||[]).length,rx:(l.rx||[]).length,gens:gens.length>0,lv:!!l.lv,reto:!!l.isReto,qs};
}
fs.writeFileSync(path.join(__dirname,'lecciones.json'),JSON.stringify(out));
console.log('lecciones',Object.keys(out).length);
