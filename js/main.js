document.addEventListener("DOMContentLoaded", function () {
  new Splide(".news__slider", {
    type: "loop",
    perPage: 1,
    autoWidth: true,
    focus: "center",
    gap: "29rem",
    pagination: false,
  }).mount();
111
  new Splide(".projects__slider", {
    type: "loop",
    perPage: 1,
    autoWidth: true,
    focus: "center",
    gap: "20rem",
    pagination: false,
  }).mount();

  let offerItems = document.querySelectorAll(".tab__list .list__item a");

  offerItems.forEach((e) => {
    e.addEventListener("click", (e) => {
      e.preventDefault();
      let targetTab = document.querySelector(e.target.hash);
      let parentDivName =
        "." + e.target.hash.substr(1, e.target.hash.indexOf("-") - 1);
      let activeTab = document.querySelector(
        parentDivName + " .slides .active"
      );
      activeTab.classList.remove("active");
      targetTab.classList.toggle("active");
    });
  });
});
