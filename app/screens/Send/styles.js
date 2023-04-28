import { StyleSheet } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
    background-color: #101213;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    /* justify-content: center; */
`;

export const styles = StyleSheet.create({
    inputButtonContainer: {
        width: "100%",
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
