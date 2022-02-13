"use strict";
export default function Main() {
  const spanish = navigator.language.startsWith("es"),
    d = document,
    $main = document.createElement("main"),
    //
    $home = d.createElement("section"),
    $figureHome = d.createElement("figure"),
    $imgHome = d.createElement("img"),
    $figcaptionHome = d.createElement("figcaption"),
    $titleHome = d.createElement("h2"),
    $introHome = d.createElement("p"),
    //
    $portfolio = d.createElement("section"),
    $titlePortfolio = d.createElement("h3"),
    $aPortfolio = d.createElement("a"),
    $figurePortfolio = d.createElement("figure"),
    $figcaptionPortfolio = d.createElement("figcaption"),
    $imgPortfolio = d.createElement("img"),
    //
    $about = d.createElement("section"),
    $titleAbout = d.createElement("h3"),
    $p1About = d.createElement("p"),
    $p2About = d.createElement("p"),
    $p3About = d.createElement("p"),
    $p4About = d.createElement("p"),
    $p5About = d.createElement("p"),
    $p6About = d.createElement("p"),
    $p7About = d.createElement("p"),
    $p8About = d.createElement("p"),
    $a1About = d.createElement("a"),
    $a2About = d.createElement("a");
  //
  $main.setAttribute("role", "main");
  $main.classList.add("container");
  //
  $home.classList.add("home");
  $imgHome.setAttribute("src", "./app/images/photo.jpg");
  $imgHome.setAttribute("alt", "software developer");
  $figcaptionHome.textContent = "Javier Andrés";
  //
  $portfolio.classList.add("portfolio");
  $portfolio.setAttribute("id", "portfolio");
  $imgPortfolio.setAttribute("src", "./app/images/github.png");
  $figcaptionPortfolio.textContent = "GitHub";
  //
  $about.classList.add("about");
  $about.setAttribute("id", "about");
  $a1About.setAttribute("target", "_blank");
  $a1About.setAttribute("rel", "noopener noreferrer");
  if (spanish) {
    //
    $titleHome.textContent = "desarrollador de software";
    $introHome.textContent =
      "Hola, Soy Javier Andrés, Soy un desarrollador de software orientado al desarrollo web, mi especialidad es JavaScript.";
    //
    $titlePortfolio.textContent = "portafolio | proyectos";
    //
    $titleAbout.textContent = "Acerca de mí";
    $p1About.textContent = "Soy un programador de software autodidacta.";
    $p2About.textContent =
      "En 1994 Obtuve mi primer trabajo formal en la empresa 'Team Computer', ahí aprendí a ensamblar computadores y a instalar software.";
    $p3About.textContent =
      "En 2002 decidí trabajar de manera independiente comercializando software, hardware y brindando soporte técnico a mis clientes, lo hice hasta 2019.";
    $p4About.textContent =
      "En 2019, decidí dejar mi trabajo y toda actividad para enfocarme en aprender desarrollo de software.";
    $p5About.textContent =
      "En Septiembre de 2019 me uní a la escuela de ciencias de la computación y desarrollo de software 'Holberton School' e inicié el programa 'Fundamentos de Software' el cual completé en Junio de 2020, enseguida inicié la especialización en 'Desarrollo Web Full-Stack' la cual completé en Mayo de 2021.";
    $p6About.textContent =
      "En Abril de 2021 obtuve mi primer empleo como desarrollador de software.";
    $p7About.textContent =
      "Durante este tiempo he integrado equipos de desarrollo de software y colaborado en proyectos usando diferentes lenguajes como 'C', 'Python', 'SQL', 'Java', y 'JavaScript'; haciendo uso de tecnologías como 'Git', 'Docker', 'ReactJS', 'NodeJS', 'TypeScript',  entre otras";
    $a1About.textContent = "Currículum";
    $a1About.setAttribute("href", "#");
    $a1About.setAttribute(
      "onclick",
      "window.open('https://drive.google.com/file/d/1dvd9SxrS71EfgF7-ThZLc-3ftFMTa5Rd/view?usp=sharing', '_blank', 'fullscreen=yes'); return false;"
    );
    $p8About.appendChild($a1About);
  } else {
    //
    $titleHome.textContent = "software developer";
    $introHome.textContent =
      "Hello, I'm Javier Andrés, I'm a software developer oriented to web development, focus on JavaScript.";
    //
    $titlePortfolio.textContent = "portfolio | projects";
    //
    $titleAbout.textContent = "About me";
    $p1About.textContent = "I'm an autodidact software programmer.";
    $p2About.textContent =
      "In 1994 I obtained my first formal job in the company 'Team Computer', there I learned to assemble computers and install software.";
    $p3About.textContent =
      "In 2002 I decided to work independently marketing software and hardware and giving technical support to my clients, I did it until 2019.";
    $p4About.textContent =
      "In September 2019, I decided to quit my job to focus on learning to code.";
    $p5About.textContent =
      "In 2019 I joined to the school of computer science and software development 'Holberton School' I started the 'Software Foundations' program which I completed on June 2020, then I started the specialization in 'Full-Stack Web Development' that I finished on May 2021.";
    $p6About.textContent =
      "In April of 2021 I got my first job as software developer.";
    $p7About.textContent =
      "During this time I have been part of some software development teams and I have collaborated on projects using different languages like 'C', 'Python', 'SQL', 'Java' and 'JavaScript'; Using technologies like 'Git', 'Docker', 'ReactJS', 'NodeJS', 'TypeScript',  among others.";
    $a1About.textContent = "Curriculum";
    $a1About.setAttribute("href", "#");
    $a1About.setAttribute(
      "onclick",
      "window.open('https://drive.google.com/file/d/1sPp1JuZk04rRj94KG0VYjeZevZ42fdZD/view?usp=sharing', '_blank', 'fullscreen=yes'); return false;"
    );
    $p8About.appendChild($a1About);
  }
  //
  $figureHome.appendChild($imgHome);
  $figureHome.appendChild($figcaptionHome);
  $home.appendChild($figureHome);
  $home.appendChild($titleHome);
  $home.appendChild($introHome);
  //
  $aPortfolio.setAttribute("target", "_blank");
  $aPortfolio.setAttribute("rel", "noopener noreferrer");
  $aPortfolio.setAttribute("href", "https://github.com/javierandresgp/");
  $figurePortfolio.appendChild($imgPortfolio);
  $figurePortfolio.appendChild($figcaptionPortfolio);
  $aPortfolio.appendChild($figurePortfolio);
  $portfolio.appendChild($titlePortfolio);
  $portfolio.appendChild($aPortfolio);
  //
  $about.appendChild($titleAbout);
  $about.appendChild($p1About);
  $about.appendChild($p2About);
  $about.appendChild($p3About);
  $about.appendChild($p4About);
  $about.appendChild($p5About);
  $about.appendChild($p6About);
  $about.appendChild($p7About);
  $about.appendChild($p8About);
  $about.appendChild($a2About);
  //
  $main.appendChild($home);
  $main.appendChild($portfolio);
  $main.appendChild($about);
  return $main;
}
