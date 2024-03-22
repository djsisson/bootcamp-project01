document.querySelectorAll("li").forEach((item) => {
  item.addEventListener("click", (event) => {
    window.location.hash = item.getAttribute("jumpto");
    document.querySelectorAll("li").forEach((listitem) => {
        listitem.setAttribute("active","false");
    });
    item.setAttribute("active","true");
  });
});
