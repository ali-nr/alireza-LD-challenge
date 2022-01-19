import React, {FunctionComponent} from 'react';
import {StyleSheet, View} from 'react-native';
import {priceBackground} from '../../helpers/MoviesHelper';
import {PriceItem} from '../PriceItem/PriceItem';

type Props = {
  cinemaWorldPrice?: number;
  filmWorldPrice?: number;
};

export const PriceInfo: FunctionComponent<Props> = props => {
  const {filmWorldPrice, cinemaWorldPrice} = props;
  return (
    <View style={styles.priceInfo}>
      <PriceItem
        sourceTitle="Cinema World"
        price={cinemaWorldPrice}
        backgroundColor={priceBackground(cinemaWorldPrice, filmWorldPrice)}
      />
      <PriceItem
        sourceTitle="Film World"
        price={filmWorldPrice}
        backgroundColor={priceBackground(filmWorldPrice, cinemaWorldPrice)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  priceInfo: {
    justifyContent: 'flex-end',
    flexGrow: 1,
    flexWrap: 'nowrap',
  },
});
