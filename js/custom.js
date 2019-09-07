$(document).ready(function(){
  $('#play').click(function(){
      $('#slider').cycle('resume');
  });
  $('#pause').click(function(){
      $('#slider').cycle('pause');
  });
  $('#slider').cycle({
     fx: 'all',
     speed: 1000,
     timeout: 2000,
     prev: '#prev',
     next: '#next',
     pager: '#pager'
  });
  $('#pass').keyup(function(){
        length =$('#pass').val().length;
          if(length ==0){
          $('#checker').removeClass('weak');
          $('#checker').removeClass('good');
          $('#checker').removeClass('strong');
          $('#checker').text('');
      }
      else if(length <=4){
          $('#checker').addClass('weak');
          $('#checker').removeClass('good');
          $('#checker').removeClass('strong');
          $('#checker').text('weak');
      }
       else if(length <=8){
          $('#checker').addClass('good');
          $('#checker').removeClass('weak');
          $('#checker').removeClass('strong');
          $('#checker').text('good');
      }
       else if(length <=12){
          $('#checker').addClass('strong');
          $('#checker').removeClass('weak');
          $('#checker').removeClass('good');
          $('#checker').text('strong');
      }
  });
  
  $('tr:even').addClass('even');
      color =$('#colors').val();
      $('body').css('background', color);
  $('#colors').click(function(){
      color =$('#colors').val();
      $('body').css('background', color);
  });
  $('ul li').hover(function(){
      $(this).find('ul li').slideToggle(1000);
  });
  $('.menu a').mouseover(function(){
      $(this).animate({'width': '400px'},1000);
  });
  $('.menu a').mouseout(function(){
      $(this).animate({'width': '150px'},1000);
  });
    
});