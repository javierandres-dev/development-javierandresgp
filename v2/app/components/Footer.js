"use strict";
export default function Footer() {
  const spanish = navigator.language.startsWith("es"),
    d = document,
    $footer = d.createElement("footer"),
    $text = d.createElement("p"),
    $contact = d.createElement("p"),
    $copy = d.createElement("small");
  $contact.innerHTML = `📱 +57 300 560 0756 &nbsp; 📭 info&nbsp;&#64;&nbsp;javierandresgp.com`;
  $footer.classList.add("footer");
  $contact.setAttribute("id", "contact");
  if (spanish) {
    $text.textContent = "Encontró un error o tiene una idea? Contácteme.";
    $copy.textContent =
      "Copyright © 2021 Javier Andrés Garzón Patarroyo. Todos los derechos reservados.";
  } else {
    $text.textContent = "Found a bug or have an idea? Contact me.";
    $copy.textContent =
      "Copyright © 2021 Javier Andrés Garzón Patarroyo. All rights reserved.";
  }
  $footer.appendChild($text);
  $footer.appendChild($contact);
  $footer.appendChild($copy);
  return $footer;
}
