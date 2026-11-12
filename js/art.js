/* 그림 라이브러리: 그림책 질감, 인물, 소품 */
const BOOKS=[];
const K={ink:'#2E3A55',red:'#C9473B',gold:'#E9B24A',jade:'#5E9C8A',wood:'#9A6B45',paper:'#FBF4E2'};
const L='#5A3B2C', SK='#F6D2AE', HAIR='#2E2522';
const sw=(w=2.2)=>`stroke="${L}" stroke-width="${w}" stroke-linejoin="round" stroke-linecap="round"`;
const g=(x,y,s,inner)=>`<g transform="translate(${x} ${y}) scale(${s})">${inner}</g>`;
const sky=(id,a,b)=>`<linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient>`;
const glow=(id,c,o=.8)=>`<radialGradient id="${id}"><stop offset="0" stop-color="${c}" stop-opacity="${o}"/><stop offset="1" stop-color="${c}" stop-opacity="0"/></radialGradient>`;

/* 그림책 질감: 손그림 흔들림, 수채 얼룩, 종이 결, 가장자리 그늘 */
function SV(inner,bg,defs=''){return `<svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg" role="img"><defs>
<filter id="wob" x="-3%" y="-3%" width="106%" height="106%"><feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="2" seed="4"/><feDisplacementMap in="SourceGraphic" scale="3"/></filter>
<filter id="wash" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="0.013" numOctaves="3" seed="9"/><feColorMatrix values="0 0 0 0 0.42  0 0 0 0 0.28  0 0 0 0 0.14  0 0 0 0.32 -0.08"/></filter>
<filter id="grain" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" seed="2"/><feColorMatrix values="0 0 0 0 0.3  0 0 0 0 0.22  0 0 0 0 0.15  0 0 0 0.35 -0.1"/></filter>
<radialGradient id="eggGlow"><stop offset="0" stop-color="#FFF3C4" stop-opacity=".9"/><stop offset="1" stop-color="#FFF3C4" stop-opacity="0"/></radialGradient>
<radialGradient id="vig" cx="50%" cy="48%" r="70%"><stop offset=".62" stop-color="#3B2614" stop-opacity="0"/><stop offset="1" stop-color="#3B2614" stop-opacity=".28"/></radialGradient>
${defs}</defs>
<g filter="url(#wob)"><rect x="-6" y="-6" width="412" height="292" fill="${bg}"/>${inner}</g>
<rect width="400" height="280" filter="url(#wash)" pointer-events="none" style="mix-blend-mode:multiply"/>
<rect width="400" height="280" filter="url(#grain)" pointer-events="none" style="mix-blend-mode:multiply"/>
<rect width="400" height="280" fill="url(#vig)" pointer-events="none"/></svg>`;}

/* 얼굴: 큰 머리, 반짝이는 눈, 눈썹으로 감정 */
function head(m,sk,tear){
  const brows={smile:'M-16 -104 Q-11 -107 -6 -104 M6 -104 Q11 -107 16 -104',joy:'M-16 -105 Q-11 -109 -6 -105 M6 -105 Q11 -109 16 -105',
    sad:'M-17 -101 Q-12 -104 -6 -107 M6 -107 Q12 -104 17 -101',o:'M-16 -109 Q-11 -113 -6 -109 M6 -109 Q11 -113 16 -109',sleep:'M-16 -104 Q-11 -106 -6 -104 M6 -104 Q11 -106 16 -104'}[m];
  const eyes=m==='sleep'?`<path d="M-16 -91 Q-11 -87 -6 -91 M6 -91 Q11 -87 16 -91" fill="none" ${sw(2.6)}/>`:m==='joy'
    ?`<path d="M-16 -91 Q-11 -97 -6 -91 M6 -91 Q11 -97 16 -91" fill="none" ${sw(2.6)}/>`
    :`<ellipse cx="-11" cy="-92" rx="3.8" ry="4.8" fill="${L}"/><ellipse cx="11" cy="-92" rx="3.8" ry="4.8" fill="${L}"/><circle cx="-12.3" cy="-94" r="1.5" fill="#fff"/><circle cx="9.7" cy="-94" r="1.5" fill="#fff"/>`;
  const mouth={smile:`<path d="M-7 -81 Q0 -75 7 -81" fill="none" ${sw()}/>`,
    joy:`<path d="M-9 -82 Q0 -69 9 -82Z" fill="#B5473A" ${sw(2)}/>`,
    sad:`<path d="M-7 -77 Q0 -83 7 -77" fill="none" ${sw()}/>`,
    o:`<ellipse cx="0" cy="-79" rx="4" ry="5.2" fill="#B5473A" ${sw(1.8)}/>`,sleep:`<ellipse cx="0" cy="-79" rx="3" ry="3.4" fill="#B5473A" ${sw(1.5)}/>`}[m];
  return `<circle cx="-30" cy="-91" r="6.5" fill="${sk}" ${sw()}/><circle cx="30" cy="-91" r="6.5" fill="${sk}" ${sw()}/>
<ellipse cx="0" cy="-94" rx="31" ry="29" fill="${sk}" ${sw()}/>
<ellipse cx="-19" cy="-84" rx="6.5" ry="4" fill="#F0907F" opacity=".5"/><ellipse cx="19" cy="-84" rx="6.5" ry="4" fill="#F0907F" opacity=".5"/>
${eyes}<path d="${brows}" fill="none" ${sw(1.9)}/><path d="M-1.8 -87.5 Q0 -85.5 1.8 -87.5" fill="none" ${sw(1.6)}/>${mouth}
${tear?`<path d="M-15 -87 q-4 7 0 10 q4 -3 0 -10Z" fill="#8CC4EA" stroke="#4E83AE" stroke-width="1.2"/>`:''}`;
}
/* 팔: 소매 + 손. down(내림) / hold(가슴 앞에 들기) / up(만세) */
const SL={down:{p:'M-26 -60 Q-45 -46 -46 -24 Q-38 -16 -30 -22 Q-30 -40 -18 -52Z',h:[-39,-19]},
  hold:{p:'M-26 -60 Q-45 -46 -42 -30 Q-36 -22 -28 -27 Q-26 -40 -18 -50Z',h:[-32,-27]},
  up:{p:'M-24 -60 Q-45 -70 -48 -96 Q-40 -103 -33 -95 Q-30 -76 -16 -62Z',h:[-41,-101]}};
const mirror=s=>`${s}<g transform="scale(-1 1)">${s}</g>`;
const sleeves=(pose,c)=>mirror(`<path d="${SL[pose].p}" fill="${c}" ${sw()}/>`);
const hands=(pose,sk)=>mirror(`<circle cx="${SL[pose].h[0]}" cy="${SL[pose].h[1]}" r="6.8" fill="${sk}" ${sw()}/>`);
const ROBE='M-28 -62 Q-36 -30 -44 -4 Q0 6 44 -4 Q36 -30 28 -62 Q0 -72 -28 -62Z';

