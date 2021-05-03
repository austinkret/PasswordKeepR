$(document).ready(function() {

  const generateRandomString = (option) => {

    let possibleChar = '';

    if(!option.upperCase && !option.lowerCase && !option.specialChar) {
      possibleChar += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*_-+=|;<,>.?/"
    }

    if(option.upperCase) {
      possibleChar += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }

    if (option.lowerCase) {
      possibleChar += "abcdefghijklmnopqrstuvwxyz"
      console.log(possibleChar)
    }

    if (option.specialChar) {
      possibleChar += "!@#$%^&*_-+=|;<,>.?/"
    }

    if(!option.charLength) {
      option.charLength = 15;
    }

    console.log('final possibleChar', possibleChar);
    let randomString = '';
    for (let i = 0; i < option.charLength; i++) {
      randomString += possibleChar.charAt(Math.floor(Math.random() * possibleChar.length));
    }
    return $('.generate').append(randomString);
  };



$("#generateForm").on("submit", function(event) {
  event.preventDefault();
  $('.generate').empty();
  console.log("submitting form")

  // character length
  const charLength = Number($('#charLength').val());
  console.log("character Length", charLength);
  console.log("charlength type", typeof charLength)

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

})

});
