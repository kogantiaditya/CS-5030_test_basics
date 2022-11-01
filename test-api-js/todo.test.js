var todoservice = require("./todo.service.js");
describe("todo test suite", () => {
  test("truth_value", () => {
    expect(true).toBe(true);
  });

  let todo_service = new todoservice();

  test("if service instance is created", () => {
    expect(todo_service instanceof todoservice).toBe(true);
  });

  // Initial length of the todo list is 3 // 3 default tasks
  test("get_todos", () => {
    expect(todo_service.get_todos().todo.length).toEqual(3);
  });

  // Write all your test cases here that corresponds to software requirements
});

// Testing Addition

describe("testing add functiolity", () => {
  let todoService1 = new todoservice();
  let oldLength = todoService1.get_todos().todo.length;
  test("Add instance", () => {
    expect(
      todoService1.add_todo({
        title: "append_test1_title1",
        description: "append_test1_description1",
        done: true,
      })
    ).toBe(oldLength + 1);
  });
});
