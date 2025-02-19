import axios from 'axios';

const API_BASE_URL = 'https://api.example.com/phayao-attractions'; // Replace with your actual API endpoint

export const fetchAttractions = async () => {
    try {
        const response = await axios.get(API_BASE_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching attractions:', error);
        throw error;
    }
};

export const fetchAttractionById = async (id) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching attraction with id ${id}:`, error);
        throw error;
    }
};