/* 손병희: 삼일 운동을 함께 준비한 사람 */
(()=>{
setScene('modern','winter');
const sb=(x,y,s,o={})=>person(x,y,s,{robe:'#3F4A5A',deco:`<path d="M-14 -66 L0 -50 L14 -66" fill="#E6E1D6" ${sw(1.6)}/>`,
  front:`<path d="M-31 -98 Q-30 -128 0 -128 Q30 -128 31 -98 Q0 -112 -31 -98Z" fill="${HAIR}" ${sw()}/><path d="M-12 -74 q12 8 24 0" fill="none" stroke="${HAIR}" stroke-width="4"/>`,...o});
const rep=(x,y,s,c,o={})=>hero(x,y,s,{robe:c,hat:'gat',belt:'#8C7350',...o});
const monk=(x,y,s,o={})=>hero(x,y,s,{hair:'bald',robe:'#A7A49B',belt:false,collar:'#EDE9E0',deco:kasaL,...o});
const RC=['#EDE9E0','#5E7FA8','#B9A475','#4C8C7A'];
const paper=(x,y,s)=>g(x,y,s,`<rect x="-30" y="-40" width="60" height="40" fill="#FFFDF6" ${sw()}/>${[0,1,2,3].map(k=>`<path d="M${18-k*12} -34 V-6" stroke="#2B1E16" stroke-width="2" stroke-dasharray="4 3"/>`).join('')}`);
const P=[
 {kind:'cover', svg:coverBase('sb','서른세 사람',`${paper(300,250,1.3)}`,sb(130,264,1.0,{arms:'holdFront',prop:H=>paper((H.L[0]+H.R[0])/2,H.L[1]+20,.7),mood:'smile'})),
  text:`<span class="big">손병희와 삼일 운동</span><br>위인 그림책 {no}권`},
 {svg:SV(`${hills('#A9CDB4','#BCD38F',190,214)}
  ${sb(200,272,.9,{mood:'smile',arms:'armsOpen'})}
  ${[0,1,2,3].map(k=>hero(50+k*60+(k>1?140:0),276,.58,{robe:['#D6CDB4','#E9CFC0','#C9D8B4','#B9A475'][k],hat:'band',bandColor:'#FFFDF6',mood:'joy',face:k>1?'left':'right'})).join('')}
  ${T(200,80,'사람이 곧 하늘이다',20,K.red)}`,'url(#sb1)',sky('sb1','#CFE7F2','#F6EAD0')),
  text:`손병희는 천도교를 이끈 사람이에요. 천도교에서는 "사람이 곧 하늘이다"라고 가르쳤어요. 누구나 하늘처럼 귀하다는 뜻이에요.`},
 {svg:SV(`${room()}
  ${sb(200,262,.9,{stance:'sit',arms:'pointR',mood:'o',face:'right'})}
  ${rep(80,262,.72,RC[0],{stance:'sit',arms:'lap',mood:'o',face:'right'})}${monk(320,262,.72,{stance:'sit',arms:'lap',mood:'o',face:'left'})}
  ${T(200,80,'다 함께 독립을 외칩시다',18,K.red)}`,'#EADCC0'),
  text:`일본에 나라를 빼앗긴 지 9년째, 손병희는 생각했어요. "종교가 달라도, 사는 곳이 달라도 모두 함께 독립을 외칩시다." 천도교, 기독교, 불교의 대표들이 몰래 모였어요.`},
 {svg:SV(`${room()}
  <g id="tPaper">${paper(200,230,1.8)}</g>
  ${rep(80,272,.72,RC[1],{mood:'smile',arms:'writeR',prop:H=>PROP.brush(H),face:'right'})}${sb(320,272,.78,{mood:'smile',arms:'pointL',face:'left'})}`,'#EADCC0'),
  taps:[{label:'독립 선언서',el:'tPaper',say:'"우리는 우리나라가 독립국임을 선언한다." 이렇게 시작해요.'},{label:'서른세 명',el:'tPaper',say:'서른세 사람이 이름을 적었어요. 민족 대표 33인이에요.'}],tapHint:'종이를 눌러 볼까요?',
  text:`그들은 독립을 알리는 글, '독립 선언서'를 만들었어요. 맨 앞에 손병희의 이름이 있었고, 모두 서른세 명이 이름을 적었어요.`},
 {svg:SV(`<rect x="-6" y="-6" width="412" height="292" fill="#2A2438"/><path d="M-6 220 H406 V290 H-6Z" fill="#4A3A2E"/>
  ${candle(70,236,1.2)}<circle cx="70" cy="190" r="200" fill="url(#candleG)" opacity=".5"/>
  ${[0,1,2,3,4].map(k=>`<rect x="${150+k*10}" y="${250-k*8}" width="60" height="8" fill="#FFFDF6" ${sw(1)}/>`).join('')}
  ${hero(300,272,.8,{robe:'#D6CDB4',hat:'band',bandColor:'#FFFDF6',arms:'holdFront',mood:'smile',face:'left'})}`,'#2A2438',candleDef),
  text:`인쇄소에서는 밤새 몰래 선언서 2만 장 넘게 찍었어요. 그리고 전국 곳곳으로 조심조심 날랐어요.`},
 {chips:['1919년 3월 1일'], svg:SV(`${townscape(150,7)}<path d="M-6 170 H406 V290 H-6Z" fill="#D9C49A"/>
  ${[...Array(12)].map((_,k)=>{const x=(k*33)%400+12,y=196+Math.floor(k/6)*20;return hero(x,y,.34,{robe:['#FFFFFF','#EFE6D2','#D6CDB4'][k%3],hat:['gat','','band'][k%3],bandColor:'#FFFFFF',arms:k%2?'flagR':'cheer',prop:k%2?H=>PROP.taeguk(H):'',mood:'joy'})}).join('')}
  ${hero(200,290,.9,{robe:'#FFFFFF',hair:'topknot',arms:'flagR',prop:H=>PROP.taeguk(H),mood:'joy'})}
  ${T(200,40,'대한 독립 만세!',26,K.red)}`,'url(#sb2)',sky('sb2','#CFE7F2','#F6EAD0')),
  text:`1919년 3월 1일, 서울 탑골공원에서 독립 선언서를 읽고 사람들이 "대한 독립 만세!"를 외쳤어요. 만세 소리는 전국으로 퍼졌어요. 유관순이 만세를 부른 것도 이때였어요.`},
 {svg:SV(`${room()}
  ${sb(200,272,.9,{mood:'smile',arms:'pray'})}
  ${T(200,80,'겁먹지 않고 당당하게',18,K.red)}`,'#EADCC0'),
  text:`손병희와 대표들은 일본 경찰에게 붙잡혔어요. 하지만 겁먹지 않고 당당하게 독립을 말했어요. 손병희는 감옥에서 크게 앓았고, 몇 해 뒤 세상을 떠났어요.`},
 {svg:SV(`${room()}
  ${kid(130,266,.86,{mood:'joy',arms:'flagR',prop:H=>PROP.taeguk(H),face:'right'})}${hero(300,266,.86,{body:'dress',hair:'bun',top:'#F2C14E',skirt:'#5B7FB8',mood:'smile',face:'left',arms:'pointL'})}
  <rect x="210" y="90" width="70" height="80" rx="6" fill="#FFFDF6" ${sw()}/><rect x="210" y="90" width="70" height="20" rx="6" fill="#C9473B"/>${T(245,104,'3월',12,'#FFFFFF')}${T(245,150,'1',34,K.ink)}`,'#EFE3C8'),
  text:`해마다 3월 1일은 삼일절이에요. 그날 대문에 태극기를 달며, 모두 함께 용기를 냈던 사람들을 떠올려 봐요.`},
 {kind:'end', svg:endBase('sb',`${paper(200,220,2.2)}`,kid(64,276,.5,{arms:'cheer',mood:'joy'}),sb(338,276,.55,{arms:'waveR',mood:'joy'})),
  text:`달라도 함께 모인 사람들이 남긴 선물,<br>삼일절.<br>오늘도 우리 곁에 있어요.<br><span class="big">끝</span>`},
 {kind:'talk'}
];
BOOKS.push({id:'sonbyeonghui',era:'modern',title:'손병희와 삼일 운동',who:'손병희',teaser:'서로 다른 사람들을 하나로 모아 독립을 외친 사람이 있어요.',pages:P,
 talk:{three:['독립 선언서에 이름을 적은 사람은 몇 명이었지?','"만세!" 하고 두 팔을 들어 볼까?','3월 1일은 무슨 날이지?'],
  five:['"사람이 곧 하늘이다"는 무슨 뜻일까?','생각이 다른 사람들이 함께 모이려면 무엇이 필요할까?','삼일절에 우리 가족은 무엇을 할 수 있을까?'],
  note:'손병희(1861~1922)는 동학을 이은 천도교의 3대 교주입니다. 1919년 3·1 운동을 준비하며 천도교·기독교·불교 대표를 모았고, 독립선언서에 민족 대표 33인 가운데 첫 번째로 서명했습니다. 3월 1일 민족 대표들은 태화관에서 선언식을 하고 체포되었고, 같은 날 탑골공원에서 학생과 시민들이 선언서를 낭독하고 만세 시위를 시작했습니다. 손병희는 옥중에서 병을 얻어 1922년 세상을 떠났습니다. "사람이 곧 하늘(인내천)"은 천도교의 중심 사상입니다.'}});
})();
