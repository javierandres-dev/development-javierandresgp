'use strict';
export default function Header() {
  const d = document,
    $header = d.createElement('header'),
    $figure = d.createElement('figure'),
    $figcaption = d.createElement('figcaption'),
    $avatar = d.createElement('img'),
    $home = d.createElement('a'),
    $toggle = d.createElement('div');
  $header.classList.add('header');
  $avatar.setAttribute('src', './app/images/avatar.png');
  $avatar.setAttribute('alt', 'Avatar Javier Andrés GP');
  $figcaption.textContent = 'Javier Andrés GP';
  $home.setAttribute('href', 'https://www.javierandresgp.com');
  $home.classList.add('brand');
  $toggle.classList.add('btn-theme');
  $toggle.innerHTML = `
<input type="checkbox" class="btn-theme__cb" id="btnTheme">
<label class="btn-theme__label" for="btnTheme">
  <div class="btn-theme__inner"></div>
  <div class="btn-theme__switch"></div>
</label>
  `;
  $home.appendChild($avatar);
  $home.appendChild($figcaption);
  $figure.appendChild($home);
  $header.appendChild($figure);
  $header.appendChild($toggle);
  return $header;
}
