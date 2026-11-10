/* ========= Interfaz v2: remates que deben ir al final (iconos, colores y pestaña activa) ========= */
/* ---------- Iconos de materias (40×40, un solo color) ---------- */
Object.assign(SICON,{
mat:`<svg viewBox="0 0 40 40"><g fill="none" stroke="currentColor" stroke-width="3.600" stroke-linecap="round"><path d="M12 6.500v11M6.500 12h11M22.500 12h11M8 24.500l8 8M16 24.500l-8 8M22.500 28.500h11"/></g><circle cx="28" cy="23.300" r="2" fill="currentColor"/><circle cx="28" cy="33.700" r="2" fill="currentColor"/></svg>`,
esp:`<svg viewBox="0 0 40 40"><text x="20" y="28.500" text-anchor="middle" font-family="Grandstander,sans-serif" font-weight="800" font-size="23" fill="currentColor">Aa</text></svg>`,
cie:`<svg viewBox="0 0 40 40"><path d="M20 35V19" stroke="currentColor" stroke-width="3.400" stroke-linecap="round" fill="none"/><path d="M19 24C10 24 5 18.500 5 10c9 0 14 5.500 14 14zM21 19c0-8 4.500-13 14-13c0 8-4.500 13-14 13z" fill="currentColor"/></svg>`,
his:`<svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="14" fill="none" stroke="currentColor" stroke-width="3.200"/><path d="M20 6c-7 8-7 20 0 28M20 6c7 8 7 20 0 28M6.500 20h27" stroke="currentColor" stroke-width="2.600" fill="none"/></svg>`,
hist:`<svg viewBox="0 0 40 40"><path d="M4 14L20 4l16 10v2.500H4zM7 19h5v12H7zM17.500 19h5v12h-5zM28 19h5v12h-5zM4 33h32v3.500H4z" fill="currentColor"/></svg>`,
geo:`<svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="14" fill="none" stroke="currentColor" stroke-width="3.200"/><path d="M20 6c-7 8-7 20 0 28M20 6c7 8 7 20 0 28M6.500 20h27" stroke="currentColor" stroke-width="2.600" fill="none"/></svg>`,
civ:`<svg viewBox="0 0 40 40"><path d="M20 34.500S5 25 5 14.500a7.500 7.500 0 0 1 15-2.200a7.500 7.500 0 0 1 15 2.200C35 25 20 34.500 20 34.500z" fill="currentColor"/></svg>`,
rel:`<svg viewBox="0 0 40 40"><path d="M16.800 4h6.400v9h9v6.400h-9V36h-6.400V19.400h-9V13h9z" fill="currentColor"/></svg>`,
com:`<svg viewBox="0 0 40 40"><circle cx="20" cy="8.500" r="6" fill="none" stroke="currentColor" stroke-width="2.800"/><path d="M9 16.500h22c0 9-5 13-11 13s-11-4-11-13zM18 29h4v4.500h-4zM12.500 37c0-3 3.500-4 7.500-4s7.500 1 7.500 4z" fill="currentColor"/></svg>`,
hig:`<svg viewBox="0 0 40 40"><path d="M18.600 2h2.800v3.200h3v2.800h-3v3.200L29 18v18h-5.500v-6.500a3.500 3.500 0 0 0-7 0V36H11V18l7.600-6.800V8h-3V5.200h3zM3 36V25l6-3.500V36zM37 36V25l-6-3.500V36z" fill="currentColor"/></svg>`,
sac:`<svg viewBox="0 0 40 40"><path d="M20 3c5 6.500 8 10.800 8 15a8 8 0 0 1-16 0c0-4.200 3-8.500 8-15z" fill="currentColor"/><path d="M6 31c4.500-3 9.500 3 14 0s9.500 3 14 0M6 37c4.500-3 9.500 3 14 0s9.500 3 14 0" stroke="currentColor" stroke-width="2.800" stroke-linecap="round" fill="none"/></svg>`,
ora:`<svg viewBox="0 0 40 40"><path d="M20 2.500c3.500 4.200 5 6.500 5 9a5 5 0 0 1-10 0c0-2.500 1.500-4.800 5-9z" fill="currentColor"/><path d="M14.500 19h11a2 2 0 0 1 2 2v13.500a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2V21a2 2 0 0 1 2-2z" fill="currentColor"/></svg>`,
ing:`<svg viewBox="0 0 40 40"><path d="M9 5h22a5 5 0 0 1 5 5v13a5 5 0 0 1-5 5H19l-8.500 7v-7H9a5 5 0 0 1-5-5V10a5 5 0 0 1 5-5z" fill="currentColor"/><text x="20" y="22" text-anchor="middle" font-family="Grandstander,sans-serif" font-weight="800" font-size="14.500" fill="var(--sicb,#fff)">Hi!</text></svg>`,
art:`<svg viewBox="0 0 40 40"><path fill-rule="evenodd" d="M20 4C10.600 4 3.500 10.600 3.500 19.500C3.500 28 10 35 18.500 35c2.400 0 3.600-1.700 3.200-3.600c-.5-2.600 1.200-4.400 3.800-4.400H29c4.300 0 7.500-3.400 7.500-8C36.500 10.300 29.300 4 20 4zM11.500 21a2.700 2.700 0 1 1 0-5.400a2.700 2.700 0 0 1 0 5.400zm5.500-7.500a2.700 2.700 0 1 1 0-5.400a2.700 2.700 0 0 1 0 5.400zm8.500 0a2.700 2.700 0 1 1 0-5.400a2.700 2.700 0 0 1 0 5.400zM30 20a2.700 2.700 0 1 1 0-5.400a2.700 2.700 0 0 1 0 5.400z" fill="currentColor"/></svg>`,
ef:`<svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="14.500" fill="none" stroke="currentColor" stroke-width="3.200"/><path d="M20 13l6.200 4.500-2.400 7.300h-7.600l-2.400-7.300z" fill="currentColor"/><path d="M20 13V6M26.200 17.500l6.300-2.500M23.800 24.800l4 6M16.200 24.800l-4 6M13.800 17.500l-6.300-2.500" stroke="currentColor" stroke-width="2.600" stroke-linecap="round"/></svg>`,
lec:`<svg viewBox="0 0 40 40"><path d="M18.500 10.500C14.500 8 9.500 7 4 7.500v22c5.500-.5 10.500.5 14.500 3zM21.500 10.500c4-2.500 9-3.500 14.500-3v22c-5.500-.5-10.500.5-14.500 3z" fill="currentColor"/></svg>`,
tra:`<svg viewBox="0 0 40 40"><path d="M27.500 4.500l8 8L15 33l-10.500 2.500L7 25zM24 8l8 8" fill="currentColor"/><path d="M5 35l2.200-9 6.800 6.800z" fill="var(--sicb,#fff)" opacity=".55"/></svg>`
});
function sicon(s){const k=s.ic||s.c||s.id;return`<span class="sic" aria-hidden="true">${SICON[k]||SICON[s.c]||SICON.lec}</span>`}

