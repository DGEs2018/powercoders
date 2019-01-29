/**
 * Creates <b>and</b> returns an 'li' element for inclusion in the shopping list
 *
 * @param {string} itemName Name of the item to add to the list
 * @param {string} quantity Quantity of the item to append to the list
 * @returns {HTMLElement} li element
 */
function createNewListItem(itemName, quantity) {
  const elli = document.createElement('li');
  const elspan = document.createElement('span');
  elspan.innerText = itemName;
  const deleteIcon = document.createElement('i');
  const qty = document.createElement('span');
  qty.textContent = '  (' + quantity + ')';

  const clearListButton = document.querySelector('button#clear');
  const listItems = document.querySelectorAll('li');


  deleteIcon.addEventListener('click', function (event) {
    document.getElementById('item').focus();
    console.log('The button was clicked: ' + itemName);
    elli.remove();
    if (listItems.length === 0) {
      clearListButton.disabled = true;
    } else {
      clearListButton.disabled = false;
    }
    clearListButton.disabled = listItems.length === 0;
    /*document.querySelector('button#clear').disabled =
        document.querySelectorAll('elli').length === 0*/
  });

  elli.appendChild(elspan);

  if (quantity !== 0) {
    elli.appendChild(document.createTextNode(''));
    const qtyText = document.createTextNode('elspan');
    qtyText.textContent = `(${quantity})`;
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

  document.querySelector('button').addEventListener('click', function (event) {
    const trimmedValue = inputVal.value.trim();

    if (trimmedValue === '') {
      return;
    }

    shoppingList.appendChild(createNewListItem(trimmedValue, quantity.value));
    inputVal.value = '';
    addItemButton.disabled = true;
    clearListButton.disabled = false;
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
    shoppingList.appendChild(createNewListItem(trimmedValue, quantity.value.trim()));
    inputVal.value = '';
    addItemButton.disabled = true;
    clearListButton.disabled = false;
  });

  clearListButton.addEventListener('click', function (event) {
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
  document.addEventListener('DOMContentLoaded', function (event) {
    domContentLoaded();
  });
} else {
  //DOMContentLoaded has fired.
  domContentLoaded();
}



