import { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import * as NavigationBar from "expo-navigation-bar";
import { useRoute } from "@react-navigation/native";

import styles from "./Dashboard.styles";
import ChartCard from "../../components/Dashboard/Chart";
import BalanceTransactionCard from "../../components/Dashboard/BalanceTransaction";
import DataTableCard from "../../components/Dashboard/DataTable";
import { getLoggedInUserInfo } from "../../services/localStorage";
import { View } from "react-native";

const DashboardScreen = () => {
    const [balance, setBalance] = useState(0);
    const [transactionList, setTransactionList] = useState([]);
    const route = useRoute();

    useEffect(() => {
        NavigationBar.setBackgroundColorAsync("#101213");
    }, []);

    useEffect(() => {
        getAddressInfo();
    }, [route.params]);

    const getAddressInfo = async () => {
        let info = route.params;
        if (!info) {
            info = await getLoggedInUserInfo();
        }
        setBalance(info.balance);
        setTransactionList(info.transactionList);
        return;
    };

    return (
        <ScrollView style={styles.container}>
            {!!transactionList.length && balance && (
                <View>
                    <BalanceTransactionCard balance={balance} transactions={transactionList} />
                    <ChartCard transactions={transactionList} />
                    <DataTableCard transactions={transactionList} />
                </View>
            )}
        </ScrollView>
    );
};

export default DashboardScreen;
