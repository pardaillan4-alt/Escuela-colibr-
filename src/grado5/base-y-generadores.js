/* ========= 5.º grado: estructura y generadores de matemáticas ========= */
GRADES.push([5,"5.º"]);
[["5mat","mat","Matemáticas","Saberes y pensamiento científico"],["5rel","rel","Religión Católica","Formación en la fe (complemento del hogar)"]].forEach(([id,c,n,campo])=>SUBJ.push({id,c,g:5,n,campo,d:"",units:[]}));
const uniq=a=>a.map(String).filter((x,i,arr)=>arr.indexOf(x)===i);
const gcd=(a,b)=>b?gcd(b,a%b):a;
const fr=(n,d)=>{const g=gcd(n,d);return d/g===1?String(n/g):`${n/g}/${d/g}`};
const dec=(x,k)=>x.toFixed(k).replace(".",".");
Object.assign(G,{
nm7:()=>{const n=rnd(1000000,99999999),k=rnd(0,2),nm=["millones","millares","unidades"][k];const s=String(n).padStart(9,"0"),g=[s.slice(0,3),s.slice(3,6),s.slice(6)][k];return C(`En el ${fmt(n)}, ¿qué número forman ${k===2?"las":"los"} ${nm}?`,uniq([+g,+g+1,Math.max(0,+g-10)]),null,"Separa en grupos de tres desde la derecha: millones, millares, unidades.")},
val7:()=>{const n=rnd(1000000,9999999),k=rnd(0,2),d=+String(n)[k]||1,v=d*10**(6-k);return C(`¿Cuánto vale la cifra ${String(n)[k]} en el ${fmt(n)}?`,uniq([v,v/10,v*10].filter(x=>x>=1)).map(x=>fmt(+x)),null,"Su valor depende de su lugar.")},
pot:()=>{const b=rnd(2,12),e=b<=6?pick([2,3]):2;return N(`¿Cuánto es ${b}${e===2?"²":"³"}?`,b**e,null,e===2?`${b} × ${b}`:`${b} × ${b} × ${b}`)},
mul43:()=>{const a=rnd(1002,4999),b=rnd(21,99);return N(`${a} × ${b} = ?`,a*b,null,"Multiplica por las unidades, luego por las decenas (con un cero) y suma.")},
div32:()=>{const d=rnd(12,48),q=rnd(12,99),r=rnd(0,d-1);return C(`${d*q+r} ÷ ${d} = ?`,uniq([`${q} residuo ${r}`,`${q+1} residuo ${r}`,`${q-1} residuo ${r}`]),null,"Estima con el divisor redondeado.")},
mix:()=>{const d=pick([3,4,5,6,8]),e=rnd(1,4),n=rnd(1,d-1);return C(`¿Qué fracción impropia es igual a ${e} ${n}/${d}?`,uniq([`${e*d+n}/${d}`,`${e+n}/${d}`,`${e*n+d}/${d}`]),null,"Entero × denominador + numerador.")},
simp:()=>{const d=pick([2,3,4,5]),n=rnd(1,d-1),m=rnd(2,6);return C(`Simplifica ${n*m}/${d*m}`,uniq([fr(n,d),`${n*m}/${d}`,`${n}/${d*m}`]),null,"Divide numerador y denominador entre el mismo número.")},
fadd2:()=>{const[a,b]=pick([[2,4],[3,6],[2,3],[4,8],[2,5],[3,4],[2,6],[5,10]]),x=rnd(1,a-1),y=rnd(1,b-1),D=a*b/gcd(a,b),N1=x*D/a+y*D/b;return C(`${x}/${a} + ${y}/${b} = ?`,uniq([fr(N1,D),`${x+y}/${a+b}`,fr(N1+1,D)]),null,`Común denominador: ${D}.`)},
fsub2:()=>{const[a,b]=pick([[2,4],[3,6],[2,3],[4,8],[3,4],[5,10]]),D=a*b/gcd(a,b);let x=rnd(1,a-1),y=rnd(1,b-1);if(x*D/a<=y*D/b){x=a-1;y=1}const N1=x*D/a-y*D/b;return C(`${x}/${a} − ${y}/${b} = ?`,uniq([fr(N1,D),`${Math.abs(x-y)}/${Math.abs(a-b)||1}`,fr(N1+1,D)]),null,`Común denominador: ${D}.`)},
fmul:()=>{const a=rnd(1,5),b=rnd(2,6),c=rnd(1,5),d=rnd(2,6);return C(`${a}/${b} × ${c}/${d} = ?`,uniq([fr(a*c,b*d),`${a+c}/${b+d}`,fr(a*d,b*c)]),null,"Numerador por numerador y denominador por denominador.")},
fdiv:()=>{const a=rnd(1,5),b=rnd(2,6),c=rnd(1,5),d=rnd(2,6);return C(`${a}/${b} ÷ ${c}/${d} = ?`,uniq([fr(a*d,b*c),fr(a*c,b*d),`${a+d}/${b+c}`]),null,"Multiplica por el inverso del divisor.")},
d3read:()=>{const e=rnd(1,30),m=rnd(101,999);return C(`¿Cómo se escribe «${e} enteros, ${m} milésimos»?`,uniq([`${e}.${m}`,`${e}.${String(m).slice(0,2)}`,`${m}.${e}`]),null,"Los milésimos ocupan tres lugares después del punto.")},
dmul:()=>{const a=rnd(11,99)/10,b=rnd(2,9),r=a*b;return C(`${a.toFixed(1)} × ${b} = ?`,uniq([r.toFixed(1),(r*10).toFixed(0),(r+1).toFixed(1)]),null,"Multiplica sin punto y pon tantos decimales como tenga el factor.")},
d10:()=>{const a=rnd(12,9999),k=pick([10,100,1000]),r=+(a/k).toFixed(4);return C(`${a} ÷ ${k} = ?`,uniq([String(r),String(+(a/(k/10)).toFixed(4)),String(+(a/(k*10)).toFixed(5))]),null,`Recorre el punto ${String(k).length-1} lugar(es) a la izquierda.`)},
f2d:()=>{const[n,d,v]=pick([[1,2,"0.5"],[1,4,"0.25"],[3,4,"0.75"],[1,5,"0.2"],[2,5,"0.4"],[1,10,"0.1"],[7,10,"0.7"],[3,100,"0.03"],[1,8,"0.125"]]);return C(`¿Qué decimal es igual a ${n}/${d}?`,uniq([v,`${n}.${d}`,String(+v*10)]),null,"Divide el numerador entre el denominador.")},
pct:()=>{const p=pick([10,20,25,50,75,5,15,30]),n=pick([40,60,80,100,120,200,300,400]);return N(`¿Cuánto es el ${p}% de ${n}?`,n*p/100,null,`${p}% = ${p}/100.`)},
r3:()=>{const a=rnd(2,6),u=rnd(5,30),b=rnd(7,15);return N(`Si ${a} kg de frijol cuestan $${a*u}, ¿cuánto cuestan ${b} kg?`,u*b,null,"Regla de tres: primero el valor de uno.")},
razon:()=>{const a=rnd(1,5),b=rnd(2,6),k=rnd(2,6);return N(`En una receta hay ${a} tazas de arroz por cada ${b} de agua. Si usas ${a*k} tazas de arroz, ¿cuántas de agua?`,b*k,null,"Las razones equivalentes se multiplican por el mismo número.")},
atri:()=>{const b=rnd(2,20)*2,h=rnd(3,15);return N(`Un triángulo tiene base ${b} cm y altura ${h} cm. ¿Su área en cm²?`,b*h/2,null,"Área = base × altura ÷ 2.")},
apar:()=>{const b=rnd(3,20),h=rnd(2,15),t=pick(["romboide","rectángulo"]);return N(`Un ${t} tiene base ${b} m y altura ${h} m. ¿Su área en m²?`,b*h,null,"Área = base × altura.")},
perpol:()=>{const n=rnd(5,8),l=rnd(3,15),nm={5:"pentágono",6:"hexágono",7:"heptágono",8:"octágono"}[n];return N(`¿Cuál es el perímetro de un ${nm} regular de ${l} cm de lado?`,n*l,null,`${n} lados × ${l}.`)},
circ:()=>{const d=pick([2,4,5,10,20]),c=+(d*3.14).toFixed(2);return C(`¿Cuánto mide aproximadamente la circunferencia de un círculo de ${d} cm de diámetro? (π ≈ 3.14)`,uniq([c,+(d*3).toFixed(2),+(d*3.14*2).toFixed(2)]).map(x=>x+" cm"),null,"Circunferencia = π × diámetro.")},
vol:()=>{const a=rnd(2,9),b=rnd(2,9),c=rnd(2,9);return N(`Una caja mide ${a} × ${b} × ${c} cm. ¿Su volumen en cm³?`,a*b*c,null,"Volumen = largo × ancho × alto.")},
sup:()=>{const[q,f,u1,u2]=pick([["m²","cm²",10000],["ha","m²",10000],["km²","ha",100],["dm²","cm²",100]].map(([a,b,f])=>[rnd(2,9),f,a,b]));return N(`¿Cuántos ${u2} hay en ${q} ${u1}?`,q*f,null,`1 ${u1} = ${fmt(f)} ${u2}.`)},
ingl:()=>{const[q,u,r]=pick([[1,"pulgada",2.54],[1,"pie",30.48],[1,"yarda",91.44],[1,"milla",1609]]);return C(`¿A cuánto equivale aproximadamente 1 ${u}?`,uniq([r+(u==="milla"?" m":" cm"),(r*2)+(u==="milla"?" m":" cm"),(r/2)+(u==="milla"?" m":" cm")]),null,"Sistema Inglés: pulgada, pie, yarda, milla.")},
media:()=>{const k=rnd(3,5),m=rnd(4,20);let v=Array.from({length:k},()=>m+rnd(-3,3));const s=v.reduce((a,b)=>a+b,0);v[k-1]+=m*k-s;return N(`¿Cuál es el promedio (media) de: ${v.join(", ")}?`,m,null,"Suma todos y divide entre cuántos son.")},
mediana:()=>{const v=Array.from({length:5},()=>rnd(1,30)),o=[...v].sort((a,b)=>a-b);return N(`¿Cuál es la mediana de: ${v.join(", ")}?`,o[2],null,"Ordena de menor a mayor y toma el de en medio.")},
prob:()=>{const r=rnd(1,6),a=rnd(1,6),t=r+a;return C(`En una bolsa hay ${r} canicas rojas y ${a} azules. ¿Cuál es la probabilidad de sacar una roja?`,uniq([`${r}/${t}`,`${a}/${t}`,`${r}/${a}`]),null,"Casos favorables ÷ casos posibles.")},
suc:()=>{const a=rnd(2,40),d=pick([2,3,4,5,6,7,8,9,11,12,15,25]),k=pick([1,-1]),A=k<0?a+d*8:a,v=[0,1,2,3,4].map(i=>A+k*d*i);return N(`¿Qué número sigue? ${v.slice(0,4).join(", ")}, …`,v[4],null,`Cada vez ${k>0?"suma":"resta"} ${d}.`)},
rom5:()=>{const n=rnd(40,3999),R=x=>[[1000,"M"],[900,"CM"],[500,"D"],[400,"CD"],[100,"C"],[90,"XC"],[50,"L"],[40,"XL"],[10,"X"],[9,"IX"],[5,"V"],[4,"IV"],[1,"I"]].reduce((s,[v,l])=>{while(x>=v){s+=l;x-=v}return s},"");return C(`¿Cómo se escribe ${n} en números romanos?`,uniq([R(n),R(n+10),R(n-1)]),null,"M=1000, D=500, C=100, L=50, X=10, V=5, I=1.")}
});
