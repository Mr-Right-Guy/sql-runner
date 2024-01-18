import { useCommandHistory } from "../../context/useCommandHistory";

const CommandHistory = () => {
  const { setCommand, commands, removeCommand } = useCommandHistory();

  return (
    <div className="flex flex-col items-center w-full px-6 py-3 h-[450px] overflow-auto">
      <div className="w-[60%] max-w-[500px]">
        <div className="font-semibold text-center">History of commands:</div>
        <div className="mt-2 w-full">
          {commands.map((command, index) => (
            <div
              className="w-full border border-gray-200 mb-2 px-3 py-2 rounded flex cursor-pointer hover:bg-gray-100"
              key={index}
              onClick={() => setCommand(command)}
            >
              <div className="flex-grow">{command}</div>
              <div className="px-3">
                <button onClick={(e) => removeCommand(e, index)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommandHistory;
