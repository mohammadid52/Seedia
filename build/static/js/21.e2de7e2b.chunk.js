(this.webpackJsonp13rms=this.webpackJsonp13rms||[]).push([[21],{487:function(e,t,a){"use strict";var r=a(1),n=a(54),i=a(552),s=a(39),c=a(25),l=a(2);t.a=function(e){var t=e.open,a=void 0!==t&&t,o=e.setOpen,d=e.children,u=e.header,j=e.onClose,b=e.disableBackdropClose,m=void 0===b||b,x=e.hideCloseBtn,v=void 0!==x&&x,g=e.fixedBottom,h=e.disablePadding,p=void 0!==h&&h;return Object(l.jsx)(n.a.Root,{show:a,as:r.Fragment,children:Object(l.jsx)(i.a,{as:"div",static:!0,style:{zIndex:9999},className:"fixed inset-0 overflow-y-auto",open:a,onClose:m?c.noop:j||o,children:Object(l.jsxs)("div",{className:"pb-20 flex items-end justify-center min-h-screen pt-4 px-4 text-center sm:block sm:p-0",children:[Object(l.jsx)(n.a.Child,{as:r.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:Object(l.jsx)(i.a.Overlay,{className:"fixed dark:bg-black inset-0 bg-gray-500 opacity-50 transition-opacity"})}),Object(l.jsx)("span",{className:"hidden sm:inline-block sm:align-middle sm:h-screen","aria-hidden":"true",children:"\u200b"}),Object(l.jsx)(n.a.Child,{as:r.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:Object(l.jsxs)("div",{className:"inline-block overflow-visible align-bottom  bg-white dark:bg-gray-900 rounded-lg ".concat(p?"":"px-4 sm:p-6"," pt-5  text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-top   pb-4"),children:[!v&&Object(l.jsx)("div",{className:"hidden sm:block absolute top-0 right-0 pt-6 pr-6",children:Object(l.jsxs)("button",{type:"button",className:"bg-white dark:bg-gray-900 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500",onClick:function(){return j?j():o(!1)},children:[Object(l.jsx)("span",{className:"sr-only",children:"Close"}),Object(l.jsx)(s.f,{className:"h-6 w-6","aria-hidden":"true"})]})}),Object(l.jsxs)("div",{className:"modal-body",children:[u&&Object(l.jsx)("div",{className:"modal-header divider dark:divider px-2",children:Object(l.jsx)("h3",{className:"dark:text-white text-gray-900 text-xl font-normal",children:u})}),Object(l.jsx)("div",{className:"",children:d}),g&&Object(l.jsx)("div",{className:"absolute dark:border-gray-800 border-t bg-white dark:bg-gray-900 bottom-0 mx-6 inset-x-0",children:g})]})]})})]})})})}},508:function(e,t,a){"use strict";t.a=a.p+"static/media/placeholder.c69d1bed.png"},517:function(e,t,a){"use strict";var r=a(8),n=a(189),i=a(15),s=a(2);t.a=function(e){var t,a,c=e.user,l=e.content,o=void 0===l?null:l,d=Object(n.a)(c).isBusiness,u=Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("p",{className:"text-sm font-medium dark:text-white text-gray-500 ",children:d?null===c||void 0===c||null===(t=c.business)||void 0===t?void 0:t.name:null===c||void 0===c||null===(a=c.company)||void 0===a?void 0:a.jobTitle}),Object(s.jsx)("a",{className:"dark:text-white text-gray-900 text-lg font-medium",href:r.a.getProfile(c),children:Object(s.jsx)("div",{className:"mt-2",children:"View full profile"})})]});return Object(s.jsxs)("div",{className:"plain-card",children:[Object(s.jsx)("img",{alt:"",src:(null===c||void 0===c?void 0:c.coverPicture)?null===c||void 0===c?void 0:c.coverPicture:"https://source.unsplash.com/1600x900/?nature,water",className:"w-full lg:h-28 sm:h-24 object-cover h-20"}),Object(s.jsx)("div",{className:"flex justify-center -mt-8",children:Object(s.jsx)("img",{alt:"",src:c.profilePicture?c.profilePicture:i.s,className:"rounded-full  border-gradient border-transparent  lg:h-16 lg:w-16 h-12 w-12 dark:border-gray-800 border-white  border-2 -mt-3"})}),Object(s.jsxs)("div",{className:"text-center ".concat(o?"":"px-3 pb-6 pt-2"),children:[Object(s.jsx)("a",{href:r.a.getProfile(c,!0),className:"dark:text-white cursor-pointer text-gray-900 text-base font-bold ",children:c.fullName}),o||u]})]})}},524:function(e,t,a){"use strict";var r=a(8),n=a(35),i=a(117),s=a(2);t.a=function(e){var t,a=e.extraItems,c=Object(n.useQuery)("short-event-names",(function(){return Object(i.d)(!0)})),l=c.isFetched,o=c.isLoading,d=c.data,u=l&&!o?null===d||void 0===d||null===(t=d.data)||void 0===t?void 0:t.data:[];return Object(s.jsx)("div",{className:"rounded-lg  border dark:border-gray-700  border-gray-200  overflow-hidden lg:max-w-xs bg-white dark:bg-gray-800 ",children:Object(s.jsxs)("div",{className:"",children:[Object(s.jsxs)("div",{className:"p-4 flex flex-col gap-y-3 text-xs font-medium text-link",children:[Object(s.jsx)("a",{href:r.a.groups(),className:"hover:underline cursor-pointer",children:"Groups"}),Object(s.jsxs)("div",{className:"flex flex-col",children:[Object(s.jsxs)("div",{className:" cursor-pointer flex  items-center justify-between",children:[Object(s.jsx)("div",{className:"hover:underline ",children:"Events"}),Object(s.jsx)("div",{className:"text-gray-900 dark:text-gray-500 text-base hover:bg-gray-700 rounded-full h-6 transition-all w-6 flex items-center justify-center",children:"+"})]}),u&&u.length>0&&u.map((function(e){return Object(s.jsx)("a",{href:r.a.viewEvent(e._id),className:"py-2 text-xs font-medium text-gray-500 dark:text-gray-500 hover:underline cursor-pointer",children:e.eventName})}))]}),Object(s.jsx)("div",{className:"hover:underline cursor-pointer",children:"Followed Hastags"}),a&&a.length>0&&a.map((function(e){return Object(s.jsx)("a",{href:e.link,className:"hover:underline cursor-pointer",children:e.name},e.name)}))]}),Object(s.jsx)("div",{className:"flex items-center cursor-pointer hover:bg-gray-200 transition-all dark:hover:bg-gray-700 gap-y-2  justify-center px-4 border-t py-4  text-sm font-medium text-gray-500 dark:text-gray-500 border-gray-200 dark:border-gray-700",children:Object(s.jsx)("p",{children:"Discover more"})})]})})}},525:function(e,t,a){"use strict";var r=a(10),n=a(12),i=a(60),s=a(34),c=a(487),l=a(118),o=a(8),d=a(61),u=a(196),j=a(57),b=a(1),m=a(35),x=a(2);t.a=function(e){var t=e.open,a=e.setOpen,v=e.isPhoto,g=void 0===v||v,h=e.postingIn,p=void 0===h?"general":h,f=e.customInId,O=Object(d.b)().setNotification,y=Object(u.b)(),N=y.setPosts,w=y.posts,k=Object(m.useMutation)(i.b,{onSuccess:function(e){var t=e.data.data;w.unshift(t),N(Object(n.a)(w)),a(!1),O({show:!0,title:"New post added.",buttonText:"View",buttonUrl:o.a.postById(t.postUrl)})}}),C=k.mutate,I=k.isLoading,P=k.isError,S=k.error,D=Object(b.useState)(null),L=Object(r.a)(D,2),T=L[0],_=L[1],R=Object(m.useMutation)(i.z,{onSuccess:function(e){var t,a,r={postData:{postType:"withPhoto",text:A||"",postedIn:p,customInId:f,links:[{id:Object(j.a)(12),url:null===e||void 0===e||null===(t=e.data)||void 0===t||null===(a=t.data)||void 0===a?void 0:a.location,type:g?"image":"video"}]}};C(r)}}),E=Object(b.useRef)(),F=Object(b.useState)(!1),M=Object(r.a)(F,2),z=M[0],B=M[1],U=Object(b.useState)(""),q=Object(r.a)(U,2),A=q[0],V=q[1];return Object(x.jsxs)(c.a,{disablePadding:!0,setOpen:a,header:"Edit your ".concat(g?"photo":"video"),open:t,children:[Object(x.jsxs)("div",{className:" min-w-132 max-w-132 min-h-56 max-h-132 flex items-center justify-center overflow-y-auto",children:[T?Object(x.jsxs)("div",{className:"",children:[z?Object(x.jsxs)("div",{className:"px-12",children:[Object(x.jsx)("h4",{className:"mb-1 text-gray-600 dark:text-gray-500",children:"Alt text"}),Object(x.jsx)("p",{className:"dark:text-gray-700 text-gray-400 mb-2",children:"Alt text describes images for people who have trouble seeing them. If you don\u2019t add alt text, it may be automatically generated after you post. You can edit it anytime."}),Object(x.jsx)(l.a,{value:A,onChange:function(e){var t=e.target.value;V(t)},textarea:!0,rows:6}),Object(x.jsxs)("div",{className:"mt-5 gap-x-4 px-4 m-1 sm:mt-4 flex justify-end  items-center",children:[Object(x.jsx)(s.a,{gradient:!0,rounded:"rounded-full",onClick:function(){V(""),B(!1)},invert:!0,label:"Cancel",size:"sm"}),Object(x.jsx)(s.a,{gradient:!0,rounded:"rounded-full",label:"Save",onClick:function(){B(!1)},size:"sm"})]})]}):Object(x.jsx)("div",{children:g?Object(x.jsx)("img",{className:"w-full",src:URL.createObjectURL(T),alt:""}):Object(x.jsx)("video",{controls:!0,className:"w-full",controlsList:"nodownload",src:URL.createObjectURL(T)})}),Object(x.jsx)("div",{className:"absolute bottom-5 left-5 pt-4 mb-2 pl-4",children:Object(x.jsx)(s.a,{onClick:function(){return B(!z)},invert:!z,label:"Alt text"})})]}):Object(x.jsx)(s.a,{onClick:function(){var e;return null===E||void 0===E||null===(e=E.current)||void 0===e?void 0:e.click()},label:"Select ".concat(g?"image":"video"," to share"),gradient:!0,invert:!0,size:"lg"}),Object(x.jsx)("input",{ref:E,className:"hidden",type:"file",onChange:function(e){var t=e.target.files[0];_(t)},accept:g?"image/*":"video/*"})]}),Object(x.jsxs)("div",{className:"mt-5 border-t border-gray-200 dark:border-gray-700 pt-4 gap-x-4 px-4 m-1 sm:mt-4 flex justify-end  items-center",children:[Object(x.jsx)(s.a,{gradient:!0,rounded:"rounded-full",onClick:function(){_(null),a(!1)},invert:!0,label:"Cancel",size:"lg"}),Object(x.jsx)(s.a,{gradient:!0,rounded:"rounded-full",loading:I||R.isLoading,label:"Done",onClick:function(e){e.preventDefault();var t=new FormData;t.append("image",T),R.mutate(t)},size:"lg"})]}),P&&Object(x.jsx)("p",{className:"text-red-500 text-sm",children:S})]})}},535:function(e,t,a){"use strict";var r=a(33),n=a.n(r),i=a(55),s=a(3),c=a(10),l=a(60),o=a(508),d=a(190),u=a(34),j=a(104),b=a(198),m=a(487),x=a(8),v=a(61),g=a(44),h=a(25),p=a(1),f=a(29),O=a(35),y=a(15),N=a(37),w=a(90),k=a(2);t.a=function(e){var t=e.open,a=e.setOpen,r=e.eventData,C=e.fullName,I=void 0===C?"":C,P=w.a({eventName:w.c().required("Event Name is required").min(10).max(150),eventDescription:w.c().required("Event Description is required").min(10).max(600)}),S={eventName:(null===r||void 0===r?void 0:r.eventName)||"",eventDescription:(null===r||void 0===r?void 0:r.eventDescription)||"",startDate:(null===r||void 0===r?void 0:r.startDate)||new Date,endDate:(null===r||void 0===r?void 0:r.endDate)||new Date,startTime:(null===r||void 0===r?void 0:r.startTime)||"",endTime:(null===r||void 0===r?void 0:r.endTime)||"",timezone:(null===r||void 0===r?void 0:r.timezone)||""},D=Object(p.useRef)(),L=Object(v.b)().setNotification,T=Object(O.useMutation)(l.b),_=Object(O.useMutation)(l.f,{onSuccess:function(e){var t=e.data.message,a=e.data.data;L({show:!0,title:t,buttonText:"View",buttonUrl:x.a.viewEvent(a)}),T.mutate({postData:{text:"".concat(I," has organized an event."),postType:"event",customInId:a}})}}),R=_.mutate,E=_.isLoading,F=_.isError,M=_.error,z=Object(p.useState)(null),B=Object(c.a)(z,2),U=B[0],q=B[1],A=Object(O.useMutation)(l.A,{onSuccess:function(e,t){if(U){if(e.data.data&&e.data.data.length){var r,n,i=Object(h.map)(e.data.data,(function(e){return e}));R(Object(s.a)(Object(s.a)({},U),{},{coverPhoto:null===(r=i.find((function(e){return e.originalname===ee.name})))||void 0===r?void 0:r.location,profilePhoto:null===(n=i.find((function(e){return e.originalname===K.name})))||void 0===n?void 0:n.location}))}else R(Object(s.a)({},U));a(!1),te(null),X(null)}}}),V=function(){var e=new FormData;e.append("images",K),e.append("images",ee),setTimeout((function(){A.mutate(e)}),500)},G=function(){var e=Object(i.a)(n.a.mark((function e(t){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:q(Object(s.a)({},t)),V();case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Y=!Object(h.isEmpty)(r);Object(p.useEffect)((function(){Y&&(te(r.coverPicture),X(r.profilePicture),ie((null===r||void 0===r?void 0:r.timezone)||N.j[0].text))}),[Y]);var Q=Object(p.useRef)(),W=Object(p.useRef)(),J=Object(p.useState)(),H=Object(c.a)(J,2),K=H[0],X=H[1],Z=Object(p.useState)(),$=Object(c.a)(Z,2),ee=$[0],te=$[1],ae=Object(p.useState)(N.j[0].text),re=Object(c.a)(ae,2),ne=re[0],ie=re[1];return Object(k.jsx)(m.a,{disablePadding:!0,setOpen:a,header:"".concat(Y?"Edit":"Create"," event"),open:t,children:Object(k.jsx)("div",{className:" min-w-200 pb-4  max-w-200 min-h-164 max-h-164 overflow-y-auto",children:Object(k.jsxs)("div",{className:"px-1",children:[Object(k.jsx)("input",{ref:W,className:"hidden",type:"file",onChange:function(e){return te(e.target.files[0])},accept:"image/x-png,image/jpeg"}),Object(k.jsx)("input",{ref:Q,className:"hidden",type:"file",onChange:function(e){return X(e.target.files[0])},accept:"image/x-png,image/jpeg"}),Object(k.jsx)(g.b,{initialValues:S,enableReinitialize:Y,innerRef:D,validationSchema:P,onSubmit:G,children:Object(k.jsxs)(g.a,{className:"space-y-6 ",children:[Object(k.jsxs)("div",{className:" overflow-hidden  bg-white dark:bg-gray-900",children:[Object(k.jsxs)("div",{className:"relative  group",children:[Object(k.jsx)("div",{className:"absolute top-0 right-0 p-4",children:Object(k.jsx)(f.j,{className:"bg-gray-100   transition-all hover:bg-gray-300 duration-300 rounded-full p-2 text-gray-700 h-8 w-8"})}),Object(k.jsx)("img",{alt:"",onClick:function(){return function(){var e;return null===W||void 0===W||null===(e=W.current)||void 0===e?void 0:e.click()}()},src:ee?"string"===typeof ee?ee:URL.createObjectURL(ee):o.a,className:"w-full lg:h-36 sm:h-24 object-cover h-20"})]}),Object(k.jsx)("div",{className:"flex  relative justify-start mr-8 ml-8 -mt-12",children:Object(k.jsx)("img",{onClick:function(){return function(){var e;return null===Q||void 0===Q||null===(e=Q.current)||void 0===e?void 0:e.click()}()},alt:"",src:K?"string"===typeof K?K:URL.createObjectURL(K):y.s,className:" border-solid  lg:h-24 lg:w-24 h-16 w-16  border-white border-2 -mt-3"})})]}),Object(k.jsxs)("div",{className:"px-8 space-y-4",children:[Object(k.jsx)("h3",{className:"dark:text-white text-gray-900 font-semibold ",children:"Details"}),Object(k.jsx)(j.a,{label:"Event Name",id:"eventName",name:"eventName",required:!0}),Object(k.jsx)(b.a,{label:"Timezone",required:!0,name:"timezone",selectedItem:ne,list:N.j.map((function(e){return{name:e.text,id:e.value}})),placeholder:"What is the purpose of this group?"}),Object(k.jsxs)("div",{className:"flex items-center justify-between w-full gap-x-2",children:[Object(k.jsxs)("div",{className:"grid grid-cols-2 ",children:[Object(k.jsx)("div",{className:"mx-2",children:Object(k.jsx)(j.a,{name:"startDate",label:"Start date",type:"date"})}),Object(k.jsx)("div",{className:"mx-2",children:Object(k.jsx)(j.a,{name:"startTime",label:"Start time",required:!0,type:"time"})})]}),Object(k.jsxs)("div",{className:"grid grid-cols-2 ",children:[Object(k.jsx)("div",{className:"mx-2",children:Object(k.jsx)(j.a,{name:"endDate",label:"End date",type:"date"})}),Object(k.jsx)("div",{className:"mx-2",children:Object(k.jsx)(j.a,{name:"endTime",required:!0,label:"End time",type:"time"})})]})]}),Object(k.jsx)(j.a,{label:"Description",required:!0,id:"eventDescription",name:"eventDescription",placeholder:"Ex. Topics, schedule, etc.",textarea:!0,rows:2,cols:255})]}),F&&Object(k.jsx)("div",{className:"px-8",children:Object(k.jsx)(d.a,{errors:[M.toString()]})}),Object(k.jsx)("div",{className:"flex p-4 items-center justify-end",children:Object(k.jsx)(u.a,{rounded:"rounded-full",loading:A.isLoading||E,disabled:A.isLoading||E,gradient:!0,size:"lg",type:"submit",label:"Submit"})})]})})]})})})}},553:function(e,t,a){"use strict";var r=a(10),n=a(34),i=a(188),s=a(535),c=a(12),l=a(60),o=a(104),d=a(487),u=a(8),j=a(61),b=a(196),m=a(44),x=a(1),v=a(105),g=a(516),h=a(35),p=a(2),f=function(e){var t,a=e.open,r=e.setOpen,i=e.setShowOtherModals,s=e.postingIn,f=void 0===s?"general":s,O=e.customInId,y=Object(j.b)().setNotification,N=Object(b.b)(),w=N.setPosts,k=N.posts,C=Object(h.useMutation)(l.b,{onSuccess:function(e){var t=e.data.data;k.unshift(t),w(Object(c.a)(k)),r(!1),y({show:!0,title:"New post added.",buttonText:"View",buttonUrl:u.a.postById(t.postUrl)})}}),I=C.mutate,P=C.isLoading,S=C.isError,D=C.error,L=Object(x.useRef)();return Object(p.jsx)(d.a,{setOpen:r,header:"Create a post",open:a,children:Object(p.jsx)("div",{className:" min-w-132 min-h-56 max-h-132 overflow-y-auto",children:Object(p.jsx)(m.b,{innerRef:L,initialValues:{text:""},onSubmit:function(e){I({postData:{text:e.text,postedIn:f,customInId:"general"!==f?O:null}})},children:Object(p.jsxs)(m.a,{children:[Object(p.jsx)(o.a,{gridClass:"hideBorders",hideBorders:!0,textClass:"text-sm text-gray-700 dark:text-gray-100 sm:text-lg",placeholder:"What do you want to talk about?",rows:10,name:"text",id:"text",textarea:!0}),Object(p.jsxs)("div",{className:"mt-5 m-1 sm:mt-4 flex justify-between  items-center",children:[Object(p.jsxs)("div",{className:"flex items-center gap-x-4",children:[Object(p.jsx)(n.a,{gradient:!0,invert:!0,Icon:g.b,label:"Photo",onClick:function(){r(!1),i("photo")}}),Object(p.jsx)(n.a,{gradient:!0,Icon:v.a,bgColor:"blue",invert:!0,onClick:function(){return r(!1),i("video")},label:"Video"})]}),Object(p.jsx)(n.a,{gradient:!0,loading:P,disabled:(null===L||void 0===L||null===(t=L.current)||void 0===t?void 0:t.values.text.length)<=0,type:"submit",label:"Post",size:"lg"})]}),S&&Object(p.jsx)("p",{className:"text-red-500 text-sm",children:D})]})})})})},O=a(525),y=a(92),N=a(201),w=a(15);t.a=function(e){var t=e.profilePicture,a=e.customButtons,c=void 0===a?null:a,l=e.placeholder,o=void 0===l?"Start a post":l,d=e.disabled,u=e.postingIn,j=void 0===u?"general":u,b=e.customInId,m=e.fullName,h=void 0===m?"":m,k=Object(x.useState)(!1),C=Object(r.a)(k,2),I=C[0],P=C[1],S=Object(x.useState)("init"),D=Object(r.a)(S,2),L=D[0],T=D[1],_=Object(x.useState)(!1),R=Object(r.a)(_,2),E=R[0],F=R[1],M=Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(n.a,{gradient:!0,invert:!0,Icon:g.b,label:"Photo",onClick:function(){return T("photo")}}),Object(p.jsx)(n.a,{gradient:!0,Icon:v.a,bgColor:"blue",invert:!0,onClick:function(){return T("video")},label:"Video"}),Object(p.jsx)(n.a,{gradient:!0,Icon:y.a,invert:!0,bgColor:"blue",onClick:function(){return F(!0)},label:"Event"}),Object(p.jsx)(n.a,{gradient:!0,Icon:N.b,invert:!0,bgColor:"blue",label:"Write articles"})]});return Object(p.jsxs)(p.Fragment,{children:[!d&&Object(p.jsx)(f,{customInId:b,postingIn:j,setShowOtherModals:T,open:I,setOpen:P}),("photo"===L||"video"===L)&&Object(p.jsx)(O.a,{isPhoto:"photo"===L,open:!0,setOpen:function(){return T("init")}}),Object(p.jsx)(s.a,{fullName:h,open:E,setOpen:F}),Object(p.jsx)(i.a,{content:Object(p.jsxs)("div",{className:"flex flex-col space-y-8",children:[Object(p.jsxs)("div",{className:"flex w-full",children:[Object(p.jsx)("img",{src:t||w.s,alt:"13RMS",className:"sm:h-14 h-12 w-12 sm:w-14  border-gradient border-transparent border-2 rounded-full"}),Object(p.jsx)("div",{onClick:function(){return P(!0)},className:"cursor-pointer sm:h-14 h-12  transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-700 ml-4 w-full rounded-full bg-white flex items-center text-gray-500 dark:text-gray-400 justify-start px-4 text-left dark:bg-gray-800 border border-gray-400 dark:border-gray-700",children:o})]}),Object(p.jsx)("div",{className:"flex items-center justify-between",children:c||M})]})})]})}},570:function(e,t,a){"use strict";t.a=a.p+"static/media/no-posts.25d46d19.svg"},571:function(e,t,a){"use strict";var r=a(487),n=a(8),i=a(189),s=(a(1),a(15)),c=a(2);t.a=function(e){var t=e.open,a=e.setOpen,l=e.title,o=e.userList,d=Object(i.a)().getType;return Object(c.jsx)(r.a,{header:l,open:t,setOpen:a,children:o.map((function(e){var t,a,r,i,l=d(e),o=l.isBusiness,u=l.isPersonal;return Object(c.jsx)("div",{className:"p-2 py-4 relative cursor-pointer border-b border-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100 transition-all",onClick:function(){return function(e){window.open(n.a.getProfile(e),"_blank")}(e)},children:Object(c.jsxs)("div",{className:"flex  cursor-pointer items-center ",children:[Object(c.jsx)("img",{src:e.profilePicture||s.s,alt:"",className:"rounded-full  border-gradient border-transparent mr-2 h-12 w-12"}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h4",{className:"dark:text-white text-gray-900",children:e.fullName}),Object(c.jsx)("p",{className:"dark:text-gray-500 text-gray-600 text-sm",children:o?null===e||void 0===e||null===(t=e.business)||void 0===t?void 0:t.name:u?null===e||void 0===e||null===(a=e.company)||void 0===a?void 0:a.companyName:(null===e||void 0===e||null===(r=e.background)||void 0===r?void 0:r.education)&&(null===e||void 0===e||null===(i=e.background)||void 0===i?void 0:i.education[0].name)})]})]})},e._id)}))})}},885:function(e,t,a){"use strict";a.r(t);var r=a(10),n=a(117),i=a(60),s=a(570),c=a(34),l=a(188),o=a(69),d=a(524),u=a(89),j=a(494),b=a(517),m=a(8),x=a(189),v=a(193),g=a.n(v),h=a(553),p=a(192),f=a(534),O=a(12),y=a(28),N=a(190),w=a(487),k=a(25),C=a(1),I=a(35),P=a(15),S=a(2),D=function(e){var t=e.open,a=e.setOpen,s=e.followingList,l=e.group,o=e.refetchGroup,d=Object(C.useState)([]),u=Object(r.a)(d,2),b=u[0],m=u[1],v={users:s},g=Object(I.useQuery)("user-list",(function(){return Object(n.x)(v)})),h=g.data,p=g.isFetched,f=g.isLoading,D=g.isSuccess,L=Object(I.useMutation)(i.x,{onSuccess:function(){a(!1),E(),o()}}),T=L.mutate,_=L.isLoading,R=L.error,E=function(){m([])},F=!f&&p&&D?h.data.data.users:[],M=Object(C.useState)([]),z=Object(r.a)(M,2),B=z[0],U=z[1];Object(C.useEffect)((function(){F&&F.length>0&&U(Object(O.a)(F))}),[F]);var q=Object(x.a)().getType,A=l.members;return Object(S.jsx)(w.a,{fixedBottom:Object(S.jsx)("div",{children:!f&&p&&Object(S.jsx)("div",{className:"flex items-center justify-end  p-4",children:Object(S.jsx)(c.a,{label:"Invite ".concat(b.length>0?b.length:""),size:"lg",loading:_,loadingText:"Sending invites",onClick:function(){return function(){var e=b.map((function(e){return e._id}));T({targetIdArray:e,groupId:l._id})}()},disabled:b.length<=0,gradient:!0,rounded:"rounded-full"})})}),header:"Invite connections",open:t,setOpen:a,children:Object(S.jsxs)("div",{className:"lg:min-w-160 min-w-132 max-w-256",children:[!f&&p?Object(S.jsxs)("div",{children:[Object(S.jsx)("div",{className:"w-full",children:Object(S.jsx)("input",{type:"search",placeholder:"Search by name",className:"w-full py-2 px-4 outline-none border-none focus:ring-1 text-gray-600 dark:text-gray-400 text-sm focus:ring-yellow-500 bg-transparent h-full",onChange:function(e){var t=e.target.value.toLowerCase(),a=F.filter((function(e){return e.firstName.toLowerCase().includes(t)||e.lastName.toLowerCase().includes(t)||e.fullName.toLowerCase().includes(t)}));U(Object(O.a)(a))}})}),Object(S.jsxs)("div",{className:"grid grid-cols-5 p-2 border-t border-gray-200 dark:border-gray-800",children:[Object(S.jsx)("div",{className:"col-span-3 min-h-136 pb-12  max-h-136 flex flex-col  overflow-y-scroll overflow-x-hidden ",children:B.map((function(e){var t,a,r,n,i,s=q(e),c=s.isBusiness,o=s.isPersonal,d=!!(null===A||void 0===A?void 0:A.find((function(t){return t._id===e._id}))),u=!!(null===l||void 0===l||null===(t=l.requests)||void 0===t?void 0:t.find((function(t){return t===e._id})));return Object(S.jsxs)("div",{className:"p-2 py-4 relative cursor-pointer border-b border-gray-200 dark:border-gray-700 ".concat(d||u?"dark:bg-gray-800 opacity-75 bg-gray-100 pointer-events-none":"dark:hover:bg-gray-800 hover:bg-gray-100","  transition-all"),onClick:function(){return function(e){-1!==Object(k.findIndex)(b,["_id",e._id])?Object(k.remove)(b,["_id",e._id]):b.unshift(e),m(Object(O.a)(b))}(e)},children:[Object(S.jsxs)("div",{className:"flex  cursor-pointer items-center ",children:[Object(S.jsx)("input",{id:"users",name:"candidates",checked:Boolean(null===b||void 0===b?void 0:b.find((function(t){return t._id===e._id}))),type:"checkbox",className:"focus:ring-yellow-500 mr-4 h-5 w-5 text-yellow-600 border-gray-300 rounded"}),Object(S.jsx)("img",{src:(null===e||void 0===e?void 0:e.profilePicture)||P.s,alt:"",className:"border-gradient border-transparent border-2 rounded-full mr-2 h-12 w-12"}),Object(S.jsxs)("div",{children:[Object(S.jsx)("h4",{className:"dark:text-white text-gray-900",children:null===e||void 0===e?void 0:e.fullName}),Object(S.jsx)("p",{className:"dark:text-gray-500 text-gray-600 text-sm",children:c?null===e||void 0===e||null===(a=e.business)||void 0===a?void 0:a.name:o?null===e||void 0===e||null===(r=e.company)||void 0===r?void 0:r.companyName:(null===e||void 0===e||null===(n=e.background)||void 0===n?void 0:n.education)&&(null===e||void 0===e||null===(i=e.background)||void 0===i?void 0:i.education[0].name)})]})]}),(d||u)&&Object(S.jsx)("p",{className:"absolute text-xs italic dark:text-gray-500 text-gray-400 bottom-1 right-2 ",children:d?"Already member":"Request sent"})]},e._id)}))}),Object(S.jsxs)("div",{className:"col-span-2 ml-2",children:[Object(S.jsxs)("div",{className:"border-b text-sm border-gray-200 dark:border-gray-800  text-gray-500 dark:text-gray-400 p-4 flex items-center justify-between",children:[Object(S.jsxs)("p",{children:[null===b||void 0===b?void 0:b.length," selected"]}),Object(S.jsx)("button",{onClick:E,className:"font-medium dark:text-gray-300",children:"Unselect all"})]}),Object(S.jsx)("div",{className:"p-4 pr-0 flex flex-col gap-y-4 max-w-56 min-w-56  max-h-136 pb-20 overflow-y-scroll mx-2",children:(null===b||void 0===b?void 0:b.length)>0&&b.map((function(e){return Object(S.jsxs)("div",{className:"flex  items-center  justify-between",children:[Object(S.jsxs)("div",{className:"flex items-center",children:[Object(S.jsx)("img",{src:e.profilePicture||P.s,alt:"",className:"border-gradient border-transparent border-2 rounded-full mr-2 h-8 w-8"}),Object(S.jsx)("h4",{className:"dark:text-white",children:e.fullName})]}),Object(S.jsx)("div",{onClick:function(){return t=e._id,Object(k.remove)(b,["_id",t]),void m(Object(O.a)(b));var t},className:"dark:hover:bg-gray-700 transition-all rounded-full p-0.5",children:Object(S.jsx)(y.k,{className:"cursor-pointer h-5 w-5   dark:text-gray-400","aria-hidden":"true"})})]})}))})]})]})]}):Object(S.jsx)("div",{className:"flex items-center justify-center",children:Object(S.jsx)(j.a,{})}),Object(S.jsx)("div",{children:R&&Object(S.jsx)(N.a,{errors:[R.toString()]})})]})})},L=a(105),T=a(572),_=a(516),R=a(17),E=a(571),F=a(202),M=a(541),z=a(525),B=function(e){var t=e.userId,a=e.groupId,n=Object(C.useState)(!1),s=Object(r.a)(n,2),l=s[0],o=s[1],d=Object(R.g)(),u=Object(I.useMutation)(i.o,{onSuccess:function(){d.push(m.a.groups())}}).mutate;return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(w.a,{header:"Confirm",open:l,setOpen:o,children:Object(S.jsxs)("div",{className:" ",children:[Object(S.jsx)("p",{className:"dark:text-gray-400 text-gray-500 text-lg",children:"Are you sure you want to exit this group?"}),Object(S.jsx)("div",{className:"flex items-center p-4 justify-end",children:Object(S.jsx)(c.a,{label:"Confirm",gradient:!0,onClick:function(){return u({targetId:t,groupId:a})}})})]})}),Object(S.jsx)("div",{className:"rounded-lg border dark:border-gray-700  border-gray-200  overflow-hidden lg:max-w-xs bg-white dark:bg-gray-800 ",children:Object(S.jsx)("h1",{onClick:function(){return o(!0)},className:"text-center hover:bg-red-500 hover:text-white rounded-lg p-2 cursor-pointer text-red-500",children:"Exit group"})})]})};t.default=function(e){var t,a,i,v,O,y,N,w,k,U=e.userData,q=Object(R.i)().groupId,A=Object(R.g)(),V=function(){var e,t=!1;q?t=!(!U||void 0===(null===U||void 0===U?void 0:U.groups)||0===(null===U||void 0===U||null===(e=U.groups)||void 0===e?void 0:e.length))&&!!U.groups.includes(q):t=!1;return t}();Object(C.useEffect)((function(){V||A.push(m.a.FEED)}),[q,V]);var G=Object(I.useQuery)("group-data",(function(){return Object(n.g)(q)})),Y=G.data,Q=G.isLoading,W=G.isFetched,J=G.refetch,H=W&&!Q?null===Y||void 0===Y||null===(t=Y.data)||void 0===t?void 0:t.data:[],K=Object(I.useQuery)("group-posts",(function(){return Object(n.i)(null===H||void 0===H?void 0:H.posts)}),{enabled:!!(null===H||void 0===H||null===(a=H.posts)||void 0===a?void 0:a.length)&&!(Q&&!W)}),X=Object(x.a)(U).getType,Z=Object(C.useState)(!1),$=Object(r.a)(Z,2),ee=$[0],te=$[1],ae=Object(C.useState)(!1),re=Object(r.a)(ae,2),ne=re[0],ie=re[1],se=Object(C.useState)("init"),ce=Object(r.a)(se,2),le=ce[0],oe=ce[1];if(Q&&!W)return Object(S.jsx)(u.a,{});var de=(null===H||void 0===H||null===(i=H.createdBy)||void 0===i?void 0:i.toString())===U._id,ue=null===H||void 0===H||null===(v=H.admin)||void 0===v?void 0:v.includes(U._id),je=(null===H||void 0===H?void 0:H.members)||[],be=de||ue,me=(null===(O=K.data)||void 0===O||null===(y=O.data)||void 0===y?void 0:y.data.posts)||[],xe=(null===(N=K.data)||void 0===N||null===(w=N.data)||void 0===w?void 0:w.data.count)||0;return V&&Object(S.jsxs)("div",{className:"relative  dark:bg-gray-900 bg-gray-100 min-h-screen ",children:[Object(S.jsx)(p.a,{userData:U}),Object(S.jsx)(o.a,{pageTitle:"Post | Feed | 13RMS"}),be&&Object(S.jsx)(D,{refetchGroup:J,group:H,followingList:U.following,open:ee,setOpen:te}),("photo"===le||"video"===le)&&Object(S.jsx)(z.a,{postingIn:"group",customInId:H._id,isPhoto:"photo"===le,open:!0,setOpen:function(){return oe("init")}}),Object(S.jsx)(E.a,{title:"Group members (".concat(null===je||void 0===je?void 0:je.length,")"),userList:je,open:ne,setOpen:ie}),Object(S.jsx)("div",{className:"h-auto pt-4 relative flow-root  transition-all duration-500 ",children:Object(S.jsx)(f.a,{firstColClass:"   max-h-152 hidden  xl:block w-full ",firstCol:Object(S.jsx)("div",{className:"flex flex-col gap-y-12",children:W&&!Q?Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(b.a,{content:Object(S.jsx)("div",{children:Object(S.jsxs)("div",{children:[Object(S.jsx)("div",{className:"ml-2 flex-shrink-0 items-center justify-center flex",children:Object(S.jsx)("p",{className:"px-2 inline-flex text-sm items-center justify-center leading-5 font-semibold rounded-md bg-gray-100 text-gray-800 dark:bg-gray-600 dark:text-gray-200",children:de?"Owner":ue?"Admin":"Member"})}),Object(S.jsxs)("p",{className:"mb-4 text-gray-600 dark:text-gray-400 text-sm tracking-wide mt-1",children:["Group created:"," ",g()(H.createdOn).format("MMM YYYY")]}),be&&Object(S.jsxs)("div",{className:"flex border-t py-2 text-xs font-medium text-gray-500 dark:text-gray-500 border-gray-200 dark:border-gray-700 transition-all  item-center px-4 cursor-pointer justify-between",children:[Object(S.jsx)("h6",{className:"font-medium ",children:"Requests to join"}),Object(S.jsx)("a",{href:m.a.followers(null===U||void 0===U?void 0:U.profileUrl),className:"hover:underline text-link cursor-pointer font-semibold",children:(null===H||void 0===H||null===(k=H.requests)||void 0===k?void 0:k.length)||0})]})]})}),user:U}),Object(S.jsx)(d.a,{}),!de&&Object(S.jsx)(B,{groupId:q,userId:U._id})]}):Object(S.jsx)(j.a,{})}),secondCol:Object(S.jsx)("div",{className:"",children:Q&&!W?Object(S.jsx)(j.a,{}):Object(S.jsxs)("div",{className:"flex gap-y-12 mx-auto lg:max-w-2xl  flex-col",children:[Object(S.jsxs)("div",{className:"rounded-lg border dark:border-gray-700  border-gray-200 overflow-hidden  bg-white dark:bg-gray-800",children:[Object(S.jsx)("img",{alt:"",src:(null===H||void 0===H?void 0:H.coverPicture)?null===H||void 0===H?void 0:H.coverPicture:"https://source.unsplash.com/1600x900/?nature,water",className:"w-full lg:h-28 sm:h-24 object-cover h-20"}),Object(S.jsx)("div",{className:"flex justify-start mx-8 -mt-5",children:Object(S.jsx)("img",{alt:"",src:H.profilePicture?H.profilePicture:P.s,className:"lg:h-16 lg:w-16 h-12 w-12  border-gradient border-transparent border-2 -mt-3"})}),Object(S.jsx)("div",{className:"text-left mx-8 mt-2 pb-6 pt-2",children:Object(S.jsx)("h3",{className:"dark:text-white text-gray-900 text-2xl font-medium ",children:H.groupName})})]}),Object(S.jsx)(h.a,{fullName:U.fullName,postingIn:"group",customInId:H._id,placeholder:"Start a post in this group",customButtons:Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(c.a,{gradient:!0,invert:!0,Icon:_.b,label:"Photo",onClick:function(){return oe("photo")}}),Object(S.jsx)(c.a,{gradient:!0,Icon:L.a,invert:!0,onClick:function(){return oe("video")},label:"Video"}),Object(S.jsx)(c.a,{gradient:!0,Icon:T.b,invert:!0,label:"Poll"})]}),profilePicture:null===U||void 0===U?void 0:U.profilePicture}),me&&me.length>0?Object(S.jsx)(F.a,{endMessage:Object(S.jsx)("div",{className:"text-center",children:Object(S.jsx)("span",{className:"dark:text-gray-600 text-center text-gray-400",children:"\u2022"})}),dataLength:me.length,scrollableTarget:"main_content",next:function(){},hasMore:xe>(null===me||void 0===me?void 0:me.length),loader:Object(S.jsx)("h4",{children:"Loading..."}),children:Object(S.jsx)("div",{className:"grid grid-cols-1 gap-y-6",children:me.map((function(e){return Object(S.jsx)(M.a,{userData:U,userId:U._id,post:e},e._id)}))})}):Object(S.jsx)(l.a,{content:Object(S.jsxs)("div",{className:"m-4 text-center flex items-center justify-center flex-col",children:[Object(S.jsx)("img",{src:s.a,alt:"",className:"h-28 sm:h-32 lg:h-36 xl:h-40 w-full"}),Object(S.jsx)("h3",{className:"mt-4 text-xl font-medium dark:text-gray-300 text-gray-900",children:"Create the first post"}),Object(S.jsx)("p",{className:"mt-1 text-base text-gray-500",children:"Get the conversation going. Be the first to post in this event!"})]})})]})}),thirdColClass:"lg:block",thirdCol:Object(S.jsxs)("div",{className:"space-y-12 lg:max-w-84 max-w-full",children:[Object(S.jsx)(l.a,{cardTitle:"".concat(H.members.length," member").concat(H.members.length>1?"s":""),content:Object(S.jsxs)("div",{className:"mt-4 flex-shrink-0 sm:mt-0 ",children:[Object(S.jsx)("div",{className:"flex overflow-hidden -space-x-2",children:H.members.slice(0,4).map((function(e){return Object(S.jsx)("img",{className:"inline-block lg:h-12 lg:w-12 h-12 w-12 rounded-full ring-2 dark:ring-transparent border-gradient border-transparent border-2",src:e.profilePicture,alt:""},e._id)}))}),Object(S.jsxs)("div",{className:"flex gap-x-4 items-center justify-start",children:[be&&Object(S.jsx)(c.a,{onClick:function(){return te(!0)},gradient:!0,rounded:"rounded-full",className:"mt-4",label:"Invite connections"}),Object(S.jsx)(c.a,{onClick:function(){return ie(!ne)},gradient:!0,rounded:"rounded-full",invert:!0,className:"mt-4",label:"see all members"})]})]})}),(null===H||void 0===H?void 0:H.groupDescription)&&Object(S.jsx)(l.a,{cardTitle:"About this group",content:Object(S.jsx)("p",{className:"text-gray-900 dark:text-gray-200 line-clamp ",children:null===H||void 0===H?void 0:H.groupDescription})}),H.groupRules&&Object(S.jsx)(l.a,{cardTitle:"Group rules",content:Object(S.jsx)("p",{className:"text-gray-900 dark:text-gray-200 line-clamp ",children:H.groupRules})}),Object(S.jsx)(l.a,{cardTitle:"Admin",content:Object(S.jsx)("div",{children:H.admin.map((function(e){var t,a,r,n,i=X(e),s=i.isBusiness,c=i.isPersonal;return Object(S.jsxs)("div",{className:"flex ",children:[Object(S.jsx)("div",{className:"mr-4 mt-2 flex-shrink-0",children:Object(S.jsx)("img",{alt:"",src:e.profilePicture?e.profilePicture:P.s,className:"rounded-full lg:h-12 lg:w-12 h-12 w-12 border-gradient border-transparent  border-2 -mt-3"})}),Object(S.jsxs)("div",{children:[Object(S.jsx)("a",{href:m.a.getProfile(e),className:"text-base  dark:text-white font-semibold",children:e.fullName}),Object(S.jsx)("p",{className:"mt-1 text-sm dark:text-gray-500",children:s?null===e||void 0===e||null===(t=e.business)||void 0===t?void 0:t.name:c?null===e||void 0===e||null===(a=e.company)||void 0===a?void 0:a.companyName:(null===e||void 0===e||null===(r=e.background)||void 0===r?void 0:r.education)&&(null===e||void 0===e||null===(n=e.background)||void 0===n?void 0:n.education[0].name)})]})]})}))})})]})})})]})}}}]);
//# sourceMappingURL=21.e2de7e2b.chunk.js.map