/* 위인 도감과 포켓몬 앱(hangulplay) 연결
   - WIIN_DEX: 책마다 도감 타입, 대표 기술, 전시 물건(이모지 + 이름)
   - 두 사이트는 jeromettf.github.io 아래라서 localStorage를 함께 써요.
     그림책은 'wiin_bridge_v1'에 "읽음 · 들려줌 · 해 봄"을 적기만 하고,
     보상은 포켓몬 앱이 열릴 때 스스로 읽어서 줘요. (규칙: docs/BRIDGE.md) */
const WIIN_TYPES={
 found:['나라','🏯','#C9473B'], guard:['지키기','🛡️','#3F6FA8'], sci:['과학','💡','#C98A1B'],
 rec:['기록','📜','#8A5A3C'], art:['예술','🎨','#A0529A'], heart:['마음','🤝','#3E8E62'], indep:['독립','🕊️','#4F6378']};
const WIIN_DEX={
 dangun:['found','첫 나라 세우기','🧄','쑥과 마늘'], hyeokgeose:['found','알에서 태어나기','🥚','붉은 알'],
 jumong:['found','백발백중 활쏘기','🏹','주몽의 활'], onjo:['found','좋은 땅 고르기','🏞️','위례성 강가'],
 geunchogo:['found','바닷길 열기','🗡️','칠지도'], gwanggaeto:['guard','땅 넓히기','🐎','고구려 말'],
 jangsu:['rec','큰 비석 세우기','🪨','광개토대왕릉비'], ureuk:['art','열두 줄 노래','🎶','가야금'],
 euljimundeok:['guard','지는 척 꾀','✉️','살수의 편지'], yangmanchun:['guard','함께 성 지키기','🏰','안시성'],
 seondeok:['sci','꼼꼼히 살피기','🔭','첨성대'], kimyusin:['guard','세 나라 하나로','🎀','춘추의 옷고름'],
 wonhyo:['heart','마음먹기','🥣','바가지 물'], uisang:['heart','뜬 바위 세우기','🪨','부석사 뜬 돌'],
 daejoyeong:['found','먼 길 이끌기','🔥','발해 온돌'], hyecho:['rec','여행 일기','📔','왕오천축국전'],
 jangbogo:['guard','바다 지키기','⚓','청해진 닻'], choechiwon:['rec','놀라운 글솜씨','🖌️','최치원의 붓'],
 wanggeon:['found','다 함께 품기','🏷️','코리아 이름표'], seohui:['heart','말로 지키기','🗣️','지혜로운 말'],
 gangamchan:['guard','강물 꾀','🌟','떨어진 별'], kimbusik:['rec','역사책 쓰기','📚','삼국사기'],
 iryeon:['rec','옛이야기 모으기','📖','삼국유사'], choemuseon:['sci','화약 만들기','🎆','화포 불꽃'],
 munikjeom:['sci','씨앗 지키기','☁️','목화솜'], choeyoung:['guard','욕심 이기기','🪙','돌 같은 황금'],
 sejong:['rec','글자 만들기','📜','훈민정음'], hwanghui:['heart','마음 살피기','🐄','누렁소'],
 maengsaseong:['heart','겸손하기','🍵','넘친 찻잔'], yeongsil:['sci','시계 만들기','🕰️','해시계'],
 saimdang:['art','진짜 같은 그림','🦗','풀벌레 그림'], yihwang:['rec','편지로 생각 나누기','🌸','매화'],
 yii:['rec','쉬운 책 쓰기','📘','격몽요결'], heojun:['sci','약초 찾기','🌿','동의보감 약초'],
 seokbong:['art','반듯한 글씨','🍡','어머니의 떡'], yisunsin:['guard','거북선 만들기','🐢','거북선'],
 gwakjaeu:['guard','스스로 나서기','🧥','붉은 옷'], kimsimin:['guard','미리 준비하기','🏯','진주성'],
 gwonyul:['guard','다 함께 싸우기','🪨','행주치마 돌'], samyeong:['heart','차분히 말하기','📿','사명대사 염주'],
 heonanseolheon:['art','시 짓기','🪷','연꽃 시'], kimmandeok:['heart','나누기','🍚','나눔의 쌀'],
 kimhongdo:['art','웃음 그림','🤼','씨름 그림'], bakjiwon:['rec','신기한 것 적기','🛒','청나라 수레'],
 jeongyakyong:['sci','거중기 만들기','🏗️','거중기'], kimjeonghui:['art','추사체','🌲','세한도 소나무'],
 kimsatgat:['art','말놀이 시','👒','삿갓'], kimjeongho:['sci','지도 만들기','🗺️','대동여지도'],
 jiseogyeong:['sci','예방 주사','💉','우두 주사'], jusigyeong:['rec','한글 이름 짓기','🎒','주보따리'],
 anchangho:['indep','정성껏 하기','🍊','정성 귤'], sinchaeho:['indep','역사 쓰기','🪞','역사 거울'],
 sonbyeonghui:['indep','함께 모으기','📄','독립 선언서'], yugwansun:['indep','용기 내기','🇰🇷','태극기'],
 bangjeonghwan:['heart','어린이 사랑','🎈','어린이날'], kimgu:['indep','아름다운 나라 꿈','👓','김구의 안경'],
 gwongiok:['indep','하늘 날기','✈️','권기옥의 비행기'], jeonhyeongpil:['guard','보물 지키기','🏺','청자 매병'],
 woojangchun:['sci','좋은 씨앗','🥬','배추 씨앗'], ijungseop:['art','은지화','🐂','황소 그림']};

const WB_KEY='wiin_bridge_v1';
function wbLoad(){try{return JSON.parse(localStorage.getItem(WB_KEY)||'null')||{v:1,books:{}}}catch(e){return {v:1,books:{}}}}
/* lv: 'read' 끝까지 읽음 · 'told' 아이가 이야기를 들려줌(부모 확인) · 'tried' 해 보기를 함(부모 확인) */
function wbMark(b,lv,on=true){
  const s=wbLoad(); s.v=1; s.books=s.books||{};
  const d=WIIN_DEX[b.id]||['heart','','📖',b.title], r=s.books[b.id]||{};
  Object.assign(r,{no:b.no,who:b.who,title:b.title,type:WIIN_TYPES[d[0]][0],e:d[2],item:d[3]});
  if(on){if(!r[lv])r[lv]=Date.now()}else delete r[lv];
  s.books[b.id]=r; s.at=Date.now();
  try{localStorage.setItem(WB_KEY,JSON.stringify(s))}catch(e){}
}
