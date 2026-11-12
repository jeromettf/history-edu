/* 다시 그린 핵심 장면 1: 고조선과 삼국 */
(()=>{
const hwanung=(x,y,s,o={})=>hero(x,y,s,{robe:'#FFFDF6',hair:'topknot',hat:'crown',belt:K.gold,...o});
const jmKid=(x,y,s,o={})=>hero(x,y,s,{robe:'#E7C76A',pattern:'dots',dotColor:'#7A3B2C',hair:'braid',belt:'#7A3B2C',...o});
const jumong=(x,y,s,o={})=>hero(x,y,s,{robe:'#E7C76A',pattern:'dots',dotColor:'#7A3B2C',hat:'feather',belt:'#7A3B2C',...o});
const onjo=(x,y,s,o={})=>hero(x,y,s,{robe:'#5E9C8A',pattern:'dots',dotColor:'#FFF8EC',hair:'braid',belt:K.gold,ribbon:K.gold,...o});
const onjoK=(x,y,s,o={})=>hero(x,y,s,{robe:'#5E9C8A',pattern:'dots',dotColor:K.gold,hat:'crown',belt:'#3A2E2A',...o});
const biryu=(x,y,s,o={})=>hero(x,y,s,{robe:'#B5874F',pattern:'dots',dotColor:'#FFF8EC',hair:'braid',belt:'#7A3B2C',ribbon:'#7A3B2C',...o});
const gking=(x,y,s,o={})=>hero(x,y,s,{robe:'#C9473B',pattern:'dots',dotColor:K.gold,hat:'crown',belt:'#3A2E2A',...o});
const soldier=(x,y,s,o={})=>hero(x,y,s,{body:'armor',robe:'#7C6FA0',hat:'helmet',...o});
const urKid=(x,y,s,o={})=>hero(x,y,s,{robe:'#E7D7B4',hair:'braid',belt:'#7A6AA8',ribbon:'#7A6AA8',...o});
const ur=(x,y,s,o={})=>hero(x,y,s,{robe:'#EDE3CC',hat:'band',bandColor:'#7A6AA8',belt:'#7A6AA8',beard:'#8A8580',...o});
const ul=(x,y,s,o={})=>hero(x,y,s,{body:'armor',robe:'#C9473B',hat:'feather',beard:HAIR,...o});
const princess=(x,y,s,o={})=>hero(x,y,s,{body:'dress',top:'#F6E2A6',skirt:'#E98FA0',hair:'braid',ribbon:K.gold,...o});
const yusin=(x,y,s,o={})=>hero(x,y,s,{robe:'#6C9BD2',hair:'braid',belt:'#C9473B',ribbon:'#EE98A6',...o});
const monk=(x,y,s,o={})=>hero(x,y,s,{hair:'bald',robe:'#A7A49B',belt:false,collar:'#EDE9E0',deco:kasaL,...o});
const dj=(x,y,s,o={})=>hero(x,y,s,{robe:'#5A4E8A',pattern:'dots',dotColor:K.gold,hat:'feather',belt:K.gold,beard:HAIR,...o});
const djK=(x,y,s,o={})=>hero(x,y,s,{robe:'#5A4E8A',pattern:'dots',dotColor:K.gold,hat:'crown',belt:K.gold,beard:HAIR,...o});
const walker=(x,y,s,o={})=>hero(x,y,s,{robe:'#D6CDB4',skin:'#EDBF95',hat:'band',bandColor:'#8A6A9E',...o});
const target=(x,y,r)=>`<circle cx="${x}" cy="${y}" r="${r}" fill="#FFFDF6" ${sw()}/><circle cx="${x}" cy="${y}" r="${r*.66}" fill="#C9473B"/><circle cx="${x}" cy="${y}" r="${r*.33}" fill="#FFFDF6"/><circle cx="${x}" cy="${y}" r="${r*.12}" fill="#C9473B"/>`;

/* 단군 1: 구름 위에서 내려다보는 환웅의 어깨 너머 */
redraw('dangun',1,()=>SVn(`${rays(200,0,'#FFF2C4',11,320,.3)}
  <g opacity=".95"><path d="M-6 250 Q60 210 120 232 Q200 200 280 232 Q340 210 406 236 L406 290 L-6 290Z" fill="#FFFFFF" stroke="#E6DCCB" stroke-width="2"/></g>
  <g transform="translate(120 150) scale(.5)">${ridge(140,'#A9D0B0',40,2)}${townscape(120,6)}<path d="M-6 140 Q200 120 406 140" fill="none" stroke="#6FA8C8" stroke-width="10"/></g>
  <circle cx="220" cy="190" r="70" fill="#FFFFFF" opacity=".35"/>${cloud(80,200,1.6)}${cloud(330,190,1.4)}
  ${backView(90,370,2.0,{robe:'#FFFDF6',hat:'bun'})}<path d="M60 150 l-18 -26 l12 4 l6 -12 l6 12 l12 -4Z" fill="${K.gold}" ${sw(1.4)} transform="translate(30 0)"/>
  ${T(260,70,'저 아래 사람들을…',18,K.ink)}`,'url(#rd1)',sky('rd1','#F9E6B6','#CFE6F3')));

/* 단군 6: 동굴을 뛰쳐나가는 호랑이, 안에 남은 곰 */
redraw('dangun',6,()=>SVn(`${ridge(170,'#94BFA6',40,3)}<path d="M-6 200 Q200 186 406 200 L406 290 L-6 290Z" fill="#9FC48A" ${sw()}/>
  <path d="M-6 290 L-6 40 Q60 10 140 30 Q200 60 190 150 Q180 220 230 290Z" fill="#7C7468" ${sw()}/><path d="M20 290 L30 120 Q70 70 120 90 Q160 120 150 200 L170 290Z" fill="#2E2A26"/>
  ${bear(80,262,.62,{mood:'smile'})}${garlic(120,270)}
  <g transform="rotate(-12 300 230)">${tiger(300,262,1.05,{mood:'o'})}</g>
  ${[0,1,2].map(k=>`<path d="M${200-k*14} ${190+k*20} h-40" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" opacity=".8"/>`).join('')}
  ${T(310,70,'더는 못 참겠어!',22,K.red)}`,'url(#rd2)',sky('rd2','#D3E9F1','#EEF2DC')));

/* 주몽 4: 어린 주몽의 어깨 너머로 보이는 먼 과녁 */
redraw('jumong',4,()=>SVn(`${ridge(170,'#B7CBD3',30,2)}${hills('#A9CDB4','#BCD38F',190,214)}
  <path d="M330 214 V150" stroke="#8A5A3C" stroke-width="6"/>${target(330,150,16)}
  <path d="M120 150 L318 150" stroke="#5A3B2C" stroke-width="2" stroke-dasharray="6 6"/>
  ${backView(90,380,2.1,{robe:'#E7C76A',pose:'up'})}${g(150,140,1.6,`<path d="M0 -40 Q30 0 0 40" fill="none" stroke="${K.wood}" stroke-width="6" stroke-linecap="round"/><path d="M0 -40 L-14 0 L0 40" fill="none" stroke="#F4EFE0" stroke-width="1.6"/><path d="M-14 0 H60" ${sw(3)}/>`)}
  ${T(300,96,'백 번 쏘면 백 번!',18,K.red)}`,'url(#rd3)',sky('rd3','#CFE7F2','#F6EBD0')));

/* 주몽 6: 강가 절벽에 멈춘 말, 뒤에서 쫓아오는 흙먼지 */
redraw('jumong',6,()=>SVn(`<path d="M-6 120 Q100 100 200 116 L406 110 L406 290 L-6 290Z" fill="#5B9BC2"/>${[40,120,200,300,370].map((x,k)=>`<path d="M${x-24} ${150+(k%2)*40} q12 -10 24 0 q12 10 24 0" fill="none" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round"/>`).join('')}
  <path d="M220 290 L250 170 Q300 140 406 150 L406 290Z" fill="#C9B48A" ${sw()}/><path d="M250 170 Q300 160 406 170" fill="none" stroke="#A88A5A" stroke-width="3"/>
  ${dust(370,150,1.4)}${dust(400,160,1.2)}${[360,384].map(x=>hero(x,150,.3,{body:'armor',robe:'#5A6E8A',hat:'helmet',mood:'o'})).join('')}
  ${horse(290,250,1.1,{color:'#F4EFE0',rider:rider(jumong(0,0,1,{pose:'up',mood:'o',face:'left'}))})}
  ${T(120,70,'길을 열어 다오!',24,K.red)}`,'url(#rd4)',sky('rd4','#F2C9A0','#CFE7F2')));

/* 온조 3: 하늘에서 내려다본 갈림길 */
redraw('onjo',3,()=>SVn(`<rect x="-6" y="-6" width="412" height="292" fill="#A9D0B0"/>
  ${[...Array(18)].map((_,k)=>tree((k*67)%400,(k*41)%270+20,.4)).join('')}
  <path d="M200 290 Q200 200 200 170 Q140 120 30 -6 M200 170 Q280 110 380 -6" fill="none" stroke="#E6D3A6" stroke-width="26" stroke-linecap="round"/>
  <path d="M40 -6 Q10 30 -6 60 L-6 -6Z" fill="#5B9BC2"/><path d="M360 -6 Q390 40 406 70 L406 -6Z" fill="#6FA8C8"/>
  ${[0,1,2].map(k=>backView(120-k*14,110+k*16,.32,{robe:'#B5874F'})).join('')}${[0,1,2].map(k=>backView(280+k*14,110+k*16,.32,{robe:'#5E9C8A'})).join('')}
  ${T(70,40,'바다',16,'#FFFDF6')}${T(340,40,'큰 강',16,'#FFFDF6')}`,'#A9D0B0'));

/* 온조 7: 고생하던 사람들을 반갑게 맞는 두 사람 */
redraw('onjo',7,()=>SVn(`${hills('#A9CDB4','#BCD38F',176,200)}
  <path d="M-6 200 Q100 190 200 204 Q300 216 406 200 L406 226 Q300 240 200 230 Q100 218 -6 226Z" fill="#6FA8C8" ${sw(1.2)}/>
  ${[300,330,360].map((x,k)=>walker(x,250-(k%2)*8,.46,{robe:'#B5874F',mood:'smile',face:'left'})).join('')}
  ${onjoK(140,330,1.4,{pose:'up',mood:'joy',face:'right',still:true})}${hero(250,286,.95,{robe:'#B5874F',hair:'braid',mood:'joy',face:'left',still:true})}
  ${heart(200,96)}`,'url(#rd5)',sky('rd5','#CFE7F2','#F6EAD0')));

/* 광개토대왕 1: 들판을 가로지르는 말, 흙먼지 */
redraw('gwanggaeto',1,()=>SVn(`${ridge(160,'#B7CBD3',40,1)}<path d="M-6 180 Q200 160 406 186 L406 290 L-6 290Z" fill="#C9C08E" ${sw()}/>
  ${[0,1,2,3,4,5].map(k=>`<path d="M${-10+k*80} 290 Q${30+k*80} 230 ${80+k*80} 200" fill="none" stroke="#B9AE78" stroke-width="2"/>`).join('')}
  ${dust(110,250,1.6)}${dust(70,256,1.2)}
  <g transform="rotate(-6 230 240)">${horse(230,262,1.25,{color:'#A9714A',rider:rider(hero(0,0,1,{robe:'#4F7DBA',pattern:'dots',dotColor:'#FFF8EC',hair:'braid',belt:K.gold,pose:'up',mood:'joy',face:'right'}))})}</g>
  ${[300,340,380].map(x=>`<path d="M${x} 80 q6 -6 12 0 q6 -6 12 0" fill="none" ${sw(1.6)}/>`).join('')}`,'url(#rd6)',sky('rd6','#F2D6A8','#FBEBD0')));

/* 광개토대왕 4: 올려다보는 구도, 앞장선 왕과 깃발 */
redraw('gwanggaeto',4,()=>SVn(`${rays(200,40,'#FFF2C4',9,300,.25)}
  <path d="M-6 230 Q200 200 406 230 L406 290 L-6 290Z" fill="#B9AE78" ${sw()}/>
  ${flagPole(70,250,'#C9473B','',200,70)}${flagPole(330,250,K.gold,'',190,60)}
  ${[60,110,290,340].map((x,k)=>horse(x,240-(k%2)*6,.42,{color:'#8A5A3C',rider:rider(soldier(0,0,1,{mood:'smile'}))})).join('')}
  ${horse(200,300,1.6,{color:'#F4EFE0',rider:rider(gking(0,0,1,{pose:'up',mood:'joy',face:'front'}))})}`,'url(#rd7)',sky('rd7','#BFE0F0','#F6EAD0')));

/* 우륵 1: 폭포 앞에서 새소리를 흉내 내는 아이 */
redraw('ureuk',1,()=>SVn(`${ridge(120,'#7FA88E',50,2)}<path d="M150 110 L250 110 L240 230 L160 230Z" fill="#DDEEF6" ${sw()}/>${[0,1,2,3,4].map(k=>`<path d="M${168+k*16} 112 V226" stroke="#FFFFFF" stroke-width="3" opacity=".8"/>`).join('')}
  <path d="M-6 220 Q200 210 406 222 L406 290 L-6 290Z" fill="#94C2A0" ${sw()}/><ellipse cx="200" cy="236" rx="90" ry="14" fill="#6FA8C8" ${sw(1.2)}/>
  ${tree(40,224,1,'round')}${tree(370,226,1.1,'pine')}
  ${urKid(90,280,1.05,{pose:'up',mood:'joy',face:'right'})}
  ${[[260,80],[300,60],[330,100]].map(([x,y])=>`<path d="M${x-12} ${y} q6 -8 12 0 q6 -8 12 0" fill="none" ${sw(2)}/>`).join('')}
  ${T(150,60,'♪ 짹짹 쪼르르',18,K.red)}`,'url(#rd8)',sky('rd8','#F2D6A8','#FBEBD0')));

/* 우륵 4: 가야금을 메고 산을 넘는 작은 뒷모습 */
redraw('ureuk',4,()=>SVn(`${ridge(110,'#C9C08E',60,1)}${ridge(170,'#B39A55',50,3)}${ridge(220,'#8E7A44',30,5)}
  <path d="M160 290 Q190 250 220 230 Q260 200 300 180" fill="none" stroke="#E6D3A6" stroke-width="10" stroke-linecap="round"/>
  ${backView(232,228,.5,{robe:'#EDE3CC',hat:'bun'})}${g(232,196,.26,`<path d="M-90 0 Q-96 -14 -84 -20 L84 -20 Q96 -14 90 0Z" fill="#B5874F" ${sw(3)}/>`)}
  ${[30,80,340,380].map(x=>`<ellipse cx="${x}" cy="${260+(x%3)*6}" rx="6" ry="3" fill="#D9603A" transform="rotate(${x} ${x} 260)"/>`).join('')}
  ${T(110,60,'가야의 노래를 지켜야 해',18,K.red)}`,'url(#rd9)',sky('rd9','#C9C2B4','#F2D6A8')));

/* 을지문덕 1: 언덕 위 장군의 뒷모습 너머로 끝없는 적의 막사 */
redraw('euljimundeok',1,()=>SVn(`${ridge(150,'#B7CBD3',30,4)}<path d="M-6 160 Q200 150 406 160 L406 290 L-6 290Z" fill="#B8C4C0"/>
  ${[...Array(28)].map((_,k)=>{const x=(k%14)*30+(Math.floor(k/14)%2)*15,y=170+Math.floor(k/14)*22;return `<path d="M${x-10} ${y} L${x} ${y-14} L${x+10} ${y}Z" fill="#8E9AA6" ${sw(1)}/>`}).join('')}
  ${[...Array(20)].map((_,k)=>`<circle cx="${(k*21)%400}" cy="${226+(k%3)*12}" r="3" fill="#5A6E8A"/>`).join('')}
  <path d="M-6 290 L-6 220 Q80 196 170 230 L190 290Z" fill="#7FA88E" ${sw()}/>
  ${backView(90,330,1.7,{robe:'#C9473B',hat:'bun'})}${g(90,330,1.7,`<path d="M-30 -104 Q-32 -96 -26 -100Z" fill="none"/><path d="M-32 -110 L32 -110 L28 -122 L-28 -122Z" fill="#C9473B" ${sw(1.4)}/><path d="M-10 -122 Q-20 -138 -24 -148 Q-12 -142 -4 -124Z M10 -122 Q20 -138 24 -148 Q12 -142 4 -124Z" fill="#F4EFE0" ${sw(1.2)}/>`)}
  ${T(290,80,'백만 대군…',22,K.red)}`,'url(#rd10)',sky('rd10','#B9C2CC','#E6E2D4')));

/* 을지문덕 6: 살수, 거센 물살 */
redraw('euljimundeok',6,()=>SVn(`${ridge(140,'#94BFA6',40,2)}
  <path d="M-6 150 Q200 130 406 150 L406 290 L-6 290Z" fill="#4F8DB5"/>
  ${[...Array(9)].map((_,k)=>`<path d="M${-20+k*50} ${180+(k%3)*30} q14 -20 28 0 q14 20 28 0" fill="none" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round"/>`).join('')}
  ${[260,300,340].map(x=>hero(x,200,.34,{body:'armor',robe:'#5A6E8A',hat:'helmet',mood:'o',pose:'up'})).join('')}
  <path d="M-6 290 L-6 220 Q60 200 130 236 L150 290Z" fill="#8FB88A" ${sw()}/>
  ${ul(70,300,1.2,{pose:'up',mood:'joy',face:'right'})}
  ${T(260,70,'살수 대첩!',26,K.red)}`,'url(#rd11)',sky('rd11','#CFE7F2','#F6EAD0')));

/* 선덕여왕 1: 모란 앞의 덕만 공주, 가까이 */
redraw('seondeok',1,()=>SVn(`${hills('#A9CDB4','#BCD38F',180,206)}
  ${peony(330,150,3)}${peony(60,190,2.2,'#F2A9C0')}
  ${princess(180,370,2.0,{pose:'hold',mood:'joy',face:'right',still:true})}
  ${g(290,90,1.6,`<path d="M0 0 Q-20 -22 -24 -4 Q-20 8 0 0Z M0 0 Q20 -22 24 -4 Q20 8 0 0Z" fill="#F2A24B" ${sw(1.4)}/><path d="M0 -8 V8" ${sw(2.4)}/>`)}`,'url(#rd12)',sky('rd12','#CFE6F2','#FCE3E6')));

/* 선덕여왕 4: 꽃 앞에 코를 대 보는 사람들 */
redraw('seondeok',4,()=>SVn(`${palace(false)}
  ${peony(200,240,4.2)}
  ${hero(80,300,1.2,{robe:'#5E9C8A',hat:'band',bandColor:K.gold,mood:'o',face:'right',still:true})}${hero(330,300,1.2,{body:'dress',hair:'bun',mood:'o',face:'left',still:true})}
  ${T(200,70,'킁킁… 정말 향기가 없네!',20,K.red)}`,'#E6CFAA'));

/* 김유신 2: 동굴 속 기도, 촛불 */
redraw('kimyusin',2,()=>SVn(`<rect x="-6" y="-6" width="412" height="292" fill="#2E2A26"/>
  <path d="M-6 -6 H406 V60 Q300 90 200 76 Q100 90 -6 60Z" fill="#3A322B"/><path d="M-6 236 Q200 220 406 236 L406 290 L-6 290Z" fill="#4A3F36"/>
  ${candle(300,250,1.4)}<circle cx="300" cy="200" r="180" fill="url(#candleG)" opacity=".5"/>
  ${yusin(170,360,1.85,{pose:'hold',mood:'sleep',face:'right',still:true})}
  ${T(260,80,'세 나라가 다투지 않게…',18,'#F6F0D6')}`,'#2E2A26',candleDef));

/* 김유신 7: 언덕 위 깃발, 하나 된 사람들 */
redraw('kimyusin',7,()=>SVn(`${rays(200,40,'#FFF2C4',11,320,.3)}${ridge(170,'#94BFA6',40,2)}
  <path d="M-6 220 Q200 150 406 220 L406 290 L-6 290Z" fill="#C7D88F" ${sw()}/>
  ${flagPole(200,170,'#5E9C8A','하나',130,80)}
  ${[...Array(9)].map((_,k)=>backView(30+k*44,262+(k%2)*10,.5,{robe:['#4F7DBA','#C9A15A','#5E9C8A'][k%3],hat:['bun','gat',''][k%3],pose:k%2?'up':'down'})).join('')}`,'url(#rd13)',sky('rd13','#FCE9C2','#CFE7F2')));

/* 원효 3: 폭우 속을 달려 무덤으로 피하는 두 스님 */
redraw('wonhyo',3,()=>SVn(`<path d="M120 -6 L100 60 L130 56 L90 140" fill="none" stroke="#FFF6C4" stroke-width="5" stroke-linejoin="round"/>
  ${ridge(160,'#3E4A5A',40,3)}<path d="M-6 200 Q200 186 406 200 L406 290 L-6 290Z" fill="#4E5A4A" ${sw()}/>
  ${cave(300,212,.9)}
  ${monk(140,256,.62,{pose:'up',mood:'o',face:'right'})}${hero(200,250,.58,{hair:'bald',robe:'#8E9AA6',belt:false,collar:'#EDE9E0',pose:'up',mood:'o',face:'right'})}
  ${rainFX(60)}`,'url(#rd14)',sky('rd14','#1F2748','#3E4A5A')));

/* 원효 6: 해 뜨는 아침, 깨달음 */
redraw('wonhyo',6,()=>SVn(`${rays(330,200,'#FFE9A6',13,420,.4)}<circle cx="330" cy="200" r="40" fill="#F7B640" ${sw()}/>
  ${ridge(210,'#C9A06A',30,2)}<path d="M-6 236 Q200 226 406 236 L406 290 L-6 290Z" fill="#D8CF8A" ${sw()}/>
  ${monk(130,370,2.1,{pose:'hold',mood:'smile',face:'right',still:true})}
  ${T(300,80,'마음먹기에 달렸구나!',20,K.red)}`,'url(#rd15)',sky('rd15','#F6C08A','#FCE9C2')));

/* 대조영 3: 눈 덮인 산을 굽이굽이 넘는 긴 행렬 */
redraw('daejoyeong',3,()=>SVn(`${snowFX(50)}${ridge(110,'#C9D6DE',60,2)}${ridge(170,'#DCE5EA',40,4)}
  <path d="M-6 290 Q60 250 140 240 Q260 226 300 190 Q330 166 400 150" fill="none" stroke="#FFFFFF" stroke-width="18" stroke-linecap="round"/>
  ${[...Array(12)].map((_,k)=>{const t=k/11,x=20+t*370,y=268-t*110;return walker(x,y,.24+.2*(1-t),{robe:['#D6CDB4','#5A4E8A','#E9DFC8'][k%3],mood:'smile',face:'right'})}).join('')}
  ${dj(60,290,.9,{pose:'up',mood:'smile',face:'right'})}`,'url(#rd16)',sky('rd16','#9FB3C8','#EEF2F4')));

/* 대조영 5: 동모산 꼭대기, 올려다보는 건국 */
redraw('daejoyeong',5,()=>SVn(`${rays(200,30,'#FFF2C4',11,320,.3)}
  <path d="M-6 290 L120 120 Q200 80 280 120 L406 290Z" fill="#A9B8C0" ${sw()}/><path d="M150 108 Q200 84 250 108" fill="none" stroke="#FFFFFF" stroke-width="6"/>
  ${flagPole(240,120,'#5A4E8A','발해',100,64)}
  ${djK(200,128,.72,{pose:'up',mood:'joy',face:'front'})}
  ${[...Array(6)].map((_,k)=>backView(40+k*64,300,1.0,{robe:['#D6CDB4','#5A4E8A'][k%2],hat:['bun',''][k%2],pose:'up'})).join('')}`,'url(#rd17)',sky('rd17','#C9D8E6','#F2F5F8')));
})();
