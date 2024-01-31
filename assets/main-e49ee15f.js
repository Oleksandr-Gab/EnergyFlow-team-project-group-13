import{T as Y,i as a,a as h}from"./vendor-29bef8ec.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(n){if(n.ep)return;n.ep=!0;const r=o(n);fetch(n.href,r)}})();const k=document.querySelector("[data-menu-open]"),x=document.querySelector("[data-menu-close]"),Z=document.querySelector(".nav"),ye=document.querySelector('[data-action="homepage"]'),ve=document.querySelector('[data-action="favoritespage"]'),A=document.querySelector(".menu-back-drop"),X=document.body,he=document.querySelector(".header"),Le=window.location.href;Le.includes("favorite")&&(ye.classList.remove("current"),ve.classList.add("current"),he.style.position="static");document.addEventListener("keydown",e=>{e.key==="Escape"&&O()});x.addEventListener("click",O);k.addEventListener("click",()=>{Z.classList.add("active"),k.classList.add("is-hidden"),x.classList.remove("is-hidden"),X.classList.add("lock"),A.classList.add("active")});function O(){Z.classList.remove("active"),k.classList.remove("is-hidden"),x.classList.add("is-hidden"),X.classList.remove("lock"),A.classList.remove("active")}A.addEventListener("click",be);function be(e){e.target.classList.contains("menu-back-drop")&&O()}const Ee=document.querySelector(".quote-info"),ee="quote-of-the-day",T="date",we=new Date,q=we.getDate();async function Se(){try{const o=(await h.create({baseURL:"https://energyflow.b.goit.study/api"}).get("/quote")).data;te(o),Me(o,q)}catch(e){a.error({timeout:5e3,title:"Error",message:e.message,position:"topRight"})}}//! SAVE QUOTE AND DATA
function Me(e,t){localStorage.setItem(ee,JSON.stringify(e)),localStorage.setItem(T,t)}//! RENDER QUOTE
function te(e){const t=[e];Ee.innerHTML=t.reduce((o,{quote:s,author:n})=>o+`<p class="quote-text">${s}</p>
        <h3 class="quote-author">${n}</h3>`,"")}//! CHECK DAY AND GET NEW QUOTE
