/* 7권 혜초: 먼 나라를 걸어서 다녀온 스님 */
(()=>{
setScene('samguk','summer');
const kasa=`<path d="M-26 -64 L32 -6 L42 -12 L-14 -68Z" fill="#C9A15A" ${sw(1.6)}/>`;
const hyKid=(x,y,s,o={})=>hero(x,y,s,{hair:'bald',robe:'#C9C2B4',belt:false,collar:'#EDE9E0',...o});
const hy=(x,y,s,o={})=>hero(x,y,s,{hair:'bald',robe:'#A7A49B',belt:false,collar:'#EDE9E0',deco:kasa,...o});
const pack=`<rect x="-18" y="-70" width="36" height="40" rx="5" fill="#9A6B45" ${sw()}/><path d="M-18 -56 H18" stroke="#6B4A33" stroke-width="2"/>`;
const diary=`<rect x="-30" y="-52" width="60" height="38" rx="2" fill="#FFFDF6" ${sw()}/><path d="M0 -52 V-14" ${sw(1.4)}/><path d="M-24 -44 H-6 M-24 -36 H-6 M-24 -28 H-8 M6 -44 H24 M6 -36 H22" stroke="#9A9087" stroke-width="1.6"/>`;
const palm=(x,y,s=1)=>g(x,y,s,`<path d="M0 0 Q-6 -50 4 -90" fill="none" stroke="#9A6B45" stroke-width="8" stroke-linecap="round"/>${[[-40,-80],[40,-84],[-30,-104],[34,-108],[0,-118]].map(([dx,dy])=>`<path d="M4 -92 Q${dx*.6} ${dy-10} ${dx} ${dy+10}" fill="none" stroke="#4E8A5E" stroke-width="8" stroke-linecap="round"/>`).join('')}`);
const stupa=(x,y,s)=>g(x,y,s,`<rect x="-50" y="-16" width="100" height="16" fill="#E6D3A6" ${sw()}/><path d="M-40 -16 Q-40 -76 0 -80 Q40 -76 40 -16Z" fill="#F4EFE0" ${sw()}/><rect x="-8" y="-98" width="16" height="18" fill="#E6D3A6" ${sw(1.6)}/><path d="M0 -98 V-120" ${sw(2.4)}/><path d="M-12 -106 H12 M-8 -112 H8" ${sw(2)}/>`);
const cave2=(x,y,s)=>g(x,y,s,`<path d="M-120 0 L-110 -100 L110 -100 L120 0Z" fill="#D2B48A" ${sw()}/>${[-70,0,70].map(c=>`<path d="M${c-24} 0 Q${c-24} -60 ${c} -64 Q${c+24} -60 ${c+24} 0Z" fill="#5A4636" ${sw()}/>`).join('')}`);
const P=[
 {kind:'cover', svg:coverBase('hc','먼 나라 여행',`${elephant(66,262,.42)}${camel(340,262,.48)}`,hy(200,264,1.0,{pose:'up',mood:'joy',item:pack})),
  text:`<span class="big">혜초의 먼 나라 여행기</span><br>위인 그림책 {no}권`},
 {svg:SV(`${cloud(300,40,.7)}${hills('#A9CDB4','#C7D88F',196,220)}
  ${hero(270,268,.82,{robe:'#EDE9E0',hair:'bald',belt:false,collar:'#EDE9E0',deco:kasa,beard:'#D9D3C8',mood:'smile'})}
  ${hyKid(140,268,.86,{mood:'o'})}
  ${T(200,100,'저 멀리 서쪽에는…',18,K.red)}`,'url(#hc1)',sky('hc1','#CFE7F2','#F6EAD0')),
  text:`원효 스님이 살던 신라에서 몇십 년 뒤, 혜초라는 아이가 살았어요. 혜초는 먼 나라 이야기를 들을 때마다 눈이 반짝반짝 빛났어요.`},
 {svg:SV(`<circle cx="340" cy="46" r="22" fill="${K.gold}" ${sw()}/>${sea(170)}
  ${g(200,206,.36,`<path d="M-80 -6 Q-70 22 0 24 Q70 22 90 -6Z" fill="#8A5A3C" ${sw(3)}/><path d="M0 -6 V-110" ${sw(5)}/><path d="M-44 -104 L44 -104 L38 -30 L-38 -30Z" fill="#F4E7C6" ${sw(3)}/>`)}
  ${hyKid(196,170,.4,{mood:'joy',pose:'up'})}${T(200,110,'당나라로!',20,K.red)}`,'url(#hc2)',sky('hc2','#CFE7F2','#F6EAD0')),
  text:`혜초는 어린 나이에 배를 타고 바다 건너 당나라로 공부하러 갔어요. 그곳에서 부처님이 태어난 나라, 천축 이야기를 들었어요.`},
 {svg:SV(`${room()}
  ${hy(140,268,.92,{pose:'hold',mood:'joy',item:pack})}
  ${stupa(300,214,.9)}${T(300,70,'천축',22,K.red)}`,'#EADCC0'),
  text:`"천축에 꼭 가 보고 싶어!" 천축은 지금의 인도예요. 아주 멀고 먼 나라였지만, 혜초는 씩씩하게 길을 떠났어요.`},
 {chips:['723년 무렵'], svg:SV(`<circle cx="340" cy="46" r="26" fill="#F7B640" ${sw()}/>
  <path d="M-6 200 Q200 186 406 200 L406 286 L-6 286Z" fill="#D9B66A" ${sw()}/>
  ${palm(40,210,.9)}${palm(370,214,.8)}
  <g id="tEle">${elephant(270,262,.8)}</g>
  <g id="tHy">${hy(110,266,.86,{pose:'up',mood:'o'})}</g>`,'url(#hc4)',sky('hc4','#F6DFA8','#F2C27A')),
  taps:[{label:'코끼리',el:'tEle',say:'뿌우! 코가 길쭉한 코끼리예요.'},{label:'혜초',el:'tHy',say:'와, 여기는 정말 덥구나!'}],tapHint:'처음 보는 동물을 눌러 보세요.',
  text:`천축은 아주 더운 나라였어요. 처음 보는 커다란 코끼리도 있고, 키 큰 야자나무도 있었어요. 혜초는 여러 나라를 걸어서 돌아다녔어요.`},
 {svg:SV(`<rect x="-6" y="-6" width="412" height="292" fill="#2E2A3A"/><circle cx="200" cy="150" r="140" fill="url(#hcg5)"/>
  <rect x="-6" y="216" width="412" height="70" fill="#4A3A30"/>
  ${hy(150,268,.92,{pose:'hold',mood:'smile',item:diary})}
  <rect x="246" y="190" width="12" height="28" rx="3" fill="#FFF8E8" ${sw(1.6)}/><path d="M252 172 Q262 182 252 190 Q242 182 252 172Z" fill="#FFC24A" ${sw(1.2)}/>`,'#2E2A3A',glow('hcg5','#FFD27A',.6)),
  text:`혜초는 날마다 보고 들은 것을 꼼꼼히 적었어요. 그 나라 사람들은 무엇을 먹는지, 어떤 옷을 입는지, 임금님은 어떤 사람인지 모두요.`},
 {svg:SV(`${snowPeaks(230)}
  ${[30,80,140,210,260,330,380].map((x,k)=>`<circle cx="${x}" cy="${40+(k%3)*40}" r="3" fill="#FFFFFF"/>`).join('')}
  <path d="M-6 236 Q200 226 406 236 L406 286 L-6 286Z" fill="#F4F6F8" ${sw()}/>
  ${camel(270,266,.66)}
  ${hy(130,266,.86,{mood:'sad',pose:'hold',item:pack})}
  <circle cx="60" cy="50" r="16" fill="#F6F0D6" ${sw()}/>${T(120,100,'고향이 보고 싶어',16,'#3F5A7A')}`,'url(#hc6)',sky('hc6','#9FB3C8','#DCE6EE')),
  text:`돌아오는 길에는 눈 덮인 높은 산을 넘었어요. 차가운 바람 속에서 달을 보며 고향 신라를 그리워했지요. 그 마음을 짧은 시로 남겼어요.`},
 {chips:['727년'], svg:SV(`${room()}
  ${hy(130,268,.9,{pose:'up',mood:'joy'})}
  ${g(280,200,2.2,diary)}${T(280,70,'왕오천축국전',20,K.red)}`,'#E8D3B0'),
  text:`네 해 만에 당나라로 돌아온 혜초는 여행 이야기를 책으로 엮었어요. 이름은 『왕오천축국전』, '다섯 천축국을 다녀온 이야기'라는 뜻이에요.`},
 {chips:['1908년'], svg:SV(`<path d="M-6 220 L406 220 L406 286 L-6 286Z" fill="#C9A57A"/>
  ${cave2(200,226,1.2)}
  ${hero(300,272,.8,{robe:'#5A5560',hair:'topknot',belt:false,mood:'o',arms:'holdFront',face:'left'})}
  <g id="tScroll">${g(300,268,.8,diary)}</g>${[0,1,2].map(k=>`<path d="M${270+k*30} ${190-k*6} l-6 -12" stroke="${K.gold}" stroke-width="3" stroke-linecap="round"/>`).join('')}`,'url(#hc8)',sky('hc8','#F6DFA8','#F2C27A')),
  taps:[{label:'오래된 책',el:'tScroll',say:'천이백 년 동안 동굴 속에서 잠자고 있던 혜초의 여행기예요.'}],tapHint:'동굴에서 찾은 것을 눌러 보세요.',
  text:`그 책은 오랫동안 잊혔어요. 그런데 천이백 년 가까이 지나, 먼 사막의 동굴에서 한 학자가 이 책을 찾아냈대요!`},
 {svg:SV(`<rect x="34" y="34" width="104" height="86" rx="4" fill="#BFE0F0" stroke="#FFFFFF" stroke-width="7"/>${cloud(80,70,.6)}
  <rect x="-6" y="216" width="412" height="70" fill="#E9CFA4"/><ellipse cx="190" cy="260" rx="124" ry="18" fill="#BFD7A8" ${sw()}/>
  ${kid(190,266,1.0,{pose:'hold',mood:'joy',item:diary})}
  ${elephant(330,200,.36)}${star(260,150,7,'#F28C7C')}`,'url(#hc9)',sky('hc9','#E8F2F8','#DCEAF2')),
  text:`혜초가 적어 둔 덕분에 우리는 천이백 년 전 인도 사람들이 어떻게 살았는지 알 수 있어요. 오늘 쓴 그림일기도 오랜 뒤에 누군가 읽을지 몰라요.`},
 {kind:'end', svg:endBase('hc',`${g(200,200,2.6,diary)}${elephant(100,140,.4)}${camel(300,140,.42)}`,hyKid(64,276,.5,{pose:'up',mood:'joy'}),hy(338,276,.55,{pose:'up',mood:'joy'})),
  text:`먼 나라가 궁금했던 아이가 남긴 선물,<br>세상을 적은 여행기.<br>오늘도 우리 곁에 있어요.<br><span class="big">끝</span>`},
 {kind:'talk'}
];
BOOKS.push({id:'hyecho',era:'samguk',title:'혜초의 먼 나라 여행기',who:'혜초',teaser:'코끼리가 사는 먼 나라까지 걸어서 다녀온 스님이 있었어요.',pages:P,
 talk:{three:['혜초가 본 코가 긴 동물은 뭐지?','코끼리 흉내, 뿌우!','눈 덮인 산에서 혜초는 어떤 얼굴이었지?'],
  five:['혜초는 왜 보고 들은 것을 적었을까?','먼 나라에 간다면 무엇을 보고 싶어?','고향이 그리울 때는 어떤 마음일까?'],
  note:'혜초(700년 무렵~?)는 신라의 스님으로, 당나라에 건너가 공부한 뒤 723년 무렵 인도로 떠나 약 4년 동안 여러 나라를 돌아보고 727년 무렵 돌아왔습니다. 갈 때 바닷길로 갔는지 뭍길로 갔는지는 분명하지 않습니다. 『왕오천축국전』은 1908년 프랑스 학자 펠리오가 중국 둔황 석굴에서 찾아냈고, 지금은 프랑스 국립도서관에 있습니다. 파미르 고원을 넘으며 고향을 그리워한 시가 남아 있습니다.'}});
})();
