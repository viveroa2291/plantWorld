// The list of image URLs
const furls = [
    'https://www.almanac.com/sites/default/files/styles/opengraph/public/image_nodes/strawberries-1.jpg?itok=M8pE1nQz',
    'https://i.guim.co.uk/img/media/3ee854fa68ba1893765e76153e5db12c7f9b570a/0_1194_3213_1928/master/3213.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=c10ff1b85a5b8dd5304619f3b5f7b0b5',
    'https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/09/goji-berry-berries-1296x728-header.jpg?w=1155&h=1680',
    'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F37%2F2020%2F02%2Fhoneyberry-1.jpg',
    'https://www.gardeningknowhow.com/wp-content/uploads/2009/03/blackberries1-1024x812.jpg',
    'https://www.isons.com/wp-content/uploads/2016/10/apples-on-branch.jpg',
    'https://sites.google.com/site/knowyourfruit/_/rsrc/1284673498916/know-your-gooseberry/how-to-grow-gooseberries/Gooseberry%2007.jpg',
    'https://cdn.britannica.com/37/82537-050-B0AC543A/figs-fig-tree.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg0b8PF_9RK46bgaTbAYo956nMLjK3ytLMow&usqp=CAU',
    'https://www.extension.iastate.edu/news/files/eo-news/images/raspberrybush_0.jpg',
    'https://i.pinimg.com/originals/c6/3a/bb/c63abb9fbce921e4e4da3a454eda3972.jpg',
  ];
  const pWords = [ "Introduction", "Currants", "Goji Berries", "Honey Berries", "Black Berries", "Apples", "Goose Berries", "Figs", "Blueberries", "Raspberries", "Strawberries",
  ];
  const des = ["Click through to find out the top plants for beginners.", 
  "Red, black, and white currants are all perfect for desserts and other sweet things like jams. Great for growing in containers.",
  "These berries are rich in nutrients and have a sweet flavor. These take the 2nd spot for there ability to grow in almost any place that has sun light access",
  "Honey berries are very tough plants so it's hard to mess them up. Not only that but they also taste wonderful!",
   "These, much like the others on the list, need little attendence to get going. You can plant them onto wires to make harvesting even easier!",
   "This is for the more ambitious gardener. Full size tree growing can be a lot harder but provides great yield for many years.",
   "These little guys are great for there versatility. Depending on the time they are harvested they can make savoury souces or even be ingredients for cakes.",
   "These grow best when there roots are restricted. This means that you can turn a more restricted gardening area into an advatage!",
   "These are perfect for growing in containers. Container growing is amazing for anyone with little to no back yeard space.",
   "These amazing plants self plant themselves. All you have to do is maintain them by shearing the canes to ground level each year.",
   "To round out this list we have a classic. These are simply picked for how iconic they are and how tasty they can be home grown.",
   ];
   const buyNow = [ 
       'https://www.amazon.com/',
       'https://www.amazon.com/Organically-Seeds-Heavy-Yielding-Indeterminate-Open-Pollinated/dp/B01MUF7P0E/ref=sr_1_4?dchild=1&keywords=currant+seeds&qid=1607848929&sr=8-4',
       'https://www.amazon.com/Anna-Sarah-Organic-Berries-Resealable/dp/B01GSLKSQK/ref=sr_1_13?dchild=1&keywords=goji+berries&qid=1607848779&sr=8-13',
       'https://www.ebay.com/itm/Honeyberry-Honeysuckle-Lonicera-caerulea-x-10-seeds-/131773314231',
       'https://www.amazon.com/BLACKBERRY-Seeds-Blackberries-Nutrients-Sweet/dp/B01D7JZO8S',
       'https://www.amazon.com/CORTLAND-APPLE-TREE-Year-Feet/dp/B016N6UW48/ref=sr_1_1_sspa?dchild=1&keywords=apple+seeds&qid=1607849088&s=lawn-garden&sr=1-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExV1ZEQ05KODBaSUJUJmVuY3J5cHRlZElkPUEwNjUzNTMyMVdKSzhURVoxSk9NQyZlbmNyeXB0ZWRBZElkPUEwOTU1MjQ3MzUwUFJWUE5GWEkzRCZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=',
       'https://www.amazon.com/Golden-Berries-Natural-Gooseberries-Alovitox/dp/B06XDLRY38/ref=sr_1_1_sspa?dchild=1&keywords=gooseberries&qid=1607849114&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyWE5MWlNTSDQxMVdPJmVuY3J5cHRlZElkPUEwMDEyMjQwQUdSUzg4VTA0QklIJmVuY3J5cHRlZEFkSWQ9QTA3OTUwNzcxN1lBMVo2WTFWUFVaJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==',
      'https://nuts.com/driedfruit/figs/mission.html?gclid=CjwKCAiAlNf-BRB_EiwA2osbxWvk8tATLzfbxcqGJYxC89RVMyVAw0KsDrHKmqEZrsyDu-K_Pp4AqRoCRjoQAvD_BwE',
      'https://www.amazon.com/Natures-Blossom-Grow-Berries-Starter/dp/B07ZN3X533/ref=sr_1_5?dchild=1&keywords=blueberry+seeds&qid=1607849510&sr=8-5',
      'https://www.amazon.com/Raspberry-Seeds-Rubus-idaeus-Non-GMO/dp/B07CRXCV3F/ref=sr_1_3?dchild=1&keywords=raspberries+seeds&qid=1607849571&sr=8-3',
      'https://www.amazon.com/Burpee-Mignonette-Strawberry-Seeds-seeds/dp/B078GFQJRC/ref=sr_1_1_sspa?dchild=1&keywords=strawberries+seeds&qid=1607849604&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExUkIySzI2RkJPQThZJmVuY3J5cHRlZElkPUEwODcxODA2Uk5LWkZRUU5UQkI0JmVuY3J5cHRlZEFkSWQ9QTAwMDcyNTA0SzIxODZCVDMzU1Umd2lkZ2V0TmFtZT1zcF9hdGYmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl',
   ];
   const shopPic = [ 'https://thumbs.dreamstime.com/b/shop-here-neon-sign-brick-wall-background-87867325.jpg',
   'https://images-na.ssl-images-amazon.com/images/I/519B2MptRlL._AC_.jpg',
   'https://images-na.ssl-images-amazon.com/images/I/81XOnUyUbhL._SL1500_.jpg',
   'https://i.ebayimg.com/images/g/MxYAAOSwsN9XBKZ8/s-l500.jpg',
   'https://images-na.ssl-images-amazon.com/images/I/51sc89WRwFL._AC_.jpg',
   'https://images-na.ssl-images-amazon.com/images/I/71-GatlbWdL._AC_SL1500_.jpg',
   'https://images-na.ssl-images-amazon.com/images/I/71BR9WwzfQL._SL1500_.jpg',
   'https://nuts.com/images/rackcdn/ed910ae2d60f0d25bcb8-80550f96b5feb12604f4f720bfefb46d.ssl.cf1.rackcdn.com/daf7c0af328658e6-k81bWMtm-zoom.jpg',
   'https://images-na.ssl-images-amazon.com/images/I/81MYp%2B9xkaL._AC_SL1500_.jpg',
   'https://images-na.ssl-images-amazon.com/images/I/71JD8COjNOL._AC_SL1000_.jpg',
   'https://images-na.ssl-images-amazon.com/images/I/71Oy9CxyvML._AC_SL1000_.jpg',
   ];
   const shopWords = [ "Amazon", "Currant seeds", "Goji Berry seeds", "Honey Berry seeds", "Black Berry seeds", "Apple seeds", "Goose Berry seeds", "Fig seeds", "Blueberry seeds", "Raspberry seeds", "Strawberry seeds",
  ];
  const cost = ["Price", "$6.45", "$34.99", "$3.77", "$119.99", "$49.50", "$12.95", "$8.99", "$24.99", "$8.97", "$7.69",];
  // The index (serial number) of the current image
  let s = 0;
  
  // Grab handles onto HTML elements.
  const fpreviousButton = document.getElementById('fprevious-button');
  const fnextButton = document.getElementById('fnext-button');
  const fphoto = document.getElementById('fphoto');
  const pText = document.getElementById('pWords');
  const pDes = document.getElementById('descr');
  const pics = document.getElementById('shopPic');
  const links = document.getElementById('daLinks');
  const price = document.getElementById('priceTag');
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

  let a = 0;
  function shopPictures(delta)
  {
      a = (a + delta + shopPic.length) % shopPic.length;
      pics.src = shopPic[a];
  }
  let b = 0;
  function shopLinks(delta)
  {
      b = (b + delta + buyNow.length ) % buyNow.length;
      links.setAttribute('href', buyNow[b]);
      links.innerHTML = shopWords[b];
  }
  let c = 0;
  function priceTag(delta)
  {
      c = (c + delta + cost.length) % cost.length;
      price.innerHTML = cost[c];
  }

  fpreviousButton.addEventListener('click', () => fadvance(-1));
  fnextButton.addEventListener('click', () => fadvance(1));

  fpreviousButton.addEventListener('click', () => cambridge(-1));
  fnextButton.addEventListener('click', () => cambridge(1));
  
  fpreviousButton.addEventListener('click', () => description(-1));
  fnextButton.addEventListener('click', () => description(1));

  fpreviousButton.addEventListener('click', () => shopPictures(-1));
  fnextButton.addEventListener('click', () => shopPictures(1));

  fpreviousButton.addEventListener('click', () => shopLinks(-1));
  fnextButton.addEventListener('click', () => shopLinks(1));

  fpreviousButton.addEventListener('click', () => priceTag(-1));
  fnextButton.addEventListener('click', () => priceTag(1));

  fadvance(0);
  cambridge(0);
  description(0);
  shopPictures(0);
  shopLinks(0);
  priceTag(0);