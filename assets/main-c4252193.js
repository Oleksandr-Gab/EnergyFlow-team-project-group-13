import{a as g,i as d}from"./vendor-8cce9181.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function r(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(s){if(s.ep)return;s.ep=!0;const n=r(s);fetch(s.href,n)}})();const b=document.querySelector("[data-menu-open]"),w=document.querySelector("[data-menu-close]"),$=document.querySelector(".nav"),D=document.querySelector('[data-action="homepage"]'),Q=document.querySelector('[data-action="favoritespage"]'),S=document.querySelector(".menu-back-drop"),x=document.body,Y=document.querySelector(".header"),K=window.location.href;K.includes("favorite")&&(D.classList.remove("current"),Q.classList.add("current"),Y.style.position="static");document.addEventListener("keydown",e=>{e.key==="Escape"&&M()});w.addEventListener("click",M);b.addEventListener("click",()=>{$.classList.add("active"),b.classList.add("is-hidden"),w.classList.remove("is-hidden"),x.classList.add("lock"),S.classList.add("active")});function M(){$.classList.remove("active"),b.classList.remove("is-hidden"),w.classList.add("is-hidden"),x.classList.remove("lock"),S.classList.remove("active")}S.addEventListener("click",_);function _(e){e.target.classList.contains("menu-back-drop")&&M()}const Z=document.querySelector(".quote-info");async function J(){try{const t=await g.create({baseURL:"https://energyflow.b.goit.study/api"}).get("/quote");X(t.data)}catch(e){console.error("SOMETHING WENT WRONG",e)}}//! RENDER QUOTE
function X(e){const t=[e];Z.innerHTML=t.reduce((r,{quote:o,author:s})=>r+`<p class="quote-text">${o}</p>
        <h3 class="quote-author">${s}</h3>`,"")}J();let h;const ee=document.querySelector(".filter-list");let v;const A=document.querySelector(".gallery"),te=document.querySelector('button[name="Muscles"]');te.disabled=!1;ee.addEventListener("click",e=>{A.innerHTML="",e.target.tagName==="BUTTON"&&(v=e.target.name,console.log(v),se(v))});async function se(e){h=await g.create({baseURL:"https://energyflow.b.goit.study/api",params:{filter:e,page:"1",limit:"12"}}).get("/filters"),console.log(h);const r=h.data.results.reduce((o,{name:s,filter:n,imgUrl:i})=>o+`<li class="gallery-item">
           <div class="card">
            <a class="gallery-link" href="${i}">
             <img class="gallery-image"
             src="${i}"
             alt="${n}"
             />
            </a>
            </div>
            <div class="card-description">
            <p class="name-description">${s}</p>
            <p class="filter-description">${n}</p>
            </div>
          </li>`,"");A.insertAdjacentHTML("beforeend",r)}document.getElementById("exerciseModal");document.getElementById("closeModalBtn");document.getElementById("addToFavoritesBtn");document.getElementById("giveRatingBtn");document.getElementById("information");const z=document.querySelector(".gallery"),p=document.querySelector(".waist"),re=g.create({baseURL:"https://energyflow.b.goit.study/api",params:{page:"1",limit:"8"}}),ne=async e=>await re.get(e);function oe(){z.innerHTML="",p.innerHTML="",p.classList.add("information-cards"),ne("/exercises").then(e=>{ae(e.data.results)}).catch(e=>{d.error({message:e,position:"topRight"})})}z.addEventListener("click",oe);p.addEventListener("click",e=>{console.log("hi"),console.log(e.target.id)});function ae(e){p.insertAdjacentHTML("afterbegin",e.reduce((t,{burnedCalories:r,name:o,bodyPart:s,rating:n,time:i,target:G,_id:V})=>t+`<li class="gallery-card" id="${V}">
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
            <li class="calories"><span class="params-text">Burned calories:</span> ${r}/${i}min</li>
            <li class="body-part"><span class="params-text">Body part:</span> ${s}</li>
            <li class="target"><span class="params-text">Target:</span> ${G}</li>
      </ul>
    </li>`,""))}const ie=document.querySelector(".search-block"),ce=document.querySelector(".custom-pagination-btn"),L=document.querySelectorAll(".render-pagination-btn"),le=g.create({baseURL:"https://energyflow.b.goit.study/api/"}),de={fetchFilters:async e=>{try{return(await le.get("filters",{params:e})).data.results}catch(t){console.error(t),ue(t)}}},ue=e=>{throw d.error({title:"API Error",message:"An error occurred while fetching data from the API."}),e},me=async e=>{try{return(await de.fetchFilters({...e})).map(ge).join("")}catch(t){return console.error(t),C(),""}},ge=e=>`<li class="render-page-one-item" data-name="${e.name}">
            <img src="${e.imgUrl}" alt="" />
            <div class="render-page-one-img-container">
              <p class="render-page-one-item-title">${e.name}</p>
              <p class="render-page-one-item-zones">${e.filter}</p>
            </div>
          </li>`,C=()=>{d.error({title:"Rendering Error",message:"An error occurred while rendering data."})},pe=async e=>{try{const t=await e;ie.innerHTML=t}catch(t){console.error(t),C()}},ye=e=>{const t=parseInt(e.dataset.btn)===3?1:-1;L.forEach(r=>{r.textContent=parseInt(r.textContent)+t}),L[0].style.display=y.page>1?"block":"none",L[2].style.display=y.page>=ve-1?"none":"block"},fe=e=>{e.target.nodeName==="BUTTON"&&(y.page=parseInt(e.target.textContent),pe(me(y)),ye(e.target))},he=getComputedStyle(document.querySelector("body")).width,O=he<768?8:12,y={limit:O,page:1},ve=69/O;ce.addEventListener("click",fe);const Le=document.querySelector(".footer-form"),be=document.querySelector(".footer-form-input"),Ee="https://energyflow.b.goit.study/api/subscription";Le.addEventListener("submit",ke);async function ke(e){e.preventDefault();const t=e.currentTarget.elements.footerInput.value.trim();if(!we(t))return Se();try{const r=await g.post(Ee,{email:t});if(r.status>=200&&r.status<300){const o=r.data.message;d.success({title:"OK",message:o,color:"white",position:"center"})}else throw new Error}catch(r){d.error({title:"Error",message:r.response.data.message,position:"center",backgroundColor:"gray"})}finally{be.value=""}}const we=e=>/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(e),Se=()=>{d.info({title:"",message:"Please give us a valid email.",color:"white",position:"center"})},Me=100,E=document.querySelector(".skroll-btn"),qe=()=>window.scrollY||document.documentElement.scrollTop;window.addEventListener("scroll",()=>{qe()>Me?E.classList.add("skroll-btn-active"):E.classList.remove("skroll-btn-active")});E.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});const c=[{text:"One-Month Membership",color:"rgba(232, 232, 232, 1)"},{text:"Personal Training Session",color:"rgb(62, 184, 119)"},{text:"Fitness Bracelet",color:"rgba(232, 232, 232, 1)"},{text:"25% Off Certificate",color:"rgb(62, 184, 119)"},{text:"$50 Gift Card",color:"rgba(232, 232, 232, 1)"},{text:"10% Off Certificate",color:"rgb(62, 184, 119)"},{text:"$30 Gift Card",color:"rgba(232, 232, 232, 1)"},{text:"Participation in Marathon",color:"rgb(62, 184, 119)"}],l=document.querySelector(".deal-wheel"),u=l.querySelector(".spinner"),P=l.querySelector(".btn-spin"),k=l.querySelector(".ticker"),Be=document.querySelector(".get-prize-container"),q=360/c.length,Te=Math.floor(180/c.length),R="is-spinning",N="selected",Pe=window.getComputedStyle(u);let H,m=0,I=0,B;const Ie=()=>{c.forEach(({text:e,color:t,reaction:r},o)=>{const s=q*o*-1-Te;u.insertAdjacentHTML("beforeend",`<li class="prize" data-reaction=${r} style="--rotate: ${s}deg">
        <span class="text">${e}</span>
      </li>`)})},$e=()=>{u.setAttribute("style",`background: conic-gradient(
      from -90deg,
      ${c.map(({color:e},t)=>`${e} 0 ${100/c.length*(c.length-t)}%`).reverse()}
    );`)},xe=()=>{$e(),Ie(),B=l.querySelectorAll(".prize")},Ae=(e,t)=>(e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e),U=()=>{const e=Pe.transform.split("(")[1].split(")")[0].split(","),t=e[0],r=e[1];let o=Math.atan2(r,t);o<0&&(o+=2*Math.PI);const s=Math.round(o*(180/Math.PI)),n=Math.floor(s/q);I!==n&&(k.style.animation="none",setTimeout(()=>k.style.animation=null,10),I=n),H=requestAnimationFrame(U)},ze=()=>{const e=Math.floor(m/q);B[e].classList.add(N);const t=c[e].text;setTimeout(()=>{l.style.display="none",introMessagePrize.style.display="none",congratulationsMessage.style.display="block",document.getElementById("congratulationMessage").innerHTML="Congratulations!",document.getElementById("congratulationMessage1").innerHTML=" You've won: ",document.getElementById("prizeMessage").innerText=t,Be.style.display="block"},3e3)};P.addEventListener("click",()=>{P.disabled=!0,m=Math.floor(Math.random()*360+Ae(2e3,5e3)),B.forEach(e=>e.classList.remove(N)),l.classList.add(R),u.style.setProperty("--rotate",m),k.style.animation="none",U()});u.addEventListener("transitionend",()=>{cancelAnimationFrame(H),m%=360,ze(),l.classList.remove(R),u.style.setProperty("--rotate",m)});xe();var Ce=document.getElementsByClassName("button-get");function Oe(){document.getElementById("email-prize").value,alert("Congratulations! Your prize is ready to be picked up. We will contact you at the specified email.")}Ce.onclick=function(){Oe()};var T=document.getElementById("myModalPrize"),Re=document.getElementById("openModalBtnPrize");Re.onclick=function(){T.style.display="block"};function j(){T.style.display="none"}window.onclick=function(e){e.target==T&&j()};var Ne=document.getElementById("closeModalPrize");Ne.onclick=function(){j()};const a={modalBackdrop:document.querySelector(".js-backdrop-modal"),closeBtn:document.querySelector(".js-rating-close"),form:document.querySelector(".js-rating-form"),rateStars:document.querySelector(".js-stars-list"),rateValue:document.querySelector(".js-rating-data"),star:document.querySelectorAll(".js-rating-star")};let F=0;window.addEventListener("click",f);document.addEventListener("keydown",Ue);a.closeBtn.addEventListener("click",He);a.form.addEventListener("submit",W);a.rateStars.addEventListener("click",je);function f(e){e.target.classList.contains("backdrop")&&(a.modalBackdrop.classList.remove("is-hidden"),window.removeEventListener("click",f))}function He(e){e.currentTarget&&(a.modalBackdrop.classList.add("is-hidden"),window.removeEventListener("click",f))}function Ue(e){e.code==="Escape"&&(a.modalBackdrop.classList.add("is-hidden"),window.removeEventListener("click",f))}function je(e){let t=e.target,r=a.rateStars.querySelector(".star-active");t.classList.add("star-active"),r&&r.classList.remove("star-active"),setTimeout(()=>{a.rateValue.textContent=`${t.dataset.rate}.0`},0),F=t.dataset.rate}function W(e){e.preventDefault(),console.log({rating:F,email:e.target.elements.email.value,comment:e.target.elements.comment.value}),a.modalBackdrop.classList.remove("is-hidden"),a.form.removeEventListener("submit",W)}
//# sourceMappingURL=main-c4252193.js.map
