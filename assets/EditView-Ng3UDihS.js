import{d as S,A as D,L as M,e as g,C,r as $,o as i,c as l,a as s,t as n,y as u,w as b,h as p,k as f,s as E,z as N,b as B}from"./index-IcGHCGVg.js";import{U as L}from"./FormSchema-aaopRgzd.js";import{_ as V,a as A,z as F}from"./UserInfoFrom.vue_vue_type_script_setup_true_lang-RPC7dPzI.js";import{z as O}from"./HandleDate-7JCqgiss.js";import"./AxiosBase-6-36cT8S.js";const H={class:"row gap-6 gap-lg-8 g-0"},J={class:"col-lg-5"},T={class:"card rounded-3 border-0"},U={class:"card-body p-6 p-lg-8 d-grid gap-6 gap-lg-8"},j={class:"card-title mb-0"},q=["disabled"],G={key:1,class:"d-grid gap-4 gap-lg-6 list-unstyled mb-0"},K={class:"d-grid gap-2"},Q=s("span",{class:"d-block"},"電子信箱",-1),R={class:"text-title text-neutral"},W={class:"d-flex gap-4"},X={class:"d-grid gap-2 flex-grow-1"},Y=s("span",{class:"d-block"},"密碼",-1),Z={class:"text-title text-neutral d-flex gap-2 py-2"},I={class:"col-lg"},ss={class:"card rounded-3 border-0"},ts={class:"card-body p-6 p-lg-8 d-grid gap-6 gap-lg-8"},es=s("h5",{class:"card-title mb-0"},"基本資料",-1),as=["disabled"],os={class:"d-grid gap-4 gap-lg-6 list-unstyled mb-0"},ds={class:"d-grid gap-2"},is=s("span",{class:"d-block"},"姓名",-1),ns={class:"text-title text-neutral"},cs={class:"d-grid gap-2"},ls=s("span",{class:"d-block"},"手機號碼",-1),rs={class:"text-title text-neutral"},_s={class:"d-grid gap-2"},gs=s("span",{class:"d-block"},"生日",-1),ps={key:0,class:"text-title text-neutral"},hs={class:"d-grid gap-2"},ms=s("span",{class:"d-block"},"地址",-1),us={class:"text-title text-neutral"},xs=S({__name:"EditView",setup(bs){const{userInfo:t}=D(),{changePassword:y,editMyinfo:w}=L(),{hideLoading:_}=M(),h=(t==null?void 0:t._id)||"";_();const c=g({changePwd:!1,editMyinfo:!1});function r(e){c.value[e]=!c.value[e]}const v=g({userId:h,oldPassword:"",newPassword:"",confirmPassword:""});async function k(e){delete e.confirmPassword,await y(e)&&r("changePwd"),_()}const o=g({name:(t==null?void 0:t.name)||"",phone:(t==null?void 0:t.phone)||"",birthday:(t==null?void 0:t.birthday)||"",address:{zipcode:(t==null?void 0:t.address.zipcode)||800,detail:(t==null?void 0:t.address.detail)||""}}),x=C(()=>{const e=F.find(a=>a.zipcode===o.value.address.zipcode);return`${e==null?void 0:e.county}${e==null?void 0:e.city}${o.value.address.detail}`});async function P(e){await w({...e,userId:h})&&(o.value=JSON.parse(JSON.stringify(e)),r("editMyinfo")),_()}return(e,a)=>{var m;const z=$("font-awesome-icon");return i(),l("div",H,[s("div",J,[s("div",T,[s("div",U,[s("h5",j,"修改"+n(c.value.changePwd?"帳號資料":"密碼"),1),c.value.changePwd?(i(),u(V,{key:0,from:"changePassword",formDate:v.value,onHandleSubmit:k},{default:b(d=>[s("button",{class:"btn btn-primary",disabled:d.disabled},"儲存設定",8,q)]),_:1},8,["formDate"])):(i(),l("ul",G,[s("li",K,[Q,s("strong",R,n((m=p(t))==null?void 0:m.email),1)]),s("li",W,[s("section",X,[Y,s("strong",Z,[(i(),l(f,null,E(10,d=>B(z,{icon:"fa-solid fa-circle","fixed-width":"",key:d,size:"sm",style:{"font-size":"0.5rem"}})),64))])]),s("button",{class:"btn btn-link",onClick:a[0]||(a[0]=d=>r("changePwd"))},"重設")])]))])])]),s("div",I,[s("div",ss,[s("div",ts,[es,c.value.editMyinfo?(i(),u(A,{key:0,from:"editMyinfo",formDate:o.value,onHandleSubmit:P},{default:b(d=>[s("button",{class:"btn btn-primary",disabled:d.disabled},"儲存設定",8,as)]),_:1},8,["formDate"])):(i(),l(f,{key:1},[s("ul",os,[s("li",ds,[is,s("strong",ns,n(o.value.name),1)]),s("li",cs,[ls,s("strong",rs,n(o.value.phone),1)]),s("li",_s,[gs,p(t)?(i(),l("strong",ps,n(p(O)(o.value.birthday,"年月日")),1)):N("",!0)]),s("li",hs,[ms,s("strong",us,n(x.value),1)])]),s("section",null,[s("button",{type:"button",class:"btn btn-outline-primary",onClick:a[1]||(a[1]=d=>r("editMyinfo"))},"編輯")])],64))])])])])}}});export{xs as default};
