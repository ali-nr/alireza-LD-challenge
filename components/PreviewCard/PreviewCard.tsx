import React, {FunctionComponent} from 'react';
import {StyleSheet, View} from 'react-native';
import {Card, Subheading, Text} from 'react-native-paper';
import {PriceInfo} from '../PriceInfo/PriceInfo';

type Props = {
  movieTitle: string;
  imageUrl: string;
  cinemaWorldPrice?: number;
  filmWorldPrice?: number;
};

export const PreviewCard: FunctionComponent<Props> = props => {
  const {filmWorldPrice, cinemaWorldPrice, imageUrl, movieTitle} = props;

  return (
    <Card style={styles.card} elevation={2}>
      <View style={styles.cardView}>
        <Card.Cover style={styles.cardImage} source={{uri: imageUrl}} />
        <View style={styles.cardContent}>
          <View style={styles.cardContentText}>
            <Text>{movieTitle.substring(0, 40)}{`${movieTitle.length >=40 ? '...' : ''}`}</Text>
          </View>
          <PriceInfo
            filmWorldPrice={filmWorldPrice}
            cinemaWorldPrice={cinemaWorldPrice}
          />
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 160,
    marginBottom: 20,
    padding: 0,
  },
  cardView: {
    flexGrow: 1,
    flexDirection: 'column',
  },
  cardImage: {maxHeight: 150},
  cardContent: {
    flexGrow: 1,
    width: '100%',

  },
  cardContentText: {
    width: '100%',
    maxHeight: 50,
    paddingHorizontal: 10,
    paddingTop: 10,
    overflow: 'hidden',

  },
});
