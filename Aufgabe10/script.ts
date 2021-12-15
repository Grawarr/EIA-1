//I have no idea why the notes disappear almost immediately after hitting enter key... if you just press enter without typing text everything works as intended; Buttons included. Since the text does show up for a split second I am guessing I coded in some function that deletes it automatically in sort of a loop by accident. No idea tho. I hope this suffices for now. Last time I forgot to link this script in the HTML so no wonder I got frustrated.

//read everything first
window.addEventListener("load", function () {
    //variables
    const toDo = document.querySelector("ul");
    const toDoInput = (<HTMLInputElement>document.querySelector("#taskDefinition"));
    let index = 0;
    let indexOpen = 0;
    let indexDone = 0;
    //function taskAmount
    function taskAmount() {
        document.querySelector("#taskAmount").innerHTML = String(index);
    }
    //function taskAdd
    function taskAdd() {
        index++;
        indexOpen++;
        taskAmount();
        document.querySelector("#taskOpenAmount").innerHTML = String(indexOpen);
        //adds list with input
        const toDoList = document.createElement("li");
        toDoList.classList.add("todotext");
        toDoList.innerHTML = toDoInput.value;
        //adds empty circle icon
        let circle = document.createElement("button");
        circle.classList.add("circle");
        circle.setAttribute("class", "far fa-circle");
        toDoList.appendChild(circle);
        //adds minus circle icon
        const taskRemove = document.createElement("button");
        taskRemove.classList.add("circleMinus");
        taskRemove.setAttribute("class", "fas fa-minus-circle");
        toDoList.appendChild(taskRemove);
        //appends list into HTML
        toDo.appendChild(toDoList);
        console.log(toDoList);
        //reverts value
        toDoInput.value = "";
        //click detection and mark as done toggle
        taskRemove.addEventListener("click", function () { toDo.removeChild(toDoList); index--; taskAmount(); });
        circle.addEventListener("click", function () {circle.classList.toggle("fa-dot-circle"); taskDone(); });
    }
    //adds function to enter key
    document.addEventListener("keydown", function (event) {
        if (event.keyCode == 13) {
            taskAdd();
        }
    });
    //whenever a new task is made, +1 to taskOpen. If click on checkcircle -> -1 to taskOpen and +1 to taskDone
    function taskDone() {
        indexDone++;
        indexOpen--;
        document.querySelector("#taskDoneAmount").innerHTML = String(indexDone);
        document.querySelector("#taskOpenAmount").innerHTML = String(indexOpen);
    }
    //next issue: when reverting task from done to open numbers need to change back somehow. Also when removing tasks entirely how do I remove the correctly assorted amount value?
});