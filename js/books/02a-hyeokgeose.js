/* 박혁거세: 알에서 태어난 신라의 첫 임금 */
(()=>{
setScene('samguk','spring','morning');
const LEG=['전해 오는 이야기'];
const hk=(x,y,s,o={})=>hero(x,y,s,{robe:'#E9C25A',pattern:'dots',dotColor:'#C9473B',hair:'topknot',belt:'#C9473B',...o});
const hkK=(x,y,s,o={})=>hero(x,y,s,{robe:'#E9C25A',pattern:'dots',dotColor:'#C9473B',hat:'crown',belt:'#C9473B',...o});
const aryeong=(x,y,s,o={})=>hero(x,y,s,{body:'dress',top:'#FFF3C4',skirt:'#7FB3C8',hair:'long',...o});
const chief=(x,y,s,c,o={})=>hero(x,y,s,{robe:c,hat:'band',bandColor:'#FFFDF6',belt:'#8C7350',beard:'#E6E1D6',...o});
const CH=['#D6CDB4','#B9A475','#9FC2D8','#C9D8B4','#E9CFC0','#B5874F'];
const redEgg=(x,y,s,id)=>g(x,y,s,`<circle cx="0" cy="-34" r="50" fill="#FFE9A6" opacity=".45"/><ellipse cx="0" cy="-34" rx="26" ry="32" fill="#D9604A" ${sw()}/><path d="M-12 -52 q6 -8 14 -4" fill="none" stroke="#FFFFFF" stroke-width="4" opacity=".5" stroke-linecap="round"/>`);
const well=(x,y,s)=>g(x,y,s,`<ellipse cx="0" cy="0" rx="40" ry="12" fill="#5A6E8A" ${sw()}/><path d="M-40 0 V-26 Q0 -36 40 -26 V0" fill="#B0A898" ${sw()}/><ellipse cx="0" cy="-26" rx="40" ry="10" fill="#3F5A7A" ${sw()}/>`);
const whiteHorse=(x,y,s)=>horse(x,y,s,{color:'#FFFFFF'});
const P=[
 {kind:'cover', svg:coverBase('hk','하늘이 내린 알',`${redEgg(300,250,.9)}`,hkK(140,264,1.0,{arms:'armsOpen',mood:'joy'})),
  text:`<span class="big">박혁거세와 신라의 시작</span><br>위인 그림책 {no}권`},
 {svg:SV(`${hills('#A9CDB4','#BCD38F',196,220)}
  ${[0,1,2,3,4,5].map(k=>chief(40+k*64,270-(k%2)*8,.62,CH[k],{mood:k%2?'o':'smile',face:k<3?'right':'left'})).join('')}
  ${T(200,80,'우리를 이끌어 줄 임금님이 있으면…',16,K.red)}`,'url(#hk1)',sky('hk1','#CFE7F2','#F6EAD0')),
  text:`아주 먼 옛날, 경주 땅에는 여섯 마을이 있었어요. 여섯 마을의 촌장들이 모여 의논했어요. "우리를 이끌어 줄 임금님이 있으면 좋겠어요."`},
 {chips:LEG, svg:SVn(`${rays(200,0,'#FFF2C4',13,320,.4)}${hills('#A9CDB4','#BCD38F',190,214)}
  ${tree(60,226,1.2,'pine')}${tree(350,230,1.1,'round')}
  ${well(170,262,.9)}${whiteHorse(260,252,.62)}
  <g id="tEgg">${redEgg(170,236,.7)}</g>
  ${chief(360,280,.6,CH[0],{mood:'o',face:'left',arms:'pointL'})}`,'url(#hk2)',sky('hk2','#FCE9C2','#CFE7F2')),
  taps:[{label:'붉은 알',el:'tEgg',say:'우물가 숲에서 반짝이는 붉은 알을 찾았어요!'},{label:'흰 말',el:'tEgg',say:'히힝! 흰 말이 무릎을 꿇고 울다가 하늘로 날아올랐대요.'}],tapHint:'우물가를 눌러 볼까요?',
  text:`어느 날, 나정이라는 우물가에서 이상한 빛이 비쳤어요. 가 보니 흰 말 한 마리가 무릎을 꿇고 있고, 그 곁에 커다란 붉은 알이 있었어요.`},
 {chips:LEG, svg:SV(`${hills('#A9CDB4','#BCD38F',190,214)}
  <path d="M150 262 Q148 236 170 228 L178 240 L188 228 L198 242 L206 230 Q222 240 218 262Z" fill="#D9604A" ${sw()}/>
  ${hk(184,254,.5,{mood:'joy',arms:'cheer',still:true})}
  ${chief(60,272,.66,CH[1],{mood:'o',face:'right'})}${chief(330,272,.66,CH[2],{mood:'joy',face:'left',arms:'armsOpen'})}
  ${[0,1,2].map(k=>star(150+k*50,120-k*10,8)).join('')}`,'url(#hk3)',sky('hk3','#FCE9C2','#CFE7F2')),
  text:`알이 톡 깨지더니 사내아이가 나왔어요. 아이 몸에서 빛이 나고, 새와 짐승이 춤을 추었대요. 사람들은 아이 이름을 '혁거세'라고 지었어요. 세상을 밝게 다스린다는 뜻이에요.`},
 {chips:LEG, svg:SV(`${hills('#A9CDB4','#BCD38F',190,214)}
  ${aryeong(250,272,.86,{mood:'smile',face:'left'})}
  <path d="M90 262 Q120 230 150 262Z" fill="#7FB3C8" ${sw()}/>${g(120,250,.7,`<path d="M-20 0 q10 -40 30 -50 q-6 20 6 30" fill="none" stroke="#5E9C5A" stroke-width="5"/>`)}
  ${T(200,80,'알영',22,K.red)}`,'url(#hk4)',sky('hk4','#CFE7F2','#F6EAD0')),
  text:`같은 날, 알영이라는 우물가에서도 여자아이가 태어났어요. 맑은 우물물로 씻어 주니 얼굴이 더욱 고와졌대요.`},
 {chips:['기원전 57년','전해 오는 이야기'], svg:SV(`${palace()}
  ${hkK(200,270,.96,{mood:'joy',arms:'armsOpen'})}${aryeong(290,272,.8,{mood:'smile',face:'left'})}
  ${[0,1,2].map(k=>chief(40+k*44,276,.5,CH[k],{mood:'joy',arms:'cheer',face:'right'})).join('')}`,'#E6CFAA'),
  text:`두 아이는 무럭무럭 자랐어요. 열세 살이 되던 해, 촌장들은 혁거세를 첫 임금으로 모셨어요. 혁거세와 알영은 함께 나라를 다스렸어요. 이 나라가 바로 신라예요.`},
 {svg:SV(`${hills('#A9CDB4','#BCD38F',190,214)}
  ${[...Array(9)].map((_,k)=>`<path d="M${20+k*44} 260 q-2 -14 -8 -20 M${20+k*44} 260 q2 -16 8 -22 M${20+k*44} 260 v-22" fill="none" stroke="#7CA65A" stroke-width="3" stroke-linecap="round"/>`).join('')}
  ${hkK(120,270,.8,{mood:'smile',arms:'pointR',face:'right'})}${aryeong(190,270,.74,{mood:'smile',arms:'waveR',face:'right'})}
  ${hero(290,272,.66,{robe:'#D6CDB4',skin:'#EDBF95',hat:'band',bandColor:'#FFFDF6',arms:'sowR',mood:'joy',face:'left'})}`,'url(#hk5)',sky('hk5','#CFE7F2','#F6EAD0')),
  text:`임금님과 알영은 마을을 돌며 농사짓는 사람들을 살폈어요. 사람들은 두 분을 '두 성인'이라고 부르며 따랐대요.`},
 {svg:SV(`${townscape(170,6)}<path d="M-6 200 H406 V290 H-6Z" fill="#BCD38F"/>
  <path d="M120 250 Q200 170 280 250" fill="#8FB88A" ${sw()}/><path d="M140 250 Q200 190 260 250" fill="none" stroke="#FFFFFF" stroke-width="3" opacity=".4"/>
  ${kid(90,272,.8,{mood:'o',arms:'pointR',face:'right'})}${hero(330,272,.8,{body:'dress',hair:'bun',top:'#F2C14E',skirt:'#5B7FB8',mood:'smile',face:'left'})}
  ${T(200,80,'경주 나정',20,K.red)}`,'url(#hk6)',sky('hk6','#CFE7F2','#F6EAD0')),
  text:`지금도 경주에는 혁거세가 태어났다고 전하는 '나정'이 있어요. 신라는 그 뒤로 천 년 가까이 이어졌어요.`},
 {kind:'end', svg:endBase('hk',`${redEgg(200,200,1.2)}`,kid(64,276,.5,{arms:'cheer',mood:'joy'}),hkK(338,276,.55,{arms:'waveR',mood:'joy'})),
  text:`붉은 알에서 태어난 임금님이 남긴 선물,<br>천 년 나라 신라.<br>그 이야기가 경주에 남아 있어요.<br><span class="big">끝</span>`},
 {kind:'talk'}
];
BOOKS.push({id:'hyeokgeose',era:'samguk',title:'박혁거세와 신라의 시작',who:'박혁거세',teaser:'붉은 알에서 태어나 신라의 첫 임금이 된 혁거세를 만나요.',pages:P,
 talk:{three:['알은 무슨 색이었지?','알에서 나온 아기 흉내 내 볼까? 톡!','흰 말은 어떻게 울었을까?'],
  five:['여섯 마을 사람들은 왜 임금님을 원했을까?','혁거세라는 이름에는 어떤 뜻이 있었지?','너라면 마을 사람들을 위해 무엇을 해 주고 싶어?'],
  note:'박혁거세는 『삼국사기』와 『삼국유사』에 신라의 시조로 기록되어 있으며, 『삼국사기』는 즉위를 기원전 57년으로 적고 있습니다. 나정에서 흰 말 곁의 알로 발견되었다는 이야기, 알영 우물에서 태어난 왕비 알영 이야기는 건국 신화입니다. 경주 나정(사적)은 발굴 조사로 신라 시대 건물터가 확인된 곳입니다.'}});
})();
