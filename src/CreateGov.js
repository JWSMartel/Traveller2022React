import { CreateFaction } from "./CreateFaction";
import { GovTree } from "./GovTree";
import { Roll } from "./Roll";

export function CreateGov(popRoll) {
  let govRoll = Roll(12, 2) - 7 + popRoll;
  let govt = '';
  let name = '';
  let description = '';

  const { name: govName, govt: govType, description: govtDescription } = GovTree(govRoll);
  name += govName;
  govt += govType;
  description += govtDescription;

  let numOfFactions = Roll(1, 3);
  if (govRoll == 0 || govRoll == 7) {
    numOfFactions++;
  } else if (govRoll >= 10) {
    numOfFactions--;
  }

  //Make a faction for each
  if (numOfFactions > 0) {
    description += "There are " + numOfFactions + " other factions on the planet as well. ";
    for (let f = 1; f <= numOfFactions; f++) {
      description += "\n\nSplinter faction #" + f + ": ";
      const {fgov, fdescription} = CreateFaction(popRoll);
      description += fgov + '\n'+fdescription;
    }
  }

  const formatting = description.split('\n').map((line,index) =>(<div>{line}</div>));

  return { govt, name, formatting, govRoll };
}
