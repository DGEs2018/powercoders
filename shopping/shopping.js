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
  const deleteIcon = document.createElement('i');
  const clearList = document.getElementById('elli');

  const clearListButton = document.querySelector('button#clear');
  const listItems = document.querySelectorAll('elli');


  deleteIcon.addEventListener('click', function (event) {
    document.getElementById('item').focus();
    console.log('The button was clicked: ' + itemName);
    elli.remove();
    if (listItems.length === 0) {
      clearListButton.disabled = true;
    } else {
      clearListButton.disabled = false;
    }
    clearListButton = listItems.length === 0;
    /*document.querySelector('button#clear').disabled =
        document.querySelectorAll('elli').length === 0*/
  });

  elli.appendChild(elspan);
  elli.appendChild(deleteIcon).className = 'far fa-trash-alt';
  return elli;
}

document.addEventListener('DOMContentLoaded', function (event) {
  const inputVal = document.getElementById('item');
  const shoppingList = document.querySelector('ul');
  const addItemButton = document.querySelector('button#add');
  const clearListButton = document.querySelector('button#clear')
  document.querySelector('button').disabled = false;

  document.querySelector('button').addEventListener('click', function (event) {
    const trimmedValue = inputVal.value.trim();

    if (trimmedValue === '') {
      return;
    }

    shoppingList.appendChild(createNewListItem(trimmedValue));
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
    shoppingList.appendChild(createNewListItem(trimmedValue));
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
});


