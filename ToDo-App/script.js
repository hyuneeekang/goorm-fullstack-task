/*
생성: 데이터(객체) 만듦 => 데이터로 요소 만듦 => 요소를 Html 코드에 배치해 화면 노출
삭제: 데이터(객체) 삭제 => 요소 삭제
로컬 스토리지에 저장(string 변환)
로컬 스토리지에서 가져오기(parse) => 가져온 데이터로 요소 만듦 => 요소를 Html 코드에 배치해 화면 노출
*/

const createBtn = document.querySelector('.btn-create');
const list = document.querySelector('.todo-list');

let todos = [];

createBtn.addEventListener('click', createNewTodo);


function createNewTodo(){
    //새로운 아이템 객체 생성
    const item = {
        id: new Date().getTime(),
        text: '',
        complete: false
    }
    // 배열 첫  번째 아이템 추가 
    todos.unshift(item);
    

    // 요소 생성하기
    const {newItem, newItem_text, newItem_btn_edit, newItem_btn_delete} = createTodoElement(item);

    list.prepend(newItem); //list 자식 노드에 추가
    newItem_text.focus(); //텍스트박스 자동 포커스

    saveToLocalStorage(); //로컬 스토리지에 저장
}

function createTodoElement(item){
    let newItem = document.createElement('div');
    newItem.setAttribute('class', 'todo-item');

    let newItem_checkbox = document.createElement('input');
    newItem_checkbox.setAttribute('class', 'checkbox');
    newItem_checkbox.type= 'checkbox';
    newItem_checkbox.checked = item.complete;
    if(item.complete){
        newItem.classList.add('complete');
    }

    let newItem_text = document.createElement('input');
    newItem_text.type = 'text';
    newItem_text.setAttribute('class', 'text');
    newItem_text.value = item.text;
    newItem_text.disabled = false;

    let newItem_buttons = document.createElement('div');
    newItem_buttons.setAttribute('class','item-buttons');

    let newItem_btn_edit = document.createElement('button');
    newItem_btn_edit.innerText = 'edit';
    newItem_btn_edit.setAttribute('class', 'btn-edit');
    newItem_btn_edit.classList.add('material-icons');
    let newItem_btn_delete = document.createElement('button');
    newItem_btn_delete.innerText = 'remove_circle';
    newItem_btn_delete.setAttribute('class','btn-delete');
    newItem_btn_delete.classList.add('material-icons');

    newItem_buttons.append(newItem_btn_edit);
    newItem_buttons.append(newItem_btn_delete);
    newItem.append(newItem_checkbox);
    newItem.append(newItem_text);
    newItem.append(newItem_buttons);
    // list.appendChild(newItem);


    // 텍스트박스에 문자 입력할 때 text 값을 Todo 아이템에 저장
    newItem_text.addEventListener('input', () =>{
        item.text = newItem_text.value;
    })

    //체크박스 체크하면 complete 토글
    newItem_checkbox.addEventListener('change',() => {
        item.complete = newItem_checkbox.checked;
        if(item.complete){
            newItem.classList.add('complete');
        } else{
            newItem.classList.remove('complete');
        }
        saveToLocalStorage();

    })

    // 아이템 생성 > 텍스트 입력 > 외부 영역 클릭하면 텍스트박스 disabled
    newItem_text.addEventListener('blur',() =>{
        newItem_text.disabled = true;
        saveToLocalStorage(); //로컬 스토리지에 저장
    })
    // Edit 버튼 
    newItem_btn_edit.addEventListener('click',() =>{
        newItem_text.disabled = false;
        newItem.focus();
    })
    // delete 버튼
    newItem_btn_delete.addEventListener('click', () => {
        todos = todos.filter(t => t.id !== item.id);
        newItem.remove();
        saveToLocalStorage(); //로컬 스토리지에 저장
    })
        

    return {newItem, newItem_text, newItem_btn_edit, newItem_btn_delete};
}

// 만든 리스트 로컬 스토리지에 저장하기 => 새로고침 해도 데이터 유지하기 위함
function saveToLocalStorage(){
    //로컬 스토리지에 저장하기 위해서 string 타입으로 변환
    const data = JSON.stringify(todos);
    localStorage.setItem('my_todos', data); //key: my_todos, value: data
}

// 로컬 스토리지에서 데이터 가져오기
function loadFromLocalStorage(){ 
    const data = localStorage.getItem('my_todos');
    if(data){
        todos = JSON.parse(data);
    }
}

//로컬 스토리지에서 가져온 데이터로 요소 만들고 화면에 노출하기
function displayTodos(){
    loadFromLocalStorage();
    for(i=0 ; i<todos.length ; i++){
        const item = todos[i];
        const { newItem } = createTodoElement(item);
        list.append(newItem);
    }
}
displayTodos();