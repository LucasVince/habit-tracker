import Habit from "./Habit"

const HabitsContainer = () => {
    return(
        <div className="bg-slate-50 p-5 rounded-lg bg-opacity-50 w-5/6 flex no-wrap items-center gap-5 overflow-x-auto shadow-lg">
            <Habit/>
            <Habit/>
            <Habit/>
            <Habit/>
            <Habit/>
        </div>
    )
}

export default  HabitsContainer