import json,subprocess,unicodedata,re,os
from pypdf import PdfReader,PdfWriter
def slug(s):return re.sub(r'[^a-z0-9]+','-',unicodedata.normalize('NFD',s.lower()).encode('ascii','ignore').decode()).strip('-')
Q=['qpdf','--object-streams=generate','--recompress-flate','--compression-level=9']
os.makedirs('final/por-materia',exist_ok=True)
for g in (1,2,3):
    src=f'Cuaderno-{g}o-primaria.pdf';sm=json.load(open(f'g{g}-summary.json'))
    subprocess.run(Q+[src,f'final/{src}'],check=True)
    r=PdfReader(src);subs=sm['subjects'];keyStart=sm['front']+sm['body']+1
    parts=[(n,start,(subs[i+1][2]-1) if i+1<len(subs) else keyStart-1) for i,(n,sid,start) in enumerate(subs)]+[('Solucionario',keyStart,len(r.pages))]
    for n,a,b in parts:
        w=PdfWriter()
        for p in range(a-1,b): w.add_page(r.pages[p])
        w.add_metadata({'/Title':f'Escuelita Colibrí — {n}, {g}.º de primaria'});w.write('final/por-materia/tmp.pdf')
        subprocess.run(Q+['final/por-materia/tmp.pdf',f'final/por-materia/{g}o-{slug(n)}.pdf'],check=True)
os.remove('final/por-materia/tmp.pdf');print('listo')
