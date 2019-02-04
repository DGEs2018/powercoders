
function Person(first, last, interests) {
  this.name = {
    first: first,
    last: last
  };
  this.interests = interests;
  this.greet = function(){
    console.log(`Hello ${this.name.first}`);
  };
}

  // const nik = new Person('Nik','Clayton', ['Teaching', 'Skiing']);
  //
  // nik.name.first; //'Nik'
  // nik.greet(); // 'Hello Nik'
  //
  // const chris = new Person ('Christian', 'Hirsig', ['Powercoders']);
  // chris.interests; // ['Powercoders']
  // chris.greet(); // 'Hello Chris'

/**
 * Represents an item in the shopping list.
 *
 * @param name {string} Name of the item
 * @param quantity  {string} Quantity of the item
 * @constructor
 */
function ShoppingListItem(name, quantity){
  this.name = name;
  this.quantity = quantity;
}

const mylist = new ShoppingListItem('flour', '500')
