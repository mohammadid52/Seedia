(this.webpackJsonp13rms=this.webpackJsonp13rms||[]).push([[32],{415:function(e,t,r){"use strict";var a=r(60),s=r(2);t.a=function(e){var t=e.show,r=e.error;return Object(s.jsx)(a.a,{show:t,enter:"transition duration-100 ease-out",enterFrom:"transform scale-95 opacity-0",enterTo:"transform scale-100 opacity-100",leave:"transition duration-75 ease-out",leaveFrom:"transform scale-100 opacity-100",leaveTo:"transform scale-95 opacity-0",className:"mt-2",children:Object(s.jsx)("p",{className:"transition-all duration-200 text-sm text-red-600 dark:text-red-500",children:r})})}},416:function(e,t,r){"use strict";var a=r(21),s=r(153),n=r(60),i=r(51),c=r(415),o=r(413),l=r(1),d=r(45),u=r(2),m=["label","id","name","type","placeholder","error","value","gridClass","required","showPasswordButton","optional","hideBorders","textarea","setUnsavedChanges","withButton","disabled","rows","textClass","cols","info"];t.a=function(e){var t=e.label,r=e.id,b=e.name,j=void 0===b?"":b,x=e.type,h=void 0===x?"text":x,p=e.placeholder,g=e.error,f=(e.value,e.gridClass),v=e.required,O=e.showPasswordButton,y=void 0!==O&&O,N=e.optional,w=void 0!==N&&N,k=e.hideBorders,C=void 0!==k&&k,T=e.textarea,F=void 0!==T&&T,S=e.setUnsavedChanges,B=void 0===S?function(){}:S,R=e.withButton,I=e.disabled,D=e.rows,L=e.textClass,q=void 0===L?"sm:text-sm":L,P=e.cols,G=(e.info,Object(s.a)(e,m),"border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500"),z=Object(l.useState)(!1),U=Object(a.a)(z,2),E=U[0],M=U[1],_=Object(o.c)(j),V=Object(a.a)(_,3),W=V[0],A=V[1],J=V[2].setValue,Q=function(e){B(!0),J(e.target.value)};return Object(u.jsxs)("div",{className:f,children:[Object(u.jsxs)("div",{className:"flex justify-between",children:[Object(u.jsxs)("label",{htmlFor:j,className:"block dark:text-white text-sm font-medium text-gray-700",children:[t," ",v&&Object(u.jsx)("span",{className:"text-red-500 dark:text-red-400 font-medium text-base",children:"*"})]}),w&&Object(u.jsx)("span",{className:"text-sm text-gray-500",id:"email-optional",children:"Optional"})]}),F?Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:"mt-1 relative rounded-md shadow-sm",children:[Object(u.jsx)("textarea",{rows:D,cols:P,autoFocus:!0,id:r,placeholder:p,onChange:Q,className:"block border w-full pr-10 ".concat(g?G:""," ").concat(q," p-2 ").concat(C?"border-transparent":"dark:border-gray-700 border-gray-300"," rounded-md dark:bg-gray-900 transition-all  dark:text-white")}),Object(u.jsx)("div",{className:"flex items-center absolute transition-all duration-200 top-0 right-0 p-3 ",children:A.touched&&A.error&&Object(u.jsx)("div",{className:" pointer-events-none",children:Object(u.jsx)(i.d,{className:"h-5 w-5 text-red-500 dark:text-red-400","aria-hidden":"true"})})})]}),Object(u.jsx)(c.a,{show:Boolean(A.touched&&A.error),error:A.error})]}):Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:"mt-1 relative rounded-md shadow-sm",children:[Object(u.jsx)("input",{disabled:I,id:r,autoFocus:!0,onChange:Q,placeholder:p,type:y?E?"text":"password":h,className:"block border w-full pr-10 ".concat(g?G:""," sm:text-sm p-2 ").concat(C?"border-transparent ":"dark:border-gray-700 border-gray-300"," rounded-md dark:bg-gray-900 dark:text-white")}),Object(u.jsxs)("div",{className:"flex items-center absolute transition-all duration-200 inset-y-0 right-0 pr-3 ",children:[A.touched&&A.error&&Object(u.jsx)("div",{className:" pointer-events-none",children:Object(u.jsx)(i.d,{className:"h-5 w-5 text-red-500 dark:text-red-400","aria-hidden":"true"})}),y&&W.value&&Object(u.jsx)("div",{className:"ml-2",onClick:function(){return M(!E)},children:E?Object(u.jsx)(d.k,{className:"h-5 w-5 text-gray-400 cursor-pointer hover:text-gray-500","aria-hidden":"true"}):Object(u.jsx)(d.j,{className:"h-5 w-5 text-gray-400 cursor-pointer hover:text-gray-500","aria-hidden":"true"})})]})]}),Object(u.jsxs)("div",{className:"flex mt-2 items-center justify-between",children:[Object(u.jsx)(n.a,{show:Boolean(A.touched&&A.error),enter:"transition duration-100 ease-out",enterFrom:"transform scale-95 opacity-0",enterTo:"transform scale-100 opacity-100",leave:"transition duration-75 ease-out",leaveFrom:"transform scale-100 opacity-100",leaveTo:"transform scale-95 opacity-0",children:Object(u.jsx)("p",{className:"transition-all duration-200 text-sm text-red-600 dark:text-red-500",id:"".concat(j||r,"-error"),children:A.error})}),!Boolean(A.touched&&A.error)&&Object(u.jsx)("div",{}),R&&!Boolean(A.touched&&A.error)&&W.value.length>3?R:Object(u.jsx)("div",{className:""})]})]})]})}},419:function(e,t,r){"use strict";var a=r(1),s=r(60),n=r(458),i=r(36),c=r(33),o=r(2);t.a=function(e){var t=e.open,r=void 0!==t&&t,l=e.setOpen,d=e.children,u=e.header,m=e.onClose,b=e.disableBackdropClose,j=void 0===b||b,x=e.hideCloseBtn,h=void 0!==x&&x,p=e.fixedBottom;return Object(o.jsx)(s.a.Root,{show:r,as:a.Fragment,children:Object(o.jsx)(n.a,{as:"div",static:!0,style:{zIndex:9999},className:"fixed inset-0 overflow-y-auto",open:r,onClose:j?c.noop:m||l,children:Object(o.jsxs)("div",{className:"pb-20 flex items-end justify-center min-h-screen pt-4 px-4 text-center sm:block sm:p-0",children:[Object(o.jsx)(s.a.Child,{as:a.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:Object(o.jsx)(n.a.Overlay,{className:"fixed dark:bg-black inset-0 bg-gray-500 opacity-50 transition-opacity"})}),Object(o.jsx)("span",{className:"hidden sm:inline-block sm:align-middle sm:h-screen","aria-hidden":"true",children:"\u200b"}),Object(o.jsx)(s.a.Child,{as:a.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:Object(o.jsxs)("div",{className:"inline-block align-bottom  bg-white dark:bg-gray-900 rounded-lg px-4 pt-5  text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-top  sm:p-6 pb-4",children:[!h&&Object(o.jsx)("div",{className:"hidden sm:block absolute top-0 right-0 pt-6 pr-6",children:Object(o.jsxs)("button",{type:"button",className:"bg-white dark:bg-gray-900 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500",onClick:function(){return m?m():l(!1)},children:[Object(o.jsx)("span",{className:"sr-only",children:"Close"}),Object(o.jsx)(i.f,{className:"h-6 w-6","aria-hidden":"true"})]})}),Object(o.jsxs)("div",{children:[u&&Object(o.jsx)("div",{className:"modal-header divider dark:divider ",children:Object(o.jsx)("h3",{className:"dark:text-white text-gray-900 text-2xl font-semibold",children:u})}),d,p&&Object(o.jsx)("div",{className:"absolute dark:border-gray-800 border-t bg-white dark:bg-gray-900 bottom-0 mx-6 inset-x-0",children:p})]})]})})]})})})}},426:function(e,t,r){"use strict";var a=r(51),s=r(33),n=r(2);t.a=function(e){var t=e.errors;return Object(n.jsx)("div",{className:"rounded-md bg-red-50 dark:bg-gray-900 border dark:border-gray-700 border-transparent p-4",children:Object(n.jsxs)("div",{className:"flex",children:[Object(n.jsx)("div",{className:"flex-shrink-0",children:Object(n.jsx)(a.j,{className:"h-5 w-5 dark:text-red-300 text-red-400","aria-hidden":"true"})}),Object(n.jsxs)("div",{className:"ml-3",children:[Object(n.jsxs)("h3",{className:"text-sm font-medium text-red-800 dark:text-red-500",children:["There were ",t.length," errors with your submission"]}),Object(n.jsx)("div",{className:"mt-2 text-sm text-red-700 dark:text-red-400",children:Object(n.jsx)("ul",{className:"list-disc pl-5 space-y-1",children:Object(s.map)(t,(function(e,t){return Object(n.jsx)("li",{children:e},t)}))})})]})]})})}},434:function(e,t,r){"use strict";var a=r(2);t.a=function(){return Object(a.jsx)("div",{className:" flex m-4 justify-center items-center",children:Object(a.jsx)("div",{className:"animate-spin rounded-full h-24 w-24 border-t-2 border-b-2 border-pink-500"})})}},436:function(e,t,r){"use strict";var a=r(1),s=r(476),n=r(60),i=r(51),c=r(18),o=r(420),l=r.n(o),d=r(2);t.a=function(e){var t=e.list;return Object(d.jsxs)(s.a,{as:"div",className:"relative inline-block text-left",children:[Object(d.jsx)("div",{children:Object(d.jsxs)(s.a.Button,{className:"rounded-full flex items-center text-gray-400 hover:text-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-yellow-100 focus:ring-yellow-500",children:[Object(d.jsx)("span",{className:"sr-only",children:"Open options"}),Object(d.jsx)(i.c,{className:"h-5 w-5","aria-hidden":"true"})]})}),Object(d.jsx)(n.a,{as:a.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:Object(d.jsx)(s.a.Items,{className:"origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-700 ring-1 ring-black ring-opacity-5 focus:outline-none",children:Object(d.jsx)("div",{className:"py-1",children:l()(t,(function(e){return Object(d.jsx)(s.a.Item,{children:function(t){var r=t.active;return Object(d.jsxs)("div",{style:{zIndex:999},onClick:function(t){t.stopPropagation(),"function"===typeof e.onClick&&e.onClick()},className:Object(c.a)(r?"bg-gray-100 dark:bg-gray-600 dark:text-white text-gray-900":"text-gray-700 dark:bg-gray-700 dark:text-white","items-center px-4 py-2 flex text-sm cursor-pointer"),children:[e.Icon&&Object(d.jsx)(e.Icon,{className:"mr-2"}),e.name]})}})}))})})})]})}},454:function(e,t,r){"use strict";var a=r(18),s=r(2);t.a=function(e){var t=e.tabs,r=e.currentTab,n=e.setCurrentTab;return Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{className:"sm:hidden",children:[Object(s.jsx)("label",{htmlFor:"tabs",className:"sr-only",children:"Select a tab"}),Object(s.jsx)("select",{id:"tabs",name:"tabs",className:"block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md",defaultValue:t.find((function(e){return e.name===r})).name,children:t.map((function(e){return Object(s.jsx)("option",{children:e.name},e.name)}))})]}),Object(s.jsx)("div",{className:"hidden sm:block",children:Object(s.jsx)("div",{className:"",children:Object(s.jsx)("nav",{className:"-mb-px flex space-x-8","aria-label":"Tabs",children:t.map((function(e){return Object(s.jsx)("div",{tabIndex:0,onClick:function(){return n(e.name)},className:Object(a.a)(r===e.name?" gradient-text border-b-2 dark:border-pink-700 border-pink-200":"dark:hover:text-pink-600 border-transparent border-b-2 text-gray-500 hover:text-gray-700 dark:hover:border-gray-600 hover:border-gray-300","whitespace-nowrap py-4 cursor-pointer px-1  font-medium text-sm"),children:e.name},e.name)}))})})})]})}},455:function(e,t,r){"use strict";var a=r(21),s=r(1);t.a=function(e){var t=e[0].name,r=Object(s.useState)(t),n=Object(a.a)(r,2),i=n[0],c=n[1],o=e.map((function(e){return e.name===i}));return{currentTab:i,setCurrentTab:c,helpers:o}}},463:function(e,t,r){"use strict";t.a=r.p+"static/media/placeholder.c69d1bed.png"},699:function(e,t,r){"use strict";r.r(t);var a=r(118),s=r(21),n=r(154),i=r.p+"static/media/no-groups.3aa1c7b9.svg",c=r(18),o=r(2),l=function(e){var t=e.children,r=e.show,a=e.animationType,s=void 0===a?"scale":a,n=e.duration,i=void 0===n?"300":n,l=e.className,d=e.customAnimation,u=e.fixWidth,m=void 0!==u&&u;return Object(o.jsx)("div",{className:Object(c.a)(function(){switch(s){case"slider":return r?"opacity-100 translate-x-0":"opacity-0 -translate-x-full";case"opacity":return r?"opacity-100":"opacity-0";case"scale":return r?"scale-100 opacity-100":"scale-95 opacity-0";case"translateY":return r?"translate-y-0 opacity-100":"-translate-y-3 opacity-0";case"custom":return r?d.show:d.hide;default:return r?"opacity-100 translate-x-0":"opacity-0 -translate-x-full"}}(),"transition-all  transform","duration-".concat(i),m?r?l:"w-0":l),children:t})},d=r(32),u=r(152),m=r(62),b=r(419),j=r(436),x=r(434),h=r(454),p=r(8),g=r(157),f=r(455),v=r(35),O=r.n(v),y=r(61),N=r(5),w=r(74),k=r(463),C=r(426),T=r(416),F=r(413),S=r(33),B=r(1),R=r(45),I=r(34),D=r(11),L=r(433),q=function(e){var t=e.onSuccess,r=e.refetchGroup,a=e.groupData,n=void 0===a?null:a,i=L.a({groupName:L.c().required("Group Name is required").min(10).max(150),groupDescription:L.c().required("Group Description is required").min(10).max(150)}),c={groupName:(null===n||void 0===n?void 0:n.groupName)||"",groupDescription:(null===n||void 0===n?void 0:n.groupDescription)||"",groupRules:(null===n||void 0===n?void 0:n.groupRules)||""},l=Object(B.useRef)(),u=Object(I.useMutation)(w.f,{onSuccess:function(){r()}}),m=u.mutate,b=u.isLoading,j=u.isError,x=u.error,h=u.isSuccess,p=Object(I.useMutation)(w.v,{onSuccess:function(e,t){var r,a,s,n,i=Object(S.map)(e.data.data,(function(e,t){return e}));(null===l||void 0===l?void 0:l.current)&&(null===l||void 0===l||null===(r=l.current)||void 0===r?void 0:r.values)&&m(Object(N.a)(Object(N.a)({},null===l||void 0===l||null===(a=l.current)||void 0===a?void 0:a.values),{},{coverPhoto:null===(s=i.find((function(e){return e.originalname===V.name})))||void 0===s?void 0:s.location,profilePhoto:null===(n=i.find((function(e){return e.originalname===U.name})))||void 0===n?void 0:n.location}))}});Object(B.useEffect)((function(){h&&p.isSuccess&&t()}),[h,p.isSuccess]);var g=function(){var e=new FormData;e.append("images",U),e.append("images",V),setTimeout((function(){p.mutate(e)}),500)},f=!Object(S.isEmpty)(n);Object(B.useEffect)((function(){f&&(W(n.coverPicture),E(n.profilePicture))}),[f]);var v=function(){var e=Object(y.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:g();case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),q=Object(B.useRef)(),P=Object(B.useRef)(),G=Object(B.useState)(),z=Object(s.a)(G,2),U=z[0],E=z[1],M=Object(B.useState)(),_=Object(s.a)(M,2),V=_[0],W=_[1];return Object(o.jsxs)("div",{className:"px-1",children:[Object(o.jsx)("input",{ref:P,className:"hidden",type:"file",onChange:function(e){return W(e.target.files[0])},accept:"image/x-png,image/jpeg"}),Object(o.jsx)("input",{ref:q,className:"hidden",type:"file",onChange:function(e){return E(e.target.files[0])},accept:"image/x-png,image/jpeg"}),Object(o.jsx)(F.b,{initialValues:c,enableReinitialize:!0,innerRef:l,validationSchema:i,onSubmit:v,children:Object(o.jsxs)(F.a,{className:"space-y-6",children:[Object(o.jsxs)("div",{className:" overflow-hidden  bg-white dark:bg-gray-900",children:[Object(o.jsxs)("div",{className:"relative  group",children:[Object(o.jsx)("div",{className:"absolute top-0 right-0 p-4",children:Object(o.jsx)(R.i,{className:"bg-gray-100   transition-all hover:bg-gray-300 duration-300 rounded-full p-2 text-gray-700 h-8 w-8"})}),Object(o.jsx)("img",{alt:"",onClick:function(){return function(){var e;return null===P||void 0===P||null===(e=P.current)||void 0===e?void 0:e.click()}()},src:V?f?V:URL.createObjectURL(V):k.a,className:"w-full lg:h-36 sm:h-24 object-cover h-20"})]}),Object(o.jsx)("div",{className:"flex  relative justify-start mr-8 ml-4 -mt-12",children:Object(o.jsx)("img",{onClick:function(){return function(){var e;return null===q||void 0===q||null===(e=q.current)||void 0===e?void 0:e.click()}()},alt:"",src:U?f?U:URL.createObjectURL(U):D.s,className:" border-solid lg:h-24 lg:w-24 h-16 w-16  border-white border-2 -mt-3"})})]}),Object(o.jsx)(T.a,{label:"Group Name",id:"groupName",name:"groupName",required:!0,placeholder:"Add group name"}),Object(o.jsx)(T.a,{label:"Description",id:"groupDescription",name:"groupDescription",placeholder:"What is the purpose of this group?",textarea:!0,rows:2,cols:255}),Object(o.jsx)(T.a,{label:"Group rules",id:"groupRules",name:"groupRules",placeholder:"Set the tone and expectations of your group",textarea:!0,rows:2,cols:255}),Object(o.jsx)("div",{className:"flex  items-center justify-end",children:Object(o.jsx)(d.a,{type:"submit",rounded:"rounded-lg",loading:p.isLoading||b,disabled:p.isLoading||b,gradient:!0,size:"lg",label:"Submit"})}),j&&Object(o.jsx)(C.a,{errors:[x.toString()]})]})})]})},P=function(){return Object(o.jsxs)("div",{className:"m-4 text-center flex items-center justify-center flex-col",children:[Object(o.jsx)("img",{src:i,alt:"",className:"h-28 sm:h-32 lg:h-36 xl:h-40 w-full"}),Object(o.jsx)("h3",{className:"mt-4 text-xl font-medium dark:text-gray-300 text-gray-900",children:"Discover groups"}),Object(o.jsx)("p",{className:"mt-1 text-base text-gray-500",children:"Find other trusted communities that share and support your goals."}),Object(o.jsx)("div",{className:"mt-6",children:Object(o.jsx)(d.a,{size:"sm",rounded:"rounded-full",label:"Discover",gradient:!0,onClick:function(){}})})]})},G=function(e){var t,r=e.group,a=e.userId,s=[{id:"1",name:"Copy link to group",onClick:function(){navigator.clipboard.writeText(window.origin+p.a.groupById(r._id))}},{id:"2",name:"Update your settings",onClick:function(){}},{id:"3",name:"Leave this group",onClick:function(){}}],n=(null===r||void 0===r||null===(t=r.createdBy)||void 0===t?void 0:t.toString())===a;return Object(o.jsx)("li",{children:Object(o.jsx)("div",{className:"block border-b border-gray-200 dark:border-gray-700 pt-2",children:Object(o.jsxs)("div",{className:"px-4 py-4 flex items-center sm:px-6",children:[Object(o.jsx)("img",{alt:"",src:r.profilePicture?r.profilePicture:D.s,className:"h-14 w-14  2 -mt-3"}),Object(o.jsx)("div",{className:"min-w-0 ml-2 flex-1 sm:flex sm:items-center sm:justify-between",children:Object(o.jsxs)("div",{className:"truncate",children:[Object(o.jsxs)("div",{className:"flex text-sm relative",children:[Object(o.jsx)("a",{href:p.a.groupById(r._id),className:"font-medium  hover:underline text-lg dark:text-gray-300 text-gray-900 truncate",children:r.groupName}),n&&Object(o.jsx)("div",{className:"ml-2 flex-shrink-0 flex",children:Object(o.jsx)("p",{className:"px-2 inline-flex text-sm items-center justify-center leading-5 font-semibold rounded-md bg-gray-100 text-gray-800 dark:bg-gray-600 dark:text-gray-200",children:"Owner"})})]}),Object(o.jsxs)("div",{className:"mt-0 flex text-sm text-gray-600 dark:text-gray-500",children:[r.members.length," ",r.members.length>1?"members":"member"]})]})}),Object(o.jsx)("div",{className:"relative z-10",children:Object(o.jsx)(j.a,{list:s})})]})})},r._id)},z=function(e){var t=e.groups,r=e.userId;return Object(o.jsx)("div",{className:"bg-white dark:bg-gray-800",children:Object(o.jsx)("ul",{className:"",children:t.map((function(e){return Object(o.jsx)(G,{group:e,userId:r})}))})})},U=[{name:"Your groups"},{name:"Requested"}];t.default=function(e){var t,r,i,c=e.userData,j=Object(I.useQuery)("group-list",n.g),p=j.data,v=j.isLoading,O=j.isFetched,y=j.refetch,N=Object(I.useQuery)("requested-group-list",n.n),w=O&&!v?null===p||void 0===p||null===(t=p.data)||void 0===t?void 0:t.data:[],k=N.isFetched&&!N.isLoading?null===(r=N.data)||void 0===r||null===(i=r.data)||void 0===i?void 0:i.data:[],C=Object(B.useState)([]),T=Object(s.a)(C,2),F=T[0],S=T[1],R=Object(f.a)(U),D=R.currentTab,L=R.setCurrentTab,G=R.helpers,E=Object(s.a)(G,2),M=E[0],_=E[1];Object(B.useEffect)((function(){k&&k.length>0&&_?S(Object(a.a)(k)):S([])}),[k,_]),Object(B.useEffect)((function(){w&&w.length>0&&M?S(Object(a.a)(w)):S([])}),[w,M]);var V=F?F.length:0,W=Object(B.useState)(!1),A=Object(s.a)(W,2),J=A[0],Q=A[1];return Object(o.jsxs)(g.a,{userData:c,customMaxWidth:"max-w-7xl",children:[Object(o.jsx)(b.a,{setOpen:Q,header:"Create group",open:J,children:Object(o.jsx)("div",{className:" min-w-132 max-w-164 min-h-56 max-h-132 overflow-y-auto",children:Object(o.jsx)(q,{refetchGroup:y,onSuccess:function(){return Q(!1)}})})}),Object(o.jsx)(m.a,{pageTitle:"(".concat(V,") Groups | 13RMS"),title:"(".concat(V,") Groups | 13RMS")}),Object(o.jsx)(u.a,{content:Object(o.jsxs)("div",{className:"",children:[Object(o.jsxs)("div",{className:"border-b flex items-center justify-between border-gray-200 dark:border-gray-700",children:[Object(o.jsx)(h.a,{tabs:U,currentTab:D,setCurrentTab:L}),Object(o.jsx)(d.a,{size:"md",rounded:"rounded-full",label:"Create group",onClick:function(){return Q(!0)},gradient:!0,invert:!0})]}),v&&!O?Object(o.jsx)(x.a,{}):V>0?Object(o.jsxs)("div",{className:"mt-4",children:[Object(o.jsx)(l,{show:M,children:M&&Object(o.jsx)(z,{userId:c._id,groups:F})}),Object(o.jsx)(l,{show:_,children:_&&Object(o.jsx)(z,{groups:F,userId:c._id})})]}):Object(o.jsx)(P,{})]})})]})}}}]);
//# sourceMappingURL=32.4063c398.chunk.js.map