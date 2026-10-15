//your code here
let input = document.getElementById("newTodoInput");
let btn =document.getElementById("addTodoBtn");
let ol = document.getElementById("todoList")

const todo = []


btn.addEventListener(("click",()=>{

	todo.push(input.value.trim())

	if(todo === "")
		return;
	
	const li = document.createElement("li")
	li.textContent = todo
	ol.appendChild(li)

	input.value("")
}))
