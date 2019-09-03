import { Genre } from '@model/Genre.model';
import { Screenshoot } from '@model/Screenshot.model';
import { Platform } from '@model/Platform.model';

export interface Game {
  id: number;
  name: string;
  background_image: string;
  dominantColor: string;
  genres: Genre[];
  metacritic: number;
  screenshots: Screenshoot[];
  platforms: Platform[];
  playtime: number;
  platform: any;
  slug: string;
  realesed: string;
  clip: any;
  parent_platforms: any;
  charts: any;
}
