import React, { FC } from "react";
import { Text, View, StyleSheet} from "react-native";

interface Props {
    name: string,
    symbol: string,
    currentPrice: number,
    priceChangePercentage7d: number,
}
const StockCard: FC<Props> = ({name, symbol, currentPrice, priceChangePercentage7d}) => {
    const priceChangeColor = priceChangePercentage7d > 0 ? 'green' : 'red';
    return(
        <View style={styles.cardWrapper}>
            <View style={styles.leftWrapper}>
                <View style={styles.titlesWrapper}>
                    <Text style={styles.title}>{name}</Text>
                    <Text style={styles.subtitle}>{symbol.toUpperCase()}</Text>
                    </View>
            </View>

            <View style={styles.rightWrapper}>
                <Text style={styles.title}>${currentPrice.toLocaleString('en-US', {currency: 'USD'})}</Text>
                <Text style={[styles.subtitle, {color: priceChangeColor}]}>{priceChangePercentage7d.toFixed(2)}%</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    cardWrapper: {
        paddingHorizontal: 16,
        marginTop: 24,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
    },
    leftWrapper: {
        flexDirection: "row",
        alignItems: 'center'
    },
    titlesWrapper: {
        marginLeft: 8,
    },
    title: {
        fontSize: 18,
        color: 'white',
    },
    subtitle: {
        fontSize: 14,
        color: '#A9ABB1',
    },
    rightWrapper: {
        alignItems: "flex-end"
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        padding: 12
    }
});
export default StockCard;