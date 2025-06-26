document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".hero-btn");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const heroName = button.dataset.name;
      window.location.href = `heroInfo.html?name=${encodeURIComponent(heroName)}`;
    });
  });
});