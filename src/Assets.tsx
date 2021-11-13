import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { testTransactionsAsJSON } from './App';

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

interface Asset
{
    type: string,
    name: string,
    amount: number,
    totalValue: number,
    dollarChange: number,
    percentChange: number,
    currentPrice: number,
}

export default function Assets()
{
    let assets: Asset[] = [];
    let testCurrentPrice: number = 100;
    
    testTransactionsAsJSON.forEach( function(transaction) {

        if(assets.length == 0)
        {
            if(transaction.orderType == 'buy')
            {
                assets.push({
                    type: transaction.type,
                    name: transaction.assetName,
                    amount: transaction.amount,
                    totalValue: transaction.amount * transaction.price,
                    dollarChange: 0,
                    percentChange: 0,
                    currentPrice: testCurrentPrice,
                });
            }
            else if(transaction.orderType == 'sell')
            {
                assets.push({
                    type: transaction.type,
                    name: transaction.assetName,
                    amount: transaction.amount * -1,
                    totalValue: transaction.amount * transaction.price,
                    dollarChange: 0,
                    percentChange: 0,
                    currentPrice: testCurrentPrice,
                });
            }
            else
            {
                assets.push({
                    type: transaction.type,
                    name: transaction.assetName,
                    amount: transaction.amount,
                    totalValue: transaction.amount * transaction.price,
                    dollarChange: 0,
                    percentChange: 0,
                    currentPrice: testCurrentPrice,
                });
            }
        }
        else
        {
            let assetAlreadyExists: boolean = false;
            let assetPosition: number = -1;

            for(let i: number = 0; i < assets.length; i++) 
            {
                if(assets[i].name == transaction.assetName)
                {
                    assetAlreadyExists = true;
                    assetPosition = i;
                }
            }

            if(assetAlreadyExists == true)
            {
                if(transaction.orderType = 'buy')
                {
                    assets[assetPosition].amount = assets[assetPosition].amount + transaction.amount;
                    assets[assetPosition].totalValue = testCurrentPrice * assets[assetPosition].amount;
                    assets[assetPosition].dollarChange = 0;
                    assets[assetPosition].percentChange = 0;
                    assets[assetPosition].currentPrice = testCurrentPrice;
                }
                else if(transaction.orderType = 'sell')
                {
                    assets[assetPosition].amount = assets[assetPosition].amount - transaction.amount;
                    assets[assetPosition].totalValue = testCurrentPrice * assets[assetPosition].amount;
                    assets[assetPosition].dollarChange = 0;
                    assets[assetPosition].percentChange = 0;
                    assets[assetPosition].currentPrice = testCurrentPrice;
                }
                else
                {
                    assets[assetPosition].amount = assets[assetPosition].amount - transaction.fee;
                    assets[assetPosition].totalValue = testCurrentPrice * assets[assetPosition].amount;
                    assets[assetPosition].dollarChange = 0;
                    assets[assetPosition].percentChange = 0;
                    assets[assetPosition].currentPrice = testCurrentPrice;
                }
            }
            else
            {
                if(transaction.orderType == 'buy')
                {
                    assets.push({
                        type: transaction.type,
                        name: transaction.assetName,
                        amount: transaction.amount,
                        totalValue: transaction.amount * transaction.price,
                        dollarChange: 0,
                        percentChange: 0,
                        currentPrice: testCurrentPrice,
                    });
                }
                else if(transaction.orderType == 'sell')
                {
                    assets.push({
                        type: transaction.type,
                        name: transaction.assetName,
                        amount: transaction.amount * -1,
                        totalValue: transaction.amount * transaction.price,
                        dollarChange: 0,
                        percentChange: 0,
                        currentPrice: testCurrentPrice,
                    });
                }
                else
                {
                    assets.push({
                        type: transaction.type,
                        name: transaction.assetName,
                        amount: transaction.amount,
                        totalValue: transaction.amount * transaction.price,
                        dollarChange: 0,
                        percentChange: 0,
                        currentPrice: testCurrentPrice,
                    });
                }
            }
        }
    });
    
    return (
        <ScrollView style = {styles.scrollView}>
            {assets.map((asset) => (
                <View style = {styles.assetCard}>
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