let result = document.querySelector("#lists");
let list2 = document.querySelector("#add");
let list3 = document.querySelector("#clear");

function addtodo(){
    let input = document.querySelector(".inputspace").value;
    let UL = document.querySelector('#ul')
    let LISTS = document.createElement('li');
    LISTS.className = ('list-items')
    LISTS.appendChild(document.createTextNode(input))
    UL.appendChild(LISTS)
    let button = document.createElement('button');
    button.className = "delete"
    button.innerHTML = "*"
    button.addEventListener('click', cleartodo)
    LISTS.appendChild(button)
    document.querySelector(".inputspace").value = " "
}


function clearAll(){
    let UL = document.querySelector('#ul').innerHTML = " "
}


function cleartodo(clear){
clear.target.parentElement.remove()
}


