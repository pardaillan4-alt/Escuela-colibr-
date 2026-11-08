/* ========= Vivir la fe al ritmo de la Iglesia: santo del día con estampa, calendario litúrgico y Evangelio explicado ========= */
function md4(d){return String(d.getMonth()+1).padStart(2,"0")+String(d.getDate()).padStart(2,"0")}
function gosOf(k){const g=GOS[k]||GOS[k.replace(/^[ABC]-/,"")];if(!g)return null;const x=g.length>3?g.slice(3):(GOSX[k]||GOSX[k.replace(/^[ABC]-/,"")]||[]);return{ref:g[0],t:g[1],s:g[2],teach:x[0],ask:x[1],todo:x[2]}}
function albumIdx(md){return ALBUM.findIndex(a=>a[1]===md)}
/* Fiestas móviles y grandes solemnidades (México) */
function moveFeasts(y){const E=easter(y),o={};const put=(d,n,c)=>{o[ds(d)]=[n,c]};
 put(addD(E,-46),"Miércoles de Ceniza","morado");put(addD(E,-7),"Domingo de Ramos","rojo");put(addD(E,-3),"Jueves Santo","blanco");put(addD(E,-2),"Viernes Santo","rojo");put(addD(E,-1),"Sábado Santo","morado");put(E,"Domingo de Resurrección","blanco");
 put(addD(E,7),"Domingo de la Divina Misericordia","blanco");put(addD(E,42),"Ascensión del Señor","blanco");put(addD(E,49),"Pentecostés","rojo");put(addD(E,56),"Santísima Trinidad","blanco");put(addD(E,63),"Cuerpo y Sangre de Cristo","blanco");put(addD(E,68),"Sagrado Corazón de Jesús","blanco");put(addD(E,69),"Inmaculado Corazón de María","blanco");
 const A=advent1(y);put(addD(A,-7),"Jesucristo, Rey del Universo","blanco");put(A,"1.er domingo de Adviento","morado");put(addD(A,14),"Domingo Gaudete","rosa");
 put(epiphanyMX(y),"Epifanía del Señor","blanco");put(baptism(y),"Bautismo del Señor","blanco");
 put(new Date(y,11,25,12),"Natividad del Señor","blanco");put(new Date(y,0,1,12),"Santa María, Madre de Dios","blanco");put(new Date(y,11,8,12),"Inmaculada Concepción","blanco");put(new Date(y,11,12,12),"Nuestra Señora de Guadalupe","blanco");
 put(new Date(y,7,15,12),"Asunción de la Virgen María","blanco");put(new Date(y,10,1,12),"Todos los Santos","blanco");put(new Date(y,10,2,12),"Fieles difuntos","morado");put(new Date(y,2,19,12),"San José","blanco");put(new Date(y,2,25,12),"Anunciación del Señor","blanco");put(new Date(y,5,29,12),"San Pedro y San Pablo","rojo");put(new Date(y,5,24,12),"Nacimiento de san Juan Bautista","blanco");
 return o}
const _MFc={};function feastOf(d){const y=d.getFullYear();if(!_MFc[y])_MFc[y]=moveFeasts(y);return _MFc[y][ds(d)]||null}
function dayInfo(d){d=new Date(d);d.setHours(12,0,0,0);const L=litInfo(d),f=feastOf(d),md=md4(d),sa=SANTOS[md],ai=albumIdx(md);let color=f&&f[1]?f[1]:L.color;
 if(!f&&sa&&/mártir|Mártir|Mártires|apóstol|Apóstol|Evangelista/.test(sa)&&L.season==="ord")color="rojo";
 return{d,L,color,feast:f?f[0]:null,saint:sa?sa.split("|")[0]:(ai>=0?ALBUM[ai][0]:null),saintTxt:sa?sa.split("|")[1]:(ai>=0?ALBUM[ai][4]:""),ai,sunday:d.getDay()===0}}
