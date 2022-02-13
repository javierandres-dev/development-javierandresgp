"use strict";
export default function Nav() {
  const spanish = navigator.language.startsWith("es"),
    d = document,
    $nav = d.createElement("nav"),
    $mList = d.createElement("ul"),
    $mItem0 = d.createElement("li"),
    $mItem1 = d.createElement("li"),
    $mItem2 = d.createElement("li"),
    $mItem3 = d.createElement("li"),
    $home = d.createElement("a"),
    $portfolio = d.createElement("a"),
    $about = d.createElement("a"),
    $contact = d.createElement("a");
  $nav.classList.add("navbar");
  $mList.setAttribute("id", "menuList");
  $mList.classList.add("navbar__menu-list");
  $home.setAttribute("href", "#top");
  $portfolio.setAttribute("href", "#portfolio");
  $about.setAttribute("href", "#about");
  $contact.setAttribute("href", "#contact");
  if (spanish) {
    $home.textContent = "inicio";
    $portfolio.textContent = "portafolio";
    $about.textContent = "acerca de";
    $contact.textContent = "contacto";
  } else {
    $home.textContent = "home";
    $portfolio.textContent = "portfolio";
    $about.textContent = "about";
    $contact.textContent = "contact";
  }
  $mItem0.appendChild($home);
  $mItem1.appendChild($portfolio);
  $mItem2.appendChild($about);
  $mItem3.appendChild($contact);
  $mList.appendChild($mItem0);
  $mList.appendChild($mItem1);
  $mList.appendChild($mItem2);
  $mList.appendChild($mItem3);
  $nav.appendChild($mList);
  return $nav;
}
