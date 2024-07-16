import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todoSlice';

const AddTodo = () => {
  const [todoText, setTodoText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoText.trim()) {
      dispatch(addTodo(todoText));
      setTodoText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 mb-8">
      <div className="flex items-center bg-gray-800 shadow-lg rounded-lg overflow-hidden">
        <input
          className="appearance-none bg-transparent border-none w-full text-gray-300 py-3 px-4 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500"
          type="text"
          placeholder="Add a new todo..."
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
        <button
          className="flex-shrink-0 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-r focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:scale-105"
          type="submit"
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default AddTodo;