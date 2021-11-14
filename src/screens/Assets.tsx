import React, { useState } from 'react';
import { TouchableOpacity, ScrollView, StyleSheet, Modal, Text, View, TextInput } from 'react-native';
import { Transaction } from '../App';
import Graph from '../components/Graph';

const styles = StyleSheet.create
({
    assetCard:
    {
        height: 65,
    },
    scrollView:
    {
        height: 330,
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
        height: 35,
    },
    assetsHeaderText:
    {
        color: '#00FFF0',
        fontSize: 20,
    },
    viewToggle:
    {
        width: 100,
        height: 35,
        position: 'absolute',
        right: 0,
        borderWidth: 2,
        borderColor: '#00FFF0',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    buttonText:
    {
        color: '#00FFF0',
        fontSize: 14,
    },
    addTransactionButton:
    {
        width: 300,
        height: 35,
        right: 0,
        borderWidth: 2,
        borderColor: '#00FFF0',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    addTransactionModal:
    {
        flex: 1,
        borderWidth: 2,
        borderColor: '#00FFF0',
        margin: 10,
        backgroundColor: "black",
        borderRadius: 20,
        alignItems: 'center',
    },
    closeAddTransactionModalButton:
    {
        position: 'absolute',
        width: 150,
        height: 35,
        borderWidth: 2,
        bottom: 20,
        left: 20,
        borderColor: '#00FFF0',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    finalAddTransactionModalButton:
    {
        position: 'absolute',
        width: 150,
        height: 35,
        borderWidth: 2,
        bottom: 20,
        right: 20,
        borderColor: '#00FFF0',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    textInputBox:
    {
        color: '#00FFF0',
        borderColor: '#00FFF0',
        borderWidth: 2,
        width: 300,
        paddingHorizontal: 10,
    }
});

function formatAmount(amount: number): string
{
    let retVal: string = `$${Math.abs(amount).toFixed(2)}`;
    
    if(amount >= 1000 && amount < 1000000)
    {
        retVal = `$${(Math.abs(amount)/1000).toFixed(2)}K`;
    }
    else if(amount >= 1000000 && amount < 1000000000)
    {
        retVal = `$${(Math.abs(amount)/1000000).toFixed(2)}M`;
    }
    else if(amount >= 1000000000)
    {
        retVal = `$${(Math.abs(amount)/1000000000).toFixed(2)}B`;
    }

    return retVal;
}

export default function Assets()
{
    let tempNetWorth = 10000000000.12321134;
    let tempNetWorthDollarChange = 800000;
    let tempNetWorthPercentChange = 80;
    const [selectedView, setSelectedView] = useState(2);
    const [modalVisible, setModalVisible] = useState(false);
    const viewTitles: Array<string> = ['Crypto', 'Stocks', 'Both'];
    let tempTransaction: Transaction = {
        type: 'crypto',
        orderType: 'buy',
        assetName: 'BTC',
        amount: 2.3,
        dateTime: '01-26-2019-13-00',
        price: 40000,
        feeType: 'USD',
        fee: 0.10,
    };

    return (
        <View style = {{paddingTop: 30, backgroundColor: 'black'}}>
            <View style = {styles.screenHeaderCointainer}>
                <Text style = {[styles.netWorthText, {position: 'absolute', left: 0, top: 0}]}>{'Investing'}</Text>
                <Text style = {[styles.netWorthText, {position: 'absolute', left: 0, top: 40}]}>{`$${tempNetWorth.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</Text>
                <Text style = {[tempNetWorthDollarChange >= 0 ? styles.gainText : styles.lossText, {position: 'absolute', left: 0, top: 85}]}>{`${formatAmount(tempNetWorthDollarChange)} (${tempNetWorthPercentChange}%)`}</Text>
            </View>

            <View style = {styles.graphContainer}>
                <Graph/>
            </View>            

            <View style = {styles.assetsHeader}>
                <Text style = {[styles.assetsHeaderText, {position: 'absolute', left: 0, top: 0}]}>{'Assets'}</Text>
                <TouchableOpacity style = {styles.viewToggle} onPress = {() => setSelectedView((selectedView + 1) % 3)}>
                    <Text style = {styles.buttonText}>{viewTitles[selectedView]}</Text>
                </TouchableOpacity>
            </View>

            <View style = {styles.scrollView}>
                <ScrollView>
                    {testAssets.map((asset, index) => (

                        (selectedView == 0 &&  asset.type == 'crypto') ||
                        (selectedView == 1 &&  asset.type == 'stock') ||
                        (selectedView == 2) ?
                        (
                            <View style = {styles.assetCard} key = {index}>
                                <Text style = {[styles.mainText, {position: 'absolute', left: 0, top: 11}]}> {`${asset.name}  ${asset.amount}  ${formatAmount(asset.currentPrice)}`} </Text>
                                <Text style = {[styles.accentText, {position: 'absolute', left: 0, bottom: 11}]}> {formatAmount(asset.totalValue)} </Text>
                                <Text style = {[asset.dollarChange >= 0 ? styles.gainText : styles.lossText, {position: 'absolute', right: 0, top: 11}]}> {formatAmount(asset.dollarChange)} </Text>
                                <Text style = {[asset.dollarChange >= 0 ? styles.gainText : styles.lossText, {position: 'absolute', right: 0, bottom: 11}]}> {`%${Math.abs(asset.percentChange)}`} </Text>
                            </View>
                        )
                        : null
                    ))}
                </ScrollView>
            </View>
            
            <View style = {{alignItems: 'center'}}>
                <TouchableOpacity style = {styles.addTransactionButton} onPress = {() => setModalVisible(!modalVisible)}>
                    <Text style = {styles.buttonText}>{'Add Transaction'}</Text>
                </TouchableOpacity>
            </View>
            
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(!modalVisible)}
            >
                <View style={styles.addTransactionModal}>

                    <View style = {{padding: 10}}/>

                    <Text style = {styles.mainText}>{"Type (\"crypto\" or \"stock\")"}</Text>

                    <View style = {{padding: 2}}/>

                    <TextInput 
                        style = {styles.textInputBox}
                        onEndEditing = {(value) => {
                            let temp: any = 'crypto';
                            if(value.nativeEvent.text = 'stock')
                            {
                                temp = 'stock';
                            }
                            tempTransaction.type = temp;
                        }}
                    />

                    <View style = {{padding: 10}}/>

                    <Text style = {styles.mainText}>{"Order Type (\"buy\", \"sell\", or \"transfer\")"}</Text>

                    <View style = {{padding: 2}}/>

                    <TextInput 
                        style = {styles.textInputBox}
                        onEndEditing = {(value) => {
                            let temp: any = 'buy';
                            if(value.nativeEvent.text = 'sell')
                            {
                                temp = 'sell';
                            }
                            else if(value.nativeEvent.text = 'transfer')
                            {
                                temp = 'transfer';
                            }
                            tempTransaction.type = temp;
                        }}
                    />

                    <View style = {{padding: 10}}/>

                    <Text style = {styles.mainText}>{"Asset Name (please be consistent)"}</Text>

                    <View style = {{padding: 2}}/>

                    <TextInput 
                        style = {styles.textInputBox}
                        onEndEditing = {(value) => {tempTransaction.assetName = value.nativeEvent.text}}
                    />

                    <View style = {{padding: 10}}/>

                    <Text style = {styles.mainText}>{"Amount"}</Text>

                    <View style = {{padding: 2}}/>

                    <TextInput 
                        style = {styles.textInputBox}
                        onEndEditing = {(value) => {tempTransaction.amount = +value.nativeEvent.text}}
                    />

                    <View style = {{padding: 10}}/>

                    <Text style = {styles.mainText}>{"Date and Time (MM-DD-YYYY-HH-MM)"}</Text>

                    <View style = {{padding: 2}}/>

                    <TextInput 
                        style = {styles.textInputBox}
                        onEndEditing = {(value) => {tempTransaction.dateTime = value.nativeEvent.text}}
                    />

                    <View style = {{padding: 10}}/>

                    <Text style = {styles.mainText}>{"Price"}</Text>

                    <View style = {{padding: 2}}/>

                    <TextInput 
                        style = {styles.textInputBox}
                        onEndEditing = {(value) => {tempTransaction.price = +value.nativeEvent.text}}
                    />

                    <View style = {{padding: 10}}/>

                    <Text style = {styles.mainText}>{"Fee Type (\"USD\" or \"Native Asset\")"}</Text>

                    <View style = {{padding: 2}}/>

                    <TextInput 
                        style = {styles.textInputBox}
                        onEndEditing = {(value) => {
                            let temp: any = 'USD';
                            if(value.nativeEvent.text = 'Native Asset')
                            {
                                temp = 'Native Asset';
                            }
                            tempTransaction.type = temp;
                        }}
                    />

                    <View style = {{padding: 10}}/>

                    <Text style = {styles.mainText}>{"Fee"}</Text>

                    <View style = {{padding: 2}}/>

                    <TextInput 
                        style = {styles.textInputBox}
                        onEndEditing = {(value) => {tempTransaction.fee = +value.nativeEvent.text}}
                    />

                    <View style = {{padding: 10}}/>                    

                    <TouchableOpacity style = {styles.closeAddTransactionModalButton} onPress = {() => setModalVisible(!modalVisible)}>
                        <Text style = {styles.buttonText}>{'Close'}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.finalAddTransactionModalButton} onPress = {() => {
                        setModalVisible(!modalVisible);
                        console.log(tempTransaction);
                    }}>
                        <Text style = {styles.buttonText}>{'Add Transaction'}</Text>
                    </TouchableOpacity>

                </View>
            </Modal>

            <View style = {{padding: 100}}/>   
        </View>
    );
}

interface Asset
{
    name: string,
    type: 'crypto' | 'stock',
    amount: number,
    totalValue: number,
    dollarChange: number,
    percentChange: number,
    currentPrice: number,
}


export const testAssets: Asset[] = [
    {
        name: 'BTC',
        type: 'crypto',
        amount: 2.5,
        totalValue: 100000,
        dollarChange: 500,
        percentChange: 5,
        currentPrice: 63400.89,
    },
    {
        name: 'ETH',
        type: 'crypto',
        amount: 5,
        totalValue: 25000,
        dollarChange: -500,
        percentChange: -15,
        currentPrice: 2000,
    },
    {
        name: 'MSFT',
        type: 'stock',
        amount: 100,
        totalValue: 1000000,
        dollarChange: 5000,
        percentChange: 50,
        currentPrice: 600000,
    },
    {
        name: 'BTC',
        type: 'crypto',
        amount: 2.5,
        totalValue: 100000,
        dollarChange: 500,
        percentChange: 5,
        currentPrice: 60000,
    },
    {
        name: 'ETH',
        type: 'crypto',
        amount: 5,
        totalValue: 25000,
        dollarChange: -500,
        percentChange: -15,
        currentPrice: 2000,
    },
    {
        name: 'MSFT',
        type: 'stock',
        amount: 100,
        totalValue: 1000000,
        dollarChange: 5000,
        percentChange: 50,
        currentPrice: 600000,
    },
    {
        name: 'BTC',
        type: 'crypto',
        amount: 2.5,
        totalValue: 100000,
        dollarChange: 500,
        percentChange: 5,
        currentPrice: 60000,
    },
    {
        name: 'ETH',
        type: 'crypto',
        amount: 5,
        totalValue: 25000,
        dollarChange: -500,
        percentChange: -15,
        currentPrice: 2000,
    },
    {
        name: 'MSFT',
        type: 'stock',
        amount: 100,
        totalValue: 1000000,
        dollarChange: 5000,
        percentChange: 50,
        currentPrice: 600000,
    },
    {
        name: 'BTC',
        type: 'crypto',
        amount: 2.5,
        totalValue: 100000,
        dollarChange: 500,
        percentChange: 5,
        currentPrice: 60000,
    },
    {
        name: 'ETH',
        type: 'crypto',
        amount: 5,
        totalValue: 25000,
        dollarChange: -500,
        percentChange: -15,
        currentPrice: 2000,
    },
    {
        name: 'AAPL',
        type: 'stock',
        amount: 100,
        totalValue: 1000000,
        dollarChange: 5000,
        percentChange: 50,
        currentPrice: 600000,
    },
];