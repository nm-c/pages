(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{1001:function(e,t,r){Promise.resolve().then(r.bind(r,5880))},5880:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return Y}});var a,s,n=r(7437),l=r(2265),i=r(2333),o=r(7583),c=r(4769),d=r(4676),u=r(504),m=r(7922);let x={min:0,max:20},p=l.createContext({}),f=e=>Number(Math.expm1(e).toFixed(1)),h=e=>Math.log1p(e),y=e=>({value:h(e),label:e.toString()}),g=e=>({min:f(e[0]),max:f(e[1])}),v=e=>[h(e.min),h(e.max)];var j=()=>{let{filterDuration:e,setFilterDuration:t}=(0,l.useContext)(p);if(!e||!t)return;let r=[0,.5,1,2,3,5,10,20,30,50].map(e=>y(e));return(0,n.jsx)("div",{className:"hidden w-fit border border-gray-300 px-7 py-2 rounded-xl divide-y divide-gray-200",children:(0,n.jsxs)("dl",{className:"w-full flex flex-col gap-3 py-5",children:[(0,n.jsxs)("dt",{className:"text-gray-800 text-sm",children:[(0,n.jsx)(u.G,{icon:m.G_j,className:"inline-block w-3 h-3 mr-1 text-gray-800"}),"듀레이션: ",e.min," ~ ",e.max]}),(0,n.jsx)("dd",{className:"p-2",children:(0,n.jsx)(d.ZP,{value:v(e),step:h(.1)/5,min:h(x.min),max:h(x.max),marks:r,scale:f,onChange:(e,r)=>{"number"==typeof r||t(g(r))},valueLabelDisplay:"auto",size:"small"})}),(0,n.jsxs)("dd",{className:"flex flex-row gap-4 text-gray-800 text-sm",children:[(0,n.jsx)("button",{onClick:()=>t(x),className:"px-2 py-1 rounded-md bg-gray-200 hover:bg-gray-300",children:"전체"}),[{min:0,max:1},{min:1,max:3},{min:3,max:20}].map(e=>(0,n.jsxs)("button",{onClick:()=>t(e),className:"px-2 py-1 rounded-md bg-gray-200 hover:bg-gray-300",children:[e.min," ~ ",e.max]},JSON.stringify(e)))]})]})})};function b(e){return t=>{if(t)return Number(t).toLocaleString(void 0,{minimumFractionDigits:e,maximumFractionDigits:e})}}function N(e){if(e)return Math.round(Number(e)/1e8).toString()}function _(e){let{value:t,className:r,children:a}=e;return(0,n.jsx)("td",{className:(0,c.m6)("relative px-2 py-1 whitespace-nowrap w-max text-right text-sm text-gray-800",r),children:t&&a})}(a=s||(s={})).RealTime="realtime",a.OnTime="ontime",a.Outdated="outdated";let w=e=>{let{display:t,postfix:r,...a}=e;return(0,n.jsx)(_,{...a,children:(0,n.jsxs)("span",{children:[(0,n.jsx)("span",{children:t}),r&&(0,n.jsx)("span",{className:"text-xs",children:r})]})})},k=e=>{let t,{freshness:r,display:a,postfix:l,date:i,...o}=e;switch(r){case s.RealTime:t="기준일: 실시간(".concat(i,")");break;case s.OnTime:t="기준일: 전 영업일(".concat(i,")");break;case s.Outdated:t="기준일: 지연(".concat(i,")");break;default:t="기준일: ".concat(i)}return(0,n.jsx)(_,{...o,children:(0,n.jsxs)("span",{"data-freshness":r,className:"group data-[freshness=outdated]:line-through data-[freshness=outdated]:text-gray-400  data-[freshness=outdated]:hover:text-gray-600",children:[(0,n.jsx)("span",{children:a}),l&&(0,n.jsx)("span",{className:"text-xs",children:l}),(0,n.jsx)("span",{children:(0,n.jsx)("div",{className:"group-data-[freshness=realtime]:text-blue-700 group-data-[freshness=outdated]:text-red-600 absolute top-0 right-0 translate-x-full -translate-y-full text-xs bg-white px-2 py-1 rounded-md shadow-md w-max select-none invisible group-hover:visible",children:t})})]})})},S=e=>{let{display:t,...r}=e;return(0,n.jsx)(w,{...r,display:(0,n.jsx)("a",{href:t,target:"_blank",rel:"noopener noreferrer",children:"Link"})})},C=e=>{let{...t}=e;switch(t.column.selector){case"name":return(0,n.jsx)(w,{...t,className:(0,c.m6)("text-left tracking-tight",t.className)});case"credit_rating":return(0,n.jsx)(w,{...t,className:(0,c.m6)("text-left",t.className)});case"ytm":return(0,n.jsx)(k,{...t,display:b(2)(t.display),postfix:"%"});case"duration":case"nav":return(0,n.jsx)(k,{...t,display:b(2)(t.display)});case"marketcap":return(0,n.jsx)(w,{...t,display:(function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return e=>t.reduce((e,t)=>t(e),e)})(N,b(0))(t.display),postfix:"억"});case"price":return(0,n.jsx)(k,{...t,display:b(0)(t.display)});case"provider_info_url":case"general_info_url":return(0,n.jsx)(S,{...t});default:return(0,n.jsx)(w,{...t})}};function T(e,t,r){let a=e.find(e=>e.selector===t);a&&(a.className=r)}var O=e=>{let{columns:t,rows:r,sort:a,onSortToggle:s}=e;return T(t,"name","text-left"),T(t,"credit_rating","text-left"),(0,n.jsxs)("div",{className:"min-w-max min-h-sm-screen bg-gray-50",children:[(0,n.jsxs)("div",{className:"w-full h-44 flex flex-col gap-3 justify-center items-center bg-gray-900",children:[(0,n.jsx)("h1",{className:"text-6xl font-bold tracking-wide text-gray-50",children:"YTM Scanner"}),(0,n.jsx)("h2",{className:"text-xl font-medium tracking-wide text-gray-50",children:"YTM 스캐너 - 만기매칭형 채권 ETF YTM(만기수익률) 지금 비교해보세요!"})]}),(0,n.jsxs)("div",{className:"mx-auto my-10 px-5 w-full flex flex-col gap-5",children:[(0,n.jsx)(j,{}),(0,n.jsxs)("table",{className:"table-auto divide-y-2 divide-gray-200",children:[(0,n.jsxs)("caption",{className:"caption-top mb-2 ml-2 text-left font-coding text-xs text-gray-800",children:["총 ",r.length," 종목"]}),(0,n.jsx)("thead",{children:(0,n.jsx)("tr",{children:t.map((e,t)=>(0,n.jsxs)("th",{"data-sort":a.selector===e.selector,"data-asc":a.selector!==e.selector||a.asc,"data-column":e.selector,className:(0,c.m6)("px-2 py-1 w-max whitespace-nowrap text-right text-xs font-medium text-gray-600 uppercase tracking-wider select-none group hover:text-gray-900 hover:font-extrabold data-[sort=true]:text-gray-800 data-[sort=true]:font-extrabold",e.className),onClick:()=>s(e.selector),children:[e.display,(0,n.jsx)(u.G,{icon:a.selector===e.selector?a.asc?m.foy:m.u9C:m.CmM,className:"inline-block w-3 h-3 pointer-events-none text-gray-500 group-data-[sort=true]:text-gray-800 group-hover:text-gray-900"})]},t))})}),(0,n.jsx)("tbody",{className:"divide-y divide-gray-200 font-coding",children:r.map((e,r)=>(0,n.jsx)("tr",{children:t.map((t,a)=>(0,n.jsx)(C,{column:t,row:e,...e[t.selector]},"".concat(r,"-").concat(a)))},r))})]}),(0,n.jsxs)("div",{className:"mt-10 ml-2 flex flex-col gap-5 text-gray-500 text-sm",children:[(0,n.jsxs)("div",{className:"flex flex-row gap-5",children:[(0,n.jsx)("p",{children:"문의: carrotade.co@gmail.com"}),(0,n.jsx)("p",{children:(0,n.jsx)("a",{href:"../ytmscanner1/",children:"이전 버전"})})]}),(0,n.jsxs)("div",{className:"text-xs text-gray-400",children:[(0,n.jsx)("p",{children:"YTM Scanner에서 제공하는 정보들은 참고용이며 그 정확성이나 완전성을 보장하지 않습니다."}),(0,n.jsx)("p",{children:"투자에 대한 모든 책임은 본인에게 있습니다."}),(0,n.jsx)("p",{children:"Copyright Carrotade All Rights Reserved."})]})]})]})]})};function M(e,t){return e.find(e=>e[t])}function A(e){return e}function E(e){let{base:t,attr:r,selector:a,value_converter:n=A,dest_attr:l=r}=e;if(!(null==t?void 0:t.dynamic))return;let i=a(t.dynamic,r);if(!(null==i?void 0:i[r]))return;let c=function(e){let t=o.ou.fromISO(e,{zone:"Asia/Seoul"}),r=t.toFormat("L월 d일"),a=s.Outdated;if(t.diffNow("days").days>-1)a=s.RealTime;else{let e;t.diff((7===(e=o.ou.local({zone:"Asia/Seoul"}).minus({days:1})).weekday?e=e.minus({days:2}):6===e.weekday&&(e=e.minus({days:1})),e),"days").days>-1&&(a=s.OnTime)}return{date:r,freshness:a}}(i.date);return{[l]:{...c,display:i[r],value:n(i[r])}}}function F(e){let{base:t,attr:r,value_converter:a=A,dest_attr:s=r}=e;if(!t)return;let n=t[r];if(n)return{[s]:{display:n,value:a(n)}}}function P(e,t){return"number"==typeof e&&"number"==typeof t?e-t:e.toString().localeCompare(t.toString())}let R=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return fetch(...t).then(e=>e.json())};var Y=()=>{let{data:e,error:t,isLoading:r}=(0,i.ZP)("https://carrotade.com/ytmscanner/generated/etf_details.json",R),[a,s]=(0,l.useState)([]),[o,c]=(0,l.useState)({selector:"marketcap",asc:!1}),[d,u]=(0,l.useState)(x);return(0,l.useEffect)(()=>{if(!e)return;let t=e.filter(e=>e.listed).map(e=>({name:{},...F({base:e,attr:"name"}),...E({base:e.provider,attr:"ytm",selector:M,value_converter:Number}),...E({base:e.provider,attr:"duration",selector:M,value_converter:Number}),...E({base:e.general,attr:"marketcap",selector:M,value_converter:Number}),...E({base:e.provider,attr:"price",selector:M,value_converter:Number}),...E({base:e.provider,attr:"nav",selector:M,value_converter:Number}),...F({base:e.provider,attr:"info_url",dest_attr:"provider_info_url"}),...F({base:e.general,attr:"info_url",dest_attr:"general_info_url"}),...F({base:e.basic,attr:"maturity"}),...F({base:e.basic,attr:"kind"}),...F({base:e.basic,attr:"credit_rating"})}));s([...t=t.filter(e=>{var t;let r=null===(t=e.duration)||void 0===t?void 0:t.value;return!r||"number"!=typeof r||r>=d.min&&r<=d.max})].sort((e,t)=>{var r,a;let s=null===(r=e[o.selector])||void 0===r?void 0:r.value,n=null===(a=t[o.selector])||void 0===a?void 0:a.value;return(o.asc?function(e,t){return void 0===e&&void 0===t?0:void 0===e?1:void 0===t?-1:P(e,t)}:function(e,t){return void 0===e&&void 0===t?0:void 0===e?1:void 0===t?-1:-P(e,t)})(s,n)}))},[e,d,o]),(0,n.jsx)(p.Provider,{value:{filterDuration:d,setFilterDuration:u},children:(0,n.jsx)(O,{columns:[{display:"Name",selector:"name"},{display:"YTM",selector:"ytm"},{display:"Nav",selector:"nav"},{display:"Price",selector:"price"},{display:"Dur",selector:"duration"},{display:"시가총액",selector:"marketcap"},{display:"만기",selector:"maturity"},{display:"운용사",selector:"provider_info_url"}],rows:a,sort:o,onSortToggle:e=>{c(t=>({selector:e,asc:t.selector===e&&!t.asc}))}})})}}},function(e){e.O(0,[676,854,971,472,744],function(){return e(e.s=1001)}),_N_E=e.O()}]);