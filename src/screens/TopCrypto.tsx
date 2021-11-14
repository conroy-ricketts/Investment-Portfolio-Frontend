import React from 'react';
import { Text, StyleSheet, View, FlatList, SafeAreaView} from 'react-native';
import CryptoCard from '../components/CryptoCard';
import { SAMPLE_DATA } from '../../sampleData';
const ListHeader = () => (
    <>
        <View style={styles.titleWrapper}>
            <Text style={styles.title}>Top Crypto</Text>
        </View>
        <View style={styles.divider}/>
    </>
)

export default function TopCrypto() {
    return (
        <SafeAreaView style={styles.container}>
            
            <FlatList 
            keyExtractor={(item) => item.id}
            data={SAMPLE_DATA}
            renderItem={({ item }) => (
                <CryptoCard
                name={item.name}
                symbol={item.symbol}
                currentPrice={item.current_price}
                priceChangePercentage7d={item.price_change_percentage_7d_in_currency}
                logoUrl={item.image}
                />
            )}
            ListHeaderComponent={<ListHeader/>}
            />

            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    titleWrapper: {
        marginTop: 20,
        paddingHorizontal: 16,
    },
    divider: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: '#A9ABB1',
        marginHorizontal: 16,
        marginTop: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#00FFF0',
    }
});