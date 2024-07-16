import AddTodo from "./components/AddTodo"
import Todos from "./components/Todos"

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-indigo-900 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-indigo-400 mb-8 shadow-text">
          Redux Toolkit Todo App
        </h1>
        <div className="bg-gray-800 rounded-lg shadow-xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-indigo-400 mb-4">Add New Todo</h2>
          <AddTodo />
        </div>
        <Todos />
      </div>
    </div>
  )
}

export default App;