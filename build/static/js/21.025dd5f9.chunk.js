(this.webpackJsonp13rms=this.webpackJsonp13rms||[]).push([[21],{504:function(e,t,r){"use strict";t.a=r.p+"static/media/placeholder.c69d1bed.png"},513:function(e,t,r){"use strict";var a=r(8),n=r(189),i=r(15),s=r(2);t.a=function(e){var t,r,c=e.user,l=e.content,o=void 0===l?null:l,d=Object(n.a)(c).isBusiness,u=Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("p",{className:"text-sm font-medium dark:text-white text-gray-500 ",children:d?null===c||void 0===c||null===(t=c.business)||void 0===t?void 0:t.name:null===c||void 0===c||null===(r=c.company)||void 0===r?void 0:r.jobTitle}),Object(s.jsx)("a",{className:"dark:text-white text-gray-900 text-lg font-medium",href:a.a.getProfile(c),children:Object(s.jsx)("div",{className:"mt-2",children:"View full profile"})})]});return Object(s.jsxs)("div",{className:"plain-card",children:[Object(s.jsx)("img",{alt:"",src:(null===c||void 0===c?void 0:c.coverPicture)?null===c||void 0===c?void 0:c.coverPicture:"https://source.unsplash.com/1600x900/?nature,water",className:"w-full lg:h-28 sm:h-24 object-cover h-20"}),Object(s.jsx)("div",{className:"flex justify-center -mt-8",children:Object(s.jsx)("img",{alt:"",src:c.profilePicture?c.profilePicture:i.s,className:"rounded-full  border-gradient border-transparent  lg:h-16 lg:w-16 h-12 w-12 dark:border-gray-800 border-white  border-2 -mt-3"})}),Object(s.jsxs)("div",{className:"text-center ".concat(o?"":"px-3 pb-6 pt-2"),children:[Object(s.jsx)("a",{href:a.a.getProfile(c,!0),className:"dark:text-white cursor-pointer text-gray-900 text-base font-bold ",children:c.fullName}),o||u]})]})}},520:function(e,t,r){"use strict";var a=r(8),n=r(35),i=r(117),s=r(2);t.a=function(e){var t,r=e.extraItems,c=Object(n.useQuery)("short-event-names",(function(){return Object(i.d)(!0)})),l=c.isFetched,o=c.isLoading,d=c.data,u=l&&!o?null===d||void 0===d||null===(t=d.data)||void 0===t?void 0:t.data:[];return Object(s.jsx)("div",{className:"rounded-lg  border dark:border-gray-700  border-gray-200  overflow-hidden lg:max-w-xs bg-white dark:bg-gray-800 ",children:Object(s.jsxs)("div",{className:"",children:[Object(s.jsxs)("div",{className:"p-4 flex flex-col gap-y-3 text-xs font-medium text-link",children:[Object(s.jsx)("a",{href:a.a.groups(),className:"hover:underline cursor-pointer",children:"Groups"}),Object(s.jsxs)("div",{className:"flex flex-col",children:[Object(s.jsxs)("div",{className:" cursor-pointer flex  items-center justify-between",children:[Object(s.jsx)("div",{className:"hover:underline ",children:"Events"}),Object(s.jsx)("div",{className:"text-gray-900 dark:text-gray-500 text-base hover:bg-gray-700 rounded-full h-6 transition-all w-6 flex items-center justify-center",children:"+"})]}),u&&u.length>0&&u.map((function(e){return Object(s.jsx)("a",{href:a.a.viewEvent(e._id),className:"py-2 text-xs font-medium text-gray-500 dark:text-gray-500 hover:underline cursor-pointer",children:e.eventName})}))]}),Object(s.jsx)("div",{className:"hover:underline cursor-pointer",children:"Followed Hastags"}),r&&r.length>0&&r.map((function(e){return Object(s.jsx)("a",{href:e.link,className:"hover:underline cursor-pointer",children:e.name},e.name)}))]}),Object(s.jsx)("div",{className:"flex items-center cursor-pointer hover:bg-gray-200 transition-all dark:hover:bg-gray-700 gap-y-2  justify-center px-4 border-t py-4  text-sm font-medium text-gray-500 dark:text-gray-500 border-gray-200 dark:border-gray-700",children:Object(s.jsx)("p",{children:"Discover more"})})]})})}},521:function(e,t,r){"use strict";var a=r(10),n=r(12),i=r(60),s=r(34),c=r(485),l=r(118),o=r(8),d=r(61),u=r(199),j=r(57),b=r(1),m=r(35),x=r(2);t.a=function(e){var t=e.open,r=e.setOpen,v=e.isPhoto,g=void 0===v||v,h=e.postingIn,f=void 0===h?"general":h,p=e.customInId,O=Object(d.b)().setNotification,y=Object(u.b)(),N=y.setPosts,w=y.posts,k=Object(m.useMutation)(i.b,{onSuccess:function(e){var t=e.data.data;w.unshift(t),N(Object(n.a)(w)),r(!1),O({show:!0,title:"New post added.",buttonText:"View",buttonUrl:o.a.postById(t.postUrl)})}}),C=k.mutate,I=k.isLoading,S=k.isError,P=k.error,D=Object(b.useState)(null),L=Object(a.a)(D,2),_=L[0],T=L[1],E=Object(m.useMutation)(i.A,{onSuccess:function(e){var t,r,a={postData:{postType:g?"withPhoto":"withVideo",text:A||"",postedIn:f,customInId:p,links:[{id:Object(j.a)(12),url:null===e||void 0===e||null===(t=e.data)||void 0===t||null===(r=t.data)||void 0===r?void 0:r.location,type:g?"image":"video"}]}};C(a)}}),R=Object(b.useRef)(),M=Object(b.useState)(!1),z=Object(a.a)(M,2),F=z[0],q=z[1],U=Object(b.useState)(""),B=Object(a.a)(U,2),A=B[0],G=B[1];return Object(x.jsxs)(c.a,{disablePadding:!0,setOpen:r,header:"Edit your ".concat(g?"photo":"video"),open:t,children:[Object(x.jsxs)("div",{className:" min-w-132 max-w-132 min-h-56 max-h-132 flex items-center justify-center overflow-y-auto",children:[_?Object(x.jsxs)("div",{className:"",children:[F?Object(x.jsxs)("div",{className:"px-12",children:[Object(x.jsx)("h4",{className:"mb-1 text-gray-600 dark:text-gray-500",children:"Alt text"}),Object(x.jsx)("p",{className:"dark:text-gray-700 text-gray-400 mb-2",children:"Alt text describes images for people who have trouble seeing them. If you don\u2019t add alt text, it may be automatically generated after you post. You can edit it anytime."}),Object(x.jsx)(l.a,{value:A,onChange:function(e){var t=e.target.value;G(t)},textarea:!0,rows:6}),Object(x.jsxs)("div",{className:"mt-5 gap-x-4 px-4 m-1 sm:mt-4 flex justify-end  items-center",children:[Object(x.jsx)(s.a,{gradient:!0,rounded:"rounded-full",onClick:function(){G(""),q(!1)},invert:!0,label:"Cancel",size:"sm"}),Object(x.jsx)(s.a,{gradient:!0,rounded:"rounded-full",label:"Save",onClick:function(){q(!1)},size:"sm"})]})]}):Object(x.jsx)("div",{children:g?Object(x.jsx)("img",{className:"w-full",src:URL.createObjectURL(_),alt:""}):Object(x.jsx)("video",{controls:!0,className:"w-full",controlsList:"nodownload",src:URL.createObjectURL(_)})}),Object(x.jsx)("div",{className:"absolute bottom-5 left-5 pt-4 mb-2 pl-4",children:Object(x.jsx)(s.a,{onClick:function(){return q(!F)},invert:!F,label:"Alt text"})})]}):Object(x.jsx)(s.a,{onClick:function(){var e;return null===R||void 0===R||null===(e=R.current)||void 0===e?void 0:e.click()},label:"Select ".concat(g?"image":"video"," to share"),gradient:!0,invert:!0,size:"lg"}),Object(x.jsx)("input",{ref:R,className:"hidden",type:"file",onChange:function(e){var t=e.target.files[0];T(t)},accept:g?"image/*":"video/*"})]}),Object(x.jsxs)("div",{className:"mt-5 border-t border-gray-200 dark:border-gray-700 pt-4 gap-x-4 px-4 m-1 sm:mt-4 flex justify-end  items-center",children:[Object(x.jsx)(s.a,{gradient:!0,rounded:"rounded-full",onClick:function(){T(null),r(!1)},invert:!0,label:"Cancel",size:"lg"}),Object(x.jsx)(s.a,{gradient:!0,rounded:"rounded-full",loading:I||E.isLoading,label:"Done",onClick:function(e){e.preventDefault();var t=new FormData;t.append("image",_),E.mutate(t)},size:"lg"})]}),S&&Object(x.jsx)("p",{className:"text-red-500 text-sm",children:P})]})}},531:function(e,t,r){"use strict";var a=r(33),n=r.n(a),i=r(55),s=r(3),c=r(10),l=r(60),o=r(504),d=r(190),u=r(34),j=r(104),b=r(197),m=r(485),x=r(8),v=r(61),g=r(44),h=r(25),f=r(1),p=r(29),O=r(35),y=r(15),N=r(37),w=r(90),k=r(2);t.a=function(e){var t=e.open,r=e.setOpen,a=e.eventData,C=e.fullName,I=void 0===C?"":C,S=w.a({eventName:w.c().required("Event Name is required").min(10).max(150),eventDescription:w.c().required("Event Description is required").min(10).max(600)}),P={eventName:(null===a||void 0===a?void 0:a.eventName)||"",eventDescription:(null===a||void 0===a?void 0:a.eventDescription)||"",startDate:(null===a||void 0===a?void 0:a.startDate)||new Date,endDate:(null===a||void 0===a?void 0:a.endDate)||new Date,startTime:(null===a||void 0===a?void 0:a.startTime)||"",endTime:(null===a||void 0===a?void 0:a.endTime)||"",timezone:(null===a||void 0===a?void 0:a.timezone)||""},D=Object(f.useRef)(),L=Object(v.b)().setNotification,_=Object(O.useMutation)(l.b),T=Object(O.useMutation)(l.f,{onSuccess:function(e){var t=e.data.message,r=e.data.data;L({show:!0,title:t,buttonText:"View",buttonUrl:x.a.viewEvent(r)}),_.mutate({postData:{text:"".concat(I," has organized an event."),postType:"event",customInId:r}})}}),E=T.mutate,R=T.isLoading,M=T.isError,z=T.error,F=Object(f.useState)(null),q=Object(c.a)(F,2),U=q[0],B=q[1],A=Object(O.useMutation)(l.B,{onSuccess:function(e,t){if(U){if(e.data.data&&e.data.data.length){var a,n,i=Object(h.map)(e.data.data,(function(e){return e}));E(Object(s.a)(Object(s.a)({},U),{},{coverPhoto:null===(a=i.find((function(e){return e.originalname===ee.name})))||void 0===a?void 0:a.location,profilePhoto:null===(n=i.find((function(e){return e.originalname===K.name})))||void 0===n?void 0:n.location}))}else E(Object(s.a)({},U));r(!1),te(null),X(null)}}}),G=function(){var e=new FormData;e.append("images",K),e.append("images",ee),setTimeout((function(){A.mutate(e)}),500)},V=function(){var e=Object(i.a)(n.a.mark((function e(t){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:B(Object(s.a)({},t)),G();case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Y=!Object(h.isEmpty)(a);Object(f.useEffect)((function(){Y&&(te(a.coverPicture),X(a.profilePicture),ie((null===a||void 0===a?void 0:a.timezone)||N.j[0].text))}),[Y]);var Q=Object(f.useRef)(),J=Object(f.useRef)(),W=Object(f.useState)(),H=Object(c.a)(W,2),K=H[0],X=H[1],Z=Object(f.useState)(),$=Object(c.a)(Z,2),ee=$[0],te=$[1],re=Object(f.useState)(N.j[0].text),ae=Object(c.a)(re,2),ne=ae[0],ie=ae[1];return Object(k.jsx)(m.a,{disablePadding:!0,setOpen:r,header:"".concat(Y?"Edit":"Create"," event"),open:t,children:Object(k.jsx)("div",{className:" min-w-200 pb-4  max-w-200 min-h-164 max-h-164 overflow-y-auto",children:Object(k.jsxs)("div",{className:"px-1",children:[Object(k.jsx)("input",{ref:J,className:"hidden",type:"file",onChange:function(e){return te(e.target.files[0])},accept:"image/x-png,image/jpeg"}),Object(k.jsx)("input",{ref:Q,className:"hidden",type:"file",onChange:function(e){return X(e.target.files[0])},accept:"image/x-png,image/jpeg"}),Object(k.jsx)(g.b,{initialValues:P,enableReinitialize:Y,innerRef:D,validationSchema:S,onSubmit:V,children:Object(k.jsxs)(g.a,{className:"space-y-6 ",children:[Object(k.jsxs)("div",{className:" overflow-hidden  bg-white dark:bg-gray-900",children:[Object(k.jsxs)("div",{className:"relative  group",children:[Object(k.jsx)("div",{className:"absolute top-0 right-0 p-4",children:Object(k.jsx)(p.k,{className:"bg-gray-100   transition-all hover:bg-gray-300 duration-300 rounded-full p-2 text-gray-700 h-8 w-8"})}),Object(k.jsx)("img",{alt:"",onClick:function(){return function(){var e;return null===J||void 0===J||null===(e=J.current)||void 0===e?void 0:e.click()}()},src:ee?"string"===typeof ee?ee:URL.createObjectURL(ee):o.a,className:"w-full lg:h-36 sm:h-24 object-cover h-20"})]}),Object(k.jsx)("div",{className:"flex  relative justify-start mr-8 ml-8 -mt-12",children:Object(k.jsx)("img",{onClick:function(){return function(){var e;return null===Q||void 0===Q||null===(e=Q.current)||void 0===e?void 0:e.click()}()},alt:"",src:K?"string"===typeof K?K:URL.createObjectURL(K):y.s,className:" border-solid  lg:h-24 lg:w-24 h-16 w-16  border-white border-2 -mt-3"})})]}),Object(k.jsxs)("div",{className:"px-8 space-y-4",children:[Object(k.jsx)("h3",{className:"dark:text-white text-gray-900 font-semibold ",children:"Details"}),Object(k.jsx)(j.a,{label:"Event Name",id:"eventName",name:"eventName",required:!0}),Object(k.jsx)(b.a,{label:"Timezone",required:!0,name:"timezone",selectedItem:ne,list:N.j.map((function(e){return{name:e.text,id:e.value}})),placeholder:"What is the purpose of this group?"}),Object(k.jsxs)("div",{className:"flex items-center justify-between w-full gap-x-2",children:[Object(k.jsxs)("div",{className:"grid grid-cols-2 ",children:[Object(k.jsx)("div",{className:"mx-2",children:Object(k.jsx)(j.a,{name:"startDate",label:"Start date",type:"date"})}),Object(k.jsx)("div",{className:"mx-2",children:Object(k.jsx)(j.a,{name:"startTime",label:"Start time",required:!0,type:"time"})})]}),Object(k.jsxs)("div",{className:"grid grid-cols-2 ",children:[Object(k.jsx)("div",{className:"mx-2",children:Object(k.jsx)(j.a,{name:"endDate",label:"End date",type:"date"})}),Object(k.jsx)("div",{className:"mx-2",children:Object(k.jsx)(j.a,{name:"endTime",required:!0,label:"End time",type:"time"})})]})]}),Object(k.jsx)(j.a,{label:"Description",required:!0,id:"eventDescription",name:"eventDescription",placeholder:"Ex. Topics, schedule, etc.",textarea:!0,rows:2,cols:255})]}),M&&Object(k.jsx)("div",{className:"px-8",children:Object(k.jsx)(d.a,{errors:[z.toString()]})}),Object(k.jsx)("div",{className:"flex p-4 items-center justify-end",children:Object(k.jsx)(u.a,{rounded:"rounded-full",loading:A.isLoading||R,disabled:A.isLoading||R,gradient:!0,size:"lg",type:"submit",label:"Submit"})})]})})]})})})}},541:function(e,t,r){"use strict";var a=r(10),n=r(34),i=r(188),s=r(531),c=r(551),l=r(521),o=r(1),d=r(92),u=r(106),j=r(518),b=r(201),m=r(15),x=r(2);t.a=function(e){var t=e.profilePicture,r=e.customButtons,v=void 0===r?null:r,g=e.placeholder,h=void 0===g?"Start a post":g,f=e.disabled,p=e.postingIn,O=void 0===p?"general":p,y=e.customInId,N=e.fullName,w=void 0===N?"":N,k=Object(o.useState)(!1),C=Object(a.a)(k,2),I=C[0],S=C[1],P=Object(o.useState)("init"),D=Object(a.a)(P,2),L=D[0],_=D[1],T=Object(o.useState)(!1),E=Object(a.a)(T,2),R=E[0],M=E[1],z=Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(n.a,{gradient:!0,invert:!0,Icon:j.b,label:"Photo",onClick:function(){return _("photo")}}),Object(x.jsx)(n.a,{gradient:!0,Icon:u.a,bgColor:"blue",invert:!0,onClick:function(){return _("video")},label:"Video"}),Object(x.jsx)(n.a,{gradient:!0,Icon:d.a,invert:!0,bgColor:"blue",onClick:function(){return M(!0)},label:"Event"}),Object(x.jsx)(n.a,{gradient:!0,Icon:b.b,invert:!0,bgColor:"blue",label:"Write articles"})]});return Object(x.jsxs)(x.Fragment,{children:[!f&&Object(x.jsx)(c.a,{customInId:y,postingIn:O,setShowOtherModals:_,open:I,setOpen:S}),("photo"===L||"video"===L)&&Object(x.jsx)(l.a,{isPhoto:"photo"===L,open:!0,setOpen:function(){return _("init")}}),Object(x.jsx)(s.a,{fullName:w,open:R,setOpen:M}),Object(x.jsx)(i.a,{content:Object(x.jsxs)("div",{className:"flex flex-col space-y-8",children:[Object(x.jsxs)("div",{className:"flex w-full",children:[Object(x.jsx)("img",{src:t||m.s,alt:"13RMS",className:"sm:h-14 h-12 w-12 sm:w-14  border-gradient border-transparent border-2 rounded-full"}),Object(x.jsx)("div",{onClick:function(){return S(!0)},className:"cursor-pointer sm:h-14 h-12  transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-700 ml-4 w-full rounded-full bg-white flex items-center text-gray-500 dark:text-gray-400 justify-start px-4 text-left dark:bg-gray-800 border border-gray-400 dark:border-gray-700",children:h})]}),Object(x.jsx)("div",{className:"flex items-center justify-between",children:v||z})]})})]})}},568:function(e,t,r){"use strict";t.a=r.p+"static/media/no-posts.25d46d19.svg"},569:function(e,t,r){"use strict";var a=r(485),n=r(8),i=r(189),s=(r(1),r(15)),c=r(2);t.a=function(e){var t=e.open,r=e.setOpen,l=e.title,o=e.userList,d=Object(i.a)().getType;return Object(c.jsx)(a.a,{header:l,open:t,setOpen:r,children:o.map((function(e){var t,r,a,i,l=d(e),o=l.isBusiness,u=l.isPersonal;return Object(c.jsx)("div",{className:"p-2 py-4 relative cursor-pointer border-b border-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100 transition-all",onClick:function(){return function(e){window.open(n.a.getProfile(e),"_blank")}(e)},children:Object(c.jsxs)("div",{className:"flex  cursor-pointer items-center ",children:[Object(c.jsx)("img",{src:e.profilePicture||s.s,alt:"",className:"rounded-full  border-gradient border-transparent mr-2 h-12 w-12"}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h4",{className:"dark:text-white text-gray-900",children:e.fullName}),Object(c.jsx)("p",{className:"dark:text-gray-500 text-gray-600 text-sm",children:o?null===e||void 0===e||null===(t=e.business)||void 0===t?void 0:t.name:u?null===e||void 0===e||null===(r=e.company)||void 0===r?void 0:r.companyName:(null===e||void 0===e||null===(a=e.background)||void 0===a?void 0:a.education)&&(null===e||void 0===e||null===(i=e.background)||void 0===i?void 0:i.education[0].name)})]})]})},e._id)}))})}},882:function(e,t,r){"use strict";r.r(t);var a=r(10),n=r(117),i=r(60),s=r(568),c=r(34),l=r(188),o=r(69),d=r(520),u=r(89),j=r(497),b=r(513),m=r(8),x=r(189),v=r(193),g=r.n(v),h=r(541),f=r(192),p=r(530),O=r(12),y=r(28),N=r(190),w=r(485),k=r(25),C=r(1),I=r(35),S=r(15),P=r(2),D=function(e){var t=e.open,r=e.setOpen,s=e.followingList,l=e.group,o=e.refetchGroup,d=Object(C.useState)([]),u=Object(a.a)(d,2),b=u[0],m=u[1],v={users:s},g=Object(I.useQuery)("user-list",(function(){return Object(n.y)(v)})),h=g.data,f=g.isFetched,p=g.isLoading,D=g.isSuccess,L=Object(I.useMutation)(i.y,{onSuccess:function(){r(!1),R(),o()}}),_=L.mutate,T=L.isLoading,E=L.error,R=function(){m([])},M=!p&&f&&D?h.data.data.users:[],z=Object(C.useState)([]),F=Object(a.a)(z,2),q=F[0],U=F[1];Object(C.useEffect)((function(){M&&M.length>0&&U(Object(O.a)(M))}),[M]);var B=Object(x.a)().getType,A=l.members;return Object(P.jsx)(w.a,{fixedBottom:Object(P.jsx)("div",{children:!p&&f&&Object(P.jsx)("div",{className:"flex items-center justify-end  p-4",children:Object(P.jsx)(c.a,{label:"Invite ".concat(b.length>0?b.length:""),size:"lg",loading:T,loadingText:"Sending invites",onClick:function(){return function(){var e=b.map((function(e){return e._id}));_({targetIdArray:e,groupId:l._id})}()},disabled:b.length<=0,gradient:!0,rounded:"rounded-full"})})}),header:"Invite connections",open:t,setOpen:r,children:Object(P.jsxs)("div",{className:"lg:min-w-160 min-w-132 max-w-256",children:[!p&&f?Object(P.jsxs)("div",{children:[Object(P.jsx)("div",{className:"w-full",children:Object(P.jsx)("input",{type:"search",placeholder:"Search by name",className:"w-full py-2 px-4 outline-none border-none focus:ring-1 text-gray-600 dark:text-gray-400 text-sm focus:ring-yellow-500 bg-transparent h-full",onChange:function(e){var t=e.target.value.toLowerCase(),r=M.filter((function(e){return e.firstName.toLowerCase().includes(t)||e.lastName.toLowerCase().includes(t)||e.fullName.toLowerCase().includes(t)}));U(Object(O.a)(r))}})}),Object(P.jsxs)("div",{className:"grid grid-cols-5 p-2 border-t border-gray-200 dark:border-gray-800",children:[Object(P.jsx)("div",{className:"col-span-3 min-h-136 pb-12  max-h-136 flex flex-col  overflow-y-scroll overflow-x-hidden ",children:q.map((function(e){var t,r,a,n,i,s=B(e),c=s.isBusiness,o=s.isPersonal,d=!!(null===A||void 0===A?void 0:A.find((function(t){return t._id===e._id}))),u=!!(null===l||void 0===l||null===(t=l.requests)||void 0===t?void 0:t.find((function(t){return t===e._id})));return Object(P.jsxs)("div",{className:"p-2 py-4 relative cursor-pointer border-b border-gray-200 dark:border-gray-700 ".concat(d||u?"dark:bg-gray-800 opacity-75 bg-gray-100 pointer-events-none":"dark:hover:bg-gray-800 hover:bg-gray-100","  transition-all"),onClick:function(){return function(e){-1!==Object(k.findIndex)(b,["_id",e._id])?Object(k.remove)(b,["_id",e._id]):b.unshift(e),m(Object(O.a)(b))}(e)},children:[Object(P.jsxs)("div",{className:"flex  cursor-pointer items-center ",children:[Object(P.jsx)("input",{id:"users",name:"candidates",checked:Boolean(null===b||void 0===b?void 0:b.find((function(t){return t._id===e._id}))),type:"checkbox",className:"focus:ring-yellow-500 mr-4 h-5 w-5 text-yellow-600 border-gray-300 rounded"}),Object(P.jsx)("img",{src:(null===e||void 0===e?void 0:e.profilePicture)||S.s,alt:"",className:"border-gradient border-transparent border-2 rounded-full mr-2 h-12 w-12"}),Object(P.jsxs)("div",{children:[Object(P.jsx)("h4",{className:"dark:text-white text-gray-900",children:null===e||void 0===e?void 0:e.fullName}),Object(P.jsx)("p",{className:"dark:text-gray-500 text-gray-600 text-sm",children:c?null===e||void 0===e||null===(r=e.business)||void 0===r?void 0:r.name:o?null===e||void 0===e||null===(a=e.company)||void 0===a?void 0:a.companyName:(null===e||void 0===e||null===(n=e.background)||void 0===n?void 0:n.education)&&(null===e||void 0===e||null===(i=e.background)||void 0===i?void 0:i.education[0].name)})]})]}),(d||u)&&Object(P.jsx)("p",{className:"absolute text-xs italic dark:text-gray-500 text-gray-400 bottom-1 right-2 ",children:d?"Already member":"Request sent"})]},e._id)}))}),Object(P.jsxs)("div",{className:"col-span-2 ml-2",children:[Object(P.jsxs)("div",{className:"border-b text-sm border-gray-200 dark:border-gray-800  text-gray-500 dark:text-gray-400 p-4 flex items-center justify-between",children:[Object(P.jsxs)("p",{children:[null===b||void 0===b?void 0:b.length," selected"]}),Object(P.jsx)("button",{onClick:R,className:"font-medium dark:text-gray-300",children:"Unselect all"})]}),Object(P.jsx)("div",{className:"p-4 pr-0 flex flex-col gap-y-4 max-w-56 min-w-56  max-h-136 pb-20 overflow-y-scroll mx-2",children:(null===b||void 0===b?void 0:b.length)>0&&b.map((function(e){return Object(P.jsxs)("div",{className:"flex  items-center  justify-between",children:[Object(P.jsxs)("div",{className:"flex items-center",children:[Object(P.jsx)("img",{src:e.profilePicture||S.s,alt:"",className:"border-gradient border-transparent border-2 rounded-full mr-2 h-8 w-8"}),Object(P.jsx)("h4",{className:"dark:text-white",children:e.fullName})]}),Object(P.jsx)("div",{onClick:function(){return t=e._id,Object(k.remove)(b,["_id",t]),void m(Object(O.a)(b));var t},className:"dark:hover:bg-gray-700 transition-all rounded-full p-0.5",children:Object(P.jsx)(y.k,{className:"cursor-pointer h-5 w-5   dark:text-gray-400","aria-hidden":"true"})})]})}))})]})]})]}):Object(P.jsx)("div",{className:"flex items-center justify-center",children:Object(P.jsx)(j.a,{})}),Object(P.jsx)("div",{children:E&&Object(P.jsx)(N.a,{errors:[E.toString()]})})]})})},L=r(106),_=r(570),T=r(518),E=r(17),R=r(569),M=r(202),z=r(537),F=r(521),q=function(e){var t=e.userId,r=e.groupId,n=Object(C.useState)(!1),s=Object(a.a)(n,2),l=s[0],o=s[1],d=Object(E.g)(),u=Object(I.useMutation)(i.p,{onSuccess:function(){d.push(m.a.groups())}}).mutate;return Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(w.a,{header:"Confirm",open:l,setOpen:o,children:Object(P.jsxs)("div",{className:" ",children:[Object(P.jsx)("p",{className:"dark:text-gray-400 text-gray-500 text-lg",children:"Are you sure you want to exit this group?"}),Object(P.jsx)("div",{className:"flex items-center p-4 justify-end",children:Object(P.jsx)(c.a,{label:"Confirm",gradient:!0,onClick:function(){return u({targetId:t,groupId:r})}})})]})}),Object(P.jsx)("div",{className:"rounded-lg border dark:border-gray-700  border-gray-200  overflow-hidden lg:max-w-xs bg-white dark:bg-gray-800 ",children:Object(P.jsx)("h1",{onClick:function(){return o(!0)},className:"text-center hover:bg-red-500 hover:text-white rounded-lg p-2 cursor-pointer text-red-500",children:"Exit group"})})]})};t.default=function(e){var t,r,i,v,O,y,N,w,k,U=e.userData,B=Object(E.i)().groupId,A=Object(E.g)(),G=function(){var e,t=!1;B?t=!(!U||void 0===(null===U||void 0===U?void 0:U.groups)||0===(null===U||void 0===U||null===(e=U.groups)||void 0===e?void 0:e.length))&&!!U.groups.includes(B):t=!1;return t}();Object(C.useEffect)((function(){G||A.push(m.a.FEED)}),[B,G]);var V=Object(I.useQuery)("group-data",(function(){return Object(n.g)(B)})),Y=V.data,Q=V.isLoading,J=V.isFetched,W=V.refetch,H=J&&!Q?null===Y||void 0===Y||null===(t=Y.data)||void 0===t?void 0:t.data:[],K=Object(I.useQuery)("group-posts",(function(){return Object(n.i)(null===H||void 0===H?void 0:H.posts)}),{enabled:!!(null===H||void 0===H||null===(r=H.posts)||void 0===r?void 0:r.length)&&!(Q&&!J)}),X=Object(x.a)(U).getType,Z=Object(C.useState)(!1),$=Object(a.a)(Z,2),ee=$[0],te=$[1],re=Object(C.useState)(!1),ae=Object(a.a)(re,2),ne=ae[0],ie=ae[1],se=Object(C.useState)("init"),ce=Object(a.a)(se,2),le=ce[0],oe=ce[1];if(Q&&!J)return Object(P.jsx)(u.a,{});var de=(null===H||void 0===H||null===(i=H.createdBy)||void 0===i?void 0:i.toString())===U._id,ue=null===H||void 0===H||null===(v=H.admin)||void 0===v?void 0:v.includes(U._id),je=(null===H||void 0===H?void 0:H.members)||[],be=de||ue,me=(null===(O=K.data)||void 0===O||null===(y=O.data)||void 0===y?void 0:y.data.posts)||[],xe=(null===(N=K.data)||void 0===N||null===(w=N.data)||void 0===w?void 0:w.data.count)||0;return G&&Object(P.jsxs)("div",{className:"relative  dark:bg-gray-900 bg-gray-100 min-h-screen ",children:[Object(P.jsx)(f.a,{userData:U}),Object(P.jsx)(o.a,{pageTitle:"Post | Feed | 13RMS"}),be&&Object(P.jsx)(D,{refetchGroup:W,group:H,followingList:U.following,open:ee,setOpen:te}),("photo"===le||"video"===le)&&Object(P.jsx)(F.a,{postingIn:"group",customInId:H._id,isPhoto:"photo"===le,open:!0,setOpen:function(){return oe("init")}}),Object(P.jsx)(R.a,{title:"Group members (".concat(null===je||void 0===je?void 0:je.length,")"),userList:je,open:ne,setOpen:ie}),Object(P.jsx)("div",{className:"h-auto pt-4 relative flow-root  transition-all duration-500 ",children:Object(P.jsx)(p.a,{firstColClass:"   max-h-152 hidden  xl:block w-full ",firstCol:Object(P.jsx)("div",{className:"flex flex-col gap-y-12",children:J&&!Q?Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(b.a,{content:Object(P.jsx)("div",{children:Object(P.jsxs)("div",{children:[Object(P.jsx)("div",{className:"ml-2 flex-shrink-0 items-center justify-center flex",children:Object(P.jsx)("p",{className:"px-2 inline-flex text-sm items-center justify-center leading-5 font-semibold rounded-md bg-gray-100 text-gray-800 dark:bg-gray-600 dark:text-gray-200",children:de?"Owner":ue?"Admin":"Member"})}),Object(P.jsxs)("p",{className:"mb-4 text-gray-600 dark:text-gray-400 text-sm tracking-wide mt-1",children:["Group created:"," ",g()(H.createdOn).format("MMM YYYY")]}),be&&Object(P.jsxs)("div",{className:"flex border-t py-2 text-xs font-medium text-gray-500 dark:text-gray-500 border-gray-200 dark:border-gray-700 transition-all  item-center px-4 cursor-pointer justify-between",children:[Object(P.jsx)("h6",{className:"font-medium ",children:"Requests to join"}),Object(P.jsx)("a",{href:m.a.followers(null===U||void 0===U?void 0:U.profileUrl),className:"hover:underline text-link cursor-pointer font-semibold",children:(null===H||void 0===H||null===(k=H.requests)||void 0===k?void 0:k.length)||0})]})]})}),user:U}),Object(P.jsx)(d.a,{}),!de&&Object(P.jsx)(q,{groupId:B,userId:U._id})]}):Object(P.jsx)(j.a,{})}),secondCol:Object(P.jsx)("div",{className:"",children:Q&&!J?Object(P.jsx)(j.a,{}):Object(P.jsxs)("div",{className:"flex gap-y-12 mx-auto lg:max-w-2xl  flex-col",children:[Object(P.jsxs)("div",{className:"rounded-lg border dark:border-gray-700  border-gray-200 overflow-hidden  bg-white dark:bg-gray-800",children:[Object(P.jsx)("img",{alt:"",src:(null===H||void 0===H?void 0:H.coverPicture)?null===H||void 0===H?void 0:H.coverPicture:"https://source.unsplash.com/1600x900/?nature,water",className:"w-full lg:h-28 sm:h-24 object-cover h-20"}),Object(P.jsx)("div",{className:"flex justify-start mx-8 -mt-5",children:Object(P.jsx)("img",{alt:"",src:H.profilePicture?H.profilePicture:S.s,className:"lg:h-16 lg:w-16 h-12 w-12  border-gradient border-transparent border-2 -mt-3"})}),Object(P.jsx)("div",{className:"text-left mx-8 mt-2 pb-6 pt-2",children:Object(P.jsx)("h3",{className:"dark:text-white text-gray-900 text-2xl font-medium ",children:H.groupName})})]}),Object(P.jsx)(h.a,{fullName:U.fullName,postingIn:"group",customInId:H._id,placeholder:"Start a post in this group",customButtons:Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(c.a,{gradient:!0,invert:!0,Icon:T.b,label:"Photo",onClick:function(){return oe("photo")}}),Object(P.jsx)(c.a,{gradient:!0,Icon:L.a,invert:!0,onClick:function(){return oe("video")},label:"Video"}),Object(P.jsx)(c.a,{gradient:!0,Icon:_.b,invert:!0,label:"Poll"})]}),profilePicture:null===U||void 0===U?void 0:U.profilePicture}),me&&me.length>0?Object(P.jsx)(M.a,{endMessage:Object(P.jsx)("div",{className:"text-center",children:Object(P.jsx)("span",{className:"dark:text-gray-600 text-center text-gray-400",children:"\u2022"})}),dataLength:me.length,scrollableTarget:"main_content",next:function(){},hasMore:xe>(null===me||void 0===me?void 0:me.length),loader:Object(P.jsx)("h4",{children:"Loading..."}),children:Object(P.jsx)("div",{className:"grid grid-cols-1 gap-y-6",children:me.map((function(e){return Object(P.jsx)(z.a,{userData:U,userId:U._id,post:e},e._id)}))})}):Object(P.jsx)(l.a,{content:Object(P.jsxs)("div",{className:"m-4 text-center flex items-center justify-center flex-col",children:[Object(P.jsx)("img",{src:s.a,alt:"",className:"h-28 sm:h-32 lg:h-36 xl:h-40 w-full"}),Object(P.jsx)("h3",{className:"mt-4 text-xl font-medium dark:text-gray-300 text-gray-900",children:"Create the first post"}),Object(P.jsx)("p",{className:"mt-1 text-base text-gray-500",children:"Get the conversation going. Be the first to post in this event!"})]})})]})}),thirdColClass:"lg:block",thirdCol:Object(P.jsxs)("div",{className:"space-y-12 lg:max-w-84 max-w-full",children:[Object(P.jsx)(l.a,{cardTitle:"".concat(H.members.length," member").concat(H.members.length>1?"s":""),content:Object(P.jsxs)("div",{className:"mt-4 flex-shrink-0 sm:mt-0 ",children:[Object(P.jsx)("div",{className:"flex overflow-hidden -space-x-2",children:H.members.slice(0,4).map((function(e){return Object(P.jsx)("img",{className:"inline-block lg:h-12 lg:w-12 h-12 w-12 rounded-full ring-2 dark:ring-transparent border-gradient border-transparent border-2",src:e.profilePicture,alt:""},e._id)}))}),Object(P.jsxs)("div",{className:"flex gap-x-4 items-center justify-start",children:[be&&Object(P.jsx)(c.a,{onClick:function(){return te(!0)},gradient:!0,rounded:"rounded-full",className:"mt-4",label:"Invite connections"}),Object(P.jsx)(c.a,{onClick:function(){return ie(!ne)},gradient:!0,rounded:"rounded-full",invert:!0,className:"mt-4",label:"see all members"})]})]})}),(null===H||void 0===H?void 0:H.groupDescription)&&Object(P.jsx)(l.a,{cardTitle:"About this group",content:Object(P.jsx)("p",{className:"text-gray-900 dark:text-gray-200 line-clamp ",children:null===H||void 0===H?void 0:H.groupDescription})}),H.groupRules&&Object(P.jsx)(l.a,{cardTitle:"Group rules",content:Object(P.jsx)("p",{className:"text-gray-900 dark:text-gray-200 line-clamp ",children:H.groupRules})}),Object(P.jsx)(l.a,{cardTitle:"Admin",content:Object(P.jsx)("div",{children:H.admin.map((function(e){var t,r,a,n,i=X(e),s=i.isBusiness,c=i.isPersonal;return Object(P.jsxs)("div",{className:"flex ",children:[Object(P.jsx)("div",{className:"mr-4 mt-2 flex-shrink-0",children:Object(P.jsx)("img",{alt:"",src:e.profilePicture?e.profilePicture:S.s,className:"rounded-full lg:h-12 lg:w-12 h-12 w-12 border-gradient border-transparent  border-2 -mt-3"})}),Object(P.jsxs)("div",{children:[Object(P.jsx)("a",{href:m.a.getProfile(e),className:"text-base  dark:text-white font-semibold",children:e.fullName}),Object(P.jsx)("p",{className:"mt-1 text-sm dark:text-gray-500",children:s?null===e||void 0===e||null===(t=e.business)||void 0===t?void 0:t.name:c?null===e||void 0===e||null===(r=e.company)||void 0===r?void 0:r.companyName:(null===e||void 0===e||null===(a=e.background)||void 0===a?void 0:a.education)&&(null===e||void 0===e||null===(n=e.background)||void 0===n?void 0:n.education[0].name)})]})]})}))})})]})})})]})}}}]);
//# sourceMappingURL=21.025dd5f9.chunk.js.map