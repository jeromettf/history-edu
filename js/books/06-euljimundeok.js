/* 을지문덕: 꾀 많은 장군의 편지 */
(()=>{
setScene('samguk','summer');
const ul=(x,y,s,o={})=>hero(x,y,s,{body:'armor',robe:'#C9473B',hat:'feather',beard:HAIR,...o});
const sui=(x,y,s,o={})=>hero(x,y,s,{body:'armor',robe:'#5A6E8A',hat:'helmet',beard:'#3B2618',...o});
const letter=`<rect x="-26" y="-58" width="52" height="40" fill="#FFFDF6" ${sw()}/><path d="M-18 -50 V-24 M-8 -50 V-24 M2 -50 V-24 M12 -50 V-24" stroke="#5A5560" stroke-width="2.4" stroke-dasharray="4 3"/>`;
const tents=(x,y,n,c='#8E9AA6')=>[...Array(n)].map((_,k)=>`<path d="M${x+k*36-22} ${y} L${x+k*36} ${y-30} L${x+k*36+22} ${y}Z" fill="${c}" ${sw(1.4)}/>`).join('');
const P=[
 {kind:'cover', svg:coverBase('ul','꾀 많은 장군',`${g(60,252,1.1,letter)}`,ul(220,264,1.0,{pose:'up',mood:'joy'})),
  text:`<span class="big">을지문덕과 살수의 편지</span><br>위인 그림책 {no}권`},
 {svg:SV(`<path d="M-6 170 Q100 140 200 156 Q300 136 406 166 L406 286 L-6 286Z" fill="#B8C4C0" ${sw()}/>
  ${tents(30,200,10)}${[60,140,220,300,370].map((x,k)=>sui(x,268-(k%2)*12,.5,{mood:'sad'})).join('')}
  ${T(200,70,'백만 대군이 몰려온대!',22,K.red)}`,'url(#ul1)',sky('ul1','#B9C2CC','#DCDCD4')),
  text:`먼 옛날, 고구려라는 나라가 있던 때예요. 중국의 수나라가 백만이 넘는 군사를 이끌고 고구려로 쳐들어왔어요. 끝이 안 보일 만큼 많은 군사였어요.`},
 {svg:SV(`${palace()}
  ${king(120,272,.86,{robe:'#B5473A',mood:'sad'})}${ul(280,272,.9,{pose:'up',mood:'smile'})}
  ${T(280,90,'꾀를 내 보겠습니다',18,K.red)}`,'#E6CFAA'),
  text:`고구려 사람들은 걱정이 컸어요. 그때 을지문덕 장군이 나섰어요. "군사가 많다고 다 이기는 건 아닙니다. 꾀를 내 보겠습니다."`},
 {svg:SV(`${hills('#A9CDB4','#BCD38F',196,222)}${tents(220,210,5)}
  ${ul(130,268,.86,{mood:'smile'})}${sui(300,268,.8,{mood:'o'})}
  ${T(130,90,'(몰래 살펴보자)',16,K.ink)}`,'url(#ul3)',sky('ul3','#CFE7F2','#F6EAD0')),
  text:`을지문덕은 혼자 적의 진영에 찾아갔어요. 항복하러 온 척하면서, 적의 군사들이 배고프고 지쳐 있다는 걸 꼼꼼히 살펴보았지요.`},
 {svg:SV(`${hills('#A9CDB4','#BCD38F',196,222)}
  ${[260,300,340].map((x,k)=>sui(x,266-(k%2)*8,.6,{pose:'up',mood:'joy'})).join('')}
  ${ul(110,266,.8,{mood:'smile'})}${hero(60,270,.6,{body:'armor',robe:'#C9473B',hat:'feather',mood:'smile'})}
  <path d="M170 200 h-40 l8 -6 M130 200 l8 6" fill="none" ${sw(2.4)}/>${T(220,90,'졌다, 도망가자! (일부러)',16,K.red)}`,'url(#ul4)',sky('ul4','#CFE7F2','#F6EAD0')),
  text:`그리고 싸울 때마다 일부러 지는 척 뒤로 물러났어요. 하루에 일곱 번이나요! 수나라 군사들은 신이 나서 고구려 깊숙이 따라 들어왔어요.`},
 {svg:SV(`${hills('#A9CDB4','#BCD38F',196,222)}
  <g id="tSui">${sui(310,272,.84,{mood:'o',arms:'holdFront',face:'left'})}</g>
  <g id="tLetter">${g(310,282,1.1,letter)}</g><path d="M180 150 q40 -30 90 40" fill="none" stroke="#5A3B2C" stroke-width="2" stroke-dasharray="5 6"/>${ul(80,272,.74,{mood:'joy'})}`,'url(#ul5)',sky('ul5','#CFE7F2','#F6EAD0')),
  taps:[{label:'편지',el:'tLetter',say:'"그대는 이미 많이 이겼으니, 이제 그만 돌아가시오."'},{label:'적장 우중문',el:'tSui',say:'헉, 우리가 꾀에 넘어간 거였어?'}],tapHint:'편지를 읽어 볼까요?',
  text:`을지문덕은 적의 장수 우중문에게 짧은 시를 보냈어요. "그대의 꾀는 하늘에 닿았고, 이긴 공도 높으니 이제 그만 돌아가시오." 놀리는 듯한 편지였지요.`},
 {chips:['612년'], svg:SV(`${hills('#A9CDB4','#BCD38F',180,236)}
  <path d="M-6 200 Q200 186 406 200 L406 240 Q200 226 -6 240Z" fill="#5B9BC2" ${sw()}/>
  ${[40,110,180,250,320,380].map((x,k)=>`<path d="M${x-20} ${214+(k%2)*10} q10 -12 20 0 q10 12 20 0" fill="none" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round"/>`).join('')}
  ${[300,340,380].map(x=>sui(x,196,.4,{mood:'o'})).join('')}
  ${ul(90,272,.74,{pose:'up',mood:'joy'})}${T(220,80,'살수에서 크게 이겼다!',20,K.red)}`,'url(#ul6)',sky('ul6','#CFE7F2','#F6EAD0')),
  text:`그제야 속은 걸 안 수나라 군사들은 허둥지둥 돌아가기 시작했어요. 고구려 군사들은 살수라는 강에서 기다렸다가 크게 이겼어요. 이것을 살수 대첩이라고 해요.`},
 {svg:SV(`${palace()}
  ${king(120,272,.86,{robe:'#B5473A',mood:'joy',pose:'up'})}${ul(280,272,.9,{pose:'up',mood:'joy'})}`,'#E6CFAA'),
  text:`수많은 군사를 이끌고 온 수나라는 크게 지고 돌아갔어요. 을지문덕의 꾀 덕분에 고구려는 나라를 지켰어요.`},
 {svg:SV(`${room()}
  ${kid(140,266,1.0,{mood:'joy',pose:'hold',item:letter})}${hero(280,266,.9,{body:'dress',hair:'braid',top:'#E98FA0',skirt:'#5B7FB8',mood:'joy'})}`,'#EFE3C8'),
  text:`을지문덕이 보낸 시는 지금까지 전하는 우리나라에서 가장 오래된 한시 가운데 하나예요. 짧은 글 한 편이 천사백 년 동안 남아 있는 거예요.`},
 {kind:'end', svg:endBase('ul',`${g(200,200,3,letter)}`,ul(64,276,.5,{pose:'up',mood:'joy'}),kid(338,276,.5,{pose:'up',mood:'joy'})),
  text:`힘보다 꾀를 믿은 장군이 남긴 선물,<br>지혜로 지킨 고구려.<br>오늘도 우리 곁에 있어요.<br><span class="big">끝</span>`},
 {kind:'talk'}
];
BOOKS.push({id:'euljimundeok',era:'samguk',title:'을지문덕과 살수의 편지',who:'을지문덕',teaser:'백만 대군에게 "이제 그만 돌아가시오" 하는 편지를 보낸 장군이 있었대요.',pages:P,
 talk:{three:['을지문덕은 적에게 무엇을 보냈지?','지는 척 뒤로 걷기, 살금살금!','강물 흉내, 쏴아!'],
  five:['을지문덕은 왜 일부러 지는 척했을까?','편지를 받은 적장은 어떤 기분이었을까?','힘이 약할 때 꾀를 낸 적이 있어?'],
  note:'을지문덕은 고구려 영양왕 때의 장군입니다. 612년 수나라 양제가 113만 대군으로 쳐들어오자, 거짓 항복으로 적진을 살피고 하루 일곱 번 싸워 일부러 물러나며 적을 깊이 끌어들였습니다. 적장 우중문에게 보낸 오언시 「여수장우중문시」는 『삼국사기』에 전하며, 우리나라에 남은 가장 오래된 한시 가운데 하나로 꼽힙니다. 이어 살수(청천강으로 봄)에서 수나라 군대를 크게 물리쳤습니다. 싸움 장면은 아이 눈높이에 맞춰 이겼다는 내용으로만 담았습니다.'}});
})();
