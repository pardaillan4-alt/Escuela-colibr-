"use strict";
/* ========= Utilidades ========= */
const $=(s,r)=>(r||document).querySelector(s);
const rnd=(a,b)=>a+Math.floor(Math.random()*(b-a+1));
const pick=a=>a[Math.floor(Math.random()*a.length)];
const shuf=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const strip=s=>String(s==null?"":s).replace(/<br\s*\/?>/gi,". ").replace(/<[^>]+>/g," ").replace(/\s+/g," ").trim();

/* ========= Constructores de contenido ========= */
const KEY="escuelita-colibri-v1";
const SUBJ=[];
function L(id,t,learn,ex,g){return{id,t,learn,ex:ex||[],g:g||[]}}
function P(h,p,v){return{h,p,v}}
function F(h,p,v){return{h,p,v,fe:true}}
const VX={};
const GRADES=[[1,"1.º"],[2,"2.º"]];
const CUAD="https://pardaillan4-alt.github.io/Escuela-colibr-/cuadernos/";
const gName=g=>(GRADES.find(x=>x[0]===g)||[0,g+".º"])[1];
const curG=()=>me().grade||1;
const gSubj=g=>SUBJ.filter(s=>s.all||(s.g||1)===g);
const findC=(c,g)=>SUBJ.find(s=>(s.c||s.id)===c&&(s.all||(s.g||1)===g));
function C(q,o,v,w){return{k:"c",q,o:o.map(String),v,w}}
function TF(q,a,v,w){return{k:"tf",q,a,v,w}}
function N(q,a,v,w){return{k:"n",q,a,v,w}}
function O(q,items,v,w){return{k:"ord",q,items:items.map(String),v,w}}
function B(q,a,x,v,w){return{k:"b",q,a,x:x||[],v,w}}
function S2(q,g,items,v,w){return{k:"s",q,g,items,v,w}}

/* ========= Números en palabras ========= */
const UN=["cero","uno","dos","tres","cuatro","cinco","seis","siete","ocho","nueve","diez","once","doce","trece","catorce","quince","dieciséis","diecisiete","dieciocho","diecinueve","veinte","veintiuno","veintidós","veintitrés","veinticuatro","veinticinco","veintiséis","veintisiete","veintiocho","veintinueve"];
const TE=["","","","treinta","cuarenta","cincuenta","sesenta","setenta","ochenta","noventa"];
function words(n){n=+n;if(n<30)return UN[n];if(n===100)return"cien";const t=Math.floor(n/10),u=n%10;return TE[t]+(u?" y "+UN[u]:"")}

/* ========= Generadores de ejercicios (Matemáticas) ========= */
const SH=["apple","star","ball","flower","fish"];
const NAMES=["Lupita","Diego","Ximena","Mateo","Sofía","Santiago","Valentina","Emiliano","Regina","Leo","Camila","Iker"];
const SHN={circulo:"Círculo",cuadrado:"Cuadrado",triangulo:"Triángulo",rectangulo:"Rectángulo",ovalo:"Óvalo",rombo:"Rombo",pentagono:"Pentágono",hexagono:"Hexágono",cubo:"Cubo",esfera:"Esfera",cilindro:"Cilindro",cono:"Cono"};
function nOpts(a,min,max){const s=new Set([a]);let k=0;while(s.size<3&&k<80){k++;const d=a+pick([-3,-2,-1,1,2,3]);if(d>=min&&d<=max)s.add(d)}let e=a+4;while(s.size<3){s.add(e);e++}return[...s].map(String)}
function hr(h,m){return(h===1?"La 1":"Las "+h)+(m===0?" en punto":" y media")}
const G={
cnt:(m=10)=>{const n=rnd(1,m),s=pick(SH);return C("¿Cuántos hay? Cuenta con tu dedito.",nOpts(n,0,m),{t:"dots",n,s},"Toca cada dibujo una sola vez mientras cuentas.")},
cnt20:()=>{const n=rnd(11,20);return N("¿Cuántos hay? Escribe el número.",n,{t:"dots",n,s:pick(SH)},"Una caja llena tiene 10. Empieza en 10 y sigue contando.")},
nname:(m=10)=>{const n=rnd(0,m),o=nOpts(n,0,m);return Math.random()<.5?C(`¿Qué número es «${words(n)}»?`,o):C(`¿Cómo se escribe con letras el ${n}?`,o.map(x=>words(x)))},
cmp:(m=20)=>{const a=rnd(0,m);let b=rnd(0,m);while(b===a)b=rnd(0,m);const big=Math.random()<.5,ans=big?Math.max(a,b):Math.min(a,b),oth=big?Math.min(a,b):Math.max(a,b);return C(`¿Cuál número es ${big?"mayor":"menor"}?`,[ans,oth],m<=20?{t:"line",a:0,b:m,m:[a,b]}:null,big?"En la recta, el mayor está más a la derecha.":"En la recta, el menor está más a la izquierda.")},
cmpSym:(m=20)=>{const a=rnd(0,m),b=Math.random()<.2?a:rnd(0,m);const ans=a>b?">":a<b?"<":"=";return C(`¿Qué signo va en medio? ${a} ▢ ${b}`,[ans,...[">","<","="].filter(x=>x!==ans)],null,"La boca del cocodrilo se abre hacia el número más grande.")},
next:(m=20)=>{const n=rnd(0,m-1);return N(`¿Qué número sigue después del ${n}?`,n+1,m<=20?{t:"line",a:Math.max(0,n-4),b:Math.min(m,n+5)}:null,"Cuenta uno más.")},
prev:(m=20)=>{const n=rnd(1,m);return N(`¿Qué número va justo antes del ${n}?`,n-1,null,"Cuenta uno hacia atrás.")},
between:(m=20)=>{const n=rnd(1,m-1);return N(`¿Qué número está entre el ${n-1} y el ${n+1}?`,n,null,"Es el que va en medio al contar.")},
add10:()=>{const a=rnd(1,8),b=rnd(1,10-a);return N(`${a} + ${b} = ?`,a+b,{t:"add",a,b,s:pick(SH),s2:pick(SH)},"Junta los dos grupos y cuenta todo.")},
make10:()=>{const a=rnd(1,9);return N(`¿Cuánto le falta al ${a} para llegar a 10?`,10-a,{t:"dots",n:a,s:"star"},"Cuenta los cuadritos vacíos de la caja.")},
sub10:()=>{const a=rnd(2,10),b=rnd(1,a-1);return N(`${a} − ${b} = ?`,a-b,{t:"sub",a,b,s:pick(SH)},"Cuenta solo los dibujos que no están tachados.")},
add20:()=>{const a=rnd(3,15),b=rnd(2,20-a);return N(`${a} + ${b} = ?`,a+b,null,"Guarda el número mayor en tu cabeza y cuenta hacia adelante con los dedos.")},
sub20:()=>{const a=rnd(9,20),b=rnd(2,Math.min(9,a-1));return N(`${a} − ${b} = ?`,a-b,{t:"line",a:0,b:20,m:[a]},"Empieza en el número marcado y da saltos hacia atrás.")},
dbl:()=>{const n=rnd(2,10);return N(`Dobles: ${n} + ${n} = ?`,2*n,null,"Los dobles son sumar el mismo número dos veces.")},
prob:(max=20)=>{const a1=pick(NAMES);let a2=pick(NAMES);while(a2===a1)a2=pick(NAMES);const obj=pick(["canicas","paletas","estampas","galletas","naranjas","flores","calcomanías"]);const t=rnd(0,6);
 if(t===4){const a=rnd(1,9);return N(`${a1} va rezando el rosario. Ya rezó ${a} Ave Marías del misterio. ¿Cuántas le faltan para completar la decena de 10?`,10-a,{t:"dots",n:a,s:"star"},"Una decena son 10. Cuenta los cuadritos vacíos.")}
 if(t===5){const a=rnd(2,max-3),b=rnd(1,max-a);return N(`Para los niños del orfanato, ${a1} juntó ${a} juguetes y ${a2} juntó ${b}. ¿Cuántos juguetes juntaron?`,a+b,null,"Juntamos lo de los dos: es una suma.")}
 if(t===6){const a=rnd(5,max),b=rnd(1,a-1);return N(`En la parroquia había ${a} veladoras encendidas. Se apagaron ${b}. ¿Cuántas siguen encendidas?`,a-b,null,"Se apagaron algunas: es una resta.")}
 if(t===0){const a=rnd(2,max-3),b=rnd(1,max-a);return N(`${a1} tiene ${a} ${obj}. Su abuela le regala ${b} más. ¿Cuántas ${obj} tiene ahora?`,a+b,null,"Le dan más cosas: juntamos, es una suma.")}
 if(t===1){const a=rnd(4,max),b=rnd(1,a-1);return N(`${a1} tenía ${a} ${obj}. Le regaló ${b} a ${a2}. ¿Cuántas ${obj} le quedan?`,a-b,null,"Se quedó con menos: quitamos, es una resta.")}
 if(t===2){const h=Math.floor(max/2),a=rnd(2,h),b=rnd(2,h);return N(`En la canasta hay ${a} tamales verdes y ${b} tamales de dulce. ¿Cuántos tamales hay en total?`,a+b,null,"«En total» quiere decir juntar todo: es una suma.")}
 const b=rnd(2,max-5),a=b+rnd(1,4);return N(`${a1} tiene ${a} ${obj} y ${a2} tiene ${b}. ¿Cuántas ${obj} más tiene ${a1}?`,a-b,null,"Para saber cuántas más, restamos el número menor al mayor.")},
pv:()=>{const d=rnd(1,9),u=rnd(0,9);return N("¿Qué número forman los bloques?",10*d+u,{t:"blocks",d,u},"Cada barra vale 10. Cuenta las barras de 10 en 10 y luego suma los cuadritos.")},
pv2:()=>{const n=rnd(11,99),d=Math.floor(n/10),u=n%10;return Math.random()<.5?C(`¿Cuántas decenas tiene el ${n}?`,nOpts(d,0,9),null,"El número de la izquierda dice las decenas."):C(`¿Cuántas unidades tiene el ${n}?`,nOpts(u,0,9),null,"El número de la derecha dice las unidades.")},
skip:()=>{const st=pick([2,5,10]),s0=st*rnd(0,st===10?4:6),seq=[0,1,2,3,4].map(i=>s0+i*st),k=rnd(1,4);return N(`¿Qué número falta? Contamos de ${st} en ${st}.`,seq[k],{t:"seq",x:seq.map((n,i)=>i===k?"?":n)},`Suma ${st} al número de antes.`)},
tens:()=>{const n=10*rnd(1,10);const o=[n,...shuf([10,20,30,40,50,60,70,80,90,100].filter(x=>x!==n)).slice(0,2)];return C(`¿Cómo se escribe el ${n} con letras?`,o.map(words))},
add100:()=>{const d1=rnd(1,7),d2=rnd(1,9-d1),u1=rnd(0,8),u2=rnd(0,9-u1),a=10*d1+u1,b=10*d2+u2;return N(`${a} + ${b} = ?`,a+b,{t:"vert",a,b,op:"+",hide:1},"Suma unidades con unidades y decenas con decenas.")},
sub100:()=>{const d1=rnd(2,9),d2=rnd(1,d1-1),u1=rnd(1,9),u2=rnd(0,u1),a=10*d1+u1,b=10*d2+u2;return N(`${a} − ${b} = ?`,a-b,{t:"vert",a,b,op:"−",hide:1},"Resta unidades con unidades y decenas con decenas.")},
shape:()=>{const all=["circulo","cuadrado","triangulo","rectangulo","ovalo","rombo"],k=pick(all);return C("¿Cómo se llama esta figura?",[k,...shuf(all.filter(x=>x!==k)).slice(0,2)].map(x=>SHN[x]),{t:"shape",s:k},"Fíjate en cuántos lados y esquinas tiene.")},
sides:()=>{const k=pick(["triangulo","cuadrado","rectangulo","rombo","pentagono","hexagono"]),n={triangulo:3,cuadrado:4,rectangulo:4,rombo:4,pentagono:5,hexagono:6}[k];return N("¿Cuántos lados tiene esta figura?",n,{t:"shape",s:k},"Cuenta cada línea recta del borde.")},
clock:()=>{const h=rnd(1,12),m=pick([0,0,30]),o=[hr(h,m)];while(o.length<3){const x=hr(rnd(1,12),pick([0,30]));if(!o.includes(x))o.push(x)}return C("¿Qué hora marca el reloj?",o,{t:"clock",h,m},"La manecilla corta marca la hora. Si la larga apunta al 12 es «en punto»; si apunta al 6 es «y media».")},
coins:()=>{let x=[],s=0;const n=rnd(2,4);for(let i=0;i<n;i++){const c=pick(s<10?[1,2,5,10]:[1,2,5]);if(s+c>20)break;x.push(c);s+=c}if(x.length<2){x=[5,2];s=7}x.sort((a,b)=>b-a);return N("¿Cuánto dinero hay? Suma las monedas.",s,{t:"coins",x},"Empieza por la moneda más grande y sigue sumando.")}
};

