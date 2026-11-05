/* ========= Láminas interactivas del cuerpo humano (dibujadas en la app, sin fotos) ========= */
const BONE="#f6f2e4",BONE_S="#c9bfa3";
const bone=(x1,y1,x2,y2,w)=>`<path d="M${x1} ${y1}L${x2} ${y2}" stroke="${BONE_S}" stroke-width="${w+3}" stroke-linecap="round"/><path d="M${x1} ${y1}L${x2} ${y2}" stroke="${BONE}" stroke-width="${w}" stroke-linecap="round"/><circle cx="${x1}" cy="${y1}" r="${w*.75}" fill="${BONE}" stroke="${BONE_S}" stroke-width="1.5"/><circle cx="${x2}" cy="${y2}" r="${w*.75}" fill="${BONE}" stroke="${BONE_S}" stroke-width="1.5"/>`;
const mirror=s=>`<g transform="translate(360 0) scale(-1 1)">${s}</g>`;

/* --- El esqueleto --- */
LAM.esqueleto={hint:"Toca un hueso para saber cómo se llama. Con el botón «Rayos X» puedes ver por dentro o por fuera.",parts:{
 craneo:["Cráneo","Es como un casco de hueso que protege el cerebro. La mandíbula es el único hueso de la cabeza que se mueve: ¡nos deja masticar y hablar!"],
 columna:["Columna vertebral","Está hecha de muchos huesitos llamados vértebras, apilados como cuentas. Nos mantiene derechos y nos deja agacharnos y girar."],
 costillas:["Costillas","Forman una jaula que protege el corazón y los pulmones. Tenemos 12 pares, ¡24 costillas!"],
 brazos:["Huesos del brazo","El húmero va del hombro al codo; el radio y el cúbito, del codo a la muñeca. Gracias al codo podemos doblar el brazo."],
 manos:["Huesos de la mano","Cada mano tiene 27 huesos pequeñitos. Por eso podemos escribir, abotonar y hacer trabajos finos."],
 cadera:["Cadera (pelvis)","Es un hueso ancho, como una cuenca, que une la columna con las piernas y sostiene el peso del cuerpo."],
 piernas:["Huesos de la pierna","El fémur, en el muslo, es el hueso más largo y fuerte del cuerpo. La rótula protege la rodilla, y la tibia y el peroné llegan al tobillo."],
 pies:["Huesos del pie","Cada pie tiene 26 huesos que forman un arco para caminar, correr y saltar sin lastimarnos."]},
 quiz:[["¿Qué hueso protege tu cerebro?","craneo"],["¿Qué huesos cuidan tu corazón y tus pulmones?","costillas"],["¿Dónde está el hueso más largo del cuerpo, el fémur?","piernas"],["¿Qué te mantiene derecho y te deja agacharte?","columna"],["¿Con qué huesos escribes y dibujas?","manos"],["¿Qué hueso une la columna con las piernas?","cadera"],["¿Dónde está el codo?","brazos"]],
 svg:()=>{const vert=Array.from({length:13},(_,i)=>`<rect x="173" y="${104+i*12}" width="14" height="9" rx="3" fill="${BONE}" stroke="${BONE_S}" stroke-width="1.2"/>`).join("");
 const ribs=[0,1,2,3,4,5].map(i=>{const y=118+i*13,w=44-Math.abs(i-2)*3;return`<path d="M174 ${y}C${174-w} ${y-6} ${174-w-6} ${y+16} ${176-w+6} ${y+22}" stroke="${BONE}" stroke-width="5" fill="none" stroke-linecap="round"/>`}).join("");
 const arm=`${bone(142,110,124,190,9)}${bone(124,192,114,262,5)}${bone(128,194,120,262,4)}`;
 const hand=`<g stroke="${BONE}" stroke-width="3" stroke-linecap="round"><path d="M117 266l-8 22M117 266l-3 25M117 266l2 25M117 266l7 22M115 268l-12 10"/></g><circle cx="117" cy="267" r="6" fill="${BONE}" stroke="${BONE_S}"/>`;
 const leg=`${bone(164,292,158,372,11)}<circle cx="158" cy="376" r="7" fill="${BONE}" stroke="${BONE_S}" stroke-width="1.5"/>${bone(157,384,155,446,7)}${bone(164,386,163,444,4)}`;
 const foot=`<path d="M146 452h22q4 0 4 6v4h-34q0-10 8-10z" fill="${BONE}" stroke="${BONE_S}" stroke-width="1.5"/><g stroke="${BONE_S}" stroke-width="1"><path d="M144 456v6M150 455v7M156 455v7"/></g>`;
 return`<svg class="plantdx lamsvg esq" viewBox="0 0 360 480" role="img" aria-label="El esqueleto humano"><defs><radialGradient id="xr" cx=".5" cy=".4" r=".7"><stop offset="0" stop-color="#25466e"/><stop offset="1" stop-color="#0d1b30"/></radialGradient></defs><rect class="xr-bg" width="360" height="480" fill="url(#xr)"/>
<g data-p="craneo" data-act="lampart" data-v="esqueleto:craneo"><path d="M180 22c-30 0-44 22-44 46 0 16 6 26 14 32v10h60v-10c8-6 14-16 14-32 0-24-14-46-44-46z" fill="${BONE}" stroke="${BONE_S}" stroke-width="2"/><ellipse cx="166" cy="70" rx="9" ry="10" fill="#22324a"/><ellipse cx="194" cy="70" rx="9" ry="10" fill="#22324a"/><path d="M180 80l-5 12h10z" fill="#22324a"/><path d="M156 100q24 14 48 0" stroke="${BONE_S}" stroke-width="2" fill="none"/><g stroke="${BONE_S}" stroke-width="1.5"><path d="M166 100v7M174 101v8M182 101v8M190 100v7"/></g></g>
<g data-p="columna" data-act="lampart" data-v="esqueleto:columna">${vert}</g>
<g data-p="costillas" data-act="lampart" data-v="esqueleto:costillas"><rect x="176" y="114" width="8" height="64" rx="4" fill="${BONE}" stroke="${BONE_S}"/>${ribs}${mirror(ribs)}<path d="M150 110q30-10 60 0" stroke="${BONE}" stroke-width="6" fill="none" stroke-linecap="round"/></g>
<g data-p="brazos" data-act="lampart" data-v="esqueleto:brazos">${arm}${mirror(arm)}</g>
<g data-p="manos" data-act="lampart" data-v="esqueleto:manos">${hand}${mirror(hand)}</g>
<g data-p="cadera" data-act="lampart" data-v="esqueleto:cadera"><path d="M180 262c-14 0-34-6-40 4-6 12 4 28 18 30 10 2 16-6 22-6s12 8 22 6c14-2 24-18 18-30-6-10-26-4-40-4z" fill="${BONE}" stroke="${BONE_S}" stroke-width="2"/><ellipse cx="180" cy="282" rx="10" ry="8" fill="#22324a"/></g>
<g data-p="piernas" data-act="lampart" data-v="esqueleto:piernas">${leg}${mirror(leg)}</g>
<g data-p="pies" data-act="lampart" data-v="esqueleto:pies">${foot}${mirror(foot)}</g>
<g class="piel" pointer-events="none"><path d="M180 18c-28 0-46 20-46 48 0 22 12 36 26 42v6c-14 2-28 6-32 14l-24 120c-2 8 2 14 6 16 6 2 12-2 14-10l18-80 6 40-2 24c-6 30-10 70-10 110v58c0 8 4 12 12 12h20c6 0 8-4 8-8v-78l4-50 4 50v78c0 4 2 8 8 8h20c8 0 12-4 12-12v-58c0-40-4-80-10-110l-2-24 6-40 18 80c2 8 8 12 14 10 4-2 8-8 6-16l-24-120c-4-8-18-12-32-14v-6c14-6 26-20 26-42 0-28-18-48-46-48z" fill="#f2c79b" stroke="#d9a777" stroke-width="2"/><circle cx="166" cy="64" r="4" fill="#1b2a44"/><circle cx="194" cy="64" r="4" fill="#1b2a44"/><path d="M168 86q12 8 24 0" stroke="#c0392b" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M134 54c4-30 88-30 92 0-20-12-72-12-92 0z" fill="#5a3a22"/><path d="M128 140h104l8 100h-120z" fill="#ffc93c" opacity=".95"/><path d="M134 246h92l6 60h-104z" fill="#3d6fd6"/></g>
<text class="xr-t" x="14" y="24" font-size="13" font-weight="800" fill="#9fd0ff">RAYOS X</text></svg>`},
 extra:()=>`<div class="row center lam-ctl"><button class="btn ghost" data-act="lamxray" style="--sc:var(--cie)">🩻 Ver por fuera / por dentro</button></div><p class="note lam-dato">💡 Un bebé nace con unos 300 huesos; al crecer, algunos se juntan y un adulto tiene 206.</p>`};
