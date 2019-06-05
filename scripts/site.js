
$(document).ready(() => {
  $("#pyn-nav").click(handleCloseMenu)
  activateMenuToggle();
});

const activateMenuToggle = () => {
  const menu = $("#pyn-nav");
  const toggle = $("#toggleMenu");
  toggle.click(() => menu.toggleClass("is-open"));
};

const handleCloseMenu = (event) => {
  event.currentTarget.classList.remove("is-open")
}

