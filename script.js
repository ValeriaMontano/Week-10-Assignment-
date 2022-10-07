//create a variable called id so I can refer to each workout uniquely

let id = 0;

// when the button is clicked we want to create a new row and add it to the table //
// add button element by its id , add the event listenr because we want something to happen when clicked
document.getElementById("add").addEventListener("click", () => {
  let createdDate = new Date();
  //get a referene to the table
  let table = document.getElementById("list");
  //create a new row (1)
  let row = table.insertRow(1);
  //set the attributes for the row I created , so each row will get an id
  row.setAttribute("id", `item-${id}`);
  //set the value of the cells in the row
  row.insertCell(0).innerHTML = document.getElementById("new-workout").value;
  row.insertCell(1).innerHTML = `${createdDate.getFullYear()}-${
    createdDate.getMonth() + 1
  }-${createdDate.getDate()}`;
  row.insertCell(2).innerHTML = document.getElementById("new-calories").value;
  //create the button for actions

  let actions = row.insertCell(3);
  actions.appendChild(createDeleteButton(id++));

  //set the new workout to blank for good user experience
  document.getElementById("new-workout").value = "";
});

//create the delete button function

function createDeleteButton(id) {
  //create button- used the tag from the html//
  let btn = document.createElement("button");
  //set some attributes//
  btn.className = "btn btn-danger";
  btn.id = id;
  btn.innerHTML = "Delete";
  //add an event listener to the button
  //each created will have its own id and encapuslate that id within the button
  //and the onclik event in the button as well//
  btn.onclick = () => {
    console.log(`Deleting row with id: item-${id}`);
    let elementToDelete = document.getElementById(`item-${id}`);
    elementToDelete.parentNode.removeChild(elementToDelete);
  };
  return btn;
}
