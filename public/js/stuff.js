$(document).ready(function() {
  $(document).bind("keyup",function(event){
    if (event.keyCode == 32) {
      var tdActive = $('#player1_strip > .active');
      tdActive.removeClass('active');
      if (tdActive.next().hasClass('end1!')) {
              $(document).unbind() 
              alert("Player 1 wins!");
      }
      
      tdActive.next().addClass('active')
}
    else if (event.keyCode == 13) {
      var tdActive2 = $('#player2_strip > .active');
      tdActive2.removeClass('active');
      if (tdActive2.next().hasClass('end2!')) {
        $(document).unbind()
        alert("Player 2 wins!");
      } 

      tdActive2.next().addClass('active')
    };

  // $(document).unbind(isover, function(){
  //   var tdLast1=$('#end1')
  //   var tdLast2=$('#end2')
  //   if tdLast1
  //     alert("Player 1 wins!")
  //   else if tdLast2
  //     alert(" wins!")
  // }


  }); 


}); 
