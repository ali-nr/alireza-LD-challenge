import React from 'react';
import {PreviewCard} from './PreviewCard';
import {render} from '@testing-library/react-native';

describe('Preview Card', () => {
  test('Renders preview card with the right content', async () => {
    const props = {
      movieTitle: 'movie1',
      imageUrl: 'url',
      cinemaWorldPrice: 22,
      filmWorldPrice: 26,
    };

    const {getByText, queryByText} = render(<PreviewCard {...props} />);

    expect(getByText(props.movieTitle)).toBeTruthy();
    expect(queryByText(/Cinema World/i)).toBeTruthy();
    expect(queryByText(/\$22/i)).toBeTruthy();
    expect(queryByText(/Film World/i)).toBeTruthy();
    expect(queryByText(/\$26/i)).toBeTruthy();
  });
});
