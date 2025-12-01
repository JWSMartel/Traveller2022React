import { roll } from "./roll";

export function CreatePlanet() {
  const NAME = "Planet Name: ";
  const STARPORTQUALITY = "\nStarport Quality: ";
  const SIZE = +"Size: ";
  const ATMOTYPE = "\nAtmostphere Type: ";
  const HYDROPER = "\nHydrographic Percentage: ";
  const POP = "\nPopulation: ";
  const GOVTYPE = "\nGovernment Type: ";
  const LAW = "\nLaw Level: ";
  const TECHLV = "\nTech Level: ";
  const TEMP = "\nTemperature: ";
  let description = "\n\nPlanet Description: ";
  let loc = "";
  let name;
  let size;
  let g;
  let atmo;
  let pressure;
  let temp;
  let hydro;
  let pop;
  let govt;
  let lawRoll;
  let starport;
  let tech;
  let bases;
  let tradeCodes;
  let survivalGearReq;
  const sizeRoll = roll(0,10);
  const atmoRoll = roll(2,12)-7+sizeRoll;
  let hydroRoll = roll(2,12)-7+atmoRoll;
  let popRoll = roll(2,12)-2;
  let govRoll = roll(2,12)-7+popRoll;
  let cultureTensRoll = roll(2,12);
  let cultureOnesRoll = roll(2,12);
  let pbg;
  let zoning;

  //CreatePlanetSize
  switch (sizeRoll) {
    case 0:
      size += "0: 800 km";
      g += "Negligible";
      description += "Size of an Asteroid or orbital complex. ";
      break;
    case 1:
      size += "1: 1,600 km";
      g += "0.05";
      description += "Size of Triton. "
      break;
    case 2:
      size += "2: 3,200 km";
      g += "0.15";
      description += "Size of Luna, or Europa. ";
      break;
    case 3:
      size += "3: 4,800 km";
      g += "0.25";
      description += "Size of Mercury or Ganymede. ";
      break;
    case 4:
      size += "4: 6,400 km";
      g +="0.35";
      description += "Size of Mars. ";
      break;
    case 5:
      size += "5: 8,000 km";
      g += "0.45";
      break;
    case 6:
      size += "6: 9,600 km";
      g += "0.7";
      break;
    case 7:
      size += "7: 11,200 km";
      g += "0.9";
      break;
    case 8:
      size += "8: 12,800 km";
      g += "1.0";
      description += "Size of Earth. ";
      break;
    case 9:
      size += "9: 14,400 km";
      g += "1.25";
      break;
    case 10:
      size += "A: 16,000 km";
      g += "1.4";
      break;
    default:
      description += "Something went wrong in createPlanetSize";
      break;
  }

  //CreateAtmo
  if(atmoRoll<1){
    //no atmo
  }else{
    switch(atmoRoll){
    
    }
  }
  

  //printOut = NAME+Name+STARPORTQUALITY+Starport+SIZE+Size+ATMOTYPE+Atmo+TEMP+Temp+HYDROPER+Hydro+POP+Pop+GOVTYPE+Govt+LAW+LawRoll+TECHLV+Tech+Description;
  const planet = NAME+STARPORTQUALITY+SIZE+size+ATMOTYPE+TEMP+HYDROPER+POP+GOVTYPE+LAW+TECHLV+description;
  return (
    <div>
      <p>Planet Name: {name}</p>
      <p>Size: {size}</p>
      <p>Description: {description}</p>
    </div>
  );
}
