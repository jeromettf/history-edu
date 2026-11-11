const SEJONG_PAGES=[
 {kind:'cover', svg:SV(`
  ${cloud(70,62)}${cloud(330,44,.8)}
  <circle cx="200" cy="180" r="140" fill="url(#gl0)"/>
  <path d="M-6 214 Q100 166 200 196 Q300 156 406 206 L406 286 L-6 286Z" fill="#9CC7A8" ${sw()}/>
  <path d="M-6 244 Q120 214 240 238 Q330 218 406 236 L406 286 L-6 286Z" fill="#BCD99C" ${sw()}/>
  ${tufts(256,[40,90,310,360])}
  <rect x="96" y="22" width="208" height="58" rx="4" fill="${K.paper}" ${sw()}/>
  <rect x="84" y="16" width="16" height="70" rx="8" fill="${K.wood}" ${sw()}/><rect x="300" y="16" width="16" height="70" rx="8" fill="${K.wood}" ${sw()}/>
  ${T(200,64,'ㄱ ㄴ ㄷ ㄹ ㅁ',34,K.red)}
  ${star(52,120,10)}${star(352,118,9,'#F28C7C')}${star(330,176,7)}
  ${king(200,264,1.0,{pose:'up',mood:'joy'})}`,'url(#s0)',sky('s0','#BFE0F0','#FCE7C2')+glow('gl0','#FFF6D8',.9)),
  text:`<span class="big">세종대왕과 한글 선물</span><br>위인 그림책 {no}권`},
 {svg:SV(`
  <circle cx="346" cy="48" r="22" fill="${K.gold}" ${sw()}/>${cloud(250,40,.7)}
  <path d="M-6 172 Q60 100 120 142 Q180 82 250 136 Q320 92 406 152 L406 230 L-6 230Z" fill="#B8D3CB" ${sw()}/>
  <path d="M-6 202 Q90 152 170 186 Q260 142 406 192 L406 236 L-6 236Z" fill="#94BFA6" ${sw()}/>
  <path d="M-6 214 Q200 204 406 214 L406 286 L-6 286Z" fill="#BCD38F" ${sw()}/>
  ${hut(20,178)}${hut(320,182)}
  ${hj(170,46,'學',-8)}${hj(216,30,'讀',6)}${hj(258,58,'書',-4)}${hj(126,88,'字',10)}${hj(298,104,'文',-10)}
  ${farmer(156,264,.76,{mood:'o'})}${woman(250,264,.74,{mood:'o'})}
  ${T(116,150,'?',34,K.red)}${T(290,150,'?',34,K.red)}
  ${tufts(258,[20,60,110,210,330,380])}`,'url(#s1)',sky('s1','#CFE7F2','#F4EBD2')),
  text:`아주아주 먼 옛날, 조선이라는 나라가 있었어요. 그때는 한자라는 글자를 썼는데, 수천 개나 되고 너무 어려웠어요. 그래서 글을 읽을 줄 아는 사람이 아주 적었답니다.`},
 {svg:SV(`
  <rect x="36" y="32" width="92" height="84" rx="6" fill="#1C2347" stroke="#8C6A48" stroke-width="5"/>
  <circle cx="84" cy="66" r="20" fill="#F6F0D6"/><circle cx="95" cy="60" r="18" fill="#1C2347"/>
  ${star(56,50,4,'#F6F0D6')}${star(110,96,3,'#F6F0D6')}${star(60,98,3,'#F6F0D6')}
  <path d="M82 32 V116 M36 74 H128" stroke="#8C6A48" stroke-width="3"/>
  <rect x="-6" y="222" width="412" height="64" fill="#6B4E3A"/>
  <path d="M-6 240 H406 M-6 260 H406" stroke="#5A402F" stroke-width="2"/>
  <circle cx="300" cy="180" r="150" fill="url(#gl2)"/>
  <ellipse cx="310" cy="216" rx="40" ry="8" fill="#A8744A" ${sw()}/><path d="M280 220 L284 250 M340 220 L336 250" ${sw(4)}/>
  <rect x="303" y="182" width="14" height="32" rx="3" fill="#FFF8E8" ${sw()}/>
  <path d="M310 158 Q324 172 310 182 Q296 172 310 158Z" fill="#FFC24A" ${sw(1.4)}/><path d="M310 166 Q316 174 310 180 Q304 174 310 166Z" fill="#FFF2B0"/>
  <rect x="40" y="240" width="76" height="14" rx="2" fill="${K.red}" ${sw()}/><rect x="44" y="226" width="68" height="14" rx="2" fill="${K.jade}" ${sw()}/><rect x="48" y="212" width="60" height="14" rx="2" fill="${K.gold}" ${sw()}/>
  ${prince(184,270,1.0,{pose:'hold',mood:'smile',item:openBook})}`,'url(#s2)',sky('s2','#28305A','#4D4270')+glow('gl2','#FFD27A',.7)),
  text:`그런데 궁궐에는 책 읽기를 세상에서 제일 좋아하는 왕자님이 살았어요. 이름은 이도였어요. 이도는 밤이 깊어도 촛불을 켜고 책을 읽었지요.`},
 {chips:['전해 오는 이야기'], svg:SV(`
  <rect x="-6" y="214" width="412" height="72" fill="#DDB16A"/>
  <path d="M-6 232 H406 M-6 254 H406" stroke="#C99A52" stroke-width="2"/>
  ${[0,1,2,3].map(i=>{const x=34+i*58,t=i%2?58:50,b=i%2?218:214;return `<path d="M${x} ${t} L${x+58} ${i%2?50:58} L${x+58} ${i%2?214:218} L${x} ${b}Z" fill="${i%2?'#F1E5C6':'#FBF3DE'}" ${sw()}/><path d="M${x+7} ${t+10} L${x+51} ${(i%2?50:58)+10} L${x+51} ${(i%2?214:218)-10} L${x+7} ${b-10}Z" fill="none" stroke="#C99B5A" stroke-width="1.5"/>`}).join('')}
  <path d="M56 196 Q88 146 118 126 Q150 104 172 72" fill="none" stroke="#6B4A33" stroke-width="4" stroke-linecap="round"/>
  <path d="M120 124 Q132 134 146 132" fill="none" stroke="#6B4A33" stroke-width="3" stroke-linecap="round"/>
  ${[[86,152],[116,126],[140,108],[164,80],[100,172],[150,98],[146,132]].map(p=>`<circle cx="${p[0]}" cy="${p[1]}" r="6.5" fill="#EE98A6" ${sw(1.3)}/><circle cx="${p[0]}" cy="${p[1]}" r="1.8" fill="#C9473B"/>`).join('')}
  <path d="M204 200 Q222 166 252 154" fill="none" stroke="#6B4A33" stroke-width="3" stroke-linecap="round"/>
  ${[[236,160],[252,154],[216,180]].map(p=>`<circle cx="${p[0]}" cy="${p[1]}" r="5.5" fill="#EE98A6" ${sw(1.3)}/>`).join('')}
  ${prince(322,270,.94,{pose:'hold',mood:'joy',item:redBook})}
  ${star(262,108,10)}${star(318,96,8)}${star(372,126,7,'#F28C7C')}`,'url(#s3)',sky('s3','#F2E4C6','#E6CFA4')),
  text:`하루는 너무 열심히 읽다가 그만 몸이 아팠어요. 걱정한 아버지는 책을 모두 치워 버렸지요. 그런데 병풍 뒤에 딱 한 권이 남아 있었어요! 이도는 그 책을 백 번도 넘게 읽었대요.`},
 {svg:SV(`
  <circle cx="76" cy="56" r="26" fill="#D9442F" ${sw()}/><circle cx="324" cy="56" r="24" fill="#F6F1E1" ${sw()}/>
  <path d="M8 232 L58 150 L98 196 L140 112 L178 180 L200 64 L222 180 L260 112 L302 196 L342 150 L392 232Z" fill="#3F8471" ${sw()}/>
  <path d="M58 150 L66 176 M140 112 L148 150 M200 64 L208 120 M260 112 L252 150 M342 150 L334 176" stroke="#DCEFE6" stroke-width="2.5" stroke-linecap="round"/>
  ${pine(26,234,1)}${pine(374,234,1)}
  <rect x="-6" y="226" width="412" height="60" fill="#2C6E92"/>
  ${[20,80,140,200,260,320,380].map(x=>`<path d="M${x-22} 254 Q${x-11} 236 ${x} 252 Q${x+6} 244 ${x+2} 240" stroke="#FFFFFF" stroke-width="3" fill="none" stroke-linecap="round"/>`).join('')}
  ${king(200,274,1.0,{pose:'down',mood:'smile'})}`,'url(#s4)',sky('s4','#2C4E80','#3A6496')),
  text:`책을 사랑한 이도는 자라서 임금님이 되었어요. 바로 세종대왕이에요. 세종대왕은 백성들이 행복하게 사는 나라를 만들고 싶었어요.`},
 {chips:['이해를 돕는 장면'], svg:SV(`
  ${cloud(110,40,.8)}${cloud(300,56,.6)}
  <path d="M-6 196 Q120 160 220 186 Q320 164 406 190 L406 230 L-6 230Z" fill="#A9CDB4" ${sw()}/>
  <path d="M-6 212 Q200 202 406 212 L406 286 L-6 286Z" fill="#BCD38F" ${sw()}/>
  ${hut(16,176)}
  ${farmer(140,266,1.0,{pose:'hold',mood:'sad',tear:true,item:paperItem('冤 訴 狀','serif','#8D8F96')})}
  ${T(200,132,'?',36,K.red)}
  ${king(316,268,.88,{pose:'down',mood:'sad'})}
  ${heart(360,112,true)}
  ${tufts(258,[30,230,260,390])}`,'url(#s5)',sky('s5','#D9EDF4','#F3EEDC')),
  text:`그러던 어느 날, 세종대왕은 속상한 이야기를 들었어요. 백성들은 억울한 일을 당해도 글을 몰라서 하고 싶은 말을 쓸 수 없다는 거예요. "모두가 나처럼 글을 읽고 쓸 수 있으면 좋을 텐데."`},
 {kind:'letters', svg:SV(`
  <rect x="-6" y="234" width="412" height="52" fill="#D9B97E"/>
  <path d="M-6 250 H406" stroke="#C49F5E" stroke-width="2"/>
  <rect x="198" y="24" width="182" height="200" rx="4" fill="#FFFDF6" ${sw()}/>
  <circle cx="210" cy="34" r="4" fill="${K.red}" ${sw(1.2)}/><circle cx="368" cy="34" r="4" fill="${K.red}" ${sw(1.2)}/>
  ${[['ㄱ',248,98],['ㄴ',330,98],['ㅁ',228,186],['ㅅ',290,186],['ㅇ',352,186]].map((l,i)=>`<text id="L${i}" x="${l[1]}" y="${l[2]}" text-anchor="middle" font-family="Jua,sans-serif" font-size="58" fill="${K.ink}">${l[0]}</text>`).join('')}
  <ellipse cx="160" cy="248" rx="22" ry="7" fill="#3A3A44" ${sw()}/>
  ${king(96,272,.92,{pose:'hold',mood:'smile',item:brush})}
  ${star(178,48,9)}`,'url(#s6)',sky('s6','#F6EEDB','#EEDFC0')),
  text:`세종대왕은 결심했어요. "누구나 쉽게 배우는 글자를 만들자!" 그래서 말을 할 때 입과 혀가 어떤 모양이 되는지 오래오래 살펴보고, 그 모양을 본떠 글자를 만들었어요.`},
 {svg:SV(`
  ${cloud(210,46,.7)}
  <circle cx="92" cy="70" r="34" fill="url(#gl7)"/><circle cx="92" cy="70" r="18" fill="${K.ink}" ${sw()}/>
  ${T(92,126,'하늘',24)}
  <rect x="-6" y="200" width="412" height="86" fill="#C9A57A"/>
  ${tufts(200,[100,140,300,340],'#8A6A44')}
  <rect x="30" y="194" width="340" height="12" rx="6" fill="${K.ink}" ${sw(1.5)}/>
  ${T(62,246,'땅',24)}
  ${prince(196,194,.9,{pose:'down',mood:'smile'})}
  <rect x="262" y="102" width="12" height="92" rx="6" fill="${K.ink}" ${sw(1.5)}/>
  ${T(308,160,'사람',24)}
  ${T(334,62,'ㅣ+ㆍ=ㅏ',26,K.red)}`,'url(#s7)',sky('s7','#CFE6F3','#EEF4E4')+glow('gl7','#FFE9A6',.9)),
  text:`이번에는 하늘과 땅과 사람을 바라보았어요. 동그란 하늘 ㆍ, 평평한 땅 ㅡ, 서 있는 사람 ㅣ. 이 셋을 모으니 ㅏ, ㅗ, ㅜ 같은 글자가 생겼어요.`},
 {chips:['1446년'], svg:SV(`
  <path d="M-6 92 Q200 128 406 92" fill="none" ${sw(1.8)}/>
  ${[20,60,100,140,180,220,260,300,340,380].map((x,k)=>{const y=92+36*(1-Math.pow((x-200)/206,2));return `<path d="M${x-10} ${y-1} L${x+10} ${y-1} L${x} ${y+16}Z" fill="${['#C9473B','#E9B24A','#5E9C8A','#4F7DBA'][k%4]}" ${sw(1.4)}/>`}).join('')}
  <rect x="92" y="18" width="216" height="56" rx="4" fill="${K.red}" ${sw()}/>
  <rect x="80" y="12" width="16" height="68" rx="8" fill="${K.wood}" ${sw()}/><rect x="304" y="12" width="16" height="68" rx="8" fill="${K.wood}" ${sw()}/>
  ${T(200,60,'훈민정음',34,K.gold)}
  <path d="M-6 222 Q200 210 406 222 L406 286 L-6 286Z" fill="#BCD38F" ${sw()}/>
  ${farmer(108,268,.86,{pose:'hold',mood:'joy',item:paperItem('가나다','Jua,sans-serif','#2E3A55')})}
  ${woman(208,268,.82,{pose:'up',mood:'joy'})}
  ${prince(304,268,.78,{pose:'up',mood:'joy'})}
  ${star(40,150,9)}${star(366,150,9,'#F28C7C')}`,'url(#s8)',sky('s8','#FCEBC6','#F6D9A2')),
  text:`드디어 새 글자가 완성되었어요! 이름은 훈민정음, '백성을 가르치는 바른 소리'라는 뜻이에요. 누구든지 열흘이면 배울 수 있어서, 농부 아저씨도 하고 싶은 말을 글로 쓸 수 있게 되었어요.`},
 {svg:SV(`
  <rect x="34" y="34" width="104" height="86" rx="4" fill="#BFE0F0" stroke="#FFFFFF" stroke-width="7"/>
  ${cloud(80,70,.6)}
  <path d="M28 28 Q44 80 30 128 L22 128 L22 28Z" fill="#F2A9A0" ${sw()}/><path d="M144 28 Q128 80 142 128 L150 128 L150 28Z" fill="#F2A9A0" ${sw()}/>
  <rect x="290" y="32" width="80" height="88" rx="4" fill="#FFFFFF" ${sw()}/>
  <rect x="290" y="32" width="80" height="22" rx="4" fill="${K.red}" ${sw()}/>
  ${T(330,49,'10월',14,'#fff')}${T(330,94,'9',38)}${T(330,114,'한글날',13,K.red)}
  <rect x="-6" y="216" width="412" height="70" fill="#E9CFA4"/>
  <ellipse cx="190" cy="260" rx="124" ry="18" fill="#F2B3A6" ${sw()}/>
  <rect x="320" y="226" width="56" height="10" rx="2" fill="${K.red}" ${sw(1.6)}/><rect x="324" y="216" width="50" height="10" rx="2" fill="#4F7DBA" ${sw(1.6)}/><rect x="322" y="206" width="52" height="10" rx="2" fill="${K.gold}" ${sw(1.6)}/>
  ${kid(188,266,1.02,{pose:'hold',mood:'joy',item:coverBook})}
  ${star(130,160,8)}${star(258,150,7,'#F28C7C')}`,'url(#s9)',sky('s9','#E8F2F8','#DCEAF2')),
  text:`그 글자가 바로 오늘 우리가 쓰는 한글이에요. 지금 읽고 있는 이 그림책도, 네 이름도 한글로 써요. 그래서 해마다 10월 9일 한글날에 그 고마움을 기억해요.`},
 {kind:'end', svg:SV(`
  <circle cx="200" cy="136" r="150" fill="url(#gl10)"/>
  ${T(200,150,'한글',100,K.red,`stroke="#FFF8EC" stroke-width="7" paint-order="stroke"`)}
  ${star(70,56,14)}${star(330,52,12,'#F28C7C')}${star(150,226,9,K.jade)}${star(250,230,10)}
  ${prince(64,276,.52,{pose:'up',mood:'joy'})}
  ${king(338,276,.55,{pose:'up',mood:'joy'})}`,'url(#s10)',sky('s10','#FBEFD2','#F6DFAE')+glow('gl10','#FFF8DE',.95)),
  text:`책을 사랑한 왕자님이<br>모두에게 준 선물, 한글.<br>오늘도 우리 곁에 있어요.<br><span class="big">끝</span>`},
 {kind:'talk'}
];


BOOKS.push({id:'sejong',no:5,era:'joseon',title:'세종대왕과 한글 선물',who:'세종대왕',pages:SEJONG_PAGES,
  talk:{three:['그림에서 촛불을 찾아볼까?','ㅇ은 무슨 모양이었지? 동그라미!','이도처럼 백 번 읽고 싶은 책이 있어?'],
   five:['세종대왕은 왜 새 글자를 만들었을까?','한글이 없었다면 우리는 동화책을 어떻게 읽었을까?','너라면 무엇을 본떠서 글자를 만들고 싶어?'],
   friend:{title:'같은 시대 친구',name:'장영실',text:'세종대왕이 알아본 솜씨 좋은 장영실은 해시계와, 스스로 시간을 알려 주는 물시계 자격루를 만들었어요.',go:'yeongsil'},
   note:'병풍 뒤 책 이야기는 옛 기록에 전해 오는 일화입니다. 농부 장면은 훈민정음을 만든 까닭을 아이 눈높이로 보여주려고 그린 장면입니다. 자음 모양 설명은 훈민정음 해례본의 내용을 따랐습니다.'}});
