import { useState } from 'react'
import Header from './Header.jsx'
import Nav from './Nav.jsx'

const tasks = [
  {
      taskName: "Install React",
      timeToDo: 60,
      priority: "High",
      id: 1
  },
  {
      taskName: "Components",
      timeToDo: 90,
      priority: "High",
      id: 2
  },
  {
      taskName: "Props",
      timeToDo: 120,
      priority: "Medium",
      id: 3
  },
  {
      taskName: "Use with tailwind",
      timeToDo: 20,
      priority: "Low",
      id: 4
  }
]

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
        <button className={`${color} text-black py-2 px-4 text-xs md:w-1/2 mx-auto rounded-sm hover:cursor-pointer`} onClick={() => {updateColor(); updateText()}}>
        {text}</button>
      </div>
  )
}

function App() {
  return (
    <>
      <Header />
      <div className='flex flex-col md:flex-row font-main'>
        <Nav />
        <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[200px] gap-10 p-10'>
          {tasks.map(task =>
            <TaskLisk 
              taskName={task.taskName}
              timeToDo={task.timeToDo}
              priority={task.priority}
              key={task.id}
            />
          )}
        </div>
      </div>
    </>
  )
}

export default App