ACT.lamxray=(v,b)=>{const box=b.closest(".lam");const on=box.classList.toggle("fuera");say(on?"Así se ve por fuera. Toca otra vez para ver los huesos.":"Ahora ves los huesos, como en una radiografía.",true)};

/* --- Los músculos --- */
LAM.musculos={hint:"Presiona «Dobla el brazo» y mira cómo trabajan los músculos. Toca cada parte para saber qué es.",parts:{
 biceps:["Bíceps","Está en el frente del brazo. Cuando se encoge y se pone gordito, jala el antebrazo y el brazo se dobla.","#e5484d"],
 triceps:["Tríceps","Está atrás del brazo. Cuando él se encoge, el brazo se estira. Los músculos trabajan en equipo: uno jala y el otro descansa.","#f08a5d"],
 tendon:["Tendón","Es como una cuerda fuerte que pega el músculo al hueso. Sin tendones, los músculos no podrían mover los huesos.","#f6f2e4"],
 huesos:["Huesos","Los huesos son la estructura; los músculos los mueven. Solos, los huesos no pueden moverse.","#d9d2bd"],
 codo:["Codo (articulación)","Es donde se unen dos huesos y pueden doblarse, como una bisagra de puerta. Otras articulaciones: rodilla, hombro, muñeca.","#ffd24a"]},
 svg:()=>`<svg class="plantdx lamsvg mus" viewBox="0 0 360 300" role="img" aria-label="Los músculos del brazo"><rect width="360" height="300" fill="#fff6ec"/><g transform="translate(0 90)"><path d="M0 40h50q14 0 14 14v130q0 14-14 14H0z" fill="#ffc93c"/>
<path d="M50 92q20-20 50-18h108q20 2 20 20v32q0 18-20 20H100q-30 2-50-18z" fill="#f2c79b" stroke="#d9a777" stroke-width="2" opacity=".6"/>
<g data-p="huesos" data-act="lampart" data-v="musculos:huesos">${bone(64,112,206,112,12)}</g>
<g data-p="triceps" data-act="lampart" data-v="musculos:triceps"><ellipse class="mtri" cx="132" cy="134" rx="62" ry="12" fill="#f08a5d" stroke="#c4583a" stroke-width="2"/><path d="M84 134h96" stroke="#c4583a" stroke-width="1" opacity=".5"/></g>
<g data-p="biceps" data-act="lampart" data-v="musculos:biceps"><ellipse class="mbic" cx="134" cy="88" rx="58" ry="14" fill="#e5484d" stroke="#a8262b" stroke-width="2"/><path d="M90 88h88" stroke="#a8262b" stroke-width="1" opacity=".5"/></g>
<g class="ante"><path d="M206 92h96q30 0 30 20t-30 20h-96z" fill="#f2c79b" stroke="#d9a777" stroke-width="2" opacity=".6"/>${bone(212,104,320,104,7)}${bone(212,120,320,120,6)}<circle cx="334" cy="112" r="18" fill="#f2c79b" stroke="#d9a777" stroke-width="2"/>
<g data-p="tendon" data-act="lampart" data-v="musculos:tendon"><path d="M188 90Q214 88 228 100" stroke="#fffaf0" stroke-width="5" fill="none" stroke-linecap="round"/><path d="M188 90Q214 88 228 100" stroke="#bdb39a" stroke-width="1" fill="none"/><path d="M192 136Q206 140 214 128" stroke="#fffaf0" stroke-width="5" fill="none" stroke-linecap="round"/></g></g>
<g data-p="codo" data-act="lampart" data-v="musculos:codo"><circle cx="208" cy="112" r="15" fill="#ffd24a" opacity=".55" stroke="#e8a317" stroke-width="2"/></g>
</g><text x="180" y="30" text-anchor="middle" font-size="14" font-weight="700" fill="#7a5a3a" class="mus-t">Brazo estirado: el tríceps trabaja</text></svg>`,
 extra:()=>`<div class="row center lam-ctl"><button class="btn" data-act="lamflex" style="--sc:var(--cie)">💪 Dobla el brazo</button></div><p class="note lam-dato">💡 Tenemos más de 600 músculos. ¡El corazón también es un músculo que nunca descansa!</p>`};
