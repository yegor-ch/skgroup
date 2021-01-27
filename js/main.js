document.addEventListener("DOMContentLoaded", function () {
  new Splide(".news__slider", {
    type: "loop",
    perPage: 1,
    autoWidth: true,
    focus: "center",
    gap: "29rem",
    pagination: false,
  }).mount();

  new Splide(".projects__slider", {
    type: "loop",
    perPage: 1,
    autoWidth: true,
    focus: "center",
    gap: "20rem",
    pagination: false,
  }).mount();
});