/* ========= Estado ========= */
const PC=["#2463c8","#d2383f","#1d8c5c","#c95f0e","#6f45c0","#1a7fa3"];
function newProfile(name,ci){return{id:"p"+Date.now().toString(36)+rnd(100,999),name,ci:ci||0,prog:{},reto:0,upd:Date.now()}}
function load(){try{const j=JSON.parse(localStorage.getItem(KEY)||"null");if(j&&Array.isArray(j.profiles)&&j.profiles.length)return Object.assign({voice:true,fx:true,theme:"auto"},j)}catch(e){}const p=newProfile("Explorador",0);return{profiles:[p],cur:p.id,voice:true,fx:true,theme:"auto"}}
let S=null;
function save(){try{localStorage.setItem(KEY,JSON.stringify(S))}catch(e){}syncPush()}
function me(){return S.profiles.find(p=>p.id===S.cur)||S.profiles[0]}
const LIDX={};
function indexAll(){SUBJ.forEach(s=>s.units.forEach(u=>u.ls.forEach(l=>{LIDX[l.id]={s,l}})))}
const allLessons=s=>s.units.flatMap(u=>u.ls);
function nextLesson(s,p){p=(p||me()).prog;return allLessons(s).find(l=>!(p[l.id]&&p[l.id].done))}
function nextAfter(s,id){const ls=allLessons(s),i=ls.findIndex(l=>l.id===id);return ls[i+1]||null}
function subjProg(s,p){p=p||me();const ls=allLessons(s);return{d:ls.filter(l=>p.prog[l.id]&&p.prog[l.id].done).length,t:ls.length}}
function totalStars(p){p=p||me();return Object.values(p.prog).reduce((a,x)=>a+(x.stars||0),0)+(typeof trazoStars==="function"?trazoStars(p):0)}
const LV=[[0,"Huevito"],[10,"Pichón"],[30,"Colibrí volador"],[70,"Colibrí veloz"],[130,"Colibrí arcoíris"],[200,"Colibrí dorado"]];
function level(st){let i=0;LV.forEach((l,k)=>{if(st>=l[0])i=k});return{name:LV[i][1],next:LV[i+1]?LV[i+1][0]:null,from:LV[i][0]}}

/* ========= Voz y sonidos ========= */
let VOICES=[];
function loadVoices(){try{VOICES=speechSynthesis.getVoices()||[]}catch(e){}}
function clean(t){return strip(t).replace(/&gt;/g," es mayor que ").replace(/&lt;/g," es menor que ").replace(/&amp;/g," y ").replace(/&nbsp;/g," ")
 .replace(/\$(\d+)/g,"$1 pesos").replace(/(\d)\s*\+\s*(\d)/g,"$1 más $2").replace(/(\d|\?)\s*[−]\s*(\d)/g,"$1 menos $2").replace(/[−]/g," menos ").replace(/\+/g," más ")
 .replace(/=\s*\?/g," es igual a cuánto").replace(/=/g," es igual a ").replace(/▢/g," ").replace(/→/g,", ")
 .replace(/([a-záéíóúñü])-(?=[a-záéíóúñü])/gi,"$1, ").replace(/[«»]/g,"")
 .replace(/[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{2B00}-\u{2BFF}\u{FE0F}\u{200D}]/gu,"").replace(/\s+/g," ").trim()}
function say(t,force){if(!force&&!S.voice)return;try{speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(clean(t));const v=VOICES.find(v=>/es[-_]MX/i.test(v.lang))||VOICES.find(v=>/es[-_]US/i.test(v.lang))||VOICES.find(v=>/^es/i.test(v.lang));if(v){u.voice=v;u.lang=v.lang}else u.lang="es-MX";u.rate=.9;u.pitch=1.05;speechSynthesis.speak(u)}catch(e){}}
function auto(t){if(S.voice)setTimeout(()=>say(t),250)}
let AC=null;
function tone(seq){if(!S.fx)return;try{AC=AC||new(window.AudioContext||window.webkitAudioContext)();let t=AC.currentTime+.01;seq.forEach(([f,d])=>{const o=AC.createOscillator(),g=AC.createGain();o.type="triangle";o.frequency.value=f;g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(.16,t+.02);g.gain.exponentialRampToValueAtTime(.0001,t+d);o.connect(g).connect(AC.destination);o.start(t);o.stop(t+d+.03);t+=d*.8})}catch(e){}}
const SND={ok:()=>tone([[660,.12],[880,.2]]),bad:()=>tone([[330,.16],[262,.22]]),win:()=>tone([[523,.12],[659,.12],[784,.12],[1047,.32]]),tap:()=>tone([[540,.05]])};

