import { createRoot } from "react-dom/client";
import App from "./App";

createRoot(document.getElementById("root")).render(<App />);

//Si possono aggiungere sia il componente hello, piu volte all'interno di App, sia Message in app, react eseguirà tutto se gli elementi vengono importati correttamente, seguendo il flusso.
