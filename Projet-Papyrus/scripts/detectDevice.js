function redirectMobile() {
  if (window.screen.width < 768) {
    window.location.href = "mobile_instructions.html";
  }
}

window.onload = function() {
  redirectMobile();
};