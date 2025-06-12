import React from "react";
import Habit from "./Habit"

interface HabitsContainerProps {
    listHabits: {
        name: string;
        progress: number;
    }[];
}

const HabitsContainer: React.FC<HabitsContainerProps> = ({listHabits}) => {
    return(
        <div className="bg-slate-50 p-5 rounded-lg bg-opacity-50 w-5/6 flex no-wrap items-center gap-5 overflow-x-auto shadow-lg">
            {listHabits.map((habit, index) => (
                <Habit key={index} name={habit.name} progress={habit.progress} />
            ))}
        </div>
    )
}

export default  HabitsContainer