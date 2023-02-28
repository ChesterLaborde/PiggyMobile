import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
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


const PiggyList: React.FC = () => {

    const renderItem = ({ item }: { item: typeof DATA[number]}) => {
        return (
            <View style={styles.container}>
                <View style={styles.piggyContainer}>
                    <Image source={{ uri: item.img }} style={styles.img} />
                    <PiggyText>{item.title}</PiggyText>
                </View>
                <View style={styles.statusContainer}>
                    <View style={[styles.status, item.status === 'completed' ? styles.completed : styles.active]}>
                        <PiggyText style={{ textAlign: 'center'}}>{item.status}</PiggyText>
                    </View>
                </View>
            </View>
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