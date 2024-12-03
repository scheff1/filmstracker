import React from 'react';
import { View, FlatList, Text, Button, StyleSheet } from 'react-native';

const WatchedMovies = ({ watchedMovies, rateMovie }) => {
const handleRating = (title, rating) => {
    rateMovie(title, rating);
};

return (
    <View style={styles.container}>
        <FlatList
            data={watchedMovies}
            keyExtractor={(item) => item.title}
            renderItem={({ item }) => (
                <View style={styles.filmlist}>
                    <View style={styles.filmtext}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.note}>{item.note}</Text>
                    </View>
                    {item.rating === null ? (
                    <View style={styles.filmrate}>
                    {[1, 2, 3, 4, 5].map(rating => (
                    <Button 
                        key={rating} 
                        title={rating}
                        onPress={() => handleRating(item.title, rating)} 
                    />
                    ))}
                    </View>
                    ) : (
                    <Text style={styles.rate}>Оценка: {item.rating}</Text>
                    )}
                </View>
            )}
        />
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
        overflow: 'scroll',
    },
    title: {
        fontSize: 32,
    },
    filmlist: {
        flex: 1,
        gap: 20,
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
        padding: 12,
        borderRadius: 8,
        marginTop: 20,
    },
    filmrate: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 12,
    }
});

export default WatchedMovies;