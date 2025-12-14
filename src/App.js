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
    setClickedDetail(null);
  };

  const SubsectorBtnClicked = () =>{
    const [subsector, subsectorDetails] = CreateSubsector(sectorDensity);
    const [flatSubsector, flatDetails, routes] =  RenderSubsector(subsector, subsectorDetails);
    setOutput(
      <div>
        {routes.length>0?(
          <ul>
            {routes.map((route, index) => (
              <div key={index} className="route-li">route {route.formatRoute}</div>
            ))}
          </ul>
        ):(
          <p>No Routes</p>
        )}
        {flatSubsector.map((item, index) => (
          <button key={index} className='planetdetailbtn' onClick={()=>PlanetDetails(flatDetails[index])}>{String(item)}</button>
        ))}
      </div>
    );
  };

  const PlanetDetails = (planet) =>{
    setClickedDetail(RenderPlanet(planet));
  }

  return (
    <div>
      <div className="planetcreator area">
        <label htmlFor="userInput">Enter Planet Name: </label>
        <input type="text" id="userInput" value={userInput} onChange={(e) => setUserInput(e.target.value)}placeholder="Name your planet" />
        <button className="PlanetBtn" onClick={PlanetBtnClicked}>Create a Planet</button>
      </div>
      
      <div className="subsectorcreator area">
        <select id="sectorDensity" value={sectorDensity} onChange={(e)=>setSectorDensity(e.target.value)}>
          <option value="" disabled>Standard</option>
            {densities.map((option, index)=>(
            <option key={index} value={option}>{option}</option>
            ))}
        </select>
        <button className="SubsectorBtn" onClick={SubsectorBtnClicked}>Create a Subsector</button>
      </div>

      <div className="galaxycreator area">
        <p>Eventually the controls for a galaxy creator will go here.</p>
      </div>

      <div className="output area">{output}</div>
      <div className="details area">{clickedDetail}</div>
    </div>
  );
}