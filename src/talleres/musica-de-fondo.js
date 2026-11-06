/* ========= Música de fondo (opcional) ========= */
const MUSICA=[
 ["grieg-manana.mp3","La mañana (Peer Gynt)","Grieg","Czech National Symphony Orchestra · Musopen · dominio público"],
 ["mozart-minueto.mp3","Minueto (Sonata n.º 11)","Mozart","dominio público"],
 ["vivaldi-primavera-1.mp3","La Primavera","Vivaldi","Musopen · dominio público"],
 ["chopin-nocturno-9-2.mp3","Nocturno Op. 9 n.º 2","Chopin","Aya Higuchi · dominio público"],
 ["beethoven-claro-de-luna-1.mp3","Claro de luna","Beethoven","dominio público"],
 ["pachelbel-canon-giga.mp3","Canon y Giga en Re","Pachelbel","Chamber Music Society of Lincoln Center (Isabella Stewart Gardner Museum) · licencia Creative Commons, sin modificar"],
 ["chaikovski-mirlitones.mp3","Danza de los mirlitones","Chaikovski","dominio público"],
 ["chopin-nocturno-9-1.mp3","Nocturno Op. 9 n.º 1","Chopin","dominio público"],
 ["chaikovski-marcha.mp3","Marcha de El Cascanueces","Chaikovski","dominio público"],
 ["chaikovski-danza-china.mp3","Danza china","Chaikovski","dominio público"]];
const MUS={a:null,ducked:false,tick:null,
 vol(){return S&&S.musVol!=null?S.musVol:.3},
 el(){if(!this.a&&typeof Audio!=="undefined"){this.a=new Audio();this.a.preload="none";this.a.addEventListener("ended",()=>this.next());this.a.addEventListener("error",()=>{this.err=(this.err||0)+1;if(this.err<3)this.next()})}return this.a},
 idx(){return S&&S.musIdx!=null?S.musIdx%MUSICA.length:Math.floor(Math.random()*MUSICA.length)},
 load(i){const a=this.el();if(!a)return;S.musIdx=i;try{save()}catch(e){}a.src="music/"+MUSICA[i][0];a.volume=this.ducked?this.vol()*.2:this.vol()},
 play(){const a=this.el();if(!a)return;if(!a.src)this.load(this.idx());a.volume=this.ducked?this.vol()*.2:this.vol();const p=a.play();if(p&&p.catch)p.catch(()=>{});this.ui()},
 pause(){if(this.a)this.a.pause();this.ui()},
 next(){this.load((this.idx()+1)%MUSICA.length);if(S.music)this.play();else this.ui()},
 set(on){S.music=on;try{save()}catch(e){}on?this.play():this.pause();try{drawTop()}catch(e){}},
 duck(){if(!this.a||this.a.paused)return;this.ducked=true;this.a.volume=this.vol()*.2;clearInterval(this.tick);this.tick=setInterval(()=>{let sp=false;try{sp=speechSynthesis.speaking||speechSynthesis.pending||(typeof VN!=="undefined"&&VN.playing)}catch(e){}if(!sp){clearInterval(this.tick);this.ducked=false;if(this.a)this.a.volume=this.vol()}},350)},
 now(){const t=MUSICA[S&&S.musIdx!=null?S.musIdx%MUSICA.length:0];return t},
 ui(){const b=document.getElementById("musbox");if(b)b.innerHTML=musBoxInner()}};
/* la música baja mientras habla la voz */
{const _s=say;say=function(){MUS.duck();setTimeout(()=>MUS.duck(),120);return _s.apply(this,arguments)}}
if(typeof sayEn==="function"){const _e=sayEn;sayEn=function(){MUS.duck();setTimeout(()=>MUS.duck(),120);return _e.apply(this,arguments)}}
/* botón en la barra de arriba */
{const _dt=drawTop;drawTop=function(){_dt.apply(this,arguments);try{const v=document.querySelector('#top [data-act="voice"]');if(v&&!document.querySelector('#top [data-act="musbox"]'))v.insertAdjacentHTML("beforebegin",`<button class="pill mus-pill${S.music?" on":""}" data-act="musbox" aria-pressed="${!!S.music}" aria-label="${S.music?"Música encendida":"Música apagada"}"><span class="mus-ic" aria-hidden="true">${S.music?"🎵":"🔇"}</span><span class="vtxt">Música</span></button>`)}catch(e){}}}
function musBoxInner(){const t=MUS.now(),on=!!S.music;return`<div class="mus-h"><b>🎵 Música de fondo</b><button class="mus-x" data-act="musclose" aria-label="Cerrar">✕</button></div>
<button class="mus-sw${on?" on":""}" data-act="mustog" aria-pressed="${on}"><span></span>${on?"Encendida":"Apagada"}</button>
<p class="mus-now">${on&&MUS.a&&!MUS.a.paused?"Sonando":"Siguiente"}: <b>${esc(t[1])}</b> · ${esc(t[2])}</p>
<label class="mus-vol">🔈<input type="range" min="0" max="100" value="${Math.round(MUS.vol()*100)}" id="musvol" aria-label="Volumen de la música">🔊</label>
<div class="row center"><button class="btn ghost" data-act="musnext" style="--sc:var(--rel)">⏭️ Otra canción</button></div>
<p class="note">La música baja sola cuando habla la voz. Necesita internet para sonar.</p>`}
ACT.musbox=()=>{let b=document.getElementById("musbox");if(b){b.remove();return}document.body.insertAdjacentHTML("beforeend",`<div id="musbox" class="musbox" role="dialog" aria-label="Música de fondo">${musBoxInner()}</div>`)};
ACT.musclose=()=>{const b=document.getElementById("musbox");if(b)b.remove()};
ACT.mustog=()=>{MUS.set(!S.music);MUS.ui()};
ACT.musnext=()=>{MUS.next();if(!S.music)MUS.set(true);MUS.ui()};
if(typeof document!=="undefined"){
 document.addEventListener("input",e=>{if(e.target.id==="musvol"){S.musVol=+e.target.value/100;if(MUS.a)MUS.a.volume=MUS.ducked?S.musVol*.2:S.musVol;try{save()}catch(x){}}});
 document.addEventListener("visibilitychange",()=>{if(!MUS.a)return;if(document.hidden)MUS.a.pause();else if(S.music)MUS.play()});
 /* si la música quedó encendida, empieza al primer toque (los navegadores no dejan sonar sin tocar antes) */
 const first=()=>{document.removeEventListener("pointerdown",first,true);if(S&&S.music&&(!MUS.a||MUS.a.paused))setTimeout(()=>MUS.play(),50)};document.addEventListener("pointerdown",first,true);
 document.addEventListener("click",e=>{const b=document.getElementById("musbox");if(b&&!b.contains(e.target)&&!e.target.closest('[data-act="musbox"]'))b.remove()});}
/* créditos de la música en la Zona de papás */
function musicaPanel(){return`<section class="panel"><h2>🎵 Música de fondo</h2><label class="chk"><input type="checkbox" id="optmus"${S.music?" checked":""}> Tocar música clásica suave mientras el niño estudia</label><p class="note">También se enciende o apaga con el botón «Música» de arriba. Obras de dominio público; grabaciones de Musopen y otras fuentes libres.</p><details><summary>Créditos de las grabaciones</summary><ul class="mus-cred">${MUSICA.map(([,n,c,cr])=>`<li><b>${n}</b> — ${c}. ${cr}.</li>`).join("")}</ul></details></section>`}
if(typeof document!=="undefined")document.addEventListener("change",e=>{if(e.target.id==="optmus")MUS.set(e.target.checked)});
