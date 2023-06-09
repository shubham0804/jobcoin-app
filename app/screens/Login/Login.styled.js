import { StyleSheet } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
    background-color: #101213;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

const styles = StyleSheet.create({
    loginBtnContainer: {
        width: "100%",
        display: "flex",
        alignItems: "center",
    },
});

export default styles;
