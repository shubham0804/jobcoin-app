import { Pressable, StyleSheet, View } from "react-native";
import { Text, ActivityIndicator } from "react-native";

const Button = (props) => (
    <Pressable style={styles.container()} {...props}>
        <View style={styles.textContainer}>
            <Text style={styles.text()}>Login</Text>
            {props.isLoading && <ActivityIndicator size="small" />}
        </View>
    </Pressable>
);

const styles = StyleSheet.create({
    container: (props) => ({
        backgroundColor: "#334155",
        width: "90%",
        paddingVertical: 10,
        borderRadius: 6,
        marginVertical: 25,
    }),
    textContainer: {
        display: "flex",
        flexDirection: "row",
        marginLeft: "auto",
        marginRight: "auto",
    },
    text: (props) => ({
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
        marginRight: 5,
    }),
});

export default Button;
