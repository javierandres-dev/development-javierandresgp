'use strict';
export default function Portfolio() {
  const spanish = navigator.language.startsWith('es'),
    d = document,
    $portfolio = d.createElement('section'),
    $title = d.createElement('h2'),
    $subtitle = d.createElement('h3'),
    $a = d.createElement('a'),
    $figure = d.createElement('figure'),
    $figcaption = d.createElement('figcaption'),
    $img = d.createElement('img');
  $portfolio.classList.add('portfolio');
  $img.setAttribute('src', './app/images/github.png');
  $figcaption.textContent = 'GitHub';
  if (spanish) {
    $title.textContent = 'portafolio';
    $subtitle.textContent = 'proyectos';
  } else {
    $title.textContent = 'portfolio';
    $subtitle.textContent = 'projects';
  }
  $a.setAttribute('target', '_blank');
  $a.setAttribute('rel', 'noopener noreferrer');
  $a.setAttribute('href', 'https://github.com/javierandresgp/');
  $figure.appendChild($img);
  $figure.appendChild($figcaption);
  $a.appendChild($figure);
  $portfolio.appendChild($title);
  $portfolio.appendChild($subtitle);
  $portfolio.appendChild($a);
  return $portfolio;
}
