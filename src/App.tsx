import HabitsContainer from "./components/HabitContainer"
import AddHabitsContainer from "./components/AddHabitsContainer"

const App = () => {
  return (
    <div className="w-screen h-screen bg-gradient-to-r from-purple-800 to-purple-400 flex flex-col items-center p-10 gap-20">
      <HabitsContainer/>
      <AddHabitsContainer/>
    </div>
  )
}

export default App