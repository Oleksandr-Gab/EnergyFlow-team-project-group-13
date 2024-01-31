import{a as Y}from"./assets/skroll-btn-150cf32a.js";import{a as v,i as o,b as K}from"./assets/vendor-8598a644.js";const Z=document.querySelector(".filter-list"),S=document.querySelector(".gallery"),E=document.querySelector(".pagination-btn"),Q=document.querySelector(".waist"),J=v.create({baseURL:"https://energyflow.b.goit.study/api"});let z;const I=document.querySelector('button[name="Muscles"]');let $;document.addEventListener("DOMContentLoaded",async()=>{await w({filter:"Muscles"}),I.classList.add("filter-active"),$=document.querySelector(".pg-num-btn"),$.classList.add("pg-num-btn-active")});const X=async({filter:e,page:t,limit:a})=>{try{return z=await J.get("/filters",{params:{filter:e,page:t,limit:a}}),z}catch(s){console.error(s),o.error({message:s.message,color:"red",position:"topCenter"})}};Z.addEventListener("click",e=>{e.preventDefault(),S.innerHTML="",E.innerHTML="",Q.innerHTML="",e.target.tagName==="BUTTON"&&(document.querySelectorAll(".filter-button").forEach(t=>{t.classList.remove("filter-active")}),e.target.classList.add("filter-active"),w({filter:e.target.name}))});E.addEventListener("click",e=>{e.preventDefault(),e.target.tagName==="BUTTON"&&e.target.classList.contains("pg-num-btn")&&(document.querySelectorAll(".pg-num-btn").forEach(t=>{t.classList.remove("pg-num-btn-active")}),e.target.classList.add("pg-num-btn-active"),S.innerHTML="",w({filter:I.name,page:e.target.id}))});async function w({filter:e,page:t=1,limit:a=12}){try{const s=await X({filter:e,page:t,limit:a}),i=()=>{const y=s.data.totalPages;let c="";for(let l=1;l<=y;l++)c+=`<button id="${l}" class="pg-num-btn" type="button" name="${e}">${l}</button>`;return c},g=s.data.results.reduce((y,{name:c,filter:l,imgUrl:_})=>y+`<li class="gallery-item" id=${c}>
          <div class="card" >            
             <img class="gallery-image"
             src="${_}"
             alt="${l}"            
            />            
            </div>
            <div class="card-description">
            <p class="name-description" id="${l}:${c}">${c}</p>
            <p class="filter-description">${l}</p>
            </div>
          </li>`,""),L=i();E.innerHTML=L,S.innerHTML=g}catch(s){console.error(s),o.error({message:s.message,color:"red",position:"topCenter"})}}const ee="Unfortunately, no results were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.",te=document.querySelector(".field-search-wraper");document.querySelector(".search-block");const M=document.querySelector(".gallery"),se=document.querySelector(".search-icon");let B=document.querySelector("#slash");const f=document.querySelector(".waist"),H=document.querySelector("#search"),O=innerWidth;let r,P;const x=v.create({baseURL:"https://energyflow.b.goit.study/api"}),R=async(e,{params:t})=>await x.get(e,{params:t});M.addEventListener("click",e=>{e.preventDefault(),f.innerHTML="",M.innerHTML="",B.innerHTML="",te.style.display="block",f.classList.add("information-cards"),P=e.target.id,r=P.split(":"),x.defaults.params={page:1,limit:O>1400?"9":"8",muscles:r[0]==="Muscles"?r[1]:null,bodypart:r[0]==="Body parts"?r[1]:null,equipment:r[0]==="Equipment"?r[1]:null},B.insertAdjacentHTML("beforeend",`<p>&#8260;<span class="title-span">${r[1]}</span></p>`),R("/exercises",{params:{}}).then(t=>{D(t.data.results)}).catch(t=>{o.error({message:t.message,position:"topRight"})})});let j;H.addEventListener("input",e=>{j=e.target.value});se.addEventListener("click",e=>{f.innerHTML="",M.innerHTML="",x.defaults.params={page:1,limit:O>1400?"9":"8",keyword:j,muscles:r[0]==="Muscles"?r[1]:null,bodypart:r[0]==="Body parts"?r[1]:null,equipment:r[0]==="Equipment"?r[1]:null},R("/exercises",{params:{}}).then(t=>{console.log(t.data.totalPages),t.data.totalPages===null&&(f.innerHTML=`${ee}`),D(t.data.results)}).catch(t=>{o.error({message:t.message,position:"topRight"})}).finally(()=>{H.value=""})});function D(e){f.insertAdjacentHTML("afterbegin",e.reduce((t,{burnedCalories:a,name:s,bodyPart:i,rating:g,time:L,target:y,_id:c})=>t+`<li class="gallery-card">
      <div class="header-card">
        <div class="workout">WORKOUT</div>
        <div class="rating">
            <p>${g}</p>
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
          <h3>${s}</h3>
      </div>

      <ul class="params-card">
            <li class="calories"><span class="params-text">Burned calories:</span> ${a}/${L}min</li>
            <li class="body-part"><span class="params-text">Body part:</span> ${i}</li>
            <li class="target"><span class="params-text">Target:</span> ${y}</li>
      </ul>
    </li>`,"")),Y()}const ae=document.querySelector(".footer-form"),re=document.querySelector(".footer-form-input"),ne="https://energyflow.b.goit.study/api/subscription";ae.addEventListener("submit",oe);async function oe(e){e.preventDefault();const t=e.currentTarget.elements.footerInput.value.trim();if(!ie(t))return ce();try{const a=await v.post(ne,{email:t});if(a.status>=200&&a.status<300){const s=a.data.message;o.success({title:"OK",message:s,color:"white",position:"center"})}else throw new Error}catch(a){o.error({title:"Error",message:a.response.data.message,position:"center",backgroundColor:"gray"})}finally{re.value=""}}const ie=e=>/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(e),ce=()=>{o.info({title:"",message:"Please give us a valid email.",color:"white",position:"center"})},u=[{text:"One-Month Membership",color:"rgba(232, 232, 232, 1)"},{text:"Personal Training Session",color:"rgb(126, 133, 127)"},{text:"Fitness Bracelet",color:"rgba(232, 232, 232, 1)"},{text:"25% Off Certificate",color:"rgb(126, 133, 127)"},{text:"$50 Gift Card",color:"rgba(232, 232, 232, 1)"},{text:"10% Off Certificate",color:"rgb(126, 133, 127)"},{text:"$30 Gift Card",color:"rgba(232, 232, 232, 1)"},{text:"Participation in Marathon",color:"rgb(126, 133, 127)"}],m=document.querySelector(".deal-wheel"),p=m.querySelector(".spinner"),C=m.querySelector(".btn-spin"),b=m.querySelector(".ticker"),le=document.querySelector(".get-prize-container"),q=360/u.length,de=Math.floor(180/u.length),U="is-spinning",F="selected",ue=window.getComputedStyle(p);let V,h=0,A=0,k;const me=()=>{u.forEach(({text:e,color:t,reaction:a},s)=>{const i=q*s*-1-de;p.insertAdjacentHTML("beforeend",`<li class="prize" data-reaction=${a} style="--rotate: ${i}deg">
        <span class="text">${e}</span>
      </li>`)})},ge=()=>{p.setAttribute("style",`background: conic-gradient(
      from -90deg,
      ${u.map(({color:e},t)=>`${e} 0 ${100/u.length*(u.length-t)}%`).reverse()}
    );`)},pe=()=>{ge(),me(),k=m.querySelectorAll(".prize")},ye=(e,t)=>(e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e),W=()=>{const e=ue.transform.split("(")[1].split(")")[0].split(","),t=e[0],a=e[1];let s=Math.atan2(a,t);s<0&&(s+=2*Math.PI);const i=Math.round(s*(180/Math.PI)),g=Math.floor(i/q);A!==g&&(b.style.animation="none",setTimeout(()=>b.style.animation=null,10),A=g),V=requestAnimationFrame(W)},fe=()=>{const e=Math.floor(h/q);k[e].classList.add(F);const t=u[e].text;setTimeout(()=>{m.style.display="none",introMessagePrize.style.display="none",congratulationsMessage.style.display="block",document.getElementById("congratulationMessage").innerHTML="Congratulations!",document.getElementById("congratulationMessage1").innerHTML=" You've won: ",document.getElementById("prizeMessage").innerText=t,le.style.display="block"},3e3)};C.addEventListener("click",()=>{C.disabled=!0,h=Math.floor(Math.random()*360+ye(2e3,5e3)),k.forEach(e=>e.classList.remove(F)),m.classList.add(U),p.style.setProperty("--rotate",h),b.style.animation="none",W()});p.addEventListener("transitionend",()=>{cancelAnimationFrame(V),h%=360,fe(),m.classList.remove(U),p.style.setProperty("--rotate",h)});pe();const he=document.querySelector("#prizeForm");document.querySelector(".input-get");he.addEventListener("submit",ve);async function ve(e){e.preventDefault();const t=e.currentTarget.elements.prizeInput.value.trim();if(!Le(t))return Me()}const Le=e=>/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(e),Me=()=>{o.info({title:"",message:"Please give us a valid email.",color:"white",position:"center"})};var T=document.getElementById("myModalPrize"),be=document.getElementById("openModalBtnPrize");be.onclick=function(){T.style.display="flex"};function N(){T.style.display="none"}window.onclick=function(e){e.target==T&&N()};var Se=document.getElementById("closeModalPrize");Se.onclick=function(){N()};document.addEventListener("DOMContentLoaded",function(){function e(){var s=document.getElementById("email-prize").value,i=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;if(!i.test(s)){o.error({title:"Error",message:"Enter a valid email!",zIndex:1001,timeout:2e3,backgroundColor:"white",color:"black",iconColor:"black"});return}o.success({title:"Success",message:"Form submitted!",zIndex:1001,timeout:2e3,backgroundColor:"white",color:"black",iconColor:"black"}),setTimeout(function(){t()},1e3)}function t(){var s=document.getElementById("myModalPrize");s.style.display="none"}var a=document.querySelector(".button-get");a.addEventListener("click",e)});let G;const n={ratingModal:document.querySelector(".js-backdrop-modal"),closeBtn:document.querySelector(".js-rating-close"),rateStars:document.querySelector(".js-stars-list"),star:document.querySelectorAll(".js-rating-star"),openModalsBtn:document.querySelector(".exersizes-cards-container"),openRatingBtn:document.querySelector(".modal-button-rating"),exerciseModal:document.querySelector(".modal"),closeExerciseBtn:document.querySelector(".modal-button-close"),exsCont:document.querySelector(".exs-container")};document.addEventListener("click",Ee);document.addEventListener("click",ke);document.addEventListener("keydown",Te);function Ee(e){e.target.classList.contains("exersizes-card-btn")?we(e):e.target.classList.contains("modal-button-rating")&&xe()}async function we(e){try{const t=await getData(e.target.dataset.id);n.exsCont.innerHTML=createMarkup(t.data),n.exerciseModal.classList.add("is-open"),G=e.target.dataset.id,qe()}catch(t){throw new Error(t.message)}}function xe(e){n.ratingModal.classList.toggle("is-open")}function qe(){const e=document.querySelector(".ex-rating-active"),t=document.querySelector(".modal-rating-value");e.style.width=`${parseFloat(t.textContent)/.05}%`}function ke(e){e.target.classList.contains("backdrop")&&n.ratingModal.classList.contains("is-open")?n.ratingModal.classList.remove("is-open"):e.target.classList.contains("backdrop")&&n.exerciseModal.classList.contains("is-open")||e.target.classList.contains("modal-button-close")||e.target.classList.contains("modal-button-close-icon")||e.target.classList.contains("modal-button-close-use")?n.exerciseModal.classList.remove("is-open"):(e.target.classList.contains("rating-close")||e.target.classList.contains("rating-close-svg")||e.target.classList.contains("rating-close-use"))&&n.ratingModal.classList.remove("is-open")}function Te(e){e.code==="Escape"&&n.ratingModal.classList.contains("is-open")?n.ratingModal.classList.remove("is-open"):e.code==="Escape"&&n.exerciseModal.classList.contains("is-open")&&n.exerciseModal.classList.remove("is-open")}const d={modalBackdrop:document.querySelector(".js-backdrop-modal"),form:document.querySelector(".js-rating-form"),exerciseModal:document.querySelector(".modal"),rateValue:document.querySelector(".js-rating-data"),starsContainer:document.querySelector(".js-stars-list")};d.form.addEventListener("submit",$e);d.starsContainer.addEventListener("click",ze);function ze(e){e.target.classList.contains("rating-label")&&(d.rateValue.textContent=`${e.target.dataset.rate}.0`)}async function $e(e){e.preventDefault();try{const t=await v.patch(`https://energyflow.b.goit.study/api/exercises/${G}/rating`,{rate:parseInt(e.target.elements.rating.value),email:e.target.elements.email.value.trim(),review:e.target.elements.comment.value.trim()});K.operationSuccess()}catch(t){throw new Error(t.message)}finally{Be()}}function Be(){d.modalBackdrop.classList.remove("is-open"),d.exerciseModal.classList.remove("is-open"),d.rateValue.textContent="0.0",d.form.reset()}
//# sourceMappingURL=commonHelpers2.js.map
