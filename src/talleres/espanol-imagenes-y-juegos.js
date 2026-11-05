/* ========= Español: pinturas, láminas interactivas y juegos de lenguaje ========= */
Object.assign(IM,{
anker1:["Albert_Anker_Schreibendes_Mädchen_1902.jpg","Albert Anker, «Niña escribiendo» (1902)"],
ankerClase:["Albert_Anker_(1831-1910),_Schreibunterricht,_1865._Oil_on_canvas.jpg","Albert Anker, «La clase de escritura» (1865)"],
ankerCarta:["Albert_Anker_Junge_Frau_einen_Brief_schreibend_1903.jpg","Albert Anker, «Joven escribiendo una carta» (1903)"],
lectora:["Albert_Anker_Lesendes_Mädchen.jpg","Albert Anker, «Niña leyendo»"],
abuelo:["Anker_Grossvater_erzählt_eine_Geschichte_1884.jpg","Albert Anker, «El abuelo cuenta una historia» (1884)"],
abueloOra:["Anker-_Die_Andacht_des_Grossvaters_1893.jpg","Albert Anker, «La oración del abuelo» (1893)"],
periodico:["Albert_Anker_-_Zeitung_lesender_Bauer.jpg","Albert Anker, «Campesino leyendo el periódico»"],
escuela:["Jean_Geoffroy_-_Dans_l'ecole.jpg","Jean Geoffroy, «En la escuela»"],
compartir:["Jean_Geoffroy_-_Le_Partage_Dificile.jpg","Jean Geoffroy, «Compartir cuesta»"],
liebre:["Tortoise_and_hare_rackham.jpg","Arthur Rackham, «La liebre y la tortuga» (1912)"],
nochebuena:["E_pulcherrima_ies.jpg","Flor de Nochebuena · foto de Wikimedia Commons"],
pablo:['File"-Saint_Paul_Writing_His_Epistles"_by_Valentin_de_Boulogne.jpg',"Valentin de Boulogne, «San Pablo escribiendo sus cartas»"],
davidArpa:["Rubens_and_Jan_Boeckhorst_-_King_David_playing_the_Harp.jpg","Rubens y Boeckhorst, «El rey David tocando el arpa»"],
bosch:["Hieronymus_Bosch-_The_Seven_Deadly_Sins_and_the_Four_Last_Things.JPG","El Bosco, «Los siete pecados capitales», Museo del Prado"],
maizDiv:["Diversidad_de_Maiz_mesoamericano.jpg","Variedades de maíz mexicano · foto de Wikimedia Commons"],
pantocrator:["Christ_Pantocrator_mosaic_from_Hagia_Sophia_2744_x_2900_pixels_3.1_MB.jpg","«Cristo Pantocrátor», mosaico de Santa Sofía"],
fatimaRos:["Fatima_children_with_rosaries.jpg","Los pastorcitos de Fátima con sus rosarios · fotografía antigua"],
virgenRos:["La_Virgen_del_Rosario,_de_Antonio_Arias_Fernández_(Museo_del_Prado).jpg","Antonio Arias, «La Virgen del Rosario», Museo del Prado"],
diccionario:["Diccionario_de_la_Lengua_Española,_on_side.jpg","Diccionario de la lengua española · foto de Wikimedia Commons"]});

/* ---------- ayuda para láminas de texto (letra de ancho fijo) ---------- */
const MONO="ui-monospace,SFMono-Regular,Menlo,Consolas,monospace";
function tl(id,lines){return lines.map(({x=20,y,fs=18,w=700,col="#1b2a44",segs,end})=>{const cw=fs*.6;let cx=end?x-segs.reduce((a,s)=>a+s[0].length,0)*cw:x;
 return segs.map(([t,p,c])=>{const x0=cx,wd=t.length*cw;cx+=wd;const tx=`<text x="${x0.toFixed(1)}" y="${y}" font-size="${fs}" font-weight="${w}" font-family="${MONO}" fill="${col}" style="white-space:pre" xml:space="preserve">${esc(t)}</text>`;
  return p?`<g data-p="${p}" data-act="lampart" data-v="${id}:${p}"><rect x="${(x0-2).toFixed(1)}" y="${(y-fs*.88).toFixed(1)}" width="${(wd+4).toFixed(1)}" height="${(fs*1.2).toFixed(1)}" rx="5" fill="${c||"#fff3c4"}"/>${tx}</g>`:tx}).join("")}).join("")}
const paper=(w,h,bg)=>`<rect width="${w}" height="${h}" fill="${bg||"#f4efe3"}"/>`;

/* --- Las vocales --- */
const VOC=[["a","A","🐝","abeja","#e5484d"],["e","E","⭐","estrella","#f58a2a"],["i","I","⛪","iglesia","#e5b400"],["o","O","🐑","oveja","#3fa34d"],["u","U","🍇","uvas","#3d8bfd"]];
LAM.vocales={hint:"Toca cada vocal para oír cómo suena y una palabra que empieza con ella.",parts:Object.fromEntries(VOC.map(([k,M,e,w,c])=>[k,[`${M} ${k}`,`Suena «${k}», como en ${w} ${e}. Se escribe ${M} mayúscula y ${k} minúscula.`,c]])),
 quiz:VOC.map(([k,,e,w])=>[`¿Con qué vocal empieza «${w}»? ${e}`,k]).concat([["¿Con qué vocal empieza «ángel»? 😇","a"],["¿Con qué vocal empieza «uno»? 1️⃣","u"],["¿Con qué vocal empieza «ojo»? 👁️","o"]]),
 svg:()=>`<svg class="plantdx lamsvg" viewBox="0 0 360 190" role="img" aria-label="Las cinco vocales"><rect width="360" height="190" fill="#fffaf0"/>${VOC.map(([k,M,e,,c],i)=>{const x=8+i*70;return`<g data-p="${k}" data-act="lampart" data-v="vocales:${k}"><rect x="${x}" y="14" width="64" height="162" rx="14" fill="${c}"/><rect x="${x+5}" y="19" width="54" height="152" rx="10" fill="#fff" opacity=".93"/><text x="${x+32}" y="74" text-anchor="middle" font-size="48" font-weight="900" fill="${c}">${M}</text><text x="${x+32}" y="112" text-anchor="middle" font-size="32" font-weight="800" fill="${c}">${k}</text><text x="${x+32}" y="158" text-anchor="middle" font-size="30">${e}</text></g>`}).join("")}</svg>`};

