/* 12권 신사임당: 풀벌레를 사랑한 아이 */
(()=>{
setScene('joseon','summer');
const LEG=['전해 오는 이야기'];
const girl=(x,y,s,o={})=>hero(x,y,s,{body:'dress',top:'#FFF3C4',skirt:'#E98FA0',hair:'braid',ribbon:'#C9473B',...o});
const saim=(x,y,s,o={})=>hero(x,y,s,{body:'dress',top:'#F6E2A6',skirt:'#5E9C8A',hair:'bun',...o});
const bfly=(x,y,s=1,c='#F2A24B')=>g(x,y,s,`<path d="M0 0 Q-20 -22 -24 -4 Q-20 8 0 0Z M0 0 Q20 -22 24 -4 Q20 8 0 0Z" fill="${c}" ${sw(1.4)}/><path d="M0 0 Q-14 14 -10 20 Q-2 14 0 0Z M0 0 Q14 14 10 20 Q2 14 0 0Z" fill="${c}" opacity=".8" ${sw(1.2)}/><path d="M0 -8 V8" ${sw(2.4)}/><path d="M0 -8 Q-4 -16 -8 -18 M0 -8 Q4 -16 8 -18" fill="none" ${sw(1.2)}/>`);
const hopper=(x,y,s=1)=>g(x,y,s,`<ellipse cx="0" cy="0" rx="22" ry="6" fill="#7CB66E" ${sw(1.4)}/><path d="M8 0 L24 -14 L30 4" fill="none" stroke="#5E8C4A" stroke-width="2.4" stroke-linejoin="round"/><circle cx="-20" cy="-2" r="2" fill="${L}"/><path d="M-22 -4 Q-30 -16 -40 -18" fill="none" ${sw(1.2)}/>`);
const cucumber=(x,y,s=1)=>g(x,y,s,`<path d="M0 0 Q-24 -8 -30 8 Q-20 20 6 12Z" fill="#6FA35A" ${sw(1.4)}/><path d="M6 12 Q20 4 30 -14" fill="none" stroke="#6B8A4A" stroke-width="2.4"/><ellipse cx="24" cy="-18" rx="9" ry="5" fill="#7CB66E" ${sw(1.2)}/><circle cx="-6" cy="-6" r="5" fill="#F6D24A" ${sw(1)}/>`);
const hen=(x,y,s=1)=>g(x,y,s,`<ellipse cx="0" cy="-20" rx="24" ry="18" fill="#FFFDF6" ${sw()}/><path d="M-22 -26 Q-34 -40 -26 -46 Q-20 -34 -16 -30Z" fill="#FFFDF6" ${sw(1.6)}/><circle cx="18" cy="-38" r="12" fill="#FFFDF6" ${sw()}/><path d="M14 -50 q2 -8 6 -2 q4 -6 6 2Z" fill="#E0574A" ${sw(1.2)}/><path d="M30 -38 L40 -34 L30 -32Z" fill="${K.gold}" ${sw(1.2)}/><circle cx="20" cy="-40" r="2" fill="${L}"/><path d="M-6 -2 V6 M6 -2 V6" ${sw(2.4)}/>`);
const paper=(x,y,w,h,inner)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="#FBF4E2" ${sw()}/>${inner}`;
const coin5=`<rect x="-34" y="-50" width="68" height="34" rx="3" fill="#F2C14E" ${sw()}/><circle cx="12" cy="-33" r="10" fill="#F6E2A6" ${sw(1.2)}/><text x="-14" y="-28" text-anchor="middle" font-family="Jua,sans-serif" font-size="10" fill="${L}">50000</text>`;
const P=[
 {kind:'cover', svg:coverBase('sa','풀벌레 그림',`${bfly(70,200,1)}${hopper(336,240,1)}`,saim(200,264,1.0,{pose:'hold',mood:'joy',item:scrollPic})),
  text:`<span class="big">신사임당과 살아 있는 그림</span><br>위인 그림책 {no}권`},
 {svg:SV(`${cloud(300,40,.7)}${hills('#A9CDB4','#C7D88F',196,220)}
  ${[[30,190],[70,160],[350,170],[380,200]].map(([x,y])=>`<path d="M${x} 214 V${y}" stroke="#2F6B4E" stroke-width="5"/><path d="M${x} ${y+10} l-10 -6 M${x} ${y+24} l10 -6" stroke="#4E8A5E" stroke-width="3"/>`).join('')}
  ${bfly(270,140,1.2)}${bfly(310,110,.9,'#E98FA0')}${hopper(240,236,1)}
  ${girl(150,268,.92,{pose:'up',mood:'joy'})}`,'url(#sa1)',sky('sa1','#CFE7F2','#F6EAD0')),
  text:`옛날 조선이라는 나라의 강릉에 한 여자아이가 살았어요. 아이는 마당의 꽃과 나비, 풀벌레를 한참씩 들여다보았어요.`},
 {svg:SV(`${room()}
  ${paper(220,60,140,100,`<path d="M232 150 L262 90 L282 120 L304 80 L348 150Z" fill="#A9C2B4"/><path d="M240 150 Q290 130 348 150" fill="none" stroke="#7FA6A0" stroke-width="3"/>`)}
  ${girl(130,268,.92,{pose:'hold',mood:'smile',item:brush})}`,'#EADCC0'),
  text:`아이는 그림 그리기를 좋아했어요. 일곱 살 무렵에는 유명한 화가의 그림을 보고 똑같이 따라 그렸대요. 이 아이가 바로 신사임당이에요.`},
 {svg:SV(`${cloud(80,40,.7)}${hills('#A9CDB4','#C7D88F',196,220)}
  ${paper(40,60,320,140,'')}
  <g id="tBfly">${bfly(110,110,1.4)}</g>
  <g id="tHop">${hopper(200,170,1.4)}</g>
  <g id="tCuc">${cucumber(300,140,1.4)}</g>`,'url(#sa3)',sky('sa3','#CFE7F2','#F6EAD0')),
  taps:[{label:'나비',el:'tBfly',say:'팔랑팔랑, 날개 무늬까지 꼼꼼히 그렸어요.'},{label:'방아깨비',el:'tHop',say:'콩콩 뛰어오를 것만 같아요.'},{label:'오이',el:'tCuc',say:'오이꽃까지 그렸어요. 노란 꽃이에요.'}],tapHint:'그림 속 친구들을 눌러 보세요.',
  text:`신사임당은 풀과 벌레를 꼼꼼히 살펴보고 그렸어요. 나비의 날개 무늬, 방아깨비의 가느다란 다리까지 진짜처럼 그렸어요.`},
 {chips:LEG, svg:SV(`<circle cx="340" cy="46" r="22" fill="${K.gold}" ${sw()}/>
  ${yard(200)}
  ${paper(60,170,150,80,`${hopper(110,214,1)}${bfly(170,200,.8)}`)}
  ${hen(250,226,1.2)}
  ${T(200,120,'콕콕!',24,K.red)}
  ${saim(350,268,.7,{mood:'o'})}`,'url(#sa4)',sky('sa4','#CFE7F2','#F6EAD0')),
  text:`하루는 그림을 마당에 펴서 말리고 있었어요. 그런데 닭이 달려와 그림 속 벌레를 콕콕 쪼았대요! 진짜 벌레인 줄 알았던 거예요.`},
 {chips:LEG, svg:SV(`${room()}
  ${hero(110,268,.86,{body:'dress',hair:'bun',top:'#FFFDF6',skirt:'#7FB3C8',mood:'sad',tear:true})}
  ${saim(270,268,.9,{pose:'hold',mood:'smile',item:brush})}
  <ellipse cx="110" cy="236" rx="10" ry="6" fill="#8A6A44" opacity=".7"/>`,'#EADCC0'),
  text:`잔칫집에서 한 부인이 빌려 입은 치마에 얼룩이 묻어 울고 있었어요. 신사임당은 그 치마에 포도 그림을 그려 주었어요. 얼룩이 멋진 그림이 되었어요.`},
 {chips:LEG, svg:SV(`${room()}
  ${hero(150,268,.92,{body:'dress',hair:'bun',top:'#FFFDF6',skirt:'#7FB3C8',mood:'joy',pose:'up'})}
  ${[[130,236],[142,236],[136,248],[148,248],[142,258]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="5" fill="#7A4E9A" ${sw(1)}/>`).join('')}
  ${saim(280,268,.9,{mood:'joy'})}`,'#EADCC0'),
  text:`그 치마를 팔아서 부인은 빌린 값을 갚을 수 있었대요.`},
 {svg:SV(`${room()}
  ${saim(140,268,.9,{mood:'joy'})}${hero(250,272,.7,{robe:'#D9E6C8',hair:'braid',pose:'hold',mood:'smile',item:bigBook('책','#5E9C8A')})}${kid(330,274,.6,{mood:'joy'})}`,'#EADCC0'),
  text:`신사임당은 아이들에게 그림과 글을 가르쳤어요. 그중 한 아들은 훗날 훌륭한 학자가 된 율곡 이이예요.`},
 {svg:SV(`<rect x="34" y="34" width="104" height="86" rx="4" fill="#BFE0F0" stroke="#FFFFFF" stroke-width="7"/>${cloud(80,70,.6)}
  <rect x="-6" y="216" width="412" height="70" fill="#E9CFA4"/><ellipse cx="190" cy="260" rx="124" ry="18" fill="#BFD7A8" ${sw()}/>
  ${kid(190,266,1.0,{pose:'hold',mood:'joy',item:coin5})}
  ${bfly(320,100,1)}${star(260,150,7,'#F28C7C')}`,'url(#sa8)',sky('sa8','#E8F2F8','#DCEAF2')),
  text:`오만 원짜리 지폐에서 신사임당의 얼굴과 그림을 찾아볼 수 있어요. 강릉 오죽헌에 가면 신사임당이 살던 집도 볼 수 있어요.`},
 {kind:'end', svg:endBase('sa',`${bfly(160,110,2.4)}${hopper(250,190,2)}`,girl(64,276,.5,{pose:'up',mood:'joy'}),saim(338,276,.55,{pose:'up',mood:'joy'})),
  text:`풀벌레를 사랑한 아이가 남긴 선물,<br>자세히 들여다보는 눈.<br>오늘도 우리 곁에 있어요.<br><span class="big">끝</span>`},
 {kind:'talk'}
];
BOOKS.push({id:'saimdang',era:'joseon',title:'신사임당과 살아 있는 그림',who:'신사임당',teaser:'풀벌레를 진짜처럼 그려서 닭이 쪼았다는 신사임당 이야기예요.',pages:P,
 talk:{three:['그림 속 나비를 찾아볼까?','닭처럼 "콕콕" 쪼는 흉내!','오늘 본 벌레를 그려 볼까?'],
  five:['닭은 왜 그림을 쪼았을까?','얼룩진 치마를 어떻게 도와주었지?','무언가를 자세히 들여다본 적 있어?'],
  note:'신사임당(1504~1551)은 강릉 오죽헌에서 태어난 화가로, 풀과 벌레를 그린 초충도로 유명합니다. 닭이 그림을 쪼았다는 이야기와 치마에 포도를 그려 준 이야기는 전해 오는 일화입니다. 아들 율곡 이이는 조선의 대표 학자이며, 2009년부터 오만 원권에 신사임당의 초상이 실렸습니다.'}});
})();
