const LETTERS=[['ㄱ','기역','혀뿌리가 목구멍을 막는 모양'],['ㄴ','니은','혀끝이 윗잇몸에 닿는 모양'],['ㅁ','미음','입술을 다문 입 모양'],['ㅅ','시옷','뾰족한 이 모양'],['ㅇ','이응','동그란 목구멍 모양']];
const SUN=[['아침','토끼','🐰','M0 -48 L-36 -44','아침이에요. 해 그림자가 토끼를 가리켜요.'],['한낮','말','🐴','M0 -48 L0 -36','한낮이에요. 해 그림자가 말을 가리켜요.'],['저녁','닭','🐔','M0 -48 L36 -44','저녁이에요. 해 그림자가 닭을 가리켜요.']];
const DRUM=[['종','땡!','시간이 되면 인형이 종을 땡 쳤어요.'],['북','둥!','북을 둥 쳤어요.'],['징','징!','징을 징 울렸어요.']];

/* ---------- 화면 ---------- */
const $=id=>document.getElementById(id);
const stage=$('stage'),body=$('body'),meta=$('meta'),prevB=$('prev'),nextB=$('next'),readB=$('read'),dots=$('dots'),count=$('count'),autoR=$('autoRead');
let book=null,i=0;
try{ if(localStorage.getItem('wiin-auto')==='1') autoR.checked=true; }catch(e){}
autoR.addEventListener('change',()=>{try{localStorage.setItem('wiin-auto',autoR.checked?'1':'0')}catch(e){}});

const canSpeak='speechSynthesis' in window;
if(!canSpeak) readB.disabled=true;
function speak(t){
  if(!canSpeak) return;
  try{
    speechSynthesis.cancel();
    const u=new SpeechSynthesisUtterance(t.replace('{no}',book?book.no:'').replace(/<[^>]+>/g,' '));
    u.lang='ko-KR'; u.rate=.85; u.pitch=1.05;
    const v=speechSynthesis.getVoices().find(v=>v.lang&&v.lang.startsWith('ko')); if(v) u.voice=v;
    u.onstart=()=>readB.classList.add('speaking');
    u.onend=u.onerror=()=>readB.classList.remove('speaking');
    speechSynthesis.speak(u);
  }catch(e){}
}
function stopSpeak(){ if(canSpeak){try{speechSynthesis.cancel()}catch(e){}} readB.classList.remove('speaking'); }
const uniq=(svg,suf)=>svg.replace(/id="([^"]+)"/g,`id="$1${suf}"`).replace(/url\(#([^)]+)\)/g,`url(#$1${suf})`);

