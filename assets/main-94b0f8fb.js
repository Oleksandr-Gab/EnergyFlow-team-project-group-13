import{T as te,i as a,a as y}from"./vendor-29bef8ec.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=o(r);fetch(r.href,s)}})();const $=document.querySelector("[data-menu-open]"),D=document.querySelector("[data-menu-close]"),oe=document.querySelector(".nav"),ke=document.querySelector('[data-action="homepage"]'),Me=document.querySelector('[data-action="favoritespage"]'),H=document.querySelector(".menu-back-drop"),ne=document.body,Te=document.querySelector(".header"),qe=window.location.href;qe.includes("favorite")&&(ke.classList.remove("current"),Me.classList.add("current"),Te.style.position="static");document.addEventListener("keydown",e=>{e.key==="Escape"&&R()});D.addEventListener("click",R);$.addEventListener("click",()=>{oe.classList.add("active"),$.classList.add("is-hidden"),D.classList.remove("is-hidden"),ne.classList.add("lock"),H.classList.add("active")});function R(){oe.classList.remove("active"),$.classList.remove("is-hidden"),D.classList.add("is-hidden"),ne.classList.remove("lock"),H.classList.remove("active")}H.addEventListener("click",Be);function Be(e){e.target.classList.contains("menu-back-drop")&&R()}const $e=document.querySelector(".quote-info"),re="quote-of-the-day",C="date",Ce=new Date,P=Ce.getDate();async function Pe(){try{const o=(await y.create({baseURL:"https://energyflow.b.goit.study/api"}).get("/quote")).data;se(o),xe(o,P)}catch(e){a.error({timeout:5e3,title:"Error",message:e.message,position:"topRight"})}}//! SAVE QUOTE AND DATA
function xe(e,t){localStorage.setItem(re,JSON.stringify(e)),localStorage.setItem(C,t)}//! RENDER QUOTE
function se(e){const t=[e];$e.innerHTML=t.reduce((o,{quote:n,author:r})=>o+`<p class="quote-text">${n}</p>
        <h3 class="quote-author">${r}</h3>`,"")}//! CHECK DAY AND GET NEW QUOTE