ACT.lamflex=(v,b)=>{const box=b.closest(".lam");const on=box.classList.toggle("flex");b.textContent=on?"✋ Estira el brazo":"💪 Dobla el brazo";const t=box.querySelector(".mus-t");if(t)t.textContent=on?"Brazo doblado: el bíceps se encoge":"Brazo estirado: el tríceps trabaja";
 const an=box.querySelector(".ante"),bi=box.querySelector(".mbic"),tr=box.querySelector(".mtri");const a0=+(box.dataset.fa||0),a1=on?1:0,t0=performance.now();cancelAnimationFrame(box._fr);
 const st=f=>{an.setAttribute("transform",`rotate(${-105*f} 208 112)`);bi.setAttribute("ry",14+12*f);bi.setAttribute("rx",58-14*f);tr.setAttribute("ry",12-4*f);tr.setAttribute("rx",62+4*f);box.dataset.fa=f};
 const go=now=>{const k=Math.min(1,(now-t0)/700),e=k<.5?2*k*k:1-Math.pow(-2*k+2,2)/2;st(a0+(a1-a0)*e);if(k<1)box._fr=requestAnimationFrame(go)};box._fr=requestAnimationFrame(go);
 const msg=on?"El bíceps se encoge y se pone gordito. Así jala el hueso y el brazo se dobla.":"Ahora el tríceps se encoge y el brazo se estira. Los músculos trabajan en equipo.";box.querySelector(".pd-info").innerHTML=msg;say(msg,true)};

/* --- El corazón --- */
LAM.corazon={hint:"Mira cómo late. Toca cada parte del corazón y prueba los botones para cambiar el ritmo.",parts:{
 ad:["Aurícula derecha","Recibe la sangre «cansada», sin oxígeno, que regresa de todo el cuerpo.","#6c9cf2"],
 vd:["Ventrículo derecho","Empuja esa sangre hacia los pulmones para que se llene de oxígeno.","#3d6fd6"],
 ai:["Aurícula izquierda","Recibe la sangre limpia, llena de oxígeno, que viene de los pulmones.","#f27a7e"],
 vi:["Ventrículo izquierdo","Es la parte más fuerte del corazón: empuja la sangre con oxígeno a todo el cuerpo.","#d63a40"],
 aorta:["Arteria aorta","Es el tubo más grande del cuerpo. Las arterias llevan la sangre del corazón al cuerpo.","#e5484d"],
 venas:["Venas cavas","Las venas traen la sangre de regreso al corazón. En los dibujos las pintamos de azul.","#5b8def"],
 pulmonar:["Arteria pulmonar","Lleva la sangre del corazón a los pulmones para cargar oxígeno.","#7aa5f5"]},
 seq:["venas","ad","vd","pulmonar","ai","vi","aorta"],
 svg:()=>`<svg class="plantdx lamsvg cor" viewBox="0 0 360 340" role="img" aria-label="El corazón"><rect width="360" height="340" fill="#fff4f2"/><g class="latido">
<g data-p="venas" data-act="lampart" data-v="corazon:venas"><path d="M118 20v96" stroke="#5b8def" stroke-width="24" stroke-linecap="round"/><path d="M110 250v60" stroke="#5b8def" stroke-width="22" stroke-linecap="round"/></g>
<g data-p="aorta" data-act="lampart" data-v="corazon:aorta"><path d="M178 130V70q0-40 44-40t44 40v40" stroke="#e5484d" stroke-width="26" fill="none" stroke-linecap="round"/><g stroke="#e5484d" stroke-width="10" stroke-linecap="round"><path d="M196 44l-8-26M222 34V8M246 42l10-24"/></g></g>
<g data-p="pulmonar" data-act="lampart" data-v="corazon:pulmonar"><path d="M168 132q-6-40 26-58h52" stroke="#7aa5f5" stroke-width="20" fill="none" stroke-linecap="round"/><path d="M190 76q-40-6-80 4" stroke="#7aa5f5" stroke-width="14" fill="none" stroke-linecap="round"/></g>
<g data-p="ad" data-act="lampart" data-v="corazon:ad"><path d="M96 120q-10 44 12 74h62v-70q-30-20-74-4z" fill="#6c9cf2" stroke="#2c55a8" stroke-width="3"/></g>
<g data-p="ai" data-act="lampart" data-v="corazon:ai"><path d="M184 124q40-20 80 0 14 36-4 70h-76z" fill="#f27a7e" stroke="#a8262b" stroke-width="3"/></g>
<g data-p="vd" data-act="lampart" data-v="corazon:vd"><path d="M108 198h70v116q-50-40-70-116z" fill="#3d6fd6" stroke="#2c55a8" stroke-width="3"/></g>
<g data-p="vi" data-act="lampart" data-v="corazon:vi"><path d="M184 198h78q-20 80-84 122l6-6z" fill="#d63a40" stroke="#a8262b" stroke-width="3"/></g>
<path d="M181 124v196" stroke="#7a2026" stroke-width="5" stroke-linecap="round"/><path d="M104 196h160" stroke="#fff" stroke-width="3" stroke-dasharray="8 6" opacity=".9"/></g>
<g class="flujo" fill="none" stroke-width="3" stroke-dasharray="6 8" stroke-linecap="round"><path d="M70 60q-10 80 30 120" stroke="#2c55a8"/><path d="M290 140q20 70-40 140" stroke="#a8262b"/></g>
<text x="14" y="330" font-size="12" font-weight="700" fill="#2c55a8">🔵 sin oxígeno</text><text x="346" y="330" text-anchor="end" font-size="12" font-weight="700" fill="#a8262b">con oxígeno 🔴</text></svg>`,
 extra:()=>`<div class="row center lam-ctl"><button class="btn ghost" data-act="lambpm" data-v="70" style="--sc:var(--cie)">🧘 En reposo</button><button class="btn ghost" data-act="lambpm" data-v="130" style="--sc:var(--cie)">🏃 Corriendo</button></div><p class="note lam-dato bpm-t">❤️ Late unas <b>80</b> veces por minuto. Pon tu mano en el pecho: ¿lo sientes?</p>`};
ACT.lambpm=(v,b)=>{const box=b.closest(".lam"),n=+v;box.style.setProperty("--bt",(60/n).toFixed(2)+"s");const t=box.querySelector(".bpm-t");
 const msg=n>100?"Al correr, los músculos necesitan más oxígeno y el corazón late más rápido: unas 130 veces por minuto.":"En reposo el corazón late tranquilo, unas 70 veces por minuto.";if(t)t.innerHTML=`❤️ ${msg}`;say(msg,true)};

