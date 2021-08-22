(this.webpackJsonp13rms=this.webpackJsonp13rms||[]).push([[6],{1807:function(e,s,a){"use strict";a.r(s);var t=a(10),r=a(6),l=a(1),c=a(59),i=a(61),d=a(8),m=a(17),o=a(32),n=a(36),x=a(33),b=a(48),j=a(42),u=a(24),O=a(2);s.default=function(){var e=Object(m.f)(),s=Object(l.useState)(!0),a=Object(r.a)(s,2),h=a[0],g=a[1],f=Object(u.b)(),w=f.setValues,p=f.values,y=x.a({email:x.c().email("Invalid email address").required("Please add email address"),password:x.c().required("Please add password"),confirmPassword:x.c().oneOf([x.b("password"),null],"Password must match").required("Please add confirm password")}),N=Object(l.useState)(!1),v=Object(r.a)(N,2),P=v[0],k=v[1];return setTimeout((function(){g(!0)}),1e3),h?Object(O.jsxs)("div",{className:"min-h-screen bg-gray-50 dark:bg-gray-800 flex flex-col justify-start py-12 sm:px-6 lg:px-8",children:[Object(O.jsxs)("div",{className:"sm:mx-auto sm:w-full sm:max-w-md flex items-center flex-col ",children:[Object(O.jsx)("img",{className:"mx-auto h-32 w-auto",src:"/logo.png",alt:"Workflow"}),Object(O.jsx)("h2",{className:"mt-6 dark:text-white text-center text-3xl font-extrabold text-gray-900",children:"Create new account"}),Object(O.jsxs)("p",{className:"mt-2 text-center text-sm text-gray-600",children:["Discover the benefits of selling and ",Object(O.jsx)("br",{}),"networking with your profile"]})]}),Object(O.jsxs)("div",{className:"mt-8 sm:mx-auto sm:w-full sm:max-w-md",children:[Object(O.jsx)("div",{className:"bg-white dark:bg-gray-800 py-8 px-4 shadow-md sm:rounded-lg sm:px-6",children:Object(O.jsx)(n.c,{initialValues:p.user,validationSchema:y,onSubmit:function(s){k(!0),Object(b.a)(3e3).then((function(){w(Object(t.a)(Object(t.a)({},p),{},{user:Object(t.a)(Object(t.a)({},p.user),{},{firstName:s.firstName,lastName:s.lastName,email:s.email})})),window.localStorage.setItem("user",JSON.stringify(p.user)),console.log("Successfully added user to local storage"),k(!1),e.push(j.a.CHOOSE_ACCOUNT)}))},children:Object(O.jsxs)(n.b,{className:"space-y-6",children:[Object(O.jsxs)("div",{className:"mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6",children:[Object(O.jsx)(o.a,{gridClass:"sm:col-span-3",label:"First name",id:"firstName",name:"firstName"}),Object(O.jsx)(o.a,{gridClass:"sm:col-span-3",label:"Last name",id:"lastName",name:"lastName"})]}),Object(O.jsx)(o.a,{label:"Email",id:"email",name:"email",required:!0,type:"email"}),Object(O.jsx)(o.a,{label:"Password",id:"password",name:"password",showPasswordButton:!0,type:"password",required:!0}),Object(O.jsx)(o.a,{label:"Confirm password",name:"confirmPassword",id:"confirmPassword",showPasswordButton:!0,type:"password",required:!0}),Object(O.jsxs)("p",{className:"my-4 text-left text-xs dark:text-gray-400 text-gray-600",children:["By clicking Agree and Join, you agree to 13RMS"," ",Object(O.jsx)("a",{href:"#/",className:"font-medium text-xs text-blue-600 hover:text-blue-500",children:"User Agreement, Privacy Policy"})," ","and"," ",Object(O.jsx)("a",{href:"#/",className:"font-medium text-xs text-blue-600 hover:text-blue-500",children:"Cookie Policy"})]}),Object(O.jsx)("div",{children:Object(O.jsx)(d.a,{type:"submit",fullWidth:!0,rounded:"rounded-lg",loading:P,gradient:!0,label:"Agree and become a member"})})]})})}),Object(O.jsxs)("div",{className:"mt-4 text-center dark:text-white",children:["Already on 13RMS?",Object(O.jsxs)("a",{href:"/login",className:"link-hover",children:[" ","Login now"]})]})]}),Object(O.jsx)(i.a,{})]}):Object(O.jsx)(c.a,{})}}}]);
//# sourceMappingURL=6.24e6b78f.chunk.js.map