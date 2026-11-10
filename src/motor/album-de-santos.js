/* ========= Álbum de estampas de santos =========
   Cada 5 estrellas que gana el niño se desbloquea una estampa nueva, en el orden de la lista. */
const STAR_PER=5;
const ALBUM=[
["San José","0319","#8a5a33","family","Esposo de María y papá de Jesús en la tierra. Patrono de las familias y de los trabajadores."],
["Nuestra Señora de Guadalupe","1212","#1f8a86","flower","Se apareció a San Juan Diego en el Tepeyac en 1531. Madre de México y de América."],
["San Juan Diego","1209","#c9a46b","flower","Indígena humilde a quien la Virgen llamó «Juanito, Juan Dieguito». Llevó las rosas en su tilma."],
["San Francisco de Asís","1004","#7a5a3a","bird","Dejó todo para seguir a Jesús pobre. Llamaba «hermanos» al sol, a la luna y a los animales."],
["San Juan Bosco","0131","#2b2b3a","sun","Sacerdote amigo de los niños y jóvenes. Decía: «Estén siempre alegres»."],
["Santo Domingo Savio","0309","#3d6fb8","heart","Alumno de Don Bosco. Su lema: «Antes morir que pecar». Murió a los 14 años."],
["Santa Teresita del Niño Jesús","1001","#6b4226","flower","Enseñó el «caminito»: hacer las cosas pequeñas con mucho amor."],
["San Martín de Porres","1103","#2b2b3a","trash","Fray Escoba: barría, curaba enfermos y amaba a los animales. Primer santo mulato de América."],
["Santa Rosa de Lima","0823","#f3ead8","flower","Primera santa de América. Rezaba mucho y cuidaba a los enfermos pobres."],
["San Felipe de Jesús","0205","#7a5a3a","cross","Primer santo mexicano. Fue misionero en Japón y dio su vida por Cristo."],
["San José Sánchez del Río","0210","#3d6fb8","crown","Niño mexicano de 14 años. Murió gritando «¡Viva Cristo Rey!»."],
["San Carlo Acutis","1012","#e5484d","host","Joven italiano que amaba la Eucaristía, su «autopista al cielo». Usaba la computadora para hacer el bien."],
["San Miguel Arcángel","0929","#c62f3b","shield","Príncipe de los ángeles. Nos defiende del mal: «¿Quién como Dios?»."],
["San Gabriel Arcángel","0929","#f3ead8","speech","El ángel que anunció a María que sería la Madre de Jesús."],
["San Rafael Arcángel","0929","#1d8c5c","fish","Acompañó a Tobías en su viaje y lo ayudó a curar a su papá."],
["San Pedro","0629","#3d6fb8","crown","Pescador al que Jesús hizo cabeza de la Iglesia. El primer Papa."],
["San Pablo","0629","#c62f3b","scroll","Perseguía a los cristianos hasta que Jesús lo llamó. Escribió muchas cartas de la Biblia."],
["San Juan Evangelista","1227","#1d8c5c","bible","El discípulo amado. Estuvo con María al pie de la cruz."],
["San Andrés","1130","#c95f0e","fish","Pescador que llevó a su hermano Pedro con Jesús."],
["Santiago Apóstol","0725","#7a3b2e","map","Apóstol y hermano de Juan. Patrono de los peregrinos."],
["San Mateo","0921","#6f45c0","coin","Cobrador de impuestos que dejó todo para seguir a Jesús. Escribió un Evangelio."],
["San Lucas","1018","#c62f3b","book","Médico y evangelista. Nos contó cómo nació Jesús."],
["San Marcos","0425","#c62f3b","bible","Escribió el Evangelio más corto. Su símbolo es el león."],
["San Juan Bautista","0624","#8a5a33","drop","Primo de Jesús. Lo bautizó en el río Jordán y preparó su camino."],
["Santa María Magdalena","0722","#c62f3b","sun","La primera en ver a Jesús resucitado y en anunciarlo."],
["San Esteban","1226","#c62f3b","star","Diácono y primer mártir. Perdonó a quienes lo atacaban."],
["Santa Inés","0121","#f3ead8","sheep","Jovencita valiente que amó a Jesús por encima de todo."],
["Santa Cecilia","1122","#c62f3b","music","Patrona de la música. Cantaba a Dios en su corazón."],
["Santa Lucía","1213","#c62f3b","eye","Mártir que ayudaba a los pobres. Patrona de la vista."],
["San Jorge","0423","#c62f3b","shield","Soldado valiente que dio su vida por Jesús."],
["San Nicolás","1206","#c62f3b","gift","Obispo generoso que regalaba cosas a los niños pobres en secreto."],
["San Patricio","0317","#1d8c5c","leaf","Misionero de Irlanda. Explicaba la Trinidad con un trébol."],
["San Benito","0711","#2b2b3a","book","Padre de los monjes. Su regla: «Ora y trabaja»."],
["Santa Clara","0811","#7a5a3a","candle","Amiga de San Francisco. Vivió en pobreza y oración."],
["San Antonio de Padua","0613","#7a5a3a","bread","Gran predicador. Le pedimos ayuda para encontrar lo perdido."],
["Santo Tomás de Aquino","0128","#f3ead8","book","Muy sabio. Patrono de los estudiantes: ¡pídele ayuda al estudiar!"],
["San Agustín","0828","#2b2b3a","heart","Se convirtió gracias a las oraciones de su mamá. «Nuestro corazón está inquieto hasta que descanse en Ti»."],
["Santa Mónica","0827","#6b4226","pray","Mamá que rezó muchos años por su hijo Agustín."],
["San Ignacio de Loyola","0731","#2b2b3a","flame","Soldado que se hizo santo. Todo para la mayor gloria de Dios."],
["San Francisco Javier","1203","#2b2b3a","ship","Gran misionero que llevó a Jesús hasta Japón."],
["Santa Teresa de Jesús","1015","#7a5a3a","pencil","Mística y escritora. «Solo Dios basta»."],
["Santa Catalina de Siena","0429","#f3ead8","scroll","Joven valiente que aconsejaba al Papa."],
["San Juan María Vianney","0804","#2b2b3a","church","El santo cura de Ars. Confesaba a la gente muchas horas al día."],
["Santa Teresa de Calcuta","0905","#3d7fb8","hands","Cuidó a los más pobres de los pobres con una sonrisa."],
["San Juan Pablo II","1022","#f3ead8","cross","Papa amigo de los niños y jóvenes. «¡No tengan miedo!»"],
["San Juan XXIII","1011","#f3ead8","heart","El Papa bueno, lleno de cariño y buen humor."],
["San Maximiliano Kolbe","0814","#3d6fb8","heart","Dio su vida para salvar a un papá en un campo de concentración."],
["San Isidro Labrador","0515","#8a5a33","corn","Campesino que rezaba mientras trabajaba la tierra."],
["San Joaquín y Santa Ana","0726","#c95f0e","family","Los abuelos de Jesús, papás de la Virgen María."],
["Santa Rita de Casia","0522","#2b2b3a","flower","Patrona de las causas difíciles. Perdonó de corazón."],
["San Pío de Pietrelcina","0923","#7a5a3a","pray","El Padre Pío: rezaba mucho y confesaba a miles de personas."],
["Santa Bernardita","0416","#3d7fb8","water","Niña pobre a quien se apareció la Virgen en Lourdes."],
["Santa Faustina","1005","#2b2b3a","heart","Jesús le enseñó a confiar: «Jesús, en ti confío»."],
["San Vicente de Paúl","0927","#2b2b3a","bread","Padre de los pobres. Organizó la caridad."],
["San Luis Gonzaga","0621","#2b2b3a","star","Joven santo y puro. Patrono de la juventud."],
["San Cristóbal Magallanes","0521","#2b2b3a","crown","Sacerdote mexicano mártir. Perdonó a quienes lo mataron."],
["Beato Miguel Agustín Pro","1123","#2b2b3a","crown","Sacerdote mexicano alegre y valiente: «¡Viva Cristo Rey!»."],
["Los niños mártires de Tlaxcala","0923","#c95f0e","sun","Cristóbal, Antonio y Juan: niños mexicanos que dieron su vida por Jesús."],
["San Rafael Guízar y Valencia","1024","#6f45c0","church","Obispo mexicano, misionero de los pobres en Veracruz."],
["San Pier Giorgio Frassati","0704","#1d8c5c","mountain","Joven alegre, deportista y servidor de los pobres: «¡Hacia lo alto!»."]];
function unlockedN(p){return Math.min(ALBUM.length,Math.floor(totalStars(p)/STAR_PER))}
function stampSVG(i,sz){const[n,,col,ic]=ALBUM[i],h=sz||150;return`<svg class="stamp" viewBox="0 0 120 150" width="${h*0.8}" height="${h}" role="img" aria-label="${n}"><defs><linearGradient id="sg${i}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff8e6"/><stop offset="1" stop-color="${col}" stop-opacity=".35"/></linearGradient></defs><rect x="3" y="3" width="114" height="144" rx="10" fill="url(#sg${i})" stroke="#c79a1b" stroke-width="4"/><rect x="9" y="9" width="102" height="132" rx="7" fill="none" stroke="#e8c45a" stroke-width="1.5" stroke-dasharray="3 3"/><circle cx="60" cy="42" r="24" fill="#ffe08a" opacity=".8"/><circle cx="60" cy="42" r="24" fill="none" stroke="#f6b42c" stroke-width="2.5"/><path d="M28 132c0-34 14-62 32-62s32 28 32 62z" fill="${col}"/><path d="M50 74h20l-4 58h-12z" fill="#fff" opacity=".18"/><circle cx="60" cy="46" r="14" fill="#e9b88a"/><path d="M47 44c0-11 26-11 26 0-4-5-22-5-26 0z" fill="#5a3a22"/><g transform="translate(70 98) scale(.5)">${ART[ic]||ART.star}</g></svg>`}
let ALBTAB="mias";
const ALBMES=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
function albumView(){LS=null;begin();MODE="album";const p=me(),u=unlockedN(p),st=totalStars(p),N=ALBUM.length,falta=Math.max(0,(u+1)*STAR_PER-st),prog=u<N?Math.max(6,Math.round((STAR_PER-Math.min(STAR_PER,falta))/STAR_PER*100)):100;
 const cell=(i,day)=>i<u?`<button class="stampbtn" data-act="stamp" data-v="${i}">${day?`<i class="sday" aria-hidden="true">${+ALBUM[i][1].slice(2)}</i>`:""}${stampSVG(i,150)}<span>${ALBUM[i][0]}</span></button>`:`<div class="stampbtn locked">${day?`<i class="sday" aria-hidden="true">${+ALBUM[i][1].slice(2)}</i>`:""}<span class="lockq" aria-hidden="true">?</span><span>${day?ALBUM[i][0]:"Próxima estampa"}</span></div>`;
 let body;
 if(ALBTAB==="anio"){const byM=Array.from({length:12},()=>[]);ALBUM.forEach((a,i)=>byM[+a[1].slice(0,2)-1].push(i));
  body=byM.map((l,m)=>l.length?`<section class="albmes"><h2>${ALBMES[m]} <small>${l.filter(i=>i<u).length} de ${l.length}</small></h2><div class="album">${l.sort((x,y)=>ALBUM[x][1].localeCompare(ALBUM[y][1])||x-y).map(i=>cell(i,true)).join("")}</div></section>`:"").join("")}
 else{const mine=[];for(let i=u-1;i>=0;i--)mine.push(i);body=`<div class="album">${u<N?cell(u,false):""}${mine.map(i=>cell(i,false)).join("")}</div>${u?"":`<p class="lead">Todavía no tienes estampas. ¡Termina lecciones para ganar estrellas y abrir la primera!</p>`}`}
 app(`<header class="vhead" style="--sc:var(--rel);--ss:var(--rel-s)"><span class="sic" aria-hidden="true">${typeof TABICON!=="undefined"?TABICON.album:""}</span><div><h1>Mi álbum de santos</h1><p>Tienes <b>${u} de ${N}</b> estampas.</p></div></header>
 <section class="albprog"><div class="lbar" role="img" aria-label="Avance hacia la siguiente estampa"><i style="width:${prog}%"></i></div><p>${u<N?`Te faltan <b>${falta}</b> ${falta===1?"estrella":"estrellas"} para la siguiente. Cada ${STAR_PER} estrellas ganas una estampa nueva.`:"¡Completaste todo el álbum! ¡Felicidades!"}</p></section>
 <div class="seg" role="group" aria-label="Qué estampas ver"><button class="segb${ALBTAB==="mias"?" on":""}" data-act="albtab" data-v="mias" aria-pressed="${ALBTAB==="mias"}">Mis estampas</button><button class="segb${ALBTAB==="anio"?" on":""}" data-act="albtab" data-v="anio" aria-pressed="${ALBTAB==="anio"}">Todo el año</button></div>
 ${body}`);scrollTo(0,0)}
