 var input = document.getElementById('input');
var addBtn = document.getElementById('add');
var delbtn = document.querySelector('.delbtn');
var list = document.getElementById("list");
var item = document.querySelector(".item");

var todoList = [];

var indx = 0;


addBtn.addEventListener("click", addTodo);


function displayTodo(e) {
    e.preventDefault();
    console.log(todoList);
}


function addTodo(e) {
    e.preventDefault();
    todoList.push(input.value);
    // create new li.item
    var newli = document.createElement("li");
    newli.className = "item";
    newli.id = ++indx + "item";
    var newtext = document.createTextNode(document.getElementById("input").value);

    //create new button#del
    var newbtn = document.createElement("button");
    newbtn.className = "delbtn";
    newbtn.id = indx;
    var newtextdelete = document.createTextNode("delete");

    // newli.appendChild(newlivalue);
    newli.appendChild(newtext);
    list.appendChild(newli);

    newbtn.appendChild(newtextdelete);
    newli.appendChild(newbtn);

    input.value="";

    displayTodo(e);

}

list.addEventListener("click", (e)=> {
    e.preventDefault();
    todoList.pop();

    document.getElementById(`${e.target.id}item`).remove();
    displayTodo(e);

});










