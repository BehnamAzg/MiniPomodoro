import { createContext, useContext, useState } from "react";

const TimerContext = createContext();

export default function Timer({ children }) {
  const [isRunning, setIsRunning] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(1500);
  const [currentLap, setCurrentLap] = useState(1);
  const [totalLaps, setTotalLaps] = useState(4);
  const [mode, setMode] = useState(0);

  const timerButtonHandler = () => {
    setIsRunning((cur) => !cur);
  };

  return (
    <TimerContext.Provider
      value={{
        currentLap,
        totalLaps,
        mode,
        isRunning,
        timerButtonHandler,
        timeRemaining,
      }}
    >
      <div className="flex-center text-primary border-primary flex-col gap-2 border p-8 uppercase">
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
  const { timeRemaining } = useContext(TimerContext);
  const minutes = Math.floor(timeRemaining / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (timeRemaining % 60).toString().padStart(2, "0");

  return <time className="text-6xl">{minutes + ":" + seconds}</time>;
}

function Options() {
  return (
    <button className="text-tertiary hover:text-primary cursor-pointer text-xs uppercase transition-all hover:tracking-wider">
      Options
    </button>
  );
}

function Button() {
  const { timerButtonHandler, isRunning } = useContext(TimerContext);

  return (
    <button
      className="text-tertiary hover:text-primary cursor-pointer text-xs uppercase transition-all hover:tracking-wider"
      onClick={timerButtonHandler}
    >
      {isRunning ? "stop" : "start"}
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
