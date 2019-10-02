$(document).ready(function () {
  $(function () {
    $('#main').hide();
    $('#social').hide();
  });

  //Lorsqu'il y a un clic sur le bouton avec #joindre l'animation .slideDown est déclenchée et le formulaire de contact s'affiche

  $('#joindre').on('click', function () {
    $('#main').slideDown(1000, function () {
      $(this)
        .css("border", "2px #0000ff inset")

    });


  });

  //Le formulaire de contact se referme lors d'un clic sur le même bouton

  $('#joindre').on('dblclick', function () {
    $('#main').slideUp(1000, function () {
      $(this)
        .css("border", "2px #0000ff inset")
      $('#joindre').show();
    });

  });


  $('#joindre').on('dblclick', function () {
    $('#form').hide();
  });

  //Les logos des réseaux sociaux s'affichent avec un fade in lors d'un clic sur le bouton avec #suivre. Ensuite le bouton est caché

  $('#suivre').on('click', function () {
    $('#social').fadeIn(1000, function () {
      $(this)
        .css("margin", "auto")
      $('#suivre').hide();
    });
  });

  $('button').on('mouseenter', function () {
    $(this).css('background', '#ff9900');
  });

  $('button').on('mouseleave', function () {
    $(this).css('background', '#33cc33');
  });

  $('a').on('mouseover', function () {
    $(this).css('background', '#ff9900');
  });

  $('a').on('mouseleave', function () {
    $(this).css('background', '#33cc33');
  });

  $('input').focus(function () {
    $(this).css('background', '#daffb3');
  });

  $('input').blur(function () {
    $(this).css('background', '#ffffff');
  });
  $('textarea').focus(function () {
    $(this).css('background', '#daffb3');
  });

  $('textarea').blur(function () {
    $(this).css('background', '#ffffff');
  });

  // Lorsque l'évènement submit est déclenché une alerte qui contient les données de l'input nom est affichée 

  $('#form').submit(function (e) {
    e.preventDefault();
    var nom = $('input#nom').val();
    alert("J'ai bien reçu votre message " + nom + " Merci !");
  });

  // Vérifier si l'évènement défilement de la page est en cours

  $(window).bind("scroll", function (event) {

    //Utilisation du plugin bar filler (jquery) pour faire une animation des progress bars dans la section compétences

    // Le sélecteur #progress pour le viewport

    $("#progress:in-viewport").each(function () {
      $('#bar1').barfiller({
        barColor: "#33cc33",
        duration: 2000
      });
      $('#bar2').barfiller({
        barColor: "#ffa31a",
        duration: 2400
      });
      $('#bar3').barfiller({
        barColor: "#b8b894",
        duration: 2800
      });
      $('#bar4').barfiller({
        barColor: "#66e0ff",
        duration: 3200
      });
      $('#bar5').barfiller({
        barColor: "#ff5c33",
        duration: 3600
      });
      $('#bar6').barfiller({
        barColor: "#ffdb4d",
        duration: 4000
      });
      $('#bar7').barfiller({
        barColor: "#33cc33",
        duration: 4400
      });
    });
  });
});