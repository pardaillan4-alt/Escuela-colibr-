/* ========= Historia: pinturas, fotos y láminas interactivas ========= */
Object.assign(IM,{
hidalgo:["Miguel_Hidalgo.jpg","Retrato de Miguel Hidalgo y Costilla"],
morelos:["Retrato_de_Morelos,_1813.png","Retrato de José María Morelos (1813)"],
juarez:["Benito_Juarez.jpg","Retrato de Benito Juárez"],
trigarante:["TrigaranteMexico.jpg","«Entrada del Ejército Trigarante a la Ciudad de México», 27 de septiembre de 1821"],
puebla:["Batalla_de_Puebla,_5-5-1862_(1870).png","«Batalla de Puebla, 5 de mayo de 1862» (1870)"],
madero:["Presidente_Francisco_I._Madero.jpg","Francisco I. Madero · fotografía antigua"],
velasco:["Valle_de_México_José_Maria_Velazco_3.jpg","José María Velasco, «El Valle de México»"],
popo:["Popo_Iztac.jpg","Popocatépetl e Iztaccíhuatl · foto de Wikimedia Commons"],
orizaba:["Pico_de_Orizaba,_Mexico.JPG","Pico de Orizaba, la montaña más alta de México · foto de Wikimedia Commons"],
chichen:["Chichen_Itza_3.jpg","Chichén Itzá, Yucatán · foto de Wikimedia Commons"],
teoti:["Piramide_del_Sol_072006.JPG","Pirámide del Sol, Teotihuacán · foto de Wikimedia Commons"],
palenque:["PalenqueA.jpg","Palenque, Chiapas · foto de Wikimedia Commons"],
monteAlban:["Panoramica_Monte_Alban.JPG","Monte Albán, Oaxaca · foto de Wikimedia Commons"],
muertos:["Altardediademuertos.jpg","Altar de Día de Muertos · foto de Wikimedia Commons"],
cristoRey:["Cristo_Rey_en_el_Cerro_del_Cubilete_-_Silao,_Guanajuato,_México.jpg","Cristo Rey en el Cerro del Cubilete, Guanajuato · foto de Wikimedia Commons"],
catedral:["La_catedral_de_la_ciudad_de_México.jpg","La Catedral de la Ciudad de México"],
milpaSopa:["Albert_Anker_-_Die_Kappeler_Milchsuppe_(1869).jpg","Albert Anker, «La sopa de la paz» (1869): una comunidad que comparte"]});

