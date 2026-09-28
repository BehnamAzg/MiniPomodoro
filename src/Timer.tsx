import { createContext, useContext, useState } from "react";

const TimerContext = createContext();

export default function Timer({ children }) {
  const [currentLap, setCurrentLap] = useState(1);
  const [totalLaps, setTotalLaps] = useState(4);
  const [timer, setTimer] = useState();
  const [mode, setMode] = useState();

  return (
    <TimerContext.Provider value={{ currentLap, totalLaps, timer, mode }}>
      <div className="flex-center text-primary flex-col gap-2 uppercase">
        {children}
      </div>
    </TimerContext.Provider>
  );
}

function Lap() {
  const { currentLap, totalLaps } = useContext(TimerContext);
  return (
    <span className="text-xs">
      {currentLap}/{totalLaps}
    </span>
  );
}

function Time() {
  return <time className="text-6xl">15:00</time>;
}

function Options() {
  return (
    <button className="text-tertiary hover:text-primary cursor-pointer text-xs uppercase transition-all hover:tracking-wider">
      Options
    </button>
  );
}

function Button() {
  return (
    <button className="text-tertiary hover:text-primary cursor-pointer text-xs uppercase transition-all hover:tracking-wider">
      Start
    </button>
  );
}

function Mode() {
  return <span className="text-xs">Focus</span>;
}

Timer.Lap = Lap;
Timer.Time = Time;
Timer.Options = Options;
Timer.Button = Button;
Timer.Mode = Mode;
