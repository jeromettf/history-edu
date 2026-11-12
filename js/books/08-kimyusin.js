/* 4권 김유신: 친구와 힘을 모은 소년 */
(()=>{
setScene('samguk','summer');
const hwarang=(x,y,s,o={})=>hero(x,y,s,{robe:'#6C9BD2',hair:'braid',belt:'#C9473B',ribbon:'#EE98A6',...o});
const chunchu=(x,y,s,o={})=>hero(x,y,s,{robe:'#E7C76A',hair:'braid',belt:'#5E9C8A',ribbon:'#5E9C8A',...o});
const general=(x,y,s,o={})=>hero(x,y,s,{body:'armor',robe:'#4F7DBA',hat:'helmet',...o});
const skingC=(x,y,s,o={})=>hero(x,y,s,{robe:'#5E9C8A',hat:'crown',belt:K.gold,...o});
const munhui=(x,y,s,o={})=>hero(x,y,s,{body:'dress',hair:'bun',top:'#FFFDF6',skirt:'#E79AA8',...o});
const flag=(x,y,c,t,h=80)=>`<path d="M${x} ${y} V${y-h}" ${sw(3)}/><rect x="${x}" y="${y-h}" width="54" height="34" fill="${c}" ${sw(1.6)}/>${T(x+27,y-h+23,t,15,'#FBF4E2')}`;
const P=[
 {kind:'cover', svg:coverBase('k','친구와 함께',`${ball(200,240,12)}`,`${hwarang(140,264,.92,{pose:'up',mood:'joy'})}${chunchu(262,264,.92,{pose:'up',mood:'joy'})}`),
  text:`<span class="big">김유신과 하나 된 세 나라</span><br>위인 그림책 {no}권`},
 {svg:SV(`
  <path d="M-6 170 Q60 90 140 140 Q210 70 290 136 Q350 100 406 150 L406 230 L-6 230Z" fill="#94BFA6" ${sw()}/>
  ${cloud(320,40,.7)}${hills('#A9CDB4','#C7D88F',200,226)}
  ${hwarang(150,268,.9,{pose:'up',mood:'joy'})}${hwarang(250,270,.74,{robe:'#E79AA8',mood:'joy'})}${hwarang(320,272,.7,{robe:'#E7C76A',mood:'smile'})}`,'url(#k1)',sky('k1','#CFE7F2','#F6EAD0')),
  text:`고구려, 백제, 신라, 세 나라가 있던 때, 신라에 유신이라는 소년이 살았어요. 유신은 열다섯 살에 화랑이 되었어요. 화랑은 산과 들을 다니며 몸과 마음을 기르는 소년들이에요.`},
 {chips:['전해 오는 이야기'], svg:SV(`
  ${star(60,40,4,'#F6F0D6')}${star(200,30,3,'#F6F0D6')}${star(340,50,4,'#F6F0D6')}
  ${cave(200,250,1.6)}
  <circle cx="200" cy="200" r="70" fill="url(#kg2)"/>
  ${hwarang(200,252,.86,{pose:'hold',mood:'sleep'})}
  ${T(200,74,'세 나라가 다투지 않게 해 주세요',15,'#F6F0D6')}`,'url(#k2)',sky('k2','#1F2748','#46406A')+glow('kg2','#FFE9A6',.6)),
  text:`어느 날 유신은 깊은 산속 동굴에 들어가 기도했대요. "세 나라가 더는 다투지 않게 해 주세요." 유신은 커서 나라를 편안하게 만들고 싶었어요.`},
 {chips:['전해 오는 이야기'], svg:SV(`
  ${cloud(80,40,.8)}${hills('#A9CDB4','#C7D88F',196,220)}
  ${hwarang(130,268,.9,{pose:'up',mood:'joy'})}
  <g id="tChunchu">${chunchu(270,268,.9,{pose:'down',mood:'o'})}</g>
  <g id="tBall">${ball(196,210,12)}</g><path d="M176 222 q-8 6 -16 4" fill="none" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round"/>
  <path d="M296 230 q8 12 4 22" fill="none" stroke="#5E9C8A" stroke-width="4" stroke-linecap="round"/>${T(330,236,'툭!',20,K.red)}`,'url(#k3)',sky('k3','#CFE7F2','#F6EAD0')),
  taps:[{label:'공',el:'tBall',say:'뻥! 공이 하늘 높이 날아가요.'},{label:'춘추',el:'tChunchu',say:'앗, 옷고름이 툭 떨어졌어요!'}],
  text:`유신에게는 춘추라는 단짝 친구가 있었어요. 하루는 둘이 공차기를 하다가, 유신이 그만 춘추의 옷고름을 밟아 떨어뜨렸어요.`},
 {chips:['전해 오는 이야기'], svg:SV(`
  <rect x="-6" y="-6" width="412" height="230" fill="#EADCC0"/>
  <rect x="40" y="40" width="80" height="80" rx="4" fill="#BFE0F0" stroke="#8C6A48" stroke-width="5"/>
  <rect x="-6" y="216" width="412" height="70" fill="#DDB16A"/>
  ${hwarang(80,268,.78,{mood:'joy'})}
  ${munhui(200,268,.86,{pose:'hold',mood:'smile',item:`<path d="M-20 -30 Q0 -40 20 -30" fill="none" stroke="#5E9C8A" stroke-width="4"/><path d="M14 -34 L30 -50" stroke="#9A9A9A" stroke-width="1.6"/>`})}
  ${chunchu(320,268,.86,{mood:'joy'})}
  ${heart(260,120)}${heart(290,96)}`,'#EADCC0'),
  text:`유신은 춘추를 집으로 데려가 누이 문희에게 옷고름을 달아 달라고 했어요. 이 일로 춘추와 문희는 서로 좋아하게 되어 결혼했어요. 두 친구는 한 가족이 되었어요.`},
 {svg:SV(`
  <path d="M-6 200 Q100 150 200 170 Q300 150 406 200 L406 286 L-6 286Z" fill="#B8C4C0" ${sw()}/>
  ${flag(50,200,'#4F7DBA','고구려')}${flag(170,180,'#C9A15A','백제')}${flag(290,200,'#5E9C8A','신라')}
  <path d="M-6 236 Q200 226 406 236 L406 286 L-6 286Z" fill="#C7D88F" ${sw()}/>
  ${hero(120,272,.74,{robe:'#EFE6D2',skin:'#EDBF95',mood:'sad'})}${hero(220,272,.7,{body:'dress',hair:'bun',mood:'sad'})}${kid(300,272,.62,{mood:'sad'})}`,'url(#k5)',sky('k5','#C9D2D8','#E6E2D4')),
  text:`그런데 세 나라는 자주 다투었어요. 다툼이 오래 이어지자 백성들은 지쳐 갔어요.`},
 {svg:SV(`
  ${palace()}
  ${skingC(132,272,.92,{pose:'up',mood:'joy'})}${general(268,272,.92,{pose:'up',mood:'joy'})}
  ${star(200,80,12)}${star(200,140,7,'#F28C7C')}`,'#E8D3B0'),
  text:`어른이 된 춘추는 신라의 임금님이 되고, 유신은 장군이 되었어요. 두 친구는 힘을 모아 오랜 다툼을 끝낼 방법을 찾았어요.`},
 {chips:['676년'], svg:SV(`
  ${cloud(80,44,.8)}${cloud(320,50,.7)}
  <path d="M-6 200 Q100 160 200 176 Q300 160 406 200 L406 286 L-6 286Z" fill="#A9CDB4" ${sw()}/>
  <path d="M-6 236 Q200 226 406 236 L406 286 L-6 286Z" fill="#C7D88F" ${sw()}/>
  <path d="M200 200 V70" ${sw(3)}/><rect x="200" y="70" width="90" height="56" fill="#5E9C8A" ${sw()}/>${T(245,106,'하나',24,'#FBF4E2')}
  ${hero(80,272,.62,{robe:'#4F7DBA',mood:'joy',pose:'up'})}${hero(150,276,.58,{body:'dress',hair:'bun',mood:'joy'})}${hero(262,276,.58,{robe:'#C9A15A',mood:'joy',pose:'up'})}${hero(332,272,.62,{robe:'#5E9C8A',mood:'joy',pose:'up'})}`,'url(#k6)',sky('k6','#CFE7F2','#F6EAD0')),
  text:`두 친구가 힘을 모은 뒤, 마침내 신라가 세 나라를 하나로 모았어요. 이것을 삼국 통일이라고 해요. 이제 사람들은 한 나라에서 함께 살게 되었어요.`},
 {svg:SV(`
  ${hills('#A9CDB4','#C7D88F',196,220)}
  <path d="M250 210 Q300 150 350 210Z" fill="#8FB88A" ${sw()}/><path d="M60 210 Q100 166 140 210Z" fill="#8FB88A" ${sw()}/>
  ${kid(140,268,.9,{pose:'up',mood:'joy'})}${hero(250,268,.86,{body:'dress',hair:'braid',top:'#E98FA0',skirt:'#5B7FB8',pose:'up',mood:'joy'})}
  ${ball(196,150,12)}${star(196,110,8)}`,'url(#k8)',sky('k8','#E8F2F8','#F2EED8')),
  text:`경주에 가면 지금도 신라 사람들이 남긴 커다랗고 둥근 무덤을 볼 수 있어요. 대릉원에는 그런 무덤이 스무 개 넘게 모여 있어요.`},
 {kind:'end', svg:endBase('k',`${ball(200,120,58)}`,hwarang(64,276,.5,{pose:'up',mood:'joy'}),chunchu(338,276,.5,{pose:'up',mood:'joy'})),
  text:`친구와 공놀이를 좋아한 소년이 남긴 선물,<br>힘을 모으는 마음.<br>오늘도 우리 곁에 있어요.<br><span class="big">끝</span>`},
 {kind:'talk'}
];
BOOKS.push({id:'kimyusin',era:'samguk',title:'김유신과 하나 된 세 나라',who:'김유신',teaser:'공차기를 좋아한 소년 유신이 친구와 힘을 모아 세 나라를 하나로 모았어요.',pages:P,
 talk:{three:['유신과 춘추가 한 놀이는 뭐였지?','공 차는 흉내, 뻥!','깃발을 세어 볼까? 하나, 둘, 셋!'],
  five:['유신은 왜 춘추를 집으로 데려갔을까?','친구랑 힘을 합쳐서 해낸 일이 있어?','다툼을 끝내려면 어떻게 해야 할까?'],
  note:'김유신(595~673)은 가야 왕족의 후손으로 신라의 장군이 되었습니다. 동굴 기도와 공차기 일화는 『삼국사기』와 『삼국유사』에 전합니다. 삼국 통일은 신라가 당나라와 손잡고 백제(660)와 고구려(668)를 무너뜨린 뒤, 당나라 군대까지 몰아낸 676년에 마무리되었습니다. 김유신은 통일이 마무리되기 전인 673년에 세상을 떠났고, 고구려의 북쪽 땅까지 모두 아우른 통일은 아니었다는 점도 아이가 크면 함께 이야기해 볼 만합니다.'}});
})();
