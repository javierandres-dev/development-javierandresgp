'use strict';
import { allTexts } from './translations.js';

const lang = window.navigator.language,
  d = window.document;

let texts = null,
  theme = 'light',
  oppositeTheme = 'dark';

lang.startsWith('es') ? (texts = allTexts.es) : (texts = allTexts.en);

const $body = d.querySelector('body'),
  $footer = d.querySelector('footer'),
  $btnLang = d.getElementById('btnLang'),
  $btnTheme = d.getElementById('btnTheme'),
  $profession = d.getElementById('profession'),
  $greet = d.getElementById('greet'),
  $i = d.getElementById('i'),
  $aboutMe = d.getElementById('aboutMe'),
  $me = d.getElementById('me'),
  $copyright = d.getElementById('copyright');

d.addEventListener('DOMContentLoaded', () => {
  setContents();
  eventListeners();
});

const toggleTheme = () => {
  theme === 'light'
    ? ((theme = 'dark'), (oppositeTheme = 'light'))
    : ((theme = 'light'), (oppositeTheme = 'dark'));
  $btnTheme.textContent = theme === 'light' ? '🌙' : '☀️';
  $body.classList.toggle('dark');
  $footer.classList.toggle('dark');
};

const toggleLang = () => {
  texts.lang === 'es' ? (texts = allTexts.en) : (texts = allTexts.es);
  setContents();
};

const eventListeners = () => {
  $btnLang.addEventListener('click', toggleLang);
  $btnTheme.addEventListener('click', toggleTheme);
};

function setContents() {
  let html = '';
  const last = texts.me.length - 1;
  texts.me.forEach((item, i) => {
    if (i === last) html += `<p class='details-last'>${item}</p>`;
    else html += `<p>${item}</p>`;
  });

  $btnLang.innerHTML = `<img src="./img/flag-${texts.oppositeLang}.png" alt="flag" class='btn-flag'>`;
  $btnTheme.textContent = theme === 'light' ? '🌙' : '☀️';
  $profession.textContent = texts.profession;
  $greet.textContent = texts.greet;
  $i.textContent = texts.i;
  $aboutMe.textContent = texts.aboutMe;
  $me.innerHTML = html;
  $copyright.textContent = texts.copyright;
}
