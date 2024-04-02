document.querySelectorAll("li").forEach((item) => {
  item.addEventListener("click", (event) => {
    let sectiontoupdate = item.getAttribute("jumpto");
    let updateimg = document.getElementById(sectiontoupdate);
    let updatedstring = sectiontoupdate
      .slice(0, sectiontoupdate.length - 8)
      .toLowerCase();
    updateimg.style.backgroundImage = (`url('./assets/backgrounds/${updatedstring}.webp')`);
    window.location.hash = sectiontoupdate;
    document.querySelector("li[active='true']").setAttribute("active", "false");
    item.setAttribute("active", "true");
  });
});

let allImages = document.getElementsByTagName("img");
for (element of allImages) {
  element.draggable = false;
}

window.addEventListener("resize", (event) => {
  scrollTo({
    top: document.getElementById(
      document.querySelector("li[active='true']").getAttribute("jumpto")
    ).offsetTop,
    left: 0,
    behaviour: "instant",
  });
});

document.querySelectorAll(".icon").forEach((item) => {
  item.addEventListener("click", (event) => {
    const region = item.getAttribute("region");
    const portrait = "./assets/characterportrait/";
    const charname = item.getAttribute("char");
    const elementpath = "./assets/element/element_";
    const element = item.getAttribute("element");
    document
      .querySelector(`.icon[region='${region}'][active=true]`)
      .setAttribute("active", "false");
    document
      .getElementById(`${region}-image`)
      .setAttribute("src", `${portrait}${charname}_profile.png`);
    document
      .getElementById(`${region}-element`)
      .setAttribute("src", `${elementpath}${element}.svg`);

    document.querySelector(`div[id = '${region}-profile'] > h2`).textContent =
      item.getAttribute("alt");

    let profiletext = document.querySelector(
      `div[id = '${region}-profile'] > div`
    );
    profiletext.innerHTML = document.getElementById(
      `${charname}-profile`
    ).innerHTML;
    profiletext.scrollTo(0, 0);

    item.setAttribute("active", "true");
  });
});

document.getElementById("darkmode").addEventListener("click", function (event) {
  document.querySelectorAll(".dropdown-content > div").forEach((item) => {
    item.classList.toggle("dark-mode");
  });
});
