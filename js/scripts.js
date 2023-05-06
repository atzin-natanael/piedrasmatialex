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

/*
  window.onscroll = function() {
    var y = window.scrollY;
    console.log(y);
    if(y >= 8500){
        document.getElementsByClassName('.float').style.display = "none";
    }
  };
  */