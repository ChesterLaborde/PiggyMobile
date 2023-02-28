import { useStripe } from '@stripe/stripe-react-native';
import React, { useEffect } from 'react';
import { View, Text, Image, FlatList, StyleSheet, Pressable } from 'react-native';
import PiggyText from './PiggyText';

const DATA = [
    {
        id: 1,
        title: 'New Camera',
        status: 'active',
        img: 'https://picsum.photos/seed/1/200'
    },
    {
        id: 2,
        title: 'New Camera',
        status: 'completed',
        img: 'https://picsum.photos/seed/2/200'
    },
    {
        id: 3,
        title: 'New Camera',
        status: 'completed',
        img: 'https://picsum.photos/seed/3/200'
    },
    {
        id: 4,
        title: 'New Camera',
        status: 'completed',
        img: 'https://picsum.photos/seed/4/200'
    },
]

const API_URL = '';

const PiggyList: React.FC = () => {
    const { initPaymentSheet, presentPaymentSheet } = useStripe();

    useEffect(() => {
        initializePaymentSheet();
    }, []);

    const fetchPaymentSheetParams = async () => {
        const response = await fetch(`${API_URL}/payment-sheet`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const { paymentIntent, ephemeralKey, customer } = await response.json();

        return {
            paymentIntent,
            ephemeralKey,
            customer,
        };
    };

    const initializePaymentSheet = async () => {
        const {
            paymentIntent,
            ephemeralKey,
            customer,
            publishableKey,
        } = await fetchPaymentSheetParams();

        const { error } = await initPaymentSheet({
            merchantDisplayName: "Example, Inc.",
            customerId: customer,
            customerEphemeralKeySecret: ephemeralKey,
            paymentIntentClientSecret: paymentIntent,
            // Set `allowsDelayedPaymentMethods` to true if your business can handle payment
            //methods that complete payment after a delay, like SEPA Debit and Sofort.
            allowsDelayedPaymentMethods: true,
            defaultBillingDetails: {
                name: 'Jane Doe',
            }
        });
    }

    const onPress = async () => {
        const { error } = await presentPaymentSheet();
        console.log(error);
    }

    const renderItem = ({ item }: { item: typeof DATA[number]}) => {
        return (
            <Pressable style={styles.container} onPress={onPress}>
                <View style={styles.piggyContainer}>
                    <Image source={{ uri: item.img }} style={styles.img} />
                    <PiggyText>{item.title}</PiggyText>
                </View>
                <View style={styles.statusContainer}>
                    <View style={[styles.status, item.status === 'completed' ? styles.completed : styles.active]}>
                        <PiggyText style={{ textAlign: 'center'}}>{item.status}</PiggyText>
                    </View>
                </View>
            </Pressable>
        )
    }

    return (
        <FlatList 
            data={DATA}
            renderItem={renderItem}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 8
    },
    piggyContainer: { 
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center' 
    },
    img: {
        width: 100,
        height: 100,
        borderTopLeftRadius: 50,
        borderBottomRightRadius: 50,
        marginRight: 20
    },
    statusContainer: {
        justifyContent: 'flex-end',
    },
    status: {
        width: 90,
        paddingHorizontal: 10,
        paddingVertical: 2,
        borderRadius: 45
    },
    active: {
        backgroundColor: '#FFDAD7'
    },
    completed: {
        backgroundColor: '#FFDEA8'
    }
})

export default PiggyList;