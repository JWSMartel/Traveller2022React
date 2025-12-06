import { Roll } from "./Roll";

export function CreateLawLevel(govRoll) {
  let lawRoll = Roll(2, 12) - 7 + govRoll;
  
  if (lawRoll > 9) {
    lawRoll = 9;
  }else if(lawRoll<0){
    lawRoll=0;
  }
  return lawRoll;
}