/* --- Mapa de México --- */
const MXO=[[-117.1,32.5],[-114.7,32.7],[-111.1,31.3],[-108.2,31.3],[-108.2,31.8],[-106.5,31.8],[-104.9,30.6],[-104.4,29.6],[-103.1,29],[-102.4,29.8],[-101.4,29.8],[-100.3,28.3],[-99.5,27.5],[-97.5,25.9],[-97.7,24.5],[-97.8,22.3],[-97.2,20.6],[-96.1,19.2],[-94.5,18.1],[-92.6,18.6],[-91.4,18.6],[-90.7,19.8],[-90.3,21],[-89.6,21.3],[-87.1,21.5],[-86.8,20.8],[-87.5,19.3],[-88.3,18.5],[-89.1,17.8],[-91,17.8],[-91,17.25],[-91.4,17.25],[-90.4,16.1],[-92.2,15.3],[-92.2,14.5],[-93.6,15.9],[-94.8,16.2],[-96.5,15.7],[-98.5,16.3],[-99.9,16.8],[-101.5,17.6],[-102.2,17.9],[-103.7,18.7],[-105.2,19.9],[-105.3,20.6],[-105.7,22],[-106.4,23.2],[-108,25],[-109.4,26.3],[-110.9,27.9],[-112.2,29],[-113,30.8],[-114.7,31.8],[-114.6,30],[-113.2,28.9],[-112.1,27],[-111.2,25.6],[-110.3,24.1],[-109.4,23.2],[-109.9,22.9],[-111.4,24.4],[-112.1,24.8],[-112.3,26.3],[-114.2,27.7],[-115.1,28.3],[-114.3,28.8],[-115.7,29.7],[-116.7,31.7]];
const mxP=([lo,la])=>[((lo+118)*10.6+8).toFixed(1),((33-la)*10.6+12).toFixed(1)];
const mxPath=pts=>"M"+pts.map(p=>mxP(p).join(" ")).join("L")+"z";
const mxLine=pts=>"M"+pts.map(p=>mxP(p).join(" ")).join("L");
LAM.mapamx={hint:"Toca un lugar del mapa de México para conocerlo.",parts:{
 pacifico:["Océano Pacífico","Es el océano más grande del mundo. Baña las costas del oeste de México.","#3d8bfd"],
 golfo:["Golfo de México","Está al este. Ahí desembocan muchos ríos y hay puertos como Veracruz y Tampico.","#6cb8ff"],
 caribe:["Mar Caribe","Al este de la península de Yucatán. Tiene aguas turquesa y arrecifes de coral.","#2bb3c0"],
 baja:["Península de Baja California","Una tierra larga y angosta, rodeada de mar casi por todos lados. Ahí hay desiertos y ballenas.","#f2c14e"],
 yucatan:["Península de Yucatán","Tierra plana, sin ríos en la superficie, con cenotes. Ahí vivieron los mayas.","#7ccf72"],
 sierraOcc:["Sierra Madre Occidental","Una cadena de montañas muy larga al oeste del país, con barrancas profundas.","#a0703f"],
 sierraOri:["Sierra Madre Oriental","Montañas al este del país, cerca del Golfo de México.","#b98546"],
 volcanes:["Eje Neovolcánico","Una franja de volcanes que cruza el centro de México: Popocatépetl, Iztaccíhuatl, Pico de Orizaba…","#e5484d"],
 rioBravo:["Río Bravo","Es la frontera con Estados Unidos. Es uno de los ríos más largos de México.","#1f6fd1"],
 cdmx:["Ciudad de México","La capital del país. Ahí está la Basílica de Guadalupe.","#d4145a"]},
 svg:()=>{const tri=([lo,la])=>{const[x,y]=mxP([lo,la]);return`<path d="M${x-6} ${+y+5}l6-11 6 11z" fill="#e5484d" stroke="#8a1c1f" stroke-width="1"/>`};
 return`<svg class="plantdx lamsvg" viewBox="0 0 360 240" role="img" aria-label="Mapa de México"><rect width="360" height="240" fill="#bfe3ff"/>
<g data-p="pacifico" data-act="lampart" data-v="mapamx:pacifico"><text x="38" y="200" font-size="15" font-weight="800" fill="#1f5fae" font-style="italic">Océano Pacífico</text><path d="M40 212q8-6 16 0t16 0 16 0 16 0" stroke="#1f5fae" stroke-width="2" fill="none"/></g>
<g data-p="golfo" data-act="lampart" data-v="mapamx:golfo"><text x="248" y="62" font-size="13" font-weight="800" fill="#1f5fae" font-style="italic" text-anchor="middle">Golfo de</text><text x="248" y="78" font-size="13" font-weight="800" fill="#1f5fae" font-style="italic" text-anchor="middle">México</text></g>
<g data-p="caribe" data-act="lampart" data-v="mapamx:caribe"><text x="356" y="196" font-size="11" font-weight="800" fill="#127f8a" font-style="italic" text-anchor="end">Mar</text><text x="356" y="209" font-size="11" font-weight="800" fill="#127f8a" font-style="italic" text-anchor="end">Caribe</text></g>
<path d="${mxPath(MXO)}" fill="#f6edd5" stroke="#7a5a3a" stroke-width="1.6"/>
<g data-p="baja" data-act="lampart" data-v="mapamx:baja"><path d="${mxPath([[-117.1,32.5],[-114.7,32.7],[-114.7,31.8],[-114.6,30],[-113.2,28.9],[-112.1,27],[-111.2,25.6],[-110.3,24.1],[-109.4,23.2],[-109.9,22.9],[-111.4,24.4],[-112.1,24.8],[-112.3,26.3],[-114.2,27.7],[-115.1,28.3],[-114.3,28.8],[-115.7,29.7],[-116.7,31.7]])}" fill="#f2c14e" opacity=".75"/></g>
<g data-p="yucatan" data-act="lampart" data-v="mapamx:yucatan"><path d="${mxPath([[-90.7,19.8],[-90.3,21],[-89.6,21.3],[-87.1,21.5],[-86.8,20.8],[-87.5,19.3],[-88.3,18.5],[-89.1,17.8],[-91,17.8],[-91.4,18.6]])}" fill="#7ccf72" opacity=".75"/></g>
<g data-p="sierraOcc" data-act="lampart" data-v="mapamx:sierraOcc"><path d="${mxLine([[-108.6,30.6],[-107.6,28.6],[-106.6,26.4],[-105.5,24.2],[-104.6,22.2]])}" stroke="#a0703f" stroke-width="7" stroke-linecap="round" fill="none" stroke-dasharray="2 5"/></g>
<g data-p="sierraOri" data-act="lampart" data-v="mapamx:sierraOri"><path d="${mxLine([[-101.8,27.6],[-100.6,25.6],[-99.6,23.4],[-98.8,21.4]])}" stroke="#b98546" stroke-width="7" stroke-linecap="round" fill="none" stroke-dasharray="2 5"/></g>
<g data-p="volcanes" data-act="lampart" data-v="mapamx:volcanes">${[[-103.6,19.5],[-101.9,19.6],[-99.8,19.1],[-98.6,19.0],[-97.3,19.0]].map(tri).join("")}</g>
<g data-p="rioBravo" data-act="lampart" data-v="mapamx:rioBravo"><path d="${mxLine([[-106.5,31.8],[-104.9,30.6],[-104.4,29.6],[-103.1,29],[-102.4,29.8],[-101.4,29.8],[-100.3,28.3],[-99.5,27.5],[-97.5,25.9]])}" stroke="#1f6fd1" stroke-width="3.5" fill="none"/></g>
<g data-p="cdmx" data-act="lampart" data-v="mapamx:cdmx">${(()=>{const[x,y]=mxP([-99.13,19.43]);return`<circle cx="${x}" cy="${y}" r="6" fill="#d4145a" stroke="#fff" stroke-width="2"/><text x="${+x-8}" y="${+y+4}" text-anchor="end" font-size="10" font-weight="800" fill="#7a0c30">CDMX</text>`})()}</g>
<g transform="translate(330 30)" pointer-events="none"><circle r="16" fill="#fff" opacity=".85"/><path d="M0-14l5 14h-10z" fill="#e5484d"/><path d="M0 14l5-14h-10z" fill="#1b2a44"/><text y="-17" text-anchor="middle" font-size="10" font-weight="900" fill="#1b2a44">N</text></g>
<text x="120" y="22" font-size="10" fill="#5a6a80" font-weight="700">Estados Unidos</text><text x="250" y="232" font-size="9" fill="#5a6a80" font-weight="700" text-anchor="end">Guatemala y Belice</text></svg>`}};

