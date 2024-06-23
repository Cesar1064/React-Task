import "../assets/styles/SegmentVertical.css";
// eslint-disable-next-line react/prop-types
export const SegmentVertical = ({ test }) => {
  return (
    <div
      className={test ? "segment-vertical-active" : "segment-vertical-inactive"}
    ></div>
  );
};
