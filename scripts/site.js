import mPageScroll2id from "page-scroll-to-id";

$(document).ready(() => {
  activateMenuToggle();
  activateOneScroll();
});

const activateMenuToggle = () => {
  const menu = $("#pyn-nav");
  const toggle = $("#toggleMenu");
  toggle.click(() => menu.toggleClass("is-open"));
};

const activateOneScroll = () => {
  $(".navbar a[href*='#']").mPageScroll2id({
    offset: 80
  });
};
