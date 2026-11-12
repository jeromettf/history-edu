/* 2권 주몽: 활 잘 쏘는 아이와 고구려 (건국 신화) */
(()=>{
setScene('samguk','summer');
const LEG=['전해 오는 이야기'];
const yuhwa=(x,y,s,o={})=>hero(x,y,s,{body:'dress',top:'#F6E2A6',skirt:'#7FB3C8',hair:'long',...o});
const jmKid=(x,y,s,o={})=>hero(x,y,s,{robe:'#E7C76A',pattern:'dots',dotColor:'#7A3B2C',hair:'braid',belt:'#7A3B2C',...o});
const jumong=(x,y,s,o={})=>hero(x,y,s,{robe:'#E7C76A',pattern:'dots',dotColor:'#7A3B2C',hat:'feather',belt:'#7A3B2C',...o});
const prince2=(x,y,s,o={})=>hero(x,y,s,{robe:'#7C6FA0',hat:'band',bandColor:K.gold,belt:'#3A2E2A',...o});
const bird=(x,y,s=1,flip=1)=>g(x,y,s,`<g transform="scale(${flip} 1)"><ellipse cx="0" cy="0" rx="18" ry="12" fill="#F4EFE0" ${sw()}/><path d="M-4 -4 Q-30 -30 -40 -6 Q-24 -8 -10 4Z" fill="#E6DCCB" ${sw()}/><circle cx="14" cy="-8" r="9" fill="#F4EFE0" ${sw()}/><path d="M22 -9 L30 -6 L22 -4Z" fill="${K.gold}" ${sw(1.2)}/><circle cx="16" cy="-10" r="1.8" fill="${L}"/></g>`);
const dog=(x,y,s=1)=>g(x,y,s,`<ellipse cx="0" cy="-14" rx="22" ry="14" fill="#D9B48A" ${sw()}/><circle cx="20" cy="-30" r="12" fill="#D9B48A" ${sw()}/><ellipse cx="14" cy="-38" rx="5" ry="9" fill="#A9714A" ${sw(1.4)} transform="rotate(-20 14 -38)"/><circle cx="23" cy="-32" r="1.8" fill="${L}"/><circle cx="31" cy="-28" r="2" fill="${L}"/><path d="M-20 -18 q-10 -10 -6 -18" fill="none" stroke="#D9B48A" stroke-width="5" stroke-linecap="round"/>`);
const target=(x,y,r=26)=>`<circle cx="${x}" cy="${y}" r="${r}" fill="#FFFDF6" ${sw()}/><circle cx="${x}" cy="${y}" r="${r*.66}" fill="#C9473B"/><circle cx="${x}" cy="${y}" r="${r*.33}" fill="#FFFDF6"/><circle cx="${x}" cy="${y}" r="${r*.12}" fill="#C9473B"/>`;
const arrowIn=(x,y)=>`<path d="M${x} ${y} L${x-46} ${y+12}" ${sw(3)}/><path d="M${x-46} ${y+12} l-8 -5 M${x-46} ${y+12} l-6 7" ${sw(2.4)}/>`;
const river=(y1,y2)=>`<rect x="-6" y="${y1}" width="412" height="${y2-y1}" fill="#6FA8C8"/>${[40,120,200,280,360].map((x,k)=>`<path d="M${x-16} ${y1+14+(k%2)*16} q8 -8 16 0 q8 8 16 0" fill="none" stroke="#FFFFFF" stroke-width="2.4" stroke-linecap="round"/>`).join('')}`;
const P=[
 {kind:'cover', svg:coverBase('j','활 잘 쏘는 아이',`${egg(70,256,.55)}${target(336,200,22)}`,jumong(200,264,1.0,{pose:'hold',mood:'joy',item:bowItem})),
  text:`<span class="big">주몽과 고구려</span><br>위인 그림책 {no}권`},
 {chips:LEG, svg:SV(`
  <circle cx="340" cy="44" r="26" fill="${K.gold}" ${sw()}/>
  <path d="M332 66 L196 214 L250 230 L352 70Z" fill="#FFF3C4" opacity=".55"/>
  ${hills('#A9CDB4','#BCD38F',196,222)}
  <rect x="40" y="150" width="96" height="56" fill="#F3E6CB" ${sw()}/><path d="M24 156 Q88 106 152 156Z" fill="#4A4A55" ${sw()}/>
  ${yuhwa(220,266,1.0,{mood:'o'})}
  ${star(250,150,8)}${star(186,130,6)}`,'url(#j1)',sky('j1','#D3E9F1','#F6EBD0')),
  text:`아주 먼 옛날, 부여라는 나라에 유화라는 여인이 살았어요. 어느 날 따뜻한 햇빛이 유화를 졸졸 따라다니며 비추더니, 유화가 커다란 알을 하나 낳았어요.`},
 {chips:LEG, svg:SV(`
  ${hills('#A9CDB4','#BCD38F',190,214)}
  ${egg(200,252,1.1)}
  ${bird(150,156,1.1,1)}${bird(252,150,1.1,-1)}
  ${horse(330,268,.62,{color:'#8A5A3C'})}${dog(72,262,1)}
  ${tufts(258,[30,120,280])}`,'url(#j2)',sky('j2','#D3E9F1','#F6EBD0')),
  text:`왕은 이상한 알이라며 밖에 내다 버렸어요. 그런데 말과 개는 알을 밟지 않고 피해 다녔고, 새들은 날개로 알을 따뜻하게 덮어 주었대요.`},
 {chips:LEG, svg:SV(`
  <circle cx="200" cy="170" r="140" fill="url(#jg3)"/>
  <path d="M-6 222 Q200 210 406 222 L406 286 L-6 286Z" fill="#BCD38F" ${sw()}/>
  <path d="M130 250 Q120 214 146 200 L160 212 L172 198 L186 214 Z" fill="#FFFBEE" ${sw()}/><path d="M270 250 Q280 214 254 200 L240 212 L228 198 L214 214Z" fill="#FFFBEE" ${sw()}/>
  ${jmKid(200,262,.95,{pose:'up',mood:'joy'})}
  ${star(110,110,10)}${star(296,100,9,'#F28C7C')}${star(150,60,6)}${star(260,58,7)}`,'url(#j3)',sky('j3','#FCE9C2','#E8F1E2')+glow('jg3','#FFF6D8',.95)),
  text:`얼마 뒤, 알을 깨고 씩씩한 사내아이가 나왔어요. 눈이 반짝반짝 빛나는 아이였어요.`},
 {chips:LEG, svg:SV(`
  ${hills('#A9CDB4','#BCD38F',190,214)}
  <path d="M330 214 V120" stroke="#8A5A3C" stroke-width="10" stroke-linecap="round"/><ellipse cx="330" cy="100" rx="46" ry="34" fill="#5E9C6A" ${sw()}/>
  ${target(330,150,24)}${arrowIn(330,150)}
  ${jmKid(120,266,.92,{pose:'hold',mood:'joy',item:bowItem})}
  ${T(232,120,'슝!',28,K.red)}`,'url(#j4)',sky('j4','#D3E9F1','#F6EBD0')),
  text:`아이는 일곱 살에 혼자 활과 화살을 만들었어요. 쏘기만 하면 백 번 쏘아 백 번 다 맞혔지요. 그래서 '활을 잘 쏘는 사람'이라는 뜻으로 주몽이라고 불렀어요.`},
 {chips:LEG, svg:SV(`
  <circle cx="330" cy="50" r="20" fill="#F6F0D6" ${sw()}/>${star(60,40,4,'#F6F0D6')}${star(200,30,3,'#F6F0D6')}
  <path d="M-6 200 Q200 180 406 200 L406 286 L-6 286Z" fill="#4E5A4A" ${sw()}/>
  <rect x="20" y="120" width="120" height="80" fill="#8E8778" ${sw()}/><path d="M6 126 Q80 78 154 126Z" fill="#3A3A44" ${sw()}/>
  ${prince2(60,206,.6,{mood:'sad'})}${prince2(104,206,.6,{mood:'sad'})}
  ${horse(270,262,.9,{color:'#F4EFE0',rider:rider(jumong(0,0,1,{mood:'smile'}))})}
  ${hero(186,266,.66,{robe:'#B9A475',mood:'smile'})}`,'url(#j5)',sky('j5','#1F2748','#46406A')),
  text:`그런데 왕의 아들들은 주몽이 너무 뛰어나서 샘을 냈어요. 주몽은 위험하다는 걸 알고, 친구들과 함께 몰래 길을 떠났어요.`},
 {chips:LEG, svg:SV(`
  ${river(176,236)}
  <path d="M-6 236 Q200 228 406 236 L406 286 L-6 286Z" fill="#BCD38F" ${sw()}/>
  <path d="M-6 176 Q120 166 260 172 Q340 164 406 170 L406 120 L-6 120Z" fill="#A9CDB4" ${sw()}/>
  <path d="M330 220 Q350 200 380 210 Q396 226 376 238 Q350 240 330 230Z" fill="#D9CDB4" opacity=".8"/>
  ${horse(150,272,.9,{color:'#F4EFE0',rider:rider(jumong(0,0,1,{pose:'up',mood:'o'}))})}
  ${T(330,206,'두두두…',18,K.ink)}`,'url(#j6)',sky('j6','#CFE7F2','#F6EAD0')),
  text:`한참을 달리다 커다란 강에 막혔어요. 뒤에서는 군사들이 쫓아오고 있었어요. 주몽이 외쳤어요. "나는 하늘과 물의 신의 자손이다! 길을 열어 다오!"`},
 {chips:LEG, svg:SV(`
  ${river(150,250)}
  <path d="M-6 150 Q200 140 406 150 L406 100 L-6 100Z" fill="#A9CDB4" ${sw()}/>
  <path d="M-6 250 Q200 244 406 250 L406 286 L-6 286Z" fill="#BCD38F" ${sw()}/>
  <g id="tTurtle">${[20,100,180,260,340].map(x=>turtle(x+20,222)).join('')}</g><g id="tFish">${[0,40,80,120,160,200,240,280,320,360,400].map((x,k)=>fish(x-8,212,k%2?'#F2A24B':'#E98FA0')).join('')}</g>
  ${horse(210,212,.62,{color:'#F4EFE0',rider:rider(jumong(0,0,1,{arms:'waveR',mood:'joy',face:'right'}))})}`,'url(#j7)',sky('j7','#CFE7F2','#F6EAD0')),
  taps:[{label:'물고기',el:'tFish',say:'물고기가 꼬리를 살랑살랑 흔들어요.'},{label:'자라',el:'tTurtle',say:'자라가 등을 쭉 펴서 다리가 되어 줘요.'}],tapHint:'다리가 되어 준 친구들을 눌러 보세요.',
  text:`그러자 물고기와 자라들이 떠올라 다리를 만들어 주었어요! 주몽이 무사히 건너자 다리는 흩어졌고, 쫓아오던 군사들은 강을 건너지 못했대요.`},
 {chips:['기원전 37년'], svg:SV(`
  ${cloud(80,50,.8)}<circle cx="330" cy="54" r="24" fill="${K.gold}" ${sw()}/>
  <path d="M-6 200 Q80 150 200 124 Q320 150 406 200 L406 286 L-6 286Z" fill="#A9CDB4" ${sw()}/>
  <path d="M-6 236 Q200 222 406 236 L406 286 L-6 286Z" fill="#BCD38F" ${sw()}/>
  <rect x="166" y="22" width="68" height="42" rx="3" fill="#C9473B" ${sw()}/>${T(200,52,'고구려',20,'#FBF4E2')}<path d="M234 22 V114" ${sw(3)}/>
  ${jumong(200,208,.86,{pose:'up',mood:'joy'})}
  ${hero(80,272,.62,{robe:'#E7C76A',pattern:'dots',dotColor:'#7A3B2C',mood:'joy',pose:'up'})}${hero(150,276,.58,{body:'dress',hair:'bun',mood:'joy'})}${hero(262,276,.58,{robe:'#C9473B',pattern:'dots',mood:'joy'})}${hero(332,272,.62,{body:'dress',hair:'braid',top:'#E7C76A',mood:'joy',pose:'up'})}`,'url(#j8)',sky('j8','#CFE7F2','#F6EAD0')),
  text:`주몽은 졸본이라는 곳에 새 나라를 세웠어요. 그 나라가 바로 고구려예요. 고구려 사람들은 주몽처럼 말 타기와 활쏘기를 아주 잘했대요.`},
 {svg:SV(`
  ${hills('#A9CDB4','#BCD38F',190,214)}
  ${target(320,160,30)}${arrowIn(320,160)}<path d="M320 190 V214" ${sw(4)}/>
  ${kid(140,266,1.0,{pose:'hold',mood:'joy',item:bowItem})}
  ${star(240,110,8)}`,'url(#j9)',sky('j9','#E8F2F8','#F2EED8')),
  text:`고구려 사람들은 무덤 벽에 말을 타고 활을 쏘는 모습을 그려 남겼어요. 지금도 우리나라 양궁 선수들은 세계에서 손꼽히게 활을 잘 쏴요. 올림픽에서 금메달도 여러 번 땄어요.`},
 {kind:'end', svg:endBase('j',`${target(200,124,70)}${arrowIn(200,124)}`,egg(64,276,.5),jumong(338,276,.55,{pose:'up',mood:'joy'})),
  text:`활쏘기를 좋아한 아이가 세운 나라, 고구려.<br>그 씩씩한 이야기가<br>오늘도 우리 곁에 있어요.<br><span class="big">끝</span>`},
 {kind:'talk'}
];
BOOKS.push({id:'jumong',era:'samguk',title:'주몽과 고구려',who:'주몽',teaser:'알에서 태어난 아이가 활을 쏘면 백 번 쏘아 백 번 다 맞혔대요.',pages:P,
 talk:{three:['알에서 누가 나왔지?','물고기와 자라를 찾아볼까?','활 쏘는 흉내, 슝!'],
  five:['새들은 왜 알을 덮어 주었을까?','주몽은 강을 어떻게 건넜을까?','너라면 어떤 동물에게 도와 달라고 할래?'],
  note:'주몽 이야기는 『삼국사기』와 『삼국유사』에 실린 고구려 건국 신화로, 책 전체가 전해 오는 이야기입니다. 기원전 37년은 『삼국사기』에 전하는 고구려 건국 연도입니다. 활 쏘며 사냥하는 모습은 무용총 같은 고구려 무덤 벽화에 실제로 남아 있습니다.'}});
})();
