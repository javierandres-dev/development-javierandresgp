'use strict';
const d = window.document,
  lang = window.navigator.language,
  res = await fetch('../json/index.json'),
  allTexts = await res.json(),
  $body = d.querySelector('body'),
  $footer = d.querySelector('footer'),
  $btnLang = d.getElementById('btnLang'),
  $btnTheme = d.getElementById('btnTheme'),
  $title = d.getElementById('title'),
  $subtitle = d.getElementById('subtitle'),
  $copyright = d.getElementById('copyright');

let texts = null,
  theme = 'light',
  oppositeTheme = 'dark';

lang.startsWith('es') ? (texts = allTexts.es) : (texts = allTexts.en);

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

function setContents() {
  $btnLang.innerHTML = `<img src="./img/flag-${texts.oppositeLang}.png" alt="flag" class='btn-flag'>`;
  $btnTheme.textContent = theme === 'light' ? '🌙' : '☀️';
  $title.textContent = texts.notes.title;
  $subtitle.textContent = texts.notes.subtitle;
  $copyright.textContent = texts.copyright;
}

(() => {
  $btnLang.addEventListener('click', toggleLang);
  $btnTheme.addEventListener('click', toggleTheme);
  setContents();
})();
