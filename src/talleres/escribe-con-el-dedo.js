/* ========= Escribe con el dedo: trazo de letras, sílabas, palabras y números, y dibujo libre ========= */
const TZW={a:"Amor",e:"Evangelio",i:"Iglesia",o:"Oración",u:"Unidos",m:"María",p:"Paz",s:"Santo",l:"Luz",t:"Templo",d:"Dios",n:"Navidad",r:"Rosario",c:"Cruz",b:"Biblia",f:"Fe",g:"Gracia",j:"Jesús",v:"Virgen",ñ:"Señor",h:"Hostia",q:"Querer",y:"Yo te amo",z:"Zaqueo",k:"Kilo",w:"Wendy",x:"Xóchitl"};
const TZ={
 vocales:{n:"Vocales",x:["a","e","i","o","u","A","E","I","O","U"]},
 letras:{n:"Letras",x:"m p s l t d n r c b f g j v ñ h q y z".split(" ").flatMap(c=>[c,c.toUpperCase()])},
 silabas:{n:"Sílabas",x:"ma me mi mo mu pa pe pi po pu sa se si so su la le li lo lu ta te ti to tu".split(" ")},
 palabras:{n:"Palabras",x:["Dios","Jesús","María","José","amor","paz","fe","cruz","luz","mamá","papá","casa","sol","Misa","ángel"]},
 frases:{n:"Frases",x:["Dios es amor","Jesús te ama","Ave María","Gracias, Señor","Amo a mi familia"]},
 numeros:{n:"Números",x:"0 1 2 3 4 5 6 7 8 9 10 12 20".split(" ")}
};
const TZDEF={1:"vocales",2:"silabas",3:"palabras"};
let TZS=null;
const tzKey=(tab,i)=>tab+":"+TZ[tab].x[i];
function tzStars(sc){return sc>=80?3:sc>=60?2:sc>=40?1:0}
function trazoStars(p){const t=Object.values((p||me()).trz||{}).reduce((a,x)=>a+(x.st||0),0);return Math.floor(t/3)}
function trazoCard(){const p=me(),n=Object.keys(p.trz||{}).length;return`<section class="reto" style="border-color:var(--tra)"><div class="tz-mini" aria-hidden="true">✍️</div><div><h3>Escribe con el dedo</h3><p>Traza letras, sílabas, palabras y números sobre el renglón, o dibuja libre. ${n?`Llevas ${n} trazos.`:"Cada 3 estrellas de trazo suman una estrella a tu álbum."}</p></div><button class="btn" data-act="trazo" style="--sc:var(--tra)">Escribir</button></section>`}
function trazoView(tab){LS=null;begin();MODE="trazo";const p=me(),g=p.grade||1;tab=TZ[tab]?tab:TZDEF[g]||"vocales";const T=TZ[tab];
 app(`<button class="back" data-act="home">${ui("back")} Inicio</button><section class="sband" style="--sc:var(--tra);--ss:var(--tra-s)"><span class="sic tz-ic" aria-hidden="true">✍️</span><div><p class="eyebrow">Caligrafía</p><h1>Escribe con el dedo</h1><p>Elige qué quieres trazar. Sigue la letra punteada con tu dedo, sin salirte del renglón.</p></div></section>
 <div class="tz-tabs" role="tablist">${Object.entries(TZ).map(([k,v])=>`<button class="gbtn${k===tab?" on":""}" style="--sc:var(--tra)" data-act="trazo" data-v="${k}" role="tab" aria-selected="${k===tab}">${v.n}</button>`).join("")}<button class="gbtn" style="--sc:var(--tra)" data-act="tzfree">🎨 Dibujo libre</button></div>
 <div class="tz-grid">${T.x.map((c,i)=>{const r=(p.trz||{})[tzKey(tab,i)];return`<button class="tz-item${r?" done":""}" data-act="tzitem" data-v="${tab}:${i}"><b>${esc(c)}</b><span class="tz-st">${r?"★".repeat(r.st||0)+"☆".repeat(3-(r.st||0)):"☆☆☆"}</span></button>`}).join("")}</div>`);scrollTo(0,0)}
