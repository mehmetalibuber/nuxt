import{a7 as u,j as f,a8 as m}from"./entry.9f466ac5.js";import{u as i}from"./cookie.b7c4a9ce.js";import{A as d}from"./AuthComposable.8f59b3d7.js";import"./axiosConfig.e8b54ef2.js";const A=u(async(e,g)=>{let t,a;const s=f(),n=i("User"),o=i("i18n_redirected");if(e.fullPath.includes("/login")||e.fullPath.includes("/register"))return;const c=async()=>{try{await d().GetUserInformations()=="Access Denied"&&await l()}catch(r){console.error("Error during token expiry control:",r)}},l=async()=>{try{localStorage.removeItem("AccessToken")}catch(r){console.error("Error removing access token from localStorage:",r)}n.value=null,await s.push("/user/login")};if(!n.value)try{const r=o.value&&o.value.toString()!=="tr"?`/${o.value.toString()}/user/login`:"/user/login";return localStorage.setItem("RedirectAfterLogin",e.fullPath),s.push(r)}catch(r){console.error("Error during redirection:",r)}[t,a]=m(()=>c()),await t,a()});export{A as default};
