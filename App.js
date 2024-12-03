import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen';
import MovieList from './components/MovieList';
import WatchedMovies from './components/WatchedMovies';

const Stack = createStackNavigator();

const App = () => {
  const [movies, setMovies] = useState([]);
  const [watchedMovies, setWatchedMovies] = useState([]);

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  const removeMovie = (movieToRemove) => {
    setMovies(movies.filter(movie => movie.title !== movieToRemove.title));
  };

  const markAsWatched = (movieToWatch) => {
    removeMovie(movieToWatch);
    setWatchedMovies([...watchedMovies, { ...movieToWatch, rating: null }]);
  };

  const rateMovie = (title, rating) => {
    setWatchedMovies(watchedMovies.map(movie => 
      movie.title === title ? { ...movie, rating } : movie
    ));
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home">
          {(props) => (
            <HomeScreen {...props} />
          )}
        </Stack.Screen>
        <Stack.Screen name="MovieList">
          {(props) => (
            <MovieList {...props} movies={movies} addMovie={addMovie} removeMovie={removeMovie} markAsWatched={markAsWatched} />
          )}
        </Stack.Screen>
        <Stack.Screen name="WatchedMovies">
          {(props) => (
            <WatchedMovies {...props} watchedMovies={watchedMovies} rateMovie={rateMovie} />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;