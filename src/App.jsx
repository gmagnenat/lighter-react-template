import { createRoot } from "react-dom/client";

const App = () => {
  return (
    <header>
      <h1>Hello There</h1>
    </header>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
