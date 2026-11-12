/* 박지원: 여행 일기로 세상을 넓힌 선비 */
(()=>{
setScene('joseon','summer');
const bj=(x,y,s,o={})=>hero(x,y,s,{robe:'#B9A475',hat:'gat',belt:'#5E9C8A',collar:'#FFF8EC',beard:HAIR,...o});
const yangban=(x,y,s,o={})=>hero(x,y,s,{robe:'#EDE9E0',hat:'gat',belt:K.gold,beard:'#E6E1D6',...o});
const qing=(x,y,s,o={})=>hero(x,y,s,{robe:'#5A6E8A',hat:'band',bandColor:'#3A3A44',belt:'#3A3A44',...o});
const cart=(x,y,s)=>g(x,y,s,`<rect x="-60" y="-50" width="120" height="30" fill="#B5874F" ${sw()}/>${[-36,36].map(c=>`<circle cx="${c}" cy="-14" r="16" fill="none" stroke="${K.wood}" stroke-width="6"/><path d="M${c-14} -14 h28 M${c} -28 v28" stroke="${K.wood}" stroke-width="3"/>`).join('')}<path d="M60 -40 L100 -30" stroke="${K.wood}" stroke-width="5"/>`);
const bricks=(x,y,w,h)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="#C9735A" ${sw()}/>${[...Array(Math.floor(h/12))].map((_,k)=>`<path d="M${x} ${y+12+k*12} h${w}" stroke="#8A4A3A" stroke-width="1.4"/>${[...Array(Math.floor(w/24))].map((_,j)=>`<path d="M${x+(k%2?12:0)+j*24} ${y+k*12} v12" stroke="#8A4A3A" stroke-width="1.4"/>`).join('')}`).join('')}`;
const notebook=H=>`<rect x="${H.L[0]-10}" y="${H.L[1]-6}" width="34" height="26" fill="#FFFDF6" ${sw(1.2)}/><path d="M${H.L[0]-4} ${H.L[1]+2} h22 M${H.L[0]-4} ${H.L[1]+8} h18" stroke="#8A8580" stroke-width="1.4"/>`;
const desk=(x,y,w=90)=>`<rect x="${x-w/2}" y="${y}" width="${w}" height="12" rx="2" fill="#8A5A3C" ${sw()}/><path d="M${x-w/2+8} ${y+12} v14 M${x+w/2-8} ${y+12} v14" stroke="#8A5A3C" stroke-width="6"/>`;
const P=[
 {kind:'cover', svg:coverBase('bj','쓸모 있는 여행',`${cart(300,262,.7)}`,bj(130,264,1.0,{arms:'writeR',prop:H=>PROP.brush(H)+notebook(H),mood:'joy'})),
  text:`<span class="big">박지원과 열하일기</span><br>위인 그림책 {no}권`},
 {svg:SV(`${room()}
  ${bj(130,262,.9,{stance:'sit',arms:'pointR',mood:'joy',face:'right'})}${[0,1].map(k=>hero(250+k*70,262,.72,{robe:['#C9D8E8','#D6CDB4'][k],hat:'gat',stance:'sit',arms:'lap',mood:'joy',face:'left'})).join('')}
  ${T(200,80,'하하하!',22,K.red)}`,'#EADCC0'),
  text:`조선의 선비 박지원은 이야기를 재미있게 하기로 유명했어요. 친구들은 박지원의 이야기를 들으면 배를 잡고 웃었대요.`},
 {chips:['1780년'], svg:SV(`${ridge(150,'#C9C08E',40,2)}<path d="M-6 190 Q200 180 406 192 L406 290 L-6 290Z" fill="#D8C77A"/><path d="M-6 250 Q200 230 406 250" fill="none" stroke="#E6D3A6" stroke-width="20"/>
  ${[0,1,2].map(k=>horse(80+k*90,252,.42,{color:['#A9714A','#F4EFE0','#3B2F2A'][k]})).join('')}
  ${bj(340,262,.62,{stance:'walk',arms:'walk',mood:'joy',face:'left'})}`,'url(#bj1)',sky('bj1','#CFE7F2','#F6EAD0')),
  text:`마흔네 살이 되던 해, 박지원은 청나라로 가는 사신단을 따라 먼 길을 떠났어요. 압록강을 건너 베이징, 그리고 더 먼 열하까지 갔어요.`},
 {svg:SV(`${townscape(150,6)}<path d="M-6 180 H406 V290 H-6Z" fill="#D9C49A"/>
  <g id="tThings">${cart(150,262,.9)}${bricks(260,190,110,72)}</g>
  ${bj(80,276,.72,{arms:'writeR',prop:H=>PROP.brush(H)+notebook(H),mood:'o',face:'right'})}${qing(330,282,.56,{mood:'smile',face:'left'})}`,'url(#bj2)',sky('bj2','#CFE7F2','#F6EAD0')),
  taps:[{label:'수레',el:'tThings',say:'덜커덕덜커덕! 바퀴 달린 수레가 무거운 짐을 척척 날라요.'},{label:'벽돌',el:'tThings',say:'반듯한 벽돌을 차곡차곡. 튼튼한 벽이 금방 올라가요.'}],tapHint:'신기한 것들을 눌러 볼까요?',
  text:`가는 곳마다 박지원은 눈을 반짝였어요. 짐을 실어 나르는 수레, 반듯하게 구운 벽돌… "이걸 우리나라에서도 쓰면 사람들이 편해지겠구나!" 박지원은 보는 것마다 적었어요.`},
 {svg:SV(`${townscape(150,6)}<path d="M-6 180 H406 V290 H-6Z" fill="#D9C49A"/>
  ${yangban(300,276,.72,{mood:'o',arms:'handsDown',face:'left'})}
  ${bj(120,276,.82,{arms:'pointR',mood:'smile',face:'right'})}
  ${T(200,80,'똥거름도 쓸모가 있다오!',18,K.red)}`,'url(#bj3)',sky('bj3','#CFE7F2','#F6EAD0')),
  text:`어떤 선비들은 "오랑캐 나라에서 뭘 배우냐"며 코웃음 쳤어요. 박지원은 말했어요. "백성에게 쓸모가 있다면, 깨진 기와 조각이나 똥거름에서도 배울 수 있소."`},
 {svg:SV(`${room()}
  ${bj(150,256,.96,{stance:'sit',arms:'writeR',prop:H=>PROP.brush(H),mood:'smile',face:'right'})}${desk(240,236,110)}<rect x="200" y="226" width="80" height="10" fill="#FFFDF6" ${sw(1)}/>
  ${[0,1,2,3,4,5].map(k=>`<rect x="320" y="${262-k*9}" width="60" height="9" fill="${['#C9473B','#5E7FA8','#B8862F'][k%3]}" ${sw(1)}/>`).join('')}`,'#EADCC0'),
  text:`돌아온 박지원은 보고 들은 것을 모아 『열하일기』를 썼어요. 재미있는 이야기와 새로운 생각이 가득해서, 사람들이 앞다투어 베껴 읽었대요.`},
 {svg:SV(`${room()}
  ${kid(130,266,.86,{arms:'writeR',prop:H=>PROP.brush(H)+notebook(H),mood:'joy',face:'right'})}${hero(300,266,.86,{body:'dress',hair:'bun',top:'#F2C14E',skirt:'#5B7FB8',mood:'smile',face:'left',arms:'pointL'})}
  ${T(200,80,'오늘 본 신기한 것!',18,K.red)}`,'#EFE3C8'),
  text:`나들이를 가면 신기한 것을 하나 찾아 그려 볼까요? 박지원처럼 "이건 왜 이렇게 생겼을까?" 물어보면 생각이 쑥쑥 자라요.`},
 {kind:'end', svg:endBase('bj',`${cart(200,220,1.1)}`,kid(64,276,.5,{arms:'cheer',mood:'joy'}),bj(338,276,.55,{arms:'waveR',mood:'joy'})),
  text:`보는 것마다 배운 선비가 남긴 선물,<br>쓸모를 찾는 눈.<br>오늘도 우리 곁에 있어요.<br><span class="big">끝</span>`},
 {kind:'talk'}
];
BOOKS.push({id:'bakjiwon',era:'joseon',title:'박지원과 열하일기',who:'박지원',teaser:'먼 나라를 여행하며 수레와 벽돌을 꼼꼼히 적어 온 선비가 있어요.',pages:P,
 talk:{three:['박지원은 무엇을 보고 신기해했지?','수레 바퀴처럼 데굴데굴 굴러 볼까?','여행 가면 무엇을 보고 싶어?'],
  five:['수레가 있으면 무엇이 편해질까?','박지원은 왜 다른 나라에서도 배우려고 했을까?','너라면 여행 일기에 무엇을 적을래?'],
  note:'박지원(1737~1805)은 호가 연암인 조선 후기의 실학자이자 문장가입니다. 1780년 삼종형 박명원이 청 건륭제의 칠순을 축하하러 가는 사신단을 따라 베이징과 열하(지금의 청더)에 다녀왔고, 그 기록을 『열하일기』로 남겼습니다. 이 책에서 수레와 벽돌 사용 등 청의 문물을 받아들여 백성의 삶을 이롭게 해야 한다고 주장했고, "깨진 기와 조각과 똥거름이 장관"이라는 대목이 유명합니다. 「허생전」, 「양반전」 등의 소설도 지었습니다.'}});
})();