/* Geografía con su propio color e icono; Historia de 4.º a 6.º con su templo */
SUBJ.forEach(s=>{if(/geo$/.test(s.id)){s.col="geo";s.ic="geo"}else if(/^[4-6]his$/.test(s.id))s.ic="hist"});
/* Pestaña activa según la pantalla abierta */
{const tw=(k,f)=>function(){TAB=k;return f.apply(this,arguments)};
 if(typeof albumView==="function")albumView=tw("album",albumView);
 if(typeof planView==="function")planView=tw("parents",planView);
 if(typeof boleta==="function")boleta=tw("parents",boleta);
 if(typeof porta==="function")porta=tw("parents",porta);
 if(typeof litCal==="function")litCal=tw("fe",litCal);
 if(typeof gospelView==="function")gospelView=tw("fe",gospelView);
 if(typeof oracionView==="function")oracionView=tw("fe",oracionView);
 if(typeof examenView==="function")examenView=tw("fe",examenView);
 if(typeof trazoView==="function")trazoView=tw("retos",trazoView);
 if(typeof misionView==="function")misionView=tw("retos",misionView);
 subj=tw("home",subj)}
/* Zona de papás: cada sección es un acordeón (se recuerda cuáles están abiertas) */
const PFOLD=new Set(["Progreso"]);
function foldPanels(){document.querySelectorAll("#app > section.panel").forEach(sec=>{const h=sec.querySelector(":scope > h2");if(!h||h.querySelector(".pf-b"))return;const key=h.textContent.replace(" de "+me().name,"").replace(/[^\p{L}\p{N} ()]/gu,"").trim()||h.textContent.trim(),open=PFOLD.has(key);
 sec.classList.add("fold");sec.classList.toggle("open",open);h.innerHTML=`<button class="pf-b" data-act="pfold" data-v="${esc(key)}" aria-expanded="${open}"><span>${h.innerHTML}</span><span class="pf-ch" aria-hidden="true">${ui("fwd")}</span></button>`})}
ACT.pfold=(v,b)=>{const sec=b.closest(".panel");if(!sec)return;const open=!sec.classList.contains("open");sec.classList.toggle("open",open);b.setAttribute("aria-expanded",open);if(open)PFOLD.add(v);else PFOLD.delete(v)};
{const _pa=parents;parents=function(){TAB="parents";const r=_pa.apply(this,arguments);try{foldPanels()}catch(e){}return r}}
