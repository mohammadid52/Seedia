(this.webpackJsonp13rms=this.webpackJsonp13rms||[]).push([[50],{416:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return s}));var r=n(7),o=n(0),a=n.n(o),c=n(12),i=n(21),u=n(34),l=Object(o.createContext)(null);function d(){var e=Object(o.useContext)(l);if(null===e){var t=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,d),t}return e}function s(){var e=Object(o.useState)([]),t=e[0],n=e[1];return[t.length>0?t.join(" "):void 0,Object(o.useMemo)((function(){return function(e){var t=Object(o.useCallback)((function(e){return n((function(t){return[].concat(t,[e])})),function(){return n((function(t){var n=t.slice(),r=n.indexOf(e);return-1!==r&&n.splice(r,1),n}))}}),[]),r=Object(o.useMemo)((function(){return{register:t,slot:e.slot,name:e.name,props:e.props}}),[t,e.slot,e.name,e.props]);return a.a.createElement(l.Provider,{value:r},e.children)}}),[n])]}function f(e){var t=d(),n="headlessui-description-"+Object(u.a)();Object(i.a)((function(){return t.register(n)}),[n,t.register]);var o=e,a=Object(r.b)({},t.props,{id:n});return Object(c.d)({props:Object(r.b)({},o,a),slot:t.slot||{},defaultTag:"p",name:t.name||"Description"})}},421:function(e,t,n){var r=n(211),o=n(140),a=n(427),c=n(36);e.exports=function(e,t){return(c(e)?r:a)(e,o(t,3))}},427:function(e,t,n){var r=n(212),o=n(142);e.exports=function(e,t){var n=-1,a=o(e)?Array(e.length):[];return r(e,(function(e,r,o){a[++n]=t(e,r,o)})),a}},453:function(e,t,n){"use strict";n.d(t,"a",(function(){return K}));var r,o=n(7),a=n(0),c=n.n(a),i=n(18),u=n(12),l=n(51),d=n(15),s=n(73),f=n(74),b=n(34),p=n(136),v=n(101),O=n(145);function m(e,t,n){void 0===t&&(t=r.All);var c=void 0===n?{}:n,i=c.initialFocus,u=c.containers,l=Object(a.useRef)("undefined"!==typeof window?document.activeElement:null),s=Object(a.useRef)(null),f=Object(O.a)(),b=Boolean(t&r.RestoreFocus),m=Boolean(t&r.InitialFocus);Object(a.useEffect)((function(){b&&(l.current=document.activeElement)}),[b]),Object(a.useEffect)((function(){if(b)return function(){Object(v.d)(l.current),l.current=null}}),[b]),Object(a.useEffect)((function(){if(m&&e.current){var t=document.activeElement;if(null==i?void 0:i.current){if((null==i?void 0:i.current)===t)return void(s.current=t)}else if(e.current.contains(t))return void(s.current=t);if(null==i?void 0:i.current)Object(v.d)(i.current);else if(Object(v.e)(e.current,v.a.First)===v.b.Error)throw new Error("There are no focusable elements inside the <FocusTrap />");s.current=document.activeElement}}),[e,i,m]),Object(p.a)("keydown",(function(n){t&r.TabLock&&e.current&&n.key===d.a.Tab&&(n.preventDefault(),Object(v.e)(e.current,(n.shiftKey?v.a.Previous:v.a.Next)|v.a.WrapAround)===v.b.Success&&(s.current=document.activeElement))})),Object(p.a)("focus",(function(n){if(t&r.FocusLock){var a=new Set(null==u?void 0:u.current);if(a.add(e),a.size){var c=s.current;if(c&&f.current){var i=n.target;i&&i instanceof HTMLElement?!function(e,t){for(var n,r=Object(o.a)(e);!(n=r()).done;){var a;if(null==(a=n.value.current)?void 0:a.contains(t))return!0}return!1}(a,i)?(n.preventDefault(),n.stopPropagation(),Object(v.d)(c)):(s.current=i,Object(v.d)(i)):Object(v.d)(s.current)}}}}),!0)}!function(e){e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All"}(r||(r={}));var j=n(21),h=new Set,g=new Map;function E(e){e.setAttribute("aria-hidden","true"),e.inert=!0}function y(e){var t=g.get(e);t&&(null===t["aria-hidden"]?e.removeAttribute("aria-hidden"):e.setAttribute("aria-hidden",t["aria-hidden"]),e.inert=t.inert)}var w=Object(a.createContext)(!1);function C(e){return c.a.createElement(w.Provider,{value:e.force},e.children)}var T=n(52);function k(){var e=Object(a.useContext)(w),t=Object(a.useContext)(x),n=Object(a.useState)((function(){if(!e&&null!==t)return null;if("undefined"===typeof window)return null;var n=document.getElementById("headlessui-portal-root");if(n)return n;var r=document.createElement("div");return r.setAttribute("id","headlessui-portal-root"),document.body.appendChild(r)})),r=n[0],o=n[1];return Object(a.useEffect)((function(){e||null!==t&&o(t.current)}),[t,o,e]),r}var S=a.Fragment;function R(e){var t=e,n=k(),r=Object(a.useState)((function(){return"undefined"===typeof window?null:document.createElement("div")}))[0],o=Object(f.a)();return Object(j.a)((function(){if(n&&r)return n.appendChild(r),function(){var e;n&&(r&&(n.removeChild(r),n.childNodes.length<=0&&(null==(e=n.parentElement)||e.removeChild(n))))}}),[n,r]),o&&n&&r?Object(T.createPortal)(Object(u.d)({props:t,defaultTag:S,name:"Portal"}),r):null}var D=a.Fragment,x=Object(a.createContext)(null);R.Group=function(e){var t=e.target,n=Object(o.c)(e,["target"]);return c.a.createElement(x.Provider,{value:t},Object(u.d)({props:n,defaultTag:D,name:"Popover.Group"}))};var A,F,I,P,M=n(416),N=n(16),L=Object(a.createContext)((function(){}));function Y(e){var t=e.children,n=e.onUpdate,r=e.type,o=e.element,i=Object(a.useContext)(L),u=Object(a.useCallback)((function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];null==n||n.apply(void 0,t),i.apply(void 0,t)}),[i,n]);return Object(j.a)((function(){return u(A.Add,r,o),function(){return u(A.Remove,r,o)}}),[u,r,o]),c.a.createElement(L.Provider,{value:u},t)}L.displayName="StackContext",function(e){e[e.Add=0]="Add",e[e.Remove=1]="Remove"}(A||(A={})),function(e){e[e.Open=0]="Open",e[e.Closed=1]="Closed"}(I||(I={})),function(e){e[e.SetTitleId=0]="SetTitleId"}(P||(P={}));var z=((F={})[P.SetTitleId]=function(e,t){return e.titleId===t.id?e:Object(o.b)({},e,{titleId:t.id})},F),B=Object(a.createContext)(null);function G(e){var t=Object(a.useContext)(B);if(null===t){var n=new Error("<"+e+" /> is missing a parent <"+K.displayName+" /> component.");throw Error.captureStackTrace&&Error.captureStackTrace(n,G),n}return t}function H(e,t){return Object(i.a)(t.type,z,e,t)}B.displayName="DialogContext";var W=u.a.RenderStrategy|u.a.Static,q=Object(u.c)((function(e,t){var n,s=e.open,v=e.onClose,O=e.initialFocus,w=Object(o.c)(e,["open","onClose","initialFocus"]),T=Object(a.useState)(0),k=T[0],S=T[1],D=Object(N.c)();void 0===s&&null!==D&&(s=Object(i.a)(D,((n={})[N.b.Open]=!0,n[N.b.Closed]=!1,n)));var x=Object(a.useRef)(new Set),F=Object(a.useRef)(null),L=Object(l.a)(F,t),z=e.hasOwnProperty("open")||null!==D,G=e.hasOwnProperty("onClose");if(!z&&!G)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!z)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!G)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if("boolean"!==typeof s)throw new Error("You provided an `open` prop to the `Dialog`, but the value is not a boolean. Received: "+s);if("function"!==typeof v)throw new Error("You provided an `onClose` prop to the `Dialog`, but the value is not a function. Received: "+v);var q=s?I.Open:I.Closed,J=null!==D?D===N.b.Open:q===I.Open,K=Object(a.useReducer)(H,{titleId:null,descriptionId:null}),U=K[0],Q=K[1],V=Object(a.useCallback)((function(){return v(!1)}),[v]),X=Object(a.useCallback)((function(e){return Q({type:P.SetTitleId,id:e})}),[Q]),Z=Object(f.a)()&&q===I.Open,$=k>1,_=null!==Object(a.useContext)(B),ee=$?"parent":"leaf";m(F,Z?Object(i.a)(ee,{parent:r.RestoreFocus,leaf:r.All}):r.None,{initialFocus:O,containers:x}),function(e,t){void 0===t&&(t=!0),Object(j.a)((function(){if(t&&e.current){var n=e.current;h.add(n);for(var r,a=Object(o.a)(g.keys());!(r=a()).done;){var c=r.value;c.contains(n)&&(y(c),g.delete(c))}return document.querySelectorAll("body > *").forEach((function(e){if(e instanceof HTMLElement){for(var t,n=Object(o.a)(h);!(t=n()).done;){var r=t.value;if(e.contains(r))return}1===h.size&&(g.set(e,{"aria-hidden":e.getAttribute("aria-hidden"),inert:e.inert}),E(e))}})),function(){if(h.delete(n),h.size>0)document.querySelectorAll("body > *").forEach((function(e){if(e instanceof HTMLElement&&!g.has(e)){for(var t,n=Object(o.a)(h);!(t=n()).done;){var r=t.value;if(e.contains(r))return}g.set(e,{"aria-hidden":e.getAttribute("aria-hidden"),inert:e.inert}),E(e)}}));else for(var e,t=Object(o.a)(g.keys());!(e=t()).done;){var r=e.value;y(r),g.delete(r)}}}}),[t])}(F,!!$&&Z),Object(p.a)("mousedown",(function(e){var t,n=e.target;q===I.Open&&($||(null==(t=F.current)?void 0:t.contains(n))||V())})),Object(a.useEffect)((function(){if(q===I.Open&&!_){var e=document.documentElement.style.overflow,t=document.documentElement.style.paddingRight,n=window.innerWidth-document.documentElement.clientWidth;return document.documentElement.style.overflow="hidden",document.documentElement.style.paddingRight=n+"px",function(){document.documentElement.style.overflow=e,document.documentElement.style.paddingRight=t}}}),[q,_]),Object(a.useEffect)((function(){if(q===I.Open&&F.current){var e=new IntersectionObserver((function(e){for(var t,n=Object(o.a)(e);!(t=n()).done;){var r=t.value;0===r.boundingClientRect.x&&0===r.boundingClientRect.y&&0===r.boundingClientRect.width&&0===r.boundingClientRect.height&&V()}}));return e.observe(F.current),function(){return e.disconnect()}}}),[q,F,V]);var te=Object(M.b)(),ne=te[0],re=te[1],oe="headlessui-dialog-"+Object(b.a)(),ae=Object(a.useMemo)((function(){return[{dialogState:q,close:V,setTitleId:X},U]}),[q,U,V,X]),ce=Object(a.useMemo)((function(){return{open:q===I.Open}}),[q]),ie={ref:L,id:oe,role:"dialog","aria-modal":q===I.Open||void 0,"aria-labelledby":U.titleId,"aria-describedby":ne,onClick:function(e){e.stopPropagation()},onKeyDown:function(e){e.key===d.a.Escape&&q===I.Open&&($||(e.preventDefault(),e.stopPropagation(),V()))}},ue=w;return c.a.createElement(Y,{type:"Dialog",element:F,onUpdate:Object(a.useCallback)((function(e,t,n){var r;"Dialog"===t&&Object(i.a)(e,((r={})[A.Add]=function(){x.current.add(n),S((function(e){return e+1}))},r[A.Remove]=function(){x.current.add(n),S((function(e){return e-1}))},r))}),[])},c.a.createElement(C,{force:!0},c.a.createElement(R,null,c.a.createElement(B.Provider,{value:ae},c.a.createElement(R.Group,{target:F},c.a.createElement(C,{force:!1},c.a.createElement(re,{slot:ce,name:"Dialog.Description"},Object(u.d)({props:Object(o.b)({},ue,ie),slot:ce,defaultTag:"div",features:W,visible:J,name:"Dialog"}))))))))})),J=Object(u.c)((function e(t,n){var r=G([K.displayName,e.name].join("."))[0],c=r.dialogState,i=r.close,d=Object(l.a)(n),f="headlessui-dialog-overlay-"+Object(b.a)(),p=Object(a.useCallback)((function(e){if(Object(s.a)(e.currentTarget))return e.preventDefault();e.preventDefault(),e.stopPropagation(),i()}),[i]),v=Object(a.useMemo)((function(){return{open:c===I.Open}}),[c]),O={ref:d,id:f,"aria-hidden":!0,onClick:p},m=t;return Object(u.d)({props:Object(o.b)({},m,O),slot:v,defaultTag:"div",name:"Dialog.Overlay"})}));var K=Object.assign(q,{Overlay:J,Title:function e(t){var n=G([K.displayName,e.name].join("."))[0],r=n.dialogState,c=n.setTitleId,i="headlessui-dialog-title-"+Object(b.a)();Object(a.useEffect)((function(){return c(i),function(){return c(null)}}),[i,c]);var l=Object(a.useMemo)((function(){return{open:r===I.Open}}),[r]),d={id:i},s=t;return Object(u.d)({props:Object(o.b)({},s,d),slot:l,defaultTag:"h2",name:"Dialog.Title"})},Description:M.a})}}]);
//# sourceMappingURL=50.f9bf6aac.chunk.js.map