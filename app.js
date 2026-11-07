document.body.insertAdjacentHTML('afterbegin',"<div id=\"bar\"><div class=\"sb\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\" stroke-linecap=\"round\"><circle cx=\"10.5\" cy=\"10.5\" r=\"6.5\"/><path d=\"M15.5 15.5L21 21\"/></svg><input id=\"q\" type=\"search\"></div><button class=\"ib\" id=\"vw\">☰</button><button class=\"ib\" id=\"ex\">⬇</button><label class=\"ib\" for=\"fj\">⬆</label></div>\n<div id=\"cols\"></div>\n<button id=\"fab\">+</button>\n<div id=\"ed\" hidden><div class=\"sh\">\n<input id=\"et\" placeholder=\"✎\"><textarea id=\"ec\" rows=\"7\"></textarea>\n<div id=\"sw\"></div>\n<div id=\"ir\" hidden>🖼<input type=\"range\" id=\"ov\" min=\"0\" max=\".95\" step=\".05\"><button id=\"igd\">🗑</button></div>\n<div class=\"ar\"><button id=\"ed1\">🗑</button><button id=\"ed2\">📋</button><button id=\"ed4\">↗</button><button id=\"ed3\">✓</button></div>\n</div></div>\n<input type=\"file\" id=\"fi\" accept=\"image/*\" class=\"hid\"><input type=\"file\" id=\"fj\" accept=\".csv,text/csv,.json\" class=\"hid\">\n<div id=\"toast\"></div>");
const $=id=>document.getElementById(id);
const TH=location.pathname.replace(/[^/]*$/,'').split('/').filter(Boolean).pop()||'root';
const LS=new Proxy({},{get:(_,k)=>localStorage.getItem(TH+':'+k),set:(_,k,v)=>{localStorage.setItem(TH+':'+k,v);return true}});
const P=[
['#fffdf8','linear-gradient(#efdfcf 1px,transparent 1px),linear-gradient(90deg,#efdfcf 1px,transparent 1px)','14px 14px'],
['#fdf1e3','repeating-linear-gradient(0deg,#fbd9bd66 0 18px,transparent 18px 36px),repeating-linear-gradient(90deg,#fbd9bd88 0 18px,transparent 18px 36px)','auto'],
['#f8f3e6','radial-gradient(#c97b7b 3px,transparent 3.5px),radial-gradient(#8fa58a 2px,transparent 2.5px),radial-gradient(#b9c3de 4px,transparent 4.5px)','53px 53px,37px 37px,71px 71px','0 0,20px 15px,10px 40px'],
['#eef6f0','repeating-linear-gradient(90deg,#d9ece0 0 10px,transparent 10px 20px)','auto'],
['#fffbea','repeating-linear-gradient(transparent 0 23px,#e8d9a8 23px 24px)','auto'],
['#fdeef0','radial-gradient(#f7c6cf 5px,transparent 5.5px)','22px 22px'],
['#f1eefb','repeating-linear-gradient(45deg,#e1dbf5 0 6px,transparent 6px 14px)','auto'],
['#f0f6fc','linear-gradient(#cfe0f1 1px,transparent 1px),linear-gradient(90deg,#cfe0f1 1px,transparent 1px)','20px 20px'],
['#fde5d0','none','auto'],
['#fff7d6','conic-gradient(#fdeaa0 25%,transparent 0 50%,#fdeaa0 0 75%,transparent 0)','28px 28px']];
let M=[],F='',E,NEW,V=false;try{V=LS.v=='1'}catch(e){}
let G=[];
try{M=JSON.parse(LS.m||'null')}catch(e){}
try{G=JSON.parse(LS.g||'[]')}catch(e){}

