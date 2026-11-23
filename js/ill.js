/* 새 일러스트: img/ill/<책id>-<쪽>.webp 가 있는 쪽은 그 그림으로 보여 준다 (목록은 js/ill-index.js).
   부모님 칸의 "새 그림으로 보기"를 끄면 예전 그림으로 돌아간다 (localStorage 'wiin-pilot').
   그림은 Figma 이미지 생성으로 만들었다. 끝 장면은 표지 그림을 다시 쓴다.
   누르기 장면은 그림 위에 투명한 칸(.ill-tap)을 얹어 예전 누르기 id를 그대로 쓴다.
   칸 위치는 ILL_TAPS에 따로 적은 것이 없으면, 누를 대상이 둘이면 왼쪽 반 · 오른쪽 반, 셋이면 세 칸, 하나면 가운데. */
const ILL_TAPS={
 'yisunsin-4':{tGen:[4,62,128,214],tShip:[140,92,256,136]},
 'yugwansun-3':{tFlags:[2,12,164,94],tGs:[186,110,156,170]},
 'seokbong-6':{dark:[150,8,100,84],tTteok:[4,96,190,180],tGeul:[206,96,190,180]}
 ,'jusigyeong-4':{tSg:[48,15,302,128]}};
/* 글자·해시계·자격루처럼 그림 위에서 바뀌는 것이 있는 쪽은 새 그림(글자 없는 배경) 위에 바뀌는 부분만 SVG로 얹는다.
   id(L0~L4, mk0~2·shadow, inst0~2·boom, noSpace·goodSpace·badSpace)는 app.js의 pick()이 쓰는 이름 그대로다. */
const ILL_INK='font-family="Jua,sans-serif" text-anchor="middle"';
const ILL_OVER={
 'sejong-6':[['ㄱ',92,112],['ㄴ',170,112],['ㅁ',72,206],['ㅅ',131,206],['ㅇ',190,206]].map(([c,x,y],k)=>`<text id="L${k}" x="${x}" y="${y}" ${ILL_INK} font-size="62" fill="#2E3A55" opacity=".92">${c}</text>`).join(''),
 'yeongsil-6':`<g transform="translate(56 106.6) scale(1.15)"><circle cx="0" cy="-44" r="42" fill="#8A6B3E" stroke="#4A3220" stroke-width="2"/><circle cx="0" cy="-44" r="36" fill="#F6ECD2"/>`
  +`<path d="M0 -48 L-34 -48 M0 -48 L-24 -24 M0 -48 L0 -14 M0 -48 L24 -24 M0 -48 L34 -48" stroke="#C9A86A" stroke-width="1.2"/>`
  +`<g id="mk0"><text x="-26" y="-34" font-size="15" text-anchor="middle">🐰</text></g><g id="mk1"><text x="0" y="-20" font-size="15" text-anchor="middle">🐴</text></g><g id="mk2"><text x="26" y="-34" font-size="15" text-anchor="middle">🐔</text></g>`
  +`<path id="shadow" d="M0 -48 L-36 -44" stroke="#1E140A" stroke-width="3" stroke-linecap="round" opacity=".85"/><circle cx="0" cy="-48" r="3" fill="#4A3220"/></g>`,
 'yeongsil-7':[[264,72,20,28],[296,68,32,28],[338,62,24,28]].map(([x,y,w,h],k)=>`<g id="inst${k}" class="ill-tap"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="8" fill="#FFFFFF" fill-opacity="0" stroke="#F3D99B" stroke-width="3" stroke-opacity="0"/></g>`).join('')
  +`<text id="boom" x="306" y="40" ${ILL_INK} font-size="30" fill="#C9473B" stroke="#FFF8EC" stroke-width="5" paint-order="stroke"></text>`,
 'jusigyeong-4':`<g id="noSpace"><text x="199" y="88" ${ILL_INK} font-size="25" fill="#FFFDF6">아버지가방에들어가신다</text></g>`
  +`<g id="goodSpace" opacity="0"><text x="199" y="88" ${ILL_INK} font-size="25" fill="#FFFDF6">아버지가 방에 들어가신다</text></g>`
  +`<g id="badSpace" opacity="0"><text x="199" y="88" ${ILL_INK} font-size="25" fill="#F6D24A">아버지 가방에 들어가신다</text></g>`};
