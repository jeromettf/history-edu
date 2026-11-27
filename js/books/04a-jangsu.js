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
  text:`광개토대왕에게는 아들 거련이 있었어요. 거련은 아버지가 말을 달려 나라를 지키는 모습을 보며 자랐어요.`},
 {svg:SV(`${palace()}
  ${js(200,270,.96,{mood:'sad',face:'front',arms:'pray'})}
  ${[0,1,2,3].map(k=>backView(50+k*100,300,.7,{robe:['#D6CDB4','#C9473B'][k%2],hat:['bun','gat'][k%2]})).join('')}`,'#E6CFAA'),
  text:`아버지가 세상을 떠나자 거련이 임금이 되었어요. 거련은 밤마다 아버지의 붉은 망토를 쓰다듬었어요. "아버지가 하신 일을 오래오래 남기고 싶어."`},
 {svg:SV(`${palace()}
  ${gk(130,270,.92,{mood:'smile',arms:'pointR',face:'right'})}${prince(270,276,.7,{mood:'joy',face:'left'})}`,'#E6CFAA'),
  text:`거련은 산에서 아주 커다란 돌을 찾아냈어요. 백 사람이 밧줄을 당겨도 꿈쩍하지 않았지요. 거련도 소매를 걷고 밧줄을 잡았어요. "영차, 영차!" 돌이 조금씩 움직였어요.`},
 {svg:SV(`${hills('#C9C08E','#D8C77A',190,214)}
  <g id="tStele">${bigStele(200,262,1.0)}</g>
  ${worker(90,272,.72,{arms:'carryUp',prop:H=>PROP.stoneUp(H),mood:'sad',face:'right'})}${worker(320,272,.72,{arms:'writeR',prop:H=>`<path d="M${H.R[0]} ${H.R[1]} l-10 -14" stroke="#5A5560" stroke-width="5" stroke-linecap="round"/>`,mood:'o',face:'left'})}`,'url(#js1)',sky('js1','#F2D6A8','#FBEBD0')),
  taps:[{label:'비석',el:'tStele',say:'쿵! 사람 키보다 몇 배나 큰 돌이에요.'},{label:'글자',el:'tStele',say:'돌 네 면에 빼곡하게 아버지가 한 일을 새겼어요.'}],tapHint:'커다란 돌을 눌러 볼까요?',
  text:`돌을 세우자 석공들이 사다리를 타고 올라갔어요. 똑, 딱, 똑, 딱. 돌 네 면에 아버지가 한 일을 한 글자 한 글자 새겼어요.`},
 {chips:['427년'], svg:SVn(`${ridge(150,'#B7CBD3',30,3)}<path d="M-6 180 Q200 170 406 182 L406 290 L-6 290Z" fill="#BCD38F"/>
  <path d="M-6 230 Q200 210 406 236" fill="none" stroke="#6FA8C8" stroke-width="18"/>${townscape(180,6)}
  ${[0,1,2,3,4].map(k=>worker(40+k*34,276-k*4,.4+k*.03,{stance:'walk',arms:'walk',mood:'joy',face:'right'})).join('')}
  ${horse(300,258,.5,{color:'#F4EFE0',rider:rider(js(0,0,1,{mood:'joy',arms:'pointR',face:'right'}))})}`,'url(#js2)',sky('js2','#CFE7F2','#F6EAD0')),
  text:`몇 해 뒤, 임금님은 도읍을 남쪽 평양으로 옮기기로 했어요. 떠나는 날, 임금님은 비석 앞에 서서 고개를 숙였어요. "아버지, 다녀오겠습니다."`},
 {svg:SV(`${hills('#C9C08E','#D8C77A',190,214)}
  ${jsOld(200,272,.92,{mood:'joy',arms:'waveR'})}
  ${[0,1,2,3].map(k=>oldKid(60+k*50+(k>1?160:0),276,.56,{mood:'joy',face:k>1?'left':'right'})).join('')}
  ${T(200,80,'아흔여덟 살!',22,K.red)}`,'url(#js3)',sky('js3','#F2D6A8','#FBEBD0')),
  text:`임금님은 아흔 살이 넘도록 오래오래 나라를 돌보았어요. 그래서 사람들은 '오래 산 임금', 장수왕이라고 불렀어요.`},
 {kind:'end', svg:endBase('js',`${bigStele(200,220,.9)}`,kid(64,276,.5,{arms:'cheer',mood:'joy'}),jsOld(338,276,.55,{arms:'waveR',mood:'joy'})),
  text:`할아버지가 된 장수왕은 손자의 손을 잡고 비석 앞에 섰어요. "여기 네 증조할아버지 이야기가 있단다."<br><span class="big">끝</span>`},
 {kind:'talk'}
];
BOOKS.push({id:'jangsu',era:'samguk',title:'장수왕과 커다란 비석',who:'장수왕',teaser:'아버지 광개토대왕의 일을 커다란 돌에 새긴 아들이 있어요.',pages:P,now:"광개토대왕릉비는 지금 중국 지안에 서 있어요. 우리나라 박물관에서는 비석 글자를 그대로 떠낸 탁본과 모형을 볼 수 있어요.",
 talk:{three:['비석은 얼마나 컸지? 팔을 쭉 뻗어 볼까?','장수왕은 몇 살까지 살았지?','할머니 할아버지는 몇 살이실까?'],
  five:['장수왕은 왜 커다란 비석을 세웠을까?','오래 남기고 싶은 우리 가족 이야기는 뭐가 있을까?','멀리서 손님이 오면 어떻게 맞이하면 좋을까?'],
  note:'장수왕(394~491, 재위 413~491)은 광개토대왕의 아들로 고구려의 20대 왕입니다. 414년 광개토대왕릉비를 세웠고(높이 약 6.4m), 427년 수도를 국내성에서 평양으로 옮겼습니다. 중국 남북조의 여러 나라와 외교를 펼쳤고, 475년에는 백제 한성을 함락했습니다. 98세까지 살았다고 전해 장수왕이라는 이름이 붙었습니다. 비석은 중국 지린성 지안시에 있습니다.'}});
})();
