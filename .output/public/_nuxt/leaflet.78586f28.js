import{k as D,r as c,l as b,_ as M,m as F,c as L,o as E}from"./entry.9f466ac5.js";import{u as C}from"./cookie.b7c4a9ce.js";import{D as S}from"./DestinationComposable.28dbf561.js";/* empty css                */import"./axiosConfig.e8b54ef2.js";const P={__name:"leaflet",setup(B){const m=D("Destinations"),a=c(null),d=c([]),i=c({}),l=c([]),f=C("Filters");b(async()=>{await g(),await _()});const _=async()=>{const e=await M(()=>import("./leaflet-src.20dcb89b.js").then(r=>r.l),["./leaflet-src.20dcb89b.js","./_commonjsHelpers.725317a4.js"],import.meta.url);a.value=e.map(a.value).setView([36.8969,30.7133],9),e.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(a.value),p(),a.value.on("zoomend",()=>{if(a.value.getZoom()<12)y(),k();else{const o=a.value.getBounds();l.value.forEach(t=>{const s=parseFloat(t.address.latitude),n=parseFloat(t.address.longitude);s&&n&&o.contains([s,n])&&v(t.address.subCity)})}})};F(()=>l.value,p,{deep:!0});function p(){const e=window.L,r=l.value.reduce((o,t)=>{const s=t.address.subCity;return o[s]||(o[s]=[]),o[s].push(t),o},{});Object.keys(r).forEach(o=>{const t=r[o],s=t[0],n=parseFloat(s.address.latitude),u=parseFloat(s.address.longitude);if(n&&u){const w=e.marker([n,u],{icon:e.divIcon({className:"city-marker",html:`${t.length}`})}).addTo(a.value).bindPopup(`${o}: ${t.length} yer`).on("click",()=>{a.value.setView([n,u],12),v(o)});d.value.push(w),i.value[o]=[]}})}function v(e){h();const r=l.value.filter(t=>t.address.subCity===e),o=window.L;r.forEach(t=>{const s=parseFloat(t.address.latitude),n=parseFloat(t.address.longitude);if(s&&n){const u=o.marker([s,n]).addTo(a.value).bindPopup(`<b>${t.name}</b><br>${t.address.detail}`);i.value[e].push(u)}})}function h(){d.value.forEach(e=>a.value.removeLayer(e))}function k(){d.value.forEach(e=>e.addTo(a.value))}function y(){for(const e in i.value)i.value[e].forEach(r=>a.value.removeLayer(r)),i.value[e]=[]}const g=async()=>{const e=await S().GetFilteredDestinations(f.value);m.value=l.value=e.data.content};return(e,r)=>(E(),L("div",{ref_key:"MapRef",ref:a,class:"map-container"},null,512))}};export{P as default};
