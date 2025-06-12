import HabitsContainer from "./components/HabitContainer"
import AddHabitsContainer from "./components/AddHabitsContainer"
import React, {useEffect, useState} from 'react';

interface HabitsInterface {
  name: string;
  progress: number;
}

const App = () => {
  const [habits, setHabits] = useState<HabitsInterface[]>(JSON.parse(localStorage.getItem('habits') || '[]'));

  useEffect(() => {
    localStorage.setItem('habits', JSON.stringify(habits));
  }, [habits])

  const addHabit = (name: string) => {
    const newHabit: HabitsInterface = {
      name: name,
      progress: 0
    };
    setHabits([...habits, newHabit]);
  }

  return (
    <div className="w-screen h-screen bg-gradient-to-r from-purple-800 to-purple-400 flex flex-col items-center p-10 gap-20">
      <HabitsContainer listHabits={habits}/>
      <AddHabitsContainer onAddHabit={addHabit}/>
    </div>
  )
}

export default App