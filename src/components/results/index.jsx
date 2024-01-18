/* eslint-disable react/prop-types */
import { useCommandHistory } from "../../context/useCommandHistory";
import { useResults } from "../../context/useResults";

const Results = ({ show }) => {
  const { results } = useResults();
  const { commands } = useCommandHistory();

  return (
    <div
      className={`${
        !show && "hidden"
      } absolute h-[500px] w-[75%] bg-white overflow-auto top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-50 rounded-lg flex justify-center items-center`}
    >
      {!results && (
        <div className="text-gray-400 flex flex-col items-center">
          <div>Nothing to show.</div>
          <div>Please input a command and try again.</div>
        </div>
      )}
      {results && (
        <div className="h-full w-full p-2 flex flex-col items-center relative">
          <div className="font-semibold text-md py-2">
            Results for {'"'}
            {commands.at(0)}
            {'"'}
          </div>
          <table className="border border-gray-300 self-start">
            <thead>
              <tr>
                {results[0] &&
                  Object.keys(results[0]).map((header, index) => (
                    <th key={index} className="py-2 px-4 text-center border-b">
                      {header}
                    </th>
                  ))}
              </tr>
            </thead>
            <tbody>
              {results.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {Object.values(row).map((value, columnIndex) => (
                    <td
                      key={columnIndex}
                      className="py-2 px-4 border-b text-center"
                    >
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Results;
