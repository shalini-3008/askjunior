'use client';
import { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

export default function Home() {
  // State for tasks
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Load tasks from localStorage on initial render
  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    } else {
      // Set some example tasks if none exist
      const initialTasks = [
        { id: '1', title: 'Learn Next.js', completed: false },
        { id: '2', title: 'Build a CRUD app', completed: false },
      ];
      setTasks(initialTasks);
      localStorage.setItem('tasks', JSON.stringify(initialTasks));
    }
    setIsLoading(false);
  }, []);

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks, isLoading]);

  // Create a new task
  const addTask = (title) => {
    const newTask = {
      id: Date.now().toString(),
      title,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  // Read tasks - already handled by state

  // Update task completion status
  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Update task title
  const updateTask = (id, newTitle) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, title: newTitle } : task
      )
    );
  };

  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  if (isLoading) return <div className="flex justify-center items-center h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
  </div>;

  return (
    <main className="max-w-lg mx-auto p-6 bg-black rounded-xl shadow-lg mt-10">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Task Manager</h1>
      <TaskForm addTask={addTask} />
      <TaskList
        tasks={tasks}
        toggleComplete={toggleComplete}
        updateTask={updateTask}
        deleteTask={deleteTask}
      />
    </main>
  );
}
