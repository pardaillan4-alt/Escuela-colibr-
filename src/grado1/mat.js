/* ===== MATEMÁTICAS ===== */
SUBJ.push({id:"mat",n:"Matemáticas",campo:"Saberes y pensamiento científico",d:"Números hasta el 100, sumas y restas, figuras, medidas, tiempo y dinero.",units:[
{t:"Los números hasta el 20",ls:[
L("m1","Contamos del 0 al 10",[
P("Contar es decir un número por cada cosa","Toca cada manzana <b>una sola vez</b> y di un número: uno, dos, tres... El último número que dices es <b>cuántas hay</b>.",{t:"dots",n:5,s:"apple"}),
P("Los números del 1 al 10","Uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve y diez. Dilos en voz alta mientras los señalas con el dedo.",{t:"seq",x:[1,2,3,4,5,6,7,8,9,10]}),
P("El cero","Cuando no hay nada, decimos <b>cero</b>. Si la caja está vacía, hay 0 estrellas.",{t:"dots",n:0,s:"star"}),
P("La caja de diez","Acomodamos las cosas en filas de 5. Una fila llena son <b>5</b>. Dos filas llenas son <b>10</b>. Así contamos más rápido y no nos perdemos.",{t:"dots",n:8,s:"star"})
],[N("Si un plato no tiene ninguna galleta, ¿cuántas galletas hay?",0,null,"Cuando no hay nada usamos un número especial.")],[["cnt",6,10],["nname",3,10]]),
L("m2","Del 11 al 20",[
P("Diez y algo más","El <b>once</b> es 10 y 1 más. El <b>doce</b> es 10 y 2. El <b>trece</b> es 10 y 3. Primero llenamos una caja de diez y luego contamos los que sobran.",{t:"dots",n:13,s:"ball"}),
P("Los nombres del 11 al 20","Once, doce, trece, catorce, quince. Después se dicen con «dieci»: dieciséis, diecisiete, dieciocho, diecinueve... ¡y veinte!",{t:"seq",x:[11,12,13,14,15,16,17,18,19,20]}),
P("El 20 son dos cajas llenas","Cuando llenamos dos cajas de diez tenemos <b>veinte</b>.",{t:"dots",n:20,s:"flower"})
],[O("Ordena de menor a mayor",[11,13,16,19]),C("¿Cuántas cajas de diez llenas hay en el 20?",[2,1,10])],[["cnt20",5],["nname",3,20],["next",2,20]]),
L("m3","Mayor, menor e igual",[
P("¿Dónde hay más?","Cuando comparamos dos grupos, el que tiene más cosas es el <b>mayor</b>. El que tiene menos es el <b>menor</b>. Si tienen lo mismo, son <b>iguales</b>. Aquí 7 es mayor que 4.",{t:"two",a:7,b:4,s:"apple"}),
P("El cocodrilo hambriento","Los signos &gt; y &lt; son como la boca de un cocodrilo: <b>siempre se abre hacia el número más grande</b>, porque quiere comer más. 8 &gt; 5 se lee «ocho es mayor que cinco».",{t:"big",x:"8 &gt; 5"}),
P("El signo igual","El signo = dice que los dos lados valen lo mismo. 6 = 6 se lee «seis es igual a seis».",{t:"big",x:"6 = 6"}),
P("En la recta numérica","Los números van creciendo hacia la derecha. El que está más a la derecha es el mayor: 7 es mayor que 3.",{t:"line",a:0,b:10,m:[3,7]})
],[O("Ordena del más pequeño al más grande",[2,5,7,9]),O("Ordena del más grande al más pequeño",[18,12,9,4])],[["cmp",4,20],["cmpSym",4,20]]),
L("m4","Antes, después y entre",[
P("El número que sigue","Para saber qué número va <b>después</b>, cuenta uno más. Después del 14 viene el 15.",{t:"line",a:10,b:18,m:[14,15]}),
P("El número de antes","Para saber qué número va <b>antes</b>, cuenta uno hacia atrás. Antes del 20 está el 19.",{t:"line",a:12,b:20,m:[19,20]}),
P("El número de en medio","Entre el 6 y el 8 está el <b>7</b>. Es el que dices en medio cuando cuentas: seis, siete, ocho.",{t:"seq",x:[6,"?",8]})
],[O("Ordena estos números",[21,22,23,24,25]),N("¿Qué número sigue después del 29?",30,null,"Después del veintinueve empieza el treinta.")],[["next",3,30],["prev",3,30],["between",3,30]])
]},
{t:"Sumamos y restamos",ls:[
L("m5","Sumar hasta 10",[
P("Sumar es juntar","Tenemos 3 manzanas y nos dan 2 más. Las juntamos y contamos todo: ¡son 5! Eso es una <b>suma</b>.",{t:"add",a:3,b:2,s:"apple",s2:"apple"}),
P("Los signos + y =","El signo <b>+</b> se lee «más» y el signo <b>=</b> se lee «es igual a». 3 + 2 = 5 se lee «tres más dos es igual a cinco».",{t:"big",x:"3 + 2 = 5"}),
P("Contar hacia adelante","Para sumar 6 + 3 no tienes que empezar desde el 1. Guarda el 6 en tu cabeza y cuenta 3 más con los dedos: siete, ocho, nueve. ¡Son 9!",{t:"line",a:0,b:10,m:[6,9]}),
P("Parejas que suman 10","Estas parejas siempre hacen 10. ¡Apréndelas de memoria, te ayudarán muchísimo!",{t:"syl",x:["1 + 9","2 + 8","3 + 7","4 + 6","5 + 5"]})
],[TF("3 + 4 es igual a 7",true,{t:"add",a:3,b:4,s:"ball",s2:"ball"}),N("Tienes 4 globos y te regalan 4 más. ¿Cuántos globos tienes?",8,null,"Junta los dos grupos.")],[["add10",6],["make10",3]]),
L("m6","Restar hasta 10",[
P("Restar es quitar","En la pecera hay 6 peces. Se van 2. ¿Cuántos quedan? Tachamos los que se van y contamos los que se quedan: ¡quedan 4!",{t:"sub",a:6,b:2,s:"fish"}),
P("El signo menos","El signo <b>−</b> se lee «menos». 6 − 2 = 4 se lee «seis menos dos es igual a cuatro».",{t:"big",x:"6 − 2 = 4"}),
P("Contar hacia atrás","Para restar 8 − 3, empieza en el 8 y cuenta 3 hacia atrás: siete, seis, cinco. ¡Son 5!",{t:"line",a:0,b:10,m:[5,8]}),
P("La suma y la resta son familia","Si 4 + 3 = 7, entonces 7 − 3 = 4 y 7 − 4 = 3. Con tres números formas una familia de operaciones.",{t:"syl",x:["4 + 3 = 7","3 + 4 = 7","7 − 3 = 4","7 − 4 = 3"]})
],[TF("9 − 9 es igual a 0",true,null,"Si quitas todo, ¿cuánto queda?"),C("Si 5 + 3 = 8, ¿cuánto es 8 − 3?",[5,3,8],null,"Recuerda que la suma y la resta son familia.")],[["sub10",7]]),
L("m7","Sumas y restas hasta 20",[
P("Los dobles","Los dobles son sumar un número consigo mismo. Si te los sabes, sumas rapidísimo.",{t:"syl",x:["5 + 5 = 10","6 + 6 = 12","7 + 7 = 14","8 + 8 = 16","9 + 9 = 18"]}),
P("Completar el 10","Para sumar 9 + 4, pasa 1 del 4 al 9 para hacer 10. Te queda 10 + 3, ¡que es 13! La caja llena te ayuda a verlo.",{t:"dots",n:13,s:"star"}),
P("Restar en la recta","Para 15 − 6 da 6 saltos hacia atrás desde el 15: 14, 13, 12, 11, 10, 9. ¡Llegaste al 9!",{t:"line",a:5,b:16,m:[9,15]})
],[],[["add20",4],["sub20",4],["dbl",2]]),
L("m8","Problemas para pensar",[
P("Lee con calma","Un problema es una pequeña historia con números. Sigue estos pasos:",{t:"steps",x:["Lee la historia dos veces.","Busca los números.","Piensa: ¿se juntan cosas o se quitan cosas?","Haz la suma o la resta.","Revisa si tu respuesta tiene sentido."]}),
P("¿Juntar o quitar?","Si alguien <b>recibe, junta, compra o gana</b> cosas, sumamos. Si alguien <b>regala, pierde, se come o gasta</b>, restamos.",{t:"cards",x:[["+","recibe, junta, gana"],["−","regala, pierde, gasta"]]}),
P("Un ejemplo","Diego tenía 9 trompos y le regaló 3 a su primo. Diego se quedó con menos, así que restamos: 9 − 3 = 6. A Diego le quedan 6 trompos.",{t:"sub",a:9,b:3,s:"ball"})
],[],[["prob",8,20]])
]},
{t:"Los números hasta el 100",ls:[
L("m9","Decenas y unidades",[
P("Una decena son diez","Cuando juntamos 10 unidades formamos una <b>decena</b>. La dibujamos como una barra de 10 cuadritos.",{t:"blocks",d:1,u:0}),
P("Leer los bloques","Aquí hay 3 barras y 4 cuadritos: 3 decenas y 4 unidades. Contamos 10, 20, 30... y 31, 32, 33, 34. ¡Es el 34!",{t:"blocks",d:3,u:4}),
P("Cada lugar tiene un valor","En el 34, el <b>3</b> está en el lugar de las decenas y vale 30. El <b>4</b> está en el lugar de las unidades y vale 4.",{t:"cards",x:[["3","decenas = 30"],["4","unidades = 4"]]})
],[N("¿Cuántas unidades hay en una decena?",10)],[["pv",5],["pv2",4]]),
L("m10","Contamos de 2 en 2, de 5 en 5 y de 10 en 10",[
P("De 10 en 10","Diez, veinte, treinta, cuarenta, cincuenta, sesenta, setenta, ochenta, noventa, ¡cien!",{t:"seq",x:[10,20,30,40,50,60,70,80,90,100]}),
P("De 5 en 5","Como contar los dedos de cada mano: 5, 10, 15, 20, 25, 30.",{t:"seq",x:[5,10,15,20,25,30]}),
P("De 2 en 2","Como contar pares de calcetines: 2, 4, 6, 8, 10, 12.",{t:"seq",x:[2,4,6,8,10,12]}),
P("Los números hasta el 100","Después del 29 viene el 30 (treinta). Los demás se forman igual: treinta y uno, treinta y dos... hasta noventa y nueve. ¡Y luego el cien!",{t:"big",x:"31 · 47 · 58 · 99"})
],[O("Ordena contando de 10 en 10",[10,20,30,40,50])],[["skip",6],["tens",3],["nname",2,99]]),
L("m11","Sumas y restas hasta el 100",[
P("Sumar con decenas","Para sumar 23 + 14 escribe un número debajo del otro. Suma primero las unidades: 3 + 4 = 7. Luego las decenas: 2 + 1 = 3. ¡El resultado es 37!",{t:"vert",a:23,b:14,op:"+"}),
P("Restar con decenas","Para 58 − 23 resta las unidades: 8 − 3 = 5. Luego las decenas: 5 − 2 = 3. ¡Son 35!",{t:"vert",a:58,b:23,op:"−"}),
P("Con los bloques","También puedes juntar barras con barras y cuadritos con cuadritos. 37 son 3 barras y 7 cuadritos.",{t:"blocks",d:3,u:7})
],[],[["add100",5],["sub100",5]])
]},
{t:"Formas, medidas, tiempo y dinero",ls:[
L("m12","Figuras y cuerpos geométricos",[
P("Figuras planas","Las figuras planas se dibujan en el papel. Fíjate en sus lados y en sus esquinas.",{t:"shapes",x:["circulo","triangulo","cuadrado","rectangulo"]}),
P("¿Cómo son?","El <b>triángulo</b> tiene 3 lados. El <b>cuadrado</b> tiene 4 lados iguales. El <b>rectángulo</b> tiene 4 lados: 2 largos y 2 cortos. El <b>círculo</b> es redondo y no tiene esquinas. También hay óvalos y rombos.",{t:"shapes",x:["ovalo","rombo"]}),
P("Cuerpos geométricos","Los cuerpos ocupan lugar y los puedes tomar con la mano: un dado es un <b>cubo</b>, una pelota es una <b>esfera</b>, una lata es un <b>cilindro</b> y un cucurucho de helado es un <b>cono</b>.",{t:"shapes",x:["cubo","esfera","cilindro","cono"]})
],[C("¿Qué forma tiene una pelota?",["Esfera","Cubo","Cono"]),C("¿Qué forma tiene una lata de chiles?",["Cilindro","Esfera","Cubo"]),C("¿Qué forma tiene un dado?",["Cubo","Cilindro","Esfera"]),C("¿Qué figura no tiene esquinas?",["Círculo","Cuadrado","Triángulo"])],[["shape",4],["sides",3]]),
L("m13","Medimos",[
P("Largo y corto","Comparamos cosas: un lápiz nuevo es <b>más largo</b> que una crayola. Un gusano es <b>más corto</b> que una serpiente.",{t:"emo",x:"✏️ 🖍️"}),
P("Alto y bajo, pesado y ligero","Una jirafa es más <b>alta</b> que un perro. Una sandía es más <b>pesada</b> que una pluma, que es muy <b>ligera</b>.",{t:"emo",x:"🦒 🐕 🍉 🪶"}),
P("Medir con el cuerpo","Podemos medir con <b>cuartas</b> (la mano abierta), con <b>pasos</b> o con <b>clips</b>. La mesa puede medir 6 de tus cuartas. Pero la cuarta de papá es más grande que la tuya, ¡por eso a él le da otro número!",{t:"emo",x:"✋ 👣 📎"}),
P("La regla","Para que todos midamos igual usamos la <b>regla</b>, que mide en <b>centímetros</b>. Tu dedo meñique mide más o menos 1 centímetro de ancho.",{t:"emo",x:"📏"})
],[C("¿Qué es más pesado?",["Un elefante","Un ratón","Una hoja"],{t:"emo",x:"🐘 🐭 🍃"}),C("¿Qué es más largo?",["Un autobús","Un coche de juguete","Una canica"]),C("¿Qué es más ligero?",["Una pluma","Un ladrillo","Una sandía"]),TF("Si mides la mesa con tu cuarta y papá con la suya, les sale el mismo número.",false,null,"Piensa si sus manos son del mismo tamaño."),C("¿Con qué medimos para que a todos nos salga igual?",["Con una regla","Con la mano","Con los pies"]),C("¿Quién es más alto?",["Una jirafa","Un gato","Una gallina"],{t:"emo",x:"🦒 🐈 🐔"}),O("Ordena del más corto al más largo",["Hormiga","Gato","Caballo","Ballena"])]),
L("m14","El tiempo: días, meses y la hora",[
P("Los días de la semana","La semana tiene <b>7 días</b>:",{t:"syl",x:["lunes","martes","miércoles","jueves","viernes","sábado","domingo"]}),
P("Los meses del año","El año tiene <b>12 meses</b>:",{t:"syl",x:["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"]}),
P("Mañana, tarde y noche","En la <b>mañana</b> desayunamos y estudiamos. En la <b>tarde</b> comemos y jugamos. En la <b>noche</b> cenamos, rezamos y dormimos.",{t:"emo",x:"🌅 ☀️ 🌙"}),
P("El reloj","La manecilla <b>corta</b> marca la hora. La manecilla <b>larga</b> marca los minutos. Cuando la larga apunta al 12 decimos «en punto». Este reloj marca las 3 en punto.",{t:"clock",h:3,m:0}),
P("Y media","Cuando la manecilla larga apunta al 6, ya pasó media hora. Este reloj marca las 7 y media.",{t:"clock",h:7,m:30})
],[O("Ordena los días de la semana",["lunes","martes","miércoles","jueves","viernes"]),N("¿Cuántos días tiene una semana?",7),N("¿Cuántos meses tiene un año?",12),C("¿Qué día va después del viernes?",["Sábado","Jueves","Domingo"]),C("¿Qué mes va después de diciembre?",["Enero","Noviembre","Febrero"],null,"Cuando termina el año, empieza otra vez."),O("Ordena los meses",["enero","febrero","marzo","abril"])],[["clock",4]]),
L("m15","El dinero",[
P("Las monedas de México","En México usamos <b>pesos</b>. Hay monedas de 1, 2, 5 y 10 pesos. Mientras más grande es la moneda, más vale.",{t:"coins",x:[1,2,5,10]}),
P("También hay billetes","El billete de menor valor es el de 20 pesos. También hay de 50, 100, 200, 500 y 1000 pesos.",{t:"bill",v:20}),
P("Contar dinero","Para saber cuánto dinero hay, empieza por la moneda que vale más y ve sumando: 10, 15, 17, 18. ¡Hay 18 pesos!",{t:"coins",x:[10,5,2,1]}),
P("Pagar y recibir cambio","Si una paleta cuesta 7 pesos y pagas con una moneda de 10, te regresan <b>3 pesos de cambio</b>, porque 10 − 7 = 3.",{t:"coins",x:[10]})
],[C("¿Qué moneda vale más?",["$10","$5","$2"]),N("Un chicle cuesta 2 pesos y una paleta 5 pesos. ¿Cuánto pagas por los dos?",7,null,"Junta los dos precios."),N("Pagas un elote de 8 pesos con una moneda de 10. ¿Cuánto te dan de cambio?",2,null,"Resta lo que cuesta a lo que pagaste."),C("¿Cuántas monedas de $5 necesitas para tener $10?",["2","5","10"])],[["coins",4]]),
L("m16","Tablas y pictogramas",[
P("¿Qué es un pictograma?","Un pictograma usa dibujos para mostrar cuántas cosas hay. Aquí vemos la fruta favorita de los niños de un salón.",{t:"pict",rows:[["🍎",4,"Manzana"],["🍌",6,"Plátano"],["🥭",3,"Mango"]]}),
P("Leer el pictograma","Contamos los dibujos de cada fila. El plátano tiene 6: ¡es la fruta favorita! El mango tiene menos, solo 3.",{t:"cards",x:[["🍎","Manzana: 4"],["🍌","Plátano: 6"],["🥭","Mango: 3"]]}),
P("Hacer una encuesta","Tú también puedes preguntar a tu familia «¿cuál es tu color favorito?», hacer una rayita por cada respuesta y luego dibujar tu propio pictograma.",{t:"emo",x:"📝✏️"})
],[N("¿Cuántos niños tienen perro?",5,{t:"pict",rows:[["🐶",5,"Perro"],["🐱",3,"Gato"],["🐟",2,"Pez"]]}),C("¿Cuál mascota tienen más niños?",["Perro","Gato","Pez"],{t:"pict",rows:[["🐶",5,"Perro"],["🐱",3,"Gato"],["🐟",2,"Pez"]]}),C("¿Cuál mascota tienen menos niños?",["Pez","Gato","Perro"],{t:"pict",rows:[["🐶",5,"Perro"],["🐱",3,"Gato"],["🐟",2,"Pez"]]}),N("¿Cuántos niños tienen gato o pez en total?",5,{t:"pict",rows:[["🐶",5,"Perro"],["🐱",3,"Gato"],["🐟",2,"Pez"]]},"Suma los gatos y los peces."),N("¿Cuántos niños más tienen perro que gato?",2,{t:"pict",rows:[["🐶",5,"Perro"],["🐱",3,"Gato"],["🐟",2,"Pez"]]},"Resta los gatos a los perros."),N("Juguete favorito: ¿cuántos votos tuvo la pelota?",7,{t:"pict",rows:[["🪀",4,"Yoyo"],["⚽",7,"Pelota"],["🧸",2,"Peluche"]]}),N("Juguete favorito: ¿cuántos votos hubo en total?",13,{t:"pict",rows:[["🪀",4,"Yoyo"],["⚽",7,"Pelota"],["🧸",2,"Peluche"]]},"Suma los votos de las tres filas.")])
]}
]});
