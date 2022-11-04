class todoservice {
  todo_data = {
    todo: [
      {
        title: "T1",
        description: "D1",
        done: false,
      },
      {
        title: "T1",
        description: "D1",
        done: false,
      },
      {
        title: "T2",
        description: "D2",
        done: true,
      },
      {
        title: "T1",
        description: "D1",
        done: false,
      },
    ],
  };
  constructor() {
    this.todos = this.todo_data;
  }

  get_todos() {
    return this.todos;
  }

  add_todo(todo) {
    this.todos.todo.push(todo);
    console.log("appended todo: " + todo);
    console.log("updated todos- " + this.todos.todo);
    return this.todos.todo.length;
  }

  delete_todo(id) {
    let todo = this.todos.todo;
    let size = todo.length;
    let index = -1;
    for(let i=0; i<size; i++){
        if(todo[i].title = id){
            index = i; break;
        }else if(todo[i].description = id){
            index = i; break;
        }else if(todo[i].done = id){
            index = i; break;
        }
    }
    if (index > -1) {
      this.todos.todo.splice(index, 1);
    }
    return this.todos.todo.length;
  }

  update_todo(id, todo) {
    this.todos.todo[id] = todo;
    return this.todos.todo[id];
  }
}

module.exports = todoservice;
