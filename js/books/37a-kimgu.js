/* 김구: 아름다운 나라를 꿈꾼 사람 */
(()=>{
setScene('modern','autumn');
const gu=(x,y,s,o={})=>person(x,y,s,{robe:'#E6E1D6',deco:`<path d="M-14 -66 L0 -50 L14 -66" fill="#FFFFFF" ${sw(1.6)}/>`,
  front:`<path d="M-31 -98 Q-30 -124 0 -126 Q30 -124 31 -98 Q0 -108 -31 -98Z" fill="#5A4A3E" ${sw()}/><circle cx="-11" cy="-92" r="8" fill="none" ${sw(2)}/><circle cx="11" cy="-92" r="8" fill="none" ${sw(2)}/><path d="M-3 -92 H3" ${sw(2)}/>`,...o});
const guKid=(x,y,s,o={})=>hero(x,y,s,{robe:'#E7D7B4',hair:'braid',belt:'#8C7350',ribbon:HAIR,...o});
const mom=(x,y,s,o={})=>hero(x,y,s,{body:'dress',hair:'bun',top:'#FFFDF6',skirt:'#5A5560',...o});
const govt=(x,y,s,c,o={})=>person(x,y,s,{robe:c,deco:`<path d="M-14 -66 L0 -50 L14 -66" fill="#FFFFFF" ${sw(1.6)}/>`,front:`<path d="M-31 -98 Q-30 -128 0 -128 Q30 -128 31 -98 Q0 -112 -31 -98Z" fill="${HAIR}" ${sw()}/>`,...o});
const house=(x,y,s)=>g(x,y,s,`<rect x="-70" y="-60" width="140" height="60" fill="#E6D3A6" ${sw()}/><path d="M-84 -58 L0 -100 L84 -58Z" fill="#8A4A3A" ${sw()}/>${[-40,0,40].map(c=>`<rect x="${c-12}" y="-46" width="24" height="24" fill="#FFF8EC" ${sw(1.2)}/>`).join('')}`);
const P=[
 {kind:'cover', svg:coverBase('gu','문화의 힘',`${g(300,240,1.2,`${[0,1,2].map(k=>`<path d="M${-30+k*30} 0 l10 -30 l10 30Z" fill="${['#C9473B','#F2C14E','#3F6FA8'][k]}" ${sw()}/>`).join('')}`)}`,gu(130,264,1.0,{arms:'armsOpen',mood:'smile'})),
  text:`<span class="big">김구와 아름다운 나라</span><br>위인 그림책 {no}권`},
 {svg:SV(`${room()}
  ${guKid(150,262,.9,{stance:'sit',arms:'holdFront',prop:H=>`<g transform="translate(${(H.L[0]+H.R[0])/2} ${H.L[1]+30})">${openBook}</g>`,mood:'o',face:'right'})}${mom(300,266,.86,{mood:'smile',face:'left'})}`,'#EADCC0'),
  text:`황해도 해주에 창수라는 아이가 살았어요. 가난했지만 엄마는 창수를 늘 믿어 주었어요. 창수는 커서 이름을 '김구'로 바꾸었어요.`},
 {svg:SV(`${room()}
  ${gu(200,272,.92,{mood:'smile',arms:'pointR',face:'right'})}
  ${[0,1,2].map(k=>oldKid(60+k*50+(k>0?190:0),276,.58,{mood:'joy',face:k?'left':'right',arms:k===1?'cheer':'handsDown'})).join('')}`,'#EADCC0'),
  text:`젊은 김구는 학교를 세우고 아이들을 가르쳤어요. "배워야 나라가 힘을 얻는다." 김구는 그렇게 믿었어요.`},
 {chips:['1919년'], svg:SV(`${townscape(160,6)}<path d="M-6 190 H406 V290 H-6Z" fill="#D9C49A"/>
  ${house(200,230,1.4)}<path d="M200 90 V40" stroke="${K.wood}" stroke-width="3"/>${g(220,58,.9,`<rect x="-20" y="-14" width="40" height="28" fill="#FFFFFF" ${sw(1.2)}/><circle cx="0" cy="0" r="6" fill="#C9473B"/><path d="M-6 0 a6 6 0 0 0 12 0Z" fill="#3F6FA8"/>`)}
  ${gu(90,276,.72,{mood:'smile',arms:'pointR',face:'right'})}${govt(320,276,.7,'#3F4A5A',{mood:'smile',face:'left'})}
  ${T(200,40,'대한민국 임시 정부',18,K.red)}`,'url(#gu1)',sky('gu1','#CFE7F2','#F6EAD0')),
  text:`삼일 운동 뒤, 독립운동가들은 중국 상하이에 '대한민국 임시 정부'를 세웠어요. 김구는 처음에 정부 건물의 문지기를 하겠다고 했대요. 무슨 일이든 나라를 위해서라면 하겠다는 마음이었어요.`},
 {svg:SV(`${room()}
  ${gu(200,272,.92,{mood:'sad',arms:'pray'})}${govt(80,272,.66,'#4C5A6E',{mood:'sad',face:'right'})}${govt(320,272,.66,'#5A4A3E',{mood:'sad',face:'left'})}
  ${T(200,80,'그래도 포기하지 않아요',18,K.red)}`,'#EADCC0'),
  text:`임시 정부는 돈도 사람도 모자라 힘든 날이 많았어요. 다른 사람들이 하나둘 떠나도 김구는 끝까지 남아 임시 정부를 이끌었어요.`},
 {chips:['1945년'], svg:SV(`${townscape(150,7)}<path d="M-6 170 H406 V290 H-6Z" fill="#D9C49A"/>
  ${[...Array(10)].map((_,k)=>hero((k*41)%400+16,200+Math.floor(k/5)*20,.36,{robe:['#FFFFFF','#EFE6D2'][k%2],hat:['gat',''][k%2],arms:'flagR',prop:H=>PROP.taeguk(H),mood:'joy'})).join('')}
  ${gu(200,292,.86,{mood:'joy',arms:'cheer'})}`,'url(#gu2)',sky('gu2','#BFE0F0','#FCEFD6')),
  text:`1945년 마침내 나라를 되찾았어요. 김구는 스물여섯 해 만에 고국 땅을 밟았어요.`},
 {svg:SV(`${hills('#A9CDB4','#BCD38F',190,214)}
  ${gu(120,272,.86,{mood:'smile',arms:'pointR',face:'right'})}
  <g id="tWish">${[0,1,2].map(k=>`<g transform="translate(${230+k*50} ${140-k*10})"><circle r="22" fill="${['#F2C14E','#E98FA0','#9FC2D8'][k]}" ${sw()}/></g>`).join('')}</g>
  ${T(280,60,'나의 소원',20,K.red)}`,'url(#gu3)',sky('gu3','#CFE7F2','#F6EAD0')),
  taps:[{label:'첫째 소원',el:'tWish',say:'"내 소원은 대한 독립이오." 세 번을 물어도 같은 대답이었대요.'},{label:'아름다운 나라',el:'tWish',say:'"나는 우리나라가 가장 아름다운 나라가 되기를 원한다." 높은 문화의 힘을 가진 나라 말이에요.'}],tapHint:'소원 방울을 눌러 볼까요?',
  text:`김구는 『백범일지』라는 책에 소원을 적었어요. 힘이 센 나라보다, 노래와 이야기와 그림이 아름다운 나라가 되기를 바란다고요.`},
 {svg:SV(`${room()}
  ${kid(120,266,.86,{mood:'joy',arms:{L:[-10,-80],R:[18,-84]},prop:H=>`<path d="M${H.L[0]} ${H.L[1]} L${H.R[0]+6} ${H.R[1]-4}" stroke="#8A6A44" stroke-width="5" stroke-linecap="round"/>`,face:'right'})}${hero(300,266,.86,{body:'dress',hair:'braid',top:'#E98FA0',skirt:'#5B7FB8',mood:'joy',arms:'writeR',prop:H=>PROP.brush(H),face:'left'})}
  ${T(200,80,'노래하고 그리고!',18,K.red)}`,'#EFE3C8'),
  text:`노래하고, 그림 그리고, 이야기를 만드는 우리도 김구가 꿈꾼 아름다운 나라를 만드는 사람이에요. 서울 효창공원에는 김구를 기리는 백범김구기념관이 있어요.`},
 {kind:'end', svg:endBase('gu',`${[0,1,2].map(k=>`<circle cx="${150+k*50}" cy="${190-k*12}" r="24" fill="${['#F2C14E','#E98FA0','#9FC2D8'][k]}" ${sw()}/>`).join('')}`,kid(64,276,.5,{arms:'cheer',mood:'joy'}),gu(338,276,.55,{arms:'waveR',mood:'joy'})),
  text:`끝까지 포기하지 않은 사람이 남긴 선물,<br>아름다운 나라라는 꿈.<br>오늘도 우리 곁에 있어요.<br><span class="big">끝</span>`},
 {kind:'talk'}
];
BOOKS.push({id:'kimgu',era:'modern',title:'김구와 아름다운 나라',who:'김구',teaser:'"우리나라가 가장 아름다운 나라가 되기를" 바란 사람이 있어요.',pages:P,
 talk:{three:['김구의 소원은 뭐였지?','안경 쓴 흉내 내 볼까?','너의 소원은 뭐야?'],
  five:['김구는 왜 문지기라도 하겠다고 했을까?','"아름다운 나라"는 어떤 나라일까?','우리 동네를 더 아름답게 하려면 무엇을 할 수 있을까?'],
  note:'김구(1876~1949)는 호가 백범인 독립운동가입니다. 어릴 적 이름은 창암, 청년기에는 창수였고 뒤에 구(九)로 고쳤습니다. 1919년 상하이 대한민국 임시정부에 참여해 경무국장으로 시작했으며, 문지기를 자청했다는 이야기는 『백범일지』에 실려 있습니다. 1940년대 임시정부 주석을 지냈고 1945년 11월 귀국했습니다. 『백범일지』 끝의 「나의 소원」에서 "나는 우리나라가 세계에서 가장 아름다운 나라가 되기를 원한다"고 썼습니다. 1949년 암살되었습니다. 서울 효창공원에 백범김구기념관과 묘소가 있습니다.'}});
})();
