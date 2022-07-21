$('.stars, .fa').click(function(){
    $(this).addClass('active')
    $(this).prevAll().addClass('active')
    4(this).nextAll().removeClass('active')

    var num= $(this).index()
    var starRate = num + 1
  //  $('.print').text(num)

  if(starRate == 1){
      $('.print').text('별로에요')
  }
  else if(starRate == 2){
      $('.print').text('보통')
  }
  else if(starRate==3){
      $('.print').text('그냥 그래요')
  }
  else if(starRate==4){
      $('.print').text('맘에 들어요')
  }
  else {
      $('.print').text('맘에 들어요')
  }
})