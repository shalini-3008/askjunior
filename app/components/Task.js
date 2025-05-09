import { useState } from 'react';

export default function Task({ task, toggleComplete, updateTask, deleteTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleUpdate = () => {
    if (editedTitle.trim()) {
      updateTask(task.id, editedTitle);
      setIsEditing(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleUpdate();
    } else if (e.key === 'Escape') {
      setEditedTitle(task.title);
      setIsEditing(false);
    }
  };

  return (
    <li className={`bg-white p-4 rounded-lg shadow-md border-l-4 ${task.completed ? 'border-green-500' : 'border-blue-500'} transition-all hover:shadow-lg`}>
      <div className="flex items-center justify-between">
        {isEditing ? (
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            onBlur={handleUpdate}
            onKeyDown={handleKeyDown}
            className="flex-grow p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            autoFocus
          />
        ) : (
          <div className="flex items-center flex-grow">
            <div className="relative inline-block h-5 w-5 mr-3">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleComplete(task.id)}
                className="opacity-0 absolute h-5 w-5 cursor-pointer"
                id={`checkbox-${task.id}`}
              />
              <div className={`border-2 rounded h-5 w-5 ${task.completed ? 'bg-green-500 border-green-500' : 'border-gray-400'} transition-colors`}>
                {task.completed && (
                  <svg className="h-4 w-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
            </div>
            <span
              className={`text-gray-800 font-medium ${
                task.completed ? 'line-through text-gray-500' : ''
              } transition-all`}
            >
              {task.title}
            </span>
          </div>
        )}
        {!isEditing && (
          <div className="flex space-x-1">
            <button
              onClick={handleEdit}
              className="text-blue-600 hover:text-blue-800 p-1 rounded hover:bg-blue-50 transition-colors"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </button>
            <button
              onClick={() => deleteTask(task.id)}
              className="text-red-600 hover:text-red-800 p-1 rounded hover:bg-red-50 transition-colors"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </li>
  );
}