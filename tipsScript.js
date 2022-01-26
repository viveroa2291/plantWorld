// The list of image URLs
const furls = [
    'https://www.almanac.com/sites/default/files/styles/opengraph/public/image_nodes/strawberries-1.jpg?itok=M8pE1nQz',
    'https://i.pinimg.com/originals/1f/cf/f6/1fcff678a4354a73d147192dd33e78d6.jpg',
    'https://lh3.googleusercontent.com/proxy/zX-1QezV-27iVMYqn7TpKqg_bi7a4n2QnGHv1kxW94Gh6H1jQ_-AHSpuuUI2t5Fk_03lnfEvX6PuMSzzP4pXIB5nRkyb4wUS-wGHzS8A4q3i-P7R9xJo77sKk5QP-srpKRaxKwkdH7pOzqq5XY3m0FXC82cjioUe0oRG2ak7zp0RCp-Ajx8GXA',
    'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F37%2F2020%2F02%2Fhoneyberry-1.jpg',
    'https://www.gardeningknowhow.com/wp-content/uploads/2009/03/blackberries1-1024x812.jpg',
    'https://www.isons.com/wp-content/uploads/2016/10/apples-on-branch.jpg',
    'https://sites.google.com/site/knowyourfruit/_/rsrc/1284673498916/know-your-gooseberry/how-to-grow-gooseberries/Gooseberry%2007.jpg',
    'https://cdn.britannica.com/37/82537-050-B0AC543A/figs-fig-tree.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg0b8PF_9RK46bgaTbAYo956nMLjK3ytLMow&usqp=CAU',
    'https://www.extension.iastate.edu/news/files/eo-news/images/raspberrybush_0.jpg',
    'https://i.pinimg.com/originals/c6/3a/bb/c63abb9fbce921e4e4da3a454eda3972.jpg',
  ];
  const pWords = [ "1. Organic is your friend", "2. Don't grow too much", "3. Self-seeding plants are great", "4. Know when to harvest", "5. Herbs are great", "6. Don't be afraid to fail", "7. Test your soil", "8. Map it out", "9. Get some gear", "10. Start small",
  ];
  const des = ["Growing your fruits and vegetables without pesticides is the way to go! The only people who should are big plantations that need to make a large quantity output. Organic is more quality than quantity.", 
  "If you aren't selling your garden products you really want to limit how much you grow. This is because produce goes bad pretty fast so only grow as much as you think you can eat!",
  "This tip is more for the lazy planters out there or people with too much time to garden. You can get plants that literally plant themselves and all you have to do is clean it up a bit to get a good harvest.",
  "Make sure you know in advance when to harvest your crops. This is very important as knowning the best time to harvest leads to better quality and quantity of the harvest.",
   "If you think you don't have the money to start gardening you could be wrong. Herbs not only make most things taste great but also are the most cost effective thing to plant. ",
   "Failing is a part of the process. If you think of a great idea try it out! A lot of people usually like to play it safe with plants because they take a long time to grow but experimenting is where the fun is.",
   "This is how you try and avoid step 6 if at all possible. Testing your soil first to see if it's any good will lead to far less failures.",
   "Make sure you think about your garden layout before just throwing seeds in the ground. Remember to visualize the finished products and how much room they'll need.",
   "Invest into gear early can lead to great results. It gets you used to using them and leads to a better product. Not only that but it also helps save you time while farming.",
   "Don't start out with a large scale garden, this can lead to disaster. As seen before it is easy to fail in the beginning to limiting how much you waste is key.",
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