/* --- Los pulmones --- */
LAM.pulmones={hint:"Presiona «Respira conmigo» y respira al ritmo de los pulmones. Toca cada parte para conocerla.",parts:{
 nariz:["Nariz","Por aquí entra el aire. Sus pelitos y su mucosidad atrapan el polvo y lo calientan antes de llegar a los pulmones.","#f2c79b"],
 traquea:["Tráquea","Es un tubo con anillos duros que lleva el aire de la garganta al pecho.","#b8d7f2"],
 bronquios:["Bronquios","La tráquea se divide en dos tubos, uno para cada pulmón, que se ramifican como un árbol.","#8fbfe8"],
 pulmones:["Pulmones","Son dos bolsas esponjosas. Al inhalar se llenan de aire y la sangre toma el oxígeno; al exhalar sacamos el aire usado.","#ff9eaa"],
 alveolos:["Alvéolos","Son millones de bolsitas diminutas, como racimos de uvas, al final de los bronquios. Ahí el oxígeno pasa a la sangre.","#e86b80"],
 diafragma:["Diafragma","Es un músculo debajo de los pulmones. Cuando baja, entra el aire; cuando sube, el aire sale.","#d6604d"]},
 seq:["nariz","traquea","bronquios","pulmones","alveolos","diafragma"],
 svg:()=>{const lung=`<path d="M164 132c-24-8-56 8-66 50-10 44-6 84 6 104 12 10 40 6 60-2z" fill="#ff9eaa" stroke="#d65a6e" stroke-width="3"/>`;const br=`<g stroke="#8fbfe8" stroke-width="6" fill="none" stroke-linecap="round"><path d="M176 132q-20 10-34 34M150 152q-14 8-22 30M146 160q2 30-8 52M136 196q-14 16-16 40"/></g>`;
 return`<svg class="plantdx lamsvg pul" viewBox="0 0 360 340" role="img" aria-label="Los pulmones"><rect width="360" height="340" fill="#eef7ff"/><path d="M130 20c0-30 100-30 100 0v40h-100z" fill="#f2c79b" opacity=".5"/><path d="M60 120q120-30 240 0v190H60z" fill="#ffc93c" opacity=".18"/>
<g data-p="nariz" data-act="lampart" data-v="pulmones:nariz"><path d="M180 22q-12 20-12 30h24q0-10-12-30z" fill="#f2c79b" stroke="#d9a777" stroke-width="3"/><g class="aire" stroke="#3d8bfd" stroke-width="2" fill="none" stroke-dasharray="4 4"><path d="M150 40q14 6 24 14M210 40q-14 6-24 14"/></g></g>
<g data-p="traquea" data-act="lampart" data-v="pulmones:traquea"><rect x="172" y="56" width="16" height="76" rx="6" fill="#b8d7f2" stroke="#6b9cc8" stroke-width="2"/>${Array.from({length:7},(_,i)=>`<path d="M172 ${64+i*10}h16" stroke="#6b9cc8" stroke-width="2"/>`).join("")}</g>
<g class="respira"><g data-p="pulmones" data-act="lampart" data-v="pulmones:pulmones">${lung}${mirror(lung)}</g>
<g data-p="bronquios" data-act="lampart" data-v="pulmones:bronquios">${br}${mirror(br)}</g></g>
<g data-p="alveolos" data-act="lampart" data-v="pulmones:alveolos"><path d="M232 206L300 252" stroke="#9aa9bb" stroke-width="2" stroke-dasharray="4 3"/><circle cx="312" cy="262" r="34" fill="#fff" stroke="#9aa9bb" stroke-width="2"/>${[[302,252],[318,248],[310,264],[326,262],[298,270],[316,278]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="9" fill="#e86b80" stroke="#b33d55" stroke-width="1.5"/>`).join("")}<path d="M312 230v14" stroke="#8fbfe8" stroke-width="4"/><text x="312" y="314" text-anchor="middle" font-size="11" font-weight="700" fill="#5a6a80">con lupa</text></g>
<g data-p="diafragma" data-act="lampart" data-v="pulmones:diafragma"><path class="dia" d="M82 300q98-50 196 0" stroke="#d6604d" stroke-width="10" fill="none" stroke-linecap="round"/></g></svg>`},
 extra:()=>`<div class="row center lam-ctl"><button class="btn" data-act="lamresp" style="--sc:var(--cie)">🌬️ Respira conmigo</button></div><p class="note lam-dato resp-t">💡 Respiramos unas 20 veces por minuto, ¡aun cuando dormimos!</p>`};
ACT.lamresp=(v,b)=>{const box=b.closest(".lam");const on=box.classList.toggle("breathe");b.textContent=on?"⏸️ Detener":"🌬️ Respira conmigo";clearInterval(box._ri);const t=box.querySelector(".resp-t");
 if(!on){if(t)t.textContent="💡 Respiramos unas 20 veces por minuto, ¡aun cuando dormimos!";return}
 let inh=true;const tick=()=>{if(!box.isConnected||!box.classList.contains("breathe")){clearInterval(box._ri);return}if(t)t.innerHTML=inh?"🌬️ <b>Inhala…</b> el diafragma baja y los pulmones se llenan":"😮‍💨 <b>Exhala…</b> el diafragma sube y el aire sale";say(inh?"Inhala":"Exhala",true);inh=!inh};tick();box._ri=setInterval(tick,3000)};

/* --- La digestión --- */
LAM.digestion={hint:"Presiona «Paso a paso» para seguir el viaje de un bocado, o toca cada órgano.",parts:{
 boca:["Boca","Los dientes cortan y muelen la comida, y la saliva la ablanda. ¡Por eso hay que masticar bien!","#e5484d"],
 esofago:["Esófago","Es un tubo que empuja el bocado de la boca al estómago, aunque estés acostado.","#f08a8a"],
 estomago:["Estómago","Es una bolsa que revuelve la comida con jugos especiales hasta hacerla una papilla.","#f4a259"],
 higado:["Hígado","Es el órgano más grande por dentro. Produce la bilis, que ayuda a digerir las grasas, y limpia la sangre.","#9b4a3c"],
 delgado:["Intestino delgado","Es un tubo larguísimo y enrollado (¡como 7 metros!). Aquí el cuerpo absorbe lo bueno de la comida y lo pasa a la sangre.","#ffb3a7"],
 grueso:["Intestino grueso","Absorbe el agua que queda. Lo que el cuerpo no necesita sale como desecho cuando vamos al baño.","#c98a5b"]},
 seq:["boca","esofago","estomago","higado","delgado","grueso"],
 pos:{boca:[180,62],esofago:[184,130],estomago:[214,196],higado:[148,192],delgado:[180,282],grueso:[244,268]},
 svg:()=>`<svg class="plantdx lamsvg dig" viewBox="0 0 360 400" role="img" aria-label="El aparato digestivo"><rect width="360" height="400" fill="#fff8ee"/><path d="M180 6c-30 0-46 20-46 46 0 22 12 34 26 40v12c-30 4-60 16-66 40l-6 240h184l-6-240c-6-24-36-36-66-40V92c14-6 26-18 26-40 0-26-16-46-46-46z" fill="#f2c79b" opacity=".45"/>