async function Ie(){const e=localStorage.getItem(C);if(isNaN(e)){a.error({timeout:5e3,title:"Error",message:error.message,position:"topRight"});return}if(parseInt(e)===P){const t=localStorage.getItem(re);if(t){const o=JSON.parse(t);se(o)}return}await Pe(),localStorage.setItem(C,P.toString())}Ie();//! ANIMATION 
new te("#quote",{speed:26,startDelay:300,waitUntilVisible:!0,afterComplete:function(e){e.destroy()}}).go();new te("#motivation-txt",{speed:26,startDelay:300,waitUntilVisible:!0,afterComplete:function(e){e.destroy()}}).go();const Ae=document.querySelector(".filter-list"),N=document.querySelector(".gallery"),w=document.querySelector(".pagination-btn"),Oe=document.querySelector(".waist"),ze=y.create({baseURL:"https://energyflow.b.goit.study/api"});let G;const ae=document.querySelector('button[name="Muscles"]');let J;document.addEventListener("DOMContentLoaded",async()=>{await F({filter:"Muscles"}),ae.classList.add("active"),J=document.querySelector(".pg-num-btn"),J.classList.add("pg-num-btn-active")});const De=async({filter:e,page:t,limit:o})=>{try{return G=await ze.get("/filters",{params:{filter:e,page:t,limit:o}}),G}catch(n){console.error(n),a.error({message:n.message,color:"red",position:"topCenter"})}};Ae.addEventListener("click",e=>{e.preventDefault(),N.innerHTML="",w.innerHTML="",Oe.innerHTML="",e.target.tagName==="BUTTON"&&(ae.classList.remove("active"),F({filter:e.target.name}))});w.addEventListener("click",e=>{e.preventDefault(),e.target.tagName==="BUTTON"&&(w.innerHTML="",N.innerHTML="",F({filter:e.target.name,page:e.target.id}))});async function F({filter:e,page:t=1,limit:o=12}){try{const n=await De({filter:e,page:t,limit:o}),r=()=>{const m=n.data.totalPages;let c="";for(let l=1;l<=m;l++)c+=`<button id="${l}" class="pg-num-btn" type="button" name="${e}"
 >${l}</button>`;return c},s=n.data.results.reduce((m,{name:c,filter:l,imgUrl:v})=>m+`<li class="gallery-item" id=${c}>
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
          </li>`,""),i=r();w.insertAdjacentHTML("afterbegin",i),N.insertAdjacentHTML("afterbegin",s)}catch(n){console.error(n),a.error({message:n.message,color:"red",position:"topCenter"})}}document.addEventListener("DOMContentLoaded",()=>{le()});const U=document.getElementById("exerciseModal"),ie=document.getElementById("closeModalBtn"),ce=document.getElementById("information"),d=document.getElementById("addToFavoritesBtn");let K,h;async function He(e){try{h=(await y.create({baseURL:"https://energyflow.b.goit.study/api/exercises"}).get(e)).data,Re(h)}catch{a.error({title:"Error",message:"Error fetching exercise data: ",position:"topRight"})}}const le=()=>{K=document.querySelectorAll(".workout-btn-container"),K.forEach(e=>{e.addEventListener("click",t=>{t.preventDefault();let o=t.target.id;He(o)})})};async function Re(e){const{bodyPart:t,burnedCalories:o,description:n,equipment:r,gifUrl:s,name:i,popularity:m,rating:c,target:l,time:v}=e,q=`

        <div class="gif">
        <img src="${s}" alt="${i}" >
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
        <span class="info-text">Equipment</span> ${r}
    </li>
    <li class="info-item">
        <span class="info-text">Popular</span> ${m}
    </li>
    <li class="info-item">
        <span class="info-text">Burned Calories</span> ${o}/${v}min
    </li>
</ul>


        <p class="description">Description: ${n}</p> 
        </div>`;ce.innerHTML=q,await j(),Ne()}function Ne(){U.classList.add("open"),document.body.style.overflow="hidden",ie.addEventListener("click",M),document.addEventListener("mouseup",de),document.addEventListener("keydown",ue)}function M(){U.classList.remove("open"),ie.removeEventListener("click",M),document.removeEventListener("mouseup",de),document.removeEventListener("keydown",ue),ce.innerHTML="",document.body.style.overflow="",d.removeEventListener("click",b),d.removeEventListener("click",S)}const de=function(e){!document.getElementById("modal").contains(e.target)&&U.classList.contains("open")&&M()},ue=function(e){e.key==="Escape"&&M()},Fe=e=>{const{_id:t,bodyPart:o,burnedCalories:n,description:r,equipment:s,gifUrl:i,name:m,popularity:c,rating:l,target:v,time:q}=e;return{_id:t,bodyPart:o,burnedCalories:n,description:r,equipment:s,gifUrl:i,name:m,popularity:c,rating:l,target:v,time:q}},b=()=>{let e=localStorage.getItem("favoritesCard"),t=[];e!=null&&(t=JSON.parse(e));const o=Fe(h);t.push(o),localStorage.setItem("favoritesCard",JSON.stringify(t)),j()},S=()=>{const{_id:e}=h;let t=localStorage.getItem("favoritesCard"),o=JSON.parse(t).filter(n=>n._id!=e);localStorage.setItem("favoritesCard",JSON.stringify(o)),j()},j=()=>{const{_id:e}=h;let t=localStorage.getItem("favoritesCard");d.removeEventListener("click",S),d.addEventListener("click",b),d.innerHTML="Add to favorites",t!=null&&JSON.parse(t).forEach(o=>{o._id==e?(d.innerHTML="Delete favorite",d.removeEventListener("click",b),d.addEventListener("click",S)):(d.removeEventListener("click",S),d.addEventListener("click",b),d.innerHTML="Add to favorites")})},Ue="Unfortunately, no results were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.",x=document.querySelector(".gallery"),Y=document.querySelector(".section-title");document.querySelector("#slash");const I=document.querySelector(".waist"),A=document.querySelector("#search"),me=innerWidth,_=y.create({baseURL:"https://energyflow.b.goit.study/api"}),pe=async(e,{params:t})=>await _.get(e,{params:t});x.addEventListener("click",e=>{e.preventDefault(),I.innerHTML="",x.innerHTML="",A.style.display="block",I.classList.add("information-cards");const o=e.target.id.split(":");_.defaults.params={limit:me>1400?"9":"8",muscles:o[0]==="Muscles"?o[1]:null,bodypart:o[0]==="Body parts"?o[1]:null,equipment:o[0]==="Equipment"?o[1]:null},Y.insertAdjacentHTML("beforeend",`<p id="slash">&#8260;<span class="title-span">${o[1]}</span></p>`),console.log(Y),pe("/exercises",{params:{}}).then(n=>{ge(n.data.results)}).catch(n=>{a.error({message:n.message,position:"topRight"})})});let E,Z;A.addEventListener("input",e=>{clearTimeout(Z),Z=setTimeout(function(){E=A.value,console.log(E)},1e3),searchBlock.addEventListener("click",t=>{if(console.log(E.toLowerCase()),E.trim()!=="input-value"){x.innerHTML=`<div class="errorEmageContainer">${Ue}</div>`;return}_.defaults.params={limit:me>1400?"9":"8"},pe("/exercises",{params:{keyword:t.target.value}}).then(o=>{console.log(o.data),ge(o.data.results)}).catch(o=>{a.error({message:o.message,position:"topRight"})})})});function ge(e){I.insertAdjacentHTML("afterbegin",e.reduce((t,{burnedCalories:o,name:n,bodyPart:r,rating:s,time:i,target:m,_id:c})=>t+`<li class="gallery-card">
      <div class="header-card">
        <div class="workout">WORKOUT</div>
        <div class="rating">
            <p>${s}</p>
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
            <li class="body-part"><span class="params-text">Body part:</span> ${r}</li>
            <li class="target"><span class="params-text">Target:</span> ${m}</li>
      </ul>
    </li>`,"")),le()}const je=document.querySelector(".search-block"),_e=document.querySelector(".custom-pagination-btn"),B=document.querySelectorAll(".render-pagination-btn"),Ve=y.create({baseURL:"https://energyflow.b.goit.study/api/"}),We={fetchFilters:async e=>{try{return(await Ve.get("filters",{params:e})).data.results}catch(t){console.error(t),Qe(t)}}},Qe=e=>{throw a.error({title:"API Error",message:"An error occurred while fetching data from the API."}),e},Ge=async e=>{try{return(await We.fetchFilters({...e})).map(Je).join("")}catch(t){return console.error(t),fe(),""}},Je=e=>`<li class="render-page-one-item" data-name="${e.name}">
            <img src="${e.imgUrl}" alt="" />
            <div class="render-page-one-img-container">
              <p class="render-page-one-item-title">${e.name}</p>
              <p class="render-page-one-item-zones">${e.filter}</p>
            </div>
          </li>`,fe=()=>{a.error({title:"Rendering Error",message:"An error occurred while rendering data."})},Ke=async e=>{try{const t=await e;je.innerHTML=t}catch(t){console.error(t),fe()}},Ye=e=>{const t=parseInt(e.dataset.btn)===3?1:-1;B.forEach(o=>{o.textContent=parseInt(o.textContent)+t}),B[0].style.display=k.page>1?"block":"none",B[2].style.display=k.page>=et-1?"none":"block"},Ze=e=>{e.target.nodeName==="BUTTON"&&(k.page=parseInt(e.target.textContent),Ke(Ge(k)),Ye(e.target))},Xe=getComputedStyle(document.querySelector("body")).width,ye=Xe<768?8:12,k={limit:ye,page:1},et=69/ye;_e.addEventListener("click",Ze);const tt=document.querySelector(".footer-form"),ot=document.querySelector(".footer-form-input"),nt="https://energyflow.b.goit.study/api/subscription";tt.addEventListener("submit",rt);async function rt(e){e.preventDefault();const t=e.currentTarget.elements.footerInput.value.trim();if(!st(t))return at();try{const o=await y.post(nt,{email:t});if(o.status>=200&&o.status<300){const n=o.data.message;a.success({title:"OK",message:n,color:"white",position:"center"})}else throw new Error}catch(o){a.error({title:"Error",message:o.response.data.message,position:"center",backgroundColor:"gray"})}finally{ot.value=""}}const st=e=>/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(e),at=()=>{a.info({title:"",message:"Please give us a valid email.",color:"white",position:"center"})},it=100,O=document.querySelector(".skroll-btn"),ct=()=>window.scrollY||document.documentElement.scrollTop;window.addEventListener("scroll",()=>{ct()>it?O.classList.add("skroll-btn-active"):O.classList.remove("skroll-btn-active")});O.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});const p=[{text:"One-Month Membership",color:"rgba(232, 232, 232, 1)"},{text:"Personal Training Session",color:"rgb(126, 133, 127)"},{text:"Fitness Bracelet",color:"rgba(232, 232, 232, 1)"},{text:"25% Off Certificate",color:"rgb(126, 133, 127)"},{text:"$50 Gift Card",color:"rgba(232, 232, 232, 1)"},{text:"10% Off Certificate",color:"rgb(126, 133, 127)"},{text:"$30 Gift Card",color:"rgba(232, 232, 232, 1)"},{text:"Participation in Marathon",color:"rgb(126, 133, 127)"}],g=document.querySelector(".deal-wheel"),f=g.querySelector(".spinner"),X=g.querySelector(".btn-spin"),z=g.querySelector(".ticker"),lt=document.querySelector(".get-prize-container"),V=360/p.length,dt=Math.floor(180/p.length),ve="is-spinning",he="selected",ut=window.getComputedStyle(f);let Le,L=0,ee=0,W;const mt=()=>{p.forEach(({text:e,color:t,reaction:o},n)=>{const r=V*n*-1-dt;f.insertAdjacentHTML("beforeend",`<li class="prize" data-reaction=${o} style="--rotate: ${r}deg">
        <span class="text">${e}</span>
      </li>`)})},pt=()=>{f.setAttribute("style",`background: conic-gradient(
      from -90deg,
      ${p.map(({color:e},t)=>`${e} 0 ${100/p.length*(p.length-t)}%`).reverse()}
    );`)},gt=()=>{pt(),mt(),W=g.querySelectorAll(".prize")},ft=(e,t)=>(e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e),Ee=()=>{const e=ut.transform.split("(")[1].split(")")[0].split(","),t=e[0],o=e[1];let n=Math.atan2(o,t);n<0&&(n+=2*Math.PI);const r=Math.round(n*(180/Math.PI)),s=Math.floor(r/V);ee!==s&&(z.style.animation="none",setTimeout(()=>z.style.animation=null,10),ee=s),Le=requestAnimationFrame(Ee)},yt=()=>{const e=Math.floor(L/V);W[e].classList.add(he);const t=p[e].text;setTimeout(()=>{g.style.display="none",introMessagePrize.style.display="none",congratulationsMessage.style.display="block",document.getElementById("congratulationMessage").innerHTML="Congratulations!",document.getElementById("congratulationMessage1").innerHTML=" You've won: ",document.getElementById("prizeMessage").innerText=t,lt.style.display="block"},3e3)};X.addEventListener("click",()=>{X.disabled=!0,L=Math.floor(Math.random()*360+ft(2e3,5e3)),W.forEach(e=>e.classList.remove(he)),g.classList.add(ve),f.style.setProperty("--rotate",L),z.style.animation="none",Ee()});f.addEventListener("transitionend",()=>{cancelAnimationFrame(Le),L%=360,yt(),g.classList.remove(ve),f.style.setProperty("--rotate",L)});gt();const vt=document.querySelector("#prizeForm");document.querySelector(".input-get");vt.addEventListener("submit",ht);async function ht(e){e.preventDefault();const t=e.currentTarget.elements.prizeInput.value.trim();if(!Lt(t))return Et()}const Lt=e=>/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(e),Et=()=>{a.info({title:"",message:"Please give us a valid email.",color:"white",position:"center"})};var Q=document.getElementById("myModalPrize"),bt=document.getElementById("openModalBtnPrize");bt.onclick=function(){Q.style.display="flex"};function be(){Q.style.display="none"}window.onclick=function(e){e.target==Q&&be()};var St=document.getElementById("closeModalPrize");St.onclick=function(){be()};document.addEventListener("DOMContentLoaded",function(){function e(){var n=document.getElementById("email-prize").value,r=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;if(!r.test(n)){a.error({title:"Error",message:"Enter a valid email!",zIndex:1001,timeout:2e3,backgroundColor:"white",color:"black",iconColor:"black"});return}a.success({title:"Success",message:"Form submitted!",zIndex:1001,timeout:2e3,backgroundColor:"white",color:"black",iconColor:"black"}),setTimeout(function(){t()},1e3)}function t(){var n=document.getElementById("myModalPrize");n.style.display="none"}var o=document.querySelector(".button-get");o.addEventListener("click",e)});document.querySelector(".favoritePartInfo");localStorage.getItem("favorite");const u={modalBackdrop:document.querySelector(".js-backdrop-modal"),closeBtn:document.querySelector(".js-rating-close"),form:document.querySelector(".js-rating-form"),rateStars:document.querySelector(".js-stars-list"),rateValue:document.querySelector(".js-rating-data"),star:document.querySelectorAll(".js-rating-star")};let Se=0;window.addEventListener("click",T);document.addEventListener("keydown",kt);u.closeBtn.addEventListener("click",wt);u.form.addEventListener("submit",we);u.rateStars.addEventListener("click",Mt);function T(e){e.target.classList.contains("backdrop")&&(u.modalBackdrop.classList.remove("is-hidden"),window.removeEventListener("click",T))}function wt(e){e.currentTarget&&(u.modalBackdrop.classList.add("is-hidden"),window.removeEventListener("click",T))}function kt(e){e.code==="Escape"&&(u.modalBackdrop.classList.add("is-hidden"),window.removeEventListener("click",T))}function Mt(e){let t=e.target,o=u.rateStars.querySelector(".star-active");t.classList.add("star-active"),o&&o.classList.remove("star-active"),setTimeout(()=>{u.rateValue.textContent=`${t.dataset.rate}.0`},0),Se=t.dataset.rate}function we(e){e.preventDefault(),console.log({rating:Se,email:e.target.elements.email.value,comment:e.target.elements.comment.value}),u.modalBackdrop.classList.remove("is-hidden"),u.form.removeEventListener("submit",we)}
//# sourceMappingURL=main-94b0f8fb.js.map