if(!M||!M.length){
  M=[
    {
      id:1700000000001,
      t:"앱 소개",
      c:"\n님의 취향 저격 미니 메모앱입니다\n메모 저장은 내 모바일에 되니 안심 !\n\n석삼자 버튼을 누르면 메모 배치가 바뀌어요\n다운/업 버튼으로 데이터 저장/데이터 복구를 해요\n(.csv 파일은 내 모바일에 직접 저장 되어요)\n작성된 메모에 핀을 꼽아 맨 위로 보내보세요\n메모를 꾹 누르면 드래그앤드롭이 가능합니다 !\n검색은 제목과 내용 모두 가능해요\n\n+ 버튼으로 새 메모를 기입해요\n제목과 내용을 쓰고 원하는 메모지 배경을 골라요\n제목은 안써도 저장 됩니다 !\n\n원하는 배경이 없나요?\n사진 이미지 클릭으로 내 사진도 가져올 수 있어요\n\n글씨가 잘 안보이나요?\n배경의 흐리기는 slide bar로 조절 되어요\n\n작성한 메모를 삭제하고 싶나요?\n휴지통 버튼을 클릭하고, !까지 누르면 삭제 !\n\n작성한 메모를 복사하고 싶나요?\n서류 버튼을 누르면 한방에 복사 !\n\n복사도 귀찮은가요?\n화살표 버튼으로 공유하기도 할 수 있답니다\n*메모별로 다운로드와 공유도 가능하지요\n\n!! 불편 사항은 언제든 환영 !\n",
      p:0,
      pin:0,
      img:"t10",
      ov:0.55,
      u:1700000000001
    },
    {
      id:1700000000002,
      t:"자화상 - 윤동주",
      c:"\n산모퉁이를 돌아 논가 외딴 우물을 홀로 찾아가선 가만히 들여다봅니다.\n\n우물 속에는 달이 밝고 구름이 흐르고 하늘이 펼치고 파아란 바람이 불고 가을이 있습니다.\n\n그리고 한 사나이가 있습니다. 어쩐지 그 사나이가 미워져 돌아갑니다.\n\n돌아가다 생각하니 그 사나이가 가엾어집니다. 도로 가 들여다보니 사나이는 그대로 있습니다.\n\n다시 그 사나이가 미워져 돌아갑니다. 돌아가다 생각하니 그 사나이가 그리워집니다.\n\n우물 속에는 달이 밝고 구름이 흐르고 하늘이 펼치고 파아란 바람이 불고 가을이 있고 추억처럼 사나이가 있습니다.\n",
      p:1,
      pin:0,
      img:"t3",
      ov:0.55,
      u:1700000000002
    }
  ];
  try{LS.m=JSON.stringify(M)}catch(e){}
}

const save=()=>{try{LS.m=JSON.stringify(M)}catch(e){toast('저장 공간 부족')}nudge()};
function sig(){let h=0;for(const m of M){const t=m.t+'\u0001'+m.c+'\u0001'+(m.u||m.id);for(let i=0;i<t.length;i++)h=(h*31+t.charCodeAt(i))|0}return M.length+':'+h}
function nudge(){let fu=+LS.fu;if(!fu){fu=Date.now();try{LS.fu=fu}catch(e){}}const d=(Date.now()-(+LS.lb||fu))/864e5,need=M.length>0&&sig()!=LS.bs&&d>=3;$('ex').classList.toggle('dot',need);return need?Math.floor(d):0}
const saveG=()=>{try{LS.g=JSON.stringify(G)}catch(e){toast('저장 공간 부족')}};
function gi(id){return /^t\d+$/.test(id)?id.slice(1)+'.jpg':(G.find(g=>g.id==id)||{}).d}
function migrate(){M.forEach(m=>{if(!m.u)m.u=m.id;if(m.img&&m.img.startsWith('data:')){let g=G.find(x=>x.d==m.img);if(!g){g={id:'g'+Math.random().toString(36).slice(2,9),d:m.img};G.push(g)}m.img=g.id}})}
migrate();saveG();save();
function arm(b,ic,fn){let q=0;b.onclick=()=>{if(!q){q=1;b.textContent='❗';toast('한 번 더 누르면 삭제돼요');setTimeout(()=>{q=0;b.textContent=ic},3000);return}q=0;b.textContent=ic;fn()}}
const esc=s=>s.replace(/[&<>]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]));
const fd=t=>{const d=new Date(t);return d.getFullYear()+'.'+String(d.getMonth()+1).padStart(2,'0')+'.'+String(d.getDate()).padStart(2,'0')};
function toast(t){const e=$('toast');e.textContent=t;e.style.opacity=1;setTimeout(()=>e.style.opacity=0,1600)}
function paint(el,m){const s=el.style;
 const src=m.img&&gi(m.img);if(src){const w=`rgba(255,255,255,${m.ov})`;s.backgroundImage=`linear-gradient(${w},${w}),url("${src}")`;s.backgroundSize='cover';s.backgroundPosition='center';s.backgroundColor='#fff'}
 else{const p=P[m.p];s.backgroundColor=p[0];s.backgroundImage=p[1];s.backgroundSize=p[2];s.backgroundPosition=p[3]||'0 0'}}
