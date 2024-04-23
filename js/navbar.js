// navbar.js
window.addEventListener('DOMContentLoaded', function() {
    var navbarPlaceholder = document.getElementById('navbar-placeholder');
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '../views/modulos/navbar.html', true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        navbarPlaceholder.innerHTML = xhr.responseText;
      }
    };
    xhr.send();
  });