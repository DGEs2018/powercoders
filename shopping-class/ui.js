
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

    shoppingList.appendChild(item.toListItem());
    inputVal.value = '';
    addItemButton.disabled = true;
    clearListButton.disabled = false;
    inputVal.focus();
  });

  inputVal.addEventListener('keyup', onKeyup);
  function onKeyup() {
    const trimmedValue = inputVal.value.trim();
    addItemButton.disabled = trimmedValue === '';

    if (trimmedValue === '') {
      return
    }

    if (event.key !== 'Enter') {
      return
    }

    const item = new ShoppingListItem(trimmedValue, quantity.value);


    shoppingList.appendChild(item.toListItem());
    quantity.value = '';
    addItemButton.disabled = true;
    clearListButton.disabled = false;
  }

  quantity.addEventListener('keyup', onKeyup);

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