/* ========= Dibujos ========= */
function bird(sz){return`<svg class="bird${sz?" "+sz:""}" viewBox="0 0 120 100" aria-hidden="true"><g class="bbody"><polygon points="38,60 6,76 13,59 3,50 34,52" fill="#0f7a5a"/><ellipse cx="58" cy="58" rx="28" ry="18" fill="#1fa37a" transform="rotate(-18 58 58)"/><ellipse cx="63" cy="66" rx="16" ry="7" fill="#c6efdc" transform="rotate(-18 63 66)"/><circle cx="84" cy="40" r="15" fill="#1fa37a"/><path d="M75 49c5 7 13 6 17-1c-3 8-15 10-17 1z" fill="#e5484d"/><path d="M98 37L119 31" stroke="#3a2f2a" stroke-width="3.5" stroke-linecap="round"/><circle cx="88" cy="36" r="4.2" fill="#1b2a44"/><circle cx="89.6" cy="34.4" r="1.5" fill="#fff"/><g transform="rotate(-35 54 38)"><ellipse class="wing" cx="54" cy="38" rx="25" ry="9" fill="#86dcbd"/></g></g></svg>`}
function icon(s,size){size=size||34;return`<svg width="${size}" height="${size}" viewBox="0 0 40 40" aria-hidden="true"><use href="#s-${s}"/></svg>`}
function ui(s){return`<svg viewBox="0 0 40 40" aria-hidden="true"><use href="#u-${s}"/></svg>`}
const SICON={
mat:`<svg viewBox="0 0 40 40"><text x="20" y="27" text-anchor="middle" font-family="Grandstander,sans-serif" font-weight="800" font-size="19" fill="currentColor">1+2</text></svg>`,
esp:`<svg viewBox="0 0 40 40"><text x="20" y="29" text-anchor="middle" font-family="Andika,sans-serif" font-weight="700" font-size="24" fill="currentColor">Aa</text></svg>`,
cie:`<svg viewBox="0 0 40 40"><path d="M8 32C8 16 18 7 33 7c0 16-9 25-25 25z" fill="currentColor" opacity=".85"/><path d="M8 32L24 16" stroke="var(--card)" stroke-width="2.5" stroke-linecap="round"/></svg>`,
his:`<svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="14" fill="none" stroke="currentColor" stroke-width="3"/><path d="M20 6c-7 8-7 20 0 28M20 6c7 8 7 20 0 28M6 20h28" stroke="currentColor" stroke-width="2.5" fill="none"/></svg>`,
civ:`<svg viewBox="0 0 40 40"><path d="M20 34S6 25 6 15a7 7 0 0 1 14-2a7 7 0 0 1 14 2c0 10-14 19-14 19z" fill="currentColor"/></svg>`,
rel:`<svg viewBox="0 0 40 40"><path d="M17 5h6v9h9v6h-9v15h-6V20H8v-6h9z" fill="currentColor"/></svg>`,
com:`<svg viewBox="0 0 40 40"><circle cx="20" cy="9" r="6" fill="none" stroke="currentColor" stroke-width="2.5"/><path d="M9 17h22c0 9-5 13-11 13S9 26 9 17z" fill="currentColor"/><path d="M18 30h4v4h-4zM13 37c0-3 3-4 7-4s7 1 7 4z" fill="currentColor"/></svg>`};
function sicon(s){return`<span class="sic" aria-hidden="true">${SICON[s.c||s.id]||""}</span>`}
const sv=s=>`--sc:var(--${s.c||s.id});--ss:var(--${s.c||s.id}-s)`;
function stars(n,size){return`<span class="st" aria-label="${n} de 3 estrellas">${[0,1,2].map(i=>icon(i<n?"star":"starO",size||22)).join("")}</span>`}
function pencil(s,p){const pr=subjProg(s,p),pc=pr.t?Math.round(pr.d/pr.t*100):0;return`<div class="pencil" role="img" aria-label="${pr.d} de ${pr.t} lecciones"><div class="pb"><i style="width:${pc}%"></i></div><div class="tip"></div></div><span class="pmeta">${pr.d} de ${pr.t} lecciones</span>`}

