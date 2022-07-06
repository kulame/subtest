import { ApiPromise, WsProvider } from '@polkadot/api';

export async function connect() {
    const wsProvider = new WsProvider("wss://rpc.polkadot.io");
    const api = await ApiPromise.create({provider:wsProvider})

    const unsub = await api.query.system.account('',acc =>console.log);
    console.log("------------")
    console.log(unsub)
    console.log(typeof unsub)
    unsub()
}