import{a as m,i as c}from"./vendor-8cce9181.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function r(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(n){if(n.ep)return;n.ep=!0;const o=r(n);fetch(n.href,o)}})();const S=document.querySelector("[data-menu-open]"),P=document.querySelector("[data-menu-close]"),R=document.querySelector(".nav"),te=document.querySelector('[data-action="homepage"]'),re=document.querySelector('[data-action="favoritespage"]'),q=document.querySelector(".menu-back-drop"),O=document.body,U=window.location.href;console.log(U);U.includes("favorite")&&(te.classList.remove("current"),re.classList.add("current"));document.addEventListener("keydown",e=>{e.key==="Escape"&&$()});P.addEventListener("click",$);S.addEventListener("click",()=>{R.classList.add("active"),S.classList.add("is-hidden"),P.classList.remove("is-hidden"),O.classList.add("lock"),q.classList.add("active")});function $(){R.classList.remove("active"),S.classList.remove("is-hidden"),P.classList.add("is-hidden"),O.classList.remove("lock"),q.classList.remove("active")}q.addEventListener("click",ne);function ne(e){e.target.classList.contains("menu-back-drop")&&$()}const oe=document.querySelector(".quote-info");async function se(){try{const t=await m.create({baseURL:"https://energyflow.b.goit.study/api"}).get("/quote");ae(t.data)}catch(e){console.error("SOMETHING WENT WRONG",e)}}//! RENDER QUOTE
function ae(e){const t=[e];oe.innerHTML=t.reduce((r,{quote:s,author:n})=>r+`<p class="quote-text">${s}</p>
        <h3 class="quote-author">${n}</h3>`,"")}se();let E;const ie=document.querySelector(".filter-list");let b;const N=document.querySelector(".gallery"),ce=document.querySelector('button[name="Muscles"]');ce.disabled=!1;ie.addEventListener("click",e=>{N.innerHTML="",e.target.tagName==="BUTTON"&&(b=e.target.name,console.log(b),le(b))});async function le(e){E=await m.create({baseURL:"https://energyflow.b.goit.study/api",params:{filter:e,page:"1",limit:"12"}}).get("/filters"),console.log(E);const r=E.data.results.reduce((s,{name:n,filter:o,imgUrl:a})=>s+`<li class="gallery-item">
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
          </li>`,"");N.insertAdjacentHTML("beforeend",r)}const T=document.getElementById("exerciseModal"),H=document.getElementById("closeModalBtn");document.getElementById("addToFavoritesBtn");document.getElementById("giveRatingBtn");const de=document.getElementById("information");function ue(){T.classList.add("open"),H.addEventListener("click",f),document.addEventListener("mouseup",F),document.addEventListener("keydown",j),document.body.style.overflow="hidden",me().then(e=>{const{gifUrl:t,name:r,rating:s,target:n,bodyPart:o,equipment:a,popularity:v,burnedCalories:L,description:ee}=e;de.innerHTML=`
            <img src="${t}" alt="${r}">
            <h2>${r}</h2>
            <p>Rating: ${s}</p>
            <p>Target: ${n}</p>
            <p>Body Part: ${o}</p>
            <p>Equipment: ${a}</p>
            <p>Popular: ${v}</p>
            <p>Burned Calories: ${L}</p>
            <p>Description: ${ee}</p>
        `}).catch(e=>{c.error({title:"Error",message:"Sorry. Please try again!",position:"topRight"})})}function f(){T.classList.remove("open"),H.removeEventListener("click",f),document.removeEventListener("mouseup",F),document.removeEventListener("keydown",j),document.body.style.overflow=""}const F=function(e){!document.getElementById("modal").contains(e.target)&&T.classList.contains("open")&&f()},j=function(e){e.key==="Escape"&&f()};async function me(e){return pe(e)}async function pe(e){const t=`https://energyflow.b.goit.study/api/exercises/${e}`;try{return(await m.get(t)).data}catch(r){throw c.error({title:"Error",message:"Error fetching exercise data: ",position:"topRight"}),r}}const ge=8,p=document.querySelector(".gallery"),D=new URL("https://energyflow.b.goit.study/api/filters?"),w=new URL("https://energyflow.b.goit.study/api/exercises?"),W=async e=>(await m.get(e)).data;D.searchParams.append("filter","Muscles");W(D).then(e=>{console.log(e),console.log(e.results[0].name)}).catch(e=>{c.error({message:"Sorry. Please try again!",position:"topRight"})});p.addEventListener("click",e=>{e.preventDefault(),p.innerHTML="",p.classList.add("information-cards"),w.searchParams.append("limit",ge),w.searchParams.append("page",1),W(w).then(t=>{console.log(t),ye(t.results)}).catch(t=>{c.error({message:"Sorry. Please try again!",position:"topRight"})})});function ye(e){p.insertAdjacentHTML("afterbegin",e.reduce((t,{burnedCalories:r,name:s,bodyPart:n,rating:o,time:a,target:v,_id:L})=>t+`<li class="gallery-card" data-id="${L}">
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
    </li>`,""))}p.addEventListener("click",e=>{e.preventDefault();const t=e.target.closest(".gallery-card");t&&(t.dataset.id,ue())});const fe=document.querySelector(".search-block"),he=document.querySelector(".custom-pagination-btn"),k=document.querySelectorAll(".render-pagination-btn"),ve=m.create({baseURL:"https://energyflow.b.goit.study/api/"}),Le={fetchFilters:async e=>{try{return(await ve.get("filters",{params:e})).data.results}catch(t){console.error(t),Ee(t)}}},Ee=e=>{throw c.error({title:"API Error",message:"An error occurred while fetching data from the API."}),e},be=async e=>{try{return(await Le.fetchFilters({...e})).map(we).join("")}catch(t){return console.error(t),G(),""}},we=e=>`<li class="render-page-one-item" data-name="${e.name}">
            <img src="${e.imgUrl}" alt="" />
            <div class="render-page-one-img-container">
              <p class="render-page-one-item-title">${e.name}</p>
              <p class="render-page-one-item-zones">${e.filter}</p>
            </div>
          </li>`,G=()=>{c.error({title:"Rendering Error",message:"An error occurred while rendering data."})},ke=async e=>{try{const t=await e;fe.innerHTML=t}catch(t){console.error(t),G()}},Se=e=>{const t=parseInt(e.dataset.btn)===3?1:-1;k.forEach(r=>{r.textContent=parseInt(r.textContent)+t}),k[0].style.display=y.page>1?"block":"none",k[2].style.display=y.page>=Pe-1?"none":"block"},Me=e=>{e.target.nodeName==="BUTTON"&&(y.page=parseInt(e.target.textContent),ke(be(y)),Se(e.target))},Be=getComputedStyle(document.querySelector("body")).width,V=Be<768?8:12,y={limit:V,page:1},Pe=69/V;he.addEventListener("click",Me);const qe=document.querySelector(".footer-form"),$e=document.querySelector(".footer-form-input"),Te="https://energyflow.b.goit.study/api/subscription";qe.addEventListener("submit",Ie);async function Ie(e){e.preventDefault();const t=e.currentTarget.elements.footerInput.value.trim();if(!xe(t))return Ce();try{const r=await m.post(Te,{email:t});if(r.status>=200&&r.status<300){const s=r.data.message;c.success({title:"OK",message:s,color:"white",position:"center"})}else throw new Error}catch(r){c.error({title:"Error",message:r.response.data.message,position:"center",backgroundColor:"gray"})}finally{$e.value=""}}const xe=e=>/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(e),Ce=()=>{c.info({title:"",message:"Please give us a valid email.",color:"white",position:"center"})},Ae=100,M=document.querySelector(".skroll-btn"),ze=()=>window.scrollY||document.documentElement.scrollTop;window.addEventListener("scroll",()=>{ze()>Ae?M.classList.add("skroll-btn-active"):M.classList.remove("skroll-btn-active")});M.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});const l=[{text:"One-Month Membership",color:"rgba(232, 232, 232, 1)"},{text:"Personal Training Session",color:"rgb(62, 184, 119)"},{text:"Fitness Bracelet",color:"rgba(232, 232, 232, 1)"},{text:"25% Off Certificate",color:"rgb(62, 184, 119)"},{text:"$50 Gift Card",color:"rgba(232, 232, 232, 1)"},{text:"10% Off Certificate",color:"rgb(62, 184, 119)"},{text:"$30 Gift Card",color:"rgba(232, 232, 232, 1)"},{text:"Participation in Marathon",color:"rgb(62, 184, 119)"}],d=document.querySelector(".deal-wheel"),u=d.querySelector(".spinner"),A=d.querySelector(".btn-spin"),B=d.querySelector(".ticker"),Re=document.querySelector(".get-prize-container"),I=360/l.length,Oe=Math.floor(180/l.length),_="is-spinning",K="selected",Ue=window.getComputedStyle(u);let Q,g=0,z=0,x;const Ne=()=>{l.forEach(({text:e,color:t,reaction:r},s)=>{const n=I*s*-1-Oe;u.insertAdjacentHTML("beforeend",`<li class="prize" data-reaction=${r} style="--rotate: ${n}deg">
        <span class="text">${e}</span>
      </li>`)})},He=()=>{u.setAttribute("style",`background: conic-gradient(
      from -90deg,
      ${l.map(({color:e},t)=>`${e} 0 ${100/l.length*(l.length-t)}%`).reverse()}
    );`)},Fe=()=>{He(),Ne(),x=d.querySelectorAll(".prize")},je=(e,t)=>(e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e),Y=()=>{const e=Ue.transform.split("(")[1].split(")")[0].split(","),t=e[0],r=e[1];let s=Math.atan2(r,t);s<0&&(s+=2*Math.PI);const n=Math.round(s*(180/Math.PI)),o=Math.floor(n/I);z!==o&&(B.style.animation="none",setTimeout(()=>B.style.animation=null,10),z=o),Q=requestAnimationFrame(Y)},De=()=>{const e=Math.floor(g/I);x[e].classList.add(K);const t=l[e].text;setTimeout(()=>{d.style.display="none",introMessagePrize.style.display="none",congratulationsMessage.style.display="block",document.getElementById("congratulationMessage").innerHTML="Congratulations!",document.getElementById("congratulationMessage1").innerHTML=" You've won: ",document.getElementById("prizeMessage").innerText=t,Re.style.display="block"},3e3)};A.addEventListener("click",()=>{A.disabled=!0,g=Math.floor(Math.random()*360+je(2e3,5e3)),x.forEach(e=>e.classList.remove(K)),d.classList.add(_),u.style.setProperty("--rotate",g),B.style.animation="none",Y()});u.addEventListener("transitionend",()=>{cancelAnimationFrame(Q),g%=360,De(),d.classList.remove(_),u.style.setProperty("--rotate",g)});Fe();var We=document.getElementsByClassName("button-get");function Ge(){document.getElementById("email-prize").value,alert("Congratulations! Your prize is ready to be picked up. We will contact you at the specified email.")}We.onclick=function(){Ge()};var C=document.getElementById("myModalPrize"),Ve=document.getElementById("openModalBtnPrize");Ve.onclick=function(){C.style.display="block"};function X(){C.style.display="none"}window.onclick=function(e){e.target==C&&X()};var _e=document.getElementById("closeModalPrize");_e.onclick=function(){X()};const i={modalBackdrop:document.querySelector(".js-backdrop-modal"),closeBtn:document.querySelector(".js-rating-close"),form:document.querySelector(".js-rating-form"),rateStars:document.querySelector(".js-stars-list"),rateValue:document.querySelector(".js-rating-data"),star:document.querySelectorAll(".js-rating-star")};let Z=0;window.addEventListener("click",h);document.addEventListener("keydown",Qe);i.closeBtn.addEventListener("click",Ke);i.form.addEventListener("submit",J);i.rateStars.addEventListener("click",Ye);function h(e){e.target.classList.contains("backdrop")&&(i.modalBackdrop.classList.remove("is-hidden"),window.removeEventListener("click",h))}function Ke(e){e.currentTarget&&(i.modalBackdrop.classList.add("is-hidden"),window.removeEventListener("click",h))}function Qe(e){e.code==="Escape"&&(i.modalBackdrop.classList.add("is-hidden"),window.removeEventListener("click",h))}function Ye(e){let t=e.target,r=i.rateStars.querySelector(".star-active");t.classList.add("star-active"),r&&r.classList.remove("star-active"),setTimeout(()=>{i.rateValue.textContent=`${t.dataset.rate}.0`},0),Z=t.dataset.rate}function J(e){e.preventDefault(),console.log({rating:Z,email:e.target.elements.email.value,comment:e.target.elements.comment.value}),i.modalBackdrop.classList.remove("is-hidden"),i.form.removeEventListener("submit",J)}
//# sourceMappingURL=main-8f09ca41.js.map
