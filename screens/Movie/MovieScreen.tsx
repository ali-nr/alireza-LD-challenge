import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {FunctionComponent, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {Card, Subheading, Title} from 'react-native-paper';
import {PriceInfo} from '../../components/PriceInfo/PriceInfo';
import {RootStackParamList} from '../../NavigationTypes';

type Props = NativeStackScreenProps<RootStackParamList, 'MovieScreen'>;

export const MovieScreen: FunctionComponent<Props> = props => {
  const {poster, title, cinemaWorldPrice, filmWorldPrice, actors} =
    props.route.params.movie;

  useEffect(() => {
    props.navigation.setOptions({headerTitle: title});
  }, [props.navigation, title]);

  return (
    <View>
      <Card.Cover style={styles.image} source={{uri: poster}} />
      <View style={styles.contentContainer}>
        <Title>{title}</Title>
        <PriceInfo
          filmWorldPrice={filmWorldPrice}
          cinemaWorldPrice={cinemaWorldPrice}
        />
        <Subheading>Actors: {actors}</Subheading>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 10,
    paddingTop: 10,
    flexDirection: 'column',
    justifyContent: 'center',

    flexGrow: 1,
  },
  image: {minHeight: 500, flexGrow: 1},
});
