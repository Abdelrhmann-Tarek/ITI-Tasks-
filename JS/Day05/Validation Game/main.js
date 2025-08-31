function validate() {
  var errors = [];
    var output = "";


  
  const name = document.getElementById("name").value.trim();
  if (name === "") {
    errors.push("Name is required.");
  }


  const email = document.getElementById("email").value.trim();
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    errors.push("Email is not valid.");
  }
  const password = document.getElementById("password").value;
  if (password.length < 8) {
    errors.push("Password must be at least 8 characters.");
  }

  const gender = document.querySelector('input[name="gender"]:checked');
  if (!gender) {
    errors.push("Please select your gender.");
  }

  const selectedSports = document.querySelectorAll('input[name="sports"]:checked');
  if (selectedSports.length < 2) {
    errors.push("Please select at least two sports.");
  }

  const country = document.getElementById("country").value;
  if (country === "") {
    errors.push("Please select your country.");
  }
 

  const errorBox = document.getElementById("errors");
  if (errors.length > 0) {
      for (var i = 0; i < errors.length; i++) {
        output += "<p>" + errors[i] + "</p>";
      }
      errorBox.innerHTML = output;
  } else {
    errorBox.innerHTML = "<p style='color:green'>Submitted:)</p>";
  }
}
