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
    if (subMenu.querySelector(".feature-context")) {
      !companyContextEl.classList.contains("not-visible")
        ? companyContextEl.classList.toggle("not-visible")
        : null;
      featureContextEl.classList.toggle("not-visible");
    } else {
      !featureContextEl.classList.contains("not-visible")
        ? featureContextEl.classList.toggle("not-visible")
        : null;
      companyContextEl.classList.toggle("not-visible");
    }
  });
}

// featureContextEl.addEventListener("click", () => {});
