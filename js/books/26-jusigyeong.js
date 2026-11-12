/* 26권 주시경: 우리말을 사랑한 보따리 선생님 */
(()=>{
const sgKid=(x,y,s,o={})=>hero(x,y,s,{robe:'#E7D7B4',hair:'braid',belt:'#8C7350',ribbon:'#3F6FA8',...o});
const sg=(x,y,s,o={})=>person(x,y,s,{robe:'#3F5A7A',pose:o.pose,mood:o.mood,item:o.item,
  deco:`<path d="M-14 -66 L0 -48 L14 -66" fill="#FFFFFF" ${sw(1.6)}/><path d="M-4 -60 L0 -50 L4 -60Z" fill="#5A3B2C"/>`,
  front:`<path d="M-31 -98 Q-30 -128 0 -128 Q30 -128 31 -98 Q0 -112 -31 -98Z" fill="${HAIR}" ${sw()}/><path d="M-12 -80 Q0 -76 12 -80" fill="none" stroke="${HAIR}" stroke-width="3" stroke-linecap="round"/>`});
const teacher=(x,y,s,o={})=>hero(x,y,s,{robe:'#EDE9E0',hat:'gat',beard:'#D9D3C8',belt:'#8C7350',...o});
const bojagi=`<path d="M-28 -50 Q0 -60 28 -50 Q34 -22 0 -14 Q-34 -22 -28 -50Z" fill="#C9473B" ${sw()}/><path d="M-8 -58 Q0 -66 8 -58 Q0 -52 -8 -58Z" fill="#C9473B" ${sw()}/><rect x="-18" y="-46" width="36" height="8" fill="#3F6FA8" opacity=".8"/>`;
const paper=`<rect x="-34" y="-58" width="68" height="46" fill="#FFFDF6" ${sw()}/><text x="0" y="-40" text-anchor="middle" font-family="Jua,sans-serif" font-size="10" fill="${L}">독립신문</text><path d="M-26 -30 H26 M-26 -22 H18" stroke="#9A9087" stroke-width="1.6"/>`;
const board=(x,y,w,h)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="4" fill="#3E5C4A" stroke="#8A6A44" stroke-width="6"/>`;
const P=[
 {kind:'cover', svg:coverBase('sg','한글 이름 짓기',`${g(64,256,1.2,bojagi)}`,sg(210,264,1.0,{pose:'up',mood:'joy'})),
  text:`<span class="big">주시경과 한글이라는 이름</span><br>위인 그림책 {no}권`},
 {svg:SV(`<rect x="-6" y="-6" width="412" height="230" fill="#EADCC0"/><rect x="-6" y="216" width="412" height="70" fill="#DDB16A"/>
  ${teacher(280,268,.86,{mood:'smile',pose:'hold',item:bigBook('天地玄黃','#8A6A44')})}
  ${sgKid(130,268,.86,{mood:'o'})}${T(130,100,'무슨 뜻이지?',18,K.red)}`,'#EADCC0'),
  text:`지석영 선생님이 우두를 놓던 무렵, 황해도에 시경이라는 아이가 살았어요. 서당에서 한자로 된 글을 읽는데, 무슨 뜻인지 하나도 모르겠지 뭐예요.`},
 {svg:SV(`<rect x="-6" y="-6" width="412" height="230" fill="#EADCC0"/><rect x="-6" y="216" width="412" height="70" fill="#DDB16A"/>
  ${teacher(280,268,.86,{mood:'joy',pose:'up'})}
  ${sgKid(130,268,.86,{mood:'joy',pose:'up'})}${T(130,100,'아하, 그런 뜻이구나!',18,K.red)}`,'#EADCC0'),
  text:`그런데 훈장님이 우리말로 풀어서 설명해 주자 단번에 알아들었어요. "우리말을 우리글로 쓰면 누구나 쉽게 알 텐데!"`},
 {chips:['1896년'], svg:SV(`<rect x="-6" y="-6" width="412" height="230" fill="#E9EEF2"/><rect x="-6" y="216" width="412" height="70" fill="#C9C2B4"/>
  ${sg(140,268,.9,{pose:'hold',mood:'smile',item:paper})}
  ${[0,1,2].map(k=>`<g transform="translate(${270+k*30} ${200-k*12}) rotate(${k*6-4})">${paper}</g>`).join('')}`,'#E9EEF2'),
  text:`어른이 된 시경은 한글로만 쓴 신문, 『독립신문』을 만드는 일을 도왔어요. 누구나 읽을 수 있도록 글자를 꼼꼼히 바로잡았지요.`},
 {svg:SV(`<rect x="-6" y="-6" width="412" height="292" fill="#EFE3C8"/>${board(40,30,320,150)}
  <g id="noSpace"><text x="200" y="118" text-anchor="middle" font-family="Jua,sans-serif" font-size="30" fill="#FFFDF6">아버지가방에들어가신다</text></g>
  <g id="goodSpace" opacity="0"><text x="200" y="118" text-anchor="middle" font-family="Jua,sans-serif" font-size="30" fill="#FFFDF6">아버지가 방에 들어가신다</text></g>
  <g id="badSpace" opacity="0"><text x="200" y="118" text-anchor="middle" font-family="Jua,sans-serif" font-size="30" fill="#F6D24A">아버지 가방에 들어가신다</text></g>
  <rect x="-6" y="216" width="412" height="70" fill="#DDB16A"/>
  <g id="tSg">${sg(90,272,.66,{pose:'up',mood:'joy'})}</g>${kid(320,272,.66,{mood:'o'})}`,'#EFE3C8'),
  taps:[{label:'바르게 띄우기',el:'tSg',say:'아버지가 방에 들어가신다. 아버지가 방으로 들어가셨어요.',show:['goodSpace'],hide:['noSpace','badSpace']},{label:'잘못 띄우기',el:'tSg',say:'아버지 가방에 들어가신다? 아버지가 가방 속으로 쏙! 하하.',show:['badSpace'],hide:['noSpace','goodSpace']},{label:'붙여 쓰기',el:'tSg',say:'다 붙여 쓰면 어디서 끊어 읽을지 헷갈려요.',show:['noSpace'],hide:['goodSpace','badSpace']}],tapHint:'띄어쓰기를 바꿔 볼까요?',
  text:`그때는 글을 띄지 않고 다닥다닥 붙여 썼어요. 그래서 헷갈리기 일쑤였지요. 신문을 만들 때 주시경 같은 사람들이 낱말 사이를 띄어 쓰자고 했어요.`},
 {svg:SV(`${cloud(300,40,.7)}${hills('#A9CDB4','#D9CCAE',196,214)}
  <path d="M60 286 Q140 240 240 222 Q330 208 406 200 L406 216 Q330 226 260 238 Q170 256 130 286Z" fill="#E6D3A6" ${sw()}/>
  <g id="tBag">${sg(160,262,.9,{pose:'hold',mood:'joy',item:bojagi})}</g>
  <rect x="270" y="150" width="100" height="56" fill="#E8DCC4" ${sw()}/><path d="M260 154 Q320 120 380 154Z" fill="#8E5A48" ${sw()}/>`,'url(#sg5)',sky('sg5','#CFE7F2','#F6EAD0')),
  taps:[{label:'보따리',el:'tBag',say:'보따리 안에는 우리말 책이 가득 들어 있어요.'}],tapHint:'보따리 안에는 뭐가 있을까요?',
  text:`주시경은 책을 보따리에 싸 들고 이 학교 저 학교를 바쁘게 다니며 우리말을 가르쳤어요. 사람들은 그를 '주보따리'라고 불렀대요.`},
 {svg:SV(`<rect x="-6" y="-6" width="412" height="292" fill="#EFE3C8"/>${board(60,30,280,150)}
  ${T(200,120,'한글',70,'#FFFDF6')}
  <rect x="-6" y="216" width="412" height="70" fill="#DDB16A"/>
  ${sg(110,272,.8,{pose:'up',mood:'joy'})}${sgKid(260,272,.66,{mood:'joy',pose:'up'})}${kid(330,272,.6,{mood:'joy'})}`,'#EFE3C8'),
  text:`그리고 세종대왕이 만든 우리 글자에 새 이름을 붙였어요. 바로 '한글'이에요. '크고 하나뿐인 훌륭한 글'이라는 뜻을 담았지요.`},
 {svg:SV(`<rect x="34" y="34" width="104" height="86" rx="4" fill="#BFE0F0" stroke="#FFFFFF" stroke-width="7"/>${cloud(80,70,.6)}
  <rect x="290" y="32" width="80" height="88" rx="4" fill="#FFFFFF" ${sw()}/><rect x="290" y="32" width="80" height="22" rx="4" fill="${K.red}" ${sw()}/>
  ${T(330,49,'10월',14,'#fff')}${T(330,94,'9',38)}${T(330,114,'한글날',13,K.red)}
  <rect x="-6" y="216" width="412" height="70" fill="#E9CFA4"/><ellipse cx="190" cy="260" rx="124" ry="18" fill="#BFD7A8" ${sw()}/>
  ${kid(190,266,1.0,{pose:'hold',mood:'joy',item:coverBook})}`,'url(#sg7)',sky('sg7','#E8F2F8','#DCEAF2')),
  text:`세종대왕이 한글을 만들고, 주시경이 그 이름을 지어 주었어요. 우리가 쓰는 띄어쓰기와 맞춤법에도 주시경의 노력이 담겨 있지요.`},
 {kind:'end', svg:endBase('sg',`${T(200,170,'한글',90,K.red,`stroke="#FFF8EC" stroke-width="7" paint-order="stroke"`)}${g(200,240,1.3,bojagi)}`,sgKid(64,276,.5,{pose:'up',mood:'joy'}),sg(338,276,.55,{pose:'up',mood:'joy'})),
  text:`우리말을 사랑한 아이가 남긴 선물,<br>한글이라는 이름.<br>오늘도 우리 곁에 있어요.<br><span class="big">끝</span>`},
 {kind:'talk'}
];
BOOKS.push({id:'jusigyeong',era:'modern',title:'주시경과 한글이라는 이름',who:'주시경',teaser:'세종대왕이 만든 우리 글자에 "한글"이라는 이름을 붙여 준 보따리 선생님 이야기예요.',pages:P,
 talk:{three:['주시경 선생님 보따리는 무슨 색이었지?','"한글" 하고 크게 읽어 볼까?','손가락으로 한글 자음 하나 써 볼까?'],
  five:['"아버지 가방에 들어가신다"는 왜 웃길까?','띄어쓰기가 없으면 어떤 점이 불편할까?','"한글"이라는 이름에는 어떤 뜻이 담겼지?'],
  note:'주시경(1876~1914)은 황해도에서 태어나 배재학당에서 공부했고, 1896년 『독립신문』 교정을 맡아 한글 전용과 띄어쓰기에 힘썼습니다. 여러 학교를 다니며 우리말을 가르쳐 "주보따리"라는 별명을 얻었고, 1910년대 초 "한글"이라는 이름을 처음 쓴 사람으로 알려져 있습니다. 서당 장면은 주시경이 한문을 우리말로 풀어 듣고 깨우쳤다는 이야기를 바탕으로 했습니다. 서른여덟 살에 세상을 떠났습니다.'}});
})();
