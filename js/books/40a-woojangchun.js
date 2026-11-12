/* 우장춘: 좋은 씨앗을 만든 과학자 */
(()=>{
setScene('hyeondae','summer');
const LEG=['전해 오는 이야기'];
const wj=(x,y,s,o={})=>person(x,y,s,{robe:'#E6E1D6',deco:`<path d="M-14 -66 L0 -50 L14 -66" fill="#FFFFFF" ${sw(1.6)}/>`,
  front:`<path d="M-31 -98 Q-30 -124 0 -126 Q30 -124 31 -98 Q0 -108 -31 -98Z" fill="#5A4A3E" ${sw()}/><circle cx="-11" cy="-92" r="8" fill="none" ${sw(2)}/><circle cx="11" cy="-92" r="8" fill="none" ${sw(2)}/><path d="M-3 -92 H3" ${sw(2)}/>`,...o});
const farmer2=(x,y,s,c,o={})=>hero(x,y,s,{robe:c,skin:'#EDBF95',hat:'band',bandColor:'#FFFDF6',belt:'#8C7350',...o});
const cabbage=(x,y,s)=>g(x,y,s,`<ellipse cx="0" cy="-20" rx="22" ry="24" fill="#8FBF5A" ${sw()}/><path d="M-18 -10 Q-26 -40 -6 -44 M18 -10 Q26 -40 6 -44" fill="none" stroke="#7CA65A" stroke-width="3"/><path d="M-14 -30 Q0 -40 14 -30" fill="none" stroke="#7CA65A" stroke-width="2"/>`);
const radish=(x,y,s)=>g(x,y,s,`<path d="M-10 -14 Q0 20 4 26 Q8 20 10 -14Z" fill="#FFFDF6" ${sw()}/><path d="M-6 -14 Q-16 -40 -4 -44 M4 -14 Q14 -40 4 -46" fill="none" stroke="#7CA65A" stroke-width="5" stroke-linecap="round"/>`);
const seedPack=H=>`<rect x="${H.R[0]-4}" y="${H.R[1]-24}" width="22" height="28" fill="#F2C14E" ${sw(1.2)}/><circle cx="${H.R[0]+7}" cy="${H.R[1]-12}" r="4" fill="#7CA65A"/>`;
const P=[
 {kind:'cover', svg:coverBase('wj','씨앗 박사',`${cabbage(290,256,1.2)}${radish(340,250,1.0)}`,wj(130,264,1.0,{arms:'holdFront',prop:seedPack,mood:'smile'})),
  text:`<span class="big">우장춘과 좋은 씨앗</span><br>위인 그림책 {no}권`},
 {svg:SV(`${room()}
  ${wj(200,272,.9,{mood:'smile',arms:'holdFront',prop:H=>`<g transform="translate(${(H.L[0]+H.R[0])/2} ${H.L[1]+30})">${openBook}</g>`})}
  ${[0,1,2].map(k=>`<g transform="translate(${60+k*30} 120)">${g(0,0,.6,`<circle r="12" fill="#E98FA0" ${sw()}/><circle r="4" fill="#F2C14E"/>`)}</g>`).join('')}`,'#EADCC0'),
  text:`우장춘은 일본에서 태어나고 자란 식물 학자였어요. 아버지는 조선 사람, 어머니는 일본 사람이었어요. 꽃과 채소의 씨앗을 연구해 이름난 과학자가 되었어요.`},
 {chips:['1950년'], svg:SV(`<path d="M-6 150 Q200 140 406 150 L406 200 L-6 200Z" fill="#4F92BA"/><path d="M-6 196 H406 V290 H-6Z" fill="#C9B48A"/>
  ${bigShip(310,180,.6,'#5A5560')}
  ${wj(140,276,.86,{mood:'joy',arms:'waveR',face:'right'})}${[0,1].map(k=>farmer2(240+k*50,276,.58,['#D6CDB4','#E9CFC0'][k],{mood:'joy',arms:'cheer',face:'left'})).join('')}`,'url(#wj1)',sky('wj1','#CFE7F2','#F6EAD0')),
  text:`나라를 되찾은 우리나라에는 좋은 채소 씨앗이 없었어요. 사람들이 우장춘을 불렀어요. 우장춘은 쉰 살이 넘어 아버지의 나라로 건너왔어요.`},
 {svg:SV(`${hills('#A9CDB4','#BCD38F',190,214)}
  ${[...Array(6)].map((_,k)=>cabbage(40+k*64,262-(k%2)*8,.9)).join('')}
  <g id="tSeed">${wj(200,266,.82,{mood:'o',stance:'kneel',arms:'reach',prop:seedPack})}</g>`,'url(#wj2)',sky('wj2','#CFE7F2','#F6EAD0')),
  taps:[{label:'씨앗 섞기',el:'tSeed',say:'튼튼한 배추와 맛있는 배추의 꽃가루를 섞어 더 좋은 씨앗을 만들어요.'},{label:'쑥쑥',el:'tSeed',say:'우리 땅에서 잘 자라는 배추와 무 씨앗이 생겼어요!'}],tapHint:'우장춘을 눌러 볼까요?',
  text:`부산에 연구소를 차린 우장춘은 밭에 쪼그려 앉아 연구했어요. 우리 땅과 날씨에 맞는 배추와 무 씨앗을 만들어 농부들에게 나누어 주었어요.`},
 {chips:LEG, svg:SV(`${room()}
  ${wj(200,272,.9,{mood:'sad',arms:'pray'})}
  ${T(200,80,'어머니…',22,'#3F6FA8')}`,'#EADCC0'),
  text:`일본에 계신 어머니가 돌아가셨을 때, 우장춘은 일 때문에 가 보지 못했어요. 그 소식을 들은 사람들이 마음을 모아 위로금을 보냈고, 우장춘은 그 돈으로 연구소에 우물을 팠대요. 그 우물은 '자유천'이라 불려요.`},
 {svg:SV(`${hills('#A9CDB4','#BCD38F',190,214)}
  ${[0,1].map(k=>g(70+k*80,250,1,`<path d="M0 0 V-40" stroke="#8A5A3C" stroke-width="8"/><circle cy="-62" r="32" fill="#5E9C5A" ${sw()}/>${[[-14,-70],[10,-56],[16,-78],[-8,-50]].map(([a,b])=>`<circle cx="${a}" cy="${b}" r="6" fill="#F28C3A" ${sw(1)}/>`).join('')}`)).join('')}
  ${wj(250,272,.86,{mood:'joy',arms:'pointL',face:'left'})}${farmer2(340,276,.6,'#D6CDB4',{mood:'joy',face:'left',arms:'cheer'})}`,'url(#wj3)',sky('wj3','#CFE7F2','#F6EAD0')),
  text:`제주도에 귤나무를 기르는 일, 꽃씨를 만드는 일도 도왔어요. 김치에 들어가는 배추와 무는 우장춘의 씨앗 덕분에 더 튼튼하게 자랐어요.`},
 {svg:SV(`${room()}<rect x="-6" y="236" width="412" height="50" fill="#D9A66A"/>
  <ellipse cx="200" cy="244" rx="90" ry="14" fill="#FFFDF6" ${sw()}/>${cabbage(170,244,.6)}${radish(230,240,.6)}
  ${kid(80,270,.82,{stance:'sit',arms:'pointR',mood:'joy',face:'right'})}${hero(320,270,.82,{body:'dress',hair:'bun',top:'#F2C14E',skirt:'#5B7FB8',stance:'sit',arms:'lap',mood:'smile',face:'left'})}`,'#EFE3C8'),
  text:`오늘 저녁 김치를 먹을 때, 배추와 무가 어디서 왔을지 생각해 봐요. 작은 씨앗 하나에도 누군가의 오랜 연구가 담겨 있어요.`},
 {kind:'end', svg:endBase('wj',`${cabbage(170,220,1.4)}${radish(240,212,1.2)}`,kid(64,276,.5,{arms:'cheer',mood:'joy'}),wj(338,276,.55,{arms:'waveR',mood:'joy'})),
  text:`아버지의 나라로 온 과학자가 남긴 선물,<br>좋은 씨앗.<br>오늘도 우리 밥상에 있어요.<br><span class="big">끝</span>`},
 {kind:'talk'}
];
BOOKS.push({id:'woojangchun',era:'hyeondae',title:'우장춘과 좋은 씨앗',who:'우장춘',teaser:'우리 땅에 맞는 배추와 무 씨앗을 만든 과학자가 있어요.',pages:P,
 talk:{three:['우장춘은 무슨 채소 씨앗을 만들었지?','씨앗 심는 흉내 내 볼까? 쏙!','오늘 김치 먹었어?'],
  five:['좋은 씨앗이 없으면 어떤 일이 생길까?','두 가지 배추를 섞으면 왜 더 좋아질까?','우리 집 밥상의 음식은 어디서 왔을까?'],
  note:'우장춘(1898~1959)은 일본에서 태어난 육종학자입니다. 아버지는 조선 사람 우범선, 어머니는 일본인이었습니다. 서로 다른 종을 교배해 새 종이 생길 수 있음을 보인 "종의 합성" 연구로 이름이 났습니다. 1950년 한국에 와서 부산 한국농업과학연구소(뒤에 중앙원예기술원)를 이끌며 우리 기후에 맞는 배추·무 품종과 씨앗 생산 기반을 마련했고, 제주 감귤 재배 등에도 기여했습니다. 1953년 어머니 장례에 가지 못하자 모인 조의금으로 우물을 파 "자유천"이라 불렀다는 이야기가 전합니다. 부산에 우장춘기념관이 있습니다. 씨 없는 수박은 그가 개발한 것이 아니라 일본 학자의 방법을 보급 시연한 것입니다.'}});
})();
