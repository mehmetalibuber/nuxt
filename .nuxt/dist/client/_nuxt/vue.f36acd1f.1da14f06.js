import{as as o,r as u,at as f,m as v,A as d,au as l,av as i,aw as h,ax as m}from"./entry.d8ee9b9c.js";function I(t,a={}){const e=a.head||o();if(e)return e.ssr?e.push(t,a):p(e,t,a)}function p(t,a,e={}){const s=u(!1),n=u({});f(()=>{n.value=s.value?{}:h(a)});const r=t.push(n.value,e);return v(n,c=>{r.patch(c)}),m()&&(d(()=>{r.dispose()}),l(()=>{s.value=!0}),i(()=>{s.value=!1})),r}export{I as u};