async function ke(){const e=localStorage.getItem(T);if(isNaN(e)){a.error({timeout:5e3,title:"Error",message:error.message,position:"topRight"});return}if(parseInt(e)===q){const t=localStorage.getItem(ee);if(t){const o=JSON.parse(t);te(o)}return}await Se(),localStorage.setItem(T,q.toString())}ke();//! ANIMATION 
new Y("#quote",{speed:26,startDelay:300,waitUntilVisible:!0,afterComplete:function(e){e.destroy()}}).go();new Y("#motivation-txt",{speed:26,startDelay:300,waitUntilVisible:!0,afterComplete:function(e){e.destroy()}}).go();const Te=document.querySelector(".filter-list"),z=document.querySelector(".gallery"),w=document.querySelector(".pagination-btn"),qe=document.querySelector(".waist"),Ie=h.create({baseURL:"https://energyflow.b.goit.study/api"});let G;const oe=document.querySelector('button[name="Muscles"]');let j;document.addEventListener("DOMContentLoaded",async()=>{await D({filter:"Muscles"}),Ce(),oe.classList.add("active"),j=document.querySelector(".pg-num-btn"),j.classList.add("pg-num-btn-active")});const Be=async({filter:e,page:t,limit:o})=>{try{return G=await Ie.get("/filters",{params:{filter:e,page:t,limit:o}}),G}catch(s){console.error(s),a.error({message:s.message,color:"red",position:"topCenter"})}};Te.addEventListener("click",e=>{e.preventDefault(),z.innerHTML="",w.innerHTML="",qe.innerHTML="",e.target.tagName==="BUTTON"&&(oe.classList.remove("active"),D({filter:e.target.name}))});w.addEventListener("click",e=>{e.preventDefault(),e.target.tagName==="BUTTON"&&(w.innerHTML="",z.innerHTML="",D({filter:e.target.name,page:e.target.id}))});async function D({filter:e,page:t=1,limit:o=12}){try{const s=await Be({filter:e,page:t,limit:o}),n=()=>{const u=s.data.totalPages;let c="";for(let l=1;l<=u;l++)c+=`<button id="${l}" class="pg-num-btn" type="button" name="${e}"
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
          </li>`,""),i=n();w.insertAdjacentHTML("afterbegin",i),z.insertAdjacentHTML("afterbegin",r)}catch(s){console.error(s),a.error({message:s.message,color:"red",position:"topCenter"})}}const Ce=()=>{const t=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})};document.addEventListener("DOMContentLoaded",()=>{re()});const H=document.getElementById("exerciseModal"),se=document.getElementById("closeModalBtn"),ne=document.getElementById("information"),d=document.getElementById("addToFavoritesBtn");let Q,y;async function Pe(e){try{y=(await h.create({baseURL:"https://energyflow.b.goit.study/api/exercises"}).get(e)).data,$e(y)}catch{a.error({title:"Error",message:"Error fetching exercise data: ",position:"topRight"})}}const re=()=>{Q=document.querySelectorAll(".workout-btn-container"),Q.forEach(e=>{e.addEventListener("click",t=>{t.preventDefault();let o=t.target.id;Pe(o)})})};async function $e(e){const{bodyPart:t,burnedCalories:o,description:s,equipment:n,gifUrl:r,name:i,popularity:u,rating:c,target:l,time:f}=e,M=`

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
        </div>`;ne.innerHTML=M,await N(),xe()}function xe(){H.classList.add("open"),document.body.style.overflow="hidden",se.addEventListener("click",S),document.addEventListener("mouseup",ae),document.addEventListener("keydown",ie)}function S(){H.classList.remove("open"),se.removeEventListener("click",S),document.removeEventListener("mouseup",ae),document.removeEventListener("keydown",ie),ne.innerHTML="",document.body.style.overflow="",d.removeEventListener("click",b),d.removeEventListener("click",E)}const ae=function(e){!document.getElementById("modal").contains(e.target)&&H.classList.contains("open")&&S()},ie=function(e){e.key==="Escape"&&S()},Ae=e=>{const{_id:t,bodyPart:o,burnedCalories:s,description:n,equipment:r,gifUrl:i,name:u,popularity:c,rating:l,target:f,time:M}=e;return{_id:t,bodyPart:o,burnedCalories:s,description:n,equipment:r,gifUrl:i,name:u,popularity:c,rating:l,target:f,time:M}},b=()=>{let e=localStorage.getItem("favoritesCard"),t=[];e!=null&&(t=JSON.parse(e));const o=Ae(y);t.push(o),localStorage.setItem("favoritesCard",JSON.stringify(t)),N()},E=()=>{const{_id:e}=y;let t=localStorage.getItem("favoritesCard"),o=JSON.parse(t).filter(s=>s._id!=e);o.length!=0?localStorage.setItem("favoritesCard",JSON.stringify(o)):localStorage.removeItem("favoritesCard"),N()},N=()=>{const{_id:e}=y;let t=localStorage.getItem("favoritesCard");d.removeEventListener("click",E),d.addEventListener("click",b),d.innerHTML="Add to favorites",t!=null&&JSON.parse(t).forEach(o=>{o._id==e?(d.innerHTML="Delete favorite",d.removeEventListener("click",b),d.addEventListener("click",E)):(d.removeEventListener("click",E),d.addEventListener("click",b),d.innerHTML="Add to favorites")})},Oe="Unfortunately, no results were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.",I=document.querySelector(".gallery"),W=document.querySelector(".section-title");document.querySelector("#slash");const B=document.querySelector(".waist"),C=document.querySelector("#search"),ce=innerWidth,R=h.create({baseURL:"https://energyflow.b.goit.study/api"}),le=async(e,{params:t})=>await R.get(e,{params:t});I.addEventListener("click",e=>{e.preventDefault(),B.innerHTML="",I.innerHTML="",C.style.display="block",B.classList.add("information-cards");const o=e.target.id.split(":");R.defaults.params={limit:ce>1400?"9":"8",muscles:o[0]==="Muscles"?o[1]:null,bodypart:o[0]==="Body parts"?o[1]:null,equipment:o[0]==="Equipment"?o[1]:null},W.insertAdjacentHTML("beforeend",`<p id="slash">&#8260;<span class="title-span">${o[1]}</span></p>`),console.log(W),le("/exercises",{params:{}}).then(s=>{de(s.data.results)}).catch(s=>{a.error({message:s.message,position:"topRight"})})});let L,J;C.addEventListener("input",e=>{clearTimeout(J),J=setTimeout(function(){L=C.value,console.log(L)},1e3),searchBlock.addEventListener("click",t=>{if(console.log(L.toLowerCase()),L.trim()!=="input-value"){I.innerHTML=`<div class="errorEmageContainer">${Oe}</div>`;return}R.defaults.params={limit:ce>1400?"9":"8"},le("/exercises",{params:{keyword:t.target.value}}).then(o=>{console.log(o.data),de(o.data.results)}).catch(o=>{a.error({message:o.message,position:"topRight"})})})});function de(e){B.insertAdjacentHTML("afterbegin",e.reduce((t,{burnedCalories:o,name:s,bodyPart:n,rating:r,time:i,target:u,_id:c})=>t+`<li class="gallery-card">
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
    </li>`,"")),re()}const ze=document.querySelector(".footer-form"),De=document.querySelector(".footer-form-input"),He="https://energyflow.b.goit.study/api/subscription";ze.addEventListener("submit",Ne);async function Ne(e){e.preventDefault();const t=e.currentTarget.elements.footerInput.value.trim();if(!Re(t))return Ue();try{const o=await h.post(He,{email:t});if(o.status>=200&&o.status<300){const s=o.data.message;a.success({title:"OK",message:s,color:"white",position:"center"})}else throw new Error}catch(o){a.error({title:"Error",message:o.response.data.message,position:"center",backgroundColor:"gray"})}finally{De.value=""}}const Re=e=>/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(e),Ue=()=>{a.info({title:"",message:"Please give us a valid email.",color:"white",position:"center"})},Fe=100,P=document.querySelector(".skroll-btn"),_e=()=>window.scrollY||document.documentElement.scrollTop;window.addEventListener("scroll",()=>{_e()>Fe?P.classList.add("skroll-btn-active"):P.classList.remove("skroll-btn-active")});P.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});const m=[{text:"One-Month Membership",color:"rgba(232, 232, 232, 1)"},{text:"Personal Training Session",color:"rgb(126, 133, 127)"},{text:"Fitness Bracelet",color:"rgba(232, 232, 232, 1)"},{text:"25% Off Certificate",color:"rgb(126, 133, 127)"},{text:"$50 Gift Card",color:"rgba(232, 232, 232, 1)"},{text:"10% Off Certificate",color:"rgb(126, 133, 127)"},{text:"$30 Gift Card",color:"rgba(232, 232, 232, 1)"},{text:"Participation in Marathon",color:"rgb(126, 133, 127)"}],p=document.querySelector(".deal-wheel"),g=p.querySelector(".spinner"),V=p.querySelector(".btn-spin"),$=p.querySelector(".ticker"),Ge=document.querySelector(".get-prize-container"),U=360/m.length,je=Math.floor(180/m.length),ue="is-spinning",me="selected",Qe=window.getComputedStyle(g);let pe,v=0,K=0,F;const We=()=>{m.forEach(({text:e,color:t,reaction:o},s)=>{const n=U*s*-1-je;g.insertAdjacentHTML("beforeend",`<li class="prize" data-reaction=${o} style="--rotate: ${n}deg">
        <span class="text">${e}</span>
      </li>`)})},Je=()=>{g.setAttribute("style",`background: conic-gradient(
      from -90deg,
      ${m.map(({color:e},t)=>`${e} 0 ${100/m.length*(m.length-t)}%`).reverse()}
    );`)},Ve=()=>{Je(),We(),F=p.querySelectorAll(".prize")},Ke=(e,t)=>(e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e),ge=()=>{const e=Qe.transform.split("(")[1].split(")")[0].split(","),t=e[0],o=e[1];let s=Math.atan2(o,t);s<0&&(s+=2*Math.PI);const n=Math.round(s*(180/Math.PI)),r=Math.floor(n/U);K!==r&&($.style.animation="none",setTimeout(()=>$.style.animation=null,10),K=r),pe=requestAnimationFrame(ge)},Ye=()=>{const e=Math.floor(v/U);F[e].classList.add(me);const t=m[e].text;setTimeout(()=>{p.style.display="none",introMessagePrize.style.display="none",congratulationsMessage.style.display="block",document.getElementById("congratulationMessage").innerHTML="Congratulations!",document.getElementById("congratulationMessage1").innerHTML=" You've won: ",document.getElementById("prizeMessage").innerText=t,Ge.style.display="block"},3e3)};V.addEventListener("click",()=>{V.disabled=!0,v=Math.floor(Math.random()*360+Ke(2e3,5e3)),F.forEach(e=>e.classList.remove(me)),p.classList.add(ue),g.style.setProperty("--rotate",v),$.style.animation="none",ge()});g.addEventListener("transitionend",()=>{cancelAnimationFrame(pe),v%=360,Ye(),p.classList.remove(ue),g.style.setProperty("--rotate",v)});Ve();const Ze=document.querySelector("#prizeForm");document.querySelector(".input-get");Ze.addEventListener("submit",Xe);async function Xe(e){e.preventDefault();const t=e.currentTarget.elements.prizeInput.value.trim();if(!et(t))return tt()}const et=e=>/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(e),tt=()=>{a.info({title:"",message:"Please give us a valid email.",color:"white",position:"center"})};var _=document.getElementById("myModalPrize"),ot=document.getElementById("openModalBtnPrize");ot.onclick=function(){_.style.display="flex"};function fe(){_.style.display="none"}window.onclick=function(e){e.target==_&&fe()};var st=document.getElementById("closeModalPrize");st.onclick=function(){fe()};document.addEventListener("DOMContentLoaded",function(){function e(){var s=document.getElementById("email-prize").value,n=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;if(!n.test(s)){a.error({title:"Error",message:"Enter a valid email!",zIndex:1001,timeout:2e3,backgroundColor:"white",color:"black",iconColor:"black"});return}a.success({title:"Success",message:"Form submitted!",zIndex:1001,timeout:2e3,backgroundColor:"white",color:"black",iconColor:"black"}),setTimeout(function(){t()},1e3)}function t(){var s=document.getElementById("myModalPrize");s.style.display="none"}var o=document.querySelector(".button-get");o.addEventListener("click",e)});document.querySelector(".favoritePartInfo");localStorage.getItem("favorite");
//# sourceMappingURL=main-e49ee15f.js.map