/* --- La rosa de los vientos --- */
LAM.brujula={hint:"Toca cada punto cardinal. El Sol nos ayuda a ubicarnos.",parts:{
 norte:["Norte","Si extiendes tu brazo derecho hacia donde sale el Sol, el norte queda frente a ti. En México, al norte está Estados Unidos.","#e5484d"],
 sur:["Sur","Lo contrario del norte. Al sur de México están Guatemala y Belice.","#1b2a44"],
 este:["Este u oriente","Por aquí sale el Sol cada mañana. Las iglesias antiguas miran al oriente: Jesús es el Sol que viene.","#f2a03d"],
 oeste:["Oeste o poniente","Por aquí se oculta el Sol en la tarde.","#8f5ad6"]},
 svg:()=>`<svg class="plantdx lamsvg" viewBox="0 0 360 300" role="img" aria-label="Rosa de los vientos"><defs><linearGradient id="bsky" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#ffcf9e"/><stop offset=".5" stop-color="#cfeaff"/><stop offset="1" stop-color="#ffe7a8"/></linearGradient></defs><rect width="360" height="300" fill="url(#bsky)"/><circle cx="180" cy="150" r="110" fill="#fffaf0" stroke="#c9b48a" stroke-width="4"/><circle cx="180" cy="150" r="88" fill="none" stroke="#e8dcc0" stroke-width="2"/>
<g data-p="norte" data-act="lampart" data-v="brujula:norte"><path d="M180 150l-16-24 16-80 16 80z" fill="#e5484d"/><text x="180" y="32" text-anchor="middle" font-size="22" font-weight="900" fill="#e5484d">N</text></g>
<g data-p="sur" data-act="lampart" data-v="brujula:sur"><path d="M180 150l-16 24 16 80 16-80z" fill="#1b2a44"/><text x="180" y="284" text-anchor="middle" font-size="22" font-weight="900" fill="#1b2a44">S</text></g>
<g data-p="este" data-act="lampart" data-v="brujula:este"><path d="M180 150l24-16 80 16-80 16z" fill="#f2a03d"/><text x="300" y="158" font-size="22" font-weight="900" fill="#c4762a">E</text><circle cx="334" cy="110" r="16" fill="#ffc93c"/><text x="334" y="88" text-anchor="middle" font-size="10" font-weight="800" fill="#7a4a10">sale el Sol</text></g>
<g data-p="oeste" data-act="lampart" data-v="brujula:oeste"><path d="M180 150l-24-16-80 16 80 16z" fill="#8f5ad6"/><text x="44" y="158" font-size="22" font-weight="900" fill="#8f5ad6" text-anchor="end">O</text><circle cx="26" cy="196" r="14" fill="#ff8a5c"/><text x="26" y="226" text-anchor="middle" font-size="10" font-weight="800" fill="#7a2e10">se oculta</text></g>
<circle cx="180" cy="150" r="8" fill="#ffd24a" stroke="#7a5a3a" stroke-width="2"/></svg>`};