<g data-p="boca" data-act="lampart" data-v="digestion:boca"><path d="M162 58q18 14 36 0q-4 14-18 14t-18-14z" fill="#e5484d" stroke="#a8262b" stroke-width="2"/><path d="M166 59h28" stroke="#fff" stroke-width="3"/></g>
<g data-p="esofago" data-act="lampart" data-v="digestion:esofago"><path d="M182 72q6 60 6 108" stroke="#f08a8a" stroke-width="10" fill="none" stroke-linecap="round"/></g>
<g data-p="higado" data-act="lampart" data-v="digestion:higado"><path d="M100 178q40-24 96-6 0 18-30 30-40 10-66-24z" fill="#9b4a3c" stroke="#6e2f25" stroke-width="2"/></g>
<g data-p="estomago" data-act="lampart" data-v="digestion:estomago"><path d="M188 178q40-14 52 14 10 30-24 40-24 6-36-6 18 0 26-14 4-14-18-20z" fill="#f4a259" stroke="#c4762a" stroke-width="3"/></g>
<g data-p="grueso" data-act="lampart" data-v="digestion:grueso"><path d="M136 312V232q0-12 12-12h70q12 0 12 12v70q0 12-10 20l-22 10v26" stroke="#c98a5b" stroke-width="16" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g>
<g data-p="delgado" data-act="lampart" data-v="digestion:delgado"><path d="M164 238q30-6 36 6t-30 12q-30 0-24 12t34 8q30-4 32 10t-34 12q-24 2-22 14t30 8" stroke="#ffb3a7" stroke-width="8" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M164 238q30-6 36 6t-30 12q-30 0-24 12t34 8q30-4 32 10t-34 12q-24 2-22 14t30 8" stroke="#e07a6e" stroke-width="1.5" fill="none"/></g>
<circle class="bocado" r="8" cx="0" cy="0" fill="#7a4b1e" stroke="#fff" stroke-width="2" opacity="0"/></svg>`,
 extra:()=>""};

/* --- El cerebro --- */
LAM.cerebro={hint:"Toca cada parte del cerebro para saber qué trabajo hace. Luego prueba el juego de reflejos.",parts:{
 frontal:["Lóbulo frontal","Está detrás de la frente. Nos ayuda a pensar, decidir, poner atención y portarnos bien aunque cueste.","#7ccf72"],
 parietal:["Lóbulo parietal","Está arriba. Recibe lo que sentimos con la piel: frío, calor, cosquillas o dolor.","#ffc06b"],
 temporal:["Lóbulo temporal","Está a los lados, junto a las orejas. Nos ayuda a oír, a entender palabras y a recordar.","#6cb8ff"],
 occipital:["Lóbulo occipital","Está atrás de la cabeza. Aquí el cerebro entiende lo que ven nuestros ojos.","#c58cf0"],
 cerebelo:["Cerebelo","Es el «cerebrito» de abajo. Nos da equilibrio para andar en bici, bailar o pararnos en un pie.","#ff8f8f"],
 medula:["Médula espinal y nervios","Baja por dentro de la columna. Los nervios son como cables que llevan mensajes del cerebro a todo el cuerpo y de regreso.","#f6d55c"]},
 svg:()=>{const B="M76 148C66 92 118 50 186 50c66 0 104 42 100 96-2 30-26 46-60 48l-96 2c-30 0-50-18-54-48z";
 return`<svg class="plantdx lamsvg cer" viewBox="0 0 360 330" role="img" aria-label="El cerebro"><defs><clipPath id="cB"><path d="${B}"/></clipPath></defs><rect width="360" height="330" fill="#f3f0ff"/>
