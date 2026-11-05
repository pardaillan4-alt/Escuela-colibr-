/* ========= Biblioteca: pinturas y fotos en cada página de los cuentos ========= */
Object.assign(IM,{
colibri:["Colibri-thalassinus-001-edit.jpg","Colibrí oreja violeta · foto de Wikimedia Commons"],
colibri2:["Cinnamon_hummingbird_(Amazilia_rutila)_in_flight_Los_Tarrales.jpg","Colibrí canela en vuelo · foto de Wikimedia Commons"],
nido:["Calliope-nest_edit.jpg","Nido de colibrí · foto de Wikimedia Commons"],
arcaT:["Tissot_Building_the_Ark.jpg","James Tissot, «Construyendo el arca»"],
animalesArca:["Tissot_The_Animals_Enter_the_Ark.jpg","James Tissot, «Los animales entran al arca»"],
paloma:["Tissot_The_Dove_Returns_to_Noah.jpg","James Tissot, «La paloma regresa con Noé»"],
tormentaMar:["Storm_at_sea_(8805197084).jpg","Tormenta en el mar · foto de Wikimedia Commons"],
panes:["Petrus_Norbertus_van_Reysschoot_-_Multiplication_of_the_loaves.jpg","Van Reysschoot, «La multiplicación de los panes»"],
lobo:["Scandinavian_grey_wolf_Canis_lupus.jpg","Lobo gris · foto de Wikimedia Commons"],
sassetta:["Sassetta,_san_francesco_e_il_lupo.jpg","Sassetta, «San Francisco y el lobo de Gubbio» (1437-1444)"],
doctores:["Disputa_con_los_doctores_(El_Veronés)_grande.jpg","Veronés, «Jesús entre los doctores», Museo del Prado"],
samarL:["Landscape_with_the_Good_Samaritan_-_Rembrandt.jpg","Rembrandt, «Paisaje con el buen samaritano»"],
samarR:["Rembrandt_-_The_Good_Samaritan_-_Berlin.jpg","Escuela de Rembrandt, «El buen samaritano»"],
juanDiego:["MIguel_Cabrera_-_Fiel_retrato_do_venerável_Juan_Diego.jpg","Miguel Cabrera, «Retrato de Juan Diego»"],
basilica:["Basilica-PlazaMariana.jpg","Basílica de Guadalupe, Ciudad de México · foto de Wikimedia Commons"],
zaqueo:["Lucio_Massari_-_Zaccheus_in_the_Tree_-_1972.305_-_Harvard_Art_Museums.jpg","Lucio Massari, «Zaqueo en el árbol», Museos de Harvard"],
ovejas:["Flock_of_sheep.jpg","Un rebaño de ovejas · foto de Wikimedia Commons"],
martin:["El_Greco_-_San_Martín_y_el_mendigo.jpg","El Greco, «San Martín y el mendigo»"],
mostaza:["Brassica_nigra_002.JPG","Planta de mostaza en flor · foto de Wikimedia Commons"],
joseSueno:["Tissot_Joseph_Reveals_His_Dream_to_His_Brethren.jpg","James Tissot, «José cuenta su sueño a sus hermanos»"],
joseVendido:["Joseph_Sold_by_His_Brothers_MET_DP802190.jpg","«José vendido por sus hermanos», Museo Metropolitano de Nueva York"],
joseEgipto:["Tissot_Joseph_Dwells_in_Egypt.jpg","James Tissot, «José vive en Egipto»"],
joseRecon:["Joseph_Recognized_by_his_Brothers_MET_DP810313.jpg","«José es reconocido por sus hermanos», Museo Metropolitano de Nueva York"],
fatima:["ChildrensofFatima.jpg","Lucía, Francisco y Jacinta en 1917 · fotografía antigua"],
fatima2:["Saints_Francisco_and_Jacinta_Marto_double_portrait.jpg","San Francisco y Santa Jacinta Marto · fotografía antigua"]});
/* cuento: [imágenes de cada página del cuento], página «¿Qué nos enseña?», portada del mapa del cuento */
const LIBIMG={
"1l1":[["colibri","gotas","colibri2"],"nido","colibri"],
"1l2":[["arcaT","animalesArca","tormentaMar","arcoiris"],"paloma","arca"],
"1l3":[["lastSermon","panes","espigadoras"],"juanesCena","panes"],
"1l4":[["lobo","sassetta","francisco"],"francisco","sassetta"],
"1l5":[["dou","ana","virgenNino"],"pajarito","dou"],
"1l6":[["pajarito",null,"doctores"],"natividad","doctores"],
"2l1":[["samarL",null,"samarR","alkmaar"],"teresaC","samarR"],
"2l2":[["juanDiego","guadalupe",null,"basilica"],"guadalupe","guadalupe"],
"2l3":[["entrada","zaqueo",null,"prodigoM"],"buenpastor","zaqueo"],
"2l4":[["ovejas","luna","buenpastor","pajarito"],"ninos","ovejas"],
"2l5":[[null,null,"martin","luzMundo"],"alkmaar","martin"],
"2l6":[["semillas","trigo","mostaza","nido"],"sembrador","mostaza"],
"3l1":[["honore","westminster","bossuit",null],"saulDavid","honore"],
"3l2":[[null,"bosco",null,"ninos"],"gonzaga","bosco"],
"3l3":[["joseSueno","joseVendido","joseEgipto","joseRecon"],"prodigoM","joseRecon"],
"3l4":[["fatima","virgenNino","fatima2","sol"],"angelus","fatima"],
"3l5":[["prodigo2",null,null,"prodigoM"],"confesionario","prodigoM"],
"3l6":[["mercado","altarperdon",null,"ninos"],"alkmaar","alkmaar"]};
(function(){const find=id=>{for(const s of SUBJ)for(const u of s.units)for(const l of u.ls)if(l.id===id)return l};const src=f=>/^https?:/.test(f)?f:WM(f,800);
 const ph=(key,alt)=>{const[f,cr]=IM[key];return{t:"photo",src:src(f),alt,cap:"",credit:cr,art:!/foto|Foto|fotografía|Unsplash|Commons$/.test(cr)}};
 for(const[id,[pages,fe,hero]]of Object.entries(LIBIMG)){const l=find(id);if(!l)continue;
  const story=l.learn.filter(p=>!p.info&&!p.fe&&p.v&&p.v.t==="art");
  pages.forEach((k,i)=>{if(k&&IM[k]&&story[i])story[i].v=ph(k,story[i].h)});
  const f=l.learn.find(p=>p.fe);if(f&&fe&&IM[fe])f.v=ph(fe,f.h);
  if(hero&&IM[hero]){const[hf,hc]=IM[hero];l.learn.filter(p=>p.info).forEach(p=>{p.v.img={src:/^https?:/.test(hf)?hf:WM(hf,640),cr:hc}})}}})();
/* «Revisar imágenes» en la Zona de papás también revisa las de Ciencias y la Biblioteca */
{const _il=imgList;imgList=function(){const L=_il(),seen=new Set(L.map(x=>x[1]));for(const[k,[f,cr]]of Object.entries(IM)){if(/^https?:/.test(f))continue;const u=WM(f,330);if(!seen.has(u)){seen.add(u);L.push([k,u,cr])}}return L}}
