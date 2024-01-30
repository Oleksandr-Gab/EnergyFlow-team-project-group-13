import{T as j,i as a,a as f}from"./vendor-29bef8ec.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(n){if(n.ep)return;n.ep=!0;const r=o(n);fetch(n.href,r)}})();const S=document.querySelector("[data-menu-open]"),B=document.querySelector("[data-menu-close]"),V=document.querySelector(".nav"),ue=document.querySelector('[data-action="homepage"]'),me=document.querySelector('[data-action="favoritespage"]'),$=document.querySelector(".menu-back-drop"),Q=document.body,pe=document.querySelector(".header"),ge=window.location.href;ge.includes("favorite")&&(ue.classList.remove("current"),me.classList.add("current"),pe.style.position="static");document.addEventListener("keydown",e=>{e.key==="Escape"&&P()});B.addEventListener("click",P);S.addEventListener("click",()=>{V.classList.add("active"),S.classList.add("is-hidden"),B.classList.remove("is-hidden"),Q.classList.add("lock"),$.classList.add("active")});function P(){V.classList.remove("active"),S.classList.remove("is-hidden"),B.classList.add("is-hidden"),Q.classList.remove("lock"),$.classList.remove("active")}$.addEventListener("click",fe);function fe(e){e.target.classList.contains("menu-back-drop")&&P()}const ye=document.querySelector(".quote-info"),W="quote-of-the-day",k="date",ve=new Date,M=ve.getDate();async function he(){try{const o=(await f.create({baseURL:"https://energyflow.b.goit.study/api"}).get("/quote")).data;_(o),Le(o,M)}catch(e){a.error({timeout:5e3,title:"Error",message:e.message,position:"topRight"})}}//! SAVE QUOTE AND DATA
function Le(e,t){localStorage.setItem(W,JSON.stringify(e)),localStorage.setItem(k,t)}//! RENDER QUOTE
function _(e){const t=[e];ye.innerHTML=t.reduce((o,{quote:s,author:n})=>o+`<p class="quote-text">${s}</p>
        <h3 class="quote-author">${n}</h3>`,"")}//! CHECK DAY AND GET NEW QUOTE
