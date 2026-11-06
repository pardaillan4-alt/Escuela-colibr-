/* ========= Matemáticas 1.º: temario ampliado ========= */
function NL(id,t,pages,fe,vd,info,ex,g){const L2=L(id,t,pages,ex,g);if(fe)L2.learn.push(F(fe[0],fe[1],fe[2]));if(vd){const[vt,ic,h,q,o]=vd;L2.learn.push(P(vt,"",{t:"vida",ic,h,q,o}))}if(info)L2.learn.push(info);return L2}
const MAT1N={
/* ---------- Números hasta el 20 ---------- */
m18:NL("m18","Primero, segundo, tercero: los ordinales",[
 P("¿Qué lugar ocupa?","Cuando las personas o las cosas van en fila, decimos qué <b>lugar</b> ocupan: <b>primero, segundo, tercero, cuarto, quinto</b>… Estos números se llaman <b>ordinales</b>.",{t:"lam",id:"ordinales"}),
 P("Del primero al décimo","Primero, segundo, tercero, cuarto, quinto, sexto, séptimo, octavo, noveno y décimo. Con número se escriben con un circulito: 1.º, 2.º, 3.º…",{t:"cards",x:[["1.º","primero"],["2.º","segundo"],["3.º","tercero"],["4.º","cuarto"],["5.º","quinto"],["6.º","sexto"],["7.º","séptimo"],["8.º","octavo"],["9.º","noveno"],["10.º","décimo"]]}),
 P("Ordinales en la vida","Vas en <b>primer</b> grado. Diciembre es el <b>duodécimo</b> mes, el último. En una carrera, quien llega <b>primero</b> gana… pero Jesús dijo algo sorprendente sobre los primeros.",{t:"emo",x:"🥇 🥈 🥉"}),
 P("¿Desde dónde se cuenta?","Fíjate desde dónde empieza la fila. En la procesión, el <b>primero</b> es el que está más cerca del altar. Si contamos desde el otro lado, ¡los lugares cambian!",{t:"emo",x:"⛪ 🧒🧒🧒🧒🧒"})
],["Los últimos serán los primeros","Jesús dijo: «Los últimos serán los primeros, y los primeros, los últimos» (Mt 20, 16). En el Reino de Dios no gana el que empuja para ir adelante, sino el que <b>cede su lugar</b> con amor.",{t:"emo",x:"🙋 ➡️ 🧒"}],
 ["La fila del bebedero","people","En el recreo todos quieren tomar agua. Tú vas en tercer lugar, pero el niño de atrás se siente mal y tiene mucha sed.","¿Qué haces?",[["Le cedo mi lugar; yo puedo esperar un poquito",1,"¡Muy bien! Así hacen los amigos de Jesús: los últimos serán los primeros."],["Le digo que espere, yo llegué antes",0,"Tienes razón en que llegaste antes, pero él necesita ayuda."],["Me meto hasta adelante",0,"Meterse en la fila no es justo con los demás."]]],
 I("Los números ordinales","grid",[["star","1.º primero"],["star","2.º segundo"],["star","3.º tercero"],["star","4.º cuarto"],["star","5.º quinto"],["star","6.º sexto"],["star","7.º séptimo"],["star","8.º octavo"],["star","9.º noveno"],["star","10.º décimo"]],"Los últimos serán los primeros (Mt 20, 16)."),
 [O("Ordena los lugares",["primero","segundo","tercero","cuarto","quinto"]),C("Si hay 5 niños en la fila y tú eres el último, ¿qué lugar ocupas?",["quinto","primero","cuarto"],{t:"emo",x:"🧒🧒🧒🧒🙋"}),C("¿Qué mes es el primero del año?",["enero","diciembre","marzo"]),C("El domingo es el primer día de la semana. ¿Cuál es el segundo?",["lunes","martes","sábado"])],[["xOrd",8]]),
m19:NL("m19","Pares e impares",[
 P("Hacer parejas","Para saber si un número es <b>par</b>, acomoda las cosas en parejas. Si <b>todas</b> tienen pareja, el número es <b>par</b>. Si <b>sobra una</b>, es <b>impar</b>.",{t:"two",a:3,b:3,s:"star"}),
 P("Los números pares","Los números pares son: <b>0, 2, 4, 6, 8, 10, 12…</b> Terminan en 0, 2, 4, 6 u 8. ¡Los zapatos, los calcetines y los ojos van de dos en dos!",{t:"seq",x:[0,2,4,6,8,10,12,14]}),
 P("Los números impares","Los impares son: <b>1, 3, 5, 7, 9, 11, 13…</b> Terminan en 1, 3, 5, 7 o 9. Siempre le sobra uno sin pareja.",{t:"seq",x:[1,3,5,7,9,11,13,15]}),
 P("Juega: ¿par o impar?","Toca la canasta correcta para cada número.",{t:"mtcanasta",sets:["par"]})
],["Los animales entraron de dos en dos","Dios le pidió a Noé que metiera al arca a los animales <b>en parejas</b>, un macho y una hembra (Gn 7, 9). Así, después del diluvio, la vida volvió a llenar la tierra.",{t:"photo",src:WM(IM.animalesArca[0],800),alt:"Los animales entran al arca",cap:"",credit:IM.animalesArca[1],art:true}],
 ["Los equipos del juego","ball","Son 7 niños y quieren jugar en parejas. Uno se queda sin pareja y se pone triste.","¿Qué pueden hacer?",[["Invitarlo a hacer un equipo de tres o turnarse",1,"¡Muy bien! Cuando un número es impar, siempre hay alguien a quien incluir."],["Dejarlo fuera",0,"Nadie debería quedarse solo. ¡Busquen una forma de incluirlo!"],["Decirle que se vaya a su casa",0,"Eso lo lastimaría. Todos pueden jugar."]]],
 I("Pares e impares","vs",[["heart","Pares","Todos tienen pareja"],["star","0, 2, 4, 6, 8",""],["#","Impares"],["people","Sobra uno",""],["star","1, 3, 5, 7, 9",""]],"Noé metió a los animales al arca en parejas."),
 [{k:"s",q:"¿Par o impar?",g:["Par","Impar"],items:[["4",0],["7",1],["10",0],["3",1],["6",0],["9",1]]},TF("El 8 es un número par",true,{t:"dots",n:8,s:"star"}),TF("Si sobra uno al hacer parejas, el número es par",false)],[["xPar",8,20]]),
m20:NL("m20","Estimar: ¿como cuántos hay?",[
 P("Calcular a ojo","<b>Estimar</b> es decir más o menos cuántos hay <b>sin contar</b> uno por uno. Luego cuentas para ver si te acercaste.",{t:"emo",x:"🍬🍬🍬🍬🍬🍬🍬🍬🍬🍬🍬🍬"}),
 P("Usa la caja de diez","Imagina la caja de diez. ¿Alcanzan para llenarla? Entonces hay <b>más de 10</b>. ¿Quedan huecos? Hay <b>menos de 10</b>.",{t:"dots",n:12,s:"star"}),
 P("Estimar en la vida","Estimamos todo el tiempo: ¿alcanzan las tortillas para todos? ¿Como cuántos niños hay en la Misa? ¿Cuántas cucharadas de azúcar le pongo al agua?",{t:"emo",x:"🫓 ⛪ 🥄"}),
 P("Comprueba contando","Después de estimar, cuenta con cuidado. No importa si fallaste por poquito: ¡así se entrena el ojo!",{t:"mtcontar"})
],["Una multitud que nadie podía contar","San Juan vio en el cielo «una multitud tan grande que nadie podía contarla», de todos los pueblos y lenguas (Ap 7, 9). ¡Dios quiere que todos lleguemos a su casa!",{t:"photo",src:WM(IM.lastSermon?IM.lastSermon[0]:IM.misa[0],800),alt:"Una gran multitud",cap:"",credit:(IM.lastSermon||IM.misa)[1],art:true}],
 ["¿Alcanzan las tortillas?","tortilla","En tu casa van a comer 5 personas y cada quien come como 3 tortillas. En la canasta hay unas 8.","¿Qué haces?",[["Aviso que no van a alcanzar y ayudo a calentar más",1,"¡Bien pensado! Estimar nos ayuda a prevenir."],["Me como las que pueda rápido",0,"Así otros se quedarían sin comer."],["No digo nada",0,"Avisar a tiempo es ayudar."]]],
 I("Estimar","steps",[["eye","Mira","Sin contar uno por uno."],["glass","Piensa","¿Llena la caja de diez?"],["speech","Di tu cálculo","Más o menos…"],["star","Comprueba","Cuenta para ver si te acercaste."]],"En el cielo hay una multitud que nadie puede contar."),
 [C("¿Como cuántos granos de arroz caben en tu mano?",["Muchísimos, más de 100","Exactamente 3","Ninguno"]),C("Para 10 personas, ¿como cuántos platos necesitas?",["Unos 10","Unos 2","Unos 50"])],[["xEst",8]]),
m22:NL("m22","Patrones: lo que se repite",[
 P("¿Qué es un patrón?","Un <b>patrón</b> es algo que se repite siempre igual: rojo, azul, rojo, azul… Si descubres qué se repite, ¡puedes adivinar lo que sigue!",{t:"emo",x:"🔴🔵🔴🔵🔴🔵"}),
 P("Patrones AB y ABC","Algunos patrones repiten 2 cosas (A B, A B), otros 3 (A B C, A B C) y otros repiten una cosa dos veces (A A B, A A B).",{t:"cards",x:[["⭐🌙","A B"],["🍎🍌🍇","A B C"],["🐑🐑🐄","A A B"]]}),
 P("Patrones de sonidos y movimientos","¡También hay patrones con el cuerpo! Aplauso, pisotón, aplauso, pisotón… Inventa uno y que tu familia lo repita.",{t:"emo",x:"👏 🦶 👏 🦶"}),
 P("La máquina de patrones","Descubre qué sigue.",{t:"mtpatron"}),
 P("Patrones en la creación","Dios llenó el mundo de patrones: el día y la noche, las rayas de la cebra, los pétalos de las flores, las estaciones del año.",{t:"emo",x:"☀️🌙☀️🌙 🦓 🌻"})
],["El día y la noche","En la creación, Dios hizo un patrón hermoso: «Hubo tarde y hubo mañana: el día primero» (Gn 1, 5). Desde entonces, el día y la noche se repiten sin fallar, como Dios nunca falla.",{t:"emo",x:"🌅 🌃 🌅 🌃"}],
 ["El rosario de la abuela","rosary","Tu abuela reza el rosario: un Padre Nuestro, diez Avemarías, un Gloria… y otra vez. Tu primo dice que es aburrido porque se repite.","¿Qué le explicas?",[["Que como un patrón, repetir con amor nos ayuda a meditar y a estar con María",1,"¡Precioso! Repetir con el corazón es como decir «te quiero» muchas veces."],["Que tiene razón",0,"Las oraciones repetidas son como un abrazo que se da muchas veces."],["Que no rece nunca",0,"Rezar siempre es bueno, aunque se repita."]]],
 I("Los patrones","grid",[["star","A B A B","🔴🔵🔴🔵"],["star","A B C","🍎🍌🍇"],["star","A A B","🐑🐑🐄"],["music","Sonidos","👏🦶👏🦶"]],"Hubo tarde y hubo mañana (Gn 1, 5)."),
 [C("¿Qué sigue? 🔺 🔵 🔺 🔵 🔺 ❓",["🔵","🔺","🟢"]),C("¿Cuál es el grupo que se repite? 🍎🍎🍌🍎🍎🍌",["🍎🍎🍌","🍎🍌","🍌🍌"]),O("Continúa el patrón: lunes, martes…",["lunes","martes","miércoles","jueves"])],[["xPat",9]]),
/* ---------- Sumamos y restamos ---------- */
m21:NL("m21","La casa del número: juntar y separar",[
 P("Un número tiene muchas formas","El <b>7</b> puede ser 5 y 2, o 4 y 3, o 6 y 1… ¡Siempre son 7! Separar un número en partes se llama <b>descomponer</b>.",{t:"two",a:5,b:2,s:"apple"}),
 P("La casa del número","En el techo va el número. En cada piso, dos números que juntos lo forman.",{t:"syl",x:["7","0 + 7","1 + 6","2 + 5","3 + 4"]}),
 P("¡Encuentra todas las formas!","Elige un número y pártelo de todas las formas posibles.",{t:"mtcasa",ns:[5,6,7,8,9,10]}),
 P("Las parejas del 10","Las formas de partir el 10 son las más importantes: 9 y 1, 8 y 2, 7 y 3, 6 y 4, 5 y 5. ¡Te ayudan a sumar rapidísimo!",{t:"syl",x:["9 + 1","8 + 2","7 + 3","6 + 4","5 + 5"]})
],["Repartir los dones","Dios le da a cada uno diferentes regalos: a unos el don de cantar, a otros de ayudar, de enseñar… Todos juntos formamos la Iglesia, como las partes forman un número (1 Co 12).",{t:"emo",x:"🎵 🤝 📖 = ⛪"}],
 ["Las galletas en dos platos","bread","Tienes 8 galletas y dos platos: uno para la visita y otro para tu familia.","¿Cómo las acomodas?",[["De una forma justa, por ejemplo 4 y 4, o según cuántas personas hay en cada lado",1,"¡Muy bien! Descomponer el 8 también sirve para compartir bien."],["8 para mí y 0 para la visita",0,"La visita merece ser bien atendida."],["Las escondo",0,"Compartir con las visitas es ser hospitalario."]]],
 I("La casa del número","grid",[["house","El techo","el número completo"],["star","Los pisos","dos partes que lo forman"],["heart","5 = 3 + 2",""],["heart","10 = 6 + 4",""]],"Todos juntos formamos la Iglesia."),
 [N("El 9 es 4 y ¿cuánto más?",5,{t:"dots",n:9,s:"star"}),C("¿Cuál NO forma el 6?",["3 + 4","2 + 4","5 + 1"]),N("¿Cuánto le falta al 7 para llegar a 10?",3)],[["xDesc",6,10],["make10",3]]),
m25:NL("m25","Sumar tres números",[
 P("Juntar tres grupos","En la canasta hay 3 panes, 2 conchas y 4 bolillos. Para saber cuántos son, sumamos los tres: 3 + 2 + 4 = <b>9</b>.",{t:"emo",x:"🍞🍞🍞 + 🥐🥐 + 🥖🥖🥖🥖"}),
 P("Suma de dos en dos","Primero suma dos números y luego agrega el tercero: 3 + 2 = 5, y 5 + 4 = 9.",{t:"steps",x:["3 + 2 = 5","5 + 4 = 9","¡Son 9!"]}),
 P("Busca el 10","Si dos números hacen 10, súmalos primero: 7 + 5 + 3 → 7 + 3 = 10, y 10 + 5 = <b>15</b>. ¡Mucho más fácil!",{t:"syl",x:["7 + 3 = 10","10 + 5 = 15"]}),
 P("El orden no importa","Puedes sumar en el orden que quieras: el resultado es el mismo. 2 + 5 + 8 = 8 + 2 + 5.",{t:"big",x:"2 + 5 + 8 = 15"})
],["Los tres regalos de los Magos","Los Reyes Magos le llevaron al Niño Jesús <b>tres</b> regalos: oro, incienso y mirra (Mt 2, 11). Si cada rey llevó un cofre, ¿cuántos cofres llegaron? 1 + 1 + 1 = 3.",{t:"photo",src:WM(IM.magos[0],800),alt:"Los Reyes Magos",cap:"",credit:IM.magos[1],art:true}],
 ["La colecta de la parroquia","coin","Tú das 2 pesos, tu hermana 3 y tu papá 5 para los niños de la casa hogar.","¿Cuánto dieron?",[["10 pesos: 2 + 3 + 5, ¡y lo dieron con alegría!",1,"¡Muy bien! Dios ama al que da con alegría (2 Co 9, 7)."],["5 pesos",0,"Suma los tres: 2 + 3 + 5."],["No importa cuánto",0,"Sí importa saberlo, y más importa darlo con amor."]]],
 I("Sumar tres números","steps",[["star","Suma dos","3 + 2 = 5"],["star","Agrega el tercero","5 + 4 = 9"],["heart","Truco","Busca primero dos que hagan 10"]],"Oro, incienso y mirra: tres regalos para Jesús."),
 [N("4 + 6 + 3 = ?",13,null,"4 + 6 hacen 10."),N("En el nacimiento hay 2 pastores, 3 ovejas y 1 burrito. ¿Cuántas figuras son?",6)],[["xAdd3",8]]),
m26:NL("m26","¿Qué número falta? La balanza",[
 P("El signo igual es una balanza","El signo <b>=</b> dice que los dos lados <b>valen lo mismo</b>, como una balanza derecha. 4 + 3 = 7, y también 4 + 3 = 5 + 2.",{t:"big",x:"4 + 3 = 5 + 2"}),
 P("¿Qué número falta?","En 5 + ▢ = 8, piensa: ¿cuánto le falta al 5 para llegar a 8? Cuenta: seis, siete, ocho. ¡Faltan 3!",{t:"line",a:0,b:10,m:[5,8]}),
 P("Juega con la balanza","Elige el número que deja la balanza derecha.",{t:"mtbalanza"}),
 P("La resta te ayuda","Para encontrar el número que falta también puedes restar: 5 + ▢ = 8 → 8 − 5 = 3.",{t:"syl",x:["5 + ▢ = 8","8 − 5 = 3"]})
],["La balanza justa","La Biblia dice: «Al Señor le agrada la balanza justa» (Prov 11, 1). Ser justo es dar a cada quien lo que le corresponde, sin hacer trampa.",{t:"emo",x:"⚖️"}],
 ["Los turnos del columpio","ball","Tú te subiste al columpio 6 veces y tu hermano solo 2.","¿Qué es lo justo?",[["Que él se suba 4 veces más para quedar parejos",1,"¡Muy bien! 2 + 4 = 6. La balanza queda justa."],["Que yo me suba otra vez",0,"Así la balanza se inclina más hacia ti."],["Que nadie se suba",0,"Mejor buscar que los dos tengan lo mismo."]]],
 I("La balanza de la igualdad","vs",[["star","Equilibrada","4 + 3 = 5 + 2"],["#","Inclinada"],["glass","Le falta","5 + 1 ≠ 4 + 3"]],"Al Señor le agrada la balanza justa."),
 [N("3 + ? = 9",6),N("? + 4 = 10",6),C("¿Cuál está bien?",["2 + 6 = 5 + 3","2 + 6 = 5 + 2","2 + 6 = 9"])],[["xMiss",8,10]]),
m27:NL("m27","Cálculo mental: trucos para sumar",[
 P("Sumar 10 es fácil","10 + 4 = 14, 10 + 7 = 17. Solo pon un 1 adelante del número. ¡Mira la caja de diez llena!",{t:"syl",x:["10 + 1 = 11","10 + 4 = 14","10 + 8 = 18"]}),
 P("Sumar 9: suma 10 y quita 1","9 + 6: suma 10 + 6 = 16 y quita 1 → <b>15</b>.",{t:"steps",x:["9 + 6","10 + 6 = 16","16 − 1 = 15"]}),
 P("Casi dobles","6 + 7: piensa en 6 + 6 = 12 y agrega 1 → <b>13</b>.",{t:"syl",x:["6 + 6 = 12","6 + 7 = 13"]}),
 P("Contar desde el más grande","Para 2 + 9, empieza en el 9 y cuenta 2 más: diez, once. ¡Más rápido que empezar en el 2!",{t:"line",a:5,b:12,m:[9,11]})
],["Hacer las cosas con inteligencia","Jesús nos pide ser «sencillos como palomas y astutos como serpientes» (Mt 10, 16). Usar bien la cabeza también es un regalo de Dios que debemos cuidar.",{t:"emo",x:"🕊️ 🧠"}],
 ["En la tiendita","coin","El señor de la tienda te pregunta cuánto suman 9 y 5 pesos. No tienes papel.","¿Cómo lo haces?",[["Pienso 10 + 5 = 15 y quito 1: son 14",1,"¡Muy bien! El cálculo mental te ayuda en todos lados."],["Digo cualquier número",0,"Mejor pensar con calma."],["Me voy sin pagar",0,"¡Eso no! Pagar lo justo es honesto."]]],
 I("Trucos de cálculo mental","grid",[["star","+10","pon un 1 adelante"],["star","+9","suma 10 y quita 1"],["star","Casi dobles","6 + 7 = 6 + 6 + 1"],["star","Desde el mayor","2 + 9 → 9, 10, 11"]],"Sencillos como palomas y astutos como serpientes."),
 [N("10 + 6 = ?",16),N("9 + 4 = ?",13),N("7 + 8 = ?",15,null,"7 + 7 = 14, más 1.")],[["xMent",9]]),
m28:NL("m28","Problemas para comparar e igualar",[
 P("¿Cuántos más?","Ana tiene 8 flores y Luis 5. ¿Cuántas más tiene Ana? Haz parejas: a Ana le sobran 3. 8 − 5 = <b>3</b>.",{t:"two",a:8,b:5,s:"flower"}),
 P("¿Cuántos menos?","Si Ana tiene 3 más que Luis, Luis tiene 3 <b>menos</b> que Ana. ¡Es lo mismo visto desde el otro lado!",{t:"emo",x:"🌸🌸🌸🌸🌸🌸🌸🌸 / 🌸🌸🌸🌸🌸"}),
 P("¿Cuántos le faltan?","Luis quiere tener las mismas flores que Ana. ¿Cuántas le faltan? Cuenta desde 5 hasta 8: seis, siete, ocho. ¡Le faltan 3!",{t:"line",a:0,b:10,m:[5,8]}),
 P("Dibuja para entender","Si un problema te confunde, haz dos filas de dibujos, una debajo de la otra. ¡Lo que sobra es la diferencia!",{t:"emo",x:"✏️ ⭕⭕⭕⭕⭕⭕ / ⭕⭕⭕⭕"})
],["No compararse con envidia","A veces comparamos lo que tenemos y nos da envidia. Pero Dios nos quiere a cada uno con lo que tenemos. Mejor <b>dar gracias</b> y compartir con quien tiene menos.",{t:"emo",x:"🙏 💝"}],
 ["Los juguetes del primo","gift","Tu primo tiene 12 carritos y tú solo 7. Sientes envidia.","¿Qué haces?",[["Doy gracias por los míos y juego con él; ¡juntos tenemos 19!",1,"¡Muy bien! Compartir es mejor que comparar con envidia."],["Le digo que es un presumido",0,"Él no tiene la culpa. Disfruten juntos."],["Le escondo uno",0,"Eso sería robar."]]],
 I("Comparar e igualar","steps",[["eye","Haz dos filas","una arriba y otra abajo"],["star","Busca parejas","uno con uno"],["glass","Lo que sobra","es la diferencia"],["star","Resta","el mayor menos el menor"]],"Da gracias por lo que tienes."),
 [N("Tú tienes 9 estampas y tu amigo 4. ¿Cuántas más tienes tú?",5),N("Hay 6 sillas y 10 niños. ¿Cuántas sillas faltan?",4)],[["xComp",8]]),
/* ---------- Números hasta el 100 ---------- */
m29:NL("m29","Leer y escribir números hasta el 100",[
 P("Las decenas tienen nombre","10 diez, 20 veinte, 30 treinta, 40 cuarenta, 50 cincuenta, 60 sesenta, 70 setenta, 80 ochenta, 90 noventa… ¡y 100 cien!",{t:"cards",x:[["10","diez"],["20","veinte"],["30","treinta"],["40","cuarenta"],["50","cincuenta"],["60","sesenta"],["70","setenta"],["80","ochenta"],["90","noventa"],["100","cien"]]}),
 P("Treinta y uno, treinta y dos…","Del 31 en adelante decimos la decena, luego «y», y luego las unidades: 47 es «cuarenta <b>y</b> siete».",{t:"big",x:"47 = cuarenta y siete"}),
 P("Del 21 al 29 se escriben juntos","Los veintes se escriben en una sola palabra: veintiuno, veintidós, veintitrés… veintinueve.",{t:"syl",x:["veintiuno","veintidós","veintitrés","veinticuatro","veinticinco"]}),
 P("Arma el número","Usa los bloques para formar números y escucha cómo se leen.",{t:"mtbloques",max:99})
],["La edad de los patriarcas","La Biblia dice que Abraham tenía <b>setenta y cinco</b> años cuando Dios lo llamó a ponerse en camino (Gn 12, 4). ¡Nunca es tarde para seguir a Dios!",{t:"big",x:"75 = setenta y cinco"}],
 ["El número de la casa","house","Un repartidor busca la casa 68 de tu calle y pregunta en voz alta: «¿Dónde está la sesenta y ocho?».","¿Qué haces?",[["Con mis papás, le indico cuál es: el seis y el ocho",1,"¡Muy bien! Saber leer números ayuda a los demás."],["Le digo un número cualquiera",0,"Podría perderse. Mejor ayudar con la verdad."],["Me voy corriendo con él",0,"Nunca vayas con desconocidos; ayuda desde tu casa."]]],
 I("Leer números hasta el 100","grid",[["star","20","veinte"],["star","35","treinta y cinco"],["star","58","cincuenta y ocho"],["star","100","cien"]],"Abraham siguió a Dios a los setenta y cinco años."),
 [C("¿Cómo se escribe «noventa y uno»?",["91","19","901"]),C("¿Cómo se lee el 64?",["sesenta y cuatro","cuarenta y seis","seis cuatro"])],[["xRead",8],["tens",2]]),
m23:NL("m23","Series de números: de 2 en 2, de 5 en 5…",[
 P("¿Qué es una serie?","Una <b>serie</b> es una fila de números que siguen una <b>regla</b>. En 3, 5, 7, 9… la regla es «suma 2».",{t:"seq",x:[3,5,7,9,11]}),
 P("Descubre la regla","Fíjate cuánto crece de un número al siguiente. En 10, 15, 20, 25 crece 5 cada vez: la regla es «suma 5».",{t:"seq",x:[10,15,20,25,30]}),
 P("Completa la serie","Elige de cuánto en cuánto y encuentra el número que falta.",{t:"mtserie",st:"1,2,5,10"}),
 P("Series en el calendario","Si hoy es domingo 3, los siguientes domingos serán 10, 17, 24… ¡de 7 en 7! Así sabes cuándo es la próxima Misa dominical.",{t:"seq",x:[3,10,17,24,31]})
],["Setenta veces siete","Pedro le preguntó a Jesús cuántas veces debía perdonar. Jesús le respondió: «No siete, sino setenta veces siete» (Mt 18, 22). Es decir: ¡siempre! El perdón no tiene fin, como una serie que nunca termina.",{t:"photo",src:WM(IM.prodigoM?IM.prodigoM[0]:IM.buenpastor[0],800),alt:"El perdón",cap:"",credit:(IM.prodigoM||IM.buenpastor)[1],art:true}],
 ["El ahorro de cada semana","coin","Cada domingo guardas 5 pesos en tu alcancía para la colecta de Navidad.","¿Cuánto tendrás en 4 domingos?",[["20 pesos: 5, 10, 15, 20",1,"¡Muy bien! Una serie de 5 en 5."],["9 pesos",0,"Cada domingo agregas 5. Cuenta de 5 en 5."],["5 pesos",0,"Son 4 domingos, no uno."]]],
 I("Las series","grid",[["star","+1","3, 4, 5, 6"],["star","+2","2, 4, 6, 8"],["star","+5","5, 10, 15, 20"],["star","+10","10, 20, 30, 40"]],"Perdonar setenta veces siete: ¡siempre!"),
 [O("Ordena la serie de 10 en 10",[30,40,50,60,70]),N("¿Qué número sigue? 4, 6, 8, 10, …",12)],[["xSer",7,100],["xSerRule",3]]),
m24:NL("m24","Series hacia atrás y la cuenta regresiva",[
 P("Contar hacia atrás","También podemos contar hacia atrás: 10, 9, 8, 7… ¡como cuando despega un cohete! La regla es «resta 1».",{t:"seq",x:[10,9,8,7,6,5,4,3,2,1,0]}),
 P("De 2 en 2 y de 10 en 10 hacia atrás","20, 18, 16, 14… (resta 2). 100, 90, 80, 70… (resta 10).",{t:"syl",x:["20, 18, 16, 14","100, 90, 80, 70","50, 45, 40, 35"]}),
 P("Practica hacia atrás","Activa «hacia atrás» y completa la serie.",{t:"mtserie",st:"1,2,5,10",back:1}),
 P("La corona de Adviento","En Adviento contamos los domingos que faltan para la Navidad: 4, 3, 2, 1… Cada domingo encendemos una vela más.",{t:"emo",x:"🕯️🕯️🕯️🕯️ ➡️ 🌟"})
],["Esperar con alegría","En Adviento, la Iglesia hace una «cuenta regresiva» de cuatro semanas para preparar el corazón. Esperar a Jesús es como esperar a un amigo muy querido: ¡cada día falta menos!",{t:"emo",x:"🕯️ 🎄 👶"}],
 ["Faltan 5 días para tu fiesta","calendar","Faltan 5 días para tu cumpleaños y estás muy impaciente: preguntas a cada rato.","¿Qué puedes hacer?",[["Hacer una cuenta regresiva en el calendario: 5, 4, 3, 2, 1, y esperar con paciencia",1,"¡Muy bien! La espera se hace más bonita."],["Enojarme porque falta mucho",0,"La paciencia también se aprende."],["Pedir que adelanten la fiesta",0,"Hay cosas que deben esperar su tiempo."]]],
 I("Contar hacia atrás","grid",[["star","−1","10, 9, 8, 7"],["star","−2","20, 18, 16"],["star","−5","50, 45, 40"],["star","−10","100, 90, 80"]],"Adviento: preparamos el corazón para Jesús."),
 [O("Ordena del mayor al menor",[50,40,30,20,10]),N("¿Qué sigue? 30, 28, 26, 24, …",22)],[["xSer",8,100]]),
m30:NL("m30","Comparar y ordenar hasta el 100",[
 P("Primero las decenas","Para comparar 47 y 52, mira primero las decenas: 4 decenas y 5 decenas. Como 5 es mayor, <b>52 &gt; 47</b>.",{t:"syl",x:["47 → 4 decenas","52 → 5 decenas"]}),
 P("Si las decenas son iguales","Para 63 y 68 las decenas son iguales (6). Entonces comparamos las unidades: 8 es mayor que 3, así que <b>68 &gt; 63</b>.",{t:"big",x:"68 &gt; 63"}),
 P("Ordenar números","Para ordenar de menor a mayor, busca primero el que tenga menos decenas.",{t:"seq",x:[19,34,56,71,88]}),
 P("El cocodrilo con números grandes","Juega a comparar.",{t:"mtcomparar",max:99})
],["Dios no se fija en el tamaño","Cuando Samuel fue a elegir rey, pensaba que sería el hermano más alto. Pero Dios le dijo: «Yo no miro las apariencias, sino el corazón» (1 Sam 16, 7). ¡Y eligió a David, el más pequeño!",{t:"photo",src:WM(IM.saulDavid?IM.saulDavid[0]:IM.honore[0],800),alt:"David",cap:"",credit:(IM.saulDavid||IM.honore)[1],art:true}],
 ["El más grande","people","En tu salón, el niño más alto siempre gana en básquet y los demás se sienten menos.","¿Qué piensas?",[["Que cada quien vale mucho, sin importar su tamaño, y que podemos jugar todos",1,"¡Muy bien! Dios mira el corazón."],["Que los bajitos no sirven",0,"¡Claro que sirven! Cada uno tiene sus dones."],["Que solo juegue el alto",0,"El juego es para todos."]]],
 I("Comparar hasta el 100","steps",[["star","Mira las decenas","la que tenga más es mayor"],["star","Si son iguales","mira las unidades"],["star","Usa el signo","&gt; mayor · &lt; menor · = igual"]],"Dios mira el corazón (1 Sam 16, 7)."),
 [C("¿Cuál es mayor?",["81","18","80"]),C("¿Qué signo va? 45 ▢ 54",["<",">","="])],[["xCmp100",5],["xOrd100",4]]),
/* ---------- Formas y medidas ---------- */
m31:NL("m31","¿Dónde está? Ubicación y caminos",[
 P("Arriba, abajo, dentro, fuera","Para decir dónde está algo usamos palabras como <b>arriba, abajo, dentro, fuera, delante, detrás, cerca, lejos</b>.",{t:"ubica"}),
 P("Derecha e izquierda","Tu mano <b>derecha</b> es con la que haces la Señal de la Cruz. La otra es la <b>izquierda</b>. Al persignarte tocas la frente, el pecho, el hombro izquierdo y luego el derecho.",{t:"emo",x:"🫲 ✝️ 🫱"}),
 P("Seguir un camino","Para llegar de un lugar a otro damos instrucciones: «Camina 3 pasos hacia adelante, da vuelta a la derecha y sigue 2 pasos».",{t:"steps",x:["3 pasos adelante ⬆️","vuelta a la derecha ➡️","2 pasos adelante ⬆️","¡llegaste! ⛪"]}),
 P("El croquis","Un <b>croquis</b> es un dibujo sencillo, visto desde arriba, que muestra cómo llegar a un lugar.",{t:"lam",id:"comunidad"})
],["Jesús es el Camino","Jesús dijo: «Yo soy el Camino, la Verdad y la Vida» (Jn 14, 6). Cuando no sabemos hacia dónde ir, Jesús nos guía como un buen mapa.",{t:"emo",x:"🧭 ✝️"}],
 ["La visita que se perdió","map","Tu tía viene a visitarte por primera vez y te llama porque no encuentra tu casa.","¿Qué le dices?",[["Le doy instrucciones claras: «Está enfrente del parque, a la derecha de la tienda»",1,"¡Muy bien! Las palabras de ubicación ayudan a llegar."],["«Por allá»",0,"Así es difícil llegar. Usa palabras claras."],["Le cuelgo",0,"Ella necesita tu ayuda."]]],
 I("Palabras para ubicarse","grid",[["star","arriba / abajo"],["star","dentro / fuera"],["star","delante / detrás"],["star","derecha / izquierda"],["star","cerca / lejos"],["map","croquis","dibujo visto desde arriba"]],"Jesús es el Camino (Jn 14, 6)."),
 [C("¿Con qué mano hacemos la Señal de la Cruz?",["Derecha","Izquierda"]),C("Lo contrario de «dentro» es…",["fuera","arriba","cerca"]),C("Lo contrario de «delante» es…",["detrás","abajo","lejos"])],[["xUbi",6]]),
m32:NL("m32","Líneas y el tangram",[
 P("Líneas rectas y curvas","Una línea <b>recta</b> no se dobla, como el borde de una regla. Una línea <b>curva</b> se dobla, como un arcoíris.",{t:"emo",x:"📏 ➖   🌈 〰️"}),
 P("Figuras con líneas rectas","El triángulo, el cuadrado y el rectángulo tienen solo líneas rectas. El círculo está hecho con una línea curva.",{t:"shapes",x:["triangulo","cuadrado","rectangulo","circulo"]}),
 P("El tangram","El tangram es un rompecabezas de 7 piezas. ¡Con ellas puedes formar cientos de figuras!",{t:"lam",id:"tangram"}),
 P("Formas en la naturaleza","Dios hizo formas maravillosas: el panal de las abejas tiene hexágonos, la luna es redonda, las montañas parecen triángulos.",{t:"emo",x:"🐝⬡ 🌕 ⛰️"})
],["El orden de la creación","«Todo lo hiciste con medida, número y peso» (Sab 11, 20). En cada flor, en cada panal y en cada copo de nieve se ve la sabiduría de Dios.",{t:"emo",x:"❄️ 🌻 🐚"}],
 ["El rompecabezas incompleto","🧩","Estás armando un rompecabezas con tu hermanito y él mete una pieza mal y se desespera.","¿Qué haces?",[["Le enseño a fijarse en la forma de las orillas y lo ayudo con paciencia",1,"¡Muy bien! Las formas y la paciencia arman todo."],["Se lo quito y lo armo yo",0,"Así no aprende. Mejor ayúdalo."],["Me enojo y lo desarmo",0,"Respira. Juntos lo logran."]]],
 I("Líneas y figuras","vs",[["ruler","Rectas","no se doblan"],["star","Triángulo, cuadrado",""],["#","Curvas"],["star","Círculo, óvalo","se doblan"]],"Todo lo hiciste con medida, número y peso."),
 [C("¿Qué figura NO tiene líneas rectas?",["Círculo","Triángulo","Cuadrado"]),N("¿Cuántas piezas tiene el tangram?",7),N("¿Cuántos triángulos tiene el tangram?",5)],[["xLin",5],["shape",3]]),
m33:NL("m33","Pesado y ligero: la balanza",[
 P("¿Qué pesa más?","Algunas cosas son <b>pesadas</b>, como una sandía. Otras son <b>ligeras</b>, como una pluma. Cuando cargas algo, tus brazos te dicen cuánto pesa.",{t:"emo",x:"🍉 🪶"}),
 P("La balanza","La <b>balanza</b> compara pesos: el lado más pesado <b>baja</b> y el más ligero <b>sube</b>. Si quedan parejos, pesan lo mismo.",{t:"mtpeso"}),
 P("Grande no siempre es pesado","Un globo es grande pero ligerísimo. Una piedra pequeña puede pesar más. ¡Hay que comprobarlo!",{t:"emo",x:"🎈 vs 🪨"}),
 P("El kilo","En el mercado se pesa en <b>kilos</b>. Un kilo de tortillas, un kilo de frijol. Un bebé recién nacido pesa como 3 kilos.",{t:"emo",x:"⚖️ 🫓 1 kg"})
],["Llevar las cargas unos de otros","San Pablo dice: «Ayúdense a llevar las cargas unos de otros» (Gál 6, 2). Cuando algo pesa mucho, entre dos es más ligero. ¡Así es el amor!",{t:"emo",x:"🧺 🤝"}],
 ["Las bolsas del mandado","🛍️","Tu mamá regresa del mercado con muchas bolsas pesadas.","¿Qué haces?",[["Le ayudo a cargar; le doy las ligeras a mi hermanito y yo cargo una pesada",1,"¡Muy bien! Ayudar a llevar las cargas es amor."],["Sigo jugando",0,"Tu mamá necesita ayuda."],["Le digo que no puedo",0,"Siempre puedes cargar algo, aunque sea ligero."]]],
 I("Pesado y ligero","vs",[["star","Pesado","🍉 🧱 🐘"],["#","Ligero"],["star","Ligero","🪶 🎈 🍃"]],"Ayúdense a llevar las cargas unos de otros."),
 [C("En la balanza, ¿qué lado baja?",["El más pesado","El más ligero","El más bonito"]),TF("Un globo grande pesa más que una piedra",false)],[["xPeso",8]]),
m34:NL("m34","¿Cuánto le cabe? La capacidad",[
 P("Lleno, vacío y a la mitad","Un vaso puede estar <b>lleno</b>, <b>vacío</b> o <b>a la mitad</b>. La <b>capacidad</b> es cuánto le cabe a un recipiente.",{t:"emo",x:"🥛 🫗 🥃"}),
 P("¿Dónde cabe más?","En una tina cabe más agua que en una cubeta, y en la cubeta más que en una taza.",{t:"emo",x:"🛁 &gt; 🪣 &gt; ☕"}),
 P("Medir con vasos","Para saber cuánto le cabe a una jarra, cuenta cuántos vasos de agua necesitas para llenarla. ¡Así mides con algo que tienes en casa!",{t:"steps",x:["Llena un vaso","Vacíalo en la jarra","Cuenta cada vaso","¡La jarra mide 5 vasos!"]}),
 P("El litro","La leche y el agua se miden en <b>litros</b>. Un garrafón tiene 20 litros.",{t:"emo",x:"🥛 1 litro · 🫙 20 litros"})
],["Las tinajas de Caná","En una boda en Caná se acabó el vino. Jesús pidió llenar <b>seis tinajas</b> de agua «hasta el borde» y la convirtió en vino (Jn 2, 7). ¡Fue su primer milagro, por petición de María!",{t:"emo",x:"🏺🏺🏺🏺🏺🏺 🍷"}],
 ["El agua de la casa","drop","Llenaste una cubeta para regar las plantas, pero está tan llena que se tira por el camino.","¿Qué haces?",[["La lleno solo hasta la mitad y hago dos viajes para no desperdiciar",1,"¡Muy bien! Cuidar el agua es cuidar la creación."],["La lleno más",0,"Se tiraría más agua."],["Dejo que se tire",0,"El agua es un regalo de Dios que no hay que desperdiciar."]]],
 I("La capacidad","grid",[["glass","Lleno"],["glass","A la mitad"],["glass","Vacío"],["water","Litro","así se mide"]],"Jesús convirtió el agua en vino en Caná."),
 [C("Si un vaso tiene la mitad de agua, está…",["a la mitad","lleno","vacío"]),N("Para llenar una jarra usaste 4 vasos. ¿Cuántos vasos le caben a la jarra?",4)],[["xCap",8]]),
/* ---------- El tiempo ---------- */
m36:NL("m36","Antes, después: mañana, tarde y noche",[
 P("Antes y después","Algunas cosas pasan <b>antes</b> y otras <b>después</b>. Primero te pones los calcetines y después los zapatos. ¡Al revés no funciona!",{t:"steps",x:["🧦 calcetines","👟 zapatos","🎀 agujetas"]}),
 P("Mañana, tarde y noche","El día tiene momentos: en la <b>mañana</b> sale el sol y vamos a la escuela; en la <b>tarde</b> comemos y jugamos; en la <b>noche</b> cenamos, rezamos y dormimos.",{t:"emo",x:"🌅 ☀️ 🌙"}),
 P("Ayer, hoy y mañana","<b>Ayer</b> ya pasó, <b>hoy</b> es el día que vivimos y <b>mañana</b> es el que viene.",{t:"syl",x:["ayer ⏪","hoy 📍","mañana ⏩"]}),
 P("Clasifica tu día","¿Cuándo pasa cada cosa?",{t:"mtcanasta",sets:["dia"]})
],["Ofrecer el día a Dios","Al despertar podemos decir: «Te ofrezco, Señor, todo lo que haga hoy». En la noche damos gracias por lo bueno y pedimos perdón por lo malo. ¡Así el día entero es para Dios!",{t:"emo",x:"🌅 🙏 🌙"}],
 ["La mañana con prisa","clock","Te levantaste tarde y quieres irte a la escuela sin desayunar ni lavarte los dientes.","¿Qué es mejor?",[["Hacer las cosas en orden, rápido pero bien, y mañana levantarme a tiempo",1,"¡Muy bien! El orden ayuda a que el día salga bien."],["Irme sin desayunar",0,"Tu cuerpo necesita energía para aprender."],["Faltar a la escuela",0,"Mejor organizarse y llegar."]]],
 I("Los momentos del día","steps",[["sun","Mañana","desayuno, escuela"],["sun","Tarde","comida, juego"],["moon","Noche","cena, oración, sueño"]],"Ofrece tu día a Dios."),
 [O("Ordena: ayer, hoy, mañana",["ayer","hoy","mañana"])],[["xMom",3],["xAntes",4]]),
m35:NL("m35","La semana, los meses y el calendario",[
 P("La semana tiene 7 días","Domingo, lunes, martes, miércoles, jueves, viernes y sábado. El <b>domingo</b> es el Día del Señor, el día en que Jesús resucitó.",{t:"syl",x:["domingo ⛪","lunes","martes","miércoles","jueves","viernes","sábado"]}),
 P("El año tiene 12 meses","Enero, febrero, marzo, abril, mayo, junio, julio, agosto, septiembre, octubre, noviembre y diciembre. ¿En qué mes es tu cumpleaños?",{t:"emo",x:"📅 🎂"}),
 P("El calendario","El calendario nos muestra los días de cada mes. Toca un día para saber qué día de la semana es.",{t:"mtcal"}),
 P("Fiestas del año","Cada año celebramos fiestas: la Virgen de Guadalupe el 12 de diciembre, la Navidad el 25 de diciembre, la Independencia el 16 de septiembre.",{t:"cards",x:[["🌹","12 de diciembre"],["🌟","25 de diciembre"],["🇲🇽","16 de septiembre"],["🕯️","2 de noviembre"]]})
],["El tiempo de la Iglesia","La Iglesia también tiene su calendario: el <b>año litúrgico</b>. Empieza con el Adviento, sigue la Navidad, la Cuaresma, la Pascua y el Tiempo Ordinario. ¡Cada tiempo tiene su color!",{t:"lam",id:"colores"}],
 ["El cumpleaños de la abuela","gift","El cumpleaños de tu abuela es el próximo jueves y nadie se acuerda.","¿Qué haces?",[["Lo marco en el calendario y aviso a mi familia para prepararle una sorpresa",1,"¡Muy bien! El calendario nos ayuda a no olvidar a quienes queremos."],["Nada, alguien más se acordará",0,"Tú puedes ser quien se acuerde."],["Le digo que ya pasó",0,"Mejor celebrarla con cariño."]]],
 I("El calendario","grid",[["calendar","7 días","una semana"],["calendar","12 meses","un año"],["church","Domingo","Día del Señor"],["star","Fiestas","Guadalupe, Navidad…"]],"La Iglesia tiene su año litúrgico."),
 [N("¿Cuántos días tiene una semana?",7),O("Ordena los meses",["enero","febrero","marzo","abril"])],[["xDia",5],["xMes",4]]),
/* ---------- Dinero y datos ---------- */
m37:NL("m37","Clasificar: juntar lo que se parece",[
 P("¿Qué es clasificar?","<b>Clasificar</b> es juntar las cosas que se parecen en algo: por color, por forma, por tamaño o por para qué sirven.",{t:"emo",x:"🔴🔴🔴 | 🔵🔵 | 🟡🟡🟡🟡"}),
 P("Elige una regla","Los mismos objetos se pueden clasificar de varias formas. Unos botones se pueden separar por color… ¡o por cuántos hoyitos tienen!",{t:"cards",x:[["🎨","por color"],["🔷","por forma"],["📏","por tamaño"],["🧺","por uso"]]}),
 P("Juega con las canastas","Elige una regla y pon cada cosa en su canasta.",{t:"mtcanasta",sets:["fruta","vivo","forma","tam"]}),
 P("¿Cuál no pertenece?","En 🍎 🍌 🍇 🚗, el coche no pertenece porque no es fruta. Encontrar el que «no va» también es clasificar.",{t:"emo",x:"🍎 🍌 🍇 🚗"})
],["Cada cosa en su lugar","En la creación Dios fue separando y ordenando: la luz de las tinieblas, las aguas del cielo y de la tierra, cada animal «según su especie» (Gn 1). ¡El orden también es bello!",{t:"emo",x:"🌍 🐟 🐦 🐄"}],
 ["El cuarto revuelto","house","Tu cuarto está lleno de juguetes, ropa y libros revueltos.","¿Cómo lo ordenas?",[["Clasifico: los juguetes en su caja, la ropa en el cajón y los libros en el librero",1,"¡Muy bien! Clasificar ayuda a encontrar todo después."],["Meto todo debajo de la cama",0,"Así no encontrarás nada."],["Espero a que mamá lo haga",0,"Ayudar en casa es tarea de todos."]]],
 I("Clasificar","grid",[["star","Color"],["star","Forma"],["star","Tamaño"],["star","Uso"]],"Dios ordenó la creación con sabiduría."),
 [C("¿Cuál no pertenece? 🐕 🐈 🐄 🌳",["🌳","🐕","🐄"])],[["xClas",4],["xIntruso",5]])
};
/* ---------- Subtemas nuevos en las lecciones que ya existían ---------- */
const MAT1X={
m1:[[P("Contar cosas revueltas","Si las cosas están revueltas, ve separando las que ya contaste, o márcalas con el dedo para no contar dos veces la misma.",{t:"emo",x:"🍎 🍐 🍎 🍌 🍎 🍐"}),P("Escribir los números","Cada número tiene su forma: el <b>1</b> es un palito, el <b>0</b> es redondo como una dona, el <b>8</b> son dos ruedas una encima de otra.",{t:"big",x:"0 1 2 3 4 5 6 7 8 9"})],[],[["next",2,10]]],
m2:[[P("Leer y escribir del 11 al 20","Une cada número con su nombre: 11 once, 12 doce, 13 trece, 14 catorce, 15 quince, 16 dieciséis, 17 diecisiete, 18 dieciocho, 19 diecinueve, 20 veinte.",{t:"cards",x:[["11","once"],["12","doce"],["13","trece"],["14","catorce"],["15","quince"],["16","dieciséis"],["17","diecisiete"],["18","dieciocho"],["19","diecinueve"],["20","veinte"]]})],[],[["between",2,20]]],
m3:[[P("Comparar haciendo parejas","Si no puedes contar, haz parejas: una cosa de un grupo con una del otro. El grupo al que le sobran cosas tiene <b>más</b>.",{t:"two",a:6,b:4,s:"star"})],[],[["cmp",2,20]]],
m4:[[P("Los vecinos de un número","Cada número tiene dos vecinos: el de <b>antes</b> y el de <b>después</b>. Los vecinos del 15 son el 14 y el 16.",{t:"seq",x:[14,15,16]})],[],[["between",2,20]]],
m5:[[P("El orden no cambia la suma","3 + 5 es lo mismo que 5 + 3: ¡siempre son 8! Puedes empezar por el número más grande para sumar más rápido.",{t:"syl",x:["3 + 5 = 8","5 + 3 = 8"]}),P("Sumar cero","Si sumas 0, el número se queda igual: 7 + 0 = 7. ¡No le agregaste nada!",{t:"big",x:"7 + 0 = 7"})],[N("6 + 0 = ?",6)],[["xMiss",2,10]]],
m6:[[P("Restar cero y restar todo","Si restas 0, no quitas nada: 8 − 0 = 8. Si restas todo, no queda nada: 8 − 8 = 0.",{t:"syl",x:["8 − 0 = 8","8 − 8 = 0"]}),P("Restar para comparar","La resta también sirve para saber cuántos más tiene uno que otro: 7 peces − 4 peces = 3 peces más.",{t:"two",a:7,b:4,s:"fish"})],[],[["xComp",2]]],
m7:[[P("Sumar 10","Sumar 10 es muy fácil: 10 + 3 = 13, 10 + 6 = 16. ¡Una caja de diez llena y los que sobran!",{t:"syl",x:["10 + 3 = 13","10 + 6 = 16","10 + 9 = 19"]})],[],[["xMent",2]]],
m8:[[P("Palabras pista","Algunas palabras te dicen qué hacer. <b>Juntar, en total, le dieron, más</b> → suma. <b>Quedan, se fueron, regaló, perdió</b> → resta.",{t:"cards",x:[["➕","juntar · en total · le dieron"],["➖","quedan · se fueron · regaló"]]}),P("Inventa tu problema","Ahora tú: inventa una historia con números para tu familia. Ejemplo: «En la mesa había 5 tamales y llegaron 3 más. ¿Cuántos hay?».",{t:"emo",x:"✏️ 📖 🫔"})],[],[["prob",3,20]]],
m9:[[P("Descomponer en decenas y unidades","34 son 3 decenas y 4 unidades: 34 = 30 + 4. Así se ve con bloques.",{t:"blocks",d:3,u:4})],[N("¿Cuántas decenas tiene el 70?",7)],[["pv2",2]]],
m10:[[P("De 5 en 5 con las manos","Cada mano tiene 5 dedos. Cuenta las manos de tu familia de 5 en 5: 5, 10, 15, 20, 25…",{t:"seq",x:[5,10,15,20,25,30]})],[],[["skip",2]]],
m11:[[P("Sumar decenas completas","20 + 30 es como 2 barras + 3 barras = 5 barras: <b>50</b>. Y 60 − 20 = 40.",{t:"syl",x:["20 + 30 = 50","40 + 10 = 50","60 − 20 = 40"]})],[N("30 + 40 = ?",70),N("90 − 50 = ?",40)],[]],
m12:[[P("Figuras en el templo","En la iglesia hay muchas figuras: rosetones redondos, ventanas rectangulares y el triángulo, que recuerda a la Santísima Trinidad: un solo Dios en tres personas.",{t:"emo",x:"⛪ ⭕ ▭ 🔺"}),P("¿Rueda o no rueda?","Los cuerpos con partes curvas, como la esfera y el cilindro, ruedan. Los que solo tienen caras planas, como el cubo, no ruedan.",{t:"mtcanasta",sets:["rueda","forma"]})],[],[["sides",2]]],
m13:[[P("Medir con la regla","Pon el <b>0</b> de la regla justo en la orilla de lo que mides y fíjate en qué número termina. Ese es su largo en centímetros.",{t:"emo",x:"📏 0 1 2 3 4 5 6"})],[C("¿Qué usas para medir con exactitud un lápiz?",["Una regla","Una cuchara","Un vaso"])],[]],
m14:[[P("¿Cuánto dura?","Algunas cosas duran poco, como un estornudo. Otras duran mucho, como un viaje o una Misa. Comparar lo que dura algo también es medir el tiempo.",{t:"emo",x:"⚡ 🐢"})],[],[["xHora",2]]],
m15:[[P("Los billetes de 20, 50 y 100","Además de las monedas hay billetes. El de 20 es azul, el de 50 es rosa y el de 100 es rojo. ¡Cuidemos el dinero que ganan nuestros papás con su trabajo!",{t:"bill",v:50})],[],[["xBill",3]]],
m16:[[P("Contar con palitos","Para contar votos rápido hacemos palitos y, cada cinco, tachamos con una raya: así contamos de 5 en 5.",{t:"big",x:"<s>||||</s> <s>||||</s> ||"})],[],[["xTally",3]]]};
(function(){const mat=SUBJ.find(s=>s.id==="mat");if(!mat)return;const byId={};mat.units.forEach(u=>u.ls.forEach(l=>byId[l.id]=l));Object.assign(byId,MAT1N);
 for(const[id,[pgs,ex,g]]of Object.entries(MAT1X)){const l=byId[id];if(!l)continue;const k=l.learn.findIndex(p=>p.fe||p.info||(p.v&&p.v.t==="vida"));l.learn.splice(k<0?l.learn.length:k,0,...pgs);l.ex.push(...ex);l.g=(l.g||[]).concat(g)}
 const U=[["Los números hasta el 20",["m1","m2","m3","m4","m18","m19","m20","m22"]],["Sumamos y restamos",["m5","m6","m21","m7","m25","m26","m27","m8","m28"]],["Los números hasta el 100",["m9","m29","m10","m23","m24","m30","m11"]],["Formas y medidas",["m31","m32","m12","m13","m33","m34"]],["El tiempo",["m36","m35","m14"]],["El dinero y los datos",["m15","m37","m16","m17"]]];
 mat.units=U.map(([t,ids])=>({t,ls:ids.map(i=>byId[i]).filter(Boolean)}));mat.d="Números hasta el 100, patrones y series, sumas y restas, cálculo mental, figuras, ubicación, medidas, tiempo, dinero y datos.";})();
