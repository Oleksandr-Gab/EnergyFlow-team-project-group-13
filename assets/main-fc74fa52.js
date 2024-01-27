import{a as l,i as p}from"./vendor-8cce9181.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function r(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(s){if(s.ep)return;s.ep=!0;const a=r(s);fetch(s.href,a)}})();const g=document.querySelector("[data-menu-open]"),v=document.querySelector("[data-menu-close]"),L=document.querySelector(".nav"),q=document.querySelector('[data-action="homepage"]'),T=document.querySelector('[data-action="favoritespage"]'),y=document.querySelector(".menu-back-drop"),S=document.body,B=window.location.pathname;B.includes("/index.html")||(q.classList.remove("current"),T.classList.add("current"));document.addEventListener("keydown",e=>{e.key==="Escape"&&h()});v.addEventListener("click",h);g.addEventListener("click",()=>{L.classList.add("active"),g.classList.add("is-hidden"),v.classList.remove("is-hidden"),S.classList.add("lock"),y.classList.add("active")});function h(){L.classList.remove("active"),g.classList.remove("is-hidden"),v.classList.add("is-hidden"),S.classList.remove("lock"),y.classList.remove("active")}y.addEventListener("click",$);function $(e){e.target.classList.contains("menu-back-drop")&&h()}const x=document.querySelector(".quote-info");async function M(){try{const t=await l.create({baseURL:"https://energyflow.b.goit.study/api"}).get("/quote");O(t.data)}catch(e){console.error("SOMETHING WENT WRONG",e)}}//! RENDER QUOTE
function O(e){const t=[e];x.innerHTML=t.reduce((r,{quote:o,author:s})=>r+`<p class="quote-text">${o}</p>
        <h3 class="quote-author">${s}</h3>`,"")}M();let u;const P=document.querySelector(".filter-list");let m;const E=document.querySelector(".gallery"),R=document.querySelector('button[name="Muscles"]');R.disabled=!1;P.addEventListener("click",e=>{E.innerHTML="",e.target.tagName==="BUTTON"&&(m=e.target.name,console.log(m),A(m))});async function A(e){u=await l.create({baseURL:"https://energyflow.b.goit.study/api",params:{filter:e,page:"1",limit:"12"}}).get("/filters"),console.log(u);const r=u.data.results.reduce((o,{name:s,filter:a,imgUrl:n})=>o+`<li class="gallery-item">
           <div class="card">
            <a class="gallery-link" href="${n}">
             <img class="gallery-image"
             src="${n}"
             alt="${a}"
             />
            </a>
            </div>
            <div class="card-description">
            <p class="name-description">${s}</p>
            <p class="filter-description">${a}</p>
            </div>
          </li>`,"");E.insertAdjacentHTML("beforeend",r)}const I=8,f=document.querySelector(".Gallery"),i=new URL("https://energyflow.b.goit.study/api/exercises?"),N=async e=>(await l.get(e)).data;f.addEventListener("click",e=>{e.preventDefault(),f.classList.add("information-cards"),i.searchParams.append("limit",I),i.searchParams.append("page",1),i.searchParams.append("name","?"),N(i).then(t=>{console.log(t),j(t.results)}).catch(t=>{p.error({message:"Sorry. Please try again!",position:"topRight"})})});function j(e){f.insertAdjacentHTML("afterbegin",e.reduce((t,{burnedCalories:r,name:o,bodyPart:s,rating:a,time:n,target:k})=>t+`<li class="gallery-card">
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
            <li class="target"><span class="params-text">Target:</span> ${k}</li>
      </ul>
    </li>`,""))}const U=document.querySelector(".footer-form"),C=document.querySelector(".footer-form-input"),D="https://energyflow.b.goit.study/api/subscription";U.addEventListener("submit",H);async function H(e){e.preventDefault();const t=e.currentTarget.elements.footerInput.value.trim();try{const r=await l.post(D,{email:t});if(r.status>=200&&r.status<300){const o=r.data.message;p.success({title:"OK",message:o,color:"white",position:"center"})}else throw new Error}catch(r){p.error({title:"Error",message:r.response.data.message,position:"center",backgroundColor:"gray"})}finally{C.value=""}}const c={modalBackdrop:document.querySelector(".js-backdrop-modal"),closeBtn:document.querySelector(".js-rating-close"),form:document.querySelector(".js-rating-form"),rateStars:document.querySelector(".js-stars-list"),rateValue:document.querySelector(".js-rating-data"),star:document.querySelectorAll(".js-rating-star")};let b=0;window.addEventListener("click",d);document.addEventListener("keydown",G);c.closeBtn.addEventListener("click",W);c.form.addEventListener("submit",w);c.rateStars.addEventListener("click",Q);function d(e){e.target.classList.contains("backdrop")&&(c.modalBackdrop.classList.remove("is-hidden"),window.removeEventListener("click",d))}function W(e){e.currentTarget&&(c.modalBackdrop.classList.add("is-hidden"),window.removeEventListener("click",d))}function G(e){e.code==="Escape"&&(c.modalBackdrop.classList.add("is-hidden"),window.removeEventListener("click",d))}function Q(e){let t=e.target,r=c.rateStars.querySelector(".star-active");t.classList.add("star-active"),r&&r.classList.remove("star-active"),setTimeout(()=>{c.rateValue.textContent=`${t.dataset.rate}.0`},0),b=t.dataset.rate}function w(e){e.preventDefault(),console.log({rating:b,email:e.target.elements.email.value,comment:e.target.elements.comment.value}),c.modalBackdrop.classList.remove("is-hidden"),c.form.removeEventListener("submit",w)}
//# sourceMappingURL=main-fc74fa52.js.map
