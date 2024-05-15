import{j as e}from"./mui-8e804a04.js";import{f as i,r as l}from"./router-87042356.js";import{P as m}from"./PropertyApiList-c6751f6d.js";import{W as f}from"./WaterApiList-a366dd40.js";import{T as h}from"./TopTabs-a2443f05.js";import{a4 as b,A as y}from"./index-20410c83.js";import"./react-09dd1212.js";import"./index.esm-c151f2f7.js";import"./reactIcons-6a3b6da1.js";import"./Styles-a2fa8249.js";import"./axios-97164839.js";import"./redux-4db06ad6.js";import"./i18next-e99b4042.js";function E(){const{id:a}=i(),{api_PropTransactionById:c}=m(),{header:d}=f(),[o,r]=l.useState(!1),[s,p]=l.useState();console.log("SAF id issssssssss",a);const n=()=>{r(!0),y.post(c,{safId:a},d).then(function(t){var x;console.log("saf transcation list----- ",t),p((x=t==null?void 0:t.data)==null?void 0:x.data),r(!1)}).catch(function(t){console.log(t),r(!1)})};return l.useEffect(()=>{n()},[]),e.jsxs(e.Fragment,{children:[o&&e.jsx("div",{className:"w-full z-10 absolute mx-auto text-center flex justify-center items-center top-1/2",children:e.jsx("span",{className:"inline",children:e.jsx(b,{visible:!0,height:"120",width:"120",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper",colors:["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"]})})}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-12  lg:grid-cols-12 container mx-auto",children:e.jsxs("div",{className:"col-span-12 bg-gray-50 p-4",children:[e.jsx("div",{className:"flex flex-row justify-center",children:e.jsx("h1",{className:"px-2 font-semibold text-center text-gray-600 font-serif py-2 xl md:text-3xl mt-2",children:"PAYMENT DETAILS"})}),e.jsx(h,{safId:a,safNo:"",active:"payment",application:!1}),e.jsxs("table",{className:"min-w-full leading-normal mt-10",children:[e.jsx("thead",{className:"font-bold text-left text-sm bg-green-50 text-gray-600",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"#"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Status"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Saf No."}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"From finanacial year"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Upto finanacial year"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"From Quarter"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Upto Quarter"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Transcation No."}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Transcation Date"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Amount"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Penalty Amount"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Discount Amount"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Payable Amount"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Demand Amount"})]})}),e.jsx("tbody",{className:"text-sm",children:e.jsx(e.Fragment,{children:(s==null?void 0:s.length)!=0&&(s==null?void 0:s.map(t=>e.jsxs("tr",{className:"bg-white shadow-lg border-b border-gray-200",children:[e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:"1"}),e.jsx("td",{className:`px-2 py-2 text-sm text-left font-semibold ${t.verify_status==1?"text-green-500":"text-red-400"}`,children:t.verify_status==1?"Paid":"Failed"}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:t.saf_no}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:t.from_fyear}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:t.upto_fyear}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:t.from_qtr}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:t.upto_qtr}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:t.tran_no}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:t.tran_date}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:t.amount}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:t.penalty_amt}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:t.discount_amt}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:t.payable_amt}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:t.demand_amt})]})))})})]}),(s==null?void 0:s.length)==0&&e.jsx("div",{className:"text-red-500 w-full text-center py-4 font-semibold text-xl",children:"No Payment Found"})]})})]})}export{E as default};