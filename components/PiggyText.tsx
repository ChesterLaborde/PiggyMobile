import React from 'react';
import { Text, StyleSheet, TextStyle } from 'react-native';

type Props = {
    children: string,
    style?: TextStyle
}

const PiggyText: React.FC<Props> = ({ children, style }) => {
    return (
        <Text style={[styles.text, {...style} ]}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Avenir Next',
        fontSize: 14
    }
})

export default PiggyText;