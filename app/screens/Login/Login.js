import { useState, useEffect } from "react";
import { ToastAndroid, View, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Container } from "./Login.styled";
import styles from "./Login.styled";
import { Header, SubHeading } from "../../components/styled/Text";
import { TextInput } from "@react-native-material/core";
import LoginButton from "./LoginButton";
import { CreateAccountText } from "./Text";
// import { jobcoinAPI } from "../../services/apiClient";
import * as NavigationBar from "expo-navigation-bar";
import { loginInit, getLoggedInUserInfo } from "../../services/localStorage";

const LoginScreen = ({ navigation }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [jobCoinAddress, setJobCoinAddress] = useState("");

    useEffect(() => {
        NavigationBar.setBackgroundColorAsync("#101213");
        getUserInfo();
    }, []);

    const getUserInfo = async () => {
        const addressInfo = await getLoggedInUserInfo();
        if (addressInfo) {
            navigation.navigate("DashboardNavigator", {
                params: addressInfo,
                screen: "Dashboard",
            });
        }
    };

    const onLoginPress = async () => {
        try {
            setIsLoading(true);
            // const response = await jobcoinAPI.get(`/addresses/${jobCoinAddress}`);
            const jobCoinInfo = await loginInit(jobCoinAddress);
            setIsLoading(false);
            setJobCoinAddress("");
            navigation.navigate("DashboardNavigator", {
                params: jobCoinInfo,
                screen: "Dashboard",
            });
        } catch (error) {
            setIsLoading(false);
            ToastAndroid.show("An unexpected error occured");
        }
    };

    return (
        <SafeAreaView>
            <Container>
                <StatusBar animated={true} backgroundColor="#334155" />
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
                <View style={styles.loginBtnContainer}>
                    <LoginButton
                        disabled={!jobCoinAddress}
                        text="Login"
                        onPress={onLoginPress}
                        isLoading={isLoading}
                    />
                    {/* <CreateAccountText /> */}
                </View>
            </Container>
        </SafeAreaView>
    );
};

export default LoginScreen;
