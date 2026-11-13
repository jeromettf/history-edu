/* 파일럿 그림: 세종대왕 · 이순신 · 유관순 세 권을 새 일러스트로 바꿔 본다.
   부모님 칸의 "새 그림으로 보기"를 끄면 예전 그림으로 돌아간다 (localStorage 'wiin-pilot').
   그림은 Figma 이미지 생성으로 만들었고 img/pilot/에 있다. build.py가 data URI로 넣는다.
   누르기 장면은 그림 위에 투명한 칸(.ill-tap)을 얹어 예전 누르기 id를 그대로 쓴다. */
const PILOT_IMG={
 sejong:[0,1,2,3,4,5,7,8,9],
 yisunsin:[0,1,2,3,4,5,6,7,8],
 yugwansun:[0,1,2,3,4,5,6,7,8,9]};
/* 누르기 칸: 400×280 화면 좌표 [x,y,w,h] */
const PILOT_TAPS={
 'yisunsin-4':{tGen:[4,62,128,214],tShip:[140,92,256,136]},
 'yugwansun-3':{tFlags:[2,12,164,94],tGs:[186,110,156,170]}};
let PILOT_ON=true; try{PILOT_ON=localStorage.getItem('wiin-pilot')!=='0'}catch(e){}
function pilotSVG(id,i){
  const taps=PILOT_TAPS[`${id}-${i}`]||{};
  const rects=Object.entries(taps).map(([tid,[x,y,w,h]])=>`<g id="${tid}" class="ill-tap"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="14" fill="#FFFFFF" fill-opacity="0" stroke="#F3D99B" stroke-width="3" stroke-opacity="0"/></g>`).join('');
  return `<svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg" role="img" class="ill"><image href="img/pilot/${id}-${i}.webp" x="0" y="0" width="400" height="280" preserveAspectRatio="xMidYMid slice"/>${rects}</svg>`}
function applyPilot(){
  if(!PILOT_ON) return;
  Object.entries(PILOT_IMG).forEach(([id,pages])=>{const b=BOOKS.find(x=>x.id===id); if(!b) return; b.pilot=true;
    pages.forEach(i=>{const p=b.pages[i]; if(p&&p.svg){p.svgOld=p.svg; p.svg=pilotSVG(id,i)}})})}