/* --- El abecedario --- */
const ABC=[["a","a","árbol","🌳"],["b","be","burro","🫏"],["c","ce","casa","🏠"],["d","de","dado","🎲"],["e","e","elefante","🐘"],["f","efe","flor","🌸"],["g","ge","gato","🐱"],["h","hache","huevo","🥚"],["i","i","iglesia","⛪"],["j","jota","jirafa","🦒"],["k","ka","kiwi","🥝"],["l","ele","luna","🌙"],["m","eme","mamá","👩"],["n","ene","nube","☁️"],["ñ","eñe","niño","🧒"],["o","o","oso","🐻"],["p","pe","pan","🍞"],["q","cu","queso","🧀"],["r","erre","rosa","🌹"],["s","ese","sol","☀️"],["t","te","tortilla","🫓"],["u","u","uvas","🍇"],["v","uve","vela","🕯️"],["w","uve doble","kiwi","🥝"],["x","equis","xilófono","🎶"],["y","ye","yoyo","🪀"],["z","zeta","zapato","👞"]];
ABC[23][2]="sándwich";ABC[23][3]="🥪";
const ABCC=["#e5484d","#f58a2a","#e5b400","#3fa34d","#3d8bfd","#8f5ad6"];
LAM.abc={noChips:1,hint:"Toca una letra para saber cómo se llama. Son 27 letras, ¡y la ñ solo la tiene el español!",parts:Object.fromEntries(ABC.map(([k,n,w,e])=>[k,[`${k.toUpperCase()} ${k}`,`Se llama «${n}». ${k.toUpperCase()} de ${w} ${e}.`]])),
 quiz:ABC.map(([k,n])=>[`Toca la letra «${n}»`,k]),
 svg:()=>`<svg class="plantdx lamsvg" viewBox="0 0 360 250" role="img" aria-label="El abecedario"><rect width="360" height="250" fill="#fffaf0"/>${ABC.map(([k,,,e],i)=>{const c=i%9,r=Math.floor(i/9),x=6+c*39.3,y=8+r*80,col=k==="ñ"?"#d4145a":ABCC[(c+r)%6];return`<g data-p="${k}" data-act="lampart" data-v="abc:${k}"><rect x="${x}" y="${y}" width="36" height="74" rx="9" fill="${col}"/><text x="${x+18}" y="${y+32}" text-anchor="middle" font-size="25" font-weight="900" fill="#fff">${k.toUpperCase()}</text><text x="${x+18}" y="${y+50}" text-anchor="middle" font-size="15" font-weight="700" fill="#fff">${k}</text><text x="${x+18}" y="${y+69}" text-anchor="middle" font-size="14">${e}</text></g>`}).join("")}</svg>`};

/* --- La oración bien escrita (1.º) --- */
LAM.oracion1={hint:"Toca las partes de esta oración para ver cómo se escribe bien.",parts:{
 mayuscula:["Mayúscula al inicio","Toda oración empieza con letra mayúscula. Aquí la J de Jesús.","#ffd8a8"],
 palabras:["Palabras","Una oración está hecha de palabras que juntas dicen una idea completa.","#cfe9ff"],
 espacios:["Espacios","Entre palabra y palabra dejamos un espacio, para que no se amontonen.","#d9f2d0"],
 punto:["Punto final","Al terminar la idea ponemos un punto.","#ffc9c9"]},
 svg:()=>{const W=[["J","esús"],["ama"],["a"],["los"],["niños"]];let x=12;const fs=20,cw=fs*.6;let g="";
  W.forEach((w,i)=>{const t=w.join("");const wd=t.length*cw;g+=`<g data-p="palabras" data-act="lampart" data-v="oracion1:palabras"><rect x="${x-3}" y="76" width="${wd+6}" height="36" rx="8" fill="#cfe9ff"/></g>`;
   if(w.length>1)g+=`<g data-p="mayuscula" data-act="lampart" data-v="oracion1:mayuscula"><rect x="${x-3}" y="70" width="${cw+6}" height="48" rx="8" fill="#ffd8a8" stroke="#f58a2a" stroke-width="2"/></g>`;
   g+=`<text x="${x}" y="104" font-size="${fs}" font-weight="800" font-family="${MONO}" fill="#1b2a44" pointer-events="none">${t}</text>`;x+=wd;
   if(i<W.length-1){g+=`<g data-p="espacios" data-act="lampart" data-v="oracion1:espacios"><rect x="${x+3}" y="118" width="${cw*1.2-6}" height="8" rx="4" fill="#3fa34d"/></g>`;x+=cw*1.2}});
  g+=`<g data-p="punto" data-act="lampart" data-v="oracion1:punto"><circle cx="${x+10}" cy="100" r="14" fill="#ffc9c9" stroke="#e5484d" stroke-width="2"/><circle cx="${x+10}" cy="104" r="4" fill="#1b2a44"/></g>`;
  return`<svg class="plantdx lamsvg" viewBox="0 0 360 170" role="img" aria-label="Una oración bien escrita"><rect width="360" height="170" fill="#fffaf0"/><path d="M10 130h340M10 60h340" stroke="#d8e3ee" stroke-width="2"/>${g}<text x="180" y="156" text-anchor="middle" font-size="13" fill="#5a6a80">Mayúscula · palabras · espacios · punto</text></svg>`}};

/* --- Signos de puntuación --- */
LAM.puntuacion={hint:"Toca cada signo para saber para qué sirve.",parts:{
 coma:["La coma ( , )","Hace una pausa corta. Sirve para separar cosas de una lista o para llamar a alguien: «Mamá, ¿vamos?».","#ffe08a"],
 pregunta:["Signos de interrogación ( ¿ ? )","Encierran una pregunta. En español se ponen al principio y al final.","#cfe9ff"],
 exclamacion:["Signos de exclamación ( ¡ ! )","Encierran alegría, sorpresa o un grito. También van al principio y al final.","#ffc9c9"],
 dospuntos:["Dos puntos ( : )","Avisan que viene una lista o una explicación.","#e3d4ff"],
 punto:["El punto ( . )","Termina una oración. Después del punto se escribe con mayúscula.","#d9f2d0"]},
 svg:()=>`<svg class="plantdx lamsvg" viewBox="0 0 360 210" role="img" aria-label="Signos de puntuación">${paper(360,210,"#fffaf0")}<text x="180" y="28" text-anchor="middle" font-size="15" font-weight="800" fill="#7a5a3a">Pedro y su mamá</text>${tl("puntuacion",[
 {y:66,fs:19,segs:[["Mamá"],[",","coma","#ffe08a"],[" "],["¿","pregunta","#cfe9ff"],["vamos a Misa"],["?","pregunta","#cfe9ff"]]},
 {y:104,fs:19,segs:[["¡","exclamacion","#ffc9c9"],["Sí"],["!","exclamacion","#ffc9c9"],[" Llevemos"],[":","dospuntos","#e3d4ff"]]},
 {y:142,fs:19,segs:[["flores"],[",","coma","#ffe08a"],[" velas y pan"],[".","punto","#d9f2d0"]]},
 {y:180,fs:19,segs:[["Jesús nos espera"],[".","punto","#d9f2d0"]]}])}</svg>`};

/* --- La carta --- */
LAM.carta={hint:"Toca cada parte de la carta, o usa «Paso a paso» para recorrerla en orden.",parts:{
 fecha:["Lugar y fecha","Arriba, a la derecha: dónde y cuándo escribimos la carta.","#ffe08a"],
 saludo:["Saludo","A quién le escribimos, con cariño y respeto. Termina con dos puntos.","#cfe9ff"],
 cuerpo:["Cuerpo o mensaje","Es lo que queremos contar o pedir. Es la parte más larga.","#d9f2d0"],
 despedida:["Despedida","Unas palabras amables para terminar.","#ffc9c9"],
 firma:["Firma","El nombre de quien escribe la carta.","#e3d4ff"]},
 seq:["fecha","saludo","cuerpo","despedida","firma"],
 svg:()=>`<svg class="plantdx lamsvg" viewBox="0 0 360 300" role="img" aria-label="Partes de una carta"><rect width="360" height="300" fill="#e9eef7"/><rect x="14" y="10" width="332" height="280" rx="6" fill="#fffdf6" stroke="#d8cfbd" stroke-width="2"/>${Array.from({length:9},(_,i)=>`<path d="M26 ${70+i*24}h308" stroke="#e8e2d4"/>`).join("")}${tl("carta",[
 {x:336,y:40,fs:13,w:600,end:1,segs:[["Puebla, Pue., 5 de noviembre","fecha","#ffe08a"]]},
 {x:28,y:84,fs:17,segs:[["Querido abuelito:","saludo","#cfe9ff"]]},
 {x:28,y:116,fs:15,w:500,segs:[["Te cuento que ya hice mi","cuerpo","#d9f2d0"]]},
 {x:28,y:140,fs:15,w:500,segs:[["Primera Comunión. Rezo por","cuerpo","#d9f2d0"]]},
 {x:28,y:164,fs:15,w:500,segs:[["ti todos los días. ¡Te quiero!","cuerpo","#d9f2d0"]]},
 {x:28,y:210,fs:16,segs:[["Con mucho cariño,","despedida","#ffc9c9"]]},
 {x:28,y:250,fs:20,segs:[["Sofía","firma","#e3d4ff"]]}])}<text x="300" y="262" font-size="26">💌</text></svg>`};

