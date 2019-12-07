import { Film } from './film';

export class FilmsWrapper {
  public readonly page: number;
  public readonly total_results: number;
  public readonly total_pages: number;
  public readonly results: Film[];
}