function gicon(s,gone){return gone?`<span class="ico gone">${icon(s)}<svg class="x" viewBox="0 0 40 40"><path d="M9 9l22 22M31 9L9 31" stroke="var(--bad)" stroke-width="4" stroke-linecap="round"/></svg></span>`:`<span class="ico">${icon(s)}</span>`}
function dots(n,s){const fr=Math.max(1,Math.ceil(n/10));let h="";for(let f=0;f<fr;f++){let c="";for(let i=0;i<10;i++){const k=f*10+i;c+=`<span class="cell">${k<n?icon(s):""}</span>`}h+=`<div class="frame">${c}</div>`}return`<div class="frames" role="img" aria-label="${n}">${h}</div>`}
function grp(n,s,gone){gone=gone||0;let h="";for(let i=0;i<n;i++)h+=gicon(s,i>=n-gone);return`<div class="grp">${h}</div>`}
function blocks(d,u){let h="";for(let i=0;i<d;i++){let r="";for(let k=0;k<10;k++)r+=`<rect x="1" y="${1+k*10}" width="18" height="10"/>`;h+=`<svg class="rod" viewBox="0 0 20 102" width="20" height="102">${r}</svg>`}let uu="";for(let i=0;i<u;i++)uu+=`<svg class="unit" viewBox="0 0 20 12" width="20" height="12"><rect x="1" y="1" width="18" height="10"/></svg>`;return`<div class="blocks"><div class="rods">${h}</div>${u?`<div class="units">${uu}</div>`:""}</div>`}
function clock(h,m){let s=`<svg viewBox="0 0 160 160" width="180" height="180" class="clock" role="img" aria-label="Reloj"><circle cx="80" cy="80" r="74" class="face"/>`;for(let i=1;i<=12;i++){const a=(i*30-90)*Math.PI/180;s+=`<text x="${(80+58*Math.cos(a)).toFixed(1)}" y="${(85+58*Math.sin(a)).toFixed(1)}" text-anchor="middle">${i}</text>`}for(let i=0;i<60;i++){if(i%5)continue;const a=i*6*Math.PI/180;s+=`<line x1="${80+70*Math.cos(a)}" y1="${80+70*Math.sin(a)}" x2="${80+66*Math.cos(a)}" y2="${80+66*Math.sin(a)}" stroke="var(--soft)" stroke-width="2"/>`}
const P2=(ang,len)=>[80+len*Math.cos(ang*Math.PI/180),80+len*Math.sin(ang*Math.PI/180)];const[hx,hy]=P2(((h%12)+m/60)*30-90,36),[mx,my]=P2(m*6-90,58);
return s+`<line x1="80" y1="80" x2="${mx.toFixed(1)}" y2="${my.toFixed(1)}" class="mh"/><line x1="80" y1="80" x2="${hx.toFixed(1)}" y2="${hy.toFixed(1)}" class="hh"/><circle cx="80" cy="80" r="6" class="pin"/></svg>`}
function coin(v){const r={1:21,2:23,5:26,10:29}[v]||22,W=r*2+4,c=W/2,gold="#d4a640",sil="#c3c8cf",ring=v>=10?gold:sil,ctr=v>=10?sil:gold;return`<svg width="${W}" height="${W}" viewBox="0 0 ${W} ${W}" role="img" aria-label="${v} pesos"><circle cx="${c}" cy="${c}" r="${r}" fill="${ring}" stroke="#7d6c3e" stroke-width="1.5"/><circle cx="${c}" cy="${c}" r="${(r*.66).toFixed(1)}" fill="${ctr}"/><text x="${c}" y="${c+r*.24}" text-anchor="middle" font-size="${(r*.68).toFixed(0)}" font-weight="800" font-family="Grandstander,sans-serif" fill="#3b3320">$${v}</text></svg>`}
function bill(v){return`<svg viewBox="0 0 180 90" width="200" height="100" role="img" aria-label="Billete de ${v} pesos"><rect x="2" y="2" width="176" height="86" rx="8" fill="#86c6d2" stroke="#3e7f8f" stroke-width="3"/><circle cx="132" cy="45" r="27" fill="#bfe3ea"/><path d="M118 52c6-14 22-14 28 0" stroke="#3e7f8f" stroke-width="3" fill="none"/><text x="20" y="58" font-size="36" font-weight="800" fill="#1f4a55" font-family="Grandstander,sans-serif">$${v}</text></svg>`}
function shape(s){const a='class="shp"';const m={circulo:`<circle cx="60" cy="50" r="40" ${a}/>`,cuadrado:`<rect x="20" y="10" width="80" height="80" ${a}/>`,triangulo:`<polygon points="60,8 108,92 12,92" ${a}/>`,rectangulo:`<rect x="6" y="24" width="108" height="54" ${a}/>`,ovalo:`<ellipse cx="60" cy="50" rx="52" ry="33" ${a}/>`,rombo:`<polygon points="60,4 108,50 60,96 12,50" ${a}/>`,pentagono:`<polygon points="60,6 106,40 88,94 32,94 14,40" ${a}/>`,hexagono:`<polygon points="34,8 86,8 112,50 86,92 34,92 8,50" ${a}/>`,
cubo:`<polygon points="18,34 74,34 74,92 18,92" ${a}/><polygon points="18,34 42,10 98,10 74,34" class="shp t"/><polygon points="74,34 98,10 98,68 74,92" class="shp s"/>`,
esfera:`<circle cx="60" cy="50" r="42" ${a}/><ellipse cx="60" cy="50" rx="42" ry="12" class="ln"/><circle cx="45" cy="33" r="9" class="hl"/>`,
cilindro:`<path d="M24 22v58a36 12 0 0 0 72 0V22" ${a}/><ellipse cx="60" cy="22" rx="36" ry="12" class="shp t"/>`,
cono:`<path d="M60 6L96 80a36 12 0 0 1-72 0z" ${a}/><path d="M24 80a36 12 0 0 0 72 0" class="ln"/>`};
return`<svg viewBox="0 0 120 100" width="140" height="117" class="shape" role="img" aria-label="${SHN[s]||""}">${m[s]||""}</svg>`}
function nline(a,b,mk){mk=[].concat(mk==null?[]:mk);const W=360,pad=18,st=(W-2*pad)/(b-a),big=b-a>12;let s=`<svg viewBox="0 0 ${W} 64" class="nline" role="img" aria-label="Recta numérica del ${a} al ${b}"><line x1="${pad-8}" y1="30" x2="${W-pad+8}" y2="30"/>`;for(let i=a;i<=b;i++){const x=pad+(i-a)*st;s+=`<line x1="${x}" y1="${mk.includes(i)?22:25}" x2="${x}" y2="${mk.includes(i)?38:35}"/>`;if(mk.includes(i))s+=`<circle cx="${x}" cy="30" r="8" class="mk"/>`;if(!big||i%2===0||mk.includes(i))s+=`<text x="${x}" y="56" text-anchor="middle">${i}</text>`}return s+"</svg>"}
function plate(){const cx=110,cy=110,r=100,col=["#4caf50","#f4b400","#e4572e"],lab=[["Verduras","y frutas"],["Cereales",""],["Leguminosas y","origen animal"]];let s=`<svg viewBox="0 0 220 220" width="230" height="230" role="img" aria-label="Plato del Bien Comer">`;for(let i=0;i<3;i++){const a0=(i*120-90)*Math.PI/180,a1=((i+1)*120-90)*Math.PI/180,am=((i+.5)*120-90)*Math.PI/180;s+=`<path d="M${cx} ${cy}L${(cx+r*Math.cos(a0)).toFixed(1)} ${(cy+r*Math.sin(a0)).toFixed(1)}A${r} ${r} 0 0 1 ${(cx+r*Math.cos(a1)).toFixed(1)} ${(cy+r*Math.sin(a1)).toFixed(1)}Z" fill="${col[i]}" stroke="#fff" stroke-width="3"/>`;const tx=cx+r*.55*Math.cos(am),ty=cy+r*.55*Math.sin(am);s+=`<text x="${tx.toFixed(1)}" y="${(ty-2).toFixed(1)}" text-anchor="middle" font-size="12.5" font-weight="700" fill="#1b2a44" font-family="Andika,sans-serif">${lab[i][0]}</text><text x="${tx.toFixed(1)}" y="${(ty+13).toFixed(1)}" text-anchor="middle" font-size="12.5" font-weight="700" fill="#1b2a44" font-family="Andika,sans-serif">${lab[i][1]}</text>`}return s+`<circle cx="${cx}" cy="${cy}" r="${r+4}" fill="none" stroke="var(--line)" stroke-width="4"/></svg>`}
function flag(){return`<svg viewBox="0 0 210 120" width="230" height="131" role="img" aria-label="Bandera de México"><rect width="70" height="120" fill="#006847"/><rect x="70" width="70" height="120" fill="#fff"/><rect x="140" width="70" height="120" fill="#ce1126"/><rect x=".5" y=".5" width="209" height="119" fill="none" stroke="#9aa8b8"/><g transform="translate(105 62)"><path d="M-17 15c6 6 28 6 34 0" stroke="#3b7a2a" stroke-width="4" fill="none" stroke-linecap="round"/><path d="M-4 16v-8h8v8" fill="#4a8f34"/><ellipse cx="0" cy="0" rx="11" ry="8" fill="#7a5230"/><circle cx="7" cy="-9" r="5" fill="#7a5230"/><path d="M11 -9l5 1" stroke="#c98a0b" stroke-width="2.5"/><path d="M-11 -2c-9-8-5-17 2-15M11 -1c9-8 5-17-2-15" stroke="#7a5230" stroke-width="4" fill="none"/><path d="M-6 7c4 3 8-3 13 1" stroke="#3b7a2a" stroke-width="2.5" fill="none"/></g></svg>`}
function chalice(){return`<svg viewBox="0 0 120 140" width="130" height="152" role="img" aria-label="Cáliz y hostia"><circle cx="60" cy="27" r="21" fill="#fffaf0" stroke="#c79a1b" stroke-width="3"/><path d="M60 16v22M49 27h22" stroke="#c79a1b" stroke-width="3" stroke-linecap="round"/><path d="M26 54h68c0 27-15 41-34 41S26 81 26 54z" fill="#d9b04a" stroke="#a87c06" stroke-width="2"/><rect x="55" y="94" width="10" height="22" fill="#c79a1b"/><path d="M34 132c0-11 12-16 26-16s26 5 26 16z" fill="#d9b04a" stroke="#a87c06" stroke-width="2"/></svg>`}
function digits(n){return`<td>${Math.floor(n/10)||""}</td><td>${n%10}</td>`}
function V(v){if(!v)return"";switch(v.t){
case"dots":return dots(v.n,v.s||"apple");
case"add":return`<div class="eq">${grp(v.a,v.s||"apple")}<span class="op">+</span>${grp(v.b,v.s2||v.s||"star")}</div>`;
case"two":return`<div class="eq">${grp(v.a,v.s||"apple")}<span class="op" style="font-size:22px">y</span>${grp(v.b,v.s||"apple")}</div>`;
case"sub":return`<div class="eq">${grp(v.a,v.s||"apple",v.b)}</div>`;
case"blocks":return blocks(v.d,v.u);
case"clock":return clock(v.h,v.m||0);
case"coins":return`<div class="coins">${v.x.map(coin).join("")}</div>`;
case"bill":return bill(v.v);
case"shape":return shape(v.s);
case"shapes":return`<div class="shapes">${v.x.map(s=>`<figure>${shape(s)}<figcaption>${SHN[s]}</figcaption></figure>`).join("")}</div>`;
case"line":return nline(v.a,v.b,v.m);
case"seq":return`<div class="seq">${v.x.map(n=>`<span class="${n==="?"?"q":""}">${n}</span>`).join("")}</div>`;
case"big":return`<div class="bigt">${v.x}</div>`;
case"syl":return`<div class="syl">${v.x.map(t=>`<span>${t}</span>`).join("")}</div>`;
case"word":return`<div class="word">${v.x.split("-").map((t,i)=>`<span class="w${i%2}">${t}</span>`).join("")}</div>`;
case"emo":return`<div class="emo" aria-hidden="true">${v.x}</div>`;
case"cards":return`<div class="cards">${v.x.map(([a,b])=>`<div class="mini"><span class="mi" aria-hidden="true">${a}</span><span>${b}</span></div>`).join("")}</div>`;
case"pict":return`<div class="pict">${v.rows.map(([e,n,lab])=>`<div class="prw"><span class="pl">${lab}</span><span class="pi" aria-label="${n}">${e.repeat(n)}</span></div>`).join("")}</div>`;
case"plate":return plate();
case"flag":return flag();
case"chalice":return chalice();
case"pray":return`<blockquote class="pray">${v.x}</blockquote>`;
case"steps":return`<ol class="steps" start="${v.start||1}">${v.x.map(t=>`<li>${t}</li>`).join("")}</ol>`;
case"vert":return vertHTML(v,null);
default:return VX[v.t]?VX[v.t](v):""}}
function visText(v){if(!v)return"";if(v.t==="info")return" "+infoText(v);if(v.t==="pray")return" "+v.x;if(v.t==="steps")return" "+v.x.join(". ");return""}

