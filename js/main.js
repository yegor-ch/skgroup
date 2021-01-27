document.addEventListener("DOMContentLoaded", function () {
  new Splide(".splide", {
    type: "loop",
    perPage: 1,
    autoWidth: true,
    focus: "center",
    gap: "29rem",
    pagination: false,
  }).mount();
});
