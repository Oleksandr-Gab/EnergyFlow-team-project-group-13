import{a as e}from"./assets/modal-form-1056f73c.js";import"./assets/vendor-8598a644.js";const r=document.querySelector(".favoritePartInfo"),a=localStorage.getItem("favoritesCard");let t=[];const u="<img class='favoritePart-img' src='./img/dumbbell.svg' alt=''>, <p class='favoritePart-text'>It appears that you havent added any exercises to your favorites yet.To get started, you can add exercises that you like to your favorites for easier access in the future.</p>";h();async function h(){if(a!=null){t=JSON.parse(a);try{console.log("sssss"),await p(t),e()}catch{iziToast.error({message:"Помилка, запиту. повторіть запит.",color:"red",position:"topCenter"})}}else console.log("DDDDDDDDD"),r.innerHTML=u}async function p(s){let i=s.reduce((o,{burnedCalories:c,name:l,bodyPart:n,time:d,target:v,_id:g})=>o+`<li class="fav-gallery-card">
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
          <button class="workout-btn" id="${g}">Start
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
          <h3>${l}</h3>
      </div>
      <ul class="params-card">
            <li class="calories"><span class="params-text">Burned calories:</span> ${c}/${d}min</li>
            <li class="body-part"><span class="params-text">Body part:</span> ${n}</li>
            <li class="target"><span class="params-text">Target:</span> ${v}</li>
      </ul>
    </li>`,"");r.innerHTML=i,e()}
//# sourceMappingURL=commonHelpers.js.map
