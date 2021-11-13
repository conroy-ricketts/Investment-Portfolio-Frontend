import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Graph from '../components/Graph';

const styles = StyleSheet.create
({
    assetCard:
    {
        height: 65,
    },
    scrollView:
    {
        marginVertical: 20,
    },
    mainText:
    {
        color: '#00FFF0',
        fontSize: 14,
    },
    accentText:
    {
        color: '#545454',
        fontSize: 14,
    },
    gainText:
    {
        color: '#21DD03',
        fontSize: 14,
    },
    lossText:
    {
        color: '#F81304',
        fontSize: 14,
    },
    netWorthText:
    {
        color: '#00FFF0',
        fontSize: 30,
    },
    screenHeaderCointainer:
    {
        height: 70,
    },
    graphContainer:
    {
        height: 250,
    },
    assetsHeader:
    {
        height: 20,
    },
    assetsHeaderText:
    {
        color: '#00FFF0',
        fontSize: 20,
    },
});

function formatAmount(amount: number): string
{
    let retVal: string = `$${Math.abs(amount).toFixed(2)}`;
    
    if(amount >= 1000 && amount < 1000000)
    {
        retVal = `$${(Math.abs(amount)/1000)}K`;
    }
    else if(amount >= 1000000 && amount < 1000000000)
    {
        retVal = `$${(Math.abs(amount)/1000000)}M`;
    }
    else if(amount >= 1000000000)
    {
        retVal = `$${(Math.abs(amount)/1000000000)}B`;
    }

    return retVal;
}

export default function Assets()
{
    let tempNetWorth = 10000000000.12321134;

    return (
        <View>
            <View style = {styles.screenHeaderCointainer}>
                <Text style = {[styles.netWorthText, {position: 'absolute', left: 0, top: 0}]}>{'Investing'}</Text>
                <Text style = {[styles.netWorthText, {position: 'absolute', left: 0, top: 40}]}>{`$${tempNetWorth.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</Text>
            </View>

            <View style = {styles.graphContainer}>
                <Graph/>
            </View>            

            <View style = {styles.assetsHeader}>
                <Text style = {[styles.assetsHeaderText, {position: 'absolute', left: 0, top: 0}]}>{'Assets'}</Text>
            </View>

            <ScrollView style = {styles.scrollView}>
                {testAssets.map((asset, index) => (
                    <View style = {styles.assetCard} key = {index}>
                        <Text style = {[styles.mainText, {position: 'absolute', left: 0, top: 11}]}> {`${asset.name}  ${asset.amount}  ${formatAmount(asset.currentPrice)}`} </Text>
                        <Text style = {[styles.accentText, {position: 'absolute', left: 0, bottom: 11}]}> {formatAmount(asset.totalValue)} </Text>
                        <Text style = {[asset.dollarChange >= 0 ? styles.gainText : styles.lossText, {position: 'absolute', right: 0, top: 11}]}> {formatAmount(asset.dollarChange)} </Text>
                        <Text style = {[asset.dollarChange >= 0 ? styles.gainText : styles.lossText, {position: 'absolute', right: 0, bottom: 11}]}> {`%${Math.abs(asset.percentChange)}`} </Text>
                    </View>
                ))}
            </ScrollView>
        </View>
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