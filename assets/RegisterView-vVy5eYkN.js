import{d as B,L as C,e as i,r as h,o,c as n,a as e,n as m,k as p,s as F,q as b,x as w,b as _,w as u,l as f,y as N,t as y,z}from"./index-IcGHCGVg.js";import{V as R}from"./VerifyStore-MzkkiuHA.js";import{U as H}from"./FormSchema-aaopRgzd.js";import{_ as P,a as U}from"./UserInfoFrom.vue_vue_type_script_setup_true_lang-RPC7dPzI.js";import"./AxiosBase-6-36cT8S.js";import"./HandleDate-7JCqgiss.js";const $={class:"d-grid gap-4"},q={class:"d-grid gap-2"},T=e("h1",{class:"text-white"},"立即註冊",-1),j={class:"d-flex align-items-center gap-1 py-4"},A={class:"step-number"},G={class:"step-title"},I={key:0,class:"step-line"},J={class:"d-grid gap-4"},K=["disabled"],M=["disabled"],O={class:"text-white d-flex gap-2"},se=B({__name:"RegisterView",setup(Q){const{hideLoading:k}=C(),x=i(["輸入信箱及密碼","填寫基本資料"]),t=i(1),r=i({email:"",password:"",confirmPassword:""}),d=i({name:"",phone:"",birthday:"",address:{zipcode:0,detail:""}}),v=i(""),{verifyEmail:S}=R();async function D(l){r.value=l;const{email:s}=r.value;await S(s)?v.value=s:t.value++,k()}const{signup:E}=H();async function V(l){d.value=l;const s={...r.value};delete s.confirmPassword,await E({...s,...d.value})}return(l,s)=>{const g=h("font-awesome-icon"),L=h("RouterLink");return o(),n("div",{class:m(["d-grid gap-8",t.value===2?"step2-pt":"step1-pt"])},[e("div",$,[e("div",q,[e("span",{class:m(["text-title text-primary",{"d-lg-none":t.value===2}])},"享樂酒店，誠摯歡迎",2),T]),e("div",j,[(o(!0),n(p,null,F(x.value,(a,c)=>(o(),n(p,{key:a},[e("div",{class:m(["step",{"step-active":t.value>=c+1}])},[e("strong",A,[t.value>c+1?(o(),N(g,{key:0,icon:"fa-solid fa-check"})):(o(),n(p,{key:1},[f(y(c+1),1)],64))]),e("strong",G,y(a),1)],2),c%2===0?(o(),n("div",I)):z("",!0)],64))),128))])]),e("section",J,[b(e("div",null,[_(P,{from:"register",formDate:r.value,registeredEmail:v.value,onHandleSubmit:D},{default:u(a=>[e("button",{class:"btn btn-primary w-100",disabled:a.disabled},"下一步",8,K)]),_:1},8,["formDate","registeredEmail"])],512),[[w,t.value===1]]),b(e("div",null,[_(U,{from:"register",formDate:d.value,onHandleSubmit:V},{registerBtn:u(a=>[e("button",{class:"btn btn-primary w-100",disabled:a.disabled},"完成註冊",8,M)]),_:1},8,["formDate"])],512),[[w,t.value===2]]),e("div",O,[f(" 已經有會員了嗎？ "),_(L,{class:"text-link",to:"/login"},{default:u(()=>[f("立即登入")]),_:1})])])],2)}}});export{se as default};
