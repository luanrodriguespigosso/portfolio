const bntMobile = document.getElementById("styles_btnMobile");

function toggleMenu(event) {
  if (event.type === "touchstart") event.preventDefault();
  const navigation = document.getElementById("navigation");
  navigation.classList.toggle("active");
  const active = navigation.classList.contains("active");
  event.currentTarget.setAttribute("aria-expanded", active);

  if (active) {
    event.currentTarget.setAttribute("aria-label", "Fechar menu");
  } else {
    event.currentTarget.setAttribute("aria-label", "Abrir menu");
  }
}
bntMobile.addEventListener("click", toggleMenu);
bntMobile.addEventListener("touchstart", toggleMenu);
