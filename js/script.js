function newItem(){

   let li = $('.selectedElement').append('<li></li>');
   let inputValue = $('#input').val();
   li.append(inputValue);
   
   if (inputValue === '') {
    alert("You must write something!");
  } else {
    let list = $('#list');
    li.append(list)
  }};
    
    li.on ("click", function() {
    li.addClass("strike");
  });

  li.on ('.crossOutButton');
  crossOutButton.append(document.createTextNode("X"));
  li.append(crossOutButton);

  crossOutButton.addEventListener("click", deleteListItem);

  function deleteListItem(){
    li.classList.add("delete")
}

    $('#list').sortable();


    
    
    
    
    
   /* //javascript
    //1. Adding a new item to the list of items: 
       let li = document.createElement("li");
       let inputValue = document.getElementById("input").value;
       let text = document.createTextNode(inputValue);
       li.appendChild(text);
    
       if (inputValue === '') {
         alert("You must write something!");
       } else {
         let list = document.querySelector('#list');
         list.appendChild(li);
       }}

     function crossOut() {
 	li.classList.toggle("strike");
 	}

 	li.addEventListener("dblclick",crossOut);

       let crossOutButton = document.createElement("crossOutButton");
 	crossOutButton.appendChild(document.createTextNode("X"));
 	li.appendChild(crossOutButton);

 	crossOutButton.addEventListener("click", deleteListItem);*/