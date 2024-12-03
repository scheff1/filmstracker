import React from 'react';
import { View, Button, StyleSheet, Image } from 'react-native';

const HomeScreen = ({ navigation }) => {
return (
        <View style={styles.container}>
            <Button title="Смотреть позже" onPress={() => navigation.navigate('MovieList')} />
            <Button title="Просмотренные" onPress={() => navigation.navigate('WatchedMovies')} />
        </View>
    );
};

const styles = StyleSheet.create ({
    container: {
        backgroundColor: '#252C3C',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 12,
        gap: 20,
    },
});

export default HomeScreen;