document.querySelector("button").addEventListener("click", function () {
  const name = document.getElementById("name-input").value;
  const isMale = document.getElementById("male-check").checked;
  const isFemale = document.getElementById("female-check").checked;
  const color = document.querySelector("select").value;
  const age = document.getElementById("age-input").value.trim();


  const gender = isMale ? "male" : isFemale ? "female" : "";

  window.open(
    `welcome.html?name=${encodeURIComponent(name)}&gender=${gender}&color=${color}`,
    "_blank"
  );
});

