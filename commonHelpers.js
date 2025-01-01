import{i as n,a as T}from"./assets/skroll-btn-0349562f.js";import{i,T as q,a as I}from"./assets/vendor-8857fa14.js";const b="/assets/dumbbell-5d53e595.svg",f=`<img class='favoritePart-img' src='${b}' alt=''> <p class='favoritePart-text'>It appears that you havent added any exercises to your favorites yet.To get started, you can add exercises that you like to your favorites for easier access in the future.</p>`,s=document.querySelector(".favoritePartInfo"),u=localStorage.getItem("favoritesCard"),w=document.querySelector(".quote-fav-info"),v="quote-of-the-day",c="date",C=new Date,l=C.getDate();let g;async function D(){try{const a=(await I.create({baseURL:"https://energyflow.b.goit.study/api"}).get("/quote")).data;p(a),$(a,l)}catch(t){i.error({timeout:5e3,title:"Error",message:t.message,position:"topRight"})}}A();//! SAVE QUOTE AND DATA
function $(t,e){localStorage.setItem(v,JSON.stringify(t)),localStorage.setItem(c,e)}//! RENDER QUOTE
function p(t){const e=[t];w.innerHTML=e.reduce((a,{quote:r,author:o})=>a+`<p class="quote-text">${r}</p>
      <h3 class="quote-author">${o}</h3>`,"")}//! CHECK DAY AND GET NEW QUOTE
async function A(){const t=localStorage.getItem(c);if(isNaN(t)){i.error({timeout:5e3,title:"Error",message:error.message,position:"topRight"});return}if(parseInt(t)===l){const e=localStorage.getItem(v);if(e){const a=JSON.parse(e);p(a)}return}await D(),localStorage.setItem(c,l.toString())}new q("#fan-quote",{speed:26,startDelay:300,waitUntilVisible:!0,afterComplete:function(t){t.destroy()}}).go();function E(){if(u!=null){g=JSON.parse(u);try{s.innerHTML=" ",h(g)}catch{i.error({message:"Error, query. repeat the request.",color:"red",position:"topCenter"})}}else s.insertAdjacentHTML("afterbegin",f),s.style.justifyContent="center"}const L=t=>{let e=localStorage.getItem("favoritesCard"),a=JSON.parse(e);try{let r=a.filter(o=>o._id!=t);r.length!=0?(h(r),localStorage.setItem("favoritesCard",JSON.stringify(r))):(localStorage.removeItem("favoritesCard"),s.innerHTML=" ",s.insertAdjacentHTML("afterbegin",f),s.style.justifyContent="center")}catch{i.error({message:"Error, query. repeat the request.",color:"red",position:"topCenter"})}},O=async()=>{document.querySelectorAll(".trash").forEach(e=>{e.addEventListener("click",a=>{let r=a.currentTarget.id;L(r)})})};async function h(t){let e=t.reduce((a,{burnedCalories:r,name:o,bodyPart:y,time:m,target:S,_id:d})=>a+`<li class="fav-gallery-card">
      <div class="header-card">
        <div class="fav-titel-card">  
          <div class="workout">WORKOUT</div>
            <div class="trash" id="${d}">
              <svg class="icon-trash" width="16" height="16">
                <use href="${n}#trash"></use>
              </svg>
            </div>
          </div>

        <div class="workout-btn-container" id="${d}" data-action="right">
          <button class="workout-btn">Start
            <svg class="icon-right" width="14" height="16">
                <use href="${n}#icon-right"></use>
            </svg>
          </button>
        </div>
      </div>
      <div class="title-card">
          <div class="icon-card">
              <svg class="run" width="24" height="24">
                  <use href="${n}#run"></use>
              </svg>
          </div>
          <h3>${o}</h3>
      </div>
      <ul class="params-card">
            <li class="calories"><span class="params-text">Burned calories:</span> ${r}/${m}min</li>
            <li class="body-part"><span class="params-text">Body part:</span> ${y}</li>
            <li class="target"><span class="params-text">Target:</span> ${S}</li>
      </ul>
    </li>`,"");s.innerHTML=e,T(),O()}E();
//# sourceMappingURL=commonHelpers.js.map