/* --- El poema --- */
LAM.poema={hint:"Toca las partes del poema: título, verso, estrofa, rima y autor.",parts:{
 titulo:["Título","El nombre del poema. Nos dice de qué trata.","#ffe08a"],
 verso:["Verso","Cada renglón de un poema se llama verso.","#cfe9ff"],
 estrofa:["Estrofa","Un grupo de versos forma una estrofa. Entre estrofa y estrofa hay un espacio.","#d9f2d0"],
 rima:["Rima","Cuando los versos terminan con sonidos iguales: maíz–feliz, cielo–consuelo.","#ffc9c9"],
 autor:["Autor","Quien escribió el poema. ¡Tú también puedes ser autor!","#e3d4ff"]},
 svg:()=>`<svg class="plantdx lamsvg" viewBox="0 0 360 330" role="img" aria-label="Partes de un poema"><rect width="360" height="330" fill="#fffaf0"/>
<g data-p="estrofa" data-act="lampart" data-v="poema:estrofa"><path d="M22 196v100M22 196h8M22 296h8" stroke="#3fa34d" stroke-width="5" fill="none"/><rect x="30" y="182" width="300" height="122" rx="10" fill="#d9f2d0" opacity=".55"/></g>${tl("poema",[
 {x:180-11*16*.6/2,y:34,fs:16,segs:[["Gracias, Dios","titulo","#ffe08a"]]},
 {x:36,y:72,fs:15,w:600,segs:[["Gracias, Dios, por el sol,","verso","#cfe9ff"]]},
 {x:36,y:98,fs:15,w:600,segs:[["por la lluvia y el "],["maíz","rima","#ffc9c9"],[";"]]},
 {x:36,y:124,fs:15,w:600,segs:[["por mi casa y mi familia,"]]},
 {x:36,y:150,fs:15,w:600,segs:[["que me hacen muy "],["feliz","rima","#ffc9c9"],["."]]},
 {x:36,y:206,fs:15,w:600,segs:[["Gracias por la luna"]]},
 {x:36,y:232,fs:15,w:600,segs:[["que brilla en el "],["cielo","rima","#ffc9c9"],[";"]]},
 {x:36,y:258,fs:15,w:600,segs:[["gracias por tu amor,"]]},
 {x:36,y:284,fs:15,w:600,segs:[["que es mi gran "],["consuelo","rima","#ffc9c9"],["."]]},
 {x:344,y:320,fs:13,end:1,segs:[["Sofía, 8 años","autor","#e3d4ff"]]}])}</svg>`};

/* --- El diccionario --- */
LAM.diccionario={hint:"Toca las partes de esta página del diccionario.",parts:{
 guia:["Palabras guía","Arriba de la página: la primera y la última palabra de esa hoja. Te dicen si tu palabra está ahí.","#ffe08a"],
 entrada:["Entrada","Es la palabra que buscas, escrita en negritas y en orden alfabético.","#cfe9ff"],
 categoria:["Abreviatura","Nos dice qué clase de palabra es. «s. f.» quiere decir sustantivo femenino.","#e3d4ff"],
 definicion:["Definición","Explica qué significa la palabra.","#d9f2d0"],
 ejemplo:["Ejemplo","Una oración que muestra cómo se usa la palabra.","#ffc9c9"],
 orden:["Pestaña de la letra","Muchos diccionarios marcan en la orilla la letra de esa sección para encontrarla rápido.","#ffb27a"]},
 svg:()=>`<svg class="plantdx lamsvg" viewBox="0 0 360 300" role="img" aria-label="Una página del diccionario"><rect width="360" height="300" fill="#e9eef7"/><rect x="12" y="10" width="316" height="282" rx="4" fill="#fffdf6" stroke="#d8cfbd" stroke-width="2"/>
<g data-p="orden" data-act="lampart" data-v="diccionario:orden"><rect x="324" y="90" width="28" height="56" rx="6" fill="#ffb27a"/><text x="338" y="126" text-anchor="middle" font-size="22" font-weight="900" fill="#fff">C</text></g>
<path d="M22 50h296" stroke="#d8cfbd" stroke-width="2"/>${tl("diccionario",[
 {x:24,y:38,fs:14,segs:[["casa","guia","#ffe08a"]]},{x:316,y:38,fs:14,end:1,segs:[["catedral","guia","#ffe08a"]]},
 {x:24,y:82,fs:17,w:800,segs:[["casa","entrada","#cfe9ff"],[" "],["s. f.","categoria","#e3d4ff"]]},
 {x:24,y:108,fs:14,w:500,segs:[["Edificio donde vive una","definicion","#d9f2d0"]]},
 {x:24,y:130,fs:14,w:500,segs:[["familia.","definicion","#d9f2d0"]]},
 {x:24,y:154,fs:13,w:500,col:"#5a6a80",segs:[["Ej.: Mi casa es tu casa.","ejemplo","#ffc9c9"]]},
 {x:24,y:196,fs:17,w:800,segs:[["castillo","entrada","#cfe9ff"],[" "],["s. m.","categoria","#e3d4ff"]]},
 {x:24,y:222,fs:14,w:500,segs:[["Construcción grande con","definicion","#d9f2d0"]]},
 {x:24,y:244,fs:14,w:500,segs:[["muros y torres.","definicion","#d9f2d0"]]},
 {x:24,y:268,fs:13,w:500,col:"#5a6a80",segs:[["Ej.: El rey vivía en un castillo.","ejemplo","#ffc9c9"]]}])}</svg>`};

