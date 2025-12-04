import { Roll } from "./Roll";

export function CreateAtmo(sizeRoll) {
  //CreateAtmo
  let name = "";
  let atmo = "";
  let description = "";
  let pressure = "";
  let survivalGearReq = "";
  let atmoRoll = Roll(2, 12) - 7 + sizeRoll;
  if (atmoRoll < 1) {
    //no atmo
    atmoRoll = 0;
    name += "0";
    atmo = "None";
    description += "Moon like atmosphere. ";
    pressure = "0.0";
    survivalGearReq = "Vacc Suit";
  } else if(atmoRoll>=15){
    atmoRoll=15;
    name += "F";
    atmo = "Unusual";
    pressure = "Varies";
    survivalGearReq = "Varies";
  }else {
    name += atmoRoll;
    switch (atmoRoll) {
      case 1:
        atmo = "Trace";
        description += "Mars like atmosphere. ";
        pressure = "0.001-0.09";
        survivalGearReq = "Vacc Suit";
        break;
      case 2:
        atmo = "Very Thin, Tainted";
        pressure = "0.1-0.42";
        survivalGearReq = "Respirator, Filter";
        break;
      case 3:
        atmo = "Very Thin";
        pressure = "0.1-0.42";
        survivalGearReq = "Respirator";
        break;
      case 4:
        atmo = "Thin, Tainted";
        pressure = "0.43-0.7";
        survivalGearReq = "Filter";
        break;
      case 5:
        atmo = "Thin";
        pressure = "0.43-0.7";
        break;
      case 6:
        atmo = "Standard";
        description += "Earth like atmosphere. ";
        pressure = "0.71-1.49";
        break;
      case 7:
        atmo = "Standard, Tainted";
        pressure = "0.71-1.49";
        survivalGearReq = "Filter";
        break;
      case 8:
        atmo = "Dense";
        pressure = "1.5-2.49";
        break;
      case 9:
        atmo = "Dense, Tainted";
        pressure = "1.5-2.49";
        survivalGearReq = "Filter";
        break;
      case 10:
        name += "A";
        atmo = "Exotic";
        description += "Atmosphere is unbreathable to humans but otherwise not hazardous. ";
        pressure = "Varies";
        survivalGearReq = "Air Supply";
        break;
      case 11:
        name += "B";
        atmo = "Corrosive";
        description += "Venus like atmosphere Highly dangerous: anyone who breathes this corrosive atmosphere will suffer 1d6 damage per round. ";
        pressure = "Varies";
        survivalGearReq = "Vacc Suit";
        break;
      case 12:
        name += "C";
        atmo = "Insidious";
        pressure = "Varies";
        survivalGearReq = "Vacc Suit";
        description += "Unsafe to be there for longer than " + Roll(2, 12) + " hours due to degradation of equipment as it deals with the harsh atmosphere This can be prevented with vigilant maintenance or advanced protective gear. ";
        break;
      case 13:
        name += "D";
        atmo = "Dense, High";
        pressure = "2.5+";
        description += "Thick atmospheres have high N2/O2 levels that mean the average surface pressure is too high to support unprotected human life. ";
        break;
      case 14:
        name += "E";
        atmo = "Thin, Low";
        pressure = "0.5 or less";
        description += "Thin atmospheres have low N2/O2 levels that mean the average surface pressure is too low to support human life outside of deep lowlands and depressions. ";
        break;
      default:
        Log.e(TAG, "Something went wrong in Atmo creation");
    }
    if (atmo.includes("Tainted")) {
      description += "Breathing this atmosphere causes 1d6 damage every few minutes. ";
    }
  }
  return { name, atmo, pressure, description, atmoRoll, survivalGearReq };
}
