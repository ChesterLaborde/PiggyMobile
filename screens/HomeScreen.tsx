import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import PiggyList from '../components/PiggyList';

const HomeScreen: React.FC = () => {
    return (
        <SafeAreaView style={styles.container}>
            <PiggyList />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 24
    }
});

export default HomeScreen;