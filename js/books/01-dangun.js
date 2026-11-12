/* 1권 단군: 곰의 기다림과 우리나라의 시작 (건국 신화) */
(()=>{
setScene('gojoseon','spring');
const LEG=['전해 오는 이야기'];
const hwanung=(x,y,s,o={})=>hero(x,y,s,{robe:'#FFFDF6',hair:'topknot',hat:'crown',belt:K.gold,...o});
const dangun=(x,y,s,o={})=>hero(x,y,s,{robe:'#F4EFE0',hair:'topknot',hat:'crown',belt:'#5E9C8A',collar:'#5E9C8A',beard:HAIR,...o});
const ungnyeo=(x,y,s,o={})=>hero(x,y,s,{body:'dress',top:'#FFFDF6',skirt:'#C9A97A',hair:'long',...o});
const rainCloud=(x,y)=>`${cloud(x,y,.9)}${[ -16,-4,8,20].map((d,k)=>`<path d="M${x+d} ${y+14} q-2 6 0 9" stroke="#6FA8D6" stroke-width="3" stroke-linecap="round"/>`).join('')}`;
const wind=(x,y)=>`<path d="M${x} ${y} Q${x+30} ${y-14} ${x+50} ${y} Q${x+64} ${y+10} ${x+52} ${y+18} M${x+6} ${y+16} Q${x+30} ${y+6} ${x+44} ${y+20}" fill="none" stroke="#FFFFFF" stroke-width="3.4" stroke-linecap="round"/>`;
const bubble=(x,y,w,t,sz=15)=>`<path d="M${x-w/2} ${y-18} Q${x-w/2} ${y-34} ${x-w/2+14} ${y-34} L${x+w/2-14} ${y-34} Q${x+w/2} ${y-34} ${x+w/2} ${y-18} Q${x+w/2} ${y-4} ${x+w/2-14} ${y-4} L${x+6} ${y-4} L${x-4} ${y+8} L${x-6} ${y-4} L${x-w/2+14} ${y-4} Q${x-w/2} ${y-4} ${x-w/2} ${y-18}Z" fill="#FFFDF6" ${sw(1.8)}/>${T(x,y-13,t,sz)}`;
const forest=(y)=>[[20,1],[70,.8],[330,.9],[380,1.1]].map(([x,s])=>g(x,y,s,`<rect x="-5" y="-30" width="10" height="30" fill="#8A5A3C" ${sw(1.6)}/><path d="M-26 -26 L0 -76 L26 -26Z" fill="#4E8A5E" ${sw()}/><path d="M-20 -50 L0 -92 L20 -50Z" fill="#5E9C6A" ${sw()}/>`)).join('');
const P=[
 {kind:'cover', svg:coverBase('d','하늘이 열린 날',`${garlic(70,252)}${herb(330,258)}`,`${bear(120,262,.78,{mood:'joy'})}${dangun(256,264,.96,{pose:'up',mood:'joy'})}`),
  text:`<span class="big">단군과 우리나라의 시작</span><br>위인 그림책 {no}권`},
 {chips:LEG, svg:SV(`
  <circle cx="200" cy="120" r="150" fill="url(#dg1)"/>
  <path d="M-6 236 Q60 214 120 232 Q200 210 280 232 Q340 214 406 234 L406 286 L-6 286Z" fill="#FFFFFF" opacity=".95" stroke="#E6DCCB" stroke-width="2"/>
  ${cloud(70,214,1.4)}${cloud(330,210,1.3)}
  <path d="M120 268 Q200 254 280 268" fill="none" stroke="#C7DCC4" stroke-width="10" stroke-linecap="round" opacity=".7"/>
  ${hwanung(200,236,1.0,{mood:'smile'})}
  ${star(60,60,10)}${star(340,70,9)}${star(110,30,6,'#F28C7C')}`,'url(#d1)',sky('d1','#F9E6B6','#CFE6F3')+glow('dg1','#FFF8DE',.9)),
  text:`아주아주 먼 옛날, 하늘나라에 환웅이라는 왕자님이 살았어요. 환웅은 구름 아래 사람들이 사는 세상을 자주 내려다보았어요. "사람들을 행복하게 해 주고 싶어."`},
 {chips:LEG, svg:SV(`
  ${hills('#A9CDB4','#BCD38F',196,222)}
  ${cloud(200,150,1.6)}
  ${hwanung(200,152,.82,{pose:'up',mood:'joy'})}
  ${rainCloud(74,64)}${wind(290,52)}${cloud(330,110,.8)}
  ${hero(70,268,.6,{robe:'#E9DFC8',mood:'o'})}${hero(330,268,.6,{body:'dress',hair:'bun',mood:'o'})}
  ${tufts(258,[30,120,280,380])}`,'url(#d2)',sky('d2','#CFE7F2','#F4EBD2')),
  text:`환웅은 바람과 비와 구름을 다스리는 신하들과 함께 땅으로 내려왔어요. 그리고 사람들에게 곡식을 기르는 법과 아픈 사람을 돌보는 법을 가르쳐 주었어요.`},
 {chips:LEG, svg:SV(`
  ${forest(214)}
  <path d="M-6 210 Q200 200 406 210 L406 286 L-6 286Z" fill="#9FC48A" ${sw()}/>
  ${cave(200,214,.9)}
  ${bear(140,266,.82,{mood:'smile'})}${tiger(262,266,.82,{mood:'smile'})}
  ${bubble(200,88,190,'우리도 사람이 되고 싶어요!',15)}`,'url(#d3)',sky('d3','#D3E9F1','#EEF2DC')),
  text:`땅에는 곰 한 마리와 호랑이 한 마리가 동굴에서 함께 살고 있었어요. 둘은 날마다 환웅에게 빌었어요. "우리도 사람이 되고 싶어요!"`},
 {chips:LEG, svg:SV(`
  ${forest(214)}
  <path d="M-6 210 Q200 200 406 210 L406 286 L-6 286Z" fill="#9FC48A" ${sw()}/>
  ${hwanung(98,268,.86,{pose:'hold',mood:'smile',item:herbBasket})}
  <g id="tGarlic">${garlic(170,262)}${garlic(186,266)}</g><g id="tHerb">${herb(208,266)}</g>
  ${bear(262,266,.74,{mood:'o'})}${tiger(350,266,.72,{mood:'o'})}`,'url(#d4)',sky('d4','#D3E9F1','#EEF2DC')),
  taps:[{label:'마늘',el:'tGarlic',say:'맵고 알싸한 마늘이에요.'},{label:'쑥',el:'tHerb',say:'쓴맛이 나는 쑥이에요.'}],tapHint:'곰이 먹을 것을 눌러 보세요.',
  text:`환웅이 말했어요. "이 쑥과 마늘을 먹으며 백 일 동안 햇빛을 보지 말고 동굴에서 지내렴. 그러면 사람이 될 수 있단다."`},
 {chips:LEG, svg:SV(`
  <rect x="-6" y="-6" width="412" height="292" fill="#4A3F36"/>
  <path d="M-6 -6 H406 V40 Q300 70 200 56 Q100 70 -6 40Z" fill="#3A322B"/>
  <path d="M-6 230 Q200 214 406 230 L406 286 L-6 286Z" fill="#5E534A" ${sw()}/>
  ${[0,1,2,3,4].map(k=>`<path d="M${300+k*10} 96 V124" stroke="#D9CDB4" stroke-width="3" stroke-linecap="round"/>`).join('')}<path d="M296 116 L348 104" stroke="#D9CDB4" stroke-width="3" stroke-linecap="round"/>
  ${[0,1,2].map(k=>`<path d="M${306+k*10} 140 V166" stroke="#D9CDB4" stroke-width="3" stroke-linecap="round"/>`).join('')}
  ${bear(130,262,.86,{mood:'smile',item:`<g transform="translate(0 -30)">${garlic(0,0)}</g>`})}
  ${tiger(256,262,.84,{mood:'sad'})}
  ${T(200,34,'하루, 이틀, 사흘…',18,'#F4EFE0')}`,'#4A3F36'),
  text:`곰과 호랑이는 캄캄한 동굴로 들어갔어요. 쓴 쑥과 매운 마늘을 먹으며 꾹 참았지요. 하루, 이틀, 사흘….`},
 {chips:LEG, svg:SV(`
  ${forest(214)}
  <path d="M-6 210 Q200 200 406 210 L406 286 L-6 286Z" fill="#9FC48A" ${sw()}/>
  ${cave(120,226,1.0)}
  ${bear(120,224,.6,{mood:'smile'})}
  ${tiger(300,266,.86,{mood:'o'})}
  <path d="M232 230 q-12 -4 -20 2 M236 246 q-14 -2 -22 6" fill="none" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round"/>
  ${bubble(300,110,150,'더는 못 참겠어!',15)}`,'url(#d6)',sky('d6','#D3E9F1','#EEF2DC')),
  text:`며칠이 지나자 호랑이는 "더는 못 참겠어!" 하고 동굴 밖으로 뛰쳐나갔어요. 하지만 곰은 꾹 참고 기다렸어요.`},
 {chips:['스무하루째 날'], svg:SV(`
  <circle cx="200" cy="150" r="150" fill="url(#dg7)"/>
  ${forest(214)}
  <path d="M-6 210 Q200 200 406 210 L406 286 L-6 286Z" fill="#9FC48A" ${sw()}/>
  ${g(0,0,1,`<g opacity=".25">${bear(116,262,.7,{mood:'joy'})}</g>`)}
  ${ungnyeo(200,266,1.0,{pose:'up',mood:'joy'})}
  ${star(120,120,12)}${star(286,108,10,'#F28C7C')}${star(150,70,7)}${star(260,170,8,K.jade)}${star(310,60,6)}`,'url(#d7)',sky('d7','#FCE9C2','#E8F1E2')+glow('dg7','#FFF6D8',.95)),
  text:`스무하루가 지나자, 곰은 아름다운 여인이 되었어요! 사람들은 그 여인을 웅녀라고 불렀어요.`},
 {chips:LEG, svg:SV(`
  ${hills('#A9CDB4','#BCD38F',196,220)}
  <rect x="150" y="150" width="100" height="56" fill="#F3E6CB" ${sw()}/><path d="M138 156 Q200 108 262 156Z" fill="#C9A15A" ${sw()}/>
  ${hwanung(110,268,.86,{mood:'joy'})}
  ${ungnyeo(290,268,.86,{pose:'hold',mood:'joy',item:`<ellipse cx="0" cy="-34" rx="22" ry="15" fill="#FFFDF6" ${sw()}/><circle cx="10" cy="-40" r="9" fill="${SK}" ${sw(1.4)}/><path d="M7 -40 Q10 -37 13 -40" fill="none" ${sw(1.2)}/>`})}
  ${heart(200,120)}`,'url(#d8)',sky('d8','#D9EDF4','#F3EEDC')),
  text:`웅녀와 환웅은 결혼해 아기를 낳았어요. 그 아기가 바로 단군왕검이에요.`},
 {chips:['기원전 2333년'], svg:SV(`
  ${cloud(80,50,.8)}<circle cx="330" cy="54" r="24" fill="${K.gold}" ${sw()}/>
  <path d="M-6 200 Q80 150 200 120 Q320 150 406 200 L406 286 L-6 286Z" fill="#A9CDB4" ${sw()}/>
  <path d="M-6 236 Q200 222 406 236 L406 286 L-6 286Z" fill="#BCD38F" ${sw()}/>
  <rect x="166" y="22" width="68" height="42" rx="3" fill="#C9473B" ${sw()}/>${T(200,52,'고조선',20,'#FBF4E2')}<path d="M234 22 V110" ${sw(3)}/>
  ${dangun(200,206,.86,{pose:'up',mood:'joy'})}
  ${hero(80,272,.62,{mood:'joy',pose:'up'})}${hero(150,276,.58,{body:'dress',hair:'bun',mood:'joy'})}${hero(262,276,.58,{robe:'#E9DFC8',mood:'joy',pose:'up'})}${hero(332,272,.62,{body:'dress',hair:'braid',mood:'joy'})}`,'url(#d9)',sky('d9','#CFE7F2','#F6EAD0')),
  text:`어른이 된 단군왕검은 우리 땅에 처음으로 나라를 세웠어요. 그 나라의 이름은 고조선이에요. 우리나라 역사의 맨 처음이에요.`},
 {svg:SV(`
  <rect x="34" y="34" width="104" height="86" rx="4" fill="#BFE0F0" stroke="#FFFFFF" stroke-width="7"/>${cloud(80,70,.6)}
  <rect x="290" y="32" width="80" height="88" rx="4" fill="#FFFFFF" ${sw()}/><rect x="290" y="32" width="80" height="22" rx="4" fill="${K.red}" ${sw()}/>
  ${T(330,49,'10월',14,'#fff')}${T(330,94,'3',38)}${T(330,114,'개천절',13,K.red)}
  <rect x="-6" y="216" width="412" height="70" fill="#E9CFA4"/><ellipse cx="190" cy="260" rx="124" ry="18" fill="#F2B3A6" ${sw()}/>
  ${kid(190,266,1.02,{pose:'up',mood:'joy'})}
  ${star(126,160,8)}${star(258,150,7,'#F28C7C')}`,'url(#d10)',sky('d10','#E8F2F8','#DCEAF2')),
  text:`지금도 해마다 10월 3일 개천절에 우리나라의 시작을 기념해요. 개천절은 '하늘이 열린 날'이라는 뜻이에요.`},
 {kind:'end', svg:endBase('d',`<path d="M60 220 Q130 110 200 70 Q270 110 340 220Z" fill="#A9CDB4" ${sw()}/>${T(200,176,'고조선',56,K.red,`stroke="#FFF8EC" stroke-width="6" paint-order="stroke"`)}`,bear(64,276,.5,{mood:'joy'}),dangun(338,276,.55,{pose:'up',mood:'joy'})),
  text:`꾹 참고 기다린 곰과 단군왕검이 남긴 선물,<br>우리나라의 시작.<br>오늘도 우리 곁에 있어요.<br><span class="big">끝</span>`},
 {kind:'talk'}
];
BOOKS.push({id:'dangun',era:'gojoseon',title:'단군과 우리나라의 시작',who:'단군',teaser:'우리나라가 처음 시작된 이야기예요. 꾹 참고 기다린 곰이 나와요.',pages:P,
 talk:{three:['동굴 속에서 곰은 무엇을 먹었지?','곰처럼 "꾹!" 참는 흉내 내 볼까?','하늘에서 내려온 사람은 누구였지?'],
  five:['호랑이는 왜 동굴 밖으로 나갔을까?','꾹 참고 기다려서 좋았던 적이 있어?','개천절에는 무엇을 축하할까?'],
  note:'단군 이야기는 고려 때 일연이 쓴 『삼국유사』에 실린 건국 신화로, 책 전체가 전해 오는 이야기입니다. 기원전 2333년이라는 연도도 옛 책에 전하는 것입니다. 곰과 호랑이는 곰을 섬기던 무리와 호랑이를 섬기던 무리를 뜻한다고 풀이하기도 합니다.'}});
})();
