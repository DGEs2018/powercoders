/**
 * Creates <b>and</b> returns an 'li' element for inclusion in the shopping list
 *
 * @param {string} itemName Name of the item to add to the list
 * @returns {HTMLElement} li element
 */
function createNewListItem(itemName) {
  const elli = document.createElement('li');
  const elspan = document.createElement('span');
  elspan.innerText = itemName;
  const elbutton = document.createElement('button');
  elbutton.innerText = 'Delete';

  elbutton.addEventListener('click', function (event) {
    document.getElementById('item').focus();
    console.log('The button was clicked: ' + itemName);
    elli.remove();
  });

  elli.appendChild(elspan);
  elli.appendChild(elbutton);
  return elli;
}

document.addEventListener('DOMContentLoaded', function (event) {
  const inputVal = document.getElementById('item');
  const shoppingList = document.querySelector('ul');
  const addItemButton = document.querySelector('button');
  document.querySelector('button').disabled = false;

  document.querySelector('button').addEventListener('click', function (event) {
    const trimmedValue = inputVal.value.trim();

    if (trimmedValue === '') {
      return;
    }

    shoppingList.appendChild(createNewListItem(trimmedValue));
    inputVal.value = '';
    addItemButton.disabled = true;
    inputVal.focus();
  });

  inputVal.addEventListener('keyup', function (event) {
    const trimmedValue = inputVal.value.trim();
    addItemButton.disabled = trimmedValue === '';

    if (trimmedValue === '') {
      return
    }

    if (event.key !== 'Enter') {
      return
    }
    shoppingList.appendChild(createNewListItem(trimmedValue));
    inputVal.value ='';
    addItemButton.disabled = true;
  });

  inputVal.focus();
  addItemButton.disabled = true;
  });

