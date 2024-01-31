import{T as X,i as a,a as L}from"./vendor-29bef8ec.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(n){if(n.ep)return;n.ep=!0;const r=o(n);fetch(n.href,r)}})();const q=document.querySelector("[data-menu-open]"),O=document.querySelector("[data-menu-close]"),ee=document.querySelector(".nav"),Ee=document.querySelector('[data-action="homepage"]'),be=document.querySelector('[data-action="favoritespage"]'),z=document.querySelector(".menu-back-drop"),te=document.body,Se=document.querySelector(".header"),we=window.location.href;we.includes("favorite")&&(Ee.classList.remove("current"),be.classList.add("current"),Se.style.position="static");document.addEventListener("keydown",e=>{e.key==="Escape"&&D()});O.addEventListener("click",D);q.addEventListener("click",()=>{ee.classList.add("active"),q.classList.add("is-hidden"),O.classList.remove("is-hidden"),te.classList.add("lock"),z.classList.add("active")});function D(){ee.classList.remove("active"),q.classList.remove("is-hidden"),O.classList.add("is-hidden"),te.classList.remove("lock"),z.classList.remove("active")}z.addEventListener("click",ke);function ke(e){e.target.classList.contains("menu-back-drop")&&D()}const Me=document.querySelector(".quote-info"),oe="quote-of-the-day",B="date",Te=new Date,$=Te.getDate();async function qe(){try{const o=(await L.create({baseURL:"https://energyflow.b.goit.study/api"}).get("/quote")).data;se(o),Be(o,$)}catch(e){a.error({timeout:5e3,title:"Error",message:e.message,position:"topRight"})}}//! SAVE QUOTE AND DATA
function Be(e,t){localStorage.setItem(oe,JSON.stringify(e)),localStorage.setItem(B,t)}//! RENDER QUOTE
function se(e){const t=[e];Me.innerHTML=t.reduce((o,{quote:s,author:n})=>o+`<p class="quote-text">${s}</p>
        <h3 class="quote-author">${n}</h3>`,"")}//! CHECK DAY AND GET NEW QUOTE
