'use strict';
export default function handleMenu() {
  const $btn = document.getElementById('btnMenu'),
    $nav = document.querySelector('nav');
  if ($btn.checked) {
    $nav.classList.toggle('nv-active');
  } else {
    $nav.classList.toggle('nv-active');
  }
}
