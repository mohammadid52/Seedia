(this.webpackJsonp13rms=this.webpackJsonp13rms||[]).push([[31],{415:function(e,t,r){"use strict";var s=r(60),a=r(2);t.a=function(e){var t=e.show,r=e.error;return Object(a.jsx)(s.a,{show:t,enter:"transition duration-100 ease-out",enterFrom:"transform scale-95 opacity-0",enterTo:"transform scale-100 opacity-100",leave:"transition duration-75 ease-out",leaveFrom:"transform scale-100 opacity-100",leaveTo:"transform scale-95 opacity-0",className:"mt-2",children:Object(a.jsx)("p",{className:"transition-all duration-200 text-sm text-red-600 dark:text-red-500",children:r})})}},416:function(e,t,r){"use strict";var s=r(21),a=r(153),i=r(60),l=r(51),c=r(415),n=r(413),d=r(1),o=r(45),j=r(2),u=["label","id","name","type","placeholder","error","value","gridClass","required","showPasswordButton","optional","hideBorders","textarea","setUnsavedChanges","withButton","disabled","rows","textClass","cols","info"];t.a=function(e){var t=e.label,r=e.id,x=e.name,b=void 0===x?"":x,m=e.type,h=void 0===m?"text":m,g=e.placeholder,v=e.error,f=(e.value,e.gridClass),p=e.required,O=e.showPasswordButton,y=void 0!==O&&O,N=e.optional,w=void 0!==N&&N,k=e.hideBorders,C=void 0!==k&&k,P=e.textarea,B=void 0!==P&&P,F=e.setUnsavedChanges,I=void 0===F?function(){}:F,S=e.withButton,T=e.disabled,_=e.rows,L=e.textClass,M=void 0===L?"sm:text-sm":L,R=e.cols,E=(e.info,Object(a.a)(e,u),"border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500"),A=Object(d.useState)(!1),q=Object(s.a)(A,2),D=q[0],G=q[1],V=Object(n.c)(b),U=Object(s.a)(V,3),Y=U[0],z=U[1],H=U[2].setValue,J=function(e){I(!0),H(e.target.value)};return Object(j.jsxs)("div",{className:f,children:[Object(j.jsxs)("div",{className:"flex justify-between",children:[Object(j.jsxs)("label",{htmlFor:b,className:"block dark:text-white text-sm font-medium text-gray-700",children:[t," ",p&&Object(j.jsx)("span",{className:"text-red-500 dark:text-red-400 font-medium text-base",children:"*"})]}),w&&Object(j.jsx)("span",{className:"text-sm text-gray-500",id:"email-optional",children:"Optional"})]}),B?Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"mt-1 relative rounded-md shadow-sm",children:[Object(j.jsx)("textarea",{rows:_,cols:R,autoFocus:!0,id:r,placeholder:g,onChange:J,className:"block border w-full pr-10 ".concat(v?E:""," ").concat(M," p-2 ").concat(C?"border-transparent":"dark:border-gray-700 border-gray-300"," rounded-md dark:bg-gray-900 transition-all  dark:text-white")}),Object(j.jsx)("div",{className:"flex items-center absolute transition-all duration-200 top-0 right-0 p-3 ",children:z.touched&&z.error&&Object(j.jsx)("div",{className:" pointer-events-none",children:Object(j.jsx)(l.d,{className:"h-5 w-5 text-red-500 dark:text-red-400","aria-hidden":"true"})})})]}),Object(j.jsx)(c.a,{show:Boolean(z.touched&&z.error),error:z.error})]}):Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"mt-1 relative rounded-md shadow-sm",children:[Object(j.jsx)("input",{disabled:T,id:r,autoFocus:!0,onChange:J,placeholder:g,type:y?D?"text":"password":h,className:"block border w-full pr-10 ".concat(v?E:""," sm:text-sm p-2 ").concat(C?"border-transparent ":"dark:border-gray-700 border-gray-300"," rounded-md dark:bg-gray-900 dark:text-white")}),Object(j.jsxs)("div",{className:"flex items-center absolute transition-all duration-200 inset-y-0 right-0 pr-3 ",children:[z.touched&&z.error&&Object(j.jsx)("div",{className:" pointer-events-none",children:Object(j.jsx)(l.d,{className:"h-5 w-5 text-red-500 dark:text-red-400","aria-hidden":"true"})}),y&&Y.value&&Object(j.jsx)("div",{className:"ml-2",onClick:function(){return G(!D)},children:D?Object(j.jsx)(o.k,{className:"h-5 w-5 text-gray-400 cursor-pointer hover:text-gray-500","aria-hidden":"true"}):Object(j.jsx)(o.j,{className:"h-5 w-5 text-gray-400 cursor-pointer hover:text-gray-500","aria-hidden":"true"})})]})]}),Object(j.jsxs)("div",{className:"flex mt-2 items-center justify-between",children:[Object(j.jsx)(i.a,{show:Boolean(z.touched&&z.error),enter:"transition duration-100 ease-out",enterFrom:"transform scale-95 opacity-0",enterTo:"transform scale-100 opacity-100",leave:"transition duration-75 ease-out",leaveFrom:"transform scale-100 opacity-100",leaveTo:"transform scale-95 opacity-0",children:Object(j.jsx)("p",{className:"transition-all duration-200 text-sm text-red-600 dark:text-red-500",id:"".concat(b||r,"-error"),children:z.error})}),!Boolean(z.touched&&z.error)&&Object(j.jsx)("div",{}),S&&!Boolean(z.touched&&z.error)&&Y.value.length>3?S:Object(j.jsx)("div",{className:""})]})]})]})}},419:function(e,t,r){"use strict";var s=r(1),a=r(60),i=r(458),l=r(36),c=r(33),n=r(2);t.a=function(e){var t=e.open,r=void 0!==t&&t,d=e.setOpen,o=e.children,j=e.header,u=e.onClose,x=e.disableBackdropClose,b=void 0===x||x,m=e.hideCloseBtn,h=void 0!==m&&m,g=e.fixedBottom;return Object(n.jsx)(a.a.Root,{show:r,as:s.Fragment,children:Object(n.jsx)(i.a,{as:"div",static:!0,style:{zIndex:9999},className:"fixed inset-0 overflow-y-auto",open:r,onClose:b?c.noop:u||d,children:Object(n.jsxs)("div",{className:"pb-20 flex items-end justify-center min-h-screen pt-4 px-4 text-center sm:block sm:p-0",children:[Object(n.jsx)(a.a.Child,{as:s.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:Object(n.jsx)(i.a.Overlay,{className:"fixed dark:bg-black inset-0 bg-gray-500 opacity-50 transition-opacity"})}),Object(n.jsx)("span",{className:"hidden sm:inline-block sm:align-middle sm:h-screen","aria-hidden":"true",children:"\u200b"}),Object(n.jsx)(a.a.Child,{as:s.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:Object(n.jsxs)("div",{className:"inline-block align-bottom  bg-white dark:bg-gray-900 rounded-lg px-4 pt-5  text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-top  sm:p-6 pb-4",children:[!h&&Object(n.jsx)("div",{className:"hidden sm:block absolute top-0 right-0 pt-6 pr-6",children:Object(n.jsxs)("button",{type:"button",className:"bg-white dark:bg-gray-900 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500",onClick:function(){return u?u():d(!1)},children:[Object(n.jsx)("span",{className:"sr-only",children:"Close"}),Object(n.jsx)(l.f,{className:"h-6 w-6","aria-hidden":"true"})]})}),Object(n.jsxs)("div",{children:[j&&Object(n.jsx)("div",{className:"modal-header divider dark:divider ",children:Object(n.jsx)("h3",{className:"dark:text-white text-gray-900 text-2xl font-semibold",children:j})}),o,g&&Object(n.jsx)("div",{className:"absolute dark:border-gray-800 border-t bg-white dark:bg-gray-900 bottom-0 mx-6 inset-x-0",children:g})]})]})})]})})})}},426:function(e,t,r){"use strict";var s=r(51),a=r(33),i=r(2);t.a=function(e){var t=e.errors;return Object(i.jsx)("div",{className:"rounded-md bg-red-50 dark:bg-gray-900 border dark:border-gray-700 border-transparent p-4",children:Object(i.jsxs)("div",{className:"flex",children:[Object(i.jsx)("div",{className:"flex-shrink-0",children:Object(i.jsx)(s.j,{className:"h-5 w-5 dark:text-red-300 text-red-400","aria-hidden":"true"})}),Object(i.jsxs)("div",{className:"ml-3",children:[Object(i.jsxs)("h3",{className:"text-sm font-medium text-red-800 dark:text-red-500",children:["There were ",t.length," errors with your submission"]}),Object(i.jsx)("div",{className:"mt-2 text-sm text-red-700 dark:text-red-400",children:Object(i.jsx)("ul",{className:"list-disc pl-5 space-y-1",children:Object(a.map)(t,(function(e,t){return Object(i.jsx)("li",{children:e},t)}))})})]})]})})}},434:function(e,t,r){"use strict";var s=r(2);t.a=function(){return Object(s.jsx)("div",{className:" flex m-4 justify-center items-center",children:Object(s.jsx)("div",{className:"animate-spin rounded-full h-24 w-24 border-t-2 border-b-2 border-pink-500"})})}},452:function(e,t,r){"use strict";var s=r(5),a=(r(1),r(2));t.a=function(e){var t=e.firstCol,r=e.secondCol,i=e.thirdCol,l=e.firstColClass,c=e.firstColStyles,n=e.thirdColClass,d=e.thirdColStyles;e.mainClass;return Object(a.jsxs)("div",{className:"flex-grow pt-24 w-full px-4 md:max-w-6xl lg:max-w-7xl sm:max-w-5xl mx-auto xl:px-8 lg:flex relative",children:[Object(a.jsxs)("div",{className:"flex-1 px-6 sm:px-4 lg:px-0  min-w-0 bg-gray-100 dark:bg-gray-900 xl:flex",children:[Object(a.jsx)("div",{style:Object(s.a)({},c),className:"".concat(l,"  dark:bg-gray-900 xl:flex-shrink-0 xl:w-64 bg-gray-100"),children:Object(a.jsx)("div",{className:"h-full py-6 ",children:Object(a.jsx)("div",{className:"h-full  relative",style:{minHeight:"12rem"},children:t})})}),Object(a.jsx)("div",{className:"bg-gray-100 dark:bg-gray-900 lg:min-w-0 lg:pl-6 pl-0 lg:flex-1 ",children:Object(a.jsx)("div",{className:"h-full py-6 px-0 lg:px-6 xl:px-8",children:Object(a.jsx)("div",{className:"relative h-full ",style:{},children:r})})})]}),Object(a.jsx)("div",{style:Object(s.a)({},d),className:"".concat(n," bg-gray-100 dark:bg-gray-900 px-4 lg:px-0 lg:flex-shrink-0 "),children:Object(a.jsx)("div",{className:"h-full pl-0 lg:pl-6  py-6 ",children:Object(a.jsx)("div",{className:"h-full relative",style:{minHeight:"16rem"},children:i})})})]})}},453:function(e,t,r){"use strict";var s=r(8),a=r(2);t.a=function(e){var t=e.extraItems;return Object(a.jsx)("div",{className:"rounded-lg  border dark:border-gray-700  border-gray-200  overflow-hidden lg:max-w-xs bg-white dark:bg-gray-800 ",children:Object(a.jsxs)("div",{className:"",children:[Object(a.jsxs)("div",{className:"p-4 flex flex-col gap-y-3 text-xs font-medium text-link",children:[Object(a.jsx)("a",{href:s.a.groups(),className:"hover:underline cursor-pointer",children:"Groups"}),Object(a.jsxs)("div",{className:" cursor-pointer flex items-center justify-between",children:[Object(a.jsx)("p",{className:"hover:underline ",children:"Events"}),Object(a.jsx)("div",{className:"text-gray-900 dark:text-gray-500 text-base hover:bg-gray-700 rounded-full h-6 transition-all w-6 flex items-center justify-center",children:"+"})]}),Object(a.jsx)("div",{className:"hover:underline cursor-pointer",children:"Followed Hastags"}),t&&t.length>0&&t.map((function(e){return Object(a.jsx)("a",{href:e.link,className:"hover:underline cursor-pointer",children:e.name},e.name)}))]}),Object(a.jsx)("div",{className:"flex items-center cursor-pointer hover:bg-gray-200 transition-all dark:hover:bg-gray-700 gap-y-2  justify-center px-4 border-t py-4  text-sm font-medium text-gray-500 dark:text-gray-500 border-gray-200 dark:border-gray-700",children:Object(a.jsx)("p",{children:"Discover more"})})]})})}},456:function(e,t,r){"use strict";var s=r(8),a=r(156),i=r(11),l=r(2);t.a=function(e){var t,r,c=e.user,n=e.content,d=void 0===n?null:n,o=Object(a.a)(c).isBusiness,j=Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("p",{className:"text-sm font-medium dark:text-white text-gray-500 ",children:o?null===c||void 0===c||null===(t=c.business)||void 0===t?void 0:t.name:null===c||void 0===c||null===(r=c.company)||void 0===r?void 0:r.jobTitle}),Object(l.jsx)("a",{className:"dark:text-white text-gray-900 text-lg font-medium",href:s.a.getProfile(c),children:Object(l.jsx)("div",{className:"mt-2",children:"View full profile"})})]});return Object(l.jsxs)("div",{className:"plain-card",children:[Object(l.jsx)("img",{alt:"",src:(null===c||void 0===c?void 0:c.coverPicture)?null===c||void 0===c?void 0:c.coverPicture:"https://source.unsplash.com/1600x900/?nature,water",className:"w-full lg:h-28 sm:h-24 object-cover h-20"}),Object(l.jsx)("div",{className:"flex justify-center -mt-8",children:Object(l.jsx)("img",{alt:"",src:c.profilePicture?c.profilePicture:i.s,className:"rounded-full border-solid lg:h-16 lg:w-16 h-12 w-12 dark:border-gray-800 border-white  border-2 -mt-3"})}),Object(l.jsxs)("div",{className:"text-center ".concat(d?"":"px-3 pb-6 pt-2"),children:[Object(l.jsx)("a",{href:s.a.getProfile(c,!0),className:"dark:text-white cursor-pointer text-gray-900 text-base font-bold ",children:c.fullName}),d||j]})]})}},524:function(e,t,r){"use strict";var s=r(21),a=r(32),i=r(152),l=r(74),c=r(416),n=r(419),d=r(8),o=r(92),j=r(168),u=r(413),x=r(1),b=r(34),m=r(2),h=function(e){var t,r=e.open,s=e.setOpen,i=Object(o.b)().setNotification,h=Object(j.b)().setNewPostAdded,g=Object(b.useMutation)(l.b,{onSuccess:function(e){var t=e.data.data;h(!0),s(!1),i({show:!0,title:"New post added.",buttonText:"View",buttonUrl:d.a.postById(t)})}}),v=g.mutate,f=g.isLoading,p=g.isError,O=g.error,y=Object(x.useRef)();return Object(m.jsx)(n.a,{setOpen:s,header:"Create a post",open:r,children:Object(m.jsx)("div",{className:" min-w-132 min-h-56 max-h-132 overflow-y-auto",children:Object(m.jsx)(u.b,{innerRef:y,initialValues:{text:""},onSubmit:function(e){var t={postData:{text:e.text}};v(t)},children:Object(m.jsxs)(u.a,{children:[Object(m.jsx)(c.a,{gridClass:"hideBorders",hideBorders:!0,textClass:"text-sm text-gray-700 dark:text-gray-100 sm:text-lg",placeholder:"What do you want to talk about?",rows:10,name:"text",id:"text",textarea:!0}),Object(m.jsx)("div",{className:"mt-5 m-1 sm:mt-4 flex justify-end  items-center",children:Object(m.jsx)(a.a,{gradient:!0,loading:f,disabled:(null===y||void 0===y||null===(t=y.current)||void 0===t?void 0:t.values.text.length)<=0,type:"submit",label:"Post",size:"lg"})}),p&&Object(m.jsx)("p",{className:"text-red-500 text-sm",children:O})]})})})})},g=r(90),v=r(65),f=r(468),p=r(165),O=r(11);t.a=function(e){var t=e.profilePicture,r=e.customButtons,l=void 0===r?null:r,c=e.placeholder,n=void 0===c?"Start a post":c,d=e.disabled,o=Object(x.useState)(!1),j=Object(s.a)(o,2),u=j[0],b=j[1],y=Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(a.a,{gradient:!0,invert:!0,Icon:f.b,label:"Photo"}),Object(m.jsx)(a.a,{gradient:!0,Icon:v.b,bgColor:"blue",invert:!0,label:"Video"}),Object(m.jsx)(a.a,{gradient:!0,Icon:g.a,invert:!0,bgColor:"blue",label:"Event"}),Object(m.jsx)(a.a,{gradient:!0,Icon:p.b,invert:!0,bgColor:"blue",label:"Write articles"})]});return Object(m.jsxs)(m.Fragment,{children:[!d&&Object(m.jsx)(h,{open:u,setOpen:b}),Object(m.jsx)(i.a,{content:Object(m.jsxs)("div",{className:"flex flex-col space-y-8",children:[Object(m.jsxs)("div",{className:"flex w-full",children:[Object(m.jsx)("img",{src:t||O.s,alt:"13RMS",className:"sm:h-14 h-12 w-12 sm:w-14  border-gradient border-transparent border-2 rounded-full"}),Object(m.jsx)("div",{onClick:function(){return b(!0)},className:"cursor-pointer sm:h-14 h-12  transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-700 ml-4 w-full rounded-full bg-white flex items-center text-gray-500 dark:text-gray-400 justify-start px-4 text-left dark:bg-gray-800 border border-gray-400 dark:border-gray-700",children:n})]}),Object(m.jsx)("div",{className:"flex items-center justify-between",children:l||y})]})})]})}},703:function(e,t,r){"use strict";r.r(t);var s=r(21),a=r(154),i=r(74),l=r.p+"static/media/no-posts.25d46d19.svg",c=r(32),n=r(152),d=r(62),o=r(453),j=r(86),u=r(434),x=r(456),b=r(8),m=r(156),h=r(421),g=r.n(h),v=r(524),f=r(158),p=r(452),O=r(119),y=r(51),N=r(426),w=r(419),k=r(33),C=r(1),P=r(34),B=r(11),F=r(2),I=function(e){var t=e.open,r=e.setOpen,l=e.followingList,n=e.group,d=e.refetchGroup,o=Object(C.useState)([]),j=Object(s.a)(o,2),x=j[0],b=j[1],h={users:l},g=Object(P.useQuery)("user-list",(function(){return Object(a.u)(h)})),v=g.data,f=g.isFetched,p=g.isLoading,I=g.isSuccess,S=Object(P.useMutation)(i.s,{onSuccess:function(){r(!1),M(),d()}}),T=S.mutate,_=S.isLoading,L=S.error,M=function(){b([])},R=!p&&f&&I?v.data.data.users:[],E=Object(C.useState)([]),A=Object(s.a)(E,2),q=A[0],D=A[1];Object(C.useEffect)((function(){R&&R.length>0&&D(Object(O.a)(R))}),[R]);var G=Object(m.a)().getType;return Object(F.jsx)(w.a,{fixedBottom:Object(F.jsx)("div",{children:!p&&f&&Object(F.jsx)("div",{className:"flex items-center justify-end  p-4",children:Object(F.jsx)(c.a,{label:"Invite ".concat(x.length>0?x.length:""),size:"lg",loading:_,loadingText:"Sending invites",onClick:function(){return function(){var e=x.map((function(e){return e._id}));T({targetIdArray:e,groupId:n._id})}()},disabled:x.length<=0,gradient:!0,rounded:"rounded-full"})})}),header:"Invite connections",open:t,setOpen:r,children:Object(F.jsxs)("div",{className:"lg:min-w-160 min-w-132 max-w-256",children:[!p&&f?Object(F.jsxs)("div",{children:[Object(F.jsx)("div",{className:"w-full",children:Object(F.jsx)("input",{type:"search",placeholder:"Search by name",className:"w-full py-2 px-4 outline-none border-none focus:ring-1 text-gray-600 dark:text-gray-400 text-sm focus:ring-yellow-500 bg-transparent h-full",onChange:function(e){var t=e.target.value.toLowerCase(),r=R.filter((function(e){return e.firstName.toLowerCase().includes(t)||e.lastName.toLowerCase().includes(t)||e.fullName.toLowerCase().includes(t)}));D(Object(O.a)(r))}})}),Object(F.jsxs)("div",{className:"grid grid-cols-5 p-2 border-t border-gray-200 dark:border-gray-800",children:[Object(F.jsx)("div",{className:"col-span-3 min-h-136 pb-12  max-h-136 flex flex-col  overflow-y-scroll overflow-x-hidden ",children:q.map((function(e){var t,r,s,a,i=G(e),l=i.isBusiness,c=i.isPersonal,d=Boolean(n.members.find((function(t){return t._id===e._id}))),o=Boolean(n.requests.find((function(t){return t===e._id})));return Object(F.jsxs)("div",{className:"p-2 py-4 relative cursor-pointer border-b border-gray-200 dark:border-gray-700 ".concat(d||o?"dark:bg-gray-800 opacity-75 bg-gray-100 pointer-events-none":"dark:hover:bg-gray-800 hover:bg-gray-100","  transition-all"),onClick:function(){return function(e){-1!==Object(k.findIndex)(x,["_id",e._id])?Object(k.remove)(x,["_id",e._id]):x.unshift(e),b(Object(O.a)(x))}(e)},children:[Object(F.jsxs)("div",{className:"flex  cursor-pointer items-center ",children:[Object(F.jsx)("input",{id:"users",name:"candidates",checked:Boolean(x.find((function(t){return t._id===e._id}))),type:"checkbox",className:"focus:ring-yellow-500 mr-4 h-5 w-5 text-yellow-600 border-gray-300 rounded"}),Object(F.jsx)("img",{src:e.profilePicture||B.s,alt:"",className:"rounded-full mr-2 h-12 w-12"}),Object(F.jsxs)("div",{children:[Object(F.jsx)("h4",{className:"dark:text-white text-gray-900",children:e.fullName}),Object(F.jsx)("p",{className:"dark:text-gray-500 text-gray-600 text-sm",children:l?null===e||void 0===e||null===(t=e.business)||void 0===t?void 0:t.name:c?null===e||void 0===e||null===(r=e.company)||void 0===r?void 0:r.companyName:(null===e||void 0===e||null===(s=e.background)||void 0===s?void 0:s.education)&&(null===e||void 0===e||null===(a=e.background)||void 0===a?void 0:a.education[0].name)})]})]}),(d||o)&&Object(F.jsx)("p",{className:"absolute text-xs italic dark:text-gray-500 text-gray-400 bottom-1 right-2 ",children:d?"Already member":"Request sent"})]},e._id)}))}),Object(F.jsxs)("div",{className:"col-span-2 ml-2",children:[Object(F.jsxs)("div",{className:"border-b text-sm border-gray-200 dark:border-gray-800  text-gray-500 dark:text-gray-400 p-4 flex items-center justify-between",children:[Object(F.jsxs)("p",{children:[x.length," selected"]}),Object(F.jsx)("button",{onClick:M,className:"font-medium dark:text-gray-300",children:"Unselect all"})]}),Object(F.jsx)("div",{className:"p-4 pr-0 flex flex-col gap-y-4 max-w-56 min-w-56  max-h-136 pb-20 overflow-y-scroll mx-2",children:x&&x.length>0&&x.map((function(e){return Object(F.jsxs)("div",{className:"flex  items-center  justify-between",children:[Object(F.jsxs)("div",{className:"flex items-center",children:[Object(F.jsx)("img",{src:e.profilePicture||B.s,alt:"",className:"rounded-full mr-2 h-8 w-8"}),Object(F.jsx)("h4",{className:"dark:text-white",children:e.fullName})]}),Object(F.jsx)("div",{onClick:function(){return t=e._id,Object(k.remove)(x,["_id",t]),void b(Object(O.a)(x));var t},className:"dark:hover:bg-gray-700 transition-all rounded-full p-0.5",children:Object(F.jsx)(y.k,{className:"cursor-pointer h-5 w-5   dark:text-gray-400","aria-hidden":"true"})})]})}))})]})]})]}):Object(F.jsx)("div",{className:"flex items-center justify-center",children:Object(F.jsx)(u.a,{})}),Object(F.jsx)("div",{children:L&&Object(F.jsx)(N.a,{errors:[L.toString()]})})]})})},S=r(65),T=r(480),_=r(468),L=r(14),M=function(e){var t=e.userId,r=e.groupId,a=Object(C.useState)(!1),l=Object(s.a)(a,2),n=l[0],d=l[1],o=Object(L.g)(),j=Object(P.useMutation)(i.k,{onSuccess:function(){o.push(b.a.groups())}}).mutate;return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(w.a,{header:"Confirm",open:n,setOpen:d,children:Object(F.jsxs)("div",{className:" ",children:[Object(F.jsx)("p",{className:"dark:text-gray-400 text-gray-500 text-lg",children:"Are you sure you want to exit this group?"}),Object(F.jsx)("div",{className:"flex items-center p-4 justify-end",children:Object(F.jsx)(c.a,{label:"Confirm",gradient:!0,onClick:function(){return j({targetId:t,groupId:r})}})})]})}),Object(F.jsx)("div",{className:"rounded-lg border dark:border-gray-700  border-gray-200  overflow-hidden lg:max-w-xs bg-white dark:bg-gray-800 ",children:Object(F.jsx)("h1",{onClick:function(){return d(!0)},className:"text-center hover:bg-red-500 hover:text-white rounded-lg p-2 cursor-pointer text-red-500",children:"Exit group"})})]})};t.default=function(e){var t,r,i,h=e.userData,O=Object(L.i)().groupId,y=Object(L.g)(),N=function(){var e,t=!1;O?t=!(!h||void 0===(null===h||void 0===h?void 0:h.groups)||0===(null===h||void 0===h||null===(e=h.groups)||void 0===e?void 0:e.length))&&!!h.groups.includes(O):t=!1;return t}();Object(C.useEffect)((function(){N||y.push(b.a.FEED)}),[O,N]);var w=Object(P.useQuery)("group-data",(function(){return Object(a.f)(O)})),k=w.data,R=w.isLoading,E=w.isFetched,A=w.refetch,q=E&&!R&&k.data.data,D=Object(m.a)(h).getType,G=Object(C.useState)(!1),V=Object(s.a)(G,2),U=V[0],Y=V[1];if(R&&!E)return Object(F.jsx)(j.a,{});var z=(null===q||void 0===q||null===(t=q.createdBy)||void 0===t?void 0:t.toString())===h._id,H=null===q||void 0===q||null===(r=q.admin)||void 0===r?void 0:r.includes(h._id),J=z||H;return N&&Object(F.jsxs)("div",{className:"relative  dark:bg-gray-900 bg-gray-100 min-h-screen ",children:[Object(F.jsx)(f.a,{userData:h}),Object(F.jsx)(d.a,{pageTitle:"Post | Feed | 13RMS"}),J&&Object(F.jsx)(I,{refetchGroup:A,group:q,followingList:h.following,open:U,setOpen:Y}),Object(F.jsx)("div",{className:"h-auto pt-4 relative flow-root  transition-all duration-500 ",children:Object(F.jsx)(p.a,{firstColClass:"   max-h-152 lg:block  xl:block w-full ",firstCol:Object(F.jsx)("div",{className:"flex flex-col gap-y-12",children:E&&!R?Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(x.a,{content:Object(F.jsx)("div",{children:Object(F.jsxs)("div",{children:[Object(F.jsx)("div",{className:"ml-2 flex-shrink-0 items-center justify-center flex",children:Object(F.jsx)("p",{className:"px-2 inline-flex text-sm items-center justify-center leading-5 font-semibold rounded-md bg-gray-100 text-gray-800 dark:bg-gray-600 dark:text-gray-200",children:z?"Owner":H?"Admin":"Member"})}),Object(F.jsxs)("p",{className:"mb-4 text-gray-600 dark:text-gray-400 text-sm tracking-wide mt-1",children:["Group created:"," ",g()(q.createdOn).format("MMM YYYY")]}),J&&Object(F.jsxs)("div",{className:"flex border-t py-2 text-xs font-medium text-gray-500 dark:text-gray-500 border-gray-200 dark:border-gray-700 transition-all  item-center px-4 cursor-pointer justify-between",children:[Object(F.jsx)("h6",{className:"font-medium ",children:"Requests to join"}),Object(F.jsx)("a",{href:b.a.followers(),className:"hover:underline text-link cursor-pointer font-semibold",children:(null===q||void 0===q||null===(i=q.requests)||void 0===i?void 0:i.length)||0})]})]})}),user:h}),Object(F.jsx)(o.a,{}),!z&&Object(F.jsx)(M,{groupId:O,userId:h._id})]}):Object(F.jsx)(u.a,{})}),secondCol:Object(F.jsx)("div",{className:"",children:R&&!E?Object(F.jsx)(u.a,{}):Object(F.jsxs)("div",{className:"flex gap-y-12 mx-auto lg:max-w-2xl  flex-col",children:[Object(F.jsxs)("div",{className:"rounded-lg border dark:border-gray-700  border-gray-200 overflow-hidden  bg-white dark:bg-gray-800",children:[Object(F.jsx)("img",{alt:"",src:(null===q||void 0===q?void 0:q.coverPicture)?null===q||void 0===q?void 0:q.coverPicture:"https://source.unsplash.com/1600x900/?nature,water",className:"w-full lg:h-28 sm:h-24 object-cover h-20"}),Object(F.jsx)("div",{className:"flex justify-start mx-8 -mt-5",children:Object(F.jsx)("img",{alt:"",src:q.profilePicture?q.profilePicture:B.s,className:" border-solid lg:h-16 lg:w-16 h-12 w-12  border-white border-2 -mt-3"})}),Object(F.jsx)("div",{className:"text-left mx-8 mt-2 pb-6 pt-2",children:Object(F.jsx)("h3",{className:"dark:text-white text-gray-900 text-2xl font-medium ",children:q.groupName})})]}),Object(F.jsx)(v.a,{disabled:!0,placeholder:"Start a post in this group",customButtons:Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(c.a,{gradient:!0,invert:!0,Icon:_.b,label:"Photo"}),Object(F.jsx)(c.a,{gradient:!0,Icon:S.b,invert:!0,label:"Video"}),Object(F.jsx)(c.a,{gradient:!0,Icon:T.b,invert:!0,label:"Poll"})]}),profilePicture:null===h||void 0===h?void 0:h.profilePicture}),Object(F.jsx)(n.a,{content:Object(F.jsxs)("div",{className:"m-4 text-center flex items-center justify-center flex-col",children:[Object(F.jsx)("img",{src:l,alt:"",className:"h-28 sm:h-32 lg:h-36 xl:h-40 w-full"}),Object(F.jsx)("h3",{className:"mt-4 text-xl font-medium dark:text-gray-300 text-gray-900",children:"Create the first post"}),Object(F.jsx)("p",{className:"mt-1 text-base text-gray-500",children:"Get the conversation going. Be the first to post in this group!"})]})})]})}),thirdColClass:"lg:block",thirdCol:Object(F.jsxs)("div",{className:"space-y-12 lg:max-w-84 max-w-sm",children:[Object(F.jsx)(n.a,{cardTitle:"".concat(q.members.length," member").concat(q.members.length>1?"s":""),content:Object(F.jsxs)("div",{className:"mt-4 flex-shrink-0 sm:mt-0 ",children:[Object(F.jsx)("div",{className:"flex overflow-hidden -space-x-2",children:q.members.slice(0,4).map((function(e){return Object(F.jsx)("img",{className:"inline-block lg:h-12 lg:w-12 h-12 w-12 rounded-full ring-2 dark:ring-transparent ring-white",src:e.profilePicture,alt:""},e._id)}))}),J&&Object(F.jsx)(c.a,{onClick:function(){return Y(!0)},gradient:!0,rounded:"rounded-full",className:"mt-4",label:"Invite connections"})]})}),Object(F.jsx)(n.a,{cardTitle:"About this group",content:Object(F.jsx)("p",{className:"text-gray-900 dark:text-gray-200 line-clamp ",children:q.groupDescription})}),q.groupRules&&Object(F.jsx)(n.a,{cardTitle:"Group rules",content:Object(F.jsx)("p",{className:"text-gray-900 dark:text-gray-200 line-clamp ",children:q.groupRules})}),Object(F.jsx)(n.a,{cardTitle:"Admin",content:Object(F.jsx)("div",{children:q.admin.map((function(e){var t,r,s,a,i=D(e),l=i.isBusiness,c=i.isPersonal;return Object(F.jsxs)("div",{className:"flex ",children:[Object(F.jsx)("div",{className:"mr-4 mt-2 flex-shrink-0",children:Object(F.jsx)("img",{alt:"",src:e.profilePicture?e.profilePicture:B.s,className:"rounded-full border-solid lg:h-12 lg:w-12 h-12 w-12  border-white border-2 -mt-3"})}),Object(F.jsxs)("div",{children:[Object(F.jsx)("a",{href:b.a.getProfile(e),className:"text-base  dark:text-white font-semibold",children:e.fullName}),Object(F.jsx)("p",{className:"mt-1 text-sm dark:text-gray-500",children:l?null===e||void 0===e||null===(t=e.business)||void 0===t?void 0:t.name:c?null===e||void 0===e||null===(r=e.company)||void 0===r?void 0:r.companyName:(null===e||void 0===e||null===(s=e.background)||void 0===s?void 0:s.education)&&(null===e||void 0===e||null===(a=e.background)||void 0===a?void 0:a.education[0].name)})]})]})}))})})]})})})]})}}}]);
//# sourceMappingURL=31.34df947e.chunk.js.map