<path d="M186 22c-90 0-142 50-142 126 0 44 22 72 52 86v86h120v-46h40c16 0 22-10 22-22v-28l18-6c8-4 8-10 4-18l-16-30c-4-60-36-148-98-148z" fill="#f2c79b" opacity=".55" stroke="#d9a777" stroke-width="2"/>
<g clip-path="url(#cB)"><g data-p="occipital" data-act="lampart" data-v="cerebro:occipital"><path d="M40 40h86l-8 160H40z" fill="#c58cf0"/></g>
<g data-p="parietal" data-act="lampart" data-v="cerebro:parietal"><path d="M126 40h82l10 96-102 4z" fill="#ffc06b"/></g>
<g data-p="frontal" data-act="lampart" data-v="cerebro:frontal"><path d="M208 40h100v170h-80l-10-74z" fill="#7ccf72"/></g>
<g data-p="temporal" data-act="lampart" data-v="cerebro:temporal"><path d="M116 140l102-4 10 74H112z" fill="#6cb8ff"/></g>
<g stroke="#fff" stroke-width="2.4" fill="none" opacity=".55" pointer-events="none"><path d="M100 90q20-14 40 0t40 0 40 0 40 0"/><path d="M90 120q20-12 40 0t40 0 40 0 40 0 30 0"/><path d="M100 170q20-10 40 0t40 0 40 0 30 0"/><path d="M130 66q16 10 30 0t30 0 30 0"/></g></g>
<path d="${B}" fill="none" stroke="#7a5a9a" stroke-width="3" pointer-events="none"/>
<g data-p="cerebelo" data-act="lampart" data-v="cerebro:cerebelo"><ellipse cx="128" cy="210" rx="40" ry="22" fill="#ff8f8f" stroke="#c45a5a" stroke-width="2"/><g stroke="#fff" stroke-width="1.6" opacity=".7"><path d="M94 204q34-8 68 0M92 214q36-8 72 0M98 224q30-6 60 0"/></g></g>
<g data-p="medula" data-act="lampart" data-v="cerebro:medula"><path d="M176 196q-6 50 0 128" stroke="#f6d55c" stroke-width="16" fill="none" stroke-linecap="round"/><g stroke="#f6d55c" stroke-width="3" fill="none"><path d="M176 250q-30 6-60 30M178 270q30 6 60 30M176 290q-40 10-70 30"/></g></g></svg>`},
 extra:()=>`<div class="reflejo" data-st="0"><p class="note">⚡ <b>Juego de reflejos:</b> toca el cuadro cuando se ponga verde. El ojo avisa al cerebro y el cerebro manda a tu mano por los nervios.</p><button class="rf-box" data-act="reflejo">Toca aquí para empezar</button></div>`};
ACT.reflejo=(v,b)=>{const w=b.closest(".reflejo"),st=w.dataset.st;clearTimeout(w._t);
 if(st==="0"||st==="3"){w.dataset.st="1";b.className="rf-box wait";b.textContent="Espera… prepárate";w._t=setTimeout(()=>{if(!b.isConnected)return;w.dataset.st="2";w._go=performance.now();b.className="rf-box go";b.textContent="¡AHORA! 👆"},1500+Math.random()*2500);return}
 if(st==="1"){w.dataset.st="3";b.className="rf-box";b.textContent="¡Muy pronto! 😄 Espera el verde. Toca para intentar otra vez";return}
 if(st==="2"){const ms=Math.round(performance.now()-w._go);w.dataset.st="3";b.className="rf-box done";const tx=ms<350?"¡Rapidísimo! ⚡":ms<550?"¡Muy bien! 👍":"¡Bien! Sigue practicando";b.textContent=`${tx} Tardaste ${ms} milisegundos. Toca para jugar otra vez`;say(`${tx} Tardaste ${ms} milisegundos.`,true)}};

/* --- Los cinco sentidos --- */
LAM.sentidos={hint:"Toca la parte del cuerpo para descubrir cada sentido.",parts:{
 vista:["Vista 👀","Con los ojos vemos colores, formas y la luz. Los párpados y las pestañas los protegen.","#3d8bfd"],
 oido:["Oído 👂","Con las orejas oímos música, voces y el canto de los pájaros. Dentro hay un tambor diminuto que vibra con el sonido.","#c58cf0"],
 olfato:["Olfato 👃","Con la nariz olemos las flores, el pan recién hecho… y avisamos si algo se quema.","#f4a259"],
 gusto:["Gusto 👅","La lengua tiene papilas que distinguen lo dulce, salado, ácido y amargo.","#e5484d"],
 tacto:["Tacto ✋","Con la piel de todo el cuerpo sentimos si algo es suave, áspero, frío o caliente. Las yemas de los dedos son muy sensibles.","#3fa34d"]},
 quiz:[["¿Con qué sentido hueles una flor? 🌸","olfato"],["¿Con qué sentido escuchas una canción? 🎵","oido"],["¿Con qué sentido sabes que un helado está frío? 🍦","tacto"],["¿Con qué sentido ves el arcoíris? 🌈","vista"],["¿Con qué sentido sabes que un limón es ácido? 🍋","gusto"],["¿Con qué sentido sientes que tu perrito es suave? 🐶","tacto"],["¿Con qué sentido oyes las campanas de la iglesia? 🔔","oido"]],
 svg:()=>`<svg class="plantdx lamsvg sen" viewBox="0 0 360 320" role="img" aria-label="Los cinco sentidos"><rect width="360" height="320" fill="#fffaf0"/>
<path d="M150 230v40h60v-40" fill="#e9b88a"/><path d="M90 320q0-56 90-56t90 56z" fill="#3d6fd6"/><circle cx="180" cy="140" r="92" fill="#f2c79b" stroke="#d9a777" stroke-width="2"/><path d="M88 128c0-80 184-80 184 0-24-30-60-40-92-40s-68 10-92 40z" fill="#5a3a22"/>
<g data-p="oido" data-act="lampart" data-v="sentidos:oido"><ellipse cx="86" cy="146" rx="14" ry="24" fill="#e9b88a" stroke="#c58cf0" stroke-width="3"/><ellipse cx="274" cy="146" rx="14" ry="24" fill="#e9b88a" stroke="#c58cf0" stroke-width="3"/><path d="M84 138q6 8 0 16M276 138q-6 8 0 16" stroke="#b07d55" stroke-width="2" fill="none"/></g>
<g data-p="vista" data-act="lampart" data-v="sentidos:vista"><ellipse cx="148" cy="134" rx="20" ry="14" fill="#fff" stroke="#3d8bfd" stroke-width="3"/><ellipse cx="212" cy="134" rx="20" ry="14" fill="#fff" stroke="#3d8bfd" stroke-width="3"/><circle cx="148" cy="134" r="8" fill="#6b4a2a"/><circle cx="212" cy="134" r="8" fill="#6b4a2a"/><circle cx="148" cy="134" r="3.5" fill="#111"/><circle cx="212" cy="134" r="3.5" fill="#111"/><path d="M128 112q20-10 40 0M192 112q20-10 40 0" stroke="#5a3a22" stroke-width="4" fill="none" stroke-linecap="round"/></g>
<g data-p="olfato" data-act="lampart" data-v="sentidos:olfato"><path d="M180 140q-14 26-14 34 0 8 14 8t14-8q0-8-14-34z" fill="#e9b88a" stroke="#f4a259" stroke-width="3"/><circle cx="174" cy="178" r="3" fill="#b07d55"/><circle cx="186" cy="178" r="3" fill="#b07d55"/></g>
<g data-p="gusto" data-act="lampart" data-v="sentidos:gusto"><path d="M150 200q30 26 60 0q-6 28-30 28t-30-28z" fill="#a8262b"/><path d="M164 210q16 22 32 0q0 18-16 18t-16-18z" fill="#ff7b8a"/><path d="M180 212v10" stroke="#d14a5a" stroke-width="1.5"/></g>
<g data-p="tacto" data-act="lampart" data-v="sentidos:tacto"><path d="M300 300v-60q0-10 8-10t8 10v-24q0-10 8-10t8 10v24-30q0-10 8-10t8 10v34-20q0-10 8-10t8 10v60q0 30-30 30h-10q-26 0-26-24z" fill="#f2c79b" stroke="#3fa34d" stroke-width="3" transform="translate(-40 -16)"/><path d="M262 214q-14-10-22 4" stroke="#3fa34d" stroke-width="2" fill="none" stroke-dasharray="3 3"/></g>
<g font-size="22"><text x="20" y="40">🌈</text><text x="20" y="300">🎵</text><text x="314" y="40">🌸</text><text x="20" y="170">🔔</text></g></svg>`};

/* --- El diente --- */
LAM.diente={hint:"Toca las partes del diente. ¡Luego limpia las manchitas de placa tocándolas una por una!",parts:{
 esmalte:["Esmalte","Es la capa blanca de afuera, ¡lo más duro de todo el cuerpo! Pero el azúcar y la placa lo pueden picar.","#ffffff"],
 dentina:["Dentina","Está debajo del esmalte. Es amarillita y un poco más suave.","#f3dfa6"],
 pulpa:["Pulpa","Es el centro vivo del diente. Tiene nervios y vasos de sangre: por eso duele cuando hay una caries profunda.","#ff8a9a"],
 encia:["Encía","Es la carne rosada que abraza los dientes. Hay que cepillarla suavecito para que no sangre.","#f28aa0"],
 raiz:["Raíz","Es la parte escondida del diente que lo sujeta al hueso de la mandíbula, como la raíz de un árbol.","#e8d9b5"]},
 svg:()=>{const spots=[[150,96],[206,84],[176,70],[226,112],[136,124],[196,118]];
 return`<svg class="plantdx lamsvg die" viewBox="0 0 360 340" role="img" aria-label="Las partes del diente"><rect width="360" height="340" fill="#eaf6ff"/>
