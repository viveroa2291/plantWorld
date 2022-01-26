// The list of image URLs
const furls = ['https://cdn.discordapp.com/attachments/573545989185732621/770102307919757342/unknown.png',
'https://cdn.discordapp.com/attachments/573545989185732621/770103743383207946/unknown.png',
'https://cdn.discordapp.com/attachments/573545989185732621/770105372584181790/unknown.png',
];
const words = [ "Morning Chores", "You Grow Girl", "Garden Design",
];
const pWords = [
    "Morning Chores has a ton of useful tools like there Garden Size Calculator which shows how much area and amount of plants in pounds you need to plant to feed x amount of family members. This helps  a great amount so you don't end up undergrowing or overgrowing. It doesn't just have that though, it also has tons of great articles to help further your gardening learning.",
    "Instead of a more corporate website like the last one I'd like to present a more home style website. This is a blog by Gayla Trail where she posts all her gardening projects. These are amazing to see and can give great ideas to anyone starting. This gives a much more personal story on growing plants and can provide better tips.",
    "Gardening isn't always about the plants only sometimes you want to have good garden design as well. This site has tons of photos from gardens around the world for different garden layout ideas and themes. It has many different sections for people looking for different types of gardens like container or shade or large you name it they got it.",
];
const theLinks = [ "https://morningchores.com/", "http://yougrowgirl.com/", "https://www.gardendesign.com/", 
];
// The index (serial number) of the current image
let s = 0;

// Grab handles onto HTML elements.
const fpreviousButton = document.getElementById('fprevious-button');
const fnextButton = document.getElementById('fnext-button');
const fphoto = document.getElementById('fphoto');
const pText = document.getElementById('pWords');
const daLinks = document.getElementById('stuff');

function fadvance(delta) {
  s = (s + delta + furls.length) % furls.length;
  fphoto.src = furls[s];
}

let k = 0;
function lose(delta) {
  k = (k + delta + theLinks.length) % theLinks.length;
daLinks.innerHTML = words[k];
  daLinks.setAttribute('href', theLinks[k]);
  
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
