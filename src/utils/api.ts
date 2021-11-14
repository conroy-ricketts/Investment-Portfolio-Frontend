const request = async (url: string, init: RequestInit = {}) => {
    console.log(`https://127.0.0.1${url}`,)
    const res = await fetch(`https://127.0.0.1${url}`, {headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'  // I added this line
    },...init});
    return res.json()
}

export enum AssetType {
    STOCK = 'stock',
    CRYPTO = 'crypto'
}

export interface CreateTransactionDto {
    assetId: string;
    assetType: AssetType;
    amount: number;
    assetPrice: number;
  }

export const createTransaction = (dto: CreateTransactionDto) => {
    return request('/transactions', {method: 'POST', body: JSON.stringify(dto), headers: {'Content-Type': 'application/json'}})
}

export const getAssets = (userId: string) => {
    return request(`/transactions/cards/${userId}`)
}

export const getPortfolio = (userId: string) => {

    return request(`/users/${userId}/portfolio`)
}