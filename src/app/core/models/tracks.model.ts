import { ArtistModel } from "./artist.model";

export interface TracksModel {
  _id: string | number;
  name: string;
  album: string;
  cover: string;
  url: string;
  artist?: ArtistModel;
  duration?: string | number;
}
