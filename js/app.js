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
/* 읽어주기: 문장 단위로 나눠 차례로 읽는다(긴 글을 한 번에 읽으면 중간에 끊기는 브라우저가 있다) */
let spTok=0;
function speak(t,onDone){
  const tok=++spTok; const fin=()=>{if(tok!==spTok)return;spTok++;readB.classList.remove('speaking');onDone&&onDone()};
  const parts=plain(t).split(/(?<=[.!?…])\s+/).filter(Boolean);
  if(!canSpeak||!parts.length){if(onDone)setTimeout(()=>tok===spTok&&fin(),Math.max(2500,plain(t).length*170));return}
  try{speechSynthesis.cancel()}catch(e){}
  const v=speechSynthesis.getVoices().find(v=>v.lang&&v.lang.startsWith('ko'));
  let k=0,guard=null;
  const next=()=>{clearTimeout(guard); if(tok!==spTok)return; if(k>=parts.length){fin();return}
    const txt=parts[k++]; const u=new SpeechSynthesisUtterance(txt);
    u.lang='ko-KR'; u.rate=.85; u.pitch=1.05; if(v) u.voice=v;
    u.onstart=()=>readB.classList.add('speaking');
    u.onend=u.onerror=()=>{if(tok===spTok)setTimeout(next,250)};
    /* onend가 오지 않는 경우를 대비한 안전 시간 */
    guard=setTimeout(()=>{if(tok===spTok){try{speechSynthesis.cancel()}catch(e){}next()}},txt.length*260+4000);
    try{speechSynthesis.speak(u)}catch(e){next()}};
  next();
}
function stopSpeak(){ spTok++; if(canSpeak){try{speechSynthesis.cancel()}catch(e){}} readB.classList.remove('speaking'); }

/* 저절로 넘기며 읽기: 글을 읽고, 누르기 장면이면 하나씩 눌러 보여 주고, 잠깐 쉬었다가 다음 쪽으로 */
const autoB=$('autoPlay'); let auto=false,autoT=null,wake=null;
function setAuto(on){auto=on; clearTimeout(autoT); resumeNext=false; autoB.classList.remove('wait');
  autoB.classList.toggle('on',on); autoB.setAttribute('aria-pressed',on); autoB.textContent=on?'⏸ 멈추기':'▶ 저절로 읽기';
  if(on){try{navigator.wakeLock&&navigator.wakeLock.request('screen').then(w=>wake=w).catch(()=>{})}catch(e){}}
  else{stopSpeak(); try{wake&&wake.release()}catch(e){} wake=null}}
let resumeNext=false;
function pauseAuto(){setAuto(false); resumeNext=true; autoB.textContent='▶ 이어서 읽기'; autoB.classList.add('wait')}
function runAuto(){clearTimeout(autoT); if(!auto||!book)return; const p=book.pages[i], here=i;
  if(p.kind==='talk'||p.kind==='try'){setAuto(false);return}
  const ok=()=>auto&&book&&i===here;
  const turn=()=>{if(!ok())return; if(p.kind==='end'){setAuto(false);return}
    autoT=setTimeout(()=>{if(ok())render(i+1,false)},1600)};
  const taps=p.taps?p.taps.map((_,k)=>k):p.kind==='letters'?LETTERS.map((_,k)=>k):p.kind==='sundial'?SUN.map((_,k)=>k):p.kind==='clock'?DRUM.map((_,k)=>k):[];
  let turn2=null;
  const tapNext=()=>{if(!ok())return; if(!taps.length){(turn2||turn)();return} const k=taps.shift(); autoT=setTimeout(()=>{if(ok())pick(p,k,tapNext)},700)};
  const th=THINK[book.id];
  const say=(p.text||'')+(p.kind==='cover'&&th?` 읽으면서 알아봐요. ${th.q}`:'');
  if(th&&here===th.p){turn2=()=>{if(!ok())return; speak(`잠깐! 생각해 봐요. ${th.q}`,()=>{if(!ok())return; pauseAuto()})}}
  autoT=setTimeout(()=>{if(ok())speak(say,tapNext)},500);
}
$('tellB').addEventListener('click',()=>setTell(!tell));
autoB.addEventListener('click',()=>{if(resumeNext&&!auto){resumeNext=false;setAuto(true);render(i+1,false);return} setAuto(!auto); if(auto){const p=book.pages[i]; if(p.kind==='talk'||p.kind==='try'||p.kind==='end')render(0,false); else runAuto()}});
const uniq=(svg,suf)=>svg.replace(/id="([^"]+)"/g,`id="$1${suf}"`).replace(/url\(#([^)]+)\)/g,`url(#$1${suf})`);
/* 책장 표지는 질감 필터를 빼서 가볍게 그린다 */
const thumb=svg=>svg.replace('<g filter="url(#wob)">','<g>').replace(/<rect width="400" height="280" [^>]*filter="url\(#(wash|grain)\)"[^>]*\/>/g,'');

