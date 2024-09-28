export type Anime = {
  _id: number | string;
  title: string;
  synopsis: string;
  image: string;
  ranking: number;
  genres: any[];
  thumb: string;
  type: string;
  episodes: number;
};

export type Animes = {
  data: Anime[];
};
