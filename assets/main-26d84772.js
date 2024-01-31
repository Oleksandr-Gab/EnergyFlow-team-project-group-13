import{T as J,i as a,a as h}from"./vendor-29bef8ec.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(n){if(n.ep)return;n.ep=!0;const r=o(n);fetch(n.href,r)}})();const k=document.querySelector("[data-menu-open]"),$=document.querySelector("[data-menu-close]"),V=document.querySelector(".nav"),ge=document.querySelector('[data-action="homepage"]'),fe=document.querySelector('[data-action="favoritespage"]'),C=document.querySelector(".menu-back-drop"),K=document.body,ye=document.querySelector(".header"),ve=window.location.href;ve.includes("favorite")&&(ge.classList.remove("current"),fe.classList.add("current"),ye.style.position="static");document.addEventListener("keydown",e=>{e.key==="Escape"&&x()});$.addEventListener("click",x);k.addEventListener("click",()=>{V.classList.add("active"),k.classList.add("is-hidden"),$.classList.remove("is-hidden"),K.classList.add("lock"),C.classList.add("active")});function x(){V.classList.remove("active"),k.classList.remove("is-hidden"),$.classList.add("is-hidden"),K.classList.remove("lock"),C.classList.remove("active")}C.addEventListener("click",he);function he(e){e.target.classList.contains("menu-back-drop")&&x()}const Le=document.querySelector(".quote-info"),Y="quote-of-the-day",T="date",be=new Date,q=be.getDate();async function Ee(){try{const o=(await h.create({baseURL:"https://energyflow.b.goit.study/api"}).get("/quote")).data;Z(o),Se(o,q)}catch(e){a.error({timeout:5e3,title:"Error",message:e.message,position:"topRight"})}}//! SAVE QUOTE AND DATA
function Se(e,t){localStorage.setItem(Y,JSON.stringify(e)),localStorage.setItem(T,t)}//! RENDER QUOTE
function Z(e){const t=[e];Le.innerHTML=t.reduce((o,{quote:s,author:n})=>o+`<p class="quote-text">${s}</p>
        <h3 class="quote-author">${n}</h3>`,"")}//! CHECK DAY AND GET NEW QUOTE
