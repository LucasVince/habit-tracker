import React, { useState } from "react";

interface AddHabitsContainerProps {
    onAddHabit: (name: string, habitType: string) => void;
}

const AddHabitsContainer: React.FC<AddHabitsContainerProps> = ({ onAddHabit }) => {
    const [name, setName] = useState<string>("");
    const [habitType, setHabitType] = useState<string>("weekly");

    const handleClickAddHabit = () => {
        if (name.trim() !== "") {
            onAddHabit(name, habitType);
            setName("");
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    return (
        <div className="bg-slate-50 p-5 rounded-lg bg-opacity-50 w-72 flex flex-col items-center gap-5 shadow-lg">
        <input
            className="p-1 rounded-lg outline-none shadow-lg"
            value={name}
            type="text"
            placeholder="Name"
            onChange={handleChange}
        />
        <div className="flex gap-5">
            <label className="flex items-center gap-2 text-purple-800">
                <input
                type="radio"
                name="HabitType"
                value="weekly"
                checked={habitType === "weekly"}
                onChange={(e) => setHabitType(e.target.value)}
                />
                weekly
            </label>
            <label className="flex items-center gap-2 text-purple-800">
                <input
                type="radio"
                name="HabitType"
                value="monthly"
                checked={habitType === "monthly"}
                onChange={(e) => setHabitType(e.target.value)}
                />
                monthly
            </label>
        </div>
        <button
            className="bg-purple-800 w-32 p-1 rounded-md text-slate-50 shadow-lg"
            onClick={handleClickAddHabit}
        >
            Add Habit
        </button>
    </div>
    );
};

export default AddHabitsContainer;
