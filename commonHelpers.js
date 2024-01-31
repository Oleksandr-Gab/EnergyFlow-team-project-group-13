import{a as g}from"./assets/modal-form-3e42cfcb.js";import"./assets/vendor-8598a644.js";const h=document.querySelector(".favoritePartInfo"),a=localStorage.getItem("favoritesCard");console.log(r);let t=[];r();async function r(){if(a!=null){t=JSON.parse(a);try{console.log("sssss"),await u(t),g()}catch{iziToast.error({message:"Помилка, запиту. повторіть запит.",color:"red",position:"topCenter"})}}else console.log("DDDDDDDDD")}async function u(s){let i=s.reduce((e,{burnedCalories:o,name:c,bodyPart:l,time:n,target:d,_id:v})=>e+`<li class="fav-gallery-card">
      <div class="header-card">
        <div class="fav-titel-card">  
          <div class="workout">WORKOUT</div>
            <div class="trash">
              <svg class="icon-trash" width="16" height="16">
                <use href="./img/sprite.svg#trash"></use>
              </svg>
            </div>
          </div>

        <div class="workout-btn-container" data-action="right">
          <button class="workout-btn" id="${v}">Start
            <svg class="icon-right" width="14" height="16">
                <use href="./img/sprite.svg#icon-right"></use>
            </svg>
          </button>
        </div>
      </div>
      <div class="title-card">
          <div class="icon-card">
              <svg class="run" width="24" height="24">
                  <use href="./img/sprite.svg#run"></use>
              </svg>
          </div>
          <h3>${c}</h3>
      </div>
      <ul class="params-card">
            <li class="calories"><span class="params-text">Burned calories:</span> ${o}/${n}min</li>
            <li class="body-part"><span class="params-text">Body part:</span> ${l}</li>
            <li class="target"><span class="params-text">Target:</span> ${d}</li>
      </ul>
    </li>`,"");h.innerHTML=i}
//# sourceMappingURL=commonHelpers.js.map
