import {MoviesData} from '../api/MoviesApi';
import {AppColors} from '../Colors';

export type Movie = {
  actors: string;
  id: string;
  poster: string;
  title: string;
  type: string;
  cinemaWorldPrice?: number;
  filmWorldPrice?: number;
};
export function movies(
  filmWorldData: MoviesData | undefined,
  cinemaWorldData: MoviesData | undefined,
): Movie[] | undefined {
  return filmWorldData?.Movies.map(filmWorldMovie => {
    const cinemaWorldMovies = cinemaWorldData?.Movies.find(cinemaWorldMovie => {
      return cinemaWorldMovie.Title === filmWorldMovie.Title;
    });

    return {
      id: filmWorldMovie.ID,
      title: filmWorldMovie.Title,
      actors: filmWorldMovie.Actors,
      poster: filmWorldMovie.Poster,
      type: filmWorldMovie.Type,
      cinemaWorldPrice: cinemaWorldMovies?.Price,
      filmWorldPrice: filmWorldMovie.Price,
    } as Movie;
  });
}

export function priceBackground(
  firstPrice?: number,
  secondPrice?: number,
): string {
  if (firstPrice === undefined || secondPrice === undefined) {
    return AppColors.neutralPriceBackgroundColor;
  }
  return firstPrice <= secondPrice
    ? AppColors.cheapPriceBackground
    : AppColors.expensivePriceBackground;
}
