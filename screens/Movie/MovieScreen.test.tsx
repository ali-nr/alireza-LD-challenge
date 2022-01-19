import {NavigationContainer} from '@react-navigation/native';
import {render} from '@testing-library/react-native';
import React from 'react';
import {MovieScreen} from './MovieScreen';

describe('MovieScreen', () => {
  it('Renders single movie screen ', () => {
    const {queryByText} = render(
      // linting complains about some navigation and route props are missing but we don't need to provide for testing
      <NavigationContainer>
        <MovieScreen
          navigation={{setOptions: jest.fn()}}
          route={{
            params: {
              movie: {
                actors: 'actor1, actor2',
                id: 'id',
                poster: 'url',
                title: 'title',
                type: 'type',
                cinemaWorldPrice: 20,
                filmWorldPrice: 21,
              },
            },
          }}
        />
      </NavigationContainer>,
    );

    expect(queryByText(/Actors: actor1, actor2/i)).toBeTruthy();
    expect(queryByText(/title/i)).toBeTruthy();
    expect(queryByText(/\$20/i)).toBeTruthy();
    expect(queryByText(/\$21/i)).toBeTruthy();
  });
});
