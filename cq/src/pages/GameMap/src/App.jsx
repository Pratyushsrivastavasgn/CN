import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Congratulations from "./components/Congratulations";
import Draft14 from "./components/draft14";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Draft14 />
    </>
  );
}

export default App;
