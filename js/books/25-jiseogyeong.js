/* 18권 지석영: 무서운 병을 막은 따끔한 주사 */
(()=>{
const jsKid=(x,y,s,o={})=>hero(x,y,s,{robe:'#D9E6C8',hair:'braid',belt:'#5E9C8A',ribbon:'#5E9C8A',...o});
const js=(x,y,s,o={})=>hero(x,y,s,{robe:'#EDE9E0',hat:'gat',belt:'#3F6FA8',collar:'#3F6FA8',...o});
const jsDoc=(x,y,s,o={})=>hero(x,y,s,{robe:'#FFFFFF',hat:'gat',belt:'#3F6FA8',collar:'#3F6FA8',beard:HAIR,...o});
const japDoc=(x,y,s,o={})=>hero(x,y,s,{robe:'#3A4A6A',hair:'topknot',belt:'#C9B48A',...o});
const needle=`<rect x="-6" y="-60" width="12" height="34" rx="3" fill="#E9F2F8" ${sw(1.6)}/><path d="M0 -26 V-14" stroke="#9AA3B0" stroke-width="2"/><rect x="-10" y="-64" width="20" height="5" rx="2" fill="#9AA3B0" ${sw(1.2)}/>`;
function cowS(x,y,s){return g(x,y,s,`<ellipse cx="0" cy="1" rx="50" ry="7" fill="#2B1E16" opacity=".18"/>${[-30,-16,18,32].map(lx=>`<rect x="${lx-5}" y="-40" width="10" height="38" rx="4" fill="#FFFDF6" ${sw()}/>`).join('')}<ellipse cx="0" cy="-52" rx="46" ry="24" fill="#FFFDF6" ${sw()}/><ellipse cx="-14" cy="-58" rx="12" ry="8" fill="#3E3A3A"/><ellipse cx="18" cy="-46" rx="9" ry="7" fill="#3E3A3A"/><ellipse cx="48" cy="-72" rx="20" ry="18" fill="#FFFDF6" ${sw()}/><ellipse cx="58" cy="-62" rx="12" ry="9" fill="#F2B8B0" ${sw(1.6)}/><path d="M36 -88 Q30 -100 38 -102 M54 -88 Q62 -100 56 -104" fill="none" stroke="#C9B48A" stroke-width="4" stroke-linecap="round"/><circle cx="46" cy="-76" r="2.6" fill="${L}"/>`)}
const bigBox=(x,y,t)=>`<rect x="${x-60}" y="${y-36}" width="120" height="36" rx="4" fill="#3F6FA8" ${sw()}/>${T(x,y-12,t,16,'#FFFFFF')}`;
const P=[
 {kind:'cover', svg:coverBase('js','따끔한 선물',`${g(66,262,1.9,needle)}${heart(340,150)}`,jsDoc(210,264,1.0,{pose:'up',mood:'joy'})),
  text:`<span class="big">지석영과 따끔한 주사</span><br>위인 그림책 {no}권`},
 {svg:SV(`<rect x="-6" y="-6" width="412" height="230" fill="#EADCC0"/><rect x="-6" y="216" width="412" height="70" fill="#DDB16A"/>
  ${jsKid(140,268,.92,{pose:'hold',mood:'smile',item:bigBook('의학책','#3F6FA8')})}
  ${hero(290,268,.7,{robe:'#EDE9E0',hat:'gat',beard:'#D9D3C8',mood:'smile'})}`,'#EADCC0'),
  text:`김정호가 지도를 만들던 무렵, 서울에 석영이라는 아이가 살았어요. 석영이는 아픈 사람을 낫게 하는 의학책 읽기를 좋아했어요.`},
 {svg:SV(`<rect x="-6" y="-6" width="412" height="230" fill="#D9CDB4"/><rect x="-6" y="216" width="412" height="70" fill="#B9A475"/>
  <rect x="40" y="226" width="150" height="26" rx="6" fill="#F4EFE0" ${sw()}/>
  ${kid(120,244,.7,{mood:'sad',front:''})}
  ${hero(260,268,.86,{body:'dress',hair:'bun',mood:'sad',tear:true})}
  ${T(300,110,'마마가 무서워요',16,K.ink)}`,'url(#js2)',sky('js2','#C9C2B4','#D9CDB4')),
  text:`그때는 천연두라는 무서운 병이 있었어요. 사람들은 '마마'라고 불렀지요. 열이 펄펄 나고 온몸에 붉은 점이 돋아서, 많은 아이들이 크게 아팠어요.`},
 {svg:SV(`<rect x="-6" y="-6" width="412" height="230" fill="#EADCC0"/><rect x="-6" y="216" width="412" height="70" fill="#DDB16A"/>
  ${js(140,268,.92,{pose:'hold',mood:'sad'})}
  ${T(140,100,'병을 막을 방법이 있을 거야',16,K.red)}
  ${bigBox(300,180,'우두법')}`,'#EADCC0'),
  text:`어른이 된 석영은 생각했어요. "아프기 전에 막을 수는 없을까?" 그러다 먼 나라에 '우두법'이라는 좋은 방법이 있다는 걸 알게 되었어요.`},
 {chips:['1879년'], svg:SV(`<rect x="-6" y="-6" width="412" height="230" fill="#E9EEF2"/><rect x="-6" y="216" width="412" height="70" fill="#C9C2B4"/>
  <rect x="250" y="60" width="110" height="80" fill="#FFFFFF" ${sw()}/><path d="M290 80 h30 M305 66 v30" stroke="#C9473B" stroke-width="8"/>
  ${japDoc(270,268,.86,{pose:'hold',mood:'smile',item:needle})}${js(130,268,.9,{pose:'hold',mood:'joy',item:bigBook('공책','#5E9C8A')})}`,'#E9EEF2'),
  text:`석영은 부산에 있는 병원에 찾아가 우두법을 배웠어요. 소에게 생기는 가벼운 병을 사람 몸에 살짝 넣어 주면, 천연두에 걸리지 않게 되는 방법이에요.`},
 {svg:SV(`${cloud(80,40,.7)}${hills('#A9CDB4','#C7D88F',196,220)}
  <g id="tCow">${cowS(270,262,.9)}</g>
  <g id="tSeok">${js(110,266,.86,{pose:'up',mood:'joy'})}</g>`,'url(#js5)',sky('js5','#CFE7F2','#F6EAD0')),
  taps:[{label:'소',el:'tCow',say:'음매! 우두는 소에게서 얻었어요. 그래서 이름이 우두예요.'},{label:'지석영',el:'tSeok',say:'이걸로 아이들을 지킬 수 있어!'}],tapHint:'우두는 어디서 왔을까요?',
  text:`'우두'는 소의 천연두라는 뜻이에요. 석영은 우두를 구해서 기쁜 마음으로 처가가 있는 충주로 달려갔어요.`},
 {svg:SV(`<rect x="-6" y="-6" width="412" height="230" fill="#EADCC0"/><rect x="-6" y="216" width="412" height="70" fill="#DDB16A"/>
  <g id="tBaby">${kid(260,268,.8,{mood:'o'})}</g>
  <g id="tNeedle">${jsDoc(130,268,.92,{pose:'hold',mood:'smile',item:needle})}</g>
  ${T(280,110,'따끔!',26,K.red)}`,'#EADCC0'),
  taps:[{label:'주사',el:'tNeedle',say:'따끔! 아주 조금만 아파요.'},{label:'꾹 참기',el:'tBaby',say:'으앙… 아니, 꾹! 참았어요.'}],
  text:`석영은 두 살배기 어린 처남에게 처음으로 우두를 놓아 주었어요. 따끔! 처남은 꾹 참았지요. 그리고 천연두에 걸리지 않았어요.`},
 {svg:SV(`${cloud(80,40,.7)}${hills('#A9CDB4','#C7D88F',196,220)}
  ${jsDoc(80,268,.8,{pose:'hold',mood:'joy',item:needle})}
  ${[150,200,250,300,350].map((x,k)=>kid(x,270,.56,{mood:'joy',pose:k%2?'up':'down'})).join('')}`,'url(#js7)',sky('js7','#CFE7F2','#F6EAD0')),
  text:`그 뒤로 석영은 여러 곳을 다니며 우두를 놓고, 다른 의사들에게 우두법을 가르쳤어요. 무서운 마마에 걸리는 아이들이 점점 줄어들었지요.`},
 {svg:SV(`<rect x="-6" y="-6" width="412" height="292" fill="#E9F2F8"/><rect x="-6" y="216" width="412" height="70" fill="#C9D8E0"/>
  ${hero(270,268,.9,{robe:'#FFFFFF',hair:'bun',body:'dress',top:'#FFFFFF',skirt:'#7FB3C8',pose:'hold',mood:'smile',item:needle})}
  ${kid(140,268,.96,{mood:'joy',pose:'up'})}
  <rect x="96" y="196" width="18" height="8" rx="3" fill="#F6D24A" ${sw(1.2)}/>${T(140,96,'씩씩하게!',18,K.red)}`,'#E9F2F8'),
  text:`우리도 병원에서 예방 주사를 맞지요? 조금 따끔하지만, 무서운 병에서 우리 몸을 지켜 주는 고마운 주사예요.`},
 {kind:'end', svg:endBase('js',`${g(200,200,2.6,needle)}${heart(140,80)}${heart(260,80)}`,kid(64,276,.5,{pose:'up',mood:'joy'}),jsDoc(338,276,.55,{pose:'up',mood:'joy'})),
  text:`아이들을 지키고 싶었던 사람이 남긴 선물,<br>병을 막는 예방 주사.<br>오늘도 우리 곁에 있어요.<br><span class="big">끝</span>`},
 {kind:'talk'}
];
BOOKS.push({id:'jiseogyeong',era:'modern',title:'지석영과 따끔한 주사',who:'지석영',teaser:'무서운 병 천연두를 막으려고 처음으로 우두를 놓은 지석영 이야기예요.',pages:P,
 talk:{three:['우두는 어떤 동물에게서 얻었지?','주사 맞을 때처럼 "꾹!" 참아 볼까?','"음매!" 소 흉내 내 볼까?'],
  five:['아프기 전에 병을 막으면 뭐가 좋을까?','처남은 왜 꾹 참았을까?','예방 주사를 맞을 때 어떤 마음이었어?'],
  note:'지석영(1855~1935)은 1879년 부산의 일본 해군 병원인 제생의원에서 종두법을 배우고 우두 두묘를 얻어, 충주 처가에서 두 살 처남에게 처음 접종했습니다. 이후 종두장을 열고 종두법을 널리 가르쳤으며, 한글 연구에도 힘썼습니다. 우두법은 1796년 영국의 제너가 처음 개발했고, 천연두는 1980년 세계에서 사라졌다고 선언되었습니다.'}});
})();
