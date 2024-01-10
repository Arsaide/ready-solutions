import axios, { AxiosResponse } from 'axios';

interface Product {
    id: number;
    title: string;
    images: string[];
}

interface ApiResponse {
    products: Product[];
}

const API_URL = 'https://url';

async function fetchData(): Promise<ApiResponse> {
    try {
        const response: AxiosResponse<ApiResponse> = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.log('Error');
        throw error;
    }
}

export { fetchData };