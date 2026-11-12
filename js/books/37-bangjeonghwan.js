/* 20권 방정환: 어린이를 사랑한 이야기꾼 */
(()=>{
setScene('modern','spring');
const pjKid=(x,y,s,o={})=>hero(x,y,s,{robe:'#7FA8C8',hair:'braid',belt:'#3F5A7A',ribbon:HAIR,...o});
const pjMan=(x,y,s,o={})=>person(x,y,s,{robe:'#3F5A7A',pose:o.pose,mood:o.mood,item:o.item,
  deco:`<path d="M-14 -66 L0 -48 L14 -66" fill="#FFFFFF" ${sw(1.6)}/><path d="M-4 -60 L0 -50 L4 -60Z" fill="#C9473B"/><path d="M-6 -40 H6 M-6 -28 H6" stroke="#2A3E58" stroke-width="2"/>`,
  front:`<path d="M-31 -96 Q-30 -128 0 -128 Q30 -128 31 -96 Q14 -116 -4 -110 Q-20 -112 -31 -96Z" fill="${HAIR}" ${sw()}/><circle cx="-11" cy="-92" r="8" fill="none" ${sw(2)}/><circle cx="11" cy="-92" r="8" fill="none" ${sw(2)}/><path d="M-3 -92 H3" ${sw(2)}/>`});
const magazine=`<rect x="-30" y="-58" width="60" height="44" rx="2" fill="#F2C14E" ${sw()}/><text x="0" y="-38" text-anchor="middle" font-family="Jua,sans-serif" font-size="12" fill="#C9473B">어린이</text><circle cx="-12" cy="-24" r="5" fill="#FFFDF6"/><circle cx="12" cy="-24" r="5" fill="#FFFDF6"/>`;
const balloon=(x,y,c)=>`<ellipse cx="${x}" cy="${y}" rx="14" ry="17" fill="${c}" ${sw(1.6)}/><path d="M${x} ${y+17} q-4 20 2 40" fill="none" stroke="${L}" stroke-width="1.4"/>`;
const P=[
 {kind:'cover', svg:coverBase('pj','어린이날',`${balloon(60,190,'#E98FA0')}${balloon(340,180,'#7FB3C8')}`,pjMan(200,264,1.0,{pose:'up',mood:'joy'})),
  text:`<span class="big">방정환과 어린이날</span><br>위인 그림책 {no}권`},
 {svg:SV(`${cloud(300,40,.7)}${hills('#A9CDB4','#D9CCAE',196,214)}
  ${pjKid(120,266,.9,{pose:'up',mood:'joy'})}${oldKid(220,268,.64,{mood:'joy'})}${hero(290,268,.64,{robe:'#E98FA0',hair:'braid',mood:'joy'})}
  ${T(120,100,'옛날 옛날에…',18,K.red)}`,'url(#pj1)',sky('pj1','#CFE7F2','#F6EAD0')),
  text:`유관순이 만세를 부르던 무렵, 정환이라는 청년이 있었어요. 정환이는 어릴 때부터 친구들에게 재미있는 이야기를 들려주는 걸 좋아했어요.`},
 {svg:SV(`<path d="M-6 200 L406 200 L406 286 L-6 286Z" fill="#C9C2B4"/>
  ${hero(120,268,.86,{robe:'#5A5560',hat:'gat',mood:'sad'})}${oldKid(220,270,.66,{mood:'sad',tear:true})}${oldKid(300,272,.6,{mood:'sad'})}
  ${T(120,100,'애들은 몰라도 돼!',16,K.ink)}`,'url(#pj2)',sky('pj2','#B9C2CC','#DCDCD4')),
  text:`그런데 그때 어른들은 아이들을 함부로 대할 때가 많았어요. "애들은 몰라도 돼!" 하며 아이들 말은 잘 들어 주지 않았어요.`},
 {svg:SV(`${room()}
  ${pjMan(160,268,.92,{pose:'up',mood:'joy'})}
  <rect x="230" y="70" width="140" height="56" rx="6" fill="#FFFDF6" ${sw()}/>${T(300,108,'어린이',30,K.red)}`,'#EADCC0'),
  text:`방정환은 생각했어요. "아이들도 어른처럼 소중한 사람이야." 그래서 '어린이'라는 말을 널리 쓰자고 했어요. 늙은이, 젊은이처럼 어린이도 높여 부르는 말이에요.`},
 {svg:SV(`<rect x="-6" y="-6" width="412" height="292" fill="#3A3150"/>
  <circle cx="200" cy="150" r="150" fill="url(#pjg4)"/>
  <rect x="-6" y="216" width="412" height="70" fill="#5A4A3A"/>
  <g id="tStory">${pjMan(200,250,.9,{pose:'up',mood:'o'})}</g>
  <g id="tKids">${oldKid(70,276,.6,{mood:'joy',pose:'up'})}${oldKid(130,280,.56,{mood:'joy'})}${hero(270,280,.56,{robe:'#E98FA0',hair:'braid',mood:'joy'})}${oldKid(330,276,.6,{mood:'joy',pose:'up'})}</g>`,'#3A3150',glow('pjg4','#FFE9A6',.6)),
  taps:[{label:'방정환',el:'tStory',say:'옛날 옛날, 깊은 산속에 호랑이가 살았는데…!'},{label:'어린이들',el:'tKids',say:'까르르! 또 해 주세요!'}],tapHint:'이야기를 들어 볼까요?',
  text:`방정환은 어린이들을 모아 동화를 들려주었어요. 목소리를 바꿔 가며 실감 나게 이야기해서, 어린이들은 웃다가 울다가 시간 가는 줄 몰랐대요.`},
 {chips:['1923년'], svg:SVn(`${room()}
  ${pjMan(130,268,.9,{pose:'hold',mood:'joy',item:magazine})}
  ${[0,1,2].map(k=>`<g transform="translate(${240+k*44} ${200-k*10}) rotate(${k*6-6})">${magazine}</g>`).join('')}`,'#EADCC0'),
  text:`방정환은 어린이를 위한 잡지 『어린이』도 만들었어요. 재미있는 동화와 노래가 가득 담겨서, 어린이들이 손꼽아 기다렸지요.`},
 {chips:['1923년 5월 1일'], svg:SV(`${cloud(80,40,.7)}
  ${balloon(60,80,'#E98FA0')}${balloon(110,60,'#7FB3C8')}${balloon(300,70,'#F2C14E')}${balloon(350,90,'#7CB66E')}
  ${yard(200)}
  <rect x="120" y="96" width="160" height="40" rx="4" fill="#C9473B" ${sw()}/>${T(200,124,'어린이날',22,'#FFFFFF')}
  ${pjMan(200,264,.8,{pose:'up',mood:'joy'})}
  ${[50,100,300,350].map((x,k)=>oldKid(x,276,.56,{mood:'joy',pose:'up'})).join('')}`,'url(#pj6)',sky('pj6','#CFE7F2','#F6EAD0')),
  text:`그리고 방정환과 친구들은 어린이날을 만들었어요. "어린이를 내려다보지 말고 쳐다보아 주세요." 어른들에게 이렇게 부탁했어요.`},
 {svg:SV(`<rect x="34" y="34" width="104" height="86" rx="4" fill="#BFE0F0" stroke="#FFFFFF" stroke-width="7"/>${cloud(80,70,.6)}
  <rect x="290" y="32" width="80" height="88" rx="4" fill="#FFFFFF" ${sw()}/><rect x="290" y="32" width="80" height="22" rx="4" fill="${K.red}" ${sw()}/>
  ${T(330,49,'5월',14,'#fff')}${T(330,94,'5',38)}${T(330,114,'어린이날',12,K.red)}
  <rect x="-6" y="216" width="412" height="70" fill="#E9CFA4"/><ellipse cx="190" cy="260" rx="124" ry="18" fill="#F2B3A6" ${sw()}/>
  ${kid(150,266,1.0,{pose:'up',mood:'joy'})}${hero(240,266,.92,{body:'dress',hair:'braid',top:'#E98FA0',skirt:'#5B7FB8',pose:'up',mood:'joy'})}
  ${balloon(110,150,'#F2C14E')}${balloon(290,150,'#7CB66E')}`,'url(#pj7)',sky('pj7','#E8F2F8','#DCEAF2')),
  text:`지금은 해마다 5월 5일이 어린이날이에요. 우리를 위한 날이에요! 방정환 선생님이 어린이를 얼마나 아꼈는지 기억하는 날이에요.`},
 {svg:SV(`<rect x="-6" y="-6" width="412" height="292" fill="#EFE3C8"/>
  ${[['#94BFA6',30],['#BFE0F0',110],['#F6E2A6',190],['#F2B3A6',270],['#C9D8B4',350]].map(([c,x])=>`<rect x="${x-34}" y="40" width="68" height="50" rx="4" fill="${c}" ${sw(1.6)}/>`).join('')}
  ${['단군','세종','이순신','유관순','방정환'].map((n,k)=>T(30+k*80,72,n,12)).join('')}
  <rect x="-6" y="216" width="412" height="70" fill="#DDB16A"/>
  ${kid(130,266,1.0,{pose:'up',mood:'joy'})}${hero(270,266,.96,{body:'dress',hair:'braid',top:'#F2C14E',skirt:'#5B7FB8',pose:'up',mood:'joy'})}`,'#EFE3C8'),
  text:`어린이날의 주인공은 우리예요. 앞으로 우리나라 이야기를 이어 갈 사람도 우리예요.`},
 {kind:'end', svg:endBase('pj',`${balloon(150,110,'#E98FA0')}${balloon(200,90,'#F2C14E')}${balloon(250,110,'#7FB3C8')}${T(200,210,'어린이',56,K.red,`stroke="#FFF8EC" stroke-width="6" paint-order="stroke"`)}`,kid(64,276,.5,{pose:'up',mood:'joy'}),pjMan(338,276,.55,{pose:'up',mood:'joy'})),
  text:`어린이를 사랑한 이야기꾼이 남긴 선물,<br>어린이날.<br>오늘도 우리 곁에 있어요.<br><span class="big">끝</span>`},
 {kind:'talk'}
];
BOOKS.push({id:'bangjeonghwan',era:'modern',title:'방정환과 어린이날',who:'방정환',teaser:'어린이날은 누가 처음 만들었을까요?',pages:P,
 talk:{three:['어린이날은 몇 월 며칠이지?','"까르르!" 웃어 볼까?','엄마 아빠에게 이야기 하나 들려줄까?'],
  five:['방정환 선생님은 왜 "어린이"라는 말을 쓰자고 했을까?','어른들이 어린이를 어떻게 대해 주면 좋겠어?','우리가 이어 갈 이야기는 어떤 이야기일까?'],
  note:'방정환(1899~1931, 호는 소파)은 "어린이"라는 말을 널리 쓰며 어린이 운동을 이끌었습니다. 1923년 색동회를 만들고 잡지 『어린이』를 펴냈으며, 같은 해 5월 1일 첫 어린이날 기념식을 열었습니다. "어린이를 내려다보지 마시고 쳐다보아 주시오"는 그때 어른들에게 전한 글의 한 구절입니다. 어린이날은 1946년부터 5월 5일이 되었습니다. 동화 구연으로 이름이 높았고, 서른한 살의 나이로 세상을 떠났습니다.'}});
})();
