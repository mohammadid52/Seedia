(this.webpackJsonp13rms=this.webpackJsonp13rms||[]).push([[47],{414:function(e,t,s){"use strict";s.d(t,"b",(function(){return n})),s.d(t,"e",(function(){return c})),s.d(t,"a",(function(){return r})),s.d(t,"d",(function(){return l})),s.d(t,"c",(function(){return o}));s(28),s(48);var i=s(426),a=s.n(i);var n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:50;return e.length>t?e.substring(0,t)+"...":e},c=function(e,t){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:",";return e.map((function(e){return e[t]})).join(s)},r=function(e){for(var t=e.target,s=t.value,i=t.cols,a=null===s||void 0===s?void 0:s.split("\n"),n=a.length,c=0;c<a.length;c++)n+=parseInt(a[c].length/i);t.rows=n>50?50:n},l=function(e){if(e&&e.length>0)return e.split(" ").filter((function(e){return"in"!==e||"or"!==e||"of"!==e||"the"!==e||"is"!==e||"can"!==e||"so"!==e||"."!==e||"to"!==e}))},o=function(e){return a()(e).fromNow()}},421:function(e,t,s){var i=s(211),a=s(140),n=s(427),c=s(36);e.exports=function(e,t){return(c(e)?i:n)(e,a(t,3))}},427:function(e,t,s){var i=s(212),a=s(142);e.exports=function(e,t){var s=-1,n=a(e)?Array(e.length):[];return i(e,(function(e,i,a){n[++s]=t(e,i,a)})),n}},432:function(e,t,s){"use strict";var i=s(138),a=s(6),n=s(35);t.a=function(e,t){var s=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],c=t&&Object(a.d)(e)===(null===t||void 0===t?void 0:t._id),r=Object(n.useQuery)("user",(function(){return Object(i.t)(e)}),{enabled:!c&&s}),l=r.isFetched,o=r.isLoading,d=r.data,j=r.refetch,x=l&&!o&&d.data.data;return{otherUserData:x,isFetched:l,isLoading:o,iAmOwnerOfThisProfile:c,refetch:j}}},683:function(e,t,s){"use strict";s.r(t);var i=s(138),a=s(32),n=s(135),c=s(49),r=s(76),l=s(143),o=s(147),d=s(432),j=s(421),x=s.n(j),u=s(35),m=s(13),b=s(10),h=s(72),v=s(414),f=s(2),g=function(e){var t=e.title,s=e.content;return Object(f.jsxs)("div",{className:"my-8",children:[t&&Object(f.jsx)("h4",{className:"mb-4 font-semibold tracking-tight text-lg text-gray-900 dark:text-white",children:t}),Object(f.jsx)("p",{className:"font-medium whitespace-pre-line tracking-tight text-base text-gray-600 dark:text-gray-400",children:s})]})},O=function(e){var t=e.name,s=e.value,i=e.valueClassName,a=e.nameClassName;return Object(f.jsxs)("div",{className:"py-4 border-b border-gray-200 dark:border-gray-700 sm:py-5 sm:grid sm:grid-cols-2 sm:gap-4 ",children:[Object(f.jsx)("dt",{className:Object(h.a)(a,"text-sm uppercase font-medium gradient-text text-left"),children:t}),Object(f.jsx)("dd",{className:Object(h.a)(i,"mt-1 text-sm dark:text-white text-right text-gray-900 sm:mt-0 sm:col-span-1"),children:s})]})},p=function(e){var t=e.userData,s=e.iAmOwnerOfThisProfile,i=e.websiteUrl,c=e.views,r=void 0===c?0:c,l=e.followingList,d=Object(o.a)(l,t._id),j=d.following,x=d.addFollow,u=d.removeFollow;return Object(f.jsx)("div",{children:Object(f.jsx)(n.a,{className:"p-6 ",content:Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("div",{className:"flex relative items-center justify-between",children:[s&&Object(f.jsxs)("span",{className:"dark:text-gray-400 text-gray-400 italic text-sm absolute top-0 right-0 ",children:["View count: ",r]}),Object(f.jsxs)("div",{className:"flex items-center space-x-12",children:[Object(f.jsxs)("div",{className:"",children:[Object(f.jsx)("span",{className:"sr-only",children:"13RMS"}),Object(f.jsx)("img",{className:"h-36 w-36 sm:h-36 sm:w-36 cursor-pointer rounded-full shadow-xl",src:(null===t||void 0===t?void 0:t.profilePicture)?null===t||void 0===t?void 0:t.profilePicture:b.s,alt:""})]}),Object(f.jsxs)("div",{className:"space-y-1",children:[Object(f.jsx)("h1",{className:"text-2xl leading-6 font-semibold dark:text-white text-gray-900",children:null===t||void 0===t?void 0:t.business.name}),Object(f.jsxs)("h5",{className:"text-base leading-6 font-light mt-2 max-w-132 dark:text-gray-400 text-gray-900",children:[null===t||void 0===t?void 0:t.location.address,", ",null===t||void 0===t?void 0:t.location.city,","," ",null===t||void 0===t?void 0:t.location.country]}),Object(f.jsx)("h5",{className:"text-base leading-6 font-light mt-2 max-w-132 dark:text-gray-400 text-gray-900",children:null===t||void 0===t?void 0:t.business.email})]})]}),Object(f.jsx)("div",{className:"absolute bottom-0 right-0",children:s?Object(f.jsx)("span",{className:"text-base leading-6 font-light  dark:text-gray-400 text-gray-600",children:"Others will see buttons here"}):Object(f.jsxs)("div",{className:"grid grid-cols-2 gap-x-4",children:[Object(f.jsx)(a.a,{onClick:function(){return j?u.mutate(t._id):x.mutate(t._id)},label:"Follow",gradient:!0,size:"lg",className:"px-6"}),Object(f.jsx)(a.a,{label:"Apply",link:i,gradient:!0,className:"px-6",size:"lg"})]})})]})})})})};t.default=function(e){var t,s=e.userData,a=Object(m.i)().projectId,o=Object(u.useQuery)("project",(function(){return Object(i.l)(a)})),j=o.isLoading,h=o.data,y=o.isFetched&&!j?h.data.data:{},w=Object(d.a)(null===y||void 0===y||null===(t=y.company)||void 0===t?void 0:t.profileUrl,s,!1).iAmOwnerOfThisProfile;if(j)return Object(f.jsx)(r.a,{});var N=y.company,k=y.salary,D=y.location,P=N.business,F=N.background;return Object(f.jsxs)(l.a,{userData:s,customMaxWidth:"max-w-7xl",children:[Object(f.jsx)(c.a,{pageUrl:window.location.href,imageUrl:N&&N.profilePicture,pageTitle:"".concat(P.name," | ").concat(P.typeOfBusiness," | Jobs | 13RMS "),title:P.name,description:y.briefDescription,keywords:Object(v.d)(y.briefDescription)}),Object(f.jsxs)("div",{className:"flex flex-col gap-y-12",children:[Object(f.jsx)(p,{followingList:s.following,views:y.views,websiteUrl:y.website,iAmOwnerOfThisProfile:w,userData:N}),Object(f.jsx)(n.a,{content:Object(f.jsxs)("div",{className:"dark:text-gray-400 grid grid-cols-1 gap-x-12 sm:grid-cols-3 text-gray-900",children:[Object(f.jsxs)("div",{className:"sm:col-span-2",children:[Object(f.jsx)("h1",{className:"dark:text-white text-gray-900 text-2xl  mb-4 font-semibold",children:"Description"}),Object(f.jsx)("div",{className:"whitespace-pre-line",children:y.briefDescription}),Object(f.jsx)("br",{}),Object(f.jsxs)("div",{className:"flex flex-col gap-y-4",children:[x()(y.sections,(function(e){return Object(f.jsx)(g,{title:e.title,content:e.content})})),Object(f.jsx)(g,{title:"",content:y.closure})]})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{className:"dark:text-white text-gray-900 text-2xl mb-4 font-semibold",children:"Function Description"}),Object(f.jsxs)("dl",{className:"",children:[Object(f.jsx)(O,{name:"Function Type",value:Object(v.e)(y.functionType,"name")}),Object(f.jsx)(O,{name:"Salary",value:"".concat(k.min," - ").concat(k.max," / ").concat(k.duration)}),Object(f.jsx)(O,{name:"Location",value:"".concat((null===D||void 0===D?void 0:D.city)||"--",", ").concat((null===D||void 0===D?void 0:D.country)||"--")}),Object(f.jsx)(O,{name:"Posted",value:Object(v.c)(y.postedOn)})]})]})]})}),Object(f.jsx)(n.a,{content:Object(f.jsxs)("div",{className:"dark:text-gray-400 grid grid-cols-1 gap-x-12 sm:grid-cols-3 text-gray-900",children:[Object(f.jsxs)("div",{className:"sm:col-span-2",children:[Object(f.jsx)("h1",{className:"dark:text-white text-gray-900 text-2xl  mb-4 font-semibold",children:"About the company"}),Object(f.jsxs)("div",{children:[Object(f.jsxs)("div",{className:"sm:flex items-center",children:[Object(f.jsx)("div",{className:"mb-4 flex-shrink-0 sm:mb-0 sm:mr-4",children:Object(f.jsx)("img",{className:"h-12 w-12  cursor-pointer  shadow-xl",src:(null===N||void 0===N?void 0:N.profilePicture)?null===N||void 0===N?void 0:N.profilePicture:b.s,alt:""})}),Object(f.jsx)("h4",{className:"text-lg font-bold",children:null===P||void 0===P?void 0:P.name})]}),Object(f.jsxs)("div",{className:"mt-4",children:[Object(f.jsx)("p",{className:"dark:text-gray-400 text-gray-600",children:(null===F||void 0===F?void 0:F.summary)||"Test summary"}),Object(f.jsx)("br",{}),Object(f.jsx)("p",{className:"dark:text-gray-400 text-gray-600",children:(null===P||void 0===P?void 0:P.additionalInfo)||"Additional Info"})]})]})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{className:"dark:text-white text-gray-900 text-2xl  mb-4 font-semibold",children:"Company Details"}),Object(f.jsx)(O,{name:"Company Size",value:"100"}),Object(f.jsx)(O,{name:"Type of business",value:P.typeOfBusiness}),Object(f.jsx)(O,{name:"Year of foundation",value:"2007"}),Object(f.jsx)(O,{valueClassName:"underline cursor-pointer tracking-wider",name:"Website",value:y.website})]})]})})]})]})}}}]);
//# sourceMappingURL=47.8767630f.chunk.js.map