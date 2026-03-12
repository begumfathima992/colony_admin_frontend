import apiInstance from "./apiInstance";
import { API_URLs } from "./apiURLs";


export const getReservation = async (search = "", page = 1, limit = 10) => {
    try {
        const response = await apiInstance.get(
            `${API_URLs?.getReservation}?page=${page}&limit=${limit}${search && `&name=${search}` }`
        );
        return response.data;
    } catch (error) {
        return error
    }
};

export const getUsers = async (search = "") => {
    try {
        const response = await apiInstance.get(`${API_URLs?.getUsers}${search && `?name=${search}`}`);
        return response.data;
    } catch (error) {
        return error
    }
};

export const getReservationFindById = async (search = "") => {
    try {
        const response = await apiInstance.get(`${API_URLs?.getReservationFindById}`);
        return response.data;
    } catch (error) {
        return error
    }
};
export const getCancelReservation = async (search = "", page = 1, limit = 10) => {
    try {
        const response = await apiInstance.get(
            `${API_URLs?.getCancelReservations}?page=${page}&limit=${limit}${search && `&name=${search}` }`
        );
        return response.data;
    } catch (error) {
        return error
    }
};
export const contactUs = async (payload) => {
    try {
        // You must pass 'payload' as the second argument in apiInstance.post
        const response = await apiInstance.post(`${API_URLs?.contact}`, payload);
        return response; // Return the full response so the component can check statusCode
    } catch (error) {
        console.error("Service Error:", error);
        return error.response; // Return the error response so we can see why it failed
    }
};
