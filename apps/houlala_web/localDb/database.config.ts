import Dexie from "dexie";

const database = new Dexie("houlalaDb");

database.version(1).stores({
    offlineOrders: '++id,locationId,locationName,totalQuantity,totalPrice,payMentMode'
});

export const OfflineOrderTable = database.table('offlineOrders');

export default database;