const ILL_KEEP=new Set();
let PILOT_ON=true; try{PILOT_ON=localStorage.getItem('wiin-pilot')!=='0'}catch(e){}
function illTaps(id,i,p){
  if(ILL_TAPS[`${id}-${i}`]) return ILL_TAPS[`${id}-${i}`];
  const els=p.taps?[...new Set(p.taps.map(t=>t.el))]:[]; const o={};
  if(els.length===1) o[els[0]]=[50,20,300,250];
  else els.forEach((e,k)=>{const w=392/els.length;o[e]=[4+k*w,10,w-6,262]});
  return o}
const illSrc=(id,i)=>(typeof ILL_SRC!=='undefined'&&ILL_SRC[`${id}-${i}`])||`img/ill/${id}-${i}.webp`;
/* ILL_SPRITE가 있으면(아티팩트처럼 파일 수가 제한된 곳) 책 한 권의 그림을 세로로 이은 한 장에서 i번째 칸만 잘라 보여 준다. */
function illImg(id,i){
  const s=typeof ILL_SPRITE!=='undefined'&&ILL_SPRITE[id], k=s?s.p.indexOf(i):-1;
  if(k<0) return `<image href="${illSrc(id,i)}" x="0" y="0" width="400" height="280" preserveAspectRatio="xMidYMid slice"/>`;
  return `<svg x="0" y="0" width="400" height="280" viewBox="0 ${k*700} 1050 700" preserveAspectRatio="xMidYMid slice"><image href="${s.src}" x="0" y="0" width="1050" height="${s.p.length*700}"/></svg>`}
/* 끝 뒤 '지금 우리 곁에서' 카드 그림: img/now/<id>.webp (아티팩트에서는 묶음 그림의 'now' 칸) */
function nowSVG(id){
  if(!PILOT_ON) return '';
  const s=typeof ILL_SPRITE!=='undefined'&&ILL_SPRITE[id], k=s?s.p.indexOf('now'):-1;
  const img=k<0?`<image href="img/now/${id}.webp" x="0" y="0" width="400" height="280" preserveAspectRatio="xMidYMid slice"/>`
    :`<svg x="0" y="0" width="400" height="280" viewBox="0 ${k*700} 1050 700" preserveAspectRatio="xMidYMid slice"><image href="${s.src}" x="0" y="0" width="1050" height="${s.p.length*700}"/></svg>`;
  return `<svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">${img}</svg>`}
function illSVG(id,i,p){
  const rects=Object.entries(illTaps(id,i,p)).map(([tid,[x,y,w,h]])=>`<g id="${tid}" class="ill-tap"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="14" fill="#FFFFFF" fill-opacity="0" stroke="#F3D99B" stroke-width="3" stroke-opacity="0"/></g>`).join('');
  return `<svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg" role="img" class="ill">${illImg(id,i)}${ILL_OVER[`${id}-${i}`]||''}${rects}</svg>`}
function applyPilot(){
  if(!PILOT_ON||typeof ILL_HAVE==='undefined') return;
  Object.entries(ILL_HAVE).forEach(([id,pages])=>{const b=BOOKS.find(x=>x.id===id); if(!b) return; b.pilot=true;
    pages.forEach(i=>{const p=b.pages[i]; if(p&&p.svg&&(!['letters','sundial','clock'].includes(p.kind)||ILL_OVER[`${id}-${i}`])&&!ILL_KEEP.has(`${id}-${i}`)){p.svgOld=p.svg; p.svg=illSVG(id,i,p)}});
    const e=b.pages.find(p=>p.kind==='end'); if(e&&pages.includes(0)){e.svgOld=e.svg; e.svg=illSVG(id,0,{})}})}