function stampSheet(i){const[n,f,,,d]=ALBUM[i],fe=new Date(2026,+f.slice(0,2)-1,+f.slice(2),12).toLocaleDateString("es-MX",{day:"numeric",month:"long"});sheet(`<div class="stampbig">${stampSVG(i,220)}</div><h2>${n}</h2><p>${d}</p><p class="note">Su fiesta: ${fe}.</p>${sayBtn(n+". "+d)}<button class="btn ghost" data-act="close" style="--sc:var(--rel)">Cerrar</button>`)}
function albumCard(){const p=me(),u=unlockedN(p);return`<section class="reto alb"><div class="albmini">${u?stampSVG(u-1,84):`<span class="lockq sm">?</span>`}</div><div><h3>Mi álbum de santos</h3><p>${u} de ${ALBUM.length} estampas. Gana una nueva cada ${STAR_PER} estrellas.</p></div><button class="btn" data-act="album" style="--sc:var(--rel)">Ver álbum</button></section>`}
function newStampHTML(before,after){if(after<=before)return"";const i=after-1;return`<div class="newstamp">${stampSVG(i,140)}<div><p class="pk">¡Estampa nueva!</p><h3>${ALBUM[i][0]}</h3><p>${ALBUM[i][4]}</p><button class="btn" data-act="album" style="--sc:var(--rel)">Ver mi álbum</button></div></div>`}
Object.assign(ACT,{album:()=>albumView(),albtab:v=>{ALBTAB=v==="anio"?"anio":"mias";albumView()},stamp:v=>stampSheet(+v)});
