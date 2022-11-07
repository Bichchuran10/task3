let headerTitle=document.getElementById("header-title")
console.log(headerTitle.innerText) //pays attention to the styling
console.log(headerTitle.textContent) //doesnt pay attention to the styling

//headerTitle.textContent="Making Changes"

let items=document.getElementById("items")
items.lastElementChild.style.background="orange"

headerTitle.style.borderBottom="5px solid black"

formHead=document.querySelector(".title")

formHead.style.color="green"
formHead.style.fontFamily="Bold"