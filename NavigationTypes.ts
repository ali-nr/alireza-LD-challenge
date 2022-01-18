import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Movie} from './helpers/MoviesHelper';

export type RootStackParamList = {
  MoviesScreen: undefined;
  MovieScreen: {movie: Movie};
};

export type NavigationProps = NativeStackScreenProps<
  RootStackParamList,
  'MoviesScreen'
>;
