'use strict';
export default function Personal() {
  const spanish = navigator.language.startsWith('es'),
    d = document,
    $personal = d.createElement('section'),
    $title = d.createElement('h2'),
    $subtitle = d.createElement('h3'),
    $p1 = d.createElement('p'),
    $p2 = d.createElement('p');
  if (spanish) {
    $title.textContent = 'más ... ';
    $subtitle.textContent = '... acerca de Javier Andrés';
    $p1.textContent =
      'Nací en 1976 en la ciudad de Bogotá D.C., Colombia.  Soy hijo único, casado con una maravillosa mujer con la que tenemos tambien dos asombrosos hijos.';
    $p2.textContent =
      'Mi esposa es una mujer profesional, es docente, mi hijo mayor tambien es profesional, él es diseñador gráfico con enfasis en animación y mi hijo menor es estudiante de último año de secundaria.';
  } else {
    $title.textContent = 'more ... ';
    $subtitle.textContent = '... about Javier Andrés';
    $p1.textContent =
      "I was born in 1976 in the city of Bogotá D.C., Colombia. I'm an only child, married to a wonderful woman with whom I also have two awesome children.";
    $p2.textContent =
      'My wife is a professional woman, she is a teacher, my oldest son is also a professional, he is a graphic designer with emphasis on animation and my youngest son is in the last year of school.';
  }
  $personal.appendChild($title);
  $personal.appendChild($subtitle);
  $personal.appendChild($p1);
  $personal.appendChild($p2);
  return $personal;
}
