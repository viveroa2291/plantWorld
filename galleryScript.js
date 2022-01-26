// The list of image URLs
const furls = [
    'https://cdn0.wideopeneats.com/wp-content/uploads/2020/06/Untitled-design121-720x405.png',
    'https://images.unsplash.com/photo-1558521558-037f1cb027c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
    'https://upload.wikimedia.org/wikipedia/commons/2/2b/Flower_garden%2C_Botanic_Gardens%2C_Churchtown_2.JPG',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ-FGo0zbpEeLbPf83nsPcx9sR7CL-Zy2w8dw&usqp=CAU',
    'https://static.onecms.io/wp-content/uploads/sites/20/2020/05/01/pandemic-garden-1.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Cementerio%2C_Tulc%C3%A1n%2C_Ecuador%2C_2015-07-21%2C_DD_60.JPG/220px-Cementerio%2C_Tulc%C3%A1n%2C_Ecuador%2C_2015-07-21%2C_DD_60.JPG',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTOj9C3_TOE-_UjpK6mgp9gRhtBeK5EZ2fl_w&usqp=CAU',
    'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F24%2F1970%2F01%2Forange-green-container-garden-2349202-18391_0_0-2000.jpg&q=85',
    'https://280337.smushcdn.com/1405618/wp-content/uploads/2016/04/Utah-Gardening-Basics.jpg?lossy=1&strip=1&webp=1',
    'https://cdn.gardenista.com/wp-content/uploads/2018/03/organic-gardening-bird-netting-lismore-kitchen-garden-1466x977.jpg',
  ];
  const pWords = [ "Tomato Garden", "Underpass Garden", "Garden", "Flowers", "Box Garden", "Bunny Bush", "Plants", "Potted Plant", "Garden Overview", "Nets over garden",
  ];
  
  // The index (serial number) of the current image
  let s = 0;
  
  // Grab handles onto HTML elements.
  const fpreviousButton = document.getElementById('fprevious-button');
  const fnextButton = document.getElementById('fnext-button');
  const fphoto = document.getElementById('fphoto');
  const pText = document.getElementById('pWords');

  function fadvance(delta) {
    s = (s + delta + furls.length) % furls.length;
    fphoto.src = furls[s];
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