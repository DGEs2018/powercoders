/**
 * Represents an item in the shopping list.
 *
 * @param name {string} Name of the item
 * @param quantity  {string} Quantity of the item
 * @constructor
 */
function ShoppingListItem(name, quantity) {
  this.name = name;
  this.quantity = quantity;
}

/**
 * Creates <b>and</b> returns an 'li' element for inclusion in the shopping list
 *
 * @param {ShoppingListItem} item Item to add to the list
 * @returns {HTMLElement} li element
 */

function createNewListItem(item) {
  const/**/ elli = document.createElement('li');
  const elspan = document.createElement('span');
  elspan.innerText = item.name;
  const deleteIcon = document.createElement('i');
  const qty = document.createElement('span');
  qty.textContent = '  (' + item.quantity + ')';

  const clearListButton = document.querySelector('button#clear');
  const listItems = document.querySelectorAll('li');


  deleteIcon.addEventListener('click', function () {
    document.getElementById('item').focus();
    console.log('The button was clicked: ' + item.name);
    elli.remove();
    /*    if(listItems.length){
          clearListButton.disabled = true;
        } else {
          clearListButton.disabled = false;
        }*/
    clearListButton.disabled = listItems.length === 0;
    /*document.querySelector('button#clear').disabled =
        document.querySelectorAll('elli').length === 0*/
  });
  elli.appendChild(elspan);

  if (item.quantity !== 0) {
    elli.appendChild(document.createTextNode(''));
    const qtyText = document.createTextNode('span');
    qtyText.textContent = `(${item.quantity})`;
    elli.appendChild(qtyText);
  }

  elli.appendChild(deleteIcon).className = 'far fa-trash-alt';
  return elli;
}

function domContentLoaded() {
  const inputVal = document.getElementById('item');
  const shoppingList = document.querySelector('ul');
  const addItemButton = document.querySelector('button#add');
  const clearListButton = document.querySelector('button#clear');
  const quantity = document.getElementById('quantity');

  document.querySelector('button').disabled = false;

  document.querySelector('button').addEventListener('click', function () {
    const trimmedValue = inputVal.value.trim();

    if (trimmedValue === '') {
      return;
    }

    const item = new ShoppingListItem(trimmedValue, quantity.value);

    shoppingList.appendChild(createNewListItem(item));
    inputVal.value = '';
    addItemButton.disabled = true;
    clearListButton.disabled = false;
    inputVal.focus();
  });

  inputVal.addEventListener('keyup', function () {
    const trimmedValue = inputVal.value.trim();
    addItemButton.disabled = trimmedValue === '';

    if (trimmedValue === '') {
      return
    }

    if (event.key !== 'Enter') {
      return
    }

    const item = new ShoppingListItem(trimmedValue, quantity.value);


    shoppingList.appendChild(createNewListItem(item));
    inputVal.value = '';
    addItemButton.disabled = true;
    clearListButton.disabled = false;
  });

  clearListButton.addEventListener('click', function () {
    const listItems = document.querySelectorAll('li');
    listItems.forEach(function (element) {
      console.log('Everything is deleted');
      element.remove();
    });
    clearListButton.disabled = true;

  });

  inputVal.focus();
  addItemButton.disabled = true;
  clearListButton.disabled = true;

}

if (document.readyState === 'loading') {
  //DOMContentLoaded  has not fired yet.
  document.addEventListener('DOMContentLoaded', function () {
    domContentLoaded();
  });
} else {
  //DOMContentLoaded has fired.
  domContentLoaded();
}



