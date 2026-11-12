/* 본문과 그림 맞추기 1: 고조선부터 남북국까지 */
(()=>{
const hwanung=(x,y,s,o={})=>hero(x,y,s,{robe:'#FFFDF6',hair:'topknot',hat:'crown',belt:K.gold,...o});
const yuhwa=(x,y,s,o={})=>hero(x,y,s,{body:'dress',top:'#F6E2A6',skirt:'#7FB3C8',hair:'long',...o});
const onjo=(x,y,s,o={})=>hero(x,y,s,{robe:'#5E9C8A',pattern:'dots',dotColor:'#FFF8EC',hair:'braid',belt:K.gold,ribbon:K.gold,...o});
const biryu=(x,y,s,o={})=>hero(x,y,s,{robe:'#B5874F',pattern:'dots',dotColor:'#FFF8EC',hair:'braid',belt:'#7A3B2C',ribbon:'#7A3B2C',...o});
const yuri=(x,y,s,o={})=>hero(x,y,s,{robe:'#E7C76A',pattern:'dots',dotColor:'#7A3B2C',hair:'topknot',hat:'feather',belt:'#7A3B2C',...o});
const farmer2=(x,y,s,o={})=>hero(x,y,s,{robe:'#D6CDB4',skin:'#EDBF95',hat:'band',bandColor:'#FFFDF6',belt:'#8C7350',...o});
const ur=(x,y,s,o={})=>hero(x,y,s,{robe:'#EDE3CC',hat:'band',bandColor:'#7A6AA8',belt:'#7A6AA8',beard:'#8A8580',...o});
const jinheung=(x,y,s,o={})=>hero(x,y,s,{robe:'#5E9C8A',hat:'crown',belt:K.gold,...o});
const ul=(x,y,s,o={})=>hero(x,y,s,{body:'armor',robe:'#C9473B',hat:'feather',beard:HAIR,...o});
const sui=(x,y,s,o={})=>hero(x,y,s,{body:'armor',robe:'#5A6E8A',hat:'helmet',beard:'#3B2618',...o});
const hwarang=(x,y,s,o={})=>hero(x,y,s,{robe:'#6C9BD2',hair:'braid',belt:'#C9473B',ribbon:'#EE98A6',...o});
const chunchu=(x,y,s,o={})=>hero(x,y,s,{robe:'#E7C76A',hair:'braid',belt:'#5E9C8A',ribbon:'#5E9C8A',...o});
const munhui=(x,y,s,o={})=>hero(x,y,s,{body:'dress',hair:'bun',top:'#FFFDF6',skirt:'#E79AA8',...o});
const hy=(x,y,s,o={})=>hero(x,y,s,{hair:'bald',robe:'#A7A49B',belt:false,collar:'#EDE9E0',deco:kasaL,...o});
const bogoKid=(x,y,s,o={})=>hero(x,y,s,{robe:'#7FB3C8',hair:'braid',belt:'#2C6E92',ribbon:'#2C6E92',...o});
const bogo=(x,y,s,o={})=>hero(x,y,s,{robe:'#2C6E92',hat:'band',bandColor:K.gold,belt:K.gold,collar:'#FFF8EC',...o});
const pirate=(x,y,s,o={})=>hero(x,y,s,{robe:'#5A5560',hat:'band',bandColor:'#3A2E2A',belt:'#3A2E2A',beard:'#3B2618',...o});
const gayageum=(x,y,s)=>g(x,y,s,`<path d="M-90 0 Q-96 -14 -84 -20 L84 -20 Q96 -14 90 0Z" fill="#B5874F" ${sw()}/><rect x="-80" y="-18" width="160" height="10" fill="#C9A15A"/>${[...Array(12)].map((_,k)=>`<path d="M-80 ${-17+k*1.4} L80 ${-17+k*1.4}" stroke="#FFF8EC" stroke-width=".8"/><path d="M${-30+k*5} ${-26+(k%3)*2} l4 6 l-8 0Z" fill="#F4EFE0" ${sw(.8)}/>`).join('')}<path d="M84 -20 Q100 -24 104 -8" fill="none" stroke="#C9473B" stroke-width="3"/>`);
const notes=(x,y)=>`<path d="M${x} ${y} v-18 l12 -4 v18" fill="none" ${sw(2)}/><circle cx="${x-3}" cy="${y}" r="4" fill="${L}"/><circle cx="${x+9}" cy="${y-4}" r="4" fill="${L}"/>`;
const crops=(x0,x1,y,rows=3)=>[...Array(rows)].map((_,r)=>[...Array(Math.floor((x1-x0)/30))].map((_,k)=>{const x=x0+k*30+(r%2)*15,yy=y+r*16;return `<path d="M${x} ${yy} q-2 -12 -8 -18 M${x} ${yy} q2 -14 8 -20 M${x} ${yy} v-20" fill="none" stroke="#7CA65A" stroke-width="2.6" stroke-linecap="round"/><circle cx="${x}" cy="${yy-22}" r="2.6" fill="#E9C25A"/>`}).join('')).join('');
const plow=(x,y,s)=>g(x,y,s,`<path d="M0 0 L-34 -40 M-22 -26 L-40 -22" stroke="${K.wood}" stroke-width="5" stroke-linecap="round"/><path d="M0 0 L60 -16" stroke="${K.wood}" stroke-width="5"/><path d="M-4 -2 l14 8 l-18 2Z" fill="#7D7F88" ${sw(1.2)}/>`);
const yoke=(x1,x2,y)=>`<path d="M${x1} ${y} L${x2} ${y}" stroke="${K.wood}" stroke-width="6" stroke-linecap="round"/>`;
const mound=(x,y,w,h,c='#8FB88A')=>`<path d="M${x-w} ${y} Q${x-w*.6} ${y-h} ${x} ${y-h} Q${x+w*.6} ${y-h} ${x+w} ${y}Z" fill="${c}" ${sw()}/><path d="M${x-w*.5} ${y-h*.7} Q${x} ${y-h*1.02} ${x+w*.4} ${y-h*.75}" fill="none" stroke="#FFFFFF" stroke-width="3" opacity=".35"/>`;
const ship=(x,y,s,c='#8A5A3C')=>bigShip(x,y,s,c);
const desk=(x,y,w=90)=>`<rect x="${x-w/2}" y="${y}" width="${w}" height="12" rx="2" fill="#8A5A3C" ${sw()}/><path d="M${x-w/2+8} ${y+12} v14 M${x+w/2-8} ${y+12} v14" stroke="#8A5A3C" stroke-width="6"/>`;

/* 단군 2: 땅에 내려와 농사짓는 법을 가르치는 환웅과 바람·비·구름 신하들 */
redraw('dangun',2,()=>SVn(`${cloud(70,60,1.3)}${cloud(330,50,1.1)}<path d="M290 70 q-6 20 0 30 M310 70 q-6 20 0 30 M330 70 q-6 20 0 30" stroke="#6FA8C8" stroke-width="3" stroke-linecap="round"/><path d="M40 90 q30 -10 60 4 q20 8 40 0" fill="none" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round"/>
  ${hills('#A9CDB4','#BCD38F',180,206)}${crops(230,400,238)}
  ${[[40,'#9FC2D8'],[80,'#E6E1D6'],[120,'#7FA8C8']].map(([x,c])=>hero(x,226,.48,{robe:c,hat:'band',bandColor:'#FFFDF6',mood:'smile',face:'right'})).join('')}
  ${hwanung(180,280,1.0,{arms:'pointR',mood:'smile',face:'right'})}
  ${farmer2(290,282,.8,{arms:'sowR',mood:'o',face:'left'})}${farmer2(360,276,.66,{arms:'holdFront',mood:'smile',face:'left'})}
  ${T(110,40,'바람, 비, 구름 신하들',16,K.red)}`,'url(#r5a)',sky('r5a','#CFE7F2','#F6EAD0')));

/* 주몽 3: 알에서 막 나온 아기, 깨진 껍데기는 땅에 */
redraw('jumong',3,()=>SVn(`${room()}<circle cx="200" cy="200" r="120" fill="#FFF2C4" opacity=".35"/>
  ${yuhwa(300,272,.9,{arms:'armsOpen',mood:'joy',face:'left'})}
  <path d="M120 262 Q118 236 140 228 L148 240 L158 228 L168 242 L176 230 Q192 240 188 262Z" fill="#FFFBEE" ${sw()}/>
  <path d="M206 262 Q214 248 232 252 L238 262Z" fill="#FFFBEE" ${sw()}/>
  ${hero(158,250,.56,{robe:'#E7C76A',hair:'topknot',belt:'#7A3B2C',mood:'joy',arms:'cheer',still:true})}
  ${[0,1,2].map(k=>`<path d="M${120+k*40} ${110-k*8} l4 -12 l4 12 l-12 -8 h16Z" fill="${K.gold}"/>`).join('')}
  ${T(200,60,'반짝반짝 눈이 빛나는 아이',18,K.red)}`,'#EADCC0'));

/* 온조 2: 형님 유리가 찾아오고, 비류와 온조는 길을 떠날 준비 */
redraw('onjo',2,()=>SVn(`${palace()}
  ${yuri(110,272,.9,{mood:'smile',face:'right',arms:'handsDown'})}
  ${biryu(250,276,.8,{mood:'sad',face:'left',stance:'walk',arms:'walk'})}${onjo(320,278,.78,{mood:'sad',face:'left',stance:'walk',arms:'walk'})}
  ${[0,1].map(k=>`<g transform="translate(${370+k*24} 262)"><rect x="-10" y="-30" width="20" height="24" rx="4" fill="#B5874F" ${sw(1.4)}/></g>`).join('')}
  ${T(110,70,'유리 왕자',16,K.ink)}`,'#E6CFAA'));

/* 온조 8: 풍납토성 둘레를 걷는 아이와 엄마 */
redraw('onjo',8,()=>SVn(`${townscape(120,7)}
  <path d="M-6 200 Q100 130 200 126 Q300 130 406 200 L406 290 L-6 290Z" fill="#8FB88A" ${sw()}/><path d="M-6 200 Q100 140 200 138 Q300 140 406 200" fill="none" stroke="#B5D49A" stroke-width="8"/>
  <path d="M-6 250 Q200 236 406 252" fill="none" stroke="#E6D3A6" stroke-width="20" stroke-linecap="round"/>
  ${kid(170,270,.66,{stance:'walk',arms:'walk',mood:'joy',face:'right'})}${hero(236,268,.72,{body:'dress',hair:'bun',top:'#F2C14E',skirt:'#5B7FB8',stance:'walk',arms:'walk',mood:'smile',face:'right'})}
  ${T(200,40,'흙으로 쌓은 성, 풍납토성',18,K.red)}`,'url(#r5b)',sky('r5b','#CFE7F2','#F6EAD0')));

/* 광개토대왕 3: 소로 밭을 갈다 깜짝 놀라는 농부 */
redraw('gwanggaeto',3,()=>SVn(`${ridge(150,'#B7CBD3',30,3)}<path d="M-6 180 Q200 170 406 182 L406 290 L-6 290Z" fill="#B99B6A"/>${[...Array(7)].map((_,k)=>`<path d="M-6 ${190+k*14} Q200 ${180+k*16} 406 ${190+k*14}" fill="none" stroke="#8A6A4A" stroke-width="2"/>`).join('')}
  ${[300,330,360].map(x=>`<path d="M${x} 160 V120" stroke="${K.wood}" stroke-width="3"/><path d="M${x} 120 h24 v14 h-24Z" fill="#5A3B2C"/>`).join('')}${dust(330,160,1)}
  ${ox(200,252,.85,'#D9A441')}${yoke(150,170,214)}${plow(110,260,.9)}
  ${farmer2(56,272,.9,{arms:{L:[-30,-30],R:[30,-46]},mood:'o',face:'right'})}
  ${T(200,70,'또 쳐들어온대!',22,K.red)}`,'url(#r5c)',sky('r5c','#E6C9A0','#F2E2C4')));

/* 광개토대왕 6: 넓은 들판, 곡식과 말 */
redraw('gwanggaeto',6,()=>SVn(`${rays(200,40,'#FFF2C4',11,320,.3)}${ridge(150,'#A9CDB4',30,2)}<path d="M-6 170 Q200 160 406 172 L406 290 L-6 290Z" fill="#BCD38F"/>
  ${crops(10,200,206,4)}
  <path d="M220 190 H406" stroke="${K.wood}" stroke-width="3"/>${[230,290,350].map(x=>`<path d="M${x} 190 v30" stroke="${K.wood}" stroke-width="4"/>`).join('')}
  ${horse(280,250,.55,{color:'#A9714A'})}${horse(360,240,.45,{color:'#F4EFE0'})}
  ${farmer2(110,282,.8,{arms:'holdFront',prop:H=>`<path d="M${H.L[0]-16} ${H.L[1]-2} q16 16 32 0 v-10 h-32Z" fill="#C9A15A" ${sw(1.4)}/>${[0,1,2].map(k=>`<circle cx="${H.L[0]-8+k*8}" cy="${H.L[1]-12}" r="4" fill="#E9C25A"/>`).join('')}`,mood:'joy',face:'right'})}
  ${hero(220,280,.7,{robe:'#D6CDB4',hair:'braid',arms:'waveR',mood:'joy',face:'right'})}`,'url(#r5d)',sky('r5d','#CFE7F2','#F6EAD0')));

/* 우륵 5: 진흥왕 앞에서 앉아 연주하는 우륵 */
redraw('ureuk',5,()=>SVn(`${palace()}
  ${jinheung(90,270,.9,{mood:'joy',face:'right',arms:'armsOpen'})}
  ${ur(270,236,.8,{stance:'sit',arms:{L:[-40,-6],R:[30,-4]},mood:'joy',face:'left',still:true})}${gayageum(270,270,1.15)}${[[230,248],[300,250]].map(([x,y])=>`<ellipse cx="${x}" cy="${y}" rx="6" ry="5" fill="${SK}" ${sw(1.6)}/>`).join('')}
  ${notes(200,130)}${notes(240,104)}${notes(330,120)}`,'#E6CFAA'));

/* 우륵 6: 신라 젊은이 셋에게 가르치기, 모두 앉아 연주 */
redraw('ureuk',6,()=>SVn(`${yard(176)}
  ${ur(320,206,.62,{stance:'sit',arms:'pointL',mood:'smile',face:'left'})}${gayageum(320,232,.8)}
  ${[[80,'#6C9BD2'],[170,'#E98FA0'],[250,'#E7C76A']].map(([x,c],k)=>`${hero(x,236,.58,{robe:c,hair:'braid',stance:'sit',arms:{L:[-40,-6],R:[30,-4]},mood:k===1?'o':'joy',face:'right',still:true})}${gayageum(x,262,.75)}`).join('')}
  ${notes(130,120)}${notes(220,100)}`,'#D9CCAE'));

/* 우륵 7: 탄금대 강가 바위 위에서 연주 */
redraw('ureuk',7,()=>SVn(`${ridge(140,'#C9A06A',40,2)}<path d="M-6 190 Q200 176 406 190 L406 290 L-6 290Z" fill="#5B9BC2"/>${[0,1,2,3].map(k=>`<path d="M${30+k*90} ${220+k%2*20} q12 -8 24 0 q12 8 24 0" fill="none" stroke="#FFFFFF" stroke-width="3"/>`).join('')}
  <path d="M150 290 L170 196 Q230 170 290 196 L320 290Z" fill="#9E9686" ${sw()}/><path d="M180 210 Q230 196 280 210" fill="none" stroke="#B9B2A2" stroke-width="4"/>
  ${ur(232,180,.7,{stance:'sit',arms:{L:[-40,-6],R:[30,-4]},mood:'joy',still:true})}${gayageum(232,204,.9)}
  ${notes(110,110)}${notes(150,80)}${notes(330,90)}${notes(370,120)}
  ${T(90,50,'탄금대',22,K.red)}`,'url(#r5e)',sky('r5e','#F2D6A8','#CFE7F2')));

/* 우륵 8: 지금 아이가 앉아서 가야금을 배워요 */
redraw('ureuk',8,()=>SVn(`${room()}
  ${kid(140,236,.86,{stance:'sit',arms:{L:[-40,-6],R:[30,-4]},mood:'joy',still:true})}${gayageum(140,268,1.05)}
  ${hero(310,268,.86,{body:'dress',hair:'bun',top:'#F2C14E',skirt:'#5B7FB8',arms:'pointL',mood:'smile',face:'left'})}
  ${notes(230,120)}${notes(270,96)}`,'#EFE3C8'));

/* 을지문덕 4: 지는 척 달아나는 고구려 군사, 신이 나서 쫓는 수나라 군사 */
redraw('euljimundeok',4,()=>SVn(`${ridge(160,'#A9CDB4',30,2)}<path d="M-6 200 Q200 190 406 200 L406 290 L-6 290Z" fill="#BCD38F"/>
  ${ul(90,270,.8,{stance:'run',arms:'run',mood:'joy',face:'left'})}${hero(150,262,.62,{body:'armor',robe:'#C9473B',hat:'helmet',stance:'run',arms:'run',mood:'joy',face:'left'})}
  ${[250,300,350].map((x,k)=>sui(x,262+k*4,.62,{stance:'run',arms:'pointL',mood:'joy',face:'left'})).join('')}${dust(390,270,1.2)}
  ${T(110,90,'(쉿, 일부러 지는 거야)',15,K.red)}${T(300,90,'이겼다! 쫓아라!',18,'#3F5A7A')}`,'url(#r5f)',sky('r5f','#CFE7F2','#F6EAD0')));

/* 김유신 4: 문희가 춘추의 옷고름을 달아 주는 장면, 모두 화면 안에 */
redraw('kimyusin',4,()=>SVn(`${room()}
  ${hwarang(70,272,.78,{mood:'smile',face:'right'})}
  ${chunchu(200,272,.86,{mood:'o',face:'right',still:true})}${munhui(290,268,.82,{arms:{L:[-50,-56],R:[-30,-60]},mood:'smile',face:'left',prop:H=>`<path d="M${H.L[0]} ${H.L[1]} q-14 6 -18 18" fill="none" stroke="#C9473B" stroke-width="3"/>`})}
  ${heart(250,120)}`,'#EADCC0'));

/* 김유신 8: 대릉원의 둥근 무덤들 사이를 걷는 가족 */
redraw('kimyusin',8,()=>SVn(`${ridge(150,'#B7CBD3',20,2)}
  ${mound(80,210,90,70)}${mound(300,206,120,96,'#7FA88E')}${mound(200,220,60,40,'#9FC48A')}${mound(380,224,50,34)}
  <path d="M-6 236 Q200 226 406 236 L406 290 L-6 290Z" fill="#BCD38F"/><path d="M-6 266 Q200 250 406 264" fill="none" stroke="#E6D3A6" stroke-width="18"/>
  ${kid(150,272,.8,{arms:'pointR',mood:'o',face:'right'})}${hero(220,272,.8,{body:'dress',hair:'braid',top:'#E98FA0',skirt:'#5B7FB8',stance:'walk',arms:'walk',mood:'joy',face:'right'})}
  ${T(200,40,'경주 대릉원',22,K.red)}`,'url(#r5g)',sky('r5g','#CFE7F2','#F6EAD0')));

/* 혜초 5: 밤마다 앉아서 보고 들은 것을 적는 혜초 */
redraw('hyecho',5,()=>SVn(`<rect x="-6" y="-6" width="412" height="292" fill="#3A3048"/>${[...Array(20)].map((_,k)=>`<circle cx="${(k*83)%400}" cy="${(k*47)%120+8}" r="1.4" fill="#FFF8DC"/>`).join('')}
  <path d="M-6 220 H406 V290 H-6Z" fill="#6A5240"/>${candle(300,236,1.1)}<circle cx="300" cy="200" r="150" fill="url(#candleG)" opacity=".5"/>
  ${hy(170,246,.95,{stance:'sit',arms:'writeR',prop:H=>PROP.brush(H),mood:'smile',face:'right'})}${desk(230,234,100)}<rect x="196" y="224" width="70" height="12" fill="#FFFDF6" ${sw(1)}/><path d="M204 230 h50" stroke="#8A8580" stroke-width="1.4"/>
  ${T(140,60,'코끼리는 코가 길다…',18,'#F6F0D6')}`,'#3A3048',candleDef));

/* 장보고 2: 바닷가에서 친구들과 활쏘기 내기 */
redraw('jangbogo',2,()=>SVn(`<path d="M-6 150 Q200 140 406 150 L406 200 L-6 200Z" fill="#5B9BC2"/><path d="M-6 196 Q200 186 406 198 L406 290 L-6 290Z" fill="#E6D3A6" ${sw()}/>
  <path d="M60 230 V180" stroke="#8A5A3C" stroke-width="4"/><circle cx="60" cy="180" r="14" fill="#FFFDF6" ${sw()}/><circle cx="60" cy="180" r="9" fill="#C9473B"/><circle cx="60" cy="180" r="3" fill="#FFFDF6"/><path d="M62 178 l-14 -6" stroke="#5A3B2C" stroke-width="2.4"/>
  ${bogoKid(250,276,1.0,{arms:'aimL',prop:H=>PROP.bow(H),mood:'smile',face:'left'})}
  ${hero(350,266,.62,{robe:'#E7D7B4',hair:'braid',arms:'cheer',mood:'joy',face:'left'})}${hero(390,262,.56,{robe:'#D9E6C8',hair:'braid',arms:'pointL',mood:'o',face:'left'})}
  ${T(150,70,'한가운데 명중!',20,K.red)}`,'url(#r5h)',sky('r5h','#CFE7F2','#F6EAD0')));

/* 장보고 4: 해적선이 신라 배를 덮치는 바다 */
redraw('jangbogo',4,()=>SVn(`<path d="M-6 140 Q200 130 406 140 L406 290 L-6 290Z" fill="#3F7EA8"/>${[...Array(10)].map((_,k)=>`<path d="M${(k*97)%420-20} ${170+(k%4)*24} q10 -8 20 0 q10 8 20 0" fill="none" stroke="#FFFFFF" stroke-width="3" opacity=".8"/>`).join('')}
  ${ship(110,210,.8,'#8A5A3C')}${hero(96,176,.32,{robe:'#EFE6D2',mood:'sad',arms:'cheer'})}${hero(130,178,.3,{body:'dress',hair:'bun',mood:'sad'})}
  ${ship(290,200,.9,'#3A322B')}<path d="M260 120 h40 v26 h-40Z" fill="#2B2B2B" ${sw(1.4)}/><circle cx="280" cy="133" r="6" fill="#FFFFFF"/>
  ${pirate(250,172,.36,{arms:'pointL',mood:'o',face:'left'})}${pirate(320,170,.34,{arms:'cheer',mood:'o',face:'left'})}
  ${bogo(370,290,.9,{mood:'sad',face:'left',arms:'handsDown'})}
  ${T(200,60,'해적이다!',24,K.red)}`,'url(#r5i)',sky('r5i','#B9C2CC','#E6E2D4')));

/* 장보고 6: 청해진 배를 보고 달아나는 해적선 */
redraw('jangbogo',6,()=>SVn(`<path d="M-6 140 Q200 130 406 140 L406 290 L-6 290Z" fill="#4F92BA"/>${[...Array(10)].map((_,k)=>`<path d="M${(k*97)%420-20} ${170+(k%4)*24} q10 -8 20 0 q10 8 20 0" fill="none" stroke="#FFFFFF" stroke-width="3" opacity=".8"/>`).join('')}
  ${ship(340,170,.45,'#3A322B')}${[0,1,2].map(k=>`<path d="M${290-k*14} ${160+k*8} h-20" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round"/>`).join('')}${pirate(340,150,.22,{mood:'o',face:'right'})}
  ${ship(130,230,1.1,'#8A5A3C')}<path d="M80 108 V60" stroke="${K.wood}" stroke-width="4"/><path d="M80 60 h40 v24 h-40Z" fill="#2C6E92"/>
  ${bogo(170,190,.5,{arms:'pointR',mood:'joy',face:'right'})}${hero(110,192,.42,{body:'armor',robe:'#2C6E92',hat:'helmet',arms:'cheer',mood:'joy'})}
  ${T(300,70,'도망가자!',22,'#3A322B')}`,'url(#r5j)',sky('r5j','#CFE7F2','#F6EAD0')));

/* 대조영 8: 따뜻한 방바닥에 배를 깔고 엎드린 아이 */
redraw('daejoyeong',8,()=>SVn(`${room()}<rect x="-6" y="236" width="412" height="50" fill="#D9A66A"/>${[0,1,2].map(k=>`<path d="M${90+k*90} 250 q-6 -10 0 -20 q6 -10 0 -20" fill="none" stroke="#E9A05A" stroke-width="2.6" opacity=".7"/>`).join('')}
  ${kid(190,240,.9,{stance:'lie',arms:'chin',mood:'joy'})}
  <g transform="translate(310 260)">${openBook}</g>
  ${T(200,70,'뜨끈뜨끈해!',22,K.red)}`,'#EFE3C8'));
})();
