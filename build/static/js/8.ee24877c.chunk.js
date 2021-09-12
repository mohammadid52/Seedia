(this.webpackJsonp13rms=this.webpackJsonp13rms||[]).push([[8],{2051:function(e,t,a){"use strict";a.r(t);var n=a(10),c=a.n(n),r=a(3),o=a(18),s=a(6),i=a(65),d=a(12),l=a(56),u=a(87),b=a(79),j=a(170),h=a(20),p=a(2),O=function(e){var t=e.enabled,a=e.setEnabled,n=e.text,c=e.subText,r=e.className;return Object(p.jsxs)(j.a.Group,{as:"div",className:"flex items-center justify-between ".concat(r),children:[Object(p.jsxs)("span",{className:"flex-grow flex flex-col items-start",children:[Object(p.jsx)(j.a.Label,{as:"span",className:"text-sm font-medium text-white",passive:!0,children:n}),Object(p.jsx)(j.a.Description,{as:"span",className:"text-sm text-gray-500",children:c})]}),Object(p.jsx)(j.a,{checked:t,onChange:a,className:Object(h.a)(t?"bg-gradient-to-r from-pink-500 to-yellow-500":"bg-gray-800","relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"),children:Object(p.jsx)("span",{"aria-hidden":"true",className:Object(h.a)(t?"translate-x-5":"translate-x-0","pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200")})})]})},x=a(16),g=a(54),m=a(32),f=a(44),v=a(11),y=a(130),S=a(69),_=a(1),N=a(28),w=a(26),k=a(30);t.default=function(e){var t,a,n=e.user,j=Object(N.g)(),h=Object(_.useState)(!1),E=Object(s.a)(h,2),T=E[0],C=E[1];Object(_.useEffect)((function(){!function(){if(n){var e,t;if(null===n||void 0===n||null===(e=n.other)||void 0===e?void 0:e.accountFilled)return console.log("redirect to dashboard"),j.push(x.a.DASHBAORD);if("education"===(null===(t=n.other)||void 0===t?void 0:t.accountType)){var a,c,r,o,s;if("location"===(null===(a=n.other)||void 0===a?void 0:a.accountFinishedStep))return console.log("redirect to choose template page"),j.push(x.a.CHOOSE_TEMPLATE);if("education"===(null===(c=n.other)||void 0===c?void 0:c.accountFinishedStep))return console.log("redirect to location page"),j.push(x.a.LOCATION_S);if("chooseAccount"===(null===(r=n.other)||void 0===r?void 0:r.accountFinishedStep))return console.log("get the accountType and redirect as per account type"),j.push(Object(v.f)(null===(s=n.other)||void 0===s?void 0:s.accountType));if("signup"===(null===(o=n.other)||void 0===o?void 0:o.accountFinishedStep))console.log("redirect to choose Account page"),j.push(x.a.CHOOSE_ACCOUNT)}else if(n&&n.other)console.log("get the accountType and redirect as per account type"),j.push(Object(v.f)(n.other.accountType))}}()}),[null===n||void 0===n||null===(t=n.other)||void 0===t?void 0:t.accountFilled,null===n||void 0===n||null===(a=n.other)||void 0===a?void 0:a.accountFinishedStep]);var A=Object(m.b)().setValues,F=function(){var e=Object(o.a)(c.a.mark((function e(t){var a,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=Object(v.a)(),C(!0),o=Object(r.a)(Object(r.a)({},n),{},{background:Object(r.a)(Object(r.a)({},n.background),{},{education:[{id:Object(S.a)(9),name:t.education,grade:t.grade,grade_subject:t.grade_subject,from:D.start_year,to:D.end_year}]}),other:Object(r.a)(Object(r.a)({},n.other),{},{accountFinishedStep:"education"})}),e.next=6,v.e.post("/user/update",Object(r.a)({},o),{headers:{Authorization:a}});case 6:delete o.password,A(Object(r.a)({},o)),j.push(x.a.STUDENT_STEP_2),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0);case 14:return e.prev=14,C(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[0,11,14,17]])})));return function(t){return e.apply(this,arguments)}}(),I=k.a({education:k.c().required("Please add education"),grade:k.c().required("Please add grade"),grade_subject:k.c().required("Please add grade subject")}),q=Object(_.useState)({start_year:"",end_year:"",above_sixteen:!1}),P=Object(s.a)(q,2),D=P[0],H=P[1];return Object(p.jsx)(g.a,{title:"Education Information",withButton:Object(p.jsx)(b.a,{text:"or create a business account",onClick:function(){return j.push(x.a.BUSINESS_STEP_1)}}),subtitle:Object(p.jsxs)("p",{children:["Your profile helps you find new people and ",Object(p.jsx)("br",{})," oppurtunites"]}),children:Object(p.jsx)(i.a,{className:"mt-8 sm:mx-auto sm:w-full sm:max-w-md",children:Object(p.jsx)("div",{className:"bg-white dark:bg-gray-800 border border-white dark:border-gray-700 py-8 px-4 shadow-md sm:rounded-lg sm:px-6",children:Object(p.jsx)(f.c,{initialValues:y.g,validationSchema:I,onSubmit:F,enableReinitialize:!0,children:Object(p.jsxs)(f.b,{className:"space-y-6",children:[Object(p.jsx)(l.a,{label:"Education",id:"education",name:"education",required:!0}),Object(p.jsx)(l.a,{label:"Grade / title",id:"grade",name:"grade",required:!0}),Object(p.jsx)(l.a,{label:"Graduation subject",id:"grade_subject",name:"grade_subject",required:!0}),Object(p.jsxs)("div",{className:"grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2",children:[Object(p.jsx)("div",{className:"",children:Object(p.jsx)(u.a,{label:"Start year",list:w.k,selectedItem:D.start_year,placeholder:"-",onSelect:function(e){return H(Object(r.a)(Object(r.a)({},D),{},{start_year:e.name}))}})}),Object(p.jsx)("div",{className:"",children:Object(p.jsx)(u.a,{label:"End year (or expected)",placeholder:"-",list:w.l,selectedItem:D.end_year,onSelect:function(e){return H(Object(r.a)(Object(r.a)({},D),{},{end_year:e.name}))}})})]}),Object(p.jsx)("div",{children:Object(p.jsx)(O,{className:"mt-2",enabled:D.above_sixteen,text:"I'm over 16 years old",setEnabled:function(){return H(Object(r.a)(Object(r.a)({},D),{},{above_sixteen:!D.above_sixteen}))}})}),Object(p.jsx)("div",{children:Object(p.jsx)(b.a,{color:"gray",onClick:function(){return j.push(x.a.CHOOSE_ACCOUNT)},text:"I'm not a student",className:"text-center py-2"})}),Object(p.jsx)("div",{children:Object(p.jsx)(d.a,{fullWidth:!0,rounded:"rounded-lg",gradient:!0,type:"submit",loading:T,label:"Next Step"})})]})})})})})}}}]);
//# sourceMappingURL=8.ee24877c.chunk.js.map