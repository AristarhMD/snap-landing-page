const navBtn = document.querySelector(".menu");
const navBtnClose = document.querySelector(".close-menu");
const subMenus = document.querySelectorAll(".submenu");
const featureContextEl = document.querySelector(".feature-context");
const companyContextEl = document.querySelector(".company-context ");
const allHiddenEl = document.querySelectorAll(".hidden");

navBtn?.addEventListener("click", () => {
  toggleHidden();
});

navBtnClose?.addEventListener("click", () => {
  toggleHidden();
});

function toggleHidden() {
  for (const el of allHiddenEl) {
    el.classList.toggle("hidden");
  }
}

for (const subMenu of subMenus) {
  subMenu.addEventListener("click", () => {
    //   If was clicked feature div
    if (subMenu.querySelector(".feature-context")) {
      let arrowEl = subMenu.querySelector("#arrow-feature");

      // Toggle visible class fot the company div
      !companyContextEl.classList.contains("not-visible")
        ? companyContextEl.classList.toggle("not-visible")
        : null;

      // Toggle visible class fot the feature div
      featureContextEl.classList.toggle("not-visible");

      // Change of the img
      featureContextEl.classList.contains("not-visible")
        ? (arrowEl.src = "images/icon-arrow-down.svg")
        : (arrowEl.src = "images/icon-arrow-up.svg");
    } else {
      //   If was clicked company div
      let arrowEl = subMenu.querySelector("#arrow-company");

      // Toggle visible class fot the feature div
      !featureContextEl.classList.contains("not-visible")
        ? featureContextEl.classList.toggle("not-visible")
        : null;

      // Toggle visible class fot the company div
      companyContextEl.classList.toggle("not-visible");

      // Change of the img
      companyContextEl.classList.contains("not-visible")
        ? (arrowEl.src = "images/icon-arrow-down.svg")
        : (arrowEl.src = "images/icon-arrow-up.svg");
    }
  });
}
