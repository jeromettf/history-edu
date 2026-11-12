/* 4권 선덕여왕: 꽃과 별을 좋아한 공주 */
(()=>{
setScene('samguk','spring');
const LEG=['전해 오는 이야기'];
const princess=(x,y,s,o={})=>hero(x,y,s,{body:'dress',top:'#F6E2A6',skirt:'#E98FA0',hair:'braid',ribbon:K.gold,...o});
const tang=(x,y,s,o={})=>hero(x,y,s,{robe:'#7A6AA8',hat:'band',bandColor:K.gold,belt:'#3A2E2A',...o});
const tower=(x,y,s)=>g(x,y,s,`<rect x="-46" y="-8" width="92" height="10" fill="#B9B3A6" ${sw()}/><path d="M-36 -8 Q-44 -70 -24 -110 L24 -110 Q44 -70 36 -8Z" fill="#CFC6B0" ${sw()}/>${[-90,-74,-58,-42,-26].map(yy=>`<path d="M${-30+Math.abs(yy+50)*.12} ${yy} H${30-Math.abs(yy+50)*.12}" stroke="#B0A68E" stroke-width="1.6"/>`).join('')}<rect x="-10" y="-70" width="20" height="18" fill="#3A322B" ${sw(1.6)}/><rect x="-30" y="-122" width="60" height="12" fill="#CFC6B0" ${sw()}/><path d="M-26 -116 H26" stroke="#B0A68E" stroke-width="1.4"/>`);
const painting=(x,y,w,h,inner)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="#FBF4E2" ${sw()}/><rect x="${x-6}" y="${y-6}" width="${w+12}" height="10" rx="4" fill="${K.wood}" ${sw(1.4)}/><rect x="${x-6}" y="${y+h-4}" width="${w+12}" height="10" rx="4" fill="${K.wood}" ${sw(1.4)}/>${inner}`;
const seedBox=`<rect x="-18" y="-42" width="36" height="22" rx="3" fill="#C9473B" ${sw()}/><ellipse cx="-6" cy="-31" rx="3" ry="2" fill="#5A3B2C"/><ellipse cx="6" cy="-31" rx="3" ry="2" fill="#5A3B2C"/>`;
const nightStars=[[40,40],[90,70],[140,30],[260,40],[320,70],[370,30],[200,60],[300,110],[60,120]].map(([x,y],k)=>star(x,y,k%3?4:6,'#F6F0D6')).join('');
const P=[
 {kind:'cover', svg:coverBase('sd','꽃과 별의 여왕',`${peony(60,226,1.3)}${g(340,262,.62,tower(0,0,1))}`,queen(200,264,1.0,{pose:'up',mood:'joy'})),
  text:`<span class="big">선덕여왕과 별 보는 탑</span><br>위인 그림책 {no}권`},
 {svg:SV(`${cloud(300,40,.7)}${hills('#A9CDB4','#C7D88F',196,220)}
  ${peony(60,186,1.1)}${peony(100,196,.9,'#F2A9C0')}${peony(340,190,1)}
  ${princess(200,268,.94,{pose:'up',mood:'joy'})}`,'url(#sd1)',sky('sd1','#CFE7F2','#F6EAD0')),
  text:`먼 옛날, 신라라는 나라에 덕만이라는 공주님은 꽃을 보고 별을 세는 걸 좋아했어요. 무엇이든 오래 들여다보는 아이였어요.`},
 {chips:LEG, svg:SV(`${palace()}
  ${painting(160,40,110,110,`${peony(200,90,1)}${peony(236,110,.8,'#F2A9C0')}`)}
  ${tang(320,272,.8,{pose:'hold',mood:'smile',item:seedBox})}${princess(90,272,.8,{mood:'o'})}`,'#E8D3B0'),
  text:`어느 날 당나라 임금이 모란꽃 그림과 꽃씨를 보내왔어요. 그림을 본 덕만 공주가 말했어요. "이 꽃은 향기가 없겠네요."`},
 {chips:LEG, svg:SV(`<rect x="-6" y="-6" width="412" height="230" fill="#E8D3B0"/><rect x="-6" y="222" width="412" height="64" fill="#A87E52"/>
  <g id="tPaint">${painting(60,40,170,130,`${peony(120,100,1.4)}${peony(176,124,1.1,'#F2A9C0')}`)}</g>
  <g id="tPrin">${princess(310,272,.92,{arms:'pointL',mood:'smile',face:'left'})}</g>`,'#E8D3B0'),
  taps:[{label:'모란 그림',el:'tPaint',say:'예쁜 꽃인데, 나비가 한 마리도 없어요.'},{label:'덕만 공주',el:'tPrin',say:'향기로운 꽃에는 나비와 벌이 날아오잖아요.'}],tapHint:'그림에서 무엇이 빠졌을까요?',
  text:`"왜 그렇게 생각하세요?" 공주가 웃으며 그림을 가리켰어요. "꽃 둘레에 나비가 한 마리도 없잖아요. 향기가 있다면 나비가 날아왔을 거예요."`},
 {chips:LEG, svg:SV(`<circle cx="340" cy="46" r="22" fill="${K.gold}" ${sw()}/>${hills('#A9CDB4','#C7D88F',196,220)}
  ${peony(120,180,1.6)}${peony(200,170,1.8,'#F2A9C0')}${peony(280,182,1.6)}
  ${hero(330,270,.66,{robe:'#EFE6D2',mood:'o'})}${T(200,90,'킁킁… 정말 향기가 없네!',18,K.red)}`,'url(#sd4)',sky('sd4','#CFE7F2','#F6EAD0')),
  text:`꽃씨를 심어 꽃이 피었어요. 사람들이 코를 대고 킁킁 맡아 보았어요. 정말로 향기가 없었대요! 모두 공주의 지혜에 깜짝 놀랐어요.`},
 {chips:['632년'], svg:SV(`${palace()}
  ${queen(200,272,1.0,{pose:'up',mood:'joy'})}
  ${hero(84,272,.66,{robe:'#5E9C8A',hat:'band',bandColor:K.gold,mood:'joy'})}${hero(316,272,.66,{robe:'#6C9BD2',hair:'braid',mood:'joy'})}
  ${star(120,70,9)}${star(290,60,8,'#F28C7C')}`,'#E8D3B0'),
  text:`덕만 공주는 신라 최초의 여왕이 되었어요. 바로 선덕여왕이에요. 선덕여왕은 백성들이 배불리 먹고 편안하게 살기를 바랐어요.`},
 {svg:SV(`${cloud(80,40,.7)}${hills('#A9CDB4','#C7A878',196,220)}
  ${[40,80,120,160].map(x=>`<path d="M${x} 236 q10 -6 20 0" stroke="#A88A5A" stroke-width="2" fill="none"/>`).join('')}
  ${hero(120,268,.86,{robe:'#EFE6D2',skin:'#EDBF95',mood:'o'})}
  ${T(120,100,'언제 씨를 뿌리지?',18,K.red)}
  ${queen(290,268,.86,{mood:'smile'})}`,'url(#sd6)',sky('sd6','#CFE7F2','#F6EAD0')),
  text:`농사를 지으려면 씨를 뿌릴 때와 거둘 때를 잘 알아야 해요. 그러려면 해와 달과 별이 어떻게 움직이는지 살펴야 했어요.`},
 {svg:SV(`${nightStars}
  <path d="M-6 214 Q200 204 406 214 L406 286 L-6 286Z" fill="#5E6B54" ${sw()}/>
  <g id="tTower">${tower(200,226,1.5)}</g>
  <g id="tStar">${star(300,60,14,'#FFE38A')}</g>
  ${queen(70,270,.66,{pose:'up',mood:'joy'})}`,'url(#sd7)',sky('sd7','#1F2748','#46406A')),
  taps:[{label:'첨성대',el:'tTower',say:'돌을 한 층 한 층 쌓아 올린 탑이에요. 가운데 네모난 창문이 있어요.'},{label:'별',el:'tStar',say:'반짝반짝! 별을 보면 계절이 바뀌는 걸 알 수 있어요.'}],tapHint:'탑과 별을 눌러 보세요.',
  text:`그래서 선덕여왕 때 첨성대를 쌓았어요. '별을 바라보는 대'라는 뜻이에요. 사람들은 이곳에서 하늘을 살폈다고 해요.`},
 {svg:SV(`${cloud(300,40,.7)}${hills('#A9CDB4','#C7D88F',196,220)}
  ${tower(250,232,1.1)}
  ${kid(120,268,.92,{pose:'up',mood:'o'})}${hero(340,270,.7,{body:'dress',hair:'bun',top:'#F2C14E',skirt:'#5B7FB8',mood:'smile'})}`,'url(#sd8)',sky('sd8','#E8F2F8','#F2EED8')),
  text:`첨성대는 천사백 년 가까이 지난 지금도 경주에 서 있어요. 동양에서 가장 오래된 천문대 가운데 하나로 알려져 있어요.`},
 {svg:SV(`${nightStars}
  <rect x="-6" y="216" width="412" height="70" fill="#3A3A50"/>
  ${kid(160,266,1.0,{pose:'hold',mood:'joy',item:`<path d="M10 -40 L50 -74" stroke="#5A5560" stroke-width="10" stroke-linecap="round"/><path d="M14 -20 L22 -42 L30 -20" fill="none" ${sw(2.4)}/>`})}
  ${T(300,190,'반짝반짝',18,'#F6F0D6')}`,'url(#sd9)',sky('sd9','#1F2748','#46406A')),
  text:`달은 날마다 모양이 조금씩 바뀌어요. 오늘 밤 달을 보고, 내일 밤 달과 견주어 보세요. 덕만 공주처럼 다른 점을 찾을 수 있어요.`},
 {kind:'end', svg:endBase('sd',`${tower(200,220,1.5)}${peony(110,120,1.4)}${peony(290,120,1.4,'#F2A9C0')}`,princess(64,276,.5,{pose:'up',mood:'joy'}),queen(338,276,.55,{pose:'up',mood:'joy'})),
  text:`꽃과 별을 꼼꼼히 살핀 공주가 남긴 선물,<br>하늘을 살피는 눈.<br>오늘도 우리 곁에 있어요.<br><span class="big">끝</span>`},
 {kind:'talk'}
];
BOOKS.push({id:'seondeok',era:'samguk',title:'선덕여왕과 별 보는 탑',who:'선덕여왕',teaser:'나비가 한 마리도 없는 꽃 그림. 덕만 공주는 거기서 무엇을 알아챘을까요?',pages:P,
 talk:{three:['모란 그림에 없던 것은 뭐였지?','꽃 냄새 맡는 흉내, 킁킁!','밤하늘 별을 세어 볼까?'],
  five:['공주는 어떻게 향기가 없다는 걸 알았을까?','첨성대에서 왜 별을 살폈을까?','꼼꼼히 살펴서 알아낸 것이 있어?'],
  note:'선덕여왕(재위 632~647)은 신라 최초의 여왕입니다. 모란 그림 이야기는 『삼국유사』에 실린 일화이고, 같은 이야기가 『삼국사기』에도 전합니다. 첨성대는 선덕여왕 때 세워졌다고 전하며, 천문대였다는 설이 널리 알려져 있지만 제단이나 상징물이었다는 견해도 있습니다. 김유신과 김춘추가 선덕여왕 아래에서 활약했습니다.'}});
})();
