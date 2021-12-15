(this.webpackJsonp13rms=this.webpackJsonp13rms||[]).push([[53],{512:function(e,t,a){"use strict";var s=a(28),i=a(2);t.a=function(e){var t=e.text,a=e.color,r=void 0===a?"blue":a,c=e.className,n=void 0===c?"":c;return Object(i.jsx)("div",{className:"rounded-md dark:bg-transparent dark:border-gray-700 border border-gray-50 bg-".concat(r,"-50 p-4 ").concat(n),children:Object(i.jsxs)("div",{className:"flex",children:[Object(i.jsx)("div",{className:"flex-shrink-0",children:Object(i.jsx)(s.e,{className:"h-5 w-5 dark:text-".concat(r,"-300 text-").concat(r,"-400"),"aria-hidden":"true"})}),Object(i.jsx)("div",{className:"ml-3 flex-1 md:flex md:justify-between",children:Object(i.jsx)("p",{className:"text-sm pb-0 mb-0 dark:text-".concat(r,"-300 text-").concat(r,"-700"),children:t})})]})})}},861:function(e,t,a){"use strict";a.r(t);var s=a(33),i=a.n(s),r=a(3),c=a(55),n=a(10),l=a(60),o=a(190),d=a(512),u=a(34),b=a(104),j=a(69),m=a(191),x=a(170),p=a(8),h=a(119),O=a(61),f=a(44),v=a(1),k=a(35),g=a(17),y=a(90),w=a(2);t.default=function(e){var t,a,s=e.userData,q=y.a({title:y.c().required("Title is required").min(10).max(150),description:y.c().required("Description is required").min(50).max(600)}),N={title:"",description:"",skills:(null===s||void 0===s||null===(t=s.background)||void 0===t?void 0:t.skills)||[]},S=Object(O.b)().setNotification,T=Object(k.useMutation)(l.b,{onSuccess:function(){L.push(p.a.FEED)}}),D=Object(k.useMutation)(l.e,{onSuccess:function(e){var t=e.data.data,a=e.data.message;S({show:!0,title:a,buttonText:"View",buttonUrl:p.a.viewRequestById(t)}),T.mutate({postData:{text:"".concat(s.fullName," has placed request for work."),postType:"request",customInId:t}})}}),J=D.mutate,R=D.isLoading,E=D.isError,I=D.error,M=Object(v.useState)(""),P=Object(n.a)(M,2),V=P[0],A=P[1],L=Object(g.g)(),W=function(){var e=Object(c.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.skills.length>0?(a=Object(r.a)(Object(r.a)({},t),{},{skills:t.skills.map((function(e){return e.name}))}),J(a),A("")):A("Add atleast one skill");case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(w.jsxs)(h.a,{userData:s,children:[Object(w.jsx)(j.a,{pageTitle:"Place Request | Jobs | 13RMS"}),Object(w.jsx)(m.a,{fontWeight:"font-bold mb-8",children:"Place Request"}),Object(w.jsx)(f.b,{initialValues:N,validationSchema:q,onSubmit:W,children:Object(w.jsxs)(f.a,{className:"space-y-8",children:[Object(w.jsx)(d.a,{text:"Job/Work Title and Skills are very important for more views and jobs. Try to add more keywords related to your skills in it. Like Javascript, etc."}),Object(w.jsx)(b.a,{label:"Title",id:"title",name:"title",required:!0,placeholder:"Add title"}),Object(w.jsx)(b.a,{label:"Description",id:"description",name:"description",placeholder:"Give a little information about your niche",required:!0,textarea:!0,rows:5,cols:255}),Object(w.jsx)(x.a,{initialValues:null===s||void 0===s||null===(a=s.background)||void 0===a?void 0:a.skills,min:3,max:20,name:"skills",placeholder:"skill"}),Object(w.jsx)("div",{className:"flex items-center justify-end",children:Object(w.jsx)(u.a,{type:"submit",rounded:"rounded-lg",loading:R,gradient:!0,size:"lg",label:"Place request"})}),E&&Object(w.jsx)(o.a,{errors:[I.toString()]}),!E&&V&&Object(w.jsx)(o.a,{errors:[V.toString()]})]})})]})}}}]);
//# sourceMappingURL=53.2f84f75e.chunk.js.map