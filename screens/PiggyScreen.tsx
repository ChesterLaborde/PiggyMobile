import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image, Pressable } from 'react-native'
import PiggyText from '../components/PiggyText';

const PiggyScreen: React.FC = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text numberOfLines={3} style={styles.txt}>Mateo needs help to buy a new camera for his youtube channel</Text>
            <Image source={{ uri: 'https://picsum.photos/seed/nacho/200'}} style={styles.img} />
            <Pressable style={styles.btn}>
                <Text style={styles.btnTxt}>Donate</Text>
            </Pressable>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 24
    },
    txt: {
        fontSize: 32,
        textAlign: 'center',
        marginTop: 20
    },
    img: {
        width: 340,
        height: 350,
        alignSelf: 'center',
        marginTop: 30,
        borderRadius: 20
    },
    btn: {
        backgroundColor: '#A33B3A',
        padding: 10,
        paddingVertical: 15,
        borderRadius: 26,
        marginTop: 40
    },
    btnTxt: {
        fontFamily: 'Avenir Next',
        fontSize: 22,
        lineHeight: 28,
        fontWeight: '400',
        color: '#fff',
        textAlign: 'center'
    }
});

export default PiggyScreen;