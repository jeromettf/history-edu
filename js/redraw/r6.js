/* 본문과 그림 맞추기 2: 고려부터 현대까지 */
(()=>{
const wg=(x,y,s,o={})=>hero(x,y,s,{body:'armor',robe:'#B8862F',hat:'helmet',...o});
const mun=(x,y,s,o={})=>hero(x,y,s,{robe:'#6E8FB0',hat:'gat',belt:K.gold,collar:'#FFF8EC',beard:HAIR,...o});
const hh=(x,y,s,o={})=>hero(x,y,s,{robe:'#5E7FA8',hat:'gat',belt:K.gold,collar:'#FFF8EC',...o});
const hhOld=(x,y,s,o={})=>hh(x,y,s,{beard:'#E6E1D6',robe:'#4C6A90',...o});
const farmer2=(x,y,s,o={})=>hero(x,y,s,{robe:'#D6CDB4',skin:'#EDBF95',hat:'band',bandColor:'#FFFDF6',belt:'#8C7350',...o});
const girl=(x,y,s,o={})=>hero(x,y,s,{body:'dress',top:'#FFF3C4',skirt:'#E98FA0',hair:'braid',ribbon:'#C9473B',...o});
const saim=(x,y,s,o={})=>hero(x,y,s,{body:'dress',top:'#F6E2A6',skirt:'#5E9C8A',hair:'bun',...o});
const heojun=(x,y,s,o={})=>hero(x,y,s,{robe:'#EDE9E0',hat:'gat',belt:'#5E9C8A',collar:'#5E9C8A',...o});
const seonjo=(x,y,s,o={})=>king(x,y,s,{beard:HAIR,...o});
const sb=(x,y,s,o={})=>hero(x,y,s,{robe:'#5E7FA8',hat:'gat',belt:K.gold,collar:'#FFF8EC',...o});
const sbKid=(x,y,s,o={})=>hero(x,y,s,{robe:'#E7D7B4',hair:'braid',belt:'#8C7350',ribbon:'#5E7FA8',...o});
const mom=(x,y,s,o={})=>hero(x,y,s,{body:'dress',hair:'bun',top:'#FFFDF6',skirt:'#8C7A6A',...o});
const envoy=(x,y,s,o={})=>hero(x,y,s,{robe:'#B5473A',hat:'band',bandColor:K.gold,belt:K.gold,beard:'#3B2618',...o});
const hongdo=(x,y,s,o={})=>hero(x,y,s,{robe:'#D9E6C8',hat:'gat',belt:'#5E9C8A',collar:'#5E9C8A',...o});
const jeongjo=(x,y,s,o={})=>king(x,y,s,{beard:HAIR,...o});
const jy=(x,y,s,o={})=>hero(x,y,s,{robe:'#4C8C7A',hat:'gat',belt:K.gold,collar:'#FFF8EC',...o});
const jyOld=(x,y,s,o={})=>jy(x,y,s,{robe:'#EDE9E0',beard:'#D9D3C8',collar:'#4C8C7A',...o});
const jh=(x,y,s,o={})=>hero(x,y,s,{robe:'#EDE9E0',hat:'gat',belt:'#3F6FA8',collar:'#3F6FA8',beard:HAIR,...o});
const jho=(x,y,s,o={})=>hero(x,y,s,{robe:'#B9A475',hat:'gat',belt:'#5E9C8A',collar:'#FFF8EC',...o});
const gkKid=(x,y,s,o={})=>hero(x,y,s,{body:'dress',top:'#FFFFFF',skirt:'#2E3440',hair:'braid',ribbon:'#C9473B',...o});
const painter=(x,y,s,o={})=>person(x,y,s,{robe:'#6E5A4A',deco:`<path d="M-14 -66 L0 -50 L14 -66" fill="#E6E1D6" ${sw(1.6)}/>`,
  front:`<path d="M-32 -96 Q-34 -132 0 -132 Q34 -132 32 -96 Q20 -120 4 -112 Q-14 -122 -32 -96Z" fill="${HAIR}" ${sw()}/>`,...o});
const wife=(x,y,s,o={})=>hero(x,y,s,{body:'dress',hair:'bun',top:'#F6E2A6',skirt:'#7FB3C8',...o});
const desk=(x,y,w=90)=>`<rect x="${x-w/2}" y="${y}" width="${w}" height="12" rx="2" fill="#8A5A3C" ${sw()}/><path d="M${x-w/2+8} ${y+12} v14 M${x+w/2-8} ${y+12} v14" stroke="#8A5A3C" stroke-width="6"/>`;
const paperOn=(x,y,w=60,inner='')=>`<rect x="${x-w/2}" y="${y-10}" width="${w}" height="10" fill="#FFFDF6" ${sw(1)}/>${inner}`;
const stack=(x,y,n=4,c=['#C9473B','#5E7FA8','#B8862F','#5E9C8A'])=>[...Array(n)].map((_,k)=>`<rect x="${x-26}" y="${y-k*9-9}" width="52" height="9" rx="1" fill="${c[k%c.length]}" ${sw(1.2)}/>`).join('');
const frameP=(x,y,w,h,inner)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="#8C6A48" ${sw()}/><rect x="${x+6}" y="${y+6}" width="${w-12}" height="${h-12}" fill="#FBF4E2"/>${inner}`;
const moon=(x,y,r)=>`<circle cx="${x}" cy="${y}" r="${r*2}" fill="#FFF4C8" opacity=".18"/><circle cx="${x}" cy="${y}" r="${r}" fill="#FFF4C8" ${sw(1.6)}/>`;
const stars=n=>[...Array(n)].map((_,k)=>`<circle cx="${(k*83)%400}" cy="${(k*47)%120+8}" r="1.4" fill="#FFF8DC"/>`).join('');
const hut2=(x,y,s,leak)=>g(x,y,s,`<path d="M-80 -50 Q0 -90 80 -50 L70 -40 Q0 -76 -70 -40Z" fill="#C9A878" ${sw()}/><rect x="-62" y="-44" width="124" height="44" fill="#E6D3A6" ${sw()}/><rect x="-14" y="-34" width="28" height="34" fill="#6A5240" ${sw(1.2)}/>${leak?`<path d="M30 -60 l-6 10 M40 -56 l-4 8" stroke="#8A6A44" stroke-width="2"/>`:''}`);
const ox2=(x,y,s,c)=>ox(x,y,s,c);
const mapSheet=(x,y,w,h,r=0)=>`<g transform="rotate(${r} ${x} ${y})"><rect x="${x-w/2}" y="${y-h/2}" width="${w}" height="${h}" fill="#F4E9CC" ${sw(1.4)}/><path d="M${x-w*.2} ${y-h*.35} Q${x-w*.3} ${y} ${x-w*.1} ${y+h*.35} Q${x+w*.2} ${y+h*.1} ${x+w*.1} ${y-h*.3}Z" fill="#CFE0B4" ${sw(1)}/></g>`;

/* 왕건 3: 배를 이끌고 바다로 나가는 왕건 장군 */
redraw('wanggeon',3,()=>SVn(`<path d="M-6 150 Q200 140 406 150 L406 290 L-6 290Z" fill="#4F92BA"/>${[...Array(10)].map((_,k)=>`<path d="M${(k*97)%420-20} ${170+(k%4)*24} q10 -8 20 0 q10 8 20 0" fill="none" stroke="#FFFFFF" stroke-width="3" opacity=".8"/>`).join('')}
  ${bigShip(320,170,.45,'#8A5A3C')}${bigShip(250,160,.35,'#8A5A3C')}
  ${bigShip(140,240,1.1,'#8A5A3C')}<path d="M70 120 V70" stroke="${K.wood}" stroke-width="4"/><path d="M70 70 h44 v26 h-44Z" fill="#B8862F"/>
  ${wg(196,232,.5,{arms:'pointR',mood:'joy',face:'right'})}
  ${T(300,70,'남쪽 나주로!',22,K.red)}`,'url(#r6a)',sky('r6a','#CFE7F2','#F6EAD0')));

/* 문익점 3: 붓 뚜껑 속에 목화씨를 넣는 문익점, 가까이 */
redraw('munikjeom',3,()=>SVn(`${room()}
  ${mun(130,262,1.05,{stance:'sit',arms:{L:[-6,-58],R:[30,-60]},mood:'o',face:'right',still:true})}
  ${desk(250,236,140)}
  ${g(230,226,1,`<path d="M-50 0 L40 -10" stroke="${K.wood}" stroke-width="7" stroke-linecap="round"/><rect x="40" y="-16" width="26" height="12" rx="3" fill="#3A322B" ${sw(1.4)} transform="rotate(-6 40 -10)"/>`)}
  ${[0,1,2,3].map(k=>`<ellipse cx="${300+k*10}" cy="${230-k%2*3}" rx="4" ry="3" fill="#6A5240"/>`).join('')}
  ${T(260,80,'쉿, 소중한 목화씨',20,K.red)}`,'#EADCC0'));

/* 황희 7: 비 새는 작은 초가와 소박한 황희 */
redraw('hwanghui',7,()=>SVn(`${rainFX(40,'#7F9AB8')}${ridge(150,'#8EA2B8',30,2)}<path d="M-6 200 Q200 190 406 202 L406 290 L-6 290Z" fill="#A9B88A"/>
  ${hut2(230,236,1.8,true)}<ellipse cx="270" cy="236" rx="16" ry="5" fill="#8A6A44" ${sw(1.2)}/>${[0,1].map(k=>`<path d="M${266+k*8} ${190+k*16} v8" stroke="#6FA8C8" stroke-width="3" stroke-linecap="round"/>`).join('')}
  ${hhOld(120,262,.95,{stance:'sit',mood:'smile',face:'right',arms:'lap'})}${hero(60,262,.8,{body:'dress',hair:'bun',top:'#FFFDF6',skirt:'#8C7A6A',stance:'sit',arms:'lap',mood:'smile',face:'right'})}
  ${T(300,60,'똑, 똑…',22,'#3F6FA8')}`,'url(#r6b)',sky('r6b','#9FB3C8','#D7E0E6')));

/* 황희 8: 친구의 그림을 보고 칭찬하는 아이 */
redraw('hwanghui',8,()=>SVn(`${room()}
  ${kid(120,262,.9,{stance:'sit',arms:'pointR',mood:'joy',face:'right'})}
  <rect x="160" y="200" width="90" height="60" fill="#FFFDF6" ${sw()} transform="rotate(-6 205 230)"/><path d="M180 240 q20 -40 40 -10 q14 20 20 -6" fill="none" stroke="#5E9C5A" stroke-width="4" transform="rotate(-6 205 230)"/><circle cx="196" cy="214" r="9" fill="#F2A24B"/>
  ${hero(300,262,.86,{body:'dress',hair:'braid',top:'#F6E2A6',skirt:'#E98FA0',stance:'sit',arms:'lap',mood:'joy',face:'left'})}
  ${T(200,70,'여기 색이 예쁘다!',22,K.red)}`,'#EFE3C8'));

/* 신사임당 2: 앉아서 그림을 보고 따라 그리는 아이 */
redraw('saimdang',2,()=>SVn(`${room()}
  ${`<rect x="230" y="60" width="130" height="110" fill="#FBF4E2" ${sw()}/>`}<path d="M260 150 q20 -60 50 -40 q30 20 20 50" fill="none" stroke="#5E9C5A" stroke-width="4"/><circle cx="300" cy="96" r="12" fill="#E98FA0"/><circle cx="330" cy="140" r="6" fill="#7A6AA8"/>
  ${girl(110,262,1.0,{stance:'sit',arms:'writeR',prop:H=>PROP.brush(H),mood:'smile',face:'right'})}
  ${desk(190,240,110)}${paperOn(190,240,80,`<path d="M164 236 q10 -16 24 -10" fill="none" stroke="#5E9C5A" stroke-width="2.4"/><circle cx="196" cy="232" r="4" fill="#E98FA0"/>`)}
  ${T(120,60,'똑같이 따라 그려 볼래',18,K.red)}`,'#EADCC0'));

/* 신사임당 5: 얼룩진 치마에 포도를 그려 주는 신사임당 */
redraw('saimdang',5,()=>SVn(`${room()}
  ${hero(270,278,1.05,{body:'dress',hair:'bun',top:'#FFFDF6',skirt:'#EDE6D6',mood:'o',face:'left',arms:'handsDown',still:true})}
  ${[[250,250],[262,262],[274,250],[256,238],[270,238],[262,226]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="7" fill="#6A4A8A" ${sw(1.2)}/>`).join('')}<path d="M262 220 q10 -16 24 -10" fill="none" stroke="#5E7A4A" stroke-width="3"/><path d="M284 214 q14 -2 16 10 q-14 4 -16 -10Z" fill="#7CA65A" ${sw(1)}/>
  ${saim(140,270,1.0,{stance:'kneel',arms:'reach',prop:H=>PROP.brush(H),mood:'smile',face:'right'})}
  ${T(200,60,'얼룩이 포도송이가 됐어요',20,K.red)}`,'#EADCC0'));

/* 허준 3: 임금님의 맥을 짚는 허준 */
redraw('heojun',3,()=>SVn(`${palace()}
  ${seonjo(260,262,1.0,{stance:'sit',arms:{L:[-30,-30],R:[-20,-36]},mood:'smile',face:'left'})}
  ${heojun(130,262,1.0,{stance:'kneel',arms:{L:[50,-44],R:[56,-30]},mood:'o',face:'right'})}
  <rect x="300" y="250" width="50" height="14" fill="#8A5A3C" ${sw(1.2)}/><path d="M314 250 q4 -10 10 0 M330 250 q4 -10 10 0" fill="#FFFDF6" ${sw(1)}/>`,'#E6CFAA'));

/* 허준 5: 밤늦게 앉아서 책을 쓰는 허준 */
redraw('heojun',5,()=>SVn(`<rect x="-6" y="-6" width="412" height="292" fill="#3A3048"/>${stars(16)}${moon(330,60,18)}
  <path d="M-6 220 H406 V290 H-6Z" fill="#6A5240"/>${candle(70,236,1.1)}<circle cx="70" cy="200" r="160" fill="url(#candleG)" opacity=".5"/>
  ${heojun(180,248,1.0,{stance:'sit',arms:'writeR',prop:H=>PROP.brush(H),mood:'smile',face:'right',beard:'#8A8580'})}
  ${desk(250,236,110)}${paperOn(250,236,70,'<path d="M224 231 h40" stroke="#8A8580" stroke-width="1.4"/>')}${stack(350,236,5)}`,'#3A3048',candleDef));

/* 한석봉 7: 문 앞의 어머니, 달밤에 다시 산으로 떠나는 석봉 */
redraw('seokbong',7,()=>SVn(`${stars(20)}${moon(320,60,22)}${ridge(150,'#3E4A6A',50,2)}<path d="M-6 220 Q200 206 406 222 L406 290 L-6 290Z" fill="#4A5A70"/>
  <path d="M120 290 Q200 240 330 196" fill="none" stroke="#8E9AA6" stroke-width="12" stroke-linecap="round"/>
  ${g(80,250,1.4,`<path d="M-60 -50 Q0 -90 60 -50 L50 -40 Q0 -76 -50 -40Z" fill="#8A7A5A" ${sw()}/><rect x="-44" y="-44" width="88" height="44" fill="#6A5A48" ${sw()}/><rect x="-14" y="-36" width="28" height="36" fill="#FFD27A" ${sw(1.2)}/>`)}
  ${mom(80,262,.8,{mood:'smile',face:'right',arms:'handsDown'})}
  ${sbKid(260,226,.62,{stance:'walk',arms:'walk',mood:'sad',face:'right'})}
  ${T(110,60,'아직 더 연습해야겠구나',16,'#F6F0D6')}`,'url(#r6c)',sky('r6c','#141C3A','#3A4A78')));

/* 한석봉 8: 석봉의 글씨를 보고 감탄하는 임금님 */
redraw('seokbong',8,()=>SVn(`${palace()}
  <rect x="150" y="100" width="100" height="120" fill="#FFFDF6" ${sw()}/>${['天','地','玄','黃'].map((c,k)=>`<text x="${225-Math.floor(k/2)*40}" y="${145+(k%2)*50}" text-anchor="middle" font-size="34" font-family="serif" fill="#2B1E16">${c}</text>`).join('')}
  ${king(310,272,.9,{mood:'joy',face:'left',arms:'pointL',beard:HAIR})}
  ${sb(90,272,.9,{mood:'smile',face:'right',arms:'pray'})}
  ${T(200,70,'참으로 훌륭하구나!',20,K.red)}`,'#E6CFAA'));

/* 허난설헌 7: 시집을 들고 배에 오르는 명나라 사신 */
redraw('heonanseolheon',7,()=>SVn(`<path d="M-6 150 Q200 140 406 150 L406 290 L-6 290Z" fill="#5B9BC2"/>${[...Array(8)].map((_,k)=>`<path d="M${(k*97)%420-20} ${170+(k%4)*24} q10 -8 20 0 q10 8 20 0" fill="none" stroke="#FFFFFF" stroke-width="3" opacity=".8"/>`).join('')}
  ${bigShip(300,200,.9,'#8A5A3C')}<path d="M-6 290 L-6 220 L180 220 L200 290Z" fill="#9E9686" ${sw()}/>
  ${envoy(120,280,1.0,{arms:'holdFront',prop:H=>`<g transform="translate(${(H.L[0]+H.R[0])/2} ${H.L[1]+34})">${bigBook('','#7A6AA8')}</g>`,mood:'joy',face:'right'})}
  ${hero(40,270,.7,{robe:'#5E7FA8',hat:'gat',mood:'smile',face:'right',arms:'waveR'})}
  ${T(290,80,'이 시를 중국에도 알리겠소',17,K.red)}`,'url(#r6d)',sky('r6d','#CFE7F2','#F6EAD0')));

/* 김홍도 3: 정조 임금님이 그림을 맡기는 장면 */
redraw('kimhongdo',3,()=>SVn(`${palace()}
  ${jeongjo(110,272,.9,{mood:'smile',face:'right',arms:'pointR'})}
  ${hongdo(290,266,.9,{stance:'kneel',arms:'pray',mood:'joy',face:'left'})}
  <g transform="rotate(-8 200 230)"><rect x="170" y="210" width="70" height="40" fill="#FBF4E2" ${sw()}/><path d="M178 240 q14 -20 26 -6 q10 10 26 -12" fill="none" stroke="#5E7A4A" stroke-width="2.4"/></g>`,'#E6CFAA'));

/* 김홍도 8: 박물관에서 김홍도 그림을 보는 가족 */
redraw('kimhongdo',8,()=>SVn(`<rect x="-6" y="-6" width="412" height="292" fill="#F2EEE4"/><path d="M-6 230 H406 V290 H-6Z" fill="#C9B48A"/>
  ${frameP(60,60,120,100,`<circle cx="100" cy="120" r="10" fill="#D6CDB4" ${sw(1)}/><circle cx="140" cy="120" r="10" fill="#D6CDB4" ${sw(1)}/><path d="M80 140 h80" stroke="#8A6A44" stroke-width="2"/>`)}${frameP(220,60,120,100,`<path d="M240 140 q20 -30 40 -10 q20 20 40 -14" fill="none" stroke="#5E7A4A" stroke-width="2.4"/><circle cx="300" cy="96" r="8" fill="#C9473B"/>`)}
  ${kid(150,280,.86,{arms:'pointL',mood:'joy',face:'left'})}${hero(270,280,.86,{body:'dress',hair:'bun',top:'#F2C14E',skirt:'#5B7FB8',mood:'smile',face:'left'})}
  ${T(200,40,'국립중앙박물관',20,K.red)}`,'#F2EEE4'));

/* 정약용 4: 책을 펴 놓고 거중기를 그리는 정약용 */
redraw('jeongyakyong',4,()=>SVn(`${room()}
  ${jy(130,256,1.0,{stance:'sit',arms:'writeR',prop:H=>PROP.brush(H),mood:'o',face:'right'})}
  ${desk(240,236,150)}<rect x="190" y="206" width="90" height="30" fill="#FFFDF6" ${sw(1.2)}/><path d="M205 234 L216 210 M265 234 L254 210 M216 210 H254" stroke="#5A3B2C" stroke-width="2"/><circle cx="235" cy="212" r="4" fill="none" stroke="#5A3B2C" stroke-width="1.6"/>
  <g transform="translate(330 232)">${openBook}</g>
  ${T(240,80,'도르래를 여러 개 달면…',18,K.red)}`,'#EADCC0'));

/* 정약용 7: 강진 바닷가 초가에서 책을 쓰는 정약용 */
redraw('jeongyakyong',7,()=>SVn(`<path d="M-6 150 Q200 140 406 150 L406 200 L-6 200Z" fill="#6FA8C8"/>${ridge(150,'#7FA88E',30,3)}<path d="M-6 196 H406 V290 H-6Z" fill="#C9B48A"/>
  ${g(200,250,2.0,`<path d="M-90 -60 Q0 -100 90 -60 L80 -50 Q0 -86 -80 -50Z" fill="#C9A878" ${sw()}/><rect x="-72" y="-54" width="144" height="54" fill="#6A5240" ${sw()}/>`)}
  ${jyOld(160,262,1.0,{stance:'sit',arms:'writeR',prop:H=>PROP.brush(H),mood:'smile',face:'right'})}
  ${desk(240,240,90)}${paperOn(240,240,60)}${stack(310,262,6)}${stack(350,262,4)}`,'url(#r6e)',sky('r6e','#CFE7F2','#F6EAD0')));

/* 김정희 2: 벼루 앞에 앉아 날마다 연습하는 김정희 */
redraw('kimjeonghui',2,()=>SVn(`${room()}
  ${jh(140,256,1.0,{stance:'sit',arms:'writeR',prop:H=>PROP.brush(H),mood:'o',face:'right'})}
  ${desk(240,236,140)}<rect x="190" y="210" width="80" height="26" fill="#FFFDF6" ${sw(1.2)}/><path d="M204 216 v14 M222 214 v18 M240 216 v14 M256 218 h8" stroke="#2B1E16" stroke-width="3"/>
  <ellipse cx="292" cy="230" rx="16" ry="7" fill="#3A322B" ${sw(1.2)}/>
  ${[0,1,2,3].map(k=>`<ellipse cx="${330+k*16}" cy="${270-k*4}" rx="12" ry="5" fill="#4A4A52" ${sw(1)}/><ellipse cx="${330+k*16}" cy="${270-k*4}" rx="4" ry="2" fill="#EADCC0"/>`).join('')}
  ${T(300,80,'벼루에 구멍이 날 때까지',18,K.red)}`,'#EADCC0'));

/* 김정희 7: 박물관에서 세한도를 보는 가족 */
redraw('kimjeonghui',7,()=>SVn(`<rect x="-6" y="-6" width="412" height="292" fill="#F2EEE4"/><path d="M-6 230 H406 V290 H-6Z" fill="#C9B48A"/>
  ${frameP(70,60,260,100,`<path d="M120 140 Q130 90 120 70 M130 110 q20 -10 30 0 M250 140 Q256 100 248 80" fill="none" stroke="#3A322B" stroke-width="3"/><rect x="170" y="110" width="50" height="30" fill="none" stroke="#3A322B" stroke-width="2"/><path d="M165 112 L195 92 L225 112" fill="none" stroke="#3A322B" stroke-width="2"/>`)}
  ${kid(150,280,.86,{arms:'pointR',mood:'o',face:'right'})}${hero(260,280,.86,{body:'dress',hair:'bun',top:'#F2C14E',skirt:'#5B7FB8',mood:'smile',face:'left'})}
  ${T(200,40,'세한도',22,K.red)}`,'#F2EEE4'));

/* 김정호 3: 옛 지도들을 펼쳐 놓고 비교하는 김정호 */
redraw('kimjeongho',3,()=>SVn(`${room()}<rect x="-6" y="226" width="412" height="60" fill="#D9B98A"/>
  ${mapSheet(260,250,90,40,-6)}${mapSheet(340,256,80,36,8)}${mapSheet(200,262,70,30,4)}
  ${jho(110,262,1.0,{stance:'sit',arms:'pointR',mood:'o',face:'right'})}
  ${stack(370,226,4)}
  ${T(230,80,'여기가 틀렸구나!',20,K.red)}`,'#EADCC0'));

/* 권기옥 2: 태극기를 손에 들고 만세를 부르는 기옥 */
redraw('gwongiok',2,()=>SVn(`${townscape(150,6)}<path d="M-6 190 H406 V290 H-6Z" fill="#D9C49A"/>
  ${[60,120,290,350].map((x,k)=>hero(x,232,.5,{robe:['#FFFFFF','#EFE6D2'][k%2],hat:['gat',''][k%2],arms:k%2?'flagR':'cheer',prop:k%2?H=>PROP.taeguk(H):'',mood:'joy'})).join('')}
  ${gkKid(200,276,1.0,{arms:'flagR',prop:H=>PROP.taeguk(H),mood:'joy'})}
  ${T(200,40,'대한 독립 만세!',24,K.red)}`,'url(#r6f)',sky('r6f','#CFE7F2','#F6EAD0')));

/* 이중섭 1: 소를 바라보는 중섭, 소도 화면 안에 */
redraw('ijungseop',1,()=>SVn(`${hills('#A9CDB4','#BCD38F',190,214)}
  ${ox(260,262,1.0,'#B9763E')}
  ${hero(100,272,.9,{robe:'#E7D7B4',hair:'braid',belt:'#8C7350',ribbon:'#C9473B',arms:'pointR',mood:'joy',face:'right'})}
  ${heart(190,120)}`,'url(#r6g)',sky('r6g','#CFE7F2','#F6EAD0')));

/* 이중섭 3: 아내와 두 아들, 네 식구 */
redraw('ijungseop',3,()=>SVn(`${room()}
  ${painter(110,270,.95,{arms:'armsOpen',mood:'joy',face:'right'})}${wife(300,270,.92,{mood:'smile',face:'left',arms:'holdFront'})}
  ${boy50(180,276,.66,{mood:'joy',arms:'cheer'})}${boy50(235,278,.56,{mood:'joy',arms:'waveR'})}
  ${heart(200,110)}`,'#EFE3C8'));

/* 이중섭 4: 제주도 아주 작은 방에 모여 앉은 네 식구 */
redraw('ijungseop',4,()=>SVn(`<path d="M-6 150 Q200 140 406 150 L406 200 L-6 200Z" fill="#6FA8C8"/>${[0,1,2].map(k=>`<path d="M${40+k*140} 170 q10 -6 20 0" fill="none" stroke="#FFFFFF" stroke-width="3"/>`).join('')}
  <rect x="60" y="80" width="280" height="190" fill="#E6D3A6" ${sw()}/><path d="M40 90 Q200 30 360 90 L340 96 Q200 46 60 96Z" fill="#C9A878" ${sw()}/><rect x="80" y="110" width="240" height="150" fill="#F2E6C8" ${sw(1.4)}/>
  ${painter(130,246,.62,{stance:'sit',arms:'lap',mood:'joy',face:'right'})}${wife(270,246,.6,{stance:'sit',arms:'lap',mood:'smile',face:'left'})}
  ${boy50(180,250,.46,{stance:'sit',arms:'lap',mood:'joy'})}${boy50(222,252,.42,{stance:'sit',arms:'lap',mood:'joy'})}
  ${T(200,60,'작아도 오순도순',20,K.red)}`,'url(#r6h)',sky('r6h','#CFE7F2','#F6EAD0')));
})();
