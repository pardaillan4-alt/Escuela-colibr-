/* ========= Arte sacro (Wikimedia Commons, obras de dominio público) en Religión, Primera Comunión e infografías ========= */
const WM=(f,w)=>`https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(f)}?width=${w||800}`;
/* lección: [archivo, autor y obra, pie de foto] */
const SACRO={
r1:["'Adam's_Creation_Sistine_Chapel_ceiling'_by_Michelangelo_JBU33cut.jpg","Miguel Ángel, «La creación de Adán», Capilla Sixtina","Dios da la vida al hombre: así lo pintó Miguel Ángel en la Capilla Sixtina."],
r2:["BuenPastorMurillo1660.jpg","Murillo, «El Buen Pastor» (1660), Museo del Prado","Jesús niño como Buen Pastor: Dios cuida de cada uno de sus hijos."],
r3:["Jean-François_Millet_Angelus.jpg","Jean-François Millet, «El Ángelus» (1857-1859)","Dos campesinos dejan el trabajo para rezar al toque de la campana."],
r4:["Brooklyn_Museum_-_The_Lord's_Prayer_(Le_Pater_Noster)_-_James_Tissot.jpg","James Tissot, «El Padre Nuestro», Museo de Brooklyn","Jesús enseña a sus discípulos a rezar el Padre Nuestro."],
r5:["Inmaculada_Concepcion_(La_Colosal).jpg","Murillo, «La Inmaculada Concepción, la Colosal»","María, la llena de gracia, Madre de Jesús y Madre nuestra."],
r6:["Adoration_of_the_Shepherds,_Murillo_(Prado_Museum).jpg","Murillo, «La adoración de los pastores», Museo del Prado","Los pastores visitan al Niño Jesús recién nacido."],
r7:["Brooklyn_Museum_-_Jesus_Preaches_in_a_Ship_(Jésus_prèche_dans_une_barque)_-_James_Tissot_-_overall.jpg","James Tissot, «Jesús predica desde una barca», Museo de Brooklyn","Jesús enseña a la multitud desde una barca."],
r8:["TheResurrectionOfChrist.jpg","Carl Bloch, «La Resurrección» (1875)","¡Jesús vive! Resucitó al tercer día."],
r9:["Basilica_di_San_Pietro_in_Vaticano_September_2015-1a.jpg","Basílica de San Pedro, Vaticano · foto de Wikimedia Commons (CC BY-SA)","La Basílica de San Pedro, en Roma, casa del Papa."],
r10:["GuidoReni_MichaelDefeatsSatan.jpg","Guido Reni, «San Miguel Arcángel» (1635)","San Miguel Arcángel defiende a los hijos de Dios."],
pc1:["Andrey_Rublev_-_Св._Троица_-_Google_Art_Project.jpg","Andréi Rubliov, «La Trinidad» (hacia 1411)","Un ícono famoso que representa a la Santísima Trinidad."],
pc3:["Gethsemane_Carl_Bloch.jpg","Carl Bloch, «Getsemaní»","Jesús reza al Padre antes de dar su vida por nosotros."],
pc4:["Rembrandt_-_Moses_with_the_Ten_Commandments_-_Google_Art_Project.jpg","Rembrandt, «Moisés con las tablas de la Ley» (1659)","Moisés baja del monte Sinaí con los Diez Mandamientos."],
pc5:["Blessing_of_the_Wheat_at_Artois.jpg","Jules Breton, «La bendición del trigo en Artois» (1857)","Una procesión: la comunidad celebra unida su fe."],
pc6:["Seven_Sacraments_Rogier.jpg","Rogier van der Weyden, «Retablo de los Siete Sacramentos»","Los siete sacramentos alrededor de la cruz de Jesús."],
pc7:["Piero_della_Francesca_-_Battesimo_di_Cristo_(National_Gallery,_London).jpg","Piero della Francesca, «El Bautismo de Cristo», National Gallery","Juan bautiza a Jesús y el Espíritu Santo baja como paloma."],
pc8:["Artgate_Fondazione_Cariplo_-_Molteni_Giuseppe,_La_confessione.jpg","Giuseppe Molteni, «La confesión» (1838)","En la Confesión, Jesús nos perdona por medio del sacerdote."],
pc9:["Massatbolsena.jpg","Rafael, «La Misa de Bolsena», Vaticano","Un sacerdote celebra la Misa: el pan se convierte en Jesús."],
pc10:["La_Última_Cena_(Juan_de_Juanes)_(restaurada).jpg","Juan de Juanes, «La Última Cena», Museo del Prado","Jesús nos deja la Eucaristía en la Última Cena."],
pc11:["Albrecht_Dürer_-_Praying_Hands,_1508_-_Google_Art_Project.jpg","Alberto Durero, «Manos que rezan» (1508)","Unas manos juntas en oración."],
pc12:["Jules_Breton_The_Communicants.jpg","Jules Breton, «Las comulgantes» (1884)","Niñas camino a su Primera Comunión."],
"2r1":["Saint_Jerome_Writing-Caravaggio_(1605-6).jpg","Caravaggio, «San Jerónimo escribiendo» (1605)","San Jerónimo tradujo la Biblia para que todos pudieran leerla."],
"2r2":["Tissot_God's_Promises_to_Abram.jpg","James Tissot, «Las promesas de Dios a Abraham»","Dios promete a Abraham tantos hijos como estrellas en el cielo."],
"2r3":["Nicolas_Poussin_-_Le_Passage_de_la_mer_Rouge.jpg","Nicolas Poussin, «El paso del mar Rojo» (1634)","Dios abre el mar para que su pueblo pase libre."],
"2r4":["Westminster_Psalter_David.jpg","«El rey David con su arpa», Salterio de Westminster (hacia 1200)","El rey David cantaba salmos a Dios con su arpa."],
"2r5":["Isaiah-Michelangelo.jpg","Miguel Ángel, «El profeta Isaías», Capilla Sixtina","Isaías anunció que nacería el Salvador."],
"2r6":["Verrocchio,_Leonardo_da_Vinci_-_Battesimo_di_Cristo_-_Google_Art_Project.jpg","Verrocchio y Leonardo da Vinci, «El Bautismo de Cristo»","Jesús es bautizado en el río Jordán."],
"2r7":["Return_of_the_Prodigal_Son_1667-1670_Murillo.jpg","Murillo, «El regreso del hijo pródigo» (1667-1670)","El padre abraza al hijo que regresa a casa."],
"2r8":["Bloch-SermonOnTheMount.jpg","Carl Bloch, «El Sermón de la Montaña» (1877)","Jesús enseña las Bienaventuranzas en el monte."],
"2r9":["El_Greco_-_The_Pentecost_-_WGA10533.jpg","El Greco, «Pentecostés», Museo del Prado","El Espíritu Santo baja como lenguas de fuego sobre María y los apóstoles."],
"2r10":["(Castres)_La_Vierge_au_chapelet_-_Murillo_-_Musée_Goya.jpg","Murillo, «La Virgen del Rosario», Museo Goya de Castres","La Virgen con el Niño y el rosario."],
"2r11":["Wichern_Adventskranz_originated_from_Germany.jpg","Corona de Adviento · foto de Wikimedia Commons","La corona de Adviento: una vela más cada domingo hasta Navidad."],
"2pc1":["Seven_Sacraments_Rogier.jpg","Rogier van der Weyden, «Retablo de los Siete Sacramentos»","Por los sacramentos recibimos la gracia de Dios."],
"2pc2":["Return_of_the_Prodigal_Son_1667-1670_Murillo.jpg","Murillo, «El regreso del hijo pródigo»","Examinar la conciencia es volver al Padre como el hijo pródigo."],
"2pc3":["Massatbolsena.jpg","Rafael, «La Misa de Bolsena», Vaticano","En la Misa respondemos al sacerdote con todo el pueblo."],
"2pc4":["Altar_del_perdón.jpg","Altar del Perdón, Catedral de México · foto de Wikimedia Commons","Un altar de la Catedral Metropolitana de la Ciudad de México."],
"2pc5":["Werken_van_Barmhartigheid,_Meester_van_Alkmaar_(1504).jpg","Maestro de Alkmaar, «Las siete obras de misericordia» (1504), Rijksmuseum","Dar de comer, vestir, visitar a los enfermos: obras de misericordia."],
"2pc6":["Jean-François_Millet_Angelus.jpg","Jean-François Millet, «El Ángelus»","La oración de cada día santifica el trabajo."],
"2pc7":["Eucharistic_Adoration.jpg","Adoración eucarística · foto de Wikimedia Commons","Jesús en la custodia, expuesto para que lo adoremos."],
"2pc8":["Jules_Breton_The_Communicants.jpg","Jules Breton, «Las comulgantes» (1884)","¡El gran día de la Primera Comunión!"],
"3r1":["Transfigurationbloch.jpg","Carl Bloch, «La Transfiguración»","Jesús muestra su gloria: es verdadero Dios y verdadero hombre."],
"3r2":["Brooklyn_Museum_-_The_Exhortation_to_the_Apostles_(Recommandation_aux_apôtres)_-_James_Tissot.jpg","James Tissot, «Jesús envía a los apóstoles», Museo de Brooklyn","Jesús envía a sus apóstoles: la Iglesia es apostólica."],
"3r3":["Sassoferrato_-_Jungfrun_i_bön.jpg","Sassoferrato, «La Virgen en oración» (1640-1650)","María, la mujer de oración."],
"3r4":["Jean-François_Millet_-_The_Sower_-_Google_Art_Project.jpg","Jean-François Millet, «El sembrador» (1850)","«Salió el sembrador a sembrar»: una parábola de Jesús."],
"3r5":["RaisingofLazarusBloch.jpg","Carl Bloch, «La resurrección de Lázaro»","Jesús devuelve la vida a su amigo Lázaro."],
"3r6":["El_Greco_-_St._Paul_-_Google_Art_Project.jpg","El Greco, «San Pablo»","San Pablo, el gran misionero de los Hechos de los Apóstoles."],
"3r7":["Angelico,_niccolina_21.jpg","Fra Angélico, «Vida de san Esteban», Capilla Nicolina, Vaticano","San Esteban, el primer mártir."],
"3r8":["Albrecht_Dürer_-_Praying_Hands,_1508_-_Google_Art_Project.jpg","Alberto Durero, «Manos que rezan» (1508)","Rezar es hablar con Dios."],
"3r9":["The_Last_Supper_-_Leonardo_Da_Vinci_-_High_Resolution_32x16.jpg","Leonardo da Vinci, «La Última Cena», Milán","En la Última Cena, Jesús instituye la Eucaristía."],
"3r10":["Giotto_-_The_Seven_Virtues_-_Justice.JPG","Giotto, «La Justicia», Capilla de los Scrovegni","Giotto pintó las virtudes como figuras para enseñar a vivir bien."],
"3pc1":["Blessing_of_the_Wheat_at_Artois.jpg","Jules Breton, «La bendición del trigo en Artois»","El domingo la comunidad se reúne a celebrar al Señor."],
"3pc2":["Rembrandt_prophet_hannah.jpg","Rembrandt, «La profetisa Ana leyendo» (1631), Rijksmuseum","Leer la Biblia despacio, con el corazón."],
"3pc3":["Holy_Spirit_stained-glass_window_(Cathedra_Petri).jpg","Bernini, vitral del Espíritu Santo, Basílica de San Pedro · foto de Wikimedia Commons","El Espíritu Santo como paloma, en la Basílica de San Pedro."],
"3pc4":["The_Calling_of_Saint_Matthew-Caravaggo_(1599-1600).jpg","Caravaggio, «La vocación de San Mateo» (1600)","Jesús señala a Mateo: «Sígueme»."],
"3pc5":["PierGiorgioFrassati-Présentation.jpg","San Pier Giorgio Frassati · foto de Wikimedia Commons","Pier Giorgio Frassati, joven santo, alegre y montañista."],
"3pc6":["BuenPastorMurillo1660.jpg","Murillo, «El Buen Pastor»","Jesús, el Buen Pastor, nos guía en nuestro plan de vida."]
};
/* Inserta la obra en la primera página (en lugar de los emojis) y como portada de la infografía */
(function(){const find=id=>{for(const s of SUBJ)for(const u of s.units)for(const l of u.ls)if(l.id===id)return l};
 for(const[id,[f,cr,cap]]of Object.entries(SACRO)){const l=find(id);if(!l)continue;const ph={t:"photo",src:WM(f,800),alt:cap,cap,credit:cr,art:true};
  const p0=l.learn[0];if(p0&&!p0.info){p0.v=!p0.v||p0.v.t==="emo"?ph:{t:"combo",x:[ph,p0.v]}}
  l.learn.filter(p=>p.info).forEach(p=>{p.v.img={src:WM(f,640),cr}})}
 /* la lección de prueba de Ciencias también lleva foto en su infografía */
 const c6=find("c6");if(c6)c6.learn.filter(p=>p.info).forEach(p=>{p.v.img={src:UNS("photo-1741027911956-db63415dcedf",700),cr:"Foto: Hannes Knutsson · Unsplash"}});
})();
/* Estampas del álbum con la imagen del santo (si no carga, queda la estampa dibujada) */
const ALBUMIMG={"San José":"San_Jose_con_el_nino,_by_Arce_y_Ceballos.JPG","Nuestra Señora de Guadalupe":"Virgin_of_Guadalupe_-_Google_Art_Project.jpg","San Juan Diego":"MIguel_Cabrera_-_Fiel_retrato_do_venerável_Juan_Diego.jpg","San Francisco de Asís":"Francis_of_Assisi_-_Cimabue.jpg","San Juan Bosco":"Don_Bosco.jpg","Santa Teresita del Niño Jesús":"Saint_Thérèse's_picture_for_Father_Roulland_(detail).jpg","Santa Rosa de Lima":"Sta_Rosa_de_Lima_por_Claudio_Coello.jpg","San Felipe de Jesús":"FelipeJesusVirreinato.JPG","San Miguel Arcángel":"Le_Grand_Saint_Michel,_by_Raffaello_Sanzio,_from_C2RMF_retouched.jpg","San Gabriel Arcángel":"Angel_with_halo_-_Giotto_-_Scrovegni_-_-14-_-_The_Angel_Gabriel_Sent_by_God_(cropped).jpg","San Rafael Arcángel":"Andrea_del_Verocchio_-_Tobias_and_the_Angel.jpg","San Pedro":"El_Greco_-_The_Repentant_St._Peter_-_Google_Art_Project.jpg","San Pablo":"El_Greco_-_St._Paul_-_Google_Art_Project.jpg","San Juan Evangelista":"El_Greco_-_St._John_-_Google_Art_Project.jpg","San Andrés":"El_Greco_-_St._Andrew_-_Google_Art_Project.jpg","Santiago Apóstol":"Santiago_el_Mayor_(El_Greco).jpg","San Mateo":"Evangelist-St.-Matthew-And-The-Angel.jpg","San Lucas":"El_Greco_-_St_Luke_Painting_the_Virgin_-_Google_Art_Project.jpg","San Marcos":"Andrea_Mantegna_-_St._Mark_the_Evangelist_-_Google_Art_Project.jpg","San Juan Bautista":"San_Juan_Bautista_niño_en_el_desierto_por_Goya.jpg","Santa María Magdalena":"El_Greco_-_The_Penitent_Magdalene_-_Google_Art_Project.jpg","San Esteban":"Giovanni_del_Biondo_-_H._Stephanus.jpg","Santa Inés":"Massimo_Stanzione_-_Saint_Agnes_-_Google_Art_Project.jpg","Santa Cecilia":"Guido_Reni-Santa_Cecilia-dettaglio1.jpg","Santa Lucía":"Chartres_musée_Sainte_Lucie_Francisco_de_Zurbaran_Eure-et-Loir_France.jpg","San Jorge":"Raphael_-_Saint_George_and_the_Dragon_-_Google_Art_Project.jpg","San Nicolás":"Jacopo_Tintoretto_-_St_Nicholas_-_WGA22435.jpg","San Patricio":"Saint_Patrick_(window).jpg","San Benito":"San_Benito,_por_Francisco_de_Zurbarán.jpg","Santa Clara":"Santa_Clara,_de_Andrés_López_Polanco_(Museo_del_Prado).jpg","San Antonio de Padua":"San_Antonio_de_Padua_con_Niño_(Murillo).jpg","Santo Tomás de Aquino":"Carlo_Crivelli_007.jpg","San Agustín":"Sandro_Botticelli_050.jpg","Santa Mónica":"Sainte_Monique.jpg","San Ignacio de Loyola":"St_Ignatius_of_Loyola_(1491-1556)_Founder_of_the_Jesuits.jpg","San Francisco Javier":"San_Francisco_Javier_-_Miguel_Cabrera.jpg","Santa Teresa de Jesús":"Santa_Teresa_de_Jesús._(Museo_del_Prado).jpg","Santa Catalina de Siena":"Giovanni_di_paolo,_St_Catherine_of_Siena.jpg","Santa Teresa de Calcuta":"MotherTeresa_090.jpg","San Juan Pablo II":"Pope_John_Paul_II_visits_Katowice_church,_Poland_(detail).jpg","San Juan XXIII":"Ioannes_XXIII,_by_De_Agostini,_1958–1963.jpg","San Maximiliano Kolbe":"Fr.Maximilian_Kolbe_1939.jpg","San Isidro Labrador":"San_Isidro_labrador.jpg","San Joaquín y Santa Ana":"Camilo-san_joaquin_santa_ana_y_la_virgen.JPG","San Pío de Pietrelcina":"Padre_Pio_portrait.jpg","San Vicente de Paúl":"St_vincent_de_paul.jpg","San Luis Gonzaga":"The_Vocation_of_Saint_Aloysius_Gonzaga.PNG","San Pier Giorgio Frassati":"PierGiorgioFrassati-Présentation.jpg"};
{const _st=stampSVG;stampSVG=function(i,sz){const s=_st(i,sz),f=ALBUMIMG[ALBUM[i][0]];if(!f)return s;const cp=`scp${i}_${sz||0}`;
 return s.replace(/<\/svg>$/,`<defs><clipPath id="${cp}"><rect x="9" y="9" width="102" height="132" rx="7"/></clipPath></defs><image href="${WM(f,sz&&sz>160?500:330)}" x="9" y="9" width="102" height="132" preserveAspectRatio="xMidYMin slice" clip-path="url(#${cp})"/><rect x="9" y="9" width="102" height="132" rx="7" fill="none" stroke="#e8c45a" stroke-width="2"/></svg>`)}}
