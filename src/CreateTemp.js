import { Roll } from "./Roll";

export function CreateTemp(atmoRoll) {
  //CreateTemp
  let temp;
  let description = '';
  let tempRoll = Roll(2, 12);

  if (atmoRoll < 2) {
    description += "Temperatures swing wildly from roasting during the day to freezing at night. ";
  } else {
    switch (atmoRoll) {
      case 2:
      case 3:
        tempRoll -= 2;
        break;
      case 4:
      case 5:
      case 14:
        tempRoll--;
        break;
      case 8:
      case 9:
        tempRoll++;
        break;
      case 10:
      case 13:
      case 15:
        tempRoll += 2;
        break;
      case 11:
      case 12:
        tempRoll += 6;
        break;
    }
  }

  if (tempRoll < 3) {
    temp = "Frozen: >-51";
    description += "Frozen world No liquid water, very dry atmostphere. ";
  } else if (tempRoll == 3 || tempRoll == 4) {
    temp = "Cold: -51-0";
    description += "Icy world Little liquid water, extensive ice caps, few clouds. ";
  } else if (tempRoll < 10) {
    temp = "Temperate: 0-90";
    description += "Temperate world Earthlike Liquid and vaporised water are common, moderate ice caps. ";
  } else if (tempRoll == 10 || tempRoll == 11) {
    temp = "Hot: 31-80";
    description += "Hot world Small or no ice caps, little liquid water. Most water in the form of clouds. ";
  } else {
    temp = "Roasting: 81+";
    description += "Boiling world No ice caps, little liquid water. ";
  }

  return { temp, description };
}
