/* 김시민: 진주성 사람들과 함께 지킨 성 */
(()=>{
setScene('joseon','autumn');
const sm=(x,y,s,o={})=>hero(x,y,s,{body:'armor',robe:'#5E7FA8',hat:'helmet',beard:HAIR,...o});
const sol=(x,y,s,o={})=>hero(x,y,s,{body:'armor',robe:'#4C6A90',hat:'helmet',...o});
const town=(x,y,s,c,o={})=>hero(x,y,s,{robe:c,skin:'#EDBF95',hat:'band',bandColor:'#FFFDF6',...o});
const woman=(x,y,s,c,o={})=>hero(x,y,s,{body:'dress',hair:'bun',top:'#FFFDF6',skirt:c,...o});
const japan=(x,y,s,o={})=>hero(x,y,s,{body:'armor',robe:'#3A3A44',hat:'helmet',...o});
const wall=(y,h=80)=>`<rect x="-6" y="${y-h}" width="412" height="${h}" fill="#B0A898" ${sw()}/>${[...Array(14)].map((_,k)=>`<rect x="${k*30-4}" y="${y-h-14}" width="18" height="14" fill="#B0A898" ${sw(1.2)}/>`).join('')}${[...Array(10)].map((_,k)=>`<path d="M${k*44} ${y-h+18} h30 M${k*44+20} ${y-h+40} h30" stroke="#8E8678" stroke-width="2"/>`).join('')}`;
const pavilion=(x,y,s)=>g(x,y,s,`<rect x="-60" y="-40" width="120" height="40" fill="none" ${sw()}/>${[-50,-16,16,50].map(c=>`<path d="M${c} 0 V-40" stroke="#8A3B2C" stroke-width="6"/>`).join('')}<path d="M-80 -38 Q0 -74 80 -38 L70 -48 Q0 -82 -70 -48Z" fill="#4A4A52" ${sw()}/>`);
const P=[
 {kind:'cover', svg:coverBase('sm','진주성을 지켜라',`${pavilion(300,230,.8)}`,sm(130,264,1.0,{arms:'pointR',mood:'joy'})),
  text:`<span class="big">김시민과 진주성</span><br>위인 그림책 {no}권`},
 {svg:SV(`<path d="M-6 200 Q200 190 406 202 L406 290 L-6 290Z" fill="#5B9BC2"/>${wall(200,90)}${pavilion(200,110,.9)}${sm(300,110,.36,{mood:'smile',arms:'pointL',face:'left'})}`,'url(#sm1)',sky('sm1','#CFE7F2','#F6EAD0')),
  text:`남강 옆 높은 언덕 위에 진주성이 있어요. 임진왜란 때 이 성을 지킨 사람이 진주 목사 김시민이에요.`},
 {svg:SV(`${yard(200)}
  ${sm(200,272,.9,{mood:'smile',arms:'pointR',face:'right'})}
  ${[0,1].map(k=>sol(70+k*60,276,.6,{mood:'joy',arms:'handsDown',face:'right'})).join('')}${[0,1].map(k=>town(300+k*50,276,.58,['#D6CDB4','#C9D8B4'][k],{mood:'o',face:'left'})).join('')}
  ${T(200,70,'미리미리 준비하자',18,K.red)}`,'#D9CCAE'),
  text:`김시민은 적이 오기 전에 미리 준비했어요. 무기를 만들고 성벽을 고치고, 군사들에게 활 쏘는 법을 열심히 가르쳤어요.`},
 {chips:['1592년'], svg:SVn(`${wall(180,70)}<path d="M-6 180 H406 V290 H-6Z" fill="#C9C08E"/>
  ${[...Array(18)].map((_,k)=>japan(20+(k%9)*46,250+Math.floor(k/9)*24,.3,{mood:'o',face:'left'})).join('')}
  ${T(200,80,'적군이 몰려와요',20,K.red)}`,'url(#sm2)',sky('sm2','#B9C2CC','#E6E2D4')),
  text:`그해 가을, 수많은 적군이 진주성을 둘러쌌어요. 성안의 군사는 적군보다 훨씬 적었어요.`},
 {svg:SV(`${wall(250,100)}<path d="M-6 250 H406 V290 H-6Z" fill="#C9C08E"/>
  <g id="tPeople">${sol(60,150,.42,{arms:'aimL',prop:H=>PROP.bow(H),mood:'o',face:'left'})}${woman(130,150,.42,'#8C7A6A',{arms:'carryUp',prop:H=>PROP.stoneUp(H),mood:'o'})}${town(200,150,.42,'#D6CDB4',{arms:'holdFront',mood:'joy'})}${woman(270,150,.42,'#5E7FA8',{arms:'carryUp',prop:H=>`<ellipse cx="0" cy="${H.L[1]-12}" rx="16" ry="11" fill="#B5874F" ${sw()}/>`,mood:'joy'})}${sm(340,150,.46,{arms:'pointL',mood:'smile',face:'left'})}</g>`,'url(#sm3)',sky('sm3','#CFE7F2','#F6EAD0')),
  taps:[{label:'다 함께',el:'tPeople',say:'군사도, 마을 사람도, 엄마들도 모두 성벽 위에 올랐어요.'},{label:'돌 나르기',el:'tPeople',say:'영차! 돌과 물을 날라 성을 지켰어요.'}],tapHint:'성벽 위 사람들을 눌러 볼까요?',
  text:`김시민은 군사들과 함께 밤낮없이 성벽을 지켰어요. 마을 사람들과 엄마들도 돌을 나르고 물을 끓이며 힘을 보탰어요.`},
 {svg:SV(`${wall(250,100)}<path d="M-6 250 H406 V290 H-6Z" fill="#C9C08E"/>
  ${[0,1,2,3,4,5].map(k=>(k%2?sol:(x,y,s,o)=>town(x,y,s,['#D6CDB4','#E9CFC0','#C9D8B4'][k%3],o))(50+k*60,150,.42,{arms:'cheer',mood:'joy'})).join('')}
  ${[0,1,2].map(k=>japan(260+k*40,280,.36,{stance:'walk',arms:'walk',mood:'sad',face:'right'})).join('')}
  ${T(200,40,'진주성을 지켰다!',22,K.red)}`,'url(#sm4)',sky('sm4','#CFE7F2','#F6EAD0')),
  text:`엿새 동안의 싸움 끝에 적군은 물러갔어요. 진주성을 지켜 낸 이 싸움을 '진주대첩'이라고 해요.`},
 {svg:SV(`${palace()}
  ${[0,1,2,3].map(k=>backView(50+k*100,300,.7,{robe:['#D6CDB4','#4C6A90'][k%2],hat:['bun','gat'][k%2]})).join('')}
  ${candle(200,200,1.2)}<circle cx="200" cy="160" r="120" fill="url(#candleG)" opacity=".4"/>`,'#E6CFAA',candleDef),
  text:`하지만 김시민은 싸우다 크게 다쳐 끝내 세상을 떠났어요. 진주 사람들은 성을 지켜 준 김시민을 오래오래 기억했어요.`},
 {svg:SV(`<path d="M-6 200 Q200 190 406 202 L406 290 L-6 290Z" fill="#5B9BC2"/>${wall(200,80)}${pavilion(220,120,.8)}
  ${kid(90,276,.8,{mood:'o',arms:'pointR',face:'right'})}${hero(330,276,.8,{body:'dress',hair:'bun',top:'#F2C14E',skirt:'#5B7FB8',mood:'smile',face:'left'})}
  ${T(200,40,'진주성 촉석루',20,K.red)}`,'url(#sm5)',sky('sm5','#CFE7F2','#F6EAD0')),
  text:`지금 진주성에 가면 남강 위로 촉석루가 보여요. 성 안에는 김시민 장군의 동상도 서 있어요.`},
 {kind:'end', svg:endBase('sm',`${pavilion(200,200,1.0)}`,kid(64,276,.5,{arms:'cheer',mood:'joy'}),sm(338,276,.55,{arms:'waveR',mood:'joy'})),
  text:`미리 준비하고 함께 지킨 사람들이 남긴 선물,<br>진주성.<br>오늘도 남강 곁에 있어요.<br><span class="big">끝</span>`},
 {kind:'talk'}
];
BOOKS.push({id:'kimsimin',era:'joseon',title:'김시민과 진주성',who:'김시민',teaser:'군사도 엄마도 아이도 모두 함께 지킨 성이 있어요.',pages:P,
 talk:{three:['성벽 위에 누가누가 있었지?','돌 나르는 흉내 내 볼까? 영차!','진주성 옆에는 무슨 강이 흘렀지?'],
  five:['김시민은 적이 오기 전에 무엇을 준비했을까?','여러 사람이 함께 지키면 무엇이 좋을까?','미리 준비해서 잘된 일이 있었어?'],
  note:'김시민(1554~1592)은 임진왜란 때 진주 목사로, 1592년 음력 10월 약 3,800명의 군사로 2만여 명의 일본군을 6일 동안 막아 냈습니다(제1차 진주성 전투, 진주대첩). 그는 이 싸움에서 이마에 총탄을 맞아 순국했습니다. 이듬해 제2차 진주성 전투에서는 성이 함락되었습니다. 진주성 안에 촉석루와 김시민 장군 동상이 있습니다.'}});
})();
