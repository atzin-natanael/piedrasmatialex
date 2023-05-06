document.querySelectorAll('.articulos img').forEach(image =>{
    image.onclick = () =>  {
        document.querySelector('.popup-img').style.display = 'block';
        document.querySelector('.popup-img img').src = image.getAttribute('src');
    }
});
document.querySelectorAll('.mySwiper img').forEach(image =>{
    image.onclick = () =>  {
        document.querySelector('.popup-img').style.display = 'block';
        document.querySelector('.popup-img img').src = image.getAttribute('src');
    }
});
document.querySelector('.popup-img span').onclick = () => {
    document.querySelector('.popup-img').style.display = 'none'; 
}
document.querySelector('.contenedor .popup-img').onclick = () => {
    document.querySelector('.popup-img').style.display = 'none'; 
}

const nav = document.querySelector(".float");
  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY) {
      nav.classList.add("nav--hidden");
    } else {
      nav.classList.remove("nav--hidden");
    }

    lastScrollY = window.scrollY;
  });