
const todoList=[{name:'asdf',dueDate:'22-08-2023'},{name:'zxcv',dueDate: '23-08-2023'}];
rendertodoList();
function rendertodoList(){
  let todoListHTML ='';
  for (i=0;i<todoList.length;i++)
  {const todoobject = todoList[i];
    const {name,dueDate} =todoobject;
    
    const html=`
      <div>${name}</div>
      <div>${dueDate}</div>
      <button onclick="todoList.splice(${i},1);
        rendertodoList();" class="delete-todo-button">
         DELETE</button>`;
    todoListHTML=todoListHTML+html;
    document.querySelector('.js-html').innerHTML=todoListHTML;
  }


  }
function addTodo(){
  const inputElement=document.querySelector
  ('.js-name-input');
  const name =inputElement.value;
  const DateElement =document.querySelector('.js-date-input');
  const dueDate =DateElement.value;
  todoList.push({name,dueDate});
  console.log(todoList);
  inputElement.value='';
  rendertodoList();
}