import { useState } from "react";
import { Segments } from "../components/Segments";
import { NavBar } from "../components/NavBar";
import "../assets/styles/FirstTask.css";

export const FirstTask = () => {
  const [currentNumber, setCurrentNumber] = useState("");

  const handleInputChange = (event) => {
    setCurrentNumber(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <NavBar />
      <article className="first-task-container">
        <section>
          <Segments currentNumber={currentNumber} />
        </section>
        <section>
          <form onSubmit={handleSubmit}>
            <label>
              Enter a Number:
              <input
                type="number"
                min={0}
                max={9}
                value={currentNumber}
                onChange={handleInputChange}
              />
            </label>
          </form>
        </section>
      </article>
    </>
  );
};
