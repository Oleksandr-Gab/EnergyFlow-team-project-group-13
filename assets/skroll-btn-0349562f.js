import{i as E,a as O}from"./vendor-8857fa14.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();const y=document.querySelector("[data-menu-open]"),S=document.querySelector("[data-menu-close]"),P=document.querySelector(".nav"),Z=document.querySelector('[data-action="homepage"]'),G=document.querySelector('[data-action="favoritespage"]'),w=document.querySelector(".menu-back-drop"),F=document.body,Q=document.querySelector(".header"),W=window.location.href;W.includes("favorite")&&(Z.classList.remove("current"),G.classList.add("current"),Q.style.position="static");document.addEventListener("keydown",e=>{e.key==="Escape"&&C()});S.addEventListener("click",C);y.addEventListener("click",()=>{P.classList.add("active"),y.classList.add("is-hidden"),S.classList.remove("is-hidden"),F.classList.add("lock"),w.classList.add("active")});function C(){P.classList.remove("active"),y.classList.remove("is-hidden"),S.classList.add("is-hidden"),F.classList.remove("lock"),w.classList.remove("active")}w.addEventListener("click",X);function X(e){e.target.classList.contains("menu-back-drop")&&C()}const z="/assets/sprite-aea79390.svg";function ee(e){E.success({position:"topCenter",icon:"icon-izi-toast",title:"OK!",titleSize:"20px",message:e,messageSize:"20px",titleColor:"7e847f",messageColor:"black",backgroundColor:"#a6b0b0bd",layout:1,theme:"light",timeout:5e3})}function M(e){E.error({position:"topCenter",icon:"icon-izi-toast",title:"Upps!",titleSize:"20px",message:e,messageSize:"20px",titleColor:"7e847f",messageColor:"black",backgroundColor:"#red",layout:1,theme:"light",timeout:5e3})}function m(e){E.info({position:"topCenter",icon:"icon-izi-toast",title:"",titleSize:"20px",message:e,messageSize:"20px",titleColor:"7e847f",messageColor:"black",backgroundColor:"#a6b0b0bd",layout:1,theme:"light",timeout:5e3})}const te=e=>{if(e===""){m("Please enter your email!");return}const t=/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;if(!t.test(e)){M("Please give us a valid email.");return}return t.test(e)},oe=document.getElementById("giveRatingBtn"),x=document.querySelector(".js-backdrop-modal"),R=document.querySelector(".js-rating-close"),c=document.querySelector(".js-rating-form"),L=document.querySelector(".js-rating-data"),j=document.querySelector(".js-stars-list");document.querySelector(".js-raiting-submit");const ne=O.create({baseURL:"https://energyflow.b.goit.study/api/exercises/"});function se(){u(),x.classList.add("is-open"),document.body.style.overflow="hidden",R.addEventListener("click",d),c.addEventListener("submit",_),j.addEventListener("click",U),document.addEventListener("mouseup",H),document.addEventListener("keydown",N)}function d(){x.classList.remove("is-open"),R.removeEventListener("click",d),c.removeEventListener("submit",_),j.removeEventListener("click",U),document.removeEventListener("mouseup",H),document.removeEventListener("keydown",N),c.reset(),L.innerHTML="0.0",J(l)}const H=function(e){!document.querySelector(".rating-modal-wrapper").contains(e.target)&&x.classList.contains("is-open")&&d()},N=function(e){e.key==="Escape"&&d()},ie=()=>{oe.addEventListener("click",se)};function U(e){const t=c.elements.rating.value;t?L.innerHTML=t+".0":L.innerHTML="0.0"}async function _(e){e.preventDefault();const t=l._id,n=Number(c.elements.rating.value),i=c.elements.email.value.trim(),o=c.elements.comment.value.trim();if(te(i)){if(n==0||o===""){m("Fill in the fields");return}try{await ne.patch(`/${t}/rating`,{rate:n,email:i,review:o}),ee("Thank you! Your opinion really important for us!"),c.reset(),d()}catch(s){M(s.message)}}}const T=`<svg class="heart" width="32" height="32">
<use href="${z}#heart"></use>
</svg>`,B=document.getElementById("exerciseModal"),A=document.getElementById("closeModalBtn"),D=document.getElementById("information"),a=document.getElementById("addToFavoritesBtn");let I,l;const re=O.create({baseURL:"https://energyflow.b.goit.study/api/exercises"});async function ae(e){try{l=(await re.get(e)).data,J(l)}catch(t){M(t.message)}}const fe=()=>{I=document.querySelectorAll(".workout-btn-container"),I.forEach(e=>{e.addEventListener("click",t=>{t.preventDefault();let n=t.currentTarget.id;n&&(ae(n),$(n))})})};async function J(e){const{bodyPart:t,burnedCalories:n,description:i,equipment:o,gifUrl:s,name:r,popularity:f,rating:p,target:v,time:g,_id:q}=e,V=`
        <div class="gif">
        <img src="${s}" alt="${r}" >
        </div>

        <div class = "text">

        <h2>${r}</h2>
        
        <div class="rating-container">
            <p>${p}</p>
            <svg class="icon-star" width="12" height="12">
                <use href="${z}#icon-star"></use>
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
        <p class="modal-pop-descr">${f}</p>
    </li>
    <li class="info-item">
        <h3 class="info-text">Burned Calories</h3>
        <p class="modal-pop-descr">${n}/${g}min</p>
    </li>
</ul>


        <p class="description">Description: ${i}</p> 
        </div>`;D.insertAdjacentHTML("afterbegin",V),ce(),ie()}function ce(){B.classList.add("open"),document.body.style.overflow="hidden",A.addEventListener("click",u),document.addEventListener("mouseup",K),document.addEventListener("keydown",Y)}function u(){B.classList.remove("open"),A.removeEventListener("click",u),document.removeEventListener("mouseup",K),document.removeEventListener("keydown",Y),D.innerHTML="",document.body.style.overflow="",a.removeEventListener("click",h),a.removeEventListener("click",b)}const K=function(e){!document.getElementById("modal").contains(e.target)&&B.classList.contains("open")&&u()},Y=function(e){e.key==="Escape"&&u()},le=e=>{const{_id:t,bodyPart:n,burnedCalories:i,description:o,equipment:s,gifUrl:r,name:f,popularity:p,rating:v,target:g,time:q}=e;return{_id:t,bodyPart:n,burnedCalories:i,description:o,equipment:s,gifUrl:r,name:f,popularity:p,rating:v,target:g,time:q}},h=()=>{const{_id:e}=l;let t=localStorage.getItem("favoritesCard"),n=[];t!=null&&(n=JSON.parse(t));const i=le(l);n.push(i),localStorage.setItem("favoritesCard",JSON.stringify(n)),$(e),m("Your exercise has been added to your favorites")},b=async()=>{const{_id:e}=l;let t=localStorage.getItem("favoritesCard"),n=JSON.parse(t).filter(i=>i._id!=e);n.length!=0?localStorage.setItem("favoritesCard",JSON.stringify(n)):localStorage.removeItem("favoritesCard"),$(e),m("Your exercise has been removed from your favorites")},$=e=>{let t=localStorage.getItem("favoritesCard");a.addEventListener("click",h),a.removeEventListener("click",b),a.innerHTML=`Add to favorites ${T}`,t!=null&&JSON.parse(t).forEach(n=>{n._id==e&&(a.innerHTML=`Remove favorite ${T}`,a.removeEventListener("click",h),a.addEventListener("click",b))})},de=100,k=document.querySelector(".skroll-btn"),ue=()=>window.scrollY||document.documentElement.scrollTop;window.addEventListener("scroll",()=>{ue()>de?k.classList.add("skroll-btn-active"):k.classList.remove("skroll-btn-active")});k.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});export{fe as a,M as e,z as i,ee as s,te as v};
//# sourceMappingURL=skroll-btn-0349562f.js.map
