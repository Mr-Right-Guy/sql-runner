import { useEffect, useState } from "react";
import Backdrop from "../backdrop";
import Results from "../results";

const ShowResults = () => {
  const [showBackdrop, setShowBackdrop] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const showRes = () => {
    setShowBackdrop(true);
    setShowResults(true);
  };

  const hideResults = () => {
    setShowBackdrop(false);
    setShowResults(false);
  };

  useEffect(() => {
    document.addEventListener("resultsFetched", () => {
      showRes();
    });
    return () => {
      document.removeEventListener("resultsFetched", () => {
        showRes();
      });
    };
  }, []);

  return (
    <>
      <div className="w-full h-full flex flex-col justify-end items-center py-5">
        <button
          className="shadow-md rounded px-5 py-2 rounded-full bg-cyan-200 hover:bg-cyan-300 font-semibold"
          onClick={showRes}
        >
          Show Results
        </button>
      </div>
      <Results show={showResults} hide={hideResults} />
      <Backdrop show={showBackdrop} hide={hideResults} />
    </>
  );
};

export default ShowResults;
