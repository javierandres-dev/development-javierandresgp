'use strict';
const d = window.document,
  lang = window.navigator.language,
  res = await fetch('../json/index.json'),
  allTexts = await res.json(),
  $body = d.querySelector('body'),
  $footer = d.querySelector('footer'),
  $btnLang = d.getElementById('btnLang'),
  $btnTheme = d.getElementById('btnTheme'),
  $profession = d.getElementById('profession'),
  $greet = d.getElementById('greet'),
  $i = d.getElementById('i'),
  $aboutMe = d.getElementById('aboutMe'),
  $me = d.getElementById('me'),
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
setContents();

(() => {
  $btnLang.addEventListener('click', toggleLang);
  $btnTheme.addEventListener('click', toggleTheme);
})();