/* Revisar qué imágenes cargan (Zona de papás) */
function imgList(){const L=[];for(const[id,[f,cr]]of Object.entries(SACRO))L.push([id,WM(f,330),cr]);for(const[n,f]of Object.entries(ALBUMIMG))L.push([n,WM(f,330),"Álbum"]);return L.filter((x,i,a)=>a.findIndex(y=>y[1]===x[1])===i)}
function imgCheckPanel(){return`<section class="panel"><h2>Revisar imágenes</h2><p class="note">Las pinturas y fotos se descargan de internet la primera vez y luego quedan guardadas para usarse sin conexión. Este botón las descarga todas y dice cuáles no se pudieron abrir.</p><button class="btn" data-act="imgcheck">Revisar y guardar imágenes</button><div id="imgres" aria-live="polite"></div></section>`}
ACT.imgcheck=(v,b)=>{const L=imgList(),out=document.getElementById("imgres");let ok=0,bad=[],n=0;b.disabled=true;out.innerHTML=`<p>Revisando 0 de ${L.length}…</p>`;
 L.forEach(([k,src,cr])=>{const im=new Image();const done=good=>{n++;if(good)ok++;else bad.push(k+" ("+cr+")");out.innerHTML=`<p>Revisando ${n} de ${L.length}…</p>`;if(n===L.length){b.disabled=false;out.innerHTML=`<p><b>${ok} de ${L.length}</b> imágenes cargaron bien.</p>${bad.length?`<p class="note">No cargaron: ${bad.map(esc).join(", ")}. Donde falta una imagen se ve el dibujo de siempre.</p>`:""}`}};im.onload=()=>done(true);im.onerror=()=>done(false);im.src=src})};
