document.addEventListener('DOMContentLoaded', function(event) {
    document.querySelector('button').addEventListener('click', function(event){
        console.log('The button was clicked');
        let inputVal = document.getElementById('item');
        // alternative works with, let inputVal = document.querySelector('#item');
        console.log(inputVal.value);

    });
});


