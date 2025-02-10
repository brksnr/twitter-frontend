import axios from "axios";


const API_BASE_URL = "http://localhost:3000";

export const registerUser = async (userName, email, password) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/register`, { userName, email, password });
        return response.data;
    } catch (error) {
        throw new Error("Register failed: " + error.response?.data?.message || error.message);
    }
};