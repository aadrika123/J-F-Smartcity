const e=(t,s,n=null)=>t.length>n?s:t===""||/^\d*\.?\d*$/.test(t)?t:s,o=(t,s,n=null)=>t.length>n?s:t===""||/^[0-9\b]+$/.test(t)?t:s,i=(t,s,n=null)=>t.length>n?s:t===""||/^[a-zA-Z\s]*$/.test(t)?t:s,f=(t,s,n=null)=>t.length>n?s:t===""||/^[\a-zA-Z0-9!]*$/.test(t)?t:s,h=(t,s,n=null)=>t.length>n?s:t===""||/^[\a-zA-Z0-9@.!]*$/.test(t)?t:s;export{i as a,o as b,h as c,f as d,e};