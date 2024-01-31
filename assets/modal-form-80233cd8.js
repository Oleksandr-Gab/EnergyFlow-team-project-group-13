import{T as C,i as w,a as O}from"./vendor-29bef8ec.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function o(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(s){if(s.ep)return;s.ep=!0;const n=o(s);fetch(s.href,n)}})();const E=document.querySelector("[data-menu-open]"),q=document.querySelector("[data-menu-close]"),I=document.querySelector(".nav"),_=document.querySelector('[data-action="homepage"]'),H=document.querySelector('[data-action="favoritespage"]'),b=document.querySelector(".menu-back-drop"),x=document.body,J=document.querySelector(".header"),Q=window.location.href;Q.includes("favorite")&&(_.classList.remove("current"),H.classList.add("current"),J.style.position="static");document.addEventListener("keydown",e=>{e.key==="Escape"&&B()});q.addEventListener("click",B);E.addEventListener("click",()=>{I.classList.add("active"),E.classList.add("is-hidden"),q.classList.remove("is-hidden"),x.classList.add("lock"),b.classList.add("active")});function B(){I.classList.remove("active"),E.classList.remove("is-hidden"),q.classList.add("is-hidden"),x.classList.remove("lock"),b.classList.remove("active")}b.addEventListener("click",V);function V(e){e.target.classList.contains("menu-back-drop")&&B()}const G=document.querySelector(".quote-info"),A="quote-of-the-day",h="date",K=new Date,k=K.getDate();async function z(){try{const o=(await O.create({baseURL:"https://energyflow.b.goit.study/api"}).get("/quote")).data;$(o),Y(o,k)}catch(e){w.error({timeout:5e3,title:"Error",message:e.message,position:"topRight"})}}//! SAVE QUOTE AND DATA
function Y(e,t){localStorage.setItem(A,JSON.stringify(e)),localStorage.setItem(h,t)}//! RENDER QUOTE
function $(e){const t=[e];G.innerHTML=t.reduce((o,{quote:r,author:s})=>o+`<p class="quote-text">${r}</p>
        <h3 class="quote-author">${s}</h3>`,"")}//! CHECK DAY AND GET NEW QUOTE
