/* 신채호: 우리 역사를 다시 쓴 사람 */
(()=>{
setScene('modern','autumn');
const LEG=['전해 오는 이야기'];
const ch=(x,y,s,o={})=>person(x,y,s,{robe:'#4C5A6E',deco:`<path d="M-14 -66 L0 -50 L14 -66" fill="#E6E1D6" ${sw(1.6)}/>`,
  front:`<path d="M-31 -98 Q-30 -128 0 -128 Q30 -128 31 -98 Q0 -112 -31 -98Z" fill="${HAIR}" ${sw()}/><path d="M-10 -76 q10 6 20 0" fill="none" stroke="${HAIR}" stroke-width="3"/>`,...o});
const chKid=(x,y,s,o={})=>hero(x,y,s,{robe:'#D9E6C8',hair:'braid',belt:'#5E7FA8',ribbon:HAIR,...o});
const desk=(x,y,w=90)=>`<rect x="${x-w/2}" y="${y}" width="${w}" height="12" rx="2" fill="#8A5A3C" ${sw()}/><path d="M${x-w/2+8} ${y+12} v14 M${x+w/2-8} ${y+12} v14" stroke="#8A5A3C" stroke-width="6"/>`;
const news=(x,y,s)=>g(x,y,s,`<rect x="-34" y="-46" width="68" height="46" fill="#F4EFE0" ${sw()}/><path d="M-26 -36 h52" stroke="#2B1E16" stroke-width="4"/>${[0,1,2,3].map(k=>`<path d="M-26 ${-26+k*7} h${k%2?40:52}" stroke="#8A8580" stroke-width="1.6"/>`).join('')}`);
const P=[
 {kind:'cover', svg:coverBase('ch','역사는 우리 거울',`${news(300,250,1.2)}`,ch(130,264,1.0,{arms:'writeR',prop:H=>PROP.brush(H),mood:'smile'})),
  text:`<span class="big">신채호와 우리 역사</span><br>위인 그림책 {no}권`},
 {svg:SV(`${room()}
  ${chKid(150,262,.9,{stance:'sit',arms:'holdFront',prop:H=>`<g transform="translate(${(H.L[0]+H.R[0])/2} ${H.L[1]+30})">${openBook}</g>`,mood:'joy',face:'right'})}
  ${[0,1,2,3,4,5].map(k=>`<rect x="300" y="${262-k*9}" width="60" height="9" fill="${['#C9473B','#5E7FA8','#B8862F'][k%3]}" ${sw(1)}/>`).join('')}`,'#EADCC0'),
  text:`충청도의 가난한 집에 신채호라는 아이가 살았어요. 할아버지에게 글을 배운 채호는 책을 한 번 읽으면 줄줄 외울 만큼 공부를 좋아했어요.`},
 {svg:SV(`${townscape(150,6)}<path d="M-6 180 H406 V290 H-6Z" fill="#D9C49A"/>
  ${ch(120,276,.86,{arms:'holdFront',prop:H=>news((H.L[0]+H.R[0])/2,H.L[1]+20,.6),mood:'o',face:'right'})}
  ${[0,1].map(k=>hero(260+k*60,276,.62,{robe:['#EFE6D2','#D6CDB4'][k],hat:'gat',mood:'sad',face:'left'})).join('')}`,'url(#ch1)',sky('ch1','#B9C2CC','#E6E2D4')),
  text:`어른이 된 신채호는 신문에 글을 썼어요. 그 무렵 일본이 우리나라를 빼앗으려 하고 있었어요. 신채호는 신문으로 사람들의 마음을 깨우려고 했어요.`},
 {chips:LEG, svg:SV(`${room()}
  <g id="tWash">${ch(200,272,.92,{mood:'smile',arms:{L:[-20,-50],R:[20,-50]},prop:H=>`<ellipse cx="0" cy="${H.L[1]+12}" rx="30" ry="10" fill="#9FC2D8" ${sw()}/>${[0,1,2].map(k=>`<path d="M${-14+k*14} ${H.L[1]+20} q2 8 0 14" stroke="#6FA8C8" stroke-width="3"/>`).join('')}`})}</g>`,'#EADCC0'),
  taps:[{label:'꼿꼿',el:'tWash',say:'"일본에 고개를 숙일 수 없다!" 세수할 때도 허리를 꼿꼿하게 폈대요.'},{label:'철벅',el:'tWash',say:'그래서 옷이 물에 흠뻑 젖곤 했대요.'}],tapHint:'신채호를 눌러 볼까요?',
  text:`신채호는 세수할 때도 고개를 숙이지 않고 꼿꼿이 서서 했대요. 옷이 다 젖어도 상관없었어요. 일본에 절대 고개 숙이지 않겠다는 마음이었대요.`},
 {svg:SV(`<rect x="-6" y="-6" width="412" height="292" fill="#3A3048"/>${[...Array(16)].map((_,k)=>`<circle cx="${(k*83)%400}" cy="${(k*47)%110+8}" r="1.4" fill="#FFF8DC"/>`).join('')}
  <path d="M-6 220 H406 V290 H-6Z" fill="#6A5240"/>${candle(320,236,1.1)}<circle cx="320" cy="200" r="150" fill="url(#candleG)" opacity=".5"/>
  ${ch(160,252,.96,{stance:'sit',arms:'writeR',prop:H=>PROP.brush(H),mood:'smile',face:'right'})}${desk(240,236,100)}<rect x="206" y="226" width="68" height="10" fill="#FFFDF6" ${sw(1)}/>
  ${T(200,70,'고구려, 발해, 단군…',18,'#F6F0D6')}`,'#3A3048',candleDef),
  text:`나라를 빼앗긴 뒤, 신채호는 중국으로 건너가 독립운동을 하며 우리 역사를 썼어요. 단군과 고구려, 발해처럼 넓은 땅을 누빈 조상들의 이야기를 힘주어 적었어요.`},
 {svg:SV(`${room()}
  <rect x="150" y="80" width="100" height="120" rx="6" fill="#E6F2F6" ${sw()}/><circle cx="200" cy="130" r="30" fill="#FFFFFF" ${sw(1.4)}/><path d="M186 124 q14 -10 28 0" fill="none" stroke="#8A8580" stroke-width="2"/>
  ${kid(90,282,.82,{mood:'o',arms:'pointR',face:'right'})}${hero(320,282,.82,{body:'dress',hair:'bun',top:'#F2C14E',skirt:'#5B7FB8',mood:'smile',face:'left'})}
  ${T(200,40,'역사는 우리를 비추는 거울',18,K.red)}`,'#EFE3C8'),
  text:`신채호는 역사를 잊은 사람들은 앞으로 나아가기 어렵다고 생각했어요. 지나온 일을 거울처럼 들여다보면 우리가 어디로 가야 할지 보인다는 거예요.`},
 {svg:SV(`${hills('#A9CDB4','#BCD38F',190,214)}
  ${kid(130,272,.86,{mood:'joy',arms:'holdFront',prop:H=>`<g transform="translate(${(H.L[0]+H.R[0])/2} ${H.L[1]+34})">${bigBook('','#5E7FA8')}</g>`,face:'right'})}${hero(290,272,.86,{body:'dress',hair:'bun',top:'#F2C14E',skirt:'#5B7FB8',mood:'smile',face:'left',arms:'pointL'})}`,'url(#ch2)',sky('ch2','#CFE7F2','#F6EAD0')),
  text:`우리가 단군, 광개토대왕, 대조영 이야기를 읽는 것도 바로 그 거울을 들여다보는 일이에요. 충북 청주에는 신채호를 기리는 사당이 있어요.`},
 {kind:'end', svg:endBase('ch',`${g(200,200,1.6,`<rect x="-30" y="-40" width="60" height="70" rx="6" fill="#E6F2F6" ${sw()}/><circle cx="0" cy="-6" r="20" fill="#FFFFFF" ${sw(1.4)}/>`)}`,kid(64,276,.5,{arms:'cheer',mood:'joy'}),ch(338,276,.55,{arms:'waveR',mood:'joy'})),
  text:`고개 숙이지 않고 역사를 쓴 사람이 남긴 선물,<br>역사라는 거울.<br>오늘도 우리 곁에 있어요.<br><span class="big">끝</span>`},
 {kind:'talk'}
];
BOOKS.push({id:'sinchaeho',era:'modern',title:'신채호와 우리 역사',who:'신채호',teaser:'세수할 때도 고개를 숙이지 않았다는, 우리 역사를 다시 쓴 사람이 있어요.',pages:P,
 talk:{three:['신채호는 세수할 때 어떻게 했지?','허리 꼿꼿! 따라 해 볼까?','우리가 읽은 옛날 임금님 이름 하나 말해 볼까?'],
  five:['역사가 거울 같다는 건 무슨 뜻일까?','신채호는 왜 고개를 숙이지 않았을까?','어제 일을 떠올리면 오늘 무엇을 더 잘할 수 있을까?'],
  note:'신채호(1880~1936)는 언론인이자 역사학자, 독립운동가입니다. 『대한매일신보』 등에 논설을 쓰며 국권 회복을 호소했고, 1910년 무렵 망명해 중국에서 독립운동을 하며 『조선상고사』 등을 지었습니다. "역사는 아와 비아의 투쟁"이라는 말로 유명하며, 1936년 뤼순 감옥에서 순국했습니다. 고개를 숙이지 않고 꼿꼿이 서서 세수했다는 이야기는 지인들의 회고로 전합니다. 책의 "역사는 거울" 표현은 아이 눈높이에 맞춰 풀어 쓴 것으로 신채호의 직접 인용이 아닙니다. 충북 청주에 단재 신채호 사당과 묘소가 있습니다.'}});
})();
