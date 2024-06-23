import { useEffect, useState } from "react";
import { Segments } from "../components/Segments";
import { NavBar } from "../components/NavBar";
import "../assets/styles/ThirdTask.css";

export const ThirdTask = () => {
  const [currentSecondInFirstPosition, setCurrentSecondInFirstPosition] =
    useState(0);
  const [currentSecondInSecondPosition, setCurrentSecondInSecondPosition] =
    useState(0);
  const [currentMinuteInFirstPosition, setCurrentMinuteInFirstPosition] =
    useState(0);
  const [currentMinuteInSecondPosition, setCurrentMinuteInSecondPosition] =
    useState(0);
  const [currentHourInFirstPosition, setCurrentHourInFirstPosition] =
    useState(0);
  const [currentHourInSecondPosition, setCurrentHourInSecondPosition] =
    useState(0);

  const autoTime = () => {
    setCurrentSecondInSecondPosition((prev) => {
      if (prev < 9) {
        return prev + 1;
      } else {
        setCurrentSecondInFirstPosition((prevFirst) => {
          if (prevFirst < 5) {
            return prevFirst + 1;
          } else {
            setCurrentMinuteInSecondPosition((prevMinSecond) => {
              if (prevMinSecond < 9) {
                return prevMinSecond + 1;
              } else {
                setCurrentMinuteInFirstPosition((prevMinFirst) => {
                  if (prevMinFirst < 5) {
                    return prevMinFirst + 1;
                  } else {
                    setCurrentHourInSecondPosition((prevHourSecond) => {
                      if (prevHourSecond < 9) {
                        return prevHourSecond + 1;
                      } else {
                        setCurrentHourInFirstPosition(
                          (prevHourFirst) => prevHourFirst + 1
                        );
                        return 0;
                      }
                    });
                    return 0;
                  }
                });
                return 0;
              }
            });
            return 0;
          }
        });
        return 0;
      }
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      autoTime();
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <NavBar />
      <article className="third-task-container">
        <section>
          <Segments currentNumber={currentHourInFirstPosition} />
          ....
          <Segments currentNumber={currentHourInSecondPosition} />
          ....
          <Segments currentNumber={currentMinuteInFirstPosition} />
          ....
          <Segments currentNumber={currentMinuteInSecondPosition} />
          ....
          <Segments currentNumber={currentSecondInFirstPosition} />
          ....
          <Segments currentNumber={currentSecondInSecondPosition} />
        </section>
      </article>
    </>
  );
};
