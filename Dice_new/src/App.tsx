import { useState } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Roll from "./components/Roll";
import Status from "./components/Status";

function App() {
  const [isRolled, roll] = useState(false);
  return (
    <div className="container">
      <Navbar />
      <Header />
      <Status onClick={() => roll(true)} />
      {<Roll status={isRolled} onClick={() => roll(false)} />}
    </div>
  );
}

export default App;
