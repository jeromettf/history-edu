/* 곽재우: 붉은 옷을 입은 의병장 */
(()=>{
setScene('joseon','summer');
const LEG=['전해 오는 이야기'];
const jw=(x,y,s,o={})=>hero(x,y,s,{body:'armor',robe:'#D9483B',hat:'helmet',beard:HAIR,...o});
const jwS=(x,y,s,o={})=>hero(x,y,s,{robe:'#5E7FA8',hat:'gat',belt:K.gold,collar:'#FFF8EC',beard:HAIR,...o});
const farmerV=(x,y,s,c,o={})=>hero(x,y,s,{robe:c,skin:'#EDBF95',hat:'band',bandColor:'#FFFDF6',belt:'#8C7350',...o});
const VC=['#D6CDB4','#C9D8B4','#E9CFC0','#B9A475','#9FC2D8'];
const japan=(x,y,s,o={})=>hero(x,y,s,{body:'armor',robe:'#3A3A44',hat:'helmet',...o});
const P=[
 {kind:'cover', svg:coverBase('jw','하늘이 내린 홍의장군',`${horse(300,262,.6,{color:'#F4EFE0'})}`,jw(130,264,1.0,{arms:'flagR',prop:H=>PROP.flag(H,'#D9483B'),mood:'joy'})),
  text:`<span class="big">곽재우와 붉은 옷</span><br>위인 그림책 {no}권`},
 {svg:SV(`${ridge(160,'#A9CDB4',30,2)}<path d="M-6 200 Q200 190 406 202 L406 290 L-6 290Z" fill="#BCD38F"/><path d="M-6 250 Q200 230 406 250" fill="none" stroke="#6FA8C8" stroke-width="16"/>
  ${jwS(140,272,.86,{mood:'smile',arms:{L:[-30,-30],R:[40,-70]},prop:H=>`<path d="M${H.R[0]} ${H.R[1]} L${H.R[0]+40} ${H.R[1]-60}" stroke="${K.wood}" stroke-width="3"/><path d="M${H.R[0]+40} ${H.R[1]-60} q10 30 4 50" fill="none" stroke="#FFFFFF" stroke-width="1.4"/>`,face:'right'})}`,'url(#jw1)',sky('jw1','#CFE7F2','#F6EAD0')),
  text:`경상도 의령에 곽재우라는 선비가 살았어요. 벼슬을 하지 않고 고향에서 책을 읽고 낚시를 하며 지냈어요.`},
 {chips:['1592년'], svg:SV(`${ridge(160,'#A9B8A0',30,3)}<path d="M-6 200 Q200 190 406 202 L406 290 L-6 290Z" fill="#C9C08E"/>
  ${[0,1,2].map(k=>farmerV(240+k*50,266,.58,VC[k],{stance:'run',arms:'run',mood:'sad',face:'left'})).join('')}
  ${jwS(100,272,.86,{mood:'o',arms:'armsOpen',face:'right'})}
  ${T(200,80,'왜군이 쳐들어왔대요!',18,K.red)}`,'url(#jw2)',sky('jw2','#B9C2CC','#E6E2D4')),
  text:`1592년, 바다 건너 일본의 군대가 쳐들어왔어요. 임진왜란이에요. 나라의 군대가 밀리자 마을 사람들은 겁에 질렸어요.`},
 {svg:SV(`${yard(200)}
  ${jwS(200,272,.9,{mood:'joy',arms:'cheer'})}
  ${[0,1,2,3].map(k=>farmerV(50+k*100+(k>1?20:-20),280,.6,VC[k],{mood:'joy',arms:k%2?'cheer':'pointR',face:k>1?'left':'right'})).join('')}
  ${T(200,70,'우리 마을은 우리가 지킨다!',18,K.red)}`,'#D9CCAE'),
  text:`곽재우는 집의 재산을 털어 마을 사람들을 모았어요. 나라에서 시키지 않았는데도 스스로 나선 군대, '의병'이 처음으로 일어난 거예요.`},
 {chips:LEG, svg:SV(`${ridge(160,'#A9B8A0',30,3)}<path d="M-6 200 Q200 190 406 202 L406 290 L-6 290Z" fill="#BCD38F"/>
  <g id="tRed">${horse(200,262,.8,{color:'#F4EFE0',rider:rider(jw(0,0,1,{arms:'pointR',mood:'joy',face:'right'}))})}</g>
  ${[0,1].map(k=>`<path d="M${120-k*20} ${200+k*14} h-40" stroke="#D9483B" stroke-width="4" stroke-linecap="round" opacity=".7"/>`).join('')}`,'url(#jw3)',sky('jw3','#CFE7F2','#F6EAD0')),
  taps:[{label:'붉은 옷',el:'tRed',say:'멀리서도 잘 보이는 새빨간 옷! "하늘이 내린 붉은 옷의 장군이다!"'},{label:'히힝',el:'tRed',say:'흰 말을 타고 이 산 저 산에 번쩍 나타났대요.'}],tapHint:'붉은 옷 장군을 눌러 볼까요?',
  text:`곽재우는 붉은 옷을 입고 흰 말을 탔어요. 여기 번쩍, 저기 번쩍 나타나니 적군은 깜짝깜짝 놀랐어요. 사람들은 그를 '홍의장군'이라고 불렀어요.`},
 {svg:SVn(`${ridge(140,'#7FA88E',40,2)}<path d="M-6 180 Q200 170 406 182 L406 220 Q200 210 -6 222Z" fill="#5B9BC2" ${sw()}/><path d="M-6 220 H406 V290 H-6Z" fill="#BCD38F"/>
  ${[0,1,2].map(k=>japan(250+k*44,206-k*4,.34,{mood:'o',stance:'walk',arms:'walk',face:'left'})).join('')}
  <path d="M220 196 q14 8 30 4" fill="none" stroke="#FFFFFF" stroke-width="3"/>
  ${jw(80,272,.7,{arms:'pointR',mood:'smile',face:'right'})}${farmerV(150,276,.56,VC[0],{arms:'pointR',mood:'smile',face:'right'})}
  ${T(120,70,'남강을 지켜라',18,K.red)}`,'url(#jw4)',sky('jw4','#CFE7F2','#F6EAD0')),
  text:`곽재우는 고향의 산과 강을 손바닥처럼 잘 알았어요. 남강 나루터에서 적군이 강을 건너지 못하게 막아, 곡식이 많은 전라도 쪽으로 가는 길을 지켰어요.`},
 {svg:SV(`${hills('#A9CDB4','#BCD38F',190,214)}
  ${jwS(140,272,.86,{mood:'smile',arms:'handsDown',face:'right',beard:'#E6E1D6'})}
  ${tree(300,262,1.4,'pine')}`,'url(#jw5)',sky('jw5','#CFE7F2','#F6EAD0')),
  text:`전쟁이 끝난 뒤 곽재우는 높은 벼슬을 바라지 않았어요. 다시 조용히 고향으로 돌아가 지냈어요.`},
 {svg:SV(`${hills('#A9CDB4','#BCD38F',190,214)}
  ${kid(120,272,.86,{mood:'joy',arms:'flagR',prop:H=>PROP.flag(H,'#D9483B'),face:'right'})}${hero(290,272,.86,{body:'dress',hair:'bun',top:'#F2C14E',skirt:'#5B7FB8',mood:'smile',face:'left'})}
  ${T(200,80,'의령 의병 박물관',18,K.red)}`,'url(#jw6)',sky('jw6','#CFE7F2','#F6EAD0')),
  text:`지금 의령에는 곽재우와 의병을 기리는 곳이 있고, 해마다 의병의 날을 기념해요. 6월 1일이 바로 의병의 날이에요.`},
 {kind:'end', svg:endBase('jw',`${horse(200,230,1.0,{color:'#F4EFE0'})}`,kid(64,276,.5,{arms:'cheer',mood:'joy'}),jw(338,276,.55,{arms:'waveR',mood:'joy'})),
  text:`스스로 일어나 마을을 지킨 선비가 남긴 선물,<br>먼저 나서는 용기.<br>오늘도 우리 곁에 있어요.<br><span class="big">끝</span>`},
 {kind:'talk'}
];
BOOKS.push({id:'gwakjaeu',era:'joseon',title:'곽재우와 붉은 옷',who:'곽재우',teaser:'아무도 시키지 않았는데 스스로 마을 사람들을 모아 나선 선비가 있어요.',pages:P,
 talk:{three:['곽재우는 무슨 색 옷을 입었지?','말 타고 번쩍! 흉내 내 볼까?','우리 동네를 지키는 사람은 누가 있을까?'],
  five:['"의병"은 어떤 사람들일까?','곽재우는 왜 붉은 옷을 입었을까?','누가 시키지 않아도 먼저 해 본 좋은 일이 있어?'],
  note:'곽재우(1552~1617)는 경남 의령의 선비로, 1592년 4월 임진왜란이 일어나자 가장 먼저 의병을 일으킨 사람 가운데 한 명입니다. 붉은 옷을 입고 "천강홍의장군(하늘이 내린 붉은 옷의 장군)"이라 불렸고, 정암진(남강 나루) 싸움에서 일본군의 전라도 진출을 막았습니다. 흰 말을 탔다는 이야기는 전하는 이야기입니다. 정부는 곽재우가 의병을 일으킨 날(음력 4월 22일)을 양력으로 바꾼 6월 1일을 2010년부터 의병의 날로 기념하고 있습니다.'}});
})();
