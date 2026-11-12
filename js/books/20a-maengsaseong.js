/* 맹사성: 소를 타고 피리를 분 정승 */
(()=>{
setScene('joseon','summer');
const LEG=['전해 오는 이야기'];
const ms=(x,y,s,o={})=>hero(x,y,s,{robe:'#4C8C7A',hat:'gat',belt:K.gold,collar:'#FFF8EC',beard:HAIR,...o});
const msOld=(x,y,s,o={})=>ms(x,y,s,{robe:'#EDE9E0',beard:'#E6E1D6',collar:'#4C8C7A',...o});
const monk=(x,y,s,o={})=>hero(x,y,s,{hair:'bald',robe:'#A7A49B',belt:false,collar:'#EDE9E0',deco:kasaL,...o});
const official=(x,y,s,o={})=>hero(x,y,s,{robe:'#C9473B',hat:'gat',belt:K.gold,...o});
const flute=H=>`<path d="M${H.L[0]} ${H.L[1]} L${H.R[0]+6} ${H.R[1]-4}" stroke="#8A6A44" stroke-width="5" stroke-linecap="round"/>`;
const notes=(x,y)=>`<path d="M${x} ${y} v-18 l12 -4 v18" fill="none" ${sw(2)}/><circle cx="${x-3}" cy="${y}" r="4" fill="${L}"/><circle cx="${x+9}" cy="${y-4}" r="4" fill="${L}"/>`;
const P=[
 {kind:'cover', svg:coverBase('ms','소 타는 정승',`${ox(300,262,.7,'#3A322B')}`,msOld(130,264,1.0,{arms:{L:[-10,-80],R:[18,-84]},prop:flute,mood:'smile'})),
  text:`<span class="big">맹사성과 검은 소</span><br>위인 그림책 {no}권`},
 {chips:LEG, svg:SV(`${room()}
  ${ms(110,262,.9,{stance:'sit',arms:'pointR',mood:'smile',face:'right'})}${monk(280,262,.86,{stance:'sit',arms:'holdFront',mood:'smile',face:'left'})}
  <ellipse cx="180" cy="250" rx="20" ry="7" fill="#E9DFC8" ${sw(1.4)}/><path d="M176 236 q4 10 4 14" stroke="#6FA8C8" stroke-width="3"/>${[0,1,2].map(k=>`<path d="M${160+k*16} 256 q4 6 0 10" stroke="#6FA8C8" stroke-width="3"/>`).join('')}`,'#EADCC0'),
  text:`맹사성은 젊은 나이에 높은 벼슬에 올라 조금 우쭐했대요. 어느 날 스님을 찾아가자, 스님은 찻잔에 차가 넘치도록 따랐어요. "찻잔이 넘쳐요!"`},
 {chips:LEG, svg:SV(`${room()}
  ${monk(110,262,.86,{stance:'sit',arms:'pointR',mood:'smile',face:'right'})}${ms(280,262,.9,{stance:'sit',arms:'pray',mood:'sad',face:'left'})}
  ${T(200,80,'넘치는 건 차만이 아니지요',16,K.red)}`,'#EADCC0'),
  text:`스님이 빙그레 웃었어요. "찻물이 넘치는 건 아시면서, 아는 게 넘쳐 마음이 넘치는 건 모르시는군요." 맹사성은 얼굴이 빨개졌어요.`},
 {chips:LEG, svg:SV(`${room()}
  <rect x="160" y="80" width="80" height="180" fill="#6A5240" ${sw()}/><rect x="150" y="70" width="100" height="14" fill="#8A5A3C" ${sw()}/>
  <g id="tHead">${ms(200,262,.9,{mood:'o',arms:{L:[-20,-100],R:[20,-100]}})}</g>
  ${monk(330,272,.72,{mood:'smile',face:'left'})}`,'#EADCC0'),
  taps:[{label:'쿵!',el:'tHead',say:'쿵! 서둘러 나가다 문 위에 머리를 부딪혔어요.'},{label:'고개 숙이기',el:'tHead',say:'"고개를 숙이면 부딪히는 일이 없지요." 스님 말이었어요.'}],tapHint:'맹사성을 눌러 볼까요?',
  text:`부끄러워서 서둘러 나가다가 쿵! 문틀에 머리를 부딪혔어요. 스님이 말했어요. "고개를 숙이면 부딪히는 법이 없지요." 그날부터 맹사성은 겸손한 사람이 되었대요.`},
 {svg:SV(`${palace()}
  ${king(110,270,.9,{mood:'smile',arms:'pointR',face:'right'})}${msOld(220,272,.86,{mood:'smile',face:'left',arms:'pray'})}${hero(320,272,.82,{robe:'#5E7FA8',hat:'gat',belt:K.gold,beard:'#E6E1D6',mood:'joy',face:'left'})}`,'#E6CFAA'),
  text:`맹사성은 세종대왕을 도와 황희 정승과 함께 나랏일을 했어요. 음악에도 밝아서 궁궐의 음악을 바로잡는 일도 맡았어요.`},
 {chips:LEG, svg:SV(`${hills('#A9CDB4','#BCD38F',190,214)}
  ${ox(220,262,.9,'#3A322B')}${msOld(214,196,.5,{stance:'sit',arms:{L:[-10,-80],R:[18,-84]},prop:flute,mood:'smile',face:'right',still:true})}
  ${notes(300,120)}${notes(330,96)}${notes(270,90)}`,'url(#ms1)',sky('ms1','#CFE7F2','#F6EAD0')),
  text:`높은 정승이 되어서도 맹사성은 가마 대신 검은 소를 타고 다녔대요. 소 등에 앉아 피리를 불면, 사람들은 정승인 줄 모르고 지나쳤어요.`},
 {chips:LEG, svg:SV(`<path d="M-6 200 Q200 190 406 202 L406 290 L-6 290Z" fill="#BCD38F"/>${rainFX(30,'#7F9AB8')}
  ${g(260,236,1.6,`<path d="M-60 -50 Q0 -90 60 -50 L50 -40 Q0 -76 -50 -40Z" fill="#C9A878" ${sw()}/><rect x="-44" y="-44" width="88" height="44" fill="#E6D3A6" ${sw()}/>`)}
  ${msOld(120,272,.86,{mood:'smile',arms:'handsDown',face:'right'})}${official(330,272,.62,{mood:'o',face:'left'})}`,'url(#ms2)',sky('ms2','#9FB3C8','#D7E0E6')),
  text:`맹사성의 집은 비가 새는 작은 집이었대요. 찾아온 사람이 깜짝 놀라자 맹사성은 웃기만 했어요.`},
 {svg:SV(`${room()}
  ${kid(140,262,.9,{stance:'sit',arms:{L:[-10,-80],R:[18,-84]},prop:flute,mood:'smile',face:'right'})}
  ${hero(300,262,.86,{body:'dress',hair:'braid',top:'#E98FA0',skirt:'#5B7FB8',stance:'sit',arms:'cheer',mood:'joy',face:'left'})}
  ${notes(210,110)}${notes(240,90)}`,'#EFE3C8'),
  text:`잘하는 게 생기면 뽐내고 싶어지지요. 그럴 때 맹사성의 문틀을 떠올려 봐요. 살짝 고개를 숙이면 친구도 함께 웃어요.`},
 {kind:'end', svg:endBase('ms',`${ox(200,220,.9,'#3A322B')}`,kid(64,276,.5,{arms:'cheer',mood:'joy'}),msOld(338,276,.55,{arms:'waveR',mood:'joy'})),
  text:`고개를 숙일 줄 안 정승이 남긴 선물,<br>겸손한 마음.<br>오늘도 우리 곁에 있어요.<br><span class="big">끝</span>`},
 {kind:'talk'}
];
BOOKS.push({id:'maengsaseong',era:'joseon',title:'맹사성과 검은 소',who:'맹사성',teaser:'높은 정승이 되어서도 소를 타고 피리를 분 사람이 있어요.',pages:P,
 talk:{three:['맹사성은 무엇을 타고 다녔지?','피리 부는 흉내 내 볼까? 삘릴리~','문에 머리를 쿵! 아팠겠지?'],
  five:['스님은 왜 찻잔을 넘치게 따랐을까?','"고개를 숙인다"는 건 어떤 뜻일까?','잘하는 게 있을 때 친구에게 어떻게 말하면 좋을까?'],
  note:'맹사성(1360~1438)은 세종 때 좌의정을 지낸 문신으로, 황희와 함께 세종 대의 대표적인 정승입니다. 음악에 밝아 아악 정비에 참여했고, 청렴한 관리로 이름이 높았습니다. 찻잔과 문틀 이야기, 소를 타고 피리를 불며 다녔다는 이야기, 비 새는 집 이야기는 야담과 지역에 전하는 일화입니다. 충남 아산에 맹사성 고택(맹씨행단)이 있습니다.'}});
})();
