import{a as x}from"./assets/modal-form-2099e469.js";import{a as u,i}from"./assets/vendor-29bef8ec.js";const A=document.querySelector(".filter-list"),f=document.querySelector(".gallery"),l=document.querySelector(".pagination-btn"),B=document.querySelector(".waist"),H=u.create({baseURL:"https://energyflow.b.goit.study/api"});let L;const E=document.querySelector('button[name="Muscles"]');let w;document.addEventListener("DOMContentLoaded",async()=>{await v({filter:"Muscles"}),E.classList.add("active"),w=document.querySelector(".pg-num-btn"),w.classList.add("pg-num-btn-active")});const U=async({filter:e,page:r,limit:t})=>{try{return L=await H.get("/filters",{params:{filter:e,page:r,limit:t}}),L}catch(s){console.error(s),i.error({message:s.message,color:"red",position:"topCenter"})}};A.addEventListener("click",e=>{e.preventDefault(),f.innerHTML="",l.innerHTML="",B.innerHTML="",e.target.tagName==="BUTTON"&&(E.classList.remove("active"),v({filter:e.target.name}))});l.addEventListener("click",e=>{e.preventDefault(),e.target.tagName==="BUTTON"&&(l.innerHTML="",f.innerHTML="",v({filter:e.target.name,page:e.target.id}))});async function v({filter:e,page:r=1,limit:t=12}){try{const s=await U({filter:e,page:r,limit:t}),d=()=>{const n=s.data.totalPages;let a="";for(let o=1;o<=n;o++)a+=`<button id="${o}" class="pg-num-btn" type="button" name="${e}"
 >${o}</button>`;return a},p=s.data.results.reduce((n,{name:a,filter:o,imgUrl:k})=>n+`<li class="gallery-item" id=${a}>
          <div class="card" >            
             <img class="gallery-image"
             src="${k}"
             alt="${o}"            
            />            
            </div>
            <div class="card-description">
            <p class="name-description" id="${o}:${a}">${a}</p>
            <p class="filter-description">${o}</p>
            </div>
          </li>`,""),g=d();l.insertAdjacentHTML("afterbegin",g),f.insertAdjacentHTML("afterbegin",p)}catch(s){console.error(s),i.error({message:s.message,color:"red",position:"topCenter"})}}const O="Unfortunately, no results were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.",m=document.querySelector(".gallery"),T=document.querySelector(".section-title");document.querySelector("#slash");const y=document.querySelector(".waist"),h=document.querySelector("#search"),q=innerWidth,b=u.create({baseURL:"https://energyflow.b.goit.study/api"}),$=async(e,{params:r})=>await b.get(e,{params:r});m.addEventListener("click",e=>{e.preventDefault(),y.innerHTML="",m.innerHTML="",h.style.display="block",y.classList.add("information-cards");const t=e.target.id.split(":");b.defaults.params={limit:q>1400?"9":"8",muscles:t[0]==="Muscles"?t[1]:null,bodypart:t[0]==="Body parts"?t[1]:null,equipment:t[0]==="Equipment"?t[1]:null},T.insertAdjacentHTML("beforeend",`<p id="slash">&#8260;<span class="title-span">${t[1]}</span></p>`),console.log(T),$("/exercises",{params:{}}).then(s=>{M(s.data.results)}).catch(s=>{i.error({message:s.message,position:"topRight"})})});let c,S;h.addEventListener("input",e=>{clearTimeout(S),S=setTimeout(function(){c=h.value,console.log(c)},1e3),searchBlock.addEventListener("click",r=>{if(console.log(c.toLowerCase()),c.trim()!=="input-value"){m.innerHTML=`<div class="errorEmageContainer">${O}</div>`;return}b.defaults.params={limit:q>1400?"9":"8"},$("/exercises",{params:{keyword:r.target.value}}).then(t=>{console.log(t.data),M(t.data.results)}).catch(t=>{i.error({message:t.message,position:"topRight"})})})});function M(e){y.insertAdjacentHTML("afterbegin",e.reduce((r,{burnedCalories:t,name:s,bodyPart:d,rating:p,time:g,target:n,_id:a})=>r+`<li class="gallery-card">
      <div class="header-card">
        <div class="workout">WORKOUT</div>
        <div class="rating">
            <p>${p}</p>
            <svg class="icon-star" width="12" height="12">
                <use href="../img/sprite.svg#icon-star"></use>
            </svg>
        </div>
                 
        <div class="workout-btn-container" data-action="right">
            <button class="workout-btn" id="${a}">Start
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
            <li class="calories"><span class="params-text">Burned calories:</span> ${t}/${g}min</li>
            <li class="body-part"><span class="params-text">Body part:</span> ${d}</li>
            <li class="target"><span class="params-text">Target:</span> ${n}</li>
      </ul>
    </li>`,"")),x()}document.querySelector(".search-block");document.querySelector(".custom-pagination-btn");document.querySelectorAll(".render-pagination-btn");u.create({baseURL:"https://energyflow.b.goit.study/api/"});getComputedStyle(document.querySelector("body")).width;const R=document.querySelector(".footer-form"),P=document.querySelector(".footer-form-input"),C="https://energyflow.b.goit.study/api/subscription";R.addEventListener("submit",D);async function D(e){e.preventDefault();const r=e.currentTarget.elements.footerInput.value.trim();if(!I(r))return W();try{const t=await u.post(C,{email:r});if(t.status>=200&&t.status<300){const s=t.data.message;i.success({title:"OK",message:s,color:"white",position:"center"})}else throw new Error}catch(t){i.error({title:"Error",message:t.response.data.message,position:"center",backgroundColor:"gray"})}finally{P.value=""}}const I=e=>/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(e),W=()=>{i.info({title:"",message:"Please give us a valid email.",color:"white",position:"center"})};
//# sourceMappingURL=commonHelpers2.js.map
