/* 17권 김정호: 지도를 좋아한 사람 */
(()=>{
const LEG=['전해 오는 이야기'];
const jh=(x,y,s,o={})=>hero(x,y,s,{robe:'#B9A475',hat:'gat',belt:'#5E9C8A',collar:'#FFF8EC',...o});
const jhKid=(x,y,s,o={})=>hero(x,y,s,{robe:'#C9D8B4',hair:'braid',belt:'#5E9C8A',ribbon:'#5E9C8A',...o});
const traveler=(x,y,s,o={})=>hero(x,y,s,{robe:'#D6CDB4',skin:'#EDBF95',hat:'gat',belt:'#8C7350',...o});
const mapArt=(x,y,w,h,o={})=>{const id=o.id||'';return `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="#F6EBCB" ${sw()}/>
<g ${id?`id="${id}M"`:''}><path d="M${x+w*.08} ${y+h*.9} L${x+w*.22} ${y+h*.5} L${x+w*.34} ${y+h*.74} L${x+w*.46} ${y+h*.3} L${x+w*.6} ${y+h*.7}" fill="none" stroke="#5E8C5A" stroke-width="${o.big?7:4}" stroke-linejoin="round" stroke-linecap="round"/></g>
<g ${id?`id="${id}R"`:''}><path d="M${x+w*.7} ${y+h*.05} Q${x+w*.62} ${y+h*.4} ${x+w*.78} ${y+h*.6} Q${x+w*.9} ${y+h*.8} ${x+w*.84} ${y+h*.98}" fill="none" stroke="#4F8DB5" stroke-width="${o.big?6:3}" stroke-linecap="round"/><path d="M${x+w*.73} ${y+h*.05} Q${x+w*.65} ${y+h*.4} ${x+w*.81} ${y+h*.6} Q${x+w*.93} ${y+h*.8} ${x+w*.87} ${y+h*.98}" fill="none" stroke="#4F8DB5" stroke-width="${o.big?3:1.5}" stroke-linecap="round"/></g>
<g ${id?`id="${id}D"`:''}><path d="M${x+w*.05} ${y+h*.2} L${x+w*.95} ${y+h*.36}" stroke="#C9473B" stroke-width="${o.big?3:2}"/>${[.15,.3,.45,.6,.75,.9].map(t=>`<circle cx="${x+w*(.05+.9*t)}" cy="${y+h*(.2+.16*t)}" r="${o.big?4:2.4}" fill="#C9473B"/>`).join('')}</g>
<circle cx="${x+w*.48}" cy="${y+h*.52}" r="${o.big?9:5}" fill="#FFFDF6" stroke="#C9473B" stroke-width="2.4"/>`};
const foldMap=`<rect x="-30" y="-56" width="60" height="44" fill="#F6EBCB" ${sw()}/><path d="M-10 -56 V-12 M10 -56 V-12" stroke="#C9B48A" stroke-width="1.6"/><path d="M-24 -20 L-16 -40 L-8 -28 L0 -46" fill="none" stroke="#5E8C5A" stroke-width="2"/>`;
const woodblock=(x,y)=>`<rect x="${x-50}" y="${y-30}" width="100" height="30" fill="#A87E52" ${sw()}/><path d="M${x-40} ${y-18} l10 -6 l10 6 l10 -6 l10 6 M${x+4} ${y-12} h30" fill="none" stroke="#6B4A33" stroke-width="2.4"/>`;
const phone=`<rect x="-16" y="-62" width="32" height="54" rx="5" fill="#3A3A44" ${sw()}/><rect x="-12" y="-56" width="24" height="40" fill="#CFE6D8"/><path d="M-8 -22 L-2 -40 L8 -30" fill="none" stroke="#C9473B" stroke-width="2"/><circle cx="8" cy="-30" r="2.4" fill="#C9473B"/>`;
const P=[
 {kind:'cover', svg:coverBase('jh','우리 땅 지도',`${mapArt(30,180,70,60)}`,jh(220,264,1.0,{pose:'hold',mood:'joy',item:foldMap})),
  text:`<span class="big">김정호와 대동여지도</span><br>위인 그림책 {no}권`},
 {svg:SV(`<path d="M-6 200 Q60 120 130 160 Q200 90 280 150 Q340 110 406 170 L406 286 L-6 286Z" fill="#94BFA6" ${sw()}/>
  <path d="M100 286 Q160 230 140 200 Q120 170 200 150 M200 150 Q280 140 300 110" fill="none" stroke="#E6D3A6" stroke-width="10" stroke-linecap="round"/><path d="M200 150 Q160 120 110 120" fill="none" stroke="#E6D3A6" stroke-width="10" stroke-linecap="round"/>
  ${traveler(190,268,.86,{mood:'o'})}${T(250,100,'어느 길로 가지?',18,K.red)}`,'url(#jh1)',sky('jh1','#CFE7F2','#F6EAD0')),
  text:`김홍도가 그림을 그리던 무렵, 김정호가 태어났어요. 그때는 먼 길을 가다가 길을 잃는 사람이 많았어요. 쓸 만한 지도가 귀했거든요.`},
 {chips:LEG, svg:SV(`<rect x="-6" y="-6" width="412" height="230" fill="#EADCC0"/><rect x="-6" y="216" width="412" height="70" fill="#DDB16A"/>
  ${mapArt(220,60,140,110)}
  ${jhKid(130,268,.92,{pose:'up',mood:'joy'})}`,'#EADCC0'),
  text:`김정호는 지도를 보는 걸 무척 좋아했대요. 산은 어디 있고 강은 어디로 흐르는지, 지도만 보면 눈이 반짝반짝했지요.`},
 {svg:SV(`<rect x="-6" y="-6" width="412" height="230" fill="#EADCC0"/><rect x="-6" y="216" width="412" height="70" fill="#DDB16A"/>
  ${mapArt(40,50,100,80)}${mapArt(160,40,90,90)}${mapArt(270,56,100,74)}
  ${jh(200,268,.9,{pose:'hold',mood:'smile',item:brush})}`,'#EADCC0'),
  text:`어른이 된 김정호는 옛 지도와 책을 잔뜩 모아 꼼꼼히 비교했어요. 틀린 곳은 고치고, 빠진 곳은 채워 넣었지요.`},
 {chips:LEG, svg:SV(`${cloud(300,40,.7)}<path d="M-6 200 Q60 100 140 150 Q210 60 290 140 Q350 100 406 170 L406 286 L-6 286Z" fill="#94BFA6" ${sw()}/>
  <path d="M60 286 Q140 230 220 200 Q300 170 330 120" fill="none" stroke="#E6D3A6" stroke-width="10" stroke-linecap="round"/>
  ${jh(180,262,.86,{pose:'hold',mood:'joy',item:foldMap})}`,'url(#jh4)',sky('jh4','#CFE7F2','#F6EAD0')),
  text:`궁금한 곳은 직접 찾아가 보기도 했대요. 고개를 넘고 강을 건너며, 산과 길이 어떻게 생겼는지 눈으로 확인했지요.`},
 {chips:['1861년'], svg:SV(`<rect x="-6" y="-6" width="412" height="292" fill="#EFE3C8"/>
  ${mapArt(60,30,280,190,{big:true,id:'tMap'})}
  <rect x="-6" y="226" width="412" height="60" fill="#DDB16A"/>`,'#EFE3C8'),
  taps:[{label:'산줄기',el:'tMapM',say:'산과 산이 이어진 산줄기는 굵은 선으로 그렸어요.'},{label:'강',el:'tMapR',say:'강은 두 줄로 그렸어요. 배가 다닐 수 있는 큰 강이에요.'},{label:'길',el:'tMapD',say:'길에는 십 리마다 점을 찍어서 거리를 알 수 있게 했어요.'}],tapHint:'지도에서 산, 강, 길을 찾아볼까요?',
  text:`마침내 김정호는 커다란 지도를 완성했어요. 이름은 대동여지도예요. 산줄기는 굵은 선, 강은 두 줄, 길에는 십 리마다 점을 찍었지요.`},
 {svg:SV(`<rect x="-6" y="-6" width="412" height="292" fill="#EADCC0"/>
  <rect x="40" y="20" width="160" height="230" fill="#F6EBCB" ${sw()}/>${[0,1,2,3,4,5,6,7].map(k=>`<path d="M40 ${20+k*28.75} H200" stroke="#C9B48A" stroke-width="1.4"/>`).join('')}
  <path d="M120 20 V250" stroke="#C9B48A" stroke-width="1.4"/>
  ${kid(330,270,.9,{pose:'up',mood:'o'})}
  <path d="M240 20 V250" stroke="${L}" stroke-width="1.6" stroke-dasharray="4 4"/>${T(260,140,'3층',14)}${T(260,156,'집 높이',14)}`,'#EADCC0'),
  text:`대동여지도를 모두 펼치면 3층 집 높이만큼 커다래요! 하지만 스물두 권의 책처럼 접을 수 있어서 들고 다니기 편했어요.`},
 {svg:SV(`<rect x="-6" y="-6" width="412" height="230" fill="#EADCC0"/><rect x="-6" y="216" width="412" height="70" fill="#DDB16A"/>
  ${woodblock(130,236)}
  ${mapArt(250,120,60,46)}${mapArt(290,150,60,46)}${mapArt(326,120,60,46)}
  ${jh(140,214,.7,{pose:'hold',mood:'joy'})}
  ${T(300,90,'한 장, 두 장, 세 장',16,K.red)}`,'#EADCC0'),
  text:`김정호는 나무판에 지도를 새겨서 여러 장 찍어 냈어요. 덕분에 더 많은 사람이 지도를 가질 수 있었지요.`},
 {svg:SV(`${cloud(80,40,.7)}${hills('#A9CDB4','#C7D88F',196,220)}
  ${kid(130,266,.96,{pose:'hold',mood:'joy',item:phone})}${hero(250,266,.9,{body:'dress',hair:'bun',top:'#F2C14E',skirt:'#5B7FB8',mood:'smile'})}
  ${T(200,90,'지도 보고 찾아가자!',18,K.red)}`,'url(#jh8)',sky('jh8','#E8F2F8','#F2EED8')),
  text:`지금 우리는 휴대폰 지도로 길을 찾아요. 김정호처럼 땅을 꼼꼼히 살핀 사람들이 있었기에 길 찾기가 쉬워졌어요.`},
 {kind:'end', svg:endBase('jh',`${mapArt(100,60,200,140,{big:true})}`,jhKid(64,276,.5,{pose:'up',mood:'joy'}),jh(338,276,.55,{pose:'up',mood:'joy'})),
  text:`지도를 좋아한 사람이 남긴 선물,<br>길을 잃지 않는 지도.<br>오늘도 우리 곁에 있어요.<br><span class="big">끝</span>`},
 {kind:'talk'}
];
BOOKS.push({id:'kimjeongho',era:'joseon',title:'김정호와 대동여지도',who:'김정호',teaser:'우리 땅을 한눈에 보는 커다란 지도를 만든 김정호 이야기예요.',pages:P,
 talk:{three:['지도에서 강은 무슨 색이지?','지도를 펼치는 흉내, 쫙!','우리 집에서 놀이터 가는 길을 그려 볼까?'],
  five:['대동여지도를 왜 접을 수 있게 만들었을까?','길에 점을 찍은 까닭은 뭘까?','우리 동네 지도를 그린다면 무엇을 넣을래?'],
  note:'김정호(1804년 무렵~1866년 무렵)는 1861년 목판본 대동여지도를 펴냈습니다. 22첩으로 접을 수 있고, 모두 펼치면 세로 약 6.6미터, 가로 약 4미터입니다. 백두산을 여러 번 오르고 전국을 걸어 다녔다는 이야기는 근거가 약하고, 실제로는 이전의 지도와 지리책을 모아 정밀하게 다듬은 공이 큽니다. 그래서 직접 다녔다는 장면에는 전해 오는 이야기 표시를 달았습니다.'}});
})();
