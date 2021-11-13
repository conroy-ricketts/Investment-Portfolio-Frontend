import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create
({
    assetCard:
    {
        height: 65,
        borderRadius: 5,
        borderWidth: 1.5,
        borderColor: 'black',
    },
    scrollView:
    {
        marginVertical: 10,
    },
    mainText:
    {
        color: '#00FFF0',
    },
    accentText:
    {
        color: '#545454',
    },
    gainText:
    {
        color: '#21DD03',
    },
    lossText:
    {
        color: '#F81304',
    },
});

export default function Assets()
{
    return (
        <ScrollView style = {styles.scrollView}>
            {testAssets.map((asset, index) => (
                <View style = {styles.assetCard} key = {index}>
                    <Text style = {[styles.mainText, {position: 'absolute', left: 0, top: 11}]}> {`${asset.name}  ${asset.amount}`} </Text>
                    <Text style = {[styles.accentText, {position: 'absolute', left: 0, bottom: 11}]}> {`$${asset.totalValue}`} </Text>
                    <Text style = {[styles.gainText, {position: 'absolute', right: 50, top: 11}]}> {`$${asset.dollarChange}`} </Text>
                    <Text style = {[styles.gainText, {position: 'absolute', right: 50, bottom: 11}]}> {`%${asset.percentChange}`} </Text>
                    <Text style = {[styles.mainText, {position: 'absolute', right: 0, top: 11}]}> {`$${asset.currentPrice}`} </Text>
                </View>
            ))}
        </ScrollView>
    );
}

interface Asset
{
    name: string,
    amount: number,
    totalValue: number,
    dollarChange: number,
    percentChange: number,
    currentPrice: number,
}


export const testAssets: Asset[] = [
    {
        name: 'BTC',
        amount: 2.5,
        totalValue: 100000,
        dollarChange: 500,
        percentChange: 5,
        currentPrice: 60000,
    },
    {
        name: 'ETH',
        amount: 5,
        totalValue: 25000,
        dollarChange: -500,
        percentChange: -15,
        currentPrice: 2000,
    },
    {
        name: 'MSFT',
        amount: 100,
        totalValue: 1000000,
        dollarChange: 5000,
        percentChange: 50,
        currentPrice: 600000,
    },
];