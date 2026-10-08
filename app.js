// Marlow & Main — progressive-enhancement pick filtering.
// With JavaScript off, all picks remain visible (filtering is a bonus only).
document.querySelectorAll(".filter-btn").forEach(function (btn) {
  btn.addEventListener("click", function () {
    var f = btn.getAttribute("data-filter");
    document.querySelectorAll(".filter-btn").forEach(function (b) {
      b.setAttribute("aria-pressed", b === btn ? "true" : "false");
    });
    document.querySelectorAll(".pick").forEach(function (card) {
      card.style.display = (f === "all" || card.getAttribute("data-aisle") === f) ? "" : "none";
    });
  });
});