/* --- Línea del tiempo de México --- */
const LMX=[["meso","Mesoamérica","Antes de 1521","🛕","Olmecas, mayas, zapotecas y mexicas construyeron pirámides, cultivaron maíz y estudiaron las estrellas.","#7ccf72"],
 ["conquista","Encuentro de dos mundos","1521","⛵","Llegan los españoles. Cae México-Tenochtitlan y comienza el mestizaje. En 1531 la Virgen de Guadalupe se aparece a Juan Diego.","#f2c14e"],
 ["virreinato","Virreinato (Nueva España)","1521–1821","⛪","Trescientos años: se construyen catedrales, universidades y misiones; nace la cultura mestiza.","#e3a6d0"],
 ["independencia","Independencia","1810–1821","🔔","El cura Hidalgo da el grito en Dolores; Morelos continúa la lucha; en 1821 entra el Ejército Trigarante.","#3fa34d"],
 ["reforma","Siglo XIX: Juárez y la Reforma","1857–1867","📜","Se escribe la Constitución de 1857. México defiende su soberanía contra la intervención francesa.","#3d8bfd"],
 ["revolucion","Revolución Mexicana","1910","🐎","Madero, Zapata y Villa luchan por la justicia y la tierra. Después, los cristeros defienden la libertad religiosa.","#e5484d"],
 ["hoy","México de hoy","Siglo XXI","🏙️","Un país de más de 126 millones de personas, con muchas culturas, que sigue construyéndose con el trabajo de todos.","#8f5ad6"]];
LAM.lineamx={hint:"Toca cada época de la historia de México, o recórrela con «Paso a paso».",parts:Object.fromEntries(LMX.map(([k,n,y,,t,c])=>[k,[n+" ("+y+")",t,c]])),seq:LMX.map(x=>x[0]),
 svg:()=>`<svg class="plantdx lamsvg" viewBox="0 0 360 330" role="img" aria-label="Línea del tiempo de México"><rect width="360" height="330" fill="#fffaf0"/><path d="M40 20V312" stroke="#7a5a3a" stroke-width="6" stroke-linecap="round"/>${LMX.map(([k,n,y,e,,c],i)=>{const yy=34+i*44;return`<g data-p="${k}" data-act="lampart" data-v="lineamx:${k}"><circle cx="40" cy="${yy}" r="17" fill="${c}" stroke="#fff" stroke-width="3"/><text x="40" y="${yy+7}" text-anchor="middle" font-size="18">${e}</text><rect x="66" y="${yy-17}" width="282" height="34" rx="10" fill="${c}" opacity=".25"/><text x="76" y="${yy-1}" font-size="14" font-weight="800" fill="#1b2a44">${n}</text><text x="76" y="${yy+13}" font-size="11.5" font-weight="700" fill="#5a6a80">${y}</text></g>`}).join("")}</svg>`};

/* --- Árbol de mi familia --- */
LAM.arbolfam={hint:"Toca a cada persona del árbol para saber cómo se llama su lugar en la familia.",parts:{
 abuelos:["Abuelos","Los papás de tu papá y de tu mamá. Ellos guardan la historia de la familia.","#c98a5b"],
 papas:["Papá y mamá","Te dieron la vida, te cuidan y te enseñan a amar a Dios.","#e5484d"],
 tios:["Tíos","Los hermanos de tu papá o de tu mamá.","#f2a03d"],
 hermanos:["Hermanos","Los otros hijos de tus papás. ¡Compañeros para toda la vida!","#3d8bfd"],
 yo:["Yo","Tú eres un regalo de Dios para tu familia.","#ffd24a"],
 primos:["Primos","Los hijos de tus tíos.","#3fa34d"]},
 svg:()=>{const p=(k,x,y,e,l)=>`<g data-p="${k}" data-act="lampart" data-v="arbolfam:${k}"><circle cx="${x}" cy="${y}" r="22" fill="#fff" stroke="${LAM.arbolfam.parts[k][2]}" stroke-width="4"/><text x="${x}" y="${y+9}" text-anchor="middle" font-size="24">${e}</text><text x="${x}" y="${y+36}" text-anchor="middle" font-size="10.5" font-weight="800" fill="#1b2a44">${l}</text></g>`;
 return`<svg class="plantdx lamsvg" viewBox="0 0 360 320" role="img" aria-label="Árbol de mi familia"><rect width="360" height="320" fill="#eef9ff"/><circle cx="180" cy="130" r="150" fill="#9fd88f" opacity=".35"/><path d="M168 320c4-40 4-80 12-120M192 320c-4-40-4-80-12-120" stroke="#8a5a2b" stroke-width="18" fill="none"/>
<g stroke="#a7c79a" stroke-width="3" fill="none"><path d="M70 50L110 120M120 50L110 120M240 50L250 120M290 50L250 120M110 120L180 200M250 120L180 200M110 120L44 200M250 120L316 200"/></g>
${p("abuelos",70,42,"👴","abuelo")}${p("abuelos",120,42,"👵","abuela")}${p("abuelos",240,42,"👴🏽","abuelo")}${p("abuelos",290,42,"👵🏽","abuela")}
${p("papas",110,118,"👨","papá")}${p("papas",250,118,"👩🏽","mamá")}${p("tios",44,192,"🧔","tío")}${p("tios",316,192,"👩","tía")}
${p("hermanos",128,212,"👦","hermano")}${p("yo",180,200,"🧒","¡yo!")}${p("hermanos",232,212,"👧","hermana")}${p("primos",44,272,"👦🏽","primo")}${p("primos",316,272,"👧🏽","prima")}</svg>`}};

