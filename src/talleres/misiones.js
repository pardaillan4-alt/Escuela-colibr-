/* ========= Misiones: tareas para vivir lo aprendido en Religión, Primera Comunión y Escuela de oración ========= */
/* lección: [título, qué hacer, oración guiada opcional] */
const MISION={
r1:["Admira la creación","Sal al patio o a un parque con un adulto. Busca tres cosas que Dios creó (una flor, un insecto, una nube) y dibújalas. Dale gracias a Dios por cada una."],
r2:["Platica con tu Papá del cielo","Esta noche, antes de dormir, cuéntale a Dios con tus palabras cómo te fue hoy, como se lo contarías a tu papá.","noc"],
r3:["Persígnate todo el día","Haz bien la Señal de la Cruz al despertar, antes de comer y antes de dormir. Pide a un adulto que te recuerde si se te olvida."],
r4:["El Padre Nuestro en familia","Reza el Padre Nuestro con tu familia antes de una comida. Luego compartan algo de pan o de comida con alguien que lo necesite."],
r5:["Un regalo para mamá María","Haz un dibujo o lleva una flor a una imagen de la Virgen y rézale un Ave María. Y ayuda hoy a tu mamá en algo sin que te lo pida."],
r6:["Prepara tu corazón para Jesús","Haz una obra buena cada día de esta semana (compartir, ayudar, no pelear) y dibuja una pajita para el pesebre por cada una."],
r7:["Ama como Jesús","Escoge a alguien que esté solo o triste (un hermano, un compañero, un vecino) y haz algo bonito por él: invítalo a jugar, regálale un dibujo o escúchalo."],
r8:["Un sacrificio por amor","Ofrece a Jesús un pequeño sacrificio: comer sin quejarte lo que te sirvan, prestar tu juguete favorito o dejar la tableta un rato. Dile: «Jesús, esto es por amor a ti»."],
r9:["Visita la casa de Dios","Ve a Misa este domingo. Al entrar, haz la genuflexión frente al sagrario y fíjate dónde están el altar, el ambón y el sagrario."],
r10:["Conoce a un santo","Escoge un santo de tu álbum, lee su vida y cuéntasela a alguien de tu familia. Pídele que rece por ti."],
pc1:["La Trinidad en tu día","Cada vez que hagas la Señal de la Cruz hoy, hazla despacio pensando: el Padre me creó, el Hijo me salvó, el Espíritu Santo vive en mí."],
pc2:["Elige el bien","Hoy, cuando sientas ganas de hacer algo malo (mentir, pelear, desobedecer), detente, respira y escoge lo bueno. En la noche cuéntale a Jesús cómo te fue.","noc"],
pc3:["Gracias, Jesús","Escribe o dibuja una carta a Jesús dándole gracias por haber muerto y resucitado por ti. Ponla en tu rincón de oración."],
pc4:["Un mandamiento cada día","Esta semana escoge un mandamiento cada día y vívelo: por ejemplo, el cuarto, «obedecer a tus papás a la primera». Pide a un adulto que te ayude a revisarlo."],
pc5:["El domingo es de Dios","Este domingo ve a Misa con tu familia, pon atención y al salir cuéntale a alguien qué dijo el Evangelio."],
pc6:["Busca los sacramentos","Pregunta a tus papás o abuelos qué sacramentos han recibido y cuándo. Pide ver fotos de su Bautismo, Primera Comunión o boda."],
pc7:["Recuerda tu Bautismo","Pregunta a tus papás la fecha de tu Bautismo, quiénes son tus padrinos y en qué iglesia fue. Si puedes, llama o visita a tus padrinos para darles las gracias."],
pc8:["Examen de conciencia y perdón","Esta noche haz tu examen de conciencia con la oración guiada. Si ya hiciste tu Primera Comunión, pide a tus papás que te lleven a confesarte. Si todavía no, pide perdón a alguien a quien hayas ofendido.","noc"],
pc9:["Misa con los ojos abiertos","En la próxima Misa, fíjate en los momentos importantes: las lecturas, el Evangelio, la consagración y la comunión. Contesta las respuestas en voz alta."],
pc10:["Jesús en la Eucaristía","En la próxima Misa, cuando el sacerdote levante la Hostia, di en tu corazón: «Señor mío y Dios mío». Si todavía no comulgas, haz una comunión espiritual.","vis"],
pc11:["Aprende una oración","Escoge una oración que todavía no sepas de memoria, apréndetela esta semana y rézala a tus papás. Márcala en «Mis oraciones»."],
pc12:["Un compromiso para siempre","Escribe tres compromisos para después de tu Primera Comunión (por ejemplo: ir a Misa cada domingo, rezar cada noche, confesarme seguido) y pégalos en tu cuarto."],
"2r1":["Lee la Biblia en familia","Busquen juntos en la Biblia Marcos 10,13-16 (Jesús y los niños). Léanlo en voz alta y platiquen qué les gustó."],
"2r2":["Confía como Abraham","Esta noche sal a ver las estrellas con un adulto y da gracias a Dios por las promesas que te ha cumplido."],
"2r3":["Agradece tu libertad","Haz una lista de cinco cosas de las que Dios te ha librado o que te ha regalado, y dale gracias."],
"2r4":["Canta a Dios","Aprende un canto a Dios o a la Virgen y cántalo con tu familia, como el rey David con su arpa."],
"2r5":["Sé un mensajero","Cuéntale a un amigo o familiar una historia de Jesús que hayas aprendido."],
"2r6":["Vence una tentación","Escoge algo que te cuesta (comer dulces a escondidas, contestar feo, flojear) y durante tres días di «no» a esa tentación, como Jesús en el desierto."],
"2r7":["Pide perdón y perdona","Pide perdón a alguien a quien hayas ofendido, y perdona a alguien que te ofendió. Dale un abrazo como el del padre del hijo pródigo."],
"2r8":["Sé constructor de paz","Cuando veas una pelea entre hermanos o amigos, ayuda a hacer las paces en lugar de pelear tú también."],
"2r9":["Pide al Espíritu Santo","Reza cada mañana de esta semana «Ven, Espíritu Santo» y pídele un don que necesites: valentía, paciencia o sabiduría."],
"2r10":["Una decena con tu familia","Reza una decena del rosario con tu familia esta semana. Puedes usar la oración guiada.","ros"],
"2r11":["Descubre el color de hoy","En la próxima Misa fíjate de qué color va vestido el sacerdote y explícale a tu familia qué tiempo litúrgico estamos viviendo."],
"2pc1":["Cuida la gracia","Esta semana, antes de dormir, pregúntate: ¿hoy cuidé mi amistad con Dios? Si fallaste, pide perdón con un acto de contrición.","noc"],
"2pc2":["Mi examen de conciencia","Haz tu examen de conciencia tres noches seguidas con la oración guiada de la noche. Si tienes dudas, platícalas con tus papás.","noc"],
"2pc3":["Responde en Misa","En la próxima Misa responde en voz alta todas las respuestas que aprendiste: «Y con tu espíritu», «Te alabamos, Señor», «Amén»."],
"2pc4":["Recorre el templo","Pide a un adulto que te lleve a la iglesia fuera de la hora de Misa. Busca el altar, el sagrario, el ambón, la pila bautismal y el confesionario."],
"2pc5":["Una obra de misericordia","Haz una obra de misericordia esta semana: regala ropa que ya no uses, visita o llama a un enfermo, comparte tu comida o enseña algo a quien no sabe."],
"2pc6":["Bendice tu casa","Pide a tus papás agua bendita y hagan la Señal de la Cruz al salir de casa. Pongan una cruz o una imagen en un lugar especial."],
"2pc7":["Visita a Jesús","Pide a un adulto que te lleve a visitar a Jesús en el sagrario unos minutos. Si no puedes ir, haz la visita guiada desde casa.","vis"],
"2pc8":["Prepárate para el gran día","Haz esta semana una lista de cosas por preparar para tu Primera Comunión: tu corazón (confesión), tu ropa y tu invitación a la familia. Reza cada día por ese momento."],
"3r1":["Reza el Credo despacio","Reza el Credo en voz alta con tu familia y, al terminar, cada quien diga qué parte le gustó más."],
"3r2":["Ama a tu Iglesia","Investiga cómo se llama tu parroquia, quién es tu párroco y quién es tu obispo. Recen por ellos y por el Papa."],
"3r3":["Honra a María","Busca una imagen de la Virgen, pon una flor junto a ella y reza «Bendita sea tu pureza» cada mañana de esta semana."],
"3r4":["Vive una parábola","Escoge una parábola (el buen samaritano, la oveja perdida) y haz algo esta semana para vivirla: ayuda a quien lo necesite o busca al que está solo."],
"3r5":["Reza por un enfermo","Escoge a una persona enferma que conozcas, reza por ella cada día de esta semana y, si puedes, mándale un dibujo o un mensaje."],
"3r6":["Sé misionero","Escribe una carta como San Pablo a un amigo o familiar contándole por qué amas a Jesús."],
"3r7":["Valiente en tu fe","No te avergüences de tu fe: bendice tus alimentos aunque estés fuera de casa y reza por los cristianos perseguidos en el mundo."],
"3r8":["Las cuatro formas de orar","Reza esta semana usando las cuatro formas: adorar, pedir perdón, dar gracias y pedir. Puedes usar la oración guiada.","acgp"],
"3r9":["Ofrécete en la Misa","En la próxima Misa, cuando se lleven las ofrendas al altar, ofrece a Dios en tu corazón tus esfuerzos de la semana."],
"3r10":["Una virtud por semana","Escoge una virtud que te cueste (paciencia, orden, generosidad) y practícala toda la semana. Anota cada día si lo lograste."],
"3pc1":["Un domingo para Dios","Planea con tu familia un domingo especial: Misa, comida juntos, un paseo y una obra buena."],
"3pc2":["Lectio divina","Haz la oración con la Biblia tres días esta semana con la oración guiada.","bib"],
"3pc3":["Pide los dones","Aprende los siete dones del Espíritu Santo y pide uno distinto cada día de la semana."],
"3pc4":["Pregunta por su vocación","Pregunta a un sacerdote, a una religiosa o a tus papás cómo descubrieron su vocación. Reza por las vocaciones."],
"3pc5":["Haz un apostolado","Invita a un amigo a rezar contigo, a ir a Misa o regálale una estampa de un santo y cuéntale su vida."],
"3pc6":["Tu plan de vida","Escribe tu plan de vida cristiana (qué harás cada día, cada semana y cada mes) y revísalo con tus papás el domingo."],
or1:["Platica con Dios","Habla hoy con Dios con tus propias palabras tres veces: al despertar, a mediodía y en la noche."],
or2:["Arma tu rincón de oración","Con ayuda de tus papás, prepara en tu casa un rincón de oración con una cruz, una imagen de la Virgen y una Biblia."],
or3:["Reza con la manita","Reza cada noche de esta semana usando los dedos de tu mano: adorar, pedir perdón, dar gracias y pedir.","acgp"],
or4:["La Palabra del día","Haz la oración con la Biblia de hoy y cuéntale a alguien qué palabra te gustó.","bib"],
or5:["Mañana y noche con Dios","Reza la oración de la mañana y la de la noche durante tres días seguidos.","man"],
or6:["Una decena para María","Reza una decena del rosario esta semana por alguien que lo necesite.","ros"]};
/* --- Guardar y cumplir misiones --- */
function misOf(p){p.mis=p.mis||{};return p.mis}
function misionStars(p){return Object.values(misOf(p||me())).filter(m=>m.done).length}
function misionCard(id){const m=MISION[id];if(!m)return"";let st=null;try{st=misOf(me())[id]}catch(e){}return`<section class="mision"><p class="fe-tag">🎯 Tu misión para vivir lo que aprendiste</p><h3>${m[0]}</h3><p>${m[1]}</p><div class="row center">${m[2]?`<button class="btn ghost" data-act="rz" data-v="${m[2]}" style="--sc:var(--rel)">Hacer la oración guiada</button>`:""}${st&&st.done?`<span class="okmark">✓ ¡Misión cumplida!</span>`:st?`<button class="btn" data-act="misdone" data-v="${id}" style="--sc:var(--rel)">¡Ya la cumplí!</button>`:`<button class="btn" data-act="misadd" data-v="${id}" style="--sc:var(--rel)">Acepto la misión</button>`}</div></section>`}
function misionPending(p){return Object.entries(misOf(p)).filter(([id,m])=>!m.done&&MISION[id])}
function misionHomeCard(){const P=misionPending(me());if(!P.length)return"";const[id]=P[0];return`<section class="reto" style="border-color:var(--rel)"><div class="tz-mini" aria-hidden="true">🎯</div><div><h3>${P.length===1?"Tienes una misión":"Tienes "+P.length+" misiones"}</h3><p>${MISION[id][0]}${P.length>1?` y ${P.length-1} más`:""}.</p></div><button class="btn" data-act="misv" style="--sc:var(--rel)">Ver</button></section>`}
function misionView(){LS=null;begin();MODE="mis";const p=me(),M=misOf(p),P=misionPending(p),D=Object.entries(M).filter(([id,m])=>m.done&&MISION[id]).sort((a,b)=>b[1].done-a[1].done);
 app(`<button class="back" data-act="home">${ui("back")} Inicio</button><section class="sband" style="--sc:var(--rel);--ss:var(--rel-s)"><span class="sic tz-ic" aria-hidden="true">🎯</span><div><p class="eyebrow">Vivir la fe</p><h1>Mis misiones</h1><p>Cada lección de Religión y de la Escuela de oración trae una misión para vivir lo aprendido. Cada misión cumplida suma una estrella a tu álbum.</p></div></section>
 <h2 class="sec">Por cumplir</h2>${P.length?P.map(([id])=>misionCard(id)).join(""):`<p class="note">No tienes misiones pendientes. Al terminar una lección de Religión podrás aceptar una nueva.</p>`}
 ${D.length?`<h2 class="sec">Cumplidas (${D.length})</h2><ul class="dlist">${D.map(([id,m])=>`<li class="resp"><small>${new Date(m.done).toLocaleDateString("es-MX",{day:"numeric",month:"short"})}</small><p>✓ <b>${MISION[id][0]}</b></p>${m.nota?`<p>«${esc(m.nota)}»</p>`:""}</li>`).join("")}</ul>`:""}`);scrollTo(0,0)}
