import { CheckTradeCodes } from "./CheckTradeCodes";
import { CheckZoning } from "./CheckZoning";
import { CreateAtmo } from "./CreateAtmo";
import { CreateBases } from "./CreateBases";
import { CreateCulture } from "./CreateCulture";
import { CreateGov } from "./CreateGov";
import { CreateHydro } from "./CreateHydro";
import { CreateLawLevel } from "./CreateLawLevel";
import { CreatePlanetPop } from "./CreatePlanetPop";
import { CreatePlanetSize } from "./CreatePlanetSize";
import { CreateStarport } from "./CreateStarport";
import { CreateTechLevel } from "./CreateTechLevel";
import { CreateTemp } from "./CreateTemp";

export function CreatePlanet() {
  let description = "";
  let name = "";
  let survivalGearReq;

  console.log("Name Start: "+name);

  //Size
  const { name: planetName, size: planetSize, g: planetGravity, description: planetDescription, sizeRoll: sizeRoll } = CreatePlanetSize();
  name += planetName;
  const size = planetSize;
  const g = planetGravity;
  description += planetDescription;

  console.log("Name after size: "+name);

  //Atmo
  const { name: atmoName, atmo: atmoAtmo, pressure: atmoPressure, description: atmoDescription, atmoRoll: atmoRoll, survivalGearReq:atmoSGR } = CreateAtmo(sizeRoll);
  name+=atmoName;
  const atmo=atmoAtmo;
  const pressure = atmoPressure;
  description += atmoDescription;
  survivalGearReq = atmoSGR;

  console.log("Name after atmo: "+name);

  //Temp
  const {temp: tempTemp, description:tempDescripttion} = CreateTemp(atmoRoll);
  const temp = tempTemp;
  description += tempDescripttion;

  //hydro
  const {name: hydroName, hydro: hydroHydro, description:hydroDescription} = CreateHydro(sizeRoll, atmoRoll, temp);
  name+=hydroName;
  const hydro = hydroHydro;
  description += hydroDescription;

  console.log("Name after hydro: "+name);

  //pop
  const {name: popName, popRoll: popRollRoll, pbg:popPbg, pop:popPop, description:popDescription} = CreatePlanetPop();
  name += popName;
  const popRoll = popRollRoll;
  const pbg = popPbg;
  const pop =  popPop;
  description += popDescription;

  console.log("Name after pop: "+name);

  //Starport
  const starport = CreateStarport(popRoll);
  name = starport + name;

  console.log("Name after starport: "+name);

  let govt = '';
  let culture = '';
  let law = '';
  let tech = '';
  let govRoll;
  let techRoll;
  //if pop is zero, govt, law, and tech are automatically zero
  if(pop==0){
    //gov
    govt = "None";
    name += "0";
    govRoll = 0;
    console.log("Name after Gov: "+name);
    //Culture
    culture = 'None';
    //Law Level
    law = 'None';
    name += '0';
    console.log("Name after Law: "+name);
    //Tech Level
    tech = 'None';
    techRoll = '0';
    name += '-0';
    console.log("Name after Tech: "+name);
    description += "With no population, there is no government structure, culture, law, or tech here. ";
  }else{
    //Govt
    const {govt:govType, name:govName, description:govtDescription, govRoll:govGovRoll} = CreateGov(popRoll);
    govt = govType;
    name += govName;
    description += govtDescription;
    govRoll = govGovRoll;
    console.log("Name after Gov: "+name);
    //Culture
    const {culture:cultCulture, description:cultDescription} = CreateCulture();
    culture = cultCulture;
    description += cultDescription;
    //Law Level
    law = CreateLawLevel(govRoll);
    name += law;
    console.log("Name after Law: "+name);
    //Tech Level
    const {tech:techTech, description:techDescription, techRoll:techRRoll} = CreateTechLevel(starport, sizeRoll, atmoRoll, hydro, popRoll, govRoll);
    tech = techTech;
    description += techDescription;
    name += '-'+tech;
    techRoll = techRRoll;
    console.log("Name after Tech: "+name);
    //Bases
    description += CreateBases(starport, popRoll, tech, law);
  }

  //Trade Codes
  const {tradeCodes, tsDesc} = CheckTradeCodes(sizeRoll, atmoRoll, hydro, popRoll, govRoll, law, techRoll);
  description += tsDesc;

  //Zoning
  const zone = CheckZoning(atmoRoll, govRoll, law);

  return (
    <div>
      <p>
        Planet Name: {name}<br />
        Starport Rating: {starport}<br />
        Size: {size}<br />
        Gravity: {g}<br />
        Atmo: {atmo}<br />
        Pressure: {pressure}<br />
        Temp: {temp}℃<br />
        Hydro: {hydro}<br />
        Population: {pop}<br />
        Govt: {govt}<br />
        Culture: {culture}<br />
        Law Level: {law}<br />
        Tech Level: {tech}<br />
        Trade Codes: {tradeCodes}<br />
        Zoning: {zone}<br />
      </p>
      <p>Planet Description: <br />{description}</p>
    </div>
  );
}