(this.webpackJsonp13rms=this.webpackJsonp13rms||[]).push([[54],{458:function(e,t,n){"use strict";n.d(t,"a",(function(){return q}));var r,o=n(7),a=n(1),c=n.n(a),i=n(22),u=n(9),l=n(53),d=n(12),f=n(52),s=n(87),b=n(23),p=n(46),v=n(15),O=n(159);function m(e,t,n){void 0===t&&(t=r.All);var c=void 0===n?{}:n,i=c.initialFocus,u=c.containers,l=Object(a.useRef)("undefined"!==typeof window?document.activeElement:null),f=Object(a.useRef)(null),s=Object(O.a)(),b=Boolean(t&r.RestoreFocus),m=Boolean(t&r.InitialFocus);Object(a.useEffect)((function(){b&&(l.current=document.activeElement)}),[b]),Object(a.useEffect)((function(){if(b)return function(){Object(v.d)(l.current),l.current=null}}),[b]),Object(a.useEffect)((function(){if(m&&e.current){var t=document.activeElement;if(null==i?void 0:i.current){if((null==i?void 0:i.current)===t)return void(f.current=t)}else if(e.current.contains(t))return void(f.current=t);if(null==i?void 0:i.current)Object(v.d)(i.current);else if(Object(v.e)(e.current,v.a.First)===v.b.Error)throw new Error("There are no focusable elements inside the <FocusTrap />");f.current=document.activeElement}}),[e,i,m]),Object(p.a)("keydown",(function(n){t&r.TabLock&&e.current&&n.key===d.a.Tab&&(n.preventDefault(),Object(v.e)(e.current,(n.shiftKey?v.a.Previous:v.a.Next)|v.a.WrapAround)===v.b.Success&&(f.current=document.activeElement))})),Object(p.a)("focus",(function(n){if(t&r.FocusLock){var a=new Set(null==u?void 0:u.current);if(a.add(e),a.size){var c=f.current;if(c&&s.current){var i=n.target;i&&i instanceof HTMLElement?!function(e,t){for(var n,r=Object(o.a)(e);!(n=r()).done;){var a;if(null==(a=n.value.current)?void 0:a.contains(t))return!0}return!1}(a,i)?(n.preventDefault(),n.stopPropagation(),Object(v.d)(c)):(f.current=i,Object(v.d)(i)):Object(v.d)(f.current)}}}}),!0)}!function(e){e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All"}(r||(r={}));var j=n(16),g=new Set,h=new Map;function C(e){e.setAttribute("aria-hidden","true"),e.inert=!0}function E(e){var t=h.get(e);t&&(null===t["aria-hidden"]?e.removeAttribute("aria-hidden"):e.setAttribute("aria-hidden",t["aria-hidden"]),e.inert=t.inert)}var y=Object(a.createContext)(!1);function w(e){return c.a.createElement(y.Provider,{value:e.force},e.children)}var R=n(64);function T(){var e=Object(a.useContext)(y),t=Object(a.useContext)(H),n=Object(a.useState)((function(){if(!e&&null!==t)return null;if("undefined"===typeof window)return null;var n=document.getElementById("headlessui-portal-root");if(n)return n;var r=document.createElement("div");return r.setAttribute("id","headlessui-portal-root"),document.body.appendChild(r)})),r=n[0],o=n[1];return Object(a.useEffect)((function(){e||null!==t&&o(t.current)}),[t,o,e]),r}var k=a.Fragment;function S(e){var t=e,n=T(),r=Object(a.useState)((function(){return"undefined"===typeof window?null:document.createElement("div")}))[0],o=Object(s.a)();return Object(j.a)((function(){if(n&&r)return n.appendChild(r),function(){var e;n&&(r&&(n.removeChild(r),n.childNodes.length<=0&&(null==(e=n.parentElement)||e.removeChild(n))))}}),[n,r]),o&&n&&r?Object(R.createPortal)(Object(u.d)({props:t,defaultTag:k,name:"Portal"}),r):null}var D=a.Fragment,H=Object(a.createContext)(null);S.Group=function(e){var t=e.target,n=Object(o.c)(e,["target"]);return c.a.createElement(H.Provider,{value:t},Object(u.d)({props:n,defaultTag:D,name:"Popover.Group"}))};var A,F,x,I,M=n(121),P=n(20),N=Object(a.createContext)((function(){}));function V(e){var t=e.children,n=e.onUpdate,r=e.type,o=e.element,i=Object(a.useContext)(N),u=Object(a.useCallback)((function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];null==n||n.apply(void 0,t),i.apply(void 0,t)}),[i,n]);return Object(j.a)((function(){return u(A.Add,r,o),function(){return u(A.Remove,r,o)}}),[u,r,o]),c.a.createElement(N.Provider,{value:u},t)}N.displayName="StackContext",function(e){e[e.Add=0]="Add",e[e.Remove=1]="Remove"}(A||(A={})),function(e){e[e.Open=0]="Open",e[e.Closed=1]="Closed"}(x||(x={})),function(e){e[e.SetTitleId=0]="SetTitleId"}(I||(I={}));var L=((F={})[I.SetTitleId]=function(e,t){return e.titleId===t.id?e:Object(o.b)({},e,{titleId:t.id})},F),Z=Object(a.createContext)(null);function B(e){var t=Object(a.useContext)(Z);if(null===t){var n=new Error("<"+e+" /> is missing a parent <"+q.displayName+" /> component.");throw Error.captureStackTrace&&Error.captureStackTrace(n,B),n}return t}function Y(e,t){return Object(i.a)(t.type,L,e,t)}Z.displayName="DialogContext";var z=u.a.RenderStrategy|u.a.Static,G=Object(u.c)((function(e,t){var n,f=e.open,v=e.onClose,O=e.initialFocus,y=Object(o.c)(e,["open","onClose","initialFocus"]),R=Object(a.useState)(0),T=R[0],k=R[1],D=Object(P.c)();void 0===f&&null!==D&&(f=Object(i.a)(D,((n={})[P.b.Open]=!0,n[P.b.Closed]=!1,n)));var H=Object(a.useRef)(new Set),F=Object(a.useRef)(null),N=Object(l.a)(F,t),L=e.hasOwnProperty("open")||null!==D,B=e.hasOwnProperty("onClose");if(!L&&!B)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!L)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!B)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if("boolean"!==typeof f)throw new Error("You provided an `open` prop to the `Dialog`, but the value is not a boolean. Received: "+f);if("function"!==typeof v)throw new Error("You provided an `onClose` prop to the `Dialog`, but the value is not a function. Received: "+v);var G=f?x.Open:x.Closed,W=null!==D?D===P.b.Open:G===x.Open,q=Object(a.useReducer)(Y,{titleId:null,descriptionId:null}),J=q[0],K=q[1],U=Object(a.useCallback)((function(){return v(!1)}),[v]),Q=Object(a.useCallback)((function(e){return K({type:I.SetTitleId,id:e})}),[K]),X=Object(s.a)()&&G===x.Open,$=T>1,_=null!==Object(a.useContext)(Z),ee=$?"parent":"leaf";m(F,X?Object(i.a)(ee,{parent:r.RestoreFocus,leaf:r.All}):r.None,{initialFocus:O,containers:H}),function(e,t){void 0===t&&(t=!0),Object(j.a)((function(){if(t&&e.current){var n=e.current;g.add(n);for(var r,a=Object(o.a)(h.keys());!(r=a()).done;){var c=r.value;c.contains(n)&&(E(c),h.delete(c))}return document.querySelectorAll("body > *").forEach((function(e){if(e instanceof HTMLElement){for(var t,n=Object(o.a)(g);!(t=n()).done;){var r=t.value;if(e.contains(r))return}1===g.size&&(h.set(e,{"aria-hidden":e.getAttribute("aria-hidden"),inert:e.inert}),C(e))}})),function(){if(g.delete(n),g.size>0)document.querySelectorAll("body > *").forEach((function(e){if(e instanceof HTMLElement&&!h.has(e)){for(var t,n=Object(o.a)(g);!(t=n()).done;){var r=t.value;if(e.contains(r))return}h.set(e,{"aria-hidden":e.getAttribute("aria-hidden"),inert:e.inert}),C(e)}}));else for(var e,t=Object(o.a)(h.keys());!(e=t()).done;){var r=e.value;E(r),h.delete(r)}}}}),[t])}(F,!!$&&X),Object(p.a)("mousedown",(function(e){var t,n=e.target;G===x.Open&&($||(null==(t=F.current)?void 0:t.contains(n))||U())})),Object(a.useEffect)((function(){if(G===x.Open&&!_){var e=document.documentElement.style.overflow,t=document.documentElement.style.paddingRight,n=window.innerWidth-document.documentElement.clientWidth;return document.documentElement.style.overflow="hidden",document.documentElement.style.paddingRight=n+"px",function(){document.documentElement.style.overflow=e,document.documentElement.style.paddingRight=t}}}),[G,_]),Object(a.useEffect)((function(){if(G===x.Open&&F.current){var e=new IntersectionObserver((function(e){for(var t,n=Object(o.a)(e);!(t=n()).done;){var r=t.value;0===r.boundingClientRect.x&&0===r.boundingClientRect.y&&0===r.boundingClientRect.width&&0===r.boundingClientRect.height&&U()}}));return e.observe(F.current),function(){return e.disconnect()}}}),[G,F,U]);var te=Object(M.b)(),ne=te[0],re=te[1],oe="headlessui-dialog-"+Object(b.a)(),ae=Object(a.useMemo)((function(){return[{dialogState:G,close:U,setTitleId:Q},J]}),[G,J,U,Q]),ce=Object(a.useMemo)((function(){return{open:G===x.Open}}),[G]),ie={ref:N,id:oe,role:"dialog","aria-modal":G===x.Open||void 0,"aria-labelledby":J.titleId,"aria-describedby":ne,onClick:function(e){e.stopPropagation()},onKeyDown:function(e){e.key===d.a.Escape&&G===x.Open&&($||(e.preventDefault(),e.stopPropagation(),U()))}},ue=y;return c.a.createElement(V,{type:"Dialog",element:F,onUpdate:Object(a.useCallback)((function(e,t,n){var r;"Dialog"===t&&Object(i.a)(e,((r={})[A.Add]=function(){H.current.add(n),k((function(e){return e+1}))},r[A.Remove]=function(){H.current.add(n),k((function(e){return e-1}))},r))}),[])},c.a.createElement(w,{force:!0},c.a.createElement(S,null,c.a.createElement(Z.Provider,{value:ae},c.a.createElement(S.Group,{target:F},c.a.createElement(w,{force:!1},c.a.createElement(re,{slot:ce,name:"Dialog.Description"},Object(u.d)({props:Object(o.b)({},ue,ie),slot:ce,defaultTag:"div",features:z,visible:W,name:"Dialog"}))))))))})),W=Object(u.c)((function e(t,n){var r=B([q.displayName,e.name].join("."))[0],c=r.dialogState,i=r.close,d=Object(l.a)(n),s="headlessui-dialog-overlay-"+Object(b.a)(),p=Object(a.useCallback)((function(e){if(Object(f.a)(e.currentTarget))return e.preventDefault();e.preventDefault(),e.stopPropagation(),i()}),[i]),v=Object(a.useMemo)((function(){return{open:c===x.Open}}),[c]),O={ref:d,id:s,"aria-hidden":!0,onClick:p},m=t;return Object(u.d)({props:Object(o.b)({},m,O),slot:v,defaultTag:"div",name:"Dialog.Overlay"})}));var q=Object.assign(G,{Overlay:W,Title:function e(t){var n=B([q.displayName,e.name].join("."))[0],r=n.dialogState,c=n.setTitleId,i="headlessui-dialog-title-"+Object(b.a)();Object(a.useEffect)((function(){return c(i),function(){return c(null)}}),[i,c]);var l=Object(a.useMemo)((function(){return{open:r===x.Open}}),[r]),d={id:i},f=t;return Object(u.d)({props:Object(o.b)({},f,d),slot:l,defaultTag:"h2",name:"Dialog.Title"})},Description:M.a})},480:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return a}));var r=n(0);function o(e){return Object(r.a)({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{d:"M2 8C2 7.44772 2.44772 7 3 7H21C21.5523 7 22 7.44772 22 8C22 8.55228 21.5523 9 21 9H3C2.44772 9 2 8.55228 2 8Z",fill:"currentColor"}},{tag:"path",attr:{d:"M2 12C2 11.4477 2.44772 11 3 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H3C2.44772 13 2 12.5523 2 12Z",fill:"currentColor"}},{tag:"path",attr:{d:"M3 15C2.44772 15 2 15.4477 2 16C2 16.5523 2.44772 17 3 17H15C15.5523 17 16 16.5523 16 16C16 15.4477 15.5523 15 15 15H3Z",fill:"currentColor"}}]})(e)}function a(e){return Object(r.a)({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M19 4H5C4.44771 4 4 4.44772 4 5V19C4 19.5523 4.44772 20 5 20H19C19.5523 20 20 19.5523 20 19V5C20 4.44771 19.5523 4 19 4ZM5 2C3.34315 2 2 3.34315 2 5V19C2 20.6569 3.34315 22 5 22H19C20.6569 22 22 20.6569 22 19V5C22 3.34315 20.6569 2 19 2H5Z",fill:"currentColor"}},{tag:"path",attr:{d:"M11 7H13V17H11V7Z",fill:"currentColor"}},{tag:"path",attr:{d:"M15 13H17V17H15V13Z",fill:"currentColor"}},{tag:"path",attr:{d:"M7 10H9V17H7V10Z",fill:"currentColor"}}]})(e)}}}]);
//# sourceMappingURL=54.5f09be68.chunk.js.map