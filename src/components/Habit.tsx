import React from 'react';
import { FaCheck } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";

interface HabitProps {
    name: string;
    progress: number;
    onDeleteHabit: () => void;
}

const Habit:React.FC<HabitProps> = ({name, progress, onDeleteHabit}) => {
    return(
        <div className="bg-slate-50 p-5 rounded-lg bg-opacity-75 flex flex-col gap-5 shadow-lg min-w-56">
            <p className="text-2xl text-center">{name}</p>
            <div className="flex justify-around">
                <button className="bg-green-500 hover:bg-green-800 text-white w-8 h-8 flex items-center justify-center rounded-full" onClick={() => {}}><FaCheck /></button>
                <button className="bg-red-500 hover:bg-red-800 text-white w-8 h-8 flex items-center justify-center rounded-full"
                onClick={
                    () => {
                        onDeleteHabit()
                    }
                    }><FaTrashAlt /></button>
            </div>
            <div className="flex flex-col gap-2">
                <p>Progress:</p>
                <div className="bg-slate-300 w-full rounded-full h-2">
                    <div className="bg-green-500 h-full rounded-full" style={{width: `${progress}%`}}></div>
                </div>
                <p className="text-xs font-semibold">{progress}%</p>
            </div>
        </div>
    )
}

export default  Habit