export const BASE_URL = 'https://strangers-things.herokuapp.com/api/2204-FTB-ET-WEB-PT';

export async function fetchAllPosts() {
    try {
        const response = await fetch(`${BASE_URL}/posts`);
        const data = await response.json();

        return data;
    }
    catch (error){
        throw error;
    }
}