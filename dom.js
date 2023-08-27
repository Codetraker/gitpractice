//EXAMINE DOCUMENT OBJECT

//console.dir(document);
//console.log(document.domain);
//console.log(document.URL);
//console.log(document.title);
//document.title = 123;
//console.log(document.doctype);
//console.log(document.head);
//console.log(document.body);
//console.log(document.all);
//console.log(document.all[10]);
//document.all[10].textContent = 'Hello';
//console.log(document.forms);
//console.log(document.links);
//console.log(document.images);
//-----------------------------------------------------------

//SELECTORS
//-------------
//GETELEMENTBYID

//console.log(document.getElementById('header-title'));
//let headerTitle = document.getElementById('header-title');
//let header = document.getElementById('main-header');
//console.log(headerTitle);
//headerTitle.textContent = 'Hello';
//headerTitle.innerText = 'Good Bye';
//headerTitle.innerHTML = '<h3>Hello</h3>';
//headerTitle.style.borderBottom = 'solid 3px #000';
//header.style.borderBottom = 'solid 3px #000';
//---------------------------------------------------------------

//GETELEMENTSBYCLASSNAME

//let items = document.getElementsByClassName('list-group-item');
//console.log(items);
//console.log(items[1]);
//items[1].textContent = 'Hello 2';
//items[1].style.fontWeight = 'bold';
//items[1].style.backgroundColor = 'Yellow';
/*for(let i=0; i<items.length;i++){
    items[i].style.backgroundColor = '#f4f4f4';
}*/
//------------------------------------------------------------

//GETELEMENTBYTAGNAME
/*
let li = document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
li[1].textContent = 'Hello 2';
li[1].style.fontWeight = 'bold';
li[1].style.backgroundColor = 'Yellow';
for(let i=0; i<li.length;i++){
    li[i].style.backgroundColor = '#f4f4f4';
}
*/
//-------------------------------------------------------------

//QUERYSELECTOR

//let header = document.querySelector('#main-header');
//header.style.borderBottom ='solid 4px #ccc';

//let input = document.querySelector('input');
//input.value = 'hello';

//let submit = document.querySelector('input[type="submit"]');
//submit.value = 'SEND';

//var item = document.querySelector('.list-group-item');
//item.style.color = 'red';

//var lastitem = document.querySelector('.list-group-item:last-child');
//lastitem.style.color = 'blue';

//var seconditem = document.querySelector('.list-group-item:nth-child(2)');
//seconditem.style.color = 'coral';
//----------------------------------------------------------------

//QUERYSELECTORALL

//var title = document.querySelectorAll('.title');
//console.log(title);
//title[0].textContent = 'Hello';
/*
var odd = document.querySelectorAll('li:nth-child(odd)');
for(var i = 0; i<odd.length ; i++){
    odd[i].style.backgroundColor = '#f4f4f4';
}
*/
/*
var even = document.querySelectorAll('li:nth-child(even)');
for(var i = 0; i<even.length ; i++){
    even[i].style.backgroundColor = '#f4f4f4';
}
*/
//-------------------------------------------------------------
//task-3
//let header = document.getElementById('main-header');
//header.style.border = 'solid 3px #000';

//var title = document.querySelectorAll('.title');
//title[0].textContent = 'ADD ITEM';
//title[0].style.fontWeight = 'bold';
//title[0].style.backgroundColor = 'green';
//-----------------------------------------------------------
//task-4
//let thirditem = document.getElementsByClassName('list-group-item');
//thirditem[2].style.backgroundColor = 'green';

//let bolditem = document.getElementById('items');
//bolditem.style.fontWeight = 'bold';
//-------------------------------------------------------------
//task-5
/*let items = document.getElementsByClassName('list-group-item');
for(let i=0; i<items.length;i++){
    items[i].style.backgroundColor = '#f4f4f4';
}

let fiveitems = document.getElementsByClassName('new-list');
fiveitems[0].style.backgroundColor = 'green';
fiveitems[0].style.color = 'white';
fiveitems[0].style.padding ='10px';

let tagged = document.getElementsByTagName('li');
for(let i=0; i<tagged.length;i++){
    tagged[i].style.fontWeight='bold';
}*/
//-------------------------------------------------------------------
//task-6
let secitem = document.querySelector('.list-group-item:nth-child(2)');
secitem.style.backgroundColor = 'green';

let thirditem = document.querySelector('.list-group-item:nth-child(3)');
thirditem.style.display = 'none';
//-----------------------------------------------------------------
//Don't run all the code. 
//------------------------------------------------------------------
let secfont = document.querySelectorAll('.list-group-item');
secfont[1].style.color = 'green';

let odd = document.querySelectorAll('li:nth-child(odd)');
for(let i = 0; i<odd.length ; i++){
    odd[i].style.backgroundColor = 'green';
}