function person(x,y,s,o){
  const sk=o.skin||SK,pose=o.pose||'down';
  let out=`<ellipse cx="0" cy="1" rx="42" ry="7" fill="#2B1E16" opacity=".18"/>`;
  out+=`<ellipse cx="-13" cy="-3" rx="10" ry="5.5" fill="${o.shoe||'#3B2F2A'}" ${sw()}/><ellipse cx="13" cy="-3" rx="10" ry="5.5" fill="${o.shoe||'#3B2F2A'}" ${sw()}/>`;
  out+=o.body||`<path d="${ROBE}" fill="${o.robe}" ${sw()}/>`;
  out+=`<path d="M8 -66 Q28 -64 29 -60 Q37 -30 44 -4 Q26 3 12 3Z" fill="#2B1E16" opacity=".08"/>`;
  out+=(o.deco||'')+sleeves(pose,o.sleeve||o.robe)+(o.item||'')+hands(pose,sk)+(o.back||'')+head(o.mood||'smile',sk,o.tear)+(o.front||'');
  return g(x,y,s,out);
}
const king=(x,y,s,o={})=>person(x,y,s,{robe:'#C9473B',...o,
  deco:`<path d="M-12 -66 L0 -48 L12 -66" fill="none" stroke="#FFF8EC" stroke-width="5"/><circle cx="0" cy="-45" r="11" fill="${K.gold}" ${sw()}/><path d="M-5 -45 q3 -7 8 -2 q3 4 -2 6 q-4 1 -3 -3" fill="none" stroke="#8A5A12" stroke-width="1.7"/><path d="M-36 -30 Q0 -24 36 -30 L37 -23 Q0 -17 -37 -23Z" fill="#3A2E2A" ${sw()}/><circle cx="-18" cy="-24" r="2.2" fill="${K.gold}"/><circle cx="0" cy="-21" r="2.2" fill="${K.gold}"/><circle cx="18" cy="-24" r="2.2" fill="${K.gold}"/>`,
  back:`<ellipse cx="-30" cy="-128" rx="13" ry="7" fill="#2C2A33" ${sw()} transform="rotate(-22 -30 -128)"/><ellipse cx="30" cy="-128" rx="13" ry="7" fill="#2C2A33" ${sw()} transform="rotate(22 30 -128)"/>`,
  front:`${o.beard?`<path d="M-15 -72 Q0 -42 15 -72 Q0 -64 -15 -72Z" fill="${o.beard}" ${sw(1.6)}/>`:''}<path d="M-32 -98 Q-33 -132 0 -134 Q33 -132 32 -98 Q0 -110 -32 -98Z" fill="#2C2A33" ${sw()}/><path d="M-28 -106 Q0 -116 28 -106" fill="none" stroke="#575466" stroke-width="3"/><path d="M-5 -66 Q0 -59 5 -66Z" fill="${L}"/>`});
const prince=(x,y,s,o={})=>person(x,y,s,{robe:'#4F7DBA',...o,
  deco:`<path d="M-12 -66 L0 -48 L12 -66" fill="none" stroke="#FFF8EC" stroke-width="4.5"/><path d="M-35 -32 Q0 -25 35 -32" fill="none" stroke="#D45A4A" stroke-width="5"/>`,
  back:`<ellipse cx="0" cy="-100" rx="33" ry="30" fill="${HAIR}" ${sw()}/><path d="M26 -84 Q40 -66 33 -48" fill="none" stroke="${HAIR}" stroke-width="7" stroke-linecap="round"/><path d="M33 -50 l-6 10 l10 -2Z" fill="#D45A4A"/>`,
  front:`<circle cx="0" cy="-128" r="9" fill="${HAIR}" ${sw()}/><path d="M-6 -135 l-9 -6 l2 11Z M6 -135 l9 -6 l-2 11Z" fill="#D45A4A" ${sw(1.4)}/><path d="M-31 -98 Q-29 -126 0 -126 Q29 -126 31 -98 Q22 -109 12 -104 Q4 -113 -5 -104 Q-17 -111 -31 -98Z" fill="${HAIR}" ${sw()}/>`});
const farmer=(x,y,s,o={})=>person(x,y,s,{robe:'#EFE6D2',skin:'#EDBF95',...o,
  deco:`<path d="M-35 -32 Q0 -25 35 -32" fill="none" stroke="#B59A6E" stroke-width="4"/><rect x="12" y="-22" width="12" height="11" fill="#DCCDAF" ${sw(1.5)}/>`,
  front:`<ellipse cx="0" cy="-129" rx="7" ry="8" fill="${HAIR}" ${sw()}/><path d="M-31 -100 Q-30 -124 0 -125 Q30 -124 31 -100 Q0 -108 -31 -100Z" fill="${HAIR}" ${sw()}/><path d="M-32 -103 Q0 -113 32 -103 L32 -96 Q0 -106 -32 -96Z" fill="#FFFDF6" ${sw()}/>`});
const woman=(x,y,s,o={})=>person(x,y,s,{sleeve:'#F6E2A6',...o,
  body:`<path d="M-22 -50 Q-36 -30 -46 -4 Q0 6 46 -4 Q36 -30 22 -50Z" fill="#E79AA8" ${sw()}/><path d="M-27 -66 Q0 -74 27 -66 L24 -46 Q0 -42 -24 -46Z" fill="#F6E2A6" ${sw()}/>`,
  deco:`<path d="M0 -50 l-7 18 M0 -50 l5 15" stroke="#C9473B" stroke-width="4" stroke-linecap="round"/><circle cx="0" cy="-50" r="4" fill="#C9473B"/>`,
  back:`<ellipse cx="0" cy="-100" rx="33" ry="29" fill="${HAIR}" ${sw()}/><circle cx="28" cy="-80" r="11" fill="${HAIR}" ${sw()}/><path d="M18 -76 L44 -84" stroke="${K.gold}" stroke-width="3.5" stroke-linecap="round"/>`,
  front:`<path d="M-31 -96 Q-30 -126 0 -126 Q30 -126 31 -96 Q18 -114 0 -116 Q-18 -114 -31 -96Z" fill="${HAIR}" ${sw()}/>`});
const kid=(x,y,s,o={})=>person(x,y,s,{sleeve:'#F2C14E',shoe:'#E0574A',...o,
  body:`<path d="M-24 -30 L-26 -6 L-4 -6 L-2 -24 L2 -24 L4 -6 L26 -6 L24 -30Z" fill="#5B7FB8" ${sw()}/><path d="M-28 -64 Q-32 -46 -30 -28 Q0 -22 30 -28 Q32 -46 28 -64 Q0 -72 -28 -64Z" fill="#F2C14E" ${sw()}/>`,
  deco:`<path d="M0 -52 l3 6 l7 1 l-5 5 l1 7 l-6 -3 l-6 3 l1 -7 l-5 -5 l7 -1Z" fill="#FFF3C4" ${sw(1.4)}/>`,
  back:`<ellipse cx="0" cy="-100" rx="33" ry="30" fill="${HAIR}" ${sw()}/>`,
  front:`<path d="M-31 -96 Q-30 -128 0 -128 Q30 -128 31 -96 Q26 -108 16 -106 Q8 -114 0 -106 Q-10 -114 -16 -106 Q-24 -110 -31 -96Z" fill="${HAIR}" ${sw()}/><path d="M2 -128 Q8 -140 16 -136" fill="none" stroke="${HAIR}" stroke-width="3.5" stroke-linecap="round"/>`});

