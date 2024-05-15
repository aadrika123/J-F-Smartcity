import{j as a}from"./mui-8e804a04.js";import{f as G,r as o,u as H}from"./router-87042356.js";import{m as J,c as Q,d as v,u as Z,A as V}from"./index-20410c83.js";import"./moment-fbc5633a.js";import{P as D}from"./PetRegAPIList-8c3060c2.js";import{r as F}from"./UseImgResizer-f1558408.js";import"./react-09dd1212.js";import"./axios-97164839.js";import"./reactIcons-6a3b6da1.js";import"./redux-4db06ad6.js";import"./i18next-e99b4042.js";const e={required:"text-red-700 font-semibold",label:"text-sm",textFiled:"block w-full h-9 border px-2 border-gray-300 rounded shadow text-gray-700",textArea:"block w-full border px-2 border-gray-300 rounded shadow"},ge=ee=>{const{id:C}=G(),[l,R]=o.useState(),{notify:g}=o.useContext(J),[N,w]=o.useState(!1),[E,b]=o.useState(!1),[y,j]=o.useState(!1),[u,_]=o.useState();o.useState(!1);const[ae,L]=o.useState(),[se,q]=o.useState(),[te,k]=o.useState(),S=o.useRef(),A=H(),[f,le]=o.useState(""),{header:P,api_RigApproveViewApplication:M,api_RigApplyRenewalForm:T,header1:z}=D(),U=Q({fitness:v().required("Kindly enter a value."),taxCopy:v().required("Kindly enter a value."),license:v().required("Kindly enter a value.")}),K={fitness:"",taxCopy:"",license:""};let d=new FormData;const s=Z({initialValues:K,enableReinitialize:!0,onSubmit:(t,n)=>{$(t),console.log("Value.....",t)},validationSchema:U}),W=t=>{let n=t.target.name,r=t.target.value;j(!1),n=="driverName"&&s.setFieldValue("driverName",allowCharacterInput(r,s.values.driverName,20)),n=="fitness"&&L(t.target.files[0]),n=="taxCopy"&&q(t.target.files[0]),n=="license"&&k(t.target.files[0])},$=t=>{var r,c,m;b(!0),console.log("datadatadata",t);const n={registrationId:C};console.log(n,"payload====>>");for(let i in n)d.append(i,n[i]);d.append("documents[0][image]",(r=s==null?void 0:s.values)==null?void 0:r.fitness),d.append("documents[0][docCode]","FITNESS"),d.append("documents[0][ownerDtlId]",""),d.append("documents[1][image]",(c=s==null?void 0:s.values)==null?void 0:c.taxCopy),d.append("documents[1][docCode]","TAX"),d.append("documents[1][ownerDtlId]",""),d.append("documents[2][image]",(m=s==null?void 0:s.values)==null?void 0:m.license),d.append("documents[2][docCode]","LICENSE"),d.append("documents[2][ownerDtlId]",""),V.post(T,d,P).then(i=>{var p,x,h;b(!1),i.data.status?(_(i.data.data),B(),console.log("Form applied successfully"),g((p=i==null?void 0:i.data)==null?void 0:p.message,"success")):(g((x=i==null?void 0:i.data)==null?void 0:x.message,"error"),j((h=i==null?void 0:i.data)==null?void 0:h.message),console.log("Failed to apply pet registration"))}).catch(i=>{var p,x,h,I;j((x=(p=i==null?void 0:i.response)==null?void 0:p.data)==null?void 0:x.error),g("Something Went wrong","error"),b(!1),console.log("Error while applying for pet registration..",(I=(h=i==null?void 0:i.response)==null?void 0:h.data)==null?void 0:I.error)})},B=()=>{S.current.showModal()};o.useEffect(()=>{V.post(M,{registrationId:C},z).then(t=>{t.data.status?(R(t.data.data),console.log("pet Renewal data",t.data),console.log("pet Renewal data====>",t.data.data.address)):console.log("Error fetching pet master list")}).catch(t=>{console.log("Error while getting pet master list")})},[]);const O=async t=>{var r,c,m,i;const n=t.target.files[0];if(n){const p=await F(n),x=new File([p],(c=(r=t==null?void 0:t.target)==null?void 0:r.files[0])==null?void 0:c.name,{type:(i=(m=t==null?void 0:t.target)==null?void 0:m.files[0])==null?void 0:i.type});s.setFieldValue("fitness",x)}else s.setFieldValue("fitness",null)},X=async t=>{var r,c,m,i;const n=t.target.files[0];if(n){const p=await F(n),x=new File([p],(c=(r=t==null?void 0:t.target)==null?void 0:r.files[0])==null?void 0:c.name,{type:(i=(m=t==null?void 0:t.target)==null?void 0:m.files[0])==null?void 0:i.type});s.setFieldValue("taxCopy",x)}else s.setFieldValue("taxCopy",null)},Y=async t=>{var r,c,m,i;const n=t.target.files[0];if(n){const p=await F(n),x=new File([p],(c=(r=t==null?void 0:t.target)==null?void 0:r.files[0])==null?void 0:c.name,{type:(i=(m=t==null?void 0:t.target)==null?void 0:m.files[0])==null?void 0:i.type});s.setFieldValue("license",x)}else s.setFieldValue("license",null)};return a.jsxs(a.Fragment,{children:[a.jsxs("form",{onSubmit:s.handleSubmit,onChange:W,children:[a.jsxs("div",{className:"overflow-y-auto",children:[a.jsxs("h1",{className:"px-4 font-semibold text-lg text-center",children:[" Application no -",a.jsxs("span",{className:"text-blue-600",children:[" ",l==null?void 0:l.application_no]})]}),a.jsx("div",{className:"col-span-12 ml-2 my-2",children:a.jsx("div",{className:"text-lg text-left text-gray-600 font-semibold",children:"# Property Details "})}),a.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-3  bg-white shadow-md rounded-md py-2",children:[a.jsxs("div",{className:"m-3",children:[a.jsx("label",{className:e==null?void 0:e.label,htmlFor:"ulb",children:"ULB "}),a.jsx("input",{value:l==null?void 0:l.ulb_name,disabled:!0,type:"text",name:"ulb",className:e==null?void 0:e.textFiled}),a.jsx("p",{className:"text-red-500 text-xs",children:s.touched.ulb&&s.errors.ulb?s.errors.ulb:null})]}),a.jsxs("div",{className:"m-3",children:[a.jsx("label",{className:e==null?void 0:e.label,htmlFor:"categoryApplication",children:"Category of Application"}),a.jsx("input",{disabled:!0,value:(l==null?void 0:l.application_type)=="New_Apply"?"Renewal":"",type:"text",name:"holdingNo",className:e==null?void 0:e.textFiled}),a.jsx("p",{className:"text-red-500 text-xs",children:s.touched.categoryApplication&&s.errors.categoryApplication?s.errors.categoryApplication:null})]}),a.jsxs("div",{className:"m-3",children:[a.jsx("label",{className:e==null?void 0:e.label,htmlFor:"ward",children:"Ward Number"}),a.jsx("input",{type:"text",disabled:!0,value:l==null?void 0:l.ward_name,name:"ward",className:e==null?void 0:e.textFiled}),a.jsx("p",{className:"text-red-500 text-xs",children:s.touched.ward&&s.errors.ward?s.errors.ward:null})]})]}),a.jsx("div",{className:"col-span-12 ml-2 my-2",children:a.jsx("div",{className:"text-lg text-left text-gray-600 font-semibold",children:"# Applicant Details"})}),a.jsxs("div",{className:"bg-white shadow-md rounded-md py-2",children:[a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 ",children:[a.jsxs("div",{className:"m-3",children:[a.jsx("label",{className:e==null?void 0:e.label,htmlFor:"applicantName",children:"Name of Applicant"}),a.jsx("input",{disabled:!0,value:l==null?void 0:l.applicant_name,className:e==null?void 0:e.textFiled}),a.jsx("p",{className:"text-red-500 text-xs",children:s.touched.applicantName&&s.errors.applicantName?s.errors.applicantName:null})]}),a.jsxs("div",{className:"m-3",children:[a.jsx("label",{className:e==null?void 0:e.label,htmlFor:"mobileNo",children:"Mobile No"}),a.jsx("input",{disabled:!0,value:l==null?void 0:l.mobile_no,type:"number",name:"mobileNo",className:e==null?void 0:e.textFiled}),a.jsx("p",{className:"text-red-500 text-xs",children:s.touched.mobileNo&&s.errors.mobileNo?s.errors.mobileNo:null})]}),a.jsxs("div",{className:"m-3",children:[a.jsx("label",{className:e==null?void 0:e.label,htmlFor:"email",children:"Email"}),a.jsx("input",{disabled:!0,value:l==null?void 0:l.email,type:"email",name:"email",className:e==null?void 0:e.textFiled}),a.jsx("p",{className:"text-red-500 text-xs",children:s.touched.email&&s.errors.email?s.errors.email:null})]})]}),a.jsxs("div",{className:"m-3",children:[a.jsx("label",{className:e==null?void 0:e.label,htmlFor:"address",children:"Address"}),a.jsx("textarea",{disabled:!0,value:l==null?void 0:l.address,name:"address",maxLength:"500",rows:"3",className:e==null?void 0:e.textArea}),a.jsx("p",{className:"text-red-500 text-xs",children:s.touched.address&&s.errors.address?s.errors.address:null})]})]}),a.jsx("div",{className:"col-span-12 ml-2 my-2",children:a.jsx("div",{className:"text-lg text-left text-gray-600 font-semibold",children:"# Vehicle Details"})}),a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 bg-white shadow-md rounded-md py-2",children:[a.jsxs("div",{className:"m-3",children:[a.jsxs("label",{className:e==null?void 0:e.label,htmlFor:"registrationNumber",children:["Registration No.",a.jsx("span",{className:e==null?void 0:e.required,children:"*"})]}),a.jsx("input",{disabled:!0,value:l==null?void 0:l.vehicle_no,maxLength:"10",type:"text",name:"registrationNumber",className:e==null?void 0:e.textFiled,onChange:t=>{const n=t.target.value.toUpperCase();s.setFieldValue("registrationNumber",n)}}),a.jsx("p",{className:"text-red-500 text-xs",children:s.touched.registrationNumber&&s.errors.registrationNumber?s.errors.registrationNumber:null})]}),a.jsxs("div",{className:"m-3",children:[a.jsxs("label",{className:e==null?void 0:e.label,htmlFor:"vehicleComapny",children:["VIN Number",a.jsx("span",{className:e==null?void 0:e.required,children:"*"})]}),a.jsx("input",{disabled:!0,value:l==null?void 0:l.vehicle_name,maxLength:"17",type:"text",name:"vehicleComapny",className:e==null?void 0:e.textFiled,onChange:t=>{const n=t.target.value.toUpperCase();s.setFieldValue("vehicleComapny",n)}}),a.jsx("p",{className:"text-red-500 text-xs",children:s.touched.vehicleComapny&&s.errors.vehicleComapny?s.errors.vehicleComapny:null})]}),a.jsxs("div",{className:"m-3",children:[a.jsxs("label",{className:e==null?void 0:e.label,htmlFor:"fitness",children:["Pollution Certificate",a.jsx("span",{className:e==null?void 0:e.required,children:"*"})]}),a.jsx("input",{onChange:O,maxLength:"50",type:"file",name:"fitness",className:e==null?void 0:e.textFiled}),a.jsx("p",{className:"text-red-500 text-xs",children:f})]}),a.jsxs("div",{className:"m-3",children:[a.jsxs("label",{className:e==null?void 0:e.label,htmlFor:"taxCopy",children:["Tax Copy",a.jsx("span",{className:e==null?void 0:e.required,children:"*"})]}),a.jsx("input",{onChange:X,maxLength:"50",type:"file",name:"taxCopy",className:e==null?void 0:e.textFiled}),a.jsx("p",{className:"text-red-500 text-xs",children:f})]}),a.jsxs("div",{className:"m-3",children:[a.jsxs("label",{className:e==null?void 0:e.label,htmlFor:"license",children:["Registration Of Certificate",a.jsx("span",{className:e==null?void 0:e.required,children:"*"})]}),a.jsx("input",{onChange:Y,maxLength:"50",type:"file",name:"license",className:e==null?void 0:e.textFiled}),a.jsx("p",{className:"text-red-500 text-xs",children:f})]})]})]}),a.jsxs("p",{className:"flex mt-3 gap-x-3",children:[a.jsx("input",{type:"checkbox",checked:N,name:"",id:"",onChange:t=>w(t.target.checked)}),a.jsx("p",{className:"cursor-pointer select-none",onClick:()=>w(!N),children:"I have entered the correct information and agree to the terms and conditions."})]}),a.jsx("p",{className:"text-red-500 font-semibold text-center mt-3",children:y&&y}),a.jsx("div",{className:"flex justify-center my-5",children:E?a.jsx("p",{children:"Form Submitting.."}):a.jsx("button",{type:"submit",disabled:!N,className:"disabled:opacity-40 bg-indigo-600 hover:bg-indigo-700 px-8 py-2 text-white rounded shadow",children:"Submit Application"})})]}),a.jsx("dialog",{ref:S,className:"",children:a.jsxs("div",{className:"space-y-2 mb-5",children:[a.jsx("p",{className:"text-center bg-yellow-300 p-2 font-semibold ",children:" Your Application has submitted successfully"}),a.jsxs("p",{className:"text-center",children:["Application No.  ",a.jsx("span",{className:"font-semibold text-lg",children:(u==null?void 0:u.applicationNo)||"N/A"})]}),a.jsxs("div",{className:"flex justify-center gap-x-5",children:[a.jsx("button",{onClick:()=>A("/search-pet-registration"),className:"border border-indigo-600 px-2 py-1 rounded shadow hover:bg-indigo-500 hover:text-white",children:"Dashboard"}),a.jsx("button",{onClick:()=>A(`/rigPayment/${u==null?void 0:u.id}`),className:"bg-indigo-500 px-2 py-1 rounded shadow text-white hover:bg-indigo-700",children:"Make Payment"})]})]})})]})};export{ge as default};