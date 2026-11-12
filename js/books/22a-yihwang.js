/* 이황: 어린 학자와 편지로 생각을 나눈 선비 */
(()=>{
setScene('joseon','spring','soft');
const yh=(x,y,s,o={})=>hero(x,y,s,{robe:'#EDE9E0',hat:'gat',belt:'#5E7FA8',collar:'#5E7FA8',beard:HAIR,...o});
const yhOld=(x,y,s,o={})=>yh(x,y,s,{beard:'#E6E1D6',...o});
const yhKid=(x,y,s,o={})=>hero(x,y,s,{robe:'#D9E6C8',hair:'braid',belt:'#5E7FA8',ribbon:HAIR,...o});
const gi=(x,y,s,o={})=>hero(x,y,s,{robe:'#C9D8E8',hat:'gat',belt:'#8C7350',...o});
const student=(x,y,s,c,o={})=>hero(x,y,s,{robe:c,hat:'gat',belt:'#8C7350',...o});
const plum=(x,y,s)=>g(x,y,s,`<path d="M0 0 Q-6 -30 10 -60 M4 -30 Q24 -40 30 -60 M10 -60 Q0 -76 -10 -84" fill="none" stroke="#5A3B2C" stroke-width="5" stroke-linecap="round"/>${[[10,-60],[30,-60],[-10,-84],[20,-46],[-2,-70],[26,-74]].map(([a,b])=>`<circle cx="${a}" cy="${b}" r="5" fill="#FBE3EA" ${sw(1)}/><circle cx="${a}" cy="${b}" r="1.6" fill="#E98FA0"/>`).join('')}`);
const letter=(x,y,s)=>g(x,y,s,`<rect x="-24" y="-30" width="48" height="34" fill="#FFFDF6" ${sw()}/>${[0,1,2,3].map(k=>`<path d="M${12-k*8} -24 V-2" stroke="#2B1E16" stroke-width="2" stroke-dasharray="4 3"/>`).join('')}`);
const desk=(x,y,w=90)=>`<rect x="${x-w/2}" y="${y}" width="${w}" height="12" rx="2" fill="#8A5A3C" ${sw()}/><path d="M${x-w/2+8} ${y+12} v14 M${x+w/2-8} ${y+12} v14" stroke="#8A5A3C" stroke-width="6"/>`;
const P=[
 {kind:'cover', svg:coverBase('yh','매화와 편지',`${plum(310,262,1.2)}`,yhOld(130,264,1.0,{arms:'holdFront',prop:H=>letter((H.L[0]+H.R[0])/2,H.L[1]+20,.7),mood:'smile'})),
  text:`<span class="big">퇴계 이황과 편지 친구</span><br>위인 그림책 {no}권`},
 {svg:SV(`${room()}
  ${yhKid(150,262,.9,{stance:'sit',arms:'holdFront',prop:H=>`<g transform="translate(${(H.L[0]+H.R[0])/2} ${H.L[1]+30})">${openBook}</g>`,mood:'o',face:'right'})}
  ${[0,1].map(k=>`<path d="M${240+k*30} 140 q10 -14 0 -26" fill="none" ${sw(2)}/>`).join('')}${T(300,100,'왜 그럴까?',18,K.red)}`,'#EADCC0'),
  text:`안동의 시골 마을에 이황이라는 아이가 살았어요. 이황은 책을 읽다가 궁금한 게 생기면 밥 먹는 것도 잊을 만큼 깊이 생각했대요.`},
 {svg:SV(`${room()}
  ${yh(120,262,.9,{stance:'sit',arms:'pointR',mood:'smile',face:'right'})}
  ${[0,1,2].map(k=>student(230+k*60,262,.7,['#C9D8E8','#D6CDB4','#E9CFC0'][k],{stance:'sit',arms:'lap',mood:k===1?'o':'smile',face:'left'})).join('')}`,'#EADCC0'),
  text:`어른이 된 이황은 나라의 높은 벼슬을 여러 번 사양하고 고향으로 돌아왔어요. 그리고 '도산서당'을 짓고 제자들을 가르쳤어요. 사람들은 그를 '퇴계 선생님'이라고 불렀어요.`},
 {svg:SV(`${ridge(160,'#A9CDB4',30,2)}<path d="M-6 200 Q200 190 406 202 L406 290 L-6 290Z" fill="#BCD38F"/>
  <g id="tLetters">${yhOld(80,272,.78,{arms:'holdFront',prop:H=>letter((H.L[0]+H.R[0])/2,H.L[1]+18,.6),mood:'smile',face:'right'})}${gi(320,272,.78,{arms:'holdFront',prop:H=>letter((H.L[0]+H.R[0])/2,H.L[1]+18,.6),mood:'o',face:'left'})}</g>
  <path d="M130 170 Q200 120 270 170" fill="none" stroke="#5A3B2C" stroke-width="2" stroke-dasharray="6 6"/>${letter(200,150,.6)}
  ${T(80,100,'퇴계',18,K.red)}${T(320,100,'기대승',18,'#3F6FA8')}`,'url(#yh1)',sky('yh1','#CFE7F2','#F6EAD0')),
  taps:[{label:'편지 보내기',el:'tLetters',say:'"나는 이렇게 생각하오." 이황이 편지를 보내요.'},{label:'답장',el:'tLetters',say:'"선생님, 저는 조금 다르게 생각합니다." 기대승의 답장이 와요.'}],tapHint:'두 사람을 눌러 볼까요?',
  text:`어느 날 스물여섯 살이나 어린 기대승이 이황과 생각이 다르다고 말했어요. 이황은 화내지 않고 편지를 썼어요. 두 사람은 8년 동안 편지를 주고받으며 생각을 나누었어요.`},
 {svg:SV(`${room()}
  ${yhOld(200,272,.9,{mood:'smile',arms:'pray'})}
  ${T(200,80,'자네 말도 일리가 있네',18,K.red)}${letter(80,250,.9)}${letter(330,246,.9)}`,'#EADCC0'),
  text:`이황은 높은 선생님이었지만, 어린 학자의 말이 옳으면 "자네 말이 맞네" 하고 자기 생각을 고쳤어요. 그래서 더 많은 사람이 이황을 존경했어요.`},
 {svg:SV(`${yard(200)}
  ${plum(300,262,1.4)}
  ${yhOld(140,272,.86,{mood:'joy',arms:{L:[-30,-30],R:[56,-50]},prop:H=>`<path d="M${H.R[0]} ${H.R[1]} q20 4 30 18" fill="none" stroke="#6FA8C8" stroke-width="3" stroke-dasharray="3 4"/>`,face:'right'})}`,'#D9CCAE'),
  text:`이황은 매화를 무척 아꼈어요. 매화를 노래한 시를 아주 많이 지었고, 마지막 날까지 "매화에 물을 주어라" 하고 챙겼대요.`},
 {svg:SV(`${room()}
  <rect x="120" y="150" width="160" height="80" rx="6" fill="#B9D6A8" ${sw()}/><circle cx="160" cy="190" r="24" fill="#EDE9E0" ${sw(1.4)}/>${T(240,198,'1000',22,'#3F5A7A')}
  ${kid(80,282,.8,{mood:'o',arms:'pointR',face:'right'})}${hero(320,282,.8,{body:'dress',hair:'bun',top:'#F2C14E',skirt:'#5B7FB8',mood:'smile',face:'left'})}`,'#EFE3C8'),
  text:`지금 천 원짜리 지폐에 그려진 분이 바로 퇴계 이황이에요. 안동에는 이황을 기리는 도산서원이 있어요.`},
 {kind:'end', svg:endBase('yh',`${plum(200,230,1.6)}`,kid(64,276,.5,{arms:'cheer',mood:'joy'}),yhOld(338,276,.55,{arms:'waveR',mood:'joy'})),
  text:`어린 사람의 말에도 귀 기울인 선생님이 남긴 선물,<br>서로 다른 생각을 나누는 법.<br>오늘도 우리 곁에 있어요.<br><span class="big">끝</span>`},
 {kind:'talk'}
];
BOOKS.push({id:'yihwang',era:'joseon',title:'퇴계 이황과 편지 친구',who:'이황',teaser:'나이 어린 학자와 8년 동안 편지로 생각을 나눈 선생님이 있어요.',pages:P,
 talk:{three:['천 원짜리 돈에 누가 있었지?','매화는 무슨 색이었어?','편지 받는 흉내 내 볼까? "고마워!"'],
  five:['생각이 다른 친구와 어떻게 이야기하면 좋을까?','이황은 왜 자기 생각을 고쳤을까?','엄마 아빠와 생각이 다를 때 어떻게 말하면 좋을까?'],
  note:'이황(1501~1570)은 조선 중기의 대표적인 성리학자로 호는 퇴계입니다. 여러 차례 벼슬을 사양하고 고향 안동에 도산서당을 지어 제자를 길렀으며, 사후 도산서원이 세워졌습니다. 26세 아래의 기대승과 1559년부터 8년가량 편지로 사단칠정 논쟁을 벌였고, 그 과정에서 자신의 견해를 일부 고쳤습니다. 매화를 노래한 시를 모은 『매화시첩』이 있고, 마지막 날 매화 화분에 물을 주라고 했다는 이야기가 제자의 기록에 전합니다. 1975년부터 천 원권 지폐 인물입니다.'}});
})();
