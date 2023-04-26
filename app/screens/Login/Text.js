import { StyleSheet, View, Text } from "react-native";

export const CreateAccountText = () => (
    <View style={styles.container}>
        <Text style={styles.dontHaveText()}>Don't have account? </Text>
        <Text style={styles.createText()}>Create now</Text>
    </View>
);

const styles = StyleSheet.create({
    dontHaveText: (props) => ({
        color: "#94A3B8",
        fontSize: 15,
    }),
    createText: (props) => ({
        color: "#ffffff",
        fontSize: 15,
    }),
    container: {
        display: "flex",
        flexDirection: "row",
    },
});
