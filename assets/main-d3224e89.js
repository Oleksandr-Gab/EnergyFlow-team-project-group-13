import{T as Y,i as a,a as f}from"./vendor-29bef8ec.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(n){if(n.ep)return;n.ep=!0;const r=o(n);fetch(n.href,r)}})();const k=document.querySelector("[data-menu-open]"),A=document.querySelector("[data-menu-close]"),J=document.querySelector(".nav"),Le=document.querySelector('[data-action="homepage"]'),be=document.querySelector('[data-action="favoritespage"]'),C=document.querySelector(".menu-back-drop"),Z=document.body,Ee=document.querySelector(".header"),we=window.location.href;we.includes("favorite")&&(Le.classList.remove("current"),be.classList.add("current"),Ee.style.position="static");document.addEventListener("keydown",e=>{e.key==="Escape"&&I()});A.addEventListener("click",I);k.addEventListener("click",()=>{J.classList.add("active"),k.classList.add("is-hidden"),A.classList.remove("is-hidden"),Z.classList.add("lock"),C.classList.add("active")});function I(){J.classList.remove("active"),k.classList.remove("is-hidden"),A.classList.add("is-hidden"),Z.classList.remove("lock"),C.classList.remove("active")}C.addEventListener("click",Se);function Se(e){e.target.classList.contains("menu-back-drop")&&I()}const ke=document.querySelector(".quote-info"),X="quote-of-the-day",M="date",Me=new Date,q=Me.getDate();async function qe(){try{const o=(await f.create({baseURL:"https://energyflow.b.goit.study/api"}).get("/quote")).data;ee(o),Te(o,q)}catch(e){a.error({timeout:5e3,title:"Error",message:e.message,position:"topRight"})}}//! SAVE QUOTE AND DATA
function Te(e,t){localStorage.setItem(X,JSON.stringify(e)),localStorage.setItem(M,t)}//! RENDER QUOTE
function ee(e){const t=[e];ke.innerHTML=t.reduce((o,{quote:s,author:n})=>o+`<p class="quote-text">${s}</p>
        <h3 class="quote-author">${n}</h3>`,"")}//! CHECK DAY AND GET NEW QUOTE
