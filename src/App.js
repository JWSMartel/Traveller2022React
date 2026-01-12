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
import {Board} from "./components/Board";
import {RouteList} from "./components/RouteList";
import { PlanetButtonList } from "./components/PlanetButtonList";

export default function App() {
  // --- State ---
  const [userInput, setUserInput] = useState("");
  const [sectorDensity, setSectorDensity] = useState("Standard");
  const [clickedDetail, setClickedDetail] = useState(null);
  const [selectedPlanet, setSelectedPlanet] = useState(null);
  const [viewMode, setViewMode] = useState("map");

  const [current, setCurrent] = useState({
    type: "planet", // 'planet' | 'sector' | 'galaxy'
    planet: null,
    subsector: null,
    subsectorDetails: null,
    routes: [],
    flatSubsectorNames: [],
    flatSubsectorPlanets: [],
    galaxy: null,
  });

  const densities = ["Rift", "Sparse", "Standard", "Dense"];

  // --- Handlers ---
  const PlanetDetails = (planetObj) => {
    setClickedDetail(RenderPlanet(planetObj));
    setSelectedPlanet(planetObj);
  };


  const PlanetBtnClicked = () => {
    const newPlanet = CreatePlanet(userInput);
    setCurrent({ type: "planet", planet: newPlanet });
    setClickedDetail(null);
  };

  const SubsectorBtnClicked = () => {
    const [subsector, subsectorDetails] = CreateSubsector(sectorDensity);
    const [flatSub, flatDet, routeList] = RenderSubsector(subsector, subsectorDetails);

    setCurrent({
      type: "sector",
      subsector,
      subsectorDetails,
      routes: routeList,
      flatSubsectorNames: flatSub,
      flatSubsectorPlanets: flatDet,
    });
    setClickedDetail(null);
  };

  const GalaxyBtnClicked = () => {
    const galaxy = CreateGalaxy();
    const sectors = RenderGalaxy(galaxy);

    setCurrent({
      type: "galaxy",
      galaxy: sectors,
    });
    setClickedDetail(null);
  };

  const handleExport = () => {
    if (current.type === "planet"){
      PlanetExport(current.planet);
    } else if (current.type === "sector"){
      SubsectorExport(current.routes, current.flatSubsectorNames, current.flatSubsectorPlanets);
    } else if (current.type === "galaxy"){
      GalaxyExport(current.galaxy);
    } 
  };

  // --- Components ---
  function RenderOutput() {
    switch (current.type) {
      case "planet":
        return current.planet && RenderPlanet(current.planet);
      case "sector":
        if (!current.subsector) {
          return null;
        }
        return viewMode === "map" ? (
          <>
            <div className="subsector-view">
              <Board
                grid={current.subsector}
                gridDetails={current.subsectorDetails}
                onHexClick={PlanetDetails}
              />
            </div>
            <div className="details-sub-m area">{clickedDetail}</div>
          </>
        ) : (
          <>
            <div className="list-view">
              <RouteList routes={current.routes} />
              <PlanetButtonList
                names={current.flatSubsectorNames}
                planets={current.flatSubsectorPlanets}
                onPlanetClick={PlanetDetails}
                selectedPlanet={selectedPlanet}
              />
            </div>
            <div className="details-sub-l area">{clickedDetail}</div>
          </>
        );
      case "galaxy":
        if (!current.galaxy) {
          return null;
        }
        return Object.keys(current.galaxy).map((key) => {
          const sectorData = current.galaxy[key];
          return viewMode === "map" ? (
            <>
              <div key={key}>
                <h3>{key} {sectorData.sectorType}</h3>
                <div className="galaxy-view">
                  <Board
                    key={key}
                    grid={sectorData.subsector}
                    gridDetails={sectorData.subsectorDetails}
                    onHexClick={PlanetDetails}
                  />
                </div>
              </div>
              <div className="details-gal-m area">{clickedDetail}</div>
            </>
          ) : (
            <div className="list-view">
              <div key={key}>
                <h3>{key} {sectorData.sectorType}</h3>
                <RouteList routes={sectorData.routeList} />
                <PlanetButtonList
                  names={sectorData.flatSub}
                  planets={sectorData.flatDet}
                  onPlanetClick={PlanetDetails}
                  selectedPlanet={selectedPlanet}
                />
              </div>
              <div className="details-gal-l area">{clickedDetail}</div>
            </div>
          );
        });
      default:
        return null;
    }
  }


  // --- Render ---
  return (
    <>
      <nav>
        <div className="planetcreator area">
          <label htmlFor="userInput">Enter Planet Name: </label>
          <input
            type="text"
            id="userInput"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Name your planet"
          />
          <button className="PlanetBtn" onClick={PlanetBtnClicked}>Create a Planet</button>
        </div>

        <div className="subsectorcreator area">
          <select
            id="sectorDensity"
            value={sectorDensity}
            onChange={(e) => setSectorDensity(e.target.value)}
          >
            <option value="" disabled>Standard</option>
            {densities.map((option, i) => (
              <option key={i} value={option}>{option}</option>
            ))}
          </select>
          <button className="SubsectorBtn" onClick={SubsectorBtnClicked}>Create a Subsector</button>
        </div>

        <div className="galaxycreator area">
          <button className="GalaxyBtn" onClick={GalaxyBtnClicked}>Create a Galaxy</button>
        </div>

        <div className="options area">
          <button className="exportBtn" onClick={handleExport}>Export</button>
          <div className="view-toggle">
            <button onClick={() => setViewMode(viewMode === "map" ? "list" : "map")}>Toggle View</button>
          </div>
        </div>
      </nav>

      <div className="output area">
        <RenderOutput />
      </div>
    </>
  );
}