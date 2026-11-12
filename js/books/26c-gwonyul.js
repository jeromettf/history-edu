/* 권율: 행주산성의 모두 */
(()=>{
setScene('joseon','winter');
const LEG=['전해 오는 이야기'];
const gy=(x,y,s,o={})=>hero(x,y,s,{body:'armor',robe:'#7A6AA8',hat:'helmet',beard:'#8A8580',...o});
const sol=(x,y,s,o={})=>hero(x,y,s,{body:'armor',robe:'#5E7FA8',hat:'helmet',...o});
const monk=(x,y,s,o={})=>hero(x,y,s,{hair:'bald',robe:'#A7A49B',belt:false,collar:'#EDE9E0',deco:kasaL,...o});
const woman=(x,y,s,c,o={})=>hero(x,y,s,{body:'dress',hair:'bun',top:'#FFFDF6',skirt:c,...o});
const japan=(x,y,s,o={})=>hero(x,y,s,{body:'armor',robe:'#3A3A44',hat:'helmet',...o});
const fence=(y)=>[...Array(20)].map((_,k)=>`<path d="M${k*21} ${y} V${y-34}" stroke="${K.wood}" stroke-width="7" stroke-linecap="round"/>`).join('')+`<path d="M-6 ${y-24} H406" stroke="${K.wood}" stroke-width="4"/>`;
const apronStone=H=>`<path d="M${H.L[0]-8} ${H.L[1]-6} Q${(H.L[0]+H.R[0])/2} ${H.L[1]+24} ${H.R[0]+8} ${H.R[1]-6}" fill="#EDE6D6" ${sw(1.4)}/>${[0,1,2].map(k=>`<ellipse cx="${H.L[0]+4+k*8}" cy="${H.L[1]+4}" rx="5" ry="4" fill="#9E9686" ${sw(1)}/>`).join('')}`;
const P=[
 {kind:'cover', svg:coverBase('gy','다 같이 행주산성',`${g(300,250,.5,fence(0))}`,gy(130,264,1.0,{arms:'pointR',mood:'joy'})),
  text:`<span class="big">권율과 행주산성</span><br>위인 그림책 {no}권`},
 {svg:SV(`${palace()}
  ${gy(200,270,.92,{mood:'o',arms:'pointR',face:'right'})}${[0,1].map(k=>sol(70+k*260,276,.6,{mood:'o',face:k?'left':'right'})).join('')}`,'#E6CFAA'),
  text:`임진왜란 때 일본군에게 서울을 빼앗겼어요. 전라도를 지키던 장군 권율은 서울을 되찾으러 군사를 이끌고 북쪽으로 올라왔어요.`},
 {svg:SV(`${ridge(150,'#C9D6DE',30,2)}<path d="M80 240 Q200 120 320 240Z" fill="#B9C4BC" ${sw()}/>${[...Array(9)].map((_,k)=>{const x=130+k*18,y=240-Math.sin(Math.PI*(k+.5)/9)*100;return `<path d="M${x} ${y} V${y-24}" stroke="${K.wood}" stroke-width="5" stroke-linecap="round"/>`}).join('')}<path d="M-6 236 Q200 226 406 238 L406 290 L-6 290Z" fill="#EEF2F6"/>
  <path d="M-6 270 Q120 250 260 280" fill="none" stroke="#6FA8C8" stroke-width="16"/>
  ${T(200,60,'행주산성',22,K.red)}`,'url(#gy1)',sky('gy1','#C9D2D8','#EEF2F4')),
  text:`권율은 한강 옆 작은 산 위의 행주산성에 자리를 잡았어요. 산성 둘레에 나무 울타리를 두 겹으로 둘러 단단히 준비했어요.`},
 {chips:['1593년'], svg:SV(`<path d="M-6 166 Q90 140 200 150 Q300 158 406 172 L406 210 L-6 210Z" fill="#B9B48A"/>${fence(200)}<path d="M-6 200 Q200 230 406 200 L406 290 L-6 290Z" fill="#C9C08E"/>
  ${[...Array(14)].map((_,k)=>japan(20+(k%7)*60,262+Math.floor(k/7)*22,.34,{mood:'o',stance:'walk',arms:'walk',face:'left'})).join('')}
  ${gy(100,150,.5,{arms:'pointR',mood:'o',face:'right'})}${sol(170,152,.44,{arms:'aimL',prop:H=>PROP.bow(H),mood:'o',face:'right'})}`,'url(#gy2)',sky('gy2','#C9D2D8','#EEF2F4')),
  text:`추운 겨울, 일본군 3만 명이 산성으로 몰려왔어요. 성안의 군사는 그보다 훨씬 적었어요. 아침부터 저녁까지 일곱 번이나 공격이 이어졌어요.`},
 {chips:LEG, svg:SVn(`${fence(170)}<path d="M-6 170 H406 V290 H-6Z" fill="#C9B48A"/>
  <g id="tApron">${woman(80,272,.62,'#8C7A6A',{arms:{L:[-20,-40],R:[20,-40]},prop:apronStone,mood:'joy',face:'right'})}${woman(160,272,.6,'#5E7FA8',{arms:{L:[-20,-40],R:[20,-40]},prop:apronStone,mood:'o',face:'right'})}</g>
  ${monk(250,276,.6,{arms:'carryUp',prop:H=>PROP.stoneUp(H),mood:'o'})}${sol(340,276,.62,{arms:'cheer',mood:'joy',face:'left'})}`,'url(#gy3)',sky('gy3','#C9D2D8','#EEF2F4')),
  taps:[{label:'치마',el:'tApron',say:'엄마들이 짧은 덧치마에 돌을 담아 날랐다는 이야기가 전해요.'},{label:'행주치마',el:'tApron',say:'그래서 앞치마를 행주치마라고 부른다는 이야기가 있지만, 이 말은 그 전부터 쓰였대요.'}],tapHint:'엄마들을 눌러 볼까요?',
  text:`군사뿐 아니라 스님들과 성안의 여인들도 함께 싸웠어요. 여인들은 치마폭에 돌을 담아 날랐다는 이야기가 전해요.`},
 {svg:SV(`${fence(200)}<path d="M-6 200 H406 V290 H-6Z" fill="#EEF2F6"/>
  ${[0,1,2,3,4,5].map(k=>[sol,(x,y,s,o)=>monk(x,y,s,o),(x,y,s,o)=>woman(x,y,s,'#8C7A6A',o)][k%3](40+k*64,150,.42,{arms:'cheer',mood:'joy'})).join('')}
  ${gy(200,282,.86,{mood:'joy',arms:'armsOpen'})}
  ${T(200,40,'행주대첩!',24,K.red)}`,'url(#gy4)',sky('gy4','#CFE7F2','#F6EAD0')),
  text:`해가 질 무렵, 일본군은 많은 군사를 잃고 물러갔어요. 이 싸움이 바로 행주대첩이에요. 이순신의 한산도 대첩, 김시민의 진주대첩과 함께 임진왜란의 3대 대첩으로 불려요.`},
 {svg:SV(`${ridge(150,'#A9CDB4',30,2)}<path d="M-6 200 Q200 190 406 202 L406 290 L-6 290Z" fill="#BCD38F"/>
  <path d="M190 180 V90" stroke="#9E9686" stroke-width="12"/><path d="M180 90 L190 70 L200 90Z" fill="#9E9686" ${sw()}/>
  ${kid(90,276,.8,{mood:'o',arms:'pointR',face:'right'})}${hero(320,276,.8,{body:'dress',hair:'bun',top:'#F2C14E',skirt:'#5B7FB8',mood:'smile',face:'left'})}
  ${T(200,40,'고양 행주산성',20,K.red)}`,'url(#gy5)',sky('gy5','#CFE7F2','#F6EAD0')),
  text:`지금 고양시에 가면 행주산성이 있어요. 산성 꼭대기에는 이 싸움을 기리는 대첩비가 서 있고, 한강이 시원하게 내려다보여요.`},
 {svg:SV(`${room()}
  ${kid(120,266,.86,{mood:'joy',arms:{L:[-20,-40],R:[20,-40]},prop:H=>`<path d="M${H.L[0]-8} ${H.L[1]-6} Q${(H.L[0]+H.R[0])/2} ${H.L[1]+24} ${H.R[0]+8} ${H.R[1]-6}" fill="#F2C14E" ${sw(1.4)}/>`,face:'right'})}${hero(300,266,.86,{body:'dress',hair:'braid',top:'#E98FA0',skirt:'#5B7FB8',mood:'joy',arms:'holdFront',face:'left'})}
  ${[0,1,2].map(k=>`<rect x="${190+k*20}" y="${250-k*4}" width="16" height="16" fill="${['#C9473B','#3F6FA8','#5E9C5A'][k]}" ${sw(1)}/>`).join('')}`,'#EFE3C8'),
  text:`우리도 앞치마에 장난감을 담아 정리 놀이를 해 볼까요? 여럿이 나르면 금세 끝나요.`},
 {kind:'end', svg:endBase('gy',`${g(200,220,.6,fence(0))}`,kid(64,276,.5,{arms:'cheer',mood:'joy'}),gy(338,276,.55,{arms:'waveR',mood:'joy'})),
  text:`군사도 스님도 엄마도 함께 지킨 산성이 남긴 선물,<br>모두의 힘.<br>오늘도 한강 곁에 있어요.<br><span class="big">끝</span>`},
 {kind:'talk'}
];
BOOKS.push({id:'gwonyul',era:'joseon',title:'권율과 행주산성',who:'권율',teaser:'군사와 스님과 엄마들이 함께 지킨 산성이 있어요.',pages:P,
 talk:{three:['산성에서 누가누가 함께 싸웠지?','치마에 돌 담는 흉내 내 볼까?','행주산성 옆에는 무슨 강이 있었지?'],
  five:['적은 사람으로 어떻게 많은 적을 이겼을까?','"행주치마" 이야기는 왜 확실하지 않을까?','우리 집에서 모두 함께 하면 쉬워지는 일은 뭘까?'],
  note:'권율(1537~1599)은 임진왜란 때의 장수입니다. 1593년 음력 2월 고양 행주산성에서 2천여~1만 명(기록마다 다름)의 군사와 승병, 백성들로 3만 명 규모의 일본군을 물리쳤습니다(행주대첩). 한산도 대첩, 진주대첩과 함께 임진왜란 3대 대첩으로 꼽힙니다. 여성들이 짧은 치마에 돌을 날랐다는 이야기는 전하는 이야기이며, "행주치마"라는 말은 행주대첩 이전 문헌에도 보여 이 싸움에서 생긴 말은 아닙니다.'}});
})();
