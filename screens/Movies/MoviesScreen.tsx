import React, {FunctionComponent, useEffect} from 'react';
import {
  ActivityIndicator,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import {Colors as RNColors} from 'react-native/Libraries/NewAppScreen';
import {Colors, Headline, Subheading, Title} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  useFetchCinemaWorldQuery,
  useFetchFilmWorldQuery,
} from '../../api/MoviesApi';
import {PreviewCard} from '../../components/PreviewCard/PreviewCard';
import {Movie, movies} from '../../helpers/MoviesHelper';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../NavigationTypes';

type Props = NativeStackScreenProps<RootStackParamList, 'MoviesScreen'>;

export const MoviesScreen: FunctionComponent<Props> = props => {
  const {navigation} = props;
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? RNColors.darker : RNColors.lighter,
  };

  const {
    data: cinemaWorldData,
    error: cinemaWorldError,
    isError: cinemaWorldIsError,
    isLoading: cinemaWorldIsLoading,
  } = useFetchCinemaWorldQuery();

  const {
    data: filmWorldData,
    error: filmWorldError,
    isError: filmWorldIsError,
    isLoading: filmWorldIsLoading,
  } = useFetchFilmWorldQuery();

  console.log(filmWorldData);

  useEffect(() => {
    // Data is cached so that user won't see an issue
    // here we can report to a logging system so that we are notified of the problem
    console.log(
      'There is an error: ',
      filmWorldIsError,
      cinemaWorldIsError,
      cinemaWorldError?.message,
      filmWorldError?.message,
    );
  }, [filmWorldIsError, cinemaWorldIsError, cinemaWorldError, filmWorldError]);

  function navigateToMovie(movie: Movie) {
    navigation.navigate('MovieScreen', {movie});
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <View style={styles.header}>
        <Headline>Prince's Theatre</Headline>
        <Subheading>Classic Movies at home</Subheading>
      </View>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={styles.contentContainer}>
        {cinemaWorldIsLoading ||
          (filmWorldIsLoading && (
            <ActivityIndicator animating={true} color={Colors.deepPurple800} />
          ))}

        {/* Here we could do a user friendly message to the user in case after a few tries the api still fails */}
        {filmWorldIsError ||
          (cinemaWorldIsError && (
            <Title data-testID="test" selectionColor={Colors.red900}>
              {filmWorldError?.message || cinemaWorldError?.message}
            </Title>
          ))}

        <View style={styles.moviesSection}>
          {movies(filmWorldData, cinemaWorldData)?.map(movie => (
            <TouchableOpacity
              onPress={() => {
                navigateToMovie(movie);
              }}
              key={movie.id}>
              <PreviewCard
                movieTitle={movie.title}
                imageUrl={movie.poster}
                cinemaWorldPrice={movie.cinemaWorldPrice}
                filmWorldPrice={movie.filmWorldPrice}
              />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: Platform.OS === 'android' ? 100 : 60,
  },
  header: {
    marginTop: 32,
    marginBottom: 32,
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  moviesSection: {
    marginTop: 32,
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  card: {
    width: 160,
    height: 270,
  },
  priceInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'red',
    width: '100%',
  },
});
