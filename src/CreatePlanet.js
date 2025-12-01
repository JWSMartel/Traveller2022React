import { CreateAtmo } from "./CreateAtmo";
import { CreatePlanetSize } from "./CreatePlanetSize";
import { CreateTemp } from "./CreateTemp";
import { Roll } from "./Roll";

export function CreatePlanet() {
  let description = "";
  let loc = "";
  let name = "";
  let hydro;
  let pop;
  let govt;
  let lawRoll;
  let starport;
  let tech;
  let bases;
  let tradeCodes;
  let survivalGearReq;
  //let hydroRoll = roll(2,12)-7+atmoRoll;
  let popRoll = Roll(2,12)-2;
  let govRoll = Roll(2,12)-7+popRoll;
  let cultureTensRoll = Roll(2,12);
  let cultureOnesRoll = Roll(2,12);
  let pbg;
  let zoning;

  const { name: planetName, size: planetSize, g: planetGravity, description: planetDescription, sizeRoll: sizeRoll } = CreatePlanetSize();
  name += planetName;
  const size = planetSize;
  const g = planetGravity;
  description += planetDescription;

  const { name: atmoName, atmo: atmoAtmo, pressure: atmoPressure, description: atmoDescription, atmoRoll: atmoRoll, survivalGearReq:atmoSGR } = CreateAtmo(sizeRoll);
  name+=atmoName;
  const atmo=atmoAtmo;
  const pressure = atmoPressure;
  description += atmoDescription;
  survivalGearReq = atmoSGR;

  const {temp: tempTemp, description:tempDescripttion} = CreateTemp(atmoRoll);
  const temp = tempTemp;
  description += tempDescripttion;

  //printOut = NAME+Name+STARPORTQUALITY+Starport+SIZE+Size+ATMOTYPE+Atmo+TEMP+Temp+HYDROPER+Hydro+POP+Pop+GOVTYPE+Govt+LAW+LawRoll+TECHLV+Tech+Description;
  return (
    <div>
      <p>
        Planet Name: {name}<br />
        Size: {size}<br />
        Gravity: {g}g<br />
        Atmo: {atmo}<br />
        Pressure: {pressure}<br />
        Temp: {temp}℃<br />
      </p>
      <p>Planet Description: <br />{description}</p>
    </div>
  );
}