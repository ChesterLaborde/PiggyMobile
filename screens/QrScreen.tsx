import React from 'react';
import { View, SafeAreaView, Text, StyleSheet } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';

const QrScreen: React.FC = ({ navigation }) => {

    const onSuccess = (qrData: any) => {
        const { data } = qrData;
        console.log(data);
        navigation.push('Piggy');
    }

    return (
        <QRCodeScanner
            showMarker
            cameraStyle={styles.camera}
            onRead={onSuccess}
            flashMode={RNCamera.Constants.FlashMode.off}
        />
    )
};

const styles = StyleSheet.create({
    centerText: {
        flex: 1,
        fontSize: 18,
        padding: 32,
        color: '#777'
    },
    textBold: {
        fontWeight: '500',
        color: '#000'
    },
    buttonText: {
        fontSize: 21,
        color: 'rgb(0,122,255)'
    },
    buttonTouchable: {
        padding: 16
    },
    camera: {
        borderRadius: 20,
        marginRight: 16
        
    }
});

export default QrScreen;