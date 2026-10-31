/* ========= Visuales y generadores para 3.º grado ========= */
GRADES.push([3,"3.º"]);
VX.area=v=>{let s=`<svg viewBox="0 0 ${v.c*24+8} ${v.r*24+8}" width="${Math.min(320,v.c*30+10)}" class="areag" role="img" aria-label="Rectángulo de ${v.r} por ${v.c} cuadritos">`;for(let y=0;y<v.r;y++)for(let x=0;x<v.c;x++)s+=`<rect x="${4+x*24}" y="${4+y*24}" width="24" height="24"/>`;return s+"</svg>"};
VX.rectp=v=>`<svg viewBox="0 0 220 150" width="260" class="rectp" role="img" aria-label="Rectángulo de ${v.w} por ${v.h}"><rect x="40" y="25" width="140" height="90" rx="3"/><text x="110" y="16" text-anchor="middle">${v.w} ${v.u||"cm"}</text><text x="110" y="140" text-anchor="middle">${v.w} ${v.u||"cm"}</text><text x="32" y="75" text-anchor="end">${v.h}</text><text x="188" y="75">${v.h}</text></svg>`;
VX.pvt=v=>{const d=String(v.n).padStart(4,"0").split("");return`<table class="vert pvt" aria-label="Tabla de valor posicional"><tr><th>UM</th><th>C</th><th>D</th><th>U</th></tr><tr>${d.map(x=>`<td>${x}</td>`).join("")}</tr></table>`};
VX.fracs=v=>`<div class="eq">${VX.frac({n:v.n1,k:v.k1,sh:"rect"})}<span class="op">${v.op||"y"}</span>${VX.frac({n:v.n2,k:v.k2,sh:"rect"})}</div>`;
function words4(n){if(n<1000)return words3(n);const m=Math.floor(n/1000),r=n%1000;return(m===1?"mil":words(m).replace(/uno$/,"un")+" mil")+(r?" "+words3(r):"")}
Object.assign(G,{
pv4:()=>{const n=rnd(1000,9999);const k=rnd(0,3),nm=["unidades de millar","centenas","decenas","unidades"][k];return C(`En el ${n}, ¿cuántas ${nm} hay?`,nOpts(+String(n)[k],0,9),{t:"pvt",n},"De izquierda a derecha: millares, centenas, decenas, unidades.")},
pv4w:()=>{const m=rnd(1,9),c=rnd(0,9),d=rnd(0,9),u=rnd(0,9);return N(`¿Qué número tiene ${m} millares, ${c} centenas, ${d} decenas y ${u} unidades?`,1000*m+100*c+10*d+u,null,"Escribe cada cifra en su lugar.")},
nname4:()=>{const n=rnd(1001,9999),o=nOptsW(n,1000,9999,[-1000,1000,-100,100,-10,10]);return Math.random()<.5?C(`¿Qué número es «${words4(n)}»?`,o):C(`¿Cómo se escribe con letras el ${n}?`,o.map(words4))},
cmp4:()=>{const a=rnd(1000,9999);let b=rnd(1000,9999);if(Math.random()<.5)b=+(String(a).slice(0,2)+String(rnd(10,99)));while(b===a)b=rnd(1000,9999);const big=Math.random()<.5;return C(`¿Cuál número es ${big?"mayor":"menor"}?`,[big?Math.max(a,b):Math.min(a,b),big?Math.min(a,b):Math.max(a,b)],null,"Compara cifra por cifra empezando por los millares.")},
round:()=>{const t=pick([10,100]),n=t===10?rnd(11,989):rnd(110,9890),r=Math.round(n/t)*t;return C(`Redondea ${n} a la ${t===10?"decena":"centena"} más cercana.`,[r,r+t,Math.max(0,r-t)].map(String).filter((x,i,a)=>a.indexOf(x)===i),null,t===10?"Mira las unidades: si son 5 o más, sube.":"Mira las decenas: si son 5 o más, sube.")},
add4:()=>{const a=rnd(120,780),b=rnd(110,999-a);return N(`${a} + ${b} = ?`,a+b,null,"Suma por columnas desde las unidades y no olvides lo que llevas.")},
sub4:()=>{const a=rnd(300,999),b=rnd(101,a-50);return N(`${a} − ${b} = ?`,a-b,null,"Resta por columnas; si no alcanza, pide prestado a la columna de la izquierda.")},
mult69:()=>{const a=pick([6,7,8,9]),b=rnd(1,10);return N(`${a} × ${b} = ?`,a*b,b<=6&&a<=8?{t:"arr",r:b,c:a,s:"star"}:null,`Usa lo que sabes: ${a} × ${b} = ${a} × ${b-1} + ${a}.`)},
multAll:()=>{const a=rnd(2,10),b=rnd(2,10);return N(`${a} × ${b} = ?`,a*b,null,"Si no la recuerdas, suma grupos iguales.")},
mult2x1:()=>{const a=rnd(11,49),b=rnd(2,a<25?6:3);return N(`${a} × ${b} = ?`,a*b,{t:"vert",a,b,op:"×",hide:1},`Multiplica las unidades (${a%10} × ${b}) y luego las decenas (${Math.floor(a/10)*10} × ${b}); suma los resultados.`)},
div:()=>{const b=rnd(2,9),q=rnd(2,10);return N(`${b*q} ÷ ${b} = ?`,q,null,`¿Qué número multiplicado por ${b} da ${b*q}?`)},
divRem:()=>{const b=rnd(3,6),q=rnd(2,7),r=rnd(1,b-1),t=b*q+r,ob=pick(["estampas","canicas","dulces","velas"]);return N(`Reparte ${t} ${ob} entre ${b} niños en partes iguales. ¿Cuántas sobran?`,r,null,`A cada niño le tocan ${q}: ${b} × ${q} = ${b*q}. Lo demás sobra.`)},
fracCmp:()=>{const n=pick([4,6,8]),a=rnd(1,n-1);let b=rnd(1,n-1);while(b===a)b=rnd(1,n-1);const big=a>b?a:b,sm=a>b?b:a,nm={4:"cuartos",6:"sextos",8:"octavos"}[n];return C(`¿Qué es mayor: ${a} ${nm} o ${b} ${nm}?`,[`${big} ${nm}`,`${sm} ${nm}`,"Son iguales"],{t:"fracs",n1:n,k1:a,n2:n,k2:b},"Con partes del mismo tamaño, gana el que tiene más partes.")},
fracAdd:()=>{const n=pick([4,5,6,8]),a=rnd(1,n-2),b=rnd(1,n-1-a),nm={4:"cuartos",5:"quintos",6:"sextos",8:"octavos"}[n];return N(`${a}/${n} + ${b}/${n} = ¿cuántos ${nm}?`,a+b,{t:"fracs",n1:n,k1:a,n2:n,k2:b,op:"+"},"Suma las partes de arriba; el tamaño de las partes no cambia.")},
fracOf:()=>{const d=pick([2,3,4,5]),q=rnd(2,8),n=d*q;return N(`¿Cuánto es 1/${d} de ${n}?`,q,null,`Reparte ${n} en ${d} partes iguales.`)},
perim:()=>{const w=rnd(3,15),h=rnd(2,10);return N("¿Cuál es el perímetro del rectángulo (en cm)?",2*w+2*h,{t:"rectp",w,h},"El perímetro es la suma de todos los lados.")},
area:()=>{const r=rnd(2,6),c=rnd(2,9);return N("¿Cuántos cuadritos cubren el rectángulo? Esa es su área.",r*c,{t:"area",r,c},`Filas × columnas: ${r} × ${c}.`)},
mins:()=>{const h=rnd(7,17),m=pick([0,15,30]),d=pick([15,30,45,60,90]),e=h*60+m+d,f=x=>`${Math.floor(x/60)}:${String(x%60).padStart(2,"0")}`;return C(`La catequesis empieza a las ${f(h*60+m)} y dura ${d} minutos. ¿A qué hora termina?`,[f(e),f(e+15),f(e-15)],null,"Suma los minutos; 60 minutos forman una hora.")},
grams:()=>{const k=rnd(1,5);return N(`¿Cuántos gramos son ${k} kilogramos?`,1000*k,null,"1 kilogramo = 1000 gramos.")},
prob3:()=>{const a1=pick(NAMES);const t=rnd(0,6);
 if(t===0){const n=rnd(3,9),p=rnd(12,48);return N(`Para la kermés de la parroquia se hicieron ${n} charolas con ${p} tamales cada una. ¿Cuántos tamales son?`,n*p,null,"Grupos iguales: multiplica.")}
 if(t===1){const b=rnd(3,8),q=rnd(4,12);return N(`${a1} reparte ${b*q} estampas de santos entre ${b} amigos por igual. ¿Cuántas recibe cada uno?`,q,null,"Repartir en partes iguales es dividir.")}
 if(t===2){const a=rnd(250,600),b=rnd(120,380);return N(`En la colecta del sábado se juntaron $${a} y el domingo $${b} para el comedor de los pobres. ¿Cuánto se juntó?`,a+b,null,"Juntar: suma.")}
 if(t===3){const a=rnd(400,950),b=rnd(150,a-100);return N(`La parroquia necesita $${a} para pintar la capilla. Ya tiene $${b}. ¿Cuánto falta?`,a-b,null,"¿Cuánto falta?: resta.")}
 if(t===4){const r=rnd(4,9),c=rnd(6,9);return N(`En el templo hay ${r} filas de bancas y en cada fila caben ${c} personas. ¿Cuántas personas caben?`,r*c,{t:"arr",r:Math.min(r,6),c,s:"star"},"Filas × lugares.")}
 if(t===5){const w=rnd(5,12),h=rnd(3,8);return N(`El huerto de la escuela mide ${w} m de largo y ${h} m de ancho. ¿Cuántos metros de malla se necesitan para rodearlo?`,2*w+2*h,{t:"rectp",w,h,u:"m"},"Rodear es el perímetro: suma todos los lados.")}
 const p=pick([6,7,8,9]),n=rnd(3,9);return N(`Un rosario de madera cuesta $${p*10}. ¿Cuánto cuestan ${n} rosarios?`,p*10*n,null,`${p*10} × ${n}: multiplica ${p} × ${n} y agrega un cero.`)}
});
