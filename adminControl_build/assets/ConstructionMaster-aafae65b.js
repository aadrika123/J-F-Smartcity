import{j as s}from"./index-f2c432e6.js";import{b as r}from"./router-b87f8164.js";import{A as l}from"./ApiList-1e1c926e.js";import{T as A}from"./index-d305d811.js";import"./react-5403e0b7.js";import"./reactQuery-8705a202.js";import"./reactQueryDevtools-9a5be7d4.js";import"./ApiHeader-b1864890.js";import"./tailwind-64fa9e48.js";import"./axios-096c69c8.js";function L(){var i,o;const[t,n]=r.useState({}),[e,p]=r.useState([]),{api_getConstructionApiList:a,api_PostConstructionApi:u,api_getConstructionApiById:c,api_updateConstructionApi:d,api_deleteConstructionApi:m}=l();return s.jsx("div",{children:s.jsx(A,{getIdByKey:"id",title:"Construction Master ",setEditData:n,getById:c,createApi:u,deleteApi:m,editApi:d,formData:[{value:((i=t==null?void 0:t.data)==null?void 0:i.id)||"",name:"id"},{value:!1,name:"isSuspended"},{value:((o=t==null?void 0:t.data)==null?void 0:o.construction_type)||"",isRequired:!0,type:"text",label:"Construction Type",name:"constructionType",isLabel:!0}],listApi:a,setListData:p,HEAD:["Construction Type ","Status","Edit","Delete"],fields:["construction_type"],data:e==null?void 0:e.data})})}export{L as default};