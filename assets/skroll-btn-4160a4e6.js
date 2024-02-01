import{a as I,i as O}from"./vendor-29bef8ec.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function s(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(o){if(o.ep)return;o.ep=!0;const n=s(o);fetch(o.href,n)}})();const L=document.querySelector("[data-menu-open]"),h=document.querySelector("[data-menu-close]"),C=document.querySelector(".nav"),P=document.querySelector('[data-action="homepage"]'),$=document.querySelector('[data-action="favoritespage"]'),E=document.querySelector(".menu-back-drop"),x=document.body,F=document.querySelector(".header"),N=window.location.href;N.includes("favorite")&&(P.classList.remove("current"),$.classList.add("current"),F.style.position="static");document.addEventListener("keydown",e=>{e.key==="Escape"&&k()});h.addEventListener("click",k);L.addEventListener("click",()=>{C.classList.add("active"),L.classList.add("is-hidden"),h.classList.remove("is-hidden"),x.classList.add("lock"),E.classList.add("active")});function k(){C.classList.remove("active"),L.classList.remove("is-hidden"),h.classList.add("is-hidden"),x.classList.remove("lock"),E.classList.remove("active")}E.addEventListener("click",A);function A(e){e.target.classList.contains("menu-back-drop")&&k()}const b=document.getElementById("exerciseModal"),B=document.getElementById("closeModalBtn"),M=document.getElementById("information"),i=document.getElementById("addToFavoritesBtn");let S,a;async function D(e){try{a=(await I.create({baseURL:"https://energyflow.b.goit.study/api/exercises"}).get(e)).data,J(a)}catch{O.error({title:"Error",message:"Error fetching exercise data: ",position:"topRight"})}}const K=()=>{S=document.querySelectorAll(".workout-btn-container"),S.forEach(e=>{e.addEventListener("click",t=>{t.preventDefault();let s=t.target.id;D(s)})})};async function J(e){const{bodyPart:t,burnedCalories:s,description:r,equipment:o,gifUrl:n,name:c,popularity:u,rating:f,target:p,time:v}=e,g=`
        <div class="gif">
        <img src="${n}" alt="${c}" >
        </div>

        <div class = "text">

        <h2>${c}</h2>
        
        <div class="rating-container">
            <p>${f}</p>
            <svg class="icon-star" width="12" height="12">
                <use href="../img/sprite.svg#icon-star"></use>
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
        <p class="modal-pop-descr">${u}</p>
    </li>
    <li class="info-item">
        <h3 class="info-text">Burned Calories</h3>
        <p class="modal-pop-descr">${s}/${v}min</p>
    </li>
</ul>


        <p class="description">Description: ${r}</p> 
        </div>`;M.insertAdjacentHTML("afterbegin",g),_()}function _(){b.classList.add("open"),document.body.style.overflow="hidden",B.addEventListener("click",m),document.addEventListener("mouseup",T),document.addEventListener("keydown",q),w()}function m(){b.classList.remove("open"),B.removeEventListener("click",m),document.removeEventListener("mouseup",T),document.removeEventListener("keydown",q),M.innerHTML="",document.body.style.overflow="",i.removeEventListener("click",l),i.removeEventListener("click",d)}const T=function(e){!document.getElementById("modal").contains(e.target)&&b.classList.contains("open")&&m()},q=function(e){e.key==="Escape"&&m()},U=e=>{const{_id:t,bodyPart:s,burnedCalories:r,description:o,equipment:n,gifUrl:c,name:u,popularity:f,rating:p,target:v,time:g}=e;return{_id:t,bodyPart:s,burnedCalories:r,description:o,equipment:n,gifUrl:c,name:u,popularity:f,rating:p,target:v,time:g}},l=()=>{let e=localStorage.getItem("favoritesCard"),t=[];e!=null&&(t=JSON.parse(e));const s=U(a);t.push(s),localStorage.setItem("favoritesCard",JSON.stringify(t)),w()},d=()=>{const{_id:e}=a;let t=localStorage.getItem("favoritesCard"),s=JSON.parse(t).filter(r=>r._id!=e);s.length!=0?localStorage.setItem("favoritesCard",JSON.stringify(s)):localStorage.removeItem("favoritesCard"),w()},w=()=>{const{_id:e}=a;let t=localStorage.getItem("favoritesCard");t||(i.addEventListener("click",l),i.removeEventListener("click",d),i.innerText="Add to favorites"),t!=null&&JSON.parse(t).forEach(s=>{s._id==e?(i.innerText="Delete favorite",i.removeEventListener("click",l),i.addEventListener("click",d)):(i.removeEventListener("click",d),i.addEventListener("click",l),i.innerText="Add to favorites")})},j=100,y=document.querySelector(".skroll-btn"),H=()=>window.scrollY||document.documentElement.scrollTop;window.addEventListener("scroll",()=>{H()>j?y.classList.add("skroll-btn-active"):y.classList.remove("skroll-btn-active")});y.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});export{K as a};
//# sourceMappingURL=skroll-btn-4160a4e6.js.map