async function $e(){const e=localStorage.getItem(B);if(isNaN(e)){a.error({timeout:5e3,title:"Error",message:error.message,position:"topRight"});return}if(parseInt(e)===$){const t=localStorage.getItem(oe);if(t){const o=JSON.parse(t);se(o)}return}await qe(),localStorage.setItem(B,$.toString())}$e();//! ANIMATION 
new X("#quote",{speed:26,startDelay:300,waitUntilVisible:!0,afterComplete:function(e){e.destroy()}}).go();new X("#motivation-txt",{speed:26,startDelay:300,waitUntilVisible:!0,afterComplete:function(e){e.destroy()}}).go();const Pe=document.querySelector(".filter-list"),H=document.querySelector(".gallery"),w=document.querySelector(".pagination-btn"),Ce=document.querySelector(".waist"),xe=L.create({baseURL:"https://energyflow.b.goit.study/api"});let V;const ne=document.querySelector('button[name="Muscles"]');let W;document.addEventListener("DOMContentLoaded",async()=>{await R({filter:"Muscles"}),ne.classList.add("active"),W=document.querySelector(".pg-num-btn"),W.classList.add("pg-num-btn-active")});const Ie=async({filter:e,page:t,limit:o})=>{try{return V=await xe.get("/filters",{params:{filter:e,page:t,limit:o}}),V}catch(s){console.error(s),a.error({message:s.message,color:"red",position:"topCenter"})}};Pe.addEventListener("click",e=>{e.preventDefault(),H.innerHTML="",w.innerHTML="",Ce.innerHTML="",e.target.tagName==="BUTTON"&&(ne.classList.remove("active"),R({filter:e.target.name}))});w.addEventListener("click",e=>{e.preventDefault(),e.target.tagName==="BUTTON"&&(w.innerHTML="",H.innerHTML="",R({filter:e.target.name,page:e.target.id}))});async function R({filter:e,page:t=1,limit:o=12}){try{const s=await Ie({filter:e,page:t,limit:o}),n=()=>{const m=s.data.totalPages;let c="";for(let l=1;l<=m;l++)c+=`<button id="${l}" class="pg-num-btn" type="button" name="${e}"
 >${l}</button>`;return c},r=s.data.results.reduce((m,{name:c,filter:l,imgUrl:v})=>m+`<li class="gallery-item" id=${c}>
          <div class="card" >            
             <img class="gallery-image"
             src="${v}"
             alt="${l}"            
            />            
            </div>
            <div class="card-description">
            <p class="name-description" id="${l}:${c}">${c}</p>
            <p class="filter-description">${l}</p>
            </div>
          </li>`,""),i=n();w.insertAdjacentHTML("afterbegin",i),H.insertAdjacentHTML("afterbegin",r)}catch(s){console.error(s),a.error({message:s.message,color:"red",position:"topCenter"})}}document.addEventListener("DOMContentLoaded",()=>{ie()});const N=document.getElementById("exerciseModal"),re=document.getElementById("closeModalBtn"),ae=document.getElementById("information"),d=document.getElementById("addToFavoritesBtn");let G,y;async function Ae(e){try{y=(await L.create({baseURL:"https://energyflow.b.goit.study/api/exercises"}).get(e)).data,Oe(y)}catch{a.error({title:"Error",message:"Error fetching exercise data: ",position:"topRight"})}}const ie=()=>{G=document.querySelectorAll(".workout-btn-container"),G.forEach(e=>{e.addEventListener("click",t=>{t.preventDefault();let o=t.target.id;Ae(o)})})};async function Oe(e){const{bodyPart:t,burnedCalories:o,description:s,equipment:n,gifUrl:r,name:i,popularity:m,rating:c,target:l,time:v}=e,T=`

        <div class="gif">
        <img src="${r}" alt="${i}" >
        </div>

        <div class = "text">

        <h2>${i}</h2>
        
        <div class="rating-container">
            <p>${c}</p>
            <svg class="icon-star" width="12" height="12">
                <use href="../img/sprite.svg#icon-star"></use>
            </svg>
        </div>

        <ul class="info-block">
    <li class="info-item">
        <span class="info-text">Target</span> ${l}
    </li>
    <li class="info-item">
        <span class="info-text">Body Part</span> ${t}
    </li>
    <li class="info-item">
        <span class="info-text">Equipment</span> ${n}
    </li>
    <li class="info-item">
        <span class="info-text">Popular</span> ${m}
    </li>
    <li class="info-item">
        <span class="info-text">Burned Calories</span> ${o}/${v}min
    </li>
</ul>


        <p class="description">Description: ${s}</p> 
        </div>`;ae.innerHTML=T,await U(),ze()}function ze(){N.classList.add("open"),document.body.style.overflow="hidden",re.addEventListener("click",k),document.addEventListener("mouseup",ce),document.addEventListener("keydown",le)}function k(){N.classList.remove("open"),re.removeEventListener("click",k),document.removeEventListener("mouseup",ce),document.removeEventListener("keydown",le),ae.innerHTML="",document.body.style.overflow="",d.removeEventListener("click",b),d.removeEventListener("click",S)}const ce=function(e){!document.getElementById("modal").contains(e.target)&&N.classList.contains("open")&&k()},le=function(e){e.key==="Escape"&&k()},De=e=>{const{_id:t,bodyPart:o,burnedCalories:s,description:n,equipment:r,gifUrl:i,name:m,popularity:c,rating:l,target:v,time:T}=e;return{_id:t,bodyPart:o,burnedCalories:s,description:n,equipment:r,gifUrl:i,name:m,popularity:c,rating:l,target:v,time:T}},b=()=>{let e=localStorage.getItem("favoritesCard"),t=[];e!=null&&(t=JSON.parse(e));const o=De(y);t.push(o),localStorage.setItem("favoritesCard",JSON.stringify(t)),U()},S=()=>{const{_id:e}=y;let t=localStorage.getItem("favoritesCard"),o=JSON.parse(t).filter(s=>s._id!=e);localStorage.setItem("favoritesCard",JSON.stringify(o)),U()},U=()=>{const{_id:e}=y;let t=localStorage.getItem("favoritesCard");d.removeEventListener("click",S),d.addEventListener("click",b),d.innerHTML="Add to favorites",t!=null&&JSON.parse(t).forEach(o=>{o._id==e?(d.innerHTML="Delete favorite",d.removeEventListener("click",b),d.addEventListener("click",S)):(d.removeEventListener("click",S),d.addEventListener("click",b),d.innerHTML="Add to favorites")})},He="Unfortunately, no results were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.",P=document.querySelector(".gallery"),J=document.querySelector(".section-title");document.querySelector("#slash");const C=document.querySelector(".waist"),x=document.querySelector("#search"),de=innerWidth,F=L.create({baseURL:"https://energyflow.b.goit.study/api"}),ue=async(e,{params:t})=>await F.get(e,{params:t});P.addEventListener("click",e=>{e.preventDefault(),C.innerHTML="",P.innerHTML="",x.style.display="block",C.classList.add("information-cards");const o=e.target.id.split(":");F.defaults.params={limit:de>1400?"9":"8",muscles:o[0]==="Muscles"?o[1]:null,bodypart:o[0]==="Body parts"?o[1]:null,equipment:o[0]==="Equipment"?o[1]:null},J.insertAdjacentHTML("beforeend",`<p id="slash">&#8260;<span class="title-span">${o[1]}</span></p>`),console.log(J),ue("/exercises",{params:{}}).then(s=>{me(s.data.results)}).catch(s=>{a.error({message:s.message,position:"topRight"})})});let E,K;x.addEventListener("input",e=>{clearTimeout(K),K=setTimeout(function(){E=x.value,console.log(E)},1e3),searchBlock.addEventListener("click",t=>{if(console.log(E.toLowerCase()),E.trim()!=="input-value"){P.innerHTML=`<div class="errorEmageContainer">${He}</div>`;return}F.defaults.params={limit:de>1400?"9":"8"},ue("/exercises",{params:{keyword:t.target.value}}).then(o=>{console.log(o.data),me(o.data.results)}).catch(o=>{a.error({message:o.message,position:"topRight"})})})});function me(e){C.insertAdjacentHTML("afterbegin",e.reduce((t,{burnedCalories:o,name:s,bodyPart:n,rating:r,time:i,target:m,_id:c})=>t+`<li class="gallery-card">
      <div class="header-card">
        <div class="workout">WORKOUT</div>
        <div class="rating">
            <p>${r}</p>
            <svg class="icon-star" width="12" height="12">
                <use href="../img/sprite.svg#icon-star"></use>
            </svg>
        </div>
                 
        <div class="workout-btn-container" data-action="right">
            <button class="workout-btn" id="${c}">Start
            <svg class="icon-right" width="14" height="16">
                <use href="../img/sprite.svg#icon-right"></use>
            </svg>
            </button>
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
            <li class="calories"><span class="params-text">Burned calories:</span> ${o}/${i}min</li>
            <li class="body-part"><span class="params-text">Body part:</span> ${n}</li>
            <li class="target"><span class="params-text">Target:</span> ${m}</li>
      </ul>
    </li>`,"")),ie()}const Re=document.querySelector(".footer-form"),Ne=document.querySelector(".footer-form-input"),Ue="https://energyflow.b.goit.study/api/subscription";Re.addEventListener("submit",Fe);async function Fe(e){e.preventDefault();const t=e.currentTarget.elements.footerInput.value.trim();if(!je(t))return _e();try{const o=await L.post(Ue,{email:t});if(o.status>=200&&o.status<300){const s=o.data.message;a.success({title:"OK",message:s,color:"white",position:"center"})}else throw new Error}catch(o){a.error({title:"Error",message:o.response.data.message,position:"center",backgroundColor:"gray"})}finally{Ne.value=""}}const je=e=>/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(e),_e=()=>{a.info({title:"",message:"Please give us a valid email.",color:"white",position:"center"})},Qe=100,I=document.querySelector(".skroll-btn"),Ve=()=>window.scrollY||document.documentElement.scrollTop;window.addEventListener("scroll",()=>{Ve()>Qe?I.classList.add("skroll-btn-active"):I.classList.remove("skroll-btn-active")});I.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});const p=[{text:"One-Month Membership",color:"rgba(232, 232, 232, 1)"},{text:"Personal Training Session",color:"rgb(126, 133, 127)"},{text:"Fitness Bracelet",color:"rgba(232, 232, 232, 1)"},{text:"25% Off Certificate",color:"rgb(126, 133, 127)"},{text:"$50 Gift Card",color:"rgba(232, 232, 232, 1)"},{text:"10% Off Certificate",color:"rgb(126, 133, 127)"},{text:"$30 Gift Card",color:"rgba(232, 232, 232, 1)"},{text:"Participation in Marathon",color:"rgb(126, 133, 127)"}],g=document.querySelector(".deal-wheel"),f=g.querySelector(".spinner"),Y=g.querySelector(".btn-spin"),A=g.querySelector(".ticker"),We=document.querySelector(".get-prize-container"),j=360/p.length,Ge=Math.floor(180/p.length),pe="is-spinning",ge="selected",Je=window.getComputedStyle(f);let fe,h=0,Z=0,_;const Ke=()=>{p.forEach(({text:e,color:t,reaction:o},s)=>{const n=j*s*-1-Ge;f.insertAdjacentHTML("beforeend",`<li class="prize" data-reaction=${o} style="--rotate: ${n}deg">
        <span class="text">${e}</span>
      </li>`)})},Ye=()=>{f.setAttribute("style",`background: conic-gradient(
      from -90deg,
      ${p.map(({color:e},t)=>`${e} 0 ${100/p.length*(p.length-t)}%`).reverse()}
    );`)},Ze=()=>{Ye(),Ke(),_=g.querySelectorAll(".prize")},Xe=(e,t)=>(e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e),ve=()=>{const e=Je.transform.split("(")[1].split(")")[0].split(","),t=e[0],o=e[1];let s=Math.atan2(o,t);s<0&&(s+=2*Math.PI);const n=Math.round(s*(180/Math.PI)),r=Math.floor(n/j);Z!==r&&(A.style.animation="none",setTimeout(()=>A.style.animation=null,10),Z=r),fe=requestAnimationFrame(ve)},et=()=>{const e=Math.floor(h/j);_[e].classList.add(ge);const t=p[e].text;setTimeout(()=>{g.style.display="none",introMessagePrize.style.display="none",congratulationsMessage.style.display="block",document.getElementById("congratulationMessage").innerHTML="Congratulations!",document.getElementById("congratulationMessage1").innerHTML=" You've won: ",document.getElementById("prizeMessage").innerText=t,We.style.display="block"},3e3)};Y.addEventListener("click",()=>{Y.disabled=!0,h=Math.floor(Math.random()*360+Xe(2e3,5e3)),_.forEach(e=>e.classList.remove(ge)),g.classList.add(pe),f.style.setProperty("--rotate",h),A.style.animation="none",ve()});f.addEventListener("transitionend",()=>{cancelAnimationFrame(fe),h%=360,et(),g.classList.remove(pe),f.style.setProperty("--rotate",h)});Ze();const tt=document.querySelector("#prizeForm");document.querySelector(".input-get");tt.addEventListener("submit",ot);async function ot(e){e.preventDefault();const t=e.currentTarget.elements.prizeInput.value.trim();if(!st(t))return nt()}const st=e=>/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(e),nt=()=>{a.info({title:"",message:"Please give us a valid email.",color:"white",position:"center"})};var Q=document.getElementById("myModalPrize"),rt=document.getElementById("openModalBtnPrize");rt.onclick=function(){Q.style.display="flex"};function ye(){Q.style.display="none"}window.onclick=function(e){e.target==Q&&ye()};var at=document.getElementById("closeModalPrize");at.onclick=function(){ye()};document.addEventListener("DOMContentLoaded",function(){function e(){var s=document.getElementById("email-prize").value,n=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;if(!n.test(s)){a.error({title:"Error",message:"Enter a valid email!",zIndex:1001,timeout:2e3,backgroundColor:"white",color:"black",iconColor:"black"});return}a.success({title:"Success",message:"Form submitted!",zIndex:1001,timeout:2e3,backgroundColor:"white",color:"black",iconColor:"black"}),setTimeout(function(){t()},1e3)}function t(){var s=document.getElementById("myModalPrize");s.style.display="none"}var o=document.querySelector(".button-get");o.addEventListener("click",e)});document.querySelector(".favoritePartInfo");localStorage.getItem("favorite");const u={modalBackdrop:document.querySelector(".js-backdrop-modal"),closeBtn:document.querySelector(".js-rating-close"),form:document.querySelector(".js-rating-form"),rateStars:document.querySelector(".js-stars-list"),rateValue:document.querySelector(".js-rating-data"),star:document.querySelectorAll(".js-rating-star")};let he=0;window.addEventListener("click",M);document.addEventListener("keydown",ct);u.closeBtn.addEventListener("click",it);u.form.addEventListener("submit",Le);u.rateStars.addEventListener("click",lt);function M(e){e.target.classList.contains("backdrop")&&(u.modalBackdrop.classList.remove("is-hidden"),window.removeEventListener("click",M))}function it(e){e.currentTarget&&(u.modalBackdrop.classList.add("is-hidden"),window.removeEventListener("click",M))}function ct(e){e.code==="Escape"&&(u.modalBackdrop.classList.add("is-hidden"),window.removeEventListener("click",M))}function lt(e){let t=e.target,o=u.rateStars.querySelector(".star-active");t.classList.add("star-active"),o&&o.classList.remove("star-active"),setTimeout(()=>{u.rateValue.textContent=`${t.dataset.rate}.0`},0),he=t.dataset.rate}function Le(e){e.preventDefault(),console.log({rating:he,email:e.target.elements.email.value,comment:e.target.elements.comment.value}),u.modalBackdrop.classList.remove("is-hidden"),u.form.removeEventListener("submit",Le)}
//# sourceMappingURL=main-0dd5dc32.js.map