/* --- La noticia --- */
LAM.noticia={hint:"Toca las partes de la noticia. Una buena noticia responde: ¿qué?, ¿quién?, ¿cuándo?, ¿dónde?, ¿cómo? y ¿por qué?",parts:{
 titular:["Titular","Es el título de la noticia: corto, en letras grandes, para llamar la atención.","#ffe08a"],
 fecha:["Lugar y fecha","Dónde y cuándo ocurrió o se publicó la noticia.","#e3d4ff"],
 foto:["Fotografía","Muestra lo que pasó. Ayuda a entender la noticia.","#cfe9ff"],
 pie:["Pie de foto","Una frase bajo la foto que explica lo que se ve.","#ffd8a8"],
 cuerpo:["Cuerpo","Cuenta los hechos con detalle, respondiendo las seis preguntas.","#d9f2d0"]},
 svg:()=>`<svg class="plantdx lamsvg" viewBox="0 0 360 330" role="img" aria-label="Partes de una noticia"><rect width="360" height="330" fill="#e9eef7"/><rect x="10" y="8" width="340" height="314" fill="#fbfaf6" stroke="#cfc8b8" stroke-width="2"/><text x="180" y="40" text-anchor="middle" font-size="26" font-weight="900" fill="#1b2a44" font-family="Georgia,serif">El Colibrí</text><path d="M20 50h320M20 54h320" stroke="#1b2a44" stroke-width="1.4"/>${tl("noticia",[
 {x:22,y:84,fs:19,w:900,segs:[["¡Niños plantan 100 árboles!","titular","#ffe08a"]]},
 {x:22,y:108,fs:12,w:600,col:"#5a6a80",segs:[["Puebla, Pue., 4 de octubre","fecha","#e3d4ff"]]},
 {x:186,y:138,fs:12,w:500,segs:[["El sábado, los","cuerpo","#d9f2d0"]]},{x:186,y:156,fs:12,w:500,segs:[["alumnos de 3.º","cuerpo","#d9f2d0"]]},{x:186,y:174,fs:12,w:500,segs:[["plantaron 100","cuerpo","#d9f2d0"]]},{x:186,y:192,fs:12,w:500,segs:[["árboles en el","cuerpo","#d9f2d0"]]},{x:186,y:210,fs:12,w:500,segs:[["parque para","cuerpo","#d9f2d0"]]},{x:186,y:228,fs:12,w:500,segs:[["cuidar la","cuerpo","#d9f2d0"]]},{x:186,y:246,fs:12,w:500,segs:[["creación.","cuerpo","#d9f2d0"]]},
 {x:22,y:262,fs:11,w:600,col:"#5a6a80",segs:[["Los niños plantan un fresno.","pie","#ffd8a8"]]}])}
<g data-p="foto" data-act="lampart" data-v="noticia:foto"><rect x="22" y="124" width="150" height="120" fill="#bfe6ff" stroke="#9fb3c8" stroke-width="2"/><rect x="22" y="206" width="150" height="38" fill="#6cc85f"/><circle cx="148" cy="146" r="12" fill="#ffc93c"/><text x="70" y="214" font-size="44">🌳</text><text x="120" y="232" font-size="26">🧒</text><text x="36" y="236" font-size="22">👧</text></g>
<g fill="#cfd6e0">${[0,1,2].map(i=>`<rect x="22" y="${278+i*12}" width="${i===2?180:316}" height="6" rx="3"/>`).join("")}</g></svg>`};

/* --- La receta --- */
LAM.receta={hint:"Toca cada parte de la receta o recórrela con «Paso a paso».",parts:{
 titulo:["Título","El nombre del platillo o bebida que vamos a preparar.","#ffe08a"],
 ingredientes:["Ingredientes","Lo que necesitamos, con su cantidad.","#ffc9c9"],
 utensilios:["Utensilios","Las cosas de la cocina que vamos a usar.","#cfe9ff"],
 procedimiento:["Procedimiento","Los pasos en orden, con números. Se usan verbos como hierve, cuela y sirve.","#d9f2d0"],
 imagen:["Imagen","Un dibujo o foto de cómo debe quedar.","#e3d4ff"]},
 seq:["titulo","ingredientes","utensilios","procedimiento","imagen"],
 svg:()=>`<svg class="plantdx lamsvg" viewBox="0 0 360 330" role="img" aria-label="Partes de una receta"><rect width="360" height="330" fill="#fff4f2"/><rect x="10" y="8" width="340" height="314" rx="14" fill="#fffdf6" stroke="#f1c7c0" stroke-width="2"/>${tl("receta",[
 {x:22,y:40,fs:20,w:900,col:"#a8262b",segs:[["Agua de jamaica","titulo","#ffe08a"]]},
 {x:22,y:72,fs:13,w:800,segs:[["Ingredientes:","ingredientes","#ffc9c9"]]},
 {x:22,y:92,fs:12,w:500,segs:[["• 1 taza de flor de jamaica"]]},{x:22,y:110,fs:12,w:500,segs:[["• 2 litros de agua"]]},{x:22,y:128,fs:12,w:500,segs:[["• azúcar al gusto"]]},
 {x:22,y:158,fs:13,w:800,segs:[["Utensilios:","utensilios","#cfe9ff"]]},
 {x:22,y:178,fs:12,w:500,segs:[["olla, colador y jarra"]]},
 {x:22,y:208,fs:13,w:800,segs:[["Procedimiento:","procedimiento","#d9f2d0"]]},
 {x:22,y:230,fs:12,w:500,segs:[["1. Con un adulto, hierve la jamaica"]]},{x:22,y:248,fs:12,w:500,segs:[["   en un litro de agua 5 minutos."]]},{x:22,y:268,fs:12,w:500,segs:[["2. Deja enfriar y cuela."]]},{x:22,y:288,fs:12,w:500,segs:[["3. Agrega el otro litro y endulza."]]},{x:22,y:308,fs:12,w:500,segs:[["4. ¡Sirve con hielo y comparte!"]]}])}
<g data-p="imagen" data-act="lampart" data-v="receta:imagen"><rect x="244" y="58" width="96" height="124" rx="12" fill="#e3d4ff"/><path d="M266 76h52l-6 92h-40z" fill="#fff" stroke="#9fb3c8" stroke-width="2"/><path d="M269 96h46l-5 70h-36z" fill="#b5123f"/><rect x="278" y="104" width="10" height="10" fill="#fff" opacity=".7"/><rect x="294" y="120" width="9" height="9" fill="#fff" opacity=".7"/><text x="320" y="84" font-size="20">🌺</text></g></svg>`};

/* --- Sujeto y predicado --- */
LAM.sujeto={hint:"Toca las partes de la oración. Pregúntate: ¿quién lo hace? (sujeto) y ¿qué hace? (predicado).",parts:{
 sujeto:["Sujeto","Es de quien se habla. Responde a la pregunta ¿quién?: Jesús, los niños.","#cfe9ff"],
 predicado:["Predicado","Es lo que se dice del sujeto: lo que hace. Responde ¿qué hace?","#d9f2d0"],
 verbo:["Verbo (núcleo del predicado)","Es la palabra más importante del predicado: la acción. Multiplicó, rezan.","#ffd8a8"],
 punto:["Punto final","Cierra la oración.","#ffc9c9"]},
 svg:()=>{const fs=21,cw=fs*.6;const row=(y,s,v,c)=>{const xs=18,xv=xs+(s.length+1)*cw,xc=xv+v.length*cw,xe=xc+c.length*cw;
  return tl("sujeto",[{x:xs,y,fs,w:800,segs:[[s,"sujeto","#cfe9ff"],[" "],[v,"verbo","#ffd8a8"],[c],[".","punto","#ffc9c9"]]}])+
  `<g data-p="sujeto" data-act="lampart" data-v="sujeto:sujeto"><path d="M${xs} ${y+12}v8h${s.length*cw}v-8" stroke="#3d8bfd" stroke-width="3" fill="none"/><text x="${xs+s.length*cw/2}" y="${y+36}" text-anchor="middle" font-size="13" font-weight="800" fill="#3d8bfd">sujeto</text></g>`+
  `<g data-p="predicado" data-act="lampart" data-v="sujeto:predicado"><path d="M${xv} ${y+12}v8h${xe-xv}v-8" stroke="#3fa34d" stroke-width="3" fill="none"/><text x="${(xv+xe)/2}" y="${y+36}" text-anchor="middle" font-size="13" font-weight="800" fill="#3fa34d">predicado</text></g>`};
  return`<svg class="plantdx lamsvg" viewBox="0 0 360 230" role="img" aria-label="Sujeto y predicado"><rect width="360" height="230" fill="#fffaf0"/>${row(56,"Jesús","multiplicó"," los panes")}${row(150,"Los niños","rezan"," el rosario")}</svg>`}};