/* ========= Vistas ========= */
let SAY=[],LS=null,X=null,GATE=null,PCONF=null,MODE="";
const app=h=>{$("#app").innerHTML=h};
const CROSS=`<svg viewBox="0 0 40 40" width="18" height="18" aria-hidden="true"><path d="M17 4h6v9h9v6h-9v17h-6V19H8v-6h9z" fill="currentColor"/></svg>`;
const PRAYER="Ven, Espíritu Santo, llena los corazones de tus fieles y enciende en ellos el fuego de tu amor. Envía tu Espíritu, Señor, y todo será creado, y renovarás la faz de la tierra. Amén.";
const begin=()=>{SAY=[];MODE="";drawTop();try{speechSynthesis.cancel()}catch(e){}};
function sayBtn(t){const k=SAY.push(t)-1;return`<button class="spk" data-act="say" data-v="${k}" aria-label="Escuchar">${ui("spk")}<span>Escuchar</span></button>`}
const TIPS=["Antes de estudiar, ofrécele tu trabajo a Dios.","Estudiar bien también es una forma de amar a Dios.","San Juan Bosco decía: estén siempre alegres.","Si algo te cuesta, pídele ayuda a tu ángel de la guarda.","Si te equivocas, no pasa nada: así aprende tu cerebro.","Toca «Escuchar» y yo te leo las instrucciones.","Un poquito cada día es mejor que mucho en un solo día.","Entre lección y lección, toma agua y estírate.","¿Sabías que los colibríes aletean más de 50 veces por segundo?","Cuando termines, cuéntale a alguien de tu casa lo que aprendiste."];
const PRAISE=["¡Gracias a Dios, lo lograste!","¡Excelente!","¡Muy bien!","¡Lo lograste!","¡Eres un campeón!","¡Bravo!","¡Así se hace!"];
const TRY=["¡Casi! Inténtalo otra vez.","Respira y vuelve a intentarlo.","¡Uy! Revisa con calma."];
const MSG=["","¡Buen trabajo! Repasa otra vez y ganarás más estrellas.","¡Muy bien! Ya casi eres experto.","¡Perfecto! ¡Eres una estrella!"];
const DAYROT=["rel","cie","his","civ","com","cie","his"];

function isDark(){return S.theme==="dark"||(S.theme!=="light"&&(()=>{try{return matchMedia("(prefers-color-scheme: dark)").matches}catch(e){return false}})())}
function applyTheme(){const r=document.documentElement;if(S.theme==="light"||S.theme==="dark")r.setAttribute("data-theme",S.theme);else r.removeAttribute("data-theme")}
function drawTop(){const p=me(),st=totalStars(p);$("#top").innerHTML=`<div class="topin"><button class="brand" data-act="home" aria-label="Ir al inicio">${bird()}<span class="bname">Escuelita Colibrí</span></button><span class="spacer"></span><button class="pill" data-act="profiles" aria-label="Cambiar de niño"><span class="dot" style="background:${PC[p.ci%PC.length]}"></span><span class="pname">${esc(p.name)}</span></button><span class="pill static" aria-label="${st} estrellas">${icon("star",20)}<b>${st}</b></span><button class="pill" data-act="theme" aria-label="${isDark()?"Cambiar a modo de día":"Cambiar a modo nocturno"}" title="${isDark()?"Modo de día":"Modo nocturno"}">${art(isDark()?"sun":"moon",20)}<span class="vtxt">${isDark()?"Día":"Noche"}</span></button><button class="pill" data-act="voice" aria-pressed="${S.voice}" aria-label="${S.voice?"Voz activada":"Voz apagada"}">${ui("spk")}<span class="vtxt">${S.voice?"Voz":"Sin voz"}</span></button><button class="pill" data-act="parents">Papás</button></div>`}

function home(){LS=null;begin();const p=me(),st=totalStars(p),lv=level(st);const rot=DAYROT[new Date().getDay()];const g=curG(),plan=["mat","esp",rot].map(c=>findC(c,g)).filter(Boolean);
let fecha="";try{fecha=new Date().toLocaleDateString("es-MX",{weekday:"long",day:"numeric",month:"long"})}catch(e){}
app(`<section class="hello"><div class="hello-t"><p class="eyebrow">${fecha}</p><h1>¡Hola, ${esc(p.name)}!</h1><p class="lead">Vas en <b>${gName(g)} grado</b>. Elige una materia o empieza con el plan de hoy. Cada lección tiene una parte para aprender, una mirada de fe y otra para practicar.</p><div class="lvl"><span>Nivel: <b>${lv.name}</b></span>${lv.next?`<div class="lbar"><i style="width:${Math.round((st-lv.from)/(lv.next-lv.from)*100)}%"></i></div><small>Te faltan ${lv.next-st} estrellas para el siguiente nivel</small>`:"<small>¡Llegaste al nivel más alto!</small>"}</div></div><div class="hello-b"><div class="bubble">${pick(TIPS)}</div>${bird("big")}</div></section>
${faithCard()}${reviewCard()}<section class="prayer">${CROSS}<div><p class="eyebrow">Oración antes de estudiar</p><p class="ptext">${PRAYER}</p></div>${sayBtn(PRAYER)}</section>
${todayCard()}
<div class="gradebar"><h2 class="sec">Materias de ${gName(g)} de primaria</h2><div class="gsw" role="group" aria-label="Grado">${GRADES.map(([n,t])=>`<button class="gbtn${n===g?" on":""}" data-act="grade" data-v="${n}" aria-pressed="${n===g}">${t} grado</button>`).join("")}</div></div><div class="subjects">${gSubj(g).map(s=>`<button class="tile" data-act="subj" data-v="${s.id}" style="${sv(s)}">${sicon(s)}<h3>${s.n}</h3><p>${s.d}</p>${pencil(s)}</button>`).join("")}</div>
${misionHomeCard()}${oraCard()}${trazoCard()}${albumCard()}<section class="reto" style="border-color:var(--rel)"><div><h3>Cuaderno para imprimir</h3><p>Hojas de trabajo de ${gName(g)} grado para hacer con lápiz.</p></div><a class="btn" style="--sc:var(--rel)" href="${CUAD}Cuaderno-${g}o-primaria.pdf" target="_blank" rel="noopener">Abrir cuaderno</a></section>
<section class="reto"><div><h3>Reto de cálculo mental</h3><p>10 sumas y restas sorpresa. Tu mejor marca: <b>${p.reto||0} de 10</b></p></div><button class="btn" data-act="reto" style="--sc:var(--mat)">Jugar el reto</button></section>`)}
function planCard(s){const l=nextLesson(s);return`<div class="pcard" style="${sv(s)}"><div class="pc-h">${sicon(s)}<span>${s.n}</span></div>${l?`<p class="pc-l">${esc(l.t)}</p><button class="btn" data-act="open" data-v="${l.id}">Empezar</button>`:`<p class="pc-l">¡Terminaste todas las lecciones!</p><button class="btn ghost" data-act="subj" data-v="${s.id}">Repasar</button>`}</div>`}

function subj(id){const s=SUBJ.find(x=>x.id===id);if(!s)return home();LS=null;begin();const p=me().prog,nx=nextLesson(s);let n=0;
let h=`<button class="back" data-act="home">${ui("back")} Inicio</button><section class="sband" style="${sv(s)}">${sicon(s)}<div><p class="eyebrow">${s.campo}</p><h1>${s.n}</h1><p>${s.d}</p>${pencil(s)}</div></section>`;
const nInf=allLessons(s).filter(l=>l.learn.some(q=>q.info)).length;if(nInf)h+=`<button class="btn ghost" data-act="gal" data-v="${s.key||s.id}" style="${sv(s)};align-self:flex-start">Ver las ${nInf} infografías</button>`;
s.units.forEach((u,ui2)=>{h+=`<h2 class="sec">Unidad ${ui2+1} · ${u.t}</h2><ol class="lessons" style="${sv(s)}">`;u.ls.forEach(l=>{n++;const r=p[l.id],cur=nx&&nx.id===l.id;h+=`<li><button class="lrow${r&&r.done?" done":""}${cur?" cur":""}" data-act="open" data-v="${l.id}"><span class="num">${n}</span><span class="lt">${esc(l.t)}${cur?"<em>¡Sigue aquí!</em>":""}</span>${stars(r?r.stars:0)}</button></li>`});h+=(s.noExam?"":examRow(s,ui2))+"</ol>"});app(h);scrollTo(0,0)}

