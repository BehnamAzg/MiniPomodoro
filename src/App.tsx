import Timer from "./Timer";

function App() {
  return (
    <Timer>
      <div className="flex-center w-full justify-between">
        <Timer.Mode />
        <Timer.Lap />
      </div>
      <div className="flex-center">
        <Timer.Time />
      </div>
      <div className="flex-center w-full justify-between">
        <Timer.Options />
        <Timer.Button />
      </div>
    </Timer>
  );
}

export default App;
