$(document).ready(function(){
  $('.slick-carrousel').slick({
      centerMode: true,
      centerPadding: '40px',
      slidesToShow: 1,
      prevArrow: '.flechaIzq',
      nextArrow: '.flechaDer',
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: '25px',
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: '15px',
          }
        }
      ]
  });  
});


document.getElementById('BotonSubscribirse').addEventListener('click', function() {
  var correo = document.getElementById('correoInput').value;

  if (correo.trim() !== '') {
    Swal.fire({
      title: 'Subscripción exitosa',
      text: 'Registrado con éxito con el correo: ' + correo,
      icon: 'success',
      confirmButtonText: 'OK'
    });

    document.getElementById('correoInput').value = '';
  } else {
    Swal.fire({
      title: 'Error',
      text: 'Por favor, ingresa tu correo antes de subscribirte.',
      icon: 'error',
      confirmButtonText: 'OK'
    });
  }
});

var estiloHTML = document.documentElement.style;
var tuerca = document.querySelector('.tuerca');
var menuFlotante = document.getElementById('menuFlotante');
var botonNormal = document.getElementById('btnNormal');
var botonGrande = document.getElementById('btnGrande');


function toggleMenuFlotante() {
  menuFlotante.classList.toggle('mostrar');
  if (menuFlotante.classList.contains('mostrar')) {
    tuerca.style.transform = 'scale(1.3)';
    tuerca.style.color = '#530030';
    tuerca.style.rotate = '180deg';
  } else {
    tuerca.style.transform = 'scale(1)';
    tuerca.style.color = '#FFFFFF';
    tuerca.style.rotate = '-180deg';
  }
};

function defTamanoTextoNormal(){
  estiloHTML.setProperty('--indiceZoom', '1.5');
  botonNormal.classList.remove('seleccionado');
  botonGrande.classList.remove('seleccionado');

  botonNormal.classList.toggle('seleccionado');
};

function defTamanoTextoGrande(){
  estiloHTML.setProperty('--indiceZoom', '1.0');
  botonNormal.classList.remove('seleccionado');
  botonGrande.classList.remove('seleccionado');

  botonGrande.classList.toggle('seleccionado');
};


$(window).scroll( function(){
  var topWindow = $(window).scrollTop();
  var topWindow = topWindow * 1.5;
  var windowHeight = $(window).height();
  var position = topWindow / windowHeight;
  position =  1 - position;
  $('.arrow-wrap').css('opacity', position);

});



document.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
    var arrowWrap = document.querySelector('.arrow-wrap');
    if (arrowWrap) {
      arrowWrap.style.display = 'block';
    }
  }, 4000); 
});