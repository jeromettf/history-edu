/* 27권 안창호: 귤 하나도 정성껏 */
(()=>{
setScene('modern','summer');
const LEG=['전해 오는 이야기'];
const chKid=(x,y,s,o={})=>hero(x,y,s,{robe:'#C9D8E8',hair:'braid',belt:'#3F6FA8',ribbon:'#3F6FA8',...o});
const ch=(x,y,s,o={})=>person(x,y,s,{robe:'#2E3A55',pose:o.pose,mood:o.mood,item:o.item,
  deco:`<path d="M-14 -66 L0 -48 L14 -66" fill="#FFFFFF" ${sw(1.6)}/><path d="M-4 -60 L0 -50 L4 -60Z" fill="#C9473B"/><path d="M-6 -40 H6 M-6 -28 H6" stroke="#1E283E" stroke-width="2"/>`,
  front:`<path d="M-31 -98 Q-30 -128 0 -128 Q30 -128 31 -98 Q-4 -118 -31 -98Z" fill="${HAIR}" ${sw()}/><path d="M-12 -80 Q-6 -76 0 -80 Q6 -76 12 -80" fill="none" stroke="${HAIR}" stroke-width="3" stroke-linecap="round"/>`});
const korean=(x,y,s,o={})=>hero(x,y,s,{robe:'#D6CDB4',skin:'#EDBF95',hair:'topknot',...o});
const orangeTree=(x,y,s)=>g(x,y,s,`<path d="M0 0 V-50" stroke="#8A5A3C" stroke-width="10" stroke-linecap="round"/><circle cx="0" cy="-80" r="44" fill="#5E9C6A" ${sw()}/>${[[-20,-90],[14,-100],[24,-70],[-10,-64],[-30,-70],[6,-80]].map(([dx,dy])=>orange(dx,dy,7)).join('')}`);
const broom=`<path d="M30 -24 L50 -74" stroke="${K.wood}" stroke-width="4" stroke-linecap="round"/><path d="M20 -20 L40 -28 L36 -2 L18 -4Z" fill="#D9B66A" ${sw(1.4)}/>`;
const basket=`<path d="M-26 -40 L26 -40 L20 -14 L-20 -14Z" fill="#C9A15A" ${sw()}/>${orange(-10,-44,6)}${orange(4,-46,6)}${orange(14,-42,6)}`;
const P=[
 {kind:'cover', svg:coverBase('ch','귤 하나도 정성껏',`${orangeTree(64,250,.6)}`,ch(220,264,1.0,{pose:'hold',mood:'joy',item:basket})),
  text:`<span class="big">안창호와 정성 가득 귤</span><br>위인 그림책 {no}권`},
 {svg:SV(`<circle cx="340" cy="46" r="22" fill="${K.gold}" ${sw()}/>${sea(190)}
  <path d="M-6 190 Q100 150 220 180 L220 290 L-6 290Z" fill="#94BFA6" ${sw()}/>
  ${chKid(120,262,.9,{pose:'up',mood:'joy'})}`,'url(#ch1)',sky('ch1','#CFE7F2','#F6EAD0')),
  text:`조선의 평안도에 창호라는 아이가 살았어요. 창호는 약속을 꼭 지키고 거짓말을 하지 않는 아이였어요.`},
 {svg:SV(`<path d="M-6 170 Q100 140 200 156 Q300 136 406 166 L406 286 L-6 286Z" fill="#B8C4C0" ${sw()}/>
  ${ch(130,268,.9,{mood:'sad'})}${T(260,110,'배워야 힘이 생겨!',20,K.red)}
  ${korean(260,272,.7,{mood:'sad'})}${oldKid(330,274,.6,{mood:'sad'})}`,'url(#ch2)',sky('ch2','#B9C2CC','#DCDCD4')),
  text:`그 무렵 우리나라는 점점 힘을 잃어 가고 있었어요. 창호는 생각했어요. "사람들이 배우고 바르게 살아야 나라에 힘이 생길 거야."`},
 {chips:['1902년'], svg:SV(`${sea(150)}
  <path d="M250 150 Q290 90 330 150Z" fill="#7FA88E" ${sw()}/>
  ${g(150,210,.5,`<path d="M-80 -6 Q-70 22 0 24 Q70 22 90 -6Z" fill="#E8E2D2" ${sw(3)}/><rect x="-40" y="-50" width="80" height="44" fill="#FFFFFF" ${sw(3)}/><path d="M0 -50 V-80" ${sw(4)}/>`)}
  ${ch(150,176,.4,{pose:'up',mood:'o'})}${T(290,80,'바다 위의 산!',18,K.red)}`,'url(#ch3)',sky('ch3','#CFE7F2','#F6EAD0')),
  text:`창호는 공부하러 배를 타고 먼 미국으로 떠났어요. 바다 한가운데 우뚝 솟은 섬을 보고, 자기 호를 '도산'이라고 지었대요. '섬 산'이라는 뜻이에요.`},
 {chips:LEG, svg:SV(`<circle cx="340" cy="46" r="22" fill="${K.gold}" ${sw()}/><path d="M-6 200 L406 200 L406 286 L-6 286Z" fill="#C9B48A"/>
  <rect x="200" y="110" width="160" height="96" fill="#E8DCC4" ${sw()}/><path d="M190 114 L280 70 L370 114Z" fill="#8E5A48" ${sw()}/>
  <rect x="230" y="134" width="40" height="34" fill="#BFE0F0" ${sw(1.4)}/><rect x="300" y="134" width="40" height="34" fill="#BFE0F0" ${sw(1.4)}/>
  <g id="tBroom">${ch(110,268,.88,{pose:'hold',mood:'joy',item:broom})}</g>
  <g id="tPot">${peony(250,214,.8)}${peony(320,214,.8,'#F2A9C0')}</g>`,'url(#ch4)',sky('ch4','#CFE7F2','#F6EAD0')),
  taps:[{label:'빗자루',el:'tBroom',say:'싹싹! 마당을 깨끗이 쓸어요.'},{label:'꽃',el:'tPot',say:'창가에 꽃을 놓으니 집이 환해졌어요.'}],tapHint:'안창호가 한 일을 눌러 보세요.',
  text:`미국에 사는 우리나라 사람들의 집은 지저분하고 다툼도 잦았어요. 안창호는 말없이 마당을 쓸고 창문을 닦고, 꽃을 심어 주었어요.`},
 {chips:LEG, svg:SV(`<circle cx="340" cy="46" r="22" fill="${K.gold}" ${sw()}/><path d="M-6 200 L406 200 L406 286 L-6 286Z" fill="#C9B48A"/>
  <rect x="200" y="110" width="160" height="96" fill="#F6EEDC" ${sw()}/><path d="M190 114 L280 70 L370 114Z" fill="#B5473A" ${sw()}/>
  ${peony(230,214,.7)}${peony(330,214,.7,'#F2A9C0')}
  ${korean(90,268,.78,{mood:'joy',pose:'up'})}${korean(160,268,.74,{mood:'joy'})}`,'url(#ch5)',sky('ch5','#CFE7F2','#F6EAD0')),
  text:`그 모습을 본 사람들도 하나둘 집을 가꾸기 시작했어요. 이웃들끼리 서로 돕고 사이좋게 지내게 되었어요.`},
 {chips:LEG, svg:SV(`<circle cx="340" cy="46" r="22" fill="${K.gold}" ${sw()}/>${hills('#A9CDB4','#C7D88F',196,220)}
  <g id="tTree">${orangeTree(260,230,1.1)}</g>
  <g id="tCh">${ch(110,268,.9,{pose:'hold',mood:'smile',item:basket})}</g>`,'url(#ch6)',sky('ch6','#CFE7F2','#F6EAD0')),
  taps:[{label:'귤나무',el:'tTree',say:'귤 하나하나를 조심조심 정성껏 따요.'},{label:'안창호',el:'tCh',say:'귤 하나를 따더라도 정성껏 따는 게 나라를 위하는 일이에요.'}],tapHint:'귤을 따 볼까요?',
  text:`안창호는 귤 농장에서 일하는 사람들에게 말했어요. "귤 하나를 따더라도 정성껏 따는 것이 나라를 위하는 일입니다."`},
 {svg:SV(`${room()}
  ${ch(120,268,.9,{pose:'up',mood:'joy'})}
  ${chKid(250,272,.66,{mood:'joy',pose:'up'})}${oldKid(320,272,.62,{mood:'joy'})}
  <rect x="200" y="50" width="180" height="56" rx="6" fill="#FFFDF6" ${sw()}/>${T(290,86,'거짓말하지 말자',18,K.red)}`,'#EADCC0'),
  text:`우리나라로 돌아온 안창호는 학교를 세웠어요. 그리고 학생들에게 늘 말했어요. "거짓말하지 말자. 작은 일도 정성껏 하자."`},
 {svg:SV(`${cloud(80,40,.7)}${hills('#A9CDB4','#C7D88F',196,220)}
  ${kid(140,266,1.0,{pose:'hold',mood:'joy',item:basket})}${hero(260,266,.9,{body:'dress',hair:'bun',top:'#F2C14E',skirt:'#5B7FB8',mood:'smile'})}
  ${T(200,90,'장난감 정리 끝!',18,K.red)}`,'url(#ch8)',sky('ch8','#E8F2F8','#F2EED8')),
  text:`서울에는 안창호를 기리는 도산공원이 있어요. 장난감을 제자리에 정리하는 일도 귤 하나를 정성껏 따는 일과 닮았어요.`},
 {kind:'end', svg:endBase('ch',`${orangeTree(200,236,1.6)}`,chKid(64,276,.5,{pose:'up',mood:'joy'}),ch(338,276,.55,{pose:'up',mood:'joy'})),
  text:`약속을 지키던 아이가 남긴 선물,<br>작은 일도 정성껏 하는 마음.<br>오늘도 우리 곁에 있어요.<br><span class="big">끝</span>`},
 {kind:'talk'}
];
BOOKS.push({id:'anchangho',era:'modern',title:'안창호와 정성 가득 귤',who:'안창호',teaser:'"귤 하나를 따도 정성껏!" 작은 일부터 바르게 하자고 한 사람이 있어요.',pages:P,
 talk:{three:['안창호가 딴 과일은 뭐였지?','빗자루로 쓰는 흉내, 싹싹!','오늘 정성껏 정리할 장난감은 뭐야?'],
  five:['안창호는 왜 말없이 마당을 쓸었을까?','작은 일을 정성껏 하는 게 왜 중요할까?','거짓말하지 않기가 어려웠던 적이 있어?'],
  note:'안창호(1878~1938, 호는 도산)는 1902년 미국으로 건너가 한인 공동체를 이끌었습니다. 하와이 섬을 보고 호를 도산이라 지었다는 이야기, 한인들의 집을 청소해 생활을 바꾸었다는 이야기, 리버사이드 오렌지 농장에서 "오렌지 하나를 따더라도 정성껏"이라고 했다는 이야기는 널리 전하는 일화입니다. 대성학교와 흥사단을 세우고 독립운동에 힘썼으며, 1932년 일본 경찰에 붙잡힌 뒤 1938년 병으로 세상을 떠났습니다.'}});
})();
