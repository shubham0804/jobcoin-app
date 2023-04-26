import axios from "axios";

export const jobcoinAPI = axios.create({
    baseURL: "https://jobcoin.gemini.com/PutNewWorldHere/api",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});
