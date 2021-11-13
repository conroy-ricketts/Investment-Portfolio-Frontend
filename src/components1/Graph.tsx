import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { testTransactionsAsJSON } from '../App';


export default function Graph()
{
    return (
        <View>
        <Text style={styles.text}>{"Investing"}</Text>
        <TotalAmount />

        </View>

    );
}

function TotalAmount() {
    var total = 0;

    for(var i = 0; i < testTransactionsAsJSON.length; i++) {
        total += testTransactionsAsJSON[i].amount;
    }

    return(
    <View>
        <Text style={styles.text}>{total}</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: '#FFFFFF',
    }
});