/* --- Croquis de la comunidad --- */
LAM.comunidad={hint:"Este es el croquis de una comunidad. Toca cada lugar o su símbolo.",parts:{
 iglesia:["Parroquia","Donde la comunidad se reúne para la Misa, los bautizos y las fiestas. Símbolo: ✝️","#8f5ad6"],
 escuela:["Escuela","Donde aprendemos y hacemos amigos. Símbolo: 📚","#3d8bfd"],
 mercado:["Mercado","Donde se venden frutas, verduras, carne y muchas cosas más. Símbolo: 🛒","#f2a03d"],
 salud:["Centro de salud","Donde los médicos y enfermeras cuidan a los enfermos. Símbolo: ➕","#e5484d"],
 parque:["Parque","Un lugar para jugar, caminar y respirar aire limpio. Símbolo: 🌳","#3fa34d"],
 casa:["Mi casa","Donde vive mi familia. En el croquis se marca para saber cómo llegar. Símbolo: 🏠","#c98a5b"],
 simbologia:["Simbología","Es el cuadrito que explica qué significa cada dibujo del croquis o del mapa.","#ffd24a"]},
 svg:()=>{const b=(k,x,y,w,h,e,l)=>`<g data-p="${k}" data-act="lampart" data-v="comunidad:${k}"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="6" fill="#fff" stroke="${LAM.comunidad.parts[k][2]}" stroke-width="3"/><text x="${x+w/2}" y="${y+h/2+4}" text-anchor="middle" font-size="22">${e}</text><text x="${x+w/2}" y="${y+h+12}" text-anchor="middle" font-size="10" font-weight="800" fill="#1b2a44">${l}</text></g>`;
 return`<svg class="plantdx lamsvg" viewBox="0 0 360 300" role="img" aria-label="Croquis de una comunidad"><rect width="360" height="300" fill="#e9f3e2"/><g fill="#cfd6e0"><rect x="0" y="118" width="360" height="22"/><rect x="0" y="232" width="250" height="22"/><rect x="118" y="0" width="22" height="300"/><rect x="236" y="0" width="22" height="254"/></g><g stroke="#fff" stroke-width="2" stroke-dasharray="8 6"><path d="M0 129h360M0 243h250M129 0v300M247 0v254"/></g>
${b("iglesia",20,24,80,64,"⛪","Parroquia")}${b("escuela",150,24,76,64,"🏫","Escuela")}${b("mercado",268,24,80,64,"🛒","Mercado")}${b("salud",20,150,80,60,"🏥","Centro de salud")}<g data-p="parque" data-act="lampart" data-v="comunidad:parque"><rect x="150" y="150" width="76" height="70" rx="6" fill="#9fd88f" stroke="#3fa34d" stroke-width="3"/><text x="188" y="194" text-anchor="middle" font-size="26">🌳</text><text x="188" y="232" text-anchor="middle" font-size="10" font-weight="800" fill="#1b2a44">Parque</text></g>${b("casa",268,150,60,56,"🏠","Mi casa")}
<g data-p="simbologia" data-act="lampart" data-v="comunidad:simbologia"><rect x="262" y="262" width="94" height="34" rx="6" fill="#fff8d6" stroke="#e5b400" stroke-width="2"/><text x="270" y="276" font-size="9" font-weight="800" fill="#1b2a44">SIMBOLOGÍA</text><text x="270" y="290" font-size="10">⛪🏫🛒🏥🌳🏠</text></g>
<g transform="translate(30 270)" pointer-events="none"><path d="M0-14l5 14h-10z" fill="#e5484d"/><text y="12" text-anchor="middle" font-size="10" font-weight="900">N</text></g></svg>`}};

