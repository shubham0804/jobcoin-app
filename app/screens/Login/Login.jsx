import { useState } from "react";
import { ToastAndroid, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Container } from "./Login.styled";
import { Header, SubHeading } from "../../components/styled/Text";
import { TextInput } from "@react-native-material/core";
import LoginButton from "./LoginButton";
import { CreateAccountText } from "./Text";
import { jobcoinAPI } from "../../services/api";

const LoginScreen = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [jobCoinAddress, setJobCoinAddress] = useState("");

    const onLoginPress = () => {
        try {
            setIsLoading(true);
        } catch (error) {
            setIsLoading(false);
            ToastAndroid.show("An unexpected error occured");
        }
    };

    return (
        <SafeAreaView>
            <Container>
                <View style={{ width: "100%", display: "flex", alignItems: "center" }}>
                    <Header>JobCoin</Header>
                    <SubHeading>Secure, Easy & Quick!</SubHeading>
                </View>
                <Header>Login</Header>
                <TextInput
                    color="#ffffff"
                    label="Address"
                    style={{ color: "white" }}
                    inputContainerStyle={{ width: "90%" }}
                    helperText="Enter your JobCoin address"
                    inputStyle={{ color: "white" }}
                    maxLength={30}
                    variant="standard"
                    value={jobCoinAddress}
                    onChangeText={(text) => setJobCoinAddress(text)}
                />
                <View style={{ width: "100%", display: "flex", alignItems: "center" }}>
                    <LoginButton onPress={onLoginPress} isLoading={isLoading} />
                    <CreateAccountText />
                </View>
            </Container>
        </SafeAreaView>
    );
};

export default LoginScreen;
