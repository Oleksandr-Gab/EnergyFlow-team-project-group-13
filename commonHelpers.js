import{a as g}from"./assets/modal-form-2e9a4be8.js";import"./assets/vendor-8598a644.js";const u="<img class='favoritePart-img' src='./img/dumbbell.svg' alt=''> <p class='favoritePart-text'>It appears that you havent added any exercises to your favorites yet.To get started, you can add exercises that you like to your favorites for easier access in the future.</p>",e=document.querySelector(".favoritePartInfo"),s=localStorage.getItem("favoritesCard");console.log(s);let t=[];async function h(){if(s!=null){t=JSON.parse(s);try{console.log("sssss"),await p(t),g()}catch{iziToast.error({message:"Помилка, запиту. повторіть запит.",color:"red",position:"topCenter"})}}else e.innerHTML=u}async function p(a){let r=a.reduce((i,{burnedCalories:o,name:c,bodyPart:l,time:n,target:d,_id:v})=>i+`<li class="fav-gallery-card">
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
    </li>`,"");e.innerHTML=r}h();
//# sourceMappingURL=commonHelpers.js.map
