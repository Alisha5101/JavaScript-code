// Fetch api provides an interface for fetching the resource.
const URL='https://dattebayo-api.onrender.com/characters';
let data
let newData
let characters= async ()=>{
    data= await fetch(URL);
    // console.log(data.json())
    newData=await data.json();
    console.log(newData.characters[0].name)
    const ul=document.querySelector('.name')
    newData.characters.forEach(element => {
        let li=document.createElement('li');
        ul.appendChild(li)
        li.innerHTML=element.name
    });
   
}
characters()
console.log(newData)
