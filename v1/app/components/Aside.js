'use strict';
export default function Aside() {
  const d = document,
    $aside = d.createElement('aside'),
    $title = d.createElement('small'),
    $ads = d.createElement('div'),
    $gsuite = d.createElement('figure'),
    $hostgator = d.createElement('figure'),
    $ag = d.createElement('a'),
    $ah = d.createElement('a'),
    $ig = d.createElement('img'),
    $ih = d.createElement('img');
  $aside.classList.add('ads');
  $title.textContent = 'advertisements';
  $ag.setAttribute('target', '_blank');
  $ah.setAttribute('target', '_blank');
  $ag.setAttribute('rel', 'noopener noreferrer');
  $ah.setAttribute('rel', 'noopener noreferrer');
  $ag.setAttribute(
    'href',
    'https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.google.com%2Fappserve%2Fmkt%2Fp%2FAD-FnEyWvp1KZ9eghR27vsEhj50Eu7X9k3pnj1RkYsAfx5zTGFO93jZpYf_InBubeevhRh5wdM3VncW6jY1THpTAB9E5Imj05oKh7jUn&data=04%7C01%7C%7C79a6c2da0305458ec7b508d8a5c695ff%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C637441619621155707%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C1000&sdata=yMfWV2zIE2HbSABg3Vl8cKEzM5ZWoxh00JG4B8rwQk8%3D&reserved=0'
  );
  $ah.setAttribute('href', 'https://www.hostgator.la/2425-14-1-1464.html');
  $ig.setAttribute(
    'src',
    'http://services.google.com/fh/files/misc/digital_button_gsuite_es_419.jpg'
  );
  $ig.setAttribute('alt', 'Advertising G Suite');
  $ih.setAttribute(
    'src',
    'https://www.afiliadoshostgator.com/media/banners/es-web-hosting-desconto-300x250%202.png'
  );
  $ih.setAttribute('alt', 'Advertising HostGator');
  $ag.appendChild($ig);
  $ah.appendChild($ih);
  $gsuite.appendChild($ag);
  $hostgator.appendChild($ah);
  $ads.appendChild($gsuite);
  $ads.appendChild($hostgator);
  $aside.appendChild($title);
  $aside.appendChild($ads);
  return $aside;
}
