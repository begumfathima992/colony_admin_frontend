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
export const contactUs = async (search = "") => {
    try {
        const response = await apiInstance.get(`${API_URLs?.contact}`);
        return response.data;
    } catch (error) {
        return error
    }
};
