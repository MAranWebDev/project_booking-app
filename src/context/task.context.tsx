'use client';

import { createContext, PropsWithChildren, useState } from 'react';

const initialState = [
  {
    id: 1,
    title: 'Task1',
    description: 'Texto de ejemplo para Task 1',
    completed: true,
  },
  {
    id: 2,
    title: 'Task2',
    description: 'Texto de ejemplo para Task 2',
    completed: false,
  },
  {
    id: 3,
    title: 'Task3',
    description: 'Texto de ejemplo para Task 3',
    completed: false,
  },
];

const TaskContext = createContext({});

export const TaskProvider = ({ children }: PropsWithChildren) => {
  const [tasks, setTasks] = useState(initialState);

  const createTask = ({
    title,
    description,
  }: {
    title: string;
    description: string;
  }) => {
    const newTask = { id: Date.now(), title, description, completed: false };
    setTasks([newTask, ...tasks]);
  };

  const updateTask = (
    id: number,
    updateTask: { title: string; description: string; completed: boolean },
  ) => {
    const { title, description, completed } = updateTask;

    return {
      title,
      description,
      completed,
      actualTasks: tasks.map((task) =>
        task.id == id ? { id, title, description, completed } : task,
      ),
    };
  };

  const deleteTask = (id: number) => {
    const newTasks = tasks.filter((task) => task.id != id);
    setTasks(newTasks);
  };

  return (
    <TaskContext.Provider value={{ createTask, updateTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};
