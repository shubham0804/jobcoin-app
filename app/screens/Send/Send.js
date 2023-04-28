import { useState } from "react";
import { View } from "react-native";
import { faker } from "@faker-js/faker";
import { useNavigation } from "@react-navigation/native";

import Button from "../Login/LoginButton";
import { styles } from "./styles";
import { Container } from "./styles";
import { SendAmountInput, JobCoinAddressInput } from "../../components/Input";
import { getLoggedInUserInfo, updateLoggedInUserInfo } from "../../services/localStorage";

const SendScreen = () => {
    const [jobCoinAddress, setJobCoinAddress] = useState("");
    const [amount, setAmount] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigation = useNavigation();

    const isSendButtonDisabled = !amount || !jobCoinAddress;

    const onAmountChange = (amount) => {
        console.log(amount);
        setAmount(amount);
    };

    const onAddressChange = (text) => {
        setJobCoinAddress(text);
    };

    onPressSend = async () => {
        setIsLoading(true);
        const loggedInUser = await getLoggedInUserInfo();
        const transaction = {
            from: loggedInUser.userAddress,
            to: jobCoinAddress,
            amount,
            hash: faker.finance.ethereumAddress(),
            nounce: faker.datatype.number({
                min: 50,
                max: 9999,
            }),
            datetime: new Date().toString(),
        };
        loggedInUser.transactionList.unshift(transaction);
        loggedInUser.balance -= amount;
        await updateLoggedInUserInfo(loggedInUser);
        setJobCoinAddress("");
        setAmount("");
        setIsLoading(false);
        navigation.navigate("Dashboard", loggedInUser);
    };

    return (
        <Container>
            <View style={{ marginTop: 25 }}>{/* <SubHeading>Send JobCoins</SubHeading> */}</View>
            <View style={styles.inputButtonContainer}>
                <SendAmountInput value={amount} onChangeText={onAmountChange} />
                <JobCoinAddressInput value={jobCoinAddress} onChangeText={onAddressChange} />
                <Button
                    disabled={isSendButtonDisabled}
                    isLoading={isLoading}
                    text="Send"
                    onPress={onPressSend}
                />
            </View>
        </Container>
    );
};

export default SendScreen;
