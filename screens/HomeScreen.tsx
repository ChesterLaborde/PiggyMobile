import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

const HomeScreen: React.FC = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text>This is Home</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default HomeScreen;