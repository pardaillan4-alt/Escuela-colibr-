/* ========= Operaciones en columnas (como en papel) =========
   Columnas con color fijo: unidades azul, decenas rojo, centenas verde, millares morado.
   El resultado se escribe de derecha a izquierda, empezando por las unidades. */
const COLN=["U","D","C","UM","DM"],COLL=["unidades","decenas","centenas","unidades de millar","decenas de millar"];
function vres(v){return v.op==="+"?v.a+v.b:v.op==="×"?v.a*v.b:v.a-v.b}
function vcols(v){const la=String(v.a).length,lb=String(v.b).length;return Math.min(5,v.op==="−"?la:Math.max(la,lb)+1)}
function dig(x,i){const s=String(x);return i<s.length?s[s.length-1-i]:""}
function vertHTML(v,st){const n=vcols(v),r=vres(v),cols=[...Array(n).keys()].reverse(),live=!!st,blank=v.hide&&!live,carry=v.op!=="−"&&(v.hide||live);
 const cell=(i,inner,cls,act)=>`<td class="vc c${i}${cls?" "+cls:""}"${act?` data-act="${act}" data-v="${i}" role="button" tabindex="0"`:""}>${inner}</td>`;
 let h=`<table class="vert vcol" aria-label="Operación en columnas: ${v.a} ${v.op==="−"?"menos":v.op==="×"?"por":"más"} ${v.b}"><tr class="vh"><th></th>${cols.map(i=>`<th class="c${i}" title="${COLL[i]}">${COLN[i]}</th>`).join("")}</tr>`;
 if(carry)h+=`<tr class="vcar"><td></td>${cols.map(i=>i===0?"<td></td>":cell(i,live?(st.car[i]||""):"",live&&!st.done?"tap":"",live&&!st.done?"carry":"")).join("")}</tr>`;
 h+=`<tr class="va"><td></td>${cols.map(i=>{const d=dig(v.a,i);if(!live||v.op!=="−"||!d)return cell(i,d);const bo=st.bor[i],rec=st.bor[i+1];const shown=`${rec?`<sup class="v10">1</sup>`:""}<span class="${bo?"vstr":""}">${d}</span>${bo?`<sup class="vnew">${+d-1}</sup>`:""}`;return cell(i,shown,!st.done&&i>0?"tap":"",!st.done&&i>0?"borrow":"")}).join("")}</tr>`;
 h+=`<tr class="vb"><td class="vop">${v.op}</td>${cols.map(i=>cell(i,dig(v.b,i))).join("")}</tr>`;
 h+=`<tr class="vr"><td></td>${cols.map(i=>{if(!v.hide)return cell(i,dig(r,i));if(blank)return cell(i,"","vbox");if(st.done)return cell(i,dig(r,i),"vbox "+(st.ok?"ok":"rev"));return cell(i,st.cols[i]||"",`vbox${i===st.act?" act":""}`,"col")}).join("")}</tr></table>`;
 return h}
function colMode(ex){return ex&&ex.k==="n"&&ex.v&&ex.v.t==="vert"&&ex.v.hide}
function colInit(){X.col={cols:[],car:[],bor:[],act:0,done:false,ok:false}}
function colPanel(){const c=X.col,v=X.ex.v;c.done=X.done;c.ok=X.ok;
 return`<div class="numwrap colwrap">${vertHTML(v,c)}${X.done?"":`<p class="colhint">${X.msg2||`${c.act===0&&!c.cols[0]?"Escribe primero las":"Ahora escribe las"} <b class="c${c.act}">${COLL[c.act]}</b>. ${v.op==="−"?"Toca una cifra de arriba para pedir prestado.":"Toca el cuadrito de arriba para anotar lo que llevas."}`}</p><div class="keypad">${[1,2,3,4,5,6,7,8,9].map(k=>`<button class="key" data-act="key" data-v="${k}">${k}</button>`).join("")}<button class="key alt" data-act="key" data-v="del" aria-label="Borrar">Borrar</button><button class="key" data-act="key" data-v="0">0</button><button class="key go" data-act="check" aria-label="Comprobar">✓</button></div>`}</div>`}
function colKey(v){const c=X.col,n=vcols(X.ex.v);X.msg2="";
 if(v==="del"){if(c.cols[c.act])c.cols[c.act]="";else if(c.act>0){c.act--;c.cols[c.act]=""}}
 else{c.cols[c.act]=v;if(c.act<n-1)c.act++}
 SND.tap();drawEx()}
function colValue(){const c=X.col,n=vcols(X.ex.v);let s="",started=false,gap=false;
 for(let i=n-1;i>=0;i--){const d=c.cols[i]||"";if(d){if(!started)started=true;else if(gap)return null;s+=d}else if(started)gap=true}
 if(!started)return"";if(gap)return null;return s}
function colCheck(){const s=colValue();if(s===""){X.msg2="Escribe el resultado empezando por las unidades.";drawEx();return}if(s===null){X.msg2="Te falta una columna: llena todas, de derecha a izquierda.";drawEx();return}
 const ok=+s===+X.ex.a;if(!ok){X.col.cols=[];X.col.act=0}answer(ok)}
Object.assign(ACT,{
 col:v=>{X.col.act=+v;X.msg2="";drawEx()},
 carry:v=>{const c=X.col,i=+v,cur=+(c.car[i]||0);c.car[i]=cur>=9?"":String(cur+1);SND.tap();drawEx()},
 borrow:v=>{const c=X.col,i=+v;c.bor[i]=!c.bor[i];SND.tap();drawEx()}
});
if(typeof document!=="undefined")document.addEventListener("keydown",e=>{if(MODE!=="prac"||!X||X.done||!X.col||!colMode(X.ex))return;const n=vcols(X.ex.v);if(e.key==="ArrowLeft"&&X.col.act<n-1){X.col.act++;drawEx()}else if(e.key==="ArrowRight"&&X.col.act>0){X.col.act--;drawEx()}});
