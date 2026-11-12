const LETTERS=[['ㄱ','기역','혀뿌리가 목구멍을 막는 모양'],['ㄴ','니은','혀끝이 윗잇몸에 닿는 모양'],['ㅁ','미음','입술을 다문 입 모양'],['ㅅ','시옷','뾰족한 이 모양'],['ㅇ','이응','동그란 목구멍 모양']];
const SUN=[['아침','토끼','🐰','M0 -48 L-36 -44','아침이에요. 해 그림자가 토끼를 가리켜요.'],['한낮','말','🐴','M0 -48 L0 -36','한낮이에요. 해 그림자가 말을 가리켜요.'],['저녁','닭','🐔','M0 -48 L36 -44','저녁이에요. 해 그림자가 닭을 가리켜요.']];
const DRUM=[['종','땡!','시간이 되면 인형이 종을 땡 쳤어요.'],['북','둥!','북을 둥 쳤어요.'],['징','징!','징을 징 울렸어요.']];

/* 시대: 책장 묶음과 시간의 길 */
const ERAS=[
  ['gojoseon','아주아주 먼 옛날','고조선','고조선'],
  ['samguk','먼 옛날','삼국과 남북국','삼국'],
  ['goryeo','옛날','고려','고려'],
  ['joseon','조금 옛날','조선','조선'],
  ['modern','100여 년 전','나라를 되찾던 때','100년 전'],
  ['hyeondae','70여 년 전','할머니 할아버지 어릴 적','70년 전'],
  ['now','지금','우리','지금 우리']];

applyRedraws();
/* 이야기 나누기 뒤에 해 보기 쪽을 붙인다 */
BOOKS.forEach(b=>{if(typeof ACT!=='undefined'&&ACT[b.id]&&!b.pages.some(p=>p.kind==='try'))b.pages.push({kind:'try'})});
/* 책 번호는 불러온 순서(시대 순)대로 매긴다 */
BOOKS.forEach((b,k)=>{b.no=k+1});

/* ---------- 화면 ---------- */
const $=id=>document.getElementById(id);
const stage=$('stage'),body=$('body'),meta=$('meta'),prevB=$('prev'),nextB=$('next'),readB=$('read'),dots=$('dots'),count=$('count'),autoR=$('autoRead');
let book=null,i=0;
const store={get(k){try{return localStorage.getItem(k)}catch(e){return null}},set(k,v){try{localStorage.setItem(k,v)}catch(e){}}};
if(store.get('wiin-auto')==='1') autoR.checked=true;
autoR.addEventListener('change',()=>store.set('wiin-auto',autoR.checked?'1':'0'));
let done={};try{done=JSON.parse(store.get('wiin-done')||'{}')||{}}catch(e){done={}}
let tried={};try{tried=JSON.parse(store.get('wiin-try')||'{}')||{}}catch(e){tried={}}
function markTried(id){tried[id]=tried[id]?0:Date.now();if(!tried[id])delete tried[id];store.set('wiin-try',JSON.stringify(tried))}
function compTally(){const c={};Object.keys(tried).forEach(id=>{const a=ACT[id];if(a)a.c.forEach(k=>c[k]=(c[k]||0)+1)});return c}
function markDone(id){if(!done[id]){done[id]=1;store.set('wiin-done',JSON.stringify(done))}}

const canSpeak='speechSynthesis' in window;
if(!canSpeak) readB.disabled=true;
const plain=t=>t.replace('{no}',book?book.no:'').replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').trim();
function speak(t){
  if(!canSpeak) return;
  try{
    speechSynthesis.cancel();
    const u=new SpeechSynthesisUtterance(plain(t));
    u.lang='ko-KR'; u.rate=.85; u.pitch=1.05;
    const v=speechSynthesis.getVoices().find(v=>v.lang&&v.lang.startsWith('ko')); if(v) u.voice=v;
    u.onstart=()=>readB.classList.add('speaking');
    u.onend=u.onerror=()=>readB.classList.remove('speaking');
    speechSynthesis.speak(u);
  }catch(e){}
}
function stopSpeak(){ if(canSpeak){try{speechSynthesis.cancel()}catch(e){}} readB.classList.remove('speaking'); }
const uniq=(svg,suf)=>svg.replace(/id="([^"]+)"/g,`id="$1${suf}"`).replace(/url\(#([^)]+)\)/g,`url(#$1${suf})`);
/* 책장 표지는 질감 필터를 빼서 가볍게 그린다 */
const thumb=svg=>svg.replace('<g filter="url(#wob)">','<g>').replace(/<rect width="400" height="280" [^>]*filter="url\(#(wash|grain)\)"[^>]*\/>/g,'');

