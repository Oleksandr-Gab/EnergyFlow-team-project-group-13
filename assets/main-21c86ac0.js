import{a as d,i as p}from"./vendor-8cce9181.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function r(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(s){if(s.ep)return;s.ep=!0;const a=r(s);fetch(s.href,a)}})();const f=document.querySelector("[data-menu-open]"),v=document.querySelector("[data-menu-close]"),h=document.querySelector(".nav"),k=document.querySelector('[data-action="homepage"]'),q=document.querySelector('[data-action="favoritespage"]'),y=document.querySelector(".menu-back-drop"),S=document.body,T=window.location.pathname;T.includes("/index.html")||(k.classList.remove("current"),q.classList.add("current"));document.addEventListener("keydown",e=>{e.key==="Escape"&&L()});v.addEventListener("click",L);f.addEventListener("click",()=>{h.classList.add("active"),f.classList.add("is-hidden"),v.classList.remove("is-hidden"),S.classList.add("lock"),y.classList.add("active")});function L(){h.classList.remove("active"),f.classList.remove("is-hidden"),v.classList.add("is-hidden"),S.classList.remove("lock"),y.classList.remove("active")}y.addEventListener("click",B);function B(e){e.target.classList.contains("menu-back-drop")&&L()}const $=document.querySelector(".quote-info");async function x(){try{const t=await d.create({baseURL:"https://energyflow.b.goit.study/api"}).get("/quote");M(t.data)}catch(e){console.error("SOMETHING WENT WRONG",e)}}//! RENDER QUOTE
function M(e){const t=[e];$.innerHTML=t.reduce((r,{quote:o,author:s})=>r+`<p class="quote-text">${o}</p>
        <h3 class="quote-author">${s}</h3>`,"")}x();const O=document.querySelector(".FilterList");let m;const E=document.querySelector(".Gallery"),P=document.querySelector('button[name="Muscles"]');P.disabled=!1;O.addEventListener("click",e=>{E.innerHTML="",e.target.tagName==="BUTTON"&&(m=e.target.name,console.log(m),R(m))});async function R(e){const r=await d.create({baseURL:"https://energyflow.b.goit.study/api",params:{filter:e,page:"1",limit:"12"}}).get("/filters");console.log(r);const o=r.data.results.reduce((s,{name:a,filter:n,imgUrl:i})=>s+`<li class="GalleryItem">
           <div class="Card">
            <a class="GalleryLink" href="${i}">
             <img class="GalleryImage"
             src="${i}"
             alt="${n}"
             />
            </a>
            </div>
            <div class="CardDescription">
            <p class="NameDescription">${a}</p>
            <p class="FilterDescription">${n}</p>
            </div>
          </li>`,"");E.insertAdjacentHTML("beforeend",o)}const I=8,g=document.querySelector(".Gallery"),l=new URL("https://energyflow.b.goit.study/api/exercises?"),A=async e=>(await d.get(e)).data;g.addEventListener("click",e=>{e.preventDefault(),g.classList.add("information-cards"),l.searchParams.append("limit",I),l.searchParams.append("page",1),l.searchParams.append("name","?"),A(l).then(t=>{console.log(t),N(t.results)}).catch(t=>{p.error({message:"Sorry. Please try again!",position:"topRight"})})});function N(e){g.insertAdjacentHTML("afterbegin",e.reduce((t,{burnedCalories:r,name:o,bodyPart:s,rating:a,time:n,target:i})=>t+`<li class="gallery-card">
      <div class="header-card">
        <div class="workout">WORKOUT</div>
        <div class="rating">
            <p>${a}</p>
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
          <h3>${o}</h3>
      </div>

      <ul class="params-card">
            <li class="calories"><span class="params-text">Burned calories:</span> ${r}/${n}min</li>
            <li class="body-part"><span class="params-text">Body part:</span> ${s}</li>
            <li class="target"><span class="params-text">Target:</span> ${i}</li>
      </ul>
    </li>`,""))}const j=document.querySelector(".footer-form"),C=document.querySelector(".footer-form-input"),D="https://energyflow.b.goit.study/api/subscription";j.addEventListener("submit",G);async function G(e){e.preventDefault();const t=e.currentTarget.elements.footerInput.value.trim();try{const r=await d.post(D,{email:t});if(r.status>=200&&r.status<300){const o=r.data.message;p.success({title:"OK",message:o,color:"white",position:"center"})}else throw new Error}catch(r){p.error({title:"Error",message:r.response.data.message,position:"center",backgroundColor:"gray"})}finally{C.value=""}}const c={modalBackdrop:document.querySelector(".js-backdrop-modal"),closeBtn:document.querySelector(".js-rating-close"),form:document.querySelector(".js-rating-form"),rateStars:document.querySelector(".js-stars-list"),rateValue:document.querySelector(".js-rating-data"),star:document.querySelectorAll(".js-rating-star")};let b=0;window.addEventListener("click",u);document.addEventListener("keydown",H);c.closeBtn.addEventListener("click",U);c.form.addEventListener("submit",w);c.rateStars.addEventListener("click",W);function u(e){e.target.classList.contains("backdrop")&&(c.modalBackdrop.classList.remove("is-hidden"),window.removeEventListener("click",u))}function U(e){e.currentTarget&&(c.modalBackdrop.classList.add("is-hidden"),window.removeEventListener("click",u))}function H(e){e.code==="Escape"&&(c.modalBackdrop.classList.add("is-hidden"),window.removeEventListener("click",u))}function W(e){let t=e.target,r=c.rateStars.querySelector(".star-active");t.classList.add("star-active"),r&&r.classList.remove("star-active"),setTimeout(()=>{c.rateValue.textContent=`${t.dataset.rate}.0`},0),b=t.dataset.rate}function w(e){e.preventDefault(),console.log({rating:b,email:e.target.elements.email.value,comment:e.target.elements.comment.value}),c.modalBackdrop.classList.remove("is-hidden"),c.form.removeEventListener("submit",w)}
//# sourceMappingURL=main-21c86ac0.js.map
