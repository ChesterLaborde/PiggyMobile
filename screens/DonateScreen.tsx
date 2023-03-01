import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, Pressable, TextInput, ActivityIndicator } from 'react-native';

const DonateScreen = ({ navigation }) => {

    const [amount, setAmount] = useState(0);
    const [loading, setLoading] = useState(false);

    const onPress = () => {
        navigation.navigate('ThankYou');
    }

    return (
        <SafeAreaView style={styles.container}> 
            <TextInput onChangeText={(text) => setAmount(Number(text))} autoFocus keyboardType='decimal-pad' style={styles.input} />
            <Text style={styles.amount}>${amount}</Text>
            <Pressable style={styles.btn} onPress={onPress}>
                {loading ? <ActivityIndicator size={'small'} /> : <Text style={styles.btnTxt}>Donate</Text> }
            </Pressable>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 24,
    },
    input: {
        display: 'none'
    },
    amount: {
        fontSize: 36,
        fontFamily: 'Avenir Next',
        textAlign: 'center',
        marginTop: 100
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

export default DonateScreen;