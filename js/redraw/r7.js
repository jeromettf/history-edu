/* 그림 생성 배경 위에 SVG 인물 얹기 */
(()=>{
const md=(x,y,s,o={})=>hero(x,y,s,{body:'dress',top:'#F6E2A6',skirt:'#2C6E92',hair:'bun',...o});
const general=(x,y,s,o={})=>hero(x,y,s,{body:'armor',robe:'#B5473A',hat:'helmet',beard:HAIR,...o});
const ship=(x,y,s,c)=>bigShip(x,y,s,c);
/* 김만덕 8: 금강산 */
redraw('kimmandeok',8,()=>SVn(`${bgImg('geumgang')}
  ${md(120,262,.62,{arms:'armsOpen',mood:'joy',face:'right'})}
  ${T(290,40,'와, 금강산이다!',22,K.red)}`,'#F2E6C8'));
/* 이순신 7: 울돌목 */
redraw('yisunsin',7,()=>SVn(`${bgImg('uldol')}
  ${[0,1,2].map(k=>`<g transform="rotate(${18+k*24} ${300+k*24} ${222+k*6})">${ship(300+k*24,222+k*6,.26,'#3A322B')}</g>`).join('')}
  ${[...Array(4)].map((_,k)=>ship(40+k*34,214+(k%2)*8,.26,'#8A5A3C')).join('')}
  ${general(80,288,.8,{arms:'pointR',mood:'joy',face:'right'})}
  ${T(260,40,'아직 열두 척이 남아 있다!',18,K.red)}`,'#3F8FBA'));

const hyB=(x,y,s)=>backView(x,y,s,{robe:'#A7A49B'})+g(x,y,s,kasaL);
const jy=(x,y,s,o={})=>hero(x,y,s,{robe:'#4C8C7A',hat:'gat',belt:K.gold,collar:'#FFF8EC',...o});
const jho=(x,y,s,o={})=>hero(x,y,s,{robe:'#B9A475',hat:'gat',belt:'#5E9C8A',collar:'#FFF8EC',...o});
const ur=(x,y,s,o={})=>hero(x,y,s,{robe:'#EDE3CC',hat:'band',bandColor:'#7A6AA8',belt:'#7A6AA8',beard:'#8A8580',...o});
const gay=(x,y,s)=>g(x,y,s,`<path d="M-90 0 Q-96 -14 -84 -20 L84 -20 Q96 -14 90 0Z" fill="#B5874F" ${sw()}/><rect x="-80" y="-18" width="160" height="10" fill="#C9A15A"/>${[...Array(12)].map((_,k)=>`<path d="M-80 ${-17+k*1.4} L80 ${-17+k*1.4}" stroke="#FFF8EC" stroke-width=".8"/>`).join('')}`);
const notes=(x,y)=>`<path d="M${x} ${y} v-18 l12 -4 v18" fill="none" ${sw(2)}/><circle cx="${x-3}" cy="${y}" r="4" fill="${L}"/><circle cx="${x+9}" cy="${y-4}" r="4" fill="${L}"/>`;
const jh=(x,y,s,o={})=>hero(x,y,s,{robe:'#EDE9E0',hat:'gat',belt:'#3F6FA8',collar:'#3F6FA8',beard:'#E6E1D6',...o});
const sangjeok=(x,y,s,o={})=>hero(x,y,s,{robe:'#7A8C6E',hat:'gat',belt:K.gold,...o});
const farmer2=(x,y,s,o={})=>hero(x,y,s,{robe:'#D6CDB4',skin:'#EDBF95',hat:'band',bandColor:'#FFFDF6',belt:'#8C7350',...o});
const bogo=(x,y,s,o={})=>hero(x,y,s,{robe:'#2C6E92',hat:'band',bandColor:K.gold,belt:K.gold,collar:'#FFF8EC',...o});
const dj=(x,y,s,o={})=>hero(x,y,s,{robe:'#5A4E8A',pattern:'dots',dotColor:K.gold,hat:'feather',belt:K.gold,beard:HAIR,...o});
const walker=(x,y,s,o={})=>hero(x,y,s,{robe:'#D6CDB4',skin:'#EDBF95',hat:'band',bandColor:'#8A6A9E',...o});

/* 혜초 6: 달밤 눈 덮인 고개 */
redraw('hyecho',6,()=>SVn(`${bgImg('nightpass')}${hyB(120,330,1.4)}${T(110,60,'고향 하늘은 어디쯤일까',18,'#F6F0D6')}`,'#1F2748'));
/* 정약용 6: 완성된 수원 화성 */
redraw('jeongyakyong',6,()=>SVn(`${bgImg('hwaseong')}
  ${[...Array(4)].map((_,k)=>backView(40+k*56,300+(k%2)*6,.62,{robe:['#D6CDB4','#4C8C7A'][k%2],hat:['bun','gat'][k%2],pose:'up'})).join('')}
  ${jy(270,282,.62,{arms:'pointL',mood:'joy',face:'left'})}${T(110,40,'수원 화성 완성!',22,K.red)}`,'#BFE0F0'));
/* 김정호 4: 산마루 길을 걷는 김정호 */
redraw('kimjeongho',4,()=>SVn(`${bgImg('ridges')}
  ${jho(236,196,.3,{stance:'walk',arms:'walk',mood:'joy',face:'right'})}
  ${T(110,40,'이 산 너머는 어떻게 생겼을까?',16,K.red)}`,'#F2D6A8'));
/* 우륵 7: 탄금대 바위 위에서 연주 */
redraw('ureuk',7,()=>SVn(`${bgImg('tangeum')}
  ${ur(322,62,.34,{stance:'sit',arms:{L:[-40,-6],R:[30,-4]},mood:'joy',still:true})}${gay(322,74,.42)}
  ${notes(250,60)}${notes(280,40)}${notes(380,50)}${T(90,40,'탄금대',22,K.red)}`,'#CFE7F2'));
/* 김정희 6: 눈 속 소나무 곁의 두 사람 */
redraw('kimjeonghui',6,()=>SVn(`${bgImg('sehan')}
  ${jh(180,250,.78,{mood:'smile',face:'right',arms:'handsDown'})}${sangjeok(250,250,.78,{mood:'smile',face:'left',arms:'holdFront',prop:H=>`<g transform="translate(${(H.L[0]+H.R[0])/2} ${H.L[1]+34})">${bigBook('','#5E7FA8')}</g>`})}
  ${T(200,40,'추울 때 더 푸른 소나무',20,'#3F6FA8')}`,'#EEF2F4'));
/* 광개토대왕 6: 넓은 들판에서 곡식을 거두고 말을 키우는 백성 */
redraw('gwanggaeto',6,()=>SVn(`${bgImg('plain')}
  ${horse(300,168,.3,{color:'#A9714A'})}${horse(350,172,.26,{color:'#F4EFE0'})}${horse(250,164,.24,{color:'#3B2F2A'})}
  ${farmer2(110,286,.82,{arms:'holdFront',prop:H=>`<path d="M${H.L[0]-16} ${H.L[1]-2} q16 16 32 0 v-10 h-32Z" fill="#C9A15A" ${sw(1.4)}/>${[0,1,2].map(k=>`<circle cx="${H.L[0]-8+k*8}" cy="${H.L[1]-12}" r="4" fill="#E9C25A"/>`).join('')}`,mood:'joy',face:'right'})}
  ${hero(210,282,.7,{robe:'#D6CDB4',hair:'braid',arms:'waveR',mood:'joy',face:'right'})}`,'#CFE7F2'));
/* 장보고 5: 섬 위의 청해진과 지키는 배 */
redraw('jangbogo',5,()=>SVn(`${bgImg('cheonghae')}
  ${bigShip(70,236,.55,'#8A5A3C')}${bigShip(340,232,.5,'#8A5A3C')}
  ${bogo(96,231,.26,{arms:'pointR',mood:'joy',face:'right'})}${T(110,50,'바다를 지키는 청해진',18,K.red)}`,'#BFE3F2'));
/* 대조영 3: 눈 덮인 산길을 굽이굽이 넘는 긴 행렬 */
redraw('daejoyeong',3,()=>SVn(`${bgImg('snowpath')}
  ${[[248,178,.16],[236,190,.18],[214,200,.2],[190,212,.23],[160,224,.27],[130,238,.31],[100,252,.36]].map(([x,y,s],k)=>walker(x,y,s,{robe:['#D6CDB4','#5A4E8A','#E9DFC8'][k%3],stance:'walk',arms:'walk',mood:'smile',face:'right'})).join('')}
  ${dj(60,290,.6,{stance:'walk',arms:'pointR',mood:'smile',face:'right'})}`,'#9FB3C8'));
})();
