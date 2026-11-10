/* ========= Modelos v2: pictogramas inteligentes y diagramas de apoyo =========
   El visual «emo» (antes: emojis sueltos) ahora se interpreta: agrupa los dibujos repetidos y los cuenta,
   compone las operaciones con sus signos, escribe las fracciones «de pie» y, cuando reconoce un patrón
   matemático, dibuja el modelo que lo explica (recta numérica, operación en columna, comparación cifra
   por cifra, barras de fracción, cuadrícula de 100, plano cartesiano, tabla de valor posicional).
   En la práctica y los exámenes no se muestran conteos ni saltos calculados, para no regalar respuestas. */
const PG_EM=/(?:\p{Regional_Indicator}{2}|[#*0-9]\uFE0F?\u20E3|\p{Extended_Pictographic}(?:\uFE0F|[\u{1F3FB}-\u{1F3FF}])?(?:\u200D\p{Extended_Pictographic}\uFE0F?)*)/gu;
const PG_OP=/\s*(➡️|➡|→|⇒|=|≈|≠|>|<|\+|−|×|÷|\s-\s|\s:\s)\s*/u;
const PG_OPC={"=":"eq","≈":"eq","≠":"eq","+":"pl","−":"mi","-":"mi","×":"ti","÷":"di",">":"cm","<":"cm",":":"cm","→":"ar"};
const PG_UF={"¼":"1/4","½":"1/2","¾":"3/4","⅓":"1/3","⅔":"2/3","⅕":"1/5","⅖":"2/5","⅗":"3/5","⅘":"4/5","⅙":"1/6","⅚":"5/6","⅛":"1/8","⅜":"3/8","⅝":"5/8","⅞":"7/8"};
const PG_PV={U:["Unidades","×1","mat"],D:["Decenas","×10","esp"],C:["Centenas","×100","cie"],UM:["Unidades de millar","×1 000","civ"],DM:["Decenas de millar","×10 000","his"],CM:["Centenas de millar","×100 000","com"],UMi:["Unidades de millón","×1 000 000","ing"]};
const pgFr=(a,b)=>`<span class="fr"><i>${a}</i><i>${b}</i></span>`;
function pgNum(s){s=String(s).trim().replace(/[¼½¾⅓⅔⅕⅖⅗⅘⅙⅚⅛⅜⅝⅞]/g,c=>PG_UF[c]).replace(/−/g,"-");let m=s.match(/^(-?\d+)\s+(\d+)\/(\d+)$/);if(m)return+m[1]+m[2]/m[3];m=s.match(/^(-?\d+)\/(\d+)$/);if(m)return m[1]/m[2];const t=s.replace(/\s/g,"");return/^-?\d+(\.\d+)?$/.test(t)?+t:NaN}
function pgTokens(s){const out=[];let last=0,m;PG_EM.lastIndex=0;while((m=PG_EM.exec(s))){const gap=s.slice(last,m.index);if(gap.trim())out.push({t:gap.trim()});out.push({e:m[0],sp:last>0&&/\s/.test(gap)&&!gap.trim()});last=m.index+m[0].length}const t=s.slice(last).trim();if(t)out.push({t});return out}
function pgText(t){t=t.replace(/[¼½¾⅓⅔⅕⅖⅗⅘⅙⅚⅛⅜⅝⅞]/g,c=>" "+PG_UF[c]).trim();const num=/\d/.test(t)&&!/[a-záéíóúñ]{4,}/i.test(t);let h;
 const w=t.match(/^([^\/\d][^\/]{0,16}?)\s+\/\s+([^\/]{1,18})$/);if(w)h=pgFr(esc(w[1]),esc(w[2]));
 else h=esc(t).replace(/(\d+)\/(\d+)/g,(_,a,b)=>pgFr(a,b));
 return`<span class="pg-w${num?" num":""}">${h}</span>`}
function pgPile(e,n,count){const c=n<=5?n:n<=10?5:n<=18?6:8;return`<span class="pg-pile${n>10?" s":n>3?" m":""}" style="--c:${c}">${`<span class="pg-e">${e}</span>`.repeat(n)}${count?`<b class="pg-n">${n}</b>`:""}</span>`}
function pgTerm(s,count){const tk=pgTokens(s),grp=tk.some((k,i)=>k.e&&i>0&&tk[i-1].e===k.e&&!k.sp);let h="";for(let i=0;i<tk.length;i++){const k=tk[i];if(k.e){let n=1;while(tk[i+1]&&tk[i+1].e===k.e&&!(grp&&tk[i+1].sp)){n++;i++}h+=n>1?pgPile(k.e,n,count):`<span class="pg-e solo">${k.e}</span>`}else h+=pgText(k.t)}return`<span class="pg-t">${h}</span>`}
function pgExpr(s,count){const p=s.replace(/➕/g," + ").replace(/➖/g," − ").replace(/✖️?/g," × ").replace(/➗/g," ÷ ").replace(/🟰/g," = ").split(PG_OP);let h="";p.forEach((x,i)=>{if(i%2){const o=x.trim().replace(/^(➡️|➡|⇒)$/,"→");h+=`<span class="pg-op ${PG_OPC[o]||"eq"}">${o==="→"?`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12h15M13 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>`:o}</span>`}else if(x.trim())h+=pgTerm(x,count)});return h}
/* Recta numérica con los valores de una serie (y sus saltos, si son iguales) */
function pgLine(vals,labs){const n=vals.length,W=340,L=26,R=W-26,a=vals[0],b=vals[n-1],X=v=>L+(v-a)/(b-a)*(R-L),d=vals[1]-vals[0],even=vals.every((v,i)=>i===0||Math.abs(v-vals[i-1]-d)<1e-9),plain=labs.every(l=>!/[\/¼½¾]/.test(l)),neg=vals.some(v=>v<0);
 let tight=false;for(let i=1;i<n;i++)if(X(vals[i])-X(vals[i-1])<30)tight=true;const y=even&&n<=13?50:30,H=y+(tight?52:38);
 let s=`<svg class="pg-line" viewBox="0 0 ${W} ${H}" role="img" aria-label="Recta numérica: ${labs.join(", ")}"><path d="M8 ${y}H${W-8}" class="ax"/><path d="M${W-14} ${y-5}l7 5-7 5M14 ${y-5}l-7 5 7 5" class="ax" fill="none"/>`;
 if(even&&n<=13)for(let i=1;i<n;i++){const x0=X(vals[i-1]),x1=X(vals[i]),mx=(x0+x1)/2,h=Math.min(26,(x1-x0)*.55);s+=`<path d="M${x0.toFixed(1)} ${y-6}Q${mx.toFixed(1)} ${(y-6-h*1.5).toFixed(1)} ${x1.toFixed(1)} ${y-6}" class="jump"/>`;if(plain&&x1-x0>=26){const dd=Math.round(d*1000)/1000;s+=`<text x="${mx.toFixed(1)}" y="${(y-12-h*.75).toFixed(1)}" class="jl">+${String(dd).replace(/\B(?=(\d{3})+(?!\d))/g," ")}</text>`}}
 vals.forEach((v,i)=>{const x=X(v).toFixed(1),lo=tight&&i%2,cl=neg?(v<0?"neg":v===0?"zero":"pos"):"";s+=`<path d="M${x} ${y-6}V${y+6}" class="ax"/><circle cx="${x}" cy="${y}" r="5.500" class="pt ${cl}"/>${lo?`<path d="M${x} ${y+8}V${y+20}" class="ld"/>`:""}<text x="${x}" y="${y+(lo?36:23)}" class="nl ${cl}">${esc(labs[i])}</text>`});
 return s+"</svg>"}
/* Operación en columna (enteros o decimales), alineada por valor posicional */
function pgCol(a,op,b,c){const sp=s=>{s=String(s).replace(/\s/g,"");const[i,d=""]=s.split(".");return[i,d]},A=sp(a),B=sp(b),C=sp(c),mi=Math.max(A[0].length,B[0].length,C[0].length),md=Math.max(A[1].length,B[1].length,C[1].length),COL=["mat","esp","cie","civ","his","com","ing"],DCOL=["geo","ora","tra"];
 const row=(P,sign,cls)=>{let h=`<span class="cs">${sign||""}</span>`;const I=P[0].padStart(mi," ");for(let k=0;k<mi;k++){const ch=I[k],pos=mi-1-k;h+=`<span class="cd${pos%3===2&&k>0?" th":""}" style="--k:var(--${COL[pos%7]})">${ch===" "?"":ch}</span>`}
  if(md){h+=`<span class="cp">.</span>`;for(let k=0;k<md;k++){const ch=P[1][k];h+=`<span class="cd${ch==null?" pad":""}" style="--k:var(--${DCOL[k%3]})">${ch==null?"0":ch}</span>`}}return`<div class="cr ${cls||""}">${h}</div>`};
 return`<div class="pg-col" role="img" aria-label="${esc(a)} ${op} ${esc(b)} = ${esc(c)}">${row(A)}${row(B,op)}<div class="cl"></div>${row(C,"","res")}</div>`}
/* Comparación cifra por cifra: resalta la primera cifra distinta */
function pgCmp(a,sym,b){const sp=s=>{s=String(s).replace(/\s/g,"");const[i,d=""]=s.split(".");return[i,d]},A=sp(a),B=sp(b),mi=Math.max(A[0].length,B[0].length),md=Math.max(A[1].length,B[1].length),f=P=>P[0].padStart(mi," ")+(md?"."+P[1].padEnd(md,"0"):""),sa=f(A),sb=f(B);let k=-1;for(let i=0;i<sa.length;i++)if(sa[i]!==sb[i]){k=i;break}
 const row=(s,P)=>{let h="";const il=mi;for(let i=0;i<s.length;i++){const ch=s[i],pos=il-1-i,pad=md&&i>il&&i-il>P[1].length;h+=ch==="."?`<span class="cp">.</span>`:`<span class="cd${i===k?" hit":""}${i<k?" same":""}${pad?" pad":""}${i<il&&pos%3===2&&i>0?" th":""}">${ch===" "?"":ch}</span>`}return`<div class="cr">${h}</div>`};
 return`<div class="pg-cmp${sa.length+sb.length>9?" long":""}" role="img" aria-label="${esc(a)} ${sym==="≈"?"aproximadamente":sym===">"?"es mayor que":"es menor que"} ${esc(b)}">${row(sa,A)}<span class="pg-op cm big">${sym}</span>${row(sb,B)}</div>`}
/* Barra de fracción */
function pgBar(a,b){let h="";for(let i=0;i<b;i++)h+=`<i class="${i<a?"on":""}"></i>`;return`<span class="pg-bar" style="--b:${b}">${h}</span>`}
function pgFracs(s){const p=s.split(PG_OP);let h="";p.forEach((x,i)=>{if(i%2){const o=x.trim().replace(/^(➡️|➡|⇒)$/,"→");h+=`<span class="pg-op ${PG_OPC[o]||"eq"}">${o==="→"?"→":o}</span>`}else{const t=x.trim().replace(/[¼½¾⅓⅔⅕⅖⅗⅘⅙⅚⅛⅜⅝⅞]/g,c=>PG_UF[c]),m=t.match(/^(\d+)\/(\d+)$/);h+=m?`<span class="pg-fb">${pgFr(m[1],m[2])}${pgBar(+m[1],+m[2])}</span>`:pgTerm(x,false)}});return h}
/* Cuadrícula de 100 para porcentajes */
function pgCien(n){let h="";for(let i=0;i<100;i++)h+=`<i class="${i<n?"on":""}"></i>`;return`<span class="pg-cien" role="img" aria-label="${n} de 100 cuadritos">${h}</span>`}
/* Plano cartesiano con un punto de ejemplo */
function pgPlano(px,py,q4){const W=230,H=q4?230:210,n=q4?5:6,u=q4?20:28,ox=q4?W/2:34,oy=q4?H/2:H-30,X=x=>ox+x*u,Y=y=>oy-y*u,lo=q4?-n:0;let s=`<svg class="pg-plano" viewBox="0 0 ${W} ${H}" role="img" aria-label="Plano cartesiano con el punto (${px}, ${py})">`;
 for(let i=lo;i<=n;i++){s+=`<path d="M${X(i)} ${Y(lo)}V${Y(n)}M${X(lo)} ${Y(i)}H${X(n)}" class="gr"/>`;if(i===0&&q4)continue;s+=`<text x="${X(i)}" y="${oy+15}" class="tk">${i}</text>`;if(i!==0)s+=`<text x="${ox-8}" y="${Y(i)+4}" class="tk" text-anchor="end">${i}</text>`}
 s+=`<path d="M${X(lo)-4} ${oy}H${X(n)+10}M${ox} ${Y(lo)+4}V${Y(n)-10}" class="ax"/><path d="M${X(n)+4} ${oy-5}l7 5-7 5M${ox-5} ${Y(n)-4}l5-7 5 7" class="ax" fill="none"/><text x="${X(n)+8}" y="${oy+17}" class="axl">x</text><text x="${ox+10}" y="${Y(n)-6}" class="axl">y</text>`;
 s+=`<path d="M${ox} ${Y(py)}H${X(px)}" class="gd"/><path d="M${ox} ${oy}H${X(px)}" class="mvx"/><path d="M${X(px)} ${oy}V${Y(py)}" class="mvy"/><circle cx="${X(px)}" cy="${Y(py)}" r="6.500" class="pt"/><text x="${X(px)+(px<0?-10:10)}" y="${Y(py)+(py<0?18:-10)}" class="pl" text-anchor="${px<0?"end":"start"}">(${px}, ${py})</text></svg>`;return s}
/* Tabla de valor posicional */
function pgPV(keys){return`<div class="pg-pv" role="img" aria-label="Valor posicional: ${keys.map(k=>PG_PV[k][0]).join(", ")}">${keys.map(k=>`<span class="pvc" style="--k:var(--${PG_PV[k][2]});--ks:var(--${PG_PV[k][2]}-s)"><b>${k}</b><small>${PG_PV[k][0]}</small><i>${PG_PV[k][1]}</i></span>`).join("")}</div>`}
/* Diagrama de barra para una ecuación x + a = b */
function pgTape(x,a,b){return`<div class="pg-tape" role="img" aria-label="${x} más ${a} es igual a ${b}"><div class="tp-tot"><span>${b}</span></div><div class="tp-row"><span class="tp-x">${x}</span><span class="tp-a">${a}</span></div></div>`}
function pgRows(rows,count){const tk=rows.map(r=>pgTokens(r)),mx=Math.max(...tk.map(t=>t.length));return`<div class="pg-pairs" style="--c:${Math.min(mx,10)}">${tk.map(t=>`<div class="pg-pr">${t.map(k=>k.e?`<span class="pg-e">${k.e}</span>`:pgText(k.t)).join("")}${count&&t.length>1&&t.every(k=>k.e)?`<b class="pg-n">${t.length}</b>`:""}</div>`).join("")}</div>`}
function emoV(v){const x=String(v.x==null?"":v.x).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&").trim(),learn=MODE!=="prac";let body="";
 try{const rows=x.split(/\s*<br\s*\/?>\s*/i);if(rows.length>1)return`<div class="pg" aria-hidden="true">${pgRows(rows,learn)}</div>`;
  const groups=x.split(/\s+[·|]\s+/);
  if(learn){let m;
   if(/^\(\s*x\s*,\s*y\s*\)$/.test(x))body=pgPlano(3,5,false);
   else if(groups.length>=2&&groups.every(g=>PG_PV[g.trim()]))body=pgPV(groups.map(g=>g.trim()));
   else if(groups.length>=3&&groups.every(g=>!isNaN(pgNum(g)))&&groups.every((g,i)=>i===0||pgNum(g)>pgNum(groups[i-1]))){const vs=groups.map(pgNum),sp=vs[vs.length-1]-vs[0];body=vs.every((v,i)=>i===0||(v-vs[i-1])/sp*288>=20)?pgLine(vs,groups.map(g=>g.trim())):`<div class="pg-row">${pgExpr(groups.map(g=>g.trim()).join(" < "),false)}</div>`}
   else if((m=x.match(/^(?:[✔✓]️?\s*)?(\d[\d\s]*(?:\.\d+)?)\s*([+−])\s*(\d[\d\s]*(?:\.\d+)?)\s*=\s*(\d[\d\s]*(?:\.\d+)?)$/))&&(/\./.test(x)||m[1].replace(/\s/g,"").length>=3))body=pgCol(m[1].trim(),m[2],m[3].trim(),m[4].trim());
   else if((m=x.match(/^(\d[\d\s]*(?:\.\d+)?)\s*([><≈])\s*(\d[\d\s]*(?:\.\d+)?)$/)))body=pgCmp(m[1].trim(),m[2],m[3].trim());
   else if((m=x.match(/^([a-zñ])\s*\+\s*(\d+)\s*=\s*(\d+)$/i)))body=`<div class="pg-row">${pgExpr(x,false)}</div>${pgTape(m[1],m[2],m[3])}`;
   else if((m=x.match(/^(\d{1,3})\s?%\s*=/))&&+m[1]<=100)body=`<div class="pg-row">${pgExpr(x,false)}</div>${pgCien(+m[1])}`;
   else{const fr=x.replace(/[¼½¾⅓⅔⅕⅖⅗⅘⅙⅚⅛⅜⅝⅞]/g,c=>PG_UF[c]).match(/\d+\/\d+/g);if(fr&&groups.length===1&&!/[+−×÷]/.test(x.replace(/×\s*\d+\s*(?=→)/,""))&&fr.every(f=>{const[a,b]=f.split("/").map(Number);return b>=2&&b<=20&&a<=b}))body=`<div class="pg-row fb">${pgFracs(x)}</div>`}}
  if(!body)body=groups.length>1?`<div class="pg-row gs">${groups.map(g=>`<span class="pg-g">${pgExpr(g,learn)}</span>`).join("")}</div>`:`<div class="pg-row">${pgExpr(x,learn)}</div>`}
 catch(e){body=`<div class="pg-row"><span class="pg-t">${esc(x)}</span></div>`}
 return`<div class="pg" aria-hidden="true">${body}</div>`}
function stepsV(v){const s0=v.start||1;return`<ol class="steps st2" start="${s0}">${v.x.map((t,i)=>`<li><span class="sn" aria-hidden="true">${s0+i}</span><span class="stx">${t}</span></li>`).join("")}</ol>`}

/* ---------- Geometría: figuras con sus partes rotuladas ---------- */
VX.geo2=v=>{const k=v.k,T=(x,y,t,c,a)=>`<text x="${x}" y="${y}" class="${c||"lb"}"${a?` text-anchor="${a}"`:""}>${t}</text>`;let s="",W=280,H=180,al="";
 if(k==="ang"){const d=v.deg||50,r=d*Math.PI/180,vx=44,vy=146,L=190,ex=vx+L*Math.cos(r),ey=vy-L*Math.sin(r),ar=54;al=`Ángulo de ${d} grados con sus dos lados y su vértice`;
  s=`<path d="M${vx} ${vy}H${vx+L+10}M${vx} ${vy}L${ex.toFixed(1)} ${ey.toFixed(1)}" class="st"/><path d="M${vx+ar} ${vy}A${ar} ${ar} 0 0 0 ${(vx+ar*Math.cos(r)).toFixed(1)} ${(vy-ar*Math.sin(r)).toFixed(1)}" class="arc"/><circle cx="${vx}" cy="${vy}" r="6" class="dot"/>${T(vx+ar+12,vy-18,d+"°","big")}${T(vx-6,vy+22,"vértice","lb")}${T(vx+L-36,vy+22,"lado","lb")}${T((vx+ex)/2-44,(vy+ey)/2-8,"lado","lb")}${T(vx+86,vy-58,"abertura","lb sc")}`}
 else if(k==="trans"){const cx=140,cy=150,R=112,d=v.deg||60;H=176;al=`Transportador que marca ${d} grados`;s=`<path d="M${cx-R} ${cy}A${R} ${R} 0 0 1 ${cx+R} ${cy}Z" class="fill"/><path d="M${cx-R-8} ${cy}H${cx+R+8}" class="st"/>`;
  for(let a=0;a<=180;a+=10){const q=a*Math.PI/180,big=a%30===0,r1=R-(big?16:9);s+=`<path d="M${(cx+R*Math.cos(q)).toFixed(1)} ${(cy-R*Math.sin(q)).toFixed(1)}L${(cx+r1*Math.cos(q)).toFixed(1)} ${(cy-r1*Math.sin(q)).toFixed(1)}" class="tk"/>`;if(big&&a!==d)s+=T((cx+(R-30)*Math.cos(q)).toFixed(1),(cy-(R-30)*Math.sin(q)+(a%180===0?-7:4)).toFixed(1),a,"tn","middle")}
  const q=d*Math.PI/180;s+=`<path d="M${cx} ${cy}L${(cx+(R+12)*Math.cos(q)).toFixed(1)} ${(cy-(R+12)*Math.sin(q)).toFixed(1)}" class="ray"/><path d="M${cx+34} ${cy}A34 34 0 0 0 ${(cx+34*Math.cos(q)).toFixed(1)} ${(cy-34*Math.sin(q)).toFixed(1)}" class="arc"/><circle cx="${cx}" cy="${cy}" r="5" class="dot"/>${T((cx+(R+16)*Math.cos(q)+6).toFixed(1),(cy-(R+16)*Math.sin(q)+2).toFixed(1),d+"°","big")}`}
 else if(k==="alt"){al="Triángulo con su base y su altura";s=`<path d="M34 150L246 150L170 30Z" class="fill st"/><path d="M170 30V150" class="ray dash"/><path d="M170 138h12v12" class="tk" fill="none"/>${T(140,170,"base","lb","middle")}${T(178,96,"altura","lb sc")}<circle cx="170" cy="30" r="5" class="dot"/>`}
 else if(k==="circ"){const cx=140,cy=92,R=74;H=184;al="Círculo con su centro, su radio y su diámetro";s=`<circle cx="${cx}" cy="${cy}" r="${R}" class="fill st"/><path d="M${cx-R*.707} ${cy+R*.707}L${cx+R*.707} ${cy-R*.707}" class="ray2"/><path d="M${cx} ${cy}H${cx+R}" class="ray"/><circle cx="${cx}" cy="${cy}" r="5" class="dot"/>${T(cx+R/2,cy+18,"radio","lb sc","middle")}${T(cx-52,cy+16,"diámetro","lb b2","middle")}${T(cx-4,cy-10,"centro","lb","end")}${T(cx,cy+R+20,"circunferencia: el borde","lb","middle")}`}
 else if(k==="caja"){H=176;al="Prisma rectangular con su largo, su ancho y su altura";s=`<path d="M40 64H190V146H40Z" class="fill st"/><path d="M40 64L84 30H234L190 64Z" class="fill2 st"/><path d="M190 64L234 30V112L190 146Z" class="fill3 st"/>${T(115,166,"largo","lb","middle")}${T(232,140,"ancho","lb")}${T(34,108,"alto","lb","end")}`}
 else if(k==="red"){W=300;H=176;al="Un cubo y su desarrollo plano de seis cuadrados";const q=36,ox=150,oy=16,sq=(i,j,c)=>`<rect x="${ox+i*q}" y="${oy+j*q}" width="${q}" height="${q}" class="${c||"fill"} st"/>`;
  s=`<path d="M22 78H74V130H22Z" class="fill st"/><path d="M22 78L42 60H94L74 78Z" class="fill2 st"/><path d="M74 78L94 60V112L74 130Z" class="fill3 st"/><path d="M104 96h28M124 88l9 8-9 8" class="tk" fill="none"/>${sq(1,0)}${sq(0,1)}${sq(1,1,"fill2")}${sq(2,1)}${sq(3,1)}${sq(1,2)}${sq(1,3)}${T(58,154,"cubo","lb","middle")}${T(ox+2*q,oy+4*q+16,"desarrollo plano","lb","middle")}`.replace(sq(1,3),"")+""}
 else if(k==="plano4")return`<div class="pg">${pgPlano(v.x==null?-3:v.x,v.y==null?2:v.y,true)}</div>`;
 return`<div class="pg"><svg class="geo2" viewBox="0 0 ${W} ${H}" role="img" aria-label="${al}">${s}</svg></div>`};
/* Lecciones que cambian su dibujo de apoyo por un modelo geométrico */
const MODELFIX={"4m17#0":{t:"geo2",k:"ang",deg:50},"5m23#1":{t:"geo2",k:"trans",deg:60},"5m24#1":{t:"geo2",k:"alt"},"5m25#1":{t:"geo2",k:"circ"},"5m29#0":{t:"geo2",k:"caja"},"6m11#0":{t:"geo2",k:"caja"},"6m9#0":{t:"geo2",k:"plano4"},"4m20#1":{t:"geo2",k:"red"}};
function applyModelFix(){SUBJ.forEach(s=>allLessons(s).forEach(l=>l.learn.forEach((pg,i)=>{const f=MODELFIX[l.id+"#"+i];if(f&&pg.v&&pg.v.t==="emo")pg.v=f})))}
