(this.webpackJsonp13rms=this.webpackJsonp13rms||[]).push([[52],{426:function(e,t,a){"use strict";var r=a(23),s=a(156),n=a(62),c=a(43),i=a(2),o=function(e){var t=e.show,a=e.error;return Object(i.jsx)(n.a,{show:t,enter:"transition duration-100 ease-out",enterFrom:"transform scale-95 opacity-0",enterTo:"transform scale-100 opacity-100",leave:"transition duration-75 ease-out",leaveFrom:"transform scale-100 opacity-100",leaveTo:"transform scale-95 opacity-0",className:"mt-2",children:Object(i.jsx)("p",{className:"transition-all duration-200 text-sm text-red-600 dark:text-red-500",children:a})})},d=a(421),l=a(1),u=a(44),b=["label","id","name","type","placeholder","error","value","gridClass","required","showPasswordButton","optional","hideBorders","textarea","setUnsavedChanges","withButton","disabled","rows","textClass","cols","info"];t.a=function(e){var t=e.label,a=e.id,j=e.name,m=void 0===j?"":j,x=e.type,h=void 0===x?"text":x,p=e.placeholder,f=e.error,O=(e.value,e.gridClass),v=e.required,g=e.showPasswordButton,y=void 0!==g&&g,N=e.optional,w=void 0!==N&&N,k=e.hideBorders,C=void 0!==k&&k,S=e.textarea,_=void 0!==S&&S,T=e.setUnsavedChanges,F=void 0===T?function(){}:T,E=e.withButton,B=e.disabled,A=e.rows,P=e.textClass,I=void 0===P?"sm:text-sm":P,q=e.cols,U=(e.info,Object(s.a)(e,b),"border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500"),D=Object(l.useState)(!1),G=Object(r.a)(D,2),H=G[0],L=G[1],R=Object(d.c)(m),V=Object(r.a)(R,3),X=V[0],z=V[1],J=V[2].setValue,M=function(e){F(!0),J(e.target.value)};return Object(i.jsxs)("div",{className:O,children:[Object(i.jsxs)("div",{className:"flex justify-between",children:[Object(i.jsxs)("label",{htmlFor:m,className:"block dark:text-white text-sm font-medium text-gray-700",children:[t," ",v?Object(i.jsx)("span",{className:"text-red-500 dark:text-red-400 font-medium text-base",children:"*"}):Object(i.jsx)("span",{className:"text-red-500 dark:text-red-400 font-medium text-base"})]}),w&&Object(i.jsx)("span",{className:"text-sm text-gray-500",id:"email-optional",children:"Optional"})]}),_?Object(i.jsxs)("div",{children:[Object(i.jsxs)("div",{className:"mt-1 relative rounded-md shadow-sm",children:[Object(i.jsx)("textarea",{rows:A,cols:q,autoFocus:!0,id:a,placeholder:p,onChange:M,className:"block border w-full pr-2 ".concat(f?U:""," ").concat(I," p-2 ").concat(C?"border-transparent":"dark:border-gray-700 border-gray-300"," rounded-md dark:bg-gray-900 transition-all  dark:text-white")}),Object(i.jsx)("div",{className:"flex items-center absolute transition-all duration-200 top-0 right-0 p-3 ",children:z.touched&&z.error&&Object(i.jsx)("div",{className:" pointer-events-none",children:Object(i.jsx)(c.d,{className:"h-5 w-5 text-red-500 dark:text-red-400","aria-hidden":"true"})})})]}),Object(i.jsx)(o,{show:Boolean(z.touched&&z.error),error:z.error})]}):Object(i.jsxs)("div",{children:[Object(i.jsxs)("div",{className:"mt-1 relative rounded-md shadow-sm",children:[Object(i.jsx)("input",{disabled:B,id:a,autoFocus:!0,onChange:M,placeholder:p,type:y?H?"text":"password":h,className:"unstyled block border w-full pr-2 ".concat(f?U:""," sm:text-sm p-2 ").concat(C?"border-transparent ":"dark:border-gray-700 border-gray-300"," rounded-md dark:bg-gray-900 dark:text-white")}),Object(i.jsxs)("div",{className:"flex items-center absolute transition-all duration-200 inset-y-0 right-0 pr-3 ",children:[z.touched&&z.error&&Object(i.jsx)("div",{className:" pointer-events-none",children:Object(i.jsx)(c.d,{className:"h-5 w-5 text-red-500 dark:text-red-400","aria-hidden":"true"})}),y&&X.value&&Object(i.jsx)("div",{className:"ml-2",onClick:function(){return L(!H)},children:H?Object(i.jsx)(u.l,{className:"h-5 w-5 text-gray-400 cursor-pointer hover:text-gray-500","aria-hidden":"true"}):Object(i.jsx)(u.k,{className:"h-5 w-5 text-gray-400 cursor-pointer hover:text-gray-500","aria-hidden":"true"})})]})]}),Object(i.jsxs)("div",{className:"flex mt-2 items-center justify-between",children:[Object(i.jsx)(n.a,{show:Boolean(z.touched&&z.error),enter:"transition duration-100 ease-out",enterFrom:"transform scale-95 opacity-0",enterTo:"transform scale-100 opacity-100",leave:"transition duration-75 ease-out",leaveFrom:"transform scale-100 opacity-100",leaveTo:"transform scale-95 opacity-0",children:Object(i.jsx)("p",{className:"transition-all duration-200 text-sm text-red-600 dark:text-red-500",id:"".concat(m||a,"-error"),children:z.error})}),!Boolean(z.touched&&z.error)&&Object(i.jsx)("div",{}),E&&!Boolean(z.touched&&z.error)&&X.value.length>3?E:Object(i.jsx)("div",{className:""})]})]})]})}},431:function(e,t,a){"use strict";var r=a(5),s=a(156),n=a(873),c=a(2),i=["children","delay","className"];t.a=function(e){var t=e.children,a=e.delay,o=void 0===a?.3:a,d=e.className,l=Object(s.a)(e,i);return Object(c.jsx)(n.a.div,Object(r.a)(Object(r.a)({className:d},l),{},{initial:"hidden",animate:"visible",exit:"exit",variants:{hidden:{visibility:"hidden",opacity:0,translateX:100},visible:{visibility:"visible",translateX:0,opacity:1,transition:{delay:o}},exit:{visibility:"hidden",opacity:0,translateX:-100,transition:{delay:o}}},children:Object(c.jsx)(c.Fragment,{children:t})}))}},445:function(e,t,a){"use strict";var r=a(2),s=[{name:"Accessibility",href:"#/"},{name:"User Agreement",href:"#/"},{name:"Privacy & Policy",href:"#/"},{name:"Cookies",href:"#/"}],n=function(){var e=(new Date).getFullYear();return Object(r.jsx)("footer",{className:"",children:Object(r.jsxs)("div",{className:"max-w-7xl mx-auto pt-16 px-4 overflow-hidden sm:px-6 lg:px-8",children:[Object(r.jsx)("nav",{className:"-mx-5 lg:flex md:flex sm:grid sm:place-content-center sm:grid-cols-1 flex-wrap justify-center","aria-label":"Footer",children:s.map((function(e){return Object(r.jsx)("div",{className:"text-center px-5 py-2",children:Object(r.jsx)("li",{href:e.href,className:"list-none link-hover text-base text-gray-500 cursor-pointer",children:e.name})},e.name)}))}),Object(r.jsxs)("p",{className:"mt-8 text-center text-base text-gray-400",children:["\xa9 ",e," Workflow, Inc. All rights reserved."]})]})})},c=(a(1),a(431)),i=a(94);t.a=function(e){var t=e.title,a=e.subtitle,s=e.children,o=e.withButton,d=Object(i.a)().logo;return Object(r.jsxs)("div",{className:"min-h-screen dark:bg-gray-900 bg-gray-50 flex flex-col justify-start py-12 sm:px-6 lg:px-8",children:[Object(r.jsxs)(c.a,{className:"sm:mx-auto sm:w-full sm:max-w-md flex items-center flex-col",children:[Object(r.jsx)("img",{className:"mx-auto h-32 w-auto",src:d,alt:"13RMS"}),t&&Object(r.jsx)("h2",{className:"mt-6 text-center text-3xl font-extrabold dark:text-white text-gray-900",children:t}),a&&Object(r.jsx)("p",{className:"mt-2 text-center text-sm text-gray-600",children:a}),o&&o]}),s,Object(r.jsx)(n,{})]})}},456:function(e,t,a){"use strict";a.d(t,"f",(function(){return s})),a.d(t,"c",(function(){return n})),a.d(t,"d",(function(){return c})),a.d(t,"e",(function(){return i})),a.d(t,"g",(function(){return o})),a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return l}));var r=a(5),s={email:"",password:"",confirmPassword:"",firstName:"",lastName:""},n={email:"",password:""},c={jobTitle:"",jobType:"",currentCompany:""},i={country:"",state:"",city:"",pincode:""},o={education:"",grade:"",grade_subject:""},d=(Object(r.a)({},i),{name:"",email:"",number:""}),l={businessCountry:"",businessAddress:"",additionalInfo:"",postalCode:"",city:"",legalNumber:"",businessRegNumber:"",firstName:"",lastName:"",mobileNumber:"",businessEntityType:"",relationshipToBusiness:"",typeOfBusiness:""}},458:function(e,t,a){"use strict";a(1);var r=a(2);t.a=function(e){var t=e.text,a=e.onClick,s=e.className;e.color;return Object(r.jsx)("div",{className:"my-2 gradient-text hover:bg-gray-100 cursor-pointer px-2 py-1  rounded-md transition-all duration-200  ".concat(s),onClick:a,children:t})}},888:function(e,t,a){"use strict";a.r(t);var r=a(38),s=a.n(r),n=a(5),c=a(63),i=a(23),o=a(431),d=a(42),l=a(426),u=a(125),b=a(458),j=a(120),m=a(15),x=a(2),h=function(e){var t=e.enabled,a=e.setEnabled,r=e.text,s=e.subText,n=e.className;return Object(x.jsxs)(j.a.Group,{as:"div",className:"flex items-center justify-between ".concat(n),children:[Object(x.jsxs)("span",{className:"flex-grow flex flex-col items-start",children:[Object(x.jsx)(j.a.Label,{as:"span",className:"text-sm font-medium text-white",passive:!0,children:r}),Object(x.jsx)(j.a.Description,{as:"span",className:"text-sm text-gray-500",children:s})]}),Object(x.jsx)(j.a,{checked:t,onChange:a,className:Object(m.a)(t?"bg-gradient-to-r from-pink-500 to-yellow-500":"bg-gray-900","relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"),children:Object(x.jsx)("span",{"aria-hidden":"true",className:Object(m.a)(t?"translate-x-5":"translate-x-0","pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200")})})]})},p=a(9),f=a(445),O=a(33),v=a(421),g=a(7),y=a(456),N=a(90),w=a(1),k=a(17),C=a(34),S=a(441);t.default=function(e){var t,a,r=e.user,j=Object(k.g)(),m=Object(w.useState)(!1),_=Object(i.a)(m,2),T=_[0],F=_[1];Object(w.useEffect)((function(){!function(){if(r){var e,t;if(null===r||void 0===r||null===(e=r.other)||void 0===e?void 0:e.accountFilled)return console.log("redirect to dashboard"),j.push(p.a.FEED);if("education"===(null===(t=r.other)||void 0===t?void 0:t.accountType)){var a,s,n,c,i;if("location"===(null===(a=r.other)||void 0===a?void 0:a.accountFinishedStep))return console.log("redirect to choose template page"),j.push(p.a.CHOOSE_TEMPLATE);if("education"===(null===(s=r.other)||void 0===s?void 0:s.accountFinishedStep))return console.log("redirect to location page"),j.push(p.a.LOCATION_S);if("chooseAccount"===(null===(n=r.other)||void 0===n?void 0:n.accountFinishedStep))return console.log("get the accountType and redirect as per account type"),j.push(Object(g.g)(null===(i=r.other)||void 0===i?void 0:i.accountType));if("signup"===(null===(c=r.other)||void 0===c?void 0:c.accountFinishedStep))console.log("redirect to choose Account page"),j.push(p.a.CHOOSE_ACCOUNT)}else if(r&&r.other)console.log("get the accountType and redirect as per account type"),j.push(Object(g.g)(r.other.accountType))}}()}),[null===r||void 0===r||null===(t=r.other)||void 0===t?void 0:t.accountFilled,null===r||void 0===r||null===(a=r.other)||void 0===a?void 0:a.accountFinishedStep]);var E=Object(O.b)().setValues,B=function(){var e=Object(c.a)(s.a.mark((function e(t){var a,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=Object(g.a)(),F(!0),c=Object(n.a)(Object(n.a)({},r),{},{background:Object(n.a)(Object(n.a)({},r.background),{},{education:[{id:Object(N.a)(9),name:t.education,grade:t.grade,grade_subject:t.grade_subject,from:q.start_year,to:q.end_year}]}),other:Object(n.a)(Object(n.a)({},r.other),{},{accountFinishedStep:"education"})}),e.next=6,g.f.post("/user/update",Object(n.a)({},c),{headers:{Authorization:a}});case 6:delete c.password,E(Object(n.a)({},c)),j.push(p.a.STUDENT_STEP_2),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0);case 14:return e.prev=14,F(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[0,11,14,17]])})));return function(t){return e.apply(this,arguments)}}(),A=S.a({education:S.c().required("Please add education"),grade:S.c().required("Please add grade"),grade_subject:S.c().required("Please add grade subject")}),P=Object(w.useState)({start_year:"",end_year:"",above_sixteen:!1}),I=Object(i.a)(P,2),q=I[0],U=I[1];return Object(x.jsx)(f.a,{title:"Education Information",withButton:Object(x.jsx)(b.a,{text:"or create a business account",onClick:function(){return j.push(p.a.BUSINESS_STEP_1)}}),subtitle:Object(x.jsxs)("p",{children:["Your profile helps you find new people and ",Object(x.jsx)("br",{})," oppurtunites"]}),children:Object(x.jsx)(o.a,{className:"mt-8 sm:mx-auto sm:w-full sm:max-w-md",children:Object(x.jsx)("div",{className:"bg-white dark:bg-gray-900 border border-white dark:border-gray-700 py-8 px-4 shadow-md sm:rounded-lg sm:px-6",children:Object(x.jsx)(v.b,{initialValues:y.g,validationSchema:A,onSubmit:B,enableReinitialize:!0,children:Object(x.jsxs)(v.a,{className:"space-y-6",children:[Object(x.jsx)(l.a,{label:"Education",id:"education",name:"education",required:!0}),Object(x.jsx)(l.a,{label:"Grade / title",id:"grade",name:"grade",required:!0}),Object(x.jsx)(l.a,{label:"Graduation subject",id:"grade_subject",name:"grade_subject",required:!0}),Object(x.jsxs)("div",{className:"grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2",children:[Object(x.jsx)("div",{className:"",children:Object(x.jsx)(u.a,{label:"Start year",list:C.l,selectedItem:q.start_year,placeholder:"-",onSelect:function(e){return U(Object(n.a)(Object(n.a)({},q),{},{start_year:e.name}))}})}),Object(x.jsx)("div",{className:"",children:Object(x.jsx)(u.a,{label:"End year (or expected)",placeholder:"-",list:C.m,selectedItem:q.end_year,onSelect:function(e){return U(Object(n.a)(Object(n.a)({},q),{},{end_year:e.name}))}})})]}),Object(x.jsx)("div",{children:Object(x.jsx)(h,{className:"mt-2",enabled:q.above_sixteen,text:"I'm over 16 years old",setEnabled:function(){return U(Object(n.a)(Object(n.a)({},q),{},{above_sixteen:!q.above_sixteen}))}})}),Object(x.jsx)("div",{children:Object(x.jsx)(b.a,{color:"gray",onClick:function(){return j.push(p.a.CHOOSE_ACCOUNT)},text:"I'm not a student",className:"text-center py-2"})}),Object(x.jsx)("div",{children:Object(x.jsx)(d.a,{fullWidth:!0,rounded:"rounded-lg",gradient:!0,type:"submit",loading:T,label:"Next Step"})})]})})})})})}}}]);
//# sourceMappingURL=52.912d0e98.chunk.js.map