$(document).ready( function() {
  $(function() {
    $('#form').hide();
});
  
  $('#joindre').on('click', function(){
    $('#form').slideDown( 1000, function() {
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
        $('this.#input').css('background', '#daffb3');
      });

      $('input').blur( function(){
        $('#input').css('background', '#ffffff');
      });

      $('input').focus( function(){
        $('#input1').css('background', '#daffb3');
      });

      $('input').blur( function(){
        $('#input1').css('background', '#ffffff');
      });
    

      $('input').focus( function(){
        $('#input2').css('background', '#daffb3');
      });

      $('input').blur( function(){
        $('#input2').css('background', '#ffffff');
      });

      $('input').focus( function(){
        $('#input3').css('background', '#daffb3');
      });

      $('input').blur( function(){
        $('#input3').css('background', '#ffffff');
      });

      $('button').on('mouseenter', function(){
        $('#envoyer').css('background', '#33cc33');
      });
  
      $('button').on('mouseleave', function(){
        $('#envoyer').css('background', '#000000');
      });

    
});