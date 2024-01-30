import{T as V,i as a,a as f}from"./vendor-29bef8ec.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}})();const S=document.querySelector("[data-menu-open]"),B=document.querySelector("[data-menu-close]"),W=document.querySelector(".nav"),me=document.querySelector('[data-action="homepage"]'),pe=document.querySelector('[data-action="favoritespage"]'),$=document.querySelector(".menu-back-drop"),Q=document.body,ge=document.querySelector(".header"),fe=window.location.href;fe.includes("favorite")&&(me.classList.remove("current"),pe.classList.add("current"),ge.style.position="static");document.addEventListener("keydown",e=>{e.key==="Escape"&&P()});B.addEventListener("click",P);S.addEventListener("click",()=>{W.classList.add("active"),S.classList.add("is-hidden"),B.classList.remove("is-hidden"),Q.classList.add("lock"),$.classList.add("active")});function P(){W.classList.remove("active"),S.classList.remove("is-hidden"),B.classList.add("is-hidden"),Q.classList.remove("lock"),$.classList.remove("active")}$.addEventListener("click",ye);function ye(e){e.target.classList.contains("menu-back-drop")&&P()}const ve=document.querySelector(".quote-info"),_="quote-of-the-day",k="date",he=new Date,M=he.getDate();async function Le(){try{const o=(await f.create({baseURL:"https://energyflow.b.goit.study/api"}).get("/quote")).data;G(o),be(o,M)}catch(e){a.error({timeout:5e3,title:"Error",message:e.message,position:"topRight"})}}//! SAVE QUOTE AND DATA
function be(e,t){localStorage.setItem(_,JSON.stringify(e)),localStorage.setItem(k,t)}//! RENDER QUOTE
function G(e){const t=[e];ve.innerHTML=t.reduce((o,{quote:n,author:s})=>o+`<p class="quote-text">${n}</p>
        <h3 class="quote-author">${s}</h3>`,"")}//! CHECK DAY AND GET NEW QUOTE
