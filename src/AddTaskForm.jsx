import React, { useState } from "react"

export default function AddTaskForm({isVisible, addTask}) {
    const[value, setValue] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(value)
        setValue("") // Clear the input after submission
    }

    return (
        <form className={`flex-col md:flex-row md:col-span-2 lg:col-span-3 justify-between border border-black rounded-md shadow-sm w-11/12 md:w-full mx-auto mt-4 p-4 gap-4 md:h-[80px] ${isVisible ? 'flex' : 'hidden'}`} onSubmit={(e) => handleSubmit(e)}>
            <input 
                type="text"
                value={value}
                placeholder="What's your task?"
                className="border border-black w-full px-4"
                onChange={(e) => setValue(e.target.value)}
            />
            <input 
                type="text"
                placeholder="Estimated time in minutes"
                className="border border-black w-full px-4"
            />
            <select className="border border-black w-full px-4">
                <option disabled>Whats the task priority</option>
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
            </select>
            <input 
                type="submit"
                value="Add task"
                className="border border-black w-full px-4"
            />
        </form>
    )
}