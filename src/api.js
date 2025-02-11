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


export const loginUser = async (email, password) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/login`, { email, password });
        console.log(response.data);
        return response.data; 
    } catch (error) {
        throw new Error("Login failed: " + error.response?.data?.message || error.message);
    }
};

export const getAllTweets = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/tweets`);
        return response.data; 
    } catch (error) {
        throw new Error("Login failed: " + error.response?.data?.message || error.message);
    }
};

export const createTweet = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/tweets/create`);
        return response.data; 
    } catch (error) {
        throw new Error("Login failed: " + error.response?.data?.message || error.message);
    }
};

export const likeTweet = async (tweetId, userId) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/likes/tweet/${tweetId}/user/${userId}`);
        return response.data;
    } catch (error) {
        throw new Error("Like tweet failed: " + error.response?.data?.message || error.message);
    }
};

export const deleteTweet = async (tweetId, userId) => {
    try {
        const response = await axios.delete(`${API_BASE_URL}/likes/tweet/${tweetId}/user/${userId}`);
        return response.data;
    } catch (error) {
        throw new Error("Like tweet failed: " + error.response?.data?.message || error.message);
    }
};

export const reTweet = async (tweetId, userId) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/retweet/tweet/${tweetId}/user/${userId}`);
        return response.data;
    } catch (error) {
        throw new Error("Like tweet failed: " + error.response?.data?.message || error.message);
    }
};

export const deleteReTweet = async (tweetId, userId) => {
    try {
        const response = await axios.delete(`${API_BASE_URL}/retweet/deleteTweet/${tweetId}/user/${userId}`);
        return response.data;
    } catch (error) {
        throw new Error("Like tweet failed: " + error.response?.data?.message || error.message);
    }
};

export const tweetDetail = async (tweetId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/tweets/tweet/${tweetId}`);
        return response.data;
    } catch (error) {
        throw new Error("Like tweet failed: " + error.response?.data?.message || error.message);
    }
};

export const commentToTweet = async (tweetId, userId, commentData) => {
    try {
        const response = await axios.post(
            `${API_BASE_URL}/comments/user/${userId}/tweet/${tweetId}`, 
            { comment: commentData.comment } 
        );
        return response.data;
    } catch (error) {
        throw new Error("Like tweet failed: " + error.response?.data?.message || error.message);
    }
};



