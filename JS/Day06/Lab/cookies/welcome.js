
  let count = localStorage.getItem("visitCount");
  count = count ? parseInt(count) + 1 : 1;

 
  localStorage.setItem("visitCount", count);

 
  const urlParams = new URLSearchParams(window.location.search);
  const userName = urlParams.get("name") || "Guest";
  const gender = urlParams.get("gender");
  const color = urlParams.get("color");

 
  document.getElementById("welcome-msg").innerHTML = `
    Welcome <span style="color:${color}">${userName}</span>, 
    you have visited this site 
    <span style="color:${color}">${count}</span> times.
  `;

  
  const img = document.getElementById("gender-img");
  if (gender === "male") {
    img.src = "../1.jpg"; 
  } else if (gender === "female") {
    img.src = "../2.jpg"; 
  }

