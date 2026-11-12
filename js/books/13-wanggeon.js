/* 왕건: 다투던 세 나라를 하나로 품은 왕 */
(()=>{
setScene('goryeo','spring');
const wgKid=(x,y,s,o={})=>hero(x,y,s,{robe:'#E7C76A',hair:'braid',belt:'#B8862F',ribbon:'#B8862F',...o});
const wg=(x,y,s,o={})=>hero(x,y,s,{body:'armor',robe:'#B8862F',hat:'helmet',...o});
const wgK=(x,y,s,o={})=>king(x,y,s,{robe:'#B8862F',beard:HAIR,...o});
const silla=(x,y,s,o={})=>king(x,y,s,{robe:'#5E9C8A',...o});
const flag=(x,y,c,t,h=80)=>`<path d="M${x} ${y} V${y-h}" ${sw(3)}/><rect x="${x}" y="${y-h}" width="54" height="34" fill="${c}" ${sw(1.6)}/>${T(x+27,y-h+23,t,14,'#FBF4E2')}`;
const shipW=(x,y,s)=>g(x,y,s,`<path d="M-80 -6 Q-70 22 0 24 Q70 22 90 -6Z" fill="#8A5A3C" ${sw(3)}/><path d="M0 -6 V-110" ${sw(5)}/><path d="M-44 -104 L44 -104 L38 -30 L-38 -30Z" fill="#F4E7C6" ${sw(3)}/><path d="M0 -110 L22 -118 L0 -126Z" fill="#B8862F" ${sw(1.4)}/>`);
const P=[
 {kind:'cover', svg:coverBase('wg','하나로 품은 나라',`${flag(40,250,'#B8862F','고려',70)}`,wgK(220,264,1.0,{pose:'up',mood:'joy'})),
  text:`<span class="big">왕건과 고려의 시작</span><br>위인 그림책 {no}권`},
 {svg:SV(`${sea(170)}
  <path d="M-6 170 Q100 150 200 166 L200 290 L-6 290Z" fill="#E6D3A6" ${sw()}/>
  ${shipW(300,200,.5)}${wgKid(110,262,.86,{pose:'up',mood:'joy'})}`,'url(#wg1)',sky('wg1','#CFE7F2','#F6EAD0')),
  text:`먼 옛날, 신라라는 나라가 점점 힘을 잃어 가던 때예요. 그 무렵 바닷가 마을 송악에 왕건이라는 아이가 살았어요. 왕건네 집은 배를 타고 장사를 했어요.`},
 {svg:SV(`<path d="M-6 200 Q100 150 200 170 Q300 150 406 200 L406 286 L-6 286Z" fill="#B8C4C0" ${sw()}/>
  ${flag(40,200,'#5E9C8A','신라')}${flag(170,180,'#C9A15A','후백제')}${flag(300,200,'#7A6AA8','후고구려')}
  <path d="M-6 236 Q200 226 406 236 L406 286 L-6 286Z" fill="#C7D88F" ${sw()}/>
  ${hero(120,272,.7,{robe:'#EFE6D2',skin:'#EDBF95',mood:'sad'})}${hero(220,272,.66,{body:'dress',hair:'bun',mood:'sad'})}${oldKid(300,274,.58,{mood:'sad'})}`,'url(#wg2)',sky('wg2','#C9D2D8','#E6E2D4')),
  text:`그때 우리 땅은 다시 세 나라로 나뉘어 다투었어요. 후고구려, 후백제, 그리고 힘이 약해진 신라였지요. 백성들은 지치고 힘들었어요.`},
 {svg:SV(`${sea(150)}
  ${shipW(120,196,.6)}${shipW(270,186,.5)}
  ${wg(120,150,.5,{pose:'up',mood:'joy'})}${T(240,70,'바다로 나가자!',22,K.red)}`,'url(#wg3)',sky('wg3','#CFE7F2','#F6EAD0')),
  text:`어른이 된 왕건은 장군이 되었어요. 배를 잘 아는 왕건은 배를 이끌고 바다로 나가 남쪽 나주 땅을 얻었어요. 바다를 잘 다룬 덕분이었어요.`},
 {chips:['918년'], svg:SV(`${palace()}
  ${wgK(200,272,.96,{pose:'up',mood:'joy'})}${hero(84,272,.66,{robe:'#5E7FA8',hat:'gat',mood:'joy'})}${hero(316,272,.66,{robe:'#7A8C6E',hat:'gat',mood:'joy'})}`,'#EAD8B4'),
  text:`사람들은 마음씨 넓은 왕건을 왕으로 모셨어요. 왕건은 나라 이름을 고려라고 지었어요. "우리는 고구려를 이은 나라다"라는 뜻이에요.`},
 {svg:SV(`${palace()}
  <g id="tSilla">${silla(120,272,.86,{mood:'sad'})}</g>
  <g id="tWg">${wgK(280,272,.9,{mood:'smile',pose:'up'})}</g>`,'#EAD8B4'),
  taps:[{label:'신라 임금',el:'tSilla',say:'고려와 하나가 되겠습니다.'},{label:'왕건',el:'tWg',say:'잘 오셨습니다. 귀한 손님으로 모시겠소.'}],tapHint:'두 임금의 이야기를 들어 볼까요?',
  text:`신라의 마지막 임금이 스스로 찾아와 "고려와 하나가 되겠습니다" 했어요. 왕건은 신라 임금을 귀한 손님처럼 모시고, 신라 사람들도 따뜻하게 맞아 주었어요.`},
 {chips:['936년'], svg:SV(`${cloud(80,44,.8)}${hills('#A9CDB4','#C7D88F',196,224)}
  <path d="M200 200 V70" ${sw(3)}/><rect x="200" y="70" width="90" height="56" fill="#B8862F" ${sw()}/>${T(245,106,'고려',24,'#FBF4E2')}
  ${hero(80,272,.62,{robe:'#5E9C8A',mood:'joy',pose:'up'})}${hero(150,276,.58,{body:'dress',hair:'bun',mood:'joy'})}${hero(262,276,.58,{robe:'#C9A15A',mood:'joy',pose:'up'})}${hero(332,272,.62,{robe:'#7A6AA8',mood:'joy',pose:'up'})}`,'url(#wg6)',sky('wg6','#CFE7F2','#F6EAD0')),
  text:`마침내 후백제까지 하나로 모아, 다시 하나의 나라가 되었어요. 왕건은 서로 다투던 사람들 모두를 고려 사람으로 품었어요.`},
 {svg:SV(`${room()}
  ${kid(140,266,1.0,{pose:'up',mood:'joy'})}${hero(280,266,.92,{body:'dress',hair:'braid',top:'#E98FA0',skirt:'#5B7FB8',mood:'joy'})}
  <rect x="160" y="60" width="90" height="40" rx="4" fill="#FFFDF6" ${sw()}/>${T(205,88,'KOREA',18,'#3F6FA8')}`,'#EFE3C8'),
  text:`세계 사람들은 우리나라를 '코리아'라고 불러요. 이 이름이 왕건이 지은 '고려'에서 왔어요. 아라비아 상인들이 고려를 오가며 널리 알렸대요.`},
 {kind:'end', svg:endBase('wg',`${flag(170,210,'#B8862F','고려',120)}`,wgKid(64,276,.5,{pose:'up',mood:'joy'}),wgK(338,276,.55,{pose:'up',mood:'joy'})),
  text:`바다를 잘 알던 아이가 남긴 선물,<br>코리아라는 이름.<br>오늘도 우리 곁에 있어요.<br><span class="big">끝</span>`},
 {kind:'talk'}
];
BOOKS.push({id:'wanggeon',era:'goryeo',title:'왕건과 고려의 시작',who:'왕건',teaser:'세계 사람들이 우리나라를 "코리아"라고 부르게 된 이야기가 여기서 시작돼요.',pages:P,
 talk:{three:['왕건네 집은 무엇을 타고 장사를 했지?','깃발 흔드는 흉내, 펄럭펄럭!','"코리아" 하고 크게 말해 볼까?'],
  five:['왕건은 왜 신라 임금을 귀한 손님처럼 모셨을까?','다투던 친구들이 다시 친해지려면 어떻게 해야 할까?','코리아라는 이름은 어디서 왔을까?'],
  note:'왕건(877~943)은 송악(지금의 개성)의 해상 세력 집안에서 태어났습니다. 궁예 밑에서 수군을 이끌고 나주를 차지하는 등 공을 세웠고, 918년 궁예를 몰아낸 신하들의 추대로 왕위에 올라 고려를 세웠습니다. 935년 신라 경순왕이 스스로 고려에 들어오자 정중히 대우했고, 936년 후백제를 무너뜨려 후삼국을 통일했습니다. 영어 이름 Korea는 고려에서 비롯했다고 봅니다. 통일 과정의 전투는 이야기에서 줄였습니다.'}});
})();
