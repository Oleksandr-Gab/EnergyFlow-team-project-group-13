import{a as F,i as P}from"./vendor-29bef8ec.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function s(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(o){if(o.ep)return;o.ep=!0;const n=s(o);fetch(o.href,n)}})();const p=document.querySelector("[data-menu-open]"),y=document.querySelector("[data-menu-close]"),M=document.querySelector(".nav"),N=document.querySelector('[data-action="homepage"]'),H=document.querySelector('[data-action="favoritespage"]'),h=document.querySelector(".menu-back-drop"),B=document.body,_=document.querySelector(".header"),A=window.location.href;A.includes("favorite")&&(N.classList.remove("current"),H.classList.add("current"),_.style.position="static");document.addEventListener("keydown",e=>{e.key==="Escape"&&E()});y.addEventListener("click",E);p.addEventListener("click",()=>{M.classList.add("active"),p.classList.add("is-hidden"),y.classList.remove("is-hidden"),B.classList.add("lock"),h.classList.add("active")});function E(){M.classList.remove("active"),p.classList.remove("is-hidden"),y.classList.add("is-hidden"),B.classList.remove("lock"),h.classList.remove("active")}h.addEventListener("click",D);function D(e){e.target.classList.contains("menu-back-drop")&&E()}const $="/EnergyFlow-team-project-group-13/assets/sprite-aea79390.svg",S=`<svg class="heart" width="32" height="32">
<use href="${$}#heart"></use>
</svg>`,k=document.getElementById("exerciseModal"),T=document.getElementById("closeModalBtn"),q=document.getElementById("information"),c=document.getElementById("addToFavoritesBtn");let C,a;const J=F.create({baseURL:"https://energyflow.b.goit.study/api/exercises"});async function R(e){try{a=(await J.get(e)).data,U(a)}catch{P.error({title:"Error",message:"Error fetching exercise data: ",position:"topRight"})}}const Q=()=>{C=document.querySelectorAll(".workout-btn-container"),C.forEach(e=>{e.addEventListener("click",t=>{t.preventDefault();let s=t.currentTarget.id;s&&(R(s),b(s))})})};async function U(e){const{bodyPart:t,burnedCalories:s,description:i,equipment:o,gifUrl:n,name:r,popularity:d,rating:u,target:m,time:f,_id:w}=e,O=`
        <div class="gif">
        <img src="${n}" alt="${r}" >
        </div>

        <div class = "text">

        <h2>${r}</h2>
        
        <div class="rating-container">
            <p>${u}</p>
            <svg class="icon-star" width="12" height="12">
                <use href="${$}#icon-star"></use>
            </svg>
        </div>

        <ul class="info-block">
    <li class="info-item">
        <h3 class="info-text">Target</h3>
        <p class="modal-pop-descr">${m}</p>
    </li>
    <li class="info-item">
        <h3 class="info-text">Body Part</h3>
        <p class="modal-pop-descr">${t}</p>
    </li>
    <li class="info-item">
        <h3 class="info-text">Equipment</h3>
        <p class="modal-pop-descr">${o}</p>
    </li>
    <li class="info-item">
        <h3 class="info-text">Popular</h3>
        <p class="modal-pop-descr">${d}</p>
    </li>
    <li class="info-item">
        <h3 class="info-text">Burned Calories</h3>
        <p class="modal-pop-descr">${s}/${f}min</p>
    </li>
</ul>


        <p class="description">Description: ${i}</p> 
        </div>`;q.insertAdjacentHTML("afterbegin",O),j()}function j(){k.classList.add("open"),document.body.style.overflow="hidden",T.addEventListener("click",l),document.addEventListener("mouseup",x),document.addEventListener("keydown",I)}function l(){k.classList.remove("open"),T.removeEventListener("click",l),document.removeEventListener("mouseup",x),document.removeEventListener("keydown",I),q.innerHTML="",document.body.style.overflow="",c.removeEventListener("click",v),c.removeEventListener("click",g)}const x=function(e){!document.getElementById("modal").contains(e.target)&&k.classList.contains("open")&&l()},I=function(e){e.key==="Escape"&&l()},K=e=>{const{_id:t,bodyPart:s,burnedCalories:i,description:o,equipment:n,gifUrl:r,name:d,popularity:u,rating:m,target:f,time:w}=e;return{_id:t,bodyPart:s,burnedCalories:i,description:o,equipment:n,gifUrl:r,name:d,popularity:u,rating:m,target:f,time:w}},v=()=>{const{_id:e}=a;let t=localStorage.getItem("favoritesCard"),s=[];t!=null&&(s=JSON.parse(t));const i=K(a);s.push(i),localStorage.setItem("favoritesCard",JSON.stringify(s)),b(e)},g=async()=>{const{_id:e}=a;let t=localStorage.getItem("favoritesCard"),s=JSON.parse(t).filter(i=>i._id!=e);s.length!=0?localStorage.setItem("favoritesCard",JSON.stringify(s)):localStorage.removeItem("favoritesCard"),b(e)},b=e=>{let t=localStorage.getItem("favoritesCard");c.addEventListener("click",v),c.removeEventListener("click",g),c.innerHTML=`Add to favorites ${S}`,t!=null&&JSON.parse(t).forEach(s=>{s._id==e&&(c.innerHTML=`Remove favorite ${S}`,c.removeEventListener("click",v),c.addEventListener("click",g))})},z=100,L=document.querySelector(".skroll-btn"),Y=()=>window.scrollY||document.documentElement.scrollTop;window.addEventListener("scroll",()=>{Y()>z?L.classList.add("skroll-btn-active"):L.classList.remove("skroll-btn-active")});L.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});export{Q as a,$ as i};
//# sourceMappingURL=skroll-btn-daa98070.js.map
