/* ========= Español 2.º a profundidad (Guía Santillana 2 + SEP) ========= */
const KCQ=[["queso","🧀"],["quince","1️⃣5️⃣"],["paquete","📦"],["mosquito","🦟"],["quetzal","🦜"],["máquina","⚙️"],["kilo","⚖️"],["kiwi","🥝"],["koala","🐨"],["karate","🥋"],["casa","🏠"],["cuna","🛏️"],["conejo","🐇"],["cometa","☄️"],["vaca","🐄"],["esquina","📐"]];
const GUIW=[["guitarra","🎸"],["juguete","🧸"],["hoguera","🔥"],["águila","🦅"],["guisado","🍲"],["manguera","🚿"],["hormiguero","🐜"],["pingüino","🐧"],["cigüeña","🐦"],["agüita","💧"],["paragüero","☂️"],["bilingüe","🗣️"]];
const COMPU=[["paraguas","para","aguas","☂️"],["sacapuntas","saca","puntas","✏️"],["girasol","gira","sol","🌻"],["abrelatas","abre","latas","🥫"],["cumpleaños","cumple","años","🎂"],["rompecabezas","rompe","cabezas","🧩"],["mediodía","medio","día","🕛"],["lavaplatos","lava","platos","🍽️"],["cortaúñas","corta","uñas","💅"],["pasatiempo","pasa","tiempo","🎲"],["bocacalle","boca","calle","🛣️"],["portalápices","porta","lápices","✏️"],["salvavidas","salva","vidas","🛟"],["telaraña","tela","araña","🕸️"]];
const FAMP=[["pan",["panadero","panadería","empanada","panecito"]],["flor",["florero","florista","floreado","florecita"]],["mar",["marino","marinero","marea","marítimo"]],["zapato",["zapatero","zapatería","zapatito","zapatilla"]],["libro",["librero","librería","librito","libreta"]],["leche",["lechero","lechería","lechita","lechera"]],["sal",["salero","salado","salar","salina"]],["jardín",["jardinero","jardinería","ajardinado","jardincito"]]];
const FALSOF=["lechuga","marciano","floja","pantalla","salón","libra","zapote","jarra"];
const OFIC=[["hace el pan","panadero","👨‍🍳"],["reparte las cartas","cartero","📬"],["apaga incendios","bombero","🚒"],["cuida las plantas del jardín","jardinero","🌷"],["arregla los zapatos","zapatero","👞"],["hace muebles de madera","carpintero","🪚"],["pesca en el mar","pescador","🎣"],["cura a los enfermos","médico","🩺"],["enseña en la escuela","maestro","🏫"],["celebra la Misa","sacerdote","⛪"],["siembra el campo","campesino","🌽"],["construye casas","albañil","🧱"]];
const TV=[["comer","comí","como","comeré"],["jugar","jugué","juego","jugaré"],["rezar","recé","rezo","rezaré"],["cantar","canté","canto","cantaré"],["leer","leí","leo","leeré"],["correr","corrí","corro","correré"],["escribir","escribí","escribo","escribiré"],["ayudar","ayudé","ayudo","ayudaré"],["dibujar","dibujé","dibujo","dibujaré"],["visitar","visité","visito","visitaré"]];
const ABA=[["jugaba","jugava"],["cantaba","cantava"],["caminaba","caminava"],["estaba","estava"],["miraba","mirava"],["rezaba","rezava"],["llevaba","llevava"],["nadaba","nadava"]],VERV=[["vivir","bibir"],["volver","bolver"],["venir","benir"],["ver","ber"],["viajar","biajar"],["volar","bolar"],["votar","botar"],["servir","serbir"],["hervir","herbir"],["llover","llober"]];
const CAUS=[["Llovió toda la noche.","El patio amaneció mojado.",["Salió el sol.","El perro ladró."]],["No regué la planta en una semana.","La planta se marchitó.",["La planta dio flores.","Creció más."]],["Comí muchos dulces.","Me dolió el estómago.",["Me crecieron los pies.","Aprendí a leer."]],["Estudié para el examen.","Saqué buena calificación.",["Me reprobaron.","Se acabó el recreo."]],["Mi hermano dejó el pan fuera de la bolsa.","El pan se puso duro.",["El pan se hizo pastel.","El pan creció."]],["Me lavé las manos con jabón.","Quité los microbios.",["Me dio gripa.","Se rompió el jabón."]],["Se fue la luz.","Prendimos una vela.",["Fuimos a nadar.","Hizo calor."]],["Perdoné a mi amigo.","Volvimos a jugar juntos.",["Nos peleamos más.","Me fui solo."]]];
const MORAL=[["La liebre se burló de la tortuga y se durmió en la carrera; la tortuga, despacito, llegó primero.","Con constancia se llega lejos.",["El más rápido siempre gana.","Hay que dormir mucho."]],["La hormiga guardó comida en verano; la cigarra solo cantó y en invierno no tenía qué comer.","Hay que prepararse y trabajar a tiempo.",["Cantar es malo.","El invierno es bonito."]],["El pastorcito gritó «¡el lobo!» de broma muchas veces; cuando llegó el lobo de verdad, nadie le creyó.","Al mentiroso nadie le cree.",["Los lobos son buenos.","Hay que gritar fuerte."]],["Un ratoncito liberó al león de una red, aunque el león antes se había burlado de él.","Nadie es tan pequeño que no pueda ayudar.",["Los leones son malos.","Los ratones comen redes."]],["La zorra no alcanzó las uvas y dijo: «De todos modos estaban verdes».","No hay que despreciar lo que no podemos tener.",["Las uvas verdes son ricas.","Las zorras saltan alto."]]];
const REFR=[["Ese examen fue pan comido.","fue muy fácil",["comimos pan","fue difícil"]],["Juan está en las nubes.","está distraído",["está volando","está en un avión"]],["Esa bici costó un ojo de la cara.","costó muy cara",["regalaron un ojo","fue barata"]],["Mi tía me echó una mano con la tarea.","me ayudó",["me aventó la mano","me regañó"]],["Metí la pata en el recado.","me equivoqué",["me lastimé el pie","pisé el papel"]],["Mi abuelo es un pan de Dios.","es muy bueno",["es panadero","es muy serio"]],["Se me hizo agua la boca.","se me antojó mucho",["tomé agua","me dio sed"]],["Hablas hasta por los codos.","hablas muchísimo",["te duelen los codos","no hablas"]]];
const PARAF=[["Mi perro está muy contento.","Mi perro está feliz.",["Mi perro está triste.","Mi perro está dormido."]],["Comenzó la Misa.","Empezó la Misa.",["Terminó la Misa.","No hubo Misa."]],["El niño es muy veloz.","El niño es muy rápido.",["El niño es muy lento.","El niño es muy alto."]],["La casa es enorme.","La casa es muy grande.",["La casa es chiquita.","La casa es bonita."]],["Ana platicó con su abuela.","Ana habló con su abuela.",["Ana se peleó con su abuela.","Ana visitó a su abuela."]],["Observé las estrellas.","Miré las estrellas.",["Conté las estrellas.","Dibujé las estrellas."]]];
const FUENT=[["el significado de una palabra","el diccionario",["el calendario","un cuento"]],["cómo viven las ballenas","una enciclopedia",["un recetario","un poema"]],["qué pasó ayer en tu ciudad","el periódico",["un cuento de hadas","el diccionario"]],["qué día es la fiesta de un santo","el calendario",["el atlas","una revista de coches"]],["dónde está un país","un atlas o mapa",["un recetario","una canción"]],["cómo hacer un pastel","un recetario",["un atlas","el periódico de ayer"]],["las palabras de Jesús","la Biblia (los Evangelios)",["una historieta","el diccionario"]]];
const OPIN=[["El agua hierve a 100 grados.",0],["Los perros son las mascotas más bonitas.",1],["México tiene 32 estados.",0],["El helado de fresa es el más rico.",1],["La Navidad se celebra el 25 de diciembre.",0],["El fútbol es el deporte más divertido.",1],["Las abejas hacen miel.",0],["La clase de música es la mejor.",1]];
const CMPS=[["El elefante es","grande","el ratón","más … que"],["La tortuga es","rápida","la liebre","menos … que"],["Mi hermano es","alto","mi papá","tan … como"],["El hielo es","frío","la nieve","tan … como"],["El sol es","caliente","la luna","más … que"],["Un caracol es","veloz","un caballo","menos … que"]];
const NOTIS=[["El sábado 3 de mayo, en la parroquia de San Juan, los niños del catecismo sembraron 50 árboles para cuidar la creación.",[["¿Qué pasó?","sembraron árboles",["hubo un festival","se perdió un perro"]],["¿Quiénes?","los niños del catecismo",["los bomberos","los maestros"]],["¿Cuándo?","el sábado 3 de mayo",["el lunes","en Navidad"]],["¿Dónde?","en la parroquia de San Juan",["en el mercado","en la playa"]]]],["Ayer por la tarde, en el centro de Puebla, cayó una fuerte granizada. Los vecinos ayudaron a limpiar las calles.",[["¿Qué pasó?","cayó una granizada",["hubo un temblor","llegó el circo"]],["¿Cuándo?","ayer por la tarde",["hace un año","mañana"]],["¿Dónde?","en el centro de Puebla",["en Monterrey","en el mar"]],["¿Quiénes ayudaron?","los vecinos",["los turistas","nadie"]]]],["Esta mañana, en la escuela Benito Juárez, se inauguró una biblioteca con 500 libros donados por las familias.",[["¿Qué pasó?","se inauguró una biblioteca",["se cerró la escuela","hubo una carrera"]],["¿Dónde?","en la escuela Benito Juárez",["en el parque","en la iglesia"]],["¿Quiénes donaron los libros?","las familias",["el gobierno","una tienda"]],["¿Cuántos libros?","500",["50","5 000"]]]]];
const DIAL=["—Hola, ¿cómo estás? —preguntó Ana.","—¡Qué bonito día! —dijo Pedro.","—Mamá, ¿me ayudas? —pidió Leo.","—Gracias, Dios mío —rezó la abuela."];
Object.assign(EG,{
eKCQ:()=>{const[w,e]=pick(KCQ),bad=[...new Set([w.replace("qu","k"),w.replace("qu","c"),w.replace(/^k/,"qu"),w.replace(/^k/,"c"),w.replace(/c(?=[aou])/,"k"),w.replace(/c(?=[aou])/,"q")])].filter(x=>x!==w);return bad.length>=2?C("¿Cómo se escribe el nombre del dibujo?",[w,...shuf(bad).slice(0,2)],{t:"emo",x:e},"Con a, o, u usamos c; con e, i usamos qu; la k aparece en pocas palabras."):null},
eGui:()=>{const[w,e]=pick(GUIW),o=[...new Set([w.replace("gü","gu"),w.replace("gü","g"),w.replace(/gu(?=[ei])/,"g"),w.replace(/gu(?=[ei])/,"gü"),w.replace(/gu(?=[ei])/,"j")])].filter(x=>x!==w);return o.length>=2?C("¿Cómo se escribe?",[w,...shuf(o).slice(0,2)],{t:"emo",x:e},w.includes("ü")?"La diéresis (¨) hace que la u sí suene.":"En gue y gui la u no suena."):null},
eCompu:()=>{const i=mtRnd(0,COMPU.length-1),[w,a,b,e]=COMPU[i],t=mtRnd(0,1);return t?C(`¿Qué dos palabras forman «${w}»?`,[`${a} + ${b}`,`${COMPU[(i+1)%COMPU.length][1]} + ${b}`,`${a} + ${COMPU[(i+2)%COMPU.length][2]}`],{t:"emo",x:e}):C(`¿Qué palabra compuesta se forma con «${a}» + «${b}»?`,[w,`${a} ${b}`,`${b}${a}`],{t:"emo",x:e},"Las palabras compuestas se escriben juntas.")},
eFamP:()=>{const i=mtRnd(0,FAMP.length-1),[r,ws]=FAMP[i],ok=pick(ws.filter(Boolean)),bad=shuf(FALSOF.filter(x=>x&&!x.startsWith(r.slice(0,3)))).slice(0,2);return C(`¿Qué palabra es de la familia de «${r}»?`,[ok,...bad],null,"Las palabras de la misma familia comparten una parte y su significado.")},
eOficio:()=>{const i=mtRnd(0,OFIC.length-1),[d,o,e]=OFIC[i],x=shuf(OFIC.filter((_,k)=>k!==i)).slice(0,2).map(z=>z[1]);return C(`¿Cómo se llama quien ${d}?`,[o,...x],{t:"emo",x:e})},
eTiempo:()=>{const[inf,pas,pre,fut]=pick(TV),t=mtRnd(0,2),w=["Ayer","Hoy","Mañana"][t],a=[pas,pre,fut][t];return C(`${w} yo ___ (${inf}).`,[a,...[pas,pre,fut].filter(x=>x!==a)],null,"Ayer: pasado. Hoy: presente. Mañana: futuro.")},
eSujeto:()=>{const s=pick(ORS),t=orParse(s),vi=t.findIndex(x=>x.k==="*"),suj=t.slice(0,vi).map(x=>x.w).join(" "),pred=t.slice(vi).map(x=>x.w).join(" "),o=[...new Set([pred,t[vi].w,t.slice(vi+1).map(x=>x.w).join(" "),t[0].w])].filter(x=>x&&x!==suj).slice(0,2);return Math.random()<.6?C(`¿Cuál es el sujeto (de quién se habla)? «${orPlain(s)}»`,[suj,...o],null,"Pregunta: ¿quién hace la acción?"):C(`¿Cuál es el predicado (lo que se dice del sujeto)? «${orPlain(s)}»`,[...new Set([pred,suj,t.slice(vi+1).map(x=>x.w).join(" ")||t[0].w,t[vi].w])].slice(0,3),null,"El predicado empieza con el verbo.")},
eCausa:()=>{const i=mtRnd(0,CAUS.length-1),[c,q,o]=CAUS[i];return Math.random()<.5?C(`Causa: «${c}» ¿Cuál es la consecuencia?`,[q,...o]):C(`Consecuencia: «${q}» ¿Cuál fue la causa?`,[c,...shuf(CAUS.filter((_,k)=>k!==i)).slice(0,2).map(x=>x[0])])},
eMoral:()=>{const[f,m,o]=pick(MORAL);return C(`«${f}» ¿Cuál es la moraleja?`,[m,...o],null,"La moraleja es la enseñanza de la fábula.")},
eDialogo:()=>{const d=pick(DIAL),b1=d.replace(/^—/,"").replace(" —"," "),b2=d.replace(/—/g,"-").replace(/^-/,"");return C("¿Cuál está bien escrito como diálogo?",[d,b1,'"'+d.replace(/—/g,"")+'"'],null,"En los diálogos usamos el guion largo (—) antes de que hable cada personaje.")},
eAba:()=>Math.random()<.5?(([a,b])=>C("¿Cómo se escribe?",[a,b,a.replace("aba","ava").replace(/ava$/,"aba")+"n"],null,"Las terminaciones -aba, -abas, -ábamos van siempre con b."))(pick(ABA)):(([a,b])=>C("¿Cómo se escribe el verbo?",[a,b,a.replace("v","bb")],null,"Estos verbos se escriben con v."))(pick(VERV.filter(x=>x[1]))),
eRefran:()=>{const[f,m,o]=pick(REFR);return C(`«${f}» ¿Qué quiere decir?`,[m,...o],null,"Algunas expresiones no se entienden al pie de la letra.")},
eParaf:()=>{const[a,b,o]=pick(PARAF);return C(`¿Qué oración dice lo mismo que «${a}»?`,[b,...o])},
eFuente:()=>{const[q,a,o]=pick(FUENT);return C(`Para saber ${q}, ¿dónde buscas?`,[a,...o])},
eDicc:()=>{const w=pick([["cama","casa","cara"],["pato","pala","papá"],["mesa","mano","misa"],["luna","lupa","lago"],["sol","sopa","sapo"],["rosa","rana","ropa"]]),s=w.slice().sort((a,b)=>a.localeCompare(b,"es"));return Math.random()<.5?O("Ordena como en el diccionario (fíjate en la segunda letra)",s,null,"Si la primera letra es igual, fíjate en la segunda."):C("¿Qué palabra aparece primero en el diccionario?",[s[0],s[1],s[2]])},
eOpin:()=>{const[f,o]=pick(OPIN);return C(`«${f}» ¿Es un hecho o una opinión?`,o?["una opinión","un hecho","una pregunta"]:["un hecho","una opinión","una pregunta"],null,"Un hecho se puede comprobar; una opinión es lo que alguien piensa.")},
eSilCl:()=>{const p=pick(PAL),n=p.s.length,nm=["monosílaba","bisílaba","trisílaba","polisílaba"][Math.min(n,4)-1];return C(`«${p.w}» (${p.s.join("-")}) es una palabra…`,[nm,...["monosílaba","bisílaba","trisílaba","polisílaba"].filter(x=>x!==nm).slice(0,2)],{t:"emo",x:p.e},"mono 1 · bi 2 · tri 3 · poli 4 o más")},
eCompa:()=>{const[a,adj,b,r]=pick(CMPS),f=r.split(" … ");return C(`Completa: «${a} ___ ${adj} ___ ${b}».`,[r,...["más … que","menos … que","tan … como"].filter(x=>x!==r)])},
eNoti:()=>{const[t,qs]=pick(NOTIS),[q,a,o]=pick(qs);return C(`Lee la noticia: «${t}» ${q}`,[a,...o],null,"Una noticia responde qué, quién, cuándo y dónde.")}});
for(const k of ["eKCQ","eGui","eCompu","eFamP","eOficio","eTiempo","eSujeto","eCausa","eMoral","eDialogo","eAba","eRefran","eParaf","eFuente","eDicc","eOpin","eSilCl","eCompa","eNoti"])G[k]=_wrapE(EG[k],k);
const ESP2N={
/* U1 */
"2e17":ESL("2e17","Letras, sílabas y palabras",[
 ["De letras a palabras","Las letras forman sílabas y las sílabas forman palabras. Según sus sílabas, las palabras son <b>monosílabas</b> (sol), <b>bisílabas</b> (ca-sa), <b>trisílabas</b> (pe-lo-ta) o <b>polisílabas</b> (ma-ri-po-sa).",{t:"cards",x:[["☀️","sol: 1"],["🏠","ca-sa: 2"],["⚽","pe-lo-ta: 3"],["🦋","ma-ri-po-sa: 4"]]}],
 ["Juega con las sílabas","Toca una sílaba para escucharla.",{t:"silab",c:["pl","bl","tr","br","cr","fl","gr","pr","fr","gl","dr","cl"]}]],
 ["Hosanna, Aleluya, Amén","Algunas palabras de la Misa vienen del hebreo: «Amén» (bisílaba) quiere decir «así es»; «Aleluya» (polisílaba), «alaben a Dios».",{t:"emo",x:"🙏 A-mén · A-le-lu-ya"}],
 ["El dictado del hermanito","✏️","Tu hermanito no sabe cuántas sílabas tiene «chocolate».","¿Qué haces?",[["Le enseño a aplaudir: cho-co-la-te, ¡4!",1,"¡Muy bien!"],["Le digo que es fácil y me voy",0,"Ayúdale con paciencia."],["Le hago la tarea",0,"Mejor enséñale."]]],
 [["Mono: 1 sílaba · Bi: 2 · Tri: 3 · Poli: 4 o más."],["pan: monosílaba","li-bro: bisílaba","za-pa-to: trisílaba"]],
 ["¿Qué tipo de palabra es «tortuga»?",["tor-tu-ga.","3 sílabas."],"Trisílaba."],
 [[["eNSil",8]],[["eSilCl",10]],[["eSilCl",6],["eTrab",4]]],[],"Amén: así es."),
"2e18":ESL("2e18","Palabras con k, c y q",[
 ["El mismo sonido","El sonido «k» se escribe de tres formas: <b>ca, co, cu</b> (casa, cometa, cuna), <b>que, qui</b> (queso, mosquito) y con <b>k</b> en pocas palabras (kilo, kiwi, koala).",{t:"silab",c:["c","k"]}],
 ["La u que no suena","En que y qui la <b>u</b> no se pronuncia: que-so, qui-ce… perdón, ¡quin-ce!",{t:"cards",x:[["🧀","queso"],["🦟","mosquito"],["🥝","kiwi"],["🐇","conejo"]]}]],
 ["El kilo de tortillas","En la tienda pedimos «un kilo». El pan de cada día es un regalo de Dios: demos gracias antes de comer.",{t:"emo",x:"⚖️ 🫓 🙏"}],
 ["La palabra difícil","📝","No sabes si «queso» va con k.","¿Qué haces?",[["Recuerdo la regla: con e va qu → queso",1,"¡Muy bien!"],["Pongo k porque suena igual",0,"Con e se usa qu."],["No la escribo",0,"Intenta con la regla."]]],
 [["ca, co, cu · que, qui · k en pocas palabras."],["casa","queso","kilo"]],
 ["¿Cómo se escribe: «kometa», «qometa» o «cometa»?",["Va con o.","Con a, o, u usamos c."],"cometa."],
 [[["eKCQ",8]],[["eKCQ",10]],[["eKCQ",8]]],[],"Gracias por el pan."),
"2e19":ESL("2e19","Gue, gui, güe, güi",[
 ["La u muda","En <b>gue, gui</b> la u no suena: guitarra, juguete, águila.",{t:"cards",x:[["🎸","guitarra"],["🧸","juguete"],["🦅","águila"]]}],
 ["La diéresis","Si queremos que la u <b>sí suene</b>, le ponemos dos puntitos (diéresis): pin<b>güi</b>no, ci<b>güe</b>ña, a<b>güi</b>ta.",{t:"cards",x:[["🐧","pingüino"],["🐦","cigüeña"],["💧","agüita"]]}]],
 ["El águila de san Juan","El evangelista san Juan se representa con un águila, porque su Evangelio «vuela alto» al hablar de Jesús.",{t:"photo",src:WM(IM.evangelistas[0],800),alt:"Evangelistas",cap:"",credit:IM.evangelistas[1],art:true}],
 ["El juguete compartido","🧸","Tu primo quiere tu juguete favorito.","¿Qué haces?",[["Se lo presto un rato y jugamos juntos",1,"¡Muy bien!"],["Lo escondo",0,"Compartir alegra."],["Le pego",0,"Nunca."]]],
 [["gue, gui: la u no suena.","güe, güi: la u suena (diéresis)."],["guitarra","pingüino"]],
 ["¿Pinguino o pingüino?",["La u se pronuncia: pin-güi-no.","Necesita diéresis."],"pingüino."],
 [[["eGui",8]],[["eGui",10]],[["eGui",6],["eOrt",4,"j>g,h;gi>ji,hi;gue>ge,gu"]]],[],"San Juan vuela alto."),
"2e20":ESL("2e20","La h y los verbos con b y v",[
 ["La h muda","La h no suena pero se escribe: hielo, huevo, hormiga, helado, hoja.",{t:"silab",c:["h"]}],
 ["-aba con b; vivir con v","Las terminaciones <b>-aba</b> (jugaba, cantaba) siempre van con <b>b</b>. Verbos como <b>vivir, venir, volver, ver</b> van con <b>v</b>.",{t:"cards",x:[["⚽","jugaba"],["🎵","cantaba"],["🏠","vivir"],["↩️","volver"]]}]],
 ["Antes y ahora","«Yo rezaba poco; ahora rezo cada noche». Los verbos en -aba nos cuentan lo que hacíamos antes. ¡Siempre podemos cambiar para bien!",{t:"emo",x:"⏪ 🙏 ⏩"}],
 ["La palabra con h","🥚","Escribiste «uevo» en tu lista y tu mamá sonríe.","¿Qué haces?",[["Lo corrijo: huevo, con h",1,"¡Muy bien!"],["Me enojo",0,"Es un error común."],["Lo dejo así",0,"Mejor corrige."]]],
 [["h no suena, pero se escribe.","-aba siempre con b.","vivir, venir, volver, ver: con v."],["helado","cantaba","volver"]],
 ["¿«Caminava» o «caminaba»?",["Termina en -aba.","-aba siempre con b."],"caminaba."],
 [[["eOrt",5,"h>,j"],["eAba",3]],[["eAba",6],["eOrt",4,"h>,j"]],[["eAba",8]]],[],"Siempre podemos cambiar."),
"2e21":ESL("2e21","Palabras compuestas",[
 ["Dos en una","Una <b>palabra compuesta</b> se forma con dos palabras: para + aguas = <b>paraguas</b>; gira + sol = <b>girasol</b>.",{t:"cards",x:[["☂️","para + aguas"],["🌻","gira + sol"],["🎂","cumple + años"]]}],
 ["Se escriben juntas","Aunque vienen de dos, se escriben <b>juntas</b>: sacapuntas, abrelatas, rompecabezas.",{t:"steps",x:["saca + puntas","sacapuntas ✏️"]}]],
 ["Mediodía: el Ángelus","A <b>mediodía</b> (medio + día) muchos cristianos rezan el Ángelus, recordando cuando el ángel visitó a María.",{t:"photo",src:WM(IM.angelus[0],800),alt:"El Ángelus",cap:"",credit:IM.angelus[1],art:true}],
 ["El sacapuntas","✏️","Tu compañero no tiene sacapuntas.","¿Qué haces?",[["Le presto el mío",1,"¡Muy bien!"],["Le digo que se aguante",0,"Ayudar es fácil."],["Se lo vendo",0,"Mejor préstaselo."]]],
 [["Compuesta: dos palabras en una.","Se escribe junta."],["paraguas","girasol","cumpleaños"]],
 ["¿Qué palabra se forma con «salva» + «vidas»?",["Junto las dos.","salvavidas."],"salvavidas 🛟"],
 [[["eCompu",8]],[["eCompu",10]],[["eCompu",8]]],[],"El Ángelus de mediodía."),
"2e22":ESL("2e22","Palabras de la misma familia",[
 ["Una familia de palabras","<b>pan</b> → panadero, panadería, empanada. Comparten una parte y su significado tiene que ver con el pan.",{t:"lam",id:"familia"}],
 ["Cuidado con las impostoras","«Pantalla» empieza con pan, pero no tiene que ver con el pan: ¡no es de la familia!",{t:"cards",x:[["✅","panadero"],["✅","empanada"],["❌","pantalla"]]}]],
 ["La familia de Dios","Todos los bautizados somos de la misma familia: hijos de Dios y hermanos en Jesús.",{t:"photo",src:WM(IM.bautismoP[0],800),alt:"Bautismo",cap:"",credit:IM.bautismoP[1],art:true}],
 ["El nuevo","👋","Llega un niño nuevo a tu grupo de catecismo.","¿Qué haces?",[["Lo recibo como parte de la familia de Dios",1,"¡Muy bien!"],["Lo ignoro",0,"Recíbelo con cariño."],["Le digo que no es de aquí",0,"Todos somos familia."]]],
 [["Misma <b>raíz</b> y significado relacionado."],["flor: florero, florista","mar: marino, marinero"]],
 ["¿«Zapatería» es de la familia de «zapato»?",["Comparten «zapat-».","La zapatería vende zapatos."],"Sí."],
 [[["eFamP",8]],[["eFamP",10]],[["eFamP",6],["eCompu",4]]],[],"Hijos de Dios, hermanos."),
/* U2 */
"2e23":ESL("2e23","El significado de las palabras y el diccionario",[
 ["¿Qué significa?","Si no conoces una palabra, puedes: 1) pensar en lo que dice el resto de la oración, 2) preguntar, 3) buscarla en el <b>diccionario</b>.",{t:"lam",id:"diccionario"}],
 ["El orden del diccionario","Las palabras están en orden alfabético. Si empiezan igual, fíjate en la segunda letra: <b>ca</b>ma antes que <b>ca</b>sa (m antes que s).",{t:"steps",x:["cama","cara","casa"]}]],
 ["Las palabras de Jesús","Jesús usaba palabras que todos entendían: semillas, ovejas, pan. Cuando no entendemos algo de la Biblia, podemos preguntar al catequista o al sacerdote.",{t:"photo",src:WM(IM.sermon[0],800),alt:"Sermón de la montaña",cap:"",credit:IM.sermon[1],art:true}],
 ["La palabra rara","📖","En un cuento lees «cántaro» y no sabes qué es.","¿Qué haces?",[["La busco en el diccionario",1,"¡Muy bien!"],["Me salto el cuento",0,"Busca la palabra."],["Invento qué significa",0,"Mejor averigua."]]],
 [["Diccionario: orden alfabético.","Primera letra igual → mira la segunda."],["lago, luna, lupa","sapo, sol, sopa"]],
 ["¿Qué va primero en el diccionario: «pato» o «pala»?",["Las dos empiezan con pa.","Tercera letra: t y l; l va antes."],"pala."],
 [[["eAbc",5],["eDicc",3]],[["eDicc",10]],[["eDicc",6],["eAbc",4]]],[],"Preguntar para entender."),
"2e24":ESL("2e24","Varias formas de decir lo mismo",[
 ["Con otras palabras","Podemos decir lo mismo de distintas formas: «Está contento» = «Está feliz». Usamos <b>sinónimos</b>.",{t:"cards",x:[["😊","contento = feliz"],["🏃","veloz = rápido"],["🏰","enorme = muy grande"]]}],
 ["Frases contrarias","También hay frases <b>antónimas</b>: «Empezó la clase» ↔ «Terminó la clase».",{t:"syl",x:["empezó ↔ terminó","subió ↔ bajó"]}]],
 ["Los nombres de Jesús","A Jesús lo llamamos de muchas formas: el Señor, el Buen Pastor, el Hijo de Dios, el Salvador, el Cordero de Dios. ¡Todos hablan de Él!",{t:"photo",src:WM(IM.agnus[0],800),alt:"El Cordero",cap:"",credit:IM.agnus[1],art:true}],
 ["Repetir mil veces","🗣️","En tu composición repetiste «bonito» diez veces.","¿Qué haces?",[["Cambio algunas por sinónimos: hermoso, precioso, lindo",1,"¡Muy bien!"],["Lo dejo así",0,"Se oye repetitivo."],["Borro todo",0,"Solo cambia algunas."]]],
 [["Sinónimos: mismo significado.","Antónimos: significado contrario."],["comenzar = empezar","subir ↔ bajar"]],
 ["Di de otra forma: «Observé las estrellas».",["observar = mirar."],"Miré las estrellas."],
 [[["eSin",4],["eParaf",4]],[["eParaf",6],["eAnt",4]],[["eParaf",5],["eSin",3],["eAnt",2]]],[],"Los nombres de Jesús."),
"2e25":ESL("2e25","Dichos y expresiones",[
 ["No al pie de la letra","«Es pan comido» no quiere decir que comimos pan: quiere decir que <b>es muy fácil</b>. Estas expresiones se interpretan.",{t:"cards",x:[["🍞","pan comido = muy fácil"],["☁️","en las nubes = distraído"],["🤝","echar una mano = ayudar"]]}],
 ["Refranes","Los refranes dan consejos: «Más vale prevenir que lamentar». «Dime con quién andas y te diré quién eres».",{t:"emo",x:"👵 💬 💡"}]],
 ["La sabiduría","El libro de los Proverbios, en la Biblia, está lleno de frases sabias: «El que anda con sabios, se hace sabio» (Prov 13, 20).",{t:"photo",src:WM(IM.samuelI[0],800),alt:"Biblia",cap:"",credit:IM.samuelI[1],art:true}],
 ["Echar una mano","🤝","Tu papá carga muchas bolsas del mandado.","¿Qué haces?",[["Le echo una mano: cargo algunas",1,"¡Muy bien!"],["Lo veo",0,"Ayudar es amar."],["Me voy a jugar",0,"Primero ayuda."]]],
 [["Las expresiones no se entienden al pie de la letra.","Piensa qué quieren decir."],["costar un ojo de la cara = muy caro","meter la pata = equivocarse"]],
 ["¿Qué quiere decir «hablar hasta por los codos»?",["Los codos no hablan.","Es una exageración."],"Hablar muchísimo."],
 [[["eRefran",8]],[["eRefran",10]],[["eRefran",6],["eComp",4]]],[],"El que anda con sabios, se hace sabio."),
"2e26":ESL("2e26","Frases comparativas",[
 ["Comparar","<b>más … que</b>: El elefante es más grande que el ratón. <b>menos … que</b>: La tortuga es menos rápida que la liebre. <b>tan … como</b>: Ana es tan alta como Luis.",{t:"cards",x:[["🐘","más grande que"],["🐢","menos rápida que"],["👫","tan alta como"]]}],
 ["Comparaciones bonitas","«Sus ojos brillan como estrellas». «Es dulce como la miel».",{t:"emo",x:"⭐ 🍯"}]],
 ["Más que todo","Jesús nos pide amar a Dios <b>más que</b> a todo y al prójimo <b>como</b> a nosotros mismos (Mc 12, 30-31).",{t:"emo",x:"❤️ Dios > todo · 🤝 prójimo = yo"}],
 ["La comparación que lastima","😢","Tu mamá te dice que eres menos ordenado que tu hermano.","¿Qué haces?",[["Lo tomo como reto para mejorar, sin enojarme con mi hermano",1,"¡Muy bien!"],["Me enojo con mi hermano",0,"Él no tiene la culpa."],["Desordeno sus cosas",0,"Eso no ayuda."]]],
 [["más … que · menos … que · tan … como"],["más alto que","tan rápido como"]],
 ["Completa: «El sol es ___ caliente ___ la luna».",["El sol calienta mucho más."],"más … que."],
 [[["eCompa",8]],[["eCompa",5],["eComp",5]],[["eCompa",6],["eAdj",4]]],[],"Amar a Dios más que todo."),
"2e27":ESL("2e27","Palabras de oficios",[
 ["¿Quién lo hace?","Muchos oficios se nombran a partir de lo que hacen: el <b>pan</b>adero hace pan, el <b>zapat</b>ero arregla zapatos, el <b>jardin</b>ero cuida el jardín.",{t:"cards",x:[["👨‍🍳","panadero"],["👞","zapatero"],["🌷","jardinero"],["🚒","bombero"]]}],
 ["Terminaciones","Muchos oficios terminan en <b>-ero, -era, -ista, -or</b>: cartero, florista, pescador.",{t:"syl",x:["-ero","-ista","-or"]}]],
 ["San José obrero","San José era carpintero y enseñó su oficio a Jesús. Todo trabajo hecho con amor es valioso para Dios.",{t:"photo",src:WM(IM.joseSueno[0],800),alt:"San José",cap:"",credit:IM.joseSueno[1],art:true}],
 ["Dar las gracias","📬","El cartero te entrega un paquete de tu abuela.","¿Qué haces?",[["Le doy las gracias con una sonrisa",1,"¡Muy bien! Todo trabajo merece respeto."],["Lo tomo sin decir nada",0,"Agradece su trabajo."],["Me quejo de que tardó",0,"Sé amable."]]],
 [["Oficio = palabra de la familia de lo que hace.","-ero, -ista, -or"],["pan → panadero","flor → florista","pesca → pescador"]],
 ["¿Cómo se llama quien reparte las cartas?",["carta + -ero."],"cartero."],
 [[["eOficio",8]],[["eOficio",5],["eFamP",5]],[["eOficio",6],["eFamP",4]]],[],"San José, carpintero."),
/* U3 */
"2e28":ESL("2e28","La oración simple: sujeto y predicado",[
 ["Dos partes","La oración tiene <b>sujeto</b> (de quién se habla) y <b>predicado</b> (lo que se dice de él). El predicado empieza con el verbo.",{t:"lam",id:"sujeto"}],
 ["Encuéntralo","Pregunta: ¿quién? → sujeto. ¿Qué hace? → predicado. «<b>El perro</b> | corre en el parque».",{t:"esfrase"}]],
 ["Dios es el sujeto","En «Dios nos ama», el sujeto es Dios y el predicado es «nos ama». ¡Es la oración más bonita que existe!",{t:"emo",x:"Dios | nos ama ❤️"}],
 ["La oración incompleta","📝","Escribiste «Corre muy rápido» y la maestra pregunta ¿quién?","¿Qué haces?",[["Agrego el sujeto: «Mi perro corre muy rápido»",1,"¡Muy bien!"],["Lo dejo así",0,"Falta decir quién."],["Borro todo",0,"Solo agrega el sujeto."]]],
 [["Sujeto: ¿quién?","Predicado: ¿qué hace? (empieza con el verbo)"],["Ana | lee un libro.","El sol | brilla."]],
 ["¿Cuál es el sujeto en «Los niños juegan con la pelota»?",["¿Quiénes juegan?","Los niños."],"Los niños."],
 [[["eSujeto",8]],[["eSujeto",10]],[["eSujeto",6],["eVerbo",4]]],[],"Dios nos ama."),
"2e29":ESL("2e29","Tiempos verbales: pasado, presente y futuro",[
 ["¿Cuándo pasa?","Los verbos cambian según el tiempo: <b>ayer comí</b> (pasado), <b>hoy como</b> (presente), <b>mañana comeré</b> (futuro).",{t:"tiempo"}],
 ["Palabras que ayudan","ayer, antes, hace tiempo → pasado. hoy, ahora → presente. mañana, después, el próximo año → futuro.",{t:"cards",x:[["⏪","ayer: recé"],["▶️","hoy: rezo"],["⏩","mañana: rezaré"]]}]],
 ["Ayer, hoy y siempre","«Jesucristo es el mismo ayer, hoy y siempre» (Heb 13, 8). Su amor no cambia con el tiempo.",{t:"photo",src:WM(IM.pantocrator[0],800),alt:"Cristo",cap:"",credit:IM.pantocrator[1],art:true}],
 ["La promesa","🤞","Ayer prometiste ayudar a tu abuela hoy.","¿Qué haces?",[["Cumplo: hoy la ayudo",1,"¡Muy bien! Cumplir las promesas."],["Lo dejo para mañana",0,"Lo prometiste para hoy."],["Digo que no prometí nada",0,"Eso es mentir."]]],
 [["Pasado: ayer. Presente: hoy. Futuro: mañana."],["jugué · juego · jugaré"]],
 ["Completa en futuro: «Mañana yo ___ (visitar) a mi abuela».",["Mañana → futuro.","visitar → visitaré."],"visitaré."],
 [[["eTiempo",8]],[["eTiempo",10]],[["eTiempo",6],["eVerbo",4]]],[],"El mismo ayer, hoy y siempre."),
"2e30":ESL("2e30","El punto y la coma",[
 ["El punto","<b>Punto y seguido</b>: entre oraciones del mismo tema. <b>Punto y aparte</b>: cambiamos de tema y de párrafo. <b>Punto final</b>: termina el texto.",{t:"lam",id:"puntuacion"}],
 ["La coma","Separa listas («pan, leche y fruta») y va después de llamar a alguien («Ana, ven»).",{t:"big",x:"Mamá, compré pan, leche y fruta."}]],
 ["Pausas para escuchar","Los signos nos ayudan a hacer pausas. En la oración también hacemos pausas: un silencio para escuchar a Dios.",{t:"emo",x:", . 🤫 🙏"}],
 ["El texto sin puntos","📄","Tu amigo leyó tu texto en voz alta sin respirar porque no tenía puntos.","¿Qué haces?",[["Agrego los puntos y comas que faltan",1,"¡Muy bien!"],["Me río",0,"Corrige el texto."],["Así lo entrego",0,"Revisa la puntuación."]]],
 [["Punto: termina una oración.","Coma: separa listas y llamados."],["Ana, ven.","rojo, azul y verde"]],
 ["Corrige: «Pedro ven a comer»",["Pedro es a quien llamo.","Después del nombre va coma."],"Pedro, ven a comer."],
 [[["ePunto",4],["eComa",4]],[["eComa",5],["ePunto",5]],[["eComa",5],["ePunto",5]]],[],"Silencio para escuchar a Dios."),
"2e31":ESL("2e31","Diálogos: guion largo y signos",[
 ["El guion largo","En los diálogos de los cuentos usamos el <b>guion largo</b> (—) antes de lo que dice cada personaje: —Hola —dijo Ana.",{t:"big",x:"—¿Cómo estás? —preguntó Ana."}],
 ["Preguntas y emociones","Dentro del diálogo usamos ¿? para preguntar y ¡! para emocionarnos: —¡Qué sorpresa! —gritó Leo.",{t:"cards",x:[["—","guion largo"],["¿?","pregunta"],["¡!","emoción"]]}]],
 ["Diálogo con Dios","Orar es dialogar con Dios: le hablamos y lo escuchamos. Samuel dijo: «Habla, Señor, que tu siervo escucha» (1 Sam 3, 10).",{t:"photo",src:WM(IM.samuelC[0],800),alt:"Samuel",cap:"",credit:IM.samuelC[1],art:true}],
 ["Interrumpir","🗣️","Tu hermana está contando algo y tú la interrumpes.","¿Qué haces?",[["Le pido perdón y la dejo terminar",1,"¡Muy bien! En un diálogo se escucha."],["Sigo hablando",0,"Hay que escuchar."],["Me voy",0,"Mejor escucha."]]],
 [["— antes de cada personaje.","¿? y ¡! dentro del diálogo."],["—Hola —dijo Ana.","—¡Cuidado! —gritó Pedro."]],
 ["¿Cómo escribes que Leo pregunta «dónde está mi lápiz»?",["Va con guion largo.","Es pregunta: ¿?"],"—¿Dónde está mi lápiz? —preguntó Leo."],
 [[["eDialogo",6],["eSignos",2]],[["eDialogo",5],["eSignos",5]],[["eDialogo",6],["eSignos",4]]],[],"Habla, Señor, que tu siervo escucha."),
/* U4 */
"2e32":ESL("2e32","Las partes del cuento y sus personajes",[
 ["Inicio, desarrollo y final","<b>Inicio</b>: quiénes, dónde, cuándo. <b>Desarrollo</b>: el problema. <b>Final</b>: cómo se resuelve.",{t:"lam",id:"cuento"}],
 ["Personajes principales y secundarios","El <b>principal</b> es a quien le pasa la historia; los <b>secundarios</b> le ayudan o le ponen problemas.",{t:"cards",x:[["⭐","principal"],["👥","secundarios"]]}]],
 ["El hijo pródigo","La parábola del hijo pródigo tiene inicio (el hijo se va), desarrollo (lo pierde todo) y un final feliz (el padre lo abraza y perdona) (Lc 15).",{t:"photo",src:WM(IM.prodigoM[0],800),alt:"El hijo pródigo",cap:"",credit:IM.prodigoM[1],art:true}],
 ["El final triste","📖","El cuento que lees tiene un final triste.","¿Qué haces?",[["Pienso qué podría aprender del cuento",1,"¡Muy bien!"],["Lo rompo",0,"Los cuentos enseñan."],["No vuelvo a leer",0,"¡Hay muchos cuentos!"]]],
 [["Inicio · desarrollo · final.","Personaje principal y secundarios."],["Había una vez…","De pronto…","Al final…"]],
 ["En «Caperucita Roja», ¿quién es el personaje principal?",["La historia le pasa a ella."],"Caperucita Roja."],
 [[["eCompr",6],["eSuc",2]],[["eCompr",6],["eSuc",4]],[["eCompr",5],["eCausa",5]]],[],"El padre que perdona."),
"2e33":ESL("2e33","Causas y consecuencias",[
 ["¿Por qué pasó?","La <b>causa</b> es por qué pasa algo; la <b>consecuencia</b> es lo que pasa después. «Llovió (causa), por eso el patio se mojó (consecuencia)».",{t:"steps",x:["Causa: llovió","→ por eso →","Consecuencia: el patio se mojó"]}],
 ["Palabras que unen","porque, por eso, entonces, así que.",{t:"cards",x:[["🌧️","porque"],["➡️","por eso"],["🔗","así que"]]}]],
 ["Nuestras decisiones","Nuestras acciones tienen consecuencias: si siembras bondad, cosechas alegría. «Lo que uno siembra, eso cosecha» (Gál 6, 7).",{t:"emo",x:"🌱 → 🌻"}],
 ["La consecuencia","🎮","Jugaste videojuegos en vez de hacer la tarea.","¿Cuál es la consecuencia más probable?",[["No terminé la tarea y tendré que hacerla tarde",1,"¡Así es! Mejor primero el deber."],["Me pondrán diez",0,"Sin tarea, no."],["Nada pasará",0,"Todo tiene consecuencias."]]],
 [["Causa: ¿por qué?","Consecuencia: ¿qué pasó después?"],["no regué → se secó","estudié → aprendí"]],
 ["«Se fue la luz, por eso prendimos una vela.» ¿Cuál es la causa?",["¿Por qué prendimos la vela?"],"Se fue la luz."],
 [[["eCausa",8]],[["eCausa",10]],[["eCausa",6],["eCompr",4]]],[],"Lo que siembras, cosechas."),
"2e34":ESL("2e34","Describir personas, animales y lugares",[
 ["Describir con detalle","Para describir, di cómo es: tamaño, color, forma, textura, cómo se mueve o cómo se comporta.",{t:"adj"}],
 ["Orden al describir","Empieza por lo general (es un gato grande) y luego los detalles (tiene manchas negras y ojos verdes).",{t:"steps",x:["¿Qué es?","¿Cómo es por fuera?","¿Qué hace?","¿Cómo es por dentro?"]}]],
 ["El retrato de un santo","San Francisco era pequeño, de ojos alegres, vestido con un hábito café, y amaba mucho a los animales y a los pobres.",{t:"photo",src:WM(IM.francisco[0],800),alt:"San Francisco",cap:"",credit:IM.francisco[1],art:true}],
 ["Perdido","🐕","Se perdió el perro de tu vecina y te pide ayuda para hacer un cartel.","¿Qué escribes?",[["Una descripción clara: tamaño, color, nombre y señas",1,"¡Muy bien!"],["Solo «se perdió un perro»",0,"Falta describirlo."],["Nada",0,"Ayuda a tu vecina."]]],
 [["Describe: tamaño, color, forma, comportamiento.","De lo general a lo particular."],["perro grande, café, juguetón"]],
 ["Describe una manzana en una oración.",["¿Cómo es? roja, redonda, dulce."],"La manzana es roja, redonda y dulce."],
 [[["eAdj",8]],[["eAdj",5],["eCompa",5]],[["eAdj",5],["eComp",5]]],[],"Describir con amor."),
"2e35":ESL("2e35","El orden de las ideas",[
 ["Una idea tras otra","Para que un texto se entienda, las ideas van en orden: primero, después, luego, finalmente.",{t:"essec"}],
 ["Conectores","Palabras como <b>primero, después, luego, al final, también, pero</b> unen las ideas.",{t:"cards",x:[["1️⃣","primero"],["2️⃣","después"],["3️⃣","luego"],["🏁","finalmente"]]}]],
 ["La historia de la salvación","La Biblia cuenta la historia en orden: la creación, Abraham, Moisés, los profetas, Jesús, la Iglesia. ¡Dios guía la historia!",{t:"photo",src:WM(IM.abram[0],800),alt:"Abraham",cap:"",credit:IM.abram[1],art:true}],
 ["Contar el paseo","🗺️","Le cuentas a tu abuela el paseo pero empiezas por el final.","¿Qué haces?",[["Vuelvo a empezar en orden: primero, después y al final",1,"¡Muy bien!"],["Sigo revuelto",0,"Se entiende mejor en orden."],["Ya no le cuento",0,"¡Cuéntale!"]]],
 [["Ideas en orden.","Conectores: primero, después, luego, finalmente."],["Primero desayuné. Después fui a Misa."]],
 ["Ordena: «Finalmente dormí. Primero cené. Después recé.»",["Primero: cené.","Después: recé.","Finalmente: dormí."],"Cené, recé y dormí."],
 [[["eSuc",8]],[["eSuc",10]],[["eSuc",6],["eCausa",4]]],[],"Dios guía la historia."),
"2e36":ESL("2e36","La fábula y su moraleja",[
 ["Animales que enseñan","En la <b>fábula</b> los personajes suelen ser animales que hablan, y al final hay una <b>moraleja</b>: una enseñanza.",{t:"lam",id:"cuento"}],
 ["Ejemplos","La liebre y la tortuga: con constancia se llega lejos. El pastorcito mentiroso: al mentiroso nadie le cree.",{t:"cards",x:[["🐢","constancia"],["🐺","no mentir"],["🐭","nadie es tan pequeño"]]}]],
 ["Las parábolas","Las fábulas se parecen un poco a las parábolas de Jesús: historias sencillas con una gran enseñanza. Pero las parábolas nos enseñan cómo es el Reino de Dios.",{t:"photo",src:WM(IM.sembrador[0],800),alt:"El sembrador",cap:"",credit:IM.sembrador[1],art:true}],
 ["La broma","🐺","Tus amigos quieren hacer creer a todos que la maestra no vendrá.","¿Qué haces?",[["Recuerdo al pastorcito mentiroso y no participo",1,"¡Muy bien!"],["Les ayudo",0,"Mentir trae problemas."],["Me río",0,"No es buena broma."]]],
 [["Fábula: animales que hablan.","Moraleja: la enseñanza."],["🐢 constancia","🐜 trabajo","🐺 verdad"]],
 ["¿Cuál es la moraleja de «La cigarra y la hormiga»?",["La hormiga trabajó a tiempo.","La cigarra no."],"Hay que trabajar y prepararse a tiempo."],
 [[["eMoral",8]],[["eMoral",10]],[["eMoral",6],["eCausa",4]]],[],"Historias que enseñan."),
"2e37":ESL("2e37","Leyendas indígenas y mitos",[
 ["Leyendas de nuestros pueblos","Los pueblos indígenas de México contaban leyendas: la del maíz, la de los volcanes, la del conejo en la luna, la del colibrí.",{t:"photo",src:WM(IM.popo[0],800),alt:"Volcanes",cap:"",credit:IM.popo[1],art:false}],
 ["¿Mito o leyenda?","Un <b>mito</b> explica el origen del mundo con dioses y seres fantásticos. Una <b>leyenda</b> mezcla hechos y lugares reales con fantasía.",{t:"cards",x:[["🌎","mito: origen"],["🌋","leyenda: lugar real + fantasía"]]}]],
 ["La verdad de la fe","Los mitos antiguos buscaban explicar el mundo. Los cristianos creemos que Dios, por amor, creó todo. La fe no es un mito: Jesús vivió de verdad, murió y resucitó.",{t:"photo",src:WM(IM.juanDiego[0],800),alt:"Juan Diego",cap:"",credit:IM.juanDiego[1],art:true}],
 ["Respetar las tradiciones","🌽","Tu abuela cuenta una leyenda de su pueblo y un primo se burla.","¿Qué haces?",[["Le pido respeto: las leyendas son parte de nuestra cultura",1,"¡Muy bien!"],["Me burlo también",0,"Respeta la cultura."],["Me voy",0,"Escucha a tu abuela."]]],
 [["Leyenda: lugar real + fantasía.","Mito: origen del mundo con seres fantásticos."],["🐇 conejo en la luna","🌋 Popocatépetl"]],
 ["La historia de los volcanes Popocatépetl e Iztaccíhuatl, ¿es mito o leyenda?",["Habla de lugares reales (los volcanes).","Mezcla con fantasía."],"Es una leyenda."],
 [[["eTipo",4],["eCompr",4]],[["eCompr",8]],[["eCompr",6],["eTipo",4]]],[C("¿Qué explica un mito?",["el origen del mundo o de algo","cómo hacer una receta","lo que pasó ayer"]),TF("Una leyenda mezcla lugares reales con fantasía.",true)],"Jesús vivió de verdad."),
"2e38":ESL("2e38","Historietas, caricaturas y teatro",[
 ["Historieta y caricatura","La <b>historieta</b> cuenta con viñetas y globos. La <b>caricatura</b> exagera rasgos de alguien de forma graciosa (¡sin burlarse!).",{t:"emo",x:"🖼️💬 😄"}],
 ["El teatro","Los actores usan <b>gestos</b> (caras) y <b>movimientos</b> para mostrar lo que sienten. El guion tiene diálogos y acotaciones (entre paréntesis).",{t:"cards",x:[["🎭","gestos"],["🕺","movimientos"],["📜","guion"]]}]],
 ["La pastorela","En la pastorela los pastores, el ángel y el diablo actúan con gestos exagerados para hacer reír y enseñar que el bien vence al mal.",{t:"photo",src:WM(IM.natividad[0],800),alt:"Natividad",cap:"",credit:IM.natividad[1],art:true}],
 ["La caricatura del compañero","✏️","Alguien dibuja una caricatura de un compañero para burlarse.","¿Qué haces?",[["Le digo que no se vale burlarse",1,"¡Muy bien!"],["Me río y la paso",0,"Eso lastima."],["Hago otra",0,"Nunca."]]],
 [["Historieta: viñetas y globos.","Teatro: gestos, movimientos, guion."],["💬 globo","🎭 actor"]],
 ["En un guion: «PEDRO: (triste) No encuentro mi perro». ¿Qué indica «(triste)»?",["Está entre paréntesis.","Dice cómo debe actuar."],"Es una acotación: cómo debe actuar el actor."],
 [[["eDialogo",4],["eTipo",4]],[["eDialogo",5],["eCompr",5]],[["eDialogo",4],["eCompr",6]]],[C("¿Cómo se llaman las indicaciones entre paréntesis en un guion?",["acotaciones","viñetas","globos"])],"El bien vence al mal."),
/* U5 */
"2e39":ESL("2e39","Coplas y rimas",[
 ["La copla","Una <b>copla</b> es un poema corto de cuatro versos, alegre, que muchas veces se canta. Los versos 2 y 4 riman.",{t:"lam",id:"poema"}],
 ["Rima consonante y asonante","<b>Consonante</b>: riman todas las letras del final (corazón/canción). <b>Asonante</b>: solo las vocales (luna/cuna, casa/rama).",{t:"cards",x:[["❤️","corazón – canción"],["🌙","luna – cuna"]]}]],
 ["Las mañanitas a la Virgen","El 12 de diciembre se cantan Las Mañanitas a la Virgen de Guadalupe: coplas llenas de cariño.",{t:"photo",src:WM(IM.guadalupe[0],800),alt:"Virgen de Guadalupe",cap:"",credit:IM.guadalupe[1],art:true}],
 ["La copla para mamá","🎶","Quieres hacerle una copla a tu mamá.","¿Cómo empiezas?",[["Pienso en lo que siento y busco palabras que rimen",1,"¡Muy bien!"],["Copio una de internet y digo que es mía",0,"Eso no es honesto."],["No hago nada",0,"¡Inténtalo!"]]],
 [["Copla: 4 versos, riman el 2 y el 4.","Rima: terminan igual."],["corazón – canción","luna – cuna"]],
 ["¿Qué palabra rima con «estrella»?",["Termina en -ella."],"bella (o botella, huella)."],
 [[["eRima",8]],[["eRima",10]],[["eRima",8]]],[],"Mañanitas a la Virgen."),
"2e40":ESL("2e40","Trabalenguas y pregones",[
 ["Trabalenguas","Repiten sonidos para practicar la pronunciación: «Pablito clavó un clavito…»",{t:"big",x:"Tres tristes tigres…"}],
 ["El pregón","El <b>pregón</b> es lo que gritan los vendedores para anunciar lo que venden: «¡Tamales, tamales calientitos!», «¡El elotero!».",{t:"emo",x:"🫔📣 ¡Tamales calientitos!"}]],
 ["Juan el Bautista","Juan el Bautista era como un pregonero: gritaba en el desierto «¡Preparen el camino del Señor!» (Mc 1, 3).",{t:"photo",src:WM(IM.juanB[0],800),alt:"Juan el Bautista",cap:"",credit:IM.juanB[1],art:true}],
 ["El pregón del tamalero","📣","El señor de los tamales pasa gritando y tus amigos se burlan de su pregón.","¿Qué haces?",[["Les digo que su trabajo es honrado y merece respeto",1,"¡Muy bien!"],["Me burlo también",0,"Todo trabajo merece respeto."],["Lo imito para burlarme",0,"No es amable."]]],
 [["Trabalenguas: sonidos repetidos.","Pregón: anuncio que gritan los vendedores."],["¡Tamales!","Pablito clavó un clavito"]],
 ["Inventa un pregón para vender elotes.",["Corto, alegre, se grita.","Dice qué vendes."],"«¡Elotes, elotes calientitos con limón y chile!»"],
 [[["eTrab",6],["eTipo",2]],[["eTrab",5],["eRima",5]],[["eTrab",5],["eTipo",5]]],[C("¿Qué es un pregón?",["lo que gritan los vendedores","un poema largo","una carta"])],"Preparen el camino del Señor."),
"2e41":ESL("2e41","Escribo un poema: borrador y versión final",[
 ["Imágenes en el poema","Los poetas usan <b>imágenes</b>: «la luna es una moneda de plata». También <b>sinónimos</b> para no repetir.",{t:"emo",x:"🌙 = 🪙"}],
 ["Borrador y versión final","1) Escribo un <b>borrador</b>. 2) Lo leo en voz alta. 3) Corrijo rimas, palabras y ortografía. 4) Paso en limpio la <b>versión final</b> y la ilustro.",{t:"steps",x:["Borrador","Leo en voz alta","Corrijo","Versión final"]}]],
 ["El Cántico de las criaturas","San Francisco escribió un poema a Dios: «Alabado seas, mi Señor, por el hermano sol… por la hermana luna y las estrellas».",{t:"photo",src:WM(IM.francisco[0],800),alt:"San Francisco",cap:"",credit:IM.francisco[1],art:true}],
 ["El borrador con errores","📝","Tu borrador tiene tachones y errores.","¿Qué haces?",[["Lo corrijo con calma y paso en limpio la versión final",1,"¡Muy bien!"],["Me desespero y lo tiro",0,"Para eso es el borrador."],["Lo entrego así",0,"Mejor pásalo en limpio."]]],
 [["Imagen: comparar con algo bello.","Borrador → corregir → versión final."],["el sol es un globo de oro"]],
 ["Cambia la palabra repetida: «La flor es bonita, el cielo es bonito».",["Uso un sinónimo para la segunda.","bonito → hermoso."],"La flor es bonita, el cielo es hermoso."],
 [[["eSin",4],["eComp",4]],[["eRima",4],["eSin",3],["eComp",3]],[["eRima",4],["eParaf",3],["eComp",3]]],[],"Alabado seas, mi Señor."),
/* U6 */
"2e42":ESL("2e42","La invitación y el recado",[
 ["La invitación","Dice <b>qué</b> se celebra, <b>cuándo</b>, <b>dónde</b> y <b>quién</b> invita.",{t:"cards",x:[["🎉","qué"],["📅","cuándo"],["📍","dónde"],["✍️","quién"]]}],
 ["El recado","Mensaje breve: para quién, qué, y quién lo escribe. «Abuela: fui por pan. Regreso pronto. Luis».",{t:"big",x:"✉️ Para · Mensaje · De"}]],
 ["La invitación de Jesús","En la parábola del banquete, el rey invita a todos, también a los pobres y a los que están en los caminos (Lc 14). ¡Dios nos invita a todos!",{t:"emo",x:"🍽️ 👨‍👩‍👧‍👦 ✉️"}],
 ["La invitación olvidada","📩","Hiciste tus invitaciones y olvidaste a un compañero tímido.","¿Qué haces?",[["Le hago una invitación especial",1,"¡Muy bien!"],["Ya no importa",0,"Se sentiría excluido."],["Le digo que no cabe",0,"¡Siempre cabe uno más!"]]],
 [["Invitación: qué, cuándo, dónde, quién.","Recado: para quién, qué, de quién."],["🎂 Fiesta, sábado 4 p.m., mi casa"]],
 ["¿Qué le falta? «Te invito a mi Primera Comunión en la parroquia del Carmen. Te espera Ana.»",["Tiene qué, dónde y quién."],"Le falta cuándo (día y hora)."],
 [[["eTipo",8]],[["eTipo",5],["eCompr",5]],[["eTipo",5],["eMay",5]]],[],"Dios nos invita a todos."),
"2e43":ESL("2e43","Recetas e instructivos: los verbos que indican",[
 ["Verbos para indicar","En recetas e instructivos usamos verbos que dan indicaciones: <b>mezcla, corta, hierve, sirve, dobla, pega</b>.",{t:"lam",id:"receta"}],
 ["Orden y números","Los pasos van numerados y en orden. Primero los materiales o ingredientes.",{t:"essec"}]],
 ["La receta del pan","Jesús se hizo pan para nosotros en la Eucaristía. Así como el pan se hace con amor y paciencia, Jesús se nos da con amor.",{t:"photo",src:WM(IM.sagradaForma[0],800),alt:"Eucaristía",cap:"",credit:IM.sagradaForma[1],art:true}],
 ["Cocinar con mamá","🍳","Tu mamá te pide leer la receta en voz alta.","¿Qué haces?",[["La leo en orden, paso por paso",1,"¡Muy bien!"],["Me salto pasos",0,"El orden importa."],["Leo solo los ingredientes",0,"Faltan los pasos."]]],
 [["Verbos que indican: mezcla, corta, sirve.","Pasos en orden y numerados."],["1. Lava","2. Corta","3. Sirve"]],
 ["¿Qué verbo usarías para el paso de calentar agua hasta que burbujee?",["El agua burbujea cuando…"],"Hierve."],
 [[["eSuc",6],["eTipo",2]],[["eSuc",5],["eVerbo",5]],[["eSuc",5],["eTiempo",5]]],[],"Jesús, pan de vida."),
"2e44":ESL("2e44","Buscar información y textos informativos",[
 ["¿Dónde busco?","Diccionario: significados. Enciclopedia: temas. Atlas: mapas. Periódico: noticias. Calendario: fechas. La Biblia: la Palabra de Dios.",{t:"cards",x:[["📕","diccionario"],["📚","enciclopedia"],["🗺️","atlas"],["📰","periódico"]]}],
 ["Partes de un libro informativo","Usa el <b>índice</b> para encontrar el tema y lee títulos y subtítulos.",{t:"steps",x:["Busco en el índice","Voy a la página","Leo títulos","Tomo notas"]}]],
 ["La biblioteca del Vaticano","El Papa tiene una de las bibliotecas más antiguas del mundo. La Iglesia siempre ha cuidado los libros y el conocimiento.",{t:"photo",src:WM(IM.jeronimo[0],800),alt:"San Jerónimo",cap:"",credit:IM.jeronimo[1],art:true}],
 ["La tarea de los volcanes","🌋","Tienes que investigar sobre los volcanes.","¿Dónde buscas?",[["En una enciclopedia o libro informativo",1,"¡Muy bien!"],["En un cuento",0,"Los cuentos son inventados."],["En una revista de chistes",0,"Busca una fuente confiable."]]],
 [["Cada fuente sirve para algo.","Índice → página → títulos."],["significado: diccionario","mapa: atlas"]],
 ["¿Dónde buscas qué día cae Navidad este año?",["Es una fecha."],"En el calendario."],
 [[["eFuente",8]],[["eFuente",10]],[["eFuente",6],["eDicc",4]]],[],"La Iglesia cuida el saber."),
"2e45":ESL("2e45","La exposición y las tablas",[
 ["Exponer un tema","Para exponer: elige el tema, investiga, haz un cartel, ensaya y habla <b>fuerte, claro y viendo al público</b>.",{t:"steps",x:["Elijo tema","Investigo","Hago un cartel","Ensayo","Expongo"]}],
 ["Tablas para registrar","Una tabla ordena datos en filas y columnas: así se consultan fácilmente.",{t:"bars",rows:[["Rosario",8],["Misa",12],["Catecismo",6]]}]],
 ["Dar testimonio","Los apóstoles hablaban con valentía de Jesús. Exponer frente a otros también requiere valor: ¡pídele al Espíritu Santo que te ayude!",{t:"photo",src:WM(IM.grecoPent[0],800),alt:"Pentecostés",cap:"",credit:IM.grecoPent[1],art:true}],
 ["Los nervios","😰","Te toca exponer y te da miedo.","¿Qué haces?",[["Respiro, rezo un Avemaría y empiezo despacio",1,"¡Muy bien!"],["Digo que estoy enfermo",0,"Eso no es verdad."],["Lo leo sin ver a nadie",0,"Mira al público."]]],
 [["Exposición: tema, investigar, cartel, ensayar.","Tabla: filas y columnas."],["Misa: 12","Rosario: 8"]],
 ["En una tabla: Rosario 8, Misa 12. ¿Cuántos más eligieron Misa?",["12 − 8."],"4 más."],
 [[["eFuente",4],["eCompr",4]],[["eCompr",6],["eFuente",4]],[["eCompr",6],["eOpin",4]]],[C("Al exponer, ¿cómo debes hablar?",["fuerte y claro, viendo al público","muy bajito","de espaldas"])],"Valentía para hablar."),
"2e46":ESL("2e46","La noticia y sus preguntas",[
 ["Las preguntas de la noticia","Una buena noticia responde: <b>¿qué pasó? ¿quién? ¿cuándo? ¿dónde? ¿cómo? ¿por qué?</b>",{t:"lam",id:"noticia"}],
 ["Hecho u opinión","La noticia cuenta <b>hechos</b> (se pueden comprobar), no <b>opiniones</b> (lo que alguien piensa).",{t:"cards",x:[["✅","hecho"],["💭","opinión"]]}]],
 ["La Buena Noticia","El Evangelio es la Buena Noticia: ¿Qué? Jesús resucitó. ¿Quién? Jesús, el Hijo de Dios. ¿Dónde? En Jerusalén. ¿Por qué? Por amor a nosotros.",{t:"photo",src:WM(IM.resurreccion[0],800),alt:"Resurrección",cap:"",credit:IM.resurreccion[1],art:true}],
 ["La noticia falsa","📱","Te llega un mensaje con una «noticia» rara que no dice ni quién ni dónde.","¿Qué haces?",[["No la reenvío hasta saber si es verdad",1,"¡Muy bien!"],["La mando a todos",0,"Podría ser falsa."],["Le agrego más cosas",0,"Eso sería mentir."]]],
 [["¿Qué? ¿Quién? ¿Cuándo? ¿Dónde? ¿Cómo? ¿Por qué?","Hechos, no opiniones."],["📰 periódico","📻 radio"]],
 ["«Ayer, en Mérida, abrió un nuevo hospital.» ¿Cuándo?",["Busco la palabra de tiempo."],"Ayer."],
 [[["eNoti",8]],[["eNoti",6],["eOpin",4]],[["eNoti",6],["eOpin",4]]],[],"El Evangelio, la Buena Noticia."),
"2e47":ESL("2e47","Datos biográficos",[
 ["La biografía","Una <b>biografía</b> cuenta la vida de una persona: dónde y cuándo nació, qué hizo, por qué es importante.",{t:"steps",x:["Nació en…","De niño…","Después…","Es importante porque…"]}],
 ["Datos en orden","Los datos biográficos se ordenan por fechas, del nacimiento a la muerte.",{t:"cards",x:[["👶","nacimiento"],["📚","infancia"],["⭐","obras"],["🙏","legado"]]}]],
 ["San Juan Diego","Juan Diego nació en Cuautitlán hacia 1474. En 1531 la Virgen se le apareció en el Tepeyac. Fue canonizado en 2002. ¡Es el primer santo indígena de América!",{t:"photo",src:WM(IM.juanDiego[0],800),alt:"San Juan Diego",cap:"",credit:IM.juanDiego[1],art:true}],
 ["La entrevista al abuelo","👴","Debes escribir la biografía de un familiar.","¿Qué haces?",[["Entrevisto a mi abuelo y escribo su historia en orden",1,"¡Muy bien!"],["La invento",0,"Debe ser real."],["Copio la de otro",0,"Hazla tú."]]],
 [["Biografía: vida de una persona real.","Datos en orden de fechas."],["nació en 1474","1531: Tepeyac"]],
 ["¿Qué dato va primero en una biografía?",["Se ordena por fechas."],"Dónde y cuándo nació."],
 [[["eCompr",6],["eSuc",2]],[["eCompr",5],["eSuc",5]],[["eCompr",5],["eOpin",5]]],[C("¿Qué cuenta una biografía?",["la vida de una persona real","un cuento inventado","una receta"])],"El primer santo indígena."),
"2e48":ESL("2e48","El cartel y la importancia de opinar",[
 ["El cartel","Mensaje corto, letras grandes, imagen llamativa. Sirve para avisar o convencer.",{t:"emo",x:"🪧 ¡Cuida el agua! 💧"}],
 ["Opinar con respeto","Dar nuestra <b>opinión</b> es decir lo que pensamos, con razones y respeto: «Yo pienso que… porque…».",{t:"cards",x:[["💭","Yo pienso que…"],["➡️","porque…"],["👂","escucho a otros"]]}]],
 ["Hablar con caridad","«Digan la verdad con amor» (Ef 4, 15). Podemos opinar distinto sin pelear.",{t:"emo",x:"💬 ❤️ 🤝"}],
 ["La opinión distinta","🗣️","En el salón, tu amigo opina diferente a ti.","¿Qué haces?",[["Lo escucho y doy mi opinión con respeto",1,"¡Muy bien!"],["Le grito",0,"Se puede opinar distinto."],["Me burlo",0,"Respeta su opinión."]]],
 [["Cartel: corto, grande, llamativo.","Opinión: «pienso que… porque…»"],["¡No tires basura!","Pienso que… porque…"]],
 ["«Los perros son las mejores mascotas.» ¿Hecho u opinión?",["No se puede comprobar.","Es lo que alguien piensa."],"Es una opinión."],
 [[["eOpin",8]],[["eOpin",5],["eTipo",5]],[["eOpin",6],["eTipo",4]]],[],"La verdad con amor.")};
