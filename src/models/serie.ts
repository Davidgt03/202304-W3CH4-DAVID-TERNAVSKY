/* eslint-disable no-unused-vars */
export type SeriesStructure = {
  id: number;
  name: string;
  creator: string;
  year: number;
  poster: string;
  watched: boolean;
  score: number;
  emmies: number;
};

export class Series implements SeriesStructure {
  static generatedScore() {
    return Math.round(Math.random() * 5);
  }

  id: number;
  year: number;
  poster: string;
  watched: boolean;
  score: number;

  // eslint-disable-next-line max-params
  constructor(
    // eslint-disable-next-line no-unused-vars
    public name: string,
    public creator: string,
    year: number,
    id: number,
    poster: string,
    public emmies: number
  ) {
    this.id = id;
    this.year = year;
    this.poster = poster;
    this.watched = false;
    this.score = Series.generatedScore();
  }
}
