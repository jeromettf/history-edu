setScene('joseon','summer');
const YEONGSIL_PAGES=[
 {kind:'cover', svg:SV(`
  ${cloud(66,62)}${cloud(334,46,.8)}
  <circle cx="200" cy="180" r="140" fill="url(#gy0)"/>
  <path d="M-6 214 Q100 170 200 196 Q300 160 406 206 L406 286 L-6 286Z" fill="#9CC7A8" ${sw()}/>
  <path d="M-6 244 Q120 214 240 238 Q330 218 406 236 L406 286 L-6 286Z" fill="#BCD99C" ${sw()}/>
  <rect x="96" y="22" width="208" height="58" rx="4" fill="${K.paper}" ${sw()}/>
  <rect x="84" y="16" width="16" height="70" rx="8" fill="${K.wood}" ${sw()}/><rect x="300" y="16" width="16" height="70" rx="8" fill="${K.wood}" ${sw()}/>
  ${T(200,62,'똑딱 똑딱',32,K.red)}
  ${sundial(64,256,.62)}${clockFace(338,190,30,3,0)}
  ${star(52,118,9)}${star(350,120,8,'#F28C7C')}
  ${ysOfficial(200,264,1.0,{pose:'up',mood:'joy'})}`,'url(#y0)',sky('y0','#BFE0F0','#FCE7C2')+glow('gy0','#FFF6D8',.9)),
  text:`<span class="big">장영실과 시간 선물</span><br>위인 그림책 {no}권`},
 {svg:SV(`
  <circle cx="340" cy="46" r="22" fill="${K.gold}" ${sw()}/>${gull(250,50)}${gull(280,36)}${gull(220,70)}
  <path d="M-6 150 Q60 110 130 140 L130 290 L-6 290Z" fill="#94BFA6" ${sw()}/>
  ${sea(168)}
  <path d="M276 196 Q300 210 344 196 L336 212 Q306 220 282 212Z" fill="${K.wood}" ${sw()}/><path d="M310 196 V156 L336 186Z" fill="#FFFDF6" ${sw()}/>
  <path d="M-6 214 Q90 200 180 216 Q170 240 140 290 L-6 290Z" fill="#E6D3A6" ${sw()}/>
  ${hut(14,170)}
  ${woman(108,266,.8,{mood:'smile'})}
  ${ysKid(196,268,.86,{pose:'hold',mood:'joy',item:toyCart})}`,'url(#y1)',sky('y1','#CFE7F2','#F4EBD2')),
  text:`세종대왕 때, 동래라는 바닷가 마을에 영실이라는 아이가 살았어요. 영실이는 동래현 관청에서 일하는 노비였어요. 하지만 영실이는 무엇이든 손으로 뚝딱뚝딱 만드는 걸 좋아했어요.`},
 {chips:['전해 오는 이야기'], svg:SV(`
  ${cloud(90,40,.7)}${cloud(320,58,.6)}
  <path d="M-6 196 Q120 166 220 188 Q320 168 406 192 L406 230 L-6 230Z" fill="#A9CDB4" ${sw()}/>
  <path d="M-6 212 Q200 202 406 212 L406 286 L-6 286Z" fill="#D8C79A" ${sw()}/>
  ${wheel(262,224,26)}
  <path d="M232 250 H300" stroke="#8A6A44" stroke-width="5" stroke-linecap="round"/>
  ${ysKid(160,268,.9,{pose:'hold',mood:'joy',item:hammer})}
  ${farmer(338,268,.8,{mood:'o'})}
  ${T(330,130,'와!',30,K.red)}
  ${star(212,150,9)}${star(290,170,7,'#F28C7C')}${star(244,186,6)}
  ${tufts(256,[20,60,380])}`,'url(#y2)',sky('y2','#D9EDF4','#F3EEDC')),
  text:`고장 난 물건도 영실이 손에 가면 척척 고쳐졌대요. 마을 사람들은 깜짝 놀라 말했어요. "영실이 손은 요술 손이야!"`},
 {svg:SV(`
  <path d="M-6 172 Q60 110 130 150 Q200 96 280 146 Q340 110 406 150 L406 230 L-6 230Z" fill="#B8D3CB" ${sw()}/>
  ${gate(318,176,.5)}
  <path d="M-6 204 Q200 190 406 204 L406 286 L-6 286Z" fill="#BCD38F" ${sw()}/>
  <path d="M60 286 Q120 240 220 226 Q280 214 314 180 L326 182 Q300 222 240 238 Q160 258 130 286Z" fill="#E6D3A6" ${sw()}/>
  ${ysMan(134,262,.9,{pose:'hold',mood:'smile',item:bundle})}
  ${tufts(250,[20,40,260,300,360])}${cloud(160,52,.7)}`,'url(#y3)',sky('y3','#CFE7F2','#F6EAD0')),
  text:`영실이의 솜씨는 멀리 한양까지 소문이 났어요. 그래서 어른이 된 영실이는 궁궐에서 일하게 되었답니다. 보따리 하나 메고 먼 길을 떠났지요.`},
 {svg:SV(`
  ${palace()}<rect x="50" y="24" width="150" height="170" fill="#27467A" ${sw()}/>
  <circle cx="74" cy="48" r="11" fill="#D9442F"/><circle cx="176" cy="48" r="10" fill="#F6F1E1"/>
  <path d="M54 180 L80 120 L98 150 L125 70 L152 150 L170 120 L196 180Z" fill="#3F8471" ${sw(1.6)}/>
  <rect x="-6" y="222" width="412" height="64" fill="#A87E52"/>
  ${king(124,272,.9,{pose:'down',mood:'smile'})}
  ${ysOfficial(290,272,.92,{pose:'up',mood:'joy'})}
  ${star(230,80,9)}${star(350,70,7,'#F28C7C')}`,'#E8D3B0'),
  text:`궁궐에서 영실이를 알아본 사람은 바로 세종대왕이었어요. 한글을 만든 바로 그 임금님이에요! 세종대왕은 노비였던 영실이에게 벼슬을 주고 마음껏 만들게 했어요.`},
 {svg:SV(`
  <circle cx="330" cy="54" r="22" fill="#F6F0D6" ${sw()}/>
  ${star(60,40,4,'#F6F0D6')}${star(150,60,3,'#F6F0D6')}${star(250,30,4,'#F6F0D6')}${star(380,110,3,'#F6F0D6')}
  ${gate(200,226,1.15)}
  <rect x="-6" y="226" width="412" height="60" fill="#4E5A4A"/>
  ${guard(80,268,.86,{mood:'sleep'})}
  ${T(122,150,'Z',22,'#F6F0D6')}${T(138,132,'z',18,'#F6F0D6')}${T(150,118,'z',14,'#F6F0D6')}
  ${T(320,190,'?',34,'#F6C34A')}`,'url(#y5)',sky('y5','#1F2748','#46406A')),
  text:`그런데 그때는 지금이 몇 시인지 알기가 어려웠어요. 시간을 알려 주는 아저씨가 깜빡 졸기라도 하면 큰일이었어요. 성문을 여닫는 시간도 엉망이 되었거든요.`},
 {kind:'sundial', chips:['1434년'], svg:SV(`
  <circle cx="352" cy="44" r="24" fill="${K.gold}" ${sw()}/>
  <path d="M-6 190 Q120 166 220 182 Q320 164 406 186 L406 230 L-6 230Z" fill="#A9CDB4" ${sw()}/>
  <rect x="-6" y="214" width="412" height="72" fill="#D9CCAE"/>
  <path d="M-6 236 H406 M-6 258 H406" stroke="#C4B38E" stroke-width="2"/>
  ${sundial(200,232,1.55,true)}
  ${ysOfficial(66,272,.78,{pose:'down',mood:'smile'})}
  ${kid(336,272,.7,{mood:'o'})}`,'url(#y6)',sky('y6','#CFE7F2','#F6EED8')),
  text:`영실이는 먼저 해시계를 만들었어요. 솥처럼 오목한 그릇에 비친 해 그림자로 시간을 알 수 있어요. 글을 모르는 백성도 알아보도록, 시간을 동물 그림으로 나타냈어요.`},
 {kind:'clock', chips:['1434년'], svg:SV(`
  <rect x="-6" y="230" width="412" height="56" fill="#A87E52"/>
  ${jagyeokru()}`,'url(#y7)',sky('y7','#EFE3C8','#E6D1A8')),
  text:`해시계는 해가 없는 밤에는 쓸 수 없었어요. 그래서 영실이는 물로 시간을 재는 물시계, 자격루를 만들었어요. 시간이 되면 나무 인형이 스스로 종과 북과 징을 울렸어요.`},
 {svg:SV(`
  ${cloud(80,44,.8)}${cloud(320,40,.7)}
  ${gate(200,214,.9)}
  <path d="M-6 210 Q200 200 406 210 L406 286 L-6 286Z" fill="#D9CCAE" ${sw()}/>
  ${king(92,270,.84,{pose:'up',mood:'joy'})}
  ${ysOfficial(206,270,.86,{pose:'up',mood:'joy'})}
  ${guard(318,270,.8,{pose:'up',mood:'joy'})}
  ${T(200,58,'땡! 둥! 징!',26,K.red,`stroke="#FFF8EC" stroke-width="5" paint-order="stroke"`)}
  ${star(40,140,8)}${star(366,140,8,'#F28C7C')}`,'url(#y8)',sky('y8','#FCEBC6','#F6D9A2')),
  text:`세종대왕은 크게 기뻐했어요. 이제 해가 없는 밤에도 정확한 시간을 알 수 있게 되었으니까요. 졸던 아저씨도 이제 걱정 없겠지요?`},
 {svg:SV(`
  <rect x="34" y="34" width="104" height="86" rx="4" fill="#BFE0F0" stroke="#FFFFFF" stroke-width="7"/>
  ${cloud(80,70,.6)}
  <path d="M28 28 Q44 80 30 128 L22 128 L22 28Z" fill="#A9C8E8" ${sw()}/><path d="M144 28 Q128 80 142 128 L150 128 L150 28Z" fill="#A9C8E8" ${sw()}/>
  ${clockFace(312,82,46,8,0)}
  <rect x="-6" y="216" width="412" height="70" fill="#E9CFA4"/>
  <ellipse cx="190" cy="260" rx="124" ry="18" fill="#BFD7A8" ${sw()}/>
  ${kid(190,266,1.02,{pose:'hold',mood:'joy',item:alarm})}
  ${star(126,160,8)}${star(258,150,7,'#F28C7C')}`,'url(#y9)',sky('y9','#E8F2F8','#DCEAF2')),
  text:`오늘 우리 집 벽에도 시계가 있지요? 유치원 가는 시간도, 잠자는 시간도 시계가 알려 줘요. 자격루는 지금도 박물관에서 다시 만든 모습을 볼 수 있어요.`},
 {kind:'end', svg:SV(`
  <circle cx="200" cy="136" r="150" fill="url(#gy10)"/>
  ${clockFace(200,126,82,10,2)}
  ${star(66,56,14)}${star(334,52,12,'#F28C7C')}${star(110,236,9,K.jade)}${star(290,236,10)}
  ${ysKid(62,276,.52,{pose:'up',mood:'joy'})}
  ${ysOfficial(338,276,.55,{pose:'up',mood:'joy'})}`,'url(#y10)',sky('y10','#FBEFD2','#F6DFAE')+glow('gy10','#FFF8DE',.95)),
  text:`손으로 만들기를 좋아한 아이가<br>모두에게 준 선물, 정확한 시간.<br>오늘도 우리 곁에 있어요.<br><span class="big">끝</span>`},
 {kind:'talk'}
];


BOOKS.push({id:'yeongsil',era:'joseon',title:'장영실과 시간 선물',who:'장영실',teaser:'손으로 만들기를 좋아한 영실이가 시간을 알려 주는 시계를 만들었어요.',pages:YEONGSIL_PAGES,
  talk:{three:['해시계 그림에서 토끼를 찾아볼까?','땡! 둥! 징! 따라 해 볼까?','우리 집 시계는 어디 있지?'],
   five:['영실이는 왜 해시계에 동물 그림을 넣었을까?','해시계는 왜 밤에는 쓸 수 없을까?','너라면 무엇을 만들어서 사람들을 돕고 싶어?'],
   note:'어린 시절 물건을 고치던 이야기는 전해 오는 이야기로, 기록에 남은 일은 아닙니다. 장영실은 동래현 관청의 노비 출신으로, 세종이 벼슬을 주어 일하게 했습니다. 해시계 앙부일구와 물시계 자격루는 여러 학자와 함께 1434년에 만들었습니다. 장영실은 1442년 세종이 탈 가마가 부서진 일로 벌을 받은 뒤 기록에서 사라집니다. 아이가 그다음 이야기를 물으면 들려줄 수 있는 내용입니다.'}});
