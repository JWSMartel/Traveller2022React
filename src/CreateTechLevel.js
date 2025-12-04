import { Roll } from "./Roll";

export function CreateTechLevel(starport, size, atmo, hydro, pop, gov) {
  let tech = Roll(1, 6);
  let description = '';
  switch (starport) {
    case 'A':
      tech += 6;
      break;
    case 'B':
      tech += 4;
      break;
    case 'C':
      tech += 2;
      break;
    case 'X':
      tech -= 4;
      break;
  }
  switch (size) {
    case 0:
    case 1:
      tech += 2;
      break;
    case 2:
    case 3:
    case 4:
      tech++;
      break;
  }
  if (atmo < 3) {
    tech++;
  } else {
    switch (atmo) {
      case 'A':
      case 'B':
      case 'C':
      case 'D':
      case 'E':
      case 'F':
        tech++;
        break;
    }
  }
  switch (hydro) {
    case "0-5%":
    case "86-95%":
      tech++;
      break;
    case "96-100%":
      tech += 2;
      break;
  }
  switch (pop) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 8:
      tech++;
      break;
    case 9:
      tech += 2;
      break;
    case 10:
      tech += 4;
      break;
  }
  switch (gov) {
    case 0:
    case 5:
      tech++;
      break;
    case 7:
      tech += 2;
      break;
    case 13:
    case 14:
      tech -= 2;
      break;
  }

  const techRoll = tech;

  //Description of each tech level?

  //Communications
  if(tech<3){
    description += 'There is no telecommunication system whatsoever here except for whatever facilities the starport offers. ';
  }else if(tech>=4&&tech<=6){
    description += 'Radio and telephone communications between major cities exists but no satellite facilites. ';
  }else if(tech==7||tech==8){
    description += 'Advanced communications grids span the entire planet. ';
  }else{
    description += 'Global communication satellites are cheap and easy to deploy, making telecommunications available from anywhere on the planet. '
  }

  //Environmental Limits
  switch(atmo){
    case 0:
    case 1:
      if(tech<8){
        description += 'At this tech level, the population cannot maintain or repair their life support systems and are likely doomed. ';
      }
      break;
    case 2:
    case 3:
      if(tech<5){
        description += 'At this tech level, the population cannot maintain or repair their life support systems and are likely doomed. ';
      }
      break;
    case 4:
    case 7:
    case 9:
      if(tech<3){
        description += 'At this tech level, the population cannot maintain or repair their life support systems and are likely doomed. ';
      }
      break;
    case 10:
      if(tech<8){
        description += 'At this tech level, the population cannot maintain or repair their life support systems and are likely doomed. ';
      }
      break;
    case 11:
      if(tech<9){
        description += 'At this tech level, the population cannot maintain or repair their life support systems and are likely doomed. ';
      }
      break;
    case 12:
      if(tech<10){
        description += 'At this tech level, the population cannot maintain or repair their life support systems and are likely doomed. ';
      }
      break;
    case 13:
    case 14:
      if(tech<5){
        description += 'At this tech level, the population cannot maintain or repair their life support systems and are likely doomed. ';
      }
      break;
    case 15:
      if(tech<8){
        description += 'At this tech level, the population cannot maintain or repair their life support systems and are likely doomed. ';
      }
      break;
  }

  if(tech<0){
    tech=0;
  }else if(tech>=15){
    tech='F';
  }else{
    switch(tech){
      case 10:
        tech='A';
        break;
      case 11:
        tech='B';
        break;
      case 12:
        tech='C';
        break;
      case 13:
        tech='D';
        break;
      case 14:
        tech='E';
        break;
    }
  }

  return {tech, description, techRoll};
}