/* --- La fábula --- */
LAM.cuento={hint:"Toca las partes de la fábula: personajes, inicio, desarrollo, final y moraleja.",parts:{
 personajes:["Personajes","Quienes participan en la historia. En las fábulas suelen ser animales que hablan.","#e3d4ff"],
 inicio:["Inicio","Presenta a los personajes y el problema: la liebre presumida reta a la tortuga a una carrera.","#cfe9ff"],
 desarrollo:["Desarrollo","Lo que pasa: la liebre corre, se confía y se duerme; la tortuga sigue paso a paso.","#ffe08a"],
 final:["Final","Cómo termina: la tortuga cruza la meta primero.","#d9f2d0"],
 moraleja:["Moraleja","La enseñanza: con constancia y humildad se llega lejos.","#ffc9c9"]},
 seq:["personajes","inicio","desarrollo","final","moraleja"],
 svg:()=>{const pan=(k,x,t,c,inner)=>`<g data-p="${k}" data-act="lampart" data-v="cuento:${k}"><rect x="${x}" y="64" width="110" height="150" rx="12" fill="${c}" stroke="#9fb3c8" stroke-width="2"/><text x="${x+55}" y="88" text-anchor="middle" font-size="14" font-weight="800" fill="#1b2a44">${t}</text><path d="M${x+6} 186h98" stroke="#6cc85f" stroke-width="6"/>${inner}</g>`;
 return`<svg class="plantdx lamsvg" viewBox="0 0 360 290" role="img" aria-label="Partes de la fábula"><rect width="360" height="290" fill="#fffaf0"/>
<g data-p="personajes" data-act="lampart" data-v="cuento:personajes"><rect x="40" y="10" width="280" height="42" rx="21" fill="#e3d4ff"/><text x="180" y="38" text-anchor="middle" font-size="16" font-weight="800" fill="#1b2a44">🐇 la liebre  ·  🐢 la tortuga</text></g>
${pan("inicio",8,"Inicio","#cfe9ff",`<text x="34" y="176" font-size="30">🐇</text><text x="66" y="178" font-size="26">🐢</text><text x="60" y="126" font-size="22" text-anchor="middle">🏁</text><text x="62" y="150" text-anchor="middle" font-size="11" fill="#1b2a44">«¡Te reto!»</text>`)}
${pan("desarrollo",125,"Desarrollo","#ffe08a",`<text x="134" y="178" font-size="34">🌳</text><text x="160" y="180" font-size="24">🐇</text><text x="168" y="148" font-size="16">💤</text><text x="202" y="180" font-size="20">🐢</text>`)}
${pan("final",242,"Final","#d9f2d0",`<text x="264" y="140" font-size="26">🏁</text><text x="286" y="180" font-size="28">🐢</text><text x="256" y="180" font-size="18">🐇</text><text x="318" y="122" font-size="20">🏆</text>`)}
<g data-p="moraleja" data-act="lampart" data-v="cuento:moraleja"><path d="M20 230h320l-14 24 14 24H20l14-24z" fill="#ffc9c9" stroke="#e5484d" stroke-width="2"/><text x="180" y="260" text-anchor="middle" font-size="15" font-weight="800" fill="#a8262b">Poco a poco se llega lejos</text></g></svg>`}};

/* --- Familia de palabras --- */
const FAM=[["raiz","pan","La raíz: es la parte que comparten todas las palabras de la familia.","#c98a5b",180,250],["panadero","panadero","La persona que hace el pan.","#ffd8a8",70,150],["panaderia","panadería","La tienda donde se hace y se vende el pan.","#ffe08a",290,150],["panecito","panecito","Un pan pequeño, dicho con cariño.","#d9f2d0",86,62],["empanada","empanada","Masa rellena; también lleva «pan» dentro.","#cfe9ff",274,62],["panera","panera","La canasta donde se guarda el pan.","#ffc9c9",180,30]];
LAM.familia={hint:"Todas estas palabras son de la familia de «pan». Toca cada hoja del árbol.",parts:Object.fromEntries(FAM.map(([k,w,t,c])=>[k,[w,t,c]])),
 svg:()=>`<svg class="plantdx lamsvg" viewBox="0 0 360 300" role="img" aria-label="Familia de palabras de pan"><rect width="360" height="300" fill="#eef9ff"/><path d="M0 270h360v30H0z" fill="#8fd17f"/><path d="M168 280c6-40 2-80 12-110M192 280c-6-40-2-80-12-110" stroke="#8a5a2b" stroke-width="16" fill="none" stroke-linecap="round"/><g stroke="#8a5a2b" stroke-width="7" fill="none" stroke-linecap="round"><path d="M180 180L80 150M180 180L280 150M180 160L96 70M180 160L264 70M180 160V40"/></g><circle cx="180" cy="110" r="120" fill="#6cc85f" opacity=".25"/>
${FAM.map(([k,w,,c,x,y])=>k==="raiz"?`<g data-p="raiz" data-act="lampart" data-v="familia:raiz"><rect x="${x-46}" y="${y-22}" width="92" height="38" rx="10" fill="${c}"/><text x="${x}" y="${y+5}" text-anchor="middle" font-size="22" font-weight="900" fill="#fff">pan 🍞</text></g>`:`<g data-p="${k}" data-act="lampart" data-v="familia:${k}"><ellipse cx="${x}" cy="${y}" rx="${w.length*5.6+16}" ry="22" fill="${c}" stroke="#3fa34d" stroke-width="2"/><text x="${x}" y="${y+6}" text-anchor="middle" font-size="16" font-weight="800" fill="#1b2a44">${w.slice(0,w.indexOf("pan"))}<tspan fill="#a8262b">pan</tspan>${w.slice(w.indexOf("pan")+3)}</text></g>`).join("")}</svg>`};

/* =========== Juegos de lenguaje (visuales propios) =========== */
const SILW={m:[["ma","mamá","👩"],["me","mesa","🪑"],["mi","mico","🐒"],["mo","moño","🎀"],["mu","mula","🫏"]],p:[["pa","papá","👨"],["pe","pera","🍐"],["pi","piña","🍍"],["po","pollo","🐥"],["pu","puma","🐆"]],
 s:[["sa","sapo","🐸"],["se","seis","6️⃣"],["si","silla","🪑"],["so","sol","☀️"],["su","suma","➕"]],l:[["la","lata","🥫"],["le","león","🦁"],["li","limón","🍋"],["lo","lobo","🐺"],["lu","luna","🌙"]],t:[["ta","taza","☕"],["te","tela","🧵"],["ti","tina","🛁"],["to","tomate","🍅"],["tu","tuna","🌵"]],
 n:[["na","nariz","👃"],["ne","nene","👶"],["ni","nido","🪺"],["no","nopal","🌵"],["nu","nube","☁️"]],d:[["da","dado","🎲"],["de","dedo","☝️"],["di","dinero","💰"],["do","dona","🍩"],["du","durazno","🍑"]],r:[["ra","rana","🐸"],["re","regalo","🎁"],["ri","rico","😋"],["ro","rosa","🌹"],["ru","rueda","🛞"]],
 c:[["ca","casa","🏠"],["que","queso","🧀"],["qui","quince","🔢"],["co","conejo","🐰"],["cu","cuna","🛏️"]],g:[["ga","gato","🐱"],["gue","juguete","🧸"],["gui","guitarra","🎸"],["go","gorro","🧢"],["gu","gusano","🐛"]],
 ch:[["cha","chamarra","🧥"],["che","leche","🥛"],["chi","chile","🌶️"],["cho","chocolate","🍫"],["chu","chupón","🍼"]],ll:[["lla","llave","🔑"],["lle","calle","🛣️"],["lli","pollito","🐤"],["llo","pollo","🐔"],["llu","lluvia","🌧️"]],ñ:[["ña","piña","🍍"],["ñe","muñeca","🪆"],["ñi","puñito","✊"],["ño","niño","🧒"],["ñu","ñu","🐃"]],
 pl:[["pla","plátano","🍌"],["plu","pluma","🪶"],["pla","plato","🍽️"]],bl:[["bla","blanco","⚪"],["blu","blusa","👚"],["blo","bloque","🧱"]],tr:[["tre","tren","🚆"],["tri","trigo","🌾"],["tro","trompo","🪀"]],br:[["bra","brazo","💪"],["bro","brocha","🖌️"],["bri","brincar","🤸"]],
 cr:[["cre","crema","🍦"],["cru","cruz","✝️"],["cri","cristal","💎"]],fl:[["flo","flor","🌸"],["fla","flauta","🪈"],["fle","flecha","➡️"]],gr:[["gri","grillo","🦗"],["gra","granja","🚜"],["gru","grúa","🏗️"]],pr:[["pri","primo","👦"],["pre","premio","🏆"],["pro","promesa","🤝"]],
 fr:[["fre","fresa","🍓"],["fri","frijol","🫘"],["fru","fruta","🍎"]],gl:[["glo","globo","🎈"],["gle","iglesia","⛪"],["gla","glaciar","🧊"]],dr:[["dra","dragón","🐉"],["dri","cocodrilo","🐊"],["dro","madroño","🍓"]],cl:[["cla","clavo","🔩"],["cle","bicicleta","🚲"],["clo","cloro","🧴"]]};
