(this.webpackJsonp13rms=this.webpackJsonp13rms||[]).push([[4,42,53],{420:function(e,t,n){var r=n(225),a=n(119),o=n(427),c=n(47);e.exports=function(e,t){return(c(e)?r:o)(e,a(t,3))}},427:function(e,t,n){var r=n(428),a=n(155);e.exports=function(e,t){var n=-1,o=a(e)?Array(e.length):[];return r(e,(function(e,r,a){o[++n]=t(e,r,a)})),o}},428:function(e,t,n){var r=n(422),a=n(429)(r);e.exports=a},429:function(e,t,n){var r=n(155);e.exports=function(e,t){return function(n,a){if(null==n)return n;if(!r(n))return e(n,a);for(var o=n.length,c=t?o:-1,u=Object(n);(t?c--:++c<o)&&!1!==a(u[c],c,u););return n}}},442:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(1),a=n(16);function o(e){var t=e.container,n=e.accept,o=e.walk,c=e.enabled,u=void 0===c||c,i=Object(r.useRef)(n),l=Object(r.useRef)(o);Object(r.useEffect)((function(){i.current=n,l.current=o}),[n,o]),Object(a.a)((function(){if(t&&u)for(var e=i.current,n=l.current,r=Object.assign((function(t){return e(t)}),{acceptNode:e}),a=document.createTreeWalker(t,NodeFilter.SHOW_ELEMENT,r,!1);a.nextNode();)n(a.currentNode)}),[t,u,i,l])}},458:function(e,t,n){"use strict";n.d(t,"a",(function(){return Y}));var r,a=n(7),o=n(1),c=n.n(o),u=n(22),i=n(9),l=n(53),s=n(12),d=n(52),f=n(87),b=n(23),p=n(46),v=n(15),m=n(159);function O(e,t,n){void 0===t&&(t=r.All);var c=void 0===n?{}:n,u=c.initialFocus,i=c.containers,l=Object(o.useRef)("undefined"!==typeof window?document.activeElement:null),d=Object(o.useRef)(null),f=Object(m.a)(),b=Boolean(t&r.RestoreFocus),O=Boolean(t&r.InitialFocus);Object(o.useEffect)((function(){b&&(l.current=document.activeElement)}),[b]),Object(o.useEffect)((function(){if(b)return function(){Object(v.d)(l.current),l.current=null}}),[b]),Object(o.useEffect)((function(){if(O&&e.current){var t=document.activeElement;if(null==u?void 0:u.current){if((null==u?void 0:u.current)===t)return void(d.current=t)}else if(e.current.contains(t))return void(d.current=t);if(null==u?void 0:u.current)Object(v.d)(u.current);else if(Object(v.e)(e.current,v.a.First)===v.b.Error)throw new Error("There are no focusable elements inside the <FocusTrap />");d.current=document.activeElement}}),[e,u,O]),Object(p.a)("keydown",(function(n){t&r.TabLock&&e.current&&n.key===s.a.Tab&&(n.preventDefault(),Object(v.e)(e.current,(n.shiftKey?v.a.Previous:v.a.Next)|v.a.WrapAround)===v.b.Success&&(d.current=document.activeElement))})),Object(p.a)("focus",(function(n){if(t&r.FocusLock){var o=new Set(null==i?void 0:i.current);if(o.add(e),o.size){var c=d.current;if(c&&f.current){var u=n.target;u&&u instanceof HTMLElement?!function(e,t){for(var n,r=Object(a.a)(e);!(n=r()).done;){var o;if(null==(o=n.value.current)?void 0:o.contains(t))return!0}return!1}(o,u)?(n.preventDefault(),n.stopPropagation(),Object(v.d)(c)):(d.current=u,Object(v.d)(u)):Object(v.d)(d.current)}}}}),!0)}!function(e){e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All"}(r||(r={}));var j=n(16),g=new Set,h=new Map;function y(e){e.setAttribute("aria-hidden","true"),e.inert=!0}function C(e){var t=h.get(e);t&&(null===t["aria-hidden"]?e.removeAttribute("aria-hidden"):e.setAttribute("aria-hidden",t["aria-hidden"]),e.inert=t.inert)}var I=Object(o.createContext)(!1);function E(e){return c.a.createElement(I.Provider,{value:e.force},e.children)}var R=n(64);function k(){var e=Object(o.useContext)(I),t=Object(o.useContext)(T),n=Object(o.useState)((function(){if(!e&&null!==t)return null;if("undefined"===typeof window)return null;var n=document.getElementById("headlessui-portal-root");if(n)return n;var r=document.createElement("div");return r.setAttribute("id","headlessui-portal-root"),document.body.appendChild(r)})),r=n[0],a=n[1];return Object(o.useEffect)((function(){e||null!==t&&a(t.current)}),[t,a,e]),r}var w=o.Fragment;function S(e){var t=e,n=k(),r=Object(o.useState)((function(){return"undefined"===typeof window?null:document.createElement("div")}))[0],a=Object(f.a)();return Object(j.a)((function(){if(n&&r)return n.appendChild(r),function(){var e;n&&(r&&(n.removeChild(r),n.childNodes.length<=0&&(null==(e=n.parentElement)||e.removeChild(n))))}}),[n,r]),a&&n&&r?Object(R.createPortal)(Object(i.d)({props:t,defaultTag:w,name:"Portal"}),r):null}var x=o.Fragment,T=Object(o.createContext)(null);S.Group=function(e){var t=e.target,n=Object(a.c)(e,["target"]);return c.a.createElement(T.Provider,{value:t},Object(i.d)({props:n,defaultTag:x,name:"Popover.Group"}))};var F,D,A,M,P=n(121),L=n(20),N=Object(o.createContext)((function(){}));function G(e){var t=e.children,n=e.onUpdate,r=e.type,a=e.element,u=Object(o.useContext)(N),i=Object(o.useCallback)((function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];null==n||n.apply(void 0,t),u.apply(void 0,t)}),[u,n]);return Object(j.a)((function(){return i(F.Add,r,a),function(){return i(F.Remove,r,a)}}),[i,r,a]),c.a.createElement(N.Provider,{value:i},t)}N.displayName="StackContext",function(e){e[e.Add=0]="Add",e[e.Remove=1]="Remove"}(F||(F={})),function(e){e[e.Open=0]="Open",e[e.Closed=1]="Closed"}(A||(A={})),function(e){e[e.SetTitleId=0]="SetTitleId"}(M||(M={}));var U=((D={})[M.SetTitleId]=function(e,t){return e.titleId===t.id?e:Object(a.b)({},e,{titleId:t.id})},D),B=Object(o.createContext)(null);function K(e){var t=Object(o.useContext)(B);if(null===t){var n=new Error("<"+e+" /> is missing a parent <"+Y.displayName+" /> component.");throw Error.captureStackTrace&&Error.captureStackTrace(n,K),n}return t}function Q(e,t){return Object(u.a)(t.type,U,e,t)}B.displayName="DialogContext";var W=i.a.RenderStrategy|i.a.Static,_=Object(i.c)((function(e,t){var n,d=e.open,v=e.onClose,m=e.initialFocus,I=Object(a.c)(e,["open","onClose","initialFocus"]),R=Object(o.useState)(0),k=R[0],w=R[1],x=Object(L.c)();void 0===d&&null!==x&&(d=Object(u.a)(x,((n={})[L.b.Open]=!0,n[L.b.Closed]=!1,n)));var T=Object(o.useRef)(new Set),D=Object(o.useRef)(null),N=Object(l.a)(D,t),U=e.hasOwnProperty("open")||null!==x,K=e.hasOwnProperty("onClose");if(!U&&!K)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!U)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!K)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if("boolean"!==typeof d)throw new Error("You provided an `open` prop to the `Dialog`, but the value is not a boolean. Received: "+d);if("function"!==typeof v)throw new Error("You provided an `onClose` prop to the `Dialog`, but the value is not a function. Received: "+v);var _=d?A.Open:A.Closed,H=null!==x?x===L.b.Open:_===A.Open,Y=Object(o.useReducer)(Q,{titleId:null,descriptionId:null}),J=Y[0],V=Y[1],z=Object(o.useCallback)((function(){return v(!1)}),[v]),q=Object(o.useCallback)((function(e){return V({type:M.SetTitleId,id:e})}),[V]),X=Object(f.a)()&&_===A.Open,Z=k>1,$=null!==Object(o.useContext)(B),ee=Z?"parent":"leaf";O(D,X?Object(u.a)(ee,{parent:r.RestoreFocus,leaf:r.All}):r.None,{initialFocus:m,containers:T}),function(e,t){void 0===t&&(t=!0),Object(j.a)((function(){if(t&&e.current){var n=e.current;g.add(n);for(var r,o=Object(a.a)(h.keys());!(r=o()).done;){var c=r.value;c.contains(n)&&(C(c),h.delete(c))}return document.querySelectorAll("body > *").forEach((function(e){if(e instanceof HTMLElement){for(var t,n=Object(a.a)(g);!(t=n()).done;){var r=t.value;if(e.contains(r))return}1===g.size&&(h.set(e,{"aria-hidden":e.getAttribute("aria-hidden"),inert:e.inert}),y(e))}})),function(){if(g.delete(n),g.size>0)document.querySelectorAll("body > *").forEach((function(e){if(e instanceof HTMLElement&&!h.has(e)){for(var t,n=Object(a.a)(g);!(t=n()).done;){var r=t.value;if(e.contains(r))return}h.set(e,{"aria-hidden":e.getAttribute("aria-hidden"),inert:e.inert}),y(e)}}));else for(var e,t=Object(a.a)(h.keys());!(e=t()).done;){var r=e.value;C(r),h.delete(r)}}}}),[t])}(D,!!Z&&X),Object(p.a)("mousedown",(function(e){var t,n=e.target;_===A.Open&&(Z||(null==(t=D.current)?void 0:t.contains(n))||z())})),Object(o.useEffect)((function(){if(_===A.Open&&!$){var e=document.documentElement.style.overflow,t=document.documentElement.style.paddingRight,n=window.innerWidth-document.documentElement.clientWidth;return document.documentElement.style.overflow="hidden",document.documentElement.style.paddingRight=n+"px",function(){document.documentElement.style.overflow=e,document.documentElement.style.paddingRight=t}}}),[_,$]),Object(o.useEffect)((function(){if(_===A.Open&&D.current){var e=new IntersectionObserver((function(e){for(var t,n=Object(a.a)(e);!(t=n()).done;){var r=t.value;0===r.boundingClientRect.x&&0===r.boundingClientRect.y&&0===r.boundingClientRect.width&&0===r.boundingClientRect.height&&z()}}));return e.observe(D.current),function(){return e.disconnect()}}}),[_,D,z]);var te=Object(P.b)(),ne=te[0],re=te[1],ae="headlessui-dialog-"+Object(b.a)(),oe=Object(o.useMemo)((function(){return[{dialogState:_,close:z,setTitleId:q},J]}),[_,J,z,q]),ce=Object(o.useMemo)((function(){return{open:_===A.Open}}),[_]),ue={ref:N,id:ae,role:"dialog","aria-modal":_===A.Open||void 0,"aria-labelledby":J.titleId,"aria-describedby":ne,onClick:function(e){e.stopPropagation()},onKeyDown:function(e){e.key===s.a.Escape&&_===A.Open&&(Z||(e.preventDefault(),e.stopPropagation(),z()))}},ie=I;return c.a.createElement(G,{type:"Dialog",element:D,onUpdate:Object(o.useCallback)((function(e,t,n){var r;"Dialog"===t&&Object(u.a)(e,((r={})[F.Add]=function(){T.current.add(n),w((function(e){return e+1}))},r[F.Remove]=function(){T.current.add(n),w((function(e){return e-1}))},r))}),[])},c.a.createElement(E,{force:!0},c.a.createElement(S,null,c.a.createElement(B.Provider,{value:oe},c.a.createElement(S.Group,{target:D},c.a.createElement(E,{force:!1},c.a.createElement(re,{slot:ce,name:"Dialog.Description"},Object(i.d)({props:Object(a.b)({},ie,ue),slot:ce,defaultTag:"div",features:W,visible:H,name:"Dialog"}))))))))})),H=Object(i.c)((function e(t,n){var r=K([Y.displayName,e.name].join("."))[0],c=r.dialogState,u=r.close,s=Object(l.a)(n),f="headlessui-dialog-overlay-"+Object(b.a)(),p=Object(o.useCallback)((function(e){if(Object(d.a)(e.currentTarget))return e.preventDefault();e.preventDefault(),e.stopPropagation(),u()}),[u]),v=Object(o.useMemo)((function(){return{open:c===A.Open}}),[c]),m={ref:s,id:f,"aria-hidden":!0,onClick:p},O=t;return Object(i.d)({props:Object(a.b)({},O,m),slot:v,defaultTag:"div",name:"Dialog.Overlay"})}));var Y=Object.assign(_,{Overlay:H,Title:function e(t){var n=K([Y.displayName,e.name].join("."))[0],r=n.dialogState,c=n.setTitleId,u="headlessui-dialog-title-"+Object(b.a)();Object(o.useEffect)((function(){return c(u),function(){return c(null)}}),[u,c]);var l=Object(o.useMemo)((function(){return{open:r===A.Open}}),[r]),s={id:u},d=t;return Object(i.d)({props:Object(a.b)({},d,s),slot:l,defaultTag:"h2",name:"Dialog.Title"})},Description:P.a})},476:function(e,t,n){"use strict";n.d(t,"a",(function(){return S}));var r,a,o,c=n(7),u=n(1),i=n.n(u),l=n(22),s=n(9),d=n(53),f=n(12),b=n(52),p=n(16),v=n(23),m=n(15),O=n(46),j=n(20),g=n(43),h=n(95),y=n(27),C=n(442);!function(e){e[e.Open=0]="Open",e[e.Closed=1]="Closed"}(a||(a={})),function(e){e[e.OpenMenu=0]="OpenMenu",e[e.CloseMenu=1]="CloseMenu",e[e.GoToItem=2]="GoToItem",e[e.Search=3]="Search",e[e.ClearSearch=4]="ClearSearch",e[e.RegisterItem=5]="RegisterItem",e[e.UnregisterItem=6]="UnregisterItem"}(o||(o={}));var I=((r={})[o.CloseMenu]=function(e){return e.menuState===a.Closed?e:Object(c.b)({},e,{activeItemIndex:null,menuState:a.Closed})},r[o.OpenMenu]=function(e){return e.menuState===a.Open?e:Object(c.b)({},e,{menuState:a.Open})},r[o.GoToItem]=function(e,t){var n=Object(y.b)(t,{resolveItems:function(){return e.items},resolveActiveIndex:function(){return e.activeItemIndex},resolveId:function(e){return e.id},resolveDisabled:function(e){return e.dataRef.current.disabled}});return""===e.searchQuery&&e.activeItemIndex===n?e:Object(c.b)({},e,{searchQuery:"",activeItemIndex:n})},r[o.Search]=function(e,t){var n=e.searchQuery+t.value.toLowerCase(),r=e.items.findIndex((function(e){var t;return(null==(t=e.dataRef.current.textValue)?void 0:t.startsWith(n))&&!e.dataRef.current.disabled}));return-1===r||r===e.activeItemIndex?Object(c.b)({},e,{searchQuery:n}):Object(c.b)({},e,{searchQuery:n,activeItemIndex:r})},r[o.ClearSearch]=function(e){return""===e.searchQuery?e:Object(c.b)({},e,{searchQuery:""})},r[o.RegisterItem]=function(e,t){return Object(c.b)({},e,{items:[].concat(e.items,[{id:t.id,dataRef:t.dataRef}])})},r[o.UnregisterItem]=function(e,t){var n=e.items.slice(),r=null!==e.activeItemIndex?n[e.activeItemIndex]:null,a=n.findIndex((function(e){return e.id===t.id}));return-1!==a&&n.splice(a,1),Object(c.b)({},e,{items:n,activeItemIndex:a===e.activeItemIndex||null===r?null:n.indexOf(r)})},r),E=Object(u.createContext)(null);function R(e){var t=Object(u.useContext)(E);if(null===t){var n=new Error("<"+e+" /> is missing a parent <"+S.name+" /> component.");throw Error.captureStackTrace&&Error.captureStackTrace(n,R),n}return t}function k(e,t){return Object(l.a)(t.type,I,e,t)}E.displayName="MenuContext";var w=u.Fragment;function S(e){var t,n=Object(u.useReducer)(k,{menuState:a.Closed,buttonRef:Object(u.createRef)(),itemsRef:Object(u.createRef)(),items:[],searchQuery:"",activeItemIndex:null}),r=n[0],c=r.menuState,d=r.itemsRef,f=r.buttonRef,b=n[1];Object(O.a)("mousedown",(function(e){var t,n,r,u=e.target;c===a.Open&&((null==(t=f.current)?void 0:t.contains(u))||(null==(n=d.current)?void 0:n.contains(u))||(b({type:o.CloseMenu}),Object(m.g)(u,m.c.Loose)||(e.preventDefault(),null==(r=f.current)||r.focus())))}));var p=Object(u.useMemo)((function(){return{open:c===a.Open}}),[c]);return i.a.createElement(E.Provider,{value:n},i.a.createElement(j.a,{value:Object(l.a)(c,(t={},t[a.Open]=j.b.Open,t[a.Closed]=j.b.Closed,t))},Object(s.d)({props:e,slot:p,defaultTag:w,name:"Menu"})))}var x=Object(s.c)((function e(t,n){var r,i=R([S.name,e.name].join(".")),l=i[0],p=i[1],m=Object(d.a)(l.buttonRef,n),O="headlessui-menu-button-"+Object(v.a)(),j=Object(h.a)(),g=Object(u.useCallback)((function(e){switch(e.key){case f.a.Space:case f.a.Enter:case f.a.ArrowDown:e.preventDefault(),e.stopPropagation(),p({type:o.OpenMenu}),j.nextFrame((function(){return p({type:o.GoToItem,focus:y.a.First})}));break;case f.a.ArrowUp:e.preventDefault(),e.stopPropagation(),p({type:o.OpenMenu}),j.nextFrame((function(){return p({type:o.GoToItem,focus:y.a.Last})}))}}),[p,j]),C=Object(u.useCallback)((function(e){switch(e.key){case f.a.Space:e.preventDefault()}}),[]),I=Object(u.useCallback)((function(e){if(Object(b.a)(e.currentTarget))return e.preventDefault();t.disabled||(l.menuState===a.Open?(p({type:o.CloseMenu}),j.nextFrame((function(){var e;return null==(e=l.buttonRef.current)?void 0:e.focus({preventScroll:!0})}))):(e.preventDefault(),e.stopPropagation(),p({type:o.OpenMenu})))}),[p,j,l,t.disabled]),E=Object(u.useMemo)((function(){return{open:l.menuState===a.Open}}),[l]),k=t,w={ref:m,id:O,type:"button","aria-haspopup":!0,"aria-controls":null==(r=l.itemsRef.current)?void 0:r.id,"aria-expanded":t.disabled?void 0:l.menuState===a.Open,onKeyDown:g,onKeyUp:C,onClick:I};return Object(s.d)({props:Object(c.b)({},k,w),slot:E,defaultTag:"button",name:"Menu.Button"})})),T=s.a.RenderStrategy|s.a.Static,F=Object(s.c)((function e(t,n){var r,i,l=R([S.name,e.name].join(".")),b=l[0],p=l[1],m=Object(d.a)(b.itemsRef,n),O="headlessui-menu-items-"+Object(v.a)(),I=Object(h.a)(),E=Object(j.c)(),k=null!==E?E===j.b.Open:b.menuState===a.Open;Object(u.useEffect)((function(){var e=b.itemsRef.current;e&&b.menuState===a.Open&&e!==document.activeElement&&e.focus({preventScroll:!0})}),[b.menuState,b.itemsRef]),Object(C.a)({container:b.itemsRef.current,enabled:b.menuState===a.Open,accept:function(e){return"menuitem"===e.getAttribute("role")?NodeFilter.FILTER_REJECT:e.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk:function(e){e.setAttribute("role","none")}});var w=Object(u.useCallback)((function(e){switch(I.dispose(),e.key){case f.a.Space:if(""!==b.searchQuery)return e.preventDefault(),e.stopPropagation(),p({type:o.Search,value:e.key});case f.a.Enter:if(e.preventDefault(),e.stopPropagation(),p({type:o.CloseMenu}),null!==b.activeItemIndex){var t,n=b.items[b.activeItemIndex].id;null==(t=document.getElementById(n))||t.click()}Object(g.a)().nextFrame((function(){var e;return null==(e=b.buttonRef.current)?void 0:e.focus({preventScroll:!0})}));break;case f.a.ArrowDown:return e.preventDefault(),e.stopPropagation(),p({type:o.GoToItem,focus:y.a.Next});case f.a.ArrowUp:return e.preventDefault(),e.stopPropagation(),p({type:o.GoToItem,focus:y.a.Previous});case f.a.Home:case f.a.PageUp:return e.preventDefault(),e.stopPropagation(),p({type:o.GoToItem,focus:y.a.First});case f.a.End:case f.a.PageDown:return e.preventDefault(),e.stopPropagation(),p({type:o.GoToItem,focus:y.a.Last});case f.a.Escape:e.preventDefault(),e.stopPropagation(),p({type:o.CloseMenu}),Object(g.a)().nextFrame((function(){var e;return null==(e=b.buttonRef.current)?void 0:e.focus({preventScroll:!0})}));break;case f.a.Tab:e.preventDefault(),e.stopPropagation();break;default:1===e.key.length&&(p({type:o.Search,value:e.key}),I.setTimeout((function(){return p({type:o.ClearSearch})}),350))}}),[p,I,b]),x=Object(u.useCallback)((function(e){switch(e.key){case f.a.Space:e.preventDefault()}}),[]),F=Object(u.useMemo)((function(){return{open:b.menuState===a.Open}}),[b]),D={"aria-activedescendant":null===b.activeItemIndex||null==(r=b.items[b.activeItemIndex])?void 0:r.id,"aria-labelledby":null==(i=b.buttonRef.current)?void 0:i.id,id:O,onKeyDown:w,onKeyUp:x,role:"menu",tabIndex:0,ref:m},A=t;return Object(s.d)({props:Object(c.b)({},A,D),slot:F,defaultTag:"div",features:T,visible:k,name:"Menu.Items"})})),D=u.Fragment;S.Button=x,S.Items=F,S.Item=function e(t){var n=t.disabled,r=void 0!==n&&n,i=t.onClick,l=Object(c.c)(t,["disabled","onClick"]),d=R([S.name,e.name].join(".")),f=d[0],b=d[1],m="headlessui-menu-item-"+Object(v.a)(),O=null!==f.activeItemIndex&&f.items[f.activeItemIndex].id===m;Object(p.a)((function(){if(f.menuState===a.Open&&O){var e=Object(g.a)();return e.nextFrame((function(){var e;return null==(e=document.getElementById(m))||null==e.scrollIntoView?void 0:e.scrollIntoView({block:"nearest"})})),e.dispose}}),[m,O,f.menuState]);var j=Object(u.useRef)({disabled:r});Object(p.a)((function(){j.current.disabled=r}),[j,r]),Object(p.a)((function(){var e,t;j.current.textValue=null==(e=document.getElementById(m))||null==(t=e.textContent)?void 0:t.toLowerCase()}),[j,m]),Object(p.a)((function(){return b({type:o.RegisterItem,id:m,dataRef:j}),function(){return b({type:o.UnregisterItem,id:m})}}),[j,m]);var h=Object(u.useCallback)((function(e){return r?e.preventDefault():(b({type:o.CloseMenu}),Object(g.a)().nextFrame((function(){var e;return null==(e=f.buttonRef.current)?void 0:e.focus({preventScroll:!0})})),i?i(e):void 0)}),[b,f.buttonRef,r,i]),C=Object(u.useCallback)((function(){if(r)return b({type:o.GoToItem,focus:y.a.Nothing});b({type:o.GoToItem,focus:y.a.Specific,id:m})}),[r,m,b]),I=Object(u.useCallback)((function(){r||O||b({type:o.GoToItem,focus:y.a.Specific,id:m})}),[r,O,m,b]),E=Object(u.useCallback)((function(){r||O&&b({type:o.GoToItem,focus:y.a.Nothing})}),[r,O,b]),k=Object(u.useMemo)((function(){return{active:O,disabled:r}}),[O,r]),w={id:m,role:"menuitem",tabIndex:!0===r?void 0:-1,"aria-disabled":!0===r||void 0,disabled:void 0,onClick:h,onFocus:C,onPointerMove:I,onMouseMove:I,onPointerLeave:E,onMouseLeave:E};return Object(s.d)({props:Object(c.b)({},l,w),slot:k,defaultTag:D,name:"Menu.Item"})}},551:function(e,t,n){"use strict";n.d(t,"a",(function(){return C}));var r=n(7),a=n(1),o=n.n(a),c=n(22),u=n(9),i=n(12),l=n(16),s=n(23),d=n(15),f=n(121),b=n(442);var p,v,m=n(126);!function(e){e[e.RegisterOption=0]="RegisterOption",e[e.UnregisterOption=1]="UnregisterOption"}(v||(v={}));var O=((p={})[v.RegisterOption]=function(e,t){return Object(r.b)({},e,{options:[].concat(e.options,[{id:t.id,element:t.element,propsRef:t.propsRef}])})},p[v.UnregisterOption]=function(e,t){var n=e.options.slice(),a=e.options.findIndex((function(e){return e.id===t.id}));return-1===a?e:(n.splice(a,1),Object(r.b)({},e,{options:n}))},p),j=Object(a.createContext)(null);function g(e){var t=Object(a.useContext)(j);if(null===t){var n=new Error("<"+e+" /> is missing a parent <"+C.name+" /> component.");throw Error.captureStackTrace&&Error.captureStackTrace(n,g),n}return t}function h(e,t){return Object(c.a)(t.type,O,e,t)}j.displayName="RadioGroupContext";var y;function C(e){var t=e.value,n=e.onChange,c=e.disabled,l=void 0!==c&&c,p=Object(r.c)(e,["value","onChange","disabled"]),O=Object(a.useReducer)(h,{options:[]}),g=O[0].options,y=O[1],C=Object(m.b)(),I=C[0],E=C[1],R=Object(f.b)(),k=R[0],w=R[1],S="headlessui-radiogroup-"+Object(s.a)(),x=Object(a.useRef)(null),T=Object(a.useMemo)((function(){return g.find((function(e){return!e.propsRef.current.disabled}))}),[g]),F=Object(a.useMemo)((function(){return g.some((function(e){return e.propsRef.current.value===t}))}),[g,t]),D=Object(a.useCallback)((function(e){var r;if(l)return!1;if(e===t)return!1;var a=null==(r=g.find((function(t){return t.propsRef.current.value===e})))?void 0:r.propsRef.current;return!(null==a?void 0:a.disabled)&&(n(e),!0)}),[n,t,l,g]);Object(b.a)({container:x.current,accept:function(e){return"radio"===e.getAttribute("role")?NodeFilter.FILTER_REJECT:e.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk:function(e){e.setAttribute("role","none")}});var A=Object(a.useCallback)((function(e){if(x.current){var t=g.filter((function(e){return!1===e.propsRef.current.disabled})).map((function(e){return e.element.current}));switch(e.key){case i.a.ArrowLeft:case i.a.ArrowUp:if(e.preventDefault(),e.stopPropagation(),Object(d.e)(t,d.a.Previous|d.a.WrapAround)===d.b.Success){var n=g.find((function(e){return e.element.current===document.activeElement}));n&&D(n.propsRef.current.value)}break;case i.a.ArrowRight:case i.a.ArrowDown:if(e.preventDefault(),e.stopPropagation(),Object(d.e)(t,d.a.Next|d.a.WrapAround)===d.b.Success){var r=g.find((function(e){return e.element.current===document.activeElement}));r&&D(r.propsRef.current.value)}break;case i.a.Space:e.preventDefault(),e.stopPropagation();var a=g.find((function(e){return e.element.current===document.activeElement}));a&&D(a.propsRef.current.value)}}}),[x,g,D]),M=Object(a.useCallback)((function(e){return y(Object(r.b)({type:v.RegisterOption},e)),function(){return y({type:v.UnregisterOption,id:e.id})}}),[y]),P=Object(a.useMemo)((function(){return{registerOption:M,firstOption:T,containsCheckedOption:F,change:D,disabled:l,value:t}}),[M,T,F,D,l,t]),L={ref:x,id:S,role:"radiogroup","aria-labelledby":I,"aria-describedby":k,onKeyDown:A};return o.a.createElement(w,{name:"RadioGroup.Description"},o.a.createElement(E,{name:"RadioGroup.Label"},o.a.createElement(j.Provider,{value:P},Object(u.d)({props:Object(r.b)({},p,L),defaultTag:"div",name:"RadioGroup"}))))}!function(e){e[e.Empty=1]="Empty",e[e.Active=2]="Active"}(y||(y={}));C.Option=function e(t){var n=Object(a.useRef)(null),c="headlessui-radiogroup-option-"+Object(s.a)(),i=Object(m.b)(),d=i[0],b=i[1],p=Object(f.b)(),v=p[0],O=p[1],j=function(e){void 0===e&&(e=0);var t=Object(a.useState)(e),n=t[0],r=t[1];return{addFlag:Object(a.useCallback)((function(e){return r((function(t){return t|e}))}),[r]),hasFlag:Object(a.useCallback)((function(e){return Boolean(n&e)}),[n]),removeFlag:Object(a.useCallback)((function(e){return r((function(t){return t&~e}))}),[r]),toggleFlag:Object(a.useCallback)((function(e){return r((function(t){return t^e}))}),[r])}}(y.Empty),h=j.addFlag,I=j.removeFlag,E=j.hasFlag,R=t.value,k=t.disabled,w=void 0!==k&&k,S=Object(r.c)(t,["value","disabled"]),x=Object(a.useRef)({value:R,disabled:w});Object(l.a)((function(){x.current.value=R}),[R,x]),Object(l.a)((function(){x.current.disabled=w}),[w,x]);var T=g([C.name,e.name].join(".")),F=T.registerOption,D=T.disabled,A=T.change,M=T.firstOption,P=T.containsCheckedOption,L=T.value;Object(l.a)((function(){return F({id:c,element:n,propsRef:x})}),[c,F,n,t]);var N=Object(a.useCallback)((function(){var e;A(R)&&(h(y.Active),null==(e=n.current)||e.focus())}),[h,A,R]),G=Object(a.useCallback)((function(){return h(y.Active)}),[h]),U=Object(a.useCallback)((function(){return I(y.Active)}),[I]),B=(null==M?void 0:M.id)===c,K=D||w,Q=L===R,W={ref:n,id:c,role:"radio","aria-checked":Q?"true":"false","aria-labelledby":d,"aria-describedby":v,"aria-disabled":!!K||void 0,tabIndex:K?-1:Q||!P&&B?0:-1,onClick:K?void 0:N,onFocus:K?void 0:G,onBlur:K?void 0:U},_=Object(a.useMemo)((function(){return{checked:Q,disabled:K,active:E(y.Active)}}),[Q,K,E]);return o.a.createElement(O,{name:"RadioGroup.Description"},o.a.createElement(b,{name:"RadioGroup.Label"},Object(u.d)({props:Object(r.b)({},S,W),slot:_,defaultTag:"div",name:"RadioGroup.Option"})))},C.Label=m.a,C.Description=f.a}}]);
//# sourceMappingURL=4.9b795059.chunk.js.map