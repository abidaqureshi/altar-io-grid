import axios from 'axios';

const API_BASE_URL =
    import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

export const ApiService = {
    getGrid: async () => {
        const response = await axios.get(`${API_BASE_URL}/grid-generator`);
        return response.data.grid;
    },

    getCode: async () => {
        const response = await axios.get(`${API_BASE_URL}/code`);
        return response.data.code;
    },

    setBias: async (char: string) => {
        const response = await axios.post(`${API_BASE_URL}/bias`, { char });
        return response.data;
    },
};
