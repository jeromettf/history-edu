/* 사명대사: 말로 사람들을 데려온 스님 */
(()=>{
setScene('joseon','spring');
const LEG=['전해 오는 이야기'];
const sy=(x,y,s,o={})=>hero(x,y,s,{hair:'bald',robe:'#8E9AA6',belt:false,collar:'#EDE9E0',deco:kasaL,beard:HAIR,...o});
const syOld=(x,y,s,o={})=>sy(x,y,s,{beard:'#E6E1D6',...o});
const seosan=(x,y,s,o={})=>hero(x,y,s,{hair:'bald',robe:'#A7A49B',belt:false,collar:'#EDE9E0',deco:kasaL,beard:'#E6E1D6',...o});
const ieyasu=(x,y,s,o={})=>hero(x,y,s,{robe:'#3A3A44',hat:'band',bandColor:'#3A3A44',belt:K.gold,...o});
const town=(x,y,s,c,o={})=>hero(x,y,s,{robe:c,skin:'#EDBF95',hat:'band',bandColor:'#FFFDF6',...o});
const TC=['#D6CDB4','#C9D8B4','#E9CFC0','#B9A475','#9FC2D8'];
const P=[
 {kind:'cover', svg:coverBase('sy','바다 건너 데려와요',`${bigShip(300,250,.6,'#8A5A3C')}`,syOld(130,264,1.0,{arms:'pray',mood:'smile'})),
  text:`<span class="big">사명대사와 돌아온 사람들</span><br>위인 그림책 {no}권`},
 {svg:SV(`${ridge(140,'#7FA88E',40,2)}<path d="M-6 200 Q200 190 406 202 L406 290 L-6 290Z" fill="#9FC48A"/>
  ${seosan(130,272,.86,{mood:'smile',arms:'pointR',face:'right'})}${sy(270,272,.82,{mood:'o',arms:'pray',face:'left'})}`,'url(#sy1)',sky('sy1','#CFE7F2','#F6EAD0')),
  text:`금강산의 절에 사명이라는 스님이 있었어요. 사명 스님은 서산대사의 제자였어요.`},
 {svg:SV(`${ridge(140,'#7FA88E',40,2)}<path d="M-6 200 Q200 190 406 202 L406 290 L-6 290Z" fill="#9FC48A"/>
  ${sy(200,272,.86,{mood:'o',arms:'pointR',face:'right'})}${[0,1,2].map(k=>hero(70+k*30+(k>1?200:0),276,.56,{hair:'bald',robe:'#A7A49B',belt:false,collar:'#EDE9E0',mood:'o',face:k>1?'left':'right'})).join('')}
  ${T(200,80,'우리도 나라를 지키러 가자',16,K.red)}`,'url(#sy2)',sky('sy2','#CFE7F2','#F6EAD0')),
  text:`임진왜란이 일어나자, 스님들도 산에서 내려왔어요. 서산대사와 사명 스님은 스님들을 이끌고 나라를 지키는 데 힘을 보탰어요.`},
 {svg:SV(`${hills('#A9CDB4','#BCD38F',190,214)}
  ${[0,1,2,3].map(k=>town(60+k*50,272,.58,TC[k],{mood:'sad',face:'right'})).join('')}
  ${sy(320,272,.82,{mood:'sad',arms:'pray',face:'left'})}`,'url(#sy3)',sky('sy3','#B9C2CC','#E6E2D4')),
  text:`전쟁은 7년 만에 끝났어요. 하지만 많은 사람이 일본으로 끌려가 돌아오지 못하고 있었어요. 가족들은 날마다 바다를 바라보며 기다렸어요.`},
 {chips:['1604년'], svg:SV(`<path d="M-6 150 Q200 140 406 150 L406 290 L-6 290Z" fill="#4F92BA"/>${[...Array(8)].map((_,k)=>`<path d="M${(k*97)%420-20} ${170+(k%4)*24} q10 -8 20 0 q10 8 20 0" fill="none" stroke="#FFFFFF" stroke-width="3" opacity=".8"/>`).join('')}
  ${bigShip(200,226,1.0,'#8A5A3C')}${syOld(244,220,.34,{mood:'smile',arms:'pointR',face:'right'})}`,'url(#sy4)',sky('sy4','#CFE7F2','#F6EAD0')),
  text:`예순 살이 넘은 사명 스님이 나섰어요. "제가 일본에 가서 이야기해 보겠습니다." 스님은 나라의 심부름꾼이 되어 바다를 건넜어요.`},
 {svg:SV(`${room()}
  <g id="tTalk">${syOld(110,262,.9,{stance:'sit',arms:'pointR',mood:'smile',face:'right'})}${ieyasu(290,262,.9,{stance:'sit',arms:'lap',mood:'o',face:'left'})}</g>
  <rect x="180" y="244" width="40" height="12" fill="#8A5A3C" ${sw()}/>`,'#EADCC0'),
  taps:[{label:'차분하게',el:'tTalk',say:'"끌려간 우리 백성들을 돌려보내 주시오." 스님은 차분하게 말했어요.'},{label:'고개 끄덕',el:'tTalk',say:'일본의 지도자 도쿠가와 이에야스가 고개를 끄덕였대요.'}],tapHint:'두 사람을 눌러 볼까요?',
  text:`스님은 일본의 새 지도자 도쿠가와 이에야스를 만났어요. 화내지도, 겁먹지도 않고 차분하게 말했어요. "끌려간 우리 백성들을 돌려보내 주시오."`},
 {chips:['1605년'], svg:SV(`<path d="M-6 150 Q200 140 406 150 L406 200 L-6 200Z" fill="#4F92BA"/><path d="M-6 196 H406 V290 H-6Z" fill="#E6D3A6"/>
  ${bigShip(320,180,.6,'#8A5A3C')}
  ${[0,1,2,3,4].map(k=>town(40+k*44,262+(k%2)*8,.5,TC[k],{mood:'joy',arms:k%2?'armsOpen':'cheer',face:'right'})).join('')}
  ${syOld(290,272,.62,{mood:'joy',arms:'armsOpen',face:'left'})}`,'url(#sy5)',sky('sy5','#CFE7F2','#F6EAD0')),
  text:`이듬해 봄, 사명 스님은 일본에 끌려갔던 사람 3천여 명과 함께 돌아왔어요. 바닷가에서 기다리던 가족들이 달려와 꼭 껴안았어요.`},
 {svg:SV(`${room()}
  ${kid(120,266,.86,{mood:'o',arms:'pointR',face:'right'})}${hero(300,266,.86,{body:'dress',hair:'braid',top:'#E98FA0',skirt:'#5B7FB8',mood:'sad',arms:'handsDown',face:'left'})}
  ${T(200,80,'내 차례도 해 줄래?',18,K.red)}`,'#EFE3C8'),
  text:`친구와 다툴 때 소리부터 지르면 일이 더 꼬여요. 사명 스님처럼 차분하게 "나는 이렇게 하고 싶어"라고 말해 볼까요?`},
 {kind:'end', svg:endBase('sy',`${bigShip(200,210,1.0,'#8A5A3C')}`,kid(64,276,.5,{arms:'cheer',mood:'joy'}),syOld(338,276,.55,{arms:'waveR',mood:'joy'})),
  text:`차분한 말로 사람들을 데려온 스님이 남긴 선물,<br>말의 힘.<br>오늘도 우리 곁에 있어요.<br><span class="big">끝</span>`},
 {kind:'talk'}
];
BOOKS.push({id:'samyeong',era:'joseon',title:'사명대사와 돌아온 사람들',who:'사명대사',teaser:'바다 건너 끌려간 사람들을 말 한마디로 데려온 스님이 있어요.',pages:P,
 talk:{three:['사명 스님은 무엇을 타고 바다를 건넜지?','차분한 목소리로 "안녕하세요" 해 볼까?','가족을 다시 만나면 어떻게 안아 줄까?'],
  five:['사명 스님은 왜 화내지 않고 차분하게 말했을까?','오래 기다린 가족들은 어떤 마음이었을까?','화가 날 때 차분하게 말하는 방법은 뭘까?'],
  note:'사명대사 유정(1544~1610)은 서산대사 휴정의 제자로, 임진왜란 때 승병을 이끌었습니다. 전쟁 뒤 1604년 조선의 사신으로 일본에 건너가 이듬해 도쿠가와 이에야스를 만나 강화를 논의했고, 1605년 포로 3천여 명을 데리고 돌아왔습니다(기록에 따라 숫자에 차이가 있습니다). 책에서 사명 스님의 나이를 예순 살이 넘었다고 한 것은 1604년 당시 61세였기 때문입니다.'}});
})();
