//Show and Hide Menu navbar
function showMenu(){
  document.getElementById('NavMenu').style.display = "flex";
  document.getElementById('CerrarMenu').style.display = "inline";
  document.getElementById('Menu').style.display = "none";
}

function hideMenu(){
  document.getElementById('NavMenu').style.display = "none";
  document.getElementById('CerrarMenu').style.display = "none";
  document.getElementById('Menu').style.display = "inline";
}

//Show and Hide Modal Image
function showModal(n){

  var picture=document.getElementById('picture_modal');

  document.getElementById('modal_index').style.display = "flex";
  document.getElementById('nav_bar_movil').style.display = "none";
  document.getElementById('nav_bar_desktop').style.display = "none";
  document.getElementById('showcase').style.display = "none";
  document.getElementById('main_id').style.display = "none";
  document.getElementById('footer_id').style.display = "none";

  switch (n) {
    case 1:
    picture.src=document.getElementById('slide1').src;
    break;
    case 2:
    picture.src=document.getElementById('slide2').src;
    break;
    case 3:
    picture.src=document.getElementById('slide3').src;
    break;
    case 4:
    picture.src=document.getElementById('slide4').src;
    break;
    case 5:
    picture.src=document.getElementById('slide5').src;
    break;
    case 6:
    picture.src=document.getElementById('slide6').src;
    break;
  }
}

function hideModal(){
  document.getElementById('modal_index').style.display = "none";
  document.getElementById('nav_bar_movil').style.display = "flex";
  document.getElementById('nav_bar_desktop').style.display = "flex";
  document.getElementById('showcase').style.display = "flex";
  document.getElementById('main_id').style.display = "grid";
  document.getElementById('footer_id').style.display = "grid";
}

