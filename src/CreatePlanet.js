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
import { Roll } from "./Roll";

export function CreatePlanet(userInput) {
  let description = "";
  let name = '';
  let survivalGearReq;
  let gasGiant = true;

  if (Roll(2, 12) >= 10) {
    gasGiant = false;
  }

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
  const pop =  popPop;
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
    govDes = govtDescription;
    govRoll = govGovRoll;
    //Culture
    const {culture:cultCulture, description:cultDescription} = CreateCulture();
    culture = cultCulture;
    cultDesc = cultDescription;
    //Law Level
    law = CreateLawLevel(govRoll);
    name += law;
    //Tech Level
    const {tech:techTech, description:techDescription, techRoll:techRRoll} = CreateTechLevel(starport, sizeRoll, atmoRoll, hydro, popRoll, govRoll);
    tech = techTech;
    tDesc = techDescription;
    name += '-'+tech;
    techRoll = techRRoll;
    //Bases
    bases =  CreateBases(starport, popRoll, tech, law);
    description += bases;
  }

  //Trade Codes
  const {tradeCodes, tsDesc} = CheckTradeCodes(sizeRoll, atmoRoll, hydroRoll, popRoll, govRoll, law, techRoll);
  description += tsDesc;

  //PBG
  const popMulti = Roll(1,9);
  let numRings;
  switch(Roll(1,6)){
    case 1:
    case 2:
      numRings = 0;
      break;
    case 3:
    case 4:
      numRings = Roll(1,3);
      break;
    case 5:
      numRings = Roll(3,6);
      break;
    case 6:
      numRings = Roll(7,9);
      break;
  }
  let numGGiants = 0;
  if(gasGiant){
    numGGiants = Roll(1,6);
  }
  const PBG = `${popMulti}${numRings}${numGGiants}`;

  //Zoning
  const zone = CheckZoning(atmoRoll, govRoll, law);   

  if(bases!=''){
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
    if(bases.includes('Highport')){
      name += ' ';
    }
  }else{
    name += ' ';
  }
  name += tradeCodes;
  if(zone === 'Red'){
    name += 'R';
  }else if(zone === 'Amber'){
    name += 'A';
  }
  
  name += ' '+PBG;

  if(userInput != undefined){
    name = userInput+' '+name;
  }

  const planet = {name, starport,size,g,atmo,pressure,temp,hydro,pop,govt,culture,law,tech,tradeCodes,zone,description,govDes,cultDesc,tDesc,survivalGearReq, PBG};
  return planet;
}