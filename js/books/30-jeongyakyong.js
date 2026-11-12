/* 23권 정약용: 생각하기를 좋아한 아이와 거중기 */
(()=>{
setScene('joseon','autumn');
const jyKid=(x,y,s,o={})=>hero(x,y,s,{robe:'#D9E6C8',hair:'braid',belt:'#5E9C8A',ribbon:'#5E9C8A',...o});
const jy=(x,y,s,o={})=>hero(x,y,s,{robe:'#4C8C7A',hat:'gat',belt:K.gold,collar:'#FFF8EC',...o});
const jyOld=(x,y,s,o={})=>jy(x,y,s,{robe:'#EDE9E0',beard:'#D9D3C8',collar:'#4C8C7A',...o});
const worker=(x,y,s,o={})=>hero(x,y,s,{robe:'#D6CDB4',skin:'#EDBF95',hat:'band',bandColor:'#FFFDF6',...o});
const stone=(x,y,s=1)=>g(x,y,s,`<rect x="-30" y="-36" width="60" height="36" rx="5" fill="#A9A49A" ${sw()}/><path d="M-20 -24 h14 M4 -14 h16" stroke="#8A8478" stroke-width="2"/>`);
const crane=(x,y,s,up)=>g(x,y,s,`<path d="M-80 0 L-50 -170 M80 0 L50 -170 M-50 -170 H50" stroke="${K.wood}" stroke-width="9" stroke-linecap="round"/><path d="M-66 -80 H66" stroke="${K.wood}" stroke-width="6"/>
<circle cx="0" cy="-160" r="12" fill="#C9A15A" ${sw()}/><circle cx="-22" cy="-150" r="9" fill="#C9A15A" ${sw()}/><circle cx="22" cy="-150" r="9" fill="#C9A15A" ${sw()}/>
<rect x="-70" y="-30" width="20" height="30" fill="#8A6A44" ${sw()}/><rect x="50" y="-30" width="20" height="30" fill="#8A6A44" ${sw()}/>
<g id="lowStone" opacity="${up?0:1}"><path d="M0 -160 V-40" stroke="#5A3B2C" stroke-width="2"/>${stone(0,0,1.2)}</g>
<g id="highStone" opacity="${up?1:0}"><path d="M0 -160 V-110" stroke="#5A3B2C" stroke-width="2"/>${stone(0,-70,1.2)}</g>`);
const wall=(y)=>`<rect x="-6" y="${y}" width="412" height="70" fill="#C2BBAA" ${sw()}/>${[0,1,2].map(r=>[0,1,2,3,4,5,6,7].map(c=>`<rect x="${c*56+(r%2)*28-20}" y="${y+r*23}" width="54" height="22" fill="none" stroke="#A39C8A" stroke-width="1.6"/>`).join('')).join('')}${[0,1,2,3,4,5,6,7,8,9,10,11,12,13].map(k=>`<rect x="${k*32-6}" y="${y-14}" width="22" height="16" fill="#C2BBAA" ${sw(1.4)}/>`).join('')}`;
const P=[
 {kind:'cover', svg:coverBase('jy','영차, 거중기',`${g(70,262,.4,crane(0,0,1,true))}`,jy(220,264,1.0,{pose:'up',mood:'joy'})),
  text:`<span class="big">정약용과 신기한 거중기</span><br>위인 그림책 {no}권`},
 {svg:SV(`${cloud(300,40,.7)}
  <path d="M150 230 Q280 20 410 230Z" fill="#B8C8D6" ${sw()}/>
  <path d="M170 236 Q260 120 360 236Z" fill="#7FA88E" ${sw()}/>
  <path d="M-6 220 Q200 208 406 220 L406 286 L-6 286Z" fill="#C7D88F" ${sw()}/>
  ${jyKid(110,268,.86,{pose:'up',mood:'o'})}
  ${T(110,90,'작은 산이 큰 산을 가렸네?',16,K.red)}`,'url(#jy1)',sky('jy1','#CFE7F2','#F6EAD0')),
  text:`김홍도가 그림을 그리던 무렵, 약용이라는 아이가 살았어요. 일곱 살 약용이는 산을 보다가 시를 지었대요. "작은 산이 큰 산을 가렸네. 가까이 있어서 그렇구나!"`},
 {svg:SV(`${palace()}
  ${king(120,272,.86,{beard:HAIR,mood:'smile'})}${jy(280,272,.9,{pose:'hold',mood:'smile',item:bigBook('설계도','#4C8C7A')})}
  ${T(200,70,'수원에 새 성을 쌓자',20,K.red)}`,'#E8D3B0'),
  text:`어른이 된 정약용을 정조 임금님이 아꼈어요. 어느 날 임금님이 말했어요. "수원에 튼튼하고 멋진 성을 쌓고 싶네. 그대가 계획을 세워 보게."`},
 {svg:SV(`<circle cx="340" cy="46" r="24" fill="#F7B640" ${sw()}/>${yard(200)}
  ${stone(260,236,1.4)}
  ${worker(170,268,.84,{pose:'hold',mood:'sad'})}${worker(330,268,.84,{pose:'hold',mood:'sad'})}
  ${T(250,120,'끙끙… 너무 무거워',18,K.red)}`,'url(#jy3)',sky('jy3','#F6DFA8','#F2C27A')),
  text:`그런데 성을 쌓으려면 커다란 돌을 높이 들어 올려야 했어요. 사람들이 끙끙대며 돌을 날랐지만 너무 무겁고 힘들었어요.`},
 {svg:SV(`${room()}
  <rect x="220" y="50" width="140" height="110" fill="#FBF4E2" ${sw()}/>${g(290,150,.5,crane(0,0,1,true))}
  <rect x="40" y="200" width="80" height="20" fill="#5E9C8A" ${sw(1.4)}/><rect x="44" y="180" width="72" height="20" fill="#3F6FA8" ${sw(1.4)}/>
  ${jy(150,268,.9,{pose:'hold',mood:'smile',item:brush})}`,'#EADCC0'),
  text:`정약용은 곰곰이 생각하고, 먼 나라의 책도 찾아 읽었어요. 그리고 도르래를 이용한 기계를 그렸어요. 이름은 거중기예요.`},
 {svg:SV(`${yard(214)}
  ${crane(200,226,1.0,false)}
  <g id="tWorker">${worker(70,268,.74,{arms:'pullUp',mood:'joy',face:'right',prop:H=>`<path d="M${H.L[0]} ${H.L[1]} L146 -259 M${H.R[0]} ${H.R[1]} L146 -259" stroke="#5A3B2C" stroke-width="5" stroke-linecap="round"/>`})}</g>${worker(330,268,.74,{arms:'pullUp',mood:'joy',face:'left',prop:H=>`<path d="M${H.L[0]} ${H.L[1]} L-146 -259 M${H.R[0]} ${H.R[1]} L-146 -259" stroke="#5A3B2C" stroke-width="5" stroke-linecap="round"/>`})}`,'url(#jy5)',sky('jy5','#CFE7F2','#F6EAD0')),
  taps:[{label:'줄 당기기',el:'tWorker',say:'영차! 줄을 당기니 무거운 돌이 번쩍 올라가요.',show:['highStone'],hide:['lowStone']},{label:'다시 내리기',el:'tWorker',say:'스르르, 돌이 다시 내려와요.',show:['lowStone'],hide:['highStone']}],tapHint:'줄을 당겨 볼까요?',
  text:`거중기의 줄을 당기자, 그렇게 무겁던 돌이 번쩍 올라갔어요! 도르래 여러 개가 힘을 나눠 주어서 적은 힘으로도 들 수 있었지요.`},
 {chips:['1796년'], svg:SV(`${cloud(80,40,.7)}${wall(160)}
  <path d="M150 160 L150 110 L250 110 L250 160" fill="#C2BBAA" ${sw()}/><path d="M130 112 Q200 70 270 112Z" fill="#4A4A55" ${sw()}/>
  <path d="M-6 230 L406 230 L406 286 L-6 286Z" fill="#BCD38F"/>
  ${jy(90,280,.6,{pose:'up',mood:'joy'})}${worker(170,280,.56,{pose:'up',mood:'joy'})}${worker(250,280,.56,{pose:'up',mood:'joy'})}${worker(330,280,.56,{pose:'up',mood:'joy'})}`,'url(#jy6)',sky('jy6','#CFE7F2','#F6EAD0')),
  text:`덕분에 십 년은 걸릴 거라던 수원 화성이 삼 년도 안 되어 완성되었어요. 일한 사람들은 품삯도 받았대요.`},
 {chips:['1801년'], svg:SV(`<circle cx="330" cy="50" r="20" fill="#F6F0D6" ${sw()}/>${sea(190)}
  <path d="M-6 190 Q100 170 200 186 L200 290 L-6 290Z" fill="#7FA88E" ${sw()}/>
  ${hut(30,150)}
  ${jyOld(150,250,.8,{pose:'hold',mood:'smile',item:brush})}
  ${[0,1,2,3].map(k=>`<rect x="${110+k*4}" y="${270-k*10}" width="60" height="10" rx="2" fill="${['#3F6FA8','#5E9C8A','#C9A15A','#7A6AA8'][k]}" ${sw(1.2)}/>`).join('')}`,'url(#jy7)',sky('jy7','#28305A','#4D4270')),
  text:`정조 임금님이 세상을 떠난 뒤, 정약용은 먼 바닷가 마을 강진으로 쫓겨났어요. 슬펐지만, 그곳에서 열여덟 해 동안 오백 권이 넘는 책을 썼어요.`},
 {svg:SV(`${cloud(80,40,.7)}${wall(150)}
  <path d="M-6 220 L406 220 L406 286 L-6 286Z" fill="#BCD38F"/>
  ${g(330,226,.36,crane(0,0,1,true))}
  ${kid(140,268,1.0,{pose:'up',mood:'joy'})}${hero(240,268,.9,{body:'dress',hair:'bun',top:'#F2C14E',skirt:'#5B7FB8',mood:'smile'})}`,'url(#jy8)',sky('jy8','#E8F2F8','#F2EED8')),
  text:`수원 화성은 지금도 그 모습 그대로 남아 세계유산이 되었어요. 공사장의 커다란 크레인에도 거중기처럼 도르래가 들어 있답니다.`},
 {kind:'end', svg:endBase('jy',`${crane(200,226,1.0,true)}`,jyKid(64,276,.5,{pose:'up',mood:'joy'}),jy(338,276,.55,{pose:'up',mood:'joy'})),
  text:`생각하기를 좋아한 아이가 남긴 선물,<br>힘을 덜어 주는 지혜.<br>오늘도 우리 곁에 있어요.<br><span class="big">끝</span>`},
 {kind:'talk'}
];
BOOKS.push({id:'jeongyakyong',era:'joseon',title:'정약용과 신기한 거중기',who:'정약용',teaser:'무거운 돌을 번쩍 들어 올리는 기계가 있었대요. 누가 만들었을까요?',pages:P,
 talk:{three:['거중기 줄을 당기면 돌이 어떻게 되지?','줄 당기는 흉내, 영차!','성벽 돌은 몇 개일까? 세어 볼까?'],
  five:['작은 산이 큰 산을 가린 까닭은 뭘까?','거중기는 왜 적은 힘으로 돌을 들 수 있었을까?','힘든 일을 쉽게 하는 방법을 생각해 본 적 있어?'],
  note:'정약용(1762~1836)은 일곱 살에 "작은 산이 큰 산을 가리니 멀고 가까움이 달라서라네"라는 시를 지었다고 전합니다. 정조의 명으로 수원 화성을 설계하고, 중국에서 들어온 서양 기계책 『기기도설』을 참고해 거중기를 고안했습니다. 화성은 1794년 공사를 시작해 1796년 34개월 만에 완공되었고, 일꾼에게 품삯을 주었습니다. 1801년 신유박해로 강진에 유배되어 18년 동안 『목민심서』 등 500여 권을 썼습니다. 수원 화성은 1997년 유네스코 세계유산이 되었습니다.'}});
})();
