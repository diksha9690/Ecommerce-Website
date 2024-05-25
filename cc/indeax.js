let arr = ["Diksha","Bhumika","Upasana","Kashish","Anchal"];
let ul = document.createElement("ul");
document.body.appendChild(ul)
ul.classList.add("list")

arr.forEach((name)=>{
const liitems = document.createElement("li")
liitems.innerHTML = name;
ul.appendChild(liitems)
})