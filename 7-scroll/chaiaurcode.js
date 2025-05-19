window.onscroll = function () {
  updateScrollIndicator();
};

function updateScrollIndicator() {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (scrollTop / scrollHeight) * 100;
  document.querySelector(".scroll-indicator").style.width = scrolled + "%";
}
