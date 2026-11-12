/* 온조: 좋은 땅을 고른 형제 */
(()=>{
setScene('samguk','spring');
const LEG=['전해 오는 이야기'];
const onjo=(x,y,s,o={})=>hero(x,y,s,{robe:'#5E9C8A',pattern:'dots',dotColor:'#FFF8EC',hair:'braid',belt:K.gold,ribbon:K.gold,...o});
const onjoK=(x,y,s,o={})=>hero(x,y,s,{robe:'#5E9C8A',pattern:'dots',dotColor:K.gold,hat:'crown',belt:'#3A2E2A',...o});
const biryu=(x,y,s,o={})=>hero(x,y,s,{robe:'#B5874F',pattern:'dots',dotColor:'#FFF8EC',hair:'braid',belt:'#7A3B2C',ribbon:'#7A3B2C',...o});
const jumongK=(x,y,s,o={})=>hero(x,y,s,{robe:'#E7C76A',pattern:'dots',dotColor:'#7A3B2C',hat:'feather',belt:'#7A3B2C',beard:HAIR,...o});
const river=(y)=>`<path d="M-6 ${y} Q100 ${y-10} 200 ${y+4} Q300 ${y+16} 406 ${y} L406 ${y+30} Q300 ${y+44} 200 ${y+30} Q100 ${y+18} -6 ${y+28}Z" fill="#6FA8C8" ${sw(1.4)}/><path d="M60 ${y+14} q8 -6 16 0 M230 ${y+22} q8 -6 16 0" fill="none" stroke="#FFFFFF" stroke-width="2"/>`;
const salt=(x,y)=>`${[0,1,2].map(k=>`<path d="M${x-30+k*24} ${y} l10 -12 l10 12Z" fill="#FFFFFF" ${sw(1.2)}/>`).join('')}`;
const P=[
 {kind:'cover', svg:coverBase('oj','형제의 길',`${river(236)}`,onjoK(200,264,1.0,{pose:'up',mood:'joy'})),
  text:`<span class="big">온조와 백제의 시작</span><br>위인 그림책 {no}권`},
 {svg:SV(`${palace()}
  ${jumongK(200,272,.92,{mood:'smile'})}${biryu(90,272,.76,{mood:'smile'})}${onjo(310,272,.72,{mood:'joy'})}`,'#E6CFAA'),
  text:`아주 먼 옛날, 고구려라는 나라에서 두 왕자가 자랐어요. 형은 비류, 동생은 온조예요. 두 형제는 고구려를 세운 아버지 주몽처럼 씩씩한 사람이 되고 싶었어요.`},
 {svg:SV(`${hills('#A9CDB4','#BCD38F',196,222)}
  ${biryu(130,268,.86,{mood:'sad'})}${onjo(250,268,.82,{mood:'sad'})}
  ${hero(340,272,.62,{robe:'#EFE6D2',mood:'o'})}
  ${T(200,90,'우리 새 나라를 찾아가자',18,K.red)}`,'url(#oj2)',sky('oj2','#CFE7F2','#F6EAD0')),
  text:`그런데 어느 날, 형님 왕자 유리가 찾아와 다음 임금이 되기로 했어요. 비류와 온조는 따르는 사람들과 함께 남쪽으로 길을 떠났어요.`},
 {svg:SV(`${hills('#A9CDB4','#BCD38F',190,214)}
  <path d="M100 286 Q160 236 200 210 M200 210 Q150 190 90 186 M200 210 Q260 190 320 180" fill="none" stroke="#E6D3A6" stroke-width="12" stroke-linecap="round"/>
  ${biryu(110,262,.76,{pose:'up',mood:'o'})}${onjo(290,262,.76,{pose:'up',mood:'o'})}
  ${T(90,110,'나는 바닷가로!',16,K.red)}${T(310,110,'나는 강가로!',16,K.red)}`,'url(#oj3)',sky('oj3','#CFE7F2','#F6EAD0')),
  text:`한참을 걷다가 갈림길에 섰어요. 형 비류는 "나는 바닷가로 가겠다" 했어요. 동생 온조는 "나는 큰 강가로 가겠어요" 했어요.`},
 {chips:LEG, svg:SV(`${sea(150)}
  <path d="M-6 150 L180 150 L200 290 L-6 290Z" fill="#D9CDA4" ${sw()}/>
  <g id="tSalt">${salt(70,220)}${salt(130,250)}</g>
  <g id="tMi">${biryu(100,268,.8,{mood:'sad'})}</g>
  ${hut(200,170)}`,'url(#oj4)',sky('oj4','#C9D2D8','#E6E2D4')),
  taps:[{label:'짠 땅',el:'tSalt',say:'흙이 짭짤해서 곡식이 잘 자라지 않았어요.'},{label:'비류',el:'tMi',say:'물도 짜고 땅도 질척하네…'}],tapHint:'바닷가 땅을 눌러 보세요.',
  text:`비류가 간 미추홀은 바닷가라서 땅이 축축하고 물이 짰어요. 곡식을 심어도 잘 자라지 않았어요.`},
 {svg:SV(`${hills('#A9CDB4','#BCD38F',184,214)}${river(214)}
  <g id="tField">${[...Array(9)].map((_,k)=>[0,1,2].map(r=>{const x=20+k*44+(r%2)*20,y=236+r*18;return `<path d="M${x} ${y} q-2 -14 -8 -20 M${x} ${y} q2 -16 8 -22 M${x} ${y} v-22" fill="none" stroke="#7CA65A" stroke-width="3" stroke-linecap="round"/><circle cx="${x}" cy="${y-24}" r="3" fill="#E9C25A"/>`}).join('')).join('')}</g>
  <g id="tOnjo">${onjo(180,270,.86,{arms:'sowR',prop:H=>`<path d="M${H.L[0]-14} ${H.L[1]-6} q14 12 28 0 v-8 h-28Z" fill="#C9A15A" ${sw(1.4)}/>`+[0,1,2,3,4].map(k=>`<circle cx="${H.R[0]+8+k*9}" cy="${H.R[1]+4+k*k*2}" r="2.4" fill="#8A6A44"/>`).join(''),mood:'joy',face:'right',stance:'walk'})}</g>`,'url(#oj5)',sky('oj5','#CFE7F2','#F6EAD0')),
  taps:[{label:'큰 강',el:'tOnjo',say:'맑은 강물이 흘러서 마실 물도, 농사지을 물도 넉넉해요.'},{label:'기름진 들',el:'tField',say:'씨를 뿌리자 쑥쑥 자라났어요.'}],tapHint:'온조가 고른 땅을 눌러 보세요.',
  text:`온조가 간 곳은 한강 가의 위례였어요. 맑은 강이 흐르고 들판이 넓었지요. 씨를 뿌리자 곡식이 쑥쑥 자랐어요.`},
 {chips:['기원전 18년'], svg:SV(`${hills('#A9CDB4','#BCD38F',196,222)}
  <rect x="140" y="132" width="120" height="70" fill="#E8DCC4" ${sw()}/><path d="M124 138 Q200 90 276 138Z" fill="#4A4A55" ${sw()}/>
  <path d="M300 200 V80" ${sw(3)}/><rect x="300" y="80" width="60" height="38" fill="#5E9C8A" ${sw()}/>${T(330,106,'백제',18,'#FBF4E2')}
  ${onjoK(200,268,.9,{pose:'up',mood:'joy'})}${hero(90,272,.62,{robe:'#EFE6D2',mood:'joy',pose:'up'})}${hero(320,274,.6,{body:'dress',hair:'bun',mood:'joy'})}`,'url(#oj6)',sky('oj6','#CFE7F2','#F6EAD0')),
  text:`온조는 위례성에 새 나라를 세웠어요. 그 나라가 백제예요. 고구려, 신라와 함께 세 나라 가운데 하나가 되었어요.`},
 {svg:SV(`${hills('#A9CDB4','#BCD38F',196,222)}${river(222)}
  ${onjoK(150,262,.82,{pose:'up',mood:'joy'})}${biryu(260,262,.74,{mood:'smile'})}
  ${hero(330,266,.56,{robe:'#D6CDB4',mood:'joy'})}${hero(370,266,.54,{body:'dress',hair:'bun',mood:'joy'})}`,'url(#oj7)',sky('oj7','#CFE7F2','#F6EAD0')),
  text:`미추홀에서 고생하던 사람들도 온조를 찾아왔어요. 온조는 반갑게 맞아 주었어요. 형제의 사람들이 한 나라에서 함께 살게 되었어요.`},
 {svg:SV(`${cloud(80,40,.7)}${hills('#A9CDB4','#BCD38F',196,222)}
  <path d="M220 214 Q300 150 380 214Z" fill="#8FB88A" ${sw()}/><path d="M220 214 H380" stroke="#B9B3A6" stroke-width="8"/>
  ${kid(120,268,.96,{pose:'up',mood:'joy'})}${hero(330,270,.7,{body:'dress',hair:'bun',top:'#F2C14E',skirt:'#5B7FB8',mood:'smile'})}`,'url(#oj8)',sky('oj8','#E8F2F8','#F2EED8')),
  text:`서울 송파에는 백제 사람들이 흙을 쌓아 만든 풍납토성과 몽촌토성이 남아 있어요. 그 둘레를 걸으면 이천 년 전 백제 사람들이 살던 땅을 밟는 거예요.`},
 {kind:'end', svg:endBase('oj',`${river(150)}${T(200,130,'백제',56,K.red,`stroke="#FFF8EC" stroke-width="6" paint-order="stroke"`)}`,onjo(64,276,.5,{pose:'up',mood:'joy'}),onjoK(338,276,.55,{pose:'up',mood:'joy'})),
  text:`좋은 땅을 꼼꼼히 고른 왕자가 남긴 선물,<br>한강 가의 나라 백제.<br>오늘도 우리 곁에 있어요.<br><span class="big">끝</span>`},
 {kind:'talk'}
];
BOOKS.push({id:'onjo',era:'samguk',title:'온조와 백제의 시작',who:'온조',teaser:'주몽의 두 아들이 갈림길에서 서로 다른 길을 골랐어요. 누가 좋은 땅을 찾았을까요?',pages:P,
 talk:{three:['비류가 간 곳의 물은 어떤 맛이었지?','강물 흉내, 졸졸졸!','온조가 세운 나라 이름은 뭐였지?'],
  five:['온조는 왜 강가를 골랐을까?','둘 중 하나를 골라야 할 때 너는 어떻게 정해?','고생하던 사람들을 반갑게 맞아 준 까닭은 뭘까?'],
  note:'온조는 『삼국사기』에 전하는 백제의 시조입니다. 주몽의 아들 유리가 태자가 되자 형 비류와 함께 남쪽으로 내려왔고, 비류는 미추홀(지금의 인천)에, 온조는 하남 위례성에 자리 잡았다고 전합니다. 미추홀은 땅이 습하고 물이 짜서 살기 어려웠고, 비류가 죽은 뒤 그 백성이 위례로 옮겨 왔다고 합니다. 백제의 건국 연도는 기원전 18년으로 전하며, 서울 송파구의 풍납토성과 몽촌토성은 한성 백제 시기의 성입니다. 건국 과정은 전해 오는 이야기가 섞여 있습니다.'}});
})();