async function Be(){const e=localStorage.getItem(M);if(isNaN(e)){a.error({timeout:5e3,title:"Error",message:error.message,position:"topRight"});return}if(parseInt(e)===q){const t=localStorage.getItem(X);if(t){const o=JSON.parse(t);ee(o)}return}await qe(),localStorage.setItem(M,q.toString())}Be();//! ANIMATION 
new Y("#quote",{speed:26,startDelay:300,waitUntilVisible:!0,afterComplete:function(e){e.destroy()}}).go();new Y("#motivation-txt",{speed:26,startDelay:300,waitUntilVisible:!0,afterComplete:function(e){e.destroy()}}).go();const $e=document.querySelector(".filter-list"),z=document.querySelector(".gallery"),h=document.querySelector(".pagination-btn"),Pe=document.querySelector(".waist"),xe=f.create({baseURL:"https://energyflow.b.goit.study/api"});let F;const te=document.querySelector('button[name="Muscles"]');let V;document.addEventListener("DOMContentLoaded",async()=>{await D({filter:"Muscles"}),te.classList.add("active"),V=document.querySelector(".pg-num-btn"),V.classList.add("pg-num-btn-active")});const Ae=async({filter:e,page:t,limit:o})=>{try{return F=await xe.get("/filters",{params:{filter:e,page:t,limit:o}}),F}catch(s){console.error(s),a.error({message:s.message,color:"red",position:"topCenter"})}};$e.addEventListener("click",e=>{e.preventDefault(),z.innerHTML="",h.innerHTML="",Pe.innerHTML="",e.target.tagName==="BUTTON"&&(te.classList.remove("active"),D({filter:e.target.name}))});h.addEventListener("click",e=>{e.preventDefault(),e.target.tagName==="BUTTON"&&(h.innerHTML="",z.innerHTML="",D({filter:e.target.name,page:e.target.id}))});async function D({filter:e,page:t=1,limit:o=12}){try{const s=await Ae({filter:e,page:t,limit:o}),n=()=>{const u=s.data.totalPages;let c="";for(let l=1;l<=u;l++)c+=`<button id="${l}" class="pg-num-btn" type="button" name="${e}"
 >${l}</button>`;return c},r=s.data.results.reduce((u,{name:c,filter:l,imgUrl:w})=>u+`<li class="gallery-item" id=${c}>
          <div class="card" >            
             <img class="gallery-image"
             src="${w}"
             alt="${l}"            
            />            
            </div>
            <div class="card-description">
            <p class="name-description" id="${l}:${c}">${c}</p>
            <p class="filter-description">${l}</p>
            </div>
          </li>`,""),i=n();h.insertAdjacentHTML("afterbegin",i),z.insertAdjacentHTML("afterbegin",r)}catch(s){console.error(s),a.error({message:s.message,color:"red",position:"topCenter"})}}document.addEventListener("DOMContentLoaded",()=>{ne()});const O=document.getElementById("exerciseModal"),oe=document.getElementById("closeModalBtn"),se=document.getElementById("information");let W;async function Ce(e){try{const s=(await f.create({baseURL:"https://energyflow.b.goit.study/api/exercises"}).get(e)).data;console.log(s),Ie(s)}catch{a.error({title:"Error",message:"Error fetching exercise data: ",position:"topRight"})}}const ne=()=>{W=document.querySelectorAll(".workout-btn-container"),W.forEach(e=>{e.addEventListener("click",t=>{t.preventDefault();let o=t.target.id;Ce(o)})})};function Ie(e){const{bodyPart:t,burnedCalories:o,description:s,equipment:n,gifUrl:r,name:i,popularity:u,rating:c,target:l,time:w}=e,j=`

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
        <span class="info-text">Popular</span> ${u}
    </li>
    <li class="info-item">
        <span class="info-text">Burned Calories</span> ${o}/${w}min
    </li>
</ul>


        <p class="description">Description: ${s}</p> 
        </div>`;console.log(j),se.innerHTML=j,ze()}function ze(){O.classList.add("open"),document.body.style.overflow="hidden",oe.addEventListener("click",b),document.addEventListener("mouseup",re),document.addEventListener("keydown",ae)}function b(){O.classList.remove("open"),oe.removeEventListener("click",b),document.removeEventListener("mouseup",re),document.removeEventListener("keydown",ae),se.innerHTML="",document.body.style.overflow=""}const re=function(e){!document.getElementById("modal").contains(e.target)&&O.classList.contains("open")&&b()},ae=function(e){e.key==="Escape"&&b()},De="Unfortunately, no results were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.",T=document.querySelector(".gallery"),Q=document.querySelector(".section-title");document.querySelector("#slash");const B=document.querySelector(".waist"),$=document.querySelector("#search"),ie=innerWidth,R=f.create({baseURL:"https://energyflow.b.goit.study/api"}),ce=async(e,{params:t})=>await R.get(e,{params:t});T.addEventListener("click",e=>{e.preventDefault(),B.innerHTML="",T.innerHTML="",$.style.display="block",B.classList.add("information-cards");const o=e.target.id.split(":");R.defaults.params={limit:ie>1400?"9":"8",muscles:o[0]==="Muscles"?o[1]:null,bodypart:o[0]==="Body parts"?o[1]:null,equipment:o[0]==="Equipment"?o[1]:null},Q.insertAdjacentHTML("beforeend",`<p id="slash">&#8260;<span class="title-span">${o[1]}</span></p>`),console.log(Q),ce("/exercises",{params:{}}).then(s=>{le(s.data.results)}).catch(s=>{a.error({message:s.message,position:"topRight"})})});let v,_;$.addEventListener("input",e=>{clearTimeout(_),_=setTimeout(function(){v=$.value,console.log(v)},1e3),searchBlock.addEventListener("click",t=>{if(console.log(v.toLowerCase()),v.trim()!=="input-value"){T.innerHTML=`<div class="errorEmageContainer">${De}</div>`;return}R.defaults.params={limit:ie>1400?"9":"8"},ce("/exercises",{params:{keyword:t.target.value}}).then(o=>{console.log(o.data),le(o.data.results)}).catch(o=>{a.error({message:o.message,position:"topRight"})})})});function le(e){B.insertAdjacentHTML("afterbegin",e.reduce((t,{burnedCalories:o,name:s,bodyPart:n,rating:r,time:i,target:u,_id:c})=>t+`<li class="gallery-card">
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
            <li class="target"><span class="params-text">Target:</span> ${u}</li>
      </ul>
    </li>`,"")),ne()}const Oe=document.querySelector(".search-block"),Re=document.querySelector(".custom-pagination-btn"),S=document.querySelectorAll(".render-pagination-btn"),He=f.create({baseURL:"https://energyflow.b.goit.study/api/"}),Ue={fetchFilters:async e=>{try{return(await He.get("filters",{params:e})).data.results}catch(t){console.error(t),Ne(t)}}},Ne=e=>{throw a.error({title:"API Error",message:"An error occurred while fetching data from the API."}),e},je=async e=>{try{return(await Ue.fetchFilters({...e})).map(Fe).join("")}catch(t){return console.error(t),de(),""}},Fe=e=>`<li class="render-page-one-item" data-name="${e.name}">
            <img src="${e.imgUrl}" alt="" />
            <div class="render-page-one-img-container">
              <p class="render-page-one-item-title">${e.name}</p>
              <p class="render-page-one-item-zones">${e.filter}</p>
            </div>
          </li>`,de=()=>{a.error({title:"Rendering Error",message:"An error occurred while rendering data."})},Ve=async e=>{try{const t=await e;Oe.innerHTML=t}catch(t){console.error(t),de()}},We=e=>{const t=parseInt(e.dataset.btn)===3?1:-1;S.forEach(o=>{o.textContent=parseInt(o.textContent)+t}),S[0].style.display=L.page>1?"block":"none",S[2].style.display=L.page>=Ge-1?"none":"block"},Qe=e=>{e.target.nodeName==="BUTTON"&&(L.page=parseInt(e.target.textContent),Ve(je(L)),We(e.target))},_e=getComputedStyle(document.querySelector("body")).width,ue=_e<768?8:12,L={limit:ue,page:1},Ge=69/ue;Re.addEventListener("click",Qe);const Ke=document.querySelector(".footer-form"),Ye=document.querySelector(".footer-form-input"),Je="https://energyflow.b.goit.study/api/subscription";Ke.addEventListener("submit",Ze);async function Ze(e){e.preventDefault();const t=e.currentTarget.elements.footerInput.value.trim();if(!Xe(t))return et();try{const o=await f.post(Je,{email:t});if(o.status>=200&&o.status<300){const s=o.data.message;a.success({title:"OK",message:s,color:"white",position:"center"})}else throw new Error}catch(o){a.error({title:"Error",message:o.response.data.message,position:"center",backgroundColor:"gray"})}finally{Ye.value=""}}const Xe=e=>/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(e),et=()=>{a.info({title:"",message:"Please give us a valid email.",color:"white",position:"center"})},tt=100,P=document.querySelector(".skroll-btn"),ot=()=>window.scrollY||document.documentElement.scrollTop;window.addEventListener("scroll",()=>{ot()>tt?P.classList.add("skroll-btn-active"):P.classList.remove("skroll-btn-active")});P.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});const m=[{text:"One-Month Membership",color:"rgba(232, 232, 232, 1)"},{text:"Personal Training Session",color:"rgb(126, 133, 127)"},{text:"Fitness Bracelet",color:"rgba(232, 232, 232, 1)"},{text:"25% Off Certificate",color:"rgb(126, 133, 127)"},{text:"$50 Gift Card",color:"rgba(232, 232, 232, 1)"},{text:"10% Off Certificate",color:"rgb(126, 133, 127)"},{text:"$30 Gift Card",color:"rgba(232, 232, 232, 1)"},{text:"Participation in Marathon",color:"rgb(126, 133, 127)"}],p=document.querySelector(".deal-wheel"),g=p.querySelector(".spinner"),G=p.querySelector(".btn-spin"),x=p.querySelector(".ticker"),st=document.querySelector(".get-prize-container"),H=360/m.length,nt=Math.floor(180/m.length),me="is-spinning",pe="selected",rt=window.getComputedStyle(g);let ge,y=0,K=0,U;const at=()=>{m.forEach(({text:e,color:t,reaction:o},s)=>{const n=H*s*-1-nt;g.insertAdjacentHTML("beforeend",`<li class="prize" data-reaction=${o} style="--rotate: ${n}deg">
        <span class="text">${e}</span>
      </li>`)})},it=()=>{g.setAttribute("style",`background: conic-gradient(
      from -90deg,
      ${m.map(({color:e},t)=>`${e} 0 ${100/m.length*(m.length-t)}%`).reverse()}
    );`)},ct=()=>{it(),at(),U=p.querySelectorAll(".prize")},lt=(e,t)=>(e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e),fe=()=>{const e=rt.transform.split("(")[1].split(")")[0].split(","),t=e[0],o=e[1];let s=Math.atan2(o,t);s<0&&(s+=2*Math.PI);const n=Math.round(s*(180/Math.PI)),r=Math.floor(n/H);K!==r&&(x.style.animation="none",setTimeout(()=>x.style.animation=null,10),K=r),ge=requestAnimationFrame(fe)},dt=()=>{const e=Math.floor(y/H);U[e].classList.add(pe);const t=m[e].text;setTimeout(()=>{p.style.display="none",introMessagePrize.style.display="none",congratulationsMessage.style.display="block",document.getElementById("congratulationMessage").innerHTML="Congratulations!",document.getElementById("congratulationMessage1").innerHTML=" You've won: ",document.getElementById("prizeMessage").innerText=t,st.style.display="block"},3e3)};G.addEventListener("click",()=>{G.disabled=!0,y=Math.floor(Math.random()*360+lt(2e3,5e3)),U.forEach(e=>e.classList.remove(pe)),p.classList.add(me),g.style.setProperty("--rotate",y),x.style.animation="none",fe()});g.addEventListener("transitionend",()=>{cancelAnimationFrame(ge),y%=360,dt(),p.classList.remove(me),g.style.setProperty("--rotate",y)});ct();const ut=document.querySelector("#prizeForm");document.querySelector(".input-get");ut.addEventListener("submit",mt);async function mt(e){e.preventDefault();const t=e.currentTarget.elements.prizeInput.value.trim();if(!pt(t))return gt()}const pt=e=>/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(e),gt=()=>{a.info({title:"",message:"Please give us a valid email.",color:"white",position:"center"})};var N=document.getElementById("myModalPrize"),ft=document.getElementById("openModalBtnPrize");ft.onclick=function(){N.style.display="flex"};function ye(){N.style.display="none"}window.onclick=function(e){e.target==N&&ye()};var yt=document.getElementById("closeModalPrize");yt.onclick=function(){ye()};document.addEventListener("DOMContentLoaded",function(){function e(){var s=document.getElementById("email-prize").value,n=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;if(!n.test(s)){a.error({title:"Error",message:"Enter a valid email!",zIndex:1001,timeout:2e3,backgroundColor:"white",color:"black",iconColor:"black"});return}a.success({title:"Success",message:"Form submitted!",zIndex:1001,timeout:2e3,backgroundColor:"white",color:"black",iconColor:"black"}),setTimeout(function(){t()},1e3)}function t(){var s=document.getElementById("myModalPrize");s.style.display="none"}var o=document.querySelector(".button-get");o.addEventListener("click",e)});const d={modalBackdrop:document.querySelector(".js-backdrop-modal"),closeBtn:document.querySelector(".js-rating-close"),form:document.querySelector(".js-rating-form"),rateStars:document.querySelector(".js-stars-list"),rateValue:document.querySelector(".js-rating-data"),star:document.querySelectorAll(".js-rating-star")};let ve=0;window.addEventListener("click",E);document.addEventListener("keydown",ht);d.closeBtn.addEventListener("click",vt);d.form.addEventListener("submit",he);d.rateStars.addEventListener("click",Lt);function E(e){e.target.classList.contains("backdrop")&&(d.modalBackdrop.classList.remove("is-hidden"),window.removeEventListener("click",E))}function vt(e){e.currentTarget&&(d.modalBackdrop.classList.add("is-hidden"),window.removeEventListener("click",E))}function ht(e){e.code==="Escape"&&(d.modalBackdrop.classList.add("is-hidden"),window.removeEventListener("click",E))}function Lt(e){let t=e.target,o=d.rateStars.querySelector(".star-active");t.classList.add("star-active"),o&&o.classList.remove("star-active"),setTimeout(()=>{d.rateValue.textContent=`${t.dataset.rate}.0`},0),ve=t.dataset.rate}function he(e){e.preventDefault(),console.log({rating:ve,email:e.target.elements.email.value,comment:e.target.elements.comment.value}),d.modalBackdrop.classList.remove("is-hidden"),d.form.removeEventListener("submit",he)}
//# sourceMappingURL=main-d3224e89.js.map
