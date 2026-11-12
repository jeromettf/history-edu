/* 김부식: 남아 있는 가장 오래된 우리 역사책 */
(()=>{
setScene('goryeo','winter','soft');
const bs=(x,y,s,o={})=>hero(x,y,s,{robe:'#5E7FA8',hat:'gat',belt:K.gold,collar:'#FFF8EC',beard:'#8A8580',...o});
const injong=(x,y,s,o={})=>king(x,y,s,{...o});
const scholar=(x,y,s,c,o={})=>hero(x,y,s,{robe:c,hat:'gat',belt:'#8C7350',...o});
const desk=(x,y,w=90)=>`<rect x="${x-w/2}" y="${y}" width="${w}" height="12" rx="2" fill="#8A5A3C" ${sw()}/><path d="M${x-w/2+8} ${y+12} v14 M${x+w/2-8} ${y+12} v14" stroke="#8A5A3C" stroke-width="6"/>`;
const stack=(x,y,n=5,c=['#C9473B','#5E7FA8','#B8862F','#5E9C8A'])=>[...Array(n)].map((_,k)=>`<rect x="${x-26}" y="${y-k*9-9}" width="52" height="9" rx="1" fill="${c[k%c.length]}" ${sw(1.2)}/>`).join('');
const P=[
 {kind:'cover', svg:coverBase('bs','쉰 권의 역사책',`${stack(300,262,8)}`,bs(130,264,1.0,{arms:'holdFront',prop:H=>`<g transform="translate(${(H.L[0]+H.R[0])/2} ${H.L[1]+34})">${bigBook('','#5E7FA8')}</g>`,mood:'joy'})),
  text:`<span class="big">김부식과 삼국사기</span><br>위인 그림책 {no}권`},
 {svg:SV(`${palace()}
  ${injong(120,270,.9,{mood:'o',arms:'pointR',face:'right'})}${bs(280,270,.88,{mood:'smile',face:'left',arms:'pray'})}
  ${T(200,80,'옛 나라 이야기를 모아 주시오',16,K.red)}`,'#E6CFAA'),
  text:`고려의 인종 임금이 걱정했어요. "고구려, 백제, 신라 이야기가 여기저기 흩어져 사라지고 있소." 그리고 학자 김부식에게 부탁했어요.`},
 {svg:SV(`${room()}
  ${[0,1,2,3,4,5].map(k=>`<g transform="translate(${50+k*60} ${150+(k%2)*10}) rotate(${k*7-18})"><rect x="-20" y="-14" width="40" height="28" fill="#F4E9CC" ${sw(1.2)}/><path d="M-12 -6 h24 M-12 2 h20" stroke="#8A8580" stroke-width="1.4"/></g>`).join('')}
  ${bs(200,272,.9,{mood:'o',arms:'armsOpen'})}`,'#EADCC0'),
  text:`김부식은 오래된 기록과 중국 책에 적힌 우리 이야기를 모았어요. 흩어진 종이를 한 장 한 장 모으는 일이었어요.`},
 {svg:SV(`${room()}
  ${scholar(90,262,.82,'#7A8C6E',{stance:'sit',arms:'writeR',prop:H=>PROP.brush(H),mood:'smile',face:'right'})}${desk(150,240,70)}
  <g id="tTeam">${bs(230,262,.86,{stance:'sit',arms:'pointR',mood:'o',face:'right'})}${scholar(330,262,.82,'#B9A475',{stance:'sit',arms:'holdFront',prop:H=>`<g transform="translate(${(H.L[0]+H.R[0])/2} ${H.L[1]+30})">${openBook}</g>`,mood:'smile',face:'left'})}</g>`,'#EADCC0'),
  taps:[{label:'함께',el:'tTeam',say:'김부식 혼자가 아니라 열 명 남짓한 학자가 함께 썼어요.'},{label:'쓱쓱',el:'tTeam',say:'읽고, 맞는지 따져 보고, 쓱쓱 옮겨 적어요.'}],tapHint:'학자들을 눌러 볼까요?',
  text:`김부식은 혼자 쓰지 않았어요. 여러 학자와 함께 읽고, 맞는지 따져 보고, 다시 옮겨 적었어요.`},
 {chips:['1145년'], svg:SV(`${room()}
  ${stack(120,262,10)}${stack(180,262,10)}${stack(240,262,10)}${stack(300,262,10,['#5E7FA8','#C9473B'])}
  ${bs(200,282,.6,{mood:'joy',arms:'cheer'})}
  ${T(200,70,'모두 쉰 권!',24,K.red)}`,'#EADCC0'),
  text:`그렇게 완성된 책이 『삼국사기』예요. 무려 쉰 권이나 되었어요. 세 나라의 임금님 이야기, 이름난 사람들 이야기가 차곡차곡 담겼어요.`},
 {svg:SV(`${room()}
  <g transform="translate(200 230) scale(1.6)">${openBook}</g>
  ${[[70,'을지문덕'],[330,'김유신']].map(([x,t],k)=>`<rect x="${x-46}" y="80" width="92" height="40" rx="8" fill="#FFFDF6" ${sw()}/>${T(x,106,t,15,K.ink)}`).join('')}
  ${kid(80,282,.7,{mood:'o',arms:'pointR',face:'right'})}${oldKid(320,282,.7,{mood:'joy',arms:'pointL',face:'left'})}`,'#EFE3C8'),
  text:`우리가 읽은 을지문덕, 김유신, 온조 이야기도 『삼국사기』에 적혀 있어요. 이 책이 없었다면 많은 이야기가 사라졌을 거예요.`},
 {svg:SV(`<rect x="-6" y="-6" width="412" height="292" fill="#F2EEE4"/><path d="M-6 230 H406 V290 H-6Z" fill="#C9B48A"/>
  <rect x="120" y="80" width="160" height="130" fill="#E6F2F6" ${sw()}/>${stack(200,200,6)}
  ${kid(80,282,.8,{mood:'o',arms:'pointR',face:'right'})}${hero(320,282,.8,{body:'dress',hair:'bun',top:'#F2C14E',skirt:'#5B7FB8',mood:'smile',face:'left'})}
  ${T(200,40,'지금 남은 가장 오래된 역사책',16,K.red)}`,'#F2EEE4'),
  text:`『삼국사기』는 지금 남아 있는 우리 역사책 가운데 가장 오래되었어요. 백몇십 년 뒤에는 일연 스님이 『삼국유사』를 써서 또 다른 옛이야기를 모았어요.`},
 {svg:SV(`${room()}
  ${kid(130,262,.9,{stance:'sit',arms:'holdFront',prop:H=>`<g transform="translate(${(H.L[0]+H.R[0])/2} ${H.L[1]+30})">${openBook}</g>`,mood:'smile',face:'right'})}
  ${hero(300,262,.86,{body:'dress',hair:'braid',top:'#E98FA0',skirt:'#5B7FB8',stance:'sit',arms:'pointL',mood:'joy',face:'left'})}`,'#EFE3C8'),
  text:`우리 집에도 기억하고 싶은 이야기가 있지요? 사진과 그림을 모아 우리 가족 역사책을 만들어 볼까요?`},
 {kind:'end', svg:endBase('bs',`${stack(200,220,9)}`,kid(64,276,.5,{arms:'cheer',mood:'joy'}),bs(338,276,.55,{arms:'waveR',mood:'joy'})),
  text:`흩어진 이야기를 모은 학자가 남긴 선물,<br>쉰 권의 역사책.<br>오늘도 우리 곁에 있어요.<br><span class="big">끝</span>`},
 {kind:'talk'}
];
BOOKS.push({id:'kimbusik',era:'goryeo',title:'김부식과 삼국사기',who:'김부식',teaser:'흩어져 사라지던 세 나라 이야기를 쉰 권의 책으로 모은 학자가 있어요.',pages:P,
 talk:{three:['책이 모두 몇 권이었지?','책을 차곡차곡 쌓아 볼까?','우리가 읽은 책 속 사람 이름 하나 말해 볼까?'],
  five:['이야기를 책으로 남기지 않으면 어떻게 될까?','여럿이 함께 쓰면 무엇이 좋을까?','우리 가족 역사책에는 어떤 이야기를 넣을까?'],
  note:'김부식(1075~1151)은 고려의 문신으로, 인종의 명을 받아 편찬 책임을 맡아 1145년 『삼국사기』 50권을 완성했습니다. 편찬에는 김부식 외에 10여 명의 관리가 참여했습니다. 『삼국사기』는 현존하는 우리나라 가장 오래된 역사서이며, 신라 중심의 서술이라는 평가도 함께 받습니다. 『삼국유사』는 1281년 무렵 일연이 지었습니다.'}});
})();
