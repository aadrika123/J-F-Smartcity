import{r as c,u as _,b as l,F as s,j as e,a as D}from"./index-92e4a43a.js";import{u as k}from"./formik.esm-b2c00c7f.js";import{c as A,a as b}from"./index.esm-2caeedd9.js";import{R as j}from"./index.esm-a1eb775b.js";import{W as L}from"./WaterApiList-e6e52714.js";import q from"./CommonLoader-325ae215.js";import"./hoist-non-react-statics.cjs-decfaac5.js";import"./BeatLoader-b3b9df9b.js";function G(){const[f,n]=c.useState(),[N,d]=c.useState(!1),[i,v]=c.useState([]),{api_waterSearchConsumer:y,header:w}=L(),S=_(),B=a=>{d(!0);const o={filterBy:r.values.filterBy,parameter:r.values.parameter};console.log("before fetch holding details....",o),D.post(y,o,w).then(t=>{var h,m,x,u,p,g;console.log("search property list",(h=t==null?void 0:t.data)==null?void 0:h.data),(m=t==null?void 0:t.data)!=null&&m.status&&(v((u=(x=t==null?void 0:t.data)==null?void 0:x.data)==null?void 0:u.data),console.log("fetched data",(g=(p=t==null?void 0:t.data)==null?void 0:p.data)==null?void 0:g.data)),d(!1)}).catch(t=>{console.log("Error while fetching Filter Data",t),d(!1)})},C=A({filterBy:b().required("This is a required field !"),parameter:b().required("This is a required field !")}),r=k({initialValues:{filterBy:"",parameter:""},onSubmit:a=>{B()},validationSchema:C}),F=a=>{r.values.filterBy=a.target.value,a.target.value=="holdingNo"&&n("Holding No"),a.target.value=="ownerDetails"&&n("Owner Details"),a.target.value=="address"&&n("Address")};return l(s,{children:[N&&e(q,{}),e("div",{className:"text-center font-bold text-gray-700 text-lg border-b-2 border-gray-700 mx-4 mb-4",children:e("p",{children:" Search Water Consumer "})}),l("div",{className:"mt-6",children:[e("div",{className:"flex ml-5 mt-2 "}),e("form",{onSubmit:r.handleSubmit,children:l("div",{className:"justify-center my-5 m-10",children:[l("div",{children:[l("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["Filter By",e("span",{className:"text-red-500",children:"*"})]}),l("select",{name:"filterBy",onChange:F,className:"cursor-pointer w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",children:[e("option",{value:"",children:"Select"}),e("option",{value:"consumerNo",children:"Consumer No"}),e("option",{value:"holdingNo",children:"Holding No"}),e("option",{value:"safNo",children:"SAF No"}),e("option",{value:"applicantName",children:"Applicant Name"}),e("option",{value:"mobileNo",children:"Mobile No"})]}),e("p",{className:"text-red-500 text-xs",children:r.touched.filterBy&&r.errors.filterBy?r.errors.filterBy:null})]}),l("div",{children:[l("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["Search By ",f," ",e("span",{className:"text-red-500",children:"*"})]}),e("input",{type:"text",name:"parameter",onChange:r.handleChange,className:" w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),e("p",{className:"text-red-500 text-xs",children:r.touched.parameter&&r.errors.parameter?r.errors.parameter:null})]}),e("div",{className:"mt-4",children:e("button",{type:"submit",className:"w-full border border-indigo-600 bg-indigo-600 hover:bg-indigo-700 text-gray-200 hover:text-white shadow-lg rounded-sm text-base font-semibold  py-1",children:l("p",{className:"flex justify-center",children:[" ",l("span",{className:"mt-1 mx-2",children:[" ",e(j,{})," "]})," ","Search record"," "]})})})]})}),e("div",{className:"mt-10 mx-4",children:i?l("div",{className:"w-full relative bg-indigo-50 shadow-md  rounded-sm pb-2 border-2 border-indigo-600 mb-4 select-none cursor-pointer",children:[e("div",{className:"font-semibold bg-indigo-600 px-4 text-white",children:"Consumer Details"}),e("div",{className:"w-full rounded-lg space-b-2",children:e("div",{className:"",children:i&&i.map((a,o)=>l("div",{children:[l("div",{className:"w-full md:w-[40%] grid grid-cols-12 p-4",children:[l(s,{children:[e("div",{className:"col-span-6 text-xs text-gray-600",children:"Consumer No"}),e("div",{className:"col-span-6 font-semibold text-gray-700 2xl:text-base text-sm",children:a==null?void 0:a.consumer_no})]}),(a==null?void 0:a.holding_no)&&l(s,{children:[e("div",{className:"col-span-6 text-xs text-gray-600",children:"Holding No"}),e("div",{className:"col-span-6 font-semibold text-gray-700 2xl:text-base text-sm",children:a==null?void 0:a.holding_no})]}),(a==null?void 0:a.saf_no)&&l(s,{children:[e("div",{className:"col-span-6 text-xs text-gray-600",children:"Saf No"}),e("div",{className:"col-span-6 font-semibold text-gray-700 2xl:text-base text-sm",children:a==null?void 0:a.saf_no})]}),l(s,{children:[e("div",{className:"col-span-6 text-xs text-gray-600",children:"Applicant Name"}),e("div",{className:"col-span-6 font-semibold text-gray-700 2xl:text-base text-sm",children:a==null?void 0:a.applicant_name})]}),l(s,{children:[e("div",{className:"col-span-6 text-xs text-gray-600",children:"Guardian Name"}),e("div",{className:"col-span-6 font-semibold text-gray-700 2xl:text-base text-sm",children:a==null?void 0:a.guardian_name})]}),l(s,{children:[e("div",{className:"col-span-6 text-xs text-gray-600",children:"Mobile No"}),e("div",{className:"col-span-6 font-semibold text-gray-700 2xl:text-base text-sm",children:a==null?void 0:a.mobile_no})]}),l(s,{children:[e("div",{className:"col-span-6 text-xs text-gray-600",children:"Address"}),e("div",{className:"col-span-6 font-semibold text-gray-700 2xl:text-base text-sm",children:a==null?void 0:a.address})]})]},o),e("div",{className:"float-right -mt-4 -pl-1",children:e("button",{onClick:()=>S(`/water-consumer-view/${a==null?void 0:a.id}`),className:"px-3 mt-1 rounded-l-sm -mr-0.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm",children:"Click to View"})})]}))})})]}):e("div",{})})]})]})}export{G as default};