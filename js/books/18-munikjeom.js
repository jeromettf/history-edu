/* 8권 문익점: 작은 목화씨 하나 */
(()=>{
setScene('goryeo','autumn');
const LEG=['전해 오는 이야기'];
const mun=(x,y,s,o={})=>hero(x,y,s,{robe:'#6E8FB0',hat:'gat',belt:K.gold,collar:'#FFF8EC',beard:HAIR,...o});
const jeong=(x,y,s,o={})=>hero(x,y,s,{robe:'#B9A475',hat:'gat',belt:'#5E9C8A',beard:'#8A8580',...o});
const cotton=(x,y,s=1)=>g(x,y,s,`<path d="M0 0 V-46 M0 -30 L-16 -42 M0 -22 L14 -34" stroke="#6B8A4A" stroke-width="3" stroke-linecap="round"/><ellipse cx="-12" cy="-40" rx="7" ry="4" fill="#7CA65A"/><ellipse cx="14" cy="-30" rx="7" ry="4" fill="#7CA65A"/>
${[[0,-52],[-18,-46],[16,-38]].map(([cx,cy])=>`<circle cx="${cx-4}" cy="${cy}" r="6" fill="#FFFFFF" ${sw(1.2)}/><circle cx="${cx+4}" cy="${cy}" r="6" fill="#FFFFFF" ${sw(1.2)}/><circle cx="${cx}" cy="${cy-5}" r="6" fill="#FFFFFF" ${sw(1.2)}/>`).join('')}`);
const sprout=(x,y,ok)=>ok?`<path d="M${x} ${y} V${y-14}" stroke="#6B8A4A" stroke-width="3"/><ellipse cx="${x-6}" cy="${y-16}" rx="6" ry="3.4" fill="#7CA65A"/><ellipse cx="${x+6}" cy="${y-16}" rx="6" ry="3.4" fill="#7CA65A"/>`:`<path d="M${x} ${y} Q${x+2} ${y-6} ${x+8} ${y-4}" stroke="#A39B7A" stroke-width="2.4" fill="none"/>`;
const seeds=`<ellipse cx="-6" cy="-36" rx="4" ry="3" fill="#5A3B2C"/><ellipse cx="4" cy="-40" rx="4" ry="3" fill="#5A3B2C"/><ellipse cx="8" cy="-32" rx="4" ry="3" fill="#5A3B2C"/>`;
const wheel2=(x,y,s)=>g(x,y,s,`<rect x="-60" y="-6" width="120" height="10" rx="3" fill="#8A6A44" ${sw()}/><circle cx="-24" cy="-40" r="30" fill="none" stroke="#9A6B45" stroke-width="5"/>${[0,30,60,90,120,150].map(a=>`<path d="M-24 -40 L${-24+30*Math.cos(a*Math.PI/180)} ${-40+30*Math.sin(a*Math.PI/180)}" stroke="#9A6B45" stroke-width="2.4"/><path d="M-24 -40 L${-24-30*Math.cos(a*Math.PI/180)} ${-40-30*Math.sin(a*Math.PI/180)}" stroke="#9A6B45" stroke-width="2.4"/>`).join('')}<circle cx="-24" cy="-40" r="5" fill="${L}"/><path d="M-24 -4 V-40" ${sw(3)}/><path d="M40 -4 V-30" ${sw(3)}/><path d="M6 -70 Q24 -50 40 -30" stroke="#FFFFFF" stroke-width="2"/>`);
const blanket=`<rect x="-40" y="-36" width="80" height="30" rx="8" fill="#F6E2A6" ${sw()}/><path d="M-40 -24 H40" stroke="#E9B24A" stroke-width="2"/><circle cx="-20" cy="-22" r="3" fill="#E98FA0"/><circle cx="10" cy="-26" r="3" fill="#7FB3C8"/>`;
const P=[
 {kind:'cover', svg:coverBase('n','작은 씨앗 하나',`${cotton(70,250,1.1)}${cotton(336,250,1)}`,mun(200,264,1.0,{pose:'hold',mood:'joy',item:seeds})),
  text:`<span class="big">문익점과 따뜻한 목화</span><br>위인 그림책 {no}권`},
 {svg:SV(`${['#FFFFFF'].map(()=>[40,90,150,210,270,330,380].map((x,k)=>`<circle cx="${x}" cy="${30+(k%3)*30}" r="3" fill="#FFFFFF"/>`).join('')).join('')}
  <path d="M-6 200 Q200 186 406 200 L406 286 L-6 286Z" fill="#F4F6F8" ${sw()}/>
  ${hut(30,166)}
  ${hero(180,266,.86,{robe:'#D6CDB4',skin:'#EDBF95',mood:'sad'})}${kid(256,268,.7,{mood:'sad'})}
  ${T(320,150,'으슬으슬',18,'#4F7DBA')}`,'url(#n1)',sky('n1','#B9C8D6','#E3E8EE')),
  text:`최무선과 같은 때의 고려예요. 그때 사람들은 겨울에도 얇은 삼베옷을 입었어요. 바람이 숭숭 들어와서 너무 추웠어요.`},
 {chips:['1363년'], svg:SV(`${cloud(300,40,.7)}${hills('#C9D2A8','#E6D3A6',196,220)}
  ${cotton(80,230,1.2)}${cotton(130,236,1)}${cotton(320,230,1.2)}${cotton(360,240,1)}
  <g id="tCotton">${cotton(260,226,1.4)}</g>
  <g id="tMun">${mun(180,268,.9,{pose:'up',mood:'o'})}</g>`,'url(#n2)',sky('n2','#CFE7F2','#F6EAD0')),
  taps:[{label:'목화',el:'tCotton',say:'몽실몽실, 구름처럼 하얀 솜이 열렸어요.'},{label:'문익점',el:'tMun',say:'이 솜으로 옷을 만들면 따뜻하겠구나!'}],tapHint:'하얀 솜을 눌러 보세요.',
  text:`문익점은 나랏일로 먼 원나라에 갔어요. 거기서 하얀 솜이 몽실몽실 열린 목화밭을 보았어요. "이걸로 옷을 지으면 우리 백성들이 따뜻하겠구나!"`},
 {chips:LEG, svg:SV(`${hills('#A9CDB4','#E6D3A6',196,220)}
  <path d="M60 286 Q140 240 240 222 Q330 208 406 200 L406 216 Q330 226 260 238 Q170 256 130 286Z" fill="#D9C79A" ${sw()}/>
  ${mun(170,262,.92,{pose:'hold',mood:'smile',item:`<rect x="-6" y="-46" width="12" height="26" rx="5" fill="#3A3A44" ${sw()}/><path d="M0 -46 V-60" stroke="#8A6A44" stroke-width="4"/>`})}
  ${g(250,190,2,seeds)}${T(250,60,'소중한 씨앗',18,K.red)}`,'url(#n3)',sky('n3','#CFE7F2','#F6EAD0')),
  text:`고려로 돌아올 때 문익점은 목화씨 몇 알을 소중히 챙겨 왔어요. 붓 뚜껑 속에 몰래 넣어 왔다는 이야기도 전해 와요.`},
 {svg:SV(`${cloud(80,40,.7)}${hills('#A9CDB4','#C7A878',196,220)}
  ${[60,100,140,180,220,260,300,340].map((x,k)=>sprout(x,252,k===5)).join('')}
  ${mun(80,200,.6,{mood:'sad'})}${jeong(140,200,.6,{mood:'sad'})}
  <circle cx="260" cy="226" r="26" fill="none" stroke="${K.red}" stroke-width="3" stroke-dasharray="4 4"/>${T(310,200,'딱 하나!',18,K.red)}`,'url(#n4)',sky('n4','#CFE7F2','#F6EAD0')),
  text:`문익점은 장인어른 정천익과 함께 씨를 심었어요. 그런데 싹이 자꾸 시들었어요. 딱 한 그루만 살아남았지요. 그래도 둘은 포기하지 않았어요.`},
 {svg:SV(`<circle cx="340" cy="46" r="22" fill="${K.gold}" ${sw()}/>${hills('#A9CDB4','#C7A878',196,220)}
  ${[30,70,110,150,190,230,270,310,350,390].map((x,k)=>cotton(x,250-(k%2)*10,.9)).join('')}
  ${mun(110,270,.74,{pose:'up',mood:'joy'})}${jeong(290,270,.74,{pose:'up',mood:'joy'})}`,'url(#n5)',sky('n5','#CFE7F2','#F6EAD0')),
  text:`그 한 그루에서 씨앗을 받아 다시 심고, 또 심었어요. 세 해가 지나자 목화밭이 하얗게 넓어졌어요. 이웃들에게도 씨앗을 나눠 주었어요.`},
 {svg:SV(`<rect x="-6" y="-6" width="412" height="292" fill="#EADCC0"/><rect x="-6" y="216" width="412" height="70" fill="#DDB16A"/>
  <g id="tWheel">${wheel2(250,236,1.2)}</g>
  ${hero(120,268,.9,{body:'dress',hair:'bun',top:'#FFFDF6',skirt:'#B9A475',pose:'hold',mood:'joy'})}
  ${cotton(330,214,.7)}`,'#EADCC0'),
  taps:[{label:'물레',el:'tWheel',say:'빙글빙글 돌리면 솜이 실이 되어요.'}],tapHint:'물레를 돌려 볼까요?',
  text:`솜에서 실을 뽑으려고 물레라는 도구도 만들었어요. 물레를 빙글빙글 돌리면 솜이 가느다란 실이 되었어요. 그 실로 무명이라는 천을 짰어요.`},
 {svg:SV(`${['#FFFFFF'].map(()=>[40,90,150,210,270,330,380].map((x,k)=>`<circle cx="${x}" cy="${30+(k%3)*30}" r="3" fill="#FFFFFF"/>`).join('')).join('')}
  <path d="M-6 200 Q200 186 406 200 L406 286 L-6 286Z" fill="#F4F6F8" ${sw()}/>
  ${hut(30,166)}
  ${hero(180,266,.86,{robe:'#FFFDF6',skin:'#EDBF95',mood:'joy',pattern:'dots',dotColor:'#E9E4D6'})}${kid(256,268,.7,{mood:'joy'})}
  ${T(320,150,'따뜻해!',20,K.red)}`,'url(#n7)',sky('n7','#B9C8D6','#E3E8EE')),
  text:`이제 사람들은 솜을 넣은 두툼한 옷을 입었어요. 매서운 겨울바람이 불어도 몸이 포근했어요.`},
 {svg:SV(`<rect x="34" y="34" width="104" height="86" rx="4" fill="#1C2347" stroke="#FFFFFF" stroke-width="7"/><circle cx="90" cy="70" r="14" fill="#F6F0D6"/>
  <rect x="-6" y="216" width="412" height="70" fill="#E9CFA4"/>
  <rect x="80" y="220" width="250" height="40" rx="10" fill="#F6E2A6" ${sw()}/>
  ${kid(200,250,.86,{pose:'hold',mood:'sleep',item:blanket})}
  ${T(320,120,'쿨쿨',22,K.ink)}`,'url(#n8)',sky('n8','#E8F2F8','#DCEAF2')),
  text:`오늘 밤 덮는 폭신한 이불에도, 입고 있는 부드러운 면 옷에도 목화솜이 들어 있어요. 문익점이 가져온 작은 씨앗 덕분이에요.`},
 {kind:'end', svg:endBase('n',`${cotton(200,210,3)}`,kid(64,276,.5,{pose:'up',mood:'joy'}),mun(338,276,.55,{pose:'up',mood:'joy'})),
  text:`작은 씨앗을 소중히 여긴 사람이 남긴 선물,<br>따뜻한 옷과 이불.<br>오늘도 우리 곁에 있어요.<br><span class="big">끝</span>`},
 {kind:'talk'}
];
BOOKS.push({id:'munikjeom',era:'goryeo',title:'문익점과 따뜻한 목화',who:'문익점',teaser:'작은 목화씨 하나가 온 나라 사람들을 따뜻하게 해 주었어요.',pages:P,
 talk:{three:['목화솜은 무슨 색이었지?','물레 돌리는 흉내, 빙글빙글!','우리 집 이불을 만져 볼까? 폭신폭신!'],
  five:['싹이 하나만 살았을 때 문익점은 어떻게 했지?','씨앗을 이웃에게 나눠 준 까닭은 뭘까?','작은 것이 큰일이 된 적이 있어?'],
  note:'문익점(1329~1398)은 1363년 원나라에 사신으로 갔다가 목화씨를 가져왔습니다. 붓두껍에 숨겨 왔다는 이야기가 널리 알려져 있지만, 실록에는 씨앗을 얻어 왔다고만 적혀 있습니다. 장인 정천익과 함께 심어 처음에는 한 그루만 살렸으나 3년 만에 널리 퍼뜨렸고, 씨를 빼는 씨아와 실을 잣는 물레를 만들어 무명이 널리 쓰이게 되었습니다.'}});
})();
