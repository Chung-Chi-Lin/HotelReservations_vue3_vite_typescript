function s(e,t,a){const o=r(e).getTime(),c=r(t).getTime(),i=Math.abs(c-o);let n=Math.ceil(i/(1e3*60*60*24));return isNaN(n)&&(n=0),a?n:`${n} 晚`}function m(e,t="月日星期"){const a=r(e).toLocaleDateString("zh-TW",{month:"short",day:"numeric",year:"numeric",weekday:"long"});return t==="年月日"?a.replace(/(\d{1,4})年(\d{1,2})月(\d{1,2})日 (.+)/,"$1 年 $2 月 $3 日"):a.replace(/(\d{1,4})年(\d{1,2})月(\d{1,2})日 (.+)/,"$2 月 $3 日$4")}function f(e){return r(e).toLocaleDateString("zh-TW",{year:"numeric",month:"2-digit",day:"2-digit"})}const r=e=>new Date(e);export{s as a,f as d,r as n,m as z};