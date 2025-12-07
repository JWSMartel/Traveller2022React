import { useState } from "react";
import { CreatePlanet } from "./CreatePlanet";
import { CreateSubsector } from "./CreateSubsector";
import { RenderPlanet } from "./RenderPlanet";
import { RenderSubsector } from "./RenderSubsector";

export default function App() {
  const [output, setOutput] = useState("");
  const [userInput, setUserInput] = useState();
  const [sectorDensity, setSectorDensity] = useState('Standard');
  const densities = ['Rift','Sparse','Standard','Dense'];

  function PlanetBtnClicked(){
    const planet=CreatePlanet(userInput);
    setOutput(RenderPlanet(planet));
  }

  function SubsectorBtnClicked(){
    const [subsector, subsectorDetails] = CreateSubsector(sectorDensity);
    setOutput(RenderSubsector(subsector));
  }

  return (
    <div>
      <label htmlFor="userInput">Enter Planet Name: </label>
      <input type="text" id="userInput" onChange={(e) => setUserInput(e.target.value)}placeholder="Name your creation" />
      <button className="PlanetBtn" onClick={PlanetBtnClicked}>Create a Planet</button>
      <select id="sectorDensity" value={sectorDensity} onChange={(i)=>setSectorDensity(i.target.value)}>
        <option value="" disabled></option>
        {densities.map((option, index)=>(
          <option key={index} value={option}>{option}</option>
        ))}
      </select>
      <button className="StarSysBtn" onClick={SubsectorBtnClicked}>Create a Subsector</button>
      {output}
    </div>
  );
}