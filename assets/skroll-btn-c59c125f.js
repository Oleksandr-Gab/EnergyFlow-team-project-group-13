import{a as I,i as w,T as M}from"./vendor-8598a644.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function o(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(s){if(s.ep)return;s.ep=!0;const n=o(s);fetch(s.href,n)}})();const y=document.querySelector("[data-menu-open]"),S=document.querySelector("[data-menu-close]"),O=document.querySelector(".nav"),U=document.querySelector('[data-action="homepage"]'),_=document.querySelector('[data-action="favoritespage"]'),k=document.querySelector(".menu-back-drop"),A=document.body,H=document.querySelector(".header"),J=window.location.href;J.includes("favorite")&&(U.classList.remove("current"),_.classList.add("current"),H.style.position="static");document.addEventListener("keydown",e=>{e.key==="Escape"&&b()});S.addEventListener("click",b);y.addEventListener("click",()=>{O.classList.add("active"),y.classList.add("is-hidden"),S.classList.remove("is-hidden"),A.classList.add("lock"),k.classList.add("active")});function b(){O.classList.remove("active"),y.classList.remove("is-hidden"),S.classList.add("is-hidden"),A.classList.remove("lock"),k.classList.remove("active")}k.addEventListener("click",Q);function Q(e){e.target.classList.contains("menu-back-drop")&&b()}document.addEventListener("DOMContentLoaded",()=>{G()});const q=document.getElementById("exerciseModal"),B=document.getElementById("closeModalBtn"),x=document.getElementById("information"),a=document.getElementById("addToFavoritesBtn");let D,c;async function j(e){try{c=(await I.create({baseURL:"https://energyflow.b.goit.study/api/exercises"}).get(e)).data,K(c)}catch{w.error({title:"Error",message:"Error fetching exercise data: ",position:"topRight"})}}const G=()=>{D=document.querySelectorAll(".workout-btn-container"),D.forEach(e=>{e.addEventListener("click",t=>{t.preventDefault();let o=t.target.id;j(o)})})};async function K(e){const{bodyPart:t,burnedCalories:o,description:i,equipment:s,gifUrl:n,name:r,popularity:m,rating:p,target:f,time:v}=e,g=`

        <div class="gif">
        <img src="${n}" alt="${r}" >
        </div>

        <div class = "text">

        <h2>${r}</h2>
        
        <div class="rating-container">
            <p>${p}</p>
            <svg class="icon-star" width="12" height="12">
                <use href="../img/sprite.svg#icon-star"></use>
            </svg>
        </div>

        <ul class="info-block">
    <li class="info-item">
        <span class="info-text">Target</span> ${f}
    </li>
    <li class="info-item">
        <span class="info-text">Body Part</span> ${t}
    </li>
    <li class="info-item">
        <span class="info-text">Equipment</span> ${s}
    </li>
    <li class="info-item">
        <span class="info-text">Popular</span> ${m}
    </li>
    <li class="info-item">
        <span class="info-text">Burned Calories</span> ${o}/${v}min
    </li>
</ul>


        <p class="description">Description: ${i}</p> 
        </div>`;x.innerHTML=g,V()}function V(){q.classList.add("open"),document.body.style.overflow="hidden",B.addEventListener("click",u),document.addEventListener("mouseup",N),document.addEventListener("keydown",$),C()}function u(){q.classList.remove("open"),B.removeEventListener("click",u),document.removeEventListener("mouseup",N),document.removeEventListener("keydown",$),x.innerHTML="",document.body.style.overflow="",a.removeEventListener("click",l),a.removeEventListener("click",d)}const N=function(e){!document.getElementById("modal").contains(e.target)&&q.classList.contains("open")&&u()},$=function(e){e.key==="Escape"&&u()},z=e=>{const{_id:t,bodyPart:o,burnedCalories:i,description:s,equipment:n,gifUrl:r,name:m,popularity:p,rating:f,target:v,time:g}=e;return{_id:t,bodyPart:o,burnedCalories:i,description:s,equipment:n,gifUrl:r,name:m,popularity:p,rating:f,target:v,time:g}},l=()=>{let e=localStorage.getItem("favoritesCard"),t=[];e!=null&&(t=JSON.parse(e));const o=z(c);t.push(o),localStorage.setItem("favoritesCard",JSON.stringify(t)),C()},d=()=>{const{_id:e}=c;let t=localStorage.getItem("favoritesCard"),o=JSON.parse(t).filter(i=>i._id!=e);o.length!=0?localStorage.setItem("favoritesCard",JSON.stringify(o)):localStorage.removeItem("favoritesCard"),C()},C=()=>{const{_id:e}=c;let t=localStorage.getItem("favoritesCard");a.removeEventListener("click",d),a.addEventListener("click",l),a.innerHTML="Add to favorites",t!=null&&JSON.parse(t).forEach(o=>{o._id==e?(a.innerHTML="Delete favorite",a.removeEventListener("click",l),a.addEventListener("click",d)):(a.removeEventListener("click",d),a.addEventListener("click",l),a.innerHTML="Add to favorites",a.appendChild(T))})},T=document.createElementNS("http://www.w3.org/2000/svg","svg");T.setAttribute("class","heart");const P=document.createElementNS("http://www.w3.org/2000/svg","use");P.setAttribute("href","./img/sprite.svg#heart");T.appendChild(P);const Y=document.querySelector(".quote-info"),F="quote-of-the-day",L="date",W=new Date,h=W.getDate();async function X(){try{const o=(await I.create({baseURL:"https://energyflow.b.goit.study/api"}).get("/quote")).data;R(o),Z(o,h)}catch(e){w.error({timeout:5e3,title:"Error",message:e.message,position:"topRight"})}}//! SAVE QUOTE AND DATA
function Z(e,t){localStorage.setItem(F,JSON.stringify(e)),localStorage.setItem(L,t)}//! RENDER QUOTE
function R(e){const t=[e];Y.innerHTML=t.reduce((o,{quote:i,author:s})=>o+`<p class="quote-text">${i}</p>
        <h3 class="quote-author">${s}</h3>`,"")}//! CHECK DAY AND GET NEW QUOTE
async function ee(){const e=localStorage.getItem(L);if(isNaN(e)){w.error({timeout:5e3,title:"Error",message:error.message,position:"topRight"});return}if(parseInt(e)===h){const t=localStorage.getItem(F);if(t){const o=JSON.parse(t);R(o)}return}await X(),localStorage.setItem(L,h.toString())}ee();//! ANIMATION 
new M(".quote-info",{speed:26,startDelay:300,waitUntilVisible:!0,afterComplete:function(e){e.destroy()}}).go();new M("#motivation-txt",{speed:26,startDelay:300,waitUntilVisible:!0,afterComplete:function(e){e.destroy()}}).go();const te=100,E=document.querySelector(".skroll-btn"),oe=()=>window.scrollY||document.documentElement.scrollTop;window.addEventListener("scroll",()=>{oe()>te?E.classList.add("skroll-btn-active"):E.classList.remove("skroll-btn-active")});E.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});export{G as a};
//# sourceMappingURL=skroll-btn-c59c125f.js.map
