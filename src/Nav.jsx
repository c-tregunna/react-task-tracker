export default function Nav() {
    return (
        <nav className="w-screen md:w-50 h-10 md:h-screen bg-black text-white font-bold text-center md:pt-10 flex items-center justify-around md:flex-col md:justify-normal">
            <div className="md:mb-6 text-lg hover:underline hover:cursor-pointer">Tasks to do</div>
            <div className="md:mb-6 text-lg hover:underline hover:cursor-pointer">In progress</div>
            <div className="md:mb-6 text-lg hover:underline hover:cursor-pointer">Completed</div>
        </nav>
    )
}