function render(){
 const cols=$('cols');cols.innerHTML='<div class="col"></div>'+(V?'':'<div class="col"></div>');
 const [a,b=a]=cols.children,f=F.toLowerCase();
 const L=[...M.filter(x=>x.pin),...M.filter(x=>!x.pin)].filter(x=>!f||(x.t+' '+x.c).toLowerCase().includes(f));if(!L.length){cols.innerHTML='<div class="em" style="flex:1">'+(f?'🙀':'🐈')+'</div>';return}L.forEach(m=>{
  const e=document.createElement('div');e.className='n'+(m.pin?' pin':'');e.dataset.id=m.id;paint(e,m);
  e.innerHTML=`${m.t?`<h3>${esc(m.t)}</h3>`:''}<div class="c">${esc(m.c)}</div><div class="tl"><span class="dt">${fd(m.u||m.id)}</span><button data-a="pin" class="${m.pin?'on':''}">📌</button><button data-a="dl">⬇</button><button data-a="sh">↗</button></div>`;
  (a.offsetHeight<=b.offsetHeight?a:b).append(e)})}
const txt=m=>(m.t?m.t+'\n\n':'')+m.c;
function dl(n,t,type){const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([t],{type}));a.download=n;document.body.append(a);a.click();setTimeout(()=>{a.remove();URL.revokeObjectURL(a.href)},1500)}
async function copy(t){try{await navigator.clipboard.writeText(t)}catch(e){const a=document.createElement('textarea');a.value=t;document.body.append(a);a.select();document.execCommand('copy');a.remove()}toast('복사됨')}
async function share(m){if(navigator.share){try{await navigator.share({title:m.t,text:m.c});return}catch(e){if(e.name=='AbortError')return}}copy(txt(m))}
let just=0;
$('cols').addEventListener('click',e=>{if(just)return;const n=e.target.closest('.n');if(!n)return;const m=M.find(x=>x.id==n.dataset.id),b=e.target.closest('button');
 if(!b)return open(m,0);
 if(b.dataset.a=='pin'){m.pin=m.pin?0:1;M=[m,...M.filter(x=>x!==m)];save();render()}
 if(b.dataset.a=='dl')dl((m.t||'memo').slice(0,30)+'.txt',txt(m),'text/plain');
 if(b.dataset.a=='sh')share(m)});
/* editor */
function buildSw(){const w=$('sw');w.innerHTML='';
 const lb=document.createElement('label');lb.textContent='🖼';lb.htmlFor='fi';w.append(lb);
 for(let n=1;n<=15;n++){const d=document.createElement('div'),u=n+'.jpg',k='t'+n;d.style.background=`url("${u}") center/cover`;d.dataset.k=k;d.onclick=()=>{E.img=k;E.ov=E.ov||.55;$('ov').value=E.ov;mem();marks()};w.append(d);const im=new Image;im.onerror=()=>d.remove();im.src=u}
 G.slice().reverse().forEach(g=>{const d=document.createElement('div');d.style.background=`url("${g.d}") center/cover`;d.dataset.k=g.id;d.onclick=()=>{E.img=g.id;E.ov=E.ov||.55;$('ov').value=E.ov;mem();marks()};w.append(d)});
 P.forEach((p,i)=>{const d=document.createElement('div');paint(d,{p:i});d.dataset.k='p'+i;d.onclick=()=>{E.p=i;E.img='';mem();marks()};w.append(d)})}
