(this.webpackJsonp13rms=this.webpackJsonp13rms||[]).push([[35],{485:function(e,t,a){"use strict";var r=a(1),n=a(54),s=a(550),i=a(39),o=a(25),l=a(2);t.a=function(e){var t=e.open,a=void 0!==t&&t,c=e.setOpen,d=e.children,u=e.header,p=e.onClose,f=e.disableBackdropClose,m=void 0===f||f,b=e.hideCloseBtn,h=void 0!==b&&b,y=e.fixedBottom,x=e.disablePadding,v=void 0!==x&&x;return Object(l.jsx)(n.a.Root,{show:a,as:r.Fragment,children:Object(l.jsx)(s.a,{as:"div",static:!0,style:{zIndex:9999},className:"fixed inset-0 overflow-y-auto",open:a,onClose:m?o.noop:p||c,children:Object(l.jsxs)("div",{className:"pb-20 flex items-end justify-center min-h-screen pt-4 px-4 text-center sm:block sm:p-0",children:[Object(l.jsx)(n.a.Child,{as:r.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:Object(l.jsx)(s.a.Overlay,{className:"fixed dark:bg-black inset-0 bg-gray-500 opacity-50 transition-opacity"})}),Object(l.jsx)("span",{className:"hidden sm:inline-block sm:align-middle sm:h-screen","aria-hidden":"true",children:"\u200b"}),Object(l.jsx)(n.a.Child,{as:r.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:Object(l.jsxs)("div",{className:"inline-block overflow-visible align-bottom  bg-white dark:bg-gray-900 rounded-lg ".concat(v?"":"px-4 sm:p-6"," pt-5  text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-top   pb-4"),children:[!h&&Object(l.jsx)("div",{className:"hidden sm:block absolute top-0 right-0 pt-6 pr-6",children:Object(l.jsxs)("button",{type:"button",className:"bg-white dark:bg-gray-900 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500",onClick:function(){return p?p():c(!1)},children:[Object(l.jsx)("span",{className:"sr-only",children:"Close"}),Object(l.jsx)(i.f,{className:"h-6 w-6","aria-hidden":"true"})]})}),Object(l.jsxs)("div",{className:"modal-body",children:[u&&Object(l.jsx)("div",{className:"modal-header divider dark:divider px-2",children:Object(l.jsx)("h3",{className:"dark:text-white text-gray-900 text-xl font-normal",children:u})}),Object(l.jsx)("div",{className:"",children:d}),y&&Object(l.jsx)("div",{className:"absolute dark:border-gray-800 border-t bg-white dark:bg-gray-900 bottom-0 mx-6 inset-x-0",children:y})]})]})})]})})})}},500:function(e,t,a){"use strict";a.d(t,"f",(function(){return n})),a.d(t,"c",(function(){return s})),a.d(t,"d",(function(){return i})),a.d(t,"e",(function(){return o})),a.d(t,"g",(function(){return l})),a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return d}));var r=a(3),n={email:"",password:"",confirmPassword:"",firstName:"",lastName:""},s={email:"",password:""},i={jobTitle:"",jobType:"",currentCompany:""},o={country:"",state:"",city:"",pincode:""},l={education:"",grade:"",grade_subject:""},c=(Object(r.a)({},o),{name:"",email:"",number:""}),d={businessCountry:"",businessAddress:"",additionalInfo:"",postalCode:"",city:"",legalNumber:"",businessRegNumber:"",firstName:"",lastName:"",mobileNumber:"",businessEntityType:"",relationshipToBusiness:"",typeOfBusiness:""}},608:function(e,t,a){"use strict";a(1);var r=a(609),n=a.n(r),s=a(2);t.a=function(e){var t=e.setIsVerified;return Object(s.jsx)("div",{children:Object(s.jsx)(n.a,{sitekey:"6LcOlUUcAAAAACR1PIL8ZHKU5wntAf43UUcBtMv6",render:"onload",verifyCallback:function(e){t(!!e)},onloadCallback:function(){}})})}},609:function(e,t,a){var r;e.exports=(r=a(1),function(e){function t(r){if(a[r])return a[r].exports;var n=a[r]={exports:{},id:r,loaded:!1};return e[r].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var a={};return t.m=e,t.c=a,t.p="",t(0)}([function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),l=a(6),c=r(l),d=r(a(4)),u={className:d.default.string,onloadCallbackName:d.default.string,elementID:d.default.string,onloadCallback:d.default.func,verifyCallback:d.default.func,expiredCallback:d.default.func,render:d.default.oneOf(["onload","explicit"]),sitekey:d.default.string,theme:d.default.oneOf(["light","dark"]),type:d.default.string,verifyCallbackName:d.default.string,expiredCallbackName:d.default.string,size:d.default.oneOf(["invisible","compact","normal"]),tabindex:d.default.string,hl:d.default.string,badge:d.default.oneOf(["bottomright","bottomleft","inline"])},p={elementID:"g-recaptcha",className:"g-recaptcha",onloadCallback:void 0,onloadCallbackName:"onloadCallback",verifyCallback:void 0,verifyCallbackName:"verifyCallback",expiredCallback:void 0,expiredCallbackName:"expiredCallback",render:"onload",theme:"light",type:"image",size:"normal",tabindex:"0",hl:"en",badge:"bottomright"},f=function(){return"undefined"!=typeof window&&"undefined"!=typeof window.grecaptcha&&"function"==typeof window.grecaptcha.render},m=void 0,b=function(e){function t(e){n(this,t);var a=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a._renderGrecaptcha=a._renderGrecaptcha.bind(a),a.reset=a.reset.bind(a),a.state={ready:f(),widget:null},a.state.ready||"undefined"==typeof window||(m=setInterval(a._updateReadyState.bind(a),1e3)),a}return i(t,e),o(t,[{key:"componentDidMount",value:function(){this.state.ready&&this._renderGrecaptcha()}},{key:"componentDidUpdate",value:function(e,t){var a=this.props,r=a.render,n=a.onloadCallback;"explicit"===r&&n&&this.state.ready&&!t.ready&&this._renderGrecaptcha()}},{key:"componentWillUnmount",value:function(){clearInterval(m)}},{key:"reset",value:function(){var e=this.state,t=e.ready,a=e.widget;t&&null!==a&&grecaptcha.reset(a)}},{key:"execute",value:function(){var e=this.state,t=e.ready,a=e.widget;t&&null!==a&&grecaptcha.execute(a)}},{key:"_updateReadyState",value:function(){f()&&(this.setState({ready:!0}),clearInterval(m))}},{key:"_renderGrecaptcha",value:function(){this.state.widget=grecaptcha.render(this.props.elementID,{sitekey:this.props.sitekey,callback:this.props.verifyCallback?this.props.verifyCallback:void 0,theme:this.props.theme,type:this.props.type,size:this.props.size,tabindex:this.props.tabindex,hl:this.props.hl,badge:this.props.badge,"expired-callback":this.props.expiredCallback?this.props.expiredCallback:void 0}),this.props.onloadCallback&&this.props.onloadCallback()}},{key:"render",value:function(){return"explicit"===this.props.render&&this.props.onloadCallback?c.default.createElement("div",{id:this.props.elementID,"data-onloadcallbackname":this.props.onloadCallbackName,"data-verifycallbackname":this.props.verifyCallbackName}):c.default.createElement("div",{id:this.props.elementID,className:this.props.className,"data-sitekey":this.props.sitekey,"data-theme":this.props.theme,"data-type":this.props.type,"data-size":this.props.size,"data-badge":this.props.badge,"data-tabindex":this.props.tabindex})}}]),t}(l.Component);t.default=b,b.propTypes=u,b.defaultProps=p,e.exports=t.default},function(e,t){"use strict";function a(e){return function(){return e}}var r=function(){};r.thatReturns=a,r.thatReturnsFalse=a(!1),r.thatReturnsTrue=a(!0),r.thatReturnsNull=a(null),r.thatReturnsThis=function(){return this},r.thatReturnsArgument=function(e){return e},e.exports=r},function(e,t,a){"use strict";function r(e,t,a,r,s,i,o,l){if(n(t),!e){var c;if(void 0===t)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var d=[a,r,s,i,o,l],u=0;(c=new Error(t.replace(/%s/g,(function(){return d[u++]})))).name="Invariant Violation"}throw c.framesToPop=1,c}}var n=function(e){};e.exports=r},function(e,t,a){"use strict";var r=a(1),n=a(2),s=a(5);e.exports=function(){function e(e,t,a,r,i,o){o!==s&&n(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var a={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t};return a.checkPropTypes=r,a.PropTypes=a,a}},function(e,t,a){e.exports=a(3)()},function(e,t){"use strict";var a="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";e.exports=a},function(e,t){e.exports=r}]))},862:function(e,t,a){"use strict";a.r(t);var r=a(33),n=a.n(r),s=a(12),i=a(3),o=a(55),l=a(10),c=a(190),d=a(487),u=a(34),p=a(104),f=a(485),m=a(608),b=a(679),h=a(8),y=a(490),x=a(50),v=a(677),j=a(44),g=a(6),O=a(632),k=a(500),w=a(1),N=a(17),C=a(633),_=a(90),P=a(2);t.default=function(){var e=_.a({firstName:_.c().required("Please enter your first name"),lastName:_.c().required("Please enter your last name"),email:_.c().email("Invalid email address").required("Please add email address"),password:_.c().min(6,"Password must be atleast 6 characters long").required("Please add password"),confirmPassword:_.c().oneOf([_.b("password"),null],"Password must match").required("Please add confirm password")}),t=Object(w.useState)(!1),a=Object(l.a)(t,2),r=a[0],T=a[1],I=Object(w.useState)([]),S=Object(l.a)(I,2),R=S[0],E=S[1],A=Object(N.g)(),F=Object(x.b)().setValues,B=Object(w.useState)(!1),D=Object(l.a)(B,2),U=D[0],q=D[1],z=Object(w.useState)(!1),V=Object(l.a)(z,2),M=V[0],L=V[1],G=function(){var e=Object(o.a)(n.a.mark((function e(t){var a,r,o,l;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!U||!M){e.next=21;break}return e.prev=1,T(!0),a={password:t.password,firstName:t.firstName,lastName:t.lastName,email:t.email,followers:[],following:[],fullName:t.firstName+" "+t.lastName,other:{createdOn:new Date,accountFilled:!1,accountFinishedStep:"signup"}},r=Object(g.a)(),e.next=7,g.f.post("/auth/register",Object(i.a)({},a),{headers:{Authorization:r}});case 7:o=e.sent,"error"===(l=o.data).status?R.includes(l.message)||E([].concat(Object(s.a)(R),[l.message])):(E([]),localStorage.setItem("access_token",l.data.access_token),delete a.password,delete a.access_token,F(Object(i.a)({},a)),A.push(h.a.CHOOSE_ACCOUNT),window.location.reload()),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),E([].concat(Object(s.a)(R),[e.t0.message])),console.error(e.t0);case 16:return e.prev=16,T(!1),e.finish(16);case 19:e.next=22;break;case 21:E(M?["Please verify captcha"]:["Email not verified. Please verify your email"]);case 22:case"end":return e.stop()}}),e,null,[[1,12,16,19]])})));return function(t){return e.apply(this,arguments)}}(),H=Object(O.a)(),J=Object(l.a)(H,3),W=J[0],K=J[1],Y=J[2],Z=Object(w.useState)("initial"),Q=Object(l.a)(Z,2),X=Q[0],$=Q[1],ee=function(e,t,a){$("sending"),v.a.send(C.a.serviceID,C.a.template.verificationTemplateId,{to_name:t,code:a,to_email:e},C.a.userId).then((function(e){$("sent")}),(function(e){$("failed")}))},te=Object(w.useRef)(),ae=function(){var e=Object(o.a)(n.a.mark((function e(){var t,a,r,s,i,o,l;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.f.post("/user/generateCode");case 3:if(t=e.sent,a=t.data,$("sending"),K(),a)try{s=a.data.code,i=a.data.token,(null===te||void 0===te?void 0:te.current)&&(null===te||void 0===te||null===(r=te.current)||void 0===r?void 0:r.values)&&ee(null===te||void 0===te||null===(o=te.current)||void 0===o?void 0:o.values.email,(null===te||void 0===te||null===(l=te.current)||void 0===l?void 0:l.values.firstName)||"User",s),localStorage.setItem("v_token",i),K()}catch(n){$("failed"),console.error("@sendingmail: ",n.message)}e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error("@genCode: ",e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return Object(P.jsxs)(P.Fragment,{children:[W&&Object(P.jsx)(f.a,{hideCloseBtn:"failed"!==X,open:W,setOpen:Y,children:Object(P.jsx)(b.a,{emailSendingStatus:X,setEmailVerified:L,onCancel:Y})}),Object(P.jsx)(y.a,{title:"Create new account",subtitle:Object(P.jsxs)("span",{className:"mt-2 text-center text-sm text-gray-600",children:["Discover the benefits of selling and ",Object(P.jsx)("br",{}),"networking with your profile"]}),children:Object(P.jsxs)(d.a,{className:"mt-8 sm:mx-auto sm:w-full sm:max-w-md",children:[Object(P.jsx)("div",{className:"bg-white dark:border-gray-700 border border-transparent dark:bg-gray-900 py-8 px-4 shadow-md sm:rounded-lg sm:px-6",children:Object(P.jsx)(j.b,{innerRef:te,initialValues:k.f,validationSchema:e,onSubmit:G,children:Object(P.jsxs)(j.a,{className:"space-y-6",children:[Object(P.jsxs)("div",{className:"mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6",children:[Object(P.jsx)(p.a,{gridClass:"sm:col-span-3",label:"First name",id:"firstName",name:"firstName",required:!0}),Object(P.jsx)(p.a,{gridClass:"sm:col-span-3",label:"Last name",id:"lastName",name:"lastName",required:!0})]}),Object(P.jsx)(p.a,{label:"Email",id:"email",name:"email",required:!0,disabled:M,type:"email",withButton:M?Object(P.jsx)("p",{className:"text-green-500 italic text-xs",children:"Email Verified"}):Object(P.jsx)("button",{onClick:ae,type:"button",className:"cursor-pointer dark:text-blue-500 hover:underline text-blue-600",children:"Verify email"})}),Object(P.jsx)(p.a,{label:"Password",id:"password",name:"password",showPasswordButton:!0,type:"password",required:!0}),Object(P.jsx)(p.a,{label:"Confirm password",name:"confirmPassword",id:"confirmPassword",showPasswordButton:!0,type:"password",required:!0}),Object(P.jsx)(m.a,{setIsVerified:q}),Object(P.jsxs)("p",{className:"my-4 text-left text-xs dark:text-gray-400 text-gray-600",children:["By clicking Agree and Join, you agree to 13RMS"," ",Object(P.jsx)("a",{href:"#/",className:"font-medium text-xs text-blue-600 hover:text-blue-500",children:"User Agreement, Privacy Policy"})," ","and"," ",Object(P.jsx)("a",{href:"#/",className:"font-medium text-xs text-blue-600 hover:text-blue-500",children:"Cookie Policy"})]}),Object(P.jsx)("div",{hidden:0===R.length,children:Object(P.jsx)(c.a,{errors:R})}),Object(P.jsx)("div",{children:Object(P.jsx)(u.a,{type:"submit",fullWidth:!0,rounded:"rounded-lg",loading:r,gradient:!0,label:"Agree and become a member"})})]})})}),Object(P.jsxs)("div",{className:"mt-4 text-center text-gray-900 dark:text-white",children:["Already on 13RMS?",Object(P.jsx)("a",{href:"/login",className:"gradient-text ml-2 font-semibold ",children:"Login now"})]})]})})]})}}}]);
//# sourceMappingURL=35.67f06a5e.chunk.js.map