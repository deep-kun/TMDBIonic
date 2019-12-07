export class Film {
  public readonly popularity: number;
  public readonly vote_count: number;
  public readonly video: boolean;
  public readonly poster_path: string;
  public readonly id: number;
  public readonly adult: boolean;
  public readonly backdrop_path: string;
  public readonly original_language: string;
  public readonly original_title: string;
  public readonly genre_ids: number[] | null;
  public readonly title: string;
  public readonly vote_average: number;
  public readonly overview: string;
  public readonly release_date: string;
}
