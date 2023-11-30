/* Assignment 04: Finishing a Todo List App
 *
 * 
 *
 */

// Variables
let form = document.getElementById("form-superhero");
let inputName = document.getElementById("name-input-1");
let myList = document.getElementById("name-list");
let counterP = document.getElementById("ptag");

// Add an Array
let nameArray = [];

// Submit Form
form.addEventListener("submit", ClickedSubmit);

// Functions
function ClickedSubmit(event) {
  // PREVENT THE DEFAULT BEHAVIOR OF THE FORM
  event.preventDefault();

  // Get the value of the input
  const inputvalue = inputName.value;

  // Check that inputValue is not empty
  nameArray.push({ name: inputvalue, completed: false });
  inputName.value = "";
  renderlist();
}

function renderlist() {
  console.log("Render List:", nameArray);

  myList.innerHTML = "";
  for (let i = 0; i < nameArray.length; i++) {
    let tempName = document.createElement("li");
    tempName.textContent = nameArray[i].name;

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "❌";
    tempName.appendChild(deleteButton);
    myList.appendChild(tempName);

    deleteButton.addEventListener("click", function () {
      nameArray.splice(i, 1);
      renderlist();
    });

    let completeButton = document.createElement("button");
    completeButton.textContent = "✅";
    tempName.appendChild(completeButton);
    myList.appendChild(tempName);

    completeButton.addEventListener("click", function () {
      nameArray[i].completed = !nameArray[i].completed;
      renderlist();
    });

    if (nameArray[i].completed) {
      tempName.style.textDecoration = "line-through";
    }
  }

  updateCounter();
}

function updateCounter() {
  if (nameArray.length === 0) {
    counterP.textContent = "NO TASK ON THE LIST";
  } else {
    const incompleteTasks = nameArray.filter((task) => !task.completed).length;
    counterP.textContent = "You have " + incompleteTasks + " task(s) on the list";
  }
}

// Initial rendering
renderlist();
