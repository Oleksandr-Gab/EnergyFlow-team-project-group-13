import{a as d,i}from"./vendor-8cce9181.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function r(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(s){if(s.ep)return;s.ep=!0;const n=r(s);fetch(s.href,n)}})();const w=document.querySelector("[data-menu-open]"),k=document.querySelector("[data-menu-close]"),B=document.querySelector(".nav"),D=document.querySelector('[data-action="homepage"]'),H=document.querySelector('[data-action="favoritespage"]'),S=document.querySelector(".menu-back-drop"),$=document.body,T=window.location.href;console.log(T);T.includes("favorite")&&(D.classList.remove("current"),H.classList.add("current"));document.addEventListener("keydown",e=>{e.key==="Escape"&&q()});k.addEventListener("click",q);w.addEventListener("click",()=>{B.classList.add("active"),w.classList.add("is-hidden"),k.classList.remove("is-hidden"),$.classList.add("lock"),S.classList.add("active")});function q(){B.classList.remove("active"),w.classList.remove("is-hidden"),k.classList.add("is-hidden"),$.classList.remove("lock"),S.classList.remove("active")}S.addEventListener("click",F);function F(e){e.target.classList.contains("menu-back-drop")&&q()}const V=document.querySelector(".quote-info");async function W(){try{const t=await d.create({baseURL:"https://energyflow.b.goit.study/api"}).get("/quote");_(t.data)}catch(e){console.error("SOMETHING WENT WRONG",e)}}//! RENDER QUOTE
function _(e){const t=[e];V.innerHTML=t.reduce((r,{quote:o,author:s})=>r+`<p class="quote-text">${o}</p>
        <h3 class="quote-author">${s}</h3>`,"")}W();let v;const K=document.querySelector(".filter-list");let h;const M=document.querySelector(".gallery"),Q=document.querySelector('button[name="Muscles"]');Q.disabled=!1;K.addEventListener("click",e=>{M.innerHTML="",e.target.tagName==="BUTTON"&&(h=e.target.name,console.log(h),z(h))});async function z(e){v=await d.create({baseURL:"https://energyflow.b.goit.study/api",params:{filter:e,page:"1",limit:"12"}}).get("/filters"),console.log(v);const r=v.data.results.reduce((o,{name:s,filter:n,imgUrl:a})=>o+`<li class="gallery-item">
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
          </li>`,"");M.insertAdjacentHTML("beforeend",r)}const l=document.getElementById("exerciseModal"),R=document.getElementById("closeModalBtn");document.getElementById("addToFavoritesBtn");document.getElementById("giveRatingBtn");const G=document.getElementById("information");function X(){l.classList.add("open"),R.addEventListener("click",p),l.addEventListener("click",P),document.addEventListener("keydown",I),Y().then(e=>{const{gifUrl:t,name:r,rating:o,target:s,bodyPart:n,equipment:a,popularity:f,burnedCalories:y,description:j}=e;G.innerHTML=`
            <img src="${t}" alt="${r}">
            <h2>${r}</h2>
            <p>Rating: ${o}</p>
            <p>Target: ${s}</p>
            <p>Body Part: ${n}</p>
            <p>Equipment: ${a}</p>
            <p>Popular: ${f}</p>
            <p>Burned Calories: ${y}</p>
            <p>Description: ${j}</p>
        `}).catch(e=>{i.error({title:"Error",message:"Sorry. Please try again!",position:"topRight"})})}function p(){l.classList.remove("open"),R.removeEventListener("click",p),l.removeEventListener("click",P),document.removeEventListener("keydown",I)}function P(e){e.target!==l&&p()}function I(e){e.key==="Escape"&&l.classList.contains("open")&&p()}async function Y(e){return Z(e)}async function Z(e){const t=`https://energyflow.b.goit.study/api/exercises/${e}`;try{return(await d.get(t)).data}catch(r){throw i.error({title:"Error",message:"Error fetching exercise data: ",position:"topRight"}),r}}const J=8,u=document.querySelector(".gallery"),x=new URL("https://energyflow.b.goit.study/api/filters?"),L=new URL("https://energyflow.b.goit.study/api/exercises?"),A=async e=>(await d.get(e)).data;x.searchParams.append("filter","Muscles");A(x).then(e=>{console.log(e),console.log(e.results[0].name)}).catch(e=>{i.error({message:"Sorry. Please try again!",position:"topRight"})});u.addEventListener("click",e=>{e.preventDefault(),u.innerHTML="",u.classList.add("information-cards"),L.searchParams.append("limit",J),L.searchParams.append("page",1),A(L).then(t=>{console.log(t),ee(t.results)}).catch(t=>{i.error({message:"Sorry. Please try again!",position:"topRight"})})});function ee(e){u.insertAdjacentHTML("afterbegin",e.reduce((t,{burnedCalories:r,name:o,bodyPart:s,rating:n,time:a,target:f,_id:y})=>t+`<li class="gallery-card" data-id="${y}">
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
            <li class="target"><span class="params-text">Target:</span> ${f}</li>
      </ul>
    </li>`,""))}u.addEventListener("click",e=>{e.preventDefault();const t=e.target.closest(".gallery-card");t&&(t.dataset.id,X())});const te=document.querySelector(".search-block"),re=document.querySelector(".custom-pagination-btn"),E=document.querySelectorAll(".render-pagination-btn"),se=d.create({baseURL:"https://energyflow.b.goit.study/api/"}),ne={fetchFilters:async e=>{try{return(await se.get("filters",{params:e})).data.results}catch(t){console.error(t),oe(t)}}},oe=e=>{throw i.error({title:"API Error",message:"An error occurred while fetching data from the API."}),e},ae=async e=>{try{return(await ne.fetchFilters({...e})).map(ce).join("")}catch(t){return console.error(t),C(),""}},ce=e=>`<li class="render-page-one-item" data-name="${e.name}">
            <img src="${e.imgUrl}" alt="" />
            <div class="render-page-one-img-container">
              <p class="render-page-one-item-title">${e.name}</p>
              <p class="render-page-one-item-zones">${e.filter}</p>
            </div>
          </li>`,C=()=>{i.error({title:"Rendering Error",message:"An error occurred while rendering data."})},ie=async e=>{try{const t=await e;te.innerHTML=t}catch(t){console.error(t),C()}},le=e=>{const t=parseInt(e.dataset.btn)===3?1:-1;E.forEach(r=>{r.textContent=parseInt(r.textContent)+t}),E[0].style.display=m.page>1?"block":"none",E[2].style.display=m.page>=me-1?"none":"block"},de=e=>{e.target.nodeName==="BUTTON"&&(m.page=parseInt(e.target.textContent),ie(ae(m)),le(e.target))},ue=getComputedStyle(document.querySelector("body")).width,U=ue<768?8:12,m={limit:U,page:1},me=69/U;re.addEventListener("click",de);const pe=document.querySelector(".footer-form"),ge=document.querySelector(".footer-form-input"),fe="https://energyflow.b.goit.study/api/subscription";pe.addEventListener("submit",ye);async function ye(e){e.preventDefault();const t=e.currentTarget.elements.footerInput.value.trim();if(!ve(t))return he();try{const r=await d.post(fe,{email:t});if(r.status>=200&&r.status<300){const o=r.data.message;i.success({title:"OK",message:o,color:"white",position:"center"})}else throw new Error}catch(r){i.error({title:"Error",message:r.response.data.message,position:"center",backgroundColor:"gray"})}finally{ge.value=""}}const ve=e=>/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(e),he=()=>{i.info({title:"",message:"Please give us a valid email.",color:"white",position:"center"})},Le=100,b=document.querySelector(".skroll-btn"),Ee=()=>window.scrollY||document.documentElement.scrollTop;window.addEventListener("scroll",()=>{Ee()>Le?b.classList.add("skroll-btn-active"):b.classList.remove("skroll-btn-active")});b.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});const c={modalBackdrop:document.querySelector(".js-backdrop-modal"),closeBtn:document.querySelector(".js-rating-close"),form:document.querySelector(".js-rating-form"),rateStars:document.querySelector(".js-stars-list"),rateValue:document.querySelector(".js-rating-data"),star:document.querySelectorAll(".js-rating-star")};let O=0;window.addEventListener("click",g);document.addEventListener("keydown",be);c.closeBtn.addEventListener("click",we);c.form.addEventListener("submit",N);c.rateStars.addEventListener("click",ke);function g(e){e.target.classList.contains("backdrop")&&(c.modalBackdrop.classList.remove("is-hidden"),window.removeEventListener("click",g))}function we(e){e.currentTarget&&(c.modalBackdrop.classList.add("is-hidden"),window.removeEventListener("click",g))}function be(e){e.code==="Escape"&&(c.modalBackdrop.classList.add("is-hidden"),window.removeEventListener("click",g))}function ke(e){let t=e.target,r=c.rateStars.querySelector(".star-active");t.classList.add("star-active"),r&&r.classList.remove("star-active"),setTimeout(()=>{c.rateValue.textContent=`${t.dataset.rate}.0`},0),O=t.dataset.rate}function N(e){e.preventDefault(),console.log({rating:O,email:e.target.elements.email.value,comment:e.target.elements.comment.value}),c.modalBackdrop.classList.remove("is-hidden"),c.form.removeEventListener("submit",N)}
//# sourceMappingURL=main-8e3bce60.js.map
