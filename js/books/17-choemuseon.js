/* 12권 최무선: 끝까지 알아낸 화약 */
(()=>{
setScene('goryeo','summer');
const cm=(x,y,s,o={})=>hero(x,y,s,{robe:'#6E8FB0',hat:'gat',belt:K.gold,collar:'#FFF8EC',beard:HAIR,...o});
const merchant=(x,y,s,o={})=>hero(x,y,s,{robe:'#B5874F',hat:'band',bandColor:'#7A3B2C',belt:'#3A2E2A',beard:'#3B2618',...o});
const pirateShip=(x,y,s)=>g(x,y,s,`<path d="M-50 -6 Q-40 14 0 16 Q40 14 54 -6Z" fill="#3A3A44" ${sw(2.4)}/><path d="M0 -6 V-60" ${sw(3)}/><path d="M-26 -58 L26 -58 L22 -14 L-22 -14Z" fill="#5A5560" ${sw(2.4)}/>`);
const cannon=(x,y,s)=>g(x,y,s,`<rect x="-40" y="-26" width="70" height="22" rx="10" fill="#5A5560" ${sw()}/><rect x="26" y="-30" width="12" height="30" rx="4" fill="#3A3A44" ${sw(1.6)}/><circle cx="-20" cy="0" r="12" fill="${K.wood}" ${sw()}/><circle cx="12" cy="0" r="12" fill="${K.wood}" ${sw()}/>`);
const bowl=`<ellipse cx="0" cy="-30" rx="22" ry="9" fill="#8A6A44" ${sw()}/><ellipse cx="0" cy="-34" rx="16" ry="5" fill="#3A3330"/>`;
const smoke=(x,y)=>`<g id="tBoom"><circle cx="${x}" cy="${y}" r="20" fill="#E6E1D6" ${sw(1.4)}/><circle cx="${x+22}" cy="${y-10}" r="16" fill="#E6E1D6" ${sw(1.4)}/><circle cx="${x-18}" cy="${y-14}" r="14" fill="#E6E1D6" ${sw(1.4)}/>${firework(x,y-4,30,'#F29A2E')}</g>`;
const P=[
 {kind:'cover', svg:coverBase('cm','펑! 불꽃의 비밀',`${firework(70,150,26,'#F29A2E')}${firework(336,140,22,'#E98FA0')}`,cm(200,264,1.0,{pose:'up',mood:'joy'})),
  text:`<span class="big">최무선과 불꽃의 비밀</span><br>위인 그림책 {no}권`},
 {svg:SV(`${sea(150)}
  ${pirateShip(250,196,.9)}${pirateShip(340,180,.7)}
  <path d="M-6 170 Q80 160 160 176 L160 290 L-6 290Z" fill="#E6D3A6" ${sw()}/>${hut(20,150)}
  ${hero(110,268,.74,{robe:'#EFE6D2',skin:'#EDBF95',mood:'o'})}`,'url(#cm1)',sky('cm1','#B9C2CC','#DCDCD4')),
  text:`옛날 우리나라가 고려라는 이름이던 때예요. 바다 건너 왜구라는 해적들이 자꾸 쳐들어와 바닷가 마을 사람들을 괴롭혔어요.`},
 {svg:SV(`${room()}
  ${cm(140,268,.92,{pose:'hold',mood:'o',item:`<ellipse cx="0" cy="-30" rx="20" ry="18" fill="#8A6A44" ${sw()}/><path d="M-8 -46 q8 -8 16 0" fill="none" ${sw(2)}/><path d="M-12 -24 q12 6 24 0" fill="none" stroke="#3A322B" stroke-width="1.4"/><circle cx="18" cy="-50" r="3" fill="#3A322B"/><circle cx="24" cy="-44" r="2" fill="#3A322B"/>`})}
  ${T(290,110,'만드는 법이 비밀이래',18,K.red)}${T(290,150,'?',40,K.red)}`,'#EADCC0'),
  text:`최무선은 생각했어요. "화약이 있으면 해적을 물리칠 수 있을 텐데!" 하지만 화약 만드는 법은 이웃 나라가 꽁꽁 숨긴 비밀이었어요.`},
 {svg:SV(`<circle cx="340" cy="46" r="22" fill="${K.gold}" ${sw()}/>${sea(170)}
  <path d="M-6 190 L406 190 L406 230 L-6 230Z" fill="#B98A5A" ${sw()}/>
  ${g(320,196,.4,`<path d="M-80 -6 Q-70 22 0 24 Q70 22 90 -6Z" fill="#8A5A3C" ${sw(3)}/><path d="M0 -6 V-110" ${sw(5)}/><path d="M-44 -104 L44 -104 L38 -30 L-38 -30Z" fill="#F4E7C6" ${sw(3)}/>`)}
  ${cm(120,226,.82,{pose:'up',mood:'smile'})}${merchant(220,226,.78,{mood:'o'})}
  ${T(130,80,'화약 만드는 법을 아시오?',16,K.red)}`,'url(#cm3)',sky('cm3','#CFE7F2','#F6EAD0')),
  text:`그래서 날마다 항구에 나가 배를 타고 온 상인들에게 물어보았어요. "화약 만드는 법을 아시오?" 묻고 또 묻고, 또 물었지요.`},
 {svg:SV(`${room()}
  ${merchant(120,268,.9,{pose:'hold',mood:'smile',item:bowl})}${cm(280,268,.9,{pose:'up',mood:'joy'})}
  ${heart(200,110)}`,'#EADCC0'),
  text:`그러던 어느 날, 이원이라는 상인을 만났어요. 최무선이 정성껏 대접하자, 이원은 마침내 화약의 비밀을 알려 주었어요. 흙에서 하얀 가루를 얻는 방법이었어요.`},
 {svg:SV(`${room()}
  ${smoke(270,170)}
  <g id="tCm">${cm(110,268,.9,{pose:'up',mood:'o'})}</g>
  ${T(270,80,'펑!',36,K.red,`stroke="#FFF8EC" stroke-width="5" paint-order="stroke"`)}`,'#EADCC0'),
  taps:[{label:'화약',el:'tBoom',say:'펑! 연기가 피어올라요.'},{label:'최무선',el:'tCm',say:'어이쿠, 깜짝이야! 그래도 다시 해 보자!'}],tapHint:'화약을 눌러 볼까요?',
  text:`최무선은 몇 번이고 실험했어요. 펑! 연기가 나고 깜짝 놀라도 포기하지 않았어요. 마침내 고려에서도 화약을 만들 수 있게 되었어요.`},
 {chips:['1377년'], svg:SV(`${room()}
  ${cannon(250,240,1.2)}${cannon(330,236,.8)}
  ${cm(110,268,.9,{pose:'up',mood:'joy'})}`,'#E8D3B0'),
  text:`임금님은 화약과 무기를 만드는 곳을 세웠어요. 최무선은 그곳에서 화약을 넣어 쏘는 커다란 화포를 여러 가지 만들었어요.`},
 {chips:['1380년'], svg:SV(`${sea(150)}
  ${[260,320,370].map((x,k)=>pirateShip(x,190+(k%2)*20,.6)).join('')}
  ${g(90,200,.5,`<path d="M-80 -6 Q-70 22 0 24 Q70 22 90 -6Z" fill="#8A5A3C" ${sw(3)}/><path d="M0 -6 V-110" ${sw(5)}/><path d="M-44 -104 L44 -104 L38 -30 L-38 -30Z" fill="#F4E7C6" ${sw(3)}/>`)}
  ${cannon(140,188,.5)}
  <path d="M170 172 Q220 130 260 166" fill="none" stroke="#5A5560" stroke-width="2" stroke-dasharray="4 4"/>
  ${T(220,70,'펑! 펑!',30,K.red,`stroke="#FFF8EC" stroke-width="5" paint-order="stroke"`)}`,'url(#cm7)',sky('cm7','#CFE7F2','#F6EAD0')),
  text:`왜구의 배 수백 척이 진포 앞바다에 몰려왔어요. 최무선은 배에 화포를 싣고 나가 펑! 펑! 쏘았어요. 왜구는 크게 져서 물러갔어요.`},
 {svg:SV(`<rect x="-6" y="-6" width="412" height="292" fill="#1F2748"/>
  <g id="tFire">${firework(90,80,40,'#F29A2E')}${firework(210,60,46,'#E98FA0')}${firework(320,90,38,'#7FB3C8')}</g>
  <rect x="-6" y="216" width="412" height="70" fill="#3A3A50"/>
  ${kid(130,266,.96,{pose:'up',mood:'joy'})}${hero(260,266,.9,{body:'dress',hair:'braid',top:'#E98FA0',skirt:'#5B7FB8',pose:'up',mood:'joy'})}`,'#1F2748'),
  taps:[{label:'불꽃놀이',el:'tFire',say:'펑! 팡! 하늘에 꽃이 피었어요.'}],tapHint:'불꽃을 터뜨려 볼까요?',
  text:`밤하늘을 수놓는 불꽃놀이에도 화약이 들어 있어요. 펑! 팡! 최무선이 끝까지 알아낸 화약의 비밀이 오늘은 예쁜 불꽃이 되었어요.`},
 {kind:'end', svg:endBase('cm',`${firework(200,120,70,'#F29A2E')}${firework(200,120,40,'#E98FA0')}`,kid(64,276,.5,{pose:'up',mood:'joy'}),cm(338,276,.55,{pose:'up',mood:'joy'})),
  text:`묻고 또 물어 끝까지 알아낸 사람이 남긴 선물,<br>포기하지 않는 마음.<br>오늘도 우리 곁에 있어요.<br><span class="big">끝</span>`},
 {kind:'talk'}
];
BOOKS.push({id:'choemuseon',era:'goryeo',title:'최무선과 불꽃의 비밀',who:'최무선',teaser:'꽁꽁 숨겨진 화약의 비밀을 알아내려고 묻고 또 물은 사람이 있어요.',pages:P,
 talk:{three:['불꽃은 어떤 소리가 났지?','"펑!" 하고 손을 활짝 펴 볼까?','바다에 온 나쁜 해적은 누구였지?'],
  five:['최무선은 왜 묻고 또 물었을까?','실험이 잘 안 될 때는 어떻게 해야 할까?','궁금한 걸 끝까지 알아낸 적이 있어?'],
  note:'최무선(1325~1395)은 고려 말 왜구를 물리치려고 화약을 연구했습니다. 원나라 상인 이원에게서 염초(질산칼륨) 만드는 법을 배웠고, 1377년 화통도감이 세워지자 여러 화포를 만들었습니다. 1380년 진포 싸움에서 화포로 왜구의 배 500여 척을 불태워 크게 이겼습니다. 해적 이야기는 아이 눈높이에 맞춰 물리쳤다는 내용으로만 담았습니다.'}});
})();
