export function GovTree(govRoll) {
  let name = '';
  let description = '';
  let govt = '';

  if (govRoll <= 0) {
    govt = "None";
    description += "No government structure In many cases, family bonds predominate. Examples include a Family, Clan, or total Anarchy. Little could be considered illegal here. ";
    name += "0";
  } else if (govRoll >= 15) {
    govt = 'Totalitarian Oligarchy';
    description += 'Government by an all-powerful minority which maintains absolute control through widespread coercion and oppression. Examples include a world church or a ruthless corporation. ';
    name += 'F';
  } else {
    switch (govRoll) {
      case 1:
        govt = "Company/Corporation";
        description += "Ruling functions are assumed by a company managerial elite, and most citizenry are company employees or dependants Examples include a corporate outpost, asteroid mine, or a feudal domain Likely would not appreciate weapons, drugs, or Travellers in their space. ";
        name += govRoll;
        break;
      case 2:
        govt = "Participating Democracy";
        description += "Ruling functions are reached by the advise and consent of the citizenry directly Examples include a collective, tribal council, or comm-linked consensus Such civilizations tend to be weary of drugs. ";
        break;
      case 3:
        govt = "Self-perpetuating Oligarchy";
        description += "Ruling functions are preformed by a restricted minority, with little to no input from the mass of the citizenry Exmaples include a plutocracy or a hereditary ruling caste They do no tend to like weapons, technology, or Travellers. ";
        name += govRoll;
        break;
      case 4:
        govt = "Represenative Democracy";
        description += "Ruling functions are preformed by elected representatives. Examples include a republic or democracy. Likely would not appreciate drugs, weapons, or psionics. ";
        name += govRoll;
        break;
      case 5:
        govt = "Feudal Techocracy";
        description += "Ruling functions are preformed by specific individuals for persons who agree to be ruled by them. Relationships are based on the performance of technical activities which are mutually beneficialThey do not tend to like outside weapons, technology, or computers. ";
        name += govRoll;
        break;
      case 6:
        govt = "Captive Government";
        description += "Ruling functions are performed by an imposed leadership answerable to an outside group. Examples include a colony or conquered area. Contraband here may include weapons, technology, or Travellers. ";
        name += govRoll;
        break;
      case 7:
        govt = "Balkanisation";
        description += "No central authority exists rival governments complete for control. Law Level refers to the government nearest the starport. Examples include multiple governments involved in a civil war They could have an aversion to anything. ";
        name += govRoll;
        break;
      case 8:
        govt = "Civil Service Bureaucracy";
        description += "Ruling functions are performed by government agencies employing individuals selected for their expertise. Examples include a technocracy or communism. They likely look down on drugs and weapons. ";
        name += govRoll;
        break;
      case 9:
        govt = "Impersonal Bureaucracy";
        description += "Ruling functions are performed by agencies which have become insulated from the governed citizens. Examples include entrenched castes of bureaucrats or a decaying empire. They do like technology, weapons, drugs, Travellers, or psionics typically. ";
        name += govRoll;
        break;
      case 10:
        govt = "Charismatic Dictator";
        description += "Ruling functions are performed by agencies directed by a single leader who enjoys the overwhelming confidence of the citizens. Examples include a revolutionary leader, messiah, or emperor. Only the dictator can decide what is illegal here. ";
        name += "A";
        break;
      case 11:
        govt = "Non-charismatic Leader";
        description += "A previous charismatic dictator has been replaced by a leader through normal channels Examples include military dictatorship or hereditary kingship They do not appreciate weapons, technology, or computers from other lands. ";
        name += "B";
        break;
      case 12:
        govt = "Charismatic Oligarchy";
        description += "Ruling functions are performed by a select group of members of an organisation or class which enjoys the overwhelming confidence of the citizenry. Examples include junta, or a revolutionary council. They tend not to appreciate weapons around them. ";
        name += "C";
        break;
      case 13:
        govt = "Religious Dictatorship";
        description += "Ruling functions are performed by a religious organisation without regard to the specific individual needs of the citizenry. Examples include cults, transcendent philosophy, or psionic group minds Who is to say what they do or do not want in their sectors. ";
        name += "D";
        break;
      case 14:
        govt = "Religious Autocracy";
        description += "Government by a single religious leader having absolute power over the citizeny. Examples include messiahs. ";
        name += 'E'
        break;
      default:
        console.log("Something went wrong in Primary Gov Assign Switch");
    }
  }

  return { name, govt, description };
}
