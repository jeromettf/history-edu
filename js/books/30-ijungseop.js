/* 30권 이중섭: 소와 가족을 그린 화가 */
(()=>{
const LEG=['전해 오는 이야기'];
const jsKid=(x,y,s,o={})=>hero(x,y,s,{robe:'#E7D7B4',hair:'braid',belt:'#8C7350',ribbon:'#C9473B',...o});
const painter=(x,y,s,o={})=>person(x,y,s,{robe:'#6E5A4A',pose:o.pose,mood:o.mood,item:o.item,
  deco:`<path d="M-14 -66 L0 -50 L14 -66" fill="#E6E1D6" ${sw(1.6)}/><path d="M-36 -32 Q0 -26 36 -32" fill="none" stroke="#4A3A30" stroke-width="3"/>`,
  front:`<path d="M-32 -96 Q-34 -132 0 -132 Q34 -132 32 -96 Q20 -120 4 -112 Q-14 -122 -32 -96Z" fill="${HAIR}" ${sw()}/>`});
const wife=(x,y,s,o={})=>hero(x,y,s,{body:'dress',hair:'bun',top:'#F6E2A6',skirt:'#7FB3C8',...o});
const boy=(x,y,s,o={})=>kid(x,y,s,{...o});
const easel=(x,y,s,inner)=>g(x,y,s,`<path d="M-40 0 L-20 -130 M40 0 L20 -130 M0 -130 V0" stroke="${K.wood}" stroke-width="5" stroke-linecap="round"/><rect x="-46" y="-120" width="92" height="76" fill="#FBF4E2" ${sw()}/>${inner}`);
const foil=(x,y,w,h,inner)=>`<g id="tFoil"><rect x="${x}" y="${y}" width="${w}" height="${h}" fill="#D9DCE2" ${sw()}/><path d="M${x+6} ${y+8} L${x+w-10} ${y+20} M${x+10} ${y+h-14} L${x+w-6} ${y+h-30}" stroke="#FFFFFF" stroke-width="3" opacity=".8"/>${inner}</g>`;
const letter=`<rect x="-30" y="-56" width="60" height="42" fill="#FFFDF6" ${sw()}/>${g(-10,-26,.12,ox(0,0,1,'#B9763E'))}<path d="M8 -46 H24 M8 -38 H22 M8 -30 H20" stroke="#9A9087" stroke-width="1.6"/>`;
const P=[
 {kind:'cover', svg:coverBase('ij','황소와 가족',`${ox(80,262,.5,'#C0612F')}${crab(340,248,1.1)}`,painter(210,264,1.0,{pose:'hold',mood:'joy',item:brush})),
  text:`<span class="big">이중섭과 가족 그림</span><br>위인 그림책 {no}권`},
 {svg:SV(`${cloud(300,40,.7)}${hills('#A9CDB4','#C7D88F',196,220)}
  ${ox(270,262,.8,'#B9763E')}
  ${jsKid(110,268,.86,{pose:'hold',mood:'joy',item:brush})}`,'url(#ij1)',sky('ij1','#CFE7F2','#F6EAD0')),
  text:`방정환 선생님이 어린이날을 만들던 무렵, 평안도에 중섭이라는 아이가 살았어요. 중섭이는 소를 정말 좋아했어요.`},
 {chips:LEG, svg:SV(`<circle cx="340" cy="46" r="22" fill="${K.gold}" ${sw()}/>${hills('#A9CDB4','#C7D88F',196,220)}
  ${ox(280,262,.74,'#B9763E')}${easel(150,262,.9,`${g(-10,-58,.36,ox(0,0,1,'#C0612F'))}`)}
  ${jsKid(60,268,.66,{mood:'o'})}`,'url(#ij2)',sky('ij2','#F6DFA8','#F2C27A')),
  text:`해가 질 때까지 소를 바라보다가 집에 늦게 들어간 적도 있었대요. 소의 눈, 소의 다리, 소의 힘찬 몸을 보고 또 보며 그렸지요.`},
 {svg:SV(`<rect x="-6" y="-6" width="412" height="230" fill="#EADCC0"/><rect x="-6" y="216" width="412" height="70" fill="#DDB16A"/>
  ${painter(110,268,.86,{mood:'joy'})}${wife(200,268,.82,{mood:'joy'})}${boy(270,272,.6,{mood:'joy',pose:'up'})}${boy(330,272,.56,{mood:'joy'})}
  ${heart(200,110)}`,'#EADCC0'),
  text:`어른이 된 중섭은 화가가 되었어요. 사랑하는 아내와 두 아들도 생겼지요. 중섭은 가족과 함께 있을 때가 가장 행복했어요.`},
 {chips:['1951년'], svg:SV(`${sea(170)}
  <path d="M-6 170 Q100 150 220 176 L220 290 L-6 290Z" fill="#E6D3A6" ${sw()}/>
  ${hut(30,130)}
  ${painter(100,262,.74,{mood:'sad'})}${wife(170,262,.7,{mood:'sad'})}${boy(130,272,.5,{mood:'o'})}`,'url(#ij4)',sky('ij4','#B9C2CC','#DCDCD4')),
  text:`그런데 전쟁이 일어나서 중섭네 가족은 먼 제주도로 피란을 갔어요. 아주 작은 방에서 네 식구가 오순도순 지냈지요.`},
 {svg:SV(`<circle cx="340" cy="46" r="22" fill="${K.gold}" ${sw()}/>${sea(150)}
  <path d="M-6 200 Q200 180 406 200 L406 290 L-6 290Z" fill="#E6D3A6" ${sw()}/>
  <g id="tCrab">${crab(270,236,1.4)}${crab(330,252,1)}</g>
  <g id="tBoys">${boy(130,268,.74,{mood:'joy',pose:'up'})}${boy(200,268,.66,{mood:'joy',pose:'up'})}</g>
  ${painter(60,262,.7,{mood:'joy'})}`,'url(#ij5)',sky('ij5','#CFE7F2','#F6EAD0')),
  taps:[{label:'게',el:'tCrab',say:'옆으로 옆으로, 집게 집게!'},{label:'아이들',el:'tBoys',say:'아빠, 게 잡았어요!'}],tapHint:'바닷가 친구들을 눌러 보세요.',
  text:`서귀포 바닷가에서 아이들은 게를 잡으며 놀았어요. 중섭은 그 모습이 너무 사랑스러워서 게와 아이들을 함께 그렸지요.`},
 {svg:SV(`${sea(150)}
  ${g(300,190,.5,`<path d="M-80 -6 Q-70 22 0 24 Q70 22 90 -6Z" fill="#E8E2D2" ${sw(3)}/><rect x="-40" y="-50" width="80" height="44" fill="#FFFFFF" ${sw(3)}/>`)}
  <path d="M-6 200 Q100 180 200 196 L200 290 L-6 290Z" fill="#E6D3A6" ${sw()}/>
  ${painter(110,262,.86,{pose:'up',mood:'sad',tear:true})}${T(290,110,'잘 지내!',18,K.red)}`,'url(#ij6)',sky('ij6','#B9C8D6','#E3E8EE')),
  text:`살림이 너무 어려워서, 아내와 아이들은 먼저 바다 건너 일본으로 떠나야 했어요. 중섭은 혼자 남아 가족을 무척 그리워했지요.`},
 {svg:SV(`<rect x="-6" y="-6" width="412" height="230" fill="#EADCC0"/><rect x="-6" y="216" width="412" height="70" fill="#DDB16A"/>
  ${foil(200,50,170,120,`${g(250,150,.4,ox(0,0,1,'#8A8E98'))}${crab(330,140,.8,'#8A8E98')}`)}
  ${painter(110,268,.9,{pose:'hold',mood:'smile',item:letter})}`,'#EADCC0'),
  taps:[{label:'은박지 그림',el:'tFoil',say:'반짝반짝! 담뱃갑 속 은종이에 꾹꾹 눌러 그렸어요.'}],tapHint:'반짝이는 그림을 눌러 보세요.',
  text:`그림 그릴 종이를 살 돈도 없었어요. 그래서 담뱃갑 속 반짝이는 은종이에 그림을 그렸어요. 가족에게 보내는 편지에도 그림을 가득 그려 넣었지요.`},
 {svg:SV(`<circle cx="200" cy="140" r="150" fill="url(#ijg8)"/>
  <path d="M-6 236 Q200 226 406 236 L406 286 L-6 286Z" fill="#C0612F" opacity=".35"/>
  ${ox(190,248,1.7,'#C0612F')}
  <path d="M60 90 l20 -20 M330 100 l24 -10 M70 200 l-20 10" stroke="#F6E2A6" stroke-width="5" stroke-linecap="round"/>`,'url(#ij8)',sky('ij8','#F6D9A2','#E9A86A')+glow('ijg8','#FFF2C4',.8)),
  text:`중섭이 그린 황소는 힘차게 고개를 들고 있어요. 힘든 때에도 씩씩하게 살자는 마음을 담았대요. 어릴 때부터 바라보던 바로 그 소예요.`},
 {svg:SV(`<rect x="-6" y="-6" width="412" height="292" fill="#EFE3C8"/>
  ${easel(290,230,1.1,`${[[-24,-80],[0,-84],[22,-80]].map(([dx,dy])=>`<circle cx="${dx}" cy="${dy}" r="10" fill="${SK}" ${sw(1.2)}/>`).join('')}${heart(0,-58)}`)}
  <rect x="-6" y="216" width="412" height="70" fill="#DDB16A"/>
  ${kid(130,266,1.0,{pose:'hold',mood:'joy',item:brush})}`,'#EFE3C8'),
  text:`제주 서귀포에는 지금도 중섭이 살던 작은 방과 이중섭 미술관이 있어요. 우리도 오늘 우리 가족을 그려 볼까요?`},
 {kind:'end', svg:endBase('ij',`${ox(200,210,1.2,'#C0612F')}${heart(200,70)}`,jsKid(64,276,.5,{pose:'up',mood:'joy'}),painter(338,276,.55,{pose:'up',mood:'joy'})),
  text:`소를 좋아한 아이가 남긴 선물,<br>가족을 사랑하는 마음.<br>오늘도 우리 곁에 있어요.<br><span class="big">끝</span>`},
 {kind:'talk'}
];
BOOKS.push({id:'ijungseop',era:'hyeondae',title:'이중섭과 가족 그림',who:'이중섭',teaser:'소를 좋아한 아이가 화가가 되어 사랑하는 가족을 그렸어요.',pages:P,
 talk:{three:['중섭이가 좋아한 동물은 뭐였지?','게처럼 옆으로 걸어 볼까?','우리 가족 얼굴을 그려 볼까?'],
  five:['종이가 없을 때 중섭은 어디에 그림을 그렸지?','가족과 떨어져 있으면 어떤 마음일까?','힘든 때에도 씩씩한 황소를 그린 까닭은 뭘까?'],
  note:'이중섭(1916~1956)은 평안남도에서 태어난 화가로, 어려서부터 소를 즐겨 그렸습니다. 6·25 전쟁 때 1951년 제주 서귀포로 피란해 가족과 지냈고, 1952년 아내와 두 아들은 일본으로 건너갔습니다. 종이가 귀해 담뱃갑 은박지에 그림을 그렸고, 가족에게 그림 편지를 많이 보냈습니다. 그 뒤 가족을 다시 만나지 못하고 1956년 마흔 살에 병으로 세상을 떠났습니다. 해 질 녘까지 소를 바라봤다는 이야기는 전해 오는 일화입니다.'}});
})();
