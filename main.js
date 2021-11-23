const getS = selector => document.querySelector(selector);

// start function edit area

function btnEdit() {
    getS('.edit-block').classList.add('show');
    getS('.style-block').classList.remove('show');
    getS('.edit-area').value = getS('.top-block').innerHTML;
}

// start function save from edit area

function btnSave() {
    getS('.edit-block').classList.remove('show');
    getS('.top-block').innerHTML = getS('.edit-area').value;
}

// start function style area

function btnStyle() {
    getS('.style-block').classList.add('show');
    getS('.edit-block').classList.remove('show');
}

/* start function font size */

function fontSize() {
    getS('.top-block').style.fontSize = event.target.value;
}

/* start function font family */

function changeFamily() {
    let fF = document.getElementById('fontFamily');
    getS('.top-block').style.fontFamily = fF.value;
}

/* start function text color */

function textColor(){
    getS('.colors').classList.remove('hide');
    let colors = ['red', 'green', 'blue', 'yellow', 'pink', 'gray', 'black', 'white', 'deeppink'];
    for (let i = 0; i < getS('.colors').children.length; i++) {
        getS('.colors').children[i].style.backgroundColor = colors[i];
        getS('.colors').children[i].onclick = function(){
            getS('.top-block').style.color = this.style.backgroundColor;
            getS('.colors').classList.add('hide');
        }
    }
}

/* start function background color */

function backgroundColor(){
    getS('.colors').classList.remove('hide');
    let colors = ['red', 'green', 'blue', 'yellow', 'pink', 'gray', 'black', 'white', 'deeppink'];
    for (let i = 0; i < getS('.colors').children.length; i++) {
        getS('.colors').children[i].style.backgroundColor = colors[i];
        getS('.colors').children[i].onclick = function(){
            getS('.top-block').style.backgroundColor = this.style.backgroundColor;
            getS('.colors').classList.add('hide');
        }
    }
}

/* start function bold style */

function fontWeight(){
    if(event.target.checked){
        getS('.top-block').classList.add('bold');
    }
    else{
        getS('.top-block').classList.remove('bold');
    }
}

/* start function cursive style */

function fontCursive(){
    if(event.target.checked){
        getS('.top-block').classList.add('cursive');
    }
    else{
        getS('.top-block').classList.remove('cursive');
    }
}

/* start function show container whith add table & list */

function addChoose(){
    getS('.first').classList.remove('show');
    getS('.second').classList.add('show');
}

/* start function add list area*/

function addList() {
    getS('.create-table').classList.add('hide');
    getS('.create-list').classList.remove('hide');
}

/* start function add table area*/

function addTable() {
    getS('.create-table').classList.remove('hide');
    getS('.create-list').classList.add('hide');
}

/* start function create and add new list*/

function createList(){
    getS('.create-list').classList.add('hide');
    const list = document.forms['form-list'];
    const countLi = list.count.value;
    const typeLi = list.type.value;
    getS('.edit-area').value += `<ul class="addUl" style="list-style-type: ${typeLi}">`;
    for(let i=0; i<countLi; i++){
        getS('.edit-area').value += `<li>item ${i+1}</li>`;
    }
    getS('.edit-area').value += '</ul>';
    getS('.first').classList.add('show');
    getS('.second').classList.remove('show');
}

/* start function create and add new table*/

function createTable() {
    getS('.create-table').classList.add('hide');
    const table = document.forms['form-table'];
    getS('.edit-area').value += `<table>`;
    for (j=0; j<table[0].value; j++) {
        getS('.edit-area').value += `<tr>`;
        for (k=0; k<table[1].value; k++) {
            getS('.edit-area').value += `<td style="width: ${table[2].value}px; height: ${table[3].value}px; border: ${table[4].value}px ${table[5].value} ${table[6].value};">TD</td>`;
        }
        getS('.edit-area').value += `</tr>`;
    }
    getS('.edit-area').value += `</table>`;
    getS('.first').classList.add('show');
    getS('.second').classList.remove('show');
}