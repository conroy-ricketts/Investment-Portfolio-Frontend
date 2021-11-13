import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const CryptoCard = () => {
    return(
        <View style={styles.cardWrapper}>

            <View style={styles.leftWrapper}>
                <Image source={{uri: "https://en.wikipedia.org/wiki/Ethereum#/media/File:Ethereum-icon-purple.svg"}}/>
                <View style={styles.titlesWrapper} />
                    <Text style={styles.title}>Ethereum</Text>
                    <Text style={styles.subtitle}>ETH</Text>
            </View>

            <View style={styles.rightWrapper}>
                <Text style={styles.title}>Ethereum</Text>
                <Text style={styles.subtitle}>ETH</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    cardWrapper: {},
    leftWrapper: {},
    titlesWrapper: {},
    title: {},
    subtitle: {},
    rightWrapper: {},
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        padding: 12
    }
});
export default CryptoCard;