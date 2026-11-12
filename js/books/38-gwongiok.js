/* 권기옥: 하늘을 나는 꿈 */
(()=>{
setScene('modern','spring');
const gkKid=(x,y,s,o={})=>hero(x,y,s,{body:'dress',top:'#FFFFFF',skirt:'#2E3440',hair:'braid',ribbon:'#C9473B',...o});
const pilot=(x,y,s,o={})=>person(x,y,s,{robe:'#6E5A3A',pose:o.pose,mood:o.mood,item:o.item,
  deco:`<path d="M-14 -66 L0 -50 L14 -66" fill="#E6E1D6" ${sw(1.6)}/><path d="M-36 -32 Q0 -26 36 -32" fill="none" stroke="#4A3A24" stroke-width="4"/><rect x="-8" y="-46" width="16" height="10" rx="2" fill="${K.gold}" ${sw(1)}/>`,
  front:`<path d="M-32 -94 Q-34 -132 0 -132 Q34 -132 32 -94 Q16 -110 0 -108 Q-16 -110 -32 -94Z" fill="#7A5A3A" ${sw()}/><ellipse cx="-12" cy="-112" rx="10" ry="7" fill="#BFE0F0" ${sw(1.6)}/><ellipse cx="12" cy="-112" rx="10" ry="7" fill="#BFE0F0" ${sw(1.6)}/><path d="M-2 -112 H2" ${sw(2)}/><path d="M28 -96 q10 4 8 20" fill="none" stroke="#FFFFFF" stroke-width="5" stroke-linecap="round"/>`});
const plane=(x,y,s,c='#C9473B')=>g(x,y,s,`<rect x="-36" y="-26" width="64" height="6" rx="3" fill="#E9E4D6" ${sw(1.6)}/><path d="M-22 -20 L-18 -4 M12 -20 L8 -4" ${sw(2)}/><path d="M-48 -4 Q-40 -14 30 -10 Q52 -8 54 2 Q52 12 30 12 Q-30 14 -48 4Z" fill="${c}" ${sw()}/><rect x="-36" y="6" width="64" height="6" rx="3" fill="#E9E4D6" ${sw(1.6)}/><path d="M-48 -4 L-58 -22 L-44 -18 L-40 -6Z" fill="${c}" ${sw(1.4)}/><circle cx="8" cy="-6" r="5" fill="#BFE0F0" ${sw(1)}/><path d="M56 -14 V18" stroke="#5A5560" stroke-width="3" stroke-linecap="round"/><circle cx="54" cy="2" r="3" fill="#3A3A44"/><circle cx="-10" cy="18" r="5" fill="#3A3A44" ${sw(1)}/><circle cx="20" cy="18" r="5" fill="#3A3A44" ${sw(1)}/>`);
const taeguk2=(x,y,s)=>g(x,y,s,`<rect x="-26" y="-18" width="52" height="36" fill="#FFFFFF" ${sw(1.4)}/><g transform="rotate(34)"><path d="M-8 0 A8 8 0 0 1 8 0 A4 4 0 0 0 0 0 A4 4 0 0 1 -8 0Z" fill="#CD2E3A"/><path d="M-8 0 A4 4 0 0 0 0 0 A4 4 0 0 1 8 0 A8 8 0 0 1 -8 0Z" fill="#0047A0"/></g>`);
const P=[
 {kind:'cover', svg:coverBase('gk','하늘을 나는 꿈',`${plane(80,150,.7)}`,pilot(220,264,1.0,{pose:'up',mood:'joy'})),
  text:`<span class="big">권기옥과 하늘을 나는 꿈</span><br>위인 그림책 {no}권`},
 {chips:['1917년'], svg:SV(`${hills('#A9CDB4','#BCD38F',196,222)}
  ${plane(260,80,.8,'#7FB3C8')}<path d="M210 86 Q160 120 120 90 Q90 70 60 100" fill="none" stroke="#FFFFFF" stroke-width="4" stroke-dasharray="6 6"/>
  ${gkKid(130,268,.86,{pose:'up',mood:'o'})}${hero(240,270,.66,{robe:'#EFE6D2',mood:'o'})}${kid(320,272,.6,{mood:'o'})}`,'url(#gk1)',sky('gk1','#BFE0F0','#F6EAD0')),
  text:`방정환 선생님이 어린이날을 만들기 몇 해 전, 평양에서 비행기 곡예 쇼가 열렸어요. 열여섯 살 기옥이는 하늘을 빙글빙글 도는 비행기를 보고 마음먹었어요. "나도 하늘을 날 거야!"`},
 {chips:['1919년'], svg:SV(`${yard(206)}
  ${taeguk2(110,140,1.2)}${taeguk2(300,130,1.2)}
  ${gkKid(200,272,.86,{pose:'up',mood:'joy'})}${hero(90,274,.6,{body:'dress',hair:'bun',mood:'joy',pose:'up'})}${hero(320,274,.6,{robe:'#EFE6D2',mood:'joy',pose:'up'})}`,'#D9CCAE'),
  text:`유관순이 만세를 부르던 1919년, 기옥이도 평양에서 태극기를 들고 만세를 불렀어요. 그 뒤로 나라를 되찾는 일을 돕다가, 일본 경찰을 피해 중국으로 떠났어요.`},
 {svg:SV(`${room()}
  ${gkKid(130,268,.86,{mood:'sad'})}${hero(280,268,.86,{robe:'#5A5560',hat:'band',bandColor:'#3A3A44',beard:HAIR,mood:'o'})}
  ${T(280,90,'여자는 안 된다',18,K.ink)}`,'#ECE5D4'),
  text:`기옥이는 비행 학교에 들어가고 싶었어요. 그런데 "여자는 비행기를 탈 수 없다"며 받아 주지 않았어요. 기옥이는 포기하지 않고 여러 번 찾아가 부탁했어요.`},
 {svg:SV(`${hills('#A9CDB4','#BCD38F',196,222)}
  ${plane(260,206,1.1)}
  ${pilot(110,268,.86,{pose:'up',mood:'joy'})}
  ${T(220,80,'드디어 입학!',22,K.red)}`,'url(#gk4)',sky('gk4','#BFE0F0','#F6EAD0')),
  text:`마침내 중국 윈난의 비행 학교가 문을 열어 주었어요. 기옥이는 남자 학생들 틈에서 누구보다 열심히 연습했어요. 넘어지고 다쳐도 다시 비행기에 올랐지요.`},
 {chips:['1925년'], svg:SV(`${cloud(70,60,.9)}${cloud(320,90,.8)}${cloud(200,40,.6)}
  <g id="tPlane">${plane(200,140,1.6)}${pilot(180,132,.36,{pose:'up',mood:'joy'})}</g>
  <path d="M-6 250 Q200 236 406 250 L406 286 L-6 286Z" fill="#A9CDB4" ${sw()}/>`,'url(#gk5)',sky('gk5','#9FD0EC','#E6F4F8')),
  taps:[{label:'비행기',el:'tPlane',say:'부웅~ 구름 위를 날아요!'}],tapHint:'비행기를 띄워 볼까요?',
  text:`기옥이는 비행 학교를 마치고 진짜 비행사가 되었어요. 우리나라 사람 가운데 첫 번째 여자 비행사예요. 구름 위를 날며 어릴 적 꿈을 이루었어요.`},
 {svg:SV(`${cloud(70,60,.9)}${cloud(320,80,.8)}
  ${plane(220,120,1.2)}
  <path d="M-6 236 Q200 220 406 236 L406 286 L-6 286Z" fill="#A9CDB4" ${sw()}/>
  ${taeguk2(90,210,1.2)}${T(260,220,'나라를 되찾을 거야',18,K.red)}`,'url(#gk6)',sky('gk6','#9FD0EC','#E6F4F8')),
  text:`기옥이는 하늘을 날며 꿈을 하나 더 키웠어요. "비행기로 나라를 되찾는 일을 돕고 싶어!" 그래서 중국에서 비행사로 일하며 독립운동을 도왔어요.`},
 {svg:SV(`${hills('#A9CDB4','#BCD38F',196,222)}
  ${plane(300,90,.7,'#7FB3C8')}
  ${kid(130,266,.96,{pose:'up',mood:'joy'})}${hero(250,266,.92,{body:'dress',hair:'braid',top:'#E98FA0',skirt:'#5B7FB8',pose:'up',mood:'joy'})}`,'url(#gk7)',sky('gk7','#E8F2F8','#F2EED8')),
  text:`지금은 여자도 남자도 누구나 비행기를 조종할 수 있어요. 하늘을 나는 꿈, 바다를 건너는 꿈, 우리 꿈에는 문이 활짝 열려 있어요.`},
 {kind:'end', svg:endBase('gk',`${plane(200,140,2.2)}`,gkKid(64,276,.5,{pose:'up',mood:'joy'}),pilot(338,276,.55,{pose:'up',mood:'joy'})),
  text:`하늘을 올려다보던 소녀가 남긴 선물,<br>포기하지 않고 꾸는 꿈.<br>오늘도 우리 곁에 있어요.<br><span class="big">끝</span>`},
 {kind:'talk'}
];
BOOKS.push({id:'gwongiok',era:'modern',title:'권기옥과 하늘을 나는 꿈',who:'권기옥',teaser:'"여자는 안 된다"는 말에도 포기하지 않고 하늘을 난 사람이 있어요.',pages:P,
 talk:{three:['기옥이가 탄 것은 뭐였지?','비행기 흉내, 부웅~!','하늘에서 내려다보면 뭐가 보일까?'],
  five:['"여자는 안 된다"는 말을 들었을 때 기옥이는 어떤 마음이었을까?','기옥이는 어떻게 꿈을 이루었을까?','너는 어떤 꿈을 꾸고 있어?'],
  note:'권기옥(1901~1988)은 평양에서 태어나 1917년 미국 비행사 아트 스미스의 곡예비행을 보고 비행사의 꿈을 품었습니다. 1919년 3·1 운동에 참여하고 임시정부를 돕다 1920년 중국으로 망명했습니다. 여러 비행 학교에서 거절당한 끝에 임시정부의 추천으로 윈난육군항공학교에 들어가 1925년 졸업하여 우리나라 최초의 여성 비행사가 되었습니다. 중국 공군에서 비행사로 일하며 독립운동을 했고, 1977년 건국훈장 독립장을 받았습니다. 노래에는 나오지 않지만 꿈을 다룬 이야기라 골랐습니다.'}});
})();