/* Tarjeta de inicio ampliada */
{const _fc=faithCard;faithCard=function(){let h=_fc();const t=new Date(),ai=albumIdx(md4(t)),sun=upcomingSunday(t),SK=sundayKey(sun);
 if(ai>=0){const a=ALBUM[ai];const box=`<button class="fbox" data-act="stamp" data-v="${ai}" style="border:0;text-align:left;cursor:pointer;width:100%;font:inherit;color:inherit"><span style="flex:0 0 52px">${stampSVG(ai,60)}</span><div><p class="pk">Santo del día · su estampa</p><b>${a[0]}</b><p>${a[4]}</p><p style="color:var(--rel);font-weight:700">Toca para leer su vida →</p></div></button>`;
  h=h.replace(/<div class="fgrid">(<div class="fbox">[\s\S]*?<\/div><\/div>)/,(m,first)=>/Santo del día|Día ferial/.test(first)?`<div class="fgrid">${box}`:`<div class="fgrid">${box}${first}`)}
 const btns=`<div style="display:flex;flex-wrap:wrap;gap:8px"><button class="btn" data-act="gospel" data-v="${ds(sun)}">📖 Evangelio explicado</button><button class="btn ghost" data-act="litcal">📅 Calendario litúrgico</button><button class="btn ghost" data-act="sacr">✝️ Camino a los sacramentos</button></div>`;
 return h.replace(/<\/section>\s*$/,btns+"</section>")}}
/* Pantalla: Evangelio del domingo explicado */
function gospelView(v){LS=null;begin();const sun=v?new Date(v+"T12:00:00"):upcomingSunday(new Date());const SK=sundayKey(sun),g=gosOf(SK.k),L=litInfo(sun),f=feastOf(sun);
 const prev=ds(addD(sun,-7)),next=ds(addD(sun,7)),fecha=sun.toLocaleDateString("es-MX",{weekday:"long",day:"numeric",month:"long",year:"numeric"});
 const ttl=SK.t||(f?f[0]:"Domingo");const cyc={A:"A (san Mateo)",B:"B (san Marcos)",C:"C (san Lucas)"}[SK.cyc];
 app(`<button class="back" data-act="home">${ui("back")} Inicio</button><p class="eyebrow" style="color:${LITC[L.color]}">● ${fecha}</p><h1>${ttl}</h1><p class="lead">Ciclo ${cyc} · color ${LITN[L.color].toLowerCase()}</p>
 ${g?`<section class="faith"><div class="gospel"><p class="pk">Evangelio · ${g.ref}</p><h2>${g.t}</h2><p>${g.s}</p>${sayBtn(g.t+". "+g.s)}<p class="note">Búsquenlo en su Biblia y léanlo completo en familia: <b>${g.ref}</b>.</p></div>
 ${g.teach?`<div class="fbox"><span style="font-size:28px">💡</span><div><p class="pk">¿Qué nos enseña Jesús?</p><p>${g.teach}</p></div></div>`:""}
 ${g.ask?`<div class="fbox"><span style="font-size:28px">💬</span><div><p class="pk">Para platicar en familia</p><p>${g.ask}</p></div></div>`:""}
 ${g.todo?`<div class="fbox"><span style="font-size:28px">✅</span><div><p class="pk">Propósito de la semana</p><p>${g.todo}</p></div></div>`:""}
 <div class="fbox"><span style="font-size:28px">🙏</span><div><p class="pk">Oración</p><p>Jesús, gracias por tu Palabra. Ayúdame a guardarla en mi corazón como María y a vivirla esta semana. Amén.</p></div></div></section>`:`<p>Léanlo juntos en la Misa del domingo y platiquen: ¿qué nos dice Jesús hoy?</p>`}
 <div style="display:flex;justify-content:space-between;gap:8px;margin-top:14px"><button class="btn ghost" data-act="gospel" data-v="${prev}">← Domingo anterior</button><button class="btn ghost" data-act="gospel" data-v="${next}">Siguiente domingo →</button></div>`);scrollTo(0,0)}
