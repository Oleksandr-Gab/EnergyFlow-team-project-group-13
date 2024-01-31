import{a as W}from"./assets/skroll-btn-74a8efb4.js";import{a as v,i as a}from"./assets/vendor-3806a34f.js";const j=document.querySelector(".filter-list"),b=document.querySelector(".gallery"),M=document.querySelector(".pagination-btn"),F=document.querySelector(".waist"),N=v.create({baseURL:"https://energyflow.b.goit.study/api"});let z;const G=document.querySelector('button[name="Muscles"]');let P;document.addEventListener("DOMContentLoaded",async()=>{await L({filter:"Muscles"}),G.classList.add("filter-active"),P=document.querySelector(".pg-num-btn"),P.classList.add("pg-num-btn-active")});const _=async({filter:e,page:t,limit:s})=>{try{return z=await N.get("/filters",{params:{filter:e,page:t,limit:s}}),z}catch(r){console.error(r),a.error({message:r.message,color:"red",position:"topCenter"})}};j.addEventListener("click",e=>{e.preventDefault(),b.innerHTML="",M.innerHTML="",F.innerHTML="",e.target.tagName==="BUTTON"&&(document.querySelectorAll(".filter-button").forEach(t=>{t.classList.remove("filter-active")}),e.target.classList.add("filter-active"),L({filter:e.target.name}))});M.addEventListener("click",e=>{e.preventDefault(),e.target.tagName==="BUTTON"&&e.target.classList.contains("pg-num-btn")&&(document.querySelectorAll(".pg-num-btn").forEach(t=>{t.classList.remove("pg-num-btn-active")}),e.target.classList.add("pg-num-btn-active"),b.innerHTML="",L({filter:e.target.name,page:e.target.id}))});async function L({filter:e,page:t=1,limit:s=12}){try{const r=await _({filter:e,page:t,limit:s}),n=()=>{const m=r.data.totalPages;let o="";for(let i=1;i<=m;i++)o+=`<button id="${i}" class="pg-num-btn" type="button" name="${e}"
 >${i}</button>`;return o},d=r.data.results.reduce((m,{name:o,filter:i,imgUrl:U})=>m+`<li class="gallery-item" id=${o}>
          <div class="card" >            
             <img class="gallery-image"
             src="${U}"
             alt="${i}"            
            />            
            </div>
            <div class="card-description">
            <p class="name-description" id="${i}:${o}">${o}</p>
            <p class="filter-description">${i}</p>
            </div>
          </li>`,""),y=n();M.insertAdjacentHTML("afterbegin",y),b.insertAdjacentHTML("afterbegin",d)}catch(r){console.error(r),a.error({message:r.message,color:"red",position:"topCenter"})}}const f=document.querySelector(".gallery"),V=document.querySelector(".search-icon");let k=document.querySelector("#slash");const p=document.querySelector(".waist"),x=document.querySelector("#search"),B=innerWidth,E=v.create({baseURL:"https://energyflow.b.goit.study/api"}),A=async(e,{params:t})=>await E.get(e,{params:t});f.addEventListener("click",e=>{e.preventDefault(),p.innerHTML="",f.innerHTML="",k.innerHTML="",x.style.display="block",p.classList.add("information-cards");const s=e.target.id.split(":");E.defaults.params={limit:B>1400?"9":"8",muscles:s[0]==="Muscles"?s[1]:null,bodypart:s[0]==="Body parts"?s[1]:null,equipment:s[0]==="Equipment"?s[1]:null},k.insertAdjacentHTML("beforeend",`<p>&#8260;<span class="title-span">${s[1]}</span></p>`),A("/exercises",{params:{}}).then(r=>{I(r.data.results)}).catch(r=>{a.error({message:r.message,position:"topRight"})})});setTimeout(function(){x.value},1e3);V.addEventListener("click",e=>{p.innerHTML="",f.innerHTML="",E.defaults.params={limit:B>1400?"9":"8",keyword:"roll"},A("/exercises",{params:{}}).then(t=>{console.log(t.data),I(t.data.results)}).catch(t=>{a.error({message:t.message,position:"topRight"})})});function I(e){p.insertAdjacentHTML("afterbegin",e.reduce((t,{burnedCalories:s,name:r,bodyPart:n,rating:d,time:y,target:m,_id:o})=>t+`<li class="gallery-card">
      <div class="header-card">
        <div class="workout">WORKOUT</div>
        <div class="rating">
            <p>${d}</p>
            <svg class="icon-star" width="12" height="12">
                <use href="../../img/sprite.svg#icon-star"></use>
            </svg>
        </div>
                 
        <div class="workout-btn-container" data-action="right">
            <button class="workout-btn" id="${o}">Start
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
          <h3>${r}</h3>
      </div>

      <ul class="params-card">
            <li class="calories"><span class="params-text">Burned calories:</span> ${s}/${y}min</li>
            <li class="body-part"><span class="params-text">Body part:</span> ${n}</li>
            <li class="target"><span class="params-text">Target:</span> ${m}</li>
      </ul>
    </li>`,"")),W()}const K=document.querySelector(".footer-form"),Y=document.querySelector(".footer-form-input"),Z="https://energyflow.b.goit.study/api/subscription";K.addEventListener("submit",Q);async function Q(e){e.preventDefault();const t=e.currentTarget.elements.footerInput.value.trim();if(!J(t))return X();try{const s=await v.post(Z,{email:t});if(s.status>=200&&s.status<300){const r=s.data.message;a.success({title:"OK",message:r,color:"white",position:"center"})}else throw new Error}catch(s){a.error({title:"Error",message:s.response.data.message,position:"center",backgroundColor:"gray"})}finally{Y.value=""}}const J=e=>/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(e),X=()=>{a.info({title:"",message:"Please give us a valid email.",color:"white",position:"center"})},c=[{text:"One-Month Membership",color:"rgba(232, 232, 232, 1)"},{text:"Personal Training Session",color:"rgb(126, 133, 127)"},{text:"Fitness Bracelet",color:"rgba(232, 232, 232, 1)"},{text:"25% Off Certificate",color:"rgb(126, 133, 127)"},{text:"$50 Gift Card",color:"rgba(232, 232, 232, 1)"},{text:"10% Off Certificate",color:"rgb(126, 133, 127)"},{text:"$30 Gift Card",color:"rgba(232, 232, 232, 1)"},{text:"Participation in Marathon",color:"rgb(126, 133, 127)"}],l=document.querySelector(".deal-wheel"),u=l.querySelector(".spinner"),$=l.querySelector(".btn-spin"),h=l.querySelector(".ticker"),ee=document.querySelector(".get-prize-container"),S=360/c.length,te=Math.floor(180/c.length),C="is-spinning",H="selected",se=window.getComputedStyle(u);let O,g=0,q=0,w;const re=()=>{c.forEach(({text:e,color:t,reaction:s},r)=>{const n=S*r*-1-te;u.insertAdjacentHTML("beforeend",`<li class="prize" data-reaction=${s} style="--rotate: ${n}deg">
        <span class="text">${e}</span>
      </li>`)})},ae=()=>{u.setAttribute("style",`background: conic-gradient(
      from -90deg,
      ${c.map(({color:e},t)=>`${e} 0 ${100/c.length*(c.length-t)}%`).reverse()}
    );`)},ne=()=>{ae(),re(),w=l.querySelectorAll(".prize")},oe=(e,t)=>(e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e),D=()=>{const e=se.transform.split("(")[1].split(")")[0].split(","),t=e[0],s=e[1];let r=Math.atan2(s,t);r<0&&(r+=2*Math.PI);const n=Math.round(r*(180/Math.PI)),d=Math.floor(n/S);q!==d&&(h.style.animation="none",setTimeout(()=>h.style.animation=null,10),q=d),O=requestAnimationFrame(D)},ie=()=>{const e=Math.floor(g/S);w[e].classList.add(H);const t=c[e].text;setTimeout(()=>{l.style.display="none",introMessagePrize.style.display="none",congratulationsMessage.style.display="block",document.getElementById("congratulationMessage").innerHTML="Congratulations!",document.getElementById("congratulationMessage1").innerHTML=" You've won: ",document.getElementById("prizeMessage").innerText=t,ee.style.display="block"},3e3)};$.addEventListener("click",()=>{$.disabled=!0,g=Math.floor(Math.random()*360+oe(2e3,5e3)),w.forEach(e=>e.classList.remove(H)),l.classList.add(C),u.style.setProperty("--rotate",g),h.style.animation="none",D()});u.addEventListener("transitionend",()=>{cancelAnimationFrame(O),g%=360,ie(),l.classList.remove(C),u.style.setProperty("--rotate",g)});ne();const ce=document.querySelector("#prizeForm");document.querySelector(".input-get");ce.addEventListener("submit",le);async function le(e){e.preventDefault();const t=e.currentTarget.elements.prizeInput.value.trim();if(!de(t))return ue()}const de=e=>/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(e),ue=()=>{a.info({title:"",message:"Please give us a valid email.",color:"white",position:"center"})};var T=document.getElementById("myModalPrize"),me=document.getElementById("openModalBtnPrize");me.onclick=function(){T.style.display="flex"};function R(){T.style.display="none"}window.onclick=function(e){e.target==T&&R()};var ge=document.getElementById("closeModalPrize");ge.onclick=function(){R()};document.addEventListener("DOMContentLoaded",function(){function e(){var r=document.getElementById("email-prize").value,n=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;if(!n.test(r)){a.error({title:"Error",message:"Enter a valid email!",zIndex:1001,timeout:2e3,backgroundColor:"white",color:"black",iconColor:"black"});return}a.success({title:"Success",message:"Form submitted!",zIndex:1001,timeout:2e3,backgroundColor:"white",color:"black",iconColor:"black"}),setTimeout(function(){t()},1e3)}function t(){var r=document.getElementById("myModalPrize");r.style.display="none"}var s=document.querySelector(".button-get");s.addEventListener("click",e)});
//# sourceMappingURL=commonHelpers2.js.map
