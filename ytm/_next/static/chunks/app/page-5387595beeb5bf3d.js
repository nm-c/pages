(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{2505:function(e,t,r){Promise.resolve().then(r.bind(r,4105))},4105:function(e,t,r){"use strict";r.r(t),r.d(t,{FilterDurationContext:function(){return P},default:function(){return D}});var a,s,n=r(7437),l=r(2265),i=r(504),o=r(7922),d=r(4769),c=r(4676);let u=e=>Number(Math.expm1(e).toFixed(1)),m=e=>Math.log1p(e),x=e=>({value:m(e),label:e.toString()}),f=e=>({min:u(e[0]),max:u(e[1])}),p=e=>[m(e.min),m(e.max)];var h=()=>{let{filterDuration:e,setFilterDuration:t}=(0,l.useContext)(P);if(!e||!t)return;let r=[0,.5,1,2,3,5,10,20,30,50].map(e=>x(e));return(0,n.jsx)("div",{className:"w-fit border border-gray-300 px-5 py-2 rounded-xl",children:(0,n.jsxs)("dl",{className:"w-fit flex flex-col gap-3",children:[(0,n.jsxs)("dt",{className:"text-gray-800",children:["듀레이션: ",e.min," ~ ",e.max]}),(0,n.jsx)("dd",{className:"w-[20rem] pl-2",children:(0,n.jsx)(c.ZP,{value:p(e),step:m(.1)/5,min:m(0),max:m(50),marks:r,scale:u,onChange:(e,r)=>{"number"==typeof r||t(f(r))},valueLabelDisplay:"auto"})})]})})};function v(e){return t=>{if(t)return Number(t).toLocaleString(void 0,{minimumFractionDigits:e,maximumFractionDigits:e})}}function y(e){if(e)return Math.round(Number(e)/1e8).toString()}function g(e){let{value:t,className:r,children:a}=e;return(0,n.jsx)("td",{className:(0,d.m6)("px-2 py-1 whitespace-nowrap text-right text-sm text-gray-800",r),children:t&&a})}(a=s||(s={})).RealTime="realtime",a.OnTime="ontime",a.Outdated="outdated";let j=e=>{let{display:t,postfix:r,...a}=e;return(0,n.jsx)(g,{...a,children:(0,n.jsxs)("span",{className:"group data-[freshness=outdated]:line-through data-[freshness=outdated]:text-gray-400  data-[freshness=outdated]:hover:text-gray-600",children:[(0,n.jsx)("span",{children:t}),r&&(0,n.jsx)("span",{className:"text-xs",children:r})]})})},b=e=>{let{freshness:t}=e;switch(t){case"realtime":return(0,n.jsx)(i.G,{icon:o.QzV,className:"inline-block mr-1 w-3 h-3 text-amber-200 group-hover:text-amber-300"});case"ontime":default:return(0,n.jsx)(n.Fragment,{});case"outdated":return(0,n.jsx)(i.G,{icon:o.ik8,className:"inline-block mr-1 w-3 h-3 text-red-300 group-hover:text-red-500"})}},N=e=>{let{freshness:t,display:r,postfix:a,date:s,...l}=e;return(0,n.jsx)(g,{...l,children:(0,n.jsxs)("span",{"data-freshness":t,className:"group data-[freshness=outdated]:line-through data-[freshness=outdated]:text-gray-400  data-[freshness=outdated]:hover:text-gray-600",children:[(0,n.jsx)(b,{freshness:t}),(0,n.jsx)("span",{children:r}),a&&(0,n.jsx)("span",{className:"text-xs",children:a}),(0,n.jsx)("span",{className:"relative",children:(0,n.jsx)("div",{className:"group-data-[freshness=outdated]:text-red-600 absolute text-xs bg-white px-2 py-1 rounded-md shadow-md w-max -translate-y-11 translate-x-10 select-none invisible group-hover:visible",children:s})})]})})},_=e=>{let{display:t,...r}=e;return(0,n.jsx)(j,{...r,display:(0,n.jsx)("a",{href:t,target:"_blank",rel:"noopener noreferrer",children:"Link"})})},w=e=>{let{...t}=e;switch(t.column.selector){case"name":return(0,n.jsx)(j,{...t,className:(0,d.m6)(t.className,"text-left")});case"ytm":return(0,n.jsx)(N,{...t,display:v(2)(t.display),postfix:"%"});case"duration":case"nav":return(0,n.jsx)(N,{...t,display:v(2)(t.display)});case"marketcap":return(0,n.jsx)(j,{...t,display:(function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return e=>t.reduce((e,t)=>t(e),e)})(y,v(0))(t.display),postfix:"억"});case"price":return(0,n.jsx)(N,{...t,display:v(0)(t.display)});case"provider_info_url":case"general_info_url":return(0,n.jsx)(_,{...t});default:return(0,n.jsx)(j,{...t})}};var k=e=>{let{columns:t,rows:r,sort:a,onSortToggle:s}=e;return(0,n.jsxs)("div",{className:"w-full min-h-screen bg-gray-50",children:[(0,n.jsx)("div",{className:"w-full h-32 flex flex-col justify-center items-center bg-gray-900",children:(0,n.jsx)("h1",{className:"text-6xl font-bold tracking-wide text-gray-50",children:"YTM Scanner"})}),(0,n.jsxs)("div",{className:"mx-auto mt-10 px-5 w-full flex flex-col gap-5",children:[(0,n.jsx)(h,{}),(0,n.jsxs)("table",{className:"table-fix w-full divide-y-2 divide-gray-200",children:[(0,n.jsxs)("caption",{className:"caption-top text-left mb-2 text-sm text-gray-800",children:["총 ",r.length," 종목"]}),(0,n.jsx)("thead",{children:(0,n.jsx)("tr",{children:t.map((e,t)=>(0,n.jsxs)("th",{"data-sort":a.selector===e.selector,className:(0,d.m6)("px-2 py-1 text-right text-xs font-medium text-gray-600 uppercase tracking-wider select-none group hover:text-gray-900 hover:font-extrabold data-[sort=true]:text-gray-800 data-[sort=true]:font-extrabold","name"===e.selector&&"text-left"),onClick:()=>s(e.selector),children:[e.display,(0,n.jsx)(i.G,{icon:a.selector===e.selector?a.asc?o.foy:o.u9C:o.CmM,className:"inline-block w-3 h-3 ml-0 text-gray-500 group-data-[sort=true]:text-gray-800 group-hover:text-gray-900"})]},t))})}),(0,n.jsx)("tbody",{className:"divide-y divide-gray-200",children:r.map((e,r)=>(0,n.jsx)("tr",{children:t.map((t,a)=>(0,n.jsx)(w,{column:t,row:e,...e[t.selector]},"".concat(r,"-").concat(a)))},r))})]})]})]})},S=r(2333),C=r(7583);function O(e,t){return e.find(e=>e[t])}function T(e){return e}function F(e){let{base:t,attr:r,selector:a,value_converter:n=T,dest_attr:l=r}=e;if(!(null==t?void 0:t.dynamic))return;let i=a(t.dynamic,r);if(!(null==i?void 0:i[r]))return;let o=function(e){let t=C.ou.fromISO(e,{zone:"Asia/Seoul"}),r=t.toFormat("L월 d일"),a=s.Outdated;if(t.diffNow("days").days>-1)a=s.RealTime;else{let e;t.diff((7===(e=C.ou.local({zone:"Asia/Seoul"}).minus({days:1})).weekday?e=e.minus({days:2}):6===e.weekday&&(e=e.minus({days:1})),e),"days").days>-1&&(a=s.OnTime)}return{date:r,freshness:a}}(i.date);return{[l]:{...o,display:i[r],value:n(i[r])}}}function M(e){let{base:t,attr:r,value_converter:a=T,dest_attr:s=r}=e;if(!t)return;let n=t[r];if(n)return{[s]:{display:n,value:a(n)}}}let P=l.createContext({}),A=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return fetch(...t).then(e=>e.json())};var D=()=>{let{data:e,error:t,isLoading:r}=(0,S.ZP)("./published/data.json",A),[a,s]=(0,l.useState)([]),[i,o]=(0,l.useState)({selector:"marketcap",asc:!1}),[d,c]=(0,l.useState)({min:0,max:50});return(0,l.useEffect)(()=>{if(!e)return;let t=e.map(e=>({name:{display:e.name,value:e.name},...F({base:e.provider,attr:"ytm",selector:O,value_converter:Number}),...F({base:e.provider,attr:"duration",selector:O,value_converter:Number}),...F({base:e.general,attr:"marketcap",selector:O,value_converter:Number}),...F({base:e.provider,attr:"price",selector:O,value_converter:Number}),...F({base:e.provider,attr:"nav",selector:O,value_converter:Number}),...M({base:e.provider,attr:"info_url",dest_attr:"provider_info_url"}),...M({base:e.general,attr:"info_url",dest_attr:"general_info_url"})})),r=t.filter(e=>{var t;let r=null===(t=e.duration)||void 0===t?void 0:t.value;return!r||"number"!=typeof r||r>=d.min&&r<=d.max});s([...r].sort((e,t)=>{var r,a;let s=null===(r=e[i.selector])||void 0===r?void 0:r.value,n=null===(a=t[i.selector])||void 0===a?void 0:a.value;if(s&&n){if(s<n)return i.asc?-1:1;if(s>n)return i.asc?1:-1}return 0}))},[e,d.max,d.min,i]),(0,n.jsx)(P.Provider,{value:{filterDuration:d,setFilterDuration:c},children:(0,n.jsx)(k,{columns:[{display:"Name",selector:"name"},{display:"YTM",selector:"ytm"},{display:"Nav",selector:"nav"},{display:"Price",selector:"price"},{display:"듀레이션",selector:"duration"},{display:"시가총액",selector:"marketcap"},{display:"운용사",selector:"provider_info_url"},{display:"네이버금융",selector:"general_info_url"}],rows:a,sort:i,onSortToggle:e=>{o(t=>({selector:e,asc:t.selector===e&&!t.asc}))}})})}}},function(e){e.O(0,[676,854,971,472,744],function(){return e(e.s=2505)}),_N_E=e.O()}]);