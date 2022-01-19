import {render} from '@testing-library/react-native';
import React from 'react';
import {PriceItem} from '../PriceItem/PriceItem';

describe('PriceItem', () => {
  test('Renders price information', () => {
    const {getByText} = render(
      <PriceItem sourceTitle="title 1" backgroundColor={'red'} price={20} />,
    );

    expect(getByText('title 1')).toBeTruthy();
    expect(getByText('$20')).toBeTruthy();
  });

  test('Renders price N/A if price is not available', () => {
    const {getByText} = render(
      <PriceItem sourceTitle="title 1" backgroundColor={'red'} />,
    );

    expect(getByText('title 1')).toBeTruthy();
    expect(getByText('N/A')).toBeTruthy();
  });
});