/* --- El relieve --- */
LAM.relieve={hint:"Toca cada forma del relieve para conocerla.",parts:{
 montana:["Montaña","Una gran elevación de tierra. Muchas montañas juntas forman una sierra.","#8a6a4a"],
 volcan:["Volcán","Una montaña por donde puede salir lava, ceniza y humo. El Popocatépetl es un volcán activo.","#e5484d"],
 valle:["Valle","Tierra más baja entre montañas. Muchos pueblos y ciudades están en valles, como la Ciudad de México.","#7ccf72"],
 meseta:["Meseta","Una llanura alta, plana arriba, como una mesa gigante.","#d9a85b"],
 llanura:["Llanura","Tierra plana y baja, buena para sembrar y para el ganado.","#b9e6a8"],
 rio:["Río","Agua dulce que corre desde las montañas hasta el mar.","#3d8bfd"],
 lago:["Lago","Agua rodeada de tierra. En México está el lago de Chapala, el más grande.","#6cb8ff"],
 costa:["Costa y mar","Donde la tierra se encuentra con el mar. ¡Ahí están las playas!","#2bb3c0"]},
 svg:()=>`<svg class="plantdx lamsvg" viewBox="0 0 360 240" role="img" aria-label="Formas del relieve"><defs><linearGradient id="rsk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#bfe6ff"/><stop offset="1" stop-color="#f2fbff"/></linearGradient></defs><rect width="360" height="240" fill="url(#rsk)"/><rect y="196" width="360" height="44" fill="#a8d58f"/>
<g data-p="costa" data-act="lampart" data-v="relieve:costa"><path d="M290 200h70v40h-80z" fill="#2bb3c0"/><path d="M276 200q14-8 22 0" fill="#f6e0a8"/><text x="330" y="226" font-size="16">🌊</text></g>
<g data-p="llanura" data-act="lampart" data-v="relieve:llanura"><path d="M210 200h80v40h-90z" fill="#b9e6a8"/><text x="236" y="198" font-size="14">🌾🐄</text></g>
<g data-p="meseta" data-act="lampart" data-v="relieve:meseta"><path d="M150 200l18-60h56l16 60z" fill="#d9a85b"/><path d="M168 140h56" stroke="#a87a32" stroke-width="3"/></g>
<g data-p="valle" data-act="lampart" data-v="relieve:valle"><path d="M84 200q36-30 76 0v40H84z" fill="#7ccf72"/><text x="108" y="210" font-size="13">🏘️</text></g>
<g data-p="montana" data-act="lampart" data-v="relieve:montana"><path d="M0 200L44 82l40 118z" fill="#8a6a4a"/><path d="M30 120l14-38 14 38-14-8z" fill="#fff"/></g>
<g data-p="volcan" data-act="lampart" data-v="relieve:volcan"><path d="M70 200l38-110h20l40 110z" fill="#7a5a5a"/><path d="M108 90h20l-4 12h-12z" fill="#e5484d"/><path d="M118 86q-10-18 4-30t-2-26" stroke="#9aa3ad" stroke-width="8" fill="none" stroke-linecap="round" opacity=".7"/></g>
<g data-p="rio" data-act="lampart" data-v="relieve:rio"><path d="M46 116q14 40 34 70t40 38" stroke="#3d8bfd" stroke-width="6" fill="none" stroke-linecap="round"/><path d="M200 214q50 6 92 0" stroke="#3d8bfd" stroke-width="6" fill="none" stroke-linecap="round"/></g>
<g data-p="lago" data-act="lampart" data-v="relieve:lago"><ellipse cx="120" cy="226" rx="26" ry="9" fill="#6cb8ff" stroke="#3d8bfd" stroke-width="2"/></g>
<rect y="236" width="360" height="4" fill="#6b4f2f"/></svg>`};

/* --- La Bandera de México --- */
LAM.bandera={hint:"Toca cada parte de nuestra Bandera.",parts:{
 verde:["Franja verde","Representa la esperanza del pueblo mexicano.","#006847"],
 blanco:["Franja blanca","Representa la unidad. En el centro está el Escudo Nacional.","#e9e9e9"],
 rojo:["Franja roja","Representa la sangre de los héroes que dieron su vida por la patria.","#ce1126"],
 escudo:["Escudo Nacional","Recuerda la fundación de México-Tenochtitlan: un águila devorando una serpiente, parada sobre un nopal en un islote del lago.","#8a5a2b"]},
 svg:()=>`<svg class="plantdx lamsvg" viewBox="0 0 360 230" role="img" aria-label="La Bandera de México"><rect width="360" height="230" fill="#eef3f8"/><path d="M18 20v206" stroke="#7a5a3a" stroke-width="6"/>
<g data-p="verde" data-act="lampart" data-v="bandera:verde"><rect x="22" y="20" width="110" height="180" fill="#006847"/></g>
<g data-p="blanco" data-act="lampart" data-v="bandera:blanco"><rect x="132" y="20" width="110" height="180" fill="#fff"/></g>
<g data-p="rojo" data-act="lampart" data-v="bandera:rojo"><rect x="242" y="20" width="110" height="180" fill="#ce1126"/></g>
<g data-p="escudo" data-act="lampart" data-v="bandera:escudo"><path d="M158 146q29 18 58 0" stroke="#2f7d4a" stroke-width="4" fill="none"/><ellipse cx="187" cy="150" rx="20" ry="5" fill="#6cb8ff"/><path d="M180 146v-18M194 146v-14" stroke="#2f7d4a" stroke-width="5"/><ellipse cx="180" cy="124" rx="8" ry="12" fill="#3fa34d"/><ellipse cx="195" cy="128" rx="7" ry="10" fill="#3fa34d"/><path d="M170 96q14-26 34-8l8-2-6 8q6 14-6 26l-14 2q-18-6-16-26z" fill="#8a5a2b"/><path d="M162 98l-14-10 18 2zM212 92l16-8-10 14z" fill="#6b4220"/><path d="M200 84l10-4-4 7z" fill="#e5b400"/><path d="M176 118q-8 10 4 12t10 8" stroke="#3fa34d" stroke-width="3" fill="none"/></g></svg>`};

