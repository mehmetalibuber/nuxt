import{_ as P,a as G,b as S,c as w,d as B}from"./Footer.c39642f1.js";import{_ as L}from"./nuxt-link.307254bf.js";import{u as V}from"./composables.6f270388.js";import{a6 as q,r as m,o as N,c as $,a as e,t as s,M as u,a4 as v,g as n,n as p,a5 as D,d as f,b as c,w as y,B as T}from"./entry.d8ee9b9c.js";import{H as x}from"./axiosConfig.c1668654.js";import{R as U}from"./ReservationComposable.c91f6a7b.js";import{_ as H}from"./_plugin-vue_export-helper.c27b6911.js";import"./cookie.4e00bdbd.js";import"./AuthComposable.19835ef1.js";import"./call-center.150408ae.js";import"./logout.4dbda211.js";import"./nuxt-img.f43522e8.js";import"./vue.f36acd1f.1da14f06.js";const F={class:"modal fade",id:"callbackModal",tabindex:"-1","aria-labelledby":"callbackModalLabel","aria-hidden":"true"},j={class:"modal-dialog modal-dialog-centered"},z={class:"modal-content"},A={class:"modal-header"},E={class:"modal-title text-center",id:"callbackModalLabel"},I=e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),W={class:"modal-body"},Y={class:"row mt-2"},J={class:"col col-lg-12"},K={class:"callback-req"},O={class:"form-group col-lg-12"},Q={for:"message"},X=["placeholder"],Z={class:"form-group col-lg-12"},ee={for:"phone"},oe={class:"row"},te=e("div",{class:"col-2"},[e("select",{name:"",id:""},[e("option",{value:""},"+90")])],-1),se={class:"col-lg-10"},ae={class:"form-group col-lg-12"},le={for:"name"},ne=["placeholder"],ce={class:"form-check"},re={class:"form-check-label",for:"exampleCheck1"},ie=["disabled"],de={class:"my-1 err-message"},_e={__name:"Callback-Request",setup(g){const h=V(),b=q(),r=m(!1),k=m(""),i=m(""),d=m(""),a=m(""),R=async()=>{if(a.value.length>250)return _("* Mesaj uzunluğu max. 250 karakter olmalı!","error");if(!a.value)return _("* Lütfen mesaj girin!","error");if(x().CheckGlobalGuestPhoneNumber(d.value)==!1)return _("*Geçersiz telefon numarası!","error");if(x().CheckGuestName(i.value)!=!0)return _("*Lütfen isim girin!","error");if(!r.value)return _("* Lütfen kutucuğu işaretleyin!","error");await M()},M=async()=>{const t={fullName:i.value,phone:d.value,message:a.value},o=await U().SendCallBackInfo(t);o&&o.message&&o.message=="Contact Us added successfully"&&(document.querySelector(".btn-close").click(),_("İşlem başarılı","success"))},_=(t,o)=>{b.add({type:o,text:t})};return(t,o)=>{const C=L;return N(),$("div",F,[e("div",j,[e("div",z,[e("div",A,[e("h5",E,s(t.$t("WeCallYou")),1),I]),e("div",W,[e("div",Y,[e("div",J,[e("div",K,[e("div",O,[e("label",Q,s(t.$t("Message")),1),u(e("textarea",{type:"text",class:"form-control",id:"message",placeholder:t.$t("TypeMessage"),maxlength:"250","onUpdate:modelValue":o[0]||(o[0]=l=>p(a)?a.value=l:null)},null,8,X),[[v,n(a)]])]),e("div",Z,[e("label",ee,s(t.$t("PhoneNumber")),1),e("div",oe,[te,e("div",se,[u(e("input",{type:"tel",class:"form-control",id:"phone",placeholder:"850 242 07 99",maxlength:"16","onUpdate:modelValue":o[1]||(o[1]=l=>p(d)?d.value=l:null)},null,512),[[v,n(d)]])])])]),e("div",ae,[e("label",le,s(t.$t("FullName")),1),u(e("input",{type:"text",class:"form-control",id:"name",placeholder:t.$t("FullName"),maxlength:"32","onUpdate:modelValue":o[2]||(o[2]=l=>p(i)?i.value=l:null)},null,8,ne),[[v,n(i)]])]),e("div",ce,[u(e("input",{type:"checkbox",class:"form-check-input",id:"exampleCheck1","onUpdate:modelValue":o[3]||(o[3]=l=>p(r)?r.value=l:null)},null,512),[[D,n(r)]]),e("label",re,[f(s(t.$t("GDPRShortTerm"))+"  ",1),c(C,{to:n(h)("/contracts/gdpr"),target:"_blank"},{default:y(()=>[f(s(t.$t("GDPR")),1)]),_:1},8,["to"]),f("  |  "),c(C,{to:n(h)("/contracts/cookie-policy"),target:"_blank"},{default:y(()=>[f(s(t.$t("CookiePolicy")),1)]),_:1},8,["to"])])]),e("button",{type:"submit",class:"submit-btn btn mt-2",disabled:!n(r),onClick:o[4]||(o[4]=l=>R())},s(t.$t("Send")),9,ie),e("span",de,s(n(k)),1)])])])])])])])}}},me=_e,ue={},pe={class:"default-layout"};function fe(g,h){const b=P,r=G,k=S,i=w,d=me,a=B;return N(),$("div",pe,[c(b),c(r),T(g.$slots,"default"),c(k),c(i),c(d),c(a)])}const Ge=H(ue,[["render",fe]]);export{Ge as default};