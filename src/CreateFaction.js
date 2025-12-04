import { GovTree } from "./GovTree";
import { Roll } from "./Roll";

export function CreateFaction(pop) {
  let fdescription = '';
  let fgov = '';
  const typeRoll = Roll(2, 12) - 7 + pop;
  const { name: govName, govt: govType, description: govtDescription } = GovTree(typeRoll);
  fgov = govType + ":";
  fdescription += govtDescription;

  console.log("Faction description: "+fdescription);

  const fstr = Roll(2,12);
  switch(fstr){
    case 2:
    case 3:
      fdescription += 'They are an obscure group that few have heard of them and they have no popular support. ';
      console.log("FLAG");
      break;
    case 4:
    case 5:
      fdescription += 'They are a fringe group with few supporters. ';
      break;
    case 6:
    case 7:
      fdescription += 'They are a minor group with some supporters. ';
      break;
    case 8:
    case 9:
      fdescription += 'They are a notable group with significant support and are well known. ';
      break;
    case 10:
    case 11:
      fdescription += 'They are a significant group that are nearly nearly as powerful as the central government. ';
      break;
    case 12:
      fdescription += 'They have overwhelming popular support and are even more powerful than the central government. ';
      break;
  }
  return { fgov, fdescription };
}
