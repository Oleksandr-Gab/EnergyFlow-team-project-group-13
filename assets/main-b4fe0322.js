import"./vendor-86291ea8.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const a=document.querySelector(".FilterList");let l;const u=document.querySelector(".Gallery"),d=document.querySelector('button[name="Muscles"]');d.disabled=!1;a.addEventListener("click",s=>{s.target.tagName==="BUTTON"&&(l=s.target.name,console.log(l),f(l))});function f(s){axios.create({baseURL:"https://energyflow.b.goit.study/api",params:{filter:s,page:"1",limit:"12"}}).get("/filters").then(r=>{console.log(r.results);const c=r.results.reduce((e,{name:t,filter:i,imgUrl:n})=>e+`<li class="GalleryItem">
        <div class="Card">
          <a class="GalleryLink" href="${n}">
            <img class="GalleryImage"
            src="${n}"
            alt="${i}"
          />
          </a>
          </div>          
          <div class="CardDescription">
          <p class="NameDescription">${t}</p>
          <p class="FilterDescription">${i}</p>          
          </div> 
        </li>`,"");u.insertAdjacentHTML("beforeend",c)}).catch(r=>{console.error(r),iziToast.error({message:r.message,color:"red",position:"topCenter"})})}const m=document.querySelector(".footer-form");m.addEventListener("submit",p);async function p(s){s.preventDefault();const o=s.currentTarget.elements.footerInput.value.trim();try{const r=await axios.post("https://energyflow.b.goit.study/api/subscription",{email:o});iziToast.success({title:"OK",message:"Successfully inserted record!",color:"white"}),console.log(r.data)}catch{iziToast.error({title:"Error",message:"Error sending subscription request"})}}
//# sourceMappingURL=main-b4fe0322.js.map
