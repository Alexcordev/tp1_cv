$(document).ready( function() {
  $(function() {
    $('#main').hide();
});
  
  $('#joindre').on('click', function(){
    $('#main').slideDown( 1000, function() {
      $( this )
        .css( "border", "2px #0000ff inset" )
        
    });

      });
      $('#joindre').on('dblclick', function(){
        $('#main').slideUp( 1000, function() {
          $( this )
            .css( "border", "2px #0000ff inset" )
            $('#joindre').show();
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

      
$(window).bind("scroll", function(event) { // this checks if the scroll event is occurs
	    $("#progress:in-viewport").each(function() { // this is the selector for viewport. check the link above for more info
      $('#bar1').barfiller({barColor: "#33cc33", duration: 2000});
      $('#bar2').barfiller({barColor: "#ffa31a", duration: 2400});
      $('#bar3').barfiller({barColor: "#b8b894", duration: 2800});
      $('#bar4').barfiller({barColor: "#66e0ff", duration: 3200});
      $('#bar5').barfiller({barColor: "#ff5c33", duration: 3600});
      $('#bar6').barfiller({barColor: "#ffdb4d", duration: 4000});
      $('#bar7').barfiller({barColor: "#33cc33", duration: 4400});
    });  
});
});
  