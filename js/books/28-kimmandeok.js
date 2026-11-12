/* 21권 김만덕: 쌀을 나눈 제주 사람 */
(()=>{
setScene('joseon','autumn');
const mdKid=(x,y,s,o={})=>hero(x,y,s,{body:'dress',top:'#FFFDF6',skirt:'#7FB3C8',hair:'braid',ribbon:'#C9473B',...o});
const md=(x,y,s,o={})=>hero(x,y,s,{body:'dress',top:'#F6E2A6',skirt:'#2C6E92',hair:'bun',...o});
const jejuStone=(x,y)=>`<path d="M${x-120} ${y} Q${x-80} ${y-14} ${x-40} ${y-4} Q${x} ${y-16} ${x+40} ${y-4} Q${x+80} ${y-14} ${x+120} ${y}" fill="none" stroke="#4A4A55" stroke-width="10" stroke-linecap="round" stroke-dasharray="14 4"/>`;
const halla=`<path d="M-6 190 Q120 120 200 96 Q280 120 406 190 L406 230 L-6 230Z" fill="#7FA88E" ${sw()}/><path d="M178 102 Q200 92 222 102" fill="none" stroke="#FFFFFF" stroke-width="4"/>`;
const shop=(x,y)=>`<rect x="${x}" y="${y}" width="150" height="70" fill="#E8DCC4" ${sw()}/><path d="M${x-12} ${y+6} Q${x+75} ${y-34} ${x+162} ${y+6}Z" fill="#C9A15A" ${sw()}/><rect x="${x+10}" y="${y+40}" width="130" height="10" fill="#8A6A44"/>`;
const seaweed=(x,y)=>`<path d="M${x} ${y} q-8 -14 0 -26 q8 -12 0 -24" fill="none" stroke="#3E6640" stroke-width="7" stroke-linecap="round"/><path d="M${x+12} ${y} q-8 -12 0 -22 q8 -10 0 -20" fill="none" stroke="#4E7A4E" stroke-width="6" stroke-linecap="round"/>`;
const geumgang=`<path d="M-6 230 L40 120 L70 170 L100 70 L130 150 L160 40 L200 140 L230 60 L260 150 L290 80 L330 160 L370 100 L406 200 L406 290 L-6 290Z" fill="#8E9AA6" ${sw()}/>${[[100,70],[160,40],[230,60],[290,80],[370,100]].map(([x,y])=>`<path d="M${x-8} ${y+16} L${x} ${y} L${x+8} ${y+16}" fill="#C9D2D8" ${sw(1.2)}/>`).join('')}`;
const P=[
 {kind:'cover', svg:coverBase('md','나눔의 쌀',`${riceSack(64,256,1.1)}${orange(330,226,10)}${orange(350,236,10)}${orange(338,250,10)}`,md(200,264,1.0,{pose:'up',mood:'joy'})),
  text:`<span class="big">김만덕과 나눔의 쌀</span><br>위인 그림책 {no}권`},
 {svg:SV(`<circle cx="340" cy="46" r="22" fill="${K.gold}" ${sw()}/>${halla}${sea(220)}
  ${jejuStone(200,224)}
  ${mdKid(150,262,.86,{pose:'up',mood:'joy'})}${hero(250,262,.7,{body:'dress',hair:'bun',top:'#FFFDF6',skirt:'#8C7A6A',mood:'smile'})}`,'url(#md1)',sky('md1','#CFE7F2','#F6EAD0')),
  text:`이순신 장군이 바다를 지키고 백오십 년쯤 지난 제주도에 만덕이라는 여자아이가 살았어요. 바람 많고 돌 많은 섬이었지요.`},
 {svg:SV(`${halla}${hills('#A9CDB4','#C7D88F',210,230)}
  ${mdKid(200,268,.9,{mood:'sad',tear:true})}
  ${T(200,80,'씩씩하게 살아야지',18,K.red)}`,'url(#md2)',sky('md2','#B9C8D6','#E3E8EE')),
  text:`만덕이는 어릴 때 엄마 아빠를 모두 잃었어요. 혼자 살아가는 법을 일찍 배워야 했어요.`},
 {svg:SV(`<circle cx="340" cy="46" r="22" fill="${K.gold}" ${sw()}/>
  ${yard(200)}
  ${shop(30,130)}
  <g id="tOrange">${orange(70,160)}${orange(88,166)}${orange(78,178)}</g>
  <g id="tWeed">${seaweed(130,184)}</g>
  <g id="tRice">${riceSack(190,190,.7)}</g>
  ${md(290,268,.9,{pose:'up',mood:'joy'})}`,'url(#md3)',sky('md3','#CFE7F2','#F6EAD0')),
  taps:[{label:'귤',el:'tOrange',say:'새콤달콤한 제주 귤이에요.'},{label:'미역',el:'tWeed',say:'바다에서 건진 미역이에요.'},{label:'쌀',el:'tRice',say:'육지에서 배로 실어 온 쌀이에요.'}],tapHint:'가게 물건을 눌러 보세요.',
  text:`어른이 된 만덕은 가게를 열었어요. 제주의 귤과 미역을 육지에 팔고, 육지의 쌀과 옷감을 들여왔어요. 정직하게 장사해서 부자가 되었어요.`},
 {chips:['1795년'], svg:SV(`${[30,90,150,210,270,330,390].map((x,k)=>`<path d="M${x} ${20+(k%3)*30} l-12 18" stroke="#9FC3E0" stroke-width="2.6" stroke-linecap="round"/>`).join('')}
  <path d="M-6 200 Q200 186 406 200 L406 286 L-6 286Z" fill="#A89A7A" ${sw()}/>
  ${[60,110,160].map(x=>`<path d="M${x} 236 q4 -16 -6 -22" stroke="#8A7A5A" stroke-width="3" fill="none"/>`).join('')}
  ${hero(250,268,.84,{robe:'#D6CDB4',skin:'#EDBF95',mood:'sad'})}${kid(320,270,.64,{mood:'sad',tear:true})}`,'url(#md4)',sky('md4','#8E97A6','#C9C9C2')),
  text:`그런데 몇 해 동안 거센 바람과 비가 몰아쳐 농사를 다 망쳤어요. 먹을 것이 없어 배고픈 사람들이 섬 곳곳에 가득했어요.`},
 {svg:SV(`${yard(200)}
  <g id="tSacks">${[[230,220],[270,220],[310,220],[250,190],[290,190],[270,160]].map(([x,y])=>riceSack(x,y,.8)).join('')}</g>
  <g id="tMd">${md(110,268,.9,{pose:'up',mood:'joy'})}</g>
  ${hero(360,274,.6,{robe:'#D6CDB4',skin:'#EDBF95',mood:'joy'})}`,'url(#md5)',sky('md5','#CFE7F2','#F6EAD0')),
  taps:[{label:'쌀가마',el:'tSacks',say:'영차영차! 배고픈 사람들에게 나눠 줄 쌀이에요.'},{label:'만덕',el:'tMd',say:'모두 함께 나눠 먹어요!'}],tapHint:'만덕이 무엇을 했는지 눌러 보세요.',
  text:`만덕은 그동안 모은 돈을 아낌없이 내놓았어요. 그 돈으로 육지에서 쌀을 사 와서 배고픈 사람들에게 나눠 주었지요.`},
 {svg:SV(`${yard(200)}
  ${md(90,268,.82,{pose:'hold',mood:'joy',item:`<ellipse cx="0" cy="-32" rx="16" ry="8" fill="#FFFDF6" ${sw()}/>`})}
  ${[160,210,260,310,360].map((x,k)=>hero(x,270,.56,{robe:k%2?'#EFE6D2':'#D6CDB4',skin:'#EDBF95',mood:'joy',pose:k%2?'up':'down'})).join('')}
  ${T(260,110,'고맙습니다!',20,K.red)}`,'url(#md6)',sky('md6','#CFE7F2','#F6EAD0')),
  text:`덕분에 많은 사람이 배고픔을 견딜 수 있었어요. 사람들은 만덕에게 고마워하며 '만덕 할머니'라고 불렀대요.`},
 {svg:SV(`${palace()}
  ${king(120,272,.86,{beard:HAIR,mood:'joy'})}${md(280,272,.9,{mood:'smile'})}
  ${T(280,80,'금강산을 보고 싶어요',16,K.red)}`,'#E8D3B0'),
  text:`이 소식을 들은 정조 임금님이 물었어요. "소원이 무엇이오?" 만덕이 말했어요. "한양 궁궐과 금강산을 보고 싶습니다."`},
 {svg:SV(`${geumgang}${cloud(80,40,.6)}${cloud(320,60,.5)}
  ${md(200,272,.86,{pose:'up',mood:'joy'})}`,'url(#md8)',sky('md8','#CFE7F2','#F6EAD0')),
  text:`그때 제주 사람은 함부로 섬 밖에 나갈 수 없었어요. 하지만 임금님은 소원을 들어주었어요. 만덕은 금강산의 멋진 봉우리를 보고 활짝 웃었어요.`},
 {svg:SV(`${room()}
  ${kid(140,266,1.0,{pose:'hold',mood:'joy',item:`${orange(-10,-34)}${orange(10,-34)}`})}${hero(270,266,.96,{body:'dress',hair:'braid',top:'#E98FA0',skirt:'#5B7FB8',mood:'joy'})}
  ${T(140,90,'반 줄게!',18,K.red)}${heart(206,130)}`,'#EFE3C8'),
  text:`제주에는 지금도 김만덕 기념관이 있어요. 귤 두 개 중 하나를 친구에게 건네는 일도 만덕이 한 나눔과 닮았어요.`},
 {kind:'end', svg:endBase('md',`${riceSack(160,200,1.6)}${riceSack(240,200,1.6)}${heart(200,90)}`,mdKid(64,276,.5,{pose:'up',mood:'joy'}),md(338,276,.55,{pose:'up',mood:'joy'})),
  text:`혼자 일어선 아이가 남긴 선물,<br>함께 나누는 마음.<br>오늘도 우리 곁에 있어요.<br><span class="big">끝</span>`},
 {kind:'talk'}
];
BOOKS.push({id:'kimmandeok',era:'joseon',title:'김만덕과 나눔의 쌀',who:'김만덕',teaser:'배고픈 이웃을 위해 모은 돈을 모두 내놓은 제주 사람이 있어요.',pages:P,
 talk:{three:['만덕 가게에는 무슨 과일이 있었지?','쌀가마 나르는 흉내, 영차영차!','친구에게 "반 줄게!" 해 볼까?'],
  five:['만덕은 왜 모은 돈을 다 내놓았을까?','만덕의 소원은 뭐였지?','나눠 주고 기분이 좋았던 적이 있어?'],
  note:'김만덕(1739~1812)은 제주 사람으로, 어려서 부모를 잃고 한때 관청 기생이 되었다가 양인 신분을 되찾았습니다. 객주를 운영하며 큰 재산을 모았고, 1795년 제주에 큰 흉년이 들자 재산을 털어 쌀 500석을 사들여 대부분을 굶주린 사람들에게 나눠 주었습니다. 정조가 소원을 묻자 한양과 금강산 구경을 청했고, 당시 제주 여성은 섬을 떠날 수 없었으나 특별히 허락받았습니다. 노래에는 나오지 않지만 나눔을 다룬 이야기라 골랐습니다.'}});
})();
