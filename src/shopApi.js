export function getProducts() {
    return fetch('/api/products')
    .then(response => {
        if(!response.ok)
            throw new Error("Error in fetch: " + response.statusText)

        return response.json();
    })
}