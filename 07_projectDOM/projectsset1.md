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
