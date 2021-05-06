$(document).ready(function() {

  const generateRandomString = (option) => {

    let possibleChar = '';

    if (!option.upperCase && !option.lowerCase && !option.specialChar) {
      possibleChar += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*_-+=|;,.?/";
    }

    if (option.upperCase) {
      possibleChar += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    if (option.lowerCase) {
      possibleChar += "abcdefghijklmnopqrstuvwxyz";
    }

    if (option.specialChar) {
      possibleChar += "!@#$%^&*_-+=|;,.?/";
    }

    if (!option.charLength) {
      option.charLength = 15;
    }

    console.log('final possibleChar', possibleChar);
    let randomString = '';
    for (let i = 0; i < option.charLength; i++) {
      randomString += possibleChar.charAt(Math.floor(Math.random() * possibleChar.length));
    }
    return $('#newPassword').append(randomString);
  };

  // $("#generate").on("click", function(event) {
  //   console.log("Here in the generate.......");
  // });

  $("#generateForm").on("submit", function(event) {
    console.log("above prevent default");
    event.preventDefault();
    $('#newPassword').empty();
    console.log("submitting form");

    // character length
    const charLength = Number($('#charLength').val());
    console.log("character Length", charLength);
    console.log("charlength type", typeof charLength);

    // uppercase
    const upperCase = $('#upperCase').is(":checked");
    console.log("upperCase variable-----", upperCase);
    // lowercase
    const lowerCase = $('#lowerCase').is(":checked");
    console.log("lowerCase variable-----", lowerCase);
    // special characters
    const specialChar = $('#specialChar').is(":checked");
    console.log("special char checked?---------", specialChar);

    const option = {
      upperCase: upperCase,
      lowerCase: lowerCase,
      specialChar: specialChar,
      charLength: charLength
    };

    generateRandomString(option);

  });

});
