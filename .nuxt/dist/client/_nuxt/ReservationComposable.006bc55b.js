import{H as p,i,c as l}from"./axiosConfig.8655b34e.js";import"./entry.3d77523d.js";import{u}from"./cookie.2086fefe.js";let n;const C=p().GetCRMHost();C.then(a=>{n=a}).catch(a=>{console.error(a)});function k(){let a=l.CRM_WEBSITE,f=l.CRM_PAYMENT_TYPE;const c=u("CookieResID"),R=u("EstateID");return{SendReservationData:async e=>{let t=null;const r=localStorage.getItem("AccessToken");if(!r)return"Please login again";if(!e)return"1";e.webSite=Number(a),e.paymentType=Number(f);const s=await i.post(`${n}/reservations`,e,{headers:{Authorization:`Bearer ${r}`}});return s&&(s.data&&(t=s.data),s.message)?s.message:t},ConfirmPhoneNumber:async e=>{let t=null;return e?c.value?(t=(await i.get(`${n}/reservations?code=${e}&webSite=${a}&reservationId=${c.value}`)).data,t):"Reservation ID Error":"Verification Code Error"},CheckAvailability:async(e,t)=>{let r=null,s=R.value;if(!s)return"1";if(!e)return"please select check-in date";if(!t)return"please select check-out date";try{const o=await i.get(`${n}/estates/free?webSite=${a}&endDate=${t}&startDate=${e}&estateId=${s}`);return o?o.data?(r=o.data,r):o.message:"1"}catch(o){let m=o.request;return JSON.parse(m.response).message}},SendCallBackInfo:async e=>{let t=null;return e?(t=(await i.post(`${n}/contact-us`,e)).data,t):"Call Back Error"}}}export{k as R};
