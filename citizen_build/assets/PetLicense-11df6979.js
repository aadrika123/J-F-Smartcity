import{j as s}from"./mui-8e804a04.js";import{r as t,f as T}from"./router-87042356.js";import{a as Y}from"./axios-97164839.js";import{r as _}from"./index-20410c83.js";import{l as I}from"./index-51d8014a.js";import{h as n}from"./moment-fbc5633a.js";import{P as k}from"./PetRegAPIList-8c3060c2.js";import"./react-09dd1212.js";import"./reactIcons-6a3b6da1.js";import"./redux-4db06ad6.js";import"./i18next-e99b4042.js";const $=()=>{var m,h,x,p,g;const[e,f]=t.useState(),[E,a]=t.useState(!1),{id:u}=T(),r=t.useRef(),y=I.useReactToPrint({content:()=>r.current}),{api_petCertificate:v,header:w}=k(),N=()=>{console.log("called........"),a(!0),Y.post(v,{registrationId:u},w).then(i=>{var b,j;(b=i==null?void 0:i.data)!=null&&b.status?(f((j=i==null?void 0:i.data)==null?void 0:j.data),a(!1),console.log("Data Found",i)):(a(!1),console.log("No Data Found"))}).catch(i=>{a(!1),console.log("Exception while getting receipt bill",i)})};t.useEffect(()=>{N()},[]),console.log("data",e);const R=e==null?void 0:e.dob,o=n(),l=n(R,"YYYY-MM-DD"),c=o.diff(l,"years");l.add(c,"years");const d=o.diff(l,"months");l.add(d,"months");const A=o.diff(l,"days"),P=`${c} years, ${d} months, and ${A} days`;return s.jsx(s.Fragment,{children:s.jsxs("div",{className:"",children:[s.jsxs("div",{children:[s.jsx("div",{className:"md:px-0 flex-1 "}),s.jsx("div",{className:"md:px-0 flex-1 ",children:s.jsxs("button",{onClick:y,className:"float-right pl-4 pr-6 py-1 bg-sky-400 text-white font-medium text-xs leading-tight uppercase rounded  hover:bg-sky-500 hover: focus: focus:outline-none focus:ring-0  active: transition duration-150 ease-in-out",children:[s.jsx(_,{className:"inline text-lg"}),"print"]})})]}),s.jsx("div",{id:"printableArea",className:"w-full h-full flex justify-center items-center mx-auto mt-6 ",ref:r,children:s.jsx("div",{className:"",children:s.jsx("div",{className:"font-tahoma mt-5",children:s.jsxs("div",{className:"border-2 border-dashed mb-20 border-gray-600  bg-white p-4 w-[250mm] h-auto  md:mx-auto lg:mx-auto  container ",children:[s.jsxs("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12 relative",children:[s.jsx("div",{className:"",children:s.jsx("img",{src:(m=e==null?void 0:e.ulbDetails)==null?void 0:m.ulb_logo,className:"h-20 mx-auto"})}),s.jsx("div",{className:"",children:s.jsx("img",{src:(h=e==null?void 0:e.ulbDetails)==null?void 0:h.state_logo,alt:"",className:" w-[22rem] h-[22rem]  absolute z-10 bg-transparent opacity-20 mt-[10rem] ml-[28%]  rounded-full border bg-center"})})]}),s.jsxs("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12 p-1 ",children:[s.jsx("div",{className:"",children:s.jsx("h1",{className:"font-semibold text-2xl text-center ",children:(x=e==null?void 0:e.ulbDetails)==null?void 0:x.ulb_name})}),s.jsxs("div",{className:"space-y-2 mt-1",children:[s.jsx("h1",{className:"font-semibold text-1xl text-center text-gray-800 ",children:(p=e==null?void 0:e.ulbDetails)==null?void 0:p.address}),s.jsx("h1",{className:"font-semibold text-xs text-center text-gray-800 ",children:(g=e==null?void 0:e.ulbDetails)==null?void 0:g.email})]})]}),s.jsxs("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12 p-1 ",children:[s.jsx("div",{className:"mx-auto"}),s.jsx("h1",{className:"font-semibold text-center underline text-2xl mt-2",children:"Pet Certificate"})]}),s.jsxs("div",{class:"grid grid-cols-12 border border-gray-10 border-r border-l border-b rounded-lg shadow-lg ",children:[s.jsxs("div",{class:"grid col-span-6 p-4 ",children:[s.jsxs("div",{class:"mb-4",children:[s.jsx("span",{class:"font-semibold",children:" Application No:"}),s.jsx("span",{class:"text-gray-700 ml-2",children:e==null?void 0:e.application_no})]}),s.jsxs("div",{class:"mb-4",children:[s.jsx("span",{class:"font-semibold",children:"Type of Animal:"}),s.jsx("span",{class:"text-gray-700 ml-2",children:e==null?void 0:e.ref_pet_type})]}),s.jsxs("div",{class:"mb-4",children:[s.jsx("span",{class:"font-semibold",children:"Breed:"}),s.jsx("span",{class:"text-gray-700 ml-2",children:e==null?void 0:e.breed})]}),s.jsxs("div",{class:"mb-4",children:[s.jsx("span",{class:"font-semibold",children:"Gender of Pet:"}),s.jsx("span",{class:"text-gray-700 ml-2",children:e==null?void 0:e.ref_gender})]}),s.jsxs("div",{class:"mb-4",children:[s.jsx("span",{class:"font-semibold",children:"Issue Date:"}),s.jsx("span",{class:"text-gray-700 ml-2",children:e!=null&&e.issueDate?n(e.issueDate).format("DD-MM-YYYY"):"N/A"})]})]}),s.jsxs("div",{class:"grid col-span-6 p-4 ",children:[s.jsxs("div",{class:"mb-4",children:[s.jsx("span",{class:"font-semibold",children:"  Certificate No:"}),s.jsx("span",{class:"text-gray-700 ml-2",children:e==null?void 0:e.registration_id})]}),s.jsxs("div",{class:"mb-4",children:[s.jsx("span",{class:"font-semibold",children:"Date of Birth:"}),s.jsx("span",{class:"text-gray-700 ml-2",children:e!=null&&e.dob?n(e.dob).format("DD-MM-YYYY"):"N/A"})]}),s.jsxs("div",{class:"mb-4",children:[s.jsx("span",{class:"font-semibold",children:"Pet Name:"}),s.jsx("span",{class:"text-gray-700 ml-2",children:e==null?void 0:e.pet_name})]}),s.jsxs("div",{class:"mb-4",children:[s.jsx("span",{class:"font-semibold",children:"Age of Animal:"}),s.jsx("span",{class:"text-gray-700 ml-2",id:"animalAge",children:P})]}),s.jsxs("div",{class:"mb-4",children:[s.jsx("span",{class:"font-semibold",children:"Expired Date:"}),s.jsx("span",{class:"text-gray-700 ml-2",id:"animalAge",children:e!=null&&e.expiredDate?n(e.expiredDate).format("DD-MM-YYYY"):"N/A"})]})]})]}),s.jsx("div",{class:"grid grid-cols-12 border border-gray-10 border-r border-l border-b rounded-lg shadow-lg mt-3",children:s.jsxs("div",{class:"grid col-span-12 p-4 ",children:[s.jsxs("div",{class:"mb-4",children:[s.jsx("span",{class:"font-semibold",children:"Name of Owner of Pet:"}),s.jsx("span",{class:"text-gray-700 ml-2",children:e==null?void 0:e.applicant_name})]}),s.jsxs("div",{class:"mb-4",children:[s.jsx("span",{class:"font-semibold",children:"Address of Owner of Pet:"}),s.jsx("span",{class:"text-gray-700 ml-2",children:e==null?void 0:e.address})]}),s.jsxs("div",{class:"mb-4",children:[s.jsx("span",{class:"font-semibold",children:"Holding No of Property/Residence :"}),s.jsx("span",{class:"text-gray-700 ml-2",children:e==null?void 0:e.holding_no})]}),s.jsxs("div",{class:"mb-4",children:[s.jsx("span",{class:"font-semibold",children:"veterinary Doctor Registration No:"}),s.jsx("span",{class:"text-gray-700 ml-2",children:e==null?void 0:e.doctor_registration_no})]}),s.jsxs("div",{class:"mb-4",children:[s.jsx("span",{class:"font-semibold",children:"Name of veterinary doctor:"}),s.jsx("span",{class:"text-gray-700 ml-2",children:e==null?void 0:e.vet_doctor_name})]})]})}),s.jsxs("div",{class:"mt-4 p-4 border border-gray-300 rounded-lg bg-gray-100 ",children:[s.jsx("h3",{class:"text-lg font-semibold mb-1",children:"TERMS & CONDITIONS FOR REGISTRATION OF PET DOG"}),s.jsxs("ol",{class:"list-decimal pl-6 text-xs",children:[s.jsx("li",{class:"mb-4",children:"The owner of the pet shall get Pet dog Registration done & Pet Registration Number issued on an annual basis."}),s.jsx("li",{class:"mb-4",children:"The owner of the dog shall ensure that Pet Registration Number is on the neck collar of the Dog at all times & on demand produce the registration certificate to the authority."}),s.jsx("li",{class:"mb-4",children:"A valid Anti Rabies vaccination certificate by a registered Veterinary practitioner shall be the pre-requisite for Pet dog Registration."}),s.jsx("li",{class:"mb-4",children:"In case a vaccinated dog is bitten by a Rabies suspected dog during the validity period of registration, the owner of the dog will ensure its proper post-bite vaccination regimen failing which registration shall be cancelled."}),s.jsx("li",{class:"mb-4",children:"Validity of Registration of the pet shall be co-terminus with that of Anti Rabies Vaccination."}),s.jsx("li",{class:"mb-4 mt-3",children:"The owner shall indemnify ULB from all legal consequences arising due to violent acts of the pet viz: biting, injuring, and howling any person or other animals."}),s.jsx("li",{class:"mb-4",children:"The owner shall be responsible for timely Anti Rabies Vaccination and the good health of the pet dog."}),s.jsx("li",{class:"mb-4",children:"The owner of the pet shall ensure that his/her pet does not contribute in any way to the growth of the stray canine population."}),s.jsx("li",{class:"mb-4",children:"The owner shall not allow an aggressive dog to roam freely without a muzzle at any public place. Irresponsible ownership causing severe biting injury shall lead to cancellation of pet dog Registration. In such cases, the owner shall be responsible for proper compensation to the victim & shall bear all expenses likely to be incurred in Anti Rabies Serum and post bite Anti Rabies vaccination of the victim."}),s.jsx("li",{class:"mb-4",children:"The owner of the pet shall not allow his /her pet to defile public places and shall scoop the poop instant to clean up the spot each such negligence will attract a penalty of Rs.500/- from the ULB."}),s.jsx("li",{class:"mb-4",children:"The owner of the pet shall provide adequate food and shelter to pet dog and shall not cause any cruelty to it failing which SPCA provisions would be invoked."}),s.jsx("li",{class:"mb-4",children:"The Pet Dog Registration is nontransferable in nature. In case of change of ownership, new owner will apply for fresh Registration Certificate. Before applying, owner should take RC, ARV certificate details etc. from previous owner. For instance, if at the time of purchase of the Pet dog, the validity of Anti Rabies Vaccination is likely to expire after 2 months, the owner of the pet shall reapply for a fresh Registration after getting booster dose of Anti Rabies Vaccination."}),s.jsx("li",{class:"mb-4",children:"The owner shall not abandon his/her pet dog for straying at public places."}),s.jsx("li",{class:"mb-4",children:"The owner of the pet shall strictly abide by the above-mentioned Terms & conditions of the Pet Dog Registration. Any violation of the Terms & conditions in part or as a whole shall lead to cancellation of the Registration."}),s.jsx("li",{class:"mb-4",children:"Pet Registration - One-year duration - Fee: 100 Rs."}),s.jsx("li",{class:"mb-4",children:"Pet renewal registration needs to be done annually."}),s.jsx("li",{class:"mb-4",children:"Vaccination certificates should be updated upadted "})]})]})]})})})})]})})};export{$ as default};