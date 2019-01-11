function createNewListItem(itemName) {
  let elli = document.createElement('li');
  let elspan = document.createElement('span');
  elspan.innerText = itemName;
  let elbutton = document.createElement('button');
  elbutton.innerText = 'Delete';

  elbutton.addEventListener('click', function (event) {
    document.getElementById('item').focus();
    console.log('The button was clicked: ' + itemName);
    elli.remove();

  });

  // append the span to the li node
  elli.appendChild(elspan);

  //append the button node to the li node
  elli.appendChild(elbutton);
  // button's .innerText property

  // return the li node
  return elli;
};

document.addEventListener('DOMContentLoaded', function (event) {
  let inputVal = document.getElementById('item');
  let shoppingList = document.querySelector('ul');
  let addItemButton = document.querySelector('button');
  document.querySelector('button').disabled = false;

  document.querySelector('button').addEventListener('click', function () {
    if (inputVal.value.trim() !== '') {
      shoppingList.appendChild(createNewListItem(inputVal.value.trim()));
      inputVal.value = '';
      addItemButton.disabled = true;
    }
    inputVal.focus();
  });

  inputVal.addEventListener('keyup', function (event) {
    if (inputVal.value.trim() !== '') {
      addItemButton.disabled = false;
      if (event.key === 'Enter') {
        shoppingList.appendChild(createNewListItem(inputVal.value.trim()));
        inputVal.value = '';
      }
    }

    if (inputVal.value.trim() === '') {
      addItemButton.disabled = true;
    }
  });
  inputVal.focus();
  addItemButton.disabled = true;
});
