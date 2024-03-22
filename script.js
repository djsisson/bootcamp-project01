document.querySelectorAll("li").forEach((item) => {
  item.addEventListener("click", (event) => {
    window.location.hash = item.getAttribute("jumpto");
  });
});
