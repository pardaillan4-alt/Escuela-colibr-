/* ========= Biblioteca: cuentos con comprensión lectora y fluidez (palabras por minuto) ========= */
SICON.lec=`<svg viewBox="0 0 40 40"><path d="M4 9c6-2 11-1 16 3v22c-5-4-10-5-16-3z" fill="currentColor"/><path d="M36 9c-6-2-11-1-16 3v22c5-4 10-5 16-3z" fill="currentColor" opacity=".65"/></svg>`;
/* Referencias de la SEP (Estándares de habilidad lectora): palabras por minuto al final del grado */
const PPM={1:[35,59],2:[60,84],3:[85,99]};
const nWords=t=>strip(t).split(/\s+/).filter(w=>/[\wáéíóúñü]/i.test(w)).length;
function STORY(id,g,t,pages,map,fe,q){const learn=pages.map(([ic,txt],i)=>P(i?t+" ("+(i+1)+")":t,txt,{t:"art",x:[[ic,""]]}));
 learn.push(F("¿Qué nos enseña?",fe[0],{t:"art",x:[[fe[1],""]]}));
 learn.push(I("Mapa del cuento","steps",[["book","Inicio",map[0]],["star","Desarrollo",map[1]],["heart","Final",map[2]]],fe[2]));
 const all=pages.map(p=>p[1]).join(" ");
 learn.push(P("Lee en voz alta","",{t:"flu",id,g,w:all}));
 return L(id,t,learn,q)}
