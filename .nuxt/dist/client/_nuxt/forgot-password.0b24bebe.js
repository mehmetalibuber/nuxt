import{H as u,T as f,M as g}from"./components.863f6c09.js";import{_ as h}from"./nuxt-link.307254bf.js";import{u as w}from"./composables.6f270388.js";import{u as v}from"./cookie.4e00bdbd.js";import{_ as b}from"./login-cover.a9ca5c6b.js";import{_ as x}from"./_plugin-vue_export-helper.c27b6911.js";import{l as P,c as y,b as a,w as n,a as o,t as s,g as k,F as $,o as E,d as l,p as F,e as T}from"./entry.d8ee9b9c.js";import"./vue.f36acd1f.1da14f06.js";const c=e=>(F("data-v-fe3e6fc8"),e=e(),T(),e),A={class:"container-fluid px-0 overflow-hidden"},I={class:"forgot-password"},L={class:"container-fluid h-custom px-0"},M={class:"row d-flex justify-content-center align-items-center px-0"},N=c(()=>o("div",{class:"col-lg-6 px-0 d-none d-lg-block"},[o("img",{src:b,class:"img-fluid",alt:"forgot password"})],-1)),S={class:"col-lg-6"},B=c(()=>o("hr",null,null,-1)),H={class:"form-outline mb-3"},V={class:"form-label",for:"form3Example3"},C=["placeholder"],R={class:"text-center text-lg-start mt-4 pt-2"},j={type:"button",class:"btn btn-lg",style:{"padding-left":"2.5rem","padding-right":"2.5rem"}},D={class:"small fw-bold mt-2 pt-1 mb-0"},G={__name:"forgot-password",setup(e){const r=w(),d=v("isAuthenticated");return P(()=>{setTimeout(()=>{d.value=!0},5e3)}),(t,q)=>{const i=f,_=g,p=u,m=h;return E(),y($,null,[a(p,null,{default:n(()=>[a(i,null,{default:n(()=>[l(s(t.$t("ForgotPassword"))+" - Geccele",1)]),_:1}),a(_,{name:"description",content:"Forgot Password"})]),_:1}),o("div",A,[o("section",I,[o("div",L,[o("div",M,[N,o("div",S,[o("h2",null,s(t.$t("ForgotPassword")),1),B,o("form",null,[o("div",H,[o("label",V,s(t.$t("EmailAddress")),1),o("input",{type:"email",id:"form3Example3",class:"form-control form-control-lg",placeholder:t.$t("EmailAddress")},null,8,C)]),o("div",R,[o("button",j,s(t.$t("ResetPassword")),1),o("p",D,[a(m,{to:k(r)("/user/login"),class:"link-danger",title:"Login"},{default:n(()=>[l(s(t.$t("RetunLoginPage")),1)]),_:1},8,["to"])])])])])])])])])],64)}}},Y=x(G,[["__scopeId","data-v-fe3e6fc8"]]);export{Y as default};