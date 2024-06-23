import "../assets/styles/SegmentHorizontal.css";
// eslint-disable-next-line react/prop-types
export const SegmentHorizontal = ({ test }) => {
  return (
    <div
      className={
        test ? "segment-horizontal-active" : "segment-horizontal-inactive"
      }
    ></div>
  );
};
