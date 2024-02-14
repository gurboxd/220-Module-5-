function validatePassword() {
    var password = document.getElementById("password").value;
    var messages = [];
    var errorElement = document.getElementById("error-messages");

    if (password.length < 8) {
      messages.push("Password must be at least 8 characters long.");
    }

    if (!password.match(/[A-Z]/)) {
      messages.push("Password must contain at least one upper case letter.");
    }
    
    if (!password.match(/[a-z]/)) {
      messages.push("Password must contain at least one lower case letter.");
    }
    
    if (!password.match(/\d/)) {
      messages.push("Password must contain at least one number.");
    }

    if (messages.length > 0) {

      errorElement.innerHTML = messages.join('<br>');
    } else {
      errorElement.innerHTML = "Password is acceptable.";
    }
    return false;
  }