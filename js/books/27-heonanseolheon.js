/* 허난설헌: 글을 사랑한 소녀 */
(()=>{
setScene('joseon','spring');
const chKid=(x,y,s,o={})=>hero(x,y,s,{body:'dress',top:'#FFF3C4',skirt:'#7A6AA8',hair:'braid',ribbon:'#C9473B',...o});
const nan=(x,y,s,o={})=>hero(x,y,s,{body:'dress',top:'#F6E2A6',skirt:'#7A6AA8',hair:'bun',...o});
const brother=(x,y,s,o={})=>hero(x,y,s,{robe:'#5E7FA8',hair:'braid',belt:K.gold,ribbon:'#5E7FA8',...o});
const teacher=(x,y,s,o={})=>hero(x,y,s,{robe:'#EDE9E0',hat:'gat',beard:'#8A8580',belt:'#8C7350',...o});
const poemPaper=(id,txt)=>`<g id="${id}"><rect x="-40" y="-60" width="80" height="50" fill="#FFFDF6" ${sw()}/>${[0,1,2,3].map(k=>`<path d="M${24-k*16} -54 V-16" stroke="#C9C2B4" stroke-width="1"/>`).join('')}<text x="0" y="-28" text-anchor="middle" font-family="serif" font-size="14" fill="#2E2522">${txt}</text></g>`;
const lotus=(x,y,s=1)=>g(x,y,s,`<ellipse cx="0" cy="6" rx="26" ry="6" fill="#5E9C6A" ${sw(1.2)}/>${[-60,-30,0,30,60].map(a=>`<path d="M0 2 Q-9 -12 0 -26 Q9 -12 0 2Z" fill="${a===0?'#F7C3D2':'#F2A9C0'}" ${sw(1.2)} transform="rotate(${a} 0 2)"/>`).join('')}<circle cx="0" cy="-2" r="4" fill="${K.gold}"/>`);
const P=[
 {kind:'cover', svg:coverBase('nh','연꽃 같은 시',`${lotus(64,250,1.4)}${lotus(340,246,1.2)}`,nan(200,264,1.0,{pose:'hold',mood:'joy',item:brush})),
  text:`<span class="big">허난설헌과 연꽃 시</span><br>위인 그림책 {no}권`},
 {svg:SV(`${room()}
  ${teacher(270,268,.86,{mood:'smile',pose:'hold',item:`<rect x="-26" y="-50" width="52" height="34" fill="#8A6A44" ${sw()}/>`})}${brother(160,270,.7,{mood:'o'})}
  ${chKid(70,270,.62,{mood:'joy'})}`,'#EADCC0'),
  text:`이순신과 같은 시절, 강릉에 초희라는 여자아이가 살았어요. 그때는 여자아이가 글공부하기 어려웠어요. 초희는 오빠들이 공부할 때 옆에서 귀를 쫑긋 세웠어요.`},
 {svg:SV(`${room()}
  ${teacher(120,268,.86,{mood:'joy'})}${chKid(270,270,.7,{pose:'hold',mood:'joy',item:brush})}
  ${T(200,90,'초희도 함께 배우거라',18,K.red)}`,'#EADCC0'),
  text:`초희의 아버지는 딸도 마음껏 배우게 해 주었어요. 오빠와 남동생과 함께 이달 선생님께 시 짓는 법을 배웠어요. 초희는 배우는 게 너무 즐거웠어요.`},
 {chips:['전해 오는 이야기'], svg:SV(`${palace()}
  <g id="tPoem">${g(250,200,1.6,`<rect x="-40" y="-60" width="80" height="50" fill="#FFFDF6" ${sw()}/>${[0,1,2,3].map(k=>`<path d="M${24-k*16} -54 V-16" stroke="#C9C2B4" stroke-width="1"/>`).join('')}`)}</g>
  ${chKid(110,270,.72,{pose:'up',mood:'joy'})}${T(250,70,'여덟 살의 글',18,K.red)}`,'#E8D3B0'),
  taps:[{label:'초희의 글',el:'tPoem',say:'하늘나라 궁전을 짓는 날을 상상하며 쓴 글이에요. 어른들이 깜짝 놀랐대요.'}],
  text:`여덟 살 초희는 하늘나라의 아름다운 궁전을 상상하며 긴 글을 지었어요. 글을 읽은 어른들은 "어린아이가 이런 글을!" 하고 깜짝 놀랐대요.`},
 {svg:SV(`${yard(206)}
  ${[80,150,220].map(x=>lotus(x,232,1.1)).join('')}
  <path d="M40 216 Q140 206 260 216 L260 246 Q140 254 40 246Z" fill="#6FA8C8" opacity=".6"/>
  ${nan(320,268,.86,{pose:'hold',mood:'smile',item:brush})}`,'#D9CCAE'),
  text:`어른이 된 초희는 '난설헌'이라는 호를 지었어요. 연꽃과 달, 새와 바람을 보며 시를 지었지요. 마음속 기쁨도 슬픔도 시에 담았어요.`},
 {svg:SV(`<rect x="-6" y="-6" width="412" height="292" fill="#2A3150"/>
  <circle cx="320" cy="60" r="22" fill="#F6F0D6" ${sw()}/>${[40,90,150,210].map((x,k)=>star(x,40+(k%2)*30,4,'#F6F0D6')).join('')}
  <rect x="-6" y="216" width="412" height="70" fill="#4A3A30"/>
  ${nan(150,268,.88,{mood:'sad'})}
  <rect x="240" y="190" width="10" height="28" rx="3" fill="#FFF8E8" ${sw(1.4)}/><path d="M245 174 Q253 182 245 190 Q237 182 245 174Z" fill="#FFC24A"/>`,'#2A3150'),
  text:`난설헌의 삶은 쉽지 않았어요. 슬픈 일이 많았고, 스물일곱 살에 세상을 떠났어요. 떠나기 전 "내 시를 모두 태워 주렴" 하고 부탁했대요.`},
 {svg:SV(`${room()}
  ${hero(130,268,.9,{robe:'#5E7FA8',hat:'gat',belt:K.gold,mood:'smile',pose:'hold',item:`<rect x="-28" y="-52" width="56" height="40" fill="#7A6AA8" ${sw()}/><rect x="-18" y="-46" width="36" height="16" fill="#FFFDF6"/>`})}
  <g transform="translate(290 214) scale(1.5)">${poemPaper('tP1','蓮')}</g>`,'#EADCC0'),
  taps:[{label:'남은 시',el:'tP1',say:'동생 허균이 외우고 모아 둔 시들이 책이 되었어요.'}],
  text:`하지만 남동생 허균은 누나의 시를 아꼈어요. 기억하고 모아 둔 시를 엮어 책으로 만들었어요. 그 책이 『난설헌집』이에요.`},
 {svg:SV(`${sea(180)}
  ${g(260,214,.5,`<path d="M-80 -6 Q-70 22 0 24 Q70 22 90 -6Z" fill="#8A5A3C" ${sw(3)}/><path d="M0 -6 V-110" ${sw(5)}/><path d="M-44 -104 L44 -104 L38 -30 L-38 -30Z" fill="#F4E7C6" ${sw(3)}/>`)}
  <path d="M-6 180 Q80 170 160 186 L160 290 L-6 290Z" fill="#E6D3A6" ${sw()}/>
  ${hero(90,262,.8,{robe:'#7A6AA8',hat:'band',bandColor:K.gold,beard:HAIR,pose:'up',mood:'joy'})}${T(260,80,'명나라에서도 인기!',18,K.red)}`,'url(#nh7)',sky('nh7','#CFE7F2','#F6EAD0')),
  text:`조선에 온 명나라 사신이 이 책을 읽고 감탄해서 중국으로 가져갔어요. 난설헌의 시는 바다 건너 중국과 일본에서도 많은 사람이 읽었대요.`},
 {svg:SV(`${hills('#A9CDB4','#BCD38F',196,222)}
  ${kid(130,268,.96,{pose:'hold',mood:'joy',item:`<rect x="-26" y="-50" width="52" height="34" fill="#FFFDF6" ${sw()}/><path d="M-18 -40 h36 M-18 -30 h28" stroke="#9A9087" stroke-width="2"/>`})}${hero(260,268,.92,{body:'dress',hair:'braid',top:'#E98FA0',skirt:'#7A6AA8',pose:'up',mood:'joy'})}`,'url(#nh8)',sky('nh8','#E8F2F8','#F2EED8')),
  text:`지금은 누구나 학교에서 글을 배우고 시를 지을 수 있어요. 강릉 초당동에는 난설헌이 태어난 집터와 기념관이 있어요.`},
 {kind:'end', svg:endBase('nh',`${lotus(200,190,3)}`,chKid(64,276,.5,{pose:'up',mood:'joy'}),nan(338,276,.55,{pose:'up',mood:'joy'})),
  text:`배우기를 좋아한 소녀가 남긴 선물,<br>바다 건너까지 간 시.<br>오늘도 우리 곁에 있어요.<br><span class="big">끝</span>`},
 {kind:'talk'}
];
BOOKS.push({id:'heonanseolheon',era:'joseon',title:'허난설헌과 연꽃 시',who:'허난설헌',teaser:'오빠들 공부하는 소리에 귀를 쫑긋 세우던 여자아이가 바다 건너까지 알려진 시인이 되었어요.',pages:P,
 talk:{three:['초희가 좋아한 꽃은 뭐였지?','연꽃처럼 두 손을 활짝 펴 볼까?','오늘 본 하늘을 한 줄로 말해 볼까?'],
  five:['그때 여자아이들은 왜 공부하기 어려웠을까?','허균은 왜 누나의 시를 모았을까?','너라면 어떤 시를 지어 보고 싶어?'],
  note:'허난설헌(1563~1589)의 본명은 초희이며, 강릉에서 태어나 오빠 허봉, 동생 허균과 함께 이달에게 시를 배웠습니다. 여덟 살에 「광한전백옥루상량문」을 지었다고 전합니다. 결혼 뒤 어려운 삶을 살다 스물일곱 살에 세상을 떠났고, 자신의 작품을 태우라는 유언을 남겼다고 합니다. 허균이 남은 시를 모아 엮었고, 1606년 명나라 사신 주지번이 이를 가져가 중국에서 『난설헌집』이 간행되었으며 뒤에 일본에서도 출간되었습니다. 강릉 초당동에 생가터와 허균·허난설헌 기념관이 있습니다.'}});
})();
