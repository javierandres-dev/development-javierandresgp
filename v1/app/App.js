'use strict';
import Header from './components/Header.js';
import BtnMenu from './components/BtnMenu.js';
import Nav from './components/Nav.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';
import Router from './components/Router.js';

export function App() {
  const $body = document.querySelector('body'),
    $heading = document.createElement('h1');
  $heading.textContent = 'Javier Andrés Garzón Patarroyo';
  $heading.classList.add('d-none');
  $body.classList.add('light-mode');
  $body.setAttribute('data-theme', '');
  $body.innerHTML = null;
  $body.appendChild($heading);
  $body.appendChild(Header());
  $body.appendChild(BtnMenu());
  $body.appendChild(Nav());
  $body.appendChild(Main());
  $body.appendChild(Footer());
  Router();
}
