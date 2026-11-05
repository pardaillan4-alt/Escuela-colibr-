/* ========= Matemáticas: herramientas interactivas ========= */
const NUMU=["cero","uno","dos","tres","cuatro","cinco","seis","siete","ocho","nueve","diez","once","doce","trece","catorce","quince","dieciséis","diecisiete","dieciocho","diecinueve","veinte","veintiuno","veintidós","veintitrés","veinticuatro","veinticinco","veintiséis","veintisiete","veintiocho","veintinueve"];
const NUMD=["","","","treinta","cuarenta","cincuenta","sesenta","setenta","ochenta","noventa"],NUMC=["","ciento","doscientos","trescientos","cuatrocientos","quinientos","seiscientos","setecientos","ochocientos","novecientos"];
function numPal(n){if(n<30)return NUMU[n];if(n<100){const d=Math.floor(n/10),u=n%10;return NUMD[d]+(u?" y "+NUMU[u]:"")}if(n===100)return"cien";if(n<1000){const c=Math.floor(n/100),r=n%100;return NUMC[c]+(r?" "+numPal(r):"")}const m=Math.floor(n/1000),r=n%1000;return(m===1?"mil":numPal(m)+" mil")+(r?" "+numPal(r):"")}
const mtBox=(cls,inner)=>`<div class="mt ${cls}">${inner}</div>`;
const mtBtn=(act,v,txt,main)=>`<button class="btn${main?"":" ghost"}" data-act="${act}" data-v="${v}" style="--sc:var(--mat)">${txt}</button>`;
const mtRnd=(a,b)=>a+Math.floor(Math.random()*(b-a+1));
const mtOk=()=>{try{SND.ok()}catch(e){}};

/* --- 1. Contar tocando --- */
const CONTE=["🍎","⭐","🐑","🌸","🐟","🍞","🦋","⚽","🐥","🕯️"];
VX.mtcontar=v=>mtBox("mtc",`<p class="note">Toca cada dibujo una sola vez y cuenta en voz alta.</p><div class="mtc-g"></div><p class="mt-r" aria-live="polite"></p><div class="row center">${mtBtn("mtcnew","","🔄 Otros dibujos",1)}</div>`);
function mtcFill(w){const n=mtRnd(3,10),e=CONTE[mtRnd(0,CONTE.length-1)];w.dataset.n=n;w.dataset.k=0;w.querySelector(".mtc-g").innerHTML=Array.from({length:n},()=>`<button class="mtc-i" data-act="mtctap">${e}</button>`).join("");w.querySelector(".mt-r").textContent=""}
ACT.mtcnew=(v,b)=>mtcFill(b.closest(".mt"));
ACT.mtctap=(v,b)=>{if(b.dataset.c)return;const w=b.closest(".mt"),k=+w.dataset.k+1;w.dataset.k=k;b.dataset.c=k;b.classList.add("on");b.insertAdjacentHTML("beforeend",`<i>${k}</i>`);say(numPal(k),true);if(k===+w.dataset.n){const m=`¡Hay ${k}! ${numPal(k)}.`;w.querySelector(".mt-r").textContent=m;setTimeout(()=>say(`¡Muy bien! Hay ${numPal(k)}.`,true),700);mtOk()}};

/* --- 2. Bloques de valor posicional --- */
const PV=[["millares",1000,"#8f5ad6"],["centenas",100,"#e5484d"],["decenas",10,"#3d8bfd"],["unidades",1,"#3fa34d"]];
VX.mtbloques=v=>{const mx=v.max||99,cols=PV.filter(p=>p[1]<=mx/9.99||p[1]===1);return mtBox("mtb",`<div class="mtb-d" data-n="0" data-max="${mx}"></div><div class="mtb-v"></div><div class="mtb-ctl">${cols.map(([n,val,c])=>`<div class="mtb-col" style="--cc:${c}"><b>${n}</b><div>${mtBtn("mtbadd",val,"＋")}${mtBtn("mtbadd",-val,"−")}</div></div>`).join("")}</div><p class="mt-r" aria-live="polite">Toca ＋ para agregar bloques.</p><div class="row center">${mtBtn("mtbreto","","🎯 Reto: forma el número",1)}${mtBtn("mtbadd","0","🧹 Borrar")}</div>`)};
function mtbDraw(w){const d=w.querySelector(".mtb-d"),n=+d.dataset.n,mx=+d.dataset.max;const parts=PV.map(([nm,val,c])=>[nm,Math.floor(n/val)%10,val,c]).filter(p=>p[2]<=mx/9.99||p[2]===1);
 const blk=(k,c,cnt)=>Array.from({length:cnt},()=>`<span class="pv pv-${k}" style="--cc:${c}"></span>`).join("");
 d.innerHTML=parts.map(([nm,cnt,val,c])=>`<div class="mtb-g">${blk(val,c,cnt)}</div>`).join("");
 w.querySelector(".mtb-v").innerHTML=`<div class="mtb-tab">${parts.map(([nm,cnt,,c])=>`<span style="--cc:${c}"><small>${nm[0].toUpperCase()}</small>${cnt}</span>`).join("")}</div><div class="mtb-n">${n.toLocaleString("es-MX")}</div><div class="mtb-w">${numPal(n)}</div>`}