async function Ee(){const e=localStorage.getItem(k);if(isNaN(e)){a.error({timeout:5e3,title:"Error",message:error.message,position:"topRight"});return}if(parseInt(e)===M){const t=localStorage.getItem(_);if(t){const o=JSON.parse(t);G(o)}return}await Le(),localStorage.setItem(k,M.toString())}Ee();//! ANIMATION 
new V("#quote",{speed:26,startDelay:300,waitUntilVisible:!0,afterComplete:function(e){e.destroy()}}).go();new V("#motivation-txt",{speed:26,startDelay:300,waitUntilVisible:!0,afterComplete:function(e){e.destroy()}}).go();const we=document.querySelector(".filter-list"),x=document.querySelector(".gallery"),v=document.querySelector(".pagination-btn"),Se=document.querySelector(".waist"),ke=f.create({baseURL:"https://energyflow.b.goit.study/api"});let R;const K=document.querySelector('button[name="Muscles"]');let U;document.addEventListener("DOMContentLoaded",async()=>{await A({filter:"Muscles"}),K.classList.add("active"),U=document.querySelector(".pg-num-btn"),U.classList.add("pg-num-btn-active")});const Me=async({filter:e,page:t,limit:o})=>{try{return R=await ke.get("/filters",{params:{filter:e,page:t,limit:o}}),R}catch(n){console.error(n),a.error({message:n.message,color:"red",position:"topCenter"})}};we.addEventListener("click",e=>{e.preventDefault(),x.innerHTML="",v.innerHTML="",Se.innerHTML="",e.target.tagName==="BUTTON"&&(K.classList.remove("active"),A({filter:e.target.name}))});v.addEventListener("click",e=>{e.preventDefault(),e.target.tagName==="BUTTON"&&(v.innerHTML="",x.innerHTML="",A({filter:e.target.name,page:e.target.id}))});async function A({filter:e,page:t=1,limit:o=12}){try{const n=await Me({filter:e,page:t,limit:o}),s=()=>{const u=n.data.totalPages;let c="";for(let l=1;l<=u;l++)c+=`<button id="${l}" class="pg-num-btn" type="button" name="${e}"
 >${l}</button>`;return c},r=n.data.results.reduce((u,{name:c,filter:l,imgUrl:E})=>u+`<li class="gallery-item" id=${c}>
          <div class="card" >            
             <img class="gallery-image"
             src="${E}"
             alt="${l}"            
            />            
            </div>
            <div class="card-description">
            <p class="name-description" id="${l}:${c}">${c}</p>
            <p class="filter-description">${l}</p>
            </div>
          </li>`,""),i=s();v.insertAdjacentHTML("afterbegin",i),x.insertAdjacentHTML("afterbegin",r)}catch(n){console.error(n),a.error({message:n.message,color:"red",position:"topCenter"})}}document.addEventListener("DOMContentLoaded",()=>{Z()});const I=document.getElementById("exerciseModal"),Y=document.getElementById("closeModalBtn"),J=document.getElementById("information");let H;async function qe(e){try{const n=(await f.create({baseURL:"https://energyflow.b.goit.study/api/exercises"}).get(e)).data;console.log(n),Te(n)}catch{a.error({title:"Error",message:"Error fetching exercise data: ",position:"topRight"})}}const Z=()=>{H=document.querySelectorAll(".workout-btn-container"),H.forEach(e=>{e.addEventListener("click",t=>{t.preventDefault();let o=t.target.id;qe(o)})})};function Te(e){const{bodyPart:t,burnedCalories:o,description:n,equipment:s,gifUrl:r,name:i,popularity:u,rating:c,target:l,time:E}=e,O=`

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
        <span class="info-text">Equipment</span> ${s}
    </li>
    <li class="info-item">
        <span class="info-text">Popular</span> ${u}
    </li>
    <li class="info-item">
        <span class="info-text">Burned Calories</span> ${o}/${E}min
    </li>
</ul>


        <p class="description">Description: ${n}</p> 
        </div>`;console.log(O),J.innerHTML=O,Be()}function Be(){I.classList.add("open"),document.body.style.overflow="hidden",Y.addEventListener("click",L),document.addEventListener("mouseup",X),document.addEventListener("keydown",ee)}function L(){I.classList.remove("open"),Y.removeEventListener("click",L),document.removeEventListener("mouseup",X),document.removeEventListener("keydown",ee),J.innerHTML="",document.body.style.overflow=""}const X=function(e){!document.getElementById("modal").contains(e.target)&&I.classList.contains("open")&&L()},ee=function(e){e.key==="Escape"&&L()},N=document.querySelector(".gallery"),te=document.querySelector(".waist"),$e=document.querySelector("#search"),Pe=innerWidth;document.querySelector(".workout-btn-container");const oe=f.create({baseURL:"https://energyflow.b.goit.study/api"}),xe=async(e,{params:t})=>await oe.get(e,{params:t});N.addEventListener("click",e=>{e.preventDefault(),console.log(e.target.tagName),N.innerHTML="",$e.style.display="block",te.classList.add("information-cards"),oe.defaults.params={limit:Pe>1400?"9":"8"},xe("/exercises",{params:{}}).then(t=>{console.log(t.data.results),Ae(t.data.results)}).catch(t=>{a.error({message:t,position:"topRight"})})});function Ae(e){te.insertAdjacentHTML("afterbegin",e.reduce((t,{burnedCalories:o,name:n,bodyPart:s,rating:r,time:i,target:u,_id:c})=>t+`<li class="gallery-card">
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
          <h3>${n}</h3>
      </div>

      <ul class="params-card">
            <li class="calories"><span class="params-text">Burned calories:</span> ${o}/${i}min</li>
            <li class="body-part"><span class="params-text">Body part:</span> ${s}</li>
            <li class="target"><span class="params-text">Target:</span> ${u}</li>
      </ul>
    </li>`,"")),Z()}const Ie=document.querySelector(".search-block"),Ce=document.querySelector(".custom-pagination-btn"),w=document.querySelectorAll(".render-pagination-btn"),ze=f.create({baseURL:"https://energyflow.b.goit.study/api/"}),De={fetchFilters:async e=>{try{return(await ze.get("filters",{params:e})).data.results}catch(t){console.error(t),Oe(t)}}},Oe=e=>{throw a.error({title:"API Error",message:"An error occurred while fetching data from the API."}),e},Re=async e=>{try{return(await De.fetchFilters({...e})).map(Ue).join("")}catch(t){return console.error(t),ne(),""}},Ue=e=>`<li class="render-page-one-item" data-name="${e.name}">
            <img src="${e.imgUrl}" alt="" />
            <div class="render-page-one-img-container">
              <p class="render-page-one-item-title">${e.name}</p>
              <p class="render-page-one-item-zones">${e.filter}</p>
            </div>
          </li>`,ne=()=>{a.error({title:"Rendering Error",message:"An error occurred while rendering data."})},He=async e=>{try{const t=await e;Ie.innerHTML=t}catch(t){console.error(t),ne()}},Ne=e=>{const t=parseInt(e.dataset.btn)===3?1:-1;w.forEach(o=>{o.textContent=parseInt(o.textContent)+t}),w[0].style.display=h.page>1?"block":"none",w[2].style.display=h.page>=Ve-1?"none":"block"},Fe=e=>{e.target.nodeName==="BUTTON"&&(h.page=parseInt(e.target.textContent),He(Re(h)),Ne(e.target))},je=getComputedStyle(document.querySelector("body")).width,se=je<768?8:12,h={limit:se,page:1},Ve=69/se;Ce.addEventListener("click",Fe);const We=document.querySelector(".footer-form"),Qe=document.querySelector(".footer-form-input"),_e="https://energyflow.b.goit.study/api/subscription";We.addEventListener("submit",Ge);async function Ge(e){e.preventDefault();const t=e.currentTarget.elements.footerInput.value.trim();if(!Ke(t))return Ye();try{const o=await f.post(_e,{email:t});if(o.status>=200&&o.status<300){const n=o.data.message;a.success({title:"OK",message:n,color:"white",position:"center"})}else throw new Error}catch(o){a.error({title:"Error",message:o.response.data.message,position:"center",backgroundColor:"gray"})}finally{Qe.value=""}}const Ke=e=>/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(e),Ye=()=>{a.info({title:"",message:"Please give us a valid email.",color:"white",position:"center"})},Je=100,q=document.querySelector(".skroll-btn"),Ze=()=>window.scrollY||document.documentElement.scrollTop;window.addEventListener("scroll",()=>{Ze()>Je?q.classList.add("skroll-btn-active"):q.classList.remove("skroll-btn-active")});q.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});const m=[{text:"One-Month Membership",color:"rgba(232, 232, 232, 1)"},{text:"Personal Training Session",color:"rgb(126, 133, 127)"},{text:"Fitness Bracelet",color:"rgba(232, 232, 232, 1)"},{text:"25% Off Certificate",color:"rgb(126, 133, 127)"},{text:"$50 Gift Card",color:"rgba(232, 232, 232, 1)"},{text:"10% Off Certificate",color:"rgb(126, 133, 127)"},{text:"$30 Gift Card",color:"rgba(232, 232, 232, 1)"},{text:"Participation in Marathon",color:"rgb(126, 133, 127)"}],p=document.querySelector(".deal-wheel"),g=p.querySelector(".spinner"),F=p.querySelector(".btn-spin"),T=p.querySelector(".ticker"),Xe=document.querySelector(".get-prize-container"),C=360/m.length,et=Math.floor(180/m.length),re="is-spinning",ae="selected",tt=window.getComputedStyle(g);let ie,y=0,j=0,z;const ot=()=>{m.forEach(({text:e,color:t,reaction:o},n)=>{const s=C*n*-1-et;g.insertAdjacentHTML("beforeend",`<li class="prize" data-reaction=${o} style="--rotate: ${s}deg">
        <span class="text">${e}</span>
      </li>`)})},nt=()=>{g.setAttribute("style",`background: conic-gradient(
      from -90deg,
      ${m.map(({color:e},t)=>`${e} 0 ${100/m.length*(m.length-t)}%`).reverse()}
    );`)},st=()=>{nt(),ot(),z=p.querySelectorAll(".prize")},rt=(e,t)=>(e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e),ce=()=>{const e=tt.transform.split("(")[1].split(")")[0].split(","),t=e[0],o=e[1];let n=Math.atan2(o,t);n<0&&(n+=2*Math.PI);const s=Math.round(n*(180/Math.PI)),r=Math.floor(s/C);j!==r&&(T.style.animation="none",setTimeout(()=>T.style.animation=null,10),j=r),ie=requestAnimationFrame(ce)},at=()=>{const e=Math.floor(y/C);z[e].classList.add(ae);const t=m[e].text;setTimeout(()=>{p.style.display="none",introMessagePrize.style.display="none",congratulationsMessage.style.display="block",document.getElementById("congratulationMessage").innerHTML="Congratulations!",document.getElementById("congratulationMessage1").innerHTML=" You've won: ",document.getElementById("prizeMessage").innerText=t,Xe.style.display="block"},3e3)};F.addEventListener("click",()=>{F.disabled=!0,y=Math.floor(Math.random()*360+rt(2e3,5e3)),z.forEach(e=>e.classList.remove(ae)),p.classList.add(re),g.style.setProperty("--rotate",y),T.style.animation="none",ce()});g.addEventListener("transitionend",()=>{cancelAnimationFrame(ie),y%=360,at(),p.classList.remove(re),g.style.setProperty("--rotate",y)});st();const it=document.querySelector("#prizeForm");document.querySelector(".input-get");it.addEventListener("submit",ct);async function ct(e){e.preventDefault();const t=e.currentTarget.elements.prizeInput.value.trim();if(!lt(t))return dt()}const lt=e=>/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(e),dt=()=>{a.info({title:"",message:"Please give us a valid email.",color:"white",position:"center"})};var D=document.getElementById("myModalPrize"),ut=document.getElementById("openModalBtnPrize");ut.onclick=function(){D.style.display="flex"};function le(){D.style.display="none"}window.onclick=function(e){e.target==D&&le()};var mt=document.getElementById("closeModalPrize");mt.onclick=function(){le()};document.addEventListener("DOMContentLoaded",function(){function e(){var n=document.getElementById("email-prize").value,s=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;if(!s.test(n)){a.error({title:"Error",message:"Enter a valid email!",zIndex:1001,timeout:2e3,backgroundColor:"white",color:"black",iconColor:"black"});return}a.success({title:"Success",message:"Form submitted!",zIndex:1001,timeout:2e3,backgroundColor:"white",color:"black",iconColor:"black"}),setTimeout(function(){t()},1e3)}function t(){var n=document.getElementById("myModalPrize");n.style.display="none"}var o=document.querySelector(".button-get");o.addEventListener("click",e)});const d={modalBackdrop:document.querySelector(".js-backdrop-modal"),closeBtn:document.querySelector(".js-rating-close"),form:document.querySelector(".js-rating-form"),rateStars:document.querySelector(".js-stars-list"),rateValue:document.querySelector(".js-rating-data"),star:document.querySelectorAll(".js-rating-star")};let de=0;window.addEventListener("click",b);document.addEventListener("keydown",gt);d.closeBtn.addEventListener("click",pt);d.form.addEventListener("submit",ue);d.rateStars.addEventListener("click",ft);function b(e){e.target.classList.contains("backdrop")&&(d.modalBackdrop.classList.remove("is-hidden"),window.removeEventListener("click",b))}function pt(e){e.currentTarget&&(d.modalBackdrop.classList.add("is-hidden"),window.removeEventListener("click",b))}function gt(e){e.code==="Escape"&&(d.modalBackdrop.classList.add("is-hidden"),window.removeEventListener("click",b))}function ft(e){let t=e.target,o=d.rateStars.querySelector(".star-active");t.classList.add("star-active"),o&&o.classList.remove("star-active"),setTimeout(()=>{d.rateValue.textContent=`${t.dataset.rate}.0`},0),de=t.dataset.rate}function ue(e){e.preventDefault(),console.log({rating:de,email:e.target.elements.email.value,comment:e.target.elements.comment.value}),d.modalBackdrop.classList.remove("is-hidden"),d.form.removeEventListener("submit",ue)}
//# sourceMappingURL=main-47e3116b.js.map
