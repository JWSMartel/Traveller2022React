import { useState } from "react";
import { CreatePlanet } from "./CreatePlanet";
import { CreateSubsector } from "./CreateSubsector";
import { RenderPlanet } from "./RenderPlanet";
import { RenderSubsector } from "./RenderSubsector";
import { SubsectorExport } from "./utils/SubsectorExport";
import { PlanetExport } from "./utils/PlanetExport";

export default function App() {
  //UI Elements
  const [output, setOutput] = useState("");
  const [userInput, setUserInput] = useState();
  const [sectorDensity, setSectorDensity] = useState('Standard');
  const densities = ['Rift','Sparse','Standard','Dense'];
  const [clickedDetail, setClickedDetail] = useState(null);

  //Pass data for planet export
  const [planet, setPlanet] = useState();

  //Flatten and pass data for subsector export
  const [routes, setRoutes] = useState([]);
  const [flatSubsector, setFlatSubsector] = useState([]);
  const [flatDetails, setFlatDetails] = useState([]);

  //flags for export context
  const [planetShow, setPlanetShow] = useState(false);
  const [sectorShow, setSectorShow] = useState(false);
  const [galaxyShow, setgalaxyShow] = useState(false);

  const PlanetBtnClicked = () => {
    setClickedDetail(null);
    const newPlanet = CreatePlanet(userInput);
    setPlanet(newPlanet);
    
    setPlanetShow(true);
    setSectorShow(false);
    setgalaxyShow(false);
    setClickedDetail(null);

    setOutput(RenderPlanet(newPlanet));
  };

  const SubsectorBtnClicked = () =>{
    setClickedDetail(null);
    const [subsector, subsectorDetails] = CreateSubsector(sectorDensity);
    const [flatSub, flatDet, routeList] = RenderSubsector(subsector, subsectorDetails);

    setFlatSubsector(flatSub);
    setFlatDetails(flatDet);
    setRoutes(routeList);

    setPlanetShow(false);
    setSectorShow(true);
    setgalaxyShow(false);

    setOutput(
      <div>
        {routeList.length>0?(
          <ul>
            {routeList.map((route, index) => (
              <div key={index} className="route-li">route {route.formatRoute}</div>
            ))}
          </ul>
        ):(
          <p>No Routes</p>
        )}
        {flatSub.map((item, index) => (
          <button key={index} className='planetdetailbtn' onClick={()=>PlanetDetails(flatDet[index])}>{String(item)}</button>
        ))}
      </div>
    );
  };

  const PlanetDetails = (planet) =>{
    setClickedDetail(RenderPlanet(planet));
  }

  const handleExport = () =>{
    if(planetShow){
      PlanetExport(planet);
    }else if(sectorShow){
      SubsectorExport(routes, flatSubsector, flatDetails);
    }else if(galaxyShow){
      //export galaxy data
    }
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

      <div className="export area">
        <button className="exportBtn" onClick={handleExport}>Export</button>
      </div>

      <div className="output area">
        {output}
      </div>
      <div className="details area">{clickedDetail}</div>
    </div>
  );
}