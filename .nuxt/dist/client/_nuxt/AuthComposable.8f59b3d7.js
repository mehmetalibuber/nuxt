import{H as m,i as r,c as f}from"./axiosConfig.e8b54ef2.js";let n;const p=m().GetCRMHost();p.then(c=>{n=c}).catch(c=>{console.error(c)});function S(){return{SendRegisterData:async t=>{let s=null;if(!t)return"1";const e=await r.post(`${n}/auth/register`,t);return e.status?"0":e.message?(s=e.message,s):e},SendLoginData:async t=>{let s=null;if(!t)return"1";const e=await r.post(`${n}/auth/login`,t);return e.status?e.data:e.message?(s=e.message,s):e},GetUserInformations:async()=>{let t=null;const s=localStorage.getItem("AccessToken");if(!s)return"Please login again";const e=await r.get(`${n}/me/account`,{headers:{Authorization:`Bearer ${s}`}});return e.status?e.data:e.message?(t=e.message,t):e},GetUserReservations:async()=>{let t=null;const s=localStorage.getItem("AccessToken");if(!s)return"Please login again";const e=await r.get(`${n}/me/reservations`,{headers:{Authorization:`Bearer ${s}`}});return e.status?e.data:e.message?(t=e.message,t):e},GetLoginVerificationCode:async t=>{let s=null;if(!t)return"Please Enter Your Phone Number";const e=f.CRM_WEBSITE,o={phone:t,webSite:e},a=await r.post(`${n}/auth/phone`,o);return a.status?a.data:a.message?(s=a.message,s):a},ConfirmVerificationCode:async(t,s)=>{let e=null;if(!t)return"Please Enter Your Phone Verification Code";if(!s)return"Please Refresh Page";const o=f.CRM_WEBSITE,a=await r.get(`${n}/auth/phone?webSite=${o}&code=${t}&phone=${s}`);return a.status?a.data:a.message?(e=a.message,e):a},GetUserCoupons:async()=>{let t=null;const s=localStorage.getItem("AccessToken");if(!s)return"Please login again";const e=await r.get(`${n}/me/coupons `,{headers:{Authorization:`Bearer ${s}`}});return e.status?e.data:e.message?(t=e.message,t):e},CheckUserCoupon:async(t,s,e)=>{let o=null,a="%3F",l="",i="";const g=localStorage.getItem("AccessToken");if(!g)return"Please login again";if(!t)return"Please coupon select";if(!s||!e)return;i=t.trim(),l=i,i[i.length-1]=="?"&&(l=i.slice(0,-1)+a);const u=await r.post(`${n}/coupons/${l} `,{totalAmount:s,accommodation:e},{headers:{Authorization:`Bearer ${g}`}});return u.status?u.data:u.message?(o=u.message,o):u},GetUserGuests:async()=>{let t=null;const s=localStorage.getItem("AccessToken");if(!s)return"error get user guest";const e=await r.get(`${n}/me/guest`,{headers:{Authorization:`Bearer ${s}`}});return e.status?e.data:e.message?(t=e.message,t):e}}}export{S as A};
