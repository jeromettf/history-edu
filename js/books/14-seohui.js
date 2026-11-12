/* 7권 서희: 싸우지 않고 말로 지킨 땅 */
(()=>{
setScene('goryeo','autumn');
const seohui=(x,y,s,o={})=>hero(x,y,s,{robe:'#5E7FA8',hat:'gat',belt:K.gold,collar:'#FFF8EC',beard:HAIR,...o});
const goryeoKing=(x,y,s,o={})=>king(x,y,s,{robe:'#B8862F',...o});
const official=(x,y,s,o={})=>hero(x,y,s,{robe:'#7A8C6E',hat:'gat',belt:'#3A2E2A',...o});
const khitan=(x,y,s,o={})=>hero(x,y,s,{robe:'#8A5A3C',hat:'helmet',body:'armor',beard:'#3B2618',...o});
const tent=(x,y,s,c='#C9B48A')=>g(x,y,s,`<path d="M-60 0 L0 -70 L60 0Z" fill="${c}" ${sw()}/><path d="M-14 0 L0 -40 L14 0Z" fill="#3A2B1E" ${sw(1.6)}/><path d="M0 -70 V-90" ${sw(3)}/><path d="M0 -90 L22 -84 L0 -78Z" fill="#5A5560"/>`);
const P=[
 {kind:'cover', svg:coverBase('s','말로 지킨 땅',`${tent(62,250,.9)}${tent(352,250,.7)}`,seohui(220,264,1.0,{pose:'hold',mood:'joy'})),
  text:`<span class="big">서희와 지혜로운 말</span><br>위인 그림책 {no}권`},
 {svg:SV(`${cloud(80,40,.7)}${cloud(320,56,.6)}${hills('#A9CDB4','#C7D88F',196,220)}
  <rect x="40" y="130" width="120" height="76" fill="#E8DCC4" ${sw()}/><path d="M24 136 Q100 86 176 136Z" fill="#4A4A55" ${sw()}/>
  ${hero(240,268,.82,{robe:'#EFE6D2',skin:'#EDBF95',mood:'joy',pose:'up'})}${hero(320,268,.78,{body:'dress',hair:'bun',top:'#F6E2A6',skirt:'#B8862F',mood:'joy'})}`,'url(#s1)',sky('s1','#CFE7F2','#F6EAD0')),
  text:`옛날 우리나라가 고려라는 이름이던 때예요. 고려라는 이름에는 "우리는 고구려를 이은 나라예요" 하는 뜻이 담겨 있지요.`},
 {svg:SV(`<rect x="-6" y="-6" width="412" height="230" fill="#E8D3B0"/><rect x="-6" y="222" width="412" height="64" fill="#A87E52"/>
  ${seohui(200,272,.95,{pose:'hold',mood:'smile',item:bigBook('책','#5E7FA8')})}
  ${official(80,272,.7,{mood:'joy'})}${official(320,272,.7,{mood:'joy'})}
  ${T(200,70,'차근차근, 또박또박',20,K.red)}`,'#E8D3B0'),
  text:`고려에 서희라는 신하가 있었어요. 서희는 화가 나도 소리치지 않고, 차근차근 생각해서 또박또박 말하는 사람이었어요.`},
 {chips:['993년'], svg:SV(`<path d="M-6 170 Q100 140 200 156 Q300 136 406 166 L406 286 L-6 286Z" fill="#C8C2A8" ${sw()}/>
  ${tent(80,190,.7)}${tent(180,176,.6)}${tent(280,186,.7)}${tent(360,174,.5)}
  ${khitan(140,272,.8,{mood:'sad'})}${khitan(260,272,.8,{mood:'sad'})}
  ${T(200,60,'땅을 내놓아라!',24,K.red,`stroke="#FFF8EC" stroke-width="5" paint-order="stroke"`)}`,'url(#s3)',sky('s3','#B9C2CC','#DCDCD4')),
  text:`어느 날, 북쪽의 거란이라는 나라가 군사를 이끌고 쳐들어왔어요. 거란 장수 소손녕이 큰소리쳤어요. "고려 땅을 내놓아라!"`},
 {svg:SV(`${palace()}
  ${goryeoKing(200,262,.82,{mood:'sad'})}
  ${official(80,272,.72,{mood:'sad'})}${official(130,276,.66,{mood:'o'})}
  ${seohui(310,272,.86,{pose:'up',mood:'smile'})}
  ${T(260,60,'제가 가 보겠습니다',16,K.red)}`,'#E8D3B0'),
  text:`겁이 난 신하들은 "땅을 조금 떼어 주자"고 했어요. 그때 서희가 나섰어요. "싸우기 전에, 제가 가서 말해 보겠습니다."`},
 {svg:SV(`<rect x="-6" y="-6" width="412" height="292" fill="#D8C7A4"/>
  <path d="M-6 120 L200 40 L406 120 L406 220 L-6 220Z" fill="#C9B48A" ${sw()}/>
  <rect x="-6" y="216" width="412" height="70" fill="#A88A5A"/>
  <g id="tSeo">${seohui(120,262,.92,{stance:'sit',arms:'pointR',mood:'smile',face:'right'})}</g>
  <g id="tSo">${khitan(280,262,.92,{stance:'sit',arms:'lap',mood:'o',face:'left'})}</g>
  <rect x="150" y="236" width="100" height="14" rx="3" fill="#8A5A3C" ${sw()}/><path d="M160 250 v20 M240 250 v20" stroke="#8A5A3C" stroke-width="6"/><rect x="184" y="226" width="32" height="10" fill="#FFFDF6" ${sw(1)}/>`,'#D8C7A4'),
  taps:[{label:'서희',el:'tSeo',say:'고려는 고구려를 이은 나라요. 그러니 이 땅은 우리 땅이오.'},{label:'소손녕',el:'tSo',say:'음… 그 말이 맞구려.'}],tapHint:'두 사람의 이야기를 들어 볼까요?',
  text:`서희는 거란 진영에 가서 소손녕과 마주 앉았어요. "고려는 고구려를 이은 나라요. 이름도 고려이지 않소?" 소손녕은 할 말이 없었어요.`},
 {svg:SV(`<rect x="-6" y="-6" width="412" height="292" fill="#D8C7A4"/>
  <path d="M-6 120 L200 40 L406 120 L406 220 L-6 220Z" fill="#C9B48A" ${sw()}/>
  <rect x="-6" y="216" width="412" height="70" fill="#A88A5A"/>
  ${seohui(110,272,.92,{pose:'up',mood:'joy'})}${khitan(290,272,.92,{mood:'joy'})}
  ${heart(200,120)}`,'#D8C7A4'),
  text:`서희가 또 말했어요. "우리가 사이좋게 지내려 해도 가운데 땅을 여진이 막고 있소. 그 길을 열면 친구가 되겠소." 소손녕은 고개를 끄덕였어요.`},
 {svg:SV(`${cloud(300,40,.7)}${hills('#A9CDB4','#C7D88F',190,214)}
  ${tent(330,186,.4)}${tent(370,190,.34)}
  <path d="M290 200 L406 170" stroke="#FFFFFF" stroke-width="3" stroke-dasharray="6 6"/>
  ${seohui(140,268,.9,{pose:'up',mood:'joy'})}${hero(230,270,.66,{robe:'#EFE6D2',skin:'#EDBF95',mood:'joy',pose:'up'})}
  ${T(330,120,'돌아가자!',18,K.ink)}`,'url(#s7)',sky('s7','#CFE7F2','#F6EAD0')),
  text:`거란 군사들은 싸우지 않고 돌아갔어요. 게다가 고려는 압록강 가까이까지 북쪽 땅을 넓혔어요.`},
 {svg:SV(`${room()}
  ${kid(130,266,1.0,{mood:'smile',pose:'hold'})}${hero(270,266,.96,{body:'dress',hair:'braid',top:'#E98FA0',skirt:'#5B7FB8',mood:'smile'})}
  ${ball(200,250,10)}
  <path d="M150 110 Q170 96 190 110" fill="none" ${sw(2)}/><path d="M210 110 Q230 96 250 110" fill="none" ${sw(2)}/>
  ${T(140,90,'같이 할래?',16,K.red)}${T(270,90,'좋아!',16,K.red)}`,'#EFE3C8'),
  text:`지금도 나라와 나라 사이에 다툼이 생기면 대표들이 마주 앉아 이야기로 풀어요. 이런 일을 '외교'라고 해요. 서희는 우리 역사에서 손꼽히는 외교관이에요.`},
 {kind:'end', svg:endBase('s',`<path d="M120 196 Q200 70 280 196Z" fill="#94BFA6" ${sw()}/>${T(200,176,'고려',56,K.red,`stroke="#FFF8EC" stroke-width="6" paint-order="stroke"`)}`,kid(64,276,.5,{pose:'up',mood:'joy'}),seohui(338,276,.55,{pose:'up',mood:'joy'})),
  text:`차근차근 말하는 사람이 남긴 선물,<br>싸우지 않고 지키는 지혜.<br>오늘도 우리 곁에 있어요.<br><span class="big">끝</span>`},
 {kind:'talk'}
];
BOOKS.push({id:'seohui',era:'goryeo',title:'서희와 지혜로운 말',who:'서희',teaser:'싸우지 않고 말로 거란 군사를 돌려보낸 사람이 있어요.',pages:P,
 talk:{three:['서희 할아버지는 소리를 쳤을까, 또박또박 말했을까?','"또박또박" 따라 말해 볼까?','고려 깃발 이름을 찾아볼까?'],
  five:['서희는 어떻게 싸우지 않고 거란을 돌려보냈을까?','친구랑 다툴 때 어떻게 말하면 좋을까?','"고려"라는 이름에는 어떤 뜻이 있었지?'],
  note:'서희(942~998)는 고려 성종 때의 문신입니다. 993년 거란의 소손녕이 쳐들어오자 땅을 떼어 주자는 의견을 물리치고 직접 담판에 나섰습니다. 고려가 고구려를 이었다는 점과, 여진이 가로막아 거란과 교류하지 못한다는 점을 들어 거란군을 물러나게 했고, 이후 압록강 동쪽의 강동 6주를 얻었습니다. 소손녕이 80만 대군이라고 큰소리쳤으나 실제 수는 그보다 적었다고 봅니다.'}});
})();
