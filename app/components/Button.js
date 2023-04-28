import { Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { logoutUser } from "../services/localStorage";

export const Logout = () => {
    const navigation = useNavigation();

    const onLogout = async () => {
        await logoutUser();
        navigation.navigate("Login");
    };

    return (
        <Pressable hitSlop={10} onPress={onLogout}>
            <MaterialIcons style={{ marginRight: 15 }} name="logout" size={24} color="white" />
        </Pressable>
    );
};
