import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import RoutesComponent from "./routes/RoutesComponent.jsx";
import { ThemeProvider } from "./components/ThemeProvider.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header.jsx";
import "./style/index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <header>
          <Header />
        </header>
        <RoutesComponent />
      </Router>
    </ThemeProvider>
  </StrictMode>
);