function gallery(id){const s=SUBJ.find(x=>(x.key||x.id)===id);if(!s)return home();LS=null;begin();let h=`<button class="back" data-act="subj" data-v="${s.key||s.id}">${ui("back")} ${s.n}</button><h1 style="color:var(--${s.c||s.id})">Infografías de ${s.n}</h1><p class="lead">Todas las infografías de ${gName(s.g||1)} grado, para repasar en casa o en familia.</p>`;allLessons(s).forEach(l=>{const q=l.learn.find(q=>q.info);if(q)h+=`<section class="lcard info" style="${sv(s)}"><div class="lc-top"><p class="fe-tag ig-tag">${esc(l.t)}</p><button class="spk" data-act="open" data-v="${l.id}">Ir a la lección</button></div>${V(q.v)}</section>`});app(h);scrollTo(0,0)}
function openLesson(id){const r=LIDX[id];if(!r)return home();LS={s:r.s,l:r.l,page:0};learn()}
function learn(){const{s,l}=LS,pg=l.learn[LS.page],n=l.learn.length;begin();const txt=pg.info?infoText(pg.v.v||pg.v):pg.h+". "+(pg.p||"")+visText(pg.v);
app(`<button class="back" data-act="subj" data-v="${s.id}">${ui("back")} ${s.n}</button><div class="lhead" style="${sv(s)}"><p class="eyebrow">Aprende · página ${LS.page+1} de ${n}</p><h1>${esc(l.t)}</h1><div class="pdots">${l.learn.map((q,i)=>`<i class="${i===LS.page?"on":i<LS.page?"past":""}${q.fe?" fe":""}${q.info?" inf":""}"></i>`).join("")}</div></div>
${pg.info?`<article class="lcard info" style="${sv(s)}"><div class="lc-top"><p class="fe-tag ig-tag">Repasa con la infografía</p>${sayBtn(txt)}</div>${V(pg.v)}</article>`:`<article class="lcard${pg.fe?" fe":""}" style="${sv(s)}">${pg.fe?`<p class="fe-tag">${CROSS} Con los ojos de la fe</p>`:""}<div class="lc-top"><h2>${pg.h}</h2>${sayBtn(txt)}</div>${pg.v?`<div class="vis">${V(pg.v)}</div>`:""}${pg.p?`<div class="ltext">${pg.p}</div>`:""}</article>`}
<div class="lnav" style="${sv(s)}">${LS.page>0?`<button class="btn ghost" data-act="prev">${ui("back")} Anterior</button>`:"<span></span>"}${LS.page<n-1?`<button class="btn" data-act="next">Siguiente ${ui("fwd")}</button>`:`<button class="btn big" data-act="practice">¡A practicar!</button>`}</div>`);auto(txt)}

function buildList(l){let list=l.ex.slice();(l.g||[]).forEach(([name,cnt,arg])=>{for(let i=0;i<cnt;i++){try{list.push(G[name](arg))}catch(e){}}});return shuf(list)}
function practice(){LS.list=buildList(LS.l);LS.i=0;LS.first=0;newEx()}
function reto(){const g=curG(),mix=g>=3?["mult69","multAll","div","mult69","add4","sub4","fracOf"]:g>=2?["add2r","sub2r","mult","mult","add100","sub100","dbl"]:["add10","sub10","add20","sub20","dbl","make10"];LS={reto:true,s:findC("mat",g),l:{t:"Reto de cálculo mental"},list:Array.from({length:10},()=>G[pick(mix)]()),i:0,first:0};newEx()}
function newEx(){const ex=LS.list[LS.i];if(LS.review&&LIDX[ex.__lid])LS.s=LIDX[ex.__lid].s;X={ex,tries:0,done:false,ok:false,num:"",built:[],assign:{},bad:[],badRows:[]};if(colMode(ex))colInit();
if(ex.k==="c")X.opts=shuf(ex.o.map((t,i)=>({t,ok:i===0})));
if(ex.k==="ord")X.pool=shuf(ex.items.map((t,i)=>({t,id:i}))).map((o,i)=>({t:o.t,id:i}));
if(ex.k==="b")X.pool=shuf([...ex.a,...ex.x]).map((t,i)=>({t,id:i}));
if(ex.k==="s")X.items=shuf(ex.items.map(([t,g],i)=>({t,g,id:i})));
begin();drawEx();scrollTo(0,0);auto(qText())}
function qText(){const ex=X.ex;let t=ex.q;if(ex.k==="c"&&X.opts.some(o=>o.t.length>3))t+=". Las opciones son: "+X.opts.map(o=>o.t).join("; ");if(ex.k==="tf")t+=". ¿Verdadero o falso?";return t}
function ansText(ex){switch(ex.k){case"c":return ex.o[0];case"tf":return ex.a?"Verdadero":"Falso";case"n":return String(ex.a);case"ord":return ex.items.join(" → ");case"b":return ex.a.join("");case"s":return ex.items.map(([t,g])=>`${strip(t)}: ${ex.g[g]}`).join(" · ")}return""}

function drawEx(){const{s}=LS,ex=X.ex,tot=LS.list.length;SAY=[];MODE="prac";drawTop();let a="";
switch(ex.k){
case"c":{const short=X.opts.every(o=>o.t.length<=4);a=`<div class="opts${short?" short":""}">${X.opts.map((o,i)=>`<button class="opt${X.bad.includes(i)?" bad":""}${X.done&&o.ok?" ok":""}" data-act="opt" data-v="${i}"${X.done||X.bad.includes(i)?" disabled":""}>${esc(o.t)}</button>`).join("")}</div>`;break}
case"tf":a=`<div class="opts">${[[true,"Verdadero"],[false,"Falso"]].map(([v,t])=>`<button class="opt${X.bad.includes(String(v))?" bad":""}${X.done&&ex.a===v?" ok":""}" data-act="tf" data-v="${v}"${X.done||X.bad.includes(String(v))?" disabled":""}>${t}</button>`).join("")}</div>`;break;
case"n":if(colMode(ex)){a=colPanel();break}a=`<div class="numwrap"><div class="numbox${X.done?(X.ok?" ok":" rev"):""}" aria-live="polite">${X.done?ex.a:(X.num||"&nbsp;")}</div>${X.done?"":`<div class="keypad">${[1,2,3,4,5,6,7,8,9].map(k=>`<button class="key" data-act="key" data-v="${k}">${k}</button>`).join("")}<button class="key alt" data-act="key" data-v="del" aria-label="Borrar">Borrar</button><button class="key" data-act="key" data-v="0">0</button><button class="key go" data-act="check" aria-label="Comprobar">✓</button></div>`}</div>`;break;
case"ord":case"b":{const used=new Set(X.built),sep=ex.k==="ord"?`<span class="arrow" aria-hidden="true">→</span>`:"";a=`<div class="built${ex.k==="b"?" word":""}">${X.built.length?X.built.map((id,j)=>`<button class="tile2 in" data-act="untile" data-v="${j}"${X.done?" disabled":""}>${esc(X.pool[id].t)}</button>`).join(sep):`<span class="ph">Toca las fichas en orden</span>`}</div>${X.done?"":`<div class="pool">${X.pool.map(p=>`<button class="tile2" data-act="tile" data-v="${p.id}"${used.has(p.id)?" disabled":""}>${esc(p.t)}</button>`).join("")}</div><div class="row center"><button class="btn ghost" data-act="clearb">Borrar todo</button><button class="btn" data-act="check"${X.built.length?"":" disabled"}>Comprobar</button></div>`}`;break}
case"s":a=`<div class="sort">${X.items.map(it=>`<div class="srow${X.badRows.includes(it.id)&&!X.done?" bad":""}"><span class="sit">${it.t}</span><div class="sg">${ex.g.map((g,gi)=>`<button class="gbtn${X.done?(it.g===gi?" ok":""):(X.assign[it.id]===gi?" on":"")}" data-act="grp" data-v="${it.id}:${gi}"${X.done?" disabled":""}>${g}</button>`).join("")}</div></div>`).join("")}</div>${X.done?"":`<div class="row center"><button class="btn" data-act="check"${Object.keys(X.assign).length===X.items.length?"":" disabled"}>Comprobar</button></div>`}`;break}
app(`<div class="phead" style="${sv(s)}"><button class="back" data-act="quit" aria-label="Salir de la práctica">${ui("back")}</button><div class="pbar" role="progressbar" aria-valuenow="${LS.i}" aria-valuemax="${tot}"><i style="width:${LS.i/tot*100}%"></i></div><span class="pcount">${LS.i+1}/${tot}</span></div>
<article class="ecard" style="${sv(s)}"><div class="lc-top"><h2 class="q">${ex.q}</h2>${sayBtn(qText())}</div>${ex.v&&!colMode(ex)?`<div class="vis">${V(ex.v)}</div>`:""}${a}${fb()}</article>`)}
function fb(){const ex=X.ex;if(X.done&&X.ok)return`<div class="fb ok" role="status">${bird("sm")}<div><b>${X.msg}</b>${ex.w&&X.tries>0?`<p>${ex.w}</p>`:""}</div><button class="btn cont" data-act="cont">Continuar ${ui("fwd")}</button></div>`;
if(X.done)return`<div class="fb rev" role="status">${bird("sm")}<div><b>La respuesta es: ${esc(ansText(ex))}</b>${ex.w?`<p>${ex.w}</p>`:"<p>Ahora ya lo sabes. ¡La próxima vez te saldrá!</p>"}</div><button class="btn cont" data-act="cont">Continuar ${ui("fwd")}</button></div>`;
if(X.tries>0)return`<div class="fb try" role="status"><div><b>${X.msg}</b>${ex.w?`<p>Pista: ${ex.w}</p>`:""}</div></div>`;return""}
function answer(ok){if(X.done)return;if(X.tries===0&&!X.logged){X.logged=true;try{logFirst(ok)}catch(e){}}if(ok){X.done=true;X.ok=true;X.msg=pick(PRAISE);if(X.tries===0)LS.first++;SND.ok()}else{X.tries++;SND.bad();X.msg=pick(TRY);if(X.tries>=2)X.done=true}
drawEx();const f=$(".fb");if(f)try{f.scrollIntoView({block:"nearest",behavior:"smooth"})}catch(e){}
if(S.voice)say(X.done?(X.ok?X.msg:"La respuesta es "+ansText(X.ex)):X.msg+(X.ex.w?" Pista: "+X.ex.w:""))}
function check(){const ex=X.ex;let ok=false;if(colMode(ex))return colCheck();
if(ex.k==="n"){if(!X.num)return;ok=+X.num===+ex.a;if(!ok)X.num=""}
else if(ex.k==="ord")ok=X.built.length===ex.items.length&&X.built.every((id,j)=>X.pool[id].t===ex.items[j]);
else if(ex.k==="b")ok=X.built.map(id=>X.pool[id].t).join("")===ex.a.join("");
else if(ex.k==="s"){X.badRows=X.items.filter(it=>X.assign[it.id]!==it.g).map(it=>it.id);ok=!X.badRows.length}
answer(ok)}
function finish(){if(LS.review)return reviewFinish();if(LS.exam)return examFinish();const tot=LS.list.length,f=LS.first,st=f/tot>=.9?3:f/tot>=.6?2:1,p=me();SND.win();const u0=unlockedN(p);
if(LS.reto){p.reto=Math.max(p.reto||0,f)}else{const old=p.prog[LS.l.id]||{};p.prog[LS.l.id]={done:true,stars:Math.max(old.stars||0,st),last:Date.now(),n:(old.n||0)+1}}save();
begin();const s=LS.s,nx=LS.reto?null:nextAfter(s,LS.l.id);
app(`<section class="result" style="${sv(s)}">${bird("big")}<div class="bigstars">${[0,1,2].map(i=>`<span class="${i<st?"on":""}" style="animation-delay:${i*.25}s">${icon(i<st?"star":"starO",64)}</span>`).join("")}</div><h1>${MSG[st].split("!")[0]}!</h1><p class="lead">${esc(LS.l.t)}: acertaste a la primera <b>${f} de ${tot}</b>. ${MSG[st].split("!").slice(1).join("!").trim()}</p><div class="row center">${LS.reto?`<button class="btn ghost" data-act="home">Inicio</button><button class="btn" data-act="reto">Jugar otra vez</button>`:`<button class="btn ghost" data-act="retry">Practicar otra vez</button><button class="btn ghost" data-act="relearn">Repasar la lección</button>${nx?`<button class="btn" data-act="open" data-v="${nx.id}">Siguiente lección ${ui("fwd")}</button>`:`<button class="btn" data-act="subj" data-v="${s.id}">Ver la materia</button>`}`}</div>${LS.reto?"":newStampHTML(u0,unlockedN(p))}</section>`);scrollTo(0,0);confetti();auto(MSG[st])}

