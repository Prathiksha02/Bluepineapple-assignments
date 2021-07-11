var ShiftCipher = function (str, num) {
    // Wrap the amount
    if (num < 0) {
      return ShiftCipher(str, num + 26);
    }
  
    // Make an output variable
    var output = "";
  
    // Go through each character
    for (var i = 0; i < str.length; i++) {
      // Get the character we'll be appending
      var c = str[i];
  
      // If it's a letter...
      if (c.match(/[a-z]/i)) {
        // Get its code
        var code = str.charCodeAt(i);
  
        // Uppercase letters
        if (code >= 65 && code <= 90) {
          c = String.fromCharCode(((code - 65 + num) % 26) + 65);
        }
  
        // Lowercase letters
        else if (code >= 97 && code <= 122) {
          c = String.fromCharCode(((code - 97 + num) % 26) + 97);
        }
      }
  
      
      output += c;
    }
  
    
    return output;
  };

  console.log(ShiftCipher('Hello attack at dawn!', 12));