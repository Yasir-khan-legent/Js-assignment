let inp = document.getElementById('inp')
let ull = document.getElementById('ul')
let editingIndex = null;


window.onload = () => {
let data = JSON.parse(localStorage.getItem('text')) || [];

data.forEach((item,index ) => {
   let li = document.createElement('li')
   li.innerHTML = `<p>${item}</p><button onclick="edit(${index})">Edit</button> <button onclick="dele(${index})">Delete</button>`
    ull.appendChild(li);
});
}



let add = ()=>{
  let data = JSON.parse(localStorage.getItem('text')) || [];
   if (editingIndex !== null) {
    data[editingIndex] = inp.value; 
    editingIndex = null; 
  } else {
    data.push(inp.value);  
  }
  
  localStorage.setItem('text',JSON.stringify(data))
let index = data.length - 1;
  let li = document.createElement('li')
 li.innerHTML = `
 <p>${inp.value}</p><button onclick="edit(${index})">Edit</button> <button onclick="dele(${index})">Delete</button>
 `
 ull.appendChild(li)
 inp.value = ""
location.reload()
}

let clearr = () => {
  ull.innerHTML = " "
  let data = JSON.parse(localStorage.getItem('text')) || [];
  localStorage.clear()

}


  let dele = (index) => {
  let data = JSON.parse(localStorage.getItem('text')) || [];
  data.splice(index, 1);
   localStorage.setItem('text',JSON.stringify(data))
   location.reload();
  
  }

    let edit = (index) => {
  let data = JSON.parse(localStorage.getItem('text')) || [];
inp.value = data[index]
 editingIndex = index;
  
  }