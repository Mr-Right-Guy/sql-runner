/* eslint-disable react/prop-types */

const Backdrop = ({ show, hide }) => {
  return (
    <div
      className={`${
        !show && "hidden"
      } fixed top-0 left-0 h-full w-full bg-black bg-opacity-60 z-20`}
      onClick={hide}
    ></div>
  );
};

export default Backdrop;
