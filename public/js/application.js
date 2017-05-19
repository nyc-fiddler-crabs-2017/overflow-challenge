$(document).ready(function() {
  $("#new-comment").on("click", function(event){
    event.preventDefault();
    var $commentLink = $(this)

    var $link = $(this).attr('href');

    $.ajax({
      method: 'get',
      url: $link
    }).done(function(response){

      $($commentLink).hide()
      $($commentLink).closest("#comment-section").html(response)
    })

  })

});
