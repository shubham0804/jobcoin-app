import AsyncStorage from "@react-native-async-storage/async-storage";
import { dummyTransactionList, dummyBalance } from "./dummyData";

export const loginInit = async (address) => {
    const dummyAddressInfo = {
        balance: dummyBalance(),
        transactionList: dummyTransactionList(address),
        userAddress: address,
    };
    await AsyncStorage.setItem("addressInfo", JSON.stringify(dummyAddressInfo));
    return dummyAddressInfo;
};

export const getLoggedInUserInfo = async () => {
    const info = await AsyncStorage.getItem("addressInfo");
    return JSON.parse(info);
};

export const updateLoggedInUserInfo = async (info) => {
    let updatedInfo = info;
    if (typeof info === "object") {
        updatedInfo = JSON.stringify(info);
    }
    await AsyncStorage.setItem("addressInfo", updatedInfo);
};

export const logoutUser = async () => await AsyncStorage.removeItem("addressInfo");
