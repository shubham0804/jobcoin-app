import { StyleSheet, View } from "react-native";

const Card = ({ children, style }) => <View style={[styles.container, style]}>{children}</View>;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#1e1f25",
        width: "45%",
        borderRadius: 15,
        padding: 20,
        marginVertical: 20,
    },
});

export default Card;
