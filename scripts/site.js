import $ from "jquery";

$(document).ready(() => {
  activateMenuToggle();
});

const activateMenuToggle = () => {
  const menu = $("#pyn-nav");
  const toggle = $("#toggleMenu");
  toggle.click(() => menu.toggleClass("is-open"));
};
