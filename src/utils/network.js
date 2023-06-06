const API_ROOT = 'https://rickandmortyapi.com/api/';
const API_CHARACTER = 'character'; 

export const getApiResources = async (url) => {

    try {
        const res = await fetch(url);

        if (!res.ok) {
            console.error('Could not fetch.', res.status);
            return false;
        }

        return await res.json()
    } catch (error) {
        console.error('Could not fetch.', error.message)
        return false;
    }
}

// (async () => {
//     const body = await getApiResources(API_ROOT+API_CHARACTER);
//     console.log(body);
// })();