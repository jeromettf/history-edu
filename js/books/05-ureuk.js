/* 우륵: 열두 줄 가야금 */
(()=>{
setScene('samguk','autumn');
const ur=(x,y,s,o={})=>hero(x,y,s,{robe:'#EDE3CC',hat:'band',bandColor:'#7A6AA8',belt:'#7A6AA8',beard:'#8A8580',...o});
const urKid=(x,y,s,o={})=>hero(x,y,s,{robe:'#E7D7B4',hair:'braid',belt:'#7A6AA8',ribbon:'#7A6AA8',...o});
const gasil=(x,y,s,o={})=>hero(x,y,s,{robe:'#7A6AA8',hat:'crown',belt:K.gold,beard:HAIR,...o});
const jinheung=(x,y,s,o={})=>hero(x,y,s,{robe:'#5E9C8A',hat:'crown',belt:K.gold,...o});
const gayageum=(x,y,s,id)=>g(x,y,s,`<path d="M-90 0 Q-96 -14 -84 -20 L84 -20 Q96 -14 90 0Z" fill="#B5874F" ${sw()}/><rect x="-80" y="-18" width="160" height="10" fill="#C9A15A"/>${id?`<g id="${id}">`:''}${[0,1,2,3,4,5,6,7,8,9,10,11].map(k=>`<path d="M-80 ${-17+k*1.4} L80 ${-17+k*1.4}" stroke="#FFF8EC" stroke-width=".8"/><path d="M${-30+k*5} ${-26+(k%3)*2} l4 6 l-8 0Z" fill="#F4EFE0" ${sw(.8)}/>`).join('')}${id?'</g>':''}<path d="M84 -20 Q100 -24 104 -8" fill="none" stroke="#C9473B" stroke-width="3"/>`);
const notes=(x,y)=>`<path d="M${x} ${y} v-18 l12 -4 v18" fill="none" ${sw(2)}/><circle cx="${x-3}" cy="${y}" r="4" fill="${L}"/><circle cx="${x+9}" cy="${y-4}" r="4" fill="${L}"/>`;
const P=[
 {kind:'cover', svg:coverBase('ur','열두 줄의 노래',`${notes(60,210)}${notes(330,200)}`,`${gayageum(200,262,.9)}${ur(200,230,.7,{mood:'joy'})}`),
  text:`<span class="big">우륵과 가야금 노래</span><br>위인 그림책 {no}권`},
 {svg:SV(`${hills('#A9CDB4','#BCD38F',196,222)}
  ${urKid(140,268,.86,{pose:'up',mood:'joy'})}${notes(230,150)}${notes(270,120)}
  ${hero(320,272,.62,{robe:'#EFE6D2',mood:'joy'})}`,'url(#ur1)',sky('ur1','#CFE7F2','#F6EAD0')),
  text:`온조가 세운 백제와 신라 사이에 가야라는 작은 나라들이 있었어요. 가야에 우륵이라는 아이가 살았어요. 우륵은 새소리, 물소리를 흉내 내며 노래하는 걸 좋아했어요.`},
 {svg:SV(`${palace()}
  ${gasil(120,272,.9,{mood:'smile',pose:'hold'})}${gayageum(280,250,.7)}${ur(300,272,.84,{mood:'o'})}`,'#EAD8B4'),
  text:`가야의 가실왕은 열두 줄로 된 새 악기를 만들었어요. 그리고 노래 잘하는 우륵을 불렀지요. "이 악기로 우리 가야의 노래를 지어 주게."`},
 {svg:SV(`${room()}
  ${ur(220,214,.78,{stance:'sit',arms:{L:[-40,-6],R:[30,-4]},mood:'joy',still:true})}
  <g id="tGayageum">${gayageum(220,246,1.4,'tStrings')}</g>${[[178,226],[262,228]].map(([x,y])=>`<ellipse cx="${x}" cy="${y}" rx="6" ry="5" fill="${SK}" ${sw(1.6)}/>`).join('')}
  ${notes(330,120)}${notes(360,90)}`,'#EADCC0'),
  taps:[{label:'뜯기',el:'tGayageum',say:'띵~ 둥~ 줄을 뜯으면 맑은 소리가 나요.'},{label:'열두 줄',el:'tGayageum',say:'줄이 모두 열두 개예요. 하나, 둘, 셋… 열둘!'}],tapHint:'가야금 줄을 뜯어 볼까요?',
  text:`우륵은 줄을 뜯고 튕기며 소리를 찾았어요. 띵~ 둥~ 가야 곳곳의 산과 강과 마을을 떠올리며 열두 곡의 노래를 지었어요.`},
 {svg:SV(`<path d="M-6 170 Q100 140 200 156 Q300 136 406 166 L406 286 L-6 286Z" fill="#B8C4C0" ${sw()}/>
  ${ur(150,268,.86,{mood:'sad',pose:'hold',item:`<g transform="translate(0 6) scale(.4)">${gayageum(0,-40,1)}</g>`})}${urKid(250,272,.62,{mood:'sad'})}
  ${T(200,80,'가야가 힘을 잃어 가요',18,K.red)}`,'url(#ur4)',sky('ur4','#B9C2CC','#DCDCD4')),
  text:`그런데 가야는 점점 힘을 잃어 갔어요. 우륵은 걱정했어요. "가야가 사라지면 이 노래들도 사라지면 어떡하지?"`},
 {chips:['551년'], svg:SV(`${palace()}
  ${jinheung(120,272,.9,{mood:'joy'})}${ur(280,272,.86,{mood:'smile'})}${gayageum(280,236,.6)}`,'#E6CFAA'),
  text:`우륵은 가야금을 품에 안고 신라로 갔어요. 신라의 진흥왕은 우륵의 연주를 듣고 크게 기뻐했어요. "이 노래를 신라 젊은이들에게 가르쳐 주시오."`},
 {svg:SV(`${yard(206)}
  ${gayageum(110,256,.6)}${gayageum(210,262,.6)}${gayageum(310,256,.6)}
  ${urKid(110,236,.48,{mood:'joy'})}${hero(210,242,.48,{robe:'#6C9BD2',hair:'braid',mood:'joy'})}${hero(310,236,.48,{robe:'#E98FA0',hair:'braid',mood:'joy'})}
  ${ur(360,206,.5,{mood:'joy',pose:'up'})}`,'#D9CCAE'),
  text:`우륵은 신라의 세 젊은이에게 가야금과 노래와 춤을 가르쳤어요. 가야는 사라졌지만, 가야의 노래는 신라 사람들의 노래가 되어 이어졌어요.`},
 {svg:SV(`${hills('#A9CDB4','#BCD38F',190,214)}
  <path d="M220 214 L250 150 L290 150 L320 214Z" fill="#9E9686" ${sw()}/>${ur(270,154,.5,{mood:'joy'})}${gayageum(270,148,.32)}
  ${notes(160,110)}${notes(200,80)}${notes(340,100)}
  ${hero(90,272,.62,{robe:'#EFE6D2',mood:'joy'})}`,'url(#ur6)',sky('ur6','#CFE7F2','#F6EAD0')),
  text:`충주에는 우륵이 가야금을 탔다고 전하는 '탄금대'가 있어요. 강가 바위 위에서 연주하면 소리가 멀리멀리 퍼졌대요.`,chips:['전해 오는 이야기']},
 {svg:SV(`${room()}
  ${gayageum(220,262,1.0)}${kid(140,266,.86,{mood:'joy',pose:'up'})}${hero(300,266,.82,{body:'dress',hair:'bun',top:'#F2C14E',skirt:'#5B7FB8',mood:'smile'})}`,'#EFE3C8'),
  text:`천오백 년쯤 지난 지금도 우리는 가야금을 연주해요. 가야금이라는 이름에는 '가야의 악기'라는 뜻이 그대로 남아 있어요.`},
 {kind:'end', svg:endBase('ur',`${gayageum(200,180,1.6)}${notes(130,90)}${notes(270,80)}`,urKid(64,276,.5,{pose:'up',mood:'joy'}),ur(338,276,.55,{pose:'up',mood:'joy'})),
  text:`노래를 좋아한 아이가 남긴 선물,<br>열두 줄 가야금.<br>오늘도 우리 곁에 있어요.<br><span class="big">끝</span>`},
 {kind:'talk'}
];
BOOKS.push({id:'ureuk',era:'samguk',title:'우륵과 가야금 노래',who:'우륵',teaser:'사라질 뻔한 가야의 노래를 열두 줄 악기에 담아 지킨 사람이 있어요.',pages:P,
 talk:{three:['가야금 줄은 몇 개였지?','가야금 뜯는 흉내, 띵~ 둥~!','새소리를 흉내 내 볼까?'],
  five:['우륵은 왜 신라로 갔을까?','나라는 사라져도 노래가 남은 까닭은 뭘까?','너라면 우리 동네를 어떤 노래로 만들래?'],
  note:'우륵은 6세기 가야의 악사입니다. 『삼국사기』에 따르면 가야의 가실왕이 중국의 악기를 본떠 가야금을 만들고 우륵에게 열두 곡을 짓게 했습니다. 가야가 기울자 우륵은 551년 무렵 신라 진흥왕에게 가서 계고, 법지, 만덕 세 사람에게 가야금과 노래, 춤을 가르쳤습니다. 충주 탄금대는 우륵이 가야금을 탔다는 전설이 있는 곳입니다.'}});
})();
