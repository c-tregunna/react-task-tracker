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
  return (
      <div className='p-4 bg-slate-900 flex flex-col rounded-md shadow-[0px_1px_6px_#000] text-white hover:scale-[1.02] hover:duration-400 hover:ease-in-out'>
        <h3 className='text-center uppercase text-lg font-semibold mb-10'>{props.taskName}</h3>
        <span className='mb-2'>Estimated Time: {props.timeToDo} mins</span>
        <span>Priority: <span className={getPriority(props.priority)}>{props.priority}</span></span>
      </div>
  )
}

function App() {

  return (
    <>
      <Header />
      <div className='flex flex-col md:flex-row font-main'>
        <Nav />
        <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[170px] gap-10 p-10'>
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
