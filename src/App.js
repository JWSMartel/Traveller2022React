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

  //Flags for export context
  const [planetShow, setPlanetShow] = useState(false);
  const [sectorShow, setSectorShow] = useState(false);
  const [galaxyShow, setGalaxyShow] = useState(false);

  //Board
  const [boardSubsector, setBoardSubsector] = useState(null);

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

  const SubsectorBtnClicked = () => {
    setClickedDetail(null);

    // Generate subsector
    const [subsector, subsectorDetails] = CreateSubsector(sectorDensity);

    // Render for flat list and routes
    const [flatSub, flatDet, routeList] = RenderSubsector(subsector, subsectorDetails);

    setFlatSubsector(flatSub);
    setFlatDetails(flatDet);
    setRoutes(routeList);

    // Update board data
    setBoardSubsector({
      subsector,
      subsectorDetails,
      routeList
    });

    // Update UI flags
    setPlanetShow(false);
    setSectorShow(true);
    setGalaxyShow(false);

    // Render routes + flat planet list buttons
    setOutput(
      <div>
        <Board boardSubsector={{subsector, subsectorDetails, routeList}} onHexClick={onBoardHexClick}/>
        {routeList.length > 0 ? (
          <ul>
            {routeList.map((route, index) => (
              <div key={index} className="route-li">
                route {route.formatRoute}
              </div>
            ))}
          </ul>
        ) : (
          <p>No Routes</p>
        )}
        {flatSub.map((item, index) => (
          <button
            key={index}
            className="planetdetailbtn"
            onClick={() => PlanetDetails(flatDet[index])}
          >
            {String(item)}
          </button>
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

    const onSectorHexClick = (row, col) => {
      const planet = sectorData.subsectorDetails[row]?.[col];
      if (planet) {
        onPlanetClick(planet);
      }
    };

    return (
      <div>
        <h3>{sectorKey} {sectorData.sectorType}</h3>
        <Board
          boardSubsector={{
            subsector: sectorData.subsector,
            subsectorDetails: sectorData.subsectorDetails,
            routeList: sectorData.routeList
          }}
          onHexClick={onSectorHexClick}
        />
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
          <>
            <Sector
              key={sectorIndex}
              sectorKey={sectorKey}
              sectorData={sectorData}
              onPlanetClick={PlanetDetails}
            />
          </>
        );
      })}
    </>
    );

    setPlanetShow(false);
    setSectorShow(false);
    setGalaxyShow(true);
    setClickedDetail(null);
  }

  function Board({ boardSubsector, onHexClick }) {
    if (!boardSubsector) {
      return null;
    }

    const { subsector } = boardSubsector;

    return (
      <div className="board">
        {subsector.map((row, rowIndex) => (
          <div key={rowIndex} className="board-row">
            {row.map((cell, colIndex) => (
              <Hex
                key={`${rowIndex}-${colIndex}`}
                hasPlanet={!!cell}
                row={rowIndex}
                col={colIndex}
                onHexClick={() => onHexClick(rowIndex, colIndex)}
              />
            ))}
          </div>
        ))}
      </div>
    );
  }

  function Hex({ row, col, hasPlanet, onHexClick }) {
    const hexId = `${String(row).padStart(2, "0")}${String(col).padStart(2, "0")}`;

    return (
      <button className="hex" onClick={onHexClick}>
        <span className="hex-label">{hexId}</span>
        {hasPlanet && <span className="planet-dot" />}
      </button>
    );
  }

  const onBoardHexClick = (row, col) => {
    if (!boardSubsector) {
      return;
    }
  
    const planet = boardSubsector.subsectorDetails[row]?.[col];
    if (planet) {
      PlanetDetails(planet);
    }
  };

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