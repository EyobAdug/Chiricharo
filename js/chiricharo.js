const searchContainer = document.querySelector('.search-container');
const searchInput = document.querySelector('#search-input');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        searchContainer.style.top = '10px';
        searchInput.style.width = '500px';
    } else {
        searchContainer.style.top = '450px';
        searchInput.style.width = '600px';
    }
});

const opencartPopupButton = document.getElementById("open-cartpopup");
      const closecartPopupButton = document.getElementById("close-cartpopup");
      const cartpopup = document.getElementById("cartpopup");

      opencartPopupButton.addEventListener("click", () => {
        cartpopup.style.display = "block";
      });

      closecartPopupButton.addEventListener("click", () => {
        cartpopup.style.display = "none";
      });

      const openhamburgerPopupButton = document.getElementById("open-hamburgerpopup");
      const closehamburgerPopupButton = document.getElementById("close-hamburgerpopup");
      const hamburgerpopup = document.getElementById("hamburgerpopup");

      openhamburgerPopupButton.addEventListener("click", () => {
        hamburgerpopup.style.display = "block";
      });

      closehamburgerPopupButton.addEventListener("click", () => {
        hamburgerpopup.style.display = "none";
      });


function changeBg(){
  var header = document.getElementById('header');
  var scrollValue = window.scrollY;
  if(scrollValue < 100){
    header.classList.remove('fixed');
    header.classList.add('relative');
      header.classList.remove('bgcolor');
    } else{
      header.classList.remove('relative');
    header.classList.add('fixed');
      header.classList.add('bgcolor');
    }
}
window.addEventListener('scroll', changeBg);

const  industrylistcontainer= document.querySelector(".industry-list-container");
const nextslicklist = document.querySelector(".next-slick-list");
const arrowBtns = document.querySelectorAll(".industry-list-container i");
const firstcardWidth = nextslicklist.querySelector(".items-list").offsetWidth;
const nextslicklistChildrens = [...nextslicklist.children];

let isDragging = false, startX, startScrollLeft, timeoutId;
let cardPerView = Math.round(nextslicklist.offsetWidth / firstcardWidth);


nextslicklistChildrens.slice(-cardPerView).reverse().forEach(card  => {
  nextslicklist.insertAdjacentHTML("afterbegin", card.outerHTML);
});

nextslicklistChildrens.slice(0, cardPerView).forEach(card  =>  {
  nextslicklist.insertAdjacentHTML("beforeend", card.outerHTML);
});

arrowBtns.forEach (btn => {
  btn.addEventListener("click", () => {
    nextslicklist.scrollLeft += btn.id === "left" ? -firstcardWidth : firstcardWidth;
  })
})


const dragstart = (e) => {
  isDragging = true;
  nextslicklist.classList.add("dragging");
  startX = e.pageX;
  startScrollLeft = nextslicklist.scrollLeft;
}


const dragging = (e) => {
  if(!isDragging) return;
  nextslicklist.scrollLeft = startScrollLeft - (e.pageX - startX);
}
const dragstop = () => {
  isDragging = false;
  nextslicklist.classList.remove("dragging");
}

const autoPlay = () => {
  if(window.innerWidth < 800) return;
  timeoutId = setTimeout(() => nextslicklist.scrollLeft += firstcardWidth, 2500);
}

autoPlay();

const infiniteScroll = () => {
  if(nextslicklist.scrollLeft === 0){
    nextslicklist.classList.add("no-transition");
    nextslicklist.scrollLeft = nextslicklist.scrollWidth - (2 * nextslicklist.offsetWidth);
    nextslicklist.classList.remove("no-transition");
  } else if(Math.ceil(nextslicklist.scrollLeft) === nextslicklist.scrollWidth - nextslicklist.offsetWidth){
    nextslicklist.classList.add("no-transition");
    nextslicklist.scrollLeft = nextslicklist.offsetWidth;
    nextslicklist.classList.remove("no-transition");
  }

  clearTimeout(timeoutId);
  if(!industrylistcontainer.matches(":hover")) autoPlay();
}

nextslicklist.addEventListener("mousedown",dragstart); 
nextslicklist.addEventListener("mousemove",dragging); 
document.addEventListener("mouseup",dragstop); 
nextslicklist.addEventListener("scroll",infiniteScroll); 
industrylistcontainer.addEventListener("mouseenter", () => clearTimeout(timeoutId)); 
industrylistcontainer.addEventListener("mouseleave", autoPlay); 

