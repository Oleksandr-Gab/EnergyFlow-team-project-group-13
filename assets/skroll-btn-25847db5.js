import{a as D,i as S,T as I}from"./vendor-3806a34f.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function o(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=o(n);fetch(n.href,s)}})();const y=document.querySelector("[data-menu-open]"),k=document.querySelector("[data-menu-close]"),M=document.querySelector(".nav"),F=document.querySelector('[data-action="homepage"]'),R=document.querySelector('[data-action="favoritespage"]'),w=document.querySelector(".menu-back-drop"),O=document.body,U=document.querySelector(".header"),_=window.location.href;_.includes("favorite")&&(F.classList.remove("current"),R.classList.add("current"),U.style.position="static");document.addEventListener("keydown",e=>{e.key==="Escape"&&b()});k.addEventListener("click",b);y.addEventListener("click",()=>{M.classList.add("active"),y.classList.add("is-hidden"),k.classList.remove("is-hidden"),O.classList.add("lock"),w.classList.add("active")});function b(){M.classList.remove("active"),y.classList.remove("is-hidden"),k.classList.add("is-hidden"),O.classList.remove("lock"),w.classList.remove("active")}w.addEventListener("click",H);function H(e){e.target.classList.contains("menu-back-drop")&&b()}document.addEventListener("DOMContentLoaded",()=>{Q()});const q=document.getElementById("exerciseModal"),B=document.getElementById("closeModalBtn"),x=document.getElementById("information"),a=document.getElementById("addToFavoritesBtn");let C,c;async function J(e){try{c=(await D.create({baseURL:"https://energyflow.b.goit.study/api/exercises"}).get(e)).data,j(c)}catch{S.error({title:"Error",message:"Error fetching exercise data: ",position:"topRight"})}}const Q=()=>{C=document.querySelectorAll(".workout-btn-container"),C.forEach(e=>{e.addEventListener("click",t=>{t.preventDefault();let o=t.target.id;J(o)})})};async function j(e){const{bodyPart:t,burnedCalories:o,description:i,equipment:n,gifUrl:s,name:r,popularity:m,rating:f,target:p,time:v}=e,g=`

        <div class="gif">
        <img src="${s}" alt="${r}" >
        </div>

        <div class = "text">

        <h2>${r}</h2>
        
        <div class="rating-container">
            <p>${f}</p>
            <svg class="icon-star" width="12" height="12">
                <use href="../img/sprite.svg#icon-star"></use>
            </svg>
        </div>

        <ul class="info-block">
    <li class="info-item">
        <span class="info-text">Target</span> ${p}
    </li>
    <li class="info-item">
        <span class="info-text">Body Part</span> ${t}
    </li>
    <li class="info-item">
        <span class="info-text">Equipment</span> ${n}
    </li>
    <li class="info-item">
        <span class="info-text">Popular</span> ${m}
    </li>
    <li class="info-item">
        <span class="info-text">Burned Calories</span> ${o}/${v}min
    </li>
</ul>


        <p class="description">Description: ${i}</p> 
        </div>`;x.innerHTML=g,G()}function G(){q.classList.add("open"),document.body.style.overflow="hidden",B.addEventListener("click",u),document.addEventListener("mouseup",A),document.addEventListener("keydown",$),T()}function u(){q.classList.remove("open"),B.removeEventListener("click",u),document.removeEventListener("mouseup",A),document.removeEventListener("keydown",$),x.innerHTML="",document.body.style.overflow="",a.removeEventListener("click",l),a.removeEventListener("click",d)}const A=function(e){!document.getElementById("modal").contains(e.target)&&q.classList.contains("open")&&u()},$=function(e){e.key==="Escape"&&u()},K=e=>{const{_id:t,bodyPart:o,burnedCalories:i,description:n,equipment:s,gifUrl:r,name:m,popularity:f,rating:p,target:v,time:g}=e;return{_id:t,bodyPart:o,burnedCalories:i,description:n,equipment:s,gifUrl:r,name:m,popularity:f,rating:p,target:v,time:g}},l=()=>{let e=localStorage.getItem("favoritesCard"),t=[];e!=null&&(t=JSON.parse(e));const o=K(c);t.push(o),localStorage.setItem("favoritesCard",JSON.stringify(t)),T()},d=()=>{const{_id:e}=c;let t=localStorage.getItem("favoritesCard"),o=JSON.parse(t).filter(i=>i._id!=e);o.length!=0?localStorage.setItem("favoritesCard",JSON.stringify(o)):localStorage.removeItem("favoritesCard"),T()},T=()=>{const{_id:e}=c;let t=localStorage.getItem("favoritesCard");a.removeEventListener("click",d),a.addEventListener("click",l),a.innerHTML="Add to favorites",t!=null&&JSON.parse(t).forEach(o=>{o._id==e?(a.innerHTML="Delete favorite",a.removeEventListener("click",l),a.addEventListener("click",d)):(a.removeEventListener("click",d),a.addEventListener("click",l),a.innerHTML="Add to favorites")})},V=document.querySelector(".quote-info"),N="quote-of-the-day",L="date",z=new Date,h=z.getDate();async function Y(){try{const o=(await D.create({baseURL:"https://energyflow.b.goit.study/api"}).get("/quote")).data;P(o),W(o,h)}catch(e){S.error({timeout:5e3,title:"Error",message:e.message,position:"topRight"})}}//! SAVE QUOTE AND DATA
function W(e,t){localStorage.setItem(N,JSON.stringify(e)),localStorage.setItem(L,t)}//! RENDER QUOTE
function P(e){const t=[e];V.innerHTML=t.reduce((o,{quote:i,author:n})=>o+`<p class="quote-text">${i}</p>
        <h3 class="quote-author">${n}</h3>`,"")}//! CHECK DAY AND GET NEW QUOTE
async function X(){const e=localStorage.getItem(L);if(isNaN(e)){S.error({timeout:5e3,title:"Error",message:error.message,position:"topRight"});return}if(parseInt(e)===h){const t=localStorage.getItem(N);if(t){const o=JSON.parse(t);P(o)}return}await Y(),localStorage.setItem(L,h.toString())}X();//! ANIMATION 
new I(".quote-info",{speed:26,startDelay:300,waitUntilVisible:!0,afterComplete:function(e){e.destroy()}}).go();new I("#motivation-txt",{speed:26,startDelay:300,waitUntilVisible:!0,afterComplete:function(e){e.destroy()}}).go();const Z=100,E=document.querySelector(".skroll-btn"),ee=()=>window.scrollY||document.documentElement.scrollTop;window.addEventListener("scroll",()=>{ee()>Z?E.classList.add("skroll-btn-active"):E.classList.remove("skroll-btn-active")});E.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});export{Q as a};
//# sourceMappingURL=skroll-btn-25847db5.js.map