ACT.mtbadd=(v,b)=>{const w=b.closest(".mt"),d=w.querySelector(".mtb-d"),mx=+d.dataset.max;let n=+d.dataset.n;n=+v===0?0:Math.max(0,Math.min(mx,n+ +v));d.dataset.n=n;mtbDraw(w);say(numPal(n),true);
 const g=+w.dataset.goal;if(g){const r=w.querySelector(".mt-r");if(n===g){r.textContent=`¡Lo lograste! Formaste el ${n}.`;say(`¡Muy bien! Formaste el ${numPal(n)}`,true);mtOk();delete w.dataset.goal}else r.textContent=`Reto: forma el ${g}. Llevas ${n}.`}};
ACT.mtbreto=(v,b)=>{const w=b.closest(".mt"),mx=+w.querySelector(".mtb-d").dataset.max,g=mtRnd(11,mx);w.dataset.goal=g;w.querySelector(".mt-r").textContent=`Reto: forma el ${g.toLocaleString("es-MX")}.`;say(`Forma el ${numPal(g)}`,true)};

/* --- 3. Reloj --- */
function relojPal(h,m){const hh=h%12||12,nx=(hh%12)+1,art=x=>x===1?"la una":"las "+numPal(x);if(m===0)return art(hh)+" en punto";if(m===15)return art(hh)+" y cuarto";if(m===30)return art(hh)+" y media";if(m===45)return"cuarto para "+art(nx);if(m>30)return numPal(60-m)+" para "+art(nx);return art(hh)+" y "+numPal(m)}
function relojSvg(h,m){const a=m*6,b=(h%12)*30+m/2;return`<svg viewBox="0 0 200 200" class="mtr-svg" role="img" aria-label="Reloj"><circle cx="100" cy="100" r="94" fill="#fff" stroke="#3d6fd6" stroke-width="8"/>${Array.from({length:60},(_,i)=>`<path d="M100 12v${i%5?5:11}" stroke="${i%5?"#b6c2d4":"#1b2a44"}" stroke-width="${i%5?1.5:3}" transform="rotate(${i*6} 100 100)"/>`).join("")}${Array.from({length:12},(_,i)=>{const t=(i+1)*30*Math.PI/180;return`<text x="${100+70*Math.sin(t)}" y="${107-70*Math.cos(t)}" text-anchor="middle" font-size="17" font-weight="800" fill="#1b2a44">${i+1}</text>`}).join("")}<path d="M100 100V52" stroke="#e5484d" stroke-width="8" stroke-linecap="round" transform="rotate(${b} 100 100)"/><path d="M100 100V24" stroke="#1b2a44" stroke-width="5" stroke-linecap="round" transform="rotate(${a} 100 100)"/><circle cx="100" cy="100" r="7" fill="#1b2a44"/></svg>`}
VX.mtreloj=v=>mtBox("mtr",`<div class="mtr-w" data-h="3" data-m="0" data-st="${v.step||30}">${relojSvg(3,0)}<div class="mtr-d">3:00</div><div class="mtr-p">${relojPal(3,0)}</div></div><p class="note">🔴 La manecilla corta marca la hora · ⚫ la larga, los minutos.</p><div class="row center">${mtBtn("mtrset","h-1","⏪ hora")}${mtBtn("mtrset","h1","hora ⏩")}${mtBtn("mtrset","m-1","⏪ minutos")}${mtBtn("mtrset","m1","minutos ⏩")}</div><p class="mt-r" aria-live="polite"></p><div class="row center">${mtBtn("mtrreto","","🎯 Reto: pon esta hora",1)}</div>`);
function mtrShow(w){const h=+w.dataset.h,m=+w.dataset.m;w.innerHTML=`${relojSvg(h,m)}<div class="mtr-d">${h%12||12}:${String(m).padStart(2,"0")}</div><div class="mtr-p">${relojPal(h,m)}</div>`}
ACT.mtrset=(v,b)=>{const box=b.closest(".mt"),w=box.querySelector(".mtr-w"),st=+w.dataset.st;let h=+w.dataset.h,m=+w.dataset.m;const k=v[0],d=+v.slice(1);if(k==="h")h=(h+d+12)%12;else{m+=d*st;if(m>=60){m-=60;h=(h+1)%12}if(m<0){m+=60;h=(h+11)%12}}w.dataset.h=h;w.dataset.m=m;mtrShow(w);say(relojPal(h,m),true);
 if(box.dataset.goal){const[gh,gm]=box.dataset.goal.split(":").map(Number);if(gh%12===h%12&&gm===m){box.querySelector(".mt-r").textContent="¡Exacto! Pusiste bien el reloj. ⭐";say("¡Muy bien! Esa es la hora.",true);mtOk();delete box.dataset.goal}}};
ACT.mtrreto=(v,b)=>{const box=b.closest(".mt"),st=+box.querySelector(".mtr-w").dataset.st,h=mtRnd(1,12),m=mtRnd(0,60/st-1)*st;box.dataset.goal=h+":"+m;const p=relojPal(h,m);box.querySelector(".mt-r").textContent=`Reto: pon el reloj en ${p} (${h}:${String(m).padStart(2,"0")}).`;say("Pon el reloj en "+p,true)};

/* --- 4. La tiendita --- */
const TIENDA=[["🍞","Pan",7],["🥛","Leche",23],["🍎","Manzana",6],["🍬","Dulce",3],["📒","Cuaderno",18],["🕯️","Veladora",15],["🌽","Elote",12],["🧃","Jugo",9],["📿","Rosario",35],["⚽","Balón",89]];
const DINERO=[[1,"m"],[2,"m"],[5,"m"],[10,"m"],[20,"b"],[50,"b"],[100,"b"]];
VX.mttienda=v=>{const ds=DINERO.filter(([d,t])=>v.bills||t==="m"||d===20);return mtBox("mtt",`<div class="mtt-it" data-max="${v.bills?100:30}"></div><p class="note">Toca las monedas${v.bills?" y billetes":""} para pagar.</p><div class="mtt-pay">${ds.map(([d,t])=>`<button class="din din-${t}" data-act="mttpay" data-v="${d}">$${d}</button>`).join("")}</div><div class="mtt-tot"></div><p class="mt-r" aria-live="polite"></p><div class="row center">${mtBtn("mttnew","","🛒 Otra compra",1)}</div>`)};
function mttNew(w){const mx=+w.querySelector(".mtt-it").dataset.max,ok=TIENDA.filter(t=>t[2]<=mx*(mx>30?1:1));const it=ok[mtRnd(0,ok.length-1)];w.dataset.p=it[2];w.dataset.paid=0;w.querySelector(".mtt-it").innerHTML=`<span class="mtt-e">${it[0]}</span><span>${it[1]}</span><b>$${it[2]}</b>`;w.querySelector(".mtt-tot").textContent="Has pagado: $0";w.querySelector(".mt-r").textContent="";say(`${it[1]}, cuesta ${numPal(it[2])} pesos`,true)}
ACT.mttnew=(v,b)=>mttNew(b.closest(".mt"));
ACT.mttpay=(v,b)=>{const w=b.closest(".mt"),p=+w.dataset.p;if(!p)return mttNew(w);let pd=+w.dataset.paid;if(pd>=p)return;pd+=+v;w.dataset.paid=pd;w.querySelector(".mtt-tot").textContent=`Has pagado: $${pd}`;const r=w.querySelector(".mt-r");
 if(pd===p){r.textContent="¡Exacto! Pagaste justo, sin cambio. ⭐";say("¡Pagaste justo!",true);mtOk()}else if(pd>p){r.textContent=`Pagaste $${pd}. Tu cambio: $${pd}−$${p} = $${pd-p}.`;say(`Te deben dar ${numPal(pd-p)} pesos de cambio`,true);mtOk()}else say(numPal(pd),true)};

/* --- 5. Fracciones --- */
function fracSvg(n,on){const R=88;let s="";for(let i=0;i<n;i++){const a0=(i/n)*2*Math.PI-Math.PI/2,a1=((i+1)/n)*2*Math.PI-Math.PI/2;const p=a=>[100+R*Math.cos(a),100+R*Math.sin(a)];const[x0,y0]=p(a0),[x1,y1]=p(a1);
 s+=n===1?`<circle cx="100" cy="100" r="${R}" class="fr-s${on[i]?" on":""}" data-act="mtfs" data-v="${i}"/>`:`<path d="M100 100L${x0.toFixed(1)} ${y0.toFixed(1)}A${R} ${R} 0 ${n<2?1:0} 1 ${x1.toFixed(1)} ${y1.toFixed(1)}z" class="fr-s${on[i]?" on":""}" data-act="mtfs" data-v="${i}"/>`}
 return`<svg viewBox="0 0 200 200" class="mtf-svg" role="img" aria-label="Tortilla partida">${s}<circle cx="100" cy="100" r="${R}" fill="none" stroke="#c9952f" stroke-width="5"/></svg>`}
const FRN={2:"medios",3:"tercios",4:"cuartos",5:"quintos",6:"sextos",8:"octavos"},FR1={2:"un medio",3:"un tercio",4:"un cuarto",5:"un quinto",6:"un sexto",8:"un octavo"};
VX.mtfrac=v=>{const ns=v.n||[2,4];return mtBox("mtf",`<p class="note">Elige en cuántas partes iguales partir la tortilla y toca las partes para tomarlas.</p><div class="row center mtf-n">${ns.map((n,i)=>`<button class="adj-b${i?"":" on"}" data-act="mtfn" data-v="${n}">${n} partes</button>`).join("")}</div><div class="mtf-w" data-n="${ns[0]}" data-on="">${fracSvg(ns[0],[])}</div><div class="mtf-r" aria-live="polite">${mtfTxt(ns[0],0)}</div>`)};
function mtfTxt(n,k){return`<span class="frc"><sup>${k}</sup><sub>${n}</sub></span> <span>${k===0?"Toca una parte":k===n?`¡La tortilla entera! ${n}/${n} = 1`:k===1?FR1[n]:numPal(k)+" "+FRN[n]}</span>`}
ACT.mtfn=(v,b)=>{const box=b.closest(".mt");box.querySelectorAll(".mtf-n .adj-b").forEach(x=>x.classList.toggle("on",x===b));const w=box.querySelector(".mtf-w");w.dataset.n=v;w.dataset.on="";w.innerHTML=fracSvg(+v,[]);box.querySelector(".mtf-r").innerHTML=mtfTxt(+v,0);say(`${v} partes iguales: ${FRN[v]}`,true)};
ACT.mtfs=(v,b)=>{const box=b.closest(".mt"),w=box.querySelector(".mtf-w"),n=+w.dataset.n;const on=Array.from({length:n},(_,i)=>w.dataset.on.split(",").includes(String(i)));on[+v]=!on[+v];w.dataset.on=on.map((x,i)=>x?i:"").filter(x=>x!=="").join(",");w.innerHTML=fracSvg(n,on);const k=on.filter(Boolean).length;box.querySelector(".mtf-r").innerHTML=mtfTxt(n,k);say(k===1?FR1[n]:k===n?"la tortilla entera":numPal(k)+" "+FRN[n],true)};

/* --- 6. La recta numérica con la ranita --- */
VX.mtrecta=v=>{const mx=v.max||20;return mtBox("mtl",`<div class="mtl-w" data-mx="${mx}" data-p="${v.start||0}" data-s="${v.start||0}" data-h=""><div class="mtl-svg">${rectaSvg(mx,v.start||0,[])}</div></div><p class="mt-r mtl-eq" aria-live="polite">La ranita está en el ${v.start||0}. ¡Hazla saltar!</p><div class="row center">${mtBtn("mtlj","1","＋1")}${mtBtn("mtlj","2","＋2")}${mtBtn("mtlj","5","＋5")}${mtBtn("mtlj","-1","−1")}${mtBtn("mtlj","-2","−2")}${mtBtn("mtlj","0","🔄 Empezar",1)}</div>`)};
function rectaSvg(mx,p,hist){const W=340,x=i=>14+i*(W-28)/mx;let s=`<path d="M8 60H${W-6}" stroke="#1b2a44" stroke-width="3"/>`;for(let i=0;i<=mx;i++)s+=`<path d="M${x(i)} 52v16" stroke="#1b2a44" stroke-width="${i%5?1.5:3}"/>${mx<=20||i%5===0?`<text x="${x(i)}" y="88" text-anchor="middle" font-size="${mx<=20?12:11}" font-weight="700" fill="#1b2a44">${i}</text>`:""}`;
 let a=null;hist.forEach(([f,t])=>{const x0=x(f),x1=x(t),h=Math.min(40,10+Math.abs(t-f)*6);s+=`<path d="M${x0} 50Q${(x0+x1)/2} ${50-h} ${x1} 50" stroke="${t>f?"#3fa34d":"#e5484d"}" stroke-width="2.5" fill="none" marker-end="url(#ah)"/>`});
 return`<svg viewBox="0 0 ${W} 100" class="mtl-s" role="img" aria-label="Recta numérica"><defs><marker id="ah" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="#1b2a44"/></marker></defs>${s}<text x="${x(p)}" y="46" text-anchor="middle" font-size="24">🐸</text></svg>`}
ACT.mtlj=(v,b)=>{const box=b.closest(".mt"),w=box.querySelector(".mtl-w"),mx=+w.dataset.mx;let p=+w.dataset.p;const d=+v;let hist=w.dataset.h?JSON.parse(w.dataset.h):[];const eq=box.querySelector(".mtl-eq");
 if(d===0){p=mtRnd(0,Math.floor(mx/2));hist=[];w.dataset.s=p;eq.textContent=`La ranita está en el ${p}.`}else{const np=p+d;if(np<0||np>mx){eq.textContent="¡Uy! La ranita no puede saltar fuera de la recta.";return}hist.push([p,np]);p=np;
  const s=+(w.dataset.s||0),tot=p-s;eq.textContent=hist.length===1?`${s} ${d>0?"+":"−"} ${Math.abs(d)} = ${p}`:`${s} ${tot>=0?"+":"−"} ${Math.abs(tot)} = ${p}  (${hist.length} saltos)`}
 w.dataset.p=p;w.dataset.h=JSON.stringify(hist);w.querySelector(".mtl-svg").innerHTML=rectaSvg(mx,p,hist);say(numPal(p),true)};

/* --- 7. Arreglos (multiplicación) --- */
VX.mtarreglo=v=>mtBox("mta",`<div class="mta-w" data-r="3" data-c="4">${mtaDraw(3,4)}</div><div class="row center">${mtBtn("mtaset","r-1","− fila")}${mtBtn("mtaset","r1","＋ fila")}${mtBtn("mtaset","c-1","− columna")}${mtBtn("mtaset","c1","＋ columna")}${mtBtn("mtaset","x","🔄 Girar",1)}</div>`);
function mtaDraw(r,c){return`<div class="mta-g" style="grid-template-columns:repeat(${c},1fr)">${Array.from({length:r*c},()=>`<span>🍪</span>`).join("")}</div><p class="mta-eq"><b>${r} × ${c} = ${r*c}</b></p><p class="mta-s">${r} filas de ${c}: ${Array(r).fill(c).join(" + ")} = ${r*c}</p>`}
ACT.mtaset=(v,b)=>{const w=b.closest(".mt").querySelector(".mta-w");let r=+w.dataset.r,c=+w.dataset.c;if(v==="x")[r,c]=[c,r];else if(v[0]==="r")r=Math.max(1,Math.min(10,r+ +v.slice(1)));else c=Math.max(1,Math.min(10,c+ +v.slice(1)));w.dataset.r=r;w.dataset.c=c;w.innerHTML=mtaDraw(r,c);say(`${numPal(r)} por ${numPal(c)}, igual a ${numPal(r*c)}`,true)};

/* --- 8. Comparar con el cocodrilo --- */
VX.mtcomparar=v=>mtBox("mtx",`<div class="mtx-w" data-mx="${v.max||20}"><span class="mtx-a">?</span><span class="mtx-s">🐊</span><span class="mtx-b">?</span></div><p class="note">El cocodrilo siempre abre la boca hacia el número mayor.</p><div class="row center">${mtBtn("mtxs","<","&lt; menor que")}${mtBtn("mtxs","=","= igual")}${mtBtn("mtxs",">","&gt; mayor que")}</div><p class="mt-r" aria-live="polite"></p><div class="row center">${mtBtn("mtxnew","","🔄 Otros números",1)}</div>`);
function mtxNew(box){const w=box.querySelector(".mtx-w"),mx=+w.dataset.mx;const a=mtRnd(0,mx),b=Math.random()<.15?a:mtRnd(0,mx);w.dataset.a=a;w.dataset.b=b;w.querySelector(".mtx-a").textContent=a.toLocaleString("es-MX");w.querySelector(".mtx-b").textContent=b.toLocaleString("es-MX");w.querySelector(".mtx-s").textContent="🐊";box.querySelector(".mt-r").textContent=""}
ACT.mtxnew=(v,b)=>mtxNew(b.closest(".mt"));
ACT.mtxs=(v,b)=>{const box=b.closest(".mt"),w=box.querySelector(".mtx-w");if(w.dataset.a===undefined)return mtxNew(box);const a=+w.dataset.a,c=+w.dataset.b,ok=a<c?"<":a>c?">":"=",r=box.querySelector(".mt-r");
 const pal={"<":"es menor que",">":"es mayor que","=":"es igual a"};if(v===ok){w.querySelector(".mtx-s").textContent=v;r.textContent=`¡Muy bien! ${a} ${pal[v]} ${c}.`;say(`¡Muy bien! ${numPal(a)} ${pal[v]} ${numPal(c)}`,true);mtOk();setTimeout(()=>{if(box.isConnected)mtxNew(box)},2200)}else{r.textContent="Fíjate otra vez: ¿cuál es más grande?";say("Fíjate otra vez",true)}};

/* --- 9. Repartir --- */
VX.mtrepartir=v=>mtBox("mtp",`<div class="mtp-w" data-n="${v.n||12}" data-k="${v.k||3}"></div><div class="row center">${mtBtn("mtpset","n-1","− dulces")}${mtBtn("mtpset","n1","＋ dulces")}${mtBtn("mtpset","k-1","− niños")}${mtBtn("mtpset","k1","＋ niños")}</div><div class="row center">${mtBtn("mtpgo","","🍬 ¡Repartir!",1)}</div><p class="mt-r" aria-live="polite"></p>`);
function mtpDraw(w,dealt){const n=+w.dataset.n,k=+w.dataset.k,q=Math.floor(dealt/k),ex=dealt%k;w.innerHTML=`<div class="mtp-pile">${"🍬".repeat(n-dealt)||"&nbsp;"}</div><div class="mtp-kids">${Array.from({length:k},(_,i)=>`<div class="mtp-k"><span>${["🧒","👧","👦","🧒🏽","👧🏽","👦🏽"][i%6]}</span><div>${"🍬".repeat(q+(i<ex?1:0))}</div></div>`).join("")}</div>`}
ACT.mtpset=(v,b)=>{const box=b.closest(".mt"),w=box.querySelector(".mtp-w");let n=+w.dataset.n,k=+w.dataset.k;if(v[0]==="n")n=Math.max(1,Math.min(30,n+ +v.slice(1)));else k=Math.max(1,Math.min(6,k+ +v.slice(1)));w.dataset.n=n;w.dataset.k=k;clearInterval(box._t);mtpDraw(w,0);box.querySelector(".mt-r").textContent=`${n} dulces para ${k} niños.`};
ACT.mtpgo=(v,b)=>{const box=b.closest(".mt"),w=box.querySelector(".mtp-w"),n=+w.dataset.n,k=+w.dataset.k,tot=n-n%k;let d=0;clearInterval(box._t);mtpDraw(w,0);box._t=setInterval(()=>{if(!box.isConnected||d>=tot){clearInterval(box._t);if(box.isConnected){const q=n/k|0,r=n%k;const m=`${n} ÷ ${k} = ${q}${r?`, y sobran ${r}`:""}. A cada niño le tocan ${q}.`;box.querySelector(".mt-r").textContent=m;say(m.replace("÷","entre"),true);mtOk()}return}d++;mtpDraw(w,d)},Math.max(90,1600/n))};

/* --- 10. Área y perímetro --- */
VX.mtarea=v=>mtBox("mtz",`<p class="note">Toca los cuadritos para pintar una figura. Cada cuadrito mide 1 cm por lado.</p><div class="mtz-g">${Array.from({length:48},(_,i)=>`<button class="mtz-c" data-act="mtzc" data-v="${i}"></button>`).join("")}</div><p class="mt-r mtz-r" aria-live="polite">Área: 0 cm² · Perímetro: 0 cm</p><div class="row center">${mtBtn("mtzclr","","🧹 Borrar")}</div>`);
function mtzCalc(box){const on=[...box.querySelectorAll(".mtz-c")].map(c=>c.classList.contains("on"));const C=8,R=6,at=(r,c)=>r>=0&&r<R&&c>=0&&c<C&&on[r*C+c];let a=0,p=0;for(let r=0;r<R;r++)for(let c=0;c<C;c++)if(at(r,c)){a++;p+=[[-1,0],[1,0],[0,-1],[0,1]].filter(([dr,dc])=>!at(r+dr,c+dc)).length}return[a,p]}
ACT.mtzc=(v,b)=>{b.classList.toggle("on");const box=b.closest(".mt"),[a,p]=mtzCalc(box);box.querySelector(".mtz-r").innerHTML=`<b>Área:</b> ${a} cm² (cuadritos de adentro) · <b>Perímetro:</b> ${p} cm (la orilla)`;};
ACT.mtzclr=(v,b)=>{const box=b.closest(".mt");box.querySelectorAll(".mtz-c.on").forEach(c=>c.classList.remove("on"));box.querySelector(".mtz-r").textContent="Área: 0 cm² · Perímetro: 0 cm"};

/* --- 11. Encuesta y gráfica --- */
const ENC=[["🥭","Mango"],["🍌","Plátano"],["🍎","Manzana"],["🍉","Sandía"]];
VX.mtgrafica=v=>mtBox("mtg",`<p class="note">${v.pict?"Pregunta a tu familia su fruta favorita y toca para agregar cada voto: se forma un pictograma.":"Haz una encuesta: ¿cuál es su fruta favorita? Toca para agregar votos y mira cómo crecen las barras."}</p><div class="mtg-w" data-p="${v.pict?1:0}" data-v="0,0,0,0">${mtgDraw([0,0,0,0],v.pict)}</div><div class="row center">${ENC.map(([e,n],i)=>`<button class="adj-b" data-act="mtgv" data-v="${i}">${e} +1</button>`).join("")}</div><p class="mt-r" aria-live="polite"></p><div class="row center">${mtBtn("mtgclr","","🧹 Nueva encuesta")}</div>`);
function mtgDraw(vs,pict){const mx=Math.max(5,...vs);return pict?`<div class="mtg-pict">${ENC.map(([e,n],i)=>`<div><b>${n}</b><span>${e.repeat(vs[i])||"—"}</span><i>${vs[i]}</i></div>`).join("")}</div>`:`<div class="mtg-bars">${ENC.map(([e,n],i)=>`<div class="mtg-b"><i>${vs[i]}</i><span style="height:${vs[i]/mx*140}px;--cc:${["#f58a2a","#e5b400","#e5484d","#3fa34d"][i]}"></span><b>${e}</b></div>`).join("")}</div>`}
ACT.mtgv=(v,b)=>{const box=b.closest(".mt"),w=box.querySelector(".mtg-w"),vs=w.dataset.v.split(",").map(Number);vs[+v]++;w.dataset.v=vs.join(",");w.innerHTML=mtgDraw(vs,+w.dataset.p);const mx=Math.max(...vs),win=ENC.filter((_,i)=>vs[i]===mx).map(x=>x[1]);const tot=vs.reduce((a,b)=>a+b,0);
 box.querySelector(".mt-r").textContent=`Total: ${tot} votos. ${win.length>1?"Empate: "+win.join(" y "):"Va ganando: "+win[0]}.`;say(ENC[+v][1]+", "+numPal(vs[+v]),true)};
ACT.mtgclr=(v,b)=>{const box=b.closest(".mt"),w=box.querySelector(".mtg-w");w.dataset.v="0,0,0,0";w.innerHTML=mtgDraw([0,0,0,0],+w.dataset.p);box.querySelector(".mt-r").textContent=""};

/* --- 12. Tabla del 1 al 100 --- */
VX.mtcien=v=>mtBox("mth",`<div class="mth-g">${Array.from({length:100},(_,i)=>`<span>${i+1}</span>`).join("")}</div><div class="row center">${[2,3,4,5,10].map(k=>mtBtn("mthk",k,`de ${k} en ${k}`,k===(v.k||0))).join("")}${mtBtn("mthk","0","🧹")}</div><p class="mt-r" aria-live="polite">Elige cómo contar y mira el patrón.</p>`);
ACT.mthk=(v,b)=>{const box=b.closest(".mt"),k=+v;box.querySelectorAll(".mth-g span").forEach((s,i)=>s.classList.toggle("on",k&&(i+1)%k===0));if(!k){box.querySelector(".mt-r").textContent="";return}const seq=Array.from({length:Math.min(10,100/k|0)},(_,i)=>(i+1)*k);box.querySelector(".mt-r").textContent=`De ${k} en ${k}: ${seq.join(", ")}…`;say(seq.map(numPal).join(", "),true)};

/* --- Lámina de figuras y cuerpos --- */
LAM.figuras={hint:"Toca cada figura o cuerpo para conocer sus lados, vértices y caras.",parts:{
 triangulo:["Triángulo","Figura plana con 3 lados y 3 vértices (esquinas).","#ffb3a7"],
 cuadrado:["Cuadrado","Figura plana con 4 lados iguales y 4 ángulos rectos.","#a8d8ff"],
 rectangulo:["Rectángulo","4 lados: dos largos y dos cortos, iguales de dos en dos. Tiene 4 ángulos rectos.","#b9e6a8"],
 circulo:["Círculo","Figura plana redonda: no tiene lados ni vértices.","#ffe08a"],
 cubo:["Cubo","Cuerpo con 6 caras cuadradas, 12 aristas y 8 vértices. ¡Como un dado!","#a8d8ff"],
 esfera:["Esfera","Cuerpo redondo, como una pelota. Rueda en cualquier dirección.","#ffe08a"],
 cilindro:["Cilindro","Tiene 2 caras planas en forma de círculo y una cara curva. Como una lata o una vela.","#e3d4ff"],
 cono:["Cono","Una base en forma de círculo y una punta. Como un cucurucho de nieve.","#ffb3a7"],
 piramide:["Pirámide","Tiene una base y caras en forma de triángulo que se juntan en una punta. ¡Como en Teotihuacán!","#f6d55c"]},
 svg:()=>`<svg class="plantdx lamsvg" viewBox="0 0 360 300" role="img" aria-label="Figuras y cuerpos geométricos"><rect width="360" height="300" fill="#fffaf0"/><text x="12" y="22" font-size="13" font-weight="800" fill="#7a5a3a">FIGURAS PLANAS</text><text x="12" y="150" font-size="13" font-weight="800" fill="#7a5a3a">CUERPOS GEOMÉTRICOS</text>
<g data-p="triangulo" data-act="lampart" data-v="figuras:triangulo"><path d="M46 36l36 74H10z" fill="#ffb3a7" stroke="#c4583a" stroke-width="3"/></g>
<g data-p="cuadrado" data-act="lampart" data-v="figuras:cuadrado"><rect x="100" y="40" width="68" height="68" fill="#a8d8ff" stroke="#3d6fd6" stroke-width="3"/></g>
<g data-p="rectangulo" data-act="lampart" data-v="figuras:rectangulo"><rect x="186" y="54" width="92" height="52" fill="#b9e6a8" stroke="#3fa34d" stroke-width="3"/></g>
<g data-p="circulo" data-act="lampart" data-v="figuras:circulo"><circle cx="318" cy="76" r="32" fill="#ffe08a" stroke="#e5b400" stroke-width="3"/></g>
<g data-p="cubo" data-act="lampart" data-v="figuras:cubo"><path d="M14 196h56v56H14z" fill="#a8d8ff" stroke="#3d6fd6" stroke-width="2.5"/><path d="M14 196l18-18h56l-18 18z" fill="#cfe9ff" stroke="#3d6fd6" stroke-width="2.5"/><path d="M70 196l18-18v56l-18 18z" fill="#7cb9ef" stroke="#3d6fd6" stroke-width="2.5"/></g>
<g data-p="esfera" data-act="lampart" data-v="figuras:esfera"><defs><radialGradient id="esf" cx=".35" cy=".35"><stop offset="0" stop-color="#fff6c4"/><stop offset="1" stop-color="#e5b400"/></radialGradient></defs><circle cx="134" cy="216" r="34" fill="url(#esf)"/><ellipse cx="134" cy="216" rx="34" ry="10" fill="none" stroke="#c99a00" stroke-dasharray="4 3"/></g>
<g data-p="cilindro" data-act="lampart" data-v="figuras:cilindro"><path d="M182 186v60a26 9 0 0 0 52 0v-60" fill="#e3d4ff" stroke="#8f5ad6" stroke-width="2.5"/><ellipse cx="208" cy="186" rx="26" ry="9" fill="#f0e8ff" stroke="#8f5ad6" stroke-width="2.5"/></g>
<g data-p="cono" data-act="lampart" data-v="figuras:cono"><path d="M272 172l-26 76a26 9 0 0 0 52 0z" fill="#ffb3a7" stroke="#c4583a" stroke-width="2.5"/><ellipse cx="272" cy="248" rx="26" ry="9" fill="#ffc9c0" stroke="#c4583a" stroke-width="2.5"/></g>
<g data-p="piramide" data-act="lampart" data-v="figuras:piramide"><path d="M330 176l-26 70h40z" fill="#f6d55c" stroke="#b58a00" stroke-width="2.5"/><path d="M330 176l14 70 12-12z" fill="#d9b23a" stroke="#b58a00" stroke-width="2.5"/></g>
<g font-size="11" font-weight="700" fill="#5a6a80" text-anchor="middle" pointer-events="none"><text x="46" y="128">triángulo</text><text x="134" y="128">cuadrado</text><text x="232" y="128">rectángulo</text><text x="318" y="128">círculo</text><text x="50" y="276">cubo</text><text x="134" y="276">esfera</text><text x="208" y="276">cilindro</text><text x="272" y="276">cono</text><text x="328" y="276">pirámide</text></g></svg>`};

{const _vt=visText;visText=function(v){if(v&&/^mt/.test(v.t||""))return"";return _vt(v)}}
/* al dibujar: preparar los juegos que necesitan arrancar */
{const _ln=typeof learn==="function"?learn:null;if(_ln){learn=function(){const r=_ln.apply(this,arguments);try{document.querySelectorAll(".mtc").forEach(w=>{if(!w.dataset.n)mtcFill(w)});document.querySelectorAll(".mtb").forEach(w=>mtbDraw(w));document.querySelectorAll(".mtt").forEach(w=>{if(!w.dataset.p)mttNew(w)});document.querySelectorAll(".mtx").forEach(w=>{if(w.querySelector(".mtx-w").dataset.a===undefined)mtxNew(w)});document.querySelectorAll(".mtp-w").forEach(w=>mtpDraw(w,0))}catch(e){}return r}}}

/* =========== Colocar en las lecciones de Matemáticas =========== */
const MATIMG={
m1:{"Contar es decir un número por cada cosa":{t:"mtcontar"}},
m2:{"Diez y algo más":{t:"mtbloques",max:20}},
m3:{"El cocodrilo hambriento":{t:"mtcomparar",max:20},"El más grande es el que sirve":"lastSermon"},
m4:{"El número que sigue":{t:"mtrecta",max:20}},
m5:{"Contar hacia adelante":{t:"mtrecta",max:20},"Sumar como el niño de los panes":"panes"},
m6:{"Contar hacia atrás":{t:"mtrecta",max:20,start:10},"La oveja perdida":"buenpastor"},
m7:{"Restar en la recta":{t:"mtrecta",max:20,start:15}},
m8:{"Problemas que ayudan":"mercado"},
m9:{"Una decena son diez":{t:"mtbloques",max:99}},
m10:{"Los números hasta el 100":{t:"mtcien"}},
m11:{"Con los bloques":{t:"mtbloques",max:99},"Cien ovejas":"ovejas"},
m12:{"Figuras planas":"L:figuras"},
m13:{"David y Goliat":"honore"},
m14:{"El reloj":{t:"mtreloj",step:30}},
m15:{"Pagar y recibir cambio":{t:"mttienda"}},
m16:{"Hacer una encuesta":{t:"mtgrafica",pict:1}},
m17:{"Cinco panes y dos peces":"panes","El arca de Noé":"animalesArca"},
"2m1":{"Centenas, decenas y unidades":{t:"mtbloques",max:999},"Cien ovejas y una perdida":"buenpastor"},
"2m2":{"Primero las centenas":{t:"mtcomparar",max:999}},
"2m5":{"La multiplicación de los panes":"panes"},
"2m6":{"Los arreglos":{t:"mtarreglo"}},
"2m7":{"La tabla del 2":{t:"mtcien",k:2}},
"2m8":{"El orden no importa":{t:"mtarreglo"}},
"2m9":{"Repartir":{t:"mtrepartir"}},
"2m10":{"Partes iguales":{t:"mtfrac",n:[2,4]}},
"2m11":{"El arca de Noé":"arcaT"},
"2m13":{"Y cuarto, y media, menos cuarto":{t:"mtreloj",step:15}},
"2m14":{"Contar dinero":{t:"mttienda",bills:1}},
"2m15":{"Lados y vértices":"L:figuras","La simetría":"monarca"},
"2m16":{"La gráfica de barras":{t:"mtgrafica"}},
"3m1":{"La tabla de valor posicional":{t:"mtbloques",max:9999}},
"3m2":{"Cifra por cifra":{t:"mtcomparar",max:9999}},
"3m4":{"Usa lo que ya sabes":{t:"mtarreglo"}},
"3m5":{"Las 99 ovejas":"ovejas"},
"3m7":{"¿Qué es dividir?":{t:"mtrepartir",n:17,k:4},"Panes que no se acaban":"panes"},
"3m8":{"Medios, tercios, cuartos, quintos, sextos, octavos":{t:"mtfrac",n:[2,3,4,5,6,8]}},
"3m9":{"El área":{t:"mtarea"}},
"3m10":{"Horas y minutos":{t:"mtreloj",step:5}},
"3m11":{"La cruz, perpendicular":"crucificado"},
"3m12":{"Tablas y gráficas":{t:"mtgrafica"},"Para Dios nada es imposible":"anunMurillo"}};
function placeVisuals(map){const find=id=>{for(const s of SUBJ)for(const u of s.units)for(const l of u.ls)if(l.id===id)return l};const src=f=>/^https?:/.test(f)?f:WM(f,800);
 for(const[id,pages]of Object.entries(map)){const l=find(id);if(!l)continue;
  for(const[h,spec]of Object.entries(pages)){if(h==="_hero"){if(IM[spec]){const[f,cr]=IM[spec];l.learn.filter(p=>p.info).forEach(p=>{p.v.img={src:/^https?:/.test(f)?f:WM(f,640),cr}})}continue}
   const pg=l.learn.find(p=>p.h===h&&!p.info);if(!pg)continue;let nv,big=false;
   if(typeof spec==="object"){nv=spec;big=true}else if(spec.startsWith("L:")){nv={t:"lam",id:spec.slice(2)};big=true}else{if(!IM[spec])continue;const[f,cr]=IM[spec];nv={t:"photo",src:src(f),alt:h,cap:"",credit:cr,art:!/foto|fotografía|Unsplash|Commons|NASA/.test(cr)}}
   const old=pg.v;if(!old||old.t==="emo"||old.t==="art"||(old.t==="photo"&&!big))pg.v=nv;else if(old.t==="combo")old.x.unshift(nv);else pg.v={t:"combo",x:[nv,old]}}}}
placeVisuals(MATIMG);