/* ========= Perfiles y zona de papás ========= */
function sheet(h){const el=$("#sheet");el.innerHTML=`<div class="sheet-in" role="dialog" aria-modal="true">${h}</div>`;el.hidden=false}
function closeSheet(){$("#sheet").hidden=true;GATE=null}
function profSheet(){sheet(`<h2>¿Quién va a estudiar?</h2><div class="plist">${S.profiles.map(p=>`<button class="prow${p.id===S.cur?" on":""}" data-act="setp" data-v="${p.id}"><span class="avatar" style="background:${PC[p.ci%PC.length]}">${esc((p.name[0]||"?").toUpperCase())}</span><span>${esc(p.name)}</span><small>${icon("star",18)} ${totalStars(p)}</small></button>`).join("")}</div><p class="note">Para agregar niños o cambiar nombres, entra a la zona de Papás.</p><button class="btn ghost" data-act="close" style="--sc:var(--mat)">Cerrar</button>`)}
function gate(){GATE={a:rnd(6,9),b:rnd(6,9),v:"",msg:""};drawGate()}
function drawGate(){sheet(`<h2>Zona de papás</h2><p>Para entrar, resuelve esta multiplicación: <b>${GATE.a} × ${GATE.b}</b></p><div class="numbox">${GATE.v||"&nbsp;"}</div><p class="gate-msg" role="status">${GATE.msg}</p><div class="keypad">${[1,2,3,4,5,6,7,8,9].map(k=>`<button class="key" data-act="gk" data-v="${k}">${k}</button>`).join("")}<button class="key alt" data-act="gk" data-v="del">Borrar</button><button class="key" data-act="gk" data-v="0">0</button><button class="key go" data-act="gk" data-v="ok" aria-label="Entrar">✓</button></div><button class="btn ghost" data-act="close" style="--sc:var(--mat)">Cancelar</button>`)}
function parents(){LS=null;begin();MODE="parents";const p=me();
const rows=GRADES.map(([g,gt])=>`<tr><th colspan="4">${gt} grado${g===curG()?" (actual)":""}</th></tr>`+gSubj(g).map(s=>{const pr=subjProg(s),st=allLessons(s).reduce((a,l)=>a+((p.prog[l.id]||{}).stars||0),0);return`<tr><td><span class="sw" style="background:var(--${s.c||s.id})"></span>${s.n}</td><td>${s.campo}</td><td class="nm">${pr.d} / ${pr.t}</td><td class="nm">${st} / ${pr.t*3}</td></tr>`}).join("")).join("");
const recent=Object.entries(p.prog).filter(([id])=>LIDX[id]).sort((a,b)=>(b[1].last||0)-(a[1].last||0)).slice(0,6);
let fm=d=>{try{return new Date(d).toLocaleDateString("es-MX",{day:"numeric",month:"short"})}catch(e){return""}};
app(`<button class="back" data-act="home">${ui("back")} Inicio</button><h1>Zona de papás</h1><p class="lead">Progreso, niños y ajustes. Todo se guarda solo en este dispositivo y navegador.</p>
<section class="panel"><h2>Progreso de ${esc(p.name)}</h2><div class="tscroll"><table class="prog"><thead><tr><th>Materia</th><th>Campo formativo</th><th>Lecciones</th><th>Estrellas</th></tr></thead><tbody>${rows}</tbody></table></div>
${recent.length?`<h3>Últimas lecciones</h3><ul class="tips">${recent.map(([id,r])=>`<li>${fm(r.last)} · ${LIDX[id].s.n}: ${esc(LIDX[id].l.t)} — ${r.stars} ${r.stars===1?"estrella":"estrellas"}</li>`).join("")}</ul>`:`<p class="note">Aún no hay lecciones terminadas. Empiecen con el plan de hoy.</p>`}</section>
<section class="panel"><h2>Niños</h2><div class="plist">${S.profiles.map(q=>`<div class="prow${q.id===S.cur?" on":""}" style="cursor:default"><span class="avatar" style="background:${PC[q.ci%PC.length]}">${esc((q.name[0]||"?").toUpperCase())}</span><span>${esc(q.name)}</span><span class="prof-actions">${q.id===S.cur?"":`<button class="mini-btn" data-act="setp2" data-v="${q.id}">Elegir</button>`}${S.profiles.length>1?(PCONF===q.id?`<button class="mini-btn dang" data-act="delp" data-v="${q.id}">Sí, borrar</button><button class="mini-btn" data-act="nodel">No</button>`:`<button class="mini-btn dang" data-act="askdel" data-v="${q.id}">Borrar</button>`):""}</span></div>`).join("")}</div>
<form id="addp" class="addp"><label for="pname">Agregar un niño o niña</label><div class="row"><input id="pname" maxlength="20" placeholder="Nombre" autocomplete="off"><button class="btn" type="submit" style="--sc:var(--mat)">Agregar</button></div></form>
<form id="renp" class="addp"><label for="rname">Cambiar el nombre de ${esc(p.name)}</label><div class="row"><input id="rname" maxlength="20" value="${esc(p.name)}" autocomplete="off"><button class="btn ghost" type="submit" style="--sc:var(--mat)">Guardar</button></div></form></section>
<section class="panel"><h2>Cuadernos para imprimir</h2><p>Hojas de trabajo de todas las lecciones, con infografía, ejercicios, caligrafía, dibujo, sección de fe y solucionario al final. Tamaño carta.</p><div class="row">${GRADES.filter(([n])=>n<=3).map(([n,t])=>`<a class="btn" style="--sc:var(--mat)" href="${CUAD}Cuaderno-${n}o-primaria.pdf" target="_blank" rel="noopener">Cuaderno de ${t}</a>`).join("")}</div><p class="note">Abre el PDF y usa la opción de imprimir de tu navegador. En el índice vienen las páginas de cada materia para imprimir solo una. También hay un archivo por materia en la carpeta «por-materia» del repositorio.</p></section>
${followPanel()}${lecPanel()}${misionPanel()}${imgCheckPanel()}${typeof vozPanel==="function"?vozPanel():""}${typeof musicaPanel==="function"?musicaPanel():""}${syncPanel()}<section class="panel"><h2>Ajustes</h2><fieldset class="thm"><legend>Apariencia</legend>${[["light","Día"],["dark","Noche"],["auto","Automático (como el dispositivo)"]].map(([v,t])=>`<label class="chk"><input type="radio" name="optheme" id="th-${v}" value="${v}"${(S.theme||"auto")===v?" checked":""}> ${t}</label>`).join("")}</fieldset><label class="chk"><input type="checkbox" id="optvoice"${S.voice?" checked":""}> Leer en voz alta las lecciones y preguntas</label><label class="chk"><input type="checkbox" id="optfx"${S.fx?" checked":""}> Sonidos de aciertos y errores</label><p class="note">La voz usa el lector del dispositivo. Si no se escucha, sube el volumen o instala una voz en español en los ajustes del teléfono o la computadora.</p></section>
<section class="panel"><h2>Cómo usar la Escuelita</h2><ul class="tips"><li>Dediquen de 20 a 30 minutos por materia. Matemáticas y Español, todos los días; las demás materias se turnan dos días por semana. El «Hoy te toca» del inicio sigue el plan de clases, que pueden ajustar en «Plan de clases».</li><li>Lean juntos la parte de «Aprende» y luego dejen que el niño practique solo.</li><li>Con 1 o 2 estrellas, repitan la práctica otro día. En Matemáticas los ejercicios cambian cada vez.</li><li>Complementen con cuaderno: copiar las palabras nuevas y resolver las sumas a mano.</li><li>Las lecciones siguen los temas de 1.º de primaria de la SEP. Todas las materias se enseñan desde la fe católica: cada lección termina con una página «Con los ojos de la fe» y sus ejercicios. Religión y Primera Comunión siguen el Catecismo de la Iglesia Católica.</li><li>Empiecen cada día con la oración al Espíritu Santo que aparece en el inicio.</li></ul></section>
<section class="panel"><h2>Reiniciar progreso</h2><p>Borra las estrellas y lecciones de ${esc(p.name)}. Los demás niños no cambian.</p><div class="row">${PCONF==="reset"?`<button class="btn warn" data-act="doreset">Sí, borrar su progreso</button><button class="btn ghost" data-act="nodel" style="--sc:var(--mat)">No</button>`:`<button class="btn warn" data-act="askreset">Reiniciar progreso</button>`}</div></section>`);}

