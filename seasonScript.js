// The list of image URLs
const furls = [
    'https://resize.hswstatic.com/u_0/w_480/gif/redefinefourseasons-1.jpg',
    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/sauteed-crispy-zucchini-1573763095.jpg?crop=0.697xw:1.00xh;0.187xw,0&resize=480:*',
    'https://post.healthline.com/wp-content/uploads/2020/01/parsley-herb-732x549-thumbnail.jpg',
    'https://ucarecdn.com/459eb7be-115a-4d85-b1d8-deaabc94c643/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
    'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/grow-tomatoes-700-350-bc4e017.jpg?quality=90&resize=960,872',
  ];
  const pWords = ["Seasons", "1. Summer", "2. Autumn", "3. Winter", "4. Spring"];
  const des = ["We will discuss the seasons and how they affect plants.",
      "During the summertime, rain is not very common, this means planting seeds that will not need much water is best. There are many different plants that don't need much water the best choices I think are tomatoes, zucchini and capsicum as they can grow pretty easily", 
  "Autumn is one of the easiest seasons to plant in as it's usually not too extreme in either temperature direction and get a good amount of rain. That being said certain plants do benefit more in this season like herbs. Herbs I would recommend are parsley, oregano, chives and coriander.",
  "Winter is definitely the hardest time to plant anything because of the temperatures. This being said there are a few plants that can withstand and still grow in very cold environments. The plants that I am refering to are artichoke, carrots, lettuce, onions and radishes.",
  "Spring is by far the best planting season there is. Some of the best herbs grow now including basil, dill, mint and parsely. You can get fruits and vegetables to grow aswell these include snow peas, spinach, tomatoes, and celery.",
   ];
  // The index (serial number) of the current image
  let s = 0;
  
  // Grab handles onto HTML elements.
  const fpreviousButton = document.getElementById('fprevious-button');
  const fnextButton = document.getElementById('fnext-button');
  const fphoto = document.getElementById('fphoto');
  const pText = document.getElementById('pWords');
  const pDes = document.getElementById('descr');

  function fadvance(delta) {
    s = (s + delta + furls.length) % furls.length;
    fphoto.src = furls[s];
  }
  
  let t = 0;
  function cambridge(delta) {
    t = (t + delta + pWords.length) % pWords.length;
    pText.innerHTML = pWords[t];
  }

  let k = 0;
  function description(delta) {
    k = (k + delta + des.length) % des.length;
    pDes.innerHTML = des[k];
  }

  fpreviousButton.addEventListener('click', () => fadvance(-1));
  fnextButton.addEventListener('click', () => fadvance(1));

  fpreviousButton.addEventListener('click', () => cambridge(-1));
  fnextButton.addEventListener('click', () => cambridge(1));
  
  fpreviousButton.addEventListener('click', () => description(-1));
  fnextButton.addEventListener('click', () => description(1));

  fadvance(0);
  cambridge(0);
  description(0);