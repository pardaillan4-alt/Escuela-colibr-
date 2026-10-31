// node render.js body <grado>   → out/g<g>-body.pdf, out/g<g>-key.pdf, out/g<g>-data.json
// node render.js front <grado>  → out/g<g>-front.pdf (portada + índice) usando out/g<g>-pages.json
const {chromium}=require('playwright');const fs=require('fs');const path=require('path');
const [,,mode,gs]=process.argv;const g=+gs;const OUT=path.join(__dirname,'out');fs.mkdirSync(OUT,{recursive:true});
// Lee los estilos y el código de la app desde la raíz del repositorio
const C=path.join(__dirname,'..','..');
const head=fs.readFileSync(C+'/src/head.html','utf8').replace(/<link[^>]+>\n?/g,'');
const base=`<!doctype html><html lang="es-MX"><head><meta charset="utf-8">${head}<style>${fs.readFileSync(__dirname+'/print.css','utf8')}</style></head><body><div id="doc"></div><script>${fs.readFileSync(C+'/index.html','utf8').split('<script>')[1].split('</script>')[0].replace(/\ninit\(\);\s*$/,'')}</script><script>${fs.readFileSync(__dirname+'/wb.js','utf8')}</script></body></html>`;
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const GN={1:"1.º",2:"2.º",3:"3.º"};
(async()=>{const b=await chromium.launch();const p=await b.newPage();p.on('pageerror',e=>console.log('pageerror',e.message));
 fs.writeFileSync(OUT+'/base.html',base);await p.goto('file://'+OUT+'/base.html');await p.waitForTimeout(300);
 const pdf=async f=>{await p.evaluate(()=>document.fonts.ready);await p.pdf({path:f,format:'Letter',printBackground:true,preferCSSPageSize:true})};
 if(mode==='body'){
  const r=await p.evaluate(g=>{const r=buildGrade(g);document.getElementById('doc').innerHTML=r.html;return{key:r.key,toc:r.toc}},g);
  await p.evaluate(()=>{const f=document.querySelector('#doc>*');if(f)f.style.breakBefore='auto'});
  await pdf(`${OUT}/g${g}-body.pdf`);
  // Solucionario
  const key=`<section class="wkey"><header class="wh" style="--sc:#1b2a44"><div class="whl"><p class="wk">${GN[g]} de primaria · Para papás y maestros</p><h2>Solucionario</h2></div></header><p class="wtext" style="margin-top:4mm">Las respuestas siguen el orden de los ejercicios de cada hoja. En las preguntas para ordenar se indica el número que va en cada cuadro, de arriba hacia abajo. Los dibujos y las respuestas personales no tienen respuesta única: lo importante es conversar con el niño sobre lo que escribió.</p>${r.key.map(s=>`<h3 class="kh" style="--sc:var(--${s.c})">${esc(s.s)}</h3>${s.ls.map(l=>`<div class="kl"><b>${l.n}. ${esc(l.t)}</b><ol>${l.a.map(a=>`<li>${esc(a)}</li>`).join('')}</ol></div>`).join('')}`).join('')}</section>`;
  await p.evaluate(h=>{document.getElementById('doc').innerHTML=h;const st=document.createElement('style');st.textContent=`.wkey{columns:2;column-gap:8mm;font-size:8.6pt;line-height:1.3}.wkey .wh,.wkey>p{column-span:all}.kh{column-span:none;font:700 11pt var(--display);color:var(--sc);margin:4mm 0 1.5mm;break-after:avoid}.kl{break-inside:avoid;margin-bottom:2mm}.kl b{font-family:var(--display);font-size:8.6pt}.kl ol{margin:.5mm 0 0;padding-left:5mm}.kl li{margin:0}`;document.head.appendChild(st)},key);
  await pdf(`${OUT}/g${g}-key.pdf`);
  fs.writeFileSync(`${OUT}/g${g}-data.json`,JSON.stringify(r.toc));
 } else {
  const toc=JSON.parse(fs.readFileSync(`${OUT}/g${g}-data.json`,'utf8')),pages=JSON.parse(fs.readFileSync(`${OUT}/g${g}-pages.json`,'utf8'));
  const html=await p.evaluate(({g,toc,pages,GNg})=>{const subs=gSubj(g);
   const cover=`<section class="cov"><div class="covbird">${bird("big")}</div><p class="wk">Escuelita Colibrí</p><h1>Cuaderno de trabajo</h1><p class="covg">${GNg} de primaria</p><div class="covsub">${subs.map(s=>`<span style="${sv(s)}"><span class="whi">${SICON[s.c||s.id]}</span>${s.n}</span>`).join('')}</div><div class="covname"><span>Nombre: <i></i></span><span>Ciclo escolar: <i></i></span></div><div class="covpray">${CROSS}<p><b>Oración antes de estudiar.</b> ${PRAYER}</p></div></section>`;
   const how=`<section class="how"><h2>Cómo usar este cuaderno</h2><ul><li>Cada lección de la app tiene aquí su hoja de trabajo, en el mismo orden. Lo ideal es hacer la hoja después de la lección en la app.</li><li>Cada hoja empieza con la infografía para repasar, sigue con los ejercicios y termina con la sección «Con los ojos de la fe» o «Mi oración».</li><li>En Español hay renglones de caligrafía con doble raya. En Matemáticas hay operaciones para resolver en el cuaderno de cuadrícula.</li><li>El solucionario está al final. Revisen juntos los errores: son la mejor oportunidad para aprender.</li><li>Pueden imprimir solo una materia usando los números de página del índice.</li></ul></section>`;
   const t=`<section class="toc"><h2>Índice</h2>${toc.map(s=>`<div class="ts" style="${sv(subs.find(x=>'S-'+x.id===s.id))}"><p class="tsh"><span>${s.n}</span><b>${pages[s.id]}</b></p><ol>${s.ls.map(l=>`<li><span>${l.n}. ${l.t}</span><b>${pages[l.id]}</b></li>`).join('')}</ol></div>`).join('')}<p class="tsh tkey"><span>Solucionario</span><b>${pages.key}</b></p></section>`;
   return cover+how+t},{g,toc,pages,GNg:GN[g]});
  await p.evaluate(h=>{document.getElementById('doc').innerHTML=h;const st=document.createElement('style');st.textContent=`
.cov{height:240mm;display:flex;flex-direction:column;align-items:center;text-align:center;gap:3mm;border:3px solid #1d8f4e;border-radius:10mm;padding:12mm;box-sizing:border-box;background:#f2faf5;-webkit-print-color-adjust:exact;print-color-adjust:exact}
.covbird .bird.big{width:70mm;height:58mm}.cov .wk{font-size:12pt;color:#1d8f4e}.cov h1{margin:0;font:700 38pt/1 var(--display)}.covg{margin:0;font:600 22pt var(--display);color:#1d8f4e}
.covsub{display:grid;grid-template-columns:1fr 1fr;gap:3mm 8mm;margin-top:6mm;text-align:left;font:600 12pt var(--display)}.covsub>span{display:flex;align-items:center;gap:3mm;color:var(--sc)}.covsub .whi{width:10mm;height:10mm;border-radius:3mm}
.covname{margin-top:auto;width:100%;display:flex;flex-direction:column;gap:6mm;font:500 12pt var(--display);text-align:left}.covname span{display:flex;gap:3mm;align-items:flex-end}.covname i{flex:1;border-bottom:1.3px solid #1b2a44;height:7mm}
.covpray{display:flex;gap:3mm;text-align:left;font-size:10.5pt;font-style:italic;color:#4b5a72;border-top:1px solid #c9d4e0;padding-top:4mm}.covpray svg{color:#9c7305;flex:none;margin-top:2px}.covpray p{margin:0}
.how{break-before:page}.how h2,.toc h2{font:700 22pt var(--display);margin:0 0 4mm}.how ul{padding-left:6mm;font-size:12.5pt;display:flex;flex-direction:column;gap:2.5mm}
.toc{margin-top:10mm}.ts{break-inside:avoid;margin-bottom:5mm}.tsh{display:flex;justify-content:space-between;margin:0 0 1.5mm;font:700 13pt var(--display);color:var(--sc);border-bottom:2px solid var(--sc);padding-bottom:1mm}
.ts ol{margin:0;padding-left:7mm;columns:2;column-gap:10mm;font-size:10.5pt}.ts li{break-inside:avoid;display:flex;justify-content:space-between;gap:2mm}.ts li b{font-family:var(--display);font-weight:600;color:var(--soft)}.tkey{color:#1b2a44;border-color:#1b2a44}`;document.head.appendChild(st)},html);
  await pdf(`${OUT}/g${g}-front.pdf`);
 }
 await b.close()})();
