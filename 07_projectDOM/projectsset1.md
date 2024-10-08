# Projects related to DOM

## Project link

[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Source code
## Project 1
```javascript
console.log("hello world")

const body = document.querySelector('body');
const buttons = document.querySelectorAll('.button');
console.log(buttons);
const h2 = document.querySelector('.heading');

buttons.forEach((value) => {
  console.log(value);
  value.addEventListener('click', (e) => {
    console.log(e);
    console.log(e.target.id);
    if (e.target.id == 'grey') {
      body.style.background = e.target.id;
      h2.style.color = 'black';
    }
    if (e.target.id == 'white') {
      body.style.background = e.target.id;
      h2.style.color = 'black';
    }
    if (e.target.id == 'blue') {
      body.style.background = e.target.id;
      h2.style.color = 'white';
    }
    if (e.target.id == 'yellow') {
      body.style.background = e.target.id;
      h2.style.color = 'white';
    }
  });
});

```
## unlimited colors code
```javascript

let interval;

const color=()=>{
  let hex='0123456789ABCDEF';
  let randomColor='#'
  for(let i=0;i<6;i++){
    randomColor+=hex[Math.floor(Math.random() * 16)]
  }
  return randomColor;
}

document.querySelector("#start").addEventListener("click",(e)=>{
  if(!interval){
    interval=setInterval(()=>{
    
      document.body.style.backgroundColor=color();
      // randomColor='#'
  
    },1000)
  }
  

})

document.querySelector("#stop").addEventListener("click",(e)=>{
clearInterval(interval);
interval=null
})

```

## keyboard code
``` javascript
console.log('Project 5');
let keyValue=document.querySelector('.key');

document.addEventListener('keyup',(e)=>{
  if(e.key==" "){
    keyValue.innerHTML="space"
  }
  keyValue.innerHTML=`${e.code} and ${e.key} `
})
```