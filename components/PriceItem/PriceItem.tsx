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
      <Caption style={styles.price}>
        {price !== undefined ? `$${price}` : 'N/A'}
      </Caption>
    </View>
  );
};

const styles = StyleSheet.create({
  priceItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    width: '100%',
    height: 30,
    paddingHorizontal: 10,
  },
  price: {width: 40, height:20},
});