/* --- Medios de transporte --- */
LAM.transportes={hint:"Toca el cielo, la tierra o el agua para conocer los medios de transporte.",parts:{
 aire:["Por aire","Aviones, helicópteros y globos aerostáticos viajan por el cielo. ¡Son los más rápidos!","#6cb8ff"],
 tierra:["Por tierra","Autobuses, coches, trenes, bicicletas… y también a pie o en burrito, como la Sagrada Familia.","#b9e6a8"],
 agua:["Por agua","Barcos, lanchas y trajineras llevan personas y mercancías por ríos, lagos y mares.","#2bb3c0"]},
 quiz:[["¿Por dónde viaja el avión? ✈️","aire"],["¿Por dónde viaja la trajinera de Xochimilco? 🛶","agua"],["¿Por dónde viaja el tren? 🚆","tierra"],["¿Por dónde viaja el globo? 🎈","aire"],["¿Por dónde viaja el barco? 🚢","agua"],["¿Por dónde viaja la bicicleta? 🚲","tierra"]],
 svg:()=>`<svg class="plantdx lamsvg" viewBox="0 0 360 260" role="img" aria-label="Medios de transporte"><g data-p="aire" data-act="lampart" data-v="transportes:aire"><rect width="360" height="120" fill="#cfeaff"/><text x="40" y="60" font-size="40">✈️</text><text x="170" y="90" font-size="38">🎈</text><text x="270" y="56" font-size="36">🚁</text></g>
<g data-p="tierra" data-act="lampart" data-v="transportes:tierra"><path d="M0 120h360v70H0z" fill="#b9e6a8"/><rect x="0" y="160" width="360" height="12" fill="#8a8f99"/><text x="16" y="168" font-size="38">🚌</text><text x="110" y="168" font-size="36">🚆</text><text x="200" y="168" font-size="32">🚲</text><text x="270" y="168" font-size="34">🫏</text></g>
<g data-p="agua" data-act="lampart" data-v="transportes:agua"><path d="M0 190h360v70H0z" fill="#2bb3c0"/><text x="40" y="240" font-size="40">🚢</text><text x="200" y="240" font-size="36">🛶</text><text x="290" y="240" font-size="32">⛵</text></g></svg>`};

/* --- ¿Dónde está el gatito? (ubicación espacial) --- */
const UBI=[["arriba de la mesa",150,70],["debajo de la mesa",150,160],["dentro de la caja",282,170],["fuera de la caja",282,110],["delante de la silla",62,190],["detrás de la silla",62,118],["a la izquierda de la mesa",76,58],["a la derecha de la mesa",232,58]];
VX.ubica=()=>`<div class="mt ubi" data-i="0"><svg viewBox="0 0 340 230" class="ubi-svg" role="img" aria-label="El gatito y los muebles"><rect width="340" height="230" fill="#fff6e8"/><rect y="200" width="340" height="30" fill="#d9b98a"/><rect x="100" y="96" width="120" height="12" rx="3" fill="#a8743f"/><rect x="108" y="108" width="10" height="92" fill="#8a5a2b"/><rect x="202" y="108" width="10" height="92" fill="#8a5a2b"/><path d="M30 120h16v80h-16zM30 150h60v10H30zM80 160h10v40H80z" fill="#c4762a"/><g class="ubi-back"></g><path d="M252 160h60v40h-60z" fill="#e8c27a" stroke="#a8743f" stroke-width="2"/><g class="ubi-cat" style="transform:translate(150px,70px)"><text x="0" y="0" font-size="34" text-anchor="middle">🐱</text></g><path d="M252 160l-12-14h60l12 14" fill="#f2d79a" stroke="#a8743f" stroke-width="2" class="ubi-lid"/></svg><p class="mt-r ubi-t" aria-live="polite">El gatito está <b>arriba de la mesa</b>.</p><div class="row center ubi-b">${UBI.map(([t],i)=>`<button class="adj-b" data-act="ubigo" data-v="${i}">${t}</button>`).join("")}</div><div class="row center"><button class="btn" data-act="uburet" style="--sc:var(--his)">🎯 Reto: ¿dónde está?</button></div></div>`;
function ubiMove(w,i){const[t,x,y]=UBI[i],c=w.querySelector(".ubi-cat");c.style.transform=`translate(${x}px,${y}px)`;w.dataset.i=i}
ACT.ubigo=(v,b)=>{const w=b.closest(".ubi"),r=w.querySelector(".ubi-t");if(w.dataset.goal!==undefined){const ok=+v===+w.dataset.goal;r.innerHTML=ok?`¡Muy bien! Está <b>${UBI[+v][0]}</b>. ⭐`:"Mira bien dónde está el gatito y vuelve a intentar.";say(ok?"¡Muy bien! Está "+UBI[+v][0]:"Intenta otra vez",true);if(ok){delete w.dataset.goal;try{SND.ok()}catch(e){}}return}ubiMove(w,+v);r.innerHTML=`El gatito está <b>${UBI[+v][0]}</b>.`;say("El gatito está "+UBI[+v][0],true)};
ACT.uburet=(v,b)=>{const w=b.closest(".ubi"),i=Math.floor(Math.random()*UBI.length);ubiMove(w,i);w.dataset.goal=i;w.querySelector(".ubi-t").textContent="¿Dónde está el gatito? Toca la respuesta.";say("¿Dónde está el gatito?",true)};
{const _vt=visText;visText=function(v){if(v&&v.t==="ubica")return"";return _vt(v)}}

