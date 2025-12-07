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
  const [clickedDetail, setClickedDetail] = useState(null);

  const PlanetBtnClicked = () => {
    const planet=CreatePlanet(userInput);
    setOutput(RenderPlanet(planet));
  };

  const SubsectorBtnClicked = () =>{
    const [subsector, subsectorDetails] = CreateSubsector(sectorDensity);
    const [flatSubsector, flatDetails] =  RenderSubsector(subsector, subsectorDetails);
    setOutput(
      <div>
        <p>Routes will eventually go here</p>
        {flatSubsector.map((item, index) => (
          <button key={index} onClick={()=>PlanetDetails(flatDetails[index])}>{String(item)}</button>
        ))}
      </div>
    );
  };

  const PlanetDetails = (planet) =>{
    setClickedDetail(RenderPlanet(planet));
  }

  return (
    <div>
      <label htmlFor="userInput">Enter Planet Name: </label>
      <input type="text" id="userInput" value={userInput} onChange={(e) => setUserInput(e.target.value)}placeholder="Name your creation" />
      <button className="PlanetBtn" onClick={PlanetBtnClicked}>Create a Planet</button>
      <select id="sectorDensity" value={sectorDensity} onChange={(e)=>setSectorDensity(e.target.value)}>
        <option value="" disabled>Standard</option>
        {densities.map((option, index)=>(
          <option key={index} value={option}>{option}</option>
        ))}
      </select>
      <button className="SubsectorBtn" onClick={SubsectorBtnClicked}>Create a Subsector</button>
      {output}
      {clickedDetail}
    </div>
  );
}