// The list of image URLs
const furls = ['https://www.finegardening.com/app/uploads/sites/finegardening.com/files/images/spotlight-collection/p122l_lohman.jpg',
'https://richmedia.channeladvisor.com/ImageDelivery/imageService?profileId=12026540&id=1460750&recipeId=728',
'https://i.pinimg.com/originals/f8/71/87/f8718747c1f63885ab9db332383f46fc.jpg',
'https://i.pinimg.com/originals/8a/f9/11/8af911067bac30aec0dee168575519aa.jpg',
'https://blog.gardenloversclub.com/wp-content/uploads/2015/05/blue-water-pond.jpg',
'https://i.pinimg.com/originals/0a/94/5e/0a945e9ab2014ad5aa0d583bcb53d66a.jpg',
'https://static.onecms.io/wp-content/uploads/sites/37/2018/08/15233604/window-hanging-herb-planter-05014de0.jpg',

];
const Ewords = [ "Welcome", "Garden Statues", "Rock Border", "Stone Path", "Garden Pond", "Deeply Curved Landscape", "Window Herbs",
];
const pWords = [
    "You can use these decoration ideas to decorate your own home with.",
    "The classic garden statues can add great design choices to your garden. This can give your garden a cool asthetic and make it look more lively.",
    "Having borders around each section of plants helps with how the whole thing looks. If all the plants blend together it may start to look a little too messy.",
    "Using stone paths to navigate the gardens has a great effect on the looks of the garden. Creating a fun way to navigate the garden is almost as important as the garden itself.",
    "A pond in the wild is home to all sorts of plants and fish. This is a perfect complament to the plants growing nearby.",
    "If you are feeling a bit more ambitious than everyone else this is for you. Carved landscape gardens are tons of work but look amazing in the end.",
    "This is a layout that is for people who have little to no space to garden. These little herbs are great tasting and are easy to grow in any window.",
];
let s = 0;

// Grab handles onto HTML elements.
const fpreviousButton = document.getElementById('fprevious-button');
const fnextButton = document.getElementById('fnext-button');
const fphoto = document.getElementById('fphoto');
const pText = document.getElementById('pWords');
const mainText = document.getElementById('stuff');

function fadvance(delta) {
  s = (s + delta + furls.length) % furls.length;
  fphoto.src = furls[s];
}

let k = 0;
function lose(delta) {
  k = (k + delta + Ewords.length) % Ewords.length;
mainText.innerHTML = Ewords[k];
}

let t = 0;
function cambridge(delta) {
  t = (t + delta + pWords.length) % pWords.length;

  pText.innerHTML = pWords[t];
}

fpreviousButton.addEventListener('click', () => fadvance(-1));
fnextButton.addEventListener('click', () => fadvance(1));

fpreviousButton.addEventListener('click', () => lose(-1));
fnextButton.addEventListener('click', () => lose(1));

fpreviousButton.addEventListener('click', () => cambridge(-1));
fnextButton.addEventListener('click', () => cambridge(1));

fadvance(0);
lose(0);
cambridge(0);