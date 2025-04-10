import axios from 'axios';

type GridResponse = {
    grid: string[][];
    code_secret: string;
};

const API_BASE_URL =
    import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

export const ApiService = {
    getGridWithCode: async (biasChar = '') => {
        const response = await axios.get(`${API_BASE_URL}/grid-generator`, {
            params: { bias: biasChar },
        });
        return response.data as GridResponse;
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
