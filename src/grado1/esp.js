/* ===== ESPAÑOL ===== */
SUBJ.push({id:"esp",n:"Español",campo:"Lenguajes",d:"Vocales, abecedario, sílabas, palabras, oraciones, lectura y escritura.",units:[
{t:"Las letras y sus sonidos",ls:[
L("e1","Las vocales",[
P("Cinco letras muy importantes","Las vocales son <b>a, e, i, o, u</b>. Están en todas las palabras del español. ¡Sin ellas no podríamos hablar!",{t:"big",x:"a e i o u"}),
P("Mayúsculas y minúsculas","Cada vocal se escribe de dos formas: grande o <b>mayúscula</b> y pequeña o <b>minúscula</b>.",{t:"syl",x:["A a","E e","I i","O o","U u"]}),
P("Palabras que empiezan con vocal","Di cada palabra despacio y escucha su primer sonido.",{t:"cards",x:[["🐝","abeja"],["🐘","elefante"],["⛪","iglesia"],["🐻","oso"],["🍇","uvas"]]})
],[C("¿Con qué vocal empieza «oso»?",["O","A","U"],{t:"emo",x:"🐻"},"Di la palabra despacio y escucha el primer sonido."),
C("¿Con qué vocal empieza «abeja»?",["A","E","I"],{t:"emo",x:"🐝"}),
C("¿Con qué vocal empieza «uvas»?",["U","O","I"],{t:"emo",x:"🍇"}),
C("¿Con qué vocal empieza «elefante»?",["E","A","O"],{t:"emo",x:"🐘"}),
C("¿Con qué vocal empieza «iglesia»?",["I","E","U"],{t:"emo",x:"⛪"}),
C("¿Cuál de estas letras es una vocal?",["o","m","p"]),
C("¿Cuál es la «e» mayúscula?",["E","e","F"]),
O("Ordena las vocales",["a","e","i","o","u"]),
TF("La palabra «sol» tiene la vocal «o».",true,null,"Dila despacio: s-o-l."),
C("¿Qué vocal falta? l_na",["u","a","e"],{t:"emo",x:"🌙"},"Es lo que sale en el cielo de noche.")]),
L("e2","El abecedario",[
P("Nuestro abecedario","El abecedario del español tiene <b>27 letras</b>. Las vocales son 5 y las demás se llaman <b>consonantes</b>.",{t:"big",x:"A B C D E F G H I J K L M N Ñ O P Q R S T U V W X Y Z"}),
P("La letra que solo tiene el español","La <b>Ñ</b> (eñe) es muy nuestra: la usamos en niño, piñata, año y señor.",{t:"cards",x:[["🪅","piñata"],["👦","niño"],["🎂","año"]]}),
P("El orden importa","Las letras siempre van en el mismo orden. Así encontramos palabras en el diccionario. ¡Canta el abecedario para aprenderlo!",{t:"syl",x:["A","B","C","D","E","F","G"]})
],[C("¿Qué letra sigue después de la N?",["Ñ","O","M"]),C("¿Qué letra va antes de la B?",["A","C","D"]),O("Ordena las letras",["A","B","C","D"]),O("Ordena las letras",["L","M","N","Ñ"]),N("¿Cuántas vocales hay?",5),C("¿Con qué letra empieza «piñata»?",["P","Ñ","B"],{t:"emo",x:"🪅"}),C("¿Qué palabra tiene la letra ñ?",["araña","casa","mesa"]),C("¿Qué letra sigue después de la R?",["S","T","Q"]),TF("La M es una consonante.",true)]),
L("e3","Sílabas con M y P",[
P("¿Qué es una sílaba?","Una <b>sílaba</b> es un golpe de voz. Cuando juntamos una consonante con una vocal formamos sílabas: m + a = <b>ma</b>.",{t:"big",x:"m + a = ma"}),
P("Con la M","ma, me, mi, mo, mu. Con ellas decimos: <b>mamá, mima, mimo</b>. «Mi mamá me mima.»",{t:"syl",x:["ma","me","mi","mo","mu"]}),
P("Con la P","pa, pe, pi, po, pu. Con ellas decimos: <b>papá, pipa, mapa, puma, Pepe</b>.",{t:"syl",x:["pa","pe","pi","po","pu"]}),
P("Leemos palabras","Lee despacio, juntando las sílabas: ma-pa, mapa. pu-ma, puma. pa-pá, papá.",{t:"cards",x:[["🗺️","ma-pa"],["🐆","pu-ma"],["👨","pa-pá"]]})
],[B("Forma la palabra «mapa»",["ma","pa"],["pu","mo"],{t:"emo",x:"🗺️"}),B("Forma la palabra «puma»",["pu","ma"],["pe","mi"],{t:"emo",x:"🐆"}),B("Forma la palabra «mamá»",["ma","má"],["pa","mu"]),C("¿Qué sílaba es m + o?",["mo","om","ma"]),C("¿Qué sílaba es p + i?",["pi","pa","ip"]),C("¿Con qué sílaba empieza «pato»?",["pa","po","pe"],{t:"emo",x:"🦆"}),C("¿Qué palabra dice «pi-pa»?",["pipa","papa","mima"]),TF("«Papá» empieza con la sílaba «pa».",true)]),
L("e4","Sílabas con S, L y T",[
P("Con la S","sa, se, si, so, su: <b>sopa, sapo, mesa, oso, peso</b>.",{t:"syl",x:["sa","se","si","so","su"]}),
P("Con la L","la, le, li, lo, lu: <b>luna, lima, ala, pala, sala, lupa</b>.",{t:"syl",x:["la","le","li","lo","lu"]}),
P("Con la T","ta, te, ti, to, tu: <b>tomate, pato, tela, maleta, pelota</b>.",{t:"syl",x:["ta","te","ti","to","tu"]}),
P("Palabras más largas","Algunas palabras tienen tres sílabas o más. Léelas despacio, sílaba por sílaba.",{t:"cards",x:[["🍅","to-ma-te"],["⚽","pe-lo-ta"],["🧳","ma-le-ta"]]})
],[B("Forma «sopa»",["so","pa"],["la","ti"],{t:"emo",x:"🍲"}),B("Forma «luna»",["lu","na"],["ma","so"],{t:"emo",x:"🌙"}),B("Forma «tomate»",["to","ma","te"],["pa","lu"],{t:"emo",x:"🍅"}),B("Forma «pelota»",["pe","lo","ta"],["su","mi"],{t:"emo",x:"⚽"}),C("¿Con qué sílaba empieza «sapo»?",["sa","so","pa"],{t:"emo",x:"🐸"}),C("¿Qué palabra es?",["pato","pala","lata"],{t:"emo",x:"🦆"}),C("¿Qué palabra es?",["lupa","luna","pala"],{t:"emo",x:"🔍"}),C("¿Qué sílaba falta en «ma__ta»?",["le","la","lo"],{t:"emo",x:"🧳"},"Es la palabra «maleta».")]),
L("e5","Sílabas con N, D y R",[
P("Con la N","na, ne, ni, no, nu: <b>nube, nido, mano, luna, nena</b>.",{t:"syl",x:["na","ne","ni","no","nu"]}),
P("Con la D","da, de, di, do, du: <b>dado, dedo, nido, todo, moneda</b>.",{t:"syl",x:["da","de","di","do","du"]}),
P("La R suena de dos formas","Al principio de la palabra la R suena <b>fuerte</b>: rosa, ratón, rana. En medio de la palabra suena <b>suave</b>: pera, loro, toro.",{t:"cards",x:[["🌹","rosa (fuerte)"],["🐸","rana (fuerte)"],["🍐","pera (suave)"],["🦜","loro (suave)"]]}),
P("La doble R","Para que la R suene fuerte <b>en medio</b> de la palabra escribimos dos: <b>rr</b>. Así escribimos perro, carro, burro y torre.",{t:"cards",x:[["🐕","pe-rro"],["🚗","ca-rro"],["🫏","bu-rro"]]})
],[B("Forma «nube»",["nu","be"],["no","da"],{t:"emo",x:"☁️"}),B("Forma «dado»",["da","do"],["de","nu"],{t:"emo",x:"🎲"}),C("¿Cómo se escribe?",["perro","pero","perrro"],{t:"emo",x:"🐕"},"En medio de la palabra, la R fuerte se escribe con dos."),C("¿Cómo se escribe?",["ratón","rratón","ratom"],{t:"emo",x:"🐭"},"Al principio basta una R para que suene fuerte."),C("¿Cómo se escribe?",["pera","perra","pena"],{t:"emo",x:"🍐"}),TF("En «rosa» la R suena fuerte.",true),TF("«Carro» se escribe con una sola R.",false),C("¿Qué palabra tiene la sílaba «ni»?",["nido","dado","nube"])]),
L("e6","Ca, que, qui, co, cu y ga, gue, gui, go, gu",[
P("La C y la Q","Para el sonido «k» escribimos: <b>ca, que, qui, co, cu</b>. Con la e y la i usamos <b>qu</b>: queso, quince.",{t:"syl",x:["ca","que","qui","co","cu"]}),
P("Palabras con c y qu","casa, coco, vaca, cuna, queso, mosquito.",{t:"cards",x:[["🏠","ca-sa"],["🥥","co-co"],["🐄","va-ca"],["🧀","que-so"]]}),
P("La G suave","Para el sonido suave de la g escribimos: <b>ga, gue, gui, go, gu</b>. Con la e y la i ponemos una <b>u</b> que no suena: guitarra, juguete.",{t:"syl",x:["ga","gue","gui","go","gu"]}),
P("Palabras con g","gato, gota, gusano, guitarra, lago, amigo.",{t:"cards",x:[["🐱","ga-to"],["🎸","gui-ta-rra"],["🐛","gu-sa-no"]]})
],[C("¿Cómo se escribe?",["queso","keso","cueso"],{t:"emo",x:"🧀"}),C("¿Cómo se escribe?",["casa","kasa","qasa"],{t:"emo",x:"🏠"}),C("¿Cómo se escribe?",["guitarra","gitarra","guitara"],{t:"emo",x:"🎸"}),B("Forma «gato»",["ga","to"],["go","ca"],{t:"emo",x:"🐱"}),B("Forma «vaca»",["va","ca"],["co","ga"],{t:"emo",x:"🐄"}),C("¿Qué palabra tiene la sílaba «qui»?",["mosquito","casa","coco"]),TF("«Gusano» empieza con la sílaba «gu».",true,{t:"emo",x:"🐛"})]),
L("e7","Ch, ll, ñ y letras que se parecen",[
P("La CH","Dos letras que hacen un solo sonido: <b>cha, che, chi, cho, chu</b>.",{t:"cards",x:[["🍫","cho-co-la-te"],["🌶️","chi-le"],["🥛","le-che"]]}),
P("La LL","<b>lla, lle, lli, llo, llu</b>: llave, pollito, lluvia, silla, estrella.",{t:"cards",x:[["🔑","lla-ve"],["🌧️","llu-via"],["⭐","es-tre-lla"]]}),
P("La Ñ","<b>ña, ñe, ñi, ño, ñu</b>: niño, piña, araña, uña, sueño.",{t:"cards",x:[["🍍","pi-ña"],["🕷️","a-ra-ña"],["🪅","pi-ña-ta"]]}),
P("Letras que suenan igual","La <b>b</b> y la <b>v</b> suenan igual: burro, vaca. La <b>y</b> y la <b>ll</b> también se parecen: yoyo, llave. Por eso hay que fijarse bien en cómo se escribe cada palabra.",{t:"cards",x:[["🫏","burro"],["🐄","vaca"],["🪀","yoyo"]]})
],[B("Forma «chile»",["chi","le"],["che","lla"],{t:"emo",x:"🌶️"}),B("Forma «llave»",["lla","ve"],["ya","be"],{t:"emo",x:"🔑"}),B("Forma «piña»",["pi","ña"],["na","ni"],{t:"emo",x:"🍍"}),C("¿Cómo se escribe?",["lluvia","yuvia","lluvía"],{t:"emo",x:"🌧️"}),C("¿Cómo se escribe?",["araña","arana","aranya"],{t:"emo",x:"🕷️"}),C("¿Cómo se escribe?",["vaca","vacca","baka"],{t:"emo",x:"🐄"}),C("¿Qué palabra tiene «ch»?",["coche","casa","queso"]),TF("La «ch» son dos letras que hacen un solo sonido.",true)]),
L("e8","Contamos sílabas",[
P("Aplaude las sílabas","Di la palabra despacio y da una palmada en cada golpe de voz. <b>Sol</b>: una palmada. <b>Ca-sa</b>: dos. <b>Pe-lo-ta</b>: tres. <b>Ma-ri-po-sa</b>: ¡cuatro!",{t:"word",x:"ma-ri-po-sa"}),
P("Palabras cortas y largas","Unas palabras son cortitas, como sol, mar, pan y luz. Otras son larguísimas: hi-po-pó-ta-mo tiene cinco sílabas.",{t:"cards",x:[["☀️","sol (1)"],["🏠","ca-sa (2)"],["🦋","ma-ri-po-sa (4)"],["🦛","hi-po-pó-ta-mo (5)"]]})
],[N("¿Cuántas sílabas tiene «casa»?",2,{t:"emo",x:"🏠"},"Da una palmada por cada golpe de voz."),N("¿Cuántas sílabas tiene «pan»?",1,{t:"emo",x:"🍞"}),N("¿Cuántas sílabas tiene «tomate»?",3,{t:"emo",x:"🍅"}),N("¿Cuántas sílabas tiene «mariposa»?",4,{t:"emo",x:"🦋"}),N("¿Cuántas sílabas tiene «zapato»?",3,{t:"emo",x:"👞"}),N("¿Cuántas sílabas tiene «chocolate»?",4,{t:"emo",x:"🍫"}),C("¿Cuál palabra es más larga?",["elefante","oso","sol"]),O("Ordena las sílabas de «zapato»",["za","pa","to"]),O("Ordena las sílabas de «mariposa»",["ma","ri","po","sa"])])
]},
{t:"Leer y escribir",ls:[
L("e9","La oración",[
P("Palabras que dicen una idea","Una <b>oración</b> es un grupo de palabras que dice una idea completa. Por ejemplo: <b>El gato toma leche.</b>",{t:"emo",x:"🐱🥛"}),
P("Mayúscula y punto","La oración siempre <b>empieza con mayúscula</b> y <b>termina con punto</b>. Entre palabra y palabra dejamos un espacio.",{t:"big",x:"<u>M</u>i perro corre<u>.</u>"}),
P("Preguntas y emociones","Para preguntar usamos signos de interrogación: <b>¿Cómo te llamas?</b> Para exclamar usamos signos de admiración: <b>¡Qué bonito!</b> En español se ponen al principio y al final.",{t:"big",x:"¿ ? &nbsp; ¡ !"})
],[O("Ordena la oración",["El","gato","toma","leche."]),O("Ordena la oración",["Mi","mamá","hace","tortillas."]),O("Ordena la oración",["Los","niños","juegan","futbol."]),C("¿Cuál está bien escrita?",["La luna brilla.","la luna brilla.","La luna brilla"],null,"Revisa la mayúscula del inicio y el punto final."),C("¿Cuál está bien escrita?",["¿Quieres jugar?","Quieres jugar?","¿Quieres jugar"]),C("¿Cuál es una oración completa?",["El perro ladra.","El perro","ladra perro el"]),TF("Una oración termina con punto.",true),C("¿Qué signos usamos para preguntar?",["¿ ?","¡ !",". ."])]),
L("e10","Nombres propios y comunes",[
P("Todo tiene nombre","Las palabras que nombran personas, animales, cosas y lugares se llaman <b>sustantivos</b>: niña, perro, árbol, escuela.",{t:"cards",x:[["👧","niña"],["🐕","perro"],["🌳","árbol"],["🏫","escuela"]]}),
P("Nombres propios","El nombre especial de una persona, mascota, ciudad o país es un <b>nombre propio</b> y se escribe con <b>mayúscula</b>: Lupita, Firulais, Puebla, México.",{t:"big",x:"Lupita · Puebla · México"}),
P("Uno o muchos","Si hay <b>uno</b> decimos <i>el gato</i>, <i>la flor</i>. Si hay <b>muchos</b> decimos <i>los gatos</i>, <i>las flores</i>. Casi siempre agregamos <b>s</b> o <b>es</b> al final.",{t:"cards",x:[["🐱","el gato → los gatos"],["🌸","la flor → las flores"]]})
],[C("¿Cuál está bien escrita?",["Mi perro se llama Fido.","Mi perro se llama fido.","mi perro se llama fido."],null,"Los nombres propios llevan mayúscula."),C("¿Cuál es un nombre propio?",["Monterrey","ciudad","casa"]),C("¿Cuál es un nombre propio?",["Sofía","niña","maestra"]),S2("¿Es nombre propio o común?",["Propio","Común"],[["Diego",0],["perro",1],["Oaxaca",0],["mesa",1],["México",0],["flor",1]]),C("Si hay muchos, ¿cómo se dice «el lápiz»?",["los lápices","las lápiz","los lápiz"]),C("Si hay muchas, ¿cómo se dice «la casa»?",["las casas","los casas","la casas"]),C("¿Qué palabra completa? «___ niños juegan»",["Los","La","El"])]),
L("e11","Rimas, trabalenguas y adivinanzas",[
P("Las rimas","Dos palabras <b>riman</b> cuando terminan con el mismo sonido: rat<b>ón</b> y bot<b>ón</b>, g<b>ato</b> y zap<b>ato</b>, l<b>una</b> y c<b>una</b>.",{t:"cards",x:[["🐭","ratón"],["🔘","botón"],["🌙","luna"],["🛏️","cuna"]]}),
P("Los trabalenguas","Son frases difíciles de decir rápido. Este es tradicional: <b>Tres tristes tigres tragaban trigo en un trigal.</b> ¡Dilo tres veces sin equivocarte!",{t:"emo",x:"🐯🐯🐯"}),
P("Las adivinanzas","Una adivinanza describe algo sin decir su nombre. Escucha esta adivinanza tradicional: <b>Blanca por dentro, verde por fuera; si quieres que te lo diga, espera.</b> ¿Ya sabes? ¡Es la pera! La pista está escondida en «espera».",{t:"emo",x:"🍐"}),
P("Inventa la tuya","Para inventar una adivinanza di cómo es la cosa: su color, su forma, para qué sirve. Ejemplo: <i>Tengo manecillas pero no tengo manos, tengo números pero no sé contar.</i> ¡Es el reloj!",{t:"emo",x:"⏰"})
],[C("¿Qué palabra rima con «ratón»?",["botón","gato","mesa"]),C("¿Qué palabra rima con «luna»?",["cuna","sol","pato"]),C("¿Qué palabra rima con «gato»?",["zapato","perro","casa"]),C("¿Qué palabra rima con «flor»?",["tambor","árbol","silla"]),C("Adivinanza: «Vuela sin alas, silba sin boca y no se ve.» ¿Qué es?",["El viento","El pájaro","La pelota"],{t:"emo",x:"🌬️"}),C("Adivinanza: «Soy amarillo y redondo, salgo de día y me escondo de noche.» ¿Qué es?",["El sol","La luna","Una estrella"]),TF("«Casa» y «taza» riman.",true,null,"Fíjate cómo terminan las dos.")]),
L("e12","Leemos un cuento: La semilla de Tomasa",[
P("Había una vez...","Tomasa vivía en un pueblo de Michoacán con su abuelo Chema. Un día, su abuelo le regaló una semilla de maíz muy pequeñita.",{t:"emo",x:"👧👴🌽"}),
P("Plantar con cuidado","Tomasa hizo un hoyito en la tierra, puso la semilla y la tapó. Todas las mañanas le echaba un poco de agua. «Paciencia», le decía el abuelo.",{t:"emo",x:"🕳️💧"}),
P("La primera hojita","Pasaron muchos días. Una mañana, Tomasa vio una hojita verde asomándose. ¡Gritó de alegría y corrió a contárselo al abuelo!",{t:"emo",x:"🌱"}),
P("La milpa crece","Con el sol y la lluvia, la planta creció más alta que Tomasa. Al final del verano dio elotes amarillos y jugosos.",{t:"emo",x:"🌽☀️🌧️"}),
P("Compartir","Tomasa y su abuelo cocinaron los elotes y los compartieron con los vecinos. Tomasa guardó algunas semillas para sembrar el próximo año. Fin.",{t:"emo",x:"🌽🤝"})
],[C("¿Cómo se llama la niña del cuento?",["Tomasa","Lupita","Chema"]),C("¿Quién le regaló la semilla?",["Su abuelo","Su maestra","Una vecina"]),C("¿De qué era la semilla?",["De maíz","De frijol","De naranja"]),C("¿Qué hacía Tomasa cada mañana?",["Le echaba agua","La sacaba de la tierra","Le cantaba"]),O("Ordena lo que pasó en el cuento",["El abuelo le regala la semilla.","Tomasa la planta.","Sale una hojita verde.","La planta da elotes.","Comparten con los vecinos."]),C("¿Qué le decía el abuelo?",["Paciencia","Corre","Duérmete"]),TF("Tomasa se comió todas las semillas.",false,null,"Lee otra vez el final del cuento."),C("¿Qué aprendemos del cuento?",["Que las cosas buenas necesitan paciencia y cuidado","Que no hay que regar las plantas","Que es mejor no compartir"])]),
L("e13","Textos que nos ayudan: el recado y la receta",[
P("El recado","Un <b>recado</b> es un mensaje corto para alguien. Tiene: <b>para quién es</b>, el <b>mensaje</b> y <b>quién lo escribe</b>.",{t:"pray",x:"Mamá:<br>Fui a la tienda con mi papá. Regresamos a las 5.<br>Te quiere, Mateo."}),
P("La receta","Una <b>receta</b> nos dice cómo preparar una comida. Tiene dos partes: los <b>ingredientes</b> (lo que necesitas) y los <b>pasos</b> (lo que haces, en orden).",{t:"cards",x:[["📝","Ingredientes"],["👣","Pasos en orden"]]}),
P("Receta: agua de jamaica","Ingredientes: flor de jamaica, agua y un poquito de azúcar. Pasos:",{t:"steps",x:["Pide a un adulto que hierva la jamaica con agua.","Espera a que se enfríe.","Cuela el agua.","Agrega más agua y un poquito de azúcar.","Sirve con hielos. ¡Salud!"]})
],[C("¿Para qué sirve un recado?",["Para dejar un mensaje a alguien","Para contar un cuento largo","Para cantar"]),C("¿Qué parte de la receta dice lo que necesitas?",["Los ingredientes","Los pasos","El título"]),C("¿Qué parte de la receta dice qué hacer?",["Los pasos","Los ingredientes","El dibujo"]),O("Ordena los pasos para lavarte los dientes",["Pon pasta en el cepillo.","Cepilla tus dientes.","Enjuaga tu boca.","Lava el cepillo."]),C("En este recado, ¿para quién es el mensaje?",["Para mamá","Para papá","Para la maestra"],{t:"pray",x:"Mamá:<br>Fui a la tienda con mi papá. Regresamos a las 5.<br>Te quiere, Mateo."}),TF("En una receta los pasos pueden ir en cualquier orden.",false)])
]}
]});
