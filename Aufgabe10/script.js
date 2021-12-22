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
    //Artyom Integration
    this.window.addEventListener("click", function () {
        var artyom = new Artyom();
        function startContinuousArtyom() {
            artyom.fatality();
            setTimeout(function () {
                lang: "en-EN",
                    continuous;
                true,
                    listen;
                true,
                    interimResults;
                true,
                    debug;
                true;
            }).then(function () {
                console.log("Ready!");
            });
        }
        250;
    });
    startContinuousArtyom();
    Artyom.addCommands({
        indexes: ["T0-D0, please add * to the List"],
        smart: true,
        action: function (i, wildcard) {
            addTask(wildcard);
            alert("Test");
        },
        document: document,
        : .querySelector("#mic").addEventListener("click", function () {
            startContinuousArtyom();
        })
    });
});
//I had severe difficulties testing any of the Artyom stuff. I hope this works on other PCs.
//# sourceMappingURL=script.js.map