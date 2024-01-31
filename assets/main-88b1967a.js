import{T as J,i as a,a as h}from"./vendor-29bef8ec.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(n){if(n.ep)return;n.ep=!0;const r=s(n);fetch(n.href,r)}})();const k=document.querySelector("[data-menu-open]"),B=document.querySelector("[data-menu-close]"),V=document.querySelector(".nav"),pe=document.querySelector('[data-action="homepage"]'),ge=document.querySelector('[data-action="favoritespage"]'),C=document.querySelector(".menu-back-drop"),K=document.body,fe=document.querySelector(".header"),ye=window.location.href;ye.includes("favorite")&&(pe.classList.remove("current"),ge.classList.add("current"),fe.style.position="static");document.addEventListener("keydown",e=>{e.key==="Escape"&&x()});B.addEventListener("click",x);k.addEventListener("click",()=>{V.classList.add("active"),k.classList.add("is-hidden"),B.classList.remove("is-hidden"),K.classList.add("lock"),C.classList.add("active")});function x(){V.classList.remove("active"),k.classList.remove("is-hidden"),B.classList.add("is-hidden"),K.classList.remove("lock"),C.classList.remove("active")}C.addEventListener("click",ve);function ve(e){e.target.classList.contains("menu-back-drop")&&x()}const he=document.querySelector(".quote-info"),Y="quote-of-the-day",T="date",Le=new Date,q=Le.getDate();async function be(){try{const s=(await h.create({baseURL:"https://energyflow.b.goit.study/api"}).get("/quote")).data;Z(s),Ee(s,q)}catch(e){a.error({timeout:5e3,title:"Error",message:e.message,position:"topRight"})}}//! SAVE QUOTE AND DATA
function Ee(e,t){localStorage.setItem(Y,JSON.stringify(e)),localStorage.setItem(T,t)}//! RENDER QUOTE
function Z(e){const t=[e];he.innerHTML=t.reduce((s,{quote:o,author:n})=>s+`<p class="quote-text">${o}</p>
        <h3 class="quote-author">${n}</h3>`,"")}//! CHECK DAY AND GET NEW QUOTE
