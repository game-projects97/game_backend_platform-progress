import{r as S,j as e,B as y,v as le,I as x,d as F,w as He,e as gn,g as Pn,s as nn,f as Ye,a as q,h as Je,M as an,i as Gn,k as we,l as Mn,m as Kn,n as Se,C as Hn,o as Jn,p as W,q as ve,t as pe,u as Re,x as fn,P as ze,y as tn,z as Ie,S as qe,A as Ae,D as qn,T as Wn,b as Fn,E as Vn,F as kn,G as Qn,H as $n,J as Xn,K as _n,L as Sn,N as Yn,O as zn,Q as Zn,R as ea,U as na,V as aa,W as ta,X as sa,Y as oa,Z as ra,c as ca}from"./status-CbtihMh1.js";function ge(n){return n instanceof Element?n.closest("[data-selectable-task]")?.dataset.selectableTask:void 0}function ia(n,a){const[s,d]=S.useState(()=>new Set),t=S.useRef(s),r=S.useRef(void 0),o=S.useRef(null),l=S.useRef(!1),i=S.useRef([]);function _(){window.clearTimeout(r.current),r.current=void 0,o.current=null}function I(){_(),i.current=[],l.current=!1,t.current=new Set,d(t.current)}function u(p){const g=new Set(t.current);g.has(p)?g.delete(p):g.add(p),t.current=g,d(g)}return S.useEffect(()=>{I()},[n]),S.useEffect(()=>(window.addEventListener("pointerup",_),window.addEventListener("pointercancel",_),window.addEventListener("blur",_),window.addEventListener("scroll",_,!0),()=>{_(),window.removeEventListener("pointerup",_),window.removeEventListener("pointercancel",_),window.removeEventListener("blur",_),window.removeEventListener("scroll",_,!0)}),[]),{selectedIds:s,clear:I,handlers:{onPointerDownCapture(p){_(),l.current=!1;const g=ge(p.target);!g||p.button!==0||!p.isPrimary||(o.current={x:p.clientX,y:p.clientY,pointerId:p.pointerId},r.current=window.setTimeout(()=>{_(),l.current=!0,t.current.has(g)||u(g)},500))},onPointerMoveCapture(p){const g=o.current;g&&(p.pointerId!==g.pointerId||Math.hypot(p.clientX-g.x,p.clientY-g.y)>8)&&_()},onPointerUpCapture:_,onPointerCancelCapture:_,onDragStartCapture(p){_(),i.current=[];const g=ge(p.target);!g||!t.current.has(g)||(i.current=[...t.current],l.current=!0,p.dataTransfer.effectAllowed="move",p.dataTransfer.setData("text/plain",JSON.stringify(i.current)),p.stopPropagation())},onDragOverCapture(p){!i.current.length||!(p.target instanceof Element)||p.target.closest("[data-drop-date]")&&(p.preventDefault(),p.stopPropagation(),p.dataTransfer.dropEffect="move")},onDropCapture(p){if(!i.current.length||!(p.target instanceof Element))return;const g=p.target.closest("[data-drop-date]")?.dataset.dropDate;if(!g)return;p.preventDefault(),p.stopPropagation();const P=i.current;i.current=[],a(P,g)},onDragEndCapture(){i.current=[]},onClickCapture(p){const g=ge(p.target);if(g){if(l.current)l.current=!1;else if(t.current.size)u(g);else return;p.preventDefault(),p.stopPropagation()}},onContextMenuCapture(p){ge(p.target)&&(t.current.size||o.current)&&(p.preventDefault(),p.stopPropagation())},onKeyDownCapture(p){if(p.key==="Escape"&&t.current.size){p.preventDefault(),p.stopPropagation(),I();return}const g=ge(p.target);g&&!p.repeat&&p.key===" "&&(p.shiftKey||t.current.size)&&(p.preventDefault(),p.stopPropagation(),l.current=!1,u(g))}}}}function da({count:n,onMove:a,onDelete:s,onCancel:d}){const[t,r]=S.useState("");return e.jsxs("div",{className:"task-selection-toolbar",role:"group","aria-label":"선택한 작업 관리",children:[e.jsxs("span",{role:"status","aria-live":"polite",children:[n,"개 선택"]}),e.jsx("label",{children:e.jsx("input",{type:"date",value:t,onChange:o=>r(o.target.value),"aria-label":"이동할 날짜"})}),e.jsx(y,{disabled:!le(t),onClick:()=>a(t),children:"이동"}),e.jsx(y,{className:"button task-selection-delete",onClick:s,children:"삭제"}),e.jsx(y,{className:"icon-button",onClick:d,"aria-label":"선택 취소",title:"선택 취소 (Esc)",children:e.jsx(x,{name:"close",size:16})})]})}const ke="2026-11-09-v1",Le="2026-11-09",Oe="2026-11-15",xn="2026-11-11T11:28:15+09:00",Cn=`이번 주 확정 계획 · 2026-11-09–15 · Asia/Seoul
2026-11-11 사용자 요청에 따라 남은 범위와 의존성을 검토해 확정한 예정일입니다. 실제 완료일이 아닙니다. 후속 사용자 요청으로 모든 실행 단위를 11월 11일 오늘로 당겼습니다. 선행 검증이 실패하면 후속을 완료 처리하지 않고 차단 이유를 남깁니다. 월·화는 소급 배정하지 않습니다.
목표: JWT·Swagger·SDK 검증본 보존과 제품 전체 스키마의 격리 복구 한 경로 검증. 운영 DB는 아직 없습니다. 향후 운영 환경·실제 데이터 검증, 실제 외부 배포, 공개 HTTPS 검증, 영구 삭제, 고객 문의, 실시간, 모바일·스토어, 운영 부하 실행은 이번 주 확정 범위 밖입니다.`;function We(n,a,s,d,t,r,o,l="todo"){return{id:n,parent:a,title:d,description:t,criteria:r,date:s,dateKind:"scheduled",status:l,sprint:1e3+a,owner:"dot",recordKind:"subtask",masterId:`WORK-${String(a).padStart(2,"0")}`,dependsOn:o,comments:[],note:`${Cn}

선행 작업: ${o.join(", ")||"없음"}
완료 판정은 해당 범위의 실행 결과와 증거 확인 후에만 변경합니다.`,weeklyPlanRevision:ke,planConfirmedAt:xn}}const En=[We("TASK-02-07",2,"2026-11-11","JWT·Swagger·SDK 검증본 원격 보존","이미 진행 중인 백엔드 검증·푸시 작업을 추적합니다. 원격 main의 project-management 변경을 보존한 전용 브랜치에 검증한 서버·SDK 변경만 게시합니다. 비밀값·DB·로그·무관한 변경은 제외합니다.","Rust·SDK·콘솔·OpenAPI·HTTP JWT/Swagger 검사 결과와 실제 푸시된 커밋/브랜치가 확인됩니다. 저장소 푸시는 실제 서버 배포 성공을 뜻하지 않습니다.",[],"doing"),We("TASK-12-08",12,"2026-11-11","제품 전체 스키마로 격리 백업·복원 검증","검증 완료·해시 고정된 서버 소스로 신규 임시 DB에 제품 전체 스키마와 합성 테스트 데이터를 만들고, 별도 새 경로에 백업·복원합니다. 운영 DB는 아직 없으며, 기존 사용자 파일에는 쓰지 않습니다.","원본·백업·복원 경로가 분리되고 SHA, user_version, 스키마·도메인별 행 대조, quick_check·foreign_key_check 결과를 남깁니다. 작은 2개 테이블 fixture 검사를 반복한 것으로 대체하지 않습니다. 운영 DB가 향후 구성되면 실제 데이터·환경의 검증을 추가합니다.",[],"doing"),We("TASK-12-09",12,"2026-11-11","격리 복원본의 권한·저장 API 회귀 검증","TASK-12-08의 합성 데이터 복원본으로 별도 로컬 서버를 기동해 역할·환경 격리, 세션, 진행 저장과 지급 재전달을 점검합니다. 외부 서버나 실제 사용자 데이터에 요청하지 않습니다.","원본 테스트 DB와 복원본의 권한·환경·저장 버전·원장 수를 대조하고 중복 지급이 없음을 확인합니다. 실패 시 미완료로 남깁니다. 운영 DB는 아직 없으며 향후 운영 환경 검증과 구분합니다.",["TASK-12-08"])],vn={id:"TASK-12-10",parent:12,masterId:"WORK-12",recordKind:"subtask",title:"후속 CRUD 검증 · 계정·데이터·자산 삭제·프로필 수정",status:"todo",sprint:0,date:"",owner:"미배정",comments:[],description:"사용자 요청으로 현재 스프린트 이후 TODO에 보존합니다. 계정·게임데이터·자산·콘텐츠의 삭제, 프로필 수정과 나머지 CRUD를 실제 지원 endpoint별로 정리해 별도 검증합니다. 이번 복원 검사에서는 수행하지 않았습니다.",criteria:"후속 착수 때 실제 구현 endpoint·예상 권한·상태·DB 효과를 대조해 실행 범위를 확정합니다. 제품에서 지원하지 않는 CRUD는 구현 여부와 분리하고, 검증 전 완료로 표시하지 않습니다.",note:"2026-11-11 사용자 요청: 추가 CRUD 검증은 이후 TODO로 남김. 일정 미정·미착수. 오늘의 합성 테스트 DB 복원/JWT 권한 검증과 별도입니다.",followUp:!0},la="2026-11-11T02:35:33.260246+00:00";for(const n of En)["TASK-12-08","TASK-12-09"].includes(n.id)&&(n.status="done",n.completedAt=la,n.note+=`

2026-11-11 실행 완료: DB22·59개 테이블, 백업 전 합성행50개. 전체 스키마/행 digest 대조·quick_check·foreign_key_check 통과. HTTP43건(준비14/복원후29)과 별도 조건15개 통과. 원장1행·잔액37 유지. 삭제 검증은 세션 종료뿐이며 전체 도메인 CRUD 검증은 아닙니다. 운영 DB는 아직 없습니다. 근거: 문서 보관함 ‘11월11일 실행·복구 검증’.`);const pa=new Map([["TASK-18-03",{date:"2026-11-11",status:"review",note:"초안 작성 및 상대링크15개 검증 완료. 원격 반영 확인 전이므로 검토 중입니다. 이번 주 산출물: 최신 푸시 커밋과 검증 결과에 맞춘 README·실행 안내·남은 범위. TASK-02-07과 TASK-12-09의 결과를 대조합니다. 복구 검사가 막히면 완료로 적지 않고 실패/미검증 이유를 기록합니다. 별도 백엔드 작업자가 같은 문서를 수정 중이면 변경을 확인한 후 이어갑니다."}]]);function ae(n,a){return JSON.stringify(n)===JSON.stringify(a)}function An(n){if(n.weeklyPlanRevision===ke)return n;const a=new Set([2,12,18]),s=new Map,d=(n.sprints??[]).map(l=>{if(!l.parent||!a.has(l.parent))return l;const i=F.sprints?.find(_=>_.code===l.code);return!i||!ae(l,i)?l:(s.set(l.parent,l.id),{...l,...l.periodKind==="commit-record"?{recordedStart:l.recordedStart||l.start,recordedEnd:l.recordedEnd||l.end}:{},start:Le,end:Oe,periodKind:"scheduled"})}),t=[],r=[],o=n.items.map(l=>{const i=pa.get(l.id);if(!i)return["WORK-12","TASK-12-04","TASK-12-05"].includes(l.id)&&ae(l,F.items.find(u=>u.id===l.id))?{...l,note:`${l.note}

2026-11-11 현재 범위: 운영 DB는 아직 없습니다. 합성 데이터 기반 전체 제품 스키마 테스트 DB 백업·복원/API 검증은 TASK-12-08/09에서 완료했습니다. 기존 문구는 과거 계획이며, 향후 운영 DB 구성 시 실제 데이터·환경 검증은 별도 후속입니다. 현재 운영 DB 복원이 대기 중이라는 뜻은 아닙니다.`}:l;const _=F.items.find(u=>u.id===l.id),I=s.get(l.parent);return!_||I===void 0||!ae(l,_)?(r.push(l.id),l):(t.push(l.id),{...l,sprint:I,date:i.date,dateKind:"scheduled",owner:"dot",status:i.status,note:`${l.note}

${Cn}

${i.note}`,weeklyPlanRevision:ke,planConfirmedAt:xn})});for(const l of En){if(o.some(_=>_.id===l.id))continue;const i=s.get(l.parent);if(i===void 0){r.push(l.id);continue}o.push({...structuredClone(l),sprint:i}),t.push(l.id)}return o.some(l=>l.id===vn.id)||o.push(structuredClone(vn)),{...n,sprints:d,items:o,weeklyPlanRevision:ke,weeklyPlanAppliedIds:t,weeklyPlanSkippedIds:r}}const Fe="2026-11-12-v2",ua="https://github.com/game-projects97/game_backend_platform/commit/f3589df5f3242a6ce6c7c2dc525ed594f2f7b14a";function ma(n){if(n.weeklyPlanRevision===Fe)return n;const a=n.weeklyPlanRevision===ke?n:An(n),s=An(F),d=new Set(a.weeklyPlanAppliedIds??[]),t=new Set(a.weeklyPlanSkippedIds??[]),r=a.items.map(o=>{if(!["TASK-02-07","TASK-18-03"].includes(o.id))return o;if(!ae(o,s.items.find(i=>i.id===o.id)))return t.add(o.id),o;d.add(o.id);const l=o.id==="TASK-02-07"?"2026-11-12 확인: 전용 브랜치에 검증본 53개 파일 게시 완료. 과거 응답 fixture docs/api/runtime-examples.json 1개는 게시 차단 상태여서 전체 보존 완료로 표시하지 않습니다. 이 파일을 사용하는 명세 재생성 검사는 차이가 날 수 있습니다. main 병합·실제 서버 배포는 별도입니다. 원격 commit status 0개이며 CI 통과 의미가 아닙니다.":"2026-11-12 완료: README에 실제 구현·실행 안내·기존 검증 기록·부분 원격 보존과 미검증 범위를 반영했습니다. GitHub 원격 경로 기준 상대링크14개를 확인했습니다. 다른 작업의 차단을 명시했으며 전체 스프린트 완료를 뜻하지 않습니다.";return{...o,status:o.id==="TASK-02-07"?"blocked":"done",...o.id==="TASK-18-03"?{completedAt:"2026-11-12T01:06:59.268449+00:00"}:{},note:`${o.note}

${l}
근거: ${ua}`,weeklyPlanRevision:Fe}});return{...a,items:r,weeklyPlanRevision:Fe,weeklyPlanAppliedIds:[...d],weeklyPlanSkippedIds:[...t]}}const Ve="2026-11-12-v3";function yn(n){if(n.weeklyPlanRevision===Ve)return n;const a=ma(n),s=new Set(a.weeklyPlanAppliedIds??[]),d=new Set(a.weeklyPlanSkippedIds??[]),t=a.items.map(r=>{if(!["TASK-18-04","TASK-18-05","TASK-18-06"].includes(r.id))return r;const o=a.sprints?.find(l=>l.id===r.sprint);return!ae(r,F.items.find(l=>l.id===r.id))||!o||o.start!==Le||o.end!==Oe?(d.add(r.id),r):(s.add(r.id),{...r,date:"2026-11-12",dateKind:"scheduled",owner:"dot",status:r.id==="TASK-18-06"?"todo":"doing",note:`${r.note}

2026-11-12 사용자 요청에 따라 오늘 일일 작업으로 할당했습니다. 실제 완료일이 아닙니다. 기존 TASK-18-03 README 결과에 이어 상태·실행 문서·링크를 대조합니다. 차단된 파일 업로드와 이후 CRUD 검증은 이번 실행에 포함하지 않습니다.`,weeklyPlanRevision:Ve,planConfirmedAt:"2026-11-12T01:59:53.320547+00:00"})});return{...a,items:t,weeklyPlanRevision:Ve,weeklyPlanAppliedIds:[...s],weeklyPlanSkippedIds:[...d]}}const Qe="2026-11-12-v4";function Tn(n){if(n.weeklyPlanRevision===Qe)return n;const a=yn(n),s=yn(F),d=new Set(a.weeklyPlanSkippedIds??[]),t=a.items.map(r=>["TASK-18-04","TASK-18-05","TASK-18-06"].includes(r.id)?ae(r,s.items.find(o=>o.id===r.id))?{...r,status:"done",completedAt:"2026-11-12T02:08:56.232320+00:00",weeklyPlanRevision:Qe,note:`${r.note}

2026-11-12 완료: 19개 작업 상태 대조, 실행·JWT·SDK·Swagger 문서 불일치 수정 및 저장소 링크 검증을 마쳤습니다. 문서 범위 완료이며 제품 전체 테스트·서버 배포 완료가 아닙니다. 근거: https://github.com/game-projects97/game_backend_platform/commit/20668973db6435165f50cb9e4f384f8aa6d9e5b5`}:(d.add(r.id),r):r);return{...a,items:t,weeklyPlanRevision:Qe,weeklyPlanSkippedIds:[...d]}}const Pe="2026-11-12-v5";function Dn(n){if(n.weeklyPlanRevision===Pe)return n;const a=Tn(n),s=Tn(F),d=new Set(a.weeklyPlanSkippedIds??[]),t=a.items.map(r=>{if(r.id!=="TASK-12-10")return r;const o=a.sprints?.find(l=>l.id===1012);return!ae(r,s.items.find(l=>l.id===r.id))||!o||o.start!==Le||o.end!==Oe?(d.add(r.id),r):{...r,status:"doing",date:"2026-11-12",dateKind:"scheduled",sprint:1012,owner:"dot",followUp:!1,weeklyPlanRevision:Pe,note:`${r.note}

2026-11-12 최신 사용자 승인으로 후속 CRUD 검증·필요한 구현에 착수합니다. 기존 지원 endpoint와 최신 app 구조를 먼저 확인하며 격리 합성 DB만 사용합니다. 계정 영구 삭제·보관 정책이나 운영 DB 변경을 임의로 추가하지 않습니다.`}});if(!t.some(r=>r.id==="TASK-02-08")){const r=a.sprints?.find(o=>o.id===1002);r&&r.start===Le&&r.end===Oe?t.push({id:"TASK-02-08",parent:2,masterId:"WORK-02",recordKind:"subtask",title:"최신 app 구조 통합·검증 후 main 병합",description:"Mac 로컬 main의 app 구조 재배치와 클라우드 JWT·Swagger·SDK 변경을 격리 worktree에서 통합합니다. 기존 사용자 변경을 보존하고 경로·문서 충돌 해결 뒤 검증한 결과만 main에 반영합니다.",criteria:"최신 구조 보존, 필요한 검사 통과와 실제 원격 main SHA를 대조합니다. 서버 배포는 별도이며 fixture 누락 한계를 함께 기록합니다.",status:"doing",date:"2026-11-12",dateKind:"scheduled",sprint:1002,owner:"dot",comments:[],note:"2026-11-12 사용자 승인: CRUD 신규 구현 및 main 병합까지 진행. 원본 fixture가 없어 재구성하지 않으며 부분 원격 보존 제한은 별도 기록합니다.",weeklyPlanRevision:Pe}):d.add("TASK-02-08")}return{...a,items:t,weeklyPlanRevision:Pe,weeklyPlanSkippedIds:[...d]}}const xe="2026-11-12-v6";function Ce(n){if(n.weeklyPlanRevision===xe)return n;const a=Dn(n),s=Dn(F),d=new Set(a.weeklyPlanSkippedIds??[]),t=a.items.map(r=>{if(!["TASK-02-07","TASK-02-08","TASK-12-10"].includes(r.id))return r;if(!ae(r,s.items.find(l=>l.id===r.id)))return d.add(r.id),r;const o=r.id==="TASK-12-10";return{...r,status:o?"review":"done",...o?{}:{completedAt:"2026-11-12T06:51:23Z"},weeklyPlanRevision:xe,note:`${r.note}

2026-11-12 검증·원격 반영: Rust436·SDK21·entrypoint4·HTTP31 통과, OpenAPI205동작/17도메인 재현·fmt·clippy 통과. 원본 fixture 복구 및 main 병합 SHA e03a7fb0c8ab537ea3b6ef3491a8d3bf27dd7b14 확인. ${o?"프로필 수정·초기화와 private 행 생성/조회/교체/soft-delete/복구 및 JWT 소유자 격리 범위 검증 완료. 계정 영구삭제·자산·콘텐츠 삭제 정책은 미지원/후속 범위이므로 전체 CRUD 완료로 표시하지 않습니다.":"최신 app 구조와 기존 문서·사용자 데이터 보존, 검증된 통합 브랜치 PR#1 main 병합 완료."} 브라우저·서버 배포 미실행, 원격 CI status0개로 CI 성공을 뜻하지 않습니다. 근거: https://github.com/game-projects97/game_backend_platform/commit/e03a7fb0c8ab537ea3b6ef3491a8d3bf27dd7b14`}});return{...a,items:t,weeklyPlanRevision:xe,weeklyPlanSkippedIds:[...d]}}const ba={items:[{id:"BP-001-1",parent:1,title:"최초 기획·기능 조사 기록",status:"done",sprint:0,date:"2026-11-07",owner:"기록",description:"Nakama·뒤끝 조사와 최초 PRD 설명, 설계 문서 연결.",criteria:"해당 기능 단위의 구현·검증 기록과 일치. 전체 도메인 완료를 뜻하지 않음.",note:"남은 범위는 구현 현황과 실행 계획에서 확인.",comments:[]},{id:"BP-002-1",parent:2,title:"관리 서버·콘솔 기본 흐름",status:"done",sprint:0,date:"2026-11-07",owner:"기록",description:"관리자 로그인·프로젝트/환경·역할·변경 사유·감사.",criteria:"해당 기능 단위의 구현·검증 기록과 일치. 전체 도메인 완료를 뜻하지 않음.",note:"남은 범위는 구현 현황과 실행 계획에서 확인.",comments:[]},{id:"BP-003-1",parent:3,title:"계정·인증 핵심 흐름",status:"done",sprint:0,date:"2026-11-07",owner:"기록",description:"게스트·커스텀 계정·전환·세션 수명·차단.",criteria:"해당 기능 단위의 구현·검증 기록과 일치. 전체 도메인 완료를 뜻하지 않음.",note:"남은 범위는 구현 현황과 실행 계획에서 확인.",comments:[]},{id:"BP-004-1",parent:4,title:"게임 데이터·조회 핵심 흐름",status:"done",sprint:0,date:"2026-11-07",owner:"기록",description:"버전 저장·컬렉션/행·스키마/권한·원자 작업·인덱스 조회.",criteria:"해당 기능 단위의 구현·검증 기록과 일치. 전체 도메인 완료를 뜻하지 않음.",note:"남은 범위는 구현 현황과 실행 계획에서 확인.",comments:[]},{id:"BP-003-2",parent:3,title:"JWT 인증·SDK 수명 보완",status:"done",sprint:0,date:"2026-11-10",owner:"기록",description:"HS256·대상/범위·DB 폐기/권한 검사, 관리자 Bearer/쿠키 구분, SDK 갱신 경합 보완.",criteria:"기록된 Rust435·SDK21·콘솔3 및 실HTTP/재시작 결과 대조.",note:"운영 키·배포·네이티브 SDK와 실제 기기 검증은 미완료.",comments:[]},{id:"BP-005-1",parent:5,title:"우편·쿠폰·확률 지급",status:"done",sprint:0,date:"2026-11-08",owner:"기록",description:"지갑·원장·원자 처리",criteria:"기록된 핵심 흐름을 검증한 범위.",note:"전체 도메인 및 운영 검증 완료와 구분.",comments:[]},{id:"BP-006-1",parent:6,title:"콘텐츠 버전·운영 정책",status:"done",sprint:0,date:"2026-11-08",owner:"기록",description:"게시·되돌리기·캐시·점검·버전",criteria:"기록된 핵심 흐름을 검증한 범위.",note:"전체 도메인 및 운영 검증 완료와 구분.",comments:[]},{id:"BP-007-1",parent:7,title:"길드·그룹·랭킹",status:"done",sprint:0,date:"2026-11-08",owner:"기록",description:"역할·재화·순위·그룹 수명",criteria:"기록된 핵심 흐름을 검증한 범위.",note:"전체 도메인 및 운영 검증 완료와 구분.",comments:[]},{id:"BP-008-1",parent:8,title:"탈퇴 예약·철회·인증 제어",status:"done",sprint:0,date:"2026-11-08",owner:"기록",description:"예약과 철회, 즉시 세션 폐기·로그인 차단",criteria:"기록된 핵심 흐름을 검증한 범위.",note:"전체 도메인 및 운영 검증 완료와 구분.",comments:[]},{id:"BP-009-1",parent:9,title:"Render 무료 서버·Swagger 공개 접속",status:"doing",sprint:0,date:"",owner:"미배정",description:"재생성 가능한 테스트 DB로 Rust API와 Swagger를 같은 서비스에서 제공하는 목표. Render Free 선택 후 공식 대시보드 로그인 요청 단계이며 계정 연결·서버 생성·실행은 미확인.",criteria:"검증된 HTTPS 주소와 실제 브라우저 Execute 확인.",note:"날짜와 담당은 미확정입니다. 임의 일정이 배정되지 않았습니다.",comments:[]},{id:"BP-010-1",parent:10,title:"탈퇴 자료 보관·삭제 정책",status:"blocked",sprint:0,date:"",owner:"미배정",description:"개인 자료·원장·감사·중복 방지 이력·길드·정산의 범위와 기간 결정.",criteria:"정책과 실행 권한을 확인한 뒤 정리·관리 화면·재시작 검증.",note:"날짜와 담당은 미확정입니다. 임의 일정이 배정되지 않았습니다.",comments:[]},{id:"BP-011-1",parent:11,title:"로컬 HTTP 지연 원인 분리",status:"todo",sprint:0,date:"",owner:"미배정",description:"HTTP·작업 대기·DB 시간을 고정 소스와 동일 입력으로 비교.",criteria:"보호 수단을 유지하고 원인·전후 결과·미확인 범위 기록.",note:"날짜와 담당은 미확정입니다. 임의 일정이 배정되지 않았습니다.",comments:[]},{id:"BP-012-1",parent:12,title:"실제 플랫폼 DB 백업·복원",status:"todo",sprint:0,date:"",owner:"미배정",description:"격리 fixture를 넘어 실제 스키마를 새 경로에 복원하고 독립 서버 API 대조.",criteria:"무결성·권한·자료·재전달·응답 유실/강제 종료 확인.",note:"날짜와 담당은 미확정입니다. 임의 일정이 배정되지 않았습니다.",comments:[]},{id:"BP-013-1",parent:13,title:"Escape Ball·MinbWebKit 저장 계약",status:"todo",sprint:0,date:"",owner:"미배정",description:"현행 게임의 필드·이전·오프라인·계정 전환을 API/SDK와 연결.",criteria:"기존 저장 호환·충돌·늦은 응답·재접속 검증.",note:"날짜와 담당은 미확정입니다. 임의 일정이 배정되지 않았습니다.",comments:[]},{id:"BP-014-1",parent:14,title:"MSA·Go Match 장기 구조 대조",status:"blocked",sprint:0,date:"",owner:"미배정",description:"초기 Gateway/gRPC/Go Match 요구와 현재 Rust 단일 서버의 단계별 경계 정리.",criteria:"최종 채택·보류·이행 기준 결정. 현재 연동 완료로 표시하지 않음.",note:"날짜와 담당은 미확정입니다. 임의 일정이 배정되지 않았습니다.",comments:[]},{id:"BP-015-1",parent:15,title:"내부 관측·운영 명령 범위",status:"todo",sprint:0,date:"",owner:"미배정",description:"내부 감사·로그·집계·예약·실패 복구의 필요한 범위를 정리. 고객 문의 제외.",criteria:"조회·보관·권한·재시도와 운영 확인 경로 검증.",note:"날짜와 담당은 미확정입니다. 임의 일정이 배정되지 않았습니다.",comments:[]},{id:"BP-016-1",parent:16,title:"Android·iOS 빌드 파이프라인 계획",status:"todo",sprint:0,date:"",owner:"미배정",description:"공통 입력/산출물·CI/실행기부터 Android, iOS와 내부 채널을 순서대로 준비.",criteria:"실제 빌드·서명·기기 설치·서버 흐름과 공급자 처리까지 구분 검증.",note:"날짜와 담당은 미확정입니다. 임의 일정이 배정되지 않았습니다.",comments:[]},{id:"BP-017-1",parent:17,title:"기능 범위 고정 후 콘솔 개선",status:"blocked",sprint:0,date:"",owner:"미배정",description:"현재 기능과 DS를 보존하며 합의한 화면 개선을 진행.",criteria:"권한·로딩·실패·취소·뒤로가기·반복 동작과 반응형 확인.",note:"날짜와 담당은 미확정입니다. 임의 일정이 배정되지 않았습니다.",comments:[]},{id:"BP-018-1",parent:18,title:"문서의 최신 상태·과거 기록 정합",status:"done",sprint:0,date:"",owner:"기록",description:"README/이전 현황과 최신 JWT·API·V2의 차이를 구분하고 문서 색인을 연결.",criteria:"출처·날짜·확인 범위·미확인 원문을 표시.",note:"날짜와 담당은 미확정입니다. 임의 일정이 배정되지 않았습니다.",comments:[]},{id:"BP-019-1",parent:19,title:"실제 배포 후 SLO·부하 검증",status:"blocked",sprint:12,date:"",owner:"미배정",description:"운영 규모·지연·오류율 목표와 허용 부하를 실제 배포 후 확정.",criteria:"동일 입력·자원 한도·보호 동작·병목과 복구 결과 기록.",note:"날짜와 담당은 미확정입니다. 임의 일정이 배정되지 않았습니다.",comments:[]}]},ha=["조사·기획 이력","관리 서버·콘솔","계정·JWT·권한","게임 데이터·조회","경제·보상","콘텐츠·운영 정책","랭킹·소셜","탈퇴 제어","라이브 테스트 배포","탈퇴 정리·관리 화면","로컬 성능 원인","실제 백업·복구","실제 게임 연결","실시간 후속 검토","내부 관측·예약","모바일 빌드 파이프라인","콘솔 리팩터링","문서 정합·근거","배포 이후 운영 성능"],ga=new Set(ba.items.map(n=>n.id));function Rn(n){return new Set(Array.isArray(n.archiveLegacyItemIds)?n.archiveLegacyItemIds:[])}function fa(n){if(Number(n.archiveDataRevision)>=3)return Ce(He(n));if(n.archiveDataRevision===2)return Ce(He(gn(n)));const a=new Set(n.items.map(o=>o.id)),s=Pn(n),d=[...n.sprints??s],t=F.sprints[0];if(!s.some(o=>o.start<=t.end&&o.end>=t.start)){let o=t.id;for(;o===12||d.some(l=>l.id===o);)o++;d.push({...t,id:o})}const r=structuredClone(F.items).filter(o=>o.recordKind!=="subtask"&&!a.has(o.id)).map(o=>({...o,sprint:o.date?nn(o.date,d):o.sprint}));return Ce(He(gn({...n,archiveDataRevision:2,archiveLegacyItemIds:[...new Set([...Rn(n),...n.items.filter(o=>ga.has(o.id)).map(o=>o.id)])],items:[...n.items,...r],sprints:d})))}const Ne="backend-project-archive-v1",$e=`${Ne}-before-v4`;let Ee=!1;function In(n,a=!1){let s=structuredClone(n??Ce(F)),d="";Ee=!1;try{const t=localStorage.getItem(Ne);if(a&&t===null)throw new Error("외부 저장 기록이 제거되었습니다.");if(t!==null){if(s=Ye(JSON.parse(t)),Number(s.archiveDataRevision||0)<4||s.weeklyPlanRevision!==xe){const r=localStorage.getItem($e);if(r!==t){let o=$e;if(r!==null)for(o=`${$e}-${Date.now()}`;localStorage.getItem(o)!==null;)o+="-copy";if(localStorage.setItem(o,t),localStorage.getItem(o)!==t)throw new Error("원본 백업을 확인하지 못했습니다.")}}s=Ye(fa(s))}}catch{Ee=!0,d="저장 기록 또는 변경 전 백업을 확인하지 못해 읽기 전용으로 열었습니다. 기존 브라우저 데이터는 덮어쓰지 않습니다."}return{state:s,loadError:d,readOnly:Ee}}function ka(n){if(Ee)throw new Error("읽기 전용 복구 상태입니다. 원본 데이터 확인 전에는 저장하지 않습니다.");Ye(n),localStorage.setItem(Ne,JSON.stringify(n))}const _a=[{id:1,title:"Nakama·뒤끝 조사와 플랫폼 설계",status:"done",statusText:"완료",commits:["9489c6e","70d9993","6c7bf5a"],note:"조사·플랫폼 설계 문서의 커밋 기록입니다. 조사 수행일과 커밋일은 별개입니다.",supported:"뒤끝 기능·API·콘솔 및 웹/Android 연결 조사, Nakama 구조·인증·데이터·실시간·운영 조사와 자체 플랫폼 명세/계획.",remaining:"조사와 설계 보존을 제품 기능 구현 완료로 해석하지 않는다.",commitEvidence:[{sha:"9489c6e",meaning:"뒤끝 조사와 재구성 설계 보존.",paths:["study/thebackend/01_CORE_FEATURES.md","study/thebackend/02_OPERATIONS_INTEGRATIONS.md","study/thebackend/03_REALTIME.md","study/thebackend/04_RECONSTRUCTION_BLUEPRINT.md","study/thebackend/09_WEB_ANDROID_INTEGRATION.md","study/thebackend/10_AVOID_BALL_PILOT.md"],kind:"research"},{sha:"70d9993",meaning:"Nakama 조사·자체 플랫폼 방향·사양 안내 보존.",paths:["study/nakama/01_ARCHITECTURE.md","study/nakama/02_API_AUTH_DATA.md","study/nakama/03_REALTIME_MATCH.md","study/nakama/04_RUNTIME_OPERATIONS.md","study/nakama/05_OWN_PLATFORM_ROADMAP.md","study/platform/00_SPECIFICATION_GUIDE.md"],kind:"research"},{sha:"6c7bf5a",meaning:"Rust/React 구조와 기능 단계·계약 정의.",paths:["docs/specs/PLATFORM.md","docs/plans/2026-11-07-platform-foundation.md"],kind:"design"}],workingTree:{status:"uncommitted_design_update",paths:["docs/specs/PLATFORM.md","docs/plans/2026-11-10-backend-platform-v2.md"],summary:"내부 관리 중심 V2와 모바일 빌드 파이프라인은 계획이며 구현 완료가 아니다."}},{id:2,title:"Rust 서버·React 관리 콘솔 기반 구현",status:"done",statusText:"완료",commits:["6c7bf5a","981d44c"],note:"Rust 서버와 React 콘솔이 981d44c에 함께 포함됐습니다. 커밋 제목만으로 콘솔 전용 변경으로 해석하지 않습니다.",supported:"Rust/Axum/Tokio/rusqlite 기반 API·DB 마이그레이션·기동과 React/TypeScript/Vite 관리 콘솔, 서버/콘솔 검사 및 HTTP probe.",remaining:"운영 배포 수명주기와 전체 서비스 기능 완성을 뜻하지 않는다.",commitEvidence:[{sha:"6c7bf5a",meaning:"기술 스택과 로컬 실행 계약.",paths:["docs/RUNNING.md","docs/specs/PLATFORM.md","docs/plans/2026-11-07-platform-foundation.md"],kind:"design"},{sha:"981d44c",meaning:"서버와 콘솔 코드가 함께 처음 추가됐다.",paths:["server/Cargo.toml","server/src/main.rs","server/src/lib.rs","server/src/store.rs","server/src/schema.sql","server/tests/platform.rs","console/package.json","console/src/App.tsx","console/src/main.tsx","console/src/style.css","scripts/check.py"],kind:"implementation"}],workingTree:{status:"uncommitted_implementation_and_tooling",paths:["server/src/main.rs","server/src/lib.rs","server/src/api_docs.rs","deploy/test-server/Dockerfile","deploy/test-server/render.yaml","scripts/cloud-env.sh"],summary:"JWT/API 문서 제공·테스트 서버 배포 설정·클라우드 실행 도구가 작업 트리에 추가됐다. 현재 커밋에는 없다."}},{id:3,title:"계정·권한·세션·접근 차단 구현",status:"done",statusText:"완료",commits:["6c7bf5a","981d44c"],note:"계정·역할·세션·차단의 기록된 핵심 구현 기준 완료입니다. JWT 추가와 관련 SDK 변경은 별도 미커밋 상태입니다.",supported:"관리자 역할·프로젝트/환경 격리, 게스트 및 커스텀 계정·게스트 전환, 프로필·닉네임, 세션 발급/갱신/종료/폐기와 기간 접근 차단.",remaining:"소셜 계정·계정 복구·디바이스 차단 등 전체 계정 수명 범위는 별도.",commitEvidence:[{sha:"6c7bf5a",meaning:"계정·프로필·접근·세션 명세.",paths:["docs/specs/CUSTOM_ACCOUNTS.md","docs/specs/PLAYER_ACCESS.md","docs/specs/PLAYER_PROFILE.md","docs/specs/PLAYER_SESSION_REVOCATION.md"],kind:"design"},{sha:"981d44c",meaning:"signup/login/link, revoke_sessions, update_access/ensure_access 및 관리 UI 구현.",paths:["server/src/api.rs","server/src/accounts.rs","server/src/players.rs","server/src/custom-account-schema.sql","server/src/player-access-schema.sql","server/src/player-session-schema.sql","server/tests/custom_accounts.rs","server/tests/player_access.rs","server/tests/player_sessions.rs","console/src/PlayerAccess.tsx","console/src/PlayerProfile.tsx","console/src/PlayerSessions.tsx"],kind:"implementation"}],workingTree:{status:"uncommitted_jwt_implementation",paths:["server/src/auth.rs","server/src/accounts.rs","server/src/api.rs","server/src/lib.rs","server/src/main.rs","server/src/store.rs","server/tests/jwt_auth.rs","server/tests/jwt_startup.rs","docs/specs/JWT_AUTH.md"],summary:"JWT 서명·검증과 관리자 Bearer/쿠키 전송 분리, 기동 요구조건 및 검사 추가. 기존 커밋의 세션 인증과 구분한다."}},{id:4,title:"게임 데이터 저장·검색·인덱스 구현",status:"done",statusText:"완료",commits:["6c7bf5a","981d44c"],note:"저장·검색·인덱스 핵심 구현 기준 완료입니다. 실제 운영 복원·스키마 수명 등은 별도 범위입니다.",supported:"버전 진행 저장·낙관적 동시성·명령 재전달, user/shared 컬렉션·행 CRUD/복구·원자 배치, 조건 조회·Count/Any·인덱스 구축/삭제·복합 seek·prefix 조회.",remaining:"스키마 변경, 실제 백업/복원, 소비 게임 SDK 연결과 운영 부하는 별도.",commitEvidence:[{sha:"6c7bf5a",meaning:"데이터 계약과 조회·인덱스 범위.",paths:["docs/specs/GAME_DATA.md","docs/specs/GAME_DATA_QUERY.md","docs/specs/GAME_DATA_INDEXES.md","docs/specs/GAME_DATA_INDEX_PREFIX.md","docs/specs/GAME_DATA_AGGREGATES.md"],kind:"design"},{sha:"981d44c",meaning:"실제 저장·검색·인덱스 처리와 관리 화면 구현.",paths:["server/src/api.rs","server/src/game_data.rs","server/src/game_data/indexes.rs","server/src/game_data/row_query.rs","server/src/game_data/row_query/aggregate.rs","server/src/game_data/row_query/indexed.rs","server/src/game_data/row_query/indexed/prefix.rs","server/tests/game_data.rs","server/tests/data_indexes.rs","console/src/GameData.tsx"],kind:"implementation"}],workingTree:{status:"no_additional_product_implementation_identified",paths:[]}},{id:5,title:"재화·보상·우편·쿠폰·추첨 구현",status:"done",statusText:"완료",commits:["6c7bf5a","981d44c"],note:"재화·보상·우편·쿠폰·추첨의 기록된 핵심 구현 기준 완료입니다.",supported:"자산·지갑·원장·지급, 우편 생성/수령, 쿠폰 생성/사용과 서버 확률 추첨·비용 차감·보상 지급의 원자 처리.",remaining:"일반 소비/회수·예약과 전체 프로세스 장애 검증은 남는다. 일부 성공 흐름을 경제 전체 완료로 보지 않는다.",commitEvidence:[{sha:"6c7bf5a",meaning:"경제와 추첨 거래 계약.",paths:["docs/specs/ECONOMY.md","docs/specs/PROBABILITY.md"],kind:"design"},{sha:"981d44c",meaning:"지급·수령·사용과 draw 구현, 원장 및 중복 제약 검사.",paths:["server/src/economy.rs","server/src/economy-schema.sql","server/src/probability.rs","server/src/probability-schema.sql","server/tests/probability.rs","console/src/Economy.tsx","console/src/Probability.tsx","scripts/economy-smoke.py","scripts/probability-smoke.py"],kind:"implementation"}],workingTree:{status:"no_additional_product_implementation_identified",paths:[]}},{id:6,title:"공지·차트·이벤트·점검·버전 정책 구현",status:"done",statusText:"완료",commits:["6c7bf5a","981d44c"],note:"공지·차트·이벤트·점검·버전 정책의 기록된 핵심 구현 기준 완료입니다.",supported:"공지/차트 초안·게시·되돌리기·중단·다국어/ETag, 이벤트, 점검 및 최소/권장 버전 정책과 공개 bootstrap.",remaining:"기존 Config.dat 소유권, SDK 호환과 후속 콘텐츠 범위는 별도.",commitEvidence:[{sha:"6c7bf5a",meaning:"콘텐츠 버전·캐시 및 운영 정책 계약.",paths:["docs/specs/CONTENT.md","docs/specs/CONTENT_CACHE.md","docs/specs/OPERATIONS.md"],kind:"design"},{sha:"981d44c",meaning:"publish/rollback/unpublish, game_list, enforce/bootstrap, 이벤트와 정책 화면 구현.",paths:["server/src/content.rs","server/src/content-schema.sql","server/src/operations.rs","server/src/operations-schema.sql","server/tests/content_cache.rs","server/tests/operations.rs","console/src/Content.tsx","console/src/Operations.tsx"],kind:"implementation"}],workingTree:{status:"no_additional_product_implementation_identified",paths:[]}},{id:7,title:"친구·길드·그룹·랭킹 핵심 기능 구현",status:"done",statusText:"완료",commits:["6c7bf5a","981d44c"],note:"친구·길드·그룹·랭킹의 핵심 기능 기준 완료이며 전체 소셜·실시간 기능 완료는 아닙니다.",supported:"친구 요청/수락/차단, 길드 가입/역할/해체·재화·활동·마스터 교체, 그룹 소속/이동/통합, 개인/길드/그룹 랭킹·시즌·보상 정산.",remaining:"게임별 자격·점수 신뢰 검증, 일부 소셜 확장과 반복 일정·운영 혼합 부하는 별도.",commitEvidence:[{sha:"6c7bf5a",meaning:"소셜·경쟁 및 그룹 수명 계약.",paths:["docs/specs/FRIENDS.md","docs/specs/GUILDS.md","docs/specs/GROUPS.md","docs/specs/GROUP_LIFECYCLE.md","docs/specs/LEADERBOARDS.md","docs/specs/GUILD_GROUP_LEADERBOARDS.md"],kind:"design"},{sha:"981d44c",meaning:"상태 변경 API·거래·재시작 가능한 그룹 통합 worker·랭킹 정산과 UI가 함께 추가됐다.",paths:["server/src/friends.rs","server/src/guilds.rs","server/src/groups.rs","server/src/group_lifecycle.rs","server/src/leaderboards.rs","server/src/guild_leaderboards.rs","server/src/guild_treasury.rs","server/src/guild_activity.rs","console/src/Friends.tsx","console/src/Guilds.tsx","console/src/Groups.tsx","console/src/Leaderboards.tsx","console/src/GuildLeaderboards.tsx","server/tests/group_lifecycle.rs"],kind:"implementation"}],workingTree:{status:"no_additional_product_implementation_identified",paths:[]}},{id:8,title:"탈퇴 예약·철회·인증 제어 구현",status:"done",statusText:"완료",commits:["6c7bf5a","981d44c"],note:"탈퇴 예약·철회·인증 제어 기준 완료입니다. 실제 자료 정리·보관 정책·관리 화면은 10번입니다. 후속 수정이 미커밋 상태입니다.",supported:"관리자/게임 탈퇴 예약·철회, 세션 폐기, 로그인 시 유예 철회·기한 거절, 버전/CAS·감사·제한된 재전달 receipt.",remaining:"개인 자료 삭제·보관 정책·정리 작업·탈퇴 관리 UI는 이 구현에 포함되지 않는다.",commitEvidence:[{sha:"6c7bf5a",meaning:"예약/인증 제어와 실제 자료 정리를 두 단계로 분리.",paths:["docs/specs/ACCOUNT_WITHDRAWAL.md","docs/plans/2026-11-07-withdrawal-control.md"],kind:"design"},{sha:"981d44c",meaning:"state/update/request/on_login 및 세션 제거 구현. 개인 데이터 purge 구현은 없다.",paths:["server/src/withdrawal.rs","server/src/withdrawal-schema.sql","server/src/api.rs","server/src/accounts.rs","server/tests/withdrawal_control.rs","server/tests/withdrawal_control_migration.rs","scripts/withdrawal-control-probe.py"],kind:"implementation"}],workingTree:{status:"uncommitted_followup",paths:["server/src/withdrawal.rs","server/tests/withdrawal_control.rs","docs/plans/2026-11-07-withdrawal-control.md"],summary:"JWT 인증 전달과 검사/상태 문서 보완이 있다. 실제 자료 purge 추가는 아니다."}},{id:9,title:"고객 문의 생성·조회·답변 구현",status:"todo",statusText:"예정",commits:["6c7bf5a","4310819"],note:"사용자가 예정 목록에 포함한 항목입니다. 최신 V2의 현재 범위 제외 기록도 보존하며 이번 목록 등록을 구현 승인이나 우선순위 변경으로 해석하지 않습니다. 관련 과거 조사와 미커밋 후속 계획만 확인했습니다.",supported:"커밋에는 고객 지원 범위와 미완료 TODO만 있다. 문의 제품 API·스키마·화면 구현 근거 없음.",remaining:"최신 작업 트리의 REMAINING_SUPPORT는 2026-11-10 현재 범위 제외로 명시한다. 완료가 아니다.",commitEvidence:[{sha:"6c7bf5a",meaning:"P5에 고객 문의 처리와 운영 지원을 계획.",paths:["docs/specs/PLATFORM.md"],kind:"roadmap"},{sha:"4310819",meaning:"E07 문의·신고·로그·집계 미완료로 기록.",paths:["TODO.md"],kind:"status_record"}],workingTree:{status:"out_of_current_scope_design_only",paths:["docs/specs/REMAINING_SUPPORT.md","docs/plans/2026-11-08-support.md","docs/plans/2026-11-10-backend-platform-v2.md"],summary:"과거 문의 생성·자기 목록/상세·관리자 답변/닫기 계약은 설계 이력. 최신 문서는 내부 관리 서버를 우선하며 외부 고객 문의를 현재 범위에서 제외."}},{id:10,title:"탈퇴 보관 정책·자료 정리·관리 화면 구현",status:"todo",statusText:"예정",commits:["6c7bf5a","4310819"],note:"예약·철회가 있는 것과 실제 삭제·보관 정책 구현은 다릅니다. 준비용 계획과 자료 목록 점검이 미커밋 상태입니다.",supported:"기존 탈퇴 제어 계약에서 실제 정리와 관리 UI를 후속 단계로 분리했다.",remaining:"보관/익명화 정책 미확정. purge worker·자료 정리 상태/관리 UI 구현 근거 없음.",commitEvidence:[{sha:"6c7bf5a",meaning:"첫 단계만으로 전체 탈퇴 완료를 주장하지 않으며 개인 자료 정리는 후속.",paths:["docs/specs/ACCOUNT_WITHDRAWAL.md"],kind:"design_boundary"},{sha:"4310819",meaning:"A03의 삭제 범위 답변과 실제 정리/관리 UI를 남김.",paths:["TODO.md"],kind:"status_record"}],workingTree:{status:"uncommitted_policy_and_inventory_preparation",paths:["docs/specs/REMAINING_WITHDRAWAL_PURGE.md","docs/plans/2026-11-08-withdrawal-purge.md","scripts/withdrawal-purge-inventory.py"],summary:"59개 스키마 테이블의 의존 관계·보관 정책 후보·제한 배치 제안과 인벤토리 도구. 실제 서버 자료를 삭제한 구현/실행 근거가 아니다."}},{id:11,title:"로컬 응답 지연 원인 확인",status:"todo",statusText:"예정",commits:["6c7bf5a","981d44c","4310819"],note:"연결 재사용 코드와 기존 검증은 있지만 전체 응답 지연 원인 규명 완료는 아닙니다. 로컬 분석 도구·표본은 미커밋 상태입니다.",supported:"지갑 지연 중 반복 연결의 스키마 읽기·연결 종료 비용을 분리하고 기존 8슬롯 내 연결 재사용을 구현했다.",remaining:"후속 HTTP 회귀 전체 원인·성능 동등성은 미확인. 한 원인 개선을 모든 지연 해결로 보고하면 안 된다.",commitEvidence:[{sha:"6c7bf5a",meaning:"같은 DB 조건별 500회 측정으로 연결 비용을 분리한 기록.",paths:["docs/plans/2026-11-07-store-cache.md"],kind:"diagnosis_and_plan"},{sha:"981d44c",meaning:"Store::run에서 유휴 연결 재사용, 오류/미완료 거래 재사용 금지와 슬롯 상한 구현.",paths:["server/src/store.rs","server/tests/store_cache.rs","scripts/store-restart-smoke.py"],kind:"implementation"},{sha:"4310819",meaning:"D02에 지갑 p95 11.726→1.243ms 기록과 다른 경로 원인 미확인을 함께 기록.",paths:["TODO.md"],kind:"status_record"}],workingTree:{status:"uncommitted_analysis_tools_only",paths:["scripts/performance/audit_samples.py","scripts/performance/test_audit_samples.py","docs/plans/2026-11-08-performance.md","docs/specs/REMAINING_PERFORMANCE.md"],summary:"기존 표본 배열 117개 재분석과 분석 도구 검사 기록. HTTP 원인 확정·제품 성능 변경·SLO 통과가 아니다."}},{id:12,title:"실제 서버 백업·복원·장애 복구 검증",status:"todo",statusText:"예정",commits:["981d44c","4310819"],note:"실제 서버의 백업·복원·장애 복구는 예정입니다. 격리 복구 도구·계획은 미커밋이며 운영 DB 복원 완료 근거가 아닙니다.",supported:"파일 DB 재오픈과 확정 지급의 SIGKILL 후 재전달, 그룹 배치 사이 종료/재시작 등 제한된 복구 검사와 도구.",remaining:"실제 플랫폼 DB의 백업→새 경로 복원→독립 서버 API 검증 및 저장 확정/응답 전 종료의 전체 검증은 미완료.",commitEvidence:[{sha:"981d44c",meaning:"확정 WAL 지급·세션 보존과 durable group merge 복구를 다루는 코드. 실제 서버 백업 완료 증거는 아님.",paths:["scripts/store-restart-smoke.py","server/tests/platform.rs","server/tests/group_lifecycle.rs","server/src/group_lifecycle.rs"],kind:"partial_recovery_implementation"},{sha:"4310819",meaning:"C06·D03에 백업 복원과 추가 장애 시점 미검증을 유지.",paths:["TODO.md"],kind:"status_record"}],workingTree:{status:"uncommitted_fixture_backup_restore_tools",paths:["scripts/recovery/sqlite_snapshot.py","scripts/recovery/self_check.py","scripts/recovery/evidence/verification.json","integration/recovery-readiness.json"],summary:"덮어쓰기 없는 SQLite backup/restore 도구와 fixture 검사는 준비됨. verification은 fixture와 제품 복구를 구분하고 실제 연결 검증 false를 명시. 11/08 입력 부재 기록은 현 환경 상태로 단정하지 않는다."}},{id:13,title:"MinbWebKit·Escape Ball 연결",status:"todo",statusText:"예정",commits:["9489c6e","6c7bf5a","4310819"],note:"MinbWebKit·Escape Ball 조사·연동 설계가 커밋되어 있습니다. 실제 소비 게임 연결 완료는 아닙니다. TypeScript 연동 클라이언트는 미커밋입니다.",supported:"MinbWebKit·첫 소비 게임 연결 지점과 저장/구매/Android 경로 조사, 플랫폼 API 설계.",remaining:"실제 MinbWebKit 모듈 수출/소비 게임 편집·필드 매핑·이전 저장 호환·실행 연결은 미완료.",commitEvidence:[{sha:"9489c6e",meaning:"게임과 키트 연결 설계이며 실제 연결 구현이 아니다.",paths:["study/thebackend/09_WEB_ANDROID_INTEGRATION.md","study/thebackend/10_AVOID_BALL_PILOT.md"],kind:"research"},{sha:"6c7bf5a",meaning:"플랫폼 진행 필드가 Escape Ball 실제 매핑 확정이 아님을 명시.",paths:["docs/specs/PLATFORM.md"],kind:"design"},{sha:"4310819",meaning:"B05/B06/C01/C05가 미완료.",paths:["TODO.md"],kind:"status_record"}],workingTree:{status:"uncommitted_platform_client_only",paths:["integration/platform-client.ts","integration/platform-client.test.ts","integration/recovery-readiness.json","docs/specs/REMAINING_RECOVERY_INTEGRATION.md"],summary:"PlatformClient의 게스트/세션/진행 저장·취소·기한·재시도 준비. 이 파일은 MinbWebKit을 import하거나 수정하지 않으며 게임 currentStageId와 숫자 stage 매핑이 미확정."}},{id:14,title:"채팅·매칭·게임방·월드 동기화 구현",status:"todo",statusText:"예정",commits:["9489c6e","70d9993","6c7bf5a","4310819"],note:"조사·장기 설계 기록만 확인했습니다. 채팅·매치·게임방·월드의 실제 통합 완료 근거는 없습니다.",supported:"뒤끝/Nakama 실시간 구조 조사와 제품 단계 P7–P9 정의.",remaining:"자체 채팅·매칭 큐·게임방·월드 권위/동기화 구현 및 실행 검증 근거 없음. 최신 V2는 내부 관리 1차 완료 조건 밖으로 둠.",commitEvidence:[{sha:"9489c6e",meaning:"실시간 기능 조사.",paths:["study/thebackend/03_REALTIME.md"],kind:"research"},{sha:"70d9993",meaning:"Nakama 실시간/매치 구조 분석.",paths:["study/nakama/03_REALTIME_MATCH.md"],kind:"research"},{sha:"6c7bf5a",meaning:"P7/P8/P9를 후속 제품 단계로 정의.",paths:["docs/specs/PLATFORM.md"],kind:"roadmap"},{sha:"4310819",meaning:"E04/E05/E06 미완료.",paths:["TODO.md"],kind:"status_record"}],workingTree:{status:"future_scope_documentation",paths:["docs/plans/2026-11-10-backend-platform-v2.md"],summary:"내부 관리 1차 범위에는 새 채팅·매치·월드를 넣지 않으며 장기 자산은 유지."}},{id:15,title:"신고·로그·집계·예약 작업 구현",status:"todo",statusText:"예정",commits:["9489c6e","6c7bf5a","981d44c","4310819"],note:"기존 감사·운영 정책과 신고·로그·집계·예약 전체 구현은 다릅니다. 해당 예정 범위를 유지합니다.",supported:"관리 감사 저장/조회, 데이터 Count/Any 및 특정 그룹 통합·인덱스의 durable worker는 구현돼 있다.",remaining:"신고 접수/처리·게임 로그 수집/보관·운영 통계/퍼널·일반 예약 실행/발송 기능을 위 기반과 혼동하면 안 된다. E07/E08 전체는 미완료.",commitEvidence:[{sha:"9489c6e",meaning:"운영·통계·서버 확장 기능 조사.",paths:["study/thebackend/02_OPERATIONS_INTEGRATIONS.md"],kind:"research"},{sha:"6c7bf5a",meaning:"P5의 신고·로그·집계·예약 실행 계획.",paths:["docs/specs/PLATFORM.md"],kind:"roadmap"},{sha:"981d44c",meaning:"audit 테이블/조회, 특정 백그라운드 작업과 Count/Any가 존재. 일반 신고·분석·예약 시스템 구현을 입증하지 않음.",paths:["server/src/schema.sql","server/src/api.rs","server/src/store.rs","server/src/group_lifecycle.rs","server/src/game_data/row_query/aggregate.rs"],kind:"supporting_primitives"},{sha:"4310819",meaning:"E07/E08 미완료 유지.",paths:["TODO.md"],kind:"status_record"}],workingTree:{status:"no_additional_product_implementation_identified",paths:[]}},{id:16,title:"푸시·결제·환불·Android 실기기 검증",status:"todo",statusText:"예정",commits:["9489c6e","6c7bf5a","4310819"],note:"웹·Android·외부 연동 조사가 커밋되어 있지만 푸시·결제·환불·실기기 검증 완료 근거는 없습니다.",supported:"웹/Android·MinbWebKit·구매/푸시 경로 조사와 외부 연동 요구사항.",remaining:"실제 공급자 sandbox·푸시 수신·구매/복구/환불·APK와 Android 실기기 검증 완료 증거 없음.",commitEvidence:[{sha:"9489c6e",meaning:"외부/Android 경로 조사와 요구사항.",paths:["study/thebackend/02_OPERATIONS_INTEGRATIONS.md","study/thebackend/09_WEB_ANDROID_INTEGRATION.md","study/thebackend/10_AVOID_BALL_PILOT.md"],kind:"research"},{sha:"6c7bf5a",meaning:"P6 외부 연동 계획.",paths:["docs/specs/PLATFORM.md"],kind:"roadmap"},{sha:"4310819",meaning:"E09 및 F01/F02/F04 미완료.",paths:["TODO.md"],kind:"status_record"}],workingTree:{status:"uncommitted_readiness_and_build_pipeline_plan",paths:["integration/recovery-readiness.json","docs/specs/REMAINING_RECOVERY_INTEGRATION.md","docs/plans/2026-11-10-backend-platform-v2.md"],summary:"과거 로컬 설정 존재 인벤토리와 Android/iOS 빌드 파이프라인 요구사항. 실제 구매/발송·기기 검증·배포 구현의 증거 아님."}},{id:17,title:"기능 완료 후 관리 콘솔 정리",status:"todo",statusText:"예정",commits:["6c7bf5a","981d44c"],note:"기존 콘솔 구현 커밋은 후속 정리 완료가 아닙니다. 기능 범위가 정리된 뒤 수행하는 계획입니다.",supported:"초기 콘솔 시안과 기능 우선 React 관리 화면은 커밋됨.",remaining:"기능 완료 이후 UI 리팩터링은 별도 범위이며 구현 완료 근거 없음. 현재 console 파일은 HEAD 대비 수정되지 않음.",commitEvidence:[{sha:"6c7bf5a",meaning:"초기 시안과 기능 우선/후속 리팩터링 순서.",paths:["docs/mockups/index.html","docs/mockups/screen.html","docs/specs/PLATFORM.md"],kind:"initial_design"},{sha:"981d44c",meaning:"초기 기능 콘솔이며 후속 리팩터링 완료가 아니다.",paths:["console/src/App.tsx","console/src/style.css","console/src/components/ui/button.tsx"],kind:"initial_ui_implementation"}],workingTree:{status:"uncommitted_refactor_spec_only",paths:["docs/specs/REMAINING_UI_REFACTOR.md","docs/plans/2026-11-08-ui-refactor.md"],summary:"현재 화면·상태·접근성 경계 조사와 변경안 후보. 새 UI 구현이 아닌 준비 문서."}},{id:18,title:"README·작업 상태 문서 갱신",status:"todo",statusText:"예정",commits:["5961812","66411ca","70d9993","4310819"],note:"이전 README·TODO·상태 문서 커밋을 보존합니다. README의 과거 설명은 현재 코드와 다르고 추가 수정도 미커밋이므로 사용자 예정 상태를 유지합니다.",supported:"TODO 최초 생성, CONTEXT 추가 및 11/08 진행·남은 작업 갱신은 커밋됨.",remaining:"루트 README는 70d9993 뒤 변경이 없고 여전히 애플리케이션 코드 미작성이라고 써 있어 실제 코드와 불일치. 전체 문서 정리 완료가 아니다.",commitEvidence:[{sha:"5961812",meaning:"프로젝트 TODO 최초 추가.",paths:["TODO.md","study/thebackend/README.md"],kind:"documentation"},{sha:"66411ca",meaning:"진행/오류 추적 문서 추가.",paths:["CONTEXT.md","TODO.md"],kind:"documentation"},{sha:"70d9993",meaning:"Nakama 분석 중심 README 추가. 이후 코드 반영 갱신 없음.",paths:["README.md"],kind:"documentation"},{sha:"4310819",meaning:"진행 결과와 미완료 범위를 갱신.",paths:["CONTEXT.md","TODO.md"],kind:"documentation"}],workingTree:{status:"uncommitted_status_and_api_documentation",paths:["TODO.md","CONTEXT.md","CLOUD_DEVELOPMENT.md","CLOUD_MIGRATION_REPORT.md","docs/api/openapi.json","docs/api/SDK_AUTH.md","docs/plans/2026-11-10-backend-platform-v2.md"],summary:"클라우드 이관·JWT/API·V2 계획·상태 갱신이 미커밋으로 존재. README는 현재도 변경 없음."}},{id:19,title:"배포 후 성능 목표 확정·부하 테스트",status:"todo",statusText:"예정",commits:["6c7bf5a","981d44c","4310819"],note:"실제 배포 후 목표 확정·부하 테스트입니다. 로컬 표본 분석과 운영 규모 검증은 다릅니다. 확정 실행일은 없습니다.",supported:"기존 커밋에 로컬 지연 기준/부분 전후 측정, 호출 제한/DB 슬롯 보호 및 반복 probe가 있음.",remaining:"승인된 운영 워크로드/SLO·RPO/RTO와 배포 후 부하 검증은 미완료. 테스트 서버 구성이나 정적 페이지 공개를 해당 검증 완료로 세지 않는다.",commitEvidence:[{sha:"6c7bf5a",meaning:"운영 워크로드·복구 목표와 부하를 별도 검증으로 둠.",paths:["docs/specs/PLATFORM.md","docs/RUNNING.md"],kind:"design_boundary"},{sha:"981d44c",meaning:"8슬롯·본문 제한 등 보호와 로컬 실행 도구. 운영 부하 통과 근거가 아니다.",paths:["server/src/store.rs","server/src/lib.rs","scripts/store-restart-smoke.py","scripts/game-smoke.py"],kind:"bounded_primitives_and_probes"},{sha:"4310819",meaning:"D01/D02의 운영 목표와 부하 미완료를 기록.",paths:["TODO.md"],kind:"status_record"}],workingTree:{status:"uncommitted_analysis_and_deferral_record",paths:["scripts/performance/audit_samples.py","scripts/performance/test_audit_samples.py","docs/plans/2026-11-08-performance.md","docs/specs/REMAINING_PERFORMANCE.md"],summary:"기존 표본 재분석과 5개 도구 검사만 기록. 1/4/8/16 동시 요청은 후보이며 미실행. 2026-11-08 문서에서 목표 확정·부하 실행을 실제 배포 후로 이동."}}],Sa=[{sha:"9489c6ee4dc5548416b72770b39a7c223a19d7cc",short:"9489c6e",date:"2026-11-03",authorDate:"2026-11-03T13:07:19+09:00",commitDate:"2026-11-03T13:07:19+09:00",subject:"docs(research): 뒤끝 조사와 웹 Android 연동 설계 추가",title:"뒤끝·웹 Android 조사 기록",parent:1,related:[1,13,14,15,16]},{sha:"59618121622fe9680108dc5b022d1b58845762c0",short:"5961812",date:"2026-11-03",authorDate:"2026-11-03T13:48:17+09:00",commitDate:"2026-11-03T13:48:17+09:00",subject:"docs(project): TODO와 프로젝트 인계 기록 추가",title:"프로젝트 작업 목록 기록",parent:18,related:[18]},{sha:"66411cad160209decb227f107337857107e5e0be",short:"66411ca",date:"2026-11-03",authorDate:"2026-11-03T13:53:30+09:00",commitDate:"2026-11-03T13:53:30+09:00",subject:"docs(context): 프로젝트 진행과 오류 추적 기준 연결",title:"프로젝트 진행 기준 기록",parent:18,related:[18]},{sha:"70d999385d3532faf1b70127c79002e63dcd9bbf",short:"70d9993",date:"2026-11-08",authorDate:"2026-11-08T13:15:52+09:00",commitDate:"2026-11-08T13:15:52+09:00",subject:"docs(research): preserve Nakama analysis and specification guide",title:"Nakama·플랫폼 설계 기록",parent:1,related:[1,14,18]},{sha:"6c7bf5a8de527106e2671f4696f232b488514585",short:"6c7bf5a",date:"2026-11-08",authorDate:"2026-11-08T13:15:57+09:00",commitDate:"2026-11-08T13:15:57+09:00",subject:"docs(platform): add feature contracts plans and console mockups",title:"기능 명세·실행 계획 기록",parent:1,related:[1,2,3,4,5,6,7,8,9,10,11,13,14,15,16,17,19]},{sha:"981d44c56d08c671c9de9f2c85606ae168f617b3",short:"981d44c",date:"2026-11-08",authorDate:"2026-11-08T13:17:47+09:00",commitDate:"2026-11-08T13:17:47+09:00",subject:"feat(console): add React game platform management screens",title:"Rust 서버·React 콘솔 핵심 구현",parent:2,related:[2,3,4,5,6,7,8,11,12,15,17,19]},{sha:"94b5899d1ef01ae9ed896a6d3f2cb9d5e0a17880",short:"94b5899",date:"2026-11-08",authorDate:"2026-11-08T13:18:02+09:00",commitDate:"2026-11-08T13:18:02+09:00",subject:"test(platform): preserve validation probes and execution evidence",title:"기능별 검증 증거 기록",parent:2,related:[]},{sha:"4310819447bd4f148b1775767b26d2bd865cd513",short:"4310819",date:"2026-11-08",authorDate:"2026-11-08T13:18:10+09:00",commitDate:"2026-11-08T13:18:10+09:00",subject:"docs(context): record platform progress and task handoffs",title:"진행 현황·작업 상태 기록",parent:18,related:[9,10,11,12,13,14,15,16,18,19]}],J={date:"2026-11-10",source:"4310819 + 11월 10일 개발 변경분",definition:"여러 게임의 계정·데이터·콘텐츠·경제·운영 상태를 내부 팀이 안전하게 관리하는 Rust 서버와 React 콘솔입니다.",scope:"현재 우선순위는 팀 내부 관리 서버입니다. 외부 고객 문의는 현 단계 범위에서 제외하며, 기존 계획과 조사 이력은 보존합니다.",links:[{title:"기존 진행 현황",url:"https://game-projects97.github.io/game_backend_platform-progress/"},{title:"API 명세 · 205개 동작",url:"https://game-projects97.github.io/game_backend_platform-progress/api/"},{title:"기획서 V2",url:"https://game-projects97.github.io/game_backend_platform-progress/plan-v2/"}],history:[["2026-11-12","SP-01·M0 대조","첫 스프린트와 병합 작업 연결","조사·설계 SP-01과 M0 전체, 오늘 병합·CRUD 회귀·문서 작업을 구분했습니다. M0 미완료 6개와 V2 원격 경로 미확인을 보존했습니다.","근거 대조","first-sprint-m0-review-20261112"],["2026-11-12","스프린트 병합·후속 정정","main 반영 및 현재 상태 문서 동기화","통합 병합 e03a7fb 이후 09d2257에서 CONTEXT·TODO의 오래된 차단/미착수 설명 7줄을 정정했습니다. 기존 CRUD 회귀 검증과 삭제 정책 미결을 구분하고 원본 이력을 보존했습니다.","원격 반영 확인","context-correction-20261112"],["2026-09-13","기획 v0.1","게임 BaaS의 첫 요구사항","콘솔 사진을 출발점으로 인증·저장·콘텐츠·랭킹·운영 기능을 정의했습니다. 당시 모듈러 모놀리스와 Unity 중심 MVP는 제안이었습니다.","이전 기획","prd-v01"],["2026-09-13","아키텍처 v0.2","MSA · Gateway · gRPC 방향 지정","기존 Go 매칭 서버를 별도로 연결하고, MSA와 독립 API Gateway, 내부 gRPC로 진행하라는 방향이 명시됐습니다. 이후 서비스별 DB·이벤트 흐름은 설계 제안으로 확장됐습니다.","사용자 결정","prd-v02"],["2026-11-03","조사·정의","Nakama·뒤끝 조사와 첫 연동안","공식 기능, 제한된 콘솔 실행과 네트워크 관측, MinbWebKit·Escape Ball 소스를 조사했습니다. 조사 근거 222개와 작업 목록·설계 문서 안내를 보존했습니다.","조사 완료","research-blueprint"],["2026-11-07","구현 시작","Rust API와 React 콘솔 연결","관리자 로그인, 프로젝트·환경·역할, 게스트, 버전 저장과 감사를 첫 수직 흐름으로 구현했습니다. Rust와 React는 지정된 기술입니다.","구현·검증","platform"],["2026-11-07","기능 확장","콘텐츠·경제·소셜·데이터 확장","우편·쿠폰·확률, 콘텐츠 버전, 개인·길드·그룹 순위, 친구·길드·그룹, 관리형 데이터와 인덱스까지 단계별 구현·검증 기록을 쌓았습니다.","부분 구현","implementation"],["2026-11-08","후속 분리","탈퇴 제어와 남은 운영 작업","탈퇴 예약·철회·인증 제어를 DB22에 연결했습니다. 실제 정리·복구·성능·UI의 남은 작업은 분리했고 운영 부하/SLO는 실제 배포 후로 미뤘습니다.","후속 계획","remaining"],["2026-11-10","환경 이관","클라우드 개발·테스트 사본 구성","1,359개 파일의 해시를 확인하고 기존 변경을 보존했습니다. Rust424·콘솔3·연동10 등의 검사를 통과했습니다. 운영 DB와 비밀값은 옮기지 않았습니다.","검증 완료","verification"],["2026-11-10","기획 V2","내부 관리 서버 우선으로 범위 정리","고객 문의를 현재 범위와 선행 조건에서 제외했습니다. Android·iOS 빌드 파이프라인은 후속 계획입니다. 기존 MSA 방향을 취소한 것으로 해석하지 않습니다.","현재 기준","v2"],["2026-11-10","인증·API","JWT·SDK와 API 문서 고도화","JWT 서명과 DB 기반 권한·폐기 검사를 연결하고 SDK 갱신 경합을 보완했습니다. 17개 도메인·205개 API 동작의 명세와 실행 문서 모듈을 준비했습니다.","개발 검증","jwt"],["2026-11-10","배포 준비","Render 무료 테스트 서버 진행","Render Free로 진행하기로 선택해 공식 대시보드 로그인 요청을 보냈습니다. 계정 연결·서버 생성·외부 HTTPS·실제 Swagger 실행은 미확인입니다. 정적 API 문서와 라이브 서버를 구분합니다.","검증 대기","deployment"]],domains:[{id:"P1",title:"관리 기반",status:"첫 흐름 검증",tone:"done",done:["관리자 로그인·프로젝트 생성과 선택·환경 격리","owner/editor/viewer 권한과 서버 측 접근 검사","관리 명령의 변경 사유·감사 기록"],left:["운영자 권한 회수·운영 관측·배포 수명주기"],sources:["platform"],todo:"A01–A07 · B01/B02/B07 · C02 · D04"},{id:"P2",title:"계정과 데이터",status:"부분 구현·검증",tone:"doing",done:["게스트·커스텀 가입/로그인·동일 유저 전환, JWT·세션 갱신/폐기","닉네임·정확 검색·접근 차단, 탈퇴 예약/철회","버전 저장·컬렉션/행·스키마/권한·원자 작업","조건 조회·정렬·선택·커서·복합 인덱스·Count/Any"],left:["소셜 계정·계정 복구·디바이스 차단","실제 탈퇴 정리·보존 정책·관리 화면","스키마 변경·실제 DB 복원·소비 게임 필드 계약"],sources:["platform","jwt"],todo:"A03–A05 · B03–B06 · C01/C03/C05/C06 · D03"},{id:"P3",title:"콘텐츠와 경제",status:"부분 구현·검증",tone:"doing",done:["공지·JSON 차트의 작성본·불변 버전·게시/되돌리기/중단","ETag/304·언어 대체·이벤트·점검·클라이언트 버전","지갑·원장·지급·우편·쿠폰·원자적 비용 차감/추첨/보상"],left:["일반 소비·회수·예약 처리","저장 확정 후 응답 전 종료를 포함한 전체 장애 복구"],sources:["content","economy","probability"],todo:"E01/E02 · C04/C06"},{id:"P4",title:"경쟁과 소셜",status:"부분 구현·검증",tone:"doing",done:["개인/길드/그룹 순위와 시즌·보상 정산","친구 요청·수락·차단·정원, 길드 역할·재화·활동","환경 그룹·길드 이동·그룹 통합/삭제와 일부 재시작 복구"],left:["게임별 점수 신뢰·참여 자격","친구 검색·접속 알림·쪽지 등 잔여 계약"],sources:["leaderboards","guilds","groups"],todo:"E03 · C04"},{id:"P5",title:"내부 운영과 실행",status:"범위 정리·후속",tone:"review",done:["기존 권한·감사·멱등성·운영 정책 재사용","외부 고객 문의의 선행 의존 해제"],left:["내부 로그·조회·집계·보관 범위","필요한 예약 명령·취소·재시도·실패 복구"],sources:["remaining","v2"],todo:"E07/E08 · D01–D04"},{id:"P6",title:"게임·외부 연동",status:"독립 준비",tone:"review",done:["MinbWebKit·Escape Ball 연결 경계 조사","플랫폼 TypeScript 클라이언트와 격리 검사"],left:["실제 게임의 저장 필드·계정 전환·기존 저장 호환","Firebase·스토어·푸시·환불·기기 검증"],sources:["integration","v2"],todo:"B05/B06 · E09 · F01–F04"},{id:"P7–P9",title:"채팅·매치·월드",status:"미구현·후속 후보",tone:"todo",done:["기능 조사와 장기 요구사항 보존"],left:["Rust 실시간 연결과 방/월드 소유권·재접속","기존 Go Match 연결과 gRPC 계약 정합","실제 부하·장애·게임 연동 검증"],sources:["prd-v02","platform"],todo:"E04–E06 · D02/D03"}],stages:[["M0","현재 범위 정리","내부 관리 우선, 문의 제외, 기존 TODO와 담당·결정 대기 목록 정합.","현재 기준"],["M1","내부 서버 안정화","권한·감사·자료 수명, 실제 DB 복원과 핵심 장애 회귀를 검증.","우선 작업"],["M2","내부 운영 시범","승인된 배포와 접근 범위, 비밀값·백업·상태 확인·실패 대응.","배포 검증 필요"],["M3","빌드 공통 기반","고정 커밋·환경·버전·산출물 계약. 현행 게임 수동 빌드와 CI/실행기 선택.","계획"],["M4","Android","재현 빌드, 검사, APK/AAB, 승인된 서명, 실기기 설치·업데이트·서버 흐름.","미구현"],["M5","iOS","macOS/Xcode, 프로젝트·archive·서명·TestFlight와 실기기를 구분해 검증.","미구현"],["M6","배포 운영","채널 승인, 업로드·공급자 처리·설치 결과, 중복/실패 복구와 관측.","계획"]],decisions:[["탈퇴·보관 정책","개인 자료·원장·감사·중복 방지 이력의 보관 필드와 기간, 길드·정산·백업 재삭제. 실제 영구 삭제 전 결정."],["운영 DB·백업","SQLite 유지 또는 전환, 복원 위치와 RPO/RTO. 임시 테스트 DB와 운영 DB를 구분."],["장기 아키텍처","MSA·Gateway·gRPC·기존 Go Match 요구와 현재 Rust 단일 서버의 단계적 연결 범위."],["소비 게임 계약","Escape Ball의 현행 저장 필드·이전·오프라인·충돌·계정 전환을 확인."],["모바일·CI","실제 앱 ID·플러그인·iOS 호스트, Linux/macOS 실행기·도구 버전·서명/채널 권한."],["일정·담당","확정된 마감일은 없습니다. 템플릿의 예시 날짜를 실행 약속으로 사용하지 않습니다."]],checks:[["11월 7–8일","기능별 구현 검증","DB22 · Rust424 근거 · HTTP655","단계별 소스·환경에 결박된 과거 기록입니다. 당시 일부 재실행을 결합한 수치이며 전체 운영 검증은 아닙니다."],["11월 10일","클라우드 이관 검증","Rust424 · 콘솔3 · SDK10 · HTTP10","1,359개 파일 대조. 분석 도구5·격리 복구12도 통과. 운영 DB 복원·제품 전역 브라우저·외부/기기·부하는 미실행입니다."],["11월 10일","JWT·SDK 검증","Rust435 · SDK21 · 콘솔3","형식·Clippy·타입/빌드·실HTTP/재시작 흐름 기록. 운영 키·네이티브 SDK·실제 기기 검증은 미완료입니다."],["11월 10일","실행 API 문서 검증","17개 도메인 · 205개 동작","문서 테스트3·HTTP 요청31 통과. 205개 전체 API를 전부 실행했다는 뜻은 아닙니다."],["11월 10일","정적 문서 게시","API·V2·진행 현황 HTTP200","최신 JWT 반영 커밋 9d4c577의 정적 API 페이지는 HTTP 200·브라우저 검증 완료입니다. 실제 API 서버 실행과는 다릅니다."]],architecture:[["현재 구현","Rust · Axum · Tokio · SQLite","React·TypeScript·Vite 관리 콘솔, 파일 DB와 단일 Rust 프로세스. 프로젝트·환경·권한과 데이터 경계를 서버가 집행합니다."],["초기 방향","MSA · 독립 Gateway · gRPC","2026-09-13 지정 방향입니다. 기존 Go Match를 별도 서비스로 연결하려는 의도가 있으며 현재 완료 근거는 없습니다."],["변경을 구분","현재 우선순위 ≠ 장기 구조 취소","11월 10일 내부 관리 서버 우선은 확정입니다. 초기 MSA 취소나 모든 후속 기능 폐기로 확대하지 않습니다."]]},de=[{id:"first-sprint-m0-review-20261112",title:"첫 스프린트 SP-01 · M0 · 병합 근거 대조",path:"reports/first-sprint-m0-review-20261112.md",category:"검증과 배포",status:"배포 기본값·원격 문서 대조",body:`# 첫 스프린트 SP-01 · M0 · 원격 병합 대조

확인일: 2026-11-12. 배포 v13의 기본 작업 데이터와 main 09d2257의 문서를 대조했다. 제품 테스트를 다시 실행한 보고서가 아니다.

## 서로 다른 범위
- 첫 작업 스프린트 SP-01: Nakama·뒤끝 조사와 플랫폼 설계. 조사·설계 문서 작업 5개다.
- 첫 마일스톤 M0: 조사·기록된 핵심 구현. WORK-01~08과 각 하위 작업을 묶는다. SP-01 하나와 같지 않다.
- 이번 주(11월 9~15일)는 날짜 범위다. 오늘 완료된 원격 보존·main 병합은 SP-02, 문서 정리는 SP-18, 부분 CRUD 검증은 SP-12에 속한다. SP-01의 신규 구현 완료로 옮기지 않는다.
- 기획서 V2의 M0·M1 단계 명칭은 작업 보드 마일스톤 ID와 별개다.

## SP-01 항목별 대조
| 작업 | 보드 상태 | 확인한 근거와 한계 |
| --- | --- | --- |
| TASK-01-01 뒤끝 핵심 기능과 API 대응표 정리 | 완료 | 9489c6e의 조사 기록. 현재 main의 app/study/thebackend/01_CORE_FEATURES.md도 확인. 문서 조사이며 전체 SDK 실행 증거는 아니다. |
| TASK-01-02 운영·실시간 기능의 경계 조사 | 완료 | 9489c6e의 조사 기록. 현재 main의 app/study/thebackend/02_OPERATIONS_INTEGRATIONS.md 확인. 발송·결제·실시간 서버 운영 완료는 아니다. |
| TASK-01-03 Nakama 인증·저장·운영 구조 분석 | 완료 | 70d9993 기록과 현재 main의 app/study/nakama/01_ARCHITECTURE.md 확인. 자체 제품 전체 구현을 뜻하지 않는다. |
| TASK-01-04 플랫폼 제공 단계와 첫 흐름 계약 작성 | 완료 | 6c7bf5a 기록과 현재 main의 app/docs/specs/PLATFORM.md 확인. 제공 단계와 첫 흐름 설계 범위다. |
| TASK-01-05 내부 관리 중심 V2 범위 문서화 | 완료·원격 경로 추가 확인 필요 | 보드의 기획서 V2 본문은 보존돼 있다. 현재 main의 app/docs/plans/2026-11-10-backend-platform-v2.md 조회는 404였다. 다른 경로 존재 여부·로컬 원본은 미확인이며 원격 보존 완료라고 단정하지 않는다. 기존 작성 완료 상태는 보존한다. |

## M0 하위 집계와 미완료
배포 기본값 기준 하위 작업 55개 중 완료 49개, 미완료 6개다. 커밋 기록과 상위 WORK 행은 이 개수에서 제외했다. 사용자 브라우저에서 편집한 상태는 이 집계와 다를 수 있다.

| 작업 묶음 | 완료/하위 작업 | 남은 항목 |
| --- | --- | --- |
| SP-01 조사·설계 | 5/5 | V2 지정 경로의 원격 근거는 별도 확인 |
| SP-02 서버·콘솔 기반 | 7/8 | TASK-02-06 내부 서버 배포 인수 조건 확정 |
| SP-03 계정·권한·세션 | 7/8 | TASK-03-08 남은 계정 수명 확장의 계약 분리 |
| SP-04 게임 데이터 | 7/8 | TASK-04-08 컬렉션 스키마 변경의 보존 계약 정리 |
| SP-05 경제·보상 | 6/7 | TASK-05-07 일반 소비·회수·예약 지급 계약 분리 |
| SP-06 콘텐츠·운영 정책 | 5/6 | TASK-06-06 게임 Config·콘텐츠 소유권 계약 확정 |
| SP-07 소셜·랭킹 | 7/8 | TASK-07-08 소비 게임 점수·참가 자격 계약 확정 |
| SP-08 탈퇴 제어 | 5/5 | 예약·철회·인증 제어 범위이며 영구 자료 삭제 완료는 아님 |

## 오늘 작업·병합·검증 연결
- TASK-02-07/08 완료: 기존 JWT·Swagger·SDK 변경과 최신 app/ 구조를 통합한 PR #1이 e03a7fb로 main에 병합됐다. fixture 원문도 복구됐다. M0의 서버·콘솔 기반 증거다.
- 09d2257은 CONTEXT·TODO의 오래된 차단·미병합·미착수 설명 정정이다. 신규 제품 기능 구현 커밋이 아니다.
- TASK-12-10은 검토 상태: 기존 프로필 수정·초기화와 private 행 생성/조회/교체/soft-delete/관리자 복구를 JWT로 검증했다. 신규 CRUD API 구현이 아니며 계정 영구삭제·자산·콘텐츠 삭제 정책은 미결이다. 이 작업은 M2/SP-12로 유지한다.
- TASK-18-04/05/06은 오늘 상태 대조·실행 문서·링크 검증 완료. M5/SP-18 문서 작업이며 SP-01로 이동하지 않는다.
- 합성 테스트 DB 백업·복원 TASK-12-08/09 완료 기록은 유지한다. 운영 DB는 아직 없다.
- 기존 실행 근거: Rust 436, SDK 21, 진입점 4, HTTP 31, OpenAPI 205동작·17도메인, fmt·clippy 통과. 현재 main의 sprint-close 검증 문서와 대조했다. 실행 횟수를 제품 완성률로 계산하지 않는다.
- 서버 배포·이번 통합의 브라우저 검사 미실행. 원격 CI 실행 0개는 CI 성공이 아니다.

## 다음 작업
1. SP-01 V2 문서의 현재 원본·저장 경로를 확인해 원격 근거를 연결한다. 이미 있는 문서를 새 구현으로 세지 않는다.
2. M0의 미완료 6개 계약을 실제 요구사항·권한·게임 입력과 대조해 우선순위를 정한다. 정책을 임의 확정하거나 현재 완료로 바꾸지 않는다.
3. SP-12의 삭제 정책과 배포·외부 연동 검증은 별도 후속으로 유지한다.

## 참고 링크
- [마일스톤](#milestones/goals)
- [주간 작업 보드](#plan/week/2026-11-09)
- [보존된 기획서 V2](#project/documents/v2)
- [기존 통합 검증](#project/documents/sprint-close-20261112)
- [후속 문서 정정](#project/documents/context-correction-20261112)
- [병합 PR #1](https://github.com/game-projects97/game_backend_platform/pull/1)
- [병합 커밋](https://github.com/game-projects97/game_backend_platform/commit/e03a7fb0c8ab537ea3b6ef3491a8d3bf27dd7b14)
- [대조 기준 main](https://github.com/game-projects97/game_backend_platform/commit/09d2257c0e6df763a7477cc9b7ecc3ecbd672616)
- [현재 상태 문서](https://github.com/game-projects97/game_backend_platform/blob/09d2257c0e6df763a7477cc9b7ecc3ecbd672616/.project-context/CONTEXT.md)
- [실행 검증 근거](https://github.com/game-projects97/game_backend_platform/blob/09d2257c0e6df763a7477cc9b7ecc3ecbd672616/app/docs/validation/sprint-close-20261112.md)

이 보고서는 배포 소스의 기본값을 확인한 결과다. 사이트의 사용자 편집은 브라우저에 저장되며 저장소와 자동 동기화되지 않는다. 기존 사용자 본문·댓글·상태·날짜는 덮어쓰지 않는다.
`,filtered:!1,sourceHash:"c5ed921c09a25b90ffe248e3029b95603186c6952e9946b12b9f00513b3f03cc"},{id:"context-correction-20261112",title:"11월12일 main 병합 후 상태 문서 정정",path:"reports/context-correction-20261112.md",category:"검증과 배포",status:"main 정정 반영 확인",body:`# 2026-11-12 main 병합 후 상태 문서 정정

- PR #1의 통합 병합은 e03a7fb0c8ab537ea3b6ef3491a8d3bf27dd7b14로 완료했다.
- 이후 CONTEXT.md·TODO.md에 남은 fixture 차단, main 미병합, TASK-12-10 미착수 설명을 정정했다.
- 현재 원격 main은 09d2257c0e6df763a7477cc9b7ecc3ecbd672616이다. 정정 커밋 기록 시각은 2026-11-12 16:04:37 한국 시간이다.
- 두 문서의 해당 7줄만 교체했다. 변경 역변환으로 그 밖의 전체 내용 보존을 검사했고 원격 파일 전체 바이트도 대조했다.
- 신규 제품 CRUD API 추가가 아니라 기존 프로필·게임데이터의 JWT 회귀 검증 완료다. 계정 영구삭제·자산·콘텐츠 삭제 정책은 미결이며 TASK-12-10 전체 완료로 표시하지 않는다.
- 이번 정정은 문서 작업이다. 제품 테스트 재실행·새 기능·서버 배포는 하지 않았다. 이전 검증 수치는 당시 실행 근거로 보존한다.

## 참고 링크

- [통합 병합](https://github.com/game-projects97/game_backend_platform/commit/e03a7fb0c8ab537ea3b6ef3491a8d3bf27dd7b14)
- [후속 정정·현재 main](https://github.com/game-projects97/game_backend_platform/commit/09d2257c0e6df763a7477cc9b7ecc3ecbd672616)
- [현재 맥락](https://github.com/game-projects97/game_backend_platform/blob/09d2257c0e6df763a7477cc9b7ecc3ecbd672616/.project-context/CONTEXT.md)
- [작업 목록](https://github.com/game-projects97/game_backend_platform/blob/09d2257c0e6df763a7477cc9b7ecc3ecbd672616/.project-context/TODO.md)
`,filtered:!1,sourceHash:"0f5132803af65dc4abfcd095496f5c00d82c15275a676fa0118ea7d8587dc762"},{id:"sprint-close-20261112",title:"11월12일 스프린트 통합·CRUD 검증 및 main 반영",path:"app/docs/validation/sprint-close-20261112.md",category:"검증과 배포",status:"main 병합 완료 · 전체 CRUD 정책 후속",body:`# Sprint integration verification · 2026-11-12

## Source and scope

- Local workspace base: \`2368828d3baaeb7986ad67f6ed22054eef132916\` (includes app/ restructuring and context consolidation).
- Integrated cloud branch: \`20668973db6435165f50cb9e4f384f8aa6d9e5b5\`.
- Original checkout, working tree, databases and context identity were not changed. Work occurred in a separate detached worktree; its independent identity is excluded from this commit.
- Preserved workspace root README and existing histories. Product files are under app/: JWT, Swagger, TypeScript client, scripts and deployment preparation. Existing UI/data/storage keys are unchanged.

## TASK-12-10 supported slice

Added \`jwt_profile_and_private_row_crud_restore_keep_owner_isolation\` using TempDir SQLite and synthetic accounts only. It covers admin/game JWTs, profile modification/read/clear, request replay, private row create/read/replace, stale-version rejection, acknowledged soft delete, administrator restore, preserved creation metadata and other-player isolation before/after restore. Profile clear does not delete an account. The endpoints already existed; no speculative business deletion policy was added.

Account purge, asset removal and content-deletion policy completeness are **not** claimed. Keep the parent CRUD task open for those separately specified follow-ups. No production DB exists or was accessed.

## Executed verification

- Full Rust suite: **436 passed, 0 failed** (54 result groups, including zero-test groups).
- New focused JWT lifecycle regression: **1 passed**; included in the full count.
- TypeScript client: **21 passed, 0 failed**.
- Deployment entrypoint tests: **4 passed**; no Docker build/provision/deploy performed.
- OpenAPI reproducibility: **205 operations / 17 domains**, JSON/YAML, parameters and references valid.
- HTTP smoke: **31 requests passed**, temporary DB and loopback-only server; credentials not saved in plaintext. Browser explicitly **not run**.
- Rust formatting check and clippy all-targets with warnings denied: passed.
- Local toolchain environment preservation check: passed.

Initial new-test failures were invalid synthetic inputs (nickname whitespace, collection kind \`private\` instead of \`user\`, omitted deletion acknowledgment). Inputs were corrected to the existing contracts; production validation was not relaxed. Offline dependency resolution initially lacked jsonwebtoken; locked dependencies were fetched from the official registry.

## Fixture provenance and reproducibility

\`app/docs/api/runtime-examples.json\` was restored unchanged from \`game-projects97/game_backend_platform-progress\`, Git blob **b2c6f7341e10f54ad5bd11ab3328730ba23f3ef9**, **84,249 bytes**. Byte-level Git blob hash matches. Source commit supplied by the coordinator: \`9d4c5772645f82be2d5f4047fb81f5a7decaebf0\`.

The fixture timestamp is **2026-11-10T04:16:31Z**, scope “isolated temporary database; generated test identities; secret values redacted”. This is historical pre-JWT example material, **not current JWT runtime evidence**, and not a reconstructed file. It lacks one old \`/game/me\` example in the previously checked-in catalogue; regeneration omits that unsupported example rather than inventing it. Source enumeration is now sorted, removing filesystem-order-dependent evidence/manifest output.

The launcher no longer forces absent cloud toolchain paths over Mac configuration. Render preparation references app/ context. HTTP-only smoke loads Playwright only for the browser branch; missing Playwright was reproduced before the correction.

## Delivery boundaries

This document records local verification, not remote CI success, main publication or server deployment. The coordinator owns remote publishing/main merge and board updates using the resulting commit SHA. No browser, mobile device, frontend build/performance equivalence, production load or live host verification was performed in this slice. Original missing-fixture blocker is resolved locally by authentic recovery; remote upload success must be verified separately.
`,filtered:!1,sourceHash:"e6af32335cf049c5ab2906ac97cb9fb05426eb77d5cedb1e178905ad27b0ef86"},{id:"sprint-status-20261112",title:"11월12일 스프린트 상태·문서 검증",path:"docs/validation/sprint-status-20261112.md",category:"검증과 배포",status:"오늘 문서 작업 완료 · 제품 차단 별도",body:`# 2026-11-12 스프린트 상태 대조

작업: TASK-18-04. 기준 시간대 Asia/Seoul. 원격 전용 브랜치와 보드 기존 기록을 대조한 문서 검토이며 제품 회귀 테스트 재실행이 아니다.

소스 기준: [검토한 커밋](https://github.com/game-projects97/game_backend_platform/commit/f3589df5f3242a6ce6c7c2dc525ed594f2f7b14a). 01–08의 핵심 구현 완료 상태를 보존한다. 09–19는 부분 준비만으로 전체 완료로 승격하지 않는다.

## 19개 작업의 현재 판정

### WORK-01 · 01. Nakama·뒤끝 조사와 플랫폼 설계
- 기존 사용자 범주 상태: 핵심 구현 완료.
- 현재 확인 기준: [관련 소스/상태 문서](https://github.com/game-projects97/game_backend_platform/blob/f3589df5f3242a6ce6c7c2dc525ed594f2f7b14a/study/thebackend/README.md).
- 남은 범위: 조사와 설계 보존을 제품 기능 구현 완료로 해석하지 않는다.

### WORK-02 · 02. Rust 서버·React 관리 콘솔 기반 구현
- 기존 사용자 범주 상태: 핵심 구현 완료.
- 현재 확인 기준: [관련 소스/상태 문서](https://github.com/game-projects97/game_backend_platform/blob/f3589df5f3242a6ce6c7c2dc525ed594f2f7b14a/server/src/lib.rs).
- 남은 범위: 운영 배포 수명주기와 전체 서비스 기능 완성을 뜻하지 않는다.

### WORK-03 · 03. 계정·권한·세션·접근 차단 구현
- 기존 사용자 범주 상태: 핵심 구현 완료.
- 현재 확인 기준: [관련 소스/상태 문서](https://github.com/game-projects97/game_backend_platform/blob/f3589df5f3242a6ce6c7c2dc525ed594f2f7b14a/server/src/auth.rs).
- 남은 범위: 소셜 계정·계정 복구·디바이스 차단 등 전체 계정 수명 범위는 별도.

### WORK-04 · 04. 게임 데이터 저장·검색·인덱스 구현
- 기존 사용자 범주 상태: 핵심 구현 완료.
- 현재 확인 기준: [관련 소스/상태 문서](https://github.com/game-projects97/game_backend_platform/blob/f3589df5f3242a6ce6c7c2dc525ed594f2f7b14a/server/src/game_data.rs).
- 남은 범위: 스키마 변경, 실제 백업/복원, 소비 게임 SDK 연결과 운영 부하는 별도.

### WORK-05 · 05. 재화·보상·우편·쿠폰·추첨 구현
- 기존 사용자 범주 상태: 핵심 구현 완료.
- 현재 확인 기준: [관련 소스/상태 문서](https://github.com/game-projects97/game_backend_platform/blob/f3589df5f3242a6ce6c7c2dc525ed594f2f7b14a/server/src/economy.rs).
- 남은 범위: 일반 소비/회수·예약과 전체 프로세스 장애 검증은 남는다. 일부 성공 흐름을 경제 전체 완료로 보지 않는다.

### WORK-06 · 06. 공지·차트·이벤트·점검·버전 정책 구현
- 기존 사용자 범주 상태: 핵심 구현 완료.
- 현재 확인 기준: [관련 소스/상태 문서](https://github.com/game-projects97/game_backend_platform/blob/f3589df5f3242a6ce6c7c2dc525ed594f2f7b14a/server/src/content.rs).
- 남은 범위: 기존 Config.dat 소유권, SDK 호환과 후속 콘텐츠 범위는 별도.

### WORK-07 · 07. 친구·길드·그룹·랭킹 핵심 기능 구현
- 기존 사용자 범주 상태: 핵심 구현 완료.
- 현재 확인 기준: [관련 소스/상태 문서](https://github.com/game-projects97/game_backend_platform/blob/f3589df5f3242a6ce6c7c2dc525ed594f2f7b14a/server/src/friends.rs).
- 남은 범위: 게임별 자격·점수 신뢰 검증, 일부 소셜 확장과 반복 일정·운영 혼합 부하는 별도.

### WORK-08 · 08. 탈퇴 예약·철회·인증 제어 구현
- 기존 사용자 범주 상태: 핵심 구현 완료.
- 현재 확인 기준: [관련 소스/상태 문서](https://github.com/game-projects97/game_backend_platform/blob/f3589df5f3242a6ce6c7c2dc525ed594f2f7b14a/server/src/withdrawal.rs).
- 남은 범위: 개인 자료 삭제·보관 정책·정리 작업·탈퇴 관리 UI는 이 구현에 포함되지 않는다.

### WORK-09 · 09. 고객 문의 생성·조회·답변 구현
- 기존 사용자 범주 상태: 예정·후속 범위 미완료.
- 현재 확인 기준: [관련 소스/상태 문서](https://github.com/game-projects97/game_backend_platform/blob/f3589df5f3242a6ce6c7c2dc525ed594f2f7b14a/TODO.md).
- 남은 범위: 최신 작업 트리의 REMAINING_SUPPORT는 2026-11-10 현재 범위 제외로 명시한다. 완료가 아니다.

### WORK-10 · 10. 탈퇴 보관 정책·자료 정리·관리 화면 구현
- 기존 사용자 범주 상태: 예정·후속 범위 미완료.
- 현재 확인 기준: [관련 소스/상태 문서](https://github.com/game-projects97/game_backend_platform/blob/f3589df5f3242a6ce6c7c2dc525ed594f2f7b14a/docs/specs/ACCOUNT_WITHDRAWAL.md).
- 남은 범위: 보관/익명화 정책 미확정. purge worker·자료 정리 상태/관리 UI 구현 근거 없음.

### WORK-11 · 11. 로컬 응답 지연 원인 확인
- 기존 사용자 범주 상태: 예정·후속 범위 미완료.
- 현재 확인 기준: [관련 소스/상태 문서](https://github.com/game-projects97/game_backend_platform/blob/f3589df5f3242a6ce6c7c2dc525ed594f2f7b14a/docs/plans/2026-11-07-store-cache.md).
- 남은 범위: 후속 HTTP 회귀 전체 원인·성능 동등성은 미확인. 한 원인 개선을 모든 지연 해결로 보고하면 안 된다.

### WORK-12 · 12. 실제 서버 백업·복원·장애 복구 검증
- 기존 사용자 범주 상태: 예정·후속 범위 미완료.
- 현재 확인 기준: [관련 소스/상태 문서](https://github.com/game-projects97/game_backend_platform/blob/f3589df5f3242a6ce6c7c2dc525ed594f2f7b14a/README.md).
- 남은 범위: 제품 전체 스키마의 합성 테스트 DB 백업·복원·권한/저장 회귀는 TASK-12-08/09에서 완료했다. 운영 DB는 아직 없다. 향후 실제 운영 데이터·내구성 검증과 전체 CRUD는 별도이며 TASK-12-10은 이후 TODO·일정 미정이다.

### WORK-13 · 13. MinbWebKit·Escape Ball 연결
- 기존 사용자 범주 상태: 예정·후속 범위 미완료.
- 현재 확인 기준: [관련 소스/상태 문서](https://github.com/game-projects97/game_backend_platform/blob/f3589df5f3242a6ce6c7c2dc525ed594f2f7b14a/integration/platform-client.ts).
- 남은 범위: 실제 MinbWebKit 모듈 수출/소비 게임 편집·필드 매핑·이전 저장 호환·실행 연결은 미완료.

### WORK-14 · 14. 채팅·매칭·게임방·월드 동기화 구현
- 기존 사용자 범주 상태: 예정·후속 범위 미완료.
- 현재 확인 기준: [관련 소스/상태 문서](https://github.com/game-projects97/game_backend_platform/blob/f3589df5f3242a6ce6c7c2dc525ed594f2f7b14a/docs/specs/PLATFORM.md).
- 남은 범위: 자체 채팅·매칭 큐·게임방·월드 권위/동기화 구현 및 실행 검증 근거 없음. 최신 V2는 내부 관리 1차 완료 조건 밖으로 둠.

### WORK-15 · 15. 신고·로그·집계·예약 작업 구현
- 기존 사용자 범주 상태: 예정·후속 범위 미완료.
- 현재 확인 기준: [관련 소스/상태 문서](https://github.com/game-projects97/game_backend_platform/blob/f3589df5f3242a6ce6c7c2dc525ed594f2f7b14a/TODO.md).
- 남은 범위: 신고 접수/처리·게임 로그 수집/보관·운영 통계/퍼널·일반 예약 실행/발송 기능을 위 기반과 혼동하면 안 된다. E07/E08 전체는 미완료.

### WORK-16 · 16. 푸시·결제·환불·Android 실기기 검증
- 기존 사용자 범주 상태: 예정·후속 범위 미완료.
- 현재 확인 기준: [관련 소스/상태 문서](https://github.com/game-projects97/game_backend_platform/blob/f3589df5f3242a6ce6c7c2dc525ed594f2f7b14a/study/thebackend/09_WEB_ANDROID_INTEGRATION.md).
- 남은 범위: 실제 공급자 sandbox·푸시 수신·구매/복구/환불·APK와 Android 실기기 검증 완료 증거 없음.

### WORK-17 · 17. 기능 완료 후 관리 콘솔 정리
- 기존 사용자 범주 상태: 예정·후속 범위 미완료.
- 현재 확인 기준: [관련 소스/상태 문서](https://github.com/game-projects97/game_backend_platform/blob/f3589df5f3242a6ce6c7c2dc525ed594f2f7b14a/console/src/App.tsx).
- 남은 범위: 기능 완료 이후 UI 리팩터링은 별도 범위이며 구현 완료 근거 없음. 현재 console 파일은 HEAD 대비 수정되지 않음.

### WORK-18 · 18. README·작업 상태 문서 갱신
- 기존 사용자 범주 상태: 예정·후속 범위 미완료.
- 현재 확인 기준: [관련 소스/상태 문서](https://github.com/game-projects97/game_backend_platform/blob/f3589df5f3242a6ce6c7c2dc525ed594f2f7b14a/README.md).
- 남은 범위: TASK-18-03 README 갱신 원격 반영 완료. 오늘 TASK-18-04/05/06 상태 대조·실행 문서·최종 링크 검사를 완료했다. 문서 완료는 제품 전체 완료가 아니다.

### WORK-19 · 19. 배포 후 성능 목표 확정·부하 테스트
- 기존 사용자 범주 상태: 예정·후속 범위 미완료.
- 현재 확인 기준: [관련 소스/상태 문서](https://github.com/game-projects97/game_backend_platform/blob/f3589df5f3242a6ce6c7c2dc525ed594f2f7b14a/TODO.md).
- 남은 범위: 승인된 운영 워크로드/SLO·RPO/RTO와 배포 후 부하 검증은 미완료. 테스트 서버 구성이나 정적 페이지 공개를 해당 검증 완료로 세지 않는다.

## 변경된 해석과 유지할 제한

- JWT·Swagger·TypeScript 클라이언트는 53개 파일이 전용 원격 브랜치에 보존됐다. 과거 미커밋 표시는 당시 기록이다. 응답 fixture 1개가 제외되어 전체 원격 보존은 차단 상태이며 명세 재생성 검사는 차이가 날 수 있다.
- main 병합·공개 라이브 서버·운영 DB·실기기·운영 부하 완료를 주장하지 않는다.
- 고객 문의는 현재 내부 관리 범위 밖이며 완료가 아니다. 신규 실시간/모바일은 별도 후속이다.
- 현재 검토에 사용하는 테스트 수는 기존 실행 기록이다. 파일 존재와 문서 검토를 API 동작 시험으로 대신하지 않는다.

## 오늘의 문서 검사

- TODO/CONTEXT의 상대링크 162개와 실행 문서 4종의 상대링크 26개, 위 고정 커밋 소스 링크 19개를 원격 tree 및 이번 추가 문서에 대조했다.
- RUNNING의 DB 버전·Origin·JWT 설정, SDK refresh 응답, Swagger 재현 검사 제약과 누락 검증 문서 링크를 바로잡았다.
- 원격 기준 TypeScript SDK 21개 테스트를 재실행해 통과했다. Rust 전체·HTTP smoke·브라우저·배포·운영 데이터 검사는 이번 문서 작업에서 재실행하지 않았다.
`,filtered:!1,sourceHash:"f25f7d376f9e1c8943f770920682462d8115703166e1b0ae20a22d849001cdfd"},{id:"weekly-execution-20261111",title:"11월11일 실행·복구 검증",path:"docs/weekly-execution-20261111.md",category:"검증과 배포",status:"테스트 DB 검증 완료 · 원격 반영 별도 추적",body:`# 11월 11일 실행·복구 검증

한국 시간 2026년 11월 11일 기준. 이번 주는 11월 9–15일이며, 사용자가 승인한 JWT·Swagger·SDK 검증본 반영과 격리 테스트 DB 복구/API 검증은 모두 오늘 실행 대상으로 확정했다. 운영 DB는 아직 없다.

## 현재 결과

- JWT·Swagger·SDK: Rust435, SDK21, 콘솔3, fmt·Clippy·빌드, OpenAPI205개 동작/17도메인, JWT HTTP5흐름, Swagger HTTP31요청, 엔트리포인트4 검사 통과. 별도 원격 게시 상태는 작업 TASK-02-07에서 추적한다.
- TASK-12-08 완료: 실제 제품 bootstrap으로 DB22 전체 스키마59개 테이블 생성. 20개 테이블에 합성행50개를 채운 테스트 DB의 live-WAL 백업과 별도 새 경로 복원. 스키마와 모든 테이블 행 digest 동일, quick_check 통과, 외래키 위반0건.
- TASK-12-09 완료: 준비 HTTP14건과 복원 서버 HTTP29건, 총43건의 예상 상태 assertion과 별도 불변조건15개 통과. API 검사 후 복원본은56행이며 증가분은 assets1·audit2·requests1·sessions2다. 원본 테스트 DB의 논리 내용은 유지됐다.
- 두 테스트 서버는 정상 종료했다. 실제 사용자 데이터·배포·외부 비밀값·원본 제품 소스는 변경하지 않았다. 게시 대상54개 입력 파일의 해시는 모두 유지됐다.
- README 현황 초안과 상대링크15개 검증을 준비했다. 원격 반영 확인 전이므로 TASK-18-03은 검토 중으로 둔다.

## API별 검증 범위

모든 아래 경로의 접두사는 /api/v1이다.

### 생성

백업 전 POST /admin/projects, /admin/projects/{project}/bindings, /game/{project}/{environment}/guests 및 /sessions, /admin/projects/{project}/{environment}/assets, /admin/projects/{project}/{environment}/players/{player}/grants를 실행했다. 관리자3명은 CLI로 생성했다. 프로필·공지/게시 행은 SQL fixture로 삽입했으며 해당 제품 API 생성 검증이 아니다.

### 조회·수정

복원 후 GET /game/me, /game/progress, /admin/projects/{project}/{environment}/players를 확인했다. PUT /game/progress는 원래 요청 재전달, 오래된 버전409, 새 저장 version2와 재조회까지 확인했다. 자산 생성은 editor201·viewer403을 확인했다. 지급 재전달은 원장1행·잔액37로 유지됐다. 지갑/원장 상태는 SQL로 대조했으며 해당 조회 API를 실행한 것은 아니다.

### 삭제

DELETE /game/session의204와 후속 GET /game/me의401을 확인했다. 계정·게임데이터·자산·콘텐츠의 삭제는 이번 검사에 포함하지 않았다. 전체 CRUD 완료로 해석하지 않는다.

### JWT 인증·인가

복원 전 발급 토큰이 동일 임시 서명 키와 복원된 세션DB에서 동작했다. 토큰 누락과 admin/game audience 교차는401, 회전 이전 토큰은401·새 토큰은200, 로그아웃 후에는401이었다. viewer 읽기는200·자산 생성은403, editor의 허용환경 생성은201이었다. 미할당 환경/다른 프로젝트 접근은403, 잘못된 경로의 유저 진행 접근은404, 타환경/프로젝트 자격 로그인은401이었다.

이번43요청은 서명 위변조·만료·알고리즘 공격 전체를 검사한 것이 아니다. 별도 기존 JWT 회귀 검사와 구분한다.

## 근거와 한계

- 제품 기반 커밋: 4310819447bd4f148b1775767b26d2bd865cd513 및 해시 고정한 JWT/API/SDK 변경분.
- 실행 바이너리 SHA256: 0c5b3111e8239267a5cc4dd81381f21e156a875818ac16f614560b18606a0a47.
- 백업 SHA256: ffa03045b83a1fb04cf94ee3c2abb67fe4995674abaff052620e4dd4c54728d0.
- 검증 종료: 2026-11-11 11:35:33 한국 시간.

현재 운영 DB가 없으므로 기존 운영 DB 복원이 대기 중인 것은 아니다. 운영 환경·DB를 향후 구성하면 실제 데이터, 내구성, 부하, 프로세스 장애·디스크 손상과 인프라 복구를 추가 검증한다. 빈 도메인 테이블도 보존·대조했지만 모든 도메인 작업을 개별 실행한 것은 아니다.

## 배포 인수 준비 체크리스트

다음은 향후 실제 배포의 준비사항이며 오늘 테스트 DB 검사 완료를 막는 조건이 아니다.

- 실행본·소스: 실제 게시된 커밋과 이미지/바이너리 해시를 고정한다.
- 대상·접근·TLS: 사용할 계정/서비스, 내부 접근 범위, 실제 발급 HTTPS 주소와 프록시를 확정한다.
- DB·내구성: 테스트 DB와 향후 운영 DB를 분리하고 저장 위치·보관·백업/복원 책임을 정한다. 현재 Render Free 준비안의 파일시스템은 재시작/배포/idle 때 사라질 수 있다.
- 비밀값: JWT 키는 서버 런타임의 승인된 보관 경로로 전달한다. 저장소·브라우저·SDK에 넣지 않는다.
- 기동·종료·복귀: /health와 실제 보호 API를 확인하고, 현재 SIGINT 종료 동작 및 호스트 종료 신호, 실패 시 이전 검증본 복귀 절차를 대조한다.
- 공개 HTTPS·브라우저·실제 기기·스토어·비용 발생은 별도 대상/권한 범위에서 진행한다.

## 후속 TODO

TASK-12-10: 계정·게임데이터·자산·콘텐츠 삭제, 프로필 수정 등 이번에 미실행한 CRUD를 후속 TODO로 등록했다. 사용자 요청에 따라 지금은 실행하지 않으며 일정 미정·미착수다. 실제 지원 endpoint와 권한·상태·DB 효과를 대조해 별도 착수한다.


## 2026-11-12 원격·스프린트 후속 확인

- TASK-02-07: 전용 브랜치 cloud/jwt-swagger-sdk-20261111에 53개 파일 게시를 확인했습니다. docs/api/runtime-examples.json 1개가 게시되지 않아 전체 보존은 차단 상태입니다. 명세 재생성 재현성은 제한되며 main 병합·서버 배포 완료가 아닙니다.
- TASK-18-03: README 최신 상태·실행 안내·검증 범위 정리 완료. GitHub 원격 경로 기준 상대링크 14개 확인. 기존 검사 수치는 11월11일 기록이며 오늘 제품 테스트를 다시 실행한 것이 아닙니다.
- 원격 commit status 0개, PR-triggered workflow 조회 0개. CI 성공을 뜻하지 않습니다.
- TASK-12-08/09 완료 유지, TASK-12-10은 후속 TODO·일정 미정·미착수 유지.
- 기존 템플릿 UI·저장 키 유지. 이전 자동 반영 기록과 정확히 같은 작업만 갱신하며 사용자가 편집·삭제한 작업은 보존합니다.

### 참고 링크

- [제품 검증본 커밋](https://github.com/game-projects97/game_backend_platform/commit/3a9455f0bdd52b3c84bb9abc462053186e3d8447)
- [README 정리 커밋](https://github.com/game-projects97/game_backend_platform/commit/f3589df5f3242a6ce6c7c2dc525ed594f2f7b14a)
- [README 원문](https://github.com/game-projects97/game_backend_platform/blob/f3589df5f3242a6ce6c7c2dc525ed594f2f7b14a/README.md)
`,filtered:!1,sourceHash:"f160b5ee902880fdebc0440075e7e087d859057456ae1e23fde46893828ba3d8"},{id:"prd-v02",title:"PRD v0.2 · MSA와 Go Match 통합",path:"2026-09-13 PRD 대화",category:"이전 기획",status:"대화 기반 복원 요약",body:`# PRD v0.2 · 2026-09-13

당시 대화와 문서 설명을 바탕으로 정리했습니다. DOCX 원문과 현재 구현을 동일시하지 않습니다.

## 사용자가 지정한 방향
기존 Go 실시간 매칭 서버를 별도로 붙이고, MSA·별도 API Gateway·gRPC로 진행한다는 방향입니다.

## 설계 제안
- Gateway: 외부 인증·라우팅·요청 제한
- Auth, Project, GameData, LiveOps, Leaderboard, Social, Log와 독립 Go Match
- 서비스 내부 계약은 proto/gRPC, 후속 처리에는 이벤트 흐름
- 서비스별 DB 소유권, Redis 랭킹과 이벤트 중복 처리
- Outbox·멱등성·Saga, deadline/timeout/retry, 관측성과 배포
이 목록은 당시 제안이며 모든 요소가 별도로 확정되거나 구현됐다는 뜻은 아닙니다.

## 현재와의 차이
현재는 Rust/Axum/SQLite 단일 프로세스와 React 콘솔입니다. 별도 Gateway, gRPC/proto 통합, 기존 Go Match 연결, 서비스별 DB, Event Bus/Outbox/Saga, Redis/OpenTelemetry/Kubernetes 통합은 완료 근거가 없습니다.

## 유지할 판단
내부 관리 서버 우선은 장기 MSA 방향 취소와 다릅니다. 후속 아키텍처 결정에서 범위와 이행 조건을 정해야 합니다.

## 원문 확보 범위
game_baas_msa_prd_v0.2.docx의 당시 대화 설명은 확인했지만 원본 DOCX 바이트는 확보하지 못했습니다.`,filtered:!1,sourceHash:""},{id:"prd-v01",title:"PRD v0.1 · 게임 BaaS 최초 정의",path:"2026-09-13 PRD 대화",category:"이전 기획",status:"대화 기반 복원 요약",body:`# PRD v0.1 · 2026-09-13

이 자료는 당시 대화에서 확인한 문서 설명을 복원한 요약이며 DOCX 원문을 재현한 것이 아닙니다.

## 출발점
뒤끝 콘솔 사진을 기반으로 게임 BaaS 요구사항과 PRD 작성을 요청했습니다.

## 기능 분류
- 개발: 유저·게임 정보·클라우드 세이브·차트·확률·펑션·랜덤 조회·매치·버전
- 운영: 접근 관리·길드·리더보드·그룹·우편·공지·이벤트·쿠폰·문의·정책
- 관측·커뮤니티: 대시보드·로그·채팅·신고/제재

## 당시 제안
초기 모듈러 모놀리스, 프로젝트/환경과 관리자 권한, 인증→데이터→차트→랭킹→공지/우편/쿠폰→로그의 MVP와 Unity SDK를 제안했습니다. Next.js와 NestJS/Spring 등은 당시 후보이며 현행 선택이 아닙니다.

## 다음 버전에서 바뀐 점
사용자가 MSA·독립 Gateway·gRPC·기존 Go Match 통합을 지정해 v0.2로 변경했습니다. 현행 서버 기술은 이후 지정된 Rust, 콘솔은 React입니다.

## 원문 확보 범위
2026-09-13 PRD 요구사항 정의 대화의 설명은 확인했습니다. backnd_clone_prd_v0.1.docx 원본 파일과 최초 참조 사진 픽셀은 이번 작업에서 확보하지 못했습니다.`,filtered:!1,sourceHash:""},{id:"study-nakama-01-architecture-md",title:"Nakama 전체 구조와 실행 흐름 분석",path:"study/nakama/01_ARCHITECTURE.md",category:"이전 조사",status:"역사적 조사·제안",body:`# Nakama 전체 구조와 실행 흐름 분석

## 짧은 답

Nakama는 게임에 공통으로 필요한 계정·저장·소셜·랭킹·실시간 기능과 게임별 서버 코드를 하나의 Go 프로세스에 결합한 백엔드다. **API 경계, 데이터 일관성, 세션 수명, 게임별 확장 경계**를 배우기에 좋은 자료다. 디렉터리별 마이크로서비스 구성은 아니다. 핵심 구현 상당수가 같은 \`server\` 패키지에 있고 \`main\`이 구체 구현을 직접 조립한다.

분석 기준은 \`master\`의 \`e920249a3465bea4b8ea2968020c488201b61a8e\`다. 이후의 master 변경과 섞지 않도록 아래 소스 링크는 커밋에 고정했다. 공개 저장소의 해당 커밋만 분석했으며 상용 제품의 내부 구현은 분석하지 않았다.

## 먼저 알아야 할 언어/문법

| 코드 형태 | 이 프로젝트에서의 의미 |
|---|---|
| \`interface\`와 \`NewLocal...\` | 역할 계약과 현재 프로세스 안에서 동작하는 구현. 인터페이스가 있다는 사실만으로 분산 기능이 생기지는 않는다. |
| \`*sql.DB\` | 요청마다 새 DB를 만드는 객체가 아니라 연결 풀을 공유하는 핸들이다. |
| \`context.Context\` | 취소·기한과 인증된 사용자 정보를 전달한다. 인증 상태의 영구 저장소는 아니다. |
| \`go func()\`와 \`chan\` | 독립 실행 작업과 메시지 전달. goroutine을 만든다고 데이터 접근이 자동으로 안전해지지는 않는다. |
| 함수 값과 callback | API before/after, 매치 입장·퇴장 같은 확장 지점을 등록한 뒤 호출한다. |
| protobuf \`oneof\` | 실시간 \`Envelope\`가 어떤 메시지인지 \`type switch\`로 구분한다. |

## 주요 파일 지도

표의 역할은 코드 탐색을 위한 논리적 분류다. 별도 서비스나 독립 Go 패키지라는 뜻은 아니다.

| 위치 | 읽을 이유 |
|---|---|
| [main.go][main] | 설정, DB, local 컴포넌트, runtime, API, 종료 순서의 조립 지점 |
| [apigrpc/apigrpc.proto][proto] | 클라이언트 API와 HTTP 매핑의 계약 |
| \`apigrpc/*.pb*.go\` | 생성된 gRPC/HTTP 어댑터. 사업 로직 탐색의 출발점으로는 비효율적 |
| [server/api.go][api] 및 \`api_*.go\` | 인증 interceptor, 입력 검증, before/after hook, core 호출 |
| \`server/core_*.go\` | SQL, 권한, 트랜잭션 등 기능의 실질적 규칙 |
| [server/socket_ws.go][socket], \`session_ws.go\`, [pipeline.go][pipeline] | 연결 수립, 읽기/쓰기, 실시간 메시지 분배 |
| \`tracker.go\`, \`message_router.go\`, \`match*.go\` | 접속 상태, 메시지 목적지, 매치 소유권 |
| \`runtime*.go\` | Go/Lua/JavaScript 게임 코드의 로딩과 호출 |
| [server/db.go][db], \`migrate/sql/*.sql\` | DB 연결과 스키마 이력 |
| \`server/console*.go\`, [console/ui.go][consoleui] | 운영자 API와 내장 정적 UI |
| \`social/\`, \`iap/\`, \`internal/\`, \`vendor/\` | 외부 인증·구매 검증, 내부 유틸리티, 고정 의존성 |

이 커밋의 단순 파일 집계는 vendor를 제외한 Go 파일 232개, \`server\` Go 파일 157개, 그중 테스트 파일 26개, SQL migration 20개다. 생성 파일과 내부 라이브러리도 포함된 수치이므로 자체 구현 예상 분량으로 해석하면 안 된다.

## 1. 전체 흐름 파악: 플로우 차트

\`\`\`mermaid
flowchart TD
    Start[main] --> Command{CLI mode}
    Command --> Migrate[Migration command]
    Command --> Check[Runtime check command]
    Command --> Config[Read and validate configuration]
    Config --> DB[Connect database and check schema]
    DB --> Local[Create local registries and caches]
    Local --> Runtime[Load game runtime and callbacks]
    Runtime --> Services[Start scheduler and build pipeline]
    Services --> API[Start API and console]
    API --> Running[Serve HTTP gRPC and WebSocket]
    Running --> Signal[Receive termination signal]
    Signal --> Drain[Stop matches with grace period]
    Drain --> Stop[Cancel context and stop components]
\`\`\`

이 그림은 **요청이 오기 전에 무엇을 만들어야 하는가**를 보여준다. \`--version\`, \`healthcheck\` 같은 보조 CLI 분기는 가독성을 위해 생략했다.

1. \`main\`은 일반 서버 실행과 \`migrate\`, \`check\` 명령을 분리한다. 일반 실행에서는 \`migrate.Check\`로 스키마 상태를 확인한다. 스키마 적용은 별도 명령의 책임이다.
2. DB 연결 후 세션·presence·메시지 router·랭킹 cache·매치 registry를 만든다.
3. \`tracker.SetMatchJoinListener(matchRegistry.Join)\`처럼 이벤트 발생자에 수신 함수를 등록한다. 이후 runtime 생성에 이 객체들을 넘긴다.
4. runtime 초기화 후 matchmaker, party listener, storage index filter를 연결한다. storage index \`Load\`는 별도 goroutine이므로 API 시작과 동기 완료 장벽을 공유하지 않는다.
5. API와 운영 콘솔을 시작하고 OS 종료 신호를 기다린다. 종료 시 매치를 먼저 정리하고 전체 context를 취소한 뒤 컴포넌트들을 중단한다.

다음은 원본의 조립 형태를 줄인 **의사 코드**다. 매개변수와 오류 처리는 생략했다.

\`\`\`text
db = DbConnect(...)
migrate.Check(...)
tracker = StartLocalTracker(...)
matchRegistry = NewLocalMatchRegistry(...)
tracker.SetMatchJoinListener(matchRegistry.Join)
runtime = NewRuntime(...)
pipeline = NewPipeline(...)
apiServer = StartApiServer(...)
\`\`\`

근거: [초기 조립 main.go:159–229][startup], [종료 main.go:239–263][stop], [HandleShutdown][shutdown]. 배울 점은 초기화 순서와 실패 처리를 명시적으로 유지하는 것이다. 자체 MVP에 이 많은 객체를 먼저 만드는 것은 권하지 않는다.

## 2. 노드들의 실제 동작: 시퀀스 다이어그램

\`\`\`mermaid
sequenceDiagram
    participant Client
    participant Gateway
    participant API
    participant Hooks
    participant Core
    participant DB
    Client->>Gateway: write storage request
    Gateway->>API: gRPC request
    API->>API: verify token and context
    API->>Hooks: before write
    Hooks-->>API: accepted request
    API->>API: validate input and owner
    API->>Core: write objects
    Core->>DB: transaction and version checks
    DB-->>Core: commit result
    Core-->>API: acknowledgements
    API->>Hooks: after write
    API-->>Gateway: result
    Gateway-->>Client: HTTP response
\`\`\`

성공한 일반 Storage HTTP 요청의 흐름이다. \`Gateway\`는 gRPC-Gateway, \`API\`는 \`ApiServer\`, \`Hooks\`는 등록된 runtime 함수다. hook이 없으면 해당 호출은 생략되며, 인증·검증·before hook·DB 오류는 성공 경로를 중단한다.

1. 일반 HTTP API는 gateway가 로컬 gRPC endpoint를 호출한다. gRPC 직접 호출은 gateway를 거치지 않는다.
2. gRPC interceptor는 \`securityInterceptorFunc\`로 검증하고 context를 전달한다.
3. \`ApiServer.WriteStorageObjects\`는 before hook 이후 collection/key/JSON 등을 검증하고 인증된 사용자 ID를 각 저장 작업의 소유자로 지정한다.
4. \`StorageWriteObjects(..., false, ops)\`의 \`false\`는 클라이언트 경로가 서버 권한을 갖지 않음을 표현한다. core에서 권한과 버전을 검사하고 DB transaction을 수행한다.
5. after hook은 core 성공 이후 호출된다. \`traceApiAfter\`는 hook 오류를 API 오류로 반환하지 않으므로 이미 완료한 DB 작업을 되돌리는 용도로 사용할 수 없다.

\`\`\`text
WriteStorageObjects(request):
    request = beforeHook(request)       # 등록된 경우
    validate(request)
    ops = bindOwner(authenticatedUser, request.objects)
    acks = StorageWriteObjects(authoritative=false, ops)
    afterHook(acks, request)             # 등록된 경우
    return acks
\`\`\`

근거: [gRPC interceptor와 gateway][api], [Storage API][storageapi], [hook 호출 의미][trace]. 위 의사 코드는 트랜잭션 경계를 설명하기 위한 것으로 실행 코드가 아니다.

**예외 경로:** HTTP \`/v2/rpc/...\`는 \`RpcFuncHttp\`에 직접 매핑되고 \`/ws\`도 별도 acceptor다. 따라서 “모든 HTTP 요청은 gRPC interceptor에서 보안 처리가 끝난다”는 설명은 틀리다. custom HTTP handler 역시 자체 인증 책임을 확인해야 한다. [라우트 등록][routes]

## 3. 함수 호출 관계: 콜 그래프

\`\`\`mermaid
flowchart TD
    Main[main] --> Init[NewRuntime]
    Main --> ApiStart[StartApiServer]
    Main --> SetListener[SetMatchJoinListener]
    ApiStart --> Register[RegisterNakamaServer]
    ApiStart --> SocketFactory[NewSocketWsAcceptor]
    Interceptor[Unary interceptor] --> Security[securityInterceptorFunc]
    Interceptor --> Handler[WriteStorageObjects]
    Handler --> Before[Runtime before callback]
    Handler --> CoreWrite[StorageWriteObjects]
    Handler --> After[Runtime after callback]
    Session[SessionWS Consume] --> Dispatch[Pipeline ProcessRequest]
    Dispatch --> MatchJoin[Pipeline matchJoin]
\`\`\`

코드 내 호출과 프레임워크 디스패치 관계를 함께 표시했다. unary interceptor가 보안 함수를 호출한 뒤 \`handler(ctx, req)\`로 등록된 API method를 호출한다. \`Before\`와 \`After\`는 등록된 함수 값에 대한 조건부 callback이다. \`RegisterNakamaServer\`도 요청을 실행하는 것이 아니라 서비스 구현을 등록한다.

1. **조립 경로:** \`main → NewRuntime / StartApiServer\`로 실제 구현을 연결한다.
2. **일반 API 경로:** 프레임워크 dispatcher → interceptor → \`ApiServer\` method → \`core_*\` 함수다.
3. **실시간 경로:** \`sessionWS.Consume → Pipeline.ProcessRequest\`의 메시지 종류 분기 → \`pipeline_*\` method다. 일반 API와 같은 진입 handler를 거치지 않는다.
4. **등록 경로:** \`tracker.SetMatchJoinListener\`에 전달한 method 값은 presence 이벤트 처리 중 나중에 호출된다. 등록과 실행을 분리해서 읽어야 한다.

\`\`\`go
// server/api.go:114-120의 핵심 호출 순서
ctx, err := securityInterceptorFunc(logger, config, sessionCache, ctx, req, info)
if err != nil {
    return nil, err
}
return handler(ctx, req)
\`\`\`

근거: [API 등록 및 interceptor][api], [pipeline의 메시지 분기][pipeline], [tracker listener 등록][startup]. 세부 match callback과 큐 처리는 실시간 분석 문서에서 이어진다.

## 4. 코드 레벨 의존성: 클래스 다이어그램

\`\`\`mermaid
classDiagram
    direction LR
    class ApiServer
    class Pipeline
    class Runtime
    class SQLPool
    class SessionRegistry
    class Tracker
    class MessageRouter
    class MatchRegistry
    ApiServer --> SQLPool
    ApiServer --> Runtime
    ApiServer --> SessionRegistry
    ApiServer --> MatchRegistry
    Pipeline --> Runtime
    Pipeline --> Tracker
    Pipeline --> MessageRouter
    Pipeline --> MatchRegistry
    MessageRouter --> SessionRegistry
    MessageRouter --> Tracker
\`\`\`

\`SQLPool\`은 실제 코드의 \`*sql.DB\`를 간단히 표현한 이름이다. 이 그림의 화살표는 참조·사용 관계이며 메모리 독점 소유나 서비스 간 RPC를 뜻하지 않는다.

1. \`main\`이 공통 객체를 생성하고 \`ApiServer\`, \`Pipeline\`, \`Runtime\`이 필요한 객체를 참조한다. 각 요청이 registry를 새로 만드는 구조가 아니다.
2. \`ApiServer\`는 영구 데이터 API와 관리 기능을 호출하고 \`Pipeline\`은 연결된 session의 메시지를 해석한다. 둘은 같은 runtime과 매치 registry를 사용할 수 있다.
3. \`SessionRegistry\`는 활성 연결, \`Tracker\`는 stream별 presence, \`MessageRouter\`는 수신자를 찾아 메시지를 보내는 역할이다. 영구 사용자 행과 이 객체들은 수명이 다르다.
4. 종료 책임은 \`main\`의 조립 순서와 각 컴포넌트의 \`Stop\`/context 계약에 분산되어 있다. Go GC가 소켓·goroutine의 종료 프로토콜까지 대신해주지 않는다.

\`\`\`text
ApiServer {
    db: *sql.DB
    sessionRegistry: SessionRegistry
    matchRegistry: MatchRegistry
    runtime: *Runtime
}
\`\`\`

위 의사 선언의 실제 필드는 [ApiServer 구조체][apistruct]와 [Pipeline 구조체][pipelinestruct]에 있다. 이처럼 많은 의존성을 가진 중앙 객체는 Nakama의 기능 폭에 따른 결과다. 자체 플랫폼에서는 실제 사용하는 역할만 주입하면 된다.

## 실제 함수 흐름

| 관심사 | 처음 읽을 지점 | 다음에 따라갈 지점 | 확인할 계약 |
|---|---|---|---|
| 부팅 | \`main.main\` | \`DbConnect\`, \`NewRuntime\`, \`StartApiServer\` | 스키마와 모듈 실패 시 서버 시작 여부 |
| 로그인 | \`ApiServer.AuthenticateDevice\` | \`AuthenticateDevice\`, token 생성 | 식별자 증명, 신규 생성, 제재 사용자 |
| 저장 | \`ApiServer.WriteStorageObjects\` | \`StorageWriteObjects\` | 소유권, 권한, version 충돌, batch 원자성 |
| 실시간 | \`NewSocketWsAcceptor\` | \`sessionWS.Consume\`, \`Pipeline.ProcessRequest\` | 연결 인증과 메시지별 권한의 구분 |
| 게임 상태 | \`LocalMatchRegistry\` | \`MatchHandler\`, \`MatchCore\` | 상태를 변경하는 실행 흐름과 큐 한도 |
| 종료 | \`HandleShutdown\` | \`MatchRegistry.Stop\`, 각 컴포넌트 \`Stop\` | 유예 시간, 강제 종료, 저장 책임 |

## 헷갈리기 쉬운 지점

- **DB 공유와 메모리 공유는 다르다.** 부팅은 \`NewLocalSessionRegistry\`, \`StartLocalTracker\`, \`NewLocalMatchRegistry\` 등 local 구현을 사용한다. DB를 공유하는 두 프로세스가 자동으로 같은 접속자와 매치를 아는 구조로 해석하지 않는다.
- **래퍼를 통과했다고 전부 같은 transaction은 아니다.** runtime callback의 DB 작업과 core 작업은 별도 호출이다. after hook 실패가 본 작업을 rollback하지 않는다.
- **데이터 저장소와 파일 저장소는 다르다.** Storage API는 collection/key/owner로 식별되는 JSON 객체를 다룬다. 대용량 파일·이미지 업로드 서비스와 CDN은 별도 요구사항이다.
- **프로토콜 생성 코드와 핵심 규칙은 다르다.** 처음부터 \`*.pb.go\`를 따라가면 생성 코드에 시간을 쓰게 된다. \`.proto → api_* → core_*\` 순서로 읽는다.
- **README가 커밋의 모든 동작을 정확히 표현하지는 않는다.** rUDP 언급과 실행 코드의 WebSocket 등록 차이는 실시간 문서에 기록했다.
- **master는 출시 태그가 아니다.** 이 snapshot의 changelog에는 3.41.0 이후의 Unreleased 항목이 있다. 예제 compose는 3.37.0 이미지를 사용한다.

## 다음에 더 보면 좋은 지점

자체 플랫폼을 위한 권장 독서 순서는 인증/저장 → 런타임/운영 → 필요할 때 실시간이다. 초기 기술 선택을 하기 전에 “플랫폼 계정을 여러 게임에서 공유하는가”, “클라이언트가 수정할 수 있는 데이터는 무엇인가”, “서버가 경기 결과를 판정해야 하는가”를 먼저 정해야 한다.

이 문서는 정적 소스 분석이다. 빌드는 Go 버전 불일치로 컴파일 진입 전에 중단됐고 서버 부팅·통합 테스트·부하 테스트는 실행하지 않았다. 상세 증거는 분석 개요의 검증 기록에 있다.

[main]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/main.go
[proto]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/apigrpc/apigrpc.proto#L89
[api]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/api.go#L100
[apistruct]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/api.go#L75
[routes]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/api.go#L232
[socket]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/socket_ws.go
[pipeline]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/pipeline.go#L67
[pipelinestruct]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/pipeline.go#L29
[db]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/db.go#L41
[consoleui]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/console/ui.go#L25
[startup]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/main.go#L159
[stop]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/main.go#L239
[shutdown]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/shutdown.go#L26
[storageapi]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/api_storage.go#L157
[trace]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/api.go#L795`,filtered:!1,sourceHash:"68839a5ba122c3c569858dfb41c9de63785aaede7a271993cdcf3946faa13647"},{id:"study-nakama-02-api-auth-data-md",title:"Nakama API·인증·데이터 분석",path:"study/nakama/02_API_AUTH_DATA.md",category:"이전 조사",status:"역사적 조사·제안",body:`# Nakama API·인증·데이터 분석

분석 기준: \`heroiclabs/nakama\` 커밋 \`e920249a3465bea4b8ea2968020c488201b61a8e\`.
이 문서는 공개 소스의 호출 경로와 SQL을 읽은 결과다. 아래 링크는 모두 이 커밋에 고정했다.
\`확인\`은 코드로 확인한 사실, \`설계 제안\`은 자체 플랫폼에 적용할 판단, \`미검증\`은 실행 증거가 없는 항목을 뜻한다.

## 짧은 답

Nakama에서 먼저 가져올 것은 기능 목록보다 **인증된 사용자 컨텍스트 → API 경계 검증 → 서버 권한의 도메인 함수 → DB 제약과 트랜잭션**이라는 구조다.
저장소의 OCC, 지갑의 행 잠금, 순위표의 SQL 갱신은 서로 다른 경쟁 조건에 대응한다.
구매 기록의 중복 방지는 보상 지급의 중복 방지와 같지 않으며, API after hook도 트랜잭션의 일부가 아니다.
또한 조사한 스키마·쿼리는 게임이나 tenant를 첫 번째 격리 키로 삼지 않는다. 여러 게임용 플랫폼은 이 경계를 별도로 결정해야 한다.

## 읽기에 필요한 Go 표현

- \`ctx context.Context\`: 취소·기한과 인증된 사용자 정보를 전달한다. API의 \`ctxUserIDKey\`는 인터셉터가 채운다.
- \`uuid.Nil\`: 이 코드에서는 여러 도메인 함수의 서버 권한 호출을 나타낸다. 익명 클라이언트를 그대로 이 값으로 넘기면 안 된다.
- \`func(tx pgx.Tx) error\`: 트랜잭션 래퍼에 넘기는 콜백이다. 재시도 시 여러 번 실행될 수 있다.
- \`nil\`과 빈 값은 다르다. 예를 들어 \`Create == nil\`은 생성 허용이며, storage \`Version == ""\`은 무조건 쓰기다.

## 주요 파일 지도

| 책임 | 읽을 함수와 근거 |
|---|---|
| 전송 계층·공통 인증 | \`server/api.go\`: \`StartApiServer\`, \`securityInterceptorFunc\` [A1][A2] |
| 장치·custom 로그인 | \`server/api_authenticate.go\`: \`ApiServer.AuthenticateDevice\`, \`AuthenticateCustom\` [A3][A4] |
| 계정 조회·생성 | \`server/core_authenticate.go\`: \`AuthenticateDevice\`, \`AuthenticateCustom\` [A5][A6] |
| 토큰 갱신·폐기 | \`server/api_session.go\`, \`server/core_session.go\`, \`server/session_cache.go\` [S1][S2][S3] |
| 저장소 정책·OCC | \`server/api_storage.go\`, \`server/core_storage.go\` [D1][D2][D3] |
| 트랜잭션 조합 | \`server/db.go\`, \`server/core_multi.go\` [T1][T2] |
| 경제 데이터 | \`server/core_wallet.go\`, \`server/core_leaderboard.go\`, \`server/core_purchase.go\` [W1][L1][P1] |
| 데이터의 실제 키 | \`migrate/sql/20180103142001_initial_schema.sql\` 및 후속 migration [M1][M2][M3] |

## 1. API 진입점: 공통 경로와 예외

\`\`\`mermaid
flowchart TD
    Rest[REST client] --> Gateway[Generated gateway]
    Grpc[gRPC client] --> Security[Security interceptor]
    Gateway --> Security
    Security --> Before[API before hook]
    Before --> Validate[API input validation]
    Validate --> Core[Core domain function]
    Core --> Database[Database operation]
    Database --> After[API after hook]
    After --> Response[API response]
\`\`\`

이 도식은 일반적인 내장 API의 순서를 보여준다. RPC·WebSocket·사용자 HTTP handler까지 한 경로라고 주장하는 도식은 아니다.
\`StartApiServer\`는 gRPC unary interceptor에서 trace ID 생성 후 \`securityInterceptorFunc\`를 호출한다.
HTTP gateway는 \`RegisterNakamaHandlerFromEndpoint\`로 gRPC endpoint에 연결되므로 이 경로의 내장 REST API도 같은 인터셉터를 거친다. [A1]

공통 인증 분기는 다음과 같다. [A2]

| 호출 | 인터셉터의 요구 조건 |
|---|---|
| \`Healthcheck\` | 인증 생략 |
| \`Authenticate*\`, \`SessionRefresh\` | Basic 인증의 username이 \`Socket.ServerKey\`와 일치 |
| 일반 API | Bearer JWT 서명·만료와 session cache 검사 |
| gRPC \`RpcFunc\` | 사용자 JWT 또는 별도 runtime HTTP key |

Basic 인증의 password를 사용자 비밀번호로 검증하는 구조가 아니다. 서버 키 검사는 로그인 진입 조건이고, 사용자 식별은 이어지는 인증 함수의 책임이다.
\`populateCtx\`가 user ID, username, vars, expiry, token ID, issued-at을 넣은 뒤 API handler가 이를 사용한다. [A2]

**중요한 예외:** \`/v2/rpc/{id}\`는 \`RpcFuncHttp\`가 직접 처리하며 자체 key/JWT 검사를 한다.
\`runtime.httpHandlers\`도 gateway 앞에 직접 등록된다. 새 HTTP handler를 추가했을 때 gRPC 인터셉터가 자동으로 보호해 준다고 가정하면 안 된다. [A7][A8]

### 훅은 어디까지 책임지는가

\`RegisterBeforeAuthenticateDevice\`는 런타임 함수를 \`beforeReq.beforeAuthenticateDeviceFunction\`에 저장하는 어댑터다.
API는 \`BeforeAuthenticateDevice()\`가 있으면 검증 전에 호출한다. 요청 교체가 가능하고, 오류로 거절하거나 \`nil\` 결과로 \`NotFound\`를 반환할 수 있다. [A3][A9]
반대로 after hook은 도메인 처리 뒤 호출된다. \`traceApiAfter\`는 반환 오류를 metric에 반영하지만 API 호출자에게 반환하지 않는다. [A10]

\`\`\`go
// server/api.go:807-814의 핵심 제어 구조
err := fn(clientIP, clientPort)
metrics.ApiAfter(fullMethodName, time.Since(start), err != nil)
\`\`\`

**설계 제안:** 공통 인터셉터는 신원·요청 컨텍스트를 만들고, 훅은 확장 정책을 담당하게 하라.
반드시 성공해야 하는 재화 지급을 after hook에만 맡기면 이미 성공한 로그인·구매 기록과 실패한 지급 사이에 복구할 상태가 남는다.
필수 상태 변경은 같은 트랜잭션 안에서 처리하고, 외부 발송이 필요해질 때만 재시도 가능한 작업 기록을 추가하는 편이 명확하다.

## 2. 장치 로그인과 custom 인증의 실제 의미

REST 경로는 \`POST /v2/account/authenticate/device\`와 \`/custom\`이며 생성된 gateway에 등록된다. [A11]
장치 인증의 호출 관계는 \`ApiServer.AuthenticateDevice → AuthenticateDevice → ExecuteInTx\`다. [A3][A5]

1. before hook 이후 ID 공백·제어문자와 길이 10–128 bytes를 검사한다. username이 없으면 생성한다.
2. \`Create\` 미지정은 \`true\`다. \`create=false\`인데 계정이 없으면 \`NotFound\`다.
3. \`user_device\`에서 ID를 찾고, \`provider != ""\`인 식별자는 일반 장치 로그인에서 거절한다.
4. 기존 계정이면 \`users.disable_time\`을 확인하고 DB의 username을 반환한다.
5. 신규 계정이면 \`users\`와 \`user_device\`를 같은 트랜잭션에서 생성한다. 두 번째 insert 실패가 고아 사용자를 남기지 않도록 묶었다.
6. API가 새 token ID를 만들고 access token과 refresh token을 발급한다. \`SingleSession\`이면 먼저 \`RemoveAll\`을 호출한다.

**확인:** ID는 장치 증명서를 검증한 결과가 아니라 요청에서 받은 문자열이다. 이 경로 자체에 하드웨어 attestation은 없다.
\`AuthenticateCustom\`도 6–128 bytes의 custom ID를 받아 \`users.custom_id\`로 조회·생성한다. 외부 IdP 토큰 검증을 자동 수행하지 않는다. [A4][A6]
동시 생성 시 unique constraint로 중복 계정이 차단되지만, custom ID 경합을 기존 계정 조회로 재해석하지 않고 \`Internal\` 오류로 반환하는 분기도 있다. [A6]

**설계 제안:** guest용 난수 식별자와 외부 신원 인증을 구분하라.
custom ID에 공개 사용자명·email을 넣고 그것만 알면 로그인하도록 만들지 말고, 서버가 검증한 외부 신원을 내부 user ID로 매핑하라.
계정 생성의 unique constraint와 로그인 재시도의 계약도 함께 정해야 한다.

### 서명된 vars가 곧 서버가 승인한 권한은 아니다

\`ApiServer.AuthenticateDevice\`는 요청의 \`in.Account.Vars\`를 토큰에 넣고, refresh도 입력 vars가 있으면 기존 vars를 바꾼다. [A3][S1]
JWT 서명은 그 내용이 발급 후 변조되지 않았음을 확인하는 장치이며, 이 흐름에서 vars의 원천이 서버 정책으로 검증됐다는 뜻은 아니다.
**설계 제안:** tenant 권한, 관리자 여부, 지급 배수 같은 신뢰 속성은 클라이언트 vars를 그대로 읽어 결정하지 말고 서버의 계정·멤버십 기록에서 결정하라.

## 3. 갱신·로그아웃: 토큰과 연결은 별도 수명

\`\`\`mermaid
sequenceDiagram
    participant Client
    participant Api
    participant Core
    participant Cache
    participant Db
    Client->>Api: refresh token
    Api->>Core: validate refresh
    Core->>Cache: check invalidation
    Core->>Db: read current user
    Db-->>Core: username and ban state
    Core-->>Api: existing token identity
    Api-->>Client: renewed token pair
    Client->>Api: logout selected tokens
    Api->>Core: validate owner
    Core->>Cache: invalidate tokens
    Api-->>Client: success
\`\`\`

\`Api\`는 입력·훅·응답 발급, \`Core\`는 refresh 검증과 logout 대상 확인, \`Cache\`는 무효화 상태, \`Db\`는 현재 계정 상태를 담당한다.
\`SessionRefresh\`는 refresh 전용 signing key로 파싱하고 cache 확인 후 DB의 계정 존재와 ban 상태를 다시 검사한다. [S2]
발급은 HS256이며 access/refresh 각각 설정된 키와 수명을 사용한다. 만료 claim이 필수이고 parser가 HS256만 허용한다. [S4][A2]

**확인:** 갱신 때 새 토큰 문자열을 주지만 \`tokenId\`와 \`tokenIssuedAt\`은 이전 값을 재사용한다.
새 ID 생성·이전 refresh 제거 코드는 주석이고, 활성 코드는 기존 ID로 \`generateToken\`·\`generateRefreshToken\`을 호출한다. [S1]
따라서 이 경로를 “refresh token을 한 번만 쓰는 rotation”이라고 설명하면 틀린다. 사용한 refresh 자체가 이 코드에서 즉시 폐기되지는 않는다.

logout의 구체적인 범위도 입력에 달려 있다. [S2][S3]

| 입력 | 동작 |
|---|---|
| access token만 | 해당 session token ID를 access blacklist에 넣음 |
| refresh token만 | 해당 ID를 refresh blacklist에 넣음 |
| 둘 다 | 각각 서명·소유자 확인 후 두 blacklist에 넣음 |
| 둘 다 없음 | 사용자별 \`lastInvalidation\`을 설정하는 \`RemoveAll\` |

\`LocalSessionCache.Add\`는 no-op이다. 이 cache는 유효 세션 목록이 아니라 무효화 목록이며, 기록이 없는 사용자의 정상 JWT는 허용된다. [S3]
\`RemoveAll\` 판정은 \`exp - configured lifetime < lastInvalidation\`을 사용한다. 발급 시각 claim을 직접 비교하는 구현은 아니다.
공개 실행 진입점은 \`NewLocalSessionCache\`를 생성한다. 이 구현의 map은 메모리에만 있으며 여기에는 DB 저장·노드 간 복제 코드가 없다. [S3][S5]

**설계상 함의:** 같은 signing key를 유지한 재시작 이후에는 이전 무효화 기록이 이 map에 남지 않는다.
이를 운영 보장으로 받아들이지 말고, 자체 플랫폼에서 요구하는 로그아웃 지속성·ban 전파·동일 초 경계를 별도 검증해야 한다.

\`SessionLogout\`에는 socket registry의 연결 종료 호출이 없다. 새 WebSocket 접속에서 JWT blacklist를 확인하는 테스트는 있지만, 이미 열린 연결의 즉시 종료를 입증하는 테스트는 아니다. [S2][S6]
**설계 제안:** “API token 폐기”, “refresh 불가”, “실시간 연결 종료”, “모든 장치 로그아웃”을 각각 명세하라.
짧은 access 수명과 DB의 refresh/session 상태만으로 요구사항이 충족되면 그 정도부터 구현하고, 분산 cache를 선행 도입하지 않아도 된다.

## 4. Storage: JSON 편의성 위에 소유권·권한·OCC를 얹는다

DB의 객체 식별자는 \`(collection, key, user_id)\`이고 내용은 \`JSONB\`다. collection은 네임스페이스 문자열이며 별도 tenant 객체가 아니다. [M1]
\`ApiServer.WriteStorageObjects\`는 사용자 UUID를 context에서 가져와 모든 \`StorageOpWrite.OwnerID\`에 고정한다.
클라이언트는 이 API에서 임의 소유자를 선택할 수 없다. JSON object인지와 권한 값의 범위를 API 경계에서 검사한다. [D1]

### 권한은 어디서 검사되는가

| 값 | 클라이언트 읽기·쓰기 의미 |
|---|---|
| \`read=0\` | 서버 호출에서만 읽음 |
| \`read=1\` | 소유자만 읽음 |
| \`read=2\` | 인증된 다른 사용자도 읽음 |
| \`write=0\` | 서버 권한 쓰기만 허용 |
| \`write=1\` | 소유자 API 경로에서 쓰기 가능 |

\`StorageReadObjects\`는 caller가 nil UUID가 아닐 때 SQL에 \`read = 2 OR (read = 1 AND user_id = caller)\`를 추가한다. [D4]
API 쓰기는 \`authoritativeWrite=false\`를 넘기고, core SQL이 기존 \`storage.write = 1\`을 확인한다.
런타임 쓰기는 \`true\`, 런타임 읽기는 \`uuid.Nil\`을 넘겨 권한 필터를 통과한다. 그러므로 런타임 RPC의 입력 검증이 새로운 신뢰 경계다. [D1][D3][D5]
권한을 생략하면 read/write 모두 1이다. 갱신에서도 이 helper가 적용되므로 “생략하면 기존 권한 유지”라고 가정하면 안 된다. [D2]

### OCC는 요청 version에 따라 선택된다

| 입력 version | DB 동작 | 적합한 사용 |
|---|---|---|
| \`""\` | INSERT 또는 UPDATE, 마지막 쓰기 우선 | 덮어써도 되는 환경설정 |
| \`"*"\` | INSERT만 수행, 존재 시 실패 | 최초 생성·처리 완료 표식 |
| 기존 version 문자열 | 기존 행의 version과 일치할 때 UPDATE | 읽고 수정하는 인벤토리 |

\`storagePrepBatch\`가 조건을 SQL 안에 넣는다. 응용 코드에서 먼저 조회한 뒤 조건 없이 저장하는 방식이 아니다. [D3]

\`\`\`sql
-- server/core_storage.go:784-787의 핵심 조건
UPDATE storage SET value = $4, version = $5, read = $6, write = $7
WHERE collection = $1 AND key = $2 AND user_id = $3 AND version = $8
-- 클라이언트 쓰기에는 AND storage.write = 1 추가
\`\`\`

version은 입력 JSON 문자열의 MD5다. 보안 서명이나 단조 증가 revision이 아니며, 값이 같으면 version도 같고 권한만 바뀌어도 value hash는 같다. [D2]
**설계 제안:** 수정 이력·ABA 탐지까지 필요한 데이터라면 별도 증가 revision을 쓰고, 단순 저장 객체의 lost update 방지와 구별하라.

한 요청의 여러 write는 \`ExecuteInTxPgx\`에 들어간다. 버전·권한 실패로 error가 반환되면 부분 성공을 반환하지 않는다.
write 순서를 collection/key/owner 순으로 정렬해 잠금 순서 경합을 줄이고, 응답 ack는 원래 입력 순서에 대응시킨다. [D6]
\`StorageWriteWithRetries\`는 재조회 후 \`updateFn\`을 다시 호출하며 OCC 실패 때 재시도한다. callback이 적절한 version을 반환해야 OCC가 적용된다. [D7]
**설계 제안:** 재시도 callback은 계산에 집중시키고 외부 결제·메시지 발송 같은 비반복 부수 효과를 넣지 마라.

delete는 별도 주의가 필요하다. version을 주면 조건 삭제이고, 클라이언트 삭제는 write 권한도 필요하다.
서버의 version 없는 delete만 “이미 없음”을 성공하는 no-op으로 취급한다. 모든 delete가 동일한 멱등 응답 계약인 것은 아니다. [D8]

## 5. 트랜잭션: PostgreSQL 기능을 도메인 경계에 맞춰 조합한다

\`ExecuteInTx\`와 \`ExecuteInTxPgx\`는 DB 종류에 따라 분기한다.
PostgreSQL 경로는 기본 transaction option으로 시작하고 SQLSTATE class \`40\` 오류면 최대 5회 시도한다. 모든 오류·모든 외부 요청을 무조건 재시도하지 않는다. [T1]
CockroachDB 경로에는 \`SAVEPOINT cockroach_restart\` 기반의 별도 처리 코드가 있다. 이 분기 존재만으로 두 DB의 성능·운영 특성이 같다고 볼 수 없다. [T3]

\`MultiUpdate\`는 하나의 transaction에서 계정 변경 → storage write → storage delete → wallet 변경을 실행한다. [T2]
이 함수의 인자에는 leaderboard나 purchase가 없다. 서로 다른 runtime API를 연속 호출했다고 같은 transaction에 들어가는 것도 아니다.
Storage index 갱신은 DB commit이 끝난 뒤 실행된다. 따라서 이 index까지 DB transaction이 원자적으로 묶어 준다는 설명은 피해야 한다. [T2][D6]

**설계 제안:** 여러 범용 repository 추상화를 먼저 만들기보다, 실제 “아이템 구매: 비용 차감 + 아이템 추가 + 처리 표식”을 묶는 도메인 함수 하나부터 만들면 된다.
DB가 성공하고 응답이 유실되는 경우의 요청 재전송은 DB deadlock 재시도와 다른 문제다. 전자에는 업무 idempotency key가 필요하다.

## 6. 지갑·순위표·구매: 같은 숫자처럼 보여도 신뢰와 재시도 계약은 다르다

### 지갑

\`RuntimeGoNakamaModule.WalletUpdate → UpdateWallets → updateWallets\`가 실제 경로다. 클라이언트의 직접 wallet 변경 API에 연결된 구조가 아니다. [W1][W2]
\`updateWallets\`는 \`users\`의 wallet JSON을 \`FOR UPDATE\`로 읽고, \`map[string]int64\` changeset을 더한 뒤 음수 결과를 거절한다.
\`updateLedger=true\`일 때 wallet 변경과 ledger insert가 같은 transaction에 들어가고 ledger ID는 새 UUID다. [W1]
즉 ledger를 켜는 것만으로 같은 보상 요청의 두 번째 호출이 식별되지는 않는다.
여러 사용자 갱신에서 존재하지 않는 사용자는 core에서 건너뛴다. 단일 \`WalletUpdate\` 어댑터는 결과가 없으면 \`user not found\`를 반환한다. [W1][W2]

**설계 제안:** 클라이언트는 \`+100 gem\` 대신 \`claim_reward(reward_id)\`를 요청하게 하라.
서버가 대상·수량·상한을 결정하고, 지급 표식의 unique key와 실제 잔액 변경을 같은 transaction에 넣으면 재전송 중복 지급을 막는 근거가 생긴다.
currency별 상한·정수 범위·삭제된 계정 정책도 도메인 명세에 넣어야 한다.

### 순위표

클라이언트 \`WriteLeaderboardRecord\`는 context user ID를 owner로 고정한다.
core는 \`Authoritative=true\`이고 caller가 nil UUID가 아니면 거절하며, runtime 어댑터는 nil UUID로 호출한다. [L1][L2][L3]
\`(owner_id, leaderboard_id, expiry_time)\` 충돌에 대해 SQL로 BEST/SET/INCREMENT/DECREMENT를 적용한다.
스케줄의 다음 만료 시각이 기록의 시즌 구분에 들어가며, DB 저장 뒤 rank cache가 갱신된다. [L1]
override operator는 API 입력에서 core까지 전달된다. 클라이언트 쓰기를 열었다면 점수뿐 아니라 허용 operator도 정책으로 다뤄야 한다. [L2]

**설계 제안:** 경쟁 보상이 있는 점수는 서버가 검증한 경기 결과에서 산출하라. authoritative 플래그는 제출 주체 제한이며 점수의 진실성 검증 알고리즘은 아니다.
특히 INCREMENT 재전송은 또 더한다. \`match_id + player_id + season\` 같은 처리 식별자 없이 “upsert니까 멱등”이라고 보면 안 된다.

### 구매 검증과 보상 지급

Google 경로는 \`ApiServer.ValidatePurchaseGoogle → ValidatePurchaseGoogle → iap.ValidateReceiptGoogle → upsertPurchases\`다.
서버 설정의 credential로 외부 검증 API를 호출하며, Google 구매에서는 purchase token을 transaction ID로 사용한다. \`persist\` 기본은 true다. [P1][P2][P3]
purchase의 unique key는 \`transaction_id\`이고 충돌 시 \`refund_time\`, \`update_time\`만 갱신한다.
\`SeenBefore\`는 저장된 update/create 시각 비교로 계산한다. \`persist=false\` 경로는 이 DB 중복 기록을 남기지 않는다. [P1][P4]
이 함수에는 wallet 지급이 없다. “영수증 검증 성공”, “구매 저장”, “보상 지급”, “환불 반영”을 각각 별도 상태로 이해해야 한다.

**설계 제안:** 서버에서 product catalog와 계정 귀속을 확인한 검증 결과를 받아, unique 처리 표식과 보상을 같은 transaction에 반영하라.
\`MultiUpdate\`의 storage \`Version="*"\` 표식 + wallet 갱신은 이런 조합을 생각하는 참고가 된다. 실제 적용 전에는 결제별 귀속·재처리 정책을 먼저 정해야 한다.
외부 결제 검증 HTTP 요청까지 DB transaction 안에 오래 붙잡아 둘 필요는 없다. 검증 완료 후 DB 내부의 보상 원자성을 확보하는 것이 핵심이다.

복사 전에 따로 재현할 **짧은 정적 검토 메모**가 두 개 있다.
Google core의 상태 분기는 외부 응답 \`gResponse.PurchaseState\` 대신 입력에서 decode된 \`gReceipt.PurchaseState\`를 읽는다. [P1][P3]
또한 \`upsertPurchases\`는 DB의 \`user_id\`를 scan하지만 반환 객체에 다시 대입하지 않는다. 반환 \`UserId\`만 기존 구매의 귀속 증거로 쓰기 전에 별도 확인이 필요하다. [P4]
이 두 항목은 실행 재현·영향 평가를 하지 않았으며, 이 문서에서 취약점이나 실제 피해 가능성을 확정하지 않는다.

## 7. 여러 게임용 플랫폼인가: 키와 정책 경계를 직접 확인한다

| 데이터 | 소스에서 확인한 식별 범위 |
|---|---|
| 계정 | \`users.id\`; username·custom ID·외부 ID 등은 각 column의 unique constraint |
| 장치 | \`user_device.id\`; 후속 migration의 \`provider\` column |
| 저장 객체 | \`collection + key + user_id\` |
| 순위표 | 전역 문자열 leaderboard ID, 기록은 owner·expiry 포함 |
| 지갑 | \`users.wallet\` 안의 currency 이름 |
| 구매 | \`transaction_id\`; store가 column으로 있지만 이 PK에는 포함되지 않음 |

근거는 최초 schema, purchase schema, provider migration과 위의 실제 조회 조건이다. [M1][M2][M4]
후속 구매 migration은 사용자 삭제 시 user ID를 nil UUID로 바꾸는 \`ON DELETE SET DEFAULT\`로 변경한다. 최초 schema만 읽으면 이 삭제 정책을 놓친다. [M3]
조사한 \`server\`와 migration에 일반적인 tenant/game ID를 모든 인증·조회·unique key에 강제하는 경로는 확인되지 않았다.
\`facebook_instant_game_id\`나 Steam \`app_id\`는 외부 인증 제공자의 식별자이며 이 플랫폼의 tenant 격리 키로 해석하면 안 된다.

**설계 제안:** 첫 게임은 게임별 배포·DB 분리로 시작할 수 있다. 실제로 통합 운영이 필요하면 먼저 글로벌 계정과 게임별 player를 분리할지 결정하라.
공유 DB를 택할 때는 저장소 prefix만 붙이는 것으로 끝나지 않는다. 인증 membership, unique key, 운영자 권한, 백업·삭제·복구 범위가 같은 game 경계를 따라야 한다.
이 문서는 Nakama의 별도 상용 제품·호스팅 관리 계층에 multi-tenant 기능이 있는지 판단하지 않는다.

## 8. 자체 플랫폼에 남길 최소 불변식과 검증 과제

1. 모든 사용자 데이터 변경은 검증된 actor와 실제 대상 owner를 구분한다. 요청 user ID만으로 타인 데이터 변경을 허용하지 않는다.
2. 재화·아이템·경기 결과는 서버가 승인한 업무 요청에서만 변경한다. 범용 JSON 저장 권한과 경제 권한을 섞지 않는다.
3. read-modify-write에는 OCC 또는 행 잠금을 쓴다. 재시도 가능한 계산과 외부 부수 효과를 구분한다.
4. 같은 구매·보상 요청은 결과가 한 번만 반영돼야 한다. unique 처리 키와 상태 변경이 같은 transaction에서 commit돼야 한다.
5. 사용자 삭제·ban·logout의 의미를 토큰, refresh, 열린 연결, 재시작, 노드 간 전파별로 명세한다.
6. 여러 게임이 실제 범위라면 game 경계를 인증·DB 키·운영 기능까지 관통시키거나 배포를 분리한다.

**미검증:** 이 문서 작성 중 서버·DB·실제 결제 제공자 요청·부하 테스트는 실행하지 않았다.
우선 실행할 검증은 같은 version의 동시 저장, 동일 보상의 동시 재전송, 지급 commit 후 응답 유실, 재시작 후 logout token, 게임 A 권한으로 게임 B 접근이다.
기존 \`core_storage_test.go\`와 \`socket_ws_test.go\`는 학습할 테스트 후보이며, 존재한다는 사실과 현재 환경에서 통과했다는 사실은 구별해야 한다. [V1][S6]

## 고정 소스 링크

[A1]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/api.go#L111-L228
[A2]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/api.go#L361-L544
[A3]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/api_authenticate.go#L216-L288
[A4]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/api_authenticate.go#L141-L213
[A5]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/core_authenticate.go#L321-L425
[A6]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/core_authenticate.go#L259-L319
[A7]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/api.go#L232-L258
[A8]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/api_rpc.go#L51-L109
[A9]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/runtime_go.go#L512-L543
[A10]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/api.go#L795-L815
[A11]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/apigrpc/apigrpc.pb.gw.go#L6574-L6614
[S1]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/api_session.go#L29-L92
[S2]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/core_session.go#L34-L97
[S3]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/session_cache.go#L44-L199
[S4]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/api_authenticate.go#L865-L885
[S5]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/main.go#L183-L184
[S6]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/socket_ws_test.go#L31-L91
[D1]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/api_storage.go#L157-L238
[D2]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/core_storage.go#L50-L95
[D3]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/core_storage.go#L757-L841
[D4]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/core_storage.go#L539-L549
[D5]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/runtime_go_nakama.go#L2257-L2314
[D6]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/core_storage.go#L583-L685
[D7]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/core_storage.go#L688-L754
[D8]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/core_storage.go#L843-L900
[T1]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/db.go#L308-L350
[T2]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/core_multi.go#L27-L77
[T3]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/db.go#L409-L522
[W1]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/core_wallet.go#L88-L263
[W2]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/runtime_go_nakama.go#L1997-L2028
[L1]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/core_leaderboard.go#L415-L578
[L2]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/api_leaderboard.go#L164-L221
[L3]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/runtime_go_nakama.go#L2837-L2872
[P1]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/core_purchase.go#L266-L346
[P2]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/api_purchase.go#L81-L136
[P3]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/iap/iap.go#L416-L493
[P4]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/core_purchase.go#L875-L969
[M1]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/migrate/sql/20180103142001_initial_schema.sql#L18-L168
[M2]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/migrate/sql/20210416090601-purchase.sql#L20-L35
[M3]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/migrate/sql/20230222172540-purchases-not-null-uid-2.sql#L20-L30
[M4]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/migrate/sql/20260819141500-add-user-provider.sql#L17-L21
[V1]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/core_storage_test.go#L134-L340`,filtered:!1,sourceHash:"a2ed540ae2eb7a02f9bf11bc1d7ad65a448f967a0af4d42885880dbe89f728d3"},{id:"study-nakama-03-realtime-match-md",title:"Nakama 실시간 연결과 매치 실행 분석",path:"study/nakama/03_REALTIME_MATCH.md",category:"이전 조사",status:"역사적 조사·제안",body:`# Nakama 실시간 연결과 매치 실행 분석

분석 기준: \`heroiclabs/nakama\` 커밋 \`e920249a3465bea4b8ea2968020c488201b61a8e\`.
아래 링크는 모두 이 커밋에 고정했다. **[코드 확인]**은 정적 소스 추적 결과, **[설계 제안]**은 자체 백엔드에 적용할 판단, **[미실행]**은 실행 검증하지 않은 항목이다.
지식 그래프가 없어 \`rg\`, 실제 정의, 호출자와 등록 지점을 직접 추적했다. 이 문서에서 서버·클라이언트를 실행하거나 처리량을 측정하지 않았다.

## 짧은 답

**[코드 확인]** 이 OSS 실행 파일은 WebSocket 세션, 로컬 presence 색인, 로컬 메시지 라우터, 로컬 매치메이커와 매치 실행기를 연결한다.
권위형 매치는 매치마다 하나의 실행 goroutine에서 콜백과 게임 상태를 순차 처리한다. 저장소가 제공된다는 사실과 실시간 상태가 자동 저장·복구된다는 주장은 다르다. [시작 시 연결][boot], [매치 실행기][handler-init]

가져올 핵심은 “소켓 → 검증·분기 → 참가 상태 → 게임 상태 소유자 → 송신 큐”라는 경계다.
릴레이 게임만 필요하면 게임 tick 실행기까지 만들 필요가 없다. 서버 판정이 필요하면 연결 처리와 게임 규칙을 분리하고, 매치 단위 상태 소유권부터 정하는 편이 작다. **[설계 제안]**

## 먼저 알아야 할 Go 문법

| 표현 | 이 흐름에서의 뜻 |
|---|---|
| \`go f()\` | 호출자와 별개 goroutine에서 실행한다. 소켓 송신과 매치 실행이 이 방식이다. |
| \`chan T\` | 실행 주체 사이의 유한 큐다. \`make(chan T, n)\`의 \`n\`은 처리량이 아니라 대기 용량이다. |
| \`select\` + \`default\` | 큐가 즉시 수용하지 못하면 기다리지 않고 실패 정책으로 간다. |
| \`context.WithCancel\` | 작업 취소 신호다. 이미 실행 중인 사용자 코드를 강제로 중단시키는 기능은 아니다. |
| \`any\` | 게임이 정한 상태 타입을 프레임워크가 보관한다. 영속 저장 형식이라는 뜻은 아니다. |
| \`func(*MatchHandler)\` | 큐에 넣는 실행 명령이다. 콜백이 직접 호출되는 시점과 요청 접수 시점이 다르다. |

## 주요 파일 지도

| 파일 | 맡은 경계 |
|---|---|
| [\`api.go\`][ws-route], [\`socket_ws.go\`][accept] | \`/ws\` 등록, 인증, 업그레이드, 세션 생성 |
| [\`session_ws.go\`][consume], [\`pipeline.go\`][pipeline] | 프레임 읽기·Envelope 해석, 작업별 분기, 송신·종료 |
| [\`tracker.go\`][tracker-init], [\`message_router.go\`][router] | 세션별·스트림별 참가 색인, 수신자 선택과 형식별 직렬화 |
| [\`pipeline_match.go\`][match-create] | 릴레이 생성, 입장 분기, 참가 검사, 데이터 전달 |
| [\`matchmaker.go\`][mm-init], [\`matchmaker_process.go\`][mm-select] | 티켓 보관, 주기적 조합 탐색, 매칭 결과 알림 |
| [\`match_registry.go\`][registry-init], [\`match_handler.go\`][handler-init] | 매치 ID 조회, 입장 대기, 명령 큐와 tick 실행 |
| [\`runtime_go_match_core.go\`][go-core] | 게임 콜백 호출, 입력 배치와 브로드캐스트 API |

## 1. 전체 흐름 파악: 플로우 차트

\`\`\`mermaid
flowchart TD
    C[Client] --> A[GET ws and authenticate]
    A --> S[Create session and track presence]
    S --> R[Read and decode envelope]
    R --> P[Pipeline dispatch]
    P --> M[Matchmaker tickets]
    P --> L[Relayed match stream]
    P --> H[Authoritative match queues]
    M --> N[Matched notification]
    N --> C
    L --> O[Router and outgoing queue]
    H --> O
    O --> C
    R --> X[Close on disconnect or protocol error]
    O --> X
    X --> D[Remove tickets and presences and session]
\`\`\`

이 그림은 네트워크 입출력과 게임 상태 변경 사이의 경계를 보여 준다. 매치메이커 결과는 클라이언트에게 돌아가며, 클라이언트가 별도로 입장 요청을 보낸다. [매칭 알림][mm-notify], [입장 분기][match-join]

1. \`/ws\`는 HTTP gateway 라우터에 등록된다. acceptor는 포맷, 토큰과 session cache를 확인한 뒤 WebSocket으로 업그레이드한다. [등록][ws-route], [인증][accept]
2. 연결마다 새 session ID를 만들고 registry에 넣는다. 알림 presence는 숨김으로 등록하고, 요청 옵션에 따라 status presence도 만든다. [세션 시작][accept-session]
3. \`Consume\`는 읽기 크기·deadline·pong handler를 설정하고 송신 goroutine을 시작한다. 수신 루프는 Envelope 하나를 처리한 뒤 다음 프레임을 읽는다. [수신 루프][consume]
4. 종료는 티켓, 모든 presence, status 구독, session registry를 차례로 정리한다. 핑 실패와 송신 실패도 같은 \`Close\`로 모인다. [송신 루프][outgoing], [종료][close]

핵심 호출 형태는 다음과 같다. 아래는 실제 제어 흐름을 축약한 코드형 표현이다.

\`\`\`go
sessionRegistry.Add(session)
tracker.Track(session.Context(), sessionID, notificationStream, userID, meta)
session.Consume() // 내부에서 go processOutgoing(), 수신은 현재 실행 흐름
\`\`\`

**[코드 확인]** \`Consume\`의 형식 불일치·역직렬화 실패, \`ProcessRequest\`의 없는/알 수 없는 payload는 연결 종료로 이어진다.
반면 개별 작업 함수가 반환한 \`success == false\`는 보통 해당 요청 실패다. \`ProcessRequest\` 마지막은 \`true\`를 반환하므로, 작업 실패를 곧 소켓 종료로 읽으면 안 된다. [프로토콜 검증][consume], [pipeline 반환 규약][pipeline]

## 2. 노드들의 실제 동작: 권위형 입장 시퀀스

\`\`\`mermaid
sequenceDiagram
    participant C
    participant P
    participant MR
    participant MH
    participant T
    C->>P: MatchJoin
    P->>MR: JoinAttempt
    MR->>MH: enqueue join attempt
    MH->>MH: run MatchJoinAttempt callback
    MH->>MH: add marker and enqueue join
    MH-->>MR: allow result
    MR-->>P: allow and match information
    P->>T: Track presence
    P-->>C: Match response
    MH->>MH: run queued MatchJoin
    T->>MR: asynchronous presence join event
    MR->>MH: enqueue marker acknowledgement
\`\`\`

\`P\`는 Pipeline, \`MR\`은 LocalMatchRegistry, \`MH\`는 MatchHandler, \`T\`는 LocalTracker다.
그림의 후반부는 가능한 순서를 단순화했다. \`MatchJoin\` 실행, 클라이언트 응답과 비동기 tracker 이벤트 사이에 단일 전역 순서는 없다. [입장 호출][match-join], [handler 입장 처리][join-handler], [tracker 이벤트][tracker-listeners]

1. registry는 현재 노드인지, 매치가 있는지 검사한다. 같은 \`Node + SessionID\`가 이미 참가했으면 게임의 입장 콜백을 다시 호출하지 않고 성공한다. [registry admission][admission]
2. 새 요청은 별도 \`joinAttemptCh\`로 들어간다. 매치 실행 goroutine이 \`Core.MatchJoinAttempt\`를 호출하고 반환 상태를 저장한다. [handler admission][join-handler]
3. 허용되면 join marker를 만들고 \`QueueJoin(..., false)\`를 먼저 넣는다. 여기서 실제 \`MatchJoin\` 게임 콜백은 아직 실행되지 않았을 수 있다.
4. Pipeline이 tracker에 presence를 등록한다. tracker 이벤트가 registry의 \`Join\`에 도착하면 \`QueueJoin(..., true)\`로 marker를 지운다. 이 경로는 게임 \`MatchJoin\`을 다시 실행하지 않는다. [registry listener][registry-events], [join 분기][join-leave]

\`\`\`go
mh.JoinMarkerList.Add(presence, mh.tick)
mh.QueueJoin([]*MatchPresence{presence}, false)
resultCh <- &MatchJoinAttemptResult{Allow: allow, Reason: reason}
\`\`\`

**[코드 확인]** registry 입장 대기는 10초다. 타이머 만료 자체는 요청 context를 취소하지 않는다.
따라서 늦게 처리된 허용 결과와 실제 tracker 등록 사이의 틈을 marker가 정리한다. marker 만료 검사는 매치 tick 기준으로 30초마다 이루어지므로, 설정 \`join_marker_deadline_ms\`를 정확한 벽시계 정리 시각으로 해석하면 안 된다. [대기 제한][admission], [marker][marker], [tick 정리][handler-loop]

## 3. 함수 호출 관계: 콜 그래프

\`\`\`mermaid
flowchart TD
    A[NewSocketWsAcceptor] --> C[Session Consume]
    C --> P[Pipeline ProcessRequest]
    P --> D[matchDataSend]
    D --> R[Router SendToPresenceIDs]
    D --> S[Registry SendData]
    S --> Q[Handler QueueData]
    E[Handler event goroutine] --> F[queueCall]
    F --> B[loop]
    B --> G[Core MatchLoop]
    G --> U[Game MatchLoop callback]
    U --> V[BroadcastMessage]
    V --> R
    R --> W[Session SendBytes]
    X[Session Close] --> Y[Tracker UntrackAll]
    Y --> Z[Tracker processEvent]
    Z --> K[Registry Leave callback]
    K --> J[Handler QueueLeave]
\`\`\`

릴레이 \`matchDataSend\`는 router로, 권위형 요청은 registry와 입력 큐로 갈라진다. 두 화살표는 조건 분기이며 둘 다 실행되는 것이 아니다. [데이터 분기][match-send]
tick은 \`queueCall(loop)\`로 명령을 넣고, 실행 goroutine이 나중에 그 함수를 호출한다. 따라서 그림의 \`queueCall → loop\`는 큐를 사이에 둔 실행 관계다. [event goroutine][handler-init]
\`Game MatchLoop\`는 런타임 콜백이다. Go adapter는 현재 \`len(inputCh)\`만큼을 slice로 옮겨 전달하므로, 그 뒤 들어온 입력은 다음 호출의 후보가 된다. [Go 입력 배치][go-batch]
종료 이벤트의 \`Registry Leave\`도 직접 하드코딩한 호출이 아니라 \`main\`에서 등록한 tracker listener다. [listener 등록][boot], [이벤트 호출][tracker-listeners]

\`\`\`go
state, err := mh.Core.MatchLoop(mh.tick, mh.state, mh.inputCh)
// 성공하고 state가 nil이 아닐 때:
mh.state = state
mh.tick++
\`\`\`

**[코드 확인]** ticker 이벤트, 일반 콜백, 입장 시도, signal은 한 goroutine의 \`select\`에서 선택된다.
같은 매치의 프레임워크 콜백은 겹치지 않지만, 여러 큐 사이의 도착 순서를 하나의 FIFO로 보장하지 않는다. 느린 게임 콜백은 그 매치의 입장·퇴장·tick 처리도 늦춘다. [실행 선택][handler-init]
게임 Go 코드가 별도 goroutine에서 공유 상태를 바꾸면 이 직렬화 바깥으로 나간다. 상태 변경을 콜백 안에 모으는 것이 자체 구현의 최소 규칙이다. **[설계 제안]**

## 4. 코드 레벨 의존성: 클래스 다이어그램

\`\`\`mermaid
classDiagram
    direction LR
    class Session {
        sessionID
        outgoingCh
        context
    }
    class SessionRegistry {
        sessions
    }
    class Tracker {
        presencesBySession
        presencesByStream
        eventsCh
    }
    class MatchRegistry {
        matches
        labelIndex
    }
    class MatchHandler {
        state
        tick
        inputCh
        callCh
    }
    class RuntimeMatchCore
    class MessageRouter
    SessionRegistry "1" --> "many" Session
    Tracker --> SessionRegistry
    MatchRegistry "1" --> "many" MatchHandler
    MatchHandler --> RuntimeMatchCore
    MatchHandler --> MessageRouter
    MessageRouter --> SessionRegistry
    MessageRouter --> Tracker
\`\`\`

\`SessionRegistry\`의 메모리 map은 접속 객체를 찾고, tracker의 두 map은 같은 presence를 세션·스트림 양쪽에서 찾는다.
\`MatchRegistry\`는 권위형 매치 객체와 메모리 검색 색인을 보관한다. \`MatchHandler.state\`는 그 매치 게임 규칙의 상태이며, tracker presence와 같은 데이터가 아니다. [session map][sessions], [tracker 구조][tracker-init], [registry 구조][registry-init]

\`\`\`go
inputCh: make(chan *MatchDataMessage, config.GetMatch().InputQueueSize),
callCh:  make(chan func(*MatchHandler), config.GetMatch().CallQueueSize),
state:   state,
\`\`\`

1. \`MatchInit\`의 상태·tick rate를 받은 뒤 handler를 구성한다. Go adapter는 tick rate 1~60과 non-nil 상태를 검사한다. [초기화][handler-init], [Go 계약][go-core]
2. tracker 등록은 세션의 close lock과 취소 상태를 확인하고 두 색인을 갱신한다. 종료와 동시에 사라진 세션에 새 presence가 남는 경쟁을 막는 지점이다. [Track][track], [세션 확인][tracker-session]
3. tracker는 상태 갱신 후 별도 큐로 이벤트를 보낸다. 따라서 “참가 map에 반영됨”과 “참가 이벤트 수신”은 다른 완료 시점이다. [Track][track], [이벤트 큐][tracker-overflow]
4. router는 수신자의 로컬 session을 찾아 JSON/Protobuf를 형식별로 한 번씩 직렬화하고 \`SendBytes\`한다. 수신자가 없거나 전송 큐가 거절하면 로그를 남기며, 자동 재시도 큐를 만들지 않는다. [router][router]

## 실제 함수 흐름과 설계 경계

### 릴레이와 권위형은 같은 기능의 옵션만이 아니다

| 경계 | 릴레이 | 권위형 |
|---|---|---|
| 생성 | 클라이언트 \`MatchCreate\`가 presence stream을 만든다. | 서버 런타임 \`MatchCreate\`가 게임 모듈과 handler를 만든다. |
| ID | \`uuid.\`처럼 노드 부분이 비어 있다. | \`uuid.node\`에 호스트 노드가 들어 있다. |
| 입장 | 스트림 존재 확인 후 tracker 등록. 유효 매칭 토큰은 빈 스트림 입장도 허용한다. | \`MatchJoinAttempt\`가 상태·metadata를 보고 허용/거절한다. |
| 데이터 | 참가자 검사와 수신자 필터 후 payload를 중계한다. 기본은 발신자 제외다. | 참가자 검사 후 입력 큐에 적재, 게임 \`MatchLoop\`가 판정한다. |
| 상태 | 서버가 게임 규칙 상태를 실행하지 않는다. presence가 중심이다. | 게임 상태와 tick, 참가자 목록을 handler가 보관한다. |

근거: [릴레이 생성][match-create], [서버 매치 생성][runtime-create], [생성 registry][registry-create], [입장 분기][match-join], [송신 분기][match-send].
**[설계 제안]** 위치·승패·재화 판정의 신뢰 주체를 먼저 정한다. 단순 중계에 규칙 판정을 기대하거나, 권위형 실행기만 붙이고 입력 검증을 생략하면 경계가 무너진다.

### 매치메이커는 입장 완료를 보장하지 않는다

1. \`matchmakerAdd\`는 최소 인원 2, 최대 인원, 배수 조건을 검사하고 티켓을 반환한다. \`Add\`는 검색식과 세션별 티켓 제한도 검사한다. [요청 검증][mm-add-pipeline], [티켓 저장][mm-add]
2. 로컬 메모리 색인과 map에 대기자를 보관하고, 설정 주기마다 \`Process\`한다. 기본 조합은 검색 조건·인원 범위를 확인하고 최대 인원 우선, 마지막 interval에서는 최소 인원 충족도 고려한다. [주기][mm-init], [기본 조합][mm-select]
3. 조합 결과를 적용할 때 티켓이 아직 남았는지 다시 확인하고, 매칭된 티켓을 제거한 뒤 runtime \`MatchmakerMatched\` hook을 호출한다. [결과 적용][mm-commit]
4. hook이 매치 ID를 반환하면 그 ID를 알린다. 그렇지 않으면 \`mid\`와 30초 \`exp\`를 담은 서명 토큰을 만든다. 기본 경로가 권위형 매치를 자동 생성하는 것은 아니다. [결과 통지][mm-notify]
5. 클라이언트는 받은 ID/토큰으로 \`MatchJoin\`을 보낸다. 권위형 매치 ID가 있어도 실제 입장 허용은 별도다. 매칭 알림 전달 실패 뒤 티켓을 자동 복원하는 경로는 이 처리에 없다. [입장][match-join], [통지][mm-notify]

**[설계 제안]** 첫 버전에서는 “티켓 → 후보 확정 → 클라이언트 입장 → 시작 조건 충족”을 별도 상태로 기록한다.
매칭 완료 알림을 곧 게임 시작으로 취급하지 말고, 정해진 시간에 충분한 참가자가 입장하지 않았을 때 취소·재대기 정책을 정한다.

### backpressure는 큐마다 정책이 다르다

| 유한 큐 | 기본 크기 | 가득 찼을 때 코드 동작 |
|---|---:|---|
| session \`outgoingCh\` | 64 | \`ErrSessionQueueFull\` 반환, 비동기 \`Close\`로 접속 종료 |
| match \`inputCh\` | 128 | 해당 데이터 메시지 폐기·경고 로그, 매치는 유지 |
| match \`callCh\` | 128 | 매치 중단 후 참가 세션 연결 종료 |
| match \`joinAttemptCh\` | 128 | 입장 요청 거절, 매치는 유지 |
| match \`signalCh\` | 10 | 해당 signal 큐 삽입 실패, 매치는 유지 |
| match \`deferredCh\` | 128 | \`ErrDeferredBroadcastFull\` 반환 |
| tracker \`eventsCh\` | 1024 | 새 이벤트 삽입 실패 후 큐를 비우며 이벤트 폐기 |

기본값은 [socket 설정][socket-config], [match/tracker 설정][queue-config]에 있다. 실패 정책은 [소켓][send-bytes], [입력·명령][handler-queues], [입장][join-handler], [signal][signal], [deferred 초기화][handler-init], [tracker][tracker-overflow]에서 확인했다.
**[코드 확인]** tracker overflow는 map 갱신을 롤백하지 않는다. 버려진 이벤트에는 클라이언트 알림뿐 아니라 권위형 join/leave listener용 이벤트도 포함될 수 있다. 상태와 관측 사이의 차이가 생길 수 있는 지점이다. [이벤트 분류와 호출][tracker-listeners]
**[설계 제안]** 큐 크기를 늘리는 것만으로 실패 정책을 대신하지 않는다. 명령별 폐기 가능성, 느린 수신자 종료, 재동기화 방법을 정하고 각 큐의 거절·폐기와 콜백 소요 시간을 관측한다. 위 기본값은 용량 계획이나 처리량 보증이 아니다.

### 종료, 재접속, 영속화

**[코드 확인]** 세션 \`Close\`는 context를 취소하고 중복 실행을 막은 뒤 모든 매칭 티켓·presence·status 구독과 registry 항목을 제거한다. authoritative leave는 tracker 이벤트를 거쳐 게임 콜백으로 전달된다. [세션 종료][close], [전체 untrack][untrack-all], [leave 처리][join-leave]
새 WebSocket은 같은 사용자라도 새 session ID를 받는다. 자동으로 기존 소켓의 참가 상태를 복원하는 acceptor 경로는 없다. 기존 매치가 살아 있다면 새 세션으로 다시 입장하고 게임 상태를 재동기화해야 한다. [세션 생성][accept-session], [입장 검사][admission]

| 상태 | 이 OSS 코드의 보관 위치 | 프로세스 재시작 경계 |
|---|---|---|
| 소켓·presence·매칭 티켓 | 로컬 객체, map, 메모리 검색 색인 | 새 연결·참가·티켓이 필요하다. |
| 권위형 \`state\`, \`tick\`, 입력/명령 | \`MatchHandler\` 메모리 | 기본 registry는 저장된 handler를 재구성하지 않는다. |
| 게임이 명시적으로 저장한 결과 | 게임 콜백에서 호출한 DB/스토리지 | 해당 저장 로직의 트랜잭션·재시도·복구 계약을 따른다. |

근거: [세션 map][sessions], [tracker map][tracker-init], [matchmaker 메모리 초기화][mm-init], [registry 초기화][registry-init], [게임 상태 초기화][handler-init], [DB를 받는 게임 콜백][go-core].
\`GetState\`도 자동 checkpoint가 아니다. Go adapter는 상태를 \`fmt.Sprintf("%+v", state)\`로 반환한다. 재시작 시 재구성 가능한 안정된 저장 포맷으로 볼 수 없다. [Go snapshot][go-batch]
정상 종료는 \`MatchTerminate\`를 큐에 넣을 유예 시간이 있지만, 유예 만료나 재차 종료 신호는 즉시 중단한다. 강제 종료·프로세스 크래시에 이 콜백 실행을 기대할 수 없다. [shutdown][shutdown], [registry 종료][registry-stop]
매치 \`Stop\`은 registry·stream을 정리한다. 정상적으로 nil 상태를 반환하는 종료는 항상 소켓을 끊는 동작이 아니며, stream 전체 제거는 presence 알림을 만들지 않는다. 게임 종료 알림이 필요하면 게임이 명시적으로 보내야 한다. [handler 종료][handler-stop], [nil 상태][handler-loop], [stream 정리][untrack-stream]

**[설계 제안]** 최소 구현도 \`userID\`와 \`sessionID\`를 분리하고, 재접속 시 참가 자격 재검사와 전체 상태 snapshot을 제공한다.
결과·보상 저장에는 매치 ID 기반 중복 방지 키를 사용하고, 결과 저장 성공과 실시간 알림 성공을 별개로 다룬다. 중간 복원이 요구되지 않으면 모든 tick을 저장하지 말고, 중단된 게임의 무효/환불 규칙부터 정한다.

## 헷갈리기 쉬운 지점

**OSS 로컬과 분산의 경계.** \`main\`이 등록하는 구현은 모두 \`Local\`이다. Local registry는 다른 노드의 \`JoinAttempt\`를 not-found로, \`SendData\`를 무처리로 끝낸다. Local router도 다른 노드로 전달하지 않고 로컬 session registry만 찾는다. [조립][boot], [노드 검사][admission], [데이터 노드 검사][registry-events], [router][router]
\`PresenceID.Node\`, \`uuid.node\`, tracker의 \`ListNodesForStream\` 같은 형태만으로 분산 presence, 노드 간 릴레이, 전역 매치메이킹, 호스트 장애 시 매치 이전이 구현됐다고 결론 내릴 수 없다. Local tracker는 해당 스트림이 있으면 현재 노드 하나만 반환한다. [노드 목록][tracker-nodes]
**[설계 제안]** OSS 프로세스를 여러 개 띄우는 운영 구성과 하나의 실시간 클러스터는 구별한다. 같은 매치 접속을 동일 프로세스로 보내는 정책만으로 시작할 수 있으나, 공유 DB만 붙인다고 실시간 map·큐·게임 상태가 공유되지는 않는다. 별도 배포판의 구현·보장은 이 저장소 분석으로 판정하지 않는다.

**README의 rUDP 문구.** [README 78행][readme-transport]은 WebSocket 또는 rUDP라고 쓰지만, 이 커밋에서 확인한 등록 경로는 \`/ws → NewSocketWsAcceptor\`다. 프로젝트 Go 소스에서 vendor를 제외하고 \`ListenPacket\`, \`ListenUDP\`, \`udp\`, \`rudp\`, \`rUDP\`, \`UDP\`를 검색한 결과 별도 UDP 실시간 listener를 찾지 못했다. [실행 등록][ws-route]
\`SendBytes(payload, reliable)\`는 \`reliable\`을 읽지 않고 동일 WebSocket 큐로 보낸다. \`reliable=false\`가 이 실행 파일에서 UDP 전송으로 바뀐다는 해석은 근거가 없다. 반대로 \`reliable=true\`도 애플리케이션 입력 큐 overflow나 프로세스 장애를 넘어선 처리 보장이 아니다. [전송 구현][send-bytes], [입력 폐기][handler-queues]

## 다음에 더 보면 좋은 지점

**[설계 제안]** 자체 백엔드의 첫 검증은 “두 클라이언트 입장 → 상태 변경 → 한 클라이언트 단절 → 새 세션 재입장 → snapshot 일치” 한 경로로 잡는다.
**[미실행]** 이 문서에서는 다음을 실제 서버로 재현하지 않았다: 느린 클라이언트 송신 큐 포화, tracker 이벤트 손실, 느린 입장 콜백의 10초 경계, 매치 프로세스 강제 종료, 서로 다른 두 OSS 프로세스 사이의 입장.
따라서 수치 성능·실제 지연·장애 중 메시지 개수는 판정하지 않는다. 코드로 확정한 실패 분기를 테스트 시나리오로 옮기는 것이 다음 단계다.

[boot]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/main.go#L180-L207
[ws-route]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/api.go#L232-L235
[accept]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/socket_ws.go#L30-L93
[accept-session]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/socket_ws.go#L95-L139
[consume]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/session_ws.go#L187-L292
[pipeline]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/pipeline.go#L67-L198
[outgoing]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/session_ws.go#L325-L369
[send-bytes]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/session_ws.go#L427-L440
[close]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/session_ws.go#L451-L490
[sessions]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/session_registry.go#L75-L114
[tracker-init]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/tracker.go#L179-L232
[track]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/tracker.go#L258-L314
[tracker-session]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/tracker.go#L1304-L1318
[untrack-all]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/tracker.go#L500-L546
[untrack-stream]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/tracker.go#L650-L682
[tracker-nodes]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/tracker.go#L748-L756
[tracker-overflow]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/tracker.go#L887-L903
[tracker-listeners]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/tracker.go#L919-L1020
[router]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/message_router.go#L40-L109
[match-create]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/pipeline_match.go#L38-L94
[match-join]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/pipeline_match.go#L96-L300
[match-send]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/pipeline_match.go#L339-L453
[runtime-create]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/runtime_go_nakama.go#L1650-L1666
[registry-init]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/match_registry.go#L129-L195
[registry-create]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/match_registry.go#L228-L273
[registry-stop]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/match_registry.go#L659-L700
[admission]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/match_registry.go#L707-L738
[registry-events]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/match_registry.go#L742-L790
[handler-init]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/match_handler.go#L118-L202
[handler-stop]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/match_handler.go#L209-L232
[handler-queues]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/match_handler.go#L250-L279
[handler-loop]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/match_handler.go#L282-L333
[join-handler]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/match_handler.go#L349-L406
[signal]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/match_handler.go#L409-L462
[join-leave]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/match_handler.go#L499-L578
[marker]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/match_presence.go#L61-L107
[go-core]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/runtime_go_match_core.go#L100-L163
[go-batch]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/runtime_go_match_core.go#L176-L201
[mm-init]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/matchmaker.go#L276-L324
[mm-add-pipeline]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/pipeline_matchmaker.go#L25-L105
[mm-add]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/matchmaker.go#L556-L686
[mm-select]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/matchmaker_process.go#L27-L247
[mm-commit]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/matchmaker.go#L417-L490
[mm-notify]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/matchmaker.go#L476-L549
[socket-config]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/config.go#L897-L916
[queue-config]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/config.go#L1192-L1242
[shutdown]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/shutdown.go#L26-L85
[readme-transport]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/README.md#L78`,filtered:!1,sourceHash:"6606fe53d6be609288cc08c93d0e6cff1037586e2ca0ec8eaeffbe436f9733c1"},{id:"study-nakama-04-runtime-operations-md",title:"04. 런타임 확장과 운영 경계",path:"study/nakama/04_RUNTIME_OPERATIONS.md",category:"이전 조사",status:"역사적 조사·제안",body:'# 04. 런타임 확장과 운영 경계\n\n분석 기준: `heroiclabs/nakama` 커밋 `e920249a3465bea4b8ea2968020c488201b61a8e`. 아래 링크는 모두 이 커밋으로 고정했다. 이 장은 로컬 소스 정적 분석이며 서버, DB, 플러그인, 테스트를 실행해 검증하지 않았다. **코드 확인**은 구현에서 읽은 사실, **설계 해석·권고**는 자체 플랫폼에 적용할 판단이다.\n\n## 짧은 답\n\nNakama의 확장 지점은 외부 마이크로서비스 호출이 아니라 **서버 프로세스 안에 등록하는 함수**다. Go 플러그인, Lua VM, JavaScript VM이 서로 다른 로딩 방식을 사용하지만 `Runtime`은 공통 RPC·hook 함수 표를 보유한다. 따라서 배워야 할 것은 세 언어 지원 자체보다 등록 시점, 호출자 정보 전달, 권한, 실패 처리, 실행 자원 한도를 나누는 방식이다. [Runtime 구조][runtime-struct]\n\n운영 측면에서는 게임 API, 운영자 콘솔, 런타임 HTTP key, 메트릭을 하나의 인증 체계로 간주하면 안 된다. MVP에는 단일 언어의 게임 규칙 함수와 작은 관리자 API만 두고, 여러 언어의 VM·플러그인 호환성은 요구가 생길 때 추가하는 편이 작다.\n\n## 먼저 알아야 할 코드 표현\n\n| 표현 | 이 코드에서의 의미 |\n|---|---|\n| 함수 타입과 `map[string]...` | RPC ID 또는 메시지 이름으로 콜백을 선택한다. |\n| `context.Context` | 사용자 정보, 실행 모드, 취소 신호 등을 전달한다. 권한 검사를 자동 수행하는 객체는 아니다. |\n| `chan *RuntimeJS` / `chan *RuntimeLua` | 대기 중인 VM을 빌리고 돌려주는 풀이다. 메시지 브로커가 아니다. |\n| `atomic.Uint32` | 여러 요청이 VM을 추가하려 할 때 생성 수를 제한한다. |\n| `*sql.DB`, `runtime.NakamaModule` | 신뢰된 서버 코드에 DB와 게임 도메인 기능을 제공한다. |\n| `codes.Code` | 런타임 실패를 gRPC 코드로 정규화하고 HTTP/소켓 응답으로 바꾸는 계약이다. |\n\n## 주요 파일 지도\n\n| 파일·함수 | 먼저 확인할 질문 |\n|---|---|\n| `runtime.go`: `NewRuntime`, `MatchProvider.CreateMatch` | 여러 provider를 어떤 순서로 합치는가? |\n| `runtime_go.go`: `openGoModule`, `RuntimeGoInitializer.RegisterRpc` | Go 코드를 어떻게 찾고 실제 함수로 감싸는가? |\n| `runtime_lua.go`: `openLuaModules`, `RuntimeProviderLua.Get` | Lua 코드와 VM의 수명은 어떻게 다른가? |\n| `runtime_javascript.go`: `cacheJavascriptModules`, `evalRuntimeModules` | JS entrypoint와 초기화 결과는 어떻게 재사용되는가? |\n| `api_rpc.go`, `pipeline.go`, `api_storage.go` | 인증된 요청이 어느 시점에 사용자 코드로 넘어가는가? |\n| `console.go`, `console_authenticate.go`, `console/acl/acl.go` | 운영자 인증과 리소스별 권한을 어디서 검사하는가? |\n| `config.go`, `metrics.go`, `migrate/migrate.go` | 시작 조건, 관측, 스키마 변경을 어떻게 분리하는가? |\n| `build/Dockerfile`, `docker-compose-tests.yml` | 실제 소스를 빌드·검증하는 환경은 무엇인가? |\n\n## 1. 등록과 호출은 다른 수명이다\n\n```mermaid\nflowchart TD\n    Start[NewRuntime] --> GoInit[Go provider]\n    GoInit --> LuaInit[Lua provider]\n    LuaInit --> JsInit[JavaScript provider]\n    JsInit --> Registry[Common callback tables]\n    Request[Authenticated request] --> Registry\n    Registry --> GoCall[Direct Go function]\n    Registry --> VmGet[Borrow script VM]\n    VmGet --> ScriptCall[Invoke script callback]\n    ScriptCall --> VmPut[Return script VM]\n    GoCall --> Result[Result or error]\n    VmPut --> Result\n```\n\n**코드 확인:** `NewRuntime`은 파일 목록과 이벤트 큐를 만든 뒤 Go → Lua → JS provider를 초기화한다. 각 provider가 반환한 함수를 모아서 `Runtime`을 구성한다. 클라이언트가 매 요청마다 모듈을 로딩하는 구조가 아니다. [생성 순서][runtime-init]\n\n1. `GetRuntimePaths`는 설정된 디렉터리를 순회해 파일 목록을 만든다.\n2. Go는 `.so`, Lua는 `.lua`, JS는 지정 entrypoint 또는 `index.js`를 사용한다.\n3. 등록된 RPC는 `RuntimeRpcFunction` 형태로 합쳐진다.\n4. 요청은 공통 표에서 콜백을 찾고, Go 직접 호출 또는 script VM 대여로 갈라진다.\n5. Lua/JS는 호출 context를 설정하고 실행한 뒤 기본 context로 돌려놓고 풀에 반납한다. [경로 수집][runtime-paths] [Lua RPC][lua-rpc] [JS RPC][js-rpc]\n\n### 1.1 같은 이름이면 모두 실행되는가?\n\n**코드 확인:** RPC 맵은 JavaScript → Lua → Go 순서로 대입한다. 같은 ID의 최종 실행 함수는 **Go > Lua > JavaScript**다. 실시간 before/after 맵도 같은 순서로 덮어쓴다. 여러 hook을 연쇄 호출하는 middleware 목록이 아니다. [맵 합성][runtime-merge]\n\nAPI before/after는 `RuntimeBeforeReqFunctions`, `RuntimeAfterReqFunctions`의 개별 필드를 채우는 방식이다. before의 `GetAccount`를 보면 JS 표에서 시작한 뒤 non-nil Lua, Go 함수로 덮어쓴다. `MatchmakerMatched` 같은 단일 콜백은 첫 번째 non-nil을 고르는 `switch`로 Go → Lua → JS 순서를 적용한다. [Lua API hook 합성][api-hook-lua] [Go API hook 합성][api-hook-go] [단일 콜백 선택][runtime-single]\n\n모든 registry가 같은 충돌 정책을 쓰지는 않는다. `RuntimeAuthenticateProviderRegistry.Register`는 소문자 이름을 `LoadOrStore`하며 중복이면 오류를 반환한다. RPC의 덮어쓰기 규칙을 인증 provider 등록에 일반화하면 안 된다. [인증 provider 중복][auth-registry]\n\n`MatchProvider.CreateMatch`도 별도 경로다. 등록된 provider를 순서대로 호출하다 처음 non-nil core를 반환한다. provider 오류가 나오면 즉시 중단하므로 다음 언어로의 무조건 fallback이 아니다. [매치 provider][match-provider]\n\n**설계 해석·권고:** 자체 플랫폼은 처음부터 언어 간 우선순위를 만들 필요가 없다. 단일 registry에서 중복 ID를 시작 오류로 처리하면 배포자가 잘못 등록한 함수가 조용히 가려지는 문제를 줄일 수 있다.\n\n### 1.2 언어별 로딩의 실제 차이\n\n| 경로 | 코드 확인 | 구현 시 부담 |\n|---|---|---|\n| Go | `plugin.Open` 후 `Lookup("InitModule")`, 정확한 Go 함수 타입 검사, 초기화 함수 실행 | 서버와 플러그인 빌드 환경·공유 타입을 함께 관리해야 한다. |\n| Lua | 소스 파일 캐시, 허용된 library 집합, 초기 VM에서 callback 등록 | VM 상태와 전역 데이터, pool 수를 관리한다. |\n| JS | 단일 entrypoint 파싱·컴파일, `InitModule` 호출, callback 이름 보관 | 빌드된 JS 묶음과 전역 함수 계약을 관리한다. |\n\nGo의 `InitModule`은 `context`, logger, `*sql.DB`, `runtime.NakamaModule`, `runtime.Initializer`를 받는다. `NewRuntimeProviderGo`가 이 함수를 실제로 호출한다. `RegisterRpc`는 ID를 소문자로 바꾸고, 요청마다 context를 보강한 뒤 사용자 함수를 직접 호출하는 closure를 저장한다. `runtime.Error`의 코드가 유효하지 않거나 일반 오류라면 `Internal`로 바꾼다. [Go 로딩][go-load] [Go 초기화][go-init] [Go RPC 등록][go-register]\n\nLua의 `openLuaModules`는 이 단계에서 파일을 읽어 캐시하고, base/table/os/string/math/bit32와 package library를 선택한다. OS library는 `OpenOs`, package는 `OpenPackage(moduleCache)`로 교체된다. 제한된 library 목록이 곧 테넌트 격리의 증명은 아니다. [Lua 모듈][lua-modules]\n\nJS의 `cacheJavascriptModules`는 지정 entrypoint가 없으면 `index.js`를 찾고, 그것도 없으면 빈 모듈 목록을 반환한다. `evalRuntimeModules`는 프로그램을 평가하고 최상위 `InitModule`을 확인·호출한다. 추가 VM은 같은 컴파일 프로그램을 실행해 만들고, 등록 때 얻은 callback 정보를 재사용한다. Node.js 프로세스를 띄우는 구현이 아니다. [JS 파일][js-cache] [JS 초기화][js-eval] [JS VM 생성][js-create]\n\n## 2. RPC와 hook의 호출·실패 계약\n\n### 2.1 RPC 인증과 사용자 정보\n\n**코드 확인:** HTTP `RpcFuncHttp`는 query `http_key`, Basic으로 전달된 runtime HTTP key, 사용자 Bearer token을 처리한다. 실제 분기 순서는 query `http_key`가 먼저다. 함수 맨 위의 설명 주석만 보고 token 우선이라고 읽으면 구현과 다르다. [HTTP RPC 인증][http-rpc-auth]\n\nHTTP key 인증에 성공했다고 사용자 세션이 생기는 것은 아니다. `uid`는 token 인증일 때만 채워지고, key 인증 호출은 빈 사용자 ID로 런타임에 전달된다. 등록 ID 조회와 payload 처리가 끝나면 `fn(...)`을 직접 호출하고, 오류를 HTTP 상태·본문으로 변환한다. [HTTP RPC 호출][http-rpc-call]\n\ngRPC `RpcFunc`도 ID를 소문자로 만들고 공통 함수 표에서 찾는다. context의 사용자 ID·변수·만료 시각과 metadata를 꺼내 함수에 전달한다. 이 함수의 본문만으로 앞단 인증 정책 전체를 설명할 수는 없다. [gRPC RPC][grpc-rpc]\n\n**설계 해석·권고:** “RPC에 들어왔으니 사용자 인증 완료” 대신 RPC마다 필요한 주체를 정해야 한다. 예를 들어 사용자 보상 함수는 `userID` 존재뿐 아니라 보상 조건·재실행 방지를 검증하고, 서버 작업 함수는 별도 서비스 권한을 요구해야 한다.\n\n### 2.2 before와 after는 트랜잭션의 앞뒤가 아니다\n\n`ApiServer.WriteStorageObjects`를 따라가면 before hook → 수정된 입력 검증 → core 저장 → after hook → 응답 순서다. before가 오류를 반환하면 요청은 중단되고, nil 입력을 반환하면 `NotFound`로 리소스를 비활성화한다. before가 새 입력을 반환하면 그 입력을 대상으로 permission 범위·JSON 형식 등을 다시 검사한다. [storage API hook][storage-hooks]\n\n`traceApiAfter`는 동기적으로 hook을 실행하고 오류 여부를 메트릭에 기록하지만 오류를 호출자에게 반환하지 않는다. 이 경로의 after 실패가 이미 성공한 저장을 취소하거나 실패 응답으로 바꾸지는 않는다. [after 추적][api-trace]\n\n실시간 `Pipeline.ProcessRequest`의 규칙은 더 세분화되어 있다. before 오류는 오류 메시지를 보내고 세션을 유지하지만, before가 nil을 반환하면 false를 반환해 세션 종료 경로로 간다. 성공한 pipeline 연산에만 after를 호출하며 after 오류는 버린다. **RPC 메시지는 이 before/after 경로를 건너뛴다.** [실시간 hook][rt-hooks]\n\n**설계 해석·권고:** 반드시 함께 성공해야 하는 재화 지급·인벤토리 기록을 after hook에 분리하면 안 된다. 그런 변경은 도메인 함수의 같은 트랜잭션으로 묶고, after에는 실패해도 본 연산 결과를 되돌리지 않는 부가 작업만 둔다.\n\n## 3. 신뢰 경계와 동시성\n\n### 3.1 runtime은 신뢰된 서버 코드다\n\nGo 플러그인은 서버 프로세스에서 실행되고 DB 핸들을 직접 받는다. script API도 서버 권한을 갖는다. Go `StorageRead`는 `uuid.Nil` 호출자로, `StorageWrite`는 authoritative 인자를 `true`로 전달한다. Lua/JS의 storage wrapper에도 같은 호출이 있다. 따라서 클라이언트 객체 소유권 검사가 runtime 호출에 자동 적용된다고 가정할 수 없다. [Go storage][go-storage] [Lua storage][lua-storage] [JS storage][js-storage]\n\n**설계 해석·권고:** 이 확장 지점을 사용자가 임의 코드를 올리는 멀티테넌트 실행 환경으로 그대로 노출하지 않는다. VM pool은 실행 자원 재사용·동시성 제어 수단이고, 관리자 작성 코드를 비신뢰 코드로 바꾸는 격리 장치는 아니다. 게임별 RPC가 core 함수를 호출하기 전에 호출자, 대상 사용자, 값 범위와 도메인 조건을 검사하도록 책임을 둔다.\n\n### 3.2 Lua/JS pool의 포화 시 동작\n\n`RuntimeProviderLua.Get`과 `RuntimeProviderJS.Get`은 idle VM을 먼저 찾는다. 없으면 생성 수를 atomically 늘리고 최대치 안에서 VM을 생성한다. 한도를 넘으면 새 VM 없이 반납 또는 context 취소를 기다린다. 생성 카운터가 경쟁 중 한도를 잠깐 넘을 수 있어도 실제 VM을 초과 생성하지 않도록 분기한다. [Lua pool][lua-pool] [JS pool][js-pool]\n\n`Put`은 채널에 VM을 돌려주며, 예상 밖으로 풀이 가득 차면 경고를 기록하고 버린다. 기본값은 Lua 최소 16/최대 48, JS 최소 16/최대 32이고 읽기 전용 globals가 켜져 있다. 이는 설정 기본값이며 현재 워크로드에서 안전한 처리량을 입증한 값은 아니다. [runtime 기본값][runtime-defaults]\n\nGo RPC wrapper에는 이 script pool 대여 단계가 없다. **설계 해석:** 여러 요청이 Go callback의 공유 상태를 함께 만질 수 있으므로 plugin이 별도 동기화 책임을 가진다. script 전역 변수도 DB 대체재나 사용자별 세션 저장소로 삼기 어렵다. 요청과 VM은 일대일로 고정되지 않는다. [Go RPC 등록][go-register]\n\nJS `RuntimeJS.SetContext`가 하는 일은 `nakamaModule.ctx = ctx`다. pool 대기 취소는 코드로 확인되지만, 이것만으로 실행 중인 임의 JS 계산이 시간 제한에 따라 강제 중단된다고 결론 낼 수 없다. [JS context][js-context]\n\n### 3.3 이벤트 큐는 영속 전달 보장이 없다\n\n**설계 해석·권고:** 이 큐를 결제 확정·재화 반영의 유일한 전달 경로로 쓰지 않는다. MVP에서는 중요한 상태 변경을 동기 트랜잭션으로 완료하고, 영속 비동기가 실제로 필요할 때 outbox 등의 계약을 별도로 도입한다.\n\n## 4. 운영자 콘솔은 별도의 보안 경계다\n\n### 4.1 인증과 ACL을 나눠 읽기\n\n`consoleAuthInterceptor`는 login/MFA setup/logout/password change를 제외한 RPC에 인증을 요구한다. `checkAuth`의 Basic은 설정된 root 관리자 계정만 받고 `acl.Admin()`을 부여한다. Bearer는 HMAC-SHA256 JWT, 만료, UUID 형식, console session cache 유효성을 확인한 뒤 `acl.CheckACL`을 호출한다. [콘솔 인증][console-auth]\n\n`Authenticate`는 계정/IP 로그인 제한을 확인하며 일반 운영자는 DB의 bcrypt password와 disable 상태를 검사한다. 성공 시 ACL을 포함한 console JWT를 만들고 console session cache에 등록한다. 플레이어 세션과 혼동하지 않는다. [콘솔 로그인][console-login] [운영자 조회][console-lookup]\n\n`acl.Permission`은 리소스마다 read/write/delete 비트를 갖고 `HasAccess`는 필요한 비트의 포함 관계를 검사한다. `CheckACL`은 메서드를 리소스·연산 권한에 매핑하며 등록되지 않은 경로는 Admin 권한을 요구한다. `GetConfig`와 `DeleteAllData`도 각각 configuration read, all-data delete에 대응한다. [ACL 구현][acl-code]\n\n`validateConsoleUserACLGrant`는 생성자가 가진 권한 범위를 넘는 운영자 생성을 막는다. `ResetUserPassword`는 대상 row를 `FOR UPDATE`로 잠그고 대상 ACL이 호출자의 권한 범위 안인지 검사한다. `UpdateUser`는 수정 후 `consoleSessionCache.RemoveAll`로 대상 세션을 제거한다. 권한 변경과 기존 token 수명의 관계를 볼 수 있는 지점이다. [운영자 권한 변경][console-users]\n\n### 4.2 자동 보호가 적용되는 경로를 정확히 구분하기\n\n사용자 정의 `runtime.consoleHttpHandlers` 등록에서 auth/audit wrapper를 붙이는 조건은 `/v2/console/hiro/` prefix다. 그 밖의 custom handler는 등록된 handler 자체가 사용된다. 모든 사용자 정의 콘솔 경로에 console ACL이 자동 적용된다고 말할 수 없다. [custom 콘솔 경로][console-custom]\n\n**설계 해석·권고:** 자체 관리자 API는 작은 전용 router 전체에 인증·권한 검사를 기본 적용한다. 특정 prefix에만 보호를 추가하는 확장 계약은 endpoint 작성자가 보호 책임을 놓치기 쉽다.\n\n`GetConfig`는 config를 clone한 뒤 console password/signing key, DB password와 일부 공급자 비밀값을 `REDACTED`로 교체한다. 이는 명시적 필드 목록이며 모든 문자열·runtime environment를 자동 탐색하는 비밀값 제거기가 아니다. `DeleteAllData`는 실제 게임 테이블을 truncate하는 기능이다. “관리 화면”도 서비스 데이터 변경 경로다. [config 조회·전체 삭제][console-config]\n\n## 5. 설정과 메트릭의 운영 계약\n\n`ParseArgs`는 기본 config → 지정 YAML 파일들 → CLI override 순서로 값을 구성한다. runtime environment는 파일별 값을 보존·병합한 뒤 CLI 값을 반영한다. [설정 우선순위][config-parse]\n\n`ValidateConfig`는 일부 잘못된 값에는 fatal을 사용하지만 기본 관리자 password·서명키·server key·runtime HTTP key에는 경고를 남긴다. **설계 해석·권고:** 자체 서비스의 production 모드에서는 알려진 기본 비밀값이 남아 있으면 시작을 거부하는 편이 명확하다. [기본값 경고][config-warnings]\n\n`NewLocalMetrics`는 5초 간격의 요청 수·평균 지연·입출력량 snapshot과 Prometheus scope를 만든다. `PrometheusPort > 0`일 때 별도 HTTP 서버를 `:<port>`에 열고 reporter handler를 연결한다. 이 생성 경로에는 console 인증 wrapper나 TLS 설정이 없다. CORS 허용은 인증이 아니다. [메트릭 서버][metrics-server]\n\n**설계 해석·권고:** 관리·메트릭 포트의 네트워크 노출 범위를 public 게임 API와 분리한다. 초기 관측 항목은 요청 지연/실패, DB pool 사용량, VM 포화·이벤트 유실처럼 실제 병목과 실패를 설명하는 값으로 좁힌다.\n\n## 6. 마이그레이션·빌드·테스트에서 확인할 범위\n\n### 6.1 스키마 변경과 서버 시작\n\n`migrate/migrate.go`는 SQL을 `go:embed`로 포함하고 `migration_info`에 적용 상태를 기록한다. `RunCmd`는 up/down/redo/status로 분기하며, 정상 서버 시작은 `migrate.Check`를 호출한다. 자동 up을 정상 시작 함수에 숨기지 않고, 배포 명령이 up을 먼저 실행하는 형태다. [migration 구현][migrations] [시작 시 확인][migration-start]\n\n`Check`의 비교는 로컬 migration 수와 DB record 수의 차이다. DB가 뒤처지면 fatal, DB가 더 앞서면 warning이다. 이 코드를 SQL 내용의 checksum 검증이나 완전한 schema diff로 설명하면 안 된다. [migration 확인][migrations]\n\n`docker-compose-postgres.yml`은 PostgreSQL healthcheck 후 `migrate up && exec nakama`를 실행한다. 그러나 사용 이미지는 `nakama:3.37.0`이다. **이 Compose를 실행해도 이 문서의 고정 소스 커밋을 빌드·검증한 것이 아니다.** [Postgres Compose][compose-postgres]\n\n내장 `healthcheck`는 기본 localhost:7350에 HTTP GET을 보내 200인지 확인한다. 이 검사 하나로 모든 DB 작업·runtime RPC·도메인 기능의 정상 동작까지 검증했다고 주장할 수 없다. [healthcheck][healthcheck]\n\n### 6.2 빌드 요구와 검증 명령의 함정\n\n`go.mod`의 Go 지시문은 **1.27.1**이고 `nakama-common`은 1.48.0이다. `build/Dockerfile`은 golang:1.27.1-bookworm, CGO=1, gcc/libc6-dev, vendor 모드와 version/commit linker 값을 사용한다. pluginbuilder도 같은 Go 기반 이미지를 사용한다. “아무 Go 버전에서 단일 정적 바이너리 빌드”라는 전제로 준비하면 다르다. [Go module][go-mod] [서버 Dockerfile][docker-build] [pluginbuilder][plugin-build]\n\n`nakama check`는 전체 서비스 검증 명령이 아니다. Go는 `.so`를 열어 `InitModule` 시그니처를 확인하고 그 함수를 호출하지 않는다. JS dry-run은 `InitModule` 호출 전 반환하지만 그 앞의 `RunProgram`은 실행한다. “코드를 전혀 실행하지 않는 검사”라고도 부르면 안 된다. [runtime 검사][runtime-check] [Go 검사][go-load] [JS 초기화][js-eval]\n\nCI tests workflow는 `docker-compose-tests.yml`로 DB, 소스 빌드 서버, 테스트 컨테이너를 띄운다. 테스트 컨테이너는 Go 1.27.1에서 `go test -vet=off -v -race ./...`를 수행하고 `TEST_DB_URL`을 전달한다. `NewDB`는 실제 DB 연결과 ping을 한다. 따라서 전체 test suite를 DB 없이 실행되는 순수 unit test 집합으로 취급할 수 없다. [테스트 Compose][compose-tests] [CI 테스트][ci-tests] [테스트 DB][test-db]\n\n`build/build.sh`에는 multi-arch image build뿐 아니라 `--push`가 있다. 파일 이름만 보고 로컬 확인용으로 실행하는 스크립트가 아니다. 이 분석에서는 실행하지 않았다. [release script][build-script]\n\n## 7. 자체 MVP에서 가져갈 것과 미룰 것\n\n아래는 **설계 권고**이며 Nakama의 필수 배포 조건이 아니다.\n\n| MVP에 남길 것 | 뒤로 미룰 것 | 이유 |\n|---|---|---|\n| 정적 등록한 단일 언어 RPC/도메인 함수 | Go plugin과 Lua/JS 동시 지원 | 등록·빌드·오류 계약을 하나만 유지한다. |\n| 명확한 사용자/서비스/운영자 주체 | 하나의 범용 key로 모든 endpoint 접근 | 인증과 도메인 권한의 책임을 드러낸다. |\n| 핵심 변경의 DB 트랜잭션 | after hook 기반 중요 상태 변경 | after 실패는 원래 성공을 취소하지 않는다. |\n| 작은 관리자 API와 전체 router 보호 | 임의 custom 콘솔 handler | 확장 경로별 보안 예외를 줄인다. |\n| migration 명령과 시작 시 버전 확인 | 자동 rollback·범용 schema 비교기 | 실제 배포에 필요한 계약부터 갖춘다. |\n| 요청·DB·오류 메트릭 | 사용자 ID별 고차원 custom metric | 필요한 진단과 비용을 맞춘다. |\n| 실제 DB 대상 핵심 동시성 검사 | 처음부터 Nakama 전체 테스트 환경 복제 | 자체 불변식을 깨뜨리는 최소 검증에 집중한다. |\n\n처음 구현할 연결 고리는 `인증된 요청 → 입력·권한 검증 → 도메인 트랜잭션 → 응답·메트릭`이면 충분하다. hook이나 플러그인은 둘 이상의 게임에서 같은 확장 요구가 반복될 때 해당 지점만 추가한다.\n\n## 분석 한계와 다음 확인\n\n이 장에서는 실제 RPC 요청, VM 포화, MFA/ACL 동작, migration 적용, 이미지 빌드, CI 성공을 검증하지 않았다. 버전 수치·경로·분기는 고정 커밋의 구현 설명이며 운영 성능·보안 검증 결과가 아니다. 추가 실행 검증은 동일 커밋을 빌드한 서버와 폐기 가능한 DB에서 HTTP key/사용자 token 구분, before/after 실패, 권한 축소 후 token 처리부터 시작하는 것이 좋다.\n\n소스 표기도 파일별로 확인해야 한다. `console/acl/acl.go`와 `migrate/migrate.go`에는 proprietary NOTICE가 있고, 위 Dockerfile에는 Apache 2.0 표기가 있다. 이는 관찰한 헤더 차이이며 재사용 권리에 대한 법률 결론은 아니다. 설계 학습과 소스 복제 여부를 구분한다. [ACL 헤더][acl-header] [migration 헤더][migration-header]\n\n## 고정 소스 링크\n\n[runtime-struct]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/runtime.go#L554-L590\n[runtime-init]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/runtime.go#L690-L788\n[runtime-paths]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/runtime.go#L637-L660\n[runtime-merge]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/runtime.go#L807-L861\n[api-hook-lua]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/runtime.go#L1122-L1133\n[api-hook-go]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/runtime.go#L1464-L1475\n[runtime-single]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/runtime.go#L2744-L2755\n[auth-registry]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/authenticate_provider_registry.go#L34-L50\n[match-provider]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/runtime.go#L600-L627\n[go-load]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/runtime_go.go#L3937-L3981\n[go-init]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/runtime_go.go#L3862-L3887\n[go-register]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/runtime_go.go#L133-L151\n[lua-modules]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/runtime_lua.go#L1374-L1426\n[lua-rpc]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/runtime_lua.go#L1428-L1475\n[js-rpc]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/runtime_javascript.go#L190-L238\n[js-cache]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/runtime_javascript.go#L1987-L2031\n[js-eval]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/runtime_javascript.go#L2609-L2672\n[js-create]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/runtime_javascript.go#L1915-L1958\n[http-rpc-auth]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/api_rpc.go#L47-L109\n[http-rpc-call]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/api_rpc.go#L198-L228\n[grpc-rpc]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/api_rpc.go#L272-L330\n[storage-hooks]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/api_storage.go#L157-L238\n[api-trace]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/api.go#L795-L815\n[rt-hooks]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/pipeline.go#L156-L198\n[go-storage]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/runtime_go_nakama.go#L2227-L2314\n[lua-storage]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/runtime_lua_nakama.go#L6460-L6520\n[js-storage]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/runtime_javascript_nakama.go#L5059-L5118\n[lua-pool]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/runtime_lua.go#L2359-L2403\n[js-pool]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/runtime_javascript.go#L718-L762\n[runtime-defaults]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/config.go#L1170-L1190\n[js-context]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/runtime_javascript.go#L62-L64\n[event-queue]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/runtime_event.go#L33-L72\n[console-auth]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/console.go#L523-L650\n[console-login]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/console_authenticate.go#L93-L293\n[console-lookup]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/console_authenticate.go#L427-L487\n[acl-code]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/console/acl/acl.go#L26-L379\n[console-users]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/console_user.go#L156-L403\n[console-custom]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/console.go#L314-L334\n[console-config]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/console_config.go#L31-L119\n[config-parse]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/config.go#L66-L120\n[config-warnings]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/config.go#L331-L359\n[metrics-server]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/metrics.go#L102-L196\n[migrations]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/migrate/migrate.go#L31-L117\n[migration-start]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/main.go#L159-L175\n[compose-postgres]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/docker-compose-postgres.yml#L1-L50\n[healthcheck]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/main.go#L125-L136\n[go-mod]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/go.mod#L1-L38\n[docker-build]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/build/Dockerfile#L18-L64\n[plugin-build]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/build/pluginbuilder/Dockerfile#L18-L43\n[runtime-check]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/runtime.go#L662-L687\n[compose-tests]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/docker-compose-tests.yml#L18-L59\n[ci-tests]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/.github/workflows/tests.yaml#L1-L19\n[test-db]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/api_test.go#L179-L195\n[build-script]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/build/build.sh#L3-L17\n[acl-header]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/console/acl/acl.go#L1-L10\n[migration-header]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/migrate/migrate.go#L1-L10',filtered:!0,sourceHash:"2e2d8d45bdd646d9e5a3def0b375744f72203e0a431bdfc7d0ebf6de0399e94d"},{id:"study-nakama-05-own-platform-roadmap-md",title:"자체 백엔드 플랫폼을 위한 분석 기반 제안",path:"study/nakama/05_OWN_PLATFORM_ROADMAP.md",category:"이전 조사",status:"역사적 조사·제안",body:`# 자체 백엔드 플랫폼을 위한 분석 기반 제안

이 문서는 Nakama 코드에서 얻은 설계 교훈과 **검토용 구현 방향**이다. 승인된 요구사항 명세나 확정된 실행 계획은 아니다. 대상 게임·클라이언트·언어·운영 규모가 아직 정해지지 않아, 작은 팀이 먼저 한 게임에 적용하고 공통 기능을 확장하는 상황을 가정한다. 아래 모델과 API는 자체 플랫폼 제안이며 Nakama의 기존 API를 그대로 설명하는 것이 아니다.

## 1. 무엇을 만들지 먼저 구분하기

Nakama에서 배울 영역은 세 가지다.

| 영역 | 제공하는 것 | 자체 개발에서 생기는 일 |
|---|---|---|
| 게임 공통 백엔드 | 계정, JSON 저장, 랭킹, 친구, 알림, 운영자 도구 | 여러 게임이 같은 규칙을 재사용하도록 설계 |
| 실시간 게임 서버 | 연결, presence, 방, matchmaking, 서버 판정 | 게임 상태 소유권·지연·재접속·장애 처리를 설계 |
| 플랫폼 관리 기능 | 게임/환경 생성, 배포, 격리, 할당량, 비밀 관리 | Nakama의 게임 기능 외에 별도 관리 체계 필요 |

공개 코드의 주요 데이터 키에 범용 \`project_id\` 또는 \`tenant_id\`가 없다는 점이 중요하다. 여러 게임이 공유하는 플랫폼을 만들려면 게임별 격리와 계정 공유 정책을 별도로 결정해야 한다. \`collection\` 이름에 게임 접두사를 붙이는 것만으로 모든 인증·랭킹·운영 권한까지 격리되지는 않는다. 근거는 API·데이터 분석의 스키마 절이다.

## 2. 가능한 접근과 권장 방향

| 접근 | 적합한 목표 | 얻는 것 | 부담 |
|---|---|---|---|
| **자체 작은 코어 구현** | 자체 플랫폼의 구조·정책을 직접 소유 | 필요한 계약만 설계하고 이해 가능 | 인증·DB 일관성·운영 품질을 직접 검증 |
| Nakama에 게임 runtime 추가 | 게임 출시와 기능 확보가 우선 | 기존 SDK와 공통 기능을 활용 | Nakama의 데이터·배포·확장 규칙 수용 |
| Nakama fork를 기반으로 변경 | 기존 프로토콜/SDK 호환 자체가 필수 | 넓은 기능과 기존 동작을 출발점으로 확보 | upstream 병합·보안 수정·파일별 재사용 조건 확인 |

사용자의 “직접 백엔드 플랫폼 구현” 목표에는 **자체 작은 코어**가 가장 직접적이다. 기존 클라이언트와 호환해야 하는 조건이 생기면 fork/확장 방식을 다시 비교한다. 개발 언어가 미정이라면 Go + PostgreSQL은 분석한 모델을 단순하게 옮기는 후보지만, 익숙한 서버 언어가 있다면 그 언어로 같은 계약을 구현해도 된다.

Go를 후보로 둔 이유, 다른 언어의 장단점과 Nakama가 실제로 적용한 방법은 [06. Go 선택과 언어 비교](원본 프로젝트 경로)에 추가했다.

초기 배치는 **단일 애플리케이션 + PostgreSQL**을 후보로 권한다. 게임별 모듈은 코드 경계로 나누고, 측정된 필요가 생길 때 프로세스 분리를 검토한다. Redis·메시지 브로커·Kubernetes·분산 매치 배치를 초기 필수 구성으로 두지 않는다.

## 3. 최소 구조

\`\`\`mermaid
flowchart TD
    Game[Game client] --> API[HTTP API]
    Admin[Operator] --> AdminAPI[Admin API]
    API --> Auth[Identity and session]
    API --> Profile[Player profile and save]
    API --> Rules[Game commands]
    AdminAPI --> Rules
    Auth --> DB[PostgreSQL]
    Profile --> DB
    Rules --> DB
    Rules --> Board[Leaderboard]
    Board --> DB
\`\`\`

상자는 책임 구분이며 각각 별도 서비스가 아니다. \`Game commands\`는 보상 받기·아이템 구매·경기 결과 반영 등 클라이언트가 상태를 직접 덮어쓰면 안 되는 동작이다.

| 경계 | 지켜야 할 규칙 | Nakama에서 읽을 예 |
|---|---|---|
| API와 도메인 함수 | 입력·인증 처리 후 핵심 규칙 호출 | \`api_storage.go → core_storage.go\` |
| 사용자 저장과 경제 상태 | 클라이언트 저장 권한과 서버 변경 권한 구분 | \`authoritativeWrite\`, wallet runtime API |
| 영구 상태와 접속 상태 | 접속 종료가 계정 삭제가 아님; 메모리 소실을 고려 | DB 사용자, session registry, tracker |
| 확장 로직과 기본 기능 | 게임별 handler가 공통 저장/경제 함수를 호출 | runtime 등록과 \`MultiUpdate\` |
| 운영자와 플레이어 | 서로 다른 credential·권한·감사 기록 | 별도 console 서버와 ACL |

초기에는 코드로 등록한 게임 handler만으로 충분하다. Lua/JavaScript VM, 동적 Go plugin, 임의 스크립트 업로드를 함께 만들 필요는 없다. 외부 개발자가 코드를 올리는 플랫폼이 목표라면 실행 격리·리소스 제한은 별도 과제다. Nakama runtime은 그 자체로 적대적인 tenant 코드의 안전한 격리를 증명하지 않는다.

## 4. 기능의 우선순위

| 순서 | 첫 범위 | 완료를 판단할 실제 시나리오 |
|---|---|---|
| 1 | 단일 인증 방식, 프로필, 세션 갱신·폐기, DB migration, 기본 운영 조회 | 로그인→저장→재로그인; 폐기된 세션 거부 |
| 2 | 저장 version, 권한, 서버 명령 하나, 요청 중복 방지 | 동시 저장 충돌 감지; 동일 보상 요청 재전송에도 한 번 지급 |
| 3 | 게임이 필요로 하는 랭킹 하나, 제재·감사 기록, 운영 지표 | 서버 검증 결과로 순위 반영; 관리 변경 추적 |
| 4 | 게임 요구에 맞는 알림/친구/채팅 중 필요한 것 | 미접속 알림 조회 또는 허가된 상대와 채팅 |
| 5 | 실시간 방·재접속·matchmaking·서버 판정 중 필요한 것 | 방 입장→입력→상태 반영→종료→결과 저장 |

실시간 액션 게임이 첫 목표면 5번의 작은 수직 흐름을 앞당긴다. 반대로 싱글·방치형·비동기 게임이면 WebSocket 없이 1~3번으로 유용한 제품을 만들 수 있다. 결제는 영수증 확인뿐 아니라 지급·중복·환불 정책까지 필요하므로 실제 판매 요구와 함께 범위를 잡는다.

## 5. 데이터 모델에서 먼저 정할 것

아래는 후보 모델이다. 모든 테이블을 미리 구현하자는 제안은 아니다.

| 개념 | 최소 계약 | 추가하는 시점 |
|---|---|---|
| Player | 플랫폼 전체 계정인지 게임별 계정인지 확정 | 최초 설계 |
| Identity | provider와 외부 식별자 조합의 유일성, 검증된 credential 연결 | 최초 인증 |
| Session | 만료·갱신·폐기 의미와 저장 방식 | 최초 인증 |
| Save object | owner, collection, key, value, version, 접근 권한 | 최초 저장 |
| Command receipt | 요청 키, 주체, 작업 종류, 입력 fingerprint, 처리 결과 | 중복 방지 명령 |
| Wallet / ledger | 잔액·변동 원장·업무별 유일 키를 같은 transaction으로 반영 | 재화 도입 |
| Leaderboard record | board, season, player, score, 동점 규칙 | 랭킹 도입 |
| Project / environment | game와 dev/staging/prod 경계, key의 권한 범위 | 다중 게임 공유가 확정될 때 |

다중 게임을 같은 DB에서 지원하기로 정했다면 \`project_id\`를 단순 추가하는 것으로 끝내지 않는다. 게임 범위 데이터의 고유 제약·조회 조건·cache key·idempotency key·랭킹·관리 권한에 일관되게 적용해야 한다. 의도적으로 공유하는 글로벌 계정·identity는 별도 범위로 유지하고 게임 멤버십과 연결한다. 두 게임이 같은 저장 key를 사용해도 읽기·쓰기·조회·운영 기능을 통해 서로 섞이지 않는 테스트가 필요하다.

초기 게임 수가 적고 공유 계정이 필요 없으면, 같은 코드로 게임별 배포와 DB를 나누는 방식도 비교할 가치가 있다. 배포 수는 늘지만 요청마다 tenant 필터가 빠지는 위험을 줄일 수 있다. 선택은 운영 비용과 공유 기능 요구를 확인한 뒤 확정한다.

## 6. API 수직 흐름의 예

제안하는 첫 시연 흐름은 “로그인 → 내 프로필 → 저장 → 서버 보상 요청 → 결과 조회”다. endpoint 표기는 설계 예이며 구현된 API가 아니다.

| 후보 endpoint | 의미 | 반드시 거부/처리할 상황 |
|---|---|---|
| \`POST /v1/auth/login\` | 검증한 identity로 session 발급 | 임의 ID만으로 타인 계정 접근 |
| \`POST /v1/auth/refresh\` | refresh 정책에 따른 갱신 | 만료·폐기된 토큰, 재사용 정책 위반 |
| \`GET /v1/me\` | 현재 플레이어 조회 | 타인의 ID로 주체 변경 |
| \`PUT /v1/me/saves/{key}\` | 권한과 version을 확인한 저장 | 오래된 version, 허용하지 않은 데이터 |
| \`POST /v1/commands/claim-reward\` | 서버 규칙으로 보상 지급 | 조건 미달, 중복 지급, 다른 입력으로 같은 요청 키 재사용 |
| \`GET /v1/leaderboards/{id}\` | 순위 조회 | 다른 project/season 데이터 노출 |

게스트 로그인을 도입해도 사용자가 보내는 공개 device ID만을 강한 소유 증명으로 취급해서는 안 된다. 설치 credential·복구·계정 연결의 의미를 선택해야 한다. 인증 provider가 사실 확인을 맡고 도메인 함수가 사용자의 작업 권한을 판단하게 한다.

재화·승리 수·유료 entitlement를 일반 JSON 저장 endpoint로 수정하게 하지 않는다. 게임별 규칙을 통과한 명령이 서버 측 transaction 안에서 변경해야 한다.

## 7. 특히 그대로 따라 하면 안 되는 가정

1. **after hook에 핵심 지급을 넣으면 transaction도 함께 처리된다는 가정.** Nakama의 after hook은 이미 성공한 core 호출을 되돌리지 않는다. 지급의 핵심 상태는 명시적 transaction으로 묶는다.
2. **결제 검증 기록이 있으면 보상도 중복 지급되지 않는다는 가정.** 영수증 중복과 지급 작업 중복은 별도다. 동일한 DB transaction으로 처리할 수 있는 범위를 우선 사용하고, 외부 시스템을 거칠 때만 durable outbox 같은 후속 전달 방식을 검토한다.
3. **JWT가 있으면 모든 서버가 로그아웃 상태를 공유한다는 가정.** Nakama의 local session blacklist는 메모리 상태다. 자체 플랫폼에서는 처음부터 세션 폐기 범위를 계약으로 정한다.
4. **DB가 같은 서버끼리 매치 상태도 공유한다는 가정.** authoritative match 상태의 소유 프로세스와 routing이 별도로 필요하다.
5. **신뢰 가능한 서버 코드용 runtime을 외부 tenant의 코드 실행기로 쓰는 가정.** 실행 권한과 자원 격리는 별도 설계다.
6. **라이선스 표시는 모든 파일에서 동일하다는 가정.** 루트의 Apache-2.0과 일부 소스의 proprietary NOTICE가 함께 발견됐다. 구조 분석과 소스 복사 여부를 구분해 검토해야 한다. 적용 권리에 대한 결론은 이 조사에서 내리지 않았다.

근거: [after hook][after], [local 컴포넌트 조립][local], [공통 원자 업데이트][multi], [루트 LICENSE][license], [개별 헤더 예][header]. 상세 동작과 한계는 각 분석 문서에 기록했다.

## 8. 구현 전에 정할 네 가지

- **첫 소비자:** 특정 게임인가, 내부 여러 게임인가, 외부 개발자도 사용하는 서비스인가.
- **필수 기능:** 인증·저장·랭킹으로 충분한가, 채팅·매치·서버 판정이 출시 조건인가.
- **신뢰와 격리:** 계정 공유 범위, 게임별 데이터·비밀·관리자 권한 경계는 무엇인가.
- **운영 목표:** 예상 동시 접속, 요청 유형, 가용성, 허용 가능한 상태 손실과 복구 시간은 무엇인가.

답이 나오면 첫 수직 흐름 한 개의 설계를 확정하고 실행 계획을 작성하면 된다. 현재 분석만으로 CCU, 필요한 노드 수, 개발 기간을 수치로 약속할 근거는 없다.

## 9. 구현 완료를 판단할 검증 기준

수치 성능 목표는 워크로드가 정해진 뒤 설정한다. 아래는 규모와 무관하게 작은 첫 구현에서도 확인할 수 있는 계약이다.

| 시험 | 통과 기준 |
|---|---|
| 인증 경계 | 다른 사용자의 데이터 접근·변경이 거부됨 |
| 저장 경합 | 같은 이전 version으로 두 요청을 보내면 silent overwrite가 발생하지 않음 |
| 중복 요청 | 같은 보상 요청을 재시도해도 경제 상태가 한 번만 변경됨 |
| transaction 실패 | 지급 도중 오류를 주입하면 잔액·원장·처리 기록이 부분 반영되지 않음 |
| 프로세스 재시작 | 영구 저장은 유지되고 세션 폐기는 선택한 계약대로 유지됨 |
| 다중 게임 격리 | 프로젝트를 바꿔도 타 프로젝트 키·계정·랭킹에 접근할 수 없음 |
| 실시간 과부하 | 큐 한도에 도달했을 때 정의한 거부/종료가 일어나고 메모리가 무제한 증가하지 않음 |
| 운영 추적 | 관리자 변경과 실패 원인을 사용자·작업 단위로 찾을 수 있고 secret은 로그에 남지 않음 |

각 요구가 구현될 때 가장 작은 실행 가능한 검사부터 남긴다. 여러 기능을 한꺼번에 복제하는 것보다 이 흐름을 실제 게임 클라이언트에서 끝까지 통과시키는 것이 첫 목표다.

[after]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/api.go#L807
[local]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/main.go#L180
[multi]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/core_multi.go#L27
[license]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/LICENSE
[header]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/console/acl/acl.go#L1`,filtered:!1,sourceHash:"e649e10611b86740ebb99f56cb33663c480275ceb5a2dd3993d8470344ec2c15"},{id:"study-nakama-06-go-language-tradeoffs-md",title:"Go 선택의 이유, 다른 언어와의 비교, Nakama의 실제 대응",path:"study/nakama/06_GO_LANGUAGE_TRADEOFFS.md",category:"이전 조사",status:"역사적 조사·제안",body:`# Go 선택의 이유, 다른 언어와의 비교, Nakama의 실제 대응

분석 기준은 기존 문서와 같은 \`e920249a3465bea4b8ea2968020c488201b61a8e\`다. 언어 특성은 2026-09-25에 연결된 Chrome으로 확인한 공식 문서를 사용했다. **언어의 특성**, **Nakama에서 확인한 구현**, **자체 플랫폼을 위한 판단**을 구분한다. 언어별 성능 비교 실험은 수행하지 않았다.

## Go를 제안한 이유

앞서 Go + PostgreSQL은 후보로 제안했다. 자체 플랫폼의 언어가 확정된 상태는 아니다. 또한 Nakama 개발팀이 처음 Go를 선택한 의사결정 기록을 확인한 것은 아니므로, 아래를 창업자나 개발팀의 역사적 발언으로 해석하지 않는다. 현재 코드의 설계와 Go의 특성이 잘 맞는 이유를 분석한 것이다.

Nakama 같은 서버는 연결·DB 응답을 기다리는 작업과, 여러 경기의 상태를 바꾸는 계산을 함께 수행한다. Go는 goroutine으로 이 작업들을 독립된 흐름으로 표현하고, channel·mutex로 공유 상태의 접근을 조절한다. 여러 goroutine은 런타임이 OS thread에 배치하며, 각 연결마다 OS thread 하나를 고정 배정할 필요는 없다. 이것이 네트워크 서버에서의 주요 장점이다. [Go goroutine 설명][go-faq]

내가 Go를 후보로 둔 이유는 다음 네 가지다.

1. **연결·매치 단위의 작업을 코드로 표현하기 쉽다.** I/O 대기를 포함한 순차 함수 형태를 유지하면서 독립 작업을 병행할 수 있다.
2. **네트워크 중심 서버를 하나의 프로그램으로 구성하기 좋다.** HTTP, context, SQL 연결 풀 등의 표준 도구와 필요한 외부 라이브러리를 조합할 수 있다.
3. **메모리 관리 부담과 제어 수준 사이의 절충이 있다.** 수명 관리는 GC에 맡기되, 자료구조·버퍼·큐 용량은 명시적으로 선택한다.
4. **이번 분석을 구현으로 옮길 때 개념 대응이 직접적이다.** Nakama의 queue, registry, transaction 경계를 다른 언어 모델로 다시 번역하는 부담이 적다. 이것은 이번 작업에 한정된 이점이다.

Go는 native code로 미리 컴파일되지만 GC·scheduler를 포함한 runtime도 가진다. 따라서 “Go에는 runtime이 없다”는 설명은 틀리다. [Go runtime 설명][go-runtime]

## 다른 언어와 비교

아래의 적합성은 구현 모델과 팀의 선택 부담에 대한 판단이다. 같은 기능·하드웨어로 측정한 처리량 순위가 아니다. 언어와 웹 프레임워크의 효과도 구분해야 한다.

| 후보 | 강점 | Go와 비교할 때의 부담·장점 | 우선 검토할 상황 |
|---|---|---|---|
| **Go** | goroutine/channel, native build, 비교적 작은 언어 핵심 | GC 비용과 공유 메모리 race는 직접 관리; 기본 언어가 관리 UI·도메인 framework를 제공하는 것은 아님 | 연결·매치 실행기를 직접 만들고 Go 학습 비용을 감수할 수 있음 |
| **Java / JVM** | virtual thread로 많은 I/O 대기를 순차 코드로 표현; 기존 JVM 지식·도구 활용 | GC와 JVM 운영 특성을 이해해야 함. 높은 동시성은 Go만의 장점이 아님 | 팀이 Java에 익숙하고 기존 업무·인증·DB 체계를 재사용 |
| **C# / .NET** | \`async/await\`와 Task로 비동기 서버 구성; C# 클라이언트와 순수 규칙·데이터 계약 공유 가능 | 비동기 호출이 CPU 계산을 자동 병렬화하지 않음. 동기 blocking·공유 상태·GC 관리 필요 | Unity/C# 경험이 강하거나 서버와 공유할 순수 도메인 코드가 있음 |
| **Python** | 팀이 Python에 익숙하면 도메인 API와 운영 자동화 구현이 빠를 수 있음 | 기본 GIL build의 CPU 실행 특성, 프로세스 분리 또는 free-threaded build의 확장 모듈 호환성 확인 필요 | 기존 Python 코드·운영 도구를 활용하고 무거운 실시간 계산 비중이 낮음 |
| **Rust** | ownership으로 메모리 수명을 컴파일 시 검사; tracing GC가 필요 없는 기본 모델 | 소유권·공유 상태·비동기 실행 모델의 학습 부담을 비용에 포함. GC가 없다고 지연이 자동 보장되지는 않음 | 메모리/지연 제어 요구가 명확하고 팀에 Rust 역량이 있음 |

기술 근거: [Node event loop][node], [Java virtual threads][java], [C# I/O·CPU 비동기 구분][csharp], [Python free threading][python], [Rust ownership][rust]. “우리 팀에서 더 빠르게 개발할 수 있다”는 결론은 이 문서만으로 확정할 수 없다.

특히 오래된 비교를 피해야 한다. Java를 “연결마다 무거운 OS thread가 필요하다”로 일반화할 수 없고, Python을 “어떤 구성에서도 멀티코어 병렬 실행이 불가능하다”로 설명할 수도 없다. Node.js 역시 서버 전체에 thread가 하나뿐이라는 뜻이 아니다. 중요한 차이는 **내가 작성한 callback/계산이 어디에서 실행되고, 오래 걸릴 때 누구를 기다리게 하는가**다.

## Go의 장단점을 Nakama는 어떻게 다뤘는가

### 1. 많은 연결: 읽기와 쓰기 실행 흐름을 분리

\`sessionWS.Consume()\`는 \`go s.processOutgoing()\`을 시작한 뒤 자신은 WebSocket 읽기 → 역직렬화 → \`Pipeline.ProcessRequest\`를 반복한다. 한 사용자의 전송 대기와 수신 처리를 분리하는 구조다. 한 연결의 요청 처리 자체는 순차적이므로 Go를 쓴다고 같은 소켓의 모든 요청을 병렬로 실행하는 것은 아니다. [수신·송신 코드][session]

코드 흐름을 줄이면 다음과 같다. 실행용 코드가 아닌 의사 코드다.

\`\`\`text
session Consume:
    start outgoing goroutine
    repeat: read frame -> decode -> process request
outgoing goroutine:
    select: pending message / ping / cancellation
\`\`\`

**남는 한계:** goroutine은 공짜가 아니다. 연결 객체·스택·버퍼·큐가 메모리를 차지하며, 공유 CPU와 DB pool의 용량도 유한하다. “goroutine 수 = 지원 CCU”로 환산할 수 없다.

### 2. 게임 상태 race: 같은 매치는 직렬, 다른 매치는 병행

\`NewMatchHandler\`는 매치별 goroutine 하나에서 ticker, 일반 callback, 입장 시도, signal을 \`select\`하고 선택한 함수를 동기 실행한다. \`loop\`는 현재 \`mh.state\`를 \`MatchLoop\`에 전달한 뒤 반환 상태를 저장한다. [매치 실행기][match]

\`\`\`mermaid
flowchart TD
    InputA[Inputs for match A] --> QueueA[Match A queues]
    QueueA --> OwnerA[Match A execution goroutine]
    OwnerA --> StateA[Match A state]
    InputB[Inputs for match B] --> QueueB[Match B queues]
    QueueB --> OwnerB[Match B execution goroutine]
    OwnerB --> StateB[Match B state]
\`\`\`

그림은 상태 소유권을 보여준다. 매치 A 내부 callback은 겹치지 않고, A와 B는 독립 실행 흐름으로 진행할 수 있다. CPU가 충분하면 런타임이 서로 다른 thread에 배치할 수 있다. 모든 match의 실행 시점을 동기화하거나 thread를 독점 배정하는 그림은 아니다.

\`\`\`text
match execution goroutine:
    select ticker / call / joinAttempt / signal
    invoke the selected operation
    store returned state
\`\`\`

**남는 한계:** ticker를 읽는 주체와 callback 실행 주체가 같다. 느린 callback은 그 매치의 다음 입장·퇴장·tick을 지연시킨다. Go adapter는 \`MatchLoop\`를 직접 호출하며 \`Cancel\`은 context 취소 신호를 전달할 뿐 임의 게임 코드를 강제로 종료하지 않는다. 따라서 설정 tick rate가 hard realtime deadline 보장은 아니다. 게임 코드가 별도 goroutine에서 같은 state를 바꾸면 이 직렬화 규칙 밖으로 나간다. [callback·취소][match-go]

### 3. 과부하: 큐에 상한과 실패 정책을 둠

goroutine을 많이 만들 수 있어도 처리보다 입력이 빠르면 큐가 쌓인다. Nakama는 buffered channel과 \`select/default\`로 포화 시 동작을 정한다.

| 큐 | 포화 시 구현 | 얻는 것과 잃는 것 |
|---|---|---|
| session 송신 큐 | \`ErrSessionQueueFull\`, 연결 종료 | 무한 대기를 줄임; 해당 메시지 전달은 보장하지 않음 |
| match 입력 큐 | 입력 drop와 경고 | 매치는 유지; 모든 입력 처리 보장은 없음 |
| match 일반 호출 큐 | 매치 종료와 참가 연결 종료 | 더 이상 정상 처리하지 못하는 매치를 중단 |
| script VM pool | 최대 수까지 생성 후 반납 또는 취소 대기 | VM 무제한 생성 방지; 대기 지연은 발생 |

근거: [SendBytes][send], [match queue 정책][queues], [JS VM pool][jspool]. 큐 용량은 항목 개수이지 전체 프로세스의 바이트 단위 메모리 상한이 아니다. 이 정책들은 완성된 과부하 해결책이 아니라 어떤 요청을 버리고 어떤 연결을 끊을지에 대한 명시적 선택이다.

### 4. GC·할당 비용: 중복 작업을 줄이고 측정 도구를 제공

Go의 GC는 메모리 관리 코드를 줄여주지만 CPU·메모리·지연 비용을 가진다. GC 실행 빈도와 heap 여유 공간 사이에도 절충이 있다. [Go GC guide][gc]

Nakama에서 확인한 구체적인 대응은 다음과 같다.

- \`LocalMessageRouter.SendToPresenceIDs\`는 하나의 broadcast 호출에서 JSON과 Protobuf를 형식별로 필요할 때 한 번 직렬화한다. 같은 형식의 수신자는 결과 payload를 재사용한다. 수신자마다 같은 내용을 다시 marshal하지 않는다. [router][router]
- HTTP \`compressHandler\`는 gzip/flate writer를 \`sync.Pool\`로 재사용하고 반납 전에 참조를 정리한다. 이것은 HTTP 압축 경로이며 WebSocket 전송 전체가 zero-copy라는 뜻이 아니다. [압축 pool][compression]
- \`MatchPresenceList\`는 제거된 항목의 마지막 포인터를 \`nil\`로 지우고, 읽기용 snapshot을 새로 만든다. 이전 backing array가 지운 항목을 계속 붙잡는 일을 줄인다. [presence][presence]
- 운영 콘솔에는 인증된 \`pprof\` 경로가 있어 CPU·heap·goroutine 진단에 사용할 수 있다. [프로파일링][pprof]

**남는 한계:** match 입력 slice와 presence snapshot 등에서 할당은 계속 생긴다. 조사한 자체 코드·설정에서 \`GOGC\`, \`GOMEMLIMIT\`, \`SetGCPercent\`, \`SetMemoryLimit\`를 지정하는 경로는 확인하지 못했다. “Nakama가 GC 문제를 제거했다”거나 “GC tuning으로 특정 지연을 보장한다”는 주장은 하지 않는다.

### 5. 공유 메모리: channel만 고집하지 않고 lock·atomic도 사용

매치 소유권으로 모든 공유 객체의 race가 사라지지는 않는다. \`MatchPresenceList.Join/Leave\`는 mutex로 변경을 보호하고, 읽기용 slice를 \`atomic.Value\`에 게시한다. 읽는 쪽은 snapshot을 atomic load한다. session의 종료·쓰기 상태에도 lock이 있다. [presence 구조와 갱신][presence], [session 상태][session]

이 설계는 읽기 시 lock 대기를 줄이는 대신 변경할 때 복사·할당 비용을 지불한다. Go compiler가 모든 data race를 막아주는 것은 아니다. 저장소 테스트 구성은 \`go test -race\`를 사용하지만, 테스트 경로 밖의 모든 경쟁이나 plugin 문제까지 증명하는 도구는 아니다. [테스트 설정][tests]

### 6. 게임 개발 생산성: 코어와 게임 코드의 언어 선택을 분리

코어를 Go로 작성했다고 게임 개발자가 항상 Go로 규칙을 작성할 필요는 없다. Nakama는 Go plugin, Lua, JavaScript provider를 로딩하고 RPC와 hook을 공통 함수 계약으로 모은다. 매치도 \`RuntimeMatchCore\` 인터페이스를 통해 호출한다. [provider 조립][runtime], [매치 계약][interface]

JavaScript 경로는 Node.js 서버가 아니라 내장 Goja VM이다. 그러므로 Node의 event loop·내장 모듈·npm 패키지 호환성을 그대로 가정할 수 없다. Lua/JS의 일반 요청용 VM은 pool로 관리한다. 이 pool을 권위형 매치의 전용 실행 상태와 혼동해서도 안 된다. [JS 구현][js], [VM pool][jspool]

**장점:** 연결·데이터 계층은 Go에 유지하면서 게임 규칙 작성 언어를 선택할 수 있다. **비용:** 세 언어의 값 변환, callback 계약, pool, 오류 처리를 유지해야 한다. 동적 Go plugin은 \`plugin.Open\`으로 로드하므로 서버와 toolchain·공통 의존성의 호환성도 관리해야 한다. 공식 plugin 설명도 이 제약을 명시한다. [plugin 로딩][pluginload], [Go plugin 문서][plugin]

자체 MVP에서는 한 언어의 함수 등록만으로 시작하는 편이 적절하다. 외부 사용자의 임의 코드를 실행하는 격리 플랫폼이 필요하다면, Nakama의 신뢰된 서버 코드용 확장 구조와 별도의 문제로 다룬다.

### 7. 배포: 실행 파일에 코어와 UI를 묶되 빌드 조건은 관리

\`console/ui.go\`의 \`go:embed\`는 관리 UI 정적 파일을 실행 파일에 포함한다. API·runtime·console을 \`main\`에서 조립하므로 여러 언어의 독립 서비스를 먼저 배포하지 않아도 된다. [UI embed][embed], [main][main]

그러나 Nakama의 실제 Docker build는 \`CGO_ENABLED=1\`, C compiler, Go 1.27.1을 사용하고 최종 이미지도 Debian 기반이다. “Go니까 어느 OS에서 만든 바이너리 하나를 어디로든 복사하면 끝”이라는 설명은 이 프로젝트에 맞지 않는다. 서버와 plugin을 맞춰 빌드할 책임이 남는다. [Dockerfile][docker]

### 8. 데이터 정합성: Go가 제공하지 않는 보장은 DB에서 해결

재화 중복·부분 저장·동시 갱신은 goroutine이나 static type만으로 해결되지 않는다. Nakama의 \`MultiUpdate\`는 계정·storage·wallet 변경을 하나의 \`ExecuteInTxPgx\` 호출에 묶는다. Storage는 SQL version 조건, wallet은 행 잠금을 사용한다. 이 패턴은 다른 언어에서도 구현할 수 있다. [MultiUpdate][multi], [저장·경제 분석](원본 프로젝트 경로)

Go 선택의 장점과 데이터 모델·SQL 설계의 장점을 분리해야 한다. DB 접근이 대부분인 서비스에서는 먼저 쿼리·인덱스·round trip·pool 대기·잠금 경합을 측정해야 하며, 언어를 바꾸면 해결된다고 가정하지 않는다.

## 자체 플랫폼에 적용할 판단

- **인증·저장·랭킹 위주의 첫 제품:** 익숙한 TS·Java·C#·Python을 우선 후보로 둬도 된다. Go를 새로 배우는 비용을 상쇄할 요구가 있는지 확인한다.
- **많은 연결과 여러 독립 매치를 직접 처리하는 서버:** Go를 우선 검토할 이유가 분명하다. queue와 state ownership을 분석 코드에서 직접 배울 수 있다.
- **Unity/C# 개발 비중이 큼:** C#/.NET을 함께 비교한다. 공유 대상으로는 engine에 의존하지 않는 순수 규칙·데이터 계약을 잡는다.
- **엄격한 메모리·지연 제어 요구:** Rust 같은 선택지를 별도 평가한다. 먼저 대표 게임 workload의 tail latency와 할당량을 측정해야 한다.

어떤 언어든 첫 검증은 같은 기능으로 비교한다. 로그인·저장 API에는 동시 요청 수, p95/p99, DB pool 대기, RSS를 보고, 실시간에는 매치 수·입력량·tick 지연·큐 drop·재접속 결과를 본다. 현재 분석에는 이 측정 결과가 없으므로 Go의 비용 절감률이나 지원 CCU를 수치로 제시하지 않는다.

## 검증 범위

Nakama 소스 경로와 행 번호, 기존 분석과의 일관성, 비교에 사용한 공식 문서를 확인했다. 문서의 Mermaid는 정적 구조만 검사했다. 소스·서버 설정은 변경하지 않았고 빌드·부하 테스트는 새로 실행하지 않았다.

[go-faq]: https://go.dev/doc/faq#goroutines
[go-runtime]: https://go.dev/doc/faq#runtime
[gc]: https://go.dev/doc/gc-guide
[node]: https://nodejs.org/learn/asynchronous-work/dont-block-the-event-loop
[java]: https://openjdk.org/jeps/444
[csharp]: https://learn.microsoft.com/en-us/dotnet/csharp/asynchronous-programming/async-scenarios
[python]: https://docs.python.org/3/howto/free-threading-python.html
[rust]: https://doc.rust-lang.org/book/ch04-01-what-is-ownership.html
[plugin]: https://pkg.go.dev/plugin
[session]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/session_ws.go#L187-L369
[send]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/session_ws.go#L427-L440
[match]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/match_handler.go#L175-L202
[match-go]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/runtime_go_match_core.go#L176-L223
[queues]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/match_handler.go#L250-L279
[router]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/message_router.go#L54-L99
[compression]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/api.go#L547-L600
[presence]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/match_presence.go#L110-L240
[pprof]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/console.go#L238-L250
[tests]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/docker-compose-tests.yml#L42-L54
[runtime]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/runtime.go#L745-L827
[interface]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/runtime.go#L336-L350
[js]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/runtime_javascript.go#L40-L64
[jspool]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/runtime_javascript.go#L718-L762
[pluginload]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/runtime_go.go#L3950-L3982
[embed]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/console/ui.go#L15-L27
[main]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/main.go#L180-L229
[docker]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/build/Dockerfile#L18-L61
[multi]: https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/core_multi.go#L27-L77`,filtered:!0,sourceHash:"bb585e77e1ba5a3854b20177d194cb4b7f2f8498f17386f98a6114bdce79a142"},{id:"study-nakama-readme-md",title:"Nakama 분석: 자체 게임 백엔드 플랫폼을 위한 참고 자료",path:"study/nakama/README.md",category:"이전 조사",status:"역사적 조사·제안",body:`# Nakama 분석: 자체 게임 백엔드 플랫폼을 위한 참고 자료

**핵심 결론:** Nakama에서 먼저 배울 것은 인증·저장·서버 규칙·실시간 상태·운영 기능의 책임 경계다. 자체 플랫폼은 단일 애플리케이션과 PostgreSQL을 후보로 삼아, 첫 게임의 로그인 → 저장 → 서버 명령 흐름부터 구현하는 편이 합리적이다. 실시간 기능과 다중 게임 격리는 요구가 확인될 때 각각의 계약을 정해야 한다.

## 분석 기준

| 항목 | 확인 결과 |
|---|---|
| 원본 | [heroiclabs/nakama](https://github.com/heroiclabs/nakama/tree/master) |
| 로컬 클론 | \`원본 프로젝트 경로\` |
| 방식 | \`git clone --depth 1 --branch master\` — 전체 파일을 포함하고 과거 이력은 생략 |
| 고정 커밋 | [\`e920249a3465bea4b8ea2968020c488201b61a8e\`](https://github.com/heroiclabs/nakama/commit/e920249a3465bea4b8ea2968020c488201b61a8e) |
| 커밋 시각 | \`2026-09-22T16:16:45+01:00\` |
| 조사일 | 2026-09-25, Asia/Seoul |
| 릴리스와 관계 | changelog에 3.41.0과 그 이후 Unreleased 항목이 있는 master snapshot |
| 방법 | 로컬 소스·호출자·SQL·설정 분석, 연결된 Chrome으로 공식 GitHub 페이지 확인 |
| 그래프 | 기존 \`.understand-anything/knowledge-graph.json\`이 없어 \`rg\` 기반 직접 소스 추적으로 진행 |

일반적인 장점 소개가 아니라, 이 커밋에서 확인한 동작과 자체 구현에 대한 제안을 구분했다. 클라이언트 SDK 전체·상용 서버 내부·운영 서비스의 성능은 분석 범위에 포함하지 않았다.

## 읽는 순서

| 문서 | 설명 |
|---|---|
| [01. 전체 아키텍처](원본 프로젝트 경로) | 부팅과 종료, API 흐름, 호출 관계, 객체 의존성, 소스 탐색 지도 |
| [02. API·인증·데이터](원본 프로젝트 경로) | 토큰·세션 폐기, 저장 권한·OCC, transaction, 지갑·랭킹·구매, 게임별 격리 |
| [03. 실시간·매치](원본 프로젝트 경로) | WebSocket, presence, 큐, relayed/authoritative, matchmaking, 장애·재접속 |
| [04. 런타임·운영](원본 프로젝트 경로) | Go/Lua/JS 확장, callback 등록, 관리 콘솔, metrics, migration, 빌드 |
| [05. 자체 플랫폼 구현 방향](원본 프로젝트 경로) | 접근 비교, 최소 구조, 기능 순서, 후보 데이터 모델·API, 완료 검증 기준 |
| [06. Go 선택과 언어 비교](원본 프로젝트 경로) | Go·TS·Java·C#·Python·Rust 비교, Nakama의 동시성·메모리·확장·배포 대응 |

빠르게 방향을 잡으려면 이 문서 → 05 → 01 순서로 읽는다. 구현을 준비할 때 02를 읽고, 실시간 게임이면 03을 추가로 읽는다.

언어를 선택하는 단계라면 06을 먼저 읽는다. Go는 후보이며, 초기 개발팀의 역사적 언어 선택 동기와 현재 코드에서 해석한 적합성을 구분했다.

## 중요한 발견

| 확인한 사실 | 자체 플랫폼에 주는 의미 |
|---|---|
| \`main\`이 \`LocalSessionRegistry\`, \`LocalTracker\`, \`LocalMatchRegistry\` 등을 조립 | DB 공유만으로 접속 상태·매치가 노드 사이에 공유되지는 않음 |
| 일반 HTTP API는 gRPC-Gateway를 거치지만 RPC와 WebSocket은 별도 진입점 | 새 endpoint가 어떤 인증 경계를 통과하는지 확인 필요 |
| Storage는 JSON 객체에 소유권·read/write 권한·선택적 version 검사를 결합 | 범용 저장 API와 서버 전용 경제 상태를 구분 |
| API after hook은 완료된 core 작업을 rollback하지 않음 | 지급처럼 함께 성공해야 하는 작업은 명시적 transaction으로 묶음 |
| 구매 기록 중복 방지와 wallet 지급은 별개 | 보상 요청의 멱등성과 계정 귀속을 따로 설계 |
| 세션 blacklist와 실시간 상태는 local 메모리 | 재시작·노드 간 상태 전파·재접속 의미를 정해야 함 |
| 주요 스키마에 공통 project/tenant 격리 키가 없음 | 다중 게임 플랫폼에는 별도 격리 방식 필요 |
| README의 rUDP 언급과 달리 조사한 실행 경로는 WebSocket 등록 | 현재 코드 근거를 우선해 프로토콜 범위를 정함 |

근거는 [컴포넌트 조립](https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/main.go#L180), [진입점 등록](https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/api.go#L232), [storage 구현](https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/core_storage.go#L583), [after hook](https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/api.go#L807)에 있으며, 나머지 세부 근거는 각 문서의 고정 커밋 링크로 연결했다.

## 소스 재사용 시 확인할 관찰 사항

루트 [LICENSE](https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/LICENSE)는 Apache License 2.0이다. 한편 아래 파일의 첫 부분에는 proprietary 정보 및 사전 서면 허가에 관한 별도 NOTICE가 있다.

- [console/acl/acl.go](https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/console/acl/acl.go#L1) 및 같은 디렉터리의 \`acl_test.go\`
- [server/encryption.go](https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/server/encryption.go#L1)
- [migrate/migrate.go](https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/migrate/migrate.go#L1)
- [iap/iap.go](https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/iap/iap.go#L1)

이는 파일에 실제로 기재된 문구의 관찰이다. 어떤 조건이 법적으로 우선하는지, 개별 파일을 재사용할 수 있는지는 이번 분석에서 결론내리지 않았다. 자체 설계 자료와 파일 복사 후보를 구분할 때 확인할 근거로 남긴다. vendor와 internal 라이브러리도 각자의 고지가 있으므로 저장소 전체를 하나의 동일한 조건으로 단정하지 않는다.

## 검증 기록과 한계

| 검사 | 결과 |
|---|---|
| clone origin·branch·commit·shallow 여부 | 공식 origin, master, 위 커밋, shallow clone 확인 |
| 분석 중 원본 변경 여부 | 최종 \`git status --porcelain\` 출력 없음 — 원본 변경 없음 |
| 최초 분석 문서 근거 | 고유 소스 링크 171개의 파일·행 범위·고정 커밋 검사 통과 |
| 최초 분석 문서 구조 | 문서 7개, 로컬 링크 7개, Mermaid 블록 12개의 구조·participant 정적 검사 통과 |
| Mermaid 화면 렌더링 | 실행하지 않음; 정적 구조 검사만 수행 |
| 로컬 Go | \`go version go1.26.5 darwin/arm64\` |
| 빌드 | 아래 명령이 Go 요구 버전 불일치로 컴파일 전에 실패 |
| 서버·DB 부팅, API 시연, 통합·부하 테스트 | 실행하지 않음 |

실제 시도한 빌드 명령은 다음과 같다. 도구 자동 다운로드를 막고 clone 밖으로 출력하도록 지정했다.

\`\`\`sh
cd 원본 프로젝트 경로
GOTOOLCHAIN=local GOCACHE=/private/tmp/nakama-analysis-gocache \\
  go build -trimpath -mod=vendor -o /private/tmp/nakama-analysis-bin .
\`\`\`

\`\`\`text
go: go.mod requires go >= 1.27.1 (running go 1.26.5; GOTOOLCHAIN=local)
\`\`\`

Go 요구 버전은 [go.mod](https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/go.mod#L3)에서 확인했다. 이 결과는 소스의 컴파일 오류를 뜻하지 않으며, 빌드 통과를 증명하지도 않는다.

저장소의 \`docker-compose-postgres.yml\`은 Nakama **3.37.0 이미지**를 가져온다. 그대로 실행하면 이번 master snapshot을 빌드·실행한 검증이 아니다. 해당 커밋을 실행 검증할 때는 요구 Go toolchain과 DB를 준비하고 source build 기반 구성을 사용해야 한다. [예제 compose](https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/docker-compose-postgres.yml), [source test 구성](https://github.com/heroiclabs/nakama/blob/e920249a3465bea4b8ea2968020c488201b61a8e/docker-compose-tests.yml)

다음 단계는 첫 게임과 필수 기능을 정해 05의 검토안을 설계로 구체화하는 것이다. 현재 문서에는 실제 사용자 수용량이나 운영 가용성에 대한 측정 결과가 없다.`,filtered:!1,sourceHash:"8bf19fba0478fef711eaccdaacef02b2cc6b6ed33952f5b43f553238c18ca924"},{id:"study-thebackend-00-console-source-analysis-md",title:"뒤끝 콘솔의 공개 소스와 조사 근거",path:"study/thebackend/00_CONSOLE_SOURCE_ANALYSIS.md",category:"이전 조사",status:"역사적 조사·제안",body:"# 뒤끝 콘솔의 공개 소스와 조사 근거\n\n공개 콘솔 JavaScript에서 프로젝트 메뉴 43개와 화면 경로 선언 248개를 확인했다. 이 문서는 초기 정적 조사 범위를 기록한다.\n후속 로그인 화면과 생성·수정·삭제 관찰은 [실제 콘솔 조사](05_LIVE_CONSOLE_ANALYSIS.md)에 정리했다.\n선언 수에는 하위 화면과 구버전 경로가 포함된다. 이 수치를 독립 기능 수나 검증한 API 수로 사용하지 않는다.\n\n확인일은 2026-11-03이다. 로그인 토큰 없이 공식 콘솔이 배포하는 HTML과 JavaScript만 내려받았다.\n분석한 파일은 실행하지 않았다. 이 정적 조사 단계에서는 API 호출, 설정 변경, 유저 조회, 지급, 발송, 결제를 수행하지 않았다.\n\n## 1. 확보한 근거\n\n| 근거 | 원본 또는 위치 | 확인한 내용 | 한계 |\n| --- | --- | --- | --- |\n| 콘솔 HTML | [공식 콘솔](https://console.thebackend.io/) | 진입 JavaScript와 preload, root 요소 | 로그인 화면과 프로젝트 데이터는 포함하지 않음 |\n| 진입 JavaScript | [공개 배포 파일](https://console.thebackend.io/assets/index-Cp2VxB6O.js) | 메뉴, 라우트, API 호출부, 입력 키 | 압축된 브라우저 코드이며 서버 소스가 아님 |\n| 해시와 수집 정보 | [manifest.json](evidence/public-console/manifest.json) | 파일별 SHA-256과 추출 수 | 공개 배포 파일은 이후 교체될 수 있음 |\n| 메뉴 선언 | [menus.json](evidence/public-console/menus.json) | 메뉴 키와 소스 위치 43개 | 권한과 활성화에 따른 실제 노출은 미확인 |\n| 라우트 선언 | [routes.json](evidence/public-console/routes.json) | 중첩 경로 선언 248개 | 프로젝트별 도달 가능 여부는 미확인 |\n| 경로 문자열 후보 | [api-path-candidates.json](evidence/public-console/api-path-candidates.json) | 경로 후보 481개 | 화면 경로와 query key도 포함하므로 API 명세가 아님 |\n| 공식 문서 원본 | [고정 커밋](https://github.com/afi-backnd/backnd_developer_docs/tree/fe41d27e1515d0c492ddc477e075342804841168) | SDK와 콘솔 가이드의 원본 | 웹 문서와 차이가 있어 현행 웹 페이지를 우선함 |\n\n원본 JavaScript는 `evidence/public-console/index-Cp2VxB6O.js`에 보존했다. 크기는 5,873,951바이트다.\n수집한 자산을 자체 플랫폼 소스에 편입하거나 배포하지 않는다. 분석 근거와 자체 구현 코드를 구분한다.\n\nJSON의 `characterOffset`은 0부터 시작하는 유니코드 문자 위치다. 바이트 위치가 아니다.\n전체 경로를 조립하지 않은 중첩 라우트도 포함된다. 같은 이름이 다른 부모 화면 아래에 나타날 수 있다.\n\n## 2. 프로젝트 메뉴 대응표\n\n다음 이름은 기능을 설명하기 위한 해석이다. 로그인한 콘솔의 실제 표시 문구를 승인 기준으로 기록한 표가 아니다.\n`현행 구분`은 메뉴 존재와 제품 지원 상태를 혼동하지 않기 위한 항목이다.\n\n| 메뉴 키 | 기능 해석 | 재구성할 책임 | 현행 구분 |\n| --- | --- | --- | --- |\n| `settingProject` | 프로젝트 | 이름, 상태, 복제 범위 | 공식 가이드와 대조 |\n| `settingAuth` | 인증정보 | 클라이언트 키, 공급자 연동 | 비밀값과 배포값 구분 |\n| `settingStore` | 스토어 정보 | 영수증과 환불 연동 설정 | 공급자별 차이 |\n| `settingPush` | 푸시 설정 | 발송 공급자 인증정보 | Android와 iOS 구분 |\n| `settingSocial` | 소셜 설정 | 친구, 메시지, 길드 정책 | SDK 계약과 대조 |\n| `settingPlan` | 요금제 | 기능 활성화와 한도 | 내부 과금 복제 여부는 별도 결정 |\n| `settingAlarm` | 알림 설정 | 비용과 사용량 알림 | 게임 유저 알림과 구분 |\n| `baseGamer` | 유저 | 계정, 캐릭터, 상세 조회 | 멀티 캐릭터 경로 별도 존재 |\n| `baseGameInfo` | 게임정보 | 테이블과 유저 데이터 | 신규 데이터베이스와 구분 |\n| `baseCloudSave` | 클라우드 세이브 | 파일 저장과 복구 | 일반 테이블과 구분 |\n| `baseChart` | 차트 | 데이터 버전과 게시 | 데이터베이스와 구분 |\n| `baseProbability` | 확률 | 확률표와 추첨 | 게임 보상 지급과 구분 |\n| `onServerFunction` | 뒤끝펑션 | 함수 배포와 로그 | 별도 실행 환경 |\n| `baseRandomSearch` | 랜덤 조회 | 게임 유저 후보 선택 | 실시간 매칭과 구분 |\n| `realtimeMatch` | 뒤끝매치 | 매칭 카드와 경기 기록 | 현행 문서 존재 |\n| `baseVersion` | 버전 | 클라이언트 업데이트 정책 | 응답 enum 문서 충돌 존재 |\n| `baseGamerAccess` | 접속 관리 | 허용과 차단, 제재 | 계정과 기기 범위 구분 |\n| `baseGuild` | 길드 | 길드, 직위, 신청, 재화 | SDK 세대 구분 |\n| `baseRank` | 랭킹 | 개인과 길드, 시즌과 보상 | 구형 경로도 함께 존재 |\n| `baseUserGroup` | 유저 그룹 | 그룹 조건과 연결 기능 | 일반 길드와 구분 |\n| `basePost` | 우편 | 관리자·반복·유저·보상 우편 | 수령과 실제 지급 구분 |\n| `basePush` | 푸시 | 대상, 즉시·예약·반복 발송 | 실제 전달 보장은 별도 |\n| `baseNotice` | 공지 | 다국어 게시와 임시 공지 | 구버전 경로 존재 |\n| `baseEvent` | 이벤트 | 기간과 이벤트 콘텐츠 | 게임 규칙 엔진으로 해석하지 않음 |\n| `baseCoupon` | 쿠폰 | 발급, 사용, 웹 입력 | 구버전 경로 존재 |\n| `baseInquiry` | 문의 | 양식과 유저 문의 답변 | 함수와 웹뷰 차이 |\n| `baseSearchGamer` | 유저 정보 찾기 | 계정 복구용 이메일 양식 | 일반 유저 목록 검색과 구분 |\n| `basePolicy` | 약관 | 약관과 개인정보처리방침 | 동의 이력은 별도 계약 |\n| `baseGameCash` | 게임 캐시 | TBC와 상품, 사용 내역 | 5.18.7 이하의 구버전 호환 대상 |\n| `baseReceipt` | 영수증 | 구매 검증과 기록 | 검증과 지급 구분 |\n| `baseRefund` | 환불 | 환불 내역과 회수 운영 | 스토어의 환불 승인과 구분 |\n| `dashboard` | 대시보드 | 활성 유저와 리텐션 등 | 지표 정의와 집계 지연 확인 필요 |\n| `baseLog` | 로그 | 게임 로그, 퍼널, 스키마 | 구버전 경로 존재 |\n| `databaseTableEditor` | 데이터베이스 편집 | 테이블, 컬럼, 권한, 데이터 | 신규 데이터베이스 |\n| `databaseSetting` | 데이터베이스 설정 | 활성화와 이용 설정 | 실제 프로젝트 상태 미확인 |\n| `chatChannel` | 채팅 채널 | 공개·비공개·길드·귓속말 | 현행 채팅 |\n| `chatReport` | 채팅 신고 | 신고와 제재 | 게임 접속 제재와 구분 |\n| `chatSetting` | 채팅 설정 | 인증과 메시지 정책 | 구형 뒤끝챗과 구분 |\n| `worldWorldServer` | 월드 서버 | 서버 배치와 실행 상태 | 메뉴는 beta 표기를 가짐 |\n| `worldDataTable` | 월드 데이터 | 월드에서 쓰는 테이블 | 베이스 저장과 구분 |\n| `worldSetting` | 월드 설정 | 월드 실행과 연동 설정 | 실제 설정 미확인 |\n| `webshopInterlock` | 웹숍 연결 | 판매 연동과 상품 | 일반 게임 결제와 구분 |\n| `webshopHistory` | 웹숍 내역 | 주문과 지급 조회 | 실제 주문 미조회 |\n\n친구, 세션 갱신, 쪽지처럼 SDK에서 제공하는 동작이 모두 독립 메뉴를 갖는 것은 아니다.\n전체 기능 범위는 메뉴 목록과 [핵심 기능](01_CORE_FEATURES.md)을 함께 읽어야 한다.\n\n## 3. 화면에서 추적할 흐름\n\n| 화면 영역 | 확인한 경로 예 | 재구성에 필요한 상태 | 실제 화면 확인 |\n| --- | --- | --- | --- |\n| 프로젝트 | `project/:gameId`, `settingProject` | 조회, 점검, 복제 | 미완료 |\n| 유저 | `baseGamer/*`, `multi/account`, `multi/character` | 검색, 상세, 계정과 캐릭터 전환 | 미완료 |\n| 데이터 | `baseGameInfo/table`, `baseGameInfo/data` | 스키마, 권한, 목록, 수정 | 미완료 |\n| 랭킹 | `baseRank/ranking/:uuid`, `current`, `past` | 현재 시즌, 과거 시즌, 보상 | 미완료 |\n| 우편 | `basePost`, `repeat`, `user` | 작성, 예약, 수령 현황 | 미완료 |\n| 펑션 | `onServerFunction/:backendFunctionName/:logStreamName` | 함수, 로그 스트림, 로그 상세 | 미완료 |\n| 공지와 문의 | `notice-list/:inDate`, `inquiry-list/:inDate` | 작성, 상세, 수정, 답변 | 미완료 |\n| 신규 데이터베이스 | `databaseTableEditor/table/:name/edit` | 테이블, 컬럼, 행, 검증 | 미완료 |\n| 채팅 | `chatChannel/private`, `open`, `guild`, `whisper` | 채널 유형과 정책 | 미완료 |\n| 월드 | `worldWorldServer/:uuid`, `worldDataTable` | 서버 상세, 데이터 | 미완료 |\n\n이 경로는 소스 선언에서 읽었다. 해당 경로에서 실제 네트워크 응답이나 화면 전이를 검증하지 않았다.\n\n## 4. 관리 API 호출 구조\n\n공개 소스는 인증, 관리 API, 업로드의 주소를 분리한다. `consoleauth.thebackend.io`, `consoleapi.thebackend.io`, `uploadapi.thebackend.io`를 확인했다.\n미국 리전 주소도 선언되어 있다. 이는 클라이언트의 주소 선택 구조이며 서버 배포 구성을 입증하지 않는다.\n\n기존 호출 래퍼 `Oe`의 `get`, `post`, `put`, `patch`, `delete` 호출부 419개를 찾았다.\n새 호출 계층에는 `:gameId/project/...` 형태의 query key도 있다. 래퍼 호출부 수를 서버 endpoint 수로 계산하지 않는다.\n\n| 소스에서 읽은 계약 예 | 입력 키의 예 | 확인한 범위 | 미확인 |\n| --- | --- | --- | --- |\n| `GET /account/admin/v2` | 없음 | 관리자 목록 호출 선언 | 실제 응답과 권한 |\n| `GET /account/admin/role` | 없음 | 역할 목록 호출 선언 | 역할 응답 스키마 |\n| `GET /project/auth/permission/{id}` | `gameid` 헤더 | 권한 조회 호출 선언 | 권한 검사의 서버 위치 |\n| `GET /{gameId}/project/backend-function/v1` | 프로젝트 경로 | 함수 목록 호출 선언 | 활성화 상태와 오류 |\n| `GET /{gameId}/project/backend-function/v1/{name}/logs` | `limit`, `nextToken`, `logStreamName` | 로그 페이지 입력 | 실제 커서 형식과 보관 |\n| `GET /{gameId}/project/billing/receipt/v1.4` | 기간, 유저, 주문, 통화, 정렬 | 구매 목록 필터 | 필드별 허용값 |\n| `POST /{gameId}/project/blocking/v2/account` | `gamer_id`, `blockedDate`, `blockReason`, `deleteRank` | 계정 제재 입력 | 적용 시점과 원자성 |\n| `GET /{gameId}/project/chart/v3/folders` | 프로젝트 경로 | 차트 폴더 목록 선언 | 실제 정렬과 응답 |\n| `POST /{gameId}/project/coupon/v2.2` | 이름, 유효일, 유형, 코드, 중복, 아이템 | 쿠폰 생성 입력 선언 | 검증과 동시 사용 보장 |\n| `/{gameId}/project/database/v1/active` | query key의 프로젝트 | DB 활성화 조회 식별자 | HTTP method와 실제 응답 |\n| `/{gameId}/project/world/v1/server/list` | query key의 프로젝트 | 월드 서버 목록 식별자 | 배치 상태의 의미 |\n\n표의 `{gameId}` 등은 압축된 변수명을 읽기 쉽게 바꾼 표기다. 인증되지 않은 요청을 보내 확인하지 않았다.\n일반 공개 API 지원은 [운영 조사](02_OPERATIONS_INTEGRATIONS.md)의 공식 문서 범위와 구분한다.\n현재 공개 Platform API는 채팅 운영용으로 확인했다. 콘솔의 비공개 관리 API 전체를 공식 지원 API로 해석하지 않는다.\n\n## 5. 초기 브라우저 확인 상태와 후속 조사\n\nChrome 연결을 검색해 콘솔 탭의 존재를 확인했다. 전용 조사 탭도 생성했다.\n탭 연결에서 `Emulation.setFocusEmulationEnabled`가 시간 초과되어 지정 프로젝트의 페이지 상태와 스크린샷을 확보하지 못했다.\n네이티브 접근성 경로에서는 공개 홈페이지를 읽었지만, 프로젝트 화면 확인을 마치지 못했다.\n브라우저 접근 전체가 불가능하다는 결론은 내리지 않는다. 실제 프로젝트 조사만 미완료로 남긴다.\n\nPlaywright는 사용하지 않았다. 로그인 상태를 복사하거나 토큰을 추출하지도 않았다.\n후속 조사에서는 Chrome 연결이 복구되어 지정 프로젝트에 접근했다. 실제 화면·폼·제한된 생성 실험을 수행했다.\n[실제 콘솔 조사](05_LIVE_CONSOLE_ANALYSIS.md)와 [네트워크 관찰](08_NETWORK_OBSERVATIONS.md)이 최신 결과다.\n\n## 6. 재구성 가능성과 한계\n\n현재 근거로는 기능 분류, 운영 책임, 후보 데이터 모델, 게임 연동 계약의 초안을 작성할 수 있다.\n공개 JavaScript가 보여주는 메뉴와 요청 입력은 콘솔 재구성의 조사 목록으로 사용할 수 있다.\n\n다음 항목은 추가 관찰이 필요하다.\n\n- 지정 프로젝트의 활성 기능, 실제 테이블, 역할, 요금제, 사용 중인 SDK 버전.\n- 목록과 상세 응답, 오류 상태, 필터와 페이지 이동의 실제 결과.\n- 쓰기 동작의 검증, 동시성, 취소, 재시도, 중복 방지.\n- 서버 코드, 저장 엔진, 분산 구조, 복구 절차, 운영 성능.\n- 게임 클라이언트에서 실행한 SDK의 실제 응답과 이벤트 순서.\n\n외부에서 관측한 기능과 계약을 재구현하는 것은 가능하다. 이 조사로 원본 서버의 내부 구현까지 복원한 것은 아니다.\n\n## 7. REA 실행 결과\n\n[REA 공식 저장소](https://github.com/morluto/rea)를 직접 클론했다. 기준 커밋은 `eef8f44003e6bf781baf4f885f84d03b31ea6c3a`다.\n실행은 npm 배포 패키지 `rea-agents@6.8.0`을 임시 경로에 설치해 수행했다.\n기존에 설치된 Node.js `v24.22.1`을 사용했다. 전역 설정과 MCP 등록은 바꾸지 않았다.\n공식 패키지 URL과 integrity, 실행 명령, 입력 해시는 실행 기록에 보존했다.\n\n| 실행 | 입력 | 결과 | 근거 |\n| --- | --- | --- | --- |\n| 초기 실행 | 공개 HTML과 전체 진입 JavaScript | Swift의 기본 컴파일 캐시 권한 문제로 시작 단계 실패 | [전체 실행 기록](evidence/public-console/rea-run.json) |\n| 전체 번들 분석 | 같은 공개 자산, 공식 임시 캐시 설정 적용 | 외부 150초 제한에서 종료, exit 143 | [부분 결과](evidence/public-console/rea-result.json) |\n| 축소 분석 | 메뉴와 관리자 API의 선언 2개, 총 4,661바이트 | exit 0, 5.84초, 파싱 실패 0개 | [축소 실행 기록](evidence/public-console/rea-focused-run.json) |\n| 축소 분석 결과 | 추출 파일 2개 | AST 노드 1,087개 파싱, 의미 관계의 coverage는 unknown | [REA 결과](evidence/public-console/rea-focused-result.json) |\n\n전체 번들 분석은 완료하지 못했다. 부분 결과의 JavaScript 파싱 완료 수는 0개이므로 의미 분석이나 라우트 분석의 성공 근거로 사용하지 않는다.\n전체 번들 분석을 중단한 뒤 남은 프로세스가 없음을 확인했다. 같은 전체 입력을 그대로 재실행하지 않았다.\n\n축소 입력은 원본의 정확한 문자 범위를 추출했다. 앞에 `const`, 뒤에 세미콜론만 추가했다.\n[추출 위치와 해시](evidence/public-console/focused-source-provenance.json)를 원본에 대조했다.\n이 결과는 두 선언의 정적 구문을 분석했다는 근거다. 원본 애플리케이션 전체를 분석한 결과가 아니다.\n\n축소 분석의 Evidence ID는 `ev_23b651616813fea729fc67dea6521332ddbcb5c1a75e281e9b412cf7b1809cec`다.\nREA는 의미 그래프에서 unknown 106개를 남겼다. 라우트 후보는 0개지만 `application_routes`의 coverage는 unknown이다.\n두 추출물에 라우트 선언이 없으므로 이 결과를 콘솔에 라우트가 없다는 근거로 삼지 않는다.\n\n앞 절의 메뉴 43개와 경로 선언 248개는 전체 공개 파일을 별도로 추출하고 원문에 대조한 결과다.\nREA가 전체 메뉴와 API를 자동으로 복원했다고 표현하지 않는다. 실행 시간과 메모리 기록도 REA 분석기의 자원 사용량이다.\n이 수치는 뒤끝 서비스의 실행 성능을 측정한 값이 아니다.",filtered:!1,sourceHash:"2c840f23177e7bc2f40d5e76325302a646c6de154fc3c9d8f2258f95b678e0d9"},{id:"study-thebackend-01-core-features-md",title:"뒤끝 핵심 게임 백엔드 조사",path:"study/thebackend/01_CORE_FEATURES.md",category:"이전 조사",status:"역사적 조사·제안",body:"# 뒤끝 핵심 게임 백엔드 조사\n\n내부 플랫폼은 인증, 데이터, 콘텐츠, 보상, 소셜 기능의 공개 계약을 재구성할 수 있다. 뒤끝의 원본 서버 구현은 공개 문서만으로 확인할 수 없다.\n\n- 조사 기준일: 2026-11-03 KST.\n- 조사 범위: 공식 제품 사이트와 공식 SDK·콘솔 문서. 이 문서에서는 실제 콘솔을 조작하지 않았다.\n- 확인: 공식 문서가 명시한 동작. 실제 프로젝트에서 호출해 검증한 동작과는 구분한다.\n- 재구성 제안: 내부 플랫폼을 설계할 때 채택할 수 있는 별도 판단. 뒤끝의 내부 구현을 뜻하지 않는다.\n- 미확인: 문서가 밝히지 않은 보장, 문서 사이의 충돌, 실행하지 않은 검증.\n\n공식 개발자 문서는 `docs.backnd.com`에서 제공한다. 베이스 SDK 문서의 표시 버전은 `5.18.17`이다. 다운로드 페이지의 게시일은 `2026-09-10`이다. 데이터베이스 SDK 문서는 `1.0.0`을 표시한다. [베이스 시작하기](https://docs.backnd.com/sdk-docs/backend/base/start-up/), [데이터베이스 시작하기](https://docs.backnd.com/sdk-docs/database/intro/)\n\n## 1. 먼저 구분할 제품 세대\n\n| 구분 | 확인한 공개 계약 | 내부 재구성 시 판단 |\n| --- | --- | --- |\n| 게임정보 | `Backend.GameData` 기반의 유저 귀속 행. 스키마 사용 여부와 Public·Private을 정한다. | 기존 SDK와의 호환 범위로 다룬다. |\n| 유저 데이터 | `Backend.PlayerData`가 내 데이터, 타인 데이터, 사용량 조회를 명시적인 메서드로 제공한다. | 게임정보와 저장 정책이 겹치는 별도 호출 표면이다. 별개 저장소라고 단정하지 않는다. |\n| 데이터베이스 | `UserTable`, `FlexibleTable`, LINQ 쿼리, 사용자 인덱스, 트랜잭션을 제공한다. | 신규 내부 플랫폼의 데이터 계약을 정할 때 우선 비교한다. |\n| 차트 | 운영자가 올린 공용 참조 파일을 CDN에서 조회한다. | 변경 가능한 게임 상태와 분리한다. |\n| 클라우드 세이브 | JSON 문서를 덮어쓰는 저비용 저장 기능이다. | 거래 원장이나 중요 재화의 유일한 저장소로 삼지 않는다. |\n| 리더보드 | 최신 문서는 `Backend.Leaderboard`를 안내한다. `URank`는 그룹 처리와 응답 형식이 다르다. | 새 API의 기준을 `Leaderboard`로 고정한다. |\n| 우편 | 최신 문서는 `Backend.UPost`를 안내한다. `Social.Post`는 조회 방향과 첨부물 개수가 다르다. | 신·구 API의 결과를 섞지 않는다. |\n\n데이터베이스 소개는 게임정보와 차트를 유지한다고 설명한다. 신규 기능은 데이터베이스를 중심으로 제공할 예정이라고 명시한다. 게임정보에서 데이터베이스로의 자동 이전은 이 문서에서 확인하지 못했다. [제품 비교](https://docs.backnd.com/guide/console-guide/database/introduction/), [사용량 확인](https://docs.backnd.com/sdk-docs/backend/base/player-data/capacity/), [리더보드 차이](https://docs.backnd.com/sdk-docs/backend/base/leaderboard/difference-to-rank/), [우편 차이](https://docs.backnd.com/sdk-docs/backend/base/post/difference-to-old/)\n\n## 2. 기능 카탈로그\n\n아래 32개 항목은 조사 단위다. 뒤끝이 발표한 제품 기능 개수와 같다는 뜻은 아니다.\n\n| ID | 기능 | 확인한 SDK·운영 표면 | 재구성 제안 | 공식 근거 |\n| --- | --- | --- | --- | --- |\n| C01 | 프로젝트 연결 | `Client App Id`, `Signature Key`, `Backend.Initialize` | 프로젝트와 실행 환경을 인증 요청에 결합한다. | [시작하기](https://docs.backnd.com/sdk-docs/backend/base/start-up/) |\n| C02 | 커스텀 계정 | `CustomSignUp`, `CustomLogin` | 계정 생성과 로그인 결과를 구분한다. | [가입](https://docs.backnd.com/sdk-docs/backend/base/user/custom/signup/) |\n| C03 | 게스트 계정 | `GuestLogin`, 로컬 계정 정보 | 기기 자격 증명과 서버 계정의 수명을 분리한다. | [게스트](https://docs.backnd.com/sdk-docs/backend/base/user/guest/signup-and-login/) |\n| C04 | 소셜 인증·전환 | `AuthorizeFederation`, `ChangeCustomToFederation`, `ChangeToFederation` | 공급자별 외부 식별자를 내부 계정에 연결한다. | [인증](https://docs.backnd.com/sdk-docs/backend/base/user/federation/signup-and-login/), [전환](https://docs.backnd.com/sdk-docs/backend/base/user/federation/migrate-to-federation/) |\n| C05 | 세션 | 액세스 토큰, 갱신 토큰, 토큰 로그인·갱신·로그아웃 | 세션 교체와 취소 정책을 명시한다. | [토큰](https://docs.backnd.com/sdk-docs/backend/base/user/token/accesstoken/) |\n| C06 | 유저·닉네임 | `GetUserInfoV2`, `CreateNickname`, `UpdateNickname` | 불변 유저 ID와 변경 가능한 닉네임을 구분한다. | [유저](https://docs.backnd.com/sdk-docs/backend/base/user/get-my-information/get-from-server-v2/), [닉네임](https://docs.backnd.com/sdk-docs/backend/base/user/nickname/insert/) |\n| C07 | 접근 차단 | 유저·디바이스 차단, 기간·사유, 일괄 등록 | 차단 기록과 해제 이력을 보존한다. | [접근 차단](https://docs.backnd.com/guide/console-guide/backnd-base/access-user/blocking/) |\n| C08 | 회원 탈퇴 | `WithdrawAccount(graceHours)` | 로그인 차단과 실제 삭제 시점을 구분한다. | [탈퇴](https://docs.backnd.com/sdk-docs/backend/base/user/withdraw/) |\n| C09 | 멀티 캐릭터 | 계정·캐릭터 컨텍스트, `Elevate`, `SelectCharacter` | 계정과 플레이 주체를 별도 도메인으로 둔다. | [멀티 캐릭터](https://docs.backnd.com/sdk-docs/backend/base/multi-character/what-is-multi-character/) |\n| C10 | 게임정보 스키마 | 스키마 사용·미사용, 컬럼 타입, 테이블 설정 | 스키마 버전과 변경 이력을 둔다. | [테이블](https://docs.backnd.com/guide/console-guide/backnd-base/game-information/table/) |\n| C11 | 게임정보 CRUD·권한 | `Insert`, `UpdateV2`, 소유자 `owner_inDate` | 읽기 공개와 쓰기 허용을 별개로 검증한다. | [삽입](https://docs.backnd.com/sdk-docs/backend/base/game-information/insert/), [수정](https://docs.backnd.com/sdk-docs/backend/base/game-information/update/using-indate/) |\n| C12 | 게임정보 검색 | `Where`, 행 ID, 페이지 키 | 검색 범위와 반환 순서를 계약으로 정한다. | [Where](https://docs.backnd.com/sdk-docs/backend/base/game-information/clause-where/basic/) |\n| C13 | 유저 데이터·압축 | `PlayerData`, 소비량, 압축·응답 펼치기 | 저장 크기와 SDK 응답 형식을 함께 검증한다. | [압축](https://docs.backnd.com/sdk-docs/backend/base/player-data/compress-caution/) |\n| C14 | 게임정보 트랜잭션 | `TransactionReadV2`, `TransactionWriteV2`, `TransactionValue` | 허용 작업과 동시성 보장을 분리한다. | [읽기](https://docs.backnd.com/sdk-docs/backend/base/game-information/transaction/read-v2/), [쓰기](https://docs.backnd.com/sdk-docs/backend/base/game-information/transaction/write-v2/) |\n| C15 | DB 모델·권한 | `BaseModel`, `[Table]`, `[Column]`, `SELF`, `OTHERS` | 서버가 스키마와 권한을 강제한다. | [모델링](https://docs.backnd.com/sdk-docs/database/data-modeling/) |\n| C16 | DB 조회 | `From<T>`, `Where`, `OrderBy`, `Take`, `Skip`, `Count`, `Any` | 허용 쿼리만 SDK에서 표현한다. | [조회](https://docs.backnd.com/sdk-docs/database/query/), [연산자](https://docs.backnd.com/sdk-docs/database/supported-operators/) |\n| C17 | DB 수정·증감 | `Set`, `Update`, `Delete`, `Inc`, `Dec` | 재화 증감은 서버 연산으로 처리한다. | [수정·삭제](https://docs.backnd.com/sdk-docs/database/update-delete/) |\n| C18 | DB 트랜잭션 | `Transaction().From<T>()...Commit()` | 지급 원장과 데이터 변경을 원자적으로 묶는다. | [트랜잭션](https://docs.backnd.com/sdk-docs/database/transaction/) |\n| C19 | DB 운영 | 인덱스, SQL 편집기, 백업, 독립 테이블 복원 | 복원 절차와 운영 권한을 따로 정한다. | [에디터](https://docs.backnd.com/guide/console-guide/database/table-editor/), [설정](https://docs.backnd.com/guide/console-guide/database/settings/) |\n| C20 | 클라우드 세이브 | 컬렉션별 JSON 업로드·다운로드·삭제 | 네트워크 오류를 신규 유저로 판단하지 않는다. | [업로드](https://docs.backnd.com/sdk-docs/backend/base/cloud-save/upload/) |\n| C21 | 차트 배포 | `Backend.CDN.Content.Table.Get`, `Content.Get` | 배포한 파일 ID와 논리 차트 ID를 구분한다. | [목록](https://docs.backnd.com/sdk-docs/backend/base/chart/chart-table/), [내용](https://docs.backnd.com/sdk-docs/backend/base/chart/chart-content/) |\n| C22 | 차트 캐시 | `Content.Local.Save`, 로컬 조회·최신화 | 파일 버전별 캐시를 재사용한다. | [로컬 저장](https://docs.backnd.com/sdk-docs/backend/base/chart/Local/save/) |\n| C23 | 확률·추첨 | 확률 파일, `GetProbabilitys(fileId, count)` | 추첨과 비용 차감·지급을 하나의 서버 명령으로 묶는다. | [확률](https://docs.backnd.com/guide/console-guide/backnd-base/probability/), [다회 추첨](https://docs.backnd.com/sdk-docs/backend/base/probability/lotto-by-number/) |\n| C24 | 유저 리더보드 | 점수·추가 항목·그룹·과거 순위 | 점수의 원본과 조회용 순위를 분리한다. | [목록](https://docs.backnd.com/sdk-docs/backend/base/leaderboard/user/get-leaderboard/), [갱신](https://docs.backnd.com/sdk-docs/backend/base/leaderboard/user/update/) |\n| C25 | 길드 리더보드·보상 | 길드 재화·메타 점수, 정산 후 우편 | 기간별 결과와 보상 지급 상태를 보존한다. | [길드](https://docs.backnd.com/sdk-docs/backend/base/leaderboard/guild/get-leaderboard/), [제품 기능](https://backnd.com/ko/features/base/) |\n| C26 | 우편함 조회 | `UPost.GetPostList`, `PostType`, 누적 조회 | 유형별 페이지 진행 상태를 관리한다. | [관리자 우편](https://docs.backnd.com/sdk-docs/backend/base/post/get-list/adminstrator/) |\n| C27 | 우편 수령 | `UPost.ReceivePostItem`, 전체 수령 | 수령 기록과 인벤토리 지급을 원자적으로 묶는다. | [단건 수령](https://docs.backnd.com/sdk-docs/backend/base/post/get-one/console-post/) |\n| C28 | 유저 우편 | `SendUserPost`, 보내는 셀을 `NULL`로 변경 | 전송과 보유 아이템 변경을 묶는다. | [발송](https://docs.backnd.com/sdk-docs/backend/base/post/send/) |\n| C29 | 쿠폰 | `CouponList`, `UseCoupon`, 웹 쿠폰 | 쿠폰 사용 기록과 지급 기록을 연결한다. | [쿠폰 목록](https://docs.backnd.com/sdk-docs/backend/base/coupon/get-list/), [사용](https://docs.backnd.com/sdk-docs/backend/base/coupon/using/) |\n| C30 | 친구 | 요청·받은 요청·수락·거절·취소·삭제 | 관계와 요청의 상태 전이를 구분한다. | [목록](https://docs.backnd.com/sdk-docs/backend/base/friend/list-friends/), [요청](https://docs.backnd.com/sdk-docs/backend/base/friend/request-to-another-user/request/) |\n| C31 | 길드 가입 | `CreateGuildV4`, `ApplyGuildV3`, `WithdrawGuildV3` | 가입 자격·정원·현재 소속을 함께 검사한다. | [생성](https://docs.backnd.com/sdk-docs/backend/base/guild/create-and-join/create/), [가입](https://docs.backnd.com/sdk-docs/backend/base/guild/create-and-join/request-join/) |\n| C32 | 길드 권한·재화 | 마스터·운영진, 메타 정보, `ContributeGoodsV5` | 권한·재화 원장·정산 잠금을 구분한다. | [마스터](https://docs.backnd.com/sdk-docs/backend/base/guild/guild-master/basic/), [기부](https://docs.backnd.com/sdk-docs/backend/base/guild/goods/donate-forbidden-during-reset-time/) |\n\n## 3. 인증과 유저 도메인\n\n### C01-C05. 초기화부터 세션 복구까지\n\n**확인.** 프로젝트를 만들면 `Client App Id`와 `Signature Key`를 받는다. Unity 설정에 두 값을 넣고 `Backend.Initialize()`를 호출한다. 문서의 초기화 성공 응답은 `204`다. 이는 유저 로그인 완료를 뜻하지 않는다. [SDK 연결](https://docs.backnd.com/sdk-docs/backend/base/start-up/)\n\n커스텀 가입은 ID와 비밀번호를 받는다. 신규 가입은 `201`, 중복 ID는 `409`다. 점검 중인 프로젝트의 가입 요청은 `401`을 반환할 수 있다. 게스트·소셜·커스텀 모두 가입 직후 로그인하며 토큰을 발급한다. [CustomSignUp](https://docs.backnd.com/sdk-docs/backend/base/user/custom/signup/), [가입과 로그인](https://docs.backnd.com/sdk-docs/backend/base/user/signup-and-login/)\n\n게스트는 별개 서버 계정 유형이 아니라 커스텀 계정 기능을 응용한다. SDK는 로컬 자격 증명이 있으면 로그인한다. 없으면 UUID 기반 ID로 가입하고 자격 증명을 저장한다. 로컬 정보가 사라져도 서버 데이터는 남는다. 별도 복원·이관 기능은 제공하지 않는다고 문서가 명시한다. [GuestLogin](https://docs.backnd.com/sdk-docs/backend/base/user/guest/signup-and-login/)\n\n소셜 인증 메서드는 `Google`, `Facebook`, `Apple`, `Steam`, `GPGS2`, `Line`을 열거한다. 외부 토큰을 처음 쓰면 가입하며, 기존 계정이면 로그인한다. 공급자의 로그인 SDK에서 토큰을 얻는 단계와 뒤끝 토큰 발급 단계는 다르다. [AuthorizeFederation](https://docs.backnd.com/sdk-docs/backend/base/user/federation/signup-and-login/)\n\n커스텀 계정은 로그인 후 `ChangeCustomToFederation`으로 전환한다. 다른 계정이 이미 쓰는 공급자 식별자는 `409`다. `ChangeToFederation`은 기존 소셜 계정을 새 소셜 계정으로 바꾼다. 전환 후 예전 공급자 계정으로 로그인하면 새 게임 계정을 만든다. 계정 두 개의 데이터 병합 기능으로 해석하면 안 된다. [커스텀 전환](https://docs.backnd.com/sdk-docs/backend/base/user/federation/migrate-from-custom/), [소셜 전환](https://docs.backnd.com/sdk-docs/backend/base/user/federation/migrate-to-federation/)\n\n액세스 토큰 수명은 1일이며 갱신 토큰 수명은 1년이다. 앱 종료는 토큰을 만료시키지 않는다. 로그아웃은 토큰을 만료시킨다. 로그인은 토큰을 새로 발급한다. [AccessToken](https://docs.backnd.com/sdk-docs/backend/base/user/token/accesstoken/)\n\n`LoginWithTheBackendToken`과 `RefreshTheBackendToken`은 로컬 토큰이 필요하다. 성공하면 두 토큰을 교체한다. 다른 기기 로그인으로 갱신 토큰이 무효가 되면 `401`이 날 수 있다. SDK 문서는 토큰 로그인 실패 후 일반 로그인 경로를 요구한다. 갱신 토큰이 1년 뒤 만료되면 `410`을 반환한다. [토큰 로그인](https://docs.backnd.com/sdk-docs/backend/base/user/token/login/), [토큰 갱신](https://docs.backnd.com/sdk-docs/backend/base/user/token/refresh-token/)\n\n**재구성 제안.** 내부 계정 ID, 공급자 식별자, 기기 ID, 세션 ID를 별도로 저장한다. 외부 토큰 검증은 서버의 신뢰 경계다. SDK에 담는 프로젝트 인증값을 운영자 권한으로 취급하지 않는다. 토큰 갱신 요청은 SDK에서 하나로 합친다. 실패한 결제·지급 요청을 세션 복구 후 무조건 재전송하지 않는다.\n\n**미확인.** 토큰 서명 형식, 해시 저장 방식, 키 교체, 동시 세션 허용 수, 침해 시 취소 범위는 공개 문서만으로 확정하지 못했다. 타 기기 로그인 실패 예시는 단일 세션 정책 전체의 증거가 아니다.\n\n### C06-C09. 유저의 신원, 제재, 탈퇴, 캐릭터\n\n**확인.** `Backend.UserInDate`와 `Backend.UserNickName`은 로그인 뒤 읽는 로컬 값이다. `GetUserInfoV2`는 서버의 유저 메타 정보를 조회한다. 응답에는 유저 ID, 가입 유형, 국가, 그룹, 길드, 최근 접속 시각이 포함된다. 닉네임·길드·이메일은 없을 수 있다. [로컬 정보](https://docs.backnd.com/sdk-docs/backend/base/user/get-my-information/get-from-local/), [서버 정보](https://docs.backnd.com/sdk-docs/backend/base/user/get-my-information/get-from-server-v2/)\n\n닉네임은 문서의 파라미터 기준 최대 20자이며 앞뒤 공백을 허용하지 않는다. 중복 닉네임은 `409`다. `CreateNickname`으로 기존 닉네임을 수정할 수도 있다. 오류 설명의 “20자 이상” 문구는 최대 20자 설명과 경계가 다르므로 20자 입력은 별도 확인해야 한다. [CreateNickname](https://docs.backnd.com/sdk-docs/backend/base/user/nickname/insert/)\n\n접근 차단은 유저와 디바이스를 구분한다. 기간과 선택 사유를 기록한다. 유저 직접 입력은 최대 10명이며 파일 입력은 최대 500개의 UUID다. 일괄 등록 결과는 실패 목록과 사유를 제공한다. 해제 후 이력을 유지한다. 차단 때 리더보드 순위를 함께 지우는 옵션이 있다. [차단 운영](https://docs.backnd.com/guide/console-guide/backnd-base/access-user/blocking/)\n\nSDK 로그인은 차단된 유저·기기에 `403`을 반환한다. [로그인 실패](https://docs.backnd.com/sdk-docs/backend/base/user/guest/signup-and-login/)\n\n`WithdrawAccount`는 기본값 `0`으로 즉시 탈퇴를 요청한다. 로그인 차단은 즉시 일어나지만 데이터는 다음 정시에 삭제한다. 유예 시간이 있으면 로그인으로 철회할 수 있다. `SignOut`은 7일 유예를 썼던 구형 함수다. 게임정보, 친구, 랭킹, 닉네임, 길드, 인증 연결의 삭제 범위를 문서가 열거한다. 길드장이 탈퇴하면 길드장이 없는 길드가 남을 수 있다. [WithdrawAccount](https://docs.backnd.com/sdk-docs/backend/base/user/withdraw/)\n\n새 데이터베이스와 클라우드 세이브의 삭제 범위는 별도 확인이 필요하다.\n\n멀티 캐릭터는 계정과 플레이 캐릭터의 로그인 상태를 나눈다. `Backend.BMember`가 계정 로그인을 맡는다. `Backend.MultiCharacter.Character`가 생성·조회·선택·삭제를 맡는다. `SelectCharacter` 후에는 그 캐릭터로 베이스 기능을 사용한다. 계정마다 최대 20개 캐릭터를 생성한다. 활성화한 프로젝트는 일반 프로젝트로 되돌릴 수 없다. [멀티 캐릭터](https://docs.backnd.com/sdk-docs/backend/base/multi-character/what-is-multi-character/)\n\n**재구성 제안.** 제재 대상을 계정·캐릭터·디바이스로 구분한다. 삭제 요청은 상태와 예정 시각을 남긴다. 공용 상태와 거래 기록의 보존 정책을 개인정보 삭제 정책과 함께 정한다. 캐릭터 전환 후 이전 캐릭터의 캐시와 요청 결과가 새 캐릭터에 적용되지 않게 한다.\n\n**미확인.** 디바이스 ID의 생성·변경 내성, 제재 전파 지연, 닉네임의 Unicode 정규화, 동시 닉네임 변경의 충돌 처리는 실행하지 않았다. 개인정보 보관 기간과 복구 가능 범위도 이 조사에서 확정하지 않았다.\n\n## 4. 데이터 저장과 동시성\n\n### C10-C13. 게임정보와 PlayerData\n\n**확인.** 게임정보 테이블은 최대 100개다. 테이블 이름과 스키마 사용 여부는 생성 뒤 바꿀 수 없다고 안내한다. 스키마 타입은 `datetime`, `string`, `list`, `map`, `bool`, `int`, `float`, `double`이다. 테이블 삭제는 메타데이터 삭제이며 데이터 초기화·삭제와 구분된다. [게임정보 테이블](https://docs.backnd.com/guide/console-guide/backnd-base/game-information/table/)\n\n`Insert`한 행은 요청한 유저에게 귀속된다. 행 ID인 `inDate`와 소유자 ID인 `owner_inDate`는 다르다. 스키마가 있으면 미정의 컬럼과 다른 타입을 거부한다. 행은 400KB 제한을 적용한다. 숫자 저장의 안전 정수 상한은 `9007199254740991`로 안내한다. [Insert](https://docs.backnd.com/sdk-docs/backend/base/game-information/insert/)\n\n`UpdateV2`는 테이블 이름, 행 ID, 소유자 ID, 변경값을 받는다. 전달하지 않은 컬럼은 유지한다. 비스키마 테이블은 새 컬럼을 추가할 수 있다. 타인의 Public 데이터 수정은 허용하며 타인의 Private 데이터 수정은 거부한다. 따라서 Public은 “타인이 읽기만 가능”이라는 뜻이 아니다. [UpdateV2](https://docs.backnd.com/sdk-docs/backend/base/game-information/update/using-indate/)\n\n`Where`는 테이블에 존재하는 컬럼을 조회한다. 계정 ID·닉네임을 자동으로 조인하지 않는다. 비교, 범위, `Contains`, `BeginsWith`, null 검사를 제공한다. 메타 정보의 닉네임으로 찾으려면 유저 검색 API가 필요하다. [Where](https://docs.backnd.com/sdk-docs/backend/base/game-information/clause-where/basic/)\n\n`PlayerData.GetMyData`는 페이지 키와 컬럼 선택을 제공한다. 페이지당 행 수는 최소 1개, 최대 100개이며 기본값은 10개다. 최신 행부터 조회한다. `select`로 반환 컬럼을 줄여도 DB 처리량은 같다고 명시한다. `UpdateOtherData`도 타인 Public 수정이 가능하다. [내 데이터 조회](https://docs.backnd.com/sdk-docs/backend/base/player-data/get/get-my-data/), [유저 데이터 수정](https://docs.backnd.com/sdk-docs/backend/base/player-data/update/)\n\n압축 컬럼이 있으면 SDK 응답의 타입 표기가 사라질 수 있다. 압축 테이블을 포함한 트랜잭션은 전체 응답을 펼친 형태로 반환한다. 문서는 `GetFlattenJSON()` 또는 `FlattenRows()` 사용을 권한다. 입력의 반복 정도에 따라 압축 효과가 달라진다. 같은 데이터로 처리량을 비교해야 한다. [압축 주의](https://docs.backnd.com/sdk-docs/backend/base/player-data/compress-caution/)\n\n**재구성 제안.** 새 저장소는 서버가 생성한 ID로 식별한다. 생성 시각을 ID의 의미로 강제하지 않는다. 읽기 권한과 쓰기 권한을 나눈다. 재화·결제·보상은 일반 클라이언트가 임의 수정할 수 없는 정책을 쓴다. 정수의 실제 저장 타입을 API 계약에 표시한다. JSON 타입 표기를 숨기는 DTO를 SDK에서 일관되게 제공한다.\n\n**미확인.** 게임정보의 Public 권한은 신규 데이터베이스 소개 비교표와 충돌한다. 비교표는 타인 쓰기가 불가라고 설명한다. 상세 SDK와 콘솔 문서는 가능하다고 명시하므로 두 유저로 재검증해야 한다. [충돌하는 비교표](https://docs.backnd.com/guide/console-guide/database/introduction/)\n\n### C14. 게임정보 트랜잭션\n\n**확인.** `TransactionReadV2`와 `TransactionWriteV2`는 최대 10개 작업을 받는다. 하나가 실패하면 전체 작업이 실패한다. 같은 행을 두 번 대상으로 삼으면 `400 ValidationException`이다. 행 ID로 작업하면 `owner_inDate`도 받는 V2 명령을 써야 한다. 읽기 조건이 복수 행과 일치하면 최신 행 하나만 반환한다. [트랜잭션 읽기](https://docs.backnd.com/sdk-docs/backend/base/game-information/transaction/read-v2/)\n\n삽입을 포함한 쓰기 성공은 `200`과 생성한 행 ID 목록을 반환한다. 다른 쓰기 성공은 `204`일 수 있다. [트랜잭션 쓰기](https://docs.backnd.com/sdk-docs/backend/base/game-information/transaction/write-v2/)\n\n**재구성 제안.** 원자성은 묶은 변경이 함께 성공한다는 뜻이다. 같은 요청을 두 번 보내도 한 번만 지급한다는 멱등성은 별개다. 요청 ID의 유일 제약과 지급 원장이 필요하다. 재화 잔액 검사는 서버가 변경과 같은 트랜잭션에서 실행해야 한다.\n\n**미확인.** 격리 수준, 조건 불일치의 전체 실패 보장, 교착 재시도, 요청 중복 제거, 타임아웃 후 결과 조회는 공개 계약에서 확인하지 못했다. 사전 조회 후 쓰기를 묶었다는 이유만으로 이중 지출을 막는다고 판단하지 않는다.\n\n### C15-C19. 신규 데이터베이스\n\n**확인.** 모델은 `BaseModel`을 상속하고 `[Table]`을 지정한다. `UserTable`에는 소유자를 식별하는 `user_uuid`가 자동으로 붙는다. 기본 읽기·쓰기는 `SELF`다. `FlexibleTable`에는 소유자 컬럼이 없다. `ClientAccess`, 읽기 권한, 쓰기 권한으로 접근을 정한다. `OTHERS` 쓰기는 다른 유저의 쓰기를 허용하므로 읽기 공개와 구분해야 한다. [데이터 모델링](https://docs.backnd.com/sdk-docs/database/data-modeling/)\n\n데이터베이스 초기화는 로그인 뒤 `new Client(DB_UUID)`와 `Initialize()`로 진행한다. 베이스 SDK를 함께 설치한다면 `5.17.0` 이상이 필요하다. 단독 패키지에도 인증용 `Backend.dll`이 포함된다. 테이블은 DB당 100개, 컬럼은 테이블당 80개, JSON·문자열 컬럼은 20개 제한이다. [DB SDK 시작](https://docs.backnd.com/sdk-docs/database/intro/)\n\n조회는 `Where`, 정렬, `Take`, `Skip`, `FirstOrDefault`, `Count`, `Any`를 제공한다. 인덱스나 기본 키가 없으면 전체 탐색이 일어난다. 지원 연산자 문서는 문자열의 `==`·`!=`와 목록의 `Contains`를 구분한다. 문자열 부분 검색과 JSON 내부 검색은 지원하지 않는다고 명시한다. [조회](https://docs.backnd.com/sdk-docs/database/query/), [허용 연산자](https://docs.backnd.com/sdk-docs/database/supported-operators/)\n\n필드 수정은 `Set`과 `Update()`로 실행한다. `Inc`·`Dec`는 사전 조회 없이 서버에서 숫자를 증감한다. 결과의 `AffectedRows`로 실제 변경한 행 수를 확인할 수 있다. 증감 메서드를 연결한 뒤 `Update()`를 호출해야 적용된다. [수정·삭제](https://docs.backnd.com/sdk-docs/database/update-delete/)\n\nDB 트랜잭션은 `Insert`, `Update`, `Delete`, `Inc`, `Dec`를 지원한다. `Commit()`은 성공 여부, 작업 수, 영향받은 행 수, 오류를 반환한다. 최대 10개 작업이며 `SELECT`는 포함하지 못한다. `Delete`, `Inc`, `Dec`에는 조건이 필요하다. 같은 작업에서 같은 필드를 중복 수정하지 못한다. [DB 트랜잭션](https://docs.backnd.com/sdk-docs/database/transaction/)\n\n사용자 인덱스는 DB당 10개이며 복합 인덱스는 최대 4개 컬럼이다. `user_uuid`의 기본 인덱스는 제한에 포함하지 않는다. JSON·bool 컬럼은 인덱스를 만들지 못한다. 클라이언트 접근 설정과 관계없이 서버 환경에서는 접근할 수 있다고 안내한다. 따라서 콘솔 권한은 DB의 클라이언트 권한과 별도로 검토해야 한다. [테이블 에디터](https://docs.backnd.com/guide/console-guide/database/table-editor/)\n\n리전은 서울이며 생성 뒤 변경할 수 없다. 백업 주기는 6·12·24시간이며 보관 기간은 1-14일이다. 선택 가능한 값은 요금제에 따라 다르다. 복원은 원본을 덮어쓰지 않고 별도 테이블을 만든다. 데이터베이스 비활성화는 전체 데이터를 삭제하며 복구할 수 없다. [DB 설정](https://docs.backnd.com/guide/console-guide/database/settings/), [복원](https://docs.backnd.com/guide/console-guide/database/table-editor/)\n\n**재구성 제안.** 임의 SQL 실행을 게임 클라이언트에 열지 않는다. 스키마·쿼리 표현식·권한을 서버에서 다시 검사한다. 재화 차감은 잔액 조건과 증감을 함께 적용한다. 조건에 맞는 행이 0개라면 보상 삽입도 실패해야 한다. 거래 요청 ID를 유일하게 저장해 응답 유실 뒤 중복 지급을 막는다. 인덱스 없는 대량 검색은 운영 도구에서도 제한한다.\n\n**미확인.** 0행 변경이 트랜잭션 전체를 실패시키는지 문서는 밝히지 않는다. 숫자가 0 아래로 내려가지 않는 보장도 확인하지 못했다. 문서의 구매 예제에는 잔액 조건이 없으므로 예제만 복사하면 충분하지 않다. 격리 수준, 저장 엔진, 인덱스 생성 중 가용성, 백업의 시점 일관성, 복원 시간은 측정하지 않았다.\n\n### C20. 클라우드 세이브\n\n**확인.** 컬렉션은 미리 만들어야 한다. 최대 20개 컬렉션을 사용할 수 있다. 컬렉션마다 저장 데이터 한 개를 쓰며 JSON 문서 최대 크기는 1MB다. 기존 데이터와 비교하지 않고 덮어쓴다. 자동 백업·버전 관리·상세 요청 로그를 제공하지 않는다고 안내한다. 문서의 평균 `800ms`와 혼잡 시 `2초 이상`은 공급자 설명이며 자체 측정값이 아니다. [Upload](https://docs.backnd.com/sdk-docs/backend/base/cloud-save/upload/)\n\n**재구성 제안.** 로드 실패를 빈 세이브로 취급하지 않는다. 덮어쓰기에는 버전 번호 또는 조건부 쓰기를 제공한다. 재화 원장과 세이브 문서의 책임을 분리한다. 클라이언트가 백업 컬렉션을 따로 관리하는 방식은 두 쓰기의 원자성을 보장하지 않는다.\n\n**미확인.** 같은 유저의 기기 두 대가 저장할 때 충돌 정책, 쓰기 순서, 장애 후 복구 범위를 확인하지 못했다.\n\n## 5. 공용 콘텐츠와 추첨\n\n### C21-C22. 차트와 캐시\n\n**확인.** 차트 목록은 논리 차트의 `chartId`와 선택한 파일의 `selectedChartFileId`를 반환한다. 파일을 선택하지 않은 차트는 목록에서 제외한다. `Content.Table.Get()` 후 `Content.Get()`으로 내용을 받는다. 이 CDN 메서드는 `SendQueue`로 호출할 수 없다. 파일별 오류 문자열과 다운로드 진행 콜백을 제공한다. [차트 목록](https://docs.backnd.com/sdk-docs/backend/base/chart/chart-table/), [차트 내용](https://docs.backnd.com/sdk-docs/backend/base/chart/chart-content/)\n\n`Backend.CDN.Content.Local.Save`는 차트를 로컬에 저장한다. 문서 메뉴는 로컬 읽기, 최신화, 삭제, 초기화를 분리한다. [로컬 차트](https://docs.backnd.com/sdk-docs/backend/base/chart/Local/save/)\n\n**재구성 제안.** 콘텐츠 버전을 불변 파일로 배포한다. 논리 차트는 활성 버전을 가리킨다. SDK는 버전이 같은 파일을 다시 받지 않는다. 여러 차트가 함께 바뀌어야 하면 묶음 버전으로 전환한다. 다운로드 전체 성공과 파일별 성공을 구분한다.\n\n**미확인.** CDN 반영 지연, 서명·체크섬 검증, 캐시 무효화, 차트 묶음의 원자적 전환, 장애 시 이전 버전 사용 보장은 확인하지 못했다.\n\n### C23. 확률과 지급\n\n**확인.** 확률 파일은 단일 시트이며 `percent` 컬럼이 필요하다. 확률 합계는 100%여야 한다. `id`는 예약 컬럼이다. 파일 업로드 뒤 적용해야 SDK가 사용한다. 콘솔에서 확률 파일을 직접 수정할 수 없다. 최대 200개 확률과 600개 파일을 안내한다. [확률 관리](https://docs.backnd.com/guide/console-guide/backnd-base/probability/)\n\n`GetProbabilitys(fileId, count)`는 한 호출에 최대 100회 추첨한다. `percent` 소수점은 최대 7자리다. version2에서 다회 추첨을 지원한다. 응답은 추첨 결과이며 인벤토리 갱신·재화 차감과의 일괄 처리는 이 메서드의 계약에 나오지 않는다. [다회 추첨](https://docs.backnd.com/sdk-docs/backend/base/probability/lotto-by-number/)\n\n**재구성 제안.** 서버는 추첨 요청마다 사용한 확률 버전, 비용, 결과, 지급 상태를 남긴다. 같은 요청 ID의 재호출은 같은 결과를 반환한다. 비용 차감과 보상을 같은 트랜잭션으로 저장한다. 천장·중복 교환은 별도 게임 규칙으로 명시한다.\n\n**미확인.** 난수 생성기, 엔트로피, 독립 시행 보장, 천장 기능, 공개 확률과 실제 추첨의 감사 방법, 추첨 로그 보존 기간은 확인하지 못했다.\n\n## 6. 경쟁과 보상\n\n### C24-C25. 리더보드\n\n**확인.** 리더보드 설정에는 대상 테이블·점수 컬럼·추가 컬럼·정렬·기간·초기화 시점·그룹 구분·DB 사용 여부를 담는다. 현재·내 순위·특정 유저·특정 점수·과거 순위를 조회한다. `URank`와 `Leaderboard`를 함께 쓰면 NULL 그룹과 소속 그룹에 중복 등록할 수 있다. [리더보드 목록](https://docs.backnd.com/sdk-docs/backend/base/leaderboard/user/get-leaderboard/), [구형 랭킹과 차이](https://docs.backnd.com/sdk-docs/backend/base/leaderboard/difference-to-rank/)\n\n`UpdateMyDataAndRefreshLeaderboard`는 원본 행과 리더보드를 함께 갱신한다. 행을 먼저 생성해야 한다. 일반 데이터 수정만으로 리더보드에 반영되지는 않는다. 추가 항목은 최대 256byte다. 게임정보의 연동 테이블을 Public으로 바꾸면 갱신이 실패한다. 신규 DB와 연동하려면 베이스 SDK `5.18.5` 이상을 요구한다. [점수 갱신](https://docs.backnd.com/sdk-docs/backend/base/leaderboard/user/update/)\n\n공식 제품 소개는 유저·길드 순위를 제공한다고 설명한다. 정산 완료 뒤 우편으로 보상한다. 순위별 보상은 10,000위까지이며 참여자 전체 보상도 지원한다. 이 수치는 제품 설명의 범위다. [베이스의 보상 기능](https://backnd.com/ko/features/base/)\n\n**재구성 제안.** 기간을 식별하는 `season_id`를 둔다. 종료 시각 뒤 점수 입력, 지연된 경기 결과, 동점 순서를 정한다. 정산 결과를 고정한 뒤 수신자별 지급 기록을 만든다. 정산 재실행은 같은 시즌의 보상을 중복 지급하지 않아야 한다. 랭킹 조회 캐시는 점수 원본의 정합성과 별도 기준으로 운영한다.\n\n**미확인.** 문서의 “실시간”에는 갱신 지연 상한이 없다. 동점 정렬, 정산 중 접수 기준, DB·리더보드의 장애 시 원자성, 지급 재실행·복구 보장은 확인하지 못했다. 수상자 제재가 정산 결과를 다시 계산하는지도 미확인이다.\n\n## 7. 우편과 쿠폰\n\n### C26-C28. 발송, 조회, 수령, 실제 지급\n\n**확인.** `UPost`는 받을 수 있는 오래된 우편부터 조회하며 반복 호출로 최신 우편까지 누적한다. 기본 `limit`은 10이다. 구형 `Social.Post`는 최신 100개를 읽는 방식이었다. 최신 우편의 종류는 `Admin`, `Rank`, `Coupon`, `Webshop`, `User`다. [신·구 우편 차이](https://docs.backnd.com/sdk-docs/backend/base/post/difference-to-old/), [수령 유형](https://docs.backnd.com/sdk-docs/backend/base/post/get-one/console-post/)\n\n단건 수령 전에 목록에서 우편을 불러와야 한다. 수령하면 목록에서 삭제하며 아이템 정보를 반환한다. 만료된 우편은 받을 수 없다. 수령은 유저 DB의 아이템을 자동으로 수정하지 않는다. 클라이언트가 게임정보를 따로 갱신해야 한다고 문서가 명시한다. 관리자·랭킹·쿠폰 우편과 유저·웹숍 우편은 반환 구조가 다르다. [ReceivePostItem](https://docs.backnd.com/sdk-docs/backend/base/post/get-one/console-post/)\n\n유저 우편은 발신자의 게임정보 셀을 전달한다. 발송 후 그 셀은 `NULL`로 바뀐다. 발신자는 서버 데이터를 다시 읽어 로컬 상태를 맞춰야 한다. 발송은 하루 최대 50건이며 취소할 수 없다. 수신자의 게임정보를 자동으로 갱신하지 않는다. 신규 데이터베이스는 이 게임정보 기반 전송을 지원하지 않는다고 명시한다. [SendUserPost](https://docs.backnd.com/sdk-docs/backend/base/post/send/), [DB 지원 제한](https://docs.backnd.com/guide/console-guide/database/introduction/)\n\n**재구성 제안.** 우편 수령과 실제 지급은 서버 명령 하나로 처리한다. `mail_id + recipient_id`를 유일하게 기록한다. 인벤토리 변경과 수령 완료를 같은 트랜잭션에 둔다. 응답이 유실되면 같은 결과를 다시 조회할 수 있어야 한다. 유저 간 아이템 전송은 소유권 변경과 우편 생성을 함께 저장한다.\n\n**미확인.** 뒤끝 우편 수령 직후 DB 갱신 전에 앱이 종료되면 복구하는 공식 계약을 확인하지 못했다. 이 구간은 중복 지급과 지급 유실을 따로 시험해야 한다. 한 번에 모두 받는 작업의 부분 실패·재개 단위도 확인하지 않았다.\n\n### C29. 쿠폰\n\n**확인.** 쿠폰은 시리얼·단일 유형, 중복 사용 여부, 유효기간, 발행 개수, 지급 아이템을 설정한다. `CouponList`는 신·구 버전과 중복 허용 여부를 반환한다. `UseCoupon`은 보상 목록을 반환한다. 중복·만료·소진은 `404`로 나타날 수 있으므로 상태 코드만으로 원인을 구분하면 부족하다. 신규 쿠폰은 복수 아이템을 반환한다. 웹 쿠폰은 쿠폰 우편 경로와 연결된다. [쿠폰 목록](https://docs.backnd.com/sdk-docs/backend/base/coupon/get-list/), [사용 결과](https://docs.backnd.com/sdk-docs/backend/base/coupon/using/), [우편 종류](https://docs.backnd.com/sdk-docs/backend/base/post/get-one/console-post/)\n\n**재구성 제안.** 캠페인과 개별 코드를 구분한다. 유저별·코드별 사용 제약을 서버에서 강제한다. 사용 성공과 실제 지급을 함께 기록한다. 웹 쿠폰과 SDK 쿠폰이 같은 보상 원장을 사용해야 한다. 재시도 가능 오류와 이미 사용한 상태를 별도 오류 코드로 제공한다.\n\n**미확인.** 동시 사용의 잠금 방식, 사용 성공 뒤 지급 실패의 복구, 코드 대입 방지, 발행 수정의 적용 범위는 확인하지 못했다.\n\n## 8. 친구와 길드\n\n### C30. 친구\n\n**확인.** 친구 기능은 요청, 보낸·받은 요청 조회, 취소, 수락, 거절, 삭제를 제공한다. 대상은 게이머의 `inDate`로 지정한다. 친구 최대 보유 수는 콘솔 기본값이 0이므로 설정 전에는 사용할 수 없다. 목록 기본값은 100개이며 offset으로 조회한다. 중복 요청은 `409`, 요청함 한도는 `412`다. [친구 목록](https://docs.backnd.com/sdk-docs/backend/base/friend/list-friends/), [친구 요청](https://docs.backnd.com/sdk-docs/backend/base/friend/request-to-another-user/request/)\n\n**재구성 제안.** 요청과 친구 관계를 별도 상태로 둔다. 두 유저의 관계는 순서와 무관한 유일 키로 식별한다. 동시 교차 요청, 수락과 취소의 경합, 양쪽 정원 초과를 서버에서 판정한다. 친구 삭제·차단·접속 상태 알림은 서로 다른 기능으로 둔다.\n\n**미확인.** 친구 요청 자동 만료, 교차 요청 자동 수락, 차단 연계, 동시 수락의 정원 초과 방지는 실행하지 않았다.\n\n### C31-C32. 길드\n\n**확인.** `CreateGuildV4`는 이름, 재화 종류 수, 메타 정보, 공개 가입 여부, 국가를 받는다. 재화 종류는 1-10개이며 생성 뒤 바꾸지 못한다. 길드명은 2-16자다. 한글·영문·숫자를 허용하며 숫자로 시작하지 못한다. 생성 자격은 콘솔의 게임정보 조건을 검사한다. [길드 생성](https://docs.backnd.com/sdk-docs/backend/base/guild/create-and-join/create/)\n\n`ApplyGuildV3`는 즉시 가입 또는 마스터·부 마스터 승인을 따른다. 이미 소속 길드가 있으면 `412`다. 100명 이상인 길드에는 가입할 수 없다고 안내한다. 길드장은 남은 길드원이 없을 때만 직접 탈퇴한다. [길드 가입](https://docs.backnd.com/sdk-docs/backend/base/guild/create-and-join/request-join/), [길드 탈퇴](https://docs.backnd.com/sdk-docs/backend/base/guild/create-and-join/withdraw/)\n\n마스터는 위임, 부 마스터 임명·해제, 재화 사용, 즉시 가입 설정, 국가·이름 변경을 맡는다. 권한 대상에는 가입 시각인 `inDate` 대신 `gamerIndate`를 사용해야 한다. `ClaimGuildMaster`는 설정한 비접속 기간을 넘긴 길드장의 권한을 신청자가 가져오는 기능이다. 다른 유저가 먼저 교체하면 `409`다. [마스터 권한](https://docs.backnd.com/sdk-docs/backend/base/guild/guild-master/basic/), [마스터 교체](https://docs.backnd.com/sdk-docs/backend/base/guild/guild-master/claim-master/)\n\n`ContributeGoodsV5`는 리더보드 정산 중 기부를 거부한다. 이때 `428`을 반환한다. `double` 금액은 SDK `5.18.13`부터 지원한다. 문서는 소수점을 버릴 수 있다고 명시한다. [길드 재화 기부](https://docs.backnd.com/sdk-docs/backend/base/guild/goods/donate-forbidden-during-reset-time/)\n\n**재구성 제안.** 길드 멤버십·가입 요청·역할·메타 정보·재화 원장을 구분한다. 마지막 마스터 탈퇴와 위임은 같은 규칙으로 검사한다. 기부 명령은 개인 재화 차감과 길드 재화 증가를 함께 저장한다. 시즌 정산은 입력 차단 또는 입력 시점별 귀속 정책을 명시한다.\n\n**미확인.** 기부 함수가 개인 재화를 자동 차감하는 계약은 확인하지 못했다. 마스터 교체의 경합 오류는 문서에 있지만 실제 동시 호출은 하지 않았다. 길드 정원·가입 조건 변경 중의 요청 처리, 재화 사용 재시도, 길드 해체 후 보상 처리도 검증하지 않았다.\n\n## 9. SDK에 필요한 공통 계약\n\n| 경계 | 관측한 뒤끝 계약 | 내부 플랫폼 제안 | 검증할 실패 |\n| --- | --- | --- | --- |\n| 호출 방식 | 베이스는 동기·콜백·SendQueue 예제가 공존한다. CDN·신형 리더보드의 일부 메서드는 SendQueue를 지원하지 않는다. | SDK의 호출·취소·시간 제한을 하나의 규칙으로 제공한다. | 앱 일시 정지, 취소 직후 응답, 콜백 중 예외 |\n| 응답 | 성공이 `200`, `201`, `204`로 다르다. 압축·신형 API에 따라 JSON 타입 표기도 다르다. | 성공 여부와 도메인 결과를 별도 필드로 둔다. | 빈 목록, 누락 키, 숫자 범위 초과 |\n| 식별자 | `inDate`, `owner_inDate`, `gamerIndate`, UUID, 파일 ID의 의미가 다르다. | 도메인별 타입을 구분한다. | 다른 종류의 ID를 전달한 요청 |\n| 재시도 | 인증 실패·권한 거부·한도 초과·정산 중 오류가 서로 다르다. | 읽기와 쓰기의 재시도 정책을 구분한다. | 서버 반영 후 응답 유실, 토큰 갱신 경합 |\n| 캐시 | 차트 로컬 저장과 리더보드 조회 표면이 있다. | 버전·주체·프로젝트를 캐시 키에 포함한다. | 계정·캐릭터·프로젝트 전환 후 이전 결과 적용 |\n| 사용량 | PlayerData는 읽기·쓰기 소비량을 반환한다. 트랜잭션은 일반 작업보다 DB 처리량이 높다. | 비용·지연·응답 크기를 같은 호출 단위로 관찰한다. | 대형 행, 비인덱스 검색, 잦은 전체 저장 |\n\n호출 방식과 성공 코드의 근거는 각 메서드 문서다. 비용 가이드는 호출마다 인증 처리량이 추가된다고 설명한다. 트랜잭션 DB 처리량은 일반 작업의 2배라고 안내한다. 이는 자체 플랫폼의 과금 규칙으로 그대로 옮길 의무가 없다. [요금 가이드](https://docs.backnd.com/faq/optimiz-guide/)\n\n## 10. 문서 충돌과 추가 검증 목록\n\n| 항목 | 확인한 충돌·공백 | 채택할 잠정 기준 | 필요한 검증 |\n| --- | --- | --- | --- |\n| 타인 게임정보 쓰기 | DB 소개는 불가. `UpdateV2`와 테이블 문서는 Public 수정 허용. | 보안 관점에서는 타인 쓰기가 가능하다고 가정한다. | 별도 유저 두 명으로 Public·Private CRUD 비교 |\n| 문자열 부분 검색 | DB 조회 예제는 string `Contains`를 사용한다. 연산자 문서는 미지원으로 명시한다. | 부분 검색을 제공 범위에 넣지 않는다. | SDK `1.0.0`에서 문자열·목록 Contains 구분 실행 |\n| 닉네임 경계 | 파라미터는 최대 20자. 오류 설명은 20자 이상 오류라고 쓴다. | 경계가 미확인임을 유지한다. | 19·20·21자와 Unicode 입력 |\n| 멀티 캐릭터 최신성 | 공개 GitHub의 옛 파일에는 프로젝트 생성 제한 경고가 남아 있다. 라이브 문서는 새 활성화 흐름을 설명한다. | 조사일의 라이브 페이지를 우선한다. | 콘솔의 실제 활성화 옵션과 SDK 컨텍스트 확인 |\n| 거래 원자성 | DB 트랜잭션 예제는 있으나 0행 조건 불일치와 잔액 하한 보장은 없다. | 거래 API를 별도 설계한다. | 동시 차감·0행 수정·중복 요청·응답 유실 |\n| 우편 지급 | 수령은 우편 삭제와 아이템 반환이다. 실제 DB 갱신은 별도다. | 재구성에서는 지급까지 서버에서 묶는다. | 수령 성공 직후 앱 종료와 재로그인 |\n| 운영 삭제 | 게임정보는 메타데이터 삭제와 데이터 삭제가 다르다. 신규 DB도 실제 삭제 시점이 따로 있다. | 삭제 상태·예정 시각·복원 범위를 표시한다. | 삭제 대기 중 동일 이름 재생성·백업 복원 |\n\n충돌의 원문은 [게임정보 수정](https://docs.backnd.com/sdk-docs/backend/base/game-information/update/using-indate/), [DB 비교](https://docs.backnd.com/guide/console-guide/database/introduction/), [DB 조회](https://docs.backnd.com/sdk-docs/database/query/), [DB 연산자](https://docs.backnd.com/sdk-docs/database/supported-operators/), [닉네임](https://docs.backnd.com/sdk-docs/backend/base/user/nickname/insert/), [멀티 캐릭터](https://docs.backnd.com/sdk-docs/backend/base/multi-character/what-is-multi-character/)에서 확인했다.\n\n공식 문서 저장소도 읽기 전용으로 참고했다. 확인한 커밋은 `fe41d27e1515d0c492ddc477e075342804841168`이다. 저장소는 문서 원본이며 제품 서버 소스가 아니다. 라이브와 내용이 다른 경우 라이브 본문을 우선했다. [공식 문서 저장소](https://github.com/afi-backnd/backnd_developer_docs)\n\n## 11. 내부 재구성의 최소 도메인\n\n이 절은 제안이다. 뒤끝의 내부 데이터 모델을 확인했다는 뜻은 아니다.\n\n| 도메인 | 최소 저장 대상 | 지켜야 할 규칙 |\n| --- | --- | --- |\n| 인증 | 계정, 공급자 연결, 기기, 세션 | 공급자 식별자는 프로젝트 범위에서 유일하다. |\n| 유저 운영 | 유저, 닉네임, 제재, 탈퇴 요청 | 제재·삭제의 대상과 시점을 구분한다. |\n| 게임 상태 | 스키마, 소유 데이터, 공용 상태, 변경 버전 | 클라이언트의 권한과 값 범위를 서버가 검사한다. |\n| 콘텐츠 | 차트, 파일 버전, 배포 묶음, 활성 버전 | 배포한 파일은 추첨·보상 기록에서 다시 식별할 수 있다. |\n| 재화·지급 | 잔액, 아이템, 거래, 지급 요청 | 같은 요청은 한 번만 반영한다. |\n| 경쟁 | 리더보드 정의, 시즌, 점수, 확정 결과 | 시즌 경계와 동점 규칙을 고정한다. |\n| 우편·쿠폰 | 발송, 수신자, 수령, 캠페인, 코드, 사용 | 수령·사용과 실제 지급이 분리되어 유실되지 않는다. |\n| 소셜 | 친구 요청, 친구 관계, 길드, 멤버십, 역할 | 정원·중복·권한 변경을 서버가 함께 검사한다. |\n\n첫 검증은 인증·권한·재화 트랜잭션·보상 수령의 네 경로에 집중한다. 이 경로를 확인한 뒤 콘텐츠 배포와 친구·길드 기능을 연결한다. UI, 서버 구현, SDK 코드는 이 조사에서 만들거나 변경하지 않았다.",filtered:!1,sourceHash:"11a60108678334999af82575435a4b3823f30714248fefc1672dc5416d99623a"},{id:"study-thebackend-02-operations-integrations-md",title:"뒤끝 운영 기능과 외부 연동 조사",path:"study/thebackend/02_OPERATIONS_INTEGRATIONS.md",category:"이전 조사",status:"역사적 조사·제안",body:`# 뒤끝 운영 기능과 외부 연동 조사

내부 플랫폼에는 게임 API와 함께 운영 데이터, 권한, 예약 작업, 결제 원장을 설계해야 한다. 뒤끝의 공개 계약은 이 경계를 보여준다. 내부 저장소와 실행 구조는 공개 문서만으로 확정할 수 없다.

- 확인일: 2026-11-03.
- 조사 범위: 공식 개발 문서의 운영 기능, 뒤끝펑션, 로그, 결제, 관리자 권한, 외부 연동.
- 조사 방법: 공개 문서 열람. 콘솔 로그인, 설정 변경, 발송, 결제, 함수 실행은 하지 않았다.
- 사실: 아래 \`확인\` 항목은 링크한 공식 문서에서 확인했다.
- 제안: 아래 \`내부 플랫폼 계약\`은 내부 팀 플랫폼을 만들 때 결정할 항목이다. 뒤끝 내부 구현을 뜻하지 않는다.
- 미확인: 공개 문서에서 계약을 찾지 못했거나 문서가 서로 다른 내용을 제시한 항목이다.

## 1. 현행 문서와 SDK 경계

**확인.** \`docs.thebackend.io\`는 \`docs.backnd.com\`으로 이동한다. 공식 첫 화면은 베이스·채팅·월드·데이터베이스·펑션을 별도 제품으로 나눈다. 베이스·월드·데이터베이스는 Unity SDK를 안내한다. 채팅은 Unity SDK, Unreal SDK, Platform API를 제공한다. 펑션은 .NET SDK를 안내한다. [공식 문서 시작점](https://docs.backnd.com/)

베이스 시작 문서는 \`Backend-5.18.17\`을 배포판으로 제시한다. 배포 날짜는 2026-09-10이다. 베이스 SDK에는 뒤끝매치 기능도 포함된다. [베이스 SDK 시작하기](https://docs.backnd.com/sdk-docs/backend/base/start-up/)

**내부 플랫폼 계약.** 클라이언트 SDK, 서버 SDK, 운영 API를 구분한다. 제품별 인증 방식과 지원 기능을 버전표로 관리한다. 특정 제품의 HTTP API를 전체 플랫폼 API로 해석하지 않는다.

**미확인.** 베이스 전체를 다루는 공개 REST 명세, 콘솔 전체를 제어하는 공식 관리 API, OpenAPI 파일은 이번 조사에서 확인하지 못했다. 이 사실은 해당 API가 없다는 증거가 아니다.

## 2. 프로젝트와 운영 환경

**확인.** 프로젝트는 이름, 서버 상태, 인증정보를 가진다. \`온라인\`과 \`오프라인\` 상태는 SDK 사용에 영향을 주지 않는다. \`점검\` 상태에서는 SDK가 서버에 보내는 모든 요청이 실패한다. [프로젝트 설정](https://docs.backnd.com/guide/console-guide/server-setting/project/)

다만 유저 접근 허용 목록에 등록한 유저는 점검 중에도 요청할 수 있다. 프로젝트 상태 가이드의 일반 설명과 이 예외를 함께 적용해야 한다. [유저 접근의 점검 예외](https://docs.backnd.com/guide/getting-started/how-to-use/user/)

프로젝트 복제는 인증정보·스토어 정보와 게임 정보 테이블을 선택해서 복사한다. 스키마 정의 테이블은 컬럼을 복사한다. 스키마 미정의 테이블은 이름만 복사한다. 문서는 사용자 데이터까지 복사한다고 설명하지 않는다. [프로젝트 복제 범위](https://docs.backnd.com/guide/console-guide/server-setting/project/)

**내부 플랫폼 계약.** 모든 운영 명령에 \`project_id\`를 요구한다. 개발·검증·운영 환경을 나눌지는 별도 결정한다. 복제 항목과 제외 항목을 목록으로 정한다. 점검 상태에서도 열어둘 조회 API를 명시한다.

**미확인.** 뒤끝의 프로젝트 안에 별도 개발·운영 환경이 있는지 확인하지 못했다. 프로젝트 복제를 배포 환경 승격 기능으로 해석하면 안 된다.

## 3. 관리자 계정, 역할, 보안

**확인.** 최고 관리자는 관리자 계정에 프로젝트와 역할을 부여한다. 관리자는 역할에 포함된 기능만 사용할 수 있다. 문서 한도는 관리자 25개와 역할 15개다. 기본 역할은 5개다. 요금 조회 권한은 역할과 별도로 부여한다. [관리자 계정과 역할](https://docs.backnd.com/guide/console-guide/account/admin-setting/)

관리자는 최고 관리자가 만든 전용 URL에서 로그인한다. 공지와 이벤트의 작성자는 로그인한 관리자의 닉네임을 사용한다. 역할을 수정하거나 삭제하면 페이지 새로고침이 필요하다고 안내한다. [관리자 로그인과 역할 변경](https://docs.backnd.com/guide/console-guide/account/admin-setting/)

OTP 앱을 쓰는 2단계 인증을 설정할 수 있다. 로그인할 때 6자리 인증 번호를 입력한다. 2단계 인증을 해제하려면 비밀번호가 필요하다. [보안 설정](https://docs.backnd.com/guide/console-guide/account/security/)

**내부 플랫폼 계약.** 관리자 계정, 프로젝트 접근권한, 동작별 권한을 서버에서 검사한다. \`조회\`, \`수정\`, \`발송\`, \`재화 지급\`, \`삭제\`, \`키 교체\` 권한을 분리할지 정한다. 운영 명령에는 행위자, 대상, 변경 전후 값, 실행 시각, 결과를 기록한다.

**미확인.** SSO, SCIM, IP 허용 목록, 관리자 세션 만료 시간, 상세 감사 로그의 보관 기간은 확인하지 못했다. 메뉴 노출 제한만으로 서버의 권한 검사 구조를 추정할 수 없다.

## 4. 프로젝트 키와 외부 인증정보

**확인.** 게임 SDK는 \`Client App Id\`와 \`Signature Key\`를 사용한다. \`Signature Key\`는 클라이언트 빌드에 들어간다. 문서는 새 키와 기존 키를 함께 사용한 뒤 기존 키를 삭제하는 교체 방식을 안내한다. 키 2개 동시 사용은 SDK 5.4.0 이상에서 지원한다. [인증정보](https://docs.backnd.com/guide/console-guide/server-setting/authenciation/)

키를 삭제하면 기존 키를 쓰는 빌드의 로그인이 실패한다. 삭제한 키는 같은 값으로 다시 발급할 수 없다. Google, Apple, Facebook, Steam, LINE의 인증정보도 프로젝트에 등록한다. Apple 계정 변경 웹훅을 받아 로그로 저장하는 설정이 있다. [인증정보와 Apple 계정 변경 로깅](https://docs.backnd.com/guide/console-guide/server-setting/authenciation/)

**내부 플랫폼 계약.** 공개 배포값과 서버 비밀값을 구분한다. 스토어 비밀값은 SDK 응답이나 로그에 넣지 않는다. 키마다 용도, 환경, 발급일, 마지막 사용일, 폐기 상태를 관리한다. 교체 중 구버전 빌드가 유지되는 기간을 정한다.

**미확인.** 뒤끝의 서명 알고리즘, 비밀값 암호화 방식, 키 접근 감사 정책은 확인하지 못했다. 클라이언트의 \`Signature Key\`를 서버만 아는 비밀키로 취급하면 안 된다.

## 5. 뒤끝펑션의 호출과 실행

**확인.** 뒤끝펑션은 개발사가 작성한 코드를 서버에서 실행한다. 베이스와 별개로 사용할 수 없다. 활성화하면 전용 인증키를 발급한다. 현행 개발 환경은 .NET 8.0이다. [펑션 시작하기](https://docs.backnd.com/sdk-docs/function/intro/)

베이스 SDK의 \`GetFunctionList()\`는 배포된 함수 목록을 반환한다. \`InvokeFunction(string funcName, Param body)\`는 이름과 인자로 함수를 실행한다. 인증키가 틀리면 \`401\`을 반환한다. 함수가 없으면 \`404\`를 반환한다. [함수 목록 조회](https://docs.backnd.com/sdk-docs/backend/base/function/list-functions/), [함수 실행](https://docs.backnd.com/sdk-docs/backend/base/function/execute-function/)

호출이 성공해도 함수 내부 오류는 \`200\`으로 돌아올 수 있다. 개발사가 \`returnValue\`에서 업무 성공과 실패를 별도로 판정해야 한다. [함수 실행의 응답 계약](https://docs.backnd.com/sdk-docs/backend/base/function/execute-function/)

서버의 진입점은 \`BackendFunction.dll\`의 \`BackendFunction.Bfunc.Function\`이다. 인자는 \`Stream\`과 \`ILambdaContext\`다. 동기 함수는 \`Stream\`, 비동기 함수는 \`Task<Stream>\`을 반환한다. 문서는 이 규칙을 바꾸면 실행이 실패할 수 있다고 안내한다. [펑션 진입점](https://docs.backnd.com/sdk-docs/function/basic/call/)

**데이터 흐름.** 게임 클라이언트가 함수 이름과 인자를 보낸다. 베이스가 펑션을 호출한다. 펑션은 업무 로직과 허용된 베이스 호출을 실행한다. 클라이언트는 전송 결과와 업무 결과를 각각 검사한다.

**내부 플랫폼 계약.** 함수별 입력 스키마, 호출자, 소유권, 업무 오류, 중복 실행 정책을 정한다. 재화와 아이템을 바꾸는 함수는 서버가 입력을 검증한다. 클라이언트가 보낸 가격·보상 수량을 그대로 신뢰하지 않는다.

## 6. 펑션의 제한, 배포, 관측

**확인.** 펑션은 호출 1회당 10초 제한이 있다. 배포 환경과 로컬 환경의 실행 시간이 다를 수 있다. Cold Start도 제한 시간에 영향을 준다. [실행 제한 시간](https://docs.backnd.com/sdk-docs/function/basic/timeout/)

펑션 안의 베이스 SDK는 \`Backend-5.18.1\`을 기준으로 만든다. 베이스 SDK의 모든 기능을 지원하지 않는다. 로그인·회원가입, 실시간 알림, 클라우드 세이브, \`My\` 계열 유저 데이터 함수에 제한이 있다. 베이스 호출은 동기 방식으로 요청한다. [펑션에서 지원하는 베이스 기능](https://docs.backnd.com/sdk-docs/function/request/request/)

\`Backend CLI\`는 설정·빌드·배포·삭제 명령을 제공한다. 콘솔에서는 배포 함수 목록, 함수별 로그 스트림, 상세 로그를 조회한다. 상세 로그는 기간 검색과 CSV 다운로드를 지원한다. [Backend CLI](https://docs.backnd.com/sdk-docs/function/cli/backend-cli/), [펑션 콘솔](https://docs.backnd.com/guide/console-guide/backnd-function/)

**내부 플랫폼 계약.** 빌드 산출물과 배포 버전을 기록한다. 호출마다 함수 버전, 요청 식별자, 호출자, 경과 시간, 업무 결과를 남긴다. 외부 호출의 제한 시간은 전체 실행 제한보다 짧게 설정한다. 함수 재배포와 되돌리기의 단위를 정한다.

**미확인.** 메모리 한도, 동시 실행 한도, 네트워크 접근 범위, 함수별 비밀값 주입, 배포 되돌리기, 자동 재시도, 전달 보장은 확인하지 못했다. \`ILambdaContext\`만으로 전체 내부 아키텍처를 AWS Lambda라고 확정하지 않는다.

## 7. 예약 작업의 확인 범위

**확인.** 공지·이벤트·우편·푸시는 제품 기능별 예약을 제공한다. 푸시는 일간·주간·월간 반복을 지원한다. 우편도 예약과 반복을 지원한다. [공지 예약](https://docs.backnd.com/guide/console-guide/backnd-base/notice/notice/), [이벤트 예약](https://docs.backnd.com/guide/console-guide/backnd-base/event/event/), [우편 예약](https://docs.backnd.com/guide/console-guide/backnd-base/post/adminstrator/), [푸시 예약](https://docs.backnd.com/guide/console-guide/backnd-base/push/)

**미확인.** 임의 펑션을 cron으로 호출하는 범용 스케줄러는 이번 조사에서 확인하지 못했다. 이벤트 게시 종료가 게임 이벤트 규칙의 실행을 보장한다는 계약도 찾지 못했다.

**내부 플랫폼 계약.** 범용 작업 실행이 필요하면 별도 요구사항으로 둔다. 시간대, 중복 실행 방지, 지연 실행, 취소, 실패 재시도, 최대 실행 시간을 정의한다. 예약 편집과 작업 실행이 겹쳤을 때 적용할 버전을 정한다.

## 8. 공지와 이벤트

**확인.** 현행 공지와 이벤트는 SDK 5.18.7 이상을 안내한다. 구버전 데이터도 조회할 수 있다. 즉시 게시와 30분 단위 예약을 지원한다. 언어별 제목·내용·이미지·링크를 작성하며 FALLBACK 언어를 정한다. 제목은 최대 60자, 내용은 최대 4,000자다. [공지](https://docs.backnd.com/guide/console-guide/backnd-base/notice/notice/), [이벤트](https://docs.backnd.com/guide/console-guide/backnd-base/event/event/)

임시 공지는 일반 공지와 별개이며 1건을 관리한다. 로그인 전에도 조회할 수 있다. 조회 결과에는 작성한 모든 언어의 내용이 들어간다. 이벤트에는 시작·종료 기간과 팝업 이미지가 있다. [임시 공지](https://docs.backnd.com/guide/console-guide/backnd-base/notice/notice/), [이벤트 기간](https://docs.backnd.com/guide/console-guide/backnd-base/event/event/)

\`NoticeListV2(limit, offset)\`는 공지를 페이지로 조회한다. 언어가 없거나 해당 언어 공지가 없으면 기본 언어 내용을 반환한다. 다음 페이지는 \`LastEvaluatedKey\`로 조회한다. [NoticeListV2](https://docs.backnd.com/sdk-docs/backend/base/operation/notice/get-list/)

**데이터 흐름.** 관리자가 콘텐츠와 게시 시각을 저장한다. SDK가 게시된 콘텐츠를 조회한다. 게임이 받은 이미지·본문·링크를 화면에 표시한다.

**내부 플랫폼 계약.** 콘텐츠의 운영 이름과 노출 제목을 구분한다. 언어 선택, FALLBACK, 공개 상태, 게시 시각, 이벤트 기간을 저장한다. 첨부파일의 크기·형식을 서버에서 검증한다. 게시 알림과 콘텐츠 재조회가 맡을 역할을 구분한다.

**미확인.** 이벤트 메뉴는 운영 콘텐츠를 관리한다. 출석·퀘스트·전투 규칙을 자동 실행하는 범용 이벤트 엔진이라는 근거는 없다.

## 9. 푸시와 기기 토큰

**확인.** Android 푸시는 Firebase Cloud Messaging을 사용한다. 현행 등록 가이드는 FCM API V1용 서비스 계정 JSON을 콘솔에 등록한다. iOS 가이드는 APNs용 p12 인증서와 암호를 등록한다. [Android 푸시 설정](https://docs.backnd.com/guide/console-guide/server-setting/push/for-android-new/), [iOS 푸시 설정](https://docs.backnd.com/guide/console-guide/server-setting/push/for-ios/)

SDK의 \`PutDeviceToken(deviceToken)\`은 푸시 수신을 활성화한다. 야간 푸시는 기본 미동의다. 별도 함수로 야간 동의를 바꾼다. [기기 토큰 등록](https://docs.backnd.com/sdk-docs/backend/base/push/android/active/)

콘솔은 즉시 발송, 30분 단위 예약, 일간·주간·월간 반복을 지원한다. 예약은 최대 30일 뒤까지 가능하다. 비활성 토큰에는 보내지 않는다. 국가별 문구, 기기 대상, 테스트 발송, 반복 종료를 지원한다. 같은 기기에 캐릭터가 여러 개 있으면 한 번 보낸다. [푸시 운영](https://docs.backnd.com/guide/console-guide/backnd-base/push/)

**데이터 흐름.** 기기가 공급자 토큰을 얻는다. SDK가 토큰과 수신 설정을 등록한다. 관리자가 대상과 문구를 등록한다. 예약 작업이 공급자에게 보낸다. 공급자가 기기로 전달한다.

**내부 플랫폼 계약.** 기기와 유저의 관계, 공급자, 개발·배포 환경, 마지막 토큰 갱신일, 수신 동의를 관리한다. 발송 접수·공급자 수락·기기 수신을 같은 상태로 취급하지 않는다. 만료 토큰 정리와 공급자 오류 재시도 정책을 정한다.

**미확인.** 전달 보장, 공급자별 재시도 횟수, 토큰 만료 정리 주기는 확인하지 못했다. 문서는 같은 시각에 푸시가 겹치면 기기로 도착하지 않을 수 있다고 안내한다.

## 10. 우편, 쪽지, 실시간 알림

**확인.** 관리자 우편은 차트 아이템을 전체 유저 또는 지정한 유저에게 보낸다. 지정 대상은 최대 1,000명이다. 차트의 우편 사용 설정이 필요하다. 국가별 문구는 최대 5개다. 아이템은 국가와 무관하게 같다. 우편 삭제는 수령한 아이템을 회수하지 않는다. [관리자 우편](https://docs.backnd.com/guide/console-guide/backnd-base/post/adminstrator/)

쪽지는 \`SendMessage(gamerIndate, contents)\`로 보낸다. 닉네임이 필요하다. 글자 수와 보관 개수는 소셜 설정을 따른다. 자신에게 보내기, 닉네임 없음, 수신함 가득 참, 길이 초과는 다른 오류로 돌아온다. [쪽지 보내기](https://docs.backnd.com/sdk-docs/backend/base/message/sending/), [소셜 설정](https://docs.backnd.com/guide/console-guide/server-setting/social/)

실시간 알림은 유저 행동과 시스템 변화를 클라이언트에 전달한다. 콘솔에서 기능을 먼저 활성화한다. [실시간 알림 설정](https://docs.backnd.com/guide/console-guide/server-setting/realtime-notify/)

**내부 플랫폼 계약.** 우편의 발송·수령·아이템 지급을 별도 기록한다. 같은 우편을 다시 수령해도 아이템은 한 번만 지급한다. 쪽지 보관 한도와 우편 만료를 구분한다. 알림을 놓친 클라이언트는 저장된 상태를 다시 조회한다.

**미확인.** 실시간 알림을 영속 메시지 큐나 재접속 후 재전달 보장으로 해석할 근거는 없다. 우편 종류별 상세 수령 계약은 게임 데이터 조사와 함께 확인해야 한다.

## 11. 고객 문의와 약관

**확인.** 1:1 문의는 웹뷰 방식과 함수 방식을 제공한다. 파일 첨부는 웹뷰 방식에만 제공한다. 콘솔에서 문의 확인, 답변, 기본 양식, 삭제를 관리한다. 언어별 양식은 SDK 5.11.0 이상을 안내한다. 웹뷰에는 전용 플러그인이 필요하다. [운영 기능 안내](https://docs.backnd.com/guide/getting-started/how-to-use/operate-game/), [문의 콘솔](https://docs.backnd.com/guide/console-guide/backnd-base/inquiry/), [웹뷰 문의](https://docs.backnd.com/sdk-docs/backend/base/operation/question/using-webview/one-on-one/)

약관과 개인정보처리방침은 콘솔에서 작성한다. 간편 생성은 프로젝트 정보와 운영자가 입력한 항목으로 템플릿을 채운다. SDK의 현행 정책 조회 문서는 \`GetPolicyV3\`다. [약관 콘솔](https://docs.backnd.com/guide/console-guide/backnd-base/policy/), [정책 조회](https://docs.backnd.com/sdk-docs/backend/base/operation/get-policy/)

**내부 플랫폼 계약.** 문의는 유저·프로젝트·언어·상태·본문·첨부파일·답변·처리자를 연결한다. 문의 인증코드와 관리자 인증을 구분한다. 약관 문서 버전과 유저 동의 이력은 별도 저장한다. 문서를 게시했다는 사실만으로 유저가 동의했다고 기록하지 않는다.

**미확인.** 상담 SLA, 상담 배정, 태그, 문의 보관 기간, 동의 이력 기능은 확인하지 못했다. 간편 생성 템플릿이 내부 팀의 정책 검토를 대신하지는 않는다.

## 12. 게임 로그와 보관 정책

**확인.** \`InsertLogV2(logType, Param)\`는 게임 행동을 기록한다. 로그가 콘솔에 나오기까지 최대 5분이 걸릴 수 있다. 문서 한도는 \`Param\` 항목 100개와 로그 1MB다. 예약 키와 대소문자를 무시한 중복 키를 제한한다. V2 로그 본문 저장에는 DB 쓰기 처리량을 부과하지 않는다. [InsertLogV2](https://docs.backnd.com/sdk-docs/backend/base/game-log/insert/)

콘솔은 유저 식별자·닉네임·기간·행동 유형으로 로그를 찾는다. 로그인 성공·실패 로그를 제공한다. 실패 로그는 유저 대신 IP로 식별한다. 일반 로그 관리 문서는 3개월이 지난 로그를 조회할 수 없다고 설명한다. [로그 관리](https://docs.backnd.com/guide/console-guide/backnd-base/logs/game/)

로그 스키마는 프로젝트당 최대 500개 유형을 지원한다. 유형별로 보관 기간과 필드를 설정한다. 미정의 필드는 \`unknown_fields\`에 JSON으로 저장한다. 보관 기간을 줄이면 기존 로그에도 적용되어 지난 로그가 삭제된다. [로그 스키마](https://docs.backnd.com/guide/console-guide/backnd-base/logs/logs_schema/)

**내부 플랫폼 계약.** 로그 수집과 게임 상태 변경을 분리한다. 이벤트 종류, 발생 시각, 수집 시각, 유저·계정·캐릭터 식별자, SDK 버전을 기록한다. 스키마 변경과 보관 기간 변경을 감사 로그에 남긴다. 비밀값과 원본 인증 토큰은 수집하지 않는다.

**미확인.** 일반 로그의 3개월 조회 제한과 유형별 보관 기간의 정확한 관계를 확인하지 못했다. 보관 기간을 늘리면 이미 삭제한 로그도 복구된다고 해석하면 안 된다. 외부 로그 저장소로 자동 내보내는 계약도 확인하지 못했다.

## 13. 통계, 퍼널, 사용량

**확인.** 대시보드는 신규 유저, 전체 유저, 실행 횟수, DAU, MAU, 리텐션, 매출, 결제 유저 지표를 제공한다. 매출은 스토어 보고서 주기 때문에 이틀 전까지 제공한다. 결제 유저와 주문 지표는 뒤끝 영수증 검증을 사용해야 나온다. 멀티 캐릭터의 유저 지표는 계정 기준이다. [대시보드](https://docs.backnd.com/guide/console-guide/backnd-base/dashboard/)

퍼널 분석은 행동 유형과 단일 값 컬럼을 선택한다. 단계별 로그 개수의 비율을 표시한다. 유일값 목록은 자동 갱신되지 않는다. 새 값이 생기면 새로고침이 필요하다. [퍼널 분석](https://docs.backnd.com/guide/console-guide/backnd-base/logs/funnel/)

DB 사용량 안내는 베이스 호출의 인증 과정에도 읽기·쓰기가 발생한다고 설명한다. V2 로그, 차트, 확률, 펑션 호출에도 인증 비용은 별개다. 콘솔 조회도 DB 사용량을 만든다. [DB 사용량의 범위](https://docs.backnd.com/guide/getting-started/detail-backnd/db-usage/cosit-in-function/)

**내부 플랫폼 계약.** 지표마다 집계 단위, 기준 시간대, 유저 정의, 지연 시간을 기록한다. 로그 개수·유저 수·순서 있는 전환을 구분한다. 게임 운영 지표와 서버의 오류율·지연 시간·저장소 사용량을 별도 관측한다.

**미확인.** 대시보드의 정확한 갱신 간격, 지표별 계산식, 원시 데이터 내보내기, 경보 규칙, 서버 상태 SLO는 확인하지 못했다. 문서의 \`실시간\` 표현을 지연 0초로 해석하지 않는다.

## 14. 영수증 검증과 지급

**확인.** 현행 \`ValidateReceipt(ReceiptParam)\`는 Unity IAP 5.x를 지원한다. IAP 4.x는 Legacy 문서를 따른다. iOS는 StoreKit 2의 JWS 영수증을 사용한다. \`ReceiptParam\`은 스토어, 상품, 구독 여부, 게임 아이템 상세, 금액·통화를 담는다. 비로그인 검증은 \`SetGamerId\`를 사용한다. [영수증 검증](https://docs.backnd.com/sdk-docs/backend/base/receipt/validate-receipt/)

서버는 영수증과 상품 ID를 검증한다. \`409 UsedReceipt\`는 최초 검증의 \`details\`를 반환한다. 같은 영수증이 이미 검증됐다는 뜻이며, 지급 완료 증거는 아니다. 문서는 지급 여부를 별도 관리하라고 명시한다. Google·Apple 금액은 서버가 조회하며 ONE Store 금액은 직접 입력한다. [검증 결과와 중복 지급](https://docs.backnd.com/sdk-docs/backend/base/receipt/validate-receipt/)

공식 IAP 5.x 흐름은 스토어 연결 → 상품 조회 → 구매 → 구매 대기 → 검증 → 구매 확정이다. 검증 성공 뒤 \`ConfirmPurchase\`가 필요하다. 미완료 주문은 앱을 다시 시작할 때 재조회한다. [Unity Purchasing 연동](https://docs.backnd.com/sdk-docs/backend/base/receipt/unity-iap5-example/)

**내부 플랫폼 계약.** 주문 원장에 프로젝트·스토어·거래 ID·유저·상품·검증 결과·지급 상태·확정 상태를 기록한다. 같은 거래 ID의 지급은 한 번만 성공한다. 지급 기록과 재화 변경은 함께 확정한다. 응답이 끊겨도 서버가 지급 여부를 다시 판정할 수 있어야 한다.

**미확인.** 뒤끝 검증 기록과 게임 재화 변경이 하나의 트랜잭션으로 묶인다는 보장은 찾지 못했다. \`AddDetail\`의 아이템 이름을 서버 상품 카탈로그의 대체로 사용하면 안 된다.

## 15. 환불 관리

**확인.** 환불 관리는 Google Play·App Store·ONE Store의 환불 완료 웹훅 이후를 다룬다. 환불 요청과 승인은 스토어에서 한다. 콘솔은 주문별 상태·메모·변경 이력을 관리한다. 회수 알림을 보냈다는 상태는 클라이언트의 수신 완료를 뜻하지 않는다. [환불 관리](https://docs.backnd.com/guide/console-guide/backnd-base/refund/management/)

상태는 \`환불완료\`, \`차단제외\`, \`알림발송\`, \`회수완료\`, \`회수제외\`, \`기타\`다. 회수 알림과 차단 기능은 PRO 요금제의 베이스 인증 유저에게 제공한다. 미인증 유저도 검증 때 보낸 유저 UUID로 환불을 연결할 수 있다. [환불 상태와 지원 범위](https://docs.backnd.com/guide/console-guide/backnd-base/refund/management/)

스토어별 영수증 검증을 먼저 연동해야 환불 웹훅 정보를 확인할 수 있다. Google은 토픽, Apple과 ONE Store는 전용 URL을 등록한다. 자동 알림과 자동 차단을 설정할 수 있다. [환불 환경설정](https://docs.backnd.com/guide/console-guide/backnd-base/refund/setting/)

**데이터 흐름.** 스토어가 환불 완료 이벤트를 보낸다. 플랫폼이 주문과 유저를 연결한다. 운영 정책에 따라 알림·회수·차단을 실행한다. 게임은 재화를 회수한 결과를 기록한다.

**내부 플랫폼 계약.** 웹훅 인증, 이벤트 중복 방지, 순서 역전, 미등록 주문을 처리한다. 재화 회수 실패와 운영자의 회수 제외 결정을 구분한다. 이미 쓴 재화에 적용할 정책은 게임별로 결정한다.

**구분할 사실.** 영수증 검증 화면의 수동 환불 표시는 게임과 실제 결제에 영향을 주지 않는다. 새 환불 관리 기능과 같은 동작으로 취급하면 안 된다. [기존 수동 환불 표시](https://docs.backnd.com/guide/console-guide/backnd-base/receipt/)

## 16. 웹숍과 외부 결제

**확인.** 웹숍은 Newplay와 Xsolla를 지원한다. 결제 완료 웹훅을 검증한 뒤 상품 정보를 \`webshop\` 우편으로 보낸다. 실제 아이템 지급은 클라이언트가 게임 정보·데이터베이스·펑션 로직으로 처리한다. 결제와 정산 정보는 각 웹숍 콘솔에서 확인한다. [웹숍 연동](https://docs.backnd.com/guide/console-guide/webshop/webshop-settings/)

웹숍 우편은 발송 후 최대 30일 동안 수령할 수 있다. 미수령 우편만 회수한다. 이미 수령한 우편은 회수하지 않는다. Xsolla의 구독 상품은 지원하지 않는다. 게이머 식별자는 UID 또는 UUID를 쓰되 프로젝트 안에서 기준을 통일하도록 안내한다. [웹숍 지급 정책](https://docs.backnd.com/guide/console-guide/webshop/webshop-settings/)

**내부 플랫폼 계약.** 외부 주문과 내부 유저 식별자를 연결한다. 웹훅 검증·주문 기록·지급 요청·수령·실제 지급을 구분한다. 공급자 이벤트를 재전송해도 같은 주문을 다시 지급하지 않는다. 취소가 수령보다 늦게 도착했을 때 적용할 회수 정책을 정한다.

**미확인.** Newplay와 Xsolla의 웹훅별 서명 규격, 재시도 간격, 순서 보장, 뒤끝의 중복 지급 방지 저장 방식은 확인하지 못했다.

## 17. 공개 HTTP 운영 API

**확인.** 채팅 Platform API는 별도 운영 대시보드를 위한 서버 API다. 클라이언트 게임 기능은 SDK로 구현해야 한다. 기본 주소는 \`https://platformapi.thebackend.io/chat/v1\`이다. 인증 헤더는 \`Authorization: Bearer YOUR_MASTER_TOKEN\`이다. 응답은 JSON이다. [Platform API 시작하기](https://docs.backnd.com/api-docs/chat/intro/)

공개 분류는 채널, 채팅 메시지, 신고, 유저 제재, 비속어다. 채널 문서는 Platform API가 오픈 채널 기능만 지원한다고 명시한다. 예시 계약은 \`GET /open_channel_groups\`, \`GET /open_channels\`, \`PUT /open_channels\`, \`DELETE /open_channels\`다. [채널 API](https://docs.backnd.com/api-docs/chat/channel/)

운영자는 \`POST /system_message\`로 특정 채널에 시스템 메시지를 보낼 수 있다. 본문은 채널 종류·그룹·이름·번호와 메시지를 담는다. [시스템 메시지 API](https://docs.backnd.com/api-docs/chat/message/)

**내부 플랫폼 계약.** 게임 SDK의 유저 토큰과 운영 API의 관리자 토큰을 분리한다. 운영 토큰을 게임 빌드에 포함하지 않는다. 서버는 프로젝트와 권한을 확인한 뒤 명령을 실행한다.

**미확인.** 베이스의 공지·푸시·결제·권한 API도 이 Master Token으로 호출할 수 있다는 근거는 없다. 콘솔이 쓰는 비공개 요청을 공식 공개 계약으로 취급하지 않는다.

## 18. 버전과 Legacy를 다루는 기준

| 영역 | 확인한 현행 경로 | 별도로 구분할 경로 |
|---|---|---|
| 공지 | \`NoticeListV2\`, SDK 5.18.7 이상 | \`[Legacy] 공지사항\`, 구버전 공지 관리 |
| 이벤트 | SDK 5.18.7 이상 언어별 콘텐츠 | \`[Legacy] 이벤트\`, 국가별 구버전 콘텐츠 |
| 정책 | \`GetPolicyV3\` | \`[Legacy] 약관 및 정책\` |
| 영수증 | \`ValidateReceipt\`, Unity IAP 5.x | Unity IAP 4.x의 Legacy 검증 |
| Android 푸시 | FCM API V1 서비스 계정 JSON | Android 푸시 등록 구버전 |
| 펑션 | .NET 8.0, 개발 툴 1.0.2 안내 | .NET 6.0 기반 기존 함수 |
| 게임 캐시 | TBC 제공 중단 안내 | SDK 5.18.7 이하 계속 이용 안내 |

출처: [공지](https://docs.backnd.com/guide/console-guide/backnd-base/notice/notice/), [이벤트](https://docs.backnd.com/guide/console-guide/backnd-base/event/event/), [정책](https://docs.backnd.com/sdk-docs/backend/base/operation/get-policy/), [영수증](https://docs.backnd.com/sdk-docs/backend/base/receipt/validate-receipt/), [Android 푸시](https://docs.backnd.com/guide/console-guide/server-setting/push/for-android-new/), [펑션 마이그레이션](https://docs.backnd.com/sdk-docs/function/migrate-from-old-version/).

TBC의 지원 상태는 [GetProductList의 제공 중단 안내](https://docs.backnd.com/sdk-docs/backend/base/cash/search-cash-item/)를 따른다. 아래 19.4절은 남아 있는 콘솔 메뉴와 과거 재화 계약을 구분한다.

**확인.** 펑션 문서는 .NET 6.0의 신규 생성과 업데이트 제한 날짜를 안내한다. 기존 함수의 실행 가능 여부와 새 배포 가능 여부를 구분해야 한다. [펑션 마이그레이션](https://docs.backnd.com/sdk-docs/function/migrate-from-old-version/)

게임 버전 관리는 강제·선택 업데이트 값을 SDK로 반환한다. 버전 숫자의 최댓값이 아니라 플랫폼별 마지막 등록이 적용된다. 한편 SDK 5.18.11 업데이트 기록에는 Steam 추가가 나온다. 콘솔 가이드의 iOS·Android 설명만으로 현행 플랫폼 목록을 확정하면 안 된다. [버전 관리](https://docs.backnd.com/guide/console-guide/backnd-base/versions/), [베이스 업데이트 목록](https://docs.backnd.com/update-note-backend/)

강제·선택 업데이트의 \`type\` 값은 콘솔 문서와 SDK 문서가 서로 반대로 설명한다. 아래 19.3절에 확인할 계약을 기록했다.

**내부 플랫폼 계약.** 새 내부 API에는 팀이 실제 사용하는 계약을 우선 구현한다. Legacy와의 호환 범위는 클라이언트별로 명시한다. 뒤끝의 과거 제약과 오래된 함수 이름을 모두 복제할 필요는 없다.

## 19. 추가로 대조한 운영 기능

공개 콘솔 JavaScript에는 \`baseUserGroup\`, \`baseRandomSearch\`, \`baseVersion\`, \`baseGameCash\`, \`baseSearchGamer\` 이름이 있다. 이 증거는 메뉴와 클라이언트 코드의 존재만 보여준다. 화면 접근, 관리 API 호출 성공, 현행 SDK 지원을 증명하지 않는다. [확보한 공개 콘솔 JavaScript](evidence/public-console/index-Cp2VxB6O.js)

계정·캐릭터·게임 데이터·리더보드의 기본 계약은 [코어 기능 조사](01_CORE_FEATURES.md)를 함께 읽는다. 이 절은 운영자가 설정을 바꿀 때 생기는 영향과 SDK 연결을 보충한다.

### 19.1 그룹 관리

**확인.** 그룹은 유저와 그룹별 리더보드를 나눈다. 기본 \`NULL\` 그룹이 있으며 별도 지정이 없는 신규 유저가 들어간다. 문서는 최대 500개 그룹을 안내한다. 그룹당 유저 50,000명은 권장값이다. 강제 한도라고 적지 않았다. [그룹 운영](https://docs.backnd.com/guide/console-guide/backnd-base/group/)

콘솔은 그룹별 유저·길드·리더보드·통계를 조회한다. 유저와 길드를 다른 그룹으로 옮기거나 그룹을 통합할 수 있다. 이동 결과는 길드 유형과 리더보드 초기화 옵션에 따라 달라진다. 그룹 통합 후 기존 그룹의 미수령 리더보드 보상은 받을 수 없다. [그룹 이동과 통합](https://docs.backnd.com/guide/console-guide/backnd-base/group/)

SDK의 \`Backend.Group.Table.Get\`은 그룹 목록과 페이지 키를 반환한다. \`Backend.Group.Update(groupUuid, groupName, leaderboardValuePolicy)\`는 자신의 그룹을 바꾼다. 정책을 생략하거나 \`None\`을 선택하면 리더보드 순위·점수·집계 필드를 초기화한다. [그룹 목록](https://docs.backnd.com/sdk-docs/backend/base/group/get-table/), [그룹 변경](https://docs.backnd.com/sdk-docs/backend/base/group/update/)

**내부 플랫폼 계약.** 그룹을 데이터베이스의 물리 분할로 간주하지 않는다. 그룹 이동은 소속·길드·리더보드·랜덤 조회를 함께 확인하는 업무 명령으로 다룬다. 점수 유지와 초기화를 명시적으로 선택하게 한다. 통합 전 미수령 보상 정책을 정한다.

**미확인.** 그룹 통합의 원자성, 소요 시간, 실패 복구, 되돌리기 계약은 확인하지 못했다. 콘솔 문서는 오픈형 길드의 이동 예외를 설명하지만 SDK의 그룹 변경 문서는 길드 유형을 나누지 않는다. 두 경로의 실제 차이는 호출로 대조해야 한다.

### 19.2 랜덤 조회

**확인.** 콘솔은 유저·길드 랜덤 조회를 합해 최대 50개 생성한다. 조회 대상 데이터는 SDK에서 등록한다. SDK 5.18.9 이상에서는 같은 그룹만 조회할지 전체를 조회할지 설정한다. 운영자는 대상을 검색·삭제하거나 전체 초기화할 수 있다. [랜덤 조회 운영](https://docs.backnd.com/guide/console-guide/backnd-base/select-random/)

신버전은 게임 정보 테이블을 직접 탐색하지 않고 전용 데이터를 쓴다. 대상이 자동 등록되지 않는다. 그룹 구분을 쓰면 그룹 이동 때 랜덤 조회 데이터도 옮긴다. 구버전 \`GetRandomUserInfo\`와 \`GetRandomGuildInfoV3\`는 신규 사용을 권장하지 않는다. [기존 랜덤 조회와 차이](https://docs.backnd.com/sdk-docs/backend/base/random-search/difference-with-original/)

\`SetRandomData(randomType, uuid, value)\`는 유저당 숫자 값 하나를 등록한다. \`GetRandomData(randomType, uuid, pivot, gap, count)\`는 기준값에 가까운 순위를 중심으로 대상을 찾는다. \`gap\`은 점수 차이가 아니다. 문서는 \`gap\`을 0-10, \`count\`를 1-10으로 보정한다고 설명한다. [랜덤 조회 등록](https://docs.backnd.com/sdk-docs/backend/base/random-search/insert-into-group/), [조회 조건](https://docs.backnd.com/sdk-docs/backend/base/random-search/get-item/)

**내부 플랫폼 계약.** 전용 조회 데이터의 등록·수정·삭제 주체를 정한다. 유저 탈퇴와 그룹 이동 때 낡은 항목을 정리한다. 빈 결과와 요청 개수보다 적은 결과를 성공으로 표현한다. 점수 범위 검색과 순위 범위 검색을 다른 계약으로 둔다.

**미확인.** 추출의 확률 분포, 최신 값 반영 시간, 동점 처리, 자기 자신 제외 규칙은 확인하지 못했다. 문서가 주장하는 응답 시간은 이번 조사에서 측정한 성능값이 아니다.

### 19.3 클라이언트 버전 운영

**확인.** 버전 관리는 플랫폼별 마지막 등록을 적용한다. 새 항목을 지우면 등록 순서상 이전 항목이 적용된다. \`GetLatestVersion(VersionInfo)\`는 \`version\`과 \`type\`을 반환한다. \`VersionInfo\`에는 GooglePlayStore·AppStore·OneStore·Steam이 있다. [버전 콘솔](https://docs.backnd.com/guide/console-guide/backnd-base/versions/), [버전 조회 SDK](https://docs.backnd.com/sdk-docs/backend/base/sdk-utils/get-project-version/)

**미확인.** 콘솔 가이드는 \`type=1\`을 강제, \`type=2\`를 선택으로 설명한다. SDK 응답 표는 \`type=1\`을 선택, \`type=2\`를 강제로 설명한다. SDK 본문에는 Steam 선택값과 Android·iOS에서만 작동한다는 설명도 함께 있다. 실제 SDK·스토어 조합에서 값을 확인하기 전까지 어느 설명도 실행 계약으로 확정하지 않는다.

**내부 플랫폼 계약.** 버전 문자열, 배포 채널, 최소 지원 버전, 권장 버전을 구분한다. 등록 순서와 버전 비교 규칙을 정한다. 업데이트 정책은 이름이 있는 값으로 표현한다. SDK가 서버 정책을 받아 어떤 화면과 접근 제한을 적용할지 정한다.

### 19.4 게임 캐시와 TBC

**확인.** 게임 캐시는 성능을 위한 cache가 아니다. \`TBC\`는 The Backend Coin이라는 게임 재화다. 과거 계약은 영수증 검증으로 충전하고 캐시 아이템을 구매하는 방식이다. 콘솔에서는 상품별 TBC, 아이템, 거래 내역과 관리자 지급·회수를 관리한다. [캐시 운영 가이드](https://docs.backnd.com/guide/console-guide/backnd-base/cash/)

현행 SDK 문서는 TBC 기능의 제공 중단을 명시한다. SDK 5.18.7 이하에서는 기존 방식으로 계속 이용할 수 있다고 안내한다. 대상에는 \`GetProductList\`, \`ChargeTBC\`, \`UseTBC\` 문서가 포함된다. 메뉴가 남아 있어도 현행 SDK의 지원 기능으로 세면 안 된다. [아이템 목록과 중단 안내](https://docs.backnd.com/sdk-docs/backend/base/cash/search-cash-item/), [충전과 중단 안내](https://docs.backnd.com/sdk-docs/backend/base/cash/recharge-tbc/), [구매와 중단 안내](https://docs.backnd.com/sdk-docs/backend/base/cash/purchase-using-tbc/)

**내부 플랫폼 계약.** TBC 호환은 기존 게임이 이 계약을 사용할 때만 요구한다. 새 게임은 유상·무상 재화, 충전·사용·취소·관리자 조정을 원장으로 기록할지 결정한다. 영수증 검증만 필요한 게임에 TBC 상점을 함께 만들지 않는다.

**미확인.** 구버전 유지 기간, 신규 프로젝트의 콘솔 접근 여부, 기존 TBC 잔액의 공식 이전 절차는 확인하지 못했다.

### 19.5 유저 검색과 정보 찾기

**확인.** 운영자의 유저 검색은 UUID·계정 ID·닉네임과 상세 조건을 사용한다. 상세 조건에는 가입 유형, 계정 상태, 국가, OS, 기기, 가입일, 최근 접속일, 메모가 있다. 이 동작은 게임 안의 다른 유저 검색과 다르다. [관리자 유저 검색](https://docs.backnd.com/guide/console-guide/backnd-base/users/basic/)

게임 SDK의 \`GetUserInfoByNickNameV2\`는 닉네임·inDate·최근 접속일·길드·국가 코드·그룹을 조회한다. 관리자용 계정 정보 전체를 반환하는 API로 해석하면 안 된다. [게임 유저 검색 SDK](https://docs.backnd.com/sdk-docs/backend/base/find-user/find-by-nickname-v2/)

콘솔의 \`유저 정보 찾기\`는 커스텀 계정의 복구 이메일 템플릿을 관리한다. 정보 찾기용 이메일이 먼저 등록되어 있어야 한다. 아이디 찾기와 비밀번호 초기화는 합해 유저당 하루 5회로 제한한다. SDK 5.11.0 이상은 언어별 템플릿을 사용한다. [유저 정보 찾기](https://docs.backnd.com/guide/console-guide/backnd-base/search-user/)

**내부 플랫폼 계약.** 관리자 조회, 게임 유저 검색, 계정 복구를 별도 권한과 API로 둔다. 복구 요청에는 발송 한도와 반복 요청 정책을 적용한다. 복구 이메일 변경과 비밀번호 변경을 감사 기록에 남긴다. 관리자 검색 결과에서 노출할 개인정보를 정한다.

**증거 범위.** 공개 JavaScript의 \`baseSearchGamer\`에 있는 \`findIdTitle\`은 복구 템플릿 코드와 연결된다. 이름만으로 일반 유저 검색 기능으로 분류하지 않았다. 각 SDK 메서드의 컴파일·응답과 복구 이메일 발송은 실행하지 않았다.

## 20. 내부 구현 전에 확정할 계약

아래 항목은 구현 제안이다. 뒤끝의 내부 설계나 사용자가 승인한 구현 범위를 뜻하지 않는다.

| 경계 | 최소 결정 항목 | 완료를 확인할 증거 |
|---|---|---|
| 프로젝트 | 프로젝트 식별자, 환경, 점검 정책, 복제 범위 | 다른 프로젝트 데이터에 접근할 수 없는 검사 |
| 운영 권한 | 역할, 동작 권한, 관리자 인증, 감사 기록 | 권한이 없는 발송·삭제가 거부되는 검사 |
| 그룹 | 이동, 통합, 길드 유형, 순위·보상 유지 정책 | 그룹 이동 전후 소속·점수·미수령 보상을 확인하는 검사 |
| 랜덤 조회 | 등록 주체, 그룹 범위, 순위 범위, 데이터 정리 | 빈 결과·동점·이동·탈퇴를 확인하는 검사 |
| 버전 | 스토어, 등록 순서, 최소·권장 버전, 업데이트 유형 | 실제 SDK의 반환값과 화면 동작을 대조하는 검사 |
| 계정 복구 | 인증 수단, 발송 한도, 언어, 감사 기록 | 반복 요청·없는 계정·복구 성공을 구분하는 검사 |
| 재화 | 유상·무상 구분, 원장, 관리자 조정, Legacy 호환 | 충전·사용·회수의 잔액과 기록을 대조하는 검사 |
| 서버 함수 | 입력, 호출자, 업무 결과, 제한 시간, 버전 | 업무 실패와 전송 실패를 나눠 확인하는 검사 |
| 예약 | 시간대, 취소, 중복 실행, 지연 실행, 재시도 | 같은 작업이 두 번 실행돼도 효과가 한 번만 남는 검사 |
| 콘텐츠 | 언어, FALLBACK, 게시 시각, 첨부 제한 | 언어 없음·예약 전후·비공개 상태를 확인하는 검사 |
| 메시지 | 기기 토큰, 동의, 발송 결과, 우편 수령 | 중복 수령·만료·알림 누락을 확인하는 검사 |
| 로그 | 스키마, 지연, 개인정보, 보관 기간 | 기간 축소와 미정의 필드를 확인하는 검사 |
| 지표 | 계정·캐릭터 기준, 시간대, 갱신 지연 | 같은 원시 이벤트로 같은 집계값을 얻는 검사 |
| 결제 | 거래 식별자, 검증, 지급, 확정, 복원 | 검증 직후 연결이 끊겨도 누락·중복 지급이 없는 검사 |
| 환불·웹숍 | 웹훅 인증, 중복, 순서, 회수 상태 | 중복·지연 이벤트를 넣어 주문 상태를 확인하는 검사 |

## 21. 조사 한계와 다음 확인

공개 문서 열람으로 기능의 존재와 SDK 계약을 확인했다. 실제 네트워크 요청, 응답 지연, 서버 부하, 결제 공급자 연동은 실행하지 않았다. 따라서 동작 검증이나 성능 검증을 통과했다고 판단하지 않는다.

공개 콘솔 코드도 열람했다. 인증 후 화면에는 접근하지 못했다. 메뉴 이름과 문서 절의 개수는 검증한 제품 기능 수가 아니다. 전체 기능을 복제할 수 있다고 판단하려면 화면·SDK·운영 API의 공백을 추가로 대조해야 한다.

구현 전에 다음 항목을 확인해야 한다.

1. 팀이 사용할 게임 엔진, SDK 버전, 베이스·채팅·월드의 조합을 고정한다.
2. 공지의 언어 기준, 로그 보관 기간, 버전의 업데이트 유형처럼 문서가 다른 항목을 실제 콘솔과 SDK로 대조한다.
3. 함수 입력 검증, 결제 지급, 환불 회수의 서버 권한 경계를 정한다.
4. 스토어 테스트 환경에서 중복 주문, 연결 끊김, 재시작, 환불 웹훅을 확인한다.
5. 운영 API와 게임 API의 권한 검사를 각각 검증한다.

이 문서는 구현과 설정을 바꾸지 않는다. 조사에서 확인한 기능은 내부 플랫폼의 요구사항 목록으로 옮긴 뒤 우선순위를 정한다.`,filtered:!1,sourceHash:"18a0c9e1a7576ee7b5a0ad35a8cb5ceb5af090b1f307268c109f4ae7040a4c4c"},{id:"study-thebackend-03-realtime-md",title:"뒤끝 매치·채팅·월드 조사",path:"study/thebackend/03_REALTIME.md",category:"이전 조사",status:"역사적 조사·제안",body:`# 뒤끝 매치·채팅·월드 조사

뒤끝 매치는 TCP 중계와 매칭을 제공한다. 현행 채팅과 월드는 별도 SDK와 실행 구조를 사용한다.
매치의 슈퍼 게이머를 전용 게임 서버로 해석하면 안 된다. 월드는 개발사가 작성한 서버 로직을 전용 서버에서 실행할 수 있다.

조사 기준일은 2026-11-03이다. 공식 문서와 공개 문서 원본을 읽었다. SDK 실행, 패킷 관찰, 부하 검사는 실행하지 않았다.
콘솔 화면과 설정은 이 문서에서 직접 확인하지 않았다.

## 1. 근거와 세대 구분

\`https://docs.thebackend.io/\`는 조사 당일 \`https://docs.backnd.com/\`으로 이동했다.
현행 매치 문서는 베이스 SDK \`5.18.17\` 아래에 존재한다. 홈페이지 제품 목록에 매치가 없다는 이유만으로 서비스 종료를 판단할 수 없다.
[공식 문서](https://docs.backnd.com/), [매치 구조](https://docs.backnd.com/sdk-docs/backend/match/architecture/)

공식 공개 원본의 기준 커밋은 \`fe41d27e1515d0c492ddc477e075342804841168\`이다.
이 저장소는 문서 원본이며 서버나 SDK의 구현 소스가 아니다.
웹 페이지마다 표시 버전이 다를 수 있으므로, 실제 연동에서는 설치한 SDK의 버전도 확인해야 한다.
[공식 문서 원본](https://github.com/afi-backnd/backnd_developer_docs/tree/fe41d27e1515d0c492ddc477e075342804841168)

| 대상 | 확인한 범위 | 계약 경계 | 세대 판단 |
| --- | --- | --- | --- |
| 뒤끝 매치 | 베이스 \`5.18.17\` 문서 | 매칭 서버와 인게임 서버, \`Backend.Match\` | 현행 문서가 존재함 |
| 채팅 | Unity SDK \`1.4.4\` 시작 문서 | \`BackndChat.ChatClient\`와 채팅 서버 | 신버전 채팅 |
| 뒤끝챗 | 베이스 SDK의 \`[지원 종료]\` 항목 | 기존 \`Backend.Chat\` 계열 | 2025-03-01 서비스 종료 |
| 월드 | SDK \`0.2.0\` 문서 | \`NetworkManager\`, 전용 서버, 동기화 API | 매치와 별도 제품 |

구형 뒤끝챗은 2025-02-28까지만 기존 활성화 프로젝트에서 이용할 수 있었다.
2025-03-01부터 기존 프로젝트도 이용할 수 없다고 공식 문서가 명시한다.
구형 뒤끝챗의 연결 API와 신버전 채팅의 API를 섞지 않는다.
[지원 종료 공지](https://docs.backnd.com/sdk-docs/backend/chat/start-up/), [채팅 시작하기](https://docs.backnd.com/sdk-docs/chat/intro/)

## 2. 매치가 제공하는 기능

매치는 베이스 SDK에 포함된다. 접속 전에 베이스 로그인과 닉네임 설정이 필요하다.
매치만 단독으로 사용할 수 없으며, 시작 문서는 \`.NET 4\` 환경을 요구한다.
[매치 시작하기](https://docs.backnd.com/sdk-docs/backend/match/start-up/)

매칭 방법은 \`Random\`, \`Point\`, \`MMR\`이다.
\`Random\`은 점수 조건 없이 매칭한다. \`Point\`는 콘솔에 설정한 점수를 사용한다.
\`MMR\`은 Elo 규칙으로 점수를 계산한다.
[매치 관리](https://docs.backnd.com/guide/console-guide/backnd-match/basic/)

매치 관리 문서는 카드 최대 10개를 설명한다.
유형은 일대일, 팀전, 개인전이다. 팀전은 최대 10명을 수용하며, 개인전은 3명부터 10명까지다.
\`MMR\` 개인전 카드는 생성할 수 없다고 명시한다.
시즌은 주간, 월간, 기간 없음으로 나뉜다.
[매치 관리](https://docs.backnd.com/guide/console-guide/backnd-match/basic/)

매칭 범위는 최초 점수 범위에서 시작한다. 대기 시간이 지나면 설정한 증감 값만큼 최대 범위까지 넓어진다.
시작 대기 시간, 방의 유효 시간, 샌드박스 전환 시간은 콘솔 정책이다.
샌드박스는 인원이 모자라도 현재 모인 사용자로 게임을 시작한다.
부족한 AI의 생성과 로직은 개발사가 클라이언트에서 구현한다.
[매치 관리](https://docs.backnd.com/guide/console-guide/backnd-match/basic/), [샌드박스 매칭](https://docs.backnd.com/sdk-docs/backend/match/using-sandbox/)

### 2.1 방과 권한

대기방은 매칭 서버에 존재한다. 게임방은 인게임 서버에 존재하며 대기방과 별개다.
혼자 매칭해도 대기방을 먼저 생성해야 한다.
대기방을 만든 사용자가 방장이 된다.
[매칭 서버 구조](https://docs.backnd.com/sdk-docs/backend/match/server/architecture/), [게임방 접속](https://docs.backnd.com/sdk-docs/backend/match/ingame-server/join-session/join-room/)

방장은 매칭 신청, 신청 취소, 강퇴, 대기방 삭제 권한을 가진다. 방장 권한은 넘길 수 없다.
서버는 매칭이 성사되면 참여자 중 한 명을 슈퍼 게이머로 무작위 지정한다.
슈퍼 게이머가 끊기면 서버가 남은 참여자 중 한 명을 다시 지정한다.
[방장과 슈퍼 게이머](https://docs.backnd.com/sdk-docs/backend/match/supervisor-and-superuser/)

### 2.2 주요 계약

| 단계 | 요청 또는 입력 | 완료를 판단하는 근거 | 주의할 계약 |
| --- | --- | --- | --- |
| 카드 조회 | \`GetMatchList()\` | 카드 \`inDate\`, 유형, 시간 설정 | 화면의 카드 이름과 식별자를 구분 |
| 매칭 서버 접속 | \`JoinMatchMakingServer(out errorInfo)\` | \`OnJoinMatchMakingServer\` | 반환값 \`true\`는 소켓 연결만 의미 |
| 대기방 생성 | \`CreateMatchRoom()\` | 생성 이벤트 | 생성자가 방장이며 자동 입장 |
| 초대와 입장 | 닉네임으로 초대, 초대 수락 | 대기방 이벤트와 사용자 목록 | 다인 대기방은 팀전만 신청 가능 |
| 매칭 신청 | \`RequestMatchMaking(matchType, matchModeType, matchCardIndate)\` | \`OnMatchMakingResponse\` | 신청자는 방장이어야 함 |
| 인게임 서버 접속 | 서버 주소, 포트, \`isReconnect=false\` | \`OnSessionJoinInServer\` | 소켓 연결과 인증 완료는 별개 |
| 최초 게임방 입장 | \`JoinGameRoom(roomToken)\` | 게임방 입장과 세션 목록 이벤트 | 인게임 서버 인증 이후 요청 |
| 게임 데이터 송신 | \`SendDataToInGameRoom(byte[])\` | 수신 이벤트 | 보낸 사용자도 브로드캐스트 수신 |
| 결과 제출 | \`MatchEnd(MatchGameResult)\` | \`OnMatchResult\` | 성공과 시간 초과를 구분 |

계약의 근거는 [접속 요청](https://docs.backnd.com/sdk-docs/backend/match/server/join-match-making-sever/join-server/), [매칭 신청](https://docs.backnd.com/sdk-docs/backend/match/server/request-match/request-match/), [인게임 접속](https://docs.backnd.com/sdk-docs/backend/match/ingame-server/join-game-server/join-server/), [결과 제출](https://docs.backnd.com/sdk-docs/backend/match/ingame-server/result/match-result/)이다.
요청 함수가 반환했다고 다음 단계가 완료된 것은 아니다. 각 단계의 인증 결과와 이벤트를 확인해야 한다.

### 2.3 연결 상태 흐름

아래 상태명은 문서의 동작을 정리한 학습용 이름이다. SDK가 같은 이름의 상태 열거형을 제공한다는 뜻은 아니다.

1. \`베이스 인증 완료\`: 로그인과 닉네임을 확보한다.
2. \`매칭 소켓 연결\`: 매칭 서버 접속 요청이 소켓을 연다.
3. \`매칭 인증 완료\`: 접속 이벤트가 성공을 알린다.
4. \`대기방 참여\`: 대기방을 생성하거나 초대를 수락한다.
5. \`매칭 대기\`: 방장이 카드를 지정해 신청한다.
6. \`매칭 성사\`: 서버 주소, 포트, 룸 토큰을 받는다.
7. \`인게임 인증 완료\`: 인게임 서버의 접속 이벤트를 확인한다.
8. \`게임방 참여\`: 최초 접속에서는 룸 토큰으로 입장한다.
9. \`게임 진행\`: 전체 입장 후 시작 이벤트를 받고 데이터를 주고받는다.
10. \`결과 종합\`: 결과 제출 방식에 따라 서버가 결과를 저장한다.
11. \`접속 종료\`: 게임 종료 후 인게임 연결이 끊긴다.

매칭된 사용자가 1분 안에 모두 입장하지 않으면 서버가 게임방을 폐기한다.
모두 입장하면 콘솔에 설정한 시작 대기 시간 뒤에 시작 이벤트를 보낸다.
[게임방 접속](https://docs.backnd.com/sdk-docs/backend/match/ingame-server/join-session/join-room/), [인게임 서버 구조](https://docs.backnd.com/sdk-docs/backend/match/ingame-server/architecture/)

### 2.4 송수신과 성능 제약

매치는 TCP 서버·클라이언트 구조다. SDK는 송신 큐와 수신 큐를 사용한다.
\`Poll()\`이 송신과 수신 이벤트 처리를 진행한다. \`Poll()\` 호출이 멈추면 이벤트도 호출되지 않는다.
공식 문서는 Unity \`Update()\`에서 호출하는 방법을 권장한다.
[매치 구조](https://docs.backnd.com/sdk-docs/backend/match/architecture/), [Poll](https://docs.backnd.com/sdk-docs/backend/match/pingpong/)

일반 클라이언트의 송신 제한은 초당 10KB다. 슈퍼 게이머의 제한은 초당 30KB다.
문서는 절대시간의 1초 구간을 기준으로 설명한다.
제한을 넘은 데이터는 SDK가 버리며 자동으로 재전송하지 않는다.
이 수치는 공개 계약이며, 이번 조사에서 측정한 처리량은 아니다.
[쓰로틀링](https://docs.backnd.com/sdk-docs/backend/match/note/throttling/)

직렬화 방식은 개발사가 정한다. 문서는 JSON과 FlatBuffers를 예로 든다.
매치가 임의의 게임 데이터를 받아 서버에서 게임 규칙을 자동 검증한다는 근거는 없다.
입력 빈도, 패킷 크기, 상태 복구 방식은 게임 요구에 맞춰 따로 정해야 한다.
[패킷 디자인](https://docs.backnd.com/sdk-docs/backend/match/note/packet-design/), [데이터 송신](https://docs.backnd.com/sdk-docs/backend/match/ingame-server/send-data/send-data-to-game-room/)

시작 문서의 평균 50ms 이하 설명은 장비와 통신 환경에 따라 달라진다.
이를 자체 플랫폼의 지연 시간 목표나 보장값으로 채택하지 않는다.
[매치 시작하기](https://docs.backnd.com/sdk-docs/backend/match/start-up/)

### 2.5 결과 종합과 서버 권위

기본 방식에서는 참여한 모든 사용자가 결과를 제출한다. 슈퍼 게이머 방식에서는 슈퍼 게이머만 제출한다.
서버는 제출한 결과를 종합하고 DB에 저장한다.
기본 방식에서 첫 결과 제출 후 15초 안에 전체 결과가 모이지 않으면 무효 처리할 수 있다.
[결과 제출](https://docs.backnd.com/sdk-docs/backend/match/ingame-server/result/match-result/), [결과 이벤트](https://docs.backnd.com/sdk-docs/backend/match/ingame-server/result/match-game-result/)

서버가 매칭, 룸 입장, 결과 형식을 관리하는 것과 게임 판정을 직접 계산하는 것은 다르다.
문서가 설명하는 매치 데이터 경로는 바이너리 중계이며, 결과는 클라이언트가 제출한다.
따라서 매치를 전투 판정까지 보장하는 서버 권위 구조로 단정할 수 없다.
[인게임 서버 구조](https://docs.backnd.com/sdk-docs/backend/match/ingame-server/architecture/)

### 2.6 재접속

통신이 30초 이상 원활하지 않으면 인게임 접속이 끊길 수 있다고 문서가 설명한다.
SDK는 통신 장애에서 자동 재접속을 시도한다. 시도가 실패하면 연결을 끊는다.
앱을 다시 실행한 경우에는 \`IsGameRoomActivate()\`로 진행 중인 게임을 조회한다.
[재접속 정의](https://docs.backnd.com/sdk-docs/backend/match/ingame-server/reconnect-game-server/architecture/)

조회가 성공하면 서버 주소, 포트, 룸 토큰과 매칭 정보를 받는다.
진행 중인 게임이 없으면 \`404\`, \`NotFoundError\`를 받는다.
재접속 요청에는 \`JoinGameServer(..., isReconnect=true, ...)\`를 사용한다.
성공하면 게임방까지 자동으로 재입장하므로 \`JoinGameRoom()\`을 다시 호출하지 않는다.
[진행 게임 조회](https://docs.backnd.com/sdk-docs/backend/match/ingame-server/reconnect-game-server/is-game-active/), [재접속 요청](https://docs.backnd.com/sdk-docs/backend/match/ingame-server/reconnect-game-server/reconnect/)

끊긴 상태에서 새 매칭을 신청하면 기존 게임은 패배 처리된다. 이후 기존 게임으로 돌아갈 수 없다.
다른 사용자가 결과를 제출해 게임을 끝낸 경우에도 재접속할 수 없다.
기존 참여자는 \`OnSessionOnline\`으로 다른 사용자의 복귀를 안다. 복귀한 본인에게는 이 이벤트가 오지 않는다.
[재접속 정의](https://docs.backnd.com/sdk-docs/backend/match/ingame-server/reconnect-game-server/architecture/), [다른 사용자 복귀](https://docs.backnd.com/sdk-docs/backend/match/ingame-server/reconnect-game-server/reconnect-success/)

연결 복귀와 게임 상태 복구는 따로 검증해야 한다.
끊긴 동안의 전체 메시지 재생이나 자동 스냅샷 복원 계약은 이 조사에서 확인하지 못했다.

## 3. 현행 채팅

신버전 채팅은 \`BackndChat.ChatClient\`와 \`IChatClientListener\`를 사용한다.
기본 인증은 베이스 사용자와 닉네임을 사용한다. 자체 인증 서버를 연결하는 방법도 있다.
\`ChatClient.Update()\`는 매 프레임 호출해야 수신 메시지와 콜백을 처리한다.
콜백은 \`Update()\` 또는 SDK 함수를 호출한 스레드에서 실행되므로 Unity 메인 스레드에서 호출한다.
[채팅 시작하기](https://docs.backnd.com/sdk-docs/chat/intro/)

### 3.1 채널과 메시지 계약

| 기능 | 주요 요청 | 결과 또는 식별자 | 확인한 제약 |
| --- | --- | --- | --- |
| 오픈 채널 입장 | \`SendJoinOpenChannel(group, name)\` | \`OnJoinChannel(ChannelInfo)\` | 그룹과 이름으로 구분 |
| 프라이빗 채널 생성 | \`SendCreatePrivateChannel(...)\` | 채널 번호 | SDK 생성은 프라이빗 타입만 지원 |
| 프라이빗 채널 입장 | \`SendJoinPrivateChannel(group, number, password)\` | \`OnJoinChannel\` | 비밀번호가 없으면 누구나 입장 가능 |
| 길드 채널 | \`SendJoinGuildChannel()\` | 베이스 길드 연동 | 커스텀 인증에서는 사용할 수 없음 |
| 채널 메시지 | \`SendChatMessage(group, name, number, message)\` | \`OnChatMessage(MessageInfo)\` | 콜백의 채널 정보를 기준으로 분배 |
| 귓속말 | \`SendWhisperMessage(gamerName, message)\` | \`OnWhisperMessage\` | 오프라인 상대와 차단 관계 오류 존재 |
| 숨김과 삭제 | 운영 기능에서 메시지 변경 | \`OnHideMessage\`, \`OnDeleteMessage\` | 메시지 표시 상태를 갱신 |

채널 생성과 입장은 서버 연결 완료 뒤에 요청한다. 생성 직후에는 아직 연결을 마치지 않았을 수 있다.
기본 채널의 \`OnJoinChannel\`은 연결을 확인할 수 있는 시점이다.
채널 이름은 중복될 수 있으므로 이름만으로 프라이빗 채널을 식별하지 않는다.
[채널](https://docs.backnd.com/sdk-docs/chat/channel/), [메시지](https://docs.backnd.com/sdk-docs/chat/message/)

메시지는 채널 식별자, 사용자 이름, 메시지 인덱스, 본문, UTC 시각, 메타데이터를 포함한다.
같은 콜백으로 복수 채널의 메시지를 받으므로, 수신자가 채널 정보를 확인해야 한다.
[메시지](https://docs.backnd.com/sdk-docs/chat/message/)

### 3.2 커스텀 인증

클라이언트가 자체 인증 서버에서 토큰을 받는다. 채팅 서버는 그 토큰을 자체 인증 서버로 전달한다.
자체 인증 서버는 \`uid\`와 \`nickname\`을 문자열로 응답한다. \`uid\`는 사용자마다 고유해야 한다.
요청은 \`POST\`이며, 헤더 \`token\`과 본문 \`source: thebackend-chat-api\`를 사용한다.
커스텀 인증을 사용해도 \`Chat UUID\`가 필요하다.
[커스텀 인증](https://docs.backnd.com/sdk-docs/chat/custom-auth/)

커스텀 인증의 \`language\`는 선택 항목이다. 사용자 간 차단에는 \`blockedPlayers\`의 계약을 따른다.
베이스 길드 자동 입장은 지원하지 않는다. 길드 대화를 만들려면 문서가 제안한 프라이빗 채널 방식을 검토한다.
[커스텀 인증](https://docs.backnd.com/sdk-docs/chat/custom-auth/), [채널](https://docs.backnd.com/sdk-docs/chat/channel/)

### 3.3 연결 끊김과 종료

SDK는 네트워크 변경과 일시적인 연결 끊김에서 자동으로 재연결한다.
각 채널에 \`OnLeaveChannel\`이 오며, 복귀하면 같은 채널에 \`OnJoinChannel\`이 다시 올 수 있다.
재연결은 1초 뒤 처음 시도한다. 이후 대기 시간은 10초, 20초 순으로 늘며 최대 120초다.
[채팅 시작하기](https://docs.backnd.com/sdk-docs/chat/intro/)

끊긴 동안 호출한 요청은 서버로 전달되지 않는다.
이전 연결에서 처리하지 못한 수신 메시지도 재연결 후 콜백으로 전달되지 않는다.
\`Update()\`가 10초 넘게 멈췄다가 재개되면 SDK가 재연결 대기 시간을 초기화한다.
앱 종료 전에는 \`Dispose()\`를 호출한다.
[채팅 시작하기](https://docs.backnd.com/sdk-docs/chat/intro/), [종료 처리](https://docs.backnd.com/sdk-docs/chat/quit/)

\`DUPLICATE_CONNECTION\`은 자동 재연결의 예외다.
다시 접속하려면 기존 인스턴스를 \`Dispose()\`하고 새 \`ChatClient\`를 생성해야 한다.
채널 정원, 비밀번호, 인증, 제재, 도배, 메시지 길이 오류도 구분한다.
각 길이 제한의 숫자는 이 문서에서 확인하지 못했다.
[에러 콜백](https://docs.backnd.com/sdk-docs/chat/error/)

### 3.4 운영 API와 버전 차이

채팅 Platform API는 서버 운영용 HTTP API다. 게임 클라이언트의 채팅 SDK를 대체하지 않는다.
기본 주소는 \`https://platformapi.thebackend.io/chat/v1\`이다.
인증에는 \`Authorization: Bearer\` 형식의 Master API Token을 사용한다.
이 토큰은 운영 서버에서 관리하는 계약으로 분리해야 한다.
[Platform API](https://docs.backnd.com/api-docs/chat/intro/)

\`1.4.4\`의 번역 콜백은 \`Dictionary<string, MessageInfo>\`를 받는다.
\`1.4.1\` 이하의 \`List<MessageInfo>\`와 다르다.
\`1.4.0\`부터 차단 목록 반환형도 \`List<BlockPlayerInfo>\`로 바뀌었다.
구버전 예제의 함수 이름만 복사해서 호환성을 판단하지 않는다.
[마이그레이션 가이드](https://docs.backnd.com/sdk-docs/chat/install/migration-guide/)

## 4. 월드의 멀티플레이 구조

월드는 지속형 게임 서버를 만드는 제품이다. 매치의 바이너리 중계와 별도 범위로 다룬다.
\`NetworkManager\`는 접속, 사용자 오브젝트 생성, 씬 전환을 관리한다.
실서비스에서는 Linux 전용 서버를 빌드해 배포한다. 호스트 모드는 개발과 검사에만 사용한다.
[월드 소개](https://docs.backnd.com/sdk-docs/worlds/welcome/), [NetworkManager](https://docs.backnd.com/sdk-docs/worlds/components/network-manager/), [빌드와 배포](https://docs.backnd.com/sdk-docs/worlds/build-deploy/)

### 4.1 권위와 동기화

- \`[Command]\`: 클라이언트 요청을 서버에서 실행한다. 요청 검증 코드는 개발사가 작성한다.
- \`[Server]\`: 게임 로직을 서버에서만 실행하도록 지정한다.
- \`[SyncVar]\`: 서버가 변경한 값을 클라이언트로 전달한다. 클라이언트 변경은 서버로 동기화되지 않는다.
- \`SyncList\`, \`SyncDictionary\`: 서버가 컬렉션을 바꾸고 클라이언트가 변경 이벤트를 받는다.
- \`ClientRpc\`, \`TargetRpc\`: 서버가 전체 대상 또는 특정 대상으로 호출을 보낸다.

[Command](https://docs.backnd.com/sdk-docs/worlds/attributes/command/), [Server](https://docs.backnd.com/sdk-docs/worlds/attributes/server/), [SyncVar](https://docs.backnd.com/sdk-docs/worlds/attributes/syncvar/), [컬렉션](https://docs.backnd.com/sdk-docs/worlds/attributes/synccollections/)

이 계약은 개발사가 서버 권위 구조를 구현할 수 있음을 보여준다.
실제 게임의 아이템 사용, 이동, 공격 검증까지 제품이 자동으로 보장한다는 뜻은 아니다.
예제에서도 서버가 아이템 보유 여부를 검사한 뒤 사용하도록 작성한다.
[Command의 서버 검증 예제](https://docs.backnd.com/sdk-docs/worlds/attributes/command/)

### 4.2 파티와 독립 씬

파티는 생성, 공개 참가, 초대, 수락, 거절, 탈퇴, 강퇴, 목록 조회를 제공한다.
파티장이 나가면 다음 멤버가 파티장이 된다. 마지막 멤버가 나가면 파티가 사라진다.
초대는 5분 뒤 만료된다. 이벤트 구독은 오브젝트 정리 시 해제한다.
[파티](https://docs.backnd.com/sdk-docs/worlds/advanced/party/)

\`NetworkScene\`은 파티 던전과 개인 공간처럼 독립된 씬을 만든다.
\`LoadNetworkScene()\`으로 입장하고 \`UnloadNetworkScene()\`으로 나온다.
정원 초과와 미등록 씬 오류를 구분하며, 빈 씬은 자동 정리한다.
빈 씬을 정리하는 정확한 대기 시간은 확인하지 못했다.
[NetworkScene](https://docs.backnd.com/sdk-docs/worlds/advanced/network-scene/)

월드가 매치의 \`Random\`, \`Point\`, \`MMR\` 카드를 그대로 재사용한다는 근거는 확인하지 못했다.
월드 소개의 자동 복구 설명만으로 세션 복귀와 게임 상태 복원 조건을 확정할 수도 없다.
월드의 재접속 유예 시간, 상태 복구 범위, 프로세스 장애 후 복구 계약은 후속 확인 항목이다.

## 5. 재구성할 때의 경계 제안

이 절은 자체 플랫폼을 만들 때 검토할 제안이다. 뒤끝 내부 구현을 확인한 사실이 아니다.

1. 인증, 매칭, 게임방, 채팅 연결을 서로 다른 상태로 기록한다.
2. 대기방과 게임방의 식별자와 권한을 분리한다.
3. 소켓 연결 성공과 사용자 인증 완료를 다른 사건으로 기록한다.
4. 게임 데이터 중계와 서버가 실행하는 게임 판정을 별도 기능으로 정한다.
5. 결과 제출 방식과 판정 충돌 정책을 명시한다.
6. 연결 복귀와 상태 복구의 완료 조건을 따로 정한다.
7. 전송 제한에 걸린 입력의 처리 정책을 게임 데이터 종류별로 정한다.
8. 채팅 운영 API의 토큰을 클라이언트 자격증명과 분리한다.

규모, 전송 주기, 허용 지연은 아직 결정하지 않았다.
공개 문서의 홍보 수치나 예제 기본값으로 자체 요구사항을 대신하지 않는다.

## 6. 검증 후보와 미확인 항목

아래 검사는 제안이며 실행하지 않았다. 대상 게임과 SDK 버전을 정한 뒤 완료 기준을 수치로 채운다.

| 대상 | 검사할 상황 | 관찰할 결과 | 아직 정하지 않은 기준 |
| --- | --- | --- | --- |
| 매칭 인증 | 잘못된 로그인 상태와 소켓 연결 성공 | 인증 완료 전 신청을 허용하지 않음 | 인증 제한 시간 |
| 권한 | 일반 사용자의 신청, 취소, 강퇴 | 방장 외 요청 거절 | 오류 분류와 재시도 정책 |
| 게임방 | 타인의 토큰, 중복 입장, 늦은 입장 | 권한과 방 수명 계약에 따른 거절 | 토큰 수명과 중복 요청 정책 |
| 데이터 중계 | 같은 입력을 순서대로 송신 | 수신 순서와 발신자 포함 여부 | 패킷 상한과 큐 상한 |
| 전송 제한 | 일반 사용자와 슈퍼 게이머 경계 | 초과 데이터 유실과 통지 방식 | 자체 제한값과 필수 입력 복구 |
| 결과 | 제출 누락, 상반된 결과, 중복 제출 | 성공, 무효, 오류를 구분 | 결과 멱등성과 충돌 규칙 |
| 매치 복귀 | 통신 끊김, 앱 재실행, 새 매칭 | 허용된 게임에만 복귀 | 상태 스냅샷과 재생 범위 |
| 채팅 복귀 | 오프라인 송신, 재입장, 중복 로그인 | 유실 계약과 복귀 예외를 확인 | 화면 복구와 중복 표시 기준 |
| 월드 권위 | 유효하지 않은 아이템과 공격 입력 | 서버가 입력을 거절 | 게임별 검증 규칙 |
| 자원 정리 | 반복 입장과 퇴장, 씬 변경 | 구독, 큐, 연결, 오브젝트 수 확인 | 메모리와 종료 시간 기준 |
| 성능 | 같은 기기·네트워크·방 인원·입력 | 지연 분포, 처리량, CPU, 메모리 | 목표값과 허용 회귀 폭 |

\`JoinGameServer\` 문서에는 포트 타입과 최초 접속 예제가 서로 다른 표기가 있다.
선언에는 \`string\`, 파라미터 표에는 \`ushort\`가 나온다. 최초 접속 설명은 \`false\`지만 예제에는 \`true\`가 있다.
실제 SDK의 시그니처와 최초 접속·재접속 검사를 우선해야 한다.
[인게임 서버 접속 요청](https://docs.backnd.com/sdk-docs/backend/match/ingame-server/join-game-server/join-server/)

이번 조사는 문서 계약을 확인했다. 실제 연결, SDK 호환성, 네트워크 복구, 게임 판정, 처리량은 확인하지 않았다.
제품 화면과 실행 코드는 바꾸지 않았으므로 UI 비교와 실행 성능 비교는 이 문서 작업의 대상이 아니다.`,filtered:!1,sourceHash:"309816775445977bc5b78731f2bf27f79ae6ef002bd49d02db7d073461d56066"},{id:"research-blueprint",title:"내부 게임 백엔드 플랫폼 재구성안",path:"study/thebackend/04_RECONSTRUCTION_BLUEPRINT.md",category:"이전 조사",status:"역사적 조사·제안",body:`# 내부 게임 백엔드 플랫폼 재구성안

내부 플랫폼은 운영 콘솔, 게임 API, 서버 업무 규칙, 실시간 서버를 함께 설계해야 한다. 콘솔 화면만 복제하면 게임이 사용하는 백엔드를 대체할 수 없다.
이 문서는 조사에서 도출한 설계 후보다. 구현 승인, 확정된 기술 선택, 개발 일정은 포함하지 않는다.
클라이언트 대상은 웹 기반 게임과 Android 배포로 구체화했다. 공통 키트와 연결할 경계는 [웹·Android 연동 조사](09_WEB_ANDROID_INTEGRATION.md)에 정리했다.

기준일은 2026-11-03이다. 원본 기능의 근거는 [핵심 기능](01_CORE_FEATURES.md), [운영과 외부 연동](02_OPERATIONS_INTEGRATIONS.md), [실시간 기능](03_REALTIME.md)에 있다.
기존 [Nakama 재구성안](../nakama/05_OWN_PLATFORM_ROADMAP.md)도 비교 대상으로 사용했다. 두 제품의 내부 구조가 같다는 뜻은 아니다.

## 1. 제품 경계

사용자는 내부 팀이 여러 게임 클라이언트를 연결하는 관리 서버를 원한다. 여기서는 게임 클라이언트와 게임 유저를 관리하는 플랫폼으로 해석했다.
거래처를 관리하는 CRM이나 기기를 원격 제어하는 제품인지는 확인하지 않았다.

| 경계 | 담당 기능 | 호출 주체 | 지켜야 할 규칙 |
| --- | --- | --- | --- |
| 운영 콘솔과 관리 API | 프로젝트, 유저 조회, 제재, 보상, 콘텐츠, 배포, 지표 | 내부 개발자와 운영자 | 관리자 인증과 동작별 권한 검사 |
| 게임 API와 클라이언트 SDK | 로그인, 프로필, 저장, 랭킹, 우편, 소셜, 콘텐츠 조회 | 게임 클라이언트 | 인증한 주체와 프로젝트 범위를 서버가 결정 |
| 서버 업무 규칙 | 재화, 아이템, 결제 지급, 보상 수령, 확률 추첨 | 게임 API와 관리자 명령 | 조건 검증과 중복 처리 방지 |
| 실시간 연결 | 채팅, 매칭, 방, 월드, 재접속 | 게임 클라이언트와 게임 서버 | 접속 상태와 영구 데이터를 구분 |
| 비동기 작업 | 푸시, 예약 발송, 통계 집계, 외부 통지 | 내부 작업 실행기 | 기한, 재시도, 중복 실행, 실패 기록 |

모든 경계를 처음부터 별도 서비스로 배포할 필요는 없다. 작은 내부 팀은 하나의 애플리케이션에서 책임을 나눌 수 있다.
실시간 월드처럼 상태 소유권과 실행 주기가 다른 기능은 별도 실행 단위를 검토한다.

## 2. 기능을 내부 모듈로 대응

아래 분류는 자체 플랫폼의 후보 책임이다. 뒤끝이 내부에서 같은 모듈이나 데이터베이스를 사용한다는 뜻은 아니다.

| 내부 모듈 | 뒤끝에서 대응하는 기능 | 콘솔에서 필요한 작업 | 게임에서 필요한 작업 |
| --- | --- | --- | --- |
| 프로젝트와 환경 | 프로젝트, 인증정보, 점검, 버전 | 게임 등록, 키 교체, 환경 선택 | 초기화, 버전과 점검 상태 조회 |
| 관리자와 권한 | 최고 관리자, 관리자, 역할 | 계정과 프로젝트 접근권한 관리 | 직접 제공하지 않음 |
| 계정과 세션 | 게스트, 커스텀, 소셜 로그인, 멀티 캐릭터 | 검색, 연결 정보, ID 찾기, 비밀번호 재설정, 제재 | 로그인, 갱신, 연결, 로그아웃 |
| 유저 데이터 | 게임정보, 클라우드 세이브, 신규 데이터베이스 | 테이블, 스키마, 데이터 조회와 수정 | 소유권에 따른 저장과 조회 |
| 운영 데이터 | 차트, 확률표, 버전 | 가져오기, 검증, 게시, 되돌리기 | 버전 조회, 변경분 다운로드 |
| 게임 경제 | 우편, 쿠폰, 영수증, 환불, 구버전 TBC | 보상 지급, 구매 조회, 회수 | 수령, 교환, 구매 복구 |
| 경쟁 | 개인 랭킹, 길드 랭킹, 시즌 보상 | 시즌 설정, 기록 조회, 정산 확인 | 점수 반영, 순위와 보상 조회 |
| 소셜 | 친구, 차단, 길드, 쪽지, 검색 | 길드와 신고 관리 | 신청, 수락, 가입, 탈퇴, 메시지 |
| 운영 콘텐츠 | 공지, 이벤트, 푸시, 약관, 문의 | 다국어 작성, 예약, 답변 | 콘텐츠 조회, 수신 설정, 문의 |
| 서버 확장 | 뒤끝펑션 | 배포 버전과 실행 결과 조회 | 게임별 서버 명령 호출 |
| 관측 | 대시보드, 로그, 퍼널, 요금 알림 | 게임 지표, 오류, 작업 이력 확인 | 허용한 행동 이벤트 전송 |
| 채팅 | 채널, 그룹, 귓속말, 번역, 제재 | 채널 정책, 신고와 금칙어 관리 | 접속, 입장, 송수신, 신고 |
| 매칭과 게임방 | 뒤끝매치 | 카드, 점수, 시간, 경기 기록 | 매칭, 방 입장, 데이터 중계 |
| 월드 | 월드 서버, 데이터 테이블, 설정 | 빌드와 배치, 서버 상태 | 접속, 오브젝트 동기화, 재접속 |
| 외부 판매 | 웹숍과 환불 연동 | 상품 연결, 주문과 회수 확인 | 구매 상태와 지급 결과 조회 |

전체 기능은 조사 범위에 포함한다. 개발 순서를 나누는 것은 조사에서 기능을 제외한다는 뜻이 아니다.
TBC는 베이스 SDK 5.18.7 이하의 호환 대상이다. 자체 재화와 원장 설계 후보를 TBC의 현행 지원으로 해석하지 않는다.
게스트 자격 증명을 잃은 뒤의 복원과 이관은 별도 요구사항이다. ID 찾기와 비밀번호 재설정으로 같은 문제를 해결한다고 가정하지 않는다.

## 3. 데이터 모델 후보

모든 게임 범위의 키, 고유 제약, 조회 조건에 \`project_id\`와 필요한 환경 범위를 반영한다.
전역 계정을 공유할지는 별도 결정이다. 공유한다면 게임 멤버십과 캐릭터를 분리한다.

| 데이터 | 핵심 필드 또는 관계 | 보존할 불변 조건 |
| --- | --- | --- |
| Project와 Environment | 프로젝트, 환경, 상태, 허용 버전 | 운영 데이터가 개발 환경으로 섞이지 않음 |
| Admin과 RoleBinding | 관리자, 프로젝트, 역할, 권한 | 메뉴를 숨기는 것과 별개로 서버가 권한 검사 |
| Player와 Identity | 유저, 공급자, 외부 식별자 | 검증한 외부 식별자의 연결은 정의한 범위에서 유일 |
| Character | 계정, 캐릭터, 슬롯, 활성 상태 | 계정 제재와 캐릭터 제재의 범위를 구분 |
| Session | 주체, 만료, 갱신, 폐기 상태 | 로그아웃과 제재가 정의한 시점에 적용됨 |
| DataTable와 Schema | 유형, 컬럼, 읽기 권한, 쓰기 권한 | 화면과 SDK의 검증 규칙이 일치 |
| SaveObject | 소유자, 키, 값, 버전 | 오래된 저장으로 최신 데이터를 조용히 덮어쓰지 않음 |
| ChartVersion | 차트, 버전, 검증 결과, 게시 상태 | 재현할 때 같은 버전의 데이터를 사용 |
| RewardDefinition | 아이템, 수량, 조건, 유효 기간 | 게시 후 변경이 기존 발급분에 미치는 범위를 명시 |
| Mail과 Claim | 수신자, 우편, 만료, 수령 기록 | 수령 재요청이 보상을 중복 지급하지 않음 |
| Coupon와 Redemption | 캠페인, 코드, 대상, 사용 기록 | 동시 사용에서도 정의한 횟수를 초과하지 않음 |
| Wallet과 Ledger | 잔액, 증감, 사유, 업무 식별자 | 잔액과 원장이 같은 업무 결과를 나타냄 |
| Purchase와 Grant | 스토어, 거래 식별자, 검증, 지급, 환불 | 결제 검증과 실제 지급 상태를 구분 |
| Leaderboard와 Season | 집계 규칙, 기간, 기록, 정산 | 시즌 경계와 동점 규칙이 재현 가능 |
| Guild와 Membership | 길드, 유저, 직위, 신청 | 중복 가입과 권한 변경의 경합을 처리 |
| Content와 Locale | 공지, 이벤트, 언어, 공개 기간 | 기본 언어와 FALLBACK 선택이 일관됨 |
| DeliveryJob | 대상, 예정 시각, 시도, 결과 | 재실행과 취소의 의미를 구분 |
| AuditEvent | 행위자, 대상, 변경, 시각, 결과 | 권한을 사용한 변경을 추적 가능 |
| Connection과 Room | 연결, 방, 소유 프로세스, 세대 | 재접속과 소유권 이전이 기존 연결을 혼동하지 않음 |

이 표는 실제 SQL 스키마가 아니다. 기본키 형식, 보관 기간, 삭제 정책은 구현 전에 확정한다.
뒤끝의 \`inDate\`, \`owner_inDate\`, \`BMember\` 같은 식별자를 자체 모델에 그대로 사용할 필요는 없다.

## 4. 신뢰 경계와 경제 상태

클라이언트가 보낸 점수, 가격, 아이템 수량은 검증 전 입력이다. 배포한 SDK의 키만으로 해당 값을 신뢰하지 않는다.
개인 설정과 진행 저장은 일반 저장으로 처리할 수 있다. 유료 재화와 지급은 서버 업무 명령으로 처리한다.

우편 수령의 후보 흐름은 다음과 같다.

1. 서버가 세션에서 프로젝트와 유저를 결정한다.
2. 서버가 우편의 대상과 유효 기간을 검사한다.
3. 서버가 기존 수령 결과를 조회한다.
4. 새 요청이면 서버가 수령 기록과 보상 변동을 같은 트랜잭션에서 저장한다.
5. 재요청이면 서버가 기존 결과를 반환한다.

같은 요청을 두 번 보내도 지급은 한 번만 일어나야 한다. 이를 멱등성으로 부른다.
요청 식별자뿐 아니라 우편·수신자 같은 업무 단위에도 중복 제약이 필요하다.
서버 밖의 스토어나 푸시 공급자까지 하나의 데이터베이스 트랜잭션으로 묶을 수는 없다.
외부 전달은 저장된 작업 상태와 재시도 정책으로 연결한다.

결제는 \`검증 대기 → 검증 완료 → 지급 완료\`를 구분한다. 환불과 취소는 별도 상태로 관리한다.
검증 성공 뒤 지급 전에 프로세스가 종료되어도 구매 복구가 가능해야 한다.
환불 통지가 중복되거나 순서가 뒤바뀌어도 재화를 두 번 회수하지 않아야 한다.
뒤끝 문서의 검증 결과만으로 이 흐름 전체를 보장한다고 해석하지 않는다.

## 5. 자체 API에서 정할 계약

아래는 API 책임 목록이다. 뒤끝의 실제 URL이나 이미 구현한 API 명세가 아니다.

| 작업 | 입력 경계 | 결과 계약 | 필수 실패 처리 |
| --- | --- | --- | --- |
| 로그인과 갱신 | 공급자 증명 또는 설치 credential | 세션, 만료, 계정 상태 | 외부 증명 만료, 폐기된 세션 |
| 데이터 저장 | 테이블, 키, 값, 이전 버전 | 새 버전과 저장 결과 | 소유권 위반, 스키마 오류, 경합 |
| 차트 조회 | 차트와 현재 버전 | 게시 버전과 다운로드 정보 | 없는 버전, 비공개 데이터 |
| 서버 명령 | 명령 이름, 인자, 요청 식별자 | 업무 결과와 처리 식별자 | 같은 식별자로 다른 입력 |
| 우편 수령 | 우편 식별자 | 지급 내역과 수령 상태 | 만료, 대상 불일치, 이미 수령 |
| 쿠폰 사용 | 코드 | 발급 보상과 사용 결과 | 대상 제한, 소진, 중복, 만료 |
| 구매 복구 | 스토어 거래 증명 | 검증과 지급 상태 | 위조, 타인 거래, 처리 중 |
| 랭킹 반영 | 검증한 경기 또는 진행 결과 | 점수와 시즌 | 마감된 시즌, 중복 경기 |
| 소셜 변경 | 상대 또는 길드, 작업 | 최신 관계와 버전 | 차단, 정원, 중복 신청 |
| 운영 명령 | 프로젝트, 대상, 사유 | 작업 식별자와 결과 | 권한 부족, 상태 변경 경합 |
| 예약 발송 | 콘텐츠, 대상, 시각, 시간대 | 예약과 발송 상태 | 이미 실행, 취소 경합, 공급자 실패 |
| 실시간 입장 | 인증 증명, 방과 월드 | 연결 세대와 초기 상태 | 만료, 정원, 접근 제한 |
| 재접속 | 연결 세대와 마지막 확인 상태 | 복구 상태 또는 재동기화 | 복구 기한 초과, 이미 교체된 연결 |

HTTP 성공과 업무 성공을 구분한다. 요청이 접수됐다는 응답과 실제 발송·지급이 끝났다는 결과도 구분해야 한다.
공개 콘솔 JavaScript의 관리 API는 게임 SDK의 공개 REST 계약이 아니다. 해당 URL을 자체 플랫폼의 공개 API로 확정하지 않는다.

## 6. 운영 콘솔의 책임

현재 승인된 자체 플랫폼 UI는 없다. 다음 목록은 기능 요구 후보이며 화면 배치나 시안을 승인한 결과가 아니다.

- 프로젝트와 환경을 선택하고 현재 대상을 계속 확인한다.
- 유저 상세에서 계정, 캐릭터, 데이터, 우편, 구매, 제재, 문의의 관계를 조회한다.
- 데이터 편집은 스키마, 소유권, 변경 이유, 변경 결과를 확인한다.
- 보상과 제재는 조회 권한과 실행 권한을 구분한다.
- 차트와 콘텐츠는 작성본, 게시본, 버전 이력을 구분한다.
- 예약 작업은 예정, 실행, 성공, 부분 실패, 취소 상태를 구분한다.
- 문의와 신고는 대상, 처리자, 처리 이력을 연결한다.
- 함수와 월드는 빌드, 배포 버전, 실행 상태, 오류 기록을 연결한다.
- 로그와 지표에는 기간, 시간대, 집계 지연, 필터 범위를 표시한다.

사용자의 UI 승인 전에는 메뉴 배치, 문구, 색상, 추가 대시보드를 확정하지 않는다.
성능 검사 결과나 내부 구현 정보도 제품 화면에 임의로 추가하지 않는다.

## 7. 성능과 운영 품질

이번 작업은 문서와 공개 자산 분석이다. 게임 서버나 콘솔의 성능을 측정하지 않았다.
뒤끝이 감당하는 CCU, 요청 처리량, 필요한 노드 수를 이번 결과로 약속할 수 없다.

| 경로 | 처음 정할 지표 | 보존하거나 설계할 보호 수단 | 비교할 입력 |
| --- | --- | --- | --- |
| 인증과 게임 API | 지연의 p50·p95·p99, 오류율 | 연결 풀, 호출 제한, 기한 | 같은 인증 방식과 동시 요청 수 |
| 데이터 조회 | 조회 지연, 스캔량, 응답 크기 | 인덱스, 페이지 크기, 허용 연산자 | 같은 테이블 크기와 필터 |
| 차트 | 다운로드량, 캐시 적중, 갱신 지연 | 버전, 캐시, 압축, 변경분 | 같은 차트와 버전 분포 |
| 지급과 쿠폰 | 성공률, 경합, 중복 거부 | 트랜잭션, 업무별 유일 제약 | 같은 중복률과 동시 사용 수 |
| 랭킹 | 갱신 지연, 조회 지연, 정산 시간 | 집계 범위, 페이지 제한, 시즌 분리 | 같은 참가자와 점수 분포 |
| 로그와 지표 | 수집량, 조회 지연, 저장 비용 | 배치, 보관 기간, 검색 한도 | 같은 이벤트율과 조회 기간 |
| 푸시와 예약 | 대기 시간, 실패율, 재시도 수 | 큐 한도, 분할, 중복 방지 | 같은 대상 수와 공급자 오류 |
| 채팅과 월드 | RTT, 송신량, 메모리, 재접속 시간 | 전송 제한, 큐 한도, 정리, 동기화 범위 | 같은 연결 수와 메시지 크기 |

수치 목표는 실제 게임의 입력을 확보한 뒤 정한다. 도입한 캐시와 제한은 동등한 대체를 검증하기 전에 제거하지 않는다.
한 번의 빌드나 단일 요청 성공으로 운영 성능을 검증했다고 보고하지 않는다.

## 8. 구현 순서 후보

| 순서 | 구현 범위 | 확인할 사용자 흐름 | 다음 범위로 넘어갈 조건 |
| --- | --- | --- | --- |
| 1 | 프로젝트, 관리자, 인증, 프로필, 저장 | 운영자가 게임을 선택하고 유저가 로그인해 데이터를 저장 | 프로젝트 격리와 저장 경합 검사 |
| 2 | 서버 명령, 원장, 우편, 쿠폰, 운영 감사 | 운영자가 보상을 보내고 유저가 한 번만 수령 | 중복 요청과 중간 실패 검사 |
| 3 | 차트, 버전, 공지, 이벤트, 문의, 제재, 로그 | 데이터 게시부터 게임 반영과 운영 추적 | 게시 버전과 권한 검사 |
| 4 | 랭킹, 시즌, 친구, 길드, 유저 그룹 | 경쟁과 소셜 관계를 운영 | 시즌 경계와 동시 변경 검사 |
| 5 | 구매, 환불, 푸시, 웹숍 | 구매 복구와 외부 통지 처리 | 스토어 검증과 실패 재처리 |
| 6 | 채팅, 매칭, 월드, 확장 배포 | 접속부터 종료·재접속까지 실제 게임 연동 | 선택한 실시간 모델의 부하와 장애 검사 |

첫 게임이 실시간 게임이면 6번의 작은 흐름을 앞당긴다. 기존 뒤끝 SDK 호환이 필수라면 모든 단계의 계약도 달라진다.
클라이언트는 사용자가 지정한 MinbWebKit의 TypeScript 경로를 조사했다.
호환 여부, 게임 장르, 서버 개발 언어와 운영 규모는 아직 확정하지 않았다.
초기부터 임의 코드 업로드와 다중 테넌트 서버리스를 제공할 필요가 있는지도 별도 결정한다.

## 9. 재구성 검증 기준

아래는 앞으로 구현할 때의 검사 항목이다. 이번 조사에서 실행해 통과한 항목이 아니다.

| 검사 | 통과 조건 |
| --- | --- |
| 프로젝트 격리 | 다른 게임의 데이터, 키, 랭킹, 운영 명령에 접근하지 못함 |
| 관리자 권한 | 주소 직접 입력과 API 직접 호출에도 같은 권한을 적용 |
| 세션 폐기 | 로그아웃·제재·갱신 재사용 정책을 모든 실행 인스턴스가 지킴 |
| 저장 경합 | 같은 이전 버전으로 보낸 요청이 최신 저장을 조용히 덮어쓰지 않음 |
| Public과 Private 권한 | 읽기와 쓰기 권한을 각각 검사 |
| 우편 중복 수령 | 동시 요청과 재접속 후 재요청에도 한 번 지급 |
| 쿠폰 동시 사용 | 전체 한도와 유저별 한도를 초과하지 않음 |
| 결제 복구 | 검증 후 프로세스가 종료되어도 지급을 복구 |
| 환불 재전달 | 중복·역순 통지가 중복 회수나 이중 지급을 만들지 않음 |
| 시즌 정산 | 마감 경계와 재실행에서도 보상이 중복되지 않음 |
| 예약 취소 | 실행과 취소가 겹칠 때 정의한 결과를 기록 |
| 서버 업무 오류 | 전송 성공과 업무 실패를 구분 |
| 채팅 제한 | 크기·빈도·정원·제재 정책을 서버가 적용 |
| 재접속 | 예전 연결과 새 연결이 동시에 상태를 바꾸지 않음 |
| 자원 정리 | 종료한 연결과 작업이 메모리·구독·타이머를 남기지 않음 |
| 백업 복구 | 선언한 복구 시점과 시간 목표를 실제 복구로 확인 |

## 10. 콘솔과 REA 후속 조사에서 확정할 항목

1. 지정 프로젝트의 실제 메뉴, 활성화 상태, 요금제에 따른 차이를 대조한다.
2. 각 화면의 목록·상세·빈 결과·오류·권한 부족 상태를 기록한다.
3. 조회 요청의 실제 입력, 응답, 페이지 커서, 오류 코드를 확인한다.
4. 테스트 프로젝트에서만 생성·수정·삭제·지급·취소의 상태 전이를 관찰한다.
5. 테스트 게임 클라이언트에서 SDK 호출과 저장 결과를 함께 확인한다.
6. 확인된 계약을 요구사항으로 확정한 뒤 실행 계획을 작성한다.

조회만으로 쓰기 동작의 원자성, 재시도, 중복 방지를 입증할 수 없다.
공개 JavaScript의 선언만으로 해당 프로젝트에서 기능이 활성화됐다고 판단하지 않는다.
원본 서버 코드를 확보하지 않은 상태에서 내부 데이터베이스나 분산 구조를 복원했다고 보고하지 않는다.`,filtered:!1,sourceHash:"ad99087a8224080e6a73bd7f2bac4db9ca5053feb611341706c94300085cb600"},{id:"study-thebackend-05-live-console-analysis-md",title:"뒤끝 콘솔의 실제 화면과 제한된 생성 실험",path:"study/thebackend/05_LIVE_CONSOLE_ANALYSIS.md",category:"이전 조사",status:"역사적 조사·제안",body:"# 뒤끝 콘솔의 실제 화면과 제한된 생성 실험\n\n`tst` 프로젝트에서 유저·게임 정보·데이터베이스·비공개 공지의 생성 결과를 확인했다. 데이터베이스 행은 수정 후 재조회했고 조사용 데이터는 정리했다. 다른 기능은 목록·폼·활성화 안내를 관찰했다. 게임 SDK의 연동, 실시간 통신, 결제, 동시성, 성능은 검증하지 않았다.\n\n- 관찰일: 2026-11-03.\n- 조작 주체: 부모 에이전트가 연결된 Chrome 탭을 조작했다. 이 문서의 작성자는 저장된 접근성 기록과 PNG만 읽었다.\n- 프로젝트 상태: 화면 상단에 `tst`, `SDK 연동 전`, `Admin`이 표시된다.\n- 증거 위치: [실제 콘솔 증거 폴더](evidence/live-console/).\n- 개인정보: 실제 이메일, 계정의 비밀값, 인증키를 이 문서에 적지 않았다. 아래 계정과 데이터 이름은 조사용 가상 데이터다.\n- 공개 소스와의 구분: [화면 계약 확인표](07_SCREEN_CONTRACTS.md)는 소스에서 추출한 항목이다. 이 문서는 저장된 실제 화면의 결과만 판정한다.\n\n## 1. 판정 기준\n\n| 판정 | 이번 문서에서 뜻하는 범위 | 포함하지 않는 주장 |\n|---|---|---|\n| 생성 결과 확인 | 생성 뒤 목록이나 상세에 조사용 데이터가 나타남 | SDK에서 같은 데이터를 읽을 수 있음 |\n| 폼·검증 확인 | 입력·필수 오류·버튼 상태를 화면에서 확인함 | 서버의 모든 검증 규칙을 확인함 |\n| 목록·상태 확인 | 실제 열·빈 결과·버튼·설정값을 확인함 | 해당 기능의 실행을 검증함 |\n| 활성화 전 안내 | 사용하기·시작하기·활성화 화면이 나타남 | 서비스가 실패했거나 내부 기능이 없음 |\n| 로딩·중간 상태 | 기록이 이전 화면이나 모달·로딩을 담음 | 작업이 성공했거나 기능이 비어 있음 |\n| 미확인 | 필요한 증거나 실행이 없음 | 공개 소스 설명을 실제 결과로 대체함 |\n\n파일 이름만으로 성공을 판정하지 않았다. 예를 들어 `database-row-insert-result`는 행 삽입 모달을 담는다. 실제 행은 `database-row-created`에서 확인한다. [삽입 중간 기록](evidence/live-console/database-row-insert-result.ax.txt), [생성 행 기록](evidence/live-console/database-row-created.ax.txt)\n\n## 2. 실제 화면 구성\n\n콘솔은 상단의 프로젝트 선택과 계정 메뉴, 왼쪽의 기능 메뉴, 본문으로 나뉜다. 왼쪽 메뉴는 프로젝트 설정·개발·운영·결제·분석·데이터베이스·채팅·월드·웹숍을 구분한다. 메뉴가 있다는 사실과 사용 가능한 기능은 별개다. [유저 화면의 메뉴 기록](evidence/live-console/users-list.ax.txt)\n\n게임 정보는 `테이블`과 `데이터` 탭을 사용한다. 새 데이터베이스는 왼쪽 테이블 목록과 오른쪽 행 편집 영역을 사용한다. 두 화면의 권한·스키마·페이지 구성을 하나의 계약으로 합치면 안 된다. [게임 정보 화면](evidence/live-console/game-info-row-created.png), [데이터베이스 화면](evidence/live-console/database-row-created.png)\n\n대표 PNG의 원본 크기는 1728×880이다. 이 문서는 원본 파일을 자르거나 늘리지 않았다. 조작 중 기기 모드로 CSS 뷰포트가 바뀐 중간 상태는 반응형 검증 결과로 사용하지 않는다.\n\n가이드 닫기 과정에는 영구 건너뛰기와 숨기기 선택이 있었다. 부모 조작 기록에 따르면 숨기기를 선택했고 영구 건너뛰기는 실행하지 않았다. 저장된 확인 모달과 가이드 패널을 숨김 완료 화면으로 해석하지 않는다. [선택 확인 모달](evidence/live-console/charts-guide-closed.ax.txt), [가이드 패널 기록](evidence/live-console/charts-after-desktop-restore.ax.txt)\n\n## 3. 가상 유저 생성과 닉네임\n\n**생성 결과 확인.** 유저 목록과 상세에 가상 계정 `rea_probe_1103`이 나타난다. 상세는 가입 유형 `customSignUp`, 그룹 `NULL`, 접속 기기 `thebackend_console`을 표시한다. 실제 게임 로그인이나 기기 등록을 실행했다는 뜻은 아니다. [유저 목록](evidence/live-console/users-list.ax.txt), [유저 상세](evidence/live-console/user-detail.ax.txt)\n\n닉네임 `rea_probe_nick_1103x`는 20자다. 목록과 상세에서 저장한 값을 확인했다. 부모 조작 기록에는 21자 닉네임을 거부한 결과도 있다. 이때 길이 초과와 맞지 않는 공백 오류 문구를 표시했다고 보고했다.\n\n**증거 한계.** 20자 저장 결과는 AX에 남아 있다. 21자 거부와 오류 문구는 별도 캡처를 확인하기 전까지 조작 기록으로 구분한다. 이 결과로 닉네임의 모든 문자·중복·길이 규칙을 검증했다고 판단하지 않는다.\n\n실제 목록에는 UUID·계정 ID·닉네임·국가·그룹·가입일·최근 접속일·접속 OS·누적 결제액·상태가 나타난다. 기본 검색어가 없을 때 검색과 초기화가 비활성화된다. 목록은 `10개씩 보기`, `1-10`, 이전·다음 버튼을 표시했다. 1개 행만 있어도 범위를 `1-10`으로 표시했다. [목록과 페이지 표시](evidence/live-console/users-list.ax.txt)\n\n**내부 플랫폼에 주는 제안.** 클라이언트 입력 제한과 서버 오류 문구를 같은 검증 항목에 연결한다. 닉네임 길이 오류에 공백 오류가 나오면 운영자가 원인을 잘못 판단한다. 페이지 범위는 실제 결과 수와 표시 정책을 명확히 정한다.\n\n## 4. 기존 게임 정보 테이블과 행\n\n**생성 결과 확인.** `rea_probe_1103` 테이블을 생성했다. 목록은 `private`, `스키마 미정의`, `활성`을 표시한다. 설명은 조사용 데이터임을 밝힌다. [생성된 테이블](evidence/live-console/game-info-created.ax.txt)\n\n이 테이블에 가상 유저 UUID를 연결한 행을 만들었다. 문자열 필드 `probe_note`의 값은 `created_for_research`다. 행에는 `gamer_id`, `inDate`, `owner_inDate`, `updatedAt`도 나타난다. [행 생성폼](evidence/live-console/game-info-row-form.ax.txt), [생성된 행](evidence/live-console/game-info-row-created.ax.txt)\n\n생성폼에서 컬럼과 데이터 타입을 확인한 기록도 있다. 최종 생성 테이블은 스키마 미정의이므로, 컬럼폼을 열었다는 사실을 스키마 정의 테이블의 생성 성공으로 기록하지 않는다. [컬럼폼](evidence/live-console/game-info-column-form.ax.txt), [타입 목록](evidence/live-console/game-info-column-types.ax.txt)\n\n**미확인.** 다른 유저의 읽기 거부, SDK에서의 소유권 검사, 트랜잭션, 서버가 동적으로 저장한 타입은 검증하지 않았다. 콘솔 행 조회 성공은 게임 SDK의 Private 접근 제한을 검증하지 않는다.\n\n## 5. 새 데이터베이스의 테이블·행·모델\n\n**설정 확인.** 데이터베이스는 조사 전에 이미 FREE 상태였다. 설정 화면은 서울 리전과 읽기·쓰기 대역폭·저장소 사용량을 표시한다. 인덱스와 백업 입력도 존재한다. 요금제·백업·인덱스 설정은 바꾸지 않았다. [데이터베이스 설정](evidence/live-console/database-settings.ax.txt)\n\n**생성 결과 확인.** `rea_probe_db_1103`을 유저 테이블로 생성했다. 생성폼은 본인 데이터 읽기·쓰기를 선택하고 타인 데이터 읽기·쓰기는 선택하지 않은 상태다. [생성 직전 폼](evidence/live-console/database-create-ready.ax.txt), [생성된 테이블](evidence/live-console/database-table-created.ax.txt)\n\n생성폼은 컬럼 수를 `3/80`으로 표시했다. 생성 뒤 테이블 버튼은 `1/50`을 표시한다. 이 값은 당시 프로젝트 화면의 한도 표시이며 모든 요금제의 공통 한도로 확정하지 않는다.\n\n| 컬럼 | 화면에서 확인한 타입과 설정 | 실제 확인 범위 |\n|---|---|---|\n| `user_uuid` | 유저 테이블의 고정 UUID 컬럼 | 가상 유저 UUID가 행에 나타남 |\n| `id` | `int32`, Primary, `AUTO_INCREMENT` | 값을 입력하지 않은 행의 값이 `1`로 나타남 |\n| `score` | `int32`, 기본값 `0`, null 비허용 | 입력한 값 `7`이 행에 나타남 |\n\n행 생성 뒤 `user_uuid`, `id=1`, `score=7`을 목록에서 확인했다. 기본값 `0`을 비워서 저장하는 실험은 하지 않았다. 따라서 기본값은 생성 설정으로만 확인했다. [행 입력](evidence/live-console/database-insert-row.ax.txt), [생성 결과](evidence/live-console/database-row-created.ax.txt)\n\n**수정·재조회 확인.** 같은 행의 `score`를 `7`에서 `9`로 바꿨다. 수정 직후 목록과 재조회한 목록에서 `id=1`, `score=9`를 확인했다. 콘솔의 수정과 재조회는 검증했지만 SDK 수정·읽기는 실행하지 않았다. [수정 직후](evidence/live-console/database-row-updated.ax.txt), [재조회 결과](evidence/live-console/database-update-persisted.ax.txt)\n\n![새 데이터베이스에서 확인한 조사용 행](원본 프로젝트 경로)\n\n`C# 코드 보기`는 `TableType.UserTable`, `TablePermission.SELF`, `PrimaryKey(AutoIncrement=true)`, `DatabaseType.Int32`가 있는 모델을 표시했다. `score`의 기본값과 null 비허용도 코드에 나타난다. 이것은 코드 생성 UI의 결과다. 생성한 모델을 컴파일하거나 SDK에서 실행하지 않았다. [C# 모델 AX](evidence/live-console/database-csharp-model.ax.txt), [C# 모델 PNG](evidence/live-console/database-csharp-model.png)\n\n**미확인.** 클라이언트의 본인·타인 권한, 존재하지 않는 UUID의 처리, 인덱스 효과, 스키마 변경, 동시 삽입, 숫자 경계값은 검증하지 않았다. `score=7` 저장과 타입 이름만으로 모든 타입 계약을 확정할 수 없다.\n\n## 6. 비공개 다국어 공지\n\n**폼·검증 확인.** 공지폼에는 운영 이름, 작성자, 즉시·예약 게시, 언어, 제목·내용, 이미지, 링크 버튼, 공개 여부가 있다. 기본 언어는 영어와 한국어이며 영어가 FALLBACK이다. 화면은 언어 수를 `2/10`으로 표시했다. [공지 생성폼](evidence/live-console/notice-create-form.ax.txt)\n\n영어 내용만 채운 상태에서 한국어 탭의 제목과 내용에 필수 오류가 나타났다. 이 상태에서 생성 버튼은 비활성화됐다. 표시한 두 언어의 필수값을 모두 채워야 하는 경로를 확인했다. [한국어 필수 오류](evidence/live-console/notice-korean-required.ax.txt)\n\n**생성 결과 확인.** 비공개 공지 `REA_PROBE_20261103`을 생성했다. 목록은 운영 이름·게시일·UUID·작성자·등록일·`비공개` 상태를 표시한다. 공개 공지의 게임 노출이나 푸시·실시간 알림 전송은 실행하지 않았다. [생성 전 비공개 설정](evidence/live-console/notice-test-draft.ax.txt), [생성된 공지](evidence/live-console/notice-created.ax.txt)\n\n**삭제 결과 확인.** 조사용 공지를 삭제한 뒤 목록의 `등록된 공지가 없습니다.`를 확인했다. 제출 직후 폼이 남아 있는 중간 기록은 생성 결과의 근거로 사용하지 않는다. [삭제 확인](evidence/live-console/notice-delete-confirm.ax.txt), [삭제 후 빈 목록](evidence/live-console/notice-cleanup.ax.txt)\n\n**미확인.** 예약 게시, 언어 FALLBACK의 SDK 응답, 이미지 업로드, 링크 검증, 임시 공지의 비로그인 조회는 실행하지 않았다.\n\n## 7. 실제 목록·폼·빈 상태\n\n다음 표는 저장된 화면에서 읽은 값이다. 목록이나 폼을 열었다는 사실을 기능 실행 성공으로 세지 않는다.\n\n| 영역 | 실제로 확인한 내용 | 증거 |\n|---|---|---|\n| 프로젝트 | 이름·상태·서울 리전·배너 입력, 복제·삭제 버튼 | [AX](evidence/live-console/project-settings.ax.txt) |\n| 유저 접근 | 유형·상태·대상·기간 검색, 허용 등록, 빈 목록 | [AX](evidence/live-console/access-state.ax.txt) |\n| 클라우드 세이브 | 컬렉션 `0/20`, 컬렉션 없음, 생성 버튼 | [AX](evidence/live-console/cloud-save-state.ax.txt) |\n| 차트 | 차트 `0/200`, 파일 `0/600`, 우편 사용 열, 빈 목록 | [AX](evidence/live-console/charts-empty.ax.txt) |\n| 확률 | 확률 `0/200`, 파일 `0/600`, 적용 파일 열, 빈 목록 | [AX](evidence/live-console/probability-empty.ax.txt) |\n| 그룹 | 기본 `NULL` 그룹, 가상 유저 수 `1`, 이름 검색과 페이지 표시 | [AX](evidence/live-console/groups-state.ax.txt) |\n| 길드 | 그룹·유형·마스터·인원·굿즈·메타 열, 검색 결과 없음 | [AX](evidence/live-console/guilds-state.ax.txt) |\n| 리더보드 | 빈 목록과 생성폼, 길드 없음·테이블 없음의 비활성 입력 | [목록](evidence/live-console/leaderboard-list.ax.txt), [폼](evidence/live-console/leaderboard-create-form.ax.txt) |\n| 관리자 우편 | 빈 목록, 발송·반복·만료·국가·아이템·대상 폼 | [목록](evidence/live-console/mail-final-state.ax.txt), [폼](evidence/live-console/mail-create-form.ax.txt) |\n| 푸시 | 제목·대상·발송일·상태 열, 빈 목록, 등록·테스트 버튼 | [AX](evidence/live-console/push-state.ax.txt) |\n| 쿠폰 | SDK 버전 선택, 이름 검색, 사용 기간·타입·현황 열, 빈 목록 | [AX](evidence/live-console/coupons-empty.ax.txt) |\n| 이벤트 | 다국어 버전 선택, 기간·공개 여부 열, 빈 목록 | [AX](evidence/live-console/event-state.ax.txt) |\n| 1:1 문의 | 국가·언어·답변일·상태 열, 문의 설정, 빈 목록 | [AX](evidence/live-console/inquiry-state.ax.txt) |\n| 약관·정책 | 간편 생성, 제목, 편집 도구, 적용 버튼, 미리보기 비활성화 | [AX](evidence/live-console/policy-state.ax.txt) |\n| 계정 복구 | SDK 버전 선택, 기본 이메일 제목·내용 템플릿 | [AX](evidence/live-console/recovery-state.ax.txt) |\n| 소셜 설정 | 친구 최대 수, 쪽지 보관 수, 쪽지 길이 입력 | [AX](evidence/live-console/social-settings.ax.txt) |\n| 버전 관리 | 최신 등록 적용 안내, 대상·내용·업데이트 열, 빈 목록 | [AX](evidence/live-console/version-state.ax.txt) |\n| 로그 | `InsertLogV2` 선택, 행동 유형·상세 검색, 빈 목록, CSV 비활성화 | [AX](evidence/live-console/logs-state.ax.txt) |\n| 대시보드 | 기본·매출 지표, 날짜·월 선택, 값 없음 또는 빈 차트 | [AX](evidence/live-console/dashboard-state.ax.txt) |\n| 예산 알림 | 사용·미사용 입력과 사용량 갱신 안내 | [AX](evidence/live-console/budget-alert-state.ax.txt) |\n\n해당 리더보드폼에서 길드 선택이 비활성화됐다. 집계 선택에는 `테이블이 없습니다.`와 `숫자형 데이터인 필드가 없습니다.` 안내가 나타났다. 조회 로딩 상태와 대상 테이블 유형에 따른 조건은 추가 확인이 필요하다. [리더보드 폼](evidence/live-console/leaderboard-create-form.ax.txt)\n\n우편폼은 아이템 `0/10`, 대상 `0/1000`을 표시했다. 이 화면을 관찰했지만 아이템을 보내거나 우편을 등록하지 않았다. 차트·쿠폰·푸시·버전·로그도 조사용 데이터를 추가하지 않았다. [우편폼](evidence/live-console/mail-create-form.ax.txt)\n\n## 8. 활성화 전 안내와 연동 누락\n\n| 영역 | 관찰한 화면 | 판정과 실행하지 않은 일 |\n|---|---|---|\n| 펑션 | 기능 소개·과금 안내·활성화 버튼 | 활성화 전 안내. 배포·호출하지 않음 |\n| 뒤끝매치 | 기능 소개·활성화 버튼 | 활성화 전 안내. 매칭·인게임 연결하지 않음 |\n| 채팅 | `채팅 사용하기` 안내 | 활성화 전 안내. 채널·신고·설정 내부를 검증하지 않음 |\n| 월드 | Beta 소개·주의 사항·`월드 사용하기` | 활성화 전 안내. 서버·데이터 테이블·설정 내부를 검증하지 않음 |\n| 환불 관리 | 소개와 `시작하기` | 시작 전 안내. 웹훅·차단·회수하지 않음 |\n| 웹숍 | 소개와 `웹숍 연동하기` | 연동 전 안내. 결제·지급 내역 내부를 검증하지 않음 |\n| 영수증 | 스토어 필수 정보가 필요하다는 안내와 빈 결과 | 연동 정보 누락. 검증 요청·스토어 설정 변경하지 않음 |\n| 게임 캐시 | 상품·TBC·금액의 빈 목록 | 화면 존재 확인. 현행 SDK의 TBC 지원을 뜻하지 않음 |\n\n근거: [펑션](evidence/live-console/functions-state.ax.txt), [매치](evidence/live-console/match-state.ax.txt), [채팅](evidence/live-console/chat-channels-state.ax.txt), [월드](evidence/live-console/world-state.ax.txt), [환불](evidence/live-console/refund-state.ax.txt), [웹숍](evidence/live-console/webshop-state.ax.txt), [영수증](evidence/live-console/receipt-state.ax.txt), [캐시](evidence/live-console/legacy-cash-state.ax.txt).\n\n채팅 관련 파일의 최종 URL은 `chatSetting`이다. 파일명에 채널·신고가 있어도 최종 기록은 같은 활성화 전 안내를 담는다. 각 내부 화면의 증거로 중복 사용하지 않는다. [채널 이름의 기록](evidence/live-console/chat-channels-state.ax.txt), [신고 이름의 기록](evidence/live-console/chat-reports-state.ax.txt), [설정 이름의 기록](evidence/live-console/chat-settings-state.ax.txt)\n\n월드도 서버·테이블·설정 진입에서 안내가 나타났다. AX에 `heading`이 없더라도 PNG와 본문에 월드 안내와 사용 버튼이 보인다. 이 최종 증거는 로딩 실패가 아니라 활성화 전 안내로 분류한다. [월드 PNG](evidence/live-console/world-state.png), [테이블 진입](evidence/live-console/world-data-state.ax.txt), [설정 진입](evidence/live-console/world-settings-state.ax.txt)\n\n화면의 TBC 메뉴는 공식 SDK의 제공 중단 안내를 뒤집는 근거가 아니다. 현행 지원과 구버전 유지는 [운영 기능 조사](02_OPERATIONS_INTEGRATIONS.md)의 구분을 유지한다.\n\n## 9. 조사용 데이터와 정리 상태\n\n생성한 대상은 가상 유저, 기존 게임 정보 테이블과 행, 새 데이터베이스 테이블과 행, 비공개 공지다. 다른 프로젝트의 데이터와 기존 사용자 데이터를 삭제 대상으로 삼지 않았다.\n\n| 조사용 대상 | 생성 결과 | 정리 확인 |\n|---|---|---|\n| `REA_PROBE_20261103` 공지 | 비공개 목록에 나타남 | 삭제 뒤 빈 목록 확인 |\n| `rea_probe_db_1103`의 행 | `id=1`, `score=7` 생성 후 `9`로 수정·재조회 | 삭제 뒤 데이터 없음 확인 |\n| `rea_probe_db_1103` 테이블 | 유저 테이블과 C# 모델 표시 | 삭제 완료 안내와 테이블 없음 확인 |\n| `rea_probe_1103` 게임 정보 테이블·행 | Private·스키마 미정의·문자열 행 표시 | 삭제 뒤 테이블 없음 확인 |\n| `rea_probe_1103` 유저 | 목록·상세·20자 닉네임 표시 | 삭제 뒤 생성된 유저 없음 확인 |\n\n정리 근거는 [공지](evidence/live-console/notice-cleanup.ax.txt), [데이터베이스 행](evidence/live-console/database-row-cleanup.ax.txt), [데이터베이스 테이블](evidence/live-console/database-table-cleanup.ax.txt), [게임 정보 테이블](evidence/live-console/game-info-cleanup.ax.txt), [유저](evidence/live-console/user-cleanup.ax.txt)다. 최종 목록의 빈 결과로 정리를 확인했다. 삭제폼이 열렸다는 사실만으로 삭제 완료라고 기록하지 않는다.\n\n데이터베이스 테이블 삭제폼은 최대 6시간, 삭제 중 처리 비용, 삭제 완료 전 같은 이름의 재사용 제한을 안내했다. 이번 작은 테이블은 완료 안내와 빈 목록이 나타났다. 삭제가 항상 즉시 끝나거나 비용이 없다고 일반화하지 않는다. [삭제 전 안내](evidence/live-console/database-table-delete-confirm.ax.txt), [삭제 완료](evidence/live-console/database-table-cleanup.ax.txt)\n\n## 10. 검증하지 않은 범위\n\n실제 게임 SDK의 초기화·로그인·데이터 조회·서버 함수 호출은 실행하지 않았다. 콘솔 상단도 `SDK 연동 전` 상태다. 생성한 C# 모델을 프로젝트에 넣거나 컴파일하지 않았다.\n\n클라이언트 권한, 서버의 신뢰 경계, 트랜잭션, 중복 실행, 동시성, 지연 시간, 처리량, 자원 사용량은 검증하지 않았다. 화면 응답과 생성 결과만으로 성능이나 보안 검사를 통과했다고 판단하지 않는다.\n\n요금제 변경, 유료 제품 시작, 펑션 배포, 키 교체, 채팅·월드·매치 활성화, 스토어 연결, 결제·푸시·우편 발송은 하지 않았다. 기본 데이터베이스는 조사 전부터 FREE 상태였으며 활성화 작업을 새로 하지 않았다. 이번 데이터 조작의 최종 비용은 확인하지 않았다.\n\n사용자가 승인한 제품 UI를 구현하거나 바꾸는 작업도 하지 않았다. 이번 증거는 내부 플랫폼 요구사항과 화면 상태를 구체화하는 조사 자료다. 실제로 확인한 행·폼·안내와 아직 확인하지 못한 실행 기능을 구분해서 사용한다.",filtered:!1,sourceHash:"16ff653c75a4ae36ac35151696615b8df8f1bd3724544f01ce50d1aacc797dd3"},{id:"study-thebackend-06-static-api-contracts-md",title:"공개 콘솔의 정적 API 호출 계약",path:"study/thebackend/06_STATIC_API_CONTRACTS.md",category:"이전 조사",status:"역사적 조사·제안",body:'# 공개 콘솔의 정적 API 호출 계약\n\n공개 JavaScript에서 HTTP helper 호출식 672개를 추출했다. 이 문서는 정적 선언을 설명하며 실제 서버의 응답·권한·현재 지원 여부를 검증하지 않았다.\n\n분석 기준일은 2026-11-03이다. 사용한 파일은 앞선 조사에서 확보한 공개 콘솔 번들이다. 이번 분석에서는 브라우저를 조작하거나 관리 API를 호출하지 않았다.\n\n## 1. 증거 범위와 읽는 방법\n\n| 항목 | 값 | 해석 |\n| --- | --- | --- |\n| 원본 | [공개 콘솔 번들](https://console.thebackend.io/assets/index-Cp2VxB6O.js) | 공개 정적 파일. 원본 서버 코드가 아니다. |\n| 보관 파일 | [index-Cp2VxB6O.js](evidence/public-console/index-Cp2VxB6O.js) | 앞선 조사에서 보관한 파일을 재사용했다. |\n| SHA-256 | `4be8ab658aa4ff9252b19f03168fa4ba17fe04570f86d997c494c2fc5eb9b046` | 기존 [manifest](evidence/public-console/manifest.json)의 해시와 대조했다. |\n| 파일 크기 | 5,873,951byte | 분석한 UTF-8 파일의 실제 크기다. |\n| 추출 결과 | [api-contracts.json](evidence/public-console/api-contracts.json) | 호출식, 메서드, 경로, 입력 키, helper, 오프셋을 담았다. |\n| 파서 | `@babel/parser 8.0.4` | 기존 REA 실행 환경의 설치본을 재사용했다. |\n| 실행한 분석 | AST와 이름 해석 | 번들 자체를 실행하지 않았다. 전체 번들의 REA 분석도 재실행하지 않았다. |\n\n이전의 문자열 후보 481개에는 화면 경로와 상수가 섞여 있다. 이번 추출은 그 후보를 API로 승격하지 않았다. AST는 JavaScript의 구문 구조다. 실제 HTTP helper를 호출하는 노드에서 출발했다.\n\n`legacy-wrapper`는 번들의 `Oe` 계층을 구분하는 이름이다. 그 경로가 지원 종료됐다는 뜻은 아니다. 반대로 새 query helper를 쓴다고 현재 프로젝트에서 사용할 수 있다는 뜻도 아니다.\n\n오프셋은 모두 0부터 시작한다. 이 문서의 `U+`는 Unicode 문자 개수를 뜻하며 기존 manifest의 기준과 같다. JSON에는 UTF-16 오프셋과 UTF-8 byte 오프셋도 함께 저장했다. 종료 오프셋은 범위에 포함하지 않는다.\n\n경로의 `{arg0}`·`{arg1}`은 원래 wrapper의 인자 순서다. 실제 유저 ID나 프로젝트 ID의 값이 아니다. `:gameId`처럼 이름이 있는 키는 새 helper의 원문 표기를 보존했다.\n\n## 2. 추출 수와 해석의 한계\n\n| 항목 | 개수 | 뜻 |\n| --- | --- | --- |\n| AST 호출 노드 전체 | 97,957개 | UI·라이브러리 호출도 포함한다. |\n| `Oe` helper 호출식 | 419개 | 기존 manifest의 wrapper 호출식 수와 일치한다. |\n| query helper 호출식 | 253개 | `ln`, `iYn`, `ixe`, `ci`, `Xi`, `Ro`, `kU`, `bE`를 추적했다. |\n| 합계 | 672개 | 호출식 개수다. 서로 다른 API의 개수가 아니다. |\n| 단일 경로를 정한 호출식 | 656개 | 문자열·템플릿을 정적으로 해석했다. |\n| 조건에 따라 경로가 달라지는 호출식 | 6개 | 양쪽 경로 후보를 함께 남겼다. |\n| 경로를 정하지 못한 호출식 | 10개 | 메서드는 보이지만 경로는 미확인이다. |\n| 서로 다른 메서드·템플릿 조합 | 649개 | 쿼리 선택 문법과 인자 표기의 차이도 보존한 수다. |\n| 추적한 입력 전달 호출식 | 282개 | query 초기 입력 또는 `mutate`·`mutateAsync`의 입력 구조다. |\n| 실제 관리 API 실행 | 0건 | 런타임 검증을 뜻하는 증거는 없다. |\n\n동일한 실제 경로가 구형 wrapper와 새 query 계층에 중복 선언될 수 있다. 쿼리 선택 키가 다른 선언도 별도로 센다. 따라서 649개를 “뒤끝의 실제 API 649개”라고 쓰면 안 된다.\n\n입력 키는 서버가 요구하는 필수 필드 목록이 아니다. 소스가 선택하거나 전달한 키만 확인했다. 타입·허용값·최댓값·권한·성공 응답·오류 응답은 이 정적 분석으로 확정하지 않았다.\n\n## 3. HTTP helper의 실제 전달 규칙\n\n### 3.1. `Oe` 계층\n\n`Oe`는 다섯 메서드를 고정 wrapper에 연결한다. `Qb`가 상대 경로를 설정된 콘솔 origin의 URL로 바꾼다. `$CONSOLE_AUTH` 표기가 있으면 인증 origin을 선택한다. 이미 `http`로 시작하는 주소는 그대로 반환한다.\n\n| 소스 메서드 | 실제 호출 | 두 번째 인자 | 세 번째 인자 | 정의의 `U+` 시작 |\n| --- | --- | --- | --- | --- |\n| `Oe.get` | `i7.get` | `params` | 요청 설정 | `1215228` |\n| `Oe.post` | `i7.post` | 본문 | 요청 설정 | `1215283` |\n| `Oe.put` | `i7.put` | 본문 | 요청 설정 | `1215327` |\n| `Oe.patch` | `i7.patch` | 본문 | 요청 설정 | `1215370` |\n| `Oe.delete` | `i7.delete` | 설정 객체의 `data` | 나머지 요청 설정 | `1215415` |\n\n`DELETE`의 두 번째 인자는 쿼리가 아니라 본문으로 이동한다. `ot(input, [keys])`가 보이면 선택한 키 목록을 기록했다. 전달 객체를 그대로 받는 wrapper는 본문 키가 미확인이라고 표시한다.\n\n### 3.2. 새 query 계층\n\n| helper | HTTP 메서드 근거 | 입력 전달 | 정의의 `U+` 시작 |\n| --- | --- | --- | --- |\n| `ln` | 내부의 `.get()` | 조회 hook | `1703872` |\n| `iYn` | 내부의 `.get()` | 페이지 조회 hook | `1704394` |\n| `ixe` | 내부의 `.get()` | 스트림 조회 hook | `1705783` |\n| `ci` | `x7("post")` | mutation | `1705655` |\n| `Xi` | `x7("put")` | mutation | `1705669` |\n| `Ro` | `x7("delete")` | mutation | `1705682` |\n| `kU` | `x7("patch")` | mutation | `1705698` |\n| `bE` | `x7("get")` | GET 메서드를 쓰는 mutation | `1705713` |\n\n`x7`은 입력을 경로·쿼리·헤더·본문으로 나눈다. 메서드별 선언을 HTTP 클라이언트의 `method`에 넘긴다. `ln` 계층과 `bE`는 HTTP 메서드가 같아도 본문을 다루는 코드가 다르다.\n\n| 구분 | 실제 helper 규칙 | 재구성 시 주의 |\n| --- | --- | --- |\n| 경로 | `:name`을 입력의 같은 이름 값으로 치환한다. | 원문 템플릿을 보존한다. 누락값 검증을 했다고 가정하지 않는다. |\n| 쿼리 | `?key1,key2`는 쿼리 키 선택 문법이다. | `?limit,offset` 자체가 실제 송신 URL은 아니다. |\n| 소비한 값 | `eN`이 입력 복사본에서 값을 읽은 뒤 지운다. | 본문 키를 셀 때 경로·쿼리 키를 제외한다. |\n| 배열 | 기본 adapter는 같은 키를 반복한다. 별도 adapter는 쉼표 형태를 쓸 수 있다. | 모든 배열이 JSON으로 전송된다고 가정하지 않는다. |\n| 객체 쿼리 | 대괄호 형식 serializer를 사용한다. | 실제 서버의 파싱 결과는 별도 확인한다. |\n| 헤더 | `headers: [keys]`에 지정한 키를 남은 입력에서 꺼낸다. | `gameId`·`gamerId`·`name`이 헤더일 수 있다. |\n| mutation 본문 | 경로·쿼리·헤더에 쓰고 남은 입력을 보낸다. | 선언만으로 전체 본문 키를 알 수 없다. |\n| 본문 형식 | 기본은 JSON이다. `bodyType: "form"`이면 각 키를 `FormData`에 추가한다. | 경로 이름이 `csv`라는 이유로 multipart라고 판단하지 않는다. |\n| 조회 본문 | `ln`·`iYn`·`ixe`는 본문을 전달하지 않는다. | 남은 입력이 전부 쿼리에 자동 추가되는 구조가 아니다. |\n\n이 규칙의 근거는 `eN`, `m7`, `g7`, `x7`의 실제 함수다. 각 함수의 범위와 해시는 JSON의 `helperContracts.spans`에 있다. 값의 필수 여부와 서버의 검증 규칙은 이 helper가 증명하지 않는다.\n\n## 4. 여섯 주요 기능의 호출 계약\n\n표의 `Q`는 쿼리 키, `B`는 본문 키, `H`는 헤더 키다. `B 미확인`과 `본문 없음`은 다르다. 본문 키 뒤의 “관측”은 화면 소스의 입력 전달을 뜻하며 실제 전송을 뜻하지 않는다.\n\n### 4.1. 유저\n\n| 증거 ID·오프셋 | 메서드·경로 | 정적으로 확인한 입력 | 확인 범위 |\n| --- | --- | --- | --- |\n| `static-0202`·`1235485` | `GET /{arg0}/project/gamer/v3` | Q는 아래 전체 목록 | `ot`가 선택한 조회 키 |\n| `static-0204`·`1235702` | `PUT /{arg0}/project/gamer/v2.3/nickname/{arg1}` | B `nickname` | 구형 wrapper |\n| `static-0546`·`2840774` | `PUT :gameId/project/gamer/v2.3/nickname/:gamerId` | 경로 `gameId,gamerId`; B `nickname` | 입력 전달 2곳을 연결 |\n| `static-0550`·`2841180` | `POST :gameId/project/gamer/v2.1` | 경로 `gameId`; B `customGamerId,customGamerPassword` | 화면의 입력 전달을 관측 |\n| `static-0214`·`1237096` | `PUT /{arg0}/project/gamer/v2.7/{arg1}` | B `isBlocked,blockedDate,blockReason,deleteRank,isWithdrawal,reasonsForWithdrawal,applicationDateOfWithdrawal,memo` | wrapper의 선택 키 |\n| `static-0215`·`1237224` | `DELETE /{arg0}/project/gamer/multi/account/v1` | B `gamers,deleteRank,deleteGameInfo` | DELETE 본문 |\n| `static-0557`·`2842538` | `PUT :gameId/project/gamer/v2.7/:gamerId` | B `isWithdrawal` 또는 `memo`를 전달하는 호출 3곳 | 전체 필드를 열거한 서버 스키마가 아님 |\n\n`static-0202`의 Q는 다음 24개다. `limit`, `LastEvaluatedKey`, `defaultSearchColumn`, `defaultSearchValue`, `defaultSearchCondition`, `type`, `isWithdrawal`, `isBlocked`, `countryCode`, `osVersion`, `osVersionCondition`, `device`, `startInDate`, `endInDate`, `startFinalDate`, `endFinalDate`, `memo`, `country`, `region`, `city`, `language`, `currencyCode`, `sort`, `order`다.\n\n새 선언 `static-0530`은 같은 키를 `?key1,key2`로 명시한다. 계정·캐릭터 목록은 별도 경로로 선언돼 있다. 이 선언만으로 유저 차단이나 탈퇴의 실제 삭제 범위를 확정하지 않는다. 기능 의미와 문서의 제약은 [핵심 기능 조사](01_CORE_FEATURES.md)의 유저 절을 함께 읽는다.\n\n### 4.2. 신규 데이터베이스\n\n| 증거 ID·오프셋 | 메서드·경로 | 정적으로 확인한 입력 | 남은 공백 |\n| --- | --- | --- | --- |\n| `static-0483`·`2680473` | `GET :gameId/project/database/v1/active` | 경로 `gameId` | 활성 여부의 실제 응답 미확인 |\n| `static-0486`·`2680675` | `GET :gameId/project/database/v1/config` | 경로 `gameId` | 설정 응답 스키마 미확인 |\n| `static-0492`·`2681268` | `POST :gameId/project/database/v1/table/create` | 경로 `gameId`; B 미확인 | 화면이 펼쳐 넣는 객체의 전체 키 미해석 |\n| `static-0487`·`2680736` | `POST :gameId/project/database/v1/table/apply` | B `name,column` 또는 `name,index` 관측 | 별도 호출에는 미해석 펼침 객체도 있음 |\n| `static-0494`·`2681468` | `PUT :gameId/project/database/v1/table/permission` | 경로 `gameId`; B 미확인 | 권한 객체의 전체 구조 미확인 |\n| `static-0497`·`2681883` | `POST :gameId/project/database/v1/table/backup/restore` | B `name,backupDate` 관측 | 복원 상태·완료 응답 미확인 |\n| `static-0498`·`2681942` | `DELETE :gameId/project/database/v1/table` | 경로 `gameId`; H `name`; B 미확인 | `name`을 본문 키로 오해하면 안 됨 |\n| `static-0499`·`2682056` | `GET :gameId/project/database/v1/data/get?name,limit,offset` | Q `name,limit,offset` | 조회 결과의 구조 미확인 |\n| `static-0500`·`2682249` | `POST :gameId/project/database/v1/data/update` | B `name,column,value,where` 관측 | 조건·타입 검증과 영향 행 수 미확인 |\n| `static-0503`·`2682568` | `POST :gameId/project/database/v1/data/insert` | B `name,columns,values` 관측 | 중복 키·부분 실패 규칙 미확인 |\n| `static-0504`·`2682669` | `POST :gameId/project/database/v1/data/csv` | B `name,csv` 관측; JSON 기본 형식 | 실제 CSV 검증과 실패 행 응답 미확인 |\n| `static-0505`·`2682767` | `POST :gameId/project/database/v1/data/delete` | B `name,where` 관측 | 이름과 달리 HTTP DELETE가 아님 |\n\n예를 들어 `static-0500`의 입력 전달은 `U+5150740`에서 확인했다. `gameId`는 경로에 쓴 뒤 제거한다. 남는 `name,column,value,where`를 본문 키로 기록했다.\n\n테이블 생성·권한 수정의 전체 본문은 미확인이다. 일반 함수 이름이나 UI 필드 이름으로 빈 곳을 채우지 않았다. SQL 쿼리 에디터의 전체 네트워크 계약도 이 여덟 helper 계열만으로 포괄한다고 주장하지 않는다.\n\n### 4.3. 우편\n\n| 증거 ID·오프셋 | 메서드·경로 | 정적으로 확인한 입력 | 확인 범위 |\n| --- | --- | --- | --- |\n| `static-0271`·`1244050` | `GET /{arg0}/project/post/v3.2` | Q `limit,LastEvaluatedKey,postType,title` | 우편 목록 wrapper |\n| `static-0272`·`1244292` | `POST /{arg0}/project/post/v3.1` | B는 아래 전체 목록 | 예약·반복·수신자 값을 선택 |\n| `static-0273`·`1244383` | `DELETE /{arg0}/project/post/v3.2` | B `postInDates` | 삭제 요청의 본문 |\n| `static-0274`·`1244539` | `GET /{arg0}/project/post/v3.2/history` | Q `limit,LastEvaluatedKey,offset,postUuid,searchUser,inDate` | 기록 조회 wrapper |\n| `static-0276`·`1244777` | `GET /{arg0}/project/post/v3.4/gamer/{arg1}` | Q `limit,LastEvaluatedKey,postType` | 특정 유저의 우편 조회 |\n| `static-0540` | `GET :gameId/project/post/v3.4/gamer/:gamerId?limit,LastEvaluatedKey,postType` | 같은 세 쿼리 키 | 새 query 계층의 별도 선언 |\n\n`static-0272`의 B는 `reservationPost`, `repeatPost`, `reservationDate`, `repeatType`, `repeatDayOfTheWeek`, `repeatPeriod`, `repeatTime`, `expirationDate`, `country`, `itemObject`, `receiverList`다.\n\n예약·반복 필드가 있다는 사실은 예약 상태 전이를 증명하지 않는다. 발송 취소·수령 후 삭제·보상 지급의 원자성은 런타임 확인이 필요하다. 이 관리 API를 게임 SDK의 `UPost` API와 같은 계약으로 취급하지 않는다.\n\n### 4.4. 랭킹과 리더보드\n\n| 증거 ID·오프셋 | 메서드·경로 | 정적으로 확인한 입력 | 남은 공백 |\n| --- | --- | --- | --- |\n| `static-0581` | `GET :gameId/project/rank/union/v2/quotas` | 경로 `gameId` | quota 응답과 실제 제한 미확인 |\n| `static-0583` | `GET :gameId/project/rank/union/database/v1/columns?table,type` | Q `table,type` | 컬럼 후보 응답 미확인 |\n| `static-0585`·`4562701` | `DELETE :gameId/project/rank/union/v1.2/:rankUuid/users` | B `groupUuid,gamers` 관측 | 삭제 결과·재계산 여부 미확인 |\n| `static-0587`·`4562976` | `PUT :gameId/project/rank/union/v4/:rankType/update/:rankUuid` | B `groupUuid,rankDataMap,nickname` 관측 | 펼침 객체가 있어 전체 본문은 미확인 |\n| `static-0597`·`4564156` | `POST :gameId/project/property/group/leaderboard/v2` | 경로 `gameId`; B 미확인 | 생성 규칙의 전체 스키마 미확인 |\n| `static-0600` | `GET :gameId/project/property/group/leaderboard/:leaderboardUuid/rank?limit,offset,groupName` | Q `limit,offset,groupName` | 순위·동점 응답 미확인 |\n| `static-0602` | `GET :gameId/project/property/group/leaderboard/:leaderboardUuid/pastRank?limit,offset,groupName` | Q `limit,offset,groupName` | 과거 결과의 보존 기간 미확인 |\n| `static-0604`·`4565122` | `POST :gameId/project/property/group/leaderboard/manualCalculate` | B `leaderboardName,rankUuid,rankType` 관측 | 수동 정산의 실행·중복 처리 미확인 |\n\n`static-0604`의 입력 전달은 `U+4597356`이다. “수동 정산 경로가 선언됐다”는 사실까지만 확인했다. 정산 권한, 실행 시점, 잠금, 보상 중복 방지 보장은 실제 요청 없이 알 수 없다.\n\n구형 `/project/rank`·`realtime`·`reword` 경로도 같은 번들에 남아 있다. 원문의 `reword`·`exel` 같은 표기는 고치지 않았다. 경로 이름만으로 현행 지원 여부나 SDK 버전을 판정하지 않는다.\n\n### 4.5. 로그와 퍼널\n\n| 증거 ID·오프셋 | 메서드·경로 | 정적으로 확인한 입력 | 확인 범위 |\n| --- | --- | --- | --- |\n| `static-0186` | `GET {arg0}/project/gameLog/v5/actions` | Q는 wrapper 인자를 그대로 전달 | 전체 키 미확인 |\n| `static-0188` | `GET {arg0}/project/gameLog/v2.5` | Q는 wrapper 인자를 그대로 전달 | 전체 키 미확인 |\n| `static-0195` | `POST {arg0}/project/gameLog/v5/analysis` | B는 wrapper 인자를 그대로 전달 | 전체 키 미확인 |\n| `static-0629`·`5065882` | `GET :gameId/project/gameLog/schema?limit,LastEvaluatedKey,logType` | Q `limit,LastEvaluatedKey,logType` | 로그 스키마 목록 선언 |\n| `static-0631`·`5066261` | `POST :gameId/project/gameLog/schema` | B 미확인 | 생성 입력을 임의 확장하지 않음 |\n| `static-0632`·`5066391` | `PATCH :gameId/project/gameLog/schema/:logType` | B `expirationDays` 또는 `fieldList` 관측 | 입력 전달 2곳을 연결 |\n| `static-0633`·`5066525` | `DELETE :gameId/project/gameLog/schema?logType` | Q `logType`; B 미확인 | 삭제 대상은 쿼리에서 꺼냄 |\n| `static-0637`·`5077524` | `POST :gameId/project/gameLog/analysis/funnel/preset` | B 미확인 | 프리셋 경로 선언 |\n\n`static-0632`의 두 입력 전달은 `U+5103199`와 `U+5103416`이다. 전자는 보존 일수 키를, 후자는 필드 목록 키를 남긴다. 보존 가능한 일수와 변경 즉시 적용 여부는 이 코드가 증명하지 않는다.\n\n### 4.6. 관리자와 권한\n\n| 증거 ID·오프셋 | 메서드·경로 | 정적으로 확인한 입력 | 확인 범위 |\n| --- | --- | --- | --- |\n| `static-0027` | `GET /account/admin/v2` | 본문 없음 | 관리자 목록 선언 |\n| `static-0029`·`1216482` | `POST /account/admin/v2` | B `gm,roleRelation` | wrapper의 선택 키 |\n| `static-0030` | `PUT /account/admin/v2/{arg0}` | B `gm,roleRelation` | 수정 wrapper |\n| `static-0033`·`1216778` | `DELETE /account/admin/v1.1` | B `adminIds` | DELETE 본문 |\n| `static-0036`·`1216900` | `POST /account/admin/role` | B 미확인 | 인자를 그대로 전달 |\n| `static-0037`·`1216987` | `PUT /account/admin/role/{arg0}` | B 미확인 | 인자를 그대로 전달 |\n| `static-0039`·`1217072` | `GET /account/admin/menu` | 본문 없음 | 메뉴 조회 선언 |\n| `static-0040`·`1217161` | `GET /project/auth/permission/{arg0}` | H `gameid` | 프로젝트 식별값을 헤더로 전달 |\n\n`menu`와 `permission` 경로를 서로 구분했다. 메뉴 조회가 있다는 이유로 서버의 권한 검사를 검증했다고 쓰지 않는다. 역할 생성·수정의 전체 권한 객체, 자기 권한 변경 제한, 최상위 관리자 보호 규칙은 미확인이다.\n\n## 5. 조건 분기와 경로 미확인\n\n조건 분기 6개는 차트 생성, 운영 계정 2개, 유저·계정 차단 2개, 디바이스 검색 1개다. JSON의 `pathAlternatives`에 양쪽 경로를 남겼다. 어느 분기가 실제 화면에서 선택됐는지는 확인하지 않았다.\n\n경로 미확인 ID는 `static-0409`, `static-0411`, `static-0412`, `static-0413`, `static-0414`, `static-0415`, `static-0416`, `static-0417`, `static-0418`, `static-0419`다. 이 항목은 `pathTemplate: null`로 기록했다. 함수 이름이나 주변 문자열로 경로를 추측하지 않았다.\n\n한 선언에는 `/{arg0}}/account/setting/v2/password`처럼 여분의 닫는 중괄호가 남아 있다. 이를 추출 과정에서 고치지 않았다. 정적 이상 징후이며 실제 실행 오류라고 확정하지 않는다.\n\n## 6. JSON 증거의 필드\n\n| 필드 | 내용 | 해석 제한 |\n| --- | --- | --- |\n| `method`, `methodEvidence` | 메서드와 helper 추적 근거 | 메서드를 경로 이름에서 추측하지 않음 |\n| `pathTemplate`, `pathAlternatives` | 단일 경로 또는 조건별 후보 | 실제 호출한 경로가 아님 |\n| `queryInput`, `bodyInput`, `headerKeys` | 선언에서 선택·전달하는 키 | 서버의 필수·허용 필드 스키마가 아님 |\n| `keysComplete` | 그 소스 객체의 키를 다 읽었는지 | 서버 입력 전체를 확인했다는 뜻이 아님 |\n| `observedInputCalls` | hook·mutation 입력을 연결한 범위 | 화면 소스의 전달 구조이며 네트워크 관측이 아님 |\n| `remainingBodyKeys` | 경로·쿼리·헤더 키를 뺀 본문 키 | 미해석 펼침 객체의 필드는 빠질 수 있음 |\n| `sourceSpan` | 원본 호출식의 문자·byte 범위 | 보관한 번들의 해시와 함께 사용 |\n| `ownerSymbol` | 호출을 감싼 함수 또는 선언 이름 | minify 이름이므로 기능 ID로 고정하지 않음 |\n| `featureGroup` | 경로 단어로 붙인 탐색용 분류 | API 의미·지원 여부·화면 활성화를 증명하지 않음 |\n| `runtimeVerified` | 모든 호출식에서 `false` | 실제 실행 검증과 정적 근거를 분리 |\n\nJSON에는 경로와 입력 키 이름을 보관했다. 공개 번들에 들어 있는 토큰·키의 실제 값, 입력 예시값, 함수 본문 전체는 복사하지 않았다.\n\n## 7. 실행한 검사와 실행하지 않은 검사\n\n추출은 V8 heap 상한 768MiB, 외부 실행 기한 90초, 출력 로그 상한 100,000byte로 제한했다. 마지막 추출은 `3.26초`에 끝났으며 종료 코드는 `0`이다. 회수한 자식 프로세스의 최대 RSS는 `996,065,280byte`였다. heap 상한은 프로세스 전체 RSS의 강제 상한과 다르다.\n\n처음 사용한 `ps`와 외부 `time`의 시스템 조회는 권한 제한으로 실패했다. 그 실행은 종료·대기를 거친 뒤 끝났다. 마지막 실행은 Python의 종료한 자식 사용량 기록으로 메모리를 읽었다. 프로세스 전체 RSS를 실시간 강제 제한하지 못한 사실은 남긴다.\n\n형식·해시·오프셋·주요 계약 검사의 결과는 JSON의 `verification`에 기록한다. 원본 해시, 672개 호출식의 식별자, 세 오프셋 체계, helper별 메서드, 여섯 주요 기능의 대표 입력을 대조한다. 다른 문서나 다른 에이전트의 검사는 실행하지 않는다.\n\n다음 검사는 실행하지 않았다.\n\n- 로그인한 프로젝트의 실제 관리 API 호출.\n- 응답 JSON, 상태 코드, 오류 코드, 페이지 커서의 실제 값 확인.\n- 생성·수정·삭제·정산·지급·취소의 상태 전이 확인.\n- 요청의 권한 검사, 서버의 입력 검증, 중복 처리와 원자성 확인.\n- 메뉴 선언의 현재 지원 여부, 요금제별 활성화, TBC 호환 버전 확인.\n\n## 8. 다음 런타임 조사에 넘길 항목\n\n현재 Chrome 콘솔 조사의 실행 소유자가 실제 탭을 계속 맡는다. 이 문서는 그 조사에 아래 대상을 제공한다.\n\n1. 유저 목록과 단건 조회에서 실제 쿼리·응답·페이지 커서를 대조한다.\n2. 데이터베이스 설정·테이블·데이터 조회의 입력과 반환 형식을 대조한다.\n3. 우편 목록·수신 기록·유저별 우편의 읽기 계약을 대조한다.\n4. 리더보드 정의·현재 순위·과거 순위의 조회 계약을 대조한다.\n5. 로그 목록·스키마·퍼널의 조회 계약을 대조한다.\n6. 관리자 메뉴와 프로젝트 권한의 응답을 구분해 기록한다.\n\n쓰기 동작은 독립된 테스트 대상과 실행 범위를 먼저 정한다. 공개 정적 경로를 발견했다는 이유로 운영 프로젝트에 변경 요청을 보내지 않는다. 조사 결과를 자체 플랫폼의 공개 API 명세로 채택하기 전에는 입력·권한·응답·실패·재시도의 계약을 따로 확정해야 한다.',filtered:!1,sourceHash:"8f961598a6efd292c054d827bfd43000bb9424be51649660eb42edd2b3f18954"},{id:"study-thebackend-07-screen-contracts-md",title:"뒤끝 콘솔의 화면 계약 확인표",path:"study/thebackend/07_SCREEN_CONTRACTS.md",category:"이전 조사",status:"역사적 조사·제안",body:"# 뒤끝 콘솔의 화면 계약 확인표\n\n이 문서는 콘솔을 읽기 전용으로 조사할 때 확인할 항목을 정한다. 공개 JavaScript와 공식 가이드에서 필드와 검증 규칙을 추출했다. 실제 화면의 표시와 서버 응답은 아직 검증하지 않았다.\n\n- 기준일: 2026-11-03.\n- 조사 대상: 프로젝트, 유저, 데이터 테이블, 차트, 우편, 쿠폰, 리더보드, 공지, 로그, 관리자 권한.\n- 완료 조건: 각 항목에 실제 화면의 증거를 연결하고, 소스와 다른 항목을 별도로 기록한다.\n- 허용할 관찰: 목록·상세 열람, 검색 조건 확인, 생성폼 열기, 입력 제한과 비활성화 조건 확인.\n- 실행하지 않을 동작: 생성·저장·삭제·발송·지급·복구·추출·API 직접 호출. 이 확인표는 실행 승인이 아니다.\n- 기존 기능 설명: [코어 기능 조사](01_CORE_FEATURES.md), [운영 기능 조사](02_OPERATIONS_INTEGRATIONS.md).\n\n## 1. 근거를 읽는 방법\n\n`JS@cp숫자`는 아래 JavaScript의 Unicode 문자 위치다. 첫 문자는 0이다. UTF-8 바이트 위치나 JavaScript의 UTF-16 인덱스와 다르다. 한글이 있으므로 세 단위를 섞지 않는다.\n\n- 파일: [공개 콘솔 JavaScript](evidence/public-console/index-Cp2VxB6O.js).\n- 크기: 5,873,951바이트. Python으로 읽은 Unicode 문자 수는 5,530,521개다.\n- SHA-256: `4be8ab658aa4ff9252b19f03168fa4ba17fe04570f86d997c494c2fc5eb9b046`.\n- 공식 가이드 원본: `afi-backnd/backnd_developer_docs`, 커밋 `fe41d27e1515d0c492ddc477e075342804841168`.\n- 가이드 위치의 `DOC@` 경로는 위 저장소 기준이다. 줄 번호는 이번에 확보한 원본을 기준으로 한다.\n\n**소스 확인**은 코드에 필드·조건·문구가 있다는 뜻이다. 해당 분기가 실제 계정에 노출되거나 서버가 같은 규칙을 적용한다는 뜻은 아니다. 체크박스는 실제 화면에서 확인하기 전까지 비워 둔다.\n\n## 2. 공통 목록과 페이지 이동\n\n**소스 확인.** 공통 페이지 구성요소는 10·25·50·100개 선택을 제공한다. `count:-1`을 사용하며 이전·다음 버튼은 `hasPrevPage`와 `hasNextPage`로 제어한다. 전체 페이지 수를 계산해서 표시하는 계약으로 해석하면 안 된다. 근거: `JS@cp1824847`, `JS@cp1825212`.\n\n- [ ] 화면별 기본 페이지 크기, 허용 크기, 현재 범위 문구를 기록한다.\n- [ ] 필터를 바꿀 때 첫 페이지로 돌아가는지 확인한다.\n- [ ] 다음 페이지가 없을 때 버튼이 비활성화되는지 확인한다.\n- [ ] 목록의 행 선택이 페이지를 바꾸면 유지되는지 확인한다.\n- [ ] 빈 목록, 검색 결과 없음, 로딩, 조회 오류를 서로 구분해서 기록한다.\n- [ ] 오류의 재시도 버튼 유무와 기존 행 유지 여부를 기록한다.\n\n**미확인.** 모든 화면이 같은 페이지 구성요소를 쓰는지 확인하지 못했다. 목록별로 연결된 `pagination` 객체를 확인해야 한다. 오류를 만들기 위한 호출이나 자동 새로고침은 이 조사에서 실행하지 않는다.\n\n입력값 변경이나 포커스 이동도 중복 확인 요청을 보낼 수 있다. 이런 조건은 소스만 읽고 기록한다. 오류를 관찰하려고 요청을 만들지 않는다.\n\n## 3. 프로젝트\n\n**소스 확인.** 생성폼에는 `title`, `targetProducts`, `isMultiCharacter`가 있다. 이름은 필수이며 앞뒤 공백을 제한한다. 입력 요소는 이름을 20자로 제한한다. 제품은 하나 이상 선택해야 한다. 근거: `JS@cp1952075`, `JS@cp1953096`, `JS@cp1953160`.\n\n설정 화면에는 이름과 온라인·오프라인·점검 상태가 있다. 복제폼은 리전·서버 설정 포함·게임 정보 테이블 포함을 받는다. 삭제 확인폼은 프로젝트 이름과 관리자 비밀번호를 요구한다. 근거: `JS@cp2624738`, `JS@cp2626654`, `JS@cp2629878`, `JS@cp2630017`.\n\n- [ ] 목록에서 이름·리전·사용 제품·상태·즐겨찾기가 어떤 열이나 카드로 나오는지 기록한다.\n- [ ] 목록 검색과 정렬, 프로젝트 선택기의 표시 한도, 더보기 유무를 확인한다. 정확한 목록 필터는 미확인이다.\n- [ ] 생성폼의 제품 선택과 멀티 캐릭터 선택이 다음 단계를 바꾸는지 기록한다. 제출은 하지 않는다.\n- [ ] 이름의 필수 표시, 20자 제한, 앞뒤 공백 오류를 확인한다. 서버의 중복 이름 규칙은 미확인이다.\n- [ ] 프로젝트가 없을 때 생성 안내를 확인한다. 개수 한도에서 생성 버튼이 비활성화되는지 기록한다.\n- [ ] 일반 관리자에게 복제·삭제·상태 변경 입력이 보이는지 확인한다. 입력값은 변경하지 않는다.\n\n공식 근거: [프로젝트 가이드](https://docs.backnd.com/guide/console-guide/server-setting/project/). `DOC@guide/console-guide/02-server-setting/01-project.md`. 삭제·복제의 실제 서버 동작은 확인 대상에서 제외한다.\n\n## 4. 유저와 계정\n\n**소스 확인.** 기본 검색은 `defaultSearchColumn`, `defaultSearchValue`를 사용한다. 상세 검색에는 계정 상태, 국가, 계정 연결 여부, 가입일·최근 접속일, OS, 기기, 메모가 있다. 조건 일부는 계정·캐릭터 모드에 따라 달라진다. 근거: `JS@cp2896490`, `JS@cp2897385`, `JS@cp2897616`, `JS@cp2898250`.\n\n싱글 캐릭터의 생성폼은 계정 ID와 비밀번호를 받는다. 멀티 캐릭터는 계정 생성과 캐릭터 생성을 나눈다. 캐릭터 생성은 계정 UUID·닉네임·그룹을 받는다. 닉네임은 필수이며 최대 20자다. 근거: `JS@cp2891150`, `JS@cp2893779`, `JS@cp2894300`, `JS@cp2894501`.\n\n- [ ] 계정 탭·유저 탭의 유무와 각 목록의 식별자 열을 기록한다.\n- [ ] UUID·UID·계정 ID·닉네임·가입일·최근 접속일·상태·국가·누적 결제액을 대조한다.\n- [ ] 상세에서 계정 정보와 캐릭터 정보, 기기 목록, 길드·우편·친구 연결, 메모를 구분한다.\n- [ ] 검색 기간의 양 끝 필수 여부와 검색·초기화 버튼의 비활성화 조건을 확인한다.\n- [ ] 생성폼을 모드별로 열어 조건부 필드와 필수 표시만 기록한다. 생성 요청은 보내지 않는다.\n- [ ] 중복 ID·닉네임 오류는 기존 증거가 있을 때만 연결한다. 오류 재현을 위한 생성은 하지 않는다.\n- [ ] 빈 목록, 검색 결과 없음, 선택 없음, 권한 제한, 상세 조회 실패를 구분한다.\n- [ ] 페이지 크기와 선택 범위를 확인한다. 가이드는 일괄 삭제 대상을 페이지당 최대 100명으로 설명한다.\n\n공식 근거: [검색·생성·삭제](https://docs.backnd.com/guide/console-guide/backnd-base/users/basic/), [유저 상세](https://docs.backnd.com/guide/console-guide/backnd-base/users/search/). `DOC@guide/console-guide/04-backnd-base/01-users/basic.md`, `search.md`, `multi-character.md`.\n\n## 5. 게임 정보와 데이터 테이블\n\n**소스 확인.** `/baseGameInfo`와 `/databaseTableEditor`는 별도 경로다. 한 화면으로 합쳐 기록하지 않는다. 라우트 근거: `JS@cp5508310`, `JS@cp5514210`.\n\n게임 정보 생성폼은 `tableType`, `tableName`, `tableExplaination`, `hasSchema`, `isChecked`, `define`을 받는다. 컬럼폼에는 이름·데이터 타입·기본값·null 허용 여부가 있다. 타입에는 datetime·string·list·map·bool·int·float·double이 나타난다. 근거: `JS@cp4336180`, `JS@cp4336954`, `JS@cp4334256`, `JS@cp4334456`.\n\n- [ ] 게임 정보와 데이터베이스 서비스의 목록·상세·생성폼을 각각 기록한다.\n- [ ] 게임 정보 목록에서 Private·Public, 스키마 유무, 활성 상태, 테이블명, 설명을 확인한다.\n- [ ] 필터 `type`, `hasSchema`, 이름 검색 `search`, 정렬 `sort`와 페이지 이동을 대조한다. 근거: `JS@cp4352614`.\n- [ ] 게임 정보 테이블명은 필수·32자 이하인지 확인한다. 설명은 최대 50자, 컬럼은 최대 100개로 나타난다.\n- [ ] 데이터 타입에 따라 기본값 입력과 null 허용 입력이 바뀌는지 확인한다.\n- [ ] 수정폼에서 이름·분류·스키마 변경의 비활성화 조건을 기록한다. 생성폼의 규칙으로 대체하지 않는다.\n- [ ] 빈 테이블 목록과 컬럼 없음 문구를 구분한다. 비활성 테이블의 화면 표시를 기록한다.\n- [ ] 상세에서 행의 소유자·식별자·생성일·수정일과 동적 컬럼을 확인한다. 필터·정렬·페이지 이동은 별도 기록한다.\n- [ ] 데이터베이스 서비스의 생성폼·권한·페이지 이동은 소스 근거를 추가로 확보한다. 현재 체크를 완료하지 않는다.\n\n**대조할 차이.** 가이드는 영문자로 시작하는 영문·숫자·밑줄 이름을 설명한다. 소스 정규식에는 문자 클래스 안에 `|`가 들어간다. 서버가 이 문자를 허용하는지는 미확인이다. 근거: `JS@cp4336283`.\n\n가이드 한쪽은 생성 후 스키마를 바꿀 수 없다고 설명한다. 수정 절은 분류·설명·스키마 수정도 안내한다. 소스는 테이블 버전에 따라 비활성화한다. 수정 가능 범위를 실제 화면에서 구분해야 한다. 근거: `JS@cp4340717`, `JS@cp4341182`.\n\n공식 근거: [게임 정보 테이블](https://docs.backnd.com/guide/console-guide/backnd-base/game-information/table/), [데이터 관리](https://docs.backnd.com/guide/console-guide/backnd-base/game-information/data/). `DOC@guide/console-guide/04-backnd-base/03-game-information/01-table.md:L70`, `L82`, `L126`.\n\n## 6. 차트\n\n**소스 확인.** 차트 생성폼은 `chartName`, `chartExplain`, `isPostable`을 받는다. 이름은 필수이며 이름·설명은 최대 50자다. 폴더는 이름·설명을 받고 각각 최대 20자다. 근거: `JS@cp4358759`, `JS@cp4359786`, `JS@cp4360497`.\n\n- [ ] 목록에서 차트명·적용한 차트·설명·우편 사용 여부를 기록한다.\n- [ ] 폴더 목록과 폴더 안 차트 목록을 구분한다. 정렬·검색·페이지 이동을 확인한다.\n- [ ] 상세에서 파일 목록·적용 파일·업로드 일시·파일 설명·데이터 미리보기를 대조한다.\n- [ ] 생성폼의 우편 사용 여부와 파일 업로드폼의 형식·크기·설명 입력을 기록한다.\n- [ ] 파일 업로드와 적용을 별도 동작으로 표시한다. 업로드·적용 버튼은 누르지 않는다.\n- [ ] 파일은 시트 1개, 예약 열 `id` 금지, 열 이름 공백 금지라는 가이드 조건을 대조한다.\n- [ ] 폴더 12개 한도와 차트 생성 한도에서 버튼 상태를 기록한다. 차트 한도는 월드 데이터 테이블과 합산할 수 있다.\n- [ ] 선택 전 폴더 추가·삭제 버튼의 비활성화를 확인한다. 빈 목록 문구는 차트 없음으로 나타난다.\n\n소스 근거: `JS@cp4362531`, `JS@cp4362764`, `JS@cp4363091`, `JS@cp4364714`. 공식 근거: [차트 관리](https://docs.backnd.com/guide/console-guide/backnd-base/chart/). `DOC@guide/console-guide/04-backnd-base/07-chart.md:L60`, `L77`.\n\n**미확인.** 파일별 업로드 크기와 업로드 오류의 정확한 화면 문구는 아직 확인하지 못했다. 가이드의 차트 200개·파일 600개 한도를 모든 제품 조합에 그대로 적용하지 않는다.\n\n## 7. 관리자 우편\n\n**소스 확인.** 생성폼은 발송 방식·예약 시각·반복 주기·만료 기간·국가별 본문·발송인·푸시 문구·아이템·대상을 받는다. 대상은 직접 입력·전체·업로드로 나뉜다. 근거: `JS@cp4666967`, `JS@cp4671481`, `JS@cp4672818`, `JS@cp4673469`, `JS@cp4674662`.\n\n- [ ] 관리자·반복·유저·랭킹 보상 우편의 탭과 목록을 구분한다.\n- [ ] 목록에서 발송 시각·만료·대상·상태를 기록한다. 상세에서는 국가별 내용과 수령 내역을 대조한다.\n- [ ] 수령 내역의 UUID·닉네임 검색과 페이지 이동, 전체 대상 우편의 표시 차이를 확인한다.\n- [ ] 아이템 선택은 차트·아이템·수량 순서인지 확인한다. 수량은 양수이며 최소 1로 표시한다.\n- [ ] 아이템을 최대 10개까지 넣는 폼과 대상 최대 1,000명 가이드를 구분해서 기록한다.\n- [ ] 예약·반복일 때만 시각 입력이 활성화되는지 확인한다. 시간 간격은 30분으로 나타난다.\n- [ ] 주간 반복은 요일이 필수인지 확인한다. 직접 만료 시각은 발송 시각보다 앞설 수 없는지 대조한다.\n- [ ] 차트 없음·아이템 없음·대상 없음·선택 없음 상태의 문구와 버튼을 기록한다.\n- [ ] 차트의 우편 사용 설정이 꺼졌을 때 선택 목록을 확인한다. 발송은 하지 않는다.\n\n검증 근거: `JS@cp4665197`, `JS@cp4667206`, `JS@cp4667705`, `JS@cp4673950`. 공식 근거: [관리자 우편](https://docs.backnd.com/guide/console-guide/backnd-base/post/adminstrator/). `DOC@guide/console-guide/04-backnd-base/05-post/01-adminstrator.md`.\n\n**미확인.** 우편 목록의 모든 필터와 오류 상태, 국가 추가 한도에 도달한 화면은 아직 확인하지 못했다.\n\n## 8. 쿠폰\n\n**소스 확인.** 현행 생성폼은 이름·사용 기간·공용/개별 종류·코드·자동 생성·재사용·개수·보상을 받는다. 보상은 차트 선택 또는 JSON 직접 입력이다. 근거: `JS@cp4803962`, `JS@cp4806515`, `JS@cp4807017`, `JS@cp4808385`.\n\n- [ ] 현행 쿠폰과 `/baseCoupon/old`를 구분한다. 두 폼의 필드와 검증을 섞지 않는다.\n- [ ] 목록에서 이름·시작일·종료일·타입·사용 현황을 기록한다.\n- [ ] 이름 검색 후 페이지 초기화, 개수 선택, 다음·이전 이동을 확인한다.\n- [ ] 이름은 필수·최대 20자인지 확인한다. 종료일 없음 설정은 종료 입력을 비활성화하는지 대조한다.\n- [ ] 공용 코드의 직접 입력·자동 생성 전환과 개별 코드의 재사용 입력을 기록한다.\n- [ ] 직접 코드는 2-16자, 영문·한글·숫자 조합이며 숫자만으로는 만들 수 없는지 확인한다.\n- [ ] 개수의 소스 상한은 공용 300,000개·개별 50,000개다. 가이드의 `300,000만개` 표기는 그대로 한도로 사용하지 않는다.\n- [ ] 차트 보상 없음·JSON 보상 없음에서 추가 확인창이 뜨는 조건을 기록한다. 제출은 하지 않는다.\n- [ ] JSON 입력의 4,000자 제한과 오류 표시를 확인한다. 서버가 요구하는 JSON 스키마는 미확인이다.\n- [ ] 미등록 빈 목록과 검색 결과 없음 문구를 구분한다. 생성 중 표시와 선택 없음 삭제 비활성화도 기록한다.\n\n검증·상태 근거: `JS@cp4804331`, `JS@cp4808193`, `JS@cp4808677`, `JS@cp4810712`, `JS@cp4811649`. 공식 근거: [쿠폰 관리](https://docs.backnd.com/guide/console-guide/backnd-base/coupon/basic/). `DOC@guide/console-guide/04-backnd-base/07-coupon/01-basic.md:L23-L48`.\n\n**미확인.** 코드 중복 확인은 별도 요청 코드가 존재한다. 이 조사에서는 해당 요청을 실행하지 않는다. 쿠폰 상세의 사용 이력 필터와 페이지 계약도 실제 화면에서 추가 확인해야 한다.\n\n## 9. 리더보드와 구버전 랭킹\n\n**소스 확인.** 현행 생성폼은 이름·그룹 구분·초기화 주기·시각·시간대·집계 대상·원본·집계 필드·정렬·보상을 받는다. 추가 필드와 집계 필드 초기화 여부도 설정한다. 근거: `JS@cp4569760`, `JS@cp4577163`, `JS@cp4577664`, `JS@cp4580407`, `JS@cp4581219`.\n\n- [ ] 현행 리더보드와 구버전 랭킹·실시간 랭킹의 경로를 구분한다.\n- [ ] 목록에서 이름·그룹 구분·초기화 주기·시각·집계 대상을 대조한다.\n- [ ] 상세에서 현재·과거 회차, 그룹 선택, 순위·점수·추가 필드·보상 정보를 확인한다.\n- [ ] UUID·길드 이름 검색과 회차·그룹 전환의 페이지 초기화를 기록한다.\n- [ ] 이름은 필수·최대 16자이며 앞뒤 공백을 제한하는지 확인한다. 생성 후 수정 가능 여부도 기록한다.\n- [ ] 그룹 기능이 꺼지면 그룹별 집계가 비활성화되는지 확인한다.\n- [ ] 길드가 없으면 길드 집계가 비활성화되는지 확인한다.\n- [ ] 원본 테이블이 없거나 숫자 필드가 없을 때 선택 입력의 문구와 비활성화를 기록한다.\n- [ ] 집계 필드와 추가 필드가 같거나 추가 필드가 `score`일 때 오류 표시를 대조한다.\n- [ ] 초기화 없음일 때 보상 테이블·보상 우편 제목이 비활성화되는지 확인한다.\n- [ ] 빈 순위·초기화 진행·초기화 전후 수정 제한은 읽을 수 있는 상태만 기록한다.\n\n조건 근거: `JS@cp4577436`, `JS@cp4580220`, `JS@cp4580910`, `JS@cp4581074`, `JS@cp4582456`. 공식 근거: [리더보드 생성](https://docs.backnd.com/guide/console-guide/backnd-base/rank/create/), [리더보드 상세](https://docs.backnd.com/guide/console-guide/backnd-base/rank/search/). `DOC@guide/console-guide/04-backnd-base/04-rank/02-create.md:L50-L113`, `04-search.md`.\n\n**미확인.** 초기화 도중 상태와 충돌 오류는 이번 조사에서 재현하지 않는다. 구버전 랭킹의 필드·검증 차이는 현행 리더보드와 별도 증거가 필요하다.\n\n## 10. 공지와 임시 공지\n\n**소스 확인.** 목록은 이름·게시일·UUID·작성자·등록일·공개 여부를 표시한다. 이름 검색과 페이지 이동이 연결된다. 상세에는 언어별 본문과 첨부가 있다. 근거: `JS@cp4725937`, `JS@cp4726040`, `JS@cp4736091`.\n\n- [ ] 일반 공지·구버전 공지·임시 공지의 경로와 진입 버튼을 기록한다.\n- [ ] 목록 열, 검색 조건, 페이지 이동, 선택 없음 삭제 비활성화를 확인한다.\n- [ ] 생성폼에서 운영 이름·언어·제목·내용·이미지·버튼 이름·URL·게시 시각·공개 여부를 대조한다.\n- [ ] 이름 30자·제목 60자·내용 4,000자의 필수 및 최대 길이를 확인한다.\n- [ ] 링크가 있으면 버튼 이름을 요구하는지 확인한다. 버튼 이름이 있으면 URL을 요구하는지도 대조한다.\n- [ ] 버튼 이름 30자·URL 200자와 URL 형식 검증을 기록한다.\n- [ ] 이미지 입력은 JPG·PNG를 선택하며 소스는 1MB 초과를 거부한다. 파일은 업로드하지 않는다.\n- [ ] 언어 추가·삭제·FALLBACK 표시와 임시 공지의 언어 구성을 확인한다.\n- [ ] 예약 게시일 필수와 과거 시각 제한, 편집 화면의 기준 시각을 기록한다.\n- [ ] 빈 공지 목록·비공개 공지·예약 전 공지·이미지 없음·URL 없음의 표시를 각각 남긴다.\n\n검증 근거: `JS@cp4737824`, `JS@cp4738188`, `JS@cp4741601`, `JS@cp4741955`, `JS@cp4742307`. 공식 근거: [공지사항](https://docs.backnd.com/guide/console-guide/backnd-base/notice/notice/). `DOC@guide/console-guide/04-backnd-base/15-notice/01-notice.md`.\n\n**미확인.** 언어 제한을 넘긴 화면, 이미지 공급자 오류, 서버가 거절한 URL의 화면은 아직 확인하지 못했다.\n\n## 11. 로그와 스키마\n\n**소스 확인.** `/baseLog/old`와 `/baseLog`는 별도 경로다. 새 화면은 로그·퍼널·스키마 목록·스키마 상세로 나뉜다. 근거: `JS@cp5513738`.\n\n로그 검색은 행동 유형과 유저 UUID·닉네임, 시작·종료 시각을 받는다. 로그인 실패 목록은 IP·시각·실패 사유를 표시한다. CSV는 행이 없으면 비활성화된다. 근거: `JS@cp5073500`, `JS@cp5075639`.\n\n- [ ] 로그 버전·행동 유형·검색 대상·기간 입력과 페이지 이동을 기록한다.\n- [ ] 로그인 성공·실패·커스텀·웹숍 행동의 목록 열과 상세 내용을 구분한다.\n- [ ] 행동 유형이 없을 때 필수 오류와 검색 버튼 상태를 확인한다.\n- [ ] 검색 결과가 없을 때 로그 없음 문구와 CSV 비활성화를 기록한다.\n- [ ] CSV 행 한도 경고와 다운로드 조건을 읽되 다운로드 요청은 보내지 않는다.\n- [ ] 스키마 목록의 유형명·필드 수·보관 기간·생성일과 이름 검색·페이지 이동을 확인한다.\n- [ ] 유형 생성폼은 이름 필수·최대 50자·허용 문자 제한을 적용하는지 확인한다.\n- [ ] 스키마 상세에서 유형명 수정 금지, 필드 목록, 보관 기간 입력과 저장 버튼 상태를 기록한다.\n- [ ] 보관 기간 변경의 경고 문구와 삭제 영향을 읽되 값을 바꾸지 않는다.\n- [ ] 스키마 없음·필드 없음·미정의 필드·조회 오류를 구분한다.\n\n스키마 근거: `JS@cp5095220`, `JS@cp5096036`, `JS@cp5097310`, `JS@cp5105652`. 공식 근거: [로그 관리](https://docs.backnd.com/guide/console-guide/backnd-base/logs/game/), [로그 스키마](https://docs.backnd.com/guide/console-guide/backnd-base/logs/logs_schema/). `DOC@guide/console-guide/04-backnd-base/09-logs/game.md`, `logs_schema.md`.\n\n**대조할 차이.** 구 로그 화면의 날짜 입력은 3개월을 안내한다. 새 로그 화면은 365일을 안내한다. 일반 로그 가이드는 3개월 조회 제한을 설명한다. 선택 가능한 검색 기간과 실제 보관 기간을 구분해야 한다. 근거: `JS@cp5054854`, `JS@cp5076600` 부근.\n\n**미확인.** 365일 구간의 실제 응답과 스키마별 보관기간 적용은 확인하지 못했다. 기간 입력이 열려 있다는 사실로 데이터가 남아 있다고 판단하지 않는다.\n\n## 12. 관리자 계정과 역할\n\n**소스 확인.** 관리자 생성은 기본 정보와 프로젝트·역할 설정의 2단계다. 기본 정보는 아이디·비밀번호·비밀번호 확인·이름·닉네임이다. 두 번째 단계는 역할·관리 프로젝트·요금 정보 열람을 받는다. 근거: `JS@cp2378869`, `JS@cp2380021`, `JS@cp2380546`, `JS@cp2381318`.\n\n역할폼은 이름·설명·제품별 권한을 받는다. 데이터베이스 권한은 `None`, `View`, `Full`로 나뉜다. 다른 메뉴는 체크 목록으로 나타난다. 근거: `JS@cp2389850`, `JS@cp2392753`, `JS@cp2393283`.\n\n- [ ] 최고 관리자와 일반 관리자에서 계정·역할 메뉴의 표시 차이를 기록한다.\n- [ ] 관리자 목록의 아이디·이름·닉네임·프로젝트·역할과 상세 진입을 확인한다. 실제 열 구성은 미확인이다.\n- [ ] 팀 ID 또는 전용 로그인 URL 표시와 입력 제한을 기록한다.\n- [ ] 아이디 4-16자, 비밀번호 8-16자, 이름·닉네임 1-16자 제한을 대조한다.\n- [ ] 비밀번호 일치와 닉네임의 숫자 시작 제한을 확인한다. 생성폼은 제출하지 않는다.\n- [ ] 프로젝트를 하나 이상 선택해야 다음 단계가 유효한지 확인한다.\n- [ ] 생성한 역할이 없을 때 역할 선택이 비활성화되는지 기록한다.\n- [ ] 역할 이름·설명, 권한 탭, 전체 선택, 데이터베이스의 읽기·전체 권한 입력을 확인한다.\n- [ ] 역할 생성 한도 15개·관리자 한도 25개에서 버튼 상태를 기록한다.\n- [ ] 역할 목록의 페이지 이동과 빈 목록, 수정사항 없음 저장 비활성화를 확인한다.\n- [ ] 조회 권한만 가진 관리자의 숨김·비활성화를 기록한다. 직접 요청으로 권한 우회를 시험하지 않는다.\n\n검증·상태 근거: `JS@cp2378918`, `JS@cp2379457`, `JS@cp2380047`, `JS@cp2395423`, `JS@cp2395664`. 공식 근거: [관리자 계정 관리](https://docs.backnd.com/guide/console-guide/account/admin-setting/). `DOC@guide/console-guide/03-account/02-admin-setting.md`.\n\n**미확인.** UI의 메뉴 제한은 서버 권한 검사 증거가 아니다. 관리자 목록 검색 필터와 일반 관리자의 오류 화면은 실제 계정별 증거가 필요하다.\n\n## 13. 화면별 기록 양식\n\n실제 조사자는 화면마다 다음 값을 기록한다. 소스 계약과 다르면 두 값을 함께 보존한다.\n\n| 항목 | 기록할 값 | 아직 완료할 수 없는 조건 |\n|---|---|---|\n| 대상 | 프로젝트·계정 역할·기능 버전·정확한 URL | 프로젝트나 역할을 식별하지 못함 |\n| 화면 | 목록·상세·생성폼·편집폼·모달 | 화면에 접근하지 못함 |\n| 데이터 | 열·입력·기본값·필수·선택값·읽기 전용 | 공개 코드만 존재함 |\n| 검색 | 조건·정렬·기간·페이지 크기·다음 페이지 | 결과를 조회하지 못함 |\n| 상태 | 빈 목록·검색 없음·로딩·오류·권한 제한 | 상태를 안전하게 관찰하지 못함 |\n| 근거 | 스크린샷·접근성 기록·소스 오프셋·공식 URL | 추정만 존재함 |\n| 판정 | 일치·차이·미확인 | 서버 동작을 실행하지 않았는데 성공으로 쓰려 함 |\n\n## 14. 이번 문서의 검증 범위\n\n이번 조사는 공개 파일의 문자열과 폼 분기를 읽었다. JavaScript 실행, SDK 컴파일, 콘솔 로그인, 외부 API 요청은 하지 않았다. 체크박스는 실제 화면의 검증 결과가 아니다.\n\n프로젝트 목록의 세부 필터, 데이터베이스 서비스 폼, 우편 목록 필터, 쿠폰 상세 이력, 역할별 오류 화면에는 공백이 남았다. 이 공백을 숨기거나 기존 가이드만으로 실제 동작을 확정하지 않는다.\n\n다음 조사자는 정확한 프로젝트와 역할을 먼저 확인한다. 그런 다음 읽기 전용 목록과 상세에서 시작한다. 생성폼은 입력 구성만 관찰하고 저장하지 않는다.",filtered:!1,sourceHash:"164552ede074086664a779b92f19725b9f276962e80f6090c6d1290f9c6aeeaa"},{id:"study-thebackend-08-network-observations-md",title:"관리 콘솔의 네트워크 관측",path:"study/thebackend/08_NETWORK_OBSERVATIONS.md",category:"이전 조사",status:"역사적 조사·제안",body:`# 관리 콘솔의 네트워크 관측

\`tst\` 프로젝트의 관리 콘솔 요청 506건을 공개 소스와 대조했다. 보존한 계약은 HTTP method와 path template의 조합 73개다.
이 결과는 웹 관리 콘솔의 통신 계약이다. 게임 클라이언트나 SDK의 실행 결과로 해석하지 않는다.

조사일은 2026-11-03이다. 원본 HAR는 임시 폴더에만 두었으며 저장소에 복사하지 않았다.
안전한 추출물은 [network-contracts.json](evidence/live-console/network-contracts.json)이다.
화면 실험의 범위와 정리 상태는 [실제 콘솔 분석](05_LIVE_CONSOLE_ANALYSIS.md)을 따른다.

## 1. 입력과 선정 기준

입력은 Chrome DevTools가 내보낸 sanitized HAR다. 파일 크기는 212,136,351바이트이며 기록은 6,693건이다.
이 파일에는 정적 자산과 콘솔 밖 요청도 섞여 있다. 전체 기록을 API 호출 수로 세지 않았다.

다음 조건을 모두 만족하는 요청만 보존했다.

1. 요청 호스트가 공개 소스의 \`consoleapi.thebackend.io\` 또는 \`consoleapi.us.thebackend.io\`와 정확히 일치한다.
2. 요청 URL의 경로 또는 프로젝트 query 필드가 대상 \`tst\` 프로젝트를 가리킨다.
3. HTTP method와 path가 [공개 정적 계약](evidence/public-console/api-contracts.json)의 선언과 일치한다.

프로젝트 식별자는 메모리에서만 비교했다. 헤더와 Referer로 프로젝트 범위를 넓히지 않았다.
계정 공통 요청처럼 대상 프로젝트를 URL로 입증하지 못한 기록은 제외했다.

| 선정 단계 | 기록 수 | 판정 |
| --- | ---: | --- |
| 전체 HAR | 6,693 | 정적 자산과 외부 요청을 포함 |
| 공개 콘솔 API 호스트 | 1,595 | 호스트가 다른 5,098건 제외 |
| URL로 대상 프로젝트 확인 | 812 | 범위를 입증하지 못한 783건 제외 |
| 공개 method와 path 일치 | 506 | 일치하지 않은 306건 제외 |
| 보존한 계약 조합 | 73 | 요청 수와 구분 |

제외한 306건의 세부 원인은 이 추출물에서 분류하지 않았다.
따라서 이를 오류 요청 수나 미지원 기능 수로 해석할 수 없다.

## 2. 보존 형식과 비밀 제거

각 계약에는 method, 공개 path template, query key 이름, JSON 구조, HTTP status와 집계만 남겼다.
공개 소스의 계약 식별자도 함께 기록해 대조 근거를 찾을 수 있게 했다.

헤더, 쿠키, URL의 query 값, fragment, 호스트, 경로의 식별자 값은 저장하지 않았다.
본문의 문자열·숫자·불리언 값도 타입 이름으로 바꿨다. 이메일과 사용자 입력의 실제 값은 남기지 않았다.
배열에는 원소 구조의 합집합만 보존했다. 배열 길이, 시각, initiator와 개별 요청 식별자는 제거했다.

JSON key 이름은 공개 JavaScript의 속성 문법과 정적 요청 계약의 key 목록에 대조했다.
확인하지 못한 이름은 \`{dynamic-key}\`로 합쳤다. 문자열 안에 들어 있는 JSON은 다시 해석하지 않았다.
이 방식 때문에 임의로 만든 열 이름과 동적 map key는 익명화될 수 있다.

| key 검사 | 나온 횟수 | 처리 |
| --- | ---: | --- |
| JSON key 전체 | 2,153 | 요청과 응답을 합친 횟수 |
| 공개 소스에 있는 JSON key | 1,858 | 이름과 타입 구조만 보존 |
| 미확인 JSON key | 295 | \`{dynamic-key}\`로 익명화 |
| query key 전체 | 75 | 공개 소스에서 75회 모두 확인 |

이 수치는 서로 다른 필드의 개수가 아니다. 같은 필드가 여러 응답에 나오면 반복해서 센다.
본문 텍스트는 Base64 변환 전에 유니코드 코드 포인트 2,097,152개로 제한했다.
본문 구조에는 깊이 12와 본문마다 노드 10,000개의 제한을 적용했다.
이번 추출에서는 구조 제한에 도달한 기록이 없었다.

## 3. HTTP status와 본문 범위

보존한 요청은 \`GET\` 497건, \`POST\` 5건, \`DELETE\` 4건이다.
다른 method를 보존하지 못했다는 사실은 콘솔이 그 method를 사용하지 않는다는 뜻이 아니다.

| HTTP status | 요청 수 | 해석 범위 |
| --- | ---: | --- |
| \`200\` | 483 | HTTP 응답 상태만 확인 |
| \`204\` | 7 | HTTP 응답 상태만 확인 |
| \`403\` | 3 | 원인과 권한 정책은 미확인 |
| \`404\` | 13 | 자원 부재나 기능 상태를 단정하지 않음 |

성공 status만으로 저장 결과, 권한 집행, SDK 호환성을 확인했다고 쓰지 않는다.
오류 메시지의 실제 값을 보존하지 않았으므로 \`403\`과 \`404\`의 원인도 이 자료만으로 정할 수 없다.

요청 본문은 9건에서 JSON 구조를 만들었다. 나머지 497건의 HAR에는 요청 본문 텍스트가 없었다.
이 497건은 모두 \`GET\`이다. \`not-recorded\`는 요청 본문이 원래 없었다는 보장과 구분한다.

응답 본문은 360건에서 JSON 구조를 만들었다. 7건은 비JSON으로 분류했다.
나머지 139건은 저장된 텍스트를 JSON으로 해석하지 못했다.
이 139건은 프로젝트 배너 경로의 응답이다. 이를 서버의 잘못된 JSON 응답이라고 단정하지 않는다.

본문 상태는 \`json-shape\`, \`non-json\`, \`invalid-json\`, \`not-recorded\`로 구분했다.
본문 구조를 얻지 못한 기록도 method, 공개 path template, status의 관측 근거는 남는다.

## 4. 화면 실험과 연결할 수 있는 범위

아래 연결은 기능군 수준의 대조다. 개별 요청의 시각과 식별자는 제거했으므로 버튼 조작과 요청의 정확한 순서는 미확인이다.
화면 실험의 성공 여부는 화면 증거를 별도로 확인해야 한다.

| 기능군 | 관측한 관리 콘솔 계약 | 확인한 범위와 한계 |
| --- | --- | --- |
| 새 DB 테이블 | \`POST /:gameId/project/database/v1/table/create\`, \`DELETE /:gameId/project/database/v1/table\` | 생성과 삭제에서 각각 \`204\` 관측 |
| 새 DB 행 | \`POST /:gameId/project/database/v1/data/insert\`, \`data/update\`, \`data/delete\` | 각 경로에서 \`200\` 관측. 데이터 값은 제거 |
| 새 DB 모델 | \`GET /:gameId/project/database/v1/table/cshap\` | \`name\` query key와 \`200\` 관측. 경로 철자는 원문을 유지 |
| 분기 공지 | \`POST /:gameId/project/operation/notice/branch/v1\`, 같은 경로의 \`DELETE\` | 각각 \`204\` 관측. 비공개 여부와 언어 값은 이 추출물로 판정하지 않음 |
| 가상 유저 정리 | \`DELETE /{arg0}/project/gamer/v2.6\` | \`204\` 관측. 최초 생성과 닉네임 길이 검사의 네트워크 근거로 쓰지 않음 |
| 기존 테이블 정리 | \`DELETE /{arg0}/project/gameInfo/v3.2/table\` | \`204\` 관측. 최초 테이블 생성과 행 생성의 통신은 확인하지 않음 |

새 DB 행의 조회 경로 \`GET /:gameId/project/database/v1/data/get\`도 관측했다.
query key는 \`limit\`, \`name\`, \`offset\`이다. 각 query 값과 허용 범위는 남기지 않았다.

새 DB 행을 넣는 본문에는 \`columns\`, \`name\`, \`values\`가 나온다.
행을 바꾸는 본문에는 \`column\`, \`name\`, \`value\`, \`where\`가 나오며 모두 문자열 타입으로 관측했다.
\`where\`가 문자열이라는 사실만으로 서버의 문법이나 입력 검증 방식을 판단할 수 없다.

새 DB 테이블 생성 본문에는 \`clientAccessPermission\`과 \`column\` 구조가 나온다.
권한 구조의 불리언 값은 제거했으므로 실제 권한 집행을 확인한 자료는 아니다.
공지 생성 본문의 \`isPublic\`은 문자열 타입으로 관측했다. UI의 상태나 SDK의 자료형과 동일시하지 않는다.

최초 가상 유저 생성과 기존 테이블 생성은 DevTools 기록 전 실험일 수 있다.
이 문서는 두 생성 동작을 네트워크에서 확인했다고 주장하지 않는다.
조사용 데이터의 최종 정리 여부는 [화면 실험과 정리 기록](05_LIVE_CONSOLE_ANALYSIS.md)을 참조한다.

## 5. 공개 소스와 대조한 방법

공개 소스의 \`legacy-wrapper\`와 \`query-layer\` 계약을 함께 사용했다.
각 method와 path template을 대조했으며, 동적 경로 부분의 실제 값은 보존하지 않았다.
query 선언은 path에서 분리했다. query-layer의 상대 경로에는 앞 \`/\`를 붙여 HTTP 경로와 비교했다.

각 결과의 \`sourceContractIds\`는 [정적 계약 분석](06_STATIC_API_CONTRACTS.md)의 계약 식별자를 가리킨다.
이는 프런트엔드 선언과 관측 요청이 일치한다는 근거다.
서버 내부 구현, 전체 API 목록, 다른 계정의 권한까지 확인했다는 뜻은 아니다.

## 6. 실행 이력과 제한

전체 JSON을 한 번에 읽는 첫 시도는 메모리 제한으로 끝났다.
항목별 스트림으로 바꾼 첫 결과에는 상대 경로 대조 오류가 있었다.
이 오류 때문에 \`query-layer\` 계약을 빠뜨린 잠정 수치 324건·38조합을 폐기했다.
앞 \`/\` 정규화만 수정한 결과를 최종 추출물로 보존했다.

| 시도 | 결과 | 측정값 |
| --- | --- | --- |
| 전체 JSON 파싱 | 외부 메모리 제한으로 중단 | 2.95초, 최대 RSS 1,069,600KiB, 종료 코드 \`-15\` |
| 최초 스트림 추출 | 상대 경로 대조 오류로 폐기 | 22.55초, 최대 RSS 225,136KiB, 종료 코드 \`0\` |
| 수정한 스트림 추출 | 최종 결과 | 9.91초, 최대 RSS 288,592KiB, 종료 코드 \`0\` |
| 최종 프로세스 정리 | 남은 추출 프로세스 없음 | 0개 |

스트림 추출은 기존에 설치된 \`stream-json 3.7.0\`을 사용했다. 새 의존성은 설치하지 않았다.
외부 제한은 실행마다 60초와 전체 프로세스 RSS 1GiB였다.
Node의 old-space 제한은 384MiB, 진단 출력 제한은 32KiB로 정했다.
저장할 안전한 JSON에는 40MiB 제한을 적용했다.

이 수치는 추출 작업의 자원 측정이다. 콘솔이나 게임의 실행 성능 기준이 아니다.
이번 추출에서는 브라우저 조작, 네트워크 접속, API 호출, 요청 재전송을 실행하지 않았다.

## 7. 검사 결과와 남은 범위

다음 검사는 이 문서와 추출물의 작성자가 맡아 실행했다.

- 가상 입력으로 scalar 값 제거, 미확인 key 익명화, 배열 타입 병합을 확인했다.
- 상대 경로를 정규화하는 검사로 확인된 대조 오류를 막았다.
- 보존한 모든 method와 path를 공개 계약에 다시 대조했다.
- 구조에는 타입 이름만 남는지 확인했다.
- 보존한 key 이름을 공개 소스 allowlist와 다시 대조했다.
- 프로젝트 식별자와 이메일 형태의 문자열이 산출물에 없는지 확인했다.
- 요청 수, status 수, key 집계가 서로 맞는지 확인했다.
- 최종 추출 프로세스의 종료와 잔여 프로세스 0개를 확인했다.

최종 JSON은 124,612바이트다.
SHA-256은 \`a9f5e532b0cb23739be39c1d1a2ef5c9a39f170866ce8517975253962b6c602c\`이다.
실행 이력과 검사 결과는 JSON의 \`extractionExecution\`과 \`verification\`에도 기록했다.

게임 SDK 요청, 웹·Android·MinbWebLib 클라이언트의 연동, 실제 권한 집행은 검사하지 않았다.
리소스 값, 본문 enum 값, 오류 원문, 요청 시각을 제거했으므로 그 내용을 필요로 하는 판단도 미확인으로 남는다.`,filtered:!1,sourceHash:"6f1a383eb3360e9e34429fa37296da660994526cce6253c5a0460f6230c348ac"},{id:"integration",title:"웹·Android와 MinbWebKit 연동 조사",path:"study/thebackend/09_WEB_ANDROID_INTEGRATION.md",category:"이전 조사",status:"역사적 조사·제안",body:`# 웹·Android와 MinbWebKit 연동 조사

웹 게임을 Capacitor로 Android 앱에 담는 기존 경로를 유지하고, MinbWebKit에 선택형 백엔드 연결을 추가하는 방향을 권한다.
로컬 저장, 게임 규칙, 서버가 확정하는 상태의 책임을 먼저 나눠야 한다.
이 문서는 연동 조사와 설계 후보다. 제품 코드, 키트 공개 API, 저장 형식과 UI를 변경한 결과가 아니다.

기준일은 2026-11-03이다. 사용자는 웹 기반 빌드, Android 배포, 공통 템플릿 확장을 지정했다.
첫 소비 게임은 사용자가 지정한 \`avoid-ball-origin\`이다. 게임별 결과는 [첫 서버 연동안](10_AVOID_BALL_PILOT.md)에 정리했다.
Android 컴파일과 기기 연동은 실행하지 않았다. 사용자는 외부 설정과 실제 APK 검증을 이번 단계에서 제외하라고 지시했다.
Android는 게임 앱의 배포 대상으로 해석했다. 게임 API와 내부 운영 콘솔을 배포할 서버 환경은 별도로 정해야 한다.

## 1. 조사한 대상

- 사용자가 지정한 경로: \`원본 프로젝트 경로\`.
- 현재 문서의 제품명: \`MinbWebKit\`. 패키지는 \`@minbgames/web-kit\` 4.3.0이다.
- 확인한 브랜치: \`main\`. HEAD는 \`ad629a12e473b71037e6fab6a2042463623ad1a2\`다.
- 최초 조회의 \`git status --short\`는 비어 있었다. 읽기 조사 중 pull, checkout과 파일 편집은 하지 않았다.
- 키트의 문서는 게임이 서브모듈로 소비하는 구조를 설명한다. 후속 조사에서 Escape Ball의 \`.gitmodules\`와 같은 키트 gitlink를 확인했다.
- Phaser 3.90.0과 TypeScript를 사용한다. Capacitor 의존 버전은 7.6.9다.
- 선택형 Three.js 모듈도 있다. 이번 연동을 위해 렌더러를 바꿀 이유는 없다.

키트는 게임을 실행하는 단독 프로젝트와 구분된다. 실제 앱 ID, API 주소, 서명, 빌드 명령과 산출물은 소비 게임에서 확인해야 한다.
키트 문서 사이에도 서브모듈 배치 예시가 다르므로, 아직 없는 소비 경로를 확정하지 않는다.

근거는 키트의 \`AGENTS.md\`, \`README.md\`, \`package.json\`, 소비 가이드와 책임 경계다.
관련 소스의 위치와 해시는 [조사 기준](evidence/web-android/template-source-context.json)과
[런타임 조사](evidence/web-android/minb-runtime-findings.json),
[Android 조사](evidence/web-android/minb-android-findings.json)에 남겼다.

## 2. 뒤끝 조사와 웹 클라이언트의 관계

현재 뒤끝 베이스 안내는 Unity 패키지와 C# 초기화를 설명한다.
이 설치 과정을 Phaser·TypeScript에 그대로 적용할 수 있다는 근거는 없다.
Android 지원이라는 표현도 Unity 게임의 Android 빌드 지원과 Capacitor 연결을 구분해야 한다.

공식 문서의 채팅 Platform API는 운영 서버를 위한 API다. 게임 클라이언트 기능과 구분하며 Master API Token으로 인증한다.
이 토큰을 웹 번들이나 Android WebView에 넣는 방식은 연동안으로 채택하지 않는다.

이번 플랫폼은 자체 게임 API의 계약을 정하고 웹 클라이언트를 연결하는 방향이다.
콘솔에서 관찰한 관리 API는 기능과 운영 요구를 이해하는 근거다. 게임의 공개 API로 전용하지 않는다.
뒤끝의 웹 클라이언트를 직접 사용하는 대안은 공식 지원 범위와 계약을 따로 확인해야 한다.

[실제 네트워크 조사](08_NETWORK_OBSERVATIONS.md)는 대상 콘솔 요청 506건과 공개 계약 조합 73개를 대조했다.
신규 DB와 공지 등의 관리 요청을 확인한 결과이며, 웹·Android 게임이 호출할 수 있음을 검증한 결과는 아니다.

근거: [베이스 시작하기](https://docs.backnd.com/sdk-docs/backend/base/start-up/),
[채팅 Platform API의 공식 문서 원본](https://github.com/afi-backnd/backnd_developer_docs/blob/fe41d27e1515d0c492ddc477e075342804841168/api-docs/chat/01-intro.md).
베이스 페이지는 연결된 Chrome에서 확인했다. 채팅 설명은 고정 커밋의 공식 문서 원본에서 확인했다.

## 3. 재사용할 기존 책임

### 로컬 저장

기존 게임 상태는 동기 \`StorageLike\`를 통해 읽고 쓴다.
\`openUserInfoStorage\`는 메모리 캐시를 제공하고 실제 저장은 비동기로 직렬 처리한다.
따라서 동기 저장 함수의 반환값을 HTTP Promise로 바꾸는 방식은 기존 호출 계약을 깨뜨린다.

\`createAtomicStorage.run\`은 동기 거래를 위한 경계다. Promise 작업은 허용하지 않는다.
\`afterCommit\`도 디스크나 서버 저장 완료를 뜻하지 않는다. 실제 로컬 영속 저장 완료는 \`flush\`로 구분한다.
서버 거래와 로컬 거래를 같은 트랜잭션이라고 표시하지 않아야 한다.

기존 캐시, 저장 직렬화, 로컬 충돌 검출과 오류 처리는 유지한다.
클라우드 버전 비교, 여러 기기의 충돌 정책과 오프라인 명령 재전송은 별도 책임이다.

현재 공개 옵션에는 외부 저장소나 서버 계정을 주입하는 기능이 없다.
Android 저장 연결은 \`profile\`로 읽고 쓰므로 \`namespace\` 변경만으로 계정 격리를 구현한다고 확정할 수 없다.
명시적인 계정 전환과 저장소 종료 API도 아직 없다.

근거: [StorageLike](<원본 프로젝트 경로),
[UserInfo 저장](<원본 프로젝트 경로),
[동기 거래](<원본 프로젝트 경로).
소스 조사 항목은 \`RUNTIME-01\`부터 \`RUNTIME-06\`까지다.

### 설정과 콘텐츠

게임 규칙의 저작 원본은 기존 Sheet·Asset·Settings의 책임을 따른다.
사용자 상태는 UserInfo·LocalData의 책임이다. 서버를 추가한다는 이유로 모두 범용 테이블 하나에 옮기지 않는다.

기존 \`createDataSnapshotPlugin\`은 빌드 시작에 데이터를 한 번 읽고, 같은 내용을 파일과 번들에 고정한다.
실패하면 이전 파일로 빌드를 계속하지 않는다. Config.dat 경로도 빌드에서 검증한 배치를 사용한다.
따라서 현재 배포 앱에 관리자가 수정한 값을 즉시 전달하는 기능은 이 빌드 경로와 별개다.

첫 연결에서는 기존 Config.dat와 빌드 정책을 유지한다.
운영 중 콘텐츠 갱신이 필요해지면 게시 버전, 검증, 원자 교체, 호환 범위를 별도 계약으로 정한다.
원본 Sheet와 운영 데이터베이스를 동시에 편집 가능한 원본으로 만들지 않는다.

근거: 키트 \`docs/reference/data-authoring.md\`, \`docs/Build/data-snapshot.md:3\`,
\`scripts/data-snapshot.mjs:18\`, \`docs/platform/config.md:21\`과 \`docs/platform/config.md:33\`.

### 실행 수명과 성능

기존 호스트는 숨긴 화면의 루프 정지, 프레임 제한과 자원 해제를 맡는다.
백엔드 모듈이 이 수명과 별도로 프레임마다 서버를 호출하거나 새 영구 타이머를 만들지 않아야 한다.
종료한 씬이나 이전 계정의 응답이 현재 상태를 덮어쓰는 경우도 막아야 한다.

새 연결에서는 요청 기한, 취소, 같은 요청의 중복 실행 차단과 계정 전환 경계를 정한다.
초기화에 필요한 요청과 접속 후 늦게 읽어도 되는 요청을 구분한다.
기존 로컬 게임의 시작에 서버 대기를 추가할지는 기능별로 결정한다.
조회 재시도와 지급 명령의 재시도도 구분한다. 서버의 중복 처리 계약 없이 쓰기 요청을 자동 반복하지 않는다.

이번에는 실행 경로를 바꾸지 않았다. 프레임, 발열, 배터리, 네트워크량과 시작 시간은 측정하지 않았다.
근거: 키트 \`docs/runtime/performance.md\`와 \`src/phaser/host.ts\`.

### Android 앱 빌드

기존 runner는 소비 게임의 \`Project\`에서 앱 번들을 만들고, 형제 \`Native\` 호스트에 Capacitor sync를 실행한다.
Android 컴파일은 sync를 마친 \`Native/android\`에서 Gradle을 실행하는 별도 단계다.
키트 자체의 \`npm run build\`는 TypeScript 빌드이므로 APK를 만드는 명령과 구분한다.

앱 번들에는 실제 게임 진입이 \`index.html\`로 들어간다. 웹 갤러리의 iframe을 앱 진입으로 사용하는 구조가 아니다.
공통 출력 도구는 웹 \`dist\`, 앱 \`dist-app\`, Android 산출물을 소비 게임의 \`Project\` 기준 \`../../_Build\`에 둔다.
게임의 실제 폴더 구조를 받은 뒤 최종 절대 경로를 확인한다.

공통 compile의 APK 경로는 \`assembleDebug\`, AAB 경로는 \`bundleRelease\`다.
서비스 등급 \`debug/qa/release\`와 Gradle의 \`debug/release\`는 별도 선택이다.
일반 AAB 컴파일, 로컬 서명 연결, Play 업로드도 각각 구분한다. 이번에는 모두 실행하지 않았다.

근거: [앱 빌드와 sync](<원본 프로젝트 경로),
[Android 컴파일](<원본 프로젝트 경로),
[출력 위치](<원본 프로젝트 경로).
조사 항목은 \`BUILD-01\`부터 \`BUILD-06\`까지다.

### 구매와 서버 지급

현재 native adapter는 비소모성 상품만 허용한다. 소모성 상품과 구독은 초기화 단계에서 거부한다.
코어가 여러 상품 타입을 표현한다는 사실과 실제 native 지원 범위를 구분해야 한다.
일반 웹에는 기본 실구매 연결이 없다. Android에서는 기존 Google Play Billing 연결을 사용한다.

Android 검증은 기기의 Billing SDK로 소유 구매를 다시 조회해 상태와 상품 등을 비교한다.
Google Developer API를 통한 서버 검증, 백엔드 계정에 귀속된 지급과 환불 처리는 확인한 구현 범위 밖이다.
이 경계를 추가할 때는 플랫폼이 거래와 서버 계정의 관계를 결정해야 한다.

기존 코어는 비동기 구매 검증 뒤 동기 거래로 보상과 원장을 반영하고, 이후 구매 확정을 기다린다.
이때 \`progress.save\` 뒤에 \`flush\`를 직접 기다리는 호출은 없다.
따라서 동기 거래 성공을 디스크 영속 완료나 서버 지급 완료로 해석할 수 없다.
새 서버 연동에서는 지급의 영속 완료와 구매 확정의 순서를 명시해야 한다.

이 관찰은 공통 코어 단독의 범위다. 후속 조사한 Escape Ball은 \`confirmPurchase\`를 감싸 로컬 \`flush\`를 먼저 기다린다.
그 게임에도 같은 순서가 빠졌다고 해석하지 않는다. 소비 코드의 근거는 [게임별 연동안](10_AVOID_BALL_PILOT.md)에 있다.

\`IAPStore.verifyPurchase\`는 서버 검증을 연결할 후보 지점이다. 현재 주입된 native 검증이 서버 검증이라는 뜻은 아니다.
보상 함수 \`grant\`는 동기 계약이므로 비동기 서버 지급 함수를 그대로 넣을 수 없다.
구매 재시도, 기기 복구와 계정 전환은 서버의 중복 지급 방지와 함께 설계해야 한다.

상태 이름에도 차이가 있다. Android의 \`PURCHASED\`는 코어 지급 대기인 \`pending\`으로 바뀐다.
Android의 결제 대기 \`PENDING\`은 \`deferred\`로 바뀌며 지급하지 않는다.
운영 화면과 API에서는 이 두 대기를 같은 상태로 합치지 않는다.

근거: [native 상품 범위](<원본 프로젝트 경로),
[거래 처리 순서](<원본 프로젝트 경로),
[Android 주문 상태](<원본 프로젝트 경로),
[기기 구매 검증](<원본 프로젝트 경로).
조사 항목은 \`IAP-01\`부터 \`IAP-09\`, \`SERVER-01\`과 \`SERVER-02\`다.

### 로컬 알림과 원격 푸시

현재 \`/local-push-native\`는 기기에 예약하는 로컬 알림이다. 서버 푸시와 브라우저의 백그라운드 알림을 제공하지 않는다.
Android에서는 앱 이탈 때 예약하고 복귀 때 해당 예약과 표시를 취소하는 경로를 사용한다.
예약 성공만으로 실제 배너 전달을 보장하지 않는다. 기기와 절전 상태의 실행 결과는 확인하지 않았다.

확인한 Firebase 연결은 Android Analytics·Crashlytics용이다. 이 모듈에서 FCM 토큰과 원격 메시지 수신 경로를 찾지 못했다.
원격 푸시에는 기기 등록·갱신·해제, 수신과 화면 이동, 서버의 대상 선택·발송·재시도 계약이 추가로 필요하다.
기존 로컬 알림은 그대로 사용하고, 원격 푸시는 선택형 기능으로 연결하는 후보를 검토한다.

근거: [로컬 알림 범위](<원본 프로젝트 경로),
[Firebase 연결](<원본 프로젝트 경로).
조사 항목은 \`FIREBASE-01\`부터 \`FIREBASE-03\`, \`PUSH-01\`부터 \`PUSH-04\`, \`SERVER-03\`이다.

## 4. 플랫폼과 키트와 게임의 경계 후보

| 소유자 | 맡을 책임 | 두지 않을 정보 |
| --- | --- | --- |
| 내부 플랫폼 서버 | 프로젝트, 인증, 권한, 저장 버전, 보상 원장, 구매 검증, 운영 감사 | 기기 화면 배치와 게임 아트 |
| MinbWebKit의 선택형 연결 | 통신, 세션 수명, 요청 취소, 공통 응답, 연결 상태 | 게임별 아이템, 보상량, 스테이지 규칙 |
| 소비 게임 | 기능 선택, 데이터 검증, 서버 명령과 화면 연결, 기존 저장의 이전 정책 | 관리자 토큰과 공급자의 서버 비밀 |
| Android 호스트와 native 연결 | 스토어 구매와 알림, 향후 필요한 플랫폼 인증·기기 보관 | 서버 잔액과 보상 지급의 최종 판정 |

연결 모듈은 기존 공개 진입점과 별도로 선택해서 읽는 형태를 권한다.
연결을 사용하지 않는 기존 게임이 네트워크 호출이나 새 초기화 대기를 갖지 않아야 한다.
새 공개 이름은 아직 확정하지 않는다. 기존 export, 이벤트와 저장 키는 유지한다.
표의 플랫폼 인증과 기기 보관은 책임 후보다. 현재 로그인용 native API를 확인했다는 뜻이 아니다.

### 배치 방식 비교

- **키트 안의 선택형 모듈:** 현재 여러 웹 게임이 소비하는 배포 경로를 재사용한다. 키트의 하위 호환 규칙을 지켜야 한다.
- **별도 SDK 패키지:** 다른 엔진까지 독립 배포할 때 유리하다. 별도 버전과 소비 연결을 관리해야 한다.

현재 요청에는 첫 번째 방식을 권한다. 서버 API는 특정 렌더러에 의존하지 않게 정의한다.
이는 별도 패키지나 범용 프레임워크를 지금 생성하라는 뜻이 아니다.

## 5. 뒤끝 기능을 연결할 위치

| 기능 | 클라이언트 연결 | 서버의 책임 | 현재 상태 |
| --- | --- | --- | --- |
| 프로젝트·환경·점검·버전 | 부트 정보 조회 | 환경 격리, 지원 버전과 점검 정책 | 조사, 미구현 |
| 게스트·소셜 인증·세션 | 비동기 로그인과 갱신 | 증명 검증, 세션 발급·폐기, 계정 연결 | 조사, 미구현 |
| 프로필·진행 저장 | 로컬 상태와 선택한 범위 동기화 | 소유권, 스키마, 버전 경합 | 로컬 저장 재사용, 서버 미구현 |
| 차트·밸런스·확률표 | 기존 배치와 게시 버전의 소비 | 검증·게시·이력, 서버 추첨의 판정 | 기존 빌드 배치와 구분 필요 |
| 재화·아이템·우편·쿠폰 | 명령 결과와 상태 반영 | 중복 지급 방지, 원장과 수령 기록 | 로컬 보상과 서버 권한 구분 필요 |
| 랭킹·시즌 | 조회와 검증 가능한 결과 제출 | 점수 판정, 시즌 마감과 보상 | 조사, 미구현 |
| 친구·길드·그룹 | 관계 조회와 변경 명령 | 관계·정원·권한·중복 처리 | 조사, 미구현 |
| 공지·이벤트·약관·문의 | 조회, 동의와 문의 전송 | 다국어·공개 기간·이력·응답 | 조사, 미구현 |
| 구매·복구·환불 | native 거래 증명을 서버에 전달 | 검증, 계정 귀속, 지급·회수의 상태 | 비소모성 기기 검증·복구·확정 존재, 서버 계약 미구현 |
| 광고 보상 | 기존 광고 결과를 업무 명령과 연결 | 필요한 경우 증명 검증과 중복 제한 | 광고 콜백만으로 서버 판정 불가 |
| 원격 푸시 | 기기 등록·해지와 수신 | 대상, 예약, 재시도, 공급자 전달 | 로컬 예약 존재, 확인한 모듈에 FCM 경로 없음 |
| 로그·통계·감사 | 허용한 이벤트만 전송 | 수집 한도, 보관, 집계와 운영 추적 | 진단 로그와 구분 필요 |
| 채팅·매칭·방·월드 | 인증 후 연결과 재접속 | 연결 권한, 상태 소유권과 전달 | 별도 실시간 계약 필요 |
| 관리자·테이블·콘텐츠·서버 확장 | 내부 운영 콘솔이 호출 | 관리자 인증과 동작별 권한 | 게임 번들과 분리 |

각 원본 기능의 근거는 [핵심 기능](01_CORE_FEATURES.md), [운영과 외부 연동](02_OPERATIONS_INTEGRATIONS.md),
[실시간 기능](03_REALTIME.md)에 있다. 이 표는 전체 기능을 한 번에 구현하는 계획이 아니다.

## 6. 첫 연결에서 정할 계약

아래 이름은 책임을 설명하는 예시다. 실제 URL과 TypeScript 공개 함수는 아직 정하지 않았다.

1. 부트 정보는 프로젝트·환경·클라이언트 버전과 서버 상태를 연결한다.
2. 로그인은 검증한 증명을 서버 계정과 연결하고 세션의 만료·갱신·폐기 규칙을 반환한다.
3. 프로필은 로컬 실행 ID와 서버의 유저 식별자를 구분한다.
4. 저장 조회는 서버 버전과 데이터를 함께 반환한다.
5. 저장 요청은 기대 버전을 포함한다. 충돌하면 서버가 기존 상태를 조용히 덮어쓰지 않는다.
6. 서버 업무 명령은 중복 처리 단위와 결과 조회 방법을 정한다.

기기 UUID나 진단 세션 ID만으로 계정 소유권을 증명하지 않는다.
접근 토큰과 갱신 자격의 저장 방식은 실제 웹·Android 실행 환경에서 따로 검증한다.
기존 저장 암호화가 서버 인증이나 Android의 보안 보관을 대신한다고 가정하지 않는다.

현재 \`BaseGameManager.sessionId\`는 실행을 추적하는 ID다. 서버에서 발급한 인증 세션이 아니다.
플랫폼 서비스 문서도 회사 서버 인증과 클라우드 저장이 없음을 명시한다.
근거: [기존 서비스 범위](<원본 프로젝트 경로),
[실행 ID](<원본 프로젝트 경로), 조사 항목 \`RUNTIME-09\`와 \`RUNTIME-10\`.

계정이 바뀌면 이전 계정의 대기 요청과 로컬 상태를 새 계정에 섞지 않아야 한다.
기존 오프라인 저장을 서버 계정으로 옮길 때도 대상과 허용 필드를 정한다.
유료 재화·구매 권한·보상 수령 기록은 로컬 숫자를 업로드해 확정하지 않는다.

## 7. 첫 검증의 완료 조건

| 흐름 | 확인할 결과 | 아직 실행하지 않은 이유 |
| --- | --- | --- |
| 기존 로컬 게임 시작 | 연결 미사용 시 기존 시작과 저장 유지 | 소비 게임 경로 미확인 |
| 웹과 Android 접속 | 실제 origin에서 통신과 인증 성공 | 소비 설정과 서버 미구현 |
| 로그인 후 저장·재시작 | 같은 계정과 최신 버전을 다시 읽음 | 서버와 실행 게임 필요 |
| 다른 계정 접근 | 타인 데이터와 운영 API 접근 거부 | 두 테스트 계정과 서버 필요 |
| 동시 저장 | 하나의 이전 버전으로 최신 상태를 덮어쓰지 않음 | 서버 계약 필요 |
| 연결 끊김과 종료 | 실패 구분, 취소, 이전 응답의 적용 차단 | 통신 계층 미구현 |
| 구매 복구와 재요청 | 검증·지급·확정 사이 실패에도 중복 지급 없음 | 스토어 테스트와 서버 필요 |
| Android 복귀 | 앱 재개 후 상태와 자격을 안전하게 확인 | 실제 APK와 기기 필요 |

이 표는 통과 기록이 아니다. 소비 게임을 지정하면 실제 빌드 명령, origin과 기기 정보를 기록한다.
UI와 성능을 바꾸는 구현은 같은 화면·입력·환경에서 변경 전후를 비교한다.

## 8. 다음 입력과 남은 조사

사용자가 첫 소비 게임으로 \`원본 프로젝트 경로\`을 지정했다.
그 게임의 저장·부트·제작 API·Android 빌드 경계를 조사했다. 외부 설정과 실제 APK 검증은 후속 단계로 둔다.
서버 배포 환경, 우선 연결할 게임과 기존 유저 데이터의 이전 여부는 아직 정하지 않았다.
초기에는 계정·프로필·저장의 작은 흐름을 연결하고, 기존 게임 계약을 유지하는지 확인하는 순서를 권한다.

키트의 런타임 저장과 Android·구매·알림 구현을 담당자별로 읽고 근거를 파일에 보존했다.
런타임 조사는 16개 항목과 입력 파일 43개를 기록했다. Android 조사는 25개 항목과 읽은 파일 34개를 기록했다.
겹치는 파일이 있으므로 파일 수를 더해 고유 파일 수로 보고하지 않는다.
이는 소스·문서 조사 수치이며 실제 실행을 검증한 기능 수가 아니다.

제품 코드, UI, 저장 키와 빌드 설정은 수정하지 않았다. 빌드·자동 테스트·기기 설치·결제·푸시·성능 측정은 실행하지 않았다.
이번 문서의 링크와 증거 목록은 별도 기록으로 검사한다.`,filtered:!1,sourceHash:"3b995991dd5167935a9ee066c378501d68e17dce8ffb6c23658de5bcc4b41f13"},{id:"study-thebackend-10-avoid-ball-pilot-md",title:"Escape Ball의 첫 서버 연동안",path:"study/thebackend/10_AVOID_BALL_PILOT.md",category:"이전 조사",status:"역사적 조사·제안",body:`# Escape Ball의 첫 서버 연동안

첫 검증 게임은 사용자가 지정한 \`avoid-ball-origin\`이다. 게임 표시 이름은 Escape Ball이다.
이번 단계는 실제 게임 구조에 맞춰 서버의 계약과 MinbWebKit의 연결 지점을 정리한다.
Firebase·스토어·원격 Config의 실제 연결과 APK·기기 검증은 사용자의 후속 지시에 따라 제외한다.

기준일은 2026-11-03이다. 이 문서는 조사와 설계 후보다. 서버나 SDK를 구현해 게임과 연결한 결과는 아니다.
게임 코드, UI, 저장 데이터, 서브모듈과 빌드 검사를 수정하지 않았다.

## 1. 이 작업이 만드는 결과

게임에서 서버로 보내는 요청과 서버가 돌려주는 결과를 정한다. 이것이 서버 API의 계약이다.
그 계약을 게임의 부트·저장·종료 흐름에 연결할 위치를 정한다. 이것이 MinbWebKit 연결 설계다.
내부 팀의 관리 콘솔은 같은 서버에 저장된 프로젝트·유저·진행을 관리한다.

예를 들어 진행 저장은 다음 책임으로 나뉜다.

1. 게임이 저장할 진행과 마지막으로 받은 서버 버전을 준비한다.
2. 키트의 연결 모듈이 로그인 상태와 함께 요청을 보낸다.
3. 서버가 계정·프로젝트·허용 필드·저장 버전을 확인한다.
4. 서버가 새 버전과 결과를 반환한다.
5. 게임이 서버에 반영한 상태와 아직 로컬에만 있는 상태를 구분한다.

기존 동기 저장을 모두 HTTP 요청으로 바꾸는 작업은 아니다.
게임 안에서 즉시 필요한 상태는 기존 저장 계약을 유지하고, 서버와 통신하는 작업에는 별도 비동기 경계를 둔다.

## 2. 실제 소비 게임

| 항목 | 확인한 값 | 의미 |
| --- | --- | --- |
| 게임 경로 | \`원본 프로젝트 경로\` | 사용자가 지정한 첫 소비 게임 |
| 게임 HEAD | \`edddfafde393b02f0fdcbcaf799d9b0f46bff7e1\` | 이번 조사의 소스 기준 |
| 브랜치 | \`main\` | 조회 당시 상태 |
| 앱 | \`Escape Ball\`, \`com.storio.avoidball\`, \`0.9.0\` | 기존 이름과 패키지를 유지 |
| 게임 소스 | \`Project\` | 현재 등록된 소비 경로 |
| 키트 | \`Project/MinbWebKit\` | \`.gitmodules\`에 등록된 서브모듈 |
| 키트 HEAD | \`ad629a12e473b71037e6fab6a2042463623ad1a2\` | 앞서 조사한 공통 키트와 같음 |
| Android 호스트 | \`Native/android\` | Capacitor 설정의 대상 |

최초 상태에는 추적하지 않는 \`project-web/\`와 \`study/\`가 있었다. 이 폴더들은 기존 작업으로 보존하고 조사 대상에서 제외했다.
오래된 이름의 폴더를 현재 게임 소스로 선택하거나, 새 구현을 그 안에 만들지 않는다.

근거: [소비 게임의 조사 기준](evidence/avoid-ball/consumer-source-context.json),
[게임 패키지](<원본 프로젝트 경로),
[Capacitor 설정](<원본 프로젝트 경로).

## 3. 게임에 이미 있는 연결

### 로컬 저장과 구매

게임은 공통 UserInfo 저장과 동기 거래를 실제로 소비한다. 기존 저장 키와 이전 규칙을 유지해야 한다.
서버 계정이 생겨도 기존 로컬 UUID를 인증 자격으로 사용하지 않는다.
이 UUID는 새 기본값과 저장 초기화 과정에서 바뀔 수 있기 때문이다.

이 게임에는 구매 확정 전에 저장 완료를 기다리는 연결이 이미 있다.
\`Project/src/platform/iap.ts\`의 \`confirmPurchase\`가 \`await user.flush()\` 뒤 원래 스토어 확정을 호출한다.
따라서 [공통 키트 조사](09_WEB_ANDROID_INTEGRATION.md)의 코어 단독 관찰을 이 게임의 결함으로 확대하지 않는다.
서버 검증·계정 귀속·중복 지급 방지는 여전히 별도 계약이다.

근거: [게임의 IAP 연결](<원본 프로젝트 경로),
[소비 런타임 조사](evidence/avoid-ball/consumer-runtime-findings.json).

현재 등록된 사용자 저장 모듈은 다음 6개다. 물리 저장 영역의 \`namespace\`는 \`avoidball.preferences\`다.

| 모듈 | 버전 | 저장하는 내용 |
| --- | ---: | --- |
| \`userinfo\` | 7 | 로컬 유저 ID, 현재 스테이지, 코인, 광고 제거, 로비 해금 |
| \`userinfoItem\` | 1 | 아이템 수량 |
| \`userinfoEnemy\` | 1 | 확인한 적 소개 |
| \`userinfoIntro\` | 1 | 오프닝 확인 |
| \`userinfoCheckin\` | 1 | 출석 진행 |
| \`userinfoIAP\` | 1 | 로컬 구매 처리 기록 |

\`userinfo\` 하나에도 진행과 경제 상태가 함께 있다. 전체 모듈을 그대로 서버에 올려 신뢰하는 계약은 적합하지 않다.
처음 동기화할 필드와 서버에서 판정할 필드를 구분해야 한다.
이전 모듈 \`userinfoPlayer\`의 null 표시는 저장 이전 기록이므로 임의로 제거하지 않는다.
언어·음량·진동 등 기기 설정의 별도 LocalData도 진행과 함께 덮어쓰지 않는다.

### 부트에서 연결할 위치

현재 흐름은 \`main.bootstrap → GameManager.start → 매니저 초기화 → 씬 준비 → 프레임 갱신\`이다.
\`PlatformManager.init\` 안에서는 저장 열기와 UserInfo 초기화를 먼저 마치고 IAP 복구를 시작한다.
서버 계정과 초기 진행을 연결할 후보는 이 플랫폼 준비 단계다.

서버 상태가 준비되기 전에 구매 복구가 다른 계정에 반영되거나, 씬을 연 뒤 늦은 응답이 진행을 덮는 상황을 검토해야 한다.
이는 새 대기를 이미 추가했다는 뜻이 아니다. 필요한 연결 순서를 결정하기 위한 소스 근거다.

근거: [게임 매니저](<원본 프로젝트 경로),
[플랫폼 준비](<원본 프로젝트 경로),
[저장 모듈 등록](<원본 프로젝트 경로).

### 제작 도구의 인증과 게임 계정

StageOS의 로그인은 제작 도구와 웹 접근을 제어한다. 이 계정이 게임 UserInfo의 유저와 같다는 근거는 없다.
운영 웹에는 전체 경로의 인증과 세션 재확인도 있으므로, 게임 데이터가 번들에 있다는 이유로 서버 의존이 없다고 판단하지 않는다.
Android의 native 번들은 이 웹 인증 플러그인을 제외하는 별도 경로다.

새 플랫폼은 운영자 인증과 게임 유저 인증을 구분해야 한다.
기존 StageOS 세션이나 관리자 자격을 게임 SDK의 인증 정보로 전용하지 않는다.

### 제작 데이터와 게임 서버의 상태

일반 웹 개발 모드는 StageOS에서 스테이지를 읽는 경로가 있다.
표준 build와 native는 번들에 포함한 ConfigStage를 사용하는 경로다.
빌드 전 최신 Config를 받는 과정은 게임 실행 중의 진행 저장과 다른 책임이다.

이번에 원격 Config 연결을 제외한다는 뜻은 이 제작 데이터 흐름을 새 서버 저장으로 바꾼다는 뜻이 아니다.
현재 단계에서는 실행하지 않은 범위로 남기고, 실제 소비 코드와 신규 게임 API의 책임을 분리한다.
근거: [제작 API 조사](evidence/avoid-ball/authoring-api-findings.json).

## 4. 첫 연동에서 정할 서버 계약

아래는 자체 플랫폼의 후보 책임이다. 현재 구현된 URL이나 뒤끝의 공개 게임 API 목록이 아니다.

| 작업 | 게임이 전달할 내용 | 서버가 보장할 결과 |
| --- | --- | --- |
| 부트 정보 조회 | 공개 프로젝트 식별자, 환경, 클라이언트 버전 | 대상 프로젝트와 점검·지원 버전 상태 |
| 게스트 세션 시작 | 발급·보관 규칙을 정한 설치 자격 | 서버 유저 식별자와 세션 만료 정보 |
| 세션 갱신·종료 | 서버가 발급한 갱신 자격 또는 현재 세션 | 교체·폐기 규칙에 따른 결과 |
| 내 프로필 조회 | 현재 인증 세션 | 서버가 결정한 프로젝트와 유저 |
| 진행 조회 | 현재 인증 세션 | 허용한 진행 데이터와 서버 버전 |
| 진행 저장 | 허용한 필드, 기대 버전, 요청 식별자 | 새 버전 또는 명시적인 충돌 결과 |
| 서버 보상 명령 | 보상 수량이 아닌 업무 대상과 요청 식별자 | 조건 검증과 한 번의 지급 결과 |

첫 실제 구현에서는 부트·세션·프로필·진행의 작은 흐름부터 검증하는 방향을 권한다.
재화·구매·우편·쿠폰 등 경제 기능은 서버 원장과 중복 처리 계약을 갖춘 뒤 연결한다.
조사한 전체 기능을 첫 게임에 한 번에 추가하는 계획은 아니다.

### 진행 저장의 경계

- 서버가 인증 세션에서 프로젝트와 유저를 결정한다. 요청 본문의 유저 ID만 믿지 않는다.
- 게임이 어떤 UserInfo 필드를 동기화할지 정하고, 서버도 같은 필드를 검증한다.
- 로컬 파일 전체나 로컬 결제 원장을 올렸다는 이유로 구매 권한을 인정하지 않는다.
- 서버 버전이 다르면 충돌을 반환한다. 최신 데이터를 조용히 덮어쓰지 않는다.
- 로컬 저장 완료와 서버 반영 완료를 별도 상태로 기록한다.
- 같은 쓰기를 다시 보내도 결과가 중복되지 않도록 요청 단위를 정한다.

### 실패 결과의 경계

인증 만료, 권한 부족, 잘못된 데이터, 버전 충돌과 일시적인 연결 실패를 구분한다.
HTTP 응답 성공과 실제 지급·발송 완료도 구분해야 한다.
SDK는 실패를 숨겨 성공으로 반환하거나, 지급 요청을 조건 없이 반복하지 않는다.

## 5. MinbWebKit의 연결 후보

| 경계 | 재사용할 부분 | 추가로 정할 부분 |
| --- | --- | --- |
| 부트 | 비동기 Manager 초기화와 준비 완료 순서 | 서버 연결을 선택한 게임의 초기화 책임 |
| 저장 | \`StorageLike\`, AtomicStorage, 캐시와 \`flush\` | 서버 버전, 동기화 결과와 계정별 연결 |
| 통신 | 표준 HTTP와 기존 취소·종료 패턴 | 요청 기한, 인증 갱신, 중복 실행 차단 |
| 계정 | 기존 로컬 유저 상태 | 서버 계정과 로컬 상태의 연결·전환 정책 |
| 게임 명령 | 소비 게임이 소유한 규칙과 데이터 검증 | 서버가 확정한 결과를 게임에 반영하는 경계 |
| 운영 | 기존 진단과 현재 UI | 관리 서버의 감사·조회 계약 |

키트에는 선택형 모듈을 추가하는 방향을 권한다. 사용하지 않는 게임의 부트와 저장은 그대로 동작해야 한다.
특정 게임의 아이템 ID·보상 수량·진행 규칙은 키트에 넣지 않는다.
기존 공개 함수의 반환형과 저장 키도 연결 편의를 위해 바꾸지 않는다.

현재 UserInfo 저장에는 계정 전환과 외부 backend 주입이 공개 API로 준비돼 있지 않다.
따라서 서버 주소 하나를 입력하면 기존 저장 전체가 자동으로 클라우드에 연결되는 상태는 아니다.
첫 구현 전에 저장 수명, 계정 전환과 세션의 보관 방식을 함께 정해야 한다.

## 6. 이번 단계의 산출물과 제외 범위

이번 단계에서 남기는 결과는 게임별 연결 지점, 서버의 책임, 기존 계약, 확인 기준과 소스 근거다.
다음 실제 구현에서 어떤 파일과 동작을 바꿀지 검토할 수 있게 만드는 것이 목적이다.
소비 런타임은 확인 19개·추론 2개·미확인 1개를 기록했다. Android 사전조사는 확인 16개를 별도로 기록했다.
이 수치는 조사 항목 수다. 기능 실행을 검증한 개수가 아니다.
제작 API 조사는 소스 줄 근거를 보존했지만 파일 해시는 측정하지 않았다. 이를 해시 일치 검사로 보고하지 않는다.

사용자는 정상 빌드하던 별도 폴더가 없다고 답했다. 이어서 현재 외부 설정을 제외하고 진행하라고 지시했다.
따라서 아래 항목은 API·SDK 설계의 진행 조건으로 요구하지 않는다.

- Firebase 프로젝트 연결과 수집 확인.
- 실스토어 구매·복구·환불과 외부 검증.
- 원격 Config 다운로드와 실제 제작 계정 인증.
- Android SDK 준비, APK 생성·설치와 기기 실행.

이 항목들을 제외해도 코드에 적힌 책임과 연결 계약은 조사할 수 있다.
반면 실제 통신·저장·구매·APK 동작을 통과했다고 주장할 수는 없다.
준비 상태는 [Android 사전조사](evidence/avoid-ball/android-build-preflight.json)에 별도로 남긴다.

## 7. 실제 구현 후 확인할 흐름

| 확인 흐름 | 완료 근거 | 현재 상태 |
| --- | --- | --- |
| 연결을 사용하지 않는 기존 게임 | 기존 부트·로컬 저장·화면 동작 유지 | 구현 전 |
| 서버 유저 생성과 재접속 | 같은 설치 자격이 같은 서버 유저로 연결 | 구현 전 |
| 진행 저장과 다시 읽기 | 같은 유저·프로젝트의 최신 버전 조회 | 구현 전 |
| 다른 계정 접근 | 타인 진행과 관리 API 접근 거부 | 구현 전 |
| 동시 저장 | 충돌을 명시하고 최신 상태 보존 | 구현 전 |
| 연결 실패와 늦은 응답 | 실패 구분, 취소와 이전 계정 반영 차단 | 구현 전 |
| 중복 업무 요청 | 같은 업무 결과를 두 번 지급하지 않음 | 경제 기능을 연결할 때 확인 |
| Android 실행 | 실제 앱 origin·저장·복귀 동작 확인 | 사용자가 이번 단계에서 제외 |

성능과 UI의 기준은 기존 게임을 따른다. 이번 조사에서 새 화면이나 네트워크 대기를 추가하지 않았다.
과거 성능 기록은 다른 커밋의 결과이므로 현행 소스의 성능 검증으로 재사용하지 않는다.

## 8. 아직 확정하지 않은 설계 결정

- 서버 언어, 데이터베이스와 배포 환경.
- 설치 자격의 발급·보관과 계정 복구 방법.
- 첫 동기화에 포함할 진행 필드와 기존 저장의 이관 정책.
- 네트워크가 없을 때 서버 기능의 이용 범위와 사용자에게 보여줄 상태.
- 실제 운영자 계정·역할과 관리 콘솔의 승인된 UI.

이 결정은 구현 전에 검토할 대상이다. 부족한 외부 설정을 추측해 채우거나 새로운 화면을 확정한 상태가 아니다.`,filtered:!1,sourceHash:"ccd541e3fcdfa2e44982a7d1fa8a932d298df33bbbf615bbcc20e5458651fc70"},{id:"study-thebackend-handoff-20261103-md",title:"뒤끝 조사 인계 기록",path:"study/thebackend/HANDOFF_20261103.md",category:"이전 조사",status:"역사적 조사·제안",body:`# 뒤끝 조사 인계 기록

이 기록은 대화 압축 후에도 조사를 이어가기 위한 기준이다. 기준일은 2026-11-03이다.
후속 조사를 반영한 최신 상태는 문서 끝의 **소비 게임 지정과 외부 설정 제외**를 따른다. 앞부분은 각 저장 시점의 상태다.
원문 대화 일부는 이미 요약으로 대체됐다. 이 문서가 원문 전체를 복원한다고 보장하지 않는다.
조사 문서와 증거 파일은 디스크에 남아 있다. 원문이 없는 내용은 아래에서 구분했다.

## 현재 목표와 사용자 결정

- 사용자는 REA(Reverse Engineer Anything)로 뒤끝의 게임 백엔드 기능을 조사하라고 요청했다.
- 목적은 내부 팀이 사용하는 게임 백엔드와 클라이언트 관리 플랫폼을 재구성하는 것이다.
- 기능 목록, 화면, 입력과 응답의 계약, 상태 변화, 권한, 운영 기능, 외부 연동을 조사한다.
- 현재 단계는 조사와 설계 후보 작성이다. 실제 플랫폼 구현을 완료한 단계가 아니다.
- REA 저장소는 \`https://github.com/morluto/rea\`다. 사용자는 없으면 직접 복제하라고 허용했다.
- 사용자는 \`tst\` 프로젝트에서 가상 유저·테이블·콘텐츠의 생성과 삭제를 허용했다.
- 사용자는 계속 진행하라고 반복해서 지시했다. 승인한 범위의 조회와 실험에 다시 승인을 묻지 않는다.
- 처음에는 게임 엔진이 미정이었다. 최신 지시는 웹 기반 빌드와 Android 배포다.
- 템플릿은 사용자가 서브모듈이라고 설명한 \`MinbWebLib\`로 확장할 예정이다.
- 사용자 표기에는 \`MinnWebLib\`도 있다. 실제 존재를 확인한 경로는 \`원본 프로젝트 경로\`다.
- \`MinbWebLib/AGENTS.md\`는 존재한다. 내용, 코드 구조, Android 패키징 방식은 아직 읽지 않았다.
- 템플릿 코드와 제품 화면은 수정하지 않았다. Android 빌드도 실행하지 않았다.
- 최신 우선 지시는 압축 전에 기록을 남기는 것이다. 이 기록 중에는 새 HAR 추출을 시작하지 않았다.

## 작업 공간과 변경 범위

- 현재 루트: \`원본 프로젝트 경로\`.
- 루트에는 Git 저장소가 없다. \`references/nakama\`의 중첩 저장소와 기존 Nakama 문서는 별도 자료다.
- 이번 조사 문서는 \`study/thebackend\`에 있다. 기존 Nakama 분석과 제품 코드는 유지했다.
- 루트 \`README.md\`에는 뒤끝 조사 링크만 추가했다.
- 인계 문서를 직접 작성했다. Git 저장소나 공통 설정을 새로 만들지 않았다.
- 현재 쓰기 허용 범위는 이 작업 공간과 지정된 시각화 폴더, 임시 폴더다.
- \`MinbWebLib\`는 현재 읽기만 가능하다. 후속 편집이 필요하면 당시 권한과 요청 범위를 다시 확인한다.

## 저장된 조사 문서

| 문서 | 현재 내용 | 근거와 한계 |
| --- | --- | --- |
| [README.md](README.md) | 조사 색인과 상태 | 전체 동작 복원을 완료했다고 쓰지 않음 |
| [00_CONSOLE_SOURCE_ANALYSIS.md](00_CONSOLE_SOURCE_ANALYSIS.md) | 공개 콘솔과 REA 분석 | 초기 정적 조사와 실제 관찰을 구분 |
| [01_CORE_FEATURES.md](01_CORE_FEATURES.md) | 인증, 세션, 캐릭터, 데이터, 차트, 확률, 랭킹, 우편, 쿠폰, 친구, 길드 | 공식 문서 조사 32개 단위, 공식 출처 62개 |
| [02_OPERATIONS_INTEGRATIONS.md](02_OPERATIONS_INTEGRATIONS.md) | 권한, 프로젝트, 펑션, 콘텐츠, 문의, 로그, 통계, 구매, 환불, 웹숍 | 공식 URL 86개, 실제 연동은 미검증 |
| [03_REALTIME.md](03_REALTIME.md) | 매치, 채팅, 월드의 연결과 상태 계약 | 공식 URL 41개, 실시간 실행은 미검증 |
| [04_RECONSTRUCTION_BLUEPRINT.md](04_RECONSTRUCTION_BLUEPRINT.md) | 후보 모듈, 데이터 모델, API 책임, 구현 순서 | 승인 전 설계 후보 |
| [05_LIVE_CONSOLE_ANALYSIS.md](05_LIVE_CONSOLE_ANALYSIS.md) | 로그인 후 화면과 가상 데이터 실험 | 실제 생성, 수정, 재조회, 삭제의 증거 |
| [06_STATIC_API_CONTRACTS.md](06_STATIC_API_CONTRACTS.md) | 공개 소스의 HTTP 호출과 입력 전달 | helper 호출식 672개와 입력 전달 282곳 |
| [07_SCREEN_CONTRACTS.md](07_SCREEN_CONTRACTS.md) | 폼, 검증, 버튼 조건과 후속 목록 | 소스 위치 91개와 미확인 항목 98개 |

\`08_NETWORK_OBSERVATIONS.md\`와 \`evidence/live-console/network-contracts.json\`은 아직 없다.
색인에는 후속 문서로 먼저 연결했다. 이 링크가 현재 미완성이라는 사실을 유지한다.

## REA와 공개 소스의 실제 상태

- REA 복제 경로: \`/private/tmp/rea-research-20261103\`.
- REA 커밋: \`eef8f44003e6bf781baf4f885f84d03b31ea6c3a\`.
- 임시 실행 환경: \`/private/tmp/rea-cli-runtime-20261103\`. 전역 설치와 전역 설정 변경은 하지 않았다.
- 성공 실행 버전은 REA 6.8.0과 Node 24.22.1이다. 시스템 Node 24.3은 요구 버전보다 낮았다.
- \`REA_DARWIN_MODULE_CACHE_PATH=/private/tmp/rea-clang-cache-20261103\`를 사용했다. 기본 캐시 경로에는 쓸 수 없었다.
- 전체 번들 분석은 외부 150초 제한으로 취소됐다. 종료 코드는 143, 분석한 JS는 0개였다.
- 당시 최대 합계 RSS는 약 1.19GiB였다. 종료 후 남은 관련 프로세스가 없음을 당시 확인했다.
- 원인을 확인한 뒤 공개 소스에서 메뉴와 관리자 API 선언 두 부분을 추출했다.
- 추출물 두 개의 REA 분석은 종료 코드 0, 5.84초, AST 노드 1,087개로 끝났다.
- 구문 분석 실패는 없었다. 의미 분석 범위는 \`unknown\`이며 미해결 항목 106개가 남았다.
- 추출물에서 경로 후보가 0개라는 결과는 전체 콘솔의 경로가 없다는 뜻이 아니다.
- 증거 ID: \`ev_23b651616813fea729fc67dea6521332ddbcb5c1a75e281e9b412cf7b1809cec\`.

공개 원본은 \`evidence/public-console\`에 보존했다.

- \`index.html\`: 2,983 bytes.
- \`index-Cp2VxB6O.js\`: 5,873,951 bytes.
- JS SHA256: \`4be8ab658aa4ff9252b19f03168fa4ba17fe04570f86d997c494c2fc5eb9b046\`.
- HTML SHA256: \`961aee293400b3e834fbba457a162d5f99de6e2fc157f8659ed4038a826b6c79\`.
- \`menus.json\`: 메뉴 선언 43개.
- \`routes.json\`: 중첩 경로와 구버전 경로를 포함한 선언 248개.
- \`api-path-candidates.json\`: 경로 모양 문자열 481개. UI 경로와 쿼리 키도 포함하므로 API 개수로 쓰지 않는다.
- \`api-contracts.json\`: HTTP helper 호출식 672개. 서로 다른 method·템플릿 표현은 649개다.
- 조건부 경로 6개, 해석하지 못한 경로 10개, 입력 전달 호출 282곳이 있다.
- 672개를 실제 실행한 API 수나 전체 서버 API 수라고 쓰지 않는다.
- \`focused-source\`에는 출처 위치를 보존한 두 추출물이 있다. 원본 Unicode 문자 위치를 사용했다.
- \`rea-run.json\`, \`rea-result.json\`, \`rea-progress.ndjson\`은 전체 분석의 실패 기록이다.
- \`rea-focused-run.json\`, \`rea-focused-result.json\`, \`rea-focused-progress.ndjson\`은 제한한 범위의 성공 기록이다.

공식 문서 복제는 \`/private/tmp/backnd-docs-research-20261103\`에 있다.
커밋은 \`fe41d27e1515d0c492ddc477e075342804841168\`이다. 문서 저장소이며 제품 서버 소스가 아니다.
현재 공식 문서 주소는 \`https://docs.backnd.com/\`이다. 저장소와 공개 페이지의 세대 차이를 구분한다.

## 실제 콘솔 조사와 정리 결과

대상은 사용자가 제공한 뒤끝 프로젝트의 \`tst\`다. 로그인 역할은 \`Admin\`, \`최고관리자\`였다.
헤더에는 \`SDK 연동 전\`이 표시됐다. 다음 실험에서 만든 자원은 모두 삭제 결과를 확인했다.

### 가상 유저

- 이름: \`rea_probe_1103\`.
- UUID: \`348ca6e0-d729-11f1-a4d7-f3922eaabe0e\`. 이번 실험에서 만든 가상 식별자다.
- UID: \`1793670740046\`. 테스트 비밀번호는 조사 문서에 저장하지 않았다.
- 가입 유형은 \`customSignUp\`이었다. 기기 표시는 \`thebackend_console\`이었다.
- 20자 닉네임 \`rea_probe_nick_1103x\`를 저장하고 목록에서 확인했다.
- 21자 입력에는 공백 관련 오류가 나왔다. 이 시도는 당시 상호작용 기록이며 별도 증거 파일은 없다.
- 이 현상만으로 SDK나 서버의 닉네임 검증 계약을 확정하지 않는다.
- 유저 삭제 시 게임정보와 랭킹도 삭제하도록 선택했다. 대상은 이 가상 유저 한 명이었다.
- \`user-cleanup.ax.txt\`와 \`final-users-empty.png\`에서 빈 유저 목록을 확인했다.

### 구형 게임정보

- 테이블: \`rea_probe_1103\`, private, 스키마 미정, 활성 상태.
- 가상 유저 소유 행에 \`probe_note="created_for_research"\`를 저장했다.
- 시스템 필드 \`gamer_id\`, \`inDate\`, \`owner_inDate\`, \`updatedAt\`을 관찰했다.
- 테이블과 행 생성은 네트워크 기록을 시작하기 전이었다.
- 테이블 이름을 입력해 삭제했다. \`game-info-cleanup\` 증거에서 테이블이 없음을 확인했다.

### 신규 데이터베이스

- 프로젝트의 데이터베이스는 조사 전부터 FREE 상태였고 리전은 서울이었다. 활성화와 요금제 변경은 하지 않았다.
- 테이블: \`rea_probe_db_1103\`, \`UserTable\`, SELF 읽기·쓰기 허용, OTHERS 미선택.
- 고정 \`user_uuid\`, 기본 키 \`id:Int32 AUTO_INCREMENT\`, \`score:Int32 NOT NULL DEFAULT 0\`을 확인했다.
- 가상 UUID의 행에 \`score=7\`을 넣었다. \`id=1\`을 확인했다.
- 숫자를 9로 바꾼 뒤 다시 조회했다. \`database-update-persisted\`에서 9가 남았음을 확인했다.
- 생성한 C# 모델 코드를 화면에서 읽었다. 컴파일하거나 게임에서 실행하지 않았다.
- 행을 삭제했다. \`database-row-cleanup\`에서 빈 결과를 확인했다.
- 왼쪽 테이블 이름 오른쪽의 세로 점 메뉴로 테이블을 삭제했다. 우클릭 메뉴가 아니다.
- 버튼에는 접근성 이름이 없었다. 당시 화면 좌표 \`[483,328]\`로 눌렀으며 다음 작업에서 좌표를 재사용하지 않는다.
- 삭제 확인은 정확한 테이블 이름을 요구했다. 최대 6시간, 처리 비용, 이름 재사용 제한 안내가 있었다.
- 이번 작은 테이블은 완료 알림과 0/50 목록을 확인했다. 모든 삭제가 즉시 끝난다고 일반화하지 않는다.
- \`database-table-cleanup\`에 마지막 상태를 저장했다.

### 비공개 공지

- 제목: \`REA_PROBE_20261103\`. 영어 FALLBACK과 한국어가 기본 언어였다.
- 영어만 입력하면 한국어 제목과 본문의 필수 오류가 나왔다.
- 한국어를 채우고 공개 선택을 끈 뒤 생성했다. 목록에서 비공개 상태를 확인했다.
- 공지를 삭제했다. \`notice-cleanup\`에 빈 목록을 저장했다.

### 다른 화면에서 확인한 범위

- 메뉴 약 40개를 따라 이동했고, 최종 URL의 최상위 경로는 36개였다.
- 채팅·월드의 일부 경로는 설정 화면으로 이동했다. 전체 메뉴 43개를 실행 검증했다는 뜻이 아니다.
- 채팅, 월드, 매치, 펑션, 환불, 웹숍은 시작 또는 활성화 안내를 관찰했다. 활성화하지 않았다.
- 펑션의 FREE 초과 과금 안내를 관찰했다. 배포와 호출은 하지 않았다.
- 월드 베타 안내의 무료·100 CCU는 당시 표시 문구다. 실제 부하나 성능을 측정하지 않았다.
- 영수증 화면은 스토어 설정을 요구했다. 실제 결제나 스토어 연결은 하지 않았다.
- 신규 DB의 당시 표시 한도는 읽기 300MB, 쓰기 100MB, 저장 200MB, 테이블 50개, 컬럼 80개였다.
- 이 한도를 다른 요금제와 모든 프로젝트에 적용하지 않는다.
- 랭킹 폼의 길드 선택은 비활성 상태였다. 테이블과 숫자 필드 선택에는 결과가 없었다.
- 비활성화 원인은 확인하지 못했다. 길드 부재나 테이블 부재 때문이라고 단정하지 않는다.
- TBC 메뉴는 구버전 호환 기능이다. 현재 SDK 지원으로 확대하지 않는다.

## 실제 화면 증거의 위치와 한계

- 폴더: \`evidence/live-console\`.
- 접근성 텍스트 89개와 대응 스크린샷을 저장했다. 목록은 \`manifest.json\`에 있다.
- 스냅샷에는 로딩, 모달, 중간 상태가 섞여 있다. 파일 이름만으로 성공을 판단하지 않는다.
- 대부분 이미지는 1728×880이다. 일부 390×844 중간 이미지는 반응형 검증 결과가 아니다.
- 텍스트 파일 13개의 이메일은 \`<redacted-email>\`로 바꿨다. PNG는 원본을 유지했다.
- 당시 이메일은 링크 값에 있었고 스크린샷의 표시 영역에는 없었다. 새 공유 전에 민감정보를 다시 점검한다.
- 최종 유저 목록 증거는 \`evidence/live-console/final-users-empty.png\`다.
- 원본 서버, SDK, 결제, 푸시, 메일 발송, 동시성, 트랜잭션, 중복 지급 방지, 실시간 통신과 성능은 검증하지 않았다.

## 네트워크 기록의 미완료 상태

- Chrome DevTools의 \`Export HAR (sanitized)\`를 사용했다.
- 원본 HAR: \`/private/tmp/backnd-console-live-20261103.har\`.
- 파일 크기: 212,136,351 bytes. 항목은 6,693개다. 공개 JS 재로드가 큰 부분을 차지한다.
- 원본은 임시 폴더에만 둔다. 인증 헤더 제거가 요청·응답 본문의 비밀 제거까지 보장하지 않는다.
- 저장소에는 값 대신 method, 경로 템플릿, 쿼리 키, JSON 구조, HTTP 상태만 남길 예정이다.
- 헤더, 쿠키, 토큰, 비밀번호, 원본 URL의 식별자·쿼리 값, 본문의 실제 값은 내보내지 않는다.
- 공개 소스 템플릿과 대조한다. 동적 JSON 키는 \`{dynamic-key}\`로 마스킹한다.
- 콘솔 API를 게임 SDK의 공개 API와 같다고 쓰지 않는다. 요청 재전송도 하지 않는다.
- 담당자는 \`/root/rea_realtime\`이다. 같은 대상을 다른 에이전트가 중복 실행하지 않는다.
- 첫 추출은 전체 JSON 파싱이 외부 1GB 메모리 제한을 넘었다. 2.95초에 종료했고 자식 종료 코드는 \`-15\`였다.
- 실패는 1회다. 기존 추출과 점검 명령은 종료했다는 담당자 회신을 받았다.
- 임시 스크립트: \`/private/tmp/backnd-har-safe-extract-20261103.py\`.
- 실행 기록: \`/private/tmp/backnd-har-safe-extract-20261103.metrics.json\`.
- 임시 stdout과 stderr 파일은 비어 있다고 담당자가 회신했다.
- 설치된 \`stream-json 3.7.0\`으로 항목별 읽기를 적용할 계획이다. 변경과 재실행은 아직 하지 않았다.
- 최종 산출물 두 개는 아직 작성하지 않았다. 원본 기록을 분석 완료로 표시하지 않는다.
- 이번 인계 기록 중 \`ps\` 조회는 OS가 거부했다. 독립적인 현재 프로세스 확인 결과로 쓰지 않는다.

## Chrome 연결과 후속 재개 방법

- 모든 브라우저 작업은 연결된 Chrome의 CUA를 사용했다. Playwright는 사용하지 않는다.
- 브라우저 ID는 \`3\`, 작업 탭 ID는 \`1490589387\`이었다. 다음 작업에서는 ID와 URL을 다시 확인한다.
- 작업 탭 그룹은 뒤끝 분석용이다. 다른 탭과 사용자 작업을 조작하지 않는다.
- 사용자 제공 프로젝트 주소의 마지막 화면은 \`/baseGamer/non-multi/5.11.0\`이다. 유저 목록은 비어 있었다.
- 기본 주소는 아래 사용자 링크를 따른다. 임의 프로젝트나 다른 계정으로 바꾸지 않는다.

\`\`\`text
https://console.thebackend.io/
\`\`\`

- 압축 후 CUA를 계속 쓰려면 먼저 \`await cua.rewriteDocumentation()\`으로 API 문서를 복원한다.
- 이후 \`await cua.getTab('1490589387', {browser:'3'})\`로 연결하고 새 접근성 상태를 읽는다.
- 지원 API의 \`getAXState\`, \`getScreenshot\`, \`click\`, \`setValue\`, \`pressKey\`, \`goto\`, \`reload\`, \`scroll\`을 사용한다.
- 내부 페이지 스크립트, 인증값 추출, 직접 CDP 연결, 브라우저용 별도 자동화 경로는 사용하지 않는다.
- 일반 증거는 작업 탭 스크린샷 API로 저장한다. OS 저장창과 DevTools 조작에만 Chrome 네이티브 연결을 사용했다.
- DevTools는 닫았다. \`Keep log=1\`, 캐시 비활성화=0, 제한 없음 상태를 유지했다.
- 원래 켜져 있던 기기 도구 설정을 복원한 뒤 닫았다. 최종 탭은 1728px 폭의 정상 화면이었다.
- 이전 CUA 변수와 접근성 인덱스는 재사용을 보장하지 않는다. 화면이 바뀌면 상태를 다시 읽는다.
- 기존 \`recordConsole\`과 \`openMenu\` 도우미는 저장을 보조했지만 로딩 종료를 완전히 보장하지 않았다.

## 에이전트별 소유권과 검사

| 담당자 | 소유한 산출물 | 기록된 검사와 상태 |
| --- | --- | --- |
| \`/root/research_core\` | 01, 06, \`api-contracts.json\` | 소스 위치 1,397개와 helper 해시 23개 검사, 마지막 작업 완료 |
| \`/root/research_operations\` | 02, 05, 07 | 05의 로컬 링크 79개, 정리 증거와 대표 이미지 검사, 마지막 문단 수정 완료 |
| \`/root/rea_realtime\` | 03, 향후 08과 \`network-contracts.json\` | HAR 추출 1회 실패, 현재 상태 회신 완료, 새 추출 미실행 |
| \`/root\` | 색인, 00, 04, 증거 목록, 인계 기록 | 관련 링크와 범위 검사, 최종 전체 문서 점검은 남음 |

동일한 소스와 환경이면 담당자가 끝낸 검사를 근거와 함께 재사용한다.
실행 소유자를 정한 뒤 추가 검사를 한다. 실패한 추출을 새 환경으로 무작정 반복하지 않는다.
루트의 \`evidence/document-checks.json\`은 과거 점검 기록이다. 이후 추가한 문서까지 통과했다는 뜻이 아니다.

## 적용할 작업 규칙

- 사용자의 전역 \`AGENTS.md\`가 요청 범위, 승인한 UI, 성능, 병렬 검사와 브라우저 정책의 기준이다.
- 현재 작업에는 UI나 실행 경로를 바꾸는 코드가 없다. UI 일치와 성능 유지 검증을 완료했다고 쓰지 않는다.
- 하위 에이전트에게 읽기·편집 범위와 소유권을 명시한다. 다른 사람의 수정을 되돌리지 않는다.
- 신규 구조를 구현하기 전 기존 패턴과 표준 기능을 먼저 확인한다. 불필요한 의존성과 추상화를 만들지 않는다.
- 같은 저장소의 \`SPEC.md\`와 \`dictionary.md\`를 읽었다.
- GSD는 관리 계층으로 사용한다. 사용자가 따로 요청하지 않으면 GSD 전용 구현 절차로 전환하지 않는다.

## 아직 결정하거나 확인하지 않은 항목

- \`MinbWebLib\`의 실제 빌드 도구, Android 포장 방식, 하위 모듈 관계, 현재 변경 상태.
- 기존 HTTP 호출, 인증, 토큰 보관, 재시도, 네이티브 연결과 저장 기능의 재사용 지점.
- 웹과 Android에서 뒤끝 SDK 또는 HTTP API를 사용할 수 있는 실제 지원 범위.
- 플랫폼에 우선 포함할 기능과 유저 수, 보관량, 동시 접속 목표.
- 자체 API와 운영 API의 권한 경계, 테스트 계정 간 데이터 접근 제한.
- 스토어 결제, 신원 확인, 푸시의 Android 연결 방식과 외부 공급자 설정.
- 아직 활성화하지 않은 기능을 실행할 테스트 조건과 비용 범위.
- Android 빌드, 기기 실행, 게임 로그인과 저장을 잇는 실제 검증.

## 압축 때문에 확정할 수 없는 내용

- 현재 원문 대화 전체가 남아 있는 것은 아니다. 이전 도구 출력 일부도 현재 문맥에는 요약만 남았다.
- 사용자 승인과 최신 대상 환경은 현재 보이는 사용자 메시지와 위 기록으로 확인할 수 있다.
- 구체적인 조사 결론은 원문 대화보다 연결한 문서와 증거 파일을 우선한다.
- 별도 파일이 없는 닉네임 오류 관찰은 요약 근거임을 유지한다.
- 과거 검사 실행의 자세한 명령이나 결과가 파일에 없으면 새로 추정해 채우지 않는다.
- 임시 파일은 정리될 수 있다. HAR와 임시 실행 환경의 장기 보존은 보장하지 않는다.

## 재개할 첫 행동

\`원본 프로젝트 경로\`와 빌드 진입 파일을 읽어 Android 배포 구조를 확인한다.

그 뒤 HAR 추출 담당을 재개한다. 조사와 구현을 혼동하지 않고 웹·Android 연동 평가를 별도 문서에 남긴다.
미완성 08 문서를 작성한 뒤 색인 링크를 점검한다. 같은 기록을 분석 완료 수치로 중복 집계하지 않는다.

## 웹·Android 조사 후속 기록

사용자는 같은 웹·Android·MinbWebLib 방향으로 계속 진행하라고 지시했다. 제품 구현보다 연동 조사부터 이어갔다.

### 이번 단계에서 저장한 결과

- [웹·Android 연동 조사](09_WEB_ANDROID_INTEGRATION.md)를 작성했다.
- 실제 폴더는 \`MinbWebLib\`, 현재 제품명은 \`MinbWebKit\`, 패키지는 \`@minbgames/web-kit\` 4.3.0이다.
- 조사한 로컬 HEAD는 \`ad629a12e473b71037e6fab6a2042463623ad1a2\`, 브랜치는 \`main\`이었다. 최초 status는 비어 있었다.
- AGENTS, README의 선택 목록, 공통 규칙, 데이터 소유권과 관련 문서·소스를 읽었다. pull과 제품 파일 편집은 하지 않았다.
- [런타임 근거](evidence/web-android/minb-runtime-findings.json)에 확인·추론·미확인 16개와 입력 파일 43개의 해시를 남겼다.
- [Android 근거](evidence/web-android/minb-android-findings.json)에 25개 항목과 파일 34개의 해시를 남겼다.
- [조사 기준](evidence/web-android/template-source-context.json)에 부모가 읽은 파일과 공식 문서 관찰을 남겼다.
- 파일 집합은 겹친다. 43개와 34개를 더해 고유 파일 수로 쓰지 않는다.

### 재사용과 확장 경계

- 기존 저장 포트는 동기 \`StorageLike\`다. \`openUserInfoStorage\`는 캐시를 즉시 바꾸고 비동기 저장을 직렬 처리한다.
- \`AtomicStorage.run\`은 Promise를 거부한다. \`afterCommit\`은 캐시 커밋 직후이며, 영속 완료는 \`flush\`와 구분한다.
- \`openUserInfoStorage\`에는 외부 backend나 계정 주입·전환 API가 없다. native는 \`profile\`로 읽고 쓴다.
- 따라서 \`namespace\`만 바꿔 Android 계정을 격리한다고 확정하지 않는다.
- 서버 인증과 클라우드 저장은 확인한 공통 키트에 없다. 기존 \`sessionId\`는 실행 추적용이다.
- 앱 번들·Capacitor sync·Android compile·서명·Play 업로드는 각각 다른 단계다.
- 키트 자체의 TypeScript build는 APK 빌드가 아니다. 실제 실행은 소비 게임과 native 호스트가 필요하다.
- native IAP는 비소모성 상품만 지원한다. 기기 구매 검증·복구·acknowledge와 서버 검증·귀속·환불은 구분한다.
- IAP는 동기 거래 뒤 확정을 호출하며 \`flush\`를 직접 기다리지 않는다. 기기 영속 완료를 보장한다고 쓰지 않는다.
- Billing \`PURCHASED→pending\`은 지급 처리 대기다. Billing \`PENDING→deferred\`는 결제 대기다.
- Firebase는 확인한 모듈에서 Analytics·Crashlytics용이다. FCM 토큰과 원격 수신 구현은 찾지 못했다.
- 로컬 푸시는 기기 예약 기능이다. 원격 푸시와 브라우저의 백그라운드 알림을 제공한다고 쓰지 않는다.
- 기존 Config.dat와 빌드 snapshot은 원격 운영 데이터의 즉시 반영과 별도다. 원본과 배치를 중복 편집하지 않는다.
- 설계 후보는 키트 안의 선택형 백엔드 연결이다. 공개 이름·API·저장 형식과 UI는 확정하거나 수정하지 않았다.

### HAR 후속 결과

- [08 네트워크 문서](08_NETWORK_OBSERVATIONS.md)와 [안전한 계약 JSON](evidence/live-console/network-contracts.json)을 작성했다.
- 6,693개 HAR 기록 중 공개 콘솔 API 1,595건, URL로 대상 프로젝트를 입증한 요청 812건이었다.
- 이 가운데 공개 method·path와 일치한 요청 506건, 계약 조합 73개를 보존했다.
- 일치하지 않은 306건은 제외했다. 원인은 분류하지 않았으므로 오류 요청 수로 해석하지 않는다.
- status는 \`200=483\`, \`204=7\`, \`403=3\`, \`404=13\`이다. HTTP 상태와 업무 성공·권한 집행을 구분한다.
- 첫 전체 파싱의 메모리 중단 뒤 스트림 추출에 성공했지만, 앞 슬래시 누락을 발견해 잠정 324건·38개를 폐기했다.
- 원인이 확인된 정규화 수정 후 한 번 더 실행했다. 최종 결과는 9.91초, 최대 RSS 288,592KiB, 종료 코드 0이었다.
- 외부 제한은 60초·1GiB였다. 종료 후 남은 추출 프로세스는 0개였다.
- 안전한 최종 JSON은 124,612 bytes이며 SHA256은 \`a9f5e532b0cb23739be39c1d1a2ef5c9a39f170866ce8517975253962b6c602c\`다.
- 원본 HAR는 계속 임시 폴더에만 있다. 게임 SDK나 서버 API를 재전송하지 않았다.
- 소스 대조·타입·키 마스킹·집계 검사는 추출 담당자가 실행했다. 근거는 JSON의 \`extractionExecution\`과 \`verification\`이다.

### 브라우저 관찰과 남은 한계

- 연결된 Chrome에서 공식 홈과 베이스 시작하기를 읽고 \`evidence/web-android\`에 접근성 텍스트를 저장했다.
- 뒤의 채팅 페이지 이동은 시간 제한으로 끝났다. 재연결은 \`Debugger unattached\`를 반환했다.
- 따라서 채팅 Platform API 설명은 고정 커밋의 공식 문서 원본을 근거로 썼다. 해당 페이지를 새로 확인했다고 쓰지 않는다.
- 그 과정에서 확인한 Chrome 브라우저 ID는 \`1\`이었다. 이전 \`3\`은 같은 연결로 재사용할 수 없었다.
- 향후 브라우저 작업은 새 상태에서 정확한 탭과 URL을 확인한다. 다른 작업의 Chrome 탭은 조작하지 않는다.
- 실행할 소비 게임 경로를 비동기 질문으로 요청했다. 이 기록 시점에는 답을 받지 않았다.
- Android는 클라이언트 앱의 배포 대상으로 해석했다. 관리 서버의 배포 환경은 아직 정하지 않았다.
- 빌드·자동 테스트·Android 설치·결제·푸시 전송·성능 측정은 실행하지 않았다.
- UI와 제품 코드는 바꾸지 않았다. 이 단계에서 플랫폼 구현이 완료됐다고 쓰지 않는다.

### 후속 첫 행동

사용자가 소비 게임 경로를 주면 해당 저장소의 AGENTS·package·서브모듈 gitlink·Android 호스트를 읽고 첫 연결 범위를 정한다.
경로를 받기 전에는 승인한 조사 범위에서 자체 API와 우선 기능의 계약을 더 정리할 수 있다.
제품 구현은 구체적인 설계와 검증 계획에 따라 진행한다. 현재 09는 구현 승인 전 설계 후보다.

## 소비 게임 지정과 외부 설정 제외

### 최신 사용자 지시

- 사용자는 첫 검증 게임으로 \`원본 프로젝트 경로\`을 지정했다.
- 별도로 정상 빌드하던 폴더는 없다고 답했다.
- 이어서 Firebase·Config 등 현재 외부 설정을 제외하고 진행할 수 있는지 물으며 계속 진행을 요청했다.
- 이번 단계에서는 Firebase·스토어·원격 Config의 실제 연결과 APK·기기 검증을 제외하기로 범위를 정리했다.
- 이 제외는 게임의 필수 검사 해제나 빈 Config로의 대체를 뜻하지 않는다. 그런 변경은 하지 않았다.
- 사용자는 서버 API와 MinbWebKit 연결 설계가 무슨 일인지 설명하면서 병렬로 작업하라고 요청했다.
- 게임과 서버 사이의 요청·응답 계약, 기존 부트·저장에 연결할 지점, 운영 콘솔의 역할로 설명했다.

### 저장한 조사와 결과

- [10 게임별 연동안](10_AVOID_BALL_PILOT.md)을 작성했다. 09와 색인도 최신 대상과 제외 범위에 맞췄다.
- 게임 HEAD는 \`edddfafde393b02f0fdcbcaf799d9b0f46bff7e1\`, 브랜치는 \`main\`이었다.
- 게임의 \`.gitmodules\`는 \`Project/MinbWebKit\`을 등록한다. gitlink와 실제 키트 HEAD는 앞선 \`ad629a12...\`와 같았다.
- 초기 untracked \`project-web/\`와 \`study/\`는 기존 작업으로 보존하고 조사하지 않았다.
- 게임 이름은 Escape Ball, 앱 ID는 \`com.storio.avoidball\`, 버전은 \`0.9.0\`이다. 변경하지 않았다.
- [소비 기준](evidence/avoid-ball/consumer-source-context.json), [런타임 조사](evidence/avoid-ball/consumer-runtime-findings.json), [제작 API 조사](evidence/avoid-ball/authoring-api-findings.json), [Android 사전조사](evidence/avoid-ball/android-build-preflight.json)를 저장했다.
- 런타임 조사에는 확인 19개·추론 2개·미확인 1개와 입력 파일 60개의 해시가 있다.
- Android 사전조사에는 확인 16개와 읽은 파일 39개의 해시가 있다.
- 제작 API 조사는 소스 줄 근거만 보존했다. 파일 해시는 미측정으로 \`null\`이며 일치 검사나 빈 파일을 뜻하지 않는다.
- 전 단계의 의도된 턴 중단 뒤 파일 저장이 아직 없음을 확인했다. 에이전트들에게 추가 탐색 없이 기존 결과를 저장하도록 재개시켰다.

### 반드시 이어갈 사실

- 게임의 IAP wrapper는 \`await user.flush()\` 뒤 스토어 확정을 호출한다. 키트 코어 단독의 flush 부재를 이 게임의 결함으로 쓰지 않는다.
- 저장 namespace는 \`avoidball.preferences\`다. 기본 모듈 \`userinfo\`는 v7이다.
- 나머지 \`userinfoItem\`, \`userinfoEnemy\`, \`userinfoIntro\`, \`userinfoCheckin\`, \`userinfoIAP\`는 v1이다.
- \`userinfoPlayer\`는 이전 저장의 null tombstone이다. 기존 키와 이전 규칙을 임의로 삭제하지 않는다.
- 현재 \`userinfo\`에는 로컬 유저 ID·현재 스테이지·코인·광고 제거·로비 해금이 함께 있다.
- 로컬 UUID는 초기화 때 바뀔 수 있다. 서버 계정 ID로 그대로 덮거나 인증 자격으로 믿지 않는다.
- 일반 웹 dev의 Stage는 StageOS API를 사용한다. 표준 build/native의 Stage는 ConfigStage를 사용한다.
- 빌드 전 원격 Config 갱신은 남아 있다. 제작 데이터 공급과 게임의 진행 저장을 구분한다.
- 운영 웹에는 StageOS 기반 전체 경로 인증과 세션 재확인이 있다. native는 해당 웹 플러그인을 제외한다.
- StageOS의 운영 계정과 게임 UserInfo를 연결한 코드는 확인하지 못했다.
- 현재 게임과 키트의 node_modules, 로컬 Firebase·도구 설정과 Config 자격 파일은 조회한 위치에서 없었다.
- 원격 Config의 접근 성공·실패는 확인하지 않았다. 로컬 자격 부재를 원격 접근 실패로 쓰지 않는다.
- SDK는 일반 경로와 PATH에서 확인하지 못했다. 디스크 전체에 없다고 단정하지 않는다.
- 이 준비 상태는 후속 APK 검증 조건이다. 현재 조사·API·키트 설계를 막는 조건으로 다시 요구하지 않는다.
- Android sync는 iOS 아이콘·스플래시도 갱신할 수 있다. 향후 실제 실행 때 생성 파일의 범위와 기존 변경을 확인한다.

### 이번 단계의 실제 변경과 미실행

변경은 backend_platform의 조사 문서와 근거 JSON뿐이다.
소비 게임·공통 키트·UI·저장 데이터·Git 상태와 빌드 설정은 수정하지 않았다.
제품 구현·의존성 설치·빌드·테스트·서버 기동·외부 연결·APK 설치·성능 측정은 실행하지 않았다.
과거 성능 문서는 보존할 기준과 한계만 읽었다. 과거 수치를 현행 커밋의 측정으로 재사용하지 않는다.

### 다음 첫 행동

10의 첫 연동 범위를 바탕으로 서버와 클라이언트가 주고받을 데이터·오류·저장 충돌의 계약을 구체화한다.
서버 기술·설치 자격·첫 동기화 필드·계정 전환은 아직 확정하지 않았다. 구현 완료나 승인된 공개 API로 표시하지 않는다.

### 조사 커밋 준비

사용자가 조사 내용을 먼저 커밋하라고 요청했다. 이에 \`backend_platform\`에 로컬 Git 저장소를 초기화했고 브랜치는 \`main\`이다.
앞부분의 Git 저장소 부재는 최초 조사 시점의 상태다. 현재 저장소에는 \`study/thebackend\`의 조사 파일만 선별했다.
기존 루트 README·Nakama 조사·참조 저장소는 이번 조사 커밋 범위에서 제외한다. 원격 push는 요청받거나 실행하지 않았다.`,filtered:!0,sourceHash:"74565a770d85f99013211c7c699e7b08debb0075715d223d7c3bb945434ab96a"},{id:"study-thebackend-readme-md",title:"뒤끝 재구성을 위한 서비스 조사",path:"study/thebackend/README.md",category:"이전 조사",status:"역사적 조사·제안",body:`# 뒤끝 재구성을 위한 서비스 조사

공식 문서와 공개 콘솔 소스를 조사하고, \`tst\` 프로젝트에서 유저·테이블·데이터·비공개 공지의 생성과 정리를 확인했다.
신규 데이터베이스의 숫자 수정은 다시 조회해 저장 여부도 확인했다. 내부 팀용 플랫폼의 기능 목록과 설계 후보를 검토할 수 있다.
게임 SDK, 실시간 통신, 결제, 동시성, 부하와 원본 서버 구현은 아직 검증하지 않았다. 전체 동작을 복원한 단계는 아니다.

기준일은 2026-11-03이다. 기존 Nakama 분석과 애플리케이션 코드는 변경하지 않았다.
최신 대상은 웹 기반 게임과 Android 배포이며, 사용자가 지정한 템플릿은 \`MinbWebLib\`다.
재개할 작업과 승인 범위는 [인계 기록](HANDOFF_20261103.md)에 보존했다.
현재 템플릿의 제품명은 \`MinbWebKit\`이다. [웹·Android 연동 조사](09_WEB_ANDROID_INTEGRATION.md)에 기존 기능과 확장 경계를 정리했다.
REA로 공개 콘솔의 메뉴와 관리자 API 선언을 정적으로 분석했다. 전체 번들 분석은 시간 제한으로 미완료다.
실행 결과와 한계는 [콘솔 분석](00_CONSOLE_SOURCE_ANALYSIS.md)에 기록했다.
후속 실제 관찰은 [실제 콘솔 조사](05_LIVE_CONSOLE_ANALYSIS.md)에 정리했다. 조사로 만든 유저·테이블·비공개 공지는 삭제 결과까지 확인했다.

## 읽는 순서

프로젝트의 후속 작업·우선순위·완료 기준은 루트 [TODO](../../TODO.md)를 따른다.
자체 플랫폼의 필수 검증, 기능 채택에 따른 작업, 사용자가 보류한 외부 연동을 구분했다.

| 문서 | 내용 | 판단할 수 있는 범위 |
| --- | --- | --- |
| [콘솔과 조사 근거](00_CONSOLE_SOURCE_ANALYSIS.md) | 메뉴 43개, 화면 경로, 관리 API 호출 선언, REA 결과 | 실제 화면에서 추가 확인할 목록 |
| [핵심 게임 백엔드](01_CORE_FEATURES.md) | 인증, 세션, 캐릭터, 데이터, 차트, 확률, 보상, 소셜 | 게임 SDK와 데이터의 계약 |
| [운영과 외부 연동](02_OPERATIONS_INTEGRATIONS.md) | 권한, 펑션, 로그, 통계, 콘텐츠, 결제, 환불, 웹숍 | 내부 운영 도구와 외부 시스템의 책임 |
| [매치와 채팅과 월드](03_REALTIME.md) | 연결, 매칭, 방, 재접속, 실시간 동기화 | 실시간 서버가 맡는 역할 |
| [내부 플랫폼 재구성안](04_RECONSTRUCTION_BLUEPRINT.md) | 모듈, 후보 데이터 모델, API 책임, 검증 기준, 구현 순서 후보 | 다음 요구사항 논의의 기준 |
| [실제 콘솔 조사](05_LIVE_CONSOLE_ANALYSIS.md) | 목록·폼·생성·수정·재조회·삭제의 관찰과 스크린샷 | 이번 프로젝트에서 실제 확인한 동작 |
| [정적 API 호출 계약](06_STATIC_API_CONTRACTS.md) | HTTP helper 호출식 672개와 입력 전달 282곳 | 관리 API의 요청 선언과 미확인 경계 |
| [화면 계약 확인표](07_SCREEN_CONTRACTS.md) | 소스에서 읽은 필드·검증·버튼 조건과 후속 확인 항목 | 아직 남은 화면 상태와 검증 목록 |
| [실제 네트워크 관찰](08_NETWORK_OBSERVATIONS.md) | 콘솔에서 발생한 요청과 응답의 안전한 구조 | 실제 HTTP 관측과 정적 선언의 대조 |
| [웹·Android 연동 조사](09_WEB_ANDROID_INTEGRATION.md) | MinbWebKit의 저장·빌드·구매·알림과 서버 연결 후보 | 기존 기능의 재사용과 추가할 계약 |
| [Escape Ball의 첫 서버 연동안](10_AVOID_BALL_PILOT.md) | 실제 소비 게임의 부트·저장·계정·제작 API와 연결 후보 | 첫 구현의 책임과 보존할 계약 |

## 핵심 판단

뒤끝의 기능을 내부 플랫폼으로 재구현할 때는 세 가지 작업을 구분한다.

- 운영 콘솔은 프로젝트와 유저, 게임 데이터, 보상, 콘텐츠, 결제, 서버 실행 상태를 관리한다.
- 게임 백엔드는 인증과 저장, 서버 업무 규칙, SDK 호출 계약을 제공한다.
- 실시간 서버는 연결과 방, 메시지 전달, 상태 소유권, 재접속을 처리한다.

화면 복제만으로 게임 클라이언트가 사용하는 서버를 대체할 수 없다.
반대로 공개 기능을 같은 책임으로 재구성할 때 원본 서버의 내부 기술까지 같게 만들 필요는 없다.

## 세대별로 구분할 기능

| 영역 | 구분 | 재구성 시 주의점 |
| --- | --- | --- |
| 데이터 | 게임정보와 신규 데이터베이스 | 소유권, 타입, 검색, 트랜잭션의 계약이 다름 |
| 랭킹 | 구형 Rank·URank와 Leaderboard | 그룹, 조회 형식, 정산 계약을 섞지 않음 |
| 우편 | 구형 Social.Post와 UPost | 수령과 실제 아이템 지급을 별도 처리 |
| 채팅 | 지원 종료한 뒤끝챗과 현행 채팅 | 연결 API와 기능 범위를 구분 |
| 실시간 게임 | 뒤끝매치와 월드 | 중계 구조와 전용 서버의 판정을 구분 |
| 게임 캐시 | 구버전 TBC | SDK 5.18.7 이하의 호환 기능으로 한정 |

## 문서를 그대로 구현하면 안 되는 지점

- 게임정보 Public의 타인 수정 권한은 공식 소개표와 SDK 문서가 다르게 설명한다.
- 데이터베이스 문자열 검색 예제와 지원 연산자 목록이 다르다.
- 클라이언트 버전의 강제·선택 \`type\` 값이 콘솔 가이드와 SDK 응답 표에서 뒤바뀐다.
- 닉네임 길이, 멀티 캐릭터 전환, 로그 보관에는 경계나 문서 세대의 차이가 있다.
- 영수증 검증은 실제 지급과 중복 지급 방지를 대신하지 않는다.
- 함수 호출의 HTTP 성공이 함수 내부 업무 성공을 뜻하지 않는다.

각 충돌의 출처와 미확인 범위는 담당 문서에 기록했다. 실제 SDK와 테스트 프로젝트에서 계약을 확인한 뒤 요구사항으로 고정한다.

## 조사와 검증 상태

| 항목 | 상태 | 남은 확인 |
| --- | --- | --- |
| 공식 기능과 SDK 계약 | 조사함 | 실제 사용하는 버전에 맞춰 연동 확인 |
| 공개 콘솔 메뉴와 경로 | 정적 추출과 로그인한 콘솔 관찰 | 모든 하위 화면·오류·역할별 차이는 미확인 |
| 관리 API의 호출 선언 | AST로 호출식 672개 추적 | 서버의 필수값·동시성·전체 지원 범위는 미확인 |
| 관리 API의 실제 요청 | 대상 프로젝트 요청 506건을 공개 계약 73개와 대조 | SDK 실행·실제 권한·제외한 요청의 원인은 미확인 |
| REA 정적 분석 | 추출물 2개 분석, 전체 번들 미완료 | 반환한 근거 밖으로 결론을 확대하지 않음 |
| 로그인 후 화면과 스크린샷 | \`tst\`에서 실제 관찰함 | 활성화 전 안내와 실행 결과를 구분 |
| 생성·수정·삭제 | 가상 유저·테이블·행·비공개 공지에서 제한적으로 확인 | 다른 기능과 모든 오류 상태의 검증은 미완료 |
| 발송·보상·실시간·결제 | 실행하지 않음 | 기능 활성화와 게임·공급자 테스트 환경 필요 |
| SDK 실행과 동시성 | 실행하지 않음 | 테스트 게임 클라이언트로 검증 |
| 부하·지연·복구 성능 | 실행하지 않음 | 워크로드와 기준값 확정 후 비교 |
| 내부 구현 코드와 인프라 | 확보하지 않음 | 공개 계약에 따른 자체 설계가 필요 |
| 웹·Android 공통 키트 | MinbWebKit의 저장·빌드·IAP·알림 소스를 읽음 | 소비 게임의 빌드·실제 서버 연결·기기 실행은 미확인 |

## 실제 조사 증거

실제 화면 기록과 원본 크기의 스크린샷은 [증거 목록](evidence/live-console/manifest.json)에 연결했다.
정적 소스의 선언 수, 열어본 화면 수, 실제 검증한 동작 수는 서로 다른 값이다.
로딩 중 빈 목록과 삭제가 끝난 빈 목록도 구분했다. 생성·수정·삭제 결과는 [실제 콘솔 조사](05_LIVE_CONSOLE_ANALYSIS.md)의 해당 증거로 판단한다.

조사한 \`tst\` 프로젝트는 데이터베이스가 이미 FREE 상태였다. 채팅·월드·매치·펑션·환불·웹숍은 활성화 전 안내를 관찰했다.
활성화, 요금제 변경, 외부 스토어 연결과 배포는 실행하지 않았다. 최종 비용과 사용량은 별도 확인이 필요하다.

## 다음 조사에서 남길 증거

기능마다 다음 항목을 하나의 기록으로 연결한다.

1. 화면의 URL, 메뉴, 선택한 프로젝트, 상태를 기록한다.
2. 입력 필드, 필수값, 필터, 페이지 이동을 기록한다.
3. 관찰한 요청의 method, 경로, 입력과 응답의 구조를 기록한다.
4. 정상·빈 결과·권한 부족·오류 상태를 비교한다.
5. 게임 SDK의 호출 결과와 실제 저장 결과를 연결한다.
6. 자체 구현에서 지킬 계약과 다른 선택을 명시한다.

테스트 환경이 없으면 쓰기 동작은 관찰 완료로 표시하지 않는다.
자격 증명과 실제 유저의 개인정보는 공개 보고서나 공유 예제에 넣지 않는다.

첫 소비 게임은 사용자가 지정한 \`avoid-ball-origin\`이다. 현재 \`Project/MinbWebKit\`을 소비하는 부트·저장·제작 API를 조사했다.
Firebase·스토어·원격 Config의 실제 연결과 APK·기기 검증은 사용자가 이번 단계에서 제외했다.
본인·타인 권한 검증에는 서로 다른 테스트 계정도 필요하다.
결제·푸시·채팅·월드 검증은 각 기능의 활성화 조건과 외부 공급자 설정을 확인한 뒤 범위를 정한다.

## 연결 자료

- [공식 개발자 문서](https://docs.backnd.com/)
- [공식 문서 원본의 고정 커밋](https://github.com/afi-backnd/backnd_developer_docs/tree/fe41d27e1515d0c492ddc477e075342804841168)
- [REA 공식 저장소](https://github.com/morluto/rea)
- [기존 Nakama 분석](../nakama/README.md)
- [기존 자체 플랫폼 방향](../nakama/05_OWN_PLATFORM_ROADMAP.md)`,filtered:!1,sourceHash:"20d2023f0ec4f1fe065e438fe7995dedaaf540f8ef7c02caed456aa83a98d62c"},{id:"study-platform-00-specification-guide-md",title:"자체 게임 백엔드의 설계 문서 안내",path:"study/platform/00_SPECIFICATION_GUIDE.md",category:"기획 안내",status:"참고 문서",body:`# 자체 게임 백엔드의 설계 문서 안내

서비스 범위·데이터 권한·실패 규칙을 먼저 정하고, 그 계약에 맞춰 아키텍처와 API를 설계한다.
이 문서는 작성할 스펙의 목록과 판단 기준이다. 개별 스펙의 승인이나 제품 구현을 뜻하지 않는다.

- 기준일: 2026-11-03, Asia/Seoul.
- 대상: 내부 팀의 다중 게임 플랫폼. 첫 소비 게임은 Escape Ball이다.
- 범위: 기존 조사 검토, 공식 자료 조사, 설계 문서의 구성과 작성 순서 제안.
- 유지 조건: 기존 UI, 저장 키, 저장 이전 규칙, 공개 인터페이스와 성능 보호.
- 보류: Firebase·스토어·원격 Config의 실제 연결, APK 빌드와 기기 검증.
- 작업 원본: [TODO](../../TODO.md). 이 문서는 별도 할 일 목록을 만들지 않는다.

## 1. 조사 자료와 구현 스펙의 차이

[뒤끝 조사](../thebackend/README.md)는 외부 제품의 기능과 관찰한 계약을 설명한다.
[Nakama 조사](../nakama/README.md)는 고정한 소스에서 확인한 책임과 구현 후보를 설명한다.
자체 플랫폼의 스펙은 우리가 제공하고 검증할 동작을 정해야 한다.

스펙에는 정상 응답 외에 권한 거부, 동시 변경, 응답 유실, 재시작 뒤 결과도 필요하다.
외부 제품과 다른 선택은 차이를 적는다. 뒤끝 관리 API나 구형 SDK 계약을 자동으로 복제하지 않는다.

먼저 호환 목표를 선택한다. 새 자체 API, 기존 게임의 작은 어댑터, 뒤끝 SDK 호환은 서로 다른 범위다.
원본 내부 코드를 복원했다는 가정은 사용하지 않는다.

## 2. 최근 개념을 판단하는 기준

아래의 채택 판단은 이번 프로젝트를 위한 제안이다. 공식 문서가 이 프로젝트의 기술 선택을 보장하지는 않는다.
오래된 설계 패턴과 새 표준·프로토콜을 같은 의미의 신기술로 묶지 않는다.

| 개념 | 해결하는 문제 | 이번 플랫폼에서 정할 내용 | 제안 |
| --- | --- | --- | --- |
| Modular monolith, DDD의 bounded context | 함께 배포하더라도 계정·저장·경제·콘텐츠의 책임을 구분한다. | 모듈 소유 데이터, 호출 방향, 거래 경계, 게임별 확장 위치. | 첫 구조의 유력 후보. 모듈마다 별도 서비스나 저장소를 만들 필요는 없다. [모듈 경계](https://learn.microsoft.com/en-us/azure/architecture/microservices/model/domain-analysis) |
| Vertical slice | 로그인부터 저장·조회까지 한 사용자 흐름을 함께 검증한다. | 첫 흐름, 파일 소유자, API·SDK·콘솔 연결점과 완료 조건. | 첫 구현 단위를 정하는 방식으로 사용한다. 특정 프레임워크는 필요하지 않다. [제안자 설명](https://www.jimmybogard.com/vertical-slice-architecture/) |
| Control plane과 data plane | 운영 설정과 실제 게임 요청의 책임을 구분한다. | 운영자 인증, 게임 인증, 설정 게시와 캐시 반영, 장애 영향 범위. | 논리 경계는 지금 정의한다. 별도 프로세스 배치는 부하·권한 요구로 판단한다. [AWS의 plane 구분](https://docs.aws.amazon.com/whitepapers/latest/saas-architecture-fundamentals/control-plane-vs.-application-plane.html) |
| Multi-tenancy | 게임·환경·계정 사이에서 데이터가 섞이지 않게 한다. | 격리 단위, 모든 키·인덱스·캐시·작업·감사 기록의 범위. | 지금 필수. 공용 DB, schema 분리, DB 분리의 비용을 비교한다. RLS 채택 여부도 별도 판단한다. [PostgreSQL RLS](https://www.postgresql.org/docs/current/ddl-rowsecurity.html) |
| Contract-first, OpenAPI, JSON Schema | 서버·SDK·콘솔이 같은 입력과 응답을 사용한다. | 계약 원본, 코드 생성 범위, 런타임 검증, 호환 변경과 CI 검사. | 지금 정의한다. 최신 표준 번호와 실제 도구 지원을 분리한다. |
| RBAC, ABAC, ReBAC | 역할, 속성, 관계에 따라 실행 권한을 판단한다. | 역할별 허용 명령, 프로젝트·환경·소유권 조건, 기본 거부. | 역할과 소유권부터 정의한다. 별도 정책 엔진은 규칙의 복잡도가 요구할 때 비교한다. [OWASP 권한 지침](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html) |
| OCC와 멱등성 | 동시 저장과 재요청으로 상태가 손상되거나 중복 반영되는 일을 막는다. | 기대 버전, 충돌 결과, 업무 식별자, 요청 내용 비교, 결과 보관과 재조회. | 저장 API부터 필수. 멱등키 하나로 외부 시스템까지 한 번 실행을 보장하지 않는다. [HTTP 조건부 변경](https://www.rfc-editor.org/rfc/rfc9110.html#section-13.1.1) |
| Local-first, offline-first, CRDT | 네트워크가 없어도 허용한 로컬 작업을 이어간다. | 오프라인 허용 필드, 서버 신뢰 범위, 병합 규칙, 계정 전환과 재접속. | 오프라인 정책은 지금 정의한다. CRDT는 자동 채택하지 않는다. 경제 상태를 무조건 병합하지 않는다. [원 제안](https://www.inkandswitch.com/essay/local-first/) |
| CQRS와 event sourcing | 읽기 모델과 변경 모델을 구분하거나 이벤트로 상태를 재구성한다. | 조회 지연 허용, 재구성·스키마 변경·삭제·운영 부담. | 별도 채택 근거가 필요하다. 경제 원장이나 감사 로그를 event sourcing과 혼동하지 않는다. [CQRS](https://learn.microsoft.com/en-us/azure/architecture/patterns/cqrs), [event sourcing](https://learn.microsoft.com/en-us/azure/architecture/patterns/event-sourcing) |
| Transactional outbox, inbox, saga | DB 저장과 외부 전달 사이의 실패를 복구한다. | 원자 저장 범위, 재전달, 중복 제거, 순서, 보상 동작과 재처리. | 외부 전달이나 분산 업무가 생기면 적용한다. 첫 저장만을 위해 메시지 브로커를 추가하지 않는다. [AWS outbox](https://docs.aws.amazon.com/prescriptive-guidance/latest/cloud-design-patterns/transactional-outbox.html) |
| OpenTelemetry, SLI, SLO | 장애 원인과 서비스 품질을 같은 요청 흐름에서 측정한다. | 지연·오류·포화 지표, 추적 연결, 로그 마스킹, 수집 비용과 경보. | 지표 계약은 지금 정한다. 운영 목표 수치는 워크로드와 비용을 기준으로 합의한다. [OpenTelemetry](https://opentelemetry.io/docs/concepts/signals/), [Google SRE](https://sre.google/workbook/implementing-slos/) |
| IaC, GitOps, SBOM, SLSA | 실행 환경과 배포 산출물의 출처를 재현한다. | 환경 설정, 비밀 관리, 의존성 고정, 산출물·취약점·복구 기록. | 재현 가능한 배포부터 시작한다. Kubernetes·서비스 메시·별도 GitOps 운영은 조건부다. [GitOps 원칙](https://opengitops.dev/), [SLSA](https://slsa.dev/spec/v1.2/tracks), [SPDX](https://spdx.dev/) |
| Platform engineering, Internal Developer Platform | 개발자가 정해진 경로로 서비스와 환경을 만들게 한다. | 게임 등록, 키 발급, SDK 문서, 배포와 권한 요청의 반복 업무. | 게임 백엔드 운영 콘솔과 개발자 플랫폼을 구분한다. 별도 포털은 반복 업무가 확인되면 검토한다. [CNCF 성숙도 모델](https://www.cncf.io/blog/2023/11/20/announcing-the-platform-engineering-maturity-model/) |
| MCP, A2A, 에이전트 운영 | AI 도구 호출이나 에이전트 사이의 작업 위임을 연결한다. | 실행 주체, 최소 권한, 읽기와 변경의 구분, 승인, 감사와 중복 요청. | 운영 자동화를 채택할 때 별도 스펙으로 다룬다. 게임 API의 선행 조건은 아니다. [MCP](https://modelcontextprotocol.io/specification/2026-07-28), [A2A](https://a2a-protocol.org/latest/specification/) |

위 표의 제안은 작은 첫 흐름과 현재 미검증 범위를 근거로 한 설계 판단이다.
DB로 PostgreSQL RLS를 채택하면 소유자·\`BYPASSRLS\` 예외와 연결 풀의 문맥 관리도 명세한다.
RLS는 애플리케이션의 권한 검사를 대체하지 않는다. [PostgreSQL RLS](https://www.postgresql.org/docs/current/ddl-rowsecurity.html)
OCC는 낙관적 동시성 제어다. 읽었던 버전이 현재 버전과 같을 때만 변경을 허용하는 계약으로 구체화할 수 있다.
OpenTelemetry는 로그·지표·추적을 연결하는 관측 도구다. SLI는 측정 지표이며 SLO는 그 지표의 서비스 목표다.
SBOM은 소프트웨어 구성 목록이다. 빌드 출처 기록인 provenance와 목적이 다르다. [SPDX](https://spdx.dev/), [SLSA](https://slsa.dev/spec/v1.2/tracks)

### 표준의 현재 상태와 적용 조건

다음은 기준일에 공식 자료에서 확인한 상태다. 최신판을 그대로 채택한다는 결정은 아니다.

| 항목 | 2026-11-03 확인 상태 | 스펙에 미치는 영향 |
| --- | --- | --- |
| OpenAPI | 공개판 \`3.2.1\`, 2026-09-10 발행. | 생성기·검증기·SDK 도구의 지원 버전을 확인한다. \`format\` 표시만으로 런타임 검증을 보장하지 않는다. [공식 명세](https://spec.openapis.org/oas/v3.2.1.html) |
| JSON Schema | 공식 current는 \`2020-12\`. | 누락·\`null\`·범위·추가 필드와 실제 검증기의 dialect를 정한다. [공식 specification](https://json-schema.org/specification) |
| OAuth 2.1 | \`draft-17\`, Internet-Draft. 확정 RFC가 아니다. | OAuth 채택 여부와 계정·자체 세션 계약을 구분한다. [IETF 상태](https://datatracker.ietf.org/doc/draft-ietf-oauth-v2-1/) |
| OAuth 보안 | \`RFC 9700\`은 Best Current Practice다. | OAuth를 채택하면 PKCE, 토큰 수명·갱신·재사용 탐지와 보관을 구체화한다. [RFC 9700](https://www.rfc-editor.org/rfc/rfc9700.html) |
| 브라우저 OAuth와 BFF | \`RFC 10017\`, 2026-08 발행. BFF는 서버가 OAuth 토큰을 보관하는 패턴이다. | 자사 콘솔에 서버 세션만으로 충분한지 먼저 판단한다. BFF·직접 호출·쿠키·CSRF·CORS를 배포 구조에 맞춰 정한다. [RFC 10017](https://www.rfc-editor.org/rfc/rfc10017.html) |
| Problem Details | \`RFC 9457\`은 발행된 HTTP 오류 표준이다. | \`application/problem+json\`, 안정된 오류 종류, 업무 코드와 노출 금지 정보를 정한다. [RFC 9457](https://www.rfc-editor.org/rfc/rfc9457.html) |
| \`Idempotency-Key\` | \`draft-08\`, 2026-10-22의 Internet-Draft. 확정 RFC가 아니다. | 사용하더라도 키 범위·기간·본문 불일치·처리 중·결과 보관을 자체 계약으로 명시한다. [IETF 상태](https://datatracker.ietf.org/doc/draft-ietf-httpapi-idempotency-key-header/) |
| AsyncAPI와 CloudEvents | AsyncAPI latest는 \`3.1.0\`. CloudEvents 공개 릴리스는 \`1.0.2\`. | 비동기 통신 계약과 이벤트 공통 형식은 역할이 다르다. 전달 횟수·순서·재처리는 별도 설계한다. [AsyncAPI](https://www.asyncapi.com/docs/reference/specification/v3.1.0), [CloudEvents](https://cloudevents.io/) |
| WebAuthn·패스키 | Level 3는 2026-08-25 W3C Recommendation. | 채택하면 등록·분실·복구·계정 연결·RP ID와 대상 환경 지원을 확인한다. 현재 게임 로그인의 필수 조건은 아니다. [W3C 원문](https://www.w3.org/TR/2026/REC-webauthn-3-20260825/) |
| MCP와 A2A | MCP \`2026-07-28\` 명세와 A2A \`1.0\` 공개 계열을 확인했다. | 운영 도구에 채택하면 프로토콜·SDK 호환 버전을 고정한다. 과거 transport 가정을 그대로 사용하지 않는다. [MCP](https://modelcontextprotocol.io/specification/2026-07-28), [A2A](https://a2a-protocol.org/latest/specification/) |

외부 게임 SDK는 HTTP와 JSON부터 검토하는 방안을 권한다.
gRPC·GraphQL은 호출 형태·브라우저 지원·운영 비용의 필요가 확인되면 비교한다.
브라우저 gRPC에는 별도 gRPC-Web 경로와 프록시 구성이 필요할 수 있다. [gRPC-Web](https://grpc.io/docs/platforms/web/basics/)

## 3. 먼저 정의할 스펙 문서

아래 경로는 작성할 문서의 제안이다. 아직 이 경로에 개별 스펙을 생성하지 않았다.
문서 수를 맞추려고 파일을 늘리지 않는다. 초기에는 같은 책임의 문서를 합쳐도 된다.

| 순서 | 제안 문서 | 반드시 정할 내용 | 문서 완료 기준 | TODO |
| --- | --- | --- | --- | --- |
| 1 | \`docs/specs/01_PRODUCT_SCOPE.md\` | 내부 사용자, 첫 게임 흐름, 기능 채택·제외, 뒤끝 호환 목표, 자가 구현과 재사용 범위. | 첫 제공 범위와 제외 범위를 제품 담당이 판단할 수 있다. | A01 |
| 2 | \`docs/specs/02_DOMAIN_MODEL.md\` | 조직·프로젝트·게임·환경·운영자·유저·캐릭터·설치의 의미와 관계. | 식별자와 데이터 소유자가 겹치지 않는다. 용어와 상태 전이가 연결된다. | A03 |
| 3 | \`docs/specs/03_ARCHITECTURE.md\` | 시스템 경계, 모듈, 의존성, 동기·비동기 흐름, 실행·배포 단위, 장애 경계. | 구성도와 첫 흐름의 호출 순서로 책임을 설명할 수 있다. | A02·A07 |
| 4 | \`docs/specs/04_TECHNOLOGY_DECISIONS.md\` | 언어·프레임워크·DB·관리 UI·SDK·호스팅의 후보, 지원 버전, 비용, 선택과 대안. | 기술 선택의 이유와 다시 검토할 조건을 기록한다. 검증하지 않은 성능을 선택 근거로 단정하지 않는다. | A02 |
| 5 | \`docs/specs/05_IDENTITY_ACCESS.md\` | 계정 공유 범위, 게스트, 복구·연결·전환, 세션 발급·갱신·폐기, 운영자 역할과 격리. | 역할·명령·대상의 허용 및 거부 행렬이 있다. 설치 UUID와 자격 증명을 구분한다. | A03·C02 |
| 6 | \`docs/specs/06_DATA_MODEL.md\` | ERD, 필드 타입, 권위 있는 저장소, 소유권, 유일 제약, 인덱스, 거래·격리, 보관·삭제·이전. | 대표 조회·동시 쓰기·프로젝트 격리를 스키마로 설명한다. 클라이언트 허용 필드가 있다. | A04·C03 |
| 7 | \`docs/specs/07_SYNC_LIFECYCLE.md\` | 부트, 로컬 저장, 서버 반영, 충돌, 오프라인, 재시도, 응답 유실, 계정 전환, 초기 데이터 이전. | 각 실패와 수명 전환에서 어느 계정의 어느 버전이 남는지 명확하다. | A04·C03·C05·C06 |
| 8 | \`docs/specs/08_API_CONTRACT.md\` | 게임 API·관리 API·게임 전용 명령, 검증, 오류, 인증, 제한, 멱등성, 동시성, 버전 정책. | OpenAPI와 정상·오류 예제가 일치한다. 경로마다 권한과 부작용을 정한다. | A05·C01–C03 |
| 9 | \`docs/specs/09_SDK_INTEGRATION.md\` | MinbWebKit의 선택형 연결, 공개 함수·타입, 토큰 보관, 갱신, 취소, 종료, 호환 범위. | 기존 저장 API와 비연동 게임 동작을 보존한다. 게임별 규칙의 소유자가 명확하다. | A05·B05·B06·C05 |
| 10 | \`docs/specs/10_ADMIN_CONSOLE.md\` | 첫 운영 업무, 화면별 데이터·명령·권한, 변경 사유, 감사, 게시와 복구. | 업무 요구와 승인 UI 기준을 구분한다. 화면 상태·화면 크기·승인 자료를 연결한다. | A06·B07 |
| 11 | \`docs/specs/11_SECURITY_PRIVACY.md\` | 신뢰 경계, 위협, 비밀·토큰, CORS·CSRF, 입력·업로드, 호출 남용, 개인정보·감사. | 위협마다 방어 위치와 거부 검사가 있다. 수집·마스킹·보관·삭제 책임을 정한다. | A03·A05·C02·D04 |
| 12 | \`docs/specs/12_RELIABILITY_PERFORMANCE.md\` | 워크로드, 지연·오류 목표, 자원·비용 상한, 캐시, 큐, 시간 제한, 복구 목표. | 같은 입력·환경에서 측정할 지표와 판정 방법을 정한다. 아직 합의하지 않은 수치를 통과 기준으로 쓰지 않는다. | D01·D02 |
| 13 | \`docs/specs/13_DEPLOYMENT_OPERATIONS.md\` | 개발·검증·운영 환경, 네트워크·TLS, DB 이전, 배포·롤백, 비밀, 백업·복원, 관측·당직. | 새 환경을 재현하고 복원·장애 대응 절차를 실행할 수 있게 적는다. | B01·D03·D04 |
| 14 | \`docs/specs/14_VERIFICATION_RELEASE.md\` | 요구사항과 검사 연결, 계약·권한·동시성·실패 검사, 변경 소유권, 배포 조건과 증거. | 겹치는 검사마다 실행 소유자가 한 명이다. 미실행·실패·보류를 구분한다. | A07·C01–C06·D |

API의 기계 판독 계약은 게임 API와 관리 API의 \`openapi.yaml\`로 나눌 수 있다.
분리한 파일 수가 별도 서버의 수를 정하지는 않는다.
SDK 생성기는 반복되는 전송 타입에 사용한다. 게임의 계정·저장 수명 규칙은 별도 계약이 필요하다.

기술 선택 기록은 Architecture Decision Record, ADR로 관리할 수 있다.
ADR 하나에는 질문, 선택지, 결정 이유, 영향, 재검토 조건을 담는다. 첫 단계부터 별도 관리 도구를 만들 필요는 없다.
자체 최소 코어, Nakama 확장, fork의 범위와 유지 비용을 이 단계에서 비교한다.
언어·DB를 먼저 확정한 뒤 제품 요구를 끼워 맞추지 않는다.

## 4. 기능을 채택하면 추가할 스펙

| 제안 문서 | 자세히 정할 계약 | 시작 조건과 TODO |
| --- | --- | --- |
| \`ECONOMY_REWARDS.md\` | 재화·아이템·권리의 소유자, 원장, 수령, 쿠폰 한도, 만료, 업무별 중복 제약, 원자 지급, 복구. | 보상·경제 기능 채택. E01·C04·C06. |
| \`CONTENT_LIVEOPS.md\` | 차트·확률·공지·점검·클라이언트 버전, 작성·검증·게시·롤백, 환경, 캐시와 호환성. | 콘텐츠 제공 채택. E02. 기존 \`Config.dat\`와 제작 흐름을 먼저 구분한다. |
| \`RANKING_SOCIAL.md\` | 점수 신뢰, 동점·시즌·마감·정산 재실행, 친구·차단·길드의 상태 전이와 동시 변경. | 순위·소셜 기능 채택. E03. |
| \`REALTIME.md\` | 채팅·매칭·방·월드의 범위, 서버 판정·중계, 연결 소유자, 순서·중복·전달, tick, 재접속과 상태 복구. | 실시간 기능 채택. E04–E06. 게임별 요구에 따라 문서를 나눈다. |
| \`SUPPORT_ANALYTICS.md\` | 문의·신고·제재, 담당·이력, 이벤트 스키마, 집계 지연, 보관, 검색 한도와 접근권한. | 지원·통계 기능 채택. E07. 운영 지표와 제품 분석을 구분한다. |
| \`JOBS_EXTENSIBILITY.md\` | 등록한 서버 명령, 스케줄·시간대, 상태, 재시도·취소·중복 실행, 격리와 자원 상한. | 예약·펑션 기능 채택. E08. 임의 코드 업로드는 별도 결정이다. |
| \`EXTERNAL_INTEGRATIONS.md\` | 구매·환불·웹숍·푸시 공급자, 계정 귀속, 검증, 중복·역순 통지, 재처리와 대조. | 연동 기능 채택. E09. 실제 연결과 APK 검증은 F01–F04의 보류를 유지한다. |
| \`AI_OPERATOR_TOOLS.md\` | MCP·에이전트 도구의 실행 주체, 허용 대상과 명령, 승인, 감사, 결과 확인, 실패·중복 처리. | AI 운영 자동화 채택. 별도 기능 요청이 필요하다. 현재 구현 범위에 포함하지 않는다. |

경제 원장은 감사와 재구성에 필요한 거래 기록이다. 모든 상태를 이벤트에서 재구성하는 event sourcing을 필수로 뜻하지 않는다.
실시간 계약을 작성한다는 이유만으로 채팅·매치·월드 전체를 구현하지 않는다.

## 5. 아키텍처 문서에 들어갈 구성

처음에는 아래 책임의 관계를 그린다. 각 책임을 별도 서비스로 배포한다는 의미는 아니다.

| 책임 | 제공하는 기능 | 설계할 경계 |
| --- | --- | --- |
| 게임 클라이언트와 MinbWebKit | 부트, 계정 연결, 로컬 저장, 게임 요청. | 게임 UI와 로컬 수명은 게임·키트가 소유한다. 서버 완료와 로컬 완료를 구분한다. |
| 게임 API | 인증, 프로필, 허용한 진행의 조회·변경, 서버 명령. | 클라이언트가 운영 권한이나 경제 확정 권한을 얻지 않는다. |
| 관리 콘솔과 관리 API | 프로젝트·환경·유저 조회, 채택한 운영 명령. | 운영자 인증과 역할 검사, 사유와 감사, 게임 API와 다른 허용 명령. |
| 업무 모듈 | 계정, 저장, 채택한 경제·콘텐츠·사회 기능. | 모듈별 데이터 소유권과 함께 성공해야 하는 DB 거래. |
| 영속 저장소 | 계정·진행·업무 결과·감사 기록. | 원자성, 유일 제약, 격리, 이전·삭제·백업·복원. PostgreSQL은 후보이며 확정하지 않았다. |
| 자산 저장소와 CDN | 채택한 차트·정적 콘텐츠·첨부 파일. | 버전, 캐시, 권한, 크기, 서명 URL과 비용. 첫 흐름에 필요하지 않으면 생략한다. |
| 외부 공급자 | 로그인, 구매, 푸시, 원격 설정. | 공급자 장애, 비밀, 콜백 검증, 실제 상태 대조. 보류한 연결은 실행하지 않는다. |
| 운영 기반 | 배포, 관측, 경보, 백업과 복구. | 실행 환경, 비밀, 접근권한, 데이터 손실·복구 시간, 비용. |

캐시·Redis·검색 엔진·메시지 브로커·Kubernetes는 각각 도입 조건을 기록한다.
캐시는 허용한 오래된 데이터와 무효화 규칙이 있어야 한다. 공유 세션 저장과 조회 캐시의 목적도 구분한다.
검증된 단일 DB 거래로 끝나는 작업을 분산 거래로 바꿀 이유는 없다.

C4의 시스템 맥락도와 컨테이너도부터 작성하는 방안을 권한다.
공식 C4 문서도 모든 팀이 네 단계의 그림을 전부 작성할 필요는 없다고 설명한다. [C4 diagrams](https://c4model.com/diagrams)
실행 흐름은 로그인·저장·충돌·재접속의 시퀀스로 보완한다. 별도로 배포와 신뢰 경계를 표시한다.

## 6. API 명세의 필수 항목

각 API는 다음 항목을 채워야 구현과 검증을 시작할 수 있다.

1. 호출 목적과 호출자, 게임·관리·게임 전용 계약의 구분.
2. method·경로·버전과 허용하는 콘텐츠 타입.
3. 인증 방식, 세션 상태, 역할·프로젝트·환경·소유권 조건.
4. path·query·header·body의 스키마와 필수값·기본값·상한.
5. 조회가 반환하는 데이터와 변경이 만드는 부작용.
6. 성공 상태 코드, 응답 필드와 서버가 확정한 버전.
7. 오류 상태 코드, 안정된 업무 코드, 필드 오류와 재시도 가능 조건.
8. 멱등키의 범위·내용 비교·보관 기간·진행 중 요청·결과 재조회 규칙.
9. 기대 버전과 충돌 결과, 함께 성공해야 하는 저장·업무 결과.
10. 요청 기한, 취소 의미, 재시도 횟수와 간격, 호출 제한.
11. 목록의 정렬·필터·커서·페이지 상한과 일관성.
12. 감사·요청 추적·비밀 마스킹과 호환 변경·폐기 정책.

HTTP 요청 취소는 이미 커밋한 서버 거래를 취소하지 않는다.
응답을 받지 못했을 때는 실패로 단정하지 않는다. 같은 요청의 결과를 확인하는 규칙이 필요하다.
업무 요청이 접수된 상태와 최종 성공 상태를 구분한다. 비동기 작업에는 상태 조회와 만료 규칙도 둔다.

HTTP 오류 본문의 후보는 RFC 9457 Problem Details다.
업무별 오류 코드와 버전 충돌의 정보를 확장 필드로 정할 수 있다. 스택 추적과 비밀은 응답에 포함하지 않는다. [RFC 9457](https://www.rfc-editor.org/rfc/rfc9457.html)

첫 계약 후보는 게스트 세션, 세션 갱신·종료, 내 프로필, 진행 조회·저장이다.
프로젝트·환경·클라이언트 버전·점검 상태를 제공할 부트 정보 조회도 A01에서 채택 여부를 정한다.
이는 원격 Config나 콘텐츠 관리 전체를 첫 제공 범위에 포함한다는 결정이 아니다.
관리 계약 후보는 허용 프로젝트·환경, 유저 검색·상세, 진행 조회다.
이는 endpoint 이름이나 UI 배치를 확정한 목록이 아니다. 운영 변경 명령은 채택한 업무만 추가한다.

## 7. Escape Ball에서 먼저 확정할 계약

기존 소스 조사에서 등록한 저장 모듈은 아래 여섯 개다. [게임별 조사](../thebackend/10_AVOID_BALL_PILOT.md)

| 저장 모듈 | 현재 버전 | 스펙에서 판단할 내용 |
| --- | --- | --- |
| \`userinfo\` | 7 | 로컬 ID, 스테이지, 코인, 광고 제거, 로비 해금을 필드별로 구분한다. |
| \`userinfoItem\` | 1 | 아이템 수량을 로컬 진행으로 둘지 서버 경제로 관리할지 정한다. |
| \`userinfoEnemy\` | 1 | 확인한 적 소개의 동기화 여부와 허용 병합 규칙을 정한다. |
| \`userinfoIntro\` | 1 | 오프닝 확인 상태의 동기화 여부를 정한다. |
| \`userinfoCheckin\` | 1 | 표시용 진행과 실제 보상 확정의 서버 권한을 구분한다. |
| \`userinfoIAP\` | 1 | 로컬 거래 기록을 서버의 구매 검증이나 지급 증명으로 신뢰하지 않는다. |

\`userinfo\` 하나에도 진행과 경제 상태가 섞여 있다. 첫 동기화 필드는 아직 결정하지 않았다.
각 필드에는 저장 위치, 변경 권한, 허용값, 충돌 규칙, 이전 규칙과 검사를 붙인다.
기존 로컬 UUID만으로 서버 계정의 소유권을 인정하지 않는다.

첫 동기화·SDK 스펙에는 다음 보존 조건이 필요하다.

- 기존 메모리 캐시와 동기 공개 API를 유지한다. 비동기 서버 반영은 별도 완료 상태로 다룬다.
- 로컬 저장의 순차 실행, 충돌 검출, 변경 없는 저장 생략과 오류 전달을 보존한다.
- \`AtomicStorage.run\`의 동기 거래와 \`afterCommit\`을 서버 커밋으로 해석하지 않는다.
- 로컬 영속 저장 완료는 \`flush\`로 구분한다. 서버 응답은 다른 완료 증거다.
- 계정 전환은 진행 중 저장, 늦은 응답, 캐시와 구매 복구의 귀속을 함께 정한다.
- Android 저장은 \`profile\`로 읽고 쓴다. \`namespace\`만 바꾸면 계정을 격리한다는 가정은 사용하지 않는다.
- Escape Ball은 스토어 확정 전에 \`await user.flush()\`를 실행한다. 이 순서를 보존한다.
- 동기 지급 callback에 비동기 서버 지급을 그대로 넣지 않는다. 거래의 완료와 스토어 확정 순서를 별도로 설계한다.
- 부트 중 로컬 초기화 뒤 IAP 복구가 시작된다. 서버 로그인과 복구의 선후 관계를 정한다.
- 기존 키·스키마 이전·삭제 표식을 보존한다. 로컬 초기화가 서버 삭제를 뜻하는지도 명시한다.
- 별도 \`LocalData\`에 저장하는 언어·음량·진동 설정을 진행 동기화나 계정 전환으로 덮지 않는다.
- 게임의 절전·프레임 제한·자원 정리를 유지한다. 프레임마다 서버를 호출하거나 불필요한 영구 타이머를 추가하지 않는다.

위 항목은 기존 소스 조사에 따른 제약이다. 새 서버와 연결해 실행한 결과는 아니다.
근거는 [공통 키트 조사](../thebackend/09_WEB_ANDROID_INTEGRATION.md)와 [첫 게임 조사](../thebackend/10_AVOID_BALL_PILOT.md)에 있다.

## 8. 성능·신뢰성 스펙에서 합의할 값

| 분야 | 필요한 입력과 목표 | 검사 방법 |
| --- | --- | --- |
| 사용량 | 게임·환경 수, 활성 유저, 동시 요청, 로그인·저장 빈도, 데이터 크기와 증가량. | 실제 첫 게임의 대표 입력으로 워크로드를 고정한다. |
| 지연과 오류 | API 종류별 p50·p95·p99, 오류율, 측정 구간과 성공의 정의. | 같은 입력·환경에서 부하별 결과를 비교한다. |
| 자원과 격리 | CPU·메모리·연결 풀·큐 상한, 게임별 제한과 과부하 거부. | 한 게임의 부하가 다른 게임에 주는 영향을 측정한다. |
| 가용성과 복구 | 서비스 수준 목표 SLO, 허용 데이터 손실 RPO, 복구 시간 RTO. | 백업을 새 환경에 복원하고 시간·손실·권한을 확인한다. |
| 클라이언트 보존 | 부트 시간, 저장 지연, 네트워크 요청량, 프레임·절전·종료 동작. | 연결 전후의 같은 상태·기기·입력을 비교한다. |
| 비용 | 서버·DB·백업·자산 전송·로그의 예상량, 예산과 알림 기준. | 사용량 모델과 측정한 단가 항목으로 계산한다. |

목표 수치는 이번 문서에서 임의로 확정하지 않는다.
검사 시간 제한, 자원 상한, 실패 진단의 크기와 정리 절차도 검증 계획에 기록한다.
빌드 성공은 API 정확성·UI 일치·부하·복구 성능의 증거가 아니다.

## 9. 작성 순서와 첫 구현의 시작 조건

작성 순서는 의존성을 기준으로 한다. 모든 조건부 기능의 명세가 끝날 때까지 첫 구현을 기다릴 필요는 없다.

1. \`PRODUCT_SCOPE\`와 \`DOMAIN_MODEL\`로 첫 흐름·제외 범위·식별자를 정한다. A01과 A03의 기준이다.
2. 예상 워크로드·예산·운영 인력을 적는다. 아키텍처와 기술 스택을 비교할 입력으로 사용한다.
3. \`ARCHITECTURE\`와 기술 선택 기록을 작성한다. 모듈 경계와 실행 구성을 구분한다.
4. \`IDENTITY_ACCESS\`, \`DATA_MODEL\`, \`SYNC_LIFECYCLE\`로 권한과 저장·계정 수명을 정한다.
5. \`API_CONTRACT\`와 \`SDK_INTEGRATION\`으로 같은 흐름의 입력·출력·실패를 고정한다.
6. \`ADMIN_CONSOLE\`의 첫 조회 업무와 UI 기준을 정한다. 기능 정의만으로 새 화면을 승인하지 않는다.
7. 보안·성능·운영·검증 문서에서 첫 흐름에 필요한 계약을 작성한다. 상세 절차는 배포 전까지 완성한다.
8. 승인한 스펙으로 구현 계획을 작성한다. 서버·키트·게임·콘솔의 변경과 검사 소유자를 지정한다.

첫 구현을 시작할 때는 최소한 다음 질문의 답이 있어야 한다.

- 첫 버전에 제공할 기능과 제공하지 않을 기능은 무엇인가?
- 게임·환경·유저·설치·운영자는 어떤 식별자로 연결하는가?
- 게스트 자격을 어디에 보관하며, 분실·복구·전환은 어떻게 다루는가?
- 어떤 진행 필드를 동기화하며, 누가 그 값을 확정하는가?
- 두 기기 저장, 응답 유실, 계정 전환과 재시작 뒤 결과는 무엇인가?
- 클라이언트가 보낸 코인·아이템·구매 기록을 어디까지 신뢰하는가?
- 어떤 API와 SDK 계약을 첫 게임이 호출하며, 어떤 오류를 처리하는가?
- 운영자는 무엇을 조회하거나 변경할 수 있는가?
- 어떤 입력·환경·검사로 완료를 판정하는가?
- 배포에 실패하거나 데이터를 복원해야 할 때 누가 어떤 절차를 실행하는가?

공통 스펙에는 목적, 범위·제외, 용어, 결정과 대안, 상태·데이터, 정상·실패 계약, 호환·이전, 검증을 담는다.
미결정 항목에는 결정할 담당과 선행 조건을 적는다. 미결정을 검증된 구현으로 표시하지 않는다.

## 10. 공식 자료와 확인 범위

자료는 아래 문단과 표의 주장에 사용한다. 구체적인 제품 채택 판단은 이번 프로젝트를 위한 제안이다.

- 아키텍처 그림: 시스템 맥락도·컨테이너도와 필요한 추가 그림을 구분한다. [C4 diagrams](https://c4model.com/diagrams)
- HTTP 계약: OpenAPI는 HTTP API의 구조를 기술한다. 실제 스키마 검증·코드 생성·문서 도구의 지원도 확인해야 한다. [OpenAPI 공식 목록](https://spec.openapis.org/), [JSON Schema](https://json-schema.org/specification)
- HTTP 오류: 공통 오류 본문과 확장 필드를 설계할 수 있다. [RFC 9457](https://www.rfc-editor.org/rfc/rfc9457.html)
- 데이터 경합: DB 격리 수준과 애플리케이션의 버전 충돌 계약을 함께 검토한다. [PostgreSQL 동시성 제어](https://www.postgresql.org/docs/current/mvcc.html)
- 구매 책임: 검증과 계정 연결을 확인한 뒤 권리를 지급하는 서버 계약이 필요하다. 기존 로컬 구매 기록만으로 이를 대체하지 않는다. [Google Play 구매 보안](https://developer.android.com/google/play/billing/security)

이번 조사에서는 기존 보고서와 공식 검색 결과를 확인했다.
C4와 위 표준 상태, 아키텍처 연구의 원문 확인은 연결된 Chrome에서 담당을 나눠 진행했다.
Google Play 원문의 Chrome 탐색은 시간 제한으로 끝났고, 탭이 이전 페이지에 남은 것을 확인했다. 해당 주장은 공식 검색 본문을 근거로 사용했다.
제품 서버·SDK·실시간·결제·권한·동시성·부하·복원 검사는 실행하지 않았다.

## 11. 이번 산출물의 검증 범위

문서의 로컬 링크, 필수 주제, 기존 TODO 대응과 변경 범위를 확인한다.
원본 조사와 사용자 보류 상태를 유지한다. 개별 스펙 승인·기술 스택 확정·제품 구현은 남아 있다.`,filtered:!0,sourceHash:"cf9b94fd191dae962f18bbe046c0355d2dd23f068a12699e6ad26ed1b169a2e1"},{id:"docs-specs-account-withdrawal-md",title:"계정 탈퇴 계약",path:"docs/specs/ACCOUNT_WITHDRAWAL.md",category:"기능 명세",status:"구현 범위별 참조",body:`# 계정 탈퇴 계약

기준일은 2026-11-07이다. TODO A03의 계정 탈퇴·철회·자료 정리를 단계별로 구현한다.
사용자는 조사 기능 전반과 기능 우선 구현을 승인했다. 이 계약은 전체 목표를 대체하지 않는다.

## 원본과 구현 경계

[WithdrawAccount 원문](https://docs.backnd.com/sdk-docs/backend/base/user/withdraw/)을 연결된 Chrome에서 확인했다.
원본은 세션을 즉시 무효화하고, 유예 중 로그인으로 철회하며, 기한 이후 다음 정시에 자료를 삭제한다.
원본의 기본 유예 시간은 0시간이다. 즉시 탈퇴도 삭제 전에 콘솔에서 철회할 수 있다.
현재 플랫폼의 거래·감사·길드 정산에는 여러 유저의 이력이 연결돼 있다.

구현은 두 단계다. 먼저 예약·철회·인증·재전달을 연결하고, 삭제 정책이 정해지면 기한 작업과 자료 정리를 연결한다.
이는 순서이며 최종 범위 축소가 아니다. 첫 단계만으로 탈퇴 기능 전체를 완료했다고 보고하지 않는다.
삭제 범위는 사용자 답변을 기다린다. 개인 자료 삭제와 감사·거래 이력 보존 여부가 결정 대상이다.
답변 전에는 삭제 작업이나 영구 삭제 UI를 실행하지 않는다. 독립적인 제어 경계는 구현한다.

## 관리자 제어 API

경로는 \`/api/v1/admin/projects/{project}/{environment}/players/{player}/withdrawal\`이다.
GET은 현재 환경 read 권한, PUT은 write 권한과 유저 범위를 먼저 검사한다.
viewer는 조회만 한다. 다른 환경의 유저는 404다. 쿼리 문자열은 422다.

PUT은 \`{request_id,expected_version,withdrawn,grace_hours,reason}\`을 받는다. 추가·누락 필드와 잘못된 타입은 거절한다.
\`request_id\`는 UUID이며 버전은 0부터 9,007,199,254,740,991까지의 정수다.
\`grace_hours\`는 정수 0부터 720까지다. 이 상한은 자체 정책이며 원본의 상한을 주장하지 않는다.
\`withdrawn:false\`이면 \`grace_hours\`는 0이어야 한다. \`reason\`은 공백 외 내용이 있는 UTF-8 500바이트 이하 문자열이다.

GET과 PUT은 \`{player_id,version,withdrawn,requested_at,cancel_until,delete_after,reason,updated_at}\`를 반환한다.
초기 상태는 버전 0·withdrawn false와 나머지 null이다. 철회는 버전을 올리고 예약 시각을 null로 비운다.
예약 시 \`cancel_until = now + grace_hours * 3600\`이다.
\`delete_after\`는 \`cancel_until\`보다 뒤인 첫 UTC 정시다. 이 시각은 정리 작업의 최소 실행 시각이다.
정확히 정시인 기한도 다음 정시를 사용한다. 시각 계산과 버전은 안전한 정수 범위를 넘으면 거절한다.

같은 거래에서 상태·명령 결과·감사를 기록한다. 요청 namespace는 기존 \`requests\`와 공유한다.
canonical operation은 \`player.withdrawal.update\`다. 같은 UUID·본문은 과거 결과를 반환하고, 다른 본문·operation은 409다.
현재 권한 뒤, 현재 버전·시각 검사보다 먼저 성공 재전달을 처리한다. 옛 예약 재전달은 철회를 되돌리지 않는다.
서로 다른 명령의 같은 버전 수정은 하나만 성공한다. 예약 중 다시 예약하려면 먼저 철회한다. 활성 상태의 새 철회 명령은 409 \`withdrawal_not_pending\`이다.
관리자는 \`delete_after\` 전까지 철회할 수 있다. 기한 이후의 새 변경은 410 \`player_withdrawn\`이다.
감사 action은 \`player.withdrawal_requested\`와 \`player.withdrawal_cancelled\`다.

## 게임 요청과 로그인

\`POST /api/v1/game/account/withdrawal\`은 \`{request_id,expected_version,grace_hours}\`를 받는다.
현재 유효한 게임 bearer·접근 상태·운영 정책을 확인한 뒤 같은 예약 함수를 사용한다.
자기 명령의 operation은 \`player.withdrawal.request\`이며 actor는 서버가 \`player:{id}\`로 만든다.
성공 시 모든 해당 유저의 게임 세션을 같은 거래에서 삭제한다. 관리자 세션과 다른 유저는 유지한다.
관리자 예약도 해당 게임 세션을 모두 삭제한다. 철회는 예전 세션을 복원하지 않는다.

응답 유실에 대비해 자기 탈퇴 성공만 별도 receipt에 기록한다.
receipt는 원래 bearer의 SHA256·UUID·canonical 본문·결과·원래 만료 시각을 저장한다. 원문 bearer는 저장하지 않는다.
동일 경로에서 정확한 토큰 해시·UUID·본문과 미만료 receipt가 맞을 때만 과거 결과를 반환한다.
다른 본문은 409다. receipt에 없는 명령이나 만료한 receipt는 일반 인증을 통과해야 한다.
receipt는 일반 게임 접근·다른 명령·철회 권한을 주지 않는다. 자료 삭제 이후 재전달의 보관 범위는 정리 단계에서 유지한다.
자기 요청도 기존 \`requests\`의 유저·actor·UUID 충돌을 검사한다. 다른 명령의 UUID를 재사용할 수 없다.

게스트·커스텀 로그인은 자격을 검증한 뒤 최종 거래에서 예약을 확인한다.
커스텀 로그인은 KDF 전의 탈퇴 버전을 기록한다. 최종 버전이 다르면 409 \`account_changed\`로 끝낸다.
이미 계산 중이던 로그인 요청이 새 탈퇴를 자동 철회하지 않아야 한다. 새 로그인 시도는 같은 예약 세대를 읽고 철회할 수 있다.
\`now < cancel_until\`이면 같은 거래에서 철회·감사를 기록한 뒤 새 세션을 발급한다.
0시간 예약과 유예가 끝난 예약은 410이다. 틀린 자격은 기존 401이며 탈퇴 여부를 노출하지 않는다.
접근 차단·운영 정책이 새 로그인을 거절하면 철회·감사도 취소한다. KDF는 거래 밖에서 수행한다.
refresh는 로그인 철회로 취급하지 않는다. 과거 세션은 예약 시 삭제됐으므로 401이다.
보호 게임 API와 전환 인증의 공통 경계는 예약 상태를 거절한다. 관리자 자료 조회·업무는 유지한다.
이미 시작한 읽기 snapshot의 결과를 소급 취소하지 않는다. 세션 폐기 이후 시작한 인증은 실패한다.

## 저장과 유지 조건

DB22의 \`player_withdrawals\`는 sparse 상태를 저장한다. player·환경의 외래 키와 버전·시각·상태 조합을 검사한다.
\`player_withdrawal_receipts\`는 자기 성공의 제한된 재전달만 보관한다. 원래 세션 만료 뒤에는 재전달 권한이 없다.
receipt는 추후 유저 행 삭제 뒤에도 성공 확인을 허용하도록 유저 외래 키를 두지 않는다. 환경 외래 키는 유지한다.
receipt에 원문 자격·비밀번호·bearer를 넣지 않는다. 자기 receipt의 canonical 입력과 결과는 각각 1KiB 이하다.
관리자 사유는 원문 UTF-8 500바이트를 보존한다. JSON escaping 뒤 응답에 별도 1KiB 제한을 적용하지 않는다. 정리 단계가 만료 receipt를 제한된 배치로 제거한다.
기존 8슬롯·16개 준비문 캐시·연결 재사용·WAL/FULL·3초 DB 제한과 KDF의 거래 밖 실행을 유지한다.
기존 접근 차단의 공통 SQL에 예약 상태를 함께 확인한다. 보호 요청마다 별도 조회를 연쇄 추가하지 않는다.
기존 UI는 첫 단계에서 바꾸지 않는다. 삭제 정책과 정리 작업을 연결할 때 같은 구조로 관리 제어를 붙인다.

## 완료 근거

첫 단계는 권한·범위·정수 입력·경합·재전달·세션 삭제·감사 실패 취소·로그인 철회·기한 거절을 검증한다.
잘못된 자격의 401과 KDF 뒤 최종 상태 재검사를 포함한다. 기존 자료와 다른 유저는 유지해야 한다.
두 번째 단계는 삭제 범위·길드와 정산의 공유 상태·프로세스 재시작·실패 재개·관리 UI를 검증한다.
전체 탈퇴 완료는 두 단계의 실행 근거가 모두 있어야 한다. 정책 답변 대기는 독립 구현의 차단 조건이 아니다.`,filtered:!1,sourceHash:"e2b0d34f5099da066a0d50347a5101af1661d4a6525433eee12559fbb9abdef7"},{id:"content",title:"첫 콘텐츠 게시 계약",path:"docs/specs/CONTENT.md",category:"기능 명세",status:"구현 범위별 참조",body:"# 첫 콘텐츠 게시 계약\n\n기준일: 2026-11-07. 이 문서는 공지와 JSON 차트의 첫 게시 계약이다. 추가 기능은 각 명세를 따른다.\n전체 목표를 줄이지 않는다. 작성·게시·되돌리기의 거래 계약부터 실제로 연결한다.\n\n콘텐츠는 프로젝트·환경·종류·키·언어로 구분한다. 이 문서는 `notice`와 `chart`를 다룬다. `probability`는 [확률 명세](PROBABILITY.md)를 따른다.\n키는 영문 소문자·숫자·하이픈·밑줄 1–64자다. 언어는 영문·숫자·하이픈 1–35자다.\n언어를 생략한 게임 조회는 `ko`를 사용한다. 기본은 정확한 언어만 반환한다. 선택형 대체 언어는 [캐시·언어 계약](CONTENT_CACHE.md)을 따른다.\n\n작성본 수정은 `expected_revision`을 요구하고 이전 JSON을 변경하지 않는다. 매 저장은 새 revision이다.\n게시본은 작성본과 별도 포인터다. 수정만으로 게임 결과가 바뀌지 않는다.\n게시·되돌리기·게시 중단은 `expected_publication_version`과 사유를 요구한다.\n같은 게시 버전에 대한 동시 변경은 하나만 성공한다. 다른 요청은 409다.\n게시와 감사 기록이 같은 거래다. 감사 실패는 게시 포인터 변경도 취소한다.\n되돌리기는 이전에 실제 게시한 revision만 대상으로 한다. 게시 중단은 버전을 삭제하지 않는다.\n\n공지는 `title`과 `body`를 받는다. 제목은 1–100자, 본문은 1–3000자다.\n차트는 `columns`와 `rows`다. 열은 1–32개이며 이름은 키와 같은 규칙이다.\n열 타입은 `string`, `number`, `boolean`이다. 숫자는 IEEE 754 배정밀도이며 절댓값이 9,007,199,254,740,991을 넘으면 거부한다.\n그보다 큰 정수 식별자는 문자열 열로 정의한다. 콘솔도 JSON 입력에서 같은 범위를 검사한다. 행은 최대 1000개이며 모든 열의 값과 타입이 일치해야 한다.\n입력 전체에는 기존 16KiB 제한이 적용된다. 큰 파일·압축·CDN은 후속 제공 단계다. 조건부 조회는 캐시·언어 계약을 따른다.\n운영 데이터 검증을 게임의 결제·지급 권한 검증으로 해석하지 않는다.\n\n관리 prefix는 `/api/v1/admin/projects/{project}/{environment}/content`다.\n\n| 경로 | 입력 | 결과 | 권한 |\n| --- | --- | --- | --- |\n| `GET/POST /` | 생성: kind, key, locale, body | 목록·새 콘텐츠 | 조회·편집 |\n| `GET /{id}` | 없음 | 작성본·게시 상태·revision 목록 | 조회 |\n| `PUT /{id}/draft` | expected_revision, body | 새 작성본 revision | 편집 |\n| `POST /{id}/publish` | expected_publication_version, revision, reason | 게시 버전 | 편집 |\n| `POST /{id}/rollback` | 같은 게시 입력 | 과거 게시 버전 | 편집 |\n| `POST /{id}/unpublish` | expected_publication_version, reason | 게시 중단 | 편집 |\n\n게임은 `/api/v1/game/content/{kind}?locale=ko&cursor=...`로 게시본을 조회한다. bearer 세션에서 범위를 결정한다.\n목록은 50개와 다음 커서다. 작성본과 게시 중단 상태는 나오지 않는다. 게시 조회는 ETag 재검증을 제공하며 관리·실패 응답은 no-store다.\n운영자가 올린 공지의 HTML은 실행하지 않는다. 콘솔은 JSON·일반 텍스트로 표시한다.\n\n실제 Chrome에서 작성→게시→수정→재게시→되돌리기를 실행한다. 전체 E02 완료로 보고하지 않는다.",filtered:!0,sourceHash:"7b9605287565578f015f5ffdece1da9b18843a5ee4116e4749e23630f7b0b75a"},{id:"docs-specs-content-cache-md",title:"게시 콘텐츠의 캐시와 언어 대체",path:"docs/specs/CONTENT_CACHE.md",category:"기능 명세",status:"구현 범위별 참조",body:"# 게시 콘텐츠의 캐시와 언어 대체\n\nE02의 게시 콘텐츠 조회에 조건부 캐시와 선택형 대체 언어를 추가한다.\n기존 작성·게시·되돌리기·추첨 계약과 관리 화면은 유지한다. DB 이전과 새 의존성은 추가하지 않는다.\n\n## 조건부 조회\n\n`GET /api/v1/game/content/{kind}`의 성공 응답에 따옴표로 감싼 `ETag`를 제공한다.\n대상은 `notice`, `chart`, `probability`다. 기존 본문 구조와 50개 페이지를 유지한다.\nETag는 프로젝트·환경·종류·요청 언어·대체 언어·커서와 반환한 게시 버전으로 계산한다.\n작성본 수정은 게시 전 ETag를 바꾸지 않는다. 게시·되돌리기·게시 중단과 페이지 결과 변경은 ETag에 반영한다.\n\n클라이언트는 받은 ETag를 `If-None-Match`에 보낸다. 현재 값과 일치하면 서버는 본문 없는 `304`를 반환한다.\nGET의 약한 비교·여러 태그·`*`는 [RFC 9110 13.1.2](https://www.rfc-editor.org/rfc/rfc9110.html#section-13.1.2)를 따른다.\n조건부 헤더는 합계 4096바이트까지 받는다. 이 경로의 잘못된 문자와 상한 초과는 각각 `422`, `431`이다.\n서버는 인증·유효 세션·점검·최소 버전을 검사한 뒤 조건을 평가한다. 일치한 ETag로 접근 제한을 우회할 수 없다.\n\n성공한 `200`과 `304`는 `Cache-Control: private, no-cache`를 제공한다.\n개인 캐시는 응답을 저장할 수 있지만 매번 서버 검증을 받아야 한다. 공유 캐시에 저장하지 않는다.\n`Vary: Authorization, X-Client-Version`으로 주체와 클라이언트 버전별 요청을 구분한다.\n이는 [RFC 9111의 no-cache](https://www.rfc-editor.org/rfc/rfc9111.html#section-5.2.2.4)와 [private](https://www.rfc-editor.org/rfc/rfc9111.html#section-5.2.2.7)를 적용한 계약이다.\n관리·경제·진행·실패 응답은 `no-store`를 유지하며 ETag를 제공하지 않는다.\n\n브라우저는 표준 HTTP 캐시를 사용할 수 있다. 직접 저장하는 SDK는 전체 요청 범위와 인증 주체를 캐시 키에 포함해야 한다.\nSDK의 명시적 로컬 읽기·삭제·초기화·계정 전환은 B05의 후속 계약으로 남긴다. 이번 서버 검사를 SDK 완료로 표시하지 않는다.\n\n## 언어 선택\n\n기존 요청은 정확한 언어만 조회한다. `locale` 기본값은 계속 `ko`다.\n`fallback_locale=ko`를 명시하면 같은 논리 키의 요청 언어 게시본을 먼저 선택한다.\n그 게시본이 없으면 지정한 대체 언어 게시본을 반환한다. 작성본과 게시 중단은 요청 언어의 게시본으로 취급하지 않는다.\n같은 프로젝트·환경·종류 안에서만 선택하며 한 키는 한 번만 반환한다. 응답의 `locale`은 실제 선택한 언어다.\n\n```text\n/api/v1/game/content/notice?locale=en&fallback_locale=ko\n```\n\n요청 언어와 대체 언어가 같으면 기존 정확한 언어 조회와 동일하다.\n조회 조건을 먼저 적용한 뒤 기존 UUID 순서와 커서를 사용한다. 페이지 사이의 동시 게시를 고정하는 스냅숏 계약은 제공하지 않는다.\n중복·알 수 없는 매개변수·잘못된 언어·잘못된 커서는 `422`다.\n이벤트 조회는 기존의 정확한 언어 계약을 유지한다. 이벤트에 `fallback_locale`을 보내면 `422`를 반환한다.\n\n## 검증과 남은 범위\n\n게시 변경의 무효화·작성본의 안정성·빈 페이지의 범위 분리·약한 태그·빈 304 본문을 검사한다.\n일치한 조건에서도 인증·점검·최소 버전이 집행되는지 확인한다. 언어 우선순위·격리·51개 페이지도 검사한다.\n기존 조회와 변경 전후를 같은 자료로 측정한다. 운영 부하와 기존 ERR-08의 원인 미확인은 D02에 남긴다.\nCDN·큰 파일·콘텐츠 묶음의 원자 게시·완전한 SDK 로컬 캐시는 전체 후속 범위다. 이번 기능으로 전체 E02를 닫지 않는다.",filtered:!1,sourceHash:"67831369e2cb75f990a465b01b1fb63046509195c523ed9a815fcce70d6df7f5"},{id:"docs-specs-custom-accounts-md",title:"커스텀 계정 계약",path:"docs/specs/CUSTOM_ACCOUNTS.md",category:"기능 명세",status:"구현 범위별 참조",body:`# 커스텀 계정 계약

기준일은 2026-11-07이다. 신규 커스텀 가입·로그인과 게스트 전환을 구현한다.
기존 player ID와 진행·프로필·재화·소셜 자료를 보존한다. TODO A03과 B03의 계정 확장 단위다.
사용자가 기능 우선 구현을 지시했으므로 기존 화면 구조와 설치한 라이브러리를 사용한다.

## 근거와 자체 선택

[원본 조사](../../study/thebackend/01_CORE_FEATURES.md)는 신규 가입201·중복 ID409·가입 직후 세션 발급을 확인했다.
게스트에서 커스텀으로 전환하는 정확한 원본 계약은 미확인이다. 아래 정책은 이 플랫폼의 구현 선택이다.

- ID는 ASCII 영문·숫자·밑줄 3–64바이트다. 대소문자를 구분하고 공백 제거·문자 변환을 하지 않는다.
- 비밀번호는 UTF-8 8–128바이트다. 공백·유니코드 원문을 보존하며 별도 조합 규칙을 추가하지 않는다.
- ID는 프로젝트·환경 안에서 유일하다. player 하나에 커스텀 자격 하나만 연결한다.
- 전환은 현재 게임 bearer의 본인만 허용한다. ID·비밀번호를 관리자 응답에 노출하지 않는다.
- 전환 뒤 게스트 자격으로 새 로그인할 수 없다. 기존 게임 세션은 유지하고 관리자 세션 폐기는 그대로 적용한다.
- 비밀번호 변경·복구·소셜 연결·계정 병합·탈퇴는 전체 목표의 후속 단위다.

## API

세 요청은 JSON 객체 \`{ "custom_id": "Example_1", "password": "…" }\`를 받는다.
누락·null·다른 타입·추가 필드·쿼리 문자열은422다. 공개 로그인도 먼저 입력 형식을 검사한다.
설치 UUID와 \`player_id\`는 인증 증명이 아니다. 전환 입력에 대상 player를 받지 않는다.

| 메서드와 경로 | 결과 | 실패 |
| --- | --- | --- |
| POST \`/api/v1/game/{project}/{environment}/accounts/custom\` | 201 \`{player_id,kind:"custom",token,expires_at}\` | 중복 ID409 \`custom_id_taken\`, 없는 환경404 |
| POST \`/api/v1/game/{project}/{environment}/sessions/custom\` | 200 \`{player_id,kind:"custom",token,expires_at}\` | 없는 ID·틀린 비밀번호·다른 환경401 \`unauthorized\` |
| POST \`/api/v1/game/account/custom\` | 200 \`{player_id,kind:"custom",custom_id}\` | 만료·폐기 bearer401, 사용 중인 ID409, 이미 다른 연결409 |

세션은 기존 \`issue_session()\`을 사용한다. 수명은1시간이며 DB에는 토큰 해시만 저장한다.
모든 응답은 \`no-store\`다. 게임 정책의 점검·최소 버전을 준비와 최종 거래에서 모두 검사한다.

## 재시도와 경합

가입은 같은 ID를 다시 보내도409다. 가입 응답이 유실되면 같은 ID·비밀번호로 로그인해 복구한다.
가입 결과나 원문 토큰을 \`requests\`에 저장하지 않는다. 가입 재시도를 새 계정 생성 성공으로 보고하지 않는다.
같은 ID·비밀번호로 전환을 재전달하면200과 같은 연결 정보를 반환한다. 감사·활동은 추가하지 않는다.
같은 연결에 틀린 비밀번호를 보내면401이다. 다른 ID로 다시 연결하려는 요청은409 \`account_already_custom\`이다.
두 준비 작업이 같은 미연결 상태를 읽고 경합하면 먼저 확정한 거래가 이긴다.
준비 뒤 현재 자격이 바뀌었으면409 \`account_changed\`다. writer를 놓은 뒤 재전달할 수 있고 서버에서 무한 재시도하지 않는다.
동일 ID로 가입·전환하는 다른 유저는 하나만 성공한다. 로그인과 세션 폐기는 최종 writer 순서에 따른다.

## 거래와 비밀

기존 Argon2 구현을 재사용한다. 원문 비밀번호·무염 비밀번호 해시를 DB·요청 기록·감사·로그에 저장하지 않는다.
비밀번호 해시 생성·검증은 기존8슬롯 안에서 실행하되 \`BEGIN IMMEDIATE\` 밖에서 수행한다.
준비할 때 환경·정책·현재 bearer·연결 상태를 읽는다. 최종 거래에서 모두 다시 검사한다.
로그인은 준비 때 검증한 password hash와 최종 hash가 같은지 확인한다. 전환도 같은 방식으로 현재 연결을 검사한다.
가입·전환은 player·자격·활동·감사·세션을 필요한 범위에서 같은 거래로 확정한다. 실패하면 모두 취소한다.
로그인은 세션·활동을 함께 확정한다. 로그인 결과에 PHC나 게스트 자격을 넣지 않는다.
없는 ID도 유효한 고정 dummy PHC로 검증 비용을 지불한다. 실패 응답은401로 통일하되 일정한 응답 시간을 보장하지 않는다.

호출 제한은 세 고정 bucket으로 각각 분당30회다. 실패도 집계하고 기존 제한은 변경하지 않는다.
해시 준비 동안 전역 writer를 점유하지 않으므로 무관한 진행 저장을 계속 처리할 수 있어야 한다.

## 저장과 관리 콘솔

DB20은 \`player_custom_accounts\` 테이블 하나를 추가한다. 필드는 player·프로젝트·환경·ID·password hash·연결 시각이다.
player PK와 scope별 ID 유일성, players의 복합 외래 키로 소속을 강제한다. 기존 players의 다섯 열은 유지한다.
신규 커스텀 player의 게스트 자격은 외부로 발급하지 않는다. 게스트 로그인은 커스텀 연결이 없는 player만 허용한다.
기존 유저 목록 두 경로와 \`GET /game/me\`는 실제 \`kind\`를 반환한다. 기존 게스트 응답 형태는 유지한다.
콘솔은 기존 계정 유형 칸에 \`게스트\` 또는 \`커스텀\`만 표시한다. 화면 구성·색상·간격·탐색을 바꾸지 않는다.
SQL 준비 캐시·연결 재사용·8슬롯·WAL/FULL·세션 인덱스·클라이언트 지연 로딩은 유지한다.

## 완료 근거

- 신규 가입·로그인·전환과 같은 player 자료 보존을 실제 API로 확인한다.
- 입력·scope·정책·호출 제한·오래된 bearer와 동일/다른 연결의 경합을 검사한다.
- 감사 실패 때 가입·전환의 전체 취소와 재전달 성공을 확인한다.
- 재오픈·세션 폐기·가입 응답 유실 후 로그인 복구를 확인한다. 비밀은 PHC와 토큰 해시로만 남아야 한다.
- 기존 사용자 목록·로그인·인증·진행 경로를 같은 자료에서 전후 비교한다. 성능 미확인은 별도로 기록한다.
- Chrome에서 기존 화면과 두 계정 유형을 확인한다. 전체 플랫폼·후속 계정 기능 완료로 확대하지 않는다.`,filtered:!1,sourceHash:"3d1d76e25a772d393ed978e47a7ae00b29df7061bdeb82f41aedfbc00bcb0d17"},{id:"economy",title:"첫 경제·우편·쿠폰 계약",path:"docs/specs/ECONOMY.md",category:"기능 명세",status:"구현 범위별 참조",body:`# 첫 경제·우편·쿠폰 계약

기준일: 2026-11-07. TODO E01·C04·C06의 첫 실행 범위다. 전체 기능 순서는 [PLATFORM](PLATFORM.md)을 따른다.
사용자는 기능 동작을 우선하고 구현을 계속하라고 지시했다. 별도 UI 승인을 다시 요구하지 않는다.

## 제공 범위

운영자는 환경별 재화·아이템을 정의하고 유저에게 지급하거나 보상 우편을 보낸다.
쿠폰은 정해진 자산·수량·만료·전체 한도를 갖는다. 유저별 수령은 한 번이다.
게임은 잔액·우편을 조회하고 우편 수령·쿠폰 사용을 요청한다. 클라이언트가 지급 수량을 결정하지 않는다.
아이템 소비·구매·유료 재화 회수·확률 추첨·일괄 우편·예약 발송은 연결할 업무 계약에서 확장한다.
이를 경제 기능 전체의 완료로 표시하지 않는다. 실제 결제와 외부 발송은 실행하지 않는다.

## 데이터와 불변 조건

자산은 프로젝트·환경에 귀속하며 종류는 \`currency\` 또는 \`item\`이다. 자산 ID는 서버 UUID다.
잔액은 유저·자산별 정수다. 지급 수량은 1–1,000,000,000이며 잔액은 JavaScript의 안전한 정수 범위를 넘지 않는다.
각 지급은 원장·잔액·업무 결과·감사를 같은 SQLite 거래에서 저장한다.
직접 지급의 \`request_id\`는 UUID다. 같은 ID와 입력은 기존 결과를 반환하고 다른 입력은 409다.
우편 수령의 업무 키는 우편 ID다. 쿠폰 수령의 업무 키는 쿠폰 ID와 유저다.
이미 수령한 요청은 만료 뒤에도 최초 결과를 반환한다. 미수령 요청만 현재 만료를 검사한다.
쿠폰 전체 한도와 수령 기록을 같은 쓰기 거래에서 검사한다. 마지막 한도를 두 유저에게 지급하지 않는다.
우편·쿠폰 지급이 실패하면 잔액·원장·업무 결과·수령 기록을 모두 취소한다.
첫 로컬 단계에서 원장과 업무 결과를 자동 삭제하지 않는다. 운영 보관·복원 정책은 D03·D04에서 정한다.

## 권한과 입력

viewer는 정의·우편·쿠폰·원장을 조회할 수 있다. owner·editor만 작성과 직접 지급을 실행한다.
관리자 지급·우편 발급에는 변경 사유를 요구한다. 다른 프로젝트·환경의 유저·자산은 거부한다.
게임 요청은 현재 세션에서 유저·프로젝트·환경을 결정한다. 타인 우편 ID는 404다.
알 수 없는 필드는 422다. 만료 시각은 UTC Unix 초이며 발급 때 미래의 1년 이내여야 한다.
쿠폰 코드는 4–48자의 대문자·숫자·하이픈이다. 같은 환경에서 유일하다.
우편 제목은 1–100자, 자산 이름은 1–80자다. 목록은 50개와 다음 커서를 제공한다.

## HTTP

관리 prefix는 \`/api/v1/admin/projects/{project}/{environment}\`다.

| 경로 | 입력 | 결과 | 역할 |
| --- | --- | --- | --- |
| \`GET/POST /assets\` | 작성: name, kind | 자산 목록·새 자산 | 조회·편집 |
| \`GET /players/{player}/wallet\` | 없음 | 자산별 잔액 | 조회 |
| \`POST /players/{player}/grants\` | request_id, asset_id, amount, reason | 확정 잔액과 업무 ID | 편집 |
| \`GET /mail\` | cursor 선택 | 발송·수령 목록 | 조회 |
| \`POST /players/{player}/mail\` | request_id, subject, asset_id, amount, expires_at, reason | 우편 | 편집 |
| \`GET/POST /coupons\` | 작성: request_id, code, asset_id, amount, expires_at, max_redemptions | 목록·쿠폰 | 조회·편집 |
| \`GET /ledger\` | cursor 선택 | 원장 목록 | 조회 |

게임 prefix는 \`/api/v1/game\`다. bearer 세션을 요구한다.

| 경로 | 입력 | 결과 | 실패 |
| --- | --- | --- | --- |
| \`GET /wallet\`, \`GET /mail\` | 없음·cursor 선택 | 자기 잔액·우편 | 인증·범위 |
| \`POST /mail/{id}/claim\` | \`{}\` | 최초 지급 결과 | 타인 404·만료 410 |
| \`POST /coupons/redeem\` | code | 최초 지급 결과 | 없음 404·한도 409·만료 410 |

경제 API의 오류·크기·기한·Origin은 공통 계약을 따른다. 전송 성공과 확정 거래를 구분한다.

## 검사

실제 HTTP 통합 검사에서 관리자 권한, 동시 수령, 쿠폰 마지막 한도와 재전달을 확인한다.
원장 INSERT 실패를 주입해 부분 지급이 없는지 확인한다. 같은 요청을 다시 보내 최초 지급을 완료한다.
브라우저에서는 정의·지급·우편·쿠폰의 관리자 흐름을 확인한다. 실제 게임 SDK 연결은 B05·C01에 남긴다.`,filtered:!0,sourceHash:"966e0bcd808f726a9c8e53ad44fc0322a1c8ad2077ac2119845cc1025a53b0c1"},{id:"docs-specs-friends-md",title:"친구 요청과 차단",path:"docs/specs/FRIENDS.md",category:"기능 명세",status:"구현 범위별 참조",body:"# 친구 요청과 차단\n\nTODO E03의 친구 요청·수락·거절·취소·해제·차단을 Rust API와 관리 콘솔에 연결한다.\n사용자는 기능 우선 구현을 지정했다. 기존 프로젝트·환경·역할·감사·요청 제한과 콘솔 구조를 재사용한다.\n원본 근거는 [C30 조사](../../study/thebackend/01_CORE_FEATURES.md#c30-친구)다. 자체 정책과 원본 SDK 호환을 구분한다.\n길드·그룹·접속 알림·자동 만료와 게임별 검색은 남은 전체 범위다.\n\n## 저장과 상태\n\n관계는 같은 프로젝트·환경의 서로 다른 유저 두 명으로 구성한다. 유저 UUID를 정규화한다.\n두 UUID를 정렬한 한 쌍을 유일 키로 저장한다. 상태는 `none`, `pending`, `accepted`다.\n`pending`에는 요청자를 기록한다. 각 유저의 차단 여부는 독립된 두 값이다.\n어느 한쪽이 차단하면 관계 상태는 `none`이다. 차단 해제는 관계나 요청을 복구하지 않는다.\n\n별도 요청·친구·차단 테이블 방식 대신 한 쌍의 상태를 같은 행에서 바꾼다. 관련 조건을 한 거래에서 검사하기 쉽다.\n행의 `version`은 변경마다 증가한다. 처음 없는 관계는 버전 0이며, 최초 변경은 1이다.\n해제 뒤에도 행과 버전을 보존한다. 과거 명령이 새 요청에 적용되는 ABA 문제를 막는다.\n성공 명령의 재전달 결과는 현재 관계와 별도 기록한다.\n\n## 정원\n\n환경의 정책은 `revision`, `max_friends`, `max_incoming`, `max_outgoing`이다.\n최초 값은 0·0·100·100이다. 원본의 비활성 친구 기본값을 유지하며 콘솔에서 정원을 설정한다.\n각 정원은 정수 0 이상 1,000 이하다. 0은 해당 새 요청·수락을 허용하지 않는다.\n정원을 줄여도 기존 관계를 삭제하지 않는다. 차단·해제·거절·취소·친구 해제는 계속 가능하다.\n\n요청할 때 양쪽 친구 수, 보낸 쪽 요청 수와 받은 쪽 요청 수를 검사한다.\n수락할 때 양쪽 친구 수를 다시 검사한다. 확인과 변경은 같은 `BEGIN IMMEDIATE` 거래다.\n\n## 명령\n\n게임은 자기 관계만 변경한다. `request_id`, `expected_version`, `action`을 받는다.\n관리자 owner·editor는 지정 유저의 관계를 대신 처리하며 공백이 아닌 500바이트 이하 `reason`을 추가한다.\n모든 새 명령은 조회한 관계 버전을 요구한다. 안전 정수 범위는 기존 계약을 따른다.\n\n| action | 조건 | 결과 |\n| --- | --- | --- |\n| `request` | 관계 없음·양쪽 차단 없음·정원 여유 | 본인이 요청자인 pending |\n| `accept` | 상대가 보낸 pending·양쪽 차단 없음·양쪽 친구 정원 여유 | accepted |\n| `reject` | 상대가 보낸 pending | none |\n| `cancel` | 본인이 보낸 pending | none |\n| `remove` | accepted | none |\n| `block` | 현재 버전 일치 | 본인 차단 true·관계 none |\n| `unblock` | 현재 버전 일치 | 본인 차단 false·관계 복구 없음 |\n\n같은 방향 중복 요청은 `409 request_exists`, 교차 요청은 `409 incoming_request_exists`다. 자동 수락하지 않는다.\n이미 친구이면 `409 already_friends`, 차단이 있으면 새 요청·수락은 `409 relation_blocked`다.\n수락·거절·취소의 방향이 다르면 `409 request_not_incoming` 또는 `409 request_not_outgoing`이다.\n친구가 아닌 해제는 `409 not_friends`다. 친구 정원은 `409 friend_limit`, 요청함은 `409 request_limit`다.\n새 버전 불일치는 `409 relation_conflict`다. 이미 같은 차단 상태인 block·unblock은 상태를 바꾸지 않고 성공한다.\n\n같은 행을 지우지 않으므로 취소 뒤 새 요청에는 더 큰 버전이 필요하다. 지연된 수락은 새 요청을 수락할 수 없다.\n성공한 UUID와 같은 입력은 원래 결과를 반환한다. 이후 해제·차단 뒤 재전달도 상태를 되돌리지 않는다.\n같은 UUID에 작업·유저·대상·입력이 다르면 `409 idempotency_conflict`다.\n인증·환경·역할·유저 귀속 검사는 재전달에도 적용한다. 그 뒤 재전달을 현재 관계·정원·버전보다 먼저 검사한다.\n관계·명령 결과·감사는 함께 성공하거나 취소된다. 오류 응답은 명령 결과로 저장하지 않는다.\n\n## 조회\n\n관계 응답은 `{player_id, version, status, blocked}`다. `player_id`는 상대 유저다.\n`status`는 조회자 기준 `none`, `incoming`, `outgoing`, `friend`다. `blocked`는 본인의 차단 여부다.\n게임에는 상대의 차단 값을 직접 노출하지 않는다. 관리 관계 조회에는 `blocked_by_peer`도 포함한다.\n자기 관계 조회를 막지 않으므로 차단한 유저도 자신의 차단을 해제할 수 있다.\n\n목록은 `kind=friends|incoming|outgoing|blocked`이며 기본값은 `friends`다.\n목록은 상대 UUID 오름차순으로 최대 50개다. `next_cursor`는 마지막 상대 UUID이며 다음 조회의 `cursor`다.\n알 수 없는·중복·잘못된 쿼리는 422다. 다른 환경의 유저는 404다.\n관계와 목록·정책은 `no-store`다. 게임 인증·최소 버전·점검은 기존 실제 경로 제한을 따른다.\n\n## HTTP\n\n관리 prefix는 `/api/v1/admin/projects/{project}/{environment}/friends`다.\n\n| 경로 | 입력 | 결과 |\n| --- | --- | --- |\n| `GET /policy` | 없음 | 정책, viewer 이상 |\n| `PUT /policy` | request_id, expected_revision, max_friends, max_incoming, max_outgoing, reason | 정책, editor 이상 |\n| `GET /players/{player}` | kind, cursor 선택 | 관계 목록, viewer 이상 |\n| `GET /players/{player}/{peer}` | 없음 | 관계, viewer 이상 |\n| `POST /players/{player}/{peer}` | request_id, expected_version, action, reason | 관계, editor 이상 |\n\n정책의 새 버전 불일치는 `409 revision_conflict`다. 성공 UUID의 재전달·감사는 관계 명령과 같은 규칙을 따른다.\n게임은 `GET /api/v1/game/friends/policy`, `GET /api/v1/game/friends`와 `GET/POST /api/v1/game/friends/{peer}`를 사용한다.\n게임은 정책을 편집할 수 없다. 관계 명령의 다른 actor·범위·필드는 받지 않는다.\n\n## 콘솔과 검증\n\n소셜 메뉴에서 정책·유저·목록 종류·대상 관계를 조회한다. 새 소셜 메뉴는 현재 공통 스타일을 따른다.\n운영 명령은 먼저 관계를 조회하고 사유를 입력한 뒤 실행한다. viewer는 읽기만 가능하다.\n불명확한 결과에는 같은 요청을 재시도한다. 처리 중·불명확한 결과는 메뉴·프로젝트·환경·로그아웃을 잠근다.\n\n검사는 요청 방향·교차 요청·정원 경쟁·해제 뒤 재전달·이전 버전·상호 차단·감사 실패·51개 페이지를 포함한다.\n새 의존성·자동 커밋·push·외부 배포·실제 발송·결제는 추가하지 않는다.",filtered:!0,sourceHash:"849c65c2fab9e82ab9bdd511e8c6e45903d32fa92a7671552fab99e63dc17a71"},{id:"docs-specs-game-data-md",title:"관리형 게임 데이터",path:"docs/specs/GAME_DATA.md",category:"기능 명세",status:"구현 범위별 참조",body:`# 관리형 게임 데이터

관리자는 프로젝트·환경별 컬렉션과 행을 관리한다. 게임 유저는 컬렉션 정책에 따라 데이터를 읽고 쓴다.
컬렉션 정의·소유권·스키마·행 CRUD·복구·최대 10개 원자 작업을 연결한다. 전체 A04와 플랫폼 목표는 유지한다.

## 근거와 경계

[핵심 조사 C10–C19](../../study/thebackend/01_CORE_FEATURES.md)와 [실제 데이터 조사](../../study/thebackend/05_LIVE_CONSOLE_ANALYSIS.md)의 책임을 재구성한다.
원본의 Public 권한은 문서 세대별 차이가 있다. 자체 정책은 읽기와 쓰기를 별도로 지정한다.
원본 SDK·행 크기·모든 쿼리 연산자를 복제하지 않는다. 현재 16KiB 요청 제한 안에서 동작한다.
필드 검색·정렬/선택·사용자 인덱스·온라인 스키마 변경·백업 복원은 후속 제공 단위다. 목록·ID·소유자 조회를 먼저 구현한다.
일반 데이터는 재화 원장·구매 기록·검증된 점수와 다르다. 관리자 전용 정책으로 바꿔도 과거 게임 입력을 신뢰 데이터로 바꾸지 않는다.

## 컬렉션과 정책

컬렉션은 id·key·name·kind·read_access·write_access·schema·version·created_at·updated_at·archived_at을 반환한다.
ID는 서버 UUID다. key는 기존 content::valid_key의 소문자 ASCII·숫자·하이픈·밑줄 1-64바이트다.
name은 다듬은 Unicode 이름 1-100 scalar·300바이트 이하며 제어문자가 없어야 한다.
kind는 user 또는 shared다. user 행은 같은 환경의 유저가 소유한다. shared 행의 owner_id는 null이다.
key·kind·schema는 생성 후 바꾸지 않는다. name·읽기/쓰기 정책은 기대 버전과 사유로 바꾼다.

정책은 none·owner·authenticated다. none은 게임 접근 불가, owner는 본인 행, authenticated는 같은 환경의 로그인 유저다.
shared에는 owner 정책을 허용하지 않는다. 게임 쓰기 권한은 읽기 권한의 범위를 넘을 수 없다.
write:owner에는 read:owner 또는 authenticated가 필요하다. write:authenticated에는 read:authenticated가 필요하다.
read:none에는 write:none만 가능하다. 관리자는 별도 역할 권한으로 읽고 쓴다. 공개 읽기는 공개 수정을 뜻하지 않는다.
user 생성 폼의 기본은 owner/owner다. shared의 기본은 authenticated/none이다.

활성 컬렉션은 환경별 최대 100개다. 활성 key에만 유일 제약을 두며 삭제한 key를 새 UUID로 사용할 수 있다.
삭제는 archived_at을 남긴다. 컬렉션·행·명령은 물리 삭제하지 않는다. 관리자는 과거 정의와 행을 조회하고 복구할 수 있다.
복구는 같은 ID를 활성화한다. 현재 활성 key 충돌·100개 한도·버전 충돌은 거절한다.
게임의 목록/조회는 삭제한 컬렉션을 숨긴다. 새 쓰기도 막되 현재 정책의 권한을 가진 옛 성공 요청은 재전달할 수 있다.

## 스키마와 값

schema는 null 또는 필드 정의 객체다. null이면 미정의 필드를 허용한다. 객체는 1-80개 정의를 가진다.
필드 이름도 content::valid_key 규칙을 사용한다. 필드 정의는 type·required·nullable만 받으며 세 필드가 모두 필요하다.
type은 string·integer·number·boolean·object·array다. 다른 type과 알 수 없는 설정은 422 invalid_schema다.
strict 스키마는 미정의 필드를 거절한다. required는 필드 존재, nullable은 null 값 허용을 뜻한다.
nullable이어도 required 필드를 생략할 수 없다. 스키마 사용 여부와 정의는 생성 후 고정한다.
스키마 JSON은 직렬화한 UTF8 최대 12,288바이트다.

행의 data는 JSON 객체다. 최상위 필드는 0-80개이며 필드 이름은 위 규칙이다.
직렬화한 UTF8는 최대 8,192바이트다. 객체/배열의 중첩은 루트부터 최대 16단계다.
문자열·boolean·null·배열·객체를 허용한다. 모든 중첩 숫자는 finite이며 절댓값이 9,007,199,254,740,991 이하다.
integer는 실제 JSON 정수여야 한다. 1.0은 integer가 아니다. number는 정수와 소수를 받는다.
데이터를 자동으로 자르거나 타입을 바꾸지 않는다. 검증 위반은 422 invalid_data다.
metadata는 data 밖에 둔다. data 안의 키는 행 ID·소유자·버전이나 실행 권한을 바꾸지 않는다.

## 행과 변경

행은 id·collection_id·owner_id·data·version·created_at·updated_at·deleted_at을 반환한다.
ID는 서버 UUID이며 owner_id는 생성 후 바꾸지 않는다. 행 버전은 1에서 시작한다.
관리자가 user 행을 만들면 같은 환경의 owner_id가 필요하다. shared는 owner_id:null 또는 생략이다.
게임 삽입의 user 소유자는 본인, shared 소유자는 null이다. 게임 입력의 owner_id는 null을 포함해 거절한다.
owner 정책에서 다른 소유자에게 접근하면 row_not_found다. none 쓰기는 forbidden이다.

삽입·전체 교체·부분 수정·삭제·복구를 제공한다. 새 변경에는 expected_collection_version이 필요하다.
삽입 외의 작업은 expected_version도 필요하다. 버전은 안전 정수 범위다. 최대 버전의 새 증가는 version_exhausted다.
전체 교체는 data 전체를 바꾼다. 부분 수정은 set·remove·increment를 받으며 생략한 필드를 유지한다.
set은 새 값 객체, remove는 필드 이름 배열, increment는 숫자 delta 객체다. 세 항목은 선택 사항이지만 하나 이상 실제 항목이 필요하다.
같은 필드를 두 항목에서 대상으로 삼거나 remove에서 중복하면 invalid_operation이다.
remove의 누락 optional 필드는 그대로 둔다. 최종 required 검증은 유지한다. 스키마는 수정 후 전체 data에 적용한다.
increment 대상은 존재하는 숫자여야 한다. 정수끼리는 정수의 안전 범위를 검사한다. 나머지 숫자는 IEEE754 덧셈 후 finite/범위를 검사한다.
integer 스키마에는 정수 delta와 결과만 허용한다. 누락·null·다른 타입·범위 초과는 invalid_data다.
삭제는 deleted_at·updated_at·증가한 버전을 기록한다. data와 최초 created_at은 보존한다.
관리자만 복구할 수 있다. 이미 활성인 복구 대상은 row_not_deleted·collection_not_archived로 거절한다.
복구는 deleted_at:null과 증가한 버전을 기록한다. 게임은 삭제한 행을 읽거나 새로 수정할 수 없다.
관리자 직접 조회는 삭제한 행도 반환한다. 새 복구/변경과 옛 성공 재전달은 구분한다.

## API

관리 경로 앞에는 /api/v1/admin/projects/{project}/{environment}/data를 붙인다.

- GET /collections: 활성 정의 요약·ID 순서 최대 50개·next_cursor다. cursor와 include_archived=true를 받는다. 요약은 schema를 제외한다.
- POST /collections: request_id·key·name·kind·read_access·write_access·schema·reason. 처음 201, 재전달 200이다.
- GET /collections/{id}: 과거 정의도 schema와 함께 반환한다. query는 받지 않는다.
- PUT /collections/{id}: request_id·expected_version·name·read_access·write_access·reason. key/kind/schema 입력은 거절한다.
- DELETE /collections/{id}: request_id·expected_version·reason·acknowledge:true로 삭제한다.
- POST /collections/{id}/restore: request_id·expected_version·reason으로 복구한다.
- GET /collections/{id}/rows: 활성 행·ID 순서 최대 10개·next_cursor다. cursor·owner_id·include_deleted=true를 받는다.
- GET /collections/{id}/rows/{row}: 단일 행이다. query는 받지 않는다.
- POST /collections/{id}/rows: request_id·expected_collection_version·owner_id 선택·data·reason. 처음 201, 재전달 200이다.
- PUT /collections/{id}/rows/{row}: request_id·expected_collection_version·expected_version·data·reason으로 교체한다.
- PATCH /collections/{id}/rows/{row}: request_id·expected_collection_version·expected_version·set/remove/increment·reason이다.
- DELETE /collections/{id}/rows/{row}: request_id·expected_collection_version·expected_version·reason·acknowledge:true다.
- POST /collections/{id}/rows/{row}/restore: request_id·expected_collection_version·expected_version·reason이다.
- POST /collections/{id}/rows/batch: request_id·expected_collection_version·reason·operations다.

batch operations는 1-10개다. action은 insert·replace·patch·delete·restore다.
insert는 owner_id 선택·data, replace는 row_id·expected_version·data를 받는다.
patch는 row_id·expected_version·set/remove/increment, delete는 row_id·expected_version·acknowledge:true다.
restore는 row_id·expected_version이다. 같은 기존 row_id를 한 batch에서 두 번 지정할 수 없다. UUID 별칭도 같은 행이다.
batch는 입력 순서대로 적용하고 {items:[행 결과]}를 반환한다. 한 오류·감사 오류·게임 활동 오류는 전체를 취소한다.
생성 UUID도 성공을 저장한 뒤 재전달한다. 실패한 배치의 부분 행과 성공 모양의 응답을 반환하지 않는다.

게임은 /api/v1/game/data 아래에서 활성 collection 목록/상세와 행 조회·삽입·교체·부분 수정·삭제·batch를 사용한다.
게임은 collection 수정·삭제·복구와 행 복구를 사용할 수 없다. reason 필드는 null도 거절한다.
owner 읽기 목록은 본인 행만 반환한다. 다른 owner_id 필터는 forbidden이다. shared에서 owner_id 필터는 invalid_query다.
게임 목록에는 include_archived/include_deleted를 허용하지 않는다. 숨긴 collection은 collection_not_found다.
조회·변경은 현재 권한을 먼저 확인한다. owner 쓰기에서는 batch의 기존 대상 소유자도 재전달보다 먼저 확인한다.
정책을 좁힌 뒤 다른 유저의 옛 쓰기를 재전달해 권한을 우회할 수 없다.

공통 query는 512바이트 이하이며 중복·알 수 없는 필드·빈 값·잘못된 percent/UTF8·잘못된 UUID를 거절한다.
관리자 사유는 공백 아닌 내용이 있으며 500바이트 이하다. 원문을 보존한다. 알 수 없는 입력과 잘못된 타입은 invalid_input이다.
request_id는 UUID를 확인하고 원문을 보존한다. 컬렉션·행 경로와 소유자·대상 UUID는 정규 소문자로 비교한다.
프로젝트 경로는 기존 scope 식별 규칙을 따른다.
새 명령은 guild_commands의 helper를 사용하고 명령 actor를 game-data:admin:{id} 또는 game-data:player:{id}로 구분한다.
감사의 실제 actor는 기존 admin:{id}·player:{id}다. 정규 입력은 operation·명시한 collection/row ID·입력 전체다.
현재 상태를 추정해 정규 입력에 넣지 않는다. 같은 ID의 다른 입력은 idempotency_conflict다.
현재 권한 확인 뒤 옛 성공을 반환하고, 이후 활성 여부·버전·한도·새 변경을 검사한다.
row/collection 버전 불일치는 각각 version_conflict·collection_version_conflict다. 없는 대상은 collection_not_found·row_not_found다.
관리자의 삭제한 새 대상은 collection_archived·row_deleted다. 게임 유저가 권한을 가진 삭제 행에 새 쓰기를 요청하면 row_deleted다.
다른 충돌은 collection_key_exists·collection_limit이다.
모든 변경·명령·감사는 기존 외부 Immediate 거래에서 확정한다. 중첩 거래·새 DB 연결·dispatch 재호출을 하지 않는다.
행 변경 감사 game_data.rows_written은 collection 대상과 request_id·행 ID/action/version 목록만 저장한다. data 전체는 감사에 복제하지 않는다.
게임 성공과 재전달은 기존 공통 활동 규칙을 따른다. 관리자 대행은 활동을 기록하지 않는다.

## 저장과 성능

DB17은 data_collections·data_rows만 추가한다. 기존 유저·진행·경제·콘텐츠·프로필과 성공 명령을 바꾸지 않는다.
컬렉션의 같은 환경 FK·정책 조합·버전/시각·JSON 객체/null·바이트 상한을 DB에서도 확인한다.
행은 collection의 같은 환경 FK와 owner의 같은 환경 FK를 가진다. owner null/필수와 kind의 대응은 API에서도 확인한다.
행 data는 JSON 객체·바이트 상한, 버전/시각을 DB에서 검사한다. 정책에 맞는 소유자와 스키마는 서버가 확인한다.
활성 collection key UNIQUE·활성 ID·row 활성 전체/소유자·과거 전체/소유자 커서 인덱스를 둔다.
목록은 유한 페이지와 인덱스 검색을 사용한다. 필드 검색이나 임의 SQL을 노출하지 않는다. 동적 테이블 DDL도 만들지 않는다.
WAL/FULL·3초·8슬롯·spawn_blocking·연결/준비문 캐시·16KiB 요청·no-store·Origin과 기존 응답은 유지한다.

## 콘솔과 검증

기존 메뉴 끝에 게임 데이터를 연결한다. 기존 색·레이아웃·CSS·Button을 재사용한다.
새 데이터 화면은 메뉴에서 선택할 때 불러온다. 기존 화면의 초기 JavaScript에 전체 데이터 화면을 포함하지 않는다.
컬렉션 목록/정의/생성/이름·정책 변경/삭제·복구와 행 목록·소유자 필터·JSON 생성/교체·삭제·복구·batch를 제공한다.
viewer는 읽기만 제공한다. 스키마와 JSON에는 기존 parseContentJson을 사용하고 최종 검증은 서버가 한다.
전체 교체와 부분 수정은 API에서 구분한다. batch JSON으로 patch·increment도 실행할 수 있다.
한 변경의 진행/불명 결과 동안 기존 전역 탐색 잠금을 사용한다. method·URL·직렬화한 body·UUID를 고정해 재시도한다.
성공 후 GET을 읽으며 이전 성공 응답을 현재 상태로 쓰지 않는다. scope/선택 변경과 unmount에서 요청을 정리한다.

100개 활성·이름 재사용/복구·51개 collection·11개 행·private/public·게임 owner 위조·원자 batch/중복 대상·CAS/동시 증감을 확인한다.
옛 성공/다른 입력·정책 축소·삭제/복구·버전 상한·감사/활동 취소·재오픈과 기존 업무의 독립성을 확인한다.
실제 HTTP·Chrome·실제 SQL 계획·기존 목록 전후 지연을 확인한다. SDK·전체 반응형·운영 혼합 부하는 미완료로 유지한다.`,filtered:!0,sourceHash:"441ebdaf292c31f4c95337268dc9fecfae545e33689b5dd10b884a15b1a8517f"},{id:"docs-specs-game-data-aggregates-md",title:"게임 데이터 Count/Any",path:"docs/specs/GAME_DATA_AGGREGATES.md",category:"기능 명세",status:"구현 범위별 참조",body:`# 게임 데이터 Count/Any

A04의 Count/Any는 필터에 맞는 전체 개수와 존재 여부를 반환한다. 기존 행 조회·저장·인덱스·UI 스타일은 유지한다.

## 입력과 결과

관리·게임 컬렉션의 기존 \`rows\` 경로 아래에 GET \`count\`와 GET \`any\`를 추가한다.
URL에는 기존 q JSON만 받는다. cursor는 빈 문자열도 거절한다. q의 타입·크기·필드·조건 검증을 재사용한다.
owner_id·include_deleted와 현재 읽기 권한을 먼저 적용한다. 게임 소유자 권한은 본인으로 강제한다.
where는 기존 all/any/not·비교·누락/null 규칙을 그대로 사용한다. 새 비교 연산자는 추가하지 않는다.
정렬·선택·페이지 크기는 입력 형식을 검사하되 집계값에는 적용하지 않는다. 인덱스 모드의 order_by 금지는 유지한다.
count는 \`{"count":정수}\`를 반환한다. any는 \`{"any":boolean}\`을 반환한다. 페이지 결과와 합산용 중간 값은 반환하지 않는다.
명시한 index_id는 현재 컬렉션의 ready 정의여야 한다. 생성 중이거나 삭제 중이면 index_not_ready다.

## 실행과 한도

- 한 GET의 기존 Deferred 거래에서 실행한다. 요청 안의 읽기는 같은 SQLite snapshot을 사용한다.
- where가 없으면 원본의 고정 owner/history B-tree에서 COUNT 또는 EXISTS를 실행한다. JSON과 인덱스 항목은 읽지 않는다.
- 조건이 있으면 원본 또는 명시한 ready 인덱스를 순서대로 읽고 기존 Rust 조건 평가기를 사용한다.
- 필터 집계는 최대 100,000행·원본 JSON 16MiB를 검사한다. SQL은 100,001개까지 제한하고 JSON은 한 행씩 해석한다.
- 조건이 있는 인덱스 경로는 기존 원본·항목 버전·소유자·삭제 상태·키 검증을 유지한다. owner/history 조건은 LIMIT보다 앞에 둔다.
- Any는 일치한 유효 행을 찾으면 즉시 true다. 전체 범위가 끝난 경우에만 false다.
- Count의 한도 초과와 Any의 미확정 한도 초과는 422 aggregate_too_broad다. 부분 개수나 false로 바꾸지 않는다.
- 집계 SQL과 필터 검사에는 2초 기한을 둔다. SQLite progress callback은 약 1,000 VM 명령마다 확인한다.
- 기한 초과는 503 aggregate_timeout이다. 모든 종료 경로에서 callback을 해제한다. 기존 연결 재사용과 다른 요청에 기한을 남기지 않는다.
- 기존 rusqlite 0.32.1의 hooks 기능만 켠다. 라이브러리·DB 버전과 외부 의존성은 추가하지 않는다.
- Count는 안전 정수 범위를 넘으면 실패한다. GET은 감사·명령·유저 활동·데이터를 변경하지 않는다.

## 콘솔과 완료 기준

기존 JSON 조회 영역에 개수 조회·존재 확인을 연결한다. 적용한 q 원문을 그대로 전송하고 페이지 cursor는 보내지 않는다.
컬렉션·필터 변경 시 이전 결과를 숨긴다. 쓰기 성공 뒤 현재 집계를 갱신한다. 기존 취소·중복 요청 방지·잠금을 재사용한다.
실행 중·실패·결과를 기존 화면 패턴으로 표시한다. 임의 시각 효과와 새 화면은 추가하지 않는다.

권한·전체 Count·Any 조기 성공/완전 false·조건 의미·인덱스 상태·입력·한도·callback 해제·원본 보존을 검사한다.
기존 조회·커서와 같은 입력의 성능을 대조한다. Chrome 환경 제약과 미검증 항목은 별도로 남긴다.
조건 prefix 최적화·스키마 변경·백업·SDK와 전체 A04는 후속 범위로 유지한다.

근거는 [조사 C15-C19](../../study/thebackend/01_CORE_FEATURES.md)다. 자체 계약이며 원본 SDK와 동작이 같다는 뜻은 아니다.`,filtered:!1,sourceHash:"516ef240dd21cf4125ee81e6a86aaf4a4cc5222cccfd8a5e25d15962924f2efc"},{id:"docs-specs-game-data-indexes-md",title:"관리형 데이터 인덱스",path:"docs/specs/GAME_DATA_INDEXES.md",category:"기능 명세",status:"구현 범위별 참조",body:"# 관리형 데이터 인덱스\n\n기능 우선 구현 지시에 따라 A04의 사용자 인덱스를 추가한다. 기존 컬렉션·행 API와 무인덱스 조회 계약은 유지한다.\n\n## 정의와 저장\n\n- DB18은 `data_indexes`와 `data_index_entries`를 추가한다. 컬렉션의 내부 `index_count`는 삭제가 끝나지 않은 정의 수다.\n- 컬렉션마다 인덱스 10개를 허용한다. 정의는 고정 스키마의 서로 다른 scalar 필드 1-4개를 사용한다.\n- string·integer·number·boolean만 허용한다. schemaless·object·array 필드는 거절한다. 정의의 key·name·fields는 변경하지 않는다.\n- 상태는 building·paused·ready·dropping·deleted다. 삭제 완료 전에는 슬롯을 점유한다. 삭제 기록은 보존한다.\n- `version`은 운영 명령의 변경 번호다. 배치 진행·ready 전환·오류 일시 정지는 번호를 올리지 않는다. 운영 명령은 상태도 검사한다.\n- 정렬은 missing < null < boolean < number < string이다. 숫자는 기존 안전 범위를 유지한다. 문자열은 UTF8 BLOB으로 비교한다.\n- 항목은 현재 소유자·행 버전·삭제 상태와 최대 4개 정렬 키를 보존한다. 원본과 항목의 컬렉션을 외래 키로 묶는다.\n- 활성 전체·활성 소유자·이력 전체·이력 소유자에 고정 B-tree를 사용한다. 사용자 정의마다 DDL을 실행하지 않는다.\n\n## 관리 API\n\n기준 경로는 `/api/v1/admin/projects/{project}/{environment}/data/collections/{collection}/indexes`다.\n\n- GET 목록은 `items`를 반환한다. 최대 10개 현재 정의만 표시한다. GET `/{id}`는 삭제 기록도 반환한다.\n- POST는 `request_id`, `expected_collection_version`, `key`, `name`, `fields`, `reason`을 받는다. 201로 building 정의를 반환한다.\n- POST `/{id}/pause`와 `/{id}/resume`은 `request_id`, `expected_collection_version`, `expected_version`, `reason`을 받는다.\n- DELETE `/{id}`는 같은 입력과 `acknowledge:true`를 받는다. dropping 전환 뒤 정리는 배치로 진행한다.\n- 기존 관리 권한과 `game-data:{actor}` 중복 요청 영역을 사용한다. 현재 권한 검사 뒤 옛 성공을 재전달한다.\n- 새 명령은 컬렉션·인덱스 CAS, 상태, 정원, 입력을 검사한다. 원본 행·운영 감사·명령 기록과 같은 거래 규칙을 따른다.\n- archived 컬렉션에서 생성과 재개를 거절한다. 일시 정지·삭제는 허용한다. 이미 진행 중인 구축은 계속한다.\n- 게임 GET 목록은 현재 읽기 권한을 확인하고 ready 정의의 id·key·fields·version만 반환한다. 작업 진행과 오류는 공개하지 않는다.\n\n## 점진 구축과 복구\n\n- 기존 단일 작업 루프가 그룹 작업 한 배치와 인덱스 작업 한 배치를 처리한다. 기존 8개 슬롯·WAL·FULL·캐시를 유지한다.\n- 구축은 ID 순서로 이력 포함 50행을 읽는다. 현재 값의 UPSERT와 진행 커서를 같은 Immediate 거래에서 확정한다.\n- building·paused·ready 정의는 모든 원본 쓰기에서 함께 갱신한다. 커서보다 작은 새 UUID와 일시 정지 중 변경도 누락하지 않는다.\n- 재시작은 저장한 커서부터 이어간다. busy는 상태를 유지한다. 다른 오류는 배치를 취소하고 별도 거래로 paused와 오류 코드를 기록한다.\n- dropping 오류는 상태와 last_error를 보존하고 자동 처리를 멈춘다. resume은 오류를 지우고 삭제를 이어간다. archived에서도 허용한다.\n- dropping은 항목 50개를 삭제한다. 항목이 없으면 deleted로 전환하고 슬롯을 해제한다.\n- 작업 순번으로 순환 선택한다. 각 배치 뒤 연결을 반환하고 종료 신호를 확인한다.\n\n## 인덱스 조회\n\n- 기존 `/rows/query`의 q에 `index_id`와 선택적인 `index_direction:asc|desc`를 추가한다.\n- 인덱스 모드에서는 `order_by`를 허용하지 않는다. 정의의 전체 필드 tuple과 행 ID를 같은 방향으로 정렬한다.\n- `index_direction`만 지정하면 거절한다. ready가 아닌 정의는 `index_not_ready`다. 다른 컬렉션 정의는 찾을 수 없다.\n- where·select·limit·owner_id·include_deleted는 기존 의미를 유지한다. 권한과 owner/history 범위는 SQL LIMIT보다 먼저 적용한다.\n- 고정 B-tree로 앵커 다음부터 읽는다. 조건은 기존 평가기로 검사한다. 이번 단위는 조건별 prefix 최적화를 추가하지 않는다.\n- 한 요청은 최대 1,000개·1MiB 원본을 검사한다. 예산이나 응답 한도에서 마지막 검사 항목으로 다음 커서를 만든다.\n- 조건에 맞는 행이 없는 페이지도 다음 커서를 반환할 수 있다. 다음 커서는 남은 후보를 뜻한다.\n- v2 형식은 `v2.hash.collectionVersion.indexVersion.rowUUID.rowVersion`이다. index ID·방향·주체·범위·조건은 hash에 묶는다.\n- 현재 앵커의 행·항목 버전과 범위를 검사한다. 조건 불일치 앵커도 허용한다. 변경한 앵커는 stale_cursor다.\n- 기존 무인덱스 RowQuery 직렬화와 v1 토큰을 바꾸지 않는다. projection은 마지막에 적용하고 편집은 전체 GET을 사용한다.\n\n## 완료 기준과 한계\n\n생성·권한·정원·CAS·재전달·원자 갱신·구축·정지·재개·재시작·삭제를 실행 검사한다. 기존 DB17 자료와 UI 흐름을 대조한다.\n실제 SQLite 정렬·seek 계획과 기존 무인덱스 지연을 같은 입력으로 비교한다. 빌드 성공을 UI·성능 검증으로 보고하지 않는다.\nCount/Any·스키마 변경·백업 복원·SDK와 운영 혼합 부하는 후속 A04 범위다.",filtered:!1,sourceHash:"b2acbd609da3c7008ad2d92aa139b2474fd4aa0e39d359b23867870873eefb3a"},{id:"docs-specs-game-data-index-prefix-md",title:"인덱스 선행 조건",path:"docs/specs/GAME_DATA_INDEX_PREFIX.md",category:"기능 명세",status:"구현 범위별 참조",body:`# 인덱스 선행 조건

기존 인덱스 조회와 Count/Any에서 필요한 키 구간을 바로 읽는다. 화면·API·DB18·커서 형식은 유지한다.

## 조건과 범위

루트 비교와 \`all\` 아래의 필수 비교만 사용한다. \`any\`·\`not\` 아래는 탐색하지 않는다.
인덱스 필드 순서대로 연속한 \`eq\`와 \`exists:false\`를 고정한다. \`eq:null\`과 누락은 구분한다.
첫 비고정 필드의 숫자·문자열 범위만 추가한다. 선행 필드에 조건이 없으면 후속 필드를 제한하지 않는다.
같은 필드에 여러 범위가 있으면 가장 강한 하한·상한을 사용한다. 같은 값이면 엄격한 비교를 우선한다.
\`ne\`·\`in\`·\`contains\`·\`exists:true\`와 나머지 조건은 기존 평가기로 검사한다. 원래 조건 전체도 계속 평가한다.

쓰기와 조회는 같은 키 인코딩을 사용한다. 누락·null·불리언·숫자·UTF8 BLOB 순서를 유지한다.
값은 SQL 매개변수로 전달한다. 열 이름과 인덱스 이름은 기존 고정 목록에서만 선택한다.

## 커서와 보호

기존 v2 fingerprint와 직렬화는 바꾸지 않는다. 앵커는 조건 제한 없이 기존 검증을 먼저 수행한다.
같은 범위의 현재 행이면 조건에 맞지 않는 과거 앵커도 계속 허용한다.
앵커의 고정 키 부분이 조건과 같으면 후속 키와 행 ID로 seek한다.
앵커가 정렬 방향에서 조건 구간보다 앞이면 구간 전체를 읽는다. 뒤이면 빈 결과를 반환한다.
역방향은 정렬과 seek 방향만 바꾼다.
앵커가 범위 안이면 ASC의 중복 하한과 DESC의 중복 상한을 제거한다. 원래 조건 전체는 계속 평가한다.
엄격한 경계와 같은 값의 앵커는 범위 앞이나 뒤로 분류한다. 빈 범위는 false 매개변수로 전달한다.
소유자·삭제 이력·프로젝트·환경·ready 상태·행 버전과 읽은 항목의 원본 검증을 유지한다.
조건 밖으로 밀려난 손상 항목과 누락 항목의 전역 무결성 검사는 제공하지 않는다.
조회와 집계의 기존 행·바이트·시간 한도, 연결 캐시·8슬롯·WAL/FULL을 유지한다.

## 완료 조건

복합 조건·null/누락·불리언·숫자·문자열·양방향·기존 앵커·소유자·이력의 결과를 검사한다.
기존 잔여 조건 검사는 같은 뜻의 단일 \`any\`로 감싸 한도와 빈 페이지 검사를 유지한다.
집계 앞의 큰 불일치 구간을 건너뛰는 실패를 먼저 재현한다.
먼 다음 페이지의 실제 SQLite VM 작업량으로 반복 탐색을 검사한다. 실행 계획 한 줄만으로 비용을 판단하지 않는다.
동일 자료의 전후 응답과 지연을 기록한다. 운영 성능 동등성은 별도 검증으로 남긴다.`,filtered:!0,sourceHash:"fa43791b23383468c28d73e210b8e53137b6b7da7bb416f1c4d767b1a03025b3"},{id:"docs-specs-game-data-query-md",title:"게임 데이터 필드 조회",path:"docs/specs/GAME_DATA_QUERY.md",category:"기능 명세",status:"구현 범위별 참조",body:`# 게임 데이터 필드 조회

관리자와 게임 유저는 컬렉션의 필드 조건·정렬·필드 선택을 사용한다.
DB17의 저장·기본 목록·단일 행 조회와 UI 스타일은 유지한다. 전체 A04와 사용자 인덱스 목표는 유지한다.

## 근거와 선택

[조사 C14-C19](../../study/thebackend/01_CORE_FEATURES.md)는 조건 조회·정렬·선택·사용자 인덱스의 책임을 구분한다.
일반 SQL을 노출하지 않는다. 새 JSON 쿼리는 서버가 다시 검사한다.
현재 인덱스는 컬렉션·소유자·ID를 지원한다. JSON 필드 인덱스의 효과를 주장하지 않는다.

세 가지 실행 방법을 비교했다.

| 방법 | 비용 | 결정 |
| --- | --- | --- |
| 기존 인덱스로 후보를 제한하고 Rust에서 조회 | 작은 컬렉션은 바로 사용한다. 후보 상한이 있다. | 이번 제공 단위 |
| 컬렉션별 expression index와 SQL 생성 | 조회 표현식·partial 조건 일치와 DDL 잠금·인덱스 수를 관리해야 한다. | 이번에 추가하지 않음 |
| 별도 인덱스 항목과 점진 구축 | 쓰기 동기화·복구·작업 상태가 필요하다. 대량 조회와 복합 인덱스로 확장할 수 있다. | 사용자 인덱스 단위에서 결정 |

SQLite expression index는 같은 표현식을 요구한다. parameterized JSON path의 인덱스 사용을 약속하지 않는다.
[Expression index](https://www.sqlite.org/expridx.html), [Partial index](https://www.sqlite.org/partialindex.html).
LIMIT는 반환 행만 제한한다. 새 후보 읽기는 고정한 scoped 인덱스를 사용하며 필드 필터를 SQL에 먼저 넣지 않는다.
[LIMIT](https://www.sqlite.org/lang_select.html#limitoffset), [INDEXED BY](https://www.sqlite.org/lang_indexedby.html).

## API와 입력

관리 경로는 \`/api/v1/admin/projects/{project}/{environment}/data/collections/{id}/rows/query\`다.
게임 경로는 \`/api/v1/game/data/collections/{id}/rows/query\`다. 둘 다 GET이다.
기존 단일 행 UUID 분기 앞에서 literal \`query\`를 처리한다. 기존 API wiring·DB 버전은 바꾸지 않는다.

URL query에는 필수 \`q\`와 선택 \`cursor\`만 받는다. q는 URL 인코딩한 JSON 객체다. \`q={}\`도 유효하다.
raw URL query는 최대 16,384바이트, 디코딩한 q는 최대 4,096바이트다.
중복·알 수 없는 URL 필드·빈 q·잘못된 percent·잘못된 UTF8는 422 invalid_query다.
percent와 \`+\`를 한 번만 디코딩한다. 잘못된 UTF8를 대체 문자로 고치지 않는다.
기존 GET 목록의 512바이트 query 계약은 그대로다.

q는 \`where\`, \`order_by\`, \`select\`, \`limit\`, \`owner_id\`, \`include_deleted\`만 받는다.
생략하거나 null인 where/order_by/select는 각각 조건 없음·ID 오름차순·모든 필드다. URL cursor를 생략하면 첫 페이지다.
limit는 실제 JSON 정수 1-10이며 기본값은 10이다. 1.0·null·범위 밖은 거절한다.
owner_id는 UUID 또는 null이다. null과 생략은 소유자 필터 없음이다. 형식만 검사하고 유저 실존은 검사하지 않는다.
없는 유저나 다른 환경의 UUID는 기존 목록처럼 빈 결과다. 반환 행은 항상 선택한 컬렉션·환경에 속한다.
include_deleted는 관리자만 boolean으로 지정한다. 기본값은 false다. 게임은 필드 존재 자체를 거절한다.
알 수 없는 q 필드·설정·잘못된 타입은 422 invalid_query다.

## 조건

필드 이름은 기존 valid_key의 최상위 키다. 중첩 경로·유저 닉네임 조인·임의 SQL은 받지 않는다.
고정 스키마에서는 정의한 필드만 조건·정렬·선택에 사용할 수 있다. schemaless도 같은 최상위 키 규칙을 사용한다.
where는 아래 세 논리 노드 또는 비교 노드 하나다. 노드의 키를 섞거나 알 수 없는 키를 넣지 않는다.

- \`{"all":[조건,...]}\`: 모든 조건을 만족한다.
- \`{"any":[조건,...]}\`: 한 조건 이상을 만족한다.
- \`{"not":조건}\`: 조건 결과를 반대로 바꾼다.
- \`{"field":"score","op":"gte","value":10}\`: 필드의 값을 비교한다.

all/any는 1-16개 자식을 받는다. 루트 where를 포함한 깊이는 최대 4다. 비교 노드는 전체 최대 16개다.
비교 노드는 field·op·value 세 키가 모두 필요하다.

| op | 입력 value | 의미 |
| --- | --- | --- |
| eq / ne | scalar 또는 null | 같은 JSON 타입의 값 비교. 숫자는 정수·소수의 수치로 비교 |
| gt / gte / lt / lte | 숫자 또는 문자열 | 같은 종류끼리 비교. 문자열은 대소문자를 구분하는 UTF8 순서 |
| in | scalar/null 1-20개 배열 | 항목 하나 이상과 eq가 같음 |
| contains | scalar 또는 null | 필드가 배열이면 같은 항목 하나 이상을 포함함 |
| exists | boolean | true는 필드 존재, false는 누락. null도 존재함 |

scalar는 문자열·boolean·유한한 안전 범위 숫자다. object/array를 비교값으로 사용하지 않는다.
숫자의 절댓값은 9,007,199,254,740,991 이하다. 정수·소수 비교는 안전 범위의 f64 수치로 한다.
문자열은 Rust 문자열 순서로 비교한다. locale 정렬·대소문자 변환·Unicode 정규화를 하지 않는다.
문자열 부분 검색은 제공하지 않는다. contains는 배열 항목 검색이다.

누락 필드는 eq/ne/범위/in/contains를 만족하지 않는다. eq:null은 명시한 null만 찾는다.
ne는 존재한 값에서 eq를 반대로 바꾼다. schemaless의 다른 타입은 eq가 false, ne가 true다.
범위는 숫자끼리 또는 문자열끼리만 비교한다. 다른 타입이면 false다.
고정 스키마는 비교값 타입도 검사한다. integer 필드의 1.0 비교값은 거절한다.
eq/ne/in의 null은 nullable 설정과 관계없이 유효하다. 저장 가능한 값으로 자동 변환하지 않는다.
object/array 스키마는 eq/ne/in의 null 또는 exists만 받는다. array는 contains도 받는다.
boolean 스키마는 eq/ne/in/exists만 받는다. 비교값 타입 오류는 invalid_query다.

## 정렬과 필드 선택

order_by는 \`{"field":"score","direction":"desc"}\` 형식이다. 두 키가 모두 필요하다.
field:null은 메타 ID 정렬이다. 문자열 field는 data 안의 필드다. direction은 asc 또는 desc다.
고정 스키마의 정렬 필드는 string/integer/number/boolean만 가능하다.
schemaless에서도 조건에 맞은 행의 object/array 정렬값은 거절한다. 부분 결과를 반환하지 않는다.

필드 정렬의 오름차순은 누락 < null < boolean < number < string이다.
boolean은 false < true, 숫자는 수치, 문자열은 UTF8 순서다.
동점이면 메타 ID를 같은 방향으로 비교한다. 내림차순은 이 전체 순서를 반대로 한다.
조건·정렬을 모두 적용한 뒤 페이지를 만든다. 페이지 안에서만 정렬하지 않는다.

select는 중복 없는 필드 이름 배열 0-80개다. 누락 필드를 null로 만들지 않고 생략한다.
빈 배열은 data:{}를 반환한다. 생략/null은 전체 data를 반환한다.
id·collection_id·owner_id·version·시각·deleted_at 메타 정보는 항상 유지한다.
조건과 정렬은 projection 전 전체 data로 평가한다. projection은 저장 데이터를 바꾸지 않는다.

## 권한과 작업 상한

기존 game_collection_read와 row 목록의 정책을 재사용한다. 관리 viewer도 읽을 수 있다.
게임은 삭제한 컬렉션을 숨긴다. none 읽기는 거절한다. owner 읽기는 본인 owner_id를 SQL에 강제한다.
owner 읽기 정책에서 다른 owner 필터는 403 forbidden이다. authenticated 읽기는 타인 owner 필터도 허용한다.
shared의 문자열 owner 필터는 422 invalid_query다.
관리자는 삭제한 컬렉션을 읽을 수 있다. include_deleted:true이면 행 이력도 읽는다.
소유자·삭제 조건은 후보 상한보다 먼저 적용한다. 필드 조건은 그 뒤다.

후보는 한 요청에서 최대 1,000개이며 저장된 data의 UTF8 합계는 최대 1,048,576바이트다.
상한 확인용 SQL은 같은 범위에서 최대 1,001개를 읽고 COUNT와 UTF8 바이트 합계를 구한다.
바이트는 length(CAST(data AS BLOB))로 구한다. JSON을 메모리 객체로 풀기 전에 두 상한을 확인한다.
초과하면 422 query_too_broad이며 부분 items나 cursor를 반환하지 않는다. 소유자 필터로 범위를 좁힐 수 있다.
상한 안이면 payload SQL도 같은 범위·순서·최대 1,001개를 읽는다. API의 한 Deferred 거래를 재사용한다.
작은 숫자가 많은 JSON의 메모리 확대도 이 바이트 예산으로 제한한다. 필드 선택으로 후보 바이트 예산을 줄이지 않는다.
사용자 인덱스·대량 조회가 완료됐다는 뜻은 아니다. 이 상한을 없앤 무제한 scan으로 대체하지 않는다.

새 SQL은 다음 고정 인덱스를 INDEXED BY로 요구한다. 요청에서 인덱스 이름을 받지 않는다.

- 활성 전체: data_row_active.
- 활성 소유자: data_row_active_owner.
- 이력 전체: 기존 UNIQUE(collection_id,id)의 sqlite_autoindex_data_rows_2.
- 이력 소유자: data_row_history_owner.

삭제 이력이 많아도 활성 조회에서 이력 인덱스를 고르지 않게 한다. 인덱스가 없으면 준비가 실패한다.
검사에서 실제 계획과 인덱스 존재를 확인한다. 새 DDL·의존성·Store 설정·기존 SQL을 추가하거나 바꾸지 않는다.

## 커서와 변경 중 조회

응답은 \`{items:[행],next_cursor:string|null}\`이다. items는 최대 limit개다.
cursor는 클라이언트가 해석하지 않는 문자열이다. 버전1·query hash·컬렉션 버전·anchor ID·anchor 행 버전을 담는다.
형식은 \`v1.<64자리 소문자 SHA256>.<collection version>.<UUID>.<row version>\`이며 최대 180바이트다.
query hash는 scope·컬렉션 ID·실제 actor와 정규화한 q를 묶는다. 기본값과 owner UUID를 정규화한다.
cursor는 별도 URL 필드여서 q의 4,096바이트 예산을 소비하지 않는다. q 안의 cursor는 알 수 없는 필드다.
cursor는 권한 증명이 아니다. 매 요청에서 현재 권한·owner 범위를 먼저 검사한다.

다른 조건·정렬·선택·limit·scope·actor의 cursor는 422 invalid_cursor다. 손상한 형식도 같은 오류다.
컬렉션 버전이나 anchor 버전이 바뀌거나 anchor가 현재 결과에서 사라지면 409 stale_cursor다.
anchor를 찾은 뒤 정렬 순서상 그 다음 행부터 반환한다. 긴 정렬값을 cursor에 복제하지 않는다.
페이지 간 snapshot은 유지하지 않는다. anchor 외 행의 삽입·이동·수정은 다음 페이지에 반영될 수 있다.
그 결과 행의 중복·누락도 가능하다. 클라이언트는 필요한 경우 첫 페이지를 다시 조회한다.
각 요청 안의 읽기는 기존 SQLite 거래의 일관성을 사용한다. [격리](https://www.sqlite.org/isolation.html).

## 콘솔과 완료 근거

기존 행 페이지 뒤·행 생성 앞에 독립 조회 폼을 추가한다. JSON textarea·적용/초기화·결과·페이지 버튼을 사용한다.
초안·적용 조건·query cursor를 기본 행 목록 상태와 분리한다. 입력할 때마다 요청하지 않는다.
scope/컬렉션 전환에서 초기화한다. 적용한 조회만 useRead로 요청하고 unmount·이전 응답을 정리한다.
기본 목록의 소유자·삭제 포함 조건을 바꾸면 적용한 필드 조회를 초기화한다. 초안은 유지할 수 있다.
검색 결과의 ID를 선택하면 기존 단일 행 GET으로 전체 data를 읽는다. projection을 편집 상태에 복사하지 않는다.
쓰기 성공·재전달 뒤 적용한 조회도 갱신한다. cursor 초기화와 reload가 중복 요청을 만들지 않게 한다.
불명 쓰기의 고정 명령·탐색 잠금은 유지한다. 조회는 execute나 request_id를 사용하지 않는다.
stale_cursor에는 첫 페이지로 돌아가는 조작을 제공한다. viewer도 조회하고 busy 중에는 조작을 막는다.

strict UTF8/숫자·논리 경계·누락/null·전역 정렬·긴 값·projection·cursor·owner·이력·1,000/1,001개를 검사한다.
게임 읽기의 활동·감사·명령 불변과 기존 기본 목록의 본문/SQL도 확인한다.
사용자 인덱스·복합 인덱스·점진 구축·Count/Any·백업·스키마 변경·SDK는 전체 목표에 남긴다.`,filtered:!0,sourceHash:"3bfccba21ed17140c55881b45408a355bb8252fddcca45696127dee70607b60e"},{id:"groups",title:"환경 그룹과 길드 공개 범위",path:"docs/specs/GROUPS.md",category:"기능 명세",status:"구현 범위별 참조",body:`# 환경 그룹과 길드 공개 범위

환경 그룹으로 유저와 길드의 소속을 관리한다. 기존 가입 방식·길드 역할·재화·정산·성공 재전달과 8슬롯 연결 재사용을 유지한다. 그룹별 랭킹 보드와 통합·삭제는 후속 계약으로 남긴다.

## 근거와 자체 계약

[원본 그룹](https://docs.backnd.com/guide/getting-started/how-to-use/group/)은 유저·길드·랭킹을 나누는 단위다. [원본 콘솔](https://docs.backnd.com/guide/console-guide/backnd-base/group/)의 이동 행렬은 그룹형 길드 멤버의 유저 이동 때 탈퇴하고 마스터 이동은 금지한다. 오픈형 길드 소속은 유저 이동 뒤에도 유지한다. SDK 설명은 이 구분을 생략해 실제 SDK 호환을 확정하지 않는다.

이 단계는 자체 API다. 환경당 기본 그룹을 포함해 최대 500개를 허용한다. 기본 그룹 이름은 문자열 \`NULL\`, ID는 \`00000000-0000-0000-0000-000000000000\`이다. JSON null을 이름으로 사용하지 않는다. 프로젝트·환경이 ID의 범위를 정한다. 새 이름은 영문·숫자·하이픈 1–100자다. 이름은 환경 안에서 대소문자를 구분하지 않는다. NULL 이름은 예약한다. 기본 그룹은 수정할 수 없다.

## DB12와 보존

groups에는 project_id·environment·id·name·name_key·revision·created_at을 저장한다. 복합 기본키는 project_id·environment·id다. player_groups에는 같은 범위·player_id·group_id·revision을 저장한다. 행이 없는 유저는 기본 그룹·버전 0이다. 다른 그룹으로 옮겼다가 돌아와도 행과 버전을 유지해 ABA를 막는다.

guild_group_affiliations에는 guild_id·project_id·environment·group_id·access를 저장한다. access는 public 또는 restricted다. 기존 길드는 기본 그룹·public으로 이전한다. 새 길드는 생성자의 현재 그룹에 귀속한다. 기존 요청과의 호환을 위해 생성 입력에서 access를 생략하면 public이다. 새 선택 필드는 없을 때 직렬화하지 않아 DB11 생성 명령의 정규 입력을 유지한다.

기존 유저·재화·활동·역할·가입 시각·명령·시즌·우편·점수는 바꾸지 않는다. 그룹 이전은 점수 초기화나 정산을 실행하지 않는다. 현재 보드는 환경 전체 보드이며 그룹별 보드로 다시 해석하지 않는다.

## 관리 API

모든 경로 앞에 \`/api/v1/admin/projects/{project}/{environment}\`를 붙인다. viewer는 읽고 owner·editor만 변경한다. 원인 없는 쿼리·알 수 없는 필드·다른 환경의 ID를 거절한다. 변경 사유는 공백을 제외한 글자를 포함하고 UTF-8 500바이트 이하다. 버전은 0–9007199254740991 정수다. 성공 명령은 기존 guild_commands의 admin 이름공간을 재사용한다. 업무·명령·감사는 기존 Immediate 거래에서 함께 확정한다.

- GET \`/groups\`: ID 오름차순·50개·next_cursor. 선택 쿼리는 cursor만 허용한다. 목록 행은 id·name·revision·created_at·is_default다.
- POST \`/groups\`: request_id·name·reason. 버전 1의 그룹을 생성하고 같은 목록 행을 201로 반환한다. 같은 성공 요청은 200으로 원래 결과를 반환한다.
- GET \`/groups/{group}\`: 목록 행과 player_count·guild_count를 반환한다. 인원 계산은 같은 환경만 포함한다. guild_count는 열린 길드만 센다.
- POST \`/groups/{group}\`: request_id·expected_revision·name·reason. 기본 그룹을 제외한 이름을 바꾸고 새 행을 반환한다. 같은 이름의 새 요청도 버전을 증가시킨다.
- GET \`/groups/players/{player}\`: player_id·group_id·revision.
- POST \`/groups/players/{player}\`: request_id·expected_revision·group_id·reason. 현재 소속을 옮기고 player_id·group_id·revision을 반환한다. 현재 그룹과 같으면 버전·멤버십·가입 요청을 바꾸지 않고 명령과 감사만 기록한다.

게임 GET \`/game/group\`은 본인 소속을 읽는다. 게임의 그룹 변경은 제공하지 않는다. 기존 인증·환경·점검·버전 제한과 no-store를 유지한다. 관리 대행은 유저 활동을 기록하지 않는다.

## 유저 이동

실제 소속 변경은 현재 player_groups 버전을 요구한다. restricted 길드의 현재 마스터라면 409 guild_master_cannot_move다. restricted 길드의 일반 멤버·부마스터는 탈퇴하고 해당 길드 버전을 증가시킨다. public 길드의 멤버·마스터는 소속과 가입 시각을 유지한다. 어느 경우든 대상 유저의 모든 pending 가입 요청을 취소하고 각 길드 버전을 증가시킨다. 대상 수는 기존 최대 10개를 사용한다. 변경 결과·취소·감사는 함께 확정한다.

같은 유저의 동시 이동은 한 버전만 성공한다. 옛 성공 재전달은 현재 소속·역할·대기 요청보다 먼저 원래 결과를 반환하며 다시 탈퇴·이동하지 않는다. 조회는 기존 소속을 덮어쓰지 않는다.

## 길드 공개 범위

admission의 open·approval은 즉시·승인 가입이다. access와 별개로 유지한다. 생성 입력에 선택 access를 추가한다. 길드 목록·상세에는 group_id·access를 포함한다. 관리자는 기존 환경 권한으로 전체를 조회한다.

게임의 restricted 길드는 같은 그룹에서만 조회·가입할 수 있다. 다른 그룹의 직접 ID 조회는 404 guild_not_found다. 목록은 SQL에서 공개 길드와 같은 그룹 길드를 선택한 뒤 50개 페이지를 만든다. 조회 후 행을 버리는 필터는 쓰지 않는다. apply와 approve가 실제 가입을 처리할 때 대상 유저의 현재 그룹을 확인한다. 관리자 대행도 가입 조건을 우회하지 않는다. 기존 pending 요청은 이동 시 취소된다.

기존 길드 commands에 action=open_access를 추가한다. 기대 길드 버전·마스터 또는 관리자 권한·관리 사유를 요구한다. restricted→public만 실제 변경한다. public의 새 요청은 버전·명령·감사를 정상 증가시킨다. public→restricted 변경은 제공하지 않는다. access는 일반 settings 편집 필드가 아니다. 길드 소속 그룹 이동은 후속 별도 명령으로 남긴다.

게임의 멤버·가입 요청·마스터 자격·재화·원장도 현재 공개 범위를 집행한다. 모든 성공 재전달은 인증과 환경 확인 뒤 현재 공개 범위보다 먼저 원래 결과를 반환한다. scoped_guild는 관리자와 성공 재전달에 계속 사용한다. 공개 범위 검사에 멤버십·역할·닫힘·버전 검사를 합치지 않는다.

## 기존 길드 순위의 공개 범위

게임 순위 목록도 hidden restricted 길드의 ID·점수를 노출하지 않는다. SQL에서 LIMIT 전에 같은 공개 조건을 적용한다. 숨긴 길드와 없는 길드의 순위 cursor는 422 invalid_cursor다. 그룹 이동으로 이전 cursor가 무효가 될 수 있다. 순위는 기존 환경 전체 순위를 유지하므로 숨긴 길드 사이에 숫자 공백이 생길 수 있다. 관리자 순위·정산과 보상·이미 정한 수신자는 바꾸지 않는다. 현재 그룹별 순위를 구현했다고 보고하지 않는다.

게임 me·새 refresh는 현재 길드의 공개 범위를 확인한다. refresh의 저장한 성공은 현재 소속을 해석하기 전에 재전달한다. 재화·설정의 내부 refresh_sources에는 유저 공개 필터를 넣지 않는다.

## 오류와 검증

없는 그룹은 404 group_not_found, 중복 이름은 409 group_name_exists, 500개 한계는 409 group_limit이다. 기본 수정은 409 default_group_immutable이다. 소속·그룹 버전 충돌은 409 revision_conflict, 잘못된 필드는 422다. 숨긴 길드 조회와 새 명령은 404 guild_not_found다. 관리자 대행 가입에서 대상 그룹이 다르면 409 guild_group_mismatch다.
`,filtered:!0,sourceHash:"7088cfbee0c59b259d1d3947a1efd045e47e80ea0a9c261975e9ec4b42403f12"},{id:"docs-specs-group-leaderboards-md",title:"그룹별 리더보드",path:"docs/specs/GROUP_LEADERBOARDS.md",category:"기능 명세",status:"구현 범위별 참조",body:`# 그룹별 리더보드

E03에서 같은 리더보드의 순위를 그룹마다 계산한다. 이번 단계는 개인 리더보드다. 길드 리더보드는 다음 단계에 연결한다.
기존 환경 전체 보드·점수·보상·명령은 유지한다. UI는 기존 리더보드 구조에 그룹 선택만 연결한다.

## 계약과 범위

생성 입력에 선택 \`division\` 불리언을 추가한다. 생략하거나 false면 기존 전체 보드다. true면 같은 보드·시즌 안에서 그룹별 순위를 계산한다.
전체 보드 응답은 기존 필드만 반환한다. 그룹 보드 응답에는 division:true가 있다. 생성 뒤 유형은 변경하지 않는다.
공식 자료의 그룹 구분·NULL 조회·NULL 보상 제외를 참고한다. 아래 이동·복구·종료 정책은 자체 계약이다.
근거: [생성](https://docs.backnd.com/guide/console-guide/backnd-base/rank/create/), [그룹 이동](https://docs.backnd.com/sdk-docs/backend/base/group/update/).

관리 그룹 경로는 \`/leaderboards/{board}/groups/{group}/seasons\`다. 기존 seasons 하위 경로와 입력을 그대로 사용한다.
그룹 보드에는 같은 환경의 그룹이 필요하다. 그룹 없이 접근하면 422 group_required다. 전체 보드에 그룹 경로를 붙이면 422 invalid_group_scope다.
시즌 기간과 보상 설정은 모든 그룹이 공유한다. 진행·순위·정산 버전·결과는 그룹마다 독립이다.
게임의 기존 경로는 호출 유저의 현재 그룹을 자동 사용한다. 다른 그룹을 고르는 게임 경로는 제공하지 않는다.
목록·커서·내 점수는 같은 그룹을 사용한다. 다른 그룹 커서는 422 invalid_cursor다. 조회 후 필터는 쓰지 않는다.

## 점수와 이동

관리자는 대상 유저의 현재 그룹 경로에서 점수를 쓴다. 새 쓰기의 그룹이 다르면 409 player_group_mismatch다.
점수는 작성한 그룹을 저장한다. 같은 유저·시즌의 버전은 그룹 이동 뒤에도 보존한다. 성공 재전달은 현재 소속 검사보다 먼저 처리한다.
진행 중인 그룹 보드 참여는 유저당 최대 10개다. 새 참여가 이를 넘으면 409 group_leaderboard_limit다.
실제 그룹 이동은 진행 중인 그룹 점수를 순위에서 제외한다. 최대 10개만 처리하며 이동·길드 처리·명령·감사와 함께 확정한다.
제외한 행은 버전을 보존한다. 새 그룹에서 기대 버전을 조회하고 새 점수를 쓰면 다시 참여한다. 제외한 점수를 자동 이전하거나 0으로 공개하지 않는다.
같은 그룹으로 보내는 요청은 점수를 바꾸지 않는다. 전체 보드·종료한 시즌·정산을 시작한 시즌은 이동으로 바꾸지 않는다.
종료한 점수의 그룹을 유지한다. 다른 그룹으로 이동해도 이미 발급한 개인 우편을 유지한다.

## 정산

그룹마다 최대 50명을 처리한다. 한 그룹의 정산 버전·커서·결과·우편·명령·감사를 함께 확정한다.
같은 요청의 재전달은 원래 결과를 반환한다. 그룹이 다른 같은 요청 ID는 다른 입력으로 거절한다.
NULL 그룹은 조회와 점수 쓰기를 허용하지만 정산과 보상은 409 default_group_not_rewarded로 거절한다.
첫 그룹 정산은 시즌 전체를 잠근다. 시계가 돌아가도 다른 그룹의 새 점수·이동 제외를 막는다.
실패하면 시즌 잠금도 취소한다. 다른 그룹의 정산은 독립 버전 0부터 시작한다.

## 저장과 검사

DB13에 보드 division·점수 group_id·결과 group_key와 그룹별 정산 진행을 추가한다.
기존 결과의 group_key는 빈 문자열이다. 그룹 결과는 실제 UUID를 사용한다. 유일성은 시즌·그룹·순위다.
그룹 점수의 오름·내림 인덱스와 유저별 참여 인덱스를 둔다. 기존 전체 순위 SQL·인덱스를 유지한다.
SQLite WAL·FULL·외래키·3초·8슬롯·캐시·실패 폐기를 유지한다. 의존성은 추가하지 않는다.
검사는 DB12 보존·권한·범위·입력·50개 페이지·커서·이동 ABA·재전달·감사 실패 취소·그룹별 보상·정산 경쟁을 포함한다.
Chrome에서 생성·그룹 선택·점수·정산을 확인한다. 같은 자료로 전체 순위 전후 지연과 그룹 SQL 계획을 확인한다.
길드 그룹 순위·그룹 통합/삭제·길드 이동·생성 자격·운영 혼합 부하와 전체 플랫폼은 미완료다.`,filtered:!0,sourceHash:"bd01ec770f0205943d97d4dd0955e4794fd55f768b7bd2b1166840322b7ba340"},{id:"docs-specs-group-lifecycle-md",title:"그룹 통합과 삭제",path:"docs/specs/GROUP_LIFECYCLE.md",category:"기능 명세",status:"구현 범위별 참조",body:`# 그룹 통합과 삭제

관리자가 그룹의 유저·열린 길드를 다른 그룹으로 통합한다. 빈 그룹은 삭제할 수 있다.
삭제한 그룹의 ID·과거 이름·순위·보상·명령은 보존한다. 통합은 배치마다 확정하며 서버가 재시작하면 이어간다.

## 근거와 선택

저장한 근거는 \`study/thebackend/02_OPERATIONS_INTEGRATIONS.md:244–252\`와 원본 콘솔의 그룹 폼이다.
원본은 빈 그룹만 직접 삭제하고, 인원이 있으면 통합 폼을 제공한다. NULL은 삭제·통합 원본으로 선택할 수 없다.
통합 폼은 유저와 길드의 이전·순위 처리 방식·확인을 요구한다. 원본의 전체 원자성·실패 복구는 검증하지 않았다.

자체 구현은 배치와 영속 작업 상태를 사용한다. 한 거래에 전체 그룹을 옮기면 큰 그룹이 SQLite의 쓰기를 오래 점유한다.
소속을 별칭으로 바꾸는 방식은 과거 순위의 ID와 조회 전체를 바꾸므로 사용하지 않는다.
현재 길드 이동의 \`recalculate\`·\`exclude\`를 재사용한다. 재화·메타 원본을 초기화하거나 원본 SDK의 모든 모드를 구현했다고 주장하지 않는다.

## 그룹 보존과 DB15

groups에 nullable \`archived_at\`·\`merged_into\`를 추가한다. 활성 행은 기존 다섯 JSON 필드를 그대로 반환한다.
삭제한 행만 archived_at을 추가한다. 통합으로 삭제한 행은 merged_into도 추가한다. 과거 ID를 대상 ID로 치환하지 않는다.
기본 그룹은 항상 활성 상태다. merged_into는 같은 프로젝트·환경의 다른 그룹을 참조한다.

groups의 기존 기본키와 참조를 보존하며 부모 테이블을 교체한다. 외래키는 거래 밖에서 끄고 거래 안에서 검사한다.
이전 성공·실패 뒤 외래키를 다시 켠다. 기존 행의 ID·이름·버전·시각과 소속·정산 FK를 보존한다.
활성 이름에만 대소문자 무시 유일 인덱스를 둔다. 삭제한 이름을 새 UUID의 그룹에 다시 사용할 수 있다.
활성 그룹은 기본 그룹을 포함해 최대 500개다. 활성 ID 페이지에도 부분 인덱스를 둔다. 과거 행은 이 한도에서 제외한다.

GET \`/groups\`는 활성 그룹만 반환한다. 선택 쿼리 \`include_archived=true\`는 과거 그룹도 포함한다.
cursor는 기존 UUID·50개 규칙이다. 다른 값·중복·알 수 없는 필드·잘못된 인코딩은 거절한다.
GET \`/groups/{id}\`는 삭제한 행도 반환한다. 현재 진행/일시 중지 작업의 원본·대상이면 \`active_merge_id\`도 반환한다.
과거 리더보드의 scoped_group은 존재와 환경만 확인한다. 활성 여부를 앞에서 검사해 옛 성공 재전달을 막지 않는다.
새 이름 변경·새 소속 대상·새 점수 등록·새 시즌 생성은 삭제한 그룹에 허용하지 않는다. 과거 조회·정산·성공 재전달은 허용한다.

## 삭제 API

모든 관리 경로 앞에는 \`/api/v1/admin/projects/{project}/{environment}\`를 붙인다.
POST \`/groups/{group}/delete\`는 request_id·expected_revision·reason·acknowledge:true를 요구한다.
기존 UUID·사유 500바이트·안전한 정수 규칙과 owner/editor 권한을 적용한다. viewer는 읽기만 허용한다.
옛 성공을 먼저 반환한다. 새 요청은 활성·기본 그룹 여부·버전·진행 중인 통합·인원을 검사한다.
유저나 열린 길드가 있으면 409 \`group_not_empty\`다. 닫힌 길드의 소속 행은 과거 참조로 유지한다.
버전을 한 번 올리고 archived_at을 기록한다. 행을 물리 삭제하지 않는다. 명령·\`groups.deleted\` 감사와 함께 확정한다.
없는 그룹은 404 group_not_found, 삭제한 새 대상은 409 group_archived다. 기본 그룹은 기존 default_group_immutable이다.
acknowledge가 true가 아니면 422 confirmation_required다. 이미 삭제한 그룹에 다른 새 삭제 요청을 보내면 group_archived다.

## 통합 시작과 제어

POST \`/groups/{source}/merge\` 입력은 다음 필드다.

- request_id·expected_revision·reason·acknowledge:true.
- target_group_id·expected_target_revision.
- leaderboard_policy: recalculate 또는 exclude.

현재 그룹을 정규 입력에 추정해서 넣지 않는다. 정규 입력은 operation·명시한 source/job ID·전체 입력이다.
모든 제어는 guild_commands의 기존 admin 이름공간을 재사용한다. 성공 재전달은 현재 상태·버전·작업 잠금보다 먼저 처리한다.
처음 시작은 201, 성공 재전달은 200이다. 같은 요청 ID의 다른 입력은 기존 idempotency_conflict다.

원본·대상은 같은 환경의 서로 다른 활성 그룹이어야 한다. 원본 NULL은 거절하며 대상 NULL은 허용한다.
원본·대상의 기대 버전을 확인한다. 시작과 종료에 각각 버전을 올리므로 두 버전에 안전한 정수 여유 2가 필요하다.
한 환경에는 running/paused 통합 작업 한 개만 허용한다. 다른 프로젝트·환경은 독립이다.
시작은 두 그룹 버전 증가·작업 저장·명령·groups.merge_started 감사를 같은 거래에 기록한다.

GET \`/groups/merges\`는 ID 순서 50개·next_cursor다. GET \`/groups/merges/{job}\`는 작업 하나를 반환한다.
작업은 id·source_group_id·target_group_id·leaderboard_policy·state·phase·revision·batch_revision을 가진다.
진행 값은 processed_player_count·processed_guild_count·started_at·updated_at_ms·finished_at·last_error다.
state는 running/paused/done/cancelled다. phase는 guilds/players/done이다. started_at과 finished_at은 초다.
이 값은 실제 시각보다 뒤일 수 있다. 표시용 시작/종료 시각과 구분한다. 과거 작업 조회와 목록은 환경 권한을 확인한다.

revision은 시작·중지·재개·완료·취소에서 증가하는 제어 버전이다. batch_revision은 성공한 배치마다 증가한다.
진행 배치가 취소 버튼의 기대 제어 버전을 매번 무효로 만들지 않는다. 두 버전 모두 안전한 정수 범위를 지킨다.
running은 제어 버전 상한보다 2 작고, paused는 1 작아야 한다. 재개는 중지와 취소에 필요한 두 증가를 예약한다.
POST \`/groups/merges/{job}/resume\`는 request_id·expected_revision·reason을 받는다. paused만 running으로 바꾼다.
POST \`/groups/merges/{job}/cancel\`은 같은 필드와 acknowledge:true를 받는다. running/paused만 취소한다.
취소는 이미 확정한 이동을 되돌리지 않는다. 원본을 삭제하지 않고 두 활성 그룹의 잠금을 풀며 버전을 한 번 올린다.
정상 완료도 두 그룹 버전을 한 번 올리며 원본만 archived_at·merged_into로 삭제한다. 대상은 활성 상태를 유지한다.
끝난 작업의 새 제어는 409 merge_finished, 잘못된 재개 상태는 409 invalid_merge_state다.

## 배치와 복구

작업은 하나의 started_at을 모든 점수 이동에 사용한다. 배치 사이의 시즌 종료가 서로 다른 대상 집합을 만들지 않는다.
guilds 단계는 소속 ID 순서로 최대 50개 참조를 읽는다. 닫힌 길드는 건너뛰되 커서를 전진한다.
한 배치는 열린 길드 하나만 옮긴다. 공개 길드는 소속만 옮긴다. 전용 길드는 최대 100명 멤버를 함께 옮긴다.
기존 길드 이동의 마스터·멤버십·역할·시각·활동·재화 보존과 pending 한도/취소 규칙을 재사용한다.
끝까지 검사하면 players 단계로 바꾼다. 남아 있는 원본 유저를 ID 순서로 한 번에 최대 50명 옮긴다.
공개 길드 소속과 역할은 유지한다. 전용 길드 멤버가 이 단계에 남아 있으면 불일치로 전체 배치를 취소한다.
각 유저의 pending 최대 10개와 활성 개인 점수 최대 10개를 처리한다. 유저의 소속 버전을 올리고 기본 행도 보존한다.
닫힌 길드의 과거 소속·종료 점수·원본 결과·수신자·발급한 우편은 이동하거나 삭제하지 않는다.

한 배치의 소속·점수·버전·요청 취소·카운터·커서·감사를 Immediate 거래로 확정한다. 실패한 배치는 모두 취소한다.
이미 성공한 배치는 되돌리지 않는다. 영속 커서와 batch_revision으로 재시작·동시 실행의 중복 이동을 막는다.
업무 오류는 별도 거래에서 paused와 last_error를 기록한다. 운영자는 원인을 고친 뒤 재개하거나 부분 결과를 유지하며 취소한다.
가입 요청 취소/거절은 통합 중에도 허용한다. pending만 줄이며 기존 권한·버전·ABA 검사를 유지한다.
paused에서는 관리자만 남아 있는 원본 길드의 update/open_access를 실행할 수 있다. 원본·소속 자료를 고치는 경로이며 게임의 변경은 계속 막는다.
이 수리는 기존 점수 자동 반영과 길드 버전·감사를 따른다. 점수 원본과 가입 요청 오류를 고친 뒤 같은 작업을 재개할 수 있다.
고칠 수 없는 버전 소진은 부분 결과를 유지하는 취소로 잠금을 해제한다. 완료나 전체 롤백으로 표시하지 않는다.
DB 잠금이나 Store의 server_busy는 작업을 중지시키지 않는 재시도 조건이다. 실패한 Store 연결의 폐기 규칙은 유지한다.

작업이 없으면 500ms, 진행 뒤 25ms, 실행 오류 뒤 1초를 기다린다. running 작업은 updated_at_ms·ID 순서로 선택한다.
외부 서비스·새 의존성·범용 작업 프레임워크를 추가하지 않는다. Tokio의 기존 time 기능만 명시할 수 있다.

## 통합 중의 제한

원본과 대상의 새로운 소속·이름·삭제·통합·길드 생성/변경·재화 변경·그룹 점수 변경을 막는다. 오류는 409 group_merge_pending이다.
위에서 정한 pending 취소/거절과 paused 관리자 수리만 예외다.
검사는 각 기능의 저장한 성공 확인 뒤에 둔다. raw 그룹 해석·scoped_guild·일반 dispatch에는 무조건 잠금을 넣지 않는다.
길드 명령은 길드·실제 game actor·정규화한 대상 유저의 그룹을 확인한다. 관리자 대행도 대상 유저를 우회하지 않는다.
공개 길드 C의 disband/close는 활성 멤버의 그룹도 확인한다. transfer_master는 실제 이전 마스터와 후보를 함께 확인한다.
관리자 기부도 실제 기부 유저의 그룹을 확인한다. 다른 C의 정상 가입으로 A/B의 pending만 취소되는 일은 허용한다.
다른 그룹 C의 일반 플레이는 유지한다. 배치마다 확정한 공개 길드 소속·pending 수와 관리용 진행을 읽을 수 있다.
원본/대상의 그룹별 순위 조회는 통합이 끝날 때까지 막는다. 게임 me는 본인 길드의 실제 그룹도 확인한다.
전체 보드·콘텐츠·진행·지갑·우편·친구·새 계정의 독립 경로는 유지한다. 원본이 될 수 없는 기본 그룹의 새 계정도 허용한다.
통합 자체는 유저 활동을 기록하지 않는다.

어느 그룹의 첫 정산도 시즌 전체를 고정한다. 따라서 환경의 NEW division 정산 시작을 통합 중에는 막는다.
부모가 이미 고정된 시즌의 계속 정산은 허용한다. 파티션 버전만 보고 부모 고정을 추정하지 않는다.
이 제한은 성공 재전달 뒤에 검사한다. 전체 보드 정산은 유지하므로 기존 길드 정산 잠금을 해결할 수 있다.

## 관리 화면과 검증

기존 Groups.tsx의 상세에 삭제·통합 입력을 연결한다. 정책은 명시해서 선택하고 사유와 확인을 받는다.
작업은 목록/상세·옮긴 유저/길드 수·중지 이유·재개·부분 결과를 유지하는 취소를 표시한다. 진행은 읽기 요청으로 갱신한다.
한 제어 요청의 진행/불명 결과만 기존 전역 탐색 잠금을 사용한다. 서버 작업이 진행된다는 이유로 콘솔 전체를 잠그지 않는다.
같은 URL·직렬화한 입력·UUID를 보존해 재시도한다. 성공 뒤에는 GET으로 현재 상태를 읽는다. polling은 중복 요청과 unmount 자원을 정리한다.
기존 개인/길드 순위 선택은 include_archived=true로 과거 그룹을 제공하고 이름에 삭제 상태를 구분한다.
삭제한 그룹은 새 점수/시즌 입력을 막되 과거 조회와 정산은 유지한다. 기존 색·배치·CSS·컴포넌트를 재사용한다.

100명 전용/공개·50+1 유저·닫힌 참조·pending/점수 한도·시즌 경계·동시 실행·취소·pause/resume·감사 실패를 확인한다.
게임/관리 간접 변경과 부모 정산 고정의 차단도 확인한다. 실제 HTTP·Chrome·프로세스 종료 뒤 재개·SQL 계획·전후 지연을 실행한다.
운영 혼합 부하·다중 서버·전체 반응형·기기 SDK와 전체 E03·플랫폼은 계속 미완료다.`,filtered:!0,sourceHash:"aced314f6c0d63766db69b28fc4d48922fbc90a5fbf207747e55b914278fcf2a"},{id:"guilds",title:"길드 생성·가입과 역할",path:"docs/specs/GUILDS.md",category:"기능 명세",status:"구현 범위별 참조",body:"# 길드 생성·가입과 역할\n\nTODO E03의 길드 생성·가입·승인·탈퇴·역할을 Rust API와 React 콘솔에 연결한다.\n[기존 조사 C31·C32](../../study/thebackend/01_CORE_FEATURES.md#c31-c32-길드)의 계약을 참고한 자체 API다. 원본 SDK 호환은 제공 목표가 아니다.\n기능 우선 UI를 유지한다. 재화·기부·정산 잠금·비활성 마스터 교체·그룹·가입 자격의 게임 규칙은 다음 길드 단계로 유지한다.\n이 문서의 완료가 전체 길드·E03·플랫폼의 완료를 뜻하지 않는다.\n\n## 길드와 참여 상태\n\n길드는 환경에 속하며 `id`, `name`, `country`, `admission`, `capacity`, `metadata`, `revision`, `created_at`, `closed_at`을 가진다.\n조회에는 `master_id`, `member_count`, `pending_count`도 포함한다. 최초 버전은 1이다.\n이름은 trim 뒤 2–16자이며 ASCII 영문·숫자·한글 완성형을 허용한다. 숫자로 시작하지 않는다.\n활성 길드의 이름은 환경 안에서 ASCII 대소문자와 관계없이 유일하다. 닫힌 길드의 이름은 재사용할 수 있다.\n국가 코드는 ASCII 영문 두 글자이며 대문자로 저장한다. 외부 국가 목록 검증을 의미하지 않는다.\n가입 방식은 `open` 또는 `approval`이다. 정원은 정수 1 이상 100 이하다.\n메타 정보는 JSON 객체·직렬화 4,096바이트·중첩 8단계 이하다. 숫자의 절댓값은 9,007,199,254,740,991 이하다.\n\n참여 행은 길드·유저를 키로 가지며 `state=none|pending|member`, `role`, `since_at`을 저장한다.\nmember의 역할은 `master|deputy|member`다. 다른 상태의 역할은 NULL이다.\n응답의 참여 행은 `{player_id,state,role,since_at}`이다. 참여 식별자로 다른 길드의 유저를 조작하지 않는다.\n같은 유저는 현재 길드 한 개에만 속한다. 활성 길드는 정확히 마스터 한 명을 유지한다.\n참여 행과 닫힌 길드 행을 삭제하지 않는다. 모든 상태 변경은 길드 버전을 증가시킨다.\n옛 수락이 취소·재신청이나 탈퇴·재가입에 적용되지 않도록 모든 새 명령은 현재 `expected_revision`을 요구한다.\n\n## 가입과 정원\n\n생성자는 자동으로 첫 마스터가 된다. 이미 다른 길드의 멤버이면 생성·가입을 거부한다.\n한 유저의 대기 요청은 최대 10개, 길드의 대기 요청은 최대 100개다. 정원 수치는 자체 보호 정책이다.\nopen 가입은 즉시 member가 된다. approval 가입은 pending이며 마스터·부 마스터가 승인하거나 거절한다.\n대기 요청은 자리를 예약하지 않는다. 새 요청과 실제 가입 때 정원·현재 소속을 다시 검사한다.\n같은 길드에 이미 대기 요청이 있으면 `409 application_exists`다. 즉시 가입 방식으로 바꿔도 기존 요청을 자동 승인하지 않는다.\n가입을 확정하면 해당 유저의 다른 대기 요청을 같은 거래에서 모두 none으로 바꾼다. 영향을 받은 다른 길드의 버전도 증가시킨다.\n그 뒤 다른 길드에서 옛 요청을 승인하거나, 과거 성공을 재전달해도 가입을 복구하지 않는다.\n\n정원을 현재 멤버 수보다 줄이면 `409 capacity_below_members`다. 꽉 찬 길드는 `409 guild_full`이다.\n이미 소속이 있으면 `409 already_in_guild`, 요청함이 찼으면 `409 application_limit`이다.\n\n## 명령과 권한\n\n게임은 인증한 유저가 행위자다. 관리자 owner·editor는 사유를 기록하고 대신 처리한다. viewer는 조회만 가능하다.\n생성은 `request_id`, `name`, `country`, `admission`, `capacity`, `metadata`를 받는다.\n관리자 생성은 `creator_id`, 공백이 아닌 500바이트 이하 `reason`을 추가한다. 게임은 이 두 필드를 받지 않는다.\n\n일반 명령은 `request_id`, `expected_revision`, `action`과 아래 지정 필드만 받는다.\n관리자 명령은 `reason`이 필요하다. 게임은 `reason`을 받지 않는다.\n\n| action | 추가 입력 | 게임 권한과 동작 |\n| --- | --- | --- |\n| `apply` | 관리자는 target_player_id | 본인이 요청·즉시 가입 |\n| `cancel` | 관리자는 target_player_id | 본인의 pending 취소 |\n| `approve` | target_player_id | master·deputy가 pending 승인 |\n| `reject` | target_player_id | master·deputy가 pending 거절 |\n| `leave` | 관리자는 target_player_id | 본인이 탈퇴 |\n| `kick` | target_player_id | master는 deputy·member, deputy는 member만 강퇴. 본인과 master는 강퇴 불가 |\n| `set_role` | target_player_id, role | master가 deputy·member 역할 지정. master의 역할은 transfer로만 변경 |\n| `transfer` | target_player_id | master가 현재 다른 멤버에게 위임. 이전 master는 member가 됨 |\n| `update` | settings | master가 프로필·가입 방식·정원·메타 변경 |\n| `disband` | 없음 | master가 길드를 닫고 모든 참여 상태를 none으로 변경 |\n\n관리자는 역할 권한을 대신할 수 있으나 멤버·요청 상태·정원·마스터 불변식은 유지한다.\n`settings`는 생성의 name·country·admission·capacity·metadata 전체 객체다. 작업과 무관한 필드는 422다.\n게임의 apply·cancel·leave는 target_player_id를 받지 않는다. 다른 유저를 본인 행위자로 위조할 수 없다.\n\n마스터가 다른 멤버를 두고 탈퇴하면 `409 master_transfer_required`다. 혼자 탈퇴하면 길드를 닫는다.\n위임할 대상은 같은 길드의 현재 멤버여야 한다. 자신에게 위임하면 `409 already_master`다.\n없는 대기 요청은 `409 application_not_found`, 없는 멤버는 `409 guild_member_not_found`다.\n상태·역할이 맞지 않는 변경은 `409 invalid_guild_state`, 게임 역할 권한 부족은 `403 guild_forbidden`이다.\n닫힌 길드의 새 명령은 `409 guild_closed`다. 닫을 때 멤버 최대 100명·대기 요청 최대 100개만 변경한다.\n\n## 재전달과 거래\n\n모든 UUID를 정규화하며 다른 환경의 유저·길드는 404다. 숫자 버전은 0 이상 안전 정수 이하다.\n새 기대 버전이 다르면 `409 revision_conflict`다. 증가할 수 없는 버전은 `409 version_exhausted`다.\n길드의 직접 변경과 다른 길드의 요청 무효화는 같은 즉시 거래에서 처리한다.\n길드·참여·명령 결과·감사는 함께 성공하거나 취소된다. 오류는 성공 결과로 저장하지 않는다.\n\n성공 명령은 환경·행위자·UUID로 보존한다. 게임·관리자 행위자 이름 공간은 구분한다.\n같은 UUID와 작업·대상·입력은 원래 결과를 반환한다. 다른 입력은 `409 idempotency_conflict`다.\n인증·환경 제한·관리자 역할·유저 귀속은 재전달에도 먼저 검사한다.\n그 뒤 성공 결과를 현재 길드·멤버·마스터 역할·버전보다 먼저 확인한다. 위임·탈퇴·해체 뒤에도 원래 성공을 조회할 수 있다.\n이는 과거 역할을 다시 부여하는 권한이 아니다. 새 명령에는 현재 역할을 검사한다.\n길드 생성 ID는 재전달 확인 뒤 생성한다. 최초 성공은 201, 생성 재전달은 200이며 본문은 같다.\n생성·일반 명령 본문은 `{guild: Guild, participant: Participant|null}`이다. 단순 설정·해체의 participant는 null이다.\n\n## HTTP와 조회\n\n관리 prefix는 `/api/v1/admin/projects/{project}/{environment}/guilds`다.\n\n| 경로 | 결과·입력 |\n| --- | --- |\n| GET / | 활성 길드 목록. cursor·name·country 선택. name은 정확한 이름, country는 두 글자 |\n| POST / | 위 생성 입력 |\n| GET /players/{player} | 현재 소속·대기 요청. 아래 PlayerState |\n| GET /{guild} | 닫힌 상태도 포함한 Guild |\n| GET /{guild}/members | member 참여 목록, cursor 선택 |\n| GET /{guild}/applications | pending 참여 목록, cursor 선택 |\n| POST /{guild}/commands | 위 일반 명령 |\n\n게임은 같은 `/api/v1/game/guilds` 목록·생성·상세·members·commands를 사용한다.\n게임의 `GET /me`는 본인의 PlayerState다. 게임 applications 목록은 해당 길드의 master·deputy만 조회한다.\n공개 목록·상세·member는 인증한 같은 환경의 유저가 읽는다. 게임은 임의 유저 PlayerState를 조회하지 못한다.\nPlayerState는 `{membership:{guild_id,role,since_at}|null, applications:[{guild_id,since_at}]}`다.\n\n모든 목록은 UUID 오름차순·최대 50개·`{items,next_cursor}`다. PlayerState의 대기 목록은 최대 10개다.\n길드 목록에는 메타 본문을 넣지 않는다. Guild 요약의 metadata를 생략해 50개의 큰 본문 전송을 막는다.\n상세에는 metadata를 포함한다. 참여 목록은 한 번의 인덱스 조회를 사용한다.\n알 수 없는·중복·잘못된 쿼리는 422다. 조회는 no-store이며 기존 인증·점검·최소 버전 제한을 따른다.\n\n## 콘솔과 검증\n\n기존 스타일의 길드 메뉴에서 목록·생성·상세·설정·멤버·가입 요청과 유저 상태를 연결한다.\n명령은 조회한 버전을 사용한다. 불명확한 결과에는 같은 경로·UUID·입력을 보존하고 재시도한다.\n처리 중과 결과 미확인에는 기존 메뉴·프로젝트·환경·로그아웃 잠금을 재사용한다.\n성공 본문이 과거 결과일 수 있으므로 GET으로 현재 길드·목록·유저 상태를 다시 조회한다.\n\n검사는 환경·역할·단일 소속·마지막 정원·교차 길드 승인·요청 무효화·옛 명령·위임·탈퇴·해체·감사 취소를 포함한다.",filtered:!0,sourceHash:"9160347aa4dc44ce1615caa2d9271b14f2c1eec0d6cfa9868621f9cc091a08fd"},{id:"docs-specs-guild-activity-md",title:"길드 활동과 비활성 마스터 교체",path:"docs/specs/GUILD_ACTIVITY.md",category:"기능 명세",status:"구현 범위별 참조",body:`# 길드 활동과 비활성 마스터 교체

서버가 확인한 활동과 마스터 역할 시작 시각으로 교체 자격을 판단한다. 기존 길드·정산·지갑·8슬롯 연결 재사용을 유지한다.
[원본 ClaimGuildMaster](https://docs.backnd.com/sdk-docs/backend/base/guild/guild-master/claim-master/)는 현재 멤버의 신청과 1–365일 설정을 제공한다.
이 API는 자체 계약이다. 원본의 과거 로그인 기록 누락 처리와 응답 형식을 그대로 복제하지 않는다.

## 활동과 역할 시각

DB11에 player_activity·guild_activity_policies·guild_master_terms를 추가한다. DB10의 자료와 저장한 명령은 보존한다.
기존 유저의 생성 시각·세션 만료·감사 기록으로 활동을 추정하거나 채우지 않는다. 행이 없으면 활동은 미확인이다.
새 게스트 생성, 유효한 게임 세션 발급, 인증한 게임의 성공한 변경 요청을 활동으로 기록한다.
성공한 변경에는 세션 갱신·로그아웃·성공 요청의 재전달도 포함한다. 관리자 대행과 GET은 활동으로 기록하지 않는다.
활동과 업무 변경은 기존 Immediate 거래에서 함께 성공하거나 취소된다. 실패한 업무는 새 활동을 남기지 않는다.
시각은 서버 UTC 초다. 기존 값보다 큰 시각만 반영한다. 같은 초의 반복 요청과 시계 역행은 값을 줄이지 않는다.

게임 GET \`/game/activity\`는 \`{player_id,last_active_at}\`를 읽는다. 기록이 없으면 last_active_at은 null이다.
게임 POST \`/game/activity\`는 쿼리 없이 정확히 \`{}\`만 받는다. 현재 서버 활동을 기록하고 같은 응답을 반환한다.
클라이언트 시각·유저 ID·관리자 대행 입력은 받지 않는다. 기존 인증·환경·점검·버전 제한을 따른다.
새 heartbeat 외의 인증한 변경은 공통 성공 지점에서 기록한다. heartbeat는 한 번 기록한 값을 응답한다.

새 길드 생성과 모든 실제 마스터 위임·교체에서 guild_master_terms를 기록한다.
시작 시각도 기존 값보다 줄이지 않는다. 멤버의 기존 since_at은 가입 시각이므로 바꾸지 않는다.
관리자 대행 교체는 유저의 활동을 위조하지 않는다. 새 역할 시작 시각으로 즉시 재교체를 막는다.

## 환경 정책

관리 GET/POST \`/admin/projects/{project}/{environment}/guilds/policy\`를 제공한다. viewer는 읽고 owner·editor만 변경한다.
게임 GET \`/game/guilds/policy\`는 같은 환경 정책을 읽는다. 게임 정책 변경은 제공하지 않는다.
정책은 \`{revision,inactive_master_days}\`다. 최초 버전은 0, 기본값 null은 자동 교체 중지다.
변경 입력은 request_id·expected_revision·inactive_master_days·reason이다.
기간은 null 또는 정수 1–365다. 사유는 공백이 아닌 UTF-8 500바이트 이하다. 알 수 없는 필드를 거절한다.
각 성공한 새 정책 요청은 버전을 증가시킨다. 활성·중지·재활성의 옛 버전을 다시 사용하지 않는다.
정책·성공 결과·감사를 함께 확정한다. 성공 재전달은 현재 버전보다 먼저 원래 결과를 반환한다.

## 조회와 교체

관리 GET \`/guilds/{guild}/master-claim\`은 마스터 상태를 읽는다. 신청자를 정하지 않았으므로 교체 가능 여부는 false다.
관리 GET \`/guilds/{guild}/master-claim/{claimant}\`은 같은 환경의 현재 멤버 자격을 읽는다.
게임 GET \`/game/guilds/{guild}/master-claim\`은 인증한 현재 멤버 본인의 자격을 읽는다.
다른 환경과 현재 멤버가 아닌 신청자는 읽기와 교체를 거절한다. 관리 viewer도 상태를 읽을 수 있다.
응답은 guild_id·revision·policy_revision·inactive_master_days·master_id·master_last_active_at·master_since_at·inactive_since_at·evaluated_at·eligible·reason이다.
inactive_since_at은 확인한 활동과 현재 마스터 역할 시작 시각 중 큰 값이다. 활동이 미확인이면 null이다.
reason은 eligible·claimant_required·policy_disabled·already_master·activity_unknown·master_active·guild_closed 중 하나다.
닫힌 길드의 관리 base 조회는 마스터와 시각을 null로 반환하며 eligible은 false다. 신청자를 지정한 조회는 현재 멤버 조건을 유지한다.

기존 POST \`/guilds/{guild}/commands\`에 action=claim_master를 추가한다.
게임 입력은 request_id·expected_revision·expected_policy_revision·action이다. 신청자는 본인이고 사유와 대상 ID를 받지 않는다.
관리 입력은 같은 필드에 target_player_id·reason을 추가한다. 관리자 대행도 대상 멤버의 자격 검사를 우회하지 않는다.
다른 기존 action에는 expected_policy_revision 필드를 허용하지 않는다.

새 교체는 열린 길드와 현재 길드·정책 버전을 요구한다. 신청자는 현재 member 또는 deputy이며 기존 마스터가 아니어야 한다.
기간 설정과 기존 마스터의 활동이 확인돼야 한다. 미확인 활동은 자동 교체를 거절한다. 운영자의 기존 위임 기능은 별개다.
서버 시각에서 inactive_since_at을 뺀 값이 설정 일수×86,400초를 엄격히 초과해야 한다. 같은 경계 초는 아직 교체할 수 없다.
미래 활동은 교체할 수 없다. 크게 앞으로 바뀐 시스템 시계의 정확성은 이 계약만으로 보장하지 않는다.
기존 마스터는 member, 신청자는 master가 된다. 역할 시작 시각·길드 버전·명령 결과·감사를 같은 거래에서 확정한다.
정산·재화 잠금은 역할 변경을 막지 않는다. 기존 보상 수신자 스냅샷과 재화 소유권은 바꾸지 않는다.

인증·환경·범위를 확인한 뒤 성공 명령 재전달을 먼저 처리한다. 이후 탈퇴·정책 변경·역할 변경·닫힘은 과거 성공을 다시 적용하지 않는다.
기존 guild_commands의 admin:/player: 이름공간을 재사용한다. 새 선택 필드는 None일 때 직렬화하지 않아 DB10 명령과 정규 입력을 같게 유지한다.
실패한 동시 교체는 현재 길드 버전 충돌로 거절한다. 다른 성공 요청도 같은 UUID로 위조하지 못한다.

## 오류와 검증

길드 버전 충돌은 revision_conflict, 정책 충돌은 policy_conflict다.
정책 중지는 claim_disabled, 미확인 활동은 activity_unknown, 아직 활동 중이면 master_active다. 상태 오류는 409다.
비멤버는 403 guild_forbidden, 잘못된 기간·필드는 422다. 기존 auth·환경·권한 오류는 유지한다.
조회는 no-store다. 배치 검색·활동 이력 전체 저장·GET 쓰기를 추가하지 않는다.

실제 HTTP 검사는 자기 합성 개발 자료의 시각만 제어한다. 제품 API에 과거 활동을 쓰는 기능을 추가하지 않는다.
기기 활동 연결·온라인 상태·게임별 자격·그룹·운영 부하는 후속 범위다.`,filtered:!0,sourceHash:"0061d72117b012d732cabbe56248a31a6d85fb20a86a1f055d5e350be5e2130a"},{id:"docs-specs-guild-group-leaderboards-md",title:"그룹별 길드 리더보드",path:"docs/specs/GUILD_GROUP_LEADERBOARDS.md",category:"기능 명세",status:"구현 범위별 참조",body:`# 그룹별 길드 리더보드

E03의 길드 보드 하나가 그룹마다 순위와 멤버 보상을 계산한다. 기존 전체 보드와 개인 그룹 보드는 유지한다.
이동·통합·삭제는 후속 단계다. 유저 이동은 길드 점수를 제외하거나 이전하지 않는다.
공식 구분은 [생성](https://docs.backnd.com/guide/console-guide/backnd-base/rank/create/)과 [길드 조회](https://docs.backnd.com/sdk-docs/backend/base/leaderboard/guild/get-list/)를 참고한다.
잠금·정산·복구 세부 정책은 자체 계약이다. 기존 [길드 계약](GUILD_LEADERBOARDS.md)과 [개인 그룹 계약](GROUP_LEADERBOARDS.md)을 재사용한다.

## 보드와 범위

생성 입력의 선택 division은 불리언이다. 생략/false는 전체 보드이며 기존 응답을 그대로 반환한다. true인 응답에만 division:true를 추가한다.
관리 그룹 경로는 \`/guild-leaderboards/{board}/groups/{group}/seasons\`다. 기존 seasons 하위 경로와 입력을 사용한다.
그룹 보드의 기존 seasons 경로는 422 group_required다. 전체 보드에 그룹 경로를 붙이면 422 invalid_group_scope다.
그룹은 같은 프로젝트·환경에 있어야 한다. 잘못된 UUID는 422 invalid_group_id, 없는/다른 환경 그룹은 404 group_not_found다.
시즌 기간·보상 설정은 모든 그룹이 공유한다. 순위·진행·버전·커서·결과는 그룹마다 분리한다.
관리 대상 길드의 소속 그룹이 다르면 새 refresh는 409 guild_group_mismatch다. 성공 재전달은 현재 소속보다 먼저 처리한다.
그룹의 scores·awards·recipients는 선택 그룹만 반환한다. 그룹 awards 커서는 길드 UUID다. 전체 awards의 순위 정수 커서는 유지한다. 다른 그룹 커서는 422 invalid_cursor다. 다른 그룹의 결과 수신자는 404 guild_result_not_found다.
그룹 경로의 쿼리는 GET 목록 cursor만 허용한다. 상세·변경의 쿼리를 거절한다. 기존 전체 경로 계약은 유지한다.

## 게임과 공개 길드

게임의 전체 순위·시즌 목록/상세는 유저의 현재 그룹을 사용한다. 다른 그룹을 지정하는 경로는 제공하지 않는다.
게임 me·새 me/refresh는 현재 길드의 소속 그룹을 사용한다. 공개 길드의 유저 그룹과 길드 그룹은 다를 수 있다.
길드는 생성자의 당시 그룹에 계속 귀속한다. 유저 이동은 이 소속이나 점수 그룹을 바꾸지 않는다.
그룹 순위 안에서도 기존 공개 범위를 집행한다. 숨긴 길드·다른 그룹의 커서는 거절하고 SQL에서 LIMIT 전에 선택한다.
순위 번호는 선택 그룹 전체에서 계산한다. 기존 전체 보드의 숨긴 길드 사이 순위 공백은 유지한다.
게임 refresh의 정규 입력은 안정된 target:me를 유지한다. 현재 길드/그룹을 해석하기 전에 옛 성공을 반환한다.
게임 정규 입력에 현재 그룹을 넣지 않는다. 명령 결과에는 실제 처리한 group_id를 포함한다. 관리 정규 입력에는 명시한 경로 그룹을 넣는다.

## 점수와 정산

최초 참여는 길드 소속 그룹을 점수에 저장한다. 원본 자동 갱신은 저장한 그룹을 유지한다. 임의 점수 입력은 제공하지 않는다.
첫 그룹 정산은 별도 source_frozen 필드를 기록한다. 전체 보드가 쓰는 시즌 정산 버전을 그룹 잠금 표식으로 사용하지 않는다.
종료한 시즌과 첫 그룹 정산 뒤에는 모든 그룹의 새 원본 반영을 막는다. 시계가 돌아가도 시즌 전체 잠금을 유지한다.
그룹마다 정산 버전 0부터 시작한다. 한 요청은 최대 50개 길드·50명 수신자다. 길드 명단은 처음 처리할 때 최대 100명으로 고정한다.
공개 길드의 다른 그룹 멤버도 그 명단과 보상을 받는다. 기존 순위/참가 보상 합산·개인 우편·한 번만 수령하는 거래를 유지한다.
NULL 그룹은 조회와 원본 반영을 허용한다. 정산은 409 default_group_not_rewarded이며 우편을 발급하지 않는다.
첫 그룹 정산이 남긴 시즌 잠금과 기부/해체 잠금을 구분한다. 그룹의 정산 버전이 양수이고 미완료면 그 그룹의 참여 길드를 잠근다.
완료한 그룹과 아직 시작하지 않은 그룹은 이 임시 잠금 대상이 아니다. 전체 보드의 기존 시즌 잠금은 유지한다.
길드당 미완료 참여는 최대 10개다. 그룹 보드는 해당 길드의 그룹 정산 완료로 한도를 해제한다.
NULL 그룹 참여는 종료 시각에 한도를 해제한다. 정산할 수 없는 과거 NULL 시즌 때문에 새 참여를 막지 않는다.
모든 점수·진행·명단·결과·우편·명령·감사는 기존 Immediate 거래에서 함께 확정한다. 실패하면 시즌 잠금도 취소한다.

## DB14와 보존

guild_leaderboards에 division, seasons에 source_frozen, scores에 nullable group_id를 추가한다. 기존 행은 전체 보드·NULL 점수 그룹이다.
그룹 오름/내림 인덱스는 group_id가 NULL인 전체 점수 행을 제외한다. 기존 전체 순위 인덱스는 유지한다.
results의 group_key는 전체 보드에서 빈 문자열, 그룹 보드에서 UUID다. 순위 유일성은 시즌·그룹·순위다.
결과 기본키는 시즌·길드를 유지한다. 전체 보상 목록을 위한 시즌·순위 인덱스를 보존한다. recipients의 기존 외래키·우편 ID도 유지한다.
그룹별 진행 테이블은 시즌·그룹 기본키와 기존 버전·길드/수신자 수·마지막/현재 길드·완료 시각을 가진다.
진행 테이블의 시즌·그룹·길드 참조는 프로젝트·환경을 포함한다.
결과 부모 테이블을 이전할 때 거래 밖에서 외래키를 끈다. 원래 부모를 먼저 이름 바꾸지 않고 복사·교체한다.
거래 안의 foreign_key_check가 실패하면 모두 취소한다. 성공/실패 뒤 외래키를 다시 켠다.
WAL·FULL·3초·8슬롯·SQL 캐시·실패 폐기는 유지한다. 새 의존성·CSS·다른 화면 재설계는 없다.

## 완료 근거

DB13 보존·부모/수신자 외래키·옛 명령·권한·범위·양방향 50+1·다른 그룹 커서·공개 길드의 다른 그룹 멤버를 확인한다.
원본 자동 갱신·동시 반영·한도 해제·50+1 멤버 정산·그룹별 버전·임시 잠금 해제·NULL·시계 역행·감사/우편 실패 취소를 확인한다.
Chrome의 그룹 선택·원본 반영·실패 뒤 같은 요청·독립 정산을 확인한다. 기존 전체 길드 순위/기부와 실제 SQLite 계획을 전후 비교한다.
전체 E03·플랫폼·길드 이동·그룹 통합/삭제·게임별 자격·운영 혼합 부하·기기 SDK는 계속 미완료다.`,filtered:!0,sourceHash:"3d16d68878a1d86a8322c3a8a75a9ac62fafe1d4c3f031927c43046012a76404"},{id:"docs-specs-guild-group-moves-md",title:"길드 그룹 이동",path:"docs/specs/GUILD_GROUP_MOVES.md",category:"기능 명세",status:"구현 범위별 참조",body:"# 길드 그룹 이동\n\n관리자가 길드를 다른 환경 그룹으로 옮긴다. 그룹 전용 길드는 멤버도 함께 옮긴다. 공개 길드는 멤버의 그룹을 유지한다.\n그룹 통합·삭제는 다음 단계이며 전체 목표에 남긴다. 이번에는 기존 그룹·길드·순위 거래를 확장하고 새 작업 실행 계층을 만들지 않는다.\n\n## 근거와 자체 계약\n\n원본 [그룹 안내](https://docs.backnd.com/guide/console-guide/backnd-base/group/)를 저장한 자료는 `study/thebackend/02_OPERATIONS_INTEGRATIONS.md:244–252`다.\n원본 콘솔의 이동 폼은 그룹 전용 길드와 멤버를 함께 옮긴다. 공개 길드의 멤버 소속은 유지한다.\n이 구분은 `study/thebackend/evidence/public-console/index-Cp2VxB6O.js`의 Y9r, UTF-8 byte 4676665/4676762에서 확인했다.\n원본 폼은 순위 처리 방식을 명시하도록 요구한다. 원본의 일반 집계 필드 초기화는 현재 재화·메타 원본과 다르다.\n자체 API는 `recalculate`와 `exclude`를 명시한다. 재화·메타·진행 원본을 초기화하지 않는다. 원본 SDK의 모든 정책과 호환된다는 주장은 하지 않는다.\n\n## 관리 API\n\n경로 앞에는 `/api/v1/admin/projects/{project}/{environment}`를 붙인다.\n\n- GET `/groups/guilds/{guild}`: `guild_id`·`group_id`·`access`·`revision`·`member_count`·`closed_at`을 반환한다. revision은 기존 길드 버전이다.\n- POST `/groups/guilds/{guild}`: `request_id`·`expected_revision`·`group_id`·`leaderboard_policy`·`reason`을 요구한다. 알 수 없는 필드와 모든 쿼리를 거절한다.\n- 성공 결과는 GET 필드와 `moved_player_count`를 포함한다. 버전·UUID·사유 검증은 기존 그룹 입력 규칙을 따른다.\n- viewer는 읽기만 허용한다. owner·editor는 같은 프로젝트·환경에서 변경한다. 게임의 직접 이동 API는 제공하지 않는다.\n\n정규 입력은 `operation:groups.guild_move`·`guild_id`·전체 입력이다. 현재 그룹을 정규 입력에 넣지 않는다.\n인증과 경로 ID 검증 뒤 저장한 성공을 먼저 반환한다. 과거 성공은 현재 그룹·버전·멤버·닫힘·정산 상태 때문에 다시 실행하지 않는다.\n다른 입력의 같은 요청 ID는 409 `idempotency_conflict`다. 실제 변경·명령·`groups.guild_moved` 감사는 기존 Immediate 거래에서 함께 확정한다.\n\n## 이동과 버전\n\n새 명령은 대상 그룹 존재·길드 버전·닫힘을 확인한다. 닫힌 길드는 409 `guild_closed`, 다른 버전은 409 `revision_conflict`다.\n현재 그룹과 같은 대상이면 멤버·점수·버전은 그대로다. 새 명령과 감사만 기록하고 `moved_player_count:0`을 반환한다.\n실제 이동은 길드 버전을 한 번 올린다. 진행 중인 길드 보상 정산이 잠근 길드는 기존 428 `guild_settling`으로 거절한다.\n\n공개 길드는 소속만 옮긴다. 멤버·유저 그룹·가입 요청·개인 점수·역할·가입 시각을 유지한다.\n그룹 전용 길드는 최대 100명의 현재 멤버를 함께 옮긴다. 멤버십·역할·가입/역할 시각·활동·길드 재화는 그대로다.\n다른 그룹으로 바뀌는 각 멤버의 player_groups 버전을 올린다. 기본 그룹으로 돌아와도 명시한 행과 버전을 유지한다.\n멤버가 길드의 원래 그룹 밖에 있으면 409 `guild_group_mismatch`로 전체 취소한다. 잘못된 101명 자료도 409 `guild_member_limit`으로 취소한다.\n\n전용 길드 이동은 길드에 남아 있던 pending 요청을 취소한다. 함께 옮기는 멤버마다 다른 pending 요청을 최대 10개까지 취소한다.\n취소한 요청의 다른 길드는 기존 버전 증가 규칙을 따른다. 옮기는 길드 자체는 전체 이동에서 한 번만 버전을 올린다.\n버전 소진·잘못된 참여 자료·명령/감사 실패는 소속·요청·점수·모든 버전을 함께 취소한다.\n관리 대행은 유저 활동을 기록하지 않는다. 같은 버전의 동시 변경은 한 건만 성공한다.\n\n## 진행 중인 순위\n\n범위는 시간 구간 안에 있고 부모 정산이 시작되지 않은 그룹 보드다. 길드 보드는 `source_frozen=0`도 요구한다.\n전체 보드·종료한 시즌·정산 중/완료 점수·고정 명단·결과·우편은 변경하지 않는다.\n\n- `recalculate`: 옮기는 길드와 실제 그룹이 바뀌는 멤버의 활성 그룹 점수를 대상 그룹에 재등록한다. 점수 버전을 올리고 도달 시각을 이동 시각으로 기록한다.\n- 길드 점수는 기존 재화/메타 원본을 다시 읽는다. 개인 점수는 서버가 이미 저장한 숫자를 유지한다. 제외된 NULL 점수는 새로 참여시키지 않는다.\n- `exclude`: 같은 활성 참여의 group_id만 SQL NULL로 바꾼다. 숫자·버전·도달 시각은 유지한다. 개인의 기존 독립 이동도 이 동작을 유지한다.\n\n활성 그룹 참여는 대상당 최대 10개다. 가져온 11개 자료는 전체 이동을 거절한다. 재계산의 점수 버전이 소진돼도 전체 취소한다.\nSQL NULL은 순위 제외이며 기본 그룹 UUID와 구분한다. 제외된 길드는 재화 변경만으로 다시 참여하지 않는다.\n명시한 새 refresh는 이전 버전을 요구하고 현재 그룹으로 재참여한다. 버전과 새 도달 시각을 올리며 기존 최대 10개 한도를 다시 검사한다.\n공유 write_score는 저장 그룹을 갱신한다. 자동 반영은 이전 그룹을 그대로 전달하므로 이동 없이 그룹이 바뀌지 않는다.\n\n## 화면과 검증\n\n기존 Groups.tsx에 길드 ID 조회와 이동 폼을 연결한다. 현재 소속·공개 범위·버전·인원을 표시하고 대상 그룹·순위 방식·사유를 받는다.\n밝은 중성색·좌측 메뉴·상단 프로젝트/환경·기존 버튼과 폼을 유지한다. 새 CSS와 의존성은 추가하지 않는다.\n진행 중이거나 결과를 모르면 기존 탐색 잠금을 유지한다. 같은 URL·직렬화한 입력·요청 UUID로 재시도한다. 성공 뒤 현재 상태는 GET으로 읽는다.\n\n권한·범위·입력·공개/전용·100명·pending 10개·동시 이동·ABA·옛 성공·NULL·두 순위 정책·한도·버전 소진·감사 실패 취소를 확인한다.\n활동·역할·재화·전체 보드·종료 점수·정산 결과·발급한 우편도 대조한다. 실제 SQLite 계획과 기존 전체 순위/기부의 전후 지연을 확인한다.\n운영 혼합 부하·기기 SDK·그룹 통합/삭제·게임별 생성 자격·전체 E03과 플랫폼은 계속 미완료다.",filtered:!0,sourceHash:"a94ad671f55c16a18d6f51856d687db11b4163de9bff6f06a136c2191c3fab21"},{id:"docs-specs-guild-leaderboards-md",title:"길드 순위·시즌과 멤버 보상",path:"docs/specs/GUILD_LEADERBOARDS.md",category:"기능 명세",status:"구현 범위별 참조",body:`# 길드 순위·시즌과 멤버 보상

길드 재화·숫자 메타 정보를 원본으로 순위를 계산한다. 기존 개인 랭킹은 유지한다.
이 API와 멤버 보상 정책은 자체 계약이다. 원본의 보상 대상과 스냅샷 시점은 확인하지 못했다.
현재 단계는 명시한 시즌의 참여·원본 반영·조회·정산이다. 반복 일정 실행은 E08에서 연결한다.
조사 근거는 [길드 점수 원본](https://docs.backnd.com/sdk-docs/backend/base/leaderboard/guild/get-leaderboard/), [정산 중 기부 제한](https://docs.backnd.com/sdk-docs/backend/base/guild/goods/donate-forbidden-during-reset-time/), [보상 안내](https://docs.backnd.com/guide/console-guide/backnd-base/rank/reward/)다.

## 점수와 참여

관리 prefix는 \`/admin/projects/{project}/{environment}/guild-leaderboards\`다. 게임 prefix는 \`/game/guild-leaderboards\`다.
보드는 \`{key,name,sort,source}\`로 생성한다. sort는 asc 또는 desc다.
source는 \`{kind:"treasury",asset_id}\` 또는 \`{kind:"metadata",key}\`다. 자산은 같은 환경이어야 한다.
메타 key는 기존 valid_key 규칙을 따른다. 직접 자식의 JSON 정수만 점수로 사용한다.
재화 점수는 현재 길드 잔액이다. 원본 서비스의 누적 기부액과 같다고 주장하지 않는다.
메타 원본의 편집 권한은 기존 길드 설정 권한이다. 검증한 경기 결과 점수와 구분한다.

현재 멤버는 게임의 자기 길드를 시즌에 등록하고 원본을 다시 반영할 수 있다. 관리 편집자도 길드를 지정해 처리한다.
임의 점수 입력은 없다. 길드는 같은 환경에 있어야 하며 등록 시 열려 있어야 한다.
등록은 진행 중인 시즌에서만 허용한다. 한 길드의 미정산 참여 시즌은 최대 10개다.
등록 후 활성 시즌의 원본 변경은 같은 거래에서 해당 점수에 반영한다.
재화 기부·사용은 재화 점수를, 길드 설정 변경은 메타 점수를 반영한다.
등록하지 않은 길드를 전체 검색으로 자동 등록하지 않는다. 참여 등록은 명시적 게임 흐름이다.
원본이 없거나 정수가 아니면 422 invalid_guild_score_source다. 등록한 활성 원본을 잘못 바꾸는 거래도 취소한다.
점수는 안전 정수 범위다. 변경한 점수는 버전을 증가시키고 도달 시각을 바꾼다. 같은 점수는 도달 시각을 유지한다.
명시한 반영 요청은 expected_version을 검사하고 성공 버전을 증가시킨다. 최초 기대 버전은 0이다.
순서는 점수 방향·도달 시각·길드 UUID다. 점수와 결과 목록은 최대 50개다.
종료 시각 뒤 원본 변경은 종료한 점수에 반영하지 않는다. 정산 기록이 있으면 시계가 돌아가도 점수를 바꾸지 않는다.

## 멤버 보상과 정산

시즌 입력은 기존 개인 시즌의 key·starts_at·ends_at·rewards·reward_ttl_seconds에 participation_rewards를 추가한다.
participation_rewards는 생략하면 빈 배열이다. 각 목록은 자산 중복 없이 최대 10개다.
순위 범위는 기존 규칙대로 최대 20개이며 서로 겹치지 않는다.
각 순위 보상과 참가 보상을 같은 자산끼리 합친다. 합친 자산은 최대 10개, 각 금액은 최대 1,000,000,000이다.
기존 개인 우편으로 멤버별 합친 자산을 발급한다. 길드 재화로 지급하지 않는다.

최초 정산은 시즌 종료 뒤에 시작한다. 한 요청은 최대 50명의 수신자와 최대 50개 길드만 처리한다.
길드를 처음 처리할 때 현재 멤버 ID를 최대 100개 기록한다. 그 뒤 가입·탈퇴·역할 변경은 기록한 수신자를 바꾸지 않는다.
길드별 첫 처리 시점은 서로 다를 수 있다. 전체 시즌 시작 시점의 멤버 스냅샷이라고 설명하지 않는다.
정산 전에 닫힌 길드는 순위를 보존하지만 현재 멤버가 없어 새 보상을 발급하지 않는다.
한 길드의 수신자가 남으면 다음 요청에서 그 기록을 이어간다. 길드가 끝나면 다음 순위로 진행한다.
길드 결과·멤버 결과·우편·진행·중복 요청·감사는 기존 Immediate 거래에서 함께 확정한다.
실패하면 모두 취소한다. 성공한 묶음은 같은 요청을 보내도 우편을 다시 만들지 않는다.
우편 수령은 기존 개인 지갑·원장 거래를 재사용한다. 이후 탈퇴·해체가 발급한 개인 우편을 회수하지 않는다.

정산 버전이 양수이고 settled_at이 없으면 해당 시즌에 참여한 모든 길드의 새 기부와 해체를 428 guild_settling으로 막는다.
운영 잠금과 별도다. 관리자의 운영 잠금 해제도 이를 우회하지 않는다. 마지막 묶음이 완료하면 자동 해제한다.
이미 처리한 길드도 시즌 전체가 끝날 때까지 제한한다. 성공한 옛 기부 재전달은 제한보다 먼저 원래 결과를 반환한다.
길드 재화 사용은 정산 잠금만으로 제한하지 않는다. 종료한 점수는 이미 고정돼 있다.
원본을 0으로 초기화하지 않는다. 새 시즌의 참여·점수와 기존 재화·원장을 구분한다.

## 경로와 응답

관리 GET/POST \`/\`와 \`/{board}/seasons\`는 목록과 생성을 제공한다.
GET \`/{board}/seasons/{season}\`은 시즌과 정산 진행을 반환한다.
GET \`.../scores\`는 순위 목록이다. GET/PUT \`.../scores/{guild}\`는 조회와 원본 반영이다.
PUT은 request_id·expected_version·reason을 받는다. score 필드는 받지 않는다.
POST \`.../settle\`는 request_id·expected_revision·reason을 받는다.
GET \`.../awards\`는 길드 결과를, GET \`.../awards/{guild}/recipients\`는 멤버 결과를 최대 50개 반환한다.
게임 GET은 보드·시즌·점수 목록·시즌 상세를 제공한다. GET \`.../me\`는 현재 길드의 entry 또는 null이다.
게임 POST \`.../me/refresh\`는 현재 길드 원본을 반영한다. 같은 request_id·expected_version·reason을 받는다.
게임 me에는 본인에게 발급한 reward_mail_ids만 포함한다. 타인의 보상 우편 ID는 공개하지 않는다.

보드는 id·key·name·sort·source를 반환한다. 점수 행은 guild_id·score·version·reached_at·rank를 가진다.
시즌은 기존 기간·보상·state와 participation_rewards·settlement_revision·processed_guild_count·processed_recipient_count·current_guild_id·settled_at을 반환한다.
정산 응답은 season_id·settlement_revision·processed_guild_count·processed_recipient_count·guilds_in_batch·recipients_in_batch·issued_mail_count·done이다.
길드 결과는 rank·guild_id·score·recipient_count·processed_recipient_count·complete·created_at이다.
멤버 결과는 player_id·mail_ids·created_at이다. 모든 목록은 items·next_cursor다.
점수 커서는 길드 UUID, 결과 커서는 순위 정수, 멤버 커서는 유저 UUID다.
조회는 no-store다. 기존 인증·환경·점검·버전·Origin·본문 상한을 유지한다.

모든 변경 요청은 정규 UUID와 공백이 아닌 UTF-8 500바이트 이하 사유를 요구한다.
보드·시즌 생성은 기존 key 유일성과 사유 없는 생성 계약을 따른다.
반영·정산은 기존 guild_commands의 admin:/player: 이름공간과 결과 기록을 재사용한다.
인증·관리 권한·보드·시즌·지정 길드 범위 확인 뒤 성공 재전달을 먼저 확인한다.
게임 me/refresh 재전달은 현재 소속으로 경로를 다시 계산하기 전에 보존한 명령의 대상 길드를 확인한다.
현재 역할·소속을 잃은 뒤에도 본인의 같은 성공 요청을 재전달할 수 있다. 다른 입력·작업은 409 idempotency_conflict다.
운영자 반영의 길드 기대 버전 충돌은 version_conflict다. 정산 충돌은 settlement_conflict다.
종료·정산한 시즌의 새 반영은 season_not_active다. 정산이 끝난 새 정산은 season_settled다.

## 저장과 검증

DB10에 길드 보드·시즌·점수·길드 결과·멤버 결과를 추가한다. 기존 DB9 자료를 보존한다.
각 길드·시즌·수신자 참조에는 환경을 포함한다. 오름·내림 순위와 길드별 참여 검색에 인덱스를 둔다.
개인 랭킹·개인 우편의 원래 동작과 조회 SQL은 유지한다. 공통 보상 검증만 재사용한다.
검사는 원본 연동·잘못된 원본 롤백·권한·정산 잠금·시계 역행·수신자 스냅샷·묶음 재개·동시 정산·우편 수령 한 번을 포함한다.
전체 자동 일정·게임별 자격·그룹·운영 부하·D02는 후속 범위로 유지한다.`,filtered:!0,sourceHash:"22f5dd06ff6399095a0226bd4ec955262ebe73008ac016aea6398c7400ced65d"},{id:"docs-specs-guild-treasury-md",title:"길드 재화",path:"docs/specs/GUILD_TREASURY.md",category:"기능 명세",status:"구현 범위별 참조",body:"# 길드 재화\n\n길드 멤버의 기부와 길드 재화 사용을 실제 지갑·원장에 연결한다. 기존 길드 화면과 공통 요청 재시도를 재사용한다.\n이 계약은 자체 정책이다. 원본 서비스와의 호환을 보장하지 않는다. 자동 시즌 정산·그룹·비활성 마스터 교체는 E03의 후속 범위다.\n\n## 저장과 권한\n\n- DB9는 기존 DB8의 데이터와 명령 기록을 보존한다.\n- 길드별 재화는 같은 환경의 기존 자산 1–10개를 한 번 설정한다. 순서와 자산은 이후 바꾸지 않는다.\n- 현재 마스터 또는 관리 편집자가 설정한다. 관리 조회자는 읽기만 한다.\n- 현재 멤버는 자신의 지갑에서 기부한다. 관리 편집자는 같은 길드의 현재 멤버를 지정해 대신 기부한다.\n- 현재 마스터 또는 관리 편집자가 길드 재화를 사용한다. 사용은 길드 잔액을 소모하며 개인에게 지급하지 않는다.\n- 현재 멤버는 잔액과 원장을 읽는다. 관리 조회자는 닫힌 길드도 읽는다.\n- 관리 편집자만 운영 잠금을 바꾼다. 잠금은 새 기부·사용·해체를 막는다. 자동 정산 잠금과 구분한다.\n- 잔액이 하나라도 양수면 해체와 마지막 마스터의 탈퇴를 막는다. 기존 공통 닫기 함수에서 검사한다.\n\n## HTTP 계약\n\n관리 경로는 `/admin/projects/{project}/{environment}/guilds/{guild}/treasury`다.\n게임 경로는 `/game/guilds/{guild}/treasury`다. 인증·환경·점검·버전 제한은 기존 경로를 따른다.\n\n| 메서드와 하위 경로 | 입력 | 결과 |\n| --- | --- | --- |\n| GET | 없음 | 지갑 |\n| GET `/ledger` | 선택 `cursor` | 최신 원장 최대 50개와 `next_cursor` |\n| POST `/configure` | `asset_ids`, `expected_revision:0` | 지갑 |\n| POST `/contribute` | `asset_id`, `amount`, 관리자만 `donor_id` | 지갑 |\n| POST `/spend` | `asset_id`, `amount` | 지갑 |\n| POST `/lock` | `locked`, `expected_revision` | 지갑. 게임 경로는 없음 |\n\n모든 POST는 UUID `request_id`와 공백이 아닌 UTF-8 500바이트 이하 `reason`을 요구한다.\n알 수 없는 필드와 쿼리를 거절한다. UUID는 정규화한다. 금액은 정수 1–1,000,000,000이다.\n지갑은 `{guild_id,configured,revision,locked,settlement_locked,assets:[{asset_id,name,kind,slot,balance}]}`다.\nDB10부터 settlement_locked는 참여한 시즌의 정산 중 제한을 표시한다. 운영 locked와 별개이며 새 기부와 해체를 제한한다.\n미설정 지갑은 버전 0·잠금 없음·빈 자산이다. 설정 후 버전은 1이다.\n헤더 버전은 설정·잠금 변경만 반영한다. 기부·사용은 길드 버전과 헤더 버전을 바꾸지 않는다.\n같은 잠금 값은 버전을 유지한다. 버전과 잔액은 JavaScript의 안전한 정수 상한을 넘지 않는다.\n원장은 `{id,asset_id,amount,balance_after,kind,player_id,reason,created_at}`를 반환한다.\n관리 원장에는 `actor`와 `request_id`도 포함한다. 게임 원장에서는 두 필드를 생략한다.\n\n## 거래와 재전달\n\n기존 Immediate 거래 안에서 개인 지갑·개인 원장·길드 잔액·길드 원장·감사·성공 결과를 함께 확정한다.\n실패하면 모두 되돌린다. 동시 사용으로 잔액이 음수가 되지 않는다. 기부로 총 재화가 늘지 않는다.\n길드 명령의 `admin:{id}`·`player:{id}` 기록을 재사용한다. 다른 작업과 요청 ID가 충돌하면 `409 idempotency_conflict`다.\n정규 입력에는 작업·길드·금액·자산·기부자·사유를 포함한다.\n인증·환경·관리 권한·대상 범위를 확인한 뒤 성공 기록을 먼저 조회한다.\n성공 재전달은 현재 역할·탈퇴·닫힘·운영 잠금보다 먼저 원래 결과를 반환한다.\n개인 원장의 업무 ID에는 길드·행위자 이름공간·요청 ID를 포함한다.\n화면은 과거 성공 응답을 현재 잔액으로 표시하지 않는다. 처리 후 GET으로 다시 읽는다.\n\n## 오류와 검사\n\n미설정은 `treasury_not_configured`, 재설정은 `treasury_configured`, 잠금은 `treasury_locked`다.\n남은 재화로 닫기를 막으면 `guild_balance_remaining`, 길드 잔액 부족은 `treasury_insufficient_balance`다.\n미등록 자산은 `treasury_asset_not_found`, 잔액 상한은 `balance_limit`, 헤더 충돌은 `revision_conflict`다.\n현재 멤버·마스터 제한은 `guild_forbidden`이다. 개인 잔액 부족은 기존 지갑 오류를 따른다.\n마이그레이션 보존·권한·환경·기부 보존·중복·역할 변경 뒤 재전달·동시 소비·잠금·닫기·감사 실패 롤백을 검사한다.",filtered:!0,sourceHash:"b3b722fc6b33326b3c14219528ec88f4796265fd06d769f97c734bc2e36fc3a5"},{id:"jwt",title:"JWT 인증과 인가 계약",path:"docs/specs/JWT_AUTH.md",category:"기능 명세",status:"현재 인증 계약",body:'# JWT 인증과 인가 계약\n\n2026-11-10, 클라우드 개발 사본의 구현 계약. 운영 배포 완료를 뜻하지 않는다.\n\n## 기존 문제와 변경\n\n기존 서버는 인증·인가가 없는 상태가 아니라, 64자 무작위 Bearer 토큰을 DB에서 조회하는 세션 방식이었다. JWT 서명/클레임 검증은 없었고 관리자 API는 쿠키만 받았다. 지금은 기존 세션 수명·즉시 폐기·역할 정책을 유지하면서 HS256 서명 JWT와 관리자 Bearer 전송을 추가한다.\n\n서버는 `jsonwebtoken` 10.2.0의 RustCrypto 구현을 사용한다. 검증 알고리즘을 HS256로 고정하고 `iss`, `aud`, `sub`, `exp`, `iat`, `nbf`, `jti`, `kind`를 확인한다. 게임 토큰에는 `project_id`, `environment`가 추가되며 DB의 현재 유저 범위와 대조한다. 관리자와 게임의 audience는 각각 `game-platform:admin`, `game-platform:game`이다. 토큰 내용을 디코딩할 수 있다는 사실만으로 신뢰하지 않는다.\n\n## 인증과 인가 분리\n\n- 인증: JWT 서명, 발급자, 대상, 시간, 주체를 검증한 다음 DB의 해시 세션이 아직 유효한지 확인한다.\n- 인가: 기존 DB의 owner/editor/viewer 및 프로젝트·환경 권한을 매 요청 검사한다. 권한을 JWT에 복사해 오래 유지하지 않는다.\n- 게임은 자기 프로젝트·환경/플레이어 범위에서만 동작한다. 관리자 JWT로 게임 API를, 게임 JWT로 관리 API를 사용할 수 없다.\n- 로그아웃·토큰 교체·관리자의 게임 세션 폐기·유저 차단/탈퇴의 기존 서버 집행을 유지한다.\n- 탈퇴 직후 동일 요청의 응답 유실 복구는 기존 제한된 영수증 재전달만 허용한다. 서명 및 만료 검사는 수행하고, 폐기된 JWT로 일반 API를 허용하지 않는다.\n- JWT는 DB 조회를 없애는 stateless 모드가 아니다. 즉시 폐기·권한 변경 반영이 우선이다.\n\n## HTTP 전송\n\n### 관리자 콘솔\n\n`POST /api/v1/admin/login`에 `username`, `password`를 보내면 기존 HttpOnly·SameSite=Strict 쿠키를 발급한다. HTTPS 설정에서는 Secure를 붙인다. 응답은 `id`, `is_owner`, `expires_at`이며 JWT를 JSON으로 노출하지 않는다. 쿠키 로그인과 쿠키 인증 변경 요청은 정확한 `PLATFORM_ORIGIN`을 요구한다.\n\n### 관리자 API/Swagger\n\n같은 로그인 입력에 `token_transport: "bearer"`를 명시하면 쿠키 없이 `id`, `is_owner`, `token`, `token_type: "Bearer"`, `expires_at`을 반환한다. 이후 `Authorization: Bearer <token>`으로 호출한다. 명시 Bearer 인증은 Origin을 요구하지 않는다. Authorization 헤더가 있으면 쿠키로 fallback하지 않으므로 잘못된 JWT와 유효한 쿠키가 함께 와도 401이다.\n\n### 게임 SDK\n\n기존 게스트 세션·커스텀 가입/로그인 경로는 `token`, `expires_at`을 유지하고 `token_type: "Bearer"`를 추가한다. 게임 JWT는 1시간, 관리자 JWT는 8시간이다. 공개 bootstrap/게스트 생성/로그인은 기존 공개 계약을 유지하며 보호 API에만 JWT가 필요하다.\n\n`POST /api/v1/game/session/refresh`는 **아직 유효한 게임 JWT**로 새 1시간 JWT를 발급하고 이전 토큰을 같은 트랜잭션에서 폐기한다. 별도의 장기 refresh token은 구현하지 않는다. 만료·폐기 후에는 자격으로 재로그인해야 한다. 관리자 자동 갱신 API도 없다.\n\n오류는 기존 problem JSON을 사용하며 인증 실패는 401과 `WWW-Authenticate: Bearer`, 유효한 주체의 권한 부족은 403이다. 인증 응답은 `Cache-Control: no-store`다.\n\n## 서버 설정\n\n- `PLATFORM_JWT_SECRET`: 서버 전용, 최소 32바이트의 충분히 무작위인 비밀. 코드·Git·SDK·웹 번들·로그에 넣지 않는다. 실제 운영 secret 생성/저장/배포는 이 작업에서 수행하지 않았다.\n- `PLATFORM_JWT_ISSUER`: 기본 `game-platform`. 같은 DB의 세션을 사용하는 인스턴스/재시작에는 같은 issuer와 secret을 제공한다.\n- 설정이 없는 loopback 개발 실행은 프로세스 안에서만 유지되는 무작위 키를 사용하며 경고를 출력한다. 프로세스 재시작 뒤에는 재로그인이 필요하다.\n- non-loopback 실행은 명시 secret과 기존 HTTPS Origin/TLS 역방향 프록시 설정이 없으면 시작을 거부한다.\n- `Store::open`은 로컬/테스트용 프로세스 키를 쓴다. 임베딩/운영 코드는 `JwtConfig::new`와 `Store::open_with_jwt`로 명시 구성한다.\n- 키 또는 issuer 변경은 기존 JWT를 무효화한다. 무중단 다중 키 rotation/JWKS·외부 IdP 검증은 후속 범위다.\n\n## 이전과 SDK 한계\n\nDB 스키마는 22를 유지하며 실제 DB/유저 자료를 수정하지 않았다. 이전 opaque 세션 토큰은 JWT 검증에서 거부하므로 적용 시 재로그인이 필요하다. 게스트 자격·커스텀 비밀번호·유저 데이터는 그대로다.\n\n[SDK 인증 안내](../api/SDK_AUTH.md)의 TypeScript fetch 어댑터가 만료 60초 전 사용 시 갱신, 동시 갱신 공유, 계정 전환/취소 보호를 제공한다. SDK에 서버 서명 비밀이나 관리자 토큰을 배포하지 않는다. 토큰 영속 저장과 안전한 자격 보관은 소비 앱이 결정한다. 브라우저 게임은 현재 same-origin/역방향 프록시를 사용한다. 광범위 CORS 허용은 추가하지 않았다.\n\nAndroid/iOS 네이티브 SDK 패키지, 실제 기기 빌드, 외부 소셜 로그인, 장기 refresh token, 키 관리 서비스, 운영 배포는 완료 범위가 아니다.\n\n## 검증 명령\n\n```sh\nsource scripts/cloud-env.sh\ncargo fmt --manifest-path server/Cargo.toml --check\ncargo clippy --locked --offline --manifest-path server/Cargo.toml --all-targets -- -D warnings\ncargo test --locked --offline --manifest-path server/Cargo.toml\ncargo build --locked --offline --manifest-path server/Cargo.toml\npython3 scripts/auth/jwt-smoke.py\nnode --test integration/platform-client.test.ts\n```\n\n임시 DB와 테스트 자격만 사용한다. JWT 자체·비밀·비밀번호를 출력하지 않는다. 실제 실행 결과는 `docs/validation/jwt-auth-20261110.json`을 따른다.',filtered:!1,sourceHash:"0496505aed81773a19f73fde6a23161b10fc6ed7913f1c67baf875156e92e571"},{id:"leaderboards",title:"랭킹·시즌과 보상 정산",path:"docs/specs/LEADERBOARDS.md",category:"기능 명세",status:"구현 범위별 참조",body:"# 랭킹·시즌과 보상 정산\n\nTODO E03의 랭킹·시즌·정산을 사이트와 Rust 서버에 연결한다. 친구·길드·그룹과 게임별 점수 검증은 후속 범위로 유지한다.\n기존 콘솔의 목록·폼·버전 충돌·날짜 입력을 재사용한다. 실제 결제나 외부 발송은 실행하지 않는다.\n\n## 점수와 기간\n\n리더보드는 환경에 속하며 `id`, `key`, `name`, `sort`를 가진다. `sort`는 `desc` 또는 `asc`다.\n키는 기존 `valid_key`, 이름은 공백을 제외한 글자가 있는 100자 이하 문자열이다. 키와 정렬은 생성 뒤 바꾸지 않는다.\n시즌은 보드에 속하며 고유한 `key`, `starts_at`, `ends_at`, `rewards`, `reward_ttl_seconds`를 가진다.\n시각은 `0..=9007199254740991`의 UTC 초이며 시작이 종료보다 앞서야 한다. 기간·보상은 생성 뒤 변경하지 않는다.\n같은 보드의 시즌은 겹칠 수 있다. 호출자가 시즌 ID를 명시한다.\n\n점수는 환경의 owner·editor만 변경한다. 게임 API는 조회만 제공한다.\n게임 클라이언트의 임의 점수를 신뢰하지 않는다. 서버가 검증한 경기 결과의 자동 반영은 게임별 규칙과 함께 후속 구현한다.\n점수는 정수 `-9007199254740991..=9007199254740991`이다. 최초 버전은 0, 저장한 버전은 1부터다.\n변경은 `request_id`, `expected_version`, `score`, `reason`을 요구한다. 사유는 공백만 있는 값을 거부하며 500바이트 이하다.\n처음 접수할 때 `starts_at <= now < ends_at`이어야 한다. 종료 시각부터 새 점수를 거부한다.\n`settlement_revision > 0`이면 시계가 시즌 기간으로 돌아가도 새 점수 변경을 거부한다.\n이미 성공한 점수 요청은 같은 `request_id`와 입력으로 다시 보내면 원래 결과를 반환한다.\n같은 점수의 재설정은 도달 시각을 유지한다. 다른 점수로 바꾸면 현재 UTC 초를 도달 시각으로 사용한다.\n\n순서는 점수의 지정 방향, 도달 시각 오름차순, 유저 UUID 오름차순이다. 동점도 서로 다른 1부터의 순번을 가진다.\n현재 목록·자기 순위·관리자의 특정 유저 조회·과거 시즌을 제공한다. 페이지는 50개, 커서는 마지막 유저 UUID다.\n활성 시즌의 페이지 사이에 점수가 바뀔 수 있다. 전체를 고정한 조회가 필요하면 첫 페이지부터 다시 조회한다.\n종료한 시즌은 점수를 바꾸지 않으므로 순위가 고정된다.\n\n## 보상과 정산\n\n`rewards`는 최대 20개 범위다. 각 범위는 `from_rank`, `to_rank`, `rewards`를 가진다.\n순위는 양수 안전 정수이며 범위는 겹치지 않는다. 각 범위의 보상은 1개 이상 10개 이하, 같은 자산을 중복하지 않는다.\n보상은 `{asset_id, amount}`이며 같은 환경의 자산과 정수 `1..=1000000000`을 사용한다.\n빈 범위 목록은 보상이 없는 시즌이다. 큰 마지막 순위로 참여자 전체를 포함할 수 있다.\n보상 우편의 수령 기간은 발급부터 `reward_ttl_seconds`다. 값은 60초 이상 31,536,000초 이하다.\n\n최초 정산은 종료한 시즌에서만 시작한다. 각 요청은 다음 순서의 최대 50명을 처리한다.\n`settlement_revision > 0`이면 시계가 종료 전으로 돌아가도 남은 정산을 계속할 수 있다.\n한 번 시작한 정산은 시각과 관계없이 새 점수 변경을 잠근다. 순위와 이미 발급한 보상이 달라지지 않게 한다.\n정산 상태의 마지막 유저·처리 수·버전과 결과 순번을 같은 거래에 기록한다. 남은 유저가 없으면 정산을 완료한다.\n유저별 순위·점수·보상 우편 ID를 결과에 보존한다. 각 자산은 기존 우편 하나로 발급한다.\n정산은 즉시 잔액을 올리지 않는다. 게임의 기존 우편 수령이 지급·원장·수령을 한 거래로 처리한다.\n우편·결과·진행·중복 요청 결과·감사는 같은 쓰기 거래에서 성공하거나 취소된다. 실패한 같은 요청은 안전하게 다시 실행할 수 있다.\n\n정산 입력은 `request_id`, `expected_revision`, `reason`이다. 최초 정산 버전은 0이며 성공한 묶음마다 1씩 증가한다.\n같은 요청 UUID와 입력은 원래 결과를 반환한다. 다른 입력은 `409 idempotency_conflict`다.\n새 요청의 기대 버전이 다르면 `409 settlement_conflict`다. 완료한 시즌의 새 정산은 `409 season_settled`다.\n이미 성공한 요청은 종료 뒤나 정산 완료 뒤에도 원래 결과를 반환한다. 권한 검사는 계속 적용한다.\n점수 변경과 정산은 같은 시즌의 요청 ID 공간을 사용하며 작업·대상·입력을 비교한다. UUID는 정규화한다.\n\n## HTTP\n\n관리 prefix는 `/api/v1/admin/projects/{project}/{environment}/leaderboards`다.\n\n| 경로 | 입력 | 결과 | 권한 |\n| --- | --- | --- | --- |\n| `GET/POST /` | 생성: key, name, sort | 50개 목록 또는 새 보드 | 조회·편집 |\n| `GET/POST /{board}/seasons` | 생성: key, starts_at, ends_at, rewards, reward_ttl_seconds | 목록 또는 새 시즌 | 조회·편집 |\n| `GET /{board}/seasons/{season}` | 없음 | 시즌 | 조회 |\n| `GET /{board}/seasons/{season}/scores` | cursor 선택 | 순위 목록 | 조회 |\n| `GET /{board}/seasons/{season}/scores/{player}` | 없음 | `{entry: 행 또는 null}` | 조회 |\n| `PUT /{board}/seasons/{season}/scores/{player}` | 점수 변경 입력 | player_id, score, version, reached_at | 편집 |\n| `POST /{board}/seasons/{season}/settle` | 정산 입력 | 아래 정산 결과 | 편집 |\n| `GET /{board}/seasons/{season}/awards` | cursor 선택 | 정산 결과 목록 | 조회 |\n\n목록은 `{items, next_cursor}`다. 시즌의 상태는 `scheduled`, `active`, `ended`, `settling`, `settled`다.\n상태는 시각보다 저장한 정산 기록을 우선한다. `settled_at`이 있으면 `settled`, 없고 `settlement_revision > 0`이면 `settling`이다.\n시즌 응답은 ID·키·기간·보상·수령 기간·state·settlement_revision·processed_count·settled_at을 가진다.\n점수 목록 행은 `rank`, `player_id`, `score`, `version`, `reached_at`이다.\n정산 결과 행은 `rank`, `player_id`, `score`, `mail_ids`, `created_at`이다.\n정산 응답은 `season_id`, `settlement_revision`, `processed_count`, `processed_in_batch`, `issued_mail_count`, `done`이다.\n\n게임 prefix는 `/api/v1/game/leaderboards`다. 보드·시즌·점수 목록과 시즌 상세는 같은 GET 경로를 사용한다.\n게임의 `GET /{board}/seasons/{season}/me`는 자기 `{entry: 행 또는 null}`를 반환한다.\n자기 행에는 정산한 `reward_mail_ids`를 추가한다. 다른 유저의 우편 ID는 게임 목록에 제공하지 않는다.\n게임의 점수 변경·정산 경로는 제공하지 않는다. 게임 조회에는 기존 인증·프로젝트·환경·점검·최소 버전 제한을 적용한다.\n관리·게임 랭킹은 모두 `no-store`다. 큰 본문은 기존 16KiB 상한을 유지한다.\n\n## 저장과 검증\n\nDB6에 보드·시즌·점수·정산 결과·명령 결과를 추가한다. 기존 DB5의 자료와 참조를 보존한다.\n점수 정렬 인덱스와 50명씩의 정산으로 응답·쓰기를 제한한다. 순위 계산에 필요한 앞선 행 수 세기는 자료량에 따라 늘어난다.\n운영 규모의 캐시·집계 최적화와 기존 후기 지연의 원인 확인은 D02에서 검증한다.\n검사는 역할·환경·기간 경계·동점·점수 CAS·중복 요청·정산 경합·51명·우편 실패·감사 실패·수령 한 번을 포함한다.\n초 단위 도달 시각이 같으면 UUID로 순서를 결정한다. 더 높은 시간 정밀도를 제공한다고 주장하지 않는다.",filtered:!1,sourceHash:"276f082b17e5975830f83f817a5e6ea7f42d2bd8b4e02d2b6643fc8c28124aa4"},{id:"docs-specs-operations-md",title:"이벤트·점검·클라이언트 버전 계약",path:"docs/specs/OPERATIONS.md",category:"기능 명세",status:"구현 범위별 참조",body:'# 이벤트·점검·클라이언트 버전 계약\n\n기준일: 2026-11-07. 작업 원본은 TODO E02다. 기존 게시·권한·저장·경제 계약을 유지한다.\n이번 범위는 운영 이벤트 일정, 접속 점검, 최소·권장 클라이언트 버전이다. 실제 외부 발송과 배포는 하지 않는다.\n\n## 환경별 접속 정책\n\n관리 prefix는 `/api/v1/admin/projects/{project}/{environment}`다.\n`GET /policy`는 아래 필드와 `revision`을 반환한다. 설정이 없으면 revision 0과 기본값을 반환한다.\n`PUT /policy`는 같은 필드에 `expected_revision`, `reason`을 추가한다. owner·editor만 실행한다.\n\n```json\n{\n  "maintenance_enabled": false,\n  "maintenance_message": "",\n  "maintenance_starts_at": null,\n  "maintenance_ends_at": null,\n  "minimum_version": "0.0.0",\n  "recommended_version": "0.0.0",\n  "update_url": ""\n}\n```\n\n버전은 선행 0 없는 `major.minor.patch`이며 각 부분은 u32다. prerelease·build 표기는 이번 계약에서 거부한다.\n버전 비교는 숫자 세 부분의 순서다. 최소 버전은 권장 버전을 넘을 수 없다.\n기본값보다 높은 최소·권장 버전에는 업데이트 주소를 요구한다. HTTPS 또는 loopback HTTP 주소만 허용한다.\n점검을 켜면 안내 1–1000자와 시작·종료 시각이 필요하다. 시각은 UTC Unix 초이며 `0 <= 시작 < 종료 <= 9007199254740991`이다.\n점검은 `시작 <= 현재 < 종료`일 때만 활성이다. 기본 정책은 점검 없음·버전 제한 없음이다.\n변경 사유는 1–500자다. 정책과 감사는 같은 거래에서 저장한다. 기대 버전이 다르면 409다.\n\n## 부트 조회와 실제 접근 제한\n\n`GET /api/v1/game/{project}/{environment}/bootstrap?client_version=1.2.3`는 공개 부트 조회다.\n응답은 `project_id`, `environment`, `policy_revision`, `maintenance_active`, `maintenance_message`, `version_status`, `minimum_version`, `recommended_version`, `update_url`이다.\n`version_status`는 `required`, `recommended`, `supported` 중 하나다. 점검 중에도 부트 조회는 가능하다.\n없는 환경은 404다. 잘못된 버전이나 알 수 없는 query는 422다. 토큰·비밀·관리 사유는 반환하지 않는다.\n\n점검 중에는 게스트 생성·로그인·게임 데이터 조회·저장·보상 수령을 503 `maintenance`로 거부한다.\n최소 버전을 설정한 환경은 게임 API의 `X-Client-Version`을 검사한다. 누락·미달은 426 `update_required`다.\n명시한 버전 형식이 틀리면 422다. 기본 최소 버전 0.0.0은 헤더 없는 기존 호출을 허용한다.\n게임 세션 종료·갱신은 점검과 버전 제한 중에도 허용한다. 관리자 API는 이 제한을 받지 않는다.\n부트 응답만 믿지 않고 실제 게임 경로에서 서버가 같은 정책을 집행한다.\n\n## 운영 이벤트\n\n이벤트는 같은 프로젝트·환경의 공지 콘텐츠 ID를 참조한다. 게임에는 공지의 현재 게시본만 제공한다.\n이벤트 자체에는 `id`, `key`, `content_id`, `starts_at`, `ends_at`, `enabled`, `revision`이 있다.\n키와 시각의 형식은 기존 콘텐츠 키·위 점검 시각 규칙을 따른다. 신규 이벤트는 비활성으로 생성한다.\n\n- `GET /events?cursor=...`: 관리자 목록 50개와 다음 커서.\n- `POST /events`: `key`, `content_id`, `starts_at`, `ends_at`, `reason`으로 생성한다.\n- `PUT /events/{id}`: `expected_revision`, `content_id`, `starts_at`, `ends_at`, `enabled`, `reason`으로 변경한다. 키는 불변이다.\n- `GET /api/v1/game/events?locale=ko&cursor=...`: 세션 범위에서 현재 활성인 이벤트와 게시된 공지 본문을 반환한다.\n\n활성 조건은 `enabled && starts_at <= now && now < ends_at`이다. 공지가 미게시거나 언어가 다르면 반환하지 않는다.\n이벤트 변경은 운영 설정 변경이다. 저장 즉시 일정·활성 상태에 반영되며 감사에 변경 결과를 남긴다.\nviewer는 조회만 허용한다. 다른 환경의 콘텐츠 참조와 이벤트 변경은 거부한다.\n같은 기대 버전의 동시 수정은 한 건만 성공한다. 감사 실패는 설정·이벤트 변경도 취소한다.\n\n## 구현과 검증 경계\n\nDB 버전 4에 정책·이벤트 테이블을 추가한다. 기존 콘텐츠 테이블을 재작성하지 않는다.\nRust 구현은 `server/src/operations.rs`, 새 검사는 `server/tests/operations.rs`가 맡는다.\nReact 화면은 `console/src/Operations.tsx`가 맡는다. 기존 콘솔 구조·Button·아이콘과 API 기한·취소를 재사용한다.\n검사는 정책 CAS·감사 실패·실제 경로 거부·시간 경계·버전 숫자 비교·역할·환경·이벤트 게시본 격리를 포함한다.',filtered:!0,sourceHash:"f8de75807e8d9bdc3b0839074966b133cc86d39d0ff167bd84db213f66be1287"},{id:"platform",title:"내부 게임 백엔드 플랫폼 설계",path:"docs/specs/PLATFORM.md",category:"기능 명세",status:"구현 범위별 참조",body:`# 내부 게임 백엔드 플랫폼 설계

## 최신 범위 — 2026-11-10

현재 우선 대상은 **Rust 기반 팀 내부용 관리 서버**다. 프로젝트·환경·권한·유저/데이터·콘텐츠/경제·감사 등 내부 관리 흐름과 필요한 안정성·복구를 우선한다.
외부 고객의 문의 접수·답변·처리 기능은 **현 단계 고려 범위 밖**이다. 문의 정책 결정과 support 구현·인계는 다른 내부 관리 작업의 선행 조건이 아니다. 기존 문의 스펙과 조사 결과는 이력으로 보존하며 완료로 체크하지 않는다.
초기 MSA·별도 Gateway·gRPC 방향이 취소된 것으로 해석하지 않는다. 현재 로컬 단일 프로세스 구현과 장기 구조 선택을 구분한다.
기존 외부 연동·실시간 기능은 구현 이력/후속 요구로 보존한다. 이 지시만으로 모두 취소하거나 현재 내부 관리 서버의 필수 선행 조건으로 확대하지 않는다.

이 문서는 자체 설계다. 뒤끝 조사와 자체 구현의 실행 증거를 구분한다.
사용자는 전체 구현과 독립 서버 작업의 계속 진행을 지시했다. 관리 UI는 기능 우선으로 연결하고 이후 별도로 리팩터링한다.

## 목적과 제공 순서 — A01

내부 개발자와 운영자가 여러 게임의 계정·데이터·콘텐츠·운영 상태를 관리한다.
관리 사이트부터 구현한다. 첫 소비 게임은 Escape Ball이며 연결은 후속 단계다.
아래 P1–P9는 기존 전체 기능 대응표를 보존한다. 현재 우선 범위와 문의 제외 여부는 위 최신 범위를 따른다.
작업 상태와 다음 행동은 TODO 한 곳에 기록한다. 이 표는 요구사항 대응표다.

| 단계 | 조사 기능과 근거 | 사이트와 Rust 서버의 산출물 | 제공 전 검사 | TODO |
| --- | --- | --- | --- | --- |
| P1 관리 기반 | 프로젝트·환경·키·관리자·역할. 핵심 C01, 운영 2–4 | 로그인, 프로젝트 생성·선택, 환경, 권한 집행, 감사 | 다른 프로젝트·환경 거부, viewer 변경 거부, 세션 만료·폐기 | A01–A07, B01·B02·B07, C02, D04 |
| P2 계정과 데이터 | C02–C20: 커스텀·게스트·소셜 전환, 세션, 닉네임, 제재·탈퇴, 캐릭터, 스키마·검색·트랜잭션·백업·세이브 | 유저 검색·상세, 버전 저장, 테이블 정책, 계정 수명, SDK 계약 | 소유권, 동시 저장, 재전달, 재시작, 삭제·복구 | B03–B06, C01·C03·C05·C06, D03 |
| P3 콘텐츠와 경제 | C21–C23·C26–C29, 운영 8·10·19: 차트·캐시·확률, 우편·쿠폰, 공지·이벤트·점검·버전 | 작성·검증·게시·되돌리기, 보상 정의, 원장, 수령, 예약 | 게시 버전, 추첨과 차감의 원자성, 중복 지급·만료·중간 실패 | E01·E02, C04·C06 |
| P4 경쟁과 소셜 | C24·C25·C30–C32, 운영 19: 랭킹·시즌·정산, 친구·차단·길드·그룹·쪽지·유저 검색·랜덤 조회 | 시즌 운영, 관계 상태, 길드 권한·재화, 그룹 정책 | 동점·시즌 경계·중복 정산, 관계 경합·정원·차단 | E03, C04 |
| P5 내부 운영과 실행 (외부 고객 문의는 현재 제외) | 운영 5–7·11–13: 문의·신고·약관·로그·통계·퍼널·사용량, 펑션·예약 | 처리 이력, 집계, Rust 명령 실행·버전·권한, 예약·취소·재시도 | 개인정보와 보관, 집계 지연, 임대 만료·중복 실행·실패 복구 | E07·E08, D01–D04 |
| P6 외부 연동 | 운영 9·14–16: 푸시, 영수증, 구매 복구, 환불, 웹숍 | 기기·거래 귀속, 검증·지급 분리, 작업함, 서명 확인, 재처리 | 중복·역순 통지, 검증 뒤 종료, 공급자 실패. 실제 발송·결제는 별도 승인 | E09, F01·F02 |
| P7 채팅 | 실시간 3: 채널·그룹·귓속말·번역·금칙어·신고·제재 | Rust 연결 서버와 운영 정책, 메시지 보관 | 인증·입장·크기·빈도·정원·재접속·정리 | E04, D02 |
| P8 매치와 방 | 실시간 2: 매칭 카드·점수·시간·방·결과 | Rust 매칭 큐, 방 소유권, 취소·입장·경기 기록 | 중복 입장·이탈·타임아웃·재접속·소유 프로세스 종료 | E05, D02 |
| P9 월드 | 실시간 4: 빌드·배치·테이블·객체·파티·씬 | Rust 권위 서버, 객체 수명·동기화·복구와 운영 화면 | 판정·세대·과부하·재접속·장애·부하 | E06, D02·D03 |

근거: [핵심 카탈로그](../../study/thebackend/01_CORE_FEATURES.md), [운영](../../study/thebackend/02_OPERATIONS_INTEGRATIONS.md), [실시간](../../study/thebackend/03_REALTIME.md).
구형 Rank·URank, Social.Post, TBC와 현행 기능의 책임은 대응한다. 원본 SDK의 메서드·응답까지 복제하지 않는다.
뒤끝 바이너리 SDK 호환, 원본 URL 호환, 원본 인프라 복제는 제공 목표에 포함하지 않는다.
실제 발송·결제·유료 활성화·외부 배포·자동 커밋은 이번 실행 권한에 포함하지 않는다.
StageOS Config는 제작 데이터다. Firebase Remote Config로 바꾸지 않는다.
MinbWebKit·게임·Android의 미검증 외부 설정은 P1·P2 서버 개발을 막지 않는다.

## 기술과 대안 — A02

백엔드의 HTTP·업무 규칙·작업 실행·실시간 처리는 Rust다. 웹 콘솔은 React와 TypeScript다.
\`lucid cn\`은 shadcn/ui와 Lucide 아이콘으로 잠정 해석한다.

- 선택: Axum 0.8 계열, Tokio 1, rusqlite 0.32.1, SQLite WAL. 버전은 lockfile로 고정한다.
- 첫 로컬 구성: Rust 프로세스 하나, 파일 DB 하나, Vite 개발 서버 하나. 외부 계정 없이 검사한다.
- UI 후보: React 19, Vite, Tailwind CSS, shadcn/ui, Lucide. 선택한 버전과 실제 설치 결과는 실행 기록에 남긴다.
- PostgreSQL + SQLx: 다중 서버와 독립 작업 실행기에서 공유 DB가 필요할 때 채택할 대안이다.
- Actix Web + PostgreSQL: 가능한 대안이지만 현재 필요한 HTTP·상태·Tower 기능은 Axum으로 제공한다.
- 마이크로서비스·Redis·메시지 브로커는 P1에 추가하지 않는다. P5·P7–P9의 실행 모델에서 필요를 다시 판단한다.

SQLite는 동시 쓰기 한 개가 한계다. 실행 스레드에서 동기 DB 작업을 하지 않는다.
DB 작업은 \`spawn_blocking\`에서 실행하고, 동시 진입·본문·목록 크기·busy 대기를 제한한다.
운영 DB 선택과 배포 대상은 D01의 워크로드·복구 목표를 확인한 뒤 확정한다. 외부 배포는 하지 않는다.
로컬 도구 확인: Rust 1.91.1, Cargo 1.91.1, Node 24.3.0, npm 11.11.0. Docker CLI는 있으나 데몬은 연결되지 않았다.

공식 확인: [Axum](https://docs.rs/axum/0.8.9/axum/), [rusqlite](https://docs.rs/rusqlite/0.32.1/rusqlite/), [SQLx](https://docs.rs/sqlx/latest/sqlx/).
Axum 문서에서 Tokio·State·Tower·JSON 지원을 확인했다. rusqlite 문서에서 바인딩과 연결 API를 확인했다.
[Vite](https://vite.dev/guide/)는 Node 20.19+ 또는 22.12+를 요구한다. [shadcn Vite 설치](https://ui.shadcn.com/docs/installation/vite)는 기존 프로젝트 연결을 제공한다.
문서는 연결된 Chrome으로 확인했다. 최신 버전이라는 이유만으로 설치하지 않고 실제 컴파일 호환성을 검사한다.

## 첫 실행 단위 — A03–A05

첫 실행은 P1과 P2의 세로 흐름이다. 모든 후속 기능의 완성을 뜻하지 않는다.
관리자는 로그인하고 프로젝트·환경·유저·진행·감사를 조회한다. owner는 프로젝트를 만들고 역할을 지정한다.
게임 유저는 게스트 자격을 발급받고, 세션을 시작해 자기 진행을 저장한다.

### 주체와 권한

\`admin_id\`는 전역 운영자다. \`player_id\`는 프로젝트·환경에 귀속한다. 설치 UUID는 인증 증명이 아니다.
기본 환경은 \`development\`와 \`production\`이다. 환경마다 유저·세션·저장·감사를 분리한다.
owner는 전역 프로젝트 생성과 역할 부여를 실행한다. editor는 허용 환경에서 운영 수정, viewer는 조회만 실행한다.
모든 보호 API가 서버에서 권한을 검사한다. 없는 대상과 접근 불가 대상의 응답은 타인의 식별자를 노출하지 않는다.
관리자 비밀번호는 Argon2 해시다. 부트스트랩은 로컬 CLI로만 실행하며 HTTP 자동 가입은 제공하지 않는다.
게임·관리자 세션은 HS256 JWT로 발급하고 DB에는 토큰 해시만 저장한다. 게스트 자격은 무작위이며 해시만 저장한다. 비밀과 토큰은 로그에 남기지 않는다.
2026-11-10의 [JWT 인증·인가 계약](JWT_AUTH.md)이 현재 토큰 형식·서버 설정·이전 및 SDK 연동 기준이다.
관리 세션은 8시간, 게임 세션은 1시간이다. 만료·폐기를 매 요청에서 확인한다.
관리 웹 세션은 HttpOnly·SameSite=Strict 쿠키다. 운영 TLS에서는 Secure를 요구한다.
쿠키 로그인·쿠키 인증 변경 요청은 허용 Origin을 확인한다. 명시 Bearer 로그인·API 호출은 별도 전송 계약을 따른다. 개발 프록시와 서버를 같은 origin으로 사용한다.
게스트 자격을 잃으면 자동 복구하지 않는다. 소셜 연결·복구·계정 병합은 P2 후속 계약으로 분리한다.

### 진행과 실패

첫 검사용 진행은 \`schema_version: 1\`, \`stage: 1..1000000\`, \`intro_seen: boolean\`만 받는다.
이는 Escape Ball의 실제 필드 매핑을 확정하지 않는다. A04 전체는 소비 게임 연결 계약을 마칠 때 닫는다.
재화·아이템·구매 기록·기기 설정을 이 저장으로 지급하거나 덮어쓰지 않는다.
저장은 \`expected_version\`과 \`request_id\`를 요구한다. 최초 버전은 0이다.
같은 요청 ID와 같은 입력은 최초 응답을 반환한다. 다른 입력은 \`409 idempotency_conflict\`다.
같은 이전 버전의 동시 쓰기는 한 건만 성공한다. 다른 요청은 \`409 version_conflict\`다.
상태 변경·재전달 결과·감사 기록은 같은 트랜잭션으로 저장한다. 감사 실패도 전체 저장을 취소한다.
재시작 뒤에도 같은 요청의 결과를 보존한다. 요청 결과 보관은 첫 로컬 단계에서 자동 삭제하지 않는다.
관리자 수정은 사유를 요구한다. viewer는 직접 API로도 수정하지 못한다.
네트워크 실패를 빈 저장으로 해석하지 않는다. SDK는 충돌 때 최신 상태를 가져오고 자동 덮어쓰기를 하지 않는다.
계정 전환은 진행 중 요청을 취소하고 이전 응답을 적용하지 않는다. 로컬 초기화는 서버 삭제를 뜻하지 않는다.
MinbWebKit의 캐시·동기 저장·flush·IAP 확정 순서를 보존한다. 이번 단계에서는 다른 저장소를 수정하지 않는다.

### HTTP 계약

모든 경로는 \`/api/v1\` 아래에 둔다. JSON의 알 수 없는 필드는 거부한다.
오류는 \`application/problem+json\`의 \`type\`, \`title\`, \`status\`, \`code\`로 반환한다. 내부 DB 오류는 노출하지 않는다.
본문은 16 KiB, 목록은 최대 50개, 서버 DB 대기는 3초로 제한한다. 클라이언트 기한은 10초다.
게임 인증은 \`Authorization: Bearer <JWT>\`이다. 게임 세션으로 관리 API를 호출할 수 없다.

| API | 입력 | 성공 | 권한·실패 |
| --- | --- | --- | --- |
| \`POST /admin/login\` | username, password | 세션 쿠키, 관리자 정보 | 잘못된 자격 401 |
| \`POST /admin/logout\`, \`GET /admin/me\` | 쿠키 | 204, 관리자 정보 | 만료·폐기 401 |
| \`GET/POST /admin/projects\` | 생성 시 name | 접근 가능한 프로젝트, 새 프로젝트와 환경 | 생성은 owner |
| \`GET /admin/projects/{p}/environments\` | 프로젝트 | 허용 환경과 역할 | 프로젝트 권한 |
| \`GET /admin/projects/{p}/{e}/players\` | cursor 선택 | ID 순 최대 50명과 다음 커서 | 환경 조회 |
| \`GET/PUT /admin/projects/{p}/{e}/players/{u}/progress\` | 수정 시 저장 입력과 reason | 상태와 version | 조회·수정 권한 분리 |
| \`GET /admin/projects/{p}/{e}/audit\` | cursor 선택 | 최신 50개와 다음 커서 | 환경 조회 |
| \`POST /game/{p}/{e}/guests\` | 빈 JSON | player_id, credential | 존재하는 환경, 등록 제한 |
| \`POST /game/{p}/{e}/sessions\` | player_id, credential | token, expires_at | 자격·범위 검사 |
| \`DELETE /game/session\`, \`POST /game/session/refresh\` | bearer | 204, 교체 세션 | 이전 토큰 폐기 |
| \`GET /game/me\`, \`GET/PUT /game/progress\` | bearer, 저장 입력 | 프로필, 진행과 version | 자기 범위만 허용 |

관리 역할 부여와 부트스트랩의 명령·실행 방법은 서버 실행 문서에 기록한다.
OpenAPI의 기계 판독 계약과 SDK 공개 타입은 A05에서 실제 구현에 대조한다. 위 표만으로 A05 완료를 주장하지 않는다.

## 관리 UI 검토안 — A06

초기 승인본은 없었다. [검토용 화면](../mockups/index.html)을 제시한 뒤 사용자 결정을 받았다.
사용자는 기능 동작을 우선하고 UI는 나중에 리팩터링하라고 지시했다. 현재 구조로 단순하게 구현한다.
후보는 밝은 중성 색, 좌측 업무 메뉴, 상단 프로젝트·환경 선택, 중앙 유저 표, 유저 상세 화면이다.
첫 메뉴는 프로젝트·유저·감사다. 후속 기능을 작동하는 메뉴처럼 표시하지 않는다.
조회자는 수정 동작이 없다. 편집자는 사유와 버전을 확인하고 저장한다.
로딩·빈 결과·권한 부족·오류·충돌 상태를 같은 구성에서 구분한다.
데스크톱 1440×900과 좁은 화면 390×844를 검토한다. 화면은 기능 흐름에 맞춰 구현한다. 이후 UI 리팩터링은 별도 변경 범위로 관리한다.
내부 검사 수치와 구현 정보를 제품 화면에 넣지 않는다. 시안의 예시 데이터는 검토 도구에서 표시한다.

## 검증과 운영 경계 — A07

파일 DB를 사용하는 HTTP 통합 검사로 권한·저장·재전달·감사·재시작을 확인한다.
DB 트리거로 감사 기록 실패를 주입하고 저장·요청 결과가 함께 취소되는지 검사한다.
두 동시 HTTP 요청으로 버전 경합을 검사한다. 토큰 폐기·다른 프로젝트·다른 환경·타인 접근을 직접 요청한다.
모든 검사와 명령에 기한을 둔다. 실행 뒤 서버·임시 DB·작업 핸들을 정리한다.
기존 실행 제품과 성능 기준값은 없다. 첫 측정은 기준 기록이며 기존 성능 유지의 증거로 부르지 않는다.
대표 입력·측정 환경·요청 수·응답 크기를 기록한다. 운영 부하·백업·복원·RPO·RTO는 D01–D03에서 따로 검증한다.
경제·실시간·외부 공급자 검사 없이 해당 기능을 제공 완료로 표시하지 않는다.`,filtered:!0,sourceHash:"a80679f53170ef0d189df3e3452a0c2b01c06b6044db41bcdc295a71f4bd24ab"},{id:"docs-specs-player-access-md",title:"유저 접근 차단 계약",path:"docs/specs/PLAYER_ACCESS.md",category:"기능 명세",status:"구현 범위별 참조",body:`# 유저 접근 차단 계약

기준일은 2026-11-07이다. 관리자가 유저의 게임 접근을 차단하거나 해제한다.
기간·사유·현재 권한·재전달·경합을 함께 처리한다. 기존 player와 게임 자료·관리자 업무는 유지한다.
TODO A03의 후속 단위다. 사용자의 기능 우선 구현 지시에 따라 기존 화면과 라이브러리를 재사용한다.

## 근거와 자체 선택

[원본 조사](../../study/thebackend/01_CORE_FEATURES.md)는 유저·디바이스 차단의 분리와 기간·사유·해제 이력·차단 유저 로그인403을 확인했다.
아래 기존 세션 집행·자동 만료·재전달 계약은 자체 선택이다. 정적 콘솔 선언을 실제 실행 근거로 취급하지 않는다.
디바이스 차단·일괄 등록·순위 삭제 옵션·계정 복구·탈퇴는 전체 목표의 후속 단위다.

## 관리자 API

경로는 \`/api/v1/admin/projects/{project}/{environment}/players/{player}/access\`다.
GET은 현재 read 권한, PUT은 현재 write 권한과 유저 범위를 먼저 검사한다. owner/editor만 수정하며 viewer는 조회할 수 있다.
다른 환경의 player는404다. 현재 권한 검사 뒤 재전달을 처리하며 actor는 관리자 세션에서만 만든다.
쿼리 문자열은422다. PUT은 추가 필드·누락·null·다른 타입을 거절한다. \`blocked_until\`의 명시적 null만 허용한다.

PUT 본문은 \`{request_id,expected_version,blocked,blocked_until,reason}\`다.

- \`request_id\`는 UUID 문자열이다. 기존 명령과 같은 원문 식별자 계약을 따른다.
- \`expected_version\`은 0부터 9,007,199,254,740,991까지의 정수다. 실제 현재 버전과 달라지면409 \`version_conflict\`다.
- \`blocked\`는 boolean이다. false이면 \`blocked_until\`은 null이어야 한다.
- \`blocked_until\`은 null 또는 0부터 9,007,199,254,740,991까지의 정수 UTC 초다. 1.0 같은 실수 표기도 거절한다.
- 새 차단의 종료 시각은 현재 서버 시각보다 뒤여야 한다. null은 무기한이다. 과거 종료 시각은422 \`invalid_blocked_until\`이다.
- \`reason\`은 공백을 제외한 내용이 있어야 하며 UTF-8 500바이트 이하다. 원문은 상태와 감사에 보관한다.

GET과 PUT 성공은200이며 \`{player_id,version,blocked,blocked_until,reason,updated_at}\`를 반환한다.
\`blocked\`는 해당 조회 시점의 실제 차단 여부다. 만료한 행은 false와 과거 종료 시각을 반환한다.
상태가 없는 player는 버전0·blocked false·나머지 null이다. 읽기나 만료 판정은 새 행·감사를 만들지 않는다.
명시적 해제는 버전을 올리고 행을 보존한다. 다른 관리자의 현재 변경을 덮어쓰지 않는다.
관리 화면은 마지막 조회 상태를 표시한다. 자동 만료의 서버 집행과 화면의 수동 최신 조회를 구분한다.

## 거래와 재전달

상태·requests 결과·감사는 같은 Immediate 거래로 확정한다. 감사 실패는 상태와 요청 기록까지 취소한다.
기존 \`(player_id,actor,request_id)\` 키와 \`operation:"player.access.update"\` canonical 입력을 사용한다.
같은 입력은 원래 결과를 반환하고 상태·버전·감사를 다시 바꾸지 않는다. 다른 입력이나 다른 작업은409 \`idempotency_conflict\`다.
시간 범위·타입 검사는 먼저 수행한다. 현재 시각의 미래 여부와 현재 버전 검사는 과거 성공 재전달 뒤에 수행한다.
따라서 종료 시각이 지난 성공 명령도 원래 결과를 재전달한다. 해제 뒤 옛 차단 명령을 다시 보내도 재차 차단하지 않는다.
PUT 재전달의 결과는 과거 응답이다. 화면은 성공 뒤 GET으로 현재 실제 상태를 읽는다.
버전 최댓값의 새 명령은409 \`version_exhausted\`다. 기존 성공 재전달은 계속 가능하다.

## 게임 집행

활성 차단은 저장된 blocked가 true이고, 종료 시각이 null이거나 \`blocked_until > now()\`인 경우다.
차단 상태를 세션 수명 동안 캐시하지 않는다. 준비 시각을 최종 거래의 검사 시각으로 재사용하지 않는다.

- 유효한 game bearer의 보호 API는403 \`player_blocked\`다. 콘텐츠의 ETag/304보다 먼저 집행한다.
- 게스트·커스텀 로그인과 refresh는 새 게임 세션 발급 직전에 검사한다. 틀린 자격은 기존401을 유지한다.
- refresh가 차단되면 기존 토큰 삭제와 활동 기록을 취소한다. 기존 유효 토큰은 남아야 한다.
- 게스트 전환은 KDF 전 준비와 최종 거래에서 검사한다. 계산 중 시작한 차단도 최종 확정을 막는다.
- 유효한 본인 토큰의 DELETE \`/game/session\`은 허용한다. 원래 만료·폐기 토큰의401은 유지한다.
- 관리자 인증·조회·수정·세션 폐기와 공개 bootstrap·신규 계정 생성은 기존 계약을 유지한다.
- 차단은 기존 토큰이나 게임 자료를 삭제하지 않는다. 해제·만료 뒤 아직 유효한 기존 토큰은 다시 사용할 수 있다.

writer 순서가 차단과 게임 변경의 순서를 정한다. 이미 시작한 Deferred 읽기의 이전 snapshot을 소급 취소하지 않는다.
차단과 함께 순위·길드 자격·마스터·재화·다른 유저를 변경하지 않는다. 새 계정 생성 방지는 디바이스 차단의 별도 경계다.

## 저장과 화면

DB21은 sparse \`player_access\` 테이블 하나를 추가한다. player PK와 players의 복합 scope 외래 키를 둔다.
필드는 player·프로젝트·환경·blocked·blocked_until·version·reason·updated_at이다. 기존 players 열과 세션 인덱스는 유지한다.
8슬롯·준비문 캐시·연결 재사용·WAL/FULL·기존 지연 로딩을 유지한다. 목록에 유저별 추가 요청을 만들지 않는다.
공통 집행 helper는 게임 공통 분기·게임 세션 발급·전환 인증의 세 경계에서만 호출한다.
공통 game 분기는 logout과 refresh를 제외한다. refresh는 발급 경계가 검사하며 실패 때 같은 거래를 취소한다.

유저 상세의 기존 진행 폼 아래에 접근 차단 panel을 붙인다. 기존 구성·문구·색상·간격은 유지한다.
현재 상태·종료 시각·버전·최근 사유를 조회한다. 수정 권한이 있을 때 차단 checkbox·종료 시각·사유·저장 버튼을 표시한다.
기존 \`TimeField\`·\`readTime\`을 재사용한다. 표현할 수 없는 큰 날짜는 기존 UTC 초 입력 방식으로 처리한다.
네트워크·5xx 실패는 같은 UUID/본문을 보존한다. 결과가 불명확한 동안 탐색·닉네임·세션 폐기를 잠근다.
관리자의 진행 수정은 접근 상태와 독립적이다. 기존 진행 폼의 조작과 저장 동작은 유지한다.
viewer는 상태와 최신 조회만 사용할 수 있다. 새 전체 화면이나 스타일 시스템은 추가하지 않는다.

## 완료 근거

입력·권한·scope·CAS·다른 작업의 UUID 충돌·감사 취소·재오픈·해제 뒤 옛 재전달을 검사한다.
게임 조회·저장·우편/재화·소셜·304·세션 발급/refresh·전환에서 집행을 확인한다. logout 예외도 검사한다.
종료 시각 경계와 실제 시간 만료, 차단 중 KDF·발급 경합의 최종 검사를 확인한다.
기존 자료·토큰 보존과 스키마 이전 실패 취소를 확인한다. 같은 자료로 전후 성능을 비교하고 미확인을 별도로 기록한다.
Chrome에서 실제 차단·해제·응답 유실 재시도·viewer와 기존 화면을 확인한다. 전체 플랫폼 완료로 확대하지 않는다.`,filtered:!0,sourceHash:"3063a565ac99343feac013454355ab93bda1cee99e5aded1e9fcb89074a0d0f0"},{id:"docs-specs-player-profile-md",title:"유저 닉네임과 정확 검색",path:"docs/specs/PLAYER_PROFILE.md",category:"기능 명세",status:"구현 범위별 참조",body:`# 유저 닉네임과 정확 검색

관리자는 유저의 닉네임을 조회·변경·해제하고 정확히 일치하는 이름으로 유저를 찾는다.
게임 유저도 자기 닉네임을 조회·변경·해제할 수 있다. 유저 ID와 진행 저장은 유지한다.
사용자의 기능 우선 지시에 따라 기존 유저 화면에 연결한다. 전체 A03·A04와 플랫폼 목표는 유지한다.

## 근거와 선택

[핵심 조사 C06](../../study/thebackend/01_CORE_FEATURES.md)와 [콘솔 조사 3절](../../study/thebackend/05_LIVE_CONSOLE_ANALYSIS.md)을 따른다.
원본에서 20자 저장을 관찰했다. 원본 Unicode 정규화·대소문자·동시 변경의 전체 계약은 미확인이다.
자체 닉네임은 Unicode 문자/숫자와 ASCII \`_\`·\`-\`만 허용한다. Rust char::is_alphanumeric을 사용한다.
길이는 Unicode scalar 1-20개다. 공백·제어문자·이모지와 허용 집합 밖의 결합 기호는 거절한다. 입력을 자동으로 자르거나 다듬지 않는다.
문자 허용의 기준은 Rust char::is_alphanumeric이다. U+0301은 거절하며 Alphabetic 속성인 U+0345는 허용한다. 모든 결합 기호를 거절한다고 보장하지 않는다.
동일 환경에서 같은 문자 배열의 이름은 한 명만 사용한다. 대소문자를 구분하며 Unicode 정규화는 하지 않는다.
이는 표시 이름이며 계정 복구·인증·게임 점수·가입 자격의 근거로 사용하지 않는다. 금칙어·예약어는 후속 운영 정책이다.

## DB16과 보존

player_profiles는 기존 players와 분리한다. player_id 기본키와 project_id·environment·nickname·version·updated_at을 가진다.
소속과 player_id의 복합 FK가 기존 players를 참조한다. 닉네임은 nullable TEXT다. version은 1..9007199254740991이다.
updated_at은 0..9007199254740991의 초 단위 정수다. 이름 길이와 버전의 DB CHECK를 둔다.
profile_nickname 부분 UNIQUE 인덱스는 (project_id,environment,nickname)이며 nickname IS NOT NULL에만 적용한다.
이전 시 기존 유저의 프로필 행을 채우지 않는다. 조회는 nickname:null·version:0·updated_at:null을 반환한다.
해제는 행을 지우지 않고 nickname:null과 증가한 버전을 기록한다. 재설정의 ABA를 막는다.
기존 유저·자격·세션·진행·소속·친구·길드·보상·과거 명령은 그대로 둔다. 새 계정도 프로필 행 없이 시작한다.

## API

관리 경로 앞에는 /api/v1/admin/projects/{project}/{environment}, 게임 경로 앞에는 /api/v1을 붙인다.

- GET/PUT /players/{player}/profile: 환경 권한과 유저 소속을 먼저 확인한다. 변경은 owner/editor만 허용한다.
- GET /players: 기존 세 필드·cursor·ID 순서 50명과 SQL 경로를 유지한다.
- GET /players/profiles: 같은 유저 목록에 nickname:null 또는 문자열을 추가한다. cursor·50명 규칙을 유지한다.
- GET /players/profiles?nickname={encoded}: 정확 검색이다. items는 0명 또는 1명이며 next_cursor:null이다. cursor와 함께 사용할 수 없다.
- GET/PUT /game/profile: 인증한 자기 유저만 처리한다. 기존 game/me의 네 필드는 유지한다.

프로필 응답은 player_id·nickname·version·updated_at이다. GET과 PUT은 모두 200이다.
PUT 관리 입력은 request_id·expected_version·nickname·reason이다. 게임 입력은 reason을 받지 않는다. null reason도 거절한다.
nickname은 필수다. null은 해제, 문자열은 설정이다. 빈 문자열과 필드 누락은 거절한다.
reason은 공백 아닌 내용이 있으며 500바이트 이하여야 한다. expected_version은 0..9007199254740991의 정수다.
request_id는 UUID로 확인하고 입력 문자열을 보존한다. 기존 진행 명령과 같이 서로 다른 UUID 표기는 서로 다른 요청 문자열이다.
같은 문자열을 재시도하면 같은 결과를 반환한다. 알 수 없는 입력·잘못된 타입은 422 invalid_input이다.
이름 규칙 위반은 422 invalid_nickname, 사유 위반은 422 reason_required다.
프로필 경로의 모든 query는 거절한다. 프로필 목록 query는 cursor 또는 nickname 하나만 받으며 중복·추가 키·잘못된 percent/UTF8를 거절한다.
이름 query는 512바이트 이하다. 결과가 없으면 빈 items이며 타인 환경의 유저를 반환하지 않는다.

기존 외부 Immediate 거래를 사용한다. access→player_in_scope→입력 검증→저장한 성공 확인→CAS→중복 이름→저장·명령·감사 순서다.
requests 테이블을 기존 actor·유저·요청 ID 범위로 재사용한다. 정규 입력에 operation:profile.update를 포함한다.
다른 진행 명령과 같은 ID를 재사용하면 idempotency_conflict다. 성공 재전달은 현재 이름·버전·중복 여부보다 먼저 처리한다.
같은 요청의 다른 입력은 409 idempotency_conflict, 기대 버전 불일치는 409 version_conflict다.
이름 중복은 409 nickname_exists다. 최대 버전에서 새 변경은 409 version_exhausted다. 옛 성공은 계속 반환한다.
실패는 프로필·명령·profile.updated 감사를 모두 취소한다. 감사 actor는 기존 admin:{id} 또는 player:{id}다.
관리 변경은 유저 활동을 기록하지 않는다. 게임 변경/재전달은 기존 공통 활동 기록 규칙을 따른다.
그룹 통합 중에도 프로필은 독립이다. 변경으로 소속·길드·점수·지갑을 갱신하지 않는다.
응답 no-store·본문16KiB·3초 DB 대기·8슬롯·연결/준비문 캐시·인증·Origin 검사를 유지한다.

## 관리 화면

콘솔은 프로필 목록을 사용해 기존 유저 표에 닉네임 열을 추가한다. 검색 조건으로 유저 ID와 닉네임을 선택한다.
ID는 기존 상세로 이동한다. 닉네임은 일치하는 목록을 표시한다. 초기화하면 전체 목록으로 돌아간다.
유저 상세에 프로필 조회·닉네임 설정/해제·변경 사유·버전·갱신 시각을 연결한다. 기존 진행 폼과 동작은 유지한다.
viewer는 프로필을 조회만 한다. 한 프로필 요청의 진행/불명 결과 동안 기존 전역 탐색 잠금을 사용한다.
같은 URL·직렬화한 입력·UUID를 보존하고 불명 결과는 같은 요청으로 재시도한다. 성공 뒤 GET으로 현재 상태를 표시한다.
scope와 유저가 바뀌면 조회·진행 중 작업을 정리한다. 상태·오류·확인 문구는 기존 패턴과 CSS를 재사용한다.

## 검사와 소유권

설정·해제·재설정·대소문자·환경/프로젝트 격리·viewer·게임 타인 입력·동시 동일 이름·동일 버전 경합을 확인한다.
동일 명령·다른 입력·진행 요청 ID 충돌·옛 성공·버전 소진·감사/활동 실패 취소·재오픈과 그룹 독립성을 확인한다.
실제 HTTP·Chrome의 검색/저장/해제/동일 재시도·SQL 인덱스와 기존 목록 전후 지연을 확인한다.
전체 반응형·운영 혼합 부하·다른 언어의 정규화·금칙어·계정 연결/복구·일반 데이터 관리는 후속 범위다.`,filtered:!0,sourceHash:"772be11e73bfb43b92dfa9e27c941c951e28f736f4c12fcd84011c3fa8a2f196"},{id:"docs-specs-player-session-revocation-md",title:"유저 게임 세션 전체 폐기",path:"docs/specs/PLAYER_SESSION_REVOCATION.md",category:"기능 명세",status:"구현 범위별 참조",body:`# 유저 게임 세션 전체 폐기

관리자는 선택한 환경의 유저에게 이미 발급한 게임 세션을 폐기할 수 있다. 계정 자격과 게임 자료는 보존한다.
사용자의 기능 우선 지시에 따라 기존 유저 상세의 컴포넌트·버튼·입력 형식을 따른다.

## API와 권한

\`POST /api/v1/admin/projects/{project}/{environment}/players/{player}/sessions/revoke\`

요청은 \`request_id\`와 \`reason\`만 받는다. 요청 ID는 UUID다. 사유는 공백만으로 구성할 수 없고 UTF8 기준 500바이트 이하여야 한다.
알 수 없는 필드·잘못된 형식은422, URL query는422 \`invalid_query\`다.
현재 관리자 인증과 환경 write 권한을 먼저 확인한다. viewer는403이다. 다른 환경·프로젝트의 유저는404다.
유효한 요청의 응답은200이며 \`player_id\`, \`revoked_sessions\`, \`revoked_at\`을 반환한다.
\`revoked_sessions\`는 실제 삭제한 저장 세션의 수다. 만료된 저장 세션도 포함한다. 대상이0개여도 성공이다.
\`revoked_at\`은 원래 명령을 처리한 서버 시각이다. 토큰·자격·개별 세션 정보는 반환하거나 감사에 넣지 않는다.

## 원자 처리와 재전달

기존 \`BEGIN IMMEDIATE\` 안에서 현재 권한·유저 범위를 확인한다.
\`requests\`의 유저·관리자 actor·요청 ID를 사용한다. canonical 입력에는 \`player.sessions.revoke\` 작업명을 포함한다.
같은 actor·요청 ID·입력을 재전달하면 원래 응답을 반환한다. 입력이 다르면409 \`idempotency_conflict\`다.
재전달 전에 새로 로그인한 세션은 지우지 않는다. 재전달에서도 현재 권한을 확인한다.
처음 처리할 때 \`kind='game' AND subject_id=player\`인 세션만 삭제한다.
삭제·요청 결과·\`player.sessions_revoked\` 감사는 같은 거래로 확정한다. 감사 실패 시 모두 취소한다.
actor는 기존 프로필의 \`admin:{id}\`를 따른다. 감사 대상은 유저 ID이며 필수 사유와 응답만 기록한다.

폐기는 계정 정지가 아니다. 기존 게스트 자격으로 다시 로그인할 수 있다.
로그인·refresh·폐기는 기존 write 거래 순서에 따른다. 폐기 전에 확정한 토큰은 이후401이다.
폐기 뒤 확정한 새 로그인은 유효하다. 이미 인증해 읽기를 시작한 요청을 소급 취소하지 않는다.
유저 프로필·진행·경제·관계·활동·원장·관리자 세션과 타 유저 세션은 변경하지 않는다.

## 저장과 성능

DB19는 \`sessions(kind,subject_id)\` 인덱스 하나만 추가한다. 기존 테이블과 행은 유지한다.
새 DB와 DB18 복사본에서 적용하며 재오픈해도 중복 생성하지 않는다. 실패는 해당 migration을 취소한다.
기존 token PK·만료 인덱스·준비문 캐시·8슬롯·연결 재사용·WAL/FULL을 유지한다.
새 인덱스의 대상 DELETE 비용과 기존 로그인·refresh·token 인증·진행 읽기/쓰기의 전후 지연을 확인한다.
전체 성능 동등성과 운영 혼합 부하는 별도 검증으로 남긴다.

## 콘솔과 완료 조건

유저 상세에 사유 입력과 \`게임 세션 모두 폐기\` 버튼을 추가한다. viewer에게 쓰기 폼을 노출하지 않는다.
성공 시 삭제 개수를 알린다. 서버 오류나 전송 결과 미확인은 동일 명령 재시도를 제공한다.
미확인 명령의 path·body·UUID를 보존한다. 범위 전환·중복 실행을 기존 busy·AbortController 방식으로 막는다.
프로필 변경과 세션 명령은 서로 잠그되 기존 닉네임·진행 화면의 구성을 유지한다.

권한·범위·여러 토큰·0개·타 유저/관리자 보존·재전달·재시작·감사 실패 취소·입력 경계를 검사한다.
폐기 토큰의 일반 API와 ETag 요청이401인지 확인한다. 로그인·refresh 경합의 거래 순서도 검사한다.
Rust 전체·클라이언트·실제 HTTP·Chrome·DB 보존·전후 지연의 결과를 구분해 기록한다.`,filtered:!0,sourceHash:"fd8a0e0138e77cfb558b8f9e8d4df91de0746a015806fe02a2be63bcf63741e2"},{id:"probability",title:"확률표와 서버 추첨",path:"docs/specs/PROBABILITY.md",category:"기능 명세",status:"구현 범위별 참조",body:"# 확률표와 서버 추첨\n\nE02의 확률표와 서버 추첨을 구현한다. E01의 비용 차감과 보상 지급은 같은 거래에서 처리한다.\n전체 플랫폼의 범위와 후속 단계는 [PLATFORM.md](PLATFORM.md)를 유지한다.\n사용자는 기능 우선 구현을 지정했다. 기존 콘솔의 메뉴·폼·게시 편집기를 재사용한다.\n\n## 계약\n\n- 콘텐츠 종류 `probability`를 추가한다. 작성본·불변 버전·게시·되돌리기·게시 중단은 기존 콘텐츠 계약을 따른다.\n- 게임은 `GET /game/content/probability`로 게시한 확률표를 조회한다. 기존 언어·커서·인증·운영 정책을 적용한다.\n- 정의는 `cost_asset_id`, `cost_amount`, `entries`를 가진다. 무료는 `null`과 `0`의 조합이다.\n- 유료 비용과 각 보상 수량은 정수 `1..=1000000000`이다. 자산은 같은 프로젝트·환경에 속해야 한다.\n- 항목은 1개 이상 100개 이하이며 `id`, `asset_id`, `amount`, `weight`를 가진다.\n- 항목 ID는 기존 `valid_key` 규칙을 따르고 표 안에서 유일하다. 가중치는 정수 `1..=1000000000`이다.\n- 정의와 추첨 요청은 알 수 없는 필드를 거부한다.\n- 기존 16KiB 요청 상한을 유지한다. 긴 ID를 사용한 100개 항목은 이 상한을 넘을 수 있다.\n\n`POST /game/probabilities/{content_id}/draw`는 게임 세션으로 호출한다.\n요청은 UUID `request_id`, 정수 `count` 1개 이상 100개 이하, 양수 `expected_publication_version`을 가진다.\n서버는 현재 게시한 불변 버전으로 추첨한다. 새 요청의 게시 번호가 다르면 `409`를 반환한다.\n점검과 최소 버전 정책은 다른 게임 API와 동일하게 집행한다.\n\n## 거래와 중복 요청\n\n서버는 OS 난수로 가중치를 선택한다. 나머지 편향을 제거하고 난수 실패 시 `503`을 반환한다.\n비용 전액을 먼저 차감한다. 이번 보상으로 이번 비용을 충당할 수 없다.\n같은 자산의 보상은 합산하며 잔액은 `0..=9007199254740991`을 유지한다.\n차감·지급·원장·결과·감사는 하나의 SQLite 쓰기 거래에서 성공하거나 함께 취소한다.\n\n업무 ID는 `draw:<정규화한 UUID>`다. 같은 유저·ID·입력은 저장한 동일 결과를 반환한다.\nID가 같고 입력이 다르면 `409 idempotency_conflict`를 반환한다.\n완료한 요청의 재시도는 게시 변경이나 중단 뒤에도 원래 결과를 반환한다. 운영 정책과 인증 검사는 계속 적용한다.\n응답에는 요청·업무·콘텐츠 ID, 게시 번호, 버전, 횟수, 비용, 개별 결과, 최종 잔액, 생성 시각을 담는다.\n\n## 저장과 이전\n\nDB 버전 5는 원장에 `line_index`를 추가한다. 기존 행은 `0`을 사용한다.\n원장의 중복 제한은 `(player_id,business_id,line_index)`다. 비용은 `0`, 보상은 `1`부터 기록한다.\n기존 원장 ID·결과·게시 버전·이벤트의 참조를 보존한다.\n테이블 재생성은 [SQLite 공식 이전 절차](https://www.sqlite.org/lang_altertable.html#otheralter)를 따른다.\n거래 밖에서 외래키 검사를 끈 뒤 새 테이블·복사·교체·인덱스 복원을 진행한다.\n커밋 전에 `foreign_key_check`를 검사한다. 실패하면 취소하고 외래키 검사를 다시 켠다.\n\n## 완료 조건과 한계\n\n동일 요청 경쟁, 잔액 부족 경쟁, 게시 번호 충돌, 권한·환경 경계와 보상 실패 취소를 검사한다.\n버전 4 데이터를 보존한 이전과 기존 지급·우편·쿠폰의 회귀를 검사한다.\nChrome에서 작성·게시를 확인하고 실제 HTTP 추첨과 원장을 대조한다.\n실제 결제·외부 발송·천장·보장 추첨·예약은 이번 계약에 포함하지 않는다. 관련 후속 범위는 TODO에 남긴다.",filtered:!1,sourceHash:"ed4f20fea0700b358de3b3f8f937322d800d05794f4b419514ee48bc9ec11e92"},{id:"docs-specs-remaining-performance-md",title:"응답 지연 원인과 운영 부하 스펙",path:"docs/specs/REMAINING_PERFORMANCE.md",category:"기능 명세",status:"후속 계획·미완료",body:`# 응답 지연 원인과 운영 부하 스펙

## 최신 인수 기준 — 2026-11-10

팀 내부용 관리 서버를 우선한다. 외부 고객 문의는 현재 범위 밖이므로 아래 과거 support 선행·정책 대기는 적용하지 않는다. 실제 제품 파일의 최신 소유권·편집 종료·소스 digest를 대조해 인수한다. 정책이 미정인 실제 영구 삭제는 여전히 실행하지 않는다.
복구·자료 운영·로컬 지연·관리 UI 중 내부 관리에 필요한 작업은 독립적으로 준비할 수 있다. 외부 공급자·실기기 연결이 모두 끝날 때까지 내부 관리 작업을 막지 않는다. 운영 부하/SLO의 배포 이후 원칙과 기존 검증 한계는 유지한다.

기준일은 2026-11-08이다. 원본 작업 목록은 TODO.md이며 이 문서는 해당 작업의 계약이다.
현재 기준은 DB22·소스127개·서버424개 검사 근거·최신 HTTP655건이다. 이는 전체 플랫폼 완료가 아니다.
기존 사용자/다른 채팅 변경, 조사·README·references·study/nakama를 보존한다. 커밋·push·배포·실제 발송·결제는 하지 않는다.
백엔드는 Rust, 관리 콘솔은 React다. 기존 승인 UI·기능·성능 보호를 유지한다.

## 범위와 계약

ERR-08/10/11/12/14/15/16/18/19/20을 유지한다. 고정 입력·실행본 digest·OS/CPU/메모리·동시성·워밍업·표본/순서·지연/오류·DB 경합·큐/슬롯을 정의한다. 실제 게임 규모가 없으면 가정으로 표시한다. HTTP 경로를 DB·pool·spawn_blocking·네트워크로 분리하고 한 번에 한 원인을 바꾼다. 기존 캐시16·8슬롯·WAL/FULL·기한을 끄거나 기준을 낮춰 통과시키지 않는다.

## 소유권과 선행 조건

관련 TODO는 D01·D02다.
허용 편집 대상은 scripts/performance/ 및 이 작업의 검증 산출물다.
독립적인 원인 분석과 격리 측정부터 시작한다. 제품 코드 수정은 support·withdrawal-purge 편집 종료 뒤 해당 파일 소유권을 인수한다. 다른 검사 실행과 겹치는 부하는 실행하지 않는다.
공유 파일의 소유권은 [통합 계획](../plans/2026-11-08-remaining-workstreams.md)을 따른다.

## 완료 조건

동일 입력/환경의 전후 비교, bounded stress·자원 정리, 회귀 원인과 개선의 재현, 성능 보호 유지, 미확인 항목과 기능 실패/자원 실패를 구분한 기록을 남긴다. 목표 SLO의 미확정은 후보와 승인 필요를 분리한다.
실행 명령·로그·입력/실행본 digest와 미실행 항목을 남긴다. 실패나 외부 입력 대기를 완료로 표시하지 않는다.`,filtered:!1,sourceHash:"8d0d48442a401937a072a6bb0e25154b1db97d29c7ee77c467fad41ab6a81b18"},{id:"docs-specs-remaining-recovery-integration-md",title:"백업·복원·장애와 게임·외부 연결 스펙",path:"docs/specs/REMAINING_RECOVERY_INTEGRATION.md",category:"기능 명세",status:"후속 계획·미완료",body:`# 백업·복원·장애와 게임·외부 연결 스펙

## 최신 인수 기준 — 2026-11-10

팀 내부용 관리 서버를 우선한다. 외부 고객 문의는 현재 범위 밖이므로 아래 과거 support 선행·정책 대기는 적용하지 않는다. 실제 제품 파일의 최신 소유권·편집 종료·소스 digest를 대조해 인수한다. 정책이 미정인 실제 영구 삭제는 여전히 실행하지 않는다.
복구·자료 운영·로컬 지연·관리 UI 중 내부 관리에 필요한 작업은 독립적으로 준비할 수 있다. 외부 공급자·실기기 연결이 모두 끝날 때까지 내부 관리 작업을 막지 않는다. 운영 부하/SLO의 배포 이후 원칙과 기존 검증 한계는 유지한다.

기준일은 2026-11-08이다. 원본 작업 목록은 TODO.md이며 이 문서는 해당 작업의 계약이다.
현재 기준은 DB22·소스127개·서버424개 검사 근거·최신 HTTP655건이다. 이는 전체 플랫폼 완료가 아니다.
기존 사용자/다른 채팅 변경, 조사·README·references·study/nakama를 보존한다. 커밋·push·배포·실제 발송·결제는 하지 않는다.
백엔드는 Rust, 관리 콘솔은 React다. 기존 승인 UI·기능·성능 보호를 유지한다.

## 범위와 계약

1단계: ERR-17 온라인 backup 파일 열기 실패를 로그·권한·경로로 진단하고 새 DB 경로로 복원한다. 원본 덮어쓰기 금지. 2단계: 저장/응답 사이와 정산/지급/배치의 강제 종료·재전달 복구를 검증한다. 3단계: 플랫폼 TypeScript SDK→MinbWebKit→Escape Ball 저장/재개/계정 전환을 연결한다. 4단계: Firebase·푸시·스토어 구매/복구/환불·StageOS 제작 Config·Android APK/기기 매트릭스를 실행한다. 실제 발송·결제·외부 배포는 이번 승인에 포함하지 않는다.

## 소유권과 선행 조건

관련 TODO는 C06·D03·B05·B06·F01–F04다.
허용 편집 대상은 scripts/recovery/, integration/ 안의 플랫폼 측 코드·검사와 이 작업 문서다.
독립적인 백업/복원 설계·격리 fixture와 외부 설정 재고부터 진행한다. 공유 서버 파일은 support→withdrawal-purge→performance 인계 뒤 수정한다. 다른 게임 저장소는 읽기만 하며 별도 편집 인수 없이 수정하지 않는다.
공유 파일의 소유권은 [통합 계획](../plans/2026-11-08-remaining-workstreams.md)을 따른다.

## 완료 조건

백업 SHA·스키마·도메인행·quick/FK, 독립 복원 서버의 실제 API, 중복 지급/유실 방지, SDK 기한·취소·이전 저장 호환, 공급자 sandbox 증거·APK hash·실기기 결과를 남긴다. 설정 부족은 해당 단계만 미검증으로 남기고 독립 로컬 단계를 완료한다.
실행 명령·로그·입력/실행본 digest와 미실행 항목을 남긴다. 실패나 외부 입력 대기를 완료로 표시하지 않는다.`,filtered:!1,sourceHash:"ee797c89e10b64466c2e1b0f421af3c99ddf7b7022384610a285783a04dcf426"},{id:"docs-specs-remaining-support-md",title:"고객 문의 생성·조회·답변 스펙",path:"docs/specs/REMAINING_SUPPORT.md",category:"기능 명세",status:"현재 범위 밖",body:`# 고객 문의 생성·조회·답변 스펙

## 현재 상태 변경 — 2026-11-10

**OUT_OF_CURRENT_SCOPE.** 팀 내부용 관리 서버를 우선하며 외부 고객 문의의 접수·답변·처리는 현재 고려하지 않는다는 사용자 지시를 반영했다.

기준일은 2026-11-08이다. 원본 작업 목록은 TODO.md이며 이 문서는 해당 작업의 계약이다.
현재 기준은 DB22·소스127개·서버424개 검사 근거·최신 HTTP655건이다. 이는 전체 플랫폼 완료가 아니다.
기존 사용자/다른 채팅 변경, 조사·README·references·study/nakama를 보존한다. 커밋·push·배포·실제 발송·결제는 하지 않는다.
백엔드는 Rust, 관리 콘솔은 React다. 기존 승인 UI·기능·성능 보호를 유지한다.

## 범위와 계약

POST /game/support/tickets, GET 자기 목록·상세, 관리자 환경별 목록·상세·답변·닫기·재개를 연결한다. open/answered/closed는 자체 상태다. 제목200바이트·본문/답변4096바이트를 초기 후보로 두고 16KiB HTTP 제한과 JSON escaping을 함께 검증한다. 현재 권한·소유권을 먼저 검사하고 CAS·UUID 재전달·답변·감사를 한 거래로 저장한다. 본문은 일반 텍스트로 렌더링하며 감사에는 원문 대신 처리 메타데이터와 digest를 남긴다. 첨부·양식·신고는 후속 단위로 유지한다.

## 소유권과 선행 조건

관련 TODO는 E07다.
허용 편집 대상은 server/src/support.rs, support-schema.sql, server/tests/support*.rs, console/src/Support.tsx 및 지원 연결에 필요한 api.rs/lib.rs/store.rs/App.tsx다.
현재는 범위 밖이므로 제품 편집과 공유 검사를 인수하지 않는다. 아래 실행 절차는 재개 결정이 있을 때만 검토한다.
공유 파일의 소유권은 [통합 계획](../plans/2026-11-08-remaining-workstreams.md)을 따른다.

## 완료 조건

타인/다른 환경404, viewer 변경403, 같은 명령의 답변 중복 없음, 변경 본문409, 감사 실패 전체 취소, 동시 답변 CAS, 51개 keyset 페이지, 응답 유실 재시도와 최신 GET, Chrome owner/viewer 흐름을 검증한다.
실행 명령·로그·입력/실행본 digest와 미실행 항목을 남긴다. 실패나 외부 입력 대기를 완료로 표시하지 않는다.`,filtered:!0,sourceHash:"9bdbd2aa53f82cd837923ab6caf666de6d5743d9cdd31d9fe857f987d18b1df6"},{id:"docs-specs-remaining-ui-refactor-md",title:"기능 완료 이후 관리 콘솔 리팩터링 스펙",path:"docs/specs/REMAINING_UI_REFACTOR.md",category:"기능 명세",status:"후속 계획·미완료",body:`# 기능 완료 이후 관리 콘솔 리팩터링 스펙

## 최신 인수 기준 — 2026-11-10

팀 내부용 관리 서버를 우선한다. 외부 고객 문의는 현재 범위 밖이므로 아래 과거 support 선행·정책 대기는 적용하지 않는다. 실제 제품 파일의 최신 소유권·편집 종료·소스 digest를 대조해 인수한다. 정책이 미정인 실제 영구 삭제는 여전히 실행하지 않는다.
복구·자료 운영·로컬 지연·관리 UI 중 내부 관리에 필요한 작업은 독립적으로 준비할 수 있다. 외부 공급자·실기기 연결이 모두 끝날 때까지 내부 관리 작업을 막지 않는다. 운영 부하/SLO의 배포 이후 원칙과 기존 검증 한계는 유지한다.

기준일은 2026-11-08이다. 원본 작업 목록은 TODO.md이며 이 문서는 해당 작업의 계약이다.
현재 기준은 DB22·소스127개·서버424개 검사 근거·최신 HTTP655건이다. 이는 전체 플랫폼 완료가 아니다.
기존 사용자/다른 채팅 변경, 조사·README·references·study/nakama를 보존한다. 커밋·push·배포·실제 발송·결제는 하지 않는다.
백엔드는 Rust, 관리 콘솔은 React다. 기존 승인 UI·기능·성능 보호를 유지한다.

## 범위와 계약

기능 구현 후 별도 UI 리팩터링이라는 사용자 순서를 지킨다. 프로젝트/환경/권한, 요청 취소·중복 방지·같은 UUID 재시도·최신 GET·지연 로딩을 보존한다. 현재 UI를 기준으로 개선안과 변경 전후 상태를 검토 가능하게 제시한다. 새 배치/문구/스타일을 승인 없이 확정하지 않는다.

## 소유권과 선행 조건

관련 TODO는 A06·B07다.
허용 편집 대상은 console/src/ 내 인계받은 UI 파일과 UI 검사다.
지금은 기존 화면·접근성·오류/로딩/재시도 상태를 읽고 개선 스펙을 구체화한다. 제품 UI 편집은 앞선 기능 세션 완료·API 고정·화면 기준 확인 후에만 시작한다.
공유 파일의 소유권은 [통합 계획](../plans/2026-11-08-remaining-workstreams.md)을 따른다.

## 완료 조건

연결 Chrome에서 같은 크기/상태의 화면, 키보드·접근 가능한 이름, owner/editor/viewer, loading/empty/error/unknown-result, 프로젝트 전환 중 늦은 응답, API 호환·요청 수·렌더링·자원 정리를 검증한다. Playwright 금지.
실행 명령·로그·입력/실행본 digest와 미실행 항목을 남긴다. 실패나 외부 입력 대기를 완료로 표시하지 않는다.

## 2026-11-08 독립 조사 결과

제품 파일은 편집하지 않았다. 아래 내용은 소스 조사 결과이며 실행 화면의 승인본이 아니다.
선행 채팅이 콘솔을 수정하면 바뀐 파일과 호출부를 다시 읽는다.

### 현재 화면과 상태 경계

| 대상 | 소스에서 확인한 구조 | 유지할 계약 |
| --- | --- | --- |
| 로그인 | \`App.tsx\`의 \`App\`·\`Login\` | 세션 확인, 401 뒤 로그인, 그 밖의 오류와 다시 시도 |
| 공통 화면 | \`Console\`의 주 메뉴·상단 프로젝트 선택 | 프로젝트 목록 누적, 운영자 표시, 명령 중 탐색 잠금 |
| 프로젝트 | \`Projects\` | owner에게 생성 표시, 접근 가능한 목록과 더 불러오기 |
| 환경 | \`ProjectScope\` | 프로젝트 ID의 key로 상태 초기화, 환경별 역할과 오류 표시 |
| 기능 선택 | \`Scope\` | 환경·메뉴 key로 상태 초기화, 기존 메뉴 순서와 prefix |
| 유저 | \`Players\`·\`PlayerDetail\` | ID 조회, 정확한 닉네임 검색, 커서 조회, 상세에서 목록 복귀 |
| 상세 명령 | \`PlayerProfile\`·\`PlayerSessions\`·\`PlayerAccess\` | 결과 미확인 시 같은 명령 재시도, 형제 명령과 탐색 잠금 |
| 진행 | \`ProgressEditor\` | 입력별 UUID 유지, 성공 뒤 저장 제한, 명시적인 최신 상태 조회 |
| 게임 데이터 | \`GameData\` | 선택 때 지연 로딩, 실패 안내, 조회 순서 확인, 성공 뒤 최신 GET |
| 그룹 | \`Groups\` | 선택한 경로의 값만 표시, 필요한 조회만 기존 값 유지, 명령 재전달 |
| 나머지 메뉴 | 경제·콘텐츠·운영 설정·확률·랭킹·소셜·길드 | 기능마다 다른 조회와 명령 수명을 별도로 보존 |

\`App.tsx\`는 조사 시점에 1,027행이다. 파일 길이만으로 분리 범위를 확정하지 않는다.
\`useResource\`는 재조회 시작 때 기존 \`data\`를 지우지 않는다.
\`GameData.useRead\`는 경로와 요청 순서를 확인하며, \`Groups.useRead\`는 \`retainValue\`도 사용한다.
이 세 훅을 한 훅으로 합치는 설계는 확정하지 않았다.
\`ProgressEditor\`의 저장 상태는 상세의 세 명령을 합친 \`busy\`에 포함되지 않는다.
리팩터링을 이유로 진행 편집까지 잠그거나 기존 명령 잠금을 풀지 않는다.

### 화면 기준 후보

현재 구현의 글자·버튼·메뉴·상태 문구와 \`style.css\`를 비교 입력으로 보존한다.
사이드바는 208px이며 \`max-width: 700px\`에서 가로로 줄바꿈한다.
본문은 최대 1,400px이고 표는 패널 안에서 넘친 내용을 스크롤한다.
이는 소스 값이며 실제 화면의 픽셀 일치를 확인한 결과는 아니다.

이 자료를 새 UI 승인으로 간주하지 않는다. 새 기능이 끝나면 같은 화면 상태를 다시 정하고 사용자 기준을 확인한다.

## 검토할 변경안 — 미확정

1. **현재 화면을 유지하며 기능 단위로 파일을 분리한다.** 첫 후보는 로그인과 프로젝트 목록이다.
   props·key·훅 호출 순서·DOM·문구·클래스를 유지한다. 비동기 명령과 조회 훅은 처음부터 합치지 않는다.
   읽을 범위를 줄이지만 새 화면을 제공하지는 않는다. 가장 작은 시작안으로 제안한다.
2. **반복되는 표시 요소를 추출한다.** 오류 표시나 날짜 표시는 실제 재사용과 상태 의미가 같을 때만 후보로 삼는다.
   호출부가 늘고 오류 문구가 섞일 위험이 있다. 명령·폼·조회 전체를 일반화하지 않는다.
3. **탐색과 시각 구성을 다시 설계한다.** 메뉴 묶음·배치·간격을 바꿀 수 있지만 현재 승인 범위를 넘는다.
   기능이 끝난 화면을 바탕으로 별도 시안과 변경 이유를 제시해야 한다.

이 제안은 제품 편집 허가나 시안 승인을 대신하지 않는다.
기능 완료 범위, 선택한 변경안, 화면 기준을 확인한 뒤 파일별 실행 계획을 고정한다.

## 변경 전후에 비교할 항목

| 조건 | 준비할 입력과 동작 | 판정 근거 |
| --- | --- | --- |
| 역할 | 같은 프로젝트·환경의 owner·editor·viewer | 표시되는 명령, 실제 API 권한, viewer 쓰기 요청 0건 |
| 로딩·빈 결과 | 조회 지연, 빈 프로젝트·환경·유저·감사 목록 | 기존 상태 문구, 상태 역할, 비활성 버튼, 오류와 빈 결과 구분 |
| 오류 | 401·403·409·422·429·500과 연결 실패 | 기존 오류 문구와 복구 동작, 성공으로 표시하지 않음 |
| 결과 미확인 | 확정 뒤 응답 유실, 같은 요청 재시도 | method·URL·본문·UUID 일치, 명령·감사 추가 0건, 탐색 잠금 |
| 늦은 응답 | 프로젝트 A 조회 지연 중 B 선택, 환경·메뉴·유저 전환 | A의 응답이 B에 표시되지 않음, 취소와 언마운트 정리 |
| 키보드 | Tab·Shift+Tab·Enter·Space로 기존 흐름 실행 | 접근 가능한 이름, 현재 메뉴, 포커스 표시와 순서 |
| 반응형 | 승인 화면 크기, 700px 양쪽 경계의 같은 상태 | 줄바꿈·표 스크롤·본문 여백·텍스트·버튼 비교 |
| 지연 로딩 | 새 세션에서 프로젝트 진입 후 게임 데이터 선택 | 선택 전 모듈 요청 없음, 선택 뒤 로딩과 모듈 실패 안내 |
| 요청 비용 | 같은 데이터로 진입·전환·재조회·명령 재시도 | 경로별 요청 수와 취소 수, 중복 명령, 기존 캐시 보호 |
| 렌더링·정리 | 같은 전환 순서와 반복 횟수 | 전후 commit·시간·활성 요청·남은 자원, 측정 조건과 한계 |

마지막 두 항목의 수치 기준은 아직 없다. 변경 전 고정 입력으로 측정하고 같은 환경에서 비교한다.
소스 조사만으로 성능 동등성이나 접근성 통과를 보고하지 않는다.`,filtered:!0,sourceHash:"a8e1d982b56a93acbc59396d963d6cf7d36385986e116c70196d3553f1b9aa84"},{id:"docs-specs-remaining-withdrawal-purge-md",title:"탈퇴 자료 정리와 관리 UI 스펙",path:"docs/specs/REMAINING_WITHDRAWAL_PURGE.md",category:"기능 명세",status:"후속 계획·미완료",body:"# 탈퇴 자료 정리와 관리 UI 스펙\n\n## 최신 인수 기준 — 2026-11-10\n\n팀 내부용 관리 서버를 우선한다. 외부 고객 문의는 현재 범위 밖이므로 아래 과거 support 선행·정책 대기는 적용하지 않는다. 실제 제품 파일의 최신 소유권·편집 종료·소스 digest를 대조해 인수한다. 정책이 미정인 실제 영구 삭제는 여전히 실행하지 않는다.\n복구·자료 운영·로컬 지연·관리 UI 중 내부 관리에 필요한 작업은 독립적으로 준비할 수 있다. 외부 공급자·실기기 연결이 모두 끝날 때까지 내부 관리 작업을 막지 않는다. 운영 부하/SLO의 배포 이후 원칙과 기존 검증 한계는 유지한다.\n\n기준일은 2026-11-08이다. 원본 작업 목록은 TODO.md이며 이 문서는 해당 작업의 계약이다.\n현재 기준은 DB22·소스127개·서버424개 검사 근거·최신 HTTP655건이다. 이는 전체 플랫폼 완료가 아니다.\n기존 사용자/다른 채팅 변경, 조사·README·references·study/nakama를 보존한다. 커밋·push·배포·실제 발송·결제는 하지 않는다.\n백엔드는 Rust, 관리 콘솔은 React다. 기존 승인 UI·기능·성능 보호를 유지한다.\n\n## 범위와 계약\n\n기존 ACCOUNT_WITHDRAWAL.md를 확장한다. 로그인 자격·개인 게임 데이터 삭제와 감사/거래 이력 보존 또는 익명화 범위를 명시한다. 현재 미결정인 보관 정책을 확정으로 쓰지 않는다. 개인행·인덱스·우편·쿠폰 사용량·친구·길드 마스터·정산 snapshot·명령 payload를 표로 대조한다. 공유 잔액·정산·중복 방지 이력을 보존하는 재시작 가능한 제한 배치와 상태 조회·철회 UI를 연결한다. 최소 삭제 시각과 실제 완료를 구분한다.\n\n## 소유권과 선행 조건\n\n관련 TODO는 A03다.\n허용 편집 대상은 server/src/withdrawal.rs 및 새 정리 모듈·검사, console/src/PlayerWithdrawal.tsx다.\n공유 파일의 소유권은 [통합 계획](../plans/2026-11-08-remaining-workstreams.md)을 따른다.\n\n## 완료 조건\n\n정책별 삭제/보존 행, 다른 유저 불변, 기한 경계, 철회 경합, 작업 중 강제 종료/재시작, 감사/정리 실패 취소·재개, ID 재사용, 원래 bearer 기한까지의 제한 receipt를 검증한다.\n실행 명령·로그·입력/실행본 digest와 미실행 항목을 남긴다. 실패나 외부 입력 대기를 완료로 표시하지 않는다.\n\n## 독립 조사 결과 — 2026-11-08\n\n이 절은 정책 제안이다. 삭제 정책은 아직 확정하지 않았다.\n현재 마이그레이션 22개를 메모리 DB에 적용하면 내부 SQLite 테이블을 제외하고 59개 테이블이 생긴다.\n아래 표는 그 59개를 모두 대조한다. 실제 서버 DB는 열지 않았다.\n\n### 삭제 대상과 보존 의존 관계\n\n표의 동작은 제안이다. 실제 삭제는 정책 결정과 support 인계 이후에 연결한다.\n`보존`은 해당 자료가 개인 정보를 포함하지 않는다는 뜻이 아니다.\n\n| 테이블 | 제안하는 동작 | 함께 지킬 조건 |\n| --- | --- | --- |\n| `players` | 자격을 제거하고 기존 UUID의 삭제 표식을 남긴다. | 원장 외래 키가 유저 행을 참조한다. UUID를 다른 계정에 재사용하지 않는다. 기존 credential hash도 지운다. |\n| `player_custom_accounts`, `player_profiles`, `progress` | 해당 유저 행을 삭제한다. | 커스텀 ID와 닉네임의 재사용 여부는 별도 결정한다. 재사용해도 과거 UUID와 연결하지 않는다. |\n| `sessions` | 해당 유저의 `kind='game'` 세션을 지운다. | 예약 때 이미 실행한다. 관리자와 다른 유저 세션은 유지한다. |\n| `player_access`, `player_activity`, `player_groups` | 해당 유저 행을 삭제한다. | 삭제 표식의 인증 거절은 계속 유지한다. 그룹과 다른 멤버는 유지한다. |\n| `player_withdrawals` | 예약 세대와 인증 거절 상태를 유지한다. | `delete_after`와 실제 완료를 분리한다. 기존 `withdrawn=true`를 완료로 해석하지 않는다. `reason` 보관은 별도 결정한다. |\n| `player_withdrawal_receipts` | 원래 bearer 만료 시각까지 정확한 성공 재전달만 유지한다. | 유저 외래 키가 없다. 만료 전 삭제하지 않는다. 만료 이후 제한 배치로 지운다. 원문 bearer를 추가하지 않는다. |\n| `data_rows`, `data_index_entries` | 소유한 개인행의 인덱스 항목을 먼저 지운 뒤 행을 지운다. | `data_rows.owner_id`로 대상을 정한다. 항목의 `owner_id`만 믿지 않는다. soft delete한 행도 포함한다. |\n| `data_collections`, `data_indexes` | 컬렉션과 인덱스 정의를 유지한다. | 다른 유저 행과 공유행을 유지한다. 빌드 cursor와 삭제 작업의 경합을 확인한다. |\n| `wallet`, `mail` | 해당 유저의 현재 잔액과 우편을 삭제한다. | 공유 길드 잔액을 환원하지 않는다. 과거 정산의 `mail_ids`는 지급 이력이며 우편 재생성 근거로 쓰지 않는다. |\n| `ledger`, `economy_operations` | 수량과 거래 중복 방지 기록을 유지한다. | `input`, `result`, `reason`, `actor`의 원문 보관 범위는 별도 결정한다. 현재 유저 외래 키 때문에 유저 행만 삭제할 수 없다. |\n| `coupon_redemptions`, `coupons` | 사용 기록과 쿠폰 정의를 유지한다. | 쿠폰 사용량은 `coupon_redemptions` 행 수다. 유저의 사용 기록을 지우면 전체 사용 한도가 복원된다. |\n| `friend_pairs` | 양쪽 어느 열에 있든 해당 유저와의 관계를 지운다. | 상대 유저의 다른 관계와 정원 계산을 확인한다. 차단 이력을 계속 유지할지는 별도 결정한다. |\n| `friend_commands`, `guild_commands`, `requests`, `leaderboard_requests` | 중복 방지에 필요한 기록을 유지한다. | 타인이 실행한 명령도 대상 UUID를 `input` 또는 `result`에 포함할 수 있다. actor 검색만으로 전부 찾을 수 없다. 원문 삭제는 재전달 계약도 바꾼다. |\n| `guild_participants`, `guild_master_terms` | 일반 멤버와 가입 신청은 제거한다. 마스터는 정책에 따라 먼저 처리한다. | DB는 마스터 없는 길드를 허용한다. 자동 위임·해체·수동 처리 중 하나를 정해야 한다. |\n| `guild_ledger`, `guild_treasuries`, `guild_treasury_assets` | 기부 원장과 공유 잔액을 유지한다. | 기부 행은 `player_id=NULL`을 허용하지 않는다. 기부를 되돌리거나 길드 잔액을 다시 계산하지 않는다. |\n| `leaderboard_scores` | 미확정 점수의 제외 여부를 결정한다. | 이미 확정한 순위는 바꾸지 않는다. 제외하면 타인의 미확정 순위는 바뀔 수 있으므로 이를 정책 영향으로 명시한다. |\n| `leaderboard_results`, `leaderboard_seasons`, `leaderboard_group_settlements` | 확정 결과와 정산 cursor를 유지한다. | cursor의 유저 외래 키와 보상 지급 이력을 함께 유지한다. 진행 중 정산이 개인 우편을 다시 만들지 않아야 한다. |\n| `guild_leaderboard_results`, `guild_leaderboard_recipients` | 확정 결과와 수신 기록을 유지한다. | `members` JSON은 유저 UUID 배열이다. 배열을 줄이면 `processed_recipient_count`가 가리키는 위치가 바뀐다. |\n| `group_merges` | 병합 상태와 cursor를 유지한다. | `last_player_id`는 외래 키가 없는 문자열이다. 해당 유저 소속을 지워도 다른 멤버를 건너뛰지 않아야 한다. |\n| `audit` | 동작·시각·결과 중 보존할 필드를 정한다. | `actor`, `target`, `reason`, `result`에 개인 정보가 남을 수 있다. 유저 직접 외래 키가 없다는 사실만으로 익명화를 주장하지 않는다. |\n| `rate_limits` | 기존 만료 정책을 유지한다. | bucket 안에 들어가는 식별자의 원문 여부를 제품 통합 단계에서 확인한다. 탈퇴 때 전체 제한을 초기화하지 않는다. |\n| `admins`, `projects`, `environments`, `bindings`, `assets` | 유지한다. | 관리자 권한과 환경별 공용 정의를 바꾸지 않는다. |\n| `content_items`, `content_versions`, `content_publications`, `environment_policies`, `events` | 유지한다. | 콘텐츠 안의 자유 입력을 자동으로 유저 소유 자료로 해석하지 않는다. |\n| `groups`, `guilds`, `guild_group_affiliations`, `friend_policies`, `guild_activity_policies` | 유지한다. | 한 유저 탈퇴가 그룹·길드 정의나 다른 유저의 운영 정책을 삭제하지 않아야 한다. |\n| `leaderboards`, `guild_leaderboards`, `guild_leaderboard_seasons`, `guild_leaderboard_scores`, `guild_leaderboard_group_settlements` | 유지한다. | 공유 점수·시즌·정산 상태를 보존한다. 삭제 표식이 남은 유저에게 추가 지급할지 먼저 결정한다. |\n\n### Hard delete와 soft delete의 정확한 구분\n\n사용자가 2026-11-08에 두 방식의 범위를 자세히 요청했다. 위 표는 아직 승인하지 않은 제안이다.\n현재 제품은 예약·철회·인증 거절·게임 세션 삭제까지 구현했다. 개인 자료 정리는 연결하지 않았다.\n\n- **Hard delete:** 대상 행을 `DELETE`하거나 개인 정보 필드를 덮어써 운영 DB의 일반 조회에서 원문을 제거한다.\n- **Soft delete:** 행을 남기고 상태나 삭제 시각으로 사용을 막는다. 자료 자체가 사라지는 방식은 아니다.\n- **이력 보존:** 원장·확정 정산·중복 방지 기록을 계속 남긴다. 삭제 표식만 붙이는 soft delete와 구분한다.\n\n권고안의 hard delete 대상은 자격 원문에 대응하는 해시, 커스텀 계정 행, 프로필, 진행 자료, 개인 소유 행과 인덱스 항목이다.\n현재 개인 잔액·개인 우편·개인 활동·유저 소속·접근 차단 사유와 친구 관계도 대상이다.\n`data_rows`는 이미 soft delete한 과거 행도 포함한다. 공유행과 타인 소유 행은 포함하지 않는다.\n일반 길드 멤버·가입 신청을 지우되, 마스터는 먼저 정한 위임·해체·수동 처리 정책을 따른다.\n\n권고안의 soft delete 대상은 `players`의 기존 UUID와 `player_withdrawals`의 인증 거절 상태다.\n`players.credential_hash`는 `NOT NULL`이므로 원래 해시를 제거하고 로그인 자격으로 사용할 수 없는 값으로 바꾸는 구현이 필요하다.\n자격을 비활성화하는 정확한 방식은 기존 게스트·커스텀 인증을 함께 검증한 뒤 정한다.\n이 행은 과거 원장과 외래 키를 유지하는 삭제 표식이다. 복구 가능한 휴면 계정을 뜻하지 않는다.\n개인 자료를 지운 뒤 철회로 복원할 수 없으며, 기존 UUID를 새 계정에 다시 주지 않는다.\n\n거래·감사·정산·명령 이력은 soft delete 대상이 아니라 별도의 보관 정책 대상이다.\n특히 `input`, `result`, `reason`, 문의 본문에는 개인 정보가 남을 수 있다.\n보관 필드·기간·원문 제거와 명령 재전달의 관계는 아직 확정하지 않았다.\nreceipt는 원래 bearer 만료 전까지 유지한다. 만료 뒤 제한 배치의 hard delete 대상으로 제안한다.\n\n여기서 hard delete는 운영 DB의 논리적 삭제를 뜻한다. SQLite 파일·WAL·백업의 물리적 소거를 검증했다는 뜻은 아니다.\n백업 보관과 복원 뒤 재삭제는 recovery-integration 작업과 별도로 연결해야 한다.\n\n### 비교할 정책안\n\n1. **개인 자료 삭제와 UUID 삭제 표식 유지 — 권고안.** 자격·프로필·진행·개인행·우편·현재 잔액을 지운다. 거래 수량·확정 정산·쿠폰 사용량·중복 방지 기록은 유지한다. 기존 UUID와 연결 가능한 이력이 남으므로 완전한 익명화가 아니다. 이력의 원문 필드와 보관 기간은 추가 결정이 필요하다.\n2. **별도 식별자로 이력 전환.** 개인 자료를 지우고 이력의 UUID를 별도 식별자로 바꾼다. 외래 키·JSON snapshot·cursor·명령 기록을 함께 이전해야 한다. 원문 필드와 연결표를 지우지 않으면 이 방식도 익명화를 보장하지 않는다.\n3. **이력까지 삭제.** 현재 쿠폰 사용량·원장·정산·재전달 보존 조건과 충돌한다. 채택하려면 대체 집계와 중복 방지 기록을 먼저 설계해야 한다. 기존 공유 자료 불변 조건을 별도 승인 없이 바꾸지 않는다.\n\n아직 결정하지 않은 항목은 다음과 같다.\n\n- 거래·감사·문의와 명령 원문의 보관 필드 및 기간. 무기한 보관을 기본값으로 만들지 않는다.\n- 탈퇴 마스터의 위임·해체·수동 처리 정책. 권고안은 다른 멤버가 있는 길드의 자동 해체를 피하고 수동 처리가 끝날 때까지 해당 유저의 정리를 중단하는 것이다.\n- 진행 중 개인·길드 정산에서 탈퇴 유저에게 아직 지급하지 않은 보상의 처리. snapshot 위치는 유지해야 한다.\n- 커스텀 ID·닉네임의 재사용과 친구 차단 이력의 보관 여부. 내부 UUID는 재사용하지 않는 안을 권고한다.\n- 먼저 구현할 고객 문의 테이블의 보관 범위. support 인계 시 새 스키마를 이 표에 추가한다.\n\n### 재시작 가능한 배치의 제안\n\n기존 `group_lifecycle`의 제한 배치·버전·cursor·감사 거래 패턴을 재사용한다. 별도 큐 라이브러리는 추가하지 않는다.\n작업은 유저·예약 버전·정책 버전을 묶는다. 각 배치는 `BEGIN IMMEDIATE`에서 최신 예약 상태와 `delete_after <= now`를 다시 확인한다.\n철회가 먼저 확정되면 작업을 시작하지 않는다. 기한 뒤 새 철회는 현재 계약대로 거절한다.\n배치당 행 수와 사용 시간의 상한은 통합 단계의 측정으로 정한다. 아직 수치를 운영 기준으로 확정하지 않는다.\n\n인증 차단 → 마스터·정산 의존 관계 해결 → 개인 자료 정리 → 이력의 필드 정리 → 완료 순서로 진행한다.\n한 배치의 자료 변경·cursor·감사 기록은 같은 거래에서 확정한다. 실패하면 그 배치 전부를 취소한다.\n실패 상태는 별도 거래에서 기록한다. 실패 기록도 쓰지 못하면 미완료 작업으로 남겨 재시작 때 다시 읽는다.\n완료 시각은 마지막 검증과 같은 거래에서 기록한다. 이미 삭제한 개인 자료를 철회로 복원할 수 있다고 표시하지 않는다.\n세션·게임 쓰기 차단만으로 관리자 지급·정산·인덱스 빌드의 새 쓰기를 막을 수는 없다.\n관련 관리자 호출과 배치 작성자를 전부 조사해 정리 작업과 경합하지 않도록 연결한 뒤 완료를 선언한다.\n\n### 관리 UI의 연결 제안\n\n아직 제품 화면을 바꾸지 않았다. 기존 `PlayerAccess.tsx`의 패널·권한·요청 보관·취소 가능한 조회 방식을 따른다.\n기존 예약·철회 API에 상태 조회와 같은 요청 재시도를 연결한다. 서버의 최신 GET을 화면 상태로 사용한다.\n`delete_after`는 최소 실행 시각으로 표시한다. 별도 완료 상태가 없으면 정리 완료로 표시하지 않는다.\n정리 단계·실패·재개 계약이 확정되기 전에는 해당 버튼이나 상태 필드를 만들지 않는다.\n화면 크기와 승인한 화면 상태는 support 인계 뒤 연결된 Chrome에서 확인한다.\n\n### 격리 검사의 한계\n\n검사는 Python SQLite `3.54.0`에서 마이그레이션의 빈 스키마와 합성 자료만 사용했다.\n이 검사는 Rust의 `Store::open`, API 권한·receipt 인증, 실제 강제 종료·재시작, Chrome 화면, 성능을 검증하지 않는다.\n유저 외래 키·인덱스 삭제 순서·거래 취소·receipt의 유저 외래 키 부재·기부 원장 제약·마스터 없는 길드 허용을 확인했다.\n그 결과를 실제 정리 구현의 완료 근거로 재사용하지 않는다.",filtered:!0,sourceHash:"7f40e047248a341475843b3d6f6653d43152c318274e44ea2cb81a5720c94036"},{id:"docs-plans-2026-11-07-content-cache-md",title:"콘텐츠 캐시와 언어 대체 구현 계획",path:"docs/plans/2026-11-07-content-cache.md",category:"실행 계획",status:"구현 범위별 참조",body:`# 콘텐츠 캐시와 언어 대체 구현 계획

**목표:** 게시 콘텐츠를 조건부 조회하고 누락한 언어를 명시한 언어로 대체한다.
**구조:** 기존 콘텐츠 조회·HTTP 응답·인증 경계를 사용한다. 표준 HTTP 캐시로 응답을 재검증한다.
**기술:** 기존 Rust·Axum·SQLite·sha2. 관리 UI와 DB 버전 5를 유지한다.
**명세:** [CONTENT_CACHE.md](../specs/CONTENT_CACHE.md).

## 제약과 검토 초점

본문·목록 상한·쓰기 거래·역할·세션·운영 정책을 유지한다. 새 의존성·외부 배포·커밋은 추가하지 않는다.
일치한 태그로 인증을 우회하지 않으며, 게시 전 작성본은 캐시를 무효화하지 않는다.
언어 선택은 페이지보다 먼저 적용한다. 이벤트의 기존 쿼리 검증을 완화하지 않는다.
SDK 전체와 여러 페이지의 시점 고정은 별도 범위다. 완료 증거를 해당 범위보다 넓게 해석하지 않는다.

## 1. 서버 조건부 조회

## 2. 실제 경로와 기록

- [x] 독립 검토자가 읽기 전용으로 무효화·권한·페이지·읽기 쉬움을 검토한다.

화면 변경이 없으므로 새 시안을 만들지 않는다. 브라우저의 표준 캐시 실제 사용 여부는 서버 HTTP 검사와 구분해 기록한다.

서버 기능과 HTTP 검사는 통과했다. Chrome 전송량 조건은 후속 검사 보완으로 해결했다. 후기 지연의 원인은 미해결이다. TODO E02·D02와 실행 기록에서 이어간다.`,filtered:!0,sourceHash:"bfa07a5a26e3b8a0540d8788ed87ea4635d2453695ff55909b41625134d59a04"},{id:"docs-plans-2026-11-07-content-md",title:"첫 콘텐츠 실행 계획",path:"docs/plans/2026-11-07-content.md",category:"실행 계획",status:"구현 범위별 참조",body:"# 첫 콘텐츠 실행 계획\n\n1. `server/tests/platform.rs`에 초안·게시·충돌·되돌리기·차트 타입 검사를 추가하고 없는 API의 실패를 확인한다.\n2. DB 버전 3의 `content-schema.sql`과 `content.rs`를 추가한다. 기존 권한·SQLite 거래·감사 함수를 재사용한다.\n3. 인증 뒤 관리·게임 콘텐츠 경로를 연결한다. 게시 포인터와 감사는 같은 거래에서 변경한다.\n4. `console/src/Content.tsx`에 작성·버전·게시·되돌리기·중단을 연결한다. 기존 프로젝트·환경·Button·API 기한을 유지한다.\n5. 해당 검사 뒤 전체 검사·타입·빌드를 실행한다. 연결된 Chrome에서 실제 게시 흐름을 확인하고 근거를 남긴다.\n\n자동 커밋·push·외부 배포·다른 저장소 변경은 하지 않는다. 콘텐츠를 실제 유저에게 외부 발송하지 않는다.",filtered:!0,sourceHash:"d262b3242a1291045c02c5e48599b2814a6decaf7dbf545aa1a1e4bf645aee4e"},{id:"docs-plans-2026-11-07-custom-accounts-md",title:"커스텀 계정 실행 계획",path:"docs/plans/2026-11-07-custom-accounts.md",category:"실행 계획",status:"구현 범위별 참조",body:`# 커스텀 계정 실행 계획

**목표:** 신규 가입·로그인·게스트 전환을 연결하고 같은 player 자료를 보존한다.

**구성:** 전용 accounts 모듈이 거래 밖 비밀번호 준비와 짧은 최종 거래를 맡는다. 기존 store·세션·활동·감사를 재사용한다.

**기술:** 설치한 Rust·Axum·rusqlite·Argon2·React·TypeScript를 사용한다. 의존성을 추가하지 않는다.

**명세:** [CUSTOM_ACCOUNTS.md](../specs/CUSTOM_ACCOUNTS.md). 작업 목록의 원본은 TODO A03·B03이다.

## 경계와 유지 조건

- 이전115개 소스·DB19·고정 실행본과 기존 결과를 보존한다. 기존 미커밋 조사와 다른 작성자의 수정을 되돌리지 않는다.
- 새 모듈은 API의 거래 생성 전에 분기한다. 공통 game 비GET의 활동 기록을 두 번 실행하지 않는다.
- 비밀번호 준비는8슬롯 안·writer 밖이다. 최종 거래가 현재 인증·정책·자격 상태를 재검사한다.
- UI 변경은 계정 유형 한 칸뿐이다. 기존 화면·지연 로딩·캐시·연결 재사용·WAL/FULL을 유지한다.
- 커밋·push·외부 배포·발송·결제를 하지 않는다. 테스트에는 기한과 정리, 선택한 값의 진단을 둔다.

## 실행 순서

- [x] 검사 작업자가 \`server/tests/custom_accounts.rs\`에 가입201·로그인200·같은 player 전환200의 초기 검사를 작성한다.
- [x] 서버 작업자가 새 \`server/src/accounts.rs\`를 구현한다. 공개 인터페이스는 아래 계약을 따른다.
- [x] 검사 작업자가 동일 ID 경합·전환 재전달·거래 취소·scope·정책·입력·비밀 보존을 확장한다.
- [x] 검사 작업자가 새 \`server/tests/custom_accounts_migration.rs\`에 DB19→20 보존과 실패 취소를 작성한다.
- [x] 독립 정적 검토를 반영한다. TODO·CONTEXT·실행 근거·체크포인트를 갱신한다.

## 실행 결과

API 19개·이전 3개와 Rust 전체 366개, 클라이언트 3개·타입·build·형식·Clippy가 통과했다.
실제 HTTP 650건·합성 KDF의 writer 비점유·같은 유저의 Chrome 계정 유형 표시를 확인했다.
최종 소스 119개·실행본·DB20·기존 자료를 대조했다. 성능 동등성은 ERR-18로 남긴다.

## 파일과 인터페이스

\`accounts::dispatch(conn: &mut Connection, parts: &[&str], query: &str, token: &str, input: Value, client_version: Option<&str>) -> Result<Reply>\`
는 명세의 세 POST만 처리한다. dispatch는 자체 거래와 한 번의 활동 기록을 소유한다.
\`store::hash_password(password: &str) -> Result<String>\`은 기존 관리자 해시 생성과 공유한다.
\`api::rate_limit(conn: &Connection, bucket: &str, limit: i64) -> Result<()>\`를 crate 내부에서 재사용한다.
\`player_custom_accounts(player_id,project_id,environment,custom_id,password_hash,created_at)\`는 명세의 세 유일성/소속 경계를 강제한다.
API의 성공 응답과 오류 코드는 명세를 따른다. 로그인 응답은 새 세션이며 과거 원문 토큰을 재사용하지 않는다.

## 검사 초점

없는 ID와 틀린 비밀번호는 같은401이며, malformed 입력은422다. caller가 다른 player를 전환할 수 없어야 한다.
동일 ID의 두 가입·가입 대 전환·한 player의 두 ID가 경합해도 자격과 감사는 한 번만 확정한다.
전환 재전달은 추가 활동이나 감사를 만들지 않는다. 신규 가입 응답 유실은 로그인으로 복구한다.
감사 실패는 player·자격·세션·활동을 취소한다. 폐기 bearer로 전환 재전달할 수 없어야 한다.
PHC·password·token은 관리 목록·감사·requests에 나타나지 않는다. DB에는 토큰 해시와 salted PHC만 보관한다.`,filtered:!0,sourceHash:"6147f413523f74b82e9a47039e26e5a19a4f18284e8c71d913142e591cae852b"},{id:"docs-plans-2026-11-07-economy-md",title:"첫 경제 흐름 실행 계획",path:"docs/plans/2026-11-07-economy.md",category:"실행 계획",status:"구현 범위별 참조",body:`# 첫 경제 흐름 실행 계획

작업 상태는 TODO E01·C04·C06 한 곳에서 관리한다. 설계는 [ECONOMY](../specs/ECONOMY.md)다.

1. \`server/tests/platform.rs\`에 자산·직접 지급·동시 우편 수령·쿠폰 한도·실패 취소 검사를 먼저 추가한다.
   없는 경제 API에서 실패하는지 확인한다. 기존 검사를 다시 실행하지 않고 새 이름의 검사만 실행한다.
2. \`server/src/economy-schema.sql\`과 DB 버전 2 이전을 추가한다. 기존 버전 1 DB의 데이터와 권한을 보존한다.
   \`server/src/economy.rs\`가 정의·지급·우편·쿠폰·원장을 맡는다. 기존 거래와 권한·감사 함수를 재사용한다.
3. 관리 API와 게임 API의 기존 인증 뒤 경제 경로를 연결한다. 지급은 SQLite의 같은 쓰기 거래에서 끝낸다.
   새 검사를 통과시킨 뒤 기존 Rust 통합 검사까지 한 번 실행한다.
4. \`console/src/Economy.tsx\`에 실제 API를 쓰는 관리 화면을 만든다. 기존 프로젝트·환경 선택과 UI 구성요소를 재사용한다.
   API 기한·취소·재전달 키를 유지한다. 저장 중 필드를 잠그고 성공 결과를 표시한다.
5. fmt·clippy·타입·빌드와 연결된 Chrome을 검사한다. DB 이전·잔액·원장·한도·실패 결과를 검증 기록에 묶는다.

SQLite 한 개의 쓰기 한계와 제한을 유지한다. 운영 부하·외부 공급자·SDK 완료로 보고하지 않는다.`,filtered:!0,sourceHash:"ed36fb7e0222a32d6f7a9b6bb48481777ee858ddc807f769df7981816364bb86"},{id:"docs-plans-2026-11-07-friends-md",title:"친구 요청·차단 구현 계획",path:"docs/plans/2026-11-07-friends.md",category:"실행 계획",status:"구현 범위별 참조",body:`# 친구 요청·차단 구현 계획

**목표:** 친구 요청·수락·거절·취소·해제·차단과 정원을 실제 게임 API와 콘솔에 연결한다.
**구조:** 기존 인증·환경 권한·즉시 거래·감사를 재사용한다. 관계 한 쌍과 방향별 차단을 버전 행에 저장한다.
**기술:** Rust·Axum·SQLite, React·기존 Button. 새 의존성은 없다.
**명세:** [FRIENDS](../specs/FRIENDS.md).

## 공통 제약과 검토 초점

- 기존 사용자 변경·조사·README·다른 저장소를 보존한다. 자동 커밋·push·배포·발송·결제를 실행하지 않는다.
- 기존 중성 색·좌측 메뉴·프로젝트·환경 구조를 유지한다. 새 UI 승인 질문 없이 기능을 연결한다.
- 모든 명령은 권한·같은 환경·UUID·버전·입력을 검증한다. 행을 삭제해 버전을 초기화하지 않는다.
- 교차 요청을 수락으로 바꾸지 않는다. 지연된 수락이 취소 뒤 새 요청에 적용되지 않아야 한다.
- 수락·차단·정원 경쟁과 감사 실패는 같은 거래의 최종 상태를 검사한다.
- 성공 결과의 재전달은 해제·차단 뒤에도 과거 결과만 반환한다. 관계와 감사에 재적용하지 않는다.
- 처리 중과 결과 미확인 때 콘솔의 범위 전환을 막는다. 부모는 자식 담당 검사를 중복 실행하지 않는다.

## 1. 서버 계약과 회귀

root 소유: \`server/src/friends-schema.sql\`, \`server/tests/friends_migration.rs\`, \`store.rs\`, \`api.rs\`, \`lib.rs\`와 기존 최신 DB 버전 단언.

인터페이스는 \`admin_route(conn, method, parts, query, admin, input)\`와 \`game_route(conn, method, parts, query, player, scope, input)\`이다.
둘 다 \`Result<Reply>\`이며 기존 전체 경로 parts와 거래의 \`&Connection\`을 받는다.

## 2. 콘솔과 실제 흐름

root 소유: App 메뉴·범위 연결. 컴포넌트는 \`Friends({prefix,canEdit,onBusyChange})\`를 export한다.

## 3. 검토와 단계 기록

- [x] 독립 검토자가 명세 준수와 거래·범위·버전·재전달·UI 수명을 읽기 전용으로 검토한다.

친구·차단 단계로 전체 E03이나 플랫폼 완료를 선언하지 않는다. 길드·그룹·게임 점수 검증과 후속 단계는 유지한다.
`,filtered:!0,sourceHash:"bcf86c5c68bbc83d85f06749462e1d0b7236cd80cc6c3255a56905a65d77ca86"},{id:"docs-plans-2026-11-07-game-data-aggregates-md",title:"Count/Any 실행 계획",path:"docs/plans/2026-11-07-game-data-aggregates.md",category:"실행 계획",status:"구현 범위별 참조",body:`# Count/Any 실행 계획

**Goal:** 기존 조건 조회와 같은 의미의 Count/Any를 Rust API와 관리 콘솔에 연결한다.

**Architecture:** 권한·q 해석을 공유한다. 조건이 없으면 SQL 집계, 조건이 있으면 기존 평가기로 streaming한다. 집계 callback은 범위 종료 때 해제한다.

**Tech Stack:** 기존 Rust·Axum·rusqlite 0.32.1 hooks·React·TypeScript. DB18과 의존성 버전은 유지한다.

**Spec:** [Count/Any 명세](../specs/GAME_DATA_AGGREGATES.md)

## 공통 제약과 검토 초점

기존 사용자 수정·v1/v2 커서·캐시·8슬롯·WAL/FULL·UI 구조를 유지한다. 커밋·push·배포는 하지 않는다.
집계는 cursor를 거절하며 limit/select/order를 집계값에 적용하지 않는다. 필터 한도는 100,000행·16MiB·2초다.
다른 소유자/삭제 행의 선행 한도, 불완전 false, typed 1.0, ready 상태, callback 해제를 우선 검사한다.

## 작업 1: RED와 API

파일은 \`server/tests/data_aggregates.rs\`, \`server/src/game_data.rs\`, \`server/src/game_data/row_query.rs\`다.

- [x] 기존 API만 사용하는 초기 검사를 작성한다. 21행과 limit1에서 count21, 끝 행의 Any true, 빈 결과 false를 확인한다.
- [x] 기존 권한·q 해석을 \`scoped_query(collection, player, raw)\`로 공유하고 Count/Any literal 경로를 UUID 분기 앞에 연결한다.

## 작업 2: 집계 실행기

새 \`row_query/aggregate.rs\`가 Kind·기한·SQL 집계·streaming 예산·결과를 맡는다. Cargo.toml은 hooks 기능만 추가한다.
\`indexed.rs\`의 \`scan_sql(definition, query, request, anchor, limit)\`은 기존 SQL 생성만 공유한다.
\`validated_row\`는 기존 검증을 재사용한다. 기존 run의 SQL·LIMIT1001·cursor 의미는 유지한다.

- [x] \`aggregate::run(conn, scope, collection, player, raw, kind)\`를 구현한다. Count/Any 결과만 반환한다.
- [x] native progress callback과 Rust 반복 기한을 구현한다. Drop에서 callback을 해제한다.
- [x] typed 조건·소유자·이력·범위·입력·인덱스 상태·100,001행/16MiB 경계·조기 Any를 검사한다.
- [x] 동일 연결에서 callback 중단 뒤 정상 SQL이 성공하는 검사를 남긴다.

## 작업 3: 콘솔

대상은 \`console/src/GameData.tsx\`다. q 원문·기존 useRead·요청 취소·busy·전체 GET 편집을 유지한다.

- [x] 기존 JSON 조회에 개수 조회·존재 확인과 현재 결과를 연결한다.
- [x] 컬렉션·적용 조건 변경 시 이전 집계를 숨기고 쓰기 뒤 현재 집계를 갱신한다.

## 작업 4: 검증과 기록

- [x] DB18 baseline·이전 binary/source를 보존한다. \`platform-data-aggregate-baseline.json\`을 기준으로 삼는다.
- [x] fmt·Clippy·Rust 전체·클라이언트 검사를 root 단독으로 실행한다. 수정한 대상만 다시 검사한다.
- [x] 고정 실행본의 HTTP·기존 자료 보존·기존 조회 전후 지연을 확인한다.
- [x] diff와 명세를 대조하고 TODO·CONTEXT·실행 기록·체크포인트를 갱신한다. 미확인은 구분한다.

자체 검토: 입력·권한·결과·한도·native callback·UI·회귀를 위 작업에 연결했다. 일반 SQL과 부분 집계 토큰은 노출하지 않는다.
`,filtered:!0,sourceHash:"7ba67d8d0758f338ff74a24eda9d15049af531c997b643109421010a2a87ade6"},{id:"docs-plans-2026-11-07-game-data-index-prefix-md",title:"인덱스 선행 조건 실행 계획",path:"docs/plans/2026-11-07-game-data-index-prefix.md",category:"실행 계획",status:"구현 범위별 참조",body:`# 인덱스 선행 조건 실행 계획

**목표:** 기존 인덱스 조회와 Count/Any가 필요한 선행 키 구간을 읽게 한다.

**구성:** 기존 키 인코딩을 재사용한다. 조건 선택과 seek 생성은 indexed 아래에 둔다. 원래 조건 평가는 유지한다.

**기술:** 기존 Rust·Axum·rusqlite hooks. 의존성·DB18·React 화면은 유지한다.

**기준:** [명세](../specs/GAME_DATA_INDEX_PREFIX.md). TODO A04가 원본 작업 목록이다.

## 실행 순서

- [x] 기존 \`indexes.rs\`의 단일 값 인코딩을 공유한다. indexed의 SQL 생성에 필요한 조건을 연결한다.
- [x] 잔여 조건 검사 2개의 뜻과 한도 검사를 보존한다. 정렬·범위·앵커·권한 회귀를 추가한다.
- [x] 먼 다음 페이지의 VM 작업량을 검사한다. 조건과 cursor가 중복 탐색을 만들면 공통 seek에서 고친다.
- [x] 독립 정적 검토와 전체 변경을 명세에 대조한다. TODO·CONTEXT·실행 기록·새 체크포인트를 갱신한다.

## 소유권

index_query는 새 prefix 모듈·새 통합 검사와 기존 잔여 조건 검사 2개의 입력만 맡는다.
index_console은 HTTP·전후 측정 스크립트만 맡는다. index_storage는 독립 정적 검토만 맡는다.
다른 작성자의 변경과 기존 조사 자료를 보존한다. 커밋·push·배포는 하지 않는다.
`,filtered:!0,sourceHash:"3c7f6ce10ade4623d958ce12b03fc184d02eb64a4ef5e9d6d355a4297ad6856a"},{id:"docs-plans-2026-11-07-game-data-indexes-md",title:"관리형 데이터 인덱스 실행 계획",path:"docs/plans/2026-11-07-game-data-indexes.md",category:"실행 계획",status:"구현 범위별 참조",body:`# 관리형 데이터 인덱스 실행 계획

**Goal:** 사용자 인덱스의 생성·점진 구축·복구·조회·삭제를 관리 콘솔에 연결한다.

**Architecture:** 고정 B-tree와 논리 항목을 사용한다. 원본 쓰기는 같은 거래에서 항목을 갱신한다. 기존 작업 루프가 50행씩 처리한다.

**Tech Stack:** 기존 Rust·Axum·rusqlite·React·TypeScript. 의존성은 추가하지 않는다.

**Spec:** [인덱스 명세](../specs/GAME_DATA_INDEXES.md)

## 공통 제약

기존 사용자 변경·조사 자료를 보존한다. 커밋·push·배포는 하지 않는다. 기존 UI 컴포넌트와 요청 재시도 방식을 사용한다.
정원 10개·필드 1-4개·배치 50행·조회 1,000개/1MiB를 적용한다. v1 직렬화는 유지한다.

## 검토 초점

1. 일시 정지 중 쓰기와 커서 이전 UUID도 재개 뒤 조회된다.
2. 옛 성공 재전달이 현재 항목을 과거 값으로 되돌리지 않는다.
3. 삭제 이력·다른 소유자·다른 환경이 페이지 한도와 섞이지 않는다.
4. 조건이 모두 불일치해도 커서가 진행한다. 앵커 변경은 거절한다.
5. 작업 오류·감사 실패·재시작에서 부분 확정이 남지 않는다.

## 작업 1: 정의·구축·저장

인터페이스는 \`live_definitions(conn, collection_id)\`, \`sync_row(conn, definitions, row)\`, \`definition(conn, collection_id, id)\`다.
작업 인터페이스는 \`next_work(conn)\`, \`advance(conn, work)\`, \`pause(conn, work, code)\`다. Work는 Clone이며 id를 공개한다.
\`IndexDefinition\`은 id·fields·version·state를 부모 하위에서 읽을 수 있다. \`key_parts(data, fields)\`는 SQL 바인딩 값 12개를 반환한다.

- [x] 테스트부터 작성한다. 생성 201·중복 요청 동일 ID·10개 한도·고정 scalar 검증·권한·CAS를 확인한다.
- [x] 정의 API·원자 동기화·50행 작업과 오류 일시 정지를 구현한다.
- [x] 정지 중 변경·작업 재개·삭제 정리·감사 실패·파일 재오픈 검사를 추가한다.

## 작업 2: 인덱스 조회

담당 파일은 \`server/src/game_data/row_query.rs\`, 새 \`row_query/indexed.rs\`, \`server/tests/data_index_queries.rs\`다.
부모 AST·matches·project를 재사용한다. 저장 모듈의 definition·key_parts와 고정 SQL 열 \`k0r,k0n,k0t\`부터 \`k3t\`를 사용한다.

- [x] 테스트부터 작성한다. 1,001개 이상 조회·복합 순서·v1 유지·owner/history·residual 빈 페이지 진행을 확인한다.
- [x] q의 인덱스 옵션을 RowQuery 밖에 보관하고 ready 정의를 seek한다. v2 앵커와 예산을 검사한다.
- [x] NUL·UTF8·±0·누락/null·선택 필드·변경 앵커·다른 인덱스 커서를 검사한다.

## 작업 3: 콘솔

담당 파일은 \`console/src/GameData.tsx\`다. 기존 execute와 전역 잠금·재시도·전체 GET 편집을 유지한다.

- [x] 기존 구성으로 인덱스 목록·생성·새로고침·정지·재개·삭제를 연결한다.
- [x] 입력은 key·name·fields와 기존 reason을 사용한다. 인덱스 조회 q는 기존 JSON 입력을 사용한다.
- [x] Count/Any 후속 단계에서 Chrome 생성·정지·재개·삭제를 확인했다. 타입·클라이언트 3개·build·Prettier 근거도 유지한다.

## 작업 4: 통합과 근거

- [x] DB17 보존본과 이전 실행본을 유지한다. 기준은 \`platform-data-index-baseline.json\`이다.
- [x] DB18 이관·재오픈·FK·원본 행 보존을 확인한다.
- [x] fmt·Clippy·Rust 전체·기존 클라이언트 검사를 한 번 실행한다. 변경한 입력만 다시 검사한다.
- [x] Chrome 후속 검증을 마쳤다. 고정 실행본의 HTTP·SQL·전후 지연·실제 종료 복구 근거를 보존했다. 성능 동등성은 미확인이다.
- [x] 전체 변경을 요청과 연결해 검토하고 TODO·CONTEXT·실행 기록·불변 체크포인트를 갱신한다.

자체 검토: 명세의 각 책임을 위 네 작업에 연결했다. prefix 최적화와 후속 데이터 기능은 이번 구현에 넣지 않는다.
`,filtered:!0,sourceHash:"bb00e7b6917270aa293f12d792841474fd27e691b180f07e24269ecdc79c2846"},{id:"docs-plans-2026-11-07-game-data-query-md",title:"게임 데이터 필드 조회 실행 계획",path:"docs/plans/2026-11-07-game-data-query.md",category:"실행 계획",status:"구현 범위별 참조",body:`# 게임 데이터 필드 조회 실행 계획

**Goal:** 기존 저장·목록을 유지하며 권한 있는 필드 검색·정렬·선택·커서를 제공한다.

**Architecture:** GET query 전용 자식 모듈을 기존 collection_routes에 연결한다. 기존 scoped 인덱스로 후보를 제한하고 Rust에서 조건·전역 정렬·projection을 적용한다.

**Tech Stack:** 기존 Rust·rusqlite·serde_json·sha2와 React·Button만 사용한다. DB17·의존성은 그대로다.

**Spec:** [GAME_DATA_QUERY.md](../specs/GAME_DATA_QUERY.md).

## 공통 조건과 검토 초점

- 기존 기본 목록·단일 행·쓰기·권한·UI CSS·WAL/FULL·3초·8슬롯·캐시를 유지한다.
- q는 strict UTF8·최대4,096바이트, raw query16,384바이트다. 기존 목록512바이트는 그대로다.
- 후보1,000개·UTF8합계1,048,576B·count/payload각1,001개 상한·고정 인덱스·응답10개를 검사한다.
- count와 byte SUM은 JSON decode 전에 확인한다. ASCII 128×8192B의 정확 경계·초과·멀티바이트를 검사한다.
- projection을 전체 교체 입력에 사용하면 데이터가 사라진다. 상세는 기존 GET만 사용한다.
- 긴 정렬값·동점·삭제 anchor·다른 actor/scope cursor를 별도 검사한다.
- all/any/not의 깊이4·leaf16·in20과 잘못된 타입/UTF8를 검사한다.
- tombstone이 많아도 active index를 사용해야 한다. SQL 계획8개를 확인한다.
- stale cursor와 쓰기 뒤 새 조회에서 중복 요청·불명 쓰기의 탐색 잠금 회귀를 확인한다.

## Task 1: 조회 API와 계약 검사

**Interface:** \`pub(super) fn run(conn:&Connection, scope:(&str,&str), collection:&Collection, actor:&str, player:Option<&str>, raw:&str)->Result<Reply>\`.
자식 모듈은 부모 private Collection/Schema/FieldType/DataRow·data_row·row_kind·game_collection_read·valid_key·uuid·safe_number를 재사용한다.
새 일반 추상화·가시성 확대·api.rs/Store/SQL DDL 수정은 하지 않는다.

## Task 2: 기존 콘솔 안의 독립 조회

**Files:** console/src/GameData.tsx만 수정한다. App·CSS·공용 helper는 바꾸지 않는다.
Task1의 GET API와 Page<DataRow>를 사용한다. \`data\`만 projection이며 메타 정보는 같다.

## Task 3: 실행본·회귀·기록

`,filtered:!0,sourceHash:"8a52f91e79bafaacdd521ec9ef549da97ffbc0da029dea28a456fcaf97c0c9e2"},{id:"docs-plans-2026-11-07-game-data-md",title:"관리형 게임 데이터 실행 계획",path:"docs/plans/2026-11-07-game-data.md",category:"실행 계획",status:"구현 범위별 참조",body:`# 관리형 게임 데이터 실행 계획

**목표:** 관리 콘솔과 Rust API에서 컬렉션·소유 행·공용 행·스키마·원자 작업을 실행한다.
**구조:** game_data.rs가 정의·검증·권한·행 명령과 명시 route를 소유한다. 기존 auth·외부 거래·명령 helper·활동을 재사용한다.
**기술:** 기존 Rust·Axum·SQLite·React·TypeScript, DB17. 새 의존성 없음.
**명세:** [GAME_DATA](../specs/GAME_DATA.md).

## 제약과 검토

기존 dirty 조사·README·references·Nakama·다른 작업을 보존한다. 자동 commit·push·배포는 하지 않는다.
기존 API 응답·유저/진행/경제/콘텐츠·옛 명령·WAL/FULL·3초·8슬롯·캐시를 유지한다.
원본 Public과 자체 권한을 혼동하지 않는다. 스키마 고정·클라이언트 입력의 비신뢰·안전 정수·게임 owner 위조를 중점 확인한다.
정책 축소 뒤 replay 권한·공개 읽기와 owner 쓰기·소유자 없는 shared·batch rollback·중복 행 UUID를 빠뜨리지 않는다.
동적 DDL·범용 SQL·큰 전체 목록·새 스레드 풀·추가 범용 추상화는 필요 없다.

## 작업과 소유권

## 공용 인터페이스

backend는 다음 crate 함수만 제공한다. 자체 거래를 열지 않는다.

- admin_route(conn:&Connection, method:&str, parts:&[&str], query:&str, admin:&str, input:Value)->Result<Reply>.
- game_route(conn:&Connection, method:&str, parts:&[&str], query:&str, player:&str, scope:(&str,&str), input:Value)->Result<Reply>.

root api.rs는 admin의 [admin,projects,p,e,data,..]와 game의 [game,data,..]만 연결한다.
admin_route가 access를 확인한다. game_route는 인증한 scope/player를 사용한다. 공통 game 활동은 기존 dispatch 후처리가 실행한다.
명령 helper는 game-data:{실제actor} 이름공간으로 사용하며 감사에는 실제 actor를 기록한다.

## 실행할 검사

초기 RED: cargo test --manifest-path server/Cargo.toml --offline --test game_data.
이전 RED/GREEN: cargo test --manifest-path server/Cargo.toml --offline --test game_data_migration.
최종: cargo fmt --check·clippy --all-targets -D warnings·cargo test --offline·cargo build --offline.
클라이언트: npm test·npm run build·npx --no-install prettier --check src.
모든 실행은 유한 기한·출력 제한·프로세스/DB 정리를 가진다. 같은 검사를 다른 agent가 중복 실행하지 않는다.`,filtered:!0,sourceHash:"eee19404b204abf2d562d0b04b40601b4a5054a280a7959889779af4143291a9"},{id:"docs-plans-2026-11-07-group-leaderboards-md",title:"그룹별 개인 리더보드 실행 계획",path:"docs/plans/2026-11-07-group-leaderboards.md",category:"실행 계획",status:"구현 범위별 참조",body:`# 그룹별 개인 리더보드 실행 계획

**목표:** 기존 전체 순위를 보존하면서 같은 보드의 그룹별 개인 순위·이동·정산을 연결한다.
**구조:** DB13의 점수 그룹과 그룹별 정산 진행을 기존 순위 흐름에 연결한다. 기존 그룹 이동 거래에서 활성 점수만 제외한다.
**기술:** Rust·Axum·rusqlite·React·TypeScript, 새 의존성 없음.
**명세:** [그룹별 리더보드](../specs/GROUP_LEADERBOARDS.md).

## 제약과 검토

기존 조사·README·다른 에이전트 변경을 보존한다. 커밋·push·배포는 하지 않는다.
UI는 기존 개인 리더보드의 생성과 선택을 확장한다. 요청 중 대상 변경·중복 제출을 막고 같은 입력 재시도를 유지한다.
다른 그룹 커서·이동 뒤 기대 버전·NULL 보상·시계 역행·감사 실패를 검사한다.

## 작업

- [x] backend: leaderboards.rs와 group_leaderboards.rs 통합 검사 파일을 작성한다. 보드 유형·그룹 경로·그룹 점수·10개 한도·정산·성공 재전달을 구현한다.
- [x] console: Leaderboards.tsx만 수정한다. division 선택·그룹 페이지 선택·현재 그룹 표시·같은 요청 재시도를 연결한다.`,filtered:!0,sourceHash:"6d6eca9d872387c5b7c7179eb01a6b2abf9467c2ebb8031f15c3764bf324ad25"},{id:"docs-plans-2026-11-07-group-lifecycle-md",title:"그룹 통합과 삭제 실행 계획",path:"docs/plans/2026-11-07-group-lifecycle.md",category:"실행 계획",status:"구현 범위별 참조",body:`# 그룹 통합과 삭제 실행 계획

**목표:** 빈 그룹 삭제와 실패 뒤 재개하는 그룹 통합을 기존 콘솔에 연결한다.
**구조:** groups의 활성/과거 해석을 분리하고, group_lifecycle에 영속 작업과 배치를 둔다. 기존 소속·점수 helper와 Store 8슬롯을 재사용한다.
**기술:** Rust·Axum·rusqlite·Tokio·React·TypeScript, DB15. 새 의존성 없음.
**명세:** [그룹 수명](../specs/GROUP_LIFECYCLE.md).

## 제약과 검토

기존 dirty 조사·README·references·다른 작업을 보존한다. 자동 커밋·push·배포는 하지 않는다.
과거 그룹 ID·우편·부모 FK·옛 성공·기본 그룹·역할/활동·WAL/FULL·3초·8슬롯·캐시를 유지한다.
멤버 100명과 그룹 인원 수는 다르다. 무한 목록·큰 단일 쓰기 거래·구동 중 Cargo 경로 해시·중복 검사를 피한다.
공개 길드의 외부 그룹 멤버·이전 마스터·C 정산의 부모 고정·시즌 종료·실패 배치/성공 배치의 구분을 중점 검토한다.

## 작업과 소유권

## 공유 인터페이스

group_lifecycle은 다음 crate helper를 제공한다. 공통 경로에서는 부분 인덱스와 prepare_cached로 활성 작업 유무를 확인한다.

- require_group_available(conn, scope, group), require_player_available(conn, scope, player), require_guild_available(conn, scope, guild).
- require_guild_members_available(conn, scope, guild), require_no_active_merge(conn, scope).
- allow_paused_guild_repair(conn, scope, guild) -> Result<bool>: paused 작업의 원본에 남아 있는 길드인지 확인한다. 권한/action은 호출부가 제한한다.
- next_work(conn: &Connection) -> Result<Option<MergeWork>>: running 작업의 id·revision·batch_revision을 선택한다. MergeWork는 Clone이며 세 필드는 pub(crate)다.
- advance(conn: &mut Connection, work: &MergeWork) -> Result<bool>: 자체 Immediate 거래에서 한 배치를 실행한다. 바뀐 후보는 false, 확정한 배치는 true다.
- pause(conn: &mut Connection, work: &MergeWork, code: &'static str) -> Result<()>: 같은 제어/배치 버전이 아직 running일 때만 별도 거래로 paused와 감사에 기록한다.

Store::process_group_merge는 next_work→advance를 각각 기존 run으로 실행한다. 실패한 advance의 연결은 Err로 폐기한다.
503 재시도 조건을 제외한 오류는 새 run의 pause로 확정한 뒤 원래 오류를 반환한다. 숨은 런타임 상태나 별도 연결 풀은 만들지 않는다.`,filtered:!0,sourceHash:"df5feb9e81f84450aee573103c1f9919543c708a0e4ae19ee8e0bedd8c4a4b79"},{id:"docs-plans-2026-11-07-groups-md",title:"환경 그룹 실행 계획",path:"docs/plans/2026-11-07-groups.md",category:"실행 계획",status:"구현 범위별 참조",body:`# 환경 그룹 실행 계획

[명세](../specs/GROUPS.md)의 그룹·유저 소속·길드 공개 범위를 구현한다. 기존 UI 구성·가입·역할·재화·정산·성공 재전달과 연결 재사용을 유지한다. TODO E03이 작업 목록의 원본이다.

- [x] 독립 정적 검토·전체 변경 대조·검증 기록·CONTEXT·TODO·불변 체크포인트를 갱신한다.

경계: groups::initialize_scope(conn,scope), player_group(conn,scope,player), register_guild(conn,scope,guild,creator,access), require_guild_visible(conn,scope,guild,player), require_join_group(conn,scope,guild,player), open_guild_access(conn,scope,guild)를 제공한다. player_group은 group_id·revision 값을 반환한다. groups 모듈은 guilds::prepare_player_group_move(conn,scope,player)를 호출한다. 모든 함수는 기존 호출자의 거래를 사용한다.

`,filtered:!0,sourceHash:"af4e5f1ebb3ae46980f81d00796d2c72074b80158d1eb36dca28a33f2f8fe41d"},{id:"docs-plans-2026-11-07-guild-activity-md",title:"길드 활동 실행 계획",path:"docs/plans/2026-11-07-guild-activity.md",category:"실행 계획",status:"구현 범위별 참조",body:`# 길드 활동 실행 계획

[명세](../specs/GUILD_ACTIVITY.md)의 서버 활동·환경 정책·비활성 마스터 교체를 구현한다.
기능 우선 UI와 기존 길드·역할·원장·정산·연결 재사용을 유지한다. TODO E03을 유일한 업무 원본으로 둔다.

- [x] DB10·이전 바이너리·공유 소스와 실제 옛 명령 재전달 자료를 보존한다.
- [x] 활동 출처·미확인 기록·엄격한 기간 경계·새 역할 기간을 정한다.
- [x] 독립 정적 검토와 실행 기록·CONTEXT·TODO·체크포인트를 갱신한다.

backend 소유: server/src/guild_activity.rs·server/tests/guild_activity.rs.
console 소유: console/src/GuildActivity.tsx·console/src/Guilds.tsx.
HTTP 소유: scripts/guild-activity-smoke.py.
root 소유: 공유 Rust 파일·SQL·마이그레이션 검사·문서·모든 실행.
하위 에이전트는 검사·빌드·포맷·서버·브라우저를 실행하지 않는다. 서로의 변경을 되돌리지 않는다.
`,filtered:!0,sourceHash:"7b9c79b11f1a97c90491ef317c7e27389e376539f8313cb4167a31e5f8e632fd"},{id:"docs-plans-2026-11-07-guild-group-leaderboards-md",title:"그룹별 길드 리더보드 실행 계획",path:"docs/plans/2026-11-07-guild-group-leaderboards.md",category:"실행 계획",status:"구현 범위별 참조",body:`# 그룹별 길드 리더보드 실행 계획

**목표:** 같은 길드 보드에서 그룹별 순위와 멤버 보상을 계산한다.
**구조:** 개인 그룹 보드의 division·명시한 관리 경로를 재사용한다. 길드 그룹 점수와 그룹별 진행을 기존 정산 거래에 연결한다.
**기술:** Rust·Axum·rusqlite·React·TypeScript. 의존성 추가 없음.
**명세:** [그룹별 길드 계약](../specs/GUILD_GROUP_LEADERBOARDS.md).

## 제약과 검토

기존 조사·README·다른 작업을 보존한다. 커밋·push·배포는 하지 않는다. 승인된 기능 우선 UI와 전역 성능 보호를 유지한다.
공개 길드의 멤버 그룹·옛 me 성공 재전달·완료 뒤 임시 잠금/한도 해제·NULL의 종료·부모 교체 외래키를 중점 검토한다.

## 작업

- [x] backend: 그룹별 조회·원본/게임 me·정산·잠금·한도 해제와 실패 취소를 구현한다. 모든 목록은 SQL에서 범위를 고른다.
- [x] console: GuildLeaderboards.tsx만 수정한다. 개인 그룹 UI와 같은 생성 선택·그룹 페이지·대상 잠금·같은 요청 재시도·NULL 제한을 연결한다.
`,filtered:!0,sourceHash:"9a483dc60e430fbb1dfcd10081365abc4dd8997f234002d91f49cc864353ccc5"},{id:"docs-plans-2026-11-07-guild-group-moves-md",title:"길드 그룹 이동 실행 계획",path:"docs/plans/2026-11-07-guild-group-moves.md",category:"실행 계획",status:"구현 범위별 참조",body:`# 길드 그룹 이동 실행 계획

**목표:** 공개 길드와 그룹 전용 길드의 이동 규칙을 API와 기존 콘솔에 연결한다.
**구조:** groups의 명령 거래와 guilds의 pending 취소를 재사용한다. 개인/길드의 활성 그룹 점수만 명시한 정책으로 옮기거나 제외한다.
**기술:** Rust·Axum·rusqlite·React·TypeScript. DB14·새 의존성 없음.
**명세:** [길드 그룹 이동](../specs/GUILD_GROUP_MOVES.md).

## 제약과 검토

기존 조사·README·다른 작업을 보존한다. 자동 커밋·push·배포는 하지 않는다. 기존 UI·SQL 캐시·8슬롯·WAL/FULL 보호를 유지한다.
공개 멤버 소속·전용 마스터 보존·pending ABA·제외 뒤 자동 반영/한도·종료 명단·성공 재전달과 전체 취소를 중점 검토한다.

## 작업

- [x] backend: groups.rs의 GET/POST /groups/guilds/{guild}와 명령·감사를 구현한다. guilds.rs는 필요한 pending 취소 helper만 공유한다.
- [x] backend: leaderboards.rs와 guild_leaderboards.rs에 두 정책과 제외 뒤 재참여를 연결한다. 기존 독립 유저 이동과 전체 보드는 유지한다.
- [x] console: console/src/Groups.tsx만 수정한다. 길드 조회·명시한 순위 방식·잠금·정확한 요청 재시도를 기존 폼에 연결한다.
`,filtered:!0,sourceHash:"c1ebdfc8ceb77755193ea53f00a1fcd0a05f2c5c134ac4e1f5a30c08f0eccf2c"},{id:"docs-plans-2026-11-07-guild-leaderboards-md",title:"길드 순위 실행 계획",path:"docs/plans/2026-11-07-guild-leaderboards.md",category:"실행 계획",status:"구현 범위별 참조",body:`# 길드 순위 실행 계획

[명세](../specs/GUILD_LEADERBOARDS.md)의 원본 점수·멤버 보상·정산 잠금을 구현한다.
기능 우선 UI 지시를 유지한다. 기존 개인 순위·길드 재화·개인 우편을 보존한다.

- [x] DB9·이전 바이너리·공유 소스를 보존한다.
- [x] 원본 조사와 자체 수신자 정책을 구분하고 계약을 작성한다.
- [x] 독립 정적 검토 뒤 실제 HTTP·Chrome·개인 우편 수령과 기존 조회 성능을 확인한다.
- [x] 실행 근거·오류·한계·CONTEXT·TODO·체크포인트를 갱신한다.

파일 소유권은 겹치지 않는다. backend는 server/src/guild_leaderboards.rs와 server/tests/guild_leaderboards.rs를 맡는다.
console은 GuildLeaderboards.tsx·Leaderboards.tsx·GuildTreasury.tsx·Guilds.tsx와 scripts/guild-leaderboards-smoke.py를 맡는다.

검토 초점은 소속 변경 뒤 재전달, 두 잠금의 독립성, 멤버 스냅샷 경계, 실패한 묶음의 롤백, 중복 우편 방지다.
새 의존성·원본 재화 초기화·개인 순위 재설계는 추가하지 않는다.`,filtered:!0,sourceHash:"0d2130ff4209aed31fe16b276a4e8973d007a689c3220f4d47b287673d8942a4"},{id:"docs-plans-2026-11-07-guild-treasury-md",title:"길드 재화 실행 계획",path:"docs/plans/2026-11-07-guild-treasury.md",category:"실행 계획",status:"구현 범위별 참조",body:`# 길드 재화 실행 계획

길드 재화를 기존 지갑·길드 화면에 연결한다. 완료 기준은 [명세](../specs/GUILD_TREASURY.md)의 실제 거래·권한·재시도 검증이다.
사용자는 기능을 우선 구현하고 UI는 이후 개선하도록 지시했다. 추가 UI 승인을 기다리지 않는다.

- [x] DB8 바이너리·자료를 변경 전에 보존한다.
- [x] 계약과 파일 소유권을 정한다.
- [x] 마이그레이션과 HTTP 검사를 먼저 작성하고 기존 구현의 실패를 확인한다.
- [x] DB9와 재화 경로를 추가한다. 기존 닫기·명령 기록을 재사용한다.
- [x] 기존 길드 화면에 설정·기부·사용·운영 잠금·원장을 연결한다.
- [x] 정적 검토와 Rust·React 검사를 실행한다.
- [x] 실제 HTTP와 Chrome에서 잔액·원장·동일 요청 재시도를 확인한다.
- [x] 같은 자료와 입력으로 기존 조회 경로의 지연을 비교한다.
- [x] 실행 근거·실패·한계를 기록하고 CONTEXT·TODO·체크포인트를 갱신한다.

새 의존성을 추가하지 않는다. 캐시·조회 페이지 한도·DB 실행 슬롯·기존 화면 구성은 유지한다.
자동 정산과 그룹은 후속 E03 범위다. 이 단계가 전체 플랫폼의 완료는 아니다.

## 파일과 실행 소유권

  - \`admin_route(conn,method,parts,query,admin,input)\`과 \`game_route(conn,method,parts,query,player,scope,input)\`을 제공한다.
  - 기존 \`guilds::scoped_guild\`, \`request_result\`, \`record_request\`와 \`economy::apply_change\`를 호출한다.
  - 기존 executor에 길드 ID가 있는 명령을 전달한다. 헤더 버전은 본문에만 넣는다.
  - \`cargo test --test guild_treasury_migration\`은 변경 전 버전 8과 기대 9의 차이로 실패해야 한다.
  - \`cargo test --test guild_treasury\`는 변경 전 재화 경로의 404로 실패해야 한다.
  - 구현 후 두 검사와 전체 Rust 검사·fmt·clippy·build를 실행한다.
  - React의 기존 Node 검사·타입·build·Prettier를 실행한다. 이후 실제 HTTP·Chrome을 검증한다.

## 검토 초점

다른 관리자 둘이 같은 요청 UUID로 같은 멤버에게 기부해도 각 거래를 한 번씩 처리해야 한다.
역할 변경·탈퇴·길드 닫힘 뒤에도 과거 성공 요청의 재전달은 금액을 다시 바꾸지 않아야 한다.
동시 사용·기부와 닫기 경합에서 음수 잔액과 재화 손실을 막아야 한다.
감사 기록 실패와 잔액 상한 초과에서는 개인 차감도 되돌려야 한다.
불확실한 화면 요청은 같은 URL·본문·UUID를 유지해야 한다. 확인 뒤 최신 GET으로 잔액을 표시한다.`,filtered:!0,sourceHash:"683f4d4fd7cabd5c8ff058d3e7e7ae97b8d079eed0f0af71f9fe76aea995736a"},{id:"docs-plans-2026-11-07-guilds-md",title:"길드 생성·가입·역할 구현 계획",path:"docs/plans/2026-11-07-guilds.md",category:"실행 계획",status:"구현 범위별 참조",body:`# 길드 생성·가입·역할 구현 계획

**목표:** 실제 게임의 길드 생성·가입·승인·탈퇴·역할과 운영 관리를 연결한다.
**구조:** 기존 인증·환경 권한·즉시 거래·감사를 재사용한다. 지속 길드 버전과 참여 상태로 경합·재전달을 처리한다.
**기술:** Rust·Axum·SQLite, React·기존 Button·JSON 입력. 새 의존성은 없다.
**명세:** [GUILDS](../specs/GUILDS.md).

## 공통 제약과 검토 초점

- 기존 조사·README·사용자 변경·다른 저장소를 보존한다. 커밋·push·배포·실제 발송·결제를 하지 않는다.
- 기능 우선으로 기존 중성 색·좌측 메뉴·프로젝트·환경 구조를 유지한다. 새 UI 승인 질문을 추가하지 않는다.
- 모든 새 명령은 UUID·버전·입력·역할·같은 환경을 검사한다. 성공 재전달은 역할 변경·탈퇴·닫힘 뒤에도 상태를 다시 적용하지 않는다.
- 가입은 단일 소속과 최신 정원을 함께 검사한다. 다른 대기 요청·길드 버전도 같은 거래에서 무효화한다.
- 마스터 위임은 정확히 한 명을 유지한다. 마지막 멤버인 마스터의 탈퇴는 길드를 닫는다.
- 닫힘 변경은 최대 멤버 100명·대기 100개다. 다른 길드의 대기 무효화는 유저당 최대 10개다.
- 목록은 50개이며 큰 metadata는 상세로만 반환한다. 인증·캐시·시간·DB 작업 제한을 유지한다.

## 1. Rust 상태와 계약

root 소유: \`guilds-schema.sql\`, \`guilds_migration.rs\`, Store·API·lib 연결과 최신 DB 버전 단언.

인터페이스는 기존 도메인과 같은 \`admin_route(conn,method,parts,query,admin,input)\`와 \`game_route(conn,method,parts,query,player,scope,input)\`다.
둘 다 기존 전체 경로·거래 \`&Connection\`을 받아 \`Result<Reply>\`를 반환한다. 내부 거래를 추가하지 않는다.

## 2. 콘솔과 실제 요청

root 소유: App 메뉴·범위·전역 이동 잠금 연결.
\`Guilds({prefix,canEdit,onBusyChange})\`를 export한다. 기존 \`parseContentJson\`을 재사용한다.

## 3. 검토와 기록

다음 길드 단계의 재화·기부·비활성 마스터·그룹·게임 자격 검증과 전체 목표를 유지한다.
`,filtered:!0,sourceHash:"c5f78d76dcc4e00e398ec6e1f0a995f35f313a6994678027a793a82e99467bee"},{id:"docs-plans-2026-11-07-leaderboards-md",title:"랭킹·시즌 구현 계획",path:"docs/plans/2026-11-07-leaderboards.md",category:"실행 계획",status:"구현 범위별 참조",body:`# 랭킹·시즌 구현 계획

**목표:** 운영자 점수 관리와 게임의 현재·과거 순위를 연결하고, 시즌 보상 우편을 한 번만 발급한다.
**구조:** 기존 환경 권한·메일 발급·수령·감사·SQLite 쓰기 거래를 재사용한다. 종료 뒤 고정한 점수를 50명씩 정산한다.
**기술:** Rust·Axum·SQLite, React·기존 Button·날짜 입력. 새 의존성은 추가하지 않는다.
**명세:** [LEADERBOARDS.md](../specs/LEADERBOARDS.md).

## 제약과 검토 초점

사용자는 기능 우선 UI를 지정했다. 기존 화면 구조와 성능 보호·본문·페이지·시간 제한을 유지한다.
게임 임의 점수를 신뢰하지 않는다. 실제 게임 결과 검증·길드·친구·그룹과 운영 부하는 남은 전체 범위로 유지한다.
같은 명령의 종료 뒤 재시도, 같은 점수의 도달 시각, 종료 시각의 새 쓰기, 마지막 묶음 경쟁과 우편 실패를 우선 검사한다.

## 서버

## 콘솔과 실제 흐름

- [x] 보드·시즌 생성·조회·점수 CAS·순위 페이지·정산 진행과 결과를 구현한다.
- [x] 독립 검토자가 읽기 전용으로 거래·권한·기간·정렬·페이지·UI 상태를 검토한다.

커밋·push·외부 배포·실제 발송·결제는 실행하지 않는다. 전체 목표를 이번 단계로 축소하지 않는다.
`,filtered:!0,sourceHash:"47f89c14c78fab9b67a82e8537b0fdfc3e97c4de35b7070be39f51356e6d9e20"},{id:"docs-plans-2026-11-07-operations-md",title:"운영 정책과 이벤트 실행 계획",path:"docs/plans/2026-11-07-operations.md",category:"실행 계획",status:"구현 범위별 참조",body:`# 운영 정책과 이벤트 실행 계획

   기존 SQLite 거래·진입 제한·권한·감사를 재사용한다. 콘텐츠의 locale·cursor 파서는 두 실제 호출부가 공유한다.
   정책 변경과 이벤트 저장 중 입력을 잠그고, scope 전환 시 요청을 취소하며, 예전 응답을 적용하지 않는다.
5. 읽기 전용 검토와 Chrome에서 정책·이벤트·실제 게임 거부를 확인한다. 완료 근거·오류·다음 행동을 TODO·CONTEXT에 기록한다.

기존 연구·README·references·Nakama와 다른 저장소를 보존한다. 커밋·push·외부 배포·실제 발송은 하지 않는다.`,filtered:!0,sourceHash:"e81a9736e44b2d892c5c17c5bf3363948b632131ff471fb7ae961f9779b79156"},{id:"docs-plans-2026-11-07-platform-foundation-md",title:"관리 기반과 첫 저장 흐름 실행 계획",path:"docs/plans/2026-11-07-platform-foundation.md",category:"실행 계획",status:"구현 범위별 참조",body:`# 관리 기반과 첫 저장 흐름 실행 계획

> 작업 상태는 [TODO](../../TODO.md) 한 곳에서 관리한다. 이 문서에는 별도 작업 체크리스트를 만들지 않는다.

**목표:** Rust 서버가 권한과 원자 저장을 집행하고 React 콘솔이 첫 조회 흐름을 제공한다.
**설계:** [PLATFORM](../specs/PLATFORM.md). P1·P2의 첫 세로 흐름이며 전체 기능을 대체하지 않는다.
**구성:** Axum·Tokio·rusqlite·SQLite, React·Vite·shadcn/ui·Lucide 후보.
**권한:** 사용자가 독립 서버 작업의 계속 진행을 지시했다. 사용자가 기능 우선 구현을 지시했다. 현재 화면 구조로 콘솔을 연결한다.

## 공통 제약

- 수정 범위는 이 저장소의 플랫폼 코드·설정·문서·검사다. 기존 조사·README·Nakama 자료는 보존한다.
- Rust 1.91.1과 Node 24.3.0에서 검사한다. 실제 해석 버전은 lockfile과 실행 근거로 고정한다.
- 자동 커밋·push·배포·실제 발송·결제는 하지 않는다.
- 제품 UI에 승인하지 않은 메뉴·장식·지표를 추가하지 않는다.

## 검토할 실패 조건

빈 이름·알 수 없는 필드·잘못된 단계 값을 422로 거부한다.
만료·폐기·종류가 다른 토큰과 교차 환경 요청은 인증·권한 오류로 끝낸다.
동시 쓰기는 성공 한 건과 충돌 한 건을 남긴다.
응답 유실 뒤 같은 요청은 같은 버전을 반환하며 다른 본문 재사용은 거부한다.
감사 삽입 실패와 프로세스 재시작 뒤에도 상태와 요청 결과가 어긋나지 않는다.

## 실행 단위

1. **A01·A02·A06: 범위와 화면안.** 이 설계와 검토 HTML을 작성한다. 전체 기능 대응과 첫 UI 결정을 구분한다.
2. **B01·B02: 실행·인증·격리.** \`server/Cargo.toml\`, \`server/src/main.rs\`, \`server/src/lib.rs\`, \`server/src/store.rs\`, \`server/src/schema.sql\`을 만든다.
   \`Store::open(path)\`가 이전을 적용한다. \`router(Store, origin)\`이 HTTP 앱을 만든다. CLI bootstrap은 비밀번호 환경변수를 읽는다.
   \`server/tests/platform.rs\`에서 미인증 조회 거부와 역할·환경 격리의 실패를 먼저 확인한다. 이후 최소 구현으로 통과시킨다.
3. **B03·B04·C02·C03·C06: 게스트와 진행.** 같은 테스트 파일에 세션·소유권·재전달·동시 저장·감사 실패 검사를 먼저 추가한다.
   \`ProgressInput { expected_version, request_id, progress, reason? }\`를 검증한다. \`BEGIN IMMEDIATE\`에서 권한·기존 요청·버전·상태·감사를 처리한다.
   기한을 둔 \`cargo test\`로 검사한다. 파일 DB를 닫고 다시 열어 영속 결과를 확인한다.
4. **A05·B07: API 계약과 콘솔.** 실제 구현과 API 문서를 맞춘다. UI 승인 후 \`console/\`에 React 앱을 만든다.
   \`/api\`는 Rust 서버로 프록시한다. 세션은 HttpOnly 쿠키다. 환경 전환 때 기존 요청을 취소하고 이전 결과를 버린다.
   \`tsc\`와 production build를 실행한다. 연결된 Chrome에서 로그인·선택·목록·상세·빈 상태·오류를 검토한다.
5. **검증과 기록.** \`cargo fmt --check\`, \`cargo clippy --all-targets -- -D warnings\`, \`cargo test\`를 실행한다.

수동 검토는 전체 diff에서 요청과 인과관계를 대조한다. 제품 구현과 화면안을 혼동하지 않는다.
범위·권한·예시·완료 기준을 자체 대조했다. 후속 P3–P9는 각 책임의 상세 계약과 실행 계획을 작성한 뒤 구현한다.`,filtered:!0,sourceHash:"704eeac34bab7fe6709cf07e19a312cf54e070c118485af02b1ef692bc02e46e"},{id:"docs-plans-2026-11-07-player-access-md",title:"유저 접근 차단 실행 계획",path:"docs/plans/2026-11-07-player-access.md",category:"실행 계획",status:"구현 범위별 참조",body:`# 유저 접근 차단 실행 계획

**목표:** 관리자가 유저 접근을 차단·해제하고 게임 인증의 공통 경계에서 집행한다.

**구성:** players의 상태·requests·감사를 재사용한다. DB21에 sparse 상태를 추가하고 기존 세 경계에 공유 검사를 연결한다.

**기술:** 기존 Rust·Axum·rusqlite·React·TypeScript·Button·TimeField. 새 의존성은 없다.

**명세:** [PLAYER_ACCESS.md](../specs/PLAYER_ACCESS.md). TODO A03이 원본 작업 목록이다.

## 유지 조건과 소유권

작업자는 지정 파일만 편집한다. 다른 작업자와 기존 사용자의 변경을 되돌리지 않는다.
게임 상태 캐시를 추가하지 않고 기존16개 준비문 캐시·8슬롯·연결 재사용·WAL/FULL·지연 로딩을 유지한다.
현재 UI를 유지하며 새 panel은 기존 진행 폼 아래에 붙인다. profile/session/access의 busy 상태는 각자 소유하고 부모에서 OR한다.

## 실행 순서

- [x] 검사 작업자가 \`server/tests/player_access.rs\`에 기본 GET·차단 PUT·기존 bearer403의 초기 실패를 작성한다.
- [x] 서버 작업자가 \`server/src/players.rs\`에 상태 조회·관리 명령·공통 집행 helper를 추가한다.
- [x] 콘솔 작업자가 새 \`PlayerAccess.tsx\`와 \`App.tsx\`의 필수 연결·잠금만 구현한다. 기존 TimeField를 재사용한다.
- [x] 검사 작업자가 권한·범위·입력·경합·재전달·감사 취소·만료·공통 게임 집행과 새 \`player_access_migration.rs\`를 확장한다.
- [x] 독립 정적 검토와 전체 변경을 대조한다. TODO·CONTEXT·실행 기록·새 체크포인트를 남긴다.

## 인터페이스

\`players::access_state(conn: &Connection, scope: (&str,&str), player: &str) -> Result<Value>\`는 현재 실제 상태를 반환한다.
\`players::update_access(conn: &Connection, scope: (&str,&str), player: &str, actor: &str, input: Value) -> Result<Value>\`는 caller의 Immediate 거래를 사용한다.
\`players::ensure_access(conn: &Connection, player: &str) -> Result<()>\`는 현재 시각의 활성 차단만403으로 거절한다.

API는 관리자 read/write와 player scope를 먼저 검사한다. PUT은 \`operation:"player.access.update"\`를 canonical 입력에 포함한다.
공통 game 분기는 subject 뒤·정책/handler 앞에서 검사하되 logout/refresh를 제외한다.
\`store::issue_session\`은 kind game일 때만 검사한다. \`accounts::authenticated_player\`는 subject 뒤에 검사해 준비·최종 거래를 모두 덮는다.
raw subject·관리자 player_in_scope·전역 operations 정책은 변경하지 않는다.

## 검사 초점

종료 시각이 지난 성공의 재전달은 미래 시각 검증보다 먼저 원래 결과를 반환해야 한다.
해제 뒤 옛 차단 명령 재전달은 상태를 되돌리지 않아야 한다. 동시 같은 버전 변경은 하나만 성공한다.
차단 중 refresh의 DELETE는 rollback해야 한다. 로그아웃·관리자 업무·다른 유저·기존 자료는 유지해야 한다.
304·재화·우편·친구·게임 데이터가 공통 집행을 우회하지 못해야 한다. KDF 계산 뒤에도 최종 상태를 다시 확인한다.
큰 종료 시각과 실제 시간 만료, loading/빈 상태/충돌·응답 유실의 잠금과 취소를 확인한다.
테스트는 선택한 값으로 진단하고 요청·프로세스·반복 대기에 기한과 정리를 둔다.

## 실행 결과

기존 migration helper만 수정하고 해당 3개를 다시 통과했다. 변경 없는 391개의 근거를 합쳐 현재 394개를 검증했다.
전체 명령의 마지막 성공을 주장하지 않는다. 기능 검증과 ERR-19의 성능 동등성 미확인을 구분한다.`,filtered:!0,sourceHash:"aab58e0512c8247fbb444fbba06ceaf87e4669e1b36e590c2b174824f8aa27c8"},{id:"docs-plans-2026-11-07-player-profile-md",title:"유저 닉네임 실행 계획",path:"docs/plans/2026-11-07-player-profile.md",category:"실행 계획",status:"구현 범위별 참조",body:`# 유저 닉네임 실행 계획

**목표:** 기존 유저 목록과 상세에서 닉네임 관리와 정확 검색을 제공한다.
**구조:** 별도 player_profiles 테이블과 players.rs에서 검증·읽기·명령을 처리한다. api.rs의 인증·외부 거래·활동을 재사용한다.
**기술:** 기존 Rust·Axum·SQLite·React·TypeScript, DB16. 새 의존성 없음.
**명세:** [PLAYER_PROFILE](../specs/PLAYER_PROFILE.md).

## 제약과 검토

기존 dirty 조사·README·references·Nakama와 다른 작업을 보존한다. 자동 commit·push·배포는 하지 않는다.
기존 users/progress/wallet/mail 경로·game/me 필드·과거 성공·활동·8슬롯·캐시·WAL/FULL을 유지한다.
경계는 누락/null/빈 문자열, malformed UTF8, 원본 문자열과 case-sensitive 정확 검색, 재전달과 현재 이름의 차이다.
profile 경로만 명시 분기해 기존 players/{id}/경제 경로를 가로채지 않는다. 기존 목록 API의 SQL과 응답은 유지한다. 새 /players/profiles 목록만 한 LEFT JOIN으로 읽는다.

## 작업

## 인터페이스

players.rs는 pub(crate) fn list(conn:&Connection,scope:(&str,&str),query:&str)->Result<Value>를 제공한다.
profile(conn:&Connection,scope:(&str,&str),player:&str)->Result<Value>는 이미 확인한 유저의 초기 null도 반환한다.
update(conn:&Connection,scope:(&str,&str),player:&str,actor:&str,input:Value,admin:bool)->Result<Value>는 기존 외부 거래에서 실행한다.
각 helper는 추가 거래를 열지 않는다. scope/권한/유저 확인은 root api.rs가 먼저 수행한다.

## 검증 명령

최종 fmt --check, clippy --all-targets -- -D warnings, cargo test --offline, cargo build --offline를 한 번 순서대로 실행한다.
console에서 npm test·npm run build·npx --no-install prettier --check src를 실행한다.
각 실행에는 유한 기한과 출력 상한을 두고 임시 서버·DB·프로세스를 정리한다.`,filtered:!0,sourceHash:"05132fcb2a2e98ada2fe45d31135632f4c0baacc155aaf88006dcbd001b67245"},{id:"docs-plans-2026-11-07-player-session-revocation-md",title:"유저 게임 세션 폐기 실행 계획",path:"docs/plans/2026-11-07-player-session-revocation.md",category:"실행 계획",status:"구현 범위별 참조",body:`# 유저 게임 세션 폐기 실행 계획

**목표:** 관리자 명령과 유저 상세에서 특정 유저의 기존 게임 세션을 모두 폐기한다.

**구성:** 기존 API write 거래·players 모듈·requests·감사를 재사용한다. DB19는 대상 세션 인덱스만 추가한다.

**기술:** 기존 Rust·Axum·rusqlite·React·TypeScript·Button. 새 의존성은 추가하지 않는다.

**기준:** [명세](../specs/PLAYER_SESSION_REVOCATION.md). TODO A03이 원본 작업 목록이다.

## 실행 순서와 소유권

- [x] session_server가 \`players.rs\`·\`api.rs\`·\`store.rs\`·새 \`player-session-schema.sql\`에 명령·권한·DB19를 연결한다.
- [x] session_console이 새 \`PlayerSessions.tsx\`와 \`App.tsx\`·\`PlayerProfile.tsx\`의 필요한 잠금만 구현한다. 기존 화면과 문구는 유지한다.
- [x] session_tests가 입력·권한·경합·재전달·감사 취소·ETag401·DB19 보존을 확장한다. 기존 migration 검사는 최신 버전 기대만19로 갱신한다.

테스트 진단은 선택한 primitive 값만 비교한다. 요청·작업·프로세스에 기한과 정리를 둔다.
커밋·push·배포·외부 발송·결제는 하지 않는다. 기존 조사·README·references·study/nakama는 보존한다.

## 확인 결과

Rust 344개·클라이언트 3개와 HTTP 583건을 통과했다. Chrome에서 실제 폐기·응답 유실·같은 명령 재시도·viewer·빈 세션을 확인했다.
DB19와 원래 자료를 보존했다. 기존 상단 화면의 같은 상태만 비교했으며 전체 반응형 동일성은 미검증이다.`,filtered:!0,sourceHash:"b90ed477ed9b9923a62edf774c34d0e19f5922790d268276fb3bcd63423c13f0"},{id:"docs-plans-2026-11-07-probability-md",title:"확률표 구현 계획",path:"docs/plans/2026-11-07-probability.md",category:"실행 계획",status:"구현 범위별 참조",body:`# 확률표 구현 계획

**목표:** 게시한 확률표로 비용 차감과 보상 지급을 한 번만 처리한다.
**구조:** 콘텐츠의 버전 관리와 경제 결과 저장을 재사용한다. OS 난수는 설치한 Rust 의존성의 재공개 API를 사용한다.
**기술:** Rust·Axum·rusqlite, React·TypeScript·기존 Button과 API 클라이언트.
**명세:** [PROBABILITY.md](../specs/PROBABILITY.md).

## 공통 제약

새 의존성·외부 배포·커밋을 추가하지 않는다. 기존 조사 자료와 다른 작업의 변경을 보존한다.
기존 UI와 DB의 쓰기 직렬화·페이지 상한·요청 취소·시간 제한을 유지한다.
추가 기능·UI 승인은 요구하지 않는다. 사용자가 기능 우선 실행을 이미 지정했다.

## 검사 초점

- 같은 요청이 동시에 들어오면 비용과 보상을 한 번만 기록한다.
- 보상과 비용이 같은 자산이어도 보상으로 부족한 비용을 충당하지 않는다.
- 보상 기록이 실패하면 이미 실행한 비용 차감도 취소한다.
- 게시 변경 뒤 재시도는 원래 결과를 반환한다.
- 이전 뒤 기존 원장 ID와 콘텐츠 참조를 보존한다.

## 1. 서버 추첨과 거래

## 2. 관리 콘솔

- [x] 목록·자산의 다음 페이지, 비용·보상 입력과 작성 후 편집기 이동을 구현한다.
- [x] 기존 \`ContentEditor({path,canEdit,onBack})\`를 재사용한다. 쓰기 중 관련 입력을 잠근다.

## 3. 검토와 근거

- [x] 독립 검토자가 변경 범위·거래·권한·입력·읽기 쉬움을 검토한다. 검사는 중복 실행하지 않는다.

운영 부하와 메모리 보존은 별도 항목이다. 이번 검사 결과로 전체 플랫폼 완료를 주장하지 않는다.`,filtered:!0,sourceHash:"70f8d6eca39cc7a5609189e2b76b7cd7b36c24f62448150bccf08d3331b24db4"},{id:"docs-plans-2026-11-07-store-cache-md",title:"DB 연결 재사용 계획",path:"docs/plans/2026-11-07-store-cache.md",category:"실행 계획",status:"구현 범위별 참조",body:`# DB 연결 재사용 계획

D02의 지갑 조회 증가 원인을 확인하고 반복 연결 비용을 줄인다. 기존 API·UI·거래 경계는 유지한다.
실제 bundled SQLite 3.46.0의 세 조건을 각각 500회 측정했다. DB10의 첫 스키마 읽기와 연결 종료 비용을 확인했다.

- [x] 같은 DB 자료에서 DB9 기존 조회·DB10 기존 조회·DB10 현재 조회를 분리한다.
- [x] 변경 전 DB10·바이너리·Store 소스를 보존한다.

표준 Mutex와 Vec를 사용한다. 잠금 안에서는 연결을 꺼내고 넣는 작업만 한다.
기존 세마포어 8개와 비동기 작업 경계를 유지한다. 새 의존성은 없다.
연결을 다시 빌릴 때 foreign_keys=ON·synchronous=FULL·busy_timeout=3초를 적용한다.
실패한 작업·끝나지 않은 거래·panic의 연결은 재사용하지 않는다. 연결 해제로 기존 롤백 의미를 보존한다.
WAL과 SQLite의 기존 체크포인트 정책을 유지한다. 운영 부하·전체 C06 복구를 완료했다고 단정하지 않는다.`,filtered:!0,sourceHash:"0a77e8dcd6acb1d51f4dc0375df08810de0551682c402d21fe126b611f6c59b5"},{id:"docs-plans-2026-11-07-withdrawal-control-md",title:"계정 탈퇴 제어 실행 계획",path:"docs/plans/2026-11-07-withdrawal-control.md",category:"실행 계획",status:"구현 범위별 참조",body:`# 계정 탈퇴 제어 실행 계획

**목표:** 탈퇴 예약·철회·즉시 세션 폐기와 로그인 경계를 구현한다. 자료 정리까지의 전체 목표를 유지한다.

**구성:** 기존 players·requests·audit·세션 인덱스를 재사용한다. DB22에 sparse 상태와 제한된 자기 명령 receipt를 추가한다.

**기술:** 기존 Rust·Axum·rusqlite·serde. 새 의존성은 없다.

**명세:** [ACCOUNT_WITHDRAWAL.md](../specs/ACCOUNT_WITHDRAWAL.md). 원본 작업 목록은 TODO A03이다.

## 소유권과 유지 조건

커밋·push·배포·실제 발송·결제는 하지 않는다. 기존 UI는 바꾸지 않는다.
기존 준비문 캐시·8슬롯·WAL/FULL·연결 재사용과 거래 밖 KDF를 유지한다.
삭제 범위의 답변에 의존하는 정리 작업과 UI만 대기한다. 제어 경계는 독립적으로 구현한다.

## 작업과 인터페이스

- [x] 검사 작업자가 새 \`server/tests/withdrawal_control.rs\`에 GET 초기 상태·관리 예약/철회·자기 요청 재전달의 세 초기 검사를 작성한다.
- [x] 서버 작업자가 새 \`server/src/withdrawal.rs\`와 \`withdrawal-schema.sql\`을 작성한다.
- [x] 검사 작업자가 권한·범위·입력·감사 취소·경합·원래 자료·로그인·기한·receipt 검사를 확장한다.
- [x] 독립 읽기 전용 검토를 반영하고 TODO·CONTEXT·새 체크포인트를 기록한다.

\`withdrawal::state(conn, scope, player) -> Result<Value>\`는 sparse 현재 상태를 반환한다.
\`withdrawal::update(conn, scope, player, actor, input) -> Result<Value>\`는 관리자 제어와 기존 requests namespace를 맡는다.
\`withdrawal::request(conn, token, query, input, client_version) -> Result<Value>\`는 자기 인증·receipt와 같은 예약을 맡는다.
위 세 함수는 caller의 현재 거래를 사용한다. \`request\`도 성공 전에 receipt·세션 삭제·감사를 함께 기록한다.
\`withdrawal::login_version(conn, player) -> Result<i64>\`는 KDF 전 예약 세대를 읽는다.
\`withdrawal::on_login(conn, scope, player, expected_version: Option<i64>) -> Result<()>\`은 최종 거래에서 유예 철회 또는 410을 결정한다.

관리자 권한·유저 범위·쿼리는 API 경계에서 먼저 검사한다. 자기 요청은 전용 분기로 일반 인증보다 먼저 제한된 receipt를 확인한다.
새 명령은 bearer와 공통 접근 검사·정책을 통과해야 한다. 일반 게임 명령은 이 예외를 재사용하지 않는다.
커스텀 로그인은 PHC 재검사 뒤 \`on_login\`, 게스트 로그인은 올바른 자격 확인 뒤 \`on_login\`을 호출한다.
뒤의 \`issue_session\` 실패는 철회·감사도 취소한다. refresh와 signup은 \`on_login\`을 호출하지 않는다.

## 우선 검증할 실패 조건

1. 자기 요청 확정 뒤 세션이 없어져도 같은 명령만 원래 토큰 기한까지 재전달할 수 있어야 한다.
2. 철회 뒤 옛 명령과 바뀐 명령은 각각 과거 결과와 409여야 하며 현재 상태를 바꾸지 않아야 한다.
3. 로그인 KDF 중 예약이 생기면 최종 거래가 최신 상태와 기한을 사용해야 한다.
4. 접근 차단·점검·감사 실패는 로그인 철회나 세션 삭제를 부분 반영하지 않아야 한다.
5. 관리자 범위·다른 유저·다른 명령 UUID·원래 자료·성능 보호는 유지해야 한다.

실행 명령은 \`cargo test --offline --manifest-path server/Cargo.toml --test withdrawal_control\`부터 시작한다.
새 제어 검사는 작성 뒤 별도로 실행하고, 소스가 같은 DB이전3개는 기존 근거를 재사용한다.
전체 범위는 대상 목록과 소스 결박을 합쳐 확인한다. 실패 시 원인과 바뀐 입력을 확인하고 영향을 받는 대상만 재검사한다.
기한 정리·삭제 정책·관리 UI는 후속 계획으로 이어지며 이 제어 단계의 통과로 완료 처리하지 않는다.

## 실행 결과 — 2026-11-08

확장 실행의 점검 fixture1개 실패는 시간 구간만 수정한 뒤 해당1개를 다시 통과했다. 나머지26개의 소스는 같다.
HTTP655건·기존55개 자료 테이블40,078행·실제 SQLite3.46 분리 측정을 확인했다. HTTP 동등성은 ERR-20으로 남긴다.
이 계획의 제어 단계만 기능 검증을 마쳤다. 실제 정리·관리 UI·전체 탈퇴는 완료하지 않았다.`,filtered:!0,sourceHash:"4860e96230e4d45a489def7b6dfea6a0cf1d577e3472543fe32a209d849aad69"},{id:"docs-plans-2026-11-08-performance-md",title:"응답 지연 원인과 운영 부하 실행 계획",path:"docs/plans/2026-11-08-performance.md",category:"실행 계획",status:"후속 계획·미완료",body:`# 응답 지연 원인과 운영 부하 실행 계획

## 최신 인수 기준 — 2026-11-10

팀 내부용 관리 서버를 우선한다. 외부 고객 문의는 현재 범위 밖이므로 아래 과거 support 선행·정책 대기는 적용하지 않는다. 실제 제품 파일의 최신 소유권·편집 종료·소스 digest를 대조해 인수한다. 정책이 미정인 실제 영구 삭제는 여전히 실행하지 않는다.
복구·자료 운영·로컬 지연·관리 UI 중 내부 관리에 필요한 작업은 독립적으로 준비할 수 있다. 외부 공급자·실기기 연결이 모두 끝날 때까지 내부 관리 작업을 막지 않는다. 운영 부하/SLO의 배포 이후 원칙과 기존 검증 한계는 유지한다.

**목표:** 위 스펙의 결과를 실제로 구현하고 검증한다.
**스펙:** [REMAINING_PERFORMANCE.md](../specs/REMAINING_PERFORMANCE.md)
**관련 작업:** TODO D01·D02
**편집 대상:** scripts/performance/ 및 이 작업의 검증 산출물

## 실행 조건

독립적인 원인 분석과 격리 측정부터 시작한다. 제품 코드 수정은 support·withdrawal-purge 편집 종료 뒤 해당 파일 소유권을 인수한다. 다른 검사 실행과 겹치는 부하는 실행하지 않는다.
통합 계획의 검사 소유권과 공유 파일 인수 순서를 지킨다.

## 실행 순서

- [ ] 미확인 정책·설정·현재 API/스키마를 대조하고 스펙의 열린 결정을 구체화한다.
- [ ] 기존 helper·표준 라이브러리·설치 의존성 순서로 재사용하고 파일별 변경과 검사 명령을 확정한다.
- [ ] 소유권/정책에 의존하지 않는 준비와 격리 fixture를 먼저 완료한다.
- [ ] 필수 동작의 실패를 확인한 뒤 최소 구현을 작성한다.
- [ ] 동일 입력/환경의 전후 비교, bounded stress·자원 정리, 회귀 원인과 개선의 재현, 성능 보호 유지, 미확인 항목과 기능 실패/자원 실패를 구분한 기록을 남긴다. 목표 SLO의 미확정은 후보와 승인 필요를 분리한다.
- [ ] 소스가 고정된 범위의 검사 결과를 기록하고 전체 통합 검사 실행 소유자와 조정한다.
- [ ] 이 계획 끝에 상태·편집 종료·산출물/로그·digest·남은 실패·다음 인수 조건을 기록한다.

## 현재 상태

실제 배포 이후 후속 작업. 로컬 표본 재분석은 끝났고 부하 테스트는 미실행이다. 담당 채팅은 \`01a1b9a7-63f7-7492-b9ed-b74250b33fc3\`이다. 제품 파일은 아직 인수하지 않았다. 기존 변경은 모두 다른 작성자의 변경으로 보존한다.

## 독립 준비의 실행 계약 — 2026-11-08

기존 스펙과 실행 지시를 따른다. 이번 단계는 제품 동작을 바꾸지 않는 표본 재분석이다.
실행은 현재 채팅이 맡는다. 별도 에이전트나 worktree를 만들지 않는다.

- [x] CONTEXT·TODO·통합 계획·성능 스펙과 선행 두 채팅의 실행 상태를 읽었다.
- [x] \`lib.rs\`의 HTTP 처리와 \`Store::run\`의 슬롯·연결 재사용·백그라운드 작업을 추적했다.
- [x] \`scripts/performance/audit_samples.py\`로 기존 JSON의 \`samples_ms\`를 재계산한다.
- [x] \`scripts/performance/test_audit_samples.py\`로 분위수 순위·단위·잘못된 입력·기록 불일치를 검사한다.

표본 분석은 Python 표준 라이브러리만 쓴다. 서버·포트·Chrome·원본 DB·Cargo를 점유하지 않는다.
분석은 원본 digest, 표본 수, p50, nearest-rank p95, 최댓값, 시간 순서의 앞뒤 절반을 기록한다.
유효하지 않은 표본과 기록된 분위수의 불일치는 명시적인 실패다. 누락한 표본 배열도 별도로 기록한다.
시간 순서의 비교는 관측값이다. 통계적 동등성·원인·SLO 통과의 근거로 쓰지 않는다.
공유 파일 인수 후 같은 고정 실행본의 HTTP·슬롯·blocking·SQL 계측을 분리하는 다음 단계에 사용한다.

## 유지할 보호와 다음 측정

- DB 슬롯은 8개다. \`try_acquire_owned\`는 슬롯을 기다리지 않고 초과 요청에 \`503 server_busy\`를 반환한다.
- \`spawn_blocking\`의 시작 대기와 DB 작업 시간은 현재 HTTP 표본에서 분리할 수 없다.
- 연결은 오류가 없고 autocommit일 때만 재사용한다. 준비문 캐시는 기본 16개다.
- WAL·FULL·외래 키·3초 busy_timeout과 거래 밖 KDF를 유지한다.
- HTTP 본문은 16KiB로 제한한다. 기존 보호를 끄는 비교는 하지 않는다.

운영 규모와 SLO는 사용자 지정값이 없다. 첫 후보는 동시 요청 1·4·8·16개를 같은 입력으로 비교하는 로컬 검사다.
16개 조건에서는 보호에 따른 503과 기능 실패를 나눠 기록한다. 이 후보를 운영 용량으로 확정하지 않는다.
공유 실행 권한을 인수한 뒤에만 부하를 실행한다. 각 조건에 예열·전체 기한·자원 상한·프로세스 정리를 둔다.
D01의 RPO·RTO는 recovery-integration의 계약과 함께 결정해야 한다. 임의 수치를 승인된 목표로 쓰지 않는다.

## 독립 준비 결과와 다음 인수 조건

이 단계의 편집은 끝났다. 허용한 두 Python 파일과 성능 계획·검증 산출물만 작성했다.
117개 표본 배열을 분석했고 검사 5개를 통과했다. 첫 분석의 p50 정의 불일치와 수정 근거도 보존했다.
D01·D02와 ERR-08·10·11·12·14·15·16·18·19·20은 미완료다.
과거 실행본·DB·소스의 \`/tmp\` 사본이 없어 동일 입력의 HTTP 재실행은 불가능하다.
현재 제품 127개 소스의 digest는 DB22 기록과 일치했다. 제품 검사를 새로 통과했다는 뜻은 아니다.

다음 행동은 support와 withdrawal-purge의 인계 기록을 대조해 공유 파일과 겹치는 검사 실행권을 인수하는 것이다.
그때까지 제품 파일·원본 자료·공유 포트·Chrome·Cargo를 점유하지 않는다.
회복·UI 채팅이 읽을 근거는 이 계획과 조사 기록이다. 통합 완료로 해석하지 않는다.

support는 정책 설명 뒤 idle이며 제품 파일을 아직 수정하지 않았다고 보고했다. 제품 인계는 없다.
등록 링크 조사 세션과 최종 검사 세션은 모두 완료했다. 현재 이 채팅이 실행 중인 명령은 없다.

## 사용자 지시에 따른 실행 시점 변경 — 2026-11-08

D01의 성능 목표 확정과 D02의 부하 테스트를 실제 배포 이후 후속 작업으로 옮겼다.
현재는 로컬 개발 단계다. 동시 요청 1·4·8·16개 검사는 후보이며 실행하지 않았다.
기존 표본 분석과 도구 검사만 완료했다. HTTP 지연 원인·운영 용량·성능 동등성은 미확인으로 남긴다.
이 결정은 앞서 적은 즉시 인수·부하 실행 순서보다 우선한다. 선행 채팅의 인계만으로 부하 테스트를 시작하지 않는다.

원본 작업 목록은 TODO D01·D02다. CONTEXT의 DEC-08에 같은 결정을 연결했다.
실제 배포 뒤 대상 환경·실행본·검사 자료·허용 부하를 확인하고 운영 규모와 지연·오류율 목표를 정한다.
그 뒤 고정한 입력으로 부하와 자원을 측정한다.
제품 코드와 기존 검사 결과는 바꾸지 않았다. 이번 변경은 문서 3개의 상태·재개 조건 기록이다.`,filtered:!0,sourceHash:"41b9e98e91fdfad0aaa10f276c9af69ee4a87e3b749d90975a4f8634934684c8"},{id:"docs-plans-2026-11-08-recovery-integration-md",title:"백업·복원·장애와 게임·외부 연결 실행 계획",path:"docs/plans/2026-11-08-recovery-integration.md",category:"실행 계획",status:"후속 계획·미완료",body:`# 백업·복원·장애와 게임·외부 연결 실행 계획

## 최신 인수 기준 — 2026-11-10

팀 내부용 관리 서버를 우선한다. 외부 고객 문의는 현재 범위 밖이므로 아래 과거 support 선행·정책 대기는 적용하지 않는다. 실제 제품 파일의 최신 소유권·편집 종료·소스 digest를 대조해 인수한다. 정책이 미정인 실제 영구 삭제는 여전히 실행하지 않는다.
복구·자료 운영·로컬 지연·관리 UI 중 내부 관리에 필요한 작업은 독립적으로 준비할 수 있다. 외부 공급자·실기기 연결이 모두 끝날 때까지 내부 관리 작업을 막지 않는다. 운영 부하/SLO의 배포 이후 원칙과 기존 검증 한계는 유지한다.

**목표:** 위 스펙의 결과를 실제로 구현하고 검증한다.
**스펙:** [REMAINING_RECOVERY_INTEGRATION.md](../specs/REMAINING_RECOVERY_INTEGRATION.md)
**관련 작업:** TODO C06·D03·B05·B06·F01–F04
**편집 대상:** scripts/recovery/, integration/ 안의 플랫폼 측 코드·검사와 이 작업 문서

## 실행 조건

독립적인 백업/복원 설계·격리 fixture와 외부 설정 재고부터 진행한다. 공유 서버 파일은 support→withdrawal-purge→performance 인계 뒤 수정한다. 다른 게임 저장소는 읽기만 하며 별도 편집 인수 없이 수정하지 않는다.
통합 계획의 검사 소유권과 공유 파일 인수 순서를 지킨다.

## 실행 순서

- [x] 미확인 정책·설정·현재 API와 스키마를 대조하고 열린 결정을 아래 기록에 구체화했다.
- [x] 기존 helper·표준 라이브러리·설치 의존성 순서로 재사용하고 파일별 변경과 검사 명령을 확정했다.
- [x] 소유권과 정책에 의존하지 않는 준비와 격리 fixture를 완료했다.
- [x] 독립 도구와 클라이언트의 실패를 확인한 뒤 최소 구현을 작성했다. 제품 연결은 남아 있다.
- [ ] 백업 SHA·스키마·도메인행·quick/FK, 독립 복원 서버의 실제 API, 중복 지급/유실 방지, SDK 기한·취소·이전 저장 호환, 공급자 sandbox 증거·APK hash·실기기 결과를 남긴다. 설정 부족은 해당 단계만 미검증으로 남기고 독립 로컬 단계를 완료한다.
- [ ] 소스가 고정된 범위의 검사 결과를 기록하고 전체 통합 검사 실행 소유자와 조정한다.
- [x] 이 계획 끝에 독립 단계의 상태·편집 종료·산출물·로그·digest·남은 실패·다음 인수 조건을 기록했다.

## 현재 상태

기존 수정은 시작 시 git status로 확인했다. 부모 CONTEXT·TODO·통합 계획과 다른 작성자의 변경은 보존한다.

## 독립 준비의 구체적 계획

기존 스펙과 실행 승인을 따른다. 새로운 전체 goal·브랜치·worktree는 만들지 않는다.

### 1. 새 경로 백업·복원과 격리 검사

- 파일: \`scripts/recovery/sqlite_snapshot.py\`, \`scripts/recovery/self_check.py\`.
- 입력: 기존 SQLite 파일, 존재하지 않는 목적지, 유한 기한. Python 표준 라이브러리를 사용한다.
- 동작: 정상 read-only SQLite 연결로 WAL을 포함해 backup한다. immutable와 live 파일 단순 복사는 사용하지 않는다.
- 목적지의 부모는 미리 존재해야 한다. 임시 파일 검증 후 목적지를 배타적으로 게시한다. 기존 파일은 덮어쓰지 않는다.
- SHA256, user_version, 스키마 해시, 테이블별 행 수/내용 해시, quick_check와 foreign_key_check를 JSON으로 출력한다.
- [x] 먼저 실행 검사를 작성했다. 구현 부재로 exit 1인 결과를 확인했다.
- [x] 도구 구현 후 같은 검사를 실행했다. live WAL의 확정 행·미확정 행 제외·새 DB 복원·기존 목적지 보호·잘못된 입력·잠금 기한을 확인한다.
- [x] 명령: \`python3 scripts/recovery/self_check.py\`. 각 자식은 timeout을 가지며 외부 실행 기한도 둔다.
- 검토 조건: 경로의 URI 특수문자, 기존 목적지/심볼릭 링크, WAL 미확정 쓰기, FK 위반, 잠긴 DB를 확인한다.
- ERR-17의 원본 실패는 경로·권한·sqlite errorcode가 없어 원인을 확정할 수 없다. 통제한 재현과 원본 결론을 구분한다.

### 2. 외부 연결 입력과 게임 연결 경계

- 파일: \`integration/recovery-readiness.json\`.
- 기존 SDK·게임 부트·저장·flush·계정 전환 경계를 읽고 현재 파일 해시를 기록한다.
- Firebase 설정·StageOS 자격·Android SDK/APK의 존재만 확인한다. 비밀 내용은 읽거나 출력하지 않는다.
- 다른 저장소의 코드·빌드 출력·저장 파일은 변경하지 않는다. 실제 푸시/결제/Config 갱신은 실행하지 않는다.
- 실제 소비 연결에는 선택한 진행 필드·기존 저장 이전·계정별 저장 수명이 필요하다. 미확정 값은 제품 기본값으로 만들지 않는다.

### 3. 플랫폼 측 TypeScript 클라이언트의 격리 준비

- 파일: \`integration/platform-client.ts\`, \`integration/platform-client.test.ts\`.
- 콘솔의 api helper는 쿠키와 같은 origin에 묶인다. 게임은 별도 origin과 Bearer 세션을 쓰므로 직접 재사용하지 않는다.
- 기존 서버 계약의 게스트 생성·로그인·진행 조회·저장·갱신·종료만 연결한다. 현재 허용 진행은 schema_version·stage·intro_seen이다.
- 자격은 메모리에만 둔다. 저장 위치·실제 게임 필드 대응·로컬 이전 정책은 확정하지 않는다.
- 요청마다 기한·호출자 취소·계정 세대 취소를 합친다. 세대가 바뀐 응답은 소비자에게 반환하지 않는다.
- 같은 저장 식별자의 동시 호출은 한 요청을 공유한다. 다른 본문의 식별자 재사용은 거부한다. 자동 재시도·자동 덮어쓰기는 하지 않는다.
- [x] 구현 전 ERR_MODULE_NOT_FOUND와 exit 1을 확인했다.
- [x] 명령: \`node --test --test-timeout=5000 integration/platform-client.test.ts\`.
- [x] 명령: \`node console/node_modules/typescript/bin/tsc --noEmit --strict --target es2022 --module esnext --lib es2022,dom --skipLibCheck integration/platform-client.ts\`.
- 격리 검사는 fetch 입력과 지연 응답을 통제한다. 실제 Rust API·MinbWebKit·게임·기기 실행 성공으로 보고하지 않는다.

### 4. 공유 파일 인수 뒤 실행

- 고정 실행본과 DB를 확보한 뒤 새 경로 복원 서버의 실제 API·권한·진행·지급 재전달을 검사한다.
- 저장 확정 후 응답 전의 프로세스 종료는 실제 HTTP 경계에서 검사한다. 단순 SQLite fixture를 제품 장애 복구 성공으로 보고하지 않는다.
- 전체 검사·부하·브라우저는 직전 실행 소유자와 인수한 뒤 실행한다. 이번 격리 fixture는 해당 검사와 겹치지 않는다.

## 열린 결정과 한계

- 백업 보관 기간·RPO/RTO·운영 배포 환경은 미확정이다. 측정값을 목표 SLO로 바꾸지 않는다.
- 게임/MinbWebKit 편집 인수는 없다. 외부 공급자 sandbox/실기기 검증은 입력과 권한 확인 후 실행한다.

## 독립 단계 결과 — 2026-11-08

### 변경과 실행 근거

- [SQLite 도구](../../scripts/recovery/sqlite_snapshot.py): 새 경로에만 backup한다. 임시 파일을 검사한 뒤 배타적 hard link로 게시한다.
- [격리 검사](../../scripts/recovery/self_check.py): WAL의 확정 행 보존과 미확정 행 제외를 확인했다. 스키마·BLOB·행 해시·독립 쓰기도 대조했다.
- 같은 검사에서 기존 파일·심볼릭 링크·없는 원본·없는 부모·손상·외래키 위반을 거부했다. 잠금 오류의 기한과 임시 파일 정리도 확인했다.
- fixture는 테이블 2개다. user_version=22 표시는 검사 입력이며 실제 DB22 스키마 검증이 아니다. fixture DB는 검사 후 삭제했다.
- [플랫폼 클라이언트](../../integration/platform-client.ts): 게스트·세션·진행 API와 기한·취소·계정 세대를 연결했다. 같은 저장의 동시 호출은 요청 하나를 공유한다.
- [클라이언트 검사](../../integration/platform-client.test.ts): 10개를 통과했다. 충돌·HTTP 비JSON 오류·중복 호출·늦은 응답·로그인 완료 직전 계정 전환을 확인했다.
- [입력 재고](../../integration/recovery-readiness.json): 게임 소스 13개의 SHA256과 설정 존재를 기록했다. 비밀 내용과 해시는 읽지 않았다.
- [검사 기록](../../scripts/recovery/evidence/verification.json): 명령·종료 코드·기한·환경·소스 digest를 기록했다. Python 구문과 TypeScript 타입·Prettier도 통과했다.
- [복원 로그](../../scripts/recovery/evidence/self-check.log)와 [클라이언트 로그](../../scripts/recovery/evidence/client-test.log)를 보존했다.

초기 복원 검사는 도구 파일이 없어 exit 1이었다. 초기 클라이언트 검사는 모듈이 없어 exit 1이었다.
구현 뒤 검토에서 비JSON HTTP 오류가 SyntaxError로 바뀌는 실패를 확인했다. HTTP 상태 보존으로 수정했다.
로그인 완료 직전 계정 전환 검사도 먼저 실패했다. 로그인·갱신 완료 시 계정 세대를 다시 확인해 수정했다.
두 실패는 [HTTP 오류 기록](../../scripts/recovery/evidence/client-http-error-red.log)과 [계정 전환 기록](../../scripts/recovery/evidence/client-lifecycle-red.log)에 남겼다.

### ERR-17 진단 범위

과거 실패 기록에는 \`unable to open database file\`과 0바이트 목적지만 있다. 정확한 경로·권한·SQLite 오류 코드는 없다.
과거 오프라인 백업 \`/tmp/platform-session-revocation-final-offline.sqlite3\`도 현재 존재하지 않는다.
원본 실패를 재현하거나 원인을 확정하지 못했다. 과거 기록은 수정하지 않았다.
격리 검사에서는 없는 부모 경로로 같은 메시지와 \`SQLITE_CANTOPEN\` 14를 재현했다. 이 통제 조건은 과거 원인의 증명이 아니다.
새 도구는 없는 부모와 기존 목적지를 먼저 거부한다. SQLite 오류는 이름과 코드를 출력한다.

### 외부 입력과 유지 조건

- Firebase 설정, Google 서비스 계정, StageOS 로그인, Android local.properties와 Config.dat는 조사한 기대 경로에 없다.
- adb 실행 파일과 표준 Android SDK 경로도 없다. APK 후보는 조회한 출력 경로에 0개다.
- 환경변수의 설정 여부는 입력 재고에 별도 기록했다. 이 관찰은 모든 위치에 설정이 없다는 증명이 아니다.
- 게임은 \`currentStageId\` 문자열을 사용한다. 서버 \`stage\` 정수로 바꾸는 규칙과 기존 저장 이전은 미확정이다.
- 게임의 동기 저장·이전·기기 설정·IAP flush·프레임 보호를 읽었다. 게임과 키트 파일은 수정하지 않았다.
- 요청 기한·취소의 격리 검사는 실제 WebView 호환·게임 실행·시작 시간·FPS를 입증하지 않는다.

### 인수와 다음 행동

따라서 공용 API·Store·migration·콘솔·전체 검사·Chrome·공유 포트는 사용하거나 수정하지 않았다.
전체 기능 목표와 TODO 완료 체크는 바꾸지 않았다. 부모 CONTEXT·TODO·통합 계획도 수정하지 않았다.

다음 행동은 support→withdrawal-purge→performance의 인계를 확인하고 정확한 실행본·DB 입력을 고정하는 것이다.
이후 온라인 백업→새 DB 복원→독립 서버 API→저장 후 응답 전 종료→재전달 검사를 실행한다.
보관 기간·RPO/RTO·게임 저장 이전·외부 sandbox·실기기 결정은 미확정으로 유지한다.
실제 발송·결제·배포·다른 저장소 편집은 실행하지 않았다. 커밋과 push도 없다.`,filtered:!0,sourceHash:"6330a0fe5cacca9d9cbbaf71bc8111fef5b783f98d7d129ef86a31521989c01c"},{id:"remaining",title:"남은 작업의 세션 이관 계획",path:"docs/plans/2026-11-08-remaining-workstreams.md",category:"실행 계획",status:"후속 계획·미완료",body:`# 남은 작업의 세션 이관 계획

## 최신 범위 — 2026-11-10

현재 우선 대상은 **Rust 기반 팀 내부용 관리 서버**다. 프로젝트·환경·권한·유저/데이터·콘텐츠/경제·감사 등 내부 관리 흐름과 필요한 안정성·복구를 우선한다.
외부 고객의 문의 접수·답변·처리 기능은 **현 단계 고려 범위 밖**이다. 문의 정책 결정과 support 구현·인계는 다른 내부 관리 작업의 선행 조건이 아니다. 기존 문의 스펙과 조사 결과는 이력으로 보존하며 완료로 체크하지 않는다.
초기 MSA·별도 Gateway·gRPC 방향이 취소된 것으로 해석하지 않는다. 현재 로컬 단일 프로세스 구현과 장기 구조 선택을 구분한다.
기존 외부 연동·실시간 기능은 구현 이력/후속 요구로 보존한다. 이 지시만으로 모두 취소하거나 현재 내부 관리 서버의 필수 선행 조건으로 확대하지 않는다.

사용자가 2026-11-08에 남은 다섯 작업의 스펙·계획 작성과 별도 작업 채팅 이관을 요청했다.
이 요청은 아래 작업의 실행을 허용한다. 기존 전체 goal은 사용자가 해제했으므로 자동 재생성하지 않는다.
TODO.md를 유일한 작업 목록으로 유지하고, 아래 문서는 실행 계약·담당·인수 조건만 관리한다.

## 공유 파일과 검사 소유권

같은 체크아웃을 사용한다. 사용자 요청이 없는 worktree/브랜치 생성은 하지 않는다.
기존 support → withdrawal-purge → performance → recovery-integration → ui-refactor 순서는 과거 배정이다. 현재 support는 범위 밖이며 인계 선행 조건에서 제외한다. 내부 관리에 필요한 복구·지연 원인·자료 수명·UI 작업은 정책 의존과 실제 파일 소유권을 확인해 순서를 정한다.
각 채팅은 자기 스펙·계획과 고유 파일을 맡는다. 다른 채팅의 계획·현재 문맥·TODO·이 통합 문서는 덮어쓰지 않는다.
api.rs/lib.rs/store.rs/App.tsx·DB migration·공유 검사 수정은 위 순서로 한 작성자만 인수한다.
선행 조건이 남으면 독립 조사·설계·격리 준비를 진행한다. 순환 대기를 만들지 않는다.
각 채팅은 자기 계획에 변경·검사·상태를 기록하며 후속 채팅이 그 계획을 읽는다.
검사 소유자는 실제 인수 시 한 명으로 지정한다. support의 완료를 기다리지 않으며 직전 편집 종료·소스 digest·검사 범위를 대조한다.
전체 검사·겹치는 검사·부하·브라우저·공유 포트는 동시에 점유하지 않는다. 일반 고유 fixture 검사는 독립적으로 실행할 수 있다.
현재 424개 근거는 source127 digest가 맞는 범위에서만 재사용한다. 새 기능에 대한 검증으로 대체하지 않는다.

## 미결정과 실행 제한

탈퇴의 보관 정책은 아직 미확정이다. 정책안·삭제 대상표는 구체화하되 실제 영구 삭제는 결정 전 실행하지 않는다.
성능 SLO·운영 규모는 가정과 사용자 지정값을 구분한다. 보호 코드나 기준을 낮추지 않는다.
외부 자격·sandbox·실기기는 실제 존재를 확인한다. 부족한 입력 때문에 독립 로컬 구현을 중단하지 않는다.
실제 발송·결제·배포·원본 덮어쓰기·다른 저장소 편집은 자동 승인으로 확대하지 않는다.
UI 제품 편집은 앞선 기능 완료와 승인 기준 확인 이후다. 현재는 UI 현황 조사와 구체적인 개선안까지만 진행한다.

## 세션 배정

생성 결과는 아래에 기록한다. 생성은 작업 완료가 아니며 초기 실행 상태를 별도로 확인한다.
| --- | --- | --- | --- |
| 고객 문의 생성·조회·답변 — 현재 범위 밖, 과거 배정 | 01a1b9a7-35cf-7130-894a-46ede7c72337 | local | [계획](2026-11-08-support.md) |
| 탈퇴 자료 정리와 관리 UI | 01a1b9a7-4eea-7c51-bfc4-acb6961dc662 | local | [계획](2026-11-08-withdrawal-purge.md) |
| 응답 지연 원인과 운영 부하 | 01a1b9a7-63f7-7492-b9ed-b74250b33fc3 | local | [계획](2026-11-08-performance.md) |
| 백업·복원·장애와 게임·외부 연결 | 01a1b9a7-805b-7942-8cb9-65048e13333c | local | [계획](2026-11-08-recovery-integration.md) |
| 기능 완료 이후 관리 콘솔 리팩터링 | 01a1b9a7-95c9-7cb1-8ea7-945b2a4227ea | local | [계획](2026-11-08-ui-refactor.md) |`,filtered:!0,sourceHash:"e27461169b558984c2a9345a9c5e2310a943f09cd1f550e95725b6dce17da63a"},{id:"docs-plans-2026-11-08-support-md",title:"고객 문의 생성·조회·답변 실행 계획",path:"docs/plans/2026-11-08-support.md",category:"실행 계획",status:"현재 범위 밖",body:`# 고객 문의 생성·조회·답변 실행 계획

## 현재 상태 변경 — 2026-11-10

**OUT_OF_CURRENT_SCOPE.** 팀 내부용 관리 서버를 우선하며 외부 고객 문의의 접수·답변·처리는 현재 고려하지 않는다는 사용자 지시를 반영했다.

**목표:** 위 스펙의 결과를 실제로 구현하고 검증한다.
**스펙:** [REMAINING_SUPPORT.md](../specs/REMAINING_SUPPORT.md)
**관련 작업:** TODO E07
**편집 대상:** server/src/support.rs, support-schema.sql, server/tests/support*.rs, console/src/Support.tsx 및 지원 연결에 필요한 api.rs/lib.rs/store.rs/App.tsx

## 실행 조건

현재는 범위 밖이므로 제품 편집과 공유 검사를 인수하지 않는다. 아래 실행 절차는 재개 결정이 있을 때만 검토한다.
통합 계획의 검사 소유권과 공유 파일 인수 순서를 지킨다.

## 실행 순서

- [ ] 미확인 정책·설정·현재 API/스키마를 대조하고 스펙의 열린 결정을 구체화한다.
- [ ] 기존 helper·표준 라이브러리·설치 의존성 순서로 재사용하고 파일별 변경과 검사 명령을 확정한다.
- [ ] 소유권/정책에 의존하지 않는 준비와 격리 fixture를 먼저 완료한다.
- [ ] 필수 동작의 실패를 확인한 뒤 최소 구현을 작성한다.
- [ ] 타인/다른 환경404, viewer 변경403, 같은 명령의 답변 중복 없음, 변경 본문409, 감사 실패 전체 취소, 동시 답변 CAS, 51개 keyset 페이지, 응답 유실 재시도와 최신 GET, Chrome owner/viewer 흐름을 검증한다.
- [ ] 소스가 고정된 범위의 검사 결과를 기록하고 전체 통합 검사 실행 소유자와 조정한다.
- [ ] 이 계획 끝에 상태·편집 종료·산출물/로그·digest·남은 실패·다음 인수 조건을 기록한다.

## 현재 상태

현재 범위 밖. 과거 계획·정책 설명까지 진행했으며 제품 구현은 미완료다. 과거 채팅 ID는 통합 계획의 세션 배정표에서 확인한다. 다른 채팅의 수정과 사용자의 변경을 되돌리지 않는다.`,filtered:!0,sourceHash:"d749724e9c62b79c0d459fe3f564efbe6895295d2147be67bf359c2a8be7e6a4"},{id:"docs-plans-2026-11-08-ui-refactor-md",title:"기능 완료 이후 관리 콘솔 리팩터링 실행 계획",path:"docs/plans/2026-11-08-ui-refactor.md",category:"실행 계획",status:"후속 계획·미완료",body:`# 기능 완료 이후 관리 콘솔 리팩터링 실행 계획

## 최신 인수 기준 — 2026-11-10

팀 내부용 관리 서버를 우선한다. 외부 고객 문의는 현재 범위 밖이므로 아래 과거 support 선행·정책 대기는 적용하지 않는다. 실제 제품 파일의 최신 소유권·편집 종료·소스 digest를 대조해 인수한다. 정책이 미정인 실제 영구 삭제는 여전히 실행하지 않는다.
복구·자료 운영·로컬 지연·관리 UI 중 내부 관리에 필요한 작업은 독립적으로 준비할 수 있다. 외부 공급자·실기기 연결이 모두 끝날 때까지 내부 관리 작업을 막지 않는다. 운영 부하/SLO의 배포 이후 원칙과 기존 검증 한계는 유지한다.

**목표:** 위 스펙의 결과를 실제로 구현하고 검증한다.
**스펙:** [REMAINING_UI_REFACTOR.md](../specs/REMAINING_UI_REFACTOR.md)
**관련 작업:** TODO A06·B07
**편집 대상:** console/src/ 내 인계받은 UI 파일과 UI 검사

## 실행 조건

지금은 기존 화면·접근성·오류/로딩/재시도 상태를 읽고 개선 스펙을 구체화한다. 제품 UI 편집은 앞선 기능 세션 완료·API 고정·화면 기준 확인 후에만 시작한다.
통합 계획의 검사 소유권과 공유 파일 인수 순서를 지킨다.

## 실행 순서

- [ ] 미확인 정책·설정·현재 API/스키마를 대조하고 스펙의 열린 결정을 구체화한다.
- [ ] 기존 helper·표준 라이브러리·설치 의존성 순서로 재사용하고 파일별 변경과 검사 명령을 확정한다.
- [ ] 소유권/정책에 의존하지 않는 준비와 격리 fixture를 먼저 완료한다.
- [ ] 필수 동작의 실패를 확인한 뒤 최소 구현을 작성한다.
- [ ] 연결 Chrome에서 같은 크기/상태의 화면, 키보드·접근 가능한 이름, owner/editor/viewer, loading/empty/error/unknown-result, 프로젝트 전환 중 늦은 응답, API 호환·요청 수·렌더링·자원 정리를 검증한다. Playwright 금지.
- [ ] 소스가 고정된 범위의 검사 결과를 기록하고 전체 통합 검사 실행 소유자와 조정한다.
- [ ] 이 계획 끝에 상태·편집 종료·산출물/로그·digest·남은 실패·다음 인수 조건을 기록한다.

## 현재 상태

제품 구현·화면 검증·성능 비교는 미완료다. 전체 A06·B07 후속 작업이나 플랫폼 완료를 뜻하지 않는다.
담당 채팅은 \`01a1b9a7-95c9-7cb1-8ea7-945b2a4227ea\`, host는 \`local\`이다.

## 소유권과 독립 단계의 완료 조건

이 채팅은 자체 스펙·이 계획·고유 조사 기록만 편집한다.
제품 파일과 공유 검사는 인수하지 않았다. Chrome 탭·서버·공유 포트도 점유하지 않았다.
부모의 TODO·CONTEXT·통합 계획과 다른 채팅의 수정은 보존한다.
독립 단계의 완료 조건은 소스 기반 화면 목록, 보존 계약, 변경안, 검증표와 입력 digest다.
제품의 완료 조건은 스펙에 남아 있으며 독립 단계의 완료와 구분한다.

## 조사 근거와 확인한 차이

- 현재 입력의 HEAD는 \`4310819447bd4f148b1775767b26d2bd865cd513\`이다. dirty 파일도 별도로 해시한다.
- \`App.tsx\`의 진입·로그인·프로젝트·환경·메뉴·상세·진행·감사 흐름을 읽었다.
- \`lib/api.ts\`와 두 API 검사, 공통 Button·CSS·Vite 설정을 읽었다.
- \`PlayerSessions\` 전체와 프로필·접근 제어의 조회·명령 흐름, 게임 데이터·그룹의 조회·재전달 경계를 확인했다.
- 조사 시점의 \`package.json\`은 React·Lucide·Radix Slot·CVA·Tailwind를 사용한다. 새 의존성은 추가하지 않았다.
- 조회 훅의 기존 값 유지와 명령별 잠금 범위가 다르다. 공통 훅이나 공통 명령 계층은 확정하지 않았다.
- 연결 Chrome 검증 자료의 탭 \`1490592041\`과 \`http://localhost:5188/\`는 과거 근거다. 현재 탭 상태로 보고하지 않는다.

현재 상태별 계약과 세 가지 변경안은 [스펙](../specs/REMAINING_UI_REFACTOR.md)에 적었다.
파일 분리부터 시작하는 안을 제안하지만 구현안으로 확정하지 않는다.

## 제품 편집 전 인수 조건

2. 앞선 support·withdrawal-purge·performance 결과와 남은 실패를 확인한다.
3. 인계 파일 목록·소스 digest·API 계약·실행본·검사 소유자를 대조한다.
4. 기능 완료 범위와 사용자 화면 기준을 확인한다.
5. 스펙의 변경안을 선택하고 파일별 계획과 검증 소유권을 고정한다.

단순한 대기 종료나 채팅의 idle 상태로 위 조건을 대신하지 않는다.
외부 공급자 대기와 기능 완료의 관계가 불명확하면 부모가 범위를 정해야 한다.
UI 작업이 전체 기능 목표를 축소하거나 다른 작업의 실패를 완료로 바꾸지 않는다.

## 인수 뒤 사용할 최소 변경 순서 — 미실행

1. 인계된 콘솔에서 승인 화면과 같은 크기·데이터·역할의 변경 전 상태를 보존한다.
2. 선택한 파일 분리 또는 표시 요소 추출에 맞는 최소 실패 검사를 정한다.
3. 기존 helper와 설치된 도구로 최소 변경을 작성한다.
4. 변경한 경계의 동작을 검사한다.
5. 승인 화면·권한·요청 수·정리와 성능을 같은 입력으로 비교한다.
6. 인계된 검사 근거와 현재 digest를 대조한다.

현재 설치된 검사는 \`npm --prefix console test\`와 \`npm --prefix console run build\`다.
필요한 범위를 실행할 소유자를 정한 뒤 사용한다. 지금은 support의 통합 검사와 겹치므로 실행하지 않았다.
소유권을 받으면 단위 검사는 60초, 빌드는 120초의 외부 기한을 둔다.
검사 프로세스가 끝나지 않으면 로그와 자식 프로세스부터 확인한다.
Chrome은 연결된 전용 탭으로 확인하며 Playwright는 사용하지 않는다.
브라우저의 장애 주입·요청 계측 기능은 아직 확인하지 못했다.
필요한 기능이 없으면 인계된 격리 게이트웨이 근거를 확인하고 해당 검사만 미검증으로 남긴다.

## 실행 기록과 남은 항목

이 기록의 문서 검사는 링크·필수 항목·입력 digest를 확인한다. 제품 동작 검사가 아니다.
문서 검사에서 내부 링크 8개·코드 블록·필수 상태 항목을 확인했다. 종료 코드는 0이다.
조사 전후 콘솔 입력 30개 파일의 해시는 같았다. 입력은 \`console/src\`와 루트 설정 6개 파일이다.
합산 SHA-256은 \`ddbfccd5dd32a27388ac933881e0567f68b9f9f9cb8b463478f2fefd0954f149\`다.
\`git diff --check\`는 종료 코드 0이다. 미추적 문서의 검사는 위 Python 문서 검사로 구분한다.
전체 서버 검사·콘솔 검사·빌드·실제 API·Chrome·성능 검사는 실행하지 않았다.
기존 424개·HTTP655건을 새 UI 검증으로 재사용하지 않았다.
새 기능의 UI, 역할별 실제 권한, 지연 응답, 재시도, 렌더링 비용은 아직 확인하지 못했다.
새 제품 실패를 재현하거나 수정한 결과는 없다. 기존 ERR-20의 해결도 주장하지 않는다.

**다음 행동:** 직전 계획의 명시적인 인계가 생기면 위 인수 조건을 대조한다.`,filtered:!0,sourceHash:"08d534621a09d53b6d0ad2a5504fea8a0f113687780f351558158381da25ed83"},{id:"docs-plans-2026-11-08-withdrawal-purge-md",title:"탈퇴 자료 정리와 관리 UI 실행 계획",path:"docs/plans/2026-11-08-withdrawal-purge.md",category:"실행 계획",status:"후속 계획·미완료",body:`# 탈퇴 자료 정리와 관리 UI 실행 계획

## 최신 인수 기준 — 2026-11-10

팀 내부용 관리 서버를 우선한다. 외부 고객 문의는 현재 범위 밖이므로 아래 과거 support 선행·정책 대기는 적용하지 않는다. 실제 제품 파일의 최신 소유권·편집 종료·소스 digest를 대조해 인수한다. 정책이 미정인 실제 영구 삭제는 여전히 실행하지 않는다.
복구·자료 운영·로컬 지연·관리 UI 중 내부 관리에 필요한 작업은 독립적으로 준비할 수 있다. 외부 공급자·실기기 연결이 모두 끝날 때까지 내부 관리 작업을 막지 않는다. 운영 부하/SLO의 배포 이후 원칙과 기존 검증 한계는 유지한다.

**목표:** 위 스펙의 결과를 실제로 구현하고 검증한다.
**스펙:** [REMAINING_WITHDRAWAL_PURGE.md](../specs/REMAINING_WITHDRAWAL_PURGE.md)
**관련 작업:** TODO A03
**편집 대상:** server/src/withdrawal.rs 및 새 정리 모듈·검사, console/src/PlayerWithdrawal.tsx

## 실행 조건

통합 계획의 검사 소유권과 공유 파일 인수 순서를 지킨다.

## 실행 순서

- [x] 미확인 정책·설정·현재 API/스키마를 대조하고 스펙의 열린 결정을 구체화한다.
- [ ] 기존 helper·표준 라이브러리·설치 의존성 순서로 재사용하고 파일별 변경과 검사 명령을 확정한다.
- [x] 소유권/정책에 의존하지 않는 준비와 격리 fixture를 먼저 완료한다.
- [ ] 필수 동작의 실패를 확인한 뒤 최소 구현을 작성한다.
- [ ] 정책별 삭제/보존 행, 다른 유저 불변, 기한 경계, 철회 경합, 작업 중 강제 종료/재시작, 감사/정리 실패 취소·재개, ID 재사용, 원래 bearer 기한까지의 제한 receipt를 검증한다.
- [ ] 소스가 고정된 범위의 검사 결과를 기록하고 전체 통합 검사 실행 소유자와 조정한다.
- [ ] 이 계획 끝에 상태·편집 종료·산출물/로그·digest·남은 실패·다음 인수 조건을 기록한다.

## 현재 상태

독립 준비를 마쳤다. 실제 정리와 관리 UI는 미완료다.
담당은 \`withdrawal-purge\` 채팅 \`01a1b9a7-4eea-7c51-bfc4-acb6961dc662\`, host는 \`local\`이다.
관련 작업은 TODO A03이며 전체 계정·플랫폼 목표를 유지한다.
이 계획을 작업 상태의 원본으로 쓴다. 부모의 CONTEXT·TODO·통합 계획은 수정하지 않았다.

## 독립 준비의 변경 범위

- \`docs/specs/REMAINING_WITHDRAWAL_PURGE.md\`: 현재 59개 테이블의 대상표, 세 가지 정책안, 배치와 관리 UI의 제안을 추가했다.
- \`scripts/withdrawal-purge-inventory.py\`: 기존 마이그레이션을 빈 메모리 DB에 적용하고 제약을 재현한다. 실제 DB 경로를 받지 않는다.
- 이 계획: 소유권·실행 결과·재개 조건을 기록한다.

기존 변경은 모두 다른 작성자의 작업으로 취급했다. HEAD는 \`4310819447bd4f148b1775767b26d2bd865cd513\`, 브랜치는 \`main\`이다.
별도 브랜치·worktree·의존성·제품 코드는 추가하지 않았다.

## 구현 순서와 검사 소유권

현재는 정책·공유 파일 인계에 의존하지 않는 준비만 실행했다.
기존 스펙과 계획의 실행 승인을 유지하되, 새로 제안한 보관 정책을 확정으로 해석하지 않는다.

### 1. 공유 파일을 인수하고 대상표를 고정한다

- [ ] support 계획의 정확한 파일 목록·소스 digest·편집 종료·남은 실패를 확인한다.
- [ ] support가 추가한 문의 테이블과 명령 payload를 대상표에 연결한다.
- [ ] 정책 버전·보관 기간·마스터 처리·미지급 정산·식별자 재사용의 답변을 스펙에 기록한다.
- [ ] 인수한 소스와 의존성의 SHA256을 고정하고 이전 실행 근거의 재사용 범위를 판정한다.

### 2. 제한 배치와 정리 상태를 구현한다

편집 대상은 \`server/src/withdrawal.rs\`, 새 정리 모듈과 전용 검사다.
상태 스키마·\`store.rs\`·\`lib.rs\`·\`api.rs\` 연결은 공유 파일 인수 뒤 필수 변경만 한다.
기존 \`group_lifecycle.rs\`의 cursor·버전·배치 거래를 참고한다. 큐나 새 저장소 계층은 만들지 않는다.
정확한 타입과 API 필드는 정책 결정 뒤 확정한다. 실행하지 않을 임시 경로를 제품에 노출하지 않는다.

- [ ] 정리 대상 유저·다른 유저·다른 환경을 포함한 실패 검사를 \`server/tests/withdrawal_purge.rs\`에 먼저 작성한다.
- [ ] \`cargo test --manifest-path server/Cargo.toml --test withdrawal_purge\`로 필요한 동작이 없어서 실패함을 확인한다.
- [ ] 같은 거래에서 최신 예약 버전·기한을 검사하고 제한된 자료 변경·cursor·감사를 확정한다.
- [ ] 개인행은 인덱스 항목을 먼저 삭제한다. 공유 잔액과 확정 정산·쿠폰 사용량을 보존한다.
- [ ] 관리자 지급·정산·인덱스 빌드가 자료를 다시 쓰는 경로를 조사하고 필수 호출부를 함께 연결한다.
- [ ] 같은 전용 검사를 실행해 정책별 삭제·보존, 다른 유저 불변, 기한 경계, 철회 경합, 감사 실패 취소를 확인한다.
- [ ] 기존 bearer 만료 전의 정확한 receipt 재전달과 만료 뒤 거절을 API 검사로 확인한다.
- [ ] 격리 파일 DB에서 배치 사이 강제 종료와 재시작을 확인한다. 이미 끝난 배치의 중복 실행도 확인한다.

### 3. 관리 UI를 연결한다

편집 대상은 \`console/src/PlayerWithdrawal.tsx\`와 이를 연결하는 필수 호출부다.
기존 \`PlayerAccess.tsx\`의 요청 보관·AbortController·권한·busy 처리를 기준으로 삼는다.

- [ ] 서버 기능을 검증한 뒤 support의 화면과 같은 크기·상태에서 승인 기준을 확인한다.
- [ ] 조회·예약·철회·같은 요청 재시도·최신 GET을 기존 패널 구조에 연결한다.
- [ ] 최소 실행 시각과 실제 완료를 구분한다. 실패·재개는 확정한 서버 계약만 따른다.
- [ ] Chrome 점유를 인수한 뒤 owner·viewer·응답 유실·경합·키보드 흐름을 확인한다.
- [ ] 전체 검사 소유권을 인수한 상태에서 필요한 Rust·클라이언트·형식·타입 검사를 실행한다.
- [ ] 같은 입력과 환경의 전후 성능을 비교한다. 기존 8슬롯·16개 준비문 캐시·WAL/FULL·3초 DB 제한은 유지한다.

## 실행 근거 — 2026-11-08

제품 파일과 전체 검사 소유권은 인수하지 않았다. 포트·서버·Chrome을 사용하지 않았다.

실행 명령은 \`python3 scripts/withdrawal-purge-inventory.py\`다.
Python 부모 프로세스가 \`subprocess.run(..., timeout=20, capture_output=True)\`으로 실행했다.
출력은 262,144바이트 아래인지 검사한 뒤 위 JSON 근거 파일에 저장했다.
SQLite 진행 처리기는 10초가 넘은 쿼리를 중단한다. 연결은 성공·실패와 무관하게 닫는다.
exit code는 \`0\`이며 Python SQLite 버전은 \`3.54.0\`이다.

검사 6개를 통과했다.

- 유저 직접 삭제는 진행 자료의 외래 키 때문에 실패한다.
- 개인행 삭제 전에 인덱스 항목을 지워야 한다.
- 합성 배치를 취소하면 개인행·인덱스 항목·다른 유저의 진행 자료가 유지된다.
- receipt는 유저 행을 삭제한 뒤에도 남는다. API 인증·만료 동작은 이 검사에서 실행하지 않았다.
- 길드 기부 원장의 유저를 \`NULL\`로 바꾸면 제약 위반으로 실패한다.
- 멤버를 지워도 길드와 잔액은 남는다. DB는 마스터 없는 길드를 막지 않는다.

같은 근거 JSON의 테이블 목록을 문서와 대조했다. 59개 중 누락은 0개다.
유저를 직접 외래 키로 참조하는 테이블은 23개다. 외래 키가 없는 JSON·actor·cursor도 대상표에 따로 기록했다.
이 검사는 제품 정리 구현을 검증한 것이 아니다. Rust 전체·HTTP·Chrome·성능·실제 재시작 검사는 실행하지 않았다.
424개 기존 Rust 검사와 HTTP655건을 새 정리 기능의 완료 근거로 재사용하지 않았다.

## 입력 digest와 근거 재사용 조건

근거 JSON의 \`source_sha256\`은 \`store.rs\`와 실제로 읽은 마이그레이션 22개의 바이트를 기록한다.
읽기 전후의 바이트가 같음을 검사했다. \`script_sha256\`은 검사 스크립트 자체를 결박한다.
이 23개 입력이나 Python SQLite 환경이 바뀌면 해당 스키마 근거를 다시 판정한다.
support가 DB23을 추가하면 현재 59개 대상표와 이 실행 결과를 최신 스키마의 근거로 쓰지 않는다.

별도로 읽은 구현의 SHA256은 다음과 같다. 이는 실행본 해시나 API 검사 결과가 아니다.

| 입력 | SHA256 |
| --- | --- |
| \`server/src/withdrawal.rs\` | \`4a43be3de7deb5b548bb8ad3f1b312f8babe7f5f91b18d931f7f68cc23c3b204\` |
| \`server/src/economy.rs\` | \`9ad0640eef4bd9864f1e3aab5acb743903d28c9085535e63a68c985c15b20e92\` |
| \`server/src/guild_leaderboards.rs\` | \`e70eef95b7fe54c73a3f82f6eaf0822a06dd84e18d7d1895ea89ee0bd4a1febe\` |
| \`server/src/leaderboards.rs\` | \`bbd405eef8f3bdbafb571360eb3fe65400ff04c8ed319771c5442aa1699f0621\` |
| \`console/src/PlayerAccess.tsx\` | \`003430b3e127c643c4e62e8cd5c76346b300d539eb18d45e8d23095d22f95fbb\` |
| \`server/Cargo.lock\` | \`43302e04e8319066397a78ea8a753e874df8007674c69ceb118d56aac020128d\` |

## 남은 결정과 인수 상태

- 독립 산출물의 편집 종료: 아래 문서 검사 근거에 기록한다.
- 확인한 기능 실패: 없음. 실제 제품 정리 검사는 아직 없으므로 기능 통과를 뜻하지 않는다.
- 미확정: 이력 보관 필드와 기간, 길드 마스터, 정산 중 미지급 보상, 식별자 재사용, 문의 보관 정책.
- 대기: 사용자 정책 답변과 support의 정확한 인계. 타이머와 무응답은 인계 근거로 쓰지 않는다.
- 사용자 응답: 권고안을 승인하는 대신 hard delete와 soft delete의 정확한 범위를 요청했다. 구분을 스펙에 추가했다.
- 다음 행동: 사용자 정책 답변과 support 인계가 갖춰지면 새 문의 스키마를 대상표에 추가하고 제품 구현을 인수한다.

설치 파일은 고치지 않았다. 문서는 \`문서\` 표면을 적용했다.

## 독립 준비의 최종 대조

해당 채팅은 제품 코드를 아직 수정하지 않았고 입력 길이·접수 빈도·보관 기간도 미확정이라고 보고했다.

독립 산출물의 편집은 이 기록을 끝으로 마쳤다. 사용자 답변에 따른 정책 수정은 새 단계로 기록한다.
부모 색인과 CONTEXT·TODO는 이 채팅에서 수정하지 않는다.`,filtered:!0,sourceHash:"db52be1559d6c49f27852b378cfa08da51fee57d3b6d3288392e9590c7cadf16"},{id:"v2",title:"게임 백엔드 플랫폼 기획서 V2",path:"docs/plans/2026-11-10-backend-platform-v2.md",category:"실행 계획",status:"현재 기획 기준",body:`# 게임 백엔드 플랫폼 기획서 V2

팀 내부 관리 서버와 Android 및 iOS 빌드 파이프라인

작성 기준 2026년 11월 10일  |  버전 2.0  |  내부 검토용

### 이번 버전의 결론

1차 제품은 내부 팀이 여러 게임의 계정, 데이터, 콘텐츠와 운영 상태를 관리하는 Rust 기반 서버다. 기존 관리 API와 React 콘솔을 이어서 안정화하고, 그다음 Android와 iOS 앱을 반복해서 빌드하고 검증할 수 있는 파이프라인을 구축한다.

외부 고객의 문의 접수, 자기 문의 조회, 관리자 답변, 첨부와 고객지원 처리 이력은 현재 개발 범위에서 제외한다. 내부 감사, 장애 기록, 데이터 보호와 복구는 관리 서버 운영에 필요하므로 유지한다.

### 범위 변경 요약

| 항목 | V2에서 적용할 방향 |
| --- | --- |
| 우선 사용자 | 내부 개발자와 운영자. 외부 고객용 SaaS 가입과 문의 센터는 제공하지 않는다. |
| 첫 완료 목표 | 내부 운영자가 권한에 맞게 프로젝트와 게임 데이터를 안전하게 관리하는 서버와 콘솔. |
| 제외한 선행 작업 | 고객 문의 구현을 기다리는 기존 작업 순서를 해제한다. 문의 코드나 데이터를 삭제하라는 뜻은 아니다. |
| 새 후속 목표 | 공통 빌드 계약 → Android 내부 검증 → iOS 내부 검증 → 승인된 배포 채널 연결. |
| 구현과 계획 | 현재 구현·검증의 현황은 1절에 정리한다. 후속 항목은 요구사항, 제안 또는 결정 대기로 구분한다. |

### 문서 사용 기준

이 문서는 기존 재구성안과 플랫폼 설계를 보존한 별도 V2다. 기획 작성은 신규 기능 구현, 자격증명 등록, 유료 서비스 사용, 스토어 업로드 또는 공개 배포를 실행한 결과가 아니다. 날짜와 담당자는 확정하지 않았으며, 단계별 완료 조건으로 작업을 나눈다.

모바일 구현 방식은 최종 미확정이다. 기존 조사에서 확인한 Phaser·TypeScript·MinbWebKit·Capacitor 경로를 우선 재검토하되, 현재 소스와 실제 빌드 호환성을 확인하기 전에는 확정 스택으로 취급하지 않는다. [S1–S4]

## 1 현재 구현과 검증 기준

소스 기준은 HEAD 4310819와 클라우드 사본의 추가 문서다. 아래 상태는 코드, 기능별 스펙, 11월 10일 이관 검증 기록과 공개 진행현황을 대조한 결과다. 이 기획서 작성 중 제품 테스트를 다시 실행하지는 않았다. [S2–S5]

| 영역 | 확인한 현재 상태 |
| --- | --- |
| 관리 기반 | Rust API와 React 콘솔의 로그인, 프로젝트·환경 선택, 역할과 감사의 첫 흐름 구현·검증. 운영 배포 수명주기는 남음. |
| 계정과 데이터 | 게스트·커스텀 계정, 세션 폐기, 프로필, 접근 차단, 버전 저장과 데이터 조회·인덱스 등 부분 구현. 소셜 계정·복구·실제 게임 연결은 남음. |
| 콘텐츠와 경제 | 공지·차트 버전·게시·되돌리기, 캐시, 이벤트·점검·버전 정책, 지갑·원장·우편·쿠폰·확률 지급의 주요 흐름 구현. 전체 경제·장애 검증은 미완료. |
| 경쟁과 소셜 | 개인·길드·그룹 랭킹, 친구, 길드, 그룹 수명주기의 주요 흐름 구현. 실제 게임 점수 신뢰와 전체 제공 범위는 미완료. |
| 탈퇴 | 예약·철회·인증 차단·세션 폐기 구현. 실제 개인 자료 정리와 보존 정책, 관리 UI는 미완료. |
| 고객 문의 | 스펙·계획이 존재하지만 제품 구현 완료 근거 없음. V2 현재 범위에서는 제외. |
| 외부와 실시간 | 외부 연결은 조사·격리 준비 수준. 채팅·매치·월드는 미구현. |
| 모바일 빌드 | 웹·Android 연결 조사 자료는 있음. Android와 iOS 자동 빌드·서명·기기 검증·스토어 배포 파이프라인의 완료 근거 없음. |

### 재사용할 검증 기록과 한계

2026년 11월 10일 클라우드 사본에서 Rust 424개, 콘솔 3개, 연동 클라이언트 10개, 성능 분석 도구 5개, 복구 도구 격리 시나리오 12개와 신규 임시 DB의 HTTP 10개 흐름이 통과했다. Clippy, rustfmt, 콘솔 타입 검사·빌드·형식 검사도 통과했다. [S3]

기존 HTTP 655건은 11월 7–8일 기록이며 위 10개 흐름과 다른 실행이다. 원본 운영 DB 복원, 제품 브라우저 전역 행동, 실제 게임·기기·외부 공급자와 운영 부하는 이번 이관 검증 범위 밖이다. 테스트 개수를 제품 완성률로 계산하지 않는다.

## 2 내부 관리 서버의 1차 요구사항

기존 기능을 새로 만드는 대신 현재 구현을 기준으로 내부 업무의 시작부터 실패 복구까지 연결한다. 아래 항목은 1차 인수 요구사항이며, 모두 이미 완성됐다는 뜻은 아니다.

### 관리자와 프로젝트

- 관리자는 로그인 후 접근 가능한 프로젝트와 환경만 본다. owner, editor, viewer의 변경 권한을 서버에서 검사한다.
- 프로젝트·환경을 바꾸면 이전 요청과 결과가 새 화면에 섞이지 않아야 한다. 운영 환경의 변경은 대상과 사유를 명확히 남긴다.
- 관리자 추가·역할 변경·퇴사 시 권한 회수·세션 폐기의 실제 운영 절차를 문서화한다.

### 유저 데이터와 운영 기능

- 유저 검색, 프로필, 진행, 테이블과 행, 콘텐츠, 보상·원장, 랭킹·소셜의 현재 기능을 내부 운영 흐름으로 정리한다. 미구현 기능은 동작하는 메뉴처럼 표시하지 않는다.
- 데이터 수정은 소유권, 환경, 허용 필드와 버전을 검사한다. 보상과 경제 상태는 서버 명령으로 처리하고 관리자 입력도 검증한다.
- 중복 요청은 중복 지급이나 중복 정산을 만들지 않는다. 다른 본문으로 요청 ID를 재사용하거나 오래된 버전으로 수정하면 명시적으로 충돌을 반환한다.
- 감사 기록에는 행위자, 대상, 사유, 결과와 관련 요청을 연결한다. 비밀번호·토큰·서명 키는 기록하지 않는다.

### 운영에 필요한 미완료 작업

- 탈퇴 자료의 보관·정리 범위와 기한을 결정한 뒤 재시작 가능한 정리 작업과 상태 조회를 연결한다. 정책 확정과 별도 실행 권한 없이 실제 영구 삭제를 수행하지 않는다.
- 실제 플랫폼 스키마를 가진 DB의 백업과 독립 복원 서버를 검증한다. 작은 fixture를 복원한 결과로 실제 플랫폼 복원을 완료 처리하지 않는다.
- 장애 기록, 상태 확인, 용량 경고, 백업 실패와 작업 실패를 운영자가 확인할 수 있게 한다. 알림 수신처와 전송 여부는 따로 정한다.

### 1차에서 제외하거나 미루는 항목

외부 고객 문의 기능은 현재 범위 밖이다. 외부 고객 가입·과금·요금제, 공개 SaaS 운영, 새로운 실시간 채팅·매치·월드, 모든 게임 기능의 확장도 1차 완료 조건에 넣지 않는다. 기존 장기 조사와 구현 자산은 유지하며, 실제 게임의 필요가 생길 때 별도 범위로 재검토한다.

## 3 서버 구성과 운영 전제

### 현재 구성과 제안 구성

현재 서버는 Rust·Axum·Tokio와 rusqlite·SQLite를 사용하고, 콘솔은 React·TypeScript·Vite 기반이다. 우선 이 구조에서 책임을 분리한 단일 애플리케이션으로 내부 관리 흐름을 안정화하는 안을 제안한다. 운영 DB와 배포 환경은 아직 확정하지 않는다. [S2, S5]

모바일 빌드가 추가되면 관리 서버는 빌드 요청·권한·상태·산출물 메타데이터를 맡고, 별도 실행기나 CI 서비스가 실제 컴파일과 서명을 맡는다. 컴파일 작업이 관리 API의 CPU·메모리·DB 자원을 장시간 점유하지 않도록 분리한다. 이 빌드 제어 기능은 신규 요구사항이다.

| 구성 요소 | 책임과 경계 |
| --- | --- |
| React 관리 콘솔 | 프로젝트와 환경, 운영 데이터, 후속 빌드 이력·상태 확인. 서명 비밀값을 화면에 노출하지 않는다. |
| Rust 관리 API | 인증·역할·환경 격리, 업무 규칙, 감사, 빌드 요청 검증과 상태 조회. 임의 셸 명령 실행 API를 만들지 않는다. |
| 저장소와 DB | 게임 상태·감사·작업 상태 보존. 빌드 바이너리는 접근 제어된 산출물 저장소에 두고 DB에는 위치와 해시를 기록한다. |
| Linux 실행기 후보 | 서버·웹·Android 빌드와 검사. iOS 최종 빌드를 실행하는 환경으로 간주하지 않는다. |
| macOS 실행기 후보 | 지원하는 Xcode로 iOS 검사·archive·서명·export. 개발자 개인 세션과 CI 실행 자격을 분리한다. |

### 초기 운영 기준

- 내부 접근망과 인증 방식, TLS, 도메인, 비밀값 보관소, DB·산출물 백업 위치를 배포 전에 결정한다. 내부 사용자만 있어도 서버의 권한·입력 검증은 유지한다.
- SQLite를 사용하면 단일 writer와 백업 방식을 운영 조건에 맞춰 확인한다. 다중 서버·공유 작업자 필요가 생기면 PostgreSQL 등 대안을 비교한다.
- 기존 MSA·Gateway·gRPC·Go Match 방향을 취소했다고 해석하지 않는다. 현재 구현과의 간극을 남기고 서비스 분리 여부는 별도 아키텍처 결정으로 다룬다. [S4]

운영 규모·성능 목표 확정과 운영 부하 테스트는 기존 결정대로 실제 서버 배포 이후 후속이다. 그 전에도 권한·복구·기본 자원 제한과 로컬 회귀 검사는 수행한다. 정적 진행현황 페이지 게시는 실제 서버 배포에 해당하지 않는다.

## 4 게임 연동과 모바일 준비

### 기술 스택의 현재 근거

2026년 11월 3일 조사에서는 Escape Ball의 avoid-ball-origin, Project/MinbWebKit, Native/android와 Phaser·TypeScript·Capacitor 경로가 확인됐다. 이 자료는 당시 소스 조사이며 현재 Android 빌드 성공이나 iOS 프로젝트 존재의 증거가 아니다. 당시 앱 ID com.storio.avoidball도 파이프라인 착수 시 다시 확인한다. [S6]

모바일 기술은 후보로 남긴다. 기존 Capacitor 경로를 유지할지, 네이티브나 다른 엔진의 빌드가 필요한지는 소비 게임의 현행 저장소와 지원 플러그인을 확인한 뒤 정한다. React는 관리 콘솔 기술이며 모바일 게임 프레임워크로 지정한 것이 아니다.

### 먼저 확정할 연동 계약

- 서버에 동기화할 진행 필드와 로컬 전용 설정을 구분한다. 기존 저장 키·버전 이전·동기 StorageLike·flush 완료 의미를 유지한다.
- 인증 시작, 세션 만료·회전, 로그아웃, 계정 전환과 이전 요청 취소를 정의한다. 타임아웃을 빈 저장으로 해석하지 않는다.
- 오프라인 저장과 재전송은 서버 버전 충돌을 드러내고 임의로 최신 데이터를 덮어쓰지 않는다. 같은 명령을 재전송해도 보상은 한 번만 반영한다.
- 게임의 재화·아이템·구매 기록을 클라이언트 저장 전체와 함께 신뢰하지 않는다. 구매 검증·지급·복구는 별도 계약으로 연결한다.
- StageOS Config는 제작 데이터다. Firebase Remote Config로 대체하지 않는다. Firebase Analytics·Crashlytics와 푸시·스토어는 각 기능을 쓸 때 필요한 입력과 검증을 분리한다.

### 저장소별 책임

| 대상 | 후속 작업 |
| --- | --- |
| 백엔드 플랫폼 | 실제 API·공개 타입·버전·오류 계약을 일치시키고 격리 클라이언트 검사를 유지한다. |
| MinbWebKit | 선택형 연결 모듈과 세션·취소·재시도 책임. 서버 연결을 쓰지 않는 게임에 새 대기나 호출을 강제하지 않는다. |
| 소비 게임 | 게임별 데이터 매핑, 기능 선택, 앱 설정과 빌드 명령. 해당 저장소 편집 범위는 구현 착수 전에 별도 확인한다. |

Android와 iOS 자동화에 들어가기 전에 각 대상에서 수동으로 재현 가능한 빌드 명령, 원본 저장소·커밋, 의존 버전, 필요한 설정 목록을 확보한다. 아직 없는 iOS 호스트나 플러그인 구현을 파이프라인 파일만으로 해결했다고 표시하지 않는다.

## 5 공통 빌드 파이프라인 요구사항

CI 제품은 미정이다. GitHub Actions, 다른 호스팅 CI 또는 팀 전용 실행기 중 접근 권한·macOS 제공·비용·보안 조건에 맞춰 선택한다. 관리 서버가 기존 CI를 호출하고 상태를 모으는 얇은 연동부터 시작하는 안을 권한다.

### 빌드 입력과 산출물

| 종류 | 필수 기록 |
| --- | --- |
| 요청 | 프로젝트, 저장소, 확정 커밋 SHA, 플랫폼, 환경, 빌드 프로필, 앱 식별자, 요청자, 요청 사유. |
| 재현 정보 | 키트·서브모듈 SHA, lockfile 해시, 툴체인·실행기 이미지 버전, 빌드 스크립트 버전, 비밀값을 제외한 설정 버전. |
| 결과 | 작업 ID와 시도 번호, 상태와 시간, 검증 결과, 제한된 로그, 산출물 해시·크기, 서명 인증서 식별 정보, 보관 만료. |
| 배포 기록 | 빌드 결과와 별도인 채널, 승인자, 업로드 ID, 처리 상태, 배포 대상과 릴리스 기록. 비밀 키 자체는 저장하지 않는다. |

### 실행 흐름

요청 검증 → 대기열 → 고정 소스 확보 → 의존성 설치 → 웹·게임 검사 → 플랫폼 빌드 → 산출물 검증 → 비공개 보관 → 승인된 경우에만 채널 업로드 순서로 구성한다. Capacitor를 채택하면 웹 번들 생성 뒤 native sync 단계를 둔다. [S7]

- 자동 검사는 신뢰하는 변경과 PR을 대상으로 구성할 수 있다. 서명과 외부 업로드는 보호된 브랜치·태그 및 승인된 실행만 허용한다.
- 같은 프로젝트·플랫폼·환경의 중복 실행과 앱 빌드 번호 충돌을 막는다. 취소된 실행의 늦은 콜백이 최신 성공 결과를 덮어쓰지 못하게 시도 번호를 확인한다.
- 실행기 손실·시간 초과·사용자 취소·테스트 실패·서명 실패·업로드 실패를 구분한다. 실행 중 상태에는 heartbeat와 기한을 두고 유실된 작업을 탐지한다.
- 로그와 산출물은 프로젝트 권한으로 접근을 제한한다. 다운로드 주소에는 만료를 두고 운영 비밀값과 개인정보를 포함한 원문을 보관하지 않는다.

### 성공의 정의

컴파일 성공, 검증 성공, 서명 완료, 업로드 접수, 공급자 처리 완료, 테스터 설치와 일반 공개를 별도 상태로 관리한다. 같은 입력의 빌드를 다시 추적할 수 있어야 하며, 플랫폼 서명·타임스탬프 때문에 바이너리 해시가 반드시 동일하다고 약속하지 않는다.

## 6 Android 빌드 파이프라인

### 착수 전제

- 현행 Android 호스트와 빌드 모듈, 앱 ID, flavor·buildType, 최소·대상 SDK, ABI, JDK·Gradle·Android Gradle Plugin의 호환 조합을 확인한다. 버전은 lockfile·wrapper·설정으로 고정한다.
- 기존 앱이면 기존 서명 계보와 앱 ID를 유지한다. keystore·alias·키 비밀번호, 업로드 키와 Play App Signing 사용 여부는 권한 있는 담당자가 확인하고 승인된 보관소로 관리한다.
- Firebase·스토어·푸시 설정이 없어도 가능한 검사와 실패해야 할 검사를 구분한다. release에 필수인 설정이 없으면 명시적으로 차단한다.

### 단계와 검증

| 단계 | 작업과 통과 조건 |
| --- | --- |
| A1 재현 빌드 | 고정 커밋·의존성에서 웹 빌드 및 native sync를 재현한다. 이 단계는 Capacitor 채택 시 적용한다. |
| A2 자동 검사 | 게임·키트 타입과 테스트, Android lint·단위 검사를 실행한다. 실제 저장소에 있는 task 이름을 확인해 연결한다. |
| A3 내부 설치본 | debug 또는 내부 테스트용 APK를 만들고 패키지·버전·권한·서명·해시를 검증한다. debug 통과를 release 통과로 표시하지 않는다. |
| A4 배포 후보 | 승인된 키로 release APK 또는 AAB를 생성한다. AAB는 직접 설치 파일이 아니므로 APK 생성·테스트 경로를 별도로 둔다. |
| A5 실제 기기 | 설치·시작·서버 로그인·저장·재시작·오프라인 복구·세션 만료와 이전 버전에서 업데이트를 검사한다. |
| A6 내부 배포 | 대상 앱과 내부 트랙·테스터, 업로드 권한을 확정한 뒤 승인된 산출물만 보낸다. 업로드 처리 결과와 설치 결과를 기록한다. |

### 완료 조건

깨끗한 실행기에서 동일 소스·설정으로 재실행할 수 있고, 서명된 내부 설치본의 기기 검증과 서버 연동이 통과해야 한다. 실패 로그, APK/AAB 해시, 버전, 기기·OS와 검사 결과를 함께 남긴다. 실제 사용하지 않는 구매·푸시 기능을 자동으로 완료 조건에 넣지는 않는다.

Google Play용 AAB의 업로드 키와 실제 배포 앱 서명 키는 역할이 다르다. 키를 새로 만드는 것으로 기존 앱 업데이트 호환성을 대체하지 않는다. 지원 SDK·스토어 요구는 구현과 업로드 시점에 공식 문서로 다시 확인한다. [S8, S9]

## 7 iOS 빌드 파이프라인

### 착수 전제

- iOS 프로젝트의 존재와 생성 방식, workspace 또는 project, 공유 scheme, bundle ID, 최소 iOS, 지원 기기와 native 플러그인의 iOS 구현을 확인한다.
- 지원하는 macOS와 Xcode를 가진 실행기가 필요하다. 현재 Linux 클라우드의 서버 검사 통과는 iOS 빌드 가능 여부를 입증하지 않는다. [S7]
- 배포 서명에는 Apple Developer 팀, App ID, 인증서·개인키, provisioning profile과 entitlements의 일치를 확인한다. TestFlight 연동 시 App Store Connect 앱·권한·승인된 업로드 인증이 필요하다.
- CocoaPods 또는 Swift Package Manager 등 의존성 방식은 프로젝트에 맞춰 선택한다. Android와 같은 플러그인이 있어도 iOS 권한·개인정보 선언·기능 호환은 따로 검사한다.

### 단계와 검증

| 단계 | 작업과 통과 조건 |
| --- | --- |
| I1 프로젝트 준비 | 게임 번들과 iOS native 연결을 재현한다. iOS 호스트가 없다면 먼저 구현 범위와 플러그인 지원을 확정한다. |
| I2 시뮬레이터 | 타입·단위 검사와 iOS 시뮬레이터 빌드·기본 흐름을 확인한다. 서명된 실기기 배포 성공과 구분한다. |
| I3 배포 archive | 승인된 Xcode·scheme·설정에서 배포용 archive를 생성하고 서명·profile·entitlements·bundle ID·버전을 검증한다. |
| I4 export와 보관 | 선택한 배포 방식에 맞춰 export하거나 승인된 CI의 업로드 흐름을 사용한다. IPA·archive·dSYM 등 실제 산출물과 보관 정책을 기록한다. |
| I5 내부 TestFlight | 승인된 앱에 업로드한 뒤 Apple 처리 결과를 확인한다. 내부 테스터의 설치·시작·서버 연동을 검증한다. 외부 테스터 배포는 별도다. |
| I6 기기 회귀 | 실기기에서 저장·재개·계정 전환·세션 만료·오프라인·업데이트를 확인하고 사용하는 native 기능을 추가 검증한다. |

### 완료 조건

지원하는 macOS 실행기에서 재빌드 가능한 archive와 배포 후보, 서명 검증, 내부 테스트 설치와 서버 연결 결과가 있어야 한다. 빌드 번호는 중복 업로드와 충돌하지 않게 관리한다. 인증서·프로파일 만료와 키 교체 절차를 문서화한다.

Apple의 업로드 접수 뒤에는 처리 단계가 있다. 파일 생성이나 HTTP 성공만으로 TestFlight 사용 가능 또는 App Store 공개라고 표시하지 않는다. 제출 시점의 Xcode·SDK 요구, 개인정보·수출 관련 정보와 심사 조건을 다시 확인한다. [S10, S11]

## 8 보안과 실패 복구 요구사항

### 소스와 실행기 격리

- 외부 기여 PR, 검증되지 않은 브랜치와 의존성 설치 스크립트는 서명·배포 비밀값이 있는 실행기에서 실행하지 않는다. 테스트 실행기와 서명 실행기를 분리하고 필요한 권한만 부여한다.
- CI 연동 권한은 저장소·환경·작업 범위를 제한한다. 지원하는 공급자에는 짧은 수명의 자격을 우선 검토하되 OIDC가 Apple·Android 서명 키를 대신한다고 가정하지 않는다. [S12]
- 서명 자격을 임시 파일이나 임시 keychain으로 주입했다면 성공·실패·취소 때 정리한다. 실행기 재사용 시 캐시·작업 공간·로그에 비밀값이 남지 않는지 확인한다.
- 앱 번들에는 API 주소 같은 공개 설정만 넣는다. 관리자 토큰, DB 자격과 공급자 서버 비밀을 넣지 않는다. 비밀값 마스킹과 별도로 산출물 노출 검사를 둔다.

### 권한과 승인

빌드 요청·취소·산출물 조회·배포 승인 권한을 분리한다. 기존 owner/editor/viewer를 그대로 확장할지 전용 빌드 역할을 둘지는 미결정이다. 운영 환경 변경과 서명·외부 업로드는 실행 시 대상·산출물·채널을 확인하고 감사에 남긴다.

### 반드시 검증할 실패 상황

| 상황 | 기대 결과 |
| --- | --- |
| 중복 요청·콜백 | 요청과 시도를 식별하고 상태를 한 번만 전이한다. 완료 작업을 이전 콜백이 되돌리지 못한다. |
| 실행기 종료·취소 | 시간 초과를 탐지하고 작업을 실패 또는 중단으로 정리한다. 서명 파일과 임시 자원을 회수한다. |
| 산출물 변조 | 해시 불일치·다른 앱 ID·다른 환경·잘못된 서명을 배포 전에 차단한다. |
| 업로드 응답 유실 | 공급자 상태와 빌드 번호를 조회한 뒤 재시도를 결정한다. 성공 여부 불명 상태를 무조건 재업로드하지 않는다. |
| 잘못된 릴리스 | 추가 배포를 중단하고 검증한 수정 버전으로 복구한다. 이미 설치된 앱을 즉시 과거 바이너리로 되돌릴 수 있다고 약속하지 않는다. |
| 서버 호환 실패 | 지원 중인 앱 버전과 API·DB 변경의 호환성을 확인한다. 데이터 이전의 역호환 없는 롤백은 별도 복구 계획을 따른다. |

공개 로그·공개 진행 페이지에는 소스 비밀값, 사용자 데이터, 원본 DB, 서명 자격과 내부 다운로드 주소를 올리지 않는다. 보관 기간·삭제·백업 정책은 문서와 운영 설정에 함께 반영한다.

## 9 단계별 실행 계획

아래 순서는 제안이며 기간을 약속하지 않는다. 고객 문의는 어떤 단계의 선행 조건에도 넣지 않는다. 정책이나 외부 입력이 막힌 작업과 독립적으로 가능한 개발·검증은 분리한다.

| 단계 | 핵심 산출물 | 다음 단계로 넘어갈 조건 |
| --- | --- | --- |
| M0 범위 정리 | V2와 기존 TODO 연결, 담당·파일 편집 경계, 결정 대기 목록 | 내부 관리 우선과 문의 제외 반영. 중복 작업·공유 파일 소유권 확인. |
| M1 내부 서버 안정화 | 권한·감사·기존 관리 흐름, 탈퇴 정책과 필요한 정리, 복구 절차 | 직접 API 권한·실제 DB 복원·핵심 장애 회귀 통과. 미완료 범위 명시. |
| M2 내부 운영 시범 | 승인된 배포 구성, 비밀값·백업·상태 확인·실패 대응 | 실제 서버 배포는 별도 승인. 제한된 내부 접근과 복구 담당·절차 확인. |
| M3 빌드 공통 기반 | 저장소·커밋·환경·버전·산출물 계약, CI·실행기 선택 | 실제 게임의 수동 빌드 재현. API·SDK와 앱 설정 매핑 확인. |
| M4 Android | 자동 검사·APK/AAB 생성·서명·기기 검사 | 깨끗한 실행기 재현, 내부 기기 설치·업데이트·서버 흐름 통과. |
| M5 iOS | macOS 실행기·프로젝트·archive·서명·TestFlight 준비 | 시뮬레이터와 실기기 구분 검증. 승인된 내부 설치 경로 확인. |
| M6 배포 운영 | 내부 채널 연동과 승인·재시도·중단·관측 | 채널별 업로드 권한과 대상 승인, 공급자 처리 및 설치 결과 확인. |

### 기존 계획과의 연결

P1–P4의 구현 자산을 M1에서 재사용한다. P5는 고객 문의를 제외하고 내부 로그·감사·필요한 작업 실행만 연결한다. P6의 외부 기능은 실제 게임이 사용하는 항목부터 별도로 검증한다. P7–P9는 1차 서버와 모바일 빌드의 필수 선행 작업이 아니다. [S2]

기존 탈퇴·성능·복구/연동·UI 작업은 support의 완료를 기다리지 않도록 인계를 재정리한다. 삭제 정책 미결정은 실제 정리 작업만 막고, 격리 fixture와 안전한 준비 작업은 계속할 수 있다. UI 리팩터링은 현재 기능 보존과 필요한 화면 범위를 확인한 뒤 별도로 진행한다.

운영 부하·SLO는 M2 실제 서버 배포 이후의 후속 작업으로 연결한다. CI 준비와 iOS 환경 조사 등 읽기·설계 작업은 M1과 병행 가능하지만 제품 변경과 검사는 담당 경계를 정한 뒤 실행한다.

## 10 인수 검증과 완료 판정

각 단계는 합격·실패·미실행·입력 대기를 구분한다. 모든 결과에 소스 커밋과 변경분, 실행 환경, 명령, 입력·설정 버전, 로그·산출물 해시를 남긴다. 이전 소스의 통과 기록으로 새 구현의 완료를 대신하지 않는다.

| 검증 묶음 | 최소 인수 시나리오 |
| --- | --- |
| 내부 권한 | 미인증·만료·폐기 토큰, viewer 변경, 다른 프로젝트·환경·유저 직접 접근을 거부한다. |
| 상태와 경제 | 동시 수정, 동일/변경 본문 재전달, 감사·원장 실패, 저장 확정 뒤 응답 전 종료를 검증한다. |
| 복구와 탈퇴 | 실제 스키마 DB를 새 경로로 복원하고 독립 서버 API로 읽는다. 정리 정책·기한·철회·재시작과 타인 데이터 보존을 검증한다. |
| 게임 연동 | 기존 저장 이전, 오프라인·재접속, 충돌, 세션 만료, 계정 전환 중 늦은 응답과 중복 보상을 확인한다. |
| 파이프라인 | 깨끗한 실행기, 잘못된 설정, 동시 요청, 취소, 실행기 손실, 위조/중복 콜백, 산출물 해시 불일치를 확인한다. |
| Android | debug/release 차이, 서명 검증, 설치·업데이트·실기기 서버 연동. AAB 사용 시 실제 APK 설치 경로까지 검사한다. |
| iOS | 시뮬레이터와 배포 archive, profile·entitlements·서명·버전, TestFlight 처리와 실제 기기 설치를 구분해 검사한다. |
| 비밀값과 배포 | PR 비밀값 차단, 로그·번들 노출 검사, 다운로드 권한, 승인되지 않은 채널 업로드 거부와 자격 정리를 확인한다. |

### 검증 매트릭스의 미결정

지원 Android·iOS 최소 버전, 실제 기기 모델, 화면 방향·태블릿 지원, WebView와 native 플러그인, 필수 구매·푸시·크래시 수집 기능을 게임별로 정한다. 미확정 항목은 통과로 표시하지 않는다. 기기 조합과 성능 목표는 실제 대상에 맞춰 승인하며 임의 숫자를 제품 보장으로 쓰지 않는다.

### 배포 승인과 완료 보고

내부 빌드 산출물이 준비되면 파일·해시·앱 ID·버전·서버 환경·검증 결과를 묶어 검토한다. 외부 채널 업로드에는 대상 계정·앱·트랙 또는 테스트 그룹과 공개 범위를 별도로 승인받는다. App Store·Google Play 일반 공개는 내부 테스트 완료와 다른 작업이다.

## 11 결정이 필요한 사항

아래 항목은 기획의 빈칸이다. 현재 결론처럼 쓰거나 자동 선택하지 않는다. 실제 담당자 이름과 일정은 지정 후 기록한다.

| 결정 | 시점 | 결정할 내용 |
| --- | --- | --- |
| 첫 내부 사용자와 기능 | M0 | 참여 운영자, 프로젝트 수, 반드시 쓸 관리 흐름, 역할 회수 담당. |
| 서버 배포와 DB | M1–M2 | 호스팅, 내부 접근, TLS·도메인, DB 유지·변경, 백업·복구 위치와 목표. |
| 탈퇴와 보관 | 실제 정리 전 | 개인 자료, 원장·감사·중복 방지 이력의 필드·기간, 길드·정산 처리, 백업의 재삭제. |
| 모바일 기술과 대상 | M3 | 첫 게임·현행 소스, Capacitor 유지 여부, iOS 호스트·플러그인 지원, 앱 ID와 지원 OS. |
| CI와 실행기 | M3 | CI 서비스, Linux/macOS 실행기 소유, 격리·동시성·예산·캐시·접근 권한. |
| 서명과 계정 | M4–M5 서명 전 | 기존 앱 서명 계보, Android 키, Apple 팀·인증서·profile, 보관소·교체 담당. |
| 버전과 배포 채널 | 내부 업로드 전 | 빌드 번호 예약, 릴리스 버전, 내부 파일 배포·Play 내부 트랙·TestFlight 대상과 승인자. |
| 필수 native 기능 | 기기 검증 전 | 구매·푸시·Analytics·Crashlytics 등 사용할 기능과 sandbox 입력. |
| 산출물과 로그 보관 | M3 | 보관 기간, 용량, 다운로드 만료, 접근자와 삭제·백업 정책. |
| 아키텍처 확장 | 필요 발생 시 | MSA·Gateway·gRPC·기존 Go Match 요구의 유지 범위와 서비스 분리 조건. |

### 바로 이어갈 작업

- V2 기준으로 내부 관리 서버의 필수 흐름과 현재 미완료 항목을 확정한다.
- 실제 DB 복원·핵심 장애 검증과 탈퇴 정책 검토를 문의 구현과 분리해서 진행한다.
- 첫 소비 게임의 현행 빌드 구조와 iOS 준비 상태를 읽기 조사하고 CI 후보·필수 입력을 비교한다.
- 선택한 게임과 스택에서 Android 수동 빌드를 재현한 뒤 자동화하고, iOS는 macOS·서명 준비가 확인된 단계부터 연결한다.

이 문서만으로 앱 계정 생성, 결제, 자격 저장, 스토어 약관 수락, 실제 업로드·공개 또는 기존 저장소의 광범위한 변경을 승인한 것으로 보지 않는다.

## 12 근거와 참고 문서

소스는 2026년 11월 10일 확인했다. 저장소 문서는 로컬 작업 사본 기준이며 일부 최신 문서는 원격에 없을 수 있다. 공개 진행현황은 점검 스냅샷이고 자동 상태 수집이나 제품 배포 증거가 아니다. 모바일 문서는 실행 전제의 근거이며 이 프로젝트의 구축 완료 근거가 아니다.

### 프로젝트 근거

- [S1] 사용자 최신 방향: Rust 기반 내부 팀 관리 서버를 우선하고 외부 고객 문의를 현재 범위에서 제외한다. 후속 Android·iOS 빌드 파이프라인까지 기획서 V2에 포함한다.
- [S2] 기존 기획·계약: study/thebackend/04_RECONSTRUCTION_BLUEPRINT.md, docs/specs/PLATFORM.md, CONTEXT.md, TODO.md. 초기 문구보다 최신 사용자 방향과 실제 코드를 우선했다.
- [S3] 클라우드 검증: CLOUD_MIGRATION_REPORT.md, docs/validation/cloud-migration-20261110.json. 11월 10일 실행 통과와 미검증 범위를 구분했다.
- [S4] 공개 진행현황과 report-data.json. 초기 MSA 논의는 페이지의 과거 대화 요약 수준이며 초기 첨부 PRD 원문을 이번 작업에서 확인한 것은 아니다.
- [S5] 구현 구조: server/Cargo.toml, server/src/api.rs 및 기능 모듈·SQL, console/package.json, integration/. 신규 API 목록은 이 문서에서 임의로 확정하지 않았다.
- [S6] 소비 게임 조사: study/thebackend/09_WEB_ANDROID_INTEGRATION.md, 10_AVOID_BALL_PILOT.md. 11월 3일 기준이며 현행 게임 저장소 재검증이 필요하다.

[공개 구현 진행현황](https://game-projects97.github.io/game_backend_platform-progress/)

[공개 현황 데이터](https://game-projects97.github.io/game_backend_platform-progress/report-data.json)

### 모바일과 CI의 공식 문서

[[S7] Capacitor 환경 준비](https://capacitorjs.com/docs/getting-started/environment-setup)

[[S7] Capacitor 설치와 native sync](https://capacitorjs.com/docs/getting-started)

[[S8] Android 명령행 빌드](https://developer.android.com/build/building-cmdline)

[[S9] Android 앱 서명과 Play App Signing](https://developer.android.com/studio/publish/app-signing)

[[S10] Apple App Store Connect 빌드 업로드](https://developer.apple.com/help/app-store-connect/manage-builds/upload-builds/)

[[S11] Apple 베타 테스트와 릴리스 배포](https://developer.apple.com/documentation/xcode/distributing-your-app-for-beta-testing-and-releases/)

[[S12] GitHub Actions OIDC와 배포 보호](https://docs.github.com/en/actions/concepts/security/openid-connect)

공식 문서의 최신 도구 버전과 스토어 요구는 구현·업로드 시점에 재확인한다. 이 문서는 초기 재구성안을 대체 삭제하지 않으며, 현재 코드·테스트·운영 계획의 차이를 검토하기 위한 V2다.`,filtered:!1,sourceHash:"a7c56bafe53dd7394729a4bc476951b770c434ce084408a1477cf69923c7ee1e"}],se=[["overview","프로젝트 개요","board"],["history","히스토리","calendar"],["implementation","구현 현황","group"],["plan","실행 계획","flag"],["verification","검증과 배포","check"],["documents","문서 보관함","copy"]];function va({id:n,children:a}){const s=de.find(d=>d.id===n);return e.jsxs("a",{className:"archive-reference",href:s?`#project/documents/${n}`:`#project/${n==="deployment"?"verification":n}`,children:[e.jsx(x,{name:"copy",size:13}),a||s?.title||"관련 기록",e.jsx("span",{"aria-hidden":"true",children:"↗"})]})}function M({text:n,context:a={}}){const s=[];let d=0;for(const t of Gn(n,a))s.push(n.slice(d,t.start)),s.push(t.url?e.jsx("a",{href:t.url,target:"_blank",rel:"noopener noreferrer",title:t.label,children:t.text},t.start):e.jsx("span",{title:t.label,children:t.text},t.start)),d=t.end;return s.push(n.slice(d)),e.jsx(e.Fragment,{children:s})}function Ln({path:n}){const a=we(n);return a?.url?e.jsx("a",{href:a.url,target:"_blank",rel:"noopener noreferrer",title:`GitHub 커밋 원본 · ${a.sha?.slice(0,7)}`,children:n}):e.jsxs("span",{children:[n,a?.label?` · ${a.label}`:" · GitHub 원본 미확인"]})}function Aa(n,a){if(/^https?:\/\//i.test(n))return n;const s=we(a),d={sourcePath:a,revision:s?.sha||void 0},t=Mn(n,d).url;if(t)return t;const r=[...a.split("/").slice(0,-1)];for(const i of n.split("#")[0].split("/"))i===".."?r.pop():i&&i!=="."&&r.push(i);const o=n.startsWith("docs/")||n.startsWith("study/")?n:r.join("/"),l=de.find(i=>i.path===o||i.path===n);return l?`#project/documents/${l.id}`:void 0}function fe({text:n,source:a=""}){const s={sourcePath:a,revision:we(a)?.sha||void 0},d=n.split(/(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g);return e.jsx(e.Fragment,{children:d.map((t,r)=>{if(t.startsWith("**"))return e.jsx("strong",{children:e.jsx(M,{text:t.slice(2,-2),context:s})},r);if(t.startsWith("`"))return e.jsx("code",{children:e.jsx(M,{text:t.slice(1,-1),context:s})},r);const o=t.match(/^\[([^\]]+)\]\(([^)]+)\)$/);if(o){const l=Aa(o[2],a);return l?e.jsx("a",{href:l,...l.startsWith("http")?{target:"_blank",rel:"noopener noreferrer"}:{},children:o[1]},r):e.jsx("span",{children:o[1]},r)}return e.jsx(M,{text:t,context:s},r)})})}function ya({body:n,source:a}){const s=n.split(`
`),d=[];for(let t=0;t<s.length;t++){const r=s[t],o=t;if(!r.trim())continue;if(r.startsWith("```")){const i=[];for(;++t<s.length&&!s[t].startsWith("```");)i.push(s[t]);d.push(e.jsx("pre",{children:e.jsx("code",{children:e.jsx(M,{text:i.join(`
`),context:{sourcePath:a,revision:we(a)?.sha||void 0}})})},o));continue}const l=r.match(/^(#{1,6})\s+(.+)/);if(l){const i=e.jsx(fe,{text:l[2],source:a});d.push(l[1].length<=2?e.jsx("h2",{children:i},o):e.jsx("h3",{children:i},o));continue}if(/^\|/.test(r)){const i=[];do/^\|[\s:|\-]+\|\s*$/.test(s[t])||i.push(s[t].replace(/^\||\|\s*$/g,"").split("|").map(_=>_.trim())),t++;while(t<s.length&&/^\|/.test(s[t]));t--,d.push(e.jsx("div",{className:"archive-table-scroll",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsx("tr",{children:i[0]?.map((_,I)=>e.jsx("th",{children:e.jsx(fe,{text:_,source:a})},I))})}),e.jsx("tbody",{children:i.slice(1).map((_,I)=>e.jsx("tr",{children:_.map((u,C)=>e.jsx("td",{children:e.jsx(fe,{text:u,source:a})},C))},I))})]})},o));continue}if(/^\s*(?:[-*]|\d+\.)\s/.test(r)){const i=[];do i.push(s[t].replace(/^\s*(?:[-*]|\d+\.)\s/,"")),t++;while(t<s.length&&/^\s*(?:[-*]|\d+\.)\s/.test(s[t]));t--,d.push(e.jsx("ul",{children:i.map((_,I)=>e.jsx("li",{children:e.jsx(fe,{text:_.replace(/^\[ \] /,"□ ").replace(/^\[x\] /i,"✓ "),source:a})},I))},o));continue}if(/^---+$/.test(r)){d.push(e.jsx("hr",{},o));continue}d.push(e.jsx("p",{className:r.startsWith(">")?"archive-quote":void 0,children:e.jsx(fe,{text:r.replace(/^>\s?/,""),source:a})},o))}return e.jsx("div",{className:"archive-markdown",children:d})}function oe({title:n,children:a}){return e.jsxs("section",{className:"doc-section",children:[e.jsx("h2",{children:n}),a&&e.jsx("p",{children:a})]})}function sn({ids:n}){return e.jsx("p",{className:"archive-references",children:n.map(a=>e.jsx(va,{id:a},a))})}function Ta(){return e.jsxs(e.Fragment,{children:[e.jsx(oe,{title:"프로젝트 개요",children:J.definition}),e.jsxs("dl",{className:"doc-properties",children:[e.jsx("dt",{children:"기준일"}),e.jsx("dd",{children:J.date}),e.jsx("dt",{children:"우선순위"}),e.jsx("dd",{children:e.jsx(q,{tone:"doing",label:"내부 관리 서버"})}),e.jsx("dt",{children:"참조 문서"}),e.jsx("dd",{children:"91개 · 이전 PRD 복원 요약 2개 포함"}),e.jsx("dt",{children:"API 명세"}),e.jsx("dd",{children:"17개 도메인 · 205개 동작"})]}),e.jsxs("section",{className:"doc-section",children:[e.jsx("h2",{children:"현재 범위"}),e.jsx("p",{children:J.scope})]}),J.architecture.map(([n,a,s])=>e.jsxs("section",{className:"doc-section",children:[e.jsx("h2",{children:n}),e.jsx("p",{children:e.jsx("strong",{children:a})}),e.jsx("p",{children:e.jsx(M,{text:s})})]},n)),e.jsxs("section",{className:"doc-section",children:[e.jsx("h2",{children:"연결된 기존 문서"}),e.jsx("ul",{children:J.links.map(n=>e.jsx("li",{children:e.jsx("a",{href:n.url,target:"_blank",rel:"noopener noreferrer",children:n.title})},n.url))}),e.jsx("p",{children:"기존 페이지는 작성 시점의 기록입니다. 최신 상태는 기준일과 기능별 확인 범위를 함께 보세요."})]})]})}function Da({legacyItems:n}){return e.jsxs(e.Fragment,{children:[e.jsx(oe,{title:"히스토리",children:"최초 의도, 설계 제안, 실제 구현과 현재 결정을 시간순으로 분리했습니다. 내부 관리 우선이 초기 MSA·Gateway·gRPC·Go Match 방향 취소를 뜻하지는 않습니다."}),e.jsxs("section",{className:"doc-section",children:[e.jsx("h2",{children:"전체 작업 · 2026-11-10 사용자 기준"}),e.jsx("p",{children:"✅ 완료 · 🔵 진행 중 · ⬜ 예정 · ⏸️ 대기. 완료 표시는 기록된 핵심 구현 범위 기준입니다. 01–08 완료, 09–19 예정으로 기록했습니다. 예정 항목 등록은 별도의 구현 승인이나 우선순위 변경을 뜻하지 않습니다."})]}),_a.map(a=>e.jsxs("section",{className:"doc-section",children:[e.jsxs(y,{className:"milestone-task","data-action":"detail","data-id":`WORK-${String(a.id).padStart(2,"0")}`,children:[e.jsx("span",{className:"mono",children:String(a.id).padStart(2,"0")}),e.jsx("span",{children:a.title}),e.jsx(q,{tone:a.status,label:a.statusText})]}),e.jsx("p",{children:e.jsx(M,{text:a.note})}),e.jsx("p",{className:"archive-references",children:a.commits.map(s=>e.jsx("a",{className:"button",href:Je(s),target:"_blank",rel:"noopener noreferrer",title:"GitHub 커밋 원본",children:s},s))})]},a.id)),e.jsxs("section",{className:"doc-section",children:[e.jsx("h2",{children:"Git 커밋 이력"}),e.jsx("p",{children:"확인된 커밋 8개를 한국 시간(+09:00)의 커밋일로 달력에 기록했습니다. 아래 기록용 주차는 실제 커밋을 묶은 것이며 과거의 계획된 스프린트나 범주별 완료일을 뜻하지 않습니다. 작성일과 커밋일은 이 8개에서 동일합니다."})]}),Sa.map(a=>e.jsxs("section",{className:"doc-section",children:[e.jsxs("h2",{children:[a.commitDate," ·"," ",e.jsx("a",{href:Je(a.sha),target:"_blank",rel:"noopener noreferrer",children:a.short})]}),e.jsx("p",{children:a.subject}),e.jsx("p",{children:a.title}),e.jsxs("p",{className:"archive-caption",children:["관련 작업"," ",a.related.map(s=>String(s).padStart(2,"0")).join(", ")," ","· SHA"," ",e.jsx("a",{href:Je(a.sha),target:"_blank",rel:"noopener noreferrer",children:a.sha})]}),e.jsx("a",{href:`#plan/day/${a.date}/GIT-${a.short}`,children:"해당 날짜의 일일 기록 열기"})]},a.sha)),e.jsxs("section",{className:"doc-section",children:[e.jsx("h2",{children:"미커밋 변경"}),e.jsx("p",{children:"JWT·SDK·실행 API 문서·배포 설정, 탈퇴 제어 후속 수정, 11월 8일 후속 계획, V2와 분석·복구 도구가 작업 사본에서 별도 변경으로 확인됐습니다. Git 커밋 기록으로 표시하거나 기능 완료로 승격하지 않았습니다."})]}),n.length>0&&e.jsxs("section",{className:"doc-section",children:[e.jsx("h2",{children:"이전 작업 기록 · 보존"}),e.jsx("p",{children:"이번 19개 기준 이전의 작업은 원래 제목·상태·날짜·담당·메모·댓글을 그대로 보존했습니다. 현재 작업의 상태 집계와 분리했으며 열어서 확인할 수 있습니다."}),n.map(a=>e.jsxs(y,{className:"milestone-task","data-action":"detail","data-id":a.id,children:[e.jsx("span",{className:"mono",children:a.id}),e.jsx("span",{children:a.title}),e.jsx(q,{tone:a.status,label:a.statusLabel})]},a.id))]}),e.jsxs("section",{className:"doc-section",children:[e.jsx("h2",{children:"기획·구현 흐름 요약"}),e.jsx("p",{children:"아래 날짜는 문서·검증에 기록된 사건 시점입니다. 위 Git 커밋 날짜와 구분합니다."})]}),J.history.map(([a,s,d,t,r,o],l)=>e.jsxs("section",{className:"doc-section",children:[e.jsxs("h2",{children:[a," · ",s]}),e.jsxs("p",{children:[e.jsx("strong",{children:d})," · ",r]}),e.jsx("p",{children:e.jsx(M,{text:t})}),e.jsx(sn,{ids:[o]})]},l)),e.jsx("section",{className:"doc-section",children:e.jsx("p",{children:"9월 PRD는 당시 대화에서 복원한 요약입니다. 원본 DOCX 파일과 최초 참조 사진은 이번 확인 범위에 없습니다."})})]})}function Ia(){return e.jsxs(e.Fragment,{children:[e.jsx(oe,{title:"구현 현황",children:"검증된 기능 단위와 미완료 범위를 구분합니다. 기능군 전체의 출시 완료를 뜻하지 않습니다."}),J.domains.map(n=>e.jsxs("section",{className:"doc-section",children:[e.jsxs("h2",{children:[n.id," · ",n.title]}),e.jsx(q,{tone:n.tone,label:n.status}),e.jsx("h3",{children:"구현·기록된 범위"}),e.jsx("ul",{children:n.done.map(a=>e.jsx("li",{children:e.jsx(M,{text:a})},a))}),e.jsx("h3",{children:"남은 범위"}),e.jsx("ul",{children:n.left.map(a=>e.jsx("li",{children:e.jsx(M,{text:a})},a))}),e.jsxs("p",{className:"archive-caption",children:["작업 분류 ",n.todo]}),e.jsx(sn,{ids:n.sources})]},n.id))]})}function Pa({items:n}){const a=n.filter(s=>s.status!=="done");return e.jsxs(e.Fragment,{children:[e.jsx(oe,{title:"실행 계획",children:"최신 V2의 순서와 현재 작업입니다. 미정인 날짜와 담당을 임의로 배정하지 않았습니다."}),e.jsxs("section",{className:"doc-section",children:[e.jsx("h2",{children:"작업 관리 마일스톤"}),e.jsx("ul",{children:an.map(([s,d])=>e.jsxs("li",{children:[s," · ",d]},s))}),e.jsx("p",{children:"아래 V2 단계는 기획 순서이며 작업 마일스톤 ID와 구분합니다."})]}),J.stages.map(([s,d,t,r])=>e.jsxs("section",{className:"doc-section",children:[e.jsxs("h2",{children:["V2 단계 ",s.slice(1)," · ",d]}),e.jsx("p",{children:e.jsx(M,{text:t})}),e.jsx("p",{className:"archive-caption",children:r})]},s)),e.jsx(sn,{ids:["v2"]}),e.jsxs("section",{className:"doc-section",children:[e.jsxs("h2",{children:["남은 작업 · ",a.length,"개"]}),e.jsx("p",{children:"작업을 열어 설명·완료 조건·메모를 수정할 수 있습니다. 수정은 현재 브라우저에만 저장되며 저장소 및 원문 문서와 동기화되지 않습니다."}),e.jsx("div",{className:"archive-task-list",children:a.map(s=>e.jsxs(y,{className:"milestone-task","data-action":"detail","data-id":s.id,children:[e.jsx("span",{className:"mono",children:s.id}),e.jsx("span",{children:s.title}),e.jsx(q,{tone:s.status,label:s.statusLabel}),e.jsx(x,{name:"right",size:13})]},s.id))})]}),e.jsxs("section",{className:"doc-section",children:[e.jsx("h2",{children:"결정이 필요한 지점"}),J.decisions.map(([s,d])=>e.jsxs("div",{children:[e.jsx("h3",{children:s}),e.jsx("p",{children:e.jsx(M,{text:d})})]},s))]})]})}function xa(){return e.jsxs(e.Fragment,{children:[e.jsx(oe,{title:"검증과 배포",children:"테스트 수치는 해당 시점의 코드와 환경에 대한 기록입니다. 전체 운영 준비를 보증하지 않습니다."}),J.checks.map(([n,a,s,d])=>e.jsxs("section",{className:"doc-section",children:[e.jsxs("h2",{children:[n," · ",a]}),e.jsx("p",{children:e.jsx("strong",{children:e.jsx(M,{text:s})})}),e.jsx("p",{children:e.jsx(M,{text:d})})]},a)),e.jsxs("section",{className:"doc-section",children:[e.jsx("h2",{children:"라이브 API 상태"}),e.jsx("p",{children:"Render Free 선택 후 공식 대시보드 로그인 요청 단계입니다. 계정 연결·서버 생성·외부 HTTPS·실제 Swagger Execute는 미확인입니다. 정적 API 페이지의 HTTP 200을 서버 실행 성공으로 표시하지 않습니다."})]}),e.jsxs("section",{className:"doc-section",children:[e.jsx("h2",{children:"이번 기록의 확인 범위"}),e.jsxs("ul",{children:[e.jsx("li",{children:"저장소의 기획·명세·조사·검증 문서 119개를 색인화하고 관련 본문을 대조했습니다."}),e.jsx("li",{children:"JWT 검증의 소스 해시 16개와 실행 API 문서 검증의 소스 해시 27개가 조사 시점 파일과 일치했습니다."}),e.jsx("li",{children:"보관함에는 제품 관련 문서 89개와 이전 PRD 복원 요약 2개를 제공합니다."}),e.jsx("li",{children:"최초 PRD의 DOCX 원본, 최초 콘솔 사진, 운영 DB·실기기·실제 부하 검증은 이번 확인 범위에 없습니다."})]})]}),e.jsxs("dl",{className:"doc-properties",children:[e.jsx("dt",{children:"기준 소스"}),e.jsx("dd",{children:e.jsx(M,{text:J.source})}),e.jsx("dt",{children:"갱신 기준"}),e.jsxs("dd",{children:[J.date," 스냅샷 · 자동 갱신 아님"]})]})]})}function Ca({doc:n}){return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"breadcrumb",children:[e.jsx("a",{href:"#project/documents",children:"문서 보관함"}),e.jsx(x,{name:"right",size:12}),e.jsx("span",{children:n.title})]}),e.jsx(oe,{title:n.title}),e.jsxs("dl",{className:"doc-properties",children:[e.jsx("dt",{children:"분류"}),e.jsx("dd",{children:n.category}),e.jsx("dt",{children:"문서 상태"}),e.jsx("dd",{children:n.status}),e.jsx("dt",{children:"출처"}),e.jsx("dd",{children:e.jsx(Ln,{path:n.path})})]}),e.jsx("section",{className:"doc-section",children:e.jsxs("p",{children:["작성 시점의 참조본입니다. 과거 계획의 상태는 현재 완료 상태가 아닙니다. 최신 판단은 ",e.jsx("a",{href:"#project/implementation",children:"구현 현황"}),"과 ",e.jsx("a",{href:"#project/plan",children:"실행 계획"}),"을 보세요.",n.filtered&&" 제품 내용과 무관한 실행 환경·작업 배정 설명은 제외했습니다."]})}),e.jsx(ya,{body:n.body,source:n.path}),e.jsx("div",{className:"breadcrumb",children:e.jsx("a",{href:"#project/documents",children:"문서 보관함으로 돌아가기"})})]})}function Ea({docId:n}){const[a,s]=S.useState(""),[d,t]=S.useState("전체"),r=["전체",...new Set(de.map(i=>i.category))],o=S.useMemo(()=>de.filter(i=>(d==="전체"||i.category===d)&&(!a.trim()||`${i.title} ${i.path} ${i.body}`.toLocaleLowerCase().includes(a.trim().toLocaleLowerCase()))),[a,d]),l=de.find(i=>i.id===n);return l?e.jsx(Ca,{doc:l}):e.jsxs(e.Fragment,{children:[e.jsx(oe,{title:"문서 보관함",children:"이전 조사와 기획을 보존한 참조 문서 91개입니다. 제목과 내용으로 검색할 수 있습니다."}),n&&e.jsx("p",{role:"status",children:"해당 문서를 찾을 수 없습니다. 아래 목록에서 찾아보세요."}),e.jsxs("div",{className:"archive-document-controls",children:[e.jsxs("label",{children:[e.jsx("span",{children:"문서 검색"}),e.jsx("input",{type:"search",placeholder:"제목 · 기능 · 문서 내용 검색",value:a,onChange:i=>s(i.target.value)})]}),e.jsxs("label",{children:[e.jsx("span",{children:"분류"}),e.jsx("select",{"aria-label":"분류",value:d,onChange:i=>t(i.target.value),children:r.map(i=>e.jsx("option",{children:i},i))})]})]}),e.jsxs("p",{className:"archive-caption",role:"status",children:[o.length,"개 문서 · 전체 ",de.length,"개"]}),e.jsx("div",{className:"archive-document-list",children:o.map(i=>e.jsxs("div",{className:"milestone-task",children:[e.jsx("span",{className:"mono",children:i.category}),e.jsxs("span",{children:[e.jsx("a",{href:`#project/documents/${i.id}`,children:i.title}),e.jsx("small",{className:"archive-caption",children:e.jsx(Ln,{path:i.path})})]}),e.jsx("a",{href:`#project/documents/${i.id}`,"aria-label":`${i.title} 보관함 보기`,children:e.jsx(x,{name:"right",size:13})})]},i.id))}),!o.length&&e.jsxs("div",{className:"empty-content",children:[e.jsx("p",{children:"일치하는 문서가 없습니다."}),e.jsx(y,{onClick:()=>{s(""),t("전체")},children:"검색 초기화"})]}),e.jsx("section",{className:"doc-section",children:e.jsx("p",{className:"archive-caption",children:"제품 요구사항과 설계 내용을 담은 참조본입니다. 환경 설정과 내부 작업 배정 등은 제외했습니다. 기존 원본 파일은 변경하지 않았습니다."})})]})}function Ra({section:n="overview",docId:a,items:s,legacyItems:d=[]}){const t=se.some(([o])=>o===n)?n:"overview";S.useEffect(()=>{window.scrollTo({top:0,behavior:"instant"}),document.body.classList.remove("notion-sidebar-open")},[t,a]);function r(o){location.hash=`#project/${o}`}return e.jsxs("div",{className:"project-archive",children:[e.jsx("div",{className:"page-header notion-title",children:e.jsx("h1",{children:"게임 백엔드 플랫폼"})}),e.jsx("div",{className:"notion-database-bar archive-tab-bar",children:e.jsx("div",{className:"segmented",role:"tablist","aria-label":"프로젝트 아카이브 내용",children:se.map(([o,l,i],_)=>e.jsxs(y,{role:"tab",id:`archive-tab-${o}`,"aria-controls":"archive-panel","aria-selected":t===o,tabIndex:t===o?0:-1,className:t===o?"active":"",onClick:()=>r(o),onKeyDown:I=>{const u=I.key==="ArrowRight"?1:I.key==="ArrowLeft"?-1:0,C=I.key==="Home"?0:I.key==="End"?se.length-1:u?(_+u+se.length)%se.length:-1;C>=0&&(I.preventDefault(),r(se[C][0]),document.getElementById(`archive-tab-${se[C][0]}`)?.focus())},children:[e.jsx(x,{name:i,size:15}),l]},o))})}),e.jsx("div",{className:"archive-content",id:"archive-panel",role:"tabpanel","aria-labelledby":`archive-tab-${t}`,tabIndex:0,children:t==="history"?e.jsx(Da,{legacyItems:d}):t==="implementation"?e.jsx(Ia,{}):t==="plan"?e.jsx(Pa,{items:s}):t==="verification"?e.jsx(xa,{}):t==="documents"?e.jsx(Ea,{docId:a}):e.jsx(Ta,{})})]})}function _e({sprint:n,label:a,current:s=!1}){return e.jsx("span",{className:"sprint-badge",children:`${a||`S${n}`}${s?" · 이번 주":""}`})}function on({view:n,scope:a,onlyMine:s,filterOpen:d=!1,boardView:t="board",onBoardViewChange:r,onAddSprint:o}){let l;return n==="board"?l=e.jsxs("div",{className:"segmented",role:"group","aria-label":"스프린트 보기",children:[e.jsxs(y,{className:t==="sprints"?"active":"","aria-pressed":t==="sprints",onClick:()=>r?.("sprints"),children:[e.jsx(x,{name:"flag",size:15})," 스프린트 관리"]}),e.jsxs(y,{className:t==="board"?"active":"","aria-pressed":t==="board",onClick:()=>r?.("board"),children:[e.jsx(x,{name:"board",size:15})," 날짜별 보드"]})]}):l=e.jsxs("div",{className:"segmented",role:"group","aria-label":"마일스톤 보기",children:[e.jsxs(y,{"data-action":"calendar-view",className:n==="calendar"?"active":"","aria-pressed":n==="calendar",children:[e.jsx(x,{name:"calendar",size:15})," 월 달력"]}),e.jsxs(y,{"data-action":"goals-view",className:n==="goals"?"active":"","aria-pressed":n==="goals",children:[e.jsx(x,{name:"flag",size:15})," 마일스톤"]})]}),e.jsxs(e.Fragment,{children:[n!=="board"?e.jsx("div",{className:"page-header notion-title",children:e.jsx("h1",{children:"마일스톤"})}):null,e.jsxs("div",{className:"notion-database-bar",children:[l,e.jsx("div",{className:"push"}),n==="board"&&t==="sprints"&&o&&e.jsxs(y,{className:"button primary",onClick:o,children:[e.jsx(x,{name:"plus",size:14})," 스프린트 추가"]}),!(n==="board"&&t==="sprints")&&e.jsxs(y,{"data-action":"toggle-filter",className:"notion-filter-button "+(a!=="all"||s?"filtered":""),"aria-controls":"scope","aria-expanded":d,children:[e.jsx(x,{name:"flag",size:14})," 필터"]})]})]})}function On({visibleItems:n,today:a,month:s,scope:d,onlyMine:t,filterOpen:r,selectedTaskIds:o,sprints:l,selectedWeek:i,onWeekSelect:_,onMonthChange:I}){const u=!!_,C=Kn(s,u?1:0);function p(v){const N=new Date(s+"-01T00:00:00Z");N.setUTCMonth(N.getUTCMonth()+v),I?.(N.toISOString().slice(0,7))}const g={"--calendar-weeks":C.length},P=Number(s.slice(0,4))+"년 "+Number(s.slice(5))+"월";return e.jsxs(e.Fragment,{children:[!u&&e.jsx(on,{view:"calendar",scope:d,onlyMine:t,filterOpen:r}),e.jsxs("div",{className:"calendar-toolbar",style:g,children:[e.jsx("h2",{children:P}),e.jsx(y,{type:"button","data-action":u?void 0:"prev-month",onClick:u?()=>p(-1):void 0,className:"icon-button","aria-label":"이전 달",children:e.jsx(x,{name:"left",size:15})}),e.jsx(y,{type:"button","data-action":u?void 0:"next-month",onClick:u?()=>p(1):void 0,className:"icon-button","aria-label":"다음 달",children:e.jsx(x,{name:"right",size:15})}),e.jsx(y,{type:"button","data-action":u?void 0:"today-month",onClick:u?()=>I?.(a.slice(0,7)):void 0,className:"button",children:"오늘"})]}),e.jsxs("div",{className:"calendar-frame",style:g,children:[e.jsx("div",{className:"calendar-weekdays",children:(u?["월","화","수","목","금","토","일"]:["일","월","화","수","목","금","토"]).map(v=>e.jsx("span",{children:v},v))}),C.map(v=>{const N=v.includes(a),O=nn(v[u?0:1],l),j=l?.filter(D=>!D.deletedAt&&D.start&&D.start<=v[u?0:1]&&D.end>=v[u?0:1])??[],Z=j.length>1?`${j.length}개`:j[0]?.code;return e.jsxs("div",{className:"calendar-row "+(N?"current-week ":"")+(u&&i===v[0]?"week-selected":""),role:u?"button":void 0,tabIndex:u?0:void 0,"aria-pressed":u?i===v[0]:void 0,"aria-label":u?`${v[0]} ~ ${ve(v[0],6)} 주차 선택`:void 0,onClick:u?()=>_?.(v[0]):void 0,onKeyDown:u?D=>{(D.key==="Enter"||D.key===" ")&&(D.preventDefault(),_?.(v[0]))}:void 0,children:[!u&&e.jsxs(y,{"data-action":"open-week",className:"week-index","data-date":v[0],"aria-label":`${Se(v[0])} 주 계획 열기`,children:[O?e.jsx(_e,{sprint:O,label:Z}):e.jsx("b",{children:"—"}),N?e.jsx("small",{children:"이번 주"}):null]}),v.map(D=>e.jsxs("section",{className:`calendar-cell ${D.slice(0,7)!==s?"outside":""} ${D===a?"today":""}`,"aria-label":D+(D===a?" 오늘":""),"data-drop-date":D,children:[e.jsxs("div",{className:"date-head",children:[D===v[u?0:1]&&O?u?e.jsx("span",{className:"notion-week-tag",children:e.jsx(_e,{sprint:O,label:Z,current:N})}):e.jsx(y,{"data-action":"open-week",className:"notion-week-tag","data-date":v[1],children:e.jsx(_e,{sprint:O,label:Z,current:N})}):null,!u&&e.jsx(y,{"data-action":"add",className:"calendar-add","data-date":D,"aria-label":`${D} 항목 추가`,children:e.jsx(x,{name:"plus",size:14})}),u?e.jsx("span",{className:"date-button",children:D.endsWith("-01")?`${Number(D.slice(5,7))}월 1일`:String(Number(D.slice(8)))}):e.jsx(y,{"data-action":"open-day",className:"date-button","data-date":D,"aria-label":`${D} 일일 계획`,children:D.endsWith("-01")?`${Number(D.slice(5,7))}월 1일`:String(Number(D.slice(8)))})]}),n.filter(R=>R.date===D).map(R=>e.jsxs("div",{className:"calendar-task "+R.status+(o?.has(R.id)?" task-selected":""),"data-item-id":R.id,"data-selectable-task":R.id,draggable:o?.has(R.id)||!1,children:[e.jsx(Hn,{checked:o?.size?o.has(R.id):R.status==="done","data-action":"toggle","data-id":R.id,"aria-label":`${R.title} ${o?.size?"선택":R.status==="done"?"완료 취소":"완료 처리"}`,"aria-pressed":o?.size?o.has(R.id):void 0}),e.jsxs(y,{"data-action":"detail",className:"","data-id":R.id,"aria-pressed":o?.size?o.has(R.id):void 0,children:[Jn(R)&&!W(R)?"[기록] ":"[예정] ",R.title]})]},R.id))]},D))]},v[0])})]}),!u&&e.jsxs("div",{className:"calendar-footer",style:g,children:[e.jsxs("span",{children:["항목 ",n.filter(v=>v.date.startsWith(s)).length,"개",n.some(v=>v.dateKind==="commit-record")?" · 기록일은 커밋 기준":""]}),e.jsxs(y,{"data-action":"undated",className:"","data-kind":"undated",children:["일정 미배정"," ",n.filter(v=>!v.date&&v.sprint!==12).length,"개"]}),e.jsxs(y,{"data-action":"undated",className:"","data-kind":"deployment",children:["배포 후"," ",n.filter(v=>!v.date&&v.sprint===12).length,"개"]})]})]})}function La({items:n,visibleItems:a,scope:s,selectedTaskIds:d,taskRows:t=!1,sprints:r}){return e.jsx("div",{className:"roadmap",children:an.filter(([o])=>s==="all"||s===o).map(([o,l])=>{const i=a.filter(p=>p.recordKind!=="commit"&&pe(p)===o);if(t&&!i.length)return null;const _=Re(n.filter(p=>pe(p)===o)),I=_.done,u=[...new Set(i.map(p=>p.parent))],C=[...new Set(i.filter(p=>p.sprint).map(p=>r?.find(g=>g.id===p.sprint)?.code||fn(p.sprint)))].join(" · ");return e.jsxs("section",{className:"milestone-group",children:[e.jsxs("div",{className:"milestone-rail",children:[e.jsx("span",{children:o}),e.jsx("div",{className:"rail-line"})]}),e.jsxs("div",{className:"milestone-body",children:[e.jsxs("div",{className:"milestone-title",children:[e.jsxs("div",{children:[e.jsx("h2",{children:l}),e.jsxs("small",{children:[r?.filter(p=>!p.deletedAt&&i.some(g=>g.sprint===p.id)).map(p=>e.jsxs("a",{href:`#plan/week/${p.periodKind==="commit-record"?"undated":p.start||"undated"}/${p.id}`,children:[p.code||fn(p.id)," "]},p.id)),!C&&"날짜 미정"]})]}),e.jsxs("div",{className:"milestone-progress",children:[e.jsxs("span",{children:[I,"/",_.total," 세부 작업",_.excluded?` · 범위 제외 ${_.excluded}개`:""]}),e.jsx("div",{className:"progress",children:e.jsx("span",{style:{width:`${_.total?I/_.total*100:0}%`}})})]})]}),t?i.map(p=>e.jsxs(y,{"data-action":"detail",className:"milestone-task"+(d?.has(p.id)?" task-selected":""),"data-id":p.id,"data-selectable-task":p.id,"aria-pressed":d?.size?d.has(p.id):void 0,children:[e.jsx("span",{className:"mono",children:p.id}),e.jsx("span",{children:p.title}),e.jsx(q,{tone:p.status,label:p.statusLabel}),e.jsx(x,{name:"right",size:13})]},p.id)):u.map(p=>{const g=n.find(v=>v.recordKind==="work"&&v.parent===p),P=Re(n.filter(v=>v.parent===p)).status;return e.jsxs(y,{"data-action":"parent",className:"milestone-task","data-parent":p,children:[e.jsx("span",{className:"mono",children:g?.id||`BP-${String(p).padStart(3,"0")}`}),e.jsxs("span",{children:[ze[p-1],g&&tn(g)?" · 현재 범위 제외":""]}),e.jsx(q,{tone:P})]},p)})]})]},o)})})}function Oa({items:n,visibleItems:a,scope:s,onlyMine:d,filterOpen:t,sprints:r}){return e.jsxs(e.Fragment,{children:[e.jsx(on,{view:"goals",scope:s,onlyMine:d,filterOpen:t}),e.jsx(La,{items:n,visibleItems:a,scope:s,sprints:r})]})}function Ze({open:n,children:a,onRequestClose:s,...d}){const t=S.useRef(null);return S.useLayoutEffect(()=>{const r=t.current;r&&(n&&!r.open&&r.showModal(),!n&&r.open&&r.close())},[n]),e.jsx("dialog",{...d,ref:t,onCancel:r=>{r.preventDefault(),s()},onClose:()=>{n&&s()},children:a})}function wa({visibleItems:n,date:a,today:s,sprints:d,onMove:t,selectedTaskIds:r}){n=n.filter(u=>!!W(u)&&!tn(u)&&u.recordKind!=="work");const o=S.useRef(null),l=Array.from({length:7},(u,C)=>ve(a,C)),i=nn(a,d),_=d.filter(u=>!u.deletedAt&&u.periodKind!=="commit-record"&&u.start&&u.start<=a&&u.end>=a),I=n.filter(u=>u.date?l.includes(u.date):_.some(C=>C.id===u.sprint));return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"week-toolbar",children:[e.jsx(y,{"data-action":"prev-week",className:"icon-button","aria-label":"이전 주",children:e.jsx(x,{name:"left",size:15})}),e.jsxs("h2",{children:[i?e.jsxs(e.Fragment,{children:[e.jsx(_e,{sprint:i,label:_.length>1?`${_.length}개`:_[0]?.code})," ",_.length>1?"스프린트":d.find(u=>u.id===i)?.name]}):"주간 계획"," ",e.jsxs("span",{className:"week-date",children:["(",Se(l[0])," ~ ",Se(l[6]),")"]})]}),e.jsx(y,{"data-action":"next-week",className:"icon-button","aria-label":"다음 주",children:e.jsx(x,{name:"right",size:15})}),e.jsx("input",{type:"date",id:"week-date",defaultValue:a,"aria-label":"계획 주 선택"},a),e.jsx(y,{"data-action":"current-week",className:"button",children:"이번 주"}),e.jsxs("span",{className:"week-legend",children:[I.length,"개 작업"]})]}),e.jsx("div",{className:"board-scroll",children:e.jsx("div",{className:"day-grid",children:l.map((u,C)=>{const p=n.filter(g=>g.date===u);return e.jsxs("section",{className:`day-col ${C>4?"weekend":""} ${u===s?"current-day":""}`,"data-drop-date":u,onDragOver:g=>{o.current&&(g.preventDefault(),g.dataTransfer.dropEffect="move")},onDrop:g=>{const P=o.current;P&&(g.preventDefault(),o.current=null,t(P,u))},children:[e.jsxs(y,{className:"day-header","data-action":"open-day","data-date":u,"aria-label":`${u} 일일 계획`,children:[e.jsx("span",{children:["월","화","수","목","금","토","일"][C]}),e.jsx("strong",{children:Number(u.slice(8))}),u===s?e.jsx("small",{className:"today-label",children:"오늘"}):null,e.jsx("span",{className:"day-num",children:p.length})]}),e.jsxs("div",{className:"day-cards",children:[p.map(g=>e.jsxs(y,{"data-action":"detail",className:"work-card"+(r?.has(g.id)?" task-selected":""),"data-id":g.id,"data-selectable-task":g.id,"aria-pressed":r?.size?r.has(g.id):void 0,draggable:!r?.size||r.has(g.id),onDragStart:P=>{o.current=g.id,P.dataTransfer.effectAllowed="move",P.dataTransfer.setData("text/plain",g.id)},onDragEnd:()=>{o.current=null},children:[e.jsxs("div",{className:"card-top",children:[e.jsx("span",{className:"mono",children:g.id}),e.jsx(q,{tone:g.status,label:g.statusLabel})]}),e.jsx("h3",{children:g.title}),e.jsxs("div",{className:"card-footer",children:[e.jsx("span",{children:pe(g)}),e.jsx("span",{className:"owner",children:g.owner})]})]},g.id)),p.length?null:e.jsx("div",{className:"empty-day",children:"작업 없음"}),e.jsxs(y,{"data-action":"add",className:"add-task","data-date":u,children:[e.jsx(x,{name:"plus",size:13})," 항목 추가"]})]})]},u)})})})]})}function Na(n){const{today:a,sprints:s,groupOrder:d,onOpenTask:t}=n,[r,o]=S.useState("sprints"),[l,i]=S.useState(()=>new Set(s.filter(m=>m.id===n.focusedSprint||m.start<=a&&m.end>=a).map(m=>m.id))),[_,I]=S.useState(()=>new Set),u=S.useRef(null),[C,p]=S.useState(null),[g,P]=S.useState(null),[v,N]=S.useState(null),[O,j]=S.useState(n.date),[Z,D]=S.useState(n.date.slice(0,7)),R=S.useMemo(()=>{const m=new Map;for(const b of n.items){const T=m.get(b.sprint)??[];T.push(b),m.set(b.sprint,T)}return m},[n.items]);S.useEffect(()=>{n.focusedSprint&&(o("sprints"),i(m=>new Set([...m,n.focusedSprint])))},[n.focusedSprint]);const $=m=>R.get(m)??[],ee=m=>$(m).length;function re(m){ee(m)&&i(b=>{const T=new Set(b);return T.has(m)?T.delete(m):T.add(m),T})}function ye(m){I(b=>{const T=new Set(b);return T.has(m)?T.delete(m):T.add(m),T})}function ue(m){n.onReorderGroups(m(d))}function me(m,b){const T=d.indexOf(m),U=T+b;if(U<0||U>=d.length)return;const L=[...d];[L[T],L[U]]=[L[U],L[T]],n.onReorderGroups(L)}function ne(m,b){const T=s.reduce((L,V)=>V.end>L?V.end:L,""),U=b?.start??(T&&T>=a?ve(T,1):Ae(a));N(b??null),j(U),D((U||a).slice(0,7)),P(m)}const X=m=>{const b=Re($(m.id)).status;return b==="done"?"done":b==="todo"?"todo":"doing"};function be(m,b){if(!m||s.find(T=>T.id===b)?.periodKind==="commit-record"){i(T=>new Set([...T,b]));return}o("board"),n.onOpenWeek(m||n.date)}const he=[...new Set([n.date,...s.filter(m=>m.start).map(m=>m.start),...Array.from({length:104},(m,b)=>ve(n.date,(b-52)*7))])].sort();return e.jsxs(e.Fragment,{children:[e.jsx(on,{view:"board",scope:n.scope,onlyMine:n.onlyMine,filterOpen:n.filterOpen,boardView:r,onBoardViewChange:o,onAddSprint:()=>ne("create")}),r==="board"?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"sprint-week-picker",children:[e.jsx("label",{htmlFor:"sprint-board-week",children:"주차"}),e.jsx("select",{id:"sprint-board-week",value:n.date,onChange:m=>n.onOpenWeek(m.target.value),children:he.map(m=>e.jsx("option",{value:m,children:Ie(m)},m))})]}),e.jsx(wa,{...n})]}):e.jsx(e.Fragment,{children:[{label:qe.doing,tone:"doing",list:s.filter(m=>X(m)==="doing")},{label:qe.todo,tone:"todo",list:s.filter(m=>X(m)==="todo")},{label:qe.done,tone:"done",list:s.filter(m=>X(m)==="done")}].sort((m,b)=>d.indexOf(m.tone)-d.indexOf(b.tone)).map(m=>e.jsxs("section",{className:"sprint-group","aria-labelledby":`group-title-${m.tone}`,children:[e.jsxs("div",{className:"sprint-group-header"+(C?.tone===m.tone?` drop-${C.edge}`:""),onDragOver:b=>{if(!u.current)return;b.preventDefault(),b.dataTransfer.dropEffect="move";const T=b.currentTarget.getBoundingClientRect();p({tone:m.tone,edge:b.clientY<T.top+T.height/2?"before":"after"})},onDragLeave:b=>{b.currentTarget.contains(b.relatedTarget)||p(null)},onDrop:b=>{const T=u.current;if(!T)return;b.preventDefault();const U=b.currentTarget.getBoundingClientRect(),L=b.clientY>=U.top+U.height/2;T!==m.tone&&ue(V=>{const E=V.filter(Y=>Y!==T);return E.splice(E.indexOf(m.tone)+(L?1:0),0,T),E}),u.current=null,p(null)},children:[e.jsx(y,{className:"icon-button sprint-group-drag",draggable:!0,"aria-label":`${m.label} 그룹 전체 이동`,title:"드래그하여 그룹 전체 이동 · Alt+↑↓로 순서 변경",onDragStart:b=>{u.current=m.tone,b.dataTransfer.effectAllowed="move",b.dataTransfer.setData("text/plain",m.tone);const T=b.currentTarget.closest("section");T&&b.dataTransfer.setDragImage(T,12,12)},onDragEnd:()=>{u.current=null,p(null)},onKeyDown:b=>{b.altKey&&(b.key==="ArrowUp"||b.key==="ArrowDown")&&(b.preventDefault(),me(m.tone,b.key==="ArrowUp"?-1:1))},children:e.jsx("svg",{width:"14",height:"18",viewBox:"0 0 14 18",fill:"currentColor","aria-hidden":"true",children:[5,9,13].flatMap(b=>[4,9].map(T=>e.jsx("circle",{cx:T,cy:b,r:"1"},`${T}-${b}`)))})}),e.jsx("h2",{className:"sprint-group-title",id:`group-title-${m.tone}`,children:e.jsxs(y,{className:"sprint-group-toggle","aria-expanded":!_.has(m.tone),"aria-controls":`group-body-${m.tone}`,onClick:()=>ye(m.tone),children:[e.jsx(q,{tone:m.tone}),e.jsx("span",{children:m.list.length})]})})]}),e.jsx("div",{id:`group-body-${m.tone}`,hidden:_.has(m.tone),children:m.list.length?e.jsx("div",{className:"sprint-table-scroll",children:e.jsxs("table",{className:"sprint-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"스프린트 이름"}),e.jsx("th",{children:"주차 · 기간"}),e.jsx("th",{children:"작업"}),e.jsx("th",{children:"관리"})]})}),e.jsx("tbody",{children:m.list.map(b=>{const T=$(b.id),U=Re(T),L=[...new Set(T.filter(E=>E.recordKind!=="commit").map(pe))],V=T.length>0&&l.has(b.id);return e.jsxs(S.Fragment,{children:[e.jsxs("tr",{className:T.length?"sprint-parent-row":"",onClick:()=>re(b.id),children:[e.jsx("td",{children:e.jsxs(y,{className:"sprint-name sprint-toggle",disabled:!T.length,"aria-expanded":T.length?V:void 0,"aria-controls":T.length?`sprint-tasks-${b.id}`:void 0,onClick:E=>{E.stopPropagation(),re(b.id)},children:[e.jsx(_e,{sprint:b.id,label:b.code}),e.jsx("span",{children:b.name})]})}),e.jsxs("td",{className:"muted",children:[b.start?`${b.periodKind==="commit-record"?"실행 기간 미정 · 기록 주간 · ":"예정 기간 · "}${Ie(b.start)}`:"기간 미정",b.periodKind!=="commit-record"&&b.recordedStart?` · 기록 주간 ${Ie(b.recordedStart)}`:""]}),e.jsxs("td",{className:"muted",children:[U.done,"/",U.total,"개",U.excluded>0?` · 범위 제외 ${U.excluded}개`:"",L.map(E=>e.jsxs("a",{href:"#milestones/goals",onClick:Y=>Y.stopPropagation(),children:[" ","· ",E]},E))]}),e.jsx("td",{onClick:E=>E.stopPropagation(),children:e.jsxs("div",{className:"sprint-row-actions",children:[e.jsx(y,{className:"button sprint-plan-button",onClick:()=>be(b.start,b.id),children:"상세 계획"}),e.jsx(y,{type:"button",className:"icon-button","aria-label":`${b.name} 수정`,onClick:()=>ne("edit",b),children:e.jsx(x,{name:"edit",size:15})}),e.jsx(y,{className:"icon-button","aria-label":`${b.name} 삭제`,onClick:()=>ne("delete",b),children:e.jsx(x,{name:"trash",size:15})})]})})]}),V&&e.jsx("tr",{className:"sprint-children-row",children:e.jsx("td",{colSpan:4,children:e.jsx("div",{className:"sprint-children",id:`sprint-tasks-${b.id}`,role:"list","aria-label":`${b.name} 할당 작업`,children:T.map(E=>e.jsx("div",{role:"listitem",className:"sprint-child-item",children:e.jsxs("a",{className:"milestone-task sprint-child-task",href:`#plan/day/${W(E)||"undated"}/${encodeURIComponent(E.id)}`,onClick:Y=>{Y.preventDefault(),t(E.id,W(E)||"undated")},"aria-label":`${E.title} 상세 보기`,children:[e.jsx("span",{className:"mono",children:E.id}),e.jsxs("span",{children:[E.title,tn(E)?" · 현재 범위 제외":W(E)?` · 예정 ${W(E)}`:" · 일정 미배정"]}),e.jsx(q,{tone:E.status,label:E.statusLabel})]})},E.id))})})})]},b.id)})})]})}):e.jsx("div",{className:"sprint-empty",children:"해당 상태의 스프린트가 없습니다."})})]},m.tone))}),e.jsx(Ze,{open:g!==null,onRequestClose:()=>P(null),className:"sprint-dialog"+(g!=="delete"?" sprint-calendar-dialog":""),"aria-labelledby":"sprint-dialog-title",children:g&&e.jsxs("div",{className:"modal-inner",children:[e.jsxs("div",{className:"modal-top",children:[e.jsx("h2",{id:"sprint-dialog-title",children:g==="delete"?"스프린트 삭제":g==="edit"?"스프린트 수정":"스프린트 추가"}),e.jsx(y,{type:"button",className:"icon-button","aria-label":"닫기",onClick:()=>P(null),children:e.jsx(x,{name:"close"})})]}),g==="delete"&&v?e.jsxs(e.Fragment,{children:[e.jsxs("p",{className:"delete-name",children:[v.code||`S${v.id}`," · ",v.name]}),e.jsx("p",{className:"muted",children:"스프린트를 삭제할까요?"}),e.jsxs("p",{className:"delete-note",children:["연결된 작업 ",ee(v.id),"개는 삭제되지 않으며,",e.jsx("br",{}),"스프린트 연결만 해제됩니다."]}),e.jsxs("div",{className:"sprint-form-actions",children:[e.jsx(y,{onClick:()=>P(null),children:"취소"}),e.jsx(y,{className:"button danger",onClick:()=>{n.onDeleteSprint(v.id)&&P(null)},children:"삭제"})]})]}):e.jsxs("form",{onSubmit:m=>{m.preventDefault();const b=new FormData(m.currentTarget);n.onSaveSprint(g==="edit"?v.id:null,String(b.get("name")??""),O,b.get("scheduled")==="on")&&P(null)},children:[v?.periodKind==="commit-record"&&e.jsx("label",{className:"sprint-field",children:e.jsxs("span",{children:[e.jsx("input",{type:"checkbox",name:"scheduled"})," 실행 예정 기간으로 지정"]})}),e.jsxs("label",{className:"sprint-field",children:["이름",e.jsx("input",{name:"name",required:!0,maxLength:200,placeholder:"스프린트 이름",defaultValue:g==="edit"?v?.name:""})]}),e.jsx("div",{className:"sprint-field",id:"sprint-week-label",children:"주차"}),e.jsx("div",{className:"sprint-week-calendar",role:"group","aria-labelledby":"sprint-week-label",children:e.jsx(On,{items:[],visibleItems:[],date:O,month:Z,today:a,scope:"all",onlyMine:!1,selectedId:"",sprints:s,selectedWeek:O,onWeekSelect:j,onMonthChange:D})}),e.jsx("p",{className:"sprint-week-range","aria-live":"polite",children:O?`${Ie(O)} · 월~일`:"기간 미정"}),e.jsxs("div",{className:"sprint-form-actions",children:[e.jsx(y,{type:"button",onClick:()=>j(""),children:"기간 미정"}),e.jsx(y,{type:"button",onClick:()=>P(null),children:"취소"}),e.jsx(y,{className:"button primary",type:"submit",children:g==="edit"?"저장":"추가"})]})]},g+(v?.id??""))]})})]})}function ja({items:n,date:a,selectedId:s,document:d}){const t=n.find(i=>i.id===s),r=t?W(t):a,o=n.filter(i=>W(i)===r&&(!!r||!!t)&&(r||!t||i.sprint===t.sprint)),l=n.find(i=>i.id===s)||o[0];return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"breadcrumb",children:[e.jsx("a",{href:r?`#plan/week/${Ae(r)}`:"#plan/week/undated",children:"계획"}),e.jsx(x,{name:"right",size:11}),e.jsx("span",{children:r?`${Se(r)} ${qn(r)}`:"날짜 미정"}),l?e.jsxs(e.Fragment,{children:[e.jsx(x,{name:"right",size:11}),e.jsx("span",{className:"mono",children:l.id})]}):null]}),e.jsxs("div",{className:"daily-workspace",children:[e.jsxs("aside",{className:"daily-list",children:[e.jsxs("div",{className:"daily-list-head",children:[e.jsxs("strong",{children:[Se(r)," 작업"]}),e.jsx(y,{"data-action":"add",className:"icon-button","data-date":r,"aria-label":"일일 작업 추가",children:e.jsx(x,{name:"plus",size:14})})]}),o.map(i=>e.jsxs(y,{"data-action":"daily-item",className:"daily-list-item "+(l?.id===i.id?"active":""),"data-id":i.id,"data-date":r,children:[e.jsx("small",{children:i.id}),i.title,e.jsx(q,{tone:i.status,label:i.statusLabel})]},i.id))]}),e.jsx("article",{className:"daily-document",children:l?d:e.jsxs("div",{className:"empty-content",children:[e.jsx("p",{children:"이 날짜에 배정된 작업이 없습니다."}),e.jsx(y,{"data-action":"add",className:"button primary","data-date":r,children:"항목 추가"})]})})]})]})}const Ua=S.forwardRef(function(a,s){const d=S.useRef(a.item).current,t=S.useRef(null),r=S.useRef(null),o=S.useRef(null),l=()=>a.readOnly?!0:r.current?.flush()??!0;S.useImperativeHandle(s,()=>({flush:l,openThread:_=>o.current?.open(_),focusComments:()=>o.current?.focusPage()})),S.useLayoutEffect(()=>{const _=a.pendingThread;_&&(_.inline?o.current?.open(_.id):o.current?.focusPage())},[a.pendingThread]);function i(){const _=window.getSelection(),I=t.current?.parentElement?.querySelector("#document-body");if(!I||!_?.rangeCount||_.isCollapsed)return;const u=_.getRangeAt(0).cloneRange();if(!I.contains(u.startContainer)||!I.contains(u.endContainer))return;let C=_.toString();if(!C.trim()||C.length>2e3)return;const p=u.startContainer.nodeType===Node.TEXT_NODE?u.startContainer.parentElement:u.startContainer,g=u.endContainer.nodeType===Node.TEXT_NODE?u.endContainer.parentElement:u.endContainer,P=p instanceof Element?p.closest("[data-field]"):null,v=g instanceof Element?g.closest("[data-field]"):null;let N="content",O=0;if(P&&P===v){const j=u.cloneRange();j.selectNodeContents(P),j.setEnd(u.startContainer,u.startOffset),O=P.matches(".block-editable")?kn(j.cloneContents()).length:j.toString().length,P.matches(".block-editable")&&(C=kn(u.cloneContents())),N=P.dataset.field||"content"}o.current?.startQuote({quote:C,field:N,start:O,end:O+C.length},{getBoundingClientRect:()=>u.getBoundingClientRect()})}return e.jsxs("div",{style:{display:"contents"},inert:a.readOnly||void 0,children:[a.mode==="day"?e.jsxs("div",{className:"document-top",children:[e.jsx("span",{className:"mono",children:d.id}),e.jsx("span",{id:"writer-save-state",className:"writer-save-state",role:"status",children:a.readOnly?"읽기 전용":"저장됨"})]}):null,e.jsx("h1",{ref:t,id:a.mode==="peek"?"modal-title":void 0,"data-writer-title":!0,contentEditable:!a.readOnly,suppressContentEditableWarning:!0,role:"textbox","aria-label":"작업 제목",spellCheck:!1,children:d.title}),e.jsx(Wn,{item:a.item,parents:a.parents,sprints:a.sprints,statusOptions:a.statusOptions,statusProperties:a.statusProperties,statusOptionOrder:a.statusOptionOrder,onStatusPropertyAction:a.onStatusPropertyAction,onAddStatus:a.onAddStatus,onSave:a.onSave,onBeforeSave:l,onError:a.onError}),e.jsx(Fn,{ref:o,item:d,onCommit:a.onCommentCommit,onChange:a.onCommentsChange,onDelete:a.onCommentDelete,onBeforeSave:l,onError:a.onError}),e.jsx(Vn,{ref:r,item:d,onSave:a.onSave,onComment:i,onError:a.onError})]})}),Ba=new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Seoul",year:"numeric",month:"2-digit",day:"2-digit"});function en(){const n=Ba.formatToParts(new Date);return["year","month","day"].map(a=>n.find(s=>s.type===a).value).join("-")}function Xe(n){const a=en(),s=n.slice(1).split("/"),d={month:a.slice(0,7),date:a,id:""};if(!s[0]||s[0]==="project")return{...d,page:"project",view:"goals",section:s[1]||"overview",id:s[2]||""};if(s[0]==="plan"&&s[1]==="day"){let t="";try{t=decodeURIComponent(s[3]||"")}catch{}return{...d,page:"plan",view:"day",date:s[2]==="undated"?"":le(s[2])?s[2]:a,id:t}}return s[0]==="plan"?{...d,page:"plan",view:"week",date:Ae(le(s[2])?s[2]:a),id:s[3]||""}:{...d,page:"milestones",view:s[1]==="goals"?"goals":"calendar",month:/^\d{4}-\d{2}$/.test(s[2]||"")&&le(s[2]+"-01")?s[2]:d.month}}function Ga(){const[n,a]=S.useState(en),s=Ae(n);S.useEffect(()=>{const c=()=>a(en()),h=Date.parse(n+"T00:00:00+09:00")+864e5,f=window.setTimeout(c,Math.max(0,h-Date.now()));return window.addEventListener("focus",c),document.addEventListener("visibilitychange",c),()=>{window.clearTimeout(f),window.removeEventListener("focus",c),document.removeEventListener("visibilitychange",c)}},[n]);const[d]=S.useState(In),t=S.useRef(d.state),[r,o]=S.useState(d.loadError),[,l]=S.useState(0),[i,_]=S.useState(()=>Xe(location.hash)),I=S.useRef(location.hash),[u,C]=S.useState("all"),[p,g]=S.useState(!1),P=ia(`${i.page}:${i.view}:${i.month}:${i.date}:${u}:${p}`,(c,h)=>Ge({type:"move",date:h},c)),[v,N]=S.useState(null),[O,j]=S.useState(null),[Z,D]=S.useState(0),[R,$]=S.useState(null),[ee,re]=S.useState(d.loadError?{text:d.loadError,error:!0}:null),[ye,ue]=S.useState(!1),me=S.useRef(null),ne=S.useRef(null),X=S.useRef(null),be=S.useRef(null),he=S.useRef(null),m=S.useMemo(()=>Pn(t.current),[t.current.sprints,t.current.items]),b=S.useMemo(()=>Qn(t.current.items.filter(c=>!c.deletedAt)),[t.current.items]),T=Rn(t.current),U=b.filter(c=>T.has(c.id)),L=b.filter(c=>!T.has(c.id)),V=L.filter(c=>c.recordKind!=="commit"),E=V.filter(c=>c.recordKind!=="subtask"),Y=L.filter(c=>(u==="all"||pe(c)===u)&&(!p||c.owner==="나")),Te=i.page==="plan"&&i.view==="day",te=Te?b.find(c=>c.id===i.id)||L.find(c=>W(c)===i.date&&!!i.date):void 0,ce=b.find(c=>c.id===v),rn=te?.id||"",je=te?W(te):i.date,cn=()=>v?ne.current:me.current,w=S.useCallback(()=>(me.current?.flush()??!0)&&(ne.current?.flush()??!0),[]),H=S.useCallback(c=>re({text:c,error:!0}),[]),dn=c=>re({text:c,error:!1});function Q(){l(c=>c+1)}function z(c,h=""){try{return ka(c),t.current=c,h&&dn(h),!0}catch{return H(r||"변경을 저장하지 못했습니다. 브라우저 저장 공간을 확인하세요."),!1}}function Ue(c){if(!w())return!1;try{return z(c(t.current))?(Q(),!0):!1}catch(h){return H(h instanceof Error?h.message:"스프린트를 저장하지 못했습니다."),!1}}function Be(c,h){try{const f=z(Sn(t.current,c,h));return f&&Q(),f}catch(f){return H(f instanceof Error?f.message:"변경을 저장하지 못했습니다."),!1}}function Ge(c,h=P.selectedIds){const f=new Set(h);if(!w()||!f.size)return;const k=f.size;if(!(c.type==="delete"&&!window.confirm(`선택한 작업 ${k}개를 삭제할까요?`)))try{const A=Yn(t.current,f,c);if(!z(A,`작업 ${k}개를 ${c.type==="move"?"이동":"삭제"}했습니다.`))return;P.clear(),Q()}catch(A){H(A instanceof Error?A.message:"변경을 저장하지 못했습니다.")}}function ln(){(ne.current?.flush()??!0)&&(N(null),$(null),D(c=>c+1),Q())}function G(c){w()&&(N(null),$(null),ue(!1),location.hash!==c?location.hash=c:(_(Xe(c)),D(h=>h+1)))}function pn(c){w()&&t.current.items.some(h=>h.id===c&&!h.deletedAt)&&(j(null),$(null),N(c))}function Nn(c){if(!w())return;const h="PLAN-"+crypto.randomUUID().slice(0,8);try{if(!z(Sn(t.current,h,{title:"새 페이지",date:c,parent:9,owner:"나"})))return;he.current=h,pn(h)}catch(f){H(f instanceof Error?f.message:"변경을 저장하지 못했습니다.")}}function jn(c,h){const f=crypto.randomUUID();try{if(!z(ra(t.current,c.id,{id:f,...h})))return null;const k=h.parentId?t.current.items.find(A=>A.id===c.id)?.comments?.find(A=>A.id===h.parentId):null;return{id:h.parentId||f,inline:!!(k?.quote||h.quote)}}catch(k){return H(k instanceof Error?k.message:"댓글을 저장하지 못했습니다."),null}}function un(c){w()&&($(c),D(h=>h+1))}function Un(c,h,f){const k=t.current.items.find(A=>A.id===c.id)?.comments?.find(A=>A.id===h);!k||!w()||!window.confirm(`댓글을 삭제할까요?
${k.body||"첨부 파일"}`)||z(oa(t.current,c.id,h))&&un({id:f,inline:!0})}function mn(c,h){return e.jsx(Ua,{ref:h==="peek"?ne:me,item:c,readOnly:!!r,parents:T.has(c.id)?ha:ze,sprints:m,statusOptions:t.current.statusOptions,statusProperties:_n(t.current),statusOptionOrder:t.current.statusOptionOrder,onStatusPropertyAction:f=>{if(!w())return!1;try{return z(ea(t.current,f))?(Q(),!0):!1}catch(k){return H(k instanceof Error?k.message:"속성을 저장하지 못했습니다."),!1}},onAddStatus:(f,k)=>{if(!w())return!1;try{const A=zn(t.current,f,k);return Zn(A),z(A)?(Q(),!0):!1}catch(A){return H(A instanceof Error?A.message:"상태 옵션을 저장하지 못했습니다."),!1}},mode:h,onSave:f=>Be(c.id,f),onCommentCommit:f=>jn(c,f),onCommentDelete:(f,k)=>Un(c,f,k),onCommentsChange:un,onError:H,pendingThread:R},`${h}:${c.id}:${Z}`)}function ie(){X.current&&(X.current.hidden=!0),be.current=null}function bn(c){const h=c.target instanceof Element?c.target.closest("[data-action]"):null,f=h?.dataset.action;if((!(c.target instanceof Element)||!c.target.closest("#scope")&&f!=="toggle-filter")&&ue(!1),!h||!f)return;c.preventDefault();const k=h.dataset;if(f==="context-open-page"||f==="context-delete"){const A=L.find(K=>K.id===be.current);if(ie(),!A)return;f==="context-open-page"?G(`#plan/day/${A.date||"undated"}/${encodeURIComponent(A.id)}`):w()&&window.confirm(`작업을 삭제할까요?
${A.title}`)&&z(na(t.current,A.id),"작업을 삭제했습니다.")&&Q()}else if(f==="scope")w()&&C(k.value||"all");else if(f==="calendar-view")G("#milestones/calendar/"+i.month);else if(f==="goals-view")G("#milestones/goals");else if(f==="prev-month"||f==="next-month"){const[A,K]=i.month.split("-").map(Number);G("#milestones/calendar/"+new Date(Date.UTC(A,K-1+(f==="next-month"?1:-1),1)).toISOString().slice(0,7))}else if(f==="today-month")G("#milestones/calendar/"+n.slice(0,7));else if(f==="open-week")G("#plan/week/"+k.date);else if(f==="open-day")G("#plan/day/"+k.date);else if(f==="prev-week"||f==="next-week")G("#plan/week/"+ve(i.date,f==="next-week"?7:-7));else if(f==="current-week")G("#plan/week/"+s);else if(f==="detail")pn(k.id||"");else if(f==="toggle"){if(!w())return;const A=t.current.items.find(K=>K.id===k.id);A&&Be(A.id,{status:A.status==="done"?"todo":"done"})&&(dn(A.status==="done"?"완료를 취소했습니다.":"완료로 표시했습니다."),Q())}else f==="parent"?j({title:ze[Number(k.parent)-1],items:V.filter(A=>A.parent===Number(k.parent))}):f==="undated"?j({title:k.kind==="deployment"?"배포 후 작업":"일정 미배정",items:Y.filter(A=>!A.date&&(k.kind==="deployment"?A.sprint===12:A.sprint!==12))}):f==="add"?Nn(k.date??n):f==="close-modal"?ln():f==="close-list"?j(null):f==="goto-item"&&ce?G(`#plan/day/${ce.date||"undated"}/${encodeURIComponent(ce.id)}`):f==="daily-item"?G(`#plan/day/${k.date||"undated"}/${encodeURIComponent(k.id||"")}`):f==="focus-comment"||f==="quote-jump"?cn()?.openThread(k.comment||""):f==="open-comments"?cn()?.focusComments():f==="toggle-filter"&&ue(A=>!A)}function hn(c){const h=c.target;h instanceof HTMLInputElement&&h.id==="week-date"&&le(h.value)&&G("#plan/week/"+Ae(h.value))}const Me=S.useRef({handleClick:bn,handleChange:hn});Me.current={handleClick:bn,handleChange:hn},S.useEffect(()=>{const c=new AbortController;return document.addEventListener("click",h=>Me.current.handleClick(h),{signal:c.signal}),document.addEventListener("change",h=>Me.current.handleChange(h),{signal:c.signal}),()=>c.abort()},[]),S.useEffect(()=>{if(!ee||r)return;const c=setTimeout(()=>re(null),3500);return()=>clearTimeout(c)},[ee,!!r]),S.useLayoutEffect(()=>{document.title="뒤끝 백엔드 · 프로젝트 아카이브",I.current=location.hash,window.parent!==window&&window.parent.postMessage({type:"planner-route",hash:location.hash},location.origin),ie()},[i,Z]),S.useLayoutEffect(()=>{if(!v||he.current!==v)return;const c=document.querySelector("#task-modal [data-writer-title]");if(!c)return;c.focus();const h=document.createRange();h.selectNodeContents(c),window.getSelection()?.removeAllRanges(),window.getSelection()?.addRange(h),he.current=null},[v]),S.useEffect(()=>{const c=new AbortController,{signal:h}=c;window.addEventListener("hashchange",()=>{if(!w()){history.replaceState(null,"",I.current);return}N(null),$(null),_(Xe(location.hash)),D(k=>k+1),window.scrollTo(0,0)},{signal:h}),window.addEventListener("storage",k=>{if(!(k.key!==null&&k.key!==Ne))try{const A=In(t.current,!0);if(o(A.loadError),A.readOnly){H(A.loadError);return}const K=A.state;t.current=K,!document.activeElement?.closest("[contenteditable], input, textarea, select, [data-comment-form]")&&!document.querySelector("dialog[open]")&&w()&&D(Ke=>Ke+1),Q()}catch{H("변경한 계획을 읽지 못했습니다.")}},{signal:h}),window.addEventListener("pagehide",()=>{w()},{signal:h}),window.addEventListener("beforeunload",k=>{w()||(k.preventDefault(),k.returnValue="")},{signal:h});const f=(k,A,K)=>{const B=X.current;B&&(be.current=k.dataset.itemId||null,B.hidden=!1,B.style.left=Math.max(8,Math.min(A,innerWidth-B.offsetWidth-8))+"px",B.style.top=Math.max(8,Math.min(K,innerHeight-B.offsetHeight-8))+"px",B.querySelector("button")?.focus())};return document.addEventListener("contextmenu",k=>{const A=k.target instanceof Element?k.target.closest(".calendar-task[data-item-id]"):null;A&&(k.preventDefault(),f(A,k.clientX,k.clientY))},{signal:h}),document.addEventListener("keydown",k=>{const A=k.target instanceof Element?k.target.closest(".calendar-task[data-item-id]"):null;if(A&&(k.key==="ContextMenu"||k.shiftKey&&k.key==="F10")){k.preventDefault();const B=A.getBoundingClientRect();f(A,B.left,B.bottom);return}const K=X.current;if(!(!K||K.hidden)&&(k.key==="Escape"&&(k.preventDefault(),ie()),k.key==="ArrowDown"||k.key==="ArrowUp")){k.preventDefault();const B=[...K.querySelectorAll("button")],Ke=B.findIndex(Bn=>Bn===document.activeElement);B[(Ke+(k.key==="ArrowDown"?1:-1)+B.length)%B.length]?.focus()}},{signal:h}),document.addEventListener("mousedown",k=>{(!(k.target instanceof Element)||!k.target.closest("#calendar-context"))&&ie()},{signal:h}),document.addEventListener("scroll",ie,{capture:!0,signal:h}),window.addEventListener("resize",ie,{signal:h}),()=>{c.abort(),document.body.classList.remove("sidebar-collapsed","notion-sidebar-open")}},[w,H]);const De={selectedTaskIds:P.selectedIds,sprints:m,items:L,visibleItems:Y,scope:u,onlyMine:p,filterOpen:ye,today:n,month:i.month,date:i.date,selectedId:rn};return e.jsxs($n.Provider,{value:{settings:t.current.statusOptionSettings??{},wrap:_n(t.current).find(c=>c.id==="status")?.wrap??!0},children:[e.jsxs("aside",{className:"notion-sidebar",id:"notion-sidebar",children:[e.jsxs("div",{className:"notion-account",children:[e.jsx("span",{className:"notion-workspace-icon",children:"B"}),e.jsx("strong",{children:"뒤끝 백엔드"})]}),e.jsxs("nav",{className:"project-nav notion-page-tree","aria-label":"프로젝트 페이지",children:[e.jsx("a",{className:i.page==="milestones"?"active":void 0,"aria-current":i.page==="milestones"?"page":void 0,href:`#milestones/calendar/${n.slice(0,7)}`,"data-page":"milestones",children:e.jsxs("span",{className:"notion-page-label",children:[e.jsx("span",{className:"notion-page-badge",children:"마일스톤"}),e.jsx("span",{children:"달력"})]})}),e.jsx("a",{className:i.page==="plan"?"active":void 0,"aria-current":i.page==="plan"?"page":void 0,href:`#plan/week/${s}`,"data-page":"plan",children:e.jsxs("span",{className:"notion-page-label",children:[e.jsx("span",{className:"notion-page-badge",children:"스프린트"}),e.jsx("span",{children:"작업 보드"})]})}),e.jsx("div",{id:"notion-day-pages",children:Te?L.filter(c=>W(c)===je&&(je||!te||c.sprint===te.sprint)).map(c=>e.jsxs("a",{className:`notion-nested-page ${rn===c.id?"active":""}`,href:`#plan/day/${je||"undated"}/${c.id}`,children:[e.jsx(x,{name:"comment",size:13}),e.jsx("span",{children:c.title})]},c.id)):null}),e.jsx("a",{href:"#project/overview","data-page":"project",className:i.page==="project"?"active":void 0,"aria-current":i.page==="project"?"page":void 0,children:e.jsxs("span",{className:"notion-page-label",children:[e.jsx(x,{name:"copy",size:15}),e.jsx("span",{children:"프로젝트 아카이브"})]})})]}),e.jsxs("div",{className:"notion-sidebar-footer",children:[e.jsx("span",{className:"notion-private-dot"}),"공개 보기 · 변경은 이 브라우저에 저장"]})]}),e.jsx("div",{className:"notion-main",children:e.jsxs("div",{id:"workspace",className:`workspace-layout${Te?" daily-mode":""}${ye?" scope-open":""}`,children:[e.jsxs("main",{id:"content",className:"workspace-main",...P.handlers,children:[P.selectedIds.size?e.jsx(da,{count:P.selectedIds.size,onMove:c=>Ge({type:"move",date:c}),onDelete:()=>Ge({type:"delete"}),onCancel:P.clear}):null,i.page==="project"?e.jsx(Ra,{section:i.section,docId:i.id,items:E,legacyItems:U}):i.page==="milestones"?i.view==="goals"?e.jsx(Oa,{...De,items:L.filter(c=>c.recordKind!=="commit"),visibleItems:Y.filter(c=>c.recordKind!=="commit")}):e.jsx(On,{...De}):Te?e.jsx(ja,{...De,items:b,document:te?mn(te,"day"):null}):e.jsx(Na,{focusedSprint:Number(i.id)||void 0,groupOrder:t.current.sprintGroupOrder??Xn,onSaveSprint:(c,h,f,k)=>Ue(A=>sa(A,c,h,f,k)),onDeleteSprint:c=>Ue(h=>ta(h,c)),onReorderGroups:c=>Ue(h=>aa(h,c)),onOpenWeek:c=>G("#plan/week/"+c),onOpenTask:(c,h)=>G(`#plan/day/${h||"undated"}/${encodeURIComponent(c)}`),...De,onMove:(c,h)=>{if(!le(h)||!w())return;const f=t.current.items.find(k=>k.id===c&&!k.deletedAt);!f||f.date===h||Be(c,{date:h})&&Q()}})]}),e.jsxs("aside",{id:"scope",className:"scope-side","aria-label":"필터",children:[e.jsx("div",{className:"side-label",children:"필터"}),e.jsxs(y,{"data-action":"scope","data-value":"all",className:`scope-filter ${u==="all"?"active":""}`,children:["모든 마일스톤",e.jsx("span",{children:L.length})]}),an.map(([c,h])=>e.jsxs(y,{"data-action":"scope","data-value":c,className:`scope-filter ${u===c?"active":""}`,children:[e.jsx("span",{children:c}),h,e.jsx("span",{children:L.filter(f=>pe(f)===c).length})]},c)),e.jsxs("label",{className:"my-filter",children:[e.jsx("input",{id:"only-mine",type:"checkbox",checked:p,onChange:c=>{w()&&g(c.currentTarget.checked)}}),"내 작업만"]})]})]})}),e.jsx(Ze,{id:"task-modal",className:"task-modal page-peek","aria-labelledby":"modal-title",open:!!ce,onRequestClose:ln,children:ce?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"peek-toolbar",children:[e.jsx(y,{"data-action":"goto-item",className:"icon-button","aria-label":"전체 페이지로 확장",title:"전체 페이지로 확장",children:e.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",children:e.jsx("path",{d:"M9 3H3v6M3 3l7 7m5 11h6v-6m0 6-7-7"})})}),e.jsx("span",{id:"writer-save-state",className:"writer-save-state",role:"status",children:"저장됨"}),e.jsx(y,{"data-action":"close-modal",className:"icon-button","aria-label":"상세 닫기",children:e.jsx(x,{name:"close",size:17})})]}),e.jsx("div",{className:"peek-document",children:mn(ce,"peek")})]}):null}),e.jsx(Ze,{id:"list-modal",className:"goal-modal","aria-labelledby":"list-title",open:!!O,onRequestClose:()=>j(null),children:O?e.jsxs("div",{className:"modal-inner",children:[e.jsxs("div",{className:"modal-top",children:[e.jsx("h2",{id:"list-title",children:O.title}),e.jsx(y,{"data-action":"close-list",className:"icon-button","aria-label":"목록 닫기",children:e.jsx(x,{name:"close",size:17})})]}),e.jsx("div",{className:"undated-list",children:O.items.length?O.items.map(c=>e.jsxs(y,{"data-action":"detail",className:"goal-child","data-id":c.id,children:[e.jsx("span",{className:"mono",children:c.id}),e.jsx("strong",{children:c.title}),e.jsx(q,{tone:c.status,label:c.statusLabel}),e.jsx(x,{name:"right",size:12})]},c.id)):e.jsx("div",{className:"empty-content",style:{minHeight:100},children:"작업이 없습니다."})})]}):null}),e.jsxs("button",{id:"selection-action",className:"selection-action",hidden:!0,children:[e.jsx(x,{name:"comment",size:14}),"댓글"]}),e.jsx("div",{id:"toast",role:"status",hidden:!ee&&!r,className:ee?.error||r?"error":void 0,children:r||ee?.text}),e.jsxs("div",{ref:X,id:"calendar-context",className:"calendar-context",role:"menu","aria-label":"작업 메뉴",hidden:!0,children:[e.jsx("button",{type:"button",role:"menuitem","data-action":"context-open-page",children:"상세 페이지로 이동"}),e.jsx("button",{type:"button",role:"menuitem","data-action":"context-delete",children:"삭제"})]})]})}const wn=document.getElementById("app");if(!wn)throw new Error("Application root is missing.");ca.createRoot(wn).render(e.jsx(Ga,{}));