async function be(){const e=localStorage.getItem(k);if(isNaN(e)){a.error({timeout:5e3,title:"Error",message:error.message,position:"topRight"});return}if(parseInt(e)===M){const t=localStorage.getItem(W);if(t){const o=JSON.parse(t);_(o)}return}await he(),localStorage.setItem(k,M.toString())}be();//! ANIMATION 
new j("#quote",{speed:26,startDelay:300,waitUntilVisible:!0,afterComplete:function(e){e.destroy()}}).go();new j("#motivation-txt",{speed:26,startDelay:300,waitUntilVisible:!0,afterComplete:function(e){e.destroy()}}).go();const Ee=document.querySelector(".filter-list"),x=document.querySelector(".gallery"),v=document.querySelector(".pagination-btn"),we=f.create({baseURL:"https://energyflow.b.goit.study/api"});let R;const G=document.querySelector('button[name="Muscles"]');document.addEventListener("DOMContentLoaded",async()=>{await A({filter:"Muscles"}),G.classList.add("active")});const Se=async({filter:e,page:t,limit:o})=>{try{return R=await we.get("/filters",{params:{filter:e,page:t,limit:o}}),R}catch(s){console.error(s),a.error({message:s.message,color:"red",position:"topCenter"})}};Ee.addEventListener("click",e=>{e.preventDefault(),x.innerHTML="",v.innerHTML="",e.target.tagName==="BUTTON"&&(G.classList.remove("active"),A({filter:e.target.name}))});v.addEventListener("click",e=>{e.preventDefault(),e.target.tagName==="BUTTON"&&(v.innerHTML="",x.innerHTML="",A({filter:e.target.name,page:e.target.id}))});async function A({filter:e,page:t=1,limit:o=12}){try{const s=await Se({filter:e,page:t,limit:o}),n=()=>{const u=s.data.totalPages;let c="";for(let l=1;l<=u;l++)c+=`<button id="${l}" class="pg-num-btn" type="button" name="${e}"
 >${l}</button>`;return c},r=s.data.results.reduce((u,{name:c,filter:l,imgUrl:E})=>u+`<li class="gallery-item" id=${c}>
          <div class="card" >            
             <img class="gallery-image"
             src="${E}"
             alt="${l}"            
            />            
            </div>
            <div class="card-description">
            <p class="name-description" id="{filter:${l}, namePart:${c}}">${c}</p>
            <p class="filter-description">${l}</p>
            </div>
          </li>`,""),i=n();v.insertAdjacentHTML("afterbegin",i),x.insertAdjacentHTML("afterbegin",r)}catch(s){console.error(s),a.error({message:s.message,color:"red",position:"topCenter"})}}document.addEventListener("DOMContentLoaded",()=>{J()});const I=document.getElementById("exerciseModal"),K=document.getElementById("closeModalBtn"),Y=document.getElementById("information");let U;async function ke(e){try{const s=(await f.create({baseURL:"https://energyflow.b.goit.study/api/exercises"}).get(e)).data;console.log(s),Me(s)}catch{a.error({title:"Error",message:"Error fetching exercise data: ",position:"topRight"})}}const J=()=>{U=document.querySelectorAll(".workout-btn-container"),U.forEach(e=>{e.addEventListener("click",t=>{t.preventDefault();let o=t.target.id;ke(o)})})};function Me(e){const{bodyPart:t,burnedCalories:o,description:s,equipment:n,gifUrl:r,name:i,popularity:u,rating:c,target:l,time:E}=e,O=`

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
        <span class="info-text">Burned Calories</span> ${o}/${E}min
    </li>
</ul>


        <p class="description">Description: ${s}</p> 
        </div>`;console.log(O),Y.innerHTML=O,qe()}function qe(){I.classList.add("open"),document.body.style.overflow="hidden",K.addEventListener("click",L),document.addEventListener("mouseup",Z),document.addEventListener("keydown",X)}function L(){I.classList.remove("open"),K.removeEventListener("click",L),document.removeEventListener("mouseup",Z),document.removeEventListener("keydown",X),Y.innerHTML="",document.body.style.overflow=""}const Z=function(e){!document.getElementById("modal").contains(e.target)&&I.classList.contains("open")&&L()},X=function(e){e.key==="Escape"&&L()},H=document.querySelector(".gallery"),ee=document.querySelector(".waist"),Te=document.querySelector("#search"),Be=innerWidth;document.querySelector(".workout-btn-container");const te=f.create({baseURL:"https://energyflow.b.goit.study/api"}),$e=async(e,{params:t})=>await te.get(e,{params:t});H.addEventListener("click",e=>{e.preventDefault(),console.log(e.target.tagName),H.innerHTML="",Te.style.display="block",ee.classList.add("information-cards"),te.defaults.params={limit:Be>1400?"9":"8"},$e("/exercises",{params:{}}).then(t=>{console.log(t.data.results),Pe(t.data.results)}).catch(t=>{a.error({message:t,position:"topRight"})})});function Pe(e){ee.insertAdjacentHTML("afterbegin",e.reduce((t,{burnedCalories:o,name:s,bodyPart:n,rating:r,time:i,target:u,_id:c})=>t+`<li class="gallery-card">
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
    </li>`,"")),J()}const xe=document.querySelector(".search-block"),Ae=document.querySelector(".custom-pagination-btn"),w=document.querySelectorAll(".render-pagination-btn"),Ie=f.create({baseURL:"https://energyflow.b.goit.study/api/"}),Ce={fetchFilters:async e=>{try{return(await Ie.get("filters",{params:e})).data.results}catch(t){console.error(t),ze(t)}}},ze=e=>{throw a.error({title:"API Error",message:"An error occurred while fetching data from the API."}),e},De=async e=>{try{return(await Ce.fetchFilters({...e})).map(Oe).join("")}catch(t){return console.error(t),oe(),""}},Oe=e=>`<li class="render-page-one-item" data-name="${e.name}">
            <img src="${e.imgUrl}" alt="" />
            <div class="render-page-one-img-container">
              <p class="render-page-one-item-title">${e.name}</p>
              <p class="render-page-one-item-zones">${e.filter}</p>
            </div>
          </li>`,oe=()=>{a.error({title:"Rendering Error",message:"An error occurred while rendering data."})},Re=async e=>{try{const t=await e;xe.innerHTML=t}catch(t){console.error(t),oe()}},Ue=e=>{const t=parseInt(e.dataset.btn)===3?1:-1;w.forEach(o=>{o.textContent=parseInt(o.textContent)+t}),w[0].style.display=h.page>1?"block":"none",w[2].style.display=h.page>=Fe-1?"none":"block"},He=e=>{e.target.nodeName==="BUTTON"&&(h.page=parseInt(e.target.textContent),Re(De(h)),Ue(e.target))},Ne=getComputedStyle(document.querySelector("body")).width,se=Ne<768?8:12,h={limit:se,page:1},Fe=69/se;Ae.addEventListener("click",He);const je=document.querySelector(".footer-form"),Ve=document.querySelector(".footer-form-input"),Qe="https://energyflow.b.goit.study/api/subscription";je.addEventListener("submit",We);async function We(e){e.preventDefault();const t=e.currentTarget.elements.footerInput.value.trim();if(!_e(t))return Ge();try{const o=await f.post(Qe,{email:t});if(o.status>=200&&o.status<300){const s=o.data.message;a.success({title:"OK",message:s,color:"white",position:"center"})}else throw new Error}catch(o){a.error({title:"Error",message:o.response.data.message,position:"center",backgroundColor:"gray"})}finally{Ve.value=""}}const _e=e=>/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(e),Ge=()=>{a.info({title:"",message:"Please give us a valid email.",color:"white",position:"center"})},Ke=100,q=document.querySelector(".skroll-btn"),Ye=()=>window.scrollY||document.documentElement.scrollTop;window.addEventListener("scroll",()=>{Ye()>Ke?q.classList.add("skroll-btn-active"):q.classList.remove("skroll-btn-active")});q.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});const m=[{text:"One-Month Membership",color:"rgba(232, 232, 232, 1)"},{text:"Personal Training Session",color:"rgb(126, 133, 127)"},{text:"Fitness Bracelet",color:"rgba(232, 232, 232, 1)"},{text:"25% Off Certificate",color:"rgb(126, 133, 127)"},{text:"$50 Gift Card",color:"rgba(232, 232, 232, 1)"},{text:"10% Off Certificate",color:"rgb(126, 133, 127)"},{text:"$30 Gift Card",color:"rgba(232, 232, 232, 1)"},{text:"Participation in Marathon",color:"rgb(126, 133, 127)"}],p=document.querySelector(".deal-wheel"),g=p.querySelector(".spinner"),N=p.querySelector(".btn-spin"),T=p.querySelector(".ticker"),Je=document.querySelector(".get-prize-container"),C=360/m.length,Ze=Math.floor(180/m.length),ne="is-spinning",re="selected",Xe=window.getComputedStyle(g);let ae,y=0,F=0,z;const et=()=>{m.forEach(({text:e,color:t,reaction:o},s)=>{const n=C*s*-1-Ze;g.insertAdjacentHTML("beforeend",`<li class="prize" data-reaction=${o} style="--rotate: ${n}deg">
        <span class="text">${e}</span>
      </li>`)})},tt=()=>{g.setAttribute("style",`background: conic-gradient(
      from -90deg,
      ${m.map(({color:e},t)=>`${e} 0 ${100/m.length*(m.length-t)}%`).reverse()}
    );`)},ot=()=>{tt(),et(),z=p.querySelectorAll(".prize")},st=(e,t)=>(e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e),ie=()=>{const e=Xe.transform.split("(")[1].split(")")[0].split(","),t=e[0],o=e[1];let s=Math.atan2(o,t);s<0&&(s+=2*Math.PI);const n=Math.round(s*(180/Math.PI)),r=Math.floor(n/C);F!==r&&(T.style.animation="none",setTimeout(()=>T.style.animation=null,10),F=r),ae=requestAnimationFrame(ie)},nt=()=>{const e=Math.floor(y/C);z[e].classList.add(re);const t=m[e].text;setTimeout(()=>{p.style.display="none",introMessagePrize.style.display="none",congratulationsMessage.style.display="block",document.getElementById("congratulationMessage").innerHTML="Congratulations!",document.getElementById("congratulationMessage1").innerHTML=" You've won: ",document.getElementById("prizeMessage").innerText=t,Je.style.display="block"},3e3)};N.addEventListener("click",()=>{N.disabled=!0,y=Math.floor(Math.random()*360+st(2e3,5e3)),z.forEach(e=>e.classList.remove(re)),p.classList.add(ne),g.style.setProperty("--rotate",y),T.style.animation="none",ie()});g.addEventListener("transitionend",()=>{cancelAnimationFrame(ae),y%=360,nt(),p.classList.remove(ne),g.style.setProperty("--rotate",y)});ot();const rt=document.querySelector("#prizeForm");document.querySelector(".input-get");rt.addEventListener("submit",at);async function at(e){e.preventDefault();const t=e.currentTarget.elements.prizeInput.value.trim();if(!it(t))return ct()}const it=e=>/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(e),ct=()=>{a.info({title:"",message:"Please give us a valid email.",color:"white",position:"center"})};var D=document.getElementById("myModalPrize"),lt=document.getElementById("openModalBtnPrize");lt.onclick=function(){D.style.display="flex"};function ce(){D.style.display="none"}window.onclick=function(e){e.target==D&&ce()};var dt=document.getElementById("closeModalPrize");dt.onclick=function(){ce()};document.addEventListener("DOMContentLoaded",function(){function e(){var s=document.getElementById("email-prize").value,n=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;if(!n.test(s)){a.error({title:"Error",message:"Enter a valid email!",zIndex:1001,timeout:2e3,backgroundColor:"white",color:"black",iconColor:"black"});return}a.success({title:"Success",message:"Form submitted!",zIndex:1001,timeout:2e3,backgroundColor:"white",color:"black",iconColor:"black"}),setTimeout(function(){t()},1e3)}function t(){var s=document.getElementById("myModalPrize");s.style.display="none"}var o=document.querySelector(".button-get");o.addEventListener("click",e)});const d={modalBackdrop:document.querySelector(".js-backdrop-modal"),closeBtn:document.querySelector(".js-rating-close"),form:document.querySelector(".js-rating-form"),rateStars:document.querySelector(".js-stars-list"),rateValue:document.querySelector(".js-rating-data"),star:document.querySelectorAll(".js-rating-star")};let le=0;window.addEventListener("click",b);document.addEventListener("keydown",mt);d.closeBtn.addEventListener("click",ut);d.form.addEventListener("submit",de);d.rateStars.addEventListener("click",pt);function b(e){e.target.classList.contains("backdrop")&&(d.modalBackdrop.classList.remove("is-hidden"),window.removeEventListener("click",b))}function ut(e){e.currentTarget&&(d.modalBackdrop.classList.add("is-hidden"),window.removeEventListener("click",b))}function mt(e){e.code==="Escape"&&(d.modalBackdrop.classList.add("is-hidden"),window.removeEventListener("click",b))}function pt(e){let t=e.target,o=d.rateStars.querySelector(".star-active");t.classList.add("star-active"),o&&o.classList.remove("star-active"),setTimeout(()=>{d.rateValue.textContent=`${t.dataset.rate}.0`},0),le=t.dataset.rate}function de(e){e.preventDefault(),console.log({rating:le,email:e.target.elements.email.value,comment:e.target.elements.comment.value}),d.modalBackdrop.classList.remove("is-hidden"),d.form.removeEventListener("submit",de)}
//# sourceMappingURL=main-7c2d2c57.js.map
