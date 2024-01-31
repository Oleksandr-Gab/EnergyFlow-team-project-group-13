import{a as F}from"./assets/modal-form-80233cd8.js";import{a as L,i as a}from"./assets/vendor-29bef8ec.js";const G=document.querySelector(".filter-list"),E=document.querySelector(".gallery"),y=document.querySelector(".pagination-btn"),_=document.querySelector(".waist"),V=L.create({baseURL:"https://energyflow.b.goit.study/api"});let P;const A=document.querySelector('button[name="Muscles"]');let $;document.addEventListener("DOMContentLoaded",async()=>{await w({filter:"Muscles"}),A.classList.add("active"),$=document.querySelector(".pg-num-btn"),$.classList.add("pg-num-btn-active")});const Y=async({filter:e,page:s,limit:t})=>{try{return P=await V.get("/filters",{params:{filter:e,page:s,limit:t}}),P}catch(r){console.error(r),a.error({message:r.message,color:"red",position:"topCenter"})}};G.addEventListener("click",e=>{e.preventDefault(),E.innerHTML="",y.innerHTML="",_.innerHTML="",e.target.tagName==="BUTTON"&&(A.classList.remove("active"),w({filter:e.target.name}))});y.addEventListener("click",e=>{e.preventDefault(),e.target.tagName==="BUTTON"&&(y.innerHTML="",E.innerHTML="",w({filter:e.target.name,page:e.target.id}))});async function w({filter:e,page:s=1,limit:t=12}){try{const r=await Y({filter:e,page:s,limit:t}),n=()=>{const m=r.data.totalPages;let o="";for(let i=1;i<=m;i++)o+=`<button id="${i}" class="pg-num-btn" type="button" name="${e}"
 >${i}</button>`;return o},d=r.data.results.reduce((m,{name:o,filter:i,imgUrl:j})=>m+`<li class="gallery-item" id=${o}>
          <div class="card" >            
             <img class="gallery-image"
             src="${j}"
             alt="${i}"            
            />            
            </div>
            <div class="card-description">
            <p class="name-description" id="${i}:${o}">${o}</p>
            <p class="filter-description">${i}</p>
            </div>
          </li>`,""),f=n();y.insertAdjacentHTML("afterbegin",f),E.insertAdjacentHTML("afterbegin",d)}catch(r){console.error(r),a.error({message:r.message,color:"red",position:"topCenter"})}}const K="Unfortunately, no results were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.",h=document.querySelector(".gallery"),x=document.querySelector(".section-title");document.querySelector("#slash");const v=document.querySelector(".waist"),b=document.querySelector("#search"),I=innerWidth,T=L.create({baseURL:"https://energyflow.b.goit.study/api"}),H=async(e,{params:s})=>await T.get(e,{params:s});h.addEventListener("click",e=>{e.preventDefault(),v.innerHTML="",h.innerHTML="",b.style.display="block",v.classList.add("information-cards");const t=e.target.id.split(":");T.defaults.params={limit:I>1400?"9":"8",muscles:t[0]==="Muscles"?t[1]:null,bodypart:t[0]==="Body parts"?t[1]:null,equipment:t[0]==="Equipment"?t[1]:null},x.insertAdjacentHTML("beforeend",`<p id="slash">&#8260;<span class="title-span">${t[1]}</span></p>`),console.log(x),H("/exercises",{params:{}}).then(r=>{O(r.data.results)}).catch(r=>{a.error({message:r.message,position:"topRight"})})});let p,q;b.addEventListener("input",e=>{clearTimeout(q),q=setTimeout(function(){p=b.value,console.log(p)},1e3),searchBlock.addEventListener("click",s=>{if(console.log(p.toLowerCase()),p.trim()!=="input-value"){h.innerHTML=`<div class="errorEmageContainer">${K}</div>`;return}T.defaults.params={limit:I>1400?"9":"8"},H("/exercises",{params:{keyword:s.target.value}}).then(t=>{console.log(t.data),O(t.data.results)}).catch(t=>{a.error({message:t.message,position:"topRight"})})})});function O(e){v.insertAdjacentHTML("afterbegin",e.reduce((s,{burnedCalories:t,name:r,bodyPart:n,rating:d,time:f,target:m,_id:o})=>s+`<li class="gallery-card">
      <div class="header-card">
        <div class="workout">WORKOUT</div>
        <div class="rating">
            <p>${d}</p>
            <svg class="icon-star" width="12" height="12">
                <use href="../img/sprite.svg#icon-star"></use>
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
            <li class="calories"><span class="params-text">Burned calories:</span> ${t}/${f}min</li>
            <li class="body-part"><span class="params-text">Body part:</span> ${n}</li>
            <li class="target"><span class="params-text">Target:</span> ${m}</li>
      </ul>
    </li>`,"")),F()}const Z=document.querySelector(".footer-form"),Q=document.querySelector(".footer-form-input"),J="https://energyflow.b.goit.study/api/subscription";Z.addEventListener("submit",X);async function X(e){e.preventDefault();const s=e.currentTarget.elements.footerInput.value.trim();if(!ee(s))return te();try{const t=await L.post(J,{email:s});if(t.status>=200&&t.status<300){const r=t.data.message;a.success({title:"OK",message:r,color:"white",position:"center"})}else throw new Error}catch(t){a.error({title:"Error",message:t.response.data.message,position:"center",backgroundColor:"gray"})}finally{Q.value=""}}const ee=e=>/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(e),te=()=>{a.info({title:"",message:"Please give us a valid email.",color:"white",position:"center"})},c=[{text:"One-Month Membership",color:"rgba(232, 232, 232, 1)"},{text:"Personal Training Session",color:"rgb(126, 133, 127)"},{text:"Fitness Bracelet",color:"rgba(232, 232, 232, 1)"},{text:"25% Off Certificate",color:"rgb(126, 133, 127)"},{text:"$50 Gift Card",color:"rgba(232, 232, 232, 1)"},{text:"10% Off Certificate",color:"rgb(126, 133, 127)"},{text:"$30 Gift Card",color:"rgba(232, 232, 232, 1)"},{text:"Participation in Marathon",color:"rgb(126, 133, 127)"}],l=document.querySelector(".deal-wheel"),u=l.querySelector(".spinner"),B=l.querySelector(".btn-spin"),M=l.querySelector(".ticker"),se=document.querySelector(".get-prize-container"),S=360/c.length,re=Math.floor(180/c.length),D="is-spinning",R="selected",ae=window.getComputedStyle(u);let U,g=0,C=0,z;const ne=()=>{c.forEach(({text:e,color:s,reaction:t},r)=>{const n=S*r*-1-re;u.insertAdjacentHTML("beforeend",`<li class="prize" data-reaction=${t} style="--rotate: ${n}deg">
        <span class="text">${e}</span>
      </li>`)})},oe=()=>{u.setAttribute("style",`background: conic-gradient(
      from -90deg,
      ${c.map(({color:e},s)=>`${e} 0 ${100/c.length*(c.length-s)}%`).reverse()}
    );`)},ie=()=>{oe(),ne(),z=l.querySelectorAll(".prize")},ce=(e,s)=>(e=Math.ceil(e),s=Math.floor(s),Math.floor(Math.random()*(s-e+1))+e),N=()=>{const e=ae.transform.split("(")[1].split(")")[0].split(","),s=e[0],t=e[1];let r=Math.atan2(t,s);r<0&&(r+=2*Math.PI);const n=Math.round(r*(180/Math.PI)),d=Math.floor(n/S);C!==d&&(M.style.animation="none",setTimeout(()=>M.style.animation=null,10),C=d),U=requestAnimationFrame(N)},le=()=>{const e=Math.floor(g/S);z[e].classList.add(R);const s=c[e].text;setTimeout(()=>{l.style.display="none",introMessagePrize.style.display="none",congratulationsMessage.style.display="block",document.getElementById("congratulationMessage").innerHTML="Congratulations!",document.getElementById("congratulationMessage1").innerHTML=" You've won: ",document.getElementById("prizeMessage").innerText=s,se.style.display="block"},3e3)};B.addEventListener("click",()=>{B.disabled=!0,g=Math.floor(Math.random()*360+ce(2e3,5e3)),z.forEach(e=>e.classList.remove(R)),l.classList.add(D),u.style.setProperty("--rotate",g),M.style.animation="none",N()});u.addEventListener("transitionend",()=>{cancelAnimationFrame(U),g%=360,le(),l.classList.remove(D),u.style.setProperty("--rotate",g)});ie();const de=document.querySelector("#prizeForm");document.querySelector(".input-get");de.addEventListener("submit",ue);async function ue(e){e.preventDefault();const s=e.currentTarget.elements.prizeInput.value.trim();if(!me(s))return ge()}const me=e=>/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(e),ge=()=>{a.info({title:"",message:"Please give us a valid email.",color:"white",position:"center"})};var k=document.getElementById("myModalPrize"),pe=document.getElementById("openModalBtnPrize");pe.onclick=function(){k.style.display="flex"};function W(){k.style.display="none"}window.onclick=function(e){e.target==k&&W()};var ye=document.getElementById("closeModalPrize");ye.onclick=function(){W()};document.addEventListener("DOMContentLoaded",function(){function e(){var r=document.getElementById("email-prize").value,n=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;if(!n.test(r)){a.error({title:"Error",message:"Enter a valid email!",zIndex:1001,timeout:2e3,backgroundColor:"white",color:"black",iconColor:"black"});return}a.success({title:"Success",message:"Form submitted!",zIndex:1001,timeout:2e3,backgroundColor:"white",color:"black",iconColor:"black"}),setTimeout(function(){s()},1e3)}function s(){var r=document.getElementById("myModalPrize");r.style.display="none"}var t=document.querySelector(".button-get");t.addEventListener("click",e)});
//# sourceMappingURL=commonHelpers2.js.map
