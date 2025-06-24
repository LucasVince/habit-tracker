import HabitsContainer from "./components/HabitContainer"
import AddHabitsContainer from "./components/AddHabitsContainer"
import {useEffect, useState} from 'react';

interface HabitsInterface {
  name: string;
  progress: number;
  completedDays?: boolean[];
  habitType: string;
}

const App = () => {
  const [habits, setHabits] = useState<HabitsInterface[]>(JSON.parse(localStorage.getItem('habits') || '[]'));

  useEffect(() => {
    localStorage.setItem('habits', JSON.stringify(habits));
  }, [habits])

  const addHabit = (name: string, habitType: string) => {
    const newHabit: HabitsInterface = {
      name: name,
      progress: 0,
      completedDays: habitType === 'weekly' ? Array(7).fill(false) : Array(30).fill(false),
      habitType: habitType,
    };
    setHabits([...habits, newHabit]);
  }

  const deleteHabit = (index: number) => {
    const newHabits = habits.filter((_habit, filterIndex) => filterIndex !== index);
    setHabits(newHabits);
  }

  const completeHabit = (index: number, day: number) => {
    setHabits(prevHabits => {
      const updatedHabits = [...prevHabits];
      const habit = updatedHabits[index];

      
      const updatedCompletedDays = habit.completedDays ? [...habit.completedDays] : habit.habitType === 'weekly'? Array(7).fill(false) : Array(30).fill(false);
      updatedCompletedDays[day] = true;

      const updatedProgress = updatedCompletedDays.filter(day => day).length / (habit.habitType === 'weekly'? 7 : 30) * 100;
      habit.progress = updatedProgress;

      updatedHabits[index] = {
        ...habit,
        progress: Math.round(updatedProgress),
        completedDays: updatedCompletedDays,
      }

      return updatedHabits;
    })
  }

  return (
    <div className="w-screen h-screen bg-gradient-to-r from-purple-800 to-purple-400 flex flex-col items-center p-10 gap-20">
      <HabitsContainer listHabits={habits} onDeleteHabit={deleteHabit} onCompleteHabit={completeHabit}/>
      <AddHabitsContainer onAddHabit={addHabit}/>
    </div>
  )
}

export default App