function marks(){const im=E.img&&gi(E.img)?E.img:'';[...$('sw').children].forEach(d=>d.classList.toggle('sel',d.dataset.k==(im||'p'+E.p)));$('ir').hidden=!im;$('igd').hidden=/^t\d+$/.test(im)}
function mem(){try{LS.ld=JSON.stringify({p:E.p,img:E.img,ov:E.ov})}catch(e){}}
$('ov').oninput=()=>{E.ov=+$('ov').value;mem()};
$('fi').onchange=e=>{const f=e.target.files[0];if(!f)return;const im=new Image;im.onload=()=>{const w=600,c=document.createElement('canvas');c.width=w;c.height=Math.min(im.height*w/im.width,1000);c.getContext('2d').drawImage(im,0,0,w,im.height*w/im.width);const g={id:'g'+Date.now(),d:c.toDataURL('image/jpeg',.7)};G.push(g);saveG();E.img=g.id;E.ov=E.ov||.55;$('ov').value=E.ov;mem();buildSw();marks()};im.src=URL.createObjectURL(f);e.target.value=''};
function open(m,n){E={...m};NEW=n;$('et').value=E.t;$('ec').value=E.c;$('ov').value=E.ov;$('ed').hidden=0;buildSw();marks()}
function close(){E.t=$('et').value;E.c=$('ec').value;E.ov=+$('ov').value;$('ed').hidden=1;
 if(!E.t.trim()&&!E.c.trim())M=M.filter(x=>x.id!=E.id);else if(NEW){E.u=Date.now();M.unshift(E)}else{const o=M.find(x=>x.id==E.id)||{};if(o.t!==E.t||o.c!==E.c)E.u=Date.now();M[M.findIndex(x=>x.id==E.id)]=E}save();render()}
