/* 다시 그린 핵심 장면 4: 조선 끝무렵부터 현대 */
(()=>{
const suit=(robe,tie,hair)=>(x,y,s,o={})=>person(x,y,s,{robe,
  deco:`<path d="M-14 -66 L0 -48 L14 -66" fill="#FFFFFF" ${sw(1.6)}/><path d="M-4 -60 L0 -50 L4 -60Z" fill="${tie}"/>`,
  front:`<path d="M-31 -98 Q-30 -128 0 -128 Q30 -128 31 -98 Q0 -112 -31 -98Z" fill="${HAIR}" ${sw()}/>${hair||''}`,...o});
const glasses=`<circle cx="-11" cy="-92" r="8" fill="none" ${sw(2)}/><circle cx="11" cy="-92" r="8" fill="none" ${sw(2)}/><path d="M-3 -92 H3" ${sw(2)}/>`;
const jh=(x,y,s,o={})=>hero(x,y,s,{robe:'#B9A475',hat:'gat',belt:'#5E9C8A',collar:'#FFF8EC',...o});
const jhKid=(x,y,s,o={})=>hero(x,y,s,{robe:'#C9D8B4',hair:'braid',belt:'#5E9C8A',ribbon:'#5E9C8A',...o});
const js=(x,y,s,o={})=>hero(x,y,s,{robe:'#EDE9E0',hat:'gat',belt:'#3F6FA8',collar:'#3F6FA8',...o});
const sgKid=(x,y,s,o={})=>hero(x,y,s,{robe:'#E7D7B4',hair:'braid',belt:'#8C7350',ribbon:'#3F6FA8',...o});
const sg=suit('#3F5A7A','#5A3B2C');
const teacher=(x,y,s,o={})=>hero(x,y,s,{robe:'#EDE9E0',hat:'gat',beard:'#D9D3C8',belt:'#8C7350',...o});
const ch=suit('#2E3A55','#C9473B');
const gwansun=(x,y,s,o={})=>hero(x,y,s,{body:'dress',top:'#FFFFFF',skirt:'#2E3440',hair:'braid',ribbon:'#C9473B',...o});
const pjMan=suit('#3F5A7A','#C9473B',glasses);
const gkKid=(x,y,s,o={})=>hero(x,y,s,{body:'dress',top:'#FFFFFF',skirt:'#2E3440',hair:'braid',ribbon:'#C9473B',...o});
const pilot=(x,y,s,o={})=>person(x,y,s,{robe:'#6E5A3A',
  deco:`<path d="M-14 -66 L0 -50 L14 -66" fill="#E6E1D6" ${sw(1.6)}/><path d="M-36 -32 Q0 -26 36 -32" fill="none" stroke="#4A3A24" stroke-width="4"/>`,
  front:`<path d="M-32 -94 Q-34 -132 0 -132 Q34 -132 32 -94 Q16 -110 0 -108 Q-16 -110 -32 -94Z" fill="#7A5A3A" ${sw()}/><ellipse cx="-12" cy="-112" rx="10" ry="7" fill="#BFE0F0" ${sw(1.6)}/><ellipse cx="12" cy="-112" rx="10" ry="7" fill="#BFE0F0" ${sw(1.6)}/>`,...o});
const hp=suit('#4C5A6E','#3F6FA8',glasses);
const painter=(x,y,s,o={})=>person(x,y,s,{robe:'#6E5A4A',
  deco:`<path d="M-14 -66 L0 -50 L14 -66" fill="#E6E1D6" ${sw(1.6)}/>`,
  front:`<path d="M-32 -96 Q-34 -132 0 -132 Q34 -132 32 -96 Q20 -120 4 -112 Q-14 -122 -32 -96Z" fill="${HAIR}" ${sw()}/>`,...o});
const ijKid=(x,y,s,o={})=>hero(x,y,s,{robe:'#E7D7B4',hair:'braid',belt:'#8C7350',ribbon:'#C9473B',...o});
const wife=(x,y,s,o={})=>hero(x,y,s,{body:'dress',hair:'bun',top:'#F6E2A6',skirt:'#7FB3C8',...o});
const plane=(x,y,s,c='#C9473B')=>g(x,y,s,`<rect x="-36" y="-26" width="64" height="6" rx="3" fill="#E9E4D6" ${sw(1.6)}/><path d="M-22 -20 L-18 -4 M12 -20 L8 -4" ${sw(2)}/><path d="M-48 -4 Q-40 -14 30 -10 Q52 -8 54 2 Q52 12 30 12 Q-30 14 -48 4Z" fill="${c}" ${sw()}/><rect x="-36" y="6" width="64" height="6" rx="3" fill="#E9E4D6" ${sw(1.6)}/><path d="M-48 -4 L-58 -22 L-44 -18 L-40 -6Z" fill="${c}" ${sw(1.4)}/><circle cx="8" cy="-6" r="5" fill="#BFE0F0" ${sw(1)}/><path d="M56 -14 V18" stroke="#5A5560" stroke-width="3" stroke-linecap="round"/>`);
const vase=(x,y,s)=>g(x,y,s,`<path d="M-10 -86 L10 -86 L12 -78 Q36 -60 30 -24 Q24 0 0 0 Q-24 0 -30 -24 Q-36 -60 -12 -78Z" fill="#9FC2B4" ${sw()}/>${[[-14,-56],[12,-40],[-8,-26]].map(([a,b])=>`<circle cx="${a}" cy="${b}" r="5" fill="none" stroke="#FFFFFF" stroke-width="1.4"/>`).join('')}`);
const crate=(x,y,s)=>g(x,y,s,`<rect x="-24" y="-30" width="48" height="30" fill="#B5874F" ${sw()}/><path d="M-24 -15 H24 M-8 -30 V0 M8 -30 V0" stroke="#8A5A3C" stroke-width="2"/>`);
const moon=(x,y,r,c='#FFF4C8')=>`<circle cx="${x}" cy="${y}" r="${r*2.2}" fill="${c}" opacity=".18"/><circle cx="${x}" cy="${y}" r="${r}" fill="${c}" ${sw(1.6)}/>`;
const stars=(n,h=150)=>[...Array(n)].map((_,k)=>`<circle cx="${(k*83)%400}" cy="${(k*47)%h+8}" r="${1+(k%3)*.6}" fill="#FFF8DC" opacity=".8"/>`).join('');
const waves=(y,n,c='#FFFFFF',op=.8)=>[...Array(n)].map((_,k)=>`<path d="M${(k*97)%420-20} ${y+(k%4)*18} q10 -8 20 0 q10 8 20 0" fill="none" stroke="${c}" stroke-width="3" stroke-linecap="round" opacity="${op}"/>`).join('');
const smallFlag=(x,y,s)=>g(x,y,s,`<path d="M0 0 V-60" stroke="${K.wood}" stroke-width="3"/><rect x="0" y="-60" width="36" height="24" fill="#FFFFFF" ${sw(1.4)}/><circle cx="18" cy="-48" r="6" fill="#C9473B"/><path d="M12 -48 a6 6 0 0 0 12 0Z" fill="#3F6FA8"/>`);

/* 김정호 4: 산마루를 넘어가는 작은 나그네 */
redraw('kimjeongho',4,()=>SVn(`${ridge(100,'#C9C08E',70,2)}${ridge(150,'#B39A55',60,4)}
  <path d="M-6 290 L-6 200 Q80 150 160 170 Q240 190 300 120 Q340 90 406 110 L406 290Z" fill="#8E7A44" ${sw()}/>
  <path d="M30 230 Q120 170 200 180 Q260 186 300 130" fill="none" stroke="#E6D3A6" stroke-width="7" stroke-dasharray="14 8" stroke-linecap="round"/>
  <path d="M-6 270 Q120 256 260 280 L260 290 L-6 290Z" fill="#6FA8C8"/>
  ${jh(296,132,.42,{mood:'joy',pose:'up',face:'right',item:g(0,-30,.5,`<rect x="-16" y="-20" width="32" height="24" fill="#FFFDF6" ${sw()}/>`)})}
  ${T(200,40,'이 산 너머는 어떻게 생겼을까?',17,K.red)}`,'url(#r4a)',sky('r4a','#F2D6A8','#CFE7F2')));

/* 김정호 6: 2층 집만큼 큰 지도와 아주 작은 아이 */
redraw('kimjeongho',6,()=>SVn(`<path d="M-6 250 H406 V290 H-6Z" fill="#C9B48A"/>
  <path d="M60 250 L60 50 L340 50 L340 250Z" fill="#FBF3DE" ${sw()}/>
  <path d="M190 56 Q160 80 170 110 Q130 140 160 180 Q150 220 190 244 Q240 230 250 200 Q270 150 240 120 Q260 70 230 30Z" fill="#CFE0B4" ${sw(1.6)}/>
  ${[...Array(12)].map((_,k)=>`<path d="M${170+(k*13)%60} ${40+k*16} l8 -10 l8 10" fill="none" stroke="#5E7A4A" stroke-width="1.6"/>`).join('')}<path d="M200 60 Q190 130 220 220" fill="none" stroke="#6FA8C8" stroke-width="2.4"/>
  ${[0,1,2,3,4,5,6].map(k=>`<path d="M${60+k*40} 50 V250" stroke="#E6D3A6" stroke-width="1.2"/>`).join('')}
  ${jhKid(120,268,.55,{mood:'o',pose:'up',face:'right'})}${jh(290,266,.62,{mood:'joy',face:'left'})}
  ${T(200,28,'우와, 우리 집보다 커!',20,K.red)}`,'#E6D3A6'));

/* 지석영 2: 열이 나는 아이를 돌보는 어머니, 밤 */
redraw('jiseogyeong',2,()=>SVn(`${room()}<rect x="-6" y="-6" width="412" height="292" fill="#1E2236" opacity=".45"/>
  ${candle(340,220,1.2)}<circle cx="340" cy="180" r="160" fill="url(#candleG)" opacity=".5"/>
  ${bedQuilt(250,280,1.3)}
  <g transform="rotate(-90 330 262)">${hero(330,262,.9,{robe:'#EAE4D6',hair:'braid',mood:'sad'})}</g>
  ${hero(90,310,1.3,{body:'dress',hair:'bun',top:'#FFFDF6',skirt:'#8C7A6A',mood:'sad',face:'right',pose:'hold'})}
  ${T(200,60,'열이 펄펄…',20,'#F6F0D6')}`,'#EADCC0',candleDef));

/* 지석영 7: 우두를 맞으려고 줄 선 아이들 */
redraw('jiseogyeong',7,()=>SVn(`${yard(170)}
  ${[...Array(7)].map((_,k)=>hero(330-k*42,170+k*16,.4+k*.08,{robe:['#E7C76A','#9FC2D8','#E98FA0','#C9D8B4'][k%4],hair:'braid',ribbon:['#C9473B','#3F6FA8'][k%2],mood:k%3?'joy':'o',face:'right',pose:k%2?'up':'down'})).join('')}
  ${js(370,200,.7,{mood:'smile',face:'left',pose:'hold'})}
  ${T(160,50,'따끔! 이제 마마는 안 무서워',18,K.red)}`,'#D9CCAE'));

/* 주시경 2: "아하!" 하고 알아듣는 아이, 가까이 */
redraw('jusigyeong',2,()=>SVn(`${room()}${rays(150,150,'#FFF2C4',13,260,.35)}
  ${sgKid(150,370,2.0,{mood:'joy',pose:'up',face:'right',still:true})}
  ${teacher(330,300,1.0,{mood:'smile',face:'left',pose:'hold',item:openBook})}
  ${T(260,60,'아하! 이제 알겠어요!',22,K.red)}`,'#EADCC0'));

/* 주시경 3: 한글 신문을 읽는 거리 사람들 */
redraw('jusigyeong',3,()=>SVn(`${townscape(170,7)}<path d="M-6 200 H406 V290 H-6Z" fill="#C9B48A"/>
  ${noticeBoard(200,210,1,['독','립','신','문','한','글'])}
  ${[...Array(5)].map((_,k)=>backView(80+k*60,290+(k%2)*6,.7,{robe:['#EFE6D2','#3F5A7A','#D6CDB4','#E98FA0','#5E9C8A'][k],hat:['gat','','bun','bun','gat'][k]})).join('')}
  ${sg(360,250,.8,{mood:'joy'})}
  ${T(200,40,'누구나 읽을 수 있어!',20,K.red)}`,'url(#r4b)',sky('r4b','#CFE7F2','#F6EAD0')));

/* 안창호 3: 바다 한가운데 솟은 섬을 보는 뒷모습 */
redraw('anchangho',3,()=>SVn(`<path d="M-6 150 Q200 140 406 150 L406 290 L-6 290Z" fill="#3F8FBA"/>${waves(170,12)}
  <path d="M220 154 Q260 70 300 60 Q330 70 360 154Z" fill="#5E9C6A" ${sw()}/><path d="M290 64 Q300 50 312 64" fill="none" stroke="#3A322B" stroke-width="3"/>${[240,350].map(x=>`<path d="M${x} 150 q2 -30 -4 -50 M${x-4} 100 q-14 -4 -20 6 M${x-4} 100 q14 -6 20 4" fill="none" stroke="#3A6A3A" stroke-width="3"/>`).join('')}
  <path d="M-6 290 L-6 220 L220 220 L250 290Z" fill="#8A5A3C" ${sw()}/><path d="M-6 220 H230" stroke="#5A3B2C" stroke-width="5"/>
  ${backView(110,310,1.2,{robe:'#2E3A55'})}
  ${T(290,40,'도산, 섬 산!',22,K.red)}`,'url(#r4c)',sky('r4c','#BFE3F2','#F5EED8')));

/* 안창호 7: 학생들 앞에서 말하는 안창호, 교실 */
redraw('anchangho',7,()=>SVn(`${room()}<rect x="100" y="40" width="200" height="90" fill="#3A5A4A" ${sw()}/><text x="200" y="96" text-anchor="middle" font-size="22" fill="#FFFFFF" font-weight="700">작은 일도 정성껏</text>
  ${ch(200,240,.9,{pose:'up',mood:'joy'})}
  ${[...Array(5)].map((_,k)=>backView(40+k*80,320,1.0,{robe:['#C9D8E8','#E7D7B4','#9FC2D8','#D9E6C8','#E7C76A'][k],hat:k%2?'bun':''})).join('')}`,'#EADCC0'));

/* 유관순 5: 밤새 태극기를 바느질하는 관순이 */
redraw('yugwansun',5,()=>SVn(`<rect x="-6" y="-6" width="412" height="292" fill="#2A2438"/><rect x="290" y="30" width="90" height="80" fill="#1E2236" ${sw()}/>${stars(8,60).replace(/cx="(\d+)"/g,(m,a)=>`cx="${300+(+a%70)}"`)}
  <path d="M-6 230 H406 V290 H-6Z" fill="#4A3A2E"/>
  ${candle(70,236,1.3)}<circle cx="70" cy="190" r="200" fill="url(#candleG)" opacity=".55"/>
  ${gwansun(220,340,1.7,{mood:'smile',face:'left',pose:'hold',still:true})}
  ${g(170,270,1.3,`<rect x="-34" y="-24" width="68" height="44" fill="#FFFFFF" ${sw()}/><circle cx="0" cy="-2" r="10" fill="#C9473B"/><path d="M-10 -2 a10 10 0 0 0 20 0Z" fill="#3F6FA8"/><path d="M20 10 l14 14" stroke="#8A8580" stroke-width="1.4"/>`)}
  ${[0,1,2].map(k=>`<rect x="${300+k*6}" y="${250-k*6}" width="60" height="6" fill="#FFFFFF" ${sw(1)}/>`).join('')}
  ${T(220,50,'한 땀, 한 땀',20,'#F6F0D6')}`,'#2A2438',candleDef));

/* 유관순 6: 아우내 장터, 맨 앞의 관순이 */
redraw('yugwansun',6,()=>SVn(`${townscape(150,7)}<path d="M-6 170 H406 V290 H-6Z" fill="#D9C49A"/>
  ${[...Array(14)].map((_,k)=>{const x=(k*31)%400+10,y=190+Math.floor(k/5)*14;return `${hero(x,y,.36,{robe:['#FFFFFF','#EFE6D2','#D6CDB4'][k%3],hat:['gat','','band'][k%3],bandColor:'#FFFFFF',pose:'up',mood:'joy'})}${smallFlag(x+14,y-40,.5)}`}).join('')}
  ${gwansun(200,320,1.5,{mood:'joy',pose:'up',face:'front',still:true})}${smallFlag(250,180,1.4)}
  ${T(200,40,'대한 독립 만세!',26,K.red)}`,'url(#r4d)',sky('r4d','#CFE7F2','#F6EAD0')));

/* 방정환 3: 아이들을 바라보며 생각하는 방정환, 가까이 */
redraw('bangjeonghwan',3,()=>SVn(`${hills('#A9CDB4','#BCD38F',190,214)}
  ${[0,1,2,3].map(k=>hero(240+k*40,230+(k%2)*8,.42,{robe:['#E7C76A','#9FC2D8','#E98FA0','#C9D8B4'][k],hair:'braid',ribbon:'#C9473B',pose:'up',mood:'joy'})).join('')}
  ${pjMan(110,370,2.0,{mood:'smile'})}
  <g transform="translate(260 70)"><ellipse cx="0" cy="0" rx="80" ry="34" fill="#FFFFFF" ${sw()}/><path d="M-40 30 l-14 20 l30 -14" fill="#FFFFFF" ${sw()}/>${T(0,8,'어린이',26,K.red)}</g>`,'url(#r4e)',sky('r4e','#CFE7F2','#FCE3E6')));

/* 방정환 6: 첫 어린이날, 깃발 들고 행진하는 아이들 */
redraw('bangjeonghwan',6,()=>SVn(`${townscape(160,7)}<path d="M-6 190 H406 V290 H-6Z" fill="#E6D3A6"/>
  ${[...Array(7)].map((_,k)=>`<path d="M${k*64-10} 20 L${k*64+20} 40" stroke="#5A5560" stroke-width="1.4"/><path d="M${k*64} 24 l10 14 l10 -10Z" fill="${['#C9473B','#F2C14E','#3F6FA8','#5E9C6A'][k%4]}"/>`).join('')}
  ${[...Array(8)].map((_,k)=>{const x=30+k*50,y=250-(k%2)*10;return `${hero(x,y,.62,{robe:['#E7C76A','#9FC2D8','#E98FA0','#C9D8B4'][k%4],hair:'braid',ribbon:'#C9473B',pose:'up',mood:'joy',face:'right'})}<path d="M${x+18} ${y-70} V${y-120}" stroke="${K.wood}" stroke-width="3"/><rect x="${x+18}" y="${y-120}" width="30" height="20" fill="${['#C9473B','#F2C14E','#3F6FA8','#5E9C6A'][k%4]}" ${sw(1.2)}/>`}).join('')}
  ${pjMan(370,206,.6,{mood:'joy',pose:'up'})}
  ${T(200,100,'어린이날 만세!',24,K.red)}`,'url(#r4f)',sky('r4f','#BFE0F0','#FCEFD6')));

/* 권기옥 1: 어깨 너머로 보는 하늘의 곡예 비행 */
redraw('gwongiok',1,()=>SVn(`${rays(200,0,'#FFF2C4',9,300,.25)}
  <path d="M40 200 Q100 40 200 90 Q300 140 260 60 Q230 10 330 40" fill="none" stroke="#FFFFFF" stroke-width="6" stroke-linecap="round" stroke-dasharray="2 12"/>
  <g transform="rotate(-20 330 40)">${plane(330,40,.8)}</g>${cloud(90,80,1.2)}${cloud(320,130,.9)}
  <path d="M-6 230 Q200 220 406 230 L406 290 L-6 290Z" fill="#9FC48A"/>${[...Array(8)].map((_,k)=>backView(200+k*26,252,.3,{robe:['#EFE6D2','#D6CDB4'][k%2]})).join('')}
  ${backView(90,380,2.0,{robe:'#FFFFFF',pose:'up'})}
  ${T(290,180,'나도 하늘을 날 거야!',18,K.red)}`,'url(#r4g)',sky('r4g','#9FD0EC','#E8F4F8')));

/* 권기옥 4: 비행 학교 활주로, 다시 비행기에 오르는 기옥 */
redraw('gwongiok',4,()=>SVn(`${ridge(160,'#A9B8A0',30,3)}<path d="M-6 180 H406 V290 H-6Z" fill="#B9C98A"/>
  <path d="M120 290 L180 180 L220 180 L280 290Z" fill="#8E8678"/><path d="M200 190 V290" stroke="#FFFFFF" stroke-width="4" stroke-dasharray="14 12"/>
  ${plane(200,250,2.2,'#7A8C6E')}
  ${pilot(90,290,1.1,{pose:'up',mood:'joy'})}${[300,340,380].map(x=>pilot(x,220,.5,{mood:'o'})).join('')}
  ${T(110,60,'한 번 더!',24,K.red)}`,'url(#r4h)',sky('r4h','#CFE7F2','#F6EAD0')));

/* 전형필 2: 보물을 싣고 떠나는 배 */
redraw('jeonhyeongpil',2,()=>SVn(`<path d="M-6 150 Q200 140 406 150 L406 290 L-6 290Z" fill="#4F7FA0"/>${waves(170,12)}
  ${bigShip(260,190,1.2,'#3A3A44')}${crate(230,170,.7)}${crate(270,166,.6)}${vase(300,170,.4)}
  <path d="M-6 290 L-6 210 L140 210 L140 226 L-6 226Z" fill="#8E8678" ${sw()}/>
  ${hpKid(70,240,.8,{mood:'sad',face:'right'})}
  ${T(130,70,'우리 보물이 떠나가요…',18,K.red)}`,'url(#r4i)',sky('r4i','#B9C2CC','#E6E2D4')));
function hpKid(x,y,s,o={}){return hero(x,y,s,{robe:'#E7D7B4',hair:'braid',belt:'#5E7FA8',ribbon:'#5E7FA8',...o})}

/* 전형필 6: 보화각 안, 진열장 앞의 아이들 */
redraw('jeonhyeongpil',5,()=>SVn(`<rect x="-6" y="-6" width="412" height="292" fill="#F2EEE4"/><path d="M-6 220 H406 V290 H-6Z" fill="#C9B48A"/>
  ${[80,200,320].map((x,k)=>`<rect x="${x-50}" y="80" width="100" height="140" fill="#E6F2F6" ${sw()}/><rect x="${x-50}" y="200" width="100" height="20" fill="#8A6A44" ${sw()}/>`).join('')}
  ${vase(80,196,.9)}${g(200,196,.9,`<rect x="-30" y="-90" width="60" height="80" fill="#FFFDF6" ${sw()}/><path d="M-20 -70 q20 -20 40 0 M-20 -40 q10 -10 20 0" fill="none" stroke="#5E7A4A" stroke-width="2"/>`)}${g(320,196,.9,`<rect x="-26" y="-70" width="52" height="64" fill="#E9D9A6" ${sw()}/><path d="M-16 -56 H16 M-16 -44 H16 M-16 -32 H10" stroke="#5A3B2C" stroke-width="2"/>`)}
  ${[...Array(3)].map((_,k)=>backView(110+k*90,330,1.1,{robe:['#E7C76A','#9FC2D8','#E98FA0'][k],hat:k===1?'bun':'',pose:k===1?'up':'down'})).join('')}
  ${T(200,40,'보화각',24,K.red)}`,'#F2EEE4'));

/* 이중섭 2: 해 질 녘, 소를 바라보는 아이 */
redraw('ijungseop',2,()=>SVn(`<circle cx="300" cy="190" r="50" fill="#F7B640" ${sw()}/>${rays(300,190,'#FFE0A6',11,300,.3)}
  ${ridge(200,'#B9734A',30,2)}<path d="M-6 220 Q200 210 406 222 L406 290 L-6 290Z" fill="#C99A5A"/>
  ${ox(260,250,1.3,'#9A5A2E')}
  ${ijKid(80,300,1.2,{mood:'smile',face:'right',pose:'hold',item:`<rect x="-20" y="-50" width="40" height="30" fill="#FFFDF6" ${sw()}/>`})}
  ${T(140,60,'음매~ 소 눈이 참 크다',18,'#7A3B2C')}`,'url(#r4j)',sky('r4j','#F28C5A','#FCE3A6')));

/* 이중섭 6: 떠나는 배, 부두에 남은 중섭 */
redraw('ijungseop',6,()=>SVn(`<path d="M-6 140 Q200 130 406 140 L406 290 L-6 290Z" fill="#5B8BAA"/>${waves(160,10)}
  ${bigShip(290,170,.7,'#5A5560')}${[0,1,2].map(k=>`<circle cx="${270+k*14}" cy="146" r="4" fill="${SK}"/>`).join('')}<path d="M300 140 l4 -8" ${sw(2)}/>
  <path d="M-6 290 L-6 220 L200 220 L220 290Z" fill="#8E8678" ${sw()}/>
  ${painter(110,300,1.4,{mood:'sad',pose:'up'})}
  ${[0,1,2,3].map(k=>`<path d="M${180+k*50} ${100-k*6} q10 -6 20 0" fill="none" ${sw(1.6)}/>`).join('')}
  ${T(260,60,'잘 가, 곧 만나자',20,'#3F6FA8')}`,'url(#r4k)',sky('r4k','#E6C9A0','#CFE0EA')));
})();
