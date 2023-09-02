import axios from "axios";
import {AddOrder} from "../types/add.order";
import {UserInformation} from "../types/user.information";
import {OfflineOrder} from "../types/offline.order";
import {OfflineOrderTable} from "../localDb/database.config";
import {CartItem} from "../types/cart.item";
import {UnregistedUserOrder} from "../types/unregisted.user.order";

class OrderService {
    onlineOrder = async (url: string, order: AddOrder) => {
        return await axios.post(url, {
            userId: order.userId,
            locationUniqueId: order.locationUniqueId,
            cartItems: order.cartItems
        })
            .then((res) => res)
            .catch((err) => err)

    }

    updateQuantity = async (url: string) => {
        return await axios.put(url)
            .then((res) => res)
            .catch((err) => err)
    }

    deleteItemFromCart = async (url: string) => {
        return await axios.delete(url)
            .then((res) => res)
            .catch((err) => err);
    }

    confirmCommand = async (url: string, user: UserInformation) => {
        return await axios.put(url, user)
            .then((res) => res)
            .catch((err) => err);
    }

    addOfflineOrder = async (order: OfflineOrder) => {
        let totalQuantity = 0;
        let totalPrice = 0;
        const existingOrder = await OfflineOrderTable.get({locationUniqueId: order.locationUniqueId});
        if (!existingOrder) {
            await OfflineOrderTable.add(order);
        } else {
            let cartItems: Array<CartItem> = existingOrder.cartItems.filter(
                (item: CartItem) =>
                    item.productSku === order.cartItems[0].productSku
            );

            if (cartItems.length < 1) {
                existingOrder.cartItems.push(order.cartItems[0]);
            } else {
                for (let item of existingOrder.cartItems) {
                    if (item.productSku === order.cartItems[0].productSku) {
                        item.quantity += order.cartItems[0].quantity;
                        item.price += order.cartItems[0].price;
                    }
                }
            }
            for (let item of existingOrder.cartItems) {
                totalPrice += item.price;
                totalQuantity += item.quantity
            }

            existingOrder.totalPrice = totalPrice;
            existingOrder.totalQuantity = totalQuantity;

            await OfflineOrderTable.update(existingOrder.id, existingOrder);
        }
        return true;
    }

    deleteItemFromOrder = async (locationUniqueId: string, productSku: string) => {
        let totalQuantity = 0;
        let totalPrice = 0;

        const existingOrder = await OfflineOrderTable.get({locationUniqueId: locationUniqueId});

        existingOrder.cartItems.forEach((value: CartItem, index: number) => {
            if (value.productSku === productSku) {
                existingOrder.cartItems.splice(index, 1);
            }
        })

        for (let item of existingOrder.cartItems) {
            totalPrice = totalPrice! - item.price;
            totalQuantity = totalQuantity - item.quantity;
        }

        existingOrder.totalQuantity = totalQuantity * -1;
        existingOrder.totalPrice = totalPrice * -1;


        await OfflineOrderTable.update(existingOrder.id, existingOrder);

        if (existingOrder.cartItems.length < 1) {
            await OfflineOrderTable.delete(existingOrder.id);
        }
    }

    increaseQuantity = async (locationUniqueId: string, productSku: string) => {
        let totalQuantity = 0;
        let totalPrice = 0;

        const existingOrder = await OfflineOrderTable.get({locationUniqueId: locationUniqueId});

        let quantity = existingOrder.cartItems
            .filter((x: CartItem) => x.productSku === productSku)[0].quantity;

        let price = existingOrder.cartItems
            .filter((x: CartItem) => x.productSku === productSku)[0].price;

        quantity += 1;
        price += existingOrder.cartItems.filter((x: CartItem) => x.productSku === productSku)[0]
            .initialPrice;

        existingOrder.cartItems
            .filter((x: CartItem) => x.productSku === productSku)[0].quantity = quantity;

        existingOrder.cartItems
            .filter((x: CartItem) => x.productSku === productSku)[0].price = price;

        for (let item of existingOrder.cartItems) {
            totalPrice += item.price;
            totalQuantity += item.quantity;
        }

        existingOrder.totalQuantity = totalQuantity;
        existingOrder.totalPrice = totalPrice;
        await OfflineOrderTable.update(existingOrder.id, existingOrder);
    }

    decreaseQuantity = async (locationUniqueId: string, productSku: string) => {
        let totalQuantity = 0;
        let totalPrice = 0;

        const existingOrder = await OfflineOrderTable.get({locationUniqueId: locationUniqueId});

        let quantity = existingOrder.cartItems
            .filter((x: CartItem) => x.productSku === productSku)[0].quantity;

        let price = existingOrder.cartItems
            .filter((x: CartItem) => x.productSku === productSku)[0].price;

        quantity -= 1;
        price -= existingOrder.cartItems.filter((x: CartItem) => x.productSku === productSku)[0]
            .initialPrice;

        existingOrder.cartItems
            .filter((x: CartItem) => x.productSku === productSku)[0].quantity = quantity;

        existingOrder.cartItems
            .filter((x: CartItem) => x.productSku === productSku)[0].price = price;

        for (let item of existingOrder.cartItems) {
            totalPrice -= item.price * -1;
            totalQuantity -= item.quantity * -1;
        }

        existingOrder.totalQuantity = totalQuantity;
        existingOrder.totalPrice = totalPrice;

        await OfflineOrderTable.update(existingOrder.id, existingOrder);
    }

    confirmOrderAsGuest = async (url: string, order: UnregistedUserOrder) => {
        return await axios.post(url, order)
            .then((res) => res)
            .catch((err) => err);
    }

}

export default OrderService;