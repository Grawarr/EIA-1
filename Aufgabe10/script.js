//I have no idea why the notes disappear almost immediately after hitting enter key... if you just press enter without typing text everything works as intended; Buttons included. Since the text does show up for a split second I am guessing I coded in some function that deletes it automatically in sort of a loop by accident. No idea tho. I hope this suffices for now. Last time I forgot to link this script in the HTML so no wonder I got frustrated.
//read everything first
window.addEventListener("load", function () {
    //variables
    var toDo = document.querySelector("ul");
    var toDoInput = document.querySelector("#taskDefinition");
    var index = 0;
    var indexOpen = 0;
    var indexDone = 0;
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
        var toDoList = document.createElement("li");
        toDoList.classList.add("todotext");
        toDoList.innerHTML = toDoInput.value;
        //adds empty circle icon
        var circle = document.createElement("button");
        circle.classList.add("circle");
        circle.setAttribute("class", "far fa-circle");
        toDoList.appendChild(circle);
        //adds minus circle icon
        var taskRemove = document.createElement("button");
        taskRemove.classList.add("circleMinus");
        taskRemove.setAttribute("class", "fas fa-minus-circle");
        toDoList.appendChild(taskRemove);
        //appends list into HTML
        toDo.appendChild(toDoList);
        console.log(toDoList);
        //reverts value
        toDoInput.value = "";
        //properly sorted counting when marking tasks as done or open and when deleting them.
        taskRemove.addEventListener("click", function () {
            toDo.removeChild(toDoList);
            index--;
            taskAmount();
            if (circle.classList.contains("fa-dot-circle")) {
                indexDone--;
                document.querySelector("#taskAmount").innerHTML = String(index);
                document.querySelector("#taskDoneAmount").innerHTML = String(indexDone);
            }
            else {
                indexOpen--;
                document.querySelector("#taskAmount").innerHTML = String(index);
                document.querySelector("#taskOpenAmount").innerHTML = String(indexOpen);
            }
        });
        circle.addEventListener("click", function () {
            circle.classList.toggle("fa-dot-circle");
            if (circle.classList.contains("fa-dot-circle")) {
                indexDone++;
                indexOpen--;
                document.querySelector("#taskDoneAmount").innerHTML = String(indexDone);
                document.querySelector("#taskOpenAmount").innerHTML = String(indexOpen);
            }
            else {
                indexDone--;
                indexOpen++;
                document.querySelector("#taskDoneAmount").innerHTML = String(indexDone);
                document.querySelector("#taskOpenAmount").innerHTML = String(indexOpen);
            }
        });
    }
    //adds function to enter key
    document.addEventListener("keydown", function (event) {
        if (event.keyCode == 13) {
            taskAdd();
        }
    });
});
//# sourceMappingURL=script.js.map