async function Se(){const e=localStorage.getItem(T);if(isNaN(e)){a.error({timeout:5e3,title:"Error",message:error.message,position:"topRight"});return}if(parseInt(e)===q){const t=localStorage.getItem(Y);if(t){const s=JSON.parse(t);Z(s)}return}await be(),localStorage.setItem(T,q.toString())}Se();//! ANIMATION 
new J("#quote",{speed:26,startDelay:300,waitUntilVisible:!0,afterComplete:function(e){e.destroy()}}).go();new J("#motivation-txt",{speed:26,startDelay:300,waitUntilVisible:!0,afterComplete:function(e){e.destroy()}}).go();const Me=document.querySelector(".filter-list"),A=document.querySelector(".gallery"),E=document.querySelector(".pagination-btn"),we=document.querySelector(".waist"),ke=h.create({baseURL:"https://energyflow.b.goit.study/api"});let U;const Te=document.querySelector('button[name="Muscles"]');let _;document.addEventListener("DOMContentLoaded",async()=>{await z({filter:"Muscles"}),Te.classList.add("filter-active"),_=document.querySelector(".pg-num-btn"),_.classList.add("pg-num-btn-active")});const qe=async({filter:e,page:t,limit:s})=>{try{return U=await ke.get("/filters",{params:{filter:e,page:t,limit:s}}),U}catch(o){console.error(o),a.error({message:o.message,color:"red",position:"topCenter"})}};Me.addEventListener("click",e=>{e.preventDefault(),A.innerHTML="",E.innerHTML="",we.innerHTML="",e.target.tagName==="BUTTON"&&(document.querySelectorAll(".filter-button").forEach(t=>{t.classList.remove("filter-active")}),e.target.classList.add("filter-active"),z({filter:e.target.name}))});E.addEventListener("click",e=>{e.preventDefault(),e.target.tagName==="BUTTON"&&(E.innerHTML="",A.innerHTML="",z({filter:e.target.name,page:e.target.id}))});async function z({filter:e,page:t=1,limit:s=12}){try{const o=await qe({filter:e,page:t,limit:s}),n=()=>{const u=o.data.totalPages;let c="";for(let l=1;l<=u;l++)c+=`<button id="${l}" class="pg-num-btn" type="button" name="${e}"
 >${l}</button>`;return c},r=o.data.results.reduce((u,{name:c,filter:l,imgUrl:f})=>u+`<li class="gallery-item" id=${c}>
          <div class="card" >            
             <img class="gallery-image"
             src="${f}"
             alt="${l}"            
            />            
            </div>
            <div class="card-description">
            <p class="name-description" id="${l}:${c}">${c}</p>
            <p class="filter-description">${l}</p>
            </div>
          </li>`,""),i=n();E.insertAdjacentHTML("afterbegin",i),A.insertAdjacentHTML("afterbegin",r)}catch(o){console.error(o),a.error({message:o.message,color:"red",position:"topCenter"})}}document.addEventListener("DOMContentLoaded",()=>{te()});const O=document.getElementById("exerciseModal"),X=document.getElementById("closeModalBtn"),ee=document.getElementById("information"),d=document.getElementById("addToFavoritesBtn");let j,y;async function Pe(e){try{y=(await h.create({baseURL:"https://energyflow.b.goit.study/api/exercises"}).get(e)).data,Ie(y)}catch{a.error({title:"Error",message:"Error fetching exercise data: ",position:"topRight"})}}const te=()=>{j=document.querySelectorAll(".workout-btn-container"),j.forEach(e=>{e.addEventListener("click",t=>{t.preventDefault();let s=t.target.id;Pe(s)})})};async function Ie(e){const{bodyPart:t,burnedCalories:s,description:o,equipment:n,gifUrl:r,name:i,popularity:u,rating:c,target:l,time:f}=e,w=`

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
        <span class="info-text">Burned Calories</span> ${s}/${f}min
    </li>
</ul>


        <p class="description">Description: ${o}</p> 
        </div>`;ee.innerHTML=w,await D(),$e()}function $e(){O.classList.add("open"),document.body.style.overflow="hidden",X.addEventListener("click",M),document.addEventListener("mouseup",se),document.addEventListener("keydown",oe)}function M(){O.classList.remove("open"),X.removeEventListener("click",M),document.removeEventListener("mouseup",se),document.removeEventListener("keydown",oe),ee.innerHTML="",document.body.style.overflow="",d.removeEventListener("click",L),d.removeEventListener("click",b)}const se=function(e){!document.getElementById("modal").contains(e.target)&&O.classList.contains("open")&&M()},oe=function(e){e.key==="Escape"&&M()},Be=e=>{const{_id:t,bodyPart:s,burnedCalories:o,description:n,equipment:r,gifUrl:i,name:u,popularity:c,rating:l,target:f,time:w}=e;return{_id:t,bodyPart:s,burnedCalories:o,description:n,equipment:r,gifUrl:i,name:u,popularity:c,rating:l,target:f,time:w}},L=()=>{let e=localStorage.getItem("favoritesCard"),t=[];e!=null&&(t=JSON.parse(e));const s=Be(y);t.push(s),localStorage.setItem("favoritesCard",JSON.stringify(t)),D()},b=()=>{const{_id:e}=y;let t=localStorage.getItem("favoritesCard"),s=JSON.parse(t).filter(o=>o._id!=e);s.length!=0?localStorage.setItem("favoritesCard",JSON.stringify(s)):localStorage.removeItem("favoritesCard"),D()},D=()=>{const{_id:e}=y;let t=localStorage.getItem("favoritesCard");d.removeEventListener("click",b),d.addEventListener("click",L),d.innerHTML="Add to favorites",t!=null&&JSON.parse(t).forEach(s=>{s._id==e?(d.innerHTML="Delete favorite",d.removeEventListener("click",L),d.addEventListener("click",b)):(d.removeEventListener("click",b),d.addEventListener("click",L),d.innerHTML="Add to favorites")})},P=document.querySelector(".gallery"),Ce=document.querySelector(".search-icon");let Q=document.querySelector("#slash");const S=document.querySelector(".waist"),ne=document.querySelector("#search"),re=innerWidth,H=h.create({baseURL:"https://energyflow.b.goit.study/api"}),ae=async(e,{params:t})=>await H.get(e,{params:t});P.addEventListener("click",e=>{e.preventDefault(),S.innerHTML="",P.innerHTML="",Q.innerHTML="",ne.style.display="block",S.classList.add("information-cards");const s=e.target.id.split(":");H.defaults.params={limit:re>1400?"9":"8",muscles:s[0]==="Muscles"?s[1]:null,bodypart:s[0]==="Body parts"?s[1]:null,equipment:s[0]==="Equipment"?s[1]:null},Q.insertAdjacentHTML("beforeend",`<p>&#8260;<span class="title-span">${s[1]}</span></p>`),ae("/exercises",{params:{}}).then(o=>{ie(o.data.results)}).catch(o=>{a.error({message:o.message,position:"topRight"})})});setTimeout(function(){ne.value},1e3);Ce.addEventListener("click",e=>{S.innerHTML="",P.innerHTML="",H.defaults.params={limit:re>1400?"9":"8",keyword:"roll"},ae("/exercises",{params:{}}).then(t=>{console.log(t.data),ie(t.data.results)}).catch(t=>{a.error({message:t.message,position:"topRight"})})});function ie(e){S.insertAdjacentHTML("afterbegin",e.reduce((t,{burnedCalories:s,name:o,bodyPart:n,rating:r,time:i,target:u,_id:c})=>t+`<li class="gallery-card">
      <div class="header-card">
        <div class="workout">WORKOUT</div>
        <div class="rating">
            <p>${r}</p>
            <svg class="icon-star" width="12" height="12">
                <use href="../../img/sprite.svg#icon-star"></use>
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
          <h3>${o}</h3>
      </div>

      <ul class="params-card">
            <li class="calories"><span class="params-text">Burned calories:</span> ${s}/${i}min</li>
            <li class="body-part"><span class="params-text">Body part:</span> ${n}</li>
            <li class="target"><span class="params-text">Target:</span> ${u}</li>
      </ul>
    </li>`,"")),te()}const xe=document.querySelector(".footer-form"),Ae=document.querySelector(".footer-form-input"),ze="https://energyflow.b.goit.study/api/subscription";xe.addEventListener("submit",Oe);async function Oe(e){e.preventDefault();const t=e.currentTarget.elements.footerInput.value.trim();if(!De(t))return He();try{const s=await h.post(ze,{email:t});if(s.status>=200&&s.status<300){const o=s.data.message;a.success({title:"OK",message:o,color:"white",position:"center"})}else throw new Error}catch(s){a.error({title:"Error",message:s.response.data.message,position:"center",backgroundColor:"gray"})}finally{Ae.value=""}}const De=e=>/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(e),He=()=>{a.info({title:"",message:"Please give us a valid email.",color:"white",position:"center"})},Re=100,I=document.querySelector(".skroll-btn"),Ne=()=>window.scrollY||document.documentElement.scrollTop;window.addEventListener("scroll",()=>{Ne()>Re?I.classList.add("skroll-btn-active"):I.classList.remove("skroll-btn-active")});I.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});const m=[{text:"One-Month Membership",color:"rgba(232, 232, 232, 1)"},{text:"Personal Training Session",color:"rgb(126, 133, 127)"},{text:"Fitness Bracelet",color:"rgba(232, 232, 232, 1)"},{text:"25% Off Certificate",color:"rgb(126, 133, 127)"},{text:"$50 Gift Card",color:"rgba(232, 232, 232, 1)"},{text:"10% Off Certificate",color:"rgb(126, 133, 127)"},{text:"$30 Gift Card",color:"rgba(232, 232, 232, 1)"},{text:"Participation in Marathon",color:"rgb(126, 133, 127)"}],p=document.querySelector(".deal-wheel"),g=p.querySelector(".spinner"),W=p.querySelector(".btn-spin"),$=p.querySelector(".ticker"),Fe=document.querySelector(".get-prize-container"),R=360/m.length,Ue=Math.floor(180/m.length),ce="is-spinning",le="selected",_e=window.getComputedStyle(g);let de,v=0,G=0,N;const je=()=>{m.forEach(({text:e,color:t,reaction:s},o)=>{const n=R*o*-1-Ue;g.insertAdjacentHTML("beforeend",`<li class="prize" data-reaction=${s} style="--rotate: ${n}deg">
        <span class="text">${e}</span>
      </li>`)})},Qe=()=>{g.setAttribute("style",`background: conic-gradient(
      from -90deg,
      ${m.map(({color:e},t)=>`${e} 0 ${100/m.length*(m.length-t)}%`).reverse()}
    );`)},We=()=>{Qe(),je(),N=p.querySelectorAll(".prize")},Ge=(e,t)=>(e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e),ue=()=>{const e=_e.transform.split("(")[1].split(")")[0].split(","),t=e[0],s=e[1];let o=Math.atan2(s,t);o<0&&(o+=2*Math.PI);const n=Math.round(o*(180/Math.PI)),r=Math.floor(n/R);G!==r&&($.style.animation="none",setTimeout(()=>$.style.animation=null,10),G=r),de=requestAnimationFrame(ue)},Je=()=>{const e=Math.floor(v/R);N[e].classList.add(le);const t=m[e].text;setTimeout(()=>{p.style.display="none",introMessagePrize.style.display="none",congratulationsMessage.style.display="block",document.getElementById("congratulationMessage").innerHTML="Congratulations!",document.getElementById("congratulationMessage1").innerHTML=" You've won: ",document.getElementById("prizeMessage").innerText=t,Fe.style.display="block"},3e3)};W.addEventListener("click",()=>{W.disabled=!0,v=Math.floor(Math.random()*360+Ge(2e3,5e3)),N.forEach(e=>e.classList.remove(le)),p.classList.add(ce),g.style.setProperty("--rotate",v),$.style.animation="none",ue()});g.addEventListener("transitionend",()=>{cancelAnimationFrame(de),v%=360,Je(),p.classList.remove(ce),g.style.setProperty("--rotate",v)});We();const Ve=document.querySelector("#prizeForm");document.querySelector(".input-get");Ve.addEventListener("submit",Ke);async function Ke(e){e.preventDefault();const t=e.currentTarget.elements.prizeInput.value.trim();if(!Ye(t))return Ze()}const Ye=e=>/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(e),Ze=()=>{a.info({title:"",message:"Please give us a valid email.",color:"white",position:"center"})};var F=document.getElementById("myModalPrize"),Xe=document.getElementById("openModalBtnPrize");Xe.onclick=function(){F.style.display="flex"};function me(){F.style.display="none"}window.onclick=function(e){e.target==F&&me()};var et=document.getElementById("closeModalPrize");et.onclick=function(){me()};document.addEventListener("DOMContentLoaded",function(){function e(){var o=document.getElementById("email-prize").value,n=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;if(!n.test(o)){a.error({title:"Error",message:"Enter a valid email!",zIndex:1001,timeout:2e3,backgroundColor:"white",color:"black",iconColor:"black"});return}a.success({title:"Success",message:"Form submitted!",zIndex:1001,timeout:2e3,backgroundColor:"white",color:"black",iconColor:"black"}),setTimeout(function(){t()},1e3)}function t(){var o=document.getElementById("myModalPrize");o.style.display="none"}var s=document.querySelector(".button-get");s.addEventListener("click",e)});document.querySelector(".favoritePartInfo");localStorage.getItem("favorite");
//# sourceMappingURL=main-88b1967a.js.map
