/* var button = document.getElementsByTagName("button")[0];

button.addEventListener("click", function() {
    console.log ("Click!!!!");
    }
) */

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItems = document.querySelectorAll("li");
var delBtn = document.querySelectorAll("button");


var listLength = listItems.length;

/* Toggle line */

ul.addEventListener("click", function(event) {
    var target=event.target
    target.classList.toggle("done");
});


    
function deleteButton(){
	var delBtn=document.createElement("button");
    delBtn.appendChild(document.createTextNode("Delete!"));
listItems[i].appendChild(delBtn);
delBtn.onclick=removeParent;
}

for( i=0;i<listLength;i++){

deleteButton();
}

function removeParent(evt){
	evt.target.parentNode.remove();
} 

/* liList.addEventListener("click", function(event) {
    event.target.parentNode.remove();

});  */   
/* if (liCheck[i].classList[2] === "done") {
    liCheck[i].classList.toggle("done");
    } else {
    liCheck[i].classList.add ("done");
    }
    }) 

/* button.addEventListener("click", function () {
    if (input.value.length > 0) {     /* check if string is empty */
 /*    var li = document.createElement("li");    /* create new li element */
   /*  li.appendChild(document.createTextNode(input.value)); */  /* create text within new li element using value from above query */
   /*  ul.appendChild(li);  */     /* append new li element to existing list */
   /*  input.value = ""; */
 /*    } */
/* }) */ /* */ 

/* input.addEventListener("keypress", function () { */
   /*  if (input.value.length > 0 && event.keyCode === 13) { */     /* keycode 13 for enter key    */
    /* var li = document.createElement("li"); */    /* create new li element */
    /* li.appendChild(document.createTextNode(input.value)); */  /* create text within new li element using value from above query */
   /*  ul.appendChild(li);  */     /* append new li element to existing list */
  /*   input.value = ""; */
   /*  } */
/* }) */ 

function inputLength() {
    return input.value.length;
}

function createListElement () {
    var li = document.createElement("li");    
    li.appendChild(document.createTextNode(input.value)); 
    ul.appendChild(li);     
    input.value = "";
    var delBtn = document.createElement("button");
    delBtn.appendChild(document.createTextNode("Delete!!"));
    li.appendChild(delBtn);
    delBtn.onclick=removeParent;
}

function addEventAfterClick (event) {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addEventAfterKeypress (event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

button.addEventListener("click", addEventAfterClick);   /* callback function so no () after function name i.e. only want it to run on event, not when code is read */

input.addEventListener("keypress", addEventAfterKeypress);

/* using functions to avoid replicating code */