function tzItem(tab,i){begin();MODE="trazo";const T=TZ[tab],c=T.x[i],w=TZW[c.toLowerCase()],r=(me().trz||{})[tzKey(tab,i)];TZS={tab,i,c,free:false};
 app(`<button class="back" data-act="trazo" data-v="${tab}">${ui("back")} ${T.n}</button><div class="lhead" style="--sc:var(--tra)"><p class="eyebrow">${T.n} · ${i+1} de ${T.x.length}</p><h1>Traza: <span class="tz-big">${esc(c)}</span></h1>${w&&c.length===1?`<p class="note">Como en «${w}».</p>`:""}</div>
 <div class="tz-wrap"><canvas id="tzc" class="tz-can" aria-label="Renglón para trazar ${esc(c)} con el dedo"></canvas></div>
 <p class="tz-msg" id="tzmsg" aria-live="polite">${r?`Tu mejor trazo: ${"★".repeat(r.st||0)}${"☆".repeat(3-(r.st||0))}`:"Empieza desde arriba y sigue la línea punteada."}</p>
 <div class="row center"><button class="btn ghost" data-act="tzclear" style="--sc:var(--tra)">Borrar</button><button class="btn" data-act="tzcheck" style="--sc:var(--tra)">Revisar</button>${i<T.x.length-1?`<button class="btn ghost" data-act="tzitem" data-v="${tab}:${i+1}" style="--sc:var(--tra)">Siguiente ${ui("fwd")}</button>`:""}</div>`);
 scrollTo(0,0);tzSetup();const sp=c.length===1&&/[a-zñ]/i.test(c)?`Traza la letra ${c}${w?", como en "+w:""}.`:/^\d+$/.test(c)?`Traza el número ${c}.`:`Traza: ${c}.`;auto(sp)}
function tzColors(){const cs=getComputedStyle(document.documentElement),g=n=>cs.getPropertyValue(n).trim();return{ink:g("--tra")||"#8a4fb5",line:g("--line")||"#ccd",mute:g("--mute")||"#889",bad:g("--bad")||"#d33",card:g("--card")||"#fff",ink2:g("--ink")||"#222"}}
function tzSetup(){const cv=document.getElementById("tzc");if(!cv)return;const box=cv.parentElement,W=Math.min(box.clientWidth||340,760),txt=TZS.free?"":TZS.c,rowH=txt.length<=2?Math.round(Math.max(200,Math.min(330,W*.72))):Math.round(Math.max(150,Math.min(260,W*.46)));let rows=[],F=0;
 if(!TZS.free){const mx=document.createElement("canvas").getContext("2d"),maxW=W*.9;F=rowH*.56*1.38;const fnt=f=>`700 ${f}px Andika,"Trebuchet MS",sans-serif`;mx.font=fnt(F);const ws=txt.split(" ");let cur="";ws.forEach(w=>{const t=cur?cur+" "+w:w;if(cur&&mx.measureText(t).width>maxW){rows.push(cur);cur=w}else cur=t});rows.push(cur);const wid=Math.max(...rows.map(r=>mx.measureText(r).width));if(wid>maxW)F*=maxW/wid;mx.font=fnt(F);rows=rows.map((t,k)=>{const y0=k*rowH,top=y0+rowH*.12,base=y0+rowH*.68;return{t,top,base,mid:top+(base-top)*.42,desc:y0+rowH*.9,tx:(W-mx.measureText(t).width)/2}})}
 const H=TZS.free?Math.round(Math.min(W*0.9,560)):rowH*rows.length,dpr=window.devicePixelRatio||1;
 cv.style.width=W+"px";cv.style.height=H+"px";cv.width=Math.round(W*dpr);cv.height=Math.round(H*dpr);const x=cv.getContext("2d");x.setTransform(dpr,0,0,dpr,0,0);
 Object.assign(TZS,{cv,x,W,H,dpr,strokes:[],cur:null,col:TZS.col||null,size:TZS.size||8,rows,F});
 tzDraw();
 if(!TZS.free&&!TZS.fontOK&&document.fonts&&document.fonts.ready)document.fonts.ready.then(()=>{if(TZS&&TZS.cv===cv&&!TZS.strokes.length){TZS.fontOK=true;tzSetup()}});
 const pos=e=>{const r=cv.getBoundingClientRect();return[e.clientX-r.left,e.clientY-r.top]};
 cv.onpointerdown=e=>{e.preventDefault();try{cv.setPointerCapture(e.pointerId)}catch(_){}TZS.cur={p:[pos(e)],c:TZS.col,w:TZS.free?TZS.size:Math.max(7,TZS.F*.085),er:TZS.eraser};TZS.strokes.push(TZS.cur);tzDraw()};
 cv.onpointermove=e=>{if(!TZS.cur)return;e.preventDefault();const ev=e.getCoalescedEvents?e.getCoalescedEvents():[e];ev.forEach(k=>TZS.cur.p.push(pos(k)));tzDraw()};
 cv.onpointerup=cv.onpointercancel=()=>{TZS.cur=null};
 cv.style.touchAction="none"}
