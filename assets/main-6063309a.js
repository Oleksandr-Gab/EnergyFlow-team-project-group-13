import{a as d,i}from"./vendor-8cce9181.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function r(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(s){if(s.ep)return;s.ep=!0;const n=r(s);fetch(s.href,n)}})();const w=document.querySelector("[data-menu-open]"),b=document.querySelector("[data-menu-close]"),B=document.querySelector(".nav"),N=document.querySelector('[data-action="homepage"]'),j=document.querySelector('[data-action="favoritespage"]'),S=document.querySelector(".menu-back-drop"),$=document.body,T=window.location.href;console.log(T);T.includes("favorite")&&(N.classList.remove("current"),j.classList.add("current"));document.addEventListener("keydown",e=>{e.key==="Escape"&&q()});b.addEventListener("click",q);w.addEventListener("click",()=>{B.classList.add("active"),w.classList.add("is-hidden"),b.classList.remove("is-hidden"),$.classList.add("lock"),S.classList.add("active")});function q(){B.classList.remove("active"),w.classList.remove("is-hidden"),b.classList.add("is-hidden"),$.classList.remove("lock"),S.classList.remove("active")}S.addEventListener("click",D);function D(e){e.target.classList.contains("menu-back-drop")&&q()}const H=document.querySelector(".quote-info");async function F(){try{const t=await d.create({baseURL:"https://energyflow.b.goit.study/api"}).get("/quote");V(t.data)}catch(e){console.error("SOMETHING WENT WRONG",e)}}//! RENDER QUOTE
function V(e){const t=[e];H.innerHTML=t.reduce((r,{quote:o,author:s})=>r+`<p class="quote-text">${o}</p>
        <h3 class="quote-author">${s}</h3>`,"")}F();let h;const W=document.querySelector(".filter-list");let L;const M=document.querySelector(".gallery"),_=document.querySelector('button[name="Muscles"]');_.disabled=!1;W.addEventListener("click",e=>{M.innerHTML="",e.target.tagName==="BUTTON"&&(L=e.target.name,console.log(L),K(L))});async function K(e){h=await d.create({baseURL:"https://energyflow.b.goit.study/api",params:{filter:e,page:"1",limit:"12"}}).get("/filters"),console.log(h);const r=h.data.results.reduce((o,{name:s,filter:n,imgUrl:a})=>o+`<li class="gallery-item">
           <div class="card">
            <a class="gallery-link" href="${a}">
             <img class="gallery-image"
             src="${a}"
             alt="${n}"
             />
            </a>
            </div>
            <div class="card-description">
            <p class="name-description">${s}</p>
            <p class="filter-description">${n}</p>
            </div>
          </li>`,"");M.insertAdjacentHTML("beforeend",r)}const l=document.getElementById("exerciseModal"),P=document.getElementById("closeModalBtn");document.getElementById("addToFavoritesBtn");document.getElementById("giveRatingBtn");const Q=document.getElementById("information");function z(){l.classList.add("open"),P.addEventListener("click",g),l.addEventListener("click",I),document.addEventListener("keydown",x),G().then(e=>{const{gifUrl:t,name:r,rating:o,target:s,bodyPart:n,equipment:a,popularity:y,burnedCalories:v,description:U}=e;Q.innerHTML=`
            <img src="${t}" alt="${r}">
            <h2>${r}</h2>
            <p>Rating: ${o}</p>
            <p>Target: ${s}</p>
            <p>Body Part: ${n}</p>
            <p>Equipment: ${a}</p>
            <p>Popular: ${y}</p>
            <p>Burned Calories: ${v}</p>
            <p>Description: ${U}</p>
        `}).catch(e=>{i.error({title:"Error",message:"Sorry. Please try again!",position:"topRight"})})}function g(){l.classList.remove("open"),P.removeEventListener("click",g),l.removeEventListener("click",I),document.removeEventListener("keydown",x)}function I(e){e.target!==l&&g()}function x(e){e.key==="Escape"&&l.classList.contains("open")&&g()}async function G(e){return X(e)}async function X(e){const t=`https://energyflow.b.goit.study/api/exercises/${e}`;try{return(await d.get(t)).data}catch(r){throw i.error({title:"Error",message:"Error fetching exercise data: ",position:"topRight"}),r}}const Y=8,m=document.querySelector(".gallery"),u=new URL("https://energyflow.b.goit.study/api/exercises?"),Z=async e=>(await d.get(e)).data;m.addEventListener("click",e=>{e.preventDefault(),m.classList.add("information-cards"),u.searchParams.append("limit",Y),u.searchParams.append("page",1),u.searchParams.append("name","?"),Z(u).then(t=>{console.log(t),J(t.results)}).catch(t=>{i.error({message:"Sorry. Please try again!",position:"topRight"})})});function J(e){m.insertAdjacentHTML("afterbegin",e.reduce((t,{burnedCalories:r,name:o,bodyPart:s,rating:n,time:a,target:y,_id:v})=>t+`<li class="gallery-card" data-id="${v}">
      <div class="header-card">
        <div class="workout">WORKOUT</div>
        <div class="rating">
            <p>${n}</p>
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
            <li class="calories"><span class="params-text">Burned calories:</span> ${r}/${a}min</li>
            <li class="body-part"><span class="params-text">Body part:</span> ${s}</li>
            <li class="target"><span class="params-text">Target:</span> ${y}</li>
      </ul>
    </li>`,""))}m.addEventListener("click",e=>{e.preventDefault();const t=e.target.closest(".gallery-card");t&&(t.dataset.id,z())});const ee=document.querySelector(".search-block"),te=document.querySelector(".custom-pagination-btn"),E=document.querySelectorAll(".render-pagination-btn"),re=d.create({baseURL:"https://energyflow.b.goit.study/api/"}),se={fetchFilters:async e=>{try{return(await re.get("filters",{params:e})).data.results}catch(t){console.error(t),ne(t)}}},ne=e=>{throw i.error({title:"API Error",message:"An error occurred while fetching data from the API."}),e},oe=async e=>{try{return(await se.fetchFilters({...e})).map(ae).join("")}catch(t){return console.error(t),R(),""}},ae=e=>`<li class="render-page-one-item" data-name="${e.name}">
            <img src="${e.imgUrl}" alt="" />
            <div class="render-page-one-img-container">
              <p class="render-page-one-item-title">${e.name}</p>
              <p class="render-page-one-item-zones">${e.filter}</p>
            </div>
          </li>`,R=()=>{i.error({title:"Rendering Error",message:"An error occurred while rendering data."})},ce=async e=>{try{const t=await e;ee.innerHTML=t}catch(t){console.error(t),R()}},ie=e=>{const t=parseInt(e.dataset.btn)===3?1:-1;E.forEach(r=>{r.textContent=parseInt(r.textContent)+t}),E[0].style.display=p.page>1?"block":"none",E[2].style.display=p.page>=ue-1?"none":"block"},le=e=>{e.target.nodeName==="BUTTON"&&(p.page=parseInt(e.target.textContent),ce(oe(p)),ie(e.target))},de=getComputedStyle(document.querySelector("body")).width,A=de<768?8:12,p={limit:A,page:1},ue=69/A;te.addEventListener("click",le);const me=document.querySelector(".footer-form"),pe=document.querySelector(".footer-form-input"),ge="https://energyflow.b.goit.study/api/subscription";me.addEventListener("submit",fe);async function fe(e){e.preventDefault();const t=e.currentTarget.elements.footerInput.value.trim();if(!ye(t))return ve();try{const r=await d.post(ge,{email:t});if(r.status>=200&&r.status<300){const o=r.data.message;i.success({title:"OK",message:o,color:"white",position:"center"})}else throw new Error}catch(r){i.error({title:"Error",message:r.response.data.message,position:"center",backgroundColor:"gray"})}finally{pe.value=""}}const ye=e=>/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(e),ve=()=>{i.info({title:"",message:"Please give us a valid email.",color:"white",position:"center"})},he=100,k=document.querySelector(".skroll-btn"),Le=()=>window.scrollY||document.documentElement.scrollTop;window.addEventListener("scroll",()=>{Le()>he?k.classList.add("skroll-btn-active"):k.classList.remove("skroll-btn-active")});k.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});const c={modalBackdrop:document.querySelector(".js-backdrop-modal"),closeBtn:document.querySelector(".js-rating-close"),form:document.querySelector(".js-rating-form"),rateStars:document.querySelector(".js-stars-list"),rateValue:document.querySelector(".js-rating-data"),star:document.querySelectorAll(".js-rating-star")};let C=0;window.addEventListener("click",f);document.addEventListener("keydown",we);c.closeBtn.addEventListener("click",Ee);c.form.addEventListener("submit",O);c.rateStars.addEventListener("click",ke);function f(e){e.target.classList.contains("backdrop")&&(c.modalBackdrop.classList.remove("is-hidden"),window.removeEventListener("click",f))}function Ee(e){e.currentTarget&&(c.modalBackdrop.classList.add("is-hidden"),window.removeEventListener("click",f))}function we(e){e.code==="Escape"&&(c.modalBackdrop.classList.add("is-hidden"),window.removeEventListener("click",f))}function ke(e){let t=e.target,r=c.rateStars.querySelector(".star-active");t.classList.add("star-active"),r&&r.classList.remove("star-active"),setTimeout(()=>{c.rateValue.textContent=`${t.dataset.rate}.0`},0),C=t.dataset.rate}function O(e){e.preventDefault(),console.log({rating:C,email:e.target.elements.email.value,comment:e.target.elements.comment.value}),c.modalBackdrop.classList.remove("is-hidden"),c.form.removeEventListener("submit",O)}
//# sourceMappingURL=main-6063309a.js.map
