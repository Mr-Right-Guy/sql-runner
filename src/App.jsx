import CommandForm from "./components/command-form";
import CommandHistory from "./components/command-history";
import ShowResults from "./components/show-results";

function App() {
  return (
    <div className="h-full flex flex-col">
      <div>
        <CommandForm />
      </div>
      <div>
        <CommandHistory />
      </div>
      <div className="flex-grow">
        <ShowResults />
      </div>
    </div>
  );
}

export default App;