/* ========= Confeti ========= */
function confetti(){try{if(matchMedia("(prefers-reduced-motion: reduce)").matches)return}catch(e){}const c=$("#fx"),x=c.getContext("2d");if(!x)return;c.width=innerWidth;c.height=innerHeight;c.style.display="block";const cols=["#2463c8","#d2383f","#1d8c5c","#c95f0e","#6f45c0","#f5b51e","#1a7fa3"];const ps=Array.from({length:130},()=>({x:innerWidth/2+(Math.random()-.5)*80,y:innerHeight*.3,vx:(Math.random()-.5)*13,vy:-Math.random()*13-4,r:Math.random()*7+5,c:pick(cols),a:Math.random()*6}));let t=0;(function f(){x.clearRect(0,0,c.width,c.height);ps.forEach(p=>{p.vy+=.33;p.vx*=.99;p.x+=p.vx;p.y+=p.vy;p.a+=.18;x.save();x.translate(p.x,p.y);x.rotate(p.a);x.fillStyle=p.c;x.fillRect(-p.r/2,-p.r/4,p.r,p.r/2);x.restore()});if(++t<120)requestAnimationFrame(f);else{x.clearRect(0,0,c.width,c.height);c.style.display="none"}})()}

/* ========= Acciones ========= */
const ACT={
home:()=>home(),subj:v=>subj(v),open:v=>{openLesson(v);scrollTo(0,0)},
next:()=>{LS.page++;learn();scrollTo(0,0)},prev:()=>{LS.page--;learn();scrollTo(0,0)},
practice:()=>practice(),retry:()=>practice(),relearn:()=>{LS.page=0;learn();scrollTo(0,0)},
opt:v=>{const i=+v,o=X.opts[i];if(!o||X.done)return;if(o.ok)answer(true);else{X.bad.push(i);answer(false)}},
tf:v=>{if(X.done)return;const b=v==="true";if(b===X.ex.a)answer(true);else{X.bad.push(v);answer(false)}},
key:v=>{if(X&&X.col&&colMode(X.ex))return colKey(v);if(v==="del")X.num=X.num.slice(0,-1);else if(X.num.length<5)X.num=(X.num==="0"?"":X.num)+v;SND.tap();drawEx()},
check:()=>check(),
tile:v=>{if(!X.built.includes(+v))X.built.push(+v);SND.tap();drawEx()},
untile:v=>{X.built.splice(+v,1);drawEx()},clearb:()=>{X.built=[];drawEx()},
grp:v=>{const[i,g]=v.split(":").map(Number);X.assign[i]=g;X.badRows=X.badRows.filter(r=>r!==i);SND.tap();drawEx()},
cont:()=>{LS.i++;if(LS.i>=LS.list.length)finish();else newEx()},
quit:()=>LS&&!LS.reto&&!LS.review?subj(LS.s.id):home(),
say:v=>say(SAY[+v],true),
reto:()=>reto(),
gal:v=>gallery(v),
grade:v=>{me().grade=+v;me().upd=Date.now();save();home()},
theme:()=>{S.theme=isDark()?"light":"dark";save();applyTheme();drawTop()},
voice:()=>{S.voice=!S.voice;save();if(!S.voice)try{speechSynthesis.cancel()}catch(e){}drawTop()},
profiles:()=>profSheet(),setp:v=>{S.cur=v;save();closeSheet();home()},close:()=>closeSheet(),
parents:()=>gate(),
gk:v=>{if(v==="del")GATE.v=GATE.v.slice(0,-1);else if(v==="ok"){if(+GATE.v===GATE.a*GATE.b){closeSheet();PCONF=null;parents();scrollTo(0,0);return}GATE.v="";GATE.msg="Esa no es. Inténtalo otra vez."}else if(GATE.v.length<3)GATE.v+=v;drawGate()},
setp2:v=>{S.cur=v;PCONF=null;save();parents()},
askdel:v=>{PCONF=v;parents()},nodel:()=>{PCONF=null;parents()},
delp:v=>{S.del=[...(S.del||[]),v];S.profiles=S.profiles.filter(p=>p.id!==v);if(S.cur===v)S.cur=S.profiles[0].id;PCONF=null;save();parents()},
askreset:()=>{PCONF="reset";parents()},doreset:()=>{const p=me();p.prog={};p.reto=0;p.err={};p.tp={};p.rst=Date.now();PCONF=null;save();parents()}
};

function init(){S=load();applyTheme();try{matchMedia("(prefers-color-scheme: dark)").addEventListener("change",()=>{if(S.theme==="auto")drawTop()})}catch(e){}indexAll();loadVoices();try{speechSynthesis.onvoiceschanged=loadVoices}catch(e){}
document.addEventListener("click",e=>{if(e.target.id==="sheet"){closeSheet();return}const b=e.target.closest("[data-act]");if(!b||b.disabled)return;const f=ACT[b.dataset.act];if(f)f(b.dataset.v,b,e)});
document.addEventListener("submit",e=>{e.preventDefault();if(e.target.id==="addp"){const n=$("#pname").value.trim();if(n){const pr=newProfile(n,S.profiles.length);S.profiles.push(pr);save();parents()}}if(e.target.id==="renp"){const n=$("#rname").value.trim();if(n){me().name=n;me().upd=Date.now();save();parents()}}});
document.addEventListener("change",e=>{if(e.target.id==="optvoice"){S.voice=e.target.checked;save();drawTop()}if(e.target.id==="optfx"){S.fx=e.target.checked;save()}if(e.target.name==="optheme"){S.theme=e.target.value;save();applyTheme();drawTop()}});
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&!$("#sheet").hidden)closeSheet();if(MODE==="prac"&&X&&!X.done&&X.ex.k==="n"&&$("#sheet").hidden){if(/^[0-9]$/.test(e.key))ACT.key(e.key);else if(e.key==="Backspace")ACT.key("del");else if(e.key==="Enter")check()}});
home();syncBoot()}
