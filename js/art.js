/* 그림 라이브러리: 그림책 질감, 인물, 소품 */
const BOOKS=[];
BOOKS.push=function(b){b.scene={era:SCN.era,season:SCN.season,light:SCN.light,book:SCN.book};return Array.prototype.push.call(this,b)};
const REDRAW=[];
function redraw(id,page,fn){REDRAW.push({id,page,fn})}
function applyRedraws(){for(const r of REDRAW){const b=BOOKS.find(x=>x.id===r.id);if(!b||!b.pages[r.page])continue;Object.assign(SCN,b.scene);SCN.n=r.page*7+3;SCN.figs=[];SCN.caps=[];SCN.shotI=0;b.pages[r.page].svg=r.fn();b.pages[r.page].redrawn=true}}
const K={ink:'#2E3A55',red:'#C9473B',gold:'#E9B24A',jade:'#5E9C8A',wood:'#9A6B45',paper:'#FBF4E2'};
const L='#5A3B2C', SK='#F6D2AE', HAIR='#2E2522';
const sw=(w=2.2)=>`stroke="${L}" stroke-width="${w}" stroke-linejoin="round" stroke-linecap="round"`;
const g=(x,y,s,inner)=>`<g transform="translate(${x} ${y}) scale(${s})">${inner}</g>`;
const sky=(id,a,b)=>`<linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient>`;
const glow=(id,c,o=.8)=>`<radialGradient id="${id}"><stop offset="0" stop-color="${c}" stop-opacity="${o}"/><stop offset="1" stop-color="${c}" stop-opacity="0"/></radialGradient>`;

/* 그림책 질감: 손그림 흔들림, 수채 얼룩, 종이 결, 가장자리 그늘 */
function SV(inner,bg,defs=''){const cam=camera(inner);const fx=sceneFX(bg,defs);if(cam)inner=`<g transform="${cam}">${inner}</g>`;return `<svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg" role="img"><defs>
<filter id="wob" x="-3%" y="-3%" width="106%" height="106%"><feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="2" seed="4"/><feDisplacementMap in="SourceGraphic" scale="3"/></filter>
<filter id="wash" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="0.013" numOctaves="3" seed="9"/><feColorMatrix values="0 0 0 0 0.42  0 0 0 0 0.28  0 0 0 0 0.14  0 0 0 0.22 -0.06"/></filter>
<filter id="grain" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" seed="2"/><feColorMatrix values="0 0 0 0 0.3  0 0 0 0 0.22  0 0 0 0 0.15  0 0 0 0.24 -0.08"/></filter>
<radialGradient id="eggGlow"><stop offset="0" stop-color="#FFF3C4" stop-opacity=".9"/><stop offset="1" stop-color="#FFF3C4" stop-opacity="0"/></radialGradient>
<radialGradient id="vig" cx="50%" cy="48%" r="70%"><stop offset=".62" stop-color="#3B2614" stop-opacity="0"/><stop offset="1" stop-color="#3B2614" stop-opacity=".28"/></radialGradient>
${defs}${fx.defs}</defs>
<g filter="url(#wob)"><rect x="-6" y="-6" width="412" height="292" fill="${bg}"/>${inner}${fx.fg}</g>${fx.light}
<rect width="400" height="280" filter="url(#wash)" pointer-events="none" style="mix-blend-mode:multiply"/>
<rect width="400" height="280" filter="url(#grain)" pointer-events="none" style="mix-blend-mode:multiply"/>
<rect width="400" height="280" fill="url(#vig)" pointer-events="none"/>
<rect x="2.5" y="2.5" width="395" height="275" rx="9" fill="none" stroke="#FFF8EC" stroke-width="5" opacity=".5" pointer-events="none"/></svg>`;}

/* 얼굴: 큰 머리, 반짝이는 눈, 눈썹으로 감정 */
function head(m,sk,tear,dx=0){
  const brows={smile:'M-16 -105 Q-11 -108 -6 -105 M6 -105 Q11 -108 16 -105',joy:'M-16 -106 Q-11 -110 -6 -106 M6 -106 Q11 -110 16 -106',
    sad:'M-17 -101 Q-12 -104 -6 -108 M6 -108 Q12 -104 17 -101',o:'M-16 -110 Q-11 -114 -6 -110 M6 -110 Q11 -114 16 -110',sleep:'M-16 -104 Q-11 -106 -6 -104 M6 -104 Q11 -106 16 -104'}[m];
  const eye=(cx)=>`<ellipse cx="${cx}" cy="-92" rx="4.4" ry="5.6" fill="${L}"/><ellipse cx="${cx-1.2}" cy="-94.4" rx="1.9" ry="2.2" fill="#fff"/><circle cx="${cx+1.6}" cy="-89.6" r=".9" fill="#fff"/>`;
  let eyes=m==='sleep'?`<path d="M-16 -91 Q-11 -87 -6 -91 M6 -91 Q11 -87 16 -91" fill="none" ${sw(2.6)}/>`:m==='joy'
    ?`<path d="M-16 -91 Q-11 -98 -6 -91 M6 -91 Q11 -98 16 -91" fill="none" ${sw(2.8)}/>`
    :eye(-11)+eye(11)+(m==='sad'?`<path d="M-16 -96 Q-11 -98 -6 -95 M6 -95 Q11 -98 16 -96" fill="none" ${sw(1.6)}/>`:'');
  const mouth={smile:`<path d="M-7 -81 Q0 -74.5 7 -81" fill="none" ${sw(2.2)}/>`,
    joy:`<path d="M-9 -82 Q0 -68 9 -82Z" fill="#B5473A" ${sw(2)}/><path d="M-5 -76 Q0 -72 5 -76" fill="#F0907F"/>`,
    sad:`<path d="M-7 -77 Q0 -83 7 -77" fill="none" ${sw(2.2)}/>`,
    o:`<ellipse cx="0" cy="-79" rx="4" ry="5.2" fill="#B5473A" ${sw(1.8)}/>`,sleep:`<ellipse cx="0" cy="-79" rx="3" ry="3.4" fill="#B5473A" ${sw(1.5)}/>`}[m];
  const ex=-dx*.6;
  return `<circle cx="${-30+ex}" cy="-91" r="6.5" fill="${sk}" ${sw()}/><path d="M${-31+ex} -94 q-3 3 0 6" fill="none" stroke="#C98F70" stroke-width="1.4"/><circle cx="${30+ex}" cy="-91" r="6.5" fill="${sk}" ${sw()}/><path d="M${31+ex} -94 q3 3 0 6" fill="none" stroke="#C98F70" stroke-width="1.4"/>
<ellipse cx="0" cy="-94" rx="31" ry="29" fill="${sk}" ${sw()}/><path d="M18 -116 Q30 -104 28 -84 Q20 -72 6 -66 Q24 -78 22 -100Z" fill="#C98F70" opacity=".18"/>
<g transform="translate(${dx} 0)"><ellipse cx="-19" cy="-83" rx="7" ry="4.2" fill="#F0907F" opacity=".45"/><ellipse cx="19" cy="-83" rx="7" ry="4.2" fill="#F0907F" opacity=".45"/>
${eyes}<path d="${brows}" fill="none" ${sw(2)}/><path d="M-1 -89 Q1.8 -86.5 0 -85" fill="none" stroke="#B5785A" stroke-width="1.8" stroke-linecap="round"/>${mouth}
${tear?`<path d="M-15 -87 q-4 7 0 10 q4 -3 0 -10Z" fill="#8CC4EA" stroke="#4E83AE" stroke-width="1.2"/>`:''}</g>`;
}
/* 팔: 소매 + 손. down(내림) / hold(가슴 앞에 들기) / up(만세) */
const SL={down:{p:'M-26 -60 Q-45 -46 -46 -24 Q-38 -16 -30 -22 Q-30 -40 -18 -52Z',h:[-39,-19]},
  hold:{p:'M-26 -60 Q-45 -46 -42 -30 Q-36 -22 -28 -27 Q-26 -40 -18 -50Z',h:[-32,-27]},
  up:{p:'M-24 -60 Q-45 -70 -48 -96 Q-40 -103 -33 -95 Q-30 -76 -16 -62Z',h:[-41,-101]}};
const mirror=s=>`${s}<g transform="scale(-1 1)">${s}</g>`;
const sleeves=(pose,c,pr=pose)=>`<path d="${SL[pose].p}" fill="${c}" ${sw()}/><g transform="scale(-1 1)"><path d="${SL[pr].p}" fill="${c}" ${sw()}/></g>`;
const hand1=(h,sk)=>`<ellipse cx="${h[0]}" cy="${h[1]}" rx="6.6" ry="7.2" fill="${sk}" ${sw()}/><ellipse cx="${h[0]+4.4}" cy="${h[1]-3}" rx="2.6" ry="3.4" fill="${sk}" ${sw(1.4)}/>`;
const hands=(pose,sk,pr=pose)=>hand1(SL[pose].h,sk)+`<g transform="scale(-1 1)">${hand1(SL[pr].h,sk)}</g>`;
const ROBE='M-28 -62 Q-36 -30 -44 -4 Q0 6 44 -4 Q36 -30 28 -62 Q0 -72 -28 -62Z';