/* 들고 있는 물건 (인물 기준 좌표) */
const openBook=`<path d="M-34 -42 Q-17 -50 0 -43 Q17 -50 34 -42 L34 -16 Q17 -24 0 -17 Q-17 -24 -34 -16Z" fill="#FFFDF6" ${sw()}/><path d="M0 -43 L0 -17" ${sw(1.6)}/><path d="M-27 -36 Q-16 -40 -6 -36 M-27 -29 Q-16 -33 -6 -29 M6 -36 Q16 -40 27 -36 M6 -29 Q16 -33 27 -29" fill="none" stroke="#C7B79A" stroke-width="1.6"/>`;
const redBook=`<g transform="rotate(-8 0 -32)"><rect x="-30" y="-50" width="60" height="38" rx="3" fill="#C9473B" ${sw()}/><path d="M-22 -50 L-22 -12" stroke="${K.gold}" stroke-width="3"/><rect x="-6" y="-40" width="26" height="12" rx="2" fill="#FBF4E2" ${sw(1.4)}/></g>`;
const paperItem=(txt,font,col)=>`<g transform="rotate(5 0 -34)"><rect x="-34" y="-58" width="68" height="46" rx="3" fill="#FFFDF6" ${sw()}/><text x="0" y="-28" text-anchor="middle" font-family="${font}" font-size="17" fill="${col}">${txt}</text></g>`;
const brush=`<path d="M30 -28 L52 -70" stroke="${K.wood}" stroke-width="5" stroke-linecap="round"/><path d="M26 -20 Q24 -28 30 -30 Q34 -26 31 -18Z" fill="${L}"/>`;
const coverBook=`<rect x="-36" y="-52" width="72" height="50" rx="4" fill="${K.jade}" ${sw()}/><text x="0" y="-20" text-anchor="middle" font-family="Jua,sans-serif" font-size="19" fill="#fff">가나다</text>`;

/* 배경 소품 */
const cloud=(x,y,s=1)=>g(x,y,s,`<path d="M-34 6 Q-40 -8 -24 -10 Q-20 -24 -4 -20 Q6 -32 20 -20 Q36 -22 36 -6 Q44 4 30 8Z" fill="#FFFFFF" opacity=".88" stroke="#E6DCCB" stroke-width="1.5"/>`);
const star=(x,y,r,f=K.gold)=>`<path d="M${x} ${y-r} Q${x+r*.15} ${y-r*.15} ${x+r} ${y} Q${x+r*.15} ${y+r*.15} ${x} ${y+r} Q${x-r*.15} ${y+r*.15} ${x-r} ${y} Q${x-r*.15} ${y-r*.15} ${x} ${y-r}Z" fill="${f}" stroke="${L}" stroke-width="1.2"/>`;
const tufts=(y,xs,c='#7FAE6E')=>xs.map(x=>`<path d="M${x-6} ${y} Q${x-4} ${y-10} ${x-1} ${y} Q${x} ${y-14} ${x+2} ${y} Q${x+5} ${y-9} ${x+7} ${y}" fill="none" stroke="${c}" stroke-width="2" stroke-linecap="round"/>`).join('');
const hut=(x,y)=>`<rect x="${x}" y="${y}" width="64" height="40" fill="#F3E6CB" ${sw()}/><rect x="${x+26}" y="${y+14}" width="13" height="26" rx="2" fill="${K.wood}" ${sw(1.6)}/><rect x="${x+6}" y="${y+12}" width="13" height="12" fill="#E3CFA4" ${sw(1.4)}/><path d="M${x+12.5} ${y+12} V${y+24} M${x+6} ${y+18} H${x+19}" stroke="${L}" stroke-width="1.2"/>
<path d="M${x-12} ${y+6} Q${x-8} ${y-30} ${x+32} ${y-34} Q${x+72} ${y-30} ${x+76} ${y+6} Q${x+32} ${y+12} ${x-12} ${y+6}Z" fill="#D2A85A" ${sw()}/><path d="M${x} ${y-6} Q${x+32} ${y-22} ${x+64} ${y-6} M${x+6} ${y-18} Q${x+32} ${y-30} ${x+58} ${y-18}" fill="none" stroke="#A57F3A" stroke-width="1.6"/>`;
const hj=(x,y,c,r=0)=>`<g transform="rotate(${r} ${x} ${y})"><rect x="${x-17}" y="${y-17}" width="34" height="34" rx="5" fill="#FFFDF6" ${sw()}/><text x="${x}" y="${y+9}" text-anchor="middle" font-size="23" font-family="serif" fill="#3A3330">${c}</text></g>`;
const pine=(x,y,s=1)=>g(x,y,s,`<path d="M0 0 Q-8 -40 4 -82" fill="none" stroke="#8E3A2B" stroke-width="8" stroke-linecap="round"/><path d="M0 -40 Q12 -48 22 -52" fill="none" stroke="#8E3A2B" stroke-width="5" stroke-linecap="round"/><ellipse cx="4" cy="-88" rx="24" ry="10" fill="#2F6B4E" ${sw()}/><ellipse cx="-14" cy="-66" rx="18" ry="8" fill="#2F6B4E" ${sw()}/><ellipse cx="26" cy="-56" rx="16" ry="7" fill="#2F6B4E" ${sw()}/>`);
const T=(x,y,t,sz,f=K.ink,extra='')=>`<text x="${x}" y="${y}" text-anchor="middle" font-family="Jua,sans-serif" font-size="${sz}" fill="${f}" ${extra}>${t}</text>`;
const heart=(x,y,crack)=>`<path d="M${x} ${y+16} Q${x-22} ${y} ${x-16} ${y-8} Q${x-8} ${y-16} ${x} ${y-4} Q${x+8} ${y-16} ${x+16} ${y-8} Q${x+22} ${y} ${x} ${y+16}Z" fill="#E0605A" ${sw()}/>${crack?`<path d="M${x} ${y-4} l-4 7 l6 4 l-3 7" fill="none" stroke="#FFF8EC" stroke-width="2.4" stroke-linecap="round"/>`:''}`;


/* ---------- 2권 장영실: 인물과 소품 ---------- */
const BAND='#4F86C6';
const ysKid=(x,y,s,o={})=>person(x,y,s,{robe:'#CDB98E',...o,
  deco:`<path d="M-12 -66 L0 -50 L12 -66" fill="none" stroke="#F3EAD6" stroke-width="4"/><path d="M-35 -32 Q0 -25 35 -32" fill="none" stroke="#8C7350" stroke-width="3.5"/><rect x="-22" y="-20" width="11" height="10" fill="#B9A475" ${sw(1.4)}/>`,
  back:`<ellipse cx="0" cy="-100" rx="33" ry="30" fill="${HAIR}" ${sw()}/><path d="M26 -84 Q40 -66 33 -48" fill="none" stroke="${HAIR}" stroke-width="7" stroke-linecap="round"/><path d="M33 -50 l-6 10 l10 -2Z" fill="${BAND}"/>`,
  front:`<path d="M-31 -98 Q-29 -126 0 -126 Q29 -126 31 -98 Q20 -110 8 -104 Q0 -112 -8 -104 Q-20 -110 -31 -98Z" fill="${HAIR}" ${sw()}/><path d="M-32 -103 Q0 -113 32 -103 L32 -96 Q0 -106 -32 -96Z" fill="${BAND}" ${sw()}/>`});