<g data-p="raiz" data-act="lampart" data-v="diente:raiz"><path d="M128 170q-6 80 22 140 12 10 20-6l10-70 10 70q8 16 20 6 28-60 22-140z" fill="#e8d9b5" stroke="#b8a77c" stroke-width="2"/></g>
<g data-p="encia" data-act="lampart" data-v="diente:encia"><path d="M40 176q50-14 80-6 6 30 4 60H40zM320 176q-50-14-80-6-6 30-4 60h80z" fill="#f28aa0"/><path d="M40 230h280v110H40z" fill="#f6b3c0" opacity=".6"/><path d="M118 168q62 18 124 0" stroke="#f28aa0" stroke-width="14" fill="none"/></g>
<g data-p="esmalte" data-act="lampart" data-v="diente:esmalte"><path d="M124 176c-14-60-6-120 24-130 14-4 22 8 32 8s18-12 32-8c30 10 38 70 24 130z" fill="#fff" stroke="#9fb3c8" stroke-width="3"/></g>
<g data-p="dentina" data-act="lampart" data-v="diente:dentina"><path d="M136 174c-10-50-4-100 18-108 10-3 18 8 26 8s16-11 26-8c22 8 28 58 18 108l-8 60q-36 10-72 0z" fill="#f3dfa6"/></g>
<g data-p="pulpa" data-act="lampart" data-v="diente:pulpa"><path d="M162 160c-4-30 2-60 18-60s22 30 18 60l-6 120q-12 6-24 0z" fill="#ff8a9a"/><path d="M180 110v170" stroke="#d63a40" stroke-width="2"/><path d="M174 120l-2 160M186 120l2 160" stroke="#5b8def" stroke-width="1.5"/></g>
${spots.map(([x,y],i)=>`<circle class="placa" data-act="lamplaca" data-v="${i}" cx="${x}" cy="${y}" r="11" fill="#e7c94d" stroke="#b39424" stroke-width="2"/>`).join("")}</svg>`},
 extra:()=>`<p class="note lam-dato placa-t">🪥 Hay <b>6</b> manchitas de placa. ¡Tócalas para cepillar el diente!</p>`};
ACT.lamplaca=(v,b)=>{const box=b.closest(".lam");b.remove();const n=box.querySelectorAll(".placa").length,t=box.querySelector(".placa-t");
 if(n){if(t)t.innerHTML=`🪥 ¡Bien! Faltan <b>${n}</b>.`;try{beep&&beep(1)}catch(e){}}else{const m="¡Diente limpio y brillante! Cepíllate tres veces al día, sobre todo antes de dormir.";if(t)t.innerHTML="✨ "+m;say(m,true);box.querySelector("svg").classList.add("limpio")}};

/* --- Por dentro (1.º) --- */
LAM.organos={hint:"Toca un órgano para saber qué trabajo hace dentro de ti.",parts:{
 cerebro:["Cerebro","Está dentro de la cabeza. Piensa, recuerda y manda a todo el cuerpo.","#e89ac7"],
 pulmones:["Pulmones","Se llenan de aire cuando respiramos.","#ff9eaa"],
 corazon:["Corazón","Es un músculo que late sin parar y manda sangre a todo el cuerpo.","#e5484d"],
 estomago:["Estómago","Recibe la comida y la deshace en papilla.","#f4a259"],
 intestinos:["Intestinos","Toman lo bueno de la comida para que crezcas fuerte.","#ffb3a7"],
 huesos:["Huesos","Nos sostienen como el palo de una tienda de campaña. Tenemos 206.","#f6f2e4"]},
 svg:()=>`<svg class="plantdx lamsvg org" viewBox="0 0 360 420" role="img" aria-label="Los órganos por dentro"><rect width="360" height="420" fill="#eef7ff"/><path d="M180 10c-34 0-52 22-52 50 0 22 12 38 28 44v12c-30 4-58 14-62 36l-10 160h50v100h92V312h50l-10-160c-4-22-32-32-62-36v-12c16-6 28-22 28-44 0-28-18-50-52-50z" fill="#f2c79b" opacity=".6" stroke="#d9a777" stroke-width="2"/>
