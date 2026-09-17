import "./App.css";
import NoteProvider from "./shared/hooks/NoteContext";

function App() {
  return (
    <NoteProvider>
      <p className="text-3xl font-bold underline">Hello World!</p>;
    </NoteProvider>
  );
}

export default App;
