import { Team } from '@model/Team';

export interface Game {
  id: number;
  date: Date;
  homeTeam: Team;
}
