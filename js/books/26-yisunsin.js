/* 8권 이순신: 포기하지 않은 장군 */
(()=>{
setScene('joseon','summer');
const LEG=['전해 오는 이야기'];
const ssKid=(x,y,s,o={})=>hero(x,y,s,{robe:'#B9D3E8',hair:'braid',belt:'#3F6FA8',ribbon:'#3F6FA8',...o});
const general=(x,y,s,o={})=>hero(x,y,s,{body:'armor',robe:'#B5473A',hat:'helmet',...o});
const ssMan=(x,y,s,o={})=>hero(x,y,s,{robe:'#4F7DBA',hair:'topknot',hat:'band',bandColor:'#C9473B',belt:'#3A2E2A',...o});
const woodSword=`<path d="M30 -28 L54 -74" stroke="${K.wood}" stroke-width="6" stroke-linecap="round"/><path d="M24 -36 L40 -28" stroke="${K.wood}" stroke-width="5" stroke-linecap="round"/>`;
const sea2=(y)=>`<rect x="-6" y="${y}" width="412" height="${290-y}" fill="#4F8DB5"/>${[30,100,170,240,310,380].map((x,k)=>`<path d="M${x-18} ${y+18+(k%2)*22} Q${x-9} ${y+8+(k%2)*22} ${x} ${y+18+(k%2)*22} Q${x+9} ${y+8+(k%2)*22} ${x+18} ${y+18+(k%2)*22}" fill="none" stroke="#FFFFFF" stroke-width="2.4" stroke-linecap="round"/>`).join('')}`;
const smallShip=(x,y,c)=>g(x,y,.34,`<path d="M-50 -6 Q-40 14 0 16 Q40 14 54 -6Z" fill="${c}" ${sw(3)}/><path d="M0 -6 V-60" ${sw(4)}/><path d="M-26 -58 L26 -58 L22 -14 L-22 -14Z" fill="#E8E2D2" ${sw(3)}/>`);
const coin=`<circle cx="0" cy="-36" r="22" fill="#D7D9DE" ${sw()}/><circle cx="0" cy="-36" r="16" fill="none" stroke="#A9ADB5" stroke-width="2"/><circle cx="0" cy="-40" r="6" fill="#A9ADB5"/><path d="M-9 -26 Q0 -34 9 -26" fill="#A9ADB5"/><text x="0" y="-18" text-anchor="middle" font-family="Jua,sans-serif" font-size="7" fill="#6E727B">100</text>`;
const P=[
 {kind:'cover', svg:coverBase('y','바다를 지킨 장군',`${g(70,250,.42,turtleShip(0,0,1))}`,general(220,264,1.0,{pose:'up',mood:'joy'})),
  text:`<span class="big">이순신과 거북선</span><br>위인 그림책 {no}권`},
 {chips:LEG, svg:SV(`${cloud(300,40,.7)}${hills('#A9CDB4','#C7D88F',196,220)}
  ${ssKid(150,268,.92,{pose:'hold',mood:'joy',item:woodSword})}
  ${kid(250,270,.64,{mood:'joy',pose:'up'})}${hero(310,270,.64,{robe:'#E7C76A',hair:'braid',mood:'joy',pose:'up'})}${hero(360,270,.6,{robe:'#E98FA0',hair:'braid',mood:'joy'})}
  ${T(150,110,'나를 따르라!',18,K.red)}`,'url(#y1)',sky('y1','#CFE7F2','#F6EAD0')),
  text:`한석봉과 같은 시절, 순신이라는 아이가 살았어요. 순신은 동네 아이들과 전쟁놀이를 할 때면 늘 대장을 맡았대요. 나무로 활과 칼을 만들어 놀았어요.`},
 {chips:LEG, svg:SV(`${cloud(80,40,.7)}${hills('#A9CDB4','#C7D88F',196,220)}
  <path d="M320 216 Q312 150 330 100" stroke="#8A6A44" stroke-width="10" fill="none" stroke-linecap="round"/><path d="M330 104 Q300 130 290 170 M330 110 Q350 140 362 176 M326 120 Q316 150 316 188" fill="none" stroke="#7CB66E" stroke-width="4" stroke-linecap="round"/>
  ${horse(170,266,.9,{color:'#8A5A3C',rider:rider(ssMan(0,0,1,{pose:'up',mood:'smile'}))})}
  <rect x="120" y="226" width="18" height="10" rx="3" fill="#C9A15A" ${sw(1.4)}/>`,'url(#y2)',sky('y2','#CFE7F2','#F6EAD0')),
  text:`어른이 된 순신은 장군이 되는 시험을 보다가 말에서 떨어져 다리를 다쳤어요. 그래도 순신은 버드나무 껍질로 다리를 묶고 다시 말에 올랐대요.`},
 {svg:SV(`<circle cx="340" cy="46" r="22" fill="${K.gold}" ${sw()}/>${sea(170)}
  <path d="M-6 170 L140 170 Q160 220 140 286 L-6 286Z" fill="#C9B48A" ${sw()}/>
  ${general(80,266,.92,{mood:'smile'})}
  ${g(290,210,.34,`<path d="M-50 -6 Q-40 14 0 16 Q40 14 54 -6Z" fill="#8A5A3C" ${sw(3)}/><path d="M0 -6 V-60" ${sw(4)}/><path d="M-26 -58 L26 -58 L22 -14 L-22 -14Z" fill="#E8E2D2" ${sw(3)}/>`)}`,'url(#y3)',sky('y3','#CFE7F2','#F6EAD0')),
  text:`몇 해 뒤 다시 시험을 보아 장군이 된 순신은 남쪽 바다를 지키게 되었어요. 순신은 바다를 지키려면 튼튼한 배가 필요하다고 생각했어요.`},
 {svg:SV(`${cloud(80,40,.7)}${sea(200)}
  <g id="tShip">${turtleShip(210,210,1.25)}</g>
  <g id="tGen">${general(56,268,.72,{pose:'up',mood:'joy'})}</g>
  ${star(330,70,9)}${star(260,40,7,'#F28C7C')}`,'url(#y4)',sky('y4','#CFE7F2','#F6EAD0')),
  taps:[{label:'거북선',el:'tShip',say:'등에 뾰족한 쇠못이 있어서 아무도 올라탈 수 없었어요.'},{label:'장군',el:'tGen',say:'이순신 장군이 출발! 하고 외쳐요.'}],
  text:`그래서 거북선을 만들었어요. 거북처럼 등이 둥글게 덮여 있고 뾰족한 쇠못이 박혀 있어서, 아무도 함부로 올라탈 수 없었어요. 머리는 용 모양이었어요.`},
 {chips:['1592년'], svg:SV(`${sea(150)}
  ${[[80,190],[160,176],[240,196],[320,180],[380,200],[120,230],[280,232]].map(([x,y])=>bigShip(x,y,.5)).join('')}
  <path d="M-6 236 Q120 226 200 240 L200 286 L-6 286Z" fill="#C9B48A" ${sw()}/>
  ${hero(60,276,.66,{robe:'#EFE6D2',skin:'#EDBF95',mood:'o'})}${hero(130,278,.62,{body:'dress',hair:'bun',mood:'sad'})}`,'url(#y5)',sky('y5','#B9C2CC','#DCDCD4')),
  text:`어느 날, 바다 건너 이웃 나라 일본의 배들이 바다를 새카맣게 덮으며 쳐들어왔어요. 임진왜란이 일어난 거예요. 사람들은 겁에 질렸어요.`},
 {svg:SV(`${sea(110)}
  ${[[110,200],[150,160],[200,146],[250,160],[290,200]].map(([x,y])=>smallShip(x,y,'#8A5A3C')).join('')}
  ${[[180,236],[214,250],[236,226]].map(([x,y])=>smallShip(x,y,'#5A5560')).join('')}
  ${g(200,132,.36,turtleShip(0,0,1))}
  <path d="M86 206 Q200 100 314 206" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-dasharray="5 6"/>
  ${T(200,40,'학이 날개를 펼치듯!',20,'#FFFFFF',`stroke="#2E3A55" stroke-width="4" paint-order="stroke"`)}`,'#4F8DB5'),
  text:`이순신 장군은 거북선과 배들을 이끌고 바다로 나갔어요. 학이 날개를 펼치듯 배들을 둥글게 펼쳐 적의 배를 에워쌌지요. 장군은 여러 번 크게 이겼어요.`},
 {chips:['1597년'], svg:SV(`${sea(140)}
  ${[0,1,2,3,4,5,6,7,8,9,10,11].map(k=>smallShip(40+(k%6)*22,190+Math.floor(k/6)*30,'#8A5A3C')).join('')}
  ${[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17].map(k=>smallShip(230+(k%6)*28,150+Math.floor(k/6)*32,'#5A5560')).join('')}
  <path d="M170 160 q20 20 0 40 q-20 20 0 40" fill="none" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round"/>
  ${general(80,138,.62,{pose:'up',mood:'smile'})}
  ${T(110,40,'아직 열두 척이 있다!',18,'#FFFFFF',`stroke="#2E3A55" stroke-width="4" paint-order="stroke"`)}`,'url(#y7)',sky('y7','#B9C2CC','#DCDCD4')),
  text:`한번은 배가 열두 척밖에 남지 않았어요. 적의 배는 백 척이 넘었지요. 그래도 장군은 "아직 열두 척이 남아 있다!" 하고, 울돌목의 거센 물살을 이용해 이겼어요.`},
 {svg:SV(`${cloud(300,40,.7)}
  ${yard(200)}
  <rect x="236" y="150" width="80" height="54" fill="#B9B3A6" ${sw()}/>
  ${g(276,154,.8,`<path d="M-30 0 L-24 -60 Q0 -70 24 -60 L30 0Z" fill="#6E7A72" ${sw()}/><circle cx="0" cy="-80" r="18" fill="#6E7A72" ${sw()}/><path d="M-20 -86 Q0 -110 20 -86Z" fill="#6E7A72" ${sw()}/><path d="M18 -50 L28 4" stroke="#6E7A72" stroke-width="6" stroke-linecap="round"/>`)}
  ${kid(140,268,1.0,{pose:'hold',mood:'joy',item:coin})}
  ${star(200,100,8)}`,'url(#y8)',sky('y8','#E8F2F8','#F2EED8')),
  text:`서울 광화문에 가면 큰 칼을 찬 이순신 장군 동상을 볼 수 있어요. 백 원짜리 동전에도 장군의 얼굴이 새겨져 있어요.`},
 {kind:'end', svg:endBase('y',`${g(200,170,1.15,turtleShip(0,0,1))}`,ssKid(64,276,.5,{pose:'up',mood:'joy'}),general(338,276,.55,{pose:'up',mood:'joy'})),
  text:`놀이할 때도 대장이던 아이가 지켜 낸 선물,<br>포기하지 않는 마음.<br>오늘도 우리 곁에 있어요.<br><span class="big">끝</span>`},
 {kind:'talk'}
];
BOOKS.push({id:'yisunsin',era:'joseon',title:'이순신과 거북선',who:'이순신',teaser:'나무 칼로 대장 놀이를 하던 아이가 거북선으로 바다를 지켰어요.',pages:P,
 talk:{three:['거북선의 머리는 무슨 모양이었지?','거북처럼 엉금엉금 걸어 볼까?','동전 속 장군을 찾아볼까?'],
  five:['다리를 다쳤을 때 순신은 어떻게 했지?','배가 열두 척뿐인데도 포기하지 않은 까닭은 뭘까?','힘들어도 끝까지 해 본 적이 있어?'],
  note:'이순신(1545~1598)은 임진왜란 때 수군을 이끈 장군입니다. 어린 시절 전쟁놀이와 무과 시험 중 말에서 떨어진 일은 『이충무공행록』 등에 전합니다. 1597년 명량 해전에서는 13척으로 130여 척을 상대했습니다. 1598년 노량 해전에서 총탄에 맞아 세상을 떠나며 "나의 죽음을 알리지 말라"는 말을 남겼다고 전하며, 본문에서는 아이 눈높이에 맞춰 이 부분을 뺐습니다.'}});
})();
