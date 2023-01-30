// cookie popup

var cookiePopup = document.querySelector('.cookie-popup');
var cookiePopupAcceptBtn = cookiePopup.querySelector('button');

cookiePopupAcceptBtn.addEventListener('click', function() {
  cookiePopup.style.display = 'none';
  document.cookie = "cookiePopupAccepted=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
});

if (!document.cookie.includes("cookiePopupAccepted")) {
  cookiePopup.style.display = 'block';
}
