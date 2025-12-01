import { useState } from "react";

export default function App() {
  const [planetDesc, setPlanetDesc] = useState("Planet Desc");

  function PlanetBtnClicked(){
    setPlanetDesc("Planet Btn Clicked!");
  }

  return (
    <div>
      <button className="PlanetBtn" onClick={PlanetBtnClicked}>Create a Planet</button>
      <p>{planetDesc}</p>
    </div>
  );
}