const ysMan=(x,y,s,o={})=>person(x,y,s,{robe:'#D9CDAF',...o,
  deco:`<path d="M-12 -66 L0 -50 L12 -66" fill="none" stroke="#F3EAD6" stroke-width="4"/><path d="M-35 -32 Q0 -25 35 -32" fill="none" stroke="#8C7350" stroke-width="3.5"/>`,
  front:`<ellipse cx="0" cy="-129" rx="7" ry="8" fill="${HAIR}" ${sw()}/><path d="M-31 -100 Q-30 -124 0 -125 Q30 -124 31 -100 Q0 -108 -31 -100Z" fill="${HAIR}" ${sw()}/><path d="M-32 -103 Q0 -113 32 -103 L32 -96 Q0 -106 -32 -96Z" fill="${BAND}" ${sw()}/>`});
const ysOfficial=(x,y,s,o={})=>person(x,y,s,{robe:'#4C8C7A',...o,
  deco:`<path d="M-14 -66 Q0 -54 14 -66" fill="none" stroke="#FFF8EC" stroke-width="4"/><rect x="-12" y="-58" width="24" height="22" rx="2" fill="#2F5F55" ${sw(1.6)}/><path d="M-6 -44 Q0 -54 6 -44 M0 -50 L0 -40" fill="none" stroke="${K.gold}" stroke-width="2"/><path d="M-36 -30 Q0 -24 36 -30 L37 -23 Q0 -17 -37 -23Z" fill="#3A2E2A" ${sw()}/>`,
  front:`<path d="M-16 -124 Q0 -148 16 -124Z" fill="#26242C" ${sw()}/><path d="M-30 -100 Q-31 -132 0 -133 Q31 -132 30 -100 Q0 -108 -30 -100Z" fill="#26242C" ${sw()}/><ellipse cx="-44" cy="-114" rx="16" ry="6" fill="#26242C" ${sw()}/><ellipse cx="44" cy="-114" rx="16" ry="6" fill="#26242C" ${sw()}/>`});
const guard=(x,y,s,o={})=>person(x,y,s,{robe:'#7C6FA0',skin:'#EDBF95',...o,
  deco:`<path d="M-35 -32 Q0 -25 35 -32" fill="none" stroke="#3A2E2A" stroke-width="4"/>`,
  front:`<path d="M-31 -100 Q-30 -124 0 -125 Q30 -124 31 -100 Q0 -108 -31 -100Z" fill="${HAIR}" ${sw()}/><path d="M-40 -104 Q0 -112 40 -104 Q30 -98 0 -100 Q-30 -98 -40 -104Z" fill="#26242C" ${sw()}/><path d="M-24 -104 Q-22 -134 0 -136 Q22 -134 24 -104Z" fill="#26242C" ${sw()}/><path d="M18 -126 l14 -10" stroke="#C9473B" stroke-width="3" stroke-linecap="round"/>`});
const toyCart=`<rect x="-30" y="-50" width="60" height="22" rx="3" fill="#C9A15A" ${sw()}/><path d="M-30 -42 H30" stroke="#9A7A3A" stroke-width="1.5"/><circle cx="-18" cy="-24" r="9" fill="${K.wood}" ${sw()}/><circle cx="18" cy="-24" r="9" fill="${K.wood}" ${sw()}/><circle cx="-18" cy="-24" r="2.5" fill="${L}"/><circle cx="18" cy="-24" r="2.5" fill="${L}"/>`;
const hammer=`<path d="M30 -28 L50 -66" stroke="${K.wood}" stroke-width="5" stroke-linecap="round"/><rect x="38" y="-80" width="26" height="13" rx="2" fill="#7D7F88" ${sw()} transform="rotate(-28 51 -73)"/>`;
const bundle=`<path d="M-26 -52 Q0 -62 26 -52 Q32 -24 0 -16 Q-32 -24 -26 -52Z" fill="#C9473B" ${sw()}/><path d="M-8 -58 Q0 -66 8 -58 Q0 -52 -8 -58Z" fill="#C9473B" ${sw()}/><path d="M-18 -40 Q0 -34 18 -40" fill="none" stroke="#F2C9A0" stroke-width="2" stroke-dasharray="3 4"/>`;
const alarm=`<circle cx="-16" cy="-54" r="8" fill="${K.gold}" ${sw()}/><circle cx="16" cy="-54" r="8" fill="${K.gold}" ${sw()}/><circle cx="0" cy="-34" r="22" fill="#E0574A" ${sw()}/><circle cx="0" cy="-34" r="16" fill="#FFFDF6" ${sw(1.6)}/><path d="M0 -34 V-45 M0 -34 L8 -30" ${sw(2)}/>`;
const wheel=(x,y,r)=>`<circle cx="${x}" cy="${y}" r="${r}" fill="none" stroke="${K.wood}" stroke-width="7"/><circle cx="${x}" cy="${y}" r="${r}" fill="none" ${sw(1.4)}/>${[0,45,90,135].map(a=>`<path d="M${x-r*Math.cos(a*Math.PI/180)} ${y-r*Math.sin(a*Math.PI/180)} L${x+r*Math.cos(a*Math.PI/180)} ${y+r*Math.sin(a*Math.PI/180)}" stroke="${K.wood}" stroke-width="3.5"/>`).join('')}<circle cx="${x}" cy="${y}" r="5" fill="${L}"/>`;
const gate=(x,y,s)=>g(x,y,s,`<rect x="-80" y="-60" width="160" height="60" fill="#C2BBAA" ${sw()}/>${[-60,-30,0,30,60].map(c=>`<path d="M${c-15} -40 H${c+15} M${c-15} -20 H${c+15}" stroke="#A39C8A" stroke-width="1.5"/>`).join('')}<path d="M-24 0 V-34 Q0 -56 24 -34 V0Z" fill="#3A2B1E" ${sw()}/><rect x="-62" y="-92" width="124" height="34" fill="#B5473A" ${sw()}/><path d="M-96 -86 Q-60 -104 0 -112 Q60 -104 96 -86 L88 -96 Q50 -122 0 -128 Q-50 -122 -88 -96Z" fill="#4A4A55" ${sw()}/><path d="M-70 -104 Q0 -118 70 -104" fill="none" stroke="#6C6C7A" stroke-width="2"/>`);
const sundial=(x,y,s,live)=>g(x,y,s,`<path d="M-50 0 L50 0 L40 -16 L-40 -16Z" fill="#B9B3A6" ${sw()}/><rect x="-12" y="-38" width="24" height="22" fill="#B9B3A6" ${sw()}/>
<path d="M-60 -46 Q-56 -6 0 -4 Q56 -6 60 -46Z" fill="#8C6B3C" ${sw()}/><path d="M-44 -18 l-6 12 M44 -18 l6 12" ${sw(3)}/>
<ellipse cx="0" cy="-46" rx="60" ry="15" fill="#5E4626" ${sw()}/>
<path d="M-50 -44 Q0 -34 50 -44 M-40 -50 Q0 -42 40 -50 M-30 -56 L-24 -36 M0 -60 L0 -32 M30 -56 L24 -36" fill="none" stroke="#D9B46A" stroke-width="1.2"/>
${live?`<g id="mk0"><text x="-40" y="-40" font-size="14" text-anchor="middle">🐰</text></g><g id="mk1"><text x="0" y="-34" font-size="14" text-anchor="middle">🐴</text></g><g id="mk2"><text x="40" y="-40" font-size="14" text-anchor="middle">🐔</text></g>
<path id="shadow" d="M0 -48 L-36 -44" stroke="#1E140A" stroke-width="3" stroke-linecap="round" opacity=".85"/>`:''}
<path d="M0 -48 L-16 -72" stroke="#D9B46A" stroke-width="2.5" stroke-linecap="round"/>`);
const jagyeokru=()=>`<rect x="24" y="58" width="66" height="42" rx="6" fill="#8A6A44" ${sw()}/><rect x="54" y="106" width="54" height="36" rx="6" fill="#8A6A44" ${sw()}/><rect x="82" y="148" width="46" height="32" rx="6" fill="#8A6A44" ${sw()}/>
<path d="M88 92 Q96 98 96 106 M106 136 Q116 142 116 148 M126 172 Q138 176 142 186" fill="none" stroke="#6FA8D6" stroke-width="3" stroke-linecap="round"/>
<rect x="138" y="80" width="24" height="150" rx="4" fill="#A07B52" ${sw()}/><rect x="166" y="80" width="24" height="150" rx="4" fill="#A07B52" ${sw()}/>
<path d="M150 70 V96 M178 70 V100" stroke="${L}" stroke-width="2.5"/>
<rect x="206" y="78" width="160" height="152" fill="#B5874F" ${sw()}/>
<path d="M190 84 Q286 46 382 84 L374 70 Q286 30 198 70Z" fill="#4A4A55" ${sw()}/>
${[220,268,316].map(x=>`<rect x="${x}" y="94" width="38" height="56" rx="3" fill="#3A2B1E" ${sw()}/><circle cx="${x+19}" cy="128" r="10" fill="${SK}" ${sw(1.4)}/><path d="M${x+9} 122 Q${x+19} 106 ${x+29} 122Z" fill="#C9473B" ${sw(1.4)}/><circle cx="${x+15}" cy="128" r="1.6" fill="${L}"/><circle cx="${x+23}" cy="128" r="1.6" fill="${L}"/>`).join('')}
<g id="inst0"><path d="M226 196 Q226 170 239 168 Q252 170 252 196Z" fill="${K.gold}" ${sw()}/><path d="M239 160 V168" ${sw(2)}/></g>
<g id="inst1"><ellipse cx="287" cy="186" rx="20" ry="16" fill="#C9473B" ${sw()}/><ellipse cx="287" cy="186" rx="12" ry="9" fill="#E07A6E"/></g>
<g id="inst2"><circle cx="335" cy="184" r="17" fill="#E2B85A" ${sw()}/><circle cx="335" cy="184" r="6" fill="#C99A3A" ${sw(1.4)}/></g>
<rect x="196" y="228" width="180" height="10" fill="#7E5B38" ${sw()}/>
<text id="boom" x="300" y="34" text-anchor="middle" font-family="Jua,sans-serif" font-size="30" fill="${K.red}" stroke="#FFF8EC" stroke-width="5" paint-order="stroke"></text>`;
const clockFace=(x,y,r,h=10,m=2)=>{const ang=v=>(v*30-90)*Math.PI/180;return `<circle cx="${x}" cy="${y}" r="${r}" fill="#FFFDF6" ${sw(3)}/><circle cx="${x}" cy="${y}" r="${r-6}" fill="none" stroke="#E2D6BC" stroke-width="2"/>${[12,3,6,9].map(n=>`<text x="${x+(r-16)*Math.cos(ang(n))}" y="${y+(r-16)*Math.sin(ang(n))+r*.09}" text-anchor="middle" font-family="Jua,sans-serif" font-size="${r*.26}" fill="${K.ink}">${n}</text>`).join('')}<path d="M${x} ${y} L${x+r*.45*Math.cos(ang(h))} ${y+r*.45*Math.sin(ang(h))}" ${sw(r*.07)}/><path d="M${x} ${y} L${x+r*.68*Math.cos(ang(m))} ${y+r*.68*Math.sin(ang(m))}" ${sw(r*.045)}/><circle cx="${x}" cy="${y}" r="${r*.06}" fill="${K.red}"/>`};
const sea=(y)=>`<rect x="-6" y="${y}" width="412" height="${290-y}" fill="#6FA8C8"/>${[30,90,150,210,270,330,390].map((x,k)=>`<path d="M${x-18} ${y+16+(k%2)*14} Q${x-9} ${y+6+(k%2)*14} ${x} ${y+16+(k%2)*14} Q${x+9} ${y+6+(k%2)*14} ${x+18} ${y+16+(k%2)*14}" fill="none" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round"/>`).join('')}`;
const gull=(x,y)=>`<path d="M${x-8} ${y} Q${x-4} ${y-5} ${x} ${y} Q${x+4} ${y-5} ${x+8} ${y}" fill="none" ${sw(2)}/>`;


