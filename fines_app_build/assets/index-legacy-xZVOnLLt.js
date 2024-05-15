!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t=function(){return n};var r,n={},i=Object.prototype,o=i.hasOwnProperty,a=Object.defineProperty||function(e,t,r){e[t]=r.value},l="function"==typeof Symbol?Symbol:{},s=l.iterator||"@@iterator",c=l.asyncIterator||"@@asyncIterator",u=l.toStringTag||"@@toStringTag";function d(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{d({},"")}catch(r){d=function(e,t,r){return e[t]=r}}function f(e,t,r,n){var i=t&&t.prototype instanceof x?t:x,o=Object.create(i.prototype),l=new I(n||[]);return a(o,"_invoke",{value:C(e,r,l)}),o}function h(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}n.wrap=f;var p="suspendedStart",m="suspendedYield",v="executing",y="completed",g={};function x(){}function b(){}function j(){}var w={};d(w,s,(function(){return this}));var N=Object.getPrototypeOf,L=N&&N(N(O([])));L&&L!==i&&o.call(L,s)&&(w=L);var S=j.prototype=x.prototype=Object.create(w);function k(e){["next","throw","return"].forEach((function(t){d(e,t,(function(e){return this._invoke(t,e)}))}))}function E(t,r){function n(i,a,l,s){var c=h(t[i],t,a);if("throw"!==c.type){var u=c.arg,d=u.value;return d&&"object"==e(d)&&o.call(d,"__await")?r.resolve(d.__await).then((function(e){n("next",e,l,s)}),(function(e){n("throw",e,l,s)})):r.resolve(d).then((function(e){u.value=e,l(u)}),(function(e){return n("throw",e,l,s)}))}s(c.arg)}var i;a(this,"_invoke",{value:function(e,t){function o(){return new r((function(r,i){n(e,t,r,i)}))}return i=i?i.then(o,o):o()}})}function C(e,t,n){var i=p;return function(o,a){if(i===v)throw new Error("Generator is already running");if(i===y){if("throw"===o)throw a;return{value:r,done:!0}}for(n.method=o,n.arg=a;;){var l=n.delegate;if(l){var s=_(l,n);if(s){if(s===g)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(i===p)throw i=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i=v;var c=h(e,t,n);if("normal"===c.type){if(i=n.done?y:m,c.arg===g)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(i=y,n.method="throw",n.arg=c.arg)}}}function _(e,t){var n=t.method,i=e.iterator[n];if(i===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=r,_(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var o=h(i,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,g;var a=o.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=r),t.delegate=null,g):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,g)}function F(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function P(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function I(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(F,this),this.reset(!0)}function O(t){if(t||""===t){var n=t[s];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var i=-1,a=function e(){for(;++i<t.length;)if(o.call(t,i))return e.value=t[i],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}throw new TypeError(e(t)+" is not iterable")}return b.prototype=j,a(S,"constructor",{value:j,configurable:!0}),a(j,"constructor",{value:b,configurable:!0}),b.displayName=d(j,u,"GeneratorFunction"),n.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===b||"GeneratorFunction"===(t.displayName||t.name))},n.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,j):(e.__proto__=j,d(e,u,"GeneratorFunction")),e.prototype=Object.create(S),e},n.awrap=function(e){return{__await:e}},k(E.prototype),d(E.prototype,c,(function(){return this})),n.AsyncIterator=E,n.async=function(e,t,r,i,o){void 0===o&&(o=Promise);var a=new E(f(e,t,r,i),o);return n.isGeneratorFunction(t)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},k(S),d(S,u,"Generator"),d(S,s,(function(){return this})),d(S,"toString",(function(){return"[object Generator]"})),n.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},n.values=O,I.prototype={constructor:I,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(P),!e)for(var t in this)"t"===t.charAt(0)&&o.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=r)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(n,i){return l.type="throw",l.arg=e,t.next=n,i&&(t.method="next",t.arg=r),!!i}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],l=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var s=o.call(a,"catchLoc"),c=o.call(a,"finallyLoc");if(s&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),P(r),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;P(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:O(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=r),g}},n}function r(e,t,r,n,i,o,a){try{var l=e[o](a),s=l.value}catch(c){return void r(c)}l.done?t(s):Promise.resolve(s).then(n,i)}function n(e){return function(){var t=this,n=arguments;return new Promise((function(i,o){var a=e.apply(t,n);function l(e){r(a,i,o,l,s,"next",e)}function s(e){r(a,i,o,l,s,"throw",e)}l(void 0)}))}}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,i,o,a,l=[],s=!0,c=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;s=!1}else for(;!(s=(n=o.call(r)).done)&&(l.push(n.value),l.length!==t);s=!0);}catch(e){c=!0,i=e}finally{try{if(!s&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(c)throw i}}return l}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}System.register(["./index-legacy-pxwaoxUC.js","./router-legacy-ZIRLiol3.js","./TextArea-legacy-jXumw0P2.js","./tailwind-legacy-4WU_uB-v.js","./index.esm-legacy-V4wln687.js","./useCustomQuery-legacy-tYhWj-R4.js","./useErrorFocusField-legacy-nq7ASeV8.js","./resizeImage-legacy-V4oVoWhA.js","./CreateConfirmation-legacy-I3hmuFVV.js","./reactQuery-legacy-1Tj_AsDB.js","./reactQueryDevtools-legacy-f3hWO9gP.js","./axios-legacy-V-9BatBQ.js","./reactLazyLoadImageComponent-legacy-6Kg3uOph.js","./reactIcons-legacy-ythRqRRX.js","./headlessui-legacy-zeOI4r4p.js"],(function(e,r){"use strict";var o,a,l,s,c,u,d,f,h,p,m,v,y,g,x,b,j,w,N,L,S;return{setters:[function(e){o=e._,a=e.c,l=e.j,s=e.P},function(e){c=e.r,u=e.h,d=e.d},function(e){f=e.u,h=e.F,p=e.S,m=e.T,v=e.L},function(e){y=e.r},function(e){g=e.c,x=e.a},function(e){b=e.a,j=e.b},function(e){w=e.u},function(e){N=e.r},function(e){L=e.C,S=e.O},null,null,null,null,null,null],execute:function(){e("default",(function(){return l.jsx(_,{})}));var r={};Object.defineProperty(r,"__esModule",{value:!0});var k=r.useGeolocated=void 0,E=c;k=r.useGeolocated=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.positionOptions,r=void 0===t?{enableHighAccuracy:!0,maximumAge:0,timeout:1/0}:t,n=e.isOptimisticGeolocationEnabled,o=void 0===n||n,a=e.userDecisionTimeout,l=void 0===a?void 0:a,s=e.suppressLocationOnMount,c=void 0!==s&&s,u=e.watchPosition,d=void 0!==u&&u,f=e.geolocationProvider,h=void 0===f?"undefined"!=typeof navigator?navigator.geolocation:void 0:f,p=e.watchLocationPermissionChange,m=void 0!==p&&p,v=e.onError,y=e.onSuccess,g=(0,E.useRef)(0),x=(0,E.useRef)(!0),b=(0,E.useRef)(0),j=i((0,E.useState)(o),2),w=j[0],N=j[1],L=i((0,E.useState)(),2),S=L[0],k=L[1],C=i((0,E.useState)(),2),_=C[0],F=C[1],P=i((0,E.useState)(),2),I=P[0],O=P[1],R=i((0,E.useState)(),2),V=R[0],T=R[1],q=(0,E.useCallback)((function(){g.current&&window.clearTimeout(g.current)}),[]),A=(0,E.useCallback)((function(e){q(),x.current&&(k((function(){})),N(!1),O(e)),null==v||v(e)}),[v,q]),G=(0,E.useCallback)((function(e){q(),x.current&&(k(e.coords),F(e.timestamp),N(!0),O((function(){}))),null==y||y(e)}),[y,q]),D=(0,E.useCallback)((function(){if(!h||!h.getCurrentPosition||!h.watchPosition)throw new Error("The provided geolocation provider is invalid");l&&(g.current=window.setTimeout((function(){A()}),l)),d?b.current=h.watchPosition(G,A,r):h.getCurrentPosition(G,A,r)}),[h,d,l,A,G,r]);return(0,E.useEffect)((function(){var e;return m&&h&&"permissions"in navigator&&navigator.permissions.query({name:"geolocation"}).then((function(t){(e=t).onchange=function(){T(e.state)}})).catch((function(e){})),function(){e&&(e.onchange=null)}}),[]),(0,E.useEffect)((function(){return c||D(),function(){q(),d&&b.current&&(null==h||h.clearWatch(b.current))}}),[V]),{getPosition:D,coords:S,timestamp:_,isGeolocationEnabled:w,isGeolocationAvailable:Boolean(h),positionError:I}};var C=g({fullName:x().required("Required"),email:x().email("Invalid email"),wardId:x().required("Required"),address1:x().required("Required"),violationPlace:x().required("Required"),photo:x().required("Required"),challanType:x().required("Required"),mobile:x().min(10).max(10).label("Mobile"),violationId:x().required("Required"),violationDepartmentId:x().required("Required")});function _(){var e,r,g,x,E=u(),_=c.useRef(),F=i(d.useState(""),2),P=F[0],I=F[1],O=i(d.useState(""),2),R=O[0],V=O[1],T=i(d.useState(""),2),q=T[0],A=T[1],G=i(d.useState(""),2),D=G[0],U=G[1],M=w().AutoFocusErrorField,W=function(){var e=k({positionOptions:{enableHighAccuracy:!0,timeout:1/0,maximumAge:localStorage.getItem("geoMaxAge")||1/0},watchPosition:!0,userDecisionTimeout:5e3}),t=e.isGeolocationAvailable,r=e.isGeolocationEnabled,n=e.getPosition;return{isGeolocationAvailable:t,isGeolocationEnabled:r,coords:e.coords,positionError:e.positionError,timestamp:e.timestamp,getPosition:n}}(),B=W.coords,H=W.isGeolocationEnabled,Q=b({}),z=j({api:a.api_getWardlist,options:{enabled:!0}}),Y=j({api:a.api_get_department_list,options:{enabled:!0}}),$=f({initialValues:{challanType:"",fullName:"",guardianName:"",mobile:"",email:"",holdingNo:"",tradeLicenseNo:"",address1:"",violationPlace:"",witnessName:"",witnessMobileNo:"",city:"",region:"",violationId:"",violationType:"",violationDepartmentId:"",postalCode:"",penaltyAmount:"",wardId:"",photo:"",photo2:"",photo3:"",pdf:"",latitude:"",longitude:"",audioVideo:""},validationSchema:C,onSubmit:(x=n(t().mark((function e(r){return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L("Are you sure you want to generate challan?");case 2:if(!e.sent){e.next=7;break}return e.next=5,ie(r);case 5:e.next=8;break;case 7:o.error("Challan Generation Cancelled");case 8:case"end":return e.stop()}}),e)}))),function(e){return x.apply(this,arguments)})}),J=$.isSubmitting,K=$.submitCount,X=$.errors,Z=function(){var e=n(t().mark((function e(r){var n,i,a,l,s;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(H){e.next=4;break}return o.error("Please enable location permission to capture the image with location"),r.target.value=null,e.abrupt("return");case 4:if(!(n=r.target.files[0])){e.next=16;break}return e.next=8,N(n);case 8:l=e.sent,s=new File([l],null==r||null===(i=r.target)||void 0===i||null===(i=i.files[0])||void 0===i?void 0:i.name,{type:null==r||null===(a=r.target)||void 0===a||null===(a=a.files[0])||void 0===a?void 0:a.type}),I(URL.createObjectURL(s)),$.setFieldValue("photo",s),$.setFieldValue("latitude",null==B?void 0:B.latitude),$.setFieldValue("longitude",null==B?void 0:B.longitude),e.next=19;break;case 16:$.setFieldValue("photo",null),$.setFieldValue("latitude",""),$.setFieldValue("longitude","");case 19:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ee=function(){var e=n(t().mark((function e(r){var n,i,o,a,l;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n=r.target.files[0])){e.next=10;break}return e.next=4,N(n);case 4:a=e.sent,l=new File([a],null==r||null===(i=r.target)||void 0===i||null===(i=i.files[0])||void 0===i?void 0:i.name,{type:null==r||null===(o=r.target)||void 0===o||null===(o=o.files[0])||void 0===o?void 0:o.type}),V(URL.createObjectURL(l)),$.setFieldValue("photo2",l),e.next=11;break;case 10:$.setFieldValue("photo2",null);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),te=function(){var e=n(t().mark((function e(r){var n,i,o,a,l;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n=r.target.files[0])){e.next=10;break}return e.next=4,N(n);case 4:a=e.sent,l=new File([a],null==r||null===(i=r.target)||void 0===i||null===(i=i.files[0])||void 0===i?void 0:i.name,{type:null==r||null===(o=r.target)||void 0===o||null===(o=o.files[0])||void 0===o?void 0:o.type}),A(URL.createObjectURL(l)),$.setFieldValue("photo3",l),e.next=11;break;case 10:$.setFieldValue("photo3",null);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),re=function(){var e=n(t().mark((function e(r){var n;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=r.target.files[0],$.setFieldValue("pdf",n),U(URL.createObjectURL(n));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ne=j({api:a.api_department_type_by_department_id,config:{departmentId:$.values.violationDepartmentId},value:[$.values.violationDepartmentId],options:{enabled:!!$.values.violationDepartmentId}}),ie=function(){var e=n(t().mark((function e(r){var n,i,l,s,c;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Q.mutateAsync({api:"onSpot"==r.challanType?a.api_save_on_spot:a.api_save_verification,data:r});case 3:null!=(i=e.sent)&&null!==(n=i.data)&&void 0!==n&&n.status?(o.success(null==i||null===(l=i.data)||void 0===l?void 0:l.message),"onSpot"==r.challanType?(E("/fines-app/today-challan"),$.resetForm()):(E("/fines-app/today-application"),$.resetForm())):o.error(null==i||null===(s=i.data)||void 0===s?void 0:s.message),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),o.error(null===e.t0||void 0===e.t0||null===(c=e.t0.response)||void 0===c||null===(c=c.data)||void 0===c?void 0:c.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();return d.useEffect((function(){M({formik:$})}),[X,K,J]),l.jsxs(s,{title:"Generate Challan",meta:l.jsx(l.Fragment,{children:l.jsx("meta",{name:"description",content:"Generate Challan"})}),children:[Q.isLoading&&l.jsx(S,{}),l.jsx("div",{className:"p-4",children:l.jsxs(h,{formik:$,children:[l.jsxs("div",{children:[l.jsx("h1",{className:"text-sm font-semibold text-blue-gray-500 mb-2 ",children:"# Violator Information"}),l.jsx(y.Card,{className:"rounded-2xl",children:l.jsx(y.Card.Body,{children:l.jsxs("div",{className:"grid grid-cols-1 gap-1 md:grid-cols-2",children:[l.jsxs(p,{name:"challanType",label:"Challan Type",formik:$,isRequiredLabel:!0,children:[l.jsx("option",{value:"",children:"Select Challan Type"}),l.jsx("option",{value:"onSpot",children:"On Spot"}),l.jsx("option",{value:"verification",children:"Verification"})]}),l.jsx(m,{formik:$,isRequiredLabel:!0,name:"fullName",label:"Full Name",inputValidation:["removeSpecialCharacterWithDoubleSpace","string"]}),l.jsx(m,{formik:$,name:"guardianName",label:"Guardian Name",inputValidation:["removeSpecialCharacterWithDoubleSpace","string","nocopy"]}),l.jsx(m,{formik:$,type:"number",name:"mobile",label:"Mobile No",inputValidation:["mobile"]}),l.jsx(m,{type:"email",formik:$,name:"email",label:"Email"}),l.jsxs(p,{name:"wardId",label:"Ward",formik:$,isRequiredLabel:!0,children:[l.jsx("option",{value:"",children:"Select Ward"}),null===(e=z.data)||void 0===e||null===(e=e.data)||void 0===e?void 0:e.map((function(e){return l.jsx("option",{value:e.id,children:e.ward_name},e.id)}))]}),l.jsx(m,{formik:$,name:"holdingNo",label:"Holding No",inputValidation:["removeSpace"]}),l.jsx(m,{formik:$,name:"tradeLicenseNo",label:"Trade License No",inputValidation:["removeSpace"]})]})})})]}),l.jsxs("div",{className:"mt-8",children:[l.jsx("h1",{className:"text-sm font-semibold text-blue-gray-500 mb-2 ",children:"# Violator Address Information"}),l.jsx(y.Card,{className:"rounded-2xl",children:l.jsx(y.Card.Body,{children:l.jsxs("div",{className:"grid grid-cols-1 gap-1 md:grid-cols-2",children:[l.jsx(m,{formik:$,name:"region",label:"Region",inputValidation:["removeDoubleSpace"]}),l.jsx(m,{formik:$,name:"address1",isRequiredLabel:!0,label:"Street Address",inputValidation:["removeDoubleSpace"]}),l.jsx(m,{isRequiredLabel:!0,formik:$,name:"violationPlace",label:"Place",inputValidation:["removeDoubleSpace","string"]})]})})})]}),l.jsxs("div",{className:"mt-8",children:[l.jsx("h1",{className:"text-sm font-semibold text-blue-gray-500 mb-2 ",children:"# Challan Details"}),l.jsx(y.Card,{className:"rounded-2xl",children:l.jsx(y.Card.Body,{children:l.jsxs("div",{className:"grid grid-cols-1 gap-1 md:grid-cols-2",children:[l.jsxs(p,{name:"violationDepartmentId",label:"Violation Department",formik:$,isRequiredLabel:!0,children:[l.jsx("option",{value:"",children:"Select Violation"}),null===(r=Y.data)||void 0===r||null===(r=r.data)||void 0===r?void 0:r.map((function(e){return l.jsx("option",{value:e.id,children:e.department_name},e.id)}))]}),l.jsxs(p,{name:"violationId",label:"Violation Type",formik:$,isRequiredLabel:!0,children:[l.jsx("option",{value:"",children:"Select Violation Type"}),null===(g=ne.data)||void 0===g||null===(g=g.data)||void 0===g?void 0:g.map((function(e){return l.jsx("option",{value:e.id,children:e.violation_name},e.id)}))]})]})})})]}),l.jsxs("div",{className:"mt-8",children:[l.jsx("h1",{className:"text-sm font-semibold text-blue-gray-500 mb-2 ",children:"# Document"}),l.jsx(y.Card,{className:"rounded-2xl",children:l.jsx(y.Card.Body,{children:l.jsxs("div",{className:"grid grid-cols-1 gap-1 md:grid-cols-2",children:[l.jsxs("div",{children:[l.jsx(m,{isRequiredLabel:!0,accept:"image/*",type:"file",name:"photo",label:"Select Image",onChange:Z,ref:_}),$.errors.photo&&$.touched.photo&&l.jsx("span",{className:"text-red-600 text-xs -mt-7",children:$.errors.photo}),l.jsx("div",{className:"mt-4",children:P&&l.jsxs("div",{children:[l.jsx("div",{className:"flex items-center justify-center",children:l.jsx("img",{src:P,alt:"preview",className:"w-40 h-40 object-cover rounded-lg"})}),B&&$.values.photo&&l.jsxs("h1",{className:"text-sm font-semibold text-blue-gray-500 mt-2 ",children:["Latitude: ",$.values.latitude," | Longitude:"," ",$.values.longitude]}),l.jsx("hr",{className:"border-t border-gray-200 my-4"})]})})]}),l.jsxs("div",{children:[l.jsx(m,{accept:"image/*",type:"file",name:"photo2",label:"Select Image 2",onChange:ee}),l.jsx("div",{className:"mt-4",children:R&&l.jsxs("div",{children:[l.jsx("div",{className:"flex items-center justify-center",children:l.jsx("img",{src:R,alt:"preview",className:"w-40 h-40 object-cover rounded-lg"})}),l.jsx("hr",{className:"border-t border-gray-200 my-4"})]})})]}),l.jsxs("div",{children:[l.jsx(m,{accept:"image/*",type:"file",name:"photo3",label:"Select Image 3",onChange:te}),l.jsx("div",{className:"mt-4",children:q&&l.jsxs("div",{children:[l.jsx("div",{className:"flex items-center justify-center",children:l.jsx("img",{src:q,alt:"preview",className:"w-40 h-40 object-cover rounded-lg"})}),l.jsx("hr",{className:"border-t border-gray-200 my-4"})]})})]}),l.jsxs("div",{children:[l.jsx(m,{accept:".pdf",type:"file",name:"pdf",label:"Select PDF",onChange:re}),l.jsx("div",{className:"mt-4",children:$.values.pdf&&l.jsxs("div",{children:[l.jsx("div",{className:"flex items-center justify-center",children:l.jsx("iframe",{src:D,width:"100%",height:"250px",children:"This browser does not support PDFs. Please download the PDF to view it: Download PDF"})}),l.jsx("hr",{className:"border-t border-gray-200 my-4"})]})})]})]})})})]}),l.jsx("div",{className:"py-8",children:l.jsx(v,{type:"submit",loading:Q.isLoading,disabled:Q.isLoading,className:"mt-4",children:"Generate Challan"})})]})})]})}}}}))}();