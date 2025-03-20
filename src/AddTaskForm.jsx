import React, { useState } from "react"

export default function AddTaskForm({isVisible, addTask}) {
    const[value, setValue] = useState("")
    const [time, setTime] = useState("")
    const [priority, setPriority] = useState("Low")

    const handleSubmit = (e) => {
        // console.log(value, priority)
        e.preventDefault()
        addTask(value, parseInt(time) || 0, priority) // Convert time to number, default to 0 if empty
        setValue("") // Clear the inputs after submission
        setTime("")
        setPriority("")
    }

    return (
        <form className={`flex-col md:flex-row md:col-span-2 lg:col-span-3 justify-between border border-black rounded-md shadow-sm w-11/12 md:w-full mx-auto my-auto p-4 gap-4 md:h-[80px] ${isVisible ? 'flex' : 'hidden'}`} onSubmit={(e) => handleSubmit(e)}>
            <input 
                type="text"
                value={value}
                placeholder="What's your task?"
                className="border border-black w-full px-4 py-3 md:py-0"
                onChange={(e) => setValue(e.target.value)}
            />
            <input 
                type="number"
                value={time}
                placeholder="Estimated time in minutes"
                className="border border-black w-full px-4 py-3 md:py-0"
                onChange={(e) => setTime(e.target.value)}
            />
            <select className="border border-black w-full px-4 py-3 md:py-0"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}>
                <option disabled>Whats the task priority</option>
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
            </select>
            <input 
                type="submit"
                value="Add task"
                className="border border-black w-full px-4 bg-slate-900 text-white md:w-100 hover:bg-slate-600 hover:cursor-pointer transition-colors duration-200 uppercase py-3 md:py-0"
            />
        </form>
    )
}