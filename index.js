//Traversing the DOM

let itemList=document.querySelector('#items');

//parentNode
//console.log(itemList.parentNode) //div with id=main
//itemList.parentNode.style.backgroundColor="black"
//console.log(itemList.parentNode.parentNode) //div with class container


//1.parentElement
console.log(itemList.parentElement) //div with id=main
itemList.parentElement.style.backgroundColor="grey"
console.log(itemList.parentElement.parentElement) //div with class container

//childNode
//console.log(itemList.childNode) // includes everything from text node,line breaks etc

//children
console.log(itemList.children) //only the elements i.e no text nodes , line breaks

//2. lastElementChild
itemList.lastElementChild.style.color="red" //colors item 4

//3. lastChild
console.log(itemList.lastChild)

//6.firstChild
console.log(itemList.firstChild) //text node

//5.firstElementChild
//console.log(itemList.firstElementChild)
itemList.firstElementChild.style.color="orange"

//7.nextSibling
let firsth2=document.querySelector('.title')
console.log(firsth2.nextSibling) //text node

//8.nextElementSibling
console.log(firsth2.nextElementSibling) //form will be its next sibling

//9. previousSibling
console.log(itemList.previousSibling) //text node

//10. previousElementSibling
console.log(itemList.previousElementSibling) //h2 will be its previous sibling
itemList.previousElementSibling.style.backgroundColor="#f4f4f4"


//create a div 
//11.createElement
let newDiv=document.createElement("div")

//add class
newDiv.className="hello"
//add id
newDiv.id="hello"

//add attribute
//12.setAttribute
newDiv.setAttribute("title","hello Div")

//create a text node
//13. createTextNode
let newDivText=document.createTextNode("HEllo")

//Add text to div
//14. appendChild()
newDiv.appendChild(newDivText)


let container= document.querySelector('header .container')
let h1=document.querySelector('header h1')

console.log(newDiv)

container.insertBefore(newDiv,h1)
//adding HEllo before item 1


let allItems=document.querySelector('div .list-group') //div with class card card-body is the parent of ul
console.log(allItems.parentElement)
let allList=document.querySelector('div li') //in div we are taking li
console.log(allList)

allItems.insertBefore(newDiv,allList) //before first li




