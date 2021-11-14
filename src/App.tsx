import React from 'react';
import Graph from './components/Graph';
import Assets from './screens/Assets';
import TopCrypto from './screens/TopCrypto';
import { View } from 'react-native';

export default function App() {
  return (
    <View style = {{paddingTop: 30, backgroundColor: 'black', flex: 1}}>
      {/*<TopCrypto/> */}
      <Assets/>
    </View>
  );
}

export interface Transaction
{
  type: 'crypto' | 'stock',
  orderType: 'buy' | 'sell' | 'transfer',
  assetName: string,
  amount: number, //shares if stock, amount if crypto
  dateTime: string, //MM-DD-YYYY-HH-MM (millitary time)
  price: number,
  feeType: 'USD' | 'Native Asset',
  fee: number,
}

export const testTransactionsAsJSON: Transaction[] = [
  {
    type: 'crypto',
    orderType: 'buy',
    assetName: 'BTC',
    amount: 2.3,
    dateTime: '01-26-2019-13-00',
    price: 40000,
    feeType: 'USD',
    fee: 0.10,
  },
  {
    type: 'crypto',
    orderType: 'transfer',
    assetName: 'BTC',
    amount: 2.2,
    dateTime: '02-13-2021-09-42',
    price: 50000,
    feeType: 'Native Asset',
    fee: 0.1,
  },
  {
    type: 'crypto',
    orderType: 'sell',
    assetName: 'BTC',
    amount: 2.2,
    dateTime: '11-13-2021-09-42',
    price: 60000,
    feeType: 'USD',
    fee: 0.10,
  },
  {
    type: 'stock',
    orderType: 'buy',
    assetName: 'MSFT',
    amount: 1,
    dateTime: '01-26-2019-13-00',
    price: 200,
    feeType: 'USD',
    fee: 0,
  },
  {
    type: 'stock',
    orderType: 'sell',
    assetName: 'MSFT',
    amount: 0.5,
    dateTime: '11-13-2021-09-42',
    price: 150,
    feeType: 'USD',
    fee: 0,
  },
];
