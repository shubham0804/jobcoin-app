import axios from "axios";

const API_BASE_URL = "https://jobcoin.gemini.com/PutNewWorldHere/api";
export const API_ADDRESS_ENDPOINT = `/addresses`;
export const API_TRANSACTIONS_ENDPOINT = `/transactions`;

export const jobcoinAPI = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});
