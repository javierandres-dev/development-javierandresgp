'use strict';
export default function About() {
  const spanish = navigator.language.startsWith('es'),
    d = document,
    $about = d.createElement('section'),
    $title = d.createElement('h2'),
    $subtitle = d.createElement('h3'),
    $p1 = d.createElement('p'),
    $p2 = d.createElement('p'),
    $p3 = d.createElement('p'),
    $p4 = d.createElement('p'),
    $p5 = d.createElement('p'),
    $p6 = d.createElement('p'),
    $p7 = d.createElement('p'),
    $p8 = d.createElement('p'),
    $a1 = d.createElement('a'),
    $a2 = d.createElement('a');
  $a1.setAttribute(
    'href',
    'https://drive.google.com/file/d/1y9kxQgPUKHTrjrKkbQ9Y8iWytnzqqkji/view?usp=sharing'
  );
  $a1.setAttribute('_blank', 'noopener noreferrer');
  $a2.setAttribute('href', '#/personal');
  $subtitle.textContent = '. . .';
  if (spanish) {
    $title.textContent = 'Acerca de Javier Andrés';
    $p1.textContent = 'Soy un programador de software autodidacta.';
    $p2.textContent =
      "En 1994 Obtuve mi primer trabajo formal en la empresa 'Team Computer', ahí aprendí a ensamblar computadores y a instalar software.";
    $p3.textContent =
      'En 2002 decidí trabajar de manera independiente comercializando software, hardware y brindando soporte técnico a mis clientes, lo hice hasta 2019.';
    $p4.textContent =
      'En septiembre de 2019, decidí dejar mi trabajo y enfocarme en conseguir dos de mis grandes sueños, aprender a hacer software y aprender inglés.';
    $p5.textContent =
      " En 2019 me uní a la escuela de ciencias de la computación y desarrollo de software 'Holberton School' e inicié el programa de fundamentos, actualmente dedico todo mi tiempo a realizar la especialización que estoy cursando en 'Desarrollo Web Full-Stack' y aprendiendo por cuenta propia todo lo necesario para obtener mi primer empleo formal como programador de software.";
    $p6.textContent =
      "Durante este tiempo he desarrollado algunos proyectos usando diferentes lenguajes como 'C', 'Python', 'SQL' y por mi cuenta con 'Java'.";
    $p7.textContent =
      'Mi propósito es llegar a ser programador Back-End. Día a día trabajo por conseguirlo.';
    $a1.textContent = 'Curriculum';
    $p8.appendChild($a1);
    $a2.textContent = ' Mi vida personal ... ';
  } else {
    $title.textContent = 'About Javier Andrés';
    $p1.textContent = "I'm an autodidact software programmer.";
    $p2.textContent =
      "In 1994 I obtained my first formal job in the company 'Team Computer', there I learned to assemble computers and install software.";
    $p3.textContent =
      'In 2002 I decided to work independently marketing software and hardware and giving technical support to my clients, I did so until 2019.';
    $p4.textContent =
      'In September 2019, I decided to quit my job to focus on achieving two of my big dreams, learning to Code and learning English.';
    $p5.textContent =
      "In 2019 I joined to the school of computer science and software development 'Holberton School' to the foundation program and I currently dedicate all my time to  study the specialization in Full-Stack Web Development and to train myself as a software engineer to obtain my first formal job as programmer.";
    $p6.textContent =
      "During this time I have developed some projects using different programming languages like 'C', 'Python', 'SQL' and by my own with 'Java'.";
    $p7.textContent =
      "What I'm looking for is to be a Back-End programmer. Day by day I work hard to get it.";
    $a1.textContent = 'Curriculum';
    $p8.appendChild($a1);
    $a2.textContent = ' My personal life ... ';
  }
  $about.appendChild($title);
  $about.appendChild($subtitle);
  $about.appendChild($p1);
  $about.appendChild($p2);
  $about.appendChild($p3);
  $about.appendChild($p4);
  $about.appendChild($p5);
  $about.appendChild($p6);
  $about.appendChild($p7);
  $about.appendChild($p8);
  $about.appendChild($a2);
  return $about;
}
