import { useCommandHistory } from "../../context/useCommandHistory";
import { useResults } from "../../context/useResults";

const CommandForm = () => {
  const { command, setCommand, addCommand } = useCommandHistory();
  const { fetchResults } = useResults();

  const handleInputChange = (e) => {
    setCommand(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!command) return;
    addCommand(command);
    setCommand("");
    fetchResults();
  };

  return (
    <div className="h-full w-full flex justify-center items-center py-10">
      <form
        className="bg-indigo-950 px-4 py-3 flex rounded-md w-[60%] max-w-[400px]"
        onSubmit={handleFormSubmit}
      >
        <span className="text-green-400 mr-2">$</span>
        <input
          type="text"
          value={command}
          onChange={handleInputChange}
          className="flex-1 bg-indigo-950 text-white outline-none"
          placeholder="Enter your command..."
        />
      </form>
    </div>
  );
};

export default CommandForm;