/* Pantalla: calendario litúrgico */
function litCal(v){LS=null;begin();const now=new Date();let y=now.getFullYear(),m=now.getMonth();if(v){[y,m]=v.split("-").map(Number);m--}
 const first=new Date(y,m,1,12),days=new Date(y,m+1,0).getDate(),pad=first.getDay(),mes=(m=>m[0].toUpperCase()+m.slice(1))(first.toLocaleDateString("es-MX",{month:"long"}))+" de "+y;
 const pm=m===0?`${y-1}-12`:`${y}-${m}`,nm=m===11?`${y+1}-1`:`${y}-${m+2}`;let cells="";for(let i=0;i<pad;i++)cells+=`<div></div>`;
 const list=[];for(let dd=1;dd<=days;dd++){const d=new Date(y,m,dd,12),I=dayInfo(d),today=ds(d)===ds(now),mark=I.feast||I.saint;if(I.feast||I.sunday)list.push(I);else if(I.saint)list.push(I);
  cells+=`<button data-act="litday" data-v="${ds(d)}" aria-label="${dd} ${mark?"· "+mark:""}" style="aspect-ratio:1;border-radius:10px;border:${today?"3px solid var(--ink)":"1px solid var(--line)"};background:${LITC[I.color]}${I.feast?"":"22"};color:${I.feast?"#fff":"var(--ink)"};font:inherit;font-weight:${I.sunday||I.feast?800:500};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;cursor:pointer;padding:0"><span>${dd}</span>${I.ai>=0?`<span style="font-size:10px">⭐</span>`:I.saint?`<span style="font-size:10px">•</span>`:""}</button>`}
 const L0=litInfo(new Date(y,m,15,12));
 app(`<button class="back" data-act="home">${ui("back")} Inicio</button><h1>Calendario litúrgico</h1><p class="lead">El año de la Iglesia tiene sus tiempos y colores: <b style="color:${LITC.morado}">morado</b> en Adviento y Cuaresma, <b style="color:${LITC.blanco}">blanco</b> en Navidad, Pascua y fiestas del Señor y de la Virgen, <b style="color:${LITC.rojo}">rojo</b> para la Pasión, Pentecostés y los mártires, <b style="color:${LITC.verde}">verde</b> en el Tiempo Ordinario y <b style="color:${LITC.rosa}">rosa</b> en Gaudete y Laetare.</p>
 <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;margin:10px 0"><button class="btn ghost" data-act="litcal" data-v="${pm}">←</button><h2 style="margin:0">${mes}</h2><button class="btn ghost" data-act="litcal" data-v="${nm}">→</button></div>
 <div style="display:grid;grid-template-columns:repeat(7,1fr);gap:4px;font-size:13px;text-align:center;font-weight:700;color:var(--mute)">${["D","L","M","M","J","V","S"].map(x=>`<div>${x}</div>`).join("")}</div>
 <div style="display:grid;grid-template-columns:repeat(7,1fr);gap:4px;margin-top:4px">${cells}</div>
 <p class="note" style="margin-top:8px">Días con fondo de color fuerte: solemnidades y fiestas. ⭐ = santo de tu álbum. Toca un día para ver qué celebra la Iglesia.</p>
 <h2 style="margin-top:16px">Este mes</h2><div style="display:flex;flex-direction:column;gap:6px">${list.map(I=>`<button class="fbox" data-act="litday" data-v="${ds(I.d)}" style="border:0;text-align:left;width:100%;font:inherit;color:inherit;cursor:pointer"><span class="litdot" style="background:${LITC[I.color]};flex:0 0 14px;height:14px;border-radius:50%;margin-top:4px"></span><div><b>${I.d.getDate()} · ${I.feast||(I.sunday?(sundayKey(I.d).t||"Domingo"):I.saint)}</b>${I.feast&&I.saint&&!I.feast.includes(I.saint)?`<p>${I.saint}</p>`:I.sunday&&!I.feast?`<p>${(gosOf(sundayKey(I.d).k)||{}).t||""}</p>`:""}</div></button>`).join("")}</div>`);scrollTo(0,0)}
function litDay(v){const I=dayInfo(new Date(v+"T12:00:00")),fecha=I.d.toLocaleDateString("es-MX",{weekday:"long",day:"numeric",month:"long"});const SK=I.sunday?sundayKey(I.d):null,g=SK?gosOf(SK.k):null;
 sheet(`<p class="eyebrow" style="color:${LITC[I.color]};text-transform:capitalize">● ${fecha}</p><h2>${I.feast||(SK&&SK.t)||I.L.label}</h2><p>${I.L.label} · color litúrgico <b>${LITN[I.color].toLowerCase()}</b></p>
 ${I.saint?`<div class="fbox"><div>${I.feast&&I.feast.includes(I.saint)?"":`<p class="pk">Santo del día</p><b>${I.saint}</b><p>${I.saintTxt||""}</p>`}${I.ai>=0?`<button class="btn" data-act="stamp" data-v="${I.ai}" style="margin-top:6px">Ver su estampa y su vida</button>`:""}</div></div>`:""}
 ${g?`<div class="fbox"><div><p class="pk">Evangelio · ${g.ref}</p><b>${g.t}</b><p>${g.s}</p><button class="btn" data-act="gospel" data-v="${ds(I.d)}" style="margin-top:6px">Evangelio explicado</button></div></div>`:""}
 <button class="btn ghost" data-act="close" style="margin-top:10px">Cerrar</button>`)}
Object.assign(ACT,{gospel:v=>gospelView(v),litcal:v=>litCal(v),litday:v=>litDay(v)});
