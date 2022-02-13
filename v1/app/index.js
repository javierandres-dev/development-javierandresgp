'use strict';
import { App } from './App.js';
import { setTheme, changeTheme } from './helpers/handleTheme.js';
import handleMenu from './helpers/handleMenu.js';

window.onload = () => window.addEventListener('hashchange', App);

document.addEventListener('DOMContentLoaded', () => {
  App();
  eventListeners();
});

const eventListeners = () => {
  document.addEventListener('click', (e) => {
    if (e.target.id === 'btnTheme') {
      changeTheme();
    }
    if (e.target.id === 'btnMenu') {
      handleMenu();
    }
  });
};
setTheme();