/* =========== Colocar en las lecciones de Historia =========== */
placeVisuals({
h1:{"¿Qué es una familia?":"L:arbolfam","Todos ayudamos":"milpaSopa","La Sagrada Familia":"natividad",_hero:"abuelo"},
h2:{"Pasado, presente y futuro":"abuelo",_hero:"abuelo"},
h3:{"Juegos de antes":"compartir","Pregunta a tus abuelos":"abuelo","La fe de nuestros abuelos":"abueloOra",_hero:"abuelo"},
h4:{"Arriba y abajo":{t:"ubica"},"Arriba está el cielo":"ascension"},
h5:{"¿Qué es una comunidad?":"milpaSopa","El croquis":"L:comunidad","La parroquia, corazón de la comunidad":"misa",_hero:"milpaSopa"},
h6:{"Vivo en México":"L:mapamx","Muchos paisajes":"velasco","Un país de muchas culturas":"mercado","México, tierra de Guadalupe":"basilica",_hero:"velasco"},
h7:{"Por tierra":"L:transportes","Viajes de la Biblia":"magos"},
h8:{"16 de septiembre: Independencia":"hidalgo","20 de noviembre: Revolución":"madero","24 de febrero: Día de la Bandera":"L:bandera","21 de marzo: Benito Juárez":"juarez","La fe en la historia de México":"guadalupe",_hero:"trigarante"},
h9:{"Día de Muertos":"muertos","La Virgen de Guadalupe":"guadalupe","Las posadas y la Navidad":"natividad","Día de Reyes":"magos","Fiestas que nacen de la fe":"basilica",_hero:"muertos"},
h10:{"Los misioneros":"francisco","Niños santos de México":"ninos","El primer santo mexicano":"felipe",_hero:"juanDiego"},
"2h1":{"Décadas y siglos":"L:lineamx"},
"2h2":{"Norte, sur, este y oeste":"L:brujula","Norte y sur de México":"L:mapamx"},
"2h3":{"La simbología":"L:comunidad"},
"2h4":{"Productos de México":"maizDiv","San José Obrero":"joseEgipto",_hero:"maizDiv"},
"2h5":{"Antes de la llegada de los españoles":"teoti","Los mayas":"chichen","Los mexicas":"velasco","Lo bueno de cada pueblo":"monteAlban",_hero:"palenque"},
"2h6":{"El encuentro de dos mundos":"catedral","Los misioneros":"francisco","Guadalupe une a México":"guadalupe",_hero:"guadalupe"},
"2h7":{"Tres siglos de virreinato":"catedral","Los héroes":"hidalgo","La consumación":"trigarante",_hero:"hidalgo"},
"2h8":{"5 de febrero: la Constitución":"juarez","5 de mayo: Batalla de Puebla":"puebla","Rezar por la patria":"cristoRey",_hero:"puebla"},
"2h9":{"La fiesta del pueblo":"misa","Peregrinaciones":"basilica",_hero:"basilica"},
"3h1":{"México está dividido":"L:mapamx","Cada parroquia en su diócesis":"catedral"},
"3h2":{"Las formas de la tierra":"L:relieve","El relieve de México":"popo","Dios habla en los montes":"orizaba",_hero:"velasco"},
"3h3":{"El agua de México":"L:mapamx","El Jordán y el lago de Galilea":"bautismoV"},
"3h4":{"Se necesitan":"mercado","San Isidro Labrador":"espigadoras",_hero:"maizDiv"},
"3h5":{"Una gran región cultural":"chichen","Las grandes culturas":"palenque","Buscaban a Dios":"monteAlban",_hero:"teoti"},
"3h6":{"300 años":"L:lineamx","Arte y cultura":"catedral","Las misiones":"francisco",_hero:"catedral"},
"3h7":{"Después de la Independencia":"trigarante","Benito Juárez y la Reforma":"juarez","La intervención francesa":"puebla","Unidad y perdón":"guadalupe",_hero:"juarez"},
"3h8":{"La Revolución Mexicana":"madero","Cristo Rey":"cristoRey",_hero:"madero"},
"3h9":{"Patrimonio de la Humanidad":"chichen","Tesoros de fe":"catedral",_hero:"monteAlban"}});
