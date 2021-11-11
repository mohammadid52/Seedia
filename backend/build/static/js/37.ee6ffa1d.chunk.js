(this.webpackJsonp13rms=this.webpackJsonp13rms||[]).push([[37],{415:function(e,t,a){"use strict";var r=a(60),s=a(2);t.a=function(e){var t=e.show,a=e.error;return Object(s.jsx)(r.a,{show:t,enter:"transition duration-100 ease-out",enterFrom:"transform scale-95 opacity-0",enterTo:"transform scale-100 opacity-100",leave:"transition duration-75 ease-out",leaveFrom:"transform scale-100 opacity-100",leaveTo:"transform scale-95 opacity-0",className:"mt-2",children:Object(s.jsx)("p",{className:"transition-all duration-200 text-sm text-red-600 dark:text-red-500",children:a})})}},416:function(e,t,a){"use strict";var r=a(21),s=a(153),n=a(60),i=a(51),c=a(415),o=a(413),l=a(1),d=a(45),u=a(2),m=["label","id","name","type","placeholder","error","value","gridClass","required","showPasswordButton","optional","hideBorders","textarea","setUnsavedChanges","withButton","disabled","rows","textClass","cols","info"];t.a=function(e){var t=e.label,a=e.id,b=e.name,x=void 0===b?"":b,j=e.type,h=void 0===j?"text":j,p=e.placeholder,v=e.error,f=(e.value,e.gridClass),O=e.required,g=e.showPasswordButton,y=void 0!==g&&g,N=e.optional,w=void 0!==N&&N,k=e.hideBorders,S=void 0!==k&&k,C=e.textarea,F=void 0!==C&&C,T=e.setUnsavedChanges,B=void 0===T?function(){}:T,P=e.withButton,E=e.disabled,A=e.rows,q=e.textClass,U=void 0===q?"sm:text-sm":q,_=e.cols,M=(e.info,Object(s.a)(e,m),"border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500"),R=Object(l.useState)(!1),I=Object(r.a)(R,2),L=I[0],D=I[1],V=Object(o.c)(x),W=Object(r.a)(V,3),X=W[0],Y=W[1],H=W[2].setValue,J=function(e){B(!0),H(e.target.value)};return Object(u.jsxs)("div",{className:f,children:[Object(u.jsxs)("div",{className:"flex justify-between",children:[Object(u.jsxs)("label",{htmlFor:x,className:"block dark:text-white text-sm font-medium text-gray-700",children:[t," ",O&&Object(u.jsx)("span",{className:"text-red-500 dark:text-red-400 font-medium text-base",children:"*"})]}),w&&Object(u.jsx)("span",{className:"text-sm text-gray-500",id:"email-optional",children:"Optional"})]}),F?Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:"mt-1 relative rounded-md shadow-sm",children:[Object(u.jsx)("textarea",{rows:A,cols:_,autoFocus:!0,id:a,placeholder:p,onChange:J,className:"block border w-full pr-10 ".concat(v?M:""," ").concat(U," p-2 ").concat(S?"border-transparent":"dark:border-gray-700 border-gray-300"," rounded-md dark:bg-gray-900 transition-all  dark:text-white")}),Object(u.jsx)("div",{className:"flex items-center absolute transition-all duration-200 top-0 right-0 p-3 ",children:Y.touched&&Y.error&&Object(u.jsx)("div",{className:" pointer-events-none",children:Object(u.jsx)(i.d,{className:"h-5 w-5 text-red-500 dark:text-red-400","aria-hidden":"true"})})})]}),Object(u.jsx)(c.a,{show:Boolean(Y.touched&&Y.error),error:Y.error})]}):Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:"mt-1 relative rounded-md shadow-sm",children:[Object(u.jsx)("input",{disabled:E,id:a,autoFocus:!0,onChange:J,placeholder:p,type:y?L?"text":"password":h,className:"block border w-full pr-10 ".concat(v?M:""," sm:text-sm p-2 ").concat(S?"border-transparent ":"dark:border-gray-700 border-gray-300"," rounded-md dark:bg-gray-900 dark:text-white")}),Object(u.jsxs)("div",{className:"flex items-center absolute transition-all duration-200 inset-y-0 right-0 pr-3 ",children:[Y.touched&&Y.error&&Object(u.jsx)("div",{className:" pointer-events-none",children:Object(u.jsx)(i.d,{className:"h-5 w-5 text-red-500 dark:text-red-400","aria-hidden":"true"})}),y&&X.value&&Object(u.jsx)("div",{className:"ml-2",onClick:function(){return D(!L)},children:L?Object(u.jsx)(d.k,{className:"h-5 w-5 text-gray-400 cursor-pointer hover:text-gray-500","aria-hidden":"true"}):Object(u.jsx)(d.j,{className:"h-5 w-5 text-gray-400 cursor-pointer hover:text-gray-500","aria-hidden":"true"})})]})]}),Object(u.jsxs)("div",{className:"flex mt-2 items-center justify-between",children:[Object(u.jsx)(n.a,{show:Boolean(Y.touched&&Y.error),enter:"transition duration-100 ease-out",enterFrom:"transform scale-95 opacity-0",enterTo:"transform scale-100 opacity-100",leave:"transition duration-75 ease-out",leaveFrom:"transform scale-100 opacity-100",leaveTo:"transform scale-95 opacity-0",children:Object(u.jsx)("p",{className:"transition-all duration-200 text-sm text-red-600 dark:text-red-500",id:"".concat(x||a,"-error"),children:Y.error})}),!Boolean(Y.touched&&Y.error)&&Object(u.jsx)("div",{}),P&&!Boolean(Y.touched&&Y.error)&&X.value.length>3?P:Object(u.jsx)("div",{className:""})]})]})]})}},418:function(e,t,a){"use strict";var r=a(5),s=a(153),n=a(694),i=a(2),c=["children","delay","className"];t.a=function(e){var t=e.children,a=e.delay,o=void 0===a?.3:a,l=e.className,d=Object(s.a)(e,c);return Object(i.jsx)(n.a.div,Object(r.a)(Object(r.a)({className:l},d),{},{initial:"hidden",animate:"visible",exit:"exit",variants:{hidden:{visibility:"hidden",opacity:0,translateX:100},visible:{visibility:"visible",translateX:0,opacity:1,transition:{delay:o}},exit:{visibility:"hidden",opacity:0,translateX:-100,transition:{delay:o}}},children:Object(i.jsx)(i.Fragment,{children:t})}))}},426:function(e,t,a){"use strict";var r=a(51),s=a(33),n=a(2);t.a=function(e){var t=e.errors;return Object(n.jsx)("div",{className:"rounded-md bg-red-50 dark:bg-gray-900 border dark:border-gray-700 border-transparent p-4",children:Object(n.jsxs)("div",{className:"flex",children:[Object(n.jsx)("div",{className:"flex-shrink-0",children:Object(n.jsx)(r.j,{className:"h-5 w-5 dark:text-red-300 text-red-400","aria-hidden":"true"})}),Object(n.jsxs)("div",{className:"ml-3",children:[Object(n.jsxs)("h3",{className:"text-sm font-medium text-red-800 dark:text-red-500",children:["There were ",t.length," errors with your submission"]}),Object(n.jsx)("div",{className:"mt-2 text-sm text-red-700 dark:text-red-400",children:Object(n.jsx)("ul",{className:"list-disc pl-5 space-y-1",children:Object(s.map)(t,(function(e,t){return Object(n.jsx)("li",{children:e},t)}))})})]})]})})}},432:function(e,t,a){"use strict";var r=a(2),s=[{name:"Accessibility",href:"#/"},{name:"User Agreement",href:"#/"},{name:"Privacy & Policy",href:"#/"},{name:"Cookies",href:"#/"}],n=function(){var e=(new Date).getFullYear();return Object(r.jsx)("footer",{className:"",children:Object(r.jsxs)("div",{className:"max-w-7xl mx-auto pt-16 px-4 overflow-hidden sm:px-6 lg:px-8",children:[Object(r.jsx)("nav",{className:"-mx-5 lg:flex md:flex sm:grid sm:place-content-center sm:grid-cols-1 flex-wrap justify-center","aria-label":"Footer",children:s.map((function(e){return Object(r.jsx)("div",{className:"text-center px-5 py-2",children:Object(r.jsx)("li",{href:e.href,className:"list-none link-hover text-base text-gray-500 cursor-pointer",children:e.name})},e.name)}))}),Object(r.jsxs)("p",{className:"mt-8 text-center text-base text-gray-400",children:["\xa9 ",e," Workflow, Inc. All rights reserved."]})]})})},i=(a(1),a(418)),c=a(89);t.a=function(e){var t=e.title,a=e.subtitle,s=e.children,o=e.withButton,l=Object(c.a)().logo;return Object(r.jsxs)("div",{className:"min-h-screen dark:bg-gray-900 bg-gray-50 flex flex-col justify-start py-12 sm:px-6 lg:px-8",children:[Object(r.jsxs)(i.a,{className:"sm:mx-auto sm:w-full sm:max-w-md flex items-center flex-col",children:[Object(r.jsx)("img",{className:"mx-auto h-32 w-auto",src:l,alt:"13RMS"}),t&&Object(r.jsx)("h2",{className:"mt-6 text-center text-3xl font-extrabold dark:text-white text-gray-900",children:t}),a&&Object(r.jsx)("p",{className:"mt-2 text-center text-sm text-gray-600",children:a}),o&&o]}),s,Object(r.jsx)(n,{})]})}},440:function(e,t,a){"use strict";a.d(t,"f",(function(){return s})),a.d(t,"c",(function(){return n})),a.d(t,"d",(function(){return i})),a.d(t,"e",(function(){return c})),a.d(t,"g",(function(){return o})),a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return d}));var r=a(5),s={email:"",password:"",confirmPassword:"",firstName:"",lastName:""},n={email:"",password:""},i={jobTitle:"",jobType:"",currentCompany:""},c={country:"",state:"",city:"",pincode:""},o={education:"",grade:"",grade_subject:""},l=(Object(r.a)({},c),{name:"",email:"",number:""}),d={businessCountry:"",businessAddress:"",additionalInfo:"",postalCode:"",city:"",legalNumber:"",businessRegNumber:"",firstName:"",lastName:"",mobileNumber:"",businessEntityType:"",relationshipToBusiness:"",typeOfBusiness:""}},441:function(e,t,a){"use strict";a(1);var r=a(2);t.a=function(e){var t=e.text,a=e.onClick,s=e.className;e.color;return Object(r.jsx)("div",{className:"my-2 gradient-text hover:bg-gray-100 cursor-pointer px-2 py-1  rounded-md transition-all duration-200  ".concat(s),onClick:a,children:t})}},451:function(e,t,a){"use strict";var r=a(51),s=a(2);t.a=function(e){var t=e.text,a=e.color,n=void 0===a?"blue":a,i=e.className,c=void 0===i?"":i;return Object(s.jsx)("div",{className:"rounded-md dark:bg-transparent dark:border-gray-700 border border-gray-50 bg-".concat(n,"-50 p-4 ").concat(c),children:Object(s.jsxs)("div",{className:"flex",children:[Object(s.jsx)("div",{className:"flex-shrink-0",children:Object(s.jsx)(r.e,{className:"h-5 w-5 dark:text-".concat(n,"-300 text-").concat(n,"-400"),"aria-hidden":"true"})}),Object(s.jsx)("div",{className:"ml-3 flex-1 md:flex md:justify-between",children:Object(s.jsx)("p",{className:"text-sm pb-0 mb-0 dark:text-".concat(n,"-300 text-").concat(n,"-700"),children:t})})]})})}},666:function(e,t,a){"use strict";a.r(t);var r=a(35),s=a.n(r),n=a(5),i=a(61),c=a(21),o=a(1),l=a(86),d=a(32),u=a(14),m=a(416),b=a(451),x=a(441),j=a(8),h=a(413),p=a(433),v=a(440),f=a(432),O=a(418),g=a(6),y=a(426),N=a(37),w=a(2);t.default=function(e){var t,a,r=e.userData,k=Object(u.g)(),S=Object(o.useState)(!0),C=Object(c.a)(S,1)[0],F=Object(o.useState)(!1),T=Object(c.a)(F,2),B=T[0],P=T[1],E=Object(o.useState)([]),A=Object(c.a)(E,2),q=A[0],U=A[1],_=p.a({name:p.c().required("Please enter legal business name"),email:p.c().email("Please enter valid email address").required("Please enter legal business email address"),number:p.c().matches(/^[0-9+()-]+$/,"Must be only digits").required("Please enter business number")});Object(o.useEffect)((function(){!function(){var e=r;if(e){var t,a;if(null===e||void 0===e||null===(t=e.other)||void 0===t?void 0:t.accountFilled)return console.log("redirect to dashboard"),k.push(j.a.FEED);if("business"===(null===(a=e.other)||void 0===a?void 0:a.accountType)){var s,n,i,c,o;if("business-step-2"===(null===(s=e.other)||void 0===s?void 0:s.accountFinishedStep))return console.log("redirect to choose template page"),k.push(j.a.CHOOSE_TEMPLATE);if("business-step-1"===(null===(n=e.other)||void 0===n?void 0:n.accountFinishedStep))return console.log("redirect to location page"),k.push(j.a.BUSINESS_STEP_2);if("chooseAccount"===(null===(i=e.other)||void 0===i?void 0:i.accountFinishedStep))return console.log("get the accountType and redirect as per account type"),k.push(Object(g.g)(null===(o=e.other)||void 0===o?void 0:o.accountType));if("signup"===(null===(c=e.other)||void 0===c?void 0:c.accountFinishedStep))console.log("redirect to choose Account page"),k.push(j.a.CHOOSE_ACCOUNT)}else if(e&&e.other)console.log("get the accountType and redirect as per account type"),k.push(Object(g.g)(e.other.accountType))}}()}),[null===r||void 0===r||null===(t=r.other)||void 0===t?void 0:t.accountFilled,null===r||void 0===r||null===(a=r.other)||void 0===a?void 0:a.accountFinishedStep]);var M=Object(N.b)().setValues,R=function(){var e=Object(i.a)(s.a.mark((function e(t){var a,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,P(!0),a=Object(g.a)(),i=Object(n.a)(Object(n.a)({},r),{},{business:Object(n.a)(Object(n.a)({},r.business),{},{name:t.name,email:t.email,number:t.number}),other:Object(n.a)(Object(n.a)({},r.other),{},{accountFinishedStep:"business-step-1"})}),e.next=6,g.f.post("/user/update",Object(n.a)({},i),{headers:{Authorization:a}});case 6:delete i.password,M(Object(n.a)({},i)),k.push(j.a.BUSINESS_STEP_2),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),U([e.t0.message]),console.error(e.t0);case 15:return e.prev=15,P(!1),e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[0,11,15,18]])})));return function(t){return e.apply(this,arguments)}}();return C?Object(w.jsx)(f.a,{withButton:Object(w.jsx)(x.a,{text:"or create a personal account",onClick:function(){return k.push(j.a.COMPANY)}}),title:"Create business account",children:Object(w.jsxs)(O.a,{className:"mt-0 sm:mx-auto sm:w-full sm:max-w-md",children:[Object(w.jsx)("div",{className:"mb-4",children:Object(w.jsx)(b.a,{text:"Qualify for business seller limits, promotions and professional tools to expand your business"})}),Object(w.jsx)("div",{className:"bg-white dark:bg-gray-900 py-8 px-4 shadow-md sm:rounded-lg sm:px-6",children:Object(w.jsx)(h.b,{initialValues:v.a,validationSchema:_,onSubmit:R,children:Object(w.jsxs)(h.a,{className:"space-y-6",children:[Object(w.jsx)(m.a,{label:"Legal business name",id:"name",name:"name",required:!0}),Object(w.jsx)(m.a,{label:"Legal business email address",id:"email",name:"email",type:"email",required:!0}),Object(w.jsx)(m.a,{label:"Legal phone number of business",id:"number",name:"number",required:!0}),Object(w.jsxs)("div",{className:"space-y-2 my-4 ",children:[Object(w.jsx)("p",{className:"text-left text-xs dark:text-gray-400 tracking-wide leading-5 text-gray-600",children:"We regularly send you e-mails with special offers on 13RMS. You can unsubsribe from these marketing messages at any time free of charge through 13RMS or the links in the email."}),Object(w.jsxs)("p",{className:"text-left text-xs dark:text-gray-400 tracking-wide leading-5 text-gray-600",children:["By selecting ",Object(w.jsx)("strong",{children:"Register"}),", you confirm that you have read and agreed to our"," ",Object(w.jsx)("a",{className:"text-xs",href:"#/",children:"User Agreement."}),". For more information about the processing of your data, please see out"," ",Object(w.jsx)("a",{className:"text-xs",href:"#/",children:"Privacy Statement."})]})]}),Object(w.jsx)("div",{hidden:0===q.length,children:Object(w.jsx)(y.a,{errors:q})}),Object(w.jsx)("div",{children:Object(w.jsx)(d.a,{fullWidth:!0,rounded:"rounded-lg",type:"submit",gradient:!0,loading:B,label:"Next"})})]})})}),Object(w.jsx)(x.a,{onClick:k.goBack,text:"Go back",className:"inline-block mt-4"})]})}):Object(w.jsx)(l.a,{})}}}]);
//# sourceMappingURL=37.ee6ffa1d.chunk.js.map