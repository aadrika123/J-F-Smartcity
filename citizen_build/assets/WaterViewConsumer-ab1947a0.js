import{j as s}from"./mui-8e804a04.js";import{r as t,f,u as a}from"./router-87042356.js";import{f as c}from"./index.esm-df462c79.js";import{B as j}from"./BarLoader-c714638c.js";import{W as i}from"./WaterApiList-883654eb.js";import{W as g}from"./WaterTopButtons-eb21f982.js";import{A as y}from"./index-2999921c.js";import"./react-09dd1212.js";import"./reactIcons-6a3b6da1.js";import"./axios-97164839.js";import"./redux-4db06ad6.js";import"./i18next-e99b4042.js";function E(v){var n;const[o,x]=t.useState(!1),[e,m]=t.useState(),{id:d}=f();console.log("param",d),a();const{api_waterApprovedApplicationDetails:h,header:N}=i(),l=()=>{x(!0),y.post(h,{id:d},N).then(function(r){console.log("water Approved Application Details",r.data.data),m(r.data.data),x(!1)}).catch(function(r){console.log("Error : water Approved Application Details",r),x(!1)})};return t.useEffect(()=>{l()},[d]),s.jsxs(s.Fragment,{children:[o&&s.jsx(j,{}),s.jsx(g,{active:"consumer",consumerNo:e==null?void 0:e.consumer_no}),s.jsx("div",{className:"grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-2 container mx-auto w-full max-sm:p-3",children:s.jsx("div",{className:"col-span-12 rounded-lg",children:s.jsxs("div",{className:"",children:[s.jsxs("div",{className:"",children:[s.jsxs("h1",{className:"px-1 font-semibold font-serif  text-gray-500",children:[s.jsx(c,{className:"inline"})," Basic Details"]}),s.jsx("div",{className:"py-6 mt-2 bg-white rounded-lg shadow-xl p-1 md:p-4 max-sm:flex max-sm:flex-col",children:s.jsxs("div",{className:"flex flex-wrap gap-5 pl-4 max-sm:flex-col",children:[s.jsxs("div",{className:"flex-1",children:[s.jsx("div",{className:"font-semibold text-sm",children:e!=null&&e.ulb_name?e==null?void 0:e.ulb_name:"N/A"}),s.jsx("div",{className:"text-gray-500 text-xs",children:"ULB Name"})]}),s.jsxs("div",{className:"flex-1",children:[s.jsx("div",{className:"font-bold text-sm",children:e!=null&&e.ward_name?e==null?void 0:e.ward_name:"N/A"}),s.jsx("div",{className:"text-gray-500 text-xs",children:"Ward No."})]}),s.jsxs("div",{className:"flex-1",children:[s.jsx("div",{className:"font-semibold text-md",children:e!=null&&e.owner_char_type?e==null?void 0:e.owner_char_type:"N/A"}),s.jsx("div",{className:"text-gray-500 text-xs",children:"Ownership Type"})]}),s.jsxs("div",{className:"flex-1",children:[s.jsx("div",{className:"font-bold text-sm",children:e!=null&&e.property_type?e==null?void 0:e.property_type:"N/A"}),s.jsx("div",{className:"text-gray-500 text-xs",children:"Property Type"})]}),s.jsxs("div",{className:"flex-1",children:[s.jsx("div",{className:"font-bold text-sm",children:e!=null&&e.pipeline_type?e==null?void 0:e.pipeline_type:"N/A"}),s.jsx("div",{className:"text-gray-500 text-xs",children:"Pipeline Type"})]})]})})]}),s.jsxs("h1",{className:"px-1 font-semibold font-serif mt-10 text-gray-500",children:[s.jsx(c,{className:"inline"})," Property Address & Details"]}),s.jsxs("div",{className:"py-6 mt-2 bg-white rounded-lg shadow-xl p-4",children:[s.jsxs("div",{className:"flex flex-wrap gap-10 pl-4 max-sm:flex-col max-sm:gap-5",children:[s.jsxs("div",{className:"flex-1",children:[s.jsx("div",{className:"font-bold text-sm",children:e!=null&&e.connection_through?e==null?void 0:e.connection_through:"N/A"}),s.jsx("div",{className:"text-gray-500 text-xs",children:"Connection Through"})]}),(e==null?void 0:e.connection_through)=="SAF"?s.jsxs("div",{className:"flex-1",children:[s.jsx("div",{className:"font-semibold text-md",children:e!=null&&e.saf_no?e==null?void 0:e.saf_no:"N/A"}),s.jsx("div",{className:"text-gray-500 text-xs",children:"SAF No"})]}):s.jsxs("div",{className:"flex-1",children:[s.jsx("div",{className:"font-semibold text-md",children:e!=null&&e.holding_no?e==null?void 0:e.holding_no:"N/A"}),s.jsx("div",{className:"text-gray-500 text-xs",children:"Holding No"})]}),s.jsxs("div",{className:"flex-1",children:[s.jsx("div",{className:"font-semibold text-md",children:e!=null&&e.connection_type?e==null?void 0:e.connection_type:"N/A"}),s.jsx("div",{className:"text-gray-500 text-xs",children:"Connection Type"})]}),s.jsxs("div",{className:"flex-1",children:[s.jsx("div",{className:"font-bold text-sm",children:e!=null&&e.area_sqft?e==null?void 0:e.area_sqft:"N/A"}),s.jsx("div",{className:"text-gray-500 text-xs",children:"Area (Sqft.)"})]}),s.jsxs("div",{className:"flex-1",children:[s.jsx("div",{className:"font-bold text-sm",children:e!=null&&e.category?e==null?void 0:e.category:"N/A"}),s.jsx("div",{className:"text-gray-500 text-xs",children:"Category"})]})]}),s.jsx("div",{className:"flex space-x-10  pl-4 mt-4",children:s.jsxs("div",{className:"flex-1",children:[s.jsxs("div",{className:"font-bold text-sm",children:[e!=null&&e.address?e==null?void 0:e.address:"N/A"," , ",e==null?void 0:e.prop_state]}),s.jsx("div",{className:"text-gray-500 text-xs",children:"Property Address"})]})})]}),s.jsxs("div",{className:"mt-10",children:[s.jsxs("h1",{className:"px-1 font-semibold font-serif text-gray-500",children:[s.jsx(c,{className:"inline"})," Owner Details"]}),s.jsx("div",{className:"overflow-auto",children:s.jsxs("table",{className:"min-w-full leading-normal mt-2 bg-white rounded-lg shadow-xl p-4",children:[s.jsx("thead",{className:"font-bold text-left text-sm border text-gray-800 bg-white",children:s.jsxs("tr",{children:[s.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"#"}),s.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Owner Name"}),s.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Guardian Name"}),s.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Mobile No."}),s.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"email "})]})}),s.jsx("tbody",{className:"text-sm",children:s.jsx(s.Fragment,{children:(n=e==null?void 0:e.ownerDetails)==null?void 0:n.map(r=>s.jsxs("tr",{className:"bg-white shadow-xl border-b border-gray-200",children:[s.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:"#"}),s.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:r!=null&&r.applicant_name?r==null?void 0:r.applicant_name:"N/A"}),s.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:r!=null&&r.guardian_name?r==null?void 0:r.guardian_name:"N/A"}),s.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:r!=null&&r.mobile_no?r==null?void 0:r.mobile_no:"N/A"}),s.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:r!=null&&r.email?r==null?void 0:r.email:"N/A"})]}))})})]})})]})]})})}),s.jsx("div",{className:"w-full h-10"})]})}export{E as default};