import{a as m,i as c}from"./vendor-8cce9181.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function r(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(n){if(n.ep)return;n.ep=!0;const o=r(n);fetch(n.href,o)}})();const S=document.querySelector("[data-menu-open]"),P=document.querySelector("[data-menu-close]"),R=document.querySelector(".nav"),ee=document.querySelector('[data-action="homepage"]'),te=document.querySelector('[data-action="favoritespage"]'),q=document.querySelector(".menu-back-drop"),O=document.body,re=document.querySelector(".header"),ne=window.location.href;ne.includes("favorite")&&(ee.classList.remove("current"),te.classList.add("current"),re.style.position="static");document.addEventListener("keydown",e=>{e.key==="Escape"&&$()});P.addEventListener("click",$);S.addEventListener("click",()=>{R.classList.add("active"),S.classList.add("is-hidden"),P.classList.remove("is-hidden"),O.classList.add("lock"),q.classList.add("active")});function $(){R.classList.remove("active"),S.classList.remove("is-hidden"),P.classList.add("is-hidden"),O.classList.remove("lock"),q.classList.remove("active")}q.addEventListener("click",oe);function oe(e){e.target.classList.contains("menu-back-drop")&&$()}const se=document.querySelector(".quote-info");async function ae(){try{const t=await m.create({baseURL:"https://energyflow.b.goit.study/api"}).get("/quote");ie(t.data)}catch(e){console.error("SOMETHING WENT WRONG",e)}}//! RENDER QUOTE
function ie(e){const t=[e];se.innerHTML=t.reduce((r,{quote:s,author:n})=>r+`<p class="quote-text">${s}</p>
        <h3 class="quote-author">${n}</h3>`,"")}ae();let E;const ce=document.querySelector(".filter-list");let b;const U=document.querySelector(".gallery"),le=document.querySelector('button[name="Muscles"]');le.disabled=!1;ce.addEventListener("click",e=>{U.innerHTML="",e.target.tagName==="BUTTON"&&(b=e.target.name,console.log(b),de(b))});async function de(e){E=await m.create({baseURL:"https://energyflow.b.goit.study/api",params:{filter:e,page:"1",limit:"12"}}).get("/filters"),console.log(E);const r=E.data.results.reduce((s,{name:n,filter:o,imgUrl:a})=>s+`<li class="gallery-item">
           <div class="card">
            <a class="gallery-link" href="${a}">
             <img class="gallery-image"
             src="${a}"
             alt="${o}"
             />
            </a>
            </div>
            <div class="card-description">
            <p class="name-description">${n}</p>
            <p class="filter-description">${o}</p>
            </div>
          </li>`,"");U.insertAdjacentHTML("beforeend",r)}const T=document.getElementById("exerciseModal"),N=document.getElementById("closeModalBtn");document.getElementById("addToFavoritesBtn");document.getElementById("giveRatingBtn");const ue=document.getElementById("information");function me(){T.classList.add("open"),N.addEventListener("click",f),document.addEventListener("mouseup",H),document.addEventListener("keydown",F),document.body.style.overflow="hidden",pe().then(e=>{const{gifUrl:t,name:r,rating:s,target:n,bodyPart:o,equipment:a,popularity:v,burnedCalories:L,description:J}=e;ue.innerHTML=`
            <img src="${t}" alt="${r}">
            <h2>${r}</h2>
            <p>Rating: ${s}</p>
            <p>Target: ${n}</p>
            <p>Body Part: ${o}</p>
            <p>Equipment: ${a}</p>
            <p>Popular: ${v}</p>
            <p>Burned Calories: ${L}</p>
            <p>Description: ${J}</p>
        `}).catch(e=>{c.error({title:"Error",message:"Sorry. Please try again!",position:"topRight"})})}function f(){T.classList.remove("open"),N.removeEventListener("click",f),document.removeEventListener("mouseup",H),document.removeEventListener("keydown",F),document.body.style.overflow=""}const H=function(e){!document.getElementById("modal").contains(e.target)&&T.classList.contains("open")&&f()},F=function(e){e.key==="Escape"&&f()};async function pe(e){return ge(e)}async function ge(e){const t=`https://energyflow.b.goit.study/api/exercises/${e}`;try{return(await m.get(t)).data}catch(r){throw c.error({title:"Error",message:"Error fetching exercise data: ",position:"topRight"}),r}}const ye=8,p=document.querySelector(".gallery"),j=new URL("https://energyflow.b.goit.study/api/filters?"),w=new URL("https://energyflow.b.goit.study/api/exercises?"),D=async e=>(await m.get(e)).data;j.searchParams.append("filter","Muscles");D(j).then(e=>{console.log(e),console.log(e.results[0].name)}).catch(e=>{c.error({message:"Sorry. Please try again!",position:"topRight"})});p.addEventListener("click",e=>{e.preventDefault(),p.innerHTML="",p.classList.add("information-cards"),w.searchParams.append("limit",ye),w.searchParams.append("page",1),D(w).then(t=>{console.log(t),fe(t.results)}).catch(t=>{c.error({message:"Sorry. Please try again!",position:"topRight"})})});function fe(e){p.insertAdjacentHTML("afterbegin",e.reduce((t,{burnedCalories:r,name:s,bodyPart:n,rating:o,time:a,target:v,_id:L})=>t+`<li class="gallery-card" data-id="${L}">
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
          <h3>${s}</h3>
      </div>

      <ul class="params-card">
            <li class="calories"><span class="params-text">Burned calories:</span> ${r}/${a}min</li>
            <li class="body-part"><span class="params-text">Body part:</span> ${n}</li>
            <li class="target"><span class="params-text">Target:</span> ${v}</li>
      </ul>
    </li>`,""))}p.addEventListener("click",e=>{e.preventDefault();const t=e.target.closest(".gallery-card");t&&(t.dataset.id,me())});const he=document.querySelector(".search-block"),ve=document.querySelector(".custom-pagination-btn"),k=document.querySelectorAll(".render-pagination-btn"),Le=m.create({baseURL:"https://energyflow.b.goit.study/api/"}),Ee={fetchFilters:async e=>{try{return(await Le.get("filters",{params:e})).data.results}catch(t){console.error(t),be(t)}}},be=e=>{throw c.error({title:"API Error",message:"An error occurred while fetching data from the API."}),e},we=async e=>{try{return(await Ee.fetchFilters({...e})).map(ke).join("")}catch(t){return console.error(t),W(),""}},ke=e=>`<li class="render-page-one-item" data-name="${e.name}">
            <img src="${e.imgUrl}" alt="" />
            <div class="render-page-one-img-container">
              <p class="render-page-one-item-title">${e.name}</p>
              <p class="render-page-one-item-zones">${e.filter}</p>
            </div>
          </li>`,W=()=>{c.error({title:"Rendering Error",message:"An error occurred while rendering data."})},Se=async e=>{try{const t=await e;he.innerHTML=t}catch(t){console.error(t),W()}},Me=e=>{const t=parseInt(e.dataset.btn)===3?1:-1;k.forEach(r=>{r.textContent=parseInt(r.textContent)+t}),k[0].style.display=y.page>1?"block":"none",k[2].style.display=y.page>=qe-1?"none":"block"},Be=e=>{e.target.nodeName==="BUTTON"&&(y.page=parseInt(e.target.textContent),Se(we(y)),Me(e.target))},Pe=getComputedStyle(document.querySelector("body")).width,G=Pe<768?8:12,y={limit:G,page:1},qe=69/G;ve.addEventListener("click",Be);const $e=document.querySelector(".footer-form"),Te=document.querySelector(".footer-form-input"),Ie="https://energyflow.b.goit.study/api/subscription";$e.addEventListener("submit",xe);async function xe(e){e.preventDefault();const t=e.currentTarget.elements.footerInput.value.trim();if(!Ce(t))return Ae();try{const r=await m.post(Ie,{email:t});if(r.status>=200&&r.status<300){const s=r.data.message;c.success({title:"OK",message:s,color:"white",position:"center"})}else throw new Error}catch(r){c.error({title:"Error",message:r.response.data.message,position:"center",backgroundColor:"gray"})}finally{Te.value=""}}const Ce=e=>/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(e),Ae=()=>{c.info({title:"",message:"Please give us a valid email.",color:"white",position:"center"})},ze=100,M=document.querySelector(".skroll-btn"),Re=()=>window.scrollY||document.documentElement.scrollTop;window.addEventListener("scroll",()=>{Re()>ze?M.classList.add("skroll-btn-active"):M.classList.remove("skroll-btn-active")});M.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});const l=[{text:"One-Month Membership",color:"rgba(232, 232, 232, 1)"},{text:"Personal Training Session",color:"rgb(62, 184, 119)"},{text:"Fitness Bracelet",color:"rgba(232, 232, 232, 1)"},{text:"25% Off Certificate",color:"rgb(62, 184, 119)"},{text:"$50 Gift Card",color:"rgba(232, 232, 232, 1)"},{text:"10% Off Certificate",color:"rgb(62, 184, 119)"},{text:"$30 Gift Card",color:"rgba(232, 232, 232, 1)"},{text:"Participation in Marathon",color:"rgb(62, 184, 119)"}],d=document.querySelector(".deal-wheel"),u=d.querySelector(".spinner"),A=d.querySelector(".btn-spin"),B=d.querySelector(".ticker"),Oe=document.querySelector(".get-prize-container"),I=360/l.length,Ue=Math.floor(180/l.length),V="is-spinning",_="selected",Ne=window.getComputedStyle(u);let K,g=0,z=0,x;const He=()=>{l.forEach(({text:e,color:t,reaction:r},s)=>{const n=I*s*-1-Ue;u.insertAdjacentHTML("beforeend",`<li class="prize" data-reaction=${r} style="--rotate: ${n}deg">
        <span class="text">${e}</span>
      </li>`)})},Fe=()=>{u.setAttribute("style",`background: conic-gradient(
      from -90deg,
      ${l.map(({color:e},t)=>`${e} 0 ${100/l.length*(l.length-t)}%`).reverse()}
    );`)},je=()=>{Fe(),He(),x=d.querySelectorAll(".prize")},De=(e,t)=>(e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e),Q=()=>{const e=Ne.transform.split("(")[1].split(")")[0].split(","),t=e[0],r=e[1];let s=Math.atan2(r,t);s<0&&(s+=2*Math.PI);const n=Math.round(s*(180/Math.PI)),o=Math.floor(n/I);z!==o&&(B.style.animation="none",setTimeout(()=>B.style.animation=null,10),z=o),K=requestAnimationFrame(Q)},We=()=>{const e=Math.floor(g/I);x[e].classList.add(_);const t=l[e].text;setTimeout(()=>{d.style.display="none",introMessagePrize.style.display="none",congratulationsMessage.style.display="block",document.getElementById("congratulationMessage").innerHTML="Congratulations!",document.getElementById("congratulationMessage1").innerHTML=" You've won: ",document.getElementById("prizeMessage").innerText=t,Oe.style.display="block"},3e3)};A.addEventListener("click",()=>{A.disabled=!0,g=Math.floor(Math.random()*360+De(2e3,5e3)),x.forEach(e=>e.classList.remove(_)),d.classList.add(V),u.style.setProperty("--rotate",g),B.style.animation="none",Q()});u.addEventListener("transitionend",()=>{cancelAnimationFrame(K),g%=360,We(),d.classList.remove(V),u.style.setProperty("--rotate",g)});je();var Ge=document.getElementsByClassName("button-get");function Ve(){document.getElementById("email-prize").value,alert("Congratulations! Your prize is ready to be picked up. We will contact you at the specified email.")}Ge.onclick=function(){Ve()};var C=document.getElementById("myModalPrize"),_e=document.getElementById("openModalBtnPrize");_e.onclick=function(){C.style.display="block"};function Y(){C.style.display="none"}window.onclick=function(e){e.target==C&&Y()};var Ke=document.getElementById("closeModalPrize");Ke.onclick=function(){Y()};const i={modalBackdrop:document.querySelector(".js-backdrop-modal"),closeBtn:document.querySelector(".js-rating-close"),form:document.querySelector(".js-rating-form"),rateStars:document.querySelector(".js-stars-list"),rateValue:document.querySelector(".js-rating-data"),star:document.querySelectorAll(".js-rating-star")};let X=0;window.addEventListener("click",h);document.addEventListener("keydown",Ye);i.closeBtn.addEventListener("click",Qe);i.form.addEventListener("submit",Z);i.rateStars.addEventListener("click",Xe);function h(e){e.target.classList.contains("backdrop")&&(i.modalBackdrop.classList.remove("is-hidden"),window.removeEventListener("click",h))}function Qe(e){e.currentTarget&&(i.modalBackdrop.classList.add("is-hidden"),window.removeEventListener("click",h))}function Ye(e){e.code==="Escape"&&(i.modalBackdrop.classList.add("is-hidden"),window.removeEventListener("click",h))}function Xe(e){let t=e.target,r=i.rateStars.querySelector(".star-active");t.classList.add("star-active"),r&&r.classList.remove("star-active"),setTimeout(()=>{i.rateValue.textContent=`${t.dataset.rate}.0`},0),X=t.dataset.rate}function Z(e){e.preventDefault(),console.log({rating:X,email:e.target.elements.email.value,comment:e.target.elements.comment.value}),i.modalBackdrop.classList.remove("is-hidden"),i.form.removeEventListener("submit",Z)}
//# sourceMappingURL=main-38bdae37.js.map
