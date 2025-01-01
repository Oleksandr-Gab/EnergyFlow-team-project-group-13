import{i as b,a as T}from"./vendor-8857fa14.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function s(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(o){if(o.ep)return;o.ep=!0;const n=s(o);fetch(o.href,n)}})();const g=document.querySelector("[data-menu-open]"),k=document.querySelector("[data-menu-close]"),I=document.querySelector(".nav"),K=document.querySelector('[data-action="homepage"]'),V=document.querySelector('[data-action="favoritespage"]'),E=document.querySelector(".menu-back-drop"),O=document.body,G=document.querySelector(".header"),Q=window.location.href;Q.includes("favorite")&&(K.classList.remove("current"),V.classList.add("current"),G.style.position="static");document.addEventListener("keydown",e=>{e.key==="Escape"&&S()});k.addEventListener("click",S);g.addEventListener("click",()=>{I.classList.add("active"),g.classList.add("is-hidden"),k.classList.remove("is-hidden"),O.classList.add("lock"),E.classList.add("active")});function S(){I.classList.remove("active"),g.classList.remove("is-hidden"),k.classList.add("is-hidden"),O.classList.remove("lock"),E.classList.remove("active")}E.addEventListener("click",W);function W(e){e.target.classList.contains("menu-back-drop")&&S()}const P="/assets/sprite-aea79390.svg";function X(e){b.success({position:"topCenter",icon:"icon-izi-toast",title:"OK!",titleSize:"20px",message:e,messageSize:"20px",titleColor:"7e847f",messageColor:"black",backgroundColor:"#a6b0b0bd",layout:1,theme:"light",timeout:5e3})}function d(e){b.error({position:"topCenter",icon:"icon-izi-toast",title:"Upps!",titleSize:"20px",message:e,messageSize:"20px",titleColor:"7e847f",messageColor:"black",backgroundColor:"#red",layout:1,theme:"light",timeout:5e3})}function F(e){b.info({position:"topCenter",icon:"icon-izi-toast",title:"",titleSize:"20px",message:e,messageSize:"20px",titleColor:"7e847f",messageColor:"black",backgroundColor:"#a6b0b0bd",layout:1,theme:"light",timeout:5e3})}const Z=document.getElementById("giveRatingBtn"),z=document.querySelector(".js-backdrop-modal"),R=document.querySelector(".js-rating-close"),c=document.querySelector(".js-rating-form"),B=document.querySelector(".js-rating-data"),j=document.querySelector(".js-stars-list");document.querySelector(".js-raiting-submit");const ee=T.create({baseURL:"https://energyflow.b.goit.study/api/exercises/"});function te(){u(),z.classList.add("is-open"),document.body.style.overflow="hidden",R.addEventListener("click",C),c.addEventListener("submit",H),j.addEventListener("click",N)}function C(){z.classList.remove("is-open"),R.removeEventListener("click",C),c.removeEventListener("submit",H),j.removeEventListener("click",N),D(l)}const oe=()=>{Z.addEventListener("click",te)};function N(e){const t=c.elements.rating.value;t?B.innerHTML=t+".0":B.innerHTML="0.0"}async function H(e){e.preventDefault();const t=l._id,s=Number(c.elements.rating.value),i=c.elements.email.value.trim(),o=c.elements.comment.value.trim(),n=/\S+@\S+\.\S+/;if(s===""){d("Please set your estimation!");return}if(i===""||!n.test(i)){d("Please enter your email!");return}if(o===""){d("Please enter your review!");return}try{await ee.patch(`/${t}/rating`,{rate:s,email:i,review:o}),X("Thank you! Your opinion really important for us!"),c.reset(),C()}catch(r){d(r.message)}}const q=`<svg class="heart" width="32" height="32">
<use href="${P}#heart"></use>
</svg>`,w=document.getElementById("exerciseModal"),U=document.getElementById("closeModalBtn"),_=document.getElementById("information"),a=document.getElementById("addToFavoritesBtn");let $,l;const se=T.create({baseURL:"https://energyflow.b.goit.study/api/exercises"});async function ne(e){try{l=(await se.get(e)).data,D(l)}catch(t){d(t.message)}}const de=()=>{$=document.querySelectorAll(".workout-btn-container"),$.forEach(e=>{e.addEventListener("click",t=>{t.preventDefault();let s=t.currentTarget.id;s&&(ne(s),M(s))})})};async function D(e){const{bodyPart:t,burnedCalories:s,description:i,equipment:o,gifUrl:n,name:r,popularity:m,rating:f,target:p,time:v,_id:x}=e,Y=`
        <div class="gif">
        <img src="${n}" alt="${r}" >
        </div>

        <div class = "text">

        <h2>${r}</h2>
        
        <div class="rating-container">
            <p>${f}</p>
            <svg class="icon-star" width="12" height="12">
                <use href="${P}#icon-star"></use>
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


        <p class="description">Description: ${i}</p> 
        </div>`;_.insertAdjacentHTML("afterbegin",Y),ie(),oe()}function ie(){w.classList.add("open"),document.body.style.overflow="hidden",U.addEventListener("click",u),document.addEventListener("mouseup",A),document.addEventListener("keydown",J)}function u(){w.classList.remove("open"),U.removeEventListener("click",u),document.removeEventListener("mouseup",A),document.removeEventListener("keydown",J),_.innerHTML="",document.body.style.overflow="",a.removeEventListener("click",y),a.removeEventListener("click",L)}const A=function(e){!document.getElementById("modal").contains(e.target)&&w.classList.contains("open")&&u()},J=function(e){e.key==="Escape"&&u()},re=e=>{const{_id:t,bodyPart:s,burnedCalories:i,description:o,equipment:n,gifUrl:r,name:m,popularity:f,rating:p,target:v,time:x}=e;return{_id:t,bodyPart:s,burnedCalories:i,description:o,equipment:n,gifUrl:r,name:m,popularity:f,rating:p,target:v,time:x}},y=()=>{const{_id:e}=l;let t=localStorage.getItem("favoritesCard"),s=[];t!=null&&(s=JSON.parse(t));const i=re(l);s.push(i),localStorage.setItem("favoritesCard",JSON.stringify(s)),M(e),F("Your exercise has been added to your favorites")},L=async()=>{const{_id:e}=l;let t=localStorage.getItem("favoritesCard"),s=JSON.parse(t).filter(i=>i._id!=e);s.length!=0?localStorage.setItem("favoritesCard",JSON.stringify(s)):localStorage.removeItem("favoritesCard"),M(e),F("Your exercise has been removed from your favorites")},M=e=>{let t=localStorage.getItem("favoritesCard");a.addEventListener("click",y),a.removeEventListener("click",L),a.innerHTML=`Add to favorites ${q}`,t!=null&&JSON.parse(t).forEach(s=>{s._id==e&&(a.innerHTML=`Remove favorite ${q}`,a.removeEventListener("click",y),a.addEventListener("click",L))})},ae=100,h=document.querySelector(".skroll-btn"),ce=()=>window.scrollY||document.documentElement.scrollTop;window.addEventListener("scroll",()=>{ce()>ae?h.classList.add("skroll-btn-active"):h.classList.remove("skroll-btn-active")});h.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});export{de as a,d as e,P as i,F as m,X as s};
//# sourceMappingURL=skroll-btn-786c1fbf.js.map
