/* 세종대왕: 시범 연출판. 장면마다 다른 거리(먼 풍경, 가까이, 어깨 너머, 위에서)와 빛 */
setScene('joseon','spring','morning');
const SEJONG_PAGES=[
 {kind:'cover', svg:coverBase('sj','ㄱ ㄴ ㄷ ㄹ ㅁ','',king(200,264,1.0,{pose:'up',mood:'joy',still:true})),
  text:`<span class="big">세종대왕과 한글 선물</span><br>위인 그림책 {no}권`},

 /* 1. 먼 풍경: 한양 거리, 한자 방(榜) 앞에서 고개를 갸웃하는 사람들. 앞쪽에 크게 잘린 농부 */
 {svg:SV(`<path d="M-6 150 L60 70 L110 110 L170 40 L230 104 L290 66 L350 112 L406 80 L406 170 L-6 170Z" fill="#B7CBD3" opacity=".8"/>
  <path d="M-6 170 Q200 150 406 170 L406 200 L-6 200Z" fill="#A9C7A8" ${sw()}/>
  ${townscape(196,8)}
  <path d="M-6 196 L406 196 L406 286 L-6 286Z" fill="#D9CCAE"/><path d="M-6 196 H406" stroke="#B9A57E" stroke-width="2"/>
  ${noticeBoard(250,244,1.0)}
  ${hj(170,70,'學',-10)}${hj(214,54,'讀',8)}${hj(300,48,'書',-6)}${hj(340,80,'文',12)}
  ${backView(210,262,.5,{robe:'#EFE6D2'})}${backView(250,264,.48,{robe:'#E9DFC8',hat:'gat'})}${backView(290,262,.5,{robe:'#F2E6D4',hat:'bun'})}
  ${T(330,128,'?',30,K.red)}${T(200,130,'?',24,K.red)}
  ${farmer(70,340,1.9,{mood:'o',pose:'hold',still:true,face:'right'})}`,'url(#sj1)',sky('sj1','#CFE6F2','#FBEBD8')),
  text:`고려 다음에는 조선이라는 나라가 생겼어요. 그때는 한자라는 글자를 썼는데, 수천 개나 되고 너무 어려웠어요. 그래서 글을 읽을 줄 아는 사람이 아주 적었답니다.`},

 /* 2. 가까이: 촛불에 비친 이도의 얼굴 */
 {svg:SV(`<rect x="-6" y="-6" width="412" height="292" fill="#2B2440"/>
  <rect x="40" y="26" width="110" height="96" rx="4" fill="#1C2347" stroke="#7A5A3C" stroke-width="6"/><circle cx="104" cy="62" r="20" fill="#F6F0D6"/><circle cx="114" cy="56" r="18" fill="#1C2347"/>${star(62,44,3,'#F6F0D6')}${star(132,100,3,'#F6F0D6')}<path d="M95 26 V122 M40 74 H150" stroke="#7A5A3C" stroke-width="4"/>
  <rect x="250" y="20" width="120" height="180" fill="#3A2E2A" ${sw()}/>${[0,1,2,3].map(r=>[0,1,2,3,4].map(c=>`<rect x="${258+c*22}" y="${30+r*42}" width="18" height="34" fill="${['#7A3B2C','#2E4A6A','#6A5A2C','#3E5A3E','#5A3A5A'][(c+r)%5]}" opacity=".85"/>`).join('')).join('')}
  ${candle(330,262,1.6)}
  <circle cx="300" cy="200" r="190" fill="url(#candleG)" opacity=".55"/>
  ${prince(170,360,2.05,{pose:'hold',mood:'smile',item:openBook,still:true,face:'right'})}`,'#2B2440',candleDef),
  text:`그런데 궁궐에는 책 읽기를 세상에서 제일 좋아하는 왕자님이 살았어요. 이름은 이도였어요. 이도는 밤이 깊어도 촛불을 켜고 책을 읽었지요.`},

 /* 3. 비스듬한 병풍 뒤에서 몰래 책을 안은 이도, 뒤로 책을 나르는 사람들 */
 {chips:['전해 오는 이야기'], svg:SV(`${room()}
  <rect x="40" y="96" width="60" height="120" fill="#5A3B2C" ${sw()}/><rect x="46" y="102" width="48" height="114" fill="#F7F0DC"/>
  ${backView(70,212,.44,{robe:'#D6CDB4',pose:'up'})}${g(70,166,.44,`<rect x="-26" y="-40" width="52" height="30" fill="#C9473B" ${sw()}/><rect x="-22" y="-56" width="44" height="16" fill="#3F6FA8" ${sw()}/>`)}
  ${backView(130,214,.4,{robe:'#E6DCC8',hat:'bun',pose:'up'})}${g(130,172,.4,`<rect x="-24" y="-40" width="48" height="28" fill="#5E9C8A" ${sw()}/>`)}
  ${prince(250,272,.96,{pose:'hold',mood:'joy',item:redBook,face:'left'})}
  ${screenFold(150,286,1.25)}
  ${T(270,96,'딱 한 권!',20,K.red)}${star(300,120,8)}`,'#EADCC0'),
  text:`하루는 책을 너무 많이 읽다가 몸이 아팠어요. 걱정한 아버지는 책을 모두 치워 버렸어요. 그런데 병풍 뒤에 딱 한 권이 남아 있었어요! 이도는 그 책을 백 번도 넘게 읽었대요.`},

 /* 4. 올려다보는 구도: 일월오봉도 앞 옥좌의 세종, 앞쪽에 엎드린 신하들의 등 */
 {svg:SV(`${palace()}
  <rect x="90" y="34" width="220" height="150" fill="#27467A" ${sw()}/><circle cx="122" cy="62" r="14" fill="#D9442F"/><circle cx="278" cy="62" r="13" fill="#F6F1E1"/><path d="M94 180 L130 110 L156 146 L184 84 L200 54 L216 84 L244 146 L270 110 L306 180Z" fill="#3F8471" ${sw(1.4)}/>
  ${throne(200,232,1.0)}
  ${king(200,196,.95,{pose:'down',mood:'smile',still:true,face:'front'})}
  ${backView(46,320,1.3,{robe:'#5E7FA8',hat:'gat'})}${backView(354,320,1.3,{robe:'#7A8C6E',hat:'gat'})}`,'#E8D3B0'),
  text:`책을 사랑한 이도는 자라서 임금님이 되었어요. 바로 세종대왕이에요. 세종대왕은 백성들이 행복하게 사는 나라를 만들고 싶었어요.`},

 /* 5. 어깨 너머: 담장 너머로 억울한 농부를 바라보는 임금의 뒷모습 */
 {chips:['이해를 돕는 장면'], svg:SV(`${hills('#A9CDB4','#BCD38F',176,206)}
  ${hut(250,150)}
  ${farmer(200,236,.62,{pose:'hold',mood:'sad',tear:true,item:paperItem('冤 訴 狀','serif','#8D8F96'),face:'right'})}
  ${hero(296,238,.52,{robe:'#4C6A90',hat:'gat',belt:K.gold,mood:'smile',face:'left'})}${T(330,150,'모르겠다',13,K.ink)}
  <path d="M-6 236 L180 236 L180 286 L-6 286Z" fill="#B9B3A6" ${sw(1.4)}/>${[0,1,2,3,4,5].map(k=>`<ellipse cx="${k*32+8}" cy="${248+(k%2)*14}" rx="15" ry="6" fill="${k%2?'#C9C2B4':'#A9A397'}" ${sw(1)}/>`).join('')}<path d="M-6 234 H182" stroke="#4A4A55" stroke-width="7"/>
  ${backView(96,360,1.85,{robe:'#C9473B',hat:'king'})}
  ${heart(150,96,true)}`,'url(#sj5)',sky('sj5','#D9EDF4','#F3EEDC')),
  text:`그러던 어느 날, 세종대왕은 속상한 이야기를 들었어요. 백성들이 글을 몰라서 억울한 일이 있어도 글로 쓸 수 없대요. "모두가 글을 읽고 쓸 수 있으면 좋을 텐데."`},

 /* 6. 위에서 내려다본 책상: 큰 종이 위의 자음, 붓을 든 손 */
 {kind:'letters', svg:SV(`<rect x="-6" y="-6" width="412" height="292" fill="#8A5A3C"/>${[0,1,2,3,4,5,6].map(k=>`<path d="M-6 ${k*44} H406" stroke="#7A4E33" stroke-width="2"/>`).join('')}
  <rect x="40" y="20" width="270" height="240" fill="#FFFDF6" ${sw()} transform="rotate(-2 175 140)"/>
  ${[['ㄱ',100,110],['ㄴ',220,110],['ㅁ',80,220],['ㅅ',175,220],['ㅇ',270,220]].map((l,i)=>`<text id="L${i}" x="${l[1]}" y="${l[2]}" text-anchor="middle" font-family="Jua,sans-serif" font-size="74" fill="${K.ink}">${l[0]}</text>`).join('')}
  <ellipse cx="350" cy="60" rx="34" ry="12" fill="#3A3A44" ${sw()}/><ellipse cx="350" cy="56" rx="22" ry="6" fill="#1E1E24"/>
  <path d="M410 300 Q370 230 330 200 L312 214 Q350 250 380 300Z" fill="#C9473B" ${sw()}/><ellipse cx="318" cy="200" rx="14" ry="12" fill="${SK}" ${sw()}/><path d="M318 196 L282 150" stroke="${K.wood}" stroke-width="6" stroke-linecap="round"/><path d="M286 156 Q276 140 280 134 Q290 140 288 156Z" fill="${L}"/>
  ${candle(370,150,.7)}`,'#8A5A3C',candleDef),
  text:`세종대왕은 결심했어요. "누구나 쉽게 배우는 글자를 만들자!" 그래서 말할 때 입과 혀의 모양을 오래오래 살펴보고, 그 모양을 본떠 글자를 만들었어요.`},

 /* 7. 하늘, 땅, 사람을 크게: 해 뜨는 들판 위에 모음의 뿌리 */
 {svg:SV(`<circle cx="110" cy="96" r="60" fill="url(#sjSun)"/><circle cx="110" cy="96" r="26" fill="#E0574A" ${sw()}/>
  <path d="M-6 196 Q200 186 406 196 L406 286 L-6 286Z" fill="#C7D88F" ${sw()}/><path d="M20 196 H380" stroke="${K.ink}" stroke-width="10" stroke-linecap="round" opacity=".85"/>
  ${kid(260,196,.92,{pose:'up',mood:'joy',still:true,face:'front'})}<path d="M310 80 V190" stroke="${K.ink}" stroke-width="10" stroke-linecap="round" opacity=".85"/>
  ${T(110,170,'ㆍ 하늘',22,K.red)}${T(70,236,'ㅡ 땅',22,K.red)}${T(350,236,'ㅣ 사람',22,K.red)}
  <rect x="300" y="24" width="88" height="52" rx="6" fill="#FFFDF6" ${sw()}/>${T(344,62,'ㅣ+ㆍ=ㅏ',20,K.red)}`,'url(#sj7)',sky('sj7','#F6D9B8','#DCEAF2')+glow('sjSun','#FFD27A',.8)),
  text:`이번에는 하늘과 땅과 사람을 바라보았어요. 동그란 하늘 ㆍ, 평평한 땅 ㅡ, 서 있는 사람 ㅣ. 이 셋을 모으니 ㅏ, ㅗ, ㅜ 같은 글자가 생겼어요.`},

 /* 8. 넓은 마당: 훈민정음 반포를 맞는 사람들, 앞쪽에 글을 읽는 농부 */
 {chips:['1446년'], svg:SV(`<rect x="-6" y="-6" width="412" height="170" fill="#E8D3B0"/>
  <path d="M-6 60 Q200 20 406 60 L406 90 Q200 54 -6 90Z" fill="#4A4A55" ${sw()}/><rect x="-6" y="88" width="412" height="80" fill="#E8DCC4" ${sw()}/>${[30,110,190,270,350].map(x=>`<rect x="${x}" y="88" width="16" height="80" fill="#B5473A" ${sw(1.2)}/>`).join('')}
  <rect x="120" y="96" width="160" height="44" fill="#C9473B" ${sw()}/>${T(200,128,'훈민정음',28,K.gold)}
  <path d="M-6 166 L406 166 L406 286 L-6 286Z" fill="#D9CCAE"/>${[0,1,2,3,4].map(r=>`<path d="M-6 ${180+r*22} H406" stroke="#C9B996" stroke-width="1.4"/>`).join('')}
  ${[60,110,160,210,260,310].map((x,k)=>backView(x,206+(k%2)*6,.42,{robe:['#EFE6D2','#E9DFC8','#F2E6D4'][k%3],hat:['gat','bun',''][k%3],pose:k%2?'up':'down'})).join('')}
  ${farmer(330,340,1.6,{pose:'hold',mood:'joy',item:paperItem('가나다','Jua,sans-serif','#2E3A55'),still:true,face:'left'})}
  ${woman(80,330,1.3,{pose:'up',mood:'joy',still:true,face:'right'})}`,'#E8D3B0'),
  text:`드디어 새 글자가 완성되었어요! 이름은 훈민정음, '백성을 가르치는 바른 소리'예요. 누구나 열흘이면 배울 수 있어서, 농부 아저씨도 하고 싶은 말을 글로 쓰게 되었어요.`},

 /* 9. 지금: 잠자리에서 이 그림책을 읽어 주는 장면 */
 {svg:SV(`${room()}
  <rect x="290" y="40" width="80" height="88" rx="4" fill="#FFFFFF" ${sw()}/><rect x="290" y="40" width="80" height="22" rx="4" fill="${K.red}" ${sw()}/>${T(330,57,'10월',14,'#fff')}${T(330,102,'9',38)}${T(330,122,'한글날',13,K.red)}
  ${bedQuilt(150,262,1.3,'#F2C14E')}
  ${g(52,300,.62,`<circle cx="0" cy="-94" r="31" fill="${SK}" ${sw()}/><path d="M-31 -96 Q-30 -128 0 -128 Q30 -128 31 -96 Q26 -108 16 -106 Q8 -114 0 -106 Q-10 -114 -16 -106 Q-24 -110 -31 -96Z" fill="${HAIR}" ${sw()}/><path d="M-16 -91 Q-11 -97 -6 -91 M6 -91 Q11 -97 16 -91" fill="none" ${sw(2.6)}/><path d="M-8 -80 Q0 -72 8 -80" fill="none" ${sw(2)}/>`)}
  ${woman(270,272,.95,{pose:'hold',mood:'smile',item:coverBook,face:'left'})}
  ${candle(370,250,.6)}`,'#EADCC0',candleDef),
  text:`그 글자가 바로 오늘 우리가 쓰는 한글이에요. 지금 읽고 있는 이 그림책도, 네 이름도 한글로 써요. 그래서 해마다 10월 9일 한글날에 그 고마움을 기억해요.`},

 {kind:'end', svg:endBase('sj',`${T(200,150,'한글',100,K.red,`stroke="#FFF8EC" stroke-width="7" paint-order="stroke"`)}`,prince(64,276,.52,{pose:'up',mood:'joy'}),king(338,276,.55,{pose:'up',mood:'joy'})),
  text:`책을 사랑한 왕자님이<br>모두에게 준 선물, 한글.<br>오늘도 우리 곁에 있어요.<br><span class="big">끝</span>`},
 {kind:'talk'}
];

BOOKS.push({id:'sejong',era:'joseon',title:'세종대왕과 한글 선물',who:'세종대왕',teaser:'책을 사랑한 왕자님이 누구나 쉽게 배우는 글자, 한글을 만들었어요.',pages:SEJONG_PAGES,
  talk:{three:['그림에서 촛불을 찾아볼까?','ㅇ은 무슨 모양이었지? 동그라미!','이도처럼 백 번 읽고 싶은 책이 있어?'],
   five:['세종대왕은 왜 새 글자를 만들었을까?','한글이 없었다면 우리는 동화책을 어떻게 읽었을까?','너라면 무엇을 본떠서 글자를 만들고 싶어?'],
   note:'병풍 뒤 책 이야기는 옛 기록에 전해 오는 일화입니다. 농부 장면은 훈민정음을 만든 까닭을 아이 눈높이로 보여주려고 그린 장면입니다. 자음 모양 설명은 훈민정음 해례본의 내용을 따랐습니다.'}});
