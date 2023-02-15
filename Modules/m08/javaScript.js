function addItem(item) {
  var newEl = document.createElement('li');
  var position = document.getElementsByTagName('ul')[0];

  newEl.appendChild(document.createTextNode(item));
  position.appendChild(newEl);
}

addItem('quinoa');
