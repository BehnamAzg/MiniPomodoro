import { createContext, useContext, useState } from "react";

const TimerContext = createContext();

export default function Timer({ children }) {
  return (
    <TimerContext.Provider>
      <div className="flex-center text-primary flex-col uppercase gap-2">
        {children}
      </div>
    </TimerContext.Provider>
  );
}

function Lap() {
  // const { lap } = useContext(CounterContext);
  return <span className="text-xs">1/4</span>;
}

function Time() {
  return <time className="text-6xl">15:00</time>;
}

function Options() {
  return <button className="text-tertiary text-xs uppercase">Options</button>;
}

function Button() {
  return <button className="text-tertiary text-xs uppercase">Start</button>;
}

function Mode() {
  return <span className="text-xs">Focus</span>;
}

Timer.Lap = Lap;
Timer.Time = Time;
Timer.Options = Options;
Timer.Button = Button;
Timer.Mode = Mode;
