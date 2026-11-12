/* 다시 그린 핵심 장면 2: 남북국과 고려, 조선 초 */
(()=>{
const hyKid=(x,y,s,o={})=>hero(x,y,s,{hair:'bald',robe:'#C9C2B4',belt:false,collar:'#EDE9E0',...o});
const bogoKid=(x,y,s,o={})=>hero(x,y,s,{robe:'#7FB3C8',hair:'braid',belt:'#2C6E92',ribbon:'#2C6E92',...o});
const bogo=(x,y,s,o={})=>hero(x,y,s,{robe:'#2C6E92',hat:'band',bandColor:K.gold,belt:K.gold,collar:'#FFF8EC',...o});
const wgKid=(x,y,s,o={})=>hero(x,y,s,{robe:'#E7C76A',hair:'braid',belt:'#B8862F',ribbon:'#B8862F',...o});
const wgK=(x,y,s,o={})=>king(x,y,s,{robe:'#B8862F',beard:HAIR,...o});
const seohui=(x,y,s,o={})=>hero(x,y,s,{robe:'#5E7FA8',hat:'gat',belt:K.gold,collar:'#FFF8EC',beard:HAIR,...o});
const khitan=(x,y,s,o={})=>hero(x,y,s,{robe:'#8A5A3C',hat:'helmet',body:'armor',beard:'#3B2618',...o});
const gc=(x,y,s,o={})=>hero(x,y,s,{body:'armor',robe:'#3F6FA8',hat:'helmet',beard:'#E6E1D6',...o});
const il=(x,y,s,o={})=>hero(x,y,s,{hair:'bald',robe:'#8E8A80',belt:false,collar:'#EDE9E0',deco:kasaL,beard:'#E6E1D6',...o});
const cm=(x,y,s,o={})=>hero(x,y,s,{robe:'#6E8FB0',hat:'gat',belt:K.gold,collar:'#FFF8EC',beard:HAIR,...o});
const merchant=(x,y,s,o={})=>hero(x,y,s,{robe:'#B5874F',hat:'band',bandColor:'#7A3B2C',belt:'#3A2E2A',beard:'#3B2618',...o});
const mun=(x,y,s,o={})=>hero(x,y,s,{robe:'#6E8FB0',hat:'gat',belt:K.gold,collar:'#FFF8EC',beard:HAIR,...o});
const jeong=(x,y,s,o={})=>hero(x,y,s,{robe:'#B9A475',hat:'gat',belt:'#5E9C8A',beard:'#8A8580',...o});
const hh=(x,y,s,o={})=>hero(x,y,s,{robe:'#5E7FA8',hat:'gat',belt:K.gold,collar:'#FFF8EC',...o});
const moon=(x,y,r,c='#FFF4C8')=>`<circle cx="${x}" cy="${y}" r="${r*2.2}" fill="${c}" opacity=".18"/><circle cx="${x}" cy="${y}" r="${r}" fill="${c}" ${sw(1.6)}/>`;
const stars=(n,h=150)=>[...Array(n)].map((_,k)=>`<circle cx="${(k*83)%400}" cy="${(k*47)%h+8}" r="${1+(k%3)*.6}" fill="#FFF8DC" opacity=".8"/>`).join('');
const waves=(y,n,c='#FFFFFF',op=.8)=>[...Array(n)].map((_,k)=>`<path d="M${(k*97)%420-20} ${y+(k%4)*18} q10 -8 20 0 q10 8 20 0" fill="none" stroke="${c}" stroke-width="3" stroke-linecap="round" opacity="${op}"/>`).join('');
const pagoda=(x,y,s,fire)=>g(x,y,s,`${fire?(()=>{const fl=(x,y,w,h,c)=>`<path d="M${x-w} ${y} Q${x-w*1.1} ${y-h*.5} ${x-w*.3} ${y-h*.7} Q${x-w*.5} ${y-h*.9} ${x} ${y-h} Q${x+w*.2} ${y-h*.75} ${x+w*.5} ${y-h*.8} Q${x+w*1.2} ${y-h*.45} ${x+w} ${y}Z" fill="${c}"/>`;
  return fl(0,0,90,250,'#E0574A')+fl(-6,0,66,200,'#F28C3A')+fl(4,0,40,140,'#F7D06A')+fl(-60,-90,24,70,'#F28C3A')+fl(62,-120,22,64,'#E0574A')+[...Array(10)].map((_,k)=>`<circle cx="${-70+(k*37)%140}" cy="${-150-(k*29)%90}" r="${2+k%3}" fill="#F7D06A"/>`).join('')+`<path d="M-30 -250 q-30 -30 0 -60 q30 -24 10 -50" fill="none" stroke="#6A6066" stroke-width="22" stroke-linecap="round" opacity=".45"/>`})():''}${[...Array(9)].map((_,k)=>{const w=60-k*5,yy=-k*22;return `<rect x="${-w*.6}" y="${yy-18}" width="${w*1.2}" height="18" fill="#8A5A3C" ${sw(1.6)}/><path d="M${-w} ${yy-16} Q0 ${yy-28} ${w} ${yy-16} L${w-6} ${yy-22} Q0 ${yy-32} ${-w+6} ${yy-22}Z" fill="#3A322B" ${sw(1.4)}/>`}).join('')}<path d="M0 -198 V-230" ${sw(3)}/>
 `);

/* 혜초 2: 큰 물결 위의 작은 배 */
redraw('hyecho',2,()=>SVn(`<path d="M-6 150 Q100 136 200 146 Q300 136 406 150 L406 290 L-6 290Z" fill="#3F7EA8"/>${waves(170,16)}
  <path d="M-6 230 Q60 196 120 222 Q180 250 240 214 Q300 186 406 226 L406 290 L-6 290Z" fill="#2E6A92"/>
  <g transform="rotate(-8 230 200)">${bigShip(230,206,1.1,'#8A5A3C')}</g>${hyKid(276,198,.3,{mood:'joy',pose:'up',face:'left'})}
  ${gull(80,70)}${gull(120,50)}${gull(330,80)}${cloud(80,110,1)}
  ${T(110,60,'당나라로!',22,K.red)}`,'url(#rh1)',sky('rh1','#BFE3F2','#F5EED8')));

/* 혜초 6: 눈 덮인 고개에서 달을 보는 뒷모습 */
redraw('hyecho',6,()=>SVn(`${stars(30)}${moon(300,80,34)}
  ${ridge(150,'#5A6E8A',60,2)}${ridge(200,'#8EA2B8',40,4)}<path d="M-6 290 L-6 240 Q120 200 260 236 L406 220 L406 290Z" fill="#EEF2F6" ${sw()}/>
  ${snowFX(40)}
  ${backView(120,330,1.5,{robe:'#A7A49B'})}${g(120,330,1.5,kasaL)}
  ${T(110,70,'고향 하늘은 어디쯤일까',18,'#F6F0D6')}`,'url(#rh2)',sky('rh2','#1F2748','#4A5A80')));

/* 장보고 1: 물속을 헤엄치는 궁복이와 물고기 */
redraw('jangbogo',1,()=>SVn(`<rect x="-6" y="-6" width="412" height="40" fill="#BFE3F2"/><path d="M-6 34 Q50 26 100 34 T200 34 T300 34 T406 34 L406 290 L-6 290Z" fill="#3F8FBA"/>
  ${rays(200,30,'#BFE8F6',9,280,.25)}
  <path d="M-6 290 Q60 250 140 270 Q220 290 300 260 Q360 240 406 262 L406 290Z" fill="#E6D3A6" ${sw()}/>${[40,80,330,370].map((x,k)=>`<path d="M${x} 280 q-8 -30 4 -60 M${x+8} 282 q10 -26 0 -50" fill="none" stroke="#5E9C5A" stroke-width="4" stroke-linecap="round"/>`).join('')}
  ${fish(90,120)}${fish(130,96,'#F7D06A')}${fish(300,200,'#E98FA0')}${fish(340,170)}${crab(200,276,.7)}
  <g transform="rotate(-70 210 170)">${bogoKid(210,230,1.0,{pose:'up',mood:'joy'})}</g>
  ${[0,1,2].map(k=>`<circle cx="${300+k*10}" cy="${100-k*24}" r="${4+k*2}" fill="none" stroke="#FFFFFF" stroke-width="2"/>`).join('')}`,'#3F8FBA'));

/* 장보고 5: 섬 위의 청해진, 깃발 */
redraw('jangbogo',5,()=>SVn(`<path d="M-6 170 Q200 160 406 172 L406 290 L-6 290Z" fill="#4F92BA"/>${waves(190,14)}
  <path d="M80 200 Q120 120 200 110 Q290 116 330 200Z" fill="#8FB88A" ${sw()}/>
  <path d="M120 170 L120 140 L280 140 L280 170" fill="none" stroke="#9E9686" stroke-width="10"/>${[130,170,210,250,280].map(x=>`<rect x="${x-6}" y="128" width="12" height="12" fill="#9E9686" ${sw(1)}/>`).join('')}
  ${flagPole(200,120,'#2C6E92','청해진',80,64)}
  ${bigShip(60,240,.6,'#8A5A3C')}${bigShip(350,236,.55,'#8A5A3C')}
  ${bogo(200,190,.5,{pose:'up',mood:'joy'})}${gull(60,70)}${gull(330,60)}`,'url(#rh3)',sky('rh3','#BFE3F2','#F5EED8')));

/* 왕건 1: 배가 드나드는 송악 바닷가, 부두의 아이 */
redraw('wanggeon',1,()=>SVn(`<path d="M-6 150 Q200 140 406 150 L406 290 L-6 290Z" fill="#5B9BC2"/>${waves(170,10)}
  ${bigShip(250,186,.6,'#8A5A3C')}${bigShip(350,170,.4,'#8A5A3C')}
  <path d="M-6 290 L-6 220 L180 220 L180 236 L-6 236Z" fill="#B5874F" ${sw()}/>${[20,70,120,170].map(x=>`<path d="M${x} 236 V290" stroke="#8A5A3C" stroke-width="7"/>`).join('')}
  ${riceSack(40,220,.7)}${wgKid(120,222,.9,{pose:'up',mood:'joy',face:'right'})}
  ${gull(200,70)}${gull(240,90)}
  ${T(300,70,'배야, 어디 가니?',18,K.red)}`,'url(#rh4)',sky('rh4','#CFE7F2','#F6EAD0')));

/* 왕건 6: 하나 된 나라, 왕을 둘러싼 사람들 */
redraw('wanggeon',6,()=>SVn(`${rays(200,140,'#FFF2C4',13,320,.3)}${palace(false)}
  ${wgK(200,250,1.1,{mood:'joy',pose:'up'})}
  ${[...Array(10)].map((_,k)=>backView(20+k*40,300+(k%2)*8,.62,{robe:['#5E9C8A','#C9473B','#B8862F','#EFE6D2'][k%4],hat:['gat','bun','',''][k%4],pose:k%3?'up':'down'})).join('')}`,'#E6CFAA'));

/* 서희 3: 소리치는 거란 장수, 가까이 */
redraw('seohui',3,()=>SVn(`${ridge(170,'#B39A55',40,3)}<path d="M-6 200 Q200 190 406 200 L406 290 L-6 290Z" fill="#C9B48A"/>
  ${[...Array(14)].map((_,k)=>`<path d="M${k*30} 206 L${k*30+10} 190 L${k*30+20} 206Z" fill="#8A5A3C" ${sw(1)}/>`).join('')}
  ${khitan(140,360,1.9,{pose:'up',mood:'o',face:'right'})}
  ${T(290,80,'고려 땅을 내놓아라!',24,K.red)}`,'url(#rh5)',sky('rh5','#E6C9A0','#F2E2C4')));

/* 서희 6: 탁자를 사이에 둔 두 사람, 낮은 시선 */
redraw('seohui',6,()=>SVn(`<rect x="-6" y="-6" width="412" height="292" fill="#E6CFA4"/><path d="M-6 -6 H406 V40 L200 70 L-6 40Z" fill="#C9473B" ${sw()}/><path d="M200 70 V200" stroke="#8A5A3C" stroke-width="8"/>
  <path d="M-6 230 H406 V290 H-6Z" fill="#B99B6A"/>
  ${seohui(90,330,1.6,{mood:'smile',face:'right',pose:'up',still:true})}${khitan(320,330,1.6,{mood:'o',face:'left',pose:'hold',still:true})}
  <rect x="120" y="226" width="160" height="22" rx="4" fill="#8A5A3C" ${sw()}/><path d="M140 248 V290 M260 248 V290" stroke="#8A5A3C" stroke-width="8"/>
  <rect x="180" y="208" width="40" height="18" fill="#FFFDF6" ${sw(1.2)}/>
  ${T(200,110,'길을 열면 친구가 되겠소',18,K.red)}`,'#E6CFA4'));

/* 강감찬 1: 별똥별이 떨어지는 밤 */
redraw('gangamchan',1,()=>SVn(`${stars(40,170)}
  <path d="M60 30 Q160 90 250 168" fill="none" stroke="#FFE9A6" stroke-width="10" stroke-linecap="round" opacity=".5"/><path d="M80 40 Q170 96 250 168" fill="none" stroke="#FFF8DC" stroke-width="4" stroke-linecap="round"/>${star(256,172,18)}
  ${ridge(200,'#2E3A5A',30,2)}<path d="M-6 240 Q200 226 406 240 L406 290 L-6 290Z" fill="#3A4466"/>
  ${hut(250,232)}<rect x="242" y="210" width="16" height="12" fill="#FFD27A"/>${tree(80,244,1,'pine')}${tree(350,244,.9,'pine')}`,'url(#rh6)',sky('rh6','#141C3A','#3A4A78')));

/* 강감찬 6: 둑이 터지고 쏟아지는 강물 */
redraw('gangamchan',6,()=>SVn(`${ridge(120,'#C9D6DE',40,3)}
  <path d="M-6 290 L-6 150 Q60 140 120 150 L406 230 L406 290Z" fill="#4F8DB5"/>
  ${[...Array(10)].map((_,k)=>`<path d="M${-10+k*20} ${140+k*10} q40 10 80 30" fill="none" stroke="#FFFFFF" stroke-width="5" stroke-linecap="round" opacity=".85"/>`).join('')}
  ${[...Array(6)].map((_,k)=>`<circle cx="${30+k*30}" cy="${150+k*8}" r="${8+k%3*3}" fill="#FFFFFF" opacity=".7"/>`).join('')}
  ${[220,260,300,340].map((x,k)=>khitan(x,230+k*8,.42,{pose:'up',mood:'o',face:'left'})).join('')}
  <path d="M406 290 L406 200 Q370 196 340 240 L330 290Z" fill="#9FC48A"/>
  ${T(270,70,'콸콸콸!',30,K.red)}`,'url(#rh7)',sky('rh7','#D7E3EA','#EEF2F4')));

/* 일연 3: 불타는 구층탑, 밤 */
redraw('iryeon',3,()=>SVn(`<rect x="-6" y="-6" width="412" height="292" fill="#3A2028"/>${[0,1,2].map(k=>`<circle cx="${200+k*40-40}" cy="${80-k*20}" r="${60+k*10}" fill="#5A5560" opacity=".35"/>`).join('')}
  ${pagoda(200,250,.9,true)}<circle cx="200" cy="160" r="150" fill="#F7B640" opacity=".12"/>
  <path d="M-6 250 Q200 240 406 250 L406 290 L-6 290Z" fill="#2E1E22"/>
  ${backView(60,320,1.1,{robe:'#C9C2B4'})}
  ${T(320,60,'안 돼…',24,'#F6F0D6')}`,'#3A2028'));

/* 일연 6: 등불 아래 책을 마무리하는 노스님 */
redraw('iryeon',6,()=>SVn(`<rect x="-6" y="-6" width="412" height="292" fill="#4A3A2E"/><rect x="250" y="30" width="120" height="110" fill="#2B2440" ${sw()}/>${moon(310,80,16)}<path d="M310 30 V140 M250 85 H370" stroke="#8A5A3C" stroke-width="5"/>
  <path d="M-6 230 H406 V290 H-6Z" fill="#6A5240"/>
  ${candle(70,236,1.3)}<circle cx="70" cy="190" r="190" fill="url(#candleG)" opacity=".45"/>
  ${il(190,340,1.6,{pose:'hold',mood:'smile',face:'left',item:openBook,still:true})}
  ${[0,1,2].map(k=>`<rect x="${270+k*8}" y="${236-k*12}" width="90" height="12" rx="2" fill="${['#C9473B','#5E7FA8','#B8862F'][k]}" ${sw(1.2)}/>`).join('')}`,'#4A3A2E',candleDef));

/* 최무선 3: 붐비는 항구에서 상인에게 묻는 최무선 */
redraw('choemuseon',3,()=>SVn(`<path d="M-6 130 Q200 120 406 130 L406 290 L-6 290Z" fill="#5B9BC2"/>${waves(150,10)}
  ${bigShip(80,170,.55,'#8A5A3C')}${bigShip(200,160,.4,'#5A5560')}${bigShip(330,176,.6,'#8A5A3C')}
  <path d="M-6 290 L-6 214 Q200 204 406 214 L406 290Z" fill="#C9B48A" ${sw()}/>
  ${riceSack(40,250,.8)}${riceSack(70,256,.7)}
  ${merchant(300,320,1.4,{mood:'o',face:'left',pose:'hold'})}${cm(130,330,1.5,{mood:'smile',face:'right',pose:'up'})}
  ${T(200,70,'화약 만드는 법을 아시오?',18,K.red)}`,'url(#rh8)',sky('rh8','#CFE7F2','#F6EAD0')));

/* 최무선 7: 진포 앞바다, 화포 연기 */
redraw('choemuseon',7,()=>SVn(`<path d="M-6 140 Q200 130 406 140 L406 290 L-6 290Z" fill="#3F7EA8"/>${waves(160,14)}
  ${[260,310,360,290,340].map((x,k)=>bigShip(x,160+(k>2?30:0),.35,'#3A322B')).join('')}
  ${[0,1,2,3].map(k=>`<circle cx="${180+k*30}" cy="${170-k*14}" r="${18+k*6}" fill="#E6E1D6" opacity=".8"/>`).join('')}${firework(270,150,22,'#F7B640')}
  <g transform="rotate(4 110 230)">${bigShip(110,240,1.2,'#8A5A3C')}</g>
  ${cm(158,232,.42,{pose:'up',mood:'joy',face:'right'})}
  ${T(130,60,'펑! 펑!',30,K.red)}`,'url(#rh9)',sky('rh9','#E6C9A0','#CFE0EA')));

/* 문익점 1: 찬바람 부는 겨울 마을, 떠는 사람들 */
redraw('munikjeom',1,()=>SVn(`${snowFX(60)}${ridge(150,'#C9D6DE',40,2)}<path d="M-6 220 Q200 206 406 222 L406 290 L-6 290Z" fill="#EEF2F6" ${sw()}/>
  ${hut(320,226)}${hut(380,236)}
  ${[0,1,2,3,4].map(k=>`<path d="M${-20+k*20} ${80+k*34} q60 -14 120 0 q40 10 70 -4" fill="none" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" opacity=".85"/>`).join('')}
  ${hero(150,320,1.3,{robe:'#EAE4D6',hair:'braid',pose:'hold',mood:'sad',face:'right'})}${hero(250,300,1.0,{robe:'#D8D2C2',hat:'band',bandColor:'#8A8580',pose:'hold',mood:'sad',face:'left'})}
  ${T(260,70,'으슬으슬 추워…',20,'#3F6FA8')}`,'url(#rh10)',sky('rh10','#B9C6D2','#E6ECF0')));

/* 문익점 4: 단 한 그루 살아남은 싹, 아주 가까이 */
redraw('munikjeom',4,()=>SVn(`<path d="M-6 200 Q200 186 406 200 L406 290 L-6 290Z" fill="#8A6A4A" ${sw()}/>
  ${[40,100,300,360].map(x=>`<path d="M${x} 214 q-4 -10 -10 -14 M${x} 214 q4 -10 10 -12" fill="none" stroke="#A89A6A" stroke-width="3" stroke-linecap="round"/>`).join('')}
  <path d="M200 214 Q196 160 204 110" fill="none" stroke="#5E9C5A" stroke-width="7" stroke-linecap="round"/>
  <path d="M202 140 Q160 120 150 90 Q190 96 202 140Z M204 120 Q250 96 262 70 Q220 74 204 120Z" fill="#7FBF6A" ${sw(1.8)}/>
  ${rays(204,110,'#FFF2C4',9,200,.35)}
  ${mun(70,320,1.3,{mood:'joy',face:'right'})}${jeong(340,320,1.3,{mood:'joy',face:'left'})}
  ${T(200,50,'딱 한 그루!',22,K.red)}`,'url(#rh11)',sky('rh11','#F2E6C4','#E6F0D6')));

/* 황희 2: 넓은 밭, 두 마리 소와 농부 */
redraw('hwanghui',2,()=>SVn(`${ridge(140,'#A9CDB4',30,2)}
  <path d="M-6 170 Q200 160 406 170 L406 290 L-6 290Z" fill="#B99B6A"/>${[...Array(8)].map((_,k)=>`<path d="M-6 ${180+k*14} Q200 ${170+k*16} 406 ${180+k*14}" fill="none" stroke="#8A6A4A" stroke-width="2"/>`).join('')}
  ${ox(230,238,.7,'#D9A441')}${ox(310,242,.7,'#3A322B')}<path d="M196 204 L346 208" stroke="${K.wood}" stroke-width="6" stroke-linecap="round"/><path d="M196 204 L160 236 M150 226 L134 206" stroke="${K.wood}" stroke-width="5" stroke-linecap="round"/><path d="M156 236 l14 8 l-18 2Z" fill="#7D7F88" ${sw(1.2)}/>
  ${hero(130,250,.62,{robe:'#D6CDB4',skin:'#EDBF95',hat:'band',bandColor:'#FFFDF6',arms:{L:[-10,-40],R:[30,-46]},mood:'smile',face:'right'})}
  ${hh(60,300,1.15,{mood:'o',face:'right',arms:'pointR'})}
  ${T(190,80,'어느 소가 더 잘하오?',20,K.red)}`,'url(#rh12)',sky('rh12','#CFE7F2','#F6EAD0')));

/* 황희 6: 껄껄 웃는 황희, 가까이 */
redraw('hwanghui',6,()=>SVn(`${room()}
  ${hh(200,380,2.2,{mood:'joy',face:'front',pose:'up',still:true})}
  ${hero(60,290,.8,{body:'dress',hair:'bun',mood:'o',face:'right'})}
  ${T(200,60,'껄껄, 부인 말도 옳소!',22,K.red)}`,'#EADCC0'));

/* 장영실 2: 고장 난 수레를 고치는 손, 가까이 */
redraw('yeongsil',2,()=>SVn(`${yard(200)}
  ${g(210,250,2.2,toyCart)}${wheel(150,236,34)}
  ${g(290,250,1.5,hammer)}
  ${ysKid(110,330,1.6,{pose:'hold',mood:'joy',face:'right'})}
  ${[0,1,2].map(k=>`<path d="M${170+k*12} ${180-k*10} l6 -10" stroke="${K.gold}" stroke-width="3" stroke-linecap="round"/>`).join('')}
  ${T(290,70,'요술 손이야!',22,K.red)}`,'#D9CCAE'));

/* 장영실 5: 밤 성문, 꾸벅꾸벅 조는 시간 아저씨 */
redraw('yeongsil',5,()=>SVn(`${stars(30,120)}${moon(330,60,22)}
  ${gate(200,200,1.6)}<path d="M-6 200 H406 V290 H-6Z" fill="#4A4A5E"/>
  ${guard(150,280,1.3,{mood:'sleep'})}
  ${[0,1,2].map(k=>`<text x="${200+k*18}" y="${170-k*18}" font-size="${16+k*4}" fill="#F6F0D6" font-weight="700">Z</text>`).join('')}
  ${T(260,250,'지금 몇 시지?',18,'#F6F0D6')}`,'url(#rh13)',sky('rh13','#1F2748','#3E4A6A')));
})();
