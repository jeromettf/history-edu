/* 7권 허준: 아픈 사람을 그냥 지나치지 못한 의원 */
(()=>{
const heojun=(x,y,s,o={})=>hero(x,y,s,{robe:'#EDE9E0',hat:'gat',belt:'#5E9C8A',collar:'#5E9C8A',...o});
const heojunOld=(x,y,s,o={})=>heojun(x,y,s,{beard:'#8A8580',...o});
const seonjo=(x,y,s,o={})=>king(x,y,s,{beard:HAIR,...o});
const mtn=`<path d="M-6 190 Q60 90 130 140 Q200 60 280 130 Q340 90 406 150 L406 236 L-6 236Z" fill="#94BFA6" ${sw()}/>`;
const roomBg=`<rect x="-6" y="-6" width="412" height="230" fill="#EADCC0"/><rect x="-6" y="216" width="412" height="70" fill="#DDB16A"/><path d="M-6 236 H406 M-6 258 H406" stroke="#C99A52" stroke-width="2"/>`;
const sickKid=`<rect x="40" y="226" width="150" height="26" rx="6" fill="#F4EFE0" ${sw()}/><rect x="40" y="222" width="110" height="20" rx="6" fill="#E98FA0" ${sw()}/>`+g(166,226,.6,`<ellipse cx="0" cy="0" rx="26" ry="24" fill="${SK}" ${sw()}/><path d="M-26 -6 Q-24 -26 0 -26 Q24 -26 26 -6Z" fill="${HAIR}" ${sw()}/><path d="M-12 2 Q-8 5 -4 2 M4 2 Q8 5 12 2" fill="none" ${sw(2.2)}/><path d="M-5 12 Q0 8 5 12" fill="none" ${sw(2)}/>`)+`<rect x="150" y="196" width="30" height="10" rx="3" fill="#FFFFFF" ${sw(1.4)}/>`;
const P=[
 {kind:'cover', svg:coverBase('h','아픈 사람을 낫게',`${herb(60,256)}${herb(80,260,'#7CB66E')}${herb(338,258)}`,heojun(200,264,1.0,{pose:'hold',mood:'joy',item:herbBasket})),
  text:`<span class="big">허준과 동의보감</span><br>위인 그림책 {no}권`},
 {svg:SV(`${roomBg}${sickKid}
  ${hero(250,268,.78,{body:'dress',hair:'bun',mood:'sad'})}
  ${heojun(330,268,.86,{pose:'hold',mood:'smile',item:`<rect x="-14" y="-46" width="28" height="22" rx="4" fill="#C9A15A" ${sw()}/><path d="M-10 -46 Q0 -56 10 -46" fill="none" ${sw(1.6)}/>`})}`,'#EADCC0'),
  text:`세종대왕이 한글을 만들고 백 년쯤 지난 조선이에요. 허준이라는 사람은 아픈 사람을 보면 그냥 지나치지 못했어요. 그래서 병을 고치는 의원이 되었지요.`},
 {svg:SV(`${cloud(80,44,.7)}${mtn}
  <path d="M-6 220 Q200 206 406 220 L406 286 L-6 286Z" fill="#BCD38F" ${sw()}/>
  <g id="tSsuk">${herb(60,262)}${herb(352,258)}</g><g id="tDoraji">${herb(300,262,'#9B7FD1')}${herb(100,256,'#9B7FD1')}</g>${herb(250,270,'#7CB66E')}
  ${heojun(180,268,.92,{pose:'hold',mood:'joy',item:herbBasket})}
  `,'url(#h2)',sky('h2','#CFE7F2','#F6EAD0')),
  taps:[{label:'쑥',el:'tSsuk',say:'배가 아플 때 쓰던 쑥이에요. 향이 아주 좋아요.'},{label:'도라지',el:'tDoraji',say:'기침할 때 쓰던 도라지예요. 보라색 꽃이 피어요.'}],tapHint:'약이 되는 풀을 눌러 보세요.',
  text:`허준은 산과 들을 다니며 약이 되는 풀을 찾았어요. 쑥과 도라지처럼 우리 땅에서 자라는 풀도 좋은 약이 되었지요.`},
 {svg:SV(`
  <rect x="-6" y="-6" width="412" height="230" fill="#E8D3B0"/>
  <rect x="14" y="-6" width="22" height="236" fill="#B5473A" ${sw()}/><rect x="364" y="-6" width="22" height="236" fill="#B5473A" ${sw()}/>
  <rect x="-6" y="222" width="412" height="64" fill="#A87E52"/>
  ${seonjo(130,272,.9,{mood:'smile'})}${heojun(274,272,.9,{pose:'hold',mood:'smile',item:`<rect x="-30" y="-50" width="60" height="36" rx="3" fill="#C9A15A" ${sw()}/><circle cx="-14" cy="-34" r="6" fill="#7CB66E"/><circle cx="2" cy="-30" r="5" fill="#E98FA0"/><circle cx="16" cy="-36" r="5" fill="#7CB66E"/>`})}
  ${star(200,70,9)}`,'#E8D3B0'),
  text:`솜씨가 널리 알려져 허준은 궁궐의 의원이 되었어요. 임금님과 왕자님의 병도 정성껏 돌봤지요.`},
 {svg:SV(`${cloud(300,40,.7)}${hills('#A9CDB4','#BCD38F',196,222)}
  ${hut(30,176)}
  ${hero(170,268,.92,{robe:'#EFE6D2',skin:'#EDBF95',hair:'topknot',mood:'sad',pose:'hold',item:bigBook('醫學入門','#7A6A55')})}
  ${T(170,110,'?',34,K.red)}
  <circle cx="300" cy="200" r="16" fill="${K.gold}" ${sw()}/><rect x="294" y="194" width="12" height="12" fill="#EADCC0" ${sw(1.4)}/><circle cx="330" cy="214" r="14" fill="${K.gold}" ${sw()}/><rect x="325" y="209" width="10" height="10" fill="#EADCC0" ${sw(1.4)}/>`,'url(#h4)',sky('h4','#D9EDF4','#F3EEDC')),
  text:`그런데 백성들에게는 곤란한 일이 있었어요. 의학책은 어려운 한자로만 쓰여 있었고, 좋은 약은 먼 나라에서 비싸게 사 와야 했거든요.`},
 {chips:['1596년'], svg:SV(`
  <rect x="40" y="34" width="80" height="76" rx="6" fill="#1C2347" stroke="#8C6A48" stroke-width="5"/><circle cx="84" cy="66" r="16" fill="#F6F0D6"/><circle cx="92" cy="60" r="14" fill="#1C2347"/>
  <rect x="-6" y="222" width="412" height="64" fill="#6B4E3A"/>
  <circle cx="300" cy="180" r="140" fill="url(#hg5)"/>
  <ellipse cx="300" cy="226" rx="70" ry="10" fill="#A8744A" ${sw()}/>
  <rect x="320" y="190" width="12" height="28" rx="3" fill="#FFF8E8" ${sw(1.6)}/><path d="M326 172 Q336 182 326 190 Q316 182 326 172Z" fill="#FFC24A" ${sw(1.2)}/>
  <rect x="250" y="206" width="56" height="16" fill="#FFFDF6" ${sw(1.6)}/>${[0,1,2].map(k=>`<rect x="${120+k*4}" y="${226-k*14}" width="60" height="14" rx="2" fill="${['#3F6FA8','#5E9C8A','#C9A15A'][k]}" ${sw(1.4)}/>`).join('')}
  ${heojun(220,270,.92,{pose:'hold',mood:'smile',item:brush})}`,'url(#h5)',sky('h5','#28305A','#4D4270')+glow('hg5','#FFD27A',.6)),
  text:`임금님이 말했어요. "백성들이 쉽게 보고 따라 할 수 있는 의학책을 만들어 주게." 허준은 날마다 밤늦게까지 책을 썼어요.`},
 {svg:SV(`<path d="M-6 190 Q100 150 200 170 Q300 140 406 186 L406 286 L-6 286Z" fill="#B8C4C0" ${sw()}/>
  <path d="M60 286 Q120 240 220 226 Q300 210 406 214 L406 230 Q300 232 240 240 Q160 260 130 286Z" fill="#E6D3A6" ${sw()}/>
  ${heojunOld(170,262,.9,{pose:'hold',mood:'smile',item:bundle})}
  ${[[240,130,-14],[268,104,10],[300,124,-6]].map(([x,y,r])=>`<rect x="${x}" y="${y}" width="22" height="28" fill="#FFFDF6" ${sw(1.4)} transform="rotate(${r} ${x+11} ${y+14})"/>`).join('')}
  <path d="M220 120 q20 -10 40 0 M210 150 q20 -8 36 2" fill="none" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round"/>`,'url(#h6)',sky('h6','#C9D2D8','#E6E2D4')),
  text:`전쟁이 나서 피난을 떠날 때도, 먼 곳으로 쫓겨났을 때도 허준은 책 쓰기를 멈추지 않았어요. 아픈 백성들을 생각했거든요.`},
 {chips:['1610년'], svg:SV(`<circle cx="200" cy="150" r="150" fill="url(#hg7)"/>
  <path d="M-6 230 Q200 220 406 230 L406 286 L-6 286Z" fill="#DDB16A" ${sw()}/>
  ${[0,1,2,3,4].map(k=>`<rect x="${150+(k%2)*4}" y="${214-k*16}" width="100" height="16" rx="2" fill="${['#3F6FA8','#5E9C8A','#3F6FA8','#5E9C8A','#3F6FA8'][k]}" ${sw(1.4)}/>`).join('')}
  <rect x="170" y="126" width="60" height="22" fill="#FFFDF6" ${sw(1.4)}/>${T(200,142,'동의보감',13)}
  ${heojunOld(80,272,.84,{pose:'up',mood:'joy'})}${hero(320,272,.78,{robe:'#EFE6D2',skin:'#EDBF95',mood:'joy',pose:'up'})}
  ${star(130,70,10)}${star(280,60,9,'#F28C7C')}`,'url(#h7)',sky('h7','#FCE9C2','#F6D9A2')+glow('hg7','#FFF6D8',.9)),
  text:`마침내 열네 해 만에 책이 완성되었어요. 이름은 『동의보감』이에요. 우리 땅의 약초를 쓰고 약초 이름을 한글로도 적어서, 백성들도 알아볼 수 있었지요.`},
 {svg:SV(`<rect x="34" y="34" width="104" height="86" rx="4" fill="#BFE0F0" stroke="#FFFFFF" stroke-width="7"/>${cloud(80,70,.6)}
  <rect x="-6" y="216" width="412" height="70" fill="#E9CFA4"/><ellipse cx="190" cy="260" rx="124" ry="18" fill="#BFD7A8" ${sw()}/>
  <circle cx="320" cy="90" r="40" fill="#BFE0F0" ${sw()}/><path d="M290 76 Q310 70 316 86 Q330 96 352 84 M300 110 Q320 100 340 116" fill="none" stroke="#7CB66E" stroke-width="5" stroke-linecap="round"/>
  ${kid(188,266,1.0,{pose:'hold',mood:'joy',item:bigBook('동의보감')})}
  ${star(126,160,8)}${star(260,150,7,'#F28C7C')}`,'url(#h8)',sky('h8','#E8F2F8','#DCEAF2')),
  text:`『동의보감』은 세계 사람들이 함께 지키는 소중한 기록이 되었어요. 지금도 한의원에서는 이 책에 담긴 지혜를 이어 가고 있지요.`},
 {kind:'end', svg:endBase('h',`${g(200,170,2.2,herbBasket)}`,kid(64,276,.5,{pose:'up',mood:'joy'}),heojunOld(338,276,.55,{pose:'up',mood:'joy'})),
  text:`아픈 사람을 그냥 지나치지 못한 의원이 남긴 선물,<br>건강을 지키는 지혜.<br>오늘도 우리 곁에 있어요.<br><span class="big">끝</span>`},
 {kind:'talk'}
];
BOOKS.push({id:'heojun',era:'joseon',title:'허준과 동의보감',who:'허준',teaser:'아픈 사람을 그냥 지나치지 못한 허준이 약초 책을 만들었어요.',pages:P,
 talk:{three:['허준 할아버지 바구니에 무엇이 있지?','아플 때 누가 돌봐 줘?','"아야!" 하는 친구에게 "괜찮아?" 해 볼까?'],
  five:['허준은 왜 약초 이름을 한글로도 적었을까?','전쟁 중에도 책을 쓴 까닭은 뭘까?','아픈 친구를 도우려면 어떻게 할까?'],
  note:'허준(1539~1615)은 선조의 명으로 1596년 동의보감을 쓰기 시작해, 임진왜란과 귀양 중에도 집필을 이어 1610년 25권으로 완성했습니다. 2009년 유네스코 세계기록유산에 올랐습니다. 어린 시절 기록은 거의 남아 있지 않아 이야기에 넣지 않았고, 드라마로 널리 알려진 스승 유의태 이야기는 소설에서 지어낸 내용입니다.'}});
})();
