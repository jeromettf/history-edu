/* 최영: 황금 보기를 돌같이 */
(()=>{
setScene('goryeo','autumn');
const cy=(x,y,s,o={})=>hero(x,y,s,{body:'armor',robe:'#B5473A',hat:'helmet',beard:HAIR,...o});
const cyKid=(x,y,s,o={})=>hero(x,y,s,{robe:'#E9C25A',hair:'braid',belt:'#B5473A',ribbon:HAIR,...o});
const dad=(x,y,s,o={})=>hero(x,y,s,{robe:'#5E7FA8',hat:'gat',belt:K.gold,beard:'#E6E1D6',...o});
const wokou=(x,y,s,o={})=>hero(x,y,s,{robe:'#5A5560',hat:'band',bandColor:'#3A2E2A',belt:'#3A2E2A',beard:'#3B2618',...o});
const gold=(x,y,s)=>g(x,y,s,`<path d="M-26 0 L-18 -16 L18 -16 L26 0Z" fill="${K.gold}" ${sw()}/><path d="M-10 -12 l6 -2" stroke="#FFFFFF" stroke-width="2"/>`);
const stone=(x,y,s)=>g(x,y,s,`<path d="M-24 0 Q-28 -16 -10 -20 Q12 -24 22 -12 Q28 -2 20 0Z" fill="#9E9686" ${sw()}/>`);
const P=[
 {kind:'cover', svg:coverBase('cy','황금은 돌처럼',`${gold(280,250,1.2)}${stone(330,254,1.2)}`,cy(130,264,1.0,{arms:'pointR',mood:'smile'})),
  text:`<span class="big">최영 장군과 아버지의 말씀</span><br>위인 그림책 {no}권`},
 {svg:SV(`${room()}
  ${dad(120,262,.9,{stance:'sit',arms:'pointR',mood:'smile',face:'right'})}${cyKid(270,264,.86,{stance:'sit',arms:'lap',mood:'o',face:'left'})}
  ${T(200,80,'황금 보기를 돌같이 하여라',18,K.red)}`,'#EADCC0'),
  text:`고려의 최영은 어릴 때 아버지에게 이런 말을 들었어요. "황금 보기를 돌같이 하여라." 반짝이는 금을 보고도 욕심내지 말라는 뜻이었어요.`},
 {svg:SV(`${yard(200)}
  <g id="tGold">${gold(150,250,1.3)}${gold(176,256,1.1)}</g><g id="tStone">${stone(250,252,1.3)}${stone(280,258,1.1)}</g>
  ${cyKid(330,266,.8,{mood:'smile',arms:'pointL',face:'left'})}`,'#D9CCAE'),
  taps:[{label:'황금',el:'tGold',say:'반짝반짝 황금! 그래도 최영에게는 돌처럼 보였어요.'},{label:'돌',el:'tStone',say:'금과 돌을 똑같이 본다는 건, 욕심에 흔들리지 않는다는 뜻이에요.'}],tapHint:'황금과 돌을 눌러 볼까요?',
  text:`최영은 아버지의 말씀을 띠에 적어 늘 지니고 다녔대요. 금을 봐도, 돌을 봐도 마음이 흔들리지 않았어요.`},
 {svg:SV(`<path d="M-6 150 Q200 140 406 150 L406 200 L-6 200Z" fill="#4F92BA"/><path d="M-6 196 H406 V290 H-6Z" fill="#C9C08E"/>
  ${bigShip(300,170,.5,'#3A322B')}${bigShip(360,176,.4,'#3A322B')}
  ${[0,1,2].map(k=>wokou(240+k*50,270,.56,{mood:'o',arms:'pointL',face:'left'})).join('')}
  ${[0,1].map(k=>hero(50+k*60,272,.56,{robe:['#D6CDB4','#E9CFC0'][k],hat:'band',bandColor:'#FFFDF6',mood:'sad',stance:'run',arms:'run',face:'left'})).join('')}`,'url(#cy1)',sky('cy1','#B9C2CC','#E6E2D4')),
  text:`그 무렵 고려의 바닷가 마을에는 왜구라는 해적이 자주 쳐들어와 곡식을 빼앗아 갔어요. 사람들은 무서워서 마을을 떠나기도 했어요.`},
 {chips:['1376년'], svg:SV(`${ridge(160,'#A9B8A0',30,3)}<path d="M-6 200 Q200 190 406 202 L406 290 L-6 290Z" fill="#C9C08E"/>
  ${horse(140,262,.66,{color:'#A9714A',rider:rider(cy(0,0,1,{arms:'pointR',mood:'joy',face:'right',beard:'#E6E1D6'}))})}
  ${[0,1,2].map(k=>wokou(270+k*40,262-k*4,.48,{stance:'run',arms:'run',mood:'o',face:'right'})).join('')}${dust(380,268,1)}`,'url(#cy2)',sky('cy2','#CFE7F2','#F6EAD0')),
  text:`예순 살의 최영 장군이 직접 말을 타고 앞장섰어요. 홍산에서 왜구를 크게 물리치자 사람들이 다시 마을로 돌아왔어요.`},
 {svg:SV(`${room()}
  ${cy(200,272,.9,{mood:'smile',arms:'handsDown',robe:'#8E5A4A',beard:'#E6E1D6'})}
  <rect x="290" y="210" width="70" height="50" fill="#D9C49A" ${sw()}/><path d="M290 226 h70" stroke="#8A6A44" stroke-width="2"/>
  ${hero(80,272,.7,{robe:'#5A5560',hat:'gat',mood:'o',face:'right',arms:'holdFront',prop:H=>gold((H.L[0]+H.R[0])/2,H.L[1]+4,.6)})}`,'#EADCC0'),
  text:`높은 장군이 되어서도 최영은 낡은 집에서 소박하게 살았어요. 누군가 선물을 들고 와도 받지 않았대요.`},
 {svg:SV(`${hills('#A9CDB4','#BCD38F',190,214)}
  ${cy(130,272,.86,{mood:'smile',arms:'pointR',face:'right',beard:'#E6E1D6'})}
  ${[0,1,2].map(k=>oldKid(240+k*50,276,.58,{mood:'joy',arms:k===1?'cheer':'handsDown',face:'left'})).join('')}
  ${T(200,80,'욕심보다 나라와 사람을 먼저!',16,K.red)}`,'url(#cy3)',sky('cy3','#CFE7F2','#F6EAD0')),
  text:`최영의 말은 오래오래 전해졌어요. 욕심보다 나라와 사람들을 먼저 생각한 장군으로 기억되고 있어요.`},
 {svg:SV(`${room()}
  ${gold(200,250,1.0)}${stone(250,252,1.0)}
  ${kid(110,266,.86,{mood:'smile',arms:'pointR',face:'right'})}${hero(320,266,.86,{body:'dress',hair:'braid',top:'#E98FA0',skirt:'#5B7FB8',mood:'joy',face:'left',arms:'handsDown'})}
  ${T(200,80,'친구 먼저 골라!',18,K.red)}`,'#EFE3C8'),
  text:`맛있는 과자가 하나 남았을 때, "친구 먼저 골라!" 하고 말해 본 적 있나요? 그것도 욕심을 이기는 멋진 마음이에요.`},
 {kind:'end', svg:endBase('cy',`${gold(170,200,1.6)}${stone(240,204,1.6)}`,kid(64,276,.5,{arms:'cheer',mood:'joy'}),cy(338,276,.55,{arms:'waveR',mood:'joy'})),
  text:`욕심을 이긴 장군이 남긴 선물,<br>황금을 돌처럼 보는 마음.<br>오늘도 우리 곁에 있어요.<br><span class="big">끝</span>`},
 {kind:'talk'}
];
BOOKS.push({id:'choeyoung',era:'goryeo',title:'최영 장군과 아버지의 말씀',who:'최영',teaser:'"황금 보기를 돌같이 하라." 이 말을 평생 지킨 장군이 있어요.',pages:P,
 talk:{three:['황금은 무슨 색이었지?','돌은 어떤 느낌일까? 딱딱!','말 타는 장군 흉내 내 볼까?'],
  five:['"황금 보기를 돌같이 하라"는 무슨 뜻일까?','욕심이 날 때 어떻게 참을 수 있을까?','친구에게 먼저 양보해 본 적 있어?'],
  note:'최영(1316~1388)은 고려 말의 장군입니다. 아버지 최원직이 "황금 보기를 돌같이 하라"고 당부했고 최영이 이를 평생 지켰다는 이야기는 『고려사』 열전에 실려 있습니다. 1376년 홍산 전투에서 왜구를 크게 물리쳤습니다. 1388년 요동 정벌을 추진했으나 이성계의 위화도 회군으로 실각하고 그해 처형되었습니다. 이 부분은 아이 나이에 맞춰 책에서 다루지 않았습니다.'}});
})();
