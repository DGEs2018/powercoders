console.log('JS running test!');

function paraReplicator(text) {
    let elP = document.createElement('p');
    let pContent = document.createTextNode('Replicated paragraph!');
    elP.appendChild(pContent);
    let elBod = document.getElementById('z-body');
    elBod.appendChild(elP);

}
    // lIST OF TO DO
    // 1. Define / declare the paragraph element using the 'createElement' property
    // 2. Define / declare the paragraph content using the 'getElementById' property
    // 3. Append the content paragraph child to the paragraph element using the 'parent.appendChild(child)' property;
    // 4. Define / declare a body by its its element-id using 'getElementById'
    // 5. Attach the content appended paragraph element to the body element.
    // 3. Bind the click event to the addEventListener....

    document.addEventListener('DOMContentLoaded', function(event){
        document.getElementById('replicated-on-click').addEventListener('click', function(event){
            paraReplicator('You are the reason of my being!');

        });

    });

