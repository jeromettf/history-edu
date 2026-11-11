/* 9권 김홍도: 그림 그리기를 좋아한 아이 */
(()=>{
const hdKid=(x,y,s,o={})=>hero(x,y,s,{robe:'#D9E6C8',hair:'braid',belt:'#5E9C8A',ribbon:'#5E9C8A',...o});
const hongdo=(x,y,s,o={})=>hero(x,y,s,{robe:'#D9E6C8',hat:'gat',belt:'#5E9C8A',collar:'#5E9C8A',...o});
const teacher=(x,y,s,o={})=>hero(x,y,s,{robe:'#EDE9E0',hat:'gat',beard:'#D9D3C8',belt:'#8C7350',...o});
const jeongjo=(x,y,s,o={})=>king(x,y,s,o);
const stickDraw=`<path d="M30 -28 L56 -2" stroke="${K.wood}" stroke-width="4" stroke-linecap="round"/>`;
const frame=(x,y,w,h,inner)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="#8C6A48" ${sw()}/><rect x="${x+6}" y="${y+6}" width="${w-12}" height="${h-12}" fill="#FBF4E2"/>${inner}`;
const wrestlers=(x,y,s)=>g(x,y,s,`${hero(-22,0,.8,{robe:'#EFE6D2',skin:'#EDBF95',pose:'hold',mood:'o'})}${hero(22,0,.8,{robe:'#E9DFC8',skin:'#EDBF95',pose:'hold',mood:'smile'})}<path d="M-30 -40 Q0 -54 30 -40" fill="none" stroke="#EFE6D2" stroke-width="8" stroke-linecap="round"/>`);
const P=[
 {kind:'cover', svg:coverBase('m','그림 그리는 아이',`${frame(30,196,60,46,`<circle cx="50" cy="214" r="6" fill="${K.gold}"/><path d="M40 236 Q56 214 80 236" fill="none" stroke="#5E9C5A" stroke-width="3"/>`)}`,hongdo(210,264,1.0,{pose:'hold',mood:'joy',item:scrollPic})),
  text:`<span class="big">김홍도와 웃음 가득 그림</span><br>위인 그림책 {no}권`},
 {chips:['이해를 돕는 장면'], svg:SV(`${cloud(300,40,.7)}${hills('#A9CDB4','#D9CCAE',196,214)}
  ${hdKid(150,266,.92,{pose:'hold',mood:'joy',item:stickDraw})}
  <path d="M210 258 Q230 240 250 258 M262 250 a10 10 0 1 0 0.1 0 M290 260 l10 -18 l10 18" fill="none" stroke="#8A6A44" stroke-width="3" stroke-linecap="round"/>
  ${star(250,200,8)}`,'url(#m1)',sky('m1','#CFE7F2','#F6EAD0')),
  text:`이순신 장군이 바다를 지키고 백오십 년쯤 지난 조선이에요. 홍도라는 아이는 그림 그리기를 세상에서 제일 좋아했어요. 땅바닥에도 종이에도 쓱쓱 그렸지요.`},
 {svg:SV(`<rect x="-6" y="-6" width="412" height="230" fill="#EADCC0"/><rect x="-6" y="216" width="412" height="70" fill="#DDB16A"/>
  ${teacher(110,268,.9,{mood:'o'})}
  ${hdKid(280,268,.86,{pose:'hold',mood:'smile',item:scrollPic})}
  ${T(110,90,'오호!',22,K.red)}`,'#EADCC0'),
  text:`홍도는 강세황이라는 훌륭한 선생님께 그림을 배웠어요. 선생님은 홍도의 그림 솜씨에 깜짝 놀라며 아낌없이 칭찬해 주었대요.`},
 {svg:SV(`<rect x="-6" y="-6" width="412" height="230" fill="#E8D3B0"/>
  <rect x="14" y="-6" width="22" height="236" fill="#B5473A" ${sw()}/><rect x="364" y="-6" width="22" height="236" fill="#B5473A" ${sw()}/>
  <rect x="-6" y="222" width="412" height="64" fill="#A87E52"/>
  ${jeongjo(126,272,.9,{mood:'joy'})}${hongdo(276,272,.9,{pose:'hold',mood:'smile',item:scrollPic})}
  ${star(200,70,9)}`,'#E8D3B0'),
  text:`어른이 된 김홍도는 궁궐의 화가가 되었어요. 정조 임금님은 김홍도를 무척 아껴서 중요한 그림을 여러 번 맡겼지요.`},
 {svg:SV(`<rect x="-6" y="-6" width="412" height="230" fill="#EFE3C8"/><rect x="-6" y="216" width="412" height="70" fill="#DDB16A"/>
  ${frame(40,40,90,110,`<path d="M52 140 L76 80 L92 110 L106 70 L120 140Z" fill="#94BFA6"/>`)}
  ${frame(150,40,90,110,`<path d="M195 140 V80" stroke="#6B4A33" stroke-width="3"/><circle cx="185" cy="84" r="6" fill="#EE98A6"/><circle cx="205" cy="96" r="6" fill="#EE98A6"/><circle cx="192" cy="110" r="5" fill="#EE98A6"/>`)}
  ${frame(260,40,90,110,`<ellipse cx="305" cy="100" rx="16" ry="10" fill="#C9A15A"/><path d="M318 96 l10 -4" ${sw(1.6)}/>`)}
  ${hongdo(200,270,.86,{mood:'o'})}${T(300,200,'?',30,K.red)}`,'#EFE3C8'),
  text:`그런데 그때 그림이라고 하면 대부분 산과 물, 꽃과 새를 그렸어요. 보통 사람들이 일하고 노는 모습은 그림에 잘 나오지 않았지요.`},
 {svg:SV(`${cloud(80,40,.7)}${hills('#A9CDB4','#D9CCAE',196,214)}
  <rect x="250" y="160" width="110" height="10" fill="#C9473B" ${sw()}/><path d="M256 170 V214 M354 170 V214" ${sw(3)}/>
  ${hero(300,262,.66,{robe:'#EFE6D2',skin:'#EDBF95',mood:'joy'})}${hero(220,266,.62,{body:'dress',hair:'bun',mood:'joy'})}
  ${hongdo(100,268,.86,{pose:'hold',mood:'joy',item:scrollPic})}
  ${T(130,100,'멋진걸!',20,K.red)}`,'url(#m5)',sky('m5','#CFE7F2','#F6EAD0')),
  text:`김홍도는 생각했어요. "사람들이 살아가는 모습도 정말 멋진걸!" 그래서 장터와 마을로 나가 사람들을 그리기 시작했어요.`},
 {svg:SV(`<path d="M-6 120 L406 120 L406 286 L-6 286Z" fill="#E6D3A6"/>
  <ellipse cx="200" cy="200" rx="160" ry="60" fill="none" stroke="#C9B48A" stroke-width="3" stroke-dasharray="4 6"/>
  ${hero(60,180,.5,{robe:'#E9DFC8',mood:'joy'})}${hero(110,166,.5,{robe:'#C9D8E8',hat:'gat',mood:'o'})}${hero(290,166,.5,{body:'dress',hair:'bun',mood:'joy'})}${hero(340,180,.5,{robe:'#E9DFC8',hat:'gat',mood:'joy'})}
  ${wrestlers(200,250,1.0)}
  ${hdKid(350,270,.58,{pose:'hold',mood:'smile',item:`<rect x="-26" y="-40" width="52" height="14" rx="3" fill="#C9A15A" ${sw()}/>`})}
  ${hero(56,272,.58,{robe:'#EFE6D2',mood:'joy',pose:'up'})}`,'#E6D3A6'),
  text:`씨름하는 아저씨들, 빙 둘러앉아 구경하는 사람들, 엿을 파는 아이까지 쓱쓱 그렸어요. 그림 속 사람들은 모두 살아 움직이는 것 같았지요.`},
 {svg:SV(`<rect x="-6" y="-6" width="412" height="230" fill="#EADCC0"/><rect x="-6" y="216" width="412" height="70" fill="#DDB16A"/>
  ${teacher(200,250,.8,{mood:'smile'})}
  ${hdKid(110,272,.7,{mood:'sad',tear:true})}
  ${hero(290,272,.66,{robe:'#E9DFC8',hair:'braid',mood:'joy'})}${hero(350,272,.62,{robe:'#C9D8E8',hair:'braid',mood:'joy'})}
  ${T(320,150,'키득키득',16,K.red)}`,'#EADCC0'),
  text:`글방에서 훈장님께 혼나서 훌쩍이는 아이와, 그 모습을 보고 키득키득 웃는 친구들도 그렸어요. 보는 사람마다 웃음이 터졌대요.`},
 {svg:SV(`<rect x="-6" y="-6" width="412" height="230" fill="#E9EEF2"/><rect x="-6" y="216" width="412" height="70" fill="#C9C2B4"/>
  ${frame(40,40,100,80,`<ellipse cx="90" cy="96" rx="24" ry="10" fill="none" stroke="#8A6A44" stroke-width="2"/><circle cx="80" cy="84" r="5" fill="${SK}"/><circle cx="100" cy="84" r="5" fill="${SK}"/>`)}
  ${frame(260,40,100,80,`<circle cx="292" cy="80" r="6" fill="${SK}"/><circle cx="310" cy="90" r="6" fill="${SK}"/><circle cx="328" cy="82" r="6" fill="${SK}"/>`)}
  ${kid(200,268,1.0,{pose:'up',mood:'joy'})}`,'#E9EEF2'),
  text:`김홍도의 그림 덕분에 우리는 옛날 사람들이 어떻게 놀고 일했는지 알 수 있어요. 그 그림들은 지금 국립중앙박물관에 소중히 보관되어 있어요.`},
 {kind:'end', svg:endBase('m',`${g(200,186,2.2,scrollPic)}`,hdKid(64,276,.5,{pose:'up',mood:'joy'}),hongdo(338,276,.55,{pose:'up',mood:'joy'})),
  text:`그림 그리기를 좋아한 아이가 남긴 선물,<br>옛사람들의 웃음.<br>오늘도 우리 곁에 있어요.<br><span class="big">끝</span>`},
 {kind:'talk'}
];
BOOKS.push({id:'kimhongdo',no:9,era:'joseon',title:'김홍도와 웃음 가득 그림',who:'김홍도',pages:P,
 talk:{three:['씨름하는 아저씨들은 몇 명이지?','훌쩍이는 아이를 찾아볼까?','오늘 본 것을 그림으로 그려 볼까?'],
  five:['김홍도는 왜 보통 사람들을 그렸을까?','글방 아이는 왜 울고 있을까?','우리 가족의 하루를 그린다면 무엇을 그릴래?'],
  friend:{title:'다음 이야기',name:'유관순',text:'김홍도가 살던 때에서 백 년도 더 지나, 나라를 되찾으려고 용기를 낸 소녀 유관순이 있었어요.',go:'yugwansun'},
  note:'김홍도(1745~1806년 무렵, 호는 단원)는 정조 때 활동한 궁중 화원으로, 스승 강세황에게 그림을 배웠습니다. 이 책의 씨름과 글방 장면은 김홍도의 풍속화를 떠올리게 하도록 새로 그린 그림이며, 실제 작품은 국립중앙박물관의 『단원 풍속도첩』(보물)에서 볼 수 있습니다. 어린 시절 땅바닥에 그림을 그리는 장면은 이야기를 위해 꾸민 것입니다.'}});
})();
