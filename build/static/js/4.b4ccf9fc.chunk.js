(this.webpackJsonp13rms=this.webpackJsonp13rms||[]).push([[4],{433:function(e,a,t){"use strict";t.r(a);var s=t(15),r=t.n(s),n=t(3),c=t(22),i=t(8),d=t(1),o=t(71),l=t(11),u=t(72),m=t(51),b=t(36),j=t(105),p=t(47),h=t(18),x=t(29),O=t(13),w=t(30),f=t(2);a.default=function(){var e=Object(d.useState)(!0),a=Object(i.a)(e,2),t=a[0],s=a[1],g=Object(x.g)(),v=b.a({email:b.c().email("Invalid email address").required("Please add email address"),password:b.c().required("Please add password").min(6).max(20)}),y=Object(w.b)().setValues,k=Object(O.a)(),S=Object(d.useState)(!1),N=Object(i.a)(S,2),q=N[0],A=N[1],J=function(){var e=Object(c.a)(r.a.mark((function e(a){var t,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.d.post("/auth/login",{email:a.email,password:a.password},{headers:{Authorization:k}});case 2:t=e.sent,delete(s=t.data)._id,y(Object(n.a)(Object(n.a)({},s.data),s)),g.push(h.a.DASHBAORD),localStorage.setItem("access_token",s.data.access_token);case 8:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),P=function(){var e=Object(c.a)(r.a.mark((function e(a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:A(!0),J(a);case 2:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return setTimeout((function(){s(!0)}),1e3),t?Object(f.jsx)(u.a,{title:"Sign in to your account",subtitle:Object(f.jsx)("p",{className:"mt-1 text-center dark:text-gray-400 text-sm text-gray-600",children:"Stay updated on your professional world"}),children:Object(f.jsxs)("div",{className:"mt-8 mb-36 sm:mx-auto sm:w-full sm:max-w-md",children:[Object(f.jsx)("div",{className:"bg-white dark:bg-gray-800 border border-transparent dark:border-gray-700 py-8 px-4 shadow-md sm:rounded-lg sm:px-6",children:Object(f.jsx)(m.c,{initialValues:j.c,validationSchema:v,onSubmit:P,children:Object(f.jsxs)(m.b,{className:"space-y-6",children:[Object(f.jsx)(p.a,{label:"Email",id:"email",name:"email",required:!0}),Object(f.jsx)(p.a,{label:"password",id:"password",name:"password",required:!0,showPasswordButton:!0}),Object(f.jsx)("div",{children:Object(f.jsx)(l.a,{type:"submit",fullWidth:!0,rounded:"rounded-lg",gradient:!0,loading:q,label:"Login"})})]})})}),Object(f.jsxs)("div",{className:"mt-4 text-center dark:text-white",children:["Not yet on 13RMS?",Object(f.jsxs)("a",{href:"/signup",className:"link-hover",children:[" ","Join now"]})]})]})}):Object(f.jsx)(o.a,{})}}}]);
//# sourceMappingURL=4.b4ccf9fc.chunk.js.map