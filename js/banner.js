// banner.js
window.addEventListener('DOMContentLoaded', function() {
    var bannerPlaceholder = document.getElementById('banner-placeholder');
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '../views/modulos/banner.html', true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        bannerPlaceholder.innerHTML = xhr.responseText;
      }
    };
    xhr.send();
  });