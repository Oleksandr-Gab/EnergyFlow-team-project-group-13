import{i,a as T}from"./assets/skroll-btn-1f03fc07.js";import{i as l,T as q,a as I}from"./assets/vendor-29bef8ec.js";const f="<img class='favoritePart-img' src='./img/dumbbell.svg' alt=''> <p class='favoritePart-text'>It appears that you havent added any exercises to your favorites yet.To get started, you can add exercises that you like to your favorites for easier access in the future.</p>",r=document.querySelector(".favoritePartInfo"),u=localStorage.getItem("favoritesCard"),b=document.querySelector(".quote-fav-info"),v="quote-of-the-day",n="date",w=new Date,c=w.getDate();let g;async function A(){try{const e=(await I.create({baseURL:"https://energyflow.b.goit.study/api"}).get("/quote")).data;h(e),C(e,c)}catch(t){l.error({timeout:5e3,title:"Error",message:t.message,position:"topRight"})}}D();//! SAVE QUOTE AND DATA
function C(t,a){localStorage.setItem(v,JSON.stringify(t)),localStorage.setItem(n,a)}//! RENDER QUOTE
function h(t){const a=[t];b.innerHTML=a.reduce((e,{quote:s,author:o})=>e+`<p class="quote-text">${s}</p>
      <h3 class="quote-author">${o}</h3>`,"")}//! CHECK DAY AND GET NEW QUOTE
async function D(){const t=localStorage.getItem(n);if(isNaN(t)){l.error({timeout:5e3,title:"Error",message:error.message,position:"topRight"});return}if(parseInt(t)===c){const a=localStorage.getItem(v);if(a){const e=JSON.parse(a);h(e)}return}await A(),localStorage.setItem(n,c.toString())}new q("#fan-quote",{speed:26,startDelay:300,waitUntilVisible:!0,afterComplete:function(t){t.destroy()}}).go();function $(){if(u!=null){g=JSON.parse(u);try{r.innerHTML=" ",p(g)}catch{l.error({message:"Error, query. repeat the request.",color:"red",position:"topCenter"})}}else r.insertAdjacentHTML("afterbegin",f),r.style.justifyContent="center"}const O=t=>{let a=localStorage.getItem("favoritesCard"),e=JSON.parse(a).filter(s=>s._id!=t);e.length!=0?(p(e),localStorage.setItem("favoritesCard",JSON.stringify(e))):(localStorage.removeItem("favoritesCard"),r.innerHTML=" ",r.insertAdjacentHTML("afterbegin",f),r.style.justifyContent="center")},E=async()=>{document.querySelectorAll(".trash").forEach(a=>{a.addEventListener("click",e=>{let s=e.currentTarget.id;console.log(s),O(s)})})};async function p(t){let a=t.reduce((e,{burnedCalories:s,name:o,bodyPart:y,time:m,target:S,_id:d})=>e+`<li class="fav-gallery-card">
      <div class="header-card">
        <div class="fav-titel-card">  
          <div class="workout">WORKOUT</div>
            <div class="trash" id="${d}">
              <svg class="icon-trash" width="16" height="16">
                <use href="${i}#trash"></use>
              </svg>
            </div>
          </div>

        <div class="workout-btn-container" data-action="right">
          <button class="workout-btn" id="${d}">Start
            <svg class="icon-right" width="14" height="16">
                <use href="${i}#icon-right"></use>
            </svg>
          </button>
        </div>
      </div>
      <div class="title-card">
          <div class="icon-card">
              <svg class="run" width="24" height="24">
                  <use href="${i}#run"></use>
              </svg>
          </div>
          <h3>${o}</h3>
      </div>
      <ul class="params-card">
            <li class="calories"><span class="params-text">Burned calories:</span> ${s}/${m}min</li>
            <li class="body-part"><span class="params-text">Body part:</span> ${y}</li>
            <li class="target"><span class="params-text">Target:</span> ${S}</li>
      </ul>
    </li>`,"");r.innerHTML=a,T(),E()}$();
//# sourceMappingURL=commonHelpers.js.map
