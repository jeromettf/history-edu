/* 김삿갓: 삿갓 쓰고 떠돌며 시를 지은 사람 */
(()=>{
setScene('joseon','autumn','golden');
const LEG=['전해 오는 이야기'];
const satgat=`<path d="M-62 -116 Q0 -170 62 -116 Q0 -104 -62 -116Z" fill="#C9A15A" ${sw()}/>${[-40,-20,0,20,40].map(x=>`<path d="M${x*.2} -150 L${x} -114" stroke="#8A6A44" stroke-width="1.4"/>`).join('')}`;
const ks=(x,y,s,o={})=>hero(x,y,s,{robe:'#D6CDB4',hair:'topknot',belt:'#8C7350',beard:HAIR,...o,deco:satgat});
const host=(x,y,s,o={})=>hero(x,y,s,{robe:'#B9A475',hat:'gat',belt:'#8C7350',...o});
const kid2=(x,y,s,c,o={})=>oldKid(x,y,s,{robe:c,...o});
const P=[
 {kind:'cover', svg:coverBase('ks','삿갓 쓴 시인',`${tree(310,262,1.2,'round')}`,ks(130,264,1.0,{arms:'waveR',mood:'joy'})),
  text:`<span class="big">김삿갓과 떠돌이 시</span><br>위인 그림책 {no}권`},
 {svg:SV(`${room()}
  ${hero(140,262,.9,{robe:'#5E7FA8',hat:'gat',stance:'sit',arms:'writeR',prop:H=>PROP.brush(H),mood:'joy',face:'right'})}
  <rect x="190" y="240" width="80" height="12" fill="#8A5A3C" ${sw()}/><rect x="196" y="228" width="68" height="12" fill="#FFFDF6" ${sw(1)}/>
  ${T(300,80,'김병연',22,K.red)}`,'#EADCC0'),
  text:`조선 후기에 김병연이라는 사람이 있었어요. 어릴 때부터 시를 무척 잘 지어서 글짓기 대회에서 장원을 했대요.`},
 {chips:LEG, svg:SV(`${room()}
  ${hero(200,272,.92,{robe:'#5E7FA8',hat:'gat',mood:'sad',arms:'pray'})}
  ${T(200,80,'하늘을 볼 수가 없구나…',18,'#3F6FA8')}`,'#EADCC0'),
  text:`그런데 그 뒤에 집안에 슬픈 사연이 있다는 걸 알게 되었어요. 김병연은 너무 부끄러워 하늘을 볼 수 없다며, 큰 삿갓을 쓰고 집을 떠났대요.`},
 {svg:SV(`${bgImg('ridges')}
  ${ks(230,200,.34,{stance:'walk',arms:'walk',mood:'smile',face:'right'})}`,'#F2D6A8'),
  text:`그때부터 사람들은 그를 '김삿갓'이라고 불렀어요. 김삿갓은 삿갓 하나, 지팡이 하나만 들고 조선 팔도 산과 마을을 떠돌았어요.`},
 {svg:SV(`${yard(200)}
  <g id="tPoem">${ks(110,272,.84,{mood:'joy',arms:'pointR',face:'right'})}</g>
  ${host(300,272,.82,{mood:'o',face:'left'})}${T(200,90,'스무 나무 아래 서러운 나그네…',15,K.red)}`,'#D9CCAE'),
  taps:[{label:'재치',el:'tPoem',say:'같은 소리, 다른 뜻의 말을 섞어 웃음이 나는 시를 지었어요.'},{label:'하하',el:'tPoem',say:'구박하던 사람도 시를 듣고는 웃음을 터뜨렸대요.'}],tapHint:'김삿갓을 눌러 볼까요?',
  text:`김삿갓은 가는 곳마다 시를 지었어요. 밥 한 끼를 얻어먹고 고맙다는 시, 구박하는 사람을 놀리는 재치 있는 시를 지어 사람들을 웃게 했어요.`},
 {svg:SV(`${yard(200)}
  ${ks(200,272,.84,{stance:'sit',arms:'pointR',mood:'joy',face:'right'})}
  ${[0,1,2].map(k=>kid2(70+k*50+(k>1?140:0),276,.56,['#E7D7B4','#C9D8E8','#E9CFC0'][k],{stance:'sit',arms:'lap',mood:'joy',face:k>1?'left':'right'})).join('')}`,'#D9CCAE'),
  text:`어려운 한자 대신 쉬운 우리말을 섞어 시를 짓기도 했어요. 그래서 글을 잘 모르는 마을 사람과 아이들도 김삿갓의 시를 듣고 함께 웃었대요.`},
 {svg:SV(`${ridge(140,'#7FA88E',40,3)}<path d="M-6 200 Q200 190 406 202 L406 290 L-6 290Z" fill="#9FC48A"/>
  ${kid(120,272,.86,{mood:'joy',arms:'pointR',face:'right'})}${hero(290,272,.86,{body:'dress',hair:'bun',top:'#F2C14E',skirt:'#5B7FB8',mood:'smile',face:'left'})}
  ${T(200,80,'영월 김삿갓 유적지',18,K.red)}`,'url(#ks1)',sky('ks1','#CFE7F2','#F6EAD0')),
  text:`강원도 영월에는 김삿갓 문학관과 무덤이 있어요. 그 동네 이름은 아예 '김삿갓면'이 되었어요.`},
 {svg:SV(`${room()}
  ${kid(130,266,.86,{mood:'joy',arms:'cheer',face:'right'})}${hero(300,266,.86,{body:'dress',hair:'braid',top:'#E98FA0',skirt:'#5B7FB8',mood:'joy',arms:'pointL',face:'left'})}
  ${T(200,80,'"말"이 달려요, 말을 해요!',16,K.red)}`,'#EFE3C8'),
  text:`소리는 같고 뜻이 다른 말로 말놀이를 해 볼까요? 달리는 "말", 입으로 하는 "말". 김삿갓처럼 재미있는 문장을 만들어 봐요.`},
 {kind:'end', svg:endBase('ks',`${g(200,240,1.4,satgat)}`,kid(64,276,.5,{arms:'cheer',mood:'joy'}),ks(338,276,.55,{arms:'waveR',mood:'joy'})),
  text:`삿갓 쓰고 떠돈 시인이 남긴 선물,<br>웃음이 나는 말놀이 시.<br>오늘도 우리 곁에 있어요.<br><span class="big">끝</span>`},
 {kind:'talk'}
];
BOOKS.push({id:'kimsatgat',era:'joseon',title:'김삿갓과 떠돌이 시',who:'김삿갓',teaser:'커다란 삿갓을 쓰고 조선 팔도를 떠돌며 시를 지은 사람이 있어요.',pages:P,
 talk:{three:['김삿갓은 머리에 무엇을 썼지?','삿갓 쓰고 걷는 흉내 내 볼까?','"말"이라는 말에는 뜻이 몇 개일까?'],
  five:['김삿갓의 시를 듣고 사람들은 왜 웃었을까?','쉬운 말로 시를 지으면 무엇이 좋을까?','오늘 본 것으로 짧은 시를 지어 볼까?'],
  note:'김삿갓 김병연(1807~1863)은 조선 후기의 방랑 시인입니다. 과거 시험에서 홍경래의 난 때 항복한 김익순을 비판하는 글로 장원했는데, 김익순이 자신의 할아버지라는 사실을 알고 부끄러워 삿갓을 쓰고 떠돌았다는 이야기가 전합니다(시험 시기와 경위에 대해서는 이견이 있습니다). 한자 뜻과 우리말 소리를 섞은 해학적인 시가 많이 전하지만, 후대에 김삿갓의 이름을 빌려 지은 시도 섞여 있습니다. 강원도 영월군 김삿갓면에 묘와 문학관이 있습니다. 책에서 예로 든 시 구절은 그의 시로 전하는 「이십수하」의 첫 구절을 풀어 쓴 것입니다.'}});
})();
