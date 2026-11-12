/* 6권 장보고: 바다를 좋아한 아이, 바다의 왕 */
(()=>{
setScene('samguk','summer');
const bogoKid=(x,y,s,o={})=>hero(x,y,s,{robe:'#7FB3C8',hair:'braid',belt:'#2C6E92',ribbon:'#2C6E92',...o});
const bogo=(x,y,s,o={})=>hero(x,y,s,{robe:'#2C6E92',hat:'band',bandColor:K.gold,belt:K.gold,collar:'#FFF8EC',...o});
const pirate=(x,y,s,o={})=>hero(x,y,s,{robe:'#5A5560',hat:'band',bandColor:'#3A2E2A',belt:'#3A2E2A',mood:'sad',...o});
const sea3=(y)=>`<rect x="-6" y="${y}" width="412" height="${290-y}" fill="#5B9BC2"/>${[30,100,170,240,310,380].map((x,k)=>`<path d="M${x-18} ${y+18+(k%2)*24} Q${x-9} ${y+8+(k%2)*24} ${x} ${y+18+(k%2)*24} Q${x+9} ${y+8+(k%2)*24} ${x+18} ${y+18+(k%2)*24}" fill="none" stroke="#FFFFFF" stroke-width="2.4" stroke-linecap="round"/>`).join('')}`;
const tradeShip=(x,y,s,cargo='')=>g(x,y,s,`<path d="M-80 -6 Q-70 22 0 24 Q70 22 90 -6Z" fill="#8A5A3C" ${sw()}/><path d="M-70 -6 H84" stroke="#6B4A33" stroke-width="3"/>${cargo}<path d="M0 -6 V-110" ${sw(4)}/><path d="M-44 -104 L44 -104 L38 -30 L-38 -30Z" fill="#F4E7C6" ${sw()}/><path d="M-40 -80 H40 M-39 -56 H39" stroke="#C9B48A" stroke-width="2"/><path d="M0 -110 L22 -120 L0 -128Z" fill="#C9473B" ${sw(1.4)}/>`);
const vase=(x,y,c='#7FB3A6')=>`<g id="tVase"><path d="M${x-10} ${y} Q${x-16} ${y-16} ${x-8} ${y-26} L${x-6} ${y-34} L${x+6} ${y-34} L${x+8} ${y-26} Q${x+16} ${y-16} ${x+10} ${y}Z" fill="${c}" ${sw()}/><path d="M${x-8} ${y-18} Q${x} ${y-24} ${x+8} ${y-18}" fill="none" stroke="#FFFFFF" stroke-width="1.6"/></g>`;
const silk=(x,y)=>`<g id="tSilk"><rect x="${x-18}" y="${y-26}" width="36" height="26" rx="4" fill="#E98FA0" ${sw()}/><path d="M${x-18} ${y-16} Q${x} ${y-8} ${x+18} ${y-16}" fill="none" stroke="#FFF3C4" stroke-width="2"/></g>`;
const books=(x,y)=>`<g id="tBooks">${[0,1,2].map(k=>`<rect x="${x-16}" y="${y-8-k*8}" width="32" height="8" rx="1" fill="${['#3F6FA8','#5E9C8A','#C9A15A'][k]}" ${sw(1.4)}/>`).join('')}</g>`;
const island=(x,y,s)=>g(x,y,s,`<path d="M-120 0 Q-80 -60 -20 -70 Q40 -90 120 0Z" fill="#94BFA6" ${sw()}/><path d="M-60 -40 Q-20 -60 20 -50" fill="none" stroke="#7FAE8E" stroke-width="3"/>`);
const P=[
 {kind:'cover', svg:coverBase('b','바다의 왕',`${g(80,246,.32,tradeShip(0,0,1))}`,bogo(220,264,1.0,{pose:'up',mood:'joy'})),
  text:`<span class="big">장보고와 바다의 길</span><br>위인 그림책 {no}권`},
 {svg:SV(`<circle cx="340" cy="46" r="22" fill="${K.gold}" ${sw()}/>${sea(150)}
  ${island(90,190,.9)}
  ${fish(300,230,'#F2A24B')}${fish(350,250,'#E98FA0')}
  ${bogoKid(220,250,.9,{pose:'up',mood:'joy'})}
  <path d="M168 240 Q220 226 272 240" fill="none" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round"/>`,'url(#b1)',sky('b1','#CFE7F2','#F4EBD2')),
  text:`먼 옛날, 신라의 바닷가 섬마을에 궁복이라는 아이가 살았어요. 궁복이는 헤엄치기를 세상에서 제일 좋아했어요.`},
 {svg:SV(`${cloud(80,40,.7)}${hills('#A9CDB4','#C7D88F',196,220)}
  <path d="M330 216 V140" stroke="#8A5A3C" stroke-width="10" stroke-linecap="round"/><ellipse cx="330" cy="120" rx="44" ry="32" fill="#5E9C6A" ${sw()}/>
  <circle cx="330" cy="160" r="20" fill="#FFFDF6" ${sw()}/><circle cx="330" cy="160" r="12" fill="#C9473B"/><circle cx="330" cy="160" r="4" fill="#FFFDF6"/>
  ${bogoKid(130,266,.92,{pose:'hold',mood:'joy',item:bowItem})}
  <path d="M168 196 L310 160" stroke="${L}" stroke-width="2" stroke-dasharray="6 6"/>`,'url(#b2)',sky('b2','#CFE7F2','#F6EAD0')),
  text:`궁복이는 활도 아주 잘 쏘았어요. 친구들과 바닷가를 뛰어다니며 활쏘기 내기를 하곤 했어요.`},
 {svg:SV(`${sea(150)}
  ${g(200,200,.6,tradeShip(0,0,1))}
  <path d="M-6 150 Q60 130 120 150 L120 150Z" fill="#94BFA6"/>
  ${T(320,80,'당나라로!',22,K.red)}`,'url(#b3)',sky('b3','#CFE7F2','#F6EAD0')),
  text:`어른이 된 궁복이는 배를 타고 바다 건너 당나라로 갔어요. 그곳에서 이름을 장보고라고 바꾸고 군인이 되었어요.`},
 {svg:SV(`${sea(140)}
  ${g(110,200,.5,tradeShip(0,0,1))}
  ${g(290,210,.55,`<path d="M-80 -6 Q-70 22 0 24 Q70 22 90 -6Z" fill="#3A3A44" ${sw()}/><path d="M0 -6 V-110" ${sw(4)}/><path d="M-44 -104 L44 -104 L38 -30 L-38 -30Z" fill="#5A5560" ${sw()}/>`)}
  ${pirate(296,190,.5)}${hero(110,186,.46,{robe:'#EFE6D2',mood:'sad',tear:true})}`,'url(#b4)',sky('b4','#B9C2CC','#DCDCD4')),
  text:`그런데 바다에는 나쁜 해적들이 있었어요. 신라 배를 빼앗고 사람들을 괴롭혔어요. 장보고는 그 모습을 그냥 두고 볼 수 없었어요.`},
 {chips:['828년'], svg:SV(`${palace()}
  ${king(126,272,.9,{mood:'smile'})}${bogo(276,272,.92,{pose:'up',mood:'smile'})}
  ${T(276,70,'바다를 지키겠습니다!',18,K.red)}`,'#E8D3B0'),
  text:`장보고는 신라로 돌아와 임금님께 말했어요. "제가 바다를 지키겠습니다!" 그리고 완도라는 섬에 청해진을 세웠어요.`},
 {svg:SV(`<circle cx="340" cy="46" r="22" fill="${K.gold}" ${sw()}/>${sea(170)}
  ${island(200,200,1.3)}
  <rect x="160" y="96" width="80" height="44" fill="#E8DCC4" ${sw()}/><path d="M150 100 Q200 70 250 100Z" fill="#4A4A55" ${sw()}/>
  <path d="M250 100 V60" ${sw(3)}/><rect x="250" y="60" width="44" height="26" fill="#2C6E92" ${sw(1.6)}/>${T(272,79,'청해진',11,'#FBF4E2')}
  ${g(70,250,.4,tradeShip(0,0,1))}${g(340,248,.4,tradeShip(0,0,1))}
  ${bogo(130,190,.5,{pose:'up',mood:'joy'})}`,'url(#b6)',sky('b6','#CFE7F2','#F6EAD0')),
  text:`청해진의 군사들이 바다를 지키자, 해적들은 무서워서 도망갔어요. 이제 사람들은 마음 놓고 배를 탈 수 있게 되었어요.`},
 {svg:SV(`${sea(200)}
  ${tradeShip(200,210,1.15,`${vase(-40,-8)}${silk(10,-8)}${books(56,-8)}`)}
  ${T(60,60,'신라',16,K.red)}${T(200,40,'당나라',16,K.red)}${T(340,60,'일본',16,K.red)}
  <path d="M80 64 Q140 30 170 40 M230 40 Q270 30 316 60" fill="none" stroke="${L}" stroke-width="2" stroke-dasharray="5 5"/>`,'url(#b7)',sky('b7','#CFE7F2','#F6EAD0')),
  taps:[{label:'도자기',el:'tVase',say:'반질반질 예쁜 그릇이에요.'},{label:'비단',el:'tSilk',say:'부드럽고 반짝이는 옷감이에요.'},{label:'책',el:'tBooks',say:'먼 나라의 이야기가 담긴 책이에요.'}],tapHint:'배에 실은 물건을 눌러 보세요.',
  text:`장보고의 배들은 신라와 당나라와 일본을 오가며 물건을 실어 날랐어요. 사람들은 장보고를 '바다의 왕'이라고 불렀대요.`},
 {svg:SV(`${sea(190)}
  <path d="M-6 190 Q100 170 200 186 L200 290 L-6 290Z" fill="#E6D3A6" ${sw()}/>
  ${g(300,226,.5,`<path d="M-80 -6 Q-70 22 0 24 Q70 22 90 -6Z" fill="#E8E2D2" ${sw()}/><rect x="-40" y="-50" width="80" height="44" fill="#FFFFFF" ${sw()}/>${[0,1,2,3].map(k=>`<rect x="${-34+k*18}" y="-42" width="12" height="12" fill="#BFE0F0" ${sw(1.2)}/>`).join('')}`)}
  ${kid(110,270,.96,{pose:'up',mood:'joy'})}
  ${star(200,90,8)}`,'url(#b8)',sky('b8','#E8F2F8','#F2EED8')),
  text:`지금도 큰 배들이 우리 바다를 오가며 물건을 실어 날라요. 완도에 가면 장보고 기념관에서 그 옛날 바다 이야기를 만날 수 있어요.`},
 {kind:'end', svg:endBase('b',`${g(200,196,1.1,tradeShip(0,0,1))}`,bogoKid(64,276,.5,{pose:'up',mood:'joy'}),bogo(338,276,.55,{pose:'up',mood:'joy'})),
  text:`헤엄치기를 좋아한 아이가 남긴 선물,<br>세상과 이어진 바닷길.<br>오늘도 우리 곁에 있어요.<br><span class="big">끝</span>`},
 {kind:'talk'}
];
BOOKS.push({id:'jangbogo',era:'samguk',title:'장보고와 바다의 길',who:'장보고',teaser:'헤엄치기를 좋아한 섬마을 아이가 바다의 왕이 되었어요.',pages:P,
 talk:{three:['궁복이가 좋아한 놀이는 뭐였지?','헤엄치는 흉내, 어푸어푸!','배에 실은 물건을 찾아볼까?'],
  five:['장보고는 왜 청해진을 세웠을까?','배로 다른 나라에 가면 무엇을 가져오고 싶어?','바다를 지키려면 어떤 마음이 필요할까?'],
  note:'장보고(?~846)는 어릴 때 이름이 궁복으로, 『삼국사기』에 활을 잘 쏘고 헤엄을 잘 쳤다고 전합니다. 당나라에서 군인으로 지내다 신라 사람들이 해적에게 잡혀가 노비로 팔리는 것을 보고 돌아와, 828년 흥덕왕의 허락을 받아 완도에 청해진을 세웠습니다. 신라, 당, 일본을 잇는 해상 무역을 이끌었으며, 846년 정치 다툼 속에 목숨을 잃었습니다.'}});
})();
