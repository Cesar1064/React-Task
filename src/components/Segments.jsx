import { SegmentHorizontal } from "./SegmentHorizontal";
import { SegmentVertical } from "./SegmentVertical";
import "../assets/styles/Segments.css";
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
export const Segments = ({ currentNumber }) => {
  const [currentSegment, setCurrentSegment] = useState([]);
  useEffect(() => {
    switch (+currentNumber) {
      case 0:
        {
          setCurrentSegment([true, true, true, false, true, true, true]);
        }
        break;
      case 1:
        {
          setCurrentSegment([false, false, true, false, false, true, false]);
        }
        break;
      case 2:
        {
          setCurrentSegment([true, false, true, true, true, false, true]);
        }
        break;
      case 3:
        {
          setCurrentSegment([true, false, true, true, false, true, true]);
        }
        break;
      case 4:
        {
          setCurrentSegment([false, true, true, true, false, true, false]);
        }
        break;
      case 5:
        {
          setCurrentSegment([true, true, false, true, false, true, true]);
        }
        break;
      case 6:
        {
          setCurrentSegment([true, true, false, true, true, true, true]);
        }
        break;
      case 7:
        {
          setCurrentSegment([true, false, true, false, false, true, false]);
        }
        break;
      case 8:
        {
          setCurrentSegment([true, true, true, true, true, true, true]);
        }
        break;
      case 9:
        {
          setCurrentSegment([true, true, true, true, false, true, true]);
        }
        break;
    }
  }, [currentNumber]);
  return (
    <>
      <article>
        <div>
          <SegmentHorizontal test={currentSegment[0]} />
        </div>
        <section>
          <SegmentVertical test={currentSegment[1]} />
          <SegmentVertical test={currentSegment[2]} />
        </section>
        <div>
          <SegmentHorizontal test={currentSegment[3]} />
        </div>
        <section>
          <SegmentVertical test={currentSegment[4]} />
          <SegmentVertical test={currentSegment[5]} />
        </section>
        <div>
          <SegmentHorizontal test={currentSegment[6]} />
        </div>
      </article>
    </>
  );
};
