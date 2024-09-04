let input=document.getElementById('title')
console.log(input)
console.log(document.getElementById('title').id)
console.log(document.getElementById('title').className)

// getAttribute() and setAttribute()

console.log(document.getElementById('title').setAttribute('class','main_heading'))

//ways to get the content

// 1.textContent-textContent returns all content of html it includes hidden content also

console.log(input.textContent)//DOM Learning with Alisha happy learning

// 2,innerText-it return only texts which are visible to the user on screen
console.log(input.innerText)//DOM Learning with Alisha

// 3.innerHTML-return all the text and it includes html tag also
console.log(input.innerHTML)//DOM Learning with Alisha <span style="display:none;">happy learning</span>

// querySelector()-it selects one first element

// Note:querySelectorAll return nodeList and getElemntByClass return HTMLCollection

let listItems=document.getElementById('list')
console.log(listItems);
let HTMLList=listItems.getElementsByClassName('item');
console.log(HTMLList)
let nodeList=document.querySelectorAll('.item');
console.log(nodeList)
