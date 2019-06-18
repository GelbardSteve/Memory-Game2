var NUMBER_OF_COLORS = 12,
  cards = document.querySelectorAll('.card'),
  // Store the initial colors
  initialColors = [],
  // Store the current card index we are guessing now
  colorIndex = 0;

// Set the colors of the cards
cards.forEach(card => {
  var colorName = "color" + Math.floor(1 + Math.random() * NUMBER_OF_COLORS);
  initialColors.push(colorName);
  card.className = colorName;
  card.dataset['color'] = colorName;
});

// Generat the colors selctions
var fragment = document.createDocumentFragment();
for (var i = 1; i <= NUMBER_OF_COLORS; i++) {
  var div = document.createElement('div');
  div.className = 'color' + i;
  div.onclick = checkColor;
  fragment.appendChild(div);
}
document.querySelector('.colors').appendChild(fragment);

setTimeout(() => {
  cards.forEach(function (card) {
    card.className = "";
  });

}, 2000);

// check if user picking the correct color
function checkColor(e) {
  var div = e.srcElement,
    // Get the selected color
    selectedColor = div.className;

  // Check to see if the selected color match
  if (selectedColor !== initialColors[colorIndex]) {
    document.querySelector('.error').innerHTML = "Looooooser !!!!!!";
  } else {
    // Set the right color and advance the card index
    cards[colorIndex++].className = selectedColor;
  }
  if (colorIndex === initialColors.length) {
    document.querySelector('.error').innerHTML = "You won !!!!!!";
  }
}