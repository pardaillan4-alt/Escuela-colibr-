/* ========= Ciencias: más láminas interactivas ========= */
/* --- Ciclo de vida de la mariposa --- */
LAM.mariposa={hint:"Toca cada etapa o usa «Paso a paso» para seguir la vida de la mariposa monarca.",parts:{
 huevo:["1. Huevo","La mariposa pone huevitos diminutos en las hojas del algodoncillo.","#f6d55c"],
 oruga:["2. Oruga","Del huevo sale una oruga que come y come hojas, y crece muy rápido.","#7ccf72"],
 crisalida:["3. Crisálida","La oruga se cuelga y se envuelve. Por dentro, ¡se transforma por completo!","#3fa34d"],
 mariposa:["4. Mariposa","Sale una mariposa con alas. Las monarcas viajan miles de kilómetros hasta Michoacán.","#f2a03d"]},
 seq:["huevo","oruga","crisalida","mariposa"],
 svg:()=>`<svg class="plantdx lamsvg" viewBox="0 0 360 300" role="img" aria-label="Ciclo de vida de la mariposa"><rect width="360" height="300" fill="#f3fbe9"/><circle cx="180" cy="150" r="100" fill="none" stroke="#b6d8a2" stroke-width="6" stroke-dasharray="10 8"/>${[[0,"→"],[90,"→"],[180,"→"],[270,"→"]].map(([a])=>`<path d="M0 -100l10 -6v12z" fill="#7aa86a" transform="translate(180 150) rotate(${a+45})"/>`).join("")}
<g data-p="huevo" data-act="lampart" data-v="mariposa:huevo"><ellipse cx="180" cy="44" rx="34" ry="22" fill="#9fd88f"/><g fill="#fff6c4" stroke="#d9b23a">${[[166,42],[178,36],[190,44],[176,52]].map(([x,y])=>`<ellipse cx="${x}" cy="${y}" rx="5" ry="6"/>`).join("")}</g></g>
<g data-p="oruga" data-act="lampart" data-v="mariposa:oruga">${[0,1,2,3,4,5].map(i=>`<circle cx="${272+i*12}" cy="${150+(i%2?-4:4)}" r="9" fill="${i%2?"#1b2a44":"#f6d55c"}" stroke="#fff" stroke-width="2"/>`).join("")}<circle cx="268" cy="150" r="10" fill="#1b2a44"/><path d="M264 140l-4-8M272 140l4-8" stroke="#1b2a44" stroke-width="2"/></g>
<g data-p="crisalida" data-act="lampart" data-v="mariposa:crisalida"><path d="M180 216v10" stroke="#7a5a3a" stroke-width="3"/><path d="M180 226c-18 6-18 46 0 54 18-8 18-48 0-54z" fill="#3fa34d"/><g fill="#e5b400"><circle cx="174" cy="244" r="2"/><circle cx="186" cy="244" r="2"/><circle cx="180" cy="236" r="2"/></g></g>
<g data-p="mariposa" data-act="lampart" data-v="mariposa:mariposa"><g transform="translate(70 150)"><path d="M0 0C-30-40-60-20-50 6-40 30-10 20 0 0z" fill="#f2a03d" stroke="#1b2a44" stroke-width="3"/><path d="M0 0C30-40 60-20 50 6 40 30 10 20 0 0z" fill="#f2a03d" stroke="#1b2a44" stroke-width="3"/><path d="M0 0C-24 10-30 34-12 34S0 12 0 0zM0 0C24 10 30 34 12 34S0 12 0 0z" fill="#e8892a" stroke="#1b2a44" stroke-width="3"/><path d="M0-10v40" stroke="#1b2a44" stroke-width="5" stroke-linecap="round"/><g fill="#fff"><circle cx="-38" cy="-4" r="2.5"/><circle cx="38" cy="-4" r="2.5"/><circle cx="-14" cy="28" r="2"/><circle cx="14" cy="28" r="2"/></g></g></g></svg>`};

/* --- Cadena alimentaria --- */
LAM.cadena={hint:"Toca cada eslabón de la cadena: ¿quién se come a quién? Las flechas van hacia el que come.",parts:{
 sol:["Sol","Da la energía a las plantas. Sin el Sol no habría cadena.","#ffc93c"],
 planta:["Productor: el pasto","Las plantas fabrican su alimento con la luz del Sol. Son los productores.","#3fa34d"],
 conejo:["Consumidor 1: el conejo","Come plantas. Es herbívoro.","#c9b28a"],
 coyote:["Consumidor 2: el coyote","Come conejos. Es carnívoro.","#a0703f"],
 aguila:["Consumidor 3: el águila","Está al final de esta cadena. También come conejos y serpientes.","#7a5a3a"],
 hongos:["Descomponedores","Hongos y bacterias deshacen los restos de plantas y animales, y devuelven nutrientes a la tierra.","#8f5ad6"]},
 seq:["sol","planta","conejo","coyote","aguila","hongos"],
 svg:()=>{const n=(k,x,y,e,l)=>`<g data-p="${k}" data-act="lampart" data-v="cadena:${k}"><circle cx="${x}" cy="${y}" r="30" fill="#fff" stroke="${LAM.cadena.parts[k][2]}" stroke-width="4"/><text x="${x}" y="${y+12}" text-anchor="middle" font-size="32">${e}</text><text x="${x}" y="${y+46}" text-anchor="middle" font-size="11" font-weight="800" fill="#1b2a44">${l}</text></g>`;const ar=(x1,y1,x2,y2)=>`<path d="M${x1} ${y1}L${x2} ${y2}" stroke="#7a5a3a" stroke-width="3" marker-end="url(#ca)"/>`;
 return`<svg class="plantdx lamsvg" viewBox="0 0 360 260" role="img" aria-label="Cadena alimentaria"><defs><marker id="ca" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="#7a5a3a"/></marker></defs><rect width="360" height="260" fill="#f3fbe9"/>${ar(76,56,96,90)}${ar(120,124,148,124)}${ar(214,124,240,124)}${ar(204,100,264,56)}${ar(110,160,150,206)}${ar(266,152,218,206)}
${n("sol",50,40,"☀️","Sol")}${n("planta",90,124,"🌱","pasto")}${n("conejo",180,124,"🐇","conejo")}${n("coyote",270,124,"🐺","coyote")}${n("aguila",290,36,"🦅","águila")}${n("hongos",184,214,"🍄","hongos")}</svg>`}};

/* --- Estados del agua (con termómetro) --- */
VX.estados=()=>`<div class="mt est" data-t="20"><svg viewBox="0 0 300 200" class="est-svg" role="img" aria-label="Partículas de agua"><rect width="300" height="200" rx="16" fill="#eef7ff"/><rect x="250" y="20" width="22" height="160" rx="11" fill="#fff" stroke="#9fb3c8" stroke-width="2"/><rect class="est-th" x="255" y="100" width="12" height="76" rx="6" fill="#e5484d"/><circle cx="261" cy="178" r="13" fill="#e5484d"/><g class="est-p"></g></svg><p class="mt-r est-r" aria-live="polite"></p><div class="row center"><button class="btn ghost" data-act="estset" data-v="-10" style="--sc:var(--cie)">❄️ Enfriar</button><button class="btn ghost" data-act="estset" data-v="10" style="--sc:var(--cie)">🔥 Calentar</button></div></div>`;
function estDraw(w){const t=+w.dataset.t,st=t<=0?0:t<100?1:2;const P=[];for(let i=0;i<24;i++){let x,y;if(st===0){x=60+(i%6)*24;y=110+Math.floor(i/6)*20}else if(st===1){x=50+((i*37)%150)+((i*13)%9);y=126+((i*29)%54)}else{x=20+((i*53)%210);y=20+((i*41)%160)}P.push(`<circle cx="${x}" cy="${y}" r="8" fill="#3d8bfd" opacity=".85" class="est-dot est-${st}" style="animation-delay:-${(i%7)*0.13}s"/>`)}
 if(st===0)P.unshift(`<rect x="44" y="96" width="156" height="92" rx="6" fill="#d9f0ff" stroke="#9fd0ff" stroke-width="2"/>`);if(st===1)P.unshift(`<path d="M36 110h178v70a10 10 0 0 1-10 10H46a10 10 0 0 1-10-10z" fill="#bfe3ff"/>`);
 w.querySelector(".est-p").innerHTML=P.join("");const h=Math.max(6,Math.min(150,(t+20)*1.1));const th=w.querySelector(".est-th");th.setAttribute("y",176-h);th.setAttribute("height",h);
 const txt=[`${t} °C: <b>sólido (hielo)</b>. Las partículas están juntas y casi no se mueven.`,`${t} °C: <b>líquido (agua)</b>. Las partículas se mueven y el agua toma la forma del recipiente.`,`${t} °C: <b>gas (vapor)</b>. Las partículas se separan mucho y vuelan por todas partes.`][st];w.querySelector(".est-r").innerHTML=txt;return txt}
ACT.estset=(v,b)=>{const w=b.closest(".est");w.dataset.t=Math.max(-20,Math.min(120,+w.dataset.t+ +v));const t=estDraw(w);say(t.replace(/<[^>]+>/g,""),true)};

/* --- Fases de la Luna --- */
const FASES=[["Luna nueva","No la vemos porque su lado iluminado mira hacia el Sol."],["Luna creciente","Se ve una parte iluminada que cada noche crece."],["Cuarto creciente","Vemos la mitad iluminada."],["Gibosa creciente","Casi llena."],["Luna llena","La vemos completa y redonda. La Pascua se celebra después de la primera luna llena de primavera."],["Gibosa menguante","Empieza a verse más pequeña."],["Cuarto menguante","Vemos la otra mitad iluminada."],["Luna menguante","Queda un hilito de luz antes de la luna nueva."]];
function lunaSvg(i){const f=i/8,ill=(1-Math.cos(f*2*Math.PI))/2,R=60,right=f<.5;const rx=Math.abs(1-2*ill)*R;const sweep=ill>.5;
 const lit=ill<.02?"":ill>.98?`<circle cx="100" cy="100" r="${R}" fill="#fff4c2"/>`:`<path d="M100 ${100-R}A${R} ${R} 0 0 ${right?1:0} 100 ${100+R}A${rx} ${R} 0 0 ${(right?!sweep:sweep)?1:0} 100 ${100-R}z" fill="#fff4c2"/>`;
 return`<svg viewBox="0 0 200 200" class="luna-svg" role="img" aria-label="${FASES[i][0]}"><rect width="200" height="200" rx="18" fill="#0d1330"/>${Array.from({length:18},(_,k)=>`<circle cx="${(k*67)%200}" cy="${(k*41)%200}" r="1" fill="#fff" opacity=".6"/>`).join("")}<circle cx="100" cy="100" r="${R}" fill="#3a4060"/>${lit}</svg>`}
VX.lunafases=()=>`<div class="mt luna" data-i="4"><div class="luna-w">${lunaSvg(4)}</div><p class="mt-r luna-t" aria-live="polite"><b>${FASES[4][0]}:</b> ${FASES[4][1]}</p><input type="range" min="0" max="7" value="4" class="luna-r" aria-label="Fase de la Luna" data-act="lunar"><div class="row center"><button class="btn ghost" data-act="lunastep" data-v="-1" style="--sc:var(--cie)">⏪ Antes</button><button class="btn ghost" data-act="lunastep" data-v="1" style="--sc:var(--cie)">Después ⏩</button></div><p class="note">La Luna tarda unos 29 días en pasar por todas sus fases.</p></div>`;
function lunaSet(w,i){w.dataset.i=i;w.querySelector(".luna-w").innerHTML=lunaSvg(i);w.querySelector(".luna-t").innerHTML=`<b>${FASES[i][0]}:</b> ${FASES[i][1]}`;w.querySelector(".luna-r").value=i;say(FASES[i][0]+". "+FASES[i][1],true)}
ACT.lunastep=(v,b)=>{const w=b.closest(".luna");lunaSet(w,(+w.dataset.i+ +v+8)%8)};
if(typeof document!=="undefined")document.addEventListener("input",e=>{if(e.target.classList&&e.target.classList.contains("luna-r"))lunaSet(e.target.closest(".luna"),+e.target.value)});
{const _vt=visText;visText=function(v){if(v&&(v.t==="estados"||v.t==="lunafases"))return"";return _vt(v)}}
{const _ln=learn;learn=function(){const r=_ln.apply(this,arguments);try{document.querySelectorAll(".est").forEach(w=>estDraw(w))}catch(e){}return r}}

placeVisuals({
"2c4":{"La mariposa":"L:mariposa"},
"2c6":{"¿Quién se come a quién?":"L:cadena"},
"2c7":{"Sólido, líquido y gaseoso":{t:"estados"}},
"3c7":{"Estados de la materia":{t:"estados"}},
c8:{"La Luna y las estrellas":{t:"lunafases"}},
"3c9":{"La Luna":{t:"lunafases"}},
"3c5":{"Con y sin columna":"L:esqueleto"}});
