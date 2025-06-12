import React, { useState } from "react";

interface AddHabitsContainerProps {
    onAddHabit: (name: string) => void;
}

const AddHabitsContainer: React.FC<AddHabitsContainerProps> = ({ onAddHabit }) => {
    const [name, setName] = useState<string>("");

    const handleClickAddHabit = () => {
        if (name.trim() !== "") {
            onAddHabit(name);
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
