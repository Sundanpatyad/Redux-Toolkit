import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo, updateTodo } from '../features/todoSlice';

const Todos = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState('');

  const handleEdit = (todo) => {
    setEditId(todo.id);
    setEditText(todo.text);
  };

  const handleUpdate = () => {
    if (editText.trim()) {
      dispatch(updateTodo({ id: editId, text: editText }));
      setEditId(null);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 bg-gray-900 p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-indigo-400">Todos</h2>
      {todos.length === 0 ? (
        <p className="text-gray-400 text-center">No todos yet. Add one above!</p>
      ) : (
        <ul className="bg-gray-800 shadow-lg rounded-lg overflow-hidden">
          {todos.map((todo) => (
            <li key={todo.id} className="border-b border-gray-700 last:border-b-0 group">
              <div className="px-4 py-3 flex items-center justify-between hover:bg-gray-700">
                {editId === todo.id ? (
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    className="flex-grow mr-2 px-2 py-1 border rounded bg-gray-600 text-white"
                    onBlur={handleUpdate}
                    onKeyPress={(e) => e.key === 'Enter' && handleUpdate()}
                  />
                ) : (
                  <p className="text-gray-300 flex-grow">{todo.text}</p>
                )}
                <div className="flex">
                  <button
                    onClick={() => editId === todo.id ? handleUpdate() : handleEdit(todo)}
                    className={`px-2 py-1 rounded-full focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                      editId === todo.id ? 'bg-green-600 hover:bg-green-700 focus:ring-green-500' : 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500'
                    }`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path d={editId === todo.id ? "M5 13l4 4L19 7" : "M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"} />
                    </svg>
                  </button>
                  <button
                    onClick={() => dispatch(removeTodo(todo.id))}
                    className="ml-2 px-2 py-1 bg-red-600 text-white rounded-full hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Todos;