function tzGuide(x,mode){const{W,F}=TZS,k=tzColors();TZS.rows.forEach(({t,top,base,mid,desc,tx})=>{x.save();
 if(mode==="lines"){x.lineWidth=2;x.strokeStyle=k.mute;x.globalAlpha=.55;[[top,[]],[mid,[8,7]],[base,[]],[desc,[2,6]]].forEach(([y,d])=>{x.setLineDash(d);x.beginPath();x.moveTo(8,y);x.lineTo(W-8,y);x.stroke()});x.setLineDash([]);x.globalAlpha=.9;x.strokeStyle=k.bad;x.lineWidth=2.5;x.beginPath();x.moveTo(8,base);x.lineTo(W-8,base);x.stroke();x.restore();return}
 x.font=`700 ${F}px Andika,"Trebuchet MS",sans-serif`;x.textBaseline="alphabetic";
 if(mode==="show"){x.globalAlpha=.16;x.fillStyle=k.ink2;x.fillText(t,tx,base);x.globalAlpha=.75;x.setLineDash([5,6]);x.lineWidth=2.2;x.strokeStyle=k.ink2;x.strokeText(t,tx,base)}
 else{x.fillStyle="#000";x.strokeStyle="#000";x.lineJoin="round";x.fillText(t,tx,base);if(mode>0){x.lineWidth=mode;x.strokeText(t,tx,base)}}
 x.restore()})}
function tzPath(x,s,w){x.lineWidth=w||s.w;x.lineCap="round";x.lineJoin="round";x.beginPath();s.p.forEach(([a,b],j)=>j?x.lineTo(a,b):x.moveTo(a,b));if(s.p.length===1)x.lineTo(s.p[0][0]+.1,s.p[0][1]);x.stroke()}
function tzDraw(){const{x,W,H}=TZS,k=tzColors();x.clearRect(0,0,W,H);x.fillStyle=k.card;x.fillRect(0,0,W,H);
 if(!TZS.free){tzGuide(x,"lines");tzGuide(x,"show")}
 TZS.strokes.forEach(s=>{x.save();x.globalCompositeOperation="source-over";x.strokeStyle=s.er?k.card:(s.c||k.ink);tzPath(x,s);x.restore()})}
function tzMask(draw){const{W,H}=TZS,s=3,c=document.createElement("canvas");c.width=Math.ceil(W/s);c.height=Math.ceil(H/s);const x=c.getContext("2d");x.scale(1/s,1/s);draw(x);const d=x.getImageData(0,0,c.width,c.height).data,o=new Uint8Array(c.width*c.height);for(let i=0;i<o.length;i++)o[i]=d[i*4+3]>60?1:0;return o}
function tzScore(){const{F}=TZS;if(!TZS.strokes.length)return null;
 const G=tzMask(x=>tzGuide(x,0)),Gw=tzMask(x=>tzGuide(x,F*.2)),I=tzMask(x=>{x.strokeStyle="#000";TZS.strokes.forEach(s=>tzPath(x,s))}),Iw=tzMask(x=>{x.strokeStyle="#000";TZS.strokes.forEach(s=>tzPath(x,s,s.w+F*.12))});
 let g=0,gc=0,n=0,ni=0;for(let i=0;i<G.length;i++){if(G[i]){g++;if(Iw[i])gc++}if(I[i]){n++;if(Gw[i])ni++}}
 if(!g||!n)return{sc:0,cov:0,pre:0};const cov=gc/g,pre=ni/n;return{cov,pre,sc:Math.round(100*Math.min(1,cov/.85)*Math.min(1,pre/.88))}}
