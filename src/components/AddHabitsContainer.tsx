const AddHabitsContainer = () => {
    return(
        <div className="bg-slate-50 p-5 rounded-lg bg-opacity-50 w-72 flex flex-col items-center gap-5 shadow-lg">
            <input className="p-1 rounded-lg outline-none shadow-lg" type="text" placeholder="Name" onChange={() => {}}/>
            <button className="bg-purple-800 w-32 p-1 rounded-md text-slate-50 shadow-lg" onClick={() => {}}>Add Habit</button>
        </div>
    )
}

export default AddHabitsContainer