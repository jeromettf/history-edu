/* 3권 광개토대왕: 말 달리기를 좋아한 왕자 */
(()=>{
setScene('samguk','autumn');
const damdeok=(x,y,s,o={})=>hero(x,y,s,{robe:'#4F7DBA',pattern:'dots',dotColor:'#FFF8EC',hair:'braid',belt:K.gold,...o});
const gking=(x,y,s,o={})=>hero(x,y,s,{robe:'#C9473B',pattern:'dots',dotColor:K.gold,hat:'crown',belt:'#3A2E2A',...o});
const soldier=(x,y,s,o={})=>hero(x,y,s,{body:'armor',robe:'#7C6FA0',hat:'helmet',...o});
const flag=(x,y,c='#C9473B',h=70)=>`<path d="M${x} ${y} V${y-h}" ${sw(3)}/><path d="M${x} ${y-h} L${x+34} ${y-h+10} L${x} ${y-h+22}Z" fill="${c}" ${sw(1.6)}/>`;
const field=`<path d="M-6 196 Q120 170 220 190 Q320 168 406 194 L406 236 L-6 236Z" fill="#A9CDB4" ${sw()}/><path d="M-6 218 Q200 206 406 218 L406 286 L-6 286Z" fill="#C7D88F" ${sw()}/>`;
const P=[
 {kind:'cover', svg:coverBase('g','말 달리는 임금님',`${flag(330,236,'#C9473B',80)}${flag(62,236,K.gold,70)}`,horse(196,262,.98,{color:'#F4EFE0',rider:rider(gking(0,0,1,{pose:'up',mood:'joy'}))})),
  text:`<span class="big">광개토대왕과 씩씩한 고구려</span><br>위인 그림책 {no}권`},
 {svg:SV(`
  ${cloud(90,50,.8)}${cloud(300,40,.7)}${field}
  ${horse(210,266,.9,{color:'#A9714A',rider:rider(damdeok(0,0,1,{pose:'up',mood:'joy'}))})}
  <path d="M60 250 q-14 -4 -24 4 M70 236 q-16 -2 -26 6" fill="none" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round"/>
  ${tufts(262,[30,120,300,370])}`,'url(#g1)',sky('g1','#CFE7F2','#F6EAD0')),
  text:`아주 먼 옛날, 고구려라는 나라에 담덕이라는 왕자님이 태어났어요. 담덕은 몸집이 크고 씩씩했어요. 말을 타고 들판을 달리는 걸 좋아했어요.`},
 {chips:['391년'], svg:SV(`
  ${palace()}
  ${gking(200,268,1.0,{pose:'up',mood:'joy'})}
  ${hero(84,270,.66,{robe:'#E7C76A',pattern:'dots',dotColor:'#7A3B2C',hat:'feather',mood:'joy',pose:'up'})}${hero(316,270,.66,{robe:'#4F7DBA',pattern:'dots',hat:'feather',mood:'joy',pose:'up'})}
  ${star(120,70,9)}${star(290,60,8,'#F28C7C')}`,'#E8D3B0'),
  text:`열여덟 살에 담덕은 고구려의 임금님이 되었어요. 사람들은 훗날 그를 광개토대왕이라고 불렀어요. '땅을 넓게 연 큰 임금님'이라는 뜻이에요.`},
 {svg:SV(`
  <path d="M-6 150 Q100 120 200 140 Q300 116 406 146 L406 200 L-6 200Z" fill="#B8C4C0" ${sw()}/>
  ${flag(300,150,'#5A5560',50)}${flag(340,146,'#5A5560',44)}
  <path d="M276 150 Q320 120 370 146" fill="#D6CFC0" opacity=".7"/>
  ${field}
  ${hut(40,180)}
  ${hero(170,268,.86,{robe:'#EFE6D2',skin:'#EDBF95',mood:'sad'})}${hero(250,268,.8,{body:'dress',hair:'bun',mood:'sad'})}`,'url(#g3)',sky('g3','#C9D2D8','#E6E2D4')),
  text:`그런데 그 무렵, 고구려 둘레의 나라들이 자꾸 쳐들어왔어요. 백성들은 밭을 갈다가도 깜짝깜짝 놀라며 불안해했어요.`},
 {svg:SV(`
  ${cloud(320,40,.7)}${field}
  ${flag(70,232,K.gold,80)}${flag(110,236,'#C9473B',70)}
  ${horse(160,268,.62,{color:'#8A5A3C',rider:rider(soldier(0,0,1,{mood:'smile'}))})}
  ${horse(270,262,.92,{color:'#F4EFE0',rider:rider(gking(0,0,1,{pose:'up',mood:'smile'}))})}
  ${T(350,120,'다그닥!',22,K.red)}`,'url(#g4)',sky('g4','#CFE7F2','#F6EAD0')),
  text:`광개토대왕은 말 탄 군사들을 이끌고 나라를 지켰어요. 북쪽으로, 서쪽으로 달리고 또 달렸지요. 백성들은 다시 마음 놓고 농사를 지을 수 있었어요.`},
 {chips:['400년'], svg:SV(`
  ${palace()}
  ${gking(126,272,.92,{mood:'smile'})}
  ${hero(282,272,.86,{robe:'#5E9C8A',hat:'band',bandColor:K.gold,pose:'hold',mood:'sad',item:paperItem('도와주세요','Jua,sans-serif','#2E3A55')})}
  <rect x="246" y="40" width="60" height="38" rx="3" fill="#5E9C8A" ${sw()}/>${T(276,66,'신라',18,'#FBF4E2')}`,'#E8D3B0'),
  text:`어느 날 이웃 나라 신라에서 도움을 청하러 왔어요. "바다 건너온 군사들이 쳐들어왔어요. 도와주세요!" 광개토대왕은 군사를 보내 신라를 도와주었어요.`},
 {svg:SV(`
  <circle cx="340" cy="46" r="22" fill="${K.gold}" ${sw()}/>
  <path d="M-6 170 Q60 120 130 150 Q200 100 270 146 Q340 118 406 160 L406 220 L-6 220Z" fill="#A9CDB4" ${sw()}/>
  <path d="M-6 210 Q200 196 406 210 L406 286 L-6 286Z" fill="#C7D88F" ${sw()}/>
  ${flag(60,168,'#C9473B',40)}${flag(140,148,'#C9473B',40)}${flag(220,130,'#C9473B',40)}${flag(290,146,'#C9473B',40)}${flag(360,160,'#C9473B',40)}
  ${hut(30,190)}${hut(300,196)}
  ${hero(150,268,.78,{robe:'#EFE6D2',skin:'#EDBF95',mood:'joy',pose:'up'})}${hero(230,268,.74,{body:'dress',hair:'bun',mood:'joy'})}`,'url(#g6)',sky('g6','#CFE7F2','#F6EAD0')),
  text:`광개토대왕 덕분에 고구려 땅은 아주아주 넓어졌어요. 넓은 들판에서 백성들은 곡식을 기르고 말을 키웠어요.`},
 {chips:['414년'], svg:SV(`
  ${cloud(80,44,.8)}${hills('#A9CDB4','#C7D88F',196,224)}
  <g id="tStele">${stele(200,250,1.3)}</g>
  ${hero(108,270,.82,{robe:'#C9473B',pattern:'dots',dotColor:K.gold,hat:'crown',belt:'#3A2E2A',mood:'smile'})}
  <g id="tKid">${kid(300,270,.6,{mood:'o'})}</g>
  <path d="M262 64 V246" stroke="${L}" stroke-width="1.6" stroke-dasharray="4 4"/>${T(300,150,'어른',13)}${T(300,166,'네 명 키',13)}`,'url(#g7)',sky('g7','#D9EDF4','#F3EEDC')),
  taps:[{label:'큰 돌',el:'tStele',say:'광개토대왕릉비예요. 고구려 사람들이 새긴 글자가 빼곡해요.'},{label:'키 재기',el:'tKid',say:'돌이 어른 네 명 키만큼 높아요. 우리는 몇 명이 올라서야 닿을까?'}],
  text:`광개토대왕이 세상을 떠나자, 아들 장수왕은 아버지가 한 일을 커다란 돌에 새겼어요. 어른 네 명을 쌓은 것만큼 높은 돌이에요.`},
 {svg:SV(`
  ${hills('#A9CDB4','#C7D88F',196,224)}
  <rect x="140" y="70" width="120" height="180" fill="#C8B79A" ${sw()}/><path d="M124 76 Q200 34 276 76 L268 64 Q200 22 132 64Z" fill="#7E7A86" ${sw()}/>
  ${stele(200,248,1.0)}
  ${kid(88,270,.86,{pose:'up',mood:'o'})}${hero(320,270,.86,{body:'dress',hair:'bun',top:'#F2C14E',skirt:'#5B7FB8',mood:'smile'})}`,'url(#g8)',sky('g8','#E8F2F8','#F2EED8')),
  text:`그 돌, 광개토대왕릉비는 천육백 년이 지난 지금도 그 자리에 서 있어요. 고구려 사람들이 직접 새긴 글자로 그때 일을 지금 우리에게 알려 줘요.`},
 {kind:'end', svg:endBase('g',`${horse(208,200,1.0,{color:'#F4EFE0'})}${flag(110,200,'#C9473B',110)}`,damdeok(64,276,.5,{pose:'up',mood:'joy'}),gking(338,276,.55,{pose:'up',mood:'joy'})),
  text:`말 달리기를 좋아한 왕자가 지켜 낸 선물,<br>씩씩한 고구려 이야기.<br>오늘도 우리 곁에 있어요.<br><span class="big">끝</span>`},
 {kind:'talk'}
];
BOOKS.push({id:'gwanggaeto',era:'samguk',title:'광개토대왕과 씩씩한 고구려',who:'광개토대왕',teaser:'말 달리기를 좋아한 왕자가 고구려를 아주 넓은 나라로 만들었어요.',pages:P,
 talk:{three:['담덕이 좋아한 동물은 뭐였지?','말 타는 흉내, 다그닥 다그닥!','커다란 돌을 찾아볼까?'],
  five:['광개토대왕은 왜 신라를 도와주었을까?','친구가 도와 달라고 하면 너는 어떻게 할래?','큰 돌에 글을 새긴 까닭은 뭘까?'],
  note:'광개토대왕(374~412)은 고구려 19대 임금으로, 391년 열여덟 살에 왕이 되었습니다. 400년 신라의 요청으로 군사를 보내 왜군을 물리친 일이 광개토대왕릉비에 기록되어 있습니다. 비석은 414년 아들 장수왕이 세웠고 높이는 약 6.4미터이며, 지금은 중국 지린성 지안에 있습니다. 전쟁 장면은 아이 눈높이에 맞춰 나라를 지켰다는 내용으로만 담았습니다.'}});
})();
