
$(document).ready(function(){ 

    $('.btn1').click(function(){ 
        $('.image1').css("marginLeft", "20");
    });

    $('.btn2').click(function(){ 
      $('.image1').css("marginLeft", "0%");
  });

  $('.btn3').click(function(){ 
    $('.image1').css("marginLeft", "-20%");
});
$('.btn4').click(function(){ 
  $('.image1').css("marginLeft", "-40%");
});
$('.btn5').click(function(){ 
  $('.image1').css("marginLeft", "-60%");
});
$('.btn6').click(function(){ 
  $('.image1').css("marginLeft", "-100%");
});

});


const array = [23, 4, 49, 59, 70];

const morethanthirthy = array.filter((item) =>{
    return item > 30;
})

console.log(morethanthirthy);


