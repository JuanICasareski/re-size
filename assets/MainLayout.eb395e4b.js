import{v as kt,c as We,g as Ct,a as Lt,u as xt,b as St,Q as Tt,d as _t}from"./QBtn.fb5a01ff.js";import{c as P,h as N,a as tt,b as Et,d as Fe,e as Bt}from"./render.a5508880.js";import{c as v,h as C,r as S,j as ot,o as j,k as A,n as ze,l as U,g as H,m as O,p as Q,w as k,a as $e,q as se,H as Ae,s as V,t as Pe,u as zt,v as $t,P as Pt,x as Vt,y as oe,z as be,A as Ne,B as ye,C as Se,D as ge,E as Ot,G as nt,I as Ht,J as ne,b as Mt,K as Qt,L as it,M as re,N as Te,O as z,d as E,Q as Dt,R as ue,S as _e,U as Rt,V as Wt,W as Ft,X as At,F as Nt,Y as It}from"./index.bcc5be65.js";var Xt=P({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:o}){const n=v(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>C("div",{class:n.value},N(o.default))}}),Yt=P({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:o}){const n=v(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>C("div",{class:n.value,role:"toolbar"},N(o.default))}});function jt(){const e=S(!ot.value);return e.value===!1&&j(()=>{e.value=!0}),e}const lt=typeof ResizeObserver!="undefined",Ie=lt===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var Ee=P({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:o}){let n=null,l,t={width:-1,height:-1};function i(d){d===!0||e.debounce===0||e.debounce==="0"?s():n===null&&(n=setTimeout(s,e.debounce))}function s(){if(clearTimeout(n),n=null,l){const{offsetWidth:d,offsetHeight:c}=l;(d!==t.width||c!==t.height)&&(t={width:d,height:c},o("resize",t))}}const{proxy:f}=H();if(lt===!0){let d;const c=a=>{l=f.$el.parentNode,l?(d=new ResizeObserver(i),d.observe(l),s()):a!==!0&&U(()=>{c(!0)})};return j(()=>{c()}),A(()=>{clearTimeout(n),d!==void 0&&(d.disconnect!==void 0?d.disconnect():l&&d.unobserve(l))}),ze}else{let a=function(){clearTimeout(n),c!==void 0&&(c.removeEventListener!==void 0&&c.removeEventListener("resize",i,O.passive),c=void 0)},w=function(){a(),l&&l.contentDocument&&(c=l.contentDocument.defaultView,c.addEventListener("resize",i,O.passive),s())};const d=jt();let c;return j(()=>{U(()=>{l=f.$el,l&&w()})}),A(a),f.trigger=i,()=>{if(d.value===!0)return C("object",{style:Ie.style,tabindex:-1,type:"text/html",data:Ie.url,"aria-hidden":"true",onLoad:w})}}}}),Ut=P({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:o,emit:n}){const{proxy:{$q:l}}=H(),t=$e(se,Q);if(t===Q)return console.error("QHeader needs to be child of QLayout"),Q;const i=S(parseInt(e.heightHint,10)),s=S(!0),f=v(()=>e.reveal===!0||t.view.value.indexOf("H")>-1||l.platform.is.ios&&t.isContainer.value===!0),d=v(()=>{if(e.modelValue!==!0)return 0;if(f.value===!0)return s.value===!0?i.value:0;const u=i.value-t.scroll.value.position;return u>0?u:0}),c=v(()=>e.modelValue!==!0||f.value===!0&&s.value!==!0),a=v(()=>e.modelValue===!0&&c.value===!0&&e.reveal===!0),w=v(()=>"q-header q-layout__section--marginal "+(f.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(c.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),q=v(()=>{const u=t.rows.value.top,p={};return u[0]==="l"&&t.left.space===!0&&(p[l.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),u[2]==="r"&&t.right.space===!0&&(p[l.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),p});function m(u,p){t.update("header",u,p)}function h(u,p){u.value!==p&&(u.value=p)}function T({height:u}){h(i,u),m("size",u)}function L(u){a.value===!0&&h(s,!0),n("focusin",u)}k(()=>e.modelValue,u=>{m("space",u),h(s,!0),t.animate()}),k(d,u=>{m("offset",u)}),k(()=>e.reveal,u=>{u===!1&&h(s,e.modelValue)}),k(s,u=>{t.animate(),n("reveal",u)}),k(t.scroll,u=>{e.reveal===!0&&h(s,u.direction==="up"||u.position<=e.revealOffset||u.position-u.inflectionPoint<100)});const g={};return t.instances.header=g,e.modelValue===!0&&m("size",i.value),m("space",e.modelValue),m("offset",d.value),A(()=>{t.instances.header===g&&(t.instances.header=void 0,m("size",0),m("offset",0),m("space",!1))}),()=>{const u=tt(o.default,[]);return e.elevated===!0&&u.push(C("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),u.push(C(Ee,{debounce:0,onResize:T})),C("header",{class:w.value,style:q.value,onFocusin:L},u)}}}),Be=P({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:o}){const n=v(()=>parseInt(e.lines,10)),l=v(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(n.value===1?" ellipsis":"")),t=v(()=>e.lines!==void 0&&n.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":n.value}:null);return()=>C("div",{style:t.value,class:l.value},N(o.default))}});const Ve={dark:{type:Boolean,default:null}};function Oe(e,o){return v(()=>e.dark===null?o.dark.isActive:e.dark)}var Kt=P({name:"QList",props:{...Ve,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:o}){const n=H(),l=Oe(e,n.proxy.$q),t=v(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(l.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>C(e.tag,{class:t.value},N(o.default))}});function Gt(e,o,n){let l;function t(){l!==void 0&&(Ae.remove(l),l=void 0)}return A(()=>{e.value===!0&&t()}),{removeFromHistory:t,addToHistory(){l={condition:()=>n.value===!0,handler:o},Ae.add(l)}}}const Jt={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},Zt=["beforeShow","show","beforeHide","hide"];function eo({showing:e,canShow:o,hideOnRouteChange:n,handleShow:l,handleHide:t,processOnMount:i}){const s=H(),{props:f,emit:d,proxy:c}=s;let a;function w(u){e.value===!0?h(u):q(u)}function q(u){if(f.disable===!0||u!==void 0&&u.qAnchorHandled===!0||o!==void 0&&o(u)!==!0)return;const p=f["onUpdate:modelValue"]!==void 0;p===!0&&(d("update:modelValue",!0),a=u,U(()=>{a===u&&(a=void 0)})),(f.modelValue===null||p===!1)&&m(u)}function m(u){e.value!==!0&&(e.value=!0,d("beforeShow",u),l!==void 0?l(u):d("show",u))}function h(u){if(f.disable===!0)return;const p=f["onUpdate:modelValue"]!==void 0;p===!0&&(d("update:modelValue",!1),a=u,U(()=>{a===u&&(a=void 0)})),(f.modelValue===null||p===!1)&&T(u)}function T(u){e.value!==!1&&(e.value=!1,d("beforeHide",u),t!==void 0?t(u):d("hide",u))}function L(u){f.disable===!0&&u===!0?f["onUpdate:modelValue"]!==void 0&&d("update:modelValue",!1):u===!0!==e.value&&(u===!0?m:T)(a)}k(()=>f.modelValue,L),n!==void 0&&kt(s)===!0&&k(()=>c.$route.fullPath,()=>{n.value===!0&&e.value===!0&&h()}),i===!0&&j(()=>{L(f.modelValue)});const g={show:q,hide:h,toggle:w};return Object.assign(c,g),g}const to=[null,document,document.body,document.scrollingElement,document.documentElement];function oo(e,o){let n=Ct(o);if(n===void 0){if(e==null)return window;n=e.closest(".scroll,.scroll-y,.overflow-auto")}return to.includes(n)?window:n}function at(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function rt(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let ie;function we(){if(ie!==void 0)return ie;const e=document.createElement("p"),o=document.createElement("div");We(e,{width:"100%",height:"200px"}),We(o,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),o.appendChild(e),document.body.appendChild(o);const n=e.offsetWidth;o.style.overflow="scroll";let l=e.offsetWidth;return n===l&&(l=o.clientWidth),o.remove(),ie=n-l,ie}function no(e,o=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:o?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}let J=0,qe,ke,Z,Ce=!1,Xe,Ye,Y;function io(e){lo(e)&&Pe(e)}function lo(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const o=zt(e),n=e.shiftKey&&!e.deltaX,l=!n&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),t=n||l?e.deltaY:e.deltaX;for(let i=0;i<o.length;i++){const s=o[i];if(no(s,l))return l?t<0&&s.scrollTop===0?!0:t>0&&s.scrollTop+s.clientHeight===s.scrollHeight:t<0&&s.scrollLeft===0?!0:t>0&&s.scrollLeft+s.clientWidth===s.scrollWidth}return!0}function je(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function le(e){Ce!==!0&&(Ce=!0,requestAnimationFrame(()=>{Ce=!1;const{height:o}=e.target,{clientHeight:n,scrollTop:l}=document.scrollingElement;(Z===void 0||o!==window.innerHeight)&&(Z=n-o,document.scrollingElement.scrollTop=l),l>Z&&(document.scrollingElement.scrollTop-=Math.ceil((l-Z)/8))}))}function Ue(e){const o=document.body,n=window.visualViewport!==void 0;if(e==="add"){const{overflowY:l,overflowX:t}=window.getComputedStyle(o);qe=rt(window),ke=at(window),Xe=o.style.left,Ye=o.style.top,o.style.left=`-${qe}px`,o.style.top=`-${ke}px`,t!=="hidden"&&(t==="scroll"||o.scrollWidth>window.innerWidth)&&o.classList.add("q-body--force-scrollbar-x"),l!=="hidden"&&(l==="scroll"||o.scrollHeight>window.innerHeight)&&o.classList.add("q-body--force-scrollbar-y"),o.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,V.is.ios===!0&&(n===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",le,O.passiveCapture),window.visualViewport.addEventListener("scroll",le,O.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",je,O.passiveCapture))}V.is.desktop===!0&&V.is.mac===!0&&window[`${e}EventListener`]("wheel",io,O.notPassive),e==="remove"&&(V.is.ios===!0&&(n===!0?(window.visualViewport.removeEventListener("resize",le,O.passiveCapture),window.visualViewport.removeEventListener("scroll",le,O.passiveCapture)):window.removeEventListener("scroll",je,O.passiveCapture)),o.classList.remove("q-body--prevent-scroll"),o.classList.remove("q-body--force-scrollbar-x"),o.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,o.style.left=Xe,o.style.top=Ye,window.scrollTo(qe,ke),Z=void 0)}function ao(e){let o="add";if(e===!0){if(J++,Y!==void 0){clearTimeout(Y),Y=void 0;return}if(J>1)return}else{if(J===0||(J--,J>0))return;if(o="remove",V.is.ios===!0&&V.is.nativeMobile===!0){clearTimeout(Y),Y=setTimeout(()=>{Ue(o),Y=void 0},100);return}}Ue(o)}function ro(){let e;return{preventBodyScroll(o){o!==e&&(e!==void 0||o===!0)&&(e=o,ao(o))}}}function uo(){let e;const o=H();function n(){clearTimeout(e)}return $t(n),A(n),{removeTimeout:n,registerTimeout(l,t){clearTimeout(e),Lt(o)===!1&&(e=setTimeout(l,t))}}}const He={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},so=Object.keys(He);He.all=!0;function Ke(e){const o={};for(const n of so)e[n]===!0&&(o[n]=!0);return Object.keys(o).length===0?He:(o.horizontal===!0?o.left=o.right=!0:o.left===!0&&o.right===!0&&(o.horizontal=!0),o.vertical===!0?o.up=o.down=!0:o.up===!0&&o.down===!0&&(o.vertical=!0),o.horizontal===!0&&o.vertical===!0&&(o.all=!0),o)}function Ge(e,o){return o.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof o.handler=="function"&&e.target.nodeName.toUpperCase()!=="INPUT"&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(o.uid)===-1)}function co(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),Pt.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function Le(e,o,n){const l=Se(e);let t,i=l.left-o.event.x,s=l.top-o.event.y,f=Math.abs(i),d=Math.abs(s);const c=o.direction;c.horizontal===!0&&c.vertical!==!0?t=i<0?"left":"right":c.horizontal!==!0&&c.vertical===!0?t=s<0?"up":"down":c.up===!0&&s<0?(t="up",f>d&&(c.left===!0&&i<0?t="left":c.right===!0&&i>0&&(t="right"))):c.down===!0&&s>0?(t="down",f>d&&(c.left===!0&&i<0?t="left":c.right===!0&&i>0&&(t="right"))):c.left===!0&&i<0?(t="left",f<d&&(c.up===!0&&s<0?t="up":c.down===!0&&s>0&&(t="down"))):c.right===!0&&i>0&&(t="right",f<d&&(c.up===!0&&s<0?t="up":c.down===!0&&s>0&&(t="down")));let a=!1;if(t===void 0&&n===!1){if(o.event.isFirst===!0||o.event.lastDir===void 0)return{};t=o.event.lastDir,a=!0,t==="left"||t==="right"?(l.left-=i,f=0,i=0):(l.top-=s,d=0,s=0)}return{synthetic:a,payload:{evt:e,touch:o.event.mouse!==!0,mouse:o.event.mouse===!0,position:l,direction:t,isFirst:o.event.isFirst,isFinal:n===!0,duration:Date.now()-o.event.time,distance:{x:f,y:d},offset:{x:i,y:s},delta:{x:l.left-o.event.lastX,y:l.top-o.event.lastY}}}}let fo=0;var xe=Et({name:"touch-pan",beforeMount(e,{value:o,modifiers:n}){if(n.mouse!==!0&&V.has.touch!==!0)return;function l(i,s){n.mouse===!0&&s===!0?Pe(i):(n.stop===!0&&ye(i),n.prevent===!0&&Ne(i))}const t={uid:"qvtp_"+fo++,handler:o,modifiers:n,direction:Ke(n),noop:ze,mouseStart(i){Ge(i,t)&&Vt(i)&&(oe(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(i,!0))},touchStart(i){if(Ge(i,t)){const s=i.target;oe(t,"temp",[[s,"touchmove","move","notPassiveCapture"],[s,"touchcancel","end","passiveCapture"],[s,"touchend","end","passiveCapture"]]),t.start(i)}},start(i,s){if(V.is.firefox===!0&&be(e,!0),t.lastEvt=i,s===!0||n.stop===!0){if(t.direction.all!==!0&&(s!==!0||t.modifiers.mouseAllDir!==!0&&t.modifiers.mousealldir!==!0)){const c=i.type.indexOf("mouse")>-1?new MouseEvent(i.type,i):new TouchEvent(i.type,i);i.defaultPrevented===!0&&Ne(c),i.cancelBubble===!0&&ye(c),Object.assign(c,{qKeyEvent:i.qKeyEvent,qClickOutside:i.qClickOutside,qAnchorHandled:i.qAnchorHandled,qClonedBy:i.qClonedBy===void 0?[t.uid]:i.qClonedBy.concat(t.uid)}),t.initialEvent={target:i.target,event:c}}ye(i)}const{left:f,top:d}=Se(i);t.event={x:f,y:d,time:Date.now(),mouse:s===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:f,lastY:d}},move(i){if(t.event===void 0)return;const s=Se(i),f=s.left-t.event.x,d=s.top-t.event.y;if(f===0&&d===0)return;t.lastEvt=i;const c=t.event.mouse===!0,a=()=>{l(i,c);let m;n.preserveCursor!==!0&&n.preservecursor!==!0&&(m=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),c===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),co(),t.styleCleanup=h=>{if(t.styleCleanup=void 0,m!==void 0&&(document.documentElement.style.cursor=m),document.body.classList.remove("non-selectable"),c===!0){const T=()=>{document.body.classList.remove("no-pointer-events--children")};h!==void 0?setTimeout(()=>{T(),h()},50):T()}else h!==void 0&&h()}};if(t.event.detected===!0){t.event.isFirst!==!0&&l(i,t.event.mouse);const{payload:m,synthetic:h}=Le(i,t,!1);m!==void 0&&(t.handler(m)===!1?t.end(i):(t.styleCleanup===void 0&&t.event.isFirst===!0&&a(),t.event.lastX=m.position.left,t.event.lastY=m.position.top,t.event.lastDir=h===!0?void 0:m.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||c===!0&&(t.modifiers.mouseAllDir===!0||t.modifiers.mousealldir===!0)){a(),t.event.detected=!0,t.move(i);return}const w=Math.abs(f),q=Math.abs(d);w!==q&&(t.direction.horizontal===!0&&w>q||t.direction.vertical===!0&&w<q||t.direction.up===!0&&w<q&&d<0||t.direction.down===!0&&w<q&&d>0||t.direction.left===!0&&w>q&&f<0||t.direction.right===!0&&w>q&&f>0?(t.event.detected=!0,t.move(i)):t.end(i,!0))},end(i,s){if(t.event!==void 0){if(ge(t,"temp"),V.is.firefox===!0&&be(e,!1),s===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(Le(i===void 0?t.lastEvt:i,t).payload);const{payload:f}=Le(i===void 0?t.lastEvt:i,t,!0),d=()=>{t.handler(f)};t.styleCleanup!==void 0?t.styleCleanup(d):d()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};if(e.__qtouchpan=t,n.mouse===!0){const i=n.mouseCapture===!0||n.mousecapture===!0?"Capture":"";oe(t,"main",[[e,"mousedown","mouseStart",`passive${i}`]])}V.has.touch===!0&&oe(t,"main",[[e,"touchstart","touchStart",`passive${n.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,o){const n=e.__qtouchpan;n!==void 0&&(o.oldValue!==o.value&&(typeof value!="function"&&n.end(),n.handler=o.value),n.direction=Ke(o.modifiers))},beforeUnmount(e){const o=e.__qtouchpan;o!==void 0&&(o.event!==void 0&&o.end(),ge(o,"main"),ge(o,"temp"),V.is.firefox===!0&&be(e,!1),o.styleCleanup!==void 0&&o.styleCleanup(),delete e.__qtouchpan)}});function ae(e,o,n){return n<=o?o:Math.min(n,Math.max(o,e))}const Je=150;var vo=P({name:"QDrawer",inheritAttrs:!1,props:{...Jt,...Ve,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...Zt,"onLayout","miniState"],setup(e,{slots:o,emit:n,attrs:l}){const t=H(),{proxy:{$q:i}}=t,s=Oe(e,i),{preventBodyScroll:f}=ro(),{registerTimeout:d,removeTimeout:c}=uo(),a=$e(se,Q);if(a===Q)return console.error("QDrawer needs to be child of QLayout"),Q;let w,q,m;const h=S(e.behavior==="mobile"||e.behavior!=="desktop"&&a.totalWidth.value<=e.breakpoint),T=v(()=>e.mini===!0&&h.value!==!0),L=v(()=>T.value===!0?e.miniWidth:e.width),g=S(e.showIfAbove===!0&&h.value===!1?!0:e.modelValue===!0),u=v(()=>e.persistent!==!0&&(h.value===!0||ut.value===!0));function p(r,y){if(W(),r!==!1&&a.animate(),$(0),h.value===!0){const _=a.instances[ee.value];_!==void 0&&_.belowBreakpoint===!0&&_.hide(!1),D(1),a.isContainer.value!==!0&&f(!0)}else D(0),r!==!1&&me(!1);d(()=>{r!==!1&&me(!0),y!==!0&&n("show",r)},Je)}function b(r,y){K(),r!==!1&&a.animate(),D(0),$(I.value*L.value),he(),y!==!0?d(()=>{n("hide",r)},Je):c()}const{show:x,hide:B}=eo({showing:g,hideOnRouteChange:u,handleShow:p,handleHide:b}),{addToHistory:W,removeFromHistory:K}=Gt(g,B,u),F={belowBreakpoint:h,hide:B},M=v(()=>e.side==="right"),I=v(()=>(i.lang.rtl===!0?-1:1)*(M.value===!0?1:-1)),Me=S(0),X=S(!1),ce=S(!1),Qe=S(L.value*I.value),ee=v(()=>M.value===!0?"left":"right"),de=v(()=>g.value===!0&&h.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:L.value:0),fe=v(()=>e.overlay===!0||e.miniToOverlay===!0||a.view.value.indexOf(M.value?"R":"L")>-1||i.platform.is.ios===!0&&a.isContainer.value===!0),G=v(()=>e.overlay===!1&&g.value===!0&&h.value===!1),ut=v(()=>e.overlay===!0&&g.value===!0&&h.value===!1),st=v(()=>"fullscreen q-drawer__backdrop"+(g.value===!1&&X.value===!1?" hidden":"")),ct=v(()=>({backgroundColor:`rgba(0,0,0,${Me.value*.4})`})),De=v(()=>M.value===!0?a.rows.value.top[2]==="r":a.rows.value.top[0]==="l"),dt=v(()=>M.value===!0?a.rows.value.bottom[2]==="r":a.rows.value.bottom[0]==="l"),ft=v(()=>{const r={};return a.header.space===!0&&De.value===!1&&(fe.value===!0?r.top=`${a.header.offset}px`:a.header.space===!0&&(r.top=`${a.header.size}px`)),a.footer.space===!0&&dt.value===!1&&(fe.value===!0?r.bottom=`${a.footer.offset}px`:a.footer.space===!0&&(r.bottom=`${a.footer.size}px`)),r}),vt=v(()=>{const r={width:`${L.value}px`,transform:`translateX(${Qe.value}px)`};return h.value===!0?r:Object.assign(r,ft.value)}),mt=v(()=>"q-drawer__content fit "+(a.isContainer.value!==!0?"scroll":"overflow-auto")),ht=v(()=>`q-drawer q-drawer--${e.side}`+(ce.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(s.value===!0?" q-drawer--dark q-dark":"")+(X.value===!0?" no-transition":g.value===!0?"":" q-layout--prevent-focus")+(h.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${T.value===!0?"mini":"standard"}`+(fe.value===!0||G.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(De.value===!0?" q-drawer--top-padding":""))),pt=v(()=>{const r=i.lang.rtl===!0?e.side:ee.value;return[[xe,wt,void 0,{[r]:!0,mouse:!0}]]}),bt=v(()=>{const r=i.lang.rtl===!0?ee.value:e.side;return[[xe,Re,void 0,{[r]:!0,mouse:!0}]]}),yt=v(()=>{const r=i.lang.rtl===!0?ee.value:e.side;return[[xe,Re,void 0,{[r]:!0,mouse:!0,mouseAllDir:!0}]]});function ve(){qt(h,e.behavior==="mobile"||e.behavior!=="desktop"&&a.totalWidth.value<=e.breakpoint)}k(h,r=>{r===!0?(w=g.value,g.value===!0&&B(!1)):e.overlay===!1&&e.behavior!=="mobile"&&w!==!1&&(g.value===!0?($(0),D(0),he()):x(!1))}),k(()=>e.side,(r,y)=>{a.instances[y]===F&&(a.instances[y]=void 0,a[y].space=!1,a[y].offset=0),a.instances[r]=F,a[r].size=L.value,a[r].space=G.value,a[r].offset=de.value}),k(a.totalWidth,()=>{(a.isContainer.value===!0||document.qScrollPrevented!==!0)&&ve()}),k(()=>e.behavior+e.breakpoint,ve),k(a.isContainer,r=>{g.value===!0&&f(r!==!0),r===!0&&ve()}),k(a.scrollbarWidth,()=>{$(g.value===!0?0:void 0)}),k(de,r=>{R("offset",r)}),k(G,r=>{n("onLayout",r),R("space",r)}),k(M,()=>{$()}),k(L,r=>{$(),pe(e.miniToOverlay,r)}),k(()=>e.miniToOverlay,r=>{pe(r,L.value)}),k(()=>i.lang.rtl,()=>{$()}),k(()=>e.mini,()=>{e.modelValue===!0&&(gt(),a.animate())}),k(T,r=>{n("miniState",r)});function $(r){r===void 0?U(()=>{r=g.value===!0?0:L.value,$(I.value*r)}):(a.isContainer.value===!0&&M.value===!0&&(h.value===!0||Math.abs(r)===L.value)&&(r+=I.value*a.scrollbarWidth.value),Qe.value=r)}function D(r){Me.value=r}function me(r){const y=r===!0?"remove":a.isContainer.value!==!0?"add":"";y!==""&&document.body.classList[y]("q-body--drawer-toggle")}function gt(){clearTimeout(q),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),ce.value=!0,q=setTimeout(()=>{ce.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function wt(r){if(g.value!==!1)return;const y=L.value,_=ae(r.distance.x,0,y);if(r.isFinal===!0){_>=Math.min(75,y)===!0?x():(a.animate(),D(0),$(I.value*y)),X.value=!1;return}$((i.lang.rtl===!0?M.value!==!0:M.value)?Math.max(y-_,0):Math.min(0,_-y)),D(ae(_/y,0,1)),r.isFirst===!0&&(X.value=!0)}function Re(r){if(g.value!==!0)return;const y=L.value,_=r.direction===e.side,te=(i.lang.rtl===!0?_!==!0:_)?ae(r.distance.x,0,y):0;if(r.isFinal===!0){Math.abs(te)<Math.min(75,y)===!0?(a.animate(),D(1),$(0)):B(),X.value=!1;return}$(I.value*te),D(ae(1-te/y,0,1)),r.isFirst===!0&&(X.value=!0)}function he(){f(!1),me(!0)}function R(r,y){a.update(e.side,r,y)}function qt(r,y){r.value!==y&&(r.value=y)}function pe(r,y){R("size",r===!0?e.miniWidth:y)}return a.instances[e.side]=F,pe(e.miniToOverlay,L.value),R("space",G.value),R("offset",de.value),e.showIfAbove===!0&&e.modelValue!==!0&&g.value===!0&&e["onUpdate:modelValue"]!==void 0&&n("update:modelValue",!0),j(()=>{n("onLayout",G.value),n("miniState",T.value),w=e.showIfAbove===!0;const r=()=>{(g.value===!0?p:b)(!1,!0)};if(a.totalWidth.value!==0){U(r);return}m=k(a.totalWidth,()=>{m(),m=void 0,g.value===!1&&e.showIfAbove===!0&&h.value===!1?x(!1):r()})}),A(()=>{m!==void 0&&m(),clearTimeout(q),g.value===!0&&he(),a.instances[e.side]===F&&(a.instances[e.side]=void 0,R("size",0),R("offset",0),R("space",!1))}),()=>{const r=[];h.value===!0&&(e.noSwipeOpen===!1&&r.push(Ot(C("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),pt.value)),r.push(Fe("div",{ref:"backdrop",class:st.value,style:ct.value,"aria-hidden":"true",onClick:B},void 0,"backdrop",e.noSwipeBackdrop!==!0&&g.value===!0,()=>yt.value)));const y=T.value===!0&&o.mini!==void 0,_=[C("div",{...l,key:""+y,class:[mt.value,l.class]},y===!0?o.mini():N(o.default))];return e.elevated===!0&&g.value===!0&&_.push(C("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),r.push(Fe("aside",{ref:"content",class:ht.value,style:vt.value},_,"contentclose",e.noSwipeClose!==!0&&h.value===!0,()=>bt.value)),C("div",{class:"q-drawer-container"},r)}}}),mo=P({name:"QPageContainer",setup(e,{slots:o}){const{proxy:{$q:n}}=H(),l=$e(se,Q);if(l===Q)return console.error("QPageContainer needs to be child of QLayout"),Q;nt(Ht,!0);const t=v(()=>{const i={};return l.header.space===!0&&(i.paddingTop=`${l.header.size}px`),l.right.space===!0&&(i[`padding${n.lang.rtl===!0?"Left":"Right"}`]=`${l.right.size}px`),l.footer.space===!0&&(i.paddingBottom=`${l.footer.size}px`),l.left.space===!0&&(i[`padding${n.lang.rtl===!0?"Right":"Left"}`]=`${l.left.size}px`),i});return()=>C("div",{class:"q-page-container",style:t.value},N(o.default))}});const{passive:Ze}=O,ho=["both","horizontal","vertical"];var po=P({name:"QScrollObserver",props:{axis:{type:String,validator:e=>ho.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:o}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let l=null,t,i;k(()=>e.scrollTarget,()=>{d(),f()});function s(){l!==null&&l();const w=Math.max(0,at(t)),q=rt(t),m={top:w-n.position.top,left:q-n.position.left};if(e.axis==="vertical"&&m.top===0||e.axis==="horizontal"&&m.left===0)return;const h=Math.abs(m.top)>=Math.abs(m.left)?m.top<0?"up":"down":m.left<0?"left":"right";n.position={top:w,left:q},n.directionChanged=n.direction!==h,n.delta=m,n.directionChanged===!0&&(n.direction=h,n.inflectionPoint=n.position),o("scroll",{...n})}function f(){t=oo(i,e.scrollTarget),t.addEventListener("scroll",c,Ze),c(!0)}function d(){t!==void 0&&(t.removeEventListener("scroll",c,Ze),t=void 0)}function c(w){if(w===!0||e.debounce===0||e.debounce==="0")s();else if(l===null){const[q,m]=e.debounce?[setTimeout(s,e.debounce),clearTimeout]:[requestAnimationFrame(s),cancelAnimationFrame];l=()=>{m(q),l=null}}}const{proxy:a}=H();return k(()=>a.$q.lang.rtl,s),j(()=>{i=a.$el.parentNode,f()}),A(()=>{l!==null&&l(),d()}),Object.assign(a,{trigger:c,getPosition:()=>n}),ze}}),bo=P({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:o,emit:n}){const{proxy:{$q:l}}=H(),t=S(null),i=S(l.screen.height),s=S(e.container===!0?0:l.screen.width),f=S({position:0,direction:"down",inflectionPoint:0}),d=S(0),c=S(ot.value===!0?0:we()),a=v(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),w=v(()=>e.container===!1?{minHeight:l.screen.height+"px"}:null),q=v(()=>c.value!==0?{[l.lang.rtl===!0?"left":"right"]:`${c.value}px`}:null),m=v(()=>c.value!==0?{[l.lang.rtl===!0?"right":"left"]:0,[l.lang.rtl===!0?"left":"right"]:`-${c.value}px`,width:`calc(100% + ${c.value}px)`}:null);function h(b){if(e.container===!0||document.qScrollPrevented!==!0){const x={position:b.position.top,direction:b.direction,directionChanged:b.directionChanged,inflectionPoint:b.inflectionPoint.top,delta:b.delta.top};f.value=x,e.onScroll!==void 0&&n("scroll",x)}}function T(b){const{height:x,width:B}=b;let W=!1;i.value!==x&&(W=!0,i.value=x,e.onScrollHeight!==void 0&&n("scrollHeight",x),g()),s.value!==B&&(W=!0,s.value=B),W===!0&&e.onResize!==void 0&&n("resize",b)}function L({height:b}){d.value!==b&&(d.value=b,g())}function g(){if(e.container===!0){const b=i.value>d.value?we():0;c.value!==b&&(c.value=b)}}let u;const p={instances:{},view:v(()=>e.view),isContainer:v(()=>e.container),rootRef:t,height:i,containerHeight:d,scrollbarWidth:c,totalWidth:v(()=>s.value+c.value),rows:v(()=>{const b=e.view.toLowerCase().split(" ");return{top:b[0].split(""),middle:b[1].split(""),bottom:b[2].split("")}}),header:ne({size:0,offset:0,space:!1}),right:ne({size:300,offset:0,space:!1}),footer:ne({size:0,offset:0,space:!1}),left:ne({size:300,offset:0,space:!1}),scroll:f,animate(){u!==void 0?clearTimeout(u):document.body.classList.add("q-body--layout-animate"),u=setTimeout(()=>{document.body.classList.remove("q-body--layout-animate"),u=void 0},155)},update(b,x,B){p[b][x]=B}};if(nt(se,p),we()>0){let B=function(){b=null,x.classList.remove("hide-scrollbar")},W=function(){if(b===null){if(x.scrollHeight>l.screen.height)return;x.classList.add("hide-scrollbar")}else clearTimeout(b);b=setTimeout(B,300)},K=function(F){b!==null&&F==="remove"&&(clearTimeout(b),B()),window[`${F}EventListener`]("resize",W)},b=null;const x=document.body;k(()=>e.container!==!0?"add":"remove",K),e.container!==!0&&K("add"),Mt(()=>{K("remove")})}return()=>{const b=Bt(o.default,[C(po,{onScroll:h}),C(Ee,{onResize:T})]),x=C("div",{class:a.value,style:w.value,ref:e.container===!0?void 0:t,tabindex:-1},b);return e.container===!0?C("div",{class:"q-layout-container overflow-hidden",ref:t},[C(Ee,{onResize:L}),C("div",{class:"absolute-full",style:q.value},[C("div",{class:"scroll",style:m.value},[x])])]):x}}}),et=P({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:o}){const n=v(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>C("div",{class:n.value},N(o.default))}}),yo=P({name:"QItem",props:{...Ve,...xt,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:o,emit:n}){const{proxy:{$q:l}}=H(),t=Oe(e,l),{hasLink:i,linkAttrs:s,linkClass:f,linkTag:d,navigateOnClick:c}=St(),a=S(null),w=S(null),q=v(()=>e.clickable===!0||i.value===!0||e.tag==="label"),m=v(()=>e.disable!==!0&&q.value===!0),h=v(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(t.value===!0?" q-item--dark":"")+(i.value===!0&&e.active===null?f.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(m.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),T=v(()=>{if(e.insetLevel===void 0)return null;const p=l.lang.rtl===!0?"Right":"Left";return{["padding"+p]:16+e.insetLevel*56+"px"}});function L(p){m.value===!0&&(w.value!==null&&(p.qKeyEvent!==!0&&document.activeElement===a.value?w.value.focus():document.activeElement===w.value&&a.value.focus()),c(p))}function g(p){if(m.value===!0&&Qt(p,13)===!0){Pe(p),p.qKeyEvent=!0;const b=new MouseEvent("click",p);b.qKeyEvent=!0,a.value.dispatchEvent(b)}n("keyup",p)}function u(){const p=tt(o.default,[]);return m.value===!0&&p.unshift(C("div",{class:"q-focus-helper",tabindex:-1,ref:w})),p}return()=>{const p={ref:a,class:h.value,style:T.value,role:"listitem",onClick:L,onKeyup:g};return m.value===!0?(p.tabindex=e.tabindex||"0",Object.assign(p,s.value)):q.value===!0&&(p["aria-disabled"]="true"),C(d.value,p,u())}}});const go=it({__name:"EssentialLink",props:{title:null,caption:{default:""},link:{default:"#"},icon:{default:""}},setup(e){return(o,n)=>(re(),Te(yo,{clickable:"",tag:"a",target:"_blank",href:e.link},{default:z(()=>[e.icon?(re(),Te(et,{key:0,avatar:""},{default:z(()=>[E(Tt,{name:e.icon},null,8,["name"])]),_:1})):Dt("",!0),E(et,null,{default:z(()=>[E(Be,null,{default:z(()=>[ue(_e(e.title),1)]),_:1}),E(Be,{caption:""},{default:z(()=>[ue(_e(e.caption),1)]),_:1})]),_:1})]),_:1},8,["href"]))}}),Lo=it({__name:"MainLayout",setup(e){const o=[{title:"Docs",caption:"quasar.dev",icon:"school",link:"https://quasar.dev"},{title:"Github",caption:"github.com/quasarframework",icon:"code",link:"https://github.com/quasarframework"},{title:"Discord Chat Channel",caption:"chat.quasar.dev",icon:"chat",link:"https://chat.quasar.dev"},{title:"Forum",caption:"forum.quasar.dev",icon:"record_voice_over",link:"https://forum.quasar.dev"},{title:"Twitter",caption:"@quasarframework",icon:"rss_feed",link:"https://twitter.quasar.dev"},{title:"Facebook",caption:"@QuasarFramework",icon:"public",link:"https://facebook.quasar.dev"},{title:"Quasar Awesome",caption:"Community Quasar projects",icon:"favorite",link:"https://awesome.quasar.dev"}],n=S(!1);function l(){n.value=!n.value}return(t,i)=>{const s=Rt("router-view");return re(),Te(bo,{view:"lHh Lpr lFf"},{default:z(()=>[E(Ut,{elevated:""},{default:z(()=>[E(Yt,null,{default:z(()=>[E(_t,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:l}),E(Xt,null,{default:z(()=>[ue(" Quasar App ")]),_:1}),Wt("div",null,"Quasar v"+_e(t.$q.version),1)]),_:1})]),_:1}),E(vo,{modelValue:n.value,"onUpdate:modelValue":i[0]||(i[0]=f=>n.value=f),"show-if-above":"",bordered:""},{default:z(()=>[E(Kt,null,{default:z(()=>[E(Be,{header:""},{default:z(()=>[ue(" Essential Links ")]),_:1}),(re(),Ft(Nt,null,At(o,f=>E(go,It({key:f.title},f),null,16)),64))]),_:1})]),_:1},8,["modelValue"]),E(mo,null,{default:z(()=>[E(s)]),_:1})]),_:1})}}});export{Lo as default};