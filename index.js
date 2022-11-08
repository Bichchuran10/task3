let form=document.getElementById('addForm')
let itemList=document.getElementById('items')

//adding an event listener to the form submission
form.addEventListener('submit',addItem)

//adding an event listener for delete
itemList.addEventListener('click',removeItem)

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

    //creating a delete button
    let delBtn=document.createElement('button')

    //adding class name
    delBtn.className="btn btn-danger btn-sm float-right delete"

    //adding a text node to the delete button for the symbol of delete button
    delBtn.appendChild(document.createTextNode('X'))

    //adding it to the li
    li.appendChild(delBtn)

    //adding li to the list of items
    itemList.appendChild(li)

    
}

function removeItem(e)
{
    e.preventDefault()
    //check if the class contains delete
    if(e.target.classList.contains='delete')
    {
        if(confirm('Are you sure?'))
        {
            let li=e.target.parentElement //since we have to delete it's parentElement . In this case it's the li
            itemList.removeChild(li) //li is the child of ul
        }
    }
}

 
 //let listGroup=document.querySelector("ul .list-group-item")

let b=document.querySelectorAll("li")

for(let i=0;i<b.length;i++)
{
    let edit=document.createElement('button')
    edit.className="btn btn-dark btn-sm float-right edit"
    edit.appendChild(document.createTextNode('edit'))
    b[i].insertAdjacentElement("afterbegin",edit)
}