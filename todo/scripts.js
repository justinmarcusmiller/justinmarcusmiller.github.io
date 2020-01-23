const clear = document.querySelector(".button-refresh");
const dateElement = document.getElementById('date');
const list = document.getElementById("list");
const input = document.getElementById("input");
const add = document.querySelector(".add-circle");

const CHECK = "circle-checked";
const UNCHECK = "circle-empty";
const LINE_THROUGH = "lineThrough";

let LIST = [];
let id = 0;

// get item from localstorage
let data = localStorage.getItem("TODO");

if(data){
    LIST = JSON.parse(data);
    id = LIST.length;
    loadList(LIST);
} else{
    LIST = [];
    id = 0;
}

function loadList(array){
    array.forEach(function(item){
        addToDo(item.name, item.id, item.done, item.trash);
    });
}

//clear
clear.addEventListener("click", function(){
    localStorage.clear();
    location.reload();
})

const options = {weekday : "long", month:"short", day:"numeric"};
const today = new Date();

dateElement.innerHTML = today.toLocaleDateString("en-US", options);

function addToDo(toDo, id, done, trash){

    if(trash){return; }

    const DONE = done ? CHECK : UNCHECK;
    const LINE = done ? LINE_THROUGH : "";

    const item = `<li class="item">
                    <i class="${DONE}" job="complete" id=${id}></i>
                    <p class="text ${LINE}">${toDo}</p>
                    <i class="button-trash" job="delete" id=${id}></i>
                </li>
    `;

    const position = "beforeend";

    list.insertAdjacentHTML(position, item);

}

add.addEventListener("click", function(event){
    const toDo = input.value;
    if(toDo){
        addToDo(toDo, id, false, false);
        LIST.push({
            name : toDo,
            id : id,
            done : false,
            trash : false
        });

        id++;
    }
    input.value = "";
})

// add item when enter pressed

input.addEventListener('keyup',function(event){

    if(event.keycode == 13 || event.which == 13){
        const toDo = input.value;

        if(toDo){
            addToDo(toDo, id, false, false);
            LIST.push({
                name : toDo,
                id : id,
                done : false,
                trash : false
            });

            id++;
        }
        input.value = "";
    }

});


// complete to do
function completeToDo(element){
    element.classList.toggle(CHECK);
    element.classList.toggle(UNCHECK);
    element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);

    LIST[element.id].done = LIST[element.id].done ? false : true;
}

// remove to do
function removeToDo(element){
    element.parentNode.parentNode.removeChild(element.parentNode);

    LIST[element.id].trash = true;
}

// target the items

list.addEventListener("click", function(event){
    const element = event.target;
    const elementJob = element.attributes.job.value; 

    if(elementJob == "complete"){
        completeToDo(element);
    } else if(elementJob == "delete"){
        removeToDo(element);
    }

    localStorage.setItem("TODO", JSON.stringify(LIST));
});