function misionRefresh(){if(MODE==="mis")misionView();else{document.querySelectorAll(".mision").forEach(s=>{const b=s.querySelector("[data-act=misadd],[data-act=misdone]");const id=b?b.dataset.v:null;if(id)s.outerHTML=misionCard(id)})}}
Object.assign(ACT,{misv:()=>misionView(),misadd:v=>{misOf(me())[v]={at:Date.now()};save();SND.ok();say("¡Misión aceptada! "+MISION[v][1],true);misionRefresh()},
 misdone:v=>{sheet(`<div class="rt-done"><h2>¡Misión cumplida!</h2><p><b>${MISION[v][0]}</b></p><label class="mis-nota">¿Cómo te fue? (opcional)<textarea id="misnota" rows="3" maxlength="200" placeholder="Por ejemplo: ayudé a mi hermano con su tarea."></textarea></label><button class="btn" data-act="missave" data-v="${v}" style="--sc:var(--rel)">Guardar</button></div>`)},
 missave:v=>{const n=(document.getElementById("misnota")||{}).value||"";const u0=unlockedN(me());misOf(me())[v]={...(misOf(me())[v]||{}),done:Date.now(),nota:n.trim()};save();closeSheet();SND.win();try{confetti()}catch(e){}say("¡Muy bien! Cumpliste tu misión. Ganaste una estrella.",true);misionRefresh();if(unlockedN(me())>u0)setTimeout(()=>{if(typeof newStampHTML==="function")sheet(newStampHTML(u0,unlockedN(me()))+`<button class="btn ghost" data-act="close">Cerrar</button>`)},600)}});
