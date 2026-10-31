import sys, json, subprocess, re, io
from pypdf import PdfReader, PdfWriter
from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import letter
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
g=int(sys.argv[1]); O='out'
GN={1:'1.º',2:'2.º',3:'3.º'}
def run(m): subprocess.run(['node','render.js',m,str(g)],check=True)
run('body')
body=PdfReader(f'{O}/g{g}-body.pdf'); key=PdfReader(f'{O}/g{g}-key.pdf')
marks={}
for i,p in enumerate(body.pages):
    for m in re.findall(r'§([^§\s]+)§',p.extract_text() or ''):
        marks.setdefault(m,i)
toc=json.load(open(f'{O}/g{g}-data.json'))
need=[s['id'] for s in toc]+[l['id'] for s in toc for l in s['ls']]
miss=[x for x in need if x not in marks]
if miss: print('FALTAN marcadores',miss)
F=4
for _ in range(3):
    pages={k:v+1+F for k,v in marks.items()}; pages['key']=F+len(body.pages)+1
    json.dump(pages,open(f'{O}/g{g}-pages.json','w')); run('front')
    n=len(PdfReader(f'{O}/g{g}-front.pdf').pages)
    if n==F: break
    F=n
front=PdfReader(f'{O}/g{g}-front.pdf')
w=PdfWriter()
for r in (front,body,key):
    for p in r.pages: w.add_page(p)
# numeración
fp='/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf'
try: pdfmetrics.registerFont(TTFont('DV',fp)); FN='DV'
except Exception: FN='Helvetica'
total=len(w.pages)
for i,p in enumerate(w.pages):
    if i==0: continue
    buf=io.BytesIO(); W=float(p.mediabox.width); H=float(p.mediabox.height)
    c=canvas.Canvas(buf,pagesize=(W,H)); c.setFont(FN,8); c.setFillColorRGB(.45,.5,.58)
    c.drawString(51,22,f'Escuelita Colibrí · Cuaderno de {GN[g]} de primaria'); c.drawRightString(W-40,22,f'{i+1}')
    c.save(); buf.seek(0); p.merge_page(PdfReader(buf).pages[0])
w.add_metadata({'/Title':f'Escuelita Colibrí — Cuaderno de trabajo de {GN[g]} de primaria','/Author':'Escuelita Colibrí'})
# marcadores del PDF
for s in toc:
    par=w.add_outline_item(s['n'],pages_idx:=marks[s['id']]+F) if False else w.add_outline_item(s['n'],marks[s['id']]+F)
    for l in s['ls']: w.add_outline_item(f"{l['n']}. {l['t']}",marks[l['id']]+F,parent=par)
w.add_outline_item('Solucionario',F+len(body.pages))
out=f'{O}/Cuaderno-{g}o-primaria.pdf'
with open(out,'wb') as f: w.write(f)
json.dump({'front':F,'body':len(body.pages),'key':len(key.pages),'total':total,'subjects':[[s['n'],s['id'],marks[s['id']]+F+1] for s in toc]},open(f'{O}/g{g}-summary.json','w'))
print(out,total,'páginas')
