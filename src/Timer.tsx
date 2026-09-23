import { createContext, useContext, useState } from "react";

const TimerContext = createContext();

export default function Timer({ children }) {
  return (
    <TimerContext.Provider>
      <div>{children}</div>
    </TimerContext.Provider>
  );
}

function Lap() {
  const { lap } = useContext(CounterContext);
  return <span>{lap}</span>;
}

function Time() {}

function Options() {}

function Button() {}
