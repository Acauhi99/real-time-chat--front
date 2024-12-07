import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";
import "normalize.css";
import "@fontsource/roboto";

createRoot(document.getElementById("root")!).render(<App />);
