// The list of videos URLs
const furls = [
    'https://www.youtube.com/embed/YPSIu_xeByM',
    'https://www.youtube.com/embed/NE6aVGnBDYs',
    'https://www.youtube.com/embed/YftrcDpgplk',
    'https://www.youtube.com/embed/kEnaUtbEcKE',
  ];
  const pWords = [ "Tomato Garden", "Underpass Garden", "Garden", "Flowers", "Box Garden", "Bunny Bush", "Plants", "Potted Plant", "Garden Overview", "Nets over garden",
  ];
  
  // The index (serial number) of the current image
  let s = 0;
  
  // Grab handles onto HTML elements.
  const fpreviousButton = document.getElementById('fprevious-button');
  const fnextButton = document.getElementById('fnext-button');
  const fvideo = document.getElementById('fvideo');
  const pText = document.getElementById('pWords');

  function fadvance(delta) {
    s = (s + delta + furls.length) % furls.length;
    fvideo.src = furls[s];
  
  }
  
  let t = 0;
  function cambridge(delta) {
    t = (t + delta + pWords.length) % pWords.length;
    pText.innerHTML = pWords[t];
  }

  fpreviousButton.addEventListener('click', () => fadvance(-1));
  fnextButton.addEventListener('click', () => fadvance(1));

  fpreviousButton.addEventListener('click', () => cambridge(-1));
  fnextButton.addEventListener('click', () => cambridge(1));
  

  fadvance(0);
  cambridge(0);