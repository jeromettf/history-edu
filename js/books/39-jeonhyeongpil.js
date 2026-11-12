/* 전형필: 우리 보물을 지킨 사람 */
(()=>{
setScene('modern','autumn');
const hpKid=(x,y,s,o={})=>hero(x,y,s,{robe:'#E7D7B4',hair:'braid',belt:'#5E7FA8',ribbon:'#5E7FA8',...o});
const hp=(x,y,s,o={})=>person(x,y,s,{robe:'#4C5A6E',pose:o.pose,mood:o.mood,item:o.item,
  deco:`<path d="M-14 -66 L0 -48 L14 -66" fill="#FFFFFF" ${sw(1.6)}/><path d="M-4 -60 L0 -50 L4 -60Z" fill="#3F6FA8"/><path d="M-6 -40 H6 M-6 -28 H6" stroke="#2E3A4E" stroke-width="2"/>`,
  front:`<path d="M-31 -98 Q-30 -128 0 -128 Q30 -128 31 -98 Q4 -118 -31 -98Z" fill="${HAIR}" ${sw()}/><circle cx="-11" cy="-92" r="8" fill="none" ${sw(2)}/><circle cx="11" cy="-92" r="8" fill="none" ${sw(2)}/><path d="M-3 -92 H3" ${sw(2)}/>`});
const teacherO=(x,y,s,o={})=>hero(x,y,s,{robe:'#EDE9E0',hat:'gat',beard:'#E6E1D6',belt:'#8C7350',...o});
const vase=(x,y,s,id)=>g(x,y,s,`<g ${id?`id="${id}"`:''}><path d="M-10 -86 L10 -86 L12 -78 Q36 -60 30 -24 Q24 0 0 0 Q-24 0 -30 -24 Q-36 -60 -12 -78Z" fill="#9FC2B4" ${sw()}/><ellipse cx="0" cy="-86" rx="10" ry="3" fill="#7FA898" ${sw(1)}/>${[[-14,-56],[12,-40],[-8,-26]].map(([a,b])=>`<circle cx="${a}" cy="${b}" r="5" fill="none" stroke="#FFFFFF" stroke-width="1.4"/><path d="M${a-3} ${b} l6 -6 l4 2" fill="none" stroke="#2E2522" stroke-width="1.2"/>`).join('')}</g>`);
const hunmin=(x,y,s,id)=>g(x,y,s,`<g ${id?`id="${id}"`:''}><rect x="-34" y="-50" width="68" height="46" fill="#C9A57A" ${sw()}/><rect x="-26" y="-44" width="18" height="34" fill="#FFFDF6" ${sw(1)}/><text x="-17" y="-30" text-anchor="middle" font-family="serif" font-size="8" fill="${L}">訓</text><text x="-17" y="-18" text-anchor="middle" font-family="serif" font-size="8" fill="${L}">民</text><path d="M-34 -36 h-4 M-34 -22 h-4" ${sw(2)}/></g>`);
const museum=(x,y,s)=>g(x,y,s,`<rect x="-80" y="-80" width="160" height="80" fill="#F2EEE4" ${sw()}/>${[-50,-20,10,40].map(c=>`<rect x="${c}" y="-66" width="20" height="30" fill="#BFE0F0" ${sw(1.2)}/>`).join('')}<rect x="-12" y="-30" width="24" height="30" fill="#8A6A44" ${sw()}/><path d="M-90 -80 H90 L80 -92 H-80Z" fill="#9E9686" ${sw()}/>`);
const coins=`${[0,1,2].map(k=>`<rect x="${-24+k*10}" y="${-44-k*6}" width="34" height="18" rx="2" fill="#B9D6A8" ${sw(1.2)}/>`).join('')}`;
const P=[
 {kind:'cover', svg:coverBase('hp','보물 지킴이',`${vase(70,256,.8)}${hunmin(340,252,1)}`,hp(210,264,1.0,{pose:'up',mood:'joy'})),
  text:`<span class="big">간송 전형필과 우리 보물</span><br>위인 그림책 {no}권`},
 {svg:SV(`${yard(206)}
  ${hpKid(140,268,.86,{mood:'joy',pose:'hold',item:`<rect x="-24" y="-50" width="48" height="34" fill="#3F6FA8" ${sw()}/>`})}${hero(280,268,.84,{robe:'#EDE9E0',hat:'gat',beard:HAIR,mood:'smile'})}`,'#D9CCAE'),
  text:`권기옥이 비행사가 되어 하늘을 날던 무렵, 서울에 형필이라는 젊은이가 살았어요. 형필이네는 아주 큰 부잣집이었어요. 형필이는 옛 책과 그림을 좋아했어요.`},
 {svg:SV(`${sea(170)}
  ${g(280,200,.5,`<path d="M-80 -6 Q-70 22 0 24 Q70 22 90 -6Z" fill="#3A3A44" ${sw(3)}/><rect x="-40" y="-50" width="80" height="44" fill="#5A5560" ${sw(3)}/>`)}
  <path d="M-6 170 Q100 150 200 166 L200 290 L-6 290Z" fill="#C9C2B4" ${sw()}/>
  ${vase(250,170,.4)}${hunmin(310,170,.5)}
  ${hp(110,262,.82,{mood:'sad'})}${T(280,80,'우리 보물이 떠나가요',18,K.red)}`,'url(#hp2)',sky('hp2','#B9C2CC','#DCDCD4')),
  text:`그때 우리나라는 일본에게 나라를 빼앗긴 때였어요. 우리 옛 그림과 그릇, 책 같은 보물이 자꾸 바다 건너 다른 나라로 팔려 나갔어요.`},
 {svg:SV(`${room()}
  ${teacherO(120,268,.86,{mood:'smile'})}${hp(280,268,.86,{mood:'o'})}
  ${T(200,90,'보물은 그 나라의 얼굴이란다',16,K.red)}`,'#ECE5D4'),
  text:`형필의 선생님 오세창이 말했어요. "옛 보물에는 우리 조상의 솜씨와 마음이 담겨 있단다. 보물이 사라지면 우리 이야기도 사라진단다."`},
 {svg:SV(`${room()}
  <g id="tMoney">${hp(130,268,.9,{pose:'hold',mood:'smile',item:coins})}</g>
  <g id="tVase">${vase(290,236,1.0)}</g>`,'#ECE5D4'),
  taps:[{label:'학 무늬 병',el:'tVase',say:'구름 사이로 학이 날아다니는 고려의 청자예요. 하나하나 손으로 새겼어요.'},{label:'형필',el:'tMoney',say:'집 스무 채 값을 내고서라도 이 보물을 지키겠어요.'}],tapHint:'청자를 눌러 보세요.',
  text:`형필은 물려받은 재산으로 보물을 사들이기 시작했어요. 구름과 학이 날아다니는 고려청자를 사려고 기와집 스무 채 값을 치르기도 했대요.`},
 {chips:['1938년'], svg:SV(`${hills('#A9CDB4','#BCD38F',196,222)}
  ${museum(250,214,1.0)}
  ${hp(100,268,.86,{pose:'up',mood:'joy'})}`,'url(#hp6)',sky('hp6','#CFE7F2','#F6EAD0')),
  text:`형필은 모은 보물을 잘 지키려고 우리나라 사람이 세운 첫 미술관을 지었어요. 이름은 '보화각', 보물을 빛나게 하는 집이라는 뜻이에요. 지금의 간송미술관이에요.`},
 {chips:['1940년'], svg:SV(`${room()}
  <g id="tBook">${hunmin(250,236,1.6)}</g>
  ${hp(120,268,.9,{pose:'up',mood:'joy'})}`,'#ECE5D4'),
  taps:[{label:'훈민정음 해례본',el:'tBook',say:'세종대왕이 한글을 어떻게 만들었는지 적은 책이에요. 세상에 몇 권 남지 않았어요.'}],tapHint:'책을 펼쳐 볼까요?',
  text:`어느 날 형필은 세종대왕이 한글을 만든 까닭과 만든 방법을 적은 책, 『훈민정음 해례본』을 찾아냈어요. 형필은 이 책을 사서 꼭꼭 숨겨 지켰어요.`},
 {svg:SV(`${room()}
  ${vase(260,200,.7)}${hunmin(330,200,.8)}
  ${kid(130,266,1.0,{pose:'up',mood:'o'})}`,'#ECE5D4'),
  text:`한글 자음이 입과 혀 모양을 본떠 만들어졌다는 이야기는 형필이 지킨 『훈민정음 해례본』에 적혀 있어요. 이 책은 지금 국보이자 세계기록유산이에요.`},
 {kind:'end', svg:endBase('hp',`${vase(150,220,1.4)}${hunmin(270,210,1.6)}`,hpKid(64,276,.5,{pose:'up',mood:'joy'}),hp(338,276,.55,{pose:'up',mood:'joy'})),
  text:`옛것을 아낀 젊은이가 남긴 선물,<br>지켜 낸 우리 보물.<br>오늘도 우리 곁에 있어요.<br><span class="big">끝</span>`},
 {kind:'talk'}
];
BOOKS.push({id:'jeonhyeongpil',era:'modern',title:'간송 전형필과 우리 보물',who:'전형필',teaser:'세종대왕이 한글을 만든 비밀이 적힌 책을 꼭꼭 숨겨 지킨 사람이 있어요.',pages:P,
 talk:{three:['청자에 그려진 새는 뭐였지?','학처럼 팔을 펴고 훨훨!','우리 집 보물은 뭐야?'],
  five:['형필은 왜 큰돈을 들여 보물을 샀을까?','보물이 다른 나라로 가 버리면 무엇이 사라질까?','네가 오래오래 지키고 싶은 물건은 뭐야?'],
  note:'전형필(1906~1962, 호는 간송)은 큰 재산을 물려받아, 스승 오세창의 가르침을 따라 일제강점기에 해외로 빠져나가던 문화재를 사들여 지켰습니다. 1935년 청자상감운학문매병을 당시 기와집 스무 채 값인 2만 원에 샀다고 전하며, 1938년 우리나라 최초의 사립 미술관인 보화각(지금의 간송미술관)을 세웠습니다. 1940년 무렵 『훈민정음 해례본』을 구해 6·25 전쟁 때도 품에 지니고 피란했다고 합니다. 해례본은 국보이며 1997년 유네스코 세계기록유산에 올랐습니다. 노래에는 나오지 않지만 세종대왕 이야기와 이어지는 인물이라 골랐습니다.'}});
})();
