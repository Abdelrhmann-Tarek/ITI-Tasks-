
//i did the functions bu didn't link them with main.js 

function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var d = new Date();
    d.setTime(d.getTime());
    expires = "; expires=" + d.toUTCString();
  }
  document.cookie = name + "=" + value + expires + "; path=/";
}

function getCookie(name) {
  var cname = name + "=";
  var parts = document.cookie.split(";");
  for (var i = 0; i < parts.length; i++) {
    var c = parts[i].trim();
    if (c.indexOf(cname) === 0) {
      return c.substring(cname.length);
    }
  }
  return "";
}

function deleteCookie(name) {
  document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

function allCookieList() {
  return document.cookie;
}

function hasCookie(name) {
  return getCookie(name) !== "";
}