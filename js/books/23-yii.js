/* 이이: 신사임당의 아들, 아이들을 위한 책 */
(()=>{
setScene('joseon','summer');
const yiKid=(x,y,s,o={})=>hero(x,y,s,{robe:'#D9E6C8',hair:'braid',belt:'#5E9C8A',ribbon:'#5E9C8A',...o});
const yi=(x,y,s,o={})=>hero(x,y,s,{robe:'#3F6FA8',hat:'gat',belt:K.gold,collar:'#FFF8EC',beard:HAIR,...o});
const saim=(x,y,s,o={})=>hero(x,y,s,{body:'dress',top:'#F6E2A6',skirt:'#5E9C8A',hair:'bun',...o});
const book=(t,c='#5E9C8A')=>`<rect x="-30" y="-54" width="60" height="44" rx="2" fill="${c}" ${sw()}/><rect x="-20" y="-48" width="40" height="18" fill="#FFFDF6" ${sw(1.2)}/><text x="0" y="-35" text-anchor="middle" font-family="Jua,sans-serif" font-size="9" fill="${L}">${t}</text>`;
const bill=`<rect x="-36" y="-52" width="72" height="36" rx="3" fill="#B9D6A8" ${sw()}/><circle cx="14" cy="-34" r="11" fill="#E6EED8" ${sw(1.2)}/><text x="-14" y="-29" text-anchor="middle" font-family="Jua,sans-serif" font-size="10" fill="${L}">5000</text>`;
const blackBamboo=(x,y)=>[0,1,2].map(k=>`<path d="M${x+k*14} ${y} V${y-70-k*8}" stroke="#2E3A2E" stroke-width="5"/>${[0,1,2].map(j=>`<path d="M${x+k*14-3} ${y-20-j*20} h6" stroke="#8A9A7A" stroke-width="2"/><path d="M${x+k*14} ${y-26-j*20} q12 -4 18 -12" fill="none" stroke="#3E5A3E" stroke-width="3"/>`).join('')}`).join('');
const P=[
 {kind:'cover', svg:coverBase('yi','아이를 위한 책',`${blackBamboo(30,256)}${g(340,262,1,book('격몽요결'))}`,yi(200,264,1.0,{pose:'hold',mood:'joy',item:book('책','#3F6FA8')})),
  text:`<span class="big">율곡 이이와 아이를 위한 책</span><br>위인 그림책 {no}권`},
 {svg:SV(`${yard(206)}${blackBamboo(300,206)}
  ${saim(130,268,.9,{mood:'joy',pose:'hold',item:brush})}${yiKid(230,270,.7,{mood:'joy',pose:'up'})}`,'#D9CCAE'),
  text:`강릉 오죽헌, 줄기가 까만 대나무가 자라는 집에서 이이가 태어났어요. 어머니는 풀벌레를 진짜처럼 그리는 화가 신사임당이었어요.`},
 {svg:SV(`${room()}
  ${saim(120,268,.86,{mood:'smile',pose:'hold',item:book('책','#C9A15A')})}${yiKid(250,270,.7,{mood:'o'})}
  ${T(250,96,'이건 무슨 뜻이에요?',16,K.red)}`,'#EADCC0'),
  text:`이이는 궁금한 게 생기면 어머니에게 묻고 또 물었어요. "왜요? 그건 왜요?" 어머니는 귀찮아하지 않고 차근차근 대답해 주었어요.`,chips:['전해 오는 이야기']},
 {svg:SV(`${palace()}
  ${yi(200,272,.9,{pose:'up',mood:'joy'})}
  ${[0,1,2,3,4,5,6,7,8].map(k=>star(70+k*32,70+(k%2)*14,8,k%2?K.gold:'#F28C7C')).join('')}
  ${T(200,120,'아홉 번 일등!',22,K.red)}`,'#E8D3B0'),
  text:`이이는 자라서 나라의 시험에 아홉 번이나 일등으로 붙었어요. 그래도 마을 아이들이 "선생님, 이건 왜요?" 하고 물으러 올 때가 가장 즐거웠어요.`},
 {svg:SV(`${palace()}
  ${yi(200,272,.9,{pose:'up',mood:'joy'})}
  ${[0,1,2,3,4,5,6,7,8].map(k=>star(70+k*32,70+(k%2)*14,8,k%2?K.gold:'#F28C7C')).join('')}
  ${T(200,120,'아홉 번 일등!',22,K.red)}`,'#E8D3B0'),
  text:`그런데 아이들은 무엇부터 배워야 할지 몰라 쩔쩔맸어요. 책은 어렵고 두꺼웠거든요. 이이는 생각했어요. "어머니가 내게 해 주셨듯이, 차근차근 알려 주는 책이 있으면 좋겠다."`},
 {svg:SV(`${room()}
  <g id="tBook">${g(260,236,1.6,book('격몽요결','#5E9C8A'))}</g>
  ${yi(130,262,.88,{stance:'sit',arms:'writeR',prop:H=>PROP.brush(H),mood:'smile',face:'right'})}<rect x="150" y="244" width="70" height="10" fill="#8A5A3C" ${sw(1.2)}/><rect x="156" y="236" width="44" height="10" fill="#FFFDF6" ${sw(1)}/>`,'#EADCC0'),
  taps:[{label:'격몽요결',el:'tBook',say:'아침에 일어나면 이불을 개고, 어른께 인사드리고… 아이들이 지킬 일이 적혀 있어요.'}],tapHint:'아이들을 위한 책을 펼쳐 볼까요?',
  text:`이이는 아이들을 위한 쉬운 책을 썼어요. 아침에 이불 개기, 어른께 인사하기, 모르는 건 묻기처럼 날마다 할 일을 차근차근 적었어요. 아이들은 하나씩 따라 해 보았어요.`},
 {kind:'end', svg:endBase('yi',`${g(200,200,2.4,book('격몽요결'))}${blackBamboo(60,200)}`,yiKid(64,276,.5,{pose:'up',mood:'joy'}),yi(338,276,.55,{pose:'up',mood:'joy'})),
  text:`강릉에 들를 때마다 이이는 까만 대나무 숲길을 걸었어요. 어릴 때 어머니께 묻고 또 묻던 길이었어요.<br><span class="big">끝</span>`},
 {kind:'talk'}
];
BOOKS.push({id:'yii',era:'joseon',title:'율곡 이이와 아이를 위한 책',who:'이이',teaser:'신사임당의 아들은 나라 시험에서 아홉 번이나 일등을 했대요.',pages:P,now:"오천 원짜리 지폐에 이이가, 오만 원짜리 지폐에 어머니 신사임당이 있어요. 엄마와 아들이 모두 지폐에 나와요.",
 talk:{three:['이이의 엄마는 누구였지?','오천 원짜리에서 이이를 찾아볼까?','바르게 앉는 흉내, 반듯!'],
  five:['이이는 왜 아이들을 위한 책을 썼을까?','날마다 꼭 지키는 일이 있어?','미리 준비해서 좋았던 적이 있어?'],
  note:'이이(1536~1584, 호는 율곡)는 강릉 오죽헌에서 신사임당의 아들로 태어났습니다. 과거에 아홉 번 장원하여 구도장원공이라 불렸습니다. 1577년 처음 배우는 사람을 위한 『격몽요결』을 썼습니다. 임진왜란 전에 10만 군사를 길러야 한다고 했다는 십만양병설은 널리 알려져 있으나, 이이가 실제로 그렇게 주장했는지는 학자들 사이에 의견이 갈립니다. 세 살에 글을 읽었다는 이야기도 전해 오는 일화입니다. 2007년부터 오천 원권에 초상이 실렸습니다.'}});
})();
