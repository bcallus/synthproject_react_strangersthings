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

export async function registerUser({ username, password }) {
    try {
        return fetch(`${BASE_URL}/users/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: {
                    username: username,
                    password: password
                }
            })
        }).then(response => response.json())
            .then(result => {
                return result;
        })
    }
    catch (error) {
        console.error(error);
    }
    
}