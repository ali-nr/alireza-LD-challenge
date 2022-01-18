import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {MoviesScreen} from './screens/Movies/MoviesScreen';
import {QueryClient, QueryClientProvider} from 'react-query';
import {RootStackParamList} from './NavigationTypes';
import {MovieScreen} from './screens/Movie/MovieScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();
const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="MoviesScreen">
          <Stack.Screen
            name="MoviesScreen"
            component={MoviesScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen name="MovieScreen" component={MovieScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
};
