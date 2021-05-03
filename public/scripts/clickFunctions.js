$(document).ready(function() {
  $(".create-credential").click(function() {
    $.get("createNewPassword.html", function(data, status) {
      $('.container').empty();
      $("#main").html(data);
    });
  });

  $("#edit").click(function() {
    $.get("upDatePassword.html", function(data, status) {
      $('.container').empty();
      $("#main").html(data);
    });
  });

  $("#myPasswordsButton").click(function() {
    $.get("queryCredentials.html", function(data, status) {
      $('.container').empty();
      $("#main").html(data);
    });
  });

  $("#socialMediaButton").click(function() {
    $.get("queryCredentials.html", function(data, status) {
      $('.container').empty();
      $("#main").html(data);
    });
  });

  $("#workButton").click(function() {
    $.get("queryCredentials.html", function(data, status) {
      $('.container').empty();
      $("#main").html(data);
    });
  });

  $("#entertainmentButton").click(function() {
    $.get("queryCredentials.html", function(data, status) {
      $('.container').empty();
      $("#main").html(data);
    });
  });

  $("#myOrganizationButton").click(function() {
    $.get("queryCredentials.html", function(data, status) {
      $('.container').empty();
      $("#main").html(data);
    });
  });

});
