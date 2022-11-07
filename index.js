//let headerTitle=document.getElementById("header-title")
//console.log(headerTitle.innerText) //pays attention to the styling
//console.log(headerTitle.textContent) //doesnt pay attention to the styling

//headerTitle.textContent="Making Changes"

//let items=document.getElementById("items")
//items.lastElementChild.style.background="orange"

//headerTitle.style.borderBottom="5px solid black"

//formHead=document.querySelector(".title")

//formHead.style.color="green"
//formHead.style.fontFamily="Bold"


//let itemList=document.getElementsByClassName("list-group-item")

//for(let i=0 ; i<itemList.length;i++)
//{
    //itemList[2].style.backgroundColor="green"
    //itemList[i].style.fontWeight="Bold"
//}


//new item by className

//let newItem=document.getElementsByClassName("new-item")
//newItem[0].style.color="blue"


//new item by tagsName
//let liTag=document.getElementsByTagName("li")
//liTag[4].style.backgroundColor="red"


//query Selector
//taking the second item by nth-child(n) property
let secondItem=document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.backgroundColor="#f4f4f4" //didn't make it green instead making it this color since in the next task we've to make the textcolor green which will make the text invisible


//hiding the third item using visibility property
let thirdItem=document.querySelector(".list-group-item:nth-child(3)");
thirdItem.style.visibility="hidden"


//query Selector All
let allLi=document.querySelectorAll(".list-group-item")
allLi[1].style.color="green"; 

let odd=document.querySelectorAll("li:nth-child(odd)");
for(let i=0;i<odd.length;i++)
odd[i].style.backgroundColor="green"





