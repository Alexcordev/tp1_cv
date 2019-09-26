$(document).ready( function() {
  $(function() {
    $('#main').hide();
});
  
  $('#joindre').on('click', function(){
    $('#main').slideDown( 1000, function() {
      $( this )
        .css( "border", "2px #0000ff inset" )
        $('#joindre').css('display', 'none');
    });

      });
  
      $('#joindre').on('dblclick', function(){
        $('#form').hide();
      });

      $('button').on('mouseenter', function(){
        $('#joindre').css('background', '#33cc33');
      });
  
      $('button').on('mouseleave', function(){
        $('#joindre').css('background', '#0000ff');
      });

      $('input').focus( function(){
        $('input#nom').css('background', '#daffb3');
      });

      $('input').blur( function(){
        $('input#nom').css('background', '#ffffff');
      });

      $('input').focus( function(){
        $('input#courriel').css('background', '#daffb3');
      });

      $('input').blur( function(){
        $('input#courriel').css('background', '#ffffff');
      });
    

      $('input').focus( function(){
        $('input#tel').css('background', '#daffb3');
      });

      $('input').blur( function(){
        $('input#tel').css('background', '#ffffff');
      });

      $('button').on('mouseenter', function(){
        $('#envoyer').css('background', '#33cc33');
      });
  
      $('button').on('mouseleave', function(){
        $('#envoyer').css('background', '#000000');
      });

      $('#form').submit(function(e){
        e.preventDefault();
        var nom = $('input#nom').val();
        alert("J'ai bien reçu votre message " + nom + " Merci !");
      });
});