/* 근초고왕: 바다 건너 친구를 사귄 백제의 왕 */
(()=>{
setScene('samguk','summer','noon');
const gc=(x,y,s,o={})=>hero(x,y,s,{robe:'#5E9C8A',pattern:'dots',dotColor:K.gold,hat:'crown',belt:K.gold,beard:HAIR,...o});
const gohung=(x,y,s,o={})=>hero(x,y,s,{robe:'#EDE3CC',hat:'band',bandColor:'#5E9C8A',belt:'#5E9C8A',beard:'#8A8580',...o});
const envoy=(x,y,s,o={})=>hero(x,y,s,{robe:'#8E5A7A',hat:'band',bandColor:K.gold,belt:K.gold,...o});
const sword7=(x,y,s,id)=>g(x,y,s,`<path d="M0 0 V-120" stroke="#7D8796" stroke-width="9" stroke-linecap="round"/>${[[-1,-40],[1,-60],[-1,-80],[1,-100],[-1,-60],[1,-40]].slice(0,6).map(([d,y])=>`<path d="M0 ${y} q${d*16} -6 ${d*20} -24" fill="none" stroke="#7D8796" stroke-width="7" stroke-linecap="round"/>`).join('')}<path d="M0 -60 V-110" stroke="${K.gold}" stroke-width="1.6"/><rect x="-10" y="0" width="20" height="24" rx="3" fill="${K.wood}" ${sw()}/>`);
const P=[
 {kind:'cover', svg:coverBase('gc','바다 건너 친구',`${bigShip(310,250,.6,'#8A5A3C')}`,gc(130,264,1.0,{arms:'waveR',mood:'joy'})),
  text:`<span class="big">근초고왕과 바다의 길</span><br>위인 그림책 {no}권`},
 {svg:SV(`${palace()}
  ${gc(200,270,.96,{mood:'smile',arms:'armsOpen'})}
  ${hero(80,276,.6,{robe:'#5E9C8A',hair:'braid',mood:'joy',face:'right'})}${hero(320,276,.6,{robe:'#B5874F',hair:'braid',mood:'joy',face:'left'})}`,'#E6CFAA'),
  text:`온조가 세운 백제는 쑥쑥 자랐어요. 백제의 열세 번째 임금, 근초고왕 때는 나라가 가장 커지고 힘이 셌어요.`},
 {svg:SV(`${hills('#A9CDB4','#BCD38F',190,214)}
  <path d="M-6 230 Q200 214 406 232 L406 290 L-6 290Z" fill="#E6D3A6"/>
  ${gc(150,276,.86,{mood:'joy',arms:'pointR',face:'right'})}
  ${[0,1,2].map(k=>hero(250+k*50,262+(k%2)*8,.56,{robe:['#D6CDB4','#C9D8B4','#E9CFC0'][k],hat:'band',bandColor:'#FFFDF6',mood:'joy',face:'left',arms:k===1?'waveR':'handsDown'})).join('')}`,'url(#gc1)',sky('gc1','#CFE7F2','#F6EAD0')),
  text:`근초고왕은 남쪽으로 땅을 넓혀 나라를 키웠어요. 넓어진 들판에서 사람들은 농사를 짓고, 바닷가에서는 배를 띄웠어요.`},
 {svg:SV(`${room()}
  ${gc(110,264,.9,{stance:'sit',arms:'pointR',mood:'smile',face:'right'})}
  ${gohung(280,262,.9,{stance:'sit',arms:'writeR',prop:H=>PROP.brush(H),mood:'smile',face:'left'})}
  <rect x="190" y="240" width="70" height="12" fill="#8A5A3C" ${sw()}/><rect x="196" y="230" width="56" height="10" fill="#FFFDF6" ${sw(1)}/>
  ${T(200,80,'우리 역사를 적어 두시오',18,K.red)}`,'#EADCC0'),
  text:`왕은 학자 고흥에게 부탁했어요. "백제가 지나온 일을 책으로 적어 두시오." 그렇게 『서기』라는 역사책이 만들어졌대요. 아쉽게도 그 책은 지금 남아 있지 않아요.`},
 {svg:SV(`<path d="M-6 150 Q200 140 406 150 L406 290 L-6 290Z" fill="#4F92BA"/>${[...Array(9)].map((_,k)=>`<path d="M${(k*97)%420-20} ${170+(k%4)*24} q10 -8 20 0 q10 8 20 0" fill="none" stroke="#FFFFFF" stroke-width="3" opacity=".8"/>`).join('')}
  ${bigShip(220,226,1.0,'#8A5A3C')}${envoy(264,220,.36,{mood:'joy',arms:'waveR'})}
  ${gull(80,70)}${gull(120,50)}<path d="M330 150 Q360 120 406 130 L406 160Z" fill="#8FB88A" ${sw()}/>
  ${T(110,110,'바다 건너 왜로!',18,K.red)}`,'url(#gc2)',sky('gc2','#CFE7F2','#F6EAD0')),
  text:`백제의 배는 바다를 건너 중국의 나라들, 그리고 지금의 일본 땅에 있던 왜와 오갔어요. 물건과 글과 기술을 서로 주고받았어요.`},
 {svg:SV(`${room()}
  <g id="tSword"><rect x="150" y="80" width="100" height="180" rx="6" fill="#F4E9CC" ${sw()}/>${sword7(200,250,1.2)}</g>
  ${envoy(90,272,.8,{mood:'joy',arms:'pointR',face:'right'})}${hero(320,272,.8,{robe:'#5A5560',hair:'topknot',mood:'o',face:'left'})}`,'#EADCC0'),
  taps:[{label:'칠지도',el:'tSword',say:'가지가 일곱 개! 그래서 칠지도라고 불러요.'},{label:'가지 세기',el:'tSword',say:'하나, 둘, 셋, 넷, 다섯, 여섯, 그리고 가운데 하나. 모두 일곱!'}],tapHint:'신기한 칼을 눌러 볼까요?',
  text:`백제는 왜에 가지가 일곱 개 달린 신기한 칼을 보냈어요. 이름은 '칠지도'예요. 이 칼은 지금도 일본의 한 신사에 남아 있어요.`},
 {svg:SV(`${room()}
  ${hero(120,262,.86,{robe:'#EDE3CC',hat:'band',bandColor:'#5E9C8A',stance:'sit',arms:'holdFront',prop:H=>`<g transform="translate(${(H.L[0]+H.R[0])/2} ${H.L[1]+30})">${openBook}</g>`,mood:'smile',face:'right'})}
  ${[0,1].map(k=>hero(250+k*70,262,.72,{robe:'#5A5560',hair:'topknot',stance:'sit',arms:'lap',mood:'o',face:'left'})).join('')}
  ${T(240,90,'이 글자는 이렇게 읽어요',16,K.red)}`,'#EADCC0'),
  text:`백제 사람들은 바다 건너 왜에 한자와 책을 알려 주기도 했어요. 그래서 그때 일본의 옛 기록에는 백제에서 온 학자 이야기가 남아 있어요.`},
 {svg:SV(`<rect x="-6" y="-6" width="412" height="292" fill="#F2EEE4"/><path d="M-6 230 H406 V290 H-6Z" fill="#C9B48A"/>
  <rect x="140" y="70" width="120" height="150" fill="#E6F2F6" ${sw()}/>${sword7(200,210,.9)}
  ${kid(80,282,.82,{mood:'o',arms:'pointR',face:'right'})}${hero(320,282,.82,{body:'dress',hair:'bun',top:'#F2C14E',skirt:'#5B7FB8',mood:'smile',face:'left'})}
  ${T(200,40,'칠지도를 본뜬 모형',18,K.red)}`,'#F2EEE4'),
  text:`우리나라 박물관에서는 칠지도를 본떠 만든 모형을 볼 수 있어요. 일곱 가지가 몇 개인지 손가락으로 세어 보세요.`},
 {kind:'end', svg:endBase('gc',`${bigShip(200,200,1.0,'#8A5A3C')}`,kid(64,276,.5,{arms:'cheer',mood:'joy'}),gc(338,276,.55,{arms:'waveR',mood:'joy'})),
  text:`바다 건너 친구를 사귄 왕이 남긴 선물,<br>나누면 더 커지는 지혜.<br>오늘도 우리 곁에 있어요.<br><span class="big">끝</span>`},
 {kind:'talk'}
];
BOOKS.push({id:'geunchogo',era:'samguk',title:'근초고왕과 바다의 길',who:'근초고왕',teaser:'배를 띄워 바다 건너 나라들과 사귄 백제의 왕이 있어요.',pages:P,
 talk:{three:['칼에 가지가 몇 개였지?','배를 타고 "영차영차" 노 저어 볼까?','바다 건너 친구에게 무엇을 줄까?'],
  five:['근초고왕은 왜 역사를 책으로 남기게 했을까?','다른 나라와 물건을 주고받으면 무엇이 좋을까?','칠지도는 왜 일본에 남아 있을까?'],
  note:'근초고왕(재위 346~375)은 백제의 전성기를 이끈 13대 왕입니다. 마한 지역을 아우르고 371년 고구려 평양성을 공격했으며, 중국 동진·왜와 교류했습니다. 『삼국사기』는 이때 박사 고흥이 『서기』를 지었다는 옛 기록을 전하지만 책은 남아 있지 않습니다. 칠지도는 일본 이소노카미 신궁에 전하는 칼로, 제작 연도와 성격에 대해서는 여러 해석이 있습니다. 백제 학자가 왜에 한자와 책을 전했다는 이야기(아직기, 왕인)는 일본의 옛 역사서에 실려 있으며 시기에 대해 여러 견해가 있습니다.'}});
})();
