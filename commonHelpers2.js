import{a as N}from"./assets/skroll-btn-d4b44128.js";import{a as L,i as o,b as G}from"./assets/vendor-8598a644.js";const _=document.querySelector(".filter-list"),E=document.querySelector(".gallery"),v=document.querySelector(".pagination-btn"),Y=document.querySelector(".waist"),K=L.create({baseURL:"https://energyflow.b.goit.study/api"});let $;const Z=document.querySelector('button[name="Muscles"]');document.addEventListener("DOMContentLoaded",async()=>{await w({filter:"Muscles"}),Z.classList.add("filter-active");let e=document.querySelector(".pg-num-btn");console.log(e)});const Q=async({filter:e,page:t,limit:s})=>{try{return $=await K.get("/filters",{params:{filter:e,page:t,limit:s}}),$}catch(a){console.error(a),o.error({message:a.message,color:"red",position:"topCenter"})}};_.addEventListener("click",e=>{e.preventDefault(),E.innerHTML="",v.innerHTML="",Y.innerHTML="",e.target.tagName==="BUTTON"&&(document.querySelectorAll(".filter-button").forEach(t=>{t.classList.remove("filter-active")}),e.target.classList.add("filter-active"),w({filter:e.target.name}))});v.addEventListener("click",e=>{e.preventDefault(),e.target.tagName==="BUTTON"&&(v.innerHTML="",E.innerHTML="",w({filter:e.target.name,page:e.target.id}))});async function w({filter:e,page:t=1,limit:s=12}){try{const a=await Q({filter:e,page:t,limit:s}),i=()=>{const y=a.data.totalPages;let c="";for(let r=1;r<=y;r++)Number(t)===r?c+=`<li id="${r}"  class="pg-item" > <button id="${r}" class="pg-num-btn pg-num-btn-active" type="button" name="${e}"
 >${r}</button></li> `:c+=`<li id="${r}"  class="pg-item" > <button id="${r}" class="pg-num-btn" type="button" name="${e}"
 >${r}</button></li> `;return c},m=a.data.results.reduce((y,{name:c,filter:r,imgUrl:W})=>y+`<li class="gallery-item" id=${c}>
          <div class="card" >
             <img class="gallery-image"
             src="${W}"
             alt="${r}"
            />
            </div>
            <div class="card-description">
            <p class="name-description" id="${r}:${c}">${c}"</p>
            <p class="filter-description">${r}</p>
            </div>
          </li>`,""),b=i();v.innerHTML=b,E.innerHTML=m}catch(a){console.error(a),o.error({message:a.message,color:"red",position:"topCenter"})}}const J="Unfortunately, no results were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.",X=document.querySelector(".field-search-wraper");document.querySelector(".search-block");const M=document.querySelector(".gallery"),ee=document.querySelector(".search-icon");let z=document.querySelector("#slash");const f=document.querySelector(".waist"),C=document.querySelector("#search"),A=innerWidth;let g;const x=L.create({baseURL:"https://energyflow.b.goit.study/api"}),H=async(e,{params:t})=>await x.get(e,{params:t});M.addEventListener("click",e=>{e.preventDefault(),f.innerHTML="",M.innerHTML="",z.innerHTML="",X.style.display="block",f.classList.add("information-cards");const s=e.target.id.split(":");x.defaults.params={page:1,limit:A>1400?"9":"8",muscles:s[0]==="Muscles"?s[1]:null,bodypart:s[0]==="Body parts"?s[1]:null,equipment:s[0]==="Equipment"?s[1]:null},z.insertAdjacentHTML("beforeend",`<p>&#8260;<span class="title-span">${s[1]}</span></p>`),H("/exercises",{params:{}}).then(a=>{O(a.data.results)}).catch(a=>{o.error({message:a.message,position:"topRight"})})});let I;C.addEventListener("input",e=>{I=e.target.value});ee.addEventListener("click",e=>{f.innerHTML="",M.innerHTML="",x.defaults.params={page:1,limit:A>1400?"9":"8",keyword:I,muscles:g[0]==="Muscles"?g[1]:null,bodypart:g[0]==="Body parts"?g[1]:null,equipment:g[0]==="Equipment"?g[1]:null},H("/exercises",{params:{}}).then(t=>{console.log(t.data.totalPages),t.data.totalPages===null&&(f.innerHTML=`${J}`),O(t.data.results)}).catch(t=>{o.error({message:t.message,position:"topRight"})}).finally(()=>{C.value=""})});function O(e){f.insertAdjacentHTML("afterbegin",e.reduce((t,{burnedCalories:s,name:a,bodyPart:i,rating:m,time:b,target:y,_id:c})=>t+`<li class="gallery-card">
      <div class="header-card">
        <div class="workout">WORKOUT</div>
        <div class="rating">
            <p>${m}</p>
            <svg class="icon-star" width="12" height="12">
                <use href=./img/sprite.svg#icon-star></use>
            </svg>
        </div>
                 
        <div class="workout-btn-container" data-action="right">
            <button class="workout-btn" id="${c}">Start
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
          <h3>${a}</h3>
      </div>

      <ul class="params-card">
            <li class="calories"><span class="params-text">Burned calories:</span> ${s}/${b}min</li>
            <li class="body-part"><span class="params-text">Body part:</span> ${i}</li>
            <li class="target"><span class="params-text">Target:</span> ${y}</li>
      </ul>
    </li>`,"")),N()}const te=document.querySelector(".footer-form"),se=document.querySelector(".footer-form-input"),ae="https://energyflow.b.goit.study/api/subscription";te.addEventListener("submit",re);async function re(e){e.preventDefault();const t=e.currentTarget.elements.footerInput.value.trim();if(!ne(t))return oe();try{const s=await L.post(ae,{email:t});if(s.status>=200&&s.status<300){const a=s.data.message;o.success({title:"OK",message:a,color:"white",position:"center"})}else throw new Error}catch(s){o.error({title:"Error",message:s.response.data.message,position:"center",backgroundColor:"gray"})}finally{se.value=""}}const ne=e=>/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(e),oe=()=>{o.info({title:"",message:"Please give us a valid email.",color:"white",position:"center"})},d=[{text:"One-Month Membership",color:"rgba(232, 232, 232, 1)"},{text:"Personal Training Session",color:"rgb(126, 133, 127)"},{text:"Fitness Bracelet",color:"rgba(232, 232, 232, 1)"},{text:"25% Off Certificate",color:"rgb(126, 133, 127)"},{text:"$50 Gift Card",color:"rgba(232, 232, 232, 1)"},{text:"10% Off Certificate",color:"rgb(126, 133, 127)"},{text:"$30 Gift Card",color:"rgba(232, 232, 232, 1)"},{text:"Participation in Marathon",color:"rgb(126, 133, 127)"}],u=document.querySelector(".deal-wheel"),p=u.querySelector(".spinner"),B=u.querySelector(".btn-spin"),S=u.querySelector(".ticker"),ie=document.querySelector(".get-prize-container"),q=360/d.length,ce=Math.floor(180/d.length),j="is-spinning",R="selected",le=window.getComputedStyle(p);let D,h=0,P=0,k;const de=()=>{d.forEach(({text:e,color:t,reaction:s},a)=>{const i=q*a*-1-ce;p.insertAdjacentHTML("beforeend",`<li class="prize" data-reaction=${s} style="--rotate: ${i}deg">
        <span class="text">${e}</span>
      </li>`)})},ue=()=>{p.setAttribute("style",`background: conic-gradient(
      from -90deg,
      ${d.map(({color:e},t)=>`${e} 0 ${100/d.length*(d.length-t)}%`).reverse()}
    );`)},me=()=>{ue(),de(),k=u.querySelectorAll(".prize")},ge=(e,t)=>(e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e),U=()=>{const e=le.transform.split("(")[1].split(")")[0].split(","),t=e[0],s=e[1];let a=Math.atan2(s,t);a<0&&(a+=2*Math.PI);const i=Math.round(a*(180/Math.PI)),m=Math.floor(i/q);P!==m&&(S.style.animation="none",setTimeout(()=>S.style.animation=null,10),P=m),D=requestAnimationFrame(U)},pe=()=>{const e=Math.floor(h/q);k[e].classList.add(R);const t=d[e].text;setTimeout(()=>{u.style.display="none",introMessagePrize.style.display="none",congratulationsMessage.style.display="block",document.getElementById("congratulationMessage").innerHTML="Congratulations!",document.getElementById("congratulationMessage1").innerHTML=" You've won: ",document.getElementById("prizeMessage").innerText=t,ie.style.display="block"},3e3)};B.addEventListener("click",()=>{B.disabled=!0,h=Math.floor(Math.random()*360+ge(2e3,5e3)),k.forEach(e=>e.classList.remove(R)),u.classList.add(j),p.style.setProperty("--rotate",h),S.style.animation="none",U()});p.addEventListener("transitionend",()=>{cancelAnimationFrame(D),h%=360,pe(),u.classList.remove(j),p.style.setProperty("--rotate",h)});me();const ye=document.querySelector("#prizeForm");document.querySelector(".input-get");ye.addEventListener("submit",fe);async function fe(e){e.preventDefault();const t=e.currentTarget.elements.prizeInput.value.trim();if(!he(t))return ve()}const he=e=>/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(e),ve=()=>{o.info({title:"",message:"Please give us a valid email.",color:"white",position:"center"})};var T=document.getElementById("myModalPrize"),Le=document.getElementById("openModalBtnPrize");Le.onclick=function(){T.style.display="flex"};function F(){T.style.display="none"}window.onclick=function(e){e.target==T&&F()};var be=document.getElementById("closeModalPrize");be.onclick=function(){F()};document.addEventListener("DOMContentLoaded",function(){function e(){var a=document.getElementById("email-prize").value,i=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;if(!i.test(a)){o.error({title:"Error",message:"Enter a valid email!",zIndex:1001,timeout:2e3,backgroundColor:"white",color:"black",iconColor:"black"});return}o.success({title:"Success",message:"Form submitted!",zIndex:1001,timeout:2e3,backgroundColor:"white",color:"black",iconColor:"black"}),setTimeout(function(){t()},1e3)}function t(){var a=document.getElementById("myModalPrize");a.style.display="none"}var s=document.querySelector(".button-get");s.addEventListener("click",e)});let V;const n={ratingModal:document.querySelector(".js-backdrop-modal"),closeBtn:document.querySelector(".js-rating-close"),rateStars:document.querySelector(".js-stars-list"),star:document.querySelectorAll(".js-rating-star"),openModalsBtn:document.querySelector(".exersizes-cards-container"),openRatingBtn:document.querySelector(".modal-button-rating"),exerciseModal:document.querySelector(".modal"),closeExerciseBtn:document.querySelector(".modal-button-close"),exsCont:document.querySelector(".exs-container")};document.addEventListener("click",Me);document.addEventListener("click",xe);document.addEventListener("keydown",qe);function Me(e){e.target.classList.contains("exersizes-card-btn")?Se(e):e.target.classList.contains("modal-button-rating")&&Ee()}async function Se(e){try{const t=await getData(e.target.dataset.id);n.exsCont.innerHTML=createMarkup(t.data),n.exerciseModal.classList.add("is-open"),V=e.target.dataset.id,we()}catch(t){throw new Error(t.message)}}function Ee(e){n.ratingModal.classList.toggle("is-open")}function we(){const e=document.querySelector(".ex-rating-active"),t=document.querySelector(".modal-rating-value");e.style.width=`${parseFloat(t.textContent)/.05}%`}function xe(e){e.target.classList.contains("backdrop")&&n.ratingModal.classList.contains("is-open")?n.ratingModal.classList.remove("is-open"):e.target.classList.contains("backdrop")&&n.exerciseModal.classList.contains("is-open")||e.target.classList.contains("modal-button-close")||e.target.classList.contains("modal-button-close-icon")||e.target.classList.contains("modal-button-close-use")?n.exerciseModal.classList.remove("is-open"):(e.target.classList.contains("rating-close")||e.target.classList.contains("rating-close-svg")||e.target.classList.contains("rating-close-use"))&&n.ratingModal.classList.remove("is-open")}function qe(e){e.code==="Escape"&&n.ratingModal.classList.contains("is-open")?n.ratingModal.classList.remove("is-open"):e.code==="Escape"&&n.exerciseModal.classList.contains("is-open")&&n.exerciseModal.classList.remove("is-open")}const l={modalBackdrop:document.querySelector(".js-backdrop-modal"),form:document.querySelector(".js-rating-form"),exerciseModal:document.querySelector(".modal"),rateValue:document.querySelector(".js-rating-data"),starsContainer:document.querySelector(".js-stars-list")};l.form.addEventListener("submit",Te);l.starsContainer.addEventListener("click",ke);function ke(e){e.target.classList.contains("rating-label")&&(l.rateValue.textContent=`${e.target.dataset.rate}.0`)}async function Te(e){e.preventDefault();try{const t=await L.patch(`https://energyflow.b.goit.study/api/exercises/${V}/rating`,{rate:parseInt(e.target.elements.rating.value),email:e.target.elements.email.value.trim(),review:e.target.elements.comment.value.trim()});G.operationSuccess()}catch(t){throw new Error(t.message)}finally{$e()}}function $e(){l.modalBackdrop.classList.remove("is-open"),l.exerciseModal.classList.remove("is-open"),l.rateValue.textContent="0.0",l.form.reset()}
//# sourceMappingURL=commonHelpers2.js.map
