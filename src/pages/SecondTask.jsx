import { useState } from "react";
import { Segments } from "../components/Segments";
import { NavBar } from "../components/NavBar";
import "../assets/styles/SecondTask.css";

export const SecondTask = () => {
  const [currentNumber, setCurrentNumber] = useState(0);

  const handleCount = () => {
    if (currentNumber < 9) {
      setCurrentNumber((prev) => prev + 1);
    }
    if (currentNumber == 9) {
      setCurrentNumber(0);
    }
  };
  console.log(currentNumber);
  return (
    <>
      <>
        <NavBar />
        <article className="second-task-container">
          <section>
            <Segments currentNumber={currentNumber} />
          </section>
          <section>
            <button onClick={handleCount}>+ 1</button>
          </section>
        </article>
      </>
    </>
  );
};