function person(x,y,s,o){
  if(!(x===0&&y===0)&&SCN.figs){const near=SCN.figs.filter(f=>Math.abs(f.y-y)<6&&Math.abs(f.s-s)<.1&&y<290);if(!o.still&&near.length%2===1&&s<1.2){y-=9*s;s*=.93}SCN.figs.push({x,y,s})}
  const sk=o.skin||SK,pose=o.pose||'down',mood=o.mood||'smile';
  const seed=Math.abs(Math.round(x*7+y*3));
  const dx=o.face==='front'?0:o.face==='left'?-4:o.face==='right'?4:Math.max(-4,Math.min(4,(200-x)/30));
  let pr=o.armR||pose;
  if(!o.armR&&pose==='down'&&!o.item){ if(mood==='joy') pr=seed%2?'up':'hold'; else if(mood==='smile'&&seed%3===0) pr='hold'; }
  const tilt=o.still?0:((seed%5)-2)*2.2, lean=o.still?0:((seed%3)-1)*1.4;
  let out=`<ellipse cx="0" cy="1" rx="44" ry="7" fill="#2B1E16" opacity=".2"/>`;
  out+=`<path d="M-24 -1 Q-25 -10 -13 -9 L-3 -8 Q0 -5 -2 -1Z M24 -1 Q25 -10 13 -9 L3 -8 Q0 -5 2 -1Z" fill="${o.shoe||'#3B2F2A'}" ${sw()}/><path d="M-24 -1 q-4 -4 -2 -7 M24 -1 q4 -4 2 -7" fill="none" ${sw(1.6)}/>`;
  let body=o.body||`<path d="${ROBE}" fill="${o.robe}" ${sw()}/>`;
  body+=`<path d="M6 -66 Q28 -64 29 -60 Q37 -30 44 -4 Q26 3 10 3 Q20 -30 6 -66Z" fill="#2B1E16" opacity=".13"/><path d="M-24 -58 Q-32 -30 -38 -8" fill="none" stroke="#FFFFFF" stroke-width="3" opacity=".22" stroke-linecap="round"/><path d="M-8 -48 Q-12 -28 -16 -6 M10 -44 Q13 -26 18 -6" fill="none" stroke="#2B1E16" stroke-width="1.4" opacity=".2"/><path d="M-42 -8 Q0 2 42 -8" fill="none" stroke="#2B1E16" stroke-width="1.6" opacity=".22"/>`;
  out+=`<g transform="rotate(${lean} 0 0)">`+body+(o.deco||'')+sleeves(pose,o.sleeve||o.robe,pr)+(o.item||'')+hands(pose,sk,pr);
  out+=`<g transform="rotate(${tilt} 0 -70)">`+(o.back||'')+head(mood,sk,o.tear,dx)+(o.front||'')+`<path d="M-20 -118 Q-8 -127 6 -125" fill="none" stroke="#FFFFFF" stroke-width="3" opacity=".3" stroke-linecap="round"/></g></g>`;
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
const T=(x,y,t,sz,f=K.ink,extra='')=>(SCN.caps&&SCN.caps.push({x,y,sz,len:String(t).length}),`<text x="${x}" y="${y}" text-anchor="middle" font-family="Jua,sans-serif" font-size="${sz}" fill="${f}" ${extra||(/^#F[0-9A-F]{5}$|^#FFF/i.test(f)?'':`stroke="#FFF8EC" stroke-width="${Math.max(3,sz*.22)}" stroke-linejoin="round" paint-order="stroke"`)}>${t}</text>`);
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
const scroll=(t,c=K.paper,tc=K.red,sz=32)=>`<rect x="96" y="22" width="208" height="58" rx="4" fill="${c}" ${sw()}/><rect x="84" y="16" width="16" height="70" rx="8" fill="${K.wood}" ${sw()}/><rect x="300" y="16" width="16" height="70" rx="8" fill="${K.wood}" ${sw()}/>${T(200,62,t,sz,tc)}`;
const endBase=(id,center,left,right)=>(SCN.noCam=true,SV(`<circle cx="200" cy="136" r="150" fill="url(#eg${id})"/>${center}${star(66,56,14)}${star(334,52,12,'#F28C7C')}${star(110,236,9,K.jade)}${star(290,236,10)}${left}${right}`,`url(#es${id})`,sky('es'+id,...({spring:['#FCEFEA','#F6DCC8'],summer:['#EAF4F6','#F6E8C8'],autumn:['#FBEBD0','#F2CF9A'],winter:['#EEF3F7','#DCE6EE']}[SCN.season]||['#FBEFD2','#F6DFAE']))+glow('eg'+id,'#FFF8DE',.95)));

/* ---------- 21~30권에서 함께 쓰는 그림 ---------- */
function ox(x,y,s,c='#B9763E',o={}){return g(x,y,s,`<g transform="scale(${o.flip||1} 1)"><ellipse cx="0" cy="1" rx="52" ry="7" fill="#2B1E16" opacity=".18"/>
${[-30,-16,18,32].map(lx=>`<rect x="${lx-5}" y="-40" width="10" height="38" rx="4" fill="${c}" ${sw()}/>`).join('')}
<ellipse cx="0" cy="-52" rx="48" ry="25" fill="${c}" ${sw()}/>
<path d="M-48 -56 Q-62 -50 -60 -34" fill="none" stroke="${c}" stroke-width="5" stroke-linecap="round"/>
<ellipse cx="50" cy="-72" rx="21" ry="19" fill="${c}" ${sw()}/><ellipse cx="60" cy="-62" rx="12" ry="9" fill="#E8C7A8" ${sw(1.6)}/>
<path d="M36 -88 Q26 -102 36 -106 M58 -88 Q68 -102 60 -108" fill="none" stroke="#EDE3CC" stroke-width="5" stroke-linecap="round"/>
<circle cx="48" cy="-76" r="2.8" fill="${L}"/><circle cx="58" cy="-62" r="1.6" fill="${L}"/><circle cx="64" cy="-62" r="1.6" fill="${L}"/></g>`)}
function elephant(x,y,s){return g(x,y,s,`<ellipse cx="0" cy="1" rx="54" ry="7" fill="#2B1E16" opacity=".18"/>${[-30,-12,14,32].map(lx=>`<rect x="${lx-8}" y="-44" width="16" height="44" rx="6" fill="#A7A9B4" ${sw()}/>`).join('')}
<ellipse cx="0" cy="-58" rx="50" ry="32" fill="#A7A9B4" ${sw()}/><circle cx="52" cy="-76" r="24" fill="#A7A9B4" ${sw()}/><ellipse cx="38" cy="-76" rx="16" ry="22" fill="#BFC1CB" ${sw(1.6)}/>
<path d="M70 -66 Q84 -40 76 -18 Q72 -14 68 -20 Q74 -40 62 -60" fill="#A7A9B4" ${sw()}/><circle cx="58" cy="-84" r="2.6" fill="${L}"/><path d="M64 -64 l8 6" stroke="#FFFDF6" stroke-width="4" stroke-linecap="round"/>`)}
function camel(x,y,s){return g(x,y,s,`<ellipse cx="0" cy="1" rx="50" ry="7" fill="#2B1E16" opacity=".18"/>${[-28,-14,14,28].map(lx=>`<rect x="${lx-4}" y="-50" width="8" height="50" rx="3" fill="#D2A464" ${sw()}/>`).join('')}
<ellipse cx="0" cy="-58" rx="40" ry="18" fill="#D2A464" ${sw()}/><path d="M-26 -66 Q-16 -96 -4 -70 Q6 -96 18 -68Z" fill="#D2A464" ${sw()}/>
<path d="M34 -62 Q48 -86 44 -104 L58 -106 Q62 -86 46 -56Z" fill="#D2A464" ${sw()}/><ellipse cx="58" cy="-104" rx="14" ry="8" fill="#D2A464" ${sw()}/><circle cx="56" cy="-108" r="2.2" fill="${L}"/>`)}
const crab=(x,y,s=1,c='#E0574A')=>g(x,y,s,`<ellipse cx="0" cy="0" rx="20" ry="13" fill="${c}" ${sw()}/><path d="M-18 -6 Q-30 -20 -24 -28 M18 -6 Q30 -20 24 -28" fill="none" stroke="${c}" stroke-width="5" stroke-linecap="round"/><path d="M-28 -30 l-6 -6 M-24 -32 l2 -8 M28 -30 l6 -6 M24 -32 l-2 -8" ${sw(2.4)}/>${[-1,1].map(d=>[0,1,2].map(k=>`<path d="M${d*16} ${2+k*4} l${d*12} ${4+k*2}" ${sw(2)}/>`).join('')).join('')}<circle cx="-6" cy="-12" r="2.6" fill="${L}"/><circle cx="6" cy="-12" r="2.6" fill="${L}"/>`);
const riceSack=(x,y,s=1)=>g(x,y,s,`<path d="M-24 0 Q-28 -30 -18 -42 L18 -42 Q28 -30 24 0Z" fill="#E6D3A6" ${sw()}/><path d="M-18 -42 Q0 -50 18 -42" fill="none" stroke="#B59A6E" stroke-width="3"/><path d="M-20 -26 H20 M-22 -12 H22" stroke="#C9B48A" stroke-width="2"/>`);
const orange=(x,y,r=8)=>`<circle cx="${x}" cy="${y}" r="${r}" fill="#F29A2E" ${sw(1.4)}/><path d="M${x} ${y-r} l2 -4" stroke="#5E8C4A" stroke-width="2"/><ellipse cx="${x+4}" cy="${y-r-3}" rx="4" ry="2" fill="#7CA65A"/>`;
const peony=(x,y,s=1,c='#E36B8A')=>g(x,y,s,`<path d="M0 0 V30" stroke="#5E8C4A" stroke-width="3"/><ellipse cx="-12" cy="18" rx="9" ry="4" fill="#7CA65A"/><ellipse cx="12" cy="24" rx="9" ry="4" fill="#7CA65A"/>${[0,60,120,180,240,300].map(a=>`<ellipse cx="${10*Math.cos(a*Math.PI/180)}" cy="${10*Math.sin(a*Math.PI/180)}" rx="10" ry="8" fill="${c}" ${sw(1.2)} transform="rotate(${a} ${10*Math.cos(a*Math.PI/180)} ${10*Math.sin(a*Math.PI/180)})"/>`).join('')}<circle cx="0" cy="0" r="7" fill="#F6B0C2" ${sw(1.2)}/><circle cx="0" cy="0" r="3" fill="${K.gold}"/>`);
const firework=(x,y,r,c)=>`<g>${[0,30,60,90,120,150,180,210,240,270,300,330].map(a=>`<path d="M${x+r*.3*Math.cos(a*Math.PI/180)} ${y+r*.3*Math.sin(a*Math.PI/180)} L${x+r*Math.cos(a*Math.PI/180)} ${y+r*Math.sin(a*Math.PI/180)}" stroke="${c}" stroke-width="3" stroke-linecap="round"/><circle cx="${x+r*1.1*Math.cos(a*Math.PI/180)}" cy="${y+r*1.1*Math.sin(a*Math.PI/180)}" r="2.6" fill="${c}"/>`).join('')}</g>`;
const snowPeaks=(y,c='#9FB3C8')=>`<path d="M-6 ${y} L60 ${y-120} L110 ${y-60} L180 ${y-150} L250 ${y-70} L310 ${y-130} L406 ${y-20} L406 ${y+30} L-6 ${y+30}Z" fill="${c}" ${sw()}/><path d="M42 ${y-90} L60 ${y-120} L78 ${y-92} L68 ${y-98} L60 ${y-88} L52 ${y-98}Z M160 ${y-114} L180 ${y-150} L200 ${y-116} L190 ${y-122} L180 ${y-110} L170 ${y-122}Z M292 ${y-100} L310 ${y-130} L328 ${y-102} L318 ${y-108} L310 ${y-98} L302 ${y-108}Z" fill="#FFFFFF" ${sw(1.4)}/>`;
const queen=(x,y,s,o={})=>hero(x,y,s,{body:'dress',top:'#F6D24A',skirt:'#C9473B',hair:'bun',hat:'crown',...o});

/* ---------- 배경 체계: 시대·계절에 따라 달라지는 풍경 ---------- */
/* 책마다 맨 앞에서 setScene(시대, 계절)을 부르면, 그 책의 들판·궁궐·방·마당·바다·표지가 거기에 맞춰 그려진다. */
const SCN={era:'joseon',season:'spring',n:0,book:0};
function setScene(era,season,light){SCN.era=era;SCN.season=season;SCN.book++;SCN.n=0;SCN.light=light||['morning','noon','golden','soft'][SCN.book%4];SCN.kind='';SCN.shotI=0;SCN.figs=[];SCN.caps=[]}
const srnd=k=>{const v=Math.sin((SCN.book*97+SCN.n*13+k)*12.9898)*43758.5453;return v-Math.floor(v)};
const pickOf=(arr,k)=>arr[Math.floor(srnd(k)*arr.length)];
const SEASON={
  spring:{leaf:['#F4B6C8','#F7C9D6','#EFA3BB'],field:'#C9DE9A',hill:'#A9D0B0',flower:['#F28CA8','#F6D24A','#FFFFFF'],ground:'#C9DE9A'},
  summer:{leaf:['#5E9C6A','#6FAE72','#4E8A5E'],field:'#AFD08A',hill:'#94C2A0',flower:['#F6D24A','#E0574A','#7FB3C8'],ground:'#AFD08A'},
  autumn:{leaf:['#E9973A','#D9603A','#F2B84B'],field:'#D8CF8A',hill:'#C9C08E',flower:['#E9973A','#C9473B','#F2B84B'],ground:'#D8CF8A'},
  winter:{leaf:null,field:'#EEF2F4',hill:'#DCE5EA',flower:null,ground:'#EEF2F4'}};
const isGreen=c=>/^#(A9CDB4|9CC7A8|94BFA6|A9D0B0|B8D3CB|BCD38F|C7D88F|BCD99C|9FC48A|A5CC9F)$/i.test(c);

/* 나무 */
function tree(x,y,s=1,kind){const S=SEASON[SCN.season];kind=kind||pickOf(['round','round','pine','willow'],x);
  if(kind==='pine') return g(x,y,s,`<path d="M0 0 Q-6 -30 2 -64" fill="none" stroke="#8E3A2B" stroke-width="6" stroke-linecap="round"/><ellipse cx="2" cy="-66" rx="20" ry="8" fill="#2F6B4E" ${sw(1.6)}/><ellipse cx="-12" cy="-48" rx="15" ry="7" fill="#2F6B4E" ${sw(1.6)}/><ellipse cx="16" cy="-40" rx="13" ry="6" fill="#2F6B4E" ${sw(1.6)}/>${SCN.season==='winter'?`<path d="M-16 -70 Q2 -78 20 -70 M-24 -51 Q-12 -56 -1 -51" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" fill="none"/>`:''}`);
  if(kind==='willow'&&S.leaf) return g(x,y,s,`<path d="M0 0 Q-4 -30 0 -56" fill="none" stroke="#7A5A3C" stroke-width="6" stroke-linecap="round"/><path d="M0 -56 Q-26 -50 -28 -14 M0 -56 Q-10 -40 -12 -8 M0 -56 Q12 -40 14 -10 M0 -56 Q26 -50 28 -16" fill="none" stroke="${SCN.season==='autumn'?'#C9B04A':'#8CBF6A'}" stroke-width="4" stroke-linecap="round"/>`);
  if(!S.leaf) return g(x,y,s,`<path d="M0 0 V-46 M0 -30 L-16 -50 M0 -38 L14 -56 M-8 -42 L-14 -60 M6 -48 L4 -64" fill="none" stroke="#7A5A3C" stroke-width="3.4" stroke-linecap="round"/><ellipse cx="0" cy="-2" rx="18" ry="4" fill="#FFFFFF" opacity=".9"/>`);
  const c=pickOf(S.leaf,x+3);
  return g(x,y,s,`<path d="M0 0 V-34" stroke="#7A5A3C" stroke-width="6" stroke-linecap="round"/><circle cx="0" cy="-48" r="22" fill="${c}" ${sw(1.6)}/><circle cx="-14" cy="-38" r="14" fill="${c}" ${sw(1.6)}/><circle cx="15" cy="-36" r="13" fill="${c}" ${sw(1.6)}/>${SCN.season==='autumn'?`<circle cx="-6" cy="-54" r="3" fill="#C9473B"/><circle cx="8" cy="-44" r="3" fill="#C9473B"/>`:''}${SCN.season==='spring'?`<circle cx="-8" cy="-52" r="2.4" fill="#FFFFFF"/><circle cx="10" cy="-40" r="2.4" fill="#FFFFFF"/>`:''}`)}

/* 시대마다 먼 풍경에 보이는 것 */
function landmark(x,y,s=1){const e=SCN.era;let o='';
  if(e==='gojoseon') o=`<rect x="-26" y="-30" width="52" height="10" rx="4" fill="#9E9686" ${sw(1.4)}/><rect x="-20" y="-20" width="9" height="20" fill="#8A8272" ${sw(1.2)}/><rect x="11" y="-20" width="9" height="20" fill="#8A8272" ${sw(1.2)}/>`;
  else if(e==='samguk') o=`<path d="M-44 0 Q-30 -26 -14 0Z" fill="#8FB88A" ${sw(1.2)}/><path d="M-16 0 Q4 -34 24 0Z" fill="#8FB88A" ${sw(1.2)}/>${[0,1,2].map(k=>`<rect x="${34+k*2}" y="${-10-k*10}" width="${16-k*4}" height="8" fill="#B9B3A6" ${sw(1)}/><path d="M${30+k*2} ${-10-k*10} h${24-k*4}" ${sw(2)}/>`).join('')}`;
  else if(e==='goryeo') o=`<rect x="-30" y="-16" width="40" height="16" fill="#E8DCC4" ${sw(1.2)}/><path d="M-38 -14 Q-10 -30 18 -14Z" fill="#4A4A55" ${sw(1.2)}/>${[0,1,2,3,4].map(k=>`<path d="M${22+k*1.5} ${-6-k*9} h${20-k*3}" ${sw(2.4)}/><rect x="${25+k*1.5}" y="${-12-k*9}" width="${14-k*3}" height="6" fill="#C9B48A"/>`).join('')}`;
  else if(e==='joseon') o=[[-40,0],[-8,-4],[24,2]].map(([dx,dy],k)=>k===1?`<rect x="${dx-14}" y="${dy-12}" width="28" height="12" fill="#E8DCC4" ${sw(1)}/><path d="M${dx-20} ${dy-10} Q${dx} ${dy-24} ${dx+20} ${dy-10}Z" fill="#4A4A55" ${sw(1)}/>`:`<rect x="${dx-12}" y="${dy-10}" width="24" height="10" fill="#F3E6CB" ${sw(1)}/><path d="M${dx-16} ${dy-8} Q${dx} ${dy-22} ${dx+16} ${dy-8}Z" fill="#D2A85A" ${sw(1)}/>`).join('');
  else if(e==='modern') o=`<rect x="-30" y="-34" width="34" height="34" fill="#B5674A" ${sw(1.2)}/>${[0,1].map(r=>[0,1].map(c=>`<rect x="${-25+c*15}" y="${-29+r*15}" width="9" height="10" fill="#E8F0F4" ${sw(.8)}/>`).join('')).join('')}<path d="M-34 -34 L-13 -46 L8 -34Z" fill="#6A5A5A" ${sw(1)}/><path d="M24 0 V-46 M14 -40 H34 M44 0 V-40 M36 -36 H52" stroke="#6E5A4A" stroke-width="2"/><path d="M24 -40 Q34 -34 44 -36" fill="none" stroke="#5A5560" stroke-width="1"/>`;
  else o=`${[[-34,0],[-6,0]].map(([dx])=>`<rect x="${dx-12}" y="-14" width="24" height="14" fill="#E8E4D6" ${sw(1)}/><path d="M${dx-15} -12 L${dx} -22 L${dx+15} -12Z" fill="#7FA3B8" ${sw(1)}/>`).join('')}<path d="M24 0 V-44 M16 -38 H32" stroke="#6E5A4A" stroke-width="2"/>`;
  return g(x,y,s,o)}

/* 들판: 먼 산, 시대 풍경, 계절 나무, 앞쪽 풀꽃 */
function hills(c1='#A9CDB4',c2='#BCD38F',y1=190,y2=212){SCN.n++;SCN.kind='out';const S=SEASON[SCN.season];
  if(isGreen(c1)) c1=S.hill; if(isGreen(c2)) c2=S.field;
  const v=Math.floor(srnd(1)*4), flip=v%2?-1:1;
  const far=SCN.season==='winter'?'#C9D6DE':'#B7CBD3';
  let o=`<path d="M-6 ${y1+4} L40 ${y1-34} L80 ${y1-14} L130 ${y1-52} L180 ${y1-18} L240 ${y1-44} L300 ${y1-10} L350 ${y1-38} L406 ${y1-6} L406 ${y1+10} L-6 ${y1+10}Z" fill="${far}" opacity=".75" transform="${flip<0?'translate(400 0) scale(-1 1)':''}"/>`;
  if(SCN.season==='winter') o+=`<path d="M122 ${y1-46} L130 ${y1-52} L138 ${y1-44} M232 ${y1-38} L240 ${y1-44} L248 ${y1-36}" stroke="#FFFFFF" stroke-width="4" fill="none" stroke-linecap="round" transform="${flip<0?'translate(400 0) scale(-1 1)':''}"/>`;
  o+=`<path d="M-6 ${y1} Q120 ${y1-30} 220 ${y1-6} Q320 ${y1-26} 406 ${y1} L406 ${y1+44} L-6 ${y1+44}Z" fill="${c1}" ${sw()}/>`;
  if(v!==3) o+=landmark(v===0?96:v===1?304:200, y1-6+(v===2?-4:0), .8);
  const tx=v<2?[22,58,352]:[30,334,378];
  o+=tx.map((x,k)=>tree(x,y1+8+(k%2)*4,.62+srnd(10+k)*.18)).join('');
  if(SCN.season!=='winter'&&v%2===0) o+=`<path d="M${150+v*10} 60 q5 -5 10 0 q5 -5 10 0 M${178+v*10} 48 q4 -4 8 0 q4 -4 8 0" fill="none" ${sw(1.6)}/>`;
  o+=`<path d="M-6 ${y2} Q200 ${y2-10} 406 ${y2} L406 286 L-6 286Z" fill="${c2}" ${sw()}/>`;
  if(SCN.season==='winter') o+=`<path d="M-6 ${y1+2} Q60 ${y1-10} 120 ${y1-6} Q90 ${y1+4} -6 ${y1+8}Z M260 ${y1-12} Q320 ${y1-16} 406 ${y1-2} L406 ${y1+6} Q330 ${y1-4} 260 ${y1-8}Z" fill="#FFFFFF" opacity=".9"/>`;
  const fy=y2+16, fl=S.flower;
  o+=[14,48,88,312,352,388].map((x,k)=>{const yy=fy+((k*7)%3)*12+20;
    if(fl&&k%2===0) return `<g>${[0,1,2,3,4].map(a=>`<circle cx="${x+5*Math.cos(a*1.26)}" cy="${yy-8+5*Math.sin(a*1.26)}" r="3" fill="${fl[k%fl.length]}"/>`).join('')}<circle cx="${x}" cy="${yy-8}" r="2" fill="${K.gold}"/><path d="M${x} ${yy-4} V${yy+4}" stroke="#5E8C4A" stroke-width="1.6"/></g>`;
    if(SCN.season==='autumn') return `<ellipse cx="${x}" cy="${yy}" rx="5" ry="2.6" fill="${pickOf(SEASON.autumn.leaf,k)}" transform="rotate(${k*30} ${x} ${yy})"/>`;
    if(SCN.season==='winter') return `<ellipse cx="${x}" cy="${yy}" rx="14" ry="4" fill="#FFFFFF" opacity=".8"/>`;
    return `<ellipse cx="${x}" cy="${yy+2}" rx="7" ry="4" fill="#B9B3A6" ${sw(1.2)}/>`}).join('');
  return o}

/* 바다: 수평선의 섬, 반짝임, 물결 */
function sea(y){SCN.n++;SCN.kind='sea';const v=Math.floor(srnd(2)*3);
  let o=`<rect x="-6" y="${y}" width="412" height="${290-y}" fill="#6FA8C8"/><rect x="-6" y="${y+40}" width="412" height="${250-y}" fill="#5B97BA" opacity=".6"/>`;
  if(v!==2) o+=`<path d="M${v?300:20} ${y+1} Q${v?330:50} ${y-16} ${v?360:80} ${y+1}Z M${v?345:65} ${y+1} Q${v?362:82} ${y-9} ${v?380:100} ${y+1}Z" fill="#7FA88E" ${sw(1.2)}/>`;
  o+=`<path d="M-6 ${y} H406" stroke="#FFFFFF" stroke-width="2" opacity=".6"/>`;
  o+=[30,90,150,210,270,330,390].map((x,k)=>`<path d="M${x-18} ${y+16+(k%2)*14} Q${x-9} ${y+6+(k%2)*14} ${x} ${y+16+(k%2)*14} Q${x+9} ${y+6+(k%2)*14} ${x+18} ${y+16+(k%2)*14}" fill="none" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round"/>`).join('');
  o+=[60,140,250,330].map((x,k)=>`<path d="M${x} ${y+50+k%2*22} h${10+k*2}" stroke="#E8F4FA" stroke-width="2" stroke-linecap="round" opacity=".8"/>`).join('');
  return o}

/* 궁궐: 단청 들보, 기둥과 주춧돌, 뒤 배경(일월오봉도·창살문·모란 병풍), 마루 */
function palace(back=true){SCN.n++;SCN.kind='palace';const v=Math.floor(srnd(3)*3);
  const wall=SCN.era==='samguk'?'#E6CFAA':SCN.era==='goryeo'?'#EAD8B4':'#E8D3B0';
  let o=`<rect x="-6" y="-6" width="412" height="232" fill="${wall}"/>`;
  if(!back){}
  else if(v===0) o+=`<rect x="108" y="40" width="184" height="150" fill="#27467A" ${sw()}/><circle cx="134" cy="66" r="11" fill="#D9442F"/><circle cx="266" cy="66" r="10" fill="#F6F1E1"/><path d="M112 186 L140 120 L160 152 L186 92 L200 70 L214 92 L240 152 L260 120 L288 186Z" fill="#3F8471" ${sw(1.4)}/><path d="M112 186 Q150 170 200 182 Q250 170 288 186 L288 190 L112 190Z" fill="#2C6E92"/><rect x="100" y="186" width="200" height="12" fill="#8A5A3C" ${sw(1.2)}/>`;
  else if(v===1) o+=[60,130,200,270].map(x=>`<rect x="${x}" y="44" width="68" height="160" fill="#F7F0DC" ${sw(1.6)}/>${[1,2,3].map(c=>`<path d="M${x+c*17} 44 V204" stroke="#B5874F" stroke-width="1.6"/>`).join('')}${[1,2,3,4,5,6,7].map(r=>`<path d="M${x} ${44+r*20} H${x+68}" stroke="#B5874F" stroke-width="1.6"/>`).join('')}`).join('');
  else o+=[0,1,2,3,4,5].map(k=>`<rect x="${74+k*42}" y="92" width="42" height="112" fill="${k%2?'#F4EAD0':'#FBF3DE'}" ${sw(1.6)}/>`).join('')+[95,179,263].map((x,k)=>`<path d="M${x} 196 Q${x-4} 160 ${x+4} 130" fill="none" stroke="#5E8C4A" stroke-width="2.4"/><circle cx="${x+4}" cy="126" r="9" fill="${['#E36B8A','#F2A9C0','#E36B8A'][k]}" ${sw(1.2)}/><circle cx="${x-6}" cy="150" r="6" fill="#F2A9C0" ${sw(1)}/>`).join('');
  o+=`<rect x="-6" y="-6" width="412" height="30" fill="#3E7A6A"/>`+[0,1,2,3,4,5,6,7,8,9,10,11,12,13].map(k=>`<circle cx="${k*30+8}" cy="9" r="7" fill="#C9473B" ${sw(1)}/><circle cx="${k*30+8}" cy="9" r="3" fill="#F6E2A6"/><path d="M${k*30+18} 4 l6 5 l-6 5" fill="none" stroke="#F6F0D6" stroke-width="1.6"/>`).join('')+`<rect x="-6" y="22" width="412" height="5" fill="#B5473A"/>`;
  o+=[14,364].map(x=>`<rect x="${x}" y="-6" width="22" height="226" fill="#B5473A" ${sw()}/><path d="M${x+5} 30 V214" stroke="#D16A5A" stroke-width="2"/><rect x="${x-6}" y="212" width="34" height="12" rx="3" fill="#B9B3A6" ${sw(1.4)}/>`).join('');
  o+=`<rect x="-6" y="222" width="412" height="64" fill="#A87E52"/>${[236,252,270].map(yy=>`<path d="M-6 ${yy} H406" stroke="#8E6640" stroke-width="1.6"/>`).join('')}${[60,140,220,300,380].map((x,k)=>`<path d="M${x+(k%2)*20} 222 V236 M${x-30} 236 V252 M${x+10} 252 V270" stroke="#8E6640" stroke-width="1.4"/>`).join('')}<path d="M-6 222 H406" stroke="${L}" stroke-width="2"/>`;
  return o}

/* 방: 창호문, 족자, 장판, 문갑. 100여 년 전부터는 유리창과 책상 */
function room(){SCN.n++;SCN.kind='room';const v4=Math.floor(srnd(4)*4), v=v4%2, modern=SCN.era==='modern'||SCN.era==='hyeondae';
  let o='';
  if(modern){
    o+=`<rect x="-6" y="-6" width="412" height="226" fill="#ECE5D4"/>${[0,1,2,3,4,5,6,7,8,9,10].map(k=>`<path d="M${k*40} -6 V216" stroke="#E2D8C2" stroke-width="10"/>`).join('')}`;
    if(v4>=2){const bx=v?270:30;
      o+=`<rect x="${bx}" y="40" width="100" height="176" fill="#9A6B45" ${sw()}/>${[0,1,2,3].map(r=>`<rect x="${bx+6}" y="${48+r*42}" width="88" height="36" fill="#7A5236"/>${[0,1,2,3,4,5].map(c=>`<rect x="${bx+10+c*14}" y="${52+r*42+(c%3)*3}" width="11" height="${32-(c%3)*3}" fill="${['#C9473B','#3F6FA8','#E9B24A','#5E9C8A','#7A6AA8','#F2F0E6'][(c+r)%6]}" ${sw(.8)}/>`).join('')}`).join('')}`;
      const cx2=v?120:300; o+=`<circle cx="${cx2}" cy="70" r="22" fill="#FFFDF6" stroke="#8A6A44" stroke-width="5"/><path d="M${cx2} 70 V56 M${cx2} 70 L${cx2+10} 74" ${sw(2.4)}/><path d="M${cx2} 92 V118" stroke="#8A6A44" stroke-width="2"/><circle cx="${cx2}" cy="120" r="6" fill="${K.gold}" ${sw(1.2)}/>`;
      o+=`<rect x="-6" y="216" width="412" height="70" fill="#B98A5A"/>${[0,1,2,3,4,5,6,7,8,9].map(k=>`<path d="M${k*44} 216 L${k*44-20} 286" stroke="#9A6E44" stroke-width="1.6"/>`).join('')}<path d="M-6 216 H406" stroke="${L}" stroke-width="2"/>`;
      return o}
    const wx=v?250:40;
    o+=`<rect x="${wx}" y="44" width="110" height="96" fill="#CFE6F2" stroke="#8A6A44" stroke-width="6"/><path d="M${wx+55} 44 V140 M${wx} 92 H${wx+110}" stroke="#8A6A44" stroke-width="3"/><path d="M${wx-10} 38 Q${wx+6} 90 ${wx-6} 150 L${wx-16} 150 L${wx-16} 38Z M${wx+120} 38 Q${wx+104} 90 ${wx+116} 150 L${wx+126} 150 L${wx+126} 38Z" fill="#E9A3A0" ${sw(1.4)}/>`;
    o+=`<rect x="-6" y="216" width="412" height="70" fill="#B98A5A"/>${[0,1,2,3,4,5,6,7,8,9].map(k=>`<path d="M${k*44} 216 L${k*44-20} 286" stroke="#9A6E44" stroke-width="1.6"/>`).join('')}<path d="M-6 216 H406" stroke="${L}" stroke-width="2"/>`;
    const dx=v?24:316;
    o+=`<rect x="${dx}" y="176" width="64" height="8" fill="#8A5A3C" ${sw(1.2)}/><path d="M${dx+6} 184 V214 M${dx+58} 184 V214" ${sw(3)}/>${[0,1,2].map(k=>`<rect x="${dx+8+k*4}" y="${168-k*8}" width="40" height="8" fill="${['#3F6FA8','#C9473B','#5E9C8A'][k]}" ${sw(1)}/>`).join('')}`;
    return o}
  o+=`<rect x="-6" y="-6" width="412" height="226" fill="#EADCC0"/><rect x="-6" y="196" width="412" height="20" fill="#E0CCA8"/><path d="M-6 196 H406" stroke="#B5874F" stroke-width="2"/>`;
  if(v4===2){o+=`${[0,1,2,3,4,5,6,7].map(k=>`<rect x="${40+k*40}" y="70" width="40" height="126" fill="${k%2?'#F4EAD0':'#FBF3DE'}" ${sw(1.6)}/><path d="M${50+k*40} 180 Q${58+k*40} ${150-(k%3)*12} ${60+k*40} ${120-(k%3)*10}" fill="none" stroke="#5E8C4A" stroke-width="2"/><circle cx="${60+k*40}" cy="${116-(k%3)*10}" r="5" fill="${['#E36B8A','#F2B84B','#7FB3C8'][k%3]}"/>`).join('')}<rect x="-6" y="216" width="412" height="70" fill="#DDB16A"/>${[0,1,2,3,4,5,6,7,8,9,10].map(k=>`<path d="M${k*40} 216 V286" stroke="#CFA05A" stroke-width="1.6"/>`).join('')}<path d="M-6 216 H406" stroke="${L}" stroke-width="2"/>`;return o}
  if(v4===3){o+=`<circle cx="${v?110:290}" cy="90" r="44" fill="#F7F0DC" stroke="#8A6A44" stroke-width="5"/>${[-1,0,1].map(d=>`<path d="M${(v?110:290)+d*20} 48 V132 M${(v?110:290)-44} ${90+d*20} H${(v?110:290)+44}" stroke="#B5874F" stroke-width="1.6"/>`).join('')}`;
    const bx=v?250:40; o+=`<rect x="${bx}" y="60" width="110" height="136" fill="#9A6B45" ${sw()}/>${[0,1,2].map(r=>`<rect x="${bx+6}" y="${66+r*44}" width="98" height="38" fill="#B98A5A" ${sw(1)}/><rect x="${bx+14}" y="${74+r*44}" width="${30+r*10}" height="10" fill="${['#3F6FA8','#5E9C8A','#C9A15A'][r]}" ${sw(.8)}/><ellipse cx="${bx+80}" cy="${92+r*44}" rx="10" ry="12" fill="#EDE3CC" ${sw(1)}/>`).join('')}<rect x="-6" y="216" width="412" height="70" fill="#DDB16A"/>${[0,1,2,3,4,5,6,7,8,9,10].map(k=>`<path d="M${k*40} 216 V286" stroke="#CFA05A" stroke-width="1.6"/>`).join('')}<path d="M-6 216 H406" stroke="${L}" stroke-width="2"/>`;return o}
  const dx=v?272:30;
  o+=`<rect x="${dx}" y="36" width="98" height="160" fill="#F7F0DC" stroke="#8A6A44" stroke-width="5"/>`+[1,2,3].map(c=>`<path d="M${dx+c*24.5} 36 V196" stroke="#B5874F" stroke-width="1.6"/>`).join('')+[1,2,3,4,5,6,7].map(r=>`<path d="M${dx} ${36+r*20} H${dx+98}" stroke="#B5874F" stroke-width="1.6"/>`).join('')+`<circle cx="${v?dx+8:dx+90}" cy="120" r="4" fill="#8A6A44"/>`;
  const sx=v?60:300;
  o+=`<path d="M${sx-2} 30 H${sx+42}" stroke="#8A5A3C" stroke-width="5" stroke-linecap="round"/><rect x="${sx}" y="32" width="38" height="96" fill="#FBF4E2" ${sw(1.4)}/><path d="M${sx+8} 110 L${sx+16} 70 L${sx+22} 92 L${sx+30} 60" fill="none" stroke="#5E8C5A" stroke-width="2"/><circle cx="${sx+28}" cy="48" r="4" fill="#C9473B"/><path d="M${sx-2} 130 H${sx+42}" stroke="#8A5A3C" stroke-width="5" stroke-linecap="round"/>`;
  o+=`<rect x="-6" y="216" width="412" height="70" fill="#DDB16A"/>`+[0,1,2,3,4,5,6,7,8,9,10].map(k=>`<path d="M${k*40} 216 V286" stroke="#CFA05A" stroke-width="1.6"/>`).join('')+[240,262].map(yy=>`<path d="M-6 ${yy} H406" stroke="#CFA05A" stroke-width="1.6"/>`).join('')+`<path d="M-6 216 H406" stroke="${L}" stroke-width="2"/><ellipse cx="200" cy="250" rx="160" ry="10" fill="#E9C47C" opacity=".5"/>`;
  const cx=v?20:330;
  o+=`<rect x="${cx}" y="168" width="56" height="48" fill="#9A6B45" ${sw()}/><path d="M${cx+28} 168 V216 M${cx} 192 H${cx+56}" stroke="#6B4A33" stroke-width="1.6"/><circle cx="${cx+20}" cy="182" r="2" fill="${K.gold}"/><circle cx="${cx+36}" cy="182" r="2" fill="${K.gold}"/><circle cx="${cx+20}" cy="204" r="2" fill="${K.gold}"/><circle cx="${cx+36}" cy="204" r="2" fill="${K.gold}"/>`;
  return o}

/* 마당: 돌담, 장독대, 감나무 */
function yard(y){SCN.n++;SCN.kind='yard';const v=Math.floor(srnd(5)*2);
  let o=`<path d="M-6 ${y-34} H406 V${y} H-6Z" fill="#B9B3A6" ${sw(1.4)}/>`+[0,1].map(r=>[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14].map(c=>`<ellipse cx="${c*30+(r%2)*15-6}" cy="${y-26+r*15}" rx="13" ry="6" fill="${(c+r)%3?'#C9C2B4':'#A9A397'}" ${sw(1)}/>`).join('')).join('')+`<path d="M-6 ${y-36} Q100 ${y-44} 200 ${y-38} Q300 ${y-44} 406 ${y-36}" stroke="#6E6A60" stroke-width="5" fill="none"/>`;
  if(SCN.season==='autumn'||SCN.season==='winter') o+=g(v?360:40,y-30,.9,`<path d="M0 0 Q-4 -40 4 -70 M2 -50 Q-20 -60 -30 -70 M2 -60 Q20 -70 30 -84" fill="none" stroke="#6B4A33" stroke-width="5" stroke-linecap="round"/>${[[-26,-70],[28,-82],[-12,-66],[14,-74],[0,-86]].map(([a,b])=>`<circle cx="${a}" cy="${b}" r="5" fill="#F07A2A" ${sw(1)}/>`).join('')}`);
  else o+=tree(v?360:40,y-30,.8);
  o+=`<rect x="-6" y="${y}" width="412" height="${290-y}" fill="#D9CCAE"/>`+[40,120,210,290,370].map((x,k)=>`<ellipse cx="${x}" cy="${y+30+(k%2)*20}" rx="4" ry="2.4" fill="#BFB295"/>`).join('');
  const jx=v?24:330;
  o+=[[0,0,1],[24,4,.8],[46,0,.9]].map(([dx,dy,s])=>g(jx+dx,y+18+dy,s,`<path d="M-12 0 Q-18 -18 -8 -26 L8 -26 Q18 -18 12 0Z" fill="#6B4A33" ${sw(1.4)}/><ellipse cx="0" cy="-27" rx="9" ry="3" fill="#4A3424" ${sw(1)}/>`)).join('');
  return o}

/* 표지: 시대 풍경과 계절이 보이게 */
const ERA_BANNER={gojoseon:'#C9473B',samguk:'#3F8471',goryeo:'#B8862F',joseon:'#3F6FA8',modern:'#7A5A8A',hyeondae:'#C0612F'};
const SEASON_SKY={spring:['#CFE6F2','#FCE3E6'],summer:['#9FD0EC','#E6F4F8'],autumn:['#F2D6A8','#FBEBD0'],winter:['#C9D8E6','#F2F5F8']};
const coverBase=(id,banner,extra,who)=>{const sk=SEASON_SKY[SCN.season];const body=`${cloud(66,62)}${cloud(334,46,.8)}<circle cx="200" cy="180" r="140" fill="url(#cg${id})"/>
${hills('#A9CDB4','#BCD38F',214,244)}
${landmark(SCN.era==='modern'?108:290,214,1.3)}
<rect x="96" y="22" width="208" height="58" rx="4" fill="${K.paper}" ${sw()}/><rect x="96" y="22" width="208" height="8" fill="${ERA_BANNER[SCN.era]}" opacity=".85"/><rect x="96" y="72" width="208" height="8" fill="${ERA_BANNER[SCN.era]}" opacity=".85"/><rect x="84" y="16" width="16" height="70" rx="8" fill="${K.wood}" ${sw()}/><rect x="300" y="16" width="16" height="70" rx="8" fill="${K.wood}" ${sw()}/>${T(200,62,banner,banner.length>6?26:32,K.red)}
${extra}${star(52,118,9)}${star(350,120,8,'#F28C7C')}${who}`;
  SCN.noCam=true;return SV(body,`url(#cs${id})`,sky('cs'+id,sk[0],sk[1])+glow('cg'+id,'#FFF6D8',.9))};

/* ---------- 빛과 앞쪽 소품: 책마다 다른 빛, 장면마다 깊이 ---------- */
const LIGHT={morning:{c1:'#FFD9C2',c2:'#C9DFF2',sun:[40,30],op:.32},noon:{c1:'#FFF6DA',c2:'#F4F8FA',sun:[200,0],op:.18},
  golden:{c1:'#FFC27A',c2:'#F2A65A',sun:[370,40],op:.36},soft:{c1:'#E6ECEF',c2:'#D6E0E6',sun:[200,20],op:.22}};
function lum(hex){const m=/#([0-9A-F]{6})/i.exec(hex||'');if(!m)return 1;const n=parseInt(m[1],16);return((n>>16&255)*.3+(n>>8&255)*.59+(n&255)*.11)/255}
function sceneFX(bg,defs){
  const first=bg&&bg.startsWith('url')?(/stop-color="(#[0-9A-F]{6})"/i.exec(defs||'')||[])[1]:bg;
  const night=lum(first)<.32, kind=SCN.kind; SCN.kind=''; SCN.fx=(SCN.fx||0)+1;
  const L0=night?{c1:'#3B4A7A',c2:'#1E2440',sun:[320,40],op:.3}:LIGHT[SCN.light||'noon'];
  const defs2=`<linearGradient id="lgt" x1="${L0.sun[0]/400}" y1="${L0.sun[1]/280}" x2="${1-L0.sun[0]/400}" y2="1"><stop offset="0" stop-color="${L0.c1}"/><stop offset="1" stop-color="${L0.c2}"/></linearGradient>
<radialGradient id="sunR" cx="${L0.sun[0]/400}" cy="${L0.sun[1]/280}" r=".45"><stop offset="0" stop-color="${night?'#9FB6FF':'#FFF4D6'}" stop-opacity="${night?.22:.32}"/><stop offset="1" stop-color="#FFF4D6" stop-opacity="0"/></radialGradient>
<filter id="fgb" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="1.4"/></filter>`;
  const light=`<rect width="400" height="280" fill="url(#lgt)" opacity="${L0.op}" style="mix-blend-mode:${night?'multiply':'soft-light'}" pointer-events="none"/><rect width="400" height="280" fill="url(#sunR)" style="mix-blend-mode:screen" pointer-events="none"/>`;
  const S=SEASON[SCN.season]||SEASON.summer, side=SCN.fx%2;
  let fg='';
  if(kind==='out'||kind==='yard'){
    const leaf=S.leaf?S.leaf:['#E8EEF2','#FFFFFF','#DDE5EA'];
    const br=`<path d="M-10 -6 Q30 18 78 22 M20 10 Q34 30 30 48" fill="none" stroke="#5A3B2C" stroke-width="5" stroke-linecap="round"/>${[[10,4,13],[34,18,15],[58,22,12],[78,20,10],[28,40,11],[44,6,10],[66,34,9]].map(([lx,ly,r],k)=>`<ellipse cx="${lx}" cy="${ly}" rx="${r}" ry="${r*.7}" fill="${leaf[k%leaf.length]}" ${sw(1.4)} transform="rotate(${k*25} ${lx} ${ly})"/>`).join('')}`;
    fg+=`<g filter="url(#fgb)" opacity=".95" transform="${side?'translate(400 0) scale(-1 1)':''}">${br}</g>`;
    const blade=SCN.season==='winter'?'#C9D3D8':SCN.season==='autumn'?'#B39A55':'#4E7A4A';
    fg+=`<g filter="url(#fgb)" transform="${side?'':'translate(400 0) scale(-1 1)'}">${[0,1,2,3,4,5,6].map(k=>`<path d="M${-4+k*8} 290 Q${k*8+(k%2?10:-6)} ${250-k%3*12} ${6+k*9} ${226+k%4*8}" fill="none" stroke="${blade}" stroke-width="${5-k%3}" stroke-linecap="round"/>`).join('')}</g>`;
  } else if(kind==='room'){
    fg+=`<path d="M${side?250:40} 30 L${side?370:150} 30 L${side?300:250} 286 L${side?140:110} 286Z" fill="#FFF6DA" opacity=".16" style="mix-blend-mode:screen"/><rect x="-6" y="-6" width="412" height="14" fill="#6B4A33"/>${[20,80,140,200,260,320,380].map(cx=>`<circle cx="${cx}" cy="8" r="7" fill="#8A5A3C" ${sw(1.2)}/><circle cx="${cx}" cy="8" r="2.6" fill="#C9A15A"/>`).join('')}`;
  } else if(kind==='palace'){
    const lx=side?362:38;
    fg+=`<path d="M${lx} 26 V44" ${sw(1.6)}/><g filter="url(#fgb)"><rect x="${lx-14}" y="44" width="28" height="8" rx="2" fill="#3F6FA8" ${sw(1.2)}/><path d="M${lx-14} 52 Q${lx-18} 70 ${lx-14} 86 L${lx+14} 86 Q${lx+18} 70 ${lx+14} 52Z" fill="#C9473B" ${sw(1.4)}/><path d="M${lx-14} 86 h28 l-4 8 h-20Z" fill="#3F6FA8" ${sw(1.2)}/><path d="M${lx} 94 v10" stroke="#C9473B" stroke-width="2"/></g><circle cx="${lx}" cy="70" r="26" fill="#FFD27A" opacity=".18"/>`;
  } else if(kind==='sea'){
    fg+=`<g filter="url(#fgb)" transform="${side?'translate(400 0) scale(-1 1)':''}"><path d="M-10 290 L-10 236 Q14 222 34 238 Q52 230 62 250 L70 290Z" fill="#7A7468" ${sw()}/><path d="M-10 250 Q20 240 40 256 Q54 250 66 266" fill="none" stroke="#FFFFFF" stroke-width="3"/></g>`;
  }
  return {defs:defs2,fg,light};
}

/* ---------- 연출 도구: 뒷모습, 마을, 방(榜), 병풍, 옥좌, 이불, 촛불 ---------- */
function backView(x,y,s,o={}){const c=o.robe||'#EFE6D2',hat=o.hat;
  const h=hat==='gat'?`<ellipse cx="0" cy="-108" rx="48" ry="8" fill="#26242C" opacity=".92" ${sw()}/><path d="M-16 -110 L-14 -136 Q0 -140 14 -136 L16 -110Z" fill="#26242C" ${sw()}/>`
   :hat==='king'?`<path d="M-32 -98 Q-33 -132 0 -134 Q33 -132 32 -98 Q0 -106 -32 -98Z" fill="#2C2A33" ${sw()}/><ellipse cx="-30" cy="-128" rx="13" ry="7" fill="#2C2A33" ${sw()} transform="rotate(-22 -30 -128)"/><ellipse cx="30" cy="-128" rx="13" ry="7" fill="#2C2A33" ${sw()} transform="rotate(22 30 -128)"/>`
   :hat==='bun'?`<circle cx="0" cy="-80" r="12" fill="${HAIR}" ${sw()}/>`:`<ellipse cx="0" cy="-129" rx="7" ry="8" fill="${HAIR}" ${sw()}/>`;
  return g(x,y,s,`<ellipse cx="0" cy="1" rx="44" ry="7" fill="#2B1E16" opacity=".2"/><path d="${ROBE}" fill="${c}" ${sw()}/><path d="M-6 -64 Q0 -30 -4 -2" fill="none" stroke="#2B1E16" stroke-width="1.4" opacity=".25"/>
${mirror(`<path d="${SL[o.pose||'down'].p}" fill="${c}" ${sw()}/>`)}${o.pose==='up'?mirror(`<ellipse cx="-41" cy="-101" rx="6.6" ry="7" fill="${o.skin||SK}" ${sw()}/>`):''}
<circle cx="-30" cy="-91" r="6.5" fill="${o.skin||SK}" ${sw()}/><circle cx="30" cy="-91" r="6.5" fill="${o.skin||SK}" ${sw()}/>
<ellipse cx="0" cy="-94" rx="31" ry="29" fill="${o.hairBack||HAIR}" ${sw()}/><path d="M-10 -120 Q0 -100 -4 -72" fill="none" stroke="#FFFFFF" stroke-width="2" opacity=".18"/>${h}`)}
const townscape=(y,n=7)=>[...Array(n)].map((_,k)=>{const x=k*62-10+(k%2)*18,yy=y-(k%3)*10,tile=k%3!==1;
  return tile?`<rect x="${x}" y="${yy-22}" width="50" height="22" fill="#E8DCC4" ${sw(1.2)}/><path d="M${x-8} ${yy-18} Q${x+25} ${yy-40} ${x+58} ${yy-18} L${x+52} ${yy-26} Q${x+25} ${yy-44} ${x-2} ${yy-26}Z" fill="#4A4A55" ${sw(1.2)}/>`
  :`<rect x="${x}" y="${yy-20}" width="46" height="20" fill="#F3E6CB" ${sw(1.2)}/><path d="M${x-6} ${yy-16} Q${x+23} ${yy-40} ${x+52} ${yy-16}Z" fill="#D2A85A" ${sw(1.2)}/>`}).join('');
const noticeBoard=(x,y,s,lines=['國','法','令','告','示','民','書'])=>g(x,y,s,`<path d="M-60 0 V-120 M60 0 V-120" stroke="#6B4A33" stroke-width="8" stroke-linecap="round"/><rect x="-70" y="-126" width="140" height="10" fill="#4A4A55" ${sw()}/><rect x="-54" y="-112" width="108" height="76" fill="#FFFDF6" ${sw()}/>${lines.map((c,k)=>`<text x="${40-k*14}" y="${-92+(k%2)*24}" text-anchor="middle" font-family="serif" font-size="16" fill="#2E2522">${c}</text>`).join('')}`);
const screenFold=(x,y,s,c1='#FBF3DE',c2='#EFE2C2')=>g(x,y,s,[0,1,2,3].map(k=>`<path d="M${k*44} ${-(k%2)*10} L${k*44+44} ${-((k+1)%2)*10} L${k*44+44} ${-((k+1)%2)*10-150} L${k*44} ${-(k%2)*10-150}Z" fill="${k%2?c2:c1}" ${sw()}/><path d="M${k*44+8} ${-(k%2)*10-20} Q${k*44+20} ${-60} ${k*44+30} ${-120}" fill="none" stroke="#7FA88E" stroke-width="2"/><circle cx="${k*44+30}" cy="-118" r="6" fill="${['#E36B8A','#F2B84B','#E36B8A','#7FB3C8'][k]}"/>`).join(''));
const throne=(x,y,s)=>g(x,y,s,`<rect x="-120" y="-10" width="240" height="14" fill="#8A5A3C" ${sw()}/><rect x="-100" y="-24" width="200" height="14" fill="#A06A42" ${sw()}/><rect x="-80" y="-38" width="160" height="14" fill="#B5784A" ${sw()}/><path d="M-120 4 h240 M-100 -10 h200" stroke="#5A3B2C" stroke-width="1.4"/>`);
const bedQuilt=(x,y,s,c='#E98FA0')=>g(x,y,s,`<rect x="-90" y="-16" width="180" height="22" rx="8" fill="#F4EFE0" ${sw()}/><path d="M-70 -24 Q0 -40 92 -22 L92 2 L-70 2Z" fill="${c}" ${sw()}/>${[0,1,2,3].map(k=>`<circle cx="${-40+k*36}" cy="-14" r="5" fill="#FFFDF6" opacity=".7"/>`).join('')}<rect x="-100" y="-30" width="40" height="18" rx="8" fill="#FFFDF6" ${sw()}/>`);
const candle=(x,y,s=1)=>g(x,y,s,`<circle cx="0" cy="-34" r="60" fill="url(#candleG)"/><rect x="-7" y="-22" width="14" height="30" rx="3" fill="#FFF8E8" ${sw()}/><path d="M0 -44 Q10 -32 0 -22 Q-10 -32 0 -44Z" fill="#FFC24A" ${sw(1.4)}/><path d="M0 -36 Q4 -30 0 -25 Q-4 -30 0 -36Z" fill="#FFF2B0"/><ellipse cx="0" cy="10" rx="16" ry="5" fill="#A8744A" ${sw()}/>`);
const candleDef=glow('candleG','#FFD27A',.75);

/* ---------- 카메라: 장면마다 거리를 바꾼다 (가까이, 두 사람, 보통) ---------- */
const SHOTS=['two','medium','close','two','medium','close','two','medium'];
function camera(inner){
  const figs=SCN.figs||[],caps=SCN.caps||[];SCN.figs=[];SCN.caps=[];
  if(SCN.noCam){SCN.noCam=false;return ''}
  if(!figs.length||/id="/.test(inner))return '';
  if(figs.some(f=>f.y>290||f.s>1.3))return '';
  let shot=SHOTS[(SCN.shotI++)%SHOTS.length];
  if(shot==='close'&&caps.length)shot='two';
  const clampV=(left,top,z)=>{const vw=400/z,vh=280/z;left=Math.max(-6,Math.min(406-vw,left));top=Math.max(-6,Math.min(286-vh,top));return `scale(${z.toFixed(3)}) translate(${(-left).toFixed(1)} ${(-top).toFixed(1)})`};
  if(shot==='close'){
    const m=figs.slice().sort((a,b)=>(b.s-a.s)||(Math.abs(a.x-200)-Math.abs(b.x-200)))[0];
    const hx=m.x,hy=m.y-94*m.s,z=Math.max(1.4,Math.min(2.0,60/(31*m.s)));
    return clampV(hx-200/z,hy-.36*280/z,z)}
  if(shot==='two'){
    let x0=Infinity,x1=-Infinity,y0=Infinity,y1=-Infinity;
    for(const f of figs){x0=Math.min(x0,f.x-52*f.s);x1=Math.max(x1,f.x+52*f.s);y0=Math.min(y0,f.y-150*f.s);y1=Math.max(y1,f.y+14*f.s)}
    for(const c of caps){x0=Math.min(x0,c.x-c.sz*c.len*.55);x1=Math.max(x1,c.x+c.sz*c.len*.55);y0=Math.min(y0,c.y-c.sz*1.2)}
    const W=Math.max(x1-x0,(y1-y0)*400/280)*1.12,z=Math.min(1.55,400/W);
    if(z<1.1)return '';
    return clampV((x0+x1)/2-200/z,(y0+y1)/2-140/z,z)}
  return '';
}

/* ---------- 다시 그리기에 쓰는 풍경 조각 ---------- */
const rainFX=(n=40,c='#9FC3E0')=>[...Array(n)].map((_,k)=>{const x=(k*53)%410-4,y=(k*37)%280;return `<path d="M${x} ${y} l-7 18" stroke="${c}" stroke-width="2" stroke-linecap="round" opacity=".8"/>`}).join('');
const snowFX=(n=40)=>[...Array(n)].map((_,k)=>`<circle cx="${(k*61)%404}" cy="${(k*43)%276}" r="${1.6+(k%3)}" fill="#FFFFFF" opacity=".9"/>`).join('');
const rays=(x,y,c='#FFF2C4',n=9,len=260,op=.35)=>`<g opacity="${op}">${[...Array(n)].map((_,k)=>{const a=(-160+k*(140/(n-1)))*Math.PI/180;return `<path d="M${x} ${y} L${x+len*Math.cos(a-.05)} ${y+len*Math.sin(a-.05)} L${x+len*Math.cos(a+.05)} ${y+len*Math.sin(a+.05)}Z" fill="${c}"/>`}).join('')}</g>`;
const ridge=(y,c,amp=30,seed=1)=>{let d=`M-6 ${y}`;for(let x=0;x<=420;x+=40){d+=` L${x} ${y-amp*(0.4+0.6*Math.abs(Math.sin(x*0.013*seed+seed)))}`}return `<path d="${d} L406 290 L-6 290Z" fill="${c}" ${sw(1.4)}/>`};
const dust=(x,y,s=1)=>g(x,y,s,`<circle cx="0" cy="0" r="14" fill="#E6D8B8" opacity=".8"/><circle cx="-18" cy="4" r="10" fill="#E6D8B8" opacity=".7"/><circle cx="-34" cy="8" r="7" fill="#E6D8B8" opacity=".6"/>`);
const kasaL=`<path d="M-26 -64 L32 -6 L42 -12 L-14 -68Z" fill="#B5473A" ${sw(1.6)}/>`;
const gayaG=(x,y,s)=>g(x,y,s,`<path d="M-90 0 Q-96 -14 -84 -20 L84 -20 Q96 -14 90 0Z" fill="#B5874F" ${sw()}/>${[0,1,2,3,4,5,6,7,8,9,10,11].map(k=>`<path d="M-80 ${-17+k*1.4} L80 ${-17+k*1.4}" stroke="#FFF8EC" stroke-width=".8"/><path d="M${-30+k*5} ${-26+(k%3)*2} l4 6 l-8 0Z" fill="#F4EFE0" ${sw(.8)}/>`).join('')}<path d="M84 -20 Q100 -24 104 -8" fill="none" stroke="#C9473B" stroke-width="3"/>`);
const flagPole=(x,y,c,t,h=90,w=60)=>`<path d="M${x} ${y} V${y-h}" ${sw(3)}/><path d="M${x} ${y-h} Q${x+w*.5} ${y-h-8} ${x+w} ${y-h+4} L${x+w} ${y-h+36} Q${x+w*.5} ${y-h+28} ${x} ${y-h+34}Z" fill="${c}" ${sw(1.6)}/>${t?T(x+w/2,y-h+24,t,15,'#FBF4E2'):''}`;
const SVn=(i,b,d)=>{SCN.noCam=true;return SV(i,b,d)};
