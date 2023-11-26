import { useState } from "react";
import "./style.scss";
import Section2 from "./assets/Section2";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Section2 />
    </>
  );
}

export default App;
