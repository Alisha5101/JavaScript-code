let parent=document.querySelector('.parent');
// console.log(parent)

// console.log(parent.children)

console.log(parent.childNodes)
for(let i=0;i<=parent.children.length;i++){
    // console.log(parent.children[i].innerHTML)
}
console.log(parent.firstElementChild.innerHTML)
console.log(parent.lastElementChild.innerHTML)

let child=document.querySelectorAll('.days');
console.log(child);
console.log(child[1].parentElement)
child.forEach( (value)=>console.log(value.innerHTML))

console.log(child[1].nextElementSibling.innerHTML)