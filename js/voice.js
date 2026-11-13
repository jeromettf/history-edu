/* 엄마 아빠 목소리: 쪽마다 녹음해 두면 읽어주기 · 저절로 읽기가 그 목소리를 먼저 쓴다.
   녹음은 이 기기 브라우저의 IndexedDB('wiin-voice')에만 저장한다. 키는 "책id:쪽번호". */
const VOICE={db:null,map:new Map(),book:null};
function vOpen(){return new Promise(res=>{if(VOICE.db)return res(VOICE.db);try{const r=indexedDB.open('wiin-voice',1);
  r.onupgradeneeded=()=>r.result.createObjectStore('rec');r.onsuccess=()=>{VOICE.db=r.result;res(VOICE.db)};r.onerror=()=>res(null)}catch(e){res(null)}})}
async function vLoadBook(id){VOICE.map.forEach(u=>URL.revokeObjectURL(u));VOICE.map=new Map();VOICE.book=id;const db=await vOpen();if(!db)return;
  await new Promise(res=>{try{const st=db.transaction('rec').objectStore('rec');const q=st.openCursor();
    q.onsuccess=()=>{const c=q.result;if(!c)return res();const k=String(c.key);if(k.startsWith(id+':')&&VOICE.book===id)VOICE.map.set(+k.split(':')[1],URL.createObjectURL(c.value));c.continue()};q.onerror=()=>res()}catch(e){res()}})}
async function vPut(id,i,blob){const db=await vOpen();if(!db)return false;return new Promise(res=>{try{const tx=db.transaction('rec','readwrite');tx.objectStore('rec').put(blob,`${id}:${i}`);tx.oncomplete=()=>{if(VOICE.map.has(i))URL.revokeObjectURL(VOICE.map.get(i));VOICE.map.set(i,URL.createObjectURL(blob));res(true)};tx.onerror=()=>res(false)}catch(e){res(false)}})}
async function vDel(id,i){const db=await vOpen();if(!db)return;return new Promise(res=>{try{const tx=db.transaction('rec','readwrite');tx.objectStore('rec').delete(`${id}:${i}`);tx.oncomplete=()=>{if(VOICE.map.has(i))URL.revokeObjectURL(VOICE.map.get(i));VOICE.map.delete(i);res()}}catch(e){res()}})}
const vAudio=new Audio();
function vHas(i){return VOICE.map.has(i)}
/* 녹음이 있으면 재생하고 끝나면 onDone. 없으면 false를 돌려 기계 음성으로 넘긴다 */
function vPlay(i,onDone){const u=VOICE.map.get(i);if(!u)return false;try{vAudio.pause()}catch(e){}
  vAudio.src=u;vAudio.onended=()=>{onDone&&onDone()};vAudio.onerror=()=>{onDone&&onDone()};
  const pr=vAudio.play();if(pr&&pr.catch)pr.catch(()=>{onDone&&onDone()});return true}
function vStop(){try{vAudio.pause();vAudio.onended=null}catch(e){}}
let vRec=null,vChunks=[];
async function vStart(){try{const s=await navigator.mediaDevices.getUserMedia({audio:true});vChunks=[];
  const mt=['audio/webm;codecs=opus','audio/mp4','audio/webm'].find(t=>window.MediaRecorder&&MediaRecorder.isTypeSupported&&MediaRecorder.isTypeSupported(t))||'';
  vRec=new MediaRecorder(s,mt?{mimeType:mt}:undefined);vRec.ondataavailable=e=>{if(e.data&&e.data.size)vChunks.push(e.data)};vRec.start();return true}catch(e){return false}}
function vFinish(){return new Promise(res=>{if(!vRec)return res(null);vRec.onstop=()=>{const b=new Blob(vChunks,{type:vRec.mimeType||'audio/webm'});vRec.stream.getTracks().forEach(t=>t.stop());vRec=null;res(b)};vRec.stop()})}
