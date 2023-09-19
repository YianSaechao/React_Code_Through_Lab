import React from "react";
import Todo from "..";


import { jsxDEV as _jsxDEV, Fragment as _Fragment } from "react/jsx-dev-runtime";


function TodoList({ todos, addTodo, completeTodo, editTodoText, deleteTodo }) {
  return (
    <div>
      <h1>Create Todo</h1>
      <input
        type="text"
        onKeyDown={(e) => {
          if (e.key === "Enter") addTodo(e);
        }}
      />
      {todos.length ? (
        <>
          <h1>Todo Items</h1>
          <ul className="todolist">
            {todos
              .filter((i) => !i.completed)
              .map((todo) => (
                <Todo
                  key={todo.id}
                  todo={todo}
                  completeTodo={completeTodo}
                  editTodoText={editTodoText}
                  deleteTodo={deleteTodo}
                />
              ))}
          </ul>
          <h1>Completed Items</h1>
          <ul className="todolist">
            {todos
              .filter((i) => i.completed)
              .map((todo) => (
                <Todo
                  key={todo.id}
                  todo={todo}
                  completeTodo={completeTodo}
                  editTodoText={editTodoText}
                  deleteTodo={deleteTodo}
                />
              ))}
          </ul>
        </>
      ) : (
        <h1>No Todos Added Yet</h1>
      )}
    </div>
  );
}

export default TodoList;


