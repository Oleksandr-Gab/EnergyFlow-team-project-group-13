import{a as g}from"./assets/skroll-btn-b6f63ed5.js";import"./assets/vendor-3806a34f.js";const u="<img class='favoritePart-img' src='./img/dumbbell.svg' alt=''> <p class='favoritePart-text'>It appears that you havent added any exercises to your favorites yet.To get started, you can add exercises that you like to your favorites for easier access in the future.</p>",s=document.querySelector(".favoritePartInfo"),t=localStorage.getItem("favoritesCard");let e;function h(){if(t!=null){e=JSON.parse(t);try{s.innerHTML="",f(e)}catch{iziToast.error({message:"Помилка, запиту. повторіть запит.",color:"red",position:"topCenter"})}}else s.insertAdjacentHTML("afterbegin",u)}async function f(a){let r=a.reduce((i,{burnedCalories:o,name:c,bodyPart:l,time:n,target:d,_id:v})=>i+`<li class="fav-gallery-card">
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
    </li>`,"");s.innerHTML=r,g()}h();
//# sourceMappingURL=commonHelpers.js.map
