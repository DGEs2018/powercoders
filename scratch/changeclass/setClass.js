console.log('My code is running!');

function greet(name) {
  console.log('Hello, ' + name);
}

function setClass(className) {
  let el = document.getElementById('mypara');
  el.className = className;
}

document.addEventListener('DOMContentLoaded', function(event) {
  let makeWarning = document.getElementById('make-warning');
  makeWarning.addEventListener('click', function(event){
   setClass('warning');
 });
  let makeTip = addEventListener('DOMContentLoaded', 'make-tip' );
  makeTip.addEventListener('click', function(event) {
      setClass('tip');
 });
  let makeNormal = addEventListener('DOMContentLoaded', 'make-normal');
  ClearClass.addEventListener('click', function(event) {
      setClass('');
 });
});
