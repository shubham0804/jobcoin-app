import { TextInput } from "@react-native-material/core";

export const SendAmountInput = (props) => (
    <TextInput
        color="#ffffff"
        label="Amount"
        style={{ color: "white", marginBottom: 15 }}
        inputContainerStyle={{ width: "90%" }}
        helperText="Amount To Send"
        inputStyle={{ color: "white" }}
        maxLength={30}
        variant="standard"
        keyboardType="decimal-pad"
        {...props}
    />
);

export const JobCoinAddressInput = (props) => (
    <TextInput
        color="#ffffff"
        label="JobCoin Address"
        style={{ color: "white" }}
        inputContainerStyle={{ width: "90%" }}
        helperText="Address to send to"
        inputStyle={{ color: "white" }}
        maxLength={30}
        variant="standard"
        {...props}
    />
);
