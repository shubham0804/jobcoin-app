import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginScreen from "./app/screens/Login/Login";
import DashboardScreen from "./app/screens/Dashboard/Dashboard";
import SendScreen from "./app/screens/Send/Send";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Logout } from "./app/components/Button";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const DashboardNavigator = () => (
    <Tab.Navigator
        screenOptions={{
            tabBarStyle: {
                height: 65,
                backgroundColor: "#334155",
                paddingBottom: 10,
                borderTopWidth: 0,
            },
            headerStyle: {
                backgroundColor: "#334155",
            },
            headerTitleStyle: {
                color: "#94A3B8",
            },
            headerTitleAlign: "center",
        }}
    >
        <Tab.Screen
            name="Dashboard"
            component={DashboardScreen}
            options={{
                tabBarIcon: ({ focused }) => {
                    return (
                        <MaterialIcons
                            name="dashboard"
                            size={24}
                            color={focused ? "#496ce9" : "white"}
                        />
                    );
                },
                headerRight: () => <Logout />,
            }}
        />
        <Tab.Screen
            name="Send"
            component={SendScreen}
            options={{
                headerTitle: "Send JobCoins",
                tabBarIcon: ({ focused }) => (
                    <FontAwesome name="send" size={24} color={focused ? "#496ce9" : "white"} />
                ),
            }}
        />
    </Tab.Navigator>
);

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name="DashboardNavigator" component={DashboardNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
