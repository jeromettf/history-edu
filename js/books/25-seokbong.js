/* 14권 한석봉: 불 끄고 하는 시합 */
(()=>{
setScene('joseon','autumn');
const LEG=['전해 오는 이야기'];
const sbKid=(x,y,s,o={})=>hero(x,y,s,{robe:'#E7D7B4',hair:'braid',belt:'#8C7350',ribbon:'#5E7FA8',...o});
const sb=(x,y,s,o={})=>hero(x,y,s,{robe:'#5E7FA8',hat:'gat',belt:K.gold,collar:'#FFF8EC',...o});
const mom=(x,y,s,o={})=>hero(x,y,s,{body:'dress',hair:'bun',top:'#FFFDF6',skirt:'#8C7A6A',...o});
const tteok=(x,y,neat)=>`<rect x="${x-50}" y="${y-8}" width="100" height="10" rx="2" fill="#B98A5A" ${sw(1.6)}/>${[0,1,2,3,4,5].map(k=>`<rect x="${x-44+k*15}" y="${y-22+(neat?0:(k%2)*3)}" width="12" height="14" rx="3" fill="#FFFDF6" ${sw(1.4)}/>`).join('')}`;
const page=(x,y,neat)=>`<rect x="${x-46}" y="${y-60}" width="92" height="60" fill="#FFFDF6" ${sw(1.6)}/>${neat?`<text x="${x}" y="${y-22}" text-anchor="middle" font-family="serif" font-size="22" fill="#2E2522">天 地</text>`:`<g transform="rotate(-8 ${x} ${y-30})"><text x="${x-16}" y="${y-18}" text-anchor="middle" font-family="serif" font-size="24" fill="#2E2522">天</text></g><g transform="rotate(14 ${x} ${y-30})"><text x="${x+18}" y="${y-30}" text-anchor="middle" font-family="serif" font-size="16" fill="#2E2522">地</text></g>`}`;
const lamp=(x,y)=>`<rect x="${x-4}" y="${y-30}" width="8" height="30" fill="#8A6A44" ${sw(1.4)}/><ellipse cx="${x}" cy="${y-30}" rx="12" ry="5" fill="#C9A15A" ${sw(1.4)}/><path d="M${x} ${y-50} Q${x+8} ${y-40} ${x} ${y-34} Q${x-8} ${y-40} ${x} ${y-50}Z" fill="#FFC24A" ${sw(1.2)}/>`;
const temple=(x,y,s)=>g(x,y,s,`<rect x="-70" y="-60" width="140" height="60" fill="#C9B48A" ${sw()}/><path d="M-96 -56 Q-60 -86 0 -92 Q60 -86 96 -56 L86 -64 Q50 -104 0 -108 Q-50 -104 -86 -64Z" fill="#4A4A55" ${sw()}/><rect x="-16" y="-40" width="32" height="40" fill="#8A5A3C" ${sw()}/>`);
const P=[
 {kind:'cover', svg:coverBase('sb','불 끄고 하는 시합',`${tteok(80,256,true)}${lamp(340,256)}`,sb(210,264,1.0,{pose:'hold',mood:'joy',item:brush})),
  text:`<span class="big">한석봉과 어머니의 떡</span><br>위인 그림책 {no}권`},
 {svg:SV(`${cloud(80,40,.7)}${hills('#A9CDB4','#D9CCAE',196,214)}
  ${sbKid(140,266,.92,{pose:'hold',mood:'joy',item:brush})}
  <path d="M210 250 q10 -20 20 0 q10 -20 20 0 M262 250 h22 M296 236 v18" fill="none" stroke="#3A3330" stroke-width="4" stroke-linecap="round"/>
  ${mom(330,266,.7,{mood:'smile'})}`,'url(#sb1)',sky('sb1','#CFE7F2','#F6EAD0')),
  text:`허준과 같은 시절, 개성에 석봉이라는 아이가 살았어요. 석봉이는 글씨 쓰기를 좋아해서 땅바닥에도 물로 글씨를 썼대요.`},
 {svg:SV(`${room()}
  ${tteok(260,232,true)}
  ${mom(180,268,.92,{pose:'hold',mood:'smile'})}${sbKid(330,270,.68,{mood:'joy'})}`,'#EADCC0'),
  text:`석봉이 어머니는 떡을 팔아 살림을 꾸렸어요. 떡을 팔아 모은 돈으로 석봉이를 공부시켰어요. "열심히 배워서 훌륭한 사람이 되거라."`},
 {chips:LEG, svg:SV(`${cloud(300,40,.7)}<path d="M-6 180 Q60 100 140 140 Q210 70 290 136 Q350 100 406 150 L406 286 L-6 286Z" fill="#94BFA6" ${sw()}/>
  ${temple(200,196,.9)}
  ${sbKid(110,266,.86,{pose:'hold',mood:'smile',item:bundle})}${mom(300,266,.8,{pose:'up',mood:'sad'})}
  ${T(300,40,'십 년 뒤에 만나자',16,K.red)}`,'url(#sb3)',sky('sb3','#CFE7F2','#F6EAD0')),
  text:`석봉이는 깊은 산속 절에 공부하러 떠났어요. 어머니와 약속했지요. "십 년 동안 열심히 공부하고 돌아올게요."`},
 {chips:LEG, svg:SV(`<circle cx="330" cy="50" r="20" fill="#F6F0D6" ${sw()}/>${star(60,40,4,'#F6F0D6')}${star(200,30,3,'#F6F0D6')}
  <path d="M-6 200 Q200 186 406 200 L406 286 L-6 286Z" fill="#4E5A4A" ${sw()}/>
  ${hut(260,170)}
  ${sb(140,266,.86,{pose:'hold',mood:'joy',item:bundle})}
  ${T(140,100,'어머니 보고 싶어요',16,'#F6F0D6')}`,'url(#sb4)',sky('sb4','#1F2748','#46406A')),
  text:`그런데 삼 년이 지나자 어머니가 너무 보고 싶었어요. 석봉이는 몰래 산을 내려와 집으로 돌아왔어요.`},
 {chips:LEG, svg:SV(`<rect x="-6" y="-6" width="412" height="292" fill="#3A3130"/>
  <rect x="-6" y="216" width="412" height="70" fill="#4A3A30"/>
  <g id="tMom">${mom(110,268,.88,{mood:'smile'})}</g>${tteok(110,250,true)}
  <g id="tSb">${sb(290,268,.88,{mood:'o'})}</g>
  <g id="tLamp">${lamp(200,240)}</g>`,'#3A3130'),
  text:`어머니는 반가웠지만 꾹 참고 말했어요. "불을 끄고, 나는 떡을 썰고 너는 글씨를 써 보자." 후 하고 등잔불이 꺼졌어요. 사각사각, 썩썩.`},
 {chips:LEG, svg:SV(`<rect x="-6" y="-6" width="412" height="292" fill="#EADCC0"/>
  <circle cx="200" cy="150" r="140" fill="url(#sbg6)"/>
  <rect x="-6" y="216" width="412" height="70" fill="#DDB16A"/>
  <g id="tTteok">${tteok(110,210,true)}</g>
  <g id="tGeul">${page(290,214,false)}</g>
  ${lamp(200,240)}
  <rect id="dark" x="-6" y="-6" width="412" height="292" fill="#1A1416" opacity=".85"/>`,'#EADCC0',glow('sbg6','#FFE9A6',.9)),
  taps:[{label:'불 켜기',el:'dark',say:'불을 켜 보니… 누가 더 잘했을까?',hide:['dark']},{label:'어머니의 떡',el:'tTteok',say:'가지런하고 반듯해요.',hide:['dark']},{label:'석봉이 글씨',el:'tGeul',say:'삐뚤빼뚤, 크기도 제각각이에요.',hide:['dark']}],tapHint:'불을 켜서 누가 이겼는지 볼까요?',
  text:`불을 켜 보니, 어머니가 썬 떡은 크기가 똑같이 반듯했어요. 그런데 석봉이의 글씨는 삐뚤빼뚤했지요.`},
 {chips:LEG, svg:SV(`${room()}
  ${mom(130,268,.9,{mood:'smile'})}${sb(270,268,.9,{pose:'hold',mood:'sad'})}
  ${T(270,100,'다시 열심히 할게요',16,K.red)}`,'#EADCC0'),
  text:`어머니가 조용히 말했어요. "아직 더 연습해야겠구나." 석봉이는 부끄러워 그 밤에 다시 산으로 돌아갔어요. 그리고 쉬지 않고 연습했어요.`},
 {svg:SV(`${palace()}
  ${king(110,272,.84,{mood:'joy',beard:HAIR})}
  ${page(240,180,true)}
  ${sb(310,272,.88,{pose:'up',mood:'joy'})}`,'#E8D3B0'),
  text:`석봉이는 조선에서 글씨를 가장 잘 쓰는 사람이 되었어요. 임금님도 감탄했대요. 석봉이 쓴 천자문은 아이들이 글자를 배우는 책이 되었어요.`},
 {svg:SV(`${room()}
  ${kid(140,266,1.0,{pose:'hold',mood:'smile',item:brush})}
  ${page(290,200,false)}${page(290,270,true)}
  ${T(330,120,'연습하면 반듯반듯',14,K.red)}`,'#EFE3C8'),
  text:`처음엔 삐뚤빼뚤해도 괜찮아요. 석봉이처럼 꾸준히 연습하면 우리 글씨도 점점 반듯해질 거예요.`},
 {kind:'end', svg:endBase('sb',`${tteok(200,150,true)}${page(200,236,true)}`,sbKid(64,276,.5,{pose:'up',mood:'joy'}),mom(338,276,.55,{pose:'up',mood:'joy'})),
  text:`글씨를 좋아한 아이와 어머니가 남긴 선물,<br>꾸준한 연습.<br>오늘도 우리 곁에 있어요.<br><span class="big">끝</span>`},
 {kind:'talk'}
];
BOOKS.push({id:'seokbong',era:'joseon',title:'한석봉과 어머니의 떡',who:'한석봉',teaser:'불을 끄고 떡 써는 어머니와 글씨 쓰는 석봉이가 시합을 했어요.',pages:P,
 talk:{three:['캄캄할 때 어머니는 무엇을 썰었지?','떡 써는 흉내, 썩썩!','손가락으로 동그라미를 그려 볼까?'],
  five:['어머니는 왜 불을 끄고 시합을 했을까?','석봉이는 왜 다시 산으로 돌아갔을까?','열심히 연습해서 잘하게 된 일이 있어?'],
  note:'한석봉(1543~1605)은 본명이 한호로, 조선 중기의 명필입니다. 선조의 아낌을 받았고, 1583년 그가 쓴 『석봉 천자문』은 오랫동안 글씨 교본으로 쓰였습니다. 떡 써는 어머니 이야기는 널리 알려진 일화이지만 옛 기록으로 확인되지는 않습니다.'}});
})();
