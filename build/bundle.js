!function(e){var t={};function s(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=t,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=1)}([function(e,t,s){},function(e,t,s){"use strict";s.r(t);s(0);var r={dotsArray:document.getElementsByClassName("dot"),slideArray:document.getElementsByClassName("item"),blockForDots:document.getElementById("dotsBlock"),leftSliderSide:document.getElementById("leftArrow"),rightSliderSide:document.getElementById("rightArrow")},n=e=>{for(let t=0;t<e.length;t++)if(e[t].classList.contains("isActiveImg"))return t},i=(e,t)=>{for(let s=0;s<e;s++){const e=document.createElement("span");e.setAttribute("class","dot"),t.appendChild(e)}},a=(e,t)=>{t[e].classList.add("isActiveDot")},o=(e,t,s)=>{t[e].classList.toggle("isActiveImg"),s[e].classList.toggle("isActiveDot"),e?(t[e-1].classList.toggle("isActiveImg"),s[e-1].classList.toggle("isActiveDot")):(t[t.length-1].classList.toggle("isActiveImg"),s[t.length-1].classList.toggle("isActiveDot"))},l=(e,t,s)=>{t[e].classList.toggle("isActiveImg"),s[e].classList.toggle("isActiveDot"),e===t.length-1?(t[0].classList.toggle("isActiveImg"),s[0].classList.toggle("isActiveDot")):(t[e+1].classList.toggle("isActiveImg"),s[e+1].classList.toggle("isActiveDot"))};var c={kitchenMenu:document.getElementById("kitchen"),kitchensList:document.getElementById("menuKitchens"),kitchenArrow:document.getElementById("kitchenArrow"),dishesMenu:document.getElementById("dish"),dishesList:document.getElementById("menuDishes"),dishesArrow:document.getElementById("dishesArrow")},d=(e,t,s,r)=>{e.classList.toggle("isActive"),r.style.transform+="rotate(180deg)",t.classList.contains("isActive")&&(t.classList.toggle("isActive"),s.style.transform+="rotate(180deg)")},g=()=>{c.dishesList.classList.contains("isActive")&&(c.dishesList.classList.toggle("isActive"),c.dishesArrow.style.transform+="rotate(180deg)"),c.kitchensList.classList.contains("isActive")&&(c.kitchensList.classList.toggle("isActive"),c.kitchenArrow.style.transform+="rotate(180deg)")};var m={overlay:document.getElementById("overlay"),loginBtn:document.getElementById("login_button"),modalWrap:document.getElementById("modal__wrap"),loginForm:document.getElementById("loginModal"),loginInput:document.getElementById("loginModal__login"),successMsg:document.getElementById("successMsg"),errorModal:document.getElementById("error"),errorBlock:document.getElementById("errMsg"),callbackBtn:document.getElementById("callbackBtn"),registerBtn:document.getElementById("register_button"),successForm:document.getElementById("successForm"),callbackForm:document.getElementById("callback"),passwordInput:document.getElementById("loginModal__password"),emptyError:"Field cannot be empty, please try again",existsError:"User with this login already exists",successLogin:"Welcome",incorrectError:"Login or password does not match any account, please try again",successRegister:"Your account has been create successfully!",orderSum:document.getElementById("orderSum"),orderBtn:document.getElementById("btnOrder"),orderWrap:document.getElementById("orderWrap"),clearOrder:document.getElementById("clearOrder"),overBasket:document.getElementById("overBasket"),basketList:document.getElementById("basketList"),summaryPrice:void 0},u={isOpenModal:null,overlayOn(){m.overlay.style.visibility="visible",m.modalWrap.style.visibility="visible"},overlayOff(){m.overlay.style.visibility="hidden",m.modalWrap.style.visibility="hidden"},openModal(e,t){const s=document.getElementById(`${e}`),r=document.getElementById(`${t}`);s.addEventListener("click",()=>{this.isOpenModal=t,this.overlayOn(),r.style.visibility="visible",r.style.transform="scale(1)",g()})},closeModal(e,t){const s=document.getElementById(`${e}`),r=document.getElementById(`${t}`);s.addEventListener("click",()=>{this.overlayOff(),r.style.visibility="hidden",r.style.transform="scale(0)"})},closeByOverlay(){m.overlay.addEventListener("click",()=>{this.overlayOff();const e=document.getElementById(`${this.isOpenModal}`);e.style.visibility="hidden",e.style.transform="scale(0)"})},successCallback(){m.successForm.style.display="flex",m.successMsg.innerText="The operator will call you back within a minute",setTimeout(()=>{m.successForm.style.display="none",this.overlayOff()},2500)},callBack(){m.callbackBtn.addEventListener("click",()=>{this.successCallback(),m.callbackForm.style.visibility="hidden",m.callbackForm.style.transform="scale(0)"})}},y={loginUser(){m.loginBtn.addEventListener("click",()=>{""!==m.loginInput.value&&""!==m.passwordInput.value?this.isUserInStorage()&&this.getUserPassword(this.isUserInStorage())===m.passwordInput.value?(this.successForm(m.successLogin),this.clearInputs()):this.errorMsg(m.incorrectError):this.errorMsg(m.emptyError)})},registerUser(){m.registerBtn.addEventListener("click",()=>{""!==m.loginInput.value&&""!==m.passwordInput.value?(this.isUserInStorage(m.loginInput)?this.errorMsg(m.existsError):(localStorage.setItem(m.loginInput.value,m.passwordInput.value),this.successForm(m.successRegister)),this.clearInputs()):this.errorMsg(m.emptyError)})},successForm(e){m.loginForm.style.visibility="hidden",m.loginForm.style.transform="scale(0)",m.errorModal.style.display="none",m.successForm.style.display="block",m.successMsg.innerText=e,setTimeout(()=>{m.successForm.style.display="none",u.overlayOff()},2500)},isUserInStorage(){for(let e=0;e<localStorage.length;e++)if(localStorage.key(e)===m.loginInput.value)return m.loginInput.value},getUserPassword:e=>localStorage.getItem(e),errorMsg(e){m.errorModal.style.display="flex",m.errorBlock.innerText=e},clearInputs(){m.loginInput.value="",m.passwordInput.value=""}};class h{static createElem({tag:e,className:t,id:s,inner:r}){const n=document.createElement(e);if(n.classList.add(t),s&&n.setAttribute("id",s),Array.isArray(r))for(let e=0;e<r.length;e++)n.append(r[e]);else r&&n.append(r);return n}dishConstructor(e,t,s,r){const n=h.createElem({tag:"img",className:"thing__img",id:`thing__img${r}`}),i=h.createElem({tag:"p",className:"thing__name",id:`thing__name${r}`}),a=h.createElem({tag:"p",className:"thing__price",id:`thing__price${r}`}),o=h.createElem({tag:"button",className:"thing__toBasket",id:`thing__price${r}`});n.setAttribute("src",e),i.innerText=t,a.innerText=`₴${s}`,o.innerText="Заказать",o.addEventListener("click",e=>{let t=e.target.parentNode;const s=t.children[1].textContent,r=Number(t.children[2].textContent.slice(1));v.addToBasket(s,r)});const l=h.createElem({tag:"div",className:"thing",id:`thing__price${r}`,inner:[n,i,a,o]});document.getElementById("dishesKitchens").append(l)}drawDishes(e){e.forEach(e=>{this.dishConstructor(e.url,e.name,e.price,e.id)})}toggleSortMenu(){const e=document.getElementById("sortMenu"),t=document.getElementById("dropdownContent");e.addEventListener("click",(function(){t.classList.toggle("isActiveSortMenu")}))}clearDishContainer(){const e=document.getElementById("container__dishesKitchens");document.getElementById("dishesKitchens").remove();const t=h.createElem({tag:"div",className:"dishesKitchens",id:"dishesKitchens"});e.append(t)}}var p=h,v={addToBasket(e,t){this.basketConstructor(e,t),this.countPriceSum(t)},order(){m.orderBtn.addEventListener("click",()=>{this.successOrder()})},successOrder(){m.basketList.style.visibility="hidden",m.basketList.style.transform="scale(0)",m.successForm.style.display="flex",m.successMsg.innerText="The operator will call you back within a minute",setTimeout(()=>{m.successForm.style.display="none",u.overlayOff()},2500)},countPriceSum(e){m.orderSum.innerText=void 0===m.summaryPrice?m.summaryPrice=e:m.summaryPrice+=e},clearOrder(){m.clearOrder.addEventListener("click",()=>{const e=document.getElementsByClassName("order");for(let t=e.length-1;t>=0;t--)e[t].remove();m.summaryPrice=void 0,m.orderSum.innerText=""})},basketConstructor(e,t){const s=p.createElem({tag:"span",className:"order__name"}),r=p.createElem({tag:"span",className:"order__price"}),n=p.createElem({tag:"span",className:"count__minus"}),i=p.createElem({tag:"span",className:"count__count"}),a=p.createElem({tag:"span",className:"count__plus"}),o=p.createElem({tag:"div",className:"count",inner:[n,i,a]});a.addEventListener("click",e=>{const s=e.target;let r=Number(s.previousSibling.innerText);r+=1,s.previousSibling.innerText=r,s.parentNode.nextSibling.innerText=Number(s.parentNode.nextSibling.textContent)+t,m.orderSum.innerText=Number(m.orderSum.innerText)+t}),n.addEventListener("click",e=>{const s=e.target;let r=Number(s.nextSibling.innerText);if(r>1){r-=1,s.nextSibling.innerText=r,s.parentNode.nextSibling.innerText=Number(s.parentNode.nextSibling.textContent)-t;let e=Number(m.orderSum.innerText)-t;m.orderSum.innerText=String(e)}}),i.innerText=1,s.innerText=e,r.innerText=t;const l=p.createElem({tag:"div",className:"order",inner:[s,o,r]});m.orderWrap.append(l)}};var E={pages:document.getElementsByClassName("page"),storage:null,daysOfWeek:["Понедельник","Вторник","Среда","Четверг","Пятница","Суббота","Воскресенье"],showMenuBtn:document.getElementById("menuByDays"),paginationHead:document.getElementById("paginationHeader"),recordsPerPage:4,paginationBlock:document.getElementById("pagination"),currentPageIndex:void 0},f={drawPaginationHeader(e,t){e.textContent=t},drawPages(e,t,s){const r=document.getElementById("pages"),n=Math.ceil(e.length/s);for(let e=0;e<n;e++){const s=p.createElem({tag:"a",className:"page"});s.textContent=`${e+1}`,r.append(s),e===t-1&&(E.currentPageIndex=e,s.classList.add("isActivePage")),t||6!==e||(E.currentPageIndex=e,s.classList.add("isActivePage"))}},recordConstructor(e,t){const s=p.createElem({tag:"span",className:"record__name"}),r=p.createElem({tag:"button",className:"record__button"}),n=p.createElem({tag:"span",className:"record__price"});return s.innerText=e,r.innerText="Заказать",r.addEventListener("click",e=>{let t=e.target.parentNode;const s=t.children[0].textContent,r=Number(t.children[2].textContent);v.addToBasket(s,r)}),n.innerText=t,p.createElem({tag:"div",className:"record",inner:[s,r,n]})},drawRecords(e){const t=document.getElementById("records");for(let s=0;s<e.length;s++)t.append(this.recordConstructor(e[s].name,e[s].price))},clearContainer(){document.getElementById("records").remove();const e=p.createElem({tag:"div",className:"pagination__records",id:"records"});document.getElementById("pagination").append(e)},clearPages(){document.getElementById("pages").remove();const e=p.createElem({tag:"div",className:"pagination__pages",id:"pages"});document.getElementById("pagination").append(e)}};const I=()=>{const e=()=>(new Date).getDay(),t=()=>e()?E.daysOfWeek[e()-1]:E.daysOfWeek[6],s=(e,t)=>e.filter(e=>e.day===`${t}`),r=()=>{const r=new XMLHttpRequest;r.open("GET","/menu",!0),r.send(),r.onreadystatechange=function(){4===this.readyState&&200===this.status&&(E.storage=JSON.parse(r.response),f.drawPages(E.storage,e(),E.recordsPerPage),f.drawPaginationHeader(E.paginationHead,t()),f.drawRecords(s(E.storage,t())),(e=>{for(let t=0;t<e.length;t++)e[t].addEventListener("click",r=>{f.clearContainer();const n=r.target,i=E.daysOfWeek[n.textContent-1];f.drawRecords(s(E.storage,i)),n.classList.toggle("isActivePage"),e[E.currentPageIndex].classList.toggle("isActivePage"),E.currentPageIndex=t,f.drawPaginationHeader(E.paginationHead,E.daysOfWeek[t])})})(E.pages))}};E.showMenuBtn.addEventListener("click",(function(){f.clearPages(),f.clearContainer(),r(),E.paginationBlock.style.display="flex"}))};var b=class{constructor(){this.dishesArr=[],this.filteredArr=[]}getDishesArr(){return this.dishesArr}getFilteredArr(){return this.filteredArr}setDishesArr(e){this.dishesArr=e}setFilteredArr(e){this.filteredArr=e}};var k=class{constructor(e,t){this.model=e,this.view=t}init(){const e=(e,t)=>{const s=e.filter(e=>e.type===t);return this.model.setFilteredArr(s),this.model.getFilteredArr()},t=t=>{const s=document.getElementsByClassName("menu__dishes");for(let r=0;r<s.length;r++)s[r].addEventListener("click",s=>{this.view.clearDishContainer();let r=s.target.getAttribute("id");"allDishes"===r?(this.view.drawDishes(t),this.model.setFilteredArr(this.model.getDishesArr())):this.view.drawDishes(e(t,r)),document.getElementById("dropbtn").style.display="block";const n=screen.height;window.scrollTo(0,n-150)})},s=(e,t)=>{this.view.clearDishContainer();const s=document.getElementById("dropbtn");switch(e){case"priceSort":this.view.drawDishes(this.model.getFilteredArr().sort((e,t)=>e.price-t.price)),s.innerText=t;break;case"priceSortReverse":this.view.drawDishes(this.model.getFilteredArr().sort((e,t)=>e.price-t.price).reverse()),s.innerText=t;break;case"alphaSort":this.view.drawDishes(this.model.getFilteredArr().sort((e,t)=>{const s=e.name.toUpperCase(),r=t.name.toUpperCase();return s<r?-1:s>r?1:void 0})),s.innerText=t;break;case"alphaSortReverse":this.view.drawDishes(this.model.getFilteredArr().sort((e,t)=>{const s=e.name.toUpperCase(),r=t.name.toUpperCase();return s<r?-1:s>r?1:void 0}).reverse()),s.innerText=t}};(()=>{const e=document.getElementsByClassName("sort");for(let t=0;t<e.length;t++)e[t].addEventListener("click",e=>{let t=e.target,r=t.getAttribute("id"),n=t.innerText;s(r,n)})})(),(()=>{const e=new XMLHttpRequest;e.open("GET","/dishes",!0),e.send(),e.onreadystatechange=()=>{4===e.readyState&&200===e.status&&(this.model.setDishesArr(JSON.parse(e.response)),t(this.model.getDishesArr()))}})(),this.view.toggleSortMenu()}};!function(){i(r.slideArray.length,r.blockForDots),a(n(r.slideArray),r.dotsArray),((e,t)=>{for(let s=0;s<e.length;s++)e[s].addEventListener("click",()=>{e[n(t)].classList.toggle("isActiveDot"),a(s,e),t[n(t)].classList.toggle("isActiveImg"),t[s].classList.toggle("isActiveImg")})})(r.dotsArray,r.slideArray),r.leftSliderSide.addEventListener("click",()=>{o(n(r.slideArray),r.slideArray,r.dotsArray)}),r.rightSliderSide.addEventListener("click",()=>{l(n(r.slideArray),r.slideArray,r.dotsArray)}),c.kitchenMenu.addEventListener("click",(function(e){e.stopPropagation(),d(c.kitchensList,c.dishesList,c.dishesArrow,c.kitchenArrow)})),c.dishesMenu.addEventListener("click",(function(e){e.stopPropagation(),d(c.dishesList,c.kitchensList,c.kitchenArrow,c.dishesArrow)})),u.openModal("delivery","deliver"),u.openModal("call","callback"),u.openModal("login","loginModal"),u.openModal("overBasket","basketList"),u.closeModal("deliver__close","deliver"),u.closeModal("callback__close","callback"),u.closeModal("loginModal__close","loginModal"),u.closeByOverlay(),u.callBack(),y.loginUser(),y.registerUser(),v.clearOrder(),v.order(),I();const e=new p,t=new b;new k(t,e).init()}()}]);