function roadHTML(cur){
  return `<div class="road"><h2>시간의 길</h2><div class="path">${ERAS.map(([id,when,name,short])=>{
    const here=cur&&cur.era===id, list=BOOKS.filter(b=>b.era===id);
    const who=list.map(b=>`<button class="who${cur&&b.id===cur.id?' cur':''}" type="button" data-go="${b.id}">${b.who}</button>`).join('');
    return `<div class="stop${here?' here':''}${id==='now'?' now':''}"><i></i><span class="when">${short}</span>${who?`<span class="whos">${who}</span>`:''}</div>`}).join('')}</div></div>`;
}
function shelf(){
  stopSpeak();
  $('reader').hidden=true; $('shelf').hidden=false;
  const n=Object.keys(done).filter(id=>BOOKS.some(b=>b.id===id)).length;
  $('progress').textContent=n?`별 스티커 ${n}개를 모았어요. ${BOOKS.length}권을 다 읽으면 책장이 반짝반짝!`:`책을 끝까지 읽으면 별 스티커를 받아요.`;
  $('shelf').classList.toggle('allDone',n===BOOKS.length);
  const tc=compTally(), tn=Object.keys(tried).filter(id=>ACT[id]).length;
  $('comptally').innerHTML=tn?`<p>해 본 활동 ${tn}개. 이만큼 자랐어요.</p><div class="bars">${Object.keys(COMP).map(k=>`<span class="bar" title="${COMP_NOTE[k]}"><b style="--c:${COMP[k][1]};--n:${tc[k]||0}"></b><i>${COMP[k][0]} ${tc[k]||0}</i></span>`).join('')}</div>`:`<p>책 끝의 "해 보기"를 하고 "해 봤어요"를 누르면 여기에 쌓여요.</p>`;
  const eras=ERAS.filter(([id])=>id!=='now'&&BOOKS.some(b=>b.era===id));
  $('grid').innerHTML=`<nav class="eranav" aria-label="시대 바로 가기">${eras.map(([id,,name])=>`<button type="button" data-era="${id}">${name}</button>`).join('')}</nav>`+eras.map(([id,when,name])=>{
    const list=BOOKS.filter(b=>b.era===id);
    return `<section class="era" id="era-${id}"><h2><i></i>${name}<small>${when}</small></h2><div class="cards">${list.map(b=>
      `<button class="bookcard" type="button" data-go="${b.id}"><span class="cv">${uniq(thumb(b.pages[0].svg),'-c'+b.id)}${done[b.id]?'<span class="sticker" aria-label="다 읽음">★</span>':''}</span><span class="no">${b.no}권</span><span class="tt">${b.title}</span></button>`).join('')}</div></section>`}).join('');
  window.scrollTo(0,0);
}
function talkHTML(){
  const t=book.talk, nx=BOOKS[book.no%BOOKS.length];
  return `<div class="talk">
<h2 class="talkh">이야기 나누기</h2>
<div class="card"><span class="age">3살과 함께</span><ul>${t.three.map(q=>`<li>${q}</li>`).join('')}</ul></div>
<div class="card"><span class="age">5살과 함께</span><ul>${t.five.map(q=>`<li>${q}</li>`).join('')}</ul></div>
${ACT[book.id]?'':nextCard(nx)}
<p class="note">부모님께: ${t.note}</p></div>`}
const nextCard=nx=>`<div class="card next"><h2>${nx.no===1?'처음 이야기로':'다음 이야기'}: ${nx.who}</h2><p>${nx.teaser}</p><button class="go" type="button" data-go="${nx.id}">${nx.no}권 「${nx.title}」 읽기 →</button></div>`;
const chipC=k=>`<span class="comp" style="--c:${COMP[k][1]}" title="${COMP_NOTE[k]}">${COMP[k][0]}</span>`;
function tryHTML(){
  const a=ACT[book.id], nx=BOOKS[book.no%BOOKS.length], on=!!tried[book.id];
  return `<div class="talk try">
<h2 class="talkh">해 보기: ${a.t}</h2>
<p class="comps">${a.c.map(chipC).join('')}<small>${a.c.map(k=>COMP_NOTE[k]).join(', ')}</small></p>
<div class="card"><span class="age">준비물</span><p>${a.need}</p></div>
<div class="card"><span class="age">3살과 함께</span><p>${a.three}</p></div>
<div class="card"><span class="age">5살과 함께</span><p>${a.five}</p></div>
${a.go?`<div class="card go-card"><span class="age">가 보면 좋은 곳: ${a.go.place}</span><ul class="find">${a.go.find.map(f=>`<li><label><input type="checkbox"> ${f}</label></li>`).join('')}</ul><p class="small">가기 전에 누리집에서 여는 날과 시간을 확인하세요.</p></div>`:''}
<button class="did${on?' on':''}" type="button" id="didB" aria-pressed="${on}">${on?'✓ 해 봤어요':'해 봤어요'}</button>
${nextCard(nx)}</div>`}
function showBook(id,n=0){
  book=BOOKS.find(b=>b.id===id); if(!book){shelf();return}
  $('shelf').hidden=true; $('reader').hidden=false;
  $('btitle').textContent=`${book.no}권 ${book.title}`;
  dots.innerHTML='';
  book.pages.forEach((_,k)=>{const b=document.createElement('button');b.type='button';b.setAttribute('aria-label',`${k+1}쪽`);b.addEventListener('click',()=>render(k,true));dots.appendChild(b)});
  render(n,false); window.scrollTo(0,0);
}
function tilesHTML(items,hint,wide){return `<div class="tiles">${items.map((t,k)=>`<button class="tile${wide?' wide':''}" type="button" data-t="${k}" aria-pressed="false">${t}</button>`).join('')}</div><p class="tip" id="tip">${hint}</p>`}
function render(n,fromUser){
  const P=book.pages; i=Math.max(0,Math.min(P.length-1,n)); const p=P[i];
  stopSpeak();
  if(p.kind==='talk'||p.kind==='try'){stage.hidden=true}
  else{stage.hidden=false;stage.innerHTML=p.svg;stage.setAttribute('aria-label',plain(p.text||''));stage.classList.remove('fade');void stage.offsetWidth;stage.classList.add('fade')}
  if(p.kind==='talk'||p.kind==='end') markDone(book.id);
  meta.innerHTML=(p.chips||[]).map(c=>`<span class="chip">${c}</span>`).join(''); meta.hidden=!(p.chips&&p.chips.length);
  let h=p.kind==='talk'?talkHTML():p.kind==='try'?tryHTML():`<p class="story${p.kind==='cover'?' cover':''}">${p.text.replace('{no}',book.no)}</p>`;
  if(p.kind==='letters') h+=tilesHTML(LETTERS.map(t=>t[0]),'글자를 눌러 보세요.');
  if(p.kind==='sundial') h+=tilesHTML(SUN.map(t=>`${t[0]} ${t[2]}`),'아침, 한낮, 저녁을 눌러 보세요.',true);
  if(p.kind==='clock') h+=tilesHTML(DRUM.map(t=>t[0]),'종, 북, 징을 눌러 보세요.',true);
  if(p.taps) h+=tilesHTML(p.taps.map(t=>t.label),p.tapHint||'그림이나 단추를 눌러 보세요.',true);
  if(p.kind==='end') h+=`<p class="got">★ 별 스티커를 받았어요!</p>`+roadHTML(book);
  body.innerHTML=h;
  $('reader').classList.toggle('nostage',stage.hidden); $('side').querySelector('.sidebody').scrollTop=0;
  const dB=$('didB'); if(dB) dB.addEventListener('click',()=>{markTried(book.id);const on=!!tried[book.id];dB.classList.toggle('on',on);dB.setAttribute('aria-pressed',on);dB.textContent=on?'✓ 해 봤어요':'해 봤어요'});
  body.querySelectorAll('[data-t]').forEach(b=>b.addEventListener('click',()=>pick(p,+b.dataset.t)));
  if(p.taps){const groups={};p.taps.forEach((t,k)=>{if(t.el)(groups[t.el]=groups[t.el]||[]).push(k)});
    Object.entries(groups).forEach(([id,ks])=>{const el=stage.querySelector('#'+id); if(!el) return; let n=0; el.classList.add('tappable');
      el.addEventListener('click',()=>{pick(p,ks[n%ks.length]);n++})});}
  prevB.disabled=i===0;
  nextB.textContent=i===P.length-1?'책장으로 ↺':(i===0?'펼치기 →':'넘기기 →');
  readB.disabled=!canSpeak||p.kind==='talk'||p.kind==='try';
  count.textContent=`${i+1} / ${P.length}`;
  [...dots.children].forEach((d,k)=>d.classList.toggle('on',k===i));
  if(fromUser&&autoR.checked&&p.text) speak(p.text);
}
function press(k){body.querySelectorAll('[data-t]').forEach(b=>b.setAttribute('aria-pressed',+b.dataset.t===k?'true':'false'))}
function wiggle(el){if(!el||el.tagName==='rect')return;el.classList.remove('hit');void el.getBoundingClientRect();el.classList.add('hit')}
function pick(p,k){
  press(k); const tip=$('tip'), kind=p.kind;
  if(p.taps){
    stage.querySelectorAll('.tappable').forEach(e=>e.classList.add('tapped'));
    const t=p.taps[k];
    wiggle(t.el&&stage.querySelector('#'+t.el));
    (t.show||[]).forEach(id=>{const e=stage.querySelector('#'+id); if(e) e.setAttribute('opacity','1')});
    (t.hide||[]).forEach(id=>{const e=stage.querySelector('#'+id); if(e){e.setAttribute('opacity','0');e.style.pointerEvents='none'}});
    tip.innerHTML=`<b>${t.label}</b> ${t.say}`; speak(`${t.label}. ${t.say}`);
  }else if(kind==='letters'){
    LETTERS.forEach((t,j)=>{const el=$('L'+j); if(el) el.setAttribute('fill',j===k?K.red:K.ink)});
    const t=LETTERS[k]; tip.innerHTML=`<b>${t[0]} ${t[1]}</b>: ${t[2]}`; speak(`${t[1]}. ${t[2]}`);
  }else if(kind==='sundial'){
    const t=SUN[k]; const sh=$('shadow'); if(sh) sh.setAttribute('d',t[3]);
    [0,1,2].forEach(j=>{const m=$('mk'+j); if(m) m.setAttribute('opacity',j===k?'1':'.35')});
    tip.innerHTML=`<b>${t[0]}</b>: 그림자가 ${t[1]}${t[2]}를 가리켜요.`; speak(t[4]);
  }else if(kind==='clock'){
    const t=DRUM[k]; wiggle($('inst'+k));
    const bm=$('boom'); if(bm) bm.textContent=t[1];
    tip.innerHTML=`<b>${t[0]} ${t[1]}</b> ${t[2]}`; speak(`${t[1]} ${t[2]}`);
  }
}
document.addEventListener('click',e=>{const b=e.target.closest('[data-go]'); if(b){location.hash=b.dataset.go;return}
  const er=e.target.closest('[data-era]'); if(er){const s=document.getElementById('era-'+er.dataset.era); if(s) s.scrollIntoView({behavior:'smooth',block:'start'})}});
$('back').addEventListener('click',()=>{location.hash='shelf'});
prevB.addEventListener('click',()=>render(i-1,true));
nextB.addEventListener('click',()=>{ if(i===book.pages.length-1) location.hash='shelf'; else render(i+1,true)});
readB.addEventListener('click',()=>{const p=book.pages[i]; if(p.text) speak(p.text)});
document.addEventListener('keydown',e=>{if(!book||$('reader').hidden)return;if(e.key==='ArrowRight')render(i+1,true);if(e.key==='ArrowLeft')render(i-1,true)});
let sx=null;
stage.addEventListener('touchstart',e=>{sx=e.touches[0].clientX},{passive:true});
stage.addEventListener('touchend',e=>{if(sx===null)return;const dx=e.changedTouches[0].clientX-sx;if(Math.abs(dx)>50)render(dx<0?i+1:i-1,true);sx=null});
function route(){const h=location.hash.slice(1); if(BOOKS.some(b=>b.id===h)) showBook(h); else {book=null;shelf()}}
window.addEventListener('hashchange',route);
if(canSpeak){try{speechSynthesis.getVoices()}catch(e){}}
route();
