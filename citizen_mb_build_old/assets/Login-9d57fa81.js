import{r,j as a,u as st,g as mt,d as Q,A as Z,F as tt,b as w,L as nt,P as ut}from"./index-00b86bac.js";import{u as gt}from"./formik.esm-d604f56a.js";import{c as ft,b as ht,a as at}from"./index.esm-fa258cf8.js";/* empty css                */import{R as wt}from"./Hourglass-c2e3dd3e.js";import{T as E,F as xt}from"./LoadingButton-c81d8cb6.js";import"./hoist-non-react-statics.cjs-cafd119d.js";import"./ThemeStyle-994f51bc.js";import"./index.esm-b7914153.js";const yt=()=>{const[u,x]=r.useState(""),f=()=>{const o=Math.random().toString(36).slice(2,8).toUpperCase();x(o)},m=(o,S)=>o===u?!0:(S({captcha:""},!1),f(),!1),s=document.createElement("canvas");s.style.margin="0",s.style.padding="0",s.width=100,s.height=22;const i=s.getContext("2d");i.font="bold 15px Arial",i.fillStyle="blue",i.fillText(u,21,16);const y=s.toDataURL();return r.useEffect(()=>{f()},[]),{catptchaTextField:o=>a("div",{children:a(E,{name:"captcha",placeholder:"Enter captcha",formik:o})}),captcha:u,dataUrl:y,verifyCaptcha:m,generateCaptcha:f}},Lt=()=>{const u=st(),{catptchaTextField:x,dataUrl:f,generateCaptcha:m,verifyCaptcha:s}=yt(),{notify:i,setisLoggedIn:y,setheartBeatCounter:C}=r.useContext(mt),[o,S]=r.useState(null),[d,et]=r.useState(),{api_login:lt,api_getPermission:it}=ut(),[b,n]=r.useState(!1),ot=ft({email:ht().required("Enter email"),password:at().required("Enter password"),captcha:at().required("Enter captcha")}),c=gt({initialValues:{email:"",password:"",type:"mobile",captcha:""},onSubmit:async(e,{resetForm:t})=>{s(e==null?void 0:e.captcha,t)?dt():i("Invalid Captcha")},validationSchema:ot}),I=["TAX COLLECTOR","ULB TAX COLLECTOR","TEAM LEADER","JUNIOR ENGINEER","TAX DAROGA","DRIVER","SEPTIC TANKER DRIVER","ENFORCEMENT OFFICER","CONDUCTOR"],ct=r.useMemo(()=>Array.isArray(o)&&o.some(e=>I.includes(e)),[o]);r.useEffect(()=>{var e,t,g;o!=null&&(ct?(i("Login Successfull !!! ","success"),window.localStorage.setItem("menuList",JSON.stringify((e=d==null?void 0:d.userDetails)==null?void 0:e.menuPermission)),window.localStorage.setItem("userName",JSON.stringify((t=d==null?void 0:d.userDetails)==null?void 0:t.name)),window.localStorage.setItem("roles",JSON.stringify((g=d==null?void 0:d.userDetails)==null?void 0:g.role)),u("/dashboard")):i("You don't have permission of Tax Collector !!!","warn"))},[o]);const N=JSON.parse(window.localStorage.getItem("roles")),h=window.localStorage.getItem("token"),rt=r.useMemo(()=>Array.isArray(N)&&N.some(e=>I.includes(e)),[N,h]);r.useEffect(()=>{h!=""&&h!=null&&h!=null&&rt&&u("/dashboard")},[]);const dt=()=>{n(!0);let e={email:c.values.email,password:c.values.password,type:"mobile"};console.log("--1--before login send...",e),Q.post(lt,e,Z()).then(function(t){var g,v,R,p,L,T,A,F,O,D,k,P,U,V,J,j,M,q,B,_,X,$,G,H,K;console.log("login response => ",t),t.data.status==!0?(console.log("--2--login response...",t),window.localStorage.setItem("token",(v=(g=t==null?void 0:t.data)==null?void 0:g.data)==null?void 0:v.token),window.localStorage.setItem("isLoggedIn",!0),window.localStorage.setItem("userEmail",(L=(p=(R=t==null?void 0:t.data)==null?void 0:R.data)==null?void 0:p.userDetails)==null?void 0:L.email),window.localStorage.setItem("userName",(F=(A=(T=t==null?void 0:t.data)==null?void 0:T.data)==null?void 0:A.userDetails)==null?void 0:F.name),window.localStorage.setItem("userType",(k=(D=(O=t==null?void 0:t.data)==null?void 0:O.data)==null?void 0:D.userDetails)==null?void 0:k.user_type),window.localStorage.setItem("userMobile",(V=(U=(P=t==null?void 0:t.data)==null?void 0:P.data)==null?void 0:U.userDetails)==null?void 0:V.mobile),window.localStorage.setItem("ulbId",(M=(j=(J=t==null?void 0:t.data)==null?void 0:J.data)==null?void 0:j.userDetails)==null?void 0:M.ulb_id),window.localStorage.setItem("device","mobile"),window.localStorage.setItem("userUlbName",JSON.stringify((_=(B=(q=t==null?void 0:t.data)==null?void 0:q.data)==null?void 0:B.userDetails)==null?void 0:_.ulbName)),et((X=t==null?void 0:t.data)==null?void 0:X.data),S((H=(G=($=t==null?void 0:t.data)==null?void 0:$.data)==null?void 0:G.userDetails)==null?void 0:H.role),C(l=>l+1),y(!0),Q.post(it,{moduleId:1},Z()).then(l=>{var W,Y,z;console.log("getPermission response => ",l),l.data.status==!0?window.localStorage.setItem("menuList",JSON.stringify((Y=(W=l==null?void 0:l.data)==null?void 0:W.data)==null?void 0:Y.permission)):(i((z=l==null?void 0:l.data)==null?void 0:z.message,"error"),c.setFieldValue("captcha",""),m(),n(!1))}).catch(l=>{console.log("getPermission error => ",l),i("Something went wrong !!! ","error"),c.setFieldValue("captcha",""),m(),n(!1)})):(n(!1),i((K=t==null?void 0:t.data)==null?void 0:K.message,"error"),c.setFieldValue("captcha",""),m(),n(!1))}).catch(function(t){n(!1),console.log("--2--login error...",t),i("Something went wrong !!! ","error"),c.setFieldValue("captcha",""),m(),n(!1)})};return a(tt,{children:w(xt,{formik:c,children:[a("div",{className:"mt-6 flex flex-col flex-wrap gap-2",children:a(E,{name:"email",label:"Email",formik:c})}),a("div",{className:"mt-4 flex flex-col flex-wrap gap-2",children:a(E,{type:"password",name:"password",label:"Password",formik:c})}),a("div",{className:"mt-6 flex flex-col flex-wrap gap-0",children:w("div",{className:"flex justify-between",children:[a("div",{className:"bg-gray-400 px-4 py-1 rounded-sm",children:a("img",{src:f,alt:"captcha"})}),a("div",{children:a("button",{type:"button",onClick:m,className:"text-[#5846BE] text-sm",children:"Reload Captcha"})})]})}),a("div",{className:"mt-2 flex flex-col flex-wrap gap-2",children:x(c)}),a("div",{className:"text-center mb-6 mt-4",children:b?a("div",{className:"flex justify-center",children:a(wt,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"25",visible:!0})}):w(tt,{children:[a("div",{className:"mb-1",children:a(nt,{to:"/forget-password",className:"text-xs text-indigo-600",children:"Forgot Password ?"})}),w("button",{disabled:b,type:"submit",className:"px-4 py-1.5 bg-green-200 hover:bg-green-300 rounded-md shadow-md text-sm",children:[" ",b?"Please wait...":"Login"]})," "]})})]})})};export{Lt as default};