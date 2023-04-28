import { Text, View, StyleSheet } from "react-native";
import Card from "../Card";

const BalanceTransactionCard = ({ balance, transactions }) => {
    return (
        <View style={styles.balananceTransactionsContainer}>
            <Card>
                <Text style={styles.cardHeading}> Balance</Text>
                <Text style={styles.cardValue}>{balance}</Text>
            </Card>
            <Card>
                <Text style={styles.cardHeading}> Transactions</Text>
                <Text style={styles.cardValue}>{transactions.length}</Text>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    cardHeading: {
        color: "white",
        fontSize: 18,
        marginBottom: 10,
        textAlign: "center",
    },
    cardValue: {
        color: "#496ce9",
        fontSize: 25,
        fontWeight: "bold",
        textAlign: "center",
    },
    balananceTransactionsContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        gap: 10,
    },
});

export default BalanceTransactionCard;
