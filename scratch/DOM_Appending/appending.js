console.log('JS running test!');

function paraReplicator(text) {
    let elP = document.createElement('p');
    let pContent = document.createTextNode('Replicated paragraph!');
    elP.appendChild(pContent);
    let elBod = document.getElementById('z-body');
    elBod.appendChild(elP);

}
    // Steps to follow
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

function addList() {
    //Steps to follow in order
    // 1.Define / declare a new paragraph element
    // 2.Create three of the lists one after the other (li)
    // 3.Append Ul to the main body

    let p2 = document.createElement('p');
    let p2Content = document.createTextNode('This paragraph shows three list items on click.');

    let elUl = document.createElement('ul');

    elBod.appendChild(ul);

    let elLi1 = document.createElement('li');
    let li1Content = document.createTextNode('First listitem');
    elUl.appendChild(elLi1);
    elLi1.appendChild(li1Content);


    let elLi2 = document.createElement('li');
    let li2Content = document.createTextNode('Second item displaying ');
    let emTex = document.createTextNode('an emphasised');
    let liContent2 = document.createTextNode(' text');
    elUl.appendChild(elLi2);
    elLi2.appendChild(liContent);
    elLi2.appendChild(emTex);


    let elLi3 = document.createElement('li');
    let li3Content = document.createTextNode('Third item');
    elLi3.appendChild(li3Content);

    document.addEventListener('DOMContentLoaded', function () {
        document.getElementById('lister').addEventListener('click', function() {

        addList()

        });
    });



}