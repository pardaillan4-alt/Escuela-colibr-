/* ========= 4.º grado: estructura y generadores de matemáticas ========= */
GRADES.push([4,"4.º"]);
[["4mat","mat","Matemáticas","Saberes y pensamiento científico"],["4esp","esp","Español","Lenguajes"],["4cie","cie","Ciencias Naturales","Saberes y pensamiento científico"],["4his","his","Historia y Geografía","Ética, naturaleza y sociedades"],["4civ","civ","Cívica y Valores","De lo humano y lo comunitario"],["4rel","rel","Religión Católica","Formación en la fe (complemento del hogar)"]].forEach(([id,c,n,campo])=>SUBJ.push({id,c,g:4,n,campo,d:"",units:[]}));
const fmt=n=>n.toLocaleString("es-MX").replace(/,/g,"\u00a0");
function opts3(a,spread,min){const s=new Set([a]);let k=0;while(s.size<3&&k<80){k++;const d=a+pick(spread);if(d>=(min??0))s.add(d)}return[...s]}
Object.assign(G,{
pv5:()=>{const n=rnd(10000,99999),k=rnd(0,4),nm=["decenas de millar","unidades de millar","centenas","decenas","unidades"][k];return C(`En el ${fmt(n)}, ¿cuántas ${nm} hay?`,nOpts(+String(n)[k],0,9),null,"De izquierda a derecha: DM, UM, C, D, U.")},
val5:()=>{const n=rnd(10000,99999),k=rnd(0,3),d=+String(n)[k]||1,v=d*10**(4-k);return C(`¿Cuánto vale la cifra ${String(n)[k]} en el ${fmt(n)}?`,[v,v/10,v*10].filter((x,i,a)=>a.indexOf(x)===i&&x>=1).map(fmt),null,"Su valor depende del lugar que ocupa.")},
cmp5:()=>{const a=rnd(10000,99999);let b=+(String(a).slice(0,2)+String(rnd(100,999)));if(b===a)b++;const big=Math.random()<.5;return C(`¿Cuál número es ${big?"mayor":"menor"}?`,[big?Math.max(a,b):Math.min(a,b),big?Math.min(a,b):Math.max(a,b)].map(fmt),null,"Compara cifra por cifra desde la izquierda.")},
rnd5:()=>{const t=pick([100,1000]),n=rnd(10100,98900),r=Math.round(n/t)*t;return C(`Redondea ${fmt(n)} a la ${t===100?"centena":"unidad de millar"} más cercana.`,[r,r+t,r-t].map(fmt),null,"Mira la cifra de la derecha: 5 o más, sube.")},
add5:()=>{const a=rnd(10000,60000),b=rnd(1000,35000);return N(`${fmt(a)} + ${fmt(b)} = ?`,a+b,null,"Suma por columnas desde las unidades.")},
sub5:()=>{const a=rnd(20000,99999),b=rnd(1000,a-1000);return N(`${fmt(a)} − ${fmt(b)} = ?`,a-b,null,"Resta por columnas; si no alcanza, pide prestado.")},
mul32:()=>{const a=rnd(102,899),b=rnd(12,49);return N(`${a} × ${b} = ?`,a*b,null,`Multiplica ${a} × ${b%10} y ${a} × ${b-b%10}, y suma.`)},
mul10:()=>{const a=rnd(12,999),b=pick([10,100,1000]);return N(`${a} × ${b} = ?`,a*b,null,`Agrega ${String(b).length-1} cero(s).`)},
div1:()=>{const d=rnd(3,9),q=rnd(21,199),r=rnd(0,d-1);return C(`${d*q+r} ÷ ${d} = ?`,[`${q} residuo ${r}`,`${q+1} residuo ${r}`,`${q} residuo ${(r+1)%d}`].filter((x,i,a)=>a.indexOf(x)===i),null,"Reparte cifra por cifra desde la izquierda.")},
div2:()=>{const d=rnd(11,25),q=rnd(4,40);return N(`${d*q} ÷ ${d} = ?`,q,null,`Busca qué número por ${d} da ${d*q}.`)},
mult:()=>{const n=rnd(3,12),m=n*rnd(2,9);return TF(`¿${m} es múltiplo de ${n}?`,true,null,`${m} ÷ ${n} = ${m/n} sin residuo.`)},
multn:()=>{const n=rnd(3,9);let m=n*rnd(2,9)+rnd(1,n-1);return C(`¿Cuál es múltiplo de ${n}?`,[n*rnd(3,12),m,m+n].map(String).filter((x,i,a)=>a.indexOf(x)===i),null,"Un múltiplo se obtiene multiplicando.")},
fsum:()=>{const k=pick([4,5,6,8,10,12]),a=rnd(1,k-2),b=rnd(1,k-a-1);return C(`${a}/${k} + ${b}/${k} = ?`,[`${a+b}/${k}`,`${a+b}/${2*k}`,`${a*b}/${k}`].filter((x,i,arr)=>arr.indexOf(x)===i),{t:"frac",n:a+b,k},"Mismo denominador: suma los numeradores.")},
fres:()=>{const k=pick([4,5,6,8,10]),a=rnd(2,k-1),b=rnd(1,a-1);return C(`${a}/${k} − ${b}/${k} = ?`,[`${a-b}/${k}`,`${a-b}/0`,`${a+b}/${k}`],null,"Resta los numeradores; el denominador se queda.")},
fdeN:()=>{const k=pick([2,3,4,5,10]),n=k*rnd(2,12),a=rnd(1,k-1);return N(`¿Cuánto es ${a}/${k} de ${n}?`,n/k*a,null,`Divide ${n} entre ${k} y multiplica por ${a}.`)},
feq:()=>{const k=pick([2,3,4,5]),a=rnd(1,k-1),m=rnd(2,4);return C(`¿Qué fracción es equivalente a ${a}/${k}?`,[`${a*m}/${k*m}`,`${a+m}/${k+m}`,`${a*m}/${k}`],null,"Multiplica numerador y denominador por el mismo número.")},
dsum:()=>{const a=rnd(105,999)/100,b=rnd(105,999)/100,r=(a+b).toFixed(2);return C(`${a.toFixed(2)} + ${b.toFixed(2)} = ?`,[r,(a+b+1).toFixed(2),(a+b+0.1).toFixed(2)],null,"Alinea el punto decimal y suma.")},
dres:()=>{const a=rnd(500,999)/100,b=rnd(100,499)/100,r=(a-b).toFixed(2);return C(`$${a.toFixed(2)} − $${b.toFixed(2)} = ?`,["$"+r,"$"+(a-b+1).toFixed(2),"$"+(a-b-0.1).toFixed(2)],null,"Alinea el punto y resta como con pesos y centavos.")},
dcmp:()=>{const a=rnd(10,99)/10;let b=rnd(100,999)/100;if(Math.abs(a-b)<0.001)b+=0.01;return C(`¿Cuál es mayor?`,[Math.max(a,b),Math.min(a,b)].map(x=>x===a?a.toFixed(1):b.toFixed(2)),null,"Compara enteros, luego décimos, luego centésimos.")},
dread:()=>{let n=rnd(101,999)/100,e=Math.floor(n),c=Math.round((n-e)*100);if(c===e||c<10){c=e+11;n=e+c/100}return C(`¿Cómo se lee ${n.toFixed(2)}?`,[`${e} enteros, ${c} centésimos`,`${e} enteros, ${c} décimos`,`${c} enteros, ${e} centésimos`],null,"Después del punto: décimos y centésimos.")},
per:()=>{const a=rnd(3,25),b=rnd(2,18);return N(`Un rectángulo mide ${a} cm de largo y ${b} cm de ancho. ¿Cuál es su perímetro en cm?`,2*(a+b),{t:"rectp",w:a,h:b},"Suma los cuatro lados.")},
area:()=>{const a=rnd(3,15),b=rnd(2,12);return N(`Un rectángulo mide ${a} cm por ${b} cm. ¿Cuál es su área en cm²?`,a*b,{t:"area",r:Math.min(b,8),c:Math.min(a,10)},"Área = largo × ancho.")},
ang:()=>{const g=rnd(10,170);const t=g<90?"agudo":g===90?"recto":"obtuso";return C(`Un ángulo de ${g}° es…`,[t,...["agudo","recto","obtuso"].filter(x=>x!==t)],null,"Agudo: menos de 90°. Recto: 90°. Obtuso: más de 90°.")},
uconv:()=>{const[q,f,u1,u2]=pick([["km","m",1000],["m","cm",100],["cm","mm",10],["kg","g",1000],["l","ml",1000]].map(([a,b,f])=>[rnd(2,9),f,a,b]));return N(`¿Cuántos ${u2} hay en ${q} ${u1}?`,q*f,null,`1 ${u1} = ${f} ${u2}.`)},
tiempo:()=>{const h=rnd(1,4),m=pick([10,15,20,30,45]);return N(`¿Cuántos minutos son ${h} h ${m} min?`,h*60+m,null,"1 hora = 60 minutos.")},
siglo:()=>{const y=rnd(1201,2025),s=Math.ceil(y/100),R=["","I","II","III","IV","V","VI","VII","VIII","IX","X","XI","XII","XIII","XIV","XV","XVI","XVII","XVIII","XIX","XX","XXI"];return C(`¿En qué siglo está el año ${y}?`,[R[s],R[s-1],R[s+1]||"XXII"].map(x=>"siglo "+x),null,"Quita las dos últimas cifras y suma 1 (si no terminan en 00).")},
vunit:()=>{const p=rnd(6,45),n=rnd(2,6),m=rnd(3,9);return N(`Si ${n} cuadernos cuestan $${p*n}, ¿cuánto cuestan ${m}?`,p*m,null,`Primero el precio de uno: ${p*n} ÷ ${n}.`)},
moda:()=>{const v=[rnd(1,9),rnd(1,9),rnd(1,9)],m=v[0];const d=[m,m,m,v[1],v[2]].sort(()=>Math.random()-.5);return N(`¿Cuál es la moda de: ${d.join(", ")}?`,m,null,"La moda es el dato que más se repite.")},
cuerpo:()=>{const[c,ca,ar,ve]=pick([["cubo",6,12,8],["prisma rectangular",6,12,8],["pirámide cuadrangular",5,8,5],["prisma triangular",5,9,6],["pirámide triangular",4,6,4]]),k=pick(["caras","aristas","vértices"]),a={caras:ca,aristas:ar,vértices:ve}[k];return N(`¿Cuántas ${k} tiene un ${c}?`,a,null,"Caras: superficies planas. Aristas: bordes. Vértices: esquinas.")}
});
