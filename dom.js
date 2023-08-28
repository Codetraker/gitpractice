//PART - 2 Assignment--->
//Q1
let newDiv = document.createElement('div');
newDiv.className = 'hello';
newDiv.id = 'hello1';
newDiv.setAttribute('title','HelloDiv');
let newDivText = document.createTextNode('HEllo World');
newDiv.appendChild(newDivText);

let container = document.querySelector('header .container');
let h1 = document.querySelector('header h1');
container.insertBefore(newDiv,h1);
console.log(container);
console.log(h1);

//Q2
let newDiv2 = document.createElement('li');
newDiv2.className = 'list-group-item';
let newDivText2 = document.createTextNode('HEllo World');
newDiv2.appendChild(newDivText2);

let itemsList = document.querySelector(".list-group");
let item1=itemsList.firstChild;
itemsList.insertBefore(newDivText2, item1);
