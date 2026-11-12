/* 김정희: 추운 겨울의 소나무, 세한도 */
(()=>{
setScene('joseon','winter');
const jhKid=(x,y,s,o={})=>hero(x,y,s,{robe:'#D9E6C8',hair:'braid',belt:'#3F6FA8',ribbon:'#3F6FA8',...o});
const jh=(x,y,s,o={})=>hero(x,y,s,{robe:'#EDE9E0',hat:'gat',belt:'#3F6FA8',collar:'#3F6FA8',beard:HAIR,...o});
const jhOld=(x,y,s,o={})=>jh(x,y,s,{beard:'#E6E1D6',...o});
const sangjeok=(x,y,s,o={})=>hero(x,y,s,{robe:'#7A8C6E',hat:'gat',belt:K.gold,...o});
const ipchun=`<rect x="-14" y="-60" width="28" height="44" fill="#FFFDF6" ${sw()}/><text x="0" y="-40" text-anchor="middle" font-family="serif" font-size="12" fill="#2E2522">立</text><text x="0" y="-24" text-anchor="middle" font-family="serif" font-size="12" fill="#2E2522">春</text>`;
const sehando=(x,y,s,ids)=>g(x,y,s,`<rect x="-100" y="-60" width="200" height="74" fill="#F2E8D0" ${sw()}/>
<g ${ids?'id="tPine"':''}><path d="M-70 10 Q-74 -20 -64 -48" fill="none" stroke="#3A3330" stroke-width="4"/><path d="M-66 -40 Q-90 -44 -94 -36 M-64 -48 Q-50 -56 -40 -50" fill="none" stroke="#3A3330" stroke-width="2.4"/>${[[-90,-38],[-44,-52],[-72,-52]].map(([a,b])=>`<path d="M${a-8} ${b} l8 -4 l8 4" fill="none" stroke="#3A3330" stroke-width="1.6"/>`).join('')}<path d="M-40 10 Q-36 -14 -42 -36" fill="none" stroke="#3A3330" stroke-width="3"/></g>
<g ${ids?'id="tHouse"':''}><rect x="0" y="-22" width="44" height="28" fill="#F8F2E2" stroke="#3A3330" stroke-width="1.6"/><path d="M-6 -20 Q22 -34 50 -20" fill="none" stroke="#3A3330" stroke-width="2"/><path d="M16 -2 a6 6 0 1 0 0.1 0" fill="none" stroke="#3A3330" stroke-width="1.4"/></g>
<path d="M70 10 Q74 -16 66 -36" fill="none" stroke="#3A3330" stroke-width="3"/><path d="M60 -32 l8 -4 l8 4" fill="none" stroke="#3A3330" stroke-width="1.6"/>
<rect x="84" y="-54" width="10" height="10" fill="#C9473B"/>`);
const bundleBooks=`<rect x="-26" y="-50" width="52" height="34" fill="#3F6FA8" ${sw()}/><rect x="-22" y="-56" width="44" height="8" fill="#5E9C8A" ${sw(1)}/><path d="M0 -56 V-16" stroke="#C9473B" stroke-width="2"/>`;
const P=[
 {kind:'cover', svg:coverBase('kj','겨울 소나무',`${g(66,256,.7,`<path d="M0 0 Q-6 -40 4 -80" fill="none" stroke="#5A3B2C" stroke-width="8"/><ellipse cx="4" cy="-82" rx="24" ry="9" fill="#2F6B4E" ${sw()}/><path d="M-14 -88 Q4 -96 24 -88" stroke="#FFFFFF" stroke-width="4" fill="none"/>`)}`,jh(220,264,1.0,{pose:'hold',mood:'joy',item:brush})),
  text:`<span class="big">김정희와 세한도</span><br>위인 그림책 {no}권`},
 {svg:SV(`${yard(206)}
  <rect x="160" y="80" width="80" height="126" fill="#8A5A3C" ${sw()}/><rect x="168" y="88" width="30" height="110" fill="#6B4A33"/><rect x="202" y="88" width="30" height="110" fill="#6B4A33"/>
  <g transform="translate(183 150) scale(.9)">${ipchun}</g><g transform="translate(217 150) scale(.9)">${ipchun}</g>
  ${jhKid(90,268,.8,{pose:'hold',mood:'joy',item:brush})}${hero(320,268,.84,{robe:'#7A6AA8',hat:'gat',beard:HAIR,mood:'o'})}
  ${T(320,80,'이 글씨를 누가 썼지?',16,K.red)}`,'#D9CCAE'),
  text:`정약용이 거중기를 만들던 무렵, 정희라는 아이가 태어났어요. 여섯 살 정희가 봄을 맞아 대문에 쓴 글씨를 보고, 지나가던 학자가 깜짝 놀랐대요.`,chips:['전해 오는 이야기']},
 {svg:SV(`${room()}
  ${jh(140,268,.9,{pose:'hold',mood:'smile',item:brush})}
  ${[0,1,2].map(k=>`<rect x="${240+k*40}" y="${110+k*6}" width="34" height="80" fill="#FFFDF6" ${sw(1.4)}/><path d="M${250+k*40} ${126+k*6} v50 M${264+k*40} ${130+k*6} q-6 20 4 40" fill="none" stroke="#2E2522" stroke-width="${3+k}"/>`).join('')}`,'#EADCC0'),
  text:`정희는 자라서 김정희가 되었어요. 날마다 붓을 들고 연습했어요. 벼루 열 개가 닳아 구멍이 날 만큼 썼대요. 그렇게 만든 힘찬 글씨를 '추사체'라고 불러요.`},
 {chips:['1840년'], svg:SV(`${sea(170)}
  <path d="M-6 170 Q100 150 220 176 L220 290 L-6 290Z" fill="#DCE5EA" ${sw()}/>
  ${hut(40,140)}${jhOld(160,262,.86,{mood:'sad'})}
  ${T(300,90,'제주도',22,K.red)}`,'url(#kj4)',sky('kj4','#9FB3C8','#DCE6EE')),
  text:`그런데 김정희는 억울한 일로 먼 제주도에 쫓겨나 홀로 지내게 되었어요. 찾아오는 사람도 없고, 바람이 쌩쌩 부는 외로운 날들이었어요.`},
 {svg:SV(`${room()}
  ${jhOld(120,268,.86,{mood:'joy',pose:'up'})}${sangjeok(280,268,.86,{pose:'hold',mood:'smile',item:bundleBooks})}`,'#EADCC0'),
  text:`그때 제자 이상적이 찾아왔어요. 먼 중국에서 구하기 힘든 책들을 구해서 바다 건너 가져다준 거예요. 김정희가 힘들 때도 이상적은 변하지 않았어요.`},
 {chips:['1844년'], svg:SV(`<rect x="-6" y="-6" width="412" height="292" fill="#EFE3C8"/>
  ${sehando(200,150,1.6,true)}
  <rect x="-6" y="246" width="412" height="40" fill="#DDB16A"/>`,'#EFE3C8'),
  taps:[{label:'소나무',el:'tPine',say:'추운 겨울에도 잎이 푸른 소나무와 잣나무예요.'},{label:'작은 집',el:'tHouse',say:'김정희가 홀로 지내던 집이에요. 둥근 창이 하나 있어요.'}],tapHint:'그림 속을 눌러 보세요.',
  text:`김정희는 고마운 마음을 담아 그림 한 장을 그려 주었어요. 눈 내린 겨울, 작은 집 옆에 소나무와 잣나무가 서 있는 그림이에요. 이름은 '세한도'예요.`},
 {svg:SV(`${hills('#A9CDB4','#BCD38F',196,222)}
  ${tree(120,220,1.1,'pine')}${tree(170,224,.9,'pine')}
  ${jhOld(280,268,.86,{mood:'smile'})}${sangjeok(350,268,.8,{mood:'joy'})}`,'url(#kj6)',sky('kj6','#C9D8E6','#F2F5F8')),
  text:`"날이 추워진 뒤에야 소나무가 푸르다는 걸 안다." 힘들 때 곁에 있어 주는 친구가 진짜 친구라는 뜻이에요. 이상적이 바로 그런 친구였지요.`},
 {svg:SV(`${room()}
  ${sehando(250,130,.8)}
  ${kid(120,266,1.0,{pose:'up',mood:'o'})}${hero(330,266,.86,{body:'dress',hair:'bun',top:'#F2C14E',skirt:'#5B7FB8',mood:'smile'})}`,'#EFE3C8'),
  text:`세한도는 지금 국립중앙박물관에 있어요. 오랫동안 이 그림을 아껴 온 사람이 모두가 볼 수 있도록 나라에 선물했대요.`},
 {kind:'end', svg:endBase('kj',`${sehando(200,170,1.4)}`,jhKid(64,276,.5,{pose:'up',mood:'joy'}),jhOld(338,276,.55,{pose:'up',mood:'joy'})),
  text:`붓을 놓지 않던 아이가 남긴 선물,<br>겨울에도 푸른 우정.<br>오늘도 우리 곁에 있어요.<br><span class="big">끝</span>`},
 {kind:'talk'}
];
BOOKS.push({id:'kimjeonghui',era:'joseon',title:'김정희와 세한도',who:'김정희',teaser:'외로운 섬에 책을 들고 찾아온 친구에게, 겨울 소나무 그림으로 고마움을 전한 사람이 있어요.',pages:P,
 talk:{three:['세한도에 있는 나무는 무슨 나무였지?','붓글씨 쓰는 흉내, 쓱~ 쭉!','친구에게 고맙다고 말해 볼까?'],
  five:['이상적은 왜 먼 제주도까지 책을 가져다주었을까?','"추운 겨울의 소나무" 같은 친구는 어떤 친구일까?','친구가 힘들 때 너는 어떻게 해 줄 수 있어?'],
  note:'김정희(1786~1856, 호는 추사·완당)는 충청도 예산에서 태어났습니다. 어려서 쓴 입춘첩을 보고 박제가가 스승이 되었다는 이야기가 전합니다. 24세에 청나라 연경에 가서 옹방강, 완원 등과 교류했고, 독특한 서체인 추사체를 완성했습니다. 1840년 정치적 사건으로 제주도에 9년간 유배되었으며, 역관인 제자 이상적이 중국에서 귀한 책을 구해 보내 주자 1844년 「세한도」를 그려 주었습니다. 그림에 『논어』의 "날이 차가워진 뒤에야 소나무와 잣나무가 늦게 시듦을 안다"는 구절을 인용했습니다. 세한도는 국보이며, 2020년 소장자 손창근 선생이 국립중앙박물관에 기증했습니다. "벼루 열 개를 구멍 냈다"는 말은 김정희 스스로 편지에 남긴 표현입니다.'}});
})();
