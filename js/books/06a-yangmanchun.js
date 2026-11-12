/* 양만춘: 끝까지 성을 지킨 안시성 사람들 */
(()=>{
setScene('samguk','autumn');
const ym=(x,y,s,o={})=>hero(x,y,s,{body:'armor',robe:'#C9473B',hat:'helmet',beard:HAIR,...o});
const gsol=(x,y,s,o={})=>hero(x,y,s,{body:'armor',robe:'#B5473A',hat:'helmet',...o});
const tang=(x,y,s,o={})=>hero(x,y,s,{body:'armor',robe:'#5A6E8A',hat:'helmet',beard:'#3B2618',...o});
const taizong=(x,y,s,o={})=>hero(x,y,s,{robe:'#E9C25A',hat:'crown',belt:'#3A2E2A',beard:'#3B2618',...o});
const town=(x,y,s,o={})=>hero(x,y,s,{robe:'#D6CDB4',skin:'#EDBF95',hat:'band',bandColor:'#FFFDF6',...o});
const wall=(y,h=60)=>`<rect x="-6" y="${y-h}" width="412" height="${h}" fill="#B0A898" ${sw()}/>${[...Array(14)].map((_,k)=>`<rect x="${k*30-4}" y="${y-h-14}" width="18" height="14" fill="#B0A898" ${sw(1.2)}/>`).join('')}${[...Array(10)].map((_,k)=>`<path d="M${k*44} ${y-h+18} h30 M${k*44+20} ${y-h+38} h30" stroke="#8E8678" stroke-width="2"/>`).join('')}`;
const mound=(x,y,w,h)=>`<path d="M${x-w} ${y} Q${x-w*.4} ${y-h} ${x} ${y-h} Q${x+w*.4} ${y-h} ${x+w} ${y}Z" fill="#B99B6A" ${sw()}/>`;
const P=[
 {kind:'cover', svg:coverBase('ym','우리 성을 지켜요',`${g(300,262,.5,wall(0,90))}`,ym(130,264,1.0,{arms:'flagR',prop:H=>PROP.flag(H,'#C9473B'),mood:'joy'})),
  text:`<span class="big">양만춘과 안시성</span><br>위인 그림책 {no}권`},
 {svg:SV(`${ridge(150,'#B7CBD3',30,2)}<path d="M-6 180 Q200 170 406 182 L406 290 L-6 290Z" fill="#C9C08E"/>
  ${[...Array(16)].map((_,k)=>`<path d="M${(k%8)*52} ${200+Math.floor(k/8)*24} l10 -16 l10 16Z" fill="#8E9AA6" ${sw(1)}/>`).join('')}
  ${taizong(300,282,.9,{mood:'o',arms:'pointL',face:'left'})}${tang(200,276,.66,{mood:'o',face:'left'})}`,'url(#ym1)',sky('ym1','#B9C2CC','#E6E2D4')),
  text:`먼 옛날, 중국 당나라의 임금 태종이 큰 군대를 이끌고 고구려로 쳐들어왔어요.`},
 {svg:SV(`${ridge(150,'#A9B8A0',40,3)}${wall(240,80)}
  ${ym(200,150,.62,{mood:'smile',arms:'pointL',face:'left'})}${gsol(140,152,.5,{mood:'o'})}${gsol(260,152,.5,{mood:'o'})}
  <path d="M-6 240 Q200 230 406 240 L406 290 L-6 290Z" fill="#C9C08E"/>
  ${T(200,40,'안시성',24,K.red)}`,'url(#ym2)',sky('ym2','#CFE7F2','#F6EAD0')),
  text:`당나라 군대는 여러 성을 차례로 빼앗고 안시성 앞에 이르렀어요. 안시성의 성주는 백성들과 함께 성문을 굳게 닫았어요. 뒷날 사람들은 이 성주를 양만춘이라고 불렀어요.`},
 {svg:SV(`${wall(250,90)}<path d="M-6 250 H406 V290 H-6Z" fill="#C9C08E"/>
  ${gsol(90,160,.5,{arms:'carryUp',prop:H=>PROP.stoneUp(H),mood:'o'})}${town(170,162,.46,{arms:'holdFront',mood:'joy'})}${hero(250,162,.46,{body:'dress',hair:'bun',top:'#FFFDF6',skirt:'#8C7A6A',arms:'carryUp',prop:H=>`<ellipse cx="0" cy="${H.L[1]-14}" rx="16" ry="12" fill="#B5874F" ${sw()}/>`,mood:'joy'})}${ym(330,164,.5,{arms:'cheer',mood:'joy'})}
  ${[0,1,2].map(k=>tang(80+k*120,282,.58,{mood:'sad',face:'right'})).join('')}`,'url(#ym3)',sky('ym3','#CFE7F2','#F6EAD0')),
  text:`당나라 군사들이 날마다 성벽을 공격했지만, 성안 사람들은 모두 힘을 합쳤어요. 무너진 곳은 밤새 다시 쌓고, 돌과 화살을 날랐어요.`},
 {svg:SV(`${g(80,250,1,`<rect x="-90" y="-100" width="180" height="100" fill="#B0A898" ${sw()}/>`)}<path d="M-6 250 H406 V290 H-6Z" fill="#C9C08E"/>
  <g id="tMound">${mound(280,250,120,150)}</g>
  ${[0,1,2,3].map(k=>tang(210+k*40,252-k*20,.32,{arms:'carryUp',prop:H=>`<rect x="${H.L[0]}" y="${H.L[1]-16}" width="${H.R[0]-H.L[0]}" height="14" fill="#8A6A4A" ${sw(1)}/>`,mood:'o'})).join('')}
  ${gsol(70,150,.42,{mood:'o',arms:'pointR',face:'right'})}`,'url(#ym4)',sky('ym4','#CFE7F2','#F6EAD0')),
  taps:[{label:'흙산',el:'tMound',say:'당나라 군사들이 성보다 높게 흙을 쌓고 있어요.'},{label:'와르르',el:'tMound',say:'와르르! 흙산 한쪽이 무너져 고구려 군사가 흙산을 차지했대요.'}],tapHint:'커다란 흙산을 눌러 볼까요?',
  text:`당나라는 성보다 높은 흙산을 쌓기 시작했어요. 두 달 넘게 쌓은 흙산이 성벽 쪽으로 와르르 무너지자, 안시성 사람들이 재빨리 그 흙산을 차지했어요.`},
 {chips:['645년'], svg:SV(`${ridge(150,'#C9A06A',30,2)}<path d="M-6 180 Q200 170 406 182 L406 290 L-6 290Z" fill="#D8C77A"/>${snowFX(16)}
  ${[0,1,2,3].map(k=>tang(220+k*44,266-k*6,.5,{stance:'walk',arms:'walk',mood:'sad',face:'right'})).join('')}
  ${taizong(170,272,.66,{mood:'sad',arms:'waveR',face:'left'})}
  ${g(60,250,1,`<rect x="-70" y="-110" width="140" height="110" fill="#B0A898" ${sw()}/>`)}${ym(60,140,.46,{mood:'joy',arms:'waveR',face:'right'})}`,'url(#ym5)',sky('ym5','#C9D2D8','#E6E2D4')),
  text:`석 달 가까이 지나 날이 추워지자, 당 태종은 군대를 돌렸어요. 돌아가면서 끝까지 성을 지킨 성주에게 비단을 선물했대요.`},
 {svg:SV(`${wall(250,80)}<path d="M-6 250 H406 V290 H-6Z" fill="#C9C08E"/>
  ${[0,1,2,3,4,5].map(k=>(k%2?gsol:town)(50+k*60,162,.44,{arms:'cheer',mood:'joy'})).join('')}
  ${ym(200,282,.86,{mood:'joy',arms:'armsOpen'})}
  ${T(200,40,'모두 함께 해냈어!',22,K.red)}`,'url(#ym6)',sky('ym6','#CFE7F2','#F6EAD0')),
  text:`안시성이 지켜진 건 성주 한 사람의 힘만이 아니었어요. 성안의 군사와 농부, 엄마와 아이까지 모두 함께였어요.`},
 {svg:SV(`${room()}
  ${[0,1,2].map(k=>`<rect x="${120+k*56}" y="${200-k*0}" width="44" height="40" fill="#B0A898" ${sw()}/>`).join('')}<rect x="140" y="160" width="44" height="40" fill="#B0A898" ${sw()}/><rect x="196" y="160" width="44" height="40" fill="#B0A898" ${sw()}/>
  ${kid(80,266,.84,{mood:'joy',arms:'holdFront',face:'right'})}${hero(330,266,.84,{body:'dress',hair:'braid',top:'#E98FA0',skirt:'#5B7FB8',mood:'joy',arms:'carryUp',prop:H=>`<rect x="${H.L[0]-4}" y="${H.L[1]-30}" width="${H.R[0]-H.L[0]+8}" height="26" fill="#B0A898" ${sw()}/>`,face:'left'})}`,'#EFE3C8'),
  text:`친구와 함께 블록 성을 쌓아 볼까요? 한 사람은 받치고, 한 사람은 올리면 혼자보다 훨씬 튼튼해요.`},
 {kind:'end', svg:endBase('ym',`${g(200,230,.6,wall(0,90))}`,kid(64,276,.5,{arms:'cheer',mood:'joy'}),ym(338,276,.55,{arms:'waveR',mood:'joy'})),
  text:`모두 힘을 모아 성을 지킨 사람들이 남긴 선물,<br>함께하면 해낼 수 있다는 마음.<br>오늘도 우리 곁에 있어요.<br><span class="big">끝</span>`},
 {kind:'talk'}
];
BOOKS.push({id:'yangmanchun',era:'samguk',title:'양만춘과 안시성',who:'양만춘',teaser:'커다란 군대 앞에서도 모두 힘을 모아 성을 지킨 사람들이 있어요.',pages:P,
 talk:{three:['흙산이 어떻게 됐지? 와르르!','성벽 쌓는 흉내 내 볼까?','친구랑 같이 하면 어떤 기분이야?'],
  five:['안시성 사람들은 어떻게 성을 지켰을까?','당 태종은 왜 성주에게 선물을 주었을까?','우리 가족이 힘을 합쳐 해낸 일은 뭐가 있을까?'],
  note:'645년 당 태종이 고구려를 침공했을 때 안시성은 석 달 가까이 버텨 당군을 물러나게 했습니다. 『삼국사기』에는 당군이 60여 일 동안 토산을 쌓았으나 무너져 고구려군이 차지했고, 태종이 철수하며 성주의 굳은 수비를 칭찬해 비단 100필을 주었다고 적혀 있습니다. 성주의 이름 "양만춘"은 당시 기록에는 없고 조선 시대 문헌에 처음 나타나므로 확실하지 않습니다. 당 태종이 이 싸움에서 화살에 눈을 맞았다는 이야기도 후대에 전하는 이야기입니다.'}});
})();
