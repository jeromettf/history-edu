/* 장수왕: 아버지를 기리고 오래오래 나라를 돌본 왕 */
(()=>{
setScene('samguk','autumn','golden');
const js=(x,y,s,o={})=>hero(x,y,s,{robe:'#C9473B',pattern:'dots',dotColor:K.gold,hat:'crown',belt:'#3A2E2A',...o});
const jsOld=(x,y,s,o={})=>js(x,y,s,{beard:'#E6E1D6',robe:'#A9473B',...o});
const prince=(x,y,s,o={})=>hero(x,y,s,{robe:'#C9473B',pattern:'dots',dotColor:K.gold,hair:'topknot',belt:'#3A2E2A',...o});
const gk=(x,y,s,o={})=>hero(x,y,s,{robe:'#4F7DBA',pattern:'dots',dotColor:K.gold,hat:'crown',belt:K.gold,beard:HAIR,...o});
const worker=(x,y,s,o={})=>hero(x,y,s,{robe:'#D6CDB4',skin:'#EDBF95',hat:'band',bandColor:'#FFFDF6',...o});
const bigStele=(x,y,s,id)=>g(x,y,s,`<path d="M-30 0 L-34 -150 Q0 -160 32 -152 L28 0Z" fill="#9E9686" ${sw()}/>${[...Array(7)].map((_,k)=>`<path d="M-24 ${-138+k*18} h48" stroke="#7D7568" stroke-width="2" stroke-dasharray="4 4"/>`).join('')}`);
const P=[
 {kind:'cover', svg:coverBase('js','오래오래 임금님',`${bigStele(300,262,.9)}`,jsOld(130,264,1.0,{arms:'waveR',mood:'joy'})),
  text:`<span class="big">장수왕과 커다란 비석</span><br>위인 그림책 {no}권`},
 {svg:SV(`${palace()}
  ${gk(130,270,.92,{mood:'smile',arms:'pointR',face:'right'})}${prince(270,276,.7,{mood:'joy',face:'left'})}`,'#E6CFAA'),
  text:`광개토대왕에게는 아들 거련이 있었어요. 거련은 아버지가 나라를 넓히는 모습을 보며 자랐어요.`},
 {svg:SV(`${palace()}
  ${js(200,270,.96,{mood:'sad',face:'front',arms:'pray'})}
  ${[0,1,2,3].map(k=>backView(50+k*100,300,.7,{robe:['#D6CDB4','#C9473B'][k%2],hat:['bun','gat'][k%2]})).join('')}`,'#E6CFAA'),
  text:`아버지가 세상을 떠나자 거련이 임금이 되었어요. 새 임금은 생각했어요. "아버지가 하신 일을 오래오래 기억하게 하고 싶어."`},
 {svg:SV(`${hills('#C9C08E','#D8C77A',190,214)}
  <g id="tStele">${bigStele(200,262,1.0)}</g>
  ${worker(90,272,.72,{arms:'carryUp',prop:H=>PROP.stoneUp(H),mood:'sad',face:'right'})}${worker(320,272,.72,{arms:'writeR',prop:H=>`<path d="M${H.R[0]} ${H.R[1]} l-10 -14" stroke="#5A5560" stroke-width="5" stroke-linecap="round"/>`,mood:'o',face:'left'})}`,'url(#js1)',sky('js1','#F2D6A8','#FBEBD0')),
  taps:[{label:'비석',el:'tStele',say:'쿵! 사람 키보다 몇 배나 큰 돌이에요.'},{label:'글자',el:'tStele',say:'돌 네 면에 빼곡하게 아버지가 한 일을 새겼어요.'}],tapHint:'커다란 돌을 눌러 볼까요?',
  text:`장수왕은 사람 키보다 몇 배나 큰 돌을 세우고, 네 면에 아버지가 한 일을 새기게 했어요. 이 비석이 바로 광개토대왕릉비예요.`},
 {chips:['427년'], svg:SVn(`${ridge(150,'#B7CBD3',30,3)}<path d="M-6 180 Q200 170 406 182 L406 290 L-6 290Z" fill="#BCD38F"/>
  <path d="M-6 230 Q200 210 406 236" fill="none" stroke="#6FA8C8" stroke-width="18"/>${townscape(180,6)}
  ${[0,1,2,3,4].map(k=>worker(40+k*34,276-k*4,.4+k*.03,{stance:'walk',arms:'walk',mood:'joy',face:'right'})).join('')}
  ${horse(300,258,.5,{color:'#F4EFE0',rider:rider(js(0,0,1,{mood:'joy',arms:'pointR',face:'right'}))})}`,'url(#js2)',sky('js2','#CFE7F2','#F6EAD0')),
  text:`장수왕은 서울을 남쪽의 평양으로 옮겼어요. 넓은 들과 큰 강이 있는 평양에서 고구려는 더 크고 튼튼해졌어요.`},
 {svg:SV(`${palace()}
  ${jsOld(200,270,.92,{mood:'smile',arms:'armsOpen'})}
  ${hero(70,276,.6,{robe:'#5A5560',hat:'band',bandColor:K.gold,mood:'joy',face:'right',arms:'pray'})}${hero(330,276,.6,{robe:'#8E5A7A',hat:'band',bandColor:'#FFFDF6',mood:'joy',face:'left',arms:'pray'})}`,'#E6CFAA'),
  text:`장수왕은 중국의 여러 나라와 사신을 주고받았어요. 멀리서 온 손님을 맞고, 고구려 사신도 먼 길을 떠났어요.`},
 {svg:SV(`${hills('#C9C08E','#D8C77A',190,214)}
  ${jsOld(200,272,.92,{mood:'joy',arms:'waveR'})}
  ${[0,1,2,3].map(k=>oldKid(60+k*50+(k>1?160:0),276,.56,{mood:'joy',face:k>1?'left':'right'})).join('')}
  ${T(200,80,'아흔여덟 살!',22,K.red)}`,'url(#js3)',sky('js3','#F2D6A8','#FBEBD0')),
  text:`장수왕은 아흔여덟 살까지 살며 79년 동안 나라를 다스렸어요. 그래서 사람들은 '오래 산 임금', 장수왕이라고 불렀어요.`},
 {svg:SV(`<rect x="-6" y="-6" width="412" height="292" fill="#F2EEE4"/><path d="M-6 230 H406 V290 H-6Z" fill="#C9B48A"/>
  ${bigStele(200,230,.9)}
  ${kid(90,282,.8,{mood:'o',arms:'pointR',face:'right'})}${hero(320,282,.8,{body:'dress',hair:'bun',top:'#F2C14E',skirt:'#5B7FB8',mood:'smile',face:'left'})}
  ${T(200,40,'광개토대왕릉비 탁본과 모형',16,K.red)}`,'#F2EEE4'),
  text:`광개토대왕릉비는 지금 중국 지안에 서 있어요. 우리나라 박물관에서는 비석 글자를 그대로 떠낸 탁본과 모형을 볼 수 있어요.`},
 {kind:'end', svg:endBase('js',`${bigStele(200,220,.9)}`,kid(64,276,.5,{arms:'cheer',mood:'joy'}),jsOld(338,276,.55,{arms:'waveR',mood:'joy'})),
  text:`아버지를 기리고 오래오래 나라를 돌본 왕이 남긴 선물,<br>돌에 새긴 이야기.<br>오늘도 우리 곁에 있어요.<br><span class="big">끝</span>`},
 {kind:'talk'}
];
BOOKS.push({id:'jangsu',era:'samguk',title:'장수왕과 커다란 비석',who:'장수왕',teaser:'아버지 광개토대왕의 일을 커다란 돌에 새긴 아들이 있어요.',pages:P,
 talk:{three:['비석은 얼마나 컸지? 팔을 쭉 뻗어 볼까?','장수왕은 몇 살까지 살았지?','할머니 할아버지는 몇 살이실까?'],
  five:['장수왕은 왜 커다란 비석을 세웠을까?','오래 남기고 싶은 우리 가족 이야기는 뭐가 있을까?','멀리서 손님이 오면 어떻게 맞이하면 좋을까?'],
  note:'장수왕(394~491, 재위 413~491)은 광개토대왕의 아들로 고구려의 20대 왕입니다. 414년 광개토대왕릉비를 세웠고(높이 약 6.4m), 427년 수도를 국내성에서 평양으로 옮겼습니다. 중국 남북조의 여러 나라와 외교를 펼쳤고, 475년에는 백제 한성을 함락했습니다. 98세까지 살았다고 전해 장수왕이라는 이름이 붙었습니다. 비석은 중국 지린성 지안시에 있습니다.'}});
})();
