/* 대조영: 흩어진 고구려 사람들을 모아 세운 발해 */
(()=>{
setScene('samguk','winter');
const djKid=(x,y,s,o={})=>hero(x,y,s,{robe:'#8A6A9E',hair:'braid',belt:K.gold,ribbon:K.gold,...o});
const dj=(x,y,s,o={})=>hero(x,y,s,{robe:'#5A4E8A',pattern:'dots',dotColor:K.gold,hat:'feather',belt:K.gold,beard:HAIR,...o});
const djK=(x,y,s,o={})=>hero(x,y,s,{robe:'#5A4E8A',pattern:'dots',dotColor:K.gold,hat:'crown',belt:K.gold,beard:HAIR,...o});
const walker=(x,y,s,o={})=>hero(x,y,s,{robe:'#D6CDB4',skin:'#EDBF95',hat:'band',bandColor:'#8A6A9E',...o});
const ondol=(x,y,s)=>g(x,y,s,`<rect x="-90" y="-20" width="180" height="20" fill="#C9A57A" ${sw()}/><path d="M-90 -4 H90" stroke="#8A6A44" stroke-width="2"/>${[-60,-20,20,60].map(c=>`<path d="M${c-14} 8 h28" stroke="#9E9686" stroke-width="5"/>`).join('')}<rect x="-90" y="0" width="180" height="16" fill="#9E9686" ${sw(1.4)}/><path d="M-110 16 l14 -10 h10" fill="none" stroke="#E0574A" stroke-width="3"/>${[-70,-30,10,50].map(c=>`<path d="M${c} 8 q8 -6 16 0" fill="none" stroke="#F29A2E" stroke-width="2"/>`).join('')}`);
const P=[
 {kind:'cover', svg:coverBase('dj','바다 동쪽의 큰 나라',`${g(80,258,.5,ondol(0,0,1))}`,djK(220,264,1.0,{pose:'up',mood:'joy'})),
  text:`<span class="big">대조영과 발해</span><br>위인 그림책 {no}권`},
 {svg:SV(`<path d="M-6 170 Q100 140 200 156 Q300 136 406 166 L406 286 L-6 286Z" fill="#B8C4C0" ${sw()}/>
  ${djKid(120,268,.86,{mood:'sad'})}${walker(220,270,.7,{mood:'sad'})}${walker(300,272,.66,{mood:'sad',tear:true})}
  ${T(200,80,'고구려가 무너졌어요',20,K.red)}`,'url(#dj1)',sky('dj1','#B9C2CC','#DCDCD4')),
  text:`원효 스님이 신라에 살던 무렵, 북쪽의 고구려는 신라와 당나라에 져서 무너지고 말았어요. 고구려 사람들은 먼 당나라 땅으로 끌려갔어요.`},
 {svg:SV(`${hills('#A9CDB4','#BCD38F',196,222)}
  ${dj(140,268,.9,{mood:'smile',pose:'up'})}${walker(250,270,.7,{mood:'o'})}${walker(320,272,.66,{mood:'o'})}
  ${T(140,90,'고향으로 돌아가자',18,K.red)}`,'url(#dj2)',sky('dj2','#C9D8E6','#F2F5F8')),
  text:`끌려간 사람들 가운데 대조영이 있었어요. 대조영은 고구려 사람들을 다독였어요. "우리 다시 힘을 모아, 동쪽으로 돌아갑시다!"`},
 {chips:['696년'], svg:SV(`${snowPeaks(230,'#9FB3C8')}
  <path d="M-6 236 Q200 226 406 236 L406 286 L-6 286Z" fill="#F4F6F8" ${sw()}/>
  ${dj(90,266,.8,{pose:'up',mood:'smile'})}${[160,210,260,310,360].map((x,k)=>walker(x,270-(k%2)*6,.56,{mood:'smile'})).join('')}`,'url(#dj3)',sky('dj3','#9FB3C8','#DCE6EE')),
  text:`대조영은 고구려 사람들과 말갈 사람들을 이끌고 먼 길을 떠났어요. 눈 덮인 산을 넘고 꽁꽁 언 강을 건너 동쪽으로, 또 동쪽으로 걸었어요.`},
 {svg:SV(`${hills('#A9CDB4','#BCD38F',190,222)}
  ${dj(110,268,.86,{pose:'up',mood:'joy'})}${hero(230,268,.7,{body:'armor',robe:'#5A4E8A',hat:'helmet',mood:'joy',pose:'up'})}${hero(320,268,.66,{body:'armor',robe:'#5A4E8A',hat:'helmet',mood:'joy',pose:'up'})}
  ${T(260,90,'천문령을 넘었다!',20,K.red)}`,'url(#dj4)',sky('dj4','#C9D8E6','#F2F5F8')),
  text:`당나라 군사들이 뒤쫓아 왔지만, 대조영은 천문령이라는 고개에서 크게 이겼어요. 이제 아무도 고구려 사람들을 막을 수 없었어요.`},
 {chips:['698년'], svg:SV(`${hills('#A9CDB4','#BCD38F',196,222)}
  <rect x="140" y="132" width="120" height="70" fill="#E8DCC4" ${sw()}/><path d="M124 138 Q200 90 276 138Z" fill="#4A4A55" ${sw()}/>
  <path d="M300 200 V80" ${sw(3)}/><rect x="300" y="80" width="60" height="38" fill="#5A4E8A" ${sw()}/>${T(330,106,'발해',18,'#FBF4E2')}
  ${djK(200,268,.9,{pose:'up',mood:'joy'})}${walker(90,272,.6,{mood:'joy',pose:'up'})}${hero(330,274,.58,{body:'dress',hair:'bun',mood:'joy'})}`,'url(#dj5)',sky('dj5','#C9D8E6','#F2F5F8')),
  text:`동모산에 다다른 대조영은 새 나라를 세웠어요. 이 나라가 바로 발해예요. 고구려를 이은 나라라서 다른 나라에 편지를 보낼 때 '고려'라고 쓰기도 했대요.`},
 {svg:SV(`${room()}
  <g id="tOndol">${ondol(200,240,1.4)}</g>
  ${djKid(140,218,.7,{mood:'joy',stance:'sit',arms:'lap'})}${hero(270,218,.66,{body:'dress',hair:'bun',top:'#F6E2A6',skirt:'#8A6A9E',mood:'joy',stance:'sit',arms:'lap'})}${[0,1,2].map(k=>`<path d="M${180+k*20} 200 q-6 -10 0 -20 q6 -10 0 -20" fill="none" stroke="#E9A05A" stroke-width="2.4" opacity=".7"/>`).join('')}`,'#EADCC0'),
  taps:[{label:'온돌',el:'tOndol',say:'아궁이에 불을 때면 방바닥 밑으로 따뜻한 바람이 지나가요.'}],tapHint:'따뜻한 방바닥을 눌러 보세요.',
  text:`발해 사람들은 고구려 사람들처럼 방바닥을 데우는 온돌을 썼어요. 눈이 펑펑 오는 북쪽 나라에서도 집 안은 뜨끈뜨끈했지요.`},
 {svg:SV(`${sea(170)}
  <path d="M-6 170 Q100 150 200 166 L200 290 L-6 290Z" fill="#E6D3A6" ${sw()}/>
  ${g(290,200,.5,`<path d="M-80 -6 Q-70 22 0 24 Q70 22 90 -6Z" fill="#8A5A3C" ${sw(3)}/><path d="M0 -6 V-110" ${sw(5)}/><path d="M-44 -104 L44 -104 L38 -30 L-38 -30Z" fill="#F4E7C6" ${sw(3)}/>`)}
  ${djK(110,262,.82,{pose:'up',mood:'joy'})}${T(290,80,'해동성국',22,K.red)}`,'url(#dj7)',sky('dj7','#CFE7F2','#F6EAD0')),
  text:`발해는 땅이 아주 넓어졌고, 배를 타고 일본과 당나라를 오가며 사이좋게 지냈어요. 사람들은 발해를 '바다 동쪽의 번성한 나라', 해동성국이라고 불렀어요.`},
 {svg:SV(`${room()}
  ${kid(130,266,1.0,{pose:'up',mood:'joy'})}${ondol(280,258,.6)}${hero(300,236,.6,{body:'dress',hair:'bun',top:'#F2C14E',skirt:'#5B7FB8',mood:'smile'})}`,'#EFE3C8'),
  text:`겨울날 따뜻한 방바닥에 배를 깔고 엎드려 보세요. 그 온돌은 고구려와 발해 사람들 때부터 이어져 온 거예요.`},
 {kind:'end', svg:endBase('dj',`<path d="M110 196 Q200 70 290 196Z" fill="#94BFA6" ${sw()}/>${T(200,176,'발해',56,K.red,`stroke="#FFF8EC" stroke-width="6" paint-order="stroke"`)}`,djKid(64,276,.5,{pose:'up',mood:'joy'}),djK(338,276,.55,{pose:'up',mood:'joy'})),
  text:`흩어진 사람들을 다독인 장수가 남긴 선물,<br>고구려를 이은 나라 발해.<br>오늘도 우리 곁에 있어요.<br><span class="big">끝</span>`},
 {kind:'talk'}
];
BOOKS.push({id:'daejoyeong',era:'samguk',title:'대조영과 발해',who:'대조영',teaser:'고구려가 무너진 뒤, 흩어진 사람들을 모아 새 나라를 세운 장수가 있어요.',pages:P,
 talk:{three:['대조영이 세운 나라 이름은 뭐였지?','눈길 걷는 흉내, 뽀드득뽀드득!','방바닥이 따뜻한 걸 뭐라고 하지?'],
  five:['대조영은 왜 동쪽으로 돌아가려 했을까?','함께 먼 길을 걸을 때 무엇이 힘이 될까?','발해를 왜 해동성국이라고 불렀을까?'],
  note:'대조영(?~719)은 고구려 장수 출신으로, 668년 고구려가 멸망한 뒤 당나라 영주로 옮겨진 고구려 유민을 이끌었습니다. 696년 거란의 반란을 틈타 고구려 유민과 말갈 사람들과 함께 동쪽으로 이동했고, 천문령에서 당나라 군대를 물리친 뒤 698년 동모산에서 나라를 세웠습니다. 처음 이름은 진이었고 713년부터 발해라 했습니다. 발해는 일본에 보낸 문서에서 스스로 고려라 칭했고, 9세기에 해동성국으로 불렸습니다. 발해 유적에서 온돌 시설이 발견되었습니다.'}});
})();