async function W(){const e=localStorage.getItem(h);if(isNaN(e)){w.error({timeout:5e3,title:"Error",message:error.message,position:"topRight"});return}if(parseInt(e)===k){const t=localStorage.getItem(A);if(t){const o=JSON.parse(t);$(o)}return}await z(),localStorage.setItem(h,k.toString())}W();//! ANIMATION 
new C("#quote",{speed:26,startDelay:300,waitUntilVisible:!0,afterComplete:function(e){e.destroy()}}).go();new C("#motivation-txt",{speed:26,startDelay:300,waitUntilVisible:!0,afterComplete:function(e){e.destroy()}}).go();const X=100,S=document.querySelector(".skroll-btn"),Z=()=>window.scrollY||document.documentElement.scrollTop;window.addEventListener("scroll",()=>{Z()>X?S.classList.add("skroll-btn-active"):S.classList.remove("skroll-btn-active")});S.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});document.addEventListener("DOMContentLoaded",()=>{te()});const T=document.getElementById("exerciseModal"),N=document.getElementById("closeModalBtn"),P=document.getElementById("information"),a=document.getElementById("addToFavoritesBtn");let D,l;async function ee(e){try{l=(await O.create({baseURL:"https://energyflow.b.goit.study/api/exercises"}).get(e)).data,oe(l)}catch{w.error({title:"Error",message:"Error fetching exercise data: ",position:"topRight"})}}const te=()=>{D=document.querySelectorAll(".workout-btn-container"),D.forEach(e=>{e.addEventListener("click",t=>{t.preventDefault();let o=t.target.id;ee(o)})})};async function oe(e){const{bodyPart:t,burnedCalories:o,description:r,equipment:s,gifUrl:n,name:c,popularity:p,rating:v,target:g,time:y}=e,L=`

        <div class="gif">
        <img src="${n}" alt="${c}" >
        </div>

        <div class = "text">

        <h2>${c}</h2>
        
        <div class="rating-container">
            <p>${v}</p>
            <svg class="icon-star" width="12" height="12">
                <use href="../img/sprite.svg#icon-star"></use>
            </svg>
        </div>

        <ul class="info-block">
    <li class="info-item">
        <span class="info-text">Target</span> ${g}
    </li>
    <li class="info-item">
        <span class="info-text">Body Part</span> ${t}
    </li>
    <li class="info-item">
        <span class="info-text">Equipment</span> ${s}
    </li>
    <li class="info-item">
        <span class="info-text">Popular</span> ${p}
    </li>
    <li class="info-item">
        <span class="info-text">Burned Calories</span> ${o}/${y}min
    </li>
</ul>


        <p class="description">Description: ${r}</p> 
        </div>`;P.innerHTML=L,await M(),se()}function se(){T.classList.add("open"),document.body.style.overflow="hidden",N.addEventListener("click",m),document.addEventListener("mouseup",R),document.addEventListener("keydown",F)}function m(){T.classList.remove("open"),N.removeEventListener("click",m),document.removeEventListener("mouseup",R),document.removeEventListener("keydown",F),P.innerHTML="",document.body.style.overflow="",a.removeEventListener("click",d),a.removeEventListener("click",u)}const R=function(e){!document.getElementById("modal").contains(e.target)&&T.classList.contains("open")&&m()},F=function(e){e.key==="Escape"&&m()},ne=e=>{const{_id:t,bodyPart:o,burnedCalories:r,description:s,equipment:n,gifUrl:c,name:p,popularity:v,rating:g,target:y,time:L}=e;return{_id:t,bodyPart:o,burnedCalories:r,description:s,equipment:n,gifUrl:c,name:p,popularity:v,rating:g,target:y,time:L}},d=()=>{let e=localStorage.getItem("favoritesCard"),t=[];e!=null&&(t=JSON.parse(e));const o=ne(l);t.push(o),localStorage.setItem("favoritesCard",JSON.stringify(t)),M()},u=()=>{const{_id:e}=l;let t=localStorage.getItem("favoritesCard"),o=JSON.parse(t).filter(r=>r._id!=e);localStorage.setItem("favoritesCard",JSON.stringify(o)),M()},M=()=>{const{_id:e}=l;let t=localStorage.getItem("favoritesCard");a.removeEventListener("click",u),a.addEventListener("click",d),a.innerHTML="Add to favorites",t!=null&&JSON.parse(t).forEach(o=>{o._id==e?(a.innerHTML="Delete favorite",a.removeEventListener("click",d),a.addEventListener("click",u)):(a.removeEventListener("click",u),a.addEventListener("click",d),a.innerHTML="Add to favorites")})},i={modalBackdrop:document.querySelector(".js-backdrop-modal"),closeBtn:document.querySelector(".js-rating-close"),form:document.querySelector(".js-rating-form"),rateStars:document.querySelector(".js-stars-list"),rateValue:document.querySelector(".js-rating-data"),star:document.querySelectorAll(".js-rating-star")};let j=0;window.addEventListener("click",f);document.addEventListener("keydown",re);i.closeBtn.addEventListener("click",ae);i.form.addEventListener("submit",U);i.rateStars.addEventListener("click",ie);function f(e){e.target.classList.contains("backdrop")&&(i.modalBackdrop.classList.remove("is-hidden"),window.removeEventListener("click",f))}function ae(e){e.currentTarget&&(i.modalBackdrop.classList.add("is-hidden"),window.removeEventListener("click",f))}function re(e){e.code==="Escape"&&(i.modalBackdrop.classList.add("is-hidden"),window.removeEventListener("click",f))}function ie(e){let t=e.target,o=i.rateStars.querySelector(".star-active");t.classList.add("star-active"),o&&o.classList.remove("star-active"),setTimeout(()=>{i.rateValue.textContent=`${t.dataset.rate}.0`},0),j=t.dataset.rate}function U(e){e.preventDefault(),console.log({rating:j,email:e.target.elements.email.value,comment:e.target.elements.comment.value}),i.modalBackdrop.classList.remove("is-hidden"),i.form.removeEventListener("submit",U)}export{te as a};
//# sourceMappingURL=modal-form-80233cd8.js.map
