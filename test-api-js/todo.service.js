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
    let index = this.todos.todo.indexOf(id)
    if(index>-1){
        this.todos.todo.splice(index, 1);
    }
    return this.todos.todo.length;
  }

  update_todo(id, todo) {
    // Your code here
  }
}

module.exports = todoservice;
