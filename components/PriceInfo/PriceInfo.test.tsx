import React from 'react';
import TestRenderer from 'react-test-renderer';
import {PriceItem} from '../PriceItem/PriceItem';
import {PriceInfo} from './PriceInfo';

describe('PriceInfo', () => {
  test('Renders two instances of PriceInfo with the cheap color set to cinema world price', () => {
    const props = {
      movieTitle: 'movie1',
      imageUrl: 'url',
      cinemaWorldPrice: 22,
      filmWorldPrice: 26,
    };

    const testRenderer = TestRenderer.create(<PriceInfo {...props} />);

    const testInstance = testRenderer.root;

    expect(testInstance.findAllByType(PriceItem).length).toBe(2);
    expect(
      testInstance.findAllByType(PriceItem)[0].props.backgroundColor,
    ).toEqual('#66bb6a');

    expect(
      testInstance.findAllByType(PriceItem)[1].props.backgroundColor,
    ).toEqual('#ef5350');
  });

  test('Renders two instances of PriceInfo with the cheap color set to film world price', () => {
    const props = {
      movieTitle: 'movie2',
      imageUrl: 'url',
      cinemaWorldPrice: 26,
      filmWorldPrice: 22,
    };

    const testRenderer = TestRenderer.create(<PriceInfo {...props} />);

    const testInstance = testRenderer.root;

    expect(testInstance.findAllByType(PriceItem).length).toBe(2);
    expect(
      testInstance.findAllByType(PriceItem)[0].props.backgroundColor,
    ).toEqual('#ef5350');

    expect(
      testInstance.findAllByType(PriceItem)[1].props.backgroundColor,
    ).toEqual('#66bb6a');
  });
});
