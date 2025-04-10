import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Add title and metadata
document.title = "Medulla - Your Care, Supercharged by AI";
const meta = document.createElement('meta');
meta.name = "description";
meta.content = "Medulla empowers healthcare professionals with AI-powered tools for better clinical decisions.";
document.head.appendChild(meta);

createRoot(document.getElementById("root")!).render(<App />);
