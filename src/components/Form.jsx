import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createToDo } from "../redux/actions";

const Form = (props) => {
  const dispatch = useDispatch();

  const initialState = {
    text: "",
    complete: false,
  };

  const [form, setForm] = useState(initialState);

  const [id, setId] = useState(0);

  const changeHandler = (event) => {
    setForm({
      ...form,
      text: event.target.value,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(createToDo({ ...form, id }));
    setForm(initialState);
    setId(id + 1);
  };

  return (
    <>
      <h1>Create Task</h1>
      <form onSubmit={submitHandler}>
        <label>New Task: </label>
        <input
          type="text"
          value={form.text}
          placeholder="Write a task..."
          onChange={changeHandler}
        />
        <button type="submit">Add Task</button>
      </form>
    </>
  );
};

export default Form;