$('fab').onclick=()=>{let d={p:Math.floor(Math.random()*10),img:'',ov:.55};try{const l=JSON.parse(LS.ld||'null');if(l)d={p:l.p,img:l.img,ov:l.ov}}catch(e){}open({id:Date.now(),t:'',c:'',pin:0,...d},1)};
$('ed3').onclick=close;
$('ed').onclick=e=>{if(e.target.id=='ed')close()};
$('ed2').onclick=()=>{E.t=$('et').value;E.c=$('ec').value;copy(txt(E))};$('ed4').onclick=()=>{E.t=$('et').value;E.c=$('ec').value;share(E)};
arm($('ed1'),'🗑',()=>{M=M.filter(x=>x.id!=E.id);$('ed').hidden=1;save();render()});arm($('igd'),'🗑',()=>{G=G.filter(g=>g.id!=E.img);saveG();M.forEach(m=>{if(m.img==E.img)m.img=''});E.img='';save();buildSw();marks();render()});
$('q').oninput=e=>{F=e.target.value;render()};
/* backup */
const fdt=t=>{const d=new Date(t),z=n=>String(n).padStart(2,'0');return d.getFullYear()+'-'+z(d.getMonth()+1)+'-'+z(d.getDate())+' '+z(d.getHours())+':'+z(d.getMinutes())};
const cq=v=>'"'+String(v).replace(/"/g,'""')+'"';
$('ex').onclick=()=>{const rows=[['제목','내용','날짜','고정'],...M.map(m=>[m.t,m.c,fdt(m.u||m.id),m.pin?1:0])];dl('memo-backup-'+fd(Date.now()).replace(/\./g,'-')+'.csv','\ufeff'+rows.map(x=>x.map(cq).join(',')).join('\r\n'),'text/csv;charset=utf-8');try{LS.lb=Date.now();LS.bs=sig()}catch(e){}nudge()};
function parseCsv(t){t=t.replace(/^\ufeff/,'');const rows=[];let r=[],c='',qt=false;
 for(let i=0;i<t.length;i++){const ch=t[i];
  if(qt){if(ch=='"'){if(t[i+1]=='"'){c+='"';i++}else qt=false}else c+=ch}
  else if(ch=='"'){qt=true}
  else if(ch==','){r.push(c);c=''}
  else if(ch=='\n'||ch=='\r'){if(ch=='\r'&&t[i+1]=='\n')i++;r.push(c);rows.push(r);r=[];c=''}
  else c+=ch}
 if(c||r.length){r.push(c);rows.push(r)}return rows}
function pd(v){const m=String(v||'').match(/(\d{4})\D+(\d{1,2})\D+(\d{1,2})(?:\D+(\d{1,2}):(\d{2}))?/);return m?new Date(+m[1],m[2]-1,+m[3],+(m[4]||0),+(m[5]||0)).getTime():Date.now()}
function impCsv(t){const rows=parseCsv(t).filter(r=>r.some(x=>x.trim()));if(rows.length&&/^(제목|title)$/i.test(rows[0][0].trim()))rows.shift();
 const seen=new Set(M.map(x=>x.t+'\u0001'+x.c)),add=[];let k=0;
 rows.forEach((r,i)=>{const ti=r[0]||'',co=r[1]||'';if(!ti.trim()&&!co.trim())return;const key=ti+'\u0001'+co;if(seen.has(key)){k++;return}seen.add(key);add.push({id:Date.now()+i,t:ti,c:co,p:Math.floor(Math.random()*10),pin:/^(1|y|yes|true|o|고정|pin)$/i.test((r[3]||'').trim())?1:0,img:'',ov:.55,u:pd(r[2])})});
 M=[...M,...add];save();render();toast(add.length+'개 불러옴'+(k?` (중복 ${k}개 제외)`:''))}
function impJson(a){const am=Array.isArray(a)?a:a.m;if(!Array.isArray(am))throw 0;(a.g||[]).forEach(g=>{if(!G.some(x=>x.id==g.id))G.push(g)});const mp=new Map(M.map(x=>[x.id,x]));am.forEach(x=>{const o=mp.get(x.id);if(!o||(x.u||x.id)>=(o.u||o.id))mp.set(x.id,x)});M=[...mp.values()];migrate();saveG();save();render();toast('불러옴')}
$('fj').onchange=async e=>{const f=e.target.files[0];if(!f)return;try{const t=await f.text();let j;try{j=JSON.parse(t)}catch(_){}if(j&&typeof j=='object')impJson(j);else impCsv(t)}catch(x){toast('불러오기 실패')}e.target.value=''};
/* drag reorder (long press) */
let dr=null,tm,sx,sy;
$('cols').addEventListener('pointerdown',e=>{const n=e.target.closest('.n');if(!n||e.target.closest('button'))return;sx=e.clientX;sy=e.clientY;
 tm=setTimeout(()=>{const r=n.getBoundingClientRect(),g=n.cloneNode(true);g.style.cssText+=`;position:fixed;width:${r.width}px;z-index:30;opacity:.88;pointer-events:none;transform:rotate(2deg)`;
  dr={n,g,ox:sx-r.left,oy:sy-r.top};n.style.opacity=.3;document.body.append(g);navigator.vibrate&&navigator.vibrate(20);mv(sx,sy)},350)});
function mv(x,y){dr.g.style.left=x-dr.ox+'px';dr.g.style.top=y-dr.oy+'px'}
document.addEventListener('pointermove',e=>{if(dr)mv(e.clientX,e.clientY);else if(Math.hypot(e.clientX-sx,e.clientY-sy)>8)clearTimeout(tm)});
document.addEventListener('touchmove',e=>{if(dr)e.preventDefault()},{passive:false});
function end(e){clearTimeout(tm);if(!dr)return;const t=document.elementFromPoint(e.clientX,e.clientY)?.closest('.n');dr.g.remove();
 if(t&&t!==dr.n){const a=M.find(x=>x.id==dr.n.dataset.id),b=M.find(x=>x.id==t.dataset.id);if(!a.pin==!b.pin){M=M.filter(x=>x!==a);M.splice(M.indexOf(b),0,a);save()}}
 dr=null;just=1;setTimeout(()=>just=0,80);render()}
document.addEventListener('pointerup',end);document.addEventListener('pointercancel',end);
$('vw').onclick=()=>{V=!V;try{LS.v=V?1:0}catch(e){}$('vw').textContent=V?'▦':'☰';render()};$('vw').textContent=V?'▦':'☰';
render();
if(navigator.storage&&navigator.storagepersist)navigator.storage.persist();
const nd=nudge();if(nd)setTimeout(()=>toast('백업한 지 '+nd+'일 지났어요 ⬇'),900);
if('serviceWorker'in navigator)navigator.serviceWorker.register('sw.js');
