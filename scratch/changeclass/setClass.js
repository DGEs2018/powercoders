console.log('My code is running!');

function greet(name) {
  console.log('Hello, ' + name);
}

// function (onclick, '2bclicked') {
//   let el = document.getElementById('2bclicked');
//   el.className = '2bclicked';
// }
// let makeWarning = document.getElementById('make-warning');
let el = document.getElementById('2bclicked');

el.className = '2bclicked'

document.addEventListener('DOMContentLoaded', function(event) {
    let el = document.getElementById('click', '2bclicked');
    el.addEventListener('click', function(event){
   setClass('warning');
 });
    document.addEventListener()
  let makeTip = document.getElementById('make-tip');
  makeTip.addEventListener('click', function(event) {
      setClass('tip');
 });
  let makeNormal = document.getElementById('make-normal');
  ClearClass.addEventListener('click', function(event) {
      setClass('');
 });
});