function roadHTML(cur){
  return `<div class="road"><h2>시간의 길</h2><div class="path">${ERAS.map(([id,when,name,short])=>{
    const here=cur&&cur.era===id, list=BOOKS.filter(b=>b.era===id);
    const who=list.map(b=>`<button class="who${cur&&b.id===cur.id?' cur':''}" type="button" data-go="${b.id}">${b.who}</button>`).join('');
    return `<div class="stop${here?' here':''}${id==='now'?' now':''}"><i></i><span class="when">${short}</span>${who?`<span class="whos">${who}</span>`:''}</div>`}).join('')}</div></div>`;
}
/* 위인 도감: 다 읽은 위인은 물건과 기술이 보이고, 아직 못 만난 위인은 그림자로 */
let dexType='';
function dexHTML(){
  const met=BOOKS.filter(b=>done[b.id]).length;
  const list=BOOKS.filter(b=>!dexType||(WIIN_DEX[b.id]||[])[0]===dexType);
  return `<details class="dex" ${dexOpen?'open':''}><summary>📇 위인 도감 <b>${met} / ${BOOKS.length}</b></summary>
<div class="dextypes"><button type="button" data-dt="" class="${dexType?'':'on'}">전체</button>${Object.entries(WIIN_TYPES).map(([k,[n,e,c]])=>`<button type="button" data-dt="${k}" class="${dexType===k?'on':''}" style="--c:${c}">${e} ${n} ${BOOKS.filter(b=>(WIIN_DEX[b.id]||[])[0]===k&&done[b.id]).length}/${BOOKS.filter(b=>(WIIN_DEX[b.id]||[])[0]===k).length}</button>`).join('')}</div>
<div class="dexgrid">${list.map(b=>{const d=WIIN_DEX[b.id]||['heart','','📖',''],T=WIIN_TYPES[d[0]],m=!!done[b.id];
  return `<button type="button" class="dexc${m?'':' unmet'}" data-go="${b.id}" style="--c:${T[2]}"><small>No.${String(b.no).padStart(3,'0')}</small><span class="dx-e">${m?d[2]:'?'}</span><b>${m?b.who:'???'}</b><span class="dx-t">${T[1]} ${T[0]}</span><span class="dx-s">${m?d[1]:'책을 읽으면 알 수 있어요'}</span></button>`}).join('')}</div></details>`}