/* ---------- 여러 권에서 함께 쓰는 인물 만들기 ---------- */
const HAT={
  gat:`<ellipse cx="0" cy="-108" rx="48" ry="8" fill="#26242C" opacity=".92" ${sw()}/><path d="M-16 -110 L-14 -136 Q0 -140 14 -136 L16 -110Z" fill="#26242C" ${sw()}/><path d="M-28 -104 Q-30 -80 -24 -66 M28 -104 Q30 -80 24 -66" fill="none" stroke="#26242C" stroke-width="1.6" stroke-dasharray="2 3"/>`,
  feather:`<path d="M-8 -132 Q-30 -146 -44 -168 Q-24 -164 -2 -136Z" fill="#F4EFE0" ${sw(1.6)}/><path d="M-6 -134 Q-26 -150 -40 -164" fill="none" stroke="#C9BBA0" stroke-width="1.2"/><path d="M8 -132 Q30 -146 44 -168 Q24 -164 2 -136Z" fill="#F4EFE0" ${sw(1.6)}/><path d="M6 -134 Q26 -150 40 -164" fill="none" stroke="#C9BBA0" stroke-width="1.2"/><path d="M-24 -112 Q0 -146 24 -112Z" fill="#C9473B" ${sw()}/>`,
  helmet:`<path d="M-34 -98 Q-34 -138 0 -140 Q34 -138 34 -98 Q0 -106 -34 -98Z" fill="#3D3B46" ${sw()}/><path d="M-38 -98 Q0 -108 38 -98 L36 -92 Q0 -101 -36 -92Z" fill="#5B5866" ${sw()}/><path d="M0 -140 V-150" ${sw(3)}/><path d="M0 -150 Q-14 -160 -10 -170 Q0 -164 0 -150 Q0 -164 10 -170 Q14 -160 0 -150Z" fill="#C9473B" ${sw(1.4)}/><path d="M-34 -96 Q-42 -74 -36 -64 L-28 -70 Q-30 -84 -28 -96Z M34 -96 Q42 -74 36 -64 L28 -70 Q30 -84 28 -96Z" fill="#5B5866" ${sw(1.6)}/>`,
  crown:`<path d="M-31 -102 L-31 -118 L-19 -109 L-9 -127 L0 -112 L9 -127 L19 -109 L31 -118 L31 -102 Q0 -110 -31 -102Z" fill="${K.gold}" ${sw()}/><circle cx="0" cy="-108" r="3" fill="#5E9C8A"/>`,
  band:`<path d="M-32 -103 Q0 -113 32 -103 L32 -96 Q0 -106 -32 -96Z" fill="BANDC" ${sw()}/>`
};
function hero(x,y,s,o={}){
  const hair=o.hair||'topknot',hc=o.hairColor||HAIR;let back='',front='';
  if(hair==='topknot'){front=`<ellipse cx="0" cy="-129" rx="7" ry="8" fill="${hc}" ${sw()}/><path d="M-31 -100 Q-30 -124 0 -125 Q30 -124 31 -100 Q0 -108 -31 -100Z" fill="${hc}" ${sw()}/>`}
  if(hair==='braid'){back=`<ellipse cx="0" cy="-100" rx="33" ry="30" fill="${hc}" ${sw()}/><path d="M26 -84 Q40 -66 33 -48" fill="none" stroke="${hc}" stroke-width="7" stroke-linecap="round"/><path d="M33 -50 l-6 10 l10 -2Z" fill="${o.ribbon||'#C9473B'}"/>`;
    front=`<path d="M-31 -98 Q-29 -126 0 -126 Q29 -126 31 -98 Q20 -110 8 -104 Q0 -112 -8 -104 Q-20 -110 -31 -98Z" fill="${hc}" ${sw()}/>`}
  if(hair==='bun'){back=`<ellipse cx="0" cy="-100" rx="33" ry="29" fill="${hc}" ${sw()}/><circle cx="28" cy="-80" r="11" fill="${hc}" ${sw()}/><path d="M18 -76 L44 -84" stroke="${K.gold}" stroke-width="3.5" stroke-linecap="round"/>`;
    front=`<path d="M-31 -96 Q-30 -126 0 -126 Q30 -126 31 -96 Q18 -114 0 -116 Q-18 -114 -31 -96Z" fill="${hc}" ${sw()}/>`}
  if(hair==='long'){back=`<path d="M-33 -104 Q-44 -60 -34 -44 L34 -44 Q44 -60 33 -104 Q0 -132 -33 -104Z" fill="${hc}" ${sw()}/>`;
    front=`<path d="M-31 -96 Q-30 -126 0 -126 Q30 -126 31 -96 Q18 -114 0 -116 Q-18 -114 -31 -96Z" fill="${hc}" ${sw()}/>`}
  if(hair==='bald'){front=''}
  let hat=o.hat?HAT[o.hat].replace('BANDC',o.bandColor||'#4F86C6'):'';
  let bodyS=null;
  if(o.body==='dress') bodyS=`<path d="M-22 -50 Q-36 -30 -46 -4 Q0 6 46 -4 Q36 -30 22 -50Z" fill="${o.skirt||'#E79AA8'}" ${sw()}/><path d="M-27 -66 Q0 -74 27 -66 L24 -46 Q0 -42 -24 -46Z" fill="${o.top||'#F6E2A6'}" ${sw()}/>`;
  if(o.body==='armor') bodyS=`<path d="${ROBE}" fill="${o.robe||'#B5473A'}" ${sw()}/>${[-40,-28,-16].map(yy=>[-18,-6,6,18].map(xx=>`<circle cx="${xx}" cy="${yy}" r="2.2" fill="${K.gold}"/>`).join('')).join('')}<path d="M-30 -62 Q-40 -56 -42 -46 L-26 -48Z M30 -62 Q40 -56 42 -46 L26 -48Z" fill="#5B5866" ${sw(1.6)}/>`;
  let deco=o.deco||'';
  if(o.pattern==='dots') deco=[-50,-36,-22,-10].map((yy,r)=>[-24,-10,4,18].map(xx=>`<circle cx="${xx+(r%2)*6}" cy="${yy}" r="2.6" fill="${o.dotColor||'#FFF8EC'}"/>`).join('')).join('')+deco;
  if(o.belt!==false) deco+=`<path d="M-35 -32 Q0 -25 35 -32" fill="none" stroke="${o.belt||'#8C7350'}" stroke-width="4"/>`;
  if(o.collar!==false) deco=`<path d="M-12 -66 L0 -50 L12 -66" fill="none" stroke="${o.collar||'#FFF8EC'}" stroke-width="4"/>`+deco;
  if(o.beard) front=`<path d="M-15 -72 Q0 -42 15 -72 Q0 -64 -15 -72Z" fill="${o.beard}" ${sw(1.6)}/>`+front;
  return person(x,y,s,{robe:o.robe||'#D9CDAF',skin:o.skin,sleeve:o.sleeve||(o.body==='dress'?(o.top||'#F6E2A6'):undefined),shoe:o.shoe,pose:o.pose,mood:o.mood,tear:o.tear,item:o.item,
    body:bodyS||undefined,deco,back,front:front+hat});
}
const aface=(m,y)=>m==='joy'?`<path d="M-12 ${y} Q-8 ${y-5} -4 ${y} M4 ${y} Q8 ${y-5} 12 ${y}" fill="none" ${sw(2.4)}/>`
  :m==='sleep'?`<path d="M-12 ${y} Q-8 ${y+3} -4 ${y} M4 ${y} Q8 ${y+3} 12 ${y}" fill="none" ${sw(2.4)}/>`
  :`<ellipse cx="-8" cy="${y}" rx="3.4" ry="4.2" fill="${L}"/><ellipse cx="8" cy="${y}" rx="3.4" ry="4.2" fill="${L}"/><circle cx="-9" cy="${y-1.6}" r="1.3" fill="#fff"/><circle cx="7" cy="${y-1.6}" r="1.3" fill="#fff"/>${m==='sad'?`<path d="M-13 ${y-9} L-4 ${y-6} M13 ${y-9} L4 ${y-6}" ${sw(1.8)}/>`:''}`;
