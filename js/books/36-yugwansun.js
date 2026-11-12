/* 10권 유관순: 용기를 낸 소녀 */
(()=>{
setScene('modern','spring');
const gwansun=(x,y,s,o={})=>hero(x,y,s,{body:'dress',top:'#FFFFFF',skirt:'#2E3440',hair:'braid',ribbon:'#C9473B',...o});
const flagItem=`<g transform="translate(34 -60) scale(.5)">${taeguk(0,0,1,0)}</g>`;
const crowd=(y,s,list)=>list.map(([x,o])=>hero(x,y,s,{pose:'up',mood:'joy',...o})).join('');
const P=[
 {kind:'cover', svg:coverBase('u','대한 독립 만세',`${taeguk(70,230,.7)}${taeguk(340,226,.7)}`,gwansun(200,264,1.0,{pose:'up',mood:'joy'})),
  text:`<span class="big">유관순과 용기의 태극기</span><br>위인 그림책 {no}권`},
 {svg:SV(`${cloud(80,40,.7)}${hills('#A9CDB4','#C7D88F',196,220)}
  <rect x="230" y="110" width="150" height="100" fill="#E8DCC4" ${sw()}/><path d="M220 116 L305 76 L390 116Z" fill="#8E5A48" ${sw()}/>${[250,290,330].map(x=>`<rect x="${x}" y="130" width="26" height="30" fill="#BFE0F0" ${sw(1.4)}/>`).join('')}
  ${gwansun(140,268,.95,{pose:'hold',mood:'joy',item:bigBook('공부','#5E9C8A')})}`,'url(#u1)',sky('u1','#CFE7F2','#F6EAD0')),
  text:`안창호 선생님이 나라를 되찾자고 외치던 무렵이에요. 천안의 한 마을에 관순이라는 씩씩한 소녀가 살았어요. 관순이는 공부하기를 좋아해서 서울에 있는 학교에 다녔어요.`},
 {svg:SV(`${hills('#9DAEA8','#A9B48F',196,220)}
  ${hut(30,176)}
  ${hero(160,268,.86,{robe:'#EFE6D2',skin:'#EDBF95',mood:'sad'})}${hero(240,268,.8,{body:'dress',hair:'bun',mood:'sad',tear:true})}${kid(316,270,.66,{mood:'sad'})}`,'url(#u2)',sky('u2','#A9B2BC','#CFCFC6')),
  text:`그 무렵 우리나라는 이웃 나라 일본에게 나라를 빼앗겼어요. 우리 땅인데도 우리 마음대로 할 수 없었어요. 사람들은 슬프고 억울했어요.`},
 {chips:['1919년 3월 1일'], svg:SV(`${cloud(300,40,.7)}
  <rect x="-6" y="190" width="412" height="96" fill="#D9CCAE"/>
  <g id="tFlags">${taeguk(70,120,.8)}${taeguk(330,110,.8)}${taeguk(200,90,.7)}</g>
  ${crowd(270,.6,[[50,{robe:'#EFE6D2'}],[110,{body:'dress',hair:'bun'}],[290,{robe:'#E9DFC8',hat:'gat'}],[350,{robe:'#EFE6D2'}]])}
  <g id="tGs">${gwansun(200,272,.86,{pose:'up',mood:'joy'})}</g>
  ${T(200,40,'대한 독립 만세!',24,K.red,`stroke="#FFF8EC" stroke-width="5" paint-order="stroke"`)}`,'url(#u3)',sky('u3','#CFE7F2','#F6EAD0')),
  taps:[{label:'태극기',el:'tFlags',say:'태극기가 바람에 펄럭펄럭!'},{label:'만세',el:'tGs',say:'대한 독립 만세!'}],
  text:`1919년 3월 1일, 사람들이 태극기를 들고 거리로 나왔어요. 그리고 다 함께 외쳤어요. "대한 독립 만세!" 관순이도 친구들과 함께 만세를 불렀지요.`},
 {svg:SV(`${cloud(80,40,.7)}${hills('#A9CDB4','#C7D88F',196,220)}
  ${hut(300,176)}
  ${gwansun(130,268,.92,{pose:'up',mood:'smile'})}
  ${hero(230,270,.78,{robe:'#EFE6D2',skin:'#EDBF95',hat:'gat',beard:'#D9D3C8',mood:'o'})}${hero(300,272,.7,{body:'dress',hair:'bun',mood:'o'})}`,'url(#u4)',sky('u4','#CFE7F2','#F6EAD0')),
  text:`학교가 문을 닫자, 관순이는 고향으로 내려갔어요. 그리고 마을 어른들에게 서울 소식을 알렸어요. "우리 마을에서도 만세를 불러요!"`},
 {svg:SV(`<rect x="40" y="34" width="80" height="76" rx="6" fill="#1C2347" stroke="#8C6A48" stroke-width="5"/><circle cx="84" cy="66" r="16" fill="#F6F0D6"/><circle cx="92" cy="60" r="14" fill="#1C2347"/>
  <rect x="-6" y="222" width="412" height="64" fill="#6B4E3A"/>
  <circle cx="300" cy="180" r="140" fill="url(#ug5)"/>
  <rect x="318" y="190" width="12" height="28" rx="3" fill="#FFF8E8" ${sw(1.6)}/><path d="M324 172 Q334 182 324 190 Q314 182 324 172Z" fill="#FFC24A" ${sw(1.2)}/>
  ${[0,1,2].map(k=>`<g transform="translate(${40+k*6} ${236-k*8}) scale(.45)"><rect x="0" y="0" width="78" height="52" fill="#FFFFFF" ${sw(2)}/></g>`).join('')}
  ${gwansun(210,270,.92,{pose:'hold',mood:'smile',item:`<rect x="-30" y="-52" width="60" height="40" fill="#FFFFFF" ${sw()}/><g transform="translate(0 -32) rotate(34)"><path d="M-8 0 A8 8 0 0 1 8 0 A4 4 0 0 0 0 0 A4 4 0 0 1 -8 0Z" fill="#CD2E3A"/><path d="M-8 0 A4 4 0 0 0 0 0 A4 4 0 0 1 8 0 A8 8 0 0 1 -8 0Z" fill="#0047A0"/></g><path d="M30 -20 L46 -38" stroke="#9A9A9A" stroke-width="1.6"/>`})}`,'url(#u5)',sky('u5','#28305A','#4D4270')+glow('ug5','#FFD27A',.6)),
  text:`관순이는 밤새 태극기를 만들었어요. 한 땀 한 땀, 손이 아파도 멈추지 않았지요. 많은 사람이 함께 들 수 있도록요.`},
 {chips:['4월 1일 아우내 장터'], svg:SV(`${cloud(320,40,.7)}
  <rect x="-6" y="180" width="412" height="106" fill="#D9CCAE"/>
  <rect x="20" y="130" width="90" height="10" fill="#C9473B" ${sw()}/><path d="M26 140 V184 M104 140 V184" ${sw(3)}/><rect x="290" y="130" width="90" height="10" fill="#5E9C8A" ${sw()}/><path d="M296 140 V184 M374 140 V184" ${sw(3)}/>
  ${crowd(262,.56,[[40,{robe:'#EFE6D2'}],[96,{body:'dress',hair:'bun'}],[300,{robe:'#E9DFC8',hat:'gat'}],[356,{robe:'#EFE6D2'}]])}
  ${crowd(284,.6,[[140,{robe:'#E9DFC8',item:flagItem,pose:'hold'}],[260,{body:'dress',hair:'bun',item:flagItem,pose:'hold'}]])}
  ${gwansun(200,276,.9,{pose:'hold',mood:'joy',item:flagItem})}
  ${T(200,60,'대한 독립 만세!',24,K.red,`stroke="#FFF8EC" stroke-width="5" paint-order="stroke"`)}`,'url(#u6)',sky('u6','#CFE7F2','#F6EAD0')),
  text:`4월 1일, 아우내 장터에 수많은 사람이 모였어요. 관순이는 태극기를 나누어 주고 맨 앞에 서서 외쳤어요. "대한 독립 만세!"`},
 {svg:SV(`<rect x="-6" y="-6" width="412" height="292" fill="#8A8478"/>
  ${[0,1,2,3,4,5].map(r=>[0,1,2,3,4,5,6,7].map(c=>`<rect x="${c*54+(r%2)*27-20}" y="${r*44}" width="52" height="42" fill="none" stroke="#7A7468" stroke-width="2"/>`).join('')).join('')}
  <rect x="160" y="40" width="80" height="70" fill="#CFE0EE" ${sw()}/><circle cx="210" cy="70" r="12" fill="#F6F0D6"/>${[176,192,208,224].map(x=>`<path d="M${x} 40 V110" stroke="#3A3A44" stroke-width="4"/>`).join('')}
  <path d="M170 110 L120 280 L300 280 L230 110Z" fill="#F6F0D6" opacity=".22"/>
  ${gwansun(200,266,.92,{pose:'up',mood:'smile'})}`,'#8A8478'),
  text:`관순이는 일본 경찰에게 붙잡혀 감옥에 갇혔어요. 그래도 용기를 잃지 않고, 감옥 안에서도 친구들과 함께 만세를 불렀대요.`},
 {chips:['1945년'], svg:SV(`<circle cx="200" cy="150" r="150" fill="url(#ug8)"/>
  <rect x="-6" y="200" width="412" height="86" fill="#D9CCAE"/>
  ${taeguk(200,110,1.6)}
  ${crowd(268,.6,[[50,{robe:'#EFE6D2'}],[110,{body:'dress',hair:'bun'}],[170,{robe:'#E9DFC8',hat:'gat'}],[230,{body:'dress',hair:'braid',top:'#FFFFFF',skirt:'#2E3440'}],[290,{robe:'#EFE6D2'}],[350,{body:'dress',hair:'bun'}]])}
  ${star(60,60,10)}${star(340,60,10,'#F28C7C')}`,'url(#u8)',sky('u8','#FCE9C2','#E8F1E2')+glow('ug8','#FFF6D8',.95)),
  text:`관순이와 많은 사람들의 용기가 모이고 모여, 마침내 1945년에 우리나라는 빼앗긴 나라를 되찾았어요.`},
 {svg:SV(`<rect x="-6" y="-6" width="412" height="292" fill="#E3EFF5"/>
  <rect x="210" y="20" width="170" height="230" fill="#E8DCC4" ${sw()}/>${[0,1,2].map(r=>[0,1].map(c=>`<rect x="${226+c*80}" y="${36+r*70}" width="60" height="50" fill="#BFE0F0" ${sw(1.4)}/>`).join('')).join('')}
  ${g(320,96,.5,taeguk(0,0,1,0))}${g(240,166,.5,taeguk(0,0,1,0))}
  <rect x="-6" y="246" width="412" height="40" fill="#C9C2B4"/>
  ${kid(110,270,1.0,{pose:'hold',mood:'joy',item:flagItem})}
  <rect x="20" y="40" width="70" height="76" rx="4" fill="#FFFFFF" ${sw()}/><rect x="20" y="40" width="70" height="20" rx="4" fill="${K.red}" ${sw()}/>${T(55,56,'3월',13,'#fff')}${T(55,94,'1',32)}${T(55,110,'삼일절',12,K.red)}`,'#E3EFF5'),
  text:`그래서 해마다 3월 1일 삼일절에는 집집마다 태극기를 달고, 그날 사람들이 낸 용기를 기억해요.`},
 {kind:'end', svg:endBase('u',`${taeguk(200,120,1.6)}`,gwansun(64,276,.5,{pose:'up',mood:'joy'}),kid(338,276,.5,{pose:'up',mood:'joy'})),
  text:`씩씩한 소녀 관순이가 남긴 선물,<br>용기.<br>오늘도 우리 곁에 있어요.<br><span class="big">끝</span>`},
 {kind:'talk'}
];
BOOKS.push({id:'yugwansun',era:'modern',title:'유관순과 용기의 태극기',who:'유관순',teaser:'나라를 되찾으려고 밤새 태극기를 만든 소녀가 있어요.',pages:P,
 talk:{three:['관순이가 들고 있는 깃발은 뭐지?','태극기 가운데 동그라미는 무슨 색이었지?','두 팔 들고 "만세!" 해 볼까?'],
  five:['관순이는 왜 밤새 태극기를 만들었을까?','용기가 필요했던 때가 있었어?','삼일절에 우리 집은 무엇을 할까?'],
  note:'유관순(1902~1920)은 이화학당 학생으로 3·1 운동에 참여했고, 고향 천안으로 내려가 1919년 4월 1일 아우내 장터 만세 운동을 이끌었습니다. 붙잡혀 서대문 형무소에 갇힌 뒤에도 만세를 불렀고, 모진 고문 끝에 1920년 열일곱 살에 세상을 떠났습니다. 본문에서는 아이 눈높이에 맞춰 이 부분을 뺐습니다. 아이가 묻는다면 나라를 위해 끝까지 용기를 냈다는 데 초점을 두어 이야기해 주세요.'}});
})();
