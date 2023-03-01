import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image } from 'react-native';

const ThankYouScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.thx}>Thank you!</Text>
            <Text style={styles.nft}>You got the following NFT</Text>
            <View style={styles.nftContainer}>
                <Image source={{ uri: 'https://picsum.photos/seed/nacho/200' }} style={styles.img} />
                <View style={styles.txtContainer}>
                    <Text style={styles.txt}>I helped Mateo</Text>
                    <Text style={styles.txt}>to buy a new</Text>
                    <Text style={styles.txt}>camera</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 24,
        justifyContent: 'center',
        marginTop: -120
    },
    thx: {
        textAlign: 'center',
        fontSize: 26,
        fontFamily: 'Avenir Next'
    },
    nft: {
        textAlign: 'center',
        fontSize: 20,
        fontFamily: 'Avenir Next',
        marginBottom: 20
    },
    nftContainer: {
        borderRadius: 50,
        height: 450,
        backgroundColor: '#775654',
        padding: 24
    },
    img: {
        height: 200,
        width: 200,
        borderTopLeftRadius: 100,
        borderBottomRightRadius: 100,
        alignSelf: 'center',
        marginTop: 20
    },
    txt: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '500',
        marginBottom: 5
    },
    txtContainer: {
        marginTop: 25
    }

});

export default ThankYouScreen;