import { Roll } from "./Roll";

export function CreatePlanetPop() {
  let popRoll = Roll(10, 0);
  let pbg = Roll(9, 1);
  let name;
  let pop;
  let description = '';

  if (popRoll == 10) {
    name = "A";
    pop = "Tens of billions";
    description += "Population of tens of billions. ";
  } else {
    name = popRoll;
    switch (popRoll) {
      case 0:
        pop = "None";
        description += "Uninhabited. ";
        break;
      case 1:
        pop = "Few";
        description += "Population consisting of a tiny farmstead or a large family. ";
        break;
      case 2:
        pop = "Hundreds";
        description += "Population consisting of a village. ";
        break;
      case 3:
        pop = "Thousands";
        description += "Population of thousands. ";
        break;
      case 4:
        pop = "Tens of thousands";
        description += "Population consisting of a small town. ";
        break;
      case 5:
        pop = "Hundreds of thousands";
        description += "Population consisting of an average city. ";
        break;
      case 6:
        pop = "Millions";
        description += "Population of millions. ";
        break;
      case 7:
        pop = "Tens of millions";
        description += "Population consisting of a large city. ";
        break;
      case 8:
        pop = "Hundreds of millions";
        description += "Population of hundreds of millions. ";
        break;
      case 9:
        pop = "Billions";
        description += "Population similar to present day Earth. ";
        break;
      default:
        console.log("Something went wrong in planet pop generator");
        break;
    }
  }
  return { popRoll, pbg, name, pop, description };
}
