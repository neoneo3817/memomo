const T=location.pathname.split('/').slice(-2,-1)[0]||'root',P='postit-'+T+'-',C=P+'v9';
const A=['./','index.html','manifest.json','../app.js','../app.css','../icon-192.png','../icon-512.png',...Array.from({length:15},(_,i)=>(i+1)+'.jpg')];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>Promise.all(A.map(u=>c.add(u).catch(()=>{})))));self.skipWaiting()});
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x.startsWith(P)&&x!=C).map(x=>caches.delete(x)))).then(()=>clients.claim())));
self.addEventListener('fetch',e=>{if(e.request.method!='GET'||new URL(e.request.url).origin!=location.origin)return;
e.respondWith(fetch(e.request).then(r=>{if(!r.ok)return caches.match(e.request).then(c=>c||r);const c=r.clone();caches.open(C).then(x=>x.put(e.request,c));return r}).catch(()=>caches.match(e.request)))});