async function Me(){const e=localStorage.getItem(T);if(isNaN(e)){a.error({timeout:5e3,title:"Error",message:error.message,position:"topRight"});return}if(parseInt(e)===q){const t=localStorage.getItem(Y);if(t){const o=JSON.parse(t);Z(o)}return}await Ee(),localStorage.setItem(T,q.toString())}Me();//! ANIMATION 
new J("#quote",{speed:26,startDelay:300,waitUntilVisible:!0,afterComplete:function(e){e.destroy()}}).go();new J("#motivation-txt",{speed:26,startDelay:300,waitUntilVisible:!0,afterComplete:function(e){e.destroy()}}).go();const we=document.querySelector(".filter-list"),A=document.querySelector(".gallery"),E=document.querySelector(".pagination-btn"),ke=document.querySelector(".waist"),Te=h.create({baseURL:"https://energyflow.b.goit.study/api"});let U;const X=document.querySelector('button[name="Muscles"]');let _;document.addEventListener("DOMContentLoaded",async()=>{await z({filter:"Muscles"}),Ie(),X.classList.add("filter-active"),_=document.querySelector(".pg-num-btn"),_.classList.add("pg-num-btn-active")});const qe=async({filter:e,page:t,limit:o})=>{try{return U=await Te.get("/filters",{params:{filter:e,page:t,limit:o}}),U}catch(s){console.error(s),a.error({message:s.message,color:"red",position:"topCenter"})}};we.addEventListener("click",e=>{e.preventDefault(),A.innerHTML="",E.innerHTML="",ke.innerHTML="",e.target.tagName==="BUTTON"&&(X.classList.remove("filter-active"),z({filter:e.target.name}))});E.addEventListener("click",e=>{e.preventDefault(),e.target.tagName==="BUTTON"&&(E.innerHTML="",A.innerHTML="",z({filter:e.target.name,page:e.target.id}))});async function z({filter:e,page:t=1,limit:o=12}){try{const s=await qe({filter:e,page:t,limit:o}),n=()=>{const u=s.data.totalPages;let c="";for(let l=1;l<=u;l++)c+=`<button id="${l}" class="pg-num-btn" type="button" name="${e}"
 >${l}</button>`;return c},r=s.data.results.reduce((u,{name:c,filter:l,imgUrl:f})=>u+`<li class="gallery-item" id=${c}>
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
          </li>`,""),i=n();E.insertAdjacentHTML("afterbegin",i),A.insertAdjacentHTML("afterbegin",r)}catch(s){console.error(s),a.error({message:s.message,color:"red",position:"topCenter"})}}const Ie=()=>{const t=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})};document.addEventListener("DOMContentLoaded",()=>{oe()});const O=document.getElementById("exerciseModal"),ee=document.getElementById("closeModalBtn"),te=document.getElementById("information"),d=document.getElementById("addToFavoritesBtn");let G,y;async function Be(e){try{y=(await h.create({baseURL:"https://energyflow.b.goit.study/api/exercises"}).get(e)).data,Pe(y)}catch{a.error({title:"Error",message:"Error fetching exercise data: ",position:"topRight"})}}const oe=()=>{G=document.querySelectorAll(".workout-btn-container"),G.forEach(e=>{e.addEventListener("click",t=>{t.preventDefault();let o=t.target.id;Be(o)})})};async function Pe(e){const{bodyPart:t,burnedCalories:o,description:s,equipment:n,gifUrl:r,name:i,popularity:u,rating:c,target:l,time:f}=e,w=`

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
        <span class="info-text">Burned Calories</span> ${o}/${f}min
    </li>
</ul>


        <p class="description">Description: ${s}</p> 
        </div>`;te.innerHTML=w,await D(),$e()}function $e(){O.classList.add("open"),document.body.style.overflow="hidden",ee.addEventListener("click",M),document.addEventListener("mouseup",se),document.addEventListener("keydown",ne)}function M(){O.classList.remove("open"),ee.removeEventListener("click",M),document.removeEventListener("mouseup",se),document.removeEventListener("keydown",ne),te.innerHTML="",document.body.style.overflow="",d.removeEventListener("click",L),d.removeEventListener("click",b)}const se=function(e){!document.getElementById("modal").contains(e.target)&&O.classList.contains("open")&&M()},ne=function(e){e.key==="Escape"&&M()},Ce=e=>{const{_id:t,bodyPart:o,burnedCalories:s,description:n,equipment:r,gifUrl:i,name:u,popularity:c,rating:l,target:f,time:w}=e;return{_id:t,bodyPart:o,burnedCalories:s,description:n,equipment:r,gifUrl:i,name:u,popularity:c,rating:l,target:f,time:w}},L=()=>{let e=localStorage.getItem("favoritesCard"),t=[];e!=null&&(t=JSON.parse(e));const o=Ce(y);t.push(o),localStorage.setItem("favoritesCard",JSON.stringify(t)),D()},b=()=>{const{_id:e}=y;let t=localStorage.getItem("favoritesCard"),o=JSON.parse(t).filter(s=>s._id!=e);o.length!=0?localStorage.setItem("favoritesCard",JSON.stringify(o)):localStorage.removeItem("favoritesCard"),D()},D=()=>{const{_id:e}=y;let t=localStorage.getItem("favoritesCard");d.removeEventListener("click",b),d.addEventListener("click",L),d.innerHTML="Add to favorites",t!=null&&JSON.parse(t).forEach(o=>{o._id==e?(d.innerHTML="Delete favorite",d.removeEventListener("click",L),d.addEventListener("click",b)):(d.removeEventListener("click",b),d.addEventListener("click",L),d.innerHTML="Add to favorites")})},I=document.querySelector(".gallery"),xe=document.querySelector(".search-icon");let j=document.querySelector("#slash");const S=document.querySelector(".waist"),re=document.querySelector("#search"),ae=innerWidth,H=h.create({baseURL:"https://energyflow.b.goit.study/api"}),ie=async(e,{params:t})=>await H.get(e,{params:t});I.addEventListener("click",e=>{e.preventDefault(),S.innerHTML="",I.innerHTML="",j.innerHTML="",re.style.display="block",S.classList.add("information-cards");const o=e.target.id.split(":");H.defaults.params={limit:ae>1400?"9":"8",muscles:o[0]==="Muscles"?o[1]:null,bodypart:o[0]==="Body parts"?o[1]:null,equipment:o[0]==="Equipment"?o[1]:null},j.insertAdjacentHTML("beforeend",`<p>&#8260;<span class="title-span">${o[1]}</span></p>`),ie("/exercises",{params:{}}).then(s=>{ce(s.data.results)}).catch(s=>{a.error({message:s.message,position:"topRight"})})});setTimeout(function(){re.value},1e3);xe.addEventListener("click",e=>{S.innerHTML="",I.innerHTML="",H.defaults.params={limit:ae>1400?"9":"8",keyword:"roll"},ie("/exercises",{params:{}}).then(t=>{console.log(t.data),ce(t.data.results)}).catch(t=>{a.error({message:t.message,position:"topRight"})})});function ce(e){S.insertAdjacentHTML("afterbegin",e.reduce((t,{burnedCalories:o,name:s,bodyPart:n,rating:r,time:i,target:u,_id:c})=>t+`<li class="gallery-card">
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
          <h3>${s}</h3>
      </div>

      <ul class="params-card">
            <li class="calories"><span class="params-text">Burned calories:</span> ${o}/${i}min</li>
            <li class="body-part"><span class="params-text">Body part:</span> ${n}</li>
            <li class="target"><span class="params-text">Target:</span> ${u}</li>
      </ul>
    </li>`,"")),oe()}const Ae=document.querySelector(".footer-form"),ze=document.querySelector(".footer-form-input"),Oe="https://energyflow.b.goit.study/api/subscription";Ae.addEventListener("submit",De);async function De(e){e.preventDefault();const t=e.currentTarget.elements.footerInput.value.trim();if(!He(t))return Re();try{const o=await h.post(Oe,{email:t});if(o.status>=200&&o.status<300){const s=o.data.message;a.success({title:"OK",message:s,color:"white",position:"center"})}else throw new Error}catch(o){a.error({title:"Error",message:o.response.data.message,position:"center",backgroundColor:"gray"})}finally{ze.value=""}}const He=e=>/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(e),Re=()=>{a.info({title:"",message:"Please give us a valid email.",color:"white",position:"center"})},Ne=100,B=document.querySelector(".skroll-btn"),Fe=()=>window.scrollY||document.documentElement.scrollTop;window.addEventListener("scroll",()=>{Fe()>Ne?B.classList.add("skroll-btn-active"):B.classList.remove("skroll-btn-active")});B.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});const m=[{text:"One-Month Membership",color:"rgba(232, 232, 232, 1)"},{text:"Personal Training Session",color:"rgb(126, 133, 127)"},{text:"Fitness Bracelet",color:"rgba(232, 232, 232, 1)"},{text:"25% Off Certificate",color:"rgb(126, 133, 127)"},{text:"$50 Gift Card",color:"rgba(232, 232, 232, 1)"},{text:"10% Off Certificate",color:"rgb(126, 133, 127)"},{text:"$30 Gift Card",color:"rgba(232, 232, 232, 1)"},{text:"Participation in Marathon",color:"rgb(126, 133, 127)"}],p=document.querySelector(".deal-wheel"),g=p.querySelector(".spinner"),Q=p.querySelector(".btn-spin"),P=p.querySelector(".ticker"),Ue=document.querySelector(".get-prize-container"),R=360/m.length,_e=Math.floor(180/m.length),le="is-spinning",de="selected",Ge=window.getComputedStyle(g);let ue,v=0,W=0,N;const je=()=>{m.forEach(({text:e,color:t,reaction:o},s)=>{const n=R*s*-1-_e;g.insertAdjacentHTML("beforeend",`<li class="prize" data-reaction=${o} style="--rotate: ${n}deg">
        <span class="text">${e}</span>
      </li>`)})},Qe=()=>{g.setAttribute("style",`background: conic-gradient(
      from -90deg,
      ${m.map(({color:e},t)=>`${e} 0 ${100/m.length*(m.length-t)}%`).reverse()}
    );`)},We=()=>{Qe(),je(),N=p.querySelectorAll(".prize")},Je=(e,t)=>(e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e),me=()=>{const e=Ge.transform.split("(")[1].split(")")[0].split(","),t=e[0],o=e[1];let s=Math.atan2(o,t);s<0&&(s+=2*Math.PI);const n=Math.round(s*(180/Math.PI)),r=Math.floor(n/R);W!==r&&(P.style.animation="none",setTimeout(()=>P.style.animation=null,10),W=r),ue=requestAnimationFrame(me)},Ve=()=>{const e=Math.floor(v/R);N[e].classList.add(de);const t=m[e].text;setTimeout(()=>{p.style.display="none",introMessagePrize.style.display="none",congratulationsMessage.style.display="block",document.getElementById("congratulationMessage").innerHTML="Congratulations!",document.getElementById("congratulationMessage1").innerHTML=" You've won: ",document.getElementById("prizeMessage").innerText=t,Ue.style.display="block"},3e3)};Q.addEventListener("click",()=>{Q.disabled=!0,v=Math.floor(Math.random()*360+Je(2e3,5e3)),N.forEach(e=>e.classList.remove(de)),p.classList.add(le),g.style.setProperty("--rotate",v),P.style.animation="none",me()});g.addEventListener("transitionend",()=>{cancelAnimationFrame(ue),v%=360,Ve(),p.classList.remove(le),g.style.setProperty("--rotate",v)});We();const Ke=document.querySelector("#prizeForm");document.querySelector(".input-get");Ke.addEventListener("submit",Ye);async function Ye(e){e.preventDefault();const t=e.currentTarget.elements.prizeInput.value.trim();if(!Ze(t))return Xe()}const Ze=e=>/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(e),Xe=()=>{a.info({title:"",message:"Please give us a valid email.",color:"white",position:"center"})};var F=document.getElementById("myModalPrize"),et=document.getElementById("openModalBtnPrize");et.onclick=function(){F.style.display="flex"};function pe(){F.style.display="none"}window.onclick=function(e){e.target==F&&pe()};var tt=document.getElementById("closeModalPrize");tt.onclick=function(){pe()};document.addEventListener("DOMContentLoaded",function(){function e(){var s=document.getElementById("email-prize").value,n=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;if(!n.test(s)){a.error({title:"Error",message:"Enter a valid email!",zIndex:1001,timeout:2e3,backgroundColor:"white",color:"black",iconColor:"black"});return}a.success({title:"Success",message:"Form submitted!",zIndex:1001,timeout:2e3,backgroundColor:"white",color:"black",iconColor:"black"}),setTimeout(function(){t()},1e3)}function t(){var s=document.getElementById("myModalPrize");s.style.display="none"}var o=document.querySelector(".button-get");o.addEventListener("click",e)});document.querySelector(".favoritePartInfo");localStorage.getItem("favorite");
//# sourceMappingURL=main-26d84772.js.map
