/* 의상: 바다 건너 공부하고 돌아온 스님 */
(()=>{
setScene('samguk','spring');
const LEG=['전해 오는 이야기'];
const us=(x,y,s,o={})=>hero(x,y,s,{hair:'bald',robe:'#8E9AA6',belt:false,collar:'#EDE9E0',deco:kasaL,...o});
const wh=(x,y,s,o={})=>hero(x,y,s,{hair:'bald',robe:'#A7A49B',belt:false,collar:'#EDE9E0',deco:kasaL,...o});
const seonmyo=(x,y,s,o={})=>hero(x,y,s,{body:'dress',top:'#F6E2A6',skirt:'#E98FA0',hair:'long',...o});
const jiyan=(x,y,s,o={})=>hero(x,y,s,{hair:'bald',robe:'#C9A15A',belt:false,collar:'#EDE9E0',beard:'#E6E1D6',...o});
const dragon=(x,y,s)=>g(x,y,s,`<path d="M-120 0 Q-80 -40 -40 -10 Q0 20 40 -20 Q80 -60 120 -30" fill="none" stroke="#5E9C8A" stroke-width="20" stroke-linecap="round"/><path d="M-120 0 Q-80 -40 -40 -10 Q0 20 40 -20 Q80 -60 120 -30" fill="none" stroke="#9FD0B4" stroke-width="6" stroke-dasharray="4 10" stroke-linecap="round"/><circle cx="128" cy="-36" r="16" fill="#5E9C8A" ${sw()}/><circle cx="134" cy="-40" r="3" fill="${L}"/><path d="M120 -50 l-8 -12 M132 -52 l2 -14" stroke="${K.gold}" stroke-width="3" stroke-linecap="round"/>`);
const floatRock=(x,y,s,id)=>g(x,y,s,`<path d="M-70 0 Q-80 -30 -50 -40 Q0 -54 50 -40 Q80 -30 70 0 Q0 12 -70 0Z" fill="#9E9686" ${sw()}/><path d="M-60 16 h120" stroke="#2B1E16" stroke-width="2" stroke-dasharray="3 8" opacity=".5"/>`);
const P=[
 {kind:'cover', svg:coverBase('us','둥둥 뜬 바위',`${floatRock(300,240,.7)}`,us(130,264,1.0,{arms:'pray',mood:'smile'})),
  text:`<span class="big">의상과 뜬 바위 절</span><br>위인 그림책 {no}권`},
 {svg:SV(`${ridge(160,'#A9CDB4',30,2)}<path d="M-6 190 Q200 180 406 192 L406 290 L-6 290Z" fill="#BCD38F"/><path d="M-6 250 Q200 230 406 250" fill="none" stroke="#E6D3A6" stroke-width="18"/>
  ${us(170,262,.8,{stance:'walk',arms:'walk',mood:'joy',face:'right'})}${wh(250,262,.8,{stance:'walk',arms:'pointR',mood:'joy',face:'right'})}`,'url(#us1)',sky('us1','#CFE7F2','#F6EAD0')),
  text:`원효에게는 단짝 친구 의상이 있었어요. 두 스님은 함께 당나라에 공부하러 길을 떠났어요.`},
 {svg:SV(`${ridge(160,'#A9CDB4',30,2)}<path d="M-6 190 Q200 180 406 192 L406 290 L-6 290Z" fill="#BCD38F"/>
  ${wh(120,270,.8,{mood:'smile',arms:'waveR',face:'right'})}${us(290,270,.8,{mood:'sad',arms:'waveR',face:'left'})}
  ${T(120,90,'나는 여기서 공부할게',16,K.red)}${T(290,90,'나는 바다를 건널게',16,'#3F6FA8')}`,'url(#us2)',sky('us2','#CFE7F2','#F6EAD0')),
  text:`가는 길에 원효는 큰 깨달음을 얻고 신라로 돌아갔어요. 의상은 혼자 배를 타고 바다를 건넜어요. "친구야, 잘 다녀올게!"`},
 {svg:SV(`${room()}
  ${jiyan(110,264,.9,{stance:'sit',arms:'pointR',mood:'smile',face:'right'})}
  ${us(270,264,.88,{stance:'sit',arms:'holdFront',prop:H=>`<g transform="translate(${(H.L[0]+H.R[0])/2} ${H.L[1]+30})">${openBook}</g>`,mood:'o',face:'left'})}`,'#EADCC0'),
  text:`당나라에서 의상은 지엄이라는 큰스님에게 배웠어요. 모든 것은 서로 이어져 있고, 작은 먼지 하나에도 온 세상이 담겨 있다는 가르침이었어요.`},
 {chips:LEG, svg:SV(`<path d="M-6 140 Q200 130 406 140 L406 290 L-6 290Z" fill="#3F7EA8"/>${[...Array(9)].map((_,k)=>`<path d="M${(k*97)%420-20} ${170+(k%4)*24} q10 -8 20 0 q10 8 20 0" fill="none" stroke="#FFFFFF" stroke-width="3" opacity=".8"/>`).join('')}
  ${bigShip(150,214,.9,'#8A5A3C')}${us(188,209,.3,{mood:'o',face:'right'})}
  <g id="tDragon">${dragon(250,250,.9)}</g>`,'url(#us3)',sky('us3','#9FB3C8','#E6E2D4')),
  taps:[{label:'용',el:'tDragon',say:'의상을 아끼던 선묘가 용이 되어 배를 지켜 주었대요.'},{label:'출렁출렁',el:'tDragon',say:'거센 파도가 쳐도 배는 무사했어요.'}],tapHint:'파도 속을 눌러 볼까요?',
  text:`공부를 마친 의상은 신라로 돌아오는 배에 올랐어요. 당나라에서 의상을 돕던 선묘라는 여인이 용이 되어 거센 바다에서 배를 지켜 주었다는 이야기가 전해요.`},
 {chips:LEG, svg:SV(`${ridge(150,'#7FA88E',40,3)}<path d="M-6 200 Q200 190 406 202 L406 290 L-6 290Z" fill="#9FC48A"/>
  ${floatRock(210,130,.9)}
  ${us(90,272,.8,{mood:'o',arms:'pointR',face:'right'})}${[0,1].map(k=>hero(290+k*50,272,.6,{robe:'#5A5560',hat:'band',bandColor:'#3A2E2A',mood:'o',face:'left',arms:'cheer'})).join('')}`,'url(#us4)',sky('us4','#CFE7F2','#F6EAD0')),
  text:`의상이 절을 지으려 하자 방해하는 사람들이 있었어요. 그때 커다란 바위가 공중에 둥실 떠올랐고, 사람들은 놀라서 물러갔대요.`},
 {chips:['676년'], svg:SV(`${ridge(150,'#7FA88E',40,3)}<path d="M-6 200 Q200 190 406 202 L406 290 L-6 290Z" fill="#9FC48A"/>
  ${g(250,220,1.2,`<rect x="-60" y="-50" width="120" height="50" fill="#E6D3A6" ${sw()}/><path d="M-80 -46 Q0 -80 80 -46 L70 -56 Q0 -90 -70 -56Z" fill="#4A4A52" ${sw()}/>`)}
  ${floatRock(110,220,.6)}${us(170,272,.8,{mood:'joy',arms:'armsOpen',face:'right'})}
  ${T(250,60,'부석사',22,K.red)}`,'url(#us5)',sky('us5','#CFE7F2','#F6EAD0')),
  text:`그곳에 세운 절이 영주 부석사예요. '부석'은 '뜬 돌'이라는 뜻이에요. 의상은 그곳에서 많은 제자를 가르쳤어요.`},
 {svg:SV(`${ridge(150,'#7FA88E',40,3)}<path d="M-6 200 Q200 190 406 202 L406 290 L-6 290Z" fill="#9FC48A"/>
  ${floatRock(220,240,.8)}
  ${kid(90,276,.8,{mood:'o',stance:'kneel',arms:'pointR',face:'right'})}${hero(330,272,.8,{body:'dress',hair:'bun',top:'#F2C14E',skirt:'#5B7FB8',mood:'smile',face:'left'})}`,'url(#us6)',sky('us6','#CFE7F2','#F6EAD0')),
  text:`지금도 부석사에는 '뜬 돌'이라 불리는 바위가 있어요. 바위 아래로 실을 넣으면 쏙 빠져나간다는 이야기가 있지만, 정말인지는 직접 살펴봐야 해요.`},
 {kind:'end', svg:endBase('us',`${floatRock(200,190,1.0)}`,kid(64,276,.5,{arms:'cheer',mood:'joy'}),us(338,276,.55,{arms:'pray',mood:'joy'})),
  text:`바다 건너 배우고 돌아온 스님이 남긴 선물,<br>모든 것은 이어져 있다는 생각.<br>오늘도 우리 곁에 있어요.<br><span class="big">끝</span>`},
 {kind:'talk'}
];
BOOKS.push({id:'uisang',era:'samguk',title:'의상과 뜬 바위 절',who:'의상',teaser:'원효와 함께 길을 떠났다가 혼자 바다를 건넌 친구가 있어요.',pages:P,
 talk:{three:['바위가 어떻게 됐지? 둥실!','용처럼 꿈틀꿈틀 움직여 볼까?','원효와 의상은 어떤 사이였지?'],
  five:['친구와 다른 길을 가게 되면 어떤 마음일까?','"모든 것은 이어져 있다"는 건 무슨 뜻일까?','우리 집 물건 하나가 어디에서 왔는지 따라가 볼까?'],
  note:'의상(625~702)은 원효와 함께 당 유학길에 올랐다가 홀로 당에 건너가 지엄에게 화엄학을 배우고 671년 무렵 돌아왔습니다. 676년 영주 부석사를 세웠고, 화엄의 가르침을 담은 「화엄일승법계도」를 남겼습니다. 선묘가 용이 되어 배를 지켰다는 이야기와 바위가 떠올라 절을 지었다는 부석 이야기는 『송고승전』과 『삼국유사』 등에 전하는 설화입니다. 부석사 무량수전 뒤에 "부석"이라 새긴 바위가 있습니다.'}});
})();