VX.silab=v=>`<div class="silab" data-c="${v.c.join(",")}"><p class="note">Elige una letra y luego toca una sílaba para leerla.</p><div class="sil-c">${v.c.map((c,i)=>`<button class="sil-cb${i?"":" on"}" data-act="silc" data-v="${c}">${c.toUpperCase()}</button>`).join("")}</div><div class="sil-s">${silRow(v.c[0])}</div><div class="sil-out" aria-live="polite"><span class="sil-big">?</span><span class="sil-w">Toca una sílaba</span></div></div>`;
function silRow(c){return SILW[c].map(([s],i)=>`<button class="sil-sb" data-act="sils" data-v="${c}:${i}">${s}</button>`).join("")}
ACT.silc=(c,b)=>{const w=b.closest(".silab");w.querySelectorAll(".sil-cb").forEach(x=>x.classList.toggle("on",x===b));w.querySelector(".sil-s").innerHTML=silRow(c);say(c.length>1?c.split("").join(" "):c,true)};
ACT.sils=(v,b)=>{const[c,i]=v.split(":"),[s,w,e]=SILW[c][+i],box=b.closest(".silab");box.querySelectorAll(".sil-sb").forEach(x=>x.classList.toggle("on",x===b));const k=w.toLowerCase().indexOf(s);
 box.querySelector(".sil-out").innerHTML=`<span class="sil-big">${s}</span><span class="sil-e">${e}</span><span class="sil-w">${k<0?w:w.slice(0,k)+`<b>${w.slice(k,k+s.length)}</b>`+w.slice(k+s.length)}</span>`;say(`${s}. ${s}, como en ${w}.`,true)};

const GN=[["niño","niña","niños","niñas","🧒","👧"],["abuelo","abuela","abuelos","abuelas","👴","👵"],["maestro","maestra","maestros","maestras","👨‍🏫","👩‍🏫"],["gato","gata","gatos","gatas","🐈","🐈"],["león","leona","leones","leonas","🦁","🦁"],["rey","reina","reyes","reinas","🤴","👸"]];
VX.gn=()=>`<div class="gn" data-i="0" data-f="0" data-p="0"><div class="gn-out" aria-live="polite">${gnOut(0,0,0)}</div><div class="row center gn-b"><button class="btn ghost" data-act="gnset" data-v="f" style="--sc:var(--esp)">♂️ / ♀️ Masculino o femenino</button><button class="btn ghost" data-act="gnset" data-v="p" style="--sc:var(--esp)">1️⃣ / 🔢 Uno o muchos</button><button class="btn" data-act="gnset" data-v="i" style="--sc:var(--esp)">🔄 Otra palabra</button></div></div>`;
function gnOut(i,f,p){const g=GN[i],w=g[(p?2:0)+f],art=["el","la","los","las"][(p?2:0)+f],e=g[4+f];return`<div class="gn-e">${p?e+e+e:e}</div><div class="gn-w"><span class="gn-a">${art.charAt(0).toUpperCase()+art.slice(1)}</span> ${w}</div><div class="gn-t">${f?"femenino":"masculino"} · ${p?"plural":"singular"}</div>`}
ACT.gnset=(k,b)=>{const w=b.closest(".gn");let i=+w.dataset.i,f=+w.dataset.f,p=+w.dataset.p;if(k==="f")f=1-f;else if(k==="p")p=1-p;else{i=(i+1)%GN.length;f=0;p=0}Object.assign(w.dataset,{i,f,p});w.querySelector(".gn-out").innerHTML=gnOut(i,f,p);const g=GN[i];say(`${["el","la","los","las"][(p?2:0)+f]} ${g[(p?2:0)+f]}`,true)};

const TAM=[["casa","casita","casota","🏠"],["perro","perrito","perrote","🐕"],["árbol","arbolito","arbolote","🌳"],["gato","gatito","gatote","🐈"],["zapato","zapatito","zapatote","👞"],["pelota","pelotita","pelotota","⚽"]];
VX.tam=()=>`<div class="tam" data-i="0" data-s="1"><div class="tam-e" style="font-size:72px">${TAM[0][3]}</div><div class="tam-w" aria-live="polite">${TAM[0][0]}</div><div class="row center"><button class="btn ghost" data-act="tamset" data-v="0" style="--sc:var(--esp)">🔹 Chiquito (-ito, -ita)</button><button class="btn ghost" data-act="tamset" data-v="1" style="--sc:var(--esp)">Normal</button><button class="btn ghost" data-act="tamset" data-v="2" style="--sc:var(--esp)">🔶 Grandote (-ote, -ota)</button><button class="btn" data-act="tamset" data-v="n" style="--sc:var(--esp)">🔄 Otra palabra</button></div></div>`;
ACT.tamset=(v,b)=>{const w=b.closest(".tam");let i=+w.dataset.i,s=+w.dataset.s;if(v==="n"){i=(i+1)%TAM.length;s=1}else s=+v;w.dataset.i=i;w.dataset.s=s;const t=TAM[i],word=[t[1],t[0],t[2]][s];
 const e=w.querySelector(".tam-e");e.textContent=t[3];e.style.fontSize=[36,72,128][s]+"px";w.querySelector(".tam-w").innerHTML=s===1?word:`${word} <small>${s?"aumentativo":"diminutivo"}</small>`;say(word,true)};

