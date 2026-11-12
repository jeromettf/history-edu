/* 최치원: 열두 살에 바다 건너 공부한 글쟁이 */
(()=>{
setScene('samguk','autumn');
const LEG=['전해 오는 이야기'];
const cw=(x,y,s,o={})=>hero(x,y,s,{robe:'#7FA8C8',hair:'braid',belt:'#3F5A7A',ribbon:HAIR,...o});
const cwA=(x,y,s,o={})=>hero(x,y,s,{robe:'#3F5A7A',hat:'gat',belt:K.gold,collar:'#FFF8EC',beard:HAIR,...o});
const dad=(x,y,s,o={})=>hero(x,y,s,{robe:'#B9A475',hat:'gat',belt:'#8C7350',beard:'#5A4A3E',...o});
const rebel=(x,y,s,o={})=>hero(x,y,s,{body:'armor',robe:'#5A5560',hat:'helmet',beard:'#3B2618',...o});
const desk=(x,y,w=90)=>`<rect x="${x-w/2}" y="${y}" width="${w}" height="12" rx="2" fill="#8A5A3C" ${sw()}/><path d="M${x-w/2+8} ${y+12} v14 M${x+w/2-8} ${y+12} v14" stroke="#8A5A3C" stroke-width="6"/>`;
const P=[
 {kind:'cover', svg:coverBase('cw','열두 살 유학생',`${bigShip(300,250,.6,'#8A5A3C')}`,cw(130,264,1.0,{arms:'writeR',prop:H=>PROP.brush(H),mood:'joy'})),
  text:`<span class="big">최치원과 붓 한 자루</span><br>위인 그림책 {no}권`},
 {svg:SV(`${room()}
  ${cw(130,262,.9,{stance:'sit',arms:'writeR',prop:H=>PROP.brush(H),mood:'smile',face:'right'})}${desk(220,238,100)}<rect x="186" y="228" width="68" height="10" fill="#FFFDF6" ${sw(1)}/>
  ${dad(320,270,.86,{mood:'smile',face:'left',arms:'handsDown'})}`,'#EADCC0'),
  text:`신라 경주에 최치원이라는 아이가 살았어요. 치원이는 책 읽기와 글쓰기를 무척 좋아했어요.`},
 {svg:SV(`<path d="M-6 150 Q200 140 406 150 L406 290 L-6 290Z" fill="#4F92BA"/>${[...Array(8)].map((_,k)=>`<path d="M${(k*97)%420-20} ${170+(k%4)*24} q10 -8 20 0 q10 8 20 0" fill="none" stroke="#FFFFFF" stroke-width="3" opacity=".8"/>`).join('')}
  <path d="M-6 290 L-6 220 L150 220 L170 290Z" fill="#B0A898" ${sw()}/>
  ${dad(60,230,.7,{mood:'sad',arms:'waveR',face:'right'})}
  ${bigShip(280,214,.9,'#8A5A3C')}${cw(320,209,.3,{mood:'o',arms:'waveR',face:'left'})}
  ${T(110,70,'열 해 안에 꼭 해내거라!',16,K.red)}`,'url(#cw1)',sky('cw1','#CFE7F2','#F6EAD0')),
  text:`열두 살이 되던 해, 치원이는 혼자 배를 타고 당나라로 공부하러 떠났어요. 아버지가 말했어요. "열 해 안에 시험에 붙지 못하면 내 아들이 아니다!" 그만큼 아들을 믿고 응원하는 말이었어요.`},
 {chips:['874년'], svg:SV(`<rect x="-6" y="-6" width="412" height="292" fill="#3A3048"/>${[...Array(18)].map((_,k)=>`<circle cx="${(k*83)%400}" cy="${(k*47)%110+8}" r="1.4" fill="#FFF8DC"/>`).join('')}
  <path d="M-6 220 H406 V290 H-6Z" fill="#6A5240"/>${candle(320,236,1.1)}<circle cx="320" cy="200" r="150" fill="url(#candleG)" opacity=".5"/>
  ${cw(160,250,.96,{stance:'sit',arms:'writeR',prop:H=>PROP.brush(H),mood:'smile',face:'right'})}${desk(240,236,100)}<rect x="206" y="226" width="68" height="10" fill="#FFFDF6" ${sw(1)}/>
  ${[0,1,2,3,4].map(k=>`<rect x="40" y="${262-k*9}" width="60" height="9" fill="${['#C9473B','#5E7FA8','#B8862F'][k%3]}" ${sw(1)}/>`).join('')}`,'#3A3048',candleDef),
  text:`낯선 나라에서 치원이는 밤늦게까지 공부했어요. 그리고 열여덟 살에 외국 사람이 보는 시험에 당당히 합격했어요. 열 해도 걸리지 않았어요!`},
 {chips:LEG, svg:SV(`${palace()}
  <g id="tLetter"><rect x="150" y="120" width="100" height="110" fill="#FFFDF6" ${sw()}/>${[0,1,2,3,4].map(k=>`<path d="M${235-k*18} 132 V218" stroke="#2B1E16" stroke-width="3" stroke-dasharray="10 6"/>`).join('')}</g>
  ${rebel(320,280,.86,{mood:'o',arms:'holdFront',face:'left'})}${cwA(70,280,.8,{mood:'smile',arms:'pointR',face:'right'})}`,'#E6CFAA'),
  taps:[{label:'글',el:'tLetter',say:'"어서 싸움을 멈추어라!" 붓으로 쓴 글이에요.'},{label:'깜짝',el:'tLetter',say:'글을 읽은 반란군 대장이 깜짝 놀라 털썩 주저앉았대요.'}],tapHint:'종이를 눌러 볼까요?',
  text:`당나라에 큰 난리가 났을 때, 최치원은 반란군 대장에게 싸움을 멈추라는 글을 썼어요. 글이 얼마나 훌륭했던지 대장이 읽다가 놀라서 자리에서 굴러떨어졌다는 이야기가 전해요.`},
 {chips:['885년'], svg:SV(`<path d="M-6 150 Q200 140 406 150 L406 200 L-6 200Z" fill="#4F92BA"/><path d="M-6 196 H406 V290 H-6Z" fill="#BCD38F"/>
  ${cwA(200,274,.92,{mood:'joy',arms:'armsOpen'})}
  ${[0,1].map(k=>hero(80+k*240,276,.62,{robe:['#D6CDB4','#E9CFC0'][k],hat:'band',bandColor:'#FFFDF6',mood:'joy',arms:'cheer',face:k?'left':'right'})).join('')}`,'url(#cw2)',sky('cw2','#CFE7F2','#F6EAD0')),
  text:`열일곱 해 만에 최치원은 신라로 돌아왔어요. "배운 것으로 신라를 더 좋은 나라로 만들고 싶어요." 그리고 임금님께 나라를 바로잡을 방법을 적어 올렸어요.`},
 {svg:SVn(`${ridge(140,'#7FA88E',50,3)}<path d="M-6 200 Q200 190 406 202 L406 290 L-6 290Z" fill="#9FC48A"/>
  ${g(300,214,1.0,`<rect x="-50" y="-40" width="100" height="40" fill="#E6D3A6" ${sw()}/><path d="M-66 -38 Q0 -66 66 -38 L58 -46 Q0 -74 -58 -46Z" fill="#4A4A52" ${sw()}/>`)}
  <path d="M-6 260 Q100 240 200 262" fill="none" stroke="#6FA8C8" stroke-width="10"/>
  ${cwA(130,262,.8,{stance:'walk',arms:'walk',mood:'smile',face:'right',beard:'#8A8580'})}`,'url(#cw3)',sky('cw3','#F2D6A8','#FBEBD0')),
  text:`하지만 나라는 쉽게 바뀌지 않았어요. 최치원은 산과 바다를 다니며 글을 짓다가, 가야산 해인사 근처에서 지냈다고 해요. 그가 쓴 글과 비석은 지금도 여러 절에 남아 있어요.`},
 {svg:SV(`${room()}
  ${kid(130,262,.9,{stance:'sit',arms:'writeR',prop:H=>PROP.brush(H),mood:'smile',face:'right'})}${desk(220,238,100)}<rect x="186" y="228" width="68" height="10" fill="#FFFDF6" ${sw(1)}/>
  ${hero(320,266,.86,{body:'dress',hair:'bun',top:'#F2C14E',skirt:'#5B7FB8',mood:'joy',face:'left',arms:'cheer'})}`,'#EFE3C8'),
  text:`최치원이 남긴 글은 『계원필경』이라는 책으로 묶여 지금도 읽을 수 있어요. 우리도 오늘 있었던 일을 한 줄 써 볼까요?`},
 {kind:'end', svg:endBase('cw',`${g(200,200,2.2,`<path d="M-10 -40 L10 40" stroke="${K.wood}" stroke-width="6" stroke-linecap="round"/><path d="M10 40 q4 12 -4 18 q-4 -8 4 -18Z" fill="#2B1E16"/>`)}`,kid(64,276,.5,{arms:'cheer',mood:'joy'}),cwA(338,276,.55,{arms:'waveR',mood:'joy'})),
  text:`붓 한 자루로 세상과 이야기한 사람이 남긴 선물,<br>마음을 움직이는 글.<br>오늘도 우리 곁에 있어요.<br><span class="big">끝</span>`},
 {kind:'talk'}
];
BOOKS.push({id:'choechiwon',era:'samguk',title:'최치원과 붓 한 자루',who:'최치원',teaser:'열두 살에 혼자 바다를 건너 공부하러 간 아이가 있어요.',pages:P,
 talk:{three:['치원이는 몇 살에 배를 탔지?','붓으로 글씨 쓰는 흉내 내 볼까?','혼자 멀리 가면 어떤 기분일까?'],
  five:['아버지는 왜 "열 해 안에"라고 말했을까?','글로 다른 사람 마음을 바꿀 수 있을까?','너는 어떤 글을 써 보고 싶어?'],
  note:'최치원(857~?)은 868년 12세에 당나라로 유학해 874년 빈공과에 급제했습니다. 881년 황소의 난 때 「토황소격문」을 지었고, 황소가 이 글을 읽고 놀라 평상에서 떨어졌다는 이야기는 후대에 전하는 일화입니다. 885년 귀국한 뒤 894년 진성여왕에게 시무 10여 조를 올렸으나 뜻을 펴지 못했고, 말년에 가야산 해인사 일대에 머물렀다고 전합니다. 문집 『계원필경』과 쌍계사 진감선사탑비 등의 글이 남아 있습니다.'}});
})();
