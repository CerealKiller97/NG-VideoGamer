import { Team } from '@model/Team';

export interface Player {
  id: number;
  firstName: string;
  lastName: string;
  position: string;
  heightFeet: number;
  height_inches: number;
  weightPounds: string;
  team: Team;
}
