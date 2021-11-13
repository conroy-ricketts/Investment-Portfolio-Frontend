import React, {useState, useEffect} from 'react';
import { Text, StyleSheet, View } from 'react-native';
import CryptoCard from '../Components/CryptoCard';


export default function TopCryto() {
    return (
        <View style={styles.container}>
            <View style={styles.titleWrapper}>
                <Text style={styles.title}>Top Crypto</Text>
            </View>
            <View style={styles.divider}/>
            <CryptoCard/>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    titleWrapper: {
        marginTop: 80,
        paddingHorizontal: 12,
    },
    divider: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: '#A9ABB1',
        marginHorizontal: 12,
        marginTop: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    }
});