import{a as $,i as J}from"./vendor-8857fa14.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();const p=document.querySelector("[data-menu-open]"),h=document.querySelector("[data-menu-close]"),T=document.querySelector(".nav"),K=document.querySelector('[data-action="homepage"]'),z=document.querySelector('[data-action="favoritespage"]'),E=document.querySelector(".menu-back-drop"),x=document.body,V=document.querySelector(".header"),Y=window.location.href;Y.includes("favorite")&&(K.classList.remove("current"),z.classList.add("current"),V.style.position="static");document.addEventListener("keydown",e=>{e.key==="Escape"&&k()});h.addEventListener("click",k);p.addEventListener("click",()=>{T.classList.add("active"),p.classList.add("is-hidden"),h.classList.remove("is-hidden"),x.classList.add("lock"),E.classList.add("active")});function k(){T.classList.remove("active"),p.classList.remove("is-hidden"),h.classList.add("is-hidden"),x.classList.remove("lock"),E.classList.remove("active")}E.addEventListener("click",G);function G(e){e.target.classList.contains("menu-back-drop")&&k()}const I="/assets/sprite-aea79390.svg",Q=document.getElementById("giveRatingBtn"),O=document.querySelector(".js-backdrop-modal"),F=document.querySelector(".js-rating-close"),a=document.querySelector(".js-rating-form"),B=document.querySelector(".js-rating-data"),P=document.querySelector(".js-stars-list");document.querySelector(".js-raiting-submit");const W=$.create({baseURL:"https://energyflow.b.goit.study/api/exercises/"});function X(){d(),O.classList.add("is-open"),document.body.style.overflow="hidden",F.addEventListener("click",b),a.addEventListener("submit",N),P.addEventListener("click",j)}function b(){O.classList.remove("is-open"),F.removeEventListener("click",b),a.removeEventListener("submit",N),P.removeEventListener("click",j),_(l)}const Z=()=>{Q.addEventListener("click",X)};function j(e){const t=a.elements.rating.value;t?B.innerHTML=t+".0":B.innerHTML="0.0"}async function N(e){e.preventDefault();const t=l._id,n=Number(a.elements.rating.value),i=a.elements.email.value.trim(),o=a.elements.comment.value.trim();try{await W.patch(`/${t}/rating`,{rate:n,email:i,review:o}),a.reset(),b()}catch{}}const q=`<svg class="heart" width="32" height="32">
<use href="${I}#heart"></use>
</svg>`,S=document.getElementById("exerciseModal"),R=document.getElementById("closeModalBtn"),H=document.getElementById("information"),c=document.getElementById("addToFavoritesBtn");let C,l;const ee=$.create({baseURL:"https://energyflow.b.goit.study/api/exercises"});async function te(e){try{l=(await ee.get(e)).data,_(l)}catch{J.error({title:"Error",message:"Error fetching exercise data: ",position:"topRight"})}}const ce=()=>{C=document.querySelectorAll(".workout-btn-container"),C.forEach(e=>{e.addEventListener("click",t=>{t.preventDefault();let n=t.currentTarget.id;n&&(te(n),w(n))})})};async function _(e){const{bodyPart:t,burnedCalories:n,description:i,equipment:o,gifUrl:s,name:r,popularity:u,rating:m,target:v,time:f,_id:M}=e,A=`
        <div class="gif">
        <img src="${s}" alt="${r}" >
        </div>

        <div class = "text">

        <h2>${r}</h2>
        
        <div class="rating-container">
            <p>${m}</p>
            <svg class="icon-star" width="12" height="12">
                <use href="${I}#icon-star"></use>
            </svg>
        </div>

        <ul class="info-block">
    <li class="info-item">
        <h3 class="info-text">Target</h3>
        <p class="modal-pop-descr">${v}</p>
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
        <p class="modal-pop-descr">${n}/${f}min</p>
    </li>
</ul>


        <p class="description">Description: ${i}</p> 
        </div>`;H.insertAdjacentHTML("afterbegin",A),oe(),Z()}function oe(){S.classList.add("open"),document.body.style.overflow="hidden",R.addEventListener("click",d),document.addEventListener("mouseup",D),document.addEventListener("keydown",U)}function d(){S.classList.remove("open"),R.removeEventListener("click",d),document.removeEventListener("mouseup",D),document.removeEventListener("keydown",U),H.innerHTML="",document.body.style.overflow="",c.removeEventListener("click",g),c.removeEventListener("click",L)}const D=function(e){!document.getElementById("modal").contains(e.target)&&S.classList.contains("open")&&d()},U=function(e){e.key==="Escape"&&d()},ne=e=>{const{_id:t,bodyPart:n,burnedCalories:i,description:o,equipment:s,gifUrl:r,name:u,popularity:m,rating:v,target:f,time:M}=e;return{_id:t,bodyPart:n,burnedCalories:i,description:o,equipment:s,gifUrl:r,name:u,popularity:m,rating:v,target:f,time:M}},g=()=>{const{_id:e}=l;let t=localStorage.getItem("favoritesCard"),n=[];t!=null&&(n=JSON.parse(t));const i=ne(l);n.push(i),localStorage.setItem("favoritesCard",JSON.stringify(n)),w(e)},L=async()=>{const{_id:e}=l;let t=localStorage.getItem("favoritesCard"),n=JSON.parse(t).filter(i=>i._id!=e);n.length!=0?localStorage.setItem("favoritesCard",JSON.stringify(n)):localStorage.removeItem("favoritesCard"),w(e)},w=e=>{let t=localStorage.getItem("favoritesCard");c.addEventListener("click",g),c.removeEventListener("click",L),c.innerHTML=`Add to favorites ${q}`,t!=null&&JSON.parse(t).forEach(n=>{n._id==e&&(c.innerHTML=`Remove favorite ${q}`,c.removeEventListener("click",g),c.addEventListener("click",L))})},se=100,y=document.querySelector(".skroll-btn"),ie=()=>window.scrollY||document.documentElement.scrollTop;window.addEventListener("scroll",()=>{ie()>se?y.classList.add("skroll-btn-active"):y.classList.remove("skroll-btn-active")});y.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});export{ce as a,I as i};
//# sourceMappingURL=skroll-btn-861b523d.js.map
