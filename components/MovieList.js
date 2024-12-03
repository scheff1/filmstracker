import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet } from 'react-native';

const MovieList = ({ movies, addMovie, removeMovie, markAsWatched }) => {
const [title, setTitle] = useState('');
const [note, setNote] = useState('');

const handleAddMovie = () => {
    if (title && note) {
        addMovie({ title, note });
        setTitle('');
        setNote('');
    }
};

return (
    <View style={styles.container}>
        <View style={styles.inputs}>
            <TextInput style={styles.input} placeholder="Название фильма" value={title} onChangeText={setTitle} />
            <TextInput style={styles.input} placeholder="Заметка" value={note} onChangeText={setNote} />
            <Button title="Добавить фильм" onPress={handleAddMovie} />
            <FlatList style={styles.list}
                data={movies}
                keyExtractor={(item) => item.title}
                renderItem={({ item }) => (
                    <View style={styles.filmlist}>
                        <View style={styles.filmtext}>
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.note}>{item.note}</Text>
                        </View>
                        <View style={styles.filmbuttons}>
                            <Button title="Удалить" onPress={() => removeMovie(item)} />
                            <Button title="Просмотрено" onPress={() => markAsWatched(item)} />
                        </View>
                    </View>
                )}
            />
        </View>
    </View>
);
};

const styles = StyleSheet.create ({
    container: {
        backgroundColor: '#252C3C',
        flex: 1,
        flexDirection: 'column',
        overflow: 'scroll',
        padding: 12,
    },
    input: {
        padding: 10,
        backgroundColor: '#252C3C',
        color: '#FFFFFF',
        borderColor: '#FFFFFF',
        borderWidth: 2,
        borderRadius: 8,
    },
    inputs: {
        flex: 1,
        flexDirection: 'column',
        gap: 20,
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
    list: {
        marginTop: 60,
    },
    title: {
        fontSize: 32,
    },
    filmbuttons: {
        flex: 1,
        flexDirection: 'column',
        gap: 12,
    },
});

export default MovieList;
