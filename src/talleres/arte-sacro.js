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
