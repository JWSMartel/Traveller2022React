import { Roll } from "./Roll";

export function CreateHydro(sizeRoll, atmoRoll, temp) {
  let name = '';
  let hydro = '';
  let hydroRoll;
  let description = '';
  if (sizeRoll < 2) {
    hydro = "0-5%";
    name = '0';
    hydroRoll = 0;
  } else {
    hydroRoll = Roll(2, 12) - 7 + atmoRoll;
    if (atmoRoll == 0 || atmoRoll == 1 || (atmoRoll > 9 && atmoRoll < 13)) {
      hydroRoll -= 4;
    }
    if (temp.includes("Hot")) {
      hydroRoll -= 2;
    } else if (temp.includes("Roasting")) {
      hydroRoll -= 6;
    }

    if (hydroRoll < 1) {
      name += "0";
      console.log("Hydro name: "+name);
      hydro = "0-5%";
      description += "Desert world. ";
    } else if (hydroRoll >= 10) {
      name += "A";
      hydro = "96-100%";
      description += "Almost entirely water. ";
    } else {
      name += hydroRoll;
      switch (hydroRoll) {
        case 1:
          hydro = "6-15%";
          description += "Dry world. ";
          break;
        case 2:
          hydro = "16-25%";
          description += "A few small seas. ";
          break;
        case 3:
          hydro = "26-35%";
          description += "Small seas and oceans. ";
          break;
        case 4:
          hydro = "36-45%";
          description += "Wet world. ";
          break;
        case 5:
          hydro = "46-55%";
          description += "Large oceans. ";
          break;
        case 6:
          hydro = "56-65%";
          break;
        case 7:
          hydro = "66-75%";
          description += "Earthlike amount of water. ";
          break;
        case 8:
          hydro = "76-85%";
          description += "Water world. ";
          break;
        case 9:
          hydro = "86-95%";
          description += "Only a few small islands and archipelagos. ";
          break;
        default:
          console.log("Something went wrong in hydro switch");
          break;
      }
    }
  }
  return { name, hydro, description };
}
