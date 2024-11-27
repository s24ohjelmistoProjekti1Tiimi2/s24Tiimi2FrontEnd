export function getProducts() {
    return fetch(import.meta.env.VITE_API_PRODUCTS_URL)
    .then(response => {
        if(!response.ok)
            throw new Error("Error in fetch: " + response.statusText)

        return response.json();
    })
}