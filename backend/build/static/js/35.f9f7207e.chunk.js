(this.webpackJsonp13rms=this.webpackJsonp13rms||[]).push([[35],{415:function(e,t,a){"use strict";var r=a(60),s=a(2);t.a=function(e){var t=e.show,a=e.error;return Object(s.jsx)(r.a,{show:t,enter:"transition duration-100 ease-out",enterFrom:"transform scale-95 opacity-0",enterTo:"transform scale-100 opacity-100",leave:"transition duration-75 ease-out",leaveFrom:"transform scale-100 opacity-100",leaveTo:"transform scale-95 opacity-0",className:"mt-2",children:Object(s.jsx)("p",{className:"transition-all duration-200 text-sm text-red-600 dark:text-red-500",children:a})})}},416:function(e,t,a){"use strict";var r=a(21),s=a(153),n=a(60),i=a(51),o=a(415),c=a(413),l=a(1),d=a(45),u=a(2),p=["label","id","name","type","placeholder","error","value","gridClass","required","showPasswordButton","optional","hideBorders","textarea","setUnsavedChanges","withButton","disabled","rows","textClass","cols","info"];t.a=function(e){var t=e.label,a=e.id,b=e.name,m=void 0===b?"":b,h=e.type,f=void 0===h?"text":h,x=e.placeholder,j=e.error,y=(e.value,e.gridClass),v=e.required,O=e.showPasswordButton,g=void 0!==O&&O,k=e.optional,w=void 0!==k&&k,N=e.hideBorders,C=void 0!==N&&N,_=e.textarea,T=void 0!==_&&_,P=e.setUnsavedChanges,S=void 0===P?function(){}:P,R=e.withButton,I=e.disabled,B=e.rows,F=e.textClass,E=void 0===F?"sm:text-sm":F,A=e.cols,D=(e.info,Object(s.a)(e,p),"border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500"),U=Object(l.useState)(!1),q=Object(r.a)(U,2),z=q[0],M=q[1],G=Object(c.c)(m),V=Object(r.a)(G,3),L=V[0],W=V[1],J=V[2].setValue,X=function(e){S(!0),J(e.target.value)};return Object(u.jsxs)("div",{className:y,children:[Object(u.jsxs)("div",{className:"flex justify-between",children:[Object(u.jsxs)("label",{htmlFor:m,className:"block dark:text-white text-sm font-medium text-gray-700",children:[t," ",v&&Object(u.jsx)("span",{className:"text-red-500 dark:text-red-400 font-medium text-base",children:"*"})]}),w&&Object(u.jsx)("span",{className:"text-sm text-gray-500",id:"email-optional",children:"Optional"})]}),T?Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:"mt-1 relative rounded-md shadow-sm",children:[Object(u.jsx)("textarea",{rows:B,cols:A,autoFocus:!0,id:a,placeholder:x,onChange:X,className:"block border w-full pr-10 ".concat(j?D:""," ").concat(E," p-2 ").concat(C?"border-transparent":"dark:border-gray-700 border-gray-300"," rounded-md dark:bg-gray-900 transition-all  dark:text-white")}),Object(u.jsx)("div",{className:"flex items-center absolute transition-all duration-200 top-0 right-0 p-3 ",children:W.touched&&W.error&&Object(u.jsx)("div",{className:" pointer-events-none",children:Object(u.jsx)(i.d,{className:"h-5 w-5 text-red-500 dark:text-red-400","aria-hidden":"true"})})})]}),Object(u.jsx)(o.a,{show:Boolean(W.touched&&W.error),error:W.error})]}):Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:"mt-1 relative rounded-md shadow-sm",children:[Object(u.jsx)("input",{disabled:I,id:a,autoFocus:!0,onChange:X,placeholder:x,type:g?z?"text":"password":f,className:"block border w-full pr-10 ".concat(j?D:""," sm:text-sm p-2 ").concat(C?"border-transparent ":"dark:border-gray-700 border-gray-300"," rounded-md dark:bg-gray-900 dark:text-white")}),Object(u.jsxs)("div",{className:"flex items-center absolute transition-all duration-200 inset-y-0 right-0 pr-3 ",children:[W.touched&&W.error&&Object(u.jsx)("div",{className:" pointer-events-none",children:Object(u.jsx)(i.d,{className:"h-5 w-5 text-red-500 dark:text-red-400","aria-hidden":"true"})}),g&&L.value&&Object(u.jsx)("div",{className:"ml-2",onClick:function(){return M(!z)},children:z?Object(u.jsx)(d.k,{className:"h-5 w-5 text-gray-400 cursor-pointer hover:text-gray-500","aria-hidden":"true"}):Object(u.jsx)(d.j,{className:"h-5 w-5 text-gray-400 cursor-pointer hover:text-gray-500","aria-hidden":"true"})})]})]}),Object(u.jsxs)("div",{className:"flex mt-2 items-center justify-between",children:[Object(u.jsx)(n.a,{show:Boolean(W.touched&&W.error),enter:"transition duration-100 ease-out",enterFrom:"transform scale-95 opacity-0",enterTo:"transform scale-100 opacity-100",leave:"transition duration-75 ease-out",leaveFrom:"transform scale-100 opacity-100",leaveTo:"transform scale-95 opacity-0",children:Object(u.jsx)("p",{className:"transition-all duration-200 text-sm text-red-600 dark:text-red-500",id:"".concat(m||a,"-error"),children:W.error})}),!Boolean(W.touched&&W.error)&&Object(u.jsx)("div",{}),R&&!Boolean(W.touched&&W.error)&&L.value.length>3?R:Object(u.jsx)("div",{className:""})]})]})]})}},418:function(e,t,a){"use strict";var r=a(5),s=a(153),n=a(694),i=a(2),o=["children","delay","className"];t.a=function(e){var t=e.children,a=e.delay,c=void 0===a?.3:a,l=e.className,d=Object(s.a)(e,o);return Object(i.jsx)(n.a.div,Object(r.a)(Object(r.a)({className:l},d),{},{initial:"hidden",animate:"visible",exit:"exit",variants:{hidden:{visibility:"hidden",opacity:0,translateX:100},visible:{visibility:"visible",translateX:0,opacity:1,transition:{delay:c}},exit:{visibility:"hidden",opacity:0,translateX:-100,transition:{delay:c}}},children:Object(i.jsx)(i.Fragment,{children:t})}))}},426:function(e,t,a){"use strict";var r=a(51),s=a(33),n=a(2);t.a=function(e){var t=e.errors;return Object(n.jsx)("div",{className:"rounded-md bg-red-50 dark:bg-gray-900 border dark:border-gray-700 border-transparent p-4",children:Object(n.jsxs)("div",{className:"flex",children:[Object(n.jsx)("div",{className:"flex-shrink-0",children:Object(n.jsx)(r.j,{className:"h-5 w-5 dark:text-red-300 text-red-400","aria-hidden":"true"})}),Object(n.jsxs)("div",{className:"ml-3",children:[Object(n.jsxs)("h3",{className:"text-sm font-medium text-red-800 dark:text-red-500",children:["There were ",t.length," errors with your submission"]}),Object(n.jsx)("div",{className:"mt-2 text-sm text-red-700 dark:text-red-400",children:Object(n.jsx)("ul",{className:"list-disc pl-5 space-y-1",children:Object(s.map)(t,(function(e,t){return Object(n.jsx)("li",{children:e},t)}))})})]})]})})}},432:function(e,t,a){"use strict";var r=a(2),s=[{name:"Accessibility",href:"#/"},{name:"User Agreement",href:"#/"},{name:"Privacy & Policy",href:"#/"},{name:"Cookies",href:"#/"}],n=function(){var e=(new Date).getFullYear();return Object(r.jsx)("footer",{className:"",children:Object(r.jsxs)("div",{className:"max-w-7xl mx-auto pt-16 px-4 overflow-hidden sm:px-6 lg:px-8",children:[Object(r.jsx)("nav",{className:"-mx-5 lg:flex md:flex sm:grid sm:place-content-center sm:grid-cols-1 flex-wrap justify-center","aria-label":"Footer",children:s.map((function(e){return Object(r.jsx)("div",{className:"text-center px-5 py-2",children:Object(r.jsx)("li",{href:e.href,className:"list-none link-hover text-base text-gray-500 cursor-pointer",children:e.name})},e.name)}))}),Object(r.jsxs)("p",{className:"mt-8 text-center text-base text-gray-400",children:["\xa9 ",e," Workflow, Inc. All rights reserved."]})]})})},i=(a(1),a(418)),o=a(89);t.a=function(e){var t=e.title,a=e.subtitle,s=e.children,c=e.withButton,l=Object(o.a)().logo;return Object(r.jsxs)("div",{className:"min-h-screen dark:bg-gray-900 bg-gray-50 flex flex-col justify-start py-12 sm:px-6 lg:px-8",children:[Object(r.jsxs)(i.a,{className:"sm:mx-auto sm:w-full sm:max-w-md flex items-center flex-col",children:[Object(r.jsx)("img",{className:"mx-auto h-32 w-auto",src:l,alt:"13RMS"}),t&&Object(r.jsx)("h2",{className:"mt-6 text-center text-3xl font-extrabold dark:text-white text-gray-900",children:t}),a&&Object(r.jsx)("p",{className:"mt-2 text-center text-sm text-gray-600",children:a}),c&&c]}),s,Object(r.jsx)(n,{})]})}},440:function(e,t,a){"use strict";a.d(t,"f",(function(){return s})),a.d(t,"c",(function(){return n})),a.d(t,"d",(function(){return i})),a.d(t,"e",(function(){return o})),a.d(t,"g",(function(){return c})),a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return d}));var r=a(5),s={email:"",password:"",confirmPassword:"",firstName:"",lastName:""},n={email:"",password:""},i={jobTitle:"",jobType:"",currentCompany:""},o={country:"",state:"",city:"",pincode:""},c={education:"",grade:"",grade_subject:""},l=(Object(r.a)({},o),{name:"",email:"",number:""}),d={businessCountry:"",businessAddress:"",additionalInfo:"",postalCode:"",city:"",legalNumber:"",businessRegNumber:"",firstName:"",lastName:"",mobileNumber:"",businessEntityType:"",relationshipToBusiness:"",typeOfBusiness:""}},520:function(e,t,a){"use strict";a(1);var r=a(521),s=a.n(r),n=a(2);t.a=function(e){var t=e.setIsVerified;return Object(n.jsx)("div",{children:Object(n.jsx)(s.a,{sitekey:"6LcOlUUcAAAAACR1PIL8ZHKU5wntAf43UUcBtMv6",render:"onload",verifyCallback:function(e){t(!!e)},onloadCallback:function(){}})})}},521:function(e,t,a){var r;e.exports=(r=a(1),function(e){function t(r){if(a[r])return a[r].exports;var s=a[r]={exports:{},id:r,loaded:!1};return e[r].call(s.exports,s,s.exports,t),s.loaded=!0,s.exports}var a={};return t.m=e,t.c=a,t.p="",t(0)}([function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),c=a(6),l=r(c),d=r(a(4)),u={className:d.default.string,onloadCallbackName:d.default.string,elementID:d.default.string,onloadCallback:d.default.func,verifyCallback:d.default.func,expiredCallback:d.default.func,render:d.default.oneOf(["onload","explicit"]),sitekey:d.default.string,theme:d.default.oneOf(["light","dark"]),type:d.default.string,verifyCallbackName:d.default.string,expiredCallbackName:d.default.string,size:d.default.oneOf(["invisible","compact","normal"]),tabindex:d.default.string,hl:d.default.string,badge:d.default.oneOf(["bottomright","bottomleft","inline"])},p={elementID:"g-recaptcha",className:"g-recaptcha",onloadCallback:void 0,onloadCallbackName:"onloadCallback",verifyCallback:void 0,verifyCallbackName:"verifyCallback",expiredCallback:void 0,expiredCallbackName:"expiredCallback",render:"onload",theme:"light",type:"image",size:"normal",tabindex:"0",hl:"en",badge:"bottomright"},b=function(){return"undefined"!=typeof window&&"undefined"!=typeof window.grecaptcha&&"function"==typeof window.grecaptcha.render},m=void 0,h=function(e){function t(e){s(this,t);var a=n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a._renderGrecaptcha=a._renderGrecaptcha.bind(a),a.reset=a.reset.bind(a),a.state={ready:b(),widget:null},a.state.ready||"undefined"==typeof window||(m=setInterval(a._updateReadyState.bind(a),1e3)),a}return i(t,e),o(t,[{key:"componentDidMount",value:function(){this.state.ready&&this._renderGrecaptcha()}},{key:"componentDidUpdate",value:function(e,t){var a=this.props,r=a.render,s=a.onloadCallback;"explicit"===r&&s&&this.state.ready&&!t.ready&&this._renderGrecaptcha()}},{key:"componentWillUnmount",value:function(){clearInterval(m)}},{key:"reset",value:function(){var e=this.state,t=e.ready,a=e.widget;t&&null!==a&&grecaptcha.reset(a)}},{key:"execute",value:function(){var e=this.state,t=e.ready,a=e.widget;t&&null!==a&&grecaptcha.execute(a)}},{key:"_updateReadyState",value:function(){b()&&(this.setState({ready:!0}),clearInterval(m))}},{key:"_renderGrecaptcha",value:function(){this.state.widget=grecaptcha.render(this.props.elementID,{sitekey:this.props.sitekey,callback:this.props.verifyCallback?this.props.verifyCallback:void 0,theme:this.props.theme,type:this.props.type,size:this.props.size,tabindex:this.props.tabindex,hl:this.props.hl,badge:this.props.badge,"expired-callback":this.props.expiredCallback?this.props.expiredCallback:void 0}),this.props.onloadCallback&&this.props.onloadCallback()}},{key:"render",value:function(){return"explicit"===this.props.render&&this.props.onloadCallback?l.default.createElement("div",{id:this.props.elementID,"data-onloadcallbackname":this.props.onloadCallbackName,"data-verifycallbackname":this.props.verifyCallbackName}):l.default.createElement("div",{id:this.props.elementID,className:this.props.className,"data-sitekey":this.props.sitekey,"data-theme":this.props.theme,"data-type":this.props.type,"data-size":this.props.size,"data-badge":this.props.badge,"data-tabindex":this.props.tabindex})}}]),t}(c.Component);t.default=h,h.propTypes=u,h.defaultProps=p,e.exports=t.default},function(e,t){"use strict";function a(e){return function(){return e}}var r=function(){};r.thatReturns=a,r.thatReturnsFalse=a(!1),r.thatReturnsTrue=a(!0),r.thatReturnsNull=a(null),r.thatReturnsThis=function(){return this},r.thatReturnsArgument=function(e){return e},e.exports=r},function(e,t,a){"use strict";function r(e,t,a,r,n,i,o,c){if(s(t),!e){var l;if(void 0===t)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var d=[a,r,n,i,o,c],u=0;(l=new Error(t.replace(/%s/g,(function(){return d[u++]})))).name="Invariant Violation"}throw l.framesToPop=1,l}}var s=function(e){};e.exports=r},function(e,t,a){"use strict";var r=a(1),s=a(2),n=a(5);e.exports=function(){function e(e,t,a,r,i,o){o!==n&&s(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var a={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t};return a.checkPropTypes=r,a.PropTypes=a,a}},function(e,t,a){e.exports=a(3)()},function(e,t){"use strict";var a="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";e.exports=a},function(e,t){e.exports=r}]))},686:function(e,t,a){"use strict";a.r(t);var r=a(35),s=a.n(r),n=a(5),i=a(119),o=a(61),c=a(21),l=a(1),d=a(32),u=a(432),p=a(413),b=a(433),m=a(440),h=a(416),f=a(8),x=a(14),j=a(6),y=a(37),v=a(426),O=a(520),g=a(418),k=a(2);t.default=function(){var e=Object(x.g)(),t=b.a({email:b.c().email("Invalid email address").required("Please add email address"),password:b.c().required("Please add password").min(6).max(20)}),a=Object(y.b)().setValues,r=Object(j.a)(),w=Object(l.useState)(!1),N=Object(c.a)(w,2),C=N[0],_=N[1],T=Object(l.useState)([]),P=Object(c.a)(T,2),S=P[0],R=P[1],I=Object(l.useState)(!1),B=Object(c.a)(I,2),F=(B[0],B[1]),E=function(){var t=Object(o.a)(s.a.mark((function t(o){var c,l;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return _(!0),t.prev=2,t.next=5,j.f.post("/auth/login",{email:o.email,password:o.password},{headers:{Authorization:r}});case 5:c=t.sent,"error"===(l=c.data).status?S.includes(l.message)||R([].concat(Object(i.a)(S),[l.message])):(R([]),a(Object(n.a)(Object(n.a)({},l.data),l)),window.location.reload(),e.push(f.a.FEED),localStorage.setItem("access_token",l.data.access_token)),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(2),R([].concat(Object(i.a)(S),[t.t0.message]));case 13:return t.prev=13,_(!1),t.finish(13);case 16:t.next=19;break;case 18:R([].concat(Object(i.a)(S),["Please verify captcha"]));case 19:case"end":return t.stop()}}),t,null,[[2,10,13,16]])})));return function(e){return t.apply(this,arguments)}}();return Object(k.jsx)(k.Fragment,{children:Object(k.jsx)(u.a,{title:"Sign in to your account",subtitle:Object(k.jsx)("span",{className:"mt-1 text-center dark:text-gray-400 text-sm text-gray-600",children:"Stay updated on your professional world"}),children:Object(k.jsxs)(g.a,{className:"mt-8 mb-36 sm:mx-auto sm:w-full sm:max-w-md",children:[Object(k.jsx)("div",{className:"bg-white dark:bg-gray-900 border border-transparent dark:border-gray-700 py-8 px-4 shadow-md sm:rounded-lg sm:px-6",children:Object(k.jsx)(p.b,{initialValues:m.c,validationSchema:t,onSubmit:E,children:Object(k.jsxs)(p.a,{className:"space-y-6",children:[Object(k.jsx)(h.a,{label:"Email",id:"email",name:"email",required:!0}),Object(k.jsx)(h.a,{label:"password",id:"password",name:"password",required:!0,showPasswordButton:!0}),Object(k.jsx)(O.a,{setIsVerified:F}),Object(k.jsx)("div",{onClick:function(){return e.push(f.a.FORGOT_PASSWORD)},className:"dark:text-gray-400 py-2 inline-block text-gray-600 normal-hover cursor-pointer",children:"Forgot password?"}),Object(k.jsx)("div",{children:Object(k.jsx)(d.a,{type:"submit",fullWidth:!0,rounded:"rounded-lg",gradient:!0,loading:C,label:"Login"})}),Object(k.jsx)("div",{hidden:0===S.length,children:Object(k.jsx)(v.a,{errors:S})})]})})}),Object(k.jsxs)("div",{className:"mt-4 text-center text-gray-900 dark:text-white",children:["Not yet on 13RMS?",Object(k.jsx)("a",{href:"/signup",className:"gradient-text ml-2 font-semibold ",children:"Join now"})]})]})})})}}}]);
//# sourceMappingURL=35.f9f7207e.chunk.js.map