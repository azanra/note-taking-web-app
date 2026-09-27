import "./App.css";
import Home from "./pages/home/Home";
import NoteProvider from "./shared/hooks/noteContext";

function App() {
  return (
    <NoteProvider>
      <Home />
    </NoteProvider>
  );
}

export default App;
