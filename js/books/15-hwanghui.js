/* 10권 황희: 소의 마음까지 살핀 정승 */
(()=>{
const LEG=['전해 오는 이야기'];
const hh=(x,y,s,o={})=>hero(x,y,s,{robe:'#5E7FA8',hat:'gat',belt:K.gold,collar:'#FFF8EC',...o});
const hhOld=(x,y,s,o={})=>hh(x,y,s,{beard:'#E6E1D6',robe:'#4C6A90',...o});
const sejongK=(x,y,s,o={})=>king(x,y,s,o);
function cow(x,y,s,c,o={}){return g(x,y,s,`<g transform="scale(${o.flip||1} 1)"><ellipse cx="0" cy="1" rx="50" ry="7" fill="#2B1E16" opacity=".18"/>
${[-30,-16,18,32].map(lx=>`<rect x="${lx-5}" y="-40" width="10" height="38" rx="4" fill="${c}" ${sw()}/>`).join('')}
<ellipse cx="0" cy="-52" rx="46" ry="24" fill="${c}" ${sw()}/>
<path d="M-46 -56 Q-60 -50 -58 -34" fill="none" stroke="${c}" stroke-width="5" stroke-linecap="round"/>
<ellipse cx="48" cy="-72" rx="20" ry="18" fill="${c}" ${sw()}/><ellipse cx="58" cy="-62" rx="12" ry="9" fill="#E8C7A8" ${sw(1.6)}/>
<path d="M36 -88 Q30 -100 38 -102 M54 -88 Q62 -100 56 -104" fill="none" stroke="#E6DCCB" stroke-width="4" stroke-linecap="round"/>
<ellipse cx="32" cy="-80" rx="8" ry="4" fill="${c}" ${sw(1.4)}/>
${o.mood==='sad'?`<path d="M42 -78 Q46 -76 50 -78" fill="none" ${sw(2)}/><path d="M44 -70 q-2 6 0 8" stroke="#8CC4EA" stroke-width="2.4"/>`:`<circle cx="46" cy="-76" r="2.6" fill="${L}"/>`}
<circle cx="56" cy="-62" r="1.6" fill="${L}"/><circle cx="62" cy="-62" r="1.6" fill="${L}"/></g>`)}
const plow=`<path d="M-60 -40 L-110 -10" stroke="${K.wood}" stroke-width="5" stroke-linecap="round"/>`;
const hutBroken=`<rect x="40" y="130" width="130" height="80" fill="#EFE3C8" ${sw()}/><path d="M24 136 Q105 84 186 136Z" fill="#C9A15A" ${sw()}/><path d="M80 110 l6 10 l-4 4" stroke="${L}" stroke-width="1.6" fill="none"/>${[70,100,130].map(x=>`<path d="M${x} 140 q-2 6 0 10" stroke="#8CC4EA" stroke-width="2.4"/>`).join('')}`;
const P=[
 {kind:'cover', svg:coverBase('hh','다정한 정승',`${cow(290,262,.8,'#D9A55A')}`,hhOld(110,264,1.0,{pose:'up',mood:'joy'})),
  text:`<span class="big">황희 정승과 누렁소</span><br>위인 그림책 {no}권`},
 {svg:SV(`<rect x="-6" y="-6" width="412" height="230" fill="#E8D3B0"/>
  <rect x="14" y="-6" width="22" height="236" fill="#B5473A" ${sw()}/><rect x="364" y="-6" width="22" height="236" fill="#B5473A" ${sw()}/>
  <rect x="-6" y="222" width="412" height="64" fill="#A87E52"/>
  ${sejongK(130,272,.88,{mood:'smile'})}${hhOld(274,272,.9,{pose:'hold',mood:'smile'})}`,'#E8D3B0'),
  text:`세종대왕 곁에는 오랫동안 나랏일을 도운 황희 정승이 있었어요. 황희는 어떻게 그렇게 지혜로운 사람이 되었을까요?`},
 {chips:LEG, svg:SV(`${cloud(80,40,.7)}${hills('#A9CDB4','#C7A878',196,220)}
  ${[40,80,120,160,200,240,280,320,360].map(x=>`<path d="M${x} 236 q10 -6 20 0" stroke="#A88A5A" stroke-width="2" fill="none"/>`).join('')}
  ${cow(190,262,.72,'#D9A55A')}${cow(300,262,.72,'#3E3A3A')}
  ${hero(90,268,.78,{robe:'#EFE6D2',skin:'#EDBF95',mood:'smile'})}
  ${hh(370,264,.62,{mood:'smile'})}`,'url(#hh2)',sky('hh2','#CFE7F2','#F6EAD0')),
  text:`젊은 시절, 황희가 길을 가다가 누렁소와 검은 소로 밭을 가는 농부를 만났어요. 황희가 큰 소리로 물었어요. "두 소 가운데 어느 소가 일을 더 잘하오?"`},
 {chips:LEG, svg:SV(`${hills('#A9CDB4','#C7A878',196,220)}
  ${cow(70,250,.5,'#D9A55A')}${cow(340,250,.5,'#3E3A3A',{flip:-1})}
  ${hero(170,268,.92,{robe:'#EFE6D2',skin:'#EDBF95',mood:'smile'})}${hh(240,268,.92,{mood:'o'})}
  <path d="M190 160 Q206 150 214 166" fill="none" ${sw(2)}/>${T(206,140,'소곤소곤',16,K.red)}`,'url(#hh3)',sky('hh3','#CFE7F2','#F6EAD0')),
  text:`농부는 밭 끝까지 걸어와서 황희의 귀에 대고 소곤소곤 말했어요. "누렁소가 조금 더 잘하오. 하지만 검은 소가 들으면 서운해할까 봐서요."`},
 {chips:LEG, svg:SV(`${hills('#A9CDB4','#C7A878',196,220)}
  <g id="tYellow">${cow(130,262,.8,'#D9A55A')}</g>
  <g id="tBlack">${cow(290,262,.8,'#3E3A3A',{mood:'sad'})}</g>`,'url(#hh4)',sky('hh4','#CFE7F2','#F6EAD0')),
  taps:[{label:'누렁소',el:'tYellow',say:'음매! 나는 오늘 밭을 많이 갈았어요.'},{label:'검은 소',el:'tBlack',say:'음매… 나도 열심히 했는데.'}],tapHint:'두 소의 마음을 들어 볼까요?',
  text:`황희는 깜짝 놀랐어요. "말 못 하는 소의 마음까지 살피는구나!" 그날부터 황희는 남의 마음을 다치게 하는 말을 조심했대요.`},
 {chips:LEG, svg:SV(`<rect x="-6" y="-6" width="412" height="230" fill="#EADCC0"/><rect x="-6" y="216" width="412" height="70" fill="#DDB16A"/>
  ${hhOld(200,262,.86,{mood:'joy'})}
  ${hero(80,272,.7,{robe:'#E9DFC8',mood:'sad'})}${hero(320,272,.7,{robe:'#D6CDB4',mood:'sad'})}
  ${T(80,120,'제 말이 맞아요!',14,K.red)}${T(320,120,'아니, 제 말이!',14,K.red)}${T(200,80,'네 말도 옳구나',16,K.ink)}`,'#EADCC0'),
  text:`어른이 된 황희의 집에서 두 사람이 다투었어요. 황희는 한 사람 말을 듣고 "네 말이 옳구나", 다른 사람 말을 듣고도 "네 말도 옳구나" 했어요.`},
 {chips:LEG, svg:SV(`<rect x="-6" y="-6" width="412" height="230" fill="#EADCC0"/><rect x="-6" y="216" width="412" height="70" fill="#DDB16A"/>
  ${hhOld(140,268,.86,{mood:'joy'})}${hero(270,268,.86,{body:'dress',hair:'bun',top:'#F6E2A6',skirt:'#8E5A7A',mood:'o'})}
  ${T(270,100,'둘 다 옳다니요?',16,K.red)}${T(140,100,'부인 말도 옳소',16,K.ink)}`,'#EADCC0'),
  text:`부인이 물었어요. "둘 다 옳다니요, 그런 게 어디 있어요?" 황희는 껄껄 웃으며 말했어요. "부인 말도 옳소!" 다투던 두 사람도 그만 웃음이 터졌대요.`},
 {svg:SV(`${[30,90,150,210,270,330,390].map((x,k)=>`<path d="M${x} ${20+(k%3)*24} l-4 12" stroke="#9FC3E0" stroke-width="2.2" stroke-linecap="round"/>`).join('')}
  <path d="M-6 210 Q200 200 406 210 L406 286 L-6 286Z" fill="#BCD38F" ${sw()}/>
  ${hutBroken}
  ${hhOld(270,268,.9,{mood:'smile',robe:'#7A8C9E'})}`,'url(#hh7)',sky('hh7','#C9D2D8','#E6E2D4')),
  text:`황희는 나라에서 가장 높은 벼슬에 있었지만, 비가 새는 작은 집에서 소박하게 살았어요. 욕심부리지 않고 백성을 먼저 생각했지요.`},
 {svg:SV(`<rect x="-6" y="-6" width="412" height="292" fill="#EFE3C8"/><rect x="-6" y="216" width="412" height="70" fill="#DDB16A"/>
  ${kid(130,266,1.0,{mood:'joy'})}${hero(270,266,.96,{body:'dress',hair:'braid',top:'#E98FA0',skirt:'#5B7FB8',mood:'joy'})}
  ${T(130,90,'멋지다!',16,K.red)}${T(270,90,'고마워!',16,K.red)}${heart(200,140)}`,'#EFE3C8'),
  text:`우리도 친구에게 말할 때 친구 마음을 먼저 생각해 보면 어떨까요? 다정한 말 한마디가 친구를 웃게 해요.`},
 {kind:'end', svg:endBase('hh',`${cow(200,210,1.0,'#D9A55A')}${heart(200,70)}`,kid(64,276,.5,{pose:'up',mood:'joy'}),hhOld(338,276,.55,{pose:'up',mood:'joy'})),
  text:`소의 마음까지 살핀 정승이 남긴 선물,<br>다정한 말 한마디.<br>오늘도 우리 곁에 있어요.<br><span class="big">끝</span>`},
 {kind:'talk'}
];
BOOKS.push({id:'hwanghui',era:'joseon',title:'황희 정승과 누렁소',who:'황희',teaser:'말 못 하는 소의 마음까지 살핀 다정한 정승 이야기예요.',pages:P,
 talk:{three:['소는 무슨 색, 무슨 색이었지?','소처럼 "음매!" 해 볼까?','"소곤소곤" 귓속말 해 볼까?'],
  five:['농부는 왜 귓속말로 대답했을까?','검은 소가 그 말을 들었다면 어땠을까?','친구를 기분 좋게 하는 말에는 뭐가 있을까?'],
  note:'황희(1363~1452)는 세종 때 18년 동안 영의정을 지낸 정승입니다. 누렁소와 검은 소 이야기, "네 말도 옳다" 이야기는 조선 후기 야담집 등에 전하는 일화로, 사실 여부는 확인하기 어렵습니다. 청렴한 정승으로 알려졌지만 실록에는 그에 대한 비판도 함께 남아 있습니다.'}});
})();
