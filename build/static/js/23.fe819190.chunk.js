(this.webpackJsonp13rms=this.webpackJsonp13rms||[]).push([[23],{428:function(e,t,r){var a=r(229),n=r(121),i=r(434),s=r(50);e.exports=function(e,t){return(s(e)?a:i)(e,n(t,3))}},433:function(e,t,r){var a=r(439),n=r(122);e.exports=function(e,t){return e&&a(e,t,n)}},434:function(e,t,r){var a=r(435),n=r(157);e.exports=function(e,t){var r=-1,i=n(e)?Array(e.length):[];return a(e,(function(e,a,n){i[++r]=t(e,a,n)})),i}},435:function(e,t,r){var a=r(433),n=r(436)(a);e.exports=n},436:function(e,t,r){var a=r(157);e.exports=function(e,t){return function(r,n){if(null==r)return r;if(!a(r))return e(r,n);for(var i=r.length,s=t?i:-1,c=Object(r);(t?s--:++s<i)&&!1!==n(c[s],s,c););return r}}},439:function(e,t,r){var a=r(440)();e.exports=a},440:function(e,t){e.exports=function(e){return function(t,r,a){for(var n=-1,i=Object(t),s=a(t),c=s.length;c--;){var l=s[e?c:++n];if(!1===r(i[l],l,i))break}return t}}},481:function(e,t,r){"use strict";var a=r(15),n=r(2);t.a=function(e){var t=e.tabs,r=e.currentTab,i=e.setCurrentTab;return Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"sm:hidden",children:[Object(n.jsx)("label",{htmlFor:"tabs",className:"sr-only",children:"Select a tab"}),Object(n.jsx)("select",{id:"tabs",name:"tabs",className:"block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md",defaultValue:t.find((function(e){return e.name===r})).name,children:t.map((function(e){return Object(n.jsx)("option",{children:e.name},e.name)}))})]}),Object(n.jsx)("div",{className:"hidden sm:block",children:Object(n.jsx)("div",{className:"",children:Object(n.jsx)("nav",{className:"-mb-px flex space-x-8","aria-label":"Tabs",children:t.map((function(e){return Object(n.jsx)("div",{tabIndex:0,onClick:function(){return i(e.name)},className:Object(a.a)(r===e.name?" gradient-text border-b-2 dark:border-pink-700 border-pink-200":"dark:hover:text-pink-600 border-transparent border-b-2 text-gray-500 hover:text-gray-700 dark:hover:border-gray-600 hover:border-gray-300","whitespace-nowrap py-4 cursor-pointer px-1  font-medium text-sm"),children:e.name},e.name)}))})})})]})}},482:function(e,t,r){"use strict";var a=r(23),n=r(1);t.a=function(e){var t=e[0].name,r=Object(n.useState)(t),i=Object(a.a)(r,2),s=i[0],c=i[1],l=e.map((function(e){return e.name===s}));return{currentTab:s,setCurrentTab:c,helpers:l}}},518:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],a=!0,n=!1,i=void 0;try{for(var s,c=e[Symbol.iterator]();!(a=(s=c.next()).done)&&(r.push(s.value),!t||r.length!==t);a=!0);}catch(l){n=!0,i=l}finally{try{!a&&c.return&&c.return()}finally{if(n)throw i}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},n=r(1),i=o(n),s=o(r(13)),c=o(r(546)),l=o(r(547));function o(e){return e&&e.__esModule?e:{default:e}}var d={overflow:"hidden",position:"relative"};function u(e,t){return"\n    .react-stars-"+t+":before {\n      position: absolute;\n      overflow: hidden;\n      display: block;\n      z-index: 1;\n      top: 0; left: 0;\n      width: 50%;\n      content: attr(data-forhalf);\n      color: "+e+";\n  }"}function b(e){var t=(0,n.useState)(""),r=a(t,2),s=r[0],o=r[1],b=(0,n.useState)(0),f=a(b,2),j=f[0],m=f[1],v=(0,n.useState)([]),h=a(v,2),x=h[0],g=h[1],p=(0,n.useState)(!1),y=a(p,2),O=y[0],w=y[1],k=(0,c.default)(e),N=a(k,2),S=N[0],I=N[1],C=(0,n.useState)(0),M=a(C,2),T=M[0],_=M[1],z=(0,n.useState)(!1),A=a(z,2),H=A[0],R=A[1],E=(0,n.useState)(""),P=a(E,2),B=P[0],L=P[1];function D(e){"undefined"===typeof e&&(e=S.isHalf?Math.floor(j):Math.round(j));for(var t=[],r=0;r<S.count;r++)t.push({active:r<=e-1});return t}function U(e){if(S.edit){var t=Number(e.currentTarget.getAttribute("data-index"));if(S.isHalf){var r=W(e);R(r),r&&(t+=1),_(t)}else t+=1;!function(e){var t=x.filter((function(e){return e.active}));e!==t.length&&g(D(e))}(t)}}function W(e){var t=e.target.getBoundingClientRect(),r=e.clientX-t.left;return(r=Math.round(Math.abs(r)))>t.width/2}function X(){S.edit&&(F(j),g(D()))}function F(e){S.isHalf&&(R(function(e){return e%1===0}(e)),_(Math.floor(e)))}function G(e){if(S.edit){var t=Number(e.currentTarget.getAttribute("data-index")),r=void 0;if(S.isHalf){var a=W(e);R(a),a&&(t+=1),r=a?t:t+.5,_(t)}else r=t+=1;q(r)}}function q(t){t!==j&&(g(D(t)),m(t),e.onChange(t))}return(0,n.useEffect)((function(){var t,r;!function(){var t="react-stars";L(e.classNames+" "+t)}(),t=e.value,r=e.count,m(t<0||t>r?0:t),g(D(e.value)),I(e),o((Math.random()+"").replace(".","")),w(function(e){return!e.isHalf&&e.emptyIcon&&e.filledIcon||e.isHalf&&e.emptyIcon&&e.halfIcon&&e.filledIcon}(e)),_(Math.floor(e.value)),R(e.isHalf&&e.value%1<.5)}),[]),i.default.createElement("div",{className:"react-stars-wrapper-"+s,style:{display:"flex"}},i.default.createElement("div",{tabIndex:S.a11y&&S.edit?0:null,"aria-label":"add rating by typing an integer from 0 to 5 or pressing arrow keys",onKeyDown:function(e){if(S.a11y||S.edit){var t=e.key,r=j,a=Number(t);a?Number.isInteger(a)&&a>0&&a<=S.count&&(r=a):("ArrowUp"===t||"ArrowRight"===t)&&r<S.count?(e.preventDefault(),r+=S.isHalf?.5:1):("ArrowDown"===t||"ArrowLeft"===t)&&r>.5&&(e.preventDefault(),r-=S.isHalf?.5:1),F(r),q(r)}},className:B,style:d},S.isHalf&&function(){return i.default.createElement("style",{dangerouslySetInnerHTML:{__html:O?(e=S.activeColor,"\n          span.react-stars-half > * {\n          color: "+e+";\n      }"):u(S.activeColor,s)}});var e}(),x.map((function(e,t){return i.default.createElement(l.default,{key:t,index:t,active:e.active,config:S,onMouseOver:U,onMouseLeave:X,onClick:G,halfStarHidden:H,halfStarAt:T,isUsingIcons:O,uniqueness:s})})),i.default.createElement("p",{style:{position:"absolute",left:"-200rem"},role:"status"},j)))}b.propTypes={classNames:s.default.string,edit:s.default.bool,half:s.default.bool,value:s.default.number,count:s.default.number,char:s.default.string,size:s.default.number,color:s.default.string,activeColor:s.default.string,emptyIcon:s.default.element,halfIcon:s.default.element,filledIcon:s.default.element,a11y:s.default.bool},b.defaultProps={edit:!0,half:!1,value:0,count:5,char:"\u2605",size:15,color:"gray",activeColor:"#ffd700",a11y:!0,onChange:function(){}},t.default=b},546:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],a=!0,n=!1,i=void 0;try{for(var s,c=e[Symbol.iterator]();!(a=(s=c.next()).done)&&(r.push(s.value),!t||r.length!==t);a=!0);}catch(l){n=!0,i=l}finally{try{!a&&c.return&&c.return()}finally{if(n)throw i}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")};t.default=function(e){var t=(0,n.useState)(e.count),r=a(t,2),i=r[0],s=r[1],c=(0,n.useState)(e.size),l=a(c,2),o=l[0],d=l[1],u=(0,n.useState)(e.char),b=a(u,2),f=b[0],j=b[1],m=(0,n.useState)(e.color),v=a(m,2),h=v[0],x=v[1],g=(0,n.useState)(e.activeColor),p=a(g,2),y=p[0],O=p[1],w=(0,n.useState)(e.isHalf),k=a(w,2),N=k[0],S=k[1],I=(0,n.useState)(e.edit),C=a(I,2),M=C[0],T=C[1],_=(0,n.useState)(e.emptyIcon),z=a(_,2),A=z[0],H=z[1],R=(0,n.useState)(e.halfIcon),E=a(R,2),P=E[0],B=E[1],L=(0,n.useState)(e.filledIcon),D=a(L,2),U=D[0],W=D[1],X=(0,n.useState)(e.a11y),F=a(X,2),G=F[0],q=F[1];return[{count:i,size:o,char:f,color:h,activeColor:y,isHalf:N,edit:M,emptyIcon:A,halfIcon:P,filledIcon:U,a11y:G},function(e){s(e.count),d(e.size),j(e.char),x(e.color),O(e.activeColor),S(e.isHalf),T(e.edit),H(e.emptyIcon),B(e.halfIcon),W(e.filledIcon),q(e.a11y)}]};var n=r(1)},547:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e};t.default=function(e){var t=e.index,r=e.active,n=e.config,i=e.onMouseOver,l=e.onMouseLeave,o=e.onClick,d=e.halfStarHidden,u=e.halfStarAt,b=e.isUsingIcons,f=e.uniqueness,j=n.color,m=n.activeColor,v=n.size,h=n.char,x=n.isHalf,g=n.edit,p=n.halfIcon,y=n.emptyIcon,O=n.filledIcon,w="",k=!1;x&&!d&&u===t&&(w=b?"react-stars-half":"react-stars-"+f,k=!0);var N=a({},c,{color:r?m:j,cursor:g?"pointer":"default",fontSize:v+"px"});return s.default.createElement("span",{className:w,style:N,key:t,"data-index":t,"data-forhalf":O?t:h,onMouseOver:i,onMouseMove:i,onMouseLeave:l,onClick:o},b?r?O:!r&&k?p:y:h)};var n,i=r(1),s=(n=i)&&n.__esModule?n:{default:n};var c={position:"relative",overflow:"hidden",cursor:"pointer",display:"block",float:"left"}},548:function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return l}));var a=r(38),n=r.n(a),i=r(63),s=(r(37),r(12)),c=function(e){return function(){var t=Object(i.a)(n.a.mark((function t(r){return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r({type:s.a,data:e});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},l=function(e){return function(){var t=Object(i.a)(n.a.mark((function t(r){return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r({type:s.j,data:e});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},700:function(e,t,r){},879:function(e,t,r){"use strict";r.r(t);var a=r(23),n=r(43),i=r(155),s=r(42),c=r(154),l=r(65),o=r(89),d=r(163),u=r(9),b=r(159),f=r(7),j=r(37),m=r(160),v=r(66),h=r(92),x=r(5),g=r(481),p=r(482),y=r(67),O=r(428),w=r.n(O),k=r(64),N=r(427),S=r.n(N),I=r(1),C=r(44),M=r(32),T=r(518),_=r.n(T),z=r(15),A=r(2),H=function(e){var t,r,n,i,s=e.review,c=e.userId,l={size:20,value:s.rating,edit:!1};console.log("\ud83d\ude80 ~ file: Review.tsx ~ line 14 ~ Review ~ review",s);var o=Object(M.useMutation)(k.l),d=Object(I.useState)(s.likes.includes(c)),b=Object(a.a)(d,2),f=b[0],j=b[1],m=Object(I.useState)(s.dislikes.includes(c)),v=Object(a.a)(m,2),h=v[0],g=v[1],p=Object(I.useState)({likes:(null===s||void 0===s||null===(t=s.likes)||void 0===t?void 0:t.length)||0,dislikes:(null===s||void 0===s||null===(r=s.likes)||void 0===r?void 0:r.length)||0}),y=Object(a.a)(p,2),O=y[0],w=y[1],N=S()(s.createdOn).format("ll");return Object(A.jsx)("div",{className:"flex",children:Object(A.jsxs)("div",{className:"border-b space-y-2  w-full dark:border-gray-700 border-gray-200 pb-8",children:[Object(A.jsx)("div",{children:Object(A.jsx)(_.a,Object(x.a)({},l))}),Object(A.jsx)("h1",{className:"text-lg font-semibold text-gray-900 dark:text-white",children:(null===s||void 0===s?void 0:s.reviewTitle)||""}),Object(A.jsx)("div",{children:Object(A.jsxs)("p",{className:"mt-1 flex items-center font-light dark:text-gray-300 text-gray-700",children:["By"," ",Object(A.jsx)("a",{href:u.a.getProductUrl(null===s||void 0===s||null===(n=s.user)||void 0===n?void 0:n.profileUrl),className:"hover:underline ml-1 font-medium",children:null===s||void 0===s||null===(i=s.user)||void 0===i?void 0:i.fullName}),", ",s.user.location.country," on ",N]})}),Object(A.jsx)("div",{className:"",children:Object(A.jsx)("p",{className:"mt-1 font-light dark:text-gray-300 text-gray-700",children:s.reviewText})}),Object(A.jsxs)("div",{className:"flex gap-x-2  items-center",children:[Object(A.jsxs)("div",{onClick:function(){o.mutate({reviewId:s._id,action:"like"}),j((function(e){return e?(w(Object(x.a)(Object(x.a)({},O),{},{likes:O.likes-1})),!1):(w(Object(x.a)(Object(x.a)({},O),{},{likes:O.likes+1,dislikes:h?O.dislikes-1:O.dislikes})),!0)})),h&&g(!1)},className:Object(z.a)(f?"bg-yellow-500 border-yellow-500 text-white":" dark:border-gray-700 border-gray-200 dark:text-gray-400  text-gray-800","mt-2  border flex  items-center px-4 transition-all cursor-pointer  rounded-md py-1"),children:[Object(A.jsx)(C.o,{className:"text-lg mr-2  "})," ",Object(A.jsx)("p",{className:" text-base ",children:O.likes})]}),Object(A.jsxs)("div",{onClick:function(){o.mutate({reviewId:s._id,action:"dislike"}),g((function(e){return e?(w(Object(x.a)(Object(x.a)({},O),{},{dislikes:O.dislikes-1})),!1):(w(Object(x.a)(Object(x.a)({},O),{},{dislikes:O.dislikes+1,likes:f?O.likes-1:O.likes})),!0)})),f&&j(!1)},className:Object(z.a)(h?"bg-yellow-500 border-yellow-500 text-white":" dark:border-gray-700 border-gray-200 dark:text-gray-400  text-gray-800","mt-2  border flex  items-center px-4 transition-all cursor-pointer  rounded-md py-1"),children:[Object(A.jsx)(C.h,{className:"text-lg mr-2 "})," ",Object(A.jsx)("p",{className:" text-base ",children:O.dislikes})]})]})]})})},R=function(e){var t=e.reviews,r=e.userId;return Object(A.jsx)("div",{className:"flex flex-col gap-y-12",children:t&&t.length>0?w()(t,(function(e){return Object(A.jsx)(H,{userId:r,review:e})})):Object(A.jsx)(y.a,{title:"No reviews found",hideBorders:!0,subtitle:"No one has given this rating for the product yet.",iconUrl:"/rating.png"})})},E=function(e){var t=e.productId;return Object(A.jsx)(s.a,{link:u.a.createReview(t),label:"Write your review",gradient:!0,size:"lg",target:""})},P=function(e){var t=e.productId,r=e.reviews,a=e.highestRatedStar;e.alreadyReviewGiven;return Object(A.jsxs)("div",{className:" ",children:[Object(A.jsx)("div",{children:Object(A.jsx)(_.a,Object(x.a)({},{size:24,value:4,edit:!1}))}),Object(A.jsxs)("h2",{className:"mt-1 text-gray-900 font-medium text-xl dark:text-white",children:[r.length," reviews"]}),Object(A.jsxs)("span",{className:"mt-1 block mb-4 text-gray-500 font-medium text-sm    ",children:[a," out 5 stars"]}),Object(A.jsx)(E,{productId:t})]})},B=function(e){var t=e.ratingPercentage,r=e.highestRatedStar;return Object(A.jsx)("ul",{className:"space-y-3 flex items-center justify-end flex-col sm:ml-40",children:Object(j.times)(5,(function(e){var a=5-e,n=t[a];return Object(A.jsxs)("li",{className:"flex items-center",children:[Object(A.jsxs)("span",{className:Object(z.a)(a===r?"dark:text-gray-300 text-gray-900 font-semibold":"dark:text-gray-500 text-gray-400 font-semibold "),children:[a," stars"]}),Object(A.jsx)("progress",{value:n,max:"100",className:"rating-bar mx-2"}),Object(A.jsxs)("span",{className:"text-gray-500 font-semibold w-4",children:[n,"%"]})]})}))})},L=function(){return Object(A.jsx)("h4",{children:"Loading..."})},D=function(e){var t=e.reviewsIds,r=e.productId,n=e.userId,s={idArray:t},c=Object(M.useQuery)("reviews",(function(){return Object(i.q)(r,s)}),{enabled:Boolean(t&&t.length>0)}),l=c.isIdle,o=c.isLoading,d=c.data,u=c.isFetched,b=Boolean(Object(j.find)(t,(function(e){return e.userId===n}))),f=u&&!o?d.data.data:[],m=[{name:"Latest"},{name:"5 stars"},{name:"4 stars"},{name:"3 stars"},{name:"2 stars"},{name:"1 star"}],y=Object(p.a)(m),O=y.currentTab,w=y.setCurrentTab,k=y.helpers;function N(){var e={};return Object(j.forEach)(f,(function(t){e[t.rating]?e[t.rating]=e[t.rating]+1:e[t.rating]=1})),function(e){var t=e;return Object(j.times)(5,(function(e){var r=5-e;t[r]||(t[r]=0)})),t}(e)}var S=f&&Array.isArray(f)?function(){var e=N(),t=Object.keys(e),r={};return Object(j.forEach)(t,(function(t){var a=function(e){var t=N(),r=e/Object.values(t).reduce((function(e,t){return e+t}),0)*100;return Math.ceil(r)}(e[t])||0;r=Object(x.a)(Object(x.a)({},r),{},Object(h.a)({},t,a))})),r}():[{rating:0}],C=function(){var e,t=N(),r=Object.keys(t);return Object(j.forEach)(r,(function(r){var a=t[r];e=a>0?Number(r):0})),e}(),T={productId:r,reviews:f,highestRatedStar:C},_=Object(a.a)(k,6),z=_[0],H=_[1],E=_[2],D=_[3],U=_[4],W=_[5],X=Object(j.orderBy)(f,["createdOn"],["desc"]),F=Object(I.useState)(Object(v.a)(X)),G=Object(a.a)(F,2),q=G[0],J=G[1],Q=function(e){return f.filter((function(t){return Number(t.rating)===e}))};return Object(I.useEffect)((function(){z?J(Object(v.a)(X)):H?J(Object(v.a)(Q(5))):E?J(Object(v.a)(Q(4))):D?J(Object(v.a)(Q(3))):U?J(Object(v.a)(Q(2))):W&&J(Object(v.a)(Q(1)))}),[H,E,D,U,W]),o&&!l?Object(A.jsx)(L,{}):Object(A.jsx)("div",{className:"p-6",children:Object(A.jsxs)("div",{className:"grid grid-cols-2 gap-x-4",children:[Object(A.jsx)(P,Object(x.a)({alreadyReviewGiven:b},T)),Object(A.jsx)(B,{ratingPercentage:S,highestRatedStar:C}),f&&f.length>0?Object(A.jsxs)("div",{className:"border-t col-span-2 mt-12 border-gray-200 dark:border-gray-700 py-8",children:[Object(A.jsx)("div",{className:"flex items-center justify-center mb-2",children:Object(A.jsx)(g.a,{currentTab:O,setCurrentTab:w,tabs:m})}),Object(A.jsx)(R,{userId:n,reviews:q})]}):null]})})},U=r(35),W=r(17),X=r(548),F=(r(700),{productName:"Basic Tee 6-Pack",price:"$192",images:[{url:"https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",alt:"Two each of gray, white, and black shirts laying flat."},{url:"https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",alt:"Model wearing plain black basic tee."},{url:"https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",alt:"Model wearing plain gray basic tee."},{url:"https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg",alt:"Model wearing plain white basic tee."}],availableColors:[{name:"White",class:"bg-white",selectedClass:"ring-gray-400"},{name:"Gray",class:"bg-gray-200",selectedClass:"ring-gray-400"},{name:"Black",class:"bg-gray-900",selectedClass:"ring-gray-900"}],availableSizes:[{name:"XXS",inStock:!1},{name:"XS",inStock:!0},{name:"S",inStock:!0},{name:"M",inStock:!0},{name:"L",inStock:!0},{name:"XL",inStock:!0},{name:"2XL",inStock:!0},{name:"3XL",inStock:!0}],productDescription:'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',details:'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.'}),G=function(e){var t,r,i,l,o,d=e.product,b=Object(I.useState)(null===d||void 0===d||null===(t=d.images[1])||void 0===t?void 0:t.url),m=Object(a.a)(b,2),v=m[0],h=m[1],x=Object(U.b)(),g=Object(U.c)((function(e){return Object(f.c)(e)})),p=null===g||void 0===g||null===(r=g.products)||void 0===r?void 0:r.find((function(e){return e._id===d._id}));return Object(A.jsx)(c.a,{content:Object(A.jsxs)("div",{className:"grid grid-cols-2",children:[Object(A.jsxs)("div",{className:"col-md-6 _boxzoom ",children:[Object(A.jsx)("div",{className:"zoom-thumb",children:Object(A.jsx)("ul",{className:"piclist mr-4 grid grid-cols-1 gap-y-4",children:Object(j.map)(d.images.slice(0,4),(function(e){return Object(A.jsx)("li",{className:"hover:border-yellow-500 border-2 cursor-pointer",children:Object(A.jsx)("img",{src:e.url,alt:"",className:"h-16 w-16",onClick:function(){return h(e.url)}})})}))})}),Object(A.jsx)("div",{className:"_product-images",children:Object(A.jsx)("div",{className:"picZoomer",children:Object(A.jsx)("img",{className:"h-auto w-auto ",src:v,alt:""})})})]}),Object(A.jsx)("div",{className:"col-md-6 flex items-center justify-center px-7 flex-col",children:Object(A.jsxs)("div",{className:"",children:[Object(A.jsx)("a",{href:u.a.BROWSE_PRODUCTS(null===d||void 0===d||null===(i=d.user)||void 0===i?void 0:i.profileUrl),className:"text-sm mb-1 text-yellow-500 tracking-wider   font-semibold ",children:null===d||void 0===d||null===(l=d.user)||void 0===l||null===(o=l.business)||void 0===o?void 0:o.name}),Object(A.jsx)("p",{className:"text-base  mt-1 font-medium mb-4 text-gray-900 dark:text-gray-100",children:d.productName}),Object(A.jsxs)("div",{className:" grid grid-cols-2 w-full border-t border-b border-gray-200 dark:border-gray-700",children:[Object(A.jsxs)("div",{className:"py-4 border-r border-gray-200 dark:border-gray-700",children:[Object(A.jsx)("label",{className:"font-medium mb-2 text-gray-500",children:"Colour"}),Object(A.jsxs)("ul",{className:"flex items-center mt-1 gap-x-2",children:[Object(A.jsx)("li",{className:"bg-black h-4 w-4 border border-gray-400 rounded-full"}),Object(A.jsx)("li",{className:"bg-green-500 h-4 w-4 border border-gray-400 rounded-full"}),Object(A.jsx)("li",{className:"bg-yellow-500 h-4 w-4 border border-gray-400 rounded-full"}),Object(A.jsx)("li",{className:"bg-red-500 h-4 w-4 border border-gray-400 rounded-full"})]})]}),Object(A.jsxs)("div",{className:"p-4 hover:bg-gray-700 transition-all cursor-pointer group flex items-center justify-between",children:[Object(A.jsxs)("div",{children:[Object(A.jsx)("label",{className:"font-medium mb-2 text-gray-500 ",children:"Size"}),Object(A.jsx)("p",{className:"text-sm text-gray-900 font-medium dark:text-gray-300",children:"Select size"})]}),Object(A.jsx)(n.b,{className:Object(z.a)("text-gray-900 dark:text-gray-300","h-6 w-6 group-hover:text-gray-500 ml-2")})]})]}),Object(A.jsxs)("div",{className:"border-b flex items-center justify-between border-gray-200 dark:border-gray-700 py-6",children:[Object(A.jsx)("h5",{className:"font-medium  text-gray-500",children:"Delivery"}),Object(A.jsx)("h4",{className:"text-gray-900 font-semibold text-base dark:text-gray-300",children:d.estimatedDelivery})]}),Object(A.jsxs)("div",{className:"border-b flex items-center justify-between border-gray-200 dark:border-gray-700 py-6",children:[Object(A.jsx)("h5",{className:"font-medium  text-gray-500",children:"Price"}),Object(A.jsxs)("h4",{className:"text-gray-900 font-semibold text-base dark:text-gray-300",children:["$",d.price]})]}),Object(A.jsxs)("div",{className:"flex items-center justify-between gap-x-4",children:[Object(A.jsx)(s.a,{size:"xl",className:"mt-10",fullWidth:!0,gradient:!0,invert:!0,onClick:p?function(){x(Object(X.b)(d))}:function(){x(Object(X.a)(d))},label:p?"Remove from basket":"Add to basket"}),Object(A.jsx)(s.a,{size:"xl",className:"mt-10",fullWidth:!0,gradient:!0,label:"Buy now"})]})]})})]})})};t.default=function(e){var t,r=e.userData,a=Object(W.i)().productId,n=Object(M.useQuery)("product",(function(){return Object(i.m)(a)})),s=n.isLoading,u=n.data,f=n.isFetched&&!s?u.data.data:F;return s?Object(A.jsx)(o.a,{}):Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(l.a,{pageUrl:window.location.href,imageUrl:f&&(null===f||void 0===f?void 0:f.images[0].url),pageTitle:"".concat(f.productName," | 13RMS "),title:f.productName,description:f.productDescription,keywords:null===f||void 0===f||null===(t=f.tags)||void 0===t?void 0:t.join(", "),userName:""}),Object(A.jsx)(m.a,{userData:r}),Object(A.jsx)(d.a,{}),Object(A.jsx)(b.a,{customMaxWidth:"max-w-7xl",children:Object(A.jsxs)("div",{className:"flex flex-col gap-y-24",children:[Object(A.jsx)(G,{product:f}),(null===f||void 0===f?void 0:f._id)&&Object(A.jsx)(c.a,{content:Object(A.jsx)(D,{userId:null===r||void 0===r?void 0:r._id,reviewsIds:null===f||void 0===f?void 0:f.reviews,productId:f._id})})]})})]})}}}]);
//# sourceMappingURL=23.fe819190.chunk.js.map