const ERAS=[['gojoseon','아주아주<br>먼 옛날<br>고조선'],['samguk','고구려<br>백제·신라'],['joseon','조선'],['modern','100여 년 전'],['now','지금<br>우리']];
function roadHTML(cur){
  return `<div class="road"><h2>시간의 길</h2><div class="path">${ERAS.map(([id,label])=>{
    const here=cur&&cur.era===id, list=BOOKS.filter(b=>b.era===id);
    const who=list.map(b=>`<button class="who${cur&&b.id===cur.id?' cur':''}" type="button" data-go="${b.id}">${b.who}</button>`).join('');
    return `<div class="stop${here?' here':''}${id==='now'?' now':''}"><i></i>${label}${who?`<span class="whos">${who}</span>`:''}</div>`}).join('')}</div></div>`;
}
function shelf(){
  stopSpeak();
  $('reader').hidden=true; $('shelf').hidden=false;
  $('grid').innerHTML=BOOKS.map(b=>`<button class="bookcard" type="button" data-go="${b.id}"><span class="cv">${uniq(b.pages[0].svg,'-c'+b.id)}</span><span class="no">${b.no}권</span><span class="tt">${b.title}</span></button>`).join('')
   ;
  $('shelfRoad').innerHTML=roadHTML(null);
  window.scrollTo(0,0);
}
function talkHTML(t){const f=BOOKS.find(b=>b.id===t.friend.go);return `<div class="talk">
<h2 style="font-size:24px">이야기 나누기</h2>
<div class="card"><span class="age">3살과 함께</span><ul>${t.three.map(q=>`<li>${q}</li>`).join('')}</ul></div>
<div class="card"><span class="age">5살과 함께</span><ul>${t.five.map(q=>`<li>${q}</li>`).join('')}</ul></div>
<div class="card next"><h2>${t.friend.title||'이어지는 이야기'}: ${t.friend.name}</h2><p>${t.friend.text}</p>${f?`<button class="go" type="button" data-go="${f.id}">${f.no}권 「${f.title}」 읽기 →</button>`:''}</div>
<p class="note">부모님께: ${t.note}</p></div>`}
function showBook(id,n=0){
  book=BOOKS.find(b=>b.id===id); if(!book){shelf();return}
  $('shelf').hidden=true; $('reader').hidden=false;
  $('btitle').textContent=book.title;
  dots.innerHTML='';
  book.pages.forEach((_,k)=>{const b=document.createElement('button');b.type='button';b.setAttribute('aria-label',`${k+1}쪽`);b.addEventListener('click',()=>render(k,true));dots.appendChild(b)});
  render(n,false); window.scrollTo(0,0);
}
function render(n,fromUser){
  const P=book.pages; i=Math.max(0,Math.min(P.length-1,n)); const p=P[i];
  stopSpeak();
  if(p.kind==='talk'){stage.hidden=true}
  else{stage.hidden=false;stage.innerHTML=p.svg;stage.classList.remove('fade');void stage.offsetWidth;stage.classList.add('fade')}
  meta.innerHTML=(p.chips||[]).map(c=>`<span class="chip">${c}</span>`).join(''); meta.hidden=!(p.chips&&p.chips.length);
  let h=p.kind==='talk'?talkHTML(book.talk):`<p class="story${p.kind==='cover'?' cover':''}">${p.text.replace('{no}',book.no)}</p>`;
  if(p.kind==='letters') h+=`<div class="tiles">${LETTERS.map((t,k)=>`<button class="tile" type="button" data-t="${k}" aria-pressed="false">${t[0]}</button>`).join('')}</div><p class="tip" id="tip">글자를 눌러 보세요.</p>`;
  if(p.kind==='sundial') h+=`<div class="tiles">${SUN.map((t,k)=>`<button class="tile wide" type="button" data-t="${k}" aria-pressed="false">${t[0]} ${t[2]}</button>`).join('')}</div><p class="tip" id="tip">아침, 한낮, 저녁을 눌러 보세요.</p>`;
  if(p.kind==='clock') h+=`<div class="tiles">${DRUM.map((t,k)=>`<button class="tile wide" type="button" data-t="${k}" aria-pressed="false">${t[0]}</button>`).join('')}</div><p class="tip" id="tip">종, 북, 징을 눌러 보세요.</p>`;
  if(p.kind==='end') h+=roadHTML(book);
  body.innerHTML=h;
  body.querySelectorAll('[data-t]').forEach(b=>b.addEventListener('click',()=>pick(p.kind,+b.dataset.t)));
  prevB.disabled=i===0;
  nextB.textContent=i===P.length-1?'책장으로 ↺':(i===0?'펼치기 →':'넘기기 →');
  readB.disabled=!canSpeak||p.kind==='talk';
  count.textContent=`${i+1} / ${P.length}`;
  [...dots.children].forEach((d,k)=>d.classList.toggle('on',k===i));
  if(fromUser&&autoR.checked&&p.text) speak(p.text);
}
function press(k){body.querySelectorAll('[data-t]').forEach(b=>b.setAttribute('aria-pressed',+b.dataset.t===k?'true':'false'))}
function pick(kind,k){
  press(k); const tip=$('tip');
  if(kind==='letters'){
    LETTERS.forEach((t,j)=>{const el=$('L'+j); if(el) el.setAttribute('fill',j===k?K.red:K.ink)});
    const t=LETTERS[k]; tip.innerHTML=`<b>${t[0]} ${t[1]}</b>: ${t[2]}`; speak(`${t[1]}. ${t[2]}`);
  }else if(kind==='sundial'){
    const t=SUN[k]; const sh=$('shadow'); if(sh) sh.setAttribute('d',t[3]);
    [0,1,2].forEach(j=>{const m=$('mk'+j); if(m) m.setAttribute('opacity',j===k?'1':'.35')});
    tip.innerHTML=`<b>${t[0]}</b>: 그림자가 ${t[1]}${t[2]}를 가리켜요.`; speak(t[4]);
  }else if(kind==='clock'){
    const t=DRUM[k]; const el=$('inst'+k);
    if(el){el.classList.remove('hit');void el.getBoundingClientRect();el.classList.add('hit')}
    const bm=$('boom'); if(bm) bm.textContent=t[1];
    tip.innerHTML=`<b>${t[0]} ${t[1]}</b> ${t[2]}`; speak(`${t[1]} ${t[2]}`);
  }
}
document.addEventListener('click',e=>{const b=e.target.closest('[data-go]'); if(b){location.hash=b.dataset.go}});
$('back').addEventListener('click',()=>{location.hash='shelf'});
prevB.addEventListener('click',()=>render(i-1,true));
nextB.addEventListener('click',()=>{ if(i===book.pages.length-1) location.hash='shelf'; else render(i+1,true)});
readB.addEventListener('click',()=>{const p=book.pages[i]; if(p.text) speak(p.text)});
document.addEventListener('keydown',e=>{if(!book||$('reader').hidden)return;if(e.key==='ArrowRight')render(i+1,true);if(e.key==='ArrowLeft')render(i-1,true)});
let sx=null;
stage.addEventListener('touchstart',e=>{sx=e.touches[0].clientX},{passive:true});
stage.addEventListener('touchend',e=>{if(sx===null)return;const dx=e.changedTouches[0].clientX-sx;if(Math.abs(dx)>50)render(dx<0?i+1:i-1,true);sx=null});
BOOKS.sort((x,y)=>x.no-y.no);
function route(){const h=location.hash.slice(1); if(BOOKS.some(b=>b.id===h)) showBook(h); else {book=null;shelf()}}
window.addEventListener('hashchange',route);
if(canSpeak){try{speechSynthesis.getVoices()}catch(e){}}
route();