function bear(x,y,s,o={}){return g(x,y,s,`<ellipse cx="0" cy="1" rx="40" ry="7" fill="#2B1E16" opacity=".18"/>
<ellipse cx="-16" cy="-6" rx="13" ry="8" fill="#7A4E33" ${sw()}/><ellipse cx="16" cy="-6" rx="13" ry="8" fill="#7A4E33" ${sw()}/>
<ellipse cx="0" cy="-36" rx="34" ry="32" fill="#8A5A3C" ${sw()}/><ellipse cx="0" cy="-30" rx="20" ry="20" fill="#C29468"/>
<ellipse cx="-32" cy="-44" rx="10" ry="15" fill="#8A5A3C" ${sw()} transform="rotate(20 -32 -44)"/><ellipse cx="32" cy="-44" rx="10" ry="15" fill="#8A5A3C" ${sw()} transform="rotate(-20 32 -44)"/>
${o.item||''}
<circle cx="-22" cy="-110" r="11" fill="#8A5A3C" ${sw()}/><circle cx="22" cy="-110" r="11" fill="#8A5A3C" ${sw()}/><circle cx="-22" cy="-110" r="5" fill="#C29468"/><circle cx="22" cy="-110" r="5" fill="#C29468"/>
<circle cx="0" cy="-86" r="30" fill="#8A5A3C" ${sw()}/><ellipse cx="0" cy="-74" rx="15" ry="11" fill="#D9B48A" ${sw(1.6)}/><ellipse cx="0" cy="-80" rx="5" ry="3.6" fill="${L}"/>
${aface(o.mood||'smile',-92)}<path d="M-5 -71 Q0 -67 5 -71" fill="none" ${sw(1.8)}/>`)}
function tiger(x,y,s,o={}){const st=`stroke="#3B2618" stroke-width="3.4" stroke-linecap="round" fill="none"`;return g(x,y,s,`<ellipse cx="0" cy="1" rx="40" ry="7" fill="#2B1E16" opacity=".18"/>
<path d="M28 -20 Q58 -26 54 -62 Q52 -72 60 -76" fill="none" stroke="#E68A3A" stroke-width="9" stroke-linecap="round"/><path d="M50 -40 l8 2 M54 -56 l8 0" ${st}/>
<ellipse cx="-16" cy="-6" rx="13" ry="8" fill="#E68A3A" ${sw()}/><ellipse cx="16" cy="-6" rx="13" ry="8" fill="#E68A3A" ${sw()}/>
<ellipse cx="0" cy="-36" rx="32" ry="31" fill="#E68A3A" ${sw()}/><ellipse cx="0" cy="-30" rx="18" ry="19" fill="#FFF4E2"/>
<path d="M-30 -48 l10 4 M-31 -34 l10 3 M30 -48 l-10 4 M31 -34 l-10 3" ${st}/>
<ellipse cx="-30" cy="-44" rx="10" ry="15" fill="#E68A3A" ${sw()} transform="rotate(20 -30 -44)"/><ellipse cx="30" cy="-44" rx="10" ry="15" fill="#E68A3A" ${sw()} transform="rotate(-20 30 -44)"/>
${o.item||''}
<path d="M-30 -104 L-26 -124 L-12 -112Z M30 -104 L26 -124 L12 -112Z" fill="#E68A3A" ${sw()}/>
<circle cx="0" cy="-88" r="30" fill="#E68A3A" ${sw()}/><path d="M-6 -116 L-4 -104 M0 -118 L0 -106 M6 -116 L4 -104 M-29 -90 l9 2 M-28 -80 l9 0 M29 -90 l-9 2 M28 -80 l-9 0" ${st}/>
<ellipse cx="0" cy="-74" rx="16" ry="11" fill="#FFF4E2" ${sw(1.6)}/><path d="M-5 -81 L5 -81 L0 -76Z" fill="${L}"/>
${aface(o.mood||'smile',-92)}<path d="M-6 -70 Q0 -66 6 -70" fill="none" ${sw(1.8)}/>`)}
function horse(x,y,s,o={}){const c=o.color||'#A9714A',mane=o.mane||'#3B2618';return g(x,y,s,`<ellipse cx="0" cy="1" rx="56" ry="7" fill="#2B1E16" opacity=".18"/>
<path d="M-44 -64 Q-64 -60 -60 -30" fill="none" stroke="${mane}" stroke-width="8" stroke-linecap="round"/>
${[-34,-20,18,32].map(lx=>`<rect x="${lx-5}" y="-46" width="10" height="44" rx="4" fill="${c}" ${sw()}/><rect x="${lx-6}" y="-8" width="12" height="7" rx="2" fill="${L}"/>`).join('')}
${o.rider||''}
<ellipse cx="0" cy="-60" rx="48" ry="24" fill="${c}" ${sw()}/>
<path d="M28 -72 Q40 -100 50 -112 L68 -100 Q56 -82 46 -54Z" fill="${c}" ${sw()}/>
<ellipse cx="66" cy="-106" rx="20" ry="11" fill="${c}" ${sw()} transform="rotate(28 66 -106)"/>
<path d="M50 -116 L54 -130 L60 -114Z" fill="${c}" ${sw()}/><circle cx="64" cy="-110" r="2.6" fill="${L}"/><circle cx="80" cy="-98" r="2" fill="${L}"/>
<path d="M32 -74 Q38 -96 50 -114 Q42 -96 36 -76Z" fill="${mane}" ${sw(1.4)}/>
<path d="M-14 -82 Q0 -86 14 -82 L16 -64 Q0 -60 -16 -64Z" fill="${o.saddle||'#C9473B'}" ${sw()}/>`)}
const rider=(who)=>`<g transform="translate(-4 -54) scale(.82)">${who}</g>`;
const egg=(x,y,s)=>g(x,y,s,`<circle cx="0" cy="-30" r="44" fill="url(#eggGlow)"/><ellipse cx="0" cy="-30" rx="22" ry="28" fill="#FFFBEE" ${sw()}/><circle cx="-6" cy="-40" r="2.4" fill="#E9D8B4"/><circle cx="7" cy="-26" r="2" fill="#E9D8B4"/><circle cx="-3" cy="-18" r="1.6" fill="#E9D8B4"/>`);
const fish=(x,y,c='#F2A24B')=>`<ellipse cx="${x}" cy="${y}" rx="15" ry="8" fill="${c}" ${sw(1.6)}/><path d="M${x+13} ${y} L${x+25} ${y-8} L${x+25} ${y+8}Z" fill="${c}" ${sw(1.6)}/><circle cx="${x-8}" cy="${y-2}" r="1.8" fill="${L}"/>`;
const turtle=(x,y)=>`<ellipse cx="${x-18}" cy="${y}" rx="7" ry="5" fill="#8CB07A" ${sw(1.6)}/><ellipse cx="${x}" cy="${y}" rx="17" ry="9" fill="#5E8C5A" ${sw(1.6)}/><path d="M${x-9} ${y} H${x+9} M${x} ${y-8} V${y+8}" stroke="#3E6640" stroke-width="1.4"/><circle cx="${x-20}" cy="${y-1}" r="1.5" fill="${L}"/>`;
const bow=(x,y,r=1)=>`<path d="M${x} ${y-34*r} Q${x+22*r} ${y} ${x} ${y+34*r}" fill="none" stroke="${K.wood}" stroke-width="${4*r}" stroke-linecap="round"/><path d="M${x} ${y-34*r} L${x} ${y+34*r}" stroke="#F4EFE0" stroke-width="1.4"/>`;
const bowItem=`${bow(40,-40,.9)}`;
const herbBasket=`<path d="M-34 -44 L34 -44 L28 -14 Q0 -8 -28 -14Z" fill="#C9A15A" ${sw()}/><path d="M-30 -36 H30 M-28 -26 H28" stroke="#9A7A3A" stroke-width="1.5"/><path d="M-20 -44 Q-24 -62 -14 -66 M-6 -44 Q-4 -64 6 -68 M10 -44 Q18 -60 26 -60" fill="none" stroke="#5E9C5A" stroke-width="3" stroke-linecap="round"/><circle cx="-14" cy="-66" r="4" fill="#7CB66E"/><circle cx="6" cy="-68" r="4" fill="#E98FA0"/><circle cx="26" cy="-60" r="4" fill="#7CB66E"/>`;
const bigBook=(t,c='#3F6FA8')=>`<rect x="-34" y="-54" width="68" height="46" rx="3" fill="${c}" ${sw()}/><rect x="-24" y="-48" width="48" height="16" fill="#FFFDF6" ${sw(1.4)}/><text x="0" y="-36" text-anchor="middle" font-family="Jua,sans-serif" font-size="12" fill="${K.ink}">${t}</text>`;
const scrollPic=`<rect x="-36" y="-56" width="72" height="48" rx="2" fill="#FFFDF6" ${sw()}/><circle cx="-14" cy="-36" r="6" fill="#E9B24A"/><path d="M-30 -14 Q-14 -36 2 -18 Q14 -30 30 -14" fill="none" stroke="#5E9C5A" stroke-width="3"/>`;
function taeguk(x,y,s,rot=0){const tri=(cx,cy,pat,a)=>`<g transform="rotate(${a} ${cx} ${cy})">${pat.map((solid,k)=>solid?`<rect x="${cx-7}" y="${cy-6+k*4.4}" width="14" height="2.8" fill="#1E1E24"/>`:`<rect x="${cx-7}" y="${cy-6+k*4.4}" width="6" height="2.8" fill="#1E1E24"/><rect x="${cx+1}" y="${cy-6+k*4.4}" width="6" height="2.8" fill="#1E1E24"/>`).join('')}</g>`;
  return g(x,y,s,`<g transform="rotate(${rot})"><path d="M-46 -30 V40" stroke="#8A6A44" stroke-width="4" stroke-linecap="round"/><rect x="-44" y="-30" width="78" height="52" fill="#FFFFFF" ${sw(1.8)}/>
<g transform="translate(-5 -4) rotate(34)"><path d="M-11 0 A11 11 0 0 1 11 0 A5.5 5.5 0 0 0 0 0 A5.5 5.5 0 0 1 -11 0Z" fill="#CD2E3A"/><path d="M-11 0 A5.5 5.5 0 0 0 0 0 A5.5 5.5 0 0 1 11 0 A11 11 0 0 1 -11 0Z" fill="#0047A0"/></g>
${tri(-28,-17,[1,1,1],-56)}${tri(18,9,[0,0,0],-56)}${tri(18,-17,[0,1,0],56)}${tri(-28,9,[1,0,1],56)}</g>`)}
function turtleShip(x,y,s){return g(x,y,s,`<path d="M-90 -8 Q-80 18 0 20 Q80 18 96 -8Z" fill="#8A5A3C" ${sw()}/>${[-60,-36,-12,12,36,60].map(ox=>`<path d="M${ox} 16 L${ox-8} 34" ${sw(3)}/>`).join('')}
<path d="M-80 -8 Q-70 -50 0 -54 Q70 -50 86 -8Z" fill="#4C7A62" ${sw()}/>
<path d="M-60 -30 Q0 -46 66 -30 M-72 -16 Q0 -30 78 -16" fill="none" stroke="#2F5444" stroke-width="2"/>
${[-56,-36,-16,4,24,44,64].map(sx=>`<path d="M${sx-3} ${-40+Math.abs(sx)*.1} l3 -8 l3 8Z" fill="#D9D3C2" ${sw(1)}/>`).join('')}
<path d="M86 -12 Q100 -40 116 -34 Q118 -20 100 -6Z" fill="#C9473B" ${sw()}/><circle cx="108" cy="-30" r="2.6" fill="${L}"/><path d="M104 -22 q6 2 10 -1" stroke="${L}" stroke-width="1.6" fill="none"/>`)}
function bigShip(x,y,s,c='#5A5560'){return g(x,y,s,`<path d="M-50 -6 Q-40 14 0 16 Q40 14 54 -6Z" fill="${c}" ${sw()}/><path d="M0 -6 V-70" ${sw(3)}/><path d="M-30 -66 L30 -66 L26 -14 L-26 -14Z" fill="#E8E2D2" ${sw()}/>`)}
const cave=(x,y,s)=>g(x,y,s,`<path d="M-90 0 Q-90 -90 0 -96 Q90 -90 90 0Z" fill="#8F8A7E" ${sw()}/><path d="M-50 0 Q-50 -58 0 -62 Q50 -58 50 0Z" fill="#3A322B" ${sw()}/><path d="M-80 -40 q10 -8 20 -2 M60 -60 q10 -4 18 4" fill="none" stroke="#6E6A60" stroke-width="2"/>`);
const herb=(x,y,c='#5E9C5A')=>`<path d="M${x} ${y} Q${x-2} ${y-16} ${x-8} ${y-24} M${x} ${y} Q${x+2} ${y-14} ${x+8} ${y-20}" fill="none" stroke="${c}" stroke-width="3" stroke-linecap="round"/><ellipse cx="${x-9}" cy="${y-26}" rx="5" ry="3" fill="${c}"/><ellipse cx="${x+9}" cy="${y-22}" rx="5" ry="3" fill="${c}"/>`;
const garlic=(x,y)=>`<path d="M${x} ${y} Q${x-12} ${y-4} ${x-10} ${y-14} Q${x-4} ${y-22} ${x} ${y-28} Q${x+4} ${y-22} ${x+10} ${y-14} Q${x+12} ${y-4} ${x} ${y}Z" fill="#F7F1E3" ${sw(1.6)}/><path d="M${x} ${y-2} V${y-24}" stroke="#D8CDB4" stroke-width="1.2"/>`;
const stele=(x,y,s)=>g(x,y,s,`<rect x="-26" y="-150" width="52" height="150" rx="6" fill="#9E9686" ${sw()}/>${[-136,-120,-104,-88,-72,-56,-40,-24].map(yy=>`<path d="M-16 ${yy} H-4 M4 ${yy} H16" stroke="#7A7366" stroke-width="2.4" stroke-linecap="round"/>`).join('')}<rect x="-34" y="-6" width="68" height="10" rx="2" fill="#8A8272" ${sw()}/>`);
const ball=(x,y,r=10)=>`<circle cx="${x}" cy="${y}" r="${r}" fill="#F4EFE0" ${sw()}/><path d="M${x-r} ${y} Q${x} ${y-r*.6} ${x+r} ${y} M${x} ${y-r} Q${x+r*.5} ${y} ${x} ${y+r}" fill="none" stroke="#C9473B" stroke-width="1.6"/>`;
const hills=(c1='#A9CDB4',c2='#BCD38F',y1=190,y2=212)=>`<path d="M-6 ${y1} Q120 ${y1-30} 220 ${y1-6} Q320 ${y1-26} 406 ${y1} L406 ${y1+44} L-6 ${y1+44}Z" fill="${c1}" ${sw()}/><path d="M-6 ${y2} Q200 ${y2-10} 406 ${y2} L406 286 L-6 286Z" fill="${c2}" ${sw()}/>`;
const scroll=(t,c=K.paper,tc=K.red,sz=32)=>`<rect x="96" y="22" width="208" height="58" rx="4" fill="${c}" ${sw()}/><rect x="84" y="16" width="16" height="70" rx="8" fill="${K.wood}" ${sw()}/><rect x="300" y="16" width="16" height="70" rx="8" fill="${K.wood}" ${sw()}/>${T(200,62,t,sz,tc)}`;
const coverBase=(id,banner,extra,who)=>SV(`${cloud(66,62)}${cloud(334,46,.8)}<circle cx="200" cy="180" r="140" fill="url(#cg${id})"/>
<path d="M-6 214 Q100 170 200 196 Q300 160 406 206 L406 286 L-6 286Z" fill="#9CC7A8" ${sw()}/><path d="M-6 244 Q120 214 240 238 Q330 218 406 236 L406 286 L-6 286Z" fill="#BCD99C" ${sw()}/>
${scroll(banner,K.paper,K.red,banner.length>6?26:32)}${extra}${star(52,118,9)}${star(350,120,8,'#F28C7C')}${who}`,`url(#cs${id})`,sky('cs'+id,'#BFE0F0','#FCE7C2')+glow('cg'+id,'#FFF6D8',.9));
const endBase=(id,center,left,right)=>SV(`<circle cx="200" cy="136" r="150" fill="url(#eg${id})"/>${center}${star(66,56,14)}${star(334,52,12,'#F28C7C')}${star(110,236,9,K.jade)}${star(290,236,10)}${left}${right}`,`url(#es${id})`,sky('es'+id,'#FBEFD2','#F6DFAE')+glow('eg'+id,'#FFF8DE',.95));
