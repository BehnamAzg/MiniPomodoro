import Timer from "./Timer";

function App() {
  return <Timer>
    <div className="flex-center justify-between w-full">
      <Timer.Mode />
      <Timer.Lap />
    </div>
    <div className="flex-center">
      <Timer.Time />
    </div>
    <div className="flex-center justify-between w-full">
      <Timer.Options />
      <Timer.Button />
    </div>
  </Timer>
}

export default App;
