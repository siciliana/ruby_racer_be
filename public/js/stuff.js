$(document).ready(function() {
  $(document).bind("keyup",function(event){
    if (event.keyCode == 32) {
      var tdActive = $('#player1_strip > .active');
      tdActive.removeClass('active');
      tdActive.next().addClass('active')
      //when td last - .off
}
    else if (event.keyCode == 13) {
      var tdActive2 = $('#player2_strip > .active');
      tdActive2.removeClass('active');
      tdActive2.next().addClass('active')
      //when td last - .off
};
     

     });    
  }); 
