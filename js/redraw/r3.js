/* 다시 그린 핵심 장면 3: 조선 */
(()=>{
const girl=(x,y,s,o={})=>hero(x,y,s,{body:'dress',top:'#FFF3C4',skirt:'#E98FA0',hair:'braid',ribbon:'#C9473B',...o});
const saim=(x,y,s,o={})=>hero(x,y,s,{body:'dress',top:'#F6E2A6',skirt:'#5E9C8A',hair:'bun',...o});
const yiKid=(x,y,s,o={})=>hero(x,y,s,{robe:'#D9E6C8',hair:'braid',belt:'#5E9C8A',ribbon:'#5E9C8A',...o});
const heojun=(x,y,s,o={})=>hero(x,y,s,{robe:'#EDE9E0',hat:'gat',belt:'#5E9C8A',collar:'#5E9C8A',...o});
const sbKid=(x,y,s,o={})=>hero(x,y,s,{robe:'#E7D7B4',hair:'braid',belt:'#8C7350',ribbon:'#5E7FA8',...o});
const mom=(x,y,s,o={})=>hero(x,y,s,{body:'dress',hair:'bun',top:'#FFFDF6',skirt:'#8C7A6A',...o});
const general=(x,y,s,o={})=>hero(x,y,s,{body:'armor',robe:'#B5473A',hat:'helmet',...o});
const chKid=(x,y,s,o={})=>hero(x,y,s,{body:'dress',top:'#FFF3C4',skirt:'#7A6AA8',hair:'braid',ribbon:'#C9473B',...o});
const nan=(x,y,s,o={})=>hero(x,y,s,{body:'dress',top:'#F6E2A6',skirt:'#7A6AA8',hair:'bun',...o});
const brother=(x,y,s,o={})=>hero(x,y,s,{robe:'#5E7FA8',hair:'braid',belt:K.gold,ribbon:'#5E7FA8',...o});
const mdKid=(x,y,s,o={})=>hero(x,y,s,{body:'dress',top:'#FFFDF6',skirt:'#7FB3C8',hair:'braid',ribbon:'#C9473B',...o});
const md=(x,y,s,o={})=>hero(x,y,s,{body:'dress',top:'#F6E2A6',skirt:'#2C6E92',hair:'bun',...o});
const hdKid=(x,y,s,o={})=>hero(x,y,s,{robe:'#D9E6C8',hair:'braid',belt:'#5E9C8A',ribbon:'#5E9C8A',...o});
const hongdo=(x,y,s,o={})=>hero(x,y,s,{robe:'#D9E6C8',hat:'gat',belt:'#5E9C8A',collar:'#5E9C8A',...o});
const jy=(x,y,s,o={})=>hero(x,y,s,{robe:'#4C8C7A',hat:'gat',belt:K.gold,collar:'#FFF8EC',...o});
const worker=(x,y,s,o={})=>hero(x,y,s,{robe:'#D6CDB4',skin:'#EDBF95',hat:'band',bandColor:'#FFFDF6',...o});
const jh=(x,y,s,o={})=>hero(x,y,s,{robe:'#EDE9E0',hat:'gat',belt:'#3F6FA8',collar:'#3F6FA8',beard:HAIR,...o});
const sangjeok=(x,y,s,o={})=>hero(x,y,s,{robe:'#7A8C6E',hat:'gat',belt:K.gold,...o});
const moon=(x,y,r,c='#FFF4C8')=>`<circle cx="${x}" cy="${y}" r="${r*2.2}" fill="${c}" opacity=".18"/><circle cx="${x}" cy="${y}" r="${r}" fill="${c}" ${sw(1.6)}/>`;
const stars=(n,h=150)=>[...Array(n)].map((_,k)=>`<circle cx="${(k*83)%400}" cy="${(k*47)%h+8}" r="${1+(k%3)*.6}" fill="#FFF8DC" opacity=".8"/>`).join('');
const fly=(x,y,s,c='#F2A24B',r=0)=>g(x,y,s,`<g transform="rotate(${r})"><path d="M0 0 Q-22 -26 -28 -6 Q-24 8 0 0Z M0 0 Q22 -26 28 -6 Q24 8 0 0Z" fill="${c}" ${sw(1.4)}/><path d="M0 0 Q-14 14 -16 22 Q-4 18 0 0Z M0 0 Q14 14 16 22 Q4 18 0 0Z" fill="${c}" opacity=".85" ${sw(1.2)}/><path d="M0 -10 V14" ${sw(3)}/><path d="M0 -10 q-4 -8 -8 -10 M0 -10 q4 -8 8 -10" fill="none" ${sw(1.2)}/></g>`);
const hen=(x,y,s,c='#F4EFE0')=>g(x,y,s,`<ellipse cx="0" cy="2" rx="30" ry="5" fill="#2B1E16" opacity=".18"/><path d="M-30 -30 Q-40 -60 -20 -66 Q-4 -40 20 -40 Q40 -44 36 -20 Q30 0 0 0 Q-28 0 -30 -30Z" fill="${c}" ${sw()}/><path d="M-30 -30 Q-46 -36 -50 -54 Q-36 -50 -28 -42" fill="${c}" ${sw()}/>
 <circle cx="26" cy="-52" r="14" fill="${c}" ${sw()}/><path d="M20 -66 q4 -8 8 0 q4 -8 8 2" fill="#C9473B" ${sw(1.2)}/><path d="M38 -52 l10 3 l-10 4Z" fill="#F2A24B" ${sw(1.2)}/><path d="M34 -42 q2 6 -2 8" fill="#C9473B"/><circle cx="29" cy="-54" r="2.4" fill="${L}"/>
 <path d="M-6 0 V12 M8 0 V12" ${sw(2.4)}/><path d="M-10 -24 Q0 -14 12 -22" fill="none" ${sw(1.4)}/>`);
const bamboo=(x,h,c='#2E2A26')=>`<path d="M${x} 290 V${290-h}" stroke="${c}" stroke-width="9"/>${[...Array(Math.floor(h/40))].map((_,k)=>`<path d="M${x-5} ${290-k*40-30} h10" stroke="#5A5560" stroke-width="3"/>`).join('')}${[...Array(4)].map((_,k)=>`<path d="M${x} ${290-h+20+k*30} q${k%2?24:-24} -6 ${k%2?40:-40} 6 q${k%2?-20:20} 2 ${k%2?-40:40} -6Z" fill="#6FA86E" ${sw(1)}/>`).join('')}`;
const stoneWall=(y,c='#4A4A52')=>`<path d="M-6 ${y} H406 V${y+30} H-6Z" fill="${c}"/>${[...Array(22)].map((_,k)=>`<ellipse cx="${(k*19)%410}" cy="${y+8+(k%3)*9}" rx="11" ry="7" fill="#5E5E68" ${sw(1)}/>`).join('')}`;
const lotus=(x,y,s)=>g(x,y,s,`<ellipse cx="0" cy="6" rx="34" ry="8" fill="#5E9C5A" ${sw(1.4)}/>${[-2,-1,0,1,2].map(k=>`<path d="M0 0 Q${k*12-10} -24 ${k*10} -36 Q${k*12+10} -24 0 0Z" fill="#F2A9C0" ${sw(1.2)}/>`).join('')}`);

/* 신사임당 1: 나비를 아주 가까이 들여다보는 아이 */
redraw('saimdang',1,()=>SVn(`<path d="M-6 200 Q200 186 406 200 L406 290 L-6 290Z" fill="#9FC48A"/>
  ${peony(330,250,3.4,'#F2A9C0')}${[0,1,2,3,4].map(k=>`<path d="M${200+k*40} 290 q-6 -60 8 -100" fill="none" stroke="#5E9C5A" stroke-width="4"/>`).join('')}
  ${fly(300,120,2.4,'#F2A24B',-12)}
  ${girl(110,370,2.0,{mood:'o',face:'right',still:true})}
  ${T(300,40,'날개에 점이 있네!',18,K.red)}`,'url(#r3a)',sky('r3a','#D9EEF4','#FCEFD6')));

/* 신사임당 4: 그림 속 벌레를 쪼는 닭, 낮은 시선 */
redraw('saimdang',4,()=>SVn(`${yard(150)}
  <path d="M40 270 L60 206 L340 206 L360 270Z" fill="#FFFDF6" ${sw()}/><path d="M80 260 q20 -40 40 -10 M240 250 q10 -30 30 -20" fill="none" stroke="#5E9C5A" stroke-width="3"/>${[[150,236],[200,226],[280,240]].map(([x,y])=>`<ellipse cx="${x}" cy="${y}" rx="8" ry="4" fill="#3A322B"/>`).join('')}
  ${hen(220,240,1.4)}
  ${girl(60,206,.6,{mood:'o',pose:'up',face:'right'})}
  ${T(300,70,'콕콕!',28,K.red)}`,'#D9CCAE'));

/* 이이 1: 까만 대나무 숲 속 오죽헌 */
redraw('yii',1,()=>SVn(`<path d="M-6 230 Q200 220 406 230 L406 290 L-6 290Z" fill="#9FC48A"/>
  ${g(200,232,1.1,`<rect x="-90" y="-60" width="180" height="60" fill="#E6D3A6" ${sw()}/><path d="M-120 -56 Q-60 -90 0 -96 Q60 -90 120 -56 L104 -66 Q50 -108 0 -112 Q-50 -108 -104 -66Z" fill="#4A4A52" ${sw()}/>${[-60,-20,20,60].map(x=>`<rect x="${x-14}" y="-48" width="28" height="36" fill="#FFF8EC" ${sw(1.2)}/>`).join('')}`)}
  ${[10,40,70,330,360,390].map((x,k)=>bamboo(x,220+k%3*30)).join('')}${[110,290].map(x=>bamboo(x,170,'#3A322B')).join('')}
  ${hero(200,262,.5,{body:'dress',top:'#F6E2A6',skirt:'#5E9C8A',hair:'bun',mood:'joy',pose:'hold',item:`<ellipse cx="0" cy="-30" rx="14" ry="10" fill="#FFF3C4" ${sw(1.2)}/>`})}
  ${T(200,40,'오죽헌의 까만 대나무',18,K.red)}`,'url(#r3b)',sky('r3b','#D9EEF4','#F2EAD0')));

/* 이이 2: 어머니와 아이, 책상 앞 가까이 */
redraw('yii',2,()=>SVn(`${room()}
  ${saim(300,370,2.0,{mood:'smile',face:'left',pose:'hold',still:true})}
  ${yiKid(110,360,1.6,{mood:'o',face:'right',pose:'up',still:true})}
  <rect x="80" y="250" width="240" height="40" fill="#8A5A3C" ${sw()}/><g transform="translate(200 268) scale(1.2)">${openBook}</g>
  ${T(200,60,'어머니, 이건 왜 그래요?',20,K.red)}`,'#EADCC0'));

/* 허준 1: 길가에 쓰러진 사람을 돌보는 허준 */
redraw('heojun',1,()=>SVn(`${ridge(160,'#A9CDB4',30,2)}<path d="M-6 200 Q200 190 406 200 L406 290 L-6 290Z" fill="#C9C08E"/>
  <path d="M-6 260 Q200 230 406 250" fill="none" stroke="#E6D3A6" stroke-width="40"/>
  ${tree(60,210,1.2,'round')}
  <g transform="rotate(90 250 262)">${hero(250,262,.8,{robe:'#D6CDB4',skin:'#EDBF95',mood:'sleep'})}</g>
  ${heojun(170,290,1.2,{mood:'o',face:'right',pose:'hold',item:herbBasket})}
  ${T(300,80,'괜찮으시오?',22,K.red)}`,'url(#r3c)',sky('r3c','#CFE7F2','#F6EAD0')));

/* 허준 6: 비 오는 피난길 초가, 등잔 아래 쓰는 허준 */
redraw('heojun',6,()=>SVn(`<rect x="-6" y="-6" width="412" height="292" fill="#2E3446"/>${rainFX(50,'#7F9AB8')}
  ${g(200,270,2.2,`<path d="M-90 -70 Q0 -110 90 -70 L80 -60 Q0 -96 -80 -60Z" fill="#C9A878" ${sw()}/><rect x="-74" y="-62" width="148" height="62" fill="#6A5240" ${sw()}/>`)}
  <rect x="60" y="150" width="280" height="130" fill="#4A3A2E"/>${candle(110,250,1.1)}<circle cx="110" cy="210" r="150" fill="url(#candleG)" opacity=".5"/>
  ${heojun(220,300,1.25,{mood:'smile',face:'left',pose:'hold',item:openBook,beard:'#8A8580',still:true})}
  ${[0,1,2,3].map(k=>`<rect x="${290}" y="${266-k*10}" width="40" height="9" fill="#FFFDF6" ${sw(1)}/>`).join('')}`,'#2E3446',candleDef));

/* 한석봉 4: 달밤에 산길을 달려 내려오는 석봉이 */
redraw('seokbong',4,()=>SVn(`${stars(30,120)}${moon(320,64,26)}
  ${ridge(130,'#3E4A6A',50,2)}<path d="M-6 290 L-6 170 Q80 150 160 190 Q240 230 406 220 L406 290Z" fill="#4A5A70"/>
  <path d="M60 170 Q150 200 200 240 Q240 270 300 290" fill="none" stroke="#8E9AA6" stroke-width="14" stroke-linecap="round"/>
  ${tree(40,190,1,'pine')}${tree(360,240,1.1,'pine')}
  ${hut(330,250)}<rect x="322" y="228" width="14" height="10" fill="#FFD27A"/>
  <g transform="rotate(10 190 240)">${sbKid(190,250,.9,{mood:'joy',pose:'up',face:'right'})}</g>
  ${T(110,60,'어머니 보고 싶어요!',18,'#F6F0D6')}`,'url(#r3d)',sky('r3d','#141C3A','#3A4A78')));

/* 한석봉 5: 불 꺼진 방, 달빛 속 두 사람 */
redraw('seokbong',5,()=>SVn(`<rect x="-6" y="-6" width="412" height="292" fill="#1E2236"/><path d="M160 -6 L240 -6 L330 290 L70 290Z" fill="#BFD0F0" opacity=".12"/>
  <rect x="160" y="20" width="80" height="60" fill="#3E4A6A" ${sw()}/><path d="M200 20 V80 M160 50 H240" stroke="#1E2236" stroke-width="4"/>
  ${mom(90,330,1.5,{mood:'smile',face:'right',pose:'hold'})}${sbKid(320,330,1.4,{mood:'o',face:'left',pose:'hold',item:g(0,-40,.8,`<path d="M0 0 L20 -40" stroke="${K.wood}" stroke-width="4"/>`)})}
  <rect x="-6" y="240" width="412" height="50" fill="#141828" opacity=".6"/>
  ${T(110,60,'썩썩',24,'#F6F0D6')}${T(300,60,'사각사각',22,'#F6F0D6')}`,'#1E2236'));

/* 이순신 6: 하늘에서 본 학익진 */
redraw('yisunsin',6,()=>SVn(`<rect x="-6" y="-6" width="412" height="292" fill="#3F7EA8"/>${[...Array(20)].map((_,k)=>`<path d="M${(k*61)%410} ${(k*37)%280} q10 -6 20 0" fill="none" stroke="#FFFFFF" stroke-width="2.4" opacity=".6"/>`).join('')}
  ${[...Array(9)].map((_,k)=>{const a=Math.PI*(.15+.7*k/8),x=200-Math.cos(a)*150,y=40+Math.sin(a)*170;return g(x,y,.5,`<ellipse cx="0" cy="0" rx="22" ry="40" fill="${k===4?'#2E6A3A':'#8A5A3C'}" ${sw(2)}/><path d="M0 -26 V26" ${sw(2)}/>`)}).join('')}
  ${[...Array(6)].map((_,k)=>g(150+(k%3)*50,80+Math.floor(k/3)*50,.4,`<ellipse cx="0" cy="0" rx="20" ry="36" fill="#3A322B" ${sw(2)}/>`)).join('')}
  <path d="M60 60 Q200 230 340 60" fill="none" stroke="#FFF2C4" stroke-width="3" stroke-dasharray="8 8"/>
  ${T(200,268,'학이 날개를 펼치듯!',20,'#FFFDF6')}`,'#3F7EA8'));

/* 이순신 7: 울돌목 소용돌이, 열두 척 */
redraw('yisunsin',7,()=>SVn(`${ridge(120,'#5E7A6A',40,3)}<path d="M-6 140 Q200 130 406 140 L406 290 L-6 290Z" fill="#2E6A92"/>
  ${[60,40,22].map((r,k)=>`<ellipse cx="300" cy="210" rx="${r*1.8}" ry="${r*.7}" fill="none" stroke="#FFFFFF" stroke-width="${4-k}" opacity=".8"/>`).join('')}${[0,1,2].map(k=>`<path d="M${230+k*40} ${180-k*4} q30 -10 60 4" fill="none" stroke="#FFFFFF" stroke-width="3"/>`).join('')}
  ${[0,1,2].map(k=>`<g transform="rotate(${20+k*30} 300 210)">${bigShip(300+k*30,200,.3,'#3A322B')}</g>`).join('')}
  ${[...Array(5)].map((_,k)=>bigShip(30+k*30,190+(k%2)*10,.3,'#8A5A3C')).join('')}
  ${general(110,330,1.4,{pose:'up',mood:'joy',face:'right',beard:HAIR})}
  ${T(260,70,'아직 열두 척이 남아 있다!',18,K.red)}`,'url(#r3e)',sky('r3e','#B9C2CC','#E6E2D4')));

/* 허난설헌 1: 문틈으로 오빠들의 글 읽는 소리를 듣는 초희 */
redraw('heonanseolheon',1,()=>SVn(`<rect x="-6" y="-6" width="412" height="292" fill="#E6D3A6"/>
  <rect x="170" y="20" width="230" height="270" fill="#F2E6C8" ${sw()}/>${[0,1,2,3].map(k=>`<path d="M${170+k*58} 20 V290" stroke="#8A5A3C" stroke-width="5"/>`).join('')}${[0,1,2,3,4,5].map(k=>`<path d="M170 ${20+k*45} H400" stroke="#8A5A3C" stroke-width="3"/>`).join('')}
  <rect x="140" y="10" width="34" height="280" fill="#8A5A3C" ${sw()}/>
  ${chKid(80,330,1.5,{mood:'o',face:'right',pose:'hold',still:true})}
  ${T(290,100,'하늘 천, 땅 지…',20,'#5A3B2C')}${[0,1].map(k=>`<path d="M${150+k*10} ${150+k*8} q14 -8 0 -18" fill="none" ${sw(2)}/>`).join('')}`,'#E6D3A6'));

/* 허난설헌 4: 연못가 달밤, 시를 짓는 난설헌 */
redraw('heonanseolheon',4,()=>SVn(`${stars(20,100)}${moon(320,70,26)}
  <path d="M-6 170 Q200 160 406 170 L406 290 L-6 290Z" fill="#3E5A7A"/><path d="M320 180 q-6 40 0 80" stroke="#FFF4C8" stroke-width="8" opacity=".3"/>
  ${lotus(70,220,1.1)}${lotus(170,250,.9)}${lotus(300,236,1.2)}${lotus(380,206,.8)}
  ${nan(110,180,.7,{mood:'smile',face:'right',pose:'hold',item:g(0,-30,.6,`<rect x="-20" y="-24" width="40" height="30" fill="#FFFDF6" ${sw()}/>`)})}
  ${T(200,40,'연꽃과 달을 시에 담아',18,'#F6F0D6')}`,'url(#r3f)',sky('r3f','#1F2748','#4A5A80')));

/* 김만덕 1: 돌담과 한라산, 바람 많은 섬 */
redraw('kimmandeok',1,()=>SVn(`<path d="M-6 180 Q100 120 200 70 Q300 120 406 170 L406 290 L-6 290Z" fill="#7FA88E" ${sw()}/><path d="M180 80 Q200 64 220 80" fill="none" stroke="#FFFFFF" stroke-width="5"/>
  <path d="M-6 200 Q200 190 406 200 L406 290 L-6 290Z" fill="#B9C98A"/>
  ${stoneWall(220)}${stoneWall(260,'#3A3A42')}
  ${[0,1,2,3].map(k=>`<path d="M${-20+k*30} ${80+k*30} q50 -10 100 0" fill="none" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" opacity=".8"/>`).join('')}
  ${mdKid(260,250,.9,{mood:'joy',face:'left',pose:'up'})}
  ${g(340,252,.8,`<path d="M-20 -60 Q-26 -80 -10 -84 Q4 -100 20 -84 Q36 -80 26 -60Z" fill="#5E5E68" ${sw()}/><circle cx="-6" cy="-76" r="3" fill="#2B1E16"/><circle cx="10" cy="-76" r="3" fill="#2B1E16"/><path d="M-4 -66 q6 4 12 0" fill="none" stroke="#2B1E16" stroke-width="2"/><path d="M-28 -60 H32 V0 H-28Z" fill="#6A6A74" ${sw()}/>`)}
  ${T(110,50,'바람 많고 돌 많은 섬',18,K.red)}`,'url(#r3g)',sky('r3g','#CFE7F2','#F6EAD0')));

/* 김만덕 8: 금강산 봉우리, 작은 만덕 */
redraw('kimmandeok',8,()=>SVn(`${[...Array(11)].map((_,k)=>{const x=-10+k*42,h=120+(k*53)%110;return `<path d="M${x-30} 290 L${x-8} ${290-h} Q${x} ${284-h-10} ${x+8} ${290-h} L${x+30} 290Z" fill="${k%2?'#C9C2B4':'#B0A898'}" ${sw()}/><path d="M${x-4} ${296-h} L${x-8} ${330-h}" stroke="#8E8678" stroke-width="2"/>`}).join('')}
  ${[...Array(10)].map((_,k)=>tree(20+k*40,200+(k*29)%60,.4,'pine')).join('')}
  ${[0,1].map(k=>`<ellipse cx="${100+k*200}" cy="${150+k*30}" rx="80" ry="16" fill="#FFFFFF" opacity=".75"/>`).join('')}
  <path d="M-6 290 L-6 250 Q100 236 180 260 L200 290Z" fill="#7F9A70" ${sw()}/>
  ${md(80,270,.62,{mood:'joy',pose:'up',face:'right'})}
  ${T(290,40,'와, 금강산이다!',22,K.red)}`,'url(#r3h)',sky('r3h','#F6D8B0','#D9EEF4')));

/* 김홍도 1: 땅바닥에 그림을 그리는 아이, 위에서 */
redraw('kimhongdo',1,()=>SVn(`<rect x="-6" y="-6" width="412" height="292" fill="#D9C49A"/>${[...Array(12)].map((_,k)=>`<circle cx="${(k*71)%400}" cy="${(k*43)%280}" r="${2+k%3}" fill="#B9A475"/>`).join('')}
  <g fill="none" stroke="#6A5240" stroke-width="3" stroke-linecap="round"><circle cx="230" cy="120" r="30"/><path d="M220 112 h4 M238 112 h4 M220 132 q10 8 20 0"/><path d="M230 150 V200 M230 165 L200 185 M230 165 L260 185 M230 200 L210 240 M230 200 L250 240"/><path d="M300 200 q20 -30 40 0 q20 30 40 0"/><path d="M290 60 l10 -20 l10 20 l-24 -12 h28Z"/></g>
  ${hdKid(110,320,1.6,{mood:'joy',face:'right',pose:'hold',item:g(40,-20,.8,`<path d="M0 0 L30 40" stroke="${K.wood}" stroke-width="5" stroke-linecap="round"/>`),still:true})}
  ${T(300,260,'쓱쓱',22,K.red)}`,'#D9C49A'));

/* 김홍도 5: 북적이는 장터, 붓을 든 김홍도 */
redraw('kimhongdo',5,()=>SVn(`${ridge(140,'#A9CDB4',30,2)}<path d="M-6 170 Q200 160 406 170 L406 290 L-6 290Z" fill="#D9C49A"/>
  ${[60,180,300].map(x=>g(x,190,.9,`<path d="M-50 -40 L50 -40 L44 -60 L-44 -60Z" fill="#EFE6D2" ${sw()}/><path d="M-46 -40 V0 M46 -40 V0" ${sw(3)}/><rect x="-40" y="-20" width="80" height="20" fill="#B5874F" ${sw()}/>`)).join('')}
  ${riceSack(60,182,.6)}${orange(170,174,7)}${orange(186,174,7)}${fish(300,176)}
  ${[...Array(7)].map((_,k)=>hero(30+k*58,236+(k%2)*14,.48,{robe:['#EFE6D2','#5E9C8A','#E98FA0','#D6CDB4'][k%4],hat:['gat','band','',''][k%4],bandColor:'#8C7350',body:k%4===2?'dress':undefined,hair:k%4===2?'bun':undefined,mood:k%2?'joy':'smile',face:k%2?'left':'right'})).join('')}
  ${hongdo(330,330,1.3,{mood:'joy',face:'left',pose:'hold',item:`<rect x="-20" y="-50" width="40" height="30" fill="#FFFDF6" ${sw()}/>`})}`,'url(#r3i)',sky('r3i','#CFE7F2','#F6EAD0')));

/* 정약용 3: 끙끙 돌을 나르는 사람들, 올려다보는 시선 */
redraw('jeongyakyong',3,()=>SVn(`<path d="M-6 120 H406 V200 H-6Z" fill="#C2BBAA"/>${[...Array(18)].map((_,k)=>`<rect x="${(k%9)*46-6}" y="${120+Math.floor(k/9)*40}" width="44" height="38" fill="#B0A898" ${sw(1.2)}/>`).join('')}
  <path d="M-6 200 H406 V290 H-6Z" fill="#C9B48A"/>
  ${g(200,190,1.3,`<rect x="-70" y="-64" width="140" height="60" rx="12" fill="#7D7F88" ${sw()}/><path d="M-40 -50 q20 -6 30 4" fill="none" stroke="#FFFFFF" stroke-width="3" opacity=".4"/><path d="M-110 0 H110" stroke="${K.wood}" stroke-width="8" stroke-linecap="round"/>`)}
  ${worker(90,300,1.3,{mood:'sad',pose:'up',face:'right'})}${worker(310,300,1.3,{mood:'sad',pose:'up',face:'left'})}
  ${[0,1,2].map(k=>`<path d="M${60+k*140} ${150} q4 10 0 14" fill="none" stroke="#6FA8C8" stroke-width="3"/>`).join('')}
  ${T(200,60,'끙… 너무 무거워!',22,K.red)}`,'url(#r3j)',sky('r3j','#CFE7F2','#F6EAD0')));

/* 정약용 6: 완성된 수원 화성, 넓게 */
redraw('jeongyakyong',6,()=>SVn(`${rays(200,40,'#FFF2C4',11,320,.3)}${ridge(150,'#A9CDB4',30,2)}
  <path d="M-6 180 Q100 150 200 160 Q300 150 406 176 L406 210 Q300 186 200 196 Q100 186 -6 214Z" fill="#B0A898" ${sw()}/>${[...Array(14)].map((_,k)=>`<rect x="${k*30-6}" y="${158+Math.abs(7-k)*2}" width="14" height="10" fill="#B0A898" ${sw(1)}/>`).join('')}
  ${g(200,190,1,`<rect x="-50" y="-50" width="100" height="40" fill="#B0A898" ${sw()}/><path d="M-20 -10 Q0 -40 20 -10Z" fill="#3A322B"/><path d="M-60 -50 Q0 -80 60 -50 L50 -60 Q0 -86 -50 -60Z" fill="#4A4A52" ${sw()}/><path d="M-40 -60 V-68 M40 -60 V-68" ${sw(2)}/>`)}
  ${flagPole(120,170,'#C9473B','',50,30)}${flagPole(290,174,K.gold,'',50,30)}
  <path d="M-6 230 Q200 216 406 230 L406 290 L-6 290Z" fill="#9FC48A"/>
  ${[...Array(6)].map((_,k)=>backView(40+k*64,300,.7,{robe:['#D6CDB4','#4C8C7A'][k%2],hat:['bun','gat'][k%2],pose:'up'})).join('')}
  ${T(200,40,'수원 화성 완성!',22,K.red)}`,'url(#r3k)',sky('r3k','#BFE0F0','#F6EAD0')));

/* 김정희 3: 바람 부는 제주 유배지 초가, 홀로 */
redraw('kimjeonghui',3,()=>SVn(`${ridge(160,'#8EA2B8',30,2)}<path d="M-6 190 Q200 180 406 192 L406 290 L-6 290Z" fill="#B8BCA8"/>
  ${stoneWall(230,'#4A4A52')}
  ${g(250,230,1.6,`<path d="M-80 -50 Q0 -90 80 -50 L70 -40 Q0 -76 -70 -40Z" fill="#C9A878" ${sw()}/><rect x="-62" y="-44" width="124" height="44" fill="#E6D3A6" ${sw()}/><rect x="-14" y="-34" width="28" height="34" fill="#6A5240" ${sw(1.2)}/>`)}
  ${[0,1,2,3,4].map(k=>`<path d="M${-30+k*20} ${60+k*26} q60 -14 120 0 q40 10 70 -4" fill="none" stroke="#FFFFFF" stroke-width="3.4" stroke-linecap="round" opacity=".85"/>`).join('')}
  ${jh(100,320,1.3,{mood:'sad',face:'right',pose:'hold',beard:'#E6E1D6'})}
  ${T(290,60,'쌩쌩…',24,'#3F6FA8')}`,'url(#r3l)',sky('r3l','#9FB3C8','#D7E0E6')));

/* 김정희 6: 눈 속의 소나무, 함께 선 두 사람 */
redraw('kimjeonghui',6,()=>SVn(`${snowFX(40)}<path d="M-6 220 Q200 206 406 222 L406 290 L-6 290Z" fill="#F4F6F8" ${sw()}/>
  ${pine(110,230,2.4)}${pine(300,236,2.0)}<path d="M60 120 q50 -10 100 6 M260 140 q40 -8 80 6" fill="none" stroke="#FFFFFF" stroke-width="8" stroke-linecap="round"/>
  ${jh(170,270,.9,{mood:'smile',face:'right',beard:'#E6E1D6'})}${sangjeok(240,270,.9,{mood:'smile',face:'left'})}
  ${T(200,50,'추울 때 더 푸른 소나무',20,'#3F6FA8')}`,'url(#r3m)',sky('r3m','#B9C6D2','#EEF2F4')));
})();
