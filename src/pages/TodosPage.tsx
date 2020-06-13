import React, { useState, useEffect } from "react";
import Form from "../components/Form";
import TodoList from "../components/TodoList";
import ITodo from "../interfaces/todo";

const TodosPage: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem("todos") || "[]"));
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addHandler = (title: string) => {
    const newTodo = {
      id: Date.now(),
      title,
      completed: false,
    };
    setTodos([newTodo, ...todos]);
  };

  const toggleHandler = (id: number) => {
    setTodos((prev) => [
      ...prev.map((todo) => {
        if (todo.id === id) todo.completed = true;
        return todo;
      }),
    ]);
  };

  const removeHandler = (id: number) => {
    setTodos((prev) => [...prev.filter((todo) => todo.id !== id)]);
  };
  return (
    <>
      <Form onAdd={addHandler} />
      <TodoList
        todos={todos}
        onToggle={toggleHandler}
        onRemove={removeHandler}
      />
    </>
  );
};

export default TodosPage;
