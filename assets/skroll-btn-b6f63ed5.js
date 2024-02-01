import{a as I,i as S,T as D}from"./vendor-3806a34f.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function o(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(s){if(s.ep)return;s.ep=!0;const n=o(s);fetch(s.href,n)}})();const y=document.querySelector("[data-menu-open]"),k=document.querySelector("[data-menu-close]"),O=document.querySelector(".nav"),F=document.querySelector('[data-action="homepage"]'),R=document.querySelector('[data-action="favoritespage"]'),w=document.querySelector(".menu-back-drop"),x=document.body,U=document.querySelector(".header"),_=window.location.href;_.includes("favorite")&&(F.classList.remove("current"),R.classList.add("current"),U.style.position="static");document.addEventListener("keydown",e=>{e.key==="Escape"&&b()});k.addEventListener("click",b);y.addEventListener("click",()=>{O.classList.add("active"),y.classList.add("is-hidden"),k.classList.remove("is-hidden"),x.classList.add("lock"),w.classList.add("active")});function b(){O.classList.remove("active"),y.classList.remove("is-hidden"),k.classList.add("is-hidden"),x.classList.remove("lock"),w.classList.remove("active")}w.addEventListener("click",J);function J(e){e.target.classList.contains("menu-back-drop")&&b()}const q=document.getElementById("exerciseModal"),A=document.getElementById("closeModalBtn"),B=document.getElementById("information"),i=document.getElementById("addToFavoritesBtn");let C,c;async function Q(e){try{c=(await I.create({baseURL:"https://energyflow.b.goit.study/api/exercises"}).get(e)).data,H(c)}catch{S.error({title:"Error",message:"Error fetching exercise data: ",position:"topRight"})}}const te=()=>{C=document.querySelectorAll(".workout-btn-container"),C.forEach(e=>{e.addEventListener("click",t=>{t.preventDefault();let o=t.target.id;Q(o)})})};async function H(e){const{bodyPart:t,burnedCalories:o,description:r,equipment:s,gifUrl:n,name:a,popularity:m,rating:p,target:f,time:v}=e,g=`
        <div class="gif">
        <img src="${n}" alt="${a}" >
        </div>

        <div class = "text">

        <h2>${a}</h2>
        
        <div class="rating-container">
            <p>${p}</p>
            <svg class="icon-star" width="12" height="12">
                <use href="../img/sprite.svg#icon-star"></use>
            </svg>
        </div>

        <ul class="info-block">
    <li class="info-item">
        <h3 class="info-text">Target</h3>
        <p class="modal-pop-descr">${f}</p>
    </li>
    <li class="info-item">
        <h3 class="info-text">Body Part</h3>
        <p class="modal-pop-descr">${t}</p>
    </li>
    <li class="info-item">
        <h3 class="info-text">Equipment</h3>
        <p class="modal-pop-descr">${s}</p>
    </li>
    <li class="info-item">
        <h3 class="info-text">Popular</h3>
        <p class="modal-pop-descr">${m}</p>
    </li>
    <li class="info-item">
        <h3 class="info-text">Burned Calories</h3>
        <p class="modal-pop-descr">${o}/${v}min</p>
    </li>
</ul>


        <p class="description">Description: ${r}</p> 
        </div>`;B.insertAdjacentHTML("afterbegin",g),j()}function j(){q.classList.add("open"),document.body.style.overflow="hidden",A.addEventListener("click",u),document.addEventListener("mouseup",M),document.addEventListener("keydown",$),T()}function u(){q.classList.remove("open"),A.removeEventListener("click",u),document.removeEventListener("mouseup",M),document.removeEventListener("keydown",$),B.innerHTML="",document.body.style.overflow="",i.removeEventListener("click",l),i.removeEventListener("click",d)}const M=function(e){!document.getElementById("modal").contains(e.target)&&q.classList.contains("open")&&u()},$=function(e){e.key==="Escape"&&u()},G=e=>{const{_id:t,bodyPart:o,burnedCalories:r,description:s,equipment:n,gifUrl:a,name:m,popularity:p,rating:f,target:v,time:g}=e;return{_id:t,bodyPart:o,burnedCalories:r,description:s,equipment:n,gifUrl:a,name:m,popularity:p,rating:f,target:v,time:g}},l=()=>{let e=localStorage.getItem("favoritesCard"),t=[];e!=null&&(t=JSON.parse(e));const o=G(c);t.push(o),localStorage.setItem("favoritesCard",JSON.stringify(t)),T()},d=()=>{const{_id:e}=c;let t=localStorage.getItem("favoritesCard"),o=JSON.parse(t).filter(r=>r._id!=e);o.length!=0?localStorage.setItem("favoritesCard",JSON.stringify(o)):localStorage.removeItem("favoritesCard"),T()},T=()=>{const{_id:e}=c;let t=localStorage.getItem("favoritesCard");t||(i.addEventListener("click",l),i.removeEventListener("click",d),i.innerText="Add to favorites"),t!=null&&JSON.parse(t).forEach(o=>{o._id==e?(i.innerText="Delete favorite",i.removeEventListener("click",l),i.addEventListener("click",d)):(i.removeEventListener("click",d),i.addEventListener("click",l),i.innerText="Add to favorites")})},K=document.querySelector(".quote-info"),N="quote-of-the-day",h="date",V=new Date,L=V.getDate();async function z(){try{const o=(await I.create({baseURL:"https://energyflow.b.goit.study/api"}).get("/quote")).data;P(o),Y(o,L)}catch(e){S.error({timeout:5e3,title:"Error",message:e.message,position:"topRight"})}}//! SAVE QUOTE AND DATA
function Y(e,t){localStorage.setItem(N,JSON.stringify(e)),localStorage.setItem(h,t)}//! RENDER QUOTE
function P(e){const t=[e];K.innerHTML=t.reduce((o,{quote:r,author:s})=>o+`<p class="quote-text">${r}</p>
        <h3 class="quote-author">${s}</h3>`,"")}//! CHECK DAY AND GET NEW QUOTE
async function W(){const e=localStorage.getItem(h);if(isNaN(e)){S.error({timeout:5e3,title:"Error",message:error.message,position:"topRight"});return}if(parseInt(e)===L){const t=localStorage.getItem(N);if(t){const o=JSON.parse(t);P(o)}return}await z(),localStorage.setItem(h,L.toString())}W();//! ANIMATION 
new D(".quote-info",{speed:26,startDelay:300,waitUntilVisible:!0,afterComplete:function(e){e.destroy()}}).go();new D("#motivation-txt",{speed:26,startDelay:300,waitUntilVisible:!0,afterComplete:function(e){e.destroy()}}).go();const X=100,E=document.querySelector(".skroll-btn"),Z=()=>window.scrollY||document.documentElement.scrollTop;window.addEventListener("scroll",()=>{Z()>X?E.classList.add("skroll-btn-active"):E.classList.remove("skroll-btn-active")});E.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});export{te as a};
//# sourceMappingURL=skroll-btn-b6f63ed5.js.map
