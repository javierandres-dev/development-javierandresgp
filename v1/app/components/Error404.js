'use strict';
export default function Error404() {
  const spanish = navigator.language.startsWith('es'),
    d = document,
    $error = d.createElement('div'),
    $title = d.createElement('h2'),
    $subtitle = d.createElement('h3'),
    $text = d.createElement('p');
  $error.classList.add('error');
  $title.textContent = 'Error';
  $subtitle.textContent = '404';
  if (spanish) {
    $text.textContent = 'Página no encontrada.';
  } else {
    $text.textContent = 'Page not found.';
  }
  $error.appendChild($title);
  $error.appendChild($subtitle);
  $error.appendChild($text);
  return $error;
}