const LEC=[
/* ---------- 1.º ---------- */
[1,[
STORY("1l1",1,"El colibrí y la flor",[
 ["bird","Un colibrí vivía en un jardín. Era pequeño y verde. Volaba muy rápido de flor en flor."],
 ["flower","Un día vio una flor triste. No tenía agua. El colibrí llevó gotas de rocío en su pico, una y otra vez."],
 ["sun","Al día siguiente, la flor abrió sus pétalos rojos. ¡Gracias, amigo!, le dijo. El colibrí dio gracias a Dios por el jardín."]],
 ["Un colibrí vive en un jardín.","Ve una flor sin agua y le lleva rocío.","La flor se abre y los dos dan gracias."],
 ["El colibrí ayudó aunque era pequeño. Dios nos pide cuidar su creación y ayudar con lo que tenemos, aunque sea poco.","bird","Pequeño, pero con un gran corazón."],
 [C("¿Dónde vivía el colibrí?",["En un jardín","En el mar","En una cueva"]),C("¿Cómo estaba la flor?",["Triste, sin agua","Muy feliz","Dormida"]),C("¿Qué le llevó el colibrí a la flor?",["Gotas de rocío","Pan","Tierra"]),C("¿De qué color eran los pétalos?",["Rojos","Azules","Negros"]),O("Ordena el cuento",["El colibrí ve una flor triste.","Le lleva gotas de rocío.","La flor abre sus pétalos."]),C("¿A quién dio gracias el colibrí?",["A Dios","Al sol","A nadie"])]),
STORY("1l2",1,"Noé y el arca",[
 ["ark","Noé era un hombre bueno que amaba a Dios. Dios le dijo: «Haz un barco muy grande».  Noé obedeció."],
 ["sheep","Noé subió al arca con su familia y con animales de dos en dos: ovejas, leones, aves y muchos más."],
 ["rain","Llovió muchos días. El arca flotó sobre el agua. Dios cuidaba a todos."],
 ["rainbow","Al fin salió el sol. Una paloma trajo una rama de olivo. En el cielo apareció un arcoíris: era la promesa de Dios."]],
 ["Dios le pide a Noé un barco.","Suben los animales y llueve mucho.","Sale el arcoíris, la promesa de Dios."],
 ["Noé confió en Dios y obedeció. Cuando obedecemos a Dios, Él nos cuida.","rainbow","Dios siempre cumple sus promesas."],
 [C("¿Qué le pidió Dios a Noé?",["Hacer un barco grande","Hacer una casa","Plantar un árbol"]),C("¿Cómo subieron los animales?",["De dos en dos","De uno en uno","Todos juntos corriendo"]),C("¿Qué trajo la paloma?",["Una rama de olivo","Una flor","Una piedra"]),C("¿Qué apareció en el cielo al final?",["Un arcoíris","Una nube negra","La luna"]),TF("Noé desobedeció a Dios.",false),O("Ordena el cuento",["Noé hace el arca.","Suben los animales.","Llueve muchos días.","Sale el arcoíris."])]),
STORY("1l3",1,"El niño de los panes",[
 ["people","Mucha gente escuchaba a Jesús junto al lago. Se hizo tarde y todos tenían hambre."],
 ["bread","Un niño tenía cinco panes y dos peces. No era mucho, pero se los dio a Jesús."],
 ["fish","Jesús dio gracias a Dios y repartió la comida. ¡Comieron todos! Y sobraron doce canastas."]],
 ["La gente tiene hambre.","Un niño comparte cinco panes y dos peces.","Jesús los multiplica y todos comen."],
 ["El niño compartió lo poco que tenía. Cuando le damos a Jesús lo que somos, Él hace cosas grandes.","bread","Lo poco, en manos de Jesús, se vuelve mucho."],
 [N("¿Cuántos panes tenía el niño?",5),N("¿Cuántos peces tenía?",2),C("¿Qué hizo el niño con su comida?",["Se la dio a Jesús","Se la comió solo","La escondió"]),N("¿Cuántas canastas sobraron?",12),C("¿Qué hizo Jesús antes de repartir?",["Dio gracias a Dios","Se fue","Se durmió"]),C("¿Qué valor tuvo el niño?",["Generosidad","Pereza","Envidia"])]),
STORY("1l4",1,"San Francisco y el lobo",[
 ["wolf","En un pueblo había un lobo feroz. La gente tenía miedo y no salía de casa."],
 ["saint","San Francisco fue a buscarlo. Le dijo: «Hermano lobo, no hagas daño». El lobo bajó la cabeza."],
 ["house","El pueblo le dio comida al lobo cada día. El lobo ya no atacó a nadie. ¡Se hicieron amigos!"]],
 ["Un lobo asusta al pueblo.","San Francisco le habla con amor.","El pueblo y el lobo hacen las paces."],
 ["San Francisco no usó la fuerza: usó el amor y la paz. Jesús nos pide ser constructores de paz.","dove","Señor, hazme un instrumento de tu paz."],
 [C("¿Por qué la gente tenía miedo?",["Por un lobo feroz","Por la lluvia","Por un gato"]),C("¿Cómo llamó Francisco al lobo?",["Hermano lobo","Lobo malo","Perro"]),C("¿Qué le dio el pueblo al lobo?",["Comida cada día","Golpes","Un juguete"]),TF("Al final el lobo y el pueblo se hicieron amigos.",true),C("¿Qué usó San Francisco?",["El amor y la paz","Un palo","Una trampa"])]),
STORY("1l5",1,"Lupita y su abuela",[
 ["family","Lupita visita a su abuela los domingos. La abuela camina despacio y ve poco."],
 ["book","Lupita le lee un cuento. Luego le ayuda a regar sus plantas y a poner la mesa."],
 ["rosary","Antes de irse, rezan juntas un misterio del rosario. La abuela sonríe: «Dios te bendiga, mi niña»."]],
 ["Lupita visita a su abuela.","Le lee y le ayuda en casa.","Rezan juntas y la abuela la bendice."],
 ["Honrar a nuestros papás y abuelos es un mandamiento de Dios. Visitarlos, ayudarlos y rezar con ellos los llena de alegría.","family","Honra a tu padre y a tu madre."],
 [C("¿Cuándo visita Lupita a su abuela?",["Los domingos","Los lunes","Nunca"]),C("¿Qué le lee Lupita?",["Un cuento","Una carta","Un periódico"]),C("¿Qué rezan juntas?",["Un misterio del rosario","El himno","Nada"]),C("¿Qué le dice la abuela?",["Dios te bendiga, mi niña","Vete ya","No me ayudes"]),O("Ordena lo que hace Lupita",["Lee un cuento.","Riega las plantas.","Reza con su abuela."])]),
STORY("1l6",1,"Jesús en el templo",[
 ["family","Cuando Jesús tenía doce años, fue con María y José a Jerusalén para la fiesta."],
 ["walk","Al regresar, ¡Jesús no estaba! María y José lo buscaron tres días, muy preocupados."],
 ["church","Lo encontraron en el templo, hablando de Dios con los maestros. Jesús volvió a casa y obedecía a sus papás."]],
 ["Jesús va con sus papás a Jerusalén.","Se pierde y lo buscan tres días.","Lo hallan en el templo y regresa obediente."],
 ["Jesús amaba la casa de su Padre y también obedecía a María y a José. Nosotros también amamos la iglesia y obedecemos en casa.","church","Jesús crecía en sabiduría y en gracia."],
 [N("¿Cuántos años tenía Jesús?",12),N("¿Cuántos días lo buscaron?",3),C("¿Dónde lo encontraron?",["En el templo","En el mercado","En el río"]),C("¿Qué hacía Jesús en el templo?",["Hablaba de Dios con los maestros","Jugaba","Dormía"]),C("¿Cómo se portó Jesús al volver a casa?",["Obedecía a sus papás","Se escapaba","Se enojaba"])])
]],
/* ---------- 2.º ---------- */
[2,[
STORY("2l1",2,"El buen samaritano",[
 ["walk","Un hombre caminaba por un camino solitario. Unos ladrones le robaron, lo golpearon y lo dejaron tirado, muy herido."],
 ["people","Pasó un sacerdote, lo vio y siguió de largo. Después pasó otro hombre importante, y tampoco se detuvo."],
 ["heart","Entonces llegó un samaritano, alguien de otro pueblo. Sintió compasión, le curó las heridas con aceite y vino, lo subió a su burro y lo llevó a una posada."],
 ["house","Al día siguiente pagó al dueño y le dijo: «Cuídalo; si gastas más, te lo pagaré». Jesús terminó diciendo: «Ve y haz tú lo mismo»."]],
 ["Unos ladrones hieren a un hombre.","Dos pasan de largo; el samaritano lo cura.","Lo lleva a la posada y paga por él."],
 ["Prójimo es toda persona que necesita ayuda, aunque no sea de nuestro grupo. Jesús nos pide no pasar de largo.","heart","Ve y haz tú lo mismo."],
 [C("¿Qué le hicieron los ladrones al hombre?",["Le robaron y lo hirieron","Le regalaron dinero","Lo invitaron a comer"]),C("¿Qué hizo el sacerdote?",["Siguió de largo","Lo curó","Llamó a un doctor"]),C("¿Qué sintió el samaritano?",["Compasión","Miedo","Enojo"]),C("¿A dónde llevó al herido?",["A una posada","A su casa","Al río"]),C("En el cuento, «compasión» significa…",["Sentir el dolor del otro y querer ayudar","Tener prisa","Estar contento"]),O("Ordena el cuento",["Los ladrones hieren al hombre.","El sacerdote pasa de largo.","El samaritano lo cura.","Lo lleva a la posada."])]),
STORY("2l2",2,"Juan Diego y las rosas",[
 ["walk","En diciembre de 1531, un indígena llamado Juan Diego caminaba por el cerro del Tepeyac. Escuchó cantos de aves y una voz dulce que lo llamaba."],
 ["mary","Era la Virgen María. Le pidió que fuera con el obispo para que le construyeran una casita, un templo, en ese lugar."],
 ["flower","El obispo pidió una señal. La Virgen le dijo a Juan Diego que subiera al cerro. En pleno invierno, ¡había rosas preciosas! Las juntó en su tilma."],
 ["guadalupe","Frente al obispo, Juan Diego abrió su tilma. Cayeron las rosas y apareció pintada la imagen de la Virgen de Guadalupe. Todos se arrodillaron."]],
 ["La Virgen se aparece a Juan Diego en el Tepeyac.","El obispo pide una señal y aparecen rosas en invierno.","En la tilma aparece la imagen de la Virgen."],
 ["La Virgen eligió a un hombre sencillo y humilde. Le dijo: «¿No estoy yo aquí, que soy tu madre?». Ella nos cuida a todos.","guadalupe","¿No estoy yo aquí, que soy tu madre?"],
 [N("¿En qué año ocurrió?",1531),C("¿En qué cerro se apareció la Virgen?",["El Tepeyac","El Popocatépetl","El Ajusco"]),C("¿Qué pidió la Virgen?",["Una casita, un templo","Dinero","Una fiesta"]),C("¿Qué encontró Juan Diego en el cerro?",["Rosas en invierno","Oro","Agua"]),C("¿Dónde llevó las rosas?",["En su tilma","En una caja","En sus manos"]),C("¿Qué quiere decir «humilde»?",["Sencillo, que no presume","Muy rico","Enojón"])]),
STORY("2l3",2,"Zaqueo sube al árbol",[
 ["people","Jesús pasaba por la ciudad de Jericó y mucha gente quería verlo. Zaqueo, un cobrador de impuestos muy rico, también quería verlo, pero era muy bajito."],
 ["tree","Entonces corrió y se subió a un árbol. Jesús pasó, miró hacia arriba y dijo: «Zaqueo, baja pronto, porque hoy me quedaré en tu casa»."],
 ["house","Zaqueo bajó feliz. Algunos murmuraban porque Zaqueo había engañado a muchos. Pero él dijo: «Daré la mitad de mis bienes a los pobres, y si robé a alguien, le devolveré cuatro veces más»."],
 ["heart","Jesús respondió: «Hoy ha llegado la salvación a esta casa». Zaqueo cambió su corazón."]],
 ["Zaqueo, bajito, sube a un árbol para ver a Jesús.","Jesús se invita a su casa.","Zaqueo se arrepiente y repara el daño."],
 ["Jesús busca a todos, también a quien se ha equivocado. Arrepentirse es cambiar el corazón y reparar el mal que hicimos.","heart","El Hijo del hombre vino a buscar lo que estaba perdido."],
 [C("¿Por qué Zaqueo subió al árbol?",["Porque era bajito","Para jugar","Para esconderse de Jesús"]),C("¿Qué le dijo Jesús?",["Hoy me quedaré en tu casa","Vete de aquí","No te conozco"]),C("¿Cuánto daría Zaqueo a los pobres?",["La mitad de sus bienes","Nada","Una moneda"]),N("¿Cuántas veces más devolvería a quien robó?",4),C("«Arrepentirse» significa…",["Sentir pena por el mal y cambiar","Estar feliz","Esconderse"]),TF("Zaqueo cambió su corazón.",true)]),
STORY("2l4",2,"La oveja perdida",[
 ["sheep","Un pastor tenía cien ovejas. Las conocía por su nombre y las cuidaba cada día en el campo."],
 ["moon","Una tarde las contó y faltaba una. Dejó a las noventa y nueve en un lugar seguro y salió a buscarla, aunque ya estaba oscuro."],
 ["shepherd","Caminó entre piedras y espinas hasta que la encontró atorada en un arbusto. La cargó sobre sus hombros, muy contento."],
 ["people","Al volver llamó a sus amigos: «¡Alégrense conmigo, encontré la oveja que se me había perdido!»."]],
 ["El pastor cuida cien ovejas.","Se pierde una y la busca en la oscuridad.","La encuentra y hace fiesta."],
 ["Jesús es el Buen Pastor y nosotros sus ovejas. Si nos alejamos, Él nos busca, y hay fiesta en el cielo cuando volvemos.","shepherd","Yo soy el Buen Pastor."],
 [N("¿Cuántas ovejas tenía el pastor?",100),N("¿Cuántas dejó en un lugar seguro?",99),C("¿Dónde encontró a la oveja?",["Atorada en un arbusto","En el río","En otra casa"]),C("¿Cómo la llevó de regreso?",["Sobre sus hombros","Arrastrándola","En un carro"]),C("¿Quién es el Buen Pastor?",["Jesús","El rey","Un soldado"]),O("Ordena el cuento",["El pastor cuenta sus ovejas.","Sale a buscar a la perdida.","La encuentra en un arbusto.","Hace fiesta con sus amigos."])]),
STORY("2l5",2,"La capa de Martín",[
 ["snow","Martín era un joven soldado romano. Una noche de invierno, muy fría, cabalgaba hacia la ciudad de Amiens."],
 ["people","En la puerta de la ciudad vio a un pobre casi sin ropa, temblando de frío. Todos pasaban sin mirarlo."],
 ["shield","Martín no tenía dinero, solo su capa. Sacó su espada, cortó la capa en dos y le dio la mitad al pobre."],
 ["cross","Esa noche, Martín soñó con Jesús vestido con la media capa. Jesús decía: «Martín me cubrió con su capa». Después Martín se bautizó y llegó a ser obispo y santo."]],
 ["Martín cabalga en una noche fría.","Ve a un pobre y parte su capa en dos.","Sueña con Jesús vestido con la capa."],
 ["Jesús dijo: «Lo que hicieron con uno de estos pequeños, conmigo lo hicieron». Vestir al desnudo es una obra de misericordia.","hands","Lo que hicieron con el más pequeño, conmigo lo hicieron."],
 [C("¿Qué era Martín?",["Un soldado romano","Un pescador","Un rey"]),C("¿Cómo estaba la noche?",["Muy fría","Muy caliente","Lluviosa y calurosa"]),C("¿Qué le dio Martín al pobre?",["La mitad de su capa","Su caballo","Dinero"]),C("¿Con quién soñó Martín?",["Con Jesús","Con un león","Con su mamá"]),C("¿Qué obra de misericordia hizo Martín?",["Vestir al desnudo","Enterrar a los muertos","Visitar a los presos"])]),
STORY("2l6",2,"El huerto de Tomás",[
 ["seed","Tomás plantó una semilla de mostaza, chiquita como un granito de arena. Cada mañana la regaba y rezaba: «Señor, hazla crecer»."],
 ["calendar","Pasó una semana y no se veía nada. Tomás quería escarbar para ver la semilla, pero su papá le dijo: «Ten paciencia, Dios trabaja en silencio»."],
 ["leaf","Un día salió un tallito verde. Luego hojas, y después ramas. Al pasar los meses, la planta era tan grande que los pájaros hacían nidos en ella."],
 ["bird","Tomás entendió lo que dice Jesús: el Reino de Dios es como la semilla de mostaza, empieza pequeño y crece mucho."]],
 ["Tomás planta una semilla pequeña.","Espera con paciencia y la riega.","Crece una planta enorme con nidos."],
 ["La fe y las buenas obras empiezan pequeñas, como una semilla. Con paciencia y oración, Dios las hace crecer.","seed","El Reino de Dios es como un grano de mostaza."],
 [C("¿Qué semilla plantó Tomás?",["De mostaza","De mango","De frijol"]),C("¿Qué le pidió su papá?",["Paciencia","Que escarbara","Que la tirara"]),C("¿Qué hacían los pájaros en la planta?",["Nidos","Ruido nada más","Agujeros"]),C("«Paciencia» significa…",["Saber esperar con calma","Querer todo ya","Rendirse"]),O("Ordena cómo creció la planta",["Semilla","Tallito verde","Hojas","Ramas con nidos"]),C("¿A qué se parece el Reino de Dios?",["A una semilla de mostaza","A una piedra","A una nube"])])
]],
/* ---------- 3.º ---------- */
[3,[
STORY("3l1",3,"David y Goliat",[
 ["shield","El ejército de Israel estaba frente a los filisteos. Cada día salía un gigante llamado Goliat, con casco de bronce y una lanza enorme, y gritaba: «¡Que alguien venga a pelear conmigo!». Los soldados temblaban de miedo."],
 ["sheep","David era un muchacho pastor que llevaba comida a sus hermanos soldados. Al oír a Goliat, dijo: «Dios me libró del león y del oso cuando cuidaba mis ovejas; también me librará de este gigante»."],
 ["stone","El rey Saúl le ofreció su armadura, pero le quedaba grande y pesada. David tomó solo su honda y escogió cinco piedras lisas del arroyo."],
 ["crown","Goliat se burló al verlo tan joven. David respondió: «Tú vienes con espada y lanza; yo vengo en el nombre del Señor». Hizo girar su honda, la piedra golpeó la frente del gigante y Goliat cayó. Años después, David llegó a ser rey de Israel."]],
 ["Goliat desafía a Israel y todos tienen miedo.","David, un pastor, confía en Dios y toma cinco piedras.","Con su honda vence al gigante."],
 ["La fuerza de David no estaba en las armas, sino en su confianza en Dios. Cuando algo nos parece un «gigante», podemos enfrentarlo con fe.","stone","Yo vengo en el nombre del Señor."],
 [C("¿Quién era Goliat?",["Un gigante filisteo","El rey de Israel","Un pastor"]),C("¿De qué animales había librado Dios a David?",["Del león y del oso","Del lobo y la serpiente","De ninguno"]),N("¿Cuántas piedras escogió David?",5),C("¿Por qué no usó la armadura de Saúl?",["Le quedaba grande y pesada","Estaba rota","No le gustó el color"]),C("¿En qué estaba la fuerza de David?",["En su confianza en Dios","En su espada","En su tamaño"]),C("En el cuento, «se burló» significa…",["Se rio de él para humillarlo","Lo abrazó","Lo ayudó"]),O("Ordena el cuento",["Goliat desafía a Israel.","David habla con el rey Saúl.","David escoge cinco piedras.","Goliat cae."])]),
STORY("3l2",3,"Don Bosco y los muchachos",[
 ["city","Hace casi doscientos años, en la ciudad de Turín, Italia, muchos muchachos pobres vivían en la calle. No iban a la escuela, trabajaban en lugares peligrosos y nadie los cuidaba."],
 ["saint","Un sacerdote, Juan Bosco, los invitó a un patio. Allí jugaban, aprendían a leer, aprendían un oficio y rezaban. A ese lugar lo llamó «oratorio»."],
 ["ball","Don Bosco era muy alegre: hacía trucos de magia, malabares y caminaba sobre una cuerda para que los niños se acercaran. Después les hablaba de Jesús."],
 ["heart","Su secreto era el amor: «No basta amar a los jóvenes, ellos deben sentir que son amados». Muchos de esos muchachos se convirtieron en buenos cristianos y honrados ciudadanos."]],
 ["Muchos muchachos pobres viven en la calle en Turín.","Don Bosco abre un oratorio con juego, estudio y oración.","Con alegría y amor, los muchachos cambian su vida."],
 ["Don Bosco nos enseña que la alegría y el juego también son caminos para llegar a Dios. Ser santo es estar alegres y hacer el bien.","saint","Buenos cristianos y honrados ciudadanos."],
 [C("¿En qué ciudad vivía Don Bosco?",["Turín","Roma","Madrid"]),C("¿Cómo se llamaba el lugar donde reunía a los muchachos?",["Oratorio","Castillo","Mercado"]),C("¿Qué hacía para que los niños se acercaran?",["Trucos de magia y malabares","Les daba miedo","Los regañaba"]),C("¿Cuál era su secreto?",["El amor","El dinero","Los castigos"]),C("«Oficio» significa…",["Un trabajo que se aprende, como carpintero","Una fiesta","Un juego"]),TF("Don Bosco era un sacerdote triste y serio.",false)]),
STORY("3l3",3,"José perdona a sus hermanos",[
 ["family","Jacob tenía doce hijos, pero quería mucho a José y le regaló una túnica de colores. Sus hermanos sintieron envidia."],
 ["walk","Un día, los hermanos vendieron a José a unos comerciantes que iban a Egipto. A su papá le dijeron que una fiera lo había devorado."],
 ["crown","En Egipto, José sufrió mucho, pero siempre confió en Dios. Dios le dio el don de explicar los sueños, y el faraón lo nombró gobernador. José guardó trigo durante siete años de buenas cosechas."],
 ["bread","Llegó el hambre y los hermanos fueron a Egipto a comprar trigo. No reconocieron a José. Él lloró y les dijo: «Soy José, su hermano. No tengan miedo; Dios lo permitió para salvar muchas vidas». Los abrazó y los perdonó."]],
 ["Los hermanos venden a José por envidia.","En Egipto, José confía en Dios y llega a gobernador.","Perdona a sus hermanos y salva a su familia."],
 ["José pudo vengarse, pero eligió perdonar. Jesús nos pide perdonar como Dios nos perdona; el perdón sana a las familias.","hands","Perdónanos así como nosotros perdonamos."],
 [N("¿Cuántos hijos tenía Jacob?",12),C("¿Qué le regaló Jacob a José?",["Una túnica de colores","Un caballo","Una corona"]),C("¿Qué sentimiento tuvieron los hermanos?",["Envidia","Alegría","Paciencia"]),C("¿Qué don le dio Dios a José?",["Explicar los sueños","Volar","Ser muy fuerte"]),N("¿Cuántos años guardó trigo?",7),C("¿Qué hizo José al final?",["Perdonó a sus hermanos","Los encarceló","Los ignoró"]),O("Ordena el cuento",["Jacob regala una túnica a José.","Los hermanos lo venden.","José llega a gobernador.","José perdona a sus hermanos."])]),
STORY("3l4",3,"Los tres pastorcitos de Fátima",[
 ["sheep","En 1917, en Fátima, Portugal, tres niños cuidaban ovejas: Lucía, de diez años, y sus primos Francisco y Jacinta, de nueve y siete."],
 ["mary","El 13 de mayo vieron sobre una encina a una Señora más brillante que el sol. Era la Virgen María. Les pidió que rezaran el rosario todos los días por la paz del mundo."],
 ["rosary","Los niños obedecieron. Rezaban, ofrecían pequeños sacrificios y no se quejaban cuando algunas personas se burlaban de ellos o no les creían."],
 ["sun","La Virgen se apareció seis veces, el día 13 de cada mes. En la última, el 13 de octubre, miles de personas vieron el sol girar y moverse en el cielo: el «milagro del sol». Hoy Francisco y Jacinta son santos."]],
 ["Tres niños pastores cuidan ovejas en Fátima.","La Virgen les pide rezar el rosario por la paz.","Ocurre el milagro del sol; dos de ellos son santos."],
 ["Los pastorcitos eran niños como tú, y llegaron a ser santos rezando, ofreciendo sacrificios y amando a Jesús y a María.","rosary","Recen el rosario todos los días."],
 [N("¿En qué año ocurrió?",1917),C("¿Cómo se llamaban los tres niños?",["Lucía, Francisco y Jacinta","Ana, Pedro y Juan","María, José y Luis"]),C("¿Qué les pidió la Virgen?",["Rezar el rosario por la paz","Hacer una fiesta","Irse de Portugal"]),N("¿Cuántas veces se apareció la Virgen?",6),C("¿Qué vieron miles de personas el 13 de octubre?",["El sol girar","Una lluvia de flores","Un arcoíris doble"]),C("«Sacrificio» en el cuento significa…",["Ofrecer algo que cuesta por amor a Dios","Ganar un premio","Comer mucho"]),TF("Francisco y Jacinta hoy son santos.",true)]),
STORY("3l5",3,"El hijo que volvió a casa",[
 ["house","Un padre tenía dos hijos. El menor le pidió su parte de la herencia, se fue a un país lejano y gastó todo su dinero en fiestas y caprichos."],
 ["pig","Cuando ya no tenía nada, hubo hambre en aquel país. Tuvo que trabajar cuidando cerdos, y deseaba comer lo que comían los animales. Nadie le daba nada."],
 ["walk","Entonces pensó: «En casa de mi padre los trabajadores tienen pan de sobra. Volveré y le diré: Padre, pequé contra Dios y contra ti». Y emprendió el camino."],
 ["heart","Su padre lo vio de lejos, corrió, lo abrazó y lo besó. Mandó traer el mejor vestido, un anillo y sandalias, e hizo una gran fiesta: «Mi hijo estaba perdido y lo hemos encontrado»."]],
 ["El hijo menor se va y gasta todo.","Pasa hambre, se arrepiente y decide volver.","El padre lo abraza y hace fiesta."],
 ["El padre del cuento es como Dios: siempre nos espera con los brazos abiertos. En la Confesión recibimos ese abrazo de perdón.","heart","Estaba perdido y lo hemos encontrado."],
 [C("¿Qué pidió el hijo menor?",["Su parte de la herencia","Un caballo","Trabajo"]),C("¿En qué gastó su dinero?",["En fiestas y caprichos","En ayudar a los pobres","En una casa"]),C("¿Qué animales cuidó?",["Cerdos","Ovejas","Caballos"]),C("¿Qué hizo el padre al verlo?",["Corrió y lo abrazó","Lo regañó","Cerró la puerta"]),C("¿Qué le dio el padre?",["Vestido, anillo y sandalias","Un castigo","Nada"]),C("¿En qué sacramento recibimos el abrazo de perdón de Dios?",["La Confesión","El Matrimonio","El Orden sacerdotal"]),O("Ordena el cuento",["El hijo pide la herencia.","Gasta todo en fiestas.","Cuida cerdos con hambre.","Vuelve y su padre lo abraza."])]),
STORY("3l6",3,"La alcancía de Sofía",[
 ["coin","Sofía ahorraba en una alcancía con forma de cochinito. Quería comprarse una muñeca que había visto en la tienda. Ya casi completaba el dinero."],
 ["church","Llegó la Cuaresma. En la parroquia, el padre Andrés contó que muchas familias del pueblo vecino lo habían perdido todo por una inundación. Necesitaban comida y cobijas."],
 ["heart","Esa noche, Sofía miró su alcancía largo rato. Recordó que en Cuaresma Jesús nos invita a rezar, ayunar y dar limosna. Le dolía un poco, pero decidió dar sus ahorros."],
 ["gift","El domingo entregó su cochinito en la colecta. Semanas después, una niña del pueblo vecino le mandó un dibujo con una carta: «Gracias por las cobijas; ya no tenemos frío». Sofía sintió una alegría más grande que cualquier muñeca."]],
 ["Sofía ahorra para una muñeca.","En Cuaresma conoce a familias que lo perdieron todo.","Da sus ahorros y recibe una carta de gratitud."],
 ["Dar cuando nos cuesta es amar de verdad. Jesús dice que hay más alegría en dar que en recibir.","gift","Hay más alegría en dar que en recibir."],
 [C("¿Para qué ahorraba Sofía?",["Para una muñeca","Para un viaje","Para dulces"]),C("¿Qué les pasó a las familias del pueblo vecino?",["Una inundación","Un temblor","Ganaron un premio"]),C("¿Qué tres cosas pide Jesús en Cuaresma?",["Rezar, ayunar y dar limosna","Jugar, comer y dormir","Comprar, vender y ahorrar"]),C("¿Qué recibió Sofía semanas después?",["Un dibujo con una carta","La muñeca","Dinero"]),C("«Limosna» significa…",["Lo que damos para ayudar a quien lo necesita","Un dulce de limón","Un regaño"]),TF("Sofía sintió una gran alegría al ayudar.",true)])
]]];
LEC.forEach(([g,ls])=>SUBJ.push({id:g+"lec",c:"lec",g,noCuad:true,noExam:true,n:"Biblioteca",campo:"Lenguajes (comprensión lectora)",d:"Cuentos de la Biblia, de santos y de valores para leer, entender y medir tu velocidad de lectura.",units:[{t:"Cuentos de "+gName(g)+" grado",ls}]}));
/* --- Fluidez lectora --- */
let FLU=null;
VX.flu=v=>{const n=nWords(v.w),[lo,hi]=PPM[v.g]||PPM[3];return`<div class="flu" data-id="${v.id}" data-g="${v.g}" data-n="${n}"><p>Ahora lee tú todo el cuento en voz alta. Un adulto toca «Empezar» cuando comiences y «Terminé» al acabar.</p><p class="note">${n} palabras · Meta de ${gName(v.g)} grado: de ${lo} a ${hi} palabras por minuto.</p><div class="flu-txt">${v.w}</div><div class="flu-bar"><button class="btn big" data-act="flustart" style="--sc:var(--lec)">Empezar a leer</button></div></div>`};
function fluLevel(ppm,g){const[lo,hi]=PPM[g]||PPM[3];return ppm<lo?["Requiere apoyo","bad"]:ppm<=hi?["Logrado para su grado","ok"]:["Avanzado","top"]}
Object.assign(ACT,{
 flustart:(v,b)=>{const box=b.closest(".flu");FLU={t0:Date.now(),id:box.dataset.id,g:+box.dataset.g,n:+box.dataset.n,e:0,box};try{speechSynthesis.cancel()}catch(e){}box.classList.add("on");box.querySelector(".flu-bar").innerHTML=`<span class="flu-clock" id="fluclk">0:00</span><button class="btn big" data-act="flustop" style="--sc:var(--lec)">Terminé</button>`;FLU.tm=setInterval(()=>{const s=Math.floor((Date.now()-FLU.t0)/1000),el=document.getElementById("fluclk");if(el)el.textContent=Math.floor(s/60)+":"+String(s%60).padStart(2,"0");else clearInterval(FLU.tm)},500)},
 flustop:()=>{if(!FLU)return;clearInterval(FLU.tm);FLU.s=Math.max(1,Math.round((Date.now()-FLU.t0)/1000));fluResult()},
 fluerr:v=>{if(!FLU)return;FLU.e=Math.max(0,Math.min(FLU.n,FLU.e+(+v)));fluResult()},
 flusave:()=>{if(!FLU)return;const p=me();p.flu=p.flu||{};const ppm=fluPPM();p.flu[FLU.id+":"+FLU.t0]={lid:FLU.id,at:FLU.t0,s:FLU.s,w:FLU.n,e:FLU.e,ppm};save();SND.win();const[lab]=fluLevel(ppm,FLU.g);FLU.box.querySelector(".flu-bar").innerHTML=`<p class="flu-saved">✓ Guardado: <b>${ppm} palabras por minuto</b> · ${lab}</p><button class="btn ghost" data-act="flustart" style="--sc:var(--lec)">Leer otra vez</button>`;FLU.box.classList.remove("on");say(`¡Muy bien! Leíste ${ppm} palabras por minuto.`,true);FLU=null}
});
function fluPPM(){return Math.round((FLU.n-FLU.e)/(FLU.s/60))}
function fluResult(){const ppm=fluPPM(),[lab,cls]=fluLevel(ppm,FLU.g),[lo,hi]=PPM[FLU.g]||PPM[3];FLU.box.querySelector(".flu-bar").innerHTML=`<div class="flu-res"><p>Tiempo: <b>${Math.floor(FLU.s/60)}:${String(FLU.s%60).padStart(2,"0")}</b> · ${FLU.n} palabras</p><div class="flu-err"><span>Palabras mal leídas u omitidas:</span><button class="btn ghost sm" data-act="fluerr" data-v="-1" aria-label="Una menos" style="--sc:var(--lec)">−</button><b>${FLU.e}</b><button class="btn ghost sm" data-act="fluerr" data-v="1" aria-label="Una más" style="--sc:var(--lec)">+</button></div><p class="flu-ppm ${cls}"><b>${ppm}</b> palabras por minuto<br><span>${lab} (meta: ${lo} a ${hi})</span></p><div class="row center"><button class="btn" data-act="flusave" style="--sc:var(--lec)">Guardar</button><button class="btn ghost" data-act="flustart" style="--sc:var(--lec)">Repetir</button></div></div>`}
/* --- Registro de lectura en la Zona de papás --- */
function lecPanel(){const p=me(),g=p.grade||1,L=Object.values(p.flu||{}).sort((a,b)=>b.at-a.at),[lo,hi]=PPM[g]||PPM[3];
 const st=findC("lec",g),read=st?allLessons(st).filter(l=>p.prog[l.id]&&p.prog[l.id].done).length:0,tot=st?allLessons(st).length:0;
 const best=L.length?Math.max(...L.map(r=>r.ppm)):null,first=L.length?L[L.length-1].ppm:null;
 return`<section class="panel"><h2>Registro de lectura</h2><p class="note">Cuentos leídos y respondidos: <b>${read} de ${tot}</b>. Meta de velocidad para ${gName(g)} grado (referencia de la SEP): <b>${lo} a ${hi}</b> palabras por minuto.</p>${L.length?`<p>Primera medición: <b>${first}</b> · Mejor: <b>${best}</b> palabras por minuto.</p><div class="tscroll"><table class="btab"><thead><tr><th>Fecha</th><th>Cuento</th><th>Tiempo</th><th>Errores</th><th>P/min</th></tr></thead><tbody>${L.slice(0,12).map(r=>{const l=LIDX[r.lid],[lab,c]=fluLevel(r.ppm,l?(l.s.g||g):g);return`<tr><td>${new Date(r.at).toLocaleDateString("es-MX",{day:"numeric",month:"short"})}</td><td>${l?esc(l.l.t):r.lid}</td><td>${Math.floor(r.s/60)}:${String(r.s%60).padStart(2,"0")}</td><td>${r.e}</td><td><b class="flu-tag ${c}" title="${lab}">${r.ppm}</b></td></tr>`}).join("")}</tbody></table></div>`:`<p class="note">Todavía no hay mediciones. Al final de cada cuento de la Biblioteca está la página «Lee en voz alta» para medir la velocidad.</p>`}</section>`}
