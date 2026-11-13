/* 새 일러스트: img/ill/<책id>-<쪽>.webp 가 있는 쪽은 그 그림으로 보여 준다 (목록은 js/ill-index.js).
   부모님 칸의 "새 그림으로 보기"를 끄면 예전 그림으로 돌아간다 (localStorage 'wiin-pilot').
   그림은 Figma 이미지 생성으로 만들었다. 끝 장면은 표지 그림을 다시 쓴다.
   누르기 장면은 그림 위에 투명한 칸(.ill-tap)을 얹어 예전 누르기 id를 그대로 쓴다.
   칸 위치는 ILL_TAPS에 따로 적은 것이 없으면, 누를 대상이 둘이면 왼쪽 반 · 오른쪽 반, 셋이면 세 칸, 하나면 가운데. */
const ILL_TAPS={
 'yisunsin-4':{tGen:[4,62,128,214],tShip:[140,92,256,136]},
 'yugwansun-3':{tFlags:[2,12,164,94],tGs:[186,110,156,170]},
 'seokbong-6':{dark:[150,8,100,84],tTteok:[4,96,190,180],tGeul:[206,96,190,180]}};
/* 누르면 글자를 바꿔 보여 주는 쪽은 그림 모델이 한글을 못 그려서 예전 그림을 그대로 쓴다. */
const ILL_KEEP=new Set(['jusigyeong-4']);
let PILOT_ON=true; try{PILOT_ON=localStorage.getItem('wiin-pilot')!=='0'}catch(e){}
function illTaps(id,i,p){
  if(ILL_TAPS[`${id}-${i}`]) return ILL_TAPS[`${id}-${i}`];
  const els=p.taps?[...new Set(p.taps.map(t=>t.el))]:[]; const o={};
  if(els.length===1) o[els[0]]=[50,20,300,250];
  else els.forEach((e,k)=>{const w=392/els.length;o[e]=[4+k*w,10,w-6,262]});
  return o}
const illSrc=(id,i)=>(typeof ILL_SRC!=='undefined'&&ILL_SRC[`${id}-${i}`])||`img/ill/${id}-${i}.webp`;
function illSVG(id,i,p){
  const rects=Object.entries(illTaps(id,i,p)).map(([tid,[x,y,w,h]])=>`<g id="${tid}" class="ill-tap"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="14" fill="#FFFFFF" fill-opacity="0" stroke="#F3D99B" stroke-width="3" stroke-opacity="0"/></g>`).join('');
  return `<svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg" role="img" class="ill"><image href="${illSrc(id,i)}" x="0" y="0" width="400" height="280" preserveAspectRatio="xMidYMid slice"/>${rects}</svg>`}
function applyPilot(){
  if(!PILOT_ON||typeof ILL_HAVE==='undefined') return;
  Object.entries(ILL_HAVE).forEach(([id,pages])=>{const b=BOOKS.find(x=>x.id===id); if(!b) return; b.pilot=true;
    pages.forEach(i=>{const p=b.pages[i]; if(p&&p.svg&&!['letters','sundial','clock'].includes(p.kind)&&!ILL_KEEP.has(`${id}-${i}`)){p.svgOld=p.svg; p.svg=illSVG(id,i,p)}});
    const e=b.pages.find(p=>p.kind==='end'); if(e&&pages.includes(0)){e.svgOld=e.svg; e.svg=illSVG(id,0,{})}})}
