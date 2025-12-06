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

export function CreatePlanet(userInput) {
  let description = "";
  let name = '';
  let survivalGearReq;

  //Size
  const { name: planetName, size: planetSize, g: planetGravity, description: planetDescription, sizeRoll: sizeRoll } = CreatePlanetSize();
  name += planetName;
  const size = planetSize;
  const g = planetGravity;
  description += planetDescription;

  //Atmo
  const { name: atmoName, atmo: atmoAtmo, pressure: atmoPressure, description: atmoDescription, atmoRoll: atmoRoll, survivalGearReq:atmoSGR } = CreateAtmo(sizeRoll);
  name+=atmoName;
  const atmo=atmoAtmo;
  const pressure = atmoPressure;
  description += atmoDescription;
  survivalGearReq = atmoSGR;

  //Temp
  const {temp: tempTemp, description:tempDescripttion} = CreateTemp(atmoRoll);
  const temp = tempTemp;
  description += tempDescripttion;

  //hydro
  const {name: hydroName, hydro: hydroHydro, description:hydroDescription, hydroRoll:hydroRRoll} = CreateHydro(sizeRoll, atmoRoll, temp);
  name+=hydroName;
  const hydro = hydroHydro;
  description += hydroDescription;
  let hydroRoll = hydroRRoll;

  //pop
  const {name: popName, popRoll: popRollRoll, pbg:popPbg, pop:popPop, description:popDescription} = CreatePlanetPop();
  name += popName;
  const popRoll = popRollRoll;
  const pbg = popPbg;
  const pop =  popPop;
  //description += popDescription;
  const popDesc = popDescription;

  //Starport
  const starport = CreateStarport(popRoll);
  name = starport + name;

  let govt = '';
  let govDes;
  let culture = '';
  let cultDesc = '';
  let law = '';
  let tech = '';
  let tDesc = '';
  let govRoll;
  let techRoll;
  let bases;
  //if pop is zero, govt, law, and tech are automatically zero
  if(pop==0){
    //gov
    govt = "None";
    name += "0";
    govRoll = 0;
    //Culture
    culture = 'None';
    //Law Level
    law = 'None';
    name += '0';
    //Tech Level
    tech = 'None';
    techRoll = '0';
    name += '-0';
    description += "With no population, there is no government structure, culture, law, or tech here. ";
  }else{
    //Govt
    const {govt:govType, name:govName, formatting:govtDescription, govRoll:govGovRoll} = CreateGov(popRoll);
    govt = govType;
    name += govName;
    //description += govtDescription;
    govDes = govtDescription;
    govRoll = govGovRoll;
    //Culture
    const {culture:cultCulture, description:cultDescription} = CreateCulture();
    culture = cultCulture;
    cultDesc = cultDescription;
    //description += cultDescription;
    //Law Level
    law = CreateLawLevel(govRoll);
    name += law;
    //Tech Level
    const {tech:techTech, description:techDescription, techRoll:techRRoll} = CreateTechLevel(starport, sizeRoll, atmoRoll, hydro, popRoll, govRoll);
    tech = techTech;
    tDesc = techDescription;
    //description += techDescription;
    name += '-'+tech;
    techRoll = techRRoll;
    //Bases
    bases =  CreateBases(starport, popRoll, tech, law);
    description += bases;
  }

  //Trade Codes
  const {tradeCodes, tsDesc} = CheckTradeCodes(sizeRoll, atmoRoll, hydroRoll, popRoll, govRoll, law, techRoll);
  description += tsDesc;

  //Zoning
  const zone = CheckZoning(atmoRoll, govRoll, law);

  if(bases!=null){
    if(bases.includes('Military')){
      name += ' M ';
    }
    if(bases.includes('Naval')){
      name += ' N ';
    }
    if(bases.includes('Scout')){
      name += ' S ';
    }
    if(bases.includes('Corsair')){
      name += ' C ';
    }
  }
  name += tradeCodes;
  if(zone === 'Red'){
    name += 'R';
  }else if(zone === 'Amber'){
    name += 'A';
  }

  if(userInput != undefined){
    name = userInput+' '+name;
  }

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
      <p>{govDes}</p>
      <p>{cultDesc}</p>
      <p>{tDesc}</p>
      {survivalGearReq !== ''?(<p>Requried survival gear: {survivalGearReq}</p>):null}
    </div>
  );
}