Object.assign(ESP2N,{
"2eR1":ESRETO("2eR1","Reto de letras y palabras","eKCQ,eGui,eAba,eCompu,eFamP,eSilCl",["Forma una palabra compuesta con «abre» + «latas» y di cuántas sílabas tiene.",["abre + latas = abrelatas.","a-bre-la-tas."],"abrelatas: 4 sílabas (polisílaba)."]),
"2eR2":ESRETO("2eR2","Reto del significado","eSin,eAnt,eParaf,eRefran,eCompa,eOficio,eDicc",["¿Qué quiere decir «Lupita le echó una mano a su abuela»?",["No le aventó la mano.","Es una expresión."],"Que Lupita ayudó a su abuela."]),
"2eR3":ESRETO("2eR3","Reto de oraciones","eSujeto,eTiempo,eVerbo,eAdj,eComa,ePunto,eDialogo",["Separa sujeto y predicado: «Mi abuelo reza el rosario».",["¿Quién? Mi abuelo.","¿Qué hace? reza el rosario."],"Mi abuelo | reza el rosario."]),
"2eR4":ESRETO("2eR4","Reto de narraciones","eCompr,eCausa,eMoral,eSuc",["«El niño no estudió. Reprobó el examen.» ¿Cuál es la causa?",["¿Por qué reprobó?"],"No estudió."]),
"2eR5":ESRETO("2eR5","Reto de poesía","eRima,eTrab,eComp,eSin",["Completa la copla: «Virgencita de mi vida, / madre de mi corazón, / te regalo esta flor / y también mi ___».",["Debe rimar con corazón.","canción."],"canción."]),
"2eR6":ESRETO("2eR6","Reto de textos","eTipo,eFuente,eNoti,eOpin,eCompr",["¿Qué texto usas para avisar a todos que habrá kermés el domingo?",["Debe verse de lejos.","Mensaje corto."],"Un cartel."])});
const ESP2T={
"2e1":[["Orden alfabético: de la a a la z.","Si empiezan igual, mira la segunda letra."],["árbol, casa, luna","cama, casa"],["Ordena: sol, árbol, luna.",["a: árbol.","l: luna.","s: sol."],"árbol, luna, sol."],[["eAbc",8]],[["eAbc",5],["eDicc",5]],[["eDicc",6],["eAbc",4]]],
"2e2":[["Trabadas: dos consonantes + vocal.","bl, br, cl, cr, dr, fl, fr, gl, gr, pl, pr, tr"],["bra-zo","flor","tren"],["¿Qué trabada tiene «libro»?",["li-bro."],"bro."],[["eTrab",8]],[["eTrab",10]],[["eTrab",6],["eSilCl",4]]],
"2e3":[["Sinónimos: lo mismo. Antónimos: lo contrario.","Familia: misma raíz."],["feliz = contento","subir ↔ bajar","pan → panadero"],["Antónimo de «generoso»:",["Lo contrario."],"egoísta."],[["eSin",4],["eAnt",4]],[["eSin",3],["eAnt",3],["eFamP",4]],[["eFamP",4],["eParaf",4],["eAnt",2]]],
"2e4":[["Género: masculino/femenino.","Número: singular/plural."],["el niño / la niña","la flor / las flores"],["Plural de «pez»:",["Termina en z → ces."],"peces."],[["eGen",4],["eNum",4]],[["eNum",5],["eGen",5]],[["eNum",5],["eGen",5]]],
"2e5":[["Adjetivo: dice cómo es."],["casa grande","niña alegre"],["Adjetivo en «El perro negro ladra»:",["¿Cómo es el perro?"],"negro."],[["eAdj",8]],[["eAdj",5],["eCompa",5]],[["eAdj",5],["eSujeto",5]]],
"2e6":[["Verbo: acción.","Cambia con el tiempo."],["corre","canta","rezaré"],["Verbo en «Ana pinta un dibujo»:",["¿Qué hace Ana?"],"pinta."],[["eVerbo",8]],[["eVerbo",5],["eTiempo",5]],[["eTiempo",6],["eVerbo",4]]],
"2e7":[["Punto, coma, ¿?, ¡!"],["¿Cómo estás?","¡Qué alegría!"],["¿Qué signos lleva «Qué susto»?",["Es emoción."],"¡Qué susto!"],[["eSignos",8]],[["eSignos",5],["eComa",5]],[["eSignos",4],["eComa",3],["eDialogo",3]]],
"2e8":[["Mayúscula: inicio, nombres propios, lugares, Dios."],["Ana","Puebla","Dios"],["Corrige: «luis vive en toluca»",["Luis: nombre.","Toluca: lugar."],"Luis vive en Toluca."],[["eMay",8]],[["eMay",10]],[["eMay",6],["ePunto",4]]],
"2e9":[["ge, gi suenan fuerte; je, ji también.","güe, güi: la u suena."],["girasol","jirafa","pingüino"],["¿«Jirafa» o «girafa»?",["Se escribe con j."],"jirafa."],[["eOrt",8,"j>g,h;gi>ji,hi;gue>ge,gu"]],[["eOrt",5,"j>g,h;gi>ji,hi;gue>ge,gu"],["eGui",5]],[["eGui",5],["eOrt",5,"j>g,h;gi>ji,hi;gue>ge,gu"]]],
"2e10":[["Antes de p y b va m.","Antes de v va n."],["campana","sombrero","invierno"],["¿«Canpana» o «campana»?",["Antes de p va m."],"campana."],[["eOrt",6,"mp>np,p;mb>nb,b"],["eTrab",2]],[["eOrt",8,"mp>np,p;mb>nb,b"]],[["eOrt",8,"mp>np,p;mb>nb,b"]]],
"2e11":[["Diminutivo: -ito, -ita.","Aumentativo: -ote, -ota, -ón."],["casita","perrote"],["Diminutivo de «libro»:",["libr + ito."],"librito."],[["eDim",8]],[["eDim",10]],[["eDim",8]]],
"2e12":[["Fábula: animales, moraleja."],["🐢 y 🐇","🐜 y 🦗"],["Moraleja de la liebre y la tortuga:",["La tortuga ganó por constante."],"Con constancia se llega lejos."],[["eMoral",8]],[["eMoral",10]],[["eMoral",6],["eCausa",4]]],
"2e13":[["Leyenda: tradición que se cuenta.","Guadalupe: hecho real."],["Tepeyac, 1531","Juan Diego"],["¿Qué llevó Juan Diego en su tilma?",["La Virgen le pidió cortar flores."],"Rosas."],[["eCompr",8]],[["eCompr",10]],[["eCompr",10]]],
"2e14":[["Poema: versos y estrofas.","Rima."],["verso","estrofa","rima"],["¿Riman «sol» y «col»?",["Terminan en -ol."],"Sí."],[["eRima",8]],[["eRima",5],["eComp",5]],[["eRima",6],["eComp",4]]],
"2e15":[["Carta: fecha, saludo, mensaje, despedida, firma."],["Querido abuelo:","Con cariño, Ana"],["¿Dónde va «Querida tía:»?",["Es el saludo."],"Al principio, después de la fecha."],[["eTipo",8]],[["eTipo",10]],[["eTipo",6],["eMay",4]]],
"2e16":[["Instructivo: materiales y pasos en orden."],["1. Dobla","2. Pega"],["¿Qué va primero en un instructivo?",["Lo que necesito."],"Los materiales."],[["eSuc",8]],[["eSuc",10]],[["eSuc",6],["eTipo",4]]]};
(function(){const s=SUBJ.find(x=>x.id==="2esp");if(!s)return;const by={};s.units.forEach(u=>u.ls.forEach(l=>by[l.id]=l));Object.assign(by,ESP2N);
 for(const[id,[rr,ee,ps,l1,l2,l3]]of Object.entries(ESP2T)){const l=by[id];if(!l)continue;const k0=l.learn.findIndex(p=>p.fe||p.info||(p.v&&p.v.t==="vida"));const k=k0<0?l.learn.length:k0;l.learn.splice(k,0,P("Pizarrón: lo más importante","",{t:"piz",r:rr,e:ee}),P("Ejemplo resuelto, paso a paso","",{t:"paso",q:ps[0],s:ps[1],r:ps[2]}));l.lv=[l1,l2,l3];l.g=l1}
 const U=[["Las palabras y sus letras",["2e1","2e17","2e2","2e18","2e9","2e19","2e10","2e20","2e21","2e22","2eR1"]],["El significado de las palabras",["2e3","2e23","2e24","2e25","2e26","2e27","2e11","2eR2"]],["La oración",["2e28","2e4","2e5","2e6","2e29","2e8","2e7","2e30","2e31","2eR3"]],["Narraciones",["2e32","2e33","2e34","2e35","2e12","2e37","2e13","2e38","2eR4"]],["Poesía y juegos de palabras",["2e14","2e39","2e40","2e41","2eR5"]],["Textos para comunicar e informar",["2e15","2e42","2e16","2e43","2e44","2e45","2e46","2e47","2e48","2eR6"]]];
 s.units=U.map(([t,ids])=>({t,ls:ids.map(i=>by[i]).filter(Boolean)}));s.d="Sílabas y palabras, k/c/q, gue/gui/güe/güi, h, -aba, mp/mb/nv, compuestas y familias; diccionario, sinónimos, dichos, comparaciones y oficios; sujeto y predicado, tiempos verbales, puntuación y diálogos; cuentos, causas y consecuencias, fábulas, leyendas, mitos, teatro; coplas, pregones y poemas; invitaciones, recetas, fuentes de información, exposición, noticias, biografías, carteles y opinión. Cada lección tiene pizarrón, ejemplo resuelto y 3 niveles.";})();
