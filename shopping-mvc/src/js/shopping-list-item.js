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



    const qty = document.createElement('span');
    qty.textContent = '  (' + this.quantity + ')';

    elli.appendChild(elspan);

    if (this.quantity !== 0) {
      elli.appendChild(document.createTextNode(''));
      const qtyText = document.createTextNode('span');
      qtyText.textContent = `(${this.quantity})`;
      elli.appendChild(qtyText);
    }
    const deleteIcon = document.createElement('i');
    deleteIcon.className = "fa fa-trash";
    const deleteButton = document.createElement('button');
    deleteButton.appendChild(deleteIcon);
    elli.appendChild(deleteButton);

    return elli;
  }

}
