(this.webpackJsonp13rms=this.webpackJsonp13rms||[]).push([[10],{549:function(e,s,a){"use strict";a.r(s);var t=a(9),l=a(7),r=a(1),c=a(44),i=a(45),d=a(18),m=a(11),o=a(16),n=a(25),j=a(17),b=a(31),x=a(27),u=a(32),O=a(2);s.default=function(){var e=Object(m.f)(),s=Object(r.useState)(!0),a=Object(l.a)(s,2),f=a[0],h=a[1],g=Object(u.b)(),p=g.setValues,w=g.values,N=j.a({email:j.c().email("Invalid email address").required("Please add email address"),password:j.c().required("Please add password"),confirmPassword:j.c().oneOf([j.b("password"),null],"Password must match").required("Please add confirm password")}),y=Object(r.useState)(!1),v=Object(l.a)(y,2),P=v[0],S=v[1];return setTimeout((function(){h(!0)}),1e3),f?Object(O.jsxs)("div",{className:"min-h-screen bg-gray-50 flex flex-col justify-start py-12 sm:px-6 lg:px-8",children:[Object(O.jsxs)("div",{className:"sm:mx-auto sm:w-full sm:max-w-md flex items-center flex-col ",children:[Object(O.jsx)("img",{className:"mx-auto h-32 w-auto",src:"/logo.png",alt:"Workflow"}),Object(O.jsx)("h2",{className:"mt-6 text-center text-3xl font-extrabold text-gray-900",children:"Create new account"}),Object(O.jsxs)("p",{className:"mt-2 text-center text-sm text-gray-600",children:["Discover the benefits of selling and ",Object(O.jsx)("br",{}),"networking with your profile"]})]}),Object(O.jsxs)("div",{className:"mt-8 sm:mx-auto sm:w-full sm:max-w-md",children:[Object(O.jsx)("div",{className:"bg-white py-8 px-4 shadow-md sm:rounded-lg sm:px-10",children:Object(O.jsx)(n.c,{initialValues:w.user,validationSchema:N,onSubmit:function(s){S(!0),Object(b.a)(3e3).then((function(){p(Object(t.a)(Object(t.a)({},w),{},{user:Object(t.a)(Object(t.a)({},w.user),{},{firstName:s.firstName,lastName:s.lastName,email:s.email})})),window.localStorage.setItem("user",JSON.stringify(w.user)),console.log("Successfully added user to local storage"),S(!1),e.push(x.a.CHOOSE_ACCOUNT)}))},children:Object(O.jsxs)(n.b,{className:"space-y-6",children:[Object(O.jsxs)("div",{className:"mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6",children:[Object(O.jsx)(o.a,{gridClass:"sm:col-span-3",label:"First name",id:"firstName",name:"firstName"}),Object(O.jsx)(o.a,{gridClass:"sm:col-span-3",label:"Last name",id:"lastName",name:"lastName"})]}),Object(O.jsx)(o.a,{label:"Email",id:"email",name:"email",required:!0,type:"email"}),Object(O.jsx)(o.a,{label:"Password",id:"password",name:"password",showPasswordButton:!0,type:"password",required:!0}),Object(O.jsx)(o.a,{label:"Confirm password",name:"confirmPassword",id:"confirmPassword",showPasswordButton:!0,type:"password",required:!0}),Object(O.jsxs)("p",{className:"my-4 text-left text-xs text-gray-600",children:["By clicking Agree and Join, you agree to 13RMS"," ",Object(O.jsx)("a",{href:"#/",className:"font-medium text-xs text-blue-600 hover:text-blue-500",children:"User Agreement, Privacy Policy"})," ","and"," ",Object(O.jsx)("a",{href:"#/",className:"font-medium text-xs text-blue-600 hover:text-blue-500",children:"Cookie Policy"})]}),Object(O.jsx)("div",{children:Object(O.jsx)(d.a,{type:"submit",fullWidth:!0,rounded:"rounded-lg",loading:P,gradient:!0,label:"Agree and become a member"})})]})})}),Object(O.jsxs)("div",{className:"mt-4 text-center",children:["Already on 13RMS?",Object(O.jsxs)("a",{href:"/login",className:"link-hover",children:[" ","Login now"]})]})]}),Object(O.jsx)(i.a,{})]}):Object(O.jsx)(c.a,{})}}}]);
//# sourceMappingURL=10.189e2b62.chunk.js.map