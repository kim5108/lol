
    $('.testimonial-pic img').click(function(){

        $(this).addClass('active')
  
        $(this).siblings().removeClass('active')
  
  
  
         $('.testimonial .content').fadeOut() 
  
        $('#' + $(this).attr('data-alt')).fadeIn() 
  
  
      })
      