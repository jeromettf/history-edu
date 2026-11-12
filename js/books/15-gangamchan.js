/* 10권 강감찬: 별이 떨어진 날 태어난 아이 */
(()=>{
setScene('goryeo','winter');
const LEG=['전해 오는 이야기'];
const gcKid=(x,y,s,o={})=>hero(x,y,s,{robe:'#C9D8E8',hair:'braid',belt:'#3F6FA8',ribbon:'#3F6FA8',...o});
const gc=(x,y,s,o={})=>hero(x,y,s,{body:'armor',robe:'#3F6FA8',hat:'helmet',beard:'#E6E1D6',...o});
const gcScholar=(x,y,s,o={})=>hero(x,y,s,{robe:'#5E7FA8',hat:'gat',belt:K.gold,beard:'#8A8580',...o});
const khitan=(x,y,s,o={})=>hero(x,y,s,{robe:'#8A5A3C',hat:'helmet',body:'armor',beard:'#3B2618',...o});
const goldFlower=`<g transform="translate(0 -128)">${[0,45,90,135,180,225,270,315].map(a=>`<ellipse cx="${8*Math.cos(a*Math.PI/180)}" cy="${8*Math.sin(a*Math.PI/180)}" rx="6" ry="4" fill="${K.gold}" ${sw(1)} transform="rotate(${a} ${8*Math.cos(a*Math.PI/180)} ${8*Math.sin(a*Math.PI/180)})"/>`).join('')}<circle r="4" fill="#F6E2A6"/></g>`;
const hide=(x,y)=>`<g id="tDam">${[0,1,2,3,4,5].map(k=>`<rect x="${x+k*26}" y="${y}" width="24" height="34" rx="4" fill="#A9714A" ${sw(1.6)}/><path d="M${x+k*26+4} ${y+8} h16 M${x+k*26+4} ${y+18} h16" stroke="#7A4E33" stroke-width="1.4"/>`).join('')}</g>`;
const P=[
 {kind:'cover', svg:coverBase('gc','별이 떨어진 날',`${star(60,200,20,'#FFE38A')}<path d="M70 190 L110 150" stroke="#FFE38A" stroke-width="4" stroke-linecap="round"/>`,gc(210,264,1.0,{pose:'up',mood:'joy'})),
  text:`<span class="big">강감찬과 별이 떨어진 날</span><br>위인 그림책 {no}권`},
 {chips:LEG, svg:SV(`${[30,90,150,260,320,370].map((x,k)=>star(x,30+(k%3)*24,4,'#F6F0D6')).join('')}
  ${star(250,110,22,'#FFE38A')}<path d="M262 98 L340 30" stroke="#FFE38A" stroke-width="6" stroke-linecap="round"/>
  <path d="M-6 214 Q200 204 406 214 L406 286 L-6 286Z" fill="#4E5A4A" ${sw()}/>
  <rect x="140" y="150" width="120" height="64" fill="#E8DCC4" ${sw()}/><path d="M124 156 Q200 108 276 156Z" fill="#4A4A55" ${sw()}/>
  ${hero(80,272,.7,{robe:'#EFE6D2',mood:'o',pose:'up'})}`,'url(#gc1)',sky('gc1','#1F2748','#46406A')),
  text:`서희가 살던 고려의 어느 밤, 커다란 별 하나가 반짝이며 어느 집으로 떨어졌대요. 그날 그 집에서 아기가 태어났어요. 이름은 감찬이었어요.`},
 {svg:SV(`${cloud(300,40,.7)}${hills('#A9CDB4','#C7D88F',196,220)}
  ${gcKid(130,268,.82,{pose:'hold',mood:'smile',item:bigBook('책','#3F6FA8')})}
  ${hero(250,268,.96,{robe:'#E9DFC8',hair:'braid',mood:'o'})}${hero(320,268,.96,{robe:'#D6CDB4',hair:'braid',mood:'o'})}
  ${T(130,100,'작아도 괜찮아!',18,K.red)}`,'url(#gc2)',sky('gc2','#CFE7F2','#F6EAD0')),
  text:`감찬이는 친구들보다 키가 작았어요. 하지만 책을 많이 읽고 생각이 깊어서, 어려운 문제도 척척 풀어냈대요.`},
 {chips:['1018년'], svg:SV(`<path d="M-6 170 Q100 140 200 156 Q300 136 406 166 L406 286 L-6 286Z" fill="#C8C2A8" ${sw()}/>
  ${[60,140,220,300,370].map((x,k)=>khitan(x,250-(k%2)*16,.5,{mood:'sad'})).join('')}
  ${T(200,60,'거란이 또 쳐들어왔어요!',22,K.red,`stroke="#FFF8EC" stroke-width="5" paint-order="stroke"`)}`,'url(#gc3)',sky('gc3','#B9C2CC','#DCDCD4')),
  text:`서희 덕분에 물러갔던 거란이 몇십 년 뒤 다시 쳐들어왔어요. 이번엔 군사가 아주 많았어요. 임금님은 강감찬을 장군으로 세웠어요.`},
 {svg:SV(`${palace()}
  ${king(120,272,.84,{robe:'#B8862F',mood:'sad'})}${gc(280,272,.9,{pose:'up',mood:'smile'})}
  ${T(280,70,'제가 지키겠습니다!',18,K.red)}`,'#E8D3B0'),
  text:`그때 강감찬은 일흔 살 할아버지였어요. 그래도 망설이지 않았어요. "걱정 마십시오. 제가 나라를 지키겠습니다!"`},
 {svg:SV(`${cloud(80,40,.7)}<path d="M-6 150 Q200 130 406 150 L406 286 L-6 286Z" fill="#A9CDB4" ${sw()}/>
  <path d="M-6 200 Q200 180 406 200 L406 250 Q200 236 -6 250Z" fill="#6FA8C8" ${sw()}/>
  ${hide(122,186)}
  ${gc(70,272,.78,{pose:'up',mood:'smile'})}${hero(330,272,.7,{body:'armor',robe:'#5E7FA8',hat:'helmet',mood:'joy'})}`,'url(#gc5)',sky('gc5','#CFE7F2','#F6EAD0')),
  taps:[{label:'소가죽 둑',el:'tDam',say:'소가죽을 엮어서 강물을 꽉 막았어요.'}],tapHint:'강을 막은 것을 눌러 보세요.',
  text:`강감찬은 꾀를 냈어요. 소가죽을 엮어서 강물을 꽉 막아 두었지요. 거란 군사들이 물이 줄어든 강을 건너기 시작했어요.`},
 {svg:SV(`${cloud(300,40,.7)}<path d="M-6 150 Q200 130 406 150 L406 286 L-6 286Z" fill="#A9CDB4" ${sw()}/>
  <path d="M-6 180 Q200 160 406 180 L406 270 Q200 256 -6 270Z" fill="#5B9BC2" ${sw()}/>
  ${[30,90,150,210,270,330,390].map((x,k)=>`<path d="M${x-20} ${200+(k%2)*24} q10 -14 20 0 q10 14 20 0" fill="none" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round"/>`).join('')}
  ${T(200,80,'콸콸콸!',30,K.red,`stroke="#FFF8EC" stroke-width="5" paint-order="stroke"`)}
  ${khitan(330,150,.46,{mood:'o'})}${khitan(370,150,.44,{mood:'o'})}`,'url(#gc6)',sky('gc6','#CFE7F2','#F6EAD0')),
  text:`그때 막아 둔 둑을 탁 터뜨렸어요. 강물이 콸콸 쏟아지자 거란 군사들은 깜짝 놀라 허둥지둥했어요.`},
 {chips:['1019년'], svg:SV(`<circle cx="340" cy="46" r="22" fill="${K.gold}" ${sw()}/>${hills('#A9CDB4','#C7D88F',196,220)}
  ${gc(200,268,.92,{pose:'up',mood:'joy'})}
  ${hero(80,272,.62,{body:'armor',robe:'#5E7FA8',hat:'helmet',mood:'joy',pose:'up'})}${hero(320,272,.62,{body:'armor',robe:'#5E7FA8',hat:'helmet',mood:'joy',pose:'up'})}
  ${T(200,80,'이겼다!',26,K.red)}`,'url(#gc7)',sky('gc7','#CFE7F2','#F6EAD0')),
  text:`마침내 귀주라는 곳에서 고려 군사들이 크게 이겼어요. 이 싸움을 귀주 대첩이라고 해요. 거란은 다시는 함부로 쳐들어오지 못했어요.`},
 {svg:SV(`${palace()}
  ${king(120,272,.84,{robe:'#B8862F',mood:'joy'})}
  <g id="tFlower">${gcScholar(280,272,.9,{mood:'joy',front:''})}</g>
  ${g(280,272,.9,goldFlower)}`,'#E8D3B0'),
  taps:[{label:'금꽃',el:'tFlower',say:'임금님이 강감찬의 머리에 금으로 만든 꽃을 꽂아 주었어요.'}],
  text:`임금님은 직접 마중 나와 강감찬의 머리에 금으로 만든 꽃을 꽂아 주었어요. "고맙소, 나라를 지켜 주었구려!"`},
 {svg:SV(`${cloud(80,40,.7)}${hills('#A9CDB4','#C7D88F',196,220)}
  <rect x="230" y="150" width="60" height="70" fill="#C9B48A" ${sw()}/><path d="M220 156 Q260 126 300 156Z" fill="#4A4A55" ${sw()}/>${star(260,100,14,'#FFE38A')}
  ${kid(120,268,.96,{pose:'up',mood:'joy'})}${hero(340,270,.7,{body:'dress',hair:'bun',top:'#F2C14E',skirt:'#5B7FB8',mood:'smile'})}`,'url(#gc8)',sky('gc8','#E8F2F8','#F2EED8')),
  text:`서울에는 '낙성대'라는 곳이 있어요. '별이 떨어진 곳'이라는 뜻이에요. 강감찬이 태어난 곳이라고 전해져서 지금도 그 이름으로 불러요.`},
 {kind:'end', svg:endBase('gc',`${star(200,120,60,'#FFE38A')}<path d="M240 80 L330 10" stroke="#FFE38A" stroke-width="8" stroke-linecap="round"/>`,gcKid(64,276,.5,{pose:'up',mood:'joy'}),gc(338,276,.55,{pose:'up',mood:'joy'})),
  text:`작지만 생각이 깊었던 아이가 남긴 선물,<br>지혜로 지킨 나라.<br>오늘도 우리 곁에 있어요.<br><span class="big">끝</span>`},
 {kind:'talk'}
];
BOOKS.push({id:'gangamchan',era:'goryeo',title:'강감찬과 별이 떨어진 날',who:'강감찬',teaser:'큰 별이 떨어진 날 태어난 아이가 일흔 살 할아버지 장군이 되어 나라를 지켰어요.',pages:P,
 talk:{three:['감찬이가 태어난 날 하늘에서 뭐가 떨어졌지?','강물 소리 흉내, 콸콸!','임금님이 꽂아 준 꽃은 무슨 색이었지?'],
  five:['강감찬은 왜 강을 막아 두었을까?','키가 작아도 잘할 수 있는 건 뭐가 있을까?','일흔 살 할아버지 장군은 어떤 마음이었을까?'],
  note:'강감찬(948~1031)은 고려의 문신으로, 1018년 거란 소배압이 10만 군사로 쳐들어오자 상원수가 되었습니다. 『고려사』에는 흥화진에서 소가죽을 꿰어 냇물을 막았다가 터뜨린 일과, 1019년 귀주에서 크게 이긴 일이 적혀 있습니다. 현종이 직접 나와 금꽃 여덟 가지를 꽂아 주었다는 기록도 있습니다. 별이 떨어진 날 태어났다는 이야기는 전설이며, 서울 관악구 낙성대 이름이 여기서 왔습니다.'}});
})();
