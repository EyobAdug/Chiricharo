const searchContainer = document.querySelector('.search-container');
const searchInput = document.querySelector('#search-input');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        searchContainer.style.top = '15px';
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