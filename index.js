let form=document.getElementById('addForm')
let itemList=document.getElementById('items')
let filter = document.getElementById('filter');

//adding an event listener to the form submission
form.addEventListener('submit',addItem)

//adding an event listener for delete
itemList.addEventListener('click',removeItem)

//adding an event listener to the filter
filter.addEventListener('keyup', filterItems);

function addItem(e)
{
    e.preventDefault()

    //we need to take the input value and store it in a variable
    let newItem=document.getElementById('item').value

    let description=document.getElementById("description").value

    

    //we need to create a new li for it
    let li=document.createElement('li')

    //adding the li class
    li.className="list-group-item"

    //to get the text from the input
    //adding a text node to the li with the input value
    li.appendChild(document.createTextNode(newItem))
    //li.appendChild(document.createTextNode(" "))

    li.appendChild(document.createTextNode(" "+description))

    //creating a delete button
    let delBtn=document.createElement('button')

    //creating edit button
    //let editBtn=document.createElement('button')
    //adding edit class
    //editBtn.className="btn btn-dark btn-sm float-right edit"

    //adding a text node to it
    // editBtn.appendChild(document.createTextNode('edit'))


    //adding class name
    delBtn.className="btn btn-danger btn-sm float-right delete"

    //adding a text node to the delete button for the symbol of delete button
    delBtn.appendChild(document.createTextNode('X'))
    
    let editbtn=document.createElement('button')
    editbtn.className="btn btn-dark btn-sm float-right delete"
    editbtn.appendChild(document.createTextNode('edit'))
    li.appendChild(editbtn)
  


    //adding it to the li
    li.appendChild(delBtn)

    //adding edit button to the li
   // li.insertAdjacentElement("afterbegin",editBtn)

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

 
 let listGroup=document.querySelector("ul .list-group-item")

let b=document.querySelectorAll("li")

for(let i=0;i<b.length;i++)
{
    let edit=document.createElement('button')
    edit.className="btn btn-dark btn-sm float-right edit"
    edit.appendChild(document.createTextNode('edit'))
    b[i].insertAdjacentElement("afterbegin",edit)
}


// Filter Items
function filterItems(e){
    // convert text to lowercase
    let text = e.target.value.toLowerCase();
    // Get lis
    let items = itemList.getElementsByTagName('li');
    // Convert to an array
    let res=Array.from(items)
    for(let i=0;i<res.length;i++)
    {
    //forEach(function(item){
      //let brief=newItem.secondChild.textContent;
      //console.log(itemName)
      //console.log(brief)
      let itemName = res[i].firstChild.textContent;
      //console.log(res[4].lastChild.innerText)

      //let info=res[i].secondChild.textContent; why it doesn't work???
      let info=res[i].childNodes[1].textContent
      console.log(info)



      if(itemName.toLowerCase().indexOf(text) != -1 || info.toLowerCase().indexOf(text)!=-1) 
      {
        res[i].style.display = 'block';
      } else
      {
        res[i].style.display = 'none';
      }
    }
  }
  