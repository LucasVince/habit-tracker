const Habit = () => {
    return(
        <div className="bg-slate-50 p-5 rounded-lg bg-opacity-75 flex flex-col gap-5 shadow-lg min-w-56">
            <p className="text-2xl">Name</p>
            <button className="bg-green-500 w-8 h-8 flex items-center justify-center rounded-full" onClick={() => {}}>V</button>
            <div className="flex flex-col gap-2">
                <p>Progress:</p>
                <div className="p-1 bg-slate-300 w-full rounded-full">

                </div>
                <p className="text-xs font-semibold">0%</p>
            </div>
        </div>
    )
}

export default  Habit