const TIE=[["📿","Ayer *recé* el rosario.","Hoy *rezo* el rosario.","Mañana *rezaré* el rosario."],["🧹","Ayer *ayudé* a mi mamá.","Hoy *ayudo* a mi mamá.","Mañana *ayudaré* a mi mamá."],["⚽","Ayer *jugué* con mi hermano.","Hoy *juego* con mi hermano.","Mañana *jugaré* con mi hermano."],["🫘","Ayer *comí* frijoles.","Hoy *como* frijoles.","Mañana *comeré* frijoles."],["⛪","Ayer *fui* a Misa.","Hoy *voy* a Misa.","Mañana *iré* a Misa."],["📖","Ayer *leí* un cuento.","Hoy *leo* un cuento.","Mañana *leeré* un cuento."]];
const tieH=s=>s.replace(/\*(.+?)\*/,"<b>$1</b>");
VX.tiempo=()=>`<div class="tie" data-i="0" data-t="1"><div class="tie-line"><span class="on">⏪ Ayer</span><span>Hoy</span><span>Mañana ⏩</span></div><div class="tie-e">${TIE[0][0]}</div><p class="tie-s" aria-live="polite">${tieH(TIE[0][2])}</p><div class="row center"><button class="btn ghost" data-act="tieset" data-v="0" style="--sc:var(--esp)">⏪ Ayer (pasado)</button><button class="btn ghost" data-act="tieset" data-v="1" style="--sc:var(--esp)">Hoy (presente)</button><button class="btn ghost" data-act="tieset" data-v="2" style="--sc:var(--esp)">Mañana (futuro) ⏩</button><button class="btn" data-act="tieset" data-v="n" style="--sc:var(--esp)">🔄 Otra</button></div></div>`;
ACT.tieset=(v,b)=>{const w=b.closest(".tie");let i=+w.dataset.i,t=+w.dataset.t;if(v==="n"){i=(i+1)%TIE.length;t=1}else t=+v;w.dataset.i=i;w.dataset.t=t;w.querySelectorAll(".tie-line span").forEach((x,k)=>x.classList.toggle("on",k===t));w.querySelector(".tie-e").textContent=TIE[i][0];const s=TIE[i][t+1];w.querySelector(".tie-s").innerHTML=tieH(s);say(s.replace(/\*/g,""),true)};

const ADJ={tam:[["grande",1.15],["pequeño",.75]],col:[["naranja","#f2a03d"],["negro","#2b2b33"],["blanco","#f7f3ea"],["gris","#9aa3ad"]],an:[["feliz",0],["dormido",1],["sorprendido",2]]};
function adjCat(t,c,a){const s=ADJ.tam[t][1],col=ADJ.col[c][1],ln=c===1?"#888":"#3b2a20";const eyes=a===1?`<path d="M-22 -6q6 5 12 0M10 -6q6 5 12 0" stroke="${ln}" stroke-width="3" fill="none"/>`:a===2?`<circle cx="-16" cy="-6" r="7" fill="#fff"/><circle cx="16" cy="-6" r="7" fill="#fff"/><circle cx="-16" cy="-6" r="3.5" fill="#222"/><circle cx="16" cy="-6" r="3.5" fill="#222"/>`:`<ellipse cx="-16" cy="-6" rx="5" ry="6" fill="#3fa34d"/><ellipse cx="16" cy="-6" rx="5" ry="6" fill="#3fa34d"/><circle cx="-16" cy="-6" r="2.5" fill="#111"/><circle cx="16" cy="-6" r="2.5" fill="#111"/>`;
 const mouth=a===2?`<ellipse cx="0" cy="16" rx="5" ry="7" fill="#7a2026"/>`:a===1?`<path d="M-6 14q6 3 12 0" stroke="${ln}" stroke-width="2" fill="none"/>`:`<path d="M-10 12q10 10 20 0" stroke="${ln}" stroke-width="3" fill="none"/>`;
 return`<svg viewBox="0 0 240 200" class="adj-svg" role="img" aria-label="Un gato"><rect width="240" height="200" fill="#eef7ff"/><rect y="170" width="240" height="30" fill="#c9e7b8"/><g transform="translate(120 ${170-60*s}) scale(${s})"><path d="M44 30q44 -10 30 -60" stroke="${col}" stroke-width="12" fill="none" stroke-linecap="round"/><ellipse cx="0" cy="22" rx="52" ry="40" fill="${col}" stroke="${ln}" stroke-width="2"/><g transform="translate(-6 -34)"><path d="M-34 -10l6-34 22 20zM22 -10l-6-34-22 20z" fill="${col}" stroke="${ln}" stroke-width="2"/><circle r="38" fill="${col}" stroke="${ln}" stroke-width="2"/>${eyes}<path d="M-4 6h8l-4 5z" fill="#e5788a"/>${mouth}<g stroke="${ln}" stroke-width="1.5"><path d="M-14 8h-24M-14 12l-22 6M14 8h24M14 12l22 6"/></g></g>${a===1?`<text x="30" y="-70" font-size="22" fill="#3d6fd6">z z</text>`:""}</g></svg>`}
VX.adj=()=>`<div class="adj" data-t="0" data-c="0" data-a="0"><div class="adj-pic">${adjCat(0,0,0)}</div><p class="adj-s" aria-live="polite">${adjTxt(0,0,0)}</p><div class="adj-g">${Object.entries({tam:"Tamaño",col:"Color",an:"¿Cómo está?"}).map(([k,n])=>`<div class="adj-row"><span>${n}:</span>${ADJ[k].map(([w],i)=>`<button class="adj-b${i?"":" on"}" data-act="adjset" data-v="${k}:${i}">${w}</button>`).join("")}</div>`).join("")}</div></div>`;
function adjTxt(t,c,a){return`El gato es <b>${ADJ.tam[t][0]}</b> y <b>${ADJ.col[c][0]}</b>. Está <b>${ADJ.an[a][0]}</b>.`}
ACT.adjset=(v,b)=>{const w=b.closest(".adj"),[k,i]=v.split(":");w.dataset[{tam:"t",col:"c",an:"a"}[k]]=i;b.parentNode.querySelectorAll(".adj-b").forEach(x=>x.classList.toggle("on",x===b));const t=+w.dataset.t,c=+w.dataset.c,a=+w.dataset.a;
 w.querySelector(".adj-pic").innerHTML=adjCat(t,c,a);const s=adjTxt(t,c,a);w.querySelector(".adj-s").innerHTML=s;say(s.replace(/<[^>]+>/g,""),true)};

const TON=[[["ca","fé"],1],[["ár","bol"],0],[["pá","ja","ro"],0],[["co","ra","zón"],2],[["Mé","xi","co"],0],[["Je","sús"],1],[["me","sa"],0],[["sá","ba","do"],0],[["re","loj"],1],[["lá","piz"],0],[["ca","mi","sa"],1],[["ca","mión"],1],[["mú","si","ca"],0],[["Ma","rí","a"],1],[["pa","pá"],1],[["ve","la"],0]];
const tonTipo=(n,i)=>({1:"aguda",2:"grave",3:"esdrújula"})[n-i]||"sobreesdrújula";
VX.tonica=()=>`<div class="ton" data-i="0"><p class="note">Di la palabra en voz alta y toca la sílaba que suena más fuerte.</p><div class="ton-w">${tonW(0)}</div><p class="ton-r" aria-live="polite"></p><div class="row center"><button class="btn" data-act="tonnext" style="--sc:var(--esp)">➡️ Otra palabra</button></div></div>`;
function tonW(i){return TON[i][0].map((s,k)=>`<button class="ton-s" data-act="tons" data-v="${k}">${s}</button>`).join("")}
ACT.tons=(v,b)=>{const w=b.closest(".ton"),[sy,t]=TON[+w.dataset.i],k=+v,r=w.querySelector(".ton-r");if(k===t){b.classList.add("ok");const tp=tonTipo(sy.length,t);const m=`¡Sí! «${sy[t]}» es la sílaba tónica. «${sy.join("")}» es una palabra ${tp}.`;r.className="ton-r ok";r.textContent=m;say(m,true);try{SND.ok()}catch(e){}}
 else{b.classList.add("no");setTimeout(()=>b.classList.remove("no"),600);r.className="ton-r no";r.textContent=`«${sy[k]}» suena más suave. Escucha otra vez: ${sy.join("-")}.`;say(sy.join(""),true)}};
ACT.tonnext=(v,b)=>{const w=b.closest(".ton"),i=(+w.dataset.i+1)%TON.length;w.dataset.i=i;w.querySelector(".ton-w").innerHTML=tonW(i);const r=w.querySelector(".ton-r");r.textContent="";r.className="ton-r";say(TON[i][0].join(""),true)};

/* --- texto para la voz de las páginas con estos juegos --- */
{const _vt=visText;visText=function(v){if(v&&["silab","gn","tam","tiempo","adj","tonica"].includes(v.t))return"";return _vt(v)}}
/* --- sin chips en láminas que los piden --- */
{const _vl=VX.lam;VX.lam=v=>{const h=_vl(v),L=LAM[v.id];return L&&L.noChips?h.replace(/<div class="lam-chips">[\s\S]*?<\/div>/,""):h}}

/* =========== Colocar todo en las lecciones de Español =========== */
const ESPIMG={
e1:[{"Cinco letras muy importantes":"L:vocales"},"anker1"],
e2:[{"Nuestro abecedario":"L:abc","Del Alfa a la Omega":"pantocrator"},"ankerClase"],
e3:[{"¿Qué es una sílaba?":{t:"silab",c:["m","p"]},"Mamá María":"virgenNino"},"lectora"],
e4:[{"Con la S":{t:"silab",c:["s","l","t"]}},"escuela"],
e5:[{"Con la N":{t:"silab",c:["n","d","r"]},"Rosario y Redentor":"virgenRos"},"virgenRos"],
e6:[{"La C y la Q":{t:"silab",c:["c","g"]},"Querer como Jesús":"buenpastor"},"ninos"],
e7:[{"La CH":{t:"silab",c:["ch","ll","ñ"]},"Llama, cáliz y Niño":"natividad"},"natividad"],
e8:[{},"escuela"],
e9:[{"Mayúscula y punto":"L:oracion1","Oraciones que rezan":"abueloOra"},"abueloOra"],
e10:[{"Nombres santos":"evangelistas"},"ninos"],
e11:[{"Los trabalenguas":"escuela","Las adivinanzas":"lectora","Inventa la tuya":"anker1","Adivinanzas de la fe":"angelguarda"},"abuelo"],
e12:[{"Había una vez...":"maizDiv","Plantar con cuidado":"semillas","La primera hojita":"trigo","La milpa crece":"maiz","Compartir":"compartir","La parábola del sembrador":"sembrador"},"maizDiv"],
e13:[{"El recado":"ankerCarta","La receta":"L:receta"},"ankerCarta"],
e14:[{"Para qué sirven":"lectora"},"lectora"],
e15:[{"Elegir lo bueno":"virtudes"},"virtudes"],
e16:[{"Un lobo que daba miedo":"lobo","Francisco va a buscarlo":"francisco","Un trato de paz":"sassetta","Un amigo del pueblo":"ninos"},"sassetta"],
"2e1":[{"Ordenar como el diccionario":"L:abc","Los libros de la Biblia":"gutenberg"},"diccionario"],
"2e2":[{"Dos consonantes juntas":{t:"silab",c:["pl","bl","tr","br","cr","fl","gr","pr","fr","gl","dr","cl"]}},"escuela"],
"2e3":[{"Familias de palabras":"L:familia"},"ankerClase"],
"2e4":[{"Masculino y femenino":{t:"gn"},"Los ángeles":"arcangeles"},"arcangeles"],
"2e5":[{"¿Cómo es?":{t:"adj"},"Cómo es Dios":"pantocrator"},"pantocrator"],
"2e6":[{"Ayer, hoy y mañana":{t:"tiempo"}},"anker1"],
"2e7":[{"El punto y la coma":"L:puntuacion","¡Aleluya!":"resurreccion"},"lectora"],
"2e8":[{},"ankerCarta"],
"2e9":[{"Jesús, José y los ángeles":"anunMurillo"},"anunMurillo"],
"2e10":[{"Comunión y compartir":"comulgantes"},"comulgantes"],
"2e11":[{"Pequeño y con cariño":{t:"tam"},"Juan Dieguito":"juanDiego"},"juanDiego"],
"2e12":[{"¿Qué es una fábula?":"L:cuento","La liebre y la tortuga":"liebre"},"liebre"],
"2e13":[{"Un indio humilde":"juanDiego","La Señora del cielo":"guadalupe","La imagen":"basilica","Historia y fe":"abuelo"},"guadalupe"],
"2e14":[{"¿Qué es un poema?":"L:poema","El Cántico de las criaturas":"francisco"},"francisco"],
"2e15":[{"Partes de una carta":"L:carta","Un ejemplo":"ankerCarta","Las cartas de San Pablo":"pablo"},"pablo"],
"2e16":[{"Cómo hacer un rosario de bolitas":"fatimaRos"},"fatimaRos"],
"3e1":[{"¿Cómo está ordenado?":"L:diccionario","Buscar una palabra":"diccionario"},"diccionario"],
"3e2":[{"La sílaba que suena más fuerte":{t:"tonica"}},"escuela"],
"3e3":[{"Palabras de la Misa":"misa"},"misa"],
"3e4":[{"Los siete pecados capitales y sus virtudes":"bosch"},"bosch"],
"3e5":[{"Las dos partes de la oración":"L:sujeto","Oraciones de la Biblia":"panes"},"panes"],
"3e6":[{"El párrafo":"anker1","Un párrafo sobre la Misa":"misa"},"anker1"],
"3e7":[{"Todos podemos ser santos":"ninos"},"ninos"],
"3e8":[{"La noticia":"L:noticia","La entrevista":"periodico","La mejor noticia":"resurreccion"},"periodico"],
"3e9":[{"¿Qué es una leyenda?":"abuelo","La leyenda de la flor de Nochebuena":"nochebuena","Lo que vale es el corazón":"natividad"},"nochebuena"],
"3e10":[{"Versos y estrofas":"L:poema","Los Salmos":"davidArpa","Escribe tu salmo":"anker1"},"davidArpa"]};
(function(){const find=id=>{for(const s of SUBJ)for(const u of s.units)for(const l of u.ls)if(l.id===id)return l};const src=f=>/^https?:/.test(f)?f:WM(f,800);
 const photo=(key,alt)=>{const[f,cr]=IM[key];return{t:"photo",src:src(f),alt,cap:"",credit:cr,art:!/foto|fotografía|Unsplash|Commons/.test(cr)}};
 for(const[id,[pages,hero]]of Object.entries(ESPIMG)){const l=find(id);if(!l)continue;
  for(const[h,spec]of Object.entries(pages)){const pg=l.learn.find(p=>p.h===h&&!p.info);if(!pg)continue;let nv,big=false;
   if(typeof spec==="object"){nv=spec;big=true}else if(spec.startsWith("L:")){nv={t:"lam",id:spec.slice(2)};big=true}else{if(!IM[spec])continue;nv=photo(spec,h)}
   const old=pg.v;
   if(!old||old.t==="emo"||old.t==="art"||(old.t==="photo"&&!big))pg.v=nv;
   else if(old.t==="combo")old.x.unshift(nv);
   else pg.v=big?{t:"combo",x:[nv,old]}:{t:"combo",x:[nv,old]}}
  if(hero&&IM[hero]){const[f,cr]=IM[hero];l.learn.filter(p=>p.info).forEach(p=>{p.v.img={src:/^https?:/.test(f)?f:WM(f,640),cr}})}}})();
