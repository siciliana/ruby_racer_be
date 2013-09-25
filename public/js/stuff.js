$(document).ready(function() {
  $('#winner_form').hide();
  $(document).bind("keyup",function(event){
    if (event.keyCode == 32) {
      var tdActive = $('#player1_strip > .active');
      tdActive.removeClass('active');
      if (tdActive.next().hasClass('end1!')) {
      $(document).unbind() 
        alert("Nelsol (my hero) wins!");
        var player_one_id = $('#player1_strip').attr("data-player-id");
        $('#winner').attr("data-winner-id", player_one_id);
        // sendWinner(tdActive);
        $('#winner_form').show();
      }
      tdActive.next().addClass('active')
}
    else if (event.keyCode == 13) {
      var tdActive2 = $('#player2_strip > .active');
      var player_two_id = $('player2_strip').attr("data-player-id");
      tdActive2.removeClass('active');
      if (tdActive2.next().hasClass('end2!')) {
        $(document).unbind()
        alert("Jake is pretty ok.");
        var winner="Jake"
        $('#winner').attr('data-winner-id') = player_one_id
        // sendWinner(tdActive2);
      }
      tdActive2.next().addClass('active')
    };

    $('form#winner_form').on('click', function(event){
      event.preventDefault();

      var url = $(this).attr('action');
      
      var p_id = $("#winner").attr('data-winner-id');
      
      console.log(p_id);
      $.post(url, {player_id: p_id}, function(response){
        console.log(response);
      })
    })

    // function sendWinner (player_id) {
    //   console.log(player_id);
    //   player_one_id = $('player1_strip').attr("data-player-id");
    // $.ajax({
    //     url: '/winner',
    //     type: 'POST',
    //     // dataType: 'default: Intelligent Guess (Other values: xml, json, script, or html)',
    //     data: {param1: 'player_id'},
    //   })
    //   .done(function(response) {
    //     console.log("success");
    //     console.log(response);
    //   })
    //   .fail(function() {
    //     console.log("error");
    //   })
    //   .always(function() {
    //     console.log("complete");
    //   });
      
    // }


  }); 


}); 
