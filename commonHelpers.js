import{a as t}from"./assets/skroll-btn-74a8efb4.js";import"./assets/vendor-3806a34f.js";const e=document.querySelector(".favoritePartInfo"),a=localStorage.getItem("favoritesCard");let s=[];const p=`
 '<img class="favoritePart-img" src="./img/dumbbell.svg" alt="">',
 '<p class="favoritePart-text">It appears that you havent added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future.</p>`;h();async function h(){a!=null?(s=JSON.parse(a),await f(s),t()):e.innerHTML=p}async function f(r){let i=r.reduce((o,{burnedCalories:c,name:l,bodyPart:n,rating:d,time:v,target:u,_id:g})=>o+`<li class="gallery-card">
      <div class="header-card">
        <div class="workout">WORKOUT</div>
        <div class="rating">
            <p>${d}</p>
            <svg class="icon-star" width="12" height="12">
                <use href="../../img/sprite.svg#icon-star"></use>
            </svg>
        </div>
        <div class="workout-btn-container" data-action="right">
            <button class="workout-btn" id="${g}">Start
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
          <h3>${l}</h3>
      </div>
      <ul class="params-card">
            <li class="calories"><span class="params-text">Burned calories:</span> ${c}/${v}min</li>
            <li class="body-part"><span class="params-text">Body part:</span> ${n}</li>
            <li class="target"><span class="params-text">Target:</span> ${u}</li>
      </ul>
    </li>`,"");e.innerHTML=i,t()}
//# sourceMappingURL=commonHelpers.js.map
