var list= document.getElementById("list");

function addtodo(){
    var todo_item=document.getElementById("todo-item");
    //create li tag
    var li = document.createElement("li");
    var litext= document.createTextNode(todo_item.value);
    li.appendChild(litext)
     //create delete button
    var delbtn= document.createElement("button");
    var deltext= document.createTextNode("delete");
    delbtn.setAttribute("class","btn1");
   delbtn.setAttribute("onclick","deleteitem(this)");
    delbtn.appendChild(deltext);
       //create edit button
    var editbtn=document.createElement("button");
    var edittext=document.createTextNode("EDIT");
     editbtn.appendChild(edittext);
     editbtn.setAttribute("class","btn2");
     editbtn.setAttribute("onclick","edititem(this)");

    li.appendChild(delbtn);
    li.appendChild(editbtn);
    list.appendChild(li);
    todo_item.value=("");
    
}
function deleteitem(e){
    e.parentNode.remove();
}

function edititem(y){
    var val=y.parentNode.firstChild.nodeValue;
    var editvalue= prompt("Enter edit value",val);
    y.parentNode.firstChild.nodeValue=editvalue;


}

function deleteall(){
    list.innerHTML="";
}
