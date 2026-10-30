/* ===== 2.º MATEMÁTICAS ===== */
SUBJ.push({id:"2mat",c:"mat",g:2,n:"Matemáticas",campo:"Saberes y pensamiento científico",d:"Números hasta el 1000, sumas que llevan, restas que piden prestado, multiplicar, repartir, fracciones, medidas y datos.",units:[
{t:"Los números hasta el 1000",ls:[
L("2m1","Las centenas",[
P("Diez decenas forman una centena","Ya sabes que 10 unidades forman una decena. Ahora: <b>10 decenas forman una centena</b>, que vale 100. La dibujamos como una placa de 100 cuadritos.",{t:"blocks3",c:1,d:0,u:0}),
P("Centenas, decenas y unidades","El número <b>243</b> tiene 2 centenas (200), 4 decenas (40) y 3 unidades (3). 200 + 40 + 3 = 243.",{t:"blocks3",c:2,d:4,u:3}),
P("Leer números grandes","100 cien, 200 doscientos, 300 trescientos, 400 cuatrocientos, 500 quinientos, 600 seiscientos, 700 setecientos, 800 ochocientos, 900 novecientos. Después del 999 viene el <b>1000</b>: mil.",{t:"seq",x:[100,200,300,400,500,600,700,800,900,1000]}),
F("Cien ovejas y una perdida","Jesús contó que un pastor tenía <b>100 ovejas</b>: una centena completa. Cuando se le perdió una, dejó las 99 para buscarla. Para Dios no somos un número más: cada uno es importante.",{t:"big",x:"100 − 1 = 99"})
],[N("¿Cuántas decenas forman una centena?",10),N("¿Cuántas ovejas le quedaron al pastor cuando se le perdió una de sus 100?",99)],[["pv3",4],["pvw",3],["pvd",3],["nname3",2]]),
L("2m2","Comparar y ordenar hasta el 1000",[
P("Primero las centenas","Para comparar 452 y 389 miramos primero las <b>centenas</b>: 4 es mayor que 3, así que 452 &gt; 389.",{t:"big",x:"452 &gt; 389"}),
P("Si las centenas son iguales","Entre 527 y 561, las centenas son iguales (5). Miramos las <b>decenas</b>: 2 es menor que 6. Entonces 527 &lt; 561.",{t:"big",x:"527 &lt; 561"}),
P("Contar de 100 en 100 y de 50 en 50","100, 200, 300... y 50, 100, 150, 200, 250. Así contamos rápido números grandes.",{t:"seq",x:[50,100,150,200,250,300]}),
F("Los primeros lugares","Jesús dijo: «Los últimos serán los primeros y los primeros serán los últimos». En el Reino de Dios no importa quién llega primero, sino quién ama más.",{t:"emo",x:"🥇➡️❤️"})
],[O("Ordena de menor a mayor",[128,305,560,901]),O("Ordena de mayor a menor",[870,708,487,78]),C("Según Jesús, ¿qué importa en el Reino de Dios?",["Amar más","Llegar primero","Tener más cosas"])],[["cmp1000",5],["seq3",4],["cmpSym",2,99]])
]},
{t:"Sumamos y restamos",ls:[
L("2m3","Sumas que llevan",[
P("Cuando las unidades pasan de 10","Para 38 + 25: las unidades 8 + 5 = <b>13</b>. Escribimos el 3 y <b>llevamos 1 decena</b> a la columna de las decenas.",{t:"vert",a:38,b:25,op:"+"}),
P("Sumamos las decenas","Ahora las decenas: 3 + 2 = 5, más la que llevamos = <b>6</b>. El resultado es 63.",{t:"steps",x:["Suma las unidades.","Si te da 10 o más, escribe las unidades y lleva 1 decena.","Suma las decenas y no olvides la que llevas."]}),
F("Sumar para ayudar","Cuando la parroquia junta víveres, alguien tiene que sumar. Si llegan 47 latas de frijol y 36 de atún, son 83 latas para las familias que lo necesitan. ¡Las matemáticas también sirven a la caridad!",{t:"vert",a:47,b:36,op:"+"})
],[N("La parroquia recibió 47 latas de frijol y 36 de atún. ¿Cuántas latas son?",83,{t:"vert",a:47,b:36,op:"+",hide:1})],[["add2r",9],["add3",2]]),
L("2m4","Restas que piden prestado",[
P("Cuando arriba hay menos","Para 52 − 17: arriba hay 2 unidades y debemos quitar 7. ¡No alcanza! Entonces <b>pedimos prestada una decena</b>: el 5 se vuelve 4 y el 2 se vuelve 12.",{t:"vert",a:52,b:17,op:"−"}),
P("Ahora sí restamos","12 − 7 = 5 unidades. 4 − 1 = 3 decenas. El resultado es <b>35</b>. Comprueba sumando: 35 + 17 = 52. ¡Correcto!",{t:"steps",x:["Mira las unidades.","Si arriba hay menos, pide una decena prestada.","Resta unidades y luego decenas.","Comprueba con una suma."]}),
F("Dar sin que lo sepa tu izquierda","Jesús dijo que cuando ayudemos a alguien, no lo presumamos: «que tu mano izquierda no sepa lo que hace la derecha». Restarle a lo nuestro para darlo a otro, en secreto, alegra el corazón de Dios.",{t:"emo",x:"🤲"})
],[N("Tenías 52 pesos y diste 17 en la colecta. ¿Cuánto te quedó?",35,{t:"vert",a:52,b:17,op:"−",hide:1}),C("Según Jesús, cuando ayudamos debemos...",["Hacerlo en secreto, sin presumir","Contárselo a todos","Pedir un premio"])],[["sub2r",9]]),
L("2m5","Problemas de suma y resta",[
P("Lee, piensa, resuelve","Antes de hacer la operación, pregúntate: ¿se junta, se agrega, se quita o se compara?",{t:"cards",x:[["+","juntar, agregar"],["−","quitar, comparar, ¿cuánto falta?"]]}),
P("Problemas de dos pasos","«Tenía $80. Gasté $25 en fruta y $15 en pan.» Primero resto 80 − 25 = 55, y luego 55 − 15 = <b>40</b>.",{t:"steps",x:["80 − 25 = 55","55 − 15 = 40","Me quedaron $40."]}),
F("La multiplicación de los panes","Jesús dio de comer a <b>5000 hombres</b>, sin contar mujeres y niños, con solo 5 panes y 2 peces. ¡Y sobraron 12 canastas! Dios no hace cuentas como nosotros: cuando compartimos, alcanza para todos.",{t:"emo",x:"🍞🐟🧺"})
],[N("Jesús dio de comer con 5 panes y 2 peces. ¿Cuántos alimentos eran?",7),N("¿Cuántas canastas sobraron?",12)],[["prob2",10]])
]},
{t:"Multiplicar y repartir",ls:[
L("2m6","Multiplicar es sumar grupos iguales",[
P("Grupos iguales","Hay 3 platos con 4 manzanas cada uno. Podemos sumar 4 + 4 + 4 = 12, o decirlo más corto: <b>3 veces 4</b>, es decir, <b>3 × 4 = 12</b>.",{t:"arr",r:3,c:4,s:"apple"}),
P("El signo por","El signo <b>×</b> se lee «por». 3 × 4 = 12 se lee «tres por cuatro es igual a doce».",{t:"big",x:"3 × 4 = 12"}),
P("Los arreglos","Cuando acomodamos cosas en filas y columnas iguales formamos un <b>arreglo</b>. Filas × columnas = total.",{t:"arr",r:2,c:5,s:"star"}),
F("Dos por dos","Jesús envió a sus discípulos a predicar <b>de dos en dos</b>. Mandó a 72 discípulos: 36 parejas. Nadie va solo cuando sirve a Dios: siempre tenemos hermanos en la fe.",{t:"emo",x:"🚶🚶 🚶🚶 🚶🚶"})
],[C("¿Cómo envió Jesús a sus discípulos?",["De dos en dos","Uno por uno","Todos juntos"])],[["multRep",4],["arrQ",5]]),
L("2m7","Las tablas del 2, 5 y 10",[
P("La tabla del 2","Es contar de 2 en 2: 2, 4, 6, 8, 10, 12, 14, 16, 18, 20. ¡Son los dobles!",{t:"seq",x:[2,4,6,8,10,12,14,16,18,20]}),
P("La tabla del 5","Como las manos: 5, 10, 15, 20, 25, 30, 35, 40, 45, 50. Siempre terminan en 5 o en 0.",{t:"seq",x:[5,10,15,20,25,30,35,40,45,50]}),
P("La tabla del 10","¡La más fácil! Al número le ponemos un 0: 10 × 4 = 40, 10 × 7 = 70.",{t:"seq",x:[10,20,30,40,50,60,70,80,90,100]}),
F("Las cinco decenas del rosario","El rosario tiene <b>5 decenas</b>: 5 × 10 = 50 Ave Marías. Y hay 4 tipos de misterios (gozosos, luminosos, dolorosos y gloriosos): 4 × 5 = 20 misterios.",{t:"blocks",d:5,u:0})
],[N("5 decenas del rosario: 5 × 10 = ?",50,{t:"blocks",d:5,u:0}),N("4 tipos de misterios con 5 misterios cada uno: 4 × 5 = ?",20)],[["mult",10]]),
L("2m8","Las tablas del 3 y del 4",[
P("La tabla del 3","3, 6, 9, 12, 15, 18, 21, 24, 27, 30. Cuéntala dando 3 saltitos en la recta.",{t:"seq",x:[3,6,9,12,15,18,21,24,27,30]}),
P("La tabla del 4","4, 8, 12, 16, 20, 24, 28, 32, 36, 40. ¡Es el doble de la tabla del 2!",{t:"seq",x:[4,8,12,16,20,24,28,32,36,40]}),
P("El orden no importa","3 × 4 da lo mismo que 4 × 3: 12. Si giras el arreglo, ¡sigue teniendo las mismas cosas!",{t:"arr",r:4,c:3,s:"ball"}),
F("Tres veces","Pedro negó a Jesús <b>tres veces</b>. Después de resucitar, Jesús le preguntó <b>tres veces</b>: «¿Me amas?», y tres veces Pedro le dijo que sí. Jesús siempre nos da otra oportunidad.",{t:"emo",x:"❤️❤️❤️"})
],[N("¿Cuántas veces le preguntó Jesús a Pedro «¿Me amas?»",3),N("Jesús preguntó 3 veces y Pedro respondió 3 veces. 3 × 2 = ?",6)],[["mult",10]]),
L("2m9","Repartir en partes iguales",[
P("Repartir","Tenemos 12 galletas para 3 niños. Damos una a cada quien, y otra, y otra... hasta que se acaban. ¡A cada uno le tocan <b>4</b>!",{t:"share",g:3,e:4,s:"star"}),
P("Repartir y multiplicar son familia","Si 3 × 4 = 12, entonces 12 repartido entre 3 da 4. Una operación ayuda a comprobar la otra.",{t:"big",x:"3 × 4 = 12"}),
F("Los primeros cristianos","En los Hechos de los Apóstoles leemos que los primeros cristianos <b>compartían todo</b> y lo repartían según lo que cada uno necesitaba. Por eso nadie pasaba necesidad.",{t:"emo",x:"🤝🍞"})
],[C("¿Cómo vivían los primeros cristianos?",["Compartían todo","Cada uno guardaba lo suyo","Se peleaban"])],[["share",8],["half",3]])
]},
{t:"Fracciones, medidas y datos",ls:[
L("2m10","Medios y cuartos",[
P("Partes iguales","Si partimos una tortilla en <b>2 partes iguales</b>, cada parte es <b>un medio</b>. Las dos mitades forman el entero.",{t:"frac",n:2,k:1,sh:"circle"}),
P("Cuartos","Si la partimos en <b>4 partes iguales</b>, cada una es <b>un cuarto</b>. Tres partes son tres cuartos.",{t:"frac",n:4,k:3,sh:"circle"}),
P("¡Deben ser iguales!","Si las partes no son del mismo tamaño, no son medios ni cuartos. Por eso al repartir un pastel cuidamos que sean iguales: es lo justo.",{t:"frac",n:4,k:1,sh:"rect"}),
F("Partir el pan","En la Misa, el sacerdote <b>parte la Hostia</b>, como Jesús en la Última Cena. Los discípulos de Emaús reconocieron a Jesús resucitado <b>al partir el pan</b>.",{t:"chalice"})
],[C("¿Cuándo reconocieron a Jesús los discípulos de Emaús?",["Al partir el pan","Al verlo caminar","Al oírlo cantar"])],[["frac",8],["half",3]]),
L("2m11","Medimos longitudes: el metro y el centímetro",[
P("El centímetro","El <b>centímetro</b> (cm) es pequeñito, más o menos el ancho de tu dedo meñique. Con la regla medimos cosas cortas: un lápiz, una hoja.",{t:"ruler",cm:9}),
P("Cómo usar la regla","Pon el <b>0</b> de la regla en una punta del objeto y fíjate en qué número termina la otra punta.",{t:"steps",x:["Pon el objeto junto a la regla.","Alinea una punta con el 0.","Lee el número donde termina."]}),
P("El metro","Un <b>metro</b> (m) son 100 centímetros: más o menos un paso grande de un adulto. Con el metro medimos el salón, la puerta o la altura de una persona.",{t:"emo",x:"📏🚪"}),
F("El arca de Noé","Dios le dio a Noé las medidas del arca: <b>300 codos</b> de largo. Un codo es lo que mide el brazo desde el codo hasta la punta de los dedos. Noé obedeció y midió con cuidado.",{t:"emo",x:"🚢🦒🐘"})
],[N("¿Cuántos centímetros tiene un metro?",100),C("¿Con qué medirías el largo de un lápiz?",["Con centímetros","Con kilómetros","Con litros"]),C("¿Cuántos codos de largo medía el arca de Noé?",["300","3","3000"])],[["ruler",7]]),
L("2m12","Peso y capacidad: kilo y litro",[
P("El kilogramo","Para saber cuánto <b>pesa</b> algo usamos el <b>kilogramo</b> (kg). Un kilo de tortillas, un kilo de frijol. La báscula nos dice el peso.",{t:"emo",x:"⚖️🫓"}),
P("El litro","Para saber cuánto <b>líquido cabe</b> en un recipiente usamos el <b>litro</b> (l). Una botella de leche tiene 1 litro. Medio litro es la mitad.",{t:"emo",x:"🥛🫙"}),
F("La viuda de Sarepta","El profeta Elías le pidió pan a una viuda pobre que solo tenía un poco de harina y aceite. Ella compartió, y Dios hizo que su <b>harina</b> y su <b>aceite</b> no se acabaran nunca mientras duró el hambre.",{t:"emo",x:"🫙🫒"})
],[C("¿Con qué medimos cuánto pesa algo?",["Kilogramos","Litros","Centímetros"]),C("¿Con qué medimos la leche?",["Litros","Metros","Kilómetros"]),C("¿Qué pesa más: un kilo de algodón o un kilo de piedras?",["Pesan lo mismo","El algodón","Las piedras"],null,"Los dos pesan un kilo."),N("¿Cuántos medios litros hay en 1 litro?",2),C("¿Qué no se le acabó a la viuda de Sarepta?",["La harina y el aceite","El agua y la sal","El dinero"]),C("¿Qué es más pesado?",["Un costal de maíz","Una pluma","Una hoja de papel"])]),
L("2m13","La hora y el calendario",[
P("Y cuarto, y media, menos cuarto","Si la manecilla larga apunta al <b>3</b>: «y cuarto». Al <b>6</b>: «y media». Al <b>9</b>: «menos cuarto», porque falta un cuarto de hora para la siguiente. Este reloj marca las 4 y cuarto.",{t:"clock",h:4,m:15}),
P("Una hora tiene 60 minutos","Un día tiene <b>24 horas</b>. Una hora tiene <b>60 minutos</b>. Media hora son 30 minutos y un cuarto de hora son 15.",{t:"cards",x:[["⏰","1 hora = 60 min"],["◐","media = 30 min"],["◔","cuarto = 15 min"]]}),
P("El calendario","El año tiene <b>365 días</b> y 12 meses. Algunos meses tienen 31 días, otros 30, y febrero tiene 28 (29 en año bisiesto).",{t:"emo",x:"📅"}),
F("Santificar el tiempo","La Iglesia nos invita a dedicar a Dios momentos del día: al despertar, a las 12 con el <b>Ángelus</b>, antes de comer y antes de dormir. Y el domingo es el día de Dios.",{t:"clock",h:12,m:0})
],[N("¿Cuántos minutos tiene una hora?",60),N("¿Cuántos minutos son media hora?",30),N("¿Cuántas horas tiene un día?",24),N("¿Cuántos meses tiene el año?",12),C("¿A qué hora rezamos el Ángelus del mediodía?",["A las 12","A las 3","A las 7"])],[["clock2",6]]),
L("2m14","El dinero",[
P("Billetes de México","Además de las monedas tenemos billetes de <b>$20, $50, $100, $200, $500 y $1000</b>.",{t:"money",b:[20,50,100],x:[]}),
P("Contar dinero","Suma primero los billetes, del mayor al menor, y después las monedas. $50 + $20 + $10 + $5 = $85.",{t:"money",b:[50,20],x:[10,5]}),
P("El cambio","Si compras algo de $36 y pagas con $50, te deben regresar <b>$14</b>: 50 − 36 = 14. Siempre revisa tu cambio.",{t:"bill",v:50}),
F("Los talentos","Jesús contó la parábola de los <b>talentos</b>: un señor dejó dinero a sus siervos. Los que lo hicieron crecer fueron alabados. Dios nos dio talentos (dones) para hacerlos crecer y servir, no para esconderlos.",{t:"emo",x:"🪙✨"})
],[C("En la parábola de los talentos, ¿qué debemos hacer con nuestros dones?",["Hacerlos crecer para servir","Esconderlos","Tirarlos"])],[["money2",5],["change",4]]),
L("2m15","Figuras, cuerpos y simetría",[
P("Lados y vértices","Las esquinas de una figura se llaman <b>vértices</b>. El triángulo tiene 3 lados y 3 vértices; el cuadrado, 4 y 4; el pentágono, 5 y 5; el hexágono, 6 y 6.",{t:"shapes",x:["triangulo","cuadrado","pentagono","hexagono"]}),
P("Caras de los cuerpos","Las partes planas de un cuerpo se llaman <b>caras</b>. El cubo tiene 6 caras cuadradas. Un dado es un cubo.",{t:"shape",s:"cubo"}),
P("La simetría","Una figura es <b>simétrica</b> si al doblarla por la mitad las dos partes quedan iguales, como una mariposa o una hoja.",{t:"emo",x:"🦋🍃"}),
F("La cruz y la simetría","La <b>cruz</b> es simétrica: si la doblas por la mitad, sus brazos coinciden. Las catedrales y sus vitrales están llenos de simetría, porque los artistas querían mostrar el orden y la belleza de Dios.",{t:"emo",x:"✝️⛪"})
],[N("¿Cuántas caras tiene un cubo?",6,{t:"shape",s:"cubo"}),N("¿Cuántos vértices tiene un triángulo?",3,{t:"shape",s:"triangulo"}),N("¿Cuántos vértices tiene un hexágono?",6,{t:"shape",s:"hexagono"}),C("¿Qué es simétrico?",["Una mariposa","Una piedra cualquiera","Un garabato"]),TF("La cruz es una figura simétrica.",true)],[["sides",3]]),
L("2m16","Tablas y gráficas de barras",[
P("La gráfica de barras","Una <b>gráfica de barras</b> muestra cuántos hay de cada cosa. Mientras más larga la barra, más hay. Aquí vemos los niños que fueron a catecismo cada día.",{t:"bars",rows:[["Lunes",8],["Miércoles",12],["Sábado",20]]}),
P("Leer la gráfica","El sábado fueron más niños: 20. El lunes fueron menos: 8. Del lunes al sábado hubo 12 niños más (20 − 8).",{t:"cards",x:[["📈","más: sábado"],["📉","menos: lunes"]]}),
F("Una encuesta de virtudes","Pregunta en tu familia: «¿Qué virtud quieres practicar este mes?» Haz una gráfica con las respuestas. ¡Y luego ayúdense a cumplirla!",{t:"bars",rows:[["Paciencia",3],["Obediencia",2],["Generosidad",4]]})
],[N("¿Cuántos niños fueron el miércoles?",12,{t:"bars",rows:[["Lunes",8],["Miércoles",12],["Sábado",20]]}),C("¿Qué día fueron más niños?",["Sábado","Lunes","Miércoles"],{t:"bars",rows:[["Lunes",8],["Miércoles",12],["Sábado",20]]}),N("¿Cuántos niños fueron en total los tres días?",40,{t:"bars",rows:[["Lunes",8],["Miércoles",12],["Sábado",20]]}),N("¿Cuántos niños más fueron el sábado que el miércoles?",8,{t:"bars",rows:[["Lunes",8],["Miércoles",12],["Sábado",20]]}),C("¿Qué virtud eligieron más personas?",["Generosidad","Paciencia","Obediencia"],{t:"bars",rows:[["Paciencia",3],["Obediencia",2],["Generosidad",4]]}),N("¿Cuántas personas votaron en total?",9,{t:"bars",rows:[["Paciencia",3],["Obediencia",2],["Generosidad",4]]})])
]}
]});
