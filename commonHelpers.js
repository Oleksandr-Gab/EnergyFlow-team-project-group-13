import{i,a as m}from"./assets/skroll-btn-60c9a70b.js";import{i as l,T as q,a as S}from"./assets/vendor-29bef8ec.js";const T="<img class='favoritePart-img' src='./img/dumbbell.svg' alt=''> <p class='favoritePart-text'>It appears that you havent added any exercises to your favorites yet.To get started, you can add exercises that you like to your favorites for easier access in the future.</p>",s=document.querySelector(".favoritePartInfo"),d=localStorage.getItem("favoritesCard"),w=document.querySelector(".quote-fav-info"),f="quote-of-the-day",n="date",D=new Date,c=D.getDate();let g;async function I(){try{const a=(await S.create({baseURL:"https://energyflow.b.goit.study/api"}).get("/quote")).data;p(a),$(a,c)}catch(t){l.error({timeout:5e3,title:"Error",message:t.message,position:"topRight"})}}b();//! SAVE QUOTE AND DATA
function $(t,e){localStorage.setItem(f,JSON.stringify(t)),localStorage.setItem(n,e)}//! RENDER QUOTE
function p(t){const e=[t];w.innerHTML=e.reduce((a,{quote:r,author:o})=>a+`<p class="quote-text">${r}</p>
      <h3 class="quote-author">${o}</h3>`,"")}//! CHECK DAY AND GET NEW QUOTE
async function b(){const t=localStorage.getItem(n);if(isNaN(t)){l.error({timeout:5e3,title:"Error",message:error.message,position:"topRight"});return}if(parseInt(t)===c){const e=localStorage.getItem(f);if(e){const a=JSON.parse(e);p(a)}return}await I(),localStorage.setItem(n,c.toString())}new q("#fan-quote",{speed:26,startDelay:300,waitUntilVisible:!0,afterComplete:function(t){t.destroy()}}).go();function A(){if(d!=null){g=JSON.parse(d);try{s.innerHTML=" ",x(g)}catch{l.error({message:"Error, query. repeat the request.",color:"red",position:"topCenter"})}}else s.insertAdjacentHTML("afterbegin",T),s.style.justifyContent="center"}async function x(t){let e=t.reduce((a,{burnedCalories:r,name:o,bodyPart:v,time:h,target:y,_id:u})=>a+`<li class="fav-gallery-card" id="${u}">
      <div class="header-card">
        <div class="fav-titel-card">  
          <div class="workout">WORKOUT</div>
            <div class="trash">
              <svg class="icon-trash" width="16" height="16">
                <use href="${i}#trash"></use>
              </svg>
            </div>
          </div>

        <div class="workout-btn-container" data-action="right">
          <button class="workout-btn" id="${u}">Start
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
            <li class="calories"><span class="params-text">Burned calories:</span> ${r}/${h}min</li>
            <li class="body-part"><span class="params-text">Body part:</span> ${v}</li>
            <li class="target"><span class="params-text">Target:</span> ${y}</li>
      </ul>
    </li>`,"");s.innerHTML=e,m()}A();
//# sourceMappingURL=commonHelpers.js.map
