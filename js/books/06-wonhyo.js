/* 5권 원효: 모든 것은 마음먹기에 달렸다 */
(()=>{
const LEG=['전해 오는 이야기'];
const kasa=`<path d="M-26 -64 L32 -6 L42 -12 L-14 -68Z" fill="#B5473A" ${sw(1.6)}/><circle cx="-14" cy="-56" r="4" fill="${K.gold}" ${sw(1.2)}/>`;
const monk=(x,y,s,o={})=>hero(x,y,s,{hair:'bald',robe:'#A7A49B',belt:false,collar:'#EDE9E0',deco:kasa,...o});
const uisang=(x,y,s,o={})=>hero(x,y,s,{hair:'bald',robe:'#8E9AA6',belt:false,collar:'#EDE9E0',deco:`<path d="M26 -64 L-32 -6 L-42 -12 L14 -68Z" fill="#C9A15A" ${sw(1.6)}/>`,...o});
const gourd=`<ellipse cx="0" cy="-34" rx="20" ry="12" fill="#C9A15A" ${sw()}/><ellipse cx="0" cy="-38" rx="14" ry="5" fill="#8CC4EA"/>`;
const skull=(x,y,s)=>g(x,y,s,`<path d="M-22 0 Q-26 -34 0 -36 Q26 -34 22 0 L12 8 L-12 8Z" fill="#F4EFE0" ${sw()}/><ellipse cx="-9" cy="-16" rx="6" ry="7" fill="#6E6A60"/><ellipse cx="9" cy="-16" rx="6" ry="7" fill="#6E6A60"/><path d="M-3 -4 L3 -4 L0 -9Z" fill="#6E6A60"/><path d="M-8 4 V8 M0 4 V8 M8 4 V8" stroke="#6E6A60" stroke-width="1.6"/><ellipse cx="0" cy="-2" rx="10" ry="3" fill="#8CC4EA" opacity=".7"/>`);
const tomb=(x,y,s)=>g(x,y,s,`<path d="M-90 0 Q-80 -70 0 -76 Q80 -70 90 0Z" fill="#7C8A6E" ${sw()}/><path d="M-46 0 Q-44 -44 0 -48 Q44 -44 46 0Z" fill="#2E2A26" ${sw()}/>`);
const rain=[30,70,110,150,190,230,270,310,350,390].map((x,k)=>`<path d="M${x} ${20+(k%3)*30} l-6 16 M${x-14} ${80+(k%2)*40} l-6 16" stroke="#9FC3E0" stroke-width="2.4" stroke-linecap="round"/>`).join('');
const P=[
 {kind:'cover', svg:coverBase('w','마음먹기 나름',`${g(80,250,.9,gourd)}`,monk(210,264,1.0,{pose:'up',mood:'joy'})),
  text:`<span class="big">원효와 신기한 물 한 모금</span><br>위인 그림책 {no}권`},
 {svg:SV(`${cloud(300,40,.7)}${hills('#A9CDB4','#C7D88F',196,220)}
  <rect x="40" y="130" width="120" height="76" fill="#E8DCC4" ${sw()}/><path d="M24 136 Q100 86 176 136Z" fill="#4A4A55" ${sw()}/>
  ${monk(240,268,.95,{pose:'hold',mood:'smile',item:bigBook('불경','#8A6A44')})}`,'url(#w1)',sky('w1','#CFE7F2','#F6EAD0')),
  text:`김유신이 살던 신라에 원효라는 스님이 있었어요. 원효는 궁금한 게 아주 많았어요. "더 많이 배우고 싶어!"`},
 {svg:SV(`${hills('#A9CDB4','#C7D88F',196,220)}
  <path d="M60 286 Q140 240 240 222 Q330 208 406 200 L406 216 Q330 226 260 238 Q170 256 130 286Z" fill="#E6D3A6" ${sw()}/>
  ${monk(150,262,.86,{pose:'hold',mood:'joy',item:bundle})}${uisang(240,256,.8,{pose:'hold',mood:'joy',item:bundle})}
  ${T(330,120,'당나라로!',22,K.red)}`,'url(#w2)',sky('w2','#CFE7F2','#F6EAD0')),
  text:`그래서 원효는 친구 의상 스님과 함께 먼 당나라로 공부하러 떠났어요. 걷고 또 걸었지요.`},
 {chips:LEG, svg:SV(`${rain}
  <path d="M-6 220 Q200 208 406 220 L406 286 L-6 286Z" fill="#59665A" ${sw()}/>
  ${tomb(200,222,1.4)}
  ${monk(176,222,.62,{mood:'sleep'})}${uisang(230,222,.6,{mood:'sleep'})}`,'url(#w3)',sky('w3','#2A3150','#4A4D66')),
  text:`어느 날 밤, 비가 주룩주룩 내렸어요. 두 스님은 비를 피해 캄캄한 굴 같은 곳에 들어가 잠이 들었어요.`},
 {chips:LEG, svg:SV(`<rect x="-6" y="-6" width="412" height="292" fill="#2E2A26"/>
  <circle cx="200" cy="160" r="120" fill="url(#wg4)"/>
  <path d="M-6 230 Q200 220 406 230 L406 286 L-6 286Z" fill="#3E3832"/>
  <g id="tCup">${g(270,240,1.1,gourd)}</g>
  <g id="tWon">${monk(170,268,.95,{pose:'hold',mood:'joy',item:gourd})}</g>
  ${T(300,120,'꿀꺽꿀꺽',20,'#F6F0D6')}`,'#2E2A26',glow('wg4','#5B6A8A',.6)),
  taps:[{label:'물',el:'tCup',say:'꿀꺽꿀꺽! 아, 시원하고 달다!'},{label:'원효',el:'tWon',say:'이렇게 맛있는 물은 처음이야.'}],tapHint:'캄캄한 밤, 무엇을 마셨을까요?',
  text:`한밤중에 목이 너무 말랐어요. 원효는 어둠 속에서 더듬더듬 바가지를 찾아 물을 마셨어요. "아, 시원하고 달다!"`},
 {chips:LEG, svg:SV(`<circle cx="330" cy="50" r="22" fill="${K.gold}" ${sw()}/>
  <path d="M-6 220 Q200 208 406 220 L406 286 L-6 286Z" fill="#9FC48A" ${sw()}/>
  ${tomb(110,222,.9)}
  <g id="tSkull">${skull(300,236,1.3)}</g>
  <g id="tFace">${monk(196,268,.95,{pose:'up',mood:'o'})}</g>
  ${T(196,104,'으악!',30,K.red)}`,'url(#w5)',sky('w5','#FCE9C2','#E8F1E2')),
  taps:[{label:'그릇',el:'tSkull',say:'바가지인 줄 알았는데, 해골이었어요!'},{label:'원효',el:'tFace',say:'으악! 어젯밤엔 그렇게 맛있었는데!'}],
  text:`아침에 눈을 떠 보니, 그곳은 옛 무덤이었어요. 그리고 원효가 마신 물은 해골에 고인 물이었어요! "으악!"`},
 {svg:SV(`<circle cx="200" cy="140" r="140" fill="url(#wg6)"/>
  ${hills('#A9CDB4','#C7D88F',200,224)}
  ${monk(200,266,.95,{pose:'hold',mood:'smile'})}
  ${heart(140,120)}${star(270,100,10)}${star(110,70,7,'#F28C7C')}`,'url(#w6)',sky('w6','#FCE9C2','#E8F1E2')+glow('wg6','#FFF6D8',.95)),
  text:`원효는 곰곰이 생각했어요. "어젯밤에도 오늘 아침에도 똑같은 물인데, 내 마음만 달라졌구나. 모든 것은 마음먹기에 달렸어!"`},
 {svg:SV(`${hills('#A9CDB4','#C7D88F',196,220)}
  <path d="M60 286 Q140 240 240 222 Q330 208 406 200 L406 216 Q330 226 260 238 Q170 256 130 286Z" fill="#E6D3A6" ${sw()}/>
  ${uisang(310,232,.6,{pose:'up',mood:'joy'})}${monk(120,268,.9,{pose:'up',mood:'joy'})}
  ${T(120,100,'잘 다녀와!',18,K.red)}`,'url(#w7)',sky('w7','#CFE7F2','#F6EAD0')),
  text:`원효는 당나라에 가지 않고 신라로 돌아왔어요. "배움은 멀리 있지 않아. 내 마음속에 있어." 의상 스님은 혼자 당나라로 떠났지요.`},
 {svg:SV(`${cloud(80,40,.7)}${hills('#A9CDB4','#D9CCAE',196,214)}
  ${monk(200,266,.9,{pose:'up',mood:'joy'})}
  ${hero(80,272,.62,{robe:'#EFE6D2',skin:'#EDBF95',mood:'joy',pose:'up'})}${hero(320,272,.6,{body:'dress',hair:'bun',mood:'joy',pose:'up'})}${kid(140,276,.5,{mood:'joy',pose:'up'})}${kid(266,276,.5,{mood:'joy'})}
  ${T(200,70,'♪ 둥실둥실 ♪',20,K.red)}`,'url(#w8)',sky('w8','#CFE7F2','#F6EAD0')),
  text:`원효는 마을마다 다니며 노래하고 춤추었어요. 어려운 말 대신 쉬운 말로 이야기해 주니, 글을 모르는 사람들도 모두 귀 기울였대요.`},
 {svg:SV(`<rect x="-6" y="-6" width="412" height="292" fill="#EFE3C8"/><rect x="-6" y="216" width="412" height="70" fill="#DDB16A"/>
  ${kid(130,266,1.0,{mood:'sad'})}${kid(270,266,1.0,{mood:'joy'})}
  ${T(130,90,'싫어…',18,K.ink)}${T(270,90,'해 볼래!',18,K.red)}
  <path d="M184 176 H216" ${sw(3)}/><path d="M208 168 L218 176 L208 184" fill="none" ${sw(3)}/>`,'#EFE3C8'),
  text:`우리도 그래요. "싫어" 하던 시금치도 "한번 먹어 볼까?" 하고 마음먹으면 맛이 달라질지 몰라요.`},
 {kind:'end', svg:endBase('w',`${heart(200,124)}${g(200,214,1.4,gourd)}`,kid(64,276,.5,{pose:'up',mood:'joy'}),monk(338,276,.55,{pose:'up',mood:'joy'})),
  text:`궁금한 게 많았던 스님이 남긴 선물,<br>마음먹기.<br>오늘도 우리 곁에 있어요.<br><span class="big">끝</span>`},
 {kind:'talk'}
];
BOOKS.push({id:'wonhyo',era:'samguk',title:'원효와 신기한 물 한 모금',who:'원효',teaser:'캄캄한 밤에 마신 달콤한 물이 알고 보니…? 원효 스님의 깜짝 이야기예요.',pages:P,
 talk:{three:['원효 스님은 밤에 무엇을 마셨지?','"꿀꺽꿀꺽" 마시는 흉내 내 볼까?','"으악!" 놀라는 얼굴 해 볼까?'],
  five:['똑같은 물인데 왜 맛이 다르게 느껴졌을까?','원효는 왜 당나라에 가지 않았을까?','마음먹기에 따라 달라졌던 일이 있어?'],
  note:'원효(617~686)는 신라의 스님입니다. 의상과 당나라 유학길에 무덤에서 하룻밤을 묵으며 깨달음을 얻었다는 이야기는 송나라 때 쓰인 『송고승전』 등에 전하는 일화로, 해골물 이야기는 뒤에 덧붙여진 것이라는 견해도 있습니다. 원효는 어려운 불교를 노래와 춤으로 쉽게 전해 백성들 사이에 널리 퍼뜨렸습니다.'}});
})();
