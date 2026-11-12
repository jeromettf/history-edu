/* 11권 일연: 옛이야기를 모은 스님 */
(()=>{
setScene('goryeo','autumn');
const kasa=`<path d="M-26 -64 L32 -6 L42 -12 L-14 -68Z" fill="#B5473A" ${sw(1.6)}/>`;
const ilKid=(x,y,s,o={})=>hero(x,y,s,{hair:'bald',robe:'#C9C2B4',belt:false,collar:'#EDE9E0',...o});
const il=(x,y,s,o={})=>hero(x,y,s,{hair:'bald',robe:'#8E8A80',belt:false,collar:'#EDE9E0',deco:kasa,beard:'#E6E1D6',...o});
const granny=(x,y,s,o={})=>hero(x,y,s,{body:'dress',hair:'bun',hairColor:'#C9C4BC',top:'#FFFDF6',skirt:'#8C7A6A',...o});
const yusa=`<rect x="-30" y="-56" width="60" height="44" rx="2" fill="#7A5A3A" ${sw()}/><rect x="-20" y="-50" width="40" height="22" fill="#F6EBCB" ${sw(1.2)}/><text x="0" y="-35" text-anchor="middle" font-family="Jua,sans-serif" font-size="9" fill="${L}">삼국유사</text><path d="M-30 -20 H30" stroke="#5A3B2C" stroke-width="1.4"/>`;
const pagoda=(x,y,s,fire)=>g(x,y,s,`${[0,1,2,3,4,5,6,7,8].map(k=>`<rect x="${-34+k*3}" y="${-18-k*18}" width="${68-k*6}" height="12" fill="#B5874F" ${sw(1.4)}/><path d="M${-42+k*3} ${-18-k*18} L${42-k*3} ${-18-k*18}" ${sw(3)}/>`).join('')}<path d="M0 -180 V-196" ${sw(2.4)}/>${fire?[-20,0,20].map((dx,k)=>`<path d="M${dx} ${-60-k*40} q12 -20 0 -40 q-12 20 0 40Z" fill="#F29A2E" ${sw(1.2)}/>`).join(''):''}`);
const mongol=(x,y,s,o={})=>hero(x,y,s,{robe:'#5A6E8A',hat:'helmet',body:'armor',beard:'#3B2618',...o});
const P=[
 {kind:'cover', svg:coverBase('ir','옛이야기 보물 상자',`${egg(64,250,.6)}${bear(340,262,.42,{mood:'joy'})}`,il(200,264,1.0,{pose:'hold',mood:'joy',item:yusa})),
  text:`<span class="big">일연과 옛이야기 책</span><br>위인 그림책 {no}권`},
 {svg:SV(`${room()}
  ${ilKid(140,268,.9,{pose:'hold',mood:'joy',item:bigBook('옛이야기','#8A6A44')})}
  ${hero(280,268,.84,{hair:'bald',robe:'#A7A49B',belt:false,collar:'#EDE9E0',deco:kasa,beard:'#D9D3C8',mood:'smile'})}`,'#EADCC0'),
  text:`강감찬이 나라를 지키고 이백 년쯤 지난 고려예요. 일연이라는 아이는 아홉 살에 절에 들어가 공부를 시작했어요. 옛이야기 듣는 걸 좋아했어요.`},
 {svg:SV(`<path d="M-6 170 Q100 140 200 156 Q300 136 406 166 L406 286 L-6 286Z" fill="#B8C4C0" ${sw()}/>
  ${[60,140,220,300,370].map((x,k)=>mongol(x,240-(k%2)*14,.46,{mood:'sad'})).join('')}
  <path d="M-6 236 Q200 226 406 236 L406 286 L-6 286Z" fill="#C7D88F" ${sw()}/>
  ${hero(150,280,.66,{robe:'#EFE6D2',skin:'#EDBF95',mood:'sad'})}${hero(250,280,.62,{body:'dress',hair:'bun',mood:'sad',tear:true})}`,'url(#ir2)',sky('ir2','#B9C2CC','#DCDCD4')),
  text:`그런데 그 무렵 몽골군이 쳐들어와서 오랫동안 물러가지 않았어요. 백성들은 지치고 배고팠어요.`},
 {chips:['1238년'], svg:SV(`<path d="M-6 220 Q200 208 406 220 L406 286 L-6 286Z" fill="#8A8478" ${sw()}/>
  ${pagoda(200,226,1.0,true)}
  ${il(330,272,.78,{mood:'sad',tear:true})}`,'url(#ir3)',sky('ir3','#A9A0A0','#D9C9B4')),
  text:`선덕여왕 때 세운 커다란 황룡사 구층탑도 불에 타 버렸어요. 일연은 너무 슬펐어요. "우리 옛이야기까지 사라지면 어떡하지?"`},
 {svg:SV(`${cloud(300,40,.7)}${hills('#A9CDB4','#C7D88F',196,220)}
  <path d="M60 286 Q140 240 240 222 Q330 208 406 200 L406 216 Q330 226 260 238 Q170 256 130 286Z" fill="#E6D3A6" ${sw()}/>
  ${il(150,262,.9,{pose:'hold',mood:'joy',item:bundle})}
  ${T(260,110,'옛이야기를 모으자!',20,K.red)}`,'url(#ir4)',sky('ir4','#CFE7F2','#F6EAD0')),
  text:`일연은 결심했어요. "옛이야기를 모아서 책으로 남기자!" 그리고 오래된 책을 찾아 읽고, 여러 곳을 다니며 이야기를 들었어요.`},
 {svg:SV(`${room()}
  <g id="tGranny">${granny(120,268,.9,{pose:'up',mood:'joy'})}</g>
  <g id="tIl">${il(290,262,.9,{stance:'sit',face:'left',mood:'o',arms:'writeR',prop:H=>PROP.brush(H)+`<g transform="translate(${H.R[0]-30} ${H.R[1]+48}) scale(.9)">${openBook}</g>`})}</g>`,'#EADCC0'),
  taps:[{label:'할머니',el:'tGranny',say:'옛날 옛날에 곰 한 마리가 사람이 되고 싶어서…'},{label:'일연',el:'tIl',say:'잊지 않게 꼭꼭 적어 둘게요!'}],tapHint:'할머니 이야기를 들어 볼까요?',
  text:`마을 할머니 할아버지들이 들려주는 이야기도 하나하나 귀 기울여 듣고 꼼꼼히 적었어요. "그래서 어떻게 되었나요?"`},
 {chips:['1281년 무렵'], svg:SV(`<circle cx="200" cy="150" r="150" fill="url(#irg6)"/>
  <path d="M-6 230 Q200 220 406 230 L406 286 L-6 286Z" fill="#DDB16A" ${sw()}/>
  ${g(200,220,2.4,yusa)}
  ${il(70,272,.7,{pose:'up',mood:'joy'})}
  ${star(330,70,10)}${star(300,140,7,'#F28C7C')}`,'url(#ir6)',sky('ir6','#FCE9C2','#F6D9A2')+glow('irg6','#FFF6D8',.9)),
  text:`마침내 일연은 할아버지가 되어 책을 완성했어요. 이름은 『삼국유사』예요. 고조선부터 고구려, 백제, 신라까지 옛이야기가 가득 담겼어요.`},
 {svg:SV(`<rect x="-6" y="-6" width="412" height="292" fill="#EFE3C8"/>
  <rect x="40" y="30" width="320" height="190" rx="4" fill="#FBF4E2" ${sw()}/><path d="M200 30 V220" ${sw(1.6)}/>
  <g id="tBear">${bear(110,200,.66,{mood:'joy'})}</g>
  <g id="tEgg">${egg(200,190,.8)}</g>
  <g id="tPeony">${peony(290,120,1.6)}</g>
  <rect x="-6" y="226" width="412" height="60" fill="#DDB16A"/>`,'#EFE3C8'),
  taps:[{label:'곰',el:'tBear',say:'단군 이야기예요! 꾹 참은 곰이 사람이 되었어요.'},{label:'알',el:'tEgg',say:'주몽 이야기예요! 알에서 아이가 나왔어요.'},{label:'모란꽃',el:'tPeony',say:'선덕여왕 이야기예요! 향기 없는 꽃이었어요.'}],tapHint:'아는 이야기가 있는지 찾아볼까요?',
  text:`책 속에는 지금도 사랑받는 이야기가 가득해요. 곰이 사람이 된 단군 이야기, 알에서 태어난 주몽, 향기 없는 모란꽃을 알아챈 선덕여왕까지요!`},
 {svg:SV(`<rect x="34" y="34" width="104" height="86" rx="4" fill="#BFE0F0" stroke="#FFFFFF" stroke-width="7"/>${cloud(80,70,.6)}
  <rect x="-6" y="216" width="412" height="70" fill="#E9CFA4"/><ellipse cx="190" cy="260" rx="124" ry="18" fill="#F2B3A6" ${sw()}/>
  ${kid(160,266,1.0,{pose:'hold',mood:'joy',item:bigBook('그림책','#5E9C8A')})}${hero(260,266,.86,{body:'dress',hair:'bun',top:'#F2C14E',skirt:'#5B7FB8',mood:'smile'})}`,'url(#ir8)',sky('ir8','#E8F2F8','#DCEAF2')),
  text:`일연 스님이 이야기를 모아 두지 않았다면, 우리는 단군 이야기를 몰랐을지도 몰라요. 오늘 밤 엄마 아빠에게 옛이야기 하나 들려 달라고 해 볼까요?`},
 {kind:'end', svg:endBase('ir',`${g(200,210,2.6,yusa)}`,ilKid(64,276,.5,{pose:'up',mood:'joy'}),il(338,276,.55,{pose:'up',mood:'joy'})),
  text:`옛이야기를 좋아한 스님이 남긴 선물,<br>잊히지 않은 우리 이야기.<br>오늘도 우리 곁에 있어요.<br><span class="big">끝</span>`},
 {kind:'talk'}
];
BOOKS.push({id:'iryeon',era:'goryeo',title:'일연과 옛이야기 책',who:'일연',teaser:'곰이 사람이 된 단군 이야기와 알에서 태어난 주몽 이야기를 책에 모아 둔 스님이 있었대요!',pages:P,
 talk:{three:['책 속에서 곰을 찾아볼까?','할머니처럼 "옛날 옛날에…" 해 볼까?','이 책에 나온 알은 누구 이야기였지?'],
  five:['일연은 왜 옛이야기를 모았을까?','이야기가 사라지면 어떻게 될까?','우리 가족 이야기 중에 꼭 남기고 싶은 건 뭐야?'],
  note:'일연(1206~1289)은 고려의 스님으로, 아홉 살에 절에 들어갔습니다. 몽골의 오랜 침략으로 1238년 황룡사 구층탑이 불탔습니다. 일연이 1281년 무렵 펴낸 『삼국유사』에는 단군 신화가 처음으로 기록되어 있고, 주몽, 선덕여왕, 원효, 김유신의 이야기와 향가 14수도 실려 있습니다. 2022년 국보로 지정되었습니다.'}});
})();
