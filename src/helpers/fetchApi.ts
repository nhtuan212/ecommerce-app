// const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export default async function fetchApi(
    endpoint: string,
    options?: RequestInit,
) {
    // const url = `${BASE_URL}${endpoint}`;
    const url = endpoint;

    return await fetch(url, {
        headers: {
            "Content-Type": "application/json",
        },
        ...options,
    })
        .then(res => res.json())
        .catch(err => {
            throw new Error(`Failed to fetch from ${endpoint}`, err);
        });
}
