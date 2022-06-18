import React from "react";
import { Slider } from "./components/Slider";
import { reviews } from "./data/reviews";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Slider reviews={reviews} />
    </div>
  );
}

export default App;
