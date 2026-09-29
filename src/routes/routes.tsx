import { createBrowserRouter } from "react-router";
import Home from "../pages/home/Home";
import NotesList from "../pages/home/components/NotesList";
import Note from "../pages/home/components/Note";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      { index: true, element: <NotesList /> },
      { path: "new-note", element: <Note /> },
    ],
  },
]);

export default router;