/* ========= Más imágenes por página ========= */
const IM={
maiz:[UNS("photo-1689291960891-fbcfe4f96aa4"),"Foto: Jacob Padilla · Unsplash"],
pajarito:["Sagrada_Familia_del_pajarito_(Murillo).jpg","Murillo, «La Sagrada Familia del pajarito», Museo del Prado"],
manos:["Albrecht_Dürer_-_Praying_Hands,_1508_-_Google_Art_Project.jpg","Alberto Durero, «Manos que rezan» (1508)"],
dou:["Gerard_Dou_-_Old_Woman_Praying_-_WGA06640.jpg","Gerard Dou, «Anciana rezando»"],
angelguarda:["Gaspar_de_Crayer_-_The_Guardian_Angel.jpg","Gaspar de Crayer, «El ángel de la guarda»"],
rublev:["Andrey_Rublev_-_Св._Троица_-_Google_Art_Project.jpg","Andréi Rubliov, «La Trinidad»"],
espigadoras:["Jean-François_Millet_-_Gleaners_-_Google_Art_Project.jpg","Jean-François Millet, «Las espigadoras» (1857)"],
virgenNino:["La_Virgen_con_el_Niño_(Murillo).jpg","Murillo, «La Virgen con el Niño»"],
anunMurillo:["La_anunciación_(Murillo,_h._1660).jpg","Murillo, «La Anunciación» (hacia 1660)"],
anunFra:["La_Anunciación,_by_Fra_Angelico,_from_Prado_in_Google_Earth.jpg","Fra Angélico, «La Anunciación», Museo del Prado"],
guadalupe:["Virgin_of_Guadalupe_-_Google_Art_Project.jpg","Nuestra Señora de Guadalupe"],
natividad:["Angelico,_predella_dell'annunciazione_01_natività_e_sposalizio_della_vergine.JPG","Fra Angélico, escenas de la vida de María (detalle)"],
magos:["Gentile_da_Fabriano_-_Adorazione_dei_Magi_-_Google_Art_Project.jpg","Gentile da Fabriano, «La adoración de los Magos» (1423)"],
apostoles:["Brooklyn_Museum_-_The_Exhortation_to_the_Apostles_(Recommandation_aux_apôtres)_-_James_Tissot.jpg","James Tissot, «Jesús y los apóstoles»"],
lazaro:["RaisingofLazarusBloch.jpg","Carl Bloch, «La resurrección de Lázaro»"],
buenpastor:["BuenPastorMurillo1660.jpg","Murillo, «El Buen Pastor»"],
ninos:["Let_the_Little_Children_Come_unto_Jesus.jpg","Carl Bloch, «Dejen que los niños vengan a mí»"],
tentacion:["James_Tissot_Jesus_Ministered_to_by_Angels.jpg","James Tissot, «Los ángeles sirven a Jesús en el desierto»"],
entrada:["Giotto_-_Scrovegni_-_-26-_-_Entry_into_Jerusalem2.jpg","Giotto, «La entrada en Jerusalén», Capilla de los Scrovegni"],
crucificado:["Cristo_en_la_Cruz_(Velázquez,_1631).jpg","Velázquez, «Cristo en la cruz» (1631)"],
resurreccion:["TheResurrectionOfChrist.jpg","Carl Bloch, «La Resurrección» (1875)"],
plaza:["Piazza_San_Pietro_Panorama_from_basilica.jpg","Plaza de San Pedro, Vaticano · foto de Wikimedia Commons"],
altarperdon:["Altar_del_perdón.jpg","Altar del Perdón, Catedral de México · foto de Wikimedia Commons"],
francisco:["Francis_of_Assisi_-_Cimabue.jpg","Cimabue, «San Francisco de Asís»"],
paraiso:["Angelico,_trittico_del_giudizio_universale,_02_paradiso.JPG","Fra Angélico, «El paraíso» (detalle)"],
arcangeles:["Francesco_Botticini_-_I_tre_Arcangeli_e_Tobias.jpg","Francesco Botticini, «Los tres arcángeles con Tobías»"],
masaccio:["Masaccio,_trinità,_dettaglio_1.jpg","Masaccio, «La Trinidad» (detalle), Florencia"],
bautismoV:["Verrocchio,_Leonardo_da_Vinci_-_Battesimo_di_Cristo_-_Google_Art_Project.jpg","Verrocchio y Leonardo, «El Bautismo de Cristo»"],
bautismoP:["Piero_della_Francesca_-_Battesimo_di_Cristo_(National_Gallery,_London).jpg","Piero della Francesca, «El Bautismo de Cristo»"],
agustinT:["San_Agustín_meditando_sobre_la_Trinidad.jpg","«San Agustín meditando sobre la Trinidad»"],
ascension:["Benvenuto_Tisi_da_Garofalo_-_Ascension_of_Christ_-_WGA08474.jpg","Garofalo, «La Ascensión de Cristo»"],
transfig:["Transfigurationbloch.jpg","Carl Bloch, «La Transfiguración»"],
tissotMoises:["Tissot_Moses_and_the_Ten_Commandments.jpg","James Tissot, «Moisés y los Diez Mandamientos»"],
alkmaar:["Werken_van_Barmhartigheid,_Meester_van_Alkmaar_(1504).jpg","Maestro de Alkmaar, «Las siete obras de misericordia» (1504)"],
sermon:["Bloch-SermonOnTheMount.jpg","Carl Bloch, «El Sermón de la Montaña»"],
angelus:["Jean-François_Millet_Angelus.jpg","Jean-François Millet, «El Ángelus»"],
weydenL:["Rogier_van_der_Weyden_-_Seven_Sacraments_(left_wing)_-_WGA25604.jpg","Rogier van der Weyden, «Bautismo, Confirmación y Confesión» (detalle)"],
pila:["Interior_of_San_Pantaleone_(Venice)_Fonte_battesimale.jpg","Pila bautismal, iglesia de San Pantaleón, Venecia · foto de Wikimedia Commons"],
pila2:["Chiesa_di_San_Canciano_-_baptismal_font.jpg","Pila bautismal, iglesia de San Canciano · foto de Wikimedia Commons"],
prodigoM:["Return_of_the_Prodigal_Son_1667-1670_Murillo.jpg","Murillo, «El regreso del hijo pródigo»"],
prodigo2:["Bartolome_murillo-hijo_prodigo.jpg","Murillo, «El hijo pródigo»"],
confesionario:["Iglesia_de_Nuestra_Señora_de_la_Antigua_-_Confessional.jpg","Un confesionario · foto de Wikimedia Commons"],
pedroL:["El_Greco_-_The_Repentant_St._Peter_-_Google_Art_Project.jpg","El Greco, «Las lágrimas de san Pedro»"],
misa:["Initial_C-_A_Priest_Celebrating_Mass_-_Google_Art_Project.jpg","«Un sacerdote celebra la Misa», manuscrito medieval"],
agnus:["Agnus_Dei_Zurbarán.jpg","Zurbarán, «Agnus Dei, el Cordero de Dios»"],
comulgantes:["Jules_Breton_The_Communicants.jpg","Jules Breton, «Las comulgantes»"],
sagradaForma:["Cl.Coello.La_Sagrada_Forma.1685-90.Sacristy,_El_Escorial.jpg","Claudio Coello, «La adoración de la Sagrada Forma», El Escorial"],
custodia:["Eucharistic_Adoration.jpg","La custodia con el Santísimo · foto de Wikimedia Commons"],
rubensE:["Peter_Paul_Rubens,The_Princes_of_the_Church_Adoring_the_Eucharist,_about_1626-1627._Speed_Art_Museum.jpg","Rubens, «Adoración de la Eucaristía»"],
tissotPN:["Brooklyn_Museum_-_The_Lord's_Prayer_(Le_Pater_Noster)_-_James_Tissot.jpg","James Tissot, «El Padre Nuestro»"],
virtudes:["Raphael_-_Cardinal_and_Theological_Virtues.jpg","Rafael, «Las virtudes», Vaticano"],
gutenberg:["An_illuminated_page_of_the...Gutenberg_Bible..._LCCN2006680004.jpg","Una página de la Biblia de Gutenberg (1455), Biblioteca del Congreso"],
evangelistas:["Four_Evangelists_Jordaens_Louvre_Inv1404.jpg","Jacob Jordaens, «Los cuatro evangelistas», Louvre"],
promesas:["Tissot_God_Renews_His_Promises_to_Abraham.jpg","James Tissot, «Dios renueva sus promesas a Abraham»"],
abram:["Tissot_Abram's_Counsel_to_Sarai.jpg","James Tissot, «Abraham y Sara en camino»"],
poynter:["1867_Edward_Poynter_-_Israel_in_Egypt.jpg","Edward Poynter, «Israel en Egipto» (1867)"],
marRojo:["Nicolas_Poussin_-_Le_Passage_de_la_mer_Rouge.jpg","Nicolas Poussin, «El paso del mar Rojo»"],
moisesR:["Rembrandt_-_Moses_with_the_Ten_Commandments_-_Google_Art_Project.jpg","Rembrandt, «Moisés con las tablas de la Ley»"],
honore:["MASTER_HONORÉ_David_anointed_by_Samuel_and_battle_of_David_and_Goliath,_folio_7_verso_of_the_Breviary_of_Philippe_le_Bel,_from_Paris,_France,_1296_Bibliothèque_Nationale,_Paris.jpg","Maestro Honoré, «David ungido por Samuel y David contra Goliat» (1296)"],
bossuit:["Francis_van_Bossuit_-_David_and_Goliath.jpg","Francis van Bossuit, «David y Goliat», relieve en marfil"],
saulDavid:["Rembrandt_Saul_and_David.jpg","Rembrandt, «David toca el arpa para Saúl»"],
westminster:["Westminster_Psalter_David.jpg","«El rey David», Salterio de Westminster"],
juanB:["San_Juan_Bautista_niño_en_el_desierto_por_Goya.jpg","Goya, «San Juan Bautista niño en el desierto»"],
lastSermon:["Brooklyn_Museum_-_The_Last_Sermon_of_Our_Lord_(Dernier_Sermon_de_Notre-Seigneur)_-_James_Tissot.jpg","James Tissot, «Jesús enseña a la multitud»"],
maino:["Maino_Pentecostés,_1620-1625._Museo_del_Prado.jpg","Juan Bautista Maíno, «Pentecostés», Museo del Prado"],
grecoPent:["El_Greco_-_The_Pentecost_-_WGA10533.jpg","El Greco, «Pentecostés»"],
vitral:["Holy_Spirit_stained-glass_window_(Cathedra_Petri).jpg","Vitral del Espíritu Santo, Basílica de San Pedro · foto de Wikimedia Commons"],
visitacion:["La_Visitation_avec_Marie-Jacobie_et_Marie-Salomé_-_Domenico_Ghirlandaio_-_Musée_du_Louvre_Peintures_INV_297_;_MR_240.jpg","Ghirlandaio, «La Visitación», Louvre"],
vicente:["St_vincent_de_paul.jpg","San Vicente de Paúl"],
teresaC:["MotherTeresa_090.jpg","Santa Teresa de Calcuta · foto de Wikimedia Commons"],
juanesCena:["La_Última_Cena_(Juan_de_Juanes)_(restaurada).jpg","Juan de Juanes, «La Última Cena»"],
weyden:["Seven_Sacraments_Rogier.jpg","Rogier van der Weyden, «Retablo de los Siete Sacramentos»"],
betesda:["Pedro_Orrente_-_Christ_Healing_the_Sick_at_the_Pool_of_Bethesda.jpg","Pedro Orrente, «Jesús sana a los enfermos en Betesda»"],
pedroPablo:["El_Greco_-_Saint_Peter_and_Saint_Paul_-_Google_Art_Project.jpg","El Greco, «San Pedro y San Pablo»"],
ines:["Massimo_Stanzione_-_Saint_Agnes_-_Google_Art_Project.jpg","Massimo Stanzione, «Santa Inés»"],
felipe:["FelipeJesusVirreinato.JPG","«San Felipe de Jesús», pintura virreinal"],
ana:["Rembrandt_prophet_hannah.jpg","Rembrandt, «La profetisa Ana leyendo»"],
prudencia:["Giotto_-_Scrovegni_-_-40-_-_Prudence.jpg","Giotto, «La Prudencia», Capilla de los Scrovegni"],
jeronimo:["Saint_Jerome_Writing-Caravaggio_(1605-6).jpg","Caravaggio, «San Jerónimo escribiendo»"],
samuelI:["InfantSamuel.jpg","Joshua Reynolds, «El niño Samuel rezando»"],
samuelC:["Reynolds,_Sir_Joshua_-_The_Calling_of_Samuel_-_Google_Art_Project.jpg","Joshua Reynolds, «Dios llama a Samuel»"],
gonzaga:["The_Vocation_of_Saint_Aloysius_Gonzaga.PNG","Guercino, «La vocación de san Luis Gonzaga»"],
bosco:["Don_Bosco.jpg","San Juan Bosco · fotografía antigua"],
sembrador:["Jean-François_Millet_-_The_Sower_-_Google_Art_Project.jpg","Jean-François Millet, «El sembrador»"]
};
/* lección: {página: clave de IM o "L:lámina"} */
const PG={r1:{3:"maiz"},r2:{1:"pajarito",2:"manos"},r3:{1:"dou",2:"angelguarda",3:"rublev"},r4:{1:"manos",2:"espigadoras"},r5:{1:"virgenNino",2:"anunMurillo",3:"guadalupe"},r6:{1:"natividad",2:"magos",3:"pajarito"},r7:{1:"apostoles",2:"lazaro",3:"buenpastor",4:"ninos"},r8:{0:"tentacion",1:"entrada",2:"crucificado",3:"resurreccion"},r9:{1:"L:templo",2:"plaza",3:"altarperdon"},r10:{1:"francisco",2:"paraiso",3:"arcangeles"},
pc1:{1:"masaccio",2:"bautismoV",3:"agustinT"},pc2:{4:"anunFra"},pc3:{1:"crucificado",2:"ascension",3:"transfig"},pc4:{1:"tissotMoises",2:"alkmaar",3:"sermon"},pc5:{1:"angelus",2:"tentacion"},pc6:{1:"weydenL"},pc7:{1:"pila",2:"pila2"},pc8:{2:"prodigoM",3:"confesionario",4:"pedroL"},pc9:{1:"misa",2:"agnus",3:"comulgantes"},pc10:{1:"sagradaForma",2:"custodia",3:"comulgantes"},pc11:{1:"tissotPN",2:"anunFra",3:"pedroL"},pc12:{1:"virtudes",2:"alkmaar"},
"2r1":{1:"gutenberg",2:"evangelistas"},"2r2":{1:"promesas",2:"abram"},"2r3":{0:"poynter",2:"marRojo",3:"moisesR"},"2r4":{0:"honore",1:"bossuit",2:"saulDavid",3:"westminster"},"2r5":{2:"juanB"},"2r6":{1:"bautismoP",2:"tentacion"},"2r7":{1:"prodigo2",3:"buenpastor"},"2r8":{1:"ninos",2:"lastSermon"},"2r9":{1:"maino",3:"vitral"},"2r10":{1:"L:rosario",2:"visitacion",3:"virgenNino"},"2r11":{1:"L:colores"},
"2pc1":{1:"pila",2:"weydenL"},"2pc2":{1:"manos",2:"alkmaar",3:"prodigoM"},"2pc3":{1:"evangelistas",2:"paraiso",3:"agnus"},"2pc4":{0:"L:templo",1:"sagradaForma",2:"confesionario"},"2pc5":{1:"vicente",2:"teresaC"},"2pc6":{1:"angelus",2:"dou"},"2pc7":{1:"sagradaForma",2:"manos",3:"rubensE"},"2pc8":{2:"juanesCena",3:"ninos"},
"3r1":{1:"masaccio",2:"crucificado",3:"grecoPent"},"3r2":{1:"plaza",2:"weyden"},"3r3":{1:"visitacion",2:"guadalupe"},"3r4":{1:"buenpastor",2:"prodigoM"},"3r5":{1:"betesda",2:"manos"},"3r6":{1:"pedroPablo",2:"maino"},"3r7":{1:"ines",2:"felipe"},"3r8":{1:"dou",2:"ana"},"3r9":{1:"juanesCena",2:"agnus"},"3r10":{1:"prudencia",2:"virtudes"},
"3pc1":{1:"angelus",2:"comulgantes"},"3pc2":{1:"jeronimo",2:"evangelistas"},"3pc3":{1:"grecoPent",2:"maino"},"3pc4":{1:"samuelI",2:"samuelC"},"3pc5":{1:"gonzaga",2:"bosco"},"3pc6":{1:"angelus",2:"ninos"}};
(function(){const find=id=>{for(const s of SUBJ)for(const u of s.units)for(const l of u.ls)if(l.id===id)return l};
 for(const[id,m]of Object.entries(PG)){const l=find(id);if(!l)continue;
  for(const[k,key]of Object.entries(m)){const pg=l.learn[+k];if(!pg||pg.info)continue;
   let nv;if(key.startsWith("L:"))nv={t:"lam",id:key.slice(2)};else{const[f,cr]=IM[key];nv={t:"photo",src:/^https?:/.test(f)?f:WM(f,800),alt:pg.h,cap:"",credit:cr,art:!/^https?:/.test(f)}}
   const old=pg.v;if(old&&old.t==="photo"&&!key.startsWith("L:")){pg.v=nv;continue}
   if(old&&old.t==="combo"){old.x=old.x.filter(x=>x.t!=="photo"||key.startsWith("L:"));old.x.unshift(nv);if(old.x.length===1)pg.v=nv;continue}
   pg.v=!old||old.t==="emo"?nv:{t:"combo",x:[nv,old]}}}})();
