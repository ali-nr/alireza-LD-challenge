import {cinemaWorldData, filmWorldData} from '../TestData';
import {movies, priceBackground} from './MoviesHelper';

describe('MoviesHelper', () => {
  it('Should return correct movies format', () => {
    const allMovies = movies(filmWorldData, cinemaWorldData);

    expect(allMovies).toMatchSnapshot();
  });

  it('Should return the correct color based on price', () => {
    const cheapPriceColor = priceBackground(33, 37);
    expect(cheapPriceColor).toEqual('#66bb6a');

    const expensivePriceColor = priceBackground(37, 33);
    expect(expensivePriceColor).toEqual('#ef5350');

    const neutralPriceColor = priceBackground(37, undefined);
    expect(neutralPriceColor).toEqual('#26c6da');
  });
});
