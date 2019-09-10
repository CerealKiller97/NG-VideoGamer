import { Genre } from '@model/Genre.model';
import { Platform } from '@model/Platform.model';
import { Screenshoot } from '@model/Screenshot.model';

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
  released: string;
  clip: any;
  parent_platforms: any;
  charts: any;
  description_raw: string;
  developers: any[];
  publishers: any[];
  tags: any[];
  website: string;
}