<g data-p="huesos" data-act="lampart" data-v="organos:huesos">${Array.from({length:8},(_,i)=>`<rect x="174" y="${118+i*24}" width="12" height="18" rx="4" fill="${BONE}" stroke="${BONE_S}"/>`).join("")}${bone(158,320,156,400,10)}${bone(202,320,204,400,10)}</g>
<g data-p="cerebro" data-act="lampart" data-v="organos:cerebro"><path d="M146 54c0-30 68-30 68 0 4 18-8 26-34 26s-38-8-34-26z" fill="#e89ac7" stroke="#b5629a" stroke-width="2"/><path d="M156 50q8-8 16 0t16 0 16 0M154 64q10-6 20 0t20 0" stroke="#fff" stroke-width="2" fill="none"/></g>
<g data-p="pulmones" data-act="lampart" data-v="organos:pulmones"><path d="M168 130c-20-4-44 10-46 50-2 30 4 50 46 40z" fill="#ff9eaa" stroke="#d65a6e" stroke-width="2"/><path d="M192 130c20-4 44 10 46 50 2 30-4 50-46 40z" fill="#ff9eaa" stroke="#d65a6e" stroke-width="2"/></g>
<g data-p="corazon" data-act="lampart" data-v="organos:corazon"><path class="lat" d="M188 170c8-14 30-8 26 10-2 12-18 22-26 30-8-8-24-18-26-30-4-18 18-24 26-10z" fill="#e5484d" stroke="#a8262b" stroke-width="2"/></g>
<g data-p="estomago" data-act="lampart" data-v="organos:estomago"><path d="M186 226q36-12 44 12 6 26-22 32-20 4-30-6 16 0 20-12 2-12-12-16z" fill="#f4a259" stroke="#c4762a" stroke-width="2"/></g>
<g data-p="intestinos" data-act="lampart" data-v="organos:intestinos"><path d="M150 280q40-8 60 4t-30 12q-36 0-30 12t40 6 26 10" stroke="#ffb3a7" stroke-width="9" fill="none" stroke-linecap="round"/></g></svg>`};

/* ---- Juego genérico «Encuéntralo» y «Paso a paso» para todas las láminas ---- */
const LAM_NOGAME={rosario:1};
{const _vl=VX.lam;VX.lam=v=>{const L=LAM[v.id];let h=_vl(v);if(!L||LAM_NOGAME[v.id])return h;const n=Object.keys(L.parts).length,btn=[];
 if(L.seq)btn.push(`<button class="btn" data-act="lamseq" data-v="${v.id}" style="--sc:var(--cie)">▶️ Paso a paso</button>`);
 if(n>=3)btn.push(`<button class="btn ghost" data-act="lamgame" data-v="${v.id}" style="--sc:var(--cie)">🎯 Juego: ¡encuéntralo!</button>`);
 return btn.length?h.replace(/<\/div>$/,`<div class="row center lam-ctl">${btn.join("")}</div></div>`):h}}
const lamNm=n=>n.replace(/\s*\p{Extended_Pictographic}.*$/u,"");
function lamHL(box,id,k){box.classList.add("sel");box.querySelectorAll("[data-p]").forEach(g=>g.classList.toggle("hl",g.dataset.p===k));box.querySelectorAll(".lam-chip").forEach(c=>c.classList.toggle("on",c.dataset.v===id+":"+k))}
ACT.lamseq=(v,b)=>{const box=b.closest(".lam"),L=LAM[v];delete box.dataset.goal;box.classList.remove("gaming");let i=+(box.dataset.step||-1)+1;if(i>=L.seq.length)i=0;box.dataset.step=i;const k=L.seq[i],[n,t]=L.parts[k];lamHL(box,v,k);
 box.querySelector(".pd-info").innerHTML=`<b>${i+1}. ${n}:</b> ${t}`;say(n+". "+t,true);b.textContent=i===L.seq.length-1?"🔁 Empezar otra vez":`▶️ Siguiente (${i+2} de ${L.seq.length})`;
 const bo=box.querySelector(".bocado");if(bo&&L.pos&&L.pos[k]){const[x,y]=L.pos[k];bo.style.opacity=1;bo.style.transform=`translate(${x}px,${y}px)`}};
function lamAsk(box){const id=box.dataset.lam,L=LAM[id],q=JSON.parse(box.dataset.q||"[]"),r=+box.dataset.round;if(r>=q.length){const s=+box.dataset.score;const m=`¡Terminaste! Encontraste ${s} de ${q.length} a la primera.`;box.querySelector(".pd-info").innerHTML=`🏆 <b>${m}</b> ${"⭐".repeat(s)}`;say(m,true);delete box.dataset.goal;box.classList.remove("gaming");const gb=box.querySelector('[data-act="lamgame"]');if(gb)gb.textContent="🎯 Jugar otra vez";return}
 const[p,k]=q[r];box.dataset.goal=k;box.dataset.tries=0;box.classList.remove("sel");box.querySelectorAll("[data-p]").forEach(g=>g.classList.remove("hl"));box.querySelector(".pd-info").innerHTML=`🎯 <b>${r+1} de ${q.length}:</b> ${p}`;say(p,true)}
ACT.lamgame=(v,b)=>{const box=b.closest(".lam"),L=LAM[v];const pool=(L.quiz||Object.entries(L.parts).map(([k,[n]])=>[`Toca: ${lamNm(n)}`,k])).slice();for(let i=pool.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[pool[i],pool[j]]=[pool[j],pool[i]]}
 box.dataset.q=JSON.stringify(pool.slice(0,5));box.dataset.round=0;box.dataset.score=0;box.classList.add("gaming");b.textContent="🎯 Jugando…";lamAsk(box)};
{const _lp=ACT.lampart;ACT.lampart=(v,b)=>{const box=b.closest(".lam");if(!box||!box.dataset.goal)return _lp(v,b);const[id,k]=v.split(":"),L=LAM[id],[n]=L.parts[k];lamHL(box,id,k);
 if(k===box.dataset.goal){if(+box.dataset.tries===0)box.dataset.score=+box.dataset.score+1;const m=`¡Muy bien! Es: ${lamNm(n)}.`;box.querySelector(".pd-info").innerHTML=`✅ <b>${m}</b>`;say(m,true);delete box.dataset.goal;box.dataset.round=+box.dataset.round+1;setTimeout(()=>{if(box.isConnected)lamAsk(box)},1700)}
 else{box.dataset.tries=+box.dataset.tries+1;const m=`Ese es: ${n}. ¡Intenta otra vez!`;box.querySelector(".pd-info").innerHTML=`🤔 ${m}`;say(m,true)}}}

/* ---- Colocar las láminas en las lecciones de Ciencias ---- */
(function(){const find=id=>{for(const s of SUBJ)for(const u of s.units)for(const l of u.ls)if(l.id===id)return l};
 const put=(id,i,lam,mode)=>{const l=find(id);if(!l||!l.learn[i])return;const pg=l.learn[i],nv={t:"lam",id:lam},old=pg.v;
  if(old&&old.t==="combo"){const j=old.x.findIndex(x=>x.t==="lam");if(j>=0){old.x[j]=nv;return}old.x.unshift(nv);return}
  if(mode==="replace"||!old||old.t==="emo"||old.t==="art"||old.t==="lam")pg.v=nv;else pg.v={t:"combo",x:[nv,old]}};
 put("c1",2,"organos");put("c2",0,"sentidos");put("c3",1,"diente","replace");
 put("2c1",0,"esqueleto");put("2c1",1,"musculos","replace");put("2c2",0,"digestion");
 {const l=find("2c2");if(l&&l.learn[1]&&l.learn[2]){const ph=l.learn[1].v;l.learn[1].v={t:"lam",id:"pulmones"};if(ph&&ph.t==="photo")l.learn[2].v=ph}}
 put("3c1",0,"corazon","replace");put("3c3",0,"cerebro","replace")})();
