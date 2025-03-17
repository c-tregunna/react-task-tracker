import reactLogo from './assets/react.svg'

export default function Header() {
    return (
        <header className='flex flex-col md:flex-row w-screen bg-black text-white text-4xl px-8 py-12 items-center justify-between'>
            <div className='flex items-center flex-col md:flex-row'>             
                <h1 className='uppercase font-main font-extrabold text-lg md:text-3xl'>Stride into React</h1>
                <img src={reactLogo} alt="react logo" className='md:ml-10 w-12'/>
            </div>
            <button className='text-sm bg-gray-50 text-black px-4 py-2 rounded-sm justify-self-end mt-6 md:mt-0 hover:bg-slate-400 hover:text-white hover:cursor-pointer transition-colors duration-200'>Create Task</button>
        </header>
    )
}