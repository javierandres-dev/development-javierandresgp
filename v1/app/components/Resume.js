'use strict';
export default function Resume() {
  const spanish = navigator.language.startsWith('es'),
    $resume = document.createElement('section');
  $resume.classList.add('resume');
  $resume.innerHTML = null;
  if (spanish) {
    $resume.innerHTML = `
    `;
  } else {
    $resume.innerHTML = `
      <header class='resume--header'>
        <h1>javier andrés garzón patarroyo</h1>
        <h2>software developer</h2>
      </header>
      <div class='resume--dark'>
        <figure>
          <img src='./app/images/photo.jpg' alt='software developer' />
          <figcaption>javier andrés</figcaption>
        </figure>
        <section>
          <h3>contact</h3>
          <p><span class="material-icons">phone_iphone</span> +57 300 560 0756</p>
          <p><span class="material-icons">web</span> https://www.javierandresgp.com</p>
          <p><ion-icon name="logo-linkedin"></ion-icon> /in/javierandresgp</p>
          <p><ion-icon name="logo-twitter"></ion-icon> @javierandresgp0</p>
          <p><span class="material-icons">email</span> info@javierandresgp.com</p>
        </section>
        <section class='ref'>
          <h3><span class="material-icons">school</span> education</h3>
          <h4>Holberton School</h4>
          <h5>Software Academy</h5>
          <h6>Sep 2019 to present</h6>
          <p>Participanting the forming program of Full Stack Web Developer.</p>
        </section>
        <section class='ref'>
          <h3><span class="material-icons">groups</span> references</h3>
          <h4>Nicolaz Pérez</h4>
          <h5>Holberton School</h5>
          <h6>Software Engineer and Education Lead.</h6>
          <p>nicolaz.perez@holbertonschool.com</p>
          <h4>Jhoan Zamora Caicedo</h4>
          <h5>Holberton School</h5>
          <h6>Software Engineer and Educational Staff.</h6>
          <p>1206@holbertonschool.com</p>
          <h4>Juan Guillermo Velázquez</h4>
          <h5>TEAM Computer</h5>
          <h6>Owner.</h6>
          <p>gerencia@teamcomputer.co</p>
        </section>
      </div>
      <div class='resume--light'>
      <section>
        <h3>about me</h3>
        <p>I'm an autodidact software programmer.</p>
        <p>In 1994 I obtained my first formal job in the company 'Team Computer', there I learned to assemble computers and install software.</p>
        <p>In 2002 I decided to work independently marketing software and hardware and giving technical support to my clients, I did so until 2019.</p>
        <p>In September 2019, I decided to quit my job to focus on achieving two of my big dreams, learning to Code and learning English.</p>
        <p>In 2019 I joined to the school of computer science and software development 'Holberton School' to the foundation program and I currently dedicate all my time to  study the specialization in Full-Stack Web Development and to train myself as a software engineer to obtain my first formal job as programmer.</p>
        <p>During this time I have developed some projects using different programming languages like 'C', 'Python', 'SQL' and by my own with 'Java'.</p>
        <p>What I'm looking for is to be a Back-End programmer. Day by day I work hard to get it.</p>
      </section>
      <section class='ref'>
        <h3>work experience</h3>
        <h4><span class="material-icons">business</span> Holberton School</h4>
        <h5>software developer</h5>
        <h6>Sep 2019 to present</h6>
        <p>About two years experience in Back-End and Front-End projects.</p>
        <h4><span class="material-icons">business</span> Autónomo / Independiente</h4>
        <h5>Businessman / Technical support</h5>
        <h6>Jan 2002 - Sep 2019 (17 years 9 months)</h6>
        <p>Trade of hardware, software and general technology.</p>
        <p>Technical support to companies and customers.</p>
        <h4><span class="material-icons">business</span> TEAM Computer</h4>
        <h5>Technical support leader</h5>
        <h6>Jan 1994 - Dec 2001 (8 years)</h6>
        <p>Technical support leader.</p>
        <p>Computer assemble, software instalation, servers, networks and mainteinance.</p>
      </section>
      <section class='ref'>
        <h3>skills</h3>
        <p>HTML   •   CSS   •   JavaScript   •   Node   •   React   •   Git   •   GitHub   •   SCRUM</p>
      </section>
      </div>
    `;
  }
  return $resume;
}