function tzCheck(){const r=tzScore(),m=document.getElementById("tzmsg");if(!r){m.textContent="Primero traza con tu dedo sobre la línea punteada.";say(m.textContent);return}
 const st=tzStars(r.sc),p=me(),k=tzKey(TZS.tab,TZS.i);p.trz=p.trz||{};const o=p.trz[k]||{best:0,st:0,n:0};p.trz[k]={best:Math.max(o.best||0,r.sc),st:Math.max(o.st||0,st),n:(o.n||0)+1,last:Date.now()};save();
 const tip=r.cov<.7?"Te faltó pasar por toda la letra.":r.pre<.8?"Trata de no salirte de la línea.":"";
 if(st){if(st===3){SND.win();try{confetti()}catch(e){}}else SND.ok()}else SND.bad();
 m.innerHTML=st?`<b class="tz-res">${"★".repeat(st)}${"☆".repeat(3-st)}</b> ${st===3?"¡Excelente trazo!":st===2?"¡Muy bien!":"¡Bien! Puedes mejorarlo."} ${tip}`:`Inténtalo otra vez. ${tip}`;say(strip(m.innerHTML).replace(/[★☆]/g,""))}
/* --- Dibujo libre --- */
const TZPAL=["#1b2a44","#e5484d","#f58a2a","#ffc93c","#3fa34d","#3d8bfd","#7a4fc0","#f6a5b8","#8a5a33","#ffffff"];
function tzFree(){begin();MODE="trazo";TZS={free:true,col:TZPAL[5],size:8,eraser:false};
 app(`<button class="back" data-act="trazo">${ui("back")} Escribe con el dedo</button><div class="lhead" style="--sc:var(--tra)"><p class="eyebrow">Dibujo libre</p><h1>Dibuja lo que quieras</h1><p class="note">Idea: dibuja a tu familia rezando, tu santo favorito o la creación de Dios.</p></div>
 <div class="tz-tools"><div class="tz-pal">${TZPAL.map(c=>`<button class="tz-col${c===TZS.col?" on":""}" style="background:${c}" data-act="tzcol" data-v="${c}" aria-label="Color ${c}"></button>`).join("")}</div><div class="tz-pal">${[4,8,16,28].map(s=>`<button class="tz-sz${s===TZS.size?" on":""}" data-act="tzsz" data-v="${s}" aria-label="Grosor ${s}"><i style="width:${Math.min(s,26)}px;height:${Math.min(s,26)}px"></i></button>`).join("")}<button class="tz-sz" data-act="tzer" aria-label="Goma" title="Goma">🧽</button></div></div>
 <div class="tz-wrap"><canvas id="tzc" class="tz-can" aria-label="Hoja para dibujar con el dedo"></canvas></div>
 <div class="row center"><button class="btn ghost" data-act="tzundo" style="--sc:var(--tra)">Deshacer</button><button class="btn ghost" data-act="tzclear" style="--sc:var(--tra)">Borrar todo</button><button class="btn" data-act="tzsave" style="--sc:var(--tra)">Guardar imagen</button></div>`);scrollTo(0,0);tzSetup()}
function tzPick(sel,b){document.querySelectorAll(sel).forEach(e=>e.classList.remove("on"));b.classList.add("on")}
Object.assign(ACT,{trazo:v=>trazoView(v),tzitem:v=>{const[t,i]=v.split(":");tzItem(t,+i)},tzclear:()=>{if(TZS){TZS.strokes=[];tzDraw();const m=document.getElementById("tzmsg");if(m)m.textContent="Empieza desde arriba y sigue la línea punteada."}},tzcheck:()=>tzCheck(),tzfree:()=>tzFree(),
 tzcol:(v,b)=>{TZS.col=v;TZS.eraser=false;tzPick(".tz-col",b);document.querySelectorAll(".tz-sz").forEach(e=>{if(e.dataset.act==="tzer")e.classList.remove("on")})},tzsz:(v,b)=>{TZS.size=+v;TZS.eraser=false;tzPick(".tz-sz",b)},tzer:(v,b)=>{TZS.eraser=true;tzPick(".tz-sz",b)},tzundo:()=>{if(TZS){TZS.strokes.pop();tzDraw()}},
 tzsave:()=>{try{const a=document.createElement("a");a.download="dibujo-colibri.png";a.href=TZS.cv.toDataURL("image/png");document.body.appendChild(a);a.click();a.remove()}catch(e){}}});
if(typeof addEventListener==="function")addEventListener("resize",()=>{if(MODE==="trazo"&&TZS&&TZS.cv&&document.body.contains(TZS.cv)){const old=TZS.strokes,ow=TZS.W;tzSetup();if(ow&&TZS.W!==ow){const f=TZS.W/ow;old.forEach(s=>s.p=s.p.map(([a,b])=>[a*f,b*f]))}TZS.strokes=old;tzDraw()}});
