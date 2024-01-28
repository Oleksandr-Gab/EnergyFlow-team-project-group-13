import{a as l,i}from"./vendor-8cce9181.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function r(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(s){if(s.ep)return;s.ep=!0;const a=r(s);fetch(s.href,a)}})();const y=document.querySelector("[data-menu-open]"),L=document.querySelector("[data-menu-close]"),E=document.querySelector(".nav"),x=document.querySelector('[data-action="homepage"]'),M=document.querySelector('[data-action="favoritespage"]'),w=document.querySelector(".menu-back-drop"),S=document.body,k=window.location.href;console.log(k);k.includes("favorite")&&(x.classList.remove("current"),M.classList.add("current"));document.addEventListener("keydown",e=>{e.key==="Escape"&&b()});L.addEventListener("click",b);y.addEventListener("click",()=>{E.classList.add("active"),y.classList.add("is-hidden"),L.classList.remove("is-hidden"),S.classList.add("lock"),w.classList.add("active")});function b(){E.classList.remove("active"),y.classList.remove("is-hidden"),L.classList.add("is-hidden"),S.classList.remove("lock"),w.classList.remove("active")}w.addEventListener("click",R);function R(e){e.target.classList.contains("menu-back-drop")&&b()}const I=document.querySelector(".quote-info");async function O(){try{const t=await l.create({baseURL:"https://energyflow.b.goit.study/api"}).get("/quote");C(t.data)}catch(e){console.error("SOMETHING WENT WRONG",e)}}//! RENDER QUOTE
function C(e){const t=[e];I.innerHTML=t.reduce((r,{quote:o,author:s})=>r+`<p class="quote-text">${o}</p>
        <h3 class="quote-author">${s}</h3>`,"")}O();let p;const U=document.querySelector(".filter-list");let g;const q=document.querySelector(".gallery"),N=document.querySelector('button[name="Muscles"]');N.disabled=!1;U.addEventListener("click",e=>{q.innerHTML="",e.target.tagName==="BUTTON"&&(g=e.target.name,console.log(g),j(g))});async function j(e){p=await l.create({baseURL:"https://energyflow.b.goit.study/api",params:{filter:e,page:"1",limit:"12"}}).get("/filters"),console.log(p);const r=p.data.results.reduce((o,{name:s,filter:a,imgUrl:c})=>o+`<li class="gallery-item">
           <div class="card">
            <a class="gallery-link" href="${c}">
             <img class="gallery-image"
             src="${c}"
             alt="${a}"
             />
            </a>
            </div>
            <div class="card-description">
            <p class="name-description">${s}</p>
            <p class="filter-description">${a}</p>
            </div>
          </li>`,"");q.insertAdjacentHTML("beforeend",r)}const H=8,v=document.querySelector(".gallery"),d=new URL("https://energyflow.b.goit.study/api/exercises?"),F=async e=>(await l.get(e)).data;v.addEventListener("click",e=>{e.preventDefault(),v.classList.add("information-cards"),d.searchParams.append("limit",H),d.searchParams.append("page",1),d.searchParams.append("name","?"),F(d).then(t=>{console.log(t),V(t.results)}).catch(t=>{i.error({message:"Sorry. Please try again!",position:"topRight"})})});function V(e){v.insertAdjacentHTML("afterbegin",e.reduce((t,{burnedCalories:r,name:o,bodyPart:s,rating:a,time:c,target:$})=>t+`<li class="gallery-card">
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
            <li class="calories"><span class="params-text">Burned calories:</span> ${r}/${c}min</li>
            <li class="body-part"><span class="params-text">Body part:</span> ${s}</li>
            <li class="target"><span class="params-text">Target:</span> ${$}</li>
      </ul>
    </li>`,""))}const W=document.querySelector(".search-block"),D=document.querySelector(".custom-pagination-btn"),f=document.querySelectorAll(".render-pagination-btn"),Q=l.create({baseURL:"https://energyflow.b.goit.study/api/"}),z={fetchFilters:async e=>{try{return(await Q.get("filters",{params:e})).data.results}catch(t){console.error(t),G(t)}}},G=e=>{throw i.error({title:"API Error",message:"An error occurred while fetching data from the API."}),e},K=async e=>{try{return(await z.fetchFilters({...e})).map(_).join("")}catch(t){return console.error(t),T(),""}},_=e=>`<li class="render-page-one-item" data-name="${e.name}">
            <img src="${e.imgUrl}" alt="" />
            <div class="render-page-one-img-container">
              <p class="render-page-one-item-title">${e.name}</p>
              <p class="render-page-one-item-zones">${e.filter}</p>
            </div>
          </li>`,T=()=>{i.error({title:"Rendering Error",message:"An error occurred while rendering data."})},Y=async e=>{try{const t=await e;W.innerHTML=t}catch(t){console.error(t),T()}},X=e=>{const t=parseInt(e.dataset.btn)===3?1:-1;f.forEach(r=>{r.textContent=parseInt(r.textContent)+t}),f[0].style.display=u.page>1?"block":"none",f[2].style.display=u.page>=ee-1?"none":"block"},Z=e=>{e.target.nodeName==="BUTTON"&&(u.page=parseInt(e.target.textContent),Y(K(u)),X(e.target))},J=getComputedStyle(document.querySelector("body")).width,B=J<768?8:12,u={limit:B,page:1},ee=69/B;D.addEventListener("click",Z);const te=document.querySelector(".footer-form"),se=document.querySelector(".footer-form-input"),re="https://energyflow.b.goit.study/api/subscription";te.addEventListener("submit",ae);async function ae(e){e.preventDefault();const t=e.currentTarget.elements.footerInput.value.trim();if(!oe(t))return ne();try{const r=await l.post(re,{email:t});if(r.status>=200&&r.status<300){const o=r.data.message;i.success({title:"OK",message:o,color:"white",position:"center"})}else throw new Error}catch(r){i.error({title:"Error",message:r.response.data.message,position:"center",backgroundColor:"gray"})}finally{se.value=""}}const oe=e=>/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(e),ne=()=>{i.info({title:"",message:"Please give us a valid email.",color:"white",position:"center"})},ce=100,h=document.querySelector(".skroll-btn"),ie=()=>window.scrollY||document.documentElement.scrollTop;window.addEventListener("scroll",()=>{ie()>ce?h.classList.add("skroll-btn-active"):h.classList.remove("skroll-btn-active")});h.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});const n={modalBackdrop:document.querySelector(".js-backdrop-modal"),closeBtn:document.querySelector(".js-rating-close"),form:document.querySelector(".js-rating-form"),rateStars:document.querySelector(".js-stars-list"),rateValue:document.querySelector(".js-rating-data"),star:document.querySelectorAll(".js-rating-star")};let A=0;window.addEventListener("click",m);document.addEventListener("keydown",de);n.closeBtn.addEventListener("click",le);n.form.addEventListener("submit",P);n.rateStars.addEventListener("click",ue);function m(e){e.target.classList.contains("backdrop")&&(n.modalBackdrop.classList.remove("is-hidden"),window.removeEventListener("click",m))}function le(e){e.currentTarget&&(n.modalBackdrop.classList.add("is-hidden"),window.removeEventListener("click",m))}function de(e){e.code==="Escape"&&(n.modalBackdrop.classList.add("is-hidden"),window.removeEventListener("click",m))}function ue(e){let t=e.target,r=n.rateStars.querySelector(".star-active");t.classList.add("star-active"),r&&r.classList.remove("star-active"),setTimeout(()=>{n.rateValue.textContent=`${t.dataset.rate}.0`},0),A=t.dataset.rate}function P(e){e.preventDefault(),console.log({rating:A,email:e.target.elements.email.value,comment:e.target.elements.comment.value}),n.modalBackdrop.classList.remove("is-hidden"),n.form.removeEventListener("submit",P)}
//# sourceMappingURL=main-ebe7b31f.js.map
