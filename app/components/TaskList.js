import Task from './Task';

export default function TaskList({ tasks, toggleComplete, updateTask, deleteTask }) {
  if (tasks.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-8 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
        <svg className="w-12 h-12 text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
        </svg>
        <p className="text-center text-gray-500 font-medium">No tasks yet. Add one above!</p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 text-gray-700 border-b pb-2">Your Tasks ({tasks.length})</h2>
      <ul className="space-y-3">
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            toggleComplete={toggleComplete}
            updateTask={updateTask}
            deleteTask={deleteTask}
          />
        ))}
      </ul>
    </div>
  );
}