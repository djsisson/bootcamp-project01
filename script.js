document.querySelectorAll("li").forEach((item) => {
  item.addEventListener("click", (event) => {
    window.location.hash = item.getAttribute("jumpto");
    document.querySelector("li[active='true']").setAttribute("active", "false");
    item.setAttribute("active", "true");
  });
});

var allImages = document.getElementsByTagName("img");
for (element of allImages) {
  element.draggable = false;
}

window.addEventListener("resize", (event) => {
  scrollTo({
    top: document.getElementById(document.querySelector("li[active='true']").getAttribute("jumpto")).offsetTop,
    left: 0,
    behaviour: "instant",
  });
});


document.querySelectorAll(".icon").forEach((item) => {
  item.addEventListener("click", (event) => {
    document.querySelector(`.icon[region='${item.getAttribute("region")}'][active=true]`).setAttribute("active", "false");
    item.setAttribute("active", "true");
  })
})