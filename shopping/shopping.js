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
  document.querySelector('button').addEventListener('click', function () {
    let inputVal = document.getElementById('item');
    console.log(inputVal.value);
    // call createNewListItem with the contents of the input widget and save the result in a variable
    let elli = createNewListItem(inputVal.value);
    //Use document.querySelector to find the ul element and save the result in a variable
    let storVar2 = document.querySelector('ul');
    //append the li element returned by createNewListItem to the ul element
    storVar2.append(elli);
  });

  document.querySelector('input').addEventListener('keyup', function(event) {
    if(event.key === 'Enter'){
      let inputVal = document.getElementById('item');
      let elli = createNewListItem(inputVal.value);
      let storVar2 = document.querySelector('ul');
      storVar2.append(elli);
      // return event.key;
      inputVal.value = '';
      }

  });
});
