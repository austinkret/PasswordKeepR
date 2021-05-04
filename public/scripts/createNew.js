$(document).ready(function() {
  $(".create-credential").click(function() {
    $.get("createNew.html", function(data, status) {
      $("#create-new").html(data);
      $('.container').empty();
    });
  });
});
