// Selecting Elements

const secondLi = document.getElementById('second-li');
console.log(secondLi);

const firstLi = document.querySelector('li');
console.log(firstLi);

const listItems = document.querySelectorAll('li');
console.log(listItems);
console.log(listItems.length);

listItems.forEach(item => console.log(item)); // We don't have map method on NodeList

Array.from(listItems).map(item => console.log(item)); // We have map method on Array

// HTML collection is not as powerful as NodeList
const listItemsTwo = document.getElementsByClassName('list-item');
console.log(listItemsTwo);

const listItemsThree = document.getElementsByTagName('li');
console.log(listItemsThree);

Array.from(listItemsThree).forEach(item => console.log(item));

// Editing DOM Nodes

listItems[0].style.color = 'blue';
// listItems[0].style.backgroundColor = 'blue';
listItems[0].textContent = 'Hello World';
listItems[0].value = 5;
listItems[0].setAttribute('value', 7);
listItems[0].setAttribute('class', 'blue big');
listItems[0].classList.remove('big');
listItems[0].classList.add('big', 'blue');
listItems[0].classList.toggle('big');
listItems[0].classList.toggle('big');
listItems[0].className = 'big';
console.log(listItems[0].className);

// Creating DOM Nodes
