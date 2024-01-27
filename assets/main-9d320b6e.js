import{a as l,i as p}from"./vendor-8cce9181.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function r(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(s){if(s.ep)return;s.ep=!0;const o=r(s);fetch(s.href,o)}})();const f=document.querySelector("[data-menu-open]"),y=document.querySelector("[data-menu-close]"),w=document.querySelector(".nav"),B=document.querySelector('[data-action="homepage"]'),$=document.querySelector('[data-action="favoritespage"]'),L=document.querySelector(".menu-back-drop"),E=document.body,S=window.location.href;console.log(S);S.includes("favorite")&&(B.classList.remove("current"),$.classList.add("current"));document.addEventListener("keydown",e=>{e.key==="Escape"&&h()});y.addEventListener("click",h);f.addEventListener("click",()=>{w.classList.add("active"),f.classList.add("is-hidden"),y.classList.remove("is-hidden"),E.classList.add("lock"),L.classList.add("active")});function h(){w.classList.remove("active"),f.classList.remove("is-hidden"),y.classList.add("is-hidden"),E.classList.remove("lock"),L.classList.remove("active")}L.addEventListener("click",M);function M(e){e.target.classList.contains("menu-back-drop")&&h()}const O=document.querySelector(".quote-info");async function P(){try{const t=await l.create({baseURL:"https://energyflow.b.goit.study/api"}).get("/quote");R(t.data)}catch(e){console.error("SOMETHING WENT WRONG",e)}}//! RENDER QUOTE
function R(e){const t=[e];O.innerHTML=t.reduce((r,{quote:a,author:s})=>r+`<p class="quote-text">${a}</p>
        <h3 class="quote-author">${s}</h3>`,"")}P();let u;const x=document.querySelector(".filter-list");let m;const b=document.querySelector(".gallery"),A=document.querySelector('button[name="Muscles"]');A.disabled=!1;x.addEventListener("click",e=>{b.innerHTML="",e.target.tagName==="BUTTON"&&(m=e.target.name,console.log(m),I(m))});async function I(e){u=await l.create({baseURL:"https://energyflow.b.goit.study/api",params:{filter:e,page:"1",limit:"12"}}).get("/filters"),console.log(u);const r=u.data.results.reduce((a,{name:s,filter:o,imgUrl:n})=>a+`<li class="gallery-item">
           <div class="card">
            <a class="gallery-link" href="${n}">
             <img class="gallery-image"
             src="${n}"
             alt="${o}"
             />
            </a>
            </div>
            <div class="card-description">
            <p class="name-description">${s}</p>
            <p class="filter-description">${o}</p>
            </div>
          </li>`,"");b.insertAdjacentHTML("beforeend",r)}const N=8,g=document.querySelector(".gallery"),i=new URL("https://energyflow.b.goit.study/api/exercises?"),U=async e=>(await l.get(e)).data;g.addEventListener("click",e=>{e.preventDefault(),g.classList.add("information-cards"),i.searchParams.append("limit",N),i.searchParams.append("page",1),i.searchParams.append("name","?"),U(i).then(t=>{console.log(t),j(t.results)}).catch(t=>{p.error({message:"Sorry. Please try again!",position:"topRight"})})});function j(e){g.insertAdjacentHTML("afterbegin",e.reduce((t,{burnedCalories:r,name:a,bodyPart:s,rating:o,time:n,target:T})=>t+`<li class="gallery-card">
      <div class="header-card">
        <div class="workout">WORKOUT</div>
        <div class="rating">
            <p>${o}</p>
            <svg class="icon-star" width="12" height="12">
                <use href="../img/sprite.svg#icon-star"></use>
            </svg>
        </div>
                 
        <div class="workout-btn-container">
            <button class="workout-btn">Start</button>
            <svg class="icon-right" width="14" height="16">
                <use href="../img/sprite.svg#icon-right"></use>
            </svg>
        </div>
      </div>

      <div class="title-card">
          <div class="icon-card">
              <svg class="run" width="24" height="24">
                  <use href="../img/sprite.svg#run"></use>
              </svg>
          </div>
          <h3>${a}</h3>
      </div>

      <ul class="params-card">
            <li class="calories"><span class="params-text">Burned calories:</span> ${r}/${n}min</li>
            <li class="body-part"><span class="params-text">Body part:</span> ${s}</li>
            <li class="target"><span class="params-text">Target:</span> ${T}</li>
      </ul>
    </li>`,""))}const C=document.querySelector(".footer-form"),D=document.querySelector(".footer-form-input"),H="https://energyflow.b.goit.study/api/subscription";C.addEventListener("submit",W);async function W(e){e.preventDefault();const t=e.currentTarget.elements.footerInput.value.trim();try{const r=await l.post(H,{email:t});if(r.status>=200&&r.status<300){const a=r.data.message;p.success({title:"OK",message:a,color:"white",position:"center"})}else throw new Error}catch(r){p.error({title:"Error",message:r.response.data.message,position:"center",backgroundColor:"gray"})}finally{D.value=""}}const Q=100,v=document.querySelector(".skroll-btn"),G=()=>window.scrollY||document.documentElement.scrollTop;window.addEventListener("scroll",()=>{G()>Q?v.classList.add("skroll-btn-active"):v.classList.remove("skroll-btn-active")});v.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});const c={modalBackdrop:document.querySelector(".js-backdrop-modal"),closeBtn:document.querySelector(".js-rating-close"),form:document.querySelector(".js-rating-form"),rateStars:document.querySelector(".js-stars-list"),rateValue:document.querySelector(".js-rating-data"),star:document.querySelectorAll(".js-rating-star")};let k=0;window.addEventListener("click",d);document.addEventListener("keydown",V);c.closeBtn.addEventListener("click",K);c.form.addEventListener("submit",q);c.rateStars.addEventListener("click",_);function d(e){e.target.classList.contains("backdrop")&&(c.modalBackdrop.classList.remove("is-hidden"),window.removeEventListener("click",d))}function K(e){e.currentTarget&&(c.modalBackdrop.classList.add("is-hidden"),window.removeEventListener("click",d))}function V(e){e.code==="Escape"&&(c.modalBackdrop.classList.add("is-hidden"),window.removeEventListener("click",d))}function _(e){let t=e.target,r=c.rateStars.querySelector(".star-active");t.classList.add("star-active"),r&&r.classList.remove("star-active"),setTimeout(()=>{c.rateValue.textContent=`${t.dataset.rate}.0`},0),k=t.dataset.rate}function q(e){e.preventDefault(),console.log({rating:k,email:e.target.elements.email.value,comment:e.target.elements.comment.value}),c.modalBackdrop.classList.remove("is-hidden"),c.form.removeEventListener("submit",q)}
//# sourceMappingURL=main-9d320b6e.js.map