let dexOpen=false;
document.addEventListener('click',e=>{const t=e.target.closest('[data-dt]');if(!t)return;dexType=t.dataset.dt;dexOpen=true;$('dexwrap').innerHTML=dexHTML()});
document.addEventListener('toggle',e=>{if(e.target.classList&&e.target.classList.contains('dex'))dexOpen=e.target.open},true);
function shelf(){
  stopSpeak();
  $('reader').hidden=true; $('shelf').hidden=false;
  const n=Object.keys(done).filter(id=>BOOKS.some(b=>b.id===id)).length;
  $('progress').textContent=n?`별 스티커 ${n}개를 모았어요. ${BOOKS.length}권을 다 읽으면 책장이 반짝반짝!`:`책을 끝까지 읽으면 별 스티커를 받아요.`;
  $('shelf').classList.toggle('allDone',n===BOOKS.length);
  const tc=compTally(), tn=Object.keys(tried).filter(id=>ACT[id]).length;
  $('comptally').innerHTML=tn?`<p>해 본 활동 ${tn}개. 이만큼 자랐어요.</p><div class="bars">${Object.keys(COMP).map(k=>`<span class="bar" title="${COMP_NOTE[k]}"><b style="--c:${COMP[k][1]};--n:${tc[k]||0}"></b><i>${COMP[k][0]} ${tc[k]||0}</i></span>`).join('')}</div>`:`<p>책 끝의 "해 보기"를 하고 "해 봤어요"를 누르면 여기에 쌓여요.</p>`;
  $('dexwrap').innerHTML=dexHTML();
  const eras=ERAS.filter(([id])=>id!=='now'&&BOOKS.some(b=>b.era===id));
  $('grid').innerHTML=`<nav class="eranav" aria-label="시대 바로 가기">${eras.map(([id,,name])=>`<button type="button" data-era="${id}">${name}</button>`).join('')}</nav>`+eras.map(([id,when,name])=>{
    const list=BOOKS.filter(b=>b.era===id);
    return `<section class="era" id="era-${id}"><h2><i></i>${name}<small>${when}</small></h2><div class="cards">${list.map(b=>
      `<button class="bookcard" type="button" data-go="${b.id}"><span class="cv">${uniq(thumb(b.pages[0].svg),'-c'+b.id)}${done[b.id]?'<span class="sticker" aria-label="다 읽음">★</span>':''}</span><span class="no">${b.no}권</span><span class="tt">${b.title}</span></button>`).join('')}</div></section>`}).join('');
  window.scrollTo(0,0);
}
function talkHTML(){
  const t=book.talk, nx=BOOKS[book.no%BOOKS.length];
  /* 생각 멈춤에서 이미 물은 것과 가장 덜 겹치는 질문을 오늘의 질문으로 고른다 */
  const big=x=>new Set([...x.replace(/[^가-힣]/g,'')].map((c,k,a)=>c+(a[k+1]||''))), th=THINK[book.id];
  const sim=q=>{if(!th)return 0;const A=big(q),B=big(th.q);let n=0;A.forEach(x=>{if(B.has(x))n++});return n/Math.min(A.size,B.size)};
  const pickI=t.five.map((q,k)=>[sim(q),k]).sort((a,b)=>a[0]-b[0]||a[1]-b[1])[0][1];
  const q1=t.five[pickI], rest=t.five.filter((_,k)=>k!==pickI);
  /* 질문은 하나만 보이고, 나머지는 더 이야기하고 싶을 때 펼친다 */
  return `<div class="talk">
<h2 class="talkh">이야기 나누기</h2>
<div class="card"><span class="age">오늘의 질문 하나</span><p class="q1">${q1}</p>
<details class="more"><summary>더 이야기하고 싶으면</summary><ul>${rest.map(q=>`<li>${q}</li>`).join('')}</ul><span class="age">더 쉬운 질문</span><ul>${t.three.map(q=>`<li>${q}</li>`).join('')}</ul></details></div>
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
  seenP=new Set(); prevI=-1;
  tell=false; const tb=$('tellB'); tb.classList.remove('on'); tb.setAttribute('aria-pressed','false'); tb.textContent='🗣 네가 들려줘';
  render(n,false); window.scrollTo(0,0);
}
let tell=false;
const storyPage=p=>!!p.text&&!['cover','end','talk','try'].includes(p.kind);
function tellHTML(p){const P=book.pages, story=P.map((q,k)=>(!q.kind&&q.text)?k:-1).filter(k=>k>=0), pos=story.indexOf(i);
  /* 물음은 첫 쪽과 마지막 쪽에만. 생각 멈춤 쪽은 그 질문 카드가 대신하고, 나머지 쪽은 그림만 보며 이어 간다 */
  const ask=pos===0?TELL.first:pos===story.length-1?TELL.last:'';
  return `${ask?`<p class="story tell">🗣 ${ask}</p>`:''}<details class="peek"><summary>엄마 아빠가 볼 원래 문장</summary><p>${p.text}</p></details>`}
function setTell(on){tell=on; if(on&&auto)setAuto(false); const b=$('tellB'); b.classList.toggle('on',on); b.setAttribute('aria-pressed',on); b.textContent=on?'📖 다시 읽어 주기':'🗣 네가 들려줘'; render(i,false)}
function tilesHTML(items,hint,wide){return `<div class="tiles">${items.map((t,k)=>`<button class="tile${wide?' wide':''}" type="button" data-t="${k}" aria-pressed="false">${t}</button>`).join('')}</div><p class="tip" id="tip">${hint}</p>`}
/* 포켓몬 마을 선물: 이야기 쪽을 70% 넘게 2.5초 이상 보거나 저절로 읽기로 들었을 때만 "읽음"으로 쳐요 */
let seenP=new Set(), enterT=0, prevI=-1;
function noteDwell(){if(book&&prevI>=0&&storyPage(book.pages[prevI])&&(auto||Date.now()-enterT>=2500))seenP.add(prevI)}
function render(n,fromUser){
  noteDwell();
  const P=book.pages; i=Math.max(0,Math.min(P.length-1,n)); const p=P[i]; prevI=i; enterT=Date.now();
  if(fromUser&&resumeNext){resumeNext=false;autoB.textContent='▶ 저절로 읽기';autoB.classList.remove('wait')}
  stopSpeak();
  if(p.kind==='talk'||p.kind==='try'){stage.hidden=true}
  else{stage.hidden=false;stage.innerHTML=p.svg;stage.setAttribute('aria-label',plain(p.text||''));stage.classList.remove('fade');void stage.offsetWidth;stage.classList.add('fade')}
  if(p.kind==='talk'||p.kind==='end') markDone(book.id);
  meta.innerHTML=(p.chips||[]).map(c=>`<span class="chip">${c}</span>`).join(''); meta.hidden=!(p.chips&&p.chips.length);
  const th=THINK[book.id], isStory=storyPage(p);
  let h=p.kind==='talk'?talkHTML():p.kind==='try'?tryHTML():(tell&&isStory)?tellHTML(p):`<p class="story${p.kind==='cover'?' cover':''}">${p.text.replace('{no}',book.no)}</p>`;
  if(p.kind==='cover'&&th) h+=`<div class="think pre"><b>🤔 읽으면서 알아봐요</b><p>${th.q}</p></div>`;
  if(p.kind==='cover'&&done[book.id]&&!tell) h+=`<button class="tellnudge" type="button" id="tellGo">🗣 다 읽은 책이에요. 이번엔 네가 들려줄래?</button>`;
  if(th&&i===th.p) h+=`<div class="think"><b>🤔 잠깐! 생각해 봐요</b><p>${th.q}</p><small>생각해 보고 넘겨도 되고, 그냥 넘겨도 돼요.</small></div>`;
  if(p.kind==='letters') h+=tilesHTML(LETTERS.map(t=>t[0]),'글자를 눌러 보세요.');
  if(p.kind==='sundial') h+=tilesHTML(SUN.map(t=>`${t[0]} ${t[2]}`),'아침, 한낮, 저녁을 눌러 보세요.',true);
  if(p.kind==='clock') h+=tilesHTML(DRUM.map(t=>t[0]),'종, 북, 징을 눌러 보세요.',true);
  if(p.taps) h+=tilesHTML(p.taps.map(t=>t.label),p.tapHint||'그림이나 단추를 눌러 보세요.',true);
  if(p.kind==='end'){
    const nStory=P.filter(storyPage).length, wasRead=!!(wbLoad().books[book.id]||{}).read;
    if(seenP.size>=Math.ceil(nStory*.7)) wbMark(book,'read');
    const nowRead=!!(wbLoad().books[book.id]||{}).read, told=!!(wbLoad().books[book.id]||{}).told;
    h+=`<p class="got">★ 별 스티커를 받았어요!</p>`;
    if(nowRead&&!wasRead) {const d=WIIN_DEX[book.id]||[];h+=`<p class="gift">🎁 포켓몬 마을 박물관에 새 전시품이 생겨요: ${d[2]||''} ${d[3]||book.who}</p>`}
    if(tell) h+=`<button class="did${told?' on':''}" type="button" id="toldB" aria-pressed="${told}">${told?'✓ 이야기를 들려줬어요':'🗣 아이가 이야기를 들려줬어요'}</button><p class="note">부모님이 눌러 주세요. 포켓몬 마을에 선물이 가요.</p>`;
    h+=roadHTML(book);
  }
  body.innerHTML=h;
  const tdB=$('toldB'); if(tdB) tdB.addEventListener('click',()=>{if((wbLoad().books[book.id]||{}).told)return; wbMark(book,'told'); tdB.classList.add('on'); tdB.setAttribute('aria-pressed','true'); tdB.textContent='✓ 이야기를 들려줬어요'});
  const tg=$('tellGo'); if(tg) tg.addEventListener('click',()=>{setTell(true);render(1,false)});
  $('reader').classList.toggle('nostage',stage.hidden); $('side').querySelector('.sidebody').scrollTop=0;
  const dB=$('didB'); if(dB) dB.addEventListener('click',()=>{markTried(book.id);const on=!!tried[book.id];wbMark(book,'tried',on);dB.classList.toggle('on',on);dB.setAttribute('aria-pressed',on);dB.textContent=on?'✓ 해 봤어요':'해 봤어요'});
  body.querySelectorAll('[data-t]').forEach(b=>b.addEventListener('click',()=>{setAuto(false);pick(p,+b.dataset.t)}));
  if(p.taps){const groups={};p.taps.forEach((t,k)=>{if(t.el)(groups[t.el]=groups[t.el]||[]).push(k)});
    Object.entries(groups).forEach(([id,ks])=>{const el=stage.querySelector('#'+id); if(!el) return; let n=0; el.classList.add('tappable');
      el.addEventListener('click',()=>{setAuto(false);pick(p,ks[n%ks.length]);n++})});}
  prevB.disabled=i===0;
  nextB.textContent=i===P.length-1?'책장으로 ↺':(i===0?'펼치기 →':'넘기기 →');
  readB.disabled=!canSpeak||p.kind==='talk'||p.kind==='try';
  count.textContent=`${i+1} / ${P.length}`;
  [...dots.children].forEach((d,k)=>d.classList.toggle('on',k===i));
  if(auto) runAuto(); else if(fromUser&&autoR.checked&&p.text&&!(tell&&storyPage(p))) speak(p.text);
  autoB.hidden=tell||p.kind==='talk'||p.kind==='try'; $('tellB').hidden=p.kind==='talk'||p.kind==='try';
}
function press(k){body.querySelectorAll('[data-t]').forEach(b=>b.setAttribute('aria-pressed',+b.dataset.t===k?'true':'false'))}
function wiggle(el){if(!el||el.tagName==='rect')return;el.classList.remove('hit');void el.getBoundingClientRect();el.classList.add('hit')}
function pick(p,k,onDone){
  press(k); const tip=$('tip'), kind=p.kind;
  if(p.taps){
    stage.querySelectorAll('.tappable').forEach(e=>e.classList.add('tapped'));
    const t=p.taps[k];
    wiggle(t.el&&stage.querySelector('#'+t.el));
    (t.show||[]).forEach(id=>{const e=stage.querySelector('#'+id); if(e) e.setAttribute('opacity','1')});
    (t.hide||[]).forEach(id=>{const e=stage.querySelector('#'+id); if(e){e.setAttribute('opacity','0');e.style.pointerEvents='none'}});
    tip.innerHTML=`<b>${t.label}</b> ${t.say}`; speak(`${t.label}. ${t.say}`,onDone);
  }else if(kind==='letters'){
    LETTERS.forEach((t,j)=>{const el=$('L'+j); if(el) el.setAttribute('fill',j===k?K.red:K.ink)});
    const t=LETTERS[k]; tip.innerHTML=`<b>${t[0]} ${t[1]}</b>: ${t[2]}`; speak(`${t[1]}. ${t[2]}`,onDone);
  }else if(kind==='sundial'){
    const t=SUN[k]; const sh=$('shadow'); if(sh) sh.setAttribute('d',t[3]);
    [0,1,2].forEach(j=>{const m=$('mk'+j); if(m) m.setAttribute('opacity',j===k?'1':'.35')});
    tip.innerHTML=`<b>${t[0]}</b>: 그림자가 ${t[1]}${t[2]}를 가리켜요.`; speak(t[4],onDone);
  }else if(kind==='clock'){
    const t=DRUM[k]; wiggle($('inst'+k));
    const bm=$('boom'); if(bm) bm.textContent=t[1];
    tip.innerHTML=`<b>${t[0]} ${t[1]}</b> ${t[2]}`; speak(`${t[1]} ${t[2]}`,onDone);
  }
}
document.addEventListener('click',e=>{const b=e.target.closest('[data-go]'); if(b){location.hash=b.dataset.go;return}
  const er=e.target.closest('[data-era]'); if(er){const s=document.getElementById('era-'+er.dataset.era); if(s) s.scrollIntoView({behavior:'smooth',block:'start'})}});
$('back').addEventListener('click',()=>{setAuto(false);location.hash='shelf'});
prevB.addEventListener('click',()=>render(i-1,true));
nextB.addEventListener('click',()=>{ if(i===book.pages.length-1) location.hash='shelf'; else render(i+1,true)});
readB.addEventListener('click',()=>{setAuto(false);const p=book.pages[i]; if(tell&&storyPage(p)){const t=body.querySelector('.story.tell');if(t)speak(t.textContent.replace('🗣',''));return} if(p.text) speak(p.text)});
document.addEventListener('keydown',e=>{if(!book||$('reader').hidden)return;if(e.key==='ArrowRight')render(i+1,true);if(e.key==='ArrowLeft')render(i-1,true)});
let sx=null;
stage.addEventListener('touchstart',e=>{sx=e.touches[0].clientX},{passive:true});
stage.addEventListener('touchend',e=>{if(sx===null)return;const dx=e.changedTouches[0].clientX-sx;if(Math.abs(dx)>50)render(dx<0?i+1:i-1,true);sx=null});
function route(){const h=location.hash.slice(1); if(auto)setAuto(false); if(BOOKS.some(b=>b.id===h)) showBook(h); else {book=null;shelf()}}
window.addEventListener('hashchange',route);
if(canSpeak){try{speechSynthesis.getVoices()}catch(e){}}
/* 연결 전에 읽은 책과 해 본 활동도 포켓몬 마을에 알려요 (한 번만) */
if(!store.get('wiin-bridge-seeded')){BOOKS.forEach(b=>{if(done[b.id])wbMark(b,'read');if(tried[b.id])wbMark(b,'tried')});store.set('wiin-bridge-seeded','1')}
route();
