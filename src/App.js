import { useState } from "react";
import { CreatePlanet } from "./CreatePlanet";

export default function App() {
  const [output, setOutput] = useState("");
  const [userInput, setUserInput] = useState();

  function PlanetBtnClicked(){
    setOutput(CreatePlanet(userInput));
  }

  return (
    <div>
      <label htmlFor="userInput">Enter Planet Name: </label>
      <input type="text" id="userInput" onChange={(e) => setUserInput(e.target.value)}placeholder="Planet Name" />
      <button className="PlanetBtn" onClick={PlanetBtnClicked}>Create a Planet</button>
      {output}
    </div>
  );
}