/* Las misiones cumplidas cuentan como estrellas */
{const _ts=totalStars;totalStars=function(p){return _ts(p)+misionStars(p||me())}}
/* La misión aparece en la pantalla final de la clase y como página al final de «Aprende» */
{const _fin=finish;finish=function(){const id=LS&&LS.l&&!LS.review&&!LS.exam&&!LS.reto?LS.l.id:null;const r=_fin.apply(this,arguments);if(id&&MISION[id]){const res=document.querySelector(".result");if(res&&res.insertAdjacentHTML)res.insertAdjacentHTML("beforeend",misionCard(id))}return r}}
VX.mision=v=>misionCard(v.id);
(function(){for(const s of SUBJ)for(const u of s.units)for(const l of u.ls)if(MISION[l.id])l.learn.push(F("Tu misión","Lo que aprendimos se vive. Acepta esta misión y cuéntanos cuando la cumplas.",{t:"mision",id:l.id}))})();
/* En la Zona de papás: misiones del niño */
function misionPanel(){const p=me(),M=misOf(p),all=Object.entries(M).filter(([id])=>MISION[id]);const done=all.filter(([,m])=>m.done);return`<section class="panel"><h2>Misiones de fe</h2><p class="note">Cada lección de Religión trae una tarea práctica (rezar, ayudar, ir a Misa, confesarse…). Acompañen al niño para cumplirla.</p><p>Aceptadas: <b>${all.length}</b> · Cumplidas: <b>${done.length}</b></p>${all.length?`<ul class="dlist">${all.slice(-8).reverse().map(([id,m])=>`<li class="${m.done?"resp":""}"><p>${m.done?"✓":"⏳"} <b>${MISION[id][0]}</b></p>${m.nota?`<p>«${esc(m.nota)}»</p>`:""}</li>`).join("")}</ul>`:""}</section>`}
