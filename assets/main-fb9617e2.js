import{a as l,i}from"./vendor-8cce9181.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=r(s);fetch(s.href,o)}})();const E=document.querySelector("[data-menu-open]"),b=document.querySelector("[data-menu-close]"),B=document.querySelector(".nav"),D=document.querySelector('[data-action="homepage"]'),H=document.querySelector('[data-action="favoritespage"]'),k=document.querySelector(".menu-back-drop"),$=document.body,T=window.location.href;console.log(T);T.includes("favorite")&&(D.classList.remove("current"),H.classList.add("current"));document.addEventListener("keydown",e=>{e.key==="Escape"&&S()});b.addEventListener("click",S);E.addEventListener("click",()=>{B.classList.add("active"),E.classList.add("is-hidden"),b.classList.remove("is-hidden"),$.classList.add("lock"),k.classList.add("active")});function S(){B.classList.remove("active"),E.classList.remove("is-hidden"),b.classList.add("is-hidden"),$.classList.remove("lock"),k.classList.remove("active")}k.addEventListener("click",F);function F(e){e.target.classList.contains("menu-back-drop")&&S()}const V=document.querySelector(".quote-info");async function W(){try{const t=await l.create({baseURL:"https://energyflow.b.goit.study/api"}).get("/quote");_(t.data)}catch(e){console.error("SOMETHING WENT WRONG",e)}}//! RENDER QUOTE
function _(e){const t=[e];V.innerHTML=t.reduce((r,{quote:n,author:s})=>r+`<p class="quote-text">${n}</p>
        <h3 class="quote-author">${s}</h3>`,"")}W();let y;const K=document.querySelector(".filter-list");let v;const M=document.querySelector(".gallery"),Q=document.querySelector('button[name="Muscles"]');Q.disabled=!1;K.addEventListener("click",e=>{M.innerHTML="",e.target.tagName==="BUTTON"&&(v=e.target.name,console.log(v),z(v))});async function z(e){y=await l.create({baseURL:"https://energyflow.b.goit.study/api",params:{filter:e,page:"1",limit:"12"}}).get("/filters"),console.log(y);const r=y.data.results.reduce((n,{name:s,filter:o,imgUrl:a})=>n+`<li class="gallery-item">
           <div class="card">
            <a class="gallery-link" href="${a}">
             <img class="gallery-image"
             src="${a}"
             alt="${o}"
             />
            </a>
            </div>
            <div class="card-description">
            <p class="name-description">${s}</p>
            <p class="filter-description">${o}</p>
            </div>
          </li>`,"");M.insertAdjacentHTML("beforeend",r)}const q=document.getElementById("exerciseModal"),R=document.getElementById("closeModalBtn");document.getElementById("addToFavoritesBtn");document.getElementById("giveRatingBtn");const G=document.getElementById("information");function X(){q.classList.add("open"),R.addEventListener("click",m),document.addEventListener("mouseup",I),document.addEventListener("keydown",P),document.body.style.overflow="hidden",Y().then(e=>{const{gifUrl:t,name:r,rating:n,target:s,bodyPart:o,equipment:a,popularity:g,burnedCalories:f,description:j}=e;G.innerHTML=`
            <img src="${t}" alt="${r}">
            <h2>${r}</h2>
            <p>Rating: ${n}</p>
            <p>Target: ${s}</p>
            <p>Body Part: ${o}</p>
            <p>Equipment: ${a}</p>
            <p>Popular: ${g}</p>
            <p>Burned Calories: ${f}</p>
            <p>Description: ${j}</p>
        `}).catch(e=>{i.error({title:"Error",message:"Sorry. Please try again!",position:"topRight"})})}function m(){q.classList.remove("open"),R.removeEventListener("click",m),document.removeEventListener("mouseup",I),document.removeEventListener("keydown",P),document.body.style.overflow=""}const I=function(e){!document.getElementById("modal").contains(e.target)&&q.classList.contains("open")&&m()},P=function(e){e.key==="Escape"&&m()};async function Y(e){return Z(e)}async function Z(e){const t=`https://energyflow.b.goit.study/api/exercises/${e}`;try{return(await l.get(t)).data}catch(r){throw i.error({title:"Error",message:"Error fetching exercise data: ",position:"topRight"}),r}}const J=8,d=document.querySelector(".gallery"),x=new URL("https://energyflow.b.goit.study/api/filters?"),h=new URL("https://energyflow.b.goit.study/api/exercises?"),A=async e=>(await l.get(e)).data;x.searchParams.append("filter","Muscles");A(x).then(e=>{console.log(e),console.log(e.results[0].name)}).catch(e=>{i.error({message:"Sorry. Please try again!",position:"topRight"})});d.addEventListener("click",e=>{e.preventDefault(),d.innerHTML="",d.classList.add("information-cards"),h.searchParams.append("limit",J),h.searchParams.append("page",1),A(h).then(t=>{console.log(t),ee(t.results)}).catch(t=>{i.error({message:"Sorry. Please try again!",position:"topRight"})})});function ee(e){d.insertAdjacentHTML("afterbegin",e.reduce((t,{burnedCalories:r,name:n,bodyPart:s,rating:o,time:a,target:g,_id:f})=>t+`<li class="gallery-card" data-id="${f}">
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
          <h3>${n}</h3>
      </div>

      <ul class="params-card">
            <li class="calories"><span class="params-text">Burned calories:</span> ${r}/${a}min</li>
            <li class="body-part"><span class="params-text">Body part:</span> ${s}</li>
            <li class="target"><span class="params-text">Target:</span> ${g}</li>
      </ul>
    </li>`,""))}d.addEventListener("click",e=>{e.preventDefault();const t=e.target.closest(".gallery-card");t&&(t.dataset.id,X())});const te=document.querySelector(".search-block"),re=document.querySelector(".custom-pagination-btn"),L=document.querySelectorAll(".render-pagination-btn"),se=l.create({baseURL:"https://energyflow.b.goit.study/api/"}),oe={fetchFilters:async e=>{try{return(await se.get("filters",{params:e})).data.results}catch(t){console.error(t),ne(t)}}},ne=e=>{throw i.error({title:"API Error",message:"An error occurred while fetching data from the API."}),e},ae=async e=>{try{return(await oe.fetchFilters({...e})).map(ce).join("")}catch(t){return console.error(t),C(),""}},ce=e=>`<li class="render-page-one-item" data-name="${e.name}">
            <img src="${e.imgUrl}" alt="" />
            <div class="render-page-one-img-container">
              <p class="render-page-one-item-title">${e.name}</p>
              <p class="render-page-one-item-zones">${e.filter}</p>
            </div>
          </li>`,C=()=>{i.error({title:"Rendering Error",message:"An error occurred while rendering data."})},ie=async e=>{try{const t=await e;te.innerHTML=t}catch(t){console.error(t),C()}},le=e=>{const t=parseInt(e.dataset.btn)===3?1:-1;L.forEach(r=>{r.textContent=parseInt(r.textContent)+t}),L[0].style.display=u.page>1?"block":"none",L[2].style.display=u.page>=me-1?"none":"block"},de=e=>{e.target.nodeName==="BUTTON"&&(u.page=parseInt(e.target.textContent),ie(ae(u)),le(e.target))},ue=getComputedStyle(document.querySelector("body")).width,U=ue<768?8:12,u={limit:U,page:1},me=69/U;re.addEventListener("click",de);const pe=document.querySelector(".footer-form"),ge=document.querySelector(".footer-form-input"),fe="https://energyflow.b.goit.study/api/subscription";pe.addEventListener("submit",ye);async function ye(e){e.preventDefault();const t=e.currentTarget.elements.footerInput.value.trim();if(!ve(t))return he();try{const r=await l.post(fe,{email:t});if(r.status>=200&&r.status<300){const n=r.data.message;i.success({title:"OK",message:n,color:"white",position:"center"})}else throw new Error}catch(r){i.error({title:"Error",message:r.response.data.message,position:"center",backgroundColor:"gray"})}finally{ge.value=""}}const ve=e=>/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(e),he=()=>{i.info({title:"",message:"Please give us a valid email.",color:"white",position:"center"})},Le=100,w=document.querySelector(".skroll-btn"),Ee=()=>window.scrollY||document.documentElement.scrollTop;window.addEventListener("scroll",()=>{Ee()>Le?w.classList.add("skroll-btn-active"):w.classList.remove("skroll-btn-active")});w.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});const c={modalBackdrop:document.querySelector(".js-backdrop-modal"),closeBtn:document.querySelector(".js-rating-close"),form:document.querySelector(".js-rating-form"),rateStars:document.querySelector(".js-stars-list"),rateValue:document.querySelector(".js-rating-data"),star:document.querySelectorAll(".js-rating-star")};let O=0;window.addEventListener("click",p);document.addEventListener("keydown",be);c.closeBtn.addEventListener("click",we);c.form.addEventListener("submit",N);c.rateStars.addEventListener("click",ke);function p(e){e.target.classList.contains("backdrop")&&(c.modalBackdrop.classList.remove("is-hidden"),window.removeEventListener("click",p))}function we(e){e.currentTarget&&(c.modalBackdrop.classList.add("is-hidden"),window.removeEventListener("click",p))}function be(e){e.code==="Escape"&&(c.modalBackdrop.classList.add("is-hidden"),window.removeEventListener("click",p))}function ke(e){let t=e.target,r=c.rateStars.querySelector(".star-active");t.classList.add("star-active"),r&&r.classList.remove("star-active"),setTimeout(()=>{c.rateValue.textContent=`${t.dataset.rate}.0`},0),O=t.dataset.rate}function N(e){e.preventDefault(),console.log({rating:O,email:e.target.elements.email.value,comment:e.target.elements.comment.value}),c.modalBackdrop.classList.remove("is-hidden"),c.form.removeEventListener("submit",N)}
//# sourceMappingURL=main-fb9617e2.js.map
