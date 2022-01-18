import React, {FunctionComponent} from 'react';
import {StyleSheet, View} from 'react-native';
import {Caption} from 'react-native-paper';

type Props = {
  sourceTitle: string;
  price?: number;
  backgroundColor: string;
};

export const PriceItem: FunctionComponent<Props> = props => {
  const {sourceTitle, price, backgroundColor} = props;
  return (
    <View style={[styles.priceItem, {backgroundColor}]}>
      <Caption>{sourceTitle}</Caption>
      <Caption>{price !== undefined ? `$${price}` : 'N/A'}</Caption>
    </View>
  );
};

const styles = StyleSheet.create({
  priceItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 10,
  },
});
