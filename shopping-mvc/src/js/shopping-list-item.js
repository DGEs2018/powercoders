/**
 * Represents an item in the shopping list.
 */
class ShoppingListItem {
  /**
   * @param name {string} Name
   * @param quantity {string} Quantity
   */
  constructor(name, quantity) {
    this.name = name;
    this.quantity = quantity;
  }

  /**
   * Creates <b>and</b> returns an 'li' element for inclusion in the shopping list
   *
   * @returns {HTMLElement} li element
   */
  toListItem() {

    const elli = document.createElement('li');
    const elspan = document.createElement('span');
    elspan.innerText = this.name;
    const deleteIcon = document.createElement('i');
    const qty = document.createElement('span');
    qty.textContent = '  (' + this.quantity + ')';

    const clearListButton = document.querySelector('button#clear');
    const listItems = document.querySelectorAll('li');


    deleteIcon.addEventListener('click', function () {
      document.getElementById('item').focus();
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

    if (this.quantity !== 0) {
      elli.appendChild(document.createTextNode(''));
      const qtyText = document.createTextNode('span');
      qtyText.textContent = `(${this.quantity})`;
      elli.appendChild(qtyText);
    }

    elli.appendChild(deleteIcon).className = 'far fa-trash-alt';
    return elli;
  }

}
