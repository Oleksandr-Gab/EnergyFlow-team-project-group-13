import{a as O,i as F}from"./vendor-29bef8ec.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function s(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(o){if(o.ep)return;o.ep=!0;const n=s(o);fetch(o.href,n)}})();const y=document.querySelector("[data-menu-open]"),E=document.querySelector("[data-menu-close]"),C=document.querySelector(".nav"),P=document.querySelector('[data-action="homepage"]'),N=document.querySelector('[data-action="favoritespage"]'),k=document.querySelector(".menu-back-drop"),B=document.body,H=document.querySelector(".header"),A=window.location.href;A.includes("favorite")&&(P.classList.remove("current"),N.classList.add("current"),H.style.position="static");document.addEventListener("keydown",e=>{e.key==="Escape"&&b()});E.addEventListener("click",b);y.addEventListener("click",()=>{C.classList.add("active"),y.classList.add("is-hidden"),E.classList.remove("is-hidden"),B.classList.add("lock"),k.classList.add("active")});function b(){C.classList.remove("active"),y.classList.remove("is-hidden"),E.classList.add("is-hidden"),B.classList.remove("lock"),k.classList.remove("active")}k.addEventListener("click",D);function D(e){e.target.classList.contains("menu-back-drop")&&b()}const $="/EnergyFlow-team-project-group-13/assets/sprite-aea79390.svg",L=`<svg class="heart" width="32" height="32">
<use href="${$}#heart"></use>
</svg>`,w=document.getElementById("exerciseModal"),T=document.getElementById("closeModalBtn"),q=document.getElementById("information"),i=document.getElementById("addToFavoritesBtn");let M,a;const J=O.create({baseURL:"https://energyflow.b.goit.study/api/exercises"});async function R(e){try{a=(await J.get(e)).data,U(a)}catch{F.error({title:"Error",message:"Error fetching exercise data: ",position:"topRight"})}}const G=()=>{M=document.querySelectorAll(".workout-btn-container"),M.forEach(e=>{e.addEventListener("click",t=>{t.preventDefault();let s=t.target.id;s&&R(s)})})};async function U(e){const{bodyPart:t,burnedCalories:s,description:r,equipment:o,gifUrl:n,name:c,popularity:m,rating:f,target:p,time:v}=e,g=`
        <div class="gif">
        <img src="${n}" alt="${c}" >
        </div>

        <div class = "text">

        <h2>${c}</h2>
        
        <div class="rating-container">
            <p>${f}</p>
            <svg class="icon-star" width="12" height="12">
                <use href="${$}#icon-star"></use>
            </svg>
        </div>

        <ul class="info-block">
    <li class="info-item">
        <h3 class="info-text">Target</h3>
        <p class="modal-pop-descr">${p}</p>
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
        <p class="modal-pop-descr">${m}</p>
    </li>
    <li class="info-item">
        <h3 class="info-text">Burned Calories</h3>
        <p class="modal-pop-descr">${s}/${v}min</p>
    </li>
</ul>


        <p class="description">Description: ${r}</p> 
        </div>`;q.insertAdjacentHTML("afterbegin",g),_()}function _(){S(),w.classList.add("open"),document.body.style.overflow="hidden",T.addEventListener("click",u),document.addEventListener("mouseup",x),document.addEventListener("keydown",I)}function u(){w.classList.remove("open"),T.removeEventListener("click",u),document.removeEventListener("mouseup",x),document.removeEventListener("keydown",I),q.innerHTML="",document.body.style.overflow="",i.removeEventListener("click",l),i.removeEventListener("click",d)}const x=function(e){!document.getElementById("modal").contains(e.target)&&w.classList.contains("open")&&u()},I=function(e){e.key==="Escape"&&u()},j=e=>{const{_id:t,bodyPart:s,burnedCalories:r,description:o,equipment:n,gifUrl:c,name:m,popularity:f,rating:p,target:v,time:g}=e;return{_id:t,bodyPart:s,burnedCalories:r,description:o,equipment:n,gifUrl:c,name:m,popularity:f,rating:p,target:v,time:g}},l=()=>{let e=localStorage.getItem("favoritesCard"),t=[];e!=null&&(t=JSON.parse(e));const s=j(a);t.push(s),localStorage.setItem("favoritesCard",JSON.stringify(t)),S()},d=async()=>{const{_id:e}=a;let t=localStorage.getItem("favoritesCard"),s=JSON.parse(t).filter(r=>r._id!=e);s.length!=0?localStorage.setItem("favoritesCard",JSON.stringify(s)):localStorage.removeItem("favoritesCard"),S()},S=()=>{const{_id:e}=a;let t=localStorage.getItem("favoritesCard");t||(i.addEventListener("click",l),i.removeEventListener("click",d),i.innerHTML=`Add to favorites ${L}`),t!=null&&JSON.parse(t).forEach(s=>{s._id==e?(i.innerHTML=`Remove favorite ${L}`,i.removeEventListener("click",l),i.addEventListener("click",d)):(i.removeEventListener("click",d),i.addEventListener("click",l),i.innerHTML=`Add to favorites ${L}`)})},K=100,h=document.querySelector(".skroll-btn"),z=()=>window.scrollY||document.documentElement.scrollTop;window.addEventListener("scroll",()=>{z()>K?h.classList.add("skroll-btn-active"):h.classList.remove("skroll-btn-active")});h.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});export{G as a,$ as i};
//# sourceMappingURL=skroll-btn-920ab6c8.js.map
