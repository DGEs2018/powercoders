/*document.addEventListener('DOMContentLoaded', function(event) {
    document.querySelector('button').addEventListener('click', function(event){
        console.log('The button was clicked');
        let inputVal = document.getElementById('item');
        // alternative works with, let inputVal = document.querySelector('#item');
        console.log(inputVal.value);

    });
});
*/


function createNewListItem(itemName) {
  // create a li node
  let elli = document.createElement('li');
  // create span node
  let elspan = document.createElement('span');
  /*elspan.appendChild(spanCont);
  let spanCont = document.createTextNode(itemName);*/
  // span's innerText' property
  elspan.innerText = itemName;
  /*elli.appendChild(elspan);*/
  //create a button node
  let elbutton = document.createElement('button');
  // button's .innerText' property
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

  document.querySelector('button').addEventListener('click', function () {
    let inputVal = inputVal.value.trim();
    if (inputVal.value.trim() !== '') {
      shoppingList.appendChild(createNewListItem(inputVal.value));
    }
    inputVal.value = '';
    inputVal.focus();
    /*console.log(alert('Please enter a valid value!'));*/
    // console.log(inputVal.value.trim());


  });

  inputVal.addEventListener('keyup', function (event) {
    const trimmedValue = inputVal.value.trim();

    if (trimmedValue !== '') {
      addItemButton.disabled = trimmedValue === '';
      if (event.key === 'Enter') {
        shoppingList.appendChild(createNewListItem(trimmedValue));
        inputVal.value = '';
      }
    }

    addItemButton.disabled = trimmedValue === '';
  });
  inputVal.focus();
  addItemButton.disabled = true;
});

BACKUP IN CASE THIS DOESNT WORKOUT

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


