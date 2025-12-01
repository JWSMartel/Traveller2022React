import { useState } from "react";
import { CreatePlanet } from "./CreatePlanet";

export default function App() {
  const [planet, setPlanet] = useState("Planet Desc");

  function PlanetBtnClicked(){
    setPlanet(CreatePlanet());
  }

  return (
    <div>
      <button className="PlanetBtn" onClick={PlanetBtnClicked}>Create a Planet</button>
      <p>{planet}</p>
    </div>
  );
}