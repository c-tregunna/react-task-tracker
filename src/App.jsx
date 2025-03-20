import React, { useState } from 'react'
import Header from './Header.jsx'
import Nav from './Nav.jsx'
import AddTaskForm from './AddTaskForm.jsx'

function getPriority(priority) {
  switch (priority) {
    case 'High':
        return 'text-red-500';
    case 'Medium':
        return 'text-yellow-500';
    case 'Low':
        return 'text-green-500';
    default:
      return '';
  }
}

function TaskLisk(props) {
  const [color, setColor] = useState('bg-gray-50')
  const [text, setText] = useState('Complete')

  const updateColor = () => {
    if(color == 'bg-gray-50') {
      setColor('bg-green-500')
    } else {
      setColor('bg-gray-50')
    }
  }

  const updateText = () => {
    if(text == 'Complete') {
      setText("Task Completed!!")
    } else {
      setText("Complete")
    }
  }

  return (
      <div className='p-4 bg-slate-900 flex flex-col justify-between rounded-md shadow-[0px_1px_6px_#000] text-white hover:scale-[1.02] hover:duration-400 hover:ease-in-out'>
        <h3 className='text-center uppercase text-lg font-semibold mb-6'>{props.taskName}</h3>
        <span>Estimated Time: {props.timeToDo} mins</span>
        <span>Priority: <span className={getPriority(props.priority)}>{props.priority}</span></span>
        <p className='line-clamp-2 text-sm'>Description: {props.description}</p>
        <div className='flex justify-between gap-4 pt-4'>
          <button className="bg-gray-50 text-black py-2 px-4 text-xs md:w-1/2 mx-auto rounded-sm hover:cursor-pointer hover:bg-slate-600 hover:text-white transition-colors duration-200" >Details</button>
          <button className={`${color} text-black py-2 px-4 text-xs md:w-1/2 mx-auto rounded-sm hover:cursor-pointer hover:bg-slate-600 hover:text-white transition-colors duration-200`} onClick={() => {updateColor(); updateText()}}>
        {text}</button>
        </div>

      </div>
  )
}

function App() {
  const [tasks, setTasks] = useState( [
    {
        taskName: "Install React",
        timeToDo: 60,
        priority: "High",
        description: "This is a description of the task. Learn how to install react and get it running for your project",
        id: 1
    },
    {
        taskName: "Components",
        timeToDo: 90,
        priority: "High",
        description: "This is a description of the task. What is a component, how do you build them and how do you use them",
        id: 2
    },
    {
        taskName: "Props",
        timeToDo: 120,
        priority: "Medium",
        description: "This is a description of the task. What is a prop? What does it prop?",
        id: 3
    },
    {
        taskName: "Use with tailwind",
        timeToDo: 20,
        priority: "Low",
        description: "This is a description of the task. Get Tailwind working with a react project.",
        id: 4
    }
  ])
  const [nextTaskId, setNextTaskId] = useState(5)
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleAddTask = (taskName, timeToDo, priority, description) => {
    if (!taskName.trim()) return; // Don't add empty tasks
    
    setTasks(prevTasks => [
      ...prevTasks,
      {
        taskName,
        timeToDo,
        priority,
        description,
        id: nextTaskId
      }
    ])
    setNextTaskId(prevId => prevId + 1)
    setIsFormVisible(false) // Hide the form after submission
  }


  return (
    <>
      <Header onCreateTask={() => setIsFormVisible(true)} />
      <div className='flex flex-col md:flex-row font-main'>
        <Nav />

        <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:auto-rows-[250px] gap-10 p-10'>
        <AddTaskForm 
          isVisible={isFormVisible}
          addTask={handleAddTask} />
          {tasks.map(task =>
            <TaskLisk 
              taskName={task.taskName}
              timeToDo={task.timeToDo}
              priority={task.priority}
              description={task.description}
              key={task.id}
            />
          )}

        </div>
      </div>
    </>
  )
}

export default App
