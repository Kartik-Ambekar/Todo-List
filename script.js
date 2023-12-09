let todoList = [{
    name: 'youtube',
    date: '2023-11-01'
}];
insertElement()

function enter() {
    if (event.key === 'Enter') {
        addArray()
    }
}

function addArray() {
    let taskElement = document.getElementById('1').value;
    let taskDate = document.getElementById('2').value;
    if (taskElement !== '') {
        todoList.push({
            name: taskElement,
            date: taskDate
        });
        document.getElementById('1').value = '';
        insertElement()
    }
}

function insertElement() {
    let paraString = '';
    for (let i = 0; i < todoList.length; i++) {
        let todo = todoList[i];
        let {
            name,
            date
        } = todo;
        let html = `<div>${name}</div><div>${date}</div><button class="button-delete" onclick="deleteItem(${i})">Delete</button>`;
        paraString += html;
    }
    document.querySelector(".todoDisplay").innerHTML = paraString;
}

function deleteItem(index) {
    todoList.splice(index, 1);
    insertElement();
}
