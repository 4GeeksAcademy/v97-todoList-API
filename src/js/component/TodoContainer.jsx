import React, { useState, useContext } from "react";
import Todo from "./Todo.jsx";
import { Context } from "../Context.jsx";

export default function TodoContainer() {
  const [userInput, setUserInput] = useState("");
  const { todoList, setTodoList } = useContext(Context);

  const onChangeHandler = (event) => {
    const { value } = event.target;
    console.log(value);
    setUserInput(event.target.value);
  };

  // const changeHandler = (arr) => {

  //   if (arr.length === 0) {
  //    return <Todo todo = "No tasks, add a task"/>
  //   } else {
  //     return todoList.map((todo, index) => (
  //       <Todo key={index} index={index} todo={todo} removeTodo={removeTodo} />
  //     ))
  //   }
  // };

  const removeTodo = (key) => {
    setTodoList(todoList.filter((list, index) => index !== key));

    return console.log(todoList);
  };

  // [...] spread operator , creat copy of the element

  const addTodoHandler = (event) => {
    event.preventDefault();
    if (event.key === "Enter") {
      setTodoList([...todoList, userInput]);
      setUserInput("");
    }
  };

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          value={userInput}
          onChange={onChangeHandler}
          onKeyUp={addTodoHandler}
          required
          placeholder="What need to be done?"
        />
      </form>

      {/* {changeHandler(todoList)} */}
      
      {todoList.map((todo, index) => (
        <Todo key={index} index={index} todo={todo} removeTodo={removeTodo} />
      ))}
      <p id="itemsLeft">{todoList.length} items left</p>
    </>
  );
}
