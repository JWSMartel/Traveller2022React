import { useState } from "react";
import { CreatePlanet } from "./CreatePlanet";
import { CreateSubsector } from "./CreateSubsector";
import { RenderPlanet } from "./RenderPlanet";
import { RenderSubsector } from "./RenderSubsector";
import { SubsectorExport } from "./utils/SubsectorExport";
import { PlanetExport } from "./utils/PlanetExport";
import { CreateGalaxy } from "./CreateGalaxy";
import { RenderGalaxy } from "./RenderGalaxy";
import { GalaxyExport } from "./utils/GalaxyExport";

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

  //Pass data for galaxy export
  const [galaxyExportData, setGalaxyExportData] = useState([]);

  //flags for export context
  const [planetShow, setPlanetShow] = useState(false);
  const [sectorShow, setSectorShow] = useState(false);
  const [galaxyShow, setGalaxyShow] = useState(false);

  const PlanetBtnClicked = () => {
    setClickedDetail(null);
    const newPlanet = CreatePlanet(userInput);
    setPlanet(newPlanet);
    
    setPlanetShow(true);
    setSectorShow(false);
    setGalaxyShow(false);
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
    setGalaxyShow(false);

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
      GalaxyExport(galaxyExportData);
    }
  }

  const Sector = ({ sectorKey, sectorData, onPlanetClick }) => {
    return (
      <div>
        <p>{sectorKey} {sectorData.sectorType}</p>
        {sectorData.routeList && sectorData.routeList.length > 0 ? (
          <ul>
            {sectorData.routeList.map((route, index) => (
              <div key={index} className="route-li">route {route.formatRoute}</div>
            ))}
          </ul>
        ) : (
          <p>No Routes</p>
        )}
        {sectorData.flatSub.map((item, index) => (
          <button 
            key={index} 
            className="planetdetailbtn" 
            onClick={() => onPlanetClick(sectorData.flatDet[index])}
          >
            {String(item)}
          </button>
        ))}
      </div>
    );
  };

  const GalaxyBtnClicked = () =>{
    const galaxy = CreateGalaxy();
    const sectors = RenderGalaxy(galaxy);

    setGalaxyExportData(sectors);

    setOutput(
      <>
      {Object.keys(sectors).map((sectorKey, sectorIndex) => {
        const sectorData = sectors[sectorKey];
        return (
          <Sector
            key={sectorIndex}
            sectorKey={sectorKey}
            sectorData={sectorData}
            onPlanetClick={PlanetDetails}
          />
        );
      })}
    </>
    );

    setPlanetShow(false);
    setSectorShow(false);
    setGalaxyShow(true);
    setClickedDetail(null);
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
        <button className="GalaxyBtn" onClick={GalaxyBtnClicked}>Create a Galaxy</button>
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

