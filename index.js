let form=document.getElementById('addForm')
let itemList=document.getElementById('items')

//adding an event listener to the form submission
form.addEventListener('submit',addItem)

function addItem(e)
{
    e.preventDefault()

    //we need to take the input value and store it in a variable
    let newItem=document.getElementById('item').value

    //we need to create a new li for it
    let li=document.createElement('li')

    //adding the li class
    li.className="list-group-item"

    //to get the text from the input
    //adding a text node to the li with the input value
    li.appendChild(document.createTextNode(newItem))

    //adding li to the